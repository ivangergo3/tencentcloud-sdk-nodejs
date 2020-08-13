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
const ApplyCertificateResponse = models_1.Models.ApplyCertificateResponse;
const DeleteCertificateRequest = models_1.Models.DeleteCertificateRequest;
const DescribeCertificateOperateLogsResponse = models_1.Models.DescribeCertificateOperateLogsResponse;
const CommitCertificateInformationRequest = models_1.Models.CommitCertificateInformationRequest;
const CommitCertificateInformationResponse = models_1.Models.CommitCertificateInformationResponse;
const ReplaceCertificateResponse = models_1.Models.ReplaceCertificateResponse;
const DownloadCertificateRequest = models_1.Models.DownloadCertificateRequest;
const CancelCertificateOrderRequest = models_1.Models.CancelCertificateOrderRequest;
const ModifyCertificateProjectResponse = models_1.Models.ModifyCertificateProjectResponse;
const Certificates = models_1.Models.Certificates;
const CertificateExtra = models_1.Models.CertificateExtra;
const DescribeCertificateResponse = models_1.Models.DescribeCertificateResponse;
const OperationLog = models_1.Models.OperationLog;
const UploadCertificateRequest = models_1.Models.UploadCertificateRequest;
const DescribeCertificateDetailRequest = models_1.Models.DescribeCertificateDetailRequest;
const ApplyCertificateRequest = models_1.Models.ApplyCertificateRequest;
const ReplaceCertificateRequest = models_1.Models.ReplaceCertificateRequest;
const DeleteCertificateResponse = models_1.Models.DeleteCertificateResponse;
const DvAuthDetail = models_1.Models.DvAuthDetail;
const ModifyCertificateProjectRequest = models_1.Models.ModifyCertificateProjectRequest;
const DvAuths = models_1.Models.DvAuths;
const ModifyCertificateAliasRequest = models_1.Models.ModifyCertificateAliasRequest;
const DescribeCertificateRequest = models_1.Models.DescribeCertificateRequest;
const ProjectInfo = models_1.Models.ProjectInfo;
const DescribeCertificateOperateLogsRequest = models_1.Models.DescribeCertificateOperateLogsRequest;
const CancelCertificateOrderResponse = models_1.Models.CancelCertificateOrderResponse;
const SubmitCertificateInformationResponse = models_1.Models.SubmitCertificateInformationResponse;
const DescribeCertificatesResponse = models_1.Models.DescribeCertificatesResponse;
const DownloadCertificateResponse = models_1.Models.DownloadCertificateResponse;
const UploadCertificateResponse = models_1.Models.UploadCertificateResponse;
const DescribeCertificateDetailResponse = models_1.Models.DescribeCertificateDetailResponse;
const ModifyCertificateAliasResponse = models_1.Models.ModifyCertificateAliasResponse;
const SubmitCertificateInformationRequest = models_1.Models.SubmitCertificateInformationRequest;
const SubmittedData = models_1.Models.SubmittedData;
const DescribeCertificatesRequest = models_1.Models.DescribeCertificatesRequest;
/**
 * ssl client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ssl.tencentcloudapi.com", "2019-12-05", credential, region, profile);
    }
    /**
     * 本接口（DescribeCertificates）用于获取证书列表。
     * @param {DescribeCertificatesRequest} req
     * @param {function(string, DescribeCertificatesResponse):void} cb
     * @public
     */
    DescribeCertificates(req, cb) {
        const resp = new DescribeCertificatesResponse();
        this.request("DescribeCertificates", req, resp, cb);
    }
    /**
     * 批量修改证书所属项目。
     * @param {ModifyCertificateProjectRequest} req
     * @param {function(string, ModifyCertificateProjectResponse):void} cb
     * @public
     */
    ModifyCertificateProject(req, cb) {
        const resp = new ModifyCertificateProjectResponse();
        this.request("ModifyCertificateProject", req, resp, cb);
    }
    /**
     * 本接口（UploadCertificate）用于上传证书。
     * @param {UploadCertificateRequest} req
     * @param {function(string, UploadCertificateResponse):void} cb
     * @public
     */
    UploadCertificate(req, cb) {
        const resp = new UploadCertificateResponse();
        this.request("UploadCertificate", req, resp, cb);
    }
    /**
     * 取消证书订单。
     * @param {CancelCertificateOrderRequest} req
     * @param {function(string, CancelCertificateOrderResponse):void} cb
     * @public
     */
    CancelCertificateOrder(req, cb) {
        const resp = new CancelCertificateOrderResponse();
        this.request("CancelCertificateOrder", req, resp, cb);
    }
    /**
     * 提交证书订单。
     * @param {CommitCertificateInformationRequest} req
     * @param {function(string, CommitCertificateInformationResponse):void} cb
     * @public
     */
    CommitCertificateInformation(req, cb) {
        const resp = new CommitCertificateInformationResponse();
        this.request("CommitCertificateInformation", req, resp, cb);
    }
    /**
     * 本接口（DeleteCertificate）用于删除证书。
     * @param {DeleteCertificateRequest} req
     * @param {function(string, DeleteCertificateResponse):void} cb
     * @public
     */
    DeleteCertificate(req, cb) {
        const resp = new DeleteCertificateResponse();
        this.request("DeleteCertificate", req, resp, cb);
    }
    /**
     * 用户传入证书id和备注来修改证书备注。
     * @param {ModifyCertificateAliasRequest} req
     * @param {function(string, ModifyCertificateAliasResponse):void} cb
     * @public
     */
    ModifyCertificateAlias(req, cb) {
        const resp = new ModifyCertificateAliasResponse();
        this.request("ModifyCertificateAlias", req, resp, cb);
    }
    /**
     * 本接口（DownloadCertificate）用于下载证书。
     * @param {DownloadCertificateRequest} req
     * @param {function(string, DownloadCertificateResponse):void} cb
     * @public
     */
    DownloadCertificate(req, cb) {
        const resp = new DownloadCertificateResponse();
        this.request("DownloadCertificate", req, resp, cb);
    }
    /**
     * 本接口（ReplaceCertificate）用于重颁发证书。已申请的免费证书仅支持 RSA 算法、密钥对参数为2048的证书重颁发，并且目前仅支持1次重颁发。
     * @param {ReplaceCertificateRequest} req
     * @param {function(string, ReplaceCertificateResponse):void} cb
     * @public
     */
    ReplaceCertificate(req, cb) {
        const resp = new ReplaceCertificateResponse();
        this.request("ReplaceCertificate", req, resp, cb);
    }
    /**
     * 本接口（ApplyCertificate）用于免费证书申请。
     * @param {ApplyCertificateRequest} req
     * @param {function(string, ApplyCertificateResponse):void} cb
     * @public
     */
    ApplyCertificate(req, cb) {
        const resp = new ApplyCertificateResponse();
        this.request("ApplyCertificate", req, resp, cb);
    }
    /**
     * 获取用户账号下有关证书的操作日志。
     * @param {DescribeCertificateOperateLogsRequest} req
     * @param {function(string, DescribeCertificateOperateLogsResponse):void} cb
     * @public
     */
    DescribeCertificateOperateLogs(req, cb) {
        const resp = new DescribeCertificateOperateLogsResponse();
        this.request("DescribeCertificateOperateLogs", req, resp, cb);
    }
    /**
     * 提交证书资料。
     * @param {SubmitCertificateInformationRequest} req
     * @param {function(string, SubmitCertificateInformationResponse):void} cb
     * @public
     */
    SubmitCertificateInformation(req, cb) {
        const resp = new SubmitCertificateInformationResponse();
        this.request("SubmitCertificateInformation", req, resp, cb);
    }
    /**
     * 获取证书详情。
     * @param {DescribeCertificateDetailRequest} req
     * @param {function(string, DescribeCertificateDetailResponse):void} cb
     * @public
     */
    DescribeCertificateDetail(req, cb) {
        const resp = new DescribeCertificateDetailResponse();
        this.request("DescribeCertificateDetail", req, resp, cb);
    }
    /**
     * 本接口（DescribeCertificate）用于获取证书信息。
     * @param {DescribeCertificateRequest} req
     * @param {function(string, DescribeCertificateResponse):void} cb
     * @public
     */
    DescribeCertificate(req, cb) {
        const resp = new DescribeCertificateResponse();
        this.request("DescribeCertificate", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ssl_client.js.map