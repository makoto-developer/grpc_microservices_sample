# 環境構築メモ

````shell
# プロジェクトを作成
mkdir grpc-microservices
cd $_
mkdir -p protobuf/proto
mkdir microservices
mkdir frontend

vi .tool-versions
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

# protoからtypescriptのコードを生成するライブラリを入れる
yarn add -D grpc_tools_node_protoc_ts
````

bufを使ってprotoのプロジェクトを作成する

[こちら](https://docs.buf.build/how-to/replace-protoc-with-buf)を参考に実装

```shell
$ buf mod init
$ buf build
```
