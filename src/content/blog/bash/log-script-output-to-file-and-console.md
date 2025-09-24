---
title: "Log script output to file and console"
pubDate: 2025-09-24
---

Several ways to log the output of a script to a file and console:

```bash
exec &> >(tee out.log)
```

```bash
exec > >(tee -i "/tmp/$0.log")
exec 2>&1
```

```bash
main() { ... }

main |& tee /tmp/$0.log
```

```bash
LOG_FILE=/tmp/test.log
LOG_FILE=${0##*/}
LOG_FILE="/tmp/${LOG_FILE%.*}.log"
exec > >(tee "${LOG_FILE}") 2>&1
```

## Sources

- <https://stackoverflow.com/a/22373735>
- <https://unix.stackexchange.com/a/695909>
