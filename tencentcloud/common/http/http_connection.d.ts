/**
 * @inner
 */
export declare class HttpConnection {
    static doRequest({ method, url, data, timeout }: any): Promise<any>;
    static doRequestWithSign3({ method, url, data, service, action, region, version, secretId, secretKey, multipart, timeout, token, requestClient, }: any): Promise<any>;
}
