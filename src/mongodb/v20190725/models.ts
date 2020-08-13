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
 * DescribeSpecInfo请求参数结构体
 * @class
 */
class DescribeSpecInfoRequest extends AbstractModel {

    Zone: string | null
    
    constructor(){
        super();

        /**
         * 待查询可用区
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends AbstractModel {

    NodeNum: number | null
    
    Memory: number | null
    
    Volume: number | null
    
    MongoVersion: string | null
    
    GoodsNum: number | null
    
    Zone: string | null
    
    Period: number | null
    
    MachineCode: string | null
    
    ClusterType: string | null
    
    ReplicateSetNum: number | null
    
    ProjectId: number | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    Password: string | null
    
    Tags: Array<TagInfo> | null
    
    AutoRenewFlag: number | null
    
    AutoVoucher: number | null
    
    Clone: number | null
    
    Father: string | null
    
    SecurityGroup: Array<string> | null
    
    constructor(){
        super();

        /**
         * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
         */
        this.NodeNum = null;

        /**
         * 实例内存大小，单位：GB
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB
         */
        this.Volume = null;

        /**
         * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本
         */
        this.MongoVersion = null;

        /**
         * 实例数量, 最小值1，最大值为10
         */
        this.GoodsNum = null;

        /**
         * 实例所属区域名称，格式如：ap-guangzhou-2
         */
        this.Zone = null;

        /**
         * 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         */
        this.Period = null;

        /**
         * 机器类型，HIO：高IO型；HIO10G：高IO万兆型；STDS5：标准型
         */
        this.MachineCode = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群，STANDALONE-单节点
         */
        this.ClusterType = null;

        /**
         * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数；若为单节点实例，该参数设置为0
         */
        this.ReplicateSetNum = null;

        /**
         * 项目ID，不设置为默认项目
         */
        this.ProjectId = null;

        /**
         * 私有网络 ID，如果不传则默认选择基础网络，请使用 查询私有网络列表
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网 ID，如果设置了 UniqVpcId，则 UniqSubnetId 必填，请使用 查询子网列表
         */
        this.SubnetId = null;

        /**
         * 实例密码，不设置该参数则需要在创建完成后通过设置密码接口初始化实例密码。密码必须是8-16位字符，且至少包含字母、数字和字符 !@#%^*() 中的两种
         */
        this.Password = null;

        /**
         * 实例标签信息
         */
        this.Tags = null;

        /**
         * 自动续费标记，可选值为：0 - 不自动续费；1 - 自动续费。默认为不自动续费
         */
        this.AutoRenewFlag = null;

        /**
         * 是否自动选择代金券，可选值为：1 - 是；0 - 否； 默认为0
         */
        this.AutoVoucher = null;

        /**
         * 1:正式实例,2:临时实例,3:只读实例，4：灾备实例
         */
        this.Clone = null;

        /**
         * 若是只读，灾备实例，Father必须填写，即主实例ID
         */
        this.Father = null;

        /**
         * 安全组
         */
        this.SecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeNum: number | null;
        Memory: number | null;
        Volume: number | null;
        MongoVersion: string | null;
        GoodsNum: number | null;
        Zone: string | null;
        Period: number | null;
        MachineCode: string | null;
        ClusterType: string | null;
        ReplicateSetNum: number | null;
        ProjectId: number | null;
        VpcId: string | null;
        SubnetId: string | null;
        Password: string | null;
        Tags: Array<TagInfo> | null;
        AutoRenewFlag: number | null;
        AutoVoucher: number | null;
        Clone: number | null;
        Father: string | null;
        SecurityGroup: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.Clone = 'Clone' in params ? params.Clone : null;
        this.Father = 'Father' in params ? params.Father : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * IsolateDBInstance请求参数结构体
 * @class
 */
class IsolateDBInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ResetDBInstancePassword返回参数结构体
 * @class
 */
class ResetDBInstancePasswordResponse extends AbstractModel {

    AsyncRequestId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步请求Id，用户查询该流程的运行状态
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AsyncRequestId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBackupDBInstance返回参数结构体
 * @class
 */
class CreateBackupDBInstanceResponse extends AbstractModel {

    AsyncRequestId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 查询备份流程的状态
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AsyncRequestId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库实例价格
 * @class
 */
class DBInstancePrice extends AbstractModel {

    UnitPrice: number | null
    
    OriginalPrice: number | null
    
    DiscountPrice: number | null
    
    constructor(){
        super();

        /**
         * 单价
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UnitPrice = null;

        /**
         * 原价
         */
        this.OriginalPrice = null;

        /**
         * 折扣加
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UnitPrice: number | null;
        OriginalPrice: number | null;
        DiscountPrice: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * 备份文件存储信息
 * @class
 */
class BackupFile extends AbstractModel {

    ReplicateSetId: string | null
    
    File: string | null
    
    constructor(){
        super();

        /**
         * 备份文件所属的副本集/分片ID
         */
        this.ReplicateSetId = null;

        /**
         * 备份文件保存路径
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ReplicateSetId: string | null;
        File: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ReplicateSetId = 'ReplicateSetId' in params ? params.ReplicateSetId : null;
        this.File = 'File' in params ? params.File : null;

    }
}

/**
 * InquirePriceCreateDBInstances请求参数结构体
 * @class
 */
class InquirePriceCreateDBInstancesRequest extends AbstractModel {

    Zone: string | null
    
    NodeNum: number | null
    
    Memory: number | null
    
    Volume: number | null
    
    MongoVersion: string | null
    
    MachineCode: string | null
    
    GoodsNum: number | null
    
    Period: number | null
    
    ClusterType: string | null
    
    ReplicateSetNum: number | null
    
    constructor(){
        super();

        /**
         * 实例所属区域名称，格式如：ap-guangzhou-2
         */
        this.Zone = null;

        /**
         * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
         */
        this.NodeNum = null;

        /**
         * 实例内存大小，单位：GB
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB
         */
        this.Volume = null;

        /**
         * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本，MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本
         */
        this.MongoVersion = null;

        /**
         * 机器类型，HIO：高IO型；HIO10G：高IO万兆型；STDS5：标准型
         */
        this.MachineCode = null;

        /**
         * 实例数量, 最小值1，最大值为10
         */
        this.GoodsNum = null;

        /**
         * 实例时长，单位：月，可选值包括[1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         */
        this.Period = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群，STANDALONE-单节点
         */
        this.ClusterType = null;

        /**
         * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数；若为单节点实例，该参数设置为0
         */
        this.ReplicateSetNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        NodeNum: number | null;
        Memory: number | null;
        Volume: number | null;
        MongoVersion: string | null;
        MachineCode: string | null;
        GoodsNum: number | null;
        Period: number | null;
        ClusterType: string | null;
        ReplicateSetNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;

    }
}

/**
 * DescribeSlowLogPatterns返回参数结构体
 * @class
 */
class DescribeSlowLogPatternsResponse extends AbstractModel {

    Count: number | null
    
    SlowLogPatterns: Array<SlowLogPattern> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 慢日志统计信息总数
         */
        this.Count = null;

        /**
         * 慢日志统计信息
         */
        this.SlowLogPatterns = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Count: number | null;
        SlowLogPatterns: Array<SlowLogPattern> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;

        if (params.SlowLogPatterns) {
            this.SlowLogPatterns = new Array();
            for (let z in params.SlowLogPatterns) {
                let obj = new SlowLogPattern();
                obj.deserialize(params.SlowLogPatterns[z]);
                this.SlowLogPatterns.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于描述MongoDB数据库慢日志统计信息
 * @class
 */
class SlowLogPattern extends AbstractModel {

    Pattern: string | null
    
    MaxTime: number | null
    
    AverageTime: number | null
    
    Total: number | null
    
    constructor(){
        super();

        /**
         * 慢日志模式
         */
        this.Pattern = null;

        /**
         * 最大执行时间
         */
        this.MaxTime = null;

        /**
         * 平均执行时间
         */
        this.AverageTime = null;

        /**
         * 该模式慢日志条数
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Pattern: string | null;
        MaxTime: number | null;
        AverageTime: number | null;
        Total: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.MaxTime = 'MaxTime' in params ? params.MaxTime : null;
        this.AverageTime = 'AverageTime' in params ? params.AverageTime : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * CreateDBInstanceHour请求参数结构体
 * @class
 */
class CreateDBInstanceHourRequest extends AbstractModel {

    Memory: number | null
    
    Volume: number | null
    
    ReplicateSetNum: number | null
    
    NodeNum: number | null
    
    MongoVersion: string | null
    
    MachineCode: string | null
    
    GoodsNum: number | null
    
    Zone: string | null
    
    ClusterType: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    Password: string | null
    
    ProjectId: number | null
    
    Tags: Array<TagInfo> | null
    
    Clone: number | null
    
    Father: string | null
    
    SecurityGroup: Array<string> | null
    
    constructor(){
        super();

        /**
         * 实例内存大小，单位：GB
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB
         */
        this.Volume = null;

        /**
         * 副本集个数，创建副本集实例时，该参数必须设置为1；创建分片实例时，具体参照查询云数据库的售卖规格返回参数
         */
        this.ReplicateSetNum = null;

        /**
         * 每个副本集内节点个数，当前副本集节点数固定为3，分片从节点数可选，具体参照查询云数据库的售卖规格返回参数
         */
        this.NodeNum = null;

        /**
         * 版本号，具体支持的售卖版本请参照查询云数据库的售卖规格（DescribeSpecInfo）返回结果。参数与版本对应关系是MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本，MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本，MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本
         */
        this.MongoVersion = null;

        /**
         * 机器类型，HIO：高IO型；HIO10G：高IO万兆
         */
        this.MachineCode = null;

        /**
         * 实例数量，最小值1，最大值为10
         */
        this.GoodsNum = null;

        /**
         * 可用区信息，格式如：ap-guangzhou-2
         */
        this.Zone = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群
         */
        this.ClusterType = null;

        /**
         * 私有网络ID，如果不设置该参数则默认选择基础网络
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
         */
        this.SubnetId = null;

        /**
         * 实例密码，不设置该参数则需要在创建完成后通过设置密码接口初始化实例密码。密码必须是8-16位字符，且至少包含字母、数字和字符 !@#%^*() 中的两种
         */
        this.Password = null;

        /**
         * 项目ID，不设置为默认项目
         */
        this.ProjectId = null;

        /**
         * 实例标签信息
         */
        this.Tags = null;

        /**
         * 1:正式实例,2:临时实例,3:只读实例，4：灾备实例
         */
        this.Clone = null;

        /**
         * 父实例Id，当Clone为3或者4时，这个必须填
         */
        this.Father = null;

        /**
         * 安全组
         */
        this.SecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Memory: number | null;
        Volume: number | null;
        ReplicateSetNum: number | null;
        NodeNum: number | null;
        MongoVersion: string | null;
        MachineCode: string | null;
        GoodsNum: number | null;
        Zone: string | null;
        ClusterType: string | null;
        VpcId: string | null;
        SubnetId: string | null;
        Password: string | null;
        ProjectId: number | null;
        Tags: Array<TagInfo> | null;
        Clone: number | null;
        Father: string | null;
        SecurityGroup: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Clone = 'Clone' in params ? params.Clone : null;
        this.Father = 'Father' in params ? params.Father : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * AssignProject请求参数结构体
 * @class
 */
class AssignProjectRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    ProjectId: number | null
    
    constructor(){
        super();

        /**
         * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceIds = null;

        /**
         * 项目ID
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        ProjectId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeSlowLogs返回参数结构体
 * @class
 */
class DescribeSlowLogsResponse extends AbstractModel {

    Count: number | null
    
    SlowLogs: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 慢日志总数
         */
        this.Count = null;

        /**
         * 慢日志详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SlowLogs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Count: number | null;
        SlowLogs: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.SlowLogs = 'SlowLogs' in params ? params.SlowLogs : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 客户端连接信息，包括客户端IP和连接数
 * @class
 */
class ClientConnection extends AbstractModel {

    IP: string | null
    
    Count: number | null
    
    constructor(){
        super();

        /**
         * 连接的客户端IP
         */
        this.IP = null;

        /**
         * 对应客户端IP的连接数
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        IP: string | null;
        Count: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * InquirePriceModifyDBInstanceSpec请求参数结构体
 * @class
 */
class InquirePriceModifyDBInstanceSpecRequest extends AbstractModel {

    InstanceId: string | null
    
    Memory: number | null
    
    Volume: number | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。
         */
        this.InstanceId = null;

        /**
         * 变更配置后实例内存大小，单位：GB。
         */
        this.Memory = null;

        /**
         * 变更配置后实例磁盘大小，单位：GB。
         */
        this.Volume = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Memory: number | null;
        Volume: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * 备份信息
 * @class
 */
class BackupInfo extends AbstractModel {

    InstanceId: string | null
    
    BackupType: number | null
    
    BackupName: string | null
    
    BackupDesc: string | null
    
    BackupSize: number | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    Status: number | null
    
    BackupMethod: number | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 备份方式，0-自动备份，1-手动备份
         */
        this.BackupType = null;

        /**
         * 备份名称
         */
        this.BackupName = null;

        /**
         * 备份备注
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BackupDesc = null;

        /**
         * 备份文件大小，单位KB
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BackupSize = null;

        /**
         * 备份开始时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StartTime = null;

        /**
         * 备份结束时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EndTime = null;

        /**
         * 备份状态，1-备份中，2-备份成功
         */
        this.Status = null;

        /**
         * 备份方法，0-逻辑备份，1-物理备份
         */
        this.BackupMethod = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        BackupType: number | null;
        BackupName: string | null;
        BackupDesc: string | null;
        BackupSize: number | null;
        StartTime: string | null;
        EndTime: string | null;
        Status: number | null;
        BackupMethod: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;
        this.BackupDesc = 'BackupDesc' in params ? params.BackupDesc : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;

    }
}

/**
 * InquirePriceRenewDBInstances请求参数结构体
 * @class
 */
class InquirePriceRenewDBInstancesRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    InstanceChargePrepaid: InstanceChargePrepaid | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同，接口单次最多只支持5个实例进行操作。
         */
        this.InstanceIds = null;

        /**
         * 预付费模式（即包年包月）相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 * @class
 */
class DescribeAsyncRequestInfoRequest extends AbstractModel {

    AsyncRequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步请求Id
         */
        this.AsyncRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AsyncRequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;

    }
}

/**
 * 实例规格信息
 * @class
 */
class SpecificationInfo extends AbstractModel {

    Region: string | null
    
    Zone: string | null
    
    SpecItems: Array<SpecItem> | null
    
    constructor(){
        super();

        /**
         * 地域信息
         */
        this.Region = null;

        /**
         * 可用区信息
         */
        this.Zone = null;

        /**
         * 售卖规格信息
         */
        this.SpecItems = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        Zone: string | null;
        SpecItems: Array<SpecItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SpecItems) {
            this.SpecItems = new Array();
            for (let z in params.SpecItems) {
                let obj = new SpecItem();
                obj.deserialize(params.SpecItems[z]);
                this.SpecItems.push(obj);
            }
        }

    }
}

/**
 * DescribeSlowLogs请求参数结构体
 * @class
 */
class DescribeSlowLogsRequest extends AbstractModel {

    InstanceId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    SlowMS: number | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

        /**
         * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         */
        this.StartTime = null;

        /**
         * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         */
        this.EndTime = null;

        /**
         * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
         */
        this.SlowMS = null;

        /**
         * 偏移量，最小值为0，最大值为10000，默认值为0。
         */
        this.Offset = null;

        /**
         * 分页大小，最小值为1，最大值为100，默认值为20。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        StartTime: string | null;
        EndTime: string | null;
        SlowMS: number | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SlowMS = 'SlowMS' in params ? params.SlowMS : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSlowLogPatterns请求参数结构体
 * @class
 */
class DescribeSlowLogPatternsRequest extends AbstractModel {

    InstanceId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    SlowMS: number | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

        /**
         * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         */
        this.StartTime = null;

        /**
         * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
         */
        this.EndTime = null;

        /**
         * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
         */
        this.SlowMS = null;

        /**
         * 偏移量，最小值为0，最大值为10000，默认值为0。
         */
        this.Offset = null;

        /**
         * 分页大小，最小值为1，最大值为100，默认值为20。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        StartTime: string | null;
        EndTime: string | null;
        SlowMS: number | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SlowMS = 'SlowMS' in params ? params.SlowMS : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * FlushInstanceRouterConfig返回参数结构体
 * @class
 */
class FlushInstanceRouterConfigResponse extends AbstractModel {

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
 * InquirePriceModifyDBInstanceSpec返回参数结构体
 * @class
 */
class InquirePriceModifyDBInstanceSpecResponse extends AbstractModel {

    Price: DBInstancePrice | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 价格。
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
    deserialize(params: {
        Price: DBInstancePrice | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * mongodb售卖规格
 * @class
 */
class SpecItem extends AbstractModel {

    SpecCode: string | null
    
    Status: number | null
    
    Cpu: number | null
    
    Memory: number | null
    
    DefaultStorage: number | null
    
    MaxStorage: number | null
    
    MinStorage: number | null
    
    Qps: number | null
    
    Conns: number | null
    
    MongoVersionCode: string | null
    
    MongoVersionValue: number | null
    
    Version: string | null
    
    EngineName: string | null
    
    ClusterType: number | null
    
    MinNodeNum: number | null
    
    MaxNodeNum: number | null
    
    MinReplicateSetNum: number | null
    
    MaxReplicateSetNum: number | null
    
    MinReplicateSetNodeNum: number | null
    
    MaxReplicateSetNodeNum: number | null
    
    MachineType: string | null
    
    constructor(){
        super();

        /**
         * 规格信息标识
         */
        this.SpecCode = null;

        /**
         * 规格有效标志，取值：0-停止售卖，1-开放售卖
         */
        this.Status = null;

        /**
         * 规格有效标志，取值：0-停止售卖，1-开放售卖
         */
        this.Cpu = null;

        /**
         * 内存规格，单位为MB
         */
        this.Memory = null;

        /**
         * 默认磁盘规格，单位MB
         */
        this.DefaultStorage = null;

        /**
         * 最大磁盘规格，单位MB
         */
        this.MaxStorage = null;

        /**
         * 最小磁盘规格，单位MB
         */
        this.MinStorage = null;

        /**
         * 可承载qps信息
         */
        this.Qps = null;

        /**
         * 连接数限制
         */
        this.Conns = null;

        /**
         * 实例mongodb版本信息
         */
        this.MongoVersionCode = null;

        /**
         * 实例mongodb版本号
         */
        this.MongoVersionValue = null;

        /**
         * 实例mongodb版本号（短）
         */
        this.Version = null;

        /**
         * 存储引擎
         */
        this.EngineName = null;

        /**
         * 集群类型，取值：1-分片集群，0-副本集集群
         */
        this.ClusterType = null;

        /**
         * 最小副本集从节点数
         */
        this.MinNodeNum = null;

        /**
         * 最大副本集从节点数
         */
        this.MaxNodeNum = null;

        /**
         * 最小分片数
         */
        this.MinReplicateSetNum = null;

        /**
         * 最大分片数
         */
        this.MaxReplicateSetNum = null;

        /**
         * 最小分片从节点数
         */
        this.MinReplicateSetNodeNum = null;

        /**
         * 最大分片从节点数
         */
        this.MaxReplicateSetNodeNum = null;

        /**
         * 机器类型，取值：0-HIO，4-HIO10G
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SpecCode: string | null;
        Status: number | null;
        Cpu: number | null;
        Memory: number | null;
        DefaultStorage: number | null;
        MaxStorage: number | null;
        MinStorage: number | null;
        Qps: number | null;
        Conns: number | null;
        MongoVersionCode: string | null;
        MongoVersionValue: number | null;
        Version: string | null;
        EngineName: string | null;
        ClusterType: number | null;
        MinNodeNum: number | null;
        MaxNodeNum: number | null;
        MinReplicateSetNum: number | null;
        MaxReplicateSetNum: number | null;
        MinReplicateSetNodeNum: number | null;
        MaxReplicateSetNodeNum: number | null;
        MachineType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DefaultStorage = 'DefaultStorage' in params ? params.DefaultStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Conns = 'Conns' in params ? params.Conns : null;
        this.MongoVersionCode = 'MongoVersionCode' in params ? params.MongoVersionCode : null;
        this.MongoVersionValue = 'MongoVersionValue' in params ? params.MongoVersionValue : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.MinNodeNum = 'MinNodeNum' in params ? params.MinNodeNum : null;
        this.MaxNodeNum = 'MaxNodeNum' in params ? params.MaxNodeNum : null;
        this.MinReplicateSetNum = 'MinReplicateSetNum' in params ? params.MinReplicateSetNum : null;
        this.MaxReplicateSetNum = 'MaxReplicateSetNum' in params ? params.MaxReplicateSetNum : null;
        this.MinReplicateSetNodeNum = 'MinReplicateSetNodeNum' in params ? params.MinReplicateSetNodeNum : null;
        this.MaxReplicateSetNodeNum = 'MaxReplicateSetNodeNum' in params ? params.MaxReplicateSetNodeNum : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * DescribeSpecInfo返回参数结构体
 * @class
 */
class DescribeSpecInfoResponse extends AbstractModel {

    SpecInfoList: Array<SpecificationInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例售卖规格信息列表
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
    deserialize(params: {
        SpecInfoList: Array<SpecificationInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecificationInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceRenewDBInstances返回参数结构体
 * @class
 */
class InquirePriceRenewDBInstancesResponse extends AbstractModel {

    Price: DBInstancePrice | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 价格
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
    deserialize(params: {
        Price: DBInstancePrice | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetDBInstancePassword请求参数结构体
 * @class
 */
class ResetDBInstancePasswordRequest extends AbstractModel {

    InstanceId: string | null
    
    UserName: string | null
    
    Password: string | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 实例账号名
         */
        this.UserName = null;

        /**
         * 新密码
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        UserName: string | null;
        Password: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 实例标签信息
 * @class
 */
class TagInfo extends AbstractModel {

    TagKey: string | null
    
    TagValue: string | null
    
    constructor(){
        super();

        /**
         * 标签键
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
    deserialize(params: {
        TagKey: string | null;
        TagValue: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeDBInstances返回参数结构体
 * @class
 */
class DescribeDBInstancesResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceDetails: Array<InstanceDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         */
        this.InstanceDetails = null;

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
        InstanceDetails: Array<InstanceDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new InstanceDetail();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OfflineIsolatedDBInstance请求参数结构体
 * @class
 */
class OfflineIsolatedDBInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeDBInstanceDeal请求参数结构体
 * @class
 */
class DescribeDBInstanceDealRequest extends AbstractModel {

    DealId: string | null
    
    constructor(){
        super();

        /**
         * 订单ID，通过CreateDBInstance等接口返回
         */
        this.DealId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;

    }
}

/**
 * DescribeDBInstances请求参数结构体
 * @class
 */
class DescribeDBInstancesRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    InstanceType: number | null
    
    ClusterType: number | null
    
    Status: Array<number> | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    PayMode: number | null
    
    Limit: number | null
    
    Offset: number | null
    
    OrderBy: string | null
    
    OrderByType: string | null
    
    ProjectIds: Array<number> | null
    
    SearchKey: string | null
    
    constructor(){
        super();

        /**
         * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceIds = null;

        /**
         * 实例类型，取值范围：0-所有实例,1-正式实例，2-临时实例, 3-只读实例，-1-正式实例+只读+灾备实例
         */
        this.InstanceType = null;

        /**
         * 集群类型，取值范围：0-副本集实例，1-分片实例，-1-所有实例
         */
        this.ClusterType = null;

        /**
         * 实例状态，取值范围：0-待初始化，1-流程执行中，2-实例有效，-2-实例已过期
         */
        this.Status = null;

        /**
         * 私有网络的ID，基础网络则不传该参数
         */
        this.VpcId = null;

        /**
         * 私有网络的子网ID，基础网络则不传该参数。入参设置该参数的同时，必须设置相应的VpcId
         */
        this.SubnetId = null;

        /**
         * 付费类型，取值范围：0-按量计费，1-包年包月，-1-按量计费+包年包月
         */
        this.PayMode = null;

        /**
         * 单次请求返回的数量，最小值为1，最大值为100，默认值为20
         */
        this.Limit = null;

        /**
         * 偏移量，默认值为0
         */
        this.Offset = null;

        /**
         * 返回结果集排序的字段，目前支持："ProjectId", "InstanceName", "CreateTime"，默认为升序排序
         */
        this.OrderBy = null;

        /**
         * 返回结果集排序方式，目前支持："ASC"或者"DESC"
         */
        this.OrderByType = null;

        /**
         * 项目 ID
         */
        this.ProjectIds = null;

        /**
         * 搜索关键词，支持实例Id、实例名称、完整IP
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceType: number | null;
        ClusterType: number | null;
        Status: Array<number> | null;
        VpcId: string | null;
        SubnetId: string | null;
        PayMode: number | null;
        Limit: number | null;
        Offset: number | null;
        OrderBy: string | null;
        OrderByType: string | null;
        ProjectIds: Array<number> | null;
        SearchKey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeAsyncRequestInfo返回参数结构体
 * @class
 */
class DescribeAsyncRequestInfoResponse extends AbstractModel {

    Status: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 状态
         */
        this.Status = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstance返回参数结构体
 * @class
 */
class CreateDBInstanceResponse extends AbstractModel {

    DealId: string | null
    
    InstanceIds: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单ID
         */
        this.DealId = null;

        /**
         * 创建的实例ID列表
         */
        this.InstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealId: string | null;
        InstanceIds: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignProject返回参数结构体
 * @class
 */
class AssignProjectResponse extends AbstractModel {

    FlowIds: Array<number> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回的异步任务ID列表
         */
        this.FlowIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FlowIds: Array<number> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FlowIds = 'FlowIds' in params ? params.FlowIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBBackups请求参数结构体
 * @class
 */
class DescribeDBBackupsRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeClientConnections请求参数结构体
 * @class
 */
class DescribeClientConnectionsRequest extends AbstractModel {

    InstanceId: string | null
    
    Limit: number | null
    
    Offset: number | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

        /**
         * 查询返回记录条数，默认为10000。
         */
        this.Limit = null;

        /**
         * 偏移量，默认值为0。
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Limit: number | null;
        Offset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeDBInstanceDeal返回参数结构体
 * @class
 */
class DescribeDBInstanceDealResponse extends AbstractModel {

    Status: number | null
    
    OriginalPrice: number | null
    
    DiscountPrice: number | null
    
    Action: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单状态，1：未支付，2：已支付，3：发货中，4：发货成功，5：发货失败，6：退款，7：订单关闭，8：超时未支付关闭。
         */
        this.Status = null;

        /**
         * 订单原价。
         */
        this.OriginalPrice = null;

        /**
         * 订单折扣价格。
         */
        this.DiscountPrice = null;

        /**
         * 订单行为，purchase：新购，renew：续费，upgrade：升配，downgrade：降配，refund：退货退款。
         */
        this.Action = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        OriginalPrice: number | null;
        DiscountPrice: number | null;
        Action: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSpec返回参数结构体
 * @class
 */
class ModifyDBInstanceSpecResponse extends AbstractModel {

    DealId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单ID
         */
        this.DealId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例分片详情
 * @class
 */
class ShardInfo extends AbstractModel {

    UsedVolume: number | null
    
    ReplicaSetId: string | null
    
    ReplicaSetName: string | null
    
    Memory: number | null
    
    Volume: number | null
    
    OplogSize: number | null
    
    SecondaryNum: number | null
    
    RealReplicaSetId: string | null
    
    constructor(){
        super();

        /**
         * 分片已使用容量
         */
        this.UsedVolume = null;

        /**
         * 分片ID
         */
        this.ReplicaSetId = null;

        /**
         * 分片名
         */
        this.ReplicaSetName = null;

        /**
         * 分片内存规格，单位为MB
         */
        this.Memory = null;

        /**
         * 分片磁盘规格，单位为MB
         */
        this.Volume = null;

        /**
         * 分片Oplog大小，单位为MB
         */
        this.OplogSize = null;

        /**
         * 分片从节点数
         */
        this.SecondaryNum = null;

        /**
         * 分片物理id
         */
        this.RealReplicaSetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UsedVolume: number | null;
        ReplicaSetId: string | null;
        ReplicaSetName: string | null;
        Memory: number | null;
        Volume: number | null;
        OplogSize: number | null;
        SecondaryNum: number | null;
        RealReplicaSetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.UsedVolume = 'UsedVolume' in params ? params.UsedVolume : null;
        this.ReplicaSetId = 'ReplicaSetId' in params ? params.ReplicaSetId : null;
        this.ReplicaSetName = 'ReplicaSetName' in params ? params.ReplicaSetName : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.OplogSize = 'OplogSize' in params ? params.OplogSize : null;
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.RealReplicaSetId = 'RealReplicaSetId' in params ? params.RealReplicaSetId : null;

    }
}

/**
 * OfflineIsolatedDBInstance返回参数结构体
 * @class
 */
class OfflineIsolatedDBInstanceResponse extends AbstractModel {

    AsyncRequestId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AsyncRequestId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDBInstance返回参数结构体
 * @class
 */
class IsolateDBInstanceResponse extends AbstractModel {

    AsyncRequestId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
         */
        this.AsyncRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AsyncRequestId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AsyncRequestId = 'AsyncRequestId' in params ? params.AsyncRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupAccess请求参数结构体
 * @class
 */
class DescribeBackupAccessRequest extends AbstractModel {

    InstanceId: string | null
    
    BackupName: string | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

        /**
         * 需要获取下载授权的备份文件名
         */
        this.BackupName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        BackupName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupName = 'BackupName' in params ? params.BackupName : null;

    }
}

/**
 * RenameInstance请求参数结构体
 * @class
 */
class RenameInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    NewName: string | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

        /**
         * 实例名称
         */
        this.NewName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        NewName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NewName = 'NewName' in params ? params.NewName : null;

    }
}

/**
 * RenewDBInstances返回参数结构体
 * @class
 */
class RenewDBInstancesResponse extends AbstractModel {

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
 * RenameInstance返回参数结构体
 * @class
 */
class RenameInstanceResponse extends AbstractModel {

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
 * DescribeClientConnections返回参数结构体
 * @class
 */
class DescribeClientConnectionsResponse extends AbstractModel {

    Clients: Array<ClientConnection> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 客户端连接信息，包括客户端IP和对应IP的连接数量。
         */
        this.Clients = null;

        /**
         * 满足条件的记录总条数，可用于分页查询。
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
        Clients: Array<ClientConnection> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Clients) {
            this.Clients = new Array();
            for (let z in params.Clients) {
                let obj = new ClientConnection();
                obj.deserialize(params.Clients[z]);
                this.Clients.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlushInstanceRouterConfig请求参数结构体
 * @class
 */
class FlushInstanceRouterConfigRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 实例信息
 * @class
 */
class DBInstanceInfo extends AbstractModel {

    InstanceId: string | null
    
    Region: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 地域信息
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Region: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeBackupAccess返回参数结构体
 * @class
 */
class DescribeBackupAccessResponse extends AbstractModel {

    Region: string | null
    
    Bucket: string | null
    
    Files: Array<BackupFile> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例所属地域
         */
        this.Region = null;

        /**
         * 备份文件所在存储桶
         */
        this.Bucket = null;

        /**
         * 备份文件的存储信息
         */
        this.Files = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        Bucket: string | null;
        Files: Array<BackupFile> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new BackupFile();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBBackups返回参数结构体
 * @class
 */
class DescribeDBBackupsResponse extends AbstractModel {

    BackupList: Array<BackupInfo> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 备份列表
         */
        this.BackupList = null;

        /**
         * 备份总数
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
        BackupList: Array<BackupInfo> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new BackupInfo();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详情
 * @class
 */
class InstanceDetail extends AbstractModel {

    InstanceId: string | null
    
    InstanceName: string | null
    
    PayMode: number | null
    
    ProjectId: number | null
    
    ClusterType: number | null
    
    Region: string | null
    
    Zone: string | null
    
    NetType: number | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    Status: number | null
    
    Vip: string | null
    
    Vport: number | null
    
    CreateTime: string | null
    
    DeadLine: string | null
    
    MongoVersion: string | null
    
    Memory: number | null
    
    Volume: number | null
    
    CpuNum: number | null
    
    MachineType: string | null
    
    SecondaryNum: number | null
    
    ReplicationSetNum: number | null
    
    AutoRenewFlag: number | null
    
    UsedVolume: number | null
    
    MaintenanceStart: string | null
    
    MaintenanceEnd: string | null
    
    ReplicaSets: Array<ShardInfo> | null
    
    ReadonlyInstances: Array<DBInstanceInfo> | null
    
    StandbyInstances: Array<DBInstanceInfo> | null
    
    CloneInstances: Array<DBInstanceInfo> | null
    
    RelatedInstance: DBInstanceInfo | null
    
    Tags: Array<TagInfo> | null
    
    InstanceVer: number | null
    
    ClusterVer: number | null
    
    Protocol: number | null
    
    InstanceType: number | null
    
    InstanceStatusDesc: string | null
    
    RealInstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 实例名称
         */
        this.InstanceName = null;

        /**
         * 付费类型，可能的返回值：1-包年包月；0-按量计费
         */
        this.PayMode = null;

        /**
         * 项目ID
         */
        this.ProjectId = null;

        /**
         * 集群类型，可能的返回值：0-副本集实例，1-分片实例，
         */
        this.ClusterType = null;

        /**
         * 地域信息
         */
        this.Region = null;

        /**
         * 可用区信息
         */
        this.Zone = null;

        /**
         * 网络类型，可能的返回值：0-基础网络，1-私有网络
         */
        this.NetType = null;

        /**
         * 私有网络的ID
         */
        this.VpcId = null;

        /**
         * 私有网络的子网ID
         */
        this.SubnetId = null;

        /**
         * 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期
         */
        this.Status = null;

        /**
         * 实例IP
         */
        this.Vip = null;

        /**
         * 端口号
         */
        this.Vport = null;

        /**
         * 实例创建时间
         */
        this.CreateTime = null;

        /**
         * 实例到期时间
         */
        this.DeadLine = null;

        /**
         * 实例版本信息
         */
        this.MongoVersion = null;

        /**
         * 实例内存规格，单位为MB
         */
        this.Memory = null;

        /**
         * 实例磁盘规格，单位为MB
         */
        this.Volume = null;

        /**
         * 实例CPU核心数
         */
        this.CpuNum = null;

        /**
         * 实例机器类型
         */
        this.MachineType = null;

        /**
         * 实例从节点数
         */
        this.SecondaryNum = null;

        /**
         * 实例分片数
         */
        this.ReplicationSetNum = null;

        /**
         * 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费
         */
        this.AutoRenewFlag = null;

        /**
         * 已用容量，单位MB
         */
        this.UsedVolume = null;

        /**
         * 维护窗口起始时间
         */
        this.MaintenanceStart = null;

        /**
         * 维护窗口结束时间
         */
        this.MaintenanceEnd = null;

        /**
         * 分片信息
         */
        this.ReplicaSets = null;

        /**
         * 只读实例信息
         */
        this.ReadonlyInstances = null;

        /**
         * 灾备实例信息
         */
        this.StandbyInstances = null;

        /**
         * 临时实例信息
         */
        this.CloneInstances = null;

        /**
         * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息
         */
        this.RelatedInstance = null;

        /**
         * 实例标签信息集合
         */
        this.Tags = null;

        /**
         * 实例版本标记
         */
        this.InstanceVer = null;

        /**
         * 实例版本标记
         */
        this.ClusterVer = null;

        /**
         * 协议信息，可能的返回值：1-mongodb，2-dynamodb
         */
        this.Protocol = null;

        /**
         * 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例
         */
        this.InstanceType = null;

        /**
         * 实例状态描述
         */
        this.InstanceStatusDesc = null;

        /**
         * 实例对应的物理实例id，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取
         */
        this.RealInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        InstanceName: string | null;
        PayMode: number | null;
        ProjectId: number | null;
        ClusterType: number | null;
        Region: string | null;
        Zone: string | null;
        NetType: number | null;
        VpcId: string | null;
        SubnetId: string | null;
        Status: number | null;
        Vip: string | null;
        Vport: number | null;
        CreateTime: string | null;
        DeadLine: string | null;
        MongoVersion: string | null;
        Memory: number | null;
        Volume: number | null;
        CpuNum: number | null;
        MachineType: string | null;
        SecondaryNum: number | null;
        ReplicationSetNum: number | null;
        AutoRenewFlag: number | null;
        UsedVolume: number | null;
        MaintenanceStart: string | null;
        MaintenanceEnd: string | null;
        ReplicaSets: Array<ShardInfo> | null;
        ReadonlyInstances: Array<DBInstanceInfo> | null;
        StandbyInstances: Array<DBInstanceInfo> | null;
        CloneInstances: Array<DBInstanceInfo> | null;
        RelatedInstance: DBInstanceInfo | null;
        Tags: Array<TagInfo> | null;
        InstanceVer: number | null;
        ClusterVer: number | null;
        Protocol: number | null;
        InstanceType: number | null;
        InstanceStatusDesc: string | null;
        RealInstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeadLine = 'DeadLine' in params ? params.DeadLine : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.ReplicationSetNum = 'ReplicationSetNum' in params ? params.ReplicationSetNum : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.UsedVolume = 'UsedVolume' in params ? params.UsedVolume : null;
        this.MaintenanceStart = 'MaintenanceStart' in params ? params.MaintenanceStart : null;
        this.MaintenanceEnd = 'MaintenanceEnd' in params ? params.MaintenanceEnd : null;

        if (params.ReplicaSets) {
            this.ReplicaSets = new Array();
            for (let z in params.ReplicaSets) {
                let obj = new ShardInfo();
                obj.deserialize(params.ReplicaSets[z]);
                this.ReplicaSets.push(obj);
            }
        }

        if (params.ReadonlyInstances) {
            this.ReadonlyInstances = new Array();
            for (let z in params.ReadonlyInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.ReadonlyInstances[z]);
                this.ReadonlyInstances.push(obj);
            }
        }

        if (params.StandbyInstances) {
            this.StandbyInstances = new Array();
            for (let z in params.StandbyInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.StandbyInstances[z]);
                this.StandbyInstances.push(obj);
            }
        }

        if (params.CloneInstances) {
            this.CloneInstances = new Array();
            for (let z in params.CloneInstances) {
                let obj = new DBInstanceInfo();
                obj.deserialize(params.CloneInstances[z]);
                this.CloneInstances.push(obj);
            }
        }

        if (params.RelatedInstance) {
            let obj = new DBInstanceInfo();
            obj.deserialize(params.RelatedInstance)
            this.RelatedInstance = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceVer = 'InstanceVer' in params ? params.InstanceVer : null;
        this.ClusterVer = 'ClusterVer' in params ? params.ClusterVer : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceStatusDesc = 'InstanceStatusDesc' in params ? params.InstanceStatusDesc : null;
        this.RealInstanceId = 'RealInstanceId' in params ? params.RealInstanceId : null;

    }
}

/**
 * ModifyDBInstanceSpec请求参数结构体
 * @class
 */
class ModifyDBInstanceSpecRequest extends AbstractModel {

    InstanceId: string | null
    
    Memory: number | null
    
    Volume: number | null
    
    OplogSize: number | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

        /**
         * 实例配置变更后的内存大小，单位：GB。内存和磁盘必须同时升配或同时降配
         */
        this.Memory = null;

        /**
         * 实例配置变更后的硬盘大小，单位：GB。内存和磁盘必须同时升配或同时降配。降配时，新的磁盘参数必须大于已用磁盘容量的1.2倍
         */
        this.Volume = null;

        /**
         * 实例配置变更后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
         */
        this.OplogSize = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Memory: number | null;
        Volume: number | null;
        OplogSize: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.OplogSize = 'OplogSize' in params ? params.OplogSize : null;

    }
}

/**
 * CreateDBInstanceHour返回参数结构体
 * @class
 */
class CreateDBInstanceHourResponse extends AbstractModel {

    DealId: string | null
    
    InstanceIds: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单ID
         */
        this.DealId = null;

        /**
         * 创建的实例ID列表
         */
        this.InstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealId: string | null;
        InstanceIds: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBackupDBInstance请求参数结构体
 * @class
 */
class CreateBackupDBInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    BackupMethod: number | null
    
    BackupRemark: string | null
    
    constructor(){
        super();

        /**
         * 实例id
         */
        this.InstanceId = null;

        /**
         * 0-逻辑备份，1-物理备份
         */
        this.BackupMethod = null;

        /**
         * 备份备注
         */
        this.BackupRemark = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        BackupMethod: number | null;
        BackupRemark: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupMethod = 'BackupMethod' in params ? params.BackupMethod : null;
        this.BackupRemark = 'BackupRemark' in params ? params.BackupRemark : null;

    }
}

/**
 * 描述了实例的计费模式
 * @class
 */
class InstanceChargePrepaid extends AbstractModel {

    Period: number | null
    
    RenewFlag: string | null
    
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Period: number | null;
        RenewFlag: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * InquirePriceCreateDBInstances返回参数结构体
 * @class
 */
class InquirePriceCreateDBInstancesResponse extends AbstractModel {

    Price: DBInstancePrice | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 价格
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
    deserialize(params: {
        Price: DBInstancePrice | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new DBInstancePrice();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewDBInstances请求参数结构体
 * @class
 */
class RenewDBInstancesRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    InstanceChargePrepaid: InstanceChargePrepaid | null
    
    constructor(){
        super();

        /**
         * 一个或多个待操作的实例ID。可通过DescribeInstances接口返回值中的InstanceId获取。每次请求批量实例的上限为100。
         */
        this.InstanceIds = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

export const Models = {
    DescribeSpecInfoRequest: DescribeSpecInfoRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    ResetDBInstancePasswordResponse: ResetDBInstancePasswordResponse,
    CreateBackupDBInstanceResponse: CreateBackupDBInstanceResponse,
    DBInstancePrice: DBInstancePrice,
    BackupFile: BackupFile,
    InquirePriceCreateDBInstancesRequest: InquirePriceCreateDBInstancesRequest,
    DescribeSlowLogPatternsResponse: DescribeSlowLogPatternsResponse,
    SlowLogPattern: SlowLogPattern,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    AssignProjectRequest: AssignProjectRequest,
    DescribeSlowLogsResponse: DescribeSlowLogsResponse,
    ClientConnection: ClientConnection,
    InquirePriceModifyDBInstanceSpecRequest: InquirePriceModifyDBInstanceSpecRequest,
    BackupInfo: BackupInfo,
    InquirePriceRenewDBInstancesRequest: InquirePriceRenewDBInstancesRequest,
    DescribeAsyncRequestInfoRequest: DescribeAsyncRequestInfoRequest,
    SpecificationInfo: SpecificationInfo,
    DescribeSlowLogsRequest: DescribeSlowLogsRequest,
    DescribeSlowLogPatternsRequest: DescribeSlowLogPatternsRequest,
    FlushInstanceRouterConfigResponse: FlushInstanceRouterConfigResponse,
    InquirePriceModifyDBInstanceSpecResponse: InquirePriceModifyDBInstanceSpecResponse,
    SpecItem: SpecItem,
    DescribeSpecInfoResponse: DescribeSpecInfoResponse,
    InquirePriceRenewDBInstancesResponse: InquirePriceRenewDBInstancesResponse,
    ResetDBInstancePasswordRequest: ResetDBInstancePasswordRequest,
    TagInfo: TagInfo,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    OfflineIsolatedDBInstanceRequest: OfflineIsolatedDBInstanceRequest,
    DescribeDBInstanceDealRequest: DescribeDBInstanceDealRequest,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeAsyncRequestInfoResponse: DescribeAsyncRequestInfoResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    AssignProjectResponse: AssignProjectResponse,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    DescribeClientConnectionsRequest: DescribeClientConnectionsRequest,
    DescribeDBInstanceDealResponse: DescribeDBInstanceDealResponse,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    ShardInfo: ShardInfo,
    OfflineIsolatedDBInstanceResponse: OfflineIsolatedDBInstanceResponse,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    DescribeBackupAccessRequest: DescribeBackupAccessRequest,
    RenameInstanceRequest: RenameInstanceRequest,
    RenewDBInstancesResponse: RenewDBInstancesResponse,
    RenameInstanceResponse: RenameInstanceResponse,
    DescribeClientConnectionsResponse: DescribeClientConnectionsResponse,
    FlushInstanceRouterConfigRequest: FlushInstanceRouterConfigRequest,
    DBInstanceInfo: DBInstanceInfo,
    DescribeBackupAccessResponse: DescribeBackupAccessResponse,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    InstanceDetail: InstanceDetail,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    CreateBackupDBInstanceRequest: CreateBackupDBInstanceRequest,
    InstanceChargePrepaid: InstanceChargePrepaid,
    InquirePriceCreateDBInstancesResponse: InquirePriceCreateDBInstancesResponse,
    RenewDBInstancesRequest: RenewDBInstancesRequest,

}
