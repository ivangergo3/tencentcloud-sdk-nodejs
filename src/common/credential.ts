/**
 * 认证信息类
 * @class
 */
export default class Credential {
  public secretId: string
  public secretKey: string
  public token: string
  /**
   * @param {string} secretId
   * @param {string} secretKey
   * @param {string=} token
   */
  constructor(secretId: string, secretKey: string, token: string) {
    /**
     * secretId,可在控制台获取
     * @type {string || null}
     */
    this.secretId = secretId || null

    /**
     * secretKey,可在控制台获取
     * @type {string || null}
     */
    this.secretKey = secretKey || null

    /**
     * token
     * @type {string || null}
     */
    this.token = token || null
  }
}
