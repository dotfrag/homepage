---
title: "Add directory to $PATH if it doesn't exist"
pubDate: 2025-09-24
---

Either of the following will work:

```bash
if [[ ! "$PATH" == *${HOME}/.local/share/fzf/bin* ]]; then
  PATH="${PATH:+${PATH}:}${HOME}/.local/share/fzf/bin"
fi
```

```bash
case ":${PATH}:" in
  *:"$HOME/.local/share/fzf/bin":*) ;;
  *) export PATH="$HOME/.local/share/fzf/bin:$PATH" ;;
esac
```

## Sources

- <https://superuser.com/a/1644866>
- <https://github.com/rust-lang/rustup/blob/master/src/cli/self_update/env.sh>
