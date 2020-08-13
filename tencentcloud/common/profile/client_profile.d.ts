/**
 * 可选参数类
 * @class
 */
export declare class ClientProfile {
    signMethod: string;
    httpProfile: any;
    /**
     * @param {string} signMethod 签名方法，当前支持(HmacSHA1 HmacSHA256)
     * @param {HttpProfile} httpProfile http相关选项实例
     */
    constructor(signMethod?: string, httpProfile?: any);
}
