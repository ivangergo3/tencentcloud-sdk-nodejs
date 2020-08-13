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
 * ModifySiteAttribute请求参数结构体
 * @class
 */
class ModifySiteAttributeRequest extends AbstractModel {

    SiteId: number | null
    
    Name: string | null
    
    NeedLogin: number | null
    
    LoginCookie: string | null
    
    LoginCheckUrl: string | null
    
    LoginCheckKw: string | null
    
    ScanDisallow: string | null
    
    constructor(){
        super();

        /**
         * 站点ID
         */
        this.SiteId = null;

        /**
         * 站点名称
         */
        this.Name = null;

        /**
         * 网站是否需要登录扫描：0-未知；-1-不需要；1-需要
         */
        this.NeedLogin = null;

        /**
         * 登录后的cookie
         */
        this.LoginCookie = null;

        /**
         * 用于测试cookie是否有效的URL
         */
        this.LoginCheckUrl = null;

        /**
         * 用于测试cookie是否有效的关键字
         */
        this.LoginCheckKw = null;

        /**
         * 禁止扫描器扫描的目录关键字
         */
        this.ScanDisallow = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteId: number | null;
        Name: string | null;
        NeedLogin: number | null;
        LoginCookie: string | null;
        LoginCheckUrl: string | null;
        LoginCheckKw: string | null;
        ScanDisallow: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedLogin = 'NeedLogin' in params ? params.NeedLogin : null;
        this.LoginCookie = 'LoginCookie' in params ? params.LoginCookie : null;
        this.LoginCheckUrl = 'LoginCheckUrl' in params ? params.LoginCheckUrl : null;
        this.LoginCheckKw = 'LoginCheckKw' in params ? params.LoginCheckKw : null;
        this.ScanDisallow = 'ScanDisallow' in params ? params.ScanDisallow : null;

    }
}

/**
 * 监控任务详细数据
 * @class
 */
class MonitorsDetail extends AbstractModel {

    Basic: Monitor | null
    
    Sites: Array<MonitorMiniSite> | null
    
    SiteNumber: number | null
    
    ImpactSites: Array<MonitorMiniSite> | null
    
    ImpactSiteNumber: number | null
    
    VulsHighNumber: number | null
    
    VulsMiddleNumber: number | null
    
    VulsLowNumber: number | null
    
    VulsNoticeNumber: number | null
    
    Progress: number | null
    
    PageCount: number | null
    
    ContentNumber: number | null
    
    constructor(){
        super();

        /**
         * 监控任务基础信息。
         */
        this.Basic = null;

        /**
         * 监控任务包含的站点列表。
         */
        this.Sites = null;

        /**
         * 监控任务包含的站点列表数量。
         */
        this.SiteNumber = null;

        /**
         * 监控任务包含的受漏洞威胁的站点列表。
         */
        this.ImpactSites = null;

        /**
         * 监控任务包含的受漏洞威胁的站点列表数量。
         */
        this.ImpactSiteNumber = null;

        /**
         * 高风险漏洞数量。
         */
        this.VulsHighNumber = null;

        /**
         * 中风险漏洞数量。
         */
        this.VulsMiddleNumber = null;

        /**
         * 低风险漏洞数量。
         */
        this.VulsLowNumber = null;

        /**
         * 提示数量。
         */
        this.VulsNoticeNumber = null;

        /**
         * 监控任务包含的站点列表的平均扫描进度。
         */
        this.Progress = null;

        /**
         * 扫描页面总数。
         */
        this.PageCount = null;

        /**
         * 内容检测数量。
         */
        this.ContentNumber = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Basic: Monitor | null;
        Sites: Array<MonitorMiniSite> | null;
        SiteNumber: number | null;
        ImpactSites: Array<MonitorMiniSite> | null;
        ImpactSiteNumber: number | null;
        VulsHighNumber: number | null;
        VulsMiddleNumber: number | null;
        VulsLowNumber: number | null;
        VulsNoticeNumber: number | null;
        Progress: number | null;
        PageCount: number | null;
        ContentNumber: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Basic) {
            let obj = new Monitor();
            obj.deserialize(params.Basic)
            this.Basic = obj;
        }

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }
        this.SiteNumber = 'SiteNumber' in params ? params.SiteNumber : null;

        if (params.ImpactSites) {
            this.ImpactSites = new Array();
            for (let z in params.ImpactSites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.ImpactSites[z]);
                this.ImpactSites.push(obj);
            }
        }
        this.ImpactSiteNumber = 'ImpactSiteNumber' in params ? params.ImpactSiteNumber : null;
        this.VulsHighNumber = 'VulsHighNumber' in params ? params.VulsHighNumber : null;
        this.VulsMiddleNumber = 'VulsMiddleNumber' in params ? params.VulsMiddleNumber : null;
        this.VulsLowNumber = 'VulsLowNumber' in params ? params.VulsLowNumber : null;
        this.VulsNoticeNumber = 'VulsNoticeNumber' in params ? params.VulsNoticeNumber : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.PageCount = 'PageCount' in params ? params.PageCount : null;
        this.ContentNumber = 'ContentNumber' in params ? params.ContentNumber : null;

    }
}

/**
 * DescribeSites返回参数结构体
 * @class
 */
class DescribeSitesResponse extends AbstractModel {

    TotalCount: number | null
    
    Sites: Array<Site> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 站点数量。
         */
        this.TotalCount = null;

        /**
         * 站点信息列表。
         */
        this.Sites = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        Sites: Array<Site> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new Site();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonitors返回参数结构体
 * @class
 */
class DescribeMonitorsResponse extends AbstractModel {

    Monitors: Array<MonitorsDetail> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 监控任务列表。
         */
        this.Monitors = null;

        /**
         * 监控任务数量。
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
        Monitors: Array<MonitorsDetail> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Monitors) {
            this.Monitors = new Array();
            for (let z in params.Monitors) {
                let obj = new MonitorsDetail();
                obj.deserialize(params.Monitors[z]);
                this.Monitors.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSites请求参数结构体
 * @class
 */
class DeleteSitesRequest extends AbstractModel {

    SiteIds: Array<number> | null
    
    constructor(){
        super();

        /**
         * 站点ID列表
         */
        this.SiteIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteIds: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;

    }
}

/**
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends AbstractModel {

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
 * DescribeVuls请求参数结构体
 * @class
 */
class DescribeVulsRequest extends AbstractModel {

    SiteId: number | null
    
    MonitorId: number | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 站点ID
         */
        this.SiteId = null;

        /**
         * 监控任务ID
         */
        this.MonitorId = null;

        /**
         * 过滤条件
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteId: number | null;
        MonitorId: number | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyConfigAttribute返回参数结构体
 * @class
 */
class ModifyConfigAttributeResponse extends AbstractModel {

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
 * CreateSites返回参数结构体
 * @class
 */
class CreateSitesResponse extends AbstractModel {

    Number: number | null
    
    Sites: Array<MiniSite> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 新增站点数。
         */
        this.Number = null;

        /**
         * 站点数组
         */
        this.Sites = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Number: number | null;
        Sites: Array<MiniSite> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Number = 'Number' in params ? params.Number : null;

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new MiniSite();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulsNumber请求参数结构体
 * @class
 */
class DescribeVulsNumberRequest extends AbstractModel {

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
 * ModifyMonitorAttribute返回参数结构体
 * @class
 */
class ModifyMonitorAttributeResponse extends AbstractModel {

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
 * ModifySiteAttribute返回参数结构体
 * @class
 */
class ModifySiteAttributeResponse extends AbstractModel {

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
 * CreateVulsReport请求参数结构体
 * @class
 */
class CreateVulsReportRequest extends AbstractModel {

    SiteId: number | null
    
    MonitorId: number | null
    
    constructor(){
        super();

        /**
         * 站点ID
         */
        this.SiteId = null;

        /**
         * 监控任务ID
         */
        this.MonitorId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteId: number | null;
        MonitorId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;

    }
}

/**
 * CreateSitesScans返回参数结构体
 * @class
 */
class CreateSitesScansResponse extends AbstractModel {

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
 * 站点验证数据
 * @class
 */
class SitesVerification extends AbstractModel {

    Domain: string | null
    
    TxtName: string | null
    
    TxtText: string | null
    
    ValidTo: string | null
    
    VerifyStatus: number | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    Id: number | null
    
    Appid: number | null
    
    VerifyUrl: string | null
    
    VerifyFileUrl: string | null
    
    constructor(){
        super();

        /**
         * 根域名。
         */
        this.Domain = null;

        /**
         * txt解析域名验证的name。
         */
        this.TxtName = null;

        /**
         * txt解析域名验证的text。
         */
        this.TxtText = null;

        /**
         * 验证有效期，在此之前有效。
         */
        this.ValidTo = null;

        /**
         * 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。
         */
        this.VerifyStatus = null;

        /**
         * CreatedAt。
         */
        this.CreatedAt = null;

        /**
         * UpdatedAt。
         */
        this.UpdatedAt = null;

        /**
         * ID。
         */
        this.Id = null;

        /**
         * 云用户appid
         */
        this.Appid = null;

        /**
         * 用于验证站点的url，即访问该url获取验证数据。
         */
        this.VerifyUrl = null;

        /**
         * 获取验证验证文件的url。
         */
        this.VerifyFileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Domain: string | null;
        TxtName: string | null;
        TxtText: string | null;
        ValidTo: string | null;
        VerifyStatus: number | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        Id: number | null;
        Appid: number | null;
        VerifyUrl: string | null;
        VerifyFileUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.TxtName = 'TxtName' in params ? params.TxtName : null;
        this.TxtText = 'TxtText' in params ? params.TxtText : null;
        this.ValidTo = 'ValidTo' in params ? params.ValidTo : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.VerifyUrl = 'VerifyUrl' in params ? params.VerifyUrl : null;
        this.VerifyFileUrl = 'VerifyFileUrl' in params ? params.VerifyFileUrl : null;

    }
}

/**
 * DescribeSiteQuota返回参数结构体
 * @class
 */
class DescribeSiteQuotaResponse extends AbstractModel {

    Total: number | null
    
    Used: number | null
    
    Available: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 已购买的扫描次数。
         */
        this.Total = null;

        /**
         * 已使用的扫描次数。
         */
        this.Used = null;

        /**
         * 剩余可用的扫描次数。
         */
        this.Available = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Total: number | null;
        Used: number | null;
        Available: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Used = 'Used' in params ? params.Used : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulsNumber返回参数结构体
 * @class
 */
class DescribeVulsNumberResponse extends AbstractModel {

    ImpactSiteNumber: number | null
    
    SiteNumber: number | null
    
    VulsHighNumber: number | null
    
    VulsMiddleNumber: number | null
    
    VulsLowNumber: number | null
    
    VulsNoticeNumber: number | null
    
    PageCount: number | null
    
    Sites: Array<MonitorMiniSite> | null
    
    ImpactSites: Array<MonitorMiniSite> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 受影响的网站总数。
         */
        this.ImpactSiteNumber = null;

        /**
         * 已验证的网站总数。
         */
        this.SiteNumber = null;

        /**
         * 高风险漏洞总数。
         */
        this.VulsHighNumber = null;

        /**
         * 中风险漏洞总数。
         */
        this.VulsMiddleNumber = null;

        /**
         * 低高风险漏洞总数。
         */
        this.VulsLowNumber = null;

        /**
         * 风险提示总数。
         */
        this.VulsNoticeNumber = null;

        /**
         * 扫描页面总数。
         */
        this.PageCount = null;

        /**
         * 已验证的网站列表。
         */
        this.Sites = null;

        /**
         * 受影响的网站列表。
         */
        this.ImpactSites = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImpactSiteNumber: number | null;
        SiteNumber: number | null;
        VulsHighNumber: number | null;
        VulsMiddleNumber: number | null;
        VulsLowNumber: number | null;
        VulsNoticeNumber: number | null;
        PageCount: number | null;
        Sites: Array<MonitorMiniSite> | null;
        ImpactSites: Array<MonitorMiniSite> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImpactSiteNumber = 'ImpactSiteNumber' in params ? params.ImpactSiteNumber : null;
        this.SiteNumber = 'SiteNumber' in params ? params.SiteNumber : null;
        this.VulsHighNumber = 'VulsHighNumber' in params ? params.VulsHighNumber : null;
        this.VulsMiddleNumber = 'VulsMiddleNumber' in params ? params.VulsMiddleNumber : null;
        this.VulsLowNumber = 'VulsLowNumber' in params ? params.VulsLowNumber : null;
        this.VulsNoticeNumber = 'VulsNoticeNumber' in params ? params.VulsNoticeNumber : null;
        this.PageCount = 'PageCount' in params ? params.PageCount : null;

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }

        if (params.ImpactSites) {
            this.ImpactSites = new Array();
            for (let z in params.ImpactSites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.ImpactSites[z]);
                this.ImpactSites.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVulsMisinformation请求参数结构体
 * @class
 */
class CreateVulsMisinformationRequest extends AbstractModel {

    VulIds: Array<number> | null
    
    constructor(){
        super();

        /**
         * 漏洞ID列表
         */
        this.VulIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VulIds: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VulIds = 'VulIds' in params ? params.VulIds : null;

    }
}

/**
 * DescribeVulsNumberTimeline请求参数结构体
 * @class
 */
class DescribeVulsNumberTimelineRequest extends AbstractModel {

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
 * 监控任务中的站点信息。
 * @class
 */
class MonitorMiniSite extends AbstractModel {

    SiteId: number | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 站点ID。
         */
        this.SiteId = null;

        /**
         * 站点Url。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteId: number | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CreateSitesScans请求参数结构体
 * @class
 */
class CreateSitesScansRequest extends AbstractModel {

    SiteIds: Array<number> | null
    
    ScannerType: string | null
    
    RateLimit: number | null
    
    constructor(){
        super();

        /**
         * 站点的ID列表
         */
        this.SiteIds = null;

        /**
         * 扫描模式，normal-正常扫描；deep-深度扫描
         */
        this.ScannerType = null;

        /**
         * 扫描速率限制，每秒发送X个HTTP请求
         */
        this.RateLimit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteIds: Array<number> | null;
        ScannerType: string | null;
        RateLimit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;

    }
}

/**
 * CreateMonitors返回参数结构体
 * @class
 */
class CreateMonitorsResponse extends AbstractModel {

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
 * DescribeVuls返回参数结构体
 * @class
 */
class DescribeVulsResponse extends AbstractModel {

    TotalCount: number | null
    
    Vuls: Array<Vul> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 漏洞数量。
         */
        this.TotalCount = null;

        /**
         * 漏洞信息列表。
         */
        this.Vuls = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        Vuls: Array<Vul> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Vuls) {
            this.Vuls = new Array();
            for (let z in params.Vuls) {
                let obj = new Vul();
                obj.deserialize(params.Vuls[z]);
                this.Vuls.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifySites返回参数结构体
 * @class
 */
class VerifySitesResponse extends AbstractModel {

    SuccessNumber: number | null
    
    FailNumber: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 验证成功的根域名数量。
         */
        this.SuccessNumber = null;

        /**
         * 验证失败的根域名数量。
         */
        this.FailNumber = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SuccessNumber: number | null;
        FailNumber: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SuccessNumber = 'SuccessNumber' in params ? params.SuccessNumber : null;
        this.FailNumber = 'FailNumber' in params ? params.FailNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMonitors请求参数结构体
 * @class
 */
class CreateMonitorsRequest extends AbstractModel {

    Urls: Array<string> | null
    
    Name: string | null
    
    ScannerType: string | null
    
    Crontab: number | null
    
    RateLimit: number | null
    
    FirstScanStartTime: string | null
    
    constructor(){
        super();

        /**
         * 站点的url列表
         */
        this.Urls = null;

        /**
         * 任务名称
         */
        this.Name = null;

        /**
         * 扫描模式，normal-正常扫描；deep-深度扫描
         */
        this.ScannerType = null;

        /**
         * 扫描周期，单位小时，每X小时执行一次
         */
        this.Crontab = null;

        /**
         * 扫描速率限制，每秒发送X个HTTP请求
         */
        this.RateLimit = null;

        /**
         * 首次扫描开始时间
         */
        this.FirstScanStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Urls: Array<string> | null;
        Name: string | null;
        ScannerType: string | null;
        Crontab: number | null;
        RateLimit: number | null;
        FirstScanStartTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.Crontab = 'Crontab' in params ? params.Crontab : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;
        this.FirstScanStartTime = 'FirstScanStartTime' in params ? params.FirstScanStartTime : null;

    }
}

/**
 * DeleteMonitors返回参数结构体
 * @class
 */
class DeleteMonitorsResponse extends AbstractModel {

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
 * 监控任务基础数据
 * @class
 */
class Monitor extends AbstractModel {

    Id: number | null
    
    Name: string | null
    
    MonitorStatus: number | null
    
    ScannerType: string | null
    
    Crontab: number | null
    
    IncludedVulsTypes: string | null
    
    RateLimit: number | null
    
    FirstScanStartTime: string | null
    
    ScanStatus: number | null
    
    LastScanFinishTime: string | null
    
    CurrentScanStartTime: string | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    Appid: number | null
    
    ContentScanStatus: number | null
    
    constructor(){
        super();

        /**
         * 监控任务ID。
         */
        this.Id = null;

        /**
         * 监控名称。
         */
        this.Name = null;

        /**
         * 监测状态：1-监测中；2-暂停监测。
         */
        this.MonitorStatus = null;

        /**
         * 监测模式，normal-正常扫描；deep-深度扫描。
         */
        this.ScannerType = null;

        /**
         * 扫描周期，单位小时，每X小时执行一次。
         */
        this.Crontab = null;

        /**
         * 指定扫描类型，3位数每位依次表示：扫描Web漏洞、扫描系统漏洞、扫描系统端口。
         */
        this.IncludedVulsTypes = null;

        /**
         * 速率限制，每秒发送X个HTTP请求。
         */
        this.RateLimit = null;

        /**
         * 首次扫描开始时间。
         */
        this.FirstScanStartTime = null;

        /**
         * 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。
         */
        this.ScanStatus = null;

        /**
         * 上一次扫描完成时间。
         */
        this.LastScanFinishTime = null;

        /**
         * 当前扫描开始时间，如扫描完成则为上一次扫描的开始时间。
         */
        this.CurrentScanStartTime = null;

        /**
         * CreatedAt。
         */
        this.CreatedAt = null;

        /**
         * UpdatedAt。
         */
        this.UpdatedAt = null;

        /**
         * 云用户appid。
         */
        this.Appid = null;

        /**
         * 扫描状态：0-待检测；1-检测完成
         */
        this.ContentScanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        Name: string | null;
        MonitorStatus: number | null;
        ScannerType: string | null;
        Crontab: number | null;
        IncludedVulsTypes: string | null;
        RateLimit: number | null;
        FirstScanStartTime: string | null;
        ScanStatus: number | null;
        LastScanFinishTime: string | null;
        CurrentScanStartTime: string | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        Appid: number | null;
        ContentScanStatus: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.Crontab = 'Crontab' in params ? params.Crontab : null;
        this.IncludedVulsTypes = 'IncludedVulsTypes' in params ? params.IncludedVulsTypes : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;
        this.FirstScanStartTime = 'FirstScanStartTime' in params ? params.FirstScanStartTime : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.LastScanFinishTime = 'LastScanFinishTime' in params ? params.LastScanFinishTime : null;
        this.CurrentScanStartTime = 'CurrentScanStartTime' in params ? params.CurrentScanStartTime : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ContentScanStatus = 'ContentScanStatus' in params ? params.ContentScanStatus : null;

    }
}

/**
 * 漏洞数据
 * @class
 */
class Vul extends AbstractModel {

    Id: number | null
    
    SiteId: number | null
    
    TaskId: number | null
    
    Level: string | null
    
    Name: string | null
    
    Url: string | null
    
    Html: string | null
    
    Nickname: string | null
    
    Harm: string | null
    
    Describe: string | null
    
    Solution: string | null
    
    From: string | null
    
    Parameter: string | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    IsReported: number | null
    
    Appid: number | null
    
    Uin: string | null
    
    constructor(){
        super();

        /**
         * 漏洞ID。
         */
        this.Id = null;

        /**
         * 站点ID。
         */
        this.SiteId = null;

        /**
         * 扫描引擎的扫描任务ID。
         */
        this.TaskId = null;

        /**
         * 漏洞级别：high、middle、low、notice。
         */
        this.Level = null;

        /**
         * 漏洞名称。
         */
        this.Name = null;

        /**
         * 出现漏洞的url。
         */
        this.Url = null;

        /**
         * 网址/细节。
         */
        this.Html = null;

        /**
         * 漏洞类型。
         */
        this.Nickname = null;

        /**
         * 危害说明。
         */
        this.Harm = null;

        /**
         * 漏洞描述。
         */
        this.Describe = null;

        /**
         * 解决方案。
         */
        this.Solution = null;

        /**
         * 漏洞参考。
         */
        this.From = null;

        /**
         * 漏洞通过该参数攻击。
         */
        this.Parameter = null;

        /**
         * CreatedAt。
         */
        this.CreatedAt = null;

        /**
         * UpdatedAt。
         */
        this.UpdatedAt = null;

        /**
         * 是否已经添加误报，0-否，1-是。
         */
        this.IsReported = null;

        /**
         * 云用户appid。
         */
        this.Appid = null;

        /**
         * 云用户标识。
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        SiteId: number | null;
        TaskId: number | null;
        Level: string | null;
        Name: string | null;
        Url: string | null;
        Html: string | null;
        Nickname: string | null;
        Harm: string | null;
        Describe: string | null;
        Solution: string | null;
        From: string | null;
        Parameter: string | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        IsReported: number | null;
        Appid: number | null;
        Uin: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Html = 'Html' in params ? params.Html : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Harm = 'Harm' in params ? params.Harm : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.From = 'From' in params ? params.From : null;
        this.Parameter = 'Parameter' in params ? params.Parameter : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.IsReported = 'IsReported' in params ? params.IsReported : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

    }
}

/**
 * 用户漏洞数随时间变化统计数据
 * @class
 */
class VulsTimeline extends AbstractModel {

    Id: number | null
    
    Appid: number | null
    
    Date: string | null
    
    PageCount: number | null
    
    SiteNum: number | null
    
    ImpactSiteNum: number | null
    
    VulsHighNum: number | null
    
    VulsMiddleNum: number | null
    
    VulsLowNum: number | null
    
    VulsNoticeNum: number | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    constructor(){
        super();

        /**
         * ID。
         */
        this.Id = null;

        /**
         * 云用户appid。
         */
        this.Appid = null;

        /**
         * 日期。
         */
        this.Date = null;

        /**
         * 扫描页面总数量。
         */
        this.PageCount = null;

        /**
         * 已验证网站总数量。
         */
        this.SiteNum = null;

        /**
         * 受影响的网站总数量。
         */
        this.ImpactSiteNum = null;

        /**
         * 高危漏洞总数量。
         */
        this.VulsHighNum = null;

        /**
         * 中危漏洞总数量。
         */
        this.VulsMiddleNum = null;

        /**
         * 低危漏洞总数量。
         */
        this.VulsLowNum = null;

        /**
         * 风险提示总数量
         */
        this.VulsNoticeNum = null;

        /**
         * 记录添加时间。
         */
        this.CreatedAt = null;

        /**
         * 记录最近修改时间。
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        Appid: number | null;
        Date: string | null;
        PageCount: number | null;
        SiteNum: number | null;
        ImpactSiteNum: number | null;
        VulsHighNum: number | null;
        VulsMiddleNum: number | null;
        VulsLowNum: number | null;
        VulsNoticeNum: number | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.PageCount = 'PageCount' in params ? params.PageCount : null;
        this.SiteNum = 'SiteNum' in params ? params.SiteNum : null;
        this.ImpactSiteNum = 'ImpactSiteNum' in params ? params.ImpactSiteNum : null;
        this.VulsHighNum = 'VulsHighNum' in params ? params.VulsHighNum : null;
        this.VulsMiddleNum = 'VulsMiddleNum' in params ? params.VulsMiddleNum : null;
        this.VulsLowNum = 'VulsLowNum' in params ? params.VulsLowNum : null;
        this.VulsNoticeNum = 'VulsNoticeNum' in params ? params.VulsNoticeNum : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * CreateVulsMisinformation返回参数结构体
 * @class
 */
class CreateVulsMisinformationResponse extends AbstractModel {

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
 * VerifySites请求参数结构体
 * @class
 */
class VerifySitesRequest extends AbstractModel {

    Urls: Array<string> | null
    
    constructor(){
        super();

        /**
         * 站点的url列表
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
 * 站点信息。
 * @class
 */
class MiniSite extends AbstractModel {

    SiteId: number | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 站点ID。
         */
        this.SiteId = null;

        /**
         * 站点Url。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteId: number | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * ModifyMonitorAttribute请求参数结构体
 * @class
 */
class ModifyMonitorAttributeRequest extends AbstractModel {

    MonitorId: number | null
    
    Urls: Array<string> | null
    
    Name: string | null
    
    ScannerType: string | null
    
    Crontab: number | null
    
    RateLimit: number | null
    
    FirstScanStartTime: string | null
    
    MonitorStatus: number | null
    
    constructor(){
        super();

        /**
         * 监测任务ID
         */
        this.MonitorId = null;

        /**
         * 站点的url列表
         */
        this.Urls = null;

        /**
         * 任务名称
         */
        this.Name = null;

        /**
         * 扫描模式，normal-正常扫描；deep-深度扫描
         */
        this.ScannerType = null;

        /**
         * 扫描周期，单位小时，每X小时执行一次
         */
        this.Crontab = null;

        /**
         * 扫描速率限制，每秒发送X个HTTP请求
         */
        this.RateLimit = null;

        /**
         * 首次扫描开始时间
         */
        this.FirstScanStartTime = null;

        /**
         * 监测状态：1-监测中；2-暂停监测
         */
        this.MonitorStatus = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MonitorId: number | null;
        Urls: Array<string> | null;
        Name: string | null;
        ScannerType: string | null;
        Crontab: number | null;
        RateLimit: number | null;
        FirstScanStartTime: string | null;
        MonitorStatus: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.Crontab = 'Crontab' in params ? params.Crontab : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;
        this.FirstScanStartTime = 'FirstScanStartTime' in params ? params.FirstScanStartTime : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;

    }
}

/**
 * DescribeVulsNumberTimeline返回参数结构体
 * @class
 */
class DescribeVulsNumberTimelineResponse extends AbstractModel {

    TotalCount: number | null
    
    VulsTimeline: Array<VulsTimeline> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 统计数据记录数量。
         */
        this.TotalCount = null;

        /**
         * 用户漏洞数随时间变化统计数据。
         */
        this.VulsTimeline = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        VulsTimeline: Array<VulsTimeline> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VulsTimeline) {
            this.VulsTimeline = new Array();
            for (let z in params.VulsTimeline) {
                let obj = new VulsTimeline();
                obj.deserialize(params.VulsTimeline[z]);
                this.VulsTimeline.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVulsReport返回参数结构体
 * @class
 */
class CreateVulsReportResponse extends AbstractModel {

    ReportFileUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 报告下载地址
         */
        this.ReportFileUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ReportFileUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ReportFileUrl = 'ReportFileUrl' in params ? params.ReportFileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSites请求参数结构体
 * @class
 */
class CreateSitesRequest extends AbstractModel {

    Urls: Array<string> | null
    
    UserAgent: string | null
    
    constructor(){
        super();

        /**
         * 站点的url列表
         */
        this.Urls = null;

        /**
         * 访问网站的客户端标识
         */
        this.UserAgent = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Urls: Array<string> | null;
        UserAgent: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;

    }
}

/**
 * ModifyConfigAttribute请求参数结构体
 * @class
 */
class ModifyConfigAttributeRequest extends AbstractModel {

    NoticeLevel: string | null
    
    constructor(){
        super();

        /**
         * 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示
         */
        this.NoticeLevel = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NoticeLevel: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NoticeLevel = 'NoticeLevel' in params ? params.NoticeLevel : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends AbstractModel {

    Name: string | null
    
    Values: Array<string> | null
    
    constructor(){
        super();

        /**
         * 过滤键的名称。
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Values: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeMonitors请求参数结构体
 * @class
 */
class DescribeMonitorsRequest extends AbstractModel {

    MonitorIds: Array<number> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 监控任务ID列表
         */
        this.MonitorIds = null;

        /**
         * 过滤条件
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MonitorIds: Array<number> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MonitorIds = 'MonitorIds' in params ? params.MonitorIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteSites返回参数结构体
 * @class
 */
class DeleteSitesResponse extends AbstractModel {

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
 * DeleteMonitors请求参数结构体
 * @class
 */
class DeleteMonitorsRequest extends AbstractModel {

    MonitorIds: Array<number> | null
    
    constructor(){
        super();

        /**
         * 监控任务ID列表
         */
        this.MonitorIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MonitorIds: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.MonitorIds = 'MonitorIds' in params ? params.MonitorIds : null;

    }
}

/**
 * DescribeSitesVerification返回参数结构体
 * @class
 */
class DescribeSitesVerificationResponse extends AbstractModel {

    TotalCount: number | null
    
    SitesVerification: Array<SitesVerification> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 验证信息数量。
         */
        this.TotalCount = null;

        /**
         * 验证信息列表。
         */
        this.SitesVerification = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        SitesVerification: Array<SitesVerification> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SitesVerification) {
            this.SitesVerification = new Array();
            for (let z in params.SitesVerification) {
                let obj = new SitesVerification();
                obj.deserialize(params.SitesVerification[z]);
                this.SitesVerification.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 站点数据
 * @class
 */
class Site extends AbstractModel {

    Id: number | null
    
    MonitorId: number | null
    
    Url: string | null
    
    Name: string | null
    
    VerifyStatus: number | null
    
    MonitorStatus: number | null
    
    ScanStatus: number | null
    
    LastScanTaskId: number | null
    
    LastScanStartTime: string | null
    
    LastScanFinishTime: string | null
    
    LastScanCancelTime: string | null
    
    LastScanPageCount: number | null
    
    LastScanScannerType: string | null
    
    LastScanVulsHighNum: number | null
    
    LastScanVulsMiddleNum: number | null
    
    LastScanVulsLowNum: number | null
    
    LastScanVulsNoticeNum: number | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    LastScanRateLimit: number | null
    
    LastScanVulsNum: number | null
    
    LastScanNoticeNum: number | null
    
    Progress: number | null
    
    Appid: number | null
    
    Uin: string | null
    
    NeedLogin: number | null
    
    LoginCookie: string | null
    
    LoginCookieValid: number | null
    
    LoginCheckUrl: string | null
    
    LoginCheckKw: string | null
    
    ScanDisallow: string | null
    
    UserAgent: string | null
    
    ContentStatus: number | null
    
    LastScanContentNum: number | null
    
    constructor(){
        super();

        /**
         * 站点ID。
         */
        this.Id = null;

        /**
         * 监控任务ID，为0时表示未加入监控任务。
         */
        this.MonitorId = null;

        /**
         * 站点url。
         */
        this.Url = null;

        /**
         * 站点名称。
         */
        this.Name = null;

        /**
         * 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。
         */
        this.VerifyStatus = null;

        /**
         * 监测状态：0-未监测；1-监测中；2-暂停监测。
         */
        this.MonitorStatus = null;

        /**
         * 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。
         */
        this.ScanStatus = null;

        /**
         * 最近一次的AIScanner的扫描任务id，注意取消的情况。
         */
        this.LastScanTaskId = null;

        /**
         * 最近一次扫描开始时间。
         */
        this.LastScanStartTime = null;

        /**
         * 最近一次扫描完成时间。
         */
        this.LastScanFinishTime = null;

        /**
         * 最近一次取消时间，取消即使用上一次扫描结果。
         */
        this.LastScanCancelTime = null;

        /**
         * 最近一次扫描扫描的页面数。
         */
        this.LastScanPageCount = null;

        /**
         * normal-正常扫描；deep-深度扫描。
         */
        this.LastScanScannerType = null;

        /**
         * 最近一次扫描高风险漏洞数量。
         */
        this.LastScanVulsHighNum = null;

        /**
         * 最近一次扫描中风险漏洞数量。
         */
        this.LastScanVulsMiddleNum = null;

        /**
         * 最近一次扫描低风险漏洞数量。
         */
        this.LastScanVulsLowNum = null;

        /**
         * 最近一次扫描提示信息数量。
         */
        this.LastScanVulsNoticeNum = null;

        /**
         * 记录添加时间。
         */
        this.CreatedAt = null;

        /**
         * 记录最近修改时间。
         */
        this.UpdatedAt = null;

        /**
         * 速率限制，每秒发送X个HTTP请求。
         */
        this.LastScanRateLimit = null;

        /**
         * 最近一次扫描漏洞总数量。
         */
        this.LastScanVulsNum = null;

        /**
         * 最近一次扫描提示总数量
         */
        this.LastScanNoticeNum = null;

        /**
         * 扫描进度，百分比整数
         */
        this.Progress = null;

        /**
         * 云用户appid。
         */
        this.Appid = null;

        /**
         * 云用户标识。
         */
        this.Uin = null;

        /**
         * 网站是否需要登录扫描：0-未知；-1-不需要；1-需要。
         */
        this.NeedLogin = null;

        /**
         * 登录后的cookie。
         */
        this.LoginCookie = null;

        /**
         * 登录后的cookie是否有效：0-无效；1-有效。
         */
        this.LoginCookieValid = null;

        /**
         * 用于测试cookie是否有效的URL。
         */
        this.LoginCheckUrl = null;

        /**
         * 用于测试cookie是否有效的关键字。
         */
        this.LoginCheckKw = null;

        /**
         * 禁止扫描器扫描的目录关键字。
         */
        this.ScanDisallow = null;

        /**
         * 访问网站的客户端标识。
         */
        this.UserAgent = null;

        /**
         * 内容检测状态：0-未检测；1-已检测；
         */
        this.ContentStatus = null;

        /**
         * 最近一次扫描内容检测数量
         */
        this.LastScanContentNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        MonitorId: number | null;
        Url: string | null;
        Name: string | null;
        VerifyStatus: number | null;
        MonitorStatus: number | null;
        ScanStatus: number | null;
        LastScanTaskId: number | null;
        LastScanStartTime: string | null;
        LastScanFinishTime: string | null;
        LastScanCancelTime: string | null;
        LastScanPageCount: number | null;
        LastScanScannerType: string | null;
        LastScanVulsHighNum: number | null;
        LastScanVulsMiddleNum: number | null;
        LastScanVulsLowNum: number | null;
        LastScanVulsNoticeNum: number | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        LastScanRateLimit: number | null;
        LastScanVulsNum: number | null;
        LastScanNoticeNum: number | null;
        Progress: number | null;
        Appid: number | null;
        Uin: string | null;
        NeedLogin: number | null;
        LoginCookie: string | null;
        LoginCookieValid: number | null;
        LoginCheckUrl: string | null;
        LoginCheckKw: string | null;
        ScanDisallow: string | null;
        UserAgent: string | null;
        ContentStatus: number | null;
        LastScanContentNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.LastScanTaskId = 'LastScanTaskId' in params ? params.LastScanTaskId : null;
        this.LastScanStartTime = 'LastScanStartTime' in params ? params.LastScanStartTime : null;
        this.LastScanFinishTime = 'LastScanFinishTime' in params ? params.LastScanFinishTime : null;
        this.LastScanCancelTime = 'LastScanCancelTime' in params ? params.LastScanCancelTime : null;
        this.LastScanPageCount = 'LastScanPageCount' in params ? params.LastScanPageCount : null;
        this.LastScanScannerType = 'LastScanScannerType' in params ? params.LastScanScannerType : null;
        this.LastScanVulsHighNum = 'LastScanVulsHighNum' in params ? params.LastScanVulsHighNum : null;
        this.LastScanVulsMiddleNum = 'LastScanVulsMiddleNum' in params ? params.LastScanVulsMiddleNum : null;
        this.LastScanVulsLowNum = 'LastScanVulsLowNum' in params ? params.LastScanVulsLowNum : null;
        this.LastScanVulsNoticeNum = 'LastScanVulsNoticeNum' in params ? params.LastScanVulsNoticeNum : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.LastScanRateLimit = 'LastScanRateLimit' in params ? params.LastScanRateLimit : null;
        this.LastScanVulsNum = 'LastScanVulsNum' in params ? params.LastScanVulsNum : null;
        this.LastScanNoticeNum = 'LastScanNoticeNum' in params ? params.LastScanNoticeNum : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.NeedLogin = 'NeedLogin' in params ? params.NeedLogin : null;
        this.LoginCookie = 'LoginCookie' in params ? params.LoginCookie : null;
        this.LoginCookieValid = 'LoginCookieValid' in params ? params.LoginCookieValid : null;
        this.LoginCheckUrl = 'LoginCheckUrl' in params ? params.LoginCheckUrl : null;
        this.LoginCheckKw = 'LoginCheckKw' in params ? params.LoginCheckKw : null;
        this.ScanDisallow = 'ScanDisallow' in params ? params.ScanDisallow : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.ContentStatus = 'ContentStatus' in params ? params.ContentStatus : null;
        this.LastScanContentNum = 'LastScanContentNum' in params ? params.LastScanContentNum : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends AbstractModel {

    NoticeLevel: string | null
    
    Id: number | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    Appid: number | null
    
    ContentLevel: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示。
         */
        this.NoticeLevel = null;

        /**
         * 配置ID。
         */
        this.Id = null;

        /**
         * 记录创建时间。
         */
        this.CreatedAt = null;

        /**
         * 记录更新新建。
         */
        this.UpdatedAt = null;

        /**
         * 云用户appid。
         */
        this.Appid = null;

        /**
         * 内容检测通知等级-1:通知,0-不通知
         */
        this.ContentLevel = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NoticeLevel: string | null;
        Id: number | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        Appid: number | null;
        ContentLevel: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NoticeLevel = 'NoticeLevel' in params ? params.NoticeLevel : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ContentLevel = 'ContentLevel' in params ? params.ContentLevel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSites请求参数结构体
 * @class
 */
class DescribeSitesRequest extends AbstractModel {

    SiteIds: Array<number> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 站点ID列表
         */
        this.SiteIds = null;

        /**
         * 过滤条件
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SiteIds: Array<number> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSiteQuota请求参数结构体
 * @class
 */
class DescribeSiteQuotaRequest extends AbstractModel {

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
 * DescribeSitesVerification请求参数结构体
 * @class
 */
class DescribeSitesVerificationRequest extends AbstractModel {

    Urls: Array<string> | null
    
    constructor(){
        super();

        /**
         * 站点的url列表
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

export const Models = {
    ModifySiteAttributeRequest: ModifySiteAttributeRequest,
    MonitorsDetail: MonitorsDetail,
    DescribeSitesResponse: DescribeSitesResponse,
    DescribeMonitorsResponse: DescribeMonitorsResponse,
    DeleteSitesRequest: DeleteSitesRequest,
    DescribeConfigRequest: DescribeConfigRequest,
    DescribeVulsRequest: DescribeVulsRequest,
    ModifyConfigAttributeResponse: ModifyConfigAttributeResponse,
    CreateSitesResponse: CreateSitesResponse,
    DescribeVulsNumberRequest: DescribeVulsNumberRequest,
    ModifyMonitorAttributeResponse: ModifyMonitorAttributeResponse,
    ModifySiteAttributeResponse: ModifySiteAttributeResponse,
    CreateVulsReportRequest: CreateVulsReportRequest,
    CreateSitesScansResponse: CreateSitesScansResponse,
    SitesVerification: SitesVerification,
    DescribeSiteQuotaResponse: DescribeSiteQuotaResponse,
    DescribeVulsNumberResponse: DescribeVulsNumberResponse,
    CreateVulsMisinformationRequest: CreateVulsMisinformationRequest,
    DescribeVulsNumberTimelineRequest: DescribeVulsNumberTimelineRequest,
    MonitorMiniSite: MonitorMiniSite,
    CreateSitesScansRequest: CreateSitesScansRequest,
    CreateMonitorsResponse: CreateMonitorsResponse,
    DescribeVulsResponse: DescribeVulsResponse,
    VerifySitesResponse: VerifySitesResponse,
    CreateMonitorsRequest: CreateMonitorsRequest,
    DeleteMonitorsResponse: DeleteMonitorsResponse,
    Monitor: Monitor,
    Vul: Vul,
    VulsTimeline: VulsTimeline,
    CreateVulsMisinformationResponse: CreateVulsMisinformationResponse,
    VerifySitesRequest: VerifySitesRequest,
    MiniSite: MiniSite,
    ModifyMonitorAttributeRequest: ModifyMonitorAttributeRequest,
    DescribeVulsNumberTimelineResponse: DescribeVulsNumberTimelineResponse,
    CreateVulsReportResponse: CreateVulsReportResponse,
    CreateSitesRequest: CreateSitesRequest,
    ModifyConfigAttributeRequest: ModifyConfigAttributeRequest,
    Filter: Filter,
    DescribeMonitorsRequest: DescribeMonitorsRequest,
    DeleteSitesResponse: DeleteSitesResponse,
    DeleteMonitorsRequest: DeleteMonitorsRequest,
    DescribeSitesVerificationResponse: DescribeSitesVerificationResponse,
    Site: Site,
    DescribeConfigResponse: DescribeConfigResponse,
    DescribeSitesRequest: DescribeSitesRequest,
    DescribeSiteQuotaRequest: DescribeSiteQuotaRequest,
    DescribeSitesVerificationRequest: DescribeSitesVerificationRequest,

}
