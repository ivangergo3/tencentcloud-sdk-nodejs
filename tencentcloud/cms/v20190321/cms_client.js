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
const CustomResult = models_1.Models.CustomResult;
const TextData = models_1.Models.TextData;
const TextModerationRequest = models_1.Models.TextModerationRequest;
const DetailResult = models_1.Models.DetailResult;
const ImageModerationResponse = models_1.Models.ImageModerationResponse;
const TextModerationResponse = models_1.Models.TextModerationResponse;
const ImageModerationRequest = models_1.Models.ImageModerationRequest;
const CreateFileSampleRequest = models_1.Models.CreateFileSampleRequest;
const ImageData = models_1.Models.ImageData;
const ImagePornDetect = models_1.Models.ImagePornDetect;
const DeleteTextSampleResponse = models_1.Models.DeleteTextSampleResponse;
const TextSample = models_1.Models.TextSample;
const CreateTextSampleResponse = models_1.Models.CreateTextSampleResponse;
const TextOutputID = models_1.Models.TextOutputID;
const ManualReviewRequest = models_1.Models.ManualReviewRequest;
const User = models_1.Models.User;
const FileSampleInfo = models_1.Models.FileSampleInfo;
const DescribeFileSampleRequest = models_1.Models.DescribeFileSampleRequest;
const Device = models_1.Models.Device;
const CodeDetect = models_1.Models.CodeDetect;
const ImageTerrorDetect = models_1.Models.ImageTerrorDetect;
const DescribeTextSampleResponse = models_1.Models.DescribeTextSampleResponse;
const CodePosition = models_1.Models.CodePosition;
const DeleteFileSampleResponse = models_1.Models.DeleteFileSampleResponse;
const FileSample = models_1.Models.FileSample;
const DescribeFileSampleResponse = models_1.Models.DescribeFileSampleResponse;
const TextOutputRes = models_1.Models.TextOutputRes;
const RiskDetails = models_1.Models.RiskDetails;
const CreateTextSampleRequest = models_1.Models.CreateTextSampleRequest;
const DeleteFileSampleRequest = models_1.Models.DeleteFileSampleRequest;
const Filter = models_1.Models.Filter;
const ManualReviewData = models_1.Models.ManualReviewData;
const OCRDetect = models_1.Models.OCRDetect;
const ManualReviewContent = models_1.Models.ManualReviewContent;
const Coordinate = models_1.Models.Coordinate;
const Similar = models_1.Models.Similar;
const ImageHotDetect = models_1.Models.ImageHotDetect;
const TextOutputComm = models_1.Models.TextOutputComm;
const DescribeTextSampleRequest = models_1.Models.DescribeTextSampleRequest;
const CodeDetail = models_1.Models.CodeDetail;
const ImagePolityDetect = models_1.Models.ImagePolityDetect;
const OCRItem = models_1.Models.OCRItem;
const ImageIllegalDetect = models_1.Models.ImageIllegalDetect;
const RrectF = models_1.Models.RrectF;
const CreateFileSampleResponse = models_1.Models.CreateFileSampleResponse;
const ManualReviewResponse = models_1.Models.ManualReviewResponse;
const LogoDetail = models_1.Models.LogoDetail;
const Logo = models_1.Models.Logo;
const PhoneDetect = models_1.Models.PhoneDetect;
const DeleteTextSampleRequest = models_1.Models.DeleteTextSampleRequest;
/**
 * cms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cms.tencentcloudapi.com", "2019-03-21", credential, region, profile);
    }
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
删除文本样本库，暂时只支持单个删除。
     * @param {DeleteTextSampleRequest} req
     * @param {function(string, DeleteTextSampleResponse):void} cb
     * @public
     */
    DeleteTextSample(req, cb) {
        const resp = new DeleteTextSampleResponse();
        this.request("DeleteTextSample", req, resp, cb);
    }
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
通过该接口可以将文本新增到样本库。
     * @param {CreateTextSampleRequest} req
     * @param {function(string, CreateTextSampleResponse):void} cb
     * @public
     */
    CreateTextSample(req, cb) {
        const resp = new CreateTextSampleResponse();
        this.request("CreateTextSample", req, resp, cb);
    }
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
通过该接口可以将图片新增到样本库。
     * @param {CreateFileSampleRequest} req
     * @param {function(string, CreateFileSampleResponse):void} cb
     * @public
     */
    CreateFileSample(req, cb) {
        const resp = new CreateFileSampleResponse();
        this.request("CreateFileSample", req, resp, cb);
    }
    /**
     * 本文档适用于文本内容安全、音频内容安全自定义识别库的管理。
<br>
支持批量查询文本样本库。
     * @param {DescribeTextSampleRequest} req
     * @param {function(string, DescribeTextSampleResponse):void} cb
     * @public
     */
    DescribeTextSample(req, cb) {
        const resp = new DescribeTextSampleResponse();
        this.request("DescribeTextSample", req, resp, cb);
    }
    /**
     * 人工审核对外接口
     * @param {ManualReviewRequest} req
     * @param {function(string, ManualReviewResponse):void} cb
     * @public
     */
    ManualReview(req, cb) {
        const resp = new ManualReviewResponse();
        this.request("ManualReview", req, resp, cb);
    }
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
查询图片样本库，支持批量查询。
     * @param {DescribeFileSampleRequest} req
     * @param {function(string, DescribeFileSampleResponse):void} cb
     * @public
     */
    DescribeFileSample(req, cb) {
        const resp = new DescribeFileSampleResponse();
        this.request("DescribeFileSample", req, resp, cb);
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
    /**
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。
     * @param {ImageModerationRequest} req
     * @param {function(string, ImageModerationResponse):void} cb
     * @public
     */
    ImageModeration(req, cb) {
        const resp = new ImageModerationResponse();
        this.request("ImageModeration", req, resp, cb);
    }
    /**
     * 本文档适用于图片内容安全、视频内容安全自定义识别库的管理。
<br>
删除图片样本库，支持批量删除，一次提交不超过20个。
     * @param {DeleteFileSampleRequest} req
     * @param {function(string, DeleteFileSampleResponse):void} cb
     * @public
     */
    DeleteFileSample(req, cb) {
        const resp = new DeleteFileSampleResponse();
        this.request("DeleteFileSample", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cms_client.js.map