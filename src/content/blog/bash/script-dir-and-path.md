---
title: "Script dir and path"
pubDate: 2025-09-24
description: "Get the directory and path of a script."
---

Get the directory of a script when it's a regular file:

```bash
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
```

Get the directory of a script when it's a symlink:

```bash
SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
```

Get the path of a script itself:

```bash
SCRIPT_PATH="${SCRIPT_DIR}/$(basename "$0")"
```

## Sources

- <https://stackoverflow.com/a/246128>
