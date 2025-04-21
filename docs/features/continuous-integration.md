## Continuous integration process

This document describes our current continuous integration process, which is run whenever a pull-request is submitted to the project.

### C# build process

When a code change is made to the Runtime or Editor projects within the package directory a dotnet build is started. The C# projects are located in `./.github/build/` so they can be updated with any third-party dependencies necessary to build your project code.

When the build process completes the Runtime project will be published as a NuGet package to GitHub Packages which is useful if you're making a library and want to pull it into another build. But the main reason for the the dotnet build is to generate `*.dll` files so that API documentation can be generated.

### API documentation

After the C# build completes, API documentation is automatically generated from the compiled DLLs and placed within the `./docs/reference` directory. The documentation is generated using a fork of [dotnet2md](https://github.com/isadorasophia/dotnet2md). Once the documentation is generated it will be committed back to your pull request so that our documentation is always up-to-date with the latest changes.

