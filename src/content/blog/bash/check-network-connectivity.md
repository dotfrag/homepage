---
title: "Check network connectivity"
pubDate: 2025-09-24
---

## Check if we have a network connection

```bash
if nc -zw1 google.com 443; then
  echo "connected"
fi
```

## Wait until we have a network connection

Wait until we have a network connection

```bash
until nc -zw1 google.com 443; do sleep .5; done
```

## Sources

- <https://unix.stackexchange.com/a/190610>
