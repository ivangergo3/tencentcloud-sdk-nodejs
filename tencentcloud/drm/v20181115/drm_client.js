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
const CreateLicenseResponse = models_1.Models.CreateLicenseResponse;
const KeyParam = models_1.Models.KeyParam;
const FairPlayPemDigestInfo = models_1.Models.FairPlayPemDigestInfo;
const CreateEncryptKeysResponse = models_1.Models.CreateEncryptKeysResponse;
const CreateLicenseRequest = models_1.Models.CreateLicenseRequest;
const DescribeAllKeysRequest = models_1.Models.DescribeAllKeysRequest;
const DrmSourceObject = models_1.Models.DrmSourceObject;
const CreateEncryptKeysRequest = models_1.Models.CreateEncryptKeysRequest;
const ModifyFairPlayPemResponse = models_1.Models.ModifyFairPlayPemResponse;
const DescribeFairPlayPemResponse = models_1.Models.DescribeFairPlayPemResponse;
const Key = models_1.Models.Key;
const PlaybackPolicy = models_1.Models.PlaybackPolicy;
const AddFairPlayPemResponse = models_1.Models.AddFairPlayPemResponse;
const AddFairPlayPemRequest = models_1.Models.AddFairPlayPemRequest;
const DeleteFairPlayPemRequest = models_1.Models.DeleteFairPlayPemRequest;
const DescribeKeysResponse = models_1.Models.DescribeKeysResponse;
const DescribeAllKeysResponse = models_1.Models.DescribeAllKeysResponse;
const StartEncryptionRequest = models_1.Models.StartEncryptionRequest;
const ModifyFairPlayPemRequest = models_1.Models.ModifyFairPlayPemRequest;
const DeleteFairPlayPemResponse = models_1.Models.DeleteFairPlayPemResponse;
const DrmOutputPara = models_1.Models.DrmOutputPara;
const StartEncryptionResponse = models_1.Models.StartEncryptionResponse;
const DescribeFairPlayPemRequest = models_1.Models.DescribeFairPlayPemRequest;
const DescribeKeysRequest = models_1.Models.DescribeKeysRequest;
const DrmOutputObject = models_1.Models.DrmOutputObject;
/**
 * drm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("drm.tencentcloudapi.com", "2018-11-15", credential, region, profile);
    }
    /**
     * 开发者调用该接口，启动一次内容文件的DRM加密工作流
     * @param {StartEncryptionRequest} req
     * @param {function(string, StartEncryptionResponse):void} cb
     * @public
     */
    StartEncryption(req, cb) {
        const resp = new StartEncryptionResponse();
        this.request("StartEncryption", req, resp, cb);
    }
    /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     * @param {AddFairPlayPemRequest} req
     * @param {function(string, AddFairPlayPemResponse):void} cb
     * @public
     */
    AddFairPlayPem(req, cb) {
        const resp = new AddFairPlayPemResponse();
        this.request("AddFairPlayPem", req, resp, cb);
    }
    /**
     * 该接口用来设置加密的密钥。注意，同一个content id，只能设置一次！
     * @param {CreateEncryptKeysRequest} req
     * @param {function(string, CreateEncryptKeysResponse):void} cb
     * @public
     */
    CreateEncryptKeys(req, cb) {
        const resp = new CreateEncryptKeysResponse();
        this.request("CreateEncryptKeys", req, resp, cb);
    }
    /**
     * 本接口用来生成DRM方案对应的播放许可证，开发者需提供DRM方案类型、内容类型参数，后台将生成许可证后返回许可证数据
开发者需要转发终端设备发出的许可证请求信息。
     * @param {CreateLicenseRequest} req
     * @param {function(string, CreateLicenseResponse):void} cb
     * @public
     */
    CreateLicense(req, cb) {
        const resp = new CreateLicenseResponse();
        this.request("CreateLicense", req, resp, cb);
    }
    /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     * @param {ModifyFairPlayPemRequest} req
     * @param {function(string, ModifyFairPlayPemResponse):void} cb
     * @public
     */
    ModifyFairPlayPem(req, cb) {
        const resp = new ModifyFairPlayPemResponse();
        this.request("ModifyFairPlayPem", req, resp, cb);
    }
    /**
     * 开发者需要指定使用的DRM类型、和需要加密的Track类型，后台返回加密使用的密钥
如果加密使用的ContentID没有关联的密钥信息，后台会自动生成新的密钥返回

     * @param {DescribeKeysRequest} req
     * @param {function(string, DescribeKeysResponse):void} cb
     * @public
     */
    DescribeKeys(req, cb) {
        const resp = new DescribeKeysResponse();
        this.request("DescribeKeys", req, resp, cb);
    }
    /**
     * 本接口用来查询指定DRM类型、ContentType的所有加密密钥

     * @param {DescribeAllKeysRequest} req
     * @param {function(string, DescribeAllKeysResponse):void} cb
     * @public
     */
    DescribeAllKeys(req, cb) {
        const resp = new DescribeAllKeysResponse();
        this.request("DescribeAllKeys", req, resp, cb);
    }
    /**
     * 本接口用来删除fairplay方案的私钥、ask等信息
注：高风险操作，删除后，您将无法使用腾讯云DRM提供的fairplay服务。
由于缓存，删除操作需要约半小时生效
     * @param {DeleteFairPlayPemRequest} req
     * @param {function(string, DeleteFairPlayPemResponse):void} cb
     * @public
     */
    DeleteFairPlayPem(req, cb) {
        const resp = new DeleteFairPlayPemResponse();
        this.request("DeleteFairPlayPem", req, resp, cb);
    }
    /**
     * 该接口用来查询设置的FairPlay私钥校验信息。可用该接口校验设置的私钥与本身的私钥是否一致。
     * @param {DescribeFairPlayPemRequest} req
     * @param {function(string, DescribeFairPlayPemResponse):void} cb
     * @public
     */
    DescribeFairPlayPem(req, cb) {
        const resp = new DescribeFairPlayPemResponse();
        this.request("DescribeFairPlayPem", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=drm_client.js.map