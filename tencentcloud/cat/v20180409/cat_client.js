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
const GetReturnCodeInfoResponse = models_1.Models.GetReturnCodeInfoResponse;
const ModifyAgentGroupRequest = models_1.Models.ModifyAgentGroupRequest;
const BindAlarmPolicyResponse = models_1.Models.BindAlarmPolicyResponse;
const AlarmInfo = models_1.Models.AlarmInfo;
const GetDailyAvailRatioRequest = models_1.Models.GetDailyAvailRatioRequest;
const ModifyTaskExResponse = models_1.Models.ModifyTaskExResponse;
const DescribeAgentsRequest = models_1.Models.DescribeAgentsRequest;
const CatReturnSummary = models_1.Models.CatReturnSummary;
const CatReturnDetail = models_1.Models.CatReturnDetail;
const RunTaskRequest = models_1.Models.RunTaskRequest;
const DimensionsDetail = models_1.Models.DimensionsDetail;
const GetRespTimeTrendExResponse = models_1.Models.GetRespTimeTrendExResponse;
const ModifyAgentGroupResponse = models_1.Models.ModifyAgentGroupResponse;
const DescribeTaskDetailResponse = models_1.Models.DescribeTaskDetailResponse;
const IspDetail = models_1.Models.IspDetail;
const DataPointMetric = models_1.Models.DataPointMetric;
const GetReturnCodeInfoRequest = models_1.Models.GetReturnCodeInfoRequest;
const DescribeCatLogsRequest = models_1.Models.DescribeCatLogsRequest;
const DescribeAgentsResponse = models_1.Models.DescribeAgentsResponse;
const GetAvailRatioHistoryResponse = models_1.Models.GetAvailRatioHistoryResponse;
const CreateAgentGroupResponse = models_1.Models.CreateAgentGroupResponse;
const DeleteTasksResponse = models_1.Models.DeleteTasksResponse;
const DescribeAlarmsResponse = models_1.Models.DescribeAlarmsResponse;
const GetRealAvailRatioRequest = models_1.Models.GetRealAvailRatioRequest;
const DeleteAgentGroupResponse = models_1.Models.DeleteAgentGroupResponse;
const AgentGroup = models_1.Models.AgentGroup;
const DescribeTaskDetailRequest = models_1.Models.DescribeTaskDetailRequest;
const DescribeTasksByTypeResponse = models_1.Models.DescribeTasksByTypeResponse;
const GetResultSummaryResponse = models_1.Models.GetResultSummaryResponse;
const GetReturnCodeHistoryRequest = models_1.Models.GetReturnCodeHistoryRequest;
const BindAlarmPolicyRequest = models_1.Models.BindAlarmPolicyRequest;
const DescribeAgentGroupsResponse = models_1.Models.DescribeAgentGroupsResponse;
const ProvinceDetail = models_1.Models.ProvinceDetail;
const AlarmTopic = models_1.Models.AlarmTopic;
const ResultSummary = models_1.Models.ResultSummary;
const PauseTaskRequest = models_1.Models.PauseTaskRequest;
const GetResultSummaryRequest = models_1.Models.GetResultSummaryRequest;
const DescribeAlarmsRequest = models_1.Models.DescribeAlarmsRequest;
const DescribeUserLimitResponse = models_1.Models.DescribeUserLimitResponse;
const GetRespTimeTrendExRequest = models_1.Models.GetRespTimeTrendExRequest;
const DeleteTasksRequest = models_1.Models.DeleteTasksRequest;
const DescribeAlarmsByTaskRequest = models_1.Models.DescribeAlarmsByTaskRequest;
const PauseTaskResponse = models_1.Models.PauseTaskResponse;
const CreateAgentGroupRequest = models_1.Models.CreateAgentGroupRequest;
const CatLog = models_1.Models.CatLog;
const GetDailyAvailRatioResponse = models_1.Models.GetDailyAvailRatioResponse;
const DeleteAgentGroupRequest = models_1.Models.DeleteAgentGroupRequest;
const GetAvailRatioHistoryRequest = models_1.Models.GetAvailRatioHistoryRequest;
const DescribeAgentGroupsRequest = models_1.Models.DescribeAgentGroupsRequest;
const DescribeAlarmsByTaskResponse = models_1.Models.DescribeAlarmsByTaskResponse;
const ModifyTaskExRequest = models_1.Models.ModifyTaskExRequest;
const DescribeAlarmTopicRequest = models_1.Models.DescribeAlarmTopicRequest;
const CreateTaskExRequest = models_1.Models.CreateTaskExRequest;
const GetTaskTotalNumberRequest = models_1.Models.GetTaskTotalNumberRequest;
const TaskAlarm = models_1.Models.TaskAlarm;
const DescribeTasksByTypeRequest = models_1.Models.DescribeTasksByTypeRequest;
const VerifyResultRequest = models_1.Models.VerifyResultRequest;
const VerifyResultResponse = models_1.Models.VerifyResultResponse;
const CatTaskDetail = models_1.Models.CatTaskDetail;
const GetReturnCodeHistoryResponse = models_1.Models.GetReturnCodeHistoryResponse;
const DataPoint = models_1.Models.DataPoint;
const DescribeAlarmTopicResponse = models_1.Models.DescribeAlarmTopicResponse;
const GetRealAvailRatioResponse = models_1.Models.GetRealAvailRatioResponse;
const RunTaskResponse = models_1.Models.RunTaskResponse;
const CatAgent = models_1.Models.CatAgent;
const DescribeCatLogsResponse = models_1.Models.DescribeCatLogsResponse;
const GetTaskTotalNumberResponse = models_1.Models.GetTaskTotalNumberResponse;
const CreateTaskExResponse = models_1.Models.CreateTaskExResponse;
const DescribeUserLimitRequest = models_1.Models.DescribeUserLimitRequest;
/**
 * cat client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cat.tencentcloudapi.com", "2018-04-09", credential, region, profile);
    }
    /**
     * 查询拨测任务的走势数据
     * @param {GetRespTimeTrendExRequest} req
     * @param {function(string, GetRespTimeTrendExResponse):void} cb
     * @public
     */
    GetRespTimeTrendEx(req, cb) {
        const resp = new GetRespTimeTrendExResponse();
        this.request("GetRespTimeTrendEx", req, resp, cb);
    }
    /**
     * 修改拨测分组
     * @param {ModifyAgentGroupRequest} req
     * @param {function(string, ModifyAgentGroupResponse):void} cb
     * @public
     */
    ModifyAgentGroup(req, cb) {
        const resp = new ModifyAgentGroupResponse();
        this.request("ModifyAgentGroup", req, resp, cb);
    }
    /**
     * 按类型查询拨测任务列表
     * @param {DescribeTasksByTypeRequest} req
     * @param {function(string, DescribeTasksByTypeResponse):void} cb
     * @public
     */
    DescribeTasksByType(req, cb) {
        const resp = new DescribeTasksByTypeResponse();
        this.request("DescribeTasksByType", req, resp, cb);
    }
    /**
     * 创建拨测任务(扩展)
     * @param {CreateTaskExRequest} req
     * @param {function(string, CreateTaskExResponse):void} cb
     * @public
     */
    CreateTaskEx(req, cb) {
        const resp = new CreateTaskExResponse();
        this.request("CreateTaskEx", req, resp, cb);
    }
    /**
     * 暂停拨测任务
     * @param {PauseTaskRequest} req
     * @param {function(string, PauseTaskResponse):void} cb
     * @public
     */
    PauseTask(req, cb) {
        const resp = new PauseTaskResponse();
        this.request("PauseTask", req, resp, cb);
    }
    /**
     * 查询拨测分组列表
     * @param {DescribeAgentGroupsRequest} req
     * @param {function(string, DescribeAgentGroupsResponse):void} cb
     * @public
     */
    DescribeAgentGroups(req, cb) {
        const resp = new DescribeAgentGroupsResponse();
        this.request("DescribeAgentGroups", req, resp, cb);
    }
    /**
     * 获取实时可用率信息
     * @param {GetRealAvailRatioRequest} req
     * @param {function(string, GetRealAvailRatioResponse):void} cb
     * @public
     */
    GetRealAvailRatio(req, cb) {
        const resp = new GetRealAvailRatioResponse();
        this.request("GetRealAvailRatio", req, resp, cb);
    }
    /**
     * 添加拨测分组
     * @param {CreateAgentGroupRequest} req
     * @param {function(string, CreateAgentGroupResponse):void} cb
     * @public
     */
    CreateAgentGroup(req, cb) {
        const resp = new CreateAgentGroupResponse();
        this.request("CreateAgentGroup", req, resp, cb);
    }
    /**
     * 查询拨测任务信息
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        const resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }
    /**
     * 查询用户的告警主题列表
     * @param {DescribeAlarmTopicRequest} req
     * @param {function(string, DescribeAlarmTopicResponse):void} cb
     * @public
     */
    DescribeAlarmTopic(req, cb) {
        const resp = new DescribeAlarmTopicResponse();
        this.request("DescribeAlarmTopic", req, resp, cb);
    }
    /**
     * 查询拨测告警列表
     * @param {DescribeAlarmsRequest} req
     * @param {function(string, DescribeAlarmsResponse):void} cb
     * @public
     */
    DescribeAlarms(req, cb) {
        const resp = new DescribeAlarmsResponse();
        this.request("DescribeAlarms", req, resp, cb);
    }
    /**
     * 查询拨测任务的历史返回码信息
     * @param {GetReturnCodeHistoryRequest} req
     * @param {function(string, GetReturnCodeHistoryResponse):void} cb
     * @public
     */
    GetReturnCodeHistory(req, cb) {
        const resp = new GetReturnCodeHistoryResponse();
        this.request("GetReturnCodeHistory", req, resp, cb);
    }
    /**
     * 删除多个拨测任务
     * @param {DeleteTasksRequest} req
     * @param {function(string, DeleteTasksResponse):void} cb
     * @public
     */
    DeleteTasks(req, cb) {
        const resp = new DeleteTasksResponse();
        this.request("DeleteTasks", req, resp, cb);
    }
    /**
     * 获取一天的整体可用率信息
     * @param {GetDailyAvailRatioRequest} req
     * @param {function(string, GetDailyAvailRatioResponse):void} cb
     * @public
     */
    GetDailyAvailRatio(req, cb) {
        const resp = new GetDailyAvailRatioResponse();
        this.request("GetDailyAvailRatio", req, resp, cb);
    }
    /**
     * 修改拨测任务(扩展)
     * @param {ModifyTaskExRequest} req
     * @param {function(string, ModifyTaskExResponse):void} cb
     * @public
     */
    ModifyTaskEx(req, cb) {
        const resp = new ModifyTaskExResponse();
        this.request("ModifyTaskEx", req, resp, cb);
    }
    /**
     * 查询本用户可选的拨测点列表
     * @param {DescribeAgentsRequest} req
     * @param {function(string, DescribeAgentsResponse):void} cb
     * @public
     */
    DescribeAgents(req, cb) {
        const resp = new DescribeAgentsResponse();
        this.request("DescribeAgents", req, resp, cb);
    }
    /**
     * 获取用户可用资源限制
     * @param {DescribeUserLimitRequest} req
     * @param {function(string, DescribeUserLimitResponse):void} cb
     * @public
     */
    DescribeUserLimit(req, cb) {
        const resp = new DescribeUserLimitResponse();
        this.request("DescribeUserLimit", req, resp, cb);
    }
    /**
     * 查询拨测流水
     * @param {DescribeCatLogsRequest} req
     * @param {function(string, DescribeCatLogsResponse):void} cb
     * @public
     */
    DescribeCatLogs(req, cb) {
        const resp = new DescribeCatLogsResponse();
        this.request("DescribeCatLogs", req, resp, cb);
    }
    /**
     * 验证拨测任务，结果验证查询（验证成功的，才建议创建拨测任务）
     * @param {VerifyResultRequest} req
     * @param {function(string, VerifyResultResponse):void} cb
     * @public
     */
    VerifyResult(req, cb) {
        const resp = new VerifyResultResponse();
        this.request("VerifyResult", req, resp, cb);
    }
    /**
     * 绑定拨测任务和告警策略组
     * @param {BindAlarmPolicyRequest} req
     * @param {function(string, BindAlarmPolicyResponse):void} cb
     * @public
     */
    BindAlarmPolicy(req, cb) {
        const resp = new BindAlarmPolicyResponse();
        this.request("BindAlarmPolicy", req, resp, cb);
    }
    /**
     * 获取任务列表的实时数据
     * @param {GetResultSummaryRequest} req
     * @param {function(string, GetResultSummaryResponse):void} cb
     * @public
     */
    GetResultSummary(req, cb) {
        const resp = new GetResultSummaryResponse();
        this.request("GetResultSummary", req, resp, cb);
    }
    /**
     * 删除拨测分组
     * @param {DeleteAgentGroupRequest} req
     * @param {function(string, DeleteAgentGroupResponse):void} cb
     * @public
     */
    DeleteAgentGroup(req, cb) {
        const resp = new DeleteAgentGroupResponse();
        this.request("DeleteAgentGroup", req, resp, cb);
    }
    /**
     * 获取指定时刻的可用率地图信息
     * @param {GetAvailRatioHistoryRequest} req
     * @param {function(string, GetAvailRatioHistoryResponse):void} cb
     * @public
     */
    GetAvailRatioHistory(req, cb) {
        const resp = new GetAvailRatioHistoryResponse();
        this.request("GetAvailRatioHistory", req, resp, cb);
    }
    /**
     * 运行拨测任务
     * @param {RunTaskRequest} req
     * @param {function(string, RunTaskResponse):void} cb
     * @public
     */
    RunTask(req, cb) {
        const resp = new RunTaskResponse();
        this.request("RunTask", req, resp, cb);
    }
    /**
     * 查询拨测任务的返回码统计信息
     * @param {GetReturnCodeInfoRequest} req
     * @param {function(string, GetReturnCodeInfoResponse):void} cb
     * @public
     */
    GetReturnCodeInfo(req, cb) {
        const resp = new GetReturnCodeInfoResponse();
        this.request("GetReturnCodeInfo", req, resp, cb);
    }
    /**
     * 按任务查询拨测告警列表
     * @param {DescribeAlarmsByTaskRequest} req
     * @param {function(string, DescribeAlarmsByTaskResponse):void} cb
     * @public
     */
    DescribeAlarmsByTask(req, cb) {
        const resp = new DescribeAlarmsByTaskResponse();
        this.request("DescribeAlarmsByTask", req, resp, cb);
    }
    /**
     * 获取AppId下的拨测任务总数
     * @param {GetTaskTotalNumberRequest} req
     * @param {function(string, GetTaskTotalNumberResponse):void} cb
     * @public
     */
    GetTaskTotalNumber(req, cb) {
        const resp = new GetTaskTotalNumberResponse();
        this.request("GetTaskTotalNumber", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cat_client.js.map