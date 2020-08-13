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
const MarketingValueJudgementRequest = models_1.Models.MarketingValueJudgementRequest;
const Data = models_1.Models.Data;
const MarketingValueJudgementResponse = models_1.Models.MarketingValueJudgementResponse;
/**
 * mvj client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("mvj.tencentcloudapi.com", "2019-09-26", credential, region, profile);
    }
    /**
     * 欢迎使用营销价值判断（Marketing Value Judgement，简称 MVJ）。

营销价值判断（MVJ）是针对零售场景的风控服务，通过识别高价值顾客，以帮助零售商保障营销资金
     * @param {MarketingValueJudgementRequest} req
     * @param {function(string, MarketingValueJudgementResponse):void} cb
     * @public
     */
    MarketingValueJudgement(req, cb) {
        const resp = new MarketingValueJudgementResponse();
        this.request("MarketingValueJudgement", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=mvj_client.js.map