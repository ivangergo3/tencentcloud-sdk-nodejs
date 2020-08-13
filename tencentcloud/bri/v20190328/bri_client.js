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
const DescribeBRIRequest = models_1.Models.DescribeBRIRequest;
const BRIRequest = models_1.Models.BRIRequest;
const DescribeBRIResponse = models_1.Models.DescribeBRIResponse;
const BRIResponse = models_1.Models.BRIResponse;
/**
 * bri client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("bri.tencentcloudapi.com", "2019-03-28", credential, region, profile);
    }
    /**
     * 输入业务名 (bri_num, bri_dev, bri_ip, bri_apk, bri_url 五种之一)  及其 相应字段, 获取业务风险分数和标签。

当业务名为bri_num时，必须填PhoneNumber字段.

当业务名为bri_dev时, 必须填Imei字段.

当业务名为bri_ip时，必须填IP字段.

当业务名为bri_apk时，必须填 (PackageName,CertMd5,FileSize) 三个字段 或者 FileMd5一个字段.

当业务名为bri_url时，必须填Url字段.

当业务名为bri_social时，必须填QQ和Wechat字段两者其中一个或者两个.
     * @param {DescribeBRIRequest} req
     * @param {function(string, DescribeBRIResponse):void} cb
     * @public
     */
    DescribeBRI(req, cb) {
        const resp = new DescribeBRIResponse();
        this.request("DescribeBRI", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=bri_client.js.map