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
const StopGameRequest = models_1.Models.StopGameRequest;
const TrylockWorkerResponse = models_1.Models.TrylockWorkerResponse;
const StopGameResponse = models_1.Models.StopGameResponse;
const CreateSessionResponse = models_1.Models.CreateSessionResponse;
const TrylockWorkerRequest = models_1.Models.TrylockWorkerRequest;
const CreateSessionRequest = models_1.Models.CreateSessionRequest;
/**
 * gs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("gs.tencentcloudapi.com", "2019-11-18", credential, region, profile);
    }
    /**
     * 创建会话
     * @param {CreateSessionRequest} req
     * @param {function(string, CreateSessionResponse):void} cb
     * @public
     */
    CreateSession(req, cb) {
        const resp = new CreateSessionResponse();
        this.request("CreateSession", req, resp, cb);
    }
    /**
     * 强制退出游戏
     * @param {StopGameRequest} req
     * @param {function(string, StopGameResponse):void} cb
     * @public
     */
    StopGame(req, cb) {
        const resp = new StopGameResponse();
        this.request("StopGame", req, resp, cb);
    }
    /**
     * 尝试锁定机器
     * @param {TrylockWorkerRequest} req
     * @param {function(string, TrylockWorkerResponse):void} cb
     * @public
     */
    TrylockWorker(req, cb) {
        const resp = new TrylockWorkerResponse();
        this.request("TrylockWorker", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=gs_client.js.map