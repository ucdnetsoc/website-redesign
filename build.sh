#! /usr/bin/bash

pushd /tmp
git clone https://github.com/ucdnetsoc/website-redesign
cd website-redesign
mkdir dist
docker build -t homebuild -f Dockerfile .
docker run --rm -v "/tmp/website-redesign/dist:/site/dist" homebuild
mv /tmp/homepage /opt/static/next.netsoc.com
popd
