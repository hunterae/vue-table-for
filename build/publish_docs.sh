#!/bin/bash

yarn vue-cli-service build --dest docs
gh-pages -d docs