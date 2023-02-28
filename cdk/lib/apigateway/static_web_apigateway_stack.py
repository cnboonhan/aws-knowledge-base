from enum import auto
from aws_cdk import (
    Arn,
    Stack,
    aws_s3,
    aws_s3_deployment,
    aws_apigateway,
    aws_iam,
    RemovalPolicy
)
from constructs import Construct


class StaticWebApiGateway(Stack):

    def __init__(self, scope: Construct, construct_id: str,  **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        web_static_build_bucket_name = f"{construct_id}_web_static_build"
        web_static_build_bucket_iam_role_name = f"{construct_id}_web_static_build_iam_role"
        web_apigateway_name = f"{construct_id}_web_static_apigw"

        static_web_s3 = aws_s3.Bucket(
            self, id=web_static_build_bucket_name,
            auto_delete_objects=True,
            removal_policy=RemovalPolicy.DESTROY)
        aws_s3_deployment.BucketDeployment(self, f"{construct_id}_initial_index_html",
                                           destination_bucket=static_web_s3,
                                           sources=[aws_s3_deployment.Source.data("index.html", "<html>Hello World!</html>")])

        static_web_s3_iam_role = aws_iam.Role(
            self, web_static_build_bucket_iam_role_name,
            assumed_by=aws_iam.ServicePrincipal("apigateway.amazonaws.com"))

        static_web_s3_iam_role.add_to_policy(aws_iam.PolicyStatement(
            actions=['s3:GetObject'],
            resources=[f"{static_web_s3.bucket_arn}/*"]
        ))

        apigw = aws_apigateway.RestApi(self, id=web_apigateway_name)
        apigw.root.add_method(
            'GET', aws_apigateway.AwsIntegration(
                service='s3',
                integration_http_method='GET',
                path=f"{static_web_s3.bucket_name}/index.html",
                options=aws_apigateway.IntegrationOptions(
                    credentials_role=static_web_s3_iam_role,
                    integration_responses=[
                        aws_apigateway.IntegrationResponse(
                            status_code='200',
                        )
                    ],
                ),
            ),
            method_responses=[
                aws_apigateway.MethodResponse(
                    status_code='200',
                    response_models={
                        "text/html":
                        aws_apigateway.Model.EMPTY_MODEL
                    }
                )
            ]
        )
