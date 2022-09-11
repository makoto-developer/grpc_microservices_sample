usage:
	@echo '-----------------------------------------------------------------------------'
	@echo 'commands'
	@echo '  - protogen -- .protoファイルからgrpc用のコードを生成します。'
	@echo '                              - frontend: src/proto/gen/v1/へ出力されます.'
	@echo '                              - microservices: src/proto/gen/v1/へ出力されます.'
	@echo '-----------------------------------------------------------------------------'

PROTO_DIR := ./proto/shop/v1/*
GENERATED_GO_DIR := ../microservices/src/proto/gen/v1
GENERATED_JS_DIR := ../frontend/src/proto/gen/v1/
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

.PHONY: protogen
protogen:
	mkdir -p $(GENERATED_GO_DIR)
	mkdir -p $(GENERATED_JS_DIR)
	rm -rf $(GENERATED_GO_DIR)/*
	rm -f $(GENERATED_JS_DIR)/*
	protoc \
		-I./ \
		--go_out=$(GENERATED_GO_DIR) \
		--go-grpc_out=$(GENERATED_GO_DIR) \
		--go-grpc_opt=require_unimplemented_servers=false \
		$(PROTO_DIR)
	protoc \
		-I./ \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--js_out=$(GENERATED_JS_DIR) \
		--ts_out=$(GENERATED_JS_DIR) \
		$(PROTO_DIR)
