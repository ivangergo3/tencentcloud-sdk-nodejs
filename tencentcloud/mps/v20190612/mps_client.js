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
const ModifySnapshotByTimeOffsetTemplateResponse = models_1.Models.ModifySnapshotByTimeOffsetTemplateResponse;
const ModifySampleSnapshotTemplateResponse = models_1.Models.ModifySampleSnapshotTemplateResponse;
const ModifyWatermarkTemplateRequest = models_1.Models.ModifyWatermarkTemplateRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models_1.Models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models_1.Models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const AiAnalysisTaskClassificationInput = models_1.Models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models_1.Models.SvgWatermarkInput;
const WorkflowInfo = models_1.Models.WorkflowInfo;
const CreateTranscodeTemplateRequest = models_1.Models.CreateTranscodeTemplateRequest;
const ProcessLiveStreamResponse = models_1.Models.ProcessLiveStreamResponse;
const DescribeAnimatedGraphicsTemplatesRequest = models_1.Models.DescribeAnimatedGraphicsTemplatesRequest;
const AiReviewTaskProhibitedAsrResult = models_1.Models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models_1.Models.AdaptiveDynamicStreamingTemplate;
const DeleteAnimatedGraphicsTemplateResponse = models_1.Models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models_1.Models.AiReviewTaskProhibitedOcrResult;
const AiRecognitionTaskAsrFullTextResultOutput = models_1.Models.AiRecognitionTaskAsrFullTextResultOutput;
const AiReviewProhibitedOcrTaskOutput = models_1.Models.AiReviewProhibitedOcrTaskOutput;
const ManageTaskResponse = models_1.Models.ManageTaskResponse;
const DeleteWorkflowRequest = models_1.Models.DeleteWorkflowRequest;
const AiAnalysisTaskCoverOutput = models_1.Models.AiAnalysisTaskCoverOutput;
const AiAnalysisTaskCoverResult = models_1.Models.AiAnalysisTaskCoverResult;
const ModifySampleSnapshotTemplateRequest = models_1.Models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models_1.Models.AiReviewPoliticalOcrTaskInput;
const MediaInputInfo = models_1.Models.MediaInputInfo;
const CreateWorkflowRequest = models_1.Models.CreateWorkflowRequest;
const OcrWordsConfigureInfo = models_1.Models.OcrWordsConfigureInfo;
const RawWatermarkParameter = models_1.Models.RawWatermarkParameter;
const AiReviewTaskPoliticalOcrResult = models_1.Models.AiReviewTaskPoliticalOcrResult;
const ManageTaskRequest = models_1.Models.ManageTaskRequest;
const CreateImageSpriteTemplateRequest = models_1.Models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models_1.Models.MediaSnapshotByTimePicInfoItem;
const UserDefineFaceReviewTemplateInfo = models_1.Models.UserDefineFaceReviewTemplateInfo;
const ContentReviewTemplateItem = models_1.Models.ContentReviewTemplateItem;
const DeleteAIRecognitionTemplateResponse = models_1.Models.DeleteAIRecognitionTemplateResponse;
const MosaicInput = models_1.Models.MosaicInput;
const AiReviewPoliticalTaskInput = models_1.Models.AiReviewPoliticalTaskInput;
const ClassificationConfigureInfo = models_1.Models.ClassificationConfigureInfo;
const MediaAiAnalysisClassificationItem = models_1.Models.MediaAiAnalysisClassificationItem;
const AudioTemplateInfoForUpdate = models_1.Models.AudioTemplateInfoForUpdate;
const DeletePersonSampleRequest = models_1.Models.DeletePersonSampleRequest;
const MediaSampleSnapshotItem = models_1.Models.MediaSampleSnapshotItem;
const ParseLiveStreamProcessNotificationResponse = models_1.Models.ParseLiveStreamProcessNotificationResponse;
const AiRecognitionTaskInput = models_1.Models.AiRecognitionTaskInput;
const AudioTemplateInfo = models_1.Models.AudioTemplateInfo;
const CoverConfigureInfo = models_1.Models.CoverConfigureInfo;
const AIRecognitionTemplateItem = models_1.Models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models_1.Models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models_1.Models.AiRecognitionTaskFaceResult;
const CreateAdaptiveDynamicStreamingTemplateRequest = models_1.Models.CreateAdaptiveDynamicStreamingTemplateRequest;
const TerrorismImgReviewTemplateInfoForUpdate = models_1.Models.TerrorismImgReviewTemplateInfoForUpdate;
const AiRecognitionTaskOcrFullTextResultOutput = models_1.Models.AiRecognitionTaskOcrFullTextResultOutput;
const DeleteAIAnalysisTemplateResponse = models_1.Models.DeleteAIAnalysisTemplateResponse;
const TextWatermarkTemplateInputForUpdate = models_1.Models.TextWatermarkTemplateInputForUpdate;
const AiReviewTerrorismOcrTaskInput = models_1.Models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models_1.Models.AiRecognitionTaskOcrWordsResultInput;
const DeleteWorkflowResponse = models_1.Models.DeleteWorkflowResponse;
const AiReviewPornTaskInput = models_1.Models.AiReviewPornTaskInput;
const CreatePersonSampleRequest = models_1.Models.CreatePersonSampleRequest;
const MediaAiAnalysisCoverItem = models_1.Models.MediaAiAnalysisCoverItem;
const CosInputInfo = models_1.Models.CosInputInfo;
const TagConfigureInfo = models_1.Models.TagConfigureInfo;
const AiRecognitionTaskOcrWordsResultOutput = models_1.Models.AiRecognitionTaskOcrWordsResultOutput;
const AiSampleFaceInfo = models_1.Models.AiSampleFaceInfo;
const DeleteAIRecognitionTemplateRequest = models_1.Models.DeleteAIRecognitionTemplateRequest;
const NumberFormat = models_1.Models.NumberFormat;
const EnableWorkflowRequest = models_1.Models.EnableWorkflowRequest;
const AiAnalysisTaskClassificationOutput = models_1.Models.AiAnalysisTaskClassificationOutput;
const ModifyTranscodeTemplateRequest = models_1.Models.ModifyTranscodeTemplateRequest;
const EditMediaTaskInput = models_1.Models.EditMediaTaskInput;
const UserDefineAsrTextReviewTemplateInfo = models_1.Models.UserDefineAsrTextReviewTemplateInfo;
const DescribeWordSamplesResponse = models_1.Models.DescribeWordSamplesResponse;
const AiAnalysisTaskFrameTagOutput = models_1.Models.AiAnalysisTaskFrameTagOutput;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models_1.Models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const OcrWordsConfigureInfoForUpdate = models_1.Models.OcrWordsConfigureInfoForUpdate;
const WatermarkTemplate = models_1.Models.WatermarkTemplate;
const TextWatermarkTemplateInput = models_1.Models.TextWatermarkTemplateInput;
const ModifyAIAnalysisTemplateResponse = models_1.Models.ModifyAIAnalysisTemplateResponse;
const DescribeAIRecognitionTemplatesResponse = models_1.Models.DescribeAIRecognitionTemplatesResponse;
const LiveStreamAiReviewResultInfo = models_1.Models.LiveStreamAiReviewResultInfo;
const EditMediaResponse = models_1.Models.EditMediaResponse;
const PoliticalOcrReviewTemplateInfoForUpdate = models_1.Models.PoliticalOcrReviewTemplateInfoForUpdate;
const PornAsrReviewTemplateInfoForUpdate = models_1.Models.PornAsrReviewTemplateInfoForUpdate;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models_1.Models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const AiRecognitionTaskAsrFullTextResultInput = models_1.Models.AiRecognitionTaskAsrFullTextResultInput;
const MediaProcessTaskInput = models_1.Models.MediaProcessTaskInput;
const CosOutputStorage = models_1.Models.CosOutputStorage;
const AiRecognitionTaskFaceSegmentItem = models_1.Models.AiRecognitionTaskFaceSegmentItem;
const ProcessMediaResponse = models_1.Models.ProcessMediaResponse;
const CreateWordSamplesResponse = models_1.Models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models_1.Models.ClassificationConfigureInfoForUpdate;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models_1.Models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const ParseNotificationRequest = models_1.Models.ParseNotificationRequest;
const CreateWordSamplesRequest = models_1.Models.CreateWordSamplesRequest;
const PoliticalAsrReviewTemplateInfoForUpdate = models_1.Models.PoliticalAsrReviewTemplateInfoForUpdate;
const AiSampleFaceOperation = models_1.Models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models_1.Models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models_1.Models.AiReviewTaskTerrorismOcrResult;
const AiRecognitionTaskOcrWordsResult = models_1.Models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models_1.Models.PornAsrReviewTemplateInfo;
const ProhibitedAsrReviewTemplateInfoForUpdate = models_1.Models.ProhibitedAsrReviewTemplateInfoForUpdate;
const ModifyAnimatedGraphicsTemplateResponse = models_1.Models.ModifyAnimatedGraphicsTemplateResponse;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models_1.Models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models_1.Models.AiRecognitionTaskOcrFullTextSegmentItem;
const AiReviewPornAsrTaskOutput = models_1.Models.AiReviewPornAsrTaskOutput;
const DeleteAIAnalysisTemplateRequest = models_1.Models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models_1.Models.EditMediaRequest;
const MediaProcessTaskImageSpriteResult = models_1.Models.MediaProcessTaskImageSpriteResult;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models_1.Models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaContentReviewOcrTextSegmentItem = models_1.Models.MediaContentReviewOcrTextSegmentItem;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models_1.Models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const ImageWatermarkInput = models_1.Models.ImageWatermarkInput;
const AsrFullTextConfigureInfoForUpdate = models_1.Models.AsrFullTextConfigureInfoForUpdate;
const CreatePersonSampleResponse = models_1.Models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models_1.Models.CreateContentReviewTemplateResponse;
const ProhibitedConfigureInfoForUpdate = models_1.Models.ProhibitedConfigureInfoForUpdate;
const TagConfigureInfoForUpdate = models_1.Models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models_1.Models.DeleteWordSamplesRequest;
const RawTranscodeParameter = models_1.Models.RawTranscodeParameter;
const LiveStreamTaskNotifyConfig = models_1.Models.LiveStreamTaskNotifyConfig;
const VideoTemplateInfo = models_1.Models.VideoTemplateInfo;
const PoliticalOcrReviewTemplateInfo = models_1.Models.PoliticalOcrReviewTemplateInfo;
const PornOcrReviewTemplateInfoForUpdate = models_1.Models.PornOcrReviewTemplateInfoForUpdate;
const AiReviewTaskPornOcrResult = models_1.Models.AiReviewTaskPornOcrResult;
const ModifyContentReviewTemplateResponse = models_1.Models.ModifyContentReviewTemplateResponse;
const DescribeWatermarkTemplatesRequest = models_1.Models.DescribeWatermarkTemplatesRequest;
const TaskOutputStorage = models_1.Models.TaskOutputStorage;
const UserDefineConfigureInfo = models_1.Models.UserDefineConfigureInfo;
const AiReviewPornOcrTaskInput = models_1.Models.AiReviewPornOcrTaskInput;
const MediaSnapshotByTimeOffsetItem = models_1.Models.MediaSnapshotByTimeOffsetItem;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models_1.Models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const MediaAnimatedGraphicsItem = models_1.Models.MediaAnimatedGraphicsItem;
const ModifyWordSampleRequest = models_1.Models.ModifyWordSampleRequest;
const MediaProcessTaskAnimatedGraphicResult = models_1.Models.MediaProcessTaskAnimatedGraphicResult;
const AiAnalysisTaskTagResult = models_1.Models.AiAnalysisTaskTagResult;
const AiAnalysisTaskTagOutput = models_1.Models.AiAnalysisTaskTagOutput;
const ProcessMediaRequest = models_1.Models.ProcessMediaRequest;
const AiRecognitionTaskOcrFullTextResult = models_1.Models.AiRecognitionTaskOcrFullTextResult;
const MediaProcessTaskSnapshotByTimeOffsetResult = models_1.Models.MediaProcessTaskSnapshotByTimeOffsetResult;
const AiSampleWord = models_1.Models.AiSampleWord;
const AiRecognitionTaskAsrWordsResultOutput = models_1.Models.AiRecognitionTaskAsrWordsResultOutput;
const LiveStreamOcrWordsRecognitionResult = models_1.Models.LiveStreamOcrWordsRecognitionResult;
const LiveStreamProcessErrorInfo = models_1.Models.LiveStreamProcessErrorInfo;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models_1.Models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models_1.Models.MediaProcessTaskTranscodeResult;
const SnapshotByTimeOffsetTaskInput = models_1.Models.SnapshotByTimeOffsetTaskInput;
const ImageSpriteTaskInput = models_1.Models.ImageSpriteTaskInput;
const DeleteContentReviewTemplateResponse = models_1.Models.DeleteContentReviewTemplateResponse;
const ImageWatermarkTemplate = models_1.Models.ImageWatermarkTemplate;
const AsrWordsConfigureInfo = models_1.Models.AsrWordsConfigureInfo;
const LiveStreamAsrWordsRecognitionResult = models_1.Models.LiveStreamAsrWordsRecognitionResult;
const AiSamplePerson = models_1.Models.AiSamplePerson;
const DescribeWorkflowsResponse = models_1.Models.DescribeWorkflowsResponse;
const AsrWordsConfigureInfoForUpdate = models_1.Models.AsrWordsConfigureInfoForUpdate;
const DeleteImageSpriteTemplateResponse = models_1.Models.DeleteImageSpriteTemplateResponse;
const DescribeContentReviewTemplatesResponse = models_1.Models.DescribeContentReviewTemplatesResponse;
const TEHDConfig = models_1.Models.TEHDConfig;
const AnimatedGraphicsTemplate = models_1.Models.AnimatedGraphicsTemplate;
const WorkflowTrigger = models_1.Models.WorkflowTrigger;
const LiveStreamAiRecognitionResultInfo = models_1.Models.LiveStreamAiRecognitionResultInfo;
const LiveStreamAiReviewImagePoliticalResult = models_1.Models.LiveStreamAiReviewImagePoliticalResult;
const TerrorismOcrReviewTemplateInfoForUpdate = models_1.Models.TerrorismOcrReviewTemplateInfoForUpdate;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models_1.Models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const ModifyImageSpriteTemplateResponse = models_1.Models.ModifyImageSpriteTemplateResponse;
const CreateWatermarkTemplateRequest = models_1.Models.CreateWatermarkTemplateRequest;
const TerrorismConfigureInfoForUpdate = models_1.Models.TerrorismConfigureInfoForUpdate;
const AnimatedGraphicTaskInput = models_1.Models.AnimatedGraphicTaskInput;
const DeleteContentReviewTemplateRequest = models_1.Models.DeleteContentReviewTemplateRequest;
const AIAnalysisTemplateItem = models_1.Models.AIAnalysisTemplateItem;
const RawImageWatermarkInput = models_1.Models.RawImageWatermarkInput;
const DescribeImageSpriteTemplatesRequest = models_1.Models.DescribeImageSpriteTemplatesRequest;
const AiSampleTagOperation = models_1.Models.AiSampleTagOperation;
const CreateAIRecognitionTemplateResponse = models_1.Models.CreateAIRecognitionTemplateResponse;
const DeleteTranscodeTemplateRequest = models_1.Models.DeleteTranscodeTemplateRequest;
const AiReviewTerrorismTaskOutput = models_1.Models.AiReviewTerrorismTaskOutput;
const ProhibitedConfigureInfo = models_1.Models.ProhibitedConfigureInfo;
const AiReviewTerrorismOcrTaskOutput = models_1.Models.AiReviewTerrorismOcrTaskOutput;
const AiAnalysisResult = models_1.Models.AiAnalysisResult;
const DescribeAIAnalysisTemplatesRequest = models_1.Models.DescribeAIAnalysisTemplatesRequest;
const AiRecognitionTaskOcrWordsResultItem = models_1.Models.AiRecognitionTaskOcrWordsResultItem;
const DeleteSampleSnapshotTemplateResponse = models_1.Models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models_1.Models.AiAnalysisTaskTagInput;
const ResetWorkflowRequest = models_1.Models.ResetWorkflowRequest;
const AiReviewTaskTerrorismResult = models_1.Models.AiReviewTaskTerrorismResult;
const LiveStreamAiReviewVoicePornResult = models_1.Models.LiveStreamAiReviewVoicePornResult;
const MediaContentReviewAsrTextSegmentItem = models_1.Models.MediaContentReviewAsrTextSegmentItem;
const MediaContentReviewPoliticalSegmentItem = models_1.Models.MediaContentReviewPoliticalSegmentItem;
const DeletePersonSampleResponse = models_1.Models.DeletePersonSampleResponse;
const CreateSnapshotByTimeOffsetTemplateResponse = models_1.Models.CreateSnapshotByTimeOffsetTemplateResponse;
const ModifyContentReviewTemplateRequest = models_1.Models.ModifyContentReviewTemplateRequest;
const ImageWatermarkInputForUpdate = models_1.Models.ImageWatermarkInputForUpdate;
const AiContentReviewTaskInput = models_1.Models.AiContentReviewTaskInput;
const CreateAdaptiveDynamicStreamingTemplateResponse = models_1.Models.CreateAdaptiveDynamicStreamingTemplateResponse;
const DeleteSampleSnapshotTemplateRequest = models_1.Models.DeleteSampleSnapshotTemplateRequest;
const AiAnalysisTaskInput = models_1.Models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models_1.Models.ImageSpriteTemplate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models_1.Models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const LiveStreamAsrFullTextRecognitionResult = models_1.Models.LiveStreamAsrFullTextRecognitionResult;
const AiReviewPornOcrTaskOutput = models_1.Models.AiReviewPornOcrTaskOutput;
const CreateSampleSnapshotTemplateResponse = models_1.Models.CreateSampleSnapshotTemplateResponse;
const ProhibitedAsrReviewTemplateInfo = models_1.Models.ProhibitedAsrReviewTemplateInfo;
const AiReviewPoliticalAsrTaskInput = models_1.Models.AiReviewPoliticalAsrTaskInput;
const MediaAiAnalysisTagItem = models_1.Models.MediaAiAnalysisTagItem;
const TranscodeTemplate = models_1.Models.TranscodeTemplate;
const PornOcrReviewTemplateInfo = models_1.Models.PornOcrReviewTemplateInfo;
const AiReviewTaskPoliticalAsrResult = models_1.Models.AiReviewTaskPoliticalAsrResult;
const AiRecognitionTaskAsrWordsSegmentItem = models_1.Models.AiRecognitionTaskAsrWordsSegmentItem;
const PornConfigureInfoForUpdate = models_1.Models.PornConfigureInfoForUpdate;
const AiReviewProhibitedAsrTaskInput = models_1.Models.AiReviewProhibitedAsrTaskInput;
const MediaContentReviewSegmentItem = models_1.Models.MediaContentReviewSegmentItem;
const TerrorismOcrReviewTemplateInfo = models_1.Models.TerrorismOcrReviewTemplateInfo;
const AiReviewTaskPornResult = models_1.Models.AiReviewTaskPornResult;
const AiReviewProhibitedAsrTaskOutput = models_1.Models.AiReviewProhibitedAsrTaskOutput;
const LiveStreamFaceRecognitionResult = models_1.Models.LiveStreamFaceRecognitionResult;
const DescribeSampleSnapshotTemplatesRequest = models_1.Models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models_1.Models.CoverConfigureInfoForUpdate;
const DisableWorkflowResponse = models_1.Models.DisableWorkflowResponse;
const SampleSnapshotTemplate = models_1.Models.SampleSnapshotTemplate;
const PoliticalImgReviewTemplateInfoForUpdate = models_1.Models.PoliticalImgReviewTemplateInfoForUpdate;
const UserDefineOcrTextReviewTemplateInfo = models_1.Models.UserDefineOcrTextReviewTemplateInfo;
const AdaptiveStreamTemplate = models_1.Models.AdaptiveStreamTemplate;
const TranscodeTaskInput = models_1.Models.TranscodeTaskInput;
const ModifyAIRecognitionTemplateRequest = models_1.Models.ModifyAIRecognitionTemplateRequest;
const ParseNotificationResponse = models_1.Models.ParseNotificationResponse;
const ResetWorkflowResponse = models_1.Models.ResetWorkflowResponse;
const CreateAIAnalysisTemplateResponse = models_1.Models.CreateAIAnalysisTemplateResponse;
const MediaProcessTaskSampleSnapshotResult = models_1.Models.MediaProcessTaskSampleSnapshotResult;
const UserDefineConfigureInfoForUpdate = models_1.Models.UserDefineConfigureInfoForUpdate;
const CosFileUploadTrigger = models_1.Models.CosFileUploadTrigger;
const AiReviewPoliticalAsrTaskOutput = models_1.Models.AiReviewPoliticalAsrTaskOutput;
const TEHDConfigForUpdate = models_1.Models.TEHDConfigForUpdate;
const ModifyPersonSampleRequest = models_1.Models.ModifyPersonSampleRequest;
const AsrFullTextConfigureInfo = models_1.Models.AsrFullTextConfigureInfo;
const DescribeMediaMetaDataResponse = models_1.Models.DescribeMediaMetaDataResponse;
const CreateAIRecognitionTemplateRequest = models_1.Models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models_1.Models.DescribeTaskDetailRequest;
const AiAnalysisTaskFrameTagResult = models_1.Models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models_1.Models.AiReviewPornTaskOutput;
const CreateWorkflowResponse = models_1.Models.CreateWorkflowResponse;
const AiRecognitionTaskAsrFullTextResult = models_1.Models.AiRecognitionTaskAsrFullTextResult;
const ModifyAIRecognitionTemplateResponse = models_1.Models.ModifyAIRecognitionTemplateResponse;
const PoliticalImgReviewTemplateInfo = models_1.Models.PoliticalImgReviewTemplateInfo;
const PoliticalConfigureInfo = models_1.Models.PoliticalConfigureInfo;
const ModifyAnimatedGraphicsTemplateRequest = models_1.Models.ModifyAnimatedGraphicsTemplateRequest;
const AiRecognitionTaskOcrWordsSegmentItem = models_1.Models.AiRecognitionTaskOcrWordsSegmentItem;
const MediaProcessTaskResult = models_1.Models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models_1.Models.DeleteWordSamplesResponse;
const WatermarkInput = models_1.Models.WatermarkInput;
const EnableWorkflowResponse = models_1.Models.EnableWorkflowResponse;
const AiSampleWordInfo = models_1.Models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models_1.Models.AdaptiveDynamicStreamingInfoItem;
const ProhibitedOcrReviewTemplateInfo = models_1.Models.ProhibitedOcrReviewTemplateInfo;
const LiveStreamOcrFullTextRecognitionResult = models_1.Models.LiveStreamOcrFullTextRecognitionResult;
const ModifyTranscodeTemplateResponse = models_1.Models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models_1.Models.MediaMetaData;
const VideoTemplateInfoForUpdate = models_1.Models.VideoTemplateInfoForUpdate;
const CreateContentReviewTemplateRequest = models_1.Models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models_1.Models.DescribeContentReviewTemplatesRequest;
const AdaptiveDynamicStreamingTaskInput = models_1.Models.AdaptiveDynamicStreamingTaskInput;
const DescribeImageSpriteTemplatesResponse = models_1.Models.DescribeImageSpriteTemplatesResponse;
const TaskNotifyConfig = models_1.Models.TaskNotifyConfig;
const AiReviewTaskPoliticalResult = models_1.Models.AiReviewTaskPoliticalResult;
const AiAnalysisTaskFrameTagInput = models_1.Models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models_1.Models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models_1.Models.AiRecognitionTaskAsrWordsResultItem;
const DescribeTaskDetailResponse = models_1.Models.DescribeTaskDetailResponse;
const LiveStreamAiRecognitionResultItem = models_1.Models.LiveStreamAiRecognitionResultItem;
const DeleteImageSpriteTemplateRequest = models_1.Models.DeleteImageSpriteTemplateRequest;
const AiSampleFailFaceInfo = models_1.Models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models_1.Models.UserDefineFaceReviewTemplateInfoForUpdate;
const OcrFullTextConfigureInfoForUpdate = models_1.Models.OcrFullTextConfigureInfoForUpdate;
const AiRecognitionTaskOcrFullTextResultInput = models_1.Models.AiRecognitionTaskOcrFullTextResultInput;
const DescribeTasksResponse = models_1.Models.DescribeTasksResponse;
const AiRecognitionTaskFaceResultInput = models_1.Models.AiRecognitionTaskFaceResultInput;
const AiReviewPoliticalTaskOutput = models_1.Models.AiReviewPoliticalTaskOutput;
const LiveStreamAiReviewImagePornResult = models_1.Models.LiveStreamAiReviewImagePornResult;
const ModifySnapshotByTimeOffsetTemplateRequest = models_1.Models.ModifySnapshotByTimeOffsetTemplateRequest;
const LiveStreamAiReviewResultItem = models_1.Models.LiveStreamAiReviewResultItem;
const TaskSimpleInfo = models_1.Models.TaskSimpleInfo;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models_1.Models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models_1.Models.MediaVideoStreamItem;
const SnapshotByTimeOffsetTemplate = models_1.Models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models_1.Models.DeleteSnapshotByTimeOffsetTemplateResponse;
const ProhibitedOcrReviewTemplateInfoForUpdate = models_1.Models.ProhibitedOcrReviewTemplateInfoForUpdate;
const DescribeTasksRequest = models_1.Models.DescribeTasksRequest;
const FaceConfigureInfoForUpdate = models_1.Models.FaceConfigureInfoForUpdate;
const CreateTranscodeTemplateResponse = models_1.Models.CreateTranscodeTemplateResponse;
const AiRecognitionTaskAsrWordsResultInput = models_1.Models.AiRecognitionTaskAsrWordsResultInput;
const CreateAIAnalysisTemplateRequest = models_1.Models.CreateAIAnalysisTemplateRequest;
const AiReviewTerrorismTaskInput = models_1.Models.AiReviewTerrorismTaskInput;
const DescribeWorkflowsRequest = models_1.Models.DescribeWorkflowsRequest;
const MediaAudioStreamItem = models_1.Models.MediaAudioStreamItem;
const LiveStreamAiReviewImageTerrorismResult = models_1.Models.LiveStreamAiReviewImageTerrorismResult;
const ProcessLiveStreamRequest = models_1.Models.ProcessLiveStreamRequest;
const ModifyImageSpriteTemplateRequest = models_1.Models.ModifyImageSpriteTemplateRequest;
const AiReviewProhibitedOcrTaskInput = models_1.Models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models_1.Models.DeleteWatermarkTemplateRequest;
const DescribeWordSamplesRequest = models_1.Models.DescribeWordSamplesRequest;
const ModifyAIAnalysisTemplateRequest = models_1.Models.ModifyAIAnalysisTemplateRequest;
const LiveStreamProcessTask = models_1.Models.LiveStreamProcessTask;
const CreateWatermarkTemplateResponse = models_1.Models.CreateWatermarkTemplateResponse;
const DescribeSampleSnapshotTemplatesResponse = models_1.Models.DescribeSampleSnapshotTemplatesResponse;
const ModifyWordSampleResponse = models_1.Models.ModifyWordSampleResponse;
const AiContentReviewResult = models_1.Models.AiContentReviewResult;
const TerrorismImgReviewTemplateInfo = models_1.Models.TerrorismImgReviewTemplateInfo;
const DescribeTranscodeTemplatesRequest = models_1.Models.DescribeTranscodeTemplatesRequest;
const DisableWorkflowRequest = models_1.Models.DisableWorkflowRequest;
const PoliticalConfigureInfoForUpdate = models_1.Models.PoliticalConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models_1.Models.DescribeWatermarkTemplatesResponse;
const CreateAnimatedGraphicsTemplateRequest = models_1.Models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models_1.Models.FrameTagConfigureInfo;
const ModifyPersonSampleResponse = models_1.Models.ModifyPersonSampleResponse;
const DeleteTranscodeTemplateResponse = models_1.Models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models_1.Models.MediaTranscodeItem;
const DescribePersonSamplesResponse = models_1.Models.DescribePersonSamplesResponse;
const PornConfigureInfo = models_1.Models.PornConfigureInfo;
const DescribeAIAnalysisTemplatesResponse = models_1.Models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models_1.Models.CreateSnapshotByTimeOffsetTemplateRequest;
const ParseLiveStreamProcessNotificationRequest = models_1.Models.ParseLiveStreamProcessNotificationRequest;
const AiRecognitionTaskAsrWordsResult = models_1.Models.AiRecognitionTaskAsrWordsResult;
const CreateSampleSnapshotTemplateRequest = models_1.Models.CreateSampleSnapshotTemplateRequest;
const WorkflowTask = models_1.Models.WorkflowTask;
const AiReviewTaskPornAsrResult = models_1.Models.AiReviewTaskPornAsrResult;
const EditMediaFileInfo = models_1.Models.EditMediaFileInfo;
const FaceConfigureInfo = models_1.Models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models_1.Models.AiRecognitionTaskFaceResultOutput;
const PornImgReviewTemplateInfoForUpdate = models_1.Models.PornImgReviewTemplateInfoForUpdate;
const EditMediaTask = models_1.Models.EditMediaTask;
const PornImgReviewTemplateInfo = models_1.Models.PornImgReviewTemplateInfo;
const AiReviewPoliticalOcrTaskOutput = models_1.Models.AiReviewPoliticalOcrTaskOutput;
const OcrFullTextConfigureInfo = models_1.Models.OcrFullTextConfigureInfo;
const DescribeTranscodeTemplatesResponse = models_1.Models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models_1.Models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models_1.Models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models_1.Models.DescribeAnimatedGraphicsTemplatesResponse;
const MediaAiAnalysisFrameTagItem = models_1.Models.MediaAiAnalysisFrameTagItem;
const SampleSnapshotTaskInput = models_1.Models.SampleSnapshotTaskInput;
const TerrorismConfigureInfo = models_1.Models.TerrorismConfigureInfo;
const PoliticalAsrReviewTemplateInfo = models_1.Models.PoliticalAsrReviewTemplateInfo;
const CreateAnimatedGraphicsTemplateResponse = models_1.Models.CreateAnimatedGraphicsTemplateResponse;
const AiAnalysisTaskClassificationResult = models_1.Models.AiAnalysisTaskClassificationResult;
const MediaImageSpriteItem = models_1.Models.MediaImageSpriteItem;
const DescribePersonSamplesRequest = models_1.Models.DescribePersonSamplesRequest;
const AiRecognitionTaskFaceResultItem = models_1.Models.AiRecognitionTaskFaceResultItem;
const AiAnalysisTaskCoverInput = models_1.Models.AiAnalysisTaskCoverInput;
const EditMediaTaskOutput = models_1.Models.EditMediaTaskOutput;
const DeleteWatermarkTemplateResponse = models_1.Models.DeleteWatermarkTemplateResponse;
const DescribeMediaMetaDataRequest = models_1.Models.DescribeMediaMetaDataRequest;
const FrameTagConfigureInfoForUpdate = models_1.Models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models_1.Models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models_1.Models.DescribeAIRecognitionTemplatesRequest;
const ModifyWatermarkTemplateResponse = models_1.Models.ModifyWatermarkTemplateResponse;
const AiRecognitionResult = models_1.Models.AiRecognitionResult;
/**
 * mps client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("mps.tencentcloudapi.com", "2019-06-12", credential, region, profile);
    }
    /**
     * 创建用户自定义指定时间点截图模板，数量上限：16。
     * @param {CreateSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, CreateSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    CreateSnapshotByTimeOffsetTemplate(req, cb) {
        const resp = new CreateSnapshotByTimeOffsetTemplateResponse();
        this.request("CreateSnapshotByTimeOffsetTemplate", req, resp, cb);
    }
    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     * @param {ParseNotificationRequest} req
     * @param {function(string, ParseNotificationResponse):void} cb
     * @public
     */
    ParseNotification(req, cb) {
        const resp = new ParseNotificationResponse();
        this.request("ParseNotification", req, resp, cb);
    }
    /**
     * 修改用户自定义内容审核模板。
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        const resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }
    /**
     * 创建用户自定义内容审核模板，数量上限：50。
     * @param {CreateContentReviewTemplateRequest} req
     * @param {function(string, CreateContentReviewTemplateResponse):void} cb
     * @public
     */
    CreateContentReviewTemplate(req, cb) {
        const resp = new CreateContentReviewTemplateResponse();
        this.request("CreateContentReviewTemplate", req, resp, cb);
    }
    /**
     * 创建用户自定义采样截图模板，数量上限：16。
     * @param {CreateSampleSnapshotTemplateRequest} req
     * @param {function(string, CreateSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateSampleSnapshotTemplate(req, cb) {
        const resp = new CreateSampleSnapshotTemplateResponse();
        this.request("CreateSampleSnapshotTemplate", req, resp, cb);
    }
    /**
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对一个文件进行剪辑，生成一个新的视频；
2. 对多个文件进行拼接，生成一个新的视频；
3. 对多个文件进行剪辑，然后再拼接，生成一个新的视频。
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        const resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
    }
    /**
     * 删除用户自定义内容分析模板。

注意：模板 ID 为 10000 以下的为系统预置模板，不允许删除。
     * @param {DeleteAIAnalysisTemplateRequest} req
     * @param {function(string, DeleteAIAnalysisTemplateResponse):void} cb
     * @public
     */
    DeleteAIAnalysisTemplate(req, cb) {
        const resp = new DeleteAIAnalysisTemplateResponse();
        this.request("DeleteAIAnalysisTemplate", req, resp, cb);
    }
    /**
     * 从 CMQ 获取到消息后，从消息的 msgBody 字段中解析出 MPS 直播流处理事件通知的内容。
该接口不用于发起网络调用，而是用来帮助生成各个语言平台的 SDK，您可以参考 SDK 的中解析函数的实现事件通知的解析。
     * @param {ParseLiveStreamProcessNotificationRequest} req
     * @param {function(string, ParseLiveStreamProcessNotificationResponse):void} cb
     * @public
     */
    ParseLiveStreamProcessNotification(req, cb) {
        const resp = new ParseLiveStreamProcessNotificationResponse();
        this.request("ParseLiveStreamProcessNotification", req, resp, cb);
    }
    /**
     * 根据工作流 ID，获取工作流详情列表。
     * @param {DescribeWorkflowsRequest} req
     * @param {function(string, DescribeWorkflowsResponse):void} cb
     * @public
     */
    DescribeWorkflows(req, cb) {
        const resp = new DescribeWorkflowsResponse();
        this.request("DescribeWorkflows", req, resp, cb);
    }
    /**
     * 查询指定时间点截图模板，支持根据条件，分页查询。
     * @param {DescribeSnapshotByTimeOffsetTemplatesRequest} req
     * @param {function(string, DescribeSnapshotByTimeOffsetTemplatesResponse):void} cb
     * @public
     */
    DescribeSnapshotByTimeOffsetTemplates(req, cb) {
        const resp = new DescribeSnapshotByTimeOffsetTemplatesResponse();
        this.request("DescribeSnapshotByTimeOffsetTemplates", req, resp, cb);
    }
    /**
     * 获取媒体的元信息，包括视频画面宽、高、编码格式、时长、帧率等。
     * @param {DescribeMediaMetaDataRequest} req
     * @param {function(string, DescribeMediaMetaDataResponse):void} cb
     * @public
     */
    DescribeMediaMetaData(req, cb) {
        const resp = new DescribeMediaMetaDataResponse();
        this.request("DescribeMediaMetaData", req, resp, cb);
    }
    /**
     * 重新设置一个已经存在且处于禁用状态的工作流。
     * @param {ResetWorkflowRequest} req
     * @param {function(string, ResetWorkflowResponse):void} cb
     * @public
     */
    ResetWorkflow(req, cb) {
        const resp = new ResetWorkflowResponse();
        this.request("ResetWorkflow", req, resp, cb);
    }
    /**
     * 修改用户自定义转码模板信息。
     * @param {ModifyTranscodeTemplateRequest} req
     * @param {function(string, ModifyTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyTranscodeTemplate(req, cb) {
        const resp = new ModifyTranscodeTemplateResponse();
        this.request("ModifyTranscodeTemplate", req, resp, cb);
    }
    /**
     * 删除用户自定义转动图模板。
     * @param {DeleteAnimatedGraphicsTemplateRequest} req
     * @param {function(string, DeleteAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    DeleteAnimatedGraphicsTemplate(req, cb) {
        const resp = new DeleteAnimatedGraphicsTemplateResponse();
        this.request("DeleteAnimatedGraphicsTemplate", req, resp, cb);
    }
    /**
     * 根据内容分析模板唯一标识，获取内容分析模板详情列表。返回结果包含符合条件的所有用户自定义内容分析模板及系统预置视频内容分析模板
     * @param {DescribeAIAnalysisTemplatesRequest} req
     * @param {function(string, DescribeAIAnalysisTemplatesResponse):void} cb
     * @public
     */
    DescribeAIAnalysisTemplates(req, cb) {
        const resp = new DescribeAIAnalysisTemplatesResponse();
        this.request("DescribeAIAnalysisTemplates", req, resp, cb);
    }
    /**
     * 通过任务 ID 查询任务的执行状态和结果的详细信息（最多可以查询3天之内提交的任务）。
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        const resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }
    /**
     * 修改用户自定义内容识别模板。
     * @param {ModifyAIRecognitionTemplateRequest} req
     * @param {function(string, ModifyAIRecognitionTemplateResponse):void} cb
     * @public
     */
    ModifyAIRecognitionTemplate(req, cb) {
        const resp = new ModifyAIRecognitionTemplateResponse();
        this.request("ModifyAIRecognitionTemplate", req, resp, cb);
    }
    /**
     * 修改转自适应码流模板
     * @param {ModifyAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, ModifyAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    ModifyAdaptiveDynamicStreamingTemplate(req, cb) {
        const resp = new ModifyAdaptiveDynamicStreamingTemplateResponse();
        this.request("ModifyAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }
    /**
     * 修改用户自定义采样截图模板。
     * @param {ModifySampleSnapshotTemplateRequest} req
     * @param {function(string, ModifySampleSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifySampleSnapshotTemplate(req, cb) {
        const resp = new ModifySampleSnapshotTemplateResponse();
        this.request("ModifySampleSnapshotTemplate", req, resp, cb);
    }
    /**
     * 删除用户自定义水印模板。
     * @param {DeleteWatermarkTemplateRequest} req
     * @param {function(string, DeleteWatermarkTemplateResponse):void} cb
     * @public
     */
    DeleteWatermarkTemplate(req, cb) {
        const resp = new DeleteWatermarkTemplateResponse();
        this.request("DeleteWatermarkTemplate", req, resp, cb);
    }
    /**
     * 该接口用于根据人物 ID，删除人物样本。
     * @param {DeletePersonSampleRequest} req
     * @param {function(string, DeletePersonSampleResponse):void} cb
     * @public
     */
    DeletePersonSample(req, cb) {
        const resp = new DeletePersonSampleResponse();
        this.request("DeletePersonSample", req, resp, cb);
    }
    /**
     * 删除用户自定义转码模板。
     * @param {DeleteTranscodeTemplateRequest} req
     * @param {function(string, DeleteTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteTranscodeTemplate(req, cb) {
        const resp = new DeleteTranscodeTemplateResponse();
        this.request("DeleteTranscodeTemplate", req, resp, cb);
    }
    /**
     * 删除用户自定义指定时间点截图模板。
     * @param {DeleteSnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, DeleteSnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    DeleteSnapshotByTimeOffsetTemplate(req, cb) {
        const resp = new DeleteSnapshotByTimeOffsetTemplateResponse();
        this.request("DeleteSnapshotByTimeOffsetTemplate", req, resp, cb);
    }
    /**
     * 修改用户自定义转动图模板。
     * @param {ModifyAnimatedGraphicsTemplateRequest} req
     * @param {function(string, ModifyAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    ModifyAnimatedGraphicsTemplate(req, cb) {
        const resp = new ModifyAnimatedGraphicsTemplateResponse();
        this.request("ModifyAnimatedGraphicsTemplate", req, resp, cb);
    }
    /**
     * 该接口用于根据应用场景、关键词、标签，分页查询关键词样本信息。
     * @param {DescribeWordSamplesRequest} req
     * @param {function(string, DescribeWordSamplesResponse):void} cb
     * @public
     */
    DescribeWordSamples(req, cb) {
        const resp = new DescribeWordSamplesResponse();
        this.request("DescribeWordSamples", req, resp, cb);
    }
    /**
     * 修改用户自定义水印模板，水印类型不允许修改。
     * @param {ModifyWatermarkTemplateRequest} req
     * @param {function(string, ModifyWatermarkTemplateResponse):void} cb
     * @public
     */
    ModifyWatermarkTemplate(req, cb) {
        const resp = new ModifyWatermarkTemplateResponse();
        this.request("ModifyWatermarkTemplate", req, resp, cb);
    }
    /**
     * 该接口用于批量删除关键词样本。
     * @param {DeleteWordSamplesRequest} req
     * @param {function(string, DeleteWordSamplesResponse):void} cb
     * @public
     */
    DeleteWordSamples(req, cb) {
        const resp = new DeleteWordSamplesResponse();
        this.request("DeleteWordSamples", req, resp, cb);
    }
    /**
     * 删除工作流。对于已启用的工作流，需要禁用后才能删除。
     * @param {DeleteWorkflowRequest} req
     * @param {function(string, DeleteWorkflowResponse):void} cb
     * @public
     */
    DeleteWorkflow(req, cb) {
        const resp = new DeleteWorkflowResponse();
        this.request("DeleteWorkflow", req, resp, cb);
    }
    /**
     * 删除转自适应码流模板
     * @param {DeleteAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, DeleteAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    DeleteAdaptiveDynamicStreamingTemplate(req, cb) {
        const resp = new DeleteAdaptiveDynamicStreamingTemplateResponse();
        this.request("DeleteAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }
    /**
     * 创建转自适应码流模板，数量上限：100。
     * @param {CreateAdaptiveDynamicStreamingTemplateRequest} req
     * @param {function(string, CreateAdaptiveDynamicStreamingTemplateResponse):void} cb
     * @public
     */
    CreateAdaptiveDynamicStreamingTemplate(req, cb) {
        const resp = new CreateAdaptiveDynamicStreamingTemplateResponse();
        this.request("CreateAdaptiveDynamicStreamingTemplate", req, resp, cb);
    }
    /**
     * 禁用工作流。
     * @param {DisableWorkflowRequest} req
     * @param {function(string, DisableWorkflowResponse):void} cb
     * @public
     */
    DisableWorkflow(req, cb) {
        const resp = new DisableWorkflowResponse();
        this.request("DisableWorkflow", req, resp, cb);
    }
    /**
     * 查询采样截图模板，支持根据条件，分页查询。
     * @param {DescribeSampleSnapshotTemplatesRequest} req
     * @param {function(string, DescribeSampleSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeSampleSnapshotTemplates(req, cb) {
        const resp = new DescribeSampleSnapshotTemplatesResponse();
        this.request("DescribeSampleSnapshotTemplates", req, resp, cb);
    }
    /**
     * 创建用户自定义水印模板，数量上限：1000。
     * @param {CreateWatermarkTemplateRequest} req
     * @param {function(string, CreateWatermarkTemplateResponse):void} cb
     * @public
     */
    CreateWatermarkTemplate(req, cb) {
        const resp = new CreateWatermarkTemplateResponse();
        this.request("CreateWatermarkTemplate", req, resp, cb);
    }
    /**
     * 该接口用于查询人物样本信息，支持根据人物 ID、名称、标签，分页查询。
     * @param {DescribePersonSamplesRequest} req
     * @param {function(string, DescribePersonSamplesResponse):void} cb
     * @public
     */
    DescribePersonSamples(req, cb) {
        const resp = new DescribePersonSamplesResponse();
        this.request("DescribePersonSamples", req, resp, cb);
    }
    /**
     * 删除用户自定义采样截图模板。
     * @param {DeleteSampleSnapshotTemplateRequest} req
     * @param {function(string, DeleteSampleSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteSampleSnapshotTemplate(req, cb) {
        const resp = new DeleteSampleSnapshotTemplateResponse();
        this.request("DeleteSampleSnapshotTemplate", req, resp, cb);
    }
    /**
     * 删除用户自定义内容识别模板。
     * @param {DeleteAIRecognitionTemplateRequest} req
     * @param {function(string, DeleteAIRecognitionTemplateResponse):void} cb
     * @public
     */
    DeleteAIRecognitionTemplate(req, cb) {
        const resp = new DeleteAIRecognitionTemplateResponse();
        this.request("DeleteAIRecognitionTemplate", req, resp, cb);
    }
    /**
     * 创建用户自定义转动图模板，数量上限：16。
     * @param {CreateAnimatedGraphicsTemplateRequest} req
     * @param {function(string, CreateAnimatedGraphicsTemplateResponse):void} cb
     * @public
     */
    CreateAnimatedGraphicsTemplate(req, cb) {
        const resp = new CreateAnimatedGraphicsTemplateResponse();
        this.request("CreateAnimatedGraphicsTemplate", req, resp, cb);
    }
    /**
     * 查询转动图模板列表，支持根据条件，分页查询。
     * @param {DescribeAnimatedGraphicsTemplatesRequest} req
     * @param {function(string, DescribeAnimatedGraphicsTemplatesResponse):void} cb
     * @public
     */
    DescribeAnimatedGraphicsTemplates(req, cb) {
        const resp = new DescribeAnimatedGraphicsTemplatesResponse();
        this.request("DescribeAnimatedGraphicsTemplates", req, resp, cb);
    }
    /**
     * 启用工作流。
     * @param {EnableWorkflowRequest} req
     * @param {function(string, EnableWorkflowResponse):void} cb
     * @public
     */
    EnableWorkflow(req, cb) {
        const resp = new EnableWorkflowResponse();
        this.request("EnableWorkflow", req, resp, cb);
    }
    /**
     * 对已发起的任务进行管理。
> 注意：目前仅支持终止执行中的直播流处理任务。
     * @param {ManageTaskRequest} req
     * @param {function(string, ManageTaskResponse):void} cb
     * @public
     */
    ManageTask(req, cb) {
        const resp = new ManageTaskResponse();
        this.request("ManageTask", req, resp, cb);
    }
    /**
     * 修改用户自定义内容分析模板。

注意：模板 ID 10000 以下的为系统预置模板，不允许修改。
     * @param {ModifyAIAnalysisTemplateRequest} req
     * @param {function(string, ModifyAIAnalysisTemplateResponse):void} cb
     * @public
     */
    ModifyAIAnalysisTemplate(req, cb) {
        const resp = new ModifyAIAnalysisTemplateResponse();
        this.request("ModifyAIAnalysisTemplate", req, resp, cb);
    }
    /**
     * * 该接口用于查询任务列表；
* 当列表数据比较多时，单次接口调用无法拉取整个列表，可通过 ScrollToken 参数，分批拉取；
* 只能查询到最近三天（72 小时）内的任务。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        const resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }
    /**
     * 修改用户自定义指定时间点截图模板。
     * @param {ModifySnapshotByTimeOffsetTemplateRequest} req
     * @param {function(string, ModifySnapshotByTimeOffsetTemplateResponse):void} cb
     * @public
     */
    ModifySnapshotByTimeOffsetTemplate(req, cb) {
        const resp = new ModifySnapshotByTimeOffsetTemplateResponse();
        this.request("ModifySnapshotByTimeOffsetTemplate", req, resp, cb);
    }
    /**
     * 该接口用于批量创建关键词样本，样本用于通过OCR、ASR技术，进行内容审核、内容识别等视频处理。
     * @param {CreateWordSamplesRequest} req
     * @param {function(string, CreateWordSamplesResponse):void} cb
     * @public
     */
    CreateWordSamples(req, cb) {
        const resp = new CreateWordSamplesResponse();
        this.request("CreateWordSamples", req, resp, cb);
    }
    /**
     * 该接口用于创建人物样本，用于通过人脸识别等技术，进行内容识别、内容审核等视频处理。
     * @param {CreatePersonSampleRequest} req
     * @param {function(string, CreatePersonSampleResponse):void} cb
     * @public
     */
    CreatePersonSample(req, cb) {
        const resp = new CreatePersonSampleResponse();
        this.request("CreatePersonSample", req, resp, cb);
    }
    /**
     * 该接口用于根据人物 ID，修改人物样本信息，包括名称、描述的修改，以及人脸、标签的添加、删除、重置操作。人脸删除操作需保证至少剩余 1 张图片，否则，请使用重置操作。
     * @param {ModifyPersonSampleRequest} req
     * @param {function(string, ModifyPersonSampleResponse):void} cb
     * @public
     */
    ModifyPersonSample(req, cb) {
        const resp = new ModifyPersonSampleResponse();
        this.request("ModifyPersonSample", req, resp, cb);
    }
    /**
     * 创建用户自定义转码模板，数量上限：1000。
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        const resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
    }
    /**
     * 对 COS 中指定 Bucket 的目录下上传的媒体文件，设置处理规则，包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、鉴恐、鉴政）；
8. 智能内容分析（标签、分类、封面、按帧标签）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。

注意：创建工作流成功后是禁用状态，需要手动启用。
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        const resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }
    /**
     * 对直播流媒体发起处理任务，功能包括：

* 智能内容审核（画面鉴黄、鉴政、鉴暴、声音鉴黄）。

直播流处理事件通知实时写入用户指定的消息队列 CMQ 中，用户需要从消息队列 CMQ 中获取事件通知结果，同时处理过程中存在输出文件的，会写入用户指定的输出文件的目标存储中。
     * @param {ProcessLiveStreamRequest} req
     * @param {function(string, ProcessLiveStreamResponse):void} cb
     * @public
     */
    ProcessLiveStream(req, cb) {
        const resp = new ProcessLiveStreamResponse();
        this.request("ProcessLiveStream", req, resp, cb);
    }
    /**
     * 查询转自适应码流模板，支持根据条件，分页查询。
     * @param {DescribeAdaptiveDynamicStreamingTemplatesRequest} req
     * @param {function(string, DescribeAdaptiveDynamicStreamingTemplatesResponse):void} cb
     * @public
     */
    DescribeAdaptiveDynamicStreamingTemplates(req, cb) {
        const resp = new DescribeAdaptiveDynamicStreamingTemplatesResponse();
        this.request("DescribeAdaptiveDynamicStreamingTemplates", req, resp, cb);
    }
    /**
     * 对 COS 中的媒体文件发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频转自适应码流；
7. 智能内容审核（鉴黄、鉴恐、鉴政）；
8. 智能内容分析（标签、分类、封面、按帧标签）；
9. 智能内容识别（人脸、文本全文、文本关键词、语音全文、语音关键词）。
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        const resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }
    /**
     * 创建用户自定义内容识别模板，数量上限：50。
     * @param {CreateAIRecognitionTemplateRequest} req
     * @param {function(string, CreateAIRecognitionTemplateResponse):void} cb
     * @public
     */
    CreateAIRecognitionTemplate(req, cb) {
        const resp = new CreateAIRecognitionTemplateResponse();
        this.request("CreateAIRecognitionTemplate", req, resp, cb);
    }
    /**
     * 修改用户自定义雪碧图模板。
     * @param {ModifyImageSpriteTemplateRequest} req
     * @param {function(string, ModifyImageSpriteTemplateResponse):void} cb
     * @public
     */
    ModifyImageSpriteTemplate(req, cb) {
        const resp = new ModifyImageSpriteTemplateResponse();
        this.request("ModifyImageSpriteTemplate", req, resp, cb);
    }
    /**
     * 该接口用于修改关键词的应用场景、标签，关键词本身不可修改，如需修改，可删除重建。
     * @param {ModifyWordSampleRequest} req
     * @param {function(string, ModifyWordSampleResponse):void} cb
     * @public
     */
    ModifyWordSample(req, cb) {
        const resp = new ModifyWordSampleResponse();
        this.request("ModifyWordSample", req, resp, cb);
    }
    /**
     * 查询雪碧图模板，支持根据条件，分页查询。
     * @param {DescribeImageSpriteTemplatesRequest} req
     * @param {function(string, DescribeImageSpriteTemplatesResponse):void} cb
     * @public
     */
    DescribeImageSpriteTemplates(req, cb) {
        const resp = new DescribeImageSpriteTemplatesResponse();
        this.request("DescribeImageSpriteTemplates", req, resp, cb);
    }
    /**
     * 删除用户自定义内容审核模板。
     * @param {DeleteContentReviewTemplateRequest} req
     * @param {function(string, DeleteContentReviewTemplateResponse):void} cb
     * @public
     */
    DeleteContentReviewTemplate(req, cb) {
        const resp = new DeleteContentReviewTemplateResponse();
        this.request("DeleteContentReviewTemplate", req, resp, cb);
    }
    /**
     * 创建用户自定义内容分析模板，数量上限：50。
     * @param {CreateAIAnalysisTemplateRequest} req
     * @param {function(string, CreateAIAnalysisTemplateResponse):void} cb
     * @public
     */
    CreateAIAnalysisTemplate(req, cb) {
        const resp = new CreateAIAnalysisTemplateResponse();
        this.request("CreateAIAnalysisTemplate", req, resp, cb);
    }
    /**
     * 根据内容识别模板唯一标识，获取内容识别模板详情列表。返回结果包含符合条件的所有用户自定义内容识别模板及系统预置视频内容识别模板
     * @param {DescribeAIRecognitionTemplatesRequest} req
     * @param {function(string, DescribeAIRecognitionTemplatesResponse):void} cb
     * @public
     */
    DescribeAIRecognitionTemplates(req, cb) {
        const resp = new DescribeAIRecognitionTemplatesResponse();
        this.request("DescribeAIRecognitionTemplates", req, resp, cb);
    }
    /**
     * 查询用户自定义水印模板，支持根据条件，分页查询。
     * @param {DescribeWatermarkTemplatesRequest} req
     * @param {function(string, DescribeWatermarkTemplatesResponse):void} cb
     * @public
     */
    DescribeWatermarkTemplates(req, cb) {
        const resp = new DescribeWatermarkTemplatesResponse();
        this.request("DescribeWatermarkTemplates", req, resp, cb);
    }
    /**
     * 创建用户自定义雪碧图模板，数量上限：16。
     * @param {CreateImageSpriteTemplateRequest} req
     * @param {function(string, CreateImageSpriteTemplateResponse):void} cb
     * @public
     */
    CreateImageSpriteTemplate(req, cb) {
        const resp = new CreateImageSpriteTemplateResponse();
        this.request("CreateImageSpriteTemplate", req, resp, cb);
    }
    /**
     * 删除雪碧图模板。
     * @param {DeleteImageSpriteTemplateRequest} req
     * @param {function(string, DeleteImageSpriteTemplateResponse):void} cb
     * @public
     */
    DeleteImageSpriteTemplate(req, cb) {
        const resp = new DeleteImageSpriteTemplateResponse();
        this.request("DeleteImageSpriteTemplate", req, resp, cb);
    }
    /**
     * 根据转码模板唯一标识，获取转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置转码模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeTranscodeTemplatesRequest} req
     * @param {function(string, DescribeTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeTranscodeTemplates(req, cb) {
        const resp = new DescribeTranscodeTemplatesResponse();
        this.request("DescribeTranscodeTemplates", req, resp, cb);
    }
    /**
     * 根据内容审核模板唯一标识，获取内容审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及系统预置内容审核模板。
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        const resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=mps_client.js.map