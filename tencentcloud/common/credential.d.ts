/**
 * 认证信息类
 * @class
 */
export declare class Credential {
    secretId: string | null;
    secretKey: string | null;
    token: string | null;
    /**
     * @param {string} secretId
     * @param {string} secretKey
     * @param {string=} token
     */
    constructor(secretId: string, secretKey: string, token?: string);
}
