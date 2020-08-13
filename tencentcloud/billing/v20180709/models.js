"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const abstract_model_1 = require("../../common/abstract_model");
/**
 * 消耗组件明细
 * @class
 */
class CostComponentSet extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 组件类型名称
         */
        this.ComponentCodeName = null;
        /**
         * 组件名称
         */
        this.ItemCodeName = null;
        /**
         * 刊例价
         */
        this.SinglePrice = null;
        /**
         * 刊例价单位
         */
        this.PriceUnit = null;
        /**
         * 用量
         */
        this.UsedAmount = null;
        /**
         * 用量单位
         */
        this.UsedAmountUnit = null;
        /**
         * 原价
         */
        this.Cost = null;
        /**
         * 折扣
         */
        this.Discount = null;
        /**
         * 折后价
         */
        this.RealCost = null;
        /**
         * 代金券支付金额
         */
        this.VoucherPayAmount = null;
        /**
         * 现金支付金额
         */
        this.CashPayAmount = null;
        /**
         * 赠送金支付金额
         */
        this.IncentivePayAmount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentCodeName = 'ComponentCodeName' in params ? params.ComponentCodeName : null;
        this.ItemCodeName = 'ItemCodeName' in params ? params.ItemCodeName : null;
        this.SinglePrice = 'SinglePrice' in params ? params.SinglePrice : null;
        this.PriceUnit = 'PriceUnit' in params ? params.PriceUnit : null;
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedAmountUnit = 'UsedAmountUnit' in params ? params.UsedAmountUnit : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
    }
}
/**
 * DescribeCostSummaryByProduct请求参数结构体
 * @class
 */
class DescribeCostSummaryByProductRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月1号 00:00:00，且必须和EndTime为相同月份，不支持跨月查询，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月最后一天 23:59:59，且必须和BeginTime为相同月份，不支持跨月查询，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
        /**
         * 每次获取数据量
         */
        this.Limit = null;
        /**
         * 偏移量
         */
        this.Offset = null;
        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         */
        this.NeedRecordNum = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
    }
}
/**
 * DescribeCostSummaryByProject返回参数结构体
 * @class
 */
class DescribeCostSummaryByProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 消耗详情
         */
        this.Total = null;
        /**
         * 消耗按业务汇总详情
         */
        this.Data = null;
        /**
         * 记录数量，NeedRecordNum为0是返回null
         */
        this.RecordNum = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total);
            this.Total = obj;
        }
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionProjectSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDosageDetailByDate请求参数结构体
 * @class
 */
class DescribeDosageDetailByDateRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单开始日期，如 2019-01-01
         */
        this.StartDate = null;
        /**
         * 查询账单结束日期，如 2019-01-01， 时间跨度不超过7天
         */
        this.EndDate = null;
        /**
         * 互动直播：
10194   互动直播-核心机房           :
10195   互动直播-边缘机房

cdn业务：
10180：CDN静态加速流量(国内)
10181：CDN静态加速带宽(国内)
10182：CDN静态加速普通流量
10183：CDN静态加速普通带宽
10231：CDN静态加速流量(海外)
10232：CDN静态加速带宽(海外)

100967：弹性公网IP-按流量计费
101065：公网负载均衡-按流量计费

视频直播
10226 视频直播流量(国内)
10227 视频直播带宽(国内)
100763 视频直播流量(海外)
100762 视频直播宽带(海外)
         */
        this.ProductCode = null;
        /**
         * 查询域名 例如 www.qq.com
非CDN业务查询时值为空
         */
        this.Domain = null;
        /**
         * 1、如果为空，则返回EIP或CLB所有实例的明细；
2、如果传入实例名，则返回该实例明细
         */
        this.InstanceID = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
    }
}
/**
 * 按项目汇总消费详情
 * @class
 */
class ProjectSummaryOverviewItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 项目名称
         */
        this.ProjectName = null;
        /**
         * 实际花费
         */
        this.RealTotalCost = null;
        /**
         * 费用所占百分比，两位小数
         */
        this.RealTotalCostRatio = null;
        /**
         * 现金金额
         */
        this.CashPayAmount = null;
        /**
         * 赠送金金额
         */
        this.IncentivePayAmount = null;
        /**
         * 代金券金额
         */
        this.VoucherPayAmount = null;
        /**
         * 账单月份，格式2019-08
         */
        this.BillMonth = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
    }
}
/**
 * 地域过滤条件
 * @class
 */
class ConditionRegion extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 地域ID
         */
        this.RegionId = null;
        /**
         * 地域名称
         */
        this.RegionName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
    }
}
/**
 * DescribeBillSummaryByProduct请求参数结构体
 * @class
 */
class DescribeBillSummaryByProductRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * 消耗按产品汇总详情
 * @class
 */
class ConsumptionBusinessSummaryDataItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 产品码
         */
        this.BusinessCode = null;
        /**
         * 产品名称
         */
        this.BusinessCodeName = null;
        /**
         * 折后总价
         */
        this.RealTotalCost = null;
        /**
         * 费用趋势
         */
        this.Trend = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend);
            this.Trend = obj;
        }
    }
}
/**
 * 由时间和值组成的数据结构
 * @class
 */
class DetailPoint extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 时间
         */
        this.Time = null;
        /**
         * 值
         */
        this.Value = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;
    }
}
/**
 * 消耗明细数据类型
 * @class
 */
class CostDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 支付者uin
         */
        this.PayerUin = null;
        /**
         * 业务名称
         */
        this.BusinessCodeName = null;
        /**
         * 产品名称
         */
        this.ProductCodeName = null;
        /**
         * 计费模式名称
         */
        this.PayModeName = null;
        /**
         * 项目名称
         */
        this.ProjectName = null;
        /**
         * 区域名称
         */
        this.RegionName = null;
        /**
         * 地区名称
         */
        this.ZoneName = null;
        /**
         * 资源id
         */
        this.ResourceId = null;
        /**
         * 资源名称
         */
        this.ResourceName = null;
        /**
         * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActionTypeName = null;
        /**
         * 订单id
         */
        this.OrderId = null;
        /**
         * 交易id
         */
        this.BillId = null;
        /**
         * 费用开始时间
         */
        this.FeeBeginTime = null;
        /**
         * 费用结束时间
         */
        this.FeeEndTime = null;
        /**
         * 组件明细
         */
        this.ComponentSet = null;
        /**
         * 产品代码
         */
        this.ProductCode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new CostComponentSet();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
    }
}
/**
 * DescribeBillSummaryByPayMode返回参数结构体
 * @class
 */
class DescribeBillSummaryByPayModeResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 各付费模式花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SummaryOverview = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new PayModeSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 账单资源汇总数据对象
 * @class
 */
class BillResourceSummary extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
         */
        this.BusinessCodeName = null;
        /**
         * 子产品：云产品子类，如云服务器CVM-标准型S1， 当没有获取到子产品名称时，返回"-"
         */
        this.ProductCodeName = null;
        /**
         * 计费模式：包年包月和按量计费
         */
        this.PayModeName = null;
        /**
         * 项目
         */
        this.ProjectName = null;
        /**
         * 地域
         */
        this.RegionName = null;
        /**
         * 可用区
         */
        this.ZoneName = null;
        /**
         * 资源实例ID
         */
        this.ResourceId = null;
        /**
         * 资源实例名称
         */
        this.ResourceName = null;
        /**
         * 交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型
         */
        this.ActionTypeName = null;
        /**
         * 订单ID
         */
        this.OrderId = null;
        /**
         * 扣费时间
         */
        this.PayTime = null;
        /**
         * 开始使用时间
         */
        this.FeeBeginTime = null;
        /**
         * 结束使用时间
         */
        this.FeeEndTime = null;
        /**
         * 配置描述
         */
        this.ConfigDesc = null;
        /**
         * 扩展字段1
         */
        this.ExtendField1 = null;
        /**
         * 扩展字段2
         */
        this.ExtendField2 = null;
        /**
         * 原价，单位为元
         */
        this.TotalCost = null;
        /**
         * 折扣率
         */
        this.Discount = null;
        /**
         * 优惠类型
         */
        this.ReduceType = null;
        /**
         * 优惠后总价，单位为元
         */
        this.RealTotalCost = null;
        /**
         * 代金券支付金额，单位为元
         */
        this.VoucherPayAmount = null;
        /**
         * 现金账户支付金额，单位为元
         */
        this.CashPayAmount = null;
        /**
         * 赠送账户支付金额，单位为元
         */
        this.IncentivePayAmount = null;
        /**
         * 扩展字段3
         */
        this.ExtendField3 = null;
        /**
         * 扩展字段4
         */
        this.ExtendField4 = null;
        /**
         * 扩展字段5
         */
        this.ExtendField5 = null;
        /**
         * Tag 信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Tags = null;
        /**
         * 付款方uin
         */
        this.PayerUin = null;
        /**
         * 资源所有者uin,无值则返回"-"
         */
        this.OwnerUin = null;
        /**
         * 操作者uin,无值则返回"-"
         */
        this.OperateUin = null;
        /**
         * 商品名称代码
         */
        this.BusinessCode = null;
        /**
         * 子商品名称代码
         */
        this.ProductCode = null;
        /**
         * 区域ID
         */
        this.RegionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        this.ConfigDesc = 'ConfigDesc' in params ? params.ConfigDesc : null;
        this.ExtendField1 = 'ExtendField1' in params ? params.ExtendField1 : null;
        this.ExtendField2 = 'ExtendField2' in params ? params.ExtendField2 : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.ExtendField3 = 'ExtendField3' in params ? params.ExtendField3 : null;
        this.ExtendField4 = 'ExtendField4' in params ? params.ExtendField4 : null;
        this.ExtendField5 = 'ExtendField5' in params ? params.ExtendField5 : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
    }
}
/**
 * DescribeBillSummaryByTag请求参数结构体
 * @class
 */
class DescribeBillSummaryByTagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
        /**
         * 分账标签键
         */
        this.TagKey = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
    }
}
/**
 * 账单筛选条件对象
 * @class
 */
class Conditions extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 只支持6和12两个值
         */
        this.TimeRange = null;
        /**
         * 产品编码
         */
        this.BusinessCode = null;
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 地域ID
         */
        this.RegionId = null;
        /**
         * 付费模式，可选prePay和postPay
         */
        this.PayMode = null;
        /**
         * 资源关键字
         */
        this.ResourceKeyword = null;
        /**
         * 产品编码
         */
        this.BusinessCodes = null;
        /**
         * 子产品编码
         */
        this.ProductCodes = null;
        /**
         * 地域ID
         */
        this.RegionIds = null;
        /**
         * 项目ID
         */
        this.ProjectIds = null;
        /**
         * 付费模式，可选prePay和postPay
         */
        this.PayModes = null;
        /**
         * 交易类型
         */
        this.ActionTypes = null;
        /**
         * 是否隐藏0元流水
         */
        this.HideFreeCost = null;
        /**
         * 排序规则，可选desc和asc
         */
        this.OrderByCost = null;
        /**
         * 交易ID
         */
        this.BillIds = null;
        /**
         * 组件编码
         */
        this.ComponentCodes = null;
        /**
         * 文件ID
         */
        this.FileIds = null;
        /**
         * 文件类型
         */
        this.FileTypes = null;
        /**
         * 状态
         */
        this.Status = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRange = 'TimeRange' in params ? params.TimeRange : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceKeyword = 'ResourceKeyword' in params ? params.ResourceKeyword : null;
        this.BusinessCodes = 'BusinessCodes' in params ? params.BusinessCodes : null;
        this.ProductCodes = 'ProductCodes' in params ? params.ProductCodes : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.PayModes = 'PayModes' in params ? params.PayModes : null;
        this.ActionTypes = 'ActionTypes' in params ? params.ActionTypes : null;
        this.HideFreeCost = 'HideFreeCost' in params ? params.HideFreeCost : null;
        this.OrderByCost = 'OrderByCost' in params ? params.OrderByCost : null;
        this.BillIds = 'BillIds' in params ? params.BillIds : null;
        this.ComponentCodes = 'ComponentCodes' in params ? params.ComponentCodes : null;
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.FileTypes = 'FileTypes' in params ? params.FileTypes : null;
        this.Status = 'Status' in params ? params.Status : null;
    }
}
/**
 * DescribeBillSummaryByProduct返回参数结构体
 * @class
 */
class DescribeBillSummaryByProductResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 总花费详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SummaryTotal = null;
        /**
         * 各产品花费分布
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SummaryOverview = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.SummaryTotal) {
            let obj = new BusinessSummaryTotal();
            obj.deserialize(params.SummaryTotal);
            this.SummaryTotal = obj;
        }
        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new BusinessSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 账单 Tag 信息
 * @class
 */
class BillTagInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 分账标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
    }
}
/**
 * DescribeBillSummaryByRegion返回参数结构体
 * @class
 */
class DescribeBillSummaryByRegionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 各地域花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SummaryOverview = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new RegionSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 由域名和使用明细组成的数据结构
 * @class
 */
class DetailSet extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 域名
         */
        this.Domain = null;
        /**
         * 使用数据明细
         */
        this.DetailPoints = null;
        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceID = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        if (params.DetailPoints) {
            this.DetailPoints = new Array();
            for (let z in params.DetailPoints) {
                let obj = new DetailPoint();
                obj.deserialize(params.DetailPoints[z]);
                this.DetailPoints.push(obj);
            }
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
    }
}
/**
 * 收支明细的流水信息
 * @class
 */
class BillTransactionInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 收支类型：deduct 扣费, recharge 充值, return 退费， block 冻结, unblock 解冻
         */
        this.ActionType = null;
        /**
         * 流水金额，单位（分）；正数表示入账，负数表示出账
         */
        this.Amount = null;
        /**
         * 可用余额，单位（分）；正数表示入账，负数表示出账
         */
        this.Balance = null;
        /**
         * 流水号，如20190131020000236005203583326401
         */
        this.BillId = null;
        /**
         * 描述信息
         */
        this.OperationInfo = null;
        /**
         * 操作时间"2019-01-31 23:35:10.000"
         */
        this.OperationTime = null;
        /**
         * 现金账户余额，单位（分）
         */
        this.Cash = null;
        /**
         * 赠送金余额，单位（分）
         */
        this.Incentive = null;
        /**
         * 冻结余额，单位（分）
         */
        this.Freezing = null;
        /**
         * 交易渠道
         */
        this.PayChannel = null;
        /**
         * 扣费模式：trade 包年包月(预付费)，hourh  按量-小时结，hourd 按量-日结，hourm 按量-月结，month 按量-月结
         */
        this.DeductMode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.OperationInfo = 'OperationInfo' in params ? params.OperationInfo : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;
        this.Cash = 'Cash' in params ? params.Cash : null;
        this.Incentive = 'Incentive' in params ? params.Incentive : null;
        this.Freezing = 'Freezing' in params ? params.Freezing : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.DeductMode = 'DeductMode' in params ? params.DeductMode : null;
    }
}
/**
 * 按地域汇总消费详情
 * @class
 */
class RegionSummaryOverviewItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RegionId = null;
        /**
         * 地域名称
         */
        this.RegionName = null;
        /**
         * 实际花费
         */
        this.RealTotalCost = null;
        /**
         * 费用所占百分比，两位小数
         */
        this.RealTotalCostRatio = null;
        /**
         * 现金金额
         */
        this.CashPayAmount = null;
        /**
         * 赠送金金额
         */
        this.IncentivePayAmount = null;
        /**
         * 代金券金额
         */
        this.VoucherPayAmount = null;
        /**
         * 账单月份，格式2019-08
         */
        this.BillMonth = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
    }
}
/**
 * 消耗按资源汇总详情
 * @class
 */
class ConsumptionResourceSummaryDataItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源ID
         */
        this.ResourceId = null;
        /**
         * 资源名称
         */
        this.ResourceName = null;
        /**
         * 折后总价
         */
        this.RealTotalCost = null;
        /**
         * 现金花费
         */
        this.CashPayAmount = null;
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 项目名称
         */
        this.ProjectName = null;
        /**
         * 地域ID
         */
        this.RegionId = null;
        /**
         * 地域名称
         */
        this.RegionName = null;
        /**
         * 付费模式
         */
        this.PayMode = null;
        /**
         * 付费模式名称
         */
        this.PayModeName = null;
        /**
         * 产品码
         */
        this.BusinessCode = null;
        /**
         * 产品名称
         */
        this.BusinessCodeName = null;
        /**
         * 消耗类型
         */
        this.ConsumptionTypeName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ConsumptionTypeName = 'ConsumptionTypeName' in params ? params.ConsumptionTypeName : null;
    }
}
/**
 * DescribeAccountBalance请求参数结构体
 * @class
 */
class DescribeAccountBalanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
    }
}
/**
 * DescribeBillDetail请求参数结构体
 * @class
 */
class DescribeBillDetailRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 偏移量
         */
        this.Offset = null;
        /**
         * 数量，最大值为100
         */
        this.Limit = null;
        /**
         * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
         */
        this.PeriodType = null;
        /**
         * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
         */
        this.Month = null;
        /**
         * 周期开始时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。(不支持跨月查询)
         */
        this.BeginTime = null;
        /**
         * 周期结束时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。（不支持跨月查询）
         */
        this.EndTime = null;
        /**
         * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
         */
        this.NeedRecordNum = null;
        /**
         * 查询指定产品信息（暂时未开放获取）
         */
        this.ProductCode = null;
        /**
         * 付费模式 prePay/postPay
         */
        this.PayMode = null;
        /**
         * 查询指定资源信息
         */
        this.ResourceId = null;
        /**
         * 查询交易类型。如 按量计费日结，按量计费小时结 等
         */
        this.ActionType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
    }
}
/**
 * 消耗按项目汇总详情
 * @class
 */
class ConsumptionProjectSummaryDataItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 项目名称
         */
        this.ProjectName = null;
        /**
         * 折后总价
         */
        this.RealTotalCost = null;
        /**
         * 趋势
         */
        this.Trend = null;
        /**
         * 产品消耗详情
         */
        this.Business = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend);
            this.Trend = obj;
        }
        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }
    }
}
/**
 * DescribeCostSummaryByProduct返回参数结构体
 * @class
 */
class DescribeCostSummaryByProductResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 消耗详情
         */
        this.Total = null;
        /**
         * 消耗按产品汇总详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Data = null;
        /**
         * 记录数量，NeedRecordNum为0是返回null
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RecordNum = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total);
            this.Total = obj;
        }
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 商品详细信息
 * @class
 */
class ProductInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 商品详情名称标识
         */
        this.Name = null;
        /**
         * 商品详情
         */
        this.Value = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
    }
}
/**
 * DescribeDosageDetailByDate返回参数结构体
 * @class
 */
class DescribeDosageDetailByDateResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 计量单位
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Unit = null;
        /**
         * 用量数组
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DetailSets = null;
        /**
         * 错误码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RetCode = null;
        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RetMsg = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Unit = 'Unit' in params ? params.Unit : null;
        if (params.DetailSets) {
            this.DetailSets = new Array();
            for (let z in params.DetailSets) {
                let obj = new DetailSet();
                obj.deserialize(params.DetailSets[z]);
                this.DetailSets.push(obj);
            }
        }
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeBillList返回参数结构体
 * @class
 */
class DescribeBillListResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 收支明细列表
         */
        this.TransactionList = null;
        /**
         * 总条数
         */
        this.Total = null;
        /**
         * 退费总额，单位（分）
         */
        this.ReturnAmount = null;
        /**
         * 充值总额，单位（分）
         */
        this.RechargeAmount = null;
        /**
         * 冻结总额，单位（分）
         */
        this.BlockAmount = null;
        /**
         * 解冻总额，单位（分）
         */
        this.UnblockAmount = null;
        /**
         * 扣费总额，单位（分）
         */
        this.DeductAmount = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.TransactionList) {
            this.TransactionList = new Array();
            for (let z in params.TransactionList) {
                let obj = new BillTransactionInfo();
                obj.deserialize(params.TransactionList[z]);
                this.TransactionList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.ReturnAmount = 'ReturnAmount' in params ? params.ReturnAmount : null;
        this.RechargeAmount = 'RechargeAmount' in params ? params.RechargeAmount : null;
        this.BlockAmount = 'BlockAmount' in params ? params.BlockAmount : null;
        this.UnblockAmount = 'UnblockAmount' in params ? params.UnblockAmount : null;
        this.DeductAmount = 'DeductAmount' in params ? params.DeductAmount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeAccountBalance返回参数结构体
 * @class
 */
class DescribeAccountBalanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 云账户信息中的”展示可用余额”字段，单位为"分"
         */
        this.Balance = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeCostSummaryByRegion请求参数结构体
 * @class
 */
class DescribeCostSummaryByRegionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月1号 00:00:00，且必须和EndTime为相同月份，不支持跨月查询，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月最后一天 23:59:59，且必须和BeginTime为相同月份，不支持跨月查询，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
        /**
         * 每次获取数据量
         */
        this.Limit = null;
        /**
         * 偏移量
         */
        this.Offset = null;
        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         */
        this.NeedRecordNum = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
    }
}
/**
 * 按产品汇总产品详情
 * @class
 */
class BusinessSummaryOverviewItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 产品码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BusinessCode = null;
        /**
         * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
         */
        this.BusinessCodeName = null;
        /**
         * 实际花费
         */
        this.RealTotalCost = null;
        /**
         * 费用所占百分比，两位小数
         */
        this.RealTotalCostRatio = null;
        /**
         * 现金金额
         */
        this.CashPayAmount = null;
        /**
         * 赠送金金额
         */
        this.IncentivePayAmount = null;
        /**
         * 代金券金额
         */
        this.VoucherPayAmount = null;
        /**
         * 账单月份，格式2019-08
         */
        this.BillMonth = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
    }
}
/**
 * 账单明细组件对象
 * @class
 */
class BillDetailComponent extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 组件类型:资源组件类型的名称，如内存、硬盘等
         */
        this.ComponentCodeName = null;
        /**
         * 组件名称:资源组件的名称，如云数据库MySQL-内存等
         */
        this.ItemCodeName = null;
        /**
         * 组件刊例价:资源组件的原始价格，保持原始粒度
         */
        this.SinglePrice = null;
        /**
         * 组件指定价
         */
        this.SpecifiedPrice = null;
        /**
         * 价格单位
         */
        this.PriceUnit = null;
        /**
         * 组件用量
         */
        this.UsedAmount = null;
        /**
         * 组件用量单位
         */
        this.UsedAmountUnit = null;
        /**
         * 使用时长
         */
        this.TimeSpan = null;
        /**
         * 时长单位
         */
        this.TimeUnitName = null;
        /**
         * 组件原价
         */
        this.Cost = null;
        /**
         * 折扣率
         */
        this.Discount = null;
        /**
         * 优惠类型
         */
        this.ReduceType = null;
        /**
         * 优惠后总价
         */
        this.RealCost = null;
        /**
         * 代金券支付金额
         */
        this.VoucherPayAmount = null;
        /**
         * 现金支付金额
         */
        this.CashPayAmount = null;
        /**
         * 赠送账户支付金额
         */
        this.IncentivePayAmount = null;
        /**
         * 组件类型代码（未开放的字段）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ItemCode = null;
        /**
         * 组件名称代码（未开放的字段）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ComponentCode = null;
        /**
         * 合同价
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ContractPrice = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentCodeName = 'ComponentCodeName' in params ? params.ComponentCodeName : null;
        this.ItemCodeName = 'ItemCodeName' in params ? params.ItemCodeName : null;
        this.SinglePrice = 'SinglePrice' in params ? params.SinglePrice : null;
        this.SpecifiedPrice = 'SpecifiedPrice' in params ? params.SpecifiedPrice : null;
        this.PriceUnit = 'PriceUnit' in params ? params.PriceUnit : null;
        this.UsedAmount = 'UsedAmount' in params ? params.UsedAmount : null;
        this.UsedAmountUnit = 'UsedAmountUnit' in params ? params.UsedAmountUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnitName = 'TimeUnitName' in params ? params.TimeUnitName : null;
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.ReduceType = 'ReduceType' in params ? params.ReduceType : null;
        this.RealCost = 'RealCost' in params ? params.RealCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.ItemCode = 'ItemCode' in params ? params.ItemCode : null;
        this.ComponentCode = 'ComponentCode' in params ? params.ComponentCode : null;
        this.ContractPrice = 'ContractPrice' in params ? params.ContractPrice : null;
    }
}
/**
 * 消耗费用趋势
 * @class
 */
class ConsumptionSummaryTrend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 趋势类型，upward上升/downward下降/none无
         */
        this.Type = null;
        /**
         * 趋势值，Type为none是该字段值为null
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Value = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;
    }
}
/**
 * DescribeBillSummaryByRegion请求参数结构体
 * @class
 */
class DescribeBillSummaryByRegionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * DescribeBillSummaryByPayMode请求参数结构体
 * @class
 */
class DescribeBillSummaryByPayModeRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * DescribeCostSummaryByProject请求参数结构体
 * @class
 */
class DescribeCostSummaryByProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月1号 00:00:00，且必须和EndTime为相同月份，不支持跨月查询，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月最后一天 23:59:59，且必须和BeginTime为相同月份，不支持跨月查询，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
        /**
         * 每次获取数据量
         */
        this.Limit = null;
        /**
         * 偏移量
         */
        this.Offset = null;
        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         */
        this.NeedRecordNum = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
    }
}
/**
 * 消耗按地域汇总详情
 * @class
 */
class ConsumptionRegionSummaryDataItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 地域ID
         */
        this.RegionId = null;
        /**
         * 地域名称
         */
        this.RegionName = null;
        /**
         * 折后总价
         */
        this.RealTotalCost = null;
        /**
         * 趋势
         */
        this.Trend = null;
        /**
         * 产品消费详情
         */
        this.Business = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        if (params.Trend) {
            let obj = new ConsumptionSummaryTrend();
            obj.deserialize(params.Trend);
            this.Trend = obj;
        }
        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConsumptionBusinessSummaryDataItem();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }
    }
}
/**
 * DescribeBillResourceSummary返回参数结构体
 * @class
 */
class DescribeBillResourceSummaryResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源汇总列表
         */
        this.ResourceSummarySet = null;
        /**
         * 资源汇总列表总数
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.ResourceSummarySet) {
            this.ResourceSummarySet = new Array();
            for (let z in params.ResourceSummarySet) {
                let obj = new BillResourceSummary();
                obj.deserialize(params.ResourceSummarySet[z]);
                this.ResourceSummarySet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 按交易类型汇总消费详情
 * @class
 */
class ActionSummaryOverviewItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型
         */
        this.ActionType = null;
        /**
         * 交易类型名称
         */
        this.ActionTypeName = null;
        /**
         * 实际花费
         */
        this.RealTotalCost = null;
        /**
         * 费用所占百分比，两位小数
         */
        this.RealTotalCostRatio = null;
        /**
         * 现金金额
         */
        this.CashPayAmount = null;
        /**
         * 赠送金金额
         */
        this.IncentivePayAmount = null;
        /**
         * 代金券金额
         */
        this.VoucherPayAmount = null;
        /**
         * 账单月份，格式2019-08
         */
        this.BillMonth = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.BillMonth = 'BillMonth' in params ? params.BillMonth : null;
    }
}
/**
 * 付费模式过滤条件
 * @class
 */
class ConditionPayMode extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 付费模式
         */
        this.PayMode = null;
        /**
         * 付费模式名称
         */
        this.PayModeName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
    }
}
/**
 * DescribeDealsByCond请求参数结构体
 * @class
 */
class DescribeDealsByCondRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 开始时间
         */
        this.StartTime = null;
        /**
         * 结束时间
         */
        this.EndTime = null;
        /**
         * 一页多少条数据，默认是20条，最大不超过1000
         */
        this.Limit = null;
        /**
         * 第多少页，从0开始，默认是0
         */
        this.Offset = null;
        /**
         * 订单状态,默认为4（成功的订单）
订单的状态
1：未支付
2：已支付3：发货中
4：已发货
5：发货失败
6：已退款
7：已关单
8：订单过期
9：订单已失效
10：产品已失效
11：代付拒绝
12：支付中
         */
        this.Status = null;
        /**
         * 订单号
         */
        this.OrderId = null;
        /**
         * 大订单号
         */
        this.BigDealId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
    }
}
/**
 * DescribeBillResourceSummary请求参数结构体
 * @class
 */
class DescribeBillResourceSummaryRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 偏移量
         */
        this.Offset = null;
        /**
         * 数量，最大值为1000
         */
        this.Limit = null;
        /**
         * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
         */
        this.PeriodType = null;
        /**
         * 月份，格式为yyyy-mm。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
         */
        this.Month = null;
        /**
         * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
         */
        this.NeedRecordNum = null;
        /**
         * 查询交易类型。如 按量计费日结，按量计费小时结 等
         */
        this.ActionType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PeriodType = 'PeriodType' in params ? params.PeriodType : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
    }
}
/**
 * DescribeBillList请求参数结构体
 * @class
 */
class DescribeBillListRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询范围的起始时间（包含）
         */
        this.StartTime = null;
        /**
         * 查询范围的结束时间（包含）
         */
        this.EndTime = null;
        /**
         * 翻页偏移量，初始值为0
         */
        this.Offset = null;
        /**
         * 每页的限制数量
         */
        this.Limit = null;
        /**
         * 交易类型： all所有交易类型，recharge充值，return退款，unblock解冻，agentin资金转入，advanced垫付，cash提现，deduct扣费，block冻结，agentout资金转出，repay垫付回款，repayment还款(仅国际信用账户)，adj_refund调增(仅国际信用账户)，adj_deduct调减(仅国际信用账户)
         */
        this.PayType = null;
        /**
         * 扣费模式，当所选的交易类型中包含扣费deduct时有意义： all所有扣费类型，trade预付费支付，hour_h按量小时结，hour_d按量日结，hour_m按量月结，decompensate调账扣费，other其他扣费
         */
        this.SubPayType = null;
        /**
         * 是否返回0元交易金额的交易项，取值：0-不返回，1-返回。不传该参数则不返回
         */
        this.WithZeroAmount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.SubPayType = 'SubPayType' in params ? params.SubPayType : null;
        this.WithZeroAmount = 'WithZeroAmount' in params ? params.WithZeroAmount : null;
    }
}
/**
 * PayDeals返回参数结构体
 * @class
 */
class PayDealsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 此次操作支付成功的子订单号数组
         */
        this.OrderIds = null;
        /**
         * 此次操作支付成功的资源Id数组
         */
        this.ResourceIds = null;
        /**
         * 此次操作支付成功的大订单号数组
         */
        this.BigDealIds = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIds = 'OrderIds' in params ? params.OrderIds : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 账单明细数据对象
 * @class
 */
class BillDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
         */
        this.BusinessCodeName = null;
        /**
         * 子产品名称：云产品子类，如云服务器CVM-标准型S1
         */
        this.ProductCodeName = null;
        /**
         * 计费模式：包年包月和按量计费
         */
        this.PayModeName = null;
        /**
         * 项目:资源所属项目
         */
        this.ProjectName = null;
        /**
         * 区域：资源所属地域，如华南地区（广州）
         */
        this.RegionName = null;
        /**
         * 可用区：资源所属可用区，如广州三区
         */
        this.ZoneName = null;
        /**
         * 资源实例ID
         */
        this.ResourceId = null;
        /**
         * 实例名称
         */
        this.ResourceName = null;
        /**
         * 交易类型
         */
        this.ActionTypeName = null;
        /**
         * 订单ID
         */
        this.OrderId = null;
        /**
         * 交易ID
         */
        this.BillId = null;
        /**
         * 扣费时间
         */
        this.PayTime = null;
        /**
         * 开始使用时间
         */
        this.FeeBeginTime = null;
        /**
         * 结束使用时间
         */
        this.FeeEndTime = null;
        /**
         * 组件列表
         */
        this.ComponentSet = null;
        /**
         * 支付者UIN
         */
        this.PayerUin = null;
        /**
         * 使用者UIN
         */
        this.OwnerUin = null;
        /**
         * 操作者UIN
         */
        this.OperateUin = null;
        /**
         * Tag 信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Tags = null;
        /**
         * 商品名称代码（未开放的字段）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BusinessCode = null;
        /**
         * 子商品名称代码 （未开放的字段）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductCode = null;
        /**
         * 交易类型代码（未开放的字段）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActionType = null;
        /**
         * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RegionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
        this.ProductCodeName = 'ProductCodeName' in params ? params.ProductCodeName : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ActionTypeName = 'ActionTypeName' in params ? params.ActionTypeName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.FeeBeginTime = 'FeeBeginTime' in params ? params.FeeBeginTime : null;
        this.FeeEndTime = 'FeeEndTime' in params ? params.FeeEndTime : null;
        if (params.ComponentSet) {
            this.ComponentSet = new Array();
            for (let z in params.ComponentSet) {
                let obj = new BillDetailComponent();
                obj.deserialize(params.ComponentSet[z]);
                this.ComponentSet.push(obj);
            }
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new BillTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
    }
}
/**
 * DescribeBillSummaryByTag返回参数结构体
 * @class
 */
class DescribeBillSummaryByTagResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 各标签值花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SummaryOverview = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new TagSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 按标签汇总消费详情
 * @class
 */
class TagSummaryOverviewItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagValue = null;
        /**
         * 实际花费
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RealTotalCost = null;
        /**
         * 费用所占百分比，两位小数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RealTotalCostRatio = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
    }
}
/**
 * DescribeCostSummaryByResource返回参数结构体
 * @class
 */
class DescribeCostSummaryByResourceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 消耗详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Total = null;
        /**
         * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ConditionValue = null;
        /**
         * 记录数量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RecordNum = null;
        /**
         * 资源消耗详情
注意：此字段可能返回 null，表示取不到有效值。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total);
            this.Total = obj;
        }
        if (params.ConditionValue) {
            let obj = new ConsumptionResourceSummaryConditionValue();
            obj.deserialize(params.ConditionValue);
            this.ConditionValue = obj;
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionResourceSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeBillDetail返回参数结构体
 * @class
 */
class DescribeBillDetailResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 详情列表
         */
        this.DetailSet = null;
        /**
         * 总记录数
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new BillDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 消耗按资源汇总过滤条件
 * @class
 */
class ConsumptionResourceSummaryConditionValue extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 产品列表
         */
        this.Business = null;
        /**
         * 项目列表
         */
        this.Project = null;
        /**
         * 地域列表
         */
        this.Region = null;
        /**
         * 付费模式列表
         */
        this.PayMode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Business) {
            this.Business = new Array();
            for (let z in params.Business) {
                let obj = new ConditionBusiness();
                obj.deserialize(params.Business[z]);
                this.Business.push(obj);
            }
        }
        if (params.Project) {
            this.Project = new Array();
            for (let z in params.Project) {
                let obj = new ConditionProject();
                obj.deserialize(params.Project[z]);
                this.Project.push(obj);
            }
        }
        if (params.Region) {
            this.Region = new Array();
            for (let z in params.Region) {
                let obj = new ConditionRegion();
                obj.deserialize(params.Region[z]);
                this.Region.push(obj);
            }
        }
        if (params.PayMode) {
            this.PayMode = new Array();
            for (let z in params.PayMode) {
                let obj = new ConditionPayMode();
                obj.deserialize(params.PayMode[z]);
                this.PayMode.push(obj);
            }
        }
    }
}
/**
 * 订单数据对象
 * @class
 */
class Deal extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 订单号
         */
        this.OrderId = null;
        /**
         * 订单状态
         */
        this.Status = null;
        /**
         * 支付者
         */
        this.Payer = null;
        /**
         * 创建时间
         */
        this.CreateTime = null;
        /**
         * 创建人
         */
        this.Creator = null;
        /**
         * 实际支付金额（分）
         */
        this.RealTotalCost = null;
        /**
         * 代金券抵扣金额（分）
         */
        this.VoucherDecline = null;
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 产品分类ID
         */
        this.GoodsCategoryId = null;
        /**
         * 产品详情
         */
        this.ProductInfo = null;
        /**
         * 时长
         */
        this.TimeSpan = null;
        /**
         * 时间单位
         */
        this.TimeUnit = null;
        /**
         * 货币单位
         */
        this.Currency = null;
        /**
         * 折扣率
         */
        this.Policy = null;
        /**
         * 单价（分）
         */
        this.Price = null;
        /**
         * 原价（分）
         */
        this.TotalCost = null;
        /**
         * 产品编码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductCode = null;
        /**
         * 子产品编码
         */
        this.SubProductCode = null;
        /**
         * 大订单号
         */
        this.BigDealId = null;
        /**
         * 退费公式
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Formula = null;
        /**
         * 退费涉及订单信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RefReturnDeals = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Payer = 'Payer' in params ? params.Payer : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Creator = 'Creator' in params ? params.Creator : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherDecline = 'VoucherDecline' in params ? params.VoucherDecline : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsCategoryId = 'GoodsCategoryId' in params ? params.GoodsCategoryId : null;
        if (params.ProductInfo) {
            this.ProductInfo = new Array();
            for (let z in params.ProductInfo) {
                let obj = new ProductInfo();
                obj.deserialize(params.ProductInfo[z]);
                this.ProductInfo.push(obj);
            }
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.SubProductCode = 'SubProductCode' in params ? params.SubProductCode : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.Formula = 'Formula' in params ? params.Formula : null;
        this.RefReturnDeals = 'RefReturnDeals' in params ? params.RefReturnDeals : null;
    }
}
/**
 * DescribeCostDetail请求参数结构体
 * @class
 */
class DescribeCostDetailRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数量，最大值为100
         */
        this.Limit = null;
        /**
         * 偏移量
         */
        this.Offset = null;
        /**
         * 周期开始时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通成本分析的月份，最多可拉取24个月内的数据。
         */
        this.BeginTime = null;
        /**
         * 周期结束时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通成本分析的月份，最多可拉取24个月内的数据。
         */
        this.EndTime = null;
        /**
         * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
         */
        this.NeedRecordNum = null;
        /**
         * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通成本分析的月份，最多可拉取24个月内的数据。
         */
        this.Month = null;
        /**
         * 查询指定产品信息
         */
        this.ProductCode = null;
        /**
         * 付费模式 prePay/postPay
         */
        this.PayMode = null;
        /**
         * 查询指定资源信息
         */
        this.ResourceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.Month = 'Month' in params ? params.Month : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
    }
}
/**
 * DescribeDealsByCond返回参数结构体
 * @class
 */
class DescribeDealsByCondResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 订单列表
         */
        this.Deals = null;
        /**
         * 订单总数
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new Deal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 项目过滤条件
 * @class
 */
class ConditionProject extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 项目名称
         */
        this.ProjectName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
    }
}
/**
 * 消耗汇总详情
 * @class
 */
class ConsumptionSummaryTotal extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 折后总价
         */
        this.RealTotalCost = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
    }
}
/**
 * DescribeBillSummaryByProject请求参数结构体
 * @class
 */
class DescribeBillSummaryByProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月开始，且必须和EndTime为相同月份，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月结束，且必须和BeginTime为相同月份，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * DescribeBillSummaryByProject返回参数结构体
 * @class
 */
class DescribeBillSummaryByProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 各项目花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SummaryOverview = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.SummaryOverview) {
            this.SummaryOverview = new Array();
            for (let z in params.SummaryOverview) {
                let obj = new ProjectSummaryOverviewItem();
                obj.deserialize(params.SummaryOverview[z]);
                this.SummaryOverview.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 产品过滤条件
 * @class
 */
class ConditionBusiness extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 产品码
         */
        this.BusinessCode = null;
        /**
         * 产品名称
         */
        this.BusinessCodeName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.BusinessCodeName = 'BusinessCodeName' in params ? params.BusinessCodeName : null;
    }
}
/**
 * DescribeCostSummaryByResource请求参数结构体
 * @class
 */
class DescribeCostSummaryByResourceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询账单数据的用户UIN
         */
        this.PayerUin = null;
        /**
         * 目前只支持传当月1号 00:00:00，且必须和EndTime为相同月份，不支持跨月查询，例 2018-09-01 00:00:00
         */
        this.BeginTime = null;
        /**
         * 目前只支持传当月最后一天 23:59:59，且必须和BeginTime为相同月份，不支持跨月查询，例 2018-09-30 23:59:59
         */
        this.EndTime = null;
        /**
         * 每次获取数据量
         */
        this.Limit = null;
        /**
         * 偏移量
         */
        this.Offset = null;
        /**
         * 是否需要返回记录数量，0不需要，1需要，默认不需要
         */
        this.NeedRecordNum = null;
        /**
         * 是否需要返回过滤条件，0不需要，1需要，默认不需要
         */
        this.NeedConditionValue = null;
        /**
         * 过滤条件，只支持ResourceKeyword(资源关键字，支持资源id及资源名称模糊查询)，ProjectIds（项目id），RegionIds(地域id)，PayModes(付费模式，可选prePay和postPay)，HideFreeCost（是否隐藏0元流水，可选0和1），OrderByCost（按费用排序规则，可选desc和asc）
         */
        this.Conditions = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerUin = 'PayerUin' in params ? params.PayerUin : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.NeedRecordNum = 'NeedRecordNum' in params ? params.NeedRecordNum : null;
        this.NeedConditionValue = 'NeedConditionValue' in params ? params.NeedConditionValue : null;
        if (params.Conditions) {
            let obj = new Conditions();
            obj.deserialize(params.Conditions);
            this.Conditions = obj;
        }
    }
}
/**
 * DescribeCostDetail返回参数结构体
 * @class
 */
class DescribeCostDetailResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 消耗明细
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DetailSet = null;
        /**
         * 记录数
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new CostDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * PayDeals请求参数结构体
 * @class
 */
class PayDealsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 需要支付的一个或者多个子订单号，与BigDealIds字段两者必须且仅传一个参数
         */
        this.OrderIds = null;
        /**
         * 是否自动使用代金券,1:是,0否,默认0
         */
        this.AutoVoucher = null;
        /**
         * 代金券ID列表,目前仅支持指定一张代金券
         */
        this.VoucherIds = null;
        /**
         * 需要支付的一个或者多个大订单号，与OrderIds字段两者必须且仅传一个参数
         */
        this.BigDealIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderIds = 'OrderIds' in params ? params.OrderIds : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.BigDealIds = 'BigDealIds' in params ? params.BigDealIds : null;
    }
}
/**
 * 按付费模式汇总消费详情
 * @class
 */
class PayModeSummaryOverviewItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 付费模式
         */
        this.PayMode = null;
        /**
         * 付费模式名称
         */
        this.PayModeName = null;
        /**
         * 实际花费
         */
        this.RealTotalCost = null;
        /**
         * 费用所占百分比，两位小数
         */
        this.RealTotalCostRatio = null;
        /**
         * 按交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型汇总消费详情
         */
        this.Detail = null;
        /**
         * 现金金额
         */
        this.CashPayAmount = null;
        /**
         * 赠送金金额
         */
        this.IncentivePayAmount = null;
        /**
         * 代金券金额
         */
        this.VoucherPayAmount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.PayModeName = 'PayModeName' in params ? params.PayModeName : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RealTotalCostRatio = 'RealTotalCostRatio' in params ? params.RealTotalCostRatio : null;
        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ActionSummaryOverviewItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
    }
}
/**
 * 按产品汇总总费用
 * @class
 */
class BusinessSummaryTotal extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总花费
         */
        this.RealTotalCost = null;
        /**
         * 代金券金额
         */
        this.VoucherPayAmount = null;
        /**
         * 赠送金金额
         */
        this.IncentivePayAmount = null;
        /**
         * 现金金额
         */
        this.CashPayAmount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.VoucherPayAmount = 'VoucherPayAmount' in params ? params.VoucherPayAmount : null;
        this.IncentivePayAmount = 'IncentivePayAmount' in params ? params.IncentivePayAmount : null;
        this.CashPayAmount = 'CashPayAmount' in params ? params.CashPayAmount : null;
    }
}
/**
 * DescribeCostSummaryByRegion返回参数结构体
 * @class
 */
class DescribeCostSummaryByRegionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据是否准备好，0未准备好，1准备好
         */
        this.Ready = null;
        /**
         * 消耗详情
         */
        this.Total = null;
        /**
         * 消耗按地域汇总详情
         */
        this.Data = null;
        /**
         * 记录数量，NeedRecordNum为0是返回null
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RecordNum = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ready = 'Ready' in params ? params.Ready : null;
        if (params.Total) {
            let obj = new ConsumptionSummaryTotal();
            obj.deserialize(params.Total);
            this.Total = obj;
        }
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ConsumptionRegionSummaryDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RecordNum = 'RecordNum' in params ? params.RecordNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
exports.Models = {
    CostComponentSet: CostComponentSet,
    DescribeCostSummaryByProductRequest: DescribeCostSummaryByProductRequest,
    DescribeCostSummaryByProjectResponse: DescribeCostSummaryByProjectResponse,
    DescribeDosageDetailByDateRequest: DescribeDosageDetailByDateRequest,
    ProjectSummaryOverviewItem: ProjectSummaryOverviewItem,
    ConditionRegion: ConditionRegion,
    DescribeBillSummaryByProductRequest: DescribeBillSummaryByProductRequest,
    ConsumptionBusinessSummaryDataItem: ConsumptionBusinessSummaryDataItem,
    DetailPoint: DetailPoint,
    CostDetail: CostDetail,
    DescribeBillSummaryByPayModeResponse: DescribeBillSummaryByPayModeResponse,
    BillResourceSummary: BillResourceSummary,
    DescribeBillSummaryByTagRequest: DescribeBillSummaryByTagRequest,
    Conditions: Conditions,
    DescribeBillSummaryByProductResponse: DescribeBillSummaryByProductResponse,
    BillTagInfo: BillTagInfo,
    DescribeBillSummaryByRegionResponse: DescribeBillSummaryByRegionResponse,
    DetailSet: DetailSet,
    BillTransactionInfo: BillTransactionInfo,
    RegionSummaryOverviewItem: RegionSummaryOverviewItem,
    ConsumptionResourceSummaryDataItem: ConsumptionResourceSummaryDataItem,
    DescribeAccountBalanceRequest: DescribeAccountBalanceRequest,
    DescribeBillDetailRequest: DescribeBillDetailRequest,
    ConsumptionProjectSummaryDataItem: ConsumptionProjectSummaryDataItem,
    DescribeCostSummaryByProductResponse: DescribeCostSummaryByProductResponse,
    ProductInfo: ProductInfo,
    DescribeDosageDetailByDateResponse: DescribeDosageDetailByDateResponse,
    DescribeBillListResponse: DescribeBillListResponse,
    DescribeAccountBalanceResponse: DescribeAccountBalanceResponse,
    DescribeCostSummaryByRegionRequest: DescribeCostSummaryByRegionRequest,
    BusinessSummaryOverviewItem: BusinessSummaryOverviewItem,
    BillDetailComponent: BillDetailComponent,
    ConsumptionSummaryTrend: ConsumptionSummaryTrend,
    DescribeBillSummaryByRegionRequest: DescribeBillSummaryByRegionRequest,
    DescribeBillSummaryByPayModeRequest: DescribeBillSummaryByPayModeRequest,
    DescribeCostSummaryByProjectRequest: DescribeCostSummaryByProjectRequest,
    ConsumptionRegionSummaryDataItem: ConsumptionRegionSummaryDataItem,
    DescribeBillResourceSummaryResponse: DescribeBillResourceSummaryResponse,
    ActionSummaryOverviewItem: ActionSummaryOverviewItem,
    ConditionPayMode: ConditionPayMode,
    DescribeDealsByCondRequest: DescribeDealsByCondRequest,
    DescribeBillResourceSummaryRequest: DescribeBillResourceSummaryRequest,
    DescribeBillListRequest: DescribeBillListRequest,
    PayDealsResponse: PayDealsResponse,
    BillDetail: BillDetail,
    DescribeBillSummaryByTagResponse: DescribeBillSummaryByTagResponse,
    TagSummaryOverviewItem: TagSummaryOverviewItem,
    DescribeCostSummaryByResourceResponse: DescribeCostSummaryByResourceResponse,
    DescribeBillDetailResponse: DescribeBillDetailResponse,
    ConsumptionResourceSummaryConditionValue: ConsumptionResourceSummaryConditionValue,
    Deal: Deal,
    DescribeCostDetailRequest: DescribeCostDetailRequest,
    DescribeDealsByCondResponse: DescribeDealsByCondResponse,
    ConditionProject: ConditionProject,
    ConsumptionSummaryTotal: ConsumptionSummaryTotal,
    DescribeBillSummaryByProjectRequest: DescribeBillSummaryByProjectRequest,
    DescribeBillSummaryByProjectResponse: DescribeBillSummaryByProjectResponse,
    ConditionBusiness: ConditionBusiness,
    DescribeCostSummaryByResourceRequest: DescribeCostSummaryByResourceRequest,
    DescribeCostDetailResponse: DescribeCostDetailResponse,
    PayDealsRequest: PayDealsRequest,
    PayModeSummaryOverviewItem: PayModeSummaryOverviewItem,
    BusinessSummaryTotal: BusinessSummaryTotal,
    DescribeCostSummaryByRegionResponse: DescribeCostSummaryByRegionResponse,
};
//# sourceMappingURL=models.js.map