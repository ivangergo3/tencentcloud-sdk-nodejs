const tencentcloud = require("../../../../tencentcloud-sdk-nodejs")
const user = require("../../config/config")

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client
const models = tencentcloud.cvm.v20170312.Models
const Credential = tencentcloud.common.Credential
const ClientProfile = tencentcloud.common.ClientProfile
const HttpProfile = tencentcloud.common.HttpProfile

// 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey
//let cred = new Credential("secretId", "secretKey");
// 可以直接指定，也可以使用环境变量提供账号信息（需要先设置）
const cred = new Credential(user.secretId, user.secretKey)

// 实例化一个http选项，可选的，没有特殊需求可以跳过。
const httpProfile = new HttpProfile()
httpProfile.reqMethod = "POST"
httpProfile.reqTimeout = 30
httpProfile.endpoint = "cvm.ap-shanghai.tencentcloudapi.com"

// 实例化一个client选项，可选的，没有特殊需求可以跳过。
const clientProfile = new ClientProfile()
clientProfile.signMethod = "TC3-HMAC-SHA256"
clientProfile.httpProfile = httpProfile

// 实例化要请求产品(以cvm为例)的client对象。clientProfile可选。
const client = new CvmClient(cred, "ap-shanghai", clientProfile)

// 实例化一个请求对象,并填充参数
const req = new models.DescribeInstancesRequest()
const filters = {
  Filters: [
    {
      Name: "zone",
      Values: ["ap-shanghai-1", "ap-shanghai-2"],
    },
    {
      Name: "instance-charge-type",
      Values: ["POSTPAID_BY_HOUR"],
    },
  ],
}
// 传入json参数
req.from_json_string(JSON.stringify(filters))

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.DescribeInstances(req, function (err, response) {
  // 请求异常返回，打印异常信息
  if (err) {
    console.log(err)
    return
  }
  // 请求正常返回，打印response对象
  console.log(response.to_json_string())
})
