FROM golang:1.15 as builder
WORKDIR /api
COPY api/. .
ARG CGO_ENABLED=0
ARG GOOS=linux
ARG GOARCH=amd64
ARG GO111MODULE=on
RUN go build main.go 

FROM alpine:latest
WORKDIR /api
COPY --from=builder /api/main ./main
EXPOSE 8080
ENTRYPOINT [ "./main"]