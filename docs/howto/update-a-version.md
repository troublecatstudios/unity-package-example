# Updating a released version

If you've published a stable release and realize after the fact that you need to make changes, it can be the worst feeling. There's no need to worry though, this document will guide you through the steps to update a bad release that has been [created with the automation](./create-a-release.md) in this repository (though these instructions will work for most other projects as well).

For the steps below, let's assume the bad release that was shipped was `v0.1.0`.

## Pull your release tag locally

List out the tags locally and verify that you've pulled the latest changes.

```bash
git tag                # list the tags
git pull               # optionally, pull the latest changes from the remote
git checkout v0.1.0    # switch to the affected tag
```

## Make your corrections

Create a new branch from the tag and remove the tag locally.

```bash
git checkout -b release/v0.1.0-1  # (1)!
git tag -d v0.1.0
```

Next, make your updates to the files in the release commit and push them.

```bash
git commit -m 'fix: hotfix release issues'
```

## Push updates to the remote

Once you've committed the changes locally, you should push them to the remote and create the replacement tag.

```bash
git push origin release/v0.1.0-1  # (2)!
git tag -a v0.1.0 -m 'hotfix of v0.1.0'
```

Finally, push the tag and remove the remote branch (this is optional).

```bash
git push origin v0.1.0
git push -d origin release/v0.1.0-1 #(3)!
git branh -d release/v0.1.0-1 #(4)!
```


1.  This ensures that we're not in a [detached head](https://git-scm.com/docs/user-manual#detached-head) state,
    so we can create a new commit, push it and create the new tag.

2.  This new branch doesn't need to stay published once the new tag is created.

3.  This will delete the branch in the remote.

4.  This will delete the branch locally.

