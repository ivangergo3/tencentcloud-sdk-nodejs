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
const VodPoliticalOcrReviewResult = models_1.Models.VodPoliticalOcrReviewResult;
const Candidate = models_1.Models.Candidate;
const TerrorismResult = models_1.Models.TerrorismResult;
const VodPoliticalAsrReviewResult = models_1.Models.VodPoliticalAsrReviewResult;
const VideoModerationResponse = models_1.Models.VideoModerationResponse;
const VodMetaData = models_1.Models.VodMetaData;
const ImageModerationResponse = models_1.Models.ImageModerationResponse;
const VodVideoStreamItem = models_1.Models.VodVideoStreamItem;
const ImageModerationRequest = models_1.Models.ImageModerationRequest;
const VideoModerationRequest = models_1.Models.VideoModerationRequest;
const VodPoliticalReviewSegmentItem = models_1.Models.VodPoliticalReviewSegmentItem;
const VodPornReviewResult = models_1.Models.VodPornReviewResult;
const DisgustResult = models_1.Models.DisgustResult;
const VodPornReviewSegmentItem = models_1.Models.VodPornReviewSegmentItem;
const VodPoliticalReviewResult = models_1.Models.VodPoliticalReviewResult;
const VodAudioStreamItem = models_1.Models.VodAudioStreamItem;
const VodOcrTextSegmentItem = models_1.Models.VodOcrTextSegmentItem;
const PoliticsResult = models_1.Models.PoliticsResult;
const VodAsrTextSegmentItem = models_1.Models.VodAsrTextSegmentItem;
const PornResult = models_1.Models.PornResult;
const DescribeVideoTaskRequest = models_1.Models.DescribeVideoTaskRequest;
const VodTerrorismReviewResult = models_1.Models.VodTerrorismReviewResult;
const FaceResult = models_1.Models.FaceResult;
const VodPornAsrReviewResult = models_1.Models.VodPornAsrReviewResult;
const DescribeVideoTaskResponse = models_1.Models.DescribeVideoTaskResponse;
const FaceRect = models_1.Models.FaceRect;
const VodPornOcrResult = models_1.Models.VodPornOcrResult;
/**
 * ticm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ticm.tencentcloudapi.com", "2018-11-27", credential, region, profile);
    }
    /**
     * 本接口提供多种维度的图像审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
     * @param {ImageModerationRequest} req
     * @param {function(string, ImageModerationResponse):void} cb
     * @public
     */
    ImageModeration(req, cb) {
        const resp = new ImageModerationResponse();
        this.request("ImageModeration", req, resp, cb);
    }
    /**
     * 本接口提供多种维度的视频审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
     * @param {VideoModerationRequest} req
     * @param {function(string, VideoModerationResponse):void} cb
     * @public
     */
    VideoModeration(req, cb) {
        const resp = new VideoModerationResponse();
        this.request("VideoModeration", req, resp, cb);
    }
    /**
     * 提交完视频审核任务后，可以通过本接口来获取当前处理的进度和结果
     * @param {DescribeVideoTaskRequest} req
     * @param {function(string, DescribeVideoTaskResponse):void} cb
     * @public
     */
    DescribeVideoTask(req, cb) {
        const resp = new DescribeVideoTaskResponse();
        this.request("DescribeVideoTask", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ticm_client.js.map