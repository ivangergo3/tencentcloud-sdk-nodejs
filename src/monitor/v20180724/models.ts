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
 * DescribePolicyConditionList.ConfigManual
 * @class
 */
class DescribePolicyConditionListConfigManual extends AbstractModel {

    CalcType: DescribePolicyConditionListConfigManualCalcType | null
    
    CalcValue: DescribePolicyConditionListConfigManualCalcValue | null
    
    ContinueTime: DescribePolicyConditionListConfigManualContinueTime | null
    
    Period: DescribePolicyConditionListConfigManualPeriod | null
    
    PeriodNum: DescribePolicyConditionListConfigManualPeriodNum | null
    
    StatType: DescribePolicyConditionListConfigManualStatType | null
    
    constructor(){
        super();

        /**
         * 检测方式
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CalcType = null;

        /**
         * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CalcValue = null;

        /**
         * 持续时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ContinueTime = null;

        /**
         * 数据周期
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Period = null;

        /**
         * 持续周期个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PeriodNum = null;

        /**
         * 聚合方式
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StatType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CalcType: DescribePolicyConditionListConfigManualCalcType | null;
        CalcValue: DescribePolicyConditionListConfigManualCalcValue | null;
        ContinueTime: DescribePolicyConditionListConfigManualContinueTime | null;
        Period: DescribePolicyConditionListConfigManualPeriod | null;
        PeriodNum: DescribePolicyConditionListConfigManualPeriodNum | null;
        StatType: DescribePolicyConditionListConfigManualStatType | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CalcType) {
            let obj = new DescribePolicyConditionListConfigManualCalcType();
            obj.deserialize(params.CalcType)
            this.CalcType = obj;
        }

        if (params.CalcValue) {
            let obj = new DescribePolicyConditionListConfigManualCalcValue();
            obj.deserialize(params.CalcValue)
            this.CalcValue = obj;
        }

        if (params.ContinueTime) {
            let obj = new DescribePolicyConditionListConfigManualContinueTime();
            obj.deserialize(params.ContinueTime)
            this.ContinueTime = obj;
        }

        if (params.Period) {
            let obj = new DescribePolicyConditionListConfigManualPeriod();
            obj.deserialize(params.Period)
            this.Period = obj;
        }

        if (params.PeriodNum) {
            let obj = new DescribePolicyConditionListConfigManualPeriodNum();
            obj.deserialize(params.PeriodNum)
            this.PeriodNum = obj;
        }

        if (params.StatType) {
            let obj = new DescribePolicyConditionListConfigManualStatType();
            obj.deserialize(params.StatType)
            this.StatType = obj;
        }

    }
}

/**
 * UnBindingPolicyObject请求参数结构体
 * @class
 */
class UnBindingPolicyObjectRequest extends AbstractModel {

    Module: string | null
    
    GroupId: number | null
    
    UniqueId: Array<string> | null
    
    InstanceGroupId: number | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 策略组id
         */
        this.GroupId = null;

        /**
         * 待删除对象实例的唯一id列表
         */
        this.UniqueId = null;

        /**
         * 实例分组id, 如果按实例分组删除的话UniqueId参数是无效的
         */
        this.InstanceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        GroupId: number | null;
        UniqueId: Array<string> | null;
        InstanceGroupId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

    }
}

/**
 * DescribePolicyConditionList请求参数结构体
 * @class
 */
class DescribePolicyConditionListRequest extends AbstractModel {

    Module: string | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;

    }
}

/**
 * DeletePolicyGroup返回参数结构体
 * @class
 */
class DeletePolicyGroupResponse extends AbstractModel {

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
 * DescribeAccidentEventList接口的出参类型
 * @class
 */
class DescribeAccidentEventListAlarms extends AbstractModel {

    BusinessTypeDesc: string | null
    
    AccidentTypeDesc: string | null
    
    BusinessID: number | null
    
    EventStatus: number | null
    
    AffectResource: string | null
    
    Region: string | null
    
    OccurTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 事件分类
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BusinessTypeDesc = null;

        /**
         * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AccidentTypeDesc = null;

        /**
         * 事件分类的ID，1表示服务问题，2表示其他订阅
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BusinessID = null;

        /**
         * 事件状态的ID，0表示已恢复，1表示未恢复
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventStatus = null;

        /**
         * 影响的对象
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AffectResource = null;

        /**
         * 事件的地域
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Region = null;

        /**
         * 事件发生的时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OccurTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BusinessTypeDesc: string | null;
        AccidentTypeDesc: string | null;
        BusinessID: number | null;
        EventStatus: number | null;
        AffectResource: string | null;
        Region: string | null;
        OccurTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.BusinessTypeDesc = 'BusinessTypeDesc' in params ? params.BusinessTypeDesc : null;
        this.AccidentTypeDesc = 'AccidentTypeDesc' in params ? params.AccidentTypeDesc : null;
        this.BusinessID = 'BusinessID' in params ? params.BusinessID : null;
        this.EventStatus = 'EventStatus' in params ? params.EventStatus : null;
        this.AffectResource = 'AffectResource' in params ? params.AffectResource : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.OccurTime = 'OccurTime' in params ? params.OccurTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 创建策略传入的事件告警条件
 * @class
 */
class CreatePolicyGroupEventCondition extends AbstractModel {

    EventId: number | null
    
    AlarmNotifyType: number | null
    
    AlarmNotifyPeriod: number | null
    
    RuleId: number | null
    
    constructor(){
        super();

        /**
         * 告警事件的Id
         */
        this.EventId = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 如果通过模版创建，需要传入模版中该指标的对应RuleId
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventId: number | null;
        AlarmNotifyType: number | null;
        AlarmNotifyPeriod: number | null;
        RuleId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeProductEventList请求参数结构体
 * @class
 */
class DescribeProductEventListRequest extends AbstractModel {

    Module: string | null
    
    ProductName: Array<string> | null
    
    EventName: Array<string> | null
    
    InstanceId: Array<string> | null
    
    Dimensions: Array<DescribeProductEventListDimensions> | null
    
    RegionList: Array<string> | null
    
    Type: Array<string> | null
    
    Status: Array<string> | null
    
    Project: Array<string> | null
    
    IsAlarmConfig: number | null
    
    TimeOrder: string | null
    
    StartTime: number | null
    
    EndTime: number | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 接口模块名，固定值"monitor"
         */
        this.Module = null;

        /**
         * 产品类型过滤，比如"cvm"表示云服务器
         */
        this.ProductName = null;

        /**
         * 事件名称过滤，比如"guest_reboot"表示机器重启
         */
        this.EventName = null;

        /**
         * 影响对象，比如ins-19708ino
         */
        this.InstanceId = null;

        /**
         * 维度过滤，比如外网IP:10.0.0.1
         */
        this.Dimensions = null;

        /**
         * 地域过滤，比如gz
         */
        this.RegionList = null;

        /**
         * 事件类型过滤，取值范围["status_change","abnormal"]，分别表示状态变更、异常事件
         */
        this.Type = null;

        /**
         * 事件状态过滤，取值范围["recover","alarm","-"]，分别表示已恢复、未恢复、无状态
         */
        this.Status = null;

        /**
         * 项目ID过滤
         */
        this.Project = null;

        /**
         * 告警状态配置过滤，1表示已配置，0表示未配置
         */
        this.IsAlarmConfig = null;

        /**
         * 按更新时间排序，ASC表示升序，DESC表示降序，默认DESC
         */
        this.TimeOrder = null;

        /**
         * 起始时间，默认一天前的时间戳
         */
        this.StartTime = null;

        /**
         * 结束时间，默认当前时间戳
         */
        this.EndTime = null;

        /**
         * 页偏移量，默认0
         */
        this.Offset = null;

        /**
         * 每页返回的数量，默认20
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        ProductName: Array<string> | null;
        EventName: Array<string> | null;
        InstanceId: Array<string> | null;
        Dimensions: Array<DescribeProductEventListDimensions> | null;
        RegionList: Array<string> | null;
        Type: Array<string> | null;
        Status: Array<string> | null;
        Project: Array<string> | null;
        IsAlarmConfig: number | null;
        TimeOrder: string | null;
        StartTime: number | null;
        EndTime: number | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeProductEventListDimensions();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.RegionList = 'RegionList' in params ? params.RegionList : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.IsAlarmConfig = 'IsAlarmConfig' in params ? params.IsAlarmConfig : null;
        this.TimeOrder = 'TimeOrder' in params ? params.TimeOrder : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeProductList返回参数结构体
 * @class
 */
class DescribeProductListResponse extends AbstractModel {

    ProductList: Array<ProductSimple> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 产品信息列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductList = null;

        /**
         * 产品总数
注意：此字段可能返回 null，表示取不到有效值。
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
        ProductList: Array<ProductSimple> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ProductList) {
            this.ProductList = new Array();
            for (let z in params.ProductList) {
                let obj = new ProductSimple();
                obj.deserialize(params.ProductList[z]);
                this.ProductList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnBindingAllPolicyObject请求参数结构体
 * @class
 */
class UnBindingAllPolicyObjectRequest extends AbstractModel {

    Module: string | null
    
    GroupId: number | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 策略组id
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        GroupId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 实例维度组合数组
 * @class
 */
class Instance extends AbstractModel {

    Dimensions: Array<Dimension> | null
    
    constructor(){
        super();

        /**
         * 实例的维度组合
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Dimensions: Array<Dimension> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * DescribeProductEventList返回的Events
 * @class
 */
class DescribeProductEventListEvents extends AbstractModel {

    EventId: number | null
    
    EventCName: string | null
    
    EventEName: string | null
    
    EventName: string | null
    
    ProductCName: string | null
    
    ProductEName: string | null
    
    ProductName: string | null
    
    InstanceId: string | null
    
    InstanceName: string | null
    
    ProjectId: string | null
    
    Region: string | null
    
    Status: string | null
    
    SupportAlarm: number | null
    
    Type: string | null
    
    StartTime: number | null
    
    UpdateTime: number | null
    
    Dimensions: Array<DescribeProductEventListEventsDimensions> | null
    
    AdditionMsg: Array<DescribeProductEventListEventsDimensions> | null
    
    IsAlarmConfig: number | null
    
    GroupInfo: Array<DescribeProductEventListEventsGroupInfo> | null
    
    constructor(){
        super();

        /**
         * 事件ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventId = null;

        /**
         * 事件中文名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventCName = null;

        /**
         * 事件英文名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventEName = null;

        /**
         * 事件简称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventName = null;

        /**
         * 产品中文名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductCName = null;

        /**
         * 产品英文名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductEName = null;

        /**
         * 产品简称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductName = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceId = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceName = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectId = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Region = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;

        /**
         * 是否支持告警
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SupportAlarm = null;

        /**
         * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Type = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StartTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UpdateTime = null;

        /**
         * 实例对象信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Dimensions = null;

        /**
         * 实例对象附加信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AdditionMsg = null;

        /**
         * 是否配置告警
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsAlarmConfig = null;

        /**
         * 策略信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GroupInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventId: number | null;
        EventCName: string | null;
        EventEName: string | null;
        EventName: string | null;
        ProductCName: string | null;
        ProductEName: string | null;
        ProductName: string | null;
        InstanceId: string | null;
        InstanceName: string | null;
        ProjectId: string | null;
        Region: string | null;
        Status: string | null;
        SupportAlarm: number | null;
        Type: string | null;
        StartTime: number | null;
        UpdateTime: number | null;
        Dimensions: Array<DescribeProductEventListEventsDimensions> | null;
        AdditionMsg: Array<DescribeProductEventListEventsDimensions> | null;
        IsAlarmConfig: number | null;
        GroupInfo: Array<DescribeProductEventListEventsGroupInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventCName = 'EventCName' in params ? params.EventCName : null;
        this.EventEName = 'EventEName' in params ? params.EventEName : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.ProductCName = 'ProductCName' in params ? params.ProductCName : null;
        this.ProductEName = 'ProductEName' in params ? params.ProductEName : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SupportAlarm = 'SupportAlarm' in params ? params.SupportAlarm : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeProductEventListEventsDimensions();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

        if (params.AdditionMsg) {
            this.AdditionMsg = new Array();
            for (let z in params.AdditionMsg) {
                let obj = new DescribeProductEventListEventsDimensions();
                obj.deserialize(params.AdditionMsg[z]);
                this.AdditionMsg.push(obj);
            }
        }
        this.IsAlarmConfig = 'IsAlarmConfig' in params ? params.IsAlarmConfig : null;

        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new DescribeProductEventListEventsGroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }

    }
}

/**
 * 策略绑定实例维度信息
 * @class
 */
class BindingPolicyObjectDimension extends AbstractModel {

    Region: string | null
    
    RegionId: number | null
    
    Dimensions: string | null
    
    EventDimensions: string | null
    
    constructor(){
        super();

        /**
         * 地域名
         */
        this.Region = null;

        /**
         * 地域ID
         */
        this.RegionId = null;

        /**
         * 维度信息
         */
        this.Dimensions = null;

        /**
         * 事件维度信息
         */
        this.EventDimensions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        RegionId: number | null;
        Dimensions: string | null;
        EventDimensions: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.EventDimensions = 'EventDimensions' in params ? params.EventDimensions : null;

    }
}

/**
 * 指标告警配置
 * @class
 */
class DescribePolicyConditionListMetric extends AbstractModel {

    ConfigManual: DescribePolicyConditionListConfigManual | null
    
    MetricId: number | null
    
    MetricShowName: string | null
    
    MetricUnit: string | null
    
    constructor(){
        super();

        /**
         * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ConfigManual = null;

        /**
         * 指标id
         */
        this.MetricId = null;

        /**
         * 指标名称
         */
        this.MetricShowName = null;

        /**
         * 指标单位
         */
        this.MetricUnit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ConfigManual: DescribePolicyConditionListConfigManual | null;
        MetricId: number | null;
        MetricShowName: string | null;
        MetricUnit: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ConfigManual) {
            let obj = new DescribePolicyConditionListConfigManual();
            obj.deserialize(params.ConfigManual)
            this.ConfigManual = obj;
        }
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.MetricShowName = 'MetricShowName' in params ? params.MetricShowName : null;
        this.MetricUnit = 'MetricUnit' in params ? params.MetricUnit : null;

    }
}

/**
 * CreatePolicyGroup请求参数结构体
 * @class
 */
class CreatePolicyGroupRequest extends AbstractModel {

    GroupName: string | null
    
    Module: string | null
    
    ViewName: string | null
    
    ProjectId: number | null
    
    ConditionTempGroupId: number | null
    
    IsShielded: number | null
    
    Remark: string | null
    
    InsertTime: number | null
    
    Conditions: Array<CreatePolicyGroupCondition> | null
    
    EventConditions: Array<CreatePolicyGroupEventCondition> | null
    
    BackEndCall: number | null
    
    IsUnionRule: number | null
    
    constructor(){
        super();

        /**
         * 组策略名称
         */
        this.GroupName = null;

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 策略组所属视图的名称，若通过模版创建，可不传入
         */
        this.ViewName = null;

        /**
         * 策略组所属项目Id，会进行鉴权操作
         */
        this.ProjectId = null;

        /**
         * 模版策略组Id, 通过模版创建时才需要传
         */
        this.ConditionTempGroupId = null;

        /**
         * 是否屏蔽策略组，0表示不屏蔽，1表示屏蔽。不填默认为0
         */
        this.IsShielded = null;

        /**
         * 策略组的备注信息
         */
        this.Remark = null;

        /**
         * 插入时间，戳格式为Unix时间戳，不填则按后台处理时间填充
         */
        this.InsertTime = null;

        /**
         * 策略组中的阈值告警规则
         */
        this.Conditions = null;

        /**
         * 策略组中的事件告警规则
         */
        this.EventConditions = null;

        /**
         * 是否为后端调用。当且仅当值为1时，后台拉取策略模版中的规则填充入Conditions以及EventConditions字段
         */
        this.BackEndCall = null;

        /**
         * 指标告警规则的且或关系，0表示或规则(满足任意规则就告警)，1表示且规则(满足所有规则才告警)
         */
        this.IsUnionRule = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupName: string | null;
        Module: string | null;
        ViewName: string | null;
        ProjectId: number | null;
        ConditionTempGroupId: number | null;
        IsShielded: number | null;
        Remark: string | null;
        InsertTime: number | null;
        Conditions: Array<CreatePolicyGroupCondition> | null;
        EventConditions: Array<CreatePolicyGroupEventCondition> | null;
        BackEndCall: number | null;
        IsUnionRule: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;
        this.IsShielded = 'IsShielded' in params ? params.IsShielded : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new CreatePolicyGroupCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new CreatePolicyGroupEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }
        this.BackEndCall = 'BackEndCall' in params ? params.BackEndCall : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * 创建策略传入的阈值告警条件
 * @class
 */
class CreatePolicyGroupCondition extends AbstractModel {

    MetricId: number | null
    
    AlarmNotifyType: number | null
    
    AlarmNotifyPeriod: number | null
    
    CalcType: number | null
    
    CalcValue: number | null
    
    CalcPeriod: number | null
    
    ContinuePeriod: number | null
    
    RuleId: number | null
    
    constructor(){
        super();

        /**
         * 指标Id
         */
        this.MetricId = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等。如果指标有配置默认比较类型值可以不填。
         */
        this.CalcType = null;

        /**
         * 比较的值，如果指标不必须CalcValue可不填
         */
        this.CalcValue = null;

        /**
         * 数据聚合周期(单位秒)，若指标有默认值可不填
         */
        this.CalcPeriod = null;

        /**
         * 持续几个检测周期触发规则会告警
         */
        this.ContinuePeriod = null;

        /**
         * 如果通过模版创建，需要传入模版中该指标的对应RuleId
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MetricId: number | null;
        AlarmNotifyType: number | null;
        AlarmNotifyPeriod: number | null;
        CalcType: number | null;
        CalcValue: number | null;
        CalcPeriod: number | null;
        ContinuePeriod: number | null;
        RuleId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.CalcPeriod = 'CalcPeriod' in params ? params.CalcPeriod : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 查询策略输出的告警接收人信息
 * @class
 */
class DescribePolicyGroupInfoReceiverInfo extends AbstractModel {

    ReceiverGroupList: Array<number> | null
    
    ReceiverUserList: Array<number> | null
    
    StartTime: number | null
    
    EndTime: number | null
    
    ReceiverType: string | null
    
    NotifyWay: Array<string> | null
    
    UidList: Array<number> | null
    
    RoundNumber: number | null
    
    RoundInterval: number | null
    
    PersonInterval: number | null
    
    NeedSendNotice: number | null
    
    SendFor: Array<string> | null
    
    RecoverNotify: Array<string> | null
    
    ReceiveLanguage: string | null
    
    constructor(){
        super();

        /**
         * 告警接收组id列表
         */
        this.ReceiverGroupList = null;

        /**
         * 告警接收人id列表
         */
        this.ReceiverUserList = null;

        /**
         * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
         */
        this.StartTime = null;

        /**
         * 告警时间段结束时间。含义同StartTime
         */
        this.EndTime = null;

        /**
         * 接收类型。“group”(接收组)或“user”(接收人)
         */
        this.ReceiverType = null;

        /**
         * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
         */
        this.NotifyWay = null;

        /**
         * 电话告警接收者uid
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UidList = null;

        /**
         * 电话告警轮数
         */
        this.RoundNumber = null;

        /**
         * 电话告警每轮间隔（秒）
         */
        this.RoundInterval = null;

        /**
         * 电话告警对个人间隔（秒）
         */
        this.PersonInterval = null;

        /**
         * 是否需要电话告警触达提示。0不需要，1需要
         */
        this.NeedSendNotice = null;

        /**
         * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
         */
        this.SendFor = null;

        /**
         * 恢复通知方式。可选"SMS"
         */
        this.RecoverNotify = null;

        /**
         * 告警发送语言
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ReceiveLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ReceiverGroupList: Array<number> | null;
        ReceiverUserList: Array<number> | null;
        StartTime: number | null;
        EndTime: number | null;
        ReceiverType: string | null;
        NotifyWay: Array<string> | null;
        UidList: Array<number> | null;
        RoundNumber: number | null;
        RoundInterval: number | null;
        PersonInterval: number | null;
        NeedSendNotice: number | null;
        SendFor: Array<string> | null;
        RecoverNotify: Array<string> | null;
        ReceiveLanguage: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.UidList = 'UidList' in params ? params.UidList : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;
        this.ReceiveLanguage = 'ReceiveLanguage' in params ? params.ReceiveLanguage : null;

    }
}

/**
 * BindingPolicyObject请求参数结构体
 * @class
 */
class BindingPolicyObjectRequest extends AbstractModel {

    GroupId: number | null
    
    Module: string | null
    
    InstanceGroupId: number | null
    
    Dimensions: Array<BindingPolicyObjectDimension> | null
    
    constructor(){
        super();

        /**
         * 策略分组Id
         */
        this.GroupId = null;

        /**
         * 必填。固定值"monitor"
         */
        this.Module = null;

        /**
         * 实例分组ID
         */
        this.InstanceGroupId = null;

        /**
         * 需要绑定的对象维度信息
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: number | null;
        Module: string | null;
        InstanceGroupId: number | null;
        Dimensions: Array<BindingPolicyObjectDimension> | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new BindingPolicyObjectDimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * DescribeProductEventList返回的Events里的GroupInfo
 * @class
 */
class DescribeProductEventListEventsGroupInfo extends AbstractModel {

    GroupId: number | null
    
    GroupName: string | null
    
    constructor(){
        super();

        /**
         * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GroupId = null;

        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: number | null;
        GroupName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * ModifyPolicyGroup请求参数结构体
 * @class
 */
class ModifyPolicyGroupRequest extends AbstractModel {

    Module: string | null
    
    GroupId: number | null
    
    ViewName: string | null
    
    GroupName: string | null
    
    IsUnionRule: number | null
    
    Conditions: Array<ModifyPolicyGroupCondition> | null
    
    EventConditions: Array<ModifyPolicyGroupEventCondition> | null
    
    ConditionTempGroupId: number | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 策略组id
         */
        this.GroupId = null;

        /**
         * 告警类型
         */
        this.ViewName = null;

        /**
         * 策略组名称
         */
        this.GroupName = null;

        /**
         * 指标告警条件的且或关系，1表示且告警，所有指标告警条件都达到才告警，0表示或告警，任意指标告警条件达到都告警
         */
        this.IsUnionRule = null;

        /**
         * 指标告警条件规则，不填表示删除已有的所有指标告警条件规则
         */
        this.Conditions = null;

        /**
         * 事件告警条件，不填表示删除已有的事件告警条件
         */
        this.EventConditions = null;

        /**
         * 模板策略组id
         */
        this.ConditionTempGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        GroupId: number | null;
        ViewName: string | null;
        GroupName: string | null;
        IsUnionRule: number | null;
        Conditions: Array<ModifyPolicyGroupCondition> | null;
        EventConditions: Array<ModifyPolicyGroupEventCondition> | null;
        ConditionTempGroupId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ModifyPolicyGroupCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new ModifyPolicyGroupEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.Period
 * @class
 */
class DescribePolicyConditionListConfigManualPeriod extends AbstractModel {

    Default: number | null
    
    Keys: Array<number> | null
    
    Need: boolean | null
    
    constructor(){
        super();

        /**
         * 默认周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Default = null;

        /**
         * 可选周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Keys = null;

        /**
         * 是否必须
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Default: number | null;
        Keys: Array<number> | null;
        Need: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * DescribePolicyConditionList.EventMetric
 * @class
 */
class DescribePolicyConditionListEventMetric extends AbstractModel {

    EventId: number | null
    
    EventShowName: string | null
    
    NeedRecovered: boolean | null
    
    Type: number | null
    
    constructor(){
        super();

        /**
         * 事件id
         */
        this.EventId = null;

        /**
         * 事件名称
         */
        this.EventShowName = null;

        /**
         * 是否需要恢复
         */
        this.NeedRecovered = null;

        /**
         * 事件类型，预留字段，当前固定取值为2
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventId: number | null;
        EventShowName: string | null;
        NeedRecovered: boolean | null;
        Type: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventShowName = 'EventShowName' in params ? params.EventShowName : null;
        this.NeedRecovered = 'NeedRecovered' in params ? params.NeedRecovered : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribePolicyConditionList策略条件
 * @class
 */
class DescribePolicyConditionListCondition extends AbstractModel {

    PolicyViewName: string | null
    
    EventMetrics: Array<DescribePolicyConditionListEventMetric> | null
    
    IsSupportMultiRegion: boolean | null
    
    Metrics: Array<DescribePolicyConditionListMetric> | null
    
    Name: string | null
    
    SortId: number | null
    
    SupportDefault: boolean | null
    
    SupportRegions: Array<string> | null
    
    constructor(){
        super();

        /**
         * 策略视图名称
         */
        this.PolicyViewName = null;

        /**
         * 事件告警条件
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventMetrics = null;

        /**
         * 是否支持多地域
         */
        this.IsSupportMultiRegion = null;

        /**
         * 指标告警条件
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Metrics = null;

        /**
         * 策略类型名称
         */
        this.Name = null;

        /**
         * 排序id
         */
        this.SortId = null;

        /**
         * 是否支持默认策略
         */
        this.SupportDefault = null;

        /**
         * 支持该策略类型的地域列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SupportRegions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PolicyViewName: string | null;
        EventMetrics: Array<DescribePolicyConditionListEventMetric> | null;
        IsSupportMultiRegion: boolean | null;
        Metrics: Array<DescribePolicyConditionListMetric> | null;
        Name: string | null;
        SortId: number | null;
        SupportDefault: boolean | null;
        SupportRegions: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.PolicyViewName = 'PolicyViewName' in params ? params.PolicyViewName : null;

        if (params.EventMetrics) {
            this.EventMetrics = new Array();
            for (let z in params.EventMetrics) {
                let obj = new DescribePolicyConditionListEventMetric();
                obj.deserialize(params.EventMetrics[z]);
                this.EventMetrics.push(obj);
            }
        }
        this.IsSupportMultiRegion = 'IsSupportMultiRegion' in params ? params.IsSupportMultiRegion : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new DescribePolicyConditionListMetric();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.SupportDefault = 'SupportDefault' in params ? params.SupportDefault : null;
        this.SupportRegions = 'SupportRegions' in params ? params.SupportRegions : null;

    }
}

/**
 * DescribeBasicAlarmList请求参数结构体
 * @class
 */
class DescribeBasicAlarmListRequest extends AbstractModel {

    Module: string | null
    
    StartTime: number | null
    
    EndTime: number | null
    
    Limit: number | null
    
    Offset: number | null
    
    OccurTimeOrder: string | null
    
    ProjectIds: Array<number> | null
    
    ViewNames: Array<string> | null
    
    AlarmStatus: Array<number> | null
    
    ObjLike: string | null
    
    InstanceGroupIds: Array<number> | null
    
    MetricNames: Array<string> | null
    
    constructor(){
        super();

        /**
         * 接口模块名，当前取值monitor
         */
        this.Module = null;

        /**
         * 起始时间，默认一天前的时间戳
         */
        this.StartTime = null;

        /**
         * 结束时间，默认当前时间戳
         */
        this.EndTime = null;

        /**
         * 分页参数，每页返回的数量，取值1~100，默认20
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数，默认0
         */
        this.Offset = null;

        /**
         * 根据发生时间排序，取值ASC或DESC
         */
        this.OccurTimeOrder = null;

        /**
         * 根据项目ID过滤
         */
        this.ProjectIds = null;

        /**
         * 根据策略类型过滤
         */
        this.ViewNames = null;

        /**
         * 根据告警状态过滤
         */
        this.AlarmStatus = null;

        /**
         * 根据告警对象过滤
         */
        this.ObjLike = null;

        /**
         * 根据实例组ID过滤
         */
        this.InstanceGroupIds = null;

        /**
         * 根据指标名过滤
         */
        this.MetricNames = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        StartTime: number | null;
        EndTime: number | null;
        Limit: number | null;
        Offset: number | null;
        OccurTimeOrder: string | null;
        ProjectIds: Array<number> | null;
        ViewNames: Array<string> | null;
        AlarmStatus: Array<number> | null;
        ObjLike: string | null;
        InstanceGroupIds: Array<number> | null;
        MetricNames: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OccurTimeOrder = 'OccurTimeOrder' in params ? params.OccurTimeOrder : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ViewNames = 'ViewNames' in params ? params.ViewNames : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.ObjLike = 'ObjLike' in params ? params.ObjLike : null;
        this.InstanceGroupIds = 'InstanceGroupIds' in params ? params.InstanceGroupIds : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;

    }
}

/**
 * DescribePolicyGroupList返回参数结构体
 * @class
 */
class DescribePolicyGroupListResponse extends AbstractModel {

    GroupList: Array<DescribePolicyGroupListGroup> | null
    
    Total: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 策略组列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GroupList = null;

        /**
         * 策略组总数
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupList: Array<DescribePolicyGroupListGroup> | null;
        Total: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new DescribePolicyGroupListGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePolicyGroupInfo请求参数结构体
 * @class
 */
class DescribePolicyGroupInfoRequest extends AbstractModel {

    Module: string | null
    
    GroupId: number | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 策略组id
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        GroupId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 维度信息
 * @class
 */
class DimensionsDesc extends AbstractModel {

    Dimensions: Array<string> | null
    
    constructor(){
        super();

        /**
         * 维度名数组
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Dimensions: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * DescribePolicyGroupList.Group
 * @class
 */
class DescribePolicyGroupListGroup extends AbstractModel {

    GroupId: number | null
    
    GroupName: string | null
    
    IsOpen: boolean | null
    
    ViewName: string | null
    
    LastEditUin: string | null
    
    UpdateTime: number | null
    
    InsertTime: number | null
    
    UseSum: number | null
    
    NoShieldedSum: number | null
    
    IsDefault: number | null
    
    CanSetDefault: boolean | null
    
    ParentGroupId: number | null
    
    Remark: string | null
    
    ProjectId: number | null
    
    Conditions: Array<DescribePolicyGroupInfoCondition> | null
    
    EventConditions: Array<DescribePolicyGroupInfoEventCondition> | null
    
    ReceiverInfos: Array<DescribePolicyGroupInfoReceiverInfo> | null
    
    ConditionsTemp: DescribePolicyGroupInfoConditionTpl | null
    
    InstanceGroup: DescribePolicyGroupListGroupInstanceGroup | null
    
    IsUnionRule: number | null
    
    constructor(){
        super();

        /**
         * 策略组id
         */
        this.GroupId = null;

        /**
         * 策略组名称
         */
        this.GroupName = null;

        /**
         * 是否开启
         */
        this.IsOpen = null;

        /**
         * 策略视图名称
         */
        this.ViewName = null;

        /**
         * 最近编辑的用户uin
         */
        this.LastEditUin = null;

        /**
         * 最后修改时间
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         */
        this.InsertTime = null;

        /**
         * 策略组绑定的实例数
         */
        this.UseSum = null;

        /**
         * 策略组绑定的未屏蔽实例数
         */
        this.NoShieldedSum = null;

        /**
         * 是否为默认策略，0表示非默认策略，1表示默认策略
         */
        this.IsDefault = null;

        /**
         * 是否可以设置成默认策略
         */
        this.CanSetDefault = null;

        /**
         * 父策略组id
         */
        this.ParentGroupId = null;

        /**
         * 策略组备注
         */
        this.Remark = null;

        /**
         * 策略组所属项目id
         */
        this.ProjectId = null;

        /**
         * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Conditions = null;

        /**
         * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventConditions = null;

        /**
         * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ReceiverInfos = null;

        /**
         * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ConditionsTemp = null;

        /**
         * 策略组绑定的实例组信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceGroup = null;

        /**
         * 且或规则标识, 0表示或规则(任意一条规则满足阈值条件就告警), 1表示且规则(所有规则都满足阈值条件才告警)
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsUnionRule = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: number | null;
        GroupName: string | null;
        IsOpen: boolean | null;
        ViewName: string | null;
        LastEditUin: string | null;
        UpdateTime: number | null;
        InsertTime: number | null;
        UseSum: number | null;
        NoShieldedSum: number | null;
        IsDefault: number | null;
        CanSetDefault: boolean | null;
        ParentGroupId: number | null;
        Remark: string | null;
        ProjectId: number | null;
        Conditions: Array<DescribePolicyGroupInfoCondition> | null;
        EventConditions: Array<DescribePolicyGroupInfoEventCondition> | null;
        ReceiverInfos: Array<DescribePolicyGroupInfoReceiverInfo> | null;
        ConditionsTemp: DescribePolicyGroupInfoConditionTpl | null;
        InstanceGroup: DescribePolicyGroupListGroupInstanceGroup | null;
        IsUnionRule: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.UseSum = 'UseSum' in params ? params.UseSum : null;
        this.NoShieldedSum = 'NoShieldedSum' in params ? params.NoShieldedSum : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.ParentGroupId = 'ParentGroupId' in params ? params.ParentGroupId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new DescribePolicyGroupInfoCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.EventConditions) {
            this.EventConditions = new Array();
            for (let z in params.EventConditions) {
                let obj = new DescribePolicyGroupInfoEventCondition();
                obj.deserialize(params.EventConditions[z]);
                this.EventConditions.push(obj);
            }
        }

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new DescribePolicyGroupInfoReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

        if (params.ConditionsTemp) {
            let obj = new DescribePolicyGroupInfoConditionTpl();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }

        if (params.InstanceGroup) {
            let obj = new DescribePolicyGroupListGroupInstanceGroup();
            obj.deserialize(params.InstanceGroup)
            this.InstanceGroup = obj;
        }
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * DescribeBasicAlarmList返回的Alarms
 * @class
 */
class DescribeBasicAlarmListAlarms extends AbstractModel {

    Id: number | null
    
    ProjectId: number | null
    
    ProjectName: string | null
    
    Status: number | null
    
    AlarmStatus: string | null
    
    GroupId: number | null
    
    GroupName: string | null
    
    FirstOccurTime: string | null
    
    Duration: number | null
    
    LastOccurTime: string | null
    
    Content: string | null
    
    ObjName: string | null
    
    ObjId: string | null
    
    ViewName: string | null
    
    Vpc: string | null
    
    MetricId: number | null
    
    MetricName: string | null
    
    AlarmType: number | null
    
    Region: string | null
    
    Dimensions: string | null
    
    NotifyWay: Array<string> | null
    
    InstanceGroup: Array<InstanceGroup> | null
    
    constructor(){
        super();

        /**
         * 该条告警的ID
         */
        this.Id = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectId = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectName = null;

        /**
         * 告警状态ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;

        /**
         * 告警状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AlarmStatus = null;

        /**
         * 策略组ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GroupId = null;

        /**
         * 策略组名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GroupName = null;

        /**
         * 发生时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FirstOccurTime = null;

        /**
         * 持续时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Duration = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LastOccurTime = null;

        /**
         * 告警内容
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Content = null;

        /**
         * 告警对象
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjName = null;

        /**
         * 告警对象ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjId = null;

        /**
         * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ViewName = null;

        /**
         * VPC，只有CVM有
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Vpc = null;

        /**
         * 指标ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetricId = null;

        /**
         * 指标名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetricName = null;

        /**
         * 告警类型，0表示指标告警，2表示产品事件告警，3表示平台事件告警
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AlarmType = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Region = null;

        /**
         * 告警对象维度信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Dimensions = null;

        /**
         * 通知方式
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NotifyWay = null;

        /**
         * 所属实例组信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceGroup = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        ProjectId: number | null;
        ProjectName: string | null;
        Status: number | null;
        AlarmStatus: string | null;
        GroupId: number | null;
        GroupName: string | null;
        FirstOccurTime: string | null;
        Duration: number | null;
        LastOccurTime: string | null;
        Content: string | null;
        ObjName: string | null;
        ObjId: string | null;
        ViewName: string | null;
        Vpc: string | null;
        MetricId: number | null;
        MetricName: string | null;
        AlarmType: number | null;
        Region: string | null;
        Dimensions: string | null;
        NotifyWay: Array<string> | null;
        InstanceGroup: Array<InstanceGroup> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AlarmStatus = 'AlarmStatus' in params ? params.AlarmStatus : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.FirstOccurTime = 'FirstOccurTime' in params ? params.FirstOccurTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.LastOccurTime = 'LastOccurTime' in params ? params.LastOccurTime : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ObjName = 'ObjName' in params ? params.ObjName : null;
        this.ObjId = 'ObjId' in params ? params.ObjId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Vpc = 'Vpc' in params ? params.Vpc : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;

        if (params.InstanceGroup) {
            this.InstanceGroup = new Array();
            for (let z in params.InstanceGroup) {
                let obj = new InstanceGroup();
                obj.deserialize(params.InstanceGroup[z]);
                this.InstanceGroup.push(obj);
            }
        }

    }
}

/**
 * DescribeProductList请求参数结构体
 * @class
 */
class DescribeProductListRequest extends AbstractModel {

    Module: string | null
    
    Order: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 固定传值monitor
         */
        this.Module = null;

        /**
         * 排序方式：DESC/ASC（区分大小写），默认值DESC
         */
        this.Order = null;

        /**
         * 分页查询的偏移量，默认值0
         */
        this.Offset = null;

        /**
         * 分页查询的每页数据量，默认值20
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Order: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 周期内的统计方式
 * @class
 */
class PeriodsSt extends AbstractModel {

    Period: string | null
    
    StatType: Array<string> | null
    
    constructor(){
        super();

        /**
         * 周期
         */
        this.Period = null;

        /**
         * 统计方式
         */
        this.StatType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Period: string | null;
        StatType: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StatType = 'StatType' in params ? params.StatType : null;

    }
}

/**
 * DescribeAccidentEventList请求参数结构体
 * @class
 */
class DescribeAccidentEventListRequest extends AbstractModel {

    Module: string | null
    
    StartTime: number | null
    
    EndTime: number | null
    
    Limit: number | null
    
    Offset: number | null
    
    UpdateTimeOrder: string | null
    
    OccurTimeOrder: string | null
    
    AccidentType: Array<number> | null
    
    AccidentEvent: Array<number> | null
    
    AccidentStatus: Array<number> | null
    
    AccidentRegion: Array<string> | null
    
    AffectResource: string | null
    
    constructor(){
        super();

        /**
         * 接口模块名，当前接口取值monitor
         */
        this.Module = null;

        /**
         * 起始时间，默认一天前的时间戳
         */
        this.StartTime = null;

        /**
         * 结束时间，默认当前时间戳
         */
        this.EndTime = null;

        /**
         * 分页参数，每页返回的数量，取值1~100，默认20
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数，默认0
         */
        this.Offset = null;

        /**
         * 根据UpdateTime排序的规则，取值asc或desc
         */
        this.UpdateTimeOrder = null;

        /**
         * 根据OccurTime排序的规则，取值asc或desc（优先根据UpdateTimeOrder排序）
         */
        this.OccurTimeOrder = null;

        /**
         * 根据事件类型过滤，1表示服务问题，2表示其他订阅
         */
        this.AccidentType = null;

        /**
         * 根据事件过滤，1表示云服务器存储问题，2表示云服务器网络连接问题，3表示云服务器运行异常，202表示运营商网络抖动
         */
        this.AccidentEvent = null;

        /**
         * 根据事件状态过滤，0表示已恢复，1表示未恢复
         */
        this.AccidentStatus = null;

        /**
         * 根据事件地域过滤，gz表示广州，sh表示上海等
         */
        this.AccidentRegion = null;

        /**
         * 根据影响资源过滤，比如ins-19a06bka
         */
        this.AffectResource = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        StartTime: number | null;
        EndTime: number | null;
        Limit: number | null;
        Offset: number | null;
        UpdateTimeOrder: string | null;
        OccurTimeOrder: string | null;
        AccidentType: Array<number> | null;
        AccidentEvent: Array<number> | null;
        AccidentStatus: Array<number> | null;
        AccidentRegion: Array<string> | null;
        AffectResource: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;
        this.OccurTimeOrder = 'OccurTimeOrder' in params ? params.OccurTimeOrder : null;
        this.AccidentType = 'AccidentType' in params ? params.AccidentType : null;
        this.AccidentEvent = 'AccidentEvent' in params ? params.AccidentEvent : null;
        this.AccidentStatus = 'AccidentStatus' in params ? params.AccidentStatus : null;
        this.AccidentRegion = 'AccidentRegion' in params ? params.AccidentRegion : null;
        this.AffectResource = 'AffectResource' in params ? params.AffectResource : null;

    }
}

/**
 * DescribeProductEventList返回的OverView对象
 * @class
 */
class DescribeProductEventListOverView extends AbstractModel {

    StatusChangeAmount: number | null
    
    UnConfigAlarmAmount: number | null
    
    UnNormalEventAmount: number | null
    
    UnRecoverAmount: number | null
    
    constructor(){
        super();

        /**
         * 状态变更的事件数量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StatusChangeAmount = null;

        /**
         * 告警状态未配置的事件数量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UnConfigAlarmAmount = null;

        /**
         * 异常事件数量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UnNormalEventAmount = null;

        /**
         * 未恢复的事件数量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UnRecoverAmount = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StatusChangeAmount: number | null;
        UnConfigAlarmAmount: number | null;
        UnNormalEventAmount: number | null;
        UnRecoverAmount: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StatusChangeAmount = 'StatusChangeAmount' in params ? params.StatusChangeAmount : null;
        this.UnConfigAlarmAmount = 'UnConfigAlarmAmount' in params ? params.UnConfigAlarmAmount : null;
        this.UnNormalEventAmount = 'UnNormalEventAmount' in params ? params.UnNormalEventAmount : null;
        this.UnRecoverAmount = 'UnRecoverAmount' in params ? params.UnRecoverAmount : null;

    }
}

/**
 * 指标数据的解释
 * @class
 */
class MetricObjectMeaning extends AbstractModel {

    En: string | null
    
    Zh: string | null
    
    constructor(){
        super();

        /**
         * 指标英文解释
         */
        this.En = null;

        /**
         * 指标中文解释
         */
        this.Zh = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        En: string | null;
        Zh: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.En = 'En' in params ? params.En : null;
        this.Zh = 'Zh' in params ? params.Zh : null;

    }
}

/**
 * 指标名称和值的封装
 * @class
 */
class MetricDatum extends AbstractModel {

    MetricName: string | null
    
    Value: number | null
    
    constructor(){
        super();

        /**
         * 指标名称
         */
        this.MetricName = null;

        /**
         * 指标的值
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MetricName: string | null;
        Value: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeletePolicyGroup请求参数结构体
 * @class
 */
class DeletePolicyGroupRequest extends AbstractModel {

    Module: string | null
    
    GroupId: Array<number> | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 策略组id
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        GroupId: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * 查询策略输出的用户回调信息
 * @class
 */
class DescribePolicyGroupInfoCallback extends AbstractModel {

    CallbackUrl: string | null
    
    ValidFlag: number | null
    
    VerifyCode: string | null
    
    constructor(){
        super();

        /**
         * 用户回调接口地址
         */
        this.CallbackUrl = null;

        /**
         * 用户回调接口状态，0表示未验证，1表示已验证，2表示存在url但没有通过验证
         */
        this.ValidFlag = null;

        /**
         * 用户回调接口验证码
         */
        this.VerifyCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CallbackUrl: string | null;
        ValidFlag: number | null;
        VerifyCode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.ValidFlag = 'ValidFlag' in params ? params.ValidFlag : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;

    }
}

/**
 * DescribeBindingPolicyObjectList返回的是实例分组信息
 * @class
 */
class DescribeBindingPolicyObjectListInstanceGroup extends AbstractModel {

    InstanceGroupId: number | null
    
    ViewName: string | null
    
    LastEditUin: string | null
    
    GroupName: string | null
    
    InstanceSum: number | null
    
    UpdateTime: number | null
    
    InsertTime: number | null
    
    Regions: Array<string> | null
    
    constructor(){
        super();

        /**
         * 实例分组id
         */
        this.InstanceGroupId = null;

        /**
         * 告警策略类型名称
         */
        this.ViewName = null;

        /**
         * 最后编辑uin
         */
        this.LastEditUin = null;

        /**
         * 实例分组名称
         */
        this.GroupName = null;

        /**
         * 实例数量
         */
        this.InstanceSum = null;

        /**
         * 更新时间
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         */
        this.InsertTime = null;

        /**
         * 实例所在的地域集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Regions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceGroupId: number | null;
        ViewName: string | null;
        LastEditUin: string | null;
        GroupName: string | null;
        InstanceSum: number | null;
        UpdateTime: number | null;
        InsertTime: number | null;
        Regions: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.Regions = 'Regions' in params ? params.Regions : null;

    }
}

/**
 * DescribePolicyConditionList返回参数结构体
 * @class
 */
class DescribePolicyConditionListResponse extends AbstractModel {

    Conditions: Array<DescribePolicyConditionListCondition> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 告警策略条件列表
         */
        this.Conditions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Conditions: Array<DescribePolicyConditionListCondition> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new DescribePolicyConditionListCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.CalcType
 * @class
 */
class DescribePolicyConditionListConfigManualCalcType extends AbstractModel {

    Keys: Array<number> | null
    
    Need: boolean | null
    
    constructor(){
        super();

        /**
         * CalcType 取值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Keys = null;

        /**
         * 是否必须
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keys: Array<number> | null;
        Need: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * ModifyPolicyGroup返回参数结构体
 * @class
 */
class ModifyPolicyGroupResponse extends AbstractModel {

    GroupId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 策略组id
         */
        this.GroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PutMonitorData返回参数结构体
 * @class
 */
class PutMonitorDataResponse extends AbstractModel {

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
 * 接收人信息
 * @class
 */
class ReceiverInfo extends AbstractModel {

    StartTime: number | null
    
    EndTime: number | null
    
    NotifyWay: Array<string> | null
    
    ReceiverType: string | null
    
    Id: number | null
    
    SendFor: Array<string> | null
    
    UidList: Array<number> | null
    
    RoundNumber: number | null
    
    PersonInterval: number | null
    
    RoundInterval: number | null
    
    RecoverNotify: Array<string> | null
    
    NeedSendNotice: number | null
    
    ReceiverGroupList: Array<number> | null
    
    ReceiverUserList: Array<number> | null
    
    ReceiveLanguage: string | null
    
    constructor(){
        super();

        /**
         * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
         */
        this.StartTime = null;

        /**
         * 告警时间段结束时间。含义同StartTime
         */
        this.EndTime = null;

        /**
         * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
         */
        this.NotifyWay = null;

        /**
         * 接收人类型。“group” 或 “user”
         */
        this.ReceiverType = null;

        /**
         * ReceiverId
         */
        this.Id = null;

        /**
         * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
         */
        this.SendFor = null;

        /**
         * 电话告警接收者uid
         */
        this.UidList = null;

        /**
         * 电话告警轮数
         */
        this.RoundNumber = null;

        /**
         * 电话告警对个人间隔（秒）
         */
        this.PersonInterval = null;

        /**
         * 电话告警每轮间隔（秒）
         */
        this.RoundInterval = null;

        /**
         * 恢复通知方式。可选"SMS"
         */
        this.RecoverNotify = null;

        /**
         * 是否需要电话告警触达提示。0不需要，1需要
         */
        this.NeedSendNotice = null;

        /**
         * 接收组列表。通过平台接口查询到的接收组id列表
         */
        this.ReceiverGroupList = null;

        /**
         * 接收人列表。通过平台接口查询到的接收人id列表
         */
        this.ReceiverUserList = null;

        /**
         * 告警接收语言，枚举值（zh-CN，en-US）
         */
        this.ReceiveLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: number | null;
        EndTime: number | null;
        NotifyWay: Array<string> | null;
        ReceiverType: string | null;
        Id: number | null;
        SendFor: Array<string> | null;
        UidList: Array<number> | null;
        RoundNumber: number | null;
        PersonInterval: number | null;
        RoundInterval: number | null;
        RecoverNotify: Array<string> | null;
        NeedSendNotice: number | null;
        ReceiverGroupList: Array<number> | null;
        ReceiverUserList: Array<number> | null;
        ReceiveLanguage: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SendFor = 'SendFor' in params ? params.SendFor : null;
        this.UidList = 'UidList' in params ? params.UidList : null;
        this.RoundNumber = 'RoundNumber' in params ? params.RoundNumber : null;
        this.PersonInterval = 'PersonInterval' in params ? params.PersonInterval : null;
        this.RoundInterval = 'RoundInterval' in params ? params.RoundInterval : null;
        this.RecoverNotify = 'RecoverNotify' in params ? params.RecoverNotify : null;
        this.NeedSendNotice = 'NeedSendNotice' in params ? params.NeedSendNotice : null;
        this.ReceiverGroupList = 'ReceiverGroupList' in params ? params.ReceiverGroupList : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.ReceiveLanguage = 'ReceiveLanguage' in params ? params.ReceiveLanguage : null;

    }
}

/**
 * ModifyAlarmReceivers请求参数结构体
 * @class
 */
class ModifyAlarmReceiversRequest extends AbstractModel {

    GroupId: number | null
    
    Module: string | null
    
    ReceiverInfos: Array<ReceiverInfo> | null
    
    constructor(){
        super();

        /**
         * 需要修改接收人的策略组Id
         */
        this.GroupId = null;

        /**
         * 必填。固定为“monitor”
         */
        this.Module = null;

        /**
         * 新接收人信息, 没有填写则删除所有接收人
         */
        this.ReceiverInfos = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: number | null;
        Module: string | null;
        ReceiverInfos: Array<ReceiverInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Module = 'Module' in params ? params.Module : null;

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new ReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeProductEventList的入参Dimensions
 * @class
 */
class DescribeProductEventListDimensions extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 维度名
         */
        this.Name = null;

        /**
         * 维度值
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribePolicyGroupInfo返回参数结构体
 * @class
 */
class DescribePolicyGroupInfoResponse extends AbstractModel {

    GroupName: string | null
    
    ProjectId: number | null
    
    IsDefault: number | null
    
    ViewName: string | null
    
    Remark: string | null
    
    ShowName: string | null
    
    LastEditUin: string | null
    
    UpdateTime: string | null
    
    Region: Array<string> | null
    
    DimensionGroup: Array<string> | null
    
    ConditionsConfig: Array<DescribePolicyGroupInfoCondition> | null
    
    EventConfig: Array<DescribePolicyGroupInfoEventCondition> | null
    
    ReceiverInfos: Array<DescribePolicyGroupInfoReceiverInfo> | null
    
    Callback: DescribePolicyGroupInfoCallback | null
    
    ConditionsTemp: DescribePolicyGroupInfoConditionTpl | null
    
    CanSetDefault: boolean | null
    
    IsUnionRule: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 策略组名称
         */
        this.GroupName = null;

        /**
         * 策略组所属的项目id
         */
        this.ProjectId = null;

        /**
         * 是否为默认策略，0表示非默认策略，1表示默认策略
         */
        this.IsDefault = null;

        /**
         * 策略类型
         */
        this.ViewName = null;

        /**
         * 策略说明
         */
        this.Remark = null;

        /**
         * 策略类型名称
         */
        this.ShowName = null;

        /**
         * 最近编辑的用户uin
         */
        this.LastEditUin = null;

        /**
         * 最近编辑时间
         */
        this.UpdateTime = null;

        /**
         * 该策略支持的地域
         */
        this.Region = null;

        /**
         * 策略类型的维度列表
         */
        this.DimensionGroup = null;

        /**
         * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ConditionsConfig = null;

        /**
         * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventConfig = null;

        /**
         * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ReceiverInfos = null;

        /**
         * 用户回调信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Callback = null;

        /**
         * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ConditionsTemp = null;

        /**
         * 是否可以设置成默认策略
         */
        this.CanSetDefault = null;

        /**
         * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsUnionRule = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupName: string | null;
        ProjectId: number | null;
        IsDefault: number | null;
        ViewName: string | null;
        Remark: string | null;
        ShowName: string | null;
        LastEditUin: string | null;
        UpdateTime: string | null;
        Region: Array<string> | null;
        DimensionGroup: Array<string> | null;
        ConditionsConfig: Array<DescribePolicyGroupInfoCondition> | null;
        EventConfig: Array<DescribePolicyGroupInfoEventCondition> | null;
        ReceiverInfos: Array<DescribePolicyGroupInfoReceiverInfo> | null;
        Callback: DescribePolicyGroupInfoCallback | null;
        ConditionsTemp: DescribePolicyGroupInfoConditionTpl | null;
        CanSetDefault: boolean | null;
        IsUnionRule: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ShowName = 'ShowName' in params ? params.ShowName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DimensionGroup = 'DimensionGroup' in params ? params.DimensionGroup : null;

        if (params.ConditionsConfig) {
            this.ConditionsConfig = new Array();
            for (let z in params.ConditionsConfig) {
                let obj = new DescribePolicyGroupInfoCondition();
                obj.deserialize(params.ConditionsConfig[z]);
                this.ConditionsConfig.push(obj);
            }
        }

        if (params.EventConfig) {
            this.EventConfig = new Array();
            for (let z in params.EventConfig) {
                let obj = new DescribePolicyGroupInfoEventCondition();
                obj.deserialize(params.EventConfig[z]);
                this.EventConfig.push(obj);
            }
        }

        if (params.ReceiverInfos) {
            this.ReceiverInfos = new Array();
            for (let z in params.ReceiverInfos) {
                let obj = new DescribePolicyGroupInfoReceiverInfo();
                obj.deserialize(params.ReceiverInfos[z]);
                this.ReceiverInfos.push(obj);
            }
        }

        if (params.Callback) {
            let obj = new DescribePolicyGroupInfoCallback();
            obj.deserialize(params.Callback)
            this.Callback = obj;
        }

        if (params.ConditionsTemp) {
            let obj = new DescribePolicyGroupInfoConditionTpl();
            obj.deserialize(params.ConditionsTemp)
            this.ConditionsTemp = obj;
        }
        this.CanSetDefault = 'CanSetDefault' in params ? params.CanSetDefault : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBasicAlarmList返回参数结构体
 * @class
 */
class DescribeBasicAlarmListResponse extends AbstractModel {

    Alarms: Array<DescribeBasicAlarmListAlarms> | null
    
    Total: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 告警列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Alarms = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Alarms: Array<DescribeBasicAlarmListAlarms> | null;
        Total: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Alarms) {
            this.Alarms = new Array();
            for (let z in params.Alarms) {
                let obj = new DescribeBasicAlarmListAlarms();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云监控支持的产品简要信息
 * @class
 */
class ProductSimple extends AbstractModel {

    Namespace: string | null
    
    ProductName: string | null
    
    ProductEnName: string | null
    
    constructor(){
        super();

        /**
         * 命名空间
         */
        this.Namespace = null;

        /**
         * 产品中文名称
         */
        this.ProductName = null;

        /**
         * 产品英文名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductEnName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Namespace: string | null;
        ProductName: string | null;
        ProductEnName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductEnName = 'ProductEnName' in params ? params.ProductEnName : null;

    }
}

/**
 * DescribeBindingPolicyObjectList接口的Dimension
 * @class
 */
class DescribeBindingPolicyObjectListDimension extends AbstractModel {

    RegionId: number | null
    
    Region: string | null
    
    Dimensions: string | null
    
    EventDimensions: string | null
    
    constructor(){
        super();

        /**
         * 地域id
         */
        this.RegionId = null;

        /**
         * 地域简称
         */
        this.Region = null;

        /**
         * 维度组合json字符串
         */
        this.Dimensions = null;

        /**
         * 事件维度组合json字符串
         */
        this.EventDimensions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegionId: number | null;
        Region: string | null;
        Dimensions: string | null;
        EventDimensions: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.EventDimensions = 'EventDimensions' in params ? params.EventDimensions : null;

    }
}

/**
 * 查询策略输出的阈值告警条件
 * @class
 */
class DescribePolicyGroupInfoCondition extends AbstractModel {

    MetricShowName: string | null
    
    Period: number | null
    
    MetricId: number | null
    
    RuleId: number | null
    
    Unit: string | null
    
    AlarmNotifyType: number | null
    
    AlarmNotifyPeriod: number | null
    
    CalcType: number | null
    
    CalcValue: string | null
    
    ContinueTime: number | null
    
    MetricName: string | null
    
    constructor(){
        super();

        /**
         * 指标名称
         */
        this.MetricShowName = null;

        /**
         * 数据聚合周期(单位秒)
         */
        this.Period = null;

        /**
         * 指标id
         */
        this.MetricId = null;

        /**
         * 阈值规则id
         */
        this.RuleId = null;

        /**
         * 指标单位
         */
        this.Unit = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等，7表示日同比上涨，8表示日同比下降，9表示周同比上涨，10表示周同比下降，11表示周期环比上涨，12表示周期环比下降
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CalcType = null;

        /**
         * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CalcValue = null;

        /**
         * 持续多长时间触发规则会告警(单位秒)
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ContinueTime = null;

        /**
         * 告警指标名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetricName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MetricShowName: string | null;
        Period: number | null;
        MetricId: number | null;
        RuleId: number | null;
        Unit: string | null;
        AlarmNotifyType: number | null;
        AlarmNotifyPeriod: number | null;
        CalcType: number | null;
        CalcValue: string | null;
        ContinueTime: number | null;
        MetricName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MetricShowName = 'MetricShowName' in params ? params.MetricShowName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.ContinueTime = 'ContinueTime' in params ? params.ContinueTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * UnBindingPolicyObject返回参数结构体
 * @class
 */
class UnBindingPolicyObjectResponse extends AbstractModel {

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
 * GetMonitorData返回参数结构体
 * @class
 */
class GetMonitorDataResponse extends AbstractModel {

    Period: number | null
    
    MetricName: string | null
    
    DataPoints: Array<DataPoint> | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 统计周期
         */
        this.Period = null;

        /**
         * 指标名
         */
        this.MetricName = null;

        /**
         * 数据点数组
         */
        this.DataPoints = null;

        /**
         * 开始时间
         */
        this.StartTime = null;

        /**
         * 结束时间
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
        Period: number | null;
        MetricName: string | null;
        DataPoints: Array<DataPoint> | null;
        StartTime: string | null;
        EndTime: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.DataPoints) {
            this.DataPoints = new Array();
            for (let z in params.DataPoints) {
                let obj = new DataPoint();
                obj.deserialize(params.DataPoints[z]);
                this.DataPoints.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对业务指标的单位及支持统计周期的描述
 * @class
 */
class MetricSet extends AbstractModel {

    Namespace: string | null
    
    MetricName: string | null
    
    Unit: string | null
    
    UnitCname: string | null
    
    Period: Array<number> | null
    
    Periods: Array<PeriodsSt> | null
    
    Meaning: MetricObjectMeaning | null
    
    Dimensions: Array<DimensionsDesc> | null
    
    constructor(){
        super();

        /**
         * 命名空间，每个云产品会有一个命名空间
         */
        this.Namespace = null;

        /**
         * 指标名称
         */
        this.MetricName = null;

        /**
         * 指标使用的单位
         */
        this.Unit = null;

        /**
         * 指标使用的单位
         */
        this.UnitCname = null;

        /**
         * 指标支持的统计周期，单位是秒，如60、300
         */
        this.Period = null;

        /**
         * 统计周期内指标方式
         */
        this.Periods = null;

        /**
         * 统计指标含义解释
         */
        this.Meaning = null;

        /**
         * 维度描述信息
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Namespace: string | null;
        MetricName: string | null;
        Unit: string | null;
        UnitCname: string | null;
        Period: Array<number> | null;
        Periods: Array<PeriodsSt> | null;
        Meaning: MetricObjectMeaning | null;
        Dimensions: Array<DimensionsDesc> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.UnitCname = 'UnitCname' in params ? params.UnitCname : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.Periods) {
            this.Periods = new Array();
            for (let z in params.Periods) {
                let obj = new PeriodsSt();
                obj.deserialize(params.Periods[z]);
                this.Periods.push(obj);
            }
        }

        if (params.Meaning) {
            let obj = new MetricObjectMeaning();
            obj.deserialize(params.Meaning)
            this.Meaning = obj;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DimensionsDesc();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * DescribeBindingPolicyObjectList返回参数结构体
 * @class
 */
class DescribeBindingPolicyObjectListResponse extends AbstractModel {

    List: Array<DescribeBindingPolicyObjectListInstance> | null
    
    Total: number | null
    
    NoShieldedSum: number | null
    
    InstanceGroup: DescribeBindingPolicyObjectListInstanceGroup | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 绑定的对象实例列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.List = null;

        /**
         * 绑定的对象实例总数
         */
        this.Total = null;

        /**
         * 未屏蔽的对象实例数
         */
        this.NoShieldedSum = null;

        /**
         * 绑定的实例分组信息，没有绑定实例分组则为空
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceGroup = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        List: Array<DescribeBindingPolicyObjectListInstance> | null;
        Total: number | null;
        NoShieldedSum: number | null;
        InstanceGroup: DescribeBindingPolicyObjectListInstanceGroup | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DescribeBindingPolicyObjectListInstance();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.NoShieldedSum = 'NoShieldedSum' in params ? params.NoShieldedSum : null;

        if (params.InstanceGroup) {
            let obj = new DescribeBindingPolicyObjectListInstanceGroup();
            obj.deserialize(params.InstanceGroup)
            this.InstanceGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询策略输出的模板策略组信息
 * @class
 */
class DescribePolicyGroupInfoConditionTpl extends AbstractModel {

    GroupId: number | null
    
    GroupName: string | null
    
    ViewName: string | null
    
    Remark: string | null
    
    LastEditUin: string | null
    
    UpdateTime: number | null
    
    InsertTime: number | null
    
    IsUnionRule: number | null
    
    constructor(){
        super();

        /**
         * 策略组id
         */
        this.GroupId = null;

        /**
         * 策略组名称
         */
        this.GroupName = null;

        /**
         * 策略类型
         */
        this.ViewName = null;

        /**
         * 策略组说明
         */
        this.Remark = null;

        /**
         * 最后编辑的用户uin
         */
        this.LastEditUin = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UpdateTime = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InsertTime = null;

        /**
         * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsUnionRule = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: number | null;
        GroupName: string | null;
        ViewName: string | null;
        Remark: string | null;
        LastEditUin: string | null;
        UpdateTime: number | null;
        InsertTime: number | null;
        IsUnionRule: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.IsUnionRule = 'IsUnionRule' in params ? params.IsUnionRule : null;

    }
}

/**
 * DescribeBindingPolicyObjectList请求参数结构体
 * @class
 */
class DescribeBindingPolicyObjectListRequest extends AbstractModel {

    Module: string | null
    
    GroupId: number | null
    
    Limit: number | null
    
    Offset: number | null
    
    Dimensions: Array<DescribeBindingPolicyObjectListDimension> | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 策略组id
         */
        this.GroupId = null;

        /**
         * 分页参数，每页返回的数量，取值1~100，默认20
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数，默认0
         */
        this.Offset = null;

        /**
         * 筛选对象的维度信息
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        GroupId: number | null;
        Limit: number | null;
        Offset: number | null;
        Dimensions: Array<DescribeBindingPolicyObjectListDimension> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DescribeBindingPolicyObjectListDimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * CreatePolicyGroup返回参数结构体
 * @class
 */
class CreatePolicyGroupResponse extends AbstractModel {

    GroupId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 创建成功的策略组Id
         */
        this.GroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PutMonitorData请求参数结构体
 * @class
 */
class PutMonitorDataRequest extends AbstractModel {

    Metrics: Array<MetricDatum> | null
    
    AnnounceIp: string | null
    
    AnnounceTimestamp: number | null
    
    AnnounceInstance: string | null
    
    constructor(){
        super();

        /**
         * 一组指标和数据
         */
        this.Metrics = null;

        /**
         * 上报时自行指定的 IP
         */
        this.AnnounceIp = null;

        /**
         * 上报时自行指定的时间戳
         */
        this.AnnounceTimestamp = null;

        /**
         * 上报时自行指定的 IP 或 产品实例ID
         */
        this.AnnounceInstance = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Metrics: Array<MetricDatum> | null;
        AnnounceIp: string | null;
        AnnounceTimestamp: number | null;
        AnnounceInstance: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricDatum();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.AnnounceIp = 'AnnounceIp' in params ? params.AnnounceIp : null;
        this.AnnounceTimestamp = 'AnnounceTimestamp' in params ? params.AnnounceTimestamp : null;
        this.AnnounceInstance = 'AnnounceInstance' in params ? params.AnnounceInstance : null;

    }
}

/**
 * DescribeBasicAlarmList返回的Alarms里的InstanceGroup
 * @class
 */
class InstanceGroup extends AbstractModel {

    InstanceGroupId: number | null
    
    InstanceGroupName: string | null
    
    constructor(){
        super();

        /**
         * 实例组ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceGroupId = null;

        /**
         * 实例组名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceGroupId: number | null;
        InstanceGroupName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.InstanceGroupName = 'InstanceGroupName' in params ? params.InstanceGroupName : null;

    }
}

/**
 * 查询策略输出的事件告警条件
 * @class
 */
class DescribePolicyGroupInfoEventCondition extends AbstractModel {

    EventId: number | null
    
    RuleId: number | null
    
    EventShowName: string | null
    
    AlarmNotifyPeriod: number | null
    
    AlarmNotifyType: number | null
    
    constructor(){
        super();

        /**
         * 事件id
         */
        this.EventId = null;

        /**
         * 事件告警规则id
         */
        this.RuleId = null;

        /**
         * 事件名称
         */
        this.EventShowName = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         */
        this.AlarmNotifyType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventId: number | null;
        RuleId: number | null;
        EventShowName: string | null;
        AlarmNotifyPeriod: number | null;
        AlarmNotifyType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EventShowName = 'EventShowName' in params ? params.EventShowName : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;

    }
}

/**
 * DescribeBaseMetrics返回参数结构体
 * @class
 */
class DescribeBaseMetricsResponse extends AbstractModel {

    MetricSet: Array<MetricSet> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 查询得到的指标描述列表
         */
        this.MetricSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MetricSet: Array<MetricSet> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.MetricSet) {
            this.MetricSet = new Array();
            for (let z in params.MetricSet) {
                let obj = new MetricSet();
                obj.deserialize(params.MetricSet[z]);
                this.MetricSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendCustomAlarmMsg返回参数结构体
 * @class
 */
class SendCustomAlarmMsgResponse extends AbstractModel {

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
 * GetMonitorData请求参数结构体
 * @class
 */
class GetMonitorDataRequest extends AbstractModel {

    Namespace: string | null
    
    MetricName: string | null
    
    Instances: Array<Instance> | null
    
    Period: number | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    constructor(){
        super();

        /**
         * 命名空间，各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
         */
        this.Namespace = null;

        /**
         * 指标名称，各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
         */
        this.MetricName = null;

        /**
         * 实例对象的维度组合
         */
        this.Instances = null;

        /**
         * 监控统计周期。默认为取值为300，单位为s
         */
        this.Period = null;

        /**
         * 起始时间，如2018-09-22T19:51:23+08:00
         */
        this.StartTime = null;

        /**
         * 结束时间，默认为当前时间。 EndTime不能小于StartTime
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Namespace: string | null;
        MetricName: string | null;
        Instances: Array<Instance> | null;
        Period: number | null;
        StartTime: string | null;
        EndTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.PeriodNum
 * @class
 */
class DescribePolicyConditionListConfigManualPeriodNum extends AbstractModel {

    Default: number | null
    
    Keys: Array<number> | null
    
    Need: boolean | null
    
    constructor(){
        super();

        /**
         * 默认周期数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Default = null;

        /**
         * 可选周期数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Keys = null;

        /**
         * 是否必须
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Default: number | null;
        Keys: Array<number> | null;
        Need: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * 查询策略绑定对象列表接口返回的对象实例信息
 * @class
 */
class DescribeBindingPolicyObjectListInstance extends AbstractModel {

    UniqueId: string | null
    
    Dimensions: string | null
    
    IsShielded: number | null
    
    Region: string | null
    
    constructor(){
        super();

        /**
         * 对象唯一id
         */
        this.UniqueId = null;

        /**
         * 表示对象实例的维度集合，jsonObj字符串
         */
        this.Dimensions = null;

        /**
         * 对象是否被屏蔽，0表示未屏蔽，1表示被屏蔽
         */
        this.IsShielded = null;

        /**
         * 对象所在的地域
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UniqueId: string | null;
        Dimensions: string | null;
        IsShielded: number | null;
        Region: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.UniqueId = 'UniqueId' in params ? params.UniqueId : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.IsShielded = 'IsShielded' in params ? params.IsShielded : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 修改告警策略组传入的指标阈值条件
 * @class
 */
class ModifyPolicyGroupCondition extends AbstractModel {

    MetricId: number | null
    
    CalcType: number | null
    
    CalcValue: string | null
    
    CalcPeriod: number | null
    
    ContinuePeriod: number | null
    
    AlarmNotifyType: number | null
    
    AlarmNotifyPeriod: number | null
    
    RuleId: number | null
    
    constructor(){
        super();

        /**
         * 指标id
         */
        this.MetricId = null;

        /**
         * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等
         */
        this.CalcType = null;

        /**
         * 检测阈值
         */
        this.CalcValue = null;

        /**
         * 检测指标的数据周期
         */
        this.CalcPeriod = null;

        /**
         * 持续周期个数
         */
        this.ContinuePeriod = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MetricId: number | null;
        CalcType: number | null;
        CalcValue: string | null;
        CalcPeriod: number | null;
        ContinuePeriod: number | null;
        AlarmNotifyType: number | null;
        AlarmNotifyPeriod: number | null;
        RuleId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MetricId = 'MetricId' in params ? params.MetricId : null;
        this.CalcType = 'CalcType' in params ? params.CalcType : null;
        this.CalcValue = 'CalcValue' in params ? params.CalcValue : null;
        this.CalcPeriod = 'CalcPeriod' in params ? params.CalcPeriod : null;
        this.ContinuePeriod = 'ContinuePeriod' in params ? params.ContinuePeriod : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 修改告警策略组传入的事件告警条件
 * @class
 */
class ModifyPolicyGroupEventCondition extends AbstractModel {

    EventId: number | null
    
    AlarmNotifyType: number | null
    
    AlarmNotifyPeriod: number | null
    
    RuleId: number | null
    
    constructor(){
        super();

        /**
         * 事件id
         */
        this.EventId = null;

        /**
         * 告警发送收敛类型。0连续告警，1指数告警
         */
        this.AlarmNotifyType = null;

        /**
         * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
         */
        this.AlarmNotifyPeriod = null;

        /**
         * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventId: number | null;
        AlarmNotifyType: number | null;
        AlarmNotifyPeriod: number | null;
        RuleId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.AlarmNotifyType = 'AlarmNotifyType' in params ? params.AlarmNotifyType : null;
        this.AlarmNotifyPeriod = 'AlarmNotifyPeriod' in params ? params.AlarmNotifyPeriod : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.ContinueTime
 * @class
 */
class DescribePolicyConditionListConfigManualContinueTime extends AbstractModel {

    Default: number | null
    
    Keys: Array<number> | null
    
    Need: boolean | null
    
    constructor(){
        super();

        /**
         * 默认持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Default = null;

        /**
         * 可选持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Keys = null;

        /**
         * 是否必须
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Default: number | null;
        Keys: Array<number> | null;
        Need: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * DescribePolicyGroupList请求参数结构体
 * @class
 */
class DescribePolicyGroupListRequest extends AbstractModel {

    Module: string | null
    
    Limit: number | null
    
    Offset: number | null
    
    Like: string | null
    
    InstanceGroupId: number | null
    
    UpdateTimeOrder: string | null
    
    ProjectIds: Array<number> | null
    
    ViewNames: Array<string> | null
    
    FilterUnuseReceiver: number | null
    
    Receivers: Array<string> | null
    
    ReceiverUserList: Array<string> | null
    
    Dimensions: string | null
    
    ConditionTempGroupId: string | null
    
    ReceiverType: string | null
    
    IsOpen: boolean | null
    
    constructor(){
        super();

        /**
         * 固定值，为"monitor"
         */
        this.Module = null;

        /**
         * 分页参数，每页返回的数量，取值1~100
         */
        this.Limit = null;

        /**
         * 分页参数，页偏移量，从0开始计数
         */
        this.Offset = null;

        /**
         * 按策略名搜索
         */
        this.Like = null;

        /**
         * 实例分组id
         */
        this.InstanceGroupId = null;

        /**
         * 按更新时间排序, asc 或者 desc
         */
        this.UpdateTimeOrder = null;

        /**
         * 项目id列表
         */
        this.ProjectIds = null;

        /**
         * 告警策略类型列表
         */
        this.ViewNames = null;

        /**
         * 是否过滤无接收人策略组, 1表示过滤, 0表示不过滤
         */
        this.FilterUnuseReceiver = null;

        /**
         * 过滤条件, 接收组列表
         */
        this.Receivers = null;

        /**
         * 过滤条件, 接收人列表
         */
        this.ReceiverUserList = null;

        /**
         * 维度组合字段(json字符串), 例如[[{"name":"unInstanceId","value":"ins-6e4b2aaa"}]]
         */
        this.Dimensions = null;

        /**
         * 模板策略组id, 多个id用逗号分隔
         */
        this.ConditionTempGroupId = null;

        /**
         * 过滤条件, 接收人或者接收组, user表示接收人, group表示接收组
         */
        this.ReceiverType = null;

        /**
         * 过滤条件，告警策略是否已启动或停止
         */
        this.IsOpen = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Limit: number | null;
        Offset: number | null;
        Like: string | null;
        InstanceGroupId: number | null;
        UpdateTimeOrder: string | null;
        ProjectIds: Array<number> | null;
        ViewNames: Array<string> | null;
        FilterUnuseReceiver: number | null;
        Receivers: Array<string> | null;
        ReceiverUserList: Array<string> | null;
        Dimensions: string | null;
        ConditionTempGroupId: string | null;
        ReceiverType: string | null;
        IsOpen: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Like = 'Like' in params ? params.Like : null;
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.UpdateTimeOrder = 'UpdateTimeOrder' in params ? params.UpdateTimeOrder : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.ViewNames = 'ViewNames' in params ? params.ViewNames : null;
        this.FilterUnuseReceiver = 'FilterUnuseReceiver' in params ? params.FilterUnuseReceiver : null;
        this.Receivers = 'Receivers' in params ? params.Receivers : null;
        this.ReceiverUserList = 'ReceiverUserList' in params ? params.ReceiverUserList : null;
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;
        this.ConditionTempGroupId = 'ConditionTempGroupId' in params ? params.ConditionTempGroupId : null;
        this.ReceiverType = 'ReceiverType' in params ? params.ReceiverType : null;
        this.IsOpen = 'IsOpen' in params ? params.IsOpen : null;

    }
}

/**
 * DescribeAccidentEventList返回参数结构体
 * @class
 */
class DescribeAccidentEventListResponse extends AbstractModel {

    Alarms: Array<DescribeAccidentEventListAlarms> | null
    
    Total: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 平台事件列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Alarms = null;

        /**
         * 平台事件的总数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Alarms: Array<DescribeAccidentEventListAlarms> | null;
        Total: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Alarms) {
            this.Alarms = new Array();
            for (let z in params.Alarms) {
                let obj = new DescribeAccidentEventListAlarms();
                obj.deserialize(params.Alarms[z]);
                this.Alarms.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductEventList返回参数结构体
 * @class
 */
class DescribeProductEventListResponse extends AbstractModel {

    Events: Array<DescribeProductEventListEvents> | null
    
    OverView: DescribeProductEventListOverView | null
    
    Total: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Events = null;

        /**
         * 事件统计
         */
        this.OverView = null;

        /**
         * 事件总数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Events: Array<DescribeProductEventListEvents> | null;
        OverView: DescribeProductEventListOverView | null;
        Total: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new DescribeProductEventListEvents();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }

        if (params.OverView) {
            let obj = new DescribeProductEventListOverView();
            obj.deserialize(params.OverView)
            this.OverView = obj;
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaseMetrics请求参数结构体
 * @class
 */
class DescribeBaseMetricsRequest extends AbstractModel {

    Namespace: string | null
    
    MetricName: string | null
    
    constructor(){
        super();

        /**
         * 业务命名空间，各个云产品的业务命名空间不同。如需获取业务命名空间，请前往各产品监控指标文档，例如云服务器的命名空间，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
         */
        this.Namespace = null;

        /**
         * 指标名，各个云产品的指标名不同。如需获取指标名，请前往各产品监控指标文档，例如云服务器的指标名，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
         */
        this.MetricName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Namespace: string | null;
        MetricName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * 实例对象的维度组合
 * @class
 */
class Dimension extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 实例维度名称
         */
        this.Name = null;

        /**
         * 实例维度值
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 监控数据点
 * @class
 */
class DataPoint extends AbstractModel {

    Dimensions: Array<Dimension> | null
    
    Timestamps: Array<number> | null
    
    Values: Array<number> | null
    
    constructor(){
        super();

        /**
         * 实例对象维度组合
         */
        this.Dimensions = null;

        /**
         * 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了
         */
        this.Timestamps = null;

        /**
         * 监控值数组，该数组和Timestamps一一对应
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Dimensions: Array<Dimension> | null;
        Timestamps: Array<number> | null;
        Values: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.Timestamps = 'Timestamps' in params ? params.Timestamps : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * UnBindingAllPolicyObject返回参数结构体
 * @class
 */
class UnBindingAllPolicyObjectResponse extends AbstractModel {

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
 * DescribePolicyConditionList.ConfigManual.StatType
 * @class
 */
class DescribePolicyConditionListConfigManualStatType extends AbstractModel {

    P5: string | null
    
    P10: string | null
    
    P60: string | null
    
    P300: string | null
    
    P600: string | null
    
    P1800: string | null
    
    P3600: string | null
    
    P86400: string | null
    
    constructor(){
        super();

        /**
         * 数据聚合方式，周期5秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P5 = null;

        /**
         * 数据聚合方式，周期10秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P10 = null;

        /**
         * 数据聚合方式，周期1分钟
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P60 = null;

        /**
         * 数据聚合方式，周期5分钟
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P300 = null;

        /**
         * 数据聚合方式，周期10分钟
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P600 = null;

        /**
         * 数据聚合方式，周期30分钟
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P1800 = null;

        /**
         * 数据聚合方式，周期1小时
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P3600 = null;

        /**
         * 数据聚合方式，周期1天
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.P86400 = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        P5: string | null;
        P10: string | null;
        P60: string | null;
        P300: string | null;
        P600: string | null;
        P1800: string | null;
        P3600: string | null;
        P86400: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.P5 = 'P5' in params ? params.P5 : null;
        this.P10 = 'P10' in params ? params.P10 : null;
        this.P60 = 'P60' in params ? params.P60 : null;
        this.P300 = 'P300' in params ? params.P300 : null;
        this.P600 = 'P600' in params ? params.P600 : null;
        this.P1800 = 'P1800' in params ? params.P1800 : null;
        this.P3600 = 'P3600' in params ? params.P3600 : null;
        this.P86400 = 'P86400' in params ? params.P86400 : null;

    }
}

/**
 * SendCustomAlarmMsg请求参数结构体
 * @class
 */
class SendCustomAlarmMsgRequest extends AbstractModel {

    Module: string | null
    
    PolicyId: string | null
    
    Msg: string | null
    
    constructor(){
        super();

        /**
         * 接口模块名，当前取值monitor
         */
        this.Module = null;

        /**
         * 消息策略ID，在云监控自定义消息页面配置
         */
        this.PolicyId = null;

        /**
         * 用户想要发送的自定义消息内容
         */
        this.Msg = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        PolicyId: string | null;
        Msg: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

    }
}

/**
 * DescribeProductEventList返回的Events的Dimensions
 * @class
 */
class DescribeProductEventListEventsDimensions extends AbstractModel {

    Key: string | null
    
    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 维度名（英文）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Key = null;

        /**
         * 维度名（中文）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;

        /**
         * 维度值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Key: string | null;
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribePolicyConditionList.ConfigManual.CalcValue
 * @class
 */
class DescribePolicyConditionListConfigManualCalcValue extends AbstractModel {

    Default: string | null
    
    Fixed: string | null
    
    Max: string | null
    
    Min: string | null
    
    Need: boolean | null
    
    constructor(){
        super();

        /**
         * 默认值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Default = null;

        /**
         * 固定值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Fixed = null;

        /**
         * 最大值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Max = null;

        /**
         * 最小值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Min = null;

        /**
         * 是否必须
         */
        this.Need = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Default: string | null;
        Fixed: string | null;
        Max: string | null;
        Min: string | null;
        Need: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Default = 'Default' in params ? params.Default : null;
        this.Fixed = 'Fixed' in params ? params.Fixed : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Need = 'Need' in params ? params.Need : null;

    }
}

/**
 * ModifyAlarmReceivers返回参数结构体
 * @class
 */
class ModifyAlarmReceiversResponse extends AbstractModel {

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
 * DescribePolicyGroupList接口策略组绑定的实例分组信息
 * @class
 */
class DescribePolicyGroupListGroupInstanceGroup extends AbstractModel {

    InstanceGroupId: number | null
    
    ViewName: string | null
    
    LastEditUin: string | null
    
    GroupName: string | null
    
    InstanceSum: number | null
    
    UpdateTime: number | null
    
    InsertTime: number | null
    
    constructor(){
        super();

        /**
         * 实例分组名称id
         */
        this.InstanceGroupId = null;

        /**
         * 策略类型视图名称
         */
        this.ViewName = null;

        /**
         * 最近编辑的用户uin
         */
        this.LastEditUin = null;

        /**
         * 实例分组名称
         */
        this.GroupName = null;

        /**
         * 实例数量
         */
        this.InstanceSum = null;

        /**
         * 更新时间
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         */
        this.InsertTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceGroupId: number | null;
        ViewName: string | null;
        LastEditUin: string | null;
        GroupName: string | null;
        InstanceSum: number | null;
        UpdateTime: number | null;
        InsertTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceGroupId = 'InstanceGroupId' in params ? params.InstanceGroupId : null;
        this.ViewName = 'ViewName' in params ? params.ViewName : null;
        this.LastEditUin = 'LastEditUin' in params ? params.LastEditUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.InstanceSum = 'InstanceSum' in params ? params.InstanceSum : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

    }
}

/**
 * BindingPolicyObject返回参数结构体
 * @class
 */
class BindingPolicyObjectResponse extends AbstractModel {

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

export const Models = {
    DescribePolicyConditionListConfigManual: DescribePolicyConditionListConfigManual,
    UnBindingPolicyObjectRequest: UnBindingPolicyObjectRequest,
    DescribePolicyConditionListRequest: DescribePolicyConditionListRequest,
    DeletePolicyGroupResponse: DeletePolicyGroupResponse,
    DescribeAccidentEventListAlarms: DescribeAccidentEventListAlarms,
    CreatePolicyGroupEventCondition: CreatePolicyGroupEventCondition,
    DescribeProductEventListRequest: DescribeProductEventListRequest,
    DescribeProductListResponse: DescribeProductListResponse,
    UnBindingAllPolicyObjectRequest: UnBindingAllPolicyObjectRequest,
    Instance: Instance,
    DescribeProductEventListEvents: DescribeProductEventListEvents,
    BindingPolicyObjectDimension: BindingPolicyObjectDimension,
    DescribePolicyConditionListMetric: DescribePolicyConditionListMetric,
    CreatePolicyGroupRequest: CreatePolicyGroupRequest,
    CreatePolicyGroupCondition: CreatePolicyGroupCondition,
    DescribePolicyGroupInfoReceiverInfo: DescribePolicyGroupInfoReceiverInfo,
    BindingPolicyObjectRequest: BindingPolicyObjectRequest,
    DescribeProductEventListEventsGroupInfo: DescribeProductEventListEventsGroupInfo,
    ModifyPolicyGroupRequest: ModifyPolicyGroupRequest,
    DescribePolicyConditionListConfigManualPeriod: DescribePolicyConditionListConfigManualPeriod,
    DescribePolicyConditionListEventMetric: DescribePolicyConditionListEventMetric,
    DescribePolicyConditionListCondition: DescribePolicyConditionListCondition,
    DescribeBasicAlarmListRequest: DescribeBasicAlarmListRequest,
    DescribePolicyGroupListResponse: DescribePolicyGroupListResponse,
    DescribePolicyGroupInfoRequest: DescribePolicyGroupInfoRequest,
    DimensionsDesc: DimensionsDesc,
    DescribePolicyGroupListGroup: DescribePolicyGroupListGroup,
    DescribeBasicAlarmListAlarms: DescribeBasicAlarmListAlarms,
    DescribeProductListRequest: DescribeProductListRequest,
    PeriodsSt: PeriodsSt,
    DescribeAccidentEventListRequest: DescribeAccidentEventListRequest,
    DescribeProductEventListOverView: DescribeProductEventListOverView,
    MetricObjectMeaning: MetricObjectMeaning,
    MetricDatum: MetricDatum,
    DeletePolicyGroupRequest: DeletePolicyGroupRequest,
    DescribePolicyGroupInfoCallback: DescribePolicyGroupInfoCallback,
    DescribeBindingPolicyObjectListInstanceGroup: DescribeBindingPolicyObjectListInstanceGroup,
    DescribePolicyConditionListResponse: DescribePolicyConditionListResponse,
    DescribePolicyConditionListConfigManualCalcType: DescribePolicyConditionListConfigManualCalcType,
    ModifyPolicyGroupResponse: ModifyPolicyGroupResponse,
    PutMonitorDataResponse: PutMonitorDataResponse,
    ReceiverInfo: ReceiverInfo,
    ModifyAlarmReceiversRequest: ModifyAlarmReceiversRequest,
    DescribeProductEventListDimensions: DescribeProductEventListDimensions,
    DescribePolicyGroupInfoResponse: DescribePolicyGroupInfoResponse,
    DescribeBasicAlarmListResponse: DescribeBasicAlarmListResponse,
    ProductSimple: ProductSimple,
    DescribeBindingPolicyObjectListDimension: DescribeBindingPolicyObjectListDimension,
    DescribePolicyGroupInfoCondition: DescribePolicyGroupInfoCondition,
    UnBindingPolicyObjectResponse: UnBindingPolicyObjectResponse,
    GetMonitorDataResponse: GetMonitorDataResponse,
    MetricSet: MetricSet,
    DescribeBindingPolicyObjectListResponse: DescribeBindingPolicyObjectListResponse,
    DescribePolicyGroupInfoConditionTpl: DescribePolicyGroupInfoConditionTpl,
    DescribeBindingPolicyObjectListRequest: DescribeBindingPolicyObjectListRequest,
    CreatePolicyGroupResponse: CreatePolicyGroupResponse,
    PutMonitorDataRequest: PutMonitorDataRequest,
    InstanceGroup: InstanceGroup,
    DescribePolicyGroupInfoEventCondition: DescribePolicyGroupInfoEventCondition,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,
    SendCustomAlarmMsgResponse: SendCustomAlarmMsgResponse,
    GetMonitorDataRequest: GetMonitorDataRequest,
    DescribePolicyConditionListConfigManualPeriodNum: DescribePolicyConditionListConfigManualPeriodNum,
    DescribeBindingPolicyObjectListInstance: DescribeBindingPolicyObjectListInstance,
    ModifyPolicyGroupCondition: ModifyPolicyGroupCondition,
    ModifyPolicyGroupEventCondition: ModifyPolicyGroupEventCondition,
    DescribePolicyConditionListConfigManualContinueTime: DescribePolicyConditionListConfigManualContinueTime,
    DescribePolicyGroupListRequest: DescribePolicyGroupListRequest,
    DescribeAccidentEventListResponse: DescribeAccidentEventListResponse,
    DescribeProductEventListResponse: DescribeProductEventListResponse,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    Dimension: Dimension,
    DataPoint: DataPoint,
    UnBindingAllPolicyObjectResponse: UnBindingAllPolicyObjectResponse,
    DescribePolicyConditionListConfigManualStatType: DescribePolicyConditionListConfigManualStatType,
    SendCustomAlarmMsgRequest: SendCustomAlarmMsgRequest,
    DescribeProductEventListEventsDimensions: DescribeProductEventListEventsDimensions,
    DescribePolicyConditionListConfigManualCalcValue: DescribePolicyConditionListConfigManualCalcValue,
    ModifyAlarmReceiversResponse: ModifyAlarmReceiversResponse,
    DescribePolicyGroupListGroupInstanceGroup: DescribePolicyGroupListGroupInstanceGroup,
    BindingPolicyObjectResponse: BindingPolicyObjectResponse,

}
