---
title: "Elevate script to sudo"
pubDate: 2025-09-24
---

Self-elevate script to `sudo`:

```bash
[ "$UID" -eq 0 ] || exec sudo "$0" "$@"
```

## Sources

- <https://askubuntu.com/a/746351>
- <https://unix.stackexchange.com/a/28793>
