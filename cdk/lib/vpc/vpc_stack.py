from aws_cdk import (
    Stack,
    aws_ec2
)
from constructs import Construct


class VpcStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        vpc_name = f"{construct_id}_vpc"
        vpc = aws_ec2.Vpc(self, id=vpc_name)
