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
         * 可用区
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
 * TerminateDBInstance请求参数结构体
 * @class
 */
class TerminateDBInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。
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
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends AbstractModel {

    SecondaryNum: number | null
    
    Memory: number | null
    
    Volume: number | null
    
    MongoVersion: string | null
    
    MachineCode: string | null
    
    GoodsNum: number | null
    
    Zone: string | null
    
    TimeSpan: number | null
    
    Password: string | null
    
    ProjectId: number | null
    
    SecurityGroup: Array<string> | null
    
    UniqVpcId: string | null
    
    UniqSubnetId: string | null
    
    constructor(){
        super();

        /**
         * 每个副本集内从节点个数
         */
        this.SecondaryNum = null;

        /**
         * 实例内存大小，单位：GB
         */
        this.Memory = null;

        /**
         * 实例硬盘大小，单位：GB
         */
        this.Volume = null;

        /**
         * 版本号，当前支持 MONGO_3_WT、MONGO_3_ROCKS、MONGO_36_WT
         */
        this.MongoVersion = null;

        /**
         * 机器类型，GIO：高IO版；TGIO：高IO万兆
         */
        this.MachineCode = null;

        /**
         * 实例数量，默认值为1, 最小值1，最大值为10
         */
        this.GoodsNum = null;

        /**
         * 实例所属区域名称，格式如：ap-guangzhou-2
         */
        this.Zone = null;

        /**
         * 时长，购买月数
         */
        this.TimeSpan = null;

        /**
         * 实例密码
         */
        this.Password = null;

        /**
         * 项目ID，不填为默认项目
         */
        this.ProjectId = null;

        /**
         * 安全组参数
         */
        this.SecurityGroup = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络
         */
        this.UniqVpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
         */
        this.UniqSubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SecondaryNum: number | null;
        Memory: number | null;
        Volume: number | null;
        MongoVersion: string | null;
        MachineCode: string | null;
        GoodsNum: number | null;
        Zone: string | null;
        TimeSpan: number | null;
        Password: string | null;
        ProjectId: number | null;
        SecurityGroup: Array<string> | null;
        UniqVpcId: string | null;
        UniqSubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.MongoVersion = 'MongoVersion' in params ? params.MongoVersion : null;
        this.MachineCode = 'MachineCode' in params ? params.MachineCode : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;

    }
}

/**
 * UpgradeDBInstanceHour请求参数结构体
 * @class
 */
class UpgradeDBInstanceHourRequest extends AbstractModel {

    InstanceId: string | null
    
    Memory: number | null
    
    Volume: number | null
    
    OplogSize: number | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5
         */
        this.InstanceId = null;

        /**
         * 升级后的内存大小，单位：GB
         */
        this.Memory = null;

        /**
         * 升级后的硬盘大小，单位：GB
         */
        this.Volume = null;

        /**
         * 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
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
 * CreateDBInstanceHour请求参数结构体
 * @class
 */
class CreateDBInstanceHourRequest extends AbstractModel {

    Memory: number | null
    
    Volume: number | null
    
    ReplicateSetNum: number | null
    
    SecondaryNum: number | null
    
    EngineVersion: string | null
    
    Machine: string | null
    
    GoodsNum: number | null
    
    Zone: string | null
    
    InstanceRole: string | null
    
    InstanceType: string | null
    
    Encrypt: number | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    ProjectId: number | null
    
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
         * 副本集个数，1为单副本集实例，大于1为分片集群实例，最大不超过10
         */
        this.ReplicateSetNum = null;

        /**
         * 每个副本集内从节点个数，目前只支持从节点数为2
         */
        this.SecondaryNum = null;

        /**
         * MongoDB引擎版本，值包括MONGO_3_WT 、MONGO_3_ROCKS和MONGO_36_WT
         */
        this.EngineVersion = null;

        /**
         * 实例类型，GIO：高IO版；TGIO：高IO万兆
         */
        this.Machine = null;

        /**
         * 实例数量，默认值为1, 最小值1，最大值为10
         */
        this.GoodsNum = null;

        /**
         * 可用区信息，格式如：ap-guangzhou-2
         */
        this.Zone = null;

        /**
         * 实例角色，支持值包括：MASTER-表示主实例，DR-表示灾备实例，RO-表示只读实例
         */
        this.InstanceRole = null;

        /**
         * 实例类型，REPLSET-副本集，SHARD-分片集群
         */
        this.InstanceType = null;

        /**
         * 数据是否加密，当且仅当引擎版本为MONGO_3_ROCKS，可以选择加密
         */
        this.Encrypt = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络
         */
        this.VpcId = null;

        /**
         * 私有网络下的子网ID，如果设置了 VpcId，则 SubnetId必填
         */
        this.SubnetId = null;

        /**
         * 项目ID，不填为默认项目
         */
        this.ProjectId = null;

        /**
         * 安全组参数
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
        SecondaryNum: number | null;
        EngineVersion: string | null;
        Machine: string | null;
        GoodsNum: number | null;
        Zone: string | null;
        InstanceRole: string | null;
        InstanceType: string | null;
        Encrypt: number | null;
        VpcId: string | null;
        SubnetId: string | null;
        ProjectId: number | null;
        SecurityGroup: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.ReplicateSetNum = 'ReplicateSetNum' in params ? params.ReplicateSetNum : null;
        this.SecondaryNum = 'SecondaryNum' in params ? params.SecondaryNum : null;
        this.EngineVersion = 'EngineVersion' in params ? params.EngineVersion : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Encrypt = 'Encrypt' in params ? params.Encrypt : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
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

    }
}

/**
 * SetPassword返回参数结构体
 * @class
 */
class SetPasswordResponse extends AbstractModel {

    FlowId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回的异步任务ID
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
    deserialize(params: {
        FlowId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 实例详情
 * @class
 */
class MongoDBInstanceDetail extends AbstractModel {

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
    
    ReplicaSets: Array<MongodbShardInfo> | null
    
    ReadonlyInstances: Array<MongoDBInstance> | null
    
    StandbyInstances: Array<MongoDBInstance> | null
    
    CloneInstances: Array<MongoDBInstance> | null
    
    RelatedInstance: MongoDBInstance | null
    
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
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ReadonlyInstances = null;

        /**
         * 灾备实例信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StandbyInstances = null;

        /**
         * 临时实例信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CloneInstances = null;

        /**
         * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RelatedInstance = null;

        /**
         * 实例标签信息集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Tags = null;

        /**
         * 实例标记
         */
        this.InstanceVer = null;

        /**
         * 实例标记
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
         * 实例对应的物理实例ID，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取
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
        ReplicaSets: Array<MongodbShardInfo> | null;
        ReadonlyInstances: Array<MongoDBInstance> | null;
        StandbyInstances: Array<MongoDBInstance> | null;
        CloneInstances: Array<MongoDBInstance> | null;
        RelatedInstance: MongoDBInstance | null;
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
                let obj = new MongodbShardInfo();
                obj.deserialize(params.ReplicaSets[z]);
                this.ReplicaSets.push(obj);
            }
        }

        if (params.ReadonlyInstances) {
            this.ReadonlyInstances = new Array();
            for (let z in params.ReadonlyInstances) {
                let obj = new MongoDBInstance();
                obj.deserialize(params.ReadonlyInstances[z]);
                this.ReadonlyInstances.push(obj);
            }
        }

        if (params.StandbyInstances) {
            this.StandbyInstances = new Array();
            for (let z in params.StandbyInstances) {
                let obj = new MongoDBInstance();
                obj.deserialize(params.StandbyInstances[z]);
                this.StandbyInstances.push(obj);
            }
        }

        if (params.CloneInstances) {
            this.CloneInstances = new Array();
            for (let z in params.CloneInstances) {
                let obj = new MongoDBInstance();
                obj.deserialize(params.CloneInstances[z]);
                this.CloneInstances.push(obj);
            }
        }

        if (params.RelatedInstance) {
            let obj = new MongoDBInstance();
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
 * 实例标签信息
 * @class
 */
class TagInfo extends AbstractModel {

    TagKey: string | null
    
    TagValue: string | null
    
    constructor(){
        super();

        /**
         * 标签Key值
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
 * DescribeSlowLog返回参数结构体
 * @class
 */
class DescribeSlowLogResponse extends AbstractModel {

    TotalCount: number | null
    
    SlowLogList: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合查询条件的慢查询日志总数。
         */
        this.TotalCount = null;

        /**
         * 符合查询条件的慢查询日志详情。
         */
        this.SlowLogList = null;

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
        SlowLogList: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.SlowLogList = 'SlowLogList' in params ? params.SlowLogList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances返回参数结构体
 * @class
 */
class DescribeDBInstancesResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceDetails: Array<MongoDBInstanceDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合查询条件的实例总数
         */
        this.TotalCount = null;

        /**
         * 实例详细信息
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
        InstanceDetails: Array<MongoDBInstanceDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new MongoDBInstanceDetail();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }
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
 * SetPassword请求参数结构体
 * @class
 */
class SetPasswordRequest extends AbstractModel {

    InstanceId: string | null
    
    UserName: string | null
    
    Password: string | null
    
    constructor(){
        super();

        /**
         * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

        /**
         * 实例账户名称
         */
        this.UserName = null;

        /**
         * 实例新密码，至少包含字母、数字和字符（!@#%^*()）中的两种，长度为8-16个字符
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
 * DescribeSlowLog请求参数结构体
 * @class
 */
class DescribeSlowLogRequest extends AbstractModel {

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
 * DescribeClientConnections请求参数结构体
 * @class
 */
class DescribeClientConnectionsRequest extends AbstractModel {

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
 * SetAutoRenew返回参数结构体
 * @class
 */
class SetAutoRenewResponse extends AbstractModel {

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
 * 实例信息
 * @class
 */
class MongoDBInstance extends AbstractModel {

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
 * UpgradeDBInstance返回参数结构体
 * @class
 */
class UpgradeDBInstanceResponse extends AbstractModel {

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
 * SetAutoRenew请求参数结构体
 * @class
 */
class SetAutoRenewRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    AutoRenewFlag: number | null
    
    constructor(){
        super();

        /**
         * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceIds = null;

        /**
         * 续费选项，取值范围：0-手动续费，1-自动续费，2-确认不续费
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        AutoRenewFlag: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

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
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 客户端连接信息，包括客户端IP和对应IP的连接数量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Clients = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstanceHour返回参数结构体
 * @class
 */
class UpgradeDBInstanceHourResponse extends AbstractModel {

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
 * UpgradeDBInstance请求参数结构体
 * @class
 */
class UpgradeDBInstanceRequest extends AbstractModel {

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
         * 升级后的内存大小，单位：GB
         */
        this.Memory = null;

        /**
         * 升级后的硬盘大小，单位：GB
         */
        this.Volume = null;

        /**
         * 升级后oplog的大小，单位：GB，默认为磁盘空间的10%，允许设置的最小值为磁盘的10%，最大值为磁盘的90%
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
 * TerminateDBInstance返回参数结构体
 * @class
 */
class TerminateDBInstanceResponse extends AbstractModel {

    AsyncRequestId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单ID，表示注销实例成功
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
 * 实例分片详情
 * @class
 */
class MongodbShardInfo extends AbstractModel {

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
         * 分片物理ID
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
 * mongodb售卖规格
 * @class
 */
class SpecItem extends AbstractModel {

    SpecCode: string | null
    
    Status: number | null
    
    MachineType: string | null
    
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
         * 机器类型，取值：0-HIO，4-HIO10G
         */
        this.MachineType = null;

        /**
         * cpu核心数
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

    }

    /**
     * @private
     */
    deserialize(params: {
        SpecCode: string | null;
        Status: number | null;
        MachineType: string | null;
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
    }): void {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
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

    }
}

export const Models = {
    DescribeSpecInfoRequest: DescribeSpecInfoRequest,
    TerminateDBInstanceRequest: TerminateDBInstanceRequest,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    UpgradeDBInstanceHourRequest: UpgradeDBInstanceHourRequest,
    CreateDBInstanceHourRequest: CreateDBInstanceHourRequest,
    AssignProjectRequest: AssignProjectRequest,
    ClientConnection: ClientConnection,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    SetPasswordResponse: SetPasswordResponse,
    SpecificationInfo: SpecificationInfo,
    MongoDBInstanceDetail: MongoDBInstanceDetail,
    DescribeSpecInfoResponse: DescribeSpecInfoResponse,
    TagInfo: TagInfo,
    DescribeSlowLogResponse: DescribeSlowLogResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    SetPasswordRequest: SetPasswordRequest,
    AssignProjectResponse: AssignProjectResponse,
    DescribeSlowLogRequest: DescribeSlowLogRequest,
    DescribeClientConnectionsRequest: DescribeClientConnectionsRequest,
    SetAutoRenewResponse: SetAutoRenewResponse,
    MongoDBInstance: MongoDBInstance,
    RenameInstanceRequest: RenameInstanceRequest,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    SetAutoRenewRequest: SetAutoRenewRequest,
    RenameInstanceResponse: RenameInstanceResponse,
    DescribeClientConnectionsResponse: DescribeClientConnectionsResponse,
    UpgradeDBInstanceHourResponse: UpgradeDBInstanceHourResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    CreateDBInstanceHourResponse: CreateDBInstanceHourResponse,
    TerminateDBInstanceResponse: TerminateDBInstanceResponse,
    MongodbShardInfo: MongodbShardInfo,
    SpecItem: SpecItem,

}
