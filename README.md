# aws-knowledge-base

This repository intends to be an iterative collection of personal knowledge of AWS design and useful tools, to be used in work and personal projects.

## Git Hooks
The `hooks` folder contains useful tools to populate documents and lint. To use them, you have to apply them manually to the `.git` folder.
```
# Run from the root directory of this repository
find $PWD/hooks -type f | xargs -I '{}' ln -s '{}' $PWD/.git/hooks
```

Currently implemented hooks:
* Automatic generation of diagrams from Cloudformation templates in the `cloudformation` folder using `cfn-diagram`. Hosted at `https://cnboonhan.github.io/aws-knowledge-base`. To host at another url, set the `PRE_COMMIT_HOOK_DEPLOY_URL` environment variable ( see `hooks/pre-commit` for more details )
* Automatic linting of Cloudformation temmplates using `cfn-lint`.
