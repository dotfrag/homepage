---
title: "GTK Theming"
pubDate: 2025-09-24
---

## Directories

The common directories used by GTK for theming are:

| Directory                                    | Description            |
| -------------------------------------------- | ---------------------- |
| `/usr/share/themes`, `~/.local/share/themes` | GTK themes             |
| `/usr/share/icons`, `~/.local/share/icons`   | Icon and cursor themes |
| `~/.icons`                                   | Cursor themes          |

### Cursors

For cursors, you can use the `~/.icons` directory without any additional setup.
If you want to use the `~/.local/share/icons` directory, you might need to set
the `XCURSORS_PATH` environment variable like so:

```shell
export XCURSOR_PATH=/usr/share/icons:$XDG_DATA_HOME/icons
```

## Commands

If you are on Gnome, you can activate a theme from Gnome settings or Gnome tweak
tool.

If you are on a different WM, you have to run the following commands on startup:

```shell
gsettings set org.gnome.desktop.interface gtk-theme 'theme-name'
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark' # optional for dark mode
gsettings set org.gnome.desktop.interface cursor-theme 'cursor-theme-name'
gsettings set org.gnome.desktop.interface icon-theme 'icon-theme-name'
```

### Extra commands

Set fonts for GTK applications:

```shell
gsettings set org.gnome.desktop.interface font-name 'Open Sans 11'
gsettings set org.gnome.desktop.interface monospace-font-name 'Iosevka SS08 11'
```

### Wayland

If you are on Wayland, it can be helpful to also set the settings in
`~/.config/gtk-3.0/settings.ini`, here's an example:

```ini
[Settings]
gtk-theme-name = catppuccin-macchiato-blue-standard+default
gtk-application-prefer-dark-theme = true
gtk-cursor-theme-name = catppuccin-macchiato-dark-cursors
gtk-icon-theme-name = Papirus
gtk-font-name = 'Open Sans 11'
```

If you are on sway, you might also need to configure the cursor theme in sway
config:

```text
seat seat0 xcursor_theme 'catppuccin-macchiato-dark-cursors'
```

### Qt-based applications and cursors

For cursor icons to work in Qt-based applications, modify the file
`/usr/share/icons/default/index.theme` accordingly:

```ini
[Icon Theme]
Inherits=catppuccin-macchiato-dark-cursors
```

## Sources

- <https://wiki.archlinux.org/title/Cursor_themes#XDG_specification>
- <https://github.com/swaywm/sway/wiki/GTK-3-settings-on-Wayland>
- <https://www.reddit.com/r/swaywm/comments/qq74gv/comment/hjzhoyo/>
