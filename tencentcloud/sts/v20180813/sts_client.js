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
const AssumeRoleWithSAMLResponse = models_1.Models.AssumeRoleWithSAMLResponse;
const ApiKey = models_1.Models.ApiKey;
const AssumeRoleWithSAMLRequest = models_1.Models.AssumeRoleWithSAMLRequest;
const GetFederationTokenResponse = models_1.Models.GetFederationTokenResponse;
const QueryApiKeyResponse = models_1.Models.QueryApiKeyResponse;
const AssumeRoleResponse = models_1.Models.AssumeRoleResponse;
const QueryApiKeyRequest = models_1.Models.QueryApiKeyRequest;
const GetFederationTokenRequest = models_1.Models.GetFederationTokenRequest;
const Credentials = models_1.Models.Credentials;
const AssumeRoleRequest = models_1.Models.AssumeRoleRequest;
/**
 * sts client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("sts.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    /**
     * 获取联合身份临时访问凭证
     * @param {GetFederationTokenRequest} req
     * @param {function(string, GetFederationTokenResponse):void} cb
     * @public
     */
    GetFederationToken(req, cb) {
        const resp = new GetFederationTokenResponse();
        this.request("GetFederationToken", req, resp, cb);
    }
    /**
     * 拉取API密钥列表
     * @param {QueryApiKeyRequest} req
     * @param {function(string, QueryApiKeyResponse):void} cb
     * @public
     */
    QueryApiKey(req, cb) {
        const resp = new QueryApiKeyResponse();
        this.request("QueryApiKey", req, resp, cb);
    }
    /**
     * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时凭证。
     * @param {AssumeRoleWithSAMLRequest} req
     * @param {function(string, AssumeRoleWithSAMLResponse):void} cb
     * @public
     */
    AssumeRoleWithSAML(req, cb) {
        const resp = new AssumeRoleWithSAMLResponse();
        this.request("AssumeRoleWithSAML", req, resp, cb);
    }
    /**
     * 申请扮演角色
     * @param {AssumeRoleRequest} req
     * @param {function(string, AssumeRoleResponse):void} cb
     * @public
     */
    AssumeRole(req, cb) {
        const resp = new AssumeRoleResponse();
        this.request("AssumeRole", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=sts_client.js.map