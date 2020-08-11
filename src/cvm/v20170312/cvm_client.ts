/** eslint-disabled */

/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { DescribeInstancesResponse } from './models'
import { AbstractClient } from '../../common/abstract_client'

/**
 * cvm client
 * @class
 */
class CvmClient extends AbstractClient {
  constructor(credential: any, region: any, profile: any) {
    super('cvm.tencentcloudapi.com', '2017-03-12', credential, region, profile)
  }

  /**
     * 本接口 (DescribeInstances) 用于查询一个或多个实例的详细信息。

* 可以根据实例`ID`、实例名称或者实例计费模式等信息来查询实例的详细信息。过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的实例。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
  DescribeInstances(req: any, cb: any) {
    let resp = new DescribeInstancesResponse()
    this.request('DescribeInstances', req, resp, cb)
  }
}
module.exports = CvmClient
