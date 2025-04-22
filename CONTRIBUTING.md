# How to contribute?

## Branch naming

This project uses the following branch naming conventions:

| Branch Pattern | Example | Description |
|----------------|---------|-------------|
| `dev/*`        | `dev/my-new-feature` | the default branch prefix. You should use this for most of the branches you create when working on the project. |
| `exp/*`        | `exp/upgrade-unity-6` | used when experimenting with new features/processes or for other changes that are unlikely to be submitted to the `develop` branch. |
| `fix/[\d+]`    | `fix/123` | is used when working on a fix for an open issue to the project. |

## Pull requests

All changes to the project should be submitted via a pull request. This gives the maintainers of the project a chance to look over the changes to ensure documentation, code quality, etc meet the project standards. It also allows the automated processes in our [continuous integration](./features/continuous-integration.md) pipeline to run.

### General tips

1. Keep the amount of changes in a single pull request small. This not only allows reviewers to more quickly look over your changes but it also increases the likelyhood of your changes being accepted. If you submit a pull request with 10 different features and fixes, it may not be accepted because 2-3 of those may be in progress with other contributors, or may not fit the project roadmap.
2. The title of your pull request should be short but long enough to describe exactly what is being fixed/changed/added.
3. Use the description of your pull request to expand on your title. Explain the "why" of the pull request and include links to supporting materials, images, diagrams, blog posts, etc.
4. Use in-line comments to draw reviewers to key areas of your changes.

### Pull request labeling

We use labels to quickly scan through open pull requests and issues. The `labeler` workflow ensures that each pull request has labels attached to it that indicate which areas of the project have been updated.


### Did you find a bug?

* **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/troublecatstudios/unity-package-example/issues).

* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/troublecatstudios/unity-package-example/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

### Did you write a patch that fixes a bug?

* Open a new GitHub pull request with the patch.

* Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

### Do you intend to add a new feature or change an existing one?

* Suggest your change as an [issue](https://github.com/troublecatstudios/unity-package-example/issues/new) and use the `suggestion` label and start writing code.

Thanks! :heart: :heart: :heart:
