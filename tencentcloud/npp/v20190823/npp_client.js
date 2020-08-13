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
const DescribeCallBackStatusRequest = models_1.Models.DescribeCallBackStatusRequest;
const DescribeCallBackCdrRequest = models_1.Models.DescribeCallBackCdrRequest;
const CreateCallBackRequest = models_1.Models.CreateCallBackRequest;
const DeleteCallBackRequest = models_1.Models.DeleteCallBackRequest;
const GetVirtualNumResponse = models_1.Models.GetVirtualNumResponse;
const DelVirtualNumResponse = models_1.Models.DelVirtualNumResponse;
const CallBackCdr = models_1.Models.CallBackCdr;
const RreCallerHandle = models_1.Models.RreCallerHandle;
const DescribeCallerDisplayListRequest = models_1.Models.DescribeCallerDisplayListRequest;
const DescribeCallerDisplayListResponse = models_1.Models.DescribeCallerDisplayListResponse;
const CallBackPhoneCode = models_1.Models.CallBackPhoneCode;
const CreateCallBackResponse = models_1.Models.CreateCallBackResponse;
const DelVirtualNumRequest = models_1.Models.DelVirtualNumRequest;
const GetVirtualNumRequest = models_1.Models.GetVirtualNumRequest;
const DeleteCallBackResponse = models_1.Models.DeleteCallBackResponse;
const Get400CdrRequest = models_1.Models.Get400CdrRequest;
const DescribeCallBackCdrResponse = models_1.Models.DescribeCallBackCdrResponse;
const KeyList = models_1.Models.KeyList;
const VirturalNumCdr = models_1.Models.VirturalNumCdr;
const Get400CdrResponse = models_1.Models.Get400CdrResponse;
const DescribeCallBackStatusResponse = models_1.Models.DescribeCallBackStatusResponse;
/**
 * npp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("npp.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    /**
     * 回拨呼叫取消
     * @param {DeleteCallBackRequest} req
     * @param {function(string, DeleteCallBackResponse):void} cb
     * @public
     */
    DeleteCallBack(req, cb) {
        const resp = new DeleteCallBackResponse();
        this.request("DeleteCallBack", req, resp, cb);
    }
    /**
     * 回拨拉取主叫显号号码集合
     * @param {DescribeCallerDisplayListRequest} req
     * @param {function(string, DescribeCallerDisplayListResponse):void} cb
     * @public
     */
    DescribeCallerDisplayList(req, cb) {
        const resp = new DescribeCallerDisplayListResponse();
        this.request("DescribeCallerDisplayList", req, resp, cb);
    }
    /**
     * 直拨解绑中间号
     * @param {DelVirtualNumRequest} req
     * @param {function(string, DelVirtualNumResponse):void} cb
     * @public
     */
    DelVirtualNum(req, cb) {
        const resp = new DelVirtualNumResponse();
        this.request("DelVirtualNum", req, resp, cb);
    }
    /**
     * 直拨获取中间号（App 使用方发起）
     * @param {GetVirtualNumRequest} req
     * @param {function(string, GetVirtualNumResponse):void} cb
     * @public
     */
    GetVirtualNum(req, cb) {
        const resp = new GetVirtualNumResponse();
        this.request("GetVirtualNum", req, resp, cb);
    }
    /**
     * 直拨话单获取接口
     * @param {Get400CdrRequest} req
     * @param {function(string, Get400CdrResponse):void} cb
     * @public
     */
    Get400Cdr(req, cb) {
        const resp = new Get400CdrResponse();
        this.request("Get400Cdr", req, resp, cb);
    }
    /**
     * 回拨通话状态获取
     * @param {DescribeCallBackStatusRequest} req
     * @param {function(string, DescribeCallBackStatusResponse):void} cb
     * @public
     */
    DescribeCallBackStatus(req, cb) {
        const resp = new DescribeCallBackStatusResponse();
        this.request("DescribeCallBackStatus", req, resp, cb);
    }
    /**
     * 回拨呼叫请求
     * @param {CreateCallBackRequest} req
     * @param {function(string, CreateCallBackResponse):void} cb
     * @public
     */
    CreateCallBack(req, cb) {
        const resp = new CreateCallBackResponse();
        this.request("CreateCallBack", req, resp, cb);
    }
    /**
     * 回拨话单获取接口
     * @param {DescribeCallBackCdrRequest} req
     * @param {function(string, DescribeCallBackCdrResponse):void} cb
     * @public
     */
    DescribeCallBackCdr(req, cb) {
        const resp = new DescribeCallBackCdrResponse();
        this.request("DescribeCallBackCdr", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=npp_client.js.map