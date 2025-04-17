---
title: Getting started
---

## Development git flow

Development in the Unity Package Example uses a mainline branching scheme with release tagging. All development occurs off of the `develop` branch. The `stable` branch is used as a merge point to generate new release tags.

The diagram below shows how the git workflow looks as a new feature is started, worked on and then merged into `develop` with a follow-up minor version release.

```mermaid
%%{init: { 'gitGraph': {'mainBranchName': 'stable'}} }%%
gitGraph
    commit tag:"v0.0.1"
    branch develop
    checkout develop
    commit
    commit
    commit
    branch feat/my-feature
    checkout feat/my-feature
    commit
    commit
    checkout develop
    merge feat/my-feature id: "pull request"
    commit
    checkout stable
    merge develop id: "official release" tag:"v0.1.0"
```

### Creating a new release

Releases are automatically created when a pull request to `stable` is merged if it includes one of the `release/*` labels. When a new pull request is created it is checked for the presence of a release tag. If no release tag is specified and the pull request is targeting the `stable` branch it will be marked as invalid and won't be allowed to merge.

1. Create a new pull request to `stable`
2. Ensure the `./package/CHANGELOG.md` has been updated, all changes for the release should be under the `## [Unreleased]` header
3. Add the appropriate `release/*` label
4. Once all review comments are resolved and the workflows pass, merge your pull request
5. Verify the correct `vX.X.X` and `upm/vX.X.X` tags have been created, the release appears in the [project releases](/troublecatstudios/unity-package-example/releases) and OpenUPM

### Merging a develop only change

Pull requests made to the `develop` branch shouldn't have `release/*` labels, adding them won't do anything.

> Why not create release tags directly off of the `develop` branch?

This is definitely a valid strategy. We prefer to follow a pull request oriented workflow whenever possible as it allows for a natural checkpoint before triggering the next part of a process. Tagging directly off of `develop` wouldn't allow for that.

> Does the `develop` branch cause long delays in shipping smaller releases?

We haven't noticed much delay in getting minor or patch versions released with this model, but it's a risk if maintainers aren't properly keeping up with the repository changes. If a change you've made hasn't been released in a timely manner please do raise an issue and let us know!


## Local environment setup

- Unity 2021.3.22f1 or greater
- VSCode or Rider

### Open the unity-project

1. Open Unity Hub, select "Add Project" and then "Add from disk"
2. In the dialog window, navigate to where you've checked out the noir repository and select the `unity-project` folder.
3. Click "Open Project"
4. You're now all setup to start making changes to the Noir source!
