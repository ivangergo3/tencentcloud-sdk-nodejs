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
const ModifyDbauditInstancesRenewFlagResponse = models.ModifyDbauditInstancesRenewFlagResponse;
const DescribeDbauditInstanceTypeResponse = models.DescribeDbauditInstanceTypeResponse;
const InquiryPriceDbauditInstanceResponse = models.InquiryPriceDbauditInstanceResponse;
const CdsAuditInstance = models.CdsAuditInstance;
const ModifyDbauditInstancesRenewFlagRequest = models.ModifyDbauditInstancesRenewFlagRequest;
const DescribeDbauditUsedRegionsResponse = models.DescribeDbauditUsedRegionsResponse;
const DescribeDbauditInstancesRequest = models.DescribeDbauditInstancesRequest;
const DescribeDbauditInstanceTypeRequest = models.DescribeDbauditInstanceTypeRequest;
const RegionInfo = models.RegionInfo;
const DescribeDbauditInstancesResponse = models.DescribeDbauditInstancesResponse;
const DbauditTypesInfo = models.DbauditTypesInfo;
const DescribeDbauditUsedRegionsRequest = models.DescribeDbauditUsedRegionsRequest;
const InquiryPriceDbauditInstanceRequest = models.InquiryPriceDbauditInstanceRequest;
const DescribeDasbImageIdsResponse = models.DescribeDasbImageIdsResponse;
const DescribeDasbImageIdsRequest = models.DescribeDasbImageIdsRequest;


/**
 * cds client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("cds.tencentcloudapi.com", "2018-04-20", credential, region, profile);
    }
    
    /**
     * 获取镜像列表
     * @param {DescribeDasbImageIdsRequest} req
     * @param {function(string, DescribeDasbImageIdsResponse):void} cb
     * @public
     */
    DescribeDasbImageIds(req: any, cb: any): void {
        const resp = new DescribeDasbImageIdsResponse();
        this.request("DescribeDasbImageIds", req, resp, cb);
    }

    /**
     * 本接口 (ModifyDbauditInstancesRenewFlag) 用于修改数据安全审计产品实例续费标识
     * @param {ModifyDbauditInstancesRenewFlagRequest} req
     * @param {function(string, ModifyDbauditInstancesRenewFlagResponse):void} cb
     * @public
     */
    ModifyDbauditInstancesRenewFlag(req: any, cb: any): void {
        const resp = new ModifyDbauditInstancesRenewFlagResponse();
        this.request("ModifyDbauditInstancesRenewFlag", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDbauditInstances) 用于查询数据安全审计实例列表
     * @param {DescribeDbauditInstancesRequest} req
     * @param {function(string, DescribeDbauditInstancesResponse):void} cb
     * @public
     */
    DescribeDbauditInstances(req: any, cb: any): void {
        const resp = new DescribeDbauditInstancesResponse();
        this.request("DescribeDbauditInstances", req, resp, cb);
    }

    /**
     * 用于查询数据安全审计产品实例价格
     * @param {InquiryPriceDbauditInstanceRequest} req
     * @param {function(string, InquiryPriceDbauditInstanceResponse):void} cb
     * @public
     */
    InquiryPriceDbauditInstance(req: any, cb: any): void {
        const resp = new InquiryPriceDbauditInstanceResponse();
        this.request("InquiryPriceDbauditInstance", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDbauditUsedRegions) 用于查询可售卖地域列表。
     * @param {DescribeDbauditUsedRegionsRequest} req
     * @param {function(string, DescribeDbauditUsedRegionsResponse):void} cb
     * @public
     */
    DescribeDbauditUsedRegions(req: any, cb: any): void {
        const resp = new DescribeDbauditUsedRegionsResponse();
        this.request("DescribeDbauditUsedRegions", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDbauditInstanceType) 用于查询可售卖的产品规格列表。
     * @param {DescribeDbauditInstanceTypeRequest} req
     * @param {function(string, DescribeDbauditInstanceTypeResponse):void} cb
     * @public
     */
    DescribeDbauditInstanceType(req: any, cb: any): void {
        const resp = new DescribeDbauditInstanceTypeResponse();
        this.request("DescribeDbauditInstanceType", req, resp, cb);
    }


}
