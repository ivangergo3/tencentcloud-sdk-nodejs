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
 * CreateDBInstances请求参数结构体
 * @class
 */
class CreateDBInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
         */
        this.SpecCode = null;
        /**
         * PostgreSQL内核版本，目前支持：9.3.5、9.5.4、10.4三种版本。
         */
        this.DBVersion = null;
        /**
         * 实例容量大小，单位：GB。
         */
        this.Storage = null;
        /**
         * 一次性购买的实例数量。取值1-100
         */
        this.InstanceCount = null;
        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
         */
        this.Period = null;
        /**
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
         */
        this.Zone = null;
        /**
         * 项目ID。
         */
        this.ProjectId = null;
        /**
         * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
         */
        this.InstanceChargeType = null;
        /**
         * 是否自动使用代金券。1（是），0（否），默认不使用。
         */
        this.AutoVoucher = null;
        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         */
        this.VoucherIds = null;
        /**
         * 私有网络ID。
         */
        this.VpcId = null;
        /**
         * 私有网络子网ID。
         */
        this.SubnetId = null;
        /**
         * 续费标记：0-正常续费（默认）；1-自动续费；
         */
        this.AutoRenewFlag = null;
        /**
         * 活动ID
         */
        this.ActivityId = null;
        /**
         * 实例名(后续支持)
         */
        this.Name = null;
        /**
         * 是否需要支持Ipv6，1：是，0：否
         */
        this.NeedSupportIpv6 = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;
    }
}
/**
 * CloseServerlessDBExtranetAccess返回参数结构体
 * @class
 */
class CloseServerlessDBExtranetAccessResponse extends abstract_model_1.AbstractModel {
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
 * DestroyDBInstance请求参数结构体
 * @class
 */
class DestroyDBInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待删除实例标识符
         */
        this.DBInstanceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
    }
}
/**
 * CreateServerlessDBInstance请求参数结构体
 * @class
 */
class CreateServerlessDBInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 可用区ID。公测阶段仅支持ap-shanghai-2、ap-beijing-1,ap-guangzhou-2.
         */
        this.Zone = null;
        /**
         * DB实例名称，同一个账号下该值必须唯一。
         */
        this.DBInstanceName = null;
        /**
         * PostgreSQL内核版本，目前只支持：10.4。
         */
        this.DBVersion = null;
        /**
         * PostgreSQL数据库字符集，目前支持UTF8。
         */
        this.DBCharset = null;
        /**
         * 项目ID。
         */
        this.ProjectId = null;
        /**
         * 私有网络ID。
         */
        this.VpcId = null;
        /**
         * 私有网络子网ID。
         */
        this.SubnetId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
    }
}
/**
 * InquiryPriceRenewDBInstance请求参数结构体
 * @class
 */
class InquiryPriceRenewDBInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.DBInstanceId = null;
        /**
         * 续费周期，按月计算，最大不超过48
         */
        this.Period = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
    }
}
/**
 * SetAutoRenewFlag请求参数结构体
 * @class
 */
class SetAutoRenewFlagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID数组
         */
        this.DBInstanceIdSet = null;
        /**
         * 续费标记。0-正常续费；1-自动续费；2-到期不续费
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
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
    }
}
/**
 * DescribeOrders返回参数结构体
 * @class
 */
class DescribeOrdersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 订单数量
         */
        this.TotalCount = null;
        /**
         * 订单数组
         */
        this.Deals = null;
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
        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new PgDeal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteServerlessDBInstance请求参数结构体
 * @class
 */
class DeleteServerlessDBInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * DB实例名称，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
         */
        this.DBInstanceName = null;
        /**
         * DB实例ID，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
         */
        this.DBInstanceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
    }
}
/**
 * DescribeDBXlogs请求参数结构体
 * @class
 */
class DescribeDBXlogsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-4wdeb0zv。
         */
        this.DBInstanceId = null;
        /**
         * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
         */
        this.StartTime = null;
        /**
         * 查询结束时间，形如2018-06-10 17:06:38
         */
        this.EndTime = null;
        /**
         * 分页返回，表示返回第几页的条目。从第0页开始计数。
         */
        this.Offset = null;
        /**
         * 分页返回，表示每页有多少条目。取值为1-100。
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * InquiryPriceCreateDBInstances返回参数结构体
 * @class
 */
class InquiryPriceCreateDBInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 原始价格，单位：分
         */
        this.OriginalPrice = null;
        /**
         * 折后价格，单位：分
         */
        this.Price = null;
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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 账户信息
 * @class
 */
class AccountInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-lnp6j617
         */
        this.DBInstanceId = null;
        /**
         * 帐号
         */
        this.UserName = null;
        /**
         * 帐号备注
         */
        this.Remark = null;
        /**
         * 帐号状态。 1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中
         */
        this.Status = null;
        /**
         * 帐号创建时间
         */
        this.CreateTime = null;
        /**
         * 帐号最后一次更新时间
         */
        this.UpdateTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
    }
}
/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 * @class
 */
class InquiryPriceUpgradeDBInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例的磁盘大小，单位GB
         */
        this.Storage = null;
        /**
         * 实例的内存大小，单位GB
         */
        this.Memory = null;
        /**
         * 实例ID，形如postgres-hez4fh0v
         */
        this.DBInstanceId = null;
        /**
         * 实例计费类型，预付费或者后付费。PREPAID-预付费。目前只支持预付费。
         */
        this.InstanceChargeType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
    }
}
/**
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-6fego161
         */
        this.DBInstanceId = null;
        /**
         * 分页返回，每页最大返回数目，默认20，取值范围为1-100
         */
        this.Limit = null;
        /**
         * 分页返回，返回第几页的用户数据。页码从0开始计数
         */
        this.Offset = null;
        /**
         * 返回数据按照创建时间或者用户名排序。取值只能为createTime或者name。createTime-按照创建时间排序；name-按照用户名排序
         */
        this.OrderBy = null;
        /**
         * 返回结果是升序还是降序。取值只能为desc或者asc。desc-降序；asc-升序
         */
        this.OrderByType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
    }
}
/**
 * DescribeDBErrlogs返回参数结构体
 * @class
 */
class DescribeDBErrlogsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 本次调用返回了多少条数据
         */
        this.TotalCount = null;
        /**
         * 错误日志列表
         */
        this.Details = null;
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
        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ErrLogDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * InquiryPriceCreateDBInstances请求参数结构体
 * @class
 */
class InquiryPriceCreateDBInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
         */
        this.Zone = null;
        /**
         * 规格ID。该参数可以通过调用DescribeProductConfig接口的返回值中的SpecCode字段来获取。
         */
        this.SpecCode = null;
        /**
         * 存储容量大小，单位：GB。
         */
        this.Storage = null;
        /**
         * 实例数量。目前最大数量不超过100，如需一次性创建更多实例，请联系客服支持。
         */
        this.InstanceCount = null;
        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。
         */
        this.Period = null;
        /**
         * 计费ID。该参数可以通过调用DescribeProductConfig接口的返回值中的Pid字段来获取。
         */
        this.Pid = null;
        /**
         * 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。
         */
        this.InstanceChargeType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
    }
}
/**
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据库实例ID，形如postgres-6fego161
         */
        this.DBInstanceId = null;
        /**
         * 新的数据库实例名字
         */
        this.InstanceName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
    }
}
/**
 * 描述一种规格的信息
 * @class
 */
class SpecItemInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 规格ID
         */
        this.SpecCode = null;
        /**
         * PostgreSQL的内核版本编号
         */
        this.Version = null;
        /**
         * 内核编号对应的完整版本名称
         */
        this.VersionName = null;
        /**
         * CPU核数
         */
        this.Cpu = null;
        /**
         * 内存大小，单位：MB
         */
        this.Memory = null;
        /**
         * 该规格所支持最大存储容量，单位：GB
         */
        this.MaxStorage = null;
        /**
         * 该规格所支持最小存储容量，单位：GB
         */
        this.MinStorage = null;
        /**
         * 该规格的预估QPS
         */
        this.Qps = null;
        /**
         * 该规格对应的计费ID
         */
        this.Pid = null;
        /**
         * 机器类型
         */
        this.Type = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Type = 'Type' in params ? params.Type : null;
    }
}
/**
 * DescribeProductConfig请求参数结构体
 * @class
 */
class DescribeProductConfigRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 可用区名称
         */
        this.Zone = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
    }
}
/**
 * CreateDBInstances返回参数结构体
 * @class
 */
class CreateDBInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 订单号列表。每个实例对应一个订单号。
         */
        this.DealNames = null;
        /**
         * 冻结流水号
         */
        this.BillId = null;
        /**
         * 创建成功的实例ID集合，只在后付费情景下有返回值
         */
        this.DBInstanceIdSet = null;
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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * RestartDBInstance请求参数结构体
 * @class
 */
class RestartDBInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-6r233v55
         */
        this.DBInstanceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
    }
}
/**
 * DescribeDBInstances请求参数结构体
 * @class
 */
class DescribeDBInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 过滤条件，目前支持：db-instance-id、db-instance-name、db-project-id、db-pay-mode。
         */
        this.Filters = null;
        /**
         * 每页显示数量，默认返回10条。
         */
        this.Limit = null;
        /**
         * 分页序号，从0开始。
         */
        this.Offset = null;
        /**
         * 排序指标，如实例名、创建时间等，支持DBInstanceId,CreateTime,Name,EndTime
         */
        this.OrderBy = null;
        /**
         * 排序方式，包括升序、降序
         */
        this.OrderByType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
    }
}
/**
 * 错误日志详情
 * @class
 */
class ErrLogDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户名
         */
        this.UserName = null;
        /**
         * 数据库名字
         */
        this.Database = null;
        /**
         * 错误发生时间
         */
        this.ErrTime = null;
        /**
         * 错误消息
         */
        this.ErrMsg = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.ErrTime = 'ErrTime' in params ? params.ErrTime : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
    }
}
/**
 * serverless实例描述
 * @class
 */
class ServerlessDBInstance extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例id，唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBInstanceId = null;
        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBInstanceName = null;
        /**
         * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBInstanceStatus = null;
        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Region = null;
        /**
         * 可用区
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Zone = null;
        /**
         * projectId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectId = null;
        /**
         * VpcId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VpcId = null;
        /**
         * 子网id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubnetId = null;
        /**
         * 字符集
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBCharset = null;
        /**
         * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBVersion = null;
        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateTime = null;
        /**
         * 实例网络信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBInstanceNetInfo = null;
        /**
         * 实例账户信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBAccountSet = null;
        /**
         * 实例下的db信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBDatabaseList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new ServerlessDBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }
        if (params.DBAccountSet) {
            this.DBAccountSet = new Array();
            for (let z in params.DBAccountSet) {
                let obj = new ServerlessDBAccount();
                obj.deserialize(params.DBAccountSet[z]);
                this.DBAccountSet.push(obj);
            }
        }
        this.DBDatabaseList = 'DBDatabaseList' in params ? params.DBDatabaseList : null;
    }
}
/**
 * DescribeServerlessDBInstances返回参数结构体
 * @class
 */
class DescribeServerlessDBInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询结果数
         */
        this.TotalCount = null;
        /**
         * 查询结果
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBInstanceSet = null;
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
        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new ServerlessDBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyDBInstancesProject返回参数结构体
 * @class
 */
class ModifyDBInstancesProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转移项目成功的实例个数
         */
        this.Count = null;
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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * RenewInstance返回参数结构体
 * @class
 */
class RenewInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 订单名
         */
        this.DealName = null;
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends abstract_model_1.AbstractModel {
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
 * UpgradeDBInstance请求参数结构体
 * @class
 */
class UpgradeDBInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 升级后的实例内存大小，单位GB
         */
        this.Memory = null;
        /**
         * 升级后的实例磁盘大小，单位GB
         */
        this.Storage = null;
        /**
         * 实例ID，形如postgres-lnp6j617
         */
        this.DBInstanceId = null;
        /**
         * 是否自动使用代金券,1是,0否，默认不使用
         */
        this.AutoVoucher = null;
        /**
         * 代金券ID列表，目前仅支持指定一张代金券
         */
        this.VoucherIds = null;
        /**
         * 活动ID
         */
        this.ActivityId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
    }
}
/**
 * OpenServerlessDBExtranetAccess请求参数结构体
 * @class
 */
class OpenServerlessDBExtranetAccessRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例的唯一标识符
         */
        this.DBInstanceId = null;
        /**
         * 实例名称
         */
        this.DBInstanceName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
    }
}
/**
 * 描述地域的编码和状态等信息
 * @class
 */
class RegionInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 该地域对应的英文名称
         */
        this.Region = null;
        /**
         * 该地域对应的中文名称
         */
        this.RegionName = null;
        /**
         * 该地域对应的数字编号
         */
        this.RegionId = null;
        /**
         * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
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
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
    }
}
/**
 * DeleteServerlessDBInstance返回参数结构体
 * @class
 */
class DeleteServerlessDBInstanceResponse extends abstract_model_1.AbstractModel {
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
 * 慢查询详情
 * @class
 */
class SlowlogDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 花费总时间
         */
        this.TotalTime = null;
        /**
         * 调用总次数
         */
        this.TotalCalls = null;
        /**
         * 脱敏后的慢SQL列表
         */
        this.NormalQueries = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.TotalCalls = 'TotalCalls' in params ? params.TotalCalls : null;
        if (params.NormalQueries) {
            this.NormalQueries = new Array();
            for (let z in params.NormalQueries) {
                let obj = new NormalQueryItem();
                obj.deserialize(params.NormalQueries[z]);
                this.NormalQueries.push(obj);
            }
        }
    }
}
/**
 * InitDBInstances请求参数结构体
 * @class
 */
class InitDBInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID集合。
         */
        this.DBInstanceIdSet = null;
        /**
         * 实例根账号用户名。
         */
        this.AdminName = null;
        /**
         * 实例根账号用户名对应的密码。
         */
        this.AdminPassword = null;
        /**
         * 实例字符集，目前只支持：UTF8、LATIN1。
         */
        this.Charset = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
    }
}
/**
 * RestartDBInstance返回参数结构体
 * @class
 */
class RestartDBInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 异步流程ID
         */
        this.FlowId = null;
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SetAutoRenewFlag返回参数结构体
 * @class
 */
class SetAutoRenewFlagResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 设置成功的实例个数
         */
        this.Count = null;
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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDBInstances返回参数结构体
 * @class
 */
class DescribeDBInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询到的实例数量。
         */
        this.TotalCount = null;
        /**
         * 实例详细信息集合。
         */
        this.DBInstanceSet = null;
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
        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new DBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 描述某个地域下某个可用区的可售卖规格详细信息。
 * @class
 */
class SpecInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 地域英文编码，对应RegionSet的Region字段
         */
        this.Region = null;
        /**
         * 区域英文编码，对应ZoneSet的Zone字段
         */
        this.Zone = null;
        /**
         * 规格详细信息列表
         */
        this.SpecItemInfoList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        if (params.SpecItemInfoList) {
            this.SpecItemInfoList = new Array();
            for (let z in params.SpecItemInfoList) {
                let obj = new SpecItemInfo();
                obj.deserialize(params.SpecItemInfoList[z]);
                this.SpecItemInfoList.push(obj);
            }
        }
    }
}
/**
 * 描述实例的详细信息
 * @class
 */
class DBInstance extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例所属地域，如: ap-guangzhou，对应RegionSet的Region字段
         */
        this.Region = null;
        /**
         * 实例所属可用区， 如：ap-guangzhou-3，对应ZoneSet的Zone字段
         */
        this.Zone = null;
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 私有网络ID
         */
        this.VpcId = null;
        /**
         * 子网ID
         */
        this.SubnetId = null;
        /**
         * 实例ID
         */
        this.DBInstanceId = null;
        /**
         * 实例名称
         */
        this.DBInstanceName = null;
        /**
         * 实例状态，分别为：applying（申请中）、init(待初始化)、initing(初始化中)、running(运行中)、limited run（受限运行）、isolated（已隔离）、recycling（回收中）、recycled（已回收）、job running（任务执行中）、offline（下线）、migrating（迁移中）、expanding（扩容中）、readonly（只读）、restarting（重启中）
         */
        this.DBInstanceStatus = null;
        /**
         * 实例分配的内存大小，单位：GB
         */
        this.DBInstanceMemory = null;
        /**
         * 实例分配的存储空间大小，单位：GB
         */
        this.DBInstanceStorage = null;
        /**
         * 实例分配的CPU数量，单位：个
         */
        this.DBInstanceCpu = null;
        /**
         * 售卖规格ID
         */
        this.DBInstanceClass = null;
        /**
         * 实例类型，类型有：1、primary（主实例）；2、readonly（只读实例）；3、guard（灾备实例）；4、temp（临时实例）
         */
        this.DBInstanceType = null;
        /**
         * 实例版本，目前只支持standard（双机高可用版, 一主一从）
         */
        this.DBInstanceVersion = null;
        /**
         * 实例DB字符集
         */
        this.DBCharset = null;
        /**
         * PostgreSQL内核版本
         */
        this.DBVersion = null;
        /**
         * 实例创建时间
         */
        this.CreateTime = null;
        /**
         * 实例执行最后一次更新的时间
         */
        this.UpdateTime = null;
        /**
         * 实例到期时间
         */
        this.ExpireTime = null;
        /**
         * 实例隔离时间
         */
        this.IsolatedTime = null;
        /**
         * 计费模式，1、prepaid（包年包月,预付费）；2、postpaid（按量计费，后付费）
         */
        this.PayType = null;
        /**
         * 是否自动续费，1：自动续费，0：不自动续费
         */
        this.AutoRenew = null;
        /**
         * 实例网络连接信息
         */
        this.DBInstanceNetInfo = null;
        /**
         * 机器类型
         */
        this.Type = null;
        /**
         * 用户的AppId
         */
        this.AppId = null;
        /**
         * 实例的Uid
         */
        this.Uid = null;
        /**
         * 实例是否支持Ipv6，1：支持，0：不支持
         */
        this.SupportIpv6 = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.DBInstanceMemory = 'DBInstanceMemory' in params ? params.DBInstanceMemory : null;
        this.DBInstanceStorage = 'DBInstanceStorage' in params ? params.DBInstanceStorage : null;
        this.DBInstanceCpu = 'DBInstanceCpu' in params ? params.DBInstanceCpu : null;
        this.DBInstanceClass = 'DBInstanceClass' in params ? params.DBInstanceClass : null;
        this.DBInstanceType = 'DBInstanceType' in params ? params.DBInstanceType : null;
        this.DBInstanceVersion = 'DBInstanceVersion' in params ? params.DBInstanceVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.SupportIpv6 = 'SupportIpv6' in params ? params.SupportIpv6 : null;
    }
}
/**
 * DescribeProductConfig返回参数结构体
 * @class
 */
class DescribeProductConfigResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 售卖规格列表。
         */
        this.SpecInfoList = null;
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
        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ResetAccountPassword返回参数结构体
 * @class
 */
class ResetAccountPasswordResponse extends abstract_model_1.AbstractModel {
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
 * ResetAccountPassword请求参数结构体
 * @class
 */
class ResetAccountPasswordRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-4wdeb0zv
         */
        this.DBInstanceId = null;
        /**
         * 实例账户名
         */
        this.UserName = null;
        /**
         * UserName账户对应的新密码
         */
        this.Password = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
    }
}
/**
 * DescribeOrders请求参数结构体
 * @class
 */
class DescribeOrdersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 订单名集合
         */
        this.DealNames = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
    }
}
/**
 * InquiryPriceUpgradeDBInstance返回参数结构体
 * @class
 */
class InquiryPriceUpgradeDBInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总费用，打折前的
         */
        this.OriginalPrice = null;
        /**
         * 实际需要付款金额
         */
        this.Price = null;
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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * InitDBInstances返回参数结构体
 * @class
 */
class InitDBInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID集合。
         */
        this.DBInstanceIdSet = null;
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
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDBBackups请求参数结构体
 * @class
 */
class DescribeDBBackupsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-4wdeb0zv。
         */
        this.DBInstanceId = null;
        /**
         * 备份方式（1-全量）。目前只支持全量，取值为1。
         */
        this.Type = null;
        /**
         * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
         */
        this.StartTime = null;
        /**
         * 查询结束时间，形如2018-06-10 17:06:38
         */
        this.EndTime = null;
        /**
         * 备份列表分页返回，每页返回数量，默认为 20，最小为1，最大值为 100。（当该参数不传或者传0时按默认值处理）
         */
        this.Limit = null;
        /**
         * 返回结果中的第几页，从第0页开始。默认为0。
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * serverless账号描述
 * @class
 */
class ServerlessDBAccount extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBUser = null;
        /**
         * 密码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBPassword = null;
        /**
         * 连接数限制
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DBConnLimit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBUser = 'DBUser' in params ? params.DBUser : null;
        this.DBPassword = 'DBPassword' in params ? params.DBPassword : null;
        this.DBConnLimit = 'DBConnLimit' in params ? params.DBConnLimit : null;
    }
}
/**
 * OpenDBExtranetAccess返回参数结构体
 * @class
 */
class OpenDBExtranetAccessResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 异步任务流程ID
         */
        this.FlowId = null;
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称等
* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends abstract_model_1.AbstractModel {
    constructor() {
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;
    }
}
/**
 * RenewInstance请求参数结构体
 * @class
 */
class RenewInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-6fego161
         */
        this.DBInstanceId = null;
        /**
         * 续费多少个月
         */
        this.Period = null;
        /**
         * 是否自动使用代金券,1是,0否，默认不使用
         */
        this.AutoVoucher = null;
        /**
         * 代金券ID列表，目前仅支持指定一张代金券
         */
        this.VoucherIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
    }
}
/**
 * 订单详情
 * @class
 */
class PgDeal extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 订单名
         */
        this.DealName = null;
        /**
         * 所属用户
         */
        this.OwnerUin = null;
        /**
         * 订单涉及多少个实例
         */
        this.Count = null;
        /**
         * 付费模式。1-预付费；0-后付费
         */
        this.PayMode = null;
        /**
         * 异步任务流程ID
         */
        this.FlowId = null;
        /**
         * 实例ID数组
         */
        this.DBInstanceIdSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
    }
}
/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的结果数量。
         */
        this.TotalCount = null;
        /**
         * 地域信息集合。
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * DescribeDatabases请求参数结构体
 * @class
 */
class DescribeDatabasesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.DBInstanceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
    }
}
/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 本次调用接口共返回了多少条数据。
         */
        this.TotalCount = null;
        /**
         * 帐号列表详细信息。
         */
        this.Details = null;
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
        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new AccountInfo();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * InquiryPriceRenewDBInstance返回参数结构体
 * @class
 */
class InquiryPriceRenewDBInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总费用，打折前的。比如24650表示246.5元
         */
        this.OriginalPrice = null;
        /**
         * 实际需要付款金额。比如24650表示246.5元
         */
        this.Price = null;
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
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDBErrlogs请求参数结构体
 * @class
 */
class DescribeDBErrlogsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-5bq3wfjd
         */
        this.DBInstanceId = null;
        /**
         * 查询起始时间，形如2018-01-01 00:00:00，起始时间不得小于7天以前
         */
        this.StartTime = null;
        /**
         * 查询结束时间，形如2018-01-01 00:00:00
         */
        this.EndTime = null;
        /**
         * 数据库名字
         */
        this.DatabaseName = null;
        /**
         * 搜索关键字
         */
        this.SearchKeys = null;
        /**
         * 分页返回，每页返回的最大数量。取值为1-100
         */
        this.Limit = null;
        /**
         * 分页返回，返回第几页的数据，从第0页开始计数
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * 描述可用区的编码和状态信息
 * @class
 */
class ZoneInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 该可用区的英文名称
         */
        this.Zone = null;
        /**
         * 该可用区的中文名称
         */
        this.ZoneName = null;
        /**
         * 该可用区对应的数字编号
         */
        this.ZoneId = null;
        /**
         * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
         */
        this.ZoneState = null;
        /**
         * 该可用区是否支持Ipv6
         */
        this.ZoneSupportIpv6 = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;
        this.ZoneSupportIpv6 = 'ZoneSupportIpv6' in params ? params.ZoneSupportIpv6 : null;
    }
}
/**
 * 数据库备份信息
 * @class
 */
class DBBackup extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 备份文件唯一标识
         */
        this.Id = null;
        /**
         * 文件生成的开始时间
         */
        this.StartTime = null;
        /**
         * 文件生成的结束时间
         */
        this.EndTime = null;
        /**
         * 文件大小(K)
         */
        this.Size = null;
        /**
         * 策略（0-实例备份；1-多库备份）
         */
        this.Strategy = null;
        /**
         * 类型（0-定时）
         */
        this.Way = null;
        /**
         * 备份方式（1-完整）
         */
        this.Type = null;
        /**
         * 状态（1-创建中；2-成功；3-失败）
         */
        this.Status = null;
        /**
         * DB列表
         */
        this.DbList = null;
        /**
         * 内网下载地址
         */
        this.InternalAddr = null;
        /**
         * 外网下载地址
         */
        this.ExternalAddr = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Way = 'Way' in params ? params.Way : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DbList = 'DbList' in params ? params.DbList : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
    }
}
/**
 * 描述实例的网络连接信息。
 * @class
 */
class DBInstanceNetInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * DNS域名
         */
        this.Address = null;
        /**
         * IP地址
         */
        this.Ip = null;
        /**
         * 连接Port地址
         */
        this.Port = null;
        /**
         * 网络类型，1、inner（基础网络内网地址）；2、private（私有网络内网地址）；3、public（基础网络或私有网络的外网地址）；
         */
        this.NetType = null;
        /**
         * 网络连接状态
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
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Status = 'Status' in params ? params.Status : null;
    }
}
/**
 * ModifyDBInstancesProject请求参数结构体
 * @class
 */
class ModifyDBInstancesProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * postgresql实例ID数组
         */
        this.DBInstanceIdSet = null;
        /**
         * postgresql实例所属新项目的ID
         */
        this.ProjectId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    }
}
/**
 * serverless实例网络信息描述
 * @class
 */
class ServerlessDBInstanceNetInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Address = null;
        /**
         * ip地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Ip = null;
        /**
         * 端口号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Port = null;
        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;
        /**
         * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NetType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
    }
}
/**
 * UpgradeDBInstance返回参数结构体
 * @class
 */
class UpgradeDBInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易名字。
         */
        this.DealName = null;
        /**
         * 冻结流水号
         */
        this.BillId = null;
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyDBInstanceName返回参数结构体
 * @class
 */
class ModifyDBInstanceNameResponse extends abstract_model_1.AbstractModel {
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
 * OpenServerlessDBExtranetAccess返回参数结构体
 * @class
 */
class OpenServerlessDBExtranetAccessResponse extends abstract_model_1.AbstractModel {
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
 * CloseDBExtranetAccess返回参数结构体
 * @class
 */
class CloseDBExtranetAccessResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 异步任务流程ID
         */
        this.FlowId = null;
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DestroyDBInstance返回参数结构体
 * @class
 */
class DestroyDBInstanceResponse extends abstract_model_1.AbstractModel {
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
 * DescribeDBInstanceAttribute返回参数结构体
 * @class
 */
class DescribeDBInstanceAttributeResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例详细信息。
         */
        this.DBInstance = null;
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
        if (params.DBInstance) {
            let obj = new DBInstance();
            obj.deserialize(params.DBInstance);
            this.DBInstance = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDBSlowlogs请求参数结构体
 * @class
 */
class DescribeDBSlowlogsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-lnp6j617
         */
        this.DBInstanceId = null;
        /**
         * 查询起始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
         */
        this.StartTime = null;
        /**
         * 查询结束时间，形如2018-06-10 17:06:38
         */
        this.EndTime = null;
        /**
         * 数据库名字
         */
        this.DatabaseName = null;
        /**
         * 按照何种指标排序，取值为sum_calls或者sum_cost_time。sum_calls-总调用次数；sum_cost_time-总的花费时间
         */
        this.OrderBy = null;
        /**
         * 排序规则。desc-降序；asc-升序
         */
        this.OrderByType = null;
        /**
         * 分页返回结果，每页最大返回数量，取值为1-100，默认20
         */
        this.Limit = null;
        /**
         * 分页返回结果，返回结果的第几页，从0开始计数
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * DescribeServerlessDBInstances请求参数结构体
 * @class
 */
class DescribeServerlessDBInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询条件
         */
        this.Filter = null;
        /**
         * 查询个数
         */
        this.Limit = null;
        /**
         * 偏移量
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
        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * OpenDBExtranetAccess请求参数结构体
 * @class
 */
class OpenDBExtranetAccessRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-hez4fh0v
         */
        this.DBInstanceId = null;
        /**
         * 是否开通Ipv6外网，1：是，0：否
         */
        this.IsIpv6 = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;
    }
}
/**
 * DescribeDBBackups返回参数结构体
 * @class
 */
class DescribeDBBackupsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回备份列表中备份文件的个数
         */
        this.TotalCount = null;
        /**
         * 备份列表
         */
        this.BackupList = null;
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
        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new DBBackup();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends abstract_model_1.AbstractModel {
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
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的结果数量。
         */
        this.TotalCount = null;
        /**
         * 可用区信息集合。
         */
        this.ZoneSet = null;
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
        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 单条SlowQuery信息
 * @class
 */
class NormalQueryItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户名
         */
        this.UserName = null;
        /**
         * 调用次数
         */
        this.Calls = null;
        /**
         * 粒度点
         */
        this.CallsGrids = null;
        /**
         * 花费总时间
         */
        this.CostTime = null;
        /**
         * 影响的行数
         */
        this.Rows = null;
        /**
         * 花费最小时间
         */
        this.MinCostTime = null;
        /**
         * 花费最大时间
         */
        this.MaxCostTime = null;
        /**
         * 最早一条慢SQL时间
         */
        this.FirstTime = null;
        /**
         * 最晚一条慢SQL时间
         */
        this.LastTime = null;
        /**
         * 读共享内存块数
         */
        this.SharedReadBlks = null;
        /**
         * 写共享内存块数
         */
        this.SharedWriteBlks = null;
        /**
         * 读io总耗时
         */
        this.ReadCostTime = null;
        /**
         * 写io总耗时
         */
        this.WriteCostTime = null;
        /**
         * 数据库名字
         */
        this.DatabaseName = null;
        /**
         * 脱敏后的慢SQL
         */
        this.NormalQuery = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Calls = 'Calls' in params ? params.Calls : null;
        this.CallsGrids = 'CallsGrids' in params ? params.CallsGrids : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.Rows = 'Rows' in params ? params.Rows : null;
        this.MinCostTime = 'MinCostTime' in params ? params.MinCostTime : null;
        this.MaxCostTime = 'MaxCostTime' in params ? params.MaxCostTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.SharedReadBlks = 'SharedReadBlks' in params ? params.SharedReadBlks : null;
        this.SharedWriteBlks = 'SharedWriteBlks' in params ? params.SharedWriteBlks : null;
        this.ReadCostTime = 'ReadCostTime' in params ? params.ReadCostTime : null;
        this.WriteCostTime = 'WriteCostTime' in params ? params.WriteCostTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.NormalQuery = 'NormalQuery' in params ? params.NormalQuery : null;
    }
}
/**
 * CreateServerlessDBInstance返回参数结构体
 * @class
 */
class CreateServerlessDBInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，该ID全局唯一，如：postgres-xxxxx
         */
        this.DBInstanceId = null;
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
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDatabases返回参数结构体
 * @class
 */
class DescribeDatabasesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数据库信息
         */
        this.Items = null;
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
        this.Items = 'Items' in params ? params.Items : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDBXlogs返回参数结构体
 * @class
 */
class DescribeDBXlogsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 表示此次返回结果有多少条数据。
         */
        this.TotalCount = null;
        /**
         * Xlog列表
         */
        this.XlogList = null;
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
        if (params.XlogList) {
            this.XlogList = new Array();
            for (let z in params.XlogList) {
                let obj = new Xlog();
                obj.deserialize(params.XlogList[z]);
                this.XlogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDBInstanceAttribute请求参数结构体
 * @class
 */
class DescribeDBInstanceAttributeRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.DBInstanceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
    }
}
/**
 * CloseServerlessDBExtranetAccess请求参数结构体
 * @class
 */
class CloseServerlessDBExtranetAccessRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例唯一标识符
         */
        this.DBInstanceId = null;
        /**
         * 实例名称
         */
        this.DBInstanceName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
    }
}
/**
 * ModifyAccountRemark返回参数结构体
 * @class
 */
class ModifyAccountRemarkResponse extends abstract_model_1.AbstractModel {
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
 * DescribeDBSlowlogs返回参数结构体
 * @class
 */
class DescribeDBSlowlogsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 本次返回多少条数据
         */
        this.TotalCount = null;
        /**
         * 慢查询日志详情
         */
        this.Detail = null;
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
        if (params.Detail) {
            let obj = new SlowlogDetail();
            obj.deserialize(params.Detail);
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyAccountRemark请求参数结构体
 * @class
 */
class ModifyAccountRemarkRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-4wdeb0zv
         */
        this.DBInstanceId = null;
        /**
         * 实例用户名
         */
        this.UserName = null;
        /**
         * 用户UserName对应的新备注
         */
        this.Remark = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
    }
}
/**
 * CloseDBExtranetAccess请求参数结构体
 * @class
 */
class CloseDBExtranetAccessRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID，形如postgres-6r233v55
         */
        this.DBInstanceId = null;
        /**
         * 是否关闭Ipv6外网，1：是，0：否
         */
        this.IsIpv6 = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;
    }
}
/**
 * 数据库Xlog信息
 * @class
 */
class Xlog extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 备份文件唯一标识
         */
        this.Id = null;
        /**
         * 文件生成的开始时间
         */
        this.StartTime = null;
        /**
         * 文件生成的结束时间
         */
        this.EndTime = null;
        /**
         * 内网下载地址
         */
        this.InternalAddr = null;
        /**
         * 外网下载地址
         */
        this.ExternalAddr = null;
        /**
         * 备份文件大小
         */
        this.Size = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Size = 'Size' in params ? params.Size : null;
    }
}
exports.Models = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    CloseServerlessDBExtranetAccessResponse: CloseServerlessDBExtranetAccessResponse,
    DestroyDBInstanceRequest: DestroyDBInstanceRequest,
    CreateServerlessDBInstanceRequest: CreateServerlessDBInstanceRequest,
    InquiryPriceRenewDBInstanceRequest: InquiryPriceRenewDBInstanceRequest,
    SetAutoRenewFlagRequest: SetAutoRenewFlagRequest,
    DescribeOrdersResponse: DescribeOrdersResponse,
    DeleteServerlessDBInstanceRequest: DeleteServerlessDBInstanceRequest,
    DescribeDBXlogsRequest: DescribeDBXlogsRequest,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    AccountInfo: AccountInfo,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DescribeDBErrlogsResponse: DescribeDBErrlogsResponse,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    SpecItemInfo: SpecItemInfo,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    ErrLogDetail: ErrLogDetail,
    ServerlessDBInstance: ServerlessDBInstance,
    DescribeServerlessDBInstancesResponse: DescribeServerlessDBInstancesResponse,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    RenewInstanceResponse: RenewInstanceResponse,
    DescribeZonesRequest: DescribeZonesRequest,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    OpenServerlessDBExtranetAccessRequest: OpenServerlessDBExtranetAccessRequest,
    RegionInfo: RegionInfo,
    DeleteServerlessDBInstanceResponse: DeleteServerlessDBInstanceResponse,
    SlowlogDetail: SlowlogDetail,
    InitDBInstancesRequest: InitDBInstancesRequest,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    SetAutoRenewFlagResponse: SetAutoRenewFlagResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    SpecInfo: SpecInfo,
    DBInstance: DBInstance,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeOrdersRequest: DescribeOrdersRequest,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    ServerlessDBAccount: ServerlessDBAccount,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    Filter: Filter,
    RenewInstanceRequest: RenewInstanceRequest,
    PgDeal: PgDeal,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    InquiryPriceRenewDBInstanceResponse: InquiryPriceRenewDBInstanceResponse,
    DescribeDBErrlogsRequest: DescribeDBErrlogsRequest,
    ZoneInfo: ZoneInfo,
    DBBackup: DBBackup,
    DBInstanceNetInfo: DBInstanceNetInfo,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    ServerlessDBInstanceNetInfo: ServerlessDBInstanceNetInfo,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    OpenServerlessDBExtranetAccessResponse: OpenServerlessDBExtranetAccessResponse,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    DestroyDBInstanceResponse: DestroyDBInstanceResponse,
    DescribeDBInstanceAttributeResponse: DescribeDBInstanceAttributeResponse,
    DescribeDBSlowlogsRequest: DescribeDBSlowlogsRequest,
    DescribeServerlessDBInstancesRequest: DescribeServerlessDBInstancesRequest,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    NormalQueryItem: NormalQueryItem,
    CreateServerlessDBInstanceResponse: CreateServerlessDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    DescribeDBXlogsResponse: DescribeDBXlogsResponse,
    DescribeDBInstanceAttributeRequest: DescribeDBInstanceAttributeRequest,
    CloseServerlessDBExtranetAccessRequest: CloseServerlessDBExtranetAccessRequest,
    ModifyAccountRemarkResponse: ModifyAccountRemarkResponse,
    DescribeDBSlowlogsResponse: DescribeDBSlowlogsResponse,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    Xlog: Xlog,
};
//# sourceMappingURL=models.js.map