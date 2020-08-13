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
const RiskDetails = models_1.Models.RiskDetails;
const TextModerationRequest = models_1.Models.TextModerationRequest;
const DetailResults = models_1.Models.DetailResults;
const User = models_1.Models.User;
const Device = models_1.Models.Device;
const TextModerationResponse = models_1.Models.TextModerationResponse;
/**
 * tms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tms.tencentcloudapi.com", "2020-07-13", credential, region, profile);
    }
    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
     * @param {TextModerationRequest} req
     * @param {function(string, TextModerationResponse):void} cb
     * @public
     */
    TextModeration(req, cb) {
        const resp = new TextModerationResponse();
        this.request("TextModeration", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tms_client.js.map