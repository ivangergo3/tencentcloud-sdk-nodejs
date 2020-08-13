"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const models_1 = require("./models");
const abstract_client_1 = require("../../common/abstract_client");
const ModifyDbauditInstancesRenewFlagResponse = models_1.Models.ModifyDbauditInstancesRenewFlagResponse;
const DescribeDbauditInstanceTypeResponse = models_1.Models.DescribeDbauditInstanceTypeResponse;
const InquiryPriceDbauditInstanceResponse = models_1.Models.InquiryPriceDbauditInstanceResponse;
const CdsAuditInstance = models_1.Models.CdsAuditInstance;
const ModifyDbauditInstancesRenewFlagRequest = models_1.Models.ModifyDbauditInstancesRenewFlagRequest;
const DescribeDbauditUsedRegionsResponse = models_1.Models.DescribeDbauditUsedRegionsResponse;
const DescribeDbauditInstancesRequest = models_1.Models.DescribeDbauditInstancesRequest;
const DescribeDbauditInstanceTypeRequest = models_1.Models.DescribeDbauditInstanceTypeRequest;
const RegionInfo = models_1.Models.RegionInfo;
const DescribeDbauditInstancesResponse = models_1.Models.DescribeDbauditInstancesResponse;
const DbauditTypesInfo = models_1.Models.DbauditTypesInfo;
const DescribeDbauditUsedRegionsRequest = models_1.Models.DescribeDbauditUsedRegionsRequest;
const InquiryPriceDbauditInstanceRequest = models_1.Models.InquiryPriceDbauditInstanceRequest;
const DescribeDasbImageIdsResponse = models_1.Models.DescribeDasbImageIdsResponse;
const DescribeDasbImageIdsRequest = models_1.Models.DescribeDasbImageIdsRequest;
/**
 * cds client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cds.tencentcloudapi.com", "2018-04-20", credential, region, profile);
    }
    /**
     * 获取镜像列表
     * @param {DescribeDasbImageIdsRequest} req
     * @param {function(string, DescribeDasbImageIdsResponse):void} cb
     * @public
     */
    DescribeDasbImageIds(req, cb) {
        const resp = new DescribeDasbImageIdsResponse();
        this.request("DescribeDasbImageIds", req, resp, cb);
    }
    /**
     * 本接口 (ModifyDbauditInstancesRenewFlag) 用于修改数据安全审计产品实例续费标识
     * @param {ModifyDbauditInstancesRenewFlagRequest} req
     * @param {function(string, ModifyDbauditInstancesRenewFlagResponse):void} cb
     * @public
     */
    ModifyDbauditInstancesRenewFlag(req, cb) {
        const resp = new ModifyDbauditInstancesRenewFlagResponse();
        this.request("ModifyDbauditInstancesRenewFlag", req, resp, cb);
    }
    /**
     * 本接口 (DescribeDbauditInstances) 用于查询数据安全审计实例列表
     * @param {DescribeDbauditInstancesRequest} req
     * @param {function(string, DescribeDbauditInstancesResponse):void} cb
     * @public
     */
    DescribeDbauditInstances(req, cb) {
        const resp = new DescribeDbauditInstancesResponse();
        this.request("DescribeDbauditInstances", req, resp, cb);
    }
    /**
     * 用于查询数据安全审计产品实例价格
     * @param {InquiryPriceDbauditInstanceRequest} req
     * @param {function(string, InquiryPriceDbauditInstanceResponse):void} cb
     * @public
     */
    InquiryPriceDbauditInstance(req, cb) {
        const resp = new InquiryPriceDbauditInstanceResponse();
        this.request("InquiryPriceDbauditInstance", req, resp, cb);
    }
    /**
     * 本接口 (DescribeDbauditUsedRegions) 用于查询可售卖地域列表。
     * @param {DescribeDbauditUsedRegionsRequest} req
     * @param {function(string, DescribeDbauditUsedRegionsResponse):void} cb
     * @public
     */
    DescribeDbauditUsedRegions(req, cb) {
        const resp = new DescribeDbauditUsedRegionsResponse();
        this.request("DescribeDbauditUsedRegions", req, resp, cb);
    }
    /**
     * 本接口 (DescribeDbauditInstanceType) 用于查询可售卖的产品规格列表。
     * @param {DescribeDbauditInstanceTypeRequest} req
     * @param {function(string, DescribeDbauditInstanceTypeResponse):void} cb
     * @public
     */
    DescribeDbauditInstanceType(req, cb) {
        const resp = new DescribeDbauditInstanceTypeResponse();
        this.request("DescribeDbauditInstanceType", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cds_client.js.map