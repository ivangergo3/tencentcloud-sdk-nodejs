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
const DescribeDomainInfoResponse = models_1.Models.DescribeDomainInfoResponse;
const DescribeIpInfoRequest = models_1.Models.DescribeIpInfoRequest;
const DescribeThreatInfoResponse = models_1.Models.DescribeThreatInfoResponse;
const DescribeDomainInfoRequest = models_1.Models.DescribeDomainInfoRequest;
const IntelligenceType = models_1.Models.IntelligenceType;
const FileInfoType = models_1.Models.FileInfoType;
const TagType = models_1.Models.TagType;
const DescribeFileInfoResponse = models_1.Models.DescribeFileInfoResponse;
const DescribeThreatInfoRequest = models_1.Models.DescribeThreatInfoRequest;
const DescribeFileInfoRequest = models_1.Models.DescribeFileInfoRequest;
const DescribeIpInfoResponse = models_1.Models.DescribeIpInfoResponse;
/**
 * tics client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tics.tencentcloudapi.com", "2018-11-15", credential, region, profile);
    }
    /**
     * 提供文件相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     * @param {DescribeFileInfoRequest} req
     * @param {function(string, DescribeFileInfoResponse):void} cb
     * @public
     */
    DescribeFileInfo(req, cb) {
        const resp = new DescribeFileInfoResponse();
        this.request("DescribeFileInfo", req, resp, cb);
    }
    /**
     * 提供IP相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     * @param {DescribeIpInfoRequest} req
     * @param {function(string, DescribeIpInfoResponse):void} cb
     * @public
     */
    DescribeIpInfo(req, cb) {
        const resp = new DescribeIpInfoResponse();
        this.request("DescribeIpInfo", req, resp, cb);
    }
    /**
     * 提供域名相关的基础信息以及与攻击事件（团伙、家族）、恶意文件等相关联信息。
     * @param {DescribeDomainInfoRequest} req
     * @param {function(string, DescribeDomainInfoResponse):void} cb
     * @public
     */
    DescribeDomainInfo(req, cb) {
        const resp = new DescribeDomainInfoResponse();
        this.request("DescribeDomainInfo", req, resp, cb);
    }
    /**
     * 提供IP和域名相关威胁情报信息查询，这些信息可以辅助检测失陷主机、帮助SIEM/SOC等系统做研判决策、帮助运营团队对设备报警的编排处理。
     * @param {DescribeThreatInfoRequest} req
     * @param {function(string, DescribeThreatInfoResponse):void} cb
     * @public
     */
    DescribeThreatInfo(req, cb) {
        const resp = new DescribeThreatInfoResponse();
        this.request("DescribeThreatInfo", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tics_client.js.map