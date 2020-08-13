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
const InputKolDataList = models_1.Models.InputKolDataList;
const OutputKolData = models_1.Models.OutputKolData;
const InputKolBspData = models_1.Models.InputKolBspData;
const EnhanceTaDegreeRequest = models_1.Models.EnhanceTaDegreeRequest;
const OutputRecognizeTargetAudienceValue = models_1.Models.OutputRecognizeTargetAudienceValue;
const SendTrafficSecuritySmsMessageRequest = models_1.Models.SendTrafficSecuritySmsMessageRequest;
const DetectFraudKOLResponse = models_1.Models.DetectFraudKOLResponse;
const RecognizeCustomizedAudienceResponse = models_1.Models.RecognizeCustomizedAudienceResponse;
const OutputKolValue = models_1.Models.OutputKolValue;
const EnhanceTaDegreeResponse = models_1.Models.EnhanceTaDegreeResponse;
const InputTaBspData = models_1.Models.InputTaBspData;
const OutputSendTrafficSecuritySmsMsg = models_1.Models.OutputSendTrafficSecuritySmsMsg;
const SendTrafficSecuritySmsMessageResponse = models_1.Models.SendTrafficSecuritySmsMessageResponse;
const DetectFraudKOLRequest = models_1.Models.DetectFraudKOLRequest;
const RecognizeCustomizedAudienceRequest = models_1.Models.RecognizeCustomizedAudienceRequest;
const RecognizeTargetAudienceResponse = models_1.Models.RecognizeTargetAudienceResponse;
const InputRecognizeTargetAudience = models_1.Models.InputRecognizeTargetAudience;
const OutputTaData = models_1.Models.OutputTaData;
const OutputTaValue = models_1.Models.OutputTaValue;
const RecognizePreciseTargetAudienceRequest = models_1.Models.RecognizePreciseTargetAudienceRequest;
const RecognizeTargetAudienceRequest = models_1.Models.RecognizeTargetAudienceRequest;
const RecognizePreciseTargetAudienceResponse = models_1.Models.RecognizePreciseTargetAudienceResponse;
const OutputRecognizeTargetAudience = models_1.Models.OutputRecognizeTargetAudience;
const InputSendTrafficSecuritySmsMsg = models_1.Models.InputSendTrafficSecuritySmsMsg;
/**
 * taf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("taf.tencentcloudapi.com", "2020-02-10", credential, region, profile);
    }
    /**
     * 流量反欺诈-虚假TA识别
     * @param {EnhanceTaDegreeRequest} req
     * @param {function(string, EnhanceTaDegreeResponse):void} cb
     * @public
     */
    EnhanceTaDegree(req, cb) {
        const resp = new EnhanceTaDegreeResponse();
        this.request("EnhanceTaDegree", req, resp, cb);
    }
    /**
     * 流量反欺诈-流量验准
     * @param {RecognizeTargetAudienceRequest} req
     * @param {function(string, RecognizeTargetAudienceResponse):void} cb
     * @public
     */
    RecognizeTargetAudience(req, cb) {
        const resp = new RecognizeTargetAudienceResponse();
        this.request("RecognizeTargetAudience", req, resp, cb);
    }
    /**
     * 流量反欺诈-流量验准定制版
     * @param {RecognizeCustomizedAudienceRequest} req
     * @param {function(string, RecognizeCustomizedAudienceResponse):void} cb
     * @public
     */
    RecognizeCustomizedAudience(req, cb) {
        const resp = new RecognizeCustomizedAudienceResponse();
        this.request("RecognizeCustomizedAudience", req, resp, cb);
    }
    /**
     * DetectFraudKOL
     * @param {DetectFraudKOLRequest} req
     * @param {function(string, DetectFraudKOLResponse):void} cb
     * @public
     */
    DetectFraudKOL(req, cb) {
        const resp = new DetectFraudKOLResponse();
        this.request("DetectFraudKOL", req, resp, cb);
    }
    /**
     * 流量反欺诈-流量验准高级版
     * @param {RecognizePreciseTargetAudienceRequest} req
     * @param {function(string, RecognizePreciseTargetAudienceResponse):void} cb
     * @public
     */
    RecognizePreciseTargetAudience(req, cb) {
        const resp = new RecognizePreciseTargetAudienceResponse();
        this.request("RecognizePreciseTargetAudience", req, resp, cb);
    }
    /**
     * SendTrafficSecuritySmsMessage
     * @param {SendTrafficSecuritySmsMessageRequest} req
     * @param {function(string, SendTrafficSecuritySmsMessageResponse):void} cb
     * @public
     */
    SendTrafficSecuritySmsMessage(req, cb) {
        const resp = new SendTrafficSecuritySmsMessageResponse();
        this.request("SendTrafficSecuritySmsMessage", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=taf_client.js.map