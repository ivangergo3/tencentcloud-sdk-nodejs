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
const TagTaskResult = models_1.Models.TagTaskResult;
const TagTaskResultItem = models_1.Models.TagTaskResultItem;
const CosInfo = models_1.Models.CosInfo;
const SaveInfo = models_1.Models.SaveInfo;
const StripTaskResultItem = models_1.Models.StripTaskResultItem;
const CosAuthMode = models_1.Models.CosAuthMode;
const TagEditingInfo = models_1.Models.TagEditingInfo;
const OpeningEndingTaskResultItem = models_1.Models.OpeningEndingTaskResultItem;
const DownInfo = models_1.Models.DownInfo;
const ClassificationEditingInfo = models_1.Models.ClassificationEditingInfo;
const DescribeEditingTaskResultRequest = models_1.Models.DescribeEditingTaskResultRequest;
const CoverTaskResultItem = models_1.Models.CoverTaskResultItem;
const StripEditingInfo = models_1.Models.StripEditingInfo;
const EditingInfo = models_1.Models.EditingInfo;
const CreateEditingTaskRequest = models_1.Models.CreateEditingTaskRequest;
const HighlightsTaskResult = models_1.Models.HighlightsTaskResult;
const OpeningEndingTaskResult = models_1.Models.OpeningEndingTaskResult;
const DescribeEditingTaskResultResponse = models_1.Models.DescribeEditingTaskResultResponse;
const CreateEditingTaskResponse = models_1.Models.CreateEditingTaskResponse;
const UrlInfo = models_1.Models.UrlInfo;
const ClassificationTaskResultItem = models_1.Models.ClassificationTaskResultItem;
const EditingTaskResult = models_1.Models.EditingTaskResult;
const StripTaskResult = models_1.Models.StripTaskResult;
const HighlightsEditingInfo = models_1.Models.HighlightsEditingInfo;
const ClassificationTaskResult = models_1.Models.ClassificationTaskResult;
const HighlightsTaskResultItem = models_1.Models.HighlightsTaskResultItem;
const HighlightsTaskResultItemSegment = models_1.Models.HighlightsTaskResultItemSegment;
const CoverEditingInfo = models_1.Models.CoverEditingInfo;
const CallbackInfo = models_1.Models.CallbackInfo;
const OpeningEndingEditingInfo = models_1.Models.OpeningEndingEditingInfo;
const CoverTaskResult = models_1.Models.CoverTaskResult;
/**
 * ie client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ie.tencentcloudapi.com", "2020-03-04", credential, region, profile);
    }
    /**
     * 获取智能编辑任务结果。
     * @param {DescribeEditingTaskResultRequest} req
     * @param {function(string, DescribeEditingTaskResultResponse):void} cb
     * @public
     */
    DescribeEditingTaskResult(req, cb) {
        const resp = new DescribeEditingTaskResultResponse();
        this.request("DescribeEditingTaskResult", req, resp, cb);
    }
    /**
     * 创建智能编辑任务，可以同时选择视频标签识别、分类识别、智能拆条、智能集锦、智能封面和片头片尾识别中的一项或者多项能力。
     * @param {CreateEditingTaskRequest} req
     * @param {function(string, CreateEditingTaskResponse):void} cb
     * @public
     */
    CreateEditingTask(req, cb) {
        const resp = new CreateEditingTaskResponse();
        this.request("CreateEditingTask", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ie_client.js.map