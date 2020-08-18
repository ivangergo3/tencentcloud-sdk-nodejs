/**
 * @inner
 */
export default class TencentCloudSDKHttpException extends Error {
    requestId: string;
    tcError?: string;
    httpCode?: number;
    code?: string;
    constructor(error: string, requestId?: string);
    getMessage(): string;
    getRequestId(): string;
    toString(): string;
    toLocaleString(): string;
}
