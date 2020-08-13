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
const CorrectMultiImageResponse = models_1.Models.CorrectMultiImageResponse;
const DescribeTaskRequest = models_1.Models.DescribeTaskRequest;
const SentenceItem = models_1.Models.SentenceItem;
const ECCResponse = models_1.Models.ECCResponse;
const EHOCRResponse = models_1.Models.EHOCRResponse;
const ErrorCoordinate = models_1.Models.ErrorCoordinate;
const ECCRequest = models_1.Models.ECCRequest;
const SentenceCom = models_1.Models.SentenceCom;
const SentenceSuggest = models_1.Models.SentenceSuggest;
const CorrectData = models_1.Models.CorrectData;
const ScoreCategory = models_1.Models.ScoreCategory;
const Aspect = models_1.Models.Aspect;
const CompostionContext = models_1.Models.CompostionContext;
const DescribeTaskResponse = models_1.Models.DescribeTaskResponse;
const EHOCRRequest = models_1.Models.EHOCRRequest;
const CorrectMultiImageRequest = models_1.Models.CorrectMultiImageRequest;
/**
 * ecc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ecc.tencentcloudapi.com", "2018-12-13", credential, region, profile);
    }
    /**
     * https://ecc.tencentcloudapi.com/?Action=EHOCR
图像识别批改接口
     * @param {EHOCRRequest} req
     * @param {function(string, EHOCRResponse):void} cb
     * @public
     */
    EHOCR(req, cb) {
        const resp = new EHOCRResponse();
        this.request("EHOCR", req, resp, cb);
    }
    /**
     * 接口请求域名： ecc.tencentcloudapi.com
纯文本英语作文批改
     * @param {ECCRequest} req
     * @param {function(string, ECCResponse):void} cb
     * @public
     */
    ECC(req, cb) {
        const resp = new ECCResponse();
        this.request("ECC", req, resp, cb);
    }
    /**
     * 异步任务结果查询接口
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        const resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }
    /**
     * https://ecc.tencentcloudapi.com/?Action=CorrectMultiImage
多图像识别批改接口
     * @param {CorrectMultiImageRequest} req
     * @param {function(string, CorrectMultiImageResponse):void} cb
     * @public
     */
    CorrectMultiImage(req, cb) {
        const resp = new CorrectMultiImageResponse();
        this.request("CorrectMultiImage", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ecc_client.js.map