// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.1
// source: proto/shop/v1/shop.proto

package userservice

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ShopServiceClient is the client API for ShopService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ShopServiceClient interface {
	// ショップの情報を取得
	GetShopDetail(ctx context.Context, in *GetShopDetailRequest, opts ...grpc.CallOption) (*GetShopDetailResponse, error)
	GetShopList(ctx context.Context, in *GetShopListRequest, opts ...grpc.CallOption) (*GetShopListResponse, error)
	UpdateShopInfo(ctx context.Context, in *UpdateShopInfoRequest, opts ...grpc.CallOption) (*UpdateShopInfoResponse, error)
}

type shopServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewShopServiceClient(cc grpc.ClientConnInterface) ShopServiceClient {
	return &shopServiceClient{cc}
}

func (c *shopServiceClient) GetShopDetail(ctx context.Context, in *GetShopDetailRequest, opts ...grpc.CallOption) (*GetShopDetailResponse, error) {
	out := new(GetShopDetailResponse)
	err := c.cc.Invoke(ctx, "/shop.ShopService/GetShopDetail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shopServiceClient) GetShopList(ctx context.Context, in *GetShopListRequest, opts ...grpc.CallOption) (*GetShopListResponse, error) {
	out := new(GetShopListResponse)
	err := c.cc.Invoke(ctx, "/shop.ShopService/GetShopList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shopServiceClient) UpdateShopInfo(ctx context.Context, in *UpdateShopInfoRequest, opts ...grpc.CallOption) (*UpdateShopInfoResponse, error) {
	out := new(UpdateShopInfoResponse)
	err := c.cc.Invoke(ctx, "/shop.ShopService/UpdateShopInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ShopServiceServer is the server API for ShopService service.
// All implementations should embed UnimplementedShopServiceServer
// for forward compatibility
type ShopServiceServer interface {
	// ショップの情報を取得
	GetShopDetail(context.Context, *GetShopDetailRequest) (*GetShopDetailResponse, error)
	GetShopList(context.Context, *GetShopListRequest) (*GetShopListResponse, error)
	UpdateShopInfo(context.Context, *UpdateShopInfoRequest) (*UpdateShopInfoResponse, error)
}

// UnimplementedShopServiceServer should be embedded to have forward compatible implementations.
type UnimplementedShopServiceServer struct {
}

func (UnimplementedShopServiceServer) GetShopDetail(context.Context, *GetShopDetailRequest) (*GetShopDetailResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetShopDetail not implemented")
}
func (UnimplementedShopServiceServer) GetShopList(context.Context, *GetShopListRequest) (*GetShopListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetShopList not implemented")
}
func (UnimplementedShopServiceServer) UpdateShopInfo(context.Context, *UpdateShopInfoRequest) (*UpdateShopInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateShopInfo not implemented")
}

// UnsafeShopServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ShopServiceServer will
// result in compilation errors.
type UnsafeShopServiceServer interface {
	mustEmbedUnimplementedShopServiceServer()
}

func RegisterShopServiceServer(s grpc.ServiceRegistrar, srv ShopServiceServer) {
	s.RegisterService(&ShopService_ServiceDesc, srv)
}

func _ShopService_GetShopDetail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetShopDetailRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShopServiceServer).GetShopDetail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/shop.ShopService/GetShopDetail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShopServiceServer).GetShopDetail(ctx, req.(*GetShopDetailRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShopService_GetShopList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetShopListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShopServiceServer).GetShopList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/shop.ShopService/GetShopList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShopServiceServer).GetShopList(ctx, req.(*GetShopListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShopService_UpdateShopInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateShopInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShopServiceServer).UpdateShopInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/shop.ShopService/UpdateShopInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShopServiceServer).UpdateShopInfo(ctx, req.(*UpdateShopInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ShopService_ServiceDesc is the grpc.ServiceDesc for ShopService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ShopService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "shop.ShopService",
	HandlerType: (*ShopServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetShopDetail",
			Handler:    _ShopService_GetShopDetail_Handler,
		},
		{
			MethodName: "GetShopList",
			Handler:    _ShopService_GetShopList_Handler,
		},
		{
			MethodName: "UpdateShopInfo",
			Handler:    _ShopService_UpdateShopInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/shop/v1/shop.proto",
}
