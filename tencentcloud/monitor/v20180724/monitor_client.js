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
const DescribePolicyConditionListConfigManual = models_1.Models.DescribePolicyConditionListConfigManual;
const UnBindingPolicyObjectRequest = models_1.Models.UnBindingPolicyObjectRequest;
const DescribePolicyConditionListRequest = models_1.Models.DescribePolicyConditionListRequest;
const DeletePolicyGroupResponse = models_1.Models.DeletePolicyGroupResponse;
const DescribeAccidentEventListAlarms = models_1.Models.DescribeAccidentEventListAlarms;
const CreatePolicyGroupEventCondition = models_1.Models.CreatePolicyGroupEventCondition;
const DescribeProductEventListRequest = models_1.Models.DescribeProductEventListRequest;
const DescribeProductListResponse = models_1.Models.DescribeProductListResponse;
const UnBindingAllPolicyObjectRequest = models_1.Models.UnBindingAllPolicyObjectRequest;
const Instance = models_1.Models.Instance;
const DescribeProductEventListEvents = models_1.Models.DescribeProductEventListEvents;
const BindingPolicyObjectDimension = models_1.Models.BindingPolicyObjectDimension;
const DescribePolicyConditionListMetric = models_1.Models.DescribePolicyConditionListMetric;
const CreatePolicyGroupRequest = models_1.Models.CreatePolicyGroupRequest;
const CreatePolicyGroupCondition = models_1.Models.CreatePolicyGroupCondition;
const DescribePolicyGroupInfoReceiverInfo = models_1.Models.DescribePolicyGroupInfoReceiverInfo;
const BindingPolicyObjectRequest = models_1.Models.BindingPolicyObjectRequest;
const DescribeProductEventListEventsGroupInfo = models_1.Models.DescribeProductEventListEventsGroupInfo;
const ModifyPolicyGroupRequest = models_1.Models.ModifyPolicyGroupRequest;
const DescribePolicyConditionListConfigManualPeriod = models_1.Models.DescribePolicyConditionListConfigManualPeriod;
const DescribePolicyConditionListEventMetric = models_1.Models.DescribePolicyConditionListEventMetric;
const DescribePolicyConditionListCondition = models_1.Models.DescribePolicyConditionListCondition;
const DescribeBasicAlarmListRequest = models_1.Models.DescribeBasicAlarmListRequest;
const DescribePolicyGroupListResponse = models_1.Models.DescribePolicyGroupListResponse;
const DescribePolicyGroupInfoRequest = models_1.Models.DescribePolicyGroupInfoRequest;
const DimensionsDesc = models_1.Models.DimensionsDesc;
const DescribePolicyGroupListGroup = models_1.Models.DescribePolicyGroupListGroup;
const DescribeBasicAlarmListAlarms = models_1.Models.DescribeBasicAlarmListAlarms;
const DescribeProductListRequest = models_1.Models.DescribeProductListRequest;
const PeriodsSt = models_1.Models.PeriodsSt;
const DescribeAccidentEventListRequest = models_1.Models.DescribeAccidentEventListRequest;
const DescribeProductEventListOverView = models_1.Models.DescribeProductEventListOverView;
const MetricObjectMeaning = models_1.Models.MetricObjectMeaning;
const MetricDatum = models_1.Models.MetricDatum;
const DeletePolicyGroupRequest = models_1.Models.DeletePolicyGroupRequest;
const DescribePolicyGroupInfoCallback = models_1.Models.DescribePolicyGroupInfoCallback;
const DescribeBindingPolicyObjectListInstanceGroup = models_1.Models.DescribeBindingPolicyObjectListInstanceGroup;
const DescribePolicyConditionListResponse = models_1.Models.DescribePolicyConditionListResponse;
const DescribePolicyConditionListConfigManualCalcType = models_1.Models.DescribePolicyConditionListConfigManualCalcType;
const ModifyPolicyGroupResponse = models_1.Models.ModifyPolicyGroupResponse;
const PutMonitorDataResponse = models_1.Models.PutMonitorDataResponse;
const ReceiverInfo = models_1.Models.ReceiverInfo;
const ModifyAlarmReceiversRequest = models_1.Models.ModifyAlarmReceiversRequest;
const DescribeProductEventListDimensions = models_1.Models.DescribeProductEventListDimensions;
const DescribePolicyGroupInfoResponse = models_1.Models.DescribePolicyGroupInfoResponse;
const DescribeBasicAlarmListResponse = models_1.Models.DescribeBasicAlarmListResponse;
const ProductSimple = models_1.Models.ProductSimple;
const DescribeBindingPolicyObjectListDimension = models_1.Models.DescribeBindingPolicyObjectListDimension;
const DescribePolicyGroupInfoCondition = models_1.Models.DescribePolicyGroupInfoCondition;
const UnBindingPolicyObjectResponse = models_1.Models.UnBindingPolicyObjectResponse;
const GetMonitorDataResponse = models_1.Models.GetMonitorDataResponse;
const MetricSet = models_1.Models.MetricSet;
const DescribeBindingPolicyObjectListResponse = models_1.Models.DescribeBindingPolicyObjectListResponse;
const DescribePolicyGroupInfoConditionTpl = models_1.Models.DescribePolicyGroupInfoConditionTpl;
const DescribeBindingPolicyObjectListRequest = models_1.Models.DescribeBindingPolicyObjectListRequest;
const CreatePolicyGroupResponse = models_1.Models.CreatePolicyGroupResponse;
const PutMonitorDataRequest = models_1.Models.PutMonitorDataRequest;
const InstanceGroup = models_1.Models.InstanceGroup;
const DescribePolicyGroupInfoEventCondition = models_1.Models.DescribePolicyGroupInfoEventCondition;
const DescribeBaseMetricsResponse = models_1.Models.DescribeBaseMetricsResponse;
const SendCustomAlarmMsgResponse = models_1.Models.SendCustomAlarmMsgResponse;
const GetMonitorDataRequest = models_1.Models.GetMonitorDataRequest;
const DescribePolicyConditionListConfigManualPeriodNum = models_1.Models.DescribePolicyConditionListConfigManualPeriodNum;
const DescribeBindingPolicyObjectListInstance = models_1.Models.DescribeBindingPolicyObjectListInstance;
const ModifyPolicyGroupCondition = models_1.Models.ModifyPolicyGroupCondition;
const ModifyPolicyGroupEventCondition = models_1.Models.ModifyPolicyGroupEventCondition;
const DescribePolicyConditionListConfigManualContinueTime = models_1.Models.DescribePolicyConditionListConfigManualContinueTime;
const DescribePolicyGroupListRequest = models_1.Models.DescribePolicyGroupListRequest;
const DescribeAccidentEventListResponse = models_1.Models.DescribeAccidentEventListResponse;
const DescribeProductEventListResponse = models_1.Models.DescribeProductEventListResponse;
const DescribeBaseMetricsRequest = models_1.Models.DescribeBaseMetricsRequest;
const Dimension = models_1.Models.Dimension;
const DataPoint = models_1.Models.DataPoint;
const UnBindingAllPolicyObjectResponse = models_1.Models.UnBindingAllPolicyObjectResponse;
const DescribePolicyConditionListConfigManualStatType = models_1.Models.DescribePolicyConditionListConfigManualStatType;
const SendCustomAlarmMsgRequest = models_1.Models.SendCustomAlarmMsgRequest;
const DescribeProductEventListEventsDimensions = models_1.Models.DescribeProductEventListEventsDimensions;
const DescribePolicyConditionListConfigManualCalcValue = models_1.Models.DescribePolicyConditionListConfigManualCalcValue;
const ModifyAlarmReceiversResponse = models_1.Models.ModifyAlarmReceiversResponse;
const DescribePolicyGroupListGroupInstanceGroup = models_1.Models.DescribePolicyGroupListGroupInstanceGroup;
const BindingPolicyObjectResponse = models_1.Models.BindingPolicyObjectResponse;
/**
 * monitor client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("monitor.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    /**
     * 分页获取产品事件的列表
     * @param {DescribeProductEventListRequest} req
     * @param {function(string, DescribeProductEventListResponse):void} cb
     * @public
     */
    DescribeProductEventList(req, cb) {
        const resp = new DescribeProductEventListResponse();
        this.request("DescribeProductEventList", req, resp, cb);
    }
    /**
     * 获取平台事件列表
     * @param {DescribeAccidentEventListRequest} req
     * @param {function(string, DescribeAccidentEventListResponse):void} cb
     * @public
     */
    DescribeAccidentEventList(req, cb) {
        const resp = new DescribeAccidentEventListResponse();
        this.request("DescribeAccidentEventList", req, resp, cb);
    }
    /**
     * 删除策略的关联对象
     * @param {UnBindingPolicyObjectRequest} req
     * @param {function(string, UnBindingPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingPolicyObject(req, cb) {
        const resp = new UnBindingPolicyObjectResponse();
        this.request("UnBindingPolicyObject", req, resp, cb);
    }
    /**
     * 将告警策略绑定到特定对象
     * @param {BindingPolicyObjectRequest} req
     * @param {function(string, BindingPolicyObjectResponse):void} cb
     * @public
     */
    BindingPolicyObject(req, cb) {
        const resp = new BindingPolicyObjectResponse();
        this.request("BindingPolicyObject", req, resp, cb);
    }
    /**
     * 修改告警接收人
     * @param {ModifyAlarmReceiversRequest} req
     * @param {function(string, ModifyAlarmReceiversResponse):void} cb
     * @public
     */
    ModifyAlarmReceivers(req, cb) {
        const resp = new ModifyAlarmReceiversResponse();
        this.request("ModifyAlarmReceivers", req, resp, cb);
    }
    /**
     * 获取已绑定对象列表
     * @param {DescribeBindingPolicyObjectListRequest} req
     * @param {function(string, DescribeBindingPolicyObjectListResponse):void} cb
     * @public
     */
    DescribeBindingPolicyObjectList(req, cb) {
        const resp = new DescribeBindingPolicyObjectListResponse();
        this.request("DescribeBindingPolicyObjectList", req, resp, cb);
    }
    /**
     * 发送自定义消息告警
     * @param {SendCustomAlarmMsgRequest} req
     * @param {function(string, SendCustomAlarmMsgResponse):void} cb
     * @public
     */
    SendCustomAlarmMsg(req, cb) {
        const resp = new SendCustomAlarmMsgResponse();
        this.request("SendCustomAlarmMsg", req, resp, cb);
    }
    /**
     * 删除告警策略组
     * @param {DeletePolicyGroupRequest} req
     * @param {function(string, DeletePolicyGroupResponse):void} cb
     * @public
     */
    DeletePolicyGroup(req, cb) {
        const resp = new DeletePolicyGroupResponse();
        this.request("DeletePolicyGroup", req, resp, cb);
    }
    /**
     * 获取基础指标详情
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        const resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }
    /**
     * 获取基础策略组详情
     * @param {DescribePolicyGroupInfoRequest} req
     * @param {function(string, DescribePolicyGroupInfoResponse):void} cb
     * @public
     */
    DescribePolicyGroupInfo(req, cb) {
        const resp = new DescribePolicyGroupInfoResponse();
        this.request("DescribePolicyGroupInfo", req, resp, cb);
    }
    /**
     * 查询云监控产品列表
     * @param {DescribeProductListRequest} req
     * @param {function(string, DescribeProductListResponse):void} cb
     * @public
     */
    DescribeProductList(req, cb) {
        const resp = new DescribeProductListResponse();
        this.request("DescribeProductList", req, resp, cb);
    }
    /**
     * 获取基础策略告警组列表
     * @param {DescribePolicyGroupListRequest} req
     * @param {function(string, DescribePolicyGroupListResponse):void} cb
     * @public
     */
    DescribePolicyGroupList(req, cb) {
        const resp = new DescribePolicyGroupListResponse();
        this.request("DescribePolicyGroupList", req, resp, cb);
    }
    /**
     * 获取基础告警列表
     * @param {DescribeBasicAlarmListRequest} req
     * @param {function(string, DescribeBasicAlarmListResponse):void} cb
     * @public
     */
    DescribeBasicAlarmList(req, cb) {
        const resp = new DescribeBasicAlarmListResponse();
        this.request("DescribeBasicAlarmList", req, resp, cb);
    }
    /**
     * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        const resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }
    /**
     * 更新策略组
     * @param {ModifyPolicyGroupRequest} req
     * @param {function(string, ModifyPolicyGroupResponse):void} cb
     * @public
     */
    ModifyPolicyGroup(req, cb) {
        const resp = new ModifyPolicyGroupResponse();
        this.request("ModifyPolicyGroup", req, resp, cb);
    }
    /**
     * 增加策略组
     * @param {CreatePolicyGroupRequest} req
     * @param {function(string, CreatePolicyGroupResponse):void} cb
     * @public
     */
    CreatePolicyGroup(req, cb) {
        const resp = new CreatePolicyGroupResponse();
        this.request("CreatePolicyGroup", req, resp, cb);
    }
    /**
     * 删除全部的关联对象
     * @param {UnBindingAllPolicyObjectRequest} req
     * @param {function(string, UnBindingAllPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingAllPolicyObject(req, cb) {
        const resp = new UnBindingAllPolicyObjectResponse();
        this.request("UnBindingAllPolicyObject", req, resp, cb);
    }
    /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     * @param {PutMonitorDataRequest} req
     * @param {function(string, PutMonitorDataResponse):void} cb
     * @public
     */
    PutMonitorData(req, cb) {
        const resp = new PutMonitorDataResponse();
        this.request("PutMonitorData", req, resp, cb);
    }
    /**
     * 获取基础告警策略条件
     * @param {DescribePolicyConditionListRequest} req
     * @param {function(string, DescribePolicyConditionListResponse):void} cb
     * @public
     */
    DescribePolicyConditionList(req, cb) {
        const resp = new DescribePolicyConditionListResponse();
        this.request("DescribePolicyConditionList", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=monitor_client.js.map