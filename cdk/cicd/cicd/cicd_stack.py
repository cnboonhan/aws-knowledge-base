from enum import auto
from aws_cdk import (
    RemovalPolicy,
    Stack,
    aws_codebuild,
    aws_codecommit,
    aws_events_targets,
    aws_s3,
    aws_events
)
from constructs import Construct


class CicdStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, buildspec: dict, cicd_name: str,  **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        artifacts_bucket_name = f"{cicd_name}_artifacts"
        repo_name = f"{cicd_name}_repo"
        project_name = f"{cicd_name}_project"

        artifact_s3 = aws_s3.Bucket(
            self, id=artifacts_bucket_name, auto_delete_objects=True, removal_policy=RemovalPolicy.DESTROY)

        repo = aws_codecommit.Repository(
            self, id=repo_name, repository_name=cicd_name)

        project = aws_codebuild.Project(
            self, id=project_name, source=aws_codebuild.Source.code_commit(
                repository=repo),
            artifacts=aws_codebuild.Artifacts.s3(bucket=artifact_s3),
            build_spec=aws_codebuild.BuildSpec.from_object(buildspec))

        repo.on_commit(
            f"{cicd_name}_repo_on_commit_rule", target=aws_events_targets.CodeBuildProject(
                project,
                event=aws_events.RuleTargetInput.from_object(
                    {
                        'sourceVersion': aws_events.EventField.from_path('$.afterCommitId')
                    }
                )
            ))
