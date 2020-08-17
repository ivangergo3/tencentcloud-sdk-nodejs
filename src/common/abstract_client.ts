import { sdkVersion } from "./sdk_version"
import { ClientProfile } from "./profile/client_profile"
import Sign from "./sign"
import { HttpConnection } from "./http/http_connection"
import { Credential } from "./credential"
import TencentCloudSDKHttpException from "./exception/tencent_cloud_sdk_exception"

/**
 * @inner
 */
export class AbstractClient {
  sdkVersion: string
  path: string
  credential: Credential
  region: string
  apiVersion: string
  endpoint: string
  profile: ClientProfile
  /**
   * 实例化client对象
   * @param {string} endpoint 接入点域名
   * @param {string} version 产品版本
   * @param {Credential} credential 认证信息实例
   * @param {string} region 产品地域
   * @param {ClientProfile} profile 可选配置实例
   */
  constructor(
    endpoint: string,
    version: string,
    credential: Credential,
    region: string,
    profile: ClientProfile
  ) {
    this.path = "/"

    /**
     * 认证信息实例
     */
    this.credential = credential || null

    /**
     * 产品地域
     */
    this.region = region || null
    this.sdkVersion = "SDK_NODEJS_" + sdkVersion
    this.apiVersion = version
    this.endpoint = endpoint

    /**
     * 可选配置实例
     * @type {ClientProfile}
     */
    this.profile = profile || new ClientProfile()
  }

  /**
   * @inner
   */
  getEndpoint(): string {
    return this.profile.httpProfile.endpoint || this.endpoint
  }

  /**
   * @inner
   */
  succRequest(resp: any, cb: any, data: any): void {
    resp.deserialize(data)
    cb(null, resp)
  }

  /**
   * @inner
   */
  failRequest(err: any, cb: any): void {
    cb(err, null)
  }

  /**
   * @inner
   */
  request(action: string, req: any, resp: any, options: any, cb?: any): void {
    if (typeof options === "function") {
      cb = options
      options = {}
    }
    if (this.profile.signMethod === "TC3-HMAC-SHA256") {
      this.doRequestWithSign3(action, req, options).then(
        (data) => this.succRequest(resp, cb, data),
        (error) => this.failRequest(error, cb)
      )
    } else {
      this.doRequest(action, req).then(
        (data) => this.succRequest(resp, cb, data),
        (error) => this.failRequest(error, cb)
      )
    }
  }

  /**
   * @inner
   */
  async doRequest(action: string, req: any): Promise<any> {
    let params = this.mergeData(req)
    params = this.formatRequestData(action, params)
    let res
    try {
      res = await HttpConnection.doRequest({
        method: this.profile.httpProfile.reqMethod,
        url: this.profile.httpProfile.protocol + this.getEndpoint() + this.path,
        data: params,
        timeout: this.profile.httpProfile.reqTimeout * 1000,
      })
    } catch (error) {
      throw new TencentCloudSDKHttpException(error.message)
    }
    return await this.parseResponse(res)
  }

  /**
   * @inner
   */
  async doRequestWithSign3(action: string, params: any, options: any): Promise<any> {
    let res
    try {
      res = await HttpConnection.doRequestWithSign3({
        method: this.profile.httpProfile.reqMethod,
        url: this.profile.httpProfile.protocol + this.getEndpoint() + this.path,
        secretId: this.credential.secretId,
        secretKey: this.credential.secretKey,
        region: this.region,
        data: params,
        service: this.getEndpoint().split(".")[0],
        action: action,
        version: this.apiVersion,
        multipart: options.multipart,
        timeout: this.profile.httpProfile.reqTimeout * 1000,
        token: this.credential.token,
        requestClient: this.sdkVersion,
      })
    } catch (e) {
      throw new TencentCloudSDKHttpException(e.message)
    }
    return await this.parseResponse(res)
  }

  async parseResponse(res: any): Promise<any> {
    if (res.status !== 200) {
      const tcError: any = new TencentCloudSDKHttpException(res.statusText)
      tcError.httpCode = res.status
      throw tcError
    } else {
      const data = await res.json()
      if (data.Response.Error) {
        const tcError: any = new TencentCloudSDKHttpException(
          data.Response.Error.Message,
          data.Response.RequestId
        )
        tcError.code = data.Response.Error.Code
        throw tcError
      } else {
        return data.Response
      }
    }
  }

  /**
   * @inner
   */
  mergeData(data: any, prefix = ""): any {
    const ret: any = {}
    for (const k in data) {
      if (data[k] === null) {
        continue
      }
      if (data[k] instanceof Array || data[k] instanceof Object) {
        Object.assign(ret, this.mergeData(data[k], prefix + k + "."))
      } else {
        ret[prefix + k] = data[k]
      }
    }
    return ret
  }

  /**
   * @inner
   */
  formatRequestData(action: string, params: any): any {
    params.Action = action
    params.RequestClient = this.sdkVersion
    params.Nonce = Math.round(Math.random() * 65535)
    params.Timestamp = Math.round(Date.now() / 1000)
    params.Version = this.apiVersion

    if (this.credential.secretId) {
      params.SecretId = this.credential.secretId
    }

    if (this.region) {
      params.Region = this.region
    }

    if (this.credential.token) {
      params.Token = this.credential.token
    }

    if (this.profile.signMethod) {
      params.SignatureMethod = this.profile.signMethod
    }
    const signStr = this.formatSignString(params)

    params.Signature = Sign.sign(this.credential.secretKey, signStr, this.profile.signMethod)
    return params
  }

  /**
   * @inner
   */
  formatSignString(params: any): any {
    let strParam = ""
    const keys = Object.keys(params)
    keys.sort()
    for (const k in keys) {
      //k = k.replace(/_/g, '.');
      strParam += "&" + keys[k] + "=" + params[keys[k]]
    }
    const strSign =
      this.profile.httpProfile.reqMethod.toLocaleUpperCase() +
      this.getEndpoint() +
      this.path +
      "?" +
      strParam.slice(1)
    return strSign
  }
}
