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
const DeleteCertRequest = models_1.Models.DeleteCertRequest;
const UploadCertResponse = models_1.Models.UploadCertResponse;
const DeleteCertResponse = models_1.Models.DeleteCertResponse;
const DescribeCertListResponse = models_1.Models.DescribeCertListResponse;
const UploadCertRequest = models_1.Models.UploadCertRequest;
const SSLCertificate = models_1.Models.SSLCertificate;
const DescribeCertListRequest = models_1.Models.DescribeCertListRequest;
const SSLProjectInfo = models_1.Models.SSLProjectInfo;
/**
 * wss client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("wss.tencentcloudapi.com", "2018-04-26", credential, region, profile);
    }
    /**
     * 本接口（DeleteCert）用于删除证书。
     * @param {DeleteCertRequest} req
     * @param {function(string, DeleteCertResponse):void} cb
     * @public
     */
    DeleteCert(req, cb) {
        const resp = new DeleteCertResponse();
        this.request("DeleteCert", req, resp, cb);
    }
    /**
     * 本接口(DescribeCertList)用于获取证书列表。
     * @param {DescribeCertListRequest} req
     * @param {function(string, DescribeCertListResponse):void} cb
     * @public
     */
    DescribeCertList(req, cb) {
        const resp = new DescribeCertListResponse();
        this.request("DescribeCertList", req, resp, cb);
    }
    /**
     * 本接口（UploadCert）用于上传证书。
     * @param {UploadCertRequest} req
     * @param {function(string, UploadCertResponse):void} cb
     * @public
     */
    UploadCert(req, cb) {
        const resp = new UploadCertResponse();
        this.request("UploadCert", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=wss_client.js.map