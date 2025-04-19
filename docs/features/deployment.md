## Deployment process

### Versioning

The project version is stored within the `./version.json` at the root of the project and development versions are computed as part of the `build.yaml` workflow when a pull request is opened.

- Development NuGet versions are computed for all pull requests that change C# code.
- Development upm package versions are only computed when the `release` workflow is run with a release type other than "stable".
- During the `release` workflow the version within `./package/package.json` will be set to the version within `./version.json`.
- The `./package/package.json` file should never have a version defined (other than the `0.0.0-placeholder`) in development or stable branches. The version is only set in released tags.

#### Creating a release

See [our "How to create a release" guide](./../howto/create-a-release.md) for instructions on how to publish new releases of your Unity package using the workflows within the repository.
