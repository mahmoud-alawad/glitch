#!/usr/bin/env bash

set -eux
set -o pipefail

pushd .

time node -v
time npm -v
time yarn -v

time yarn

time npx prisma generate

time eval "${YBUILD:-}"

popd
