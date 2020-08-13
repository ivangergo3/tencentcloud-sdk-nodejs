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
const PurgePathCacheRequest = models_1.Models.PurgePathCacheRequest;
const DescribeEcdnStatisticsRequest = models_1.Models.DescribeEcdnStatisticsRequest;
const StartEcdnDomainRequest = models_1.Models.StartEcdnDomainRequest;
const DescribeDomainsConfigResponse = models_1.Models.DescribeDomainsConfigResponse;
const Https = models_1.Models.Https;
const PurgeUrlsCacheRequest = models_1.Models.PurgeUrlsCacheRequest;
const ResourceData = models_1.Models.ResourceData;
const Cache = models_1.Models.Cache;
const ForceRedirect = models_1.Models.ForceRedirect;
const DescribePurgeQuotaResponse = models_1.Models.DescribePurgeQuotaResponse;
const DescribeEcdnDomainStatisticsResponse = models_1.Models.DescribeEcdnDomainStatisticsResponse;
const TimestampData = models_1.Models.TimestampData;
const DomainData = models_1.Models.DomainData;
const StopEcdnDomainRequest = models_1.Models.StopEcdnDomainRequest;
const Sort = models_1.Models.Sort;
const IpFreqLimit = models_1.Models.IpFreqLimit;
const DescribePurgeTasksRequest = models_1.Models.DescribePurgeTasksRequest;
const DomainFilter = models_1.Models.DomainFilter;
const DomainLogs = models_1.Models.DomainLogs;
const Hsts = models_1.Models.Hsts;
const HttpHeaderPathRule = models_1.Models.HttpHeaderPathRule;
const UpdateDomainConfigResponse = models_1.Models.UpdateDomainConfigResponse;
const DetailData = models_1.Models.DetailData;
const DescribePurgeQuotaRequest = models_1.Models.DescribePurgeQuotaRequest;
const DescribeEcdnDomainLogsResponse = models_1.Models.DescribeEcdnDomainLogsResponse;
const EcdnData = models_1.Models.EcdnData;
const UpdateDomainConfigRequest = models_1.Models.UpdateDomainConfigRequest;
const DescribeDomainsConfigRequest = models_1.Models.DescribeDomainsConfigRequest;
const ClientCert = models_1.Models.ClientCert;
const DomainBriefInfo = models_1.Models.DomainBriefInfo;
const StartEcdnDomainResponse = models_1.Models.StartEcdnDomainResponse;
const DeleteEcdnDomainResponse = models_1.Models.DeleteEcdnDomainResponse;
const StopEcdnDomainResponse = models_1.Models.StopEcdnDomainResponse;
const PurgePathCacheResponse = models_1.Models.PurgePathCacheResponse;
const PurgeUrlsCacheResponse = models_1.Models.PurgeUrlsCacheResponse;
const IpFilter = models_1.Models.IpFilter;
const AddEcdnDomainRequest = models_1.Models.AddEcdnDomainRequest;
const ResponseHeader = models_1.Models.ResponseHeader;
const DescribeDomainsResponse = models_1.Models.DescribeDomainsResponse;
const DeleteEcdnDomainRequest = models_1.Models.DeleteEcdnDomainRequest;
const DescribePurgeTasksResponse = models_1.Models.DescribePurgeTasksResponse;
const AddEcdnDomainResponse = models_1.Models.AddEcdnDomainResponse;
const PurgeTask = models_1.Models.PurgeTask;
const CacheRule = models_1.Models.CacheRule;
const DescribeEcdnStatisticsResponse = models_1.Models.DescribeEcdnStatisticsResponse;
const Origin = models_1.Models.Origin;
const ServerCert = models_1.Models.ServerCert;
const CacheKey = models_1.Models.CacheKey;
const DescribeEcdnDomainStatisticsRequest = models_1.Models.DescribeEcdnDomainStatisticsRequest;
const Quota = models_1.Models.Quota;
const DescribeEcdnDomainLogsRequest = models_1.Models.DescribeEcdnDomainLogsRequest;
const DomainDetailInfo = models_1.Models.DomainDetailInfo;
const DescribeDomainsRequest = models_1.Models.DescribeDomainsRequest;
/**
 * ecdn client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ecdn.tencentcloudapi.com", "2019-10-12", credential, region, profile);
    }
    /**
     * 本接口（AddEcdnDomain）用于创建加速域名。
     * @param {AddEcdnDomainRequest} req
     * @param {function(string, AddEcdnDomainResponse):void} cb
     * @public
     */
    AddEcdnDomain(req, cb) {
        const resp = new AddEcdnDomainResponse();
        this.request("AddEcdnDomain", req, resp, cb);
    }
    /**
     * PurgePathCache 用于批量刷新目录缓存，一次提交将返回一个刷新任务id。
     * @param {PurgePathCacheRequest} req
     * @param {function(string, PurgePathCacheResponse):void} cb
     * @public
     */
    PurgePathCache(req, cb) {
        const resp = new PurgePathCacheResponse();
        this.request("PurgePathCache", req, resp, cb);
    }
    /**
     * 本接口（StartEcdnDomain）用于启用加速域名，待启用域名必须处于已下线状态。
     * @param {StartEcdnDomainRequest} req
     * @param {function(string, StartEcdnDomainResponse):void} cb
     * @public
     */
    StartEcdnDomain(req, cb) {
        const resp = new StartEcdnDomainResponse();
        this.request("StartEcdnDomain", req, resp, cb);
    }
    /**
     * 本接口（UpdateDomainConfig）用于更新ECDN加速域名配置信息。
注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值。建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
     * @param {UpdateDomainConfigRequest} req
     * @param {function(string, UpdateDomainConfigResponse):void} cb
     * @public
     */
    UpdateDomainConfig(req, cb) {
        const resp = new UpdateDomainConfigResponse();
        this.request("UpdateDomainConfig", req, resp, cb);
    }
    /**
     * DescribePurgeTasks 用于查询刷新任务提交历史记录及执行进度。
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        const resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }
    /**
     * 本接口（DescribeEcdnDomainLogs）用于查询域名的访问日志下载地址。
     * @param {DescribeEcdnDomainLogsRequest} req
     * @param {function(string, DescribeEcdnDomainLogsResponse):void} cb
     * @public
     */
    DescribeEcdnDomainLogs(req, cb) {
        const resp = new DescribeEcdnDomainLogsResponse();
        this.request("DescribeEcdnDomainLogs", req, resp, cb);
    }
    /**
     * 本接口（DescribeDomainsConfig）用于查询CDN加速域名详细配置信息。
     * @param {DescribeDomainsConfigRequest} req
     * @param {function(string, DescribeDomainsConfigResponse):void} cb
     * @public
     */
    DescribeDomainsConfig(req, cb) {
        const resp = new DescribeDomainsConfigResponse();
        this.request("DescribeDomainsConfig", req, resp, cb);
    }
    /**
     * 查询刷新接口的用量配额。
     * @param {DescribePurgeQuotaRequest} req
     * @param {function(string, DescribePurgeQuotaResponse):void} cb
     * @public
     */
    DescribePurgeQuota(req, cb) {
        const resp = new DescribePurgeQuotaResponse();
        this.request("DescribePurgeQuota", req, resp, cb);
    }
    /**
     * PurgeUrlsCache 用于批量刷新Url，一次提交将返回一个刷新任务id。
     * @param {PurgeUrlsCacheRequest} req
     * @param {function(string, PurgeUrlsCacheResponse):void} cb
     * @public
     */
    PurgeUrlsCache(req, cb) {
        const resp = new PurgeUrlsCacheResponse();
        this.request("PurgeUrlsCache", req, resp, cb);
    }
    /**
     * 本接口（StopCdnDomain）用于停止加速域名，待停用加速域名必须处于已上线或部署中状态。
     * @param {StopEcdnDomainRequest} req
     * @param {function(string, StopEcdnDomainResponse):void} cb
     * @public
     */
    StopEcdnDomain(req, cb) {
        const resp = new StopEcdnDomainResponse();
        this.request("StopEcdnDomain", req, resp, cb);
    }
    /**
     * 本接口（DeleteEcdnDomain）用于删除指定加速域名。待删除域名必须处于已停用状态。
     * @param {DeleteEcdnDomainRequest} req
     * @param {function(string, DeleteEcdnDomainResponse):void} cb
     * @public
     */
    DeleteEcdnDomain(req, cb) {
        const resp = new DeleteEcdnDomainResponse();
        this.request("DeleteEcdnDomain", req, resp, cb);
    }
    /**
     * 本接口（DescribeDomains）用于查询CDN域名基本信息，包括项目id，状态，业务类型，创建时间，更新时间等。
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        const resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }
    /**
     * DescribeEcdnStatistics用于查询 ECDN 实时访问监控数据，支持以下指标查询：

+ 流量（单位为 byte）
+ 带宽（单位为 bps）
+ 请求数（单位为 次）
+ 响应时间（单位为ms）
+ 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
+ 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
+ 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
+ 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
     * @param {DescribeEcdnStatisticsRequest} req
     * @param {function(string, DescribeEcdnStatisticsResponse):void} cb
     * @public
     */
    DescribeEcdnStatistics(req, cb) {
        const resp = new DescribeEcdnStatisticsResponse();
        this.request("DescribeEcdnStatistics", req, resp, cb);
    }
    /**
     * 本接口（DescribeEcdnDomainStatistics）用于查询指定时间段内的域名访问统计指标
     * @param {DescribeEcdnDomainStatisticsRequest} req
     * @param {function(string, DescribeEcdnDomainStatisticsResponse):void} cb
     * @public
     */
    DescribeEcdnDomainStatistics(req, cb) {
        const resp = new DescribeEcdnDomainStatisticsResponse();
        this.request("DescribeEcdnDomainStatistics", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ecdn_client.js.map