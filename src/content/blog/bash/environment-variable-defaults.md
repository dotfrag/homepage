---
title: "Environment variable defaults"
pubDate: 2025-09-24
---

```bash
#!/bin/bash
set -euo pipefail

: "${GREETING:=Hello}"
: "${NAME:=user}"

echo "${GREETING} ${NAME}"
```

## Sources

- <https://emmer.dev/blog/bash-environment-variable-defaults/>
