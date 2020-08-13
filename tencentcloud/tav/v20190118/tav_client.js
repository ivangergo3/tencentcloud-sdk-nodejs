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
const GetLocalEngineResponse = models_1.Models.GetLocalEngineResponse;
const ScanFileHashResponse = models_1.Models.ScanFileHashResponse;
const ScanFileHashRequest = models_1.Models.ScanFileHashRequest;
const ScanFileResponse = models_1.Models.ScanFileResponse;
const GetScanResultResponse = models_1.Models.GetScanResultResponse;
const GetLocalEngineRequest = models_1.Models.GetLocalEngineRequest;
const GetScanResultRequest = models_1.Models.GetScanResultRequest;
const ScanFileRequest = models_1.Models.ScanFileRequest;
/**
 * tav client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tav.tencentcloudapi.com", "2019-01-18", credential, region, profile);
    }
    /**
     * tav文件上传扫描结果查询
     * @param {GetScanResultRequest} req
     * @param {function(string, GetScanResultResponse):void} cb
     * @public
     */
    GetScanResult(req, cb) {
        const resp = new GetScanResultResponse();
        this.request("GetScanResult", req, resp, cb);
    }
    /**
     * 通过文件哈希值获取文件黑白属性
     * @param {ScanFileHashRequest} req
     * @param {function(string, ScanFileHashResponse):void} cb
     * @public
     */
    ScanFileHash(req, cb) {
        const resp = new ScanFileHashResponse();
        this.request("ScanFileHash", req, resp, cb);
    }
    /**
     * 获取TAV本地引擎
     * @param {GetLocalEngineRequest} req
     * @param {function(string, GetLocalEngineResponse):void} cb
     * @public
     */
    GetLocalEngine(req, cb) {
        const resp = new GetLocalEngineResponse();
        this.request("GetLocalEngine", req, resp, cb);
    }
    /**
     * tav文件上传扫描
     * @param {ScanFileRequest} req
     * @param {function(string, ScanFileResponse):void} cb
     * @public
     */
    ScanFile(req, cb) {
        const resp = new ScanFileResponse();
        this.request("ScanFile", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tav_client.js.map