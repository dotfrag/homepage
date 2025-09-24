---
title: "Change visudo editor"
pubDate: 2025-09-24
---

```shell
sudo update-alternatives --config editor
```

```shell
sudo update-alternatives --install <link> <name> <path> <priority>
```

```shell
sudo update-alternatives --install /usr/bin/editor editor /usr/bin/nvim 0
```

## Sources

- <https://askubuntu.com/a/539244>
- <https://unix.stackexchange.com/a/335162>
- <https://www.baeldung.com/linux/update-alternatives-command>
