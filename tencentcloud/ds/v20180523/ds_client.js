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
const SendVcodeResponse = models_1.Models.SendVcodeResponse;
const DeleteAccountRequest = models_1.Models.DeleteAccountRequest;
const CreateSealRequest = models_1.Models.CreateSealRequest;
const CreateSealResponse = models_1.Models.CreateSealResponse;
const SignKeyword = models_1.Models.SignKeyword;
const DescribeTaskStatusResponse = models_1.Models.DescribeTaskStatusResponse;
const CheckVcodeRequest = models_1.Models.CheckVcodeRequest;
const CheckVcodeResponse = models_1.Models.CheckVcodeResponse;
const DownloadContractResponse = models_1.Models.DownloadContractResponse;
const SignLocation = models_1.Models.SignLocation;
const SignContractByKeywordResponse = models_1.Models.SignContractByKeywordResponse;
const SignInfo = models_1.Models.SignInfo;
const DeleteSealRequest = models_1.Models.DeleteSealRequest;
const DownloadContractRequest = models_1.Models.DownloadContractRequest;
const CreateEnterpriseAccountResponse = models_1.Models.CreateEnterpriseAccountResponse;
const CreatePersonalAccountResponse = models_1.Models.CreatePersonalAccountResponse;
const CreateEnterpriseAccountRequest = models_1.Models.CreateEnterpriseAccountRequest;
const CreateContractByUploadRequest = models_1.Models.CreateContractByUploadRequest;
const CreateContractByUploadResponse = models_1.Models.CreateContractByUploadResponse;
const DeleteSealResponse = models_1.Models.DeleteSealResponse;
const CreatePersonalAccountRequest = models_1.Models.CreatePersonalAccountRequest;
const DescribeTaskStatusRequest = models_1.Models.DescribeTaskStatusRequest;
const SignContractByKeywordRequest = models_1.Models.SignContractByKeywordRequest;
const SendVcodeRequest = models_1.Models.SendVcodeRequest;
const SignContractByCoordinateRequest = models_1.Models.SignContractByCoordinateRequest;
const SignContractByCoordinateResponse = models_1.Models.SignContractByCoordinateResponse;
const DeleteAccountResponse = models_1.Models.DeleteAccountResponse;
/**
 * ds client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ds.tencentcloudapi.com", "2018-05-23", credential, region, profile);
    }
    /**
     * 此接口适用于：客户平台通过上传PDF文件作为合同，以备未来进行签署。接口返回任务号，可调用DescribeTaskStatus接口查看任务执行结果。
     * @param {CreateContractByUploadRequest} req
     * @param {function(string, CreateContractByUploadResponse):void} cb
     * @public
     */
    CreateContractByUpload(req, cb) {
        const resp = new CreateContractByUploadResponse();
        this.request("CreateContractByUpload", req, resp, cb);
    }
    /**
     * 此接口用于客户电子合同平台增加某用户的印章图片。客户平台可以调用此接口增加某用户的印章图片。
     * @param {CreateSealRequest} req
     * @param {function(string, CreateSealResponse):void} cb
     * @public
     */
    CreateSeal(req, cb) {
        const resp = new CreateSealResponse();
        this.request("CreateSeal", req, resp, cb);
    }
    /**
     * 下载合同接口。调用该接口可以下载签署中和签署完成的合同。接口返回任务号，可调用DescribeTaskStatus接口查看任务执行结果。
     * @param {DownloadContractRequest} req
     * @param {function(string, DownloadContractResponse):void} cb
     * @public
     */
    DownloadContract(req, cb) {
        const resp = new DownloadContractResponse();
        this.request("DownloadContract", req, resp, cb);
    }
    /**
     * 删除企业电子合同平台的最终用户。调用该接口后，腾讯云将删除该用户账号。删除账号后，已经签名的合同不受影响。
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        const resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }
    /**
     * 接口使用于：客户平台可使用该接口查询任务执行状态或者执行结果
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        const resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }
    /**
     * 为企业电子合同平台的最终个人用户进行开户。在企业电子合同平台进行操作的个人用户，企业电子合同平台向腾讯云发送个人用户的信息，提交开户命令。腾讯云接到请求后，自动为企业电子合同平台的个人用户生成一张数字证书。
     * @param {CreatePersonalAccountRequest} req
     * @param {function(string, CreatePersonalAccountResponse):void} cb
     * @public
     */
    CreatePersonalAccount(req, cb) {
        const resp = new CreatePersonalAccountResponse();
        this.request("CreatePersonalAccount", req, resp, cb);
    }
    /**
     * 此接口适用于：客户平台在创建好合同后，由合同签署方对创建的合同内容进行确认，无误后再进行签署。客户平台使用该接口对PDF合同文档按照关键字和坐标进行签署。
     * @param {SignContractByKeywordRequest} req
     * @param {function(string, SignContractByKeywordResponse):void} cb
     * @public
     */
    SignContractByKeyword(req, cb) {
        const resp = new SignContractByKeywordResponse();
        this.request("SignContractByKeyword", req, resp, cb);
    }
    /**
     * 删除印章接口，删除指定账号的某个印章
     * @param {DeleteSealRequest} req
     * @param {function(string, DeleteSealResponse):void} cb
     * @public
     */
    DeleteSeal(req, cb) {
        const resp = new DeleteSealResponse();
        this.request("DeleteSeal", req, resp, cb);
    }
    /**
     * 为企业电子合同平台的最终企业用户进行开户。在企业电子合同平台进行操作的企业用户，企业电子合同平台向腾讯云发送企业用户的信息，提交开户命令。腾讯云接到请求后，自动为企业电子合同平台的企业用户生成一张数字证书。
     * @param {CreateEnterpriseAccountRequest} req
     * @param {function(string, CreateEnterpriseAccountResponse):void} cb
     * @public
     */
    CreateEnterpriseAccount(req, cb) {
        const resp = new CreateEnterpriseAccountResponse();
        this.request("CreateEnterpriseAccount", req, resp, cb);
    }
    /**
     * 发送验证码接口。此接口用于：企业电子合同平台需要腾讯云发送验证码对其用户进行验证时调用，腾讯云将向其用户联系手机(企业电子合同平台为用户开户时通过接口传入)发送验证码，以验证码授权方式签署合同。用户验证工作由企业电子合同平台自身完成。
     * @param {SendVcodeRequest} req
     * @param {function(string, SendVcodeResponse):void} cb
     * @public
     */
    SendVcode(req, cb) {
        const resp = new SendVcodeResponse();
        this.request("SendVcode", req, resp, cb);
    }
    /**
     * 检测验证码接口。此接口用于企业电子合同平台通过给用户发送短信验证码，以短信授权方式签署合同。此接口配合发送验证码接口使用。

用户在企业电子合同平台输入收到的验证码后，由企业电子合同平台调用该接口向腾讯云提交确认受托签署合同验证码命令。验证码验证正确时，本次合同签署的授权成功。
     * @param {CheckVcodeRequest} req
     * @param {function(string, CheckVcodeResponse):void} cb
     * @public
     */
    CheckVcode(req, cb) {
        const resp = new CheckVcodeResponse();
        this.request("CheckVcode", req, resp, cb);
    }
    /**
     * 此接口适用于：客户平台在创建好合同后，由合同签署方对创建的合同内容进行确认，无误后再进行签署。客户平台使用该接口提供详细的PDF文档签名坐标进行签署。
     * @param {SignContractByCoordinateRequest} req
     * @param {function(string, SignContractByCoordinateResponse):void} cb
     * @public
     */
    SignContractByCoordinate(req, cb) {
        const resp = new SignContractByCoordinateResponse();
        this.request("SignContractByCoordinate", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ds_client.js.map