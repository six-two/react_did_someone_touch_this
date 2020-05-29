#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}" )"

if [ "$1" == "deploy" ]
then
  SKIP_PREFLIGHT_CHECK=true npm run deploy
else
  SKIP_PREFLIGHT_CHECK=true npm start
fi
