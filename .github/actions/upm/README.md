# Action Upm

This is a GitHub Action to create a git tag prefixed with `upm/*` so that our package releases can be available on [OpenUPM](https://openupm.com/).

For example:

- If `source_tag` is `v1.0.0` then a new tag named `upm/v1.0.0` will be created

Its more useful to use this with other GitHub Actions' outputs.

## Inputs

|       NAME        |                                       DESCRIPTION                                        |   TYPE   | REQUIRED | DEFAULT |
|-------------------|------------------------------------------------------------------------------------------|----------|----------|---------|
| `source_tag`      | The tag to use as the source for the new upm tag                                         | `string` | `true`   |         |

## Outputs

|     NAME      |        DESCRIPTION         |   TYPE   |
|---------------|----------------------------|----------|
| `upm_tag`     | The created tag.           | `string` |

## License

Copyright (c) 2025 Trouble Cat Studios.

Action Version is released under the [MIT License](./../../../package/LICENSE.md).
