# gRPC + マイクロサービスのサンプルプロジェクト

お店を探すサービスを例にしてアプリを作ってみる。

## 構成

## 技術

# 環境構築メモ
````shell
mkdir protobuf
mkdir protobuf/proto
mkdir microservices
mkdir frontend

asdf install


# gRPCをインストール
cd ./protobuf
go mod init protobuf
go get -u google.golang.org/grpc

# protocのGo言語用のプラグインをインストール
#brew install protobuf
asdf plugin-add protoc https://github.com/paxosglobal/asdf-protoc.git

go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

# ~/.zshrcに追加
export PATH="$PATH:$(go env GOPATH)/bin"
````


# bufを使ってprotoのプロジェクトを作成する

[こちら](https://docs.buf.build/how-to/replace-protoc-with-buf)を参考に実装

$ buf mod init
$ buf build
