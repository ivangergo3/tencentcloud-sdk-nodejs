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
import { AbstractModel } from "../../common/abstract_model"

/**
 * PurgePathCache请求参数结构体
 * @class
 */
class PurgePathCacheRequest extends AbstractModel {

    Paths: Array<string> | null
    
    FlushType: string | null
    
    constructor(){
        super();

        /**
         * 要刷新的目录列表，必须包含协议头部。
         */
        this.Paths = null;

        /**
         * 刷新类型，flush 代表刷新有更新的资源，delete 表示刷新全部资源。
         */
        this.FlushType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Paths: Array<string> | null;
        FlushType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Paths = 'Paths' in params ? params.Paths : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;

    }
}

/**
 * DescribeEcdnStatistics请求参数结构体
 * @class
 */
class DescribeEcdnStatisticsRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    Metrics: Array<string> | null
    
    Interval: number | null
    
    Domains: Array<string> | null
    
    Projects: Array<number> | null
    
    constructor(){
        super();

        /**
         * 查询起始时间，如：2019-12-13 00:00:00
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2019-12-13 23:59:59
         */
        this.EndTime = null;

        /**
         * 指定查询指标，支持的类型有：
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
delay：响应时间，单位为ms
2xx：返回 2xx 状态码汇总或者 2 开头状态码数据，单位为 个
3xx：返回 3xx 状态码汇总或者 3 开头状态码数据，单位为 个
4xx：返回 4xx 状态码汇总或者 4 开头状态码数据，单位为 个
5xx：返回 5xx 状态码汇总或者 5 开头状态码数据，单位为 个
static_request ： 静态请求数，单位为 次
static_flux：静态流量，单位为 byte
static_bandwidth ： 静态带宽，单位为 bps
dynamic_request：动态请求数，单位为 次
dynamic_flux：动态流量，单位为 byte
dynamic_bandwidth：动态带宽，单位为 bps
         */
        this.Metrics = null;

        /**
         * 时间粒度，支持以下几种模式：
1 天	 1，5，15，30，60，120，240，1440 
2 ~ 3 天	15，30，60，120，240，1440
4 ~ 7 天	30，60，120，240，1440
8 ~ 90 天	 60，120，240，1440
         */
        this.Interval = null;

        /**
         * 指定查询域名列表

最多可一次性查询30个加速域名。
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
         */
        this.Projects = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        Metrics: Array<string> | null;
        Interval: number | null;
        Domains: Array<string> | null;
        Projects: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Projects = 'Projects' in params ? params.Projects : null;

    }
}

/**
 * StartEcdnDomain请求参数结构体
 * @class
 */
class StartEcdnDomainRequest extends AbstractModel {

    Domain: string | null
    
    constructor(){
        super();

        /**
         * 待启用域名。
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domain: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeDomainsConfig返回参数结构体
 * @class
 */
class DescribeDomainsConfigResponse extends AbstractModel {

    Domains: Array<DomainDetailInfo> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 域名列表。
         */
        this.Domains = null;

        /**
         * 符合查询条件的域名总数，用于分页查询。
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domains: Array<DomainDetailInfo> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DomainDetailInfo();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名https配置。
 * @class
 */
class Https extends AbstractModel {

    Switch: string | null
    
    Http2: string | null
    
    OcspStapling: string | null
    
    VerifyClient: string | null
    
    CertInfo: ServerCert | null
    
    ClientCertInfo: ClientCert | null
    
    Spdy: string | null
    
    SslStatus: string | null
    
    Hsts: Hsts | null
    
    constructor(){
        super();

        /**
         * https配置开关，on或off。开启https配置的域名在部署中状态，开关保持off。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Switch = null;

        /**
         * 是否开启http2，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Http2 = null;

        /**
         * 是否开启OCSP功能，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OcspStapling = null;

        /**
         * 是否开启客户端证书校验功能，on或off，开启时必选上传客户端证书信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VerifyClient = null;

        /**
         * 服务器证书配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CertInfo = null;

        /**
         * 客户端证书配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClientCertInfo = null;

        /**
         * 是否开启Spdy，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Spdy = null;

        /**
         * https证书部署状态，closed，deploying，deployed，failed分别表示已关闭，部署中，部署成功，部署失败。不可作为入参使用。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SslStatus = null;

        /**
         * Hsts配置
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Hsts = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        Http2: string | null;
        OcspStapling: string | null;
        VerifyClient: string | null;
        CertInfo: ServerCert | null;
        ClientCertInfo: ClientCert | null;
        Spdy: string | null;
        SslStatus: string | null;
        Hsts: Hsts | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.VerifyClient = 'VerifyClient' in params ? params.VerifyClient : null;

        if (params.CertInfo) {
            let obj = new ServerCert();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }

        if (params.ClientCertInfo) {
            let obj = new ClientCert();
            obj.deserialize(params.ClientCertInfo)
            this.ClientCertInfo = obj;
        }
        this.Spdy = 'Spdy' in params ? params.Spdy : null;
        this.SslStatus = 'SslStatus' in params ? params.SslStatus : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

    }
}

/**
 * PurgeUrlsCache请求参数结构体
 * @class
 */
class PurgeUrlsCacheRequest extends AbstractModel {

    Urls: Array<string> | null
    
    constructor(){
        super();

        /**
         * 要刷新的Url列表，必须包含协议头部。
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Urls: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * 查询对象及其对应的访问明细数据
 * @class
 */
class ResourceData extends AbstractModel {

    Resource: string | null
    
    EcdnData: EcdnData | null
    
    constructor(){
        super();

        /**
         * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
         */
        this.Resource = null;

        /**
         * 资源对应的数据明细
         */
        this.EcdnData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Resource: string | null;
        EcdnData: EcdnData | null;
    }): void {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.EcdnData) {
            let obj = new EcdnData();
            obj.deserialize(params.EcdnData)
            this.EcdnData = obj;
        }

    }
}

/**
 * 缓存配置简单版本，该版本不支持设置源站未返回max-age情况下的缓存规则。
 * @class
 */
class Cache extends AbstractModel {

    CacheRules: Array<CacheRule> | null
    
    FollowOrigin: string | null
    
    constructor(){
        super();

        /**
         * 缓存配置规则数组。
         */
        this.CacheRules = null;

        /**
         * 遵循源站 Cache-Control: max-age 配置，白名单功能。
on：开启
off：关闭
开启后，未能匹配 CacheRules 规则的资源将根据源站返回的 max-age 值进行节点缓存；匹配了 CacheRules 规则的资源将按照 CacheRules 中设置的缓存过期时间在节点进行缓存
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FollowOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CacheRules: Array<CacheRule> | null;
        FollowOrigin: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new CacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

    }
}

/**
 * 访问协议强制跳转配置。
 * @class
 */
class ForceRedirect extends AbstractModel {

    Switch: string | null
    
    RedirectType: string | null
    
    RedirectStatusCode: number | null
    
    constructor(){
        super();

        /**
         * 访问协议强制跳转配置开关，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Switch = null;

        /**
         * 强制跳转访问协议类型，支持http，https，分别表示请求强制跳转http协议，请求强制跳转https协议。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RedirectType = null;

        /**
         * 强制跳转开启时返回的http状态码，支持301或302。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RedirectStatusCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        RedirectType: string | null;
        RedirectStatusCode: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectType = 'RedirectType' in params ? params.RedirectType : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * DescribePurgeQuota返回参数结构体
 * @class
 */
class DescribePurgeQuotaResponse extends AbstractModel {

    UrlPurge: Quota | null
    
    PathPurge: Quota | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * Url刷新用量及配额。
         */
        this.UrlPurge = null;

        /**
         * 目录刷新用量及配额。
         */
        this.PathPurge = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UrlPurge: Quota | null;
        PathPurge: Quota | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.UrlPurge) {
            let obj = new Quota();
            obj.deserialize(params.UrlPurge)
            this.UrlPurge = obj;
        }

        if (params.PathPurge) {
            let obj = new Quota();
            obj.deserialize(params.PathPurge)
            this.PathPurge = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEcdnDomainStatistics返回参数结构体
 * @class
 */
class DescribeEcdnDomainStatisticsResponse extends AbstractModel {

    Data: Array<DomainData> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 域名数据
         */
        this.Data = null;

        /**
         * 数量
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Data: Array<DomainData> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DomainData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 时间戳与其对应的数值
 * @class
 */
class TimestampData extends AbstractModel {

    Time: string | null
    
    Value: Array<number> | null
    
    constructor(){
        super();

        /**
         * 数据统计时间点，采用向前汇总模式
以 5 分钟粒度为例，13:35:00 时间点代表的统计数据区间为 13:35:00 至 13:39:59
         */
        this.Time = null;

        /**
         * 数据值
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Time: string | null;
        Value: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 排序类型数据结构
 * @class
 */
class DomainData extends AbstractModel {

    Resource: string | null
    
    DetailData: Array<DetailData> | null
    
    constructor(){
        super();

        /**
         * 域名
         */
        this.Resource = null;

        /**
         * 结果详情
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Resource: string | null;
        DetailData: Array<DetailData> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new DetailData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * StopEcdnDomain请求参数结构体
 * @class
 */
class StopEcdnDomainRequest extends AbstractModel {

    Domain: string | null
    
    constructor(){
        super();

        /**
         * 待停用域名。
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domain: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * 查询结果排序条件。
 * @class
 */
class Sort extends AbstractModel {

    Key: string | null
    
    Sequence: string | null
    
    constructor(){
        super();

        /**
         * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
         */
        this.Key = null;

        /**
         * asc/desc，默认desc。
         */
        this.Sequence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Key: string | null;
        Sequence: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;

    }
}

/**
 * IP限频配置。
 * @class
 */
class IpFreqLimit extends AbstractModel {

    Switch: string | null
    
    Qps: number | null
    
    constructor(){
        super();

        /**
         * IP限频配置开关，on或off。
         */
        this.Switch = null;

        /**
         * 每秒请求数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Qps = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        Qps: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Qps = 'Qps' in params ? params.Qps : null;

    }
}

/**
 * DescribePurgeTasks请求参数结构体
 * @class
 */
class DescribePurgeTasksRequest extends AbstractModel {

    PurgeType: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    TaskId: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    Keyword: string | null
    
    Status: string | null
    
    constructor(){
        super();

        /**
         * 查询刷新类型。url：查询 url 刷新记录；path：查询目录刷新记录。
         */
        this.PurgeType = null;

        /**
         * 开始时间，如2018-08-08 00:00:00。
         */
        this.StartTime = null;

        /**
         * 结束时间，如2018-08-08 23:59:59。
         */
        this.EndTime = null;

        /**
         * 提交时返回的任务 Id，查询时 TaskId 和起始时间必须指定一项。
         */
        this.TaskId = null;

        /**
         * 分页查询偏移量，默认为0（从第0条开始）。
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为20。
         */
        this.Limit = null;

        /**
         * 查询关键字，请输入域名或 http(s):// 开头完整 URL。
         */
        this.Keyword = null;

        /**
         * 查询指定任务状态，fail表示失败，done表示成功，process表示刷新中。
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PurgeType: string | null;
        StartTime: string | null;
        EndTime: string | null;
        TaskId: string | null;
        Offset: number | null;
        Limit: number | null;
        Keyword: string | null;
        Status: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 域名查询时过滤条件。
 * @class
 */
class DomainFilter extends AbstractModel {

    Name: string | null
    
    Value: Array<string> | null
    
    Fuzzy: boolean | null
    
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下：
- origin：主源站。
- domain：域名。
- resourceId：域名id。
- status：域名状态，online，offline，processing。
- disable：域名封禁状态，normal，unlicensed。
- projectId：项目ID。
- fullUrlCache：全路径缓存，on或off。
- https：是否配置https，on，off或processing。
- originPullProtocol：回源协议类型，支持http，follow或https。
- area：加速区域，支持mainland，overseas或global。
         */
        this.Name = null;

        /**
         * 过滤字段值。
         */
        this.Value = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名为origin，domain。
         */
        this.Fuzzy = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: Array<string> | null;
        Fuzzy: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * 域名日志信息
 * @class
 */
class DomainLogs extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    LogPath: string | null
    
    constructor(){
        super();

        /**
         * 日志起始时间。
         */
        this.StartTime = null;

        /**
         * 日志结束时间。
         */
        this.EndTime = null;

        /**
         * 日志下载路径。
         */
        this.LogPath = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        LogPath: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;

    }
}

/**
 * HSTS 配置。
 * @class
 */
class Hsts extends AbstractModel {

    Switch: string | null
    
    MaxAge: number | null
    
    IncludeSubDomains: string | null
    
    constructor(){
        super();

        /**
         * 是否开启，on或off。
         */
        this.Switch = null;

        /**
         * MaxAge数值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MaxAge = null;

        /**
         * 是否包含子域名，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IncludeSubDomains = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        MaxAge: number | null;
        IncludeSubDomains: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxAge = 'MaxAge' in params ? params.MaxAge : null;
        this.IncludeSubDomains = 'IncludeSubDomains' in params ? params.IncludeSubDomains : null;

    }
}

/**
 * 分路径的http头部设置规则。
 * @class
 */
class HttpHeaderPathRule extends AbstractModel {

    HeaderMode: string | null
    
    HeaderName: string | null
    
    HeaderValue: string | null
    
    RuleType: string | null
    
    RulePaths: Array<string> | null
    
    constructor(){
        super();

        /**
         * http头部设置方式，支持add，set或del，分别表示新增，设置或删除头部。
请求头部暂不支持set。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HeaderMode = null;

        /**
         * http头部名称。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HeaderName = null;

        /**
         * http头部值。del时可不填写该字段。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HeaderValue = null;

        /**
         * 生效的url路径规则类型，支持all，file，directory或path，分别表示全部路径，文件后缀类型，目录或绝对路径生效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RuleType = null;

        /**
         * url路径或文件类型列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HeaderMode: string | null;
        HeaderName: string | null;
        HeaderValue: string | null;
        RuleType: string | null;
        RulePaths: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.HeaderMode = 'HeaderMode' in params ? params.HeaderMode : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * UpdateDomainConfig返回参数结构体
 * @class
 */
class UpdateDomainConfigResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 排序类型的数据结构
 * @class
 */
class DetailData extends AbstractModel {

    Name: string | null
    
    Value: number | null
    
    constructor(){
        super();

        /**
         * 数据类型的名称
         */
        this.Name = null;

        /**
         * 数据值
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribePurgeQuota请求参数结构体
 * @class
 */
class DescribePurgeQuotaRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeEcdnDomainLogs返回参数结构体
 * @class
 */
class DescribeEcdnDomainLogsResponse extends AbstractModel {

    DomainLogs: Array<DomainLogs> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 日志链接列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DomainLogs = null;

        /**
         * 日志链接总条数。
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DomainLogs: Array<DomainLogs> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.DomainLogs) {
            this.DomainLogs = new Array();
            for (let z in params.DomainLogs) {
                let obj = new DomainLogs();
                obj.deserialize(params.DomainLogs[z]);
                this.DomainLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 访问明细数据类型
 * @class
 */
class EcdnData extends AbstractModel {

    Metrics: Array<string> | null
    
    DetailData: Array<TimestampData> | null
    
    constructor(){
        super();

        /**
         * 查询指定的指标名称：Bandwidth，Flux，Request，Delay，状态码，LogBandwidth，LogFlux，LogRequest
         */
        this.Metrics = null;

        /**
         * 明细数据组合
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Metrics: Array<string> | null;
        DetailData: Array<TimestampData> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Metrics = 'Metrics' in params ? params.Metrics : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TimestampData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * UpdateDomainConfig请求参数结构体
 * @class
 */
class UpdateDomainConfigRequest extends AbstractModel {

    Domain: string | null
    
    Origin: Origin | null
    
    ProjectId: number | null
    
    IpFilter: IpFilter | null
    
    IpFreqLimit: IpFreqLimit | null
    
    ResponseHeader: ResponseHeader | null
    
    CacheKey: CacheKey | null
    
    Cache: Cache | null
    
    Https: Https | null
    
    ForceRedirect: ForceRedirect | null
    
    Area: string | null
    
    constructor(){
        super();

        /**
         * 域名。
         */
        this.Domain = null;

        /**
         * 源站配置。
         */
        this.Origin = null;

        /**
         * 项目id。
         */
        this.ProjectId = null;

        /**
         * IP黑白名单配置。
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
         */
        this.IpFreqLimit = null;

        /**
         * 源站响应头部配置。
         */
        this.ResponseHeader = null;

        /**
         * 节点缓存配置。
         */
        this.CacheKey = null;

        /**
         * 缓存规则配置。
         */
        this.Cache = null;

        /**
         * Https配置。
         */
        this.Https = null;

        /**
         * 访问协议强制跳转配置。
         */
        this.ForceRedirect = null;

        /**
         * 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domain: string | null;
        Origin: Origin | null;
        ProjectId: number | null;
        IpFilter: IpFilter | null;
        IpFreqLimit: IpFreqLimit | null;
        ResponseHeader: ResponseHeader | null;
        CacheKey: CacheKey | null;
        Cache: Cache | null;
        Https: Https | null;
        ForceRedirect: ForceRedirect | null;
        Area: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeDomainsConfig请求参数结构体
 * @class
 */
class DescribeDomainsConfigRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    Filters: Array<DomainFilter> | null
    
    Sort: Sort | null
    
    constructor(){
        super();

        /**
         * 分页查询的偏移地址，默认0。
         */
        this.Offset = null;

        /**
         * 分页查询的域名个数，默认100。
         */
        this.Limit = null;

        /**
         * 查询条件过滤器。
         */
        this.Filters = null;

        /**
         * 查询结果排序规则。
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
        Filters: Array<DomainFilter> | null;
        Sort: Sort | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new Sort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * https客户端证书配置。
 * @class
 */
class ClientCert extends AbstractModel {

    Certificate: string | null
    
    CertName: string | null
    
    ExpireTime: string | null
    
    DeployTime: string | null
    
    constructor(){
        super();

        /**
         * 客户端证书，pem格式。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Certificate = null;

        /**
         * 客户端证书名称。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CertName = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExpireTime = null;

        /**
         * 证书颁发时间。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeployTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Certificate: string | null;
        CertName: string | null;
        ExpireTime: string | null;
        DeployTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;

    }
}

/**
 * CDN域名简要信息。
 * @class
 */
class DomainBriefInfo extends AbstractModel {

    ResourceId: string | null
    
    AppId: number | null
    
    Domain: string | null
    
    Cname: string | null
    
    Status: string | null
    
    ProjectId: number | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    Origin: Origin | null
    
    Disable: string | null
    
    Area: string | null
    
    Readonly: string | null
    
    constructor(){
        super();

        /**
         * 域名ID。
         */
        this.ResourceId = null;

        /**
         * 腾讯云账号ID。
         */
        this.AppId = null;

        /**
         * CDN加速域名。
         */
        this.Domain = null;

        /**
         * 域名CName。
         */
        this.Cname = null;

        /**
         * 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。
         */
        this.Status = null;

        /**
         * 项目ID。
         */
        this.ProjectId = null;

        /**
         * 域名创建时间。
         */
        this.CreateTime = null;

        /**
         * 域名更新时间。
         */
        this.UpdateTime = null;

        /**
         * 源站配置详情。
         */
        this.Origin = null;

        /**
         * 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读
         */
        this.Disable = null;

        /**
         * 加速区域，mainland，oversea或global。
         */
        this.Area = null;

        /**
         * 域名锁定状态，normal、global，分别表示未被锁定、全球锁定。
         */
        this.Readonly = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResourceId: string | null;
        AppId: number | null;
        Domain: string | null;
        Cname: string | null;
        Status: string | null;
        ProjectId: number | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        Origin: Origin | null;
        Disable: string | null;
        Area: string | null;
        Readonly: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

    }
}

/**
 * StartEcdnDomain返回参数结构体
 * @class
 */
class StartEcdnDomainResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEcdnDomain返回参数结构体
 * @class
 */
class DeleteEcdnDomainResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopEcdnDomain返回参数结构体
 * @class
 */
class StopEcdnDomainResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurgePathCache返回参数结构体
 * @class
 */
class PurgePathCacheResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 刷新任务Id，前十位为提交任务时的UTC时间。
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurgeUrlsCache返回参数结构体
 * @class
 */
class PurgeUrlsCacheResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 刷新任务Id，前十位为提交任务时的UTC时间。
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP黑白名单。
 * @class
 */
class IpFilter extends AbstractModel {

    Switch: string | null
    
    FilterType: string | null
    
    Filters: Array<string> | null
    
    constructor(){
        super();

        /**
         * IP黑白名单开关，on或off。
         */
        this.Switch = null;

        /**
         * IP黑白名单类型，whitelist或blacklist。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FilterType = null;

        /**
         * IP黑白名单列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        FilterType: string | null;
        Filters: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filters = 'Filters' in params ? params.Filters : null;

    }
}

/**
 * AddEcdnDomain请求参数结构体
 * @class
 */
class AddEcdnDomainRequest extends AbstractModel {

    Domain: string | null
    
    Origin: Origin | null
    
    Area: string | null
    
    ProjectId: number | null
    
    IpFilter: IpFilter | null
    
    IpFreqLimit: IpFreqLimit | null
    
    ResponseHeader: ResponseHeader | null
    
    CacheKey: CacheKey | null
    
    Cache: Cache | null
    
    Https: Https | null
    
    ForceRedirect: ForceRedirect | null
    
    constructor(){
        super();

        /**
         * 域名。
         */
        this.Domain = null;

        /**
         * 源站配置。
         */
        this.Origin = null;

        /**
         * 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。
         */
        this.Area = null;

        /**
         * 项目id，默认0。
         */
        this.ProjectId = null;

        /**
         * IP黑白名单配置。
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
         */
        this.IpFreqLimit = null;

        /**
         * 源站响应头部配置。
         */
        this.ResponseHeader = null;

        /**
         * 节点缓存配置。
         */
        this.CacheKey = null;

        /**
         * 缓存规则配置。
         */
        this.Cache = null;

        /**
         * Https配置。
         */
        this.Https = null;

        /**
         * 访问协议强制跳转配置。
         */
        this.ForceRedirect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domain: string | null;
        Origin: Origin | null;
        Area: string | null;
        ProjectId: number | null;
        IpFilter: IpFilter | null;
        IpFreqLimit: IpFreqLimit | null;
        ResponseHeader: ResponseHeader | null;
        CacheKey: CacheKey | null;
        Cache: Cache | null;
        Https: Https | null;
        ForceRedirect: ForceRedirect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

    }
}

/**
 * 自定义响应头配置。
 * @class
 */
class ResponseHeader extends AbstractModel {

    Switch: string | null
    
    HeaderRules: Array<HttpHeaderPathRule> | null
    
    constructor(){
        super();

        /**
         * 自定义响应头开关，on或off。
         */
        this.Switch = null;

        /**
         * 自定义响应头规则数组。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HeaderRules = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        HeaderRules: Array<HttpHeaderPathRule> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.HeaderRules) {
            this.HeaderRules = new Array();
            for (let z in params.HeaderRules) {
                let obj = new HttpHeaderPathRule();
                obj.deserialize(params.HeaderRules[z]);
                this.HeaderRules.push(obj);
            }
        }

    }
}

/**
 * DescribeDomains返回参数结构体
 * @class
 */
class DescribeDomainsResponse extends AbstractModel {

    Domains: Array<DomainBriefInfo> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 域名信息列表。
         */
        this.Domains = null;

        /**
         * 域名总个数。
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domains: Array<DomainBriefInfo> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DomainBriefInfo();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEcdnDomain请求参数结构体
 * @class
 */
class DeleteEcdnDomainRequest extends AbstractModel {

    Domain: string | null
    
    constructor(){
        super();

        /**
         * 待删除域名。
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domain: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribePurgeTasks返回参数结构体
 * @class
 */
class DescribePurgeTasksResponse extends AbstractModel {

    PurgeLogs: Array<PurgeTask> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 刷新历史记录。
         */
        this.PurgeLogs = null;

        /**
         * 任务总数，用于分页。
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PurgeLogs: Array<PurgeTask> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PurgeLogs) {
            this.PurgeLogs = new Array();
            for (let z in params.PurgeLogs) {
                let obj = new PurgeTask();
                obj.deserialize(params.PurgeLogs[z]);
                this.PurgeLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEcdnDomain返回参数结构体
 * @class
 */
class AddEcdnDomainResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 刷新任务日志详情
 * @class
 */
class PurgeTask extends AbstractModel {

    TaskId: string | null
    
    Url: string | null
    
    Status: string | null
    
    PurgeType: string | null
    
    FlushType: string | null
    
    CreateTime: string | null
    
    constructor(){
        super();

        /**
         * 刷新任务ID。
         */
        this.TaskId = null;

        /**
         * 刷新Url。
         */
        this.Url = null;

        /**
         * 刷新任务状态，fail表示失败，done表示成功，process表示刷新中。
         */
        this.Status = null;

        /**
         * 刷新类型，url表示url刷新，path表示目录刷新。
         */
        this.PurgeType = null;

        /**
         * 刷新资源方式，flush代表刷新更新资源，delete代表刷新全部资源。
         */
        this.FlushType = null;

        /**
         * 刷新任务提交时间
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Url: string | null;
        Status: string | null;
        PurgeType: string | null;
        FlushType: string | null;
        CreateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 缓存配置规则。
 * @class
 */
class CacheRule extends AbstractModel {

    CacheType: string | null
    
    CacheContents: Array<string> | null
    
    CacheTime: number | null
    
    constructor(){
        super();

        /**
         * 缓存类型，支持all，file，directory，path，index，分别表示全部文件，后缀类型，目录，完整路径，首页。
         */
        this.CacheType = null;

        /**
         * 缓存内容列表。
         */
        this.CacheContents = null;

        /**
         * 缓存时间，单位秒。
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CacheType: string | null;
        CacheContents: Array<string> | null;
        CacheTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CacheType = 'CacheType' in params ? params.CacheType : null;
        this.CacheContents = 'CacheContents' in params ? params.CacheContents : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * DescribeEcdnStatistics返回参数结构体
 * @class
 */
class DescribeEcdnStatisticsResponse extends AbstractModel {

    Data: Array<ResourceData> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 指定条件查询得到的数据明细
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Data: Array<ResourceData> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 源站配置。
 * @class
 */
class Origin extends AbstractModel {

    Origins: Array<string> | null
    
    OriginType: string | null
    
    ServerName: string | null
    
    OriginPullProtocol: string | null
    
    BackupOrigins: Array<string> | null
    
    BackupOriginType: string | null
    
    constructor(){
        super();

        /**
         * 主源站列表，默认格式为 ["ip1:port1", "ip2:port2"]。
支持在源站列表中配置权重，配置IP源站权重格式为 ["ip1:port1:weight1", "ip2:port2:weight2"]。
         */
        this.Origins = null;

        /**
         * 主源站类型，支持domain，ip，分别表示域名源站，ip源站。
设置Origins时必须填写。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OriginType = null;

        /**
         * 回源时Host头部值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ServerName = null;

        /**
         * 回源协议类型，支持http，follow，https，分别表示强制http回源，协议跟随回源，https回源。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OriginPullProtocol = null;

        /**
         * 备份源站列表。
         */
        this.BackupOrigins = null;

        /**
         * 备份源站类型，同OriginType。
设置BackupOrigins时必须填写。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BackupOriginType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Origins: Array<string> | null;
        OriginType: string | null;
        ServerName: string | null;
        OriginPullProtocol: string | null;
        BackupOrigins: Array<string> | null;
        BackupOriginType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Origins = 'Origins' in params ? params.Origins : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;
        this.BackupOrigins = 'BackupOrigins' in params ? params.BackupOrigins : null;
        this.BackupOriginType = 'BackupOriginType' in params ? params.BackupOriginType : null;

    }
}

/**
 * https服务端证书配置。
 * @class
 */
class ServerCert extends AbstractModel {

    CertId: string | null
    
    CertName: string | null
    
    Certificate: string | null
    
    PrivateKey: string | null
    
    ExpireTime: string | null
    
    DeployTime: string | null
    
    Message: string | null
    
    constructor(){
        super();

        /**
         * 服务器证书id，当证书为腾讯云托管证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CertId = null;

        /**
         * 服务器证书名称，当证书为腾讯云托管证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CertName = null;

        /**
         * 服务器证书信息，上传自有证书时必填，必须包含完整的证书链信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Certificate = null;

        /**
         * 服务器密钥信息，上传自有证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PrivateKey = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExpireTime = null;

        /**
         * 证书颁发时间。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeployTime = null;

        /**
         * 证书备注信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CertId: string | null;
        CertName: string | null;
        Certificate: string | null;
        PrivateKey: string | null;
        ExpireTime: string | null;
        DeployTime: string | null;
        Message: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 缓存相关配置。
 * @class
 */
class CacheKey extends AbstractModel {

    FullUrlCache: string | null
    
    constructor(){
        super();

        /**
         * 是否开启全路径缓存，on或off。
         */
        this.FullUrlCache = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FullUrlCache: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;

    }
}

/**
 * DescribeEcdnDomainStatistics请求参数结构体
 * @class
 */
class DescribeEcdnDomainStatisticsRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    Metrics: Array<string> | null
    
    Domains: Array<string> | null
    
    Projects: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 查询起始时间，如：2019-12-13 00:00:00。
起止时间不超过90天。
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2019-12-13 23:59:59。
起止时间不超过90天。
         */
        this.EndTime = null;

        /**
         * 统计指标名称。flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
delay：响应时间，单位为ms
static_request ： 静态请求数，单位为 次
static_flux：静态流量，单位为 byte
static_bandwidth ： 静态带宽，单位为 bps
dynamic_request：动态请求数，单位为 次
dynamic_flux：动态流量，单位为 byte
dynamic_bandwidth：动态带宽，单位为 bps
         */
        this.Metrics = null;

        /**
         * 指定查询域名列表
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
         */
        this.Projects = null;

        /**
         * 列表分页起始地址，默认0。
         */
        this.Offset = null;

        /**
         * 列表分页记录条数，默认1000，最大3000。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        Metrics: Array<string> | null;
        Domains: Array<string> | null;
        Projects: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Projects = 'Projects' in params ? params.Projects : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 刷新用量及刷新配额
 * @class
 */
class Quota extends AbstractModel {

    Batch: number | null
    
    Total: number | null
    
    Available: number | null
    
    constructor(){
        super();

        /**
         * 单次批量提交配额上限。
         */
        this.Batch = null;

        /**
         * 每日提交配额上限。
         */
        this.Total = null;

        /**
         * 每日剩余的可提交配额。
         */
        this.Available = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Batch: number | null;
        Total: number | null;
        Available: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Batch = 'Batch' in params ? params.Batch : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Available = 'Available' in params ? params.Available : null;

    }
}

/**
 * DescribeEcdnDomainLogs请求参数结构体
 * @class
 */
class DescribeEcdnDomainLogsRequest extends AbstractModel {

    Domain: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 待查询域名。
         */
        this.Domain = null;

        /**
         * 日志起始时间。如：2019-10-01 00:00:00
         */
        this.StartTime = null;

        /**
         * 日志结束时间，只支持最近30天内日志查询。2019-10-02 00:00:00
         */
        this.EndTime = null;

        /**
         * 日志链接列表分页起始地址，默认0。
         */
        this.Offset = null;

        /**
         * 日志链接列表分页记录条数，默认100，最大1000。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domain: string | null;
        StartTime: string | null;
        EndTime: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ECDN域名详细配置信息。
 * @class
 */
class DomainDetailInfo extends AbstractModel {

    ResourceId: string | null
    
    AppId: number | null
    
    Domain: string | null
    
    Cname: string | null
    
    Status: string | null
    
    ProjectId: number | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    Origin: Origin | null
    
    IpFilter: IpFilter | null
    
    IpFreqLimit: IpFreqLimit | null
    
    ResponseHeader: ResponseHeader | null
    
    CacheKey: CacheKey | null
    
    Cache: Cache | null
    
    Https: Https | null
    
    Disable: string | null
    
    ForceRedirect: ForceRedirect | null
    
    Area: string | null
    
    Readonly: string | null
    
    constructor(){
        super();

        /**
         * 域名ID。
         */
        this.ResourceId = null;

        /**
         * 腾讯云账号ID。
         */
        this.AppId = null;

        /**
         * 加速域名。
         */
        this.Domain = null;

        /**
         * 域名CName。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Cname = null;

        /**
         * 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。
         */
        this.Status = null;

        /**
         * 项目ID。
         */
        this.ProjectId = null;

        /**
         * 域名创建时间。
         */
        this.CreateTime = null;

        /**
         * 域名更新时间。
         */
        this.UpdateTime = null;

        /**
         * 源站配置。
         */
        this.Origin = null;

        /**
         * IP黑白名单配置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IpFreqLimit = null;

        /**
         * 源站响应头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ResponseHeader = null;

        /**
         * 节点缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CacheKey = null;

        /**
         * 缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Cache = null;

        /**
         * Https配置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Https = null;

        /**
         * 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Disable = null;

        /**
         * 访问协议强制跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ForceRedirect = null;

        /**
         * 加速区域，mainland，overseas或global。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Area = null;

        /**
         * 域名锁定状态，normal、global 分别表示未被锁定，全球锁定。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Readonly = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResourceId: string | null;
        AppId: number | null;
        Domain: string | null;
        Cname: string | null;
        Status: string | null;
        ProjectId: number | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        Origin: Origin | null;
        IpFilter: IpFilter | null;
        IpFreqLimit: IpFreqLimit | null;
        ResponseHeader: ResponseHeader | null;
        CacheKey: CacheKey | null;
        Cache: Cache | null;
        Https: Https | null;
        Disable: string | null;
        ForceRedirect: ForceRedirect | null;
        Area: string | null;
        Readonly: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

    }
}

/**
 * DescribeDomains请求参数结构体
 * @class
 */
class DescribeDomainsRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    Filters: Array<DomainFilter> | null
    
    constructor(){
        super();

        /**
         * 分页查询的偏移地址，默认0。
         */
        this.Offset = null;

        /**
         * 分页查询的域名个数，默认100，最大支持1000。
         */
        this.Limit = null;

        /**
         * 查询条件过滤器。
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
        Filters: Array<DomainFilter> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

export const Models = {
    PurgePathCacheRequest: PurgePathCacheRequest,
    DescribeEcdnStatisticsRequest: DescribeEcdnStatisticsRequest,
    StartEcdnDomainRequest: StartEcdnDomainRequest,
    DescribeDomainsConfigResponse: DescribeDomainsConfigResponse,
    Https: Https,
    PurgeUrlsCacheRequest: PurgeUrlsCacheRequest,
    ResourceData: ResourceData,
    Cache: Cache,
    ForceRedirect: ForceRedirect,
    DescribePurgeQuotaResponse: DescribePurgeQuotaResponse,
    DescribeEcdnDomainStatisticsResponse: DescribeEcdnDomainStatisticsResponse,
    TimestampData: TimestampData,
    DomainData: DomainData,
    StopEcdnDomainRequest: StopEcdnDomainRequest,
    Sort: Sort,
    IpFreqLimit: IpFreqLimit,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    DomainFilter: DomainFilter,
    DomainLogs: DomainLogs,
    Hsts: Hsts,
    HttpHeaderPathRule: HttpHeaderPathRule,
    UpdateDomainConfigResponse: UpdateDomainConfigResponse,
    DetailData: DetailData,
    DescribePurgeQuotaRequest: DescribePurgeQuotaRequest,
    DescribeEcdnDomainLogsResponse: DescribeEcdnDomainLogsResponse,
    EcdnData: EcdnData,
    UpdateDomainConfigRequest: UpdateDomainConfigRequest,
    DescribeDomainsConfigRequest: DescribeDomainsConfigRequest,
    ClientCert: ClientCert,
    DomainBriefInfo: DomainBriefInfo,
    StartEcdnDomainResponse: StartEcdnDomainResponse,
    DeleteEcdnDomainResponse: DeleteEcdnDomainResponse,
    StopEcdnDomainResponse: StopEcdnDomainResponse,
    PurgePathCacheResponse: PurgePathCacheResponse,
    PurgeUrlsCacheResponse: PurgeUrlsCacheResponse,
    IpFilter: IpFilter,
    AddEcdnDomainRequest: AddEcdnDomainRequest,
    ResponseHeader: ResponseHeader,
    DescribeDomainsResponse: DescribeDomainsResponse,
    DeleteEcdnDomainRequest: DeleteEcdnDomainRequest,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    AddEcdnDomainResponse: AddEcdnDomainResponse,
    PurgeTask: PurgeTask,
    CacheRule: CacheRule,
    DescribeEcdnStatisticsResponse: DescribeEcdnStatisticsResponse,
    Origin: Origin,
    ServerCert: ServerCert,
    CacheKey: CacheKey,
    DescribeEcdnDomainStatisticsRequest: DescribeEcdnDomainStatisticsRequest,
    Quota: Quota,
    DescribeEcdnDomainLogsRequest: DescribeEcdnDomainLogsRequest,
    DomainDetailInfo: DomainDetailInfo,
    DescribeDomainsRequest: DescribeDomainsRequest,

}
