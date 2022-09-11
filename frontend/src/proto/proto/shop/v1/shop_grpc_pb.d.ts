// package: shop
// file: proto/shop/v1/shop.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_shop_v1_shop_pb from "../../../proto/shop/v1/shop_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IShopServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getShopDetail: IShopServiceService_IGetShopDetail;
    getShopList: IShopServiceService_IGetShopList;
    updateShopInfo: IShopServiceService_IUpdateShopInfo;
}

interface IShopServiceService_IGetShopDetail extends grpc.MethodDefinition<proto_shop_v1_shop_pb.GetShopDetailRequest, proto_shop_v1_shop_pb.GetShopDetailResponse> {
    path: "/shop.ShopService/GetShopDetail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_shop_v1_shop_pb.GetShopDetailRequest>;
    requestDeserialize: grpc.deserialize<proto_shop_v1_shop_pb.GetShopDetailRequest>;
    responseSerialize: grpc.serialize<proto_shop_v1_shop_pb.GetShopDetailResponse>;
    responseDeserialize: grpc.deserialize<proto_shop_v1_shop_pb.GetShopDetailResponse>;
}
interface IShopServiceService_IGetShopList extends grpc.MethodDefinition<proto_shop_v1_shop_pb.GetShopListRequest, proto_shop_v1_shop_pb.GetShopListResponse> {
    path: "/shop.ShopService/GetShopList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_shop_v1_shop_pb.GetShopListRequest>;
    requestDeserialize: grpc.deserialize<proto_shop_v1_shop_pb.GetShopListRequest>;
    responseSerialize: grpc.serialize<proto_shop_v1_shop_pb.GetShopListResponse>;
    responseDeserialize: grpc.deserialize<proto_shop_v1_shop_pb.GetShopListResponse>;
}
interface IShopServiceService_IUpdateShopInfo extends grpc.MethodDefinition<proto_shop_v1_shop_pb.UpdateShopInfoRequest, proto_shop_v1_shop_pb.UpdateShopInfoResponse> {
    path: "/shop.ShopService/UpdateShopInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_shop_v1_shop_pb.UpdateShopInfoRequest>;
    requestDeserialize: grpc.deserialize<proto_shop_v1_shop_pb.UpdateShopInfoRequest>;
    responseSerialize: grpc.serialize<proto_shop_v1_shop_pb.UpdateShopInfoResponse>;
    responseDeserialize: grpc.deserialize<proto_shop_v1_shop_pb.UpdateShopInfoResponse>;
}

export const ShopServiceService: IShopServiceService;

export interface IShopServiceServer {
    getShopDetail: grpc.handleUnaryCall<proto_shop_v1_shop_pb.GetShopDetailRequest, proto_shop_v1_shop_pb.GetShopDetailResponse>;
    getShopList: grpc.handleUnaryCall<proto_shop_v1_shop_pb.GetShopListRequest, proto_shop_v1_shop_pb.GetShopListResponse>;
    updateShopInfo: grpc.handleUnaryCall<proto_shop_v1_shop_pb.UpdateShopInfoRequest, proto_shop_v1_shop_pb.UpdateShopInfoResponse>;
}

export interface IShopServiceClient {
    getShopDetail(request: proto_shop_v1_shop_pb.GetShopDetailRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopDetailResponse) => void): grpc.ClientUnaryCall;
    getShopDetail(request: proto_shop_v1_shop_pb.GetShopDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopDetailResponse) => void): grpc.ClientUnaryCall;
    getShopDetail(request: proto_shop_v1_shop_pb.GetShopDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopDetailResponse) => void): grpc.ClientUnaryCall;
    getShopList(request: proto_shop_v1_shop_pb.GetShopListRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopListResponse) => void): grpc.ClientUnaryCall;
    getShopList(request: proto_shop_v1_shop_pb.GetShopListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopListResponse) => void): grpc.ClientUnaryCall;
    getShopList(request: proto_shop_v1_shop_pb.GetShopListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopListResponse) => void): grpc.ClientUnaryCall;
    updateShopInfo(request: proto_shop_v1_shop_pb.UpdateShopInfoRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.UpdateShopInfoResponse) => void): grpc.ClientUnaryCall;
    updateShopInfo(request: proto_shop_v1_shop_pb.UpdateShopInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.UpdateShopInfoResponse) => void): grpc.ClientUnaryCall;
    updateShopInfo(request: proto_shop_v1_shop_pb.UpdateShopInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.UpdateShopInfoResponse) => void): grpc.ClientUnaryCall;
}

export class ShopServiceClient extends grpc.Client implements IShopServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getShopDetail(request: proto_shop_v1_shop_pb.GetShopDetailRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopDetailResponse) => void): grpc.ClientUnaryCall;
    public getShopDetail(request: proto_shop_v1_shop_pb.GetShopDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopDetailResponse) => void): grpc.ClientUnaryCall;
    public getShopDetail(request: proto_shop_v1_shop_pb.GetShopDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopDetailResponse) => void): grpc.ClientUnaryCall;
    public getShopList(request: proto_shop_v1_shop_pb.GetShopListRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopListResponse) => void): grpc.ClientUnaryCall;
    public getShopList(request: proto_shop_v1_shop_pb.GetShopListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopListResponse) => void): grpc.ClientUnaryCall;
    public getShopList(request: proto_shop_v1_shop_pb.GetShopListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.GetShopListResponse) => void): grpc.ClientUnaryCall;
    public updateShopInfo(request: proto_shop_v1_shop_pb.UpdateShopInfoRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.UpdateShopInfoResponse) => void): grpc.ClientUnaryCall;
    public updateShopInfo(request: proto_shop_v1_shop_pb.UpdateShopInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.UpdateShopInfoResponse) => void): grpc.ClientUnaryCall;
    public updateShopInfo(request: proto_shop_v1_shop_pb.UpdateShopInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_v1_shop_pb.UpdateShopInfoResponse) => void): grpc.ClientUnaryCall;
}
