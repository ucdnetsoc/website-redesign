#! /usr/bin/bash

docker build -t homebuild -f Dockerfile .
docker run -v "/tmp/homepage:/app/dist" -d homebuild
mv /tmp/homepage /opt/static/netsoc.com
