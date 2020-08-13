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
 * DescribeTopSpaceTableTimeSeries返回参数结构体
 * @class
 */
class DescribeTopSpaceTableTimeSeriesResponse extends AbstractModel {

    TopSpaceTableTimeSeries: Array<TableSpaceTimeSeries> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回的Top表空间统计信息的时序数据列表。
         */
        this.TopSpaceTableTimeSeries = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TopSpaceTableTimeSeries: Array<TableSpaceTimeSeries> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TopSpaceTableTimeSeries) {
            this.TopSpaceTableTimeSeries = new Array();
            for (let z in params.TopSpaceTableTimeSeries) {
                let obj = new TableSpaceTimeSeries();
                obj.deserialize(params.TopSpaceTableTimeSeries[z]);
                this.TopSpaceTableTimeSeries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagHistory返回参数结构体
 * @class
 */
class DescribeDBDiagHistoryResponse extends AbstractModel {

    Events: Array<DiagHistoryEventItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 事件描述。
         */
        this.Events = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Events: Array<DiagHistoryEventItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new DiagHistoryEventItem();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSpaceStatus请求参数结构体
 * @class
 */
class DescribeDBSpaceStatusRequest extends AbstractModel {

    InstanceId: string | null
    
    RangeDays: number | null
    
    constructor(){
        super();

        /**
         * 实例 ID 。
         */
        this.InstanceId = null;

        /**
         * 时间段天数，截止日期为当日，默认为7天。
         */
        this.RangeDays = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        RangeDays: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RangeDays = 'RangeDays' in params ? params.RangeDays : null;

    }
}

/**
 * DescribeSlowLogTimeSeriesStats返回参数结构体
 * @class
 */
class DescribeSlowLogTimeSeriesStatsResponse extends AbstractModel {

    Period: number | null
    
    TimeSeries: Array<TimeSlice> | null
    
    SeriesData: MonitorMetricSeriesData | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 柱间单位时间间隔，单位为秒。
         */
        this.Period = null;

        /**
         * 单位时间间隔内慢日志数量统计。
         */
        this.TimeSeries = null;

        /**
         * 单位时间间隔内的实例 cpu 利用率监控数据。
         */
        this.SeriesData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Period: number | null;
        TimeSeries: Array<TimeSlice> | null;
        SeriesData: MonitorMetricSeriesData | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;

        if (params.TimeSeries) {
            this.TimeSeries = new Array();
            for (let z in params.TimeSeries) {
                let obj = new TimeSlice();
                obj.deserialize(params.TimeSeries[z]);
                this.TimeSeries.push(obj);
            }
        }

        if (params.SeriesData) {
            let obj = new MonitorMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单位时间间隔内的慢日志统计
 * @class
 */
class TimeSlice extends AbstractModel {

    Count: number | null
    
    Timestamp: number | null
    
    constructor(){
        super();

        /**
         * 总数
         */
        this.Count = null;

        /**
         * 统计开始时间
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Count: number | null;
        Timestamp: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * 监控数据（浮点型）
 * @class
 */
class MonitorFloatMetric extends AbstractModel {

    Metric: string | null
    
    Unit: string | null
    
    Values: Array<number> | null
    
    constructor(){
        super();

        /**
         * 指标名称。
         */
        this.Metric = null;

        /**
         * 指标单位。
         */
        this.Unit = null;

        /**
         * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Metric: string | null;
        Unit: string | null;
        Values: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 监控数据
 * @class
 */
class MonitorMetric extends AbstractModel {

    Metric: string | null
    
    Unit: string | null
    
    Values: Array<number> | null
    
    constructor(){
        super();

        /**
         * 指标名称。
         */
        this.Metric = null;

        /**
         * 指标单位。
         */
        this.Unit = null;

        /**
         * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Metric: string | null;
        Unit: string | null;
        Values: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 库表空间时序数据
 * @class
 */
class TableSpaceTimeSeries extends AbstractModel {

    TableName: string | null
    
    TableSchema: string | null
    
    Engine: string | null
    
    SeriesData: MonitorFloatMetricSeriesData | null
    
    constructor(){
        super();

        /**
         * 表名。
         */
        this.TableName = null;

        /**
         * 库名。
         */
        this.TableSchema = null;

        /**
         * 库表的存储引擎。
         */
        this.Engine = null;

        /**
         * 单位时间间隔内的空间指标数据。
         */
        this.SeriesData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TableName: string | null;
        TableSchema: string | null;
        Engine: string | null;
        SeriesData: MonitorFloatMetricSeriesData | null;
    }): void {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.Engine = 'Engine' in params ? params.Engine : null;

        if (params.SeriesData) {
            let obj = new MonitorFloatMetricSeriesData();
            obj.deserialize(params.SeriesData)
            this.SeriesData = obj;
        }

    }
}

/**
 * DescribeTopSpaceTables请求参数结构体
 * @class
 */
class DescribeTopSpaceTablesRequest extends AbstractModel {

    InstanceId: string | null
    
    Limit: number | null
    
    SortBy: string | null
    
    constructor(){
        super();

        /**
         * 实例 ID 。
         */
        this.InstanceId = null;

        /**
         * 返回的Top表数量，最大值为20，默认为最大值。
         */
        this.Limit = null;

        /**
         * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
         */
        this.SortBy = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Limit: number | null;
        SortBy: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;

    }
}

/**
 * DescribeSlowLogTimeSeriesStats请求参数结构体
 * @class
 */
class DescribeSlowLogTimeSeriesStatsRequest extends AbstractModel {

    InstanceId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    constructor(){
        super();

        /**
         * 实例 ID 。
         */
        this.InstanceId = null;

        /**
         * 开始时间。
         */
        this.StartTime = null;

        /**
         * 结束时间。
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        StartTime: string | null;
        EndTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeDBDiagEvent请求参数结构体
 * @class
 */
class DescribeDBDiagEventRequest extends AbstractModel {

    InstanceId: string | null
    
    EventId: number | null
    
    constructor(){
        super();

        /**
         * 实例 ID 。
         */
        this.InstanceId = null;

        /**
         * 事件 ID 。通过“获取实例诊断历史DescribeDBDiagHistory”获取。
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        EventId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribeDBSpaceStatus返回参数结构体
 * @class
 */
class DescribeDBSpaceStatusResponse extends AbstractModel {

    Growth: number | null
    
    Remain: number | null
    
    Total: number | null
    
    AvailableDays: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 磁盘增长量(MB)。
         */
        this.Growth = null;

        /**
         * 磁盘剩余(MB)。
         */
        this.Remain = null;

        /**
         * 磁盘总量(MB)。
         */
        this.Total = null;

        /**
         * 预计可用天数。
         */
        this.AvailableDays = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Growth: number | null;
        Remain: number | null;
        Total: number | null;
        AvailableDays: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Growth = 'Growth' in params ? params.Growth : null;
        this.Remain = 'Remain' in params ? params.Remain : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.AvailableDays = 'AvailableDays' in params ? params.AvailableDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagEvent返回参数结构体
 * @class
 */
class DescribeDBDiagEventResponse extends AbstractModel {

    DiagItem: string | null
    
    DiagType: string | null
    
    EventId: number | null
    
    Explanation: string | null
    
    Outline: string | null
    
    Problem: string | null
    
    Severity: number | null
    
    StartTime: string | null
    
    Suggestions: string | null
    
    Metric: string | null
    
    EndTime: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 诊断项。
         */
        this.DiagItem = null;

        /**
         * 诊断类型。
         */
        this.DiagType = null;

        /**
         * 事件 ID 。
         */
        this.EventId = null;

        /**
         * 事件详情。
         */
        this.Explanation = null;

        /**
         * 概要。
         */
        this.Outline = null;

        /**
         * 诊断出的问题。
         */
        this.Problem = null;

        /**
         * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
         */
        this.Severity = null;

        /**
         * 开始时间
         */
        this.StartTime = null;

        /**
         * 建议。
         */
        this.Suggestions = null;

        /**
         * 保留字段。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Metric = null;

        /**
         * 结束时间。
         */
        this.EndTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DiagItem: string | null;
        DiagType: string | null;
        EventId: number | null;
        Explanation: string | null;
        Outline: string | null;
        Problem: string | null;
        Severity: number | null;
        StartTime: string | null;
        Suggestions: string | null;
        Metric: string | null;
        EndTime: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Explanation = 'Explanation' in params ? params.Explanation : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.Problem = 'Problem' in params ? params.Problem : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Suggestions = 'Suggestions' in params ? params.Suggestions : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBDiagHistory请求参数结构体
 * @class
 */
class DescribeDBDiagHistoryRequest extends AbstractModel {

    InstanceId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    constructor(){
        super();

        /**
         * 实例 ID 。
         */
        this.InstanceId = null;

        /**
         * 开始时间。如“2019-09-10 12:13:14”。
         */
        this.StartTime = null;

        /**
         * 结束时间。如“2019-09-11 12:13:14”。
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        StartTime: string | null;
        EndTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeTopSpaceTableTimeSeries请求参数结构体
 * @class
 */
class DescribeTopSpaceTableTimeSeriesRequest extends AbstractModel {

    InstanceId: string | null
    
    Limit: number | null
    
    SortBy: string | null
    
    StartDate: string | null
    
    EndDate: string | null
    
    constructor(){
        super();

        /**
         * 实例 ID 。
         */
        this.InstanceId = null;

        /**
         * 返回的Top表数量，最大值为20，默认为最大值。
         */
        this.Limit = null;

        /**
         * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
         */
        this.SortBy = null;

        /**
         * 开始日期，最早为当日的前第6天，默认为截止日期的前第6天。
         */
        this.StartDate = null;

        /**
         * 截止日期，最早为当日的前第6天，默认为当日。
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Limit: number | null;
        SortBy: string | null;
        StartDate: string | null;
        EndDate: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * 单位时间间隔内的监控指标数据
 * @class
 */
class MonitorMetricSeriesData extends AbstractModel {

    Series: Array<MonitorMetric> | null
    
    Timestamp: Array<number> | null
    
    constructor(){
        super();

        /**
         * 监控指标。
         */
        this.Series = null;

        /**
         * 监控指标对应的时间戳。
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Series: Array<MonitorMetric> | null;
        Timestamp: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Series) {
            this.Series = new Array();
            for (let z in params.Series) {
                let obj = new MonitorMetric();
                obj.deserialize(params.Series[z]);
                this.Series.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * 实例诊断历史事件
 * @class
 */
class DiagHistoryEventItem extends AbstractModel {

    DiagType: string | null
    
    EndTime: string | null
    
    StartTime: string | null
    
    EventId: number | null
    
    Severity: number | null
    
    Outline: string | null
    
    DiagItem: string | null
    
    InstanceId: string | null
    
    Metric: string | null
    
    Region: string | null
    
    constructor(){
        super();

        /**
         * 诊断类型。
         */
        this.DiagType = null;

        /**
         * 结束时间。
         */
        this.EndTime = null;

        /**
         * 开始时间。
         */
        this.StartTime = null;

        /**
         * 事件 ID 。
         */
        this.EventId = null;

        /**
         * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
         */
        this.Severity = null;

        /**
         * 概要。
         */
        this.Outline = null;

        /**
         * 诊断项。
         */
        this.DiagItem = null;

        /**
         * 实例 ID 。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceId = null;

        /**
         * 保留字段
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Metric = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DiagType: string | null;
        EndTime: string | null;
        StartTime: string | null;
        EventId: number | null;
        Severity: number | null;
        Outline: string | null;
        DiagItem: string | null;
        InstanceId: string | null;
        Metric: string | null;
        Region: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DiagType = 'DiagType' in params ? params.DiagType : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Severity = 'Severity' in params ? params.Severity : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.DiagItem = 'DiagItem' in params ? params.DiagItem : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 慢日志TopSql
 * @class
 */
class SlowLogTopSqlItem extends AbstractModel {

    LockTime: number | null
    
    LockTimeMax: number | null
    
    LockTimeMin: number | null
    
    RowsExamined: number | null
    
    RowsExaminedMax: number | null
    
    RowsExaminedMin: number | null
    
    QueryTime: number | null
    
    QueryTimeMax: number | null
    
    QueryTimeMin: number | null
    
    RowsSent: number | null
    
    RowsSentMax: number | null
    
    RowsSentMin: number | null
    
    ExecTimes: number | null
    
    SqlTemplate: string | null
    
    SqlText: string | null
    
    Schema: string | null
    
    QueryTimeRatio: number | null
    
    LockTimeRatio: number | null
    
    RowsExaminedRatio: number | null
    
    RowsSentRatio: number | null
    
    constructor(){
        super();

        /**
         * sql总锁等待时间
         */
        this.LockTime = null;

        /**
         * 最大锁等待时间
         */
        this.LockTimeMax = null;

        /**
         * 最小锁等待时间
         */
        this.LockTimeMin = null;

        /**
         * 总扫描行数
         */
        this.RowsExamined = null;

        /**
         * 最大扫描行数
         */
        this.RowsExaminedMax = null;

        /**
         * 最小扫描行数
         */
        this.RowsExaminedMin = null;

        /**
         * 总耗时
         */
        this.QueryTime = null;

        /**
         * 最大执行时间
         */
        this.QueryTimeMax = null;

        /**
         * 最小执行时间
         */
        this.QueryTimeMin = null;

        /**
         * 总返回行数
         */
        this.RowsSent = null;

        /**
         * 最大返回行数
         */
        this.RowsSentMax = null;

        /**
         * 最小返回行数
         */
        this.RowsSentMin = null;

        /**
         * 执行次数
         */
        this.ExecTimes = null;

        /**
         * sql模板
         */
        this.SqlTemplate = null;

        /**
         * 带参数SQL（随机）
         */
        this.SqlText = null;

        /**
         * schema
         */
        this.Schema = null;

        /**
         * 总耗时占比
         */
        this.QueryTimeRatio = null;

        /**
         * sql总锁等待时间占比
         */
        this.LockTimeRatio = null;

        /**
         * 总扫描行数占比
         */
        this.RowsExaminedRatio = null;

        /**
         * 总返回行数占比
         */
        this.RowsSentRatio = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LockTime: number | null;
        LockTimeMax: number | null;
        LockTimeMin: number | null;
        RowsExamined: number | null;
        RowsExaminedMax: number | null;
        RowsExaminedMin: number | null;
        QueryTime: number | null;
        QueryTimeMax: number | null;
        QueryTimeMin: number | null;
        RowsSent: number | null;
        RowsSentMax: number | null;
        RowsSentMin: number | null;
        ExecTimes: number | null;
        SqlTemplate: string | null;
        SqlText: string | null;
        Schema: string | null;
        QueryTimeRatio: number | null;
        LockTimeRatio: number | null;
        RowsExaminedRatio: number | null;
        RowsSentRatio: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.LockTimeMax = 'LockTimeMax' in params ? params.LockTimeMax : null;
        this.LockTimeMin = 'LockTimeMin' in params ? params.LockTimeMin : null;
        this.RowsExamined = 'RowsExamined' in params ? params.RowsExamined : null;
        this.RowsExaminedMax = 'RowsExaminedMax' in params ? params.RowsExaminedMax : null;
        this.RowsExaminedMin = 'RowsExaminedMin' in params ? params.RowsExaminedMin : null;
        this.QueryTime = 'QueryTime' in params ? params.QueryTime : null;
        this.QueryTimeMax = 'QueryTimeMax' in params ? params.QueryTimeMax : null;
        this.QueryTimeMin = 'QueryTimeMin' in params ? params.QueryTimeMin : null;
        this.RowsSent = 'RowsSent' in params ? params.RowsSent : null;
        this.RowsSentMax = 'RowsSentMax' in params ? params.RowsSentMax : null;
        this.RowsSentMin = 'RowsSentMin' in params ? params.RowsSentMin : null;
        this.ExecTimes = 'ExecTimes' in params ? params.ExecTimes : null;
        this.SqlTemplate = 'SqlTemplate' in params ? params.SqlTemplate : null;
        this.SqlText = 'SqlText' in params ? params.SqlText : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.QueryTimeRatio = 'QueryTimeRatio' in params ? params.QueryTimeRatio : null;
        this.LockTimeRatio = 'LockTimeRatio' in params ? params.LockTimeRatio : null;
        this.RowsExaminedRatio = 'RowsExaminedRatio' in params ? params.RowsExaminedRatio : null;
        this.RowsSentRatio = 'RowsSentRatio' in params ? params.RowsSentRatio : null;

    }
}

/**
 * 单位时间间隔内的监控指标数据（浮点型）
 * @class
 */
class MonitorFloatMetricSeriesData extends AbstractModel {

    Series: Array<MonitorFloatMetric> | null
    
    Timestamp: Array<number> | null
    
    constructor(){
        super();

        /**
         * 监控指标。
         */
        this.Series = null;

        /**
         * 监控指标对应的时间戳。
         */
        this.Timestamp = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Series: Array<MonitorFloatMetric> | null;
        Timestamp: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Series) {
            this.Series = new Array();
            for (let z in params.Series) {
                let obj = new MonitorFloatMetric();
                obj.deserialize(params.Series[z]);
                this.Series.push(obj);
            }
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;

    }
}

/**
 * DescribeSlowLogTopSqls请求参数结构体
 * @class
 */
class DescribeSlowLogTopSqlsRequest extends AbstractModel {

    InstanceId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    SortBy: string | null
    
    OrderBy: string | null
    
    Limit: number | null
    
    Offset: number | null
    
    constructor(){
        super();

        /**
         * 实例 ID 。
         */
        this.InstanceId = null;

        /**
         * 开始时间。
         */
        this.StartTime = null;

        /**
         * 截止时间。
         */
        this.EndTime = null;

        /**
         * 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键。
         */
        this.SortBy = null;

        /**
         * 排序方式，支持ASC（升序）以及DESC（降序）。
         */
        this.OrderBy = null;

        /**
         * 返回数量，默认为20，最大值为100。
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        StartTime: string | null;
        EndTime: string | null;
        SortBy: string | null;
        OrderBy: string | null;
        Limit: number | null;
        Offset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 库表空间统计数据。
 * @class
 */
class TableSpaceData extends AbstractModel {

    TableName: string | null
    
    TableSchema: string | null
    
    Engine: string | null
    
    DataLength: number | null
    
    IndexLength: number | null
    
    DataFree: number | null
    
    TotalLength: number | null
    
    FragRatio: number | null
    
    TableRows: number | null
    
    PhysicalFileSize: number | null
    
    constructor(){
        super();

        /**
         * 表名。
         */
        this.TableName = null;

        /**
         * 库名。
         */
        this.TableSchema = null;

        /**
         * 库表的存储引擎。
         */
        this.Engine = null;

        /**
         * 数据空间（MB）。
         */
        this.DataLength = null;

        /**
         * 索引空间（MB）。
         */
        this.IndexLength = null;

        /**
         * 碎片空间（MB）。
         */
        this.DataFree = null;

        /**
         * 总使用空间（MB）。
         */
        this.TotalLength = null;

        /**
         * 碎片率（%）。
         */
        this.FragRatio = null;

        /**
         * 行数。
         */
        this.TableRows = null;

        /**
         * 表对应的独立物理文件大小（MB）。
         */
        this.PhysicalFileSize = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TableName: string | null;
        TableSchema: string | null;
        Engine: string | null;
        DataLength: number | null;
        IndexLength: number | null;
        DataFree: number | null;
        TotalLength: number | null;
        FragRatio: number | null;
        TableRows: number | null;
        PhysicalFileSize: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableSchema = 'TableSchema' in params ? params.TableSchema : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.DataLength = 'DataLength' in params ? params.DataLength : null;
        this.IndexLength = 'IndexLength' in params ? params.IndexLength : null;
        this.DataFree = 'DataFree' in params ? params.DataFree : null;
        this.TotalLength = 'TotalLength' in params ? params.TotalLength : null;
        this.FragRatio = 'FragRatio' in params ? params.FragRatio : null;
        this.TableRows = 'TableRows' in params ? params.TableRows : null;
        this.PhysicalFileSize = 'PhysicalFileSize' in params ? params.PhysicalFileSize : null;

    }
}

/**
 * DescribeSlowLogTopSqls返回参数结构体
 * @class
 */
class DescribeSlowLogTopSqlsResponse extends AbstractModel {

    TotalCount: number | null
    
    Rows: Array<SlowLogTopSqlItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 慢日志 top sql 列表
         */
        this.Rows = null;

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
        Rows: Array<SlowLogTopSqlItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new SlowLogTopSqlItem();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopSpaceTables返回参数结构体
 * @class
 */
class DescribeTopSpaceTablesResponse extends AbstractModel {

    TopSpaceTables: Array<TableSpaceData> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回的Top表空间统计信息列表。
         */
        this.TopSpaceTables = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TopSpaceTables: Array<TableSpaceData> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TopSpaceTables) {
            this.TopSpaceTables = new Array();
            for (let z in params.TopSpaceTables) {
                let obj = new TableSpaceData();
                obj.deserialize(params.TopSpaceTables[z]);
                this.TopSpaceTables.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    DescribeTopSpaceTableTimeSeriesResponse: DescribeTopSpaceTableTimeSeriesResponse,
    DescribeDBDiagHistoryResponse: DescribeDBDiagHistoryResponse,
    DescribeDBSpaceStatusRequest: DescribeDBSpaceStatusRequest,
    DescribeSlowLogTimeSeriesStatsResponse: DescribeSlowLogTimeSeriesStatsResponse,
    TimeSlice: TimeSlice,
    MonitorFloatMetric: MonitorFloatMetric,
    MonitorMetric: MonitorMetric,
    TableSpaceTimeSeries: TableSpaceTimeSeries,
    DescribeTopSpaceTablesRequest: DescribeTopSpaceTablesRequest,
    DescribeSlowLogTimeSeriesStatsRequest: DescribeSlowLogTimeSeriesStatsRequest,
    DescribeDBDiagEventRequest: DescribeDBDiagEventRequest,
    DescribeDBSpaceStatusResponse: DescribeDBSpaceStatusResponse,
    DescribeDBDiagEventResponse: DescribeDBDiagEventResponse,
    DescribeDBDiagHistoryRequest: DescribeDBDiagHistoryRequest,
    DescribeTopSpaceTableTimeSeriesRequest: DescribeTopSpaceTableTimeSeriesRequest,
    MonitorMetricSeriesData: MonitorMetricSeriesData,
    DiagHistoryEventItem: DiagHistoryEventItem,
    SlowLogTopSqlItem: SlowLogTopSqlItem,
    MonitorFloatMetricSeriesData: MonitorFloatMetricSeriesData,
    DescribeSlowLogTopSqlsRequest: DescribeSlowLogTopSqlsRequest,
    TableSpaceData: TableSpaceData,
    DescribeSlowLogTopSqlsResponse: DescribeSlowLogTopSqlsResponse,
    DescribeTopSpaceTablesResponse: DescribeTopSpaceTablesResponse,

}
