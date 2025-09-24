---
title: "Safe Scripts (Strict Mode)"
pubDate: 2025-09-24
---

## Overview

These options can be set inside a bash script to make it safer or increase
strictness. They can also be set on-the-fly by calling bash with the
corresponding flags, i.e. `bash -eu <script_path>`.

```bash
set -eu
```

```bash
set -euo pipefail
```

```bash
set -Eeuo pipefail
```

## Explanation

### `set -e`

The `-e` option makes the script exit as soon as a command returns a non-zero
exit code.

### `set -u`

The `-u` option makes the script exit as soon as a variable is used before being
set.

### `set -o pipefail`

The `-o pipefail` option makes the script exit as soon as a command in a
pipeline fails.

### `set -E`

When using `-e` without, the script will exit as soon as a command fails, but it
will not trigger the ERR trap when that happens. Setting `-E` prevents this
behavior from happening, and will trigger the ERR trap as well.

## Bonus

The `-x` option can be used to print the commands executed by the script. This
is useful for debugging.

## Sources

- <https://bash-prompt.net/guides/bash-set-options/>
- <https://betterdev.blog/minimal-safe-bash-script-template/>
- <https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425>
- <https://gist.github.com/theofidry/d6a4c1f5c7a4b3a13ffd6b9cf5f70acd>
- <https://sipb.mit.edu/doc/safe-shell/>
