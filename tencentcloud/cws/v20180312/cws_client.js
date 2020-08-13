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
const ModifySiteAttributeRequest = models_1.Models.ModifySiteAttributeRequest;
const MonitorsDetail = models_1.Models.MonitorsDetail;
const DescribeSitesResponse = models_1.Models.DescribeSitesResponse;
const DescribeMonitorsResponse = models_1.Models.DescribeMonitorsResponse;
const DeleteSitesRequest = models_1.Models.DeleteSitesRequest;
const DescribeConfigRequest = models_1.Models.DescribeConfigRequest;
const DescribeVulsRequest = models_1.Models.DescribeVulsRequest;
const ModifyConfigAttributeResponse = models_1.Models.ModifyConfigAttributeResponse;
const CreateSitesResponse = models_1.Models.CreateSitesResponse;
const DescribeVulsNumberRequest = models_1.Models.DescribeVulsNumberRequest;
const ModifyMonitorAttributeResponse = models_1.Models.ModifyMonitorAttributeResponse;
const ModifySiteAttributeResponse = models_1.Models.ModifySiteAttributeResponse;
const CreateVulsReportRequest = models_1.Models.CreateVulsReportRequest;
const CreateSitesScansResponse = models_1.Models.CreateSitesScansResponse;
const SitesVerification = models_1.Models.SitesVerification;
const DescribeSiteQuotaResponse = models_1.Models.DescribeSiteQuotaResponse;
const DescribeVulsNumberResponse = models_1.Models.DescribeVulsNumberResponse;
const CreateVulsMisinformationRequest = models_1.Models.CreateVulsMisinformationRequest;
const DescribeVulsNumberTimelineRequest = models_1.Models.DescribeVulsNumberTimelineRequest;
const MonitorMiniSite = models_1.Models.MonitorMiniSite;
const CreateSitesScansRequest = models_1.Models.CreateSitesScansRequest;
const CreateMonitorsResponse = models_1.Models.CreateMonitorsResponse;
const DescribeVulsResponse = models_1.Models.DescribeVulsResponse;
const VerifySitesResponse = models_1.Models.VerifySitesResponse;
const CreateMonitorsRequest = models_1.Models.CreateMonitorsRequest;
const DeleteMonitorsResponse = models_1.Models.DeleteMonitorsResponse;
const Monitor = models_1.Models.Monitor;
const Vul = models_1.Models.Vul;
const VulsTimeline = models_1.Models.VulsTimeline;
const CreateVulsMisinformationResponse = models_1.Models.CreateVulsMisinformationResponse;
const VerifySitesRequest = models_1.Models.VerifySitesRequest;
const MiniSite = models_1.Models.MiniSite;
const ModifyMonitorAttributeRequest = models_1.Models.ModifyMonitorAttributeRequest;
const DescribeVulsNumberTimelineResponse = models_1.Models.DescribeVulsNumberTimelineResponse;
const CreateVulsReportResponse = models_1.Models.CreateVulsReportResponse;
const CreateSitesRequest = models_1.Models.CreateSitesRequest;
const ModifyConfigAttributeRequest = models_1.Models.ModifyConfigAttributeRequest;
const Filter = models_1.Models.Filter;
const DescribeMonitorsRequest = models_1.Models.DescribeMonitorsRequest;
const DeleteSitesResponse = models_1.Models.DeleteSitesResponse;
const DeleteMonitorsRequest = models_1.Models.DeleteMonitorsRequest;
const DescribeSitesVerificationResponse = models_1.Models.DescribeSitesVerificationResponse;
const Site = models_1.Models.Site;
const DescribeConfigResponse = models_1.Models.DescribeConfigResponse;
const DescribeSitesRequest = models_1.Models.DescribeSitesRequest;
const DescribeSiteQuotaRequest = models_1.Models.DescribeSiteQuotaRequest;
const DescribeSitesVerificationRequest = models_1.Models.DescribeSitesVerificationRequest;
/**
 * cws client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cws.tencentcloudapi.com", "2018-03-12", credential, region, profile);
    }
    /**
     * 本接口 (CreateVulsReport) 用于生成漏洞报告并返回下载链接。
     * @param {CreateVulsReportRequest} req
     * @param {function(string, CreateVulsReportResponse):void} cb
     * @public
     */
    CreateVulsReport(req, cb) {
        const resp = new CreateVulsReportResponse();
        this.request("CreateVulsReport", req, resp, cb);
    }
    /**
     * 本接口 (DescribeVuls) 用于查询一个或多个漏洞的详细信息。
     * @param {DescribeVulsRequest} req
     * @param {function(string, DescribeVulsResponse):void} cb
     * @public
     */
    DescribeVuls(req, cb) {
        const resp = new DescribeVulsResponse();
        this.request("DescribeVuls", req, resp, cb);
    }
    /**
     * 本接口 (ModifyMonitorAttribute) 用于修改监测任务的属性。
     * @param {ModifyMonitorAttributeRequest} req
     * @param {function(string, ModifyMonitorAttributeResponse):void} cb
     * @public
     */
    ModifyMonitorAttribute(req, cb) {
        const resp = new ModifyMonitorAttributeResponse();
        this.request("ModifyMonitorAttribute", req, resp, cb);
    }
    /**
     * 本接口（CreateSitesScans）用于新增一个或多个站点的单次扫描任务。
     * @param {CreateSitesScansRequest} req
     * @param {function(string, CreateSitesScansResponse):void} cb
     * @public
     */
    CreateSitesScans(req, cb) {
        const resp = new CreateSitesScansResponse();
        this.request("CreateSitesScans", req, resp, cb);
    }
    /**
     * 本接口（CreateSites）用于新增一个或多个站点。
     * @param {CreateSitesRequest} req
     * @param {function(string, CreateSitesResponse):void} cb
     * @public
     */
    CreateSites(req, cb) {
        const resp = new CreateSitesResponse();
        this.request("CreateSites", req, resp, cb);
    }
    /**
     * 本接口（CreateVulsMisinformation）可以用于新增一个或多个漏洞误报信息。
     * @param {CreateVulsMisinformationRequest} req
     * @param {function(string, CreateVulsMisinformationResponse):void} cb
     * @public
     */
    CreateVulsMisinformation(req, cb) {
        const resp = new CreateVulsMisinformationResponse();
        this.request("CreateVulsMisinformation", req, resp, cb);
    }
    /**
     * 本接口 (DescribeConfig) 用于查询用户配置的详细信息。
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        const resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }
    /**
     * 本接口 (DescribeSites) 用于查询一个或多个站点的详细信息。
     * @param {DescribeSitesRequest} req
     * @param {function(string, DescribeSitesResponse):void} cb
     * @public
     */
    DescribeSites(req, cb) {
        const resp = new DescribeSitesResponse();
        this.request("DescribeSites", req, resp, cb);
    }
    /**
     * 本接口 (DescribeSitesVerification) 用于查询一个或多个待验证站点的验证信息。
     * @param {DescribeSitesVerificationRequest} req
     * @param {function(string, DescribeSitesVerificationResponse):void} cb
     * @public
     */
    DescribeSitesVerification(req, cb) {
        const resp = new DescribeSitesVerificationResponse();
        this.request("DescribeSitesVerification", req, resp, cb);
    }
    /**
     * 本接口 (ModifySiteAttribute) 用于修改站点的属性。
     * @param {ModifySiteAttributeRequest} req
     * @param {function(string, ModifySiteAttributeResponse):void} cb
     * @public
     */
    ModifySiteAttribute(req, cb) {
        const resp = new ModifySiteAttributeResponse();
        this.request("ModifySiteAttribute", req, resp, cb);
    }
    /**
     * 本接口 (ModifyConfigAttribute) 用于修改用户配置的属性。
     * @param {ModifyConfigAttributeRequest} req
     * @param {function(string, ModifyConfigAttributeResponse):void} cb
     * @public
     */
    ModifyConfigAttribute(req, cb) {
        const resp = new ModifyConfigAttributeResponse();
        this.request("ModifyConfigAttribute", req, resp, cb);
    }
    /**
     * 本接口 (DescribeVulsNumberTimeline) 用于查询漏洞数随时间变化统计信息。
     * @param {DescribeVulsNumberTimelineRequest} req
     * @param {function(string, DescribeVulsNumberTimelineResponse):void} cb
     * @public
     */
    DescribeVulsNumberTimeline(req, cb) {
        const resp = new DescribeVulsNumberTimelineResponse();
        this.request("DescribeVulsNumberTimeline", req, resp, cb);
    }
    /**
     * 本接口 (VerifySites) 用于验证一个或多个待验证站点。
     * @param {VerifySitesRequest} req
     * @param {function(string, VerifySitesResponse):void} cb
     * @public
     */
    VerifySites(req, cb) {
        const resp = new VerifySitesResponse();
        this.request("VerifySites", req, resp, cb);
    }
    /**
     * 本接口 (DeleteMonitors) 用于删除用户监控任务。
     * @param {DeleteMonitorsRequest} req
     * @param {function(string, DeleteMonitorsResponse):void} cb
     * @public
     */
    DeleteMonitors(req, cb) {
        const resp = new DeleteMonitorsResponse();
        this.request("DeleteMonitors", req, resp, cb);
    }
    /**
     * 本接口（CreateMonitors）用于新增一个或多个站点的监测任务。
     * @param {CreateMonitorsRequest} req
     * @param {function(string, CreateMonitorsResponse):void} cb
     * @public
     */
    CreateMonitors(req, cb) {
        const resp = new CreateMonitorsResponse();
        this.request("CreateMonitors", req, resp, cb);
    }
    /**
     * 本接口 (DeleteSites) 用于删除站点。
     * @param {DeleteSitesRequest} req
     * @param {function(string, DeleteSitesResponse):void} cb
     * @public
     */
    DeleteSites(req, cb) {
        const resp = new DeleteSitesResponse();
        this.request("DeleteSites", req, resp, cb);
    }
    /**
     * 本接口 (DescribeVulsNumber) 用于查询用户网站的漏洞总计数量。
     * @param {DescribeVulsNumberRequest} req
     * @param {function(string, DescribeVulsNumberResponse):void} cb
     * @public
     */
    DescribeVulsNumber(req, cb) {
        const resp = new DescribeVulsNumberResponse();
        this.request("DescribeVulsNumber", req, resp, cb);
    }
    /**
     * 本接口 (DescribeMonitors) 用于查询一个或多个监控任务的详细信息。
     * @param {DescribeMonitorsRequest} req
     * @param {function(string, DescribeMonitorsResponse):void} cb
     * @public
     */
    DescribeMonitors(req, cb) {
        const resp = new DescribeMonitorsResponse();
        this.request("DescribeMonitors", req, resp, cb);
    }
    /**
     * 本接口 (DescribeSiteQuota) 用于查询用户购买的扫描次数总数和已使用数。
     * @param {DescribeSiteQuotaRequest} req
     * @param {function(string, DescribeSiteQuotaResponse):void} cb
     * @public
     */
    DescribeSiteQuota(req, cb) {
        const resp = new DescribeSiteQuotaResponse();
        this.request("DescribeSiteQuota", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cws_client.js.map