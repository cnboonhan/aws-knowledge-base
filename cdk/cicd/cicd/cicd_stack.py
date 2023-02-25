from aws_cdk import (
    Stack,
    RemovalPolicy,
    aws_codecommit,
    aws_s3
)
from constructs import Construct


class CicdStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        CICD_bucket = aws_s3.Bucket(
            self, 'CICDBucket', removal_policy=RemovalPolicy.DESTROY, auto_delete_objects=True)
