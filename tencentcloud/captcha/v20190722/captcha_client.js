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
const DescribeCaptchaResultResponse = models_1.Models.DescribeCaptchaResultResponse;
const DescribeCaptchaOperDataResponse = models_1.Models.DescribeCaptchaOperDataResponse;
const CaptchaOperDataInterceptUnit = models_1.Models.CaptchaOperDataInterceptUnit;
const CaptchaOperDataTryTimesDistributeUnit = models_1.Models.CaptchaOperDataTryTimesDistributeUnit;
const CaptchaOperDataLoadTimeUnit = models_1.Models.CaptchaOperDataLoadTimeUnit;
const DescribeCaptchaAppIdInfoRequest = models_1.Models.DescribeCaptchaAppIdInfoRequest;
const DescribeCaptchaAppIdInfoResponse = models_1.Models.DescribeCaptchaAppIdInfoResponse;
const CaptchaOperDataTryTimesUnit = models_1.Models.CaptchaOperDataTryTimesUnit;
const CaptchaUserAllAppId = models_1.Models.CaptchaUserAllAppId;
const DescribeCaptchaDataResponse = models_1.Models.DescribeCaptchaDataResponse;
const DescribeCaptchaDataRequest = models_1.Models.DescribeCaptchaDataRequest;
const DescribeCaptchaUserAllAppIdResponse = models_1.Models.DescribeCaptchaUserAllAppIdResponse;
const DescribeCaptchaDataSumRequest = models_1.Models.DescribeCaptchaDataSumRequest;
const UpdateCaptchaAppIdInfoRequest = models_1.Models.UpdateCaptchaAppIdInfoRequest;
const UpdateCaptchaAppIdInfoResponse = models_1.Models.UpdateCaptchaAppIdInfoResponse;
const DescribeCaptchaUserAllAppIdRequest = models_1.Models.DescribeCaptchaUserAllAppIdRequest;
const CaptchaQueryData = models_1.Models.CaptchaQueryData;
const DescribeCaptchaDataSumResponse = models_1.Models.DescribeCaptchaDataSumResponse;
const DescribeCaptchaOperDataRequest = models_1.Models.DescribeCaptchaOperDataRequest;
const CaptchaOperDataRes = models_1.Models.CaptchaOperDataRes;
const DescribeCaptchaResultRequest = models_1.Models.DescribeCaptchaResultRequest;
/**
 * captcha client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("captcha.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    /**
     * 安全验证码获取用户注册所有APPId和应用名称
     * @param {DescribeCaptchaUserAllAppIdRequest} req
     * @param {function(string, DescribeCaptchaUserAllAppIdResponse):void} cb
     * @public
     */
    DescribeCaptchaUserAllAppId(req, cb) {
        const resp = new DescribeCaptchaUserAllAppIdResponse();
        this.request("DescribeCaptchaUserAllAppId", req, resp, cb);
    }
    /**
     * 安全验证码查询请求数据概况，例如：按照时间段查询数据  昨日请求量、昨日恶意比例、昨日验证量、昨日通过量、昨日恶意拦截量……
     * @param {DescribeCaptchaDataSumRequest} req
     * @param {function(string, DescribeCaptchaDataSumResponse):void} cb
     * @public
     */
    DescribeCaptchaDataSum(req, cb) {
        const resp = new DescribeCaptchaDataSumResponse();
        this.request("DescribeCaptchaDataSum", req, resp, cb);
    }
    /**
     * 安全验证码用户操作数据查询，验证码加载耗时type = 1 、拦截情况type = 2、 一周通过平均尝试次数 type = 3、尝试次数分布 type = 4
     * @param {DescribeCaptchaOperDataRequest} req
     * @param {function(string, DescribeCaptchaOperDataResponse):void} cb
     * @public
     */
    DescribeCaptchaOperData(req, cb) {
        const resp = new DescribeCaptchaOperDataResponse();
        this.request("DescribeCaptchaOperData", req, resp, cb);
    }
    /**
     * 查询安全验证码应用APPId信息
     * @param {DescribeCaptchaAppIdInfoRequest} req
     * @param {function(string, DescribeCaptchaAppIdInfoResponse):void} cb
     * @public
     */
    DescribeCaptchaAppIdInfo(req, cb) {
        const resp = new DescribeCaptchaAppIdInfoResponse();
        this.request("DescribeCaptchaAppIdInfo", req, resp, cb);
    }
    /**
     * 安全验证码分类查询数据接口，请求量type=0、验证量type=1、通过量type=2、拦截量type=3  分钟级查询
     * @param {DescribeCaptchaDataRequest} req
     * @param {function(string, DescribeCaptchaDataResponse):void} cb
     * @public
     */
    DescribeCaptchaData(req, cb) {
        const resp = new DescribeCaptchaDataResponse();
        this.request("DescribeCaptchaData", req, resp, cb);
    }
    /**
     * 更新验证码应用APPId信息
     * @param {UpdateCaptchaAppIdInfoRequest} req
     * @param {function(string, UpdateCaptchaAppIdInfoResponse):void} cb
     * @public
     */
    UpdateCaptchaAppIdInfo(req, cb) {
        const resp = new UpdateCaptchaAppIdInfoResponse();
        this.request("UpdateCaptchaAppIdInfo", req, resp, cb);
    }
    /**
     * 核查验证码票据结果
     * @param {DescribeCaptchaResultRequest} req
     * @param {function(string, DescribeCaptchaResultResponse):void} cb
     * @public
     */
    DescribeCaptchaResult(req, cb) {
        const resp = new DescribeCaptchaResultResponse();
        this.request("DescribeCaptchaResult", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=captcha_client.js.map