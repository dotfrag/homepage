---
title: "Cleanup a script on exit using trap"
pubDate: 2025-09-24
---

```bash
trap cleanup SIGINT SIGTERM ERR EXIT

cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
  # script cleanup here
}
```

## Sources

- <https://betterdev.blog/minimal-safe-bash-script-template/>
