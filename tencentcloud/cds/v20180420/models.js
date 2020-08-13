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
 * ModifyDbauditInstancesRenewFlag返回参数结构体
 * @class
 */
class ModifyDbauditInstancesRenewFlagResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDbauditInstanceType返回参数结构体
 * @class
 */
class DescribeDbauditInstanceTypeResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据安全审计产品规格信息列表
         */
        this.DbauditTypesSet = null;
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
        if (params.DbauditTypesSet) {
            this.DbauditTypesSet = new Array();
            for (let z in params.DbauditTypesSet) {
                let obj = new DbauditTypesInfo();
                obj.deserialize(params.DbauditTypesSet[z]);
                this.DbauditTypesSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * InquiryPriceDbauditInstance返回参数结构体
 * @class
 */
class InquiryPriceDbauditInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总价，单位：元
         */
        this.TotalPrice = null;
        /**
         * 真实价钱，预支费用的折扣价，单位：元
         */
        this.RealTotalCost = null;
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
        this.TotalPrice = 'TotalPrice' in params ? params.TotalPrice : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 数据安全产品实例信息
 * @class
 */
class CdsAuditInstance extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 用户AppId
         */
        this.AppId = null;
        /**
         * 用户Uin
         */
        this.Uin = null;
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 续费标识
         */
        this.RenewFlag = null;
        /**
         * 所属地域
         */
        this.Region = null;
        /**
         * 付费模式（数据安全审计只支持预付费：1）
         */
        this.PayMode = null;
        /**
         * 实例状态： 0，未生效；1：正常运行； 2：被隔离； 3，已过期
         */
        this.Status = null;
        /**
         * 实例被隔离时间，格式：yyyy-mm-dd HH:ii:ss
         */
        this.IsolatedTimestamp = null;
        /**
         * 实例创建时间，格式： yyyy-mm-dd HH:ii:ss
         */
        this.CreateTime = null;
        /**
         * 实例过期时间，格式：yyyy-mm-dd HH:ii:ss
         */
        this.ExpireTime = null;
        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceName = null;
        /**
         * 实例公网IP
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PublicIp = null;
        /**
         * 实例私网IP
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PrivateIp = null;
        /**
         * 实例类型（版本）
         */
        this.InstanceType = null;
        /**
         * 实例域名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Pdomain = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsolatedTimestamp = 'IsolatedTimestamp' in params ? params.IsolatedTimestamp : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Pdomain = 'Pdomain' in params ? params.Pdomain : null;
    }
}
/**
 * ModifyDbauditInstancesRenewFlag请求参数结构体
 * @class
 */
class ModifyDbauditInstancesRenewFlagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 0，表示默认状态(用户未设置，即初始状态)；1，表示自动续费；2，表示明确不自动续费
         */
        this.AutoRenewFlag = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
    }
}
/**
 * DescribeDbauditUsedRegions返回参数结构体
 * @class
 */
class DescribeDbauditUsedRegionsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 可售卖地域信息列表
         */
        this.RegionSet = null;
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
        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDbauditInstances请求参数结构体
 * @class
 */
class DescribeDbauditInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询条件地域
         */
        this.SearchRegion = null;
        /**
         * 限制数目，默认10， 最大50
         */
        this.Limit = null;
        /**
         * 偏移量，默认1
         */
        this.Offset = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchRegion = 'SearchRegion' in params ? params.SearchRegion : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * DescribeDbauditInstanceType请求参数结构体
 * @class
 */
class DescribeDbauditInstanceTypeRequest extends abstract_model_1.AbstractModel {
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
 * 数盾地域信息
 * @class
 */
class RegionInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 地域ID
         */
        this.RegionId = null;
        /**
         * 地域名称
         */
        this.Region = null;
        /**
         * 地域描述
         */
        this.RegionName = null;
        /**
         * 地域可用状态
         */
        this.RegionState = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
    }
}
/**
 * DescribeDbauditInstances返回参数结构体
 * @class
 */
class DescribeDbauditInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总实例数
         */
        this.TotalCount = null;
        /**
         * 数据安全审计实例信息列表
         */
        this.CdsAuditInstanceSet = null;
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.CdsAuditInstanceSet) {
            this.CdsAuditInstanceSet = new Array();
            for (let z in params.CdsAuditInstanceSet) {
                let obj = new CdsAuditInstance();
                obj.deserialize(params.CdsAuditInstanceSet[z]);
                this.CdsAuditInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 数据安全审计产品规格信息
 * @class
 */
class DbauditTypesInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 规格描述
         */
        this.InstanceVersionName = null;
        /**
         * 规格名称
         */
        this.InstanceVersionKey = null;
        /**
         * 最大吞吐量
         */
        this.Qps = null;
        /**
         * 最大实例数
         */
        this.MaxInstances = null;
        /**
         * 入库速率（每小时）
         */
        this.InsertSpeed = null;
        /**
         * 最大在线存储量，单位：条
         */
        this.OnlineStorageCapacity = null;
        /**
         * 最大归档存储量，单位：条
         */
        this.ArchivingStorageCapacity = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceVersionName = 'InstanceVersionName' in params ? params.InstanceVersionName : null;
        this.InstanceVersionKey = 'InstanceVersionKey' in params ? params.InstanceVersionKey : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.MaxInstances = 'MaxInstances' in params ? params.MaxInstances : null;
        this.InsertSpeed = 'InsertSpeed' in params ? params.InsertSpeed : null;
        this.OnlineStorageCapacity = 'OnlineStorageCapacity' in params ? params.OnlineStorageCapacity : null;
        this.ArchivingStorageCapacity = 'ArchivingStorageCapacity' in params ? params.ArchivingStorageCapacity : null;
    }
}
/**
 * DescribeDbauditUsedRegions请求参数结构体
 * @class
 */
class DescribeDbauditUsedRegionsRequest extends abstract_model_1.AbstractModel {
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
 * InquiryPriceDbauditInstance请求参数结构体
 * @class
 */
class InquiryPriceDbauditInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例规格，取值范围： cdsaudit，cdsaudit_adv， cdsaudit_ent 分别为合规版，高级版，企业版
         */
        this.InstanceVersion = null;
        /**
         * 询价类型： renew，续费；newbuy，新购
         */
        this.InquiryType = null;
        /**
         * 购买实例的时长。取值范围：1（y/m），2（y/m）,，3（y/m），4（m）， 5（m），6（m）， 7（m），8（m），9（m）， 10（m）
         */
        this.TimeSpan = null;
        /**
         * 购买时长单位，y：年；m：月
         */
        this.TimeUnit = null;
        /**
         * 实例所在地域
         */
        this.ServiceRegion = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceVersion = 'InstanceVersion' in params ? params.InstanceVersion : null;
        this.InquiryType = 'InquiryType' in params ? params.InquiryType : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.ServiceRegion = 'ServiceRegion' in params ? params.ServiceRegion : null;
    }
}
/**
 * DescribeDasbImageIds返回参数结构体
 * @class
 */
class DescribeDasbImageIdsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 基础镜像ID
         */
        this.BaseImageId = null;
        /**
         * AI镜像ID
         */
        this.AiImageId = null;
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
        this.BaseImageId = 'BaseImageId' in params ? params.BaseImageId : null;
        this.AiImageId = 'AiImageId' in params ? params.AiImageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDasbImageIds请求参数结构体
 * @class
 */
class DescribeDasbImageIdsRequest extends abstract_model_1.AbstractModel {
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
exports.Models = {
    ModifyDbauditInstancesRenewFlagResponse: ModifyDbauditInstancesRenewFlagResponse,
    DescribeDbauditInstanceTypeResponse: DescribeDbauditInstanceTypeResponse,
    InquiryPriceDbauditInstanceResponse: InquiryPriceDbauditInstanceResponse,
    CdsAuditInstance: CdsAuditInstance,
    ModifyDbauditInstancesRenewFlagRequest: ModifyDbauditInstancesRenewFlagRequest,
    DescribeDbauditUsedRegionsResponse: DescribeDbauditUsedRegionsResponse,
    DescribeDbauditInstancesRequest: DescribeDbauditInstancesRequest,
    DescribeDbauditInstanceTypeRequest: DescribeDbauditInstanceTypeRequest,
    RegionInfo: RegionInfo,
    DescribeDbauditInstancesResponse: DescribeDbauditInstancesResponse,
    DbauditTypesInfo: DbauditTypesInfo,
    DescribeDbauditUsedRegionsRequest: DescribeDbauditUsedRegionsRequest,
    InquiryPriceDbauditInstanceRequest: InquiryPriceDbauditInstanceRequest,
    DescribeDasbImageIdsResponse: DescribeDasbImageIdsResponse,
    DescribeDasbImageIdsRequest: DescribeDasbImageIdsRequest,
};
//# sourceMappingURL=models.js.map