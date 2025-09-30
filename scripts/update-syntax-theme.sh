#!/bin/bash

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
GIT_ROOT=$(git -C "${SCRIPT_DIR}" rev-parse --show-toplevel)

URL=https://raw.githubusercontent.com/shikijs/textmate-grammars-themes/refs/heads/main/packages/tm-themes/themes/catppuccin-mocha.json

# curl -s "${URL}" \
#   | jq '.colors."editor.background" = "#24273a"' > "${GIT_ROOT}/catppuccin-mocha.json"

curl -s "${URL}" \
  | sed 's/1e1e2e/24273a/g' > "${GIT_ROOT}/catppuccin-mocha.json"
