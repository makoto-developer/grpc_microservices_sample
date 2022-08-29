# gRPC + マイクロサービスのサンプルプロジェクト

お店を探すサービスを例に作成してみる。

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
go get -u github.com/golang/protobuf/protoc-gen-go
````
