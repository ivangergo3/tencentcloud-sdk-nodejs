import fetch, { RequestInit } from 'node-fetch'
import HttpsProxyAgent = require('https-proxy-agent')

export default function (url: string, options: RequestInit) {
  const instanceOptions = options || {}

  if (!options.agent && process.env.http_proxy) {
    instanceOptions.agent = new HttpsProxyAgent(process.env.http_proxy)
  }

  return fetch(url, instanceOptions)
}
