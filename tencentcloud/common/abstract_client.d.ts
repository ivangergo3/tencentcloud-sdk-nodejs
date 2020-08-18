import { ClientProfile } from "./profile/client_profile";
import { Credential } from "./credential";
import { AbstractModel } from "./abstract_model";
import { Response } from "node-fetch";
declare type ResponseCallback = (error: string, rep: any) => void;
interface RequestOptions {
    multipart: boolean;
}
interface RequestData {
    Action: string;
    RequestClient: string;
    Nonce: number;
    Timestamp: number;
    Version: string;
    Signature: string;
    SecretId?: string;
    region?: string;
    Token?: string;
    SinatureMethod?: string;
    [key: string]: any;
}
interface ResponseData {
    RequestId: string;
    [key: string]: any;
}
/**
 * @inner
 */
export declare class AbstractClient {
    sdkVersion: string;
    path: string;
    credential: Credential;
    region: string;
    apiVersion: string;
    endpoint: string;
    profile: ClientProfile;
    /**
     * 实例化client对象
     * @param {string} endpoint 接入点域名
     * @param {string} version 产品版本
     * @param {Credential} credential 认证信息实例
     * @param {string} region 产品地域
     * @param {ClientProfile} profile 可选配置实例
     */
    constructor(endpoint: string, version: string, credential: Credential, region: string, profile: ClientProfile);
    /**
     * @inner
     */
    getEndpoint(): string;
    /**
     * @inner
     */
    succRequest(resp: AbstractModel, cb: ResponseCallback, data: ResponseData): void;
    /**
     * @inner
     */
    failRequest(err: string, cb: ResponseCallback): void;
    /**
     * @inner
     */
    request(action: string, req: AbstractModel, resp: AbstractModel, options: ResponseCallback | RequestOptions, cb?: ResponseCallback): void;
    /**
     * @inner
     */
    doRequest(action: string, req: AbstractModel): Promise<ResponseData>;
    /**
     * @inner
     */
    doRequestWithSign3(action: string, params: AbstractModel, options?: RequestOptions): Promise<ResponseData>;
    parseResponse(res: Response): Promise<ResponseData>;
    /**
     * @inner
     */
    mergeData(data: any, prefix?: string): any;
    /**
     * @inner
     */
    formatRequestData(action: string, params: RequestData): RequestData;
    /**
     * @inner
     */
    formatSignString(params: RequestData): string;
}
export {};
