---
title: "Check if a variable is set"
pubDate: 2025-09-24
---

For newer versions of bash, you can use the `-v` flag:

```bash
[[ -v var ]]
```

For older versions of bash, you can use the `+x` parameter expansion:

```bash
if [ -z ${var+x} ]; then echo "var is unset"; else echo "var is set to '$var'"; fi
```

## Sources

- <https://stackoverflow.com/a/13864829>
