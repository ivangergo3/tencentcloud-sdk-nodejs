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
const PublicMaterialInfos = models_1.Models.PublicMaterialInfos;
const FaceFusionRequest = models_1.Models.FaceFusionRequest;
const FaceFusionResponse = models_1.Models.FaceFusionResponse;
const DescribeMaterialListResponse = models_1.Models.DescribeMaterialListResponse;
const MaterialFaceList = models_1.Models.MaterialFaceList;
const FaceInfo = models_1.Models.FaceInfo;
const FuseFaceReviewDetail = models_1.Models.FuseFaceReviewDetail;
const MergeInfo = models_1.Models.MergeInfo;
const FuseFaceReviewResult = models_1.Models.FuseFaceReviewResult;
const FuseFaceResponse = models_1.Models.FuseFaceResponse;
const FuseFaceRequest = models_1.Models.FuseFaceRequest;
const FaceRect = models_1.Models.FaceRect;
const DescribeMaterialListRequest = models_1.Models.DescribeMaterialListRequest;
/**
 * facefusion client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("facefusion.tencentcloudapi.com", "2018-12-01", credential, region, profile);
    }
    /**
     * 通常通过腾讯云人脸融合的控制台可以查看到素材相关的参数数据，可以满足使用。本接口返回活动的素材数据，包括素材状态等。用于用户通过Api查看素材相关数据，方便使用。
     * @param {DescribeMaterialListRequest} req
     * @param {function(string, DescribeMaterialListResponse):void} cb
     * @public
     */
    DescribeMaterialList(req, cb) {
        const resp = new DescribeMaterialListResponse();
        this.request("DescribeMaterialList", req, resp, cb);
    }
    /**
     * 本接口用于人脸融合，用户上传人脸图片，获取与模板融合后的人脸图片。未发布的活动请求频率限制为1次/秒，已发布的活动请求频率限制50次/秒。如有需要提高活动的请求频率限制，请在控制台中申请。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {FaceFusionRequest} req
     * @param {function(string, FaceFusionResponse):void} cb
     * @public
     */
    FaceFusion(req, cb) {
        const resp = new FaceFusionResponse();
        this.request("FaceFusion", req, resp, cb);
    }
    /**
     * 本接口用于单脸、多脸融合，用户上传人脸图片，获取与模板融合后的人脸图片。查看 <a href="https://cloud.tencent.com/document/product/670/38247" target="_blank">选脸融合接入指引</a>。

未发布的活动请求频率限制为1次/秒，已发布的活动请求频率限制50次/秒。如有需要提高活动的请求频率限制，请在控制台中申请。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {FuseFaceRequest} req
     * @param {function(string, FuseFaceResponse):void} cb
     * @public
     */
    FuseFace(req, cb) {
        const resp = new FuseFaceResponse();
        this.request("FuseFace", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=facefusion_client.js.map