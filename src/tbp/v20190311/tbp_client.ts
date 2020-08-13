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
const TextProcessResponse = models.TextProcessResponse;
const SlotInfo = models.SlotInfo;
const TextResetRequest = models.TextResetRequest;
const ResetRequest = models.ResetRequest;
const TextResetResponse = models.TextResetResponse;
const CreateBotResponse = models.CreateBotResponse;
const ResetResponse = models.ResetResponse;
const CreateBotRequest = models.CreateBotRequest;
const TextProcessRequest = models.TextProcessRequest;


/**
 * tbp client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("tbp.tencentcloudapi.com", "2019-03-11", credential, region, profile);
    }
    
    /**
     * 对当前机器人的会话状态进行复位
     * @param {ResetRequest} req
     * @param {function(string, ResetResponse):void} cb
     * @public
     */
    Reset(req: any, cb: any): void {
        const resp = new ResetResponse();
        this.request("Reset", req, resp, cb);
    }

    /**
     * 创建机器人
     * @param {CreateBotRequest} req
     * @param {function(string, CreateBotResponse):void} cb
     * @public
     */
    CreateBot(req: any, cb: any): void {
        const resp = new CreateBotResponse();
        this.request("CreateBot", req, resp, cb);
    }

    /**
     * 会话重置接口。已废弃，推荐使用最新版TextReset接口。
     * @param {TextResetRequest} req
     * @param {function(string, TextResetResponse):void} cb
     * @public
     */
    TextReset(req: any, cb: any): void {
        const resp = new TextResetResponse();
        this.request("TextReset", req, resp, cb);
    }

    /**
     * 接收调用侧的文本输入，返回应答文本。已废弃，推荐使用最新版TextProcess接口。
     * @param {TextProcessRequest} req
     * @param {function(string, TextProcessResponse):void} cb
     * @public
     */
    TextProcess(req: any, cb: any): void {
        const resp = new TextProcessResponse();
        this.request("TextProcess", req, resp, cb);
    }


}
