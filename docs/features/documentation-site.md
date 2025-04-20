## Documentation site

The Unity Package Example includes a beautiful documentation site that is automatically kept up-to-date with the documentation in your repository. As you push code to the `develop` branch and [create new releases](./../howto/create-a-release.md) the GitHub Actions within the package repository will update and publish new versions of the documentation site to the `gh-pages` branch in your repository.

[View the example documentation site](https://troublecat.io/unity-package-example/){ .md-button .md-button--primary }

### Customization

The documentation site is powered by [mkdocs](https://www.mkdocs.org/) and uses the [Material for mkdocs](https://squidfunk.github.io/mkdocs-material/) theme, which adds a lot of features and functionality. All of the configuration is handled through the `./mkdocs.yml` file as well as the `release` workflow and `docs` action in this repository. If you're interested in customizing your documentation site, please take a look through the [customization docs](https://squidfunk.github.io/mkdocs-material/customization/) on their site.
