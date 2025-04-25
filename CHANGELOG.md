# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


<!--begin_changelog-->

## [v0.1.2] - 2025-4-25


### Added
- dev: adds [mise](https://mise.jdx.dev/) as a development task runner
- docs: adds tabs, snippets, captions and smartsymbols to included markdown extensions
- dev: adds `docs:preview` task to enable previewing the documentation locally
- dev: adds `build` task to build the C# code locally

### Changed
- docs: reformats some of the documentation to use new markdown extensions and formatting

### Fixed
- docs: updates formatting of changelog entries to proper lists




## [v0.1.1] - 2025-4-23


### Added
- docs: adds how to guide for updating a previously released version.
- docs: adds installation section in getting started

### Changed
- docs: reformats existing docs, updating h1,h2,h3 etc.
- docs: updates nav for documentation site

### Fixed
- meta: updates `package.json` to publish to [OpenUPM](https://openupm.com/)




## [v0.1.0] - 2025-4-22


### Added
- unity: configures the included unity project so that it can be opened cleanly.
- ci: adds the generated mkdocs-material site folder (`./site/`) to the `.gitignore`
- docs: adds styling/content to mkdocs-material site so that it is visually more in line with [the Trouble Cat Studios website](https://troublecat.io)
- docs: initial content for changelog management, continuous integration, deployment and openupm features is added.

### Fixed
- docs: getting started documentation git flow graph is more readable in dark mode.
- docs: github-style markdown callouts no longer render as block comments.

### Changed
- ci: `build` workflow only runs if the `Editor` or `Runtime` code files change
- ci: docs workflow is moved to a composite action
- ci: docs action uses [mike](https://github.com/jimporter/mike) to deploy seperate documentation updates for each released version. See [the versioning documentation](https://squidfunk.github.io/mkdocs-material/setup/setting-up-versioning/) on material for mkdocs' website for more information.
- upm: reduces minimum build version in OpenUPM config to `0.0.1`
- docs: getting started documentation includes branch naming convention guidelines.
- docs: getting started documentation includes tips for submitting pull requests.
- docs: getting started documentation includes labeling details.

### Removed
- ci: removes the unused `release-upm-manual` workflow




## [v0.0.1] - 2025-4-20


This is the first release of the project example.

### Added

- initial project folder structure, README, CHANGELOG, CONTRIBUTING, LICENSE.
- ci: adds `build` workflow that does the following:
  - compiles C# code within `./package/Editor` and `./package/Runtime` folders, using [unity-ci](https://game.ci/) and the `dotnet` cli.
  - publishes the runtime code as a NuGet package to GitHub Packages, so package runtime DLLs can be referenced in other Unity package projects. A prerelease version is automatically generated using [Nerdbank.GitVersioning](https://github.com/dotnet/Nerdbank.GitVersioning)
  - generates api documentation from the compiled C# libraries using [dotnet2md](https://github.com/isadorasophia/dotnet2md). documentation files are automatically committed back to the pull request.
- ci: adds `labeler` workflow that labels pull requests based on the changes they contain so reviewers can quickly assess new changes.
- ci: adds `release` workflow that creates new releases when a pull request is merged to the `stable` branch. See our [getting started](./../docs/README.md) doc for more information.
- ci: adds `release-upm-manual` workflow that handles creating specific git tags for publishing releases to [OpenUPM](https://openupm.com/)
- ci: adds `cats` workflow that posts cute cat gifs to your pull requests because everything is made better by cats. 🐈‍⬛
- ci: adds `deploy-docs` workflow that publishes the documentation within `./docs` to GitHub Pages using [mkdocs-material](https://squidfunk.github.io/mkdocs-material/)
- adds a `./package` folder to hold all the code that should be released with the Unity package.
- adds a `./unity-project` folder to hold a development Unity project that is used to build and test the Unity package.
- ci: versioning is handled by [Nerdbank.GitVersioning](https://github.com/dotnet/Nerdbank.GitVersioning) via the root `./version.json` file.
- docs: includes a basic docs folder at the root.
- docs: includes a basic PULL_REQUEST_TEMPLATE
- docs: adds some placeholder documentation files for each of the project features
- docs: adds documentation for how to publish an OpenUPM package using the project
- docs: updates the mkdocs configuration with sections for features, how to and reference documentation
- editor: adds a custom inspector for the `Example` monobehaviour

### Fixed
- docs: the main README.md uses the correct path to the `./package/LICENSE.md` file
- ci: the `build` workflow only runs when related files change.
- ci: labeler configuration is updated to apply the `runtime` label to changes within `./package/Runtime/**`.





