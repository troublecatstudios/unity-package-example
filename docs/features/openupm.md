## OpenUPM Support

The Unity Package Example project comes pre-configured with GitHub Action [continuous-integration](./continuous-integration.md) and [continuous-deployment](./continuous-deployment.md) workflows. These workflows include steps that create a `vX.X.X` git tag whenever you [create a new release](./../howto/create-a-release.md).


### Adding your package to OpenUPM

The repository comes with an example `.upm.yaml` file that has all of the required fields filled out with the current package information. You can use this file to submit your package to OpenUPM by following the steps below:

1. Update your `.upm.yaml` file with your package information. For more information see [the package metadata](https://openupm.com/docs/adding-upm-package.html#package-metadata-yaml-file) section in the OpenUPM docs.
2. Fill out and submit the [add package form](https://openupm.com/packages/add/) on the OpenUPM website.
3. Your package should be available on the OpenUPM registry within 24 hours.
