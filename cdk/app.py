#!/usr/bin/env python3
import os

import aws_cdk as cdk

from lib.cicd.cicd_stack import CicdStack
from lib.vpc.vpc_stack import VpcStack
from lib.apigateway.static_web_apigateway_stack import StaticWebApiGateway
import lib.cicd.buildspec_definitions as buildspec_definitions


app = cdk.App()

VpcStack(app, "BaseVpc")

StaticWebApiGateway(app, "SampleWeb")

CicdStack(app, "CICDSampleBackend",
          buildspec=buildspec_definitions.backend_buildspec)
CicdStack(app, "CICDSampleWeb", buildspec=buildspec_definitions.web_buildspec)

app.synth()
