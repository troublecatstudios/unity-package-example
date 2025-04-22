# Automation

## Continuous integration process

This document describes our current continuous integration process, which is run whenever a pull-request is submitted to the project.

### C# build process

When a code change is made to the Runtime or Editor projects within the package directory a dotnet build is started. The C# projects are located in `./.github/build/` so they can be updated with any third-party dependencies necessary to build your project code.

When the build process completes the Runtime project will be published as a NuGet package to GitHub Packages which is useful if you're making a library and want to pull it into another build. But the main reason for the the dotnet build is to generate `*.dll` files so that API documentation can be generated.

### API documentation

After the C# build completes, API documentation is automatically generated from the compiled DLLs and placed within the `./docs/reference` directory. The documentation is generated using a fork of [dotnet2md](https://github.com/isadorasophia/dotnet2md). Once the documentation is generated it will be committed back to your pull request so that our documentation is always up-to-date with the latest changes.


## Changelog management

It's important for projects to keep a listing of the changes made during development. A properly managed changelog can be an incredibly useful resource to other developers not only in locating when particular features or fixes were added, but also in identifying when breaking or conflicting changes were added to a project.

This project uses a custom GitHub Action to keep the changelog updated when creating new releases, this document details how that action works and how to customize it.

### Overview

During development and in the `develop` branch, all the changes made since the previous release are listed within the "Unreleased" section of the changelog. This makes merging changes from multiple pull requests easier since the changes to the changelog file are always within the same section, reducing the need to sort out changelog merge conflicts.

When [a new release is created](./../howto/create-a-release.md) the `changelog` action is run and given the version of the release. The changelog action then moves all the contents under the `## [Unreleased]` section to a new section with the specified version as the header. The changelog file is added to the release before the tag is created.


## Release process

### Versioning

The project version is stored within the `./version.json` at the root of the project and development versions are computed as part of the `build.yaml` workflow when a pull request is opened.

- Development NuGet versions are computed for all pull requests that change C# code.
- Development upm package versions are only computed when the `release` workflow is run with a release type other than "stable".
- During the `release` workflow the version within `./package/package.json` will be set to the version within `./version.json`.
- The `./package/package.json` file should never have a version defined (other than the `0.0.0-placeholder`) in development or stable branches. The version is only set in released tags.

#### Creating a release

See [our "How to create a release" guide](./../howto/create-a-release.md) for instructions on how to publish new releases of your Unity package using the workflows within the repository.

### OpenUPM

During the release creation process, this project will automatically create git tags with a `upm/*` prefix so they can be picked up by [OpenUPM](https://openupm.com/) and included in the registry. See the [OpenUPM feature](./openupm.md) documentation for more information.
