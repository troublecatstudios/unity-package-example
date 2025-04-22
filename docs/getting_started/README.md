# Getting started

## Installation

### with package manager UI <small>recommended</small> { #with-pip data-toc-label="with pip" }

Unity Package Example is published as a [OpenUPM Package] and can be installed via
the Unity Package Manager:

- Open **Edit/Project Settings/Package Manager**
- Add a new **Scoped Registry** (or edit the existing OpenUPM entry)

| Field    | Value |
|----------|-------|
| Name     | `package.openupm.com` |
| URL      | `https://package.openupm.com` |
| Scope(s) | `io.troublecat.unity-package-example` |

- Click `Save` or `Apply`
- Open **Window/Package Manager**
- Click ++plus++
- Select **Add package by name..**. or **Add package from git URL...**
- Paste `io.troublecat.unity-package-example` into name
- Paste `0.1.0` into version
- Click Add

### with package manager manually

Add the following to the top of the [Packages/manifest.json](https://docs.unity3d.com/Manual/upm-manifestPrj.html)
within your Unity project.

```json
    "scopedRegistries": [
        {
            "name": "package.openupm.com",
            "url": "https://package.openupm.com",
            "scopes": [
                "io.troublecat.unity-package-example"
            ]
        }
    ]
```

Next, add the following to the `dependencies` section of the same manifest.json file.

```json
    "io.troublecat.unity-package-example": "0.1.0"
```


### with OpenUPM cli

If you have the [OpenUPM CLI](https://github.com/openupm/openupm-cli#openupm-cli) installed locally,
you can run a command to install the latest version of the Unity Package Example into your project.

=== "Package install"

```bash
openupm add io.troublecat.unity-package-example
```

=== "CLI Install"

```bash
npm install -g openupm-cli
```


## Local environment setup

- Unity 2021.3.22f1 or greater
- VSCode or Rider

### Open the unity-project

1. Open Unity Hub, select "Add Project" and then "Add from disk"
2. In the dialog window, navigate to where you've checked out the noir repository and select the `unity-project` folder.
3. Click "Open Project"
4. You're now all setup to start making changes to the Noir source!
