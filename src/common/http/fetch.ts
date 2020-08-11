import fetch from 'node-fetch'
import * as HttpsProxyAgent from 'https-proxy-agent'

export default function (url, options) {
  const instanceOptions = options || {}

  if (!options.agent && process.env.http_proxy) {
    instanceOptions.agent = new HttpsProxyAgent(process.env.http_proxy)
  }

  return fetch(url, instanceOptions)
}
