from aws_cdk import (
    Stack,
    aws_ec2
)
from constructs import Construct


class VpcStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, max_azs: int = 1, cidr_mask: int = 22, subnet_cidr_mask: int = 24,  **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        vpc_name = f"{construct_id}_vpc"
        vpc = aws_ec2.Vpc(self, id=vpc_name, max_azs=max_azs,
                          ip_addresses=aws_ec2.IpAddresses.cidr(
                              f"10.0.0.0/{cidr_mask}"),
                          subnet_configuration=[
                              aws_ec2.SubnetConfiguration(
                                  cidr_mask=subnet_cidr_mask,
                                  name="1A",
                                  subnet_type=aws_ec2.SubnetType.PRIVATE_ISOLATED
                              ),
                              aws_ec2.SubnetConfiguration(
                                  cidr_mask=subnet_cidr_mask,
                                  name="2A",
                                  subnet_type=aws_ec2.SubnetType.PRIVATE_ISOLATED
                              ),
                              aws_ec2.SubnetConfiguration(
                                  cidr_mask=subnet_cidr_mask,
                                  name="1B",
                                  subnet_type=aws_ec2.SubnetType.PRIVATE_ISOLATED
                              ),
                              aws_ec2.SubnetConfiguration(
                                  cidr_mask=subnet_cidr_mask,
                                  name="2B",
                                  subnet_type=aws_ec2.SubnetType.PRIVATE_ISOLATED
                              )
                          ])
