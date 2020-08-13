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
const CheckDomainResponse = models.CheckDomainResponse;
const DescribeDomainPriceListResponse = models.DescribeDomainPriceListResponse;
const CheckDomainRequest = models.CheckDomainRequest;
const PriceInfo = models.PriceInfo;
const DescribeDomainPriceListRequest = models.DescribeDomainPriceListRequest;


/**
 * domain client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("domain.tencentcloudapi.com", "2018-08-08", credential, region, profile);
    }
    
    /**
     * 按照域名后缀获取对应的价格列表
     * @param {DescribeDomainPriceListRequest} req
     * @param {function(string, DescribeDomainPriceListResponse):void} cb
     * @public
     */
    DescribeDomainPriceList(req: any, cb: any): void {
        const resp = new DescribeDomainPriceListResponse();
        this.request("DescribeDomainPriceList", req, resp, cb);
    }

    /**
     * 检查域名是否可以注册。
     * @param {CheckDomainRequest} req
     * @param {function(string, CheckDomainResponse):void} cb
     * @public
     */
    CheckDomain(req: any, cb: any): void {
        const resp = new CheckDomainResponse();
        this.request("CheckDomain", req, resp, cb);
    }


}
