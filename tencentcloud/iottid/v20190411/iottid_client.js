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
const DescribePermissionRequest = models_1.Models.DescribePermissionRequest;
const VerifyChipBurnInfoResponse = models_1.Models.VerifyChipBurnInfoResponse;
const DeliverTidsResponse = models_1.Models.DeliverTidsResponse;
const BurnTidNotifyResponse = models_1.Models.BurnTidNotifyResponse;
const DescribeAvailableLibCountResponse = models_1.Models.DescribeAvailableLibCountResponse;
const UploadDeviceUniqueCodeResponse = models_1.Models.UploadDeviceUniqueCodeResponse;
const AuthTestTidResponse = models_1.Models.AuthTestTidResponse;
const DeliverTidNotifyResponse = models_1.Models.DeliverTidNotifyResponse;
const AuthTestTidRequest = models_1.Models.AuthTestTidRequest;
const BurnTidNotifyRequest = models_1.Models.BurnTidNotifyRequest;
const VerifyChipBurnInfoRequest = models_1.Models.VerifyChipBurnInfoRequest;
const UploadDeviceUniqueCodeRequest = models_1.Models.UploadDeviceUniqueCodeRequest;
const DescribeAvailableLibCountRequest = models_1.Models.DescribeAvailableLibCountRequest;
const DeliverTidsRequest = models_1.Models.DeliverTidsRequest;
const DeliverTidNotifyRequest = models_1.Models.DeliverTidNotifyRequest;
const TidKeysInfo = models_1.Models.TidKeysInfo;
const DescribePermissionResponse = models_1.Models.DescribePermissionResponse;
const DownloadTidsRequest = models_1.Models.DownloadTidsRequest;
const DownloadTidsResponse = models_1.Models.DownloadTidsResponse;
/**
 * iottid client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("iottid.tencentcloudapi.com", "2019-04-11", credential, region, profile);
    }
    /**
     * 单向认证测试TID
     * @param {AuthTestTidRequest} req
     * @param {function(string, AuthTestTidResponse):void} cb
     * @public
     */
    AuthTestTid(req, cb) {
        const resp = new AuthTestTidResponse();
        this.request("AuthTestTid", req, resp, cb);
    }
    /**
     * 上传硬件唯一标识码，是软加固设备身份参数。本接口如遇到错误数据，则所有当次上传数据失效。
     * @param {UploadDeviceUniqueCodeRequest} req
     * @param {function(string, UploadDeviceUniqueCodeResponse):void} cb
     * @public
     */
    UploadDeviceUniqueCode(req, cb) {
        const resp = new UploadDeviceUniqueCodeResponse();
        this.request("UploadDeviceUniqueCode", req, resp, cb);
    }
    /**
     * 下载控制台验证芯片烧录信息，保证TID与中心信息一致
     * @param {VerifyChipBurnInfoRequest} req
     * @param {function(string, VerifyChipBurnInfoResponse):void} cb
     * @public
     */
    VerifyChipBurnInfo(req, cb) {
        const resp = new VerifyChipBurnInfoResponse();
        this.request("VerifyChipBurnInfo", req, resp, cb);
    }
    /**
     * 设备服务商请求空发产品订单的TID信息
     * @param {DeliverTidsRequest} req
     * @param {function(string, DeliverTidsResponse):void} cb
     * @public
     */
    DeliverTids(req, cb) {
        const resp = new DeliverTidsResponse();
        this.request("DeliverTids", req, resp, cb);
    }
    /**
     * 安全芯片TID烧录回执
     * @param {BurnTidNotifyRequest} req
     * @param {function(string, BurnTidNotifyResponse):void} cb
     * @public
     */
    BurnTidNotify(req, cb) {
        const resp = new BurnTidNotifyResponse();
        this.request("BurnTidNotify", req, resp, cb);
    }
    /**
     * 查询企业用户TID平台控制台权限
     * @param {DescribePermissionRequest} req
     * @param {function(string, DescribePermissionResponse):void} cb
     * @public
     */
    DescribePermission(req, cb) {
        const resp = new DescribePermissionResponse();
        this.request("DescribePermission", req, resp, cb);
    }
    /**
     * 安全芯片为载体的TID空发回执，绑定TID与订单号。
     * @param {DeliverTidNotifyRequest} req
     * @param {function(string, DeliverTidNotifyResponse):void} cb
     * @public
     */
    DeliverTidNotify(req, cb) {
        const resp = new DeliverTidNotifyResponse();
        this.request("DeliverTidNotify", req, resp, cb);
    }
    /**
     * 下载芯片订单的TID
     * @param {DownloadTidsRequest} req
     * @param {function(string, DownloadTidsResponse):void} cb
     * @public
     */
    DownloadTids(req, cb) {
        const resp = new DownloadTidsResponse();
        this.request("DownloadTids", req, resp, cb);
    }
    /**
     * 查询指定订单的可空发的白盒密钥数量
     * @param {DescribeAvailableLibCountRequest} req
     * @param {function(string, DescribeAvailableLibCountResponse):void} cb
     * @public
     */
    DescribeAvailableLibCount(req, cb) {
        const resp = new DescribeAvailableLibCountResponse();
        this.request("DescribeAvailableLibCount", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=iottid_client.js.map