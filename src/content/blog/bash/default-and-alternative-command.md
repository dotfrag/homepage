---
title: "Default and alternative command"
pubDate: 2025-09-24
description:
  "Provide an alternative command if the preferred command is not available."
---

The following command will return the `gnumfmt` command if it is available,
otherwise it will use the `numfmt` command.

```bash
$(command -v gnumfmt || echo numfmt)
```
