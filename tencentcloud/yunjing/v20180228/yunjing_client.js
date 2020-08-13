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
const ExportBashEventsRequest = models_1.Models.ExportBashEventsRequest;
const ModifyAutoOpenProVersionConfigRequest = models_1.Models.ModifyAutoOpenProVersionConfigRequest;
const DescribeProcessTaskStatusResponse = models_1.Models.DescribeProcessTaskStatusResponse;
const ExportReverseShellEventsResponse = models_1.Models.ExportReverseShellEventsResponse;
const DescribeBashRulesRequest = models_1.Models.DescribeBashRulesRequest;
const ExportPrivilegeEventsResponse = models_1.Models.ExportPrivilegeEventsResponse;
const DescribeAlarmAttributeResponse = models_1.Models.DescribeAlarmAttributeResponse;
const DescribeWeeklyReportBruteAttacksResponse = models_1.Models.DescribeWeeklyReportBruteAttacksResponse;
const DescribeAgentVulsRequest = models_1.Models.DescribeAgentVulsRequest;
const DescribeTagsRequest = models_1.Models.DescribeTagsRequest;
const AddMachineTagResponse = models_1.Models.AddMachineTagResponse;
const UsualPlace = models_1.Models.UsualPlace;
const DescribeReverseShellRulesRequest = models_1.Models.DescribeReverseShellRulesRequest;
const SetBashEventsStatusRequest = models_1.Models.SetBashEventsStatusRequest;
const DescribeAccountsRequest = models_1.Models.DescribeAccountsRequest;
const DescribeReverseShellEventsRequest = models_1.Models.DescribeReverseShellEventsRequest;
const WeeklyReportVul = models_1.Models.WeeklyReportVul;
const DescribeWeeklyReportBruteAttacksRequest = models_1.Models.DescribeWeeklyReportBruteAttacksRequest;
const CreateUsualLoginPlacesRequest = models_1.Models.CreateUsualLoginPlacesRequest;
const DescribeProcessTaskStatusRequest = models_1.Models.DescribeProcessTaskStatusRequest;
const DescribeVulScanResultResponse = models_1.Models.DescribeVulScanResultResponse;
const ModifyAlarmAttributeRequest = models_1.Models.ModifyAlarmAttributeRequest;
const DescribeAttackLogsRequest = models_1.Models.DescribeAttackLogsRequest;
const ComponentStatistics = models_1.Models.ComponentStatistics;
const InquiryPriceOpenProVersionPrepaidRequest = models_1.Models.InquiryPriceOpenProVersionPrepaidRequest;
const ExportMalwaresRequest = models_1.Models.ExportMalwaresRequest;
const DescribeProcessesResponse = models_1.Models.DescribeProcessesResponse;
const DeleteBashEventsResponse = models_1.Models.DeleteBashEventsResponse;
const ExportPrivilegeEventsRequest = models_1.Models.ExportPrivilegeEventsRequest;
const WeeklyReportMalware = models_1.Models.WeeklyReportMalware;
const CreateBaselineStrategyRequest = models_1.Models.CreateBaselineStrategyRequest;
const DescribeSecurityTrendsRequest = models_1.Models.DescribeSecurityTrendsRequest;
const Account = models_1.Models.Account;
const DescribeReverseShellEventsResponse = models_1.Models.DescribeReverseShellEventsResponse;
const DescribePrivilegeRulesRequest = models_1.Models.DescribePrivilegeRulesRequest;
const BruteAttack = models_1.Models.BruteAttack;
const DescribeOpenPortsRequest = models_1.Models.DescribeOpenPortsRequest;
const DescribeImpactedHostsRequest = models_1.Models.DescribeImpactedHostsRequest;
const DescribeMaliciousRequestsResponse = models_1.Models.DescribeMaliciousRequestsResponse;
const NonLocalLoginPlace = models_1.Models.NonLocalLoginPlace;
const CreateProcessTaskResponse = models_1.Models.CreateProcessTaskResponse;
const SecurityDynamic = models_1.Models.SecurityDynamic;
const RenewProVersionRequest = models_1.Models.RenewProVersionRequest;
const DescribeComponentsRequest = models_1.Models.DescribeComponentsRequest;
const DescribeNonlocalLoginPlacesRequest = models_1.Models.DescribeNonlocalLoginPlacesRequest;
const DeleteMachineTagRequest = models_1.Models.DeleteMachineTagRequest;
const CreateBaselineStrategyResponse = models_1.Models.CreateBaselineStrategyResponse;
const ReverseShellRule = models_1.Models.ReverseShellRule;
const OpenPortStatistics = models_1.Models.OpenPortStatistics;
const EditPrivilegeRuleResponse = models_1.Models.EditPrivilegeRuleResponse;
const DescribeHistoryAccountsResponse = models_1.Models.DescribeHistoryAccountsResponse;
const AgentVul = models_1.Models.AgentVul;
const UntrustMalwaresRequest = models_1.Models.UntrustMalwaresRequest;
const ExportAttackLogsResponse = models_1.Models.ExportAttackLogsResponse;
const DescribeAccountsResponse = models_1.Models.DescribeAccountsResponse;
const DescribeLoginWhiteListRequest = models_1.Models.DescribeLoginWhiteListRequest;
const ReverseShell = models_1.Models.ReverseShell;
const UntrustMaliciousRequestRequest = models_1.Models.UntrustMaliciousRequestRequest;
const ExportNonlocalLoginPlacesRequest = models_1.Models.ExportNonlocalLoginPlacesRequest;
const DescribeComponentInfoResponse = models_1.Models.DescribeComponentInfoResponse;
const DescribeAccountStatisticsResponse = models_1.Models.DescribeAccountStatisticsResponse;
const OpenProVersionPrepaidRequest = models_1.Models.OpenProVersionPrepaidRequest;
const ModifyLoginWhiteListResponse = models_1.Models.ModifyLoginWhiteListResponse;
const DescribeTagsResponse = models_1.Models.DescribeTagsResponse;
const OpenPort = models_1.Models.OpenPort;
const DescribeProVersionInfoRequest = models_1.Models.DescribeProVersionInfoRequest;
const CreateProcessTaskRequest = models_1.Models.CreateProcessTaskRequest;
const DeleteMaliciousRequestsResponse = models_1.Models.DeleteMaliciousRequestsResponse;
const ExportBruteAttacksResponse = models_1.Models.ExportBruteAttacksResponse;
const EditReverseShellRuleResponse = models_1.Models.EditReverseShellRuleResponse;
const ExportBruteAttacksRequest = models_1.Models.ExportBruteAttacksRequest;
const DeleteMachineResponse = models_1.Models.DeleteMachineResponse;
const DeleteLoginWhiteListRequest = models_1.Models.DeleteLoginWhiteListRequest;
const MachineTag = models_1.Models.MachineTag;
const DescribeAttackLogInfoResponse = models_1.Models.DescribeAttackLogInfoResponse;
const DescribePrivilegeEventsResponse = models_1.Models.DescribePrivilegeEventsResponse;
const WeeklyReportNonlocalLoginPlace = models_1.Models.WeeklyReportNonlocalLoginPlace;
const DescribeOverviewStatisticsResponse = models_1.Models.DescribeOverviewStatisticsResponse;
const RecoverMalwaresRequest = models_1.Models.RecoverMalwaresRequest;
const MaliciousRequest = models_1.Models.MaliciousRequest;
const TrustMalwaresResponse = models_1.Models.TrustMalwaresResponse;
const TagMachine = models_1.Models.TagMachine;
const DescribeWeeklyReportInfoRequest = models_1.Models.DescribeWeeklyReportInfoRequest;
const EditTagsRequest = models_1.Models.EditTagsRequest;
const AddLoginWhiteListRequest = models_1.Models.AddLoginWhiteListRequest;
const DeleteReverseShellRulesRequest = models_1.Models.DeleteReverseShellRulesRequest;
const DescribeWeeklyReportsRequest = models_1.Models.DescribeWeeklyReportsRequest;
const DescribeBashRulesResponse = models_1.Models.DescribeBashRulesResponse;
const DescribeImpactedHostsResponse = models_1.Models.DescribeImpactedHostsResponse;
const RescanImpactedHostRequest = models_1.Models.RescanImpactedHostRequest;
const DescribeBashEventsResponse = models_1.Models.DescribeBashEventsResponse;
const ModifyLoginWhiteListRequest = models_1.Models.ModifyLoginWhiteListRequest;
const DescribeBashEventsRequest = models_1.Models.DescribeBashEventsRequest;
const DeleteTagsRequest = models_1.Models.DeleteTagsRequest;
const DescribeOpenPortStatisticsRequest = models_1.Models.DescribeOpenPortStatisticsRequest;
const ExportAttackLogsRequest = models_1.Models.ExportAttackLogsRequest;
const DeleteMachineRequest = models_1.Models.DeleteMachineRequest;
const DescribeVulInfoRequest = models_1.Models.DescribeVulInfoRequest;
const UntrustMaliciousRequestResponse = models_1.Models.UntrustMaliciousRequestResponse;
const DescribeComponentStatisticsResponse = models_1.Models.DescribeComponentStatisticsResponse;
const PrivilegeEscalationProcess = models_1.Models.PrivilegeEscalationProcess;
const Place = models_1.Models.Place;
const SwitchBashRulesResponse = models_1.Models.SwitchBashRulesResponse;
const LoginWhiteLists = models_1.Models.LoginWhiteLists;
const DeleteUsualLoginPlacesResponse = models_1.Models.DeleteUsualLoginPlacesResponse;
const DeleteNonlocalLoginPlacesResponse = models_1.Models.DeleteNonlocalLoginPlacesResponse;
const DescribeNonlocalLoginPlacesResponse = models_1.Models.DescribeNonlocalLoginPlacesResponse;
const DeleteReverseShellRulesResponse = models_1.Models.DeleteReverseShellRulesResponse;
const ExportMalwaresResponse = models_1.Models.ExportMalwaresResponse;
const UntrustMalwaresResponse = models_1.Models.UntrustMalwaresResponse;
const DeletePrivilegeRulesResponse = models_1.Models.DeletePrivilegeRulesResponse;
const CreateOpenPortTaskResponse = models_1.Models.CreateOpenPortTaskResponse;
const EditBashRuleRequest = models_1.Models.EditBashRuleRequest;
const DeletePrivilegeEventsResponse = models_1.Models.DeletePrivilegeEventsResponse;
const InquiryPriceOpenProVersionPrepaidResponse = models_1.Models.InquiryPriceOpenProVersionPrepaidResponse;
const CloseProVersionRequest = models_1.Models.CloseProVersionRequest;
const SetBashEventsStatusResponse = models_1.Models.SetBashEventsStatusResponse;
const DescribeUsualLoginPlacesResponse = models_1.Models.DescribeUsualLoginPlacesResponse;
const DescribeProcessStatisticsResponse = models_1.Models.DescribeProcessStatisticsResponse;
const MisAlarmNonlocalLoginPlacesRequest = models_1.Models.MisAlarmNonlocalLoginPlacesRequest;
const TrustMaliciousRequestRequest = models_1.Models.TrustMaliciousRequestRequest;
const ExportMaliciousRequestsResponse = models_1.Models.ExportMaliciousRequestsResponse;
const DescribeAttackLogInfoRequest = models_1.Models.DescribeAttackLogInfoRequest;
const DescribeWeeklyReportMalwaresRequest = models_1.Models.DescribeWeeklyReportMalwaresRequest;
const DescribeBruteAttacksResponse = models_1.Models.DescribeBruteAttacksResponse;
const ExportNonlocalLoginPlacesResponse = models_1.Models.ExportNonlocalLoginPlacesResponse;
const DescribeComponentStatisticsRequest = models_1.Models.DescribeComponentStatisticsRequest;
const DescribeOverviewStatisticsRequest = models_1.Models.DescribeOverviewStatisticsRequest;
const DescribeOpenPortStatisticsResponse = models_1.Models.DescribeOpenPortStatisticsResponse;
const DeleteAttackLogsResponse = models_1.Models.DeleteAttackLogsResponse;
const DescribeLoginWhiteListResponse = models_1.Models.DescribeLoginWhiteListResponse;
const DescribeVulInfoResponse = models_1.Models.DescribeVulInfoResponse;
const DescribeTagMachinesRequest = models_1.Models.DescribeTagMachinesRequest;
const EditReverseShellRuleRequest = models_1.Models.EditReverseShellRuleRequest;
const DescribeProVersionInfoResponse = models_1.Models.DescribeProVersionInfoResponse;
const DeleteTagsResponse = models_1.Models.DeleteTagsResponse;
const DeleteBruteAttacksRequest = models_1.Models.DeleteBruteAttacksRequest;
const DescribeWeeklyReportVulsRequest = models_1.Models.DescribeWeeklyReportVulsRequest;
const AddLoginWhiteListResponse = models_1.Models.AddLoginWhiteListResponse;
const BashRule = models_1.Models.BashRule;
const DescribeOpenPortTaskStatusResponse = models_1.Models.DescribeOpenPortTaskStatusResponse;
const DescribeWeeklyReportNonlocalLoginPlacesResponse = models_1.Models.DescribeWeeklyReportNonlocalLoginPlacesResponse;
const SeparateMalwaresRequest = models_1.Models.SeparateMalwaresRequest;
const RenewProVersionResponse = models_1.Models.RenewProVersionResponse;
const LoginWhiteListsRule = models_1.Models.LoginWhiteListsRule;
const DescribeTagMachinesResponse = models_1.Models.DescribeTagMachinesResponse;
const DescribeSecurityTrendsResponse = models_1.Models.DescribeSecurityTrendsResponse;
const ProVersionMachine = models_1.Models.ProVersionMachine;
const CreateOpenPortTaskRequest = models_1.Models.CreateOpenPortTaskRequest;
const DescribeWeeklyReportInfoResponse = models_1.Models.DescribeWeeklyReportInfoResponse;
const DescribeSecurityDynamicsResponse = models_1.Models.DescribeSecurityDynamicsResponse;
const DeleteReverseShellEventsResponse = models_1.Models.DeleteReverseShellEventsResponse;
const DeletePrivilegeEventsRequest = models_1.Models.DeletePrivilegeEventsRequest;
const DeleteBashRulesRequest = models_1.Models.DeleteBashRulesRequest;
const CloseProVersionResponse = models_1.Models.CloseProVersionResponse;
const DeleteAttackLogsRequest = models_1.Models.DeleteAttackLogsRequest;
const DescribeOpenPortsResponse = models_1.Models.DescribeOpenPortsResponse;
const EditBashRuleResponse = models_1.Models.EditBashRuleResponse;
const OpenProVersionResponse = models_1.Models.OpenProVersionResponse;
const DescribeMachineInfoRequest = models_1.Models.DescribeMachineInfoRequest;
const DescribeMaliciousRequestsRequest = models_1.Models.DescribeMaliciousRequestsRequest;
const DescribeProcessesRequest = models_1.Models.DescribeProcessesRequest;
const DeleteUsualLoginPlacesRequest = models_1.Models.DeleteUsualLoginPlacesRequest;
const WeeklyReport = models_1.Models.WeeklyReport;
const DescribeOpenPortTaskStatusRequest = models_1.Models.DescribeOpenPortTaskStatusRequest;
const Filter = models_1.Models.Filter;
const DeleteLoginWhiteListResponse = models_1.Models.DeleteLoginWhiteListResponse;
const DescribeAccountStatisticsRequest = models_1.Models.DescribeAccountStatisticsRequest;
const DescribeAttackLogsResponse = models_1.Models.DescribeAttackLogsResponse;
const OpenProVersionPrepaidResponse = models_1.Models.OpenProVersionPrepaidResponse;
const MisAlarmNonlocalLoginPlacesResponse = models_1.Models.MisAlarmNonlocalLoginPlacesResponse;
const DeleteMalwaresResponse = models_1.Models.DeleteMalwaresResponse;
const ChargePrepaid = models_1.Models.ChargePrepaid;
const DescribeWeeklyReportNonlocalLoginPlacesRequest = models_1.Models.DescribeWeeklyReportNonlocalLoginPlacesRequest;
const SeparateMalwaresResponse = models_1.Models.SeparateMalwaresResponse;
const ProcessStatistics = models_1.Models.ProcessStatistics;
const Process = models_1.Models.Process;
const DescribeBruteAttacksRequest = models_1.Models.DescribeBruteAttacksRequest;
const DescribeVulScanResultRequest = models_1.Models.DescribeVulScanResultRequest;
const DescribePrivilegeEventsRequest = models_1.Models.DescribePrivilegeEventsRequest;
const DescribeWeeklyReportMalwaresResponse = models_1.Models.DescribeWeeklyReportMalwaresResponse;
const DescribeSecurityDynamicsRequest = models_1.Models.DescribeSecurityDynamicsRequest;
const ExportBashEventsResponse = models_1.Models.ExportBashEventsResponse;
const ImpactedHost = models_1.Models.ImpactedHost;
const DescribeReverseShellRulesResponse = models_1.Models.DescribeReverseShellRulesResponse;
const DescribeComponentInfoRequest = models_1.Models.DescribeComponentInfoRequest;
const DeleteNonlocalLoginPlacesRequest = models_1.Models.DeleteNonlocalLoginPlacesRequest;
const EditPrivilegeRuleRequest = models_1.Models.EditPrivilegeRuleRequest;
const ExportMaliciousRequestsRequest = models_1.Models.ExportMaliciousRequestsRequest;
const AccountStatistics = models_1.Models.AccountStatistics;
const DescribeMachinesResponse = models_1.Models.DescribeMachinesResponse;
const CreateUsualLoginPlacesResponse = models_1.Models.CreateUsualLoginPlacesResponse;
const DescribePrivilegeRulesResponse = models_1.Models.DescribePrivilegeRulesResponse;
const ModifyProVersionRenewFlagResponse = models_1.Models.ModifyProVersionRenewFlagResponse;
const Machine = models_1.Models.Machine;
const TrustMalwaresRequest = models_1.Models.TrustMalwaresRequest;
const Malware = models_1.Models.Malware;
const DescribeWeeklyReportVulsResponse = models_1.Models.DescribeWeeklyReportVulsResponse;
const WeeklyReportBruteAttack = models_1.Models.WeeklyReportBruteAttack;
const DefendAttackLog = models_1.Models.DefendAttackLog;
const PrivilegeRule = models_1.Models.PrivilegeRule;
const HistoryAccount = models_1.Models.HistoryAccount;
const ModifyProVersionRenewFlagRequest = models_1.Models.ModifyProVersionRenewFlagRequest;
const TrustMaliciousRequestResponse = models_1.Models.TrustMaliciousRequestResponse;
const DescribeUsualLoginPlacesRequest = models_1.Models.DescribeUsualLoginPlacesRequest;
const Component = models_1.Models.Component;
const DescribeVulsRequest = models_1.Models.DescribeVulsRequest;
const DescribeAgentVulsResponse = models_1.Models.DescribeAgentVulsResponse;
const SwitchBashRulesRequest = models_1.Models.SwitchBashRulesRequest;
const DescribeProcessStatisticsRequest = models_1.Models.DescribeProcessStatisticsRequest;
const DeleteMachineTagResponse = models_1.Models.DeleteMachineTagResponse;
const DescribeHistoryAccountsRequest = models_1.Models.DescribeHistoryAccountsRequest;
const DescribeMachineInfoResponse = models_1.Models.DescribeMachineInfoResponse;
const OpenProVersionRequest = models_1.Models.OpenProVersionRequest;
const DeleteBashRulesResponse = models_1.Models.DeleteBashRulesResponse;
const IgnoreImpactedHostsResponse = models_1.Models.IgnoreImpactedHostsResponse;
const DeleteBashEventsRequest = models_1.Models.DeleteBashEventsRequest;
const DescribeComponentsResponse = models_1.Models.DescribeComponentsResponse;
const Tag = models_1.Models.Tag;
const RescanImpactedHostResponse = models_1.Models.RescanImpactedHostResponse;
const SecurityTrend = models_1.Models.SecurityTrend;
const Vul = models_1.Models.Vul;
const AddMachineTagRequest = models_1.Models.AddMachineTagRequest;
const DescribeWeeklyReportsResponse = models_1.Models.DescribeWeeklyReportsResponse;
const DeleteReverseShellEventsRequest = models_1.Models.DeleteReverseShellEventsRequest;
const ModifyAutoOpenProVersionConfigResponse = models_1.Models.ModifyAutoOpenProVersionConfigResponse;
const ExportReverseShellEventsRequest = models_1.Models.ExportReverseShellEventsRequest;
const DescribeVulsResponse = models_1.Models.DescribeVulsResponse;
const RecoverMalwaresResponse = models_1.Models.RecoverMalwaresResponse;
const EditTagsResponse = models_1.Models.EditTagsResponse;
const IgnoreImpactedHostsRequest = models_1.Models.IgnoreImpactedHostsRequest;
const DescribeAlarmAttributeRequest = models_1.Models.DescribeAlarmAttributeRequest;
const DescribeMalwaresRequest = models_1.Models.DescribeMalwaresRequest;
const DeleteBruteAttacksResponse = models_1.Models.DeleteBruteAttacksResponse;
const DeleteMaliciousRequestsRequest = models_1.Models.DeleteMaliciousRequestsRequest;
const DescribeMachinesRequest = models_1.Models.DescribeMachinesRequest;
const ModifyAlarmAttributeResponse = models_1.Models.ModifyAlarmAttributeResponse;
const BashEvent = models_1.Models.BashEvent;
const DeleteMalwaresRequest = models_1.Models.DeleteMalwaresRequest;
const DescribeMalwaresResponse = models_1.Models.DescribeMalwaresResponse;
const DeletePrivilegeRulesRequest = models_1.Models.DeletePrivilegeRulesRequest;
/**
 * yunjing client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("yunjing.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    /**
     * 删除标签
     * @param {DeleteTagsRequest} req
     * @param {function(string, DeleteTagsResponse):void} cb
     * @public
     */
    DeleteTags(req, cb) {
        const resp = new DeleteTagsResponse();
        this.request("DeleteTags", req, resp, cb);
    }
    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     * @param {TrustMalwaresRequest} req
     * @param {function(string, TrustMalwaresResponse):void} cb
     * @public
     */
    TrustMalwares(req, cb) {
        const resp = new TrustMalwaresResponse();
        this.request("TrustMalwares", req, resp, cb);
    }
    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     * @param {DescribeComponentStatisticsRequest} req
     * @param {function(string, DescribeComponentStatisticsResponse):void} cb
     * @public
     */
    DescribeComponentStatistics(req, cb) {
        const resp = new DescribeComponentStatisticsResponse();
        this.request("DescribeComponentStatistics", req, resp, cb);
    }
    /**
     * 删除服务器关联的标签
     * @param {DeleteMachineTagRequest} req
     * @param {function(string, DeleteMachineTagResponse):void} cb
     * @public
     */
    DeleteMachineTag(req, cb) {
        const resp = new DeleteMachineTagResponse();
        this.request("DeleteMachineTag", req, resp, cb);
    }
    /**
     * 按分页形式展示网络攻击日志列表
     * @param {DescribeAttackLogsRequest} req
     * @param {function(string, DescribeAttackLogsResponse):void} cb
     * @public
     */
    DescribeAttackLogs(req, cb) {
        const resp = new DescribeAttackLogsResponse();
        this.request("DescribeAttackLogs", req, resp, cb);
    }
    /**
     * 本接口 (OpenProVersion) 用于开通专业版。
     * @param {OpenProVersionRequest} req
     * @param {function(string, OpenProVersionResponse):void} cb
     * @public
     */
    OpenProVersion(req, cb) {
        const resp = new OpenProVersionResponse();
        this.request("OpenProVersion", req, resp, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportMalwares) 用于获取专业周报木马数据。
     * @param {DescribeWeeklyReportMalwaresRequest} req
     * @param {function(string, DescribeWeeklyReportMalwaresResponse):void} cb
     * @public
     */
    DescribeWeeklyReportMalwares(req, cb) {
        const resp = new DescribeWeeklyReportMalwaresResponse();
        this.request("DescribeWeeklyReportMalwares", req, resp, cb);
    }
    /**
     * 本接口 (DescribeVulInfo) 用于获取漏洞详情。
     * @param {DescribeVulInfoRequest} req
     * @param {function(string, DescribeVulInfoResponse):void} cb
     * @public
     */
    DescribeVulInfo(req, cb) {
        const resp = new DescribeVulInfoResponse();
        this.request("DescribeVulInfo", req, resp, cb);
    }
    /**
     * 新增或修改高危命令规则
     * @param {EditBashRuleRequest} req
     * @param {function(string, EditBashRuleResponse):void} cb
     * @public
     */
    EditBashRule(req, cb) {
        const resp = new EditBashRuleResponse();
        this.request("EditBashRule", req, resp, cb);
    }
    /**
     * 本接口（DeleteUsualLoginPlaces）用于删除常用登录地。
     * @param {DeleteUsualLoginPlacesRequest} req
     * @param {function(string, DeleteUsualLoginPlacesResponse):void} cb
     * @public
     */
    DeleteUsualLoginPlaces(req, cb) {
        const resp = new DeleteUsualLoginPlacesResponse();
        this.request("DeleteUsualLoginPlaces", req, resp, cb);
    }
    /**
     * 本接口 (DescribeVuls) 用于获取漏洞列表数据。
     * @param {DescribeVulsRequest} req
     * @param {function(string, DescribeVulsResponse):void} cb
     * @public
     */
    DescribeVuls(req, cb) {
        const resp = new DescribeVulsResponse();
        this.request("DescribeVuls", req, resp, cb);
    }
    /**
     * 本接口{MisAlarmNonlocalLoginPlaces}将设置当前地点为常用登录地。
     * @param {MisAlarmNonlocalLoginPlacesRequest} req
     * @param {function(string, MisAlarmNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    MisAlarmNonlocalLoginPlaces(req, cb) {
        const resp = new MisAlarmNonlocalLoginPlacesResponse();
        this.request("MisAlarmNonlocalLoginPlaces", req, resp, cb);
    }
    /**
     * 根据策略信息创建基线策略
     * @param {CreateBaselineStrategyRequest} req
     * @param {function(string, CreateBaselineStrategyResponse):void} cb
     * @public
     */
    CreateBaselineStrategy(req, cb) {
        const resp = new CreateBaselineStrategyResponse();
        this.request("CreateBaselineStrategy", req, resp, cb);
    }
    /**
     * 获取高危命令规则列表
     * @param {DescribeBashRulesRequest} req
     * @param {function(string, DescribeBashRulesResponse):void} cb
     * @public
     */
    DescribeBashRules(req, cb) {
        const resp = new DescribeBashRulesResponse();
        this.request("DescribeBashRules", req, resp, cb);
    }
    /**
     * 根据Ids删除本地提权
     * @param {DeletePrivilegeEventsRequest} req
     * @param {function(string, DeletePrivilegeEventsResponse):void} cb
     * @public
     */
    DeletePrivilegeEvents(req, cb) {
        const resp = new DeletePrivilegeEventsResponse();
        this.request("DeletePrivilegeEvents", req, resp, cb);
    }
    /**
     * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
     * @param {RenewProVersionRequest} req
     * @param {function(string, RenewProVersionResponse):void} cb
     * @public
     */
    RenewProVersion(req, cb) {
        const resp = new RenewProVersionResponse();
        this.request("RenewProVersion", req, resp, cb);
    }
    /**
     * 导出网络攻击日志
     * @param {ExportAttackLogsRequest} req
     * @param {function(string, ExportAttackLogsResponse):void} cb
     * @public
     */
    ExportAttackLogs(req, cb) {
        const resp = new ExportAttackLogsResponse();
        this.request("ExportAttackLogs", req, resp, cb);
    }
    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     * @param {DescribeUsualLoginPlacesRequest} req
     * @param {function(string, DescribeUsualLoginPlacesResponse):void} cb
     * @public
     */
    DescribeUsualLoginPlaces(req, cb) {
        const resp = new DescribeUsualLoginPlacesResponse();
        this.request("DescribeUsualLoginPlaces", req, resp, cb);
    }
    /**
     * 根据Ids删除高危命令事件
     * @param {DeleteBashEventsRequest} req
     * @param {function(string, DeleteBashEventsResponse):void} cb
     * @public
     */
    DeleteBashEvents(req, cb) {
        const resp = new DeleteBashEventsResponse();
        this.request("DeleteBashEvents", req, resp, cb);
    }
    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     * @param {DeleteMaliciousRequestsRequest} req
     * @param {function(string, DeleteMaliciousRequestsResponse):void} cb
     * @public
     */
    DeleteMaliciousRequests(req, cb) {
        const resp = new DeleteMaliciousRequestsResponse();
        this.request("DeleteMaliciousRequests", req, resp, cb);
    }
    /**
     * 获取反弹Shell规则列表
     * @param {DescribeReverseShellRulesRequest} req
     * @param {function(string, DescribeReverseShellRulesResponse):void} cb
     * @public
     */
    DescribeReverseShellRules(req, cb) {
        const resp = new DescribeReverseShellRulesResponse();
        this.request("DescribeReverseShellRules", req, resp, cb);
    }
    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     * @param {RecoverMalwaresRequest} req
     * @param {function(string, RecoverMalwaresResponse):void} cb
     * @public
     */
    RecoverMalwares(req, cb) {
        const resp = new RecoverMalwaresResponse();
        this.request("RecoverMalwares", req, resp, cb);
    }
    /**
     * 删除反弹Shell规则
     * @param {DeleteReverseShellRulesRequest} req
     * @param {function(string, DeleteReverseShellRulesResponse):void} cb
     * @public
     */
    DeleteReverseShellRules(req, cb) {
        const resp = new DeleteReverseShellRulesResponse();
        this.request("DeleteReverseShellRules", req, resp, cb);
    }
    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     * @param {DeleteBruteAttacksRequest} req
     * @param {function(string, DeleteBruteAttacksResponse):void} cb
     * @public
     */
    DeleteBruteAttacks(req, cb) {
        const resp = new DeleteBruteAttacksResponse();
        this.request("DeleteBruteAttacks", req, resp, cb);
    }
    /**
     * 导出高危命令事件
     * @param {ExportBashEventsRequest} req
     * @param {function(string, ExportBashEventsResponse):void} cb
     * @public
     */
    ExportBashEvents(req, cb) {
        const resp = new ExportBashEventsResponse();
        this.request("ExportBashEvents", req, resp, cb);
    }
    /**
     * 本接口 (CreateProcessTask) 用于创建实时拉取进程任务。
     * @param {CreateProcessTaskRequest} req
     * @param {function(string, CreateProcessTaskResponse):void} cb
     * @public
     */
    CreateProcessTask(req, cb) {
        const resp = new CreateProcessTaskResponse();
        this.request("CreateProcessTask", req, resp, cb);
    }
    /**
     * 编辑反弹Shell规则
     * @param {EditReverseShellRuleRequest} req
     * @param {function(string, EditReverseShellRuleResponse):void} cb
     * @public
     */
    EditReverseShellRule(req, cb) {
        const resp = new EditReverseShellRuleResponse();
        this.request("EditReverseShellRule", req, resp, cb);
    }
    /**
     * 本接口 (DescribeProcesses) 用于获取进程列表数据。
     * @param {DescribeProcessesRequest} req
     * @param {function(string, DescribeProcessesResponse):void} cb
     * @public
     */
    DescribeProcesses(req, cb) {
        const resp = new DescribeProcessesResponse();
        this.request("DescribeProcesses", req, resp, cb);
    }
    /**
     * 本接口（DescribeMalwares）用于获取木马事件列表。
     * @param {DescribeMalwaresRequest} req
     * @param {function(string, DescribeMalwaresResponse):void} cb
     * @public
     */
    DescribeMalwares(req, cb) {
        const resp = new DescribeMalwaresResponse();
        this.request("DescribeMalwares", req, resp, cb);
    }
    /**
     * 编辑白名单规则
     * @param {ModifyLoginWhiteListRequest} req
     * @param {function(string, ModifyLoginWhiteListResponse):void} cb
     * @public
     */
    ModifyLoginWhiteList(req, cb) {
        const resp = new ModifyLoginWhiteListResponse();
        this.request("ModifyLoginWhiteList", req, resp, cb);
    }
    /**
     * 获取本地提权规则列表
     * @param {DescribePrivilegeRulesRequest} req
     * @param {function(string, DescribePrivilegeRulesResponse):void} cb
     * @public
     */
    DescribePrivilegeRules(req, cb) {
        const resp = new DescribePrivilegeRulesResponse();
        this.request("DescribePrivilegeRules", req, resp, cb);
    }
    /**
     * 本接口 (UntrustMaliciousRequest) 用于取消信任恶意请求。
     * @param {UntrustMaliciousRequestRequest} req
     * @param {function(string, UntrustMaliciousRequestResponse):void} cb
     * @public
     */
    UntrustMaliciousRequest(req, cb) {
        const resp = new UntrustMaliciousRequestResponse();
        this.request("UntrustMaliciousRequest", req, resp, cb);
    }
    /**
     * 本接口 (DescribeImpactedHosts) 用于获取漏洞受影响机器列表。
     * @param {DescribeImpactedHostsRequest} req
     * @param {function(string, DescribeImpactedHostsResponse):void} cb
     * @public
     */
    DescribeImpactedHosts(req, cb) {
        const resp = new DescribeImpactedHostsResponse();
        this.request("DescribeImpactedHosts", req, resp, cb);
    }
    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     * @param {DeleteNonlocalLoginPlacesRequest} req
     * @param {function(string, DeleteNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DeleteNonlocalLoginPlaces(req, cb) {
        const resp = new DeleteNonlocalLoginPlacesResponse();
        this.request("DeleteNonlocalLoginPlaces", req, resp, cb);
    }
    /**
     * 本接口 (DescribeOpenPorts) 用于获取端口列表数据。

     * @param {DescribeOpenPortsRequest} req
     * @param {function(string, DescribeOpenPortsResponse):void} cb
     * @public
     */
    DescribeOpenPorts(req, cb) {
        const resp = new DescribeOpenPortsResponse();
        this.request("DescribeOpenPorts", req, resp, cb);
    }
    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     * @param {ExportMaliciousRequestsRequest} req
     * @param {function(string, ExportMaliciousRequestsResponse):void} cb
     * @public
     */
    ExportMaliciousRequests(req, cb) {
        const resp = new ExportMaliciousRequestsResponse();
        this.request("ExportMaliciousRequests", req, resp, cb);
    }
    /**
     * 获取指定标签关联的服务器信息
     * @param {DescribeTagMachinesRequest} req
     * @param {function(string, DescribeTagMachinesResponse):void} cb
     * @public
     */
    DescribeTagMachines(req, cb) {
        const resp = new DescribeTagMachinesResponse();
        this.request("DescribeTagMachines", req, resp, cb);
    }
    /**
     * 本接口(DescribeNonlocalLoginPlaces)用于获取异地登录事件。
     * @param {DescribeNonlocalLoginPlacesRequest} req
     * @param {function(string, DescribeNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DescribeNonlocalLoginPlaces(req, cb) {
        const resp = new DescribeNonlocalLoginPlacesResponse();
        this.request("DescribeNonlocalLoginPlaces", req, resp, cb);
    }
    /**
     * 导出本地提权事件
     * @param {ExportPrivilegeEventsRequest} req
     * @param {function(string, ExportPrivilegeEventsResponse):void} cb
     * @public
     */
    ExportPrivilegeEvents(req, cb) {
        const resp = new ExportPrivilegeEventsResponse();
        this.request("ExportPrivilegeEvents", req, resp, cb);
    }
    /**
     * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
     * @param {DescribeOverviewStatisticsRequest} req
     * @param {function(string, DescribeOverviewStatisticsResponse):void} cb
     * @public
     */
    DescribeOverviewStatistics(req, cb) {
        const resp = new DescribeOverviewStatisticsResponse();
        this.request("DescribeOverviewStatistics", req, resp, cb);
    }
    /**
     * 本接口 (DescribeOpenPortTaskStatus) 用于获取实时拉取端口任务状态。
     * @param {DescribeOpenPortTaskStatusRequest} req
     * @param {function(string, DescribeOpenPortTaskStatusResponse):void} cb
     * @public
     */
    DescribeOpenPortTaskStatus(req, cb) {
        const resp = new DescribeOpenPortTaskStatusResponse();
        this.request("DescribeOpenPortTaskStatus", req, resp, cb);
    }
    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
     * @param {DescribeSecurityDynamicsRequest} req
     * @param {function(string, DescribeSecurityDynamicsResponse):void} cb
     * @public
     */
    DescribeSecurityDynamics(req, cb) {
        const resp = new DescribeSecurityDynamicsResponse();
        this.request("DescribeSecurityDynamics", req, resp, cb);
    }
    /**
     * 根据Ids删除反弹Shell事件
     * @param {DeleteReverseShellEventsRequest} req
     * @param {function(string, DeleteReverseShellEventsResponse):void} cb
     * @public
     */
    DeleteReverseShellEvents(req, cb) {
        const resp = new DeleteReverseShellEventsResponse();
        this.request("DeleteReverseShellEvents", req, resp, cb);
    }
    /**
     * 删除本地提权规则
     * @param {DeletePrivilegeRulesRequest} req
     * @param {function(string, DeletePrivilegeRulesResponse):void} cb
     * @public
     */
    DeletePrivilegeRules(req, cb) {
        const resp = new DeletePrivilegeRulesResponse();
        this.request("DeletePrivilegeRules", req, resp, cb);
    }
    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     * @param {DeleteMalwaresRequest} req
     * @param {function(string, DeleteMalwaresResponse):void} cb
     * @public
     */
    DeleteMalwares(req, cb) {
        const resp = new DeleteMalwaresResponse();
        this.request("DeleteMalwares", req, resp, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportNonlocalLoginPlaces) 用于获取专业周报异地登录数据。
     * @param {DescribeWeeklyReportNonlocalLoginPlacesRequest} req
     * @param {function(string, DescribeWeeklyReportNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    DescribeWeeklyReportNonlocalLoginPlaces(req, cb) {
        const resp = new DescribeWeeklyReportNonlocalLoginPlacesResponse();
        this.request("DescribeWeeklyReportNonlocalLoginPlaces", req, resp, cb);
    }
    /**
     * 删除白名单规则
     * @param {DeleteLoginWhiteListRequest} req
     * @param {function(string, DeleteLoginWhiteListResponse):void} cb
     * @public
     */
    DeleteLoginWhiteList(req, cb) {
        const resp = new DeleteLoginWhiteListResponse();
        this.request("DeleteLoginWhiteList", req, resp, cb);
    }
    /**
     * 本接口 (CreateOpenPortTask) 用于创建实时获取端口任务。
     * @param {CreateOpenPortTaskRequest} req
     * @param {function(string, CreateOpenPortTaskResponse):void} cb
     * @public
     */
    CreateOpenPortTask(req, cb) {
        const resp = new CreateOpenPortTaskResponse();
        this.request("CreateOpenPortTask", req, resp, cb);
    }
    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     * @param {CloseProVersionRequest} req
     * @param {function(string, CloseProVersionResponse):void} cb
     * @public
     */
    CloseProVersion(req, cb) {
        const resp = new CloseProVersionResponse();
        this.request("CloseProVersion", req, resp, cb);
    }
    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     * @param {DescribeAccountStatisticsRequest} req
     * @param {function(string, DescribeAccountStatisticsResponse):void} cb
     * @public
     */
    DescribeAccountStatistics(req, cb) {
        const resp = new DescribeAccountStatisticsResponse();
        this.request("DescribeAccountStatistics", req, resp, cb);
    }
    /**
     * 本接口（ModifyAlarmAttribute）用于修改告警设置。
     * @param {ModifyAlarmAttributeRequest} req
     * @param {function(string, ModifyAlarmAttributeResponse):void} cb
     * @public
     */
    ModifyAlarmAttribute(req, cb) {
        const resp = new ModifyAlarmAttributeResponse();
        this.request("ModifyAlarmAttribute", req, resp, cb);
    }
    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     * @param {DescribeOpenPortStatisticsRequest} req
     * @param {function(string, DescribeOpenPortStatisticsResponse):void} cb
     * @public
     */
    DescribeOpenPortStatistics(req, cb) {
        const resp = new DescribeOpenPortStatisticsResponse();
        this.request("DescribeOpenPortStatistics", req, resp, cb);
    }
    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     * @param {ExportBruteAttacksRequest} req
     * @param {function(string, ExportBruteAttacksResponse):void} cb
     * @public
     */
    ExportBruteAttacks(req, cb) {
        const resp = new ExportBruteAttacksResponse();
        this.request("ExportBruteAttacks", req, resp, cb);
    }
    /**
     * 本接口 (TrustMaliciousRequest) 用于恶意请求添加信任。
     * @param {TrustMaliciousRequestRequest} req
     * @param {function(string, TrustMaliciousRequestResponse):void} cb
     * @public
     */
    TrustMaliciousRequest(req, cb) {
        const resp = new TrustMaliciousRequestResponse();
        this.request("TrustMaliciousRequest", req, resp, cb);
    }
    /**
     * 切换高危命令规则状态
     * @param {SwitchBashRulesRequest} req
     * @param {function(string, SwitchBashRulesResponse):void} cb
     * @public
     */
    SwitchBashRules(req, cb) {
        const resp = new SwitchBashRulesResponse();
        this.request("SwitchBashRules", req, resp, cb);
    }
    /**
     * 新增或修改本地提权规则
     * @param {EditPrivilegeRuleRequest} req
     * @param {function(string, EditPrivilegeRuleResponse):void} cb
     * @public
     */
    EditPrivilegeRule(req, cb) {
        const resp = new EditPrivilegeRuleResponse();
        this.request("EditPrivilegeRule", req, resp, cb);
    }
    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     * @param {ExportMalwaresRequest} req
     * @param {function(string, ExportMalwaresResponse):void} cb
     * @public
     */
    ExportMalwares(req, cb) {
        const resp = new ExportMalwaresResponse();
        this.request("ExportMalwares", req, resp, cb);
    }
    /**
     * 本接口{DescribeBruteAttacks}用于获取暴力破解事件列表。
     * @param {DescribeBruteAttacksRequest} req
     * @param {function(string, DescribeBruteAttacksResponse):void} cb
     * @public
     */
    DescribeBruteAttacks(req, cb) {
        const resp = new DescribeBruteAttacksResponse();
        this.request("DescribeBruteAttacks", req, resp, cb);
    }
    /**
     * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
     * @param {OpenProVersionPrepaidRequest} req
     * @param {function(string, OpenProVersionPrepaidResponse):void} cb
     * @public
     */
    OpenProVersionPrepaid(req, cb) {
        const resp = new OpenProVersionPrepaidResponse();
        this.request("OpenProVersionPrepaid", req, resp, cb);
    }
    /**
     * 增加机器关联标签
     * @param {AddMachineTagRequest} req
     * @param {function(string, AddMachineTagResponse):void} cb
     * @public
     */
    AddMachineTag(req, cb) {
        const resp = new AddMachineTagResponse();
        this.request("AddMachineTag", req, resp, cb);
    }
    /**
     * 新增或编辑标签
     * @param {EditTagsRequest} req
     * @param {function(string, EditTagsResponse):void} cb
     * @public
     */
    EditTags(req, cb) {
        const resp = new EditTagsResponse();
        this.request("EditTags", req, resp, cb);
    }
    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     * @param {SeparateMalwaresRequest} req
     * @param {function(string, SeparateMalwaresResponse):void} cb
     * @public
     */
    SeparateMalwares(req, cb) {
        const resp = new SeparateMalwaresResponse();
        this.request("SeparateMalwares", req, resp, cb);
    }
    /**
     * 本接口（AddLoginWhiteList）用于添加白名单规则
     * @param {AddLoginWhiteListRequest} req
     * @param {function(string, AddLoginWhiteListResponse):void} cb
     * @public
     */
    AddLoginWhiteList(req, cb) {
        const resp = new AddLoginWhiteListResponse();
        this.request("AddLoginWhiteList", req, resp, cb);
    }
    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     * @param {ExportNonlocalLoginPlacesRequest} req
     * @param {function(string, ExportNonlocalLoginPlacesResponse):void} cb
     * @public
     */
    ExportNonlocalLoginPlaces(req, cb) {
        const resp = new ExportNonlocalLoginPlacesResponse();
        this.request("ExportNonlocalLoginPlaces", req, resp, cb);
    }
    /**
     * 本接口 (DescribeMaliciousRequests) 用于获取恶意请求数据。
     * @param {DescribeMaliciousRequestsRequest} req
     * @param {function(string, DescribeMaliciousRequestsResponse):void} cb
     * @public
     */
    DescribeMaliciousRequests(req, cb) {
        const resp = new DescribeMaliciousRequestsResponse();
        this.request("DescribeMaliciousRequests", req, resp, cb);
    }
    /**
     * 删除高危命令规则
     * @param {DeleteBashRulesRequest} req
     * @param {function(string, DeleteBashRulesResponse):void} cb
     * @public
     */
    DeleteBashRules(req, cb) {
        const resp = new DeleteBashRulesResponse();
        this.request("DeleteBashRules", req, resp, cb);
    }
    /**
     * 获取反弹Shell列表
     * @param {DescribeReverseShellEventsRequest} req
     * @param {function(string, DescribeReverseShellEventsResponse):void} cb
     * @public
     */
    DescribeReverseShellEvents(req, cb) {
        const resp = new DescribeReverseShellEventsResponse();
        this.request("DescribeReverseShellEvents", req, resp, cb);
    }
    /**
     * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
     * @param {ModifyAutoOpenProVersionConfigRequest} req
     * @param {function(string, ModifyAutoOpenProVersionConfigResponse):void} cb
     * @public
     */
    ModifyAutoOpenProVersionConfig(req, cb) {
        const resp = new ModifyAutoOpenProVersionConfigResponse();
        this.request("ModifyAutoOpenProVersionConfig", req, resp, cb);
    }
    /**
     * 本接口 (DescribeAgentVuls) 用于获取单台主机的漏洞列表。
     * @param {DescribeAgentVulsRequest} req
     * @param {function(string, DescribeAgentVulsResponse):void} cb
     * @public
     */
    DescribeAgentVuls(req, cb) {
        const resp = new DescribeAgentVulsResponse();
        this.request("DescribeAgentVuls", req, resp, cb);
    }
    /**
     * 本接口 (DescribeAccounts) 用于获取帐号列表数据。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        const resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReports) 用于获取周报列表数据。
     * @param {DescribeWeeklyReportsRequest} req
     * @param {function(string, DescribeWeeklyReportsResponse):void} cb
     * @public
     */
    DescribeWeeklyReports(req, cb) {
        const resp = new DescribeWeeklyReportsResponse();
        this.request("DescribeWeeklyReports", req, resp, cb);
    }
    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     * @param {DescribeProVersionInfoRequest} req
     * @param {function(string, DescribeProVersionInfoResponse):void} cb
     * @public
     */
    DescribeProVersionInfo(req, cb) {
        const resp = new DescribeProVersionInfoResponse();
        this.request("DescribeProVersionInfo", req, resp, cb);
    }
    /**
     * 获取本地提权事件列表
     * @param {DescribePrivilegeEventsRequest} req
     * @param {function(string, DescribePrivilegeEventsResponse):void} cb
     * @public
     */
    DescribePrivilegeEvents(req, cb) {
        const resp = new DescribePrivilegeEventsResponse();
        this.request("DescribePrivilegeEvents", req, resp, cb);
    }
    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     * @param {DescribeMachineInfoRequest} req
     * @param {function(string, DescribeMachineInfoResponse):void} cb
     * @public
     */
    DescribeMachineInfo(req, cb) {
        const resp = new DescribeMachineInfoResponse();
        this.request("DescribeMachineInfo", req, resp, cb);
    }
    /**
     * 本接口 (DescribeAlarmAttribute) 用于获取告警设置。
     * @param {DescribeAlarmAttributeRequest} req
     * @param {function(string, DescribeAlarmAttributeResponse):void} cb
     * @public
     */
    DescribeAlarmAttribute(req, cb) {
        const resp = new DescribeAlarmAttributeResponse();
        this.request("DescribeAlarmAttribute", req, resp, cb);
    }
    /**
     * 本接口 (DescribeComponents) 用于获取组件列表数据。
     * @param {DescribeComponentsRequest} req
     * @param {function(string, DescribeComponentsResponse):void} cb
     * @public
     */
    DescribeComponents(req, cb) {
        const resp = new DescribeComponentsResponse();
        this.request("DescribeComponents", req, resp, cb);
    }
    /**
     * 获取异地登录白名单列表
     * @param {DescribeLoginWhiteListRequest} req
     * @param {function(string, DescribeLoginWhiteListResponse):void} cb
     * @public
     */
    DescribeLoginWhiteList(req, cb) {
        const resp = new DescribeLoginWhiteListResponse();
        this.request("DescribeLoginWhiteList", req, resp, cb);
    }
    /**
     * 本接口 (DescribeVulScanResult) 用于获取漏洞检测结果。

     * @param {DescribeVulScanResultRequest} req
     * @param {function(string, DescribeVulScanResultResponse):void} cb
     * @public
     */
    DescribeVulScanResult(req, cb) {
        const resp = new DescribeVulScanResultResponse();
        this.request("DescribeVulScanResult", req, resp, cb);
    }
    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     * @param {DescribeHistoryAccountsRequest} req
     * @param {function(string, DescribeHistoryAccountsResponse):void} cb
     * @public
     */
    DescribeHistoryAccounts(req, cb) {
        const resp = new DescribeHistoryAccountsResponse();
        this.request("DescribeHistoryAccounts", req, resp, cb);
    }
    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     * @param {DescribeProcessStatisticsRequest} req
     * @param {function(string, DescribeProcessStatisticsResponse):void} cb
     * @public
     */
    DescribeProcessStatistics(req, cb) {
        const resp = new DescribeProcessStatisticsResponse();
        this.request("DescribeProcessStatistics", req, resp, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportBruteAttacks) 用于获取专业周报密码破解数据。
     * @param {DescribeWeeklyReportBruteAttacksRequest} req
     * @param {function(string, DescribeWeeklyReportBruteAttacksResponse):void} cb
     * @public
     */
    DescribeWeeklyReportBruteAttacks(req, cb) {
        const resp = new DescribeWeeklyReportBruteAttacksResponse();
        this.request("DescribeWeeklyReportBruteAttacks", req, resp, cb);
    }
    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     * @param {UntrustMalwaresRequest} req
     * @param {function(string, UntrustMalwaresResponse):void} cb
     * @public
     */
    UntrustMalwares(req, cb) {
        const resp = new UntrustMalwaresResponse();
        this.request("UntrustMalwares", req, resp, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportVuls) 用于专业版周报漏洞数据。

     * @param {DescribeWeeklyReportVulsRequest} req
     * @param {function(string, DescribeWeeklyReportVulsResponse):void} cb
     * @public
     */
    DescribeWeeklyReportVuls(req, cb) {
        const resp = new DescribeWeeklyReportVulsResponse();
        this.request("DescribeWeeklyReportVuls", req, resp, cb);
    }
    /**
     * 本接口 (DescribeWeeklyReportInfo) 用于获取专业周报详情数据。
     * @param {DescribeWeeklyReportInfoRequest} req
     * @param {function(string, DescribeWeeklyReportInfoResponse):void} cb
     * @public
     */
    DescribeWeeklyReportInfo(req, cb) {
        const resp = new DescribeWeeklyReportInfoResponse();
        this.request("DescribeWeeklyReportInfo", req, resp, cb);
    }
    /**
     * 本接口 (DescribeComponentInfo) 用于获取组件信息数据。
     * @param {DescribeComponentInfoRequest} req
     * @param {function(string, DescribeComponentInfoResponse):void} cb
     * @public
     */
    DescribeComponentInfo(req, cb) {
        const resp = new DescribeComponentInfoResponse();
        this.request("DescribeComponentInfo", req, resp, cb);
    }
    /**
     * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
     * @param {ModifyProVersionRenewFlagRequest} req
     * @param {function(string, ModifyProVersionRenewFlagResponse):void} cb
     * @public
     */
    ModifyProVersionRenewFlag(req, cb) {
        const resp = new ModifyProVersionRenewFlagResponse();
        this.request("ModifyProVersionRenewFlag", req, resp, cb);
    }
    /**
     * 设置高危命令事件状态
     * @param {SetBashEventsStatusRequest} req
     * @param {function(string, SetBashEventsStatusResponse):void} cb
     * @public
     */
    SetBashEventsStatus(req, cb) {
        const resp = new SetBashEventsStatusResponse();
        this.request("SetBashEventsStatus", req, resp, cb);
    }
    /**
     * 导出反弹Shell事件
     * @param {ExportReverseShellEventsRequest} req
     * @param {function(string, ExportReverseShellEventsResponse):void} cb
     * @public
     */
    ExportReverseShellEvents(req, cb) {
        const resp = new ExportReverseShellEventsResponse();
        this.request("ExportReverseShellEvents", req, resp, cb);
    }
    /**
     * 删除网络攻击日志
     * @param {DeleteAttackLogsRequest} req
     * @param {function(string, DeleteAttackLogsResponse):void} cb
     * @public
     */
    DeleteAttackLogs(req, cb) {
        const resp = new DeleteAttackLogsResponse();
        this.request("DeleteAttackLogs", req, resp, cb);
    }
    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     * @param {DeleteMachineRequest} req
     * @param {function(string, DeleteMachineResponse):void} cb
     * @public
     */
    DeleteMachine(req, cb) {
        const resp = new DeleteMachineResponse();
        this.request("DeleteMachine", req, resp, cb);
    }
    /**
     * 本接口 (DescribeProcessTaskStatus) 用于获取实时拉取进程任务状态。
     * @param {DescribeProcessTaskStatusRequest} req
     * @param {function(string, DescribeProcessTaskStatusResponse):void} cb
     * @public
     */
    DescribeProcessTaskStatus(req, cb) {
        const resp = new DescribeProcessTaskStatusResponse();
        this.request("DescribeProcessTaskStatus", req, resp, cb);
    }
    /**
     * 本接口 (RescanImpactedHost) 用于漏洞重新检测。
     * @param {RescanImpactedHostRequest} req
     * @param {function(string, RescanImpactedHostResponse):void} cb
     * @public
     */
    RescanImpactedHost(req, cb) {
        const resp = new RescanImpactedHostResponse();
        this.request("RescanImpactedHost", req, resp, cb);
    }
    /**
     * 获取所有主机标签
     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        const resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }
    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     * @param {DescribeSecurityTrendsRequest} req
     * @param {function(string, DescribeSecurityTrendsResponse):void} cb
     * @public
     */
    DescribeSecurityTrends(req, cb) {
        const resp = new DescribeSecurityTrendsResponse();
        this.request("DescribeSecurityTrends", req, resp, cb);
    }
    /**
     * 网络攻击日志详情
     * @param {DescribeAttackLogInfoRequest} req
     * @param {function(string, DescribeAttackLogInfoResponse):void} cb
     * @public
     */
    DescribeAttackLogInfo(req, cb) {
        const resp = new DescribeAttackLogInfoResponse();
        this.request("DescribeAttackLogInfo", req, resp, cb);
    }
    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     * @param {IgnoreImpactedHostsRequest} req
     * @param {function(string, IgnoreImpactedHostsResponse):void} cb
     * @public
     */
    IgnoreImpactedHosts(req, cb) {
        const resp = new IgnoreImpactedHostsResponse();
        this.request("IgnoreImpactedHosts", req, resp, cb);
    }
    /**
     * 获取高危命令列表
     * @param {DescribeBashEventsRequest} req
     * @param {function(string, DescribeBashEventsResponse):void} cb
     * @public
     */
    DescribeBashEvents(req, cb) {
        const resp = new DescribeBashEventsResponse();
        this.request("DescribeBashEvents", req, resp, cb);
    }
    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     * @param {DescribeMachinesRequest} req
     * @param {function(string, DescribeMachinesResponse):void} cb
     * @public
     */
    DescribeMachines(req, cb) {
        const resp = new DescribeMachinesResponse();
        this.request("DescribeMachines", req, resp, cb);
    }
    /**
     * 此接口（CreateUsualLoginPlaces）用于添加常用登录地。
     * @param {CreateUsualLoginPlacesRequest} req
     * @param {function(string, CreateUsualLoginPlacesResponse):void} cb
     * @public
     */
    CreateUsualLoginPlaces(req, cb) {
        const resp = new CreateUsualLoginPlacesResponse();
        this.request("CreateUsualLoginPlaces", req, resp, cb);
    }
    /**
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     * @param {InquiryPriceOpenProVersionPrepaidRequest} req
     * @param {function(string, InquiryPriceOpenProVersionPrepaidResponse):void} cb
     * @public
     */
    InquiryPriceOpenProVersionPrepaid(req, cb) {
        const resp = new InquiryPriceOpenProVersionPrepaidResponse();
        this.request("InquiryPriceOpenProVersionPrepaid", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=yunjing_client.js.map