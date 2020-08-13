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
const Canvas = models_1.Models.Canvas;
const LayoutParams = models_1.Models.LayoutParams;
const ResumeOnlineRecordResponse = models_1.Models.ResumeOnlineRecordResponse;
const StartOnlineRecordRequest = models_1.Models.StartOnlineRecordRequest;
const DescribeOnlineRecordCallbackRequest = models_1.Models.DescribeOnlineRecordCallbackRequest;
const DescribeOnlineRecordCallbackResponse = models_1.Models.DescribeOnlineRecordCallbackResponse;
const SetTranscodeCallbackResponse = models_1.Models.SetTranscodeCallbackResponse;
const StopOnlineRecordRequest = models_1.Models.StopOnlineRecordRequest;
const StreamLayout = models_1.Models.StreamLayout;
const CreateTranscodeResponse = models_1.Models.CreateTranscodeResponse;
const VideoInfo = models_1.Models.VideoInfo;
const CustomLayout = models_1.Models.CustomLayout;
const SetTranscodeCallbackKeyResponse = models_1.Models.SetTranscodeCallbackKeyResponse;
const Concat = models_1.Models.Concat;
const DescribeOnlineRecordRequest = models_1.Models.DescribeOnlineRecordRequest;
const StartOnlineRecordResponse = models_1.Models.StartOnlineRecordResponse;
const Whiteboard = models_1.Models.Whiteboard;
const DescribeOnlineRecordResponse = models_1.Models.DescribeOnlineRecordResponse;
const CreateTranscodeRequest = models_1.Models.CreateTranscodeRequest;
const SetOnlineRecordCallbackKeyResponse = models_1.Models.SetOnlineRecordCallbackKeyResponse;
const PauseOnlineRecordResponse = models_1.Models.PauseOnlineRecordResponse;
const SetTranscodeCallbackKeyRequest = models_1.Models.SetTranscodeCallbackKeyRequest;
const DescribeTranscodeRequest = models_1.Models.DescribeTranscodeRequest;
const DescribeTranscodeResponse = models_1.Models.DescribeTranscodeResponse;
const SetOnlineRecordCallbackResponse = models_1.Models.SetOnlineRecordCallbackResponse;
const SetOnlineRecordCallbackKeyRequest = models_1.Models.SetOnlineRecordCallbackKeyRequest;
const StopOnlineRecordResponse = models_1.Models.StopOnlineRecordResponse;
const DescribeTranscodeCallbackRequest = models_1.Models.DescribeTranscodeCallbackRequest;
const ResumeOnlineRecordRequest = models_1.Models.ResumeOnlineRecordRequest;
const DescribeTranscodeCallbackResponse = models_1.Models.DescribeTranscodeCallbackResponse;
const SetTranscodeCallbackRequest = models_1.Models.SetTranscodeCallbackRequest;
const SetOnlineRecordCallbackRequest = models_1.Models.SetOnlineRecordCallbackRequest;
const MixStream = models_1.Models.MixStream;
const OmittedDuration = models_1.Models.OmittedDuration;
const PauseOnlineRecordRequest = models_1.Models.PauseOnlineRecordRequest;
/**
 * tiw client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tiw.tencentcloudapi.com", "2019-09-19", credential, region, profile);
    }
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     * @param {SetOnlineRecordCallbackRequest} req
     * @param {function(string, SetOnlineRecordCallbackResponse):void} cb
     * @public
     */
    SetOnlineRecordCallback(req, cb) {
        const resp = new SetOnlineRecordCallbackResponse();
        this.request("SetOnlineRecordCallback", req, resp, cb);
    }
    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetTranscodeCallbackKeyRequest} req
     * @param {function(string, SetTranscodeCallbackKeyResponse):void} cb
     * @public
     */
    SetTranscodeCallbackKey(req, cb) {
        const resp = new SetTranscodeCallbackKeyResponse();
        this.request("SetTranscodeCallbackKey", req, resp, cb);
    }
    /**
     * 查询文档转码任务的执行进度与转码结果
     * @param {DescribeTranscodeRequest} req
     * @param {function(string, DescribeTranscodeResponse):void} cb
     * @public
     */
    DescribeTranscode(req, cb) {
        const resp = new DescribeTranscodeResponse();
        this.request("DescribeTranscode", req, resp, cb);
    }
    /**
     * 创建一个文档转码任务
     * @param {CreateTranscodeRequest} req
     * @param {function(string, CreateTranscodeResponse):void} cb
     * @public
     */
    CreateTranscode(req, cb) {
        const resp = new CreateTranscodeResponse();
        this.request("CreateTranscode", req, resp, cb);
    }
    /**
     * 停止实时录制
     * @param {StopOnlineRecordRequest} req
     * @param {function(string, StopOnlineRecordResponse):void} cb
     * @public
     */
    StopOnlineRecord(req, cb) {
        const resp = new StopOnlineRecordResponse();
        this.request("StopOnlineRecord", req, resp, cb);
    }
    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     * @param {SetTranscodeCallbackRequest} req
     * @param {function(string, SetTranscodeCallbackResponse):void} cb
     * @public
     */
    SetTranscodeCallback(req, cb) {
        const resp = new SetTranscodeCallbackResponse();
        this.request("SetTranscodeCallback", req, resp, cb);
    }
    /**
     * 发起一个实时录制任务
     * @param {StartOnlineRecordRequest} req
     * @param {function(string, StartOnlineRecordResponse):void} cb
     * @public
     */
    StartOnlineRecord(req, cb) {
        const resp = new StartOnlineRecordResponse();
        this.request("StartOnlineRecord", req, resp, cb);
    }
    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetOnlineRecordCallbackKeyRequest} req
     * @param {function(string, SetOnlineRecordCallbackKeyResponse):void} cb
     * @public
     */
    SetOnlineRecordCallbackKey(req, cb) {
        const resp = new SetOnlineRecordCallbackKeyResponse();
        this.request("SetOnlineRecordCallbackKey", req, resp, cb);
    }
    /**
     * 暂停实时录制
     * @param {PauseOnlineRecordRequest} req
     * @param {function(string, PauseOnlineRecordResponse):void} cb
     * @public
     */
    PauseOnlineRecord(req, cb) {
        const resp = new PauseOnlineRecordResponse();
        this.request("PauseOnlineRecord", req, resp, cb);
    }
    /**
     * 查询文档转码回调地址
     * @param {DescribeTranscodeCallbackRequest} req
     * @param {function(string, DescribeTranscodeCallbackResponse):void} cb
     * @public
     */
    DescribeTranscodeCallback(req, cb) {
        const resp = new DescribeTranscodeCallbackResponse();
        this.request("DescribeTranscodeCallback", req, resp, cb);
    }
    /**
     * 查询实时录制任务状态与结果
     * @param {DescribeOnlineRecordRequest} req
     * @param {function(string, DescribeOnlineRecordResponse):void} cb
     * @public
     */
    DescribeOnlineRecord(req, cb) {
        const resp = new DescribeOnlineRecordResponse();
        this.request("DescribeOnlineRecord", req, resp, cb);
    }
    /**
     * 查询实时录制回调地址
     * @param {DescribeOnlineRecordCallbackRequest} req
     * @param {function(string, DescribeOnlineRecordCallbackResponse):void} cb
     * @public
     */
    DescribeOnlineRecordCallback(req, cb) {
        const resp = new DescribeOnlineRecordCallbackResponse();
        this.request("DescribeOnlineRecordCallback", req, resp, cb);
    }
    /**
     * 恢复实时录制
     * @param {ResumeOnlineRecordRequest} req
     * @param {function(string, ResumeOnlineRecordResponse):void} cb
     * @public
     */
    ResumeOnlineRecord(req, cb) {
        const resp = new ResumeOnlineRecordResponse();
        this.request("ResumeOnlineRecord", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tiw_client.js.map