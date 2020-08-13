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
const Item = models_1.Models.Item;
const EvaluationRequest = models_1.Models.EvaluationRequest;
const EvaluationResponse = models_1.Models.EvaluationResponse;
const ItemCoord = models_1.Models.ItemCoord;
/**
 * hcm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("hcm.tencentcloudapi.com", "2018-11-06", credential, region, profile);
    }
    /**
     * 速算题目批改接口，根据用户上传的图片或图片的URL识别图片中的数学算式，进而给出算式的正确性评估。
     * @param {EvaluationRequest} req
     * @param {function(string, EvaluationResponse):void} cb
     * @public
     */
    Evaluation(req, cb) {
        const resp = new EvaluationResponse();
        this.request("Evaluation", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=hcm_client.js.map