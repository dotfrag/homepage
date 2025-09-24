---
title: "Backup git repositories"
pubDate: 2025-09-24
---

## Overview

You can backup your git repositories by saving a bare copy of the repository:

```shell
git clone --mirror git@github.com:username/repo.git
```

## Script

This is a script that I often use to backup my git repositories. I'm using `gh`
tool to get a list of all my repositories on GitHub. You can adjust it
accordingly to match other git hosting services.

Of course, as per the usual backup guidelines, it is ideal to archive, compress,
and save the output file on cloud and offline storage.

```bash
#!/bin/bash

set -euo pipefail

cd "$(mktemp -d)"
mkdir repos
cd repos

gh repo list --source |
  awk '{print $1}' | sort |
  xargs -I{} git clone --mirror git@github.com:{}

cd ..

tar cf repos.tar repos
zstd -T0 --ultra -20 repos.tar
du -sh repos.tar repos.tar.zst
mv -vf repos.tar.zst "${HOME}/repos-$(date +%Y%m%d).tar.zst"
```

You can find the most up to date version of this script
[here](https://github.com/dotfrag/dotfiles/blob/main/bin/backup-repos).

## Sources

- <https://docs.github.com/en/repositories/archiving-a-github-repository/backing-up-a-repository>
- <https://stackoverflow.com/questions/3959924/whats-the-difference-between-git-clone-mirror-and-git-clone-bare>
- <https://stackoverflow.com/questions/6150188/how-to-update-a-git-clone-mirror>
