## Regenerating documentation

You may want to wipe your documentation site and start over. This could be because you have too many versions published and the navigation is becoming cluttered, or you've recently cloned the example project repository and want to start customizing it for your own use. This document will guide you through the necessary steps to reset your documentation site.


1. Check out the site locally
2. Build the included `mkdocs.dockerfile` image

```bash
docker build -t mkdocs:local -f ./.github/scripts/mkdocs.dockerfile .
```

3. Run the following commands to reset your site

=== PowerShell

```powershell
git checkout develop
docker run -it `
    -e GIT_COMMITTER_NAME=ci-bot `
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io `
    -p 8000:8000 `
    -v ${PWD}:/tmp/source mkdocs:local 'mike delete --all'
docker run -it `
    -e GIT_COMMITTER_NAME=ci-bot `
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io `
    -p 8000:8000 `
    -v ${PWD}:/tmp/source mkdocs:local 'mike deploy develop'
docker run -it `
    -e GIT_COMMITTER_NAME=ci-bot `
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io `
    -p 8000:8000 `
    -v ${PWD}:/tmp/source mkdocs:local 'mike alias develop latest'
docker run -it `
    -e GIT_COMMITTER_NAME=ci-bot `
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io `
    -p 8000:8000 `
    -v ${PWD}:/tmp/source mkdocs:local 'mike set-default latest'
```


=== Linux

```bash
git checkout develop
docker run -it \
    -e GIT_COMMITTER_NAME=ci-bot \
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io \
    -p 8000:8000 \
    -v $(PWD):/tmp/source mkdocs:local 'mike delete --all'
docker run -it \
    -e GIT_COMMITTER_NAME=ci-bot \
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io \
    -p 8000:8000 \
    -v $(PWD):/tmp/source mkdocs:local 'mike deploy develop'
docker run -it \
    -e GIT_COMMITTER_NAME=ci-bot \
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io \
    -p 8000:8000 \
    -v $(PWD):/tmp/source mkdocs:local 'mike alias develop latest'
docker run -it \
    -e GIT_COMMITTER_NAME=ci-bot \
    -e GIT_COMMITTER_EMAIL=ci-bot@troublecat.io \
    -p 8000:8000 \
    -v $(PWD):/tmp/source mkdocs:local 'mike set-default latest'
```

These commands will make changes to your `gh-pages` branch locally, but they won't push any of the changes. So make sure you do that at the end.

```bash
git checkout gh-pages && git push origin gh-pages
```

This will configure your site so that when [you create new releases](./create-a-release.md) the documentation for those releases will be set as the new `latest` version and visible by default when you access your documentation site.
