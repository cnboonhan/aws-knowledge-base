#!/usr/bin/env python3
import os

import aws_cdk as cdk

from lib.cicd.cicd_stack import CicdStack
from lib.vpc.vpc_stack import VpcStack
import lib.cicd.buildspec_definitions as buildspec_definitions


app = cdk.App()

VpcStack(app, "Vpc")

CicdStack(app, "CICDSampleBackend",
          buildspec=buildspec_definitions.backend_buildspec)
CicdStack(app, "CICDSampleWeb", buildspec=buildspec_definitions.web_buildspec)

app.synth()
