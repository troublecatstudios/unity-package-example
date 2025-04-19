# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

This is the first release of the project example.

### Added

- initial project folder structure, README, CHANGELOG, CONTRIBUTING, LICENSE.
- docs: includes a basic docs folder at the root.
- docs: includes a basic PULL_REQUEST_TEMPLATE
- ci: adds `build` workflow that does the following:
  - compiles C# code within `./package/Editor` and `./package/Runtime` folders, using [unity-ci](https://game.ci/) and the `dotnet` cli.
  - publishes the runtime code as a NuGet package to GitHub Packages, so package runtime DLLs can be referenced in other Unity package projects. A prerelease version is automatically generated using [Nerdbank.GitVersioning](https://github.com/dotnet/Nerdbank.GitVersioning)
  - generates api documentation from the compiled C# libraries using [dotnet2md](https://github.com/isadorasophia/dotnet2md). documentation files are automatically committed back to the pull request.
- ci: adds `labeler` workflow that labels pull requests based on the changes they contain so reviewers can quickly assess new changes.
- ci: adds `auto-release` workflow that creates new releases when a pull request is merged to the `stable` branch. See our [getting started](./../docs/README.md) doc for more information.
- ci: adds `upm-release` workflow that handles creating specific git tags for publishing releases to [OpenUPM](https://openupm.com/)
- ci: adds `cats` workflow that posts cute cat gifs to your pull requests because everything is made better by cats. 🐈‍⬛
- ci: adds `docs-deploy` workflow that publishes the documentation within `./docs` to GitHub Pages using [mkdocs-material](https://squidfunk.github.io/mkdocs-material/)
- adds a `./package` folder to hold all the code that should be released with the Unity package.
- adds a `./unity-project` folder to hold a development Unity project that is used to build and test the Unity package.


### Fixed
- docs: the main README.md uses the correct path to the `./package/LICENSE.md` file
- ci: the `build` workflow only runs when related files change.


<!--begin_changelog-->

