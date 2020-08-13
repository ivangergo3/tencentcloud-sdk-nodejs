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
const DescribeSmpnChpRequest = models_1.Models.DescribeSmpnChpRequest;
const EPARequest = models_1.Models.EPARequest;
const MHMRequest = models_1.Models.MHMRequest;
const MRLRequest = models_1.Models.MRLRequest;
const CreateSmpnEpaResponse = models_1.Models.CreateSmpnEpaResponse;
const DescribeSmpnFnrResponse = models_1.Models.DescribeSmpnFnrResponse;
const DescribeSmpnMhmResponse = models_1.Models.DescribeSmpnMhmResponse;
const DescribeSmpnFnrRequest = models_1.Models.DescribeSmpnFnrRequest;
const DescribeSmpnMrlRequest = models_1.Models.DescribeSmpnMrlRequest;
const CHPRequest = models_1.Models.CHPRequest;
const MRLResponse = models_1.Models.MRLResponse;
const DescribeSmpnMrlResponse = models_1.Models.DescribeSmpnMrlResponse;
const DescribeSmpnMhmRequest = models_1.Models.DescribeSmpnMhmRequest;
const MHMResponse = models_1.Models.MHMResponse;
const CreateSmpnEpaRequest = models_1.Models.CreateSmpnEpaRequest;
const EPAResponse = models_1.Models.EPAResponse;
const FNRResponse = models_1.Models.FNRResponse;
const CHPResponse = models_1.Models.CHPResponse;
const DescribeSmpnChpResponse = models_1.Models.DescribeSmpnChpResponse;
const FNRRequest = models_1.Models.FNRRequest;
/**
 * smpn client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("smpn.tencentcloudapi.com", "2019-08-22", credential, region, profile);
    }
    /**
     * 号码营销监控
     * @param {DescribeSmpnMhmRequest} req
     * @param {function(string, DescribeSmpnMhmResponse):void} cb
     * @public
     */
    DescribeSmpnMhm(req, cb) {
        const resp = new DescribeSmpnMhmResponse();
        this.request("DescribeSmpnMhm", req, resp, cb);
    }
    /**
     * 虚假号码识别
     * @param {DescribeSmpnFnrRequest} req
     * @param {function(string, DescribeSmpnFnrResponse):void} cb
     * @public
     */
    DescribeSmpnFnr(req, cb) {
        const resp = new DescribeSmpnFnrResponse();
        this.request("DescribeSmpnFnr", req, resp, cb);
    }
    /**
     * 企业号码认证
     * @param {CreateSmpnEpaRequest} req
     * @param {function(string, CreateSmpnEpaResponse):void} cb
     * @public
     */
    CreateSmpnEpa(req, cb) {
        const resp = new CreateSmpnEpaResponse();
        this.request("CreateSmpnEpa", req, resp, cb);
    }
    /**
     * 查询号码的标记和标记次数
     * @param {DescribeSmpnChpRequest} req
     * @param {function(string, DescribeSmpnChpResponse):void} cb
     * @public
     */
    DescribeSmpnChp(req, cb) {
        const resp = new DescribeSmpnChpResponse();
        this.request("DescribeSmpnChp", req, resp, cb);
    }
    /**
     * 查询号码恶意标记等级
     * @param {DescribeSmpnMrlRequest} req
     * @param {function(string, DescribeSmpnMrlResponse):void} cb
     * @public
     */
    DescribeSmpnMrl(req, cb) {
        const resp = new DescribeSmpnMrlResponse();
        this.request("DescribeSmpnMrl", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=smpn_client.js.map