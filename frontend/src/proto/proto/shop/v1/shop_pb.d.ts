// package: shop
// file: proto/shop/v1/shop.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetShopDetailRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetShopDetailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetShopDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetShopDetailRequest): GetShopDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetShopDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetShopDetailRequest;
    static deserializeBinaryFromReader(message: GetShopDetailRequest, reader: jspb.BinaryReader): GetShopDetailRequest;
}

export namespace GetShopDetailRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetShopDetailResponse extends jspb.Message { 

    hasShopInfo(): boolean;
    clearShopInfo(): void;
    getShopInfo(): ShopInfo | undefined;
    setShopInfo(value?: ShopInfo): GetShopDetailResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetShopDetailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetShopDetailResponse): GetShopDetailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetShopDetailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetShopDetailResponse;
    static deserializeBinaryFromReader(message: GetShopDetailResponse, reader: jspb.BinaryReader): GetShopDetailResponse;
}

export namespace GetShopDetailResponse {
    export type AsObject = {
        shopInfo?: ShopInfo.AsObject,
    }
}

export class GetShopListRequest extends jspb.Message { 
    clearIdList(): void;
    getIdList(): Array<number>;
    setIdList(value: Array<number>): GetShopListRequest;
    addId(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetShopListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetShopListRequest): GetShopListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetShopListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetShopListRequest;
    static deserializeBinaryFromReader(message: GetShopListRequest, reader: jspb.BinaryReader): GetShopListRequest;
}

export namespace GetShopListRequest {
    export type AsObject = {
        idList: Array<number>,
    }
}

export class GetShopListResponse extends jspb.Message { 
    clearShopInfoListList(): void;
    getShopInfoListList(): Array<ShopInfo>;
    setShopInfoListList(value: Array<ShopInfo>): GetShopListResponse;
    addShopInfoList(value?: ShopInfo, index?: number): ShopInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetShopListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetShopListResponse): GetShopListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetShopListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetShopListResponse;
    static deserializeBinaryFromReader(message: GetShopListResponse, reader: jspb.BinaryReader): GetShopListResponse;
}

export namespace GetShopListResponse {
    export type AsObject = {
        shopInfoListList: Array<ShopInfo.AsObject>,
    }
}

export class UpdateShopInfoRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateShopInfoRequest;

    hasUpdateShopInfo(): boolean;
    clearUpdateShopInfo(): void;
    getUpdateShopInfo(): UpdateShopInfoRequest.UpdateShopInfo | undefined;
    setUpdateShopInfo(value?: UpdateShopInfoRequest.UpdateShopInfo): UpdateShopInfoRequest;

    hasOpenDatetime(): boolean;
    clearOpenDatetime(): void;
    getOpenDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOpenDatetime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateShopInfoRequest;

    hasCloseDatetime(): boolean;
    clearCloseDatetime(): void;
    getCloseDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCloseDatetime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateShopInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateShopInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateShopInfoRequest): UpdateShopInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateShopInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateShopInfoRequest;
    static deserializeBinaryFromReader(message: UpdateShopInfoRequest, reader: jspb.BinaryReader): UpdateShopInfoRequest;
}

export namespace UpdateShopInfoRequest {
    export type AsObject = {
        id: number,
        updateShopInfo?: UpdateShopInfoRequest.UpdateShopInfo.AsObject,
        openDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        closeDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }


    export class UpdateShopInfo extends jspb.Message { 
        getName(): string;
        setName(value: string): UpdateShopInfo;

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): Address | undefined;
        setAddress(value?: Address): UpdateShopInfo;
        clearSisterShopsList(): void;
        getSisterShopsList(): Array<number>;
        setSisterShopsList(value: Array<number>): UpdateShopInfo;
        addSisterShops(value: number, index?: number): number;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpdateShopInfo.AsObject;
        static toObject(includeInstance: boolean, msg: UpdateShopInfo): UpdateShopInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpdateShopInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpdateShopInfo;
        static deserializeBinaryFromReader(message: UpdateShopInfo, reader: jspb.BinaryReader): UpdateShopInfo;
    }

    export namespace UpdateShopInfo {
        export type AsObject = {
            name: string,
            address?: Address.AsObject,
            sisterShopsList: Array<number>,
        }
    }

}

export class UpdateShopInfoResponse extends jspb.Message { 

    hasShopInfo(): boolean;
    clearShopInfo(): void;
    getShopInfo(): ShopInfo | undefined;
    setShopInfo(value?: ShopInfo): UpdateShopInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateShopInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateShopInfoResponse): UpdateShopInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateShopInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateShopInfoResponse;
    static deserializeBinaryFromReader(message: UpdateShopInfoResponse, reader: jspb.BinaryReader): UpdateShopInfoResponse;
}

export namespace UpdateShopInfoResponse {
    export type AsObject = {
        shopInfo?: ShopInfo.AsObject,
    }
}

export class Address extends jspb.Message { 
    getCountry(): string;
    setCountry(value: string): Address;
    getZipCode1(): string;
    setZipCode1(value: string): Address;
    getZipCode2(): string;
    setZipCode2(value: string): Address;
    getAddress(): string;
    setAddress(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        country: string,
        zipCode1: string,
        zipCode2: string,
        address: string,
    }
}

export class ShopInfo extends jspb.Message { 
    getId(): number;
    setId(value: number): ShopInfo;
    getName(): string;
    setName(value: string): ShopInfo;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Address | undefined;
    setAddress(value?: Address): ShopInfo;
    getParentShopId(): number;
    setParentShopId(value: number): ShopInfo;
    clearSisterShopsList(): void;
    getSisterShopsList(): Array<number>;
    setSisterShopsList(value: Array<number>): ShopInfo;
    addSisterShops(value: number, index?: number): number;

    hasOpenDate(): boolean;
    clearOpenDate(): void;
    getOpenDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOpenDate(value?: google_protobuf_timestamp_pb.Timestamp): ShopInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShopInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ShopInfo): ShopInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShopInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShopInfo;
    static deserializeBinaryFromReader(message: ShopInfo, reader: jspb.BinaryReader): ShopInfo;
}

export namespace ShopInfo {
    export type AsObject = {
        id: number,
        name: string,
        address?: Address.AsObject,
        parentShopId: number,
        sisterShopsList: Array<number>,
        openDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
