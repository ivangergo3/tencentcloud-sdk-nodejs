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
const DescribeCdnDomainLogsResponse = models_1.Models.DescribeCdnDomainLogsResponse;
const DescribeCdnDomainLogsRequest = models_1.Models.DescribeCdnDomainLogsRequest;
const Compression = models_1.Models.Compression;
const Revalidate = models_1.Models.Revalidate;
const ResourceData = models_1.Models.ResourceData;
const UrlRecord = models_1.Models.UrlRecord;
const DescribePushQuotaResponse = models_1.Models.DescribePushQuotaResponse;
const DescribePurgeQuotaResponse = models_1.Models.DescribePurgeQuotaResponse;
const Authentication = models_1.Models.Authentication;
const ImageOptimization = models_1.Models.ImageOptimization;
const Https = models_1.Models.Https;
const ReportData = models_1.Models.ReportData;
const DescribeTrafficPackagesRequest = models_1.Models.DescribeTrafficPackagesRequest;
const CreateClsLogTopicResponse = models_1.Models.CreateClsLogTopicResponse;
const PurgePathCacheResponse = models_1.Models.PurgePathCacheResponse;
const DomainFilter = models_1.Models.DomainFilter;
const SpecificConfig = models_1.Models.SpecificConfig;
const FollowRedirect = models_1.Models.FollowRedirect;
const RequestHeader = models_1.Models.RequestHeader;
const DescribePurgeQuotaRequest = models_1.Models.DescribePurgeQuotaRequest;
const Referer = models_1.Models.Referer;
const UserAgentFilter = models_1.Models.UserAgentFilter;
const AdvanceCacheRule = models_1.Models.AdvanceCacheRule;
const EnableClsLogTopicRequest = models_1.Models.EnableClsLogTopicRequest;
const UpdateImageConfigResponse = models_1.Models.UpdateImageConfigResponse;
const DeleteCdnDomainRequest = models_1.Models.DeleteCdnDomainRequest;
const DescribePayTypeResponse = models_1.Models.DescribePayTypeResponse;
const ListTopDataRequest = models_1.Models.ListTopDataRequest;
const ListClsTopicDomainsRequest = models_1.Models.ListClsTopicDomainsRequest;
const DescribeDomainsResponse = models_1.Models.DescribeDomainsResponse;
const UpdateImageConfigRequest = models_1.Models.UpdateImageConfigRequest;
const CreateClsLogTopicRequest = models_1.Models.CreateClsLogTopicRequest;
const CompressionRule = models_1.Models.CompressionRule;
const GuetzliAdapter = models_1.Models.GuetzliAdapter;
const Origin = models_1.Models.Origin;
const TopData = models_1.Models.TopData;
const EnableCachesRequest = models_1.Models.EnableCachesRequest;
const Quota = models_1.Models.Quota;
const HeaderKey = models_1.Models.HeaderKey;
const DescribeBillingDataRequest = models_1.Models.DescribeBillingDataRequest;
const SimpleCache = models_1.Models.SimpleCache;
const DeleteClsLogTopicRequest = models_1.Models.DeleteClsLogTopicRequest;
const UpdatePayTypeResponse = models_1.Models.UpdatePayTypeResponse;
const TopicInfo = models_1.Models.TopicInfo;
const DescribeDomainsConfigResponse = models_1.Models.DescribeDomainsConfigResponse;
const BriefDomain = models_1.Models.BriefDomain;
const UpdatePayTypeRequest = models_1.Models.UpdatePayTypeRequest;
const TpgAdapter = models_1.Models.TpgAdapter;
const DescribeReportDataResponse = models_1.Models.DescribeReportDataResponse;
const DisableClsLogTopicRequest = models_1.Models.DisableClsLogTopicRequest;
const ListClsTopicDomainsResponse = models_1.Models.ListClsTopicDomainsResponse;
const TrafficPackage = models_1.Models.TrafficPackage;
const DescribeCdnIpRequest = models_1.Models.DescribeCdnIpRequest;
const Ipv6 = models_1.Models.Ipv6;
const StatusCodeCache = models_1.Models.StatusCodeCache;
const DescribeIpVisitResponse = models_1.Models.DescribeIpVisitResponse;
const EnableClsLogTopicResponse = models_1.Models.EnableClsLogTopicResponse;
const ListClsLogTopicsResponse = models_1.Models.ListClsLogTopicsResponse;
const OverseaConfig = models_1.Models.OverseaConfig;
const AddCdnDomainRequest = models_1.Models.AddCdnDomainRequest;
const UserAgentFilterRule = models_1.Models.UserAgentFilterRule;
const TopDetailData = models_1.Models.TopDetailData;
const ErrorPage = models_1.Models.ErrorPage;
const MaxAgeRule = models_1.Models.MaxAgeRule;
const DescribePayTypeRequest = models_1.Models.DescribePayTypeRequest;
const DescribeCertDomainsRequest = models_1.Models.DescribeCertDomainsRequest;
const DescribeDomainsConfigRequest = models_1.Models.DescribeDomainsConfigRequest;
const AdvancedCache = models_1.Models.AdvancedCache;
const WebpAdapter = models_1.Models.WebpAdapter;
const StartCdnDomainRequest = models_1.Models.StartCdnDomainRequest;
const MapInfo = models_1.Models.MapInfo;
const DescribeCertDomainsResponse = models_1.Models.DescribeCertDomainsResponse;
const AuthenticationTypeD = models_1.Models.AuthenticationTypeD;
const AuthenticationTypeC = models_1.Models.AuthenticationTypeC;
const AuthenticationTypeB = models_1.Models.AuthenticationTypeB;
const AuthenticationTypeA = models_1.Models.AuthenticationTypeA;
const DescribePushTasksResponse = models_1.Models.DescribePushTasksResponse;
const ResourceOriginData = models_1.Models.ResourceOriginData;
const IpStatus = models_1.Models.IpStatus;
const AddCdnDomainResponse = models_1.Models.AddCdnDomainResponse;
const DownstreamCapping = models_1.Models.DownstreamCapping;
const ServerCert = models_1.Models.ServerCert;
const AccessControlRule = models_1.Models.AccessControlRule;
const HttpHeaderPathRule = models_1.Models.HttpHeaderPathRule;
const DisableCachesRequest = models_1.Models.DisableCachesRequest;
const SimpleCacheRule = models_1.Models.SimpleCacheRule;
const DisableClsLogTopicResponse = models_1.Models.DisableClsLogTopicResponse;
const Hsts = models_1.Models.Hsts;
const DescribeIpStatusRequest = models_1.Models.DescribeIpStatusRequest;
const DetailDomain = models_1.Models.DetailDomain;
const GetDisableRecordsResponse = models_1.Models.GetDisableRecordsResponse;
const ResponseHeader = models_1.Models.ResponseHeader;
const CdnIpHistory = models_1.Models.CdnIpHistory;
const SummarizedData = models_1.Models.SummarizedData;
const ManageClsTopicDomainsRequest = models_1.Models.ManageClsTopicDomainsRequest;
const Cache = models_1.Models.Cache;
const ForceRedirect = models_1.Models.ForceRedirect;
const DescribeOriginDataRequest = models_1.Models.DescribeOriginDataRequest;
const RangeOriginPull = models_1.Models.RangeOriginPull;
const ViolationUrl = models_1.Models.ViolationUrl;
const SearchClsLogResponse = models_1.Models.SearchClsLogResponse;
const PushUrlsCacheRequest = models_1.Models.PushUrlsCacheRequest;
const MainlandConfig = models_1.Models.MainlandConfig;
const DescribeReportDataRequest = models_1.Models.DescribeReportDataRequest;
const DescribePushTasksRequest = models_1.Models.DescribePushTasksRequest;
const DescribeUrlViolationsRequest = models_1.Models.DescribeUrlViolationsRequest;
const RefererRule = models_1.Models.RefererRule;
const IpFreqLimit = models_1.Models.IpFreqLimit;
const DomainAreaConfig = models_1.Models.DomainAreaConfig;
const CacheOptResult = models_1.Models.CacheOptResult;
const StopCdnDomainRequest = models_1.Models.StopCdnDomainRequest;
const DescribeMapInfoResponse = models_1.Models.DescribeMapInfoResponse;
const DescribeTrafficPackagesResponse = models_1.Models.DescribeTrafficPackagesResponse;
const DescribeMapInfoRequest = models_1.Models.DescribeMapInfoRequest;
const EnableCachesResponse = models_1.Models.EnableCachesResponse;
const DescribeIpVisitRequest = models_1.Models.DescribeIpVisitRequest;
const StatusCodeCacheRule = models_1.Models.StatusCodeCacheRule;
const ClientCert = models_1.Models.ClientCert;
const DomainLog = models_1.Models.DomainLog;
const GetDisableRecordsRequest = models_1.Models.GetDisableRecordsRequest;
const PurgeUrlsCacheResponse = models_1.Models.PurgeUrlsCacheResponse;
const DeleteClsLogTopicResponse = models_1.Models.DeleteClsLogTopicResponse;
const DescribeBillingDataResponse = models_1.Models.DescribeBillingDataResponse;
const DisableCachesResponse = models_1.Models.DisableCachesResponse;
const SchemeKey = models_1.Models.SchemeKey;
const DescribeImageConfigRequest = models_1.Models.DescribeImageConfigRequest;
const DescribeCdnIpResponse = models_1.Models.DescribeCdnIpResponse;
const DescribeCdnDataResponse = models_1.Models.DescribeCdnDataResponse;
const DescribeIpStatusResponse = models_1.Models.DescribeIpStatusResponse;
const AccessControl = models_1.Models.AccessControl;
const CacheKey = models_1.Models.CacheKey;
const CookieKey = models_1.Models.CookieKey;
const CappingRule = models_1.Models.CappingRule;
const ListClsLogTopicsRequest = models_1.Models.ListClsLogTopicsRequest;
const Seo = models_1.Models.Seo;
const BandwidthAlert = models_1.Models.BandwidthAlert;
const ClsLogObject = models_1.Models.ClsLogObject;
const RegionMapRelation = models_1.Models.RegionMapRelation;
const PurgePathCacheRequest = models_1.Models.PurgePathCacheRequest;
const CdnData = models_1.Models.CdnData;
const PurgeUrlsCacheRequest = models_1.Models.PurgeUrlsCacheRequest;
const OriginPullOptimization = models_1.Models.OriginPullOptimization;
const PushTask = models_1.Models.PushTask;
const TimestampData = models_1.Models.TimestampData;
const StartCdnDomainResponse = models_1.Models.StartCdnDomainResponse;
const DescribePushQuotaRequest = models_1.Models.DescribePushQuotaRequest;
const ResponseHeaderCache = models_1.Models.ResponseHeaderCache;
const ResourceBillingData = models_1.Models.ResourceBillingData;
const Sort = models_1.Models.Sort;
const DescribePurgeTasksRequest = models_1.Models.DescribePurgeTasksRequest;
const PushUrlsCacheResponse = models_1.Models.PushUrlsCacheResponse;
const StopCdnDomainResponse = models_1.Models.StopCdnDomainResponse;
const QueryStringKey = models_1.Models.QueryStringKey;
const ListTopDataResponse = models_1.Models.ListTopDataResponse;
const MaxAge = models_1.Models.MaxAge;
const UpdateDomainConfigResponse = models_1.Models.UpdateDomainConfigResponse;
const LogSetInfo = models_1.Models.LogSetInfo;
const SecurityConfig = models_1.Models.SecurityConfig;
const SearchClsLogRequest = models_1.Models.SearchClsLogRequest;
const UpdateDomainConfigRequest = models_1.Models.UpdateDomainConfigRequest;
const AwsPrivateAccess = models_1.Models.AwsPrivateAccess;
const ManageClsTopicDomainsResponse = models_1.Models.ManageClsTopicDomainsResponse;
const VideoSeek = models_1.Models.VideoSeek;
const Compatibility = models_1.Models.Compatibility;
const ClsSearchLogs = models_1.Models.ClsSearchLogs;
const DescribeUrlViolationsResponse = models_1.Models.DescribeUrlViolationsResponse;
const IpFilter = models_1.Models.IpFilter;
const DescribePurgeTasksResponse = models_1.Models.DescribePurgeTasksResponse;
const ErrorPageRule = models_1.Models.ErrorPageRule;
const DescribeOriginDataResponse = models_1.Models.DescribeOriginDataResponse;
const PurgeTask = models_1.Models.PurgeTask;
const OriginPullTimeout = models_1.Models.OriginPullTimeout;
const DeleteCdnDomainResponse = models_1.Models.DeleteCdnDomainResponse;
const CdnIp = models_1.Models.CdnIp;
const DescribeCdnDataRequest = models_1.Models.DescribeCdnDataRequest;
const DescribeImageConfigResponse = models_1.Models.DescribeImageConfigResponse;
const CacheTagKey = models_1.Models.CacheTagKey;
const DescribeDomainsRequest = models_1.Models.DescribeDomainsRequest;
/**
 * cdn client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cdn.tencentcloudapi.com", "2018-06-06", credential, region, profile);
    }
    /**
     * DescribeIpStatus 用于查询域名所在加速平台的边缘节点、回源节点明细。注意事项：边缘节点（edge）尚未全量开放，未在内测名单中的账号不支持调用
     * @param {DescribeIpStatusRequest} req
     * @param {function(string, DescribeIpStatusResponse):void} cb
     * @public
     */
    DescribeIpStatus(req, cb) {
        const resp = new DescribeIpStatusResponse();
        this.request("DescribeIpStatus", req, resp, cb);
    }
    /**
     * DescribeMapInfo 用于查询省份对应的 ID，运营商对应的 ID 信息。
     * @param {DescribeMapInfoRequest} req
     * @param {function(string, DescribeMapInfoResponse):void} cb
     * @public
     */
    DescribeMapInfo(req, cb) {
        const resp = new DescribeMapInfoResponse();
        this.request("DescribeMapInfo", req, resp, cb);
    }
    /**
     * DeleteCdnDomain 用于删除指定加速域名
     * @param {DeleteCdnDomainRequest} req
     * @param {function(string, DeleteCdnDomainResponse):void} cb
     * @public
     */
    DeleteCdnDomain(req, cb) {
        const resp = new DeleteCdnDomainResponse();
        this.request("DeleteCdnDomain", req, resp, cb);
    }
    /**
     * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 PurgePathCache 与 PurgeUrlsCache 接口提交的任务均可通过此接口进行查询。
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        const resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }
    /**
     * DescribePayType 用于查询用户的计费类型，计费周期等信息。
     * @param {DescribePayTypeRequest} req
     * @param {function(string, DescribePayTypeResponse):void} cb
     * @public
     */
    DescribePayType(req, cb) {
        const resp = new DescribePayTypeResponse();
        this.request("DescribePayType", req, resp, cb);
    }
    /**
     * DescribeDomainsConfig 用于查询内容分发网络加速域名（含境内、境外）的所有配置信息。
     * @param {DescribeDomainsConfigRequest} req
     * @param {function(string, DescribeDomainsConfigResponse):void} cb
     * @public
     */
    DescribeDomainsConfig(req, cb) {
        const resp = new DescribeDomainsConfigResponse();
        this.request("DescribeDomainsConfig", req, resp, cb);
    }
    /**
     * AddCdnDomain 用于新增内容分发网络加速域名。
     * @param {AddCdnDomainRequest} req
     * @param {function(string, AddCdnDomainResponse):void} cb
     * @public
     */
    AddCdnDomain(req, cb) {
        const resp = new AddCdnDomainResponse();
        this.request("AddCdnDomain", req, resp, cb);
    }
    /**
     * DescribeIpVisit 用于查询 5 分钟活跃用户数，及日活跃用户数明细

+ 5 分钟活跃用户数：根据日志中客户端 IP，5 分钟粒度去重统计
+ 日活跃用户数：根据日志中客户端 IP，按天粒度去重统计
     * @param {DescribeIpVisitRequest} req
     * @param {function(string, DescribeIpVisitResponse):void} cb
     * @public
     */
    DescribeIpVisit(req, cb) {
        const resp = new DescribeIpVisitResponse();
        this.request("DescribeIpVisit", req, resp, cb);
    }
    /**
     * DescribeCdnData 用于查询 CDN 实时访问监控数据，支持以下指标查询：

+ 流量（单位为 byte）
+ 带宽（单位为 bps）
+ 请求数（单位为 次）
+ 流量命中率（单位为 %，小数点后保留两位）
+ 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
+ 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
+ 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
+ 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
     * @param {DescribeCdnDataRequest} req
     * @param {function(string, DescribeCdnDataResponse):void} cb
     * @public
     */
    DescribeCdnData(req, cb) {
        const resp = new DescribeCdnDataResponse();
        this.request("DescribeCdnData", req, resp, cb);
    }
    /**
     * DisableCaches 用于禁用 CDN 上指定 URL 的访问，禁用完成后，全网访问会直接返回 403。（接口尚在内测中，暂未全量开放使用）
     * @param {DisableCachesRequest} req
     * @param {function(string, DisableCachesResponse):void} cb
     * @public
     */
    DisableCaches(req, cb) {
        const resp = new DisableCachesResponse();
        this.request("DisableCaches", req, resp, cb);
    }
    /**
     * DescribeDomains 用于查询内容分发网络加速域名（含境内、境外）基本配置信息，包括项目ID、服务状态，业务类型、创建时间、更新时间等信息。
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        const resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }
    /**
     * ManageClsTopicDomains 用于管理某日志主题下绑定的域名列表。
     * @param {ManageClsTopicDomainsRequest} req
     * @param {function(string, ManageClsTopicDomainsResponse):void} cb
     * @public
     */
    ManageClsTopicDomains(req, cb) {
        const resp = new ManageClsTopicDomainsResponse();
        this.request("ManageClsTopicDomains", req, resp, cb);
    }
    /**
     * StartCdnDomain 用于启用已停用域名的加速服务
     * @param {StartCdnDomainRequest} req
     * @param {function(string, StartCdnDomainResponse):void} cb
     * @public
     */
    StartCdnDomain(req, cb) {
        const resp = new StartCdnDomainResponse();
        this.request("StartCdnDomain", req, resp, cb);
    }
    /**
     * StopCdnDomain 用于停止域名的加速服务。
注意：停止加速服务后，访问至加速节点的请求将会直接返回 404。为避免对您的业务造成影响，请在停止加速服务前将解析切走。
     * @param {StopCdnDomainRequest} req
     * @param {function(string, StopCdnDomainResponse):void} cb
     * @public
     */
    StopCdnDomain(req, cb) {
        const resp = new StopCdnDomainResponse();
        this.request("StopCdnDomain", req, resp, cb);
    }
    /**
     * DescribePurgeQuota 用于查询账户刷新配额和每日可用量。
     * @param {DescribePurgeQuotaRequest} req
     * @param {function(string, DescribePurgeQuotaResponse):void} cb
     * @public
     */
    DescribePurgeQuota(req, cb) {
        const resp = new DescribePurgeQuotaResponse();
        this.request("DescribePurgeQuota", req, resp, cb);
    }
    /**
     * DescribeImageConfig 用于获取域名图片优化的当前配置，支持Webp、TPG 和 Guetzli。
     * @param {DescribeImageConfigRequest} req
     * @param {function(string, DescribeImageConfigResponse):void} cb
     * @public
     */
    DescribeImageConfig(req, cb) {
        const resp = new DescribeImageConfigResponse();
        this.request("DescribeImageConfig", req, resp, cb);
    }
    /**
     * SearchClsLog 用于 CLS 日志检索。支持检索今天，24小时（可选近7中的某一天），近7天的日志数据。
     * @param {SearchClsLogRequest} req
     * @param {function(string, SearchClsLogResponse):void} cb
     * @public
     */
    SearchClsLog(req, cb) {
        const resp = new SearchClsLogResponse();
        this.request("SearchClsLog", req, resp, cb);
    }
    /**
     * ListTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：

+ 依据总流量、总请求数对访问 URL 排序，从大至小返回 TOP 1000 URL
+ 依据总流量、总请求数对客户端省份排序，从大至小返回省份列表
+ 依据总流量、总请求数对客户端运营商排序，从大至小返回运营商列表
+ 依据总流量、峰值带宽、总请求数、平均命中率、2XX/3XX/4XX/5XX 状态码对域名排序，从大至小返回域名列表
+ 依据总回源流量、回源峰值带宽、总回源请求数、平均回源失败率、2XX/3XX/4XX/5XX 回源状态码对域名排序，从大至小返回域名列表

注意：仅支持 90 天内数据查询
     * @param {ListTopDataRequest} req
     * @param {function(string, ListTopDataResponse):void} cb
     * @public
     */
    ListTopData(req, cb) {
        const resp = new ListTopDataResponse();
        this.request("ListTopData", req, resp, cb);
    }
    /**
     * DescribeOriginData 用于查询 CDN 实时回源监控数据，支持以下指标查询：

+ 回源流量（单位为 byte）
+ 回源带宽（单位为 bps）
+ 回源请求数（单位为 次）
+ 回源失败请求数（单位为 次）
+ 回源失败率（单位为 %，小数点后保留两位）
+ 回源状态码 2xx 汇总及各 2 开头回源状态码明细（单位为 个）
+ 回源状态码 3xx 汇总及各 3 开头回源状态码明细（单位为 个）
+ 回源状态码 4xx 汇总及各 4 开头回源状态码明细（单位为 个）
+ 回源状态码 5xx 汇总及各 5 开头回源状态码明细（单位为 个）
     * @param {DescribeOriginDataRequest} req
     * @param {function(string, DescribeOriginDataResponse):void} cb
     * @public
     */
    DescribeOriginData(req, cb) {
        const resp = new DescribeOriginDataResponse();
        this.request("DescribeOriginData", req, resp, cb);
    }
    /**
     * DescribeCdnIp 用于查询 CDN IP 归属。
（注意：此接口请求频率限制以 CDN 侧限制为准：200次/10分钟）
     * @param {DescribeCdnIpRequest} req
     * @param {function(string, DescribeCdnIpResponse):void} cb
     * @public
     */
    DescribeCdnIp(req, cb) {
        const resp = new DescribeCdnIpResponse();
        this.request("DescribeCdnIp", req, resp, cb);
    }
    /**
     * PurgePathCache 用于批量提交目录刷新，根据域名的加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日目录刷新额度为各 100 条，每次最多可提交 20 条。
     * @param {PurgePathCacheRequest} req
     * @param {function(string, PurgePathCacheResponse):void} cb
     * @public
     */
    PurgePathCache(req, cb) {
        const resp = new PurgePathCacheResponse();
        this.request("PurgePathCache", req, resp, cb);
    }
    /**
     * DescribeUrlViolations 用于查询被 CDN 系统扫描到的域名违规 URL 列表及当前状态。
对应内容分发网络控制台【图片鉴黄】页面。
     * @param {DescribeUrlViolationsRequest} req
     * @param {function(string, DescribeUrlViolationsResponse):void} cb
     * @public
     */
    DescribeUrlViolations(req, cb) {
        const resp = new DescribeUrlViolationsResponse();
        this.request("DescribeUrlViolations", req, resp, cb);
    }
    /**
     * PurgeUrlsCache 用于批量提交 URL 进行刷新，根据 URL 中域名的当前加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日 URL 刷新额度各为 10000 条，每次最多可提交 1000 条。
     * @param {PurgeUrlsCacheRequest} req
     * @param {function(string, PurgeUrlsCacheResponse):void} cb
     * @public
     */
    PurgeUrlsCache(req, cb) {
        const resp = new PurgeUrlsCacheResponse();
        this.request("PurgeUrlsCache", req, resp, cb);
    }
    /**
     * DescribeTrafficPackages 用于查询中国境内 CDN 流量包详情。
     * @param {DescribeTrafficPackagesRequest} req
     * @param {function(string, DescribeTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeTrafficPackages(req, cb) {
        const resp = new DescribeTrafficPackagesResponse();
        this.request("DescribeTrafficPackages", req, resp, cb);
    }
    /**
     * UpdateDomainConfig 用于修改内容分发网络加速域名配置信息
注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值，建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
     * @param {UpdateDomainConfigRequest} req
     * @param {function(string, UpdateDomainConfigResponse):void} cb
     * @public
     */
    UpdateDomainConfig(req, cb) {
        const resp = new UpdateDomainConfigResponse();
        this.request("UpdateDomainConfig", req, resp, cb);
    }
    /**
     * DescribeCdnDomainLogs 用于查询访问日志下载地址，仅支持 30 天以内的境内、境外访问日志下载链接查询。
     * @param {DescribeCdnDomainLogsRequest} req
     * @param {function(string, DescribeCdnDomainLogsResponse):void} cb
     * @public
     */
    DescribeCdnDomainLogs(req, cb) {
        const resp = new DescribeCdnDomainLogsResponse();
        this.request("DescribeCdnDomainLogs", req, resp, cb);
    }
    /**
     * DescribePushTasks  用于查询预热任务提交历史记录及执行进度。
接口灰度中，暂未全量开放，敬请期待。
     * @param {DescribePushTasksRequest} req
     * @param {function(string, DescribePushTasksResponse):void} cb
     * @public
     */
    DescribePushTasks(req, cb) {
        const resp = new DescribePushTasksResponse();
        this.request("DescribePushTasks", req, resp, cb);
    }
    /**
     * DescribeCertDomains 用于校验SSL证书并提取证书中包含的域名。
     * @param {DescribeCertDomainsRequest} req
     * @param {function(string, DescribeCertDomainsResponse):void} cb
     * @public
     */
    DescribeCertDomains(req, cb) {
        const resp = new DescribeCertDomainsResponse();
        this.request("DescribeCertDomains", req, resp, cb);
    }
    /**
     * CreatClsLogTopic 用于创建日志主题。注意：一个日志集下至多可创建10个日志主题。
     * @param {CreateClsLogTopicRequest} req
     * @param {function(string, CreateClsLogTopicResponse):void} cb
     * @public
     */
    CreateClsLogTopic(req, cb) {
        const resp = new CreateClsLogTopicResponse();
        this.request("CreateClsLogTopic", req, resp, cb);
    }
    /**
     * PushUrlsCache 用于将指定 URL 资源列表加载至 CDN 节点，支持指定加速区域预热。
默认情况下境内、境外每日预热 URL 限额为各 1000 条，每次最多可提交 20 条。
接口灰度中，暂未全量开放，敬请期待。
     * @param {PushUrlsCacheRequest} req
     * @param {function(string, PushUrlsCacheResponse):void} cb
     * @public
     */
    PushUrlsCache(req, cb) {
        const resp = new PushUrlsCacheResponse();
        this.request("PushUrlsCache", req, resp, cb);
    }
    /**
     * UpdateImageConfig 用于更新控制台图片优化的相关配置，支持Webp、TPG 和 Guetzli。
     * @param {UpdateImageConfigRequest} req
     * @param {function(string, UpdateImageConfigResponse):void} cb
     * @public
     */
    UpdateImageConfig(req, cb) {
        const resp = new UpdateImageConfigResponse();
        this.request("UpdateImageConfig", req, resp, cb);
    }
    /**
     * DisableClsLogTopic 用于停止日志主题投递。注意：停止后，所有绑定该日志主题域名的日志将不再继续投递至该主题，已经投递的日志将会继续保留。生效时间约为 5~15 分钟。

     * @param {DisableClsLogTopicRequest} req
     * @param {function(string, DisableClsLogTopicResponse):void} cb
     * @public
     */
    DisableClsLogTopic(req, cb) {
        const resp = new DisableClsLogTopicResponse();
        this.request("DisableClsLogTopic", req, resp, cb);
    }
    /**
     * ListClsTopicDomains 用于获取某日志主题下绑定的域名列表。
     * @param {ListClsTopicDomainsRequest} req
     * @param {function(string, ListClsTopicDomainsResponse):void} cb
     * @public
     */
    ListClsTopicDomains(req, cb) {
        const resp = new ListClsTopicDomainsResponse();
        this.request("ListClsTopicDomains", req, resp, cb);
    }
    /**
     * ListClsLogTopics 用于显示日志主题列表。注意：一个日志集下至多含10个日志主题。
     * @param {ListClsLogTopicsRequest} req
     * @param {function(string, ListClsLogTopicsResponse):void} cb
     * @public
     */
    ListClsLogTopics(req, cb) {
        const resp = new ListClsLogTopicsResponse();
        this.request("ListClsLogTopics", req, resp, cb);
    }
    /**
     * GetDisableRecords 用于查询资源禁用历史，及 URL 当前状态。（接口尚在内测中，暂未全量开放使用）
     * @param {GetDisableRecordsRequest} req
     * @param {function(string, GetDisableRecordsResponse):void} cb
     * @public
     */
    GetDisableRecords(req, cb) {
        const resp = new GetDisableRecordsResponse();
        this.request("GetDisableRecords", req, resp, cb);
    }
    /**
     * DeleteClsLogTopic 用于删除日志主题。注意：删除后，所有该日志主题下绑定域名的日志将不再继续投递至该主题，已经投递的日志将会被全部清空。生效时间约为 5~15 分钟。
     * @param {DeleteClsLogTopicRequest} req
     * @param {function(string, DeleteClsLogTopicResponse):void} cb
     * @public
     */
    DeleteClsLogTopic(req, cb) {
        const resp = new DeleteClsLogTopicResponse();
        this.request("DeleteClsLogTopic", req, resp, cb);
    }
    /**
     * DescribeBillingData 用于查询实际计费数据明细。
     * @param {DescribeBillingDataRequest} req
     * @param {function(string, DescribeBillingDataResponse):void} cb
     * @public
     */
    DescribeBillingData(req, cb) {
        const resp = new DescribeBillingDataResponse();
        this.request("DescribeBillingData", req, resp, cb);
    }
    /**
     * DescribePushQuota  用于查询预热配额和每日可用量。
     * @param {DescribePushQuotaRequest} req
     * @param {function(string, DescribePushQuotaResponse):void} cb
     * @public
     */
    DescribePushQuota(req, cb) {
        const resp = new DescribePushQuotaResponse();
        this.request("DescribePushQuota", req, resp, cb);
    }
    /**
     * EnableClsLogTopic 用于启动日志主题投递。注意：启动后，所有绑定该日志主题域名的日志将继续投递至该主题。生效时间约为 5~15 分钟。
     * @param {EnableClsLogTopicRequest} req
     * @param {function(string, EnableClsLogTopicResponse):void} cb
     * @public
     */
    EnableClsLogTopic(req, cb) {
        const resp = new EnableClsLogTopicResponse();
        this.request("EnableClsLogTopic", req, resp, cb);
    }
    /**
     * DescribeReportData 用于查询域名/项目维度的日/周/月报表数据。
     * @param {DescribeReportDataRequest} req
     * @param {function(string, DescribeReportDataResponse):void} cb
     * @public
     */
    DescribeReportData(req, cb) {
        const resp = new DescribeReportDataResponse();
        this.request("DescribeReportData", req, resp, cb);
    }
    /**
     * 本接口(UpdatePayType)用于修改账号计费类型，暂不支持月结用户或子账号修改。
     * @param {UpdatePayTypeRequest} req
     * @param {function(string, UpdatePayTypeResponse):void} cb
     * @public
     */
    UpdatePayType(req, cb) {
        const resp = new UpdatePayTypeResponse();
        this.request("UpdatePayType", req, resp, cb);
    }
    /**
     * EnableCaches 用于解禁手工封禁的 URL，解禁成功后，全网生效时间约 5~10 分钟。（接口尚在内测中，暂未全量开放使用）
     * @param {EnableCachesRequest} req
     * @param {function(string, EnableCachesResponse):void} cb
     * @public
     */
    EnableCaches(req, cb) {
        const resp = new EnableCachesResponse();
        this.request("EnableCaches", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cdn_client.js.map