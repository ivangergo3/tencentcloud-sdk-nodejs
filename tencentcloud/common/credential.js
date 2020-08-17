"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 认证信息类
 * @class
 */
class Credential {
    /**
     * @param {string} secretId
     * @param {string} secretKey
     * @param {string=} token
     */
    constructor(secretId, secretKey, token) {
        /**
         * secretId,可在控制台获取
         */
        this.secretId = secretId;
        /**
         * secretKey,可在控制台获取
         */
        this.secretKey = secretKey;
        /**
         * token
         */
        this.token = token;
    }
}
exports.Credential = Credential;
//# sourceMappingURL=credential.js.map