#!/bin/sh -eux

cd $(dirname $0)

export GO111MODULE=off

go get -u github.com/volatiletech/sqlboiler
go get -u github.com/volatiletech/sqlboiler/drivers/sqlboiler-mysql

export GO111MODULE=on

cd ./../../api

echo finish

sqlboiler --no-tests --add-global-variants=false --wipe mysql
