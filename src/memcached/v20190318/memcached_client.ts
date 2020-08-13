/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Models as models} from "./models"
import { AbstractClient } from '../../common/abstract_client'
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const TagInfo = models.TagInfo;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const InstanceListInfo = models.InstanceListInfo;


/**
 * memcached client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("memcached.tencentcloudapi.com", "2019-03-18", credential, region, profile);
    }
    
    /**
     * 获取Cmem实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req: any, cb: any): void {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }


}
