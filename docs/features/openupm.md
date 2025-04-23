# OpenUPM Support

The Unity Package Example project comes pre-configured with GitHub Action [continuous-integration](./continuous-integration.md) and [continuous-deployment](./continuous-deployment.md) workflows. These workflows include steps that create a `vX.X.X` git tag whenever you [create a new release](./../howto/create-a-release.md).

## Adding your package to OpenUPM

The repository comes with an example `.upm.yaml` file that has all of the required fields filled out with the current package information. You can use this file to submit your package to OpenUPM by following the steps below:

1. Update your `.upm.yaml` file with your package information. For more information see [the package metadata](https://openupm.com/docs/adding-upm-package.html#package-metadata-yaml-file) section in the OpenUPM docs.
2. Fill out and submit the [add package form](https://openupm.com/packages/add/) on the OpenUPM website.
3. Your package should be available on the OpenUPM registry within 24 hours.

## Publishing new releases

If you used the `.upm.yaml` file when [adding your package to OpenUPM](#adding-your-package-to-openupm) then new releases will be picked up automatically by OpenUPM as they are published within GitHub.


### Manually releasing to OpenUPM

A manual release to OpenUPM can be created at any time by pushing a new git tag in the format of `upm/vX.X.X`. There is an example of how to do this using shell commands below.

!!! note ""
    In the commands below, replace `$SOURCE` with the branch/tag you'd like to
    use as the source for your release and `$TAG` with the version tag name
    you'd like to create, like "v1.2.3.dev.1".

=== "From most branches or tags"

    When creating a new OpenUPM release from a branch, you'll need to perform
    a few extra commands because UPM packages have to follow a strict directory
    structure.

    ```bash
    git checkout $SOURCE
    git subtree split -P "package" -b upm_$TAG
    git checkout upm_$TAG
    git tag -a "upm/$TAG" -m "releasing $TAG for open upm"
    git push origin "upm/$TAG"
    ```

=== "From a upm/* tag"

    Tags prefixed with `upm/*` are already setup to work with OpenUPM so they can
    be used without any modifications to the structure.

    ```bash
    git checkout $SOURCE
    git tag -a "upm/$TAG" -m "releasing $TAG for open upm"
    git push origin "upm/$TAG"
    ```
