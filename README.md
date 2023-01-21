# aws-knowledge-base

This repository intends to be an iterative collection of personal knowledge of AWS design and useful tools, to be used in work and personal projects.

## Git Hooks
the `hooks` folder contains useful tools to populate documents and lint. To use them, you have to apply them manually to the `.git` folder.
```
# Run from the root directory of this repository
find $PWD/hooks -type f | xargs -I '{}' ln -s '{}' $PWD/.git/hooks
```
