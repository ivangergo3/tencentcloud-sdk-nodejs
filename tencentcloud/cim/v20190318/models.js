"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const abstract_model_1 = require("../../common/abstract_model");
/**
 * DescribeSdkAppid返回参数结构体
 * @class
 */
class DescribeSdkAppidResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 表示 appid 对应的 SdkAppid 的数据
         */
        this.SdkAppids = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppids = 'SdkAppids' in params ? params.SdkAppids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeSdkAppid请求参数结构体
 * @class
 */
class DescribeSdkAppidRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
    }
}
exports.Models = {
    DescribeSdkAppidResponse: DescribeSdkAppidResponse,
    DescribeSdkAppidRequest: DescribeSdkAppidRequest,
};
//# sourceMappingURL=models.js.map