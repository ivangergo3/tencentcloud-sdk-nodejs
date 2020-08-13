/**
 * @inner
 */
export declare class AbstractClient {
    sdkVersion: string;
    path: string;
    credential: any;
    region: string | null;
    apiVersion: string;
    endpoint: string;
    profile: any;
    /**
     * 实例化client对象
     * @param {string} endpoint 接入点域名
     * @param {string} version 产品版本
     * @param {Credential} credential 认证信息实例
     * @param {string} region 产品地域
     * @param {ClientProfile} profile 可选配置实例
     */
    constructor(endpoint: string, version: string, credential: any, region: string, profile: any);
    /**
     * @inner
     */
    getEndpoint(): any;
    /**
     * @inner
     */
    succRequest(resp: any, cb: any, data: any): void;
    /**
     * @inner
     */
    failRequest(err: any, cb: any): void;
    /**
     * @inner
     */
    request(action: string, req: any, resp: any, options: any, cb?: any): void;
    /**
     * @inner
     */
    doRequest(action: string, req: any): Promise<any>;
    /**
     * @inner
     */
    doRequestWithSign3(action: string, params: any, options: any): Promise<any>;
    parseResponse(res: any): Promise<any>;
    /**
     * @inner
     */
    mergeData(data: any, prefix?: string): any;
    /**
     * @inner
     */
    formatRequestData(action: any, params: any): any;
    /**
     * @inner
     */
    formatSignString(params: any): string;
}
