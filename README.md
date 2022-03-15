# DP_CDKTF_CONSTRUCTS

In order to create local repository, please run:

`yarn projen`

This will setup yout local repository, with a lot of useful stuff and directories.

After that, please run:

`yarn tacos:build`

This will update the code and create local `dist` folder with python and js pacakges

# Supported Languages

- Python: the `tacos:build` command will generate under dist folder a tgz package.
  After this, CI Pipeline will push it on Artifactory (TODO)
- Javascript: Same as python but for Javascript! 
- Typescript: CI Pipeline will directly run `yarn package` and create resulting TS library.
    After that CI will push it on Artifactory.


# API 
Please look at API Documentation here: 
[API.md](API.md) 
