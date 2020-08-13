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
const Canvas = models_1.Models.Canvas;
const ModifySampleSnapshotTemplateResponse = models_1.Models.ModifySampleSnapshotTemplateResponse;
const ModifyWatermarkTemplateRequest = models_1.Models.ModifyWatermarkTemplateRequest;
const AiRecognitionTaskAsrFullTextSegmentItem = models_1.Models.AiRecognitionTaskAsrFullTextSegmentItem;
const UserDefineOcrTextReviewTemplateInfoForUpdate = models_1.Models.UserDefineOcrTextReviewTemplateInfoForUpdate;
const DescribeAllClassRequest = models_1.Models.DescribeAllClassRequest;
const WeChatMiniProgramPublishRequest = models_1.Models.WeChatMiniProgramPublishRequest;
const AiAnalysisTaskClassificationInput = models_1.Models.AiAnalysisTaskClassificationInput;
const SvgWatermarkInput = models_1.Models.SvgWatermarkInput;
const CreateTranscodeTemplateRequest = models_1.Models.CreateTranscodeTemplateRequest;
const TransitionOpertion = models_1.Models.TransitionOpertion;
const AudioTrackItem = models_1.Models.AudioTrackItem;
const MediaAiAnalysisHighlightItem = models_1.Models.MediaAiAnalysisHighlightItem;
const DescribeAnimatedGraphicsTemplatesRequest = models_1.Models.DescribeAnimatedGraphicsTemplatesRequest;
const AiReviewTaskProhibitedAsrResult = models_1.Models.AiReviewTaskProhibitedAsrResult;
const AdaptiveDynamicStreamingTemplate = models_1.Models.AdaptiveDynamicStreamingTemplate;
const DeleteAnimatedGraphicsTemplateResponse = models_1.Models.DeleteAnimatedGraphicsTemplateResponse;
const AiReviewTaskProhibitedOcrResult = models_1.Models.AiReviewTaskProhibitedOcrResult;
const AiRecognitionTaskAsrFullTextResultOutput = models_1.Models.AiRecognitionTaskAsrFullTextResultOutput;
const AiReviewProhibitedOcrTaskOutput = models_1.Models.AiReviewProhibitedOcrTaskOutput;
const MediaMiniProgramReviewElem = models_1.Models.MediaMiniProgramReviewElem;
const AiAnalysisTaskCoverOutput = models_1.Models.AiAnalysisTaskCoverOutput;
const MediaSnapshotByTimeOffsetItem = models_1.Models.MediaSnapshotByTimeOffsetItem;
const ModifySampleSnapshotTemplateRequest = models_1.Models.ModifySampleSnapshotTemplateRequest;
const AiReviewPoliticalOcrTaskInput = models_1.Models.AiReviewPoliticalOcrTaskInput;
const MediaInputInfo = models_1.Models.MediaInputInfo;
const CreateImageSpriteTask2017 = models_1.Models.CreateImageSpriteTask2017;
const TempCertificate = models_1.Models.TempCertificate;
const AiReviewTaskPoliticalOcrResult = models_1.Models.AiReviewTaskPoliticalOcrResult;
const AiSampleWord = models_1.Models.AiSampleWord;
const CreateImageSpriteTemplateRequest = models_1.Models.CreateImageSpriteTemplateRequest;
const MediaSnapshotByTimePicInfoItem = models_1.Models.MediaSnapshotByTimePicInfoItem;
const UserDefineFaceReviewTemplateInfo = models_1.Models.UserDefineFaceReviewTemplateInfo;
const ContentReviewTemplateItem = models_1.Models.ContentReviewTemplateItem;
const DeleteAIRecognitionTemplateResponse = models_1.Models.DeleteAIRecognitionTemplateResponse;
const DeleteContentReviewTemplateRequest = models_1.Models.DeleteContentReviewTemplateRequest;
const AiReviewPoliticalTaskInput = models_1.Models.AiReviewPoliticalTaskInput;
const AudioTransform = models_1.Models.AudioTransform;
const ResetProcedureTemplateRequest = models_1.Models.ResetProcedureTemplateRequest;
const ComposeMediaResponse = models_1.Models.ComposeMediaResponse;
const DeleteSampleSnapshotTemplateRequest = models_1.Models.DeleteSampleSnapshotTemplateRequest;
const DescribeStorageDataResponse = models_1.Models.DescribeStorageDataResponse;
const AudioTemplateInfoForUpdate = models_1.Models.AudioTemplateInfoForUpdate;
const ModifySubAppIdInfoRequest = models_1.Models.ModifySubAppIdInfoRequest;
const DeletePersonSampleRequest = models_1.Models.DeletePersonSampleRequest;
const MediaSampleSnapshotItem = models_1.Models.MediaSampleSnapshotItem;
const AiRecognitionTaskInput = models_1.Models.AiRecognitionTaskInput;
const AudioTemplateInfo = models_1.Models.AudioTemplateInfo;
const ExecuteFunctionResponse = models_1.Models.ExecuteFunctionResponse;
const CoverConfigureInfo = models_1.Models.CoverConfigureInfo;
const ComposeMediaRequest = models_1.Models.ComposeMediaRequest;
const AIRecognitionTemplateItem = models_1.Models.AIRecognitionTemplateItem;
const AiReviewPornAsrTaskInput = models_1.Models.AiReviewPornAsrTaskInput;
const AiRecognitionTaskFaceResult = models_1.Models.AiRecognitionTaskFaceResult;
const AiRecognitionTaskHeadTailResultInput = models_1.Models.AiRecognitionTaskHeadTailResultInput;
const CreateAdaptiveDynamicStreamingTemplateRequest = models_1.Models.CreateAdaptiveDynamicStreamingTemplateRequest;
const PushUrlCacheResponse = models_1.Models.PushUrlCacheResponse;
const MediaProcessTaskSampleSnapshotResult = models_1.Models.MediaProcessTaskSampleSnapshotResult;
const TerrorismImgReviewTemplateInfoForUpdate = models_1.Models.TerrorismImgReviewTemplateInfoForUpdate;
const ModifyTranscodeTemplateRequest = models_1.Models.ModifyTranscodeTemplateRequest;
const AiAnalysisTaskHighlightResult = models_1.Models.AiAnalysisTaskHighlightResult;
const DeleteAIAnalysisTemplateResponse = models_1.Models.DeleteAIAnalysisTemplateResponse;
const ApplyUploadResponse = models_1.Models.ApplyUploadResponse;
const TextWatermarkTemplateInputForUpdate = models_1.Models.TextWatermarkTemplateInputForUpdate;
const DeleteSuperPlayerConfigRequest = models_1.Models.DeleteSuperPlayerConfigRequest;
const AiReviewTerrorismOcrTaskInput = models_1.Models.AiReviewTerrorismOcrTaskInput;
const AiRecognitionTaskOcrWordsResultInput = models_1.Models.AiRecognitionTaskOcrWordsResultInput;
const AiReviewPornTaskInput = models_1.Models.AiReviewPornTaskInput;
const CreateProcedureTemplateRequest = models_1.Models.CreateProcedureTemplateRequest;
const DescribeMediaProcessUsageDataRequest = models_1.Models.DescribeMediaProcessUsageDataRequest;
const CreatePersonSampleRequest = models_1.Models.CreatePersonSampleRequest;
const MediaTransitionItem = models_1.Models.MediaTransitionItem;
const MediaAiAnalysisCoverItem = models_1.Models.MediaAiAnalysisCoverItem;
const TagConfigureInfo = models_1.Models.TagConfigureInfo;
const ModifySuperPlayerConfigResponse = models_1.Models.ModifySuperPlayerConfigResponse;
const AiRecognitionTaskOcrWordsResultOutput = models_1.Models.AiRecognitionTaskOcrWordsResultOutput;
const ConcatTask2017 = models_1.Models.ConcatTask2017;
const DeleteAIRecognitionTemplateRequest = models_1.Models.DeleteAIRecognitionTemplateRequest;
const FileUploadTask = models_1.Models.FileUploadTask;
const AiAnalysisTaskCoverResult = models_1.Models.AiAnalysisTaskCoverResult;
const AiAnalysisTaskClassificationOutput = models_1.Models.AiAnalysisTaskClassificationOutput;
const FileDeleteTask = models_1.Models.FileDeleteTask;
const AiRecognitionTaskOcrFullTextResultOutput = models_1.Models.AiRecognitionTaskOcrFullTextResultOutput;
const EditMediaTaskInput = models_1.Models.EditMediaTaskInput;
const UserDefineAsrTextReviewTemplateInfo = models_1.Models.UserDefineAsrTextReviewTemplateInfo;
const DescribeWordSamplesResponse = models_1.Models.DescribeWordSamplesResponse;
const AiSampleFaceInfo = models_1.Models.AiSampleFaceInfo;
const MediaProcessTaskAdaptiveDynamicStreamingResult = models_1.Models.MediaProcessTaskAdaptiveDynamicStreamingResult;
const OcrWordsConfigureInfoForUpdate = models_1.Models.OcrWordsConfigureInfoForUpdate;
const WatermarkTemplate = models_1.Models.WatermarkTemplate;
const CoverBySnapshotTaskOutput = models_1.Models.CoverBySnapshotTaskOutput;
const TextWatermarkTemplateInput = models_1.Models.TextWatermarkTemplateInput;
const ForbidMediaDistributionRequest = models_1.Models.ForbidMediaDistributionRequest;
const DescribeAIRecognitionTemplatesResponse = models_1.Models.DescribeAIRecognitionTemplatesResponse;
const EditMediaResponse = models_1.Models.EditMediaResponse;
const PoliticalOcrReviewTemplateInfoForUpdate = models_1.Models.PoliticalOcrReviewTemplateInfoForUpdate;
const ProcessMediaByUrlRequest = models_1.Models.ProcessMediaByUrlRequest;
const ModifyMediaInfoRequest = models_1.Models.ModifyMediaInfoRequest;
const DeleteTranscodeTemplateRequest = models_1.Models.DeleteTranscodeTemplateRequest;
const PornAsrReviewTemplateInfoForUpdate = models_1.Models.PornAsrReviewTemplateInfoForUpdate;
const MediaAnimatedGraphicsInfo = models_1.Models.MediaAnimatedGraphicsInfo;
const DescribeSnapshotByTimeOffsetTemplatesRequest = models_1.Models.DescribeSnapshotByTimeOffsetTemplatesRequest;
const AiRecognitionTaskAsrFullTextResultInput = models_1.Models.AiRecognitionTaskAsrFullTextResultInput;
const MediaMiniProgramReviewInfoItem = models_1.Models.MediaMiniProgramReviewInfoItem;
const TaskStatData = models_1.Models.TaskStatData;
const OcrFullTextConfigureInfoForUpdate = models_1.Models.OcrFullTextConfigureInfoForUpdate;
const ProcessMediaByProcedureRequest = models_1.Models.ProcessMediaByProcedureRequest;
const MediaProcessTaskInput = models_1.Models.MediaProcessTaskInput;
const MediaProcessTaskAnimatedGraphicResult = models_1.Models.MediaProcessTaskAnimatedGraphicResult;
const ProcessMediaResponse = models_1.Models.ProcessMediaResponse;
const CreateWordSamplesResponse = models_1.Models.CreateWordSamplesResponse;
const ClassificationConfigureInfoForUpdate = models_1.Models.ClassificationConfigureInfoForUpdate;
const DeleteAdaptiveDynamicStreamingTemplateResponse = models_1.Models.DeleteAdaptiveDynamicStreamingTemplateResponse;
const CreateWordSamplesRequest = models_1.Models.CreateWordSamplesRequest;
const PoliticalAsrReviewTemplateInfoForUpdate = models_1.Models.PoliticalAsrReviewTemplateInfoForUpdate;
const WechatMiniProgramPublishTaskInput = models_1.Models.WechatMiniProgramPublishTaskInput;
const AiSampleFaceOperation = models_1.Models.AiSampleFaceOperation;
const SvgWatermarkInputForUpdate = models_1.Models.SvgWatermarkInputForUpdate;
const AiReviewTaskTerrorismOcrResult = models_1.Models.AiReviewTaskTerrorismOcrResult;
const AiRecognitionTaskOcrWordsResult = models_1.Models.AiRecognitionTaskOcrWordsResult;
const PornAsrReviewTemplateInfo = models_1.Models.PornAsrReviewTemplateInfo;
const AiRecognitionTaskSegmentResult = models_1.Models.AiRecognitionTaskSegmentResult;
const ProhibitedAsrReviewTemplateInfoForUpdate = models_1.Models.ProhibitedAsrReviewTemplateInfoForUpdate;
const ModifyAnimatedGraphicsTemplateResponse = models_1.Models.ModifyAnimatedGraphicsTemplateResponse;
const ModifyAIAnalysisTemplateResponse = models_1.Models.ModifyAIAnalysisTemplateResponse;
const LiveRealTimeClipRequest = models_1.Models.LiveRealTimeClipRequest;
const DeleteAdaptiveDynamicStreamingTemplateRequest = models_1.Models.DeleteAdaptiveDynamicStreamingTemplateRequest;
const AiRecognitionTaskOcrFullTextSegmentItem = models_1.Models.AiRecognitionTaskOcrFullTextSegmentItem;
const EditMediaOutputConfig = models_1.Models.EditMediaOutputConfig;
const AiReviewPornAsrTaskOutput = models_1.Models.AiReviewPornAsrTaskOutput;
const SimpleHlsClipResponse = models_1.Models.SimpleHlsClipResponse;
const DeleteAIAnalysisTemplateRequest = models_1.Models.DeleteAIAnalysisTemplateRequest;
const EditMediaRequest = models_1.Models.EditMediaRequest;
const ConcatFileInfo2017 = models_1.Models.ConcatFileInfo2017;
const MediaProcessTaskImageSpriteResult = models_1.Models.MediaProcessTaskImageSpriteResult;
const DescribeMediaInfosResponse = models_1.Models.DescribeMediaInfosResponse;
const DeleteProcedureTemplateResponse = models_1.Models.DeleteProcedureTemplateResponse;
const DescribeAdaptiveDynamicStreamingTemplatesResponse = models_1.Models.DescribeAdaptiveDynamicStreamingTemplatesResponse;
const MediaMiniProgramReviewInfo = models_1.Models.MediaMiniProgramReviewInfo;
const ForbidMediaDistributionResponse = models_1.Models.ForbidMediaDistributionResponse;
const DescribeAdaptiveDynamicStreamingTemplatesRequest = models_1.Models.DescribeAdaptiveDynamicStreamingTemplatesRequest;
const ImageWatermarkInput = models_1.Models.ImageWatermarkInput;
const ObjectConfigureInfo = models_1.Models.ObjectConfigureInfo;
const AsrFullTextConfigureInfoForUpdate = models_1.Models.AsrFullTextConfigureInfoForUpdate;
const AiRecognitionTaskHeadTailResult = models_1.Models.AiRecognitionTaskHeadTailResult;
const TranscodeTask2017 = models_1.Models.TranscodeTask2017;
const CreatePersonSampleResponse = models_1.Models.CreatePersonSampleResponse;
const CreateContentReviewTemplateResponse = models_1.Models.CreateContentReviewTemplateResponse;
const HighlightsConfigureInfo = models_1.Models.HighlightsConfigureInfo;
const DescribeProcedureTemplatesRequest = models_1.Models.DescribeProcedureTemplatesRequest;
const ProhibitedConfigureInfoForUpdate = models_1.Models.ProhibitedConfigureInfoForUpdate;
const TagConfigureInfoForUpdate = models_1.Models.TagConfigureInfoForUpdate;
const DeleteWordSamplesRequest = models_1.Models.DeleteWordSamplesRequest;
const EmptyTrackItem = models_1.Models.EmptyTrackItem;
const StickerTrackItem = models_1.Models.StickerTrackItem;
const VideoTemplateInfo = models_1.Models.VideoTemplateInfo;
const PoliticalOcrReviewTemplateInfo = models_1.Models.PoliticalOcrReviewTemplateInfo;
const PornOcrReviewTemplateInfoForUpdate = models_1.Models.PornOcrReviewTemplateInfoForUpdate;
const AiReviewTaskPornOcrResult = models_1.Models.AiReviewTaskPornOcrResult;
const ModifyContentReviewTemplateResponse = models_1.Models.ModifyContentReviewTemplateResponse;
const DescribeWatermarkTemplatesRequest = models_1.Models.DescribeWatermarkTemplatesRequest;
const CoverBySnapshotTaskInput = models_1.Models.CoverBySnapshotTaskInput;
const SegmentConfigureInfoForUpdate = models_1.Models.SegmentConfigureInfoForUpdate;
const UserDefineConfigureInfo = models_1.Models.UserDefineConfigureInfo;
const AiRecognitionTaskSegmentSegmentItem = models_1.Models.AiRecognitionTaskSegmentSegmentItem;
const AiReviewPornOcrTaskInput = models_1.Models.AiReviewPornOcrTaskInput;
const OcrWordsConfigureInfo = models_1.Models.OcrWordsConfigureInfo;
const CreateSuperPlayerConfigResponse = models_1.Models.CreateSuperPlayerConfigResponse;
const AiAnalysisTaskFrameTagOutput = models_1.Models.AiAnalysisTaskFrameTagOutput;
const ModifyAdaptiveDynamicStreamingTemplateRequest = models_1.Models.ModifyAdaptiveDynamicStreamingTemplateRequest;
const MediaAnimatedGraphicsItem = models_1.Models.MediaAnimatedGraphicsItem;
const DescribeCDNUsageDataResponse = models_1.Models.DescribeCDNUsageDataResponse;
const ModifyWordSampleRequest = models_1.Models.ModifyWordSampleRequest;
const AiRecognitionTaskFaceSegmentItem = models_1.Models.AiRecognitionTaskFaceSegmentItem;
const DeleteMediaResponse = models_1.Models.DeleteMediaResponse;
const ModifySnapshotByTimeOffsetTemplateResponse = models_1.Models.ModifySnapshotByTimeOffsetTemplateResponse;
const AiRecognitionTaskObjectResult = models_1.Models.AiRecognitionTaskObjectResult;
const AiAnalysisTaskTagResult = models_1.Models.AiAnalysisTaskTagResult;
const SearchMediaResponse = models_1.Models.SearchMediaResponse;
const AiAnalysisTaskTagOutput = models_1.Models.AiAnalysisTaskTagOutput;
const AiAnalysisTaskHighlightOutput = models_1.Models.AiAnalysisTaskHighlightOutput;
const ProcessMediaRequest = models_1.Models.ProcessMediaRequest;
const ModifyMediaInfoResponse = models_1.Models.ModifyMediaInfoResponse;
const AiRecognitionTaskOcrFullTextResult = models_1.Models.AiRecognitionTaskOcrFullTextResult;
const MediaProcessTaskSnapshotByTimeOffsetResult = models_1.Models.MediaProcessTaskSnapshotByTimeOffsetResult;
const AiRecognitionTaskAsrWordsResultOutput = models_1.Models.AiRecognitionTaskAsrWordsResultOutput;
const ModifyAdaptiveDynamicStreamingTemplateResponse = models_1.Models.ModifyAdaptiveDynamicStreamingTemplateResponse;
const MediaProcessTaskTranscodeResult = models_1.Models.MediaProcessTaskTranscodeResult;
const AiRecognitionTaskSegmentResultOutput = models_1.Models.AiRecognitionTaskSegmentResultOutput;
const ImageSpriteTaskInput = models_1.Models.ImageSpriteTaskInput;
const ObjectConfigureInfoForUpdate = models_1.Models.ObjectConfigureInfoForUpdate;
const DeleteMediaRequest = models_1.Models.DeleteMediaRequest;
const CreateSuperPlayerConfigRequest = models_1.Models.CreateSuperPlayerConfigRequest;
const ImageWatermarkTemplate = models_1.Models.ImageWatermarkTemplate;
const ModifySubAppIdInfoResponse = models_1.Models.ModifySubAppIdInfoResponse;
const AsrWordsConfigureInfo = models_1.Models.AsrWordsConfigureInfo;
const ModifySubAppIdStatusResponse = models_1.Models.ModifySubAppIdStatusResponse;
const SimpleHlsClipRequest = models_1.Models.SimpleHlsClipRequest;
const MediaDeleteItem = models_1.Models.MediaDeleteItem;
const AiSamplePerson = models_1.Models.AiSamplePerson;
const MediaAdaptiveDynamicStreamingInfo = models_1.Models.MediaAdaptiveDynamicStreamingInfo;
const DescribeSuperPlayerConfigsResponse = models_1.Models.DescribeSuperPlayerConfigsResponse;
const AsrWordsConfigureInfoForUpdate = models_1.Models.AsrWordsConfigureInfoForUpdate;
const DescribeStorageDataRequest = models_1.Models.DescribeStorageDataRequest;
const DeleteImageSpriteTemplateResponse = models_1.Models.DeleteImageSpriteTemplateResponse;
const DescribeContentReviewTemplatesResponse = models_1.Models.DescribeContentReviewTemplatesResponse;
const TEHDConfig = models_1.Models.TEHDConfig;
const AnimatedGraphicsTemplate = models_1.Models.AnimatedGraphicsTemplate;
const TerrorismOcrReviewTemplateInfoForUpdate = models_1.Models.TerrorismOcrReviewTemplateInfoForUpdate;
const UserDefineAsrTextReviewTemplateInfoForUpdate = models_1.Models.UserDefineAsrTextReviewTemplateInfoForUpdate;
const AiRecognitionTaskHeadTailResultOutput = models_1.Models.AiRecognitionTaskHeadTailResultOutput;
const ModifyImageSpriteTemplateResponse = models_1.Models.ModifyImageSpriteTemplateResponse;
const MediaProcessTaskCoverBySnapshotResult = models_1.Models.MediaProcessTaskCoverBySnapshotResult;
const CreateWatermarkTemplateRequest = models_1.Models.CreateWatermarkTemplateRequest;
const TerrorismConfigureInfoForUpdate = models_1.Models.TerrorismConfigureInfoForUpdate;
const WechatMiniProgramPublishTask = models_1.Models.WechatMiniProgramPublishTask;
const ComposeMediaTask = models_1.Models.ComposeMediaTask;
const HeadTailConfigureInfoForUpdate = models_1.Models.HeadTailConfigureInfoForUpdate;
const TranscodePlayInfo2017 = models_1.Models.TranscodePlayInfo2017;
const ComposeMediaTaskInput = models_1.Models.ComposeMediaTaskInput;
const AnimatedGraphicTaskInput = models_1.Models.AnimatedGraphicTaskInput;
const MosaicInput = models_1.Models.MosaicInput;
const AIAnalysisTemplateItem = models_1.Models.AIAnalysisTemplateItem;
const AiRecognitionTaskObjectResultItem = models_1.Models.AiRecognitionTaskObjectResultItem;
const MediaSnapshotByTimeOffsetInfo = models_1.Models.MediaSnapshotByTimeOffsetInfo;
const DescribeImageSpriteTemplatesRequest = models_1.Models.DescribeImageSpriteTemplatesRequest;
const MediaKeyFrameDescItem = models_1.Models.MediaKeyFrameDescItem;
const AiSampleTagOperation = models_1.Models.AiSampleTagOperation;
const PlayerConfig = models_1.Models.PlayerConfig;
const ConfirmEventsRequest = models_1.Models.ConfirmEventsRequest;
const CreateAIRecognitionTemplateResponse = models_1.Models.CreateAIRecognitionTemplateResponse;
const ModifySubAppIdStatusRequest = models_1.Models.ModifySubAppIdStatusRequest;
const CreateSubAppIdResponse = models_1.Models.CreateSubAppIdResponse;
const CreateWatermarkTemplateResponse = models_1.Models.CreateWatermarkTemplateResponse;
const AiReviewTerrorismTaskOutput = models_1.Models.AiReviewTerrorismTaskOutput;
const ResetProcedureTemplateResponse = models_1.Models.ResetProcedureTemplateResponse;
const ProhibitedConfigureInfo = models_1.Models.ProhibitedConfigureInfo;
const DrmStreamingsInfo = models_1.Models.DrmStreamingsInfo;
const AiReviewTerrorismOcrTaskOutput = models_1.Models.AiReviewTerrorismOcrTaskOutput;
const AiAnalysisResult = models_1.Models.AiAnalysisResult;
const DescribeAIAnalysisTemplatesRequest = models_1.Models.DescribeAIAnalysisTemplatesRequest;
const MediaTranscodeInfo = models_1.Models.MediaTranscodeInfo;
const ResolutionNameInfo = models_1.Models.ResolutionNameInfo;
const AiRecognitionTaskOcrWordsResultItem = models_1.Models.AiRecognitionTaskOcrWordsResultItem;
const ParseStreamingManifestRequest = models_1.Models.ParseStreamingManifestRequest;
const DeleteSampleSnapshotTemplateResponse = models_1.Models.DeleteSampleSnapshotTemplateResponse;
const AiAnalysisTaskTagInput = models_1.Models.AiAnalysisTaskTagInput;
const MediaTrackItem = models_1.Models.MediaTrackItem;
const DescribeStorageDetailsResponse = models_1.Models.DescribeStorageDetailsResponse;
const PullEventsResponse = models_1.Models.PullEventsResponse;
const AiRecognitionTaskObjectResultInput = models_1.Models.AiRecognitionTaskObjectResultInput;
const OutputVideoStream = models_1.Models.OutputVideoStream;
const ProcedureTemplate = models_1.Models.ProcedureTemplate;
const AiReviewTaskTerrorismResult = models_1.Models.AiReviewTaskTerrorismResult;
const ProcessMediaByUrlResponse = models_1.Models.ProcessMediaByUrlResponse;
const MediaContentReviewAsrTextSegmentItem = models_1.Models.MediaContentReviewAsrTextSegmentItem;
const MediaContentReviewPoliticalSegmentItem = models_1.Models.MediaContentReviewPoliticalSegmentItem;
const DeletePersonSampleResponse = models_1.Models.DeletePersonSampleResponse;
const CreateSnapshotByTimeOffsetTemplateResponse = models_1.Models.CreateSnapshotByTimeOffsetTemplateResponse;
const ModifyContentReviewTemplateRequest = models_1.Models.ModifyContentReviewTemplateRequest;
const ImageWatermarkInputForUpdate = models_1.Models.ImageWatermarkInputForUpdate;
const AiContentReviewTaskInput = models_1.Models.AiContentReviewTaskInput;
const CreateAdaptiveDynamicStreamingTemplateResponse = models_1.Models.CreateAdaptiveDynamicStreamingTemplateResponse;
const ClassificationConfigureInfo = models_1.Models.ClassificationConfigureInfo;
const AiAnalysisTaskInput = models_1.Models.AiAnalysisTaskInput;
const ImageSpriteTemplate = models_1.Models.ImageSpriteTemplate;
const AiRecognitionTaskOcrFullTextSegmentTextItem = models_1.Models.AiRecognitionTaskOcrFullTextSegmentTextItem;
const SnapshotByTimeOffsetTaskInput = models_1.Models.SnapshotByTimeOffsetTaskInput;
const SegmentConfigureInfo = models_1.Models.SegmentConfigureInfo;
const TaskStatDataItem = models_1.Models.TaskStatDataItem;
const ParseStreamingManifestResponse = models_1.Models.ParseStreamingManifestResponse;
const AiReviewPornOcrTaskOutput = models_1.Models.AiReviewPornOcrTaskOutput;
const ApplyUploadRequest = models_1.Models.ApplyUploadRequest;
const CreateSampleSnapshotTemplateResponse = models_1.Models.CreateSampleSnapshotTemplateResponse;
const AiAnalysisTaskHighlightInput = models_1.Models.AiAnalysisTaskHighlightInput;
const DeleteContentReviewTemplateResponse = models_1.Models.DeleteContentReviewTemplateResponse;
const MediaBasicInfo = models_1.Models.MediaBasicInfo;
const AiReviewPoliticalAsrTaskInput = models_1.Models.AiReviewPoliticalAsrTaskInput;
const PullUploadRequest = models_1.Models.PullUploadRequest;
const SortBy = models_1.Models.SortBy;
const ClipTask2017 = models_1.Models.ClipTask2017;
const TranscodeTemplate = models_1.Models.TranscodeTemplate;
const DescribeCDNUsageDataRequest = models_1.Models.DescribeCDNUsageDataRequest;
const PornOcrReviewTemplateInfo = models_1.Models.PornOcrReviewTemplateInfo;
const AiReviewTaskPoliticalAsrResult = models_1.Models.AiReviewTaskPoliticalAsrResult;
const AiRecognitionTaskAsrWordsSegmentItem = models_1.Models.AiRecognitionTaskAsrWordsSegmentItem;
const DescribeReviewDetailsRequest = models_1.Models.DescribeReviewDetailsRequest;
const PornConfigureInfoForUpdate = models_1.Models.PornConfigureInfoForUpdate;
const AiReviewProhibitedAsrTaskInput = models_1.Models.AiReviewProhibitedAsrTaskInput;
const MediaContentReviewSegmentItem = models_1.Models.MediaContentReviewSegmentItem;
const TerrorismOcrReviewTemplateInfo = models_1.Models.TerrorismOcrReviewTemplateInfo;
const AiReviewTaskPornResult = models_1.Models.AiReviewTaskPornResult;
const AiRecognitionTaskObjectResultOutput = models_1.Models.AiRecognitionTaskObjectResultOutput;
const AiReviewProhibitedAsrTaskOutput = models_1.Models.AiReviewProhibitedAsrTaskOutput;
const CreateClassResponse = models_1.Models.CreateClassResponse;
const DeleteSuperPlayerConfigResponse = models_1.Models.DeleteSuperPlayerConfigResponse;
const DescribeSampleSnapshotTemplatesRequest = models_1.Models.DescribeSampleSnapshotTemplatesRequest;
const CoverConfigureInfoForUpdate = models_1.Models.CoverConfigureInfoForUpdate;
const AiAnalysisTaskClassificationResult = models_1.Models.AiAnalysisTaskClassificationResult;
const PoliticalImgReviewTemplateInfoForUpdate = models_1.Models.PoliticalImgReviewTemplateInfoForUpdate;
const UserDefineOcrTextReviewTemplateInfo = models_1.Models.UserDefineOcrTextReviewTemplateInfo;
const AdaptiveStreamTemplate = models_1.Models.AdaptiveStreamTemplate;
const TranscodeTaskInput = models_1.Models.TranscodeTaskInput;
const ModifyAIRecognitionTemplateRequest = models_1.Models.ModifyAIRecognitionTemplateRequest;
const WechatPublishTask = models_1.Models.WechatPublishTask;
const ClipFileInfo2017 = models_1.Models.ClipFileInfo2017;
const StatDataItem = models_1.Models.StatDataItem;
const MediaSourceData = models_1.Models.MediaSourceData;
const ProhibitedAsrReviewTemplateInfo = models_1.Models.ProhibitedAsrReviewTemplateInfo;
const PushUrlCacheRequest = models_1.Models.PushUrlCacheRequest;
const CreateAIAnalysisTemplateResponse = models_1.Models.CreateAIAnalysisTemplateResponse;
const HeadTailConfigureInfo = models_1.Models.HeadTailConfigureInfo;
const EventContent = models_1.Models.EventContent;
const HighlightsConfigureInfoForUpdate = models_1.Models.HighlightsConfigureInfoForUpdate;
const UserDefineConfigureInfoForUpdate = models_1.Models.UserDefineConfigureInfoForUpdate;
const AiReviewPoliticalAsrTaskOutput = models_1.Models.AiReviewPoliticalAsrTaskOutput;
const OutputAudioStream = models_1.Models.OutputAudioStream;
const ModifyClassRequest = models_1.Models.ModifyClassRequest;
const SpecificationDataItem = models_1.Models.SpecificationDataItem;
const TEHDConfigForUpdate = models_1.Models.TEHDConfigForUpdate;
const ComposeMediaTaskOutput = models_1.Models.ComposeMediaTaskOutput;
const DescribeMediaInfosRequest = models_1.Models.DescribeMediaInfosRequest;
const ModifyPersonSampleRequest = models_1.Models.ModifyPersonSampleRequest;
const AsrFullTextConfigureInfo = models_1.Models.AsrFullTextConfigureInfo;
const CreateAIRecognitionTemplateRequest = models_1.Models.CreateAIRecognitionTemplateRequest;
const DescribeTaskDetailRequest = models_1.Models.DescribeTaskDetailRequest;
const MediaAiAnalysisClassificationItem = models_1.Models.MediaAiAnalysisClassificationItem;
const AiAnalysisTaskFrameTagResult = models_1.Models.AiAnalysisTaskFrameTagResult;
const AiReviewPornTaskOutput = models_1.Models.AiReviewPornTaskOutput;
const AiRecognitionTaskAsrFullTextResult = models_1.Models.AiRecognitionTaskAsrFullTextResult;
const ModifyAIRecognitionTemplateResponse = models_1.Models.ModifyAIRecognitionTemplateResponse;
const PoliticalImgReviewTemplateInfo = models_1.Models.PoliticalImgReviewTemplateInfo;
const PoliticalConfigureInfo = models_1.Models.PoliticalConfigureInfo;
const ModifyAnimatedGraphicsTemplateRequest = models_1.Models.ModifyAnimatedGraphicsTemplateRequest;
const AiRecognitionTaskOcrWordsSegmentItem = models_1.Models.AiRecognitionTaskOcrWordsSegmentItem;
const MediaProcessTaskResult = models_1.Models.MediaProcessTaskResult;
const DeleteWordSamplesResponse = models_1.Models.DeleteWordSamplesResponse;
const DeleteProcedureTemplateRequest = models_1.Models.DeleteProcedureTemplateRequest;
const WatermarkInput = models_1.Models.WatermarkInput;
const AiSampleWordInfo = models_1.Models.AiSampleWordInfo;
const AdaptiveDynamicStreamingInfoItem = models_1.Models.AdaptiveDynamicStreamingInfoItem;
const ProhibitedOcrReviewTemplateInfo = models_1.Models.ProhibitedOcrReviewTemplateInfo;
const DeleteClassResponse = models_1.Models.DeleteClassResponse;
const ModifyTranscodeTemplateResponse = models_1.Models.ModifyTranscodeTemplateResponse;
const MediaMetaData = models_1.Models.MediaMetaData;
const MediaSampleSnapshotInfo = models_1.Models.MediaSampleSnapshotInfo;
const DescribeSubAppIdsResponse = models_1.Models.DescribeSubAppIdsResponse;
const MediaInfo = models_1.Models.MediaInfo;
const VideoTemplateInfoForUpdate = models_1.Models.VideoTemplateInfoForUpdate;
const CreateContentReviewTemplateRequest = models_1.Models.CreateContentReviewTemplateRequest;
const DescribeContentReviewTemplatesRequest = models_1.Models.DescribeContentReviewTemplatesRequest;
const AdaptiveDynamicStreamingTaskInput = models_1.Models.AdaptiveDynamicStreamingTaskInput;
const DescribeImageSpriteTemplatesResponse = models_1.Models.DescribeImageSpriteTemplatesResponse;
const AiAnalysisTaskFrameTagInput = models_1.Models.AiAnalysisTaskFrameTagInput;
const MediaAiAnalysisFrameTagSegmentItem = models_1.Models.MediaAiAnalysisFrameTagSegmentItem;
const AiRecognitionTaskAsrWordsResultItem = models_1.Models.AiRecognitionTaskAsrWordsResultItem;
const MediaAiAnalysisTagItem = models_1.Models.MediaAiAnalysisTagItem;
const DescribeTaskDetailResponse = models_1.Models.DescribeTaskDetailResponse;
const MediaKeyFrameDescInfo = models_1.Models.MediaKeyFrameDescInfo;
const DeleteImageSpriteTemplateRequest = models_1.Models.DeleteImageSpriteTemplateRequest;
const CreateClassRequest = models_1.Models.CreateClassRequest;
const AiSampleFailFaceInfo = models_1.Models.AiSampleFailFaceInfo;
const UserDefineFaceReviewTemplateInfoForUpdate = models_1.Models.UserDefineFaceReviewTemplateInfoForUpdate;
const CreateProcedureTemplateResponse = models_1.Models.CreateProcedureTemplateResponse;
const DescribeMediaProcessUsageDataResponse = models_1.Models.DescribeMediaProcessUsageDataResponse;
const DescribeSuperPlayerConfigsRequest = models_1.Models.DescribeSuperPlayerConfigsRequest;
const AiRecognitionTaskOcrFullTextResultInput = models_1.Models.AiRecognitionTaskOcrFullTextResultInput;
const AiRecognitionTaskSegmentResultInput = models_1.Models.AiRecognitionTaskSegmentResultInput;
const DescribeTasksResponse = models_1.Models.DescribeTasksResponse;
const DescribeSubAppIdsRequest = models_1.Models.DescribeSubAppIdsRequest;
const AiRecognitionTaskFaceResultInput = models_1.Models.AiRecognitionTaskFaceResultInput;
const AiReviewPoliticalTaskOutput = models_1.Models.AiReviewPoliticalTaskOutput;
const AiReviewTaskPoliticalResult = models_1.Models.AiReviewTaskPoliticalResult;
const ModifySnapshotByTimeOffsetTemplateRequest = models_1.Models.ModifySnapshotByTimeOffsetTemplateRequest;
const ProcedureTask = models_1.Models.ProcedureTask;
const ModifySuperPlayerConfigRequest = models_1.Models.ModifySuperPlayerConfigRequest;
const TaskSimpleInfo = models_1.Models.TaskSimpleInfo;
const DescribeSnapshotByTimeOffsetTemplatesResponse = models_1.Models.DescribeSnapshotByTimeOffsetTemplatesResponse;
const MediaVideoStreamItem = models_1.Models.MediaVideoStreamItem;
const SnapshotByTimeOffsetTemplate = models_1.Models.SnapshotByTimeOffsetTemplate;
const DeleteSnapshotByTimeOffsetTemplateResponse = models_1.Models.DeleteSnapshotByTimeOffsetTemplateResponse;
const ProhibitedOcrReviewTemplateInfoForUpdate = models_1.Models.ProhibitedOcrReviewTemplateInfoForUpdate;
const DescribeTasksRequest = models_1.Models.DescribeTasksRequest;
const DescribeReviewDetailsResponse = models_1.Models.DescribeReviewDetailsResponse;
const CreateTranscodeTemplateResponse = models_1.Models.CreateTranscodeTemplateResponse;
const AiRecognitionTaskAsrWordsResultInput = models_1.Models.AiRecognitionTaskAsrWordsResultInput;
const SnapshotByTimeOffset2017 = models_1.Models.SnapshotByTimeOffset2017;
const CreateAIAnalysisTemplateRequest = models_1.Models.CreateAIAnalysisTemplateRequest;
const AiReviewTerrorismTaskInput = models_1.Models.AiReviewTerrorismTaskInput;
const MediaAudioStreamItem = models_1.Models.MediaAudioStreamItem;
const MediaImageSpriteInfo = models_1.Models.MediaImageSpriteInfo;
const SubAppIdInfo = models_1.Models.SubAppIdInfo;
const DescribeAllClassResponse = models_1.Models.DescribeAllClassResponse;
const ModifyImageSpriteTemplateRequest = models_1.Models.ModifyImageSpriteTemplateRequest;
const AiReviewProhibitedOcrTaskInput = models_1.Models.AiReviewProhibitedOcrTaskInput;
const DeleteWatermarkTemplateRequest = models_1.Models.DeleteWatermarkTemplateRequest;
const EditMediaStreamInfo = models_1.Models.EditMediaStreamInfo;
const DescribeWordSamplesRequest = models_1.Models.DescribeWordSamplesRequest;
const LiveRealTimeClipResponse = models_1.Models.LiveRealTimeClipResponse;
const ModifyAIAnalysisTemplateRequest = models_1.Models.ModifyAIAnalysisTemplateRequest;
const CommitUploadResponse = models_1.Models.CommitUploadResponse;
const DescribeSampleSnapshotTemplatesResponse = models_1.Models.DescribeSampleSnapshotTemplatesResponse;
const ModifyWordSampleResponse = models_1.Models.ModifyWordSampleResponse;
const AiContentReviewResult = models_1.Models.AiContentReviewResult;
const TerrorismImgReviewTemplateInfo = models_1.Models.TerrorismImgReviewTemplateInfo;
const DrmStreamingsInfoForUpdate = models_1.Models.DrmStreamingsInfoForUpdate;
const DeleteClassRequest = models_1.Models.DeleteClassRequest;
const DescribeTranscodeTemplatesRequest = models_1.Models.DescribeTranscodeTemplatesRequest;
const PoliticalConfigureInfoForUpdate = models_1.Models.PoliticalConfigureInfoForUpdate;
const DescribeWatermarkTemplatesResponse = models_1.Models.DescribeWatermarkTemplatesResponse;
const WeChatMiniProgramPublishResponse = models_1.Models.WeChatMiniProgramPublishResponse;
const ImageTransform = models_1.Models.ImageTransform;
const CreateAnimatedGraphicsTemplateRequest = models_1.Models.CreateAnimatedGraphicsTemplateRequest;
const FrameTagConfigureInfo = models_1.Models.FrameTagConfigureInfo;
const ExecuteFunctionRequest = models_1.Models.ExecuteFunctionRequest;
const ConfirmEventsResponse = models_1.Models.ConfirmEventsResponse;
const ModifyPersonSampleResponse = models_1.Models.ModifyPersonSampleResponse;
const VideoTrackItem = models_1.Models.VideoTrackItem;
const DeleteTranscodeTemplateResponse = models_1.Models.DeleteTranscodeTemplateResponse;
const MediaTranscodeItem = models_1.Models.MediaTranscodeItem;
const DescribePersonSamplesResponse = models_1.Models.DescribePersonSamplesResponse;
const PornConfigureInfo = models_1.Models.PornConfigureInfo;
const AiRecognitionTaskObjectSeqmentItem = models_1.Models.AiRecognitionTaskObjectSeqmentItem;
const PullEventsRequest = models_1.Models.PullEventsRequest;
const FaceConfigureInfoForUpdate = models_1.Models.FaceConfigureInfoForUpdate;
const DescribeAIAnalysisTemplatesResponse = models_1.Models.DescribeAIAnalysisTemplatesResponse;
const CreateSnapshotByTimeOffsetTemplateRequest = models_1.Models.CreateSnapshotByTimeOffsetTemplateRequest;
const AiRecognitionTaskAsrWordsResult = models_1.Models.AiRecognitionTaskAsrWordsResult;
const CreateSubAppIdRequest = models_1.Models.CreateSubAppIdRequest;
const DescribeProcedureTemplatesResponse = models_1.Models.DescribeProcedureTemplatesResponse;
const SearchMediaRequest = models_1.Models.SearchMediaRequest;
const CreateSampleSnapshotTemplateRequest = models_1.Models.CreateSampleSnapshotTemplateRequest;
const MediaContentReviewOcrTextSegmentItem = models_1.Models.MediaContentReviewOcrTextSegmentItem;
const AudioVolumeParam = models_1.Models.AudioVolumeParam;
const AiReviewTaskPornAsrResult = models_1.Models.AiReviewTaskPornAsrResult;
const ModifyClassResponse = models_1.Models.ModifyClassResponse;
const EditMediaFileInfo = models_1.Models.EditMediaFileInfo;
const ProcessMediaByProcedureResponse = models_1.Models.ProcessMediaByProcedureResponse;
const PullUploadResponse = models_1.Models.PullUploadResponse;
const FaceConfigureInfo = models_1.Models.FaceConfigureInfo;
const AiRecognitionTaskFaceResultOutput = models_1.Models.AiRecognitionTaskFaceResultOutput;
const PornImgReviewTemplateInfoForUpdate = models_1.Models.PornImgReviewTemplateInfoForUpdate;
const EditMediaTask = models_1.Models.EditMediaTask;
const PornImgReviewTemplateInfo = models_1.Models.PornImgReviewTemplateInfo;
const AiReviewPoliticalOcrTaskOutput = models_1.Models.AiReviewPoliticalOcrTaskOutput;
const OcrFullTextConfigureInfo = models_1.Models.OcrFullTextConfigureInfo;
const CommitUploadRequest = models_1.Models.CommitUploadRequest;
const WatermarkCycleConfigForUpdate = models_1.Models.WatermarkCycleConfigForUpdate;
const SnapshotByTimeOffsetTask2017 = models_1.Models.SnapshotByTimeOffsetTask2017;
const MediaClassInfo = models_1.Models.MediaClassInfo;
const DescribeTranscodeTemplatesResponse = models_1.Models.DescribeTranscodeTemplatesResponse;
const DeleteAnimatedGraphicsTemplateRequest = models_1.Models.DeleteAnimatedGraphicsTemplateRequest;
const DeleteSnapshotByTimeOffsetTemplateRequest = models_1.Models.DeleteSnapshotByTimeOffsetTemplateRequest;
const DescribeAnimatedGraphicsTemplatesResponse = models_1.Models.DescribeAnimatedGraphicsTemplatesResponse;
const MediaAiAnalysisFrameTagItem = models_1.Models.MediaAiAnalysisFrameTagItem;
const SampleSnapshotTaskInput = models_1.Models.SampleSnapshotTaskInput;
const TerrorismConfigureInfo = models_1.Models.TerrorismConfigureInfo;
const PoliticalAsrReviewTemplateInfo = models_1.Models.PoliticalAsrReviewTemplateInfo;
const CreateAnimatedGraphicsTemplateResponse = models_1.Models.CreateAnimatedGraphicsTemplateResponse;
const SampleSnapshotTemplate = models_1.Models.SampleSnapshotTemplate;
const MediaImageSpriteItem = models_1.Models.MediaImageSpriteItem;
const DescribePersonSamplesRequest = models_1.Models.DescribePersonSamplesRequest;
const AiRecognitionTaskFaceResultItem = models_1.Models.AiRecognitionTaskFaceResultItem;
const AiAnalysisTaskCoverInput = models_1.Models.AiAnalysisTaskCoverInput;
const DescribeStorageDetailsRequest = models_1.Models.DescribeStorageDetailsRequest;
const MediaTrack = models_1.Models.MediaTrack;
const MediaOutputInfo = models_1.Models.MediaOutputInfo;
const EditMediaTaskOutput = models_1.Models.EditMediaTaskOutput;
const HighlightSegmentItem = models_1.Models.HighlightSegmentItem;
const DeleteWatermarkTemplateResponse = models_1.Models.DeleteWatermarkTemplateResponse;
const ComposeMediaOutput = models_1.Models.ComposeMediaOutput;
const PullUploadTask = models_1.Models.PullUploadTask;
const FrameTagConfigureInfoForUpdate = models_1.Models.FrameTagConfigureInfoForUpdate;
const CreateImageSpriteTemplateResponse = models_1.Models.CreateImageSpriteTemplateResponse;
const DescribeAIRecognitionTemplatesRequest = models_1.Models.DescribeAIRecognitionTemplatesRequest;
const ModifyWatermarkTemplateResponse = models_1.Models.ModifyWatermarkTemplateResponse;
const AiRecognitionResult = models_1.Models.AiRecognitionResult;
/**
 * vod client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("vod.tencentcloudapi.com", "2018-07-17", credential, region, profile);
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
     * 对视频进行编辑（剪辑、拼接等），生成一个新的点播视频。编辑的功能包括：

1. 对点播中的一个文件进行剪辑，生成一个新的视频；
2. 对点播中的多个文件进行拼接，生成一个新的视频；
3. 对点播中的多个文件进行剪辑，然后再拼接，生成一个新的视频；
4. 对点播中的一个流，直接生成一个新的视频；
5. 对点播中的一个流进行剪辑，生成一个新的视频；
6. 对点播中的多个流进行拼接，生成一个新的视频；
7. 对点播中的多个流进行剪辑，然后拼接，生成一个新的视频。

对于生成的新视频，还可以指定生成后的视频是否要执行任务流。

>当对直播流做剪辑、拼接等操作时，请确保流结束后再操作。否则生成的视频可能不完整。

如使用事件通知，事件通知的类型为 [视频编辑完成](https://cloud.tencent.com/document/product/266/33794)。
     * @param {EditMediaRequest} req
     * @param {function(string, EditMediaResponse):void} cb
     * @public
     */
    EditMedia(req, cb) {
        const resp = new EditMediaResponse();
        this.request("EditMedia", req, resp, cb);
    }
    /**
     * * 我们强烈建议您使用云点播提供的 [服务端上传 SDK](/document/product/266/9759#1.-.E5.8F.91.E8.B5.B7.E4.B8.8A.E4.BC.A0) 来上传文件。直接调用 API 进行上传的难度和工作量都显著大于使用 SDK。
* 该接口用于申请媒体文件（和封面文件）的上传，获取文件上传到云点播的元信息（包括上传路径、上传签名等），用于后续上传接口。
* 上传流程请参考 [服务端上传综述](/document/product/266/9759)。
     * @param {ApplyUploadRequest} req
     * @param {function(string, ApplyUploadResponse):void} cb
     * @public
     */
    ApplyUpload(req, cb) {
        const resp = new ApplyUploadResponse();
        this.request("ApplyUpload", req, resp, cb);
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
     * 根据视频内容分析模板唯一标识，获取视频内容分析模板详情列表。返回结果包含符合条件的所有用户自定义视频内容分析模板及[系统预置视频内容分析模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.88.86.E6.9E.90.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeAIAnalysisTemplatesRequest} req
     * @param {function(string, DescribeAIAnalysisTemplatesResponse):void} cb
     * @public
     */
    DescribeAIAnalysisTemplates(req, cb) {
        const resp = new DescribeAIAnalysisTemplatesResponse();
        this.request("DescribeAIAnalysisTemplates", req, resp, cb);
    }
    /**
     * * 该接口用于业务服务器以 [可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83) 的方式获取事件通知；
* 接口为长轮询模式，即：如果服务端存在未消费事件，则立即返回给请求方；如果服务端没有未消费事件，则后台会将请求挂起，直到有新的事件产生为止；
* 请求最多挂起5秒，建议请求方将超时时间设置为10秒；
* 若该接口有事件返回，调用方必须在<font color="red">30秒</font>内调用 [确认事件通知](https://cloud.tencent.com/document/product/266/33434) 接口，确认事件通知已经处理，否则该事件通知在<font color="red">30秒</font>后会再次被拉取到。
     * @param {PullEventsRequest} req
     * @param {function(string, PullEventsResponse):void} cb
     * @public
     */
    PullEvents(req, cb) {
        const resp = new PullEventsResponse();
        this.request("PullEvents", req, resp, cb);
    }
    /**
     * 使用任务流模板，对点播中的视频发起处理任务。
有两种方式创建任务流模板：
1. 在控制台上创建和修改任务流模板；
2. 通过任务流模板接口创建任务流模板。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     * @param {ProcessMediaByProcedureRequest} req
     * @param {function(string, ProcessMediaByProcedureResponse):void} cb
     * @public
     */
    ProcessMediaByProcedure(req, cb) {
        const resp = new ProcessMediaByProcedureResponse();
        this.request("ProcessMediaByProcedure", req, resp, cb);
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
     * 该接口返回查询时间范围内每天使用的视频内容审核时长数据，单位： 秒。

1. 可以查询最近365天内的视频内容审核时长统计数据。
2. 查询时间跨度不超过90天。
     * @param {DescribeReviewDetailsRequest} req
     * @param {function(string, DescribeReviewDetailsResponse):void} cb
     * @public
     */
    DescribeReviewDetails(req, cb) {
        const resp = new DescribeReviewDetailsResponse();
        this.request("DescribeReviewDetails", req, resp, cb);
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
     * 查询存储空间使用情况和文件数量。
     * @param {DescribeStorageDataRequest} req
     * @param {function(string, DescribeStorageDataResponse):void} cb
     * @public
     */
    DescribeStorageData(req, cb) {
        const resp = new DescribeStorageDataResponse();
        this.request("DescribeStorageData", req, resp, cb);
    }
    /**
     * 修改用户自定义视频内容分析模板。

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
     * 删除用户自定义的任务流模板。
     * @param {DeleteProcedureTemplateRequest} req
     * @param {function(string, DeleteProcedureTemplateResponse):void} cb
     * @public
     */
    DeleteProcedureTemplate(req, cb) {
        const resp = new DeleteProcedureTemplateResponse();
        this.request("DeleteProcedureTemplate", req, resp, cb);
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
     * 修改媒体分类属性。
     * @param {ModifyClassRequest} req
     * @param {function(string, ModifyClassResponse):void} cb
     * @public
     */
    ModifyClass(req, cb) {
        const resp = new ModifyClassResponse();
        this.request("ModifyClass", req, resp, cb);
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
     * 重新设置用户自定义任务流模板的内容。
     * @param {ResetProcedureTemplateRequest} req
     * @param {function(string, ResetProcedureTemplateResponse):void} cb
     * @public
     */
    ResetProcedureTemplate(req, cb) {
        const resp = new ResetProcedureTemplateResponse();
        this.request("ResetProcedureTemplate", req, resp, cb);
    }
    /**
     * 该接口用于查询点播 CDN 的流量、带宽等统计数据。
   1. 可以查询最近365天内的 CDN 用量数据。
   2.  查询时间跨度不超过90天。
   3. 可以指定用量数据的时间粒度，支持5分钟、1小时、1天的时间粒度。
   4.  流量为查询时间粒度内的总流量，带宽为查询时间粒度内的峰值带宽。
     * @param {DescribeCDNUsageDataRequest} req
     * @param {function(string, DescribeCDNUsageDataResponse):void} cb
     * @public
     */
    DescribeCDNUsageData(req, cb) {
        const resp = new DescribeCDNUsageDataResponse();
        this.request("DescribeCDNUsageData", req, resp, cb);
    }
    /**
     * 创建用户自定义转码模板，数量上限：100。
     * @param {CreateTranscodeTemplateRequest} req
     * @param {function(string, CreateTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateTranscodeTemplate(req, cb) {
        const resp = new CreateTranscodeTemplateResponse();
        this.request("CreateTranscodeTemplate", req, resp, cb);
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
     * * 仅当待删分类无子分类且无媒体关联情况下，可删除分类；
* 否则，请先执行[删除媒体](/document/product/266/31764)及子分类，再删除该分类；
     * @param {DeleteClassRequest} req
     * @param {function(string, DeleteClassResponse):void} cb
     * @public
     */
    DeleteClass(req, cb) {
        const resp = new DeleteClassResponse();
        this.request("DeleteClass", req, resp, cb);
    }
    /**
     * 本接口仅用于定制开发的特殊场景，除非云点播客服人员主动告知您需要使用本接口，其它情况请勿调用。
     * @param {ExecuteFunctionRequest} req
     * @param {function(string, ExecuteFunctionResponse):void} cb
     * @public
     */
    ExecuteFunction(req, cb) {
        const resp = new ExecuteFunctionResponse();
        this.request("ExecuteFunction", req, resp, cb);
    }
    /**
     * 该接口返回查询时间范围内每天使用的视频处理用量信息。
   1. 可以查询最近365天内的视频处理统计数据。
   2. 查询时间跨度不超过90天。
     * @param {DescribeMediaProcessUsageDataRequest} req
     * @param {function(string, DescribeMediaProcessUsageDataResponse):void} cb
     * @public
     */
    DescribeMediaProcessUsageData(req, cb) {
        const resp = new DescribeMediaProcessUsageDataResponse();
        this.request("DescribeMediaProcessUsageData", req, resp, cb);
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
     * 该接口用于制作媒体文件，可以

1. 对一个媒体文件进行剪辑，生成一个新的媒体文件；
2. 对多个媒体文件进行裁剪拼接，生成一个新的媒体文件；
3. 对多个媒体文件的媒体流进行裁剪拼接，生成一个新的媒体文件。

如使用事件通知，事件通知的类型为 [视频合成完成](https://cloud.tencent.com/document/product/266/43000)。
     * @param {ComposeMediaRequest} req
     * @param {function(string, ComposeMediaResponse):void} cb
     * @public
     */
    ComposeMedia(req, cb) {
        const resp = new ComposeMediaResponse();
        this.request("ComposeMedia", req, resp, cb);
    }
    /**
     * 创建用户自定义视频内容审核模板，数量上限：50。
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
     * 删除用户自定义视频内容分析模板。

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
     * 1. 该接口可以获取多个媒体文件的多种信息，包括：
    1. 基础信息（basicInfo）：包括媒体名称、分类、播放地址、封面图片等。
    2. 元信息（metaData）：包括大小、时长、视频流信息、音频流信息等。
    3. 转码结果信息（transcodeInfo）：包括该媒体转码生成的各种规格的媒体地址、视频流参数、音频流参数等。
    4. 转动图结果信息（animatedGraphicsInfo）：对视频转动图（如 gif）后的动图信息。
    5. 采样截图信息（sampleSnapshotInfo）：对视频采样截图后的截图信息。
    6. 雪碧图信息（imageSpriteInfo）：对视频截取雪碧图后的雪碧图信息。
    7. 指定时间点截图信息（snapshotByTimeOffsetInfo）：对视频依照指定时间点截图后，的截图信息。
    8. 视频打点信息（keyFrameDescInfo）：对视频设置的打点信息。
    9. 转自适应码流信息（adaptiveDynamicStreamingInfo）：包括规格、加密类型、打包格式等相关信息。
2. 可以指定回包只返回部分信息。
     * @param {DescribeMediaInfosRequest} req
     * @param {function(string, DescribeMediaInfosResponse):void} cb
     * @public
     */
    DescribeMediaInfos(req, cb) {
        const resp = new DescribeMediaInfosResponse();
        this.request("DescribeMediaInfos", req, resp, cb);
    }
    /**
     * 直播即时剪辑，是指在直播过程中（即直播尚未结束时），客户可以在过往直播内容中选择一段，实时生成一个新的视频（HLS 格式），开发者可以将其立即分享出去，或者长久保存起来。

腾讯云点播支持两种即时剪辑模式：
- 剪辑固化：将剪辑出来的视频保存成独立的视频，拥有独立 FileId；适用于将精彩片段**长久保存**的场景；
- 剪辑不固化：剪辑得到的视频附属于直播录制文件，没有独立 FileId；适用于将精彩片段**临时分享**的场景。

注意：
- 使用直播即时剪辑功能的前提是：目标直播流开启了[时移回看](https://cloud.tencent.com/document/product/267/32742)功能。
- 直播即时剪辑是基于直播录制生成的 m3u8 文件进行的，故而其最小剪辑精度为一个 ts 切片，无法实现秒级或者更为精确的剪辑精度。


### 剪辑固化
所谓剪辑固化，是指将剪辑出来的视频是保存成一个独立的视频（拥有独立的 FileId）。其生命周期不受原始直播录制视频影响（即使原始录制视频被删除，剪辑结果也不会受到任何影响）；也可以对其进行转码、微信发布等二次处理。

举例如下：一场完整的足球比赛，直播录制出来的原始视频可能长达 2 个小时，客户出于节省成本的目的可以对这个视频存储 2 个月，但对于直播即时剪辑的「精彩时刻」视频却可以指定存储更长时间，同时可以单独对「精彩时刻」视频进行转码、微信发布等额外的点播操作，这时候可以选择直播即时剪辑并且固化的方案。

剪辑固化的优势在于其生命周期与原始录制视频相互独立，可以独立管理、长久保存。

### 剪辑不固化
所谓剪辑不固化，是指剪辑所得到的结果（m3u8 文件）与直播录制视频共享相同的 ts 分片，新生成的视频不是一个独立完整的视频（没有独立 FileId，只有播放 URL），其有效期与直播录制的完整视频有效期是一致的。一旦直播录制出来的视频被删除，也会导致该片段无法播放。

剪辑不固化，由于其剪辑结果不是一个独立的视频，因而也不会纳入点播媒资视频管理（例如控制台的视频总数不会统计这一片段）中，也无法单独针对这个片段做转码、微信发布等任何视频处理操作。

剪辑不固化的优势在于其剪辑操作十分“轻量化”，不会产生额外的存储开销。但其不足之处在于生命周期与原始录制视频相同，且无法进一步进行转码等视频处理。
     * @param {LiveRealTimeClipRequest} req
     * @param {function(string, LiveRealTimeClipResponse):void} cb
     * @public
     */
    LiveRealTimeClip(req, cb) {
        const resp = new LiveRealTimeClipResponse();
        this.request("LiveRealTimeClip", req, resp, cb);
    }
    /**
     * 该接口用于将一个网络上的视频拉取到云点播平台。
     * @param {PullUploadRequest} req
     * @param {function(string, PullUploadResponse):void} cb
     * @public
     */
    PullUpload(req, cb) {
        const resp = new PullUploadResponse();
        this.request("PullUpload", req, resp, cb);
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
     * 删除超级播放器配置。
*注：系统预置播放器配置不允许删除。*
     * @param {DeleteSuperPlayerConfigRequest} req
     * @param {function(string, DeleteSuperPlayerConfigResponse):void} cb
     * @public
     */
    DeleteSuperPlayerConfig(req, cb) {
        const resp = new DeleteSuperPlayerConfigResponse();
        this.request("DeleteSuperPlayerConfig", req, resp, cb);
    }
    /**
     * 根据任务流模板名字，获取任务流模板详情列表。
     * @param {DescribeProcedureTemplatesRequest} req
     * @param {function(string, DescribeProcedureTemplatesResponse):void} cb
     * @public
     */
    DescribeProcedureTemplates(req, cb) {
        const resp = new DescribeProcedureTemplatesResponse();
        this.request("DescribeProcedureTemplates", req, resp, cb);
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
     * 上传 HLS 视频时，解析索引文件内容，返回待上传的分片文件列表。分片文件路径必须是当前目录或子目录的相对路径，不能是 URL，不能是绝对路径。
     * @param {ParseStreamingManifestRequest} req
     * @param {function(string, ParseStreamingManifestResponse):void} cb
     * @public
     */
    ParseStreamingManifest(req, cb) {
        const resp = new ParseStreamingManifestResponse();
        this.request("ParseStreamingManifest", req, resp, cb);
    }
    /**
     * 创建用户自定义的任务流模板，模板上限：50。
     * @param {CreateProcedureTemplateRequest} req
     * @param {function(string, CreateProcedureTemplateResponse):void} cb
     * @public
     */
    CreateProcedureTemplate(req, cb) {
        const resp = new CreateProcedureTemplateResponse();
        this.request("CreateProcedureTemplate", req, resp, cb);
    }
    /**
     * 1. 预热指定的 URL 列表。
2. URL 的域名必须已在云点播中注册。
3. 单次请求最多指定20个 URL。
     * @param {PushUrlCacheRequest} req
     * @param {function(string, PushUrlCacheResponse):void} cb
     * @public
     */
    PushUrlCache(req, cb) {
        const resp = new PushUrlCacheResponse();
        this.request("PushUrlCache", req, resp, cb);
    }
    /**
     * * 删除媒体及其对应的视频处理文件（如转码视频、雪碧图、截图、微信发布视频等）；
* 可单独删除指定 ID 的视频文件下的转码，或者微信发布文件；
     * @param {DeleteMediaRequest} req
     * @param {function(string, DeleteMediaResponse):void} cb
     * @public
     */
    DeleteMedia(req, cb) {
        const resp = new DeleteMediaResponse();
        this.request("DeleteMedia", req, resp, cb);
    }
    /**
     * 创建超级播放器配置，数量上限：100。
     * @param {CreateSuperPlayerConfigRequest} req
     * @param {function(string, CreateSuperPlayerConfigResponse):void} cb
     * @public
     */
    CreateSuperPlayerConfig(req, cb) {
        const resp = new CreateSuperPlayerConfigResponse();
        this.request("CreateSuperPlayerConfig", req, resp, cb);
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
     * 删除用户自定义视频内容审核模板。
     * @param {DeleteContentReviewTemplateRequest} req
     * @param {function(string, DeleteContentReviewTemplateResponse):void} cb
     * @public
     */
    DeleteContentReviewTemplate(req, cb) {
        const resp = new DeleteContentReviewTemplateResponse();
        this.request("DeleteContentReviewTemplate", req, resp, cb);
    }
    /**
     * 创建用户自定义视频内容分析模板，数量上限：50。
     * @param {CreateAIAnalysisTemplateRequest} req
     * @param {function(string, CreateAIAnalysisTemplateResponse):void} cb
     * @public
     */
    CreateAIAnalysisTemplate(req, cb) {
        const resp = new CreateAIAnalysisTemplateResponse();
        this.request("CreateAIAnalysisTemplate", req, resp, cb);
    }
    /**
     * * 开发者调用拉取事件通知，获取到事件后，必须调用该接口来确认消息已经收到；
* 开发者获取到事件句柄后，等待确认的有效时间为 30 秒，超出 30 秒会报参数错误（4000）；
* 更多参考事件通知的[可靠回调](https://cloud.tencent.com/document/product/266/33779#.E5.8F.AF.E9.9D.A0.E5.9B.9E.E8.B0.83)。
     * @param {ConfirmEventsRequest} req
     * @param {function(string, ConfirmEventsResponse):void} cb
     * @public
     */
    ConfirmEvents(req, cb) {
        const resp = new ConfirmEventsResponse();
        this.request("ConfirmEvents", req, resp, cb);
    }
    /**
     * 对来源为 URL 的音视频媒体发起处理任务，功能包括：

1. 智能内容审核（鉴黄、鉴恐、鉴政）；
2. 智能内容分析（标签、分类、封面、按帧标签）；
3. 智能内容识别（视频片头片尾、人脸、文本全文、文本关键词、语音全文、语音关键词、物体）。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     * @param {ProcessMediaByUrlRequest} req
     * @param {function(string, ProcessMediaByUrlResponse):void} cb
     * @public
     */
    ProcessMediaByUrl(req, cb) {
        const resp = new ProcessMediaByUrlResponse();
        this.request("ProcessMediaByUrl", req, resp, cb);
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
     * 根据视频内容审核模板唯一标识，获取视频内容审核模板详情列表。返回结果包含符合条件的所有用户自定义模板及[系统预置内容审核模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E5.AE.A1.E6.A0.B8.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeContentReviewTemplatesRequest} req
     * @param {function(string, DescribeContentReviewTemplatesResponse):void} cb
     * @public
     */
    DescribeContentReviewTemplates(req, cb) {
        const resp = new DescribeContentReviewTemplatesResponse();
        this.request("DescribeContentReviewTemplates", req, resp, cb);
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
     * 该接口返回查询时间范围内使用的点播存储空间，单位：字节。
   1. 可以查询最近365天内的存储空间数据；
   2. 查询时间跨度不超过90天；
   3. 分钟粒度查询跨度不超过5天；
   4. 小时粒度查询跨度不超过10天。
     * @param {DescribeStorageDetailsRequest} req
     * @param {function(string, DescribeStorageDetailsResponse):void} cb
     * @public
     */
    DescribeStorageDetails(req, cb) {
        const resp = new DescribeStorageDetailsResponse();
        this.request("DescribeStorageDetails", req, resp, cb);
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
     * 该接口用于修改子应用信息，但不允许修改主应用信息。
     * @param {ModifySubAppIdInfoRequest} req
     * @param {function(string, ModifySubAppIdInfoResponse):void} cb
     * @public
     */
    ModifySubAppIdInfo(req, cb) {
        const resp = new ModifySubAppIdInfoResponse();
        this.request("ModifySubAppIdInfo", req, resp, cb);
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
     * 删除用户自定义视频内容识别模板。
     * @param {DeleteAIRecognitionTemplateRequest} req
     * @param {function(string, DeleteAIRecognitionTemplateResponse):void} cb
     * @public
     */
    DeleteAIRecognitionTemplate(req, cb) {
        const resp = new DeleteAIRecognitionTemplateResponse();
        this.request("DeleteAIRecognitionTemplate", req, resp, cb);
    }
    /**
     * 该接口用于创建点播子应用。
     * @param {CreateSubAppIdRequest} req
     * @param {function(string, CreateSubAppIdResponse):void} cb
     * @public
     */
    CreateSubAppId(req, cb) {
        const resp = new CreateSubAppIdResponse();
        this.request("CreateSubAppId", req, resp, cb);
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
     * * 对媒体禁播后，除了点播控制台预览，其他场景访问视频各种资源的 URL（原始文件、转码输出文件、截图等）均会返回 403。
  禁播/解禁操作全网生效时间约 5~10 分钟。
     * @param {ForbidMediaDistributionRequest} req
     * @param {function(string, ForbidMediaDistributionResponse):void} cb
     * @public
     */
    ForbidMediaDistribution(req, cb) {
        const resp = new ForbidMediaDistributionResponse();
        this.request("ForbidMediaDistribution", req, resp, cb);
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
     * 修改超级播放器配置。
     * @param {ModifySuperPlayerConfigRequest} req
     * @param {function(string, ModifySuperPlayerConfigResponse):void} cb
     * @public
     */
    ModifySuperPlayerConfig(req, cb) {
        const resp = new ModifySuperPlayerConfigResponse();
        this.request("ModifySuperPlayerConfig", req, resp, cb);
    }
    /**
     * * 用于对媒体进行分类管理；
* 该接口不影响既有媒体的分类，如需修改媒体分类，请调用[修改媒体文件属性](/document/product/266/31762)接口。
* 分类层次不可超过 4 层。
* 每个分类的子类数量不可超过 500 个。
     * @param {CreateClassRequest} req
     * @param {function(string, CreateClassResponse):void} cb
     * @public
     */
    CreateClass(req, cb) {
        const resp = new CreateClassResponse();
        this.request("CreateClass", req, resp, cb);
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
     * * 获得用户的所有分类信息。
     * @param {DescribeAllClassRequest} req
     * @param {function(string, DescribeAllClassResponse):void} cb
     * @public
     */
    DescribeAllClass(req, cb) {
        const resp = new DescribeAllClassResponse();
        this.request("DescribeAllClass", req, resp, cb);
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
     * 根据视频内容识别模板唯一标识，获取视频内容识别模板详情列表。返回结果包含符合条件的所有用户自定义视频内容识别模板及[系统预置视频内容识别模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E8.A7.86.E9.A2.91.E5.86.85.E5.AE.B9.E8.AF.86.E5.88.AB.E6.A8.A1.E6.9D.BF)。
     * @param {DescribeAIRecognitionTemplatesRequest} req
     * @param {function(string, DescribeAIRecognitionTemplatesResponse):void} cb
     * @public
     */
    DescribeAIRecognitionTemplates(req, cb) {
        const resp = new DescribeAIRecognitionTemplatesResponse();
        this.request("DescribeAIRecognitionTemplates", req, resp, cb);
    }
    /**
     * 创建用户自定义视频内容识别模板，数量上限：50。
     * @param {CreateAIRecognitionTemplateRequest} req
     * @param {function(string, CreateAIRecognitionTemplateResponse):void} cb
     * @public
     */
    CreateAIRecognitionTemplate(req, cb) {
        const resp = new CreateAIRecognitionTemplateResponse();
        this.request("CreateAIRecognitionTemplate", req, resp, cb);
    }
    /**
     * 该接口用于获取当前账号有权限的子应用列表，包含主应用。若尚未开通子应用功能，接口将返回
 FailedOperation。
     * @param {DescribeSubAppIdsRequest} req
     * @param {function(string, DescribeSubAppIdsResponse):void} cb
     * @public
     */
    DescribeSubAppIds(req, cb) {
        const resp = new DescribeSubAppIdsResponse();
        this.request("DescribeSubAppIds", req, resp, cb);
    }
    /**
     * 该接口用于确认媒体文件（和封面文件）上传到腾讯云点播的结果，并存储媒体信息，返回文件的播放地址和文件 ID。
     * @param {CommitUploadRequest} req
     * @param {function(string, CommitUploadResponse):void} cb
     * @public
     */
    CommitUpload(req, cb) {
        const resp = new CommitUploadResponse();
        this.request("CommitUpload", req, resp, cb);
    }
    /**
     * 修改用户自定义视频内容识别模板。
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
     * 搜索媒体信息，支持多种条件筛选，以及支持对返回结果排序、过滤等功能，具体包括：
- 根据媒体文件名或描述信息进行模糊搜索。
- 根据媒体分类、标签进行检索。
    - 指定分类集合 ClassIds（见输入参数），返回满足集合中任意分类的媒体。例如：媒体分类有电影、电视剧、综艺，其中电影分类下又有子分类历史片、动作片、言情片。如果 ClassIds 指定了电影、电视剧，那么电影和电视剧下的所有子分类都会返回；而如果 ClassIds 指定的是历史片、动作片，那么只有这2个子分类下的媒体才会返回。
    - 指定标签集合 Tags（见输入参数），返回满足集合中任意标签的媒体。例如：媒体标签有二次元、宫斗、鬼畜，如果 Tags 指定了二次元、鬼畜2个标签，那么只要符合这2个标签中任意一个的媒体都会被检索出来。
- 允许指定筛选某一来源 Source（见输入参数）的媒体。
- 允许根据直播推流码、Vid（见输入参数）筛选直播录制的媒体。
- 允许根据媒体的创建范围筛选媒体。
- 允许对上述条件进行任意组合，检索同时满足以上条件的媒体。例如：筛选创建时间在2018年12月1日到2018年12月8日之间、分类为电影、带有宫斗标签的媒体。
- 允许对结果进行排序并分页返回，通过 Offset 和 Limit （见输入参数）来控制分页。

<div id="maxResultsDesc">接口返回结果数限制：</div>
- <b><a href="#p_offset">Offset</a> 和 <a href="#p_limit">Limit</a> 两个参数影响单次分页查询结果数。特别注意：当这2个值都缺省时，本接口最多只返回10条查询结果。</b>
- <b>最大支持返回5000条搜索结果，超出部分不再支持查询。如果搜索结果量太大，建议使用更精细的筛选条件来减少搜索结果。</b>
     * @param {SearchMediaRequest} req
     * @param {function(string, SearchMediaResponse):void} cb
     * @public
     */
    SearchMedia(req, cb) {
        const resp = new SearchMediaResponse();
        this.request("SearchMedia", req, resp, cb);
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
     * 将点播视频发布到微信小程序，供微信小程序播放器播放。
     * @param {WeChatMiniProgramPublishRequest} req
     * @param {function(string, WeChatMiniProgramPublishResponse):void} cb
     * @public
     */
    WeChatMiniProgramPublish(req, cb) {
        const resp = new WeChatMiniProgramPublishResponse();
        this.request("WeChatMiniProgramPublish", req, resp, cb);
    }
    /**
     * 对 HLS 视频进行按时间段裁剪。

注意：裁剪出来的视频与原始视频共用 ts，仅生成新的 m3u8。原始视频删除后，该裁剪视频也会被删除。
     * @param {SimpleHlsClipRequest} req
     * @param {function(string, SimpleHlsClipResponse):void} cb
     * @public
     */
    SimpleHlsClip(req, cb) {
        const resp = new SimpleHlsClipResponse();
        this.request("SimpleHlsClip", req, resp, cb);
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
     * 该接口用于启用、停用子应用。被停用的子应用将封停对应域名，并限制控制台访问。
     * @param {ModifySubAppIdStatusRequest} req
     * @param {function(string, ModifySubAppIdStatusResponse):void} cb
     * @public
     */
    ModifySubAppIdStatus(req, cb) {
        const resp = new ModifySubAppIdStatusResponse();
        this.request("ModifySubAppIdStatus", req, resp, cb);
    }
    /**
     * 修改用户自定义视频内容审核模板。
     * @param {ModifyContentReviewTemplateRequest} req
     * @param {function(string, ModifyContentReviewTemplateResponse):void} cb
     * @public
     */
    ModifyContentReviewTemplate(req, cb) {
        const resp = new ModifyContentReviewTemplateResponse();
        this.request("ModifyContentReviewTemplate", req, resp, cb);
    }
    /**
     * 对点播中的音视频媒体发起处理任务，功能包括：
1. 视频转码（带水印）；
2. 视频转动图；
3. 对视频按指定时间点截图；
4. 对视频采样截图；
5. 对视频截图雪碧图；
6. 对视频截取一张图做封面；
7. 对视频转自适应码流（并加密）；
8. 智能内容审核（鉴黄、鉴恐、鉴政）；
9. 智能内容分析（标签、分类、封面、按帧标签）；
10. 智能内容识别（视频片头片尾、人脸、文本全文、文本关键词、语音全文、语音关键词、物体）。

如使用事件通知，事件通知的类型为 [任务流状态变更](https://cloud.tencent.com/document/product/266/9636)。
     * @param {ProcessMediaRequest} req
     * @param {function(string, ProcessMediaResponse):void} cb
     * @public
     */
    ProcessMedia(req, cb) {
        const resp = new ProcessMediaResponse();
        this.request("ProcessMedia", req, resp, cb);
    }
    /**
     * 查询超级播放器配置，支持根据条件，分页查询。
     * @param {DescribeSuperPlayerConfigsRequest} req
     * @param {function(string, DescribeSuperPlayerConfigsResponse):void} cb
     * @public
     */
    DescribeSuperPlayerConfigs(req, cb) {
        const resp = new DescribeSuperPlayerConfigsResponse();
        this.request("DescribeSuperPlayerConfigs", req, resp, cb);
    }
    /**
     * 修改媒体文件的属性，包括分类、名称、描述、标签、过期时间、打点信息、视频封面等。
     * @param {ModifyMediaInfoRequest} req
     * @param {function(string, ModifyMediaInfoResponse):void} cb
     * @public
     */
    ModifyMediaInfo(req, cb) {
        const resp = new ModifyMediaInfoResponse();
        this.request("ModifyMediaInfo", req, resp, cb);
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
}
exports.Client = Client;
//# sourceMappingURL=vod_client.js.map