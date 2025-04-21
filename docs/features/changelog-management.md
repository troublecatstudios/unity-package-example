## Changelog management

It's important for projects to keep a listing of the changes made during development. A properly managed changelog can be an incredibly useful resource to other developers not only in locating when particular features or fixes were added, but also in identifying when breaking or conflicting changes were added to a project.

This project uses a custom GitHub Action to keep the changelog updated when creating new releases, this document details how that action works and how to customize it.

### Overview

During development and in the `develop` branch, all the changes made since the previous release are listed within the "Unreleased" section of the changelog. This makes merging changes from multiple pull requests easier since the changes to the changelog file are always within the same section, reducing the need to sort out changelog merge conflicts.

When [a new release is created](./../howto/create-a-release.md) the `changelog` action is run and given the version of the release. The changelog action then moves all the contents under the `## [Unreleased]` section to a new section with the specified version as the header. The changelog file is added to the release before the tag is created.
