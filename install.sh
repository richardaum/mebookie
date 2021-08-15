#!/bin/bash

source ./installer/check.sh
source ./installer/loading.sh
source ./installer/install_node.sh
source ./installer/install_yarn.sh

if ! check node; then
    install_node &
    loading "Installing node on $HOME (using N)" "Node installed successfully!"
fi

if ! check yarn; then
    install_yarn &
    loading "Installing yarn" "Yarn installed successfully!"
fi

yarn install &>/dev/null &
loading "Installing/updating local dependencies using Yarn" "Local dependencies installed/updated successfully!"

echo "Now, you can run 'yarn start' to launch."