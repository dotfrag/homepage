---
title: "Parallel"
pubDate: 2025-09-24
description: "Run commands in parallel"
---

## Native parallelism in bash

In the following example, we are invoking multiple subshells using `()` in
background using `&`,and waiting for them finish using `wait`. Then we continue
execution normally.

```bash
#!/bin/bash

for i in {1..10}; do
  (
    echo "${i}"
  ) &
done
wait

# continue execution
```

<!--TODO: add gnu parallel-->

## [TODO] GNU Parallel
