# OpenUPM Support

The Unity Package Example project comes pre-configured with GitHub Action [continuous-integration](./continuous-integration.md) and [continuous-deployment](./continuous-deployment.md) workflows. These workflows include steps that create a `vX.X.X` git tag whenever you [create a new release](./../howto/create-a-release.md).

## Adding your package to OpenUPM

The repository comes with an example `.upm.yaml` file that has all of the required fields filled out with the current package information. You can use this file to submit your package to OpenUPM by following the steps below:

1. Update your `.upm.yaml` file with your package information. For more information see [the package metadata](https://openupm.com/docs/adding-upm-package.html#package-metadata-yaml-file) section in the OpenUPM docs.
2. Fill out and submit the [add package form](https://openupm.com/packages/add/) on the OpenUPM website.
3. Your package should be available on the OpenUPM registry within 24 hours.

## Publishing new releases

If you used the `.upm.yaml` file when [adding your package to OpenUPM](#adding-your-package-to-openupm) then new releases will be picked up automatically by OpenUPM as they are published within GitHub.

A manual release to OpenUPM can be created at any time by pushing a new git tag in the format of `upm/vX.X.X`. There is an example of how to do this using shell commands below.

```bash
# replace ${TAG} with your new version number, ex: v1.2.3.dev.1
git checkout $BRANCH_NAME # checkout the branch/tag you want to use as the new release

git subtree split -P "package" -b upm_${TAG} # if you're referencing a branch, you'll need to run these
                                             # commands since only the package directory is shipped in
git checkout upm_${TAG}                      # unity packages

git tag -a "upm/${TAG}" -m "releasing ${TAG} for open upm"
git push origin "upm/${TAG}"
```
