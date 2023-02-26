#!/usr/bin/env python3
import os

import aws_cdk as cdk

from cicd.cicd_stack import CicdStack
from cicd.buildspec_definitions import demo_buildspec


app = cdk.App()
CicdStack(app, "CicdStack", buildspec=demo_buildspec, cicd_name="sample")

app.synth()
