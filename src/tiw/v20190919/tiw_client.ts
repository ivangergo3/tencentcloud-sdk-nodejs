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
import { Models as models} from "./models"
import { AbstractClient } from '../../common/abstract_client'
const Canvas = models.Canvas;
const LayoutParams = models.LayoutParams;
const ResumeOnlineRecordResponse = models.ResumeOnlineRecordResponse;
const StartOnlineRecordRequest = models.StartOnlineRecordRequest;
const DescribeOnlineRecordCallbackRequest = models.DescribeOnlineRecordCallbackRequest;
const DescribeOnlineRecordCallbackResponse = models.DescribeOnlineRecordCallbackResponse;
const SetTranscodeCallbackResponse = models.SetTranscodeCallbackResponse;
const StopOnlineRecordRequest = models.StopOnlineRecordRequest;
const StreamLayout = models.StreamLayout;
const CreateTranscodeResponse = models.CreateTranscodeResponse;
const VideoInfo = models.VideoInfo;
const CustomLayout = models.CustomLayout;
const SetTranscodeCallbackKeyResponse = models.SetTranscodeCallbackKeyResponse;
const Concat = models.Concat;
const DescribeOnlineRecordRequest = models.DescribeOnlineRecordRequest;
const StartOnlineRecordResponse = models.StartOnlineRecordResponse;
const Whiteboard = models.Whiteboard;
const DescribeOnlineRecordResponse = models.DescribeOnlineRecordResponse;
const CreateTranscodeRequest = models.CreateTranscodeRequest;
const SetOnlineRecordCallbackKeyResponse = models.SetOnlineRecordCallbackKeyResponse;
const PauseOnlineRecordResponse = models.PauseOnlineRecordResponse;
const SetTranscodeCallbackKeyRequest = models.SetTranscodeCallbackKeyRequest;
const DescribeTranscodeRequest = models.DescribeTranscodeRequest;
const DescribeTranscodeResponse = models.DescribeTranscodeResponse;
const SetOnlineRecordCallbackResponse = models.SetOnlineRecordCallbackResponse;
const SetOnlineRecordCallbackKeyRequest = models.SetOnlineRecordCallbackKeyRequest;
const StopOnlineRecordResponse = models.StopOnlineRecordResponse;
const DescribeTranscodeCallbackRequest = models.DescribeTranscodeCallbackRequest;
const ResumeOnlineRecordRequest = models.ResumeOnlineRecordRequest;
const DescribeTranscodeCallbackResponse = models.DescribeTranscodeCallbackResponse;
const SetTranscodeCallbackRequest = models.SetTranscodeCallbackRequest;
const SetOnlineRecordCallbackRequest = models.SetOnlineRecordCallbackRequest;
const MixStream = models.MixStream;
const OmittedDuration = models.OmittedDuration;
const PauseOnlineRecordRequest = models.PauseOnlineRecordRequest;


/**
 * tiw client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("tiw.tencentcloudapi.com", "2019-09-19", credential, region, profile);
    }
    
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     * @param {SetOnlineRecordCallbackRequest} req
     * @param {function(string, SetOnlineRecordCallbackResponse):void} cb
     * @public
     */
    SetOnlineRecordCallback(req: any, cb: any): void {
        const resp = new SetOnlineRecordCallbackResponse();
        this.request("SetOnlineRecordCallback", req, resp, cb);
    }

    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetTranscodeCallbackKeyRequest} req
     * @param {function(string, SetTranscodeCallbackKeyResponse):void} cb
     * @public
     */
    SetTranscodeCallbackKey(req: any, cb: any): void {
        const resp = new SetTranscodeCallbackKeyResponse();
        this.request("SetTranscodeCallbackKey", req, resp, cb);
    }

    /**
     * 查询文档转码任务的执行进度与转码结果
     * @param {DescribeTranscodeRequest} req
     * @param {function(string, DescribeTranscodeResponse):void} cb
     * @public
     */
    DescribeTranscode(req: any, cb: any): void {
        const resp = new DescribeTranscodeResponse();
        this.request("DescribeTranscode", req, resp, cb);
    }

    /**
     * 创建一个文档转码任务
     * @param {CreateTranscodeRequest} req
     * @param {function(string, CreateTranscodeResponse):void} cb
     * @public
     */
    CreateTranscode(req: any, cb: any): void {
        const resp = new CreateTranscodeResponse();
        this.request("CreateTranscode", req, resp, cb);
    }

    /**
     * 停止实时录制
     * @param {StopOnlineRecordRequest} req
     * @param {function(string, StopOnlineRecordResponse):void} cb
     * @public
     */
    StopOnlineRecord(req: any, cb: any): void {
        const resp = new StopOnlineRecordResponse();
        this.request("StopOnlineRecord", req, resp, cb);
    }

    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     * @param {SetTranscodeCallbackRequest} req
     * @param {function(string, SetTranscodeCallbackResponse):void} cb
     * @public
     */
    SetTranscodeCallback(req: any, cb: any): void {
        const resp = new SetTranscodeCallbackResponse();
        this.request("SetTranscodeCallback", req, resp, cb);
    }

    /**
     * 发起一个实时录制任务
     * @param {StartOnlineRecordRequest} req
     * @param {function(string, StartOnlineRecordResponse):void} cb
     * @public
     */
    StartOnlineRecord(req: any, cb: any): void {
        const resp = new StartOnlineRecordResponse();
        this.request("StartOnlineRecord", req, resp, cb);
    }

    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetOnlineRecordCallbackKeyRequest} req
     * @param {function(string, SetOnlineRecordCallbackKeyResponse):void} cb
     * @public
     */
    SetOnlineRecordCallbackKey(req: any, cb: any): void {
        const resp = new SetOnlineRecordCallbackKeyResponse();
        this.request("SetOnlineRecordCallbackKey", req, resp, cb);
    }

    /**
     * 暂停实时录制
     * @param {PauseOnlineRecordRequest} req
     * @param {function(string, PauseOnlineRecordResponse):void} cb
     * @public
     */
    PauseOnlineRecord(req: any, cb: any): void {
        const resp = new PauseOnlineRecordResponse();
        this.request("PauseOnlineRecord", req, resp, cb);
    }

    /**
     * 查询文档转码回调地址
     * @param {DescribeTranscodeCallbackRequest} req
     * @param {function(string, DescribeTranscodeCallbackResponse):void} cb
     * @public
     */
    DescribeTranscodeCallback(req: any, cb: any): void {
        const resp = new DescribeTranscodeCallbackResponse();
        this.request("DescribeTranscodeCallback", req, resp, cb);
    }

    /**
     * 查询实时录制任务状态与结果
     * @param {DescribeOnlineRecordRequest} req
     * @param {function(string, DescribeOnlineRecordResponse):void} cb
     * @public
     */
    DescribeOnlineRecord(req: any, cb: any): void {
        const resp = new DescribeOnlineRecordResponse();
        this.request("DescribeOnlineRecord", req, resp, cb);
    }

    /**
     * 查询实时录制回调地址
     * @param {DescribeOnlineRecordCallbackRequest} req
     * @param {function(string, DescribeOnlineRecordCallbackResponse):void} cb
     * @public
     */
    DescribeOnlineRecordCallback(req: any, cb: any): void {
        const resp = new DescribeOnlineRecordCallbackResponse();
        this.request("DescribeOnlineRecordCallback", req, resp, cb);
    }

    /**
     * 恢复实时录制
     * @param {ResumeOnlineRecordRequest} req
     * @param {function(string, ResumeOnlineRecordResponse):void} cb
     * @public
     */
    ResumeOnlineRecord(req: any, cb: any): void {
        const resp = new ResumeOnlineRecordResponse();
        this.request("ResumeOnlineRecord", req, resp, cb);
    }


}
