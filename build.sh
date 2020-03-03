#!/bin/bash

# Commands to run before app binary is built

# Use this script's path
path="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )"

# Build client
cd ${path}/client && npm run build

# Move built client to server/static
mv ${path}/client/dist ${path}/server/static

cd ${path} && npm run pkg
