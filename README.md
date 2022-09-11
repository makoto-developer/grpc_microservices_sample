# gRPC + マイクロサービスのサンプルプロジェクト

お店を探すサービスを例にしてアプリを作ってみる。

## 導入メモ

```shell
git clone git@github.com:makoto-developer/grpc_microservices_sample.git
cd grpc_microservices_sample
asdf install 

```

## 構成

## 技術

# 運用

## ブランチの切り方

mainブランチにマージするとgithubから変なbadgeがつけられるので使わない。

基本はdevブランチで開発
```text
git checkout dev
```

機能追加
```text
feature/<app名>/<修正タイトル>
e.g. feature/protobuf/protogen
```

バグ修正
```text
fix/<app name>/<バグタイトル>
fix/frontend/bugs
```

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

# protoからtypescriptのコードを生成するライブラリを入れる
yarn add -D grpc_tools_node_protoc_ts


````


# bufを使ってprotoのプロジェクトを作成する

[こちら](https://docs.buf.build/how-to/replace-protoc-with-buf)を参考に実装

$ buf mod init
$ buf build


# Protoから各言語のコードを生成する

```shell
cd protobuf

# makeコマンドを実行する前にMakefileを参照して何やっているか理解してから実行すること
# `microservices`と`frontend`の`proto/`ディレクトリを削除してクリーンな状態にしてから生成しています。
make protogen
```

