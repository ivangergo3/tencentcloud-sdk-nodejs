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
const TextProcessResponse = models_1.Models.TextProcessResponse;
const SlotInfo = models_1.Models.SlotInfo;
const TextResetRequest = models_1.Models.TextResetRequest;
const ResetRequest = models_1.Models.ResetRequest;
const TextResetResponse = models_1.Models.TextResetResponse;
const CreateBotResponse = models_1.Models.CreateBotResponse;
const ResetResponse = models_1.Models.ResetResponse;
const CreateBotRequest = models_1.Models.CreateBotRequest;
const TextProcessRequest = models_1.Models.TextProcessRequest;
/**
 * tbp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tbp.tencentcloudapi.com", "2019-03-11", credential, region, profile);
    }
    /**
     * 对当前机器人的会话状态进行复位
     * @param {ResetRequest} req
     * @param {function(string, ResetResponse):void} cb
     * @public
     */
    Reset(req, cb) {
        const resp = new ResetResponse();
        this.request("Reset", req, resp, cb);
    }
    /**
     * 创建机器人
     * @param {CreateBotRequest} req
     * @param {function(string, CreateBotResponse):void} cb
     * @public
     */
    CreateBot(req, cb) {
        const resp = new CreateBotResponse();
        this.request("CreateBot", req, resp, cb);
    }
    /**
     * 会话重置接口。已废弃，推荐使用最新版TextReset接口。
     * @param {TextResetRequest} req
     * @param {function(string, TextResetResponse):void} cb
     * @public
     */
    TextReset(req, cb) {
        const resp = new TextResetResponse();
        this.request("TextReset", req, resp, cb);
    }
    /**
     * 接收调用侧的文本输入，返回应答文本。已废弃，推荐使用最新版TextProcess接口。
     * @param {TextProcessRequest} req
     * @param {function(string, TextProcessResponse):void} cb
     * @public
     */
    TextProcess(req, cb) {
        const resp = new TextProcessResponse();
        this.request("TextProcess", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tbp_client.js.map