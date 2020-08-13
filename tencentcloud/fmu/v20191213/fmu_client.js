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
const DeleteModelRequest = models_1.Models.DeleteModelRequest;
const TryLipstickPicRequest = models_1.Models.TryLipstickPicRequest;
const GetModelListRequest = models_1.Models.GetModelListRequest;
const TryLipstickPicResponse = models_1.Models.TryLipstickPicResponse;
const LipColorInfo = models_1.Models.LipColorInfo;
const CreateModelRequest = models_1.Models.CreateModelRequest;
const RGBAInfo = models_1.Models.RGBAInfo;
const GetModelListResponse = models_1.Models.GetModelListResponse;
const ModelInfo = models_1.Models.ModelInfo;
const FaceRect = models_1.Models.FaceRect;
const BeautifyPicRequest = models_1.Models.BeautifyPicRequest;
const CreateModelResponse = models_1.Models.CreateModelResponse;
const DeleteModelResponse = models_1.Models.DeleteModelResponse;
const BeautifyPicResponse = models_1.Models.BeautifyPicResponse;
/**
 * fmu client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("fmu.tencentcloudapi.com", "2019-12-13", credential, region, profile);
    }
    /**
     * 在使用LUT素材的modelid实现试唇色前，您需要先上传 LUT 格式的cube文件注册唇色ID。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。

注：您也可以直接使用 [试唇色接口](https://cloud.tencent.com/document/product/1172/40706)，通过输入RGBA模型数值的方式指定唇色，更简单易用。

     * @param {CreateModelRequest} req
     * @param {function(string, CreateModelResponse):void} cb
     * @public
     */
    CreateModel(req, cb) {
        const resp = new CreateModelResponse();
        this.request("CreateModel", req, resp, cb);
    }
    /**
     * 查询已注册的唇色素材。
     * @param {GetModelListRequest} req
     * @param {function(string, GetModelListResponse):void} cb
     * @public
     */
    GetModelList(req, cb) {
        const resp = new GetModelListResponse();
        this.request("GetModelList", req, resp, cb);
    }
    /**
     * 删除已注册的唇色素材。
     * @param {DeleteModelRequest} req
     * @param {function(string, DeleteModelResponse):void} cb
     * @public
     */
    DeleteModel(req, cb) {
        const resp = new DeleteModelResponse();
        this.request("DeleteModel", req, resp, cb);
    }
    /**
     * 对图片中的人脸嘴唇进行着色，最多支持同时对一张图中的3张人脸进行试唇色。

您可以通过事先注册在腾讯云的唇色素材（LUT文件）改变图片中的人脸唇色，也可以输入RGBA模型数值。

为了更好的效果，建议您使用事先注册在腾讯云的唇色素材（LUT文件）。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {TryLipstickPicRequest} req
     * @param {function(string, TryLipstickPicResponse):void} cb
     * @public
     */
    TryLipstickPic(req, cb) {
        const resp = new TryLipstickPicResponse();
        this.request("TryLipstickPic", req, resp, cb);
    }
    /**
     * 用户上传一张人脸图片，精准定位五官，实现美肤、亮肤、祛痘等美颜功能。
     * @param {BeautifyPicRequest} req
     * @param {function(string, BeautifyPicResponse):void} cb
     * @public
     */
    BeautifyPic(req, cb) {
        const resp = new BeautifyPicResponse();
        this.request("BeautifyPic", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=fmu_client.js.map