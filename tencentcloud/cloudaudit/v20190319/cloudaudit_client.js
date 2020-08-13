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
const InquireAuditCreditResponse = models_1.Models.InquireAuditCreditResponse;
const StopLoggingRequest = models_1.Models.StopLoggingRequest;
const CmqRegionInfo = models_1.Models.CmqRegionInfo;
const GetAttributeKeyRequest = models_1.Models.GetAttributeKeyRequest;
const DeleteAuditResponse = models_1.Models.DeleteAuditResponse;
const UpdateAuditRequest = models_1.Models.UpdateAuditRequest;
const InquireAuditCreditRequest = models_1.Models.InquireAuditCreditRequest;
const ListAuditsRequest = models_1.Models.ListAuditsRequest;
const LookUpEventsRequest = models_1.Models.LookUpEventsRequest;
const StartLoggingRequest = models_1.Models.StartLoggingRequest;
const CreateAuditResponse = models_1.Models.CreateAuditResponse;
const StartLoggingResponse = models_1.Models.StartLoggingResponse;
const AttributeKeyDetail = models_1.Models.AttributeKeyDetail;
const ListCosEnableRegionRequest = models_1.Models.ListCosEnableRegionRequest;
const Resource = models_1.Models.Resource;
const ListCosEnableRegionResponse = models_1.Models.ListCosEnableRegionResponse;
const StopLoggingResponse = models_1.Models.StopLoggingResponse;
const LookupAttribute = models_1.Models.LookupAttribute;
const ListAuditsResponse = models_1.Models.ListAuditsResponse;
const UpdateAuditResponse = models_1.Models.UpdateAuditResponse;
const DescribeAuditRequest = models_1.Models.DescribeAuditRequest;
const CreateAuditRequest = models_1.Models.CreateAuditRequest;
const DeleteAuditRequest = models_1.Models.DeleteAuditRequest;
const ListCmqEnableRegionRequest = models_1.Models.ListCmqEnableRegionRequest;
const GetAttributeKeyResponse = models_1.Models.GetAttributeKeyResponse;
const ListCmqEnableRegionResponse = models_1.Models.ListCmqEnableRegionResponse;
const LookUpEventsResponse = models_1.Models.LookUpEventsResponse;
const CosRegionInfo = models_1.Models.CosRegionInfo;
const DescribeAuditResponse = models_1.Models.DescribeAuditResponse;
const Event = models_1.Models.Event;
const AuditSummary = models_1.Models.AuditSummary;
/**
 * cloudaudit client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cloudaudit.tencentcloudapi.com", "2019-03-19", credential, region, profile);
    }
    /**
     * 开启跟踪集
     * @param {StartLoggingRequest} req
     * @param {function(string, StartLoggingResponse):void} cb
     * @public
     */
    StartLogging(req, cb) {
        const resp = new StartLoggingResponse();
        this.request("StartLogging", req, resp, cb);
    }
    /**
     * 查询AttributeKey的有效取值范围
     * @param {GetAttributeKeyRequest} req
     * @param {function(string, GetAttributeKeyResponse):void} cb
     * @public
     */
    GetAttributeKey(req, cb) {
        const resp = new GetAttributeKeyResponse();
        this.request("GetAttributeKey", req, resp, cb);
    }
    /**
     * 查询云审计支持的cmq的可用区
     * @param {ListCmqEnableRegionRequest} req
     * @param {function(string, ListCmqEnableRegionResponse):void} cb
     * @public
     */
    ListCmqEnableRegion(req, cb) {
        const resp = new ListCmqEnableRegionResponse();
        this.request("ListCmqEnableRegion", req, resp, cb);
    }
    /**
     * 删除跟踪集
     * @param {DeleteAuditRequest} req
     * @param {function(string, DeleteAuditResponse):void} cb
     * @public
     */
    DeleteAudit(req, cb) {
        const resp = new DeleteAuditResponse();
        this.request("DeleteAudit", req, resp, cb);
    }
    /**
     * 关闭跟踪集
     * @param {StopLoggingRequest} req
     * @param {function(string, StopLoggingResponse):void} cb
     * @public
     */
    StopLogging(req, cb) {
        const resp = new StopLoggingResponse();
        this.request("StopLogging", req, resp, cb);
    }
    /**
     * 查询用户可创建跟踪集的数量
     * @param {InquireAuditCreditRequest} req
     * @param {function(string, InquireAuditCreditResponse):void} cb
     * @public
     */
    InquireAuditCredit(req, cb) {
        const resp = new InquireAuditCreditResponse();
        this.request("InquireAuditCredit", req, resp, cb);
    }
    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     * @param {UpdateAuditRequest} req
     * @param {function(string, UpdateAuditResponse):void} cb
     * @public
     */
    UpdateAudit(req, cb) {
        const resp = new UpdateAuditResponse();
        this.request("UpdateAudit", req, resp, cb);
    }
    /**
     * 查询跟踪集详情
     * @param {DescribeAuditRequest} req
     * @param {function(string, DescribeAuditResponse):void} cb
     * @public
     */
    DescribeAudit(req, cb) {
        const resp = new DescribeAuditResponse();
        this.request("DescribeAudit", req, resp, cb);
    }
    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     * @param {CreateAuditRequest} req
     * @param {function(string, CreateAuditResponse):void} cb
     * @public
     */
    CreateAudit(req, cb) {
        const resp = new CreateAuditResponse();
        this.request("CreateAudit", req, resp, cb);
    }
    /**
     * 查询云审计支持的cos可用区
     * @param {ListCosEnableRegionRequest} req
     * @param {function(string, ListCosEnableRegionResponse):void} cb
     * @public
     */
    ListCosEnableRegion(req, cb) {
        const resp = new ListCosEnableRegionResponse();
        this.request("ListCosEnableRegion", req, resp, cb);
    }
    /**
     * 用于对操作日志进行检索，便于用户进行查询相关的操作信息。
     * @param {LookUpEventsRequest} req
     * @param {function(string, LookUpEventsResponse):void} cb
     * @public
     */
    LookUpEvents(req, cb) {
        const resp = new LookUpEventsResponse();
        this.request("LookUpEvents", req, resp, cb);
    }
    /**
     * 查询跟踪集概要
     * @param {ListAuditsRequest} req
     * @param {function(string, ListAuditsResponse):void} cb
     * @public
     */
    ListAudits(req, cb) {
        const resp = new ListAuditsResponse();
        this.request("ListAudits", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cloudaudit_client.js.map