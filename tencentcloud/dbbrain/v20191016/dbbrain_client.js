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
const DescribeTopSpaceTableTimeSeriesResponse = models_1.Models.DescribeTopSpaceTableTimeSeriesResponse;
const DescribeDBDiagHistoryResponse = models_1.Models.DescribeDBDiagHistoryResponse;
const DescribeDBSpaceStatusRequest = models_1.Models.DescribeDBSpaceStatusRequest;
const DescribeSlowLogTimeSeriesStatsResponse = models_1.Models.DescribeSlowLogTimeSeriesStatsResponse;
const TimeSlice = models_1.Models.TimeSlice;
const MonitorFloatMetric = models_1.Models.MonitorFloatMetric;
const MonitorMetric = models_1.Models.MonitorMetric;
const TableSpaceTimeSeries = models_1.Models.TableSpaceTimeSeries;
const DescribeTopSpaceTablesRequest = models_1.Models.DescribeTopSpaceTablesRequest;
const DescribeSlowLogTimeSeriesStatsRequest = models_1.Models.DescribeSlowLogTimeSeriesStatsRequest;
const DescribeDBDiagEventRequest = models_1.Models.DescribeDBDiagEventRequest;
const DescribeDBSpaceStatusResponse = models_1.Models.DescribeDBSpaceStatusResponse;
const DescribeDBDiagEventResponse = models_1.Models.DescribeDBDiagEventResponse;
const DescribeDBDiagHistoryRequest = models_1.Models.DescribeDBDiagHistoryRequest;
const DescribeTopSpaceTableTimeSeriesRequest = models_1.Models.DescribeTopSpaceTableTimeSeriesRequest;
const MonitorMetricSeriesData = models_1.Models.MonitorMetricSeriesData;
const DiagHistoryEventItem = models_1.Models.DiagHistoryEventItem;
const SlowLogTopSqlItem = models_1.Models.SlowLogTopSqlItem;
const MonitorFloatMetricSeriesData = models_1.Models.MonitorFloatMetricSeriesData;
const DescribeSlowLogTopSqlsRequest = models_1.Models.DescribeSlowLogTopSqlsRequest;
const TableSpaceData = models_1.Models.TableSpaceData;
const DescribeSlowLogTopSqlsResponse = models_1.Models.DescribeSlowLogTopSqlsResponse;
const DescribeTopSpaceTablesResponse = models_1.Models.DescribeTopSpaceTablesResponse;
/**
 * dbbrain client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("dbbrain.tencentcloudapi.com", "2019-10-16", credential, region, profile);
    }
    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     * @param {DescribeTopSpaceTableTimeSeriesRequest} req
     * @param {function(string, DescribeTopSpaceTableTimeSeriesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTableTimeSeries(req, cb) {
        const resp = new DescribeTopSpaceTableTimeSeriesResponse();
        this.request("DescribeTopSpaceTableTimeSeries", req, resp, cb);
    }
    /**
     * 获取慢日志统计柱状图
     * @param {DescribeSlowLogTimeSeriesStatsRequest} req
     * @param {function(string, DescribeSlowLogTimeSeriesStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogTimeSeriesStats(req, cb) {
        const resp = new DescribeSlowLogTimeSeriesStatsResponse();
        this.request("DescribeSlowLogTimeSeriesStats", req, resp, cb);
    }
    /**
     * 获取实例诊断事件的列表。
     * @param {DescribeDBDiagHistoryRequest} req
     * @param {function(string, DescribeDBDiagHistoryResponse):void} cb
     * @public
     */
    DescribeDBDiagHistory(req, cb) {
        const resp = new DescribeDBDiagHistoryResponse();
        this.request("DescribeDBDiagHistory", req, resp, cb);
    }
    /**
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     * @param {DescribeDBSpaceStatusRequest} req
     * @param {function(string, DescribeDBSpaceStatusResponse):void} cb
     * @public
     */
    DescribeDBSpaceStatus(req, cb) {
        const resp = new DescribeDBSpaceStatusResponse();
        this.request("DescribeDBSpaceStatus", req, resp, cb);
    }
    /**
     * 获取实例异常诊断事件的详情信息。
     * @param {DescribeDBDiagEventRequest} req
     * @param {function(string, DescribeDBDiagEventResponse):void} cb
     * @public
     */
    DescribeDBDiagEvent(req, cb) {
        const resp = new DescribeDBDiagEventResponse();
        this.request("DescribeDBDiagEvent", req, resp, cb);
    }
    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     * @param {DescribeTopSpaceTablesRequest} req
     * @param {function(string, DescribeTopSpaceTablesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTables(req, cb) {
        const resp = new DescribeTopSpaceTablesResponse();
        this.request("DescribeTopSpaceTables", req, resp, cb);
    }
    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     * @param {DescribeSlowLogTopSqlsRequest} req
     * @param {function(string, DescribeSlowLogTopSqlsResponse):void} cb
     * @public
     */
    DescribeSlowLogTopSqls(req, cb) {
        const resp = new DescribeSlowLogTopSqlsResponse();
        this.request("DescribeSlowLogTopSqls", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=dbbrain_client.js.map