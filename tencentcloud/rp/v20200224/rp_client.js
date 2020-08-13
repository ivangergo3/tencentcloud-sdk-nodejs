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
const QueryRegisterProtectionResponse = models_1.Models.QueryRegisterProtectionResponse;
const QueryRegisterProtectionRequest = models_1.Models.QueryRegisterProtectionRequest;
/**
 * rp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("rp.tencentcloudapi.com", "2020-02-24", credential, region, profile);
    }
    /**
     * 注册保护服务（RegisterProtection，RP）针对网站、APP 的线上注册场景，遇到 “恶意注册” 、“小号注册” 、“注册器注册” 等恶意行为，提供基于天御 DNA 算法的恶意防护引擎，从账号、设备、行为三个维度有效识别 “恶意注册”，从“源头”上防范业务风险。
     * @param {QueryRegisterProtectionRequest} req
     * @param {function(string, QueryRegisterProtectionResponse):void} cb
     * @public
     */
    QueryRegisterProtection(req, cb) {
        const resp = new QueryRegisterProtectionResponse();
        this.request("QueryRegisterProtection", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=rp_client.js.map