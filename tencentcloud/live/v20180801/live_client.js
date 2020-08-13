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
const CreateLiveSnapshotRuleRequest = models_1.Models.CreateLiveSnapshotRuleRequest;
const BillDataInfo = models_1.Models.BillDataInfo;
const EnableLiveDomainResponse = models_1.Models.EnableLiveDomainResponse;
const CreateLiveCertRequest = models_1.Models.CreateLiveCertRequest;
const StopRecordTaskResponse = models_1.Models.StopRecordTaskResponse;
const DescribeDeliverBandwidthListResponse = models_1.Models.DescribeDeliverBandwidthListResponse;
const DeleteLiveRecordRuleRequest = models_1.Models.DeleteLiveRecordRuleRequest;
const ResumeLiveStreamRequest = models_1.Models.ResumeLiveStreamRequest;
const DeleteLiveTranscodeTemplateResponse = models_1.Models.DeleteLiveTranscodeTemplateResponse;
const DescribeBillBandwidthAndFluxListResponse = models_1.Models.DescribeBillBandwidthAndFluxListResponse;
const TemplateInfo = models_1.Models.TemplateInfo;
const DeleteLiveCallbackRuleResponse = models_1.Models.DeleteLiveCallbackRuleResponse;
const ResumeDelayLiveStreamRequest = models_1.Models.ResumeDelayLiveStreamRequest;
const DescribeLiveWatermarkRulesResponse = models_1.Models.DescribeLiveWatermarkRulesResponse;
const DescribeLiveCallbackTemplateResponse = models_1.Models.DescribeLiveCallbackTemplateResponse;
const DeleteLiveSnapshotTemplateRequest = models_1.Models.DeleteLiveSnapshotTemplateRequest;
const DescribeGroupProIspPlayInfoListResponse = models_1.Models.DescribeGroupProIspPlayInfoListResponse;
const PushAuthKeyInfo = models_1.Models.PushAuthKeyInfo;
const DomainInfoList = models_1.Models.DomainInfoList;
const DeleteLiveRecordTemplateRequest = models_1.Models.DeleteLiveRecordTemplateRequest;
const DeleteLiveCallbackTemplateResponse = models_1.Models.DeleteLiveCallbackTemplateResponse;
const DescribeLiveStreamOnlineListResponse = models_1.Models.DescribeLiveStreamOnlineListResponse;
const PushQualityData = models_1.Models.PushQualityData;
const ModifyLivePlayAuthKeyRequest = models_1.Models.ModifyLivePlayAuthKeyRequest;
const DescribeLiveDelayInfoListRequest = models_1.Models.DescribeLiveDelayInfoListRequest;
const DomainCertInfo = models_1.Models.DomainCertInfo;
const RecordTemplateInfo = models_1.Models.RecordTemplateInfo;
const DeleteLiveTranscodeRuleResponse = models_1.Models.DeleteLiveTranscodeRuleResponse;
const ConcurrentRecordStreamNum = models_1.Models.ConcurrentRecordStreamNum;
const DescribeStreamPlayInfoListResponse = models_1.Models.DescribeStreamPlayInfoListResponse;
const DescribeScreenShotSheetNumListResponse = models_1.Models.DescribeScreenShotSheetNumListResponse;
const ModifyLiveSnapshotTemplateResponse = models_1.Models.ModifyLiveSnapshotTemplateResponse;
const ModifyLivePushAuthKeyRequest = models_1.Models.ModifyLivePushAuthKeyRequest;
const DeleteLiveCallbackTemplateRequest = models_1.Models.DeleteLiveCallbackTemplateRequest;
const DescribeLiveStreamStateRequest = models_1.Models.DescribeLiveStreamStateRequest;
const DescribeLivePlayAuthKeyResponse = models_1.Models.DescribeLivePlayAuthKeyResponse;
const DescribeLiveCallbackTemplatesRequest = models_1.Models.DescribeLiveCallbackTemplatesRequest;
const DomainInfo = models_1.Models.DomainInfo;
const DescribeLiveTranscodeRulesRequest = models_1.Models.DescribeLiveTranscodeRulesRequest;
const DeleteLiveSnapshotRuleRequest = models_1.Models.DeleteLiveSnapshotRuleRequest;
const DescribePlayErrorCodeDetailInfoListRequest = models_1.Models.DescribePlayErrorCodeDetailInfoListRequest;
const DescribeBillBandwidthAndFluxListRequest = models_1.Models.DescribeBillBandwidthAndFluxListRequest;
const CommonMixOutputParams = models_1.Models.CommonMixOutputParams;
const DescribeLiveSnapshotRulesResponse = models_1.Models.DescribeLiveSnapshotRulesResponse;
const DescribeLiveTranscodeDetailInfoResponse = models_1.Models.DescribeLiveTranscodeDetailInfoResponse;
const DescribeLiveDomainRequest = models_1.Models.DescribeLiveDomainRequest;
const DescribeLiveStreamPublishedListRequest = models_1.Models.DescribeLiveStreamPublishedListRequest;
const DeleteLiveTranscodeRuleRequest = models_1.Models.DeleteLiveTranscodeRuleRequest;
const CreateLiveRecordRuleRequest = models_1.Models.CreateLiveRecordRuleRequest;
const DescribeLiveSnapshotTemplatesRequest = models_1.Models.DescribeLiveSnapshotTemplatesRequest;
const AddLiveWatermarkResponse = models_1.Models.AddLiveWatermarkResponse;
const DescribeLiveStreamPushInfoListResponse = models_1.Models.DescribeLiveStreamPushInfoListResponse;
const DescribeLiveDomainCertResponse = models_1.Models.DescribeLiveDomainCertResponse;
const DescribeLiveRecordTemplateRequest = models_1.Models.DescribeLiveRecordTemplateRequest;
const ModifyLiveDomainCertRequest = models_1.Models.ModifyLiveDomainCertRequest;
const StreamOnlineInfo = models_1.Models.StreamOnlineInfo;
const CreateLiveWatermarkRuleResponse = models_1.Models.CreateLiveWatermarkRuleResponse;
const DescribeProIspPlaySumInfoListRequest = models_1.Models.DescribeProIspPlaySumInfoListRequest;
const DescribeDeliverBandwidthListRequest = models_1.Models.DescribeDeliverBandwidthListRequest;
const PlayCodeTotalInfo = models_1.Models.PlayCodeTotalInfo;
const AddLiveWatermarkRequest = models_1.Models.AddLiveWatermarkRequest;
const ModifyLiveTranscodeTemplateResponse = models_1.Models.ModifyLiveTranscodeTemplateResponse;
const ModifyLiveRecordTemplateResponse = models_1.Models.ModifyLiveRecordTemplateResponse;
const ModifyLivePlayDomainRequest = models_1.Models.ModifyLivePlayDomainRequest;
const DeleteLiveRecordTemplateResponse = models_1.Models.DeleteLiveRecordTemplateResponse;
const DescribeLiveWatermarkRequest = models_1.Models.DescribeLiveWatermarkRequest;
const LogInfo = models_1.Models.LogInfo;
const AddDelayLiveStreamRequest = models_1.Models.AddDelayLiveStreamRequest;
const DescribeLiveDomainCertRequest = models_1.Models.DescribeLiveDomainCertRequest;
const DescribeLiveStreamEventListRequest = models_1.Models.DescribeLiveStreamEventListRequest;
const DescribePullStreamConfigsRequest = models_1.Models.DescribePullStreamConfigsRequest;
const CallBackTemplateInfo = models_1.Models.CallBackTemplateInfo;
const DescribePlayErrorCodeSumInfoListResponse = models_1.Models.DescribePlayErrorCodeSumInfoListResponse;
const UnBindLiveDomainCertRequest = models_1.Models.UnBindLiveDomainCertRequest;
const DeleteLiveRecordResponse = models_1.Models.DeleteLiveRecordResponse;
const DescribeScreenShotSheetNumListRequest = models_1.Models.DescribeScreenShotSheetNumListRequest;
const ForbidLiveStreamRequest = models_1.Models.ForbidLiveStreamRequest;
const DescribeLiveDomainsResponse = models_1.Models.DescribeLiveDomainsResponse;
const TimeValue = models_1.Models.TimeValue;
const PullStreamConfig = models_1.Models.PullStreamConfig;
const CreateLiveRecordResponse = models_1.Models.CreateLiveRecordResponse;
const RuleInfo = models_1.Models.RuleInfo;
const UpdateLiveWatermarkResponse = models_1.Models.UpdateLiveWatermarkResponse;
const LivePackageInfo = models_1.Models.LivePackageInfo;
const CreateLiveTranscodeTemplateResponse = models_1.Models.CreateLiveTranscodeTemplateResponse;
const PlayDataInfoByStream = models_1.Models.PlayDataInfoByStream;
const DescribeVisitTopSumInfoListRequest = models_1.Models.DescribeVisitTopSumInfoListRequest;
const DayStreamPlayInfo = models_1.Models.DayStreamPlayInfo;
const ModifyPullStreamStatusResponse = models_1.Models.ModifyPullStreamStatusResponse;
const ModifyLivePlayDomainResponse = models_1.Models.ModifyLivePlayDomainResponse;
const CancelCommonMixStreamResponse = models_1.Models.CancelCommonMixStreamResponse;
const DescribeConcurrentRecordStreamNumResponse = models_1.Models.DescribeConcurrentRecordStreamNumResponse;
const DescribeLiveCertsResponse = models_1.Models.DescribeLiveCertsResponse;
const CommonMixInputParam = models_1.Models.CommonMixInputParam;
const DescribeProvinceIspPlayInfoListResponse = models_1.Models.DescribeProvinceIspPlayInfoListResponse;
const DescribeLiveRecordTemplatesResponse = models_1.Models.DescribeLiveRecordTemplatesResponse;
const DescribeLiveCertRequest = models_1.Models.DescribeLiveCertRequest;
const DescribeLiveCallbackTemplatesResponse = models_1.Models.DescribeLiveCallbackTemplatesResponse;
const ModifyLivePlayAuthKeyResponse = models_1.Models.ModifyLivePlayAuthKeyResponse;
const CreateLiveCallbackTemplateRequest = models_1.Models.CreateLiveCallbackTemplateRequest;
const DescribeTopClientIpSumInfoListResponse = models_1.Models.DescribeTopClientIpSumInfoListResponse;
const DropLiveStreamResponse = models_1.Models.DropLiveStreamResponse;
const DescribeLiveStreamStateResponse = models_1.Models.DescribeLiveStreamStateResponse;
const StopLiveRecordRequest = models_1.Models.StopLiveRecordRequest;
const DeletePullStreamConfigResponse = models_1.Models.DeletePullStreamConfigResponse;
const DeleteLiveWatermarkRuleRequest = models_1.Models.DeleteLiveWatermarkRuleRequest;
const StreamEventInfo = models_1.Models.StreamEventInfo;
const DeleteRecordTaskResponse = models_1.Models.DeleteRecordTaskResponse;
const DescribeLiveWatermarksRequest = models_1.Models.DescribeLiveWatermarksRequest;
const DescribeLivePackageInfoResponse = models_1.Models.DescribeLivePackageInfoResponse;
const CreateLiveTranscodeRuleRequest = models_1.Models.CreateLiveTranscodeRuleRequest;
const DescribeLiveWatermarkRulesRequest = models_1.Models.DescribeLiveWatermarkRulesRequest;
const DropLiveStreamRequest = models_1.Models.DropLiveStreamRequest;
const CreateCommonMixStreamRequest = models_1.Models.CreateCommonMixStreamRequest;
const CreateLiveCertResponse = models_1.Models.CreateLiveCertResponse;
const PushDataInfo = models_1.Models.PushDataInfo;
const CommonMixLayoutParams = models_1.Models.CommonMixLayoutParams;
const DescribeGroupProIspPlayInfoListRequest = models_1.Models.DescribeGroupProIspPlayInfoListRequest;
const ModifyPullStreamStatusRequest = models_1.Models.ModifyPullStreamStatusRequest;
const DescribeStreamDayPlayInfoListRequest = models_1.Models.DescribeStreamDayPlayInfoListRequest;
const TranscodeDetailInfo = models_1.Models.TranscodeDetailInfo;
const DescribeLiveSnapshotTemplateResponse = models_1.Models.DescribeLiveSnapshotTemplateResponse;
const DescribeLiveTranscodeRulesResponse = models_1.Models.DescribeLiveTranscodeRulesResponse;
const AddLiveDomainRequest = models_1.Models.AddLiveDomainRequest;
const StreamName = models_1.Models.StreamName;
const DescribeLivePackageInfoRequest = models_1.Models.DescribeLivePackageInfoRequest;
const CreatePullStreamConfigRequest = models_1.Models.CreatePullStreamConfigRequest;
const DescribeLiveCertsRequest = models_1.Models.DescribeLiveCertsRequest;
const CdnPlayStatData = models_1.Models.CdnPlayStatData;
const AddLiveDomainResponse = models_1.Models.AddLiveDomainResponse;
const DescribeHttpStatusInfoListRequest = models_1.Models.DescribeHttpStatusInfoListRequest;
const ModifyPullStreamConfigResponse = models_1.Models.ModifyPullStreamConfigResponse;
const ModifyLiveCallbackTemplateRequest = models_1.Models.ModifyLiveCallbackTemplateRequest;
const DescribeProvinceIspPlayInfoListRequest = models_1.Models.DescribeProvinceIspPlayInfoListRequest;
const DescribeLivePlayAuthKeyRequest = models_1.Models.DescribeLivePlayAuthKeyRequest;
const DescribeLiveForbidStreamListResponse = models_1.Models.DescribeLiveForbidStreamListResponse;
const DescribeStreamPushInfoListRequest = models_1.Models.DescribeStreamPushInfoListRequest;
const DescribeLiveWatermarkResponse = models_1.Models.DescribeLiveWatermarkResponse;
const ResumeLiveStreamResponse = models_1.Models.ResumeLiveStreamResponse;
const ModifyLiveRecordTemplateRequest = models_1.Models.ModifyLiveRecordTemplateRequest;
const DeletePullStreamConfigRequest = models_1.Models.DeletePullStreamConfigRequest;
const ModifyPullStreamConfigRequest = models_1.Models.ModifyPullStreamConfigRequest;
const DescribeStreamPushInfoListResponse = models_1.Models.DescribeStreamPushInfoListResponse;
const DescribeLiveStreamPushInfoListRequest = models_1.Models.DescribeLiveStreamPushInfoListRequest;
const DescribeLiveWatermarksResponse = models_1.Models.DescribeLiveWatermarksResponse;
const WatermarkInfo = models_1.Models.WatermarkInfo;
const DescribeLiveForbidStreamListRequest = models_1.Models.DescribeLiveForbidStreamListRequest;
const DescribeLiveDomainPlayInfoListRequest = models_1.Models.DescribeLiveDomainPlayInfoListRequest;
const CreatePullStreamConfigResponse = models_1.Models.CreatePullStreamConfigResponse;
const BindLiveDomainCertRequest = models_1.Models.BindLiveDomainCertRequest;
const DescribeTopClientIpSumInfoListRequest = models_1.Models.DescribeTopClientIpSumInfoListRequest;
const CreateLiveCallbackRuleRequest = models_1.Models.CreateLiveCallbackRuleRequest;
const DeleteLiveWatermarkRuleResponse = models_1.Models.DeleteLiveWatermarkRuleResponse;
const PublishTime = models_1.Models.PublishTime;
const ModifyLiveCertResponse = models_1.Models.ModifyLiveCertResponse;
const MonitorStreamPlayInfo = models_1.Models.MonitorStreamPlayInfo;
const DescribeLiveTranscodeDetailInfoRequest = models_1.Models.DescribeLiveTranscodeDetailInfoRequest;
const ProIspPlayCodeDataInfo = models_1.Models.ProIspPlayCodeDataInfo;
const DeleteLiveWatermarkRequest = models_1.Models.DeleteLiveWatermarkRequest;
const DescribeLiveDomainsRequest = models_1.Models.DescribeLiveDomainsRequest;
const ProIspPlaySumInfo = models_1.Models.ProIspPlaySumInfo;
const SnapshotTemplateInfo = models_1.Models.SnapshotTemplateInfo;
const DeleteLiveSnapshotRuleResponse = models_1.Models.DeleteLiveSnapshotRuleResponse;
const CreateLiveRecordRequest = models_1.Models.CreateLiveRecordRequest;
const ForbidLiveStreamResponse = models_1.Models.ForbidLiveStreamResponse;
const BandwidthInfo = models_1.Models.BandwidthInfo;
const DescribeLogDownloadListResponse = models_1.Models.DescribeLogDownloadListResponse;
const CancelCommonMixStreamRequest = models_1.Models.CancelCommonMixStreamRequest;
const UpdateLiveWatermarkRequest = models_1.Models.UpdateLiveWatermarkRequest;
const CertInfo = models_1.Models.CertInfo;
const ModifyLivePushAuthKeyResponse = models_1.Models.ModifyLivePushAuthKeyResponse;
const DescribeLiveDelayInfoListResponse = models_1.Models.DescribeLiveDelayInfoListResponse;
const DeleteLiveTranscodeTemplateRequest = models_1.Models.DeleteLiveTranscodeTemplateRequest;
const DescribeLiveCallbackRulesRequest = models_1.Models.DescribeLiveCallbackRulesRequest;
const ClientIpPlaySumInfo = models_1.Models.ClientIpPlaySumInfo;
const DescribeLiveTranscodeTemplateResponse = models_1.Models.DescribeLiveTranscodeTemplateResponse;
const CreateLiveSnapshotTemplateResponse = models_1.Models.CreateLiveSnapshotTemplateResponse;
const DescribeConcurrentRecordStreamNumRequest = models_1.Models.DescribeConcurrentRecordStreamNumRequest;
const DescribePlayErrorCodeSumInfoListRequest = models_1.Models.DescribePlayErrorCodeSumInfoListRequest;
const ModifyLiveCertRequest = models_1.Models.ModifyLiveCertRequest;
const CommonMixControlParams = models_1.Models.CommonMixControlParams;
const UnBindLiveDomainCertResponse = models_1.Models.UnBindLiveDomainCertResponse;
const ForbidLiveDomainRequest = models_1.Models.ForbidLiveDomainRequest;
const DescribeLiveRecordRulesRequest = models_1.Models.DescribeLiveRecordRulesRequest;
const DescribePlayErrorCodeDetailInfoListResponse = models_1.Models.DescribePlayErrorCodeDetailInfoListResponse;
const CreateLiveRecordTemplateResponse = models_1.Models.CreateLiveRecordTemplateResponse;
const RecordParam = models_1.Models.RecordParam;
const DomainDetailInfo = models_1.Models.DomainDetailInfo;
const HttpStatusInfo = models_1.Models.HttpStatusInfo;
const DeleteLiveRecordRequest = models_1.Models.DeleteLiveRecordRequest;
const DescribeLiveSnapshotTemplatesResponse = models_1.Models.DescribeLiveSnapshotTemplatesResponse;
const StopRecordTaskRequest = models_1.Models.StopRecordTaskRequest;
const HttpStatusData = models_1.Models.HttpStatusData;
const HttpCodeInfo = models_1.Models.HttpCodeInfo;
const DescribeStreamPlayInfoListRequest = models_1.Models.DescribeStreamPlayInfoListRequest;
const CreateLiveTranscodeTemplateRequest = models_1.Models.CreateLiveTranscodeTemplateRequest;
const DescribeLiveStreamPublishedListResponse = models_1.Models.DescribeLiveStreamPublishedListResponse;
const DeleteLiveDomainRequest = models_1.Models.DeleteLiveDomainRequest;
const AddDelayLiveStreamResponse = models_1.Models.AddDelayLiveStreamResponse;
const DescribeLiveTranscodeTemplatesResponse = models_1.Models.DescribeLiveTranscodeTemplatesResponse;
const DeleteLiveCallbackRuleRequest = models_1.Models.DeleteLiveCallbackRuleRequest;
const PlayAuthKeyInfo = models_1.Models.PlayAuthKeyInfo;
const ModifyLiveTranscodeTemplateRequest = models_1.Models.ModifyLiveTranscodeTemplateRequest;
const ModifyLiveDomainCertResponse = models_1.Models.ModifyLiveDomainCertResponse;
const ModifyLiveCallbackTemplateResponse = models_1.Models.ModifyLiveCallbackTemplateResponse;
const EnableLiveDomainRequest = models_1.Models.EnableLiveDomainRequest;
const DescribeAllStreamPlayInfoListResponse = models_1.Models.DescribeAllStreamPlayInfoListResponse;
const ForbidLiveDomainResponse = models_1.Models.ForbidLiveDomainResponse;
const DescribeLiveSnapshotRulesRequest = models_1.Models.DescribeLiveSnapshotRulesRequest;
const CreateRecordTaskRequest = models_1.Models.CreateRecordTaskRequest;
const CreateLiveTranscodeRuleResponse = models_1.Models.CreateLiveTranscodeRuleResponse;
const CreateLiveCallbackRuleResponse = models_1.Models.CreateLiveCallbackRuleResponse;
const DescribeLiveRecordTemplateResponse = models_1.Models.DescribeLiveRecordTemplateResponse;
const DescribeVisitTopSumInfoListResponse = models_1.Models.DescribeVisitTopSumInfoListResponse;
const BindLiveDomainCertResponse = models_1.Models.BindLiveDomainCertResponse;
const CallBackRuleInfo = models_1.Models.CallBackRuleInfo;
const PlaySumStatInfo = models_1.Models.PlaySumStatInfo;
const DescribeLiveTranscodeTemplatesRequest = models_1.Models.DescribeLiveTranscodeTemplatesRequest;
const HlsSpecialParam = models_1.Models.HlsSpecialParam;
const DescribeLiveRecordRulesResponse = models_1.Models.DescribeLiveRecordRulesResponse;
const CreateLiveSnapshotTemplateRequest = models_1.Models.CreateLiveSnapshotTemplateRequest;
const DescribeLiveDomainPlayInfoListResponse = models_1.Models.DescribeLiveDomainPlayInfoListResponse;
const HttpCodeValue = models_1.Models.HttpCodeValue;
const DescribeLiveStreamOnlineListRequest = models_1.Models.DescribeLiveStreamOnlineListRequest;
const DeleteLiveSnapshotTemplateResponse = models_1.Models.DeleteLiveSnapshotTemplateResponse;
const DescribeLiveSnapshotTemplateRequest = models_1.Models.DescribeLiveSnapshotTemplateRequest;
const DeleteLiveCertResponse = models_1.Models.DeleteLiveCertResponse;
const CreateCommonMixStreamResponse = models_1.Models.CreateCommonMixStreamResponse;
const CreateLiveCallbackTemplateResponse = models_1.Models.CreateLiveCallbackTemplateResponse;
const DescribeLivePushAuthKeyRequest = models_1.Models.DescribeLivePushAuthKeyRequest;
const PlayStatInfo = models_1.Models.PlayStatInfo;
const DescribeLiveCallbackTemplateRequest = models_1.Models.DescribeLiveCallbackTemplateRequest;
const ModifyLiveSnapshotTemplateRequest = models_1.Models.ModifyLiveSnapshotTemplateRequest;
const DescribeLiveCertResponse = models_1.Models.DescribeLiveCertResponse;
const CreateLiveRecordRuleResponse = models_1.Models.CreateLiveRecordRuleResponse;
const DescribeLiveTranscodeTemplateRequest = models_1.Models.DescribeLiveTranscodeTemplateRequest;
const DescribeLogDownloadListRequest = models_1.Models.DescribeLogDownloadListRequest;
const DeleteLiveWatermarkResponse = models_1.Models.DeleteLiveWatermarkResponse;
const DescribeLivePushAuthKeyResponse = models_1.Models.DescribeLivePushAuthKeyResponse;
const CreateLiveWatermarkRuleRequest = models_1.Models.CreateLiveWatermarkRuleRequest;
const DescribeLiveRecordTemplatesRequest = models_1.Models.DescribeLiveRecordTemplatesRequest;
const DescribeAllStreamPlayInfoListRequest = models_1.Models.DescribeAllStreamPlayInfoListRequest;
const DescribeLiveDomainResponse = models_1.Models.DescribeLiveDomainResponse;
const DeleteRecordTaskRequest = models_1.Models.DeleteRecordTaskRequest;
const StopLiveRecordResponse = models_1.Models.StopLiveRecordResponse;
const DescribeStreamDayPlayInfoListResponse = models_1.Models.DescribeStreamDayPlayInfoListResponse;
const CreateLiveSnapshotRuleResponse = models_1.Models.CreateLiveSnapshotRuleResponse;
const DelayInfo = models_1.Models.DelayInfo;
const DescribeLiveStreamEventListResponse = models_1.Models.DescribeLiveStreamEventListResponse;
const DescribePullStreamConfigsResponse = models_1.Models.DescribePullStreamConfigsResponse;
const DescribeLiveCallbackRulesResponse = models_1.Models.DescribeLiveCallbackRulesResponse;
const CreateRecordTaskResponse = models_1.Models.CreateRecordTaskResponse;
const ForbidStreamInfo = models_1.Models.ForbidStreamInfo;
const ResumeDelayLiveStreamResponse = models_1.Models.ResumeDelayLiveStreamResponse;
const GroupProIspDataInfo = models_1.Models.GroupProIspDataInfo;
const DeleteLiveDomainResponse = models_1.Models.DeleteLiveDomainResponse;
const CommonMixCropParams = models_1.Models.CommonMixCropParams;
const CreateLiveRecordTemplateRequest = models_1.Models.CreateLiveRecordTemplateRequest;
const DescribeProIspPlaySumInfoListResponse = models_1.Models.DescribeProIspPlaySumInfoListResponse;
const DeleteLiveCertRequest = models_1.Models.DeleteLiveCertRequest;
const DescribeHttpStatusInfoListResponse = models_1.Models.DescribeHttpStatusInfoListResponse;
const DeleteLiveRecordRuleResponse = models_1.Models.DeleteLiveRecordRuleResponse;
/**
 * live client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("live.tencentcloudapi.com", "2018-08-01", credential, region, profile);
    }
    /**
     * 断开推流连接，但可以重新推流。
     * @param {DropLiveStreamRequest} req
     * @param {function(string, DropLiveStreamResponse):void} cb
     * @public
     */
    DropLiveStream(req, cb) {
        const resp = new DropLiveStreamResponse();
        this.request("DropLiveStream", req, resp, cb);
    }
    /**
     * 查询水印列表。
     * @param {DescribeLiveWatermarksRequest} req
     * @param {function(string, DescribeLiveWatermarksResponse):void} cb
     * @public
     */
    DescribeLiveWatermarks(req, cb) {
        const resp = new DescribeLiveWatermarksResponse();
        this.request("DescribeLiveWatermarks", req, resp, cb);
    }
    /**
     * 查询并发录制路数，对慢直播和普通直播适用。
     * @param {DescribeConcurrentRecordStreamNumRequest} req
     * @param {function(string, DescribeConcurrentRecordStreamNumResponse):void} cb
     * @public
     */
    DescribeConcurrentRecordStreamNum(req, cb) {
        const resp = new DescribeConcurrentRecordStreamNumResponse();
        this.request("DescribeConcurrentRecordStreamNum", req, resp, cb);
    }
    /**
     * - 使用前提
  1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
  2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2838)。

- 模式说明
  该接口支持两种录制模式：
  1. 定时录制模式【默认模式】。
    需要传入开始时间与结束时间，录制任务根据起止时间自动开始与结束。在所设置结束时间过期之前（且未调用StopLiveRecord提前终止任务），录制任务都是有效的，期间多次断流然后重推都会启动录制任务。
  2. 实时视频录制模式。
    忽略传入的开始时间，在录制任务创建后立即开始录制，录制时长支持最大为30分钟，如果传入的结束时间与当前时间差大于30分钟，则按30分钟计算，实时视频录制主要用于录制精彩视频场景，时长建议控制在5分钟以内。

- 注意事项
  1. 调用接口超时设置应大于3秒，小于3秒重试以及按不同起止时间调用都有可能产生重复录制任务，进而导致额外录制费用。
  2. 受限于音视频文件格式（FLV/MP4/HLS）对编码类型的支持，视频编码类型支持 H.264，音频编码类型支持 AAC。
  3. 为避免恶意或非主观的频繁 API 请求，对定时录制模式最大创建任务数做了限制：其中，当天可以创建的最大任务数不超过4000（不含已删除的任务）；当前时刻并发运行的任务数不超过400。有超出此限制的需要提工单申请。
  4. 此调用方式暂时不支持海外推流录制。
     * @param {CreateLiveRecordRequest} req
     * @param {function(string, CreateLiveRecordResponse):void} cb
     * @public
     */
    CreateLiveRecord(req, cb) {
        const resp = new CreateLiveRecordResponse();
        this.request("CreateLiveRecord", req, resp, cb);
    }
    /**
     * 更新水印。
     * @param {UpdateLiveWatermarkRequest} req
     * @param {function(string, UpdateLiveWatermarkResponse):void} cb
     * @public
     */
    UpdateLiveWatermark(req, cb) {
        const resp = new UpdateLiveWatermarkResponse();
        this.request("UpdateLiveWatermark", req, resp, cb);
    }
    /**
     * 修改截图模板配置。
     * @param {ModifyLiveSnapshotTemplateRequest} req
     * @param {function(string, ModifyLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifyLiveSnapshotTemplate(req, cb) {
        const resp = new ModifyLiveSnapshotTemplateResponse();
        this.request("ModifyLiveSnapshotTemplate", req, resp, cb);
    }
    /**
     * 修改录制模板配置。
     * @param {ModifyLiveRecordTemplateRequest} req
     * @param {function(string, ModifyLiveRecordTemplateResponse):void} cb
     * @public
     */
    ModifyLiveRecordTemplate(req, cb) {
        const resp = new ModifyLiveRecordTemplateResponse();
        this.request("ModifyLiveRecordTemplate", req, resp, cb);
    }
    /**
     * 创建水印规则，需要先调用[AddLiveWatermark](/document/product/267/30154)接口添加水印，将返回的水印id绑定到流使用。
     * @param {CreateLiveWatermarkRuleRequest} req
     * @param {function(string, CreateLiveWatermarkRuleResponse):void} cb
     * @public
     */
    CreateLiveWatermarkRule(req, cb) {
        const resp = new CreateLiveWatermarkRuleResponse();
        this.request("CreateLiveWatermarkRule", req, resp, cb);
    }
    /**
     * 用于查询推断流事件。<br>

注意：该接口可通过使用IsFilter进行过滤，返回推流历史记录。
     * @param {DescribeLiveStreamEventListRequest} req
     * @param {function(string, DescribeLiveStreamEventListResponse):void} cb
     * @public
     */
    DescribeLiveStreamEventList(req, cb) {
        const resp = new DescribeLiveStreamEventListResponse();
        this.request("DescribeLiveStreamEventList", req, resp, cb);
    }
    /**
     * 查询直播拉流配置。
     * @param {DescribePullStreamConfigsRequest} req
     * @param {function(string, DescribePullStreamConfigsResponse):void} cb
     * @public
     */
    DescribePullStreamConfigs(req, cb) {
        const resp = new DescribePullStreamConfigsResponse();
        this.request("DescribePullStreamConfigs", req, resp, cb);
    }
    /**
     * 查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     * @param {DescribeHttpStatusInfoListRequest} req
     * @param {function(string, DescribeHttpStatusInfoListResponse):void} cb
     * @public
     */
    DescribeHttpStatusInfoList(req, cb) {
        const resp = new DescribeHttpStatusInfoListResponse();
        this.request("DescribeHttpStatusInfoList", req, resp, cb);
    }
    /**
     * 查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
     * @param {DescribeProvinceIspPlayInfoListRequest} req
     * @param {function(string, DescribeProvinceIspPlayInfoListResponse):void} cb
     * @public
     */
    DescribeProvinceIspPlayInfoList(req, cb) {
        const resp = new DescribeProvinceIspPlayInfoListResponse();
        this.request("DescribeProvinceIspPlayInfoList", req, resp, cb);
    }
    /**
     * 修改播放域名信息。
     * @param {ModifyLivePlayDomainRequest} req
     * @param {function(string, ModifyLivePlayDomainResponse):void} cb
     * @public
     */
    ModifyLivePlayDomain(req, cb) {
        const resp = new ModifyLivePlayDomainResponse();
        this.request("ModifyLivePlayDomain", req, resp, cb);
    }
    /**
     * 查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
     * @param {DescribeStreamPushInfoListRequest} req
     * @param {function(string, DescribeStreamPushInfoListResponse):void} cb
     * @public
     */
    DescribeStreamPushInfoList(req, cb) {
        const resp = new DescribeStreamPushInfoListResponse();
        this.request("DescribeStreamPushInfoList", req, resp, cb);
    }
    /**
     * 获取截图规则列表
     * @param {DescribeLiveSnapshotRulesRequest} req
     * @param {function(string, DescribeLiveSnapshotRulesResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotRules(req, cb) {
        const resp = new DescribeLiveSnapshotRulesResponse();
        this.request("DescribeLiveSnapshotRules", req, resp, cb);
    }
    /**
     * 删除转码模板。
     * @param {DeleteLiveTranscodeTemplateRequest} req
     * @param {function(string, DeleteLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeTemplate(req, cb) {
        const resp = new DeleteLiveTranscodeTemplateResponse();
        this.request("DeleteLiveTranscodeTemplate", req, resp, cb);
    }
    /**
     * 查询某段时间top n客户端ip汇总信息（暂支持top 1000）
     * @param {DescribeTopClientIpSumInfoListRequest} req
     * @param {function(string, DescribeTopClientIpSumInfoListResponse):void} cb
     * @public
     */
    DescribeTopClientIpSumInfoList(req, cb) {
        const resp = new DescribeTopClientIpSumInfoListResponse();
        this.request("DescribeTopClientIpSumInfoList", req, resp, cb);
    }
    /**
     * 修改直播拉流配置的状态。
     * @param {ModifyPullStreamStatusRequest} req
     * @param {function(string, ModifyPullStreamStatusResponse):void} cb
     * @public
     */
    ModifyPullStreamStatus(req, cb) {
        const resp = new ModifyPullStreamStatusResponse();
        this.request("ModifyPullStreamStatus", req, resp, cb);
    }
    /**
     * 获取录制模板列表。
     * @param {DescribeLiveRecordTemplatesRequest} req
     * @param {function(string, DescribeLiveRecordTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplates(req, cb) {
        const resp = new DescribeLiveRecordTemplatesResponse();
        this.request("DescribeLiveRecordTemplates", req, resp, cb);
    }
    /**
     * 修改域名和证书绑定信息
     * @param {ModifyLiveDomainCertRequest} req
     * @param {function(string, ModifyLiveDomainCertResponse):void} cb
     * @public
     */
    ModifyLiveDomainCert(req, cb) {
        const resp = new ModifyLiveDomainCertResponse();
        this.request("ModifyLiveDomainCert", req, resp, cb);
    }
    /**
     * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
     * @param {DescribeVisitTopSumInfoListRequest} req
     * @param {function(string, DescribeVisitTopSumInfoListResponse):void} cb
     * @public
     */
    DescribeVisitTopSumInfoList(req, cb) {
        const resp = new DescribeVisitTopSumInfoListResponse();
        this.request("DescribeVisitTopSumInfoList", req, resp, cb);
    }
    /**
     * 获取域名证书信息。
     * @param {DescribeLiveDomainCertRequest} req
     * @param {function(string, DescribeLiveDomainCertResponse):void} cb
     * @public
     */
    DescribeLiveDomainCert(req, cb) {
        const resp = new DescribeLiveDomainCertResponse();
        this.request("DescribeLiveDomainCert", req, resp, cb);
    }
    /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。
     * @param {AddLiveWatermarkRequest} req
     * @param {function(string, AddLiveWatermarkResponse):void} cb
     * @public
     */
    AddLiveWatermark(req, cb) {
        const resp = new AddLiveWatermarkResponse();
        this.request("AddLiveWatermark", req, resp, cb);
    }
    /**
     * 删除水印规则
     * @param {DeleteLiveWatermarkRuleRequest} req
     * @param {function(string, DeleteLiveWatermarkRuleResponse):void} cb
     * @public
     */
    DeleteLiveWatermarkRule(req, cb) {
        const resp = new DeleteLiveWatermarkRuleResponse();
        this.request("DeleteLiveWatermarkRule", req, resp, cb);
    }
    /**
     * 删除回调规则。
     * @param {DeleteLiveCallbackRuleRequest} req
     * @param {function(string, DeleteLiveCallbackRuleResponse):void} cb
     * @public
     */
    DeleteLiveCallbackRule(req, cb) {
        const resp = new DeleteLiveCallbackRuleResponse();
        this.request("DeleteLiveCallbackRule", req, resp, cb);
    }
    /**
     * 更新拉流配置。
     * @param {ModifyPullStreamConfigRequest} req
     * @param {function(string, ModifyPullStreamConfigResponse):void} cb
     * @public
     */
    ModifyPullStreamConfig(req, cb) {
        const resp = new ModifyPullStreamConfigResponse();
        this.request("ModifyPullStreamConfig", req, resp, cb);
    }
    /**
     * 创建截图模板，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     * @param {CreateLiveSnapshotTemplateRequest} req
     * @param {function(string, CreateLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateLiveSnapshotTemplate(req, cb) {
        const resp = new CreateLiveSnapshotTemplateResponse();
        this.request("CreateLiveSnapshotTemplate", req, resp, cb);
    }
    /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。
注意：该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。
     * @param {DescribeLiveStreamOnlineListRequest} req
     * @param {function(string, DescribeLiveStreamOnlineListResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineList(req, cb) {
        const resp = new DescribeLiveStreamOnlineListResponse();
        this.request("DescribeLiveStreamOnlineList", req, resp, cb);
    }
    /**
     * 删除回调模板。
     * @param {DeleteLiveCallbackTemplateRequest} req
     * @param {function(string, DeleteLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DeleteLiveCallbackTemplate(req, cb) {
        const resp = new DeleteLiveCallbackTemplateResponse();
        this.request("DeleteLiveCallbackTemplate", req, resp, cb);
    }
    /**
     * 查询直播推流鉴权key
     * @param {DescribeLivePushAuthKeyRequest} req
     * @param {function(string, DescribeLivePushAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePushAuthKey(req, cb) {
        const resp = new DescribeLivePushAuthKeyResponse();
        this.request("DescribeLivePushAuthKey", req, resp, cb);
    }
    /**
     * 删除直播拉流配置。
     * @param {DeletePullStreamConfigRequest} req
     * @param {function(string, DeletePullStreamConfigResponse):void} cb
     * @public
     */
    DeletePullStreamConfig(req, cb) {
        const resp = new DeletePullStreamConfigResponse();
        this.request("DeletePullStreamConfig", req, resp, cb);
    }
    /**
     * 获取单个录制模板。
     * @param {DescribeLiveRecordTemplateRequest} req
     * @param {function(string, DescribeLiveRecordTemplateResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplate(req, cb) {
        const resp = new DescribeLiveRecordTemplateResponse();
        this.request("DescribeLiveRecordTemplate", req, resp, cb);
    }
    /**
     * 该接口用来创建通用混流。用法与旧接口 mix_streamv2.start_mix_stream_advanced 基本一致。
注意：当前最多支持16路混流。
最佳实践：https://cloud.tencent.com/document/product/267/45566
     * @param {CreateCommonMixStreamRequest} req
     * @param {function(string, CreateCommonMixStreamResponse):void} cb
     * @public
     */
    CreateCommonMixStream(req, cb) {
        const resp = new CreateCommonMixStreamResponse();
        this.request("CreateCommonMixStream", req, resp, cb);
    }
    /**
     * 删除水印。
     * @param {DeleteLiveWatermarkRequest} req
     * @param {function(string, DeleteLiveWatermarkResponse):void} cb
     * @public
     */
    DeleteLiveWatermark(req, cb) {
        const resp = new DeleteLiveWatermarkResponse();
        this.request("DeleteLiveWatermark", req, resp, cb);
    }
    /**
     * 查询下行播放错误码信息。
     * @param {DescribePlayErrorCodeSumInfoListRequest} req
     * @param {function(string, DescribePlayErrorCodeSumInfoListResponse):void} cb
     * @public
     */
    DescribePlayErrorCodeSumInfoList(req, cb) {
        const resp = new DescribePlayErrorCodeSumInfoListResponse();
        this.request("DescribePlayErrorCodeSumInfoList", req, resp, cb);
    }
    /**
     * 对流设置延播时间
注意：如果在推流前设置延播，需要提前5分钟设置。
目前该接口只支持流粒度的，域名及应用粒度功能支持当前开发中。
使用场景：对重要直播，避免出现突发状况，可通过设置延迟播放，提前做好把控。

     * @param {AddDelayLiveStreamRequest} req
     * @param {function(string, AddDelayLiveStreamResponse):void} cb
     * @public
     */
    AddDelayLiveStream(req, cb) {
        const resp = new AddDelayLiveStreamResponse();
        this.request("AddDelayLiveStream", req, resp, cb);
    }
    /**
     * 查询天维度每条流的播放数据，包括总流量等。
     * @param {DescribeStreamDayPlayInfoListRequest} req
     * @param {function(string, DescribeStreamDayPlayInfoListResponse):void} cb
     * @public
     */
    DescribeStreamDayPlayInfoList(req, cb) {
        const resp = new DescribeStreamDayPlayInfoListResponse();
        this.request("DescribeStreamDayPlayInfoList", req, resp, cb);
    }
    /**
     * 修改直播推流鉴权key
     * @param {ModifyLivePushAuthKeyRequest} req
     * @param {function(string, ModifyLivePushAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePushAuthKey(req, cb) {
        const resp = new ModifyLivePushAuthKeyResponse();
        this.request("ModifyLivePushAuthKey", req, resp, cb);
    }
    /**
     * 修改转码模板配置。
     * @param {ModifyLiveTranscodeTemplateRequest} req
     * @param {function(string, ModifyLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyLiveTranscodeTemplate(req, cb) {
        const resp = new ModifyLiveTranscodeTemplateResponse();
        this.request("ModifyLiveTranscodeTemplate", req, resp, cb);
    }
    /**
     * 删除转码规则。
DomainName+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配。其中TemplateId必填，其余参数为空时也需要传空字符串进行强匹配。
     * @param {DeleteLiveTranscodeRuleRequest} req
     * @param {function(string, DeleteLiveTranscodeRuleResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeRule(req, cb) {
        const resp = new DeleteLiveTranscodeRuleResponse();
        this.request("DeleteLiveTranscodeRule", req, resp, cb);
    }
    /**
     * 删除截图规则。
     * @param {DeleteLiveSnapshotRuleRequest} req
     * @param {function(string, DeleteLiveSnapshotRuleResponse):void} cb
     * @public
     */
    DeleteLiveSnapshotRule(req, cb) {
        const resp = new DeleteLiveSnapshotRuleResponse();
        this.request("DeleteLiveSnapshotRule", req, resp, cb);
    }
    /**
     * 获取禁推流列表。
     * @param {DescribeLiveForbidStreamListRequest} req
     * @param {function(string, DescribeLiveForbidStreamListResponse):void} cb
     * @public
     */
    DescribeLiveForbidStreamList(req, cb) {
        const resp = new DescribeLiveForbidStreamListResponse();
        this.request("DescribeLiveForbidStreamList", req, resp, cb);
    }
    /**
     * 获取证书信息
     * @param {DescribeLiveCertRequest} req
     * @param {function(string, DescribeLiveCertResponse):void} cb
     * @public
     */
    DescribeLiveCert(req, cb) {
        const resp = new DescribeLiveCertResponse();
        this.request("DescribeLiveCert", req, resp, cb);
    }
    /**
     * 修改证书
     * @param {ModifyLiveCertRequest} req
     * @param {function(string, ModifyLiveCertResponse):void} cb
     * @public
     */
    ModifyLiveCert(req, cb) {
        const resp = new ModifyLiveCertResponse();
        this.request("ModifyLiveCert", req, resp, cb);
    }
    /**
     * 根据域名状态、类型等信息查询用户的域名信息。
     * @param {DescribeLiveDomainsRequest} req
     * @param {function(string, DescribeLiveDomainsResponse):void} cb
     * @public
     */
    DescribeLiveDomains(req, cb) {
        const resp = new DescribeLiveDomainsResponse();
        this.request("DescribeLiveDomains", req, resp, cb);
    }
    /**
     * 删除域名对应的证书
     * @param {DeleteLiveCertRequest} req
     * @param {function(string, DeleteLiveCertResponse):void} cb
     * @public
     */
    DeleteLiveCert(req, cb) {
        const resp = new DeleteLiveCertResponse();
        this.request("DeleteLiveCert", req, resp, cb);
    }
    /**
     * 创建回调模板，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     * @param {CreateLiveCallbackTemplateRequest} req
     * @param {function(string, CreateLiveCallbackTemplateResponse):void} cb
     * @public
     */
    CreateLiveCallbackTemplate(req, cb) {
        const resp = new CreateLiveCallbackTemplateResponse();
        this.request("CreateLiveCallbackTemplate", req, resp, cb);
    }
    /**
     * 恢复某条流的推流。
     * @param {ResumeLiveStreamRequest} req
     * @param {function(string, ResumeLiveStreamResponse):void} cb
     * @public
     */
    ResumeLiveStream(req, cb) {
        const resp = new ResumeLiveStreamResponse();
        this.request("ResumeLiveStream", req, resp, cb);
    }
    /**
     * 获取单个回调模板。
     * @param {DescribeLiveCallbackTemplateRequest} req
     * @param {function(string, DescribeLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DescribeLiveCallbackTemplate(req, cb) {
        const resp = new DescribeLiveCallbackTemplateResponse();
        this.request("DescribeLiveCallbackTemplate", req, resp, cb);
    }
    /**
     * 删除已添加的直播域名
     * @param {DeleteLiveDomainRequest} req
     * @param {function(string, DeleteLiveDomainResponse):void} cb
     * @public
     */
    DeleteLiveDomain(req, cb) {
        const resp = new DeleteLiveDomainResponse();
        this.request("DeleteLiveDomain", req, resp, cb);
    }
    /**
     * 修改回调模板。
     * @param {ModifyLiveCallbackTemplateRequest} req
     * @param {function(string, ModifyLiveCallbackTemplateResponse):void} cb
     * @public
     */
    ModifyLiveCallbackTemplate(req, cb) {
        const resp = new ModifyLiveCallbackTemplateResponse();
        this.request("ModifyLiveCallbackTemplate", req, resp, cb);
    }
    /**
     * 查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
     * @param {DescribeProIspPlaySumInfoListRequest} req
     * @param {function(string, DescribeProIspPlaySumInfoListResponse):void} cb
     * @public
     */
    DescribeProIspPlaySumInfoList(req, cb) {
        const resp = new DescribeProIspPlaySumInfoListResponse();
        this.request("DescribeProIspPlaySumInfoList", req, resp, cb);
    }
    /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。
     * @param {DescribeStreamPlayInfoListRequest} req
     * @param {function(string, DescribeStreamPlayInfoListResponse):void} cb
     * @public
     */
    DescribeStreamPlayInfoList(req, cb) {
        const resp = new DescribeStreamPlayInfoListResponse();
        this.request("DescribeStreamPlayInfoList", req, resp, cb);
    }
    /**
     * 添加证书
     * @param {CreateLiveCertRequest} req
     * @param {function(string, CreateLiveCertResponse):void} cb
     * @public
     */
    CreateLiveCert(req, cb) {
        const resp = new CreateLiveCertResponse();
        this.request("CreateLiveCert", req, resp, cb);
    }
    /**
     * 获取转码规则列表
     * @param {DescribeLiveTranscodeRulesRequest} req
     * @param {function(string, DescribeLiveTranscodeRulesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeRules(req, cb) {
        const resp = new DescribeLiveTranscodeRulesResponse();
        this.request("DescribeLiveTranscodeRules", req, resp, cb);
    }
    /**
     * 获取单个截图模板。
     * @param {DescribeLiveSnapshotTemplateRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplate(req, cb) {
        const resp = new DescribeLiveSnapshotTemplateResponse();
        this.request("DescribeLiveSnapshotTemplate", req, resp, cb);
    }
    /**
     * 获取回调模板列表
     * @param {DescribeLiveCallbackTemplatesRequest} req
     * @param {function(string, DescribeLiveCallbackTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveCallbackTemplates(req, cb) {
        const resp = new DescribeLiveCallbackTemplatesResponse();
        this.request("DescribeLiveCallbackTemplates", req, resp, cb);
    }
    /**
     * 提前结束录制，并中止运行中的录制任务。任务被成功中止后将不再启动。
     * @param {StopRecordTaskRequest} req
     * @param {function(string, StopRecordTaskResponse):void} cb
     * @public
     */
    StopRecordTask(req, cb) {
        const resp = new StopRecordTaskResponse();
        this.request("StopRecordTask", req, resp, cb);
    }
    /**
     * 获取截图模板列表。
     * @param {DescribeLiveSnapshotTemplatesRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplates(req, cb) {
        const resp = new DescribeLiveSnapshotTemplatesResponse();
        this.request("DescribeLiveSnapshotTemplates", req, resp, cb);
    }
    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     * @param {StopLiveRecordRequest} req
     * @param {function(string, StopLiveRecordResponse):void} cb
     * @public
     */
    StopLiveRecord(req, cb) {
        const resp = new StopLiveRecordResponse();
        this.request("StopLiveRecord", req, resp, cb);
    }
    /**
     * 修改播放鉴权key
     * @param {ModifyLivePlayAuthKeyRequest} req
     * @param {function(string, ModifyLivePlayAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePlayAuthKey(req, cb) {
        const resp = new ModifyLivePlayAuthKeyResponse();
        this.request("ModifyLivePlayAuthKey", req, resp, cb);
    }
    /**
     * 获取单个转码模板。
     * @param {DescribeLiveTranscodeTemplateRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplate(req, cb) {
        const resp = new DescribeLiveTranscodeTemplateResponse();
        this.request("DescribeLiveTranscodeTemplate", req, resp, cb);
    }
    /**
     * 接口用来查询直播增值业务--截图的张数
     * @param {DescribeScreenShotSheetNumListRequest} req
     * @param {function(string, DescribeScreenShotSheetNumListResponse):void} cb
     * @public
     */
    DescribeScreenShotSheetNumList(req, cb) {
        const resp = new DescribeScreenShotSheetNumListResponse();
        this.request("DescribeScreenShotSheetNumList", req, resp, cb);
    }
    /**
     * 解绑域名证书
     * @param {UnBindLiveDomainCertRequest} req
     * @param {function(string, UnBindLiveDomainCertResponse):void} cb
     * @public
     */
    UnBindLiveDomainCert(req, cb) {
        const resp = new UnBindLiveDomainCertResponse();
        this.request("UnBindLiveDomainCert", req, resp, cb);
    }
    /**
     * 删除录制任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     * @param {DeleteRecordTaskRequest} req
     * @param {function(string, DeleteRecordTaskResponse):void} cb
     * @public
     */
    DeleteRecordTask(req, cb) {
        const resp = new DeleteRecordTaskResponse();
        this.request("DeleteRecordTask", req, resp, cb);
    }
    /**
     * 支持查询某天或某段时间的转码详细信息。
     * @param {DescribeLiveTranscodeDetailInfoRequest} req
     * @param {function(string, DescribeLiveTranscodeDetailInfoResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeDetailInfo(req, cb) {
        const resp = new DescribeLiveTranscodeDetailInfoResponse();
        this.request("DescribeLiveTranscodeDetailInfo", req, resp, cb);
    }
    /**
     * 批量获取日志URL。
     * @param {DescribeLogDownloadListRequest} req
     * @param {function(string, DescribeLogDownloadListResponse):void} cb
     * @public
     */
    DescribeLogDownloadList(req, cb) {
        const resp = new DescribeLogDownloadListResponse();
        this.request("DescribeLogDownloadList", req, resp, cb);
    }
    /**
     * 获取录制规则列表
     * @param {DescribeLiveRecordRulesRequest} req
     * @param {function(string, DescribeLiveRecordRulesResponse):void} cb
     * @public
     */
    DescribeLiveRecordRules(req, cb) {
        const resp = new DescribeLiveRecordRulesResponse();
        this.request("DescribeLiveRecordRules", req, resp, cb);
    }
    /**
     * 获取直播延播列表。
     * @param {DescribeLiveDelayInfoListRequest} req
     * @param {function(string, DescribeLiveDelayInfoListResponse):void} cb
     * @public
     */
    DescribeLiveDelayInfoList(req, cb) {
        const resp = new DescribeLiveDelayInfoListResponse();
        this.request("DescribeLiveDelayInfoList", req, resp, cb);
    }
    /**
     * 删除录制规则。
     * @param {DeleteLiveRecordRuleRequest} req
     * @param {function(string, DeleteLiveRecordRuleResponse):void} cb
     * @public
     */
    DeleteLiveRecordRule(req, cb) {
        const resp = new DeleteLiveRecordRuleResponse();
        this.request("DeleteLiveRecordRule", req, resp, cb);
    }
    /**
     * 查询直播域名信息。
     * @param {DescribeLiveDomainRequest} req
     * @param {function(string, DescribeLiveDomainResponse):void} cb
     * @public
     */
    DescribeLiveDomain(req, cb) {
        const resp = new DescribeLiveDomainResponse();
        this.request("DescribeLiveDomain", req, resp, cb);
    }
    /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     * @param {CreateLiveCallbackRuleRequest} req
     * @param {function(string, CreateLiveCallbackRuleResponse):void} cb
     * @public
     */
    CreateLiveCallbackRule(req, cb) {
        const resp = new CreateLiveCallbackRuleResponse();
        this.request("CreateLiveCallbackRule", req, resp, cb);
    }
    /**
     * 域名绑定证书。
注意：需先调用添加证书接口进行证书添加。获取到证书Id后再调用该接口进行绑定。
     * @param {BindLiveDomainCertRequest} req
     * @param {function(string, BindLiveDomainCertResponse):void} cb
     * @public
     */
    BindLiveDomainCert(req, cb) {
        const resp = new BindLiveDomainCertResponse();
        this.request("BindLiveDomainCert", req, resp, cb);
    }
    /**
     * 获取回调规则列表
     * @param {DescribeLiveCallbackRulesRequest} req
     * @param {function(string, DescribeLiveCallbackRulesResponse):void} cb
     * @public
     */
    DescribeLiveCallbackRules(req, cb) {
        const resp = new DescribeLiveCallbackRulesResponse();
        this.request("DescribeLiveCallbackRules", req, resp, cb);
    }
    /**
     * 查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。


     * @param {DescribePlayErrorCodeDetailInfoListRequest} req
     * @param {function(string, DescribePlayErrorCodeDetailInfoListResponse):void} cb
     * @public
     */
    DescribePlayErrorCodeDetailInfoList(req, cb) {
        const resp = new DescribePlayErrorCodeDetailInfoListResponse();
        this.request("DescribePlayErrorCodeDetailInfoList", req, resp, cb);
    }
    /**
     * 返回已经推过流的流列表。<br>
注意：分页最多支持查询1万条记录，可通过调整查询时间范围来获取更多数据。
     * @param {DescribeLiveStreamPublishedListRequest} req
     * @param {function(string, DescribeLiveStreamPublishedListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPublishedList(req, cb) {
        const resp = new DescribeLiveStreamPublishedListResponse();
        this.request("DescribeLiveStreamPublishedList", req, resp, cb);
    }
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     * @param {ForbidLiveStreamRequest} req
     * @param {function(string, ForbidLiveStreamResponse):void} cb
     * @public
     */
    ForbidLiveStream(req, cb) {
        const resp = new ForbidLiveStreamResponse();
        this.request("ForbidLiveStream", req, resp, cb);
    }
    /**
     * 添加域名，一次只能提交一个域名。域名必须已备案。
     * @param {AddLiveDomainRequest} req
     * @param {function(string, AddLiveDomainResponse):void} cb
     * @public
     */
    AddLiveDomain(req, cb) {
        const resp = new AddLiveDomainResponse();
        this.request("AddLiveDomain", req, resp, cb);
    }
    /**
     * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
     * @param {DescribeDeliverBandwidthListRequest} req
     * @param {function(string, DescribeDeliverBandwidthListResponse):void} cb
     * @public
     */
    DescribeDeliverBandwidthList(req, cb) {
        const resp = new DescribeDeliverBandwidthListResponse();
        this.request("DescribeDeliverBandwidthList", req, resp, cb);
    }
    /**
     * 查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
     * @param {DescribeLiveDomainPlayInfoListRequest} req
     * @param {function(string, DescribeLiveDomainPlayInfoListResponse):void} cb
     * @public
     */
    DescribeLiveDomainPlayInfoList(req, cb) {
        const resp = new DescribeLiveDomainPlayInfoListResponse();
        this.request("DescribeLiveDomainPlayInfoList", req, resp, cb);
    }
    /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     * @param {CreateLiveRecordRuleRequest} req
     * @param {function(string, CreateLiveRecordRuleResponse):void} cb
     * @public
     */
    CreateLiveRecordRule(req, cb) {
        const resp = new CreateLiveRecordRuleResponse();
        this.request("CreateLiveRecordRule", req, resp, cb);
    }
    /**
     * 获取单个水印信息。
     * @param {DescribeLiveWatermarkRequest} req
     * @param {function(string, DescribeLiveWatermarkResponse):void} cb
     * @public
     */
    DescribeLiveWatermark(req, cb) {
        const resp = new DescribeLiveWatermarkResponse();
        this.request("DescribeLiveWatermark", req, resp, cb);
    }
    /**
     * 获取转码模板列表。
     * @param {DescribeLiveTranscodeTemplatesRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplates(req, cb) {
        const resp = new DescribeLiveTranscodeTemplatesResponse();
        this.request("DescribeLiveTranscodeTemplates", req, resp, cb);
    }
    /**
     * 创建录制模板，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     * @param {CreateLiveRecordTemplateRequest} req
     * @param {function(string, CreateLiveRecordTemplateResponse):void} cb
     * @public
     */
    CreateLiveRecordTemplate(req, cb) {
        const resp = new CreateLiveRecordTemplateResponse();
        this.request("CreateLiveRecordTemplate", req, resp, cb);
    }
    /**
     * 直播计费带宽和流量数据查询。
     * @param {DescribeBillBandwidthAndFluxListRequest} req
     * @param {function(string, DescribeBillBandwidthAndFluxListResponse):void} cb
     * @public
     */
    DescribeBillBandwidthAndFluxList(req, cb) {
        const resp = new DescribeBillBandwidthAndFluxListResponse();
        this.request("DescribeBillBandwidthAndFluxList", req, resp, cb);
    }
    /**
     * 停止使用某个直播域名。
     * @param {ForbidLiveDomainRequest} req
     * @param {function(string, ForbidLiveDomainResponse):void} cb
     * @public
     */
    ForbidLiveDomain(req, cb) {
        const resp = new ForbidLiveDomainResponse();
        this.request("ForbidLiveDomain", req, resp, cb);
    }
    /**
     * 创建转码规则，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     * @param {CreateLiveTranscodeRuleRequest} req
     * @param {function(string, CreateLiveTranscodeRuleResponse):void} cb
     * @public
     */
    CreateLiveTranscodeRule(req, cb) {
        const resp = new CreateLiveTranscodeRuleResponse();
        this.request("CreateLiveTranscodeRule", req, resp, cb);
    }
    /**
     * 获取水印规则列表。
     * @param {DescribeLiveWatermarkRulesRequest} req
     * @param {function(string, DescribeLiveWatermarkRulesResponse):void} cb
     * @public
     */
    DescribeLiveWatermarkRules(req, cb) {
        const resp = new DescribeLiveWatermarkRulesResponse();
        this.request("DescribeLiveWatermarkRules", req, resp, cb);
    }
    /**
     * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
     * @param {DeleteLiveRecordRequest} req
     * @param {function(string, DeleteLiveRecordResponse):void} cb
     * @public
     */
    DeleteLiveRecord(req, cb) {
        const resp = new DeleteLiveRecordResponse();
        this.request("DeleteLiveRecord", req, resp, cb);
    }
    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     * @param {CreateLiveSnapshotRuleRequest} req
     * @param {function(string, CreateLiveSnapshotRuleResponse):void} cb
     * @public
     */
    CreateLiveSnapshotRule(req, cb) {
        const resp = new CreateLiveSnapshotRuleResponse();
        this.request("CreateLiveSnapshotRule", req, resp, cb);
    }
    /**
     * 查询按省份和运营商分组的下行播放数据。
     * @param {DescribeGroupProIspPlayInfoListRequest} req
     * @param {function(string, DescribeGroupProIspPlayInfoListResponse):void} cb
     * @public
     */
    DescribeGroupProIspPlayInfoList(req, cb) {
        const resp = new DescribeGroupProIspPlayInfoListResponse();
        this.request("DescribeGroupProIspPlayInfoList", req, resp, cb);
    }
    /**
     * 输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
     * @param {DescribeAllStreamPlayInfoListRequest} req
     * @param {function(string, DescribeAllStreamPlayInfoListResponse):void} cb
     * @public
     */
    DescribeAllStreamPlayInfoList(req, cb) {
        const resp = new DescribeAllStreamPlayInfoListResponse();
        this.request("DescribeAllStreamPlayInfoList", req, resp, cb);
    }
    /**
     * 查询播放鉴权key。
     * @param {DescribeLivePlayAuthKeyRequest} req
     * @param {function(string, DescribeLivePlayAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePlayAuthKey(req, cb) {
        const resp = new DescribeLivePlayAuthKeyResponse();
        this.request("DescribeLivePlayAuthKey", req, resp, cb);
    }
    /**
     * 返回直播中、无推流或者禁播等状态
     * @param {DescribeLiveStreamStateRequest} req
     * @param {function(string, DescribeLiveStreamStateResponse):void} cb
     * @public
     */
    DescribeLiveStreamState(req, cb) {
        const resp = new DescribeLiveStreamStateResponse();
        this.request("DescribeLiveStreamState", req, resp, cb);
    }
    /**
     * 删除录制模板。
     * @param {DeleteLiveRecordTemplateRequest} req
     * @param {function(string, DeleteLiveRecordTemplateResponse):void} cb
     * @public
     */
    DeleteLiveRecordTemplate(req, cb) {
        const resp = new DeleteLiveRecordTemplateResponse();
        this.request("DeleteLiveRecordTemplate", req, resp, cb);
    }
    /**
     * 恢复延迟播放设置
     * @param {ResumeDelayLiveStreamRequest} req
     * @param {function(string, ResumeDelayLiveStreamResponse):void} cb
     * @public
     */
    ResumeDelayLiveStream(req, cb) {
        const resp = new ResumeDelayLiveStreamResponse();
        this.request("ResumeDelayLiveStream", req, resp, cb);
    }
    /**
     * 创建一个在指定时间启动、结束的录制任务，并使用指定录制模板ID对应的配置进行录制。
- 使用前提
1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 对应文档。
- 注意事项
1. 断流会结束当前录制并生成录制文件。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常录制，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的录制任务。若同一条流当前存在多个时段重叠的任务，为避免重复录制系统将启动最多3个录制任务。
3. 创建的录制任务记录在平台侧只保留3个月。
4. 当前录制任务管理API（CreateRecordTask/StopRecordTask/DeleteRecordTask）与旧API（CreateLiveRecord/StopLiveRecord/DeleteLiveRecord）不兼容，两套接口不能混用。
     * @param {CreateRecordTaskRequest} req
     * @param {function(string, CreateRecordTaskResponse):void} cb
     * @public
     */
    CreateRecordTask(req, cb) {
        const resp = new CreateRecordTaskResponse();
        this.request("CreateRecordTask", req, resp, cb);
    }
    /**
     * 创建转码模板，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     * @param {CreateLiveTranscodeTemplateRequest} req
     * @param {function(string, CreateLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateLiveTranscodeTemplate(req, cb) {
        const resp = new CreateLiveTranscodeTemplateResponse();
        this.request("CreateLiveTranscodeTemplate", req, resp, cb);
    }
    /**
     * 获取证书信息列表
     * @param {DescribeLiveCertsRequest} req
     * @param {function(string, DescribeLiveCertsResponse):void} cb
     * @public
     */
    DescribeLiveCerts(req, cb) {
        const resp = new DescribeLiveCertsResponse();
        this.request("DescribeLiveCerts", req, resp, cb);
    }
    /**
     * 启用状态为停用的直播域名。
     * @param {EnableLiveDomainRequest} req
     * @param {function(string, EnableLiveDomainResponse):void} cb
     * @public
     */
    EnableLiveDomain(req, cb) {
        const resp = new EnableLiveDomainResponse();
        this.request("EnableLiveDomain", req, resp, cb);
    }
    /**
     * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
     * @param {CancelCommonMixStreamRequest} req
     * @param {function(string, CancelCommonMixStreamResponse):void} cb
     * @public
     */
    CancelCommonMixStream(req, cb) {
        const resp = new CancelCommonMixStreamResponse();
        this.request("CancelCommonMixStream", req, resp, cb);
    }
    /**
     * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
     * @param {DescribeLivePackageInfoRequest} req
     * @param {function(string, DescribeLivePackageInfoResponse):void} cb
     * @public
     */
    DescribeLivePackageInfo(req, cb) {
        const resp = new DescribeLivePackageInfoResponse();
        this.request("DescribeLivePackageInfo", req, resp, cb);
    }
    /**
     * 创建临时拉流转推任务，目前限制添加10条任务。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     * @param {CreatePullStreamConfigRequest} req
     * @param {function(string, CreatePullStreamConfigResponse):void} cb
     * @public
     */
    CreatePullStreamConfig(req, cb) {
        const resp = new CreatePullStreamConfigResponse();
        this.request("CreatePullStreamConfig", req, resp, cb);
    }
    /**
     * 查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
     * @param {DescribeLiveStreamPushInfoListRequest} req
     * @param {function(string, DescribeLiveStreamPushInfoListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPushInfoList(req, cb) {
        const resp = new DescribeLiveStreamPushInfoListResponse();
        this.request("DescribeLiveStreamPushInfoList", req, resp, cb);
    }
    /**
     * 删除截图模板
     * @param {DeleteLiveSnapshotTemplateRequest} req
     * @param {function(string, DeleteLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteLiveSnapshotTemplate(req, cb) {
        const resp = new DeleteLiveSnapshotTemplateResponse();
        this.request("DeleteLiveSnapshotTemplate", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=live_client.js.map