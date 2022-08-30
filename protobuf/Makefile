PROTO_DIR := ./proto
GENERATED_DIR := ../microservices/src/proto/gen
GENERATED_SERVICE_DIR := $(GENERATED_DIR)/

.PHONY: protos
protos:
    mkdir -pv $(GENERATED_DIR) $(GENERATED_SERVICE_DIR)
    protoc \
        -I $(PROTO_DIR) \
        -I $(GOPATH)/src:$(GOPATH)/src/github.com/gogo/protobuf/protobuf \
        --gogoslick_out=plugins=grpc:$(GENERATED_SERVICE_DIR) \
        service.proto
