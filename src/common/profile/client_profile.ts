import HttpProfile from './http_profile'

/**
 * 可选参数类
 * @class
 */
export default class ClientProfile {
  /**
   * @param {string} signMethod 签名方法，当前支持(HmacSHA1 HmacSHA256)
   * @param {HttpProfile} httpProfile http相关选项实例
   */
  constructor(signMethod?: any, httpProfile?: any) {
    /**
     * 签名方法，当前支持(HmacSHA1 HmacSHA256)
     * @type {string}
     */
    this.signMethod = signMethod || 'HmacSHA256'

    /**
     * http相关选项实例
     * @type {httpProfile}
     */
    this.httpProfile = httpProfile || new HttpProfile()
  }
}
