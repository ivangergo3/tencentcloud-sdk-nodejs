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
 * ModifyInstanceParams返回参数结构体
 * @class
 */
class ModifyInstanceParamsResponse extends AbstractModel {

    Changed: boolean | null
    
    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 修改是否成功。
         */
        this.Changed = null;

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Changed: boolean | null;
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Changed = 'Changed' in params ? params.Changed : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例的备份数组
 * @class
 */
class RedisBackupSet extends AbstractModel {

    StartTime: string | null
    
    BackupId: string | null
    
    BackupType: string | null
    
    Status: number | null
    
    Remark: string | null
    
    Locked: number | null
    
    constructor(){
        super();

        /**
         * 开始备份的时间
         */
        this.StartTime = null;

        /**
         * 备份ID
         */
        this.BackupId = null;

        /**
         * 备份类型。 manualBackupInstance：用户发起的手动备份； systemBackupInstance：凌晨系统发起的备份
         */
        this.BackupType = null;

        /**
         * 备份状态。  1:"备份被其它流程锁定";  2:"备份正常，没有被任何流程锁定";  -1:"备份已过期"； 3:"备份正在被导出";  4:"备份导出成功"
         */
        this.Status = null;

        /**
         * 备份的备注信息
         */
        this.Remark = null;

        /**
         * 备份是否被锁定，0：未被锁定；1：已被锁定
         */
        this.Locked = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        BackupId: string | null;
        BackupType: string | null;
        Status: number | null;
        Remark: string | null;
        Locked: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Locked = 'Locked' in params ? params.Locked : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd返回参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdResponse extends AbstractModel {

    Data: Array<SourceCommand> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 访问命令信息
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
    deserialize(params: {
        Data: Array<SourceCommand> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SourceCommand();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackupConfig返回参数结构体
 * @class
 */
class ModifyAutoBackupConfigResponse extends AbstractModel {

    AutoBackupType: number | null
    
    WeekDays: Array<string> | null
    
    TimePeriod: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 自动备份类型： 1 “定时回档”
         */
        this.AutoBackupType = null;

        /**
         * 日期Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
         */
        this.WeekDays = null;

        /**
         * 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00
         */
        this.TimePeriod = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AutoBackupType: number | null;
        WeekDays: Array<string> | null;
        TimePeriod: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreInstance请求参数结构体
 * @class
 */
class RestoreInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    BackupId: string | null
    
    Password: string | null
    
    constructor(){
        super();

        /**
         * 待操作的实例ID，可通过 DescribeRedis 接口返回值中的 redisId 获取。
         */
        this.InstanceId = null;

        /**
         * 备份ID，可通过 GetRedisBackupList 接口返回值中的 backupId 获取
         */
        this.BackupId = null;

        /**
         * 实例密码，恢复实例时，需要校验实例密码（免密实例不需要传密码）
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        BackupId: string | null;
        Password: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 任务信息详情
 * @class
 */
class TaskInfoDetail extends AbstractModel {

    TaskId: number | null
    
    StartTime: string | null
    
    TaskType: string | null
    
    InstanceName: string | null
    
    InstanceId: string | null
    
    ProjectId: number | null
    
    Progress: number | null
    
    EndTime: string | null
    
    Result: number | null
    
    constructor(){
        super();

        /**
         * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TaskId = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StartTime = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TaskType = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceName = null;

        /**
         * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceId = null;

        /**
         * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectId = null;

        /**
         * 任务进度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Progress = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EndTime = null;

        /**
         * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        StartTime: string | null;
        TaskType: string | null;
        InstanceName: string | null;
        InstanceId: string | null;
        ProjectId: number | null;
        Progress: number | null;
        EndTime: string | null;
        Result: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * SwitchInstanceVip请求参数结构体
 * @class
 */
class SwitchInstanceVipRequest extends AbstractModel {

    SrcInstanceId: string | null
    
    DstInstanceId: string | null
    
    TimeDelay: number | null
    
    ForceSwitch: number | null
    
    SwitchTime: string | null
    
    constructor(){
        super();

        /**
         * 源实例ID
         */
        this.SrcInstanceId = null;

        /**
         * 目标实例ID
         */
        this.DstInstanceId = null;

        /**
         * 单位为秒。源实例与目标实例间DTS已断开时间，如果DTS断开时间大于TimeDelay，则不切换VIP，建议尽量根据业务设置一个可接受的值。
         */
        this.TimeDelay = null;

        /**
         * 在DTS断开的情况下是否强制切换。1：强制切换，0：不强制切换
         */
        this.ForceSwitch = null;

        /**
         * now: 立即切换，syncComplete：等待同步完成后切换
         */
        this.SwitchTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SrcInstanceId: string | null;
        DstInstanceId: string | null;
        TimeDelay: number | null;
        ForceSwitch: number | null;
        SwitchTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SrcInstanceId = 'SrcInstanceId' in params ? params.SrcInstanceId : null;
        this.DstInstanceId = 'DstInstanceId' in params ? params.DstInstanceId : null;
        this.TimeDelay = 'TimeDelay' in params ? params.TimeDelay : null;
        this.ForceSwitch = 'ForceSwitch' in params ? params.ForceSwitch : null;
        this.SwitchTime = 'SwitchTime' in params ? params.SwitchTime : null;

    }
}

/**
 * UpgradeInstanceVersion返回参数结构体
 * @class
 */
class UpgradeInstanceVersionResponse extends AbstractModel {

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
 * CreateInstances请求参数结构体
 * @class
 */
class CreateInstancesRequest extends AbstractModel {

    ZoneId: number | null
    
    TypeId: number | null
    
    MemSize: number | null
    
    GoodsNum: number | null
    
    Period: number | null
    
    BillingMode: number | null
    
    Password: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    ProjectId: number | null
    
    AutoRenew: number | null
    
    SecurityGroupIdList: Array<string> | null
    
    VPort: number | null
    
    RedisShardNum: number | null
    
    RedisReplicasNum: number | null
    
    ReplicasReadonly: boolean | null
    
    InstanceName: string | null
    
    NoAuth: boolean | null
    
    constructor(){
        super();

        /**
         * 实例所属的可用区ID
         */
        this.ZoneId = null;

        /**
         * 实例类型：2 – Redis2.8内存版（标准架构），3 – Redis3.2内存版（标准架构），4 – CKV 3.2内存版(标准架构)，6 – Redis4.0内存版（标准架构），7 – Redis4.0内存版（集群架构），8 – Redis5.0内存版（标准架构），9 – Redis5.0内存版（集群架构），
         */
        this.TypeId = null;

        /**
         * 实例容量，单位MB， 取值大小以 查询售卖规格接口返回的规格为准
         */
        this.MemSize = null;

        /**
         * 实例数量，单次购买实例数量以 查询售卖规格接口返回的规格为准
         */
        this.GoodsNum = null;

        /**
         * 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         */
        this.Period = null;

        /**
         * 付费方式:0-按量计费，1-包年包月。
         */
        this.BillingMode = null;

        /**
         * 实例密码，8-30个字符，至少包含小写字母、大写字母、数字和字符 ()`~!@#$%^&*-+=_|{}[]:;<>,.?/ 中的2种，不能以"/"开头。
         */
        this.Password = null;

        /**
         * 私有网络ID，如果不传则默认选择基础网络，请使用私有网络列表查询，如：vpc-sad23jfdfk
         */
        this.VpcId = null;

        /**
         * 基础网络下， subnetId无效； vpc子网下，取值以查询子网列表，如：subnet-fdj24n34j2
         */
        this.SubnetId = null;

        /**
         * 项目id，取值以用户账户>用户账户相关接口查询>项目列表返回的projectId为准
         */
        this.ProjectId = null;

        /**
         * 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费
         */
        this.AutoRenew = null;

        /**
         * 安全组id数组
         */
        this.SecurityGroupIdList = null;

        /**
         * 用户自定义的端口 不填则默认为6379，范围[1024,65535]
         */
        this.VPort = null;

        /**
         * 实例分片数量，购买标准版实例不需要填写，集群版分片数量范围[3,5,8,12,16,24,32,64,96,128]
         */
        this.RedisShardNum = null;

        /**
         * 实例副本数量，Redis 2.8标准版、CKV标准版只支持1副本，4.0、5.0标准版和集群版支持1-5个副本。
         */
        this.RedisReplicasNum = null;

        /**
         * 是否支持副本只读，Redis 2.8标准版、CKV标准版不支持副本只读，开启副本只读，实例将自动读写分离，写请求路由到主节点，读请求路由到副本节点，如需开启副本只读建议副本数>=2.
         */
        this.ReplicasReadonly = null;

        /**
         * 实例名称，长度小于60的中文/英文/数字/"-"/"_"
         */
        this.InstanceName = null;

        /**
         * 是否支持免密，true-免密实例，false-非免密实例，默认为非免密实例，仅VPC网络的实例支持免密码访问。
         */
        this.NoAuth = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneId: number | null;
        TypeId: number | null;
        MemSize: number | null;
        GoodsNum: number | null;
        Period: number | null;
        BillingMode: number | null;
        Password: string | null;
        VpcId: string | null;
        SubnetId: string | null;
        ProjectId: number | null;
        AutoRenew: number | null;
        SecurityGroupIdList: Array<string> | null;
        VPort: number | null;
        RedisShardNum: number | null;
        RedisReplicasNum: number | null;
        ReplicasReadonly: boolean | null;
        InstanceName: string | null;
        NoAuth: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.SecurityGroupIdList = 'SecurityGroupIdList' in params ? params.SecurityGroupIdList : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

    }
}

/**
 * ModifyNetworkConfig返回参数结构体
 * @class
 */
class ModifyNetworkConfigResponse extends AbstractModel {

    Status: boolean | null
    
    SubnetId: string | null
    
    VpcId: string | null
    
    Vip: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 执行状态：true|false
         */
        this.Status = null;

        /**
         * 子网ID
         */
        this.SubnetId = null;

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * VIP地址
         */
        this.Vip = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: boolean | null;
        SubnetId: string | null;
        VpcId: string | null;
        Vip: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命令耗时
 * @class
 */
class CommandTake extends AbstractModel {

    Cmd: string | null
    
    Took: number | null
    
    constructor(){
        super();

        /**
         * 命令
         */
        this.Cmd = null;

        /**
         * 耗时
         */
        this.Took = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Cmd: string | null;
        Took: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Took = 'Took' in params ? params.Took : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey返回参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyResponse extends AbstractModel {

    Data: Array<BigKeyInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 大Key详细信息
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
    deserialize(params: {
        Data: Array<BigKeyInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BigKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组入站规则
 * @class
 */
class Inbound extends AbstractModel {

    Action: string | null
    
    AddressModule: string | null
    
    CidrIp: string | null
    
    Desc: string | null
    
    IpProtocol: string | null
    
    PortRange: string | null
    
    ServiceModule: string | null
    
    Id: string | null
    
    constructor(){
        super();

        /**
         * 策略，ACCEPT或者DROP。
         */
        this.Action = null;

        /**
         * 地址组id代表的地址集合。
         */
        this.AddressModule = null;

        /**
         * 来源Ip或Ip段，例如192.168.0.0/16。
         */
        this.CidrIp = null;

        /**
         * 描述。
         */
        this.Desc = null;

        /**
         * 网络协议，支持udp、tcp等。
         */
        this.IpProtocol = null;

        /**
         * 端口。
         */
        this.PortRange = null;

        /**
         * 服务组id代表的协议和端口集合。
         */
        this.ServiceModule = null;

        /**
         * 安全组id代表的地址集合。
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Action: string | null;
        AddressModule: string | null;
        CidrIp: string | null;
        Desc: string | null;
        IpProtocol: string | null;
        PortRange: string | null;
        ServiceModule: string | null;
        Id: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest extends AbstractModel {

    Product: string | null
    
    SecurityGroupId: string | null
    
    InstanceIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb 等。
         */
        this.Product = null;

        /**
         * 要绑定的安全组ID，类似sg-efil73jd。
         */
        this.SecurityGroupId = null;

        /**
         * 被绑定的实例ID，类似ins-lesecurk，支持指定多个实例。
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Product: string | null;
        SecurityGroupId: string | null;
        InstanceIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeTaskList返回参数结构体
 * @class
 */
class DescribeTaskListResponse extends AbstractModel {

    TotalCount: number | null
    
    Tasks: Array<TaskInfoDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务总数
         */
        this.TotalCount = null;

        /**
         * 任务详细信息
         */
        this.Tasks = null;

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
        Tasks: Array<TaskInfoDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfoDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstance请求参数结构体
 * @class
 */
class ModifyInstanceRequest extends AbstractModel {

    Operation: string | null
    
    InstanceIds: Array<string> | null
    
    InstanceNames: Array<string> | null
    
    ProjectId: number | null
    
    AutoRenews: Array<number> | null
    
    InstanceId: string | null
    
    InstanceName: string | null
    
    AutoRenew: number | null
    
    constructor(){
        super();

        /**
         * 修改实例操作，如填写：rename-表示实例重命名；modifyProject-修改实例所属项目；modifyAutoRenew-修改实例续费标记
         */
        this.Operation = null;

        /**
         * 实例Id
         */
        this.InstanceIds = null;

        /**
         * 实例的新名称
         */
        this.InstanceNames = null;

        /**
         * 项目Id
         */
        this.ProjectId = null;

        /**
         * 自动续费标识。0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费
         */
        this.AutoRenews = null;

        /**
         * 已经废弃
         */
        this.InstanceId = null;

        /**
         * 已经废弃
         */
        this.InstanceName = null;

        /**
         * 已经废弃
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Operation: string | null;
        InstanceIds: Array<string> | null;
        InstanceNames: Array<string> | null;
        ProjectId: number | null;
        AutoRenews: Array<number> | null;
        InstanceId: string | null;
        InstanceName: string | null;
        AutoRenew: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenews = 'AutoRenews' in params ? params.AutoRenews : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * RenewInstance返回参数结构体
 * @class
 */
class RenewInstanceResponse extends AbstractModel {

    DealId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 交易ID
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
 * DescribeSlowLog返回参数结构体
 * @class
 */
class DescribeSlowLogResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceSlowlogDetail: Array<InstanceSlowlogDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 慢查询总数
         */
        this.TotalCount = null;

        /**
         * 慢查询详情
         */
        this.InstanceSlowlogDetail = null;

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
        InstanceSlowlogDetail: Array<InstanceSlowlogDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceSlowlogDetail) {
            this.InstanceSlowlogDetail = new Array();
            for (let z in params.InstanceSlowlogDetail) {
                let obj = new InstanceSlowlogDetail();
                obj.deserialize(params.InstanceSlowlogDetail[z]);
                this.InstanceSlowlogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 * @class
 */
class DescribeDBSecurityGroupsResponse extends AbstractModel {

    Groups: Array<SecurityGroup> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 安全组规则
         */
        this.Groups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Groups: Array<SecurityGroup> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupUrl请求参数结构体
 * @class
 */
class DescribeBackupUrlRequest extends AbstractModel {

    InstanceId: string | null
    
    BackupId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 备份ID，通过DescribeInstanceBackups接口可查
         */
        this.BackupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        BackupId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceSet: Array<InstanceSet> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例数
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         */
        this.InstanceSet = null;

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
        InstanceSet: Array<InstanceSet> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new InstanceSet();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例枚举类型参数描述
 * @class
 */
class InstanceEnumParam extends AbstractModel {

    ParamName: string | null
    
    ValueType: string | null
    
    NeedRestart: string | null
    
    DefaultValue: string | null
    
    CurrentValue: string | null
    
    Tips: string | null
    
    EnumValue: Array<string> | null
    
    Status: number | null
    
    constructor(){
        super();

        /**
         * 参数名
         */
        this.ParamName = null;

        /**
         * 参数类型：enum
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         */
        this.Tips = null;

        /**
         * 参数可取值
         */
        this.EnumValue = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ParamName: string | null;
        ValueType: string | null;
        NeedRestart: string | null;
        DefaultValue: string | null;
        CurrentValue: string | null;
        Tips: string | null;
        EnumValue: Array<string> | null;
        Status: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 子账号信息
 * @class
 */
class Account extends AbstractModel {

    InstanceId: string | null
    
    AccountName: string | null
    
    Remark: string | null
    
    Privilege: string | null
    
    ReadonlyPolicy: Array<string> | null
    
    Status: number | null
    
    constructor(){
        super();

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceId = null;

        /**
         * 账号名称（如果是主账号，名称为root）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AccountName = null;

        /**
         * 账号描述信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Remark = null;

        /**
         * 读写策略：r-只读，w-只写，rw-读写
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Privilege = null;

        /**
         * 路由策略：master-主节点，replication-从节点
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ReadonlyPolicy = null;

        /**
         * 子账号状态：1-账号变更中，2-账号有效，-4-账号已删除
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        AccountName: string | null;
        Remark: string | null;
        Privilege: string | null;
        ReadonlyPolicy: Array<string> | null;
        Status: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 安全组出入规则
 * @class
 */
class SecurityGroupsInboundAndOutbound extends AbstractModel {

    Action: string | null
    
    Ip: string | null
    
    Port: string | null
    
    Proto: string | null
    
    constructor(){
        super();

        /**
         * 执行动作
         */
        this.Action = null;

        /**
         * IP地址
         */
        this.Ip = null;

        /**
         * 端口号
         */
        this.Port = null;

        /**
         * 协议类型
         */
        this.Proto = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Action: string | null;
        Ip: string | null;
        Port: string | null;
        Proto: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;

    }
}

/**
 * ResetPassword返回参数结构体
 * @class
 */
class ResetPasswordResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID（修改密码时的任务ID，如果时切换免密码或者非免密码实例，则无需关注此返回值）
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearInstance请求参数结构体
 * @class
 */
class ClearInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    Password: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * redis的实例密码（免密实例不需要传密码，非免密实例必传）
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Password: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 地域信息
 * @class
 */
class RegionConf extends AbstractModel {

    RegionId: string | null
    
    RegionName: string | null
    
    RegionShortName: string | null
    
    Area: string | null
    
    ZoneSet: Array<ZoneCapacityConf> | null
    
    constructor(){
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
         * 地域简称
         */
        this.RegionShortName = null;

        /**
         * 地域所在大区名称
         */
        this.Area = null;

        /**
         * 可用区信息
         */
        this.ZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegionId: string | null;
        RegionName: string | null;
        RegionShortName: string | null;
        Area: string | null;
        ZoneSet: Array<ZoneCapacityConf> | null;
    }): void {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionShortName = 'RegionShortName' in params ? params.RegionShortName : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneCapacityConf();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }

    }
}

/**
 * 大Key详情
 * @class
 */
class BigKeyInfo extends AbstractModel {

    DB: number | null
    
    Key: string | null
    
    Type: string | null
    
    Size: number | null
    
    Updatetime: number | null
    
    constructor(){
        super();

        /**
         * 所属的database
         */
        this.DB = null;

        /**
         * 大Key
         */
        this.Key = null;

        /**
         * 类型
         */
        this.Type = null;

        /**
         * 大小
         */
        this.Size = null;

        /**
         * 数据时间戳
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DB: number | null;
        Key: string | null;
        Type: string | null;
        Size: number | null;
        Updatetime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.DB = 'DB' in params ? params.DB : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * RenewInstance请求参数结构体
 * @class
 */
class RenewInstanceRequest extends AbstractModel {

    Period: number | null
    
    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 购买时长，单位：月
         */
        this.Period = null;

        /**
         * 实例ID
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Period: number | null;
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceParamRecords返回参数结构体
 * @class
 */
class DescribeInstanceParamRecordsResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceParamHistory: Array<InstanceParamHistory> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 总的修改历史记录数。
         */
        this.TotalCount = null;

        /**
         * 修改历史记录信息。
         */
        this.InstanceParamHistory = null;

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
        InstanceParamHistory: Array<InstanceParamHistory> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceParamHistory) {
            this.InstanceParamHistory = new Array();
            for (let z in params.InstanceParamHistory) {
                let obj = new InstanceParamHistory();
                obj.deserialize(params.InstanceParamHistory[z]);
                this.InstanceParamHistory.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackupConfig请求参数结构体
 * @class
 */
class ModifyAutoBackupConfigRequest extends AbstractModel {

    InstanceId: string | null
    
    WeekDays: Array<string> | null
    
    TimePeriod: string | null
    
    AutoBackupType: number | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 日期 Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday
         */
        this.WeekDays = null;

        /**
         * 时间段 00:00-01:00, 01:00-02:00...... 23:00-00:00
         */
        this.TimePeriod = null;

        /**
         * 自动备份类型： 1 “定时回档”
         */
        this.AutoBackupType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        WeekDays: Array<string> | null;
        TimePeriod: string | null;
        AutoBackupType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;

    }
}

/**
 * 实例多选项类型参数描述
 * @class
 */
class InstanceMultiParam extends AbstractModel {

    ParamName: string | null
    
    ValueType: string | null
    
    NeedRestart: string | null
    
    DefaultValue: string | null
    
    CurrentValue: string | null
    
    Tips: string | null
    
    EnumValue: Array<string> | null
    
    Status: number | null
    
    constructor(){
        super();

        /**
         * 参数名
         */
        this.ParamName = null;

        /**
         * 参数类型：multi
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         */
        this.Tips = null;

        /**
         * 参数说明
         */
        this.EnumValue = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ParamName: string | null;
        ValueType: string | null;
        NeedRestart: string | null;
        DefaultValue: string | null;
        CurrentValue: string | null;
        Tips: string | null;
        EnumValue: Array<string> | null;
        Status: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeInstanceDealDetail请求参数结构体
 * @class
 */
class DescribeInstanceDealDetailRequest extends AbstractModel {

    DealIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 订单ID数组
         */
        this.DealIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.DealIds = 'DealIds' in params ? params.DealIds : null;

    }
}

/**
 * DescribeProjectSecurityGroup请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupRequest extends AbstractModel {

    ProjectId: number | null
    
    SecurityGroupId: string | null
    
    constructor(){
        super();

        /**
         * 0:默认项目；-1 所有项目; >0: 特定项目
         */
        this.ProjectId = null;

        /**
         * 安全组Id
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: number | null;
        SecurityGroupId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * RestoreInstance返回参数结构体
 * @class
 */
class RestoreInstanceResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID，可通过 DescribeTaskInfo 接口查询任务执行状态
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceShards返回参数结构体
 * @class
 */
class DescribeInstanceShardsResponse extends AbstractModel {

    InstanceShards: Array<InstanceClusterShard> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例分片列表信息
         */
        this.InstanceShards = null;

        /**
         * 实例分片节点总数
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
        InstanceShards: Array<InstanceClusterShard> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InstanceShards) {
            this.InstanceShards = new Array();
            for (let z in params.InstanceShards) {
                let obj = new InstanceClusterShard();
                obj.deserialize(params.InstanceShards[z]);
                this.InstanceShards.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPrepaidInstance请求参数结构体
 * @class
 */
class DestroyPrepaidInstanceRequest extends AbstractModel {

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
 * ManualBackupInstance返回参数结构体
 * @class
 */
class ManualBackupInstanceResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例标签信息
 * @class
 */
class InstanceTagInfo extends AbstractModel {

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
 * DescribeInstanceDTSInfo返回参数结构体
 * @class
 */
class DescribeInstanceDTSInfoResponse extends AbstractModel {

    JobId: string | null
    
    JobName: string | null
    
    Status: number | null
    
    StatusDesc: string | null
    
    Offset: number | null
    
    CutDownTime: string | null
    
    SrcInfo: DescribeInstanceDTSInstanceInfo | null
    
    DstInfo: DescribeInstanceDTSInstanceInfo | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * DTS任务ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.JobId = null;

        /**
         * DTS任务名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.JobName = null;

        /**
         * 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;

        /**
         * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StatusDesc = null;

        /**
         * 同步时延，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Offset = null;

        /**
         * 断开时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CutDownTime = null;

        /**
         * 源实例信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SrcInfo = null;

        /**
         * 目标实例信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DstInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        JobId: string | null;
        JobName: string | null;
        Status: number | null;
        StatusDesc: string | null;
        Offset: number | null;
        CutDownTime: string | null;
        SrcInfo: DescribeInstanceDTSInstanceInfo | null;
        DstInfo: DescribeInstanceDTSInstanceInfo | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CutDownTime = 'CutDownTime' in params ? params.CutDownTime : null;

        if (params.SrcInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPostpaidInstance返回参数结构体
 * @class
 */
class DestroyPostpaidInstanceResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务Id
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstance返回参数结构体
 * @class
 */
class ModifyInstanceResponse extends AbstractModel {

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
 * 订单交易信息
 * @class
 */
class TradeDealDetail extends AbstractModel {

    DealId: string | null
    
    DealName: string | null
    
    ZoneId: number | null
    
    GoodsNum: number | null
    
    Creater: string | null
    
    CreatTime: string | null
    
    OverdueTime: string | null
    
    EndTime: string | null
    
    Status: number | null
    
    Description: string | null
    
    Price: number | null
    
    InstanceIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 订单号ID，调用云API时使用此ID
         */
        this.DealId = null;

        /**
         * 长订单ID，反馈订单问题给官方客服使用此ID
         */
        this.DealName = null;

        /**
         * 可用区id
         */
        this.ZoneId = null;

        /**
         * 订单关联的实例数
         */
        this.GoodsNum = null;

        /**
         * 创建用户uin
         */
        this.Creater = null;

        /**
         * 订单创建时间
         */
        this.CreatTime = null;

        /**
         * 订单超时时间
         */
        this.OverdueTime = null;

        /**
         * 订单完成时间
         */
        this.EndTime = null;

        /**
         * 订单状态 1：未支付 2:已支付，未发货 3:发货中 4:发货成功 5:发货失败 6:已退款 7:已关闭订单 8:订单过期 9:订单已失效 10:产品已失效 11:代付拒绝 12:支付中
         */
        this.Status = null;

        /**
         * 订单状态描述
         */
        this.Description = null;

        /**
         * 订单实际总价，单位：分
         */
        this.Price = null;

        /**
         * 实例ID
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealId: string | null;
        DealName: string | null;
        ZoneId: number | null;
        GoodsNum: number | null;
        Creater: string | null;
        CreatTime: string | null;
        OverdueTime: string | null;
        EndTime: string | null;
        Status: number | null;
        Description: string | null;
        Price: number | null;
        InstanceIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;
        this.OverdueTime = 'OverdueTime' in params ? params.OverdueTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 访问来源信息
 * @class
 */
class SourceInfo extends AbstractModel {

    Ip: string | null
    
    Conn: number | null
    
    Cmd: number | null
    
    constructor(){
        super();

        /**
         * 来源IP
         */
        this.Ip = null;

        /**
         * 连接数
         */
        this.Conn = null;

        /**
         * 命令
         */
        this.Cmd = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Ip: string | null;
        Conn: number | null;
        Cmd: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Conn = 'Conn' in params ? params.Conn : null;
        this.Cmd = 'Cmd' in params ? params.Cmd : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends AbstractModel {

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
 * DescribeInstanceMonitorHotKey请求参数结构体
 * @class
 */
class DescribeInstanceMonitorHotKeyRequest extends AbstractModel {

    InstanceId: string | null
    
    SpanType: number | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        SpanType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DescribeInstanceDTSInfo请求参数结构体
 * @class
 */
class DescribeInstanceDTSInfoRequest extends AbstractModel {

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
 * DescribeProductInfo返回参数结构体
 * @class
 */
class DescribeProductInfoResponse extends AbstractModel {

    RegionSet: Array<RegionConf> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 地域售卖信息
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
    deserialize(params: {
        RegionSet: Array<RegionConf> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionConf();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAccount请求参数结构体
 * @class
 */
class ModifyInstanceAccountRequest extends AbstractModel {

    InstanceId: string | null
    
    AccountName: string | null
    
    AccountPassword: string | null
    
    Remark: string | null
    
    ReadonlyPolicy: Array<string> | null
    
    Privilege: string | null
    
    NoAuth: boolean | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 子账号名称，如果要修改主账号，填root
         */
        this.AccountName = null;

        /**
         * 子账号密码
         */
        this.AccountPassword = null;

        /**
         * 子账号描述信息
         */
        this.Remark = null;

        /**
         * 子账号路由策略：填写master或者slave，表示路由主节点，从节点
         */
        this.ReadonlyPolicy = null;

        /**
         * 子账号读写策略：填写r、w、rw，表示只读，只写，读写策略
         */
        this.Privilege = null;

        /**
         * true表示将主账号切换为免密账号，这里只适用于主账号，子账号不可免密
         */
        this.NoAuth = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        AccountName: string | null;
        AccountPassword: string | null;
        Remark: string | null;
        ReadonlyPolicy: Array<string> | null;
        Privilege: string | null;
        NoAuth: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

    }
}

/**
 * DescribeBackupUrl返回参数结构体
 * @class
 */
class DescribeBackupUrlResponse extends AbstractModel {

    DownloadUrl: Array<string> | null
    
    InnerDownloadUrl: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 外网下载地址（6小时）
         */
        this.DownloadUrl = null;

        /**
         * 内网下载地址（6小时）
         */
        this.InnerDownloadUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DownloadUrl: Array<string> | null;
        InnerDownloadUrl: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.InnerDownloadUrl = 'InnerDownloadUrl' in params ? params.InnerDownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceRenewInstance返回参数结构体
 * @class
 */
class InquiryPriceRenewInstanceResponse extends AbstractModel {

    Price: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
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
        Price: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 * @class
 */
class DescribeDBSecurityGroupsRequest extends AbstractModel {

    Product: string | null
    
    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb 等。
         */
        this.Product = null;

        /**
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同。
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Product: string | null;
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * InquiryPriceCreateInstance返回参数结构体
 * @class
 */
class InquiryPriceCreateInstanceResponse extends AbstractModel {

    Price: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
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
        Price: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例安全组信息
 * @class
 */
class InstanceSecurityGroupDetail extends AbstractModel {

    InstanceId: string | null
    
    SecurityGroupDetails: Array<SecurityGroupDetail> | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 安全组信息
         */
        this.SecurityGroupDetails = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        SecurityGroupDetails: Array<SecurityGroupDetail> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }

    }
}

/**
 * ResetPassword请求参数结构体
 * @class
 */
class ResetPasswordRequest extends AbstractModel {

    InstanceId: string | null
    
    Password: string | null
    
    NoAuth: boolean | null
    
    constructor(){
        super();

        /**
         * Redis实例ID
         */
        this.InstanceId = null;

        /**
         * 重置的密码（切换为免密实例时，可不传；其他情况必传）
         */
        this.Password = null;

        /**
         * 是否切换免密实例，false-切换为非免密码实例，true-切换为免密码实例；默认false
         */
        this.NoAuth = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Password: string | null;
        NoAuth: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

    }
}

/**
 * ModifyInstanceAccount返回参数结构体
 * @class
 */
class ModifyInstanceAccountResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 延时分布详情
 * @class
 */
class DelayDistribution extends AbstractModel {

    Ladder: number | null
    
    Size: number | null
    
    Updatetime: number | null
    
    constructor(){
        super();

        /**
         * 分布阶梯
         */
        this.Ladder = null;

        /**
         * 大小
         */
        this.Size = null;

        /**
         * 修改时间
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Ladder: number | null;
        Size: number | null;
        Updatetime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Ladder = 'Ladder' in params ? params.Ladder : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends AbstractModel {

    Groups: Array<SecurityGroup> | null
    
    Total: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 安全组规则。
         */
        this.Groups = null;

        /**
         * 符合条件的安全组总数量。
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
        Groups: Array<SecurityGroup> | null;
        Total: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist返回参数结构体
 * @class
 */
class DescribeInstanceMonitorTookDistResponse extends AbstractModel {

    Data: Array<DelayDistribution> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 时延分布信息
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
    deserialize(params: {
        Data: Array<DelayDistribution> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceBackups返回参数结构体
 * @class
 */
class DescribeInstanceBackupsResponse extends AbstractModel {

    TotalCount: number | null
    
    BackupSet: Array<RedisBackupSet> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 备份总数
         */
        this.TotalCount = null;

        /**
         * 实例的备份数组
         */
        this.BackupSet = null;

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
        BackupSet: Array<RedisBackupSet> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.BackupSet) {
            this.BackupSet = new Array();
            for (let z in params.BackupSet) {
                let obj = new RedisBackupSet();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例整型参数描述
 * @class
 */
class InstanceIntegerParam extends AbstractModel {

    ParamName: string | null
    
    ValueType: string | null
    
    NeedRestart: string | null
    
    DefaultValue: string | null
    
    CurrentValue: string | null
    
    Tips: string | null
    
    Min: string | null
    
    Max: string | null
    
    Status: number | null
    
    constructor(){
        super();

        /**
         * 参数名
         */
        this.ParamName = null;

        /**
         * 参数类型：integer
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         */
        this.Tips = null;

        /**
         * 参数最小值
         */
        this.Min = null;

        /**
         * 参数最大值
         */
        this.Max = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ParamName: string | null;
        ValueType: string | null;
        NeedRestart: string | null;
        DefaultValue: string | null;
        CurrentValue: string | null;
        Tips: string | null;
        Min: string | null;
        Max: string | null;
        Status: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist请求参数结构体
 * @class
 */
class DescribeInstanceMonitorTookDistRequest extends AbstractModel {

    InstanceId: string | null
    
    Date: string | null
    
    SpanType: number | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 时间；例如："20190219"
         */
        this.Date = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Date: string | null;
        SpanType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * ModifyMaintenanceWindow请求参数结构体
 * @class
 */
class ModifyMaintenanceWindowRequest extends AbstractModel {

    InstanceId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 维护时间窗起始时间，如：17:00
         */
        this.StartTime = null;

        /**
         * 维护时间窗结束时间，如：19:00
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
 * 实例字符型参数描述
 * @class
 */
class InstanceTextParam extends AbstractModel {

    ParamName: string | null
    
    ValueType: string | null
    
    NeedRestart: string | null
    
    DefaultValue: string | null
    
    CurrentValue: string | null
    
    Tips: string | null
    
    TextValue: Array<string> | null
    
    Status: number | null
    
    constructor(){
        super();

        /**
         * 参数名
         */
        this.ParamName = null;

        /**
         * 参数类型：text
         */
        this.ValueType = null;

        /**
         * 修改后是否需要重启：true，false
         */
        this.NeedRestart = null;

        /**
         * 参数默认值
         */
        this.DefaultValue = null;

        /**
         * 当前运行参数值
         */
        this.CurrentValue = null;

        /**
         * 参数说明
         */
        this.Tips = null;

        /**
         * 参数可取值
         */
        this.TextValue = null;

        /**
         * 参数状态, 1: 修改中， 2：修改完成
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ParamName: string | null;
        ValueType: string | null;
        NeedRestart: string | null;
        DefaultValue: string | null;
        CurrentValue: string | null;
        Tips: string | null;
        TextValue: Array<string> | null;
        Status: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.TextValue = 'TextValue' in params ? params.TextValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook返回参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookResponse extends AbstractModel {

    Data: Array<CommandTake> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 耗时详细信息
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
    deserialize(params: {
        Data: Array<CommandTake> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CommandTake();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeySizeDist请求参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistRequest extends AbstractModel {

    InstanceId: string | null
    
    Date: string | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 时间；例如："20190219"
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Date: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceAccount请求参数结构体
 * @class
 */
class DescribeInstanceAccountRequest extends AbstractModel {

    InstanceId: string | null
    
    Limit: number | null
    
    Offset: number | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 分页大小
         */
        this.Limit = null;

        /**
         * 分页偏移量
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
 * DescribeInstanceParamRecords请求参数结构体
 * @class
 */
class DescribeInstanceParamRecordsRequest extends AbstractModel {

    InstanceId: string | null
    
    Limit: number | null
    
    Offset: number | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 分页大小
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
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
 * DescribeTaskList请求参数结构体
 * @class
 */
class DescribeTaskListRequest extends AbstractModel {

    InstanceId: string | null
    
    InstanceName: string | null
    
    Limit: number | null
    
    Offset: number | null
    
    ProjectIds: Array<number> | null
    
    TaskTypes: Array<string> | null
    
    BeginTime: string | null
    
    EndTime: string | null
    
    TaskStatus: Array<number> | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 实例名称
         */
        this.InstanceName = null;

        /**
         * 分页大小
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍（自动向下取整）
         */
        this.Offset = null;

        /**
         * 项目Id
         */
        this.ProjectIds = null;

        /**
         * 任务类型
         */
        this.TaskTypes = null;

        /**
         * 起始时间
         */
        this.BeginTime = null;

        /**
         * 终止时间
         */
        this.EndTime = null;

        /**
         * 任务状态
         */
        this.TaskStatus = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        InstanceName: string | null;
        Limit: number | null;
        Offset: number | null;
        ProjectIds: Array<number> | null;
        TaskTypes: Array<string> | null;
        BeginTime: string | null;
        EndTime: string | null;
        TaskStatus: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;

    }
}

/**
 * DisableReplicaReadonly返回参数结构体
 * @class
 */
class DisableReplicaReadonlyResponse extends AbstractModel {

    Status: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 失败:ERROR，成功:OK
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
 * CreateInstances返回参数结构体
 * @class
 */
class CreateInstancesResponse extends AbstractModel {

    DealId: string | null
    
    InstanceIds: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 交易的ID
         */
        this.DealId = null;

        /**
         * 实例ID(该字段灰度中，部分地域不可见)
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
 * DescribeTaskInfo请求参数结构体
 * @class
 */
class DescribeTaskInfoRequest extends AbstractModel {

    TaskId: number | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd请求参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdRequest extends AbstractModel {

    InstanceId: string | null
    
    SpanType: number | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        SpanType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * ModifyNetworkConfig请求参数结构体
 * @class
 */
class ModifyNetworkConfigRequest extends AbstractModel {

    InstanceId: string | null
    
    Operation: string | null
    
    Vip: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 操作类型：changeVip——修改实例VIP；changeVpc——修改实例子网；changeBaseToVpc——基础网络转VPC网络
         */
        this.Operation = null;

        /**
         * VIP地址，changeVip的时候填写，不填则默认分配
         */
        this.Vip = null;

        /**
         * 私有网络ID，changeVpc、changeBaseToVpc的时候需要提供
         */
        this.VpcId = null;

        /**
         * 子网ID，changeVpc、changeBaseToVpc的时候需要提供
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Operation: string | null;
        Vip: string | null;
        VpcId: string | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeInstanceSecurityGroup请求参数结构体
 * @class
 */
class DescribeInstanceSecurityGroupRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 实例列表
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 实例参数修改历史
 * @class
 */
class InstanceParamHistory extends AbstractModel {

    ParamName: string | null
    
    PreValue: string | null
    
    NewValue: string | null
    
    Status: number | null
    
    ModifyTime: string | null
    
    constructor(){
        super();

        /**
         * 参数名称
         */
        this.ParamName = null;

        /**
         * 修改前值
         */
        this.PreValue = null;

        /**
         * 修改后值
         */
        this.NewValue = null;

        /**
         * 状态：1-参数配置修改中；2-参数配置修改成功；3-参数配置修改失败
         */
        this.Status = null;

        /**
         * 修改时间
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ParamName: string | null;
        PreValue: string | null;
        NewValue: string | null;
        Status: number | null;
        ModifyTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.PreValue = 'PreValue' in params ? params.PreValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeInstanceParams请求参数结构体
 * @class
 */
class DescribeInstanceParamsRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例Id
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
 * CleanUpInstance返回参数结构体
 * @class
 */
class CleanUpInstanceResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends AbstractModel {

    Product: string | null
    
    SecurityGroupIds: Array<string> | null
    
    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb 等。
         */
        this.Product = null;

        /**
         * 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。
         */
        this.SecurityGroupIds = null;

        /**
         * 实例ID，格式如：cdb-c1nl9rpv或者cdbro-c1nl9rpv，与云数据库控制台页面中显示的实例ID相同
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Product: string | null;
        SecurityGroupIds: Array<string> | null;
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceShards请求参数结构体
 * @class
 */
class DescribeInstanceShardsRequest extends AbstractModel {

    InstanceId: string | null
    
    FilterSlave: boolean | null
    
    constructor(){
        super();

        /**
         * 实例id
         */
        this.InstanceId = null;

        /**
         * 是否过滤掉从节信息
         */
        this.FilterSlave = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        FilterSlave: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FilterSlave = 'FilterSlave' in params ? params.FilterSlave : null;

    }
}

/**
 * 安全组出站规则
 * @class
 */
class Outbound extends AbstractModel {

    Action: string | null
    
    AddressModule: string | null
    
    CidrIp: string | null
    
    Desc: string | null
    
    IpProtocol: string | null
    
    PortRange: string | null
    
    ServiceModule: string | null
    
    Id: string | null
    
    constructor(){
        super();

        /**
         * 策略，ACCEPT或者DROP。
         */
        this.Action = null;

        /**
         * 地址组id代表的地址集合。
         */
        this.AddressModule = null;

        /**
         * 来源Ip或Ip段，例如192.168.0.0/16。
         */
        this.CidrIp = null;

        /**
         * 描述。
         */
        this.Desc = null;

        /**
         * 网络协议，支持udp、tcp等。
         */
        this.IpProtocol = null;

        /**
         * 端口。
         */
        this.PortRange = null;

        /**
         * 服务组id代表的协议和端口集合。
         */
        this.ServiceModule = null;

        /**
         * 安全组id代表的地址集合。
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Action: string | null;
        AddressModule: string | null;
        CidrIp: string | null;
        Desc: string | null;
        IpProtocol: string | null;
        PortRange: string | null;
        ServiceModule: string | null;
        Id: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeAutoBackupConfig返回参数结构体
 * @class
 */
class DescribeAutoBackupConfigResponse extends AbstractModel {

    AutoBackupType: number | null
    
    WeekDays: Array<string> | null
    
    TimePeriod: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 备份类型。自动备份类型： 1 “定时回档”
         */
        this.AutoBackupType = null;

        /**
         * Monday，Tuesday，Wednesday，Thursday，Friday，Saturday，Sunday。
         */
        this.WeekDays = null;

        /**
         * 时间段。
         */
        this.TimePeriod = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AutoBackupType: number | null;
        WeekDays: Array<string> | null;
        TimePeriod: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeInstance请求参数结构体
 * @class
 */
class InquiryPriceUpgradeInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    MemSize: number | null
    
    RedisShardNum: number | null
    
    RedisReplicasNum: number | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 分片大小 单位 MB
         */
        this.MemSize = null;

        /**
         * 分片数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         */
        this.RedisShardNum = null;

        /**
         * 副本数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         */
        this.RedisReplicasNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        MemSize: number | null;
        RedisShardNum: number | null;
        RedisReplicasNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

    }
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends AbstractModel {

    Product: string | null
    
    ProjectId: number | null
    
    Offset: number | null
    
    Limit: number | null
    
    SearchKey: string | null
    
    constructor(){
        super();

        /**
         * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb
         */
        this.Product = null;

        /**
         * 项目Id。
         */
        this.ProjectId = null;

        /**
         * 偏移量。
         */
        this.Offset = null;

        /**
         * 拉取数量限制。
         */
        this.Limit = null;

        /**
         * 搜索条件，支持安全组id或者安全组名称。
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Product: string | null;
        ProjectId: number | null;
        Offset: number | null;
        Limit: number | null;
        SearchKey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeySizeDist返回参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistResponse extends AbstractModel {

    Data: Array<DelayDistribution> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 大Key大小分布详情
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
    deserialize(params: {
        Data: Array<DelayDistribution> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组规则
 * @class
 */
class SecurityGroup extends AbstractModel {

    CreateTime: string | null
    
    ProjectId: number | null
    
    SecurityGroupId: string | null
    
    SecurityGroupName: string | null
    
    SecurityGroupRemark: string | null
    
    Outbound: Array<Outbound> | null
    
    Inbound: Array<Inbound> | null
    
    constructor(){
        super();

        /**
         * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss。
         */
        this.CreateTime = null;

        /**
         * 项目ID。
         */
        this.ProjectId = null;

        /**
         * 安全组ID。
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称。
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注。
         */
        this.SecurityGroupRemark = null;

        /**
         * 出站规则。
         */
        this.Outbound = null;

        /**
         * 入站规则。
         */
        this.Inbound = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CreateTime: string | null;
        ProjectId: number | null;
        SecurityGroupId: string | null;
        SecurityGroupName: string | null;
        SecurityGroupRemark: string | null;
        Outbound: Array<Outbound> | null;
        Inbound: Array<Inbound> | null;
    }): void {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new Outbound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new Inbound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

    }
}

/**
 * CreateInstanceAccount请求参数结构体
 * @class
 */
class CreateInstanceAccountRequest extends AbstractModel {

    InstanceId: string | null
    
    AccountName: string | null
    
    AccountPassword: string | null
    
    ReadonlyPolicy: Array<string> | null
    
    Privilege: string | null
    
    Remark: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 子账号名称
         */
        this.AccountName = null;

        /**
         * 子账号密码
         */
        this.AccountPassword = null;

        /**
         * 路由策略：填写master或者replication，表示主节点或者从节点
         */
        this.ReadonlyPolicy = null;

        /**
         * 读写策略：填写r、rw，表示只读、读写
         */
        this.Privilege = null;

        /**
         * 子账号描述信息
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        AccountName: string | null;
        AccountPassword: string | null;
        ReadonlyPolicy: Array<string> | null;
        Privilege: string | null;
        Remark: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * EnableReplicaReadonly返回参数结构体
 * @class
 */
class EnableReplicaReadonlyResponse extends AbstractModel {

    Status: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 错误：ERROR，正确OK。
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
 * DescribeMaintenanceWindow返回参数结构体
 * @class
 */
class DescribeMaintenanceWindowResponse extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 维护时间窗起始时间，如：17:00
         */
        this.StartTime = null;

        /**
         * 维护时间窗结束时间，如：19:00
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
        StartTime: string | null;
        EndTime: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceSecurityGroup返回参数结构体
 * @class
 */
class DescribeInstanceSecurityGroupResponse extends AbstractModel {

    InstanceSecurityGroupsDetail: Array<InstanceSecurityGroupDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例安全组信息
         */
        this.InstanceSecurityGroupsDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceSecurityGroupsDetail: Array<InstanceSecurityGroupDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InstanceSecurityGroupsDetail) {
            this.InstanceSecurityGroupsDetail = new Array();
            for (let z in params.InstanceSecurityGroupsDetail) {
                let obj = new InstanceSecurityGroupDetail();
                obj.deserialize(params.InstanceSecurityGroupsDetail[z]);
                this.InstanceSecurityGroupsDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品信息
 * @class
 */
class ProductConf extends AbstractModel {

    Type: number | null
    
    TypeName: string | null
    
    MinBuyNum: number | null
    
    MaxBuyNum: number | null
    
    Saleout: boolean | null
    
    Engine: string | null
    
    Version: string | null
    
    TotalSize: Array<string> | null
    
    ShardSize: Array<string> | null
    
    ReplicaNum: Array<string> | null
    
    ShardNum: Array<string> | null
    
    PayMode: string | null
    
    EnableRepicaReadOnly: boolean | null
    
    constructor(){
        super();

        /**
         * 产品类型，2-Redis主从版，3-CKV主从版，4-CKV集群版，5-Redis单机版，7-Redis集群版
         */
        this.Type = null;

        /**
         * 产品名称，Redis主从版，CKV主从版，CKV集群版，Redis单机版，Redis集群版
         */
        this.TypeName = null;

        /**
         * 购买时的最小数量
         */
        this.MinBuyNum = null;

        /**
         * 购买时的最大数量
         */
        this.MaxBuyNum = null;

        /**
         * 产品是否售罄
         */
        this.Saleout = null;

        /**
         * 产品引擎，腾讯云CKV或者社区版Redis
         */
        this.Engine = null;

        /**
         * 兼容版本，Redis-2.8，Redis-3.2，Redis-4.0
         */
        this.Version = null;

        /**
         * 规格总大小，单位G
         */
        this.TotalSize = null;

        /**
         * 每个分片大小，单位G
         */
        this.ShardSize = null;

        /**
         * 副本数量
         */
        this.ReplicaNum = null;

        /**
         * 分片数量
         */
        this.ShardNum = null;

        /**
         * 支持的计费模式，1-包年包月，0-按量计费
         */
        this.PayMode = null;

        /**
         * 是否支持副本只读
         */
        this.EnableRepicaReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: number | null;
        TypeName: string | null;
        MinBuyNum: number | null;
        MaxBuyNum: number | null;
        Saleout: boolean | null;
        Engine: string | null;
        Version: string | null;
        TotalSize: Array<string> | null;
        ShardSize: Array<string> | null;
        ReplicaNum: Array<string> | null;
        ShardNum: Array<string> | null;
        PayMode: string | null;
        EnableRepicaReadOnly: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.MinBuyNum = 'MinBuyNum' in params ? params.MinBuyNum : null;
        this.MaxBuyNum = 'MaxBuyNum' in params ? params.MaxBuyNum : null;
        this.Saleout = 'Saleout' in params ? params.Saleout : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.ShardSize = 'ShardSize' in params ? params.ShardSize : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.EnableRepicaReadOnly = 'EnableRepicaReadOnly' in params ? params.EnableRepicaReadOnly : null;

    }
}

/**
 * 实例节点
 * @class
 */
class InstanceNode extends AbstractModel {

    Id: number | null
    
    InstanceClusterNode: Array<InstanceClusterNode> | null
    
    constructor(){
        super();

        /**
         * Id
         */
        this.Id = null;

        /**
         * 节点详细信息
         */
        this.InstanceClusterNode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        InstanceClusterNode: Array<InstanceClusterNode> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.InstanceClusterNode) {
            this.InstanceClusterNode = new Array();
            for (let z in params.InstanceClusterNode) {
                let obj = new InstanceClusterNode();
                obj.deserialize(params.InstanceClusterNode[z]);
                this.InstanceClusterNode.push(obj);
            }
        }

    }
}

/**
 * StartupInstance返回参数结构体
 * @class
 */
class StartupInstanceResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务id
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 详细DTS实例信息
 * @class
 */
class DescribeInstanceDTSInstanceInfo extends AbstractModel {

    RegionId: number | null
    
    InstanceId: string | null
    
    SetId: number | null
    
    ZoneId: number | null
    
    Type: number | null
    
    InstanceName: string | null
    
    Vip: string | null
    
    Status: number | null
    
    constructor(){
        super();

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RegionId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceId = null;

        /**
         * 仓库ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SetId = null;

        /**
         * 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ZoneId = null;

        /**
         * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Type = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceName = null;

        /**
         * 实例访问地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Vip = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegionId: number | null;
        InstanceId: string | null;
        SetId: number | null;
        ZoneId: number | null;
        Type: number | null;
        InstanceName: string | null;
        Vip: string | null;
        Status: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
class AssociateSecurityGroupsResponse extends AbstractModel {

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
 * DescribeTaskInfo返回参数结构体
 * @class
 */
class DescribeTaskInfoResponse extends AbstractModel {

    Status: string | null
    
    StartTime: string | null
    
    TaskType: string | null
    
    InstanceId: string | null
    
    TaskMessage: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务状态preparing:待执行，running：执行中，succeed：成功，failed：失败，error 执行出错
         */
        this.Status = null;

        /**
         * 任务开始时间
         */
        this.StartTime = null;

        /**
         * 任务类型
         */
        this.TaskType = null;

        /**
         * 实例的ID
         */
        this.InstanceId = null;

        /**
         * 任务信息，错误时显示错误信息。执行中与成功则为空
         */
        this.TaskMessage = null;

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
        StartTime: string | null;
        TaskType: string | null;
        InstanceId: string | null;
        TaskMessage: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskMessage = 'TaskMessage' in params ? params.TaskMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeyTypeDist返回参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistResponse extends AbstractModel {

    Data: Array<BigKeyTypeInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 大Key类型分布详细信息
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
    deserialize(params: {
        Data: Array<BigKeyTypeInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BigKeyTypeInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CleanUpInstance请求参数结构体
 * @class
 */
class CleanUpInstanceRequest extends AbstractModel {

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
 * DescribeInstanceDealDetail返回参数结构体
 * @class
 */
class DescribeInstanceDealDetailResponse extends AbstractModel {

    DealDetails: Array<TradeDealDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单详细信息
         */
        this.DealDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealDetails: Array<TradeDealDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.DealDetails) {
            this.DealDetails = new Array();
            for (let z in params.DealDetails) {
                let obj = new TradeDealDetail();
                obj.deserialize(params.DealDetails[z]);
                this.DealDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends AbstractModel {

    Limit: number | null
    
    Offset: number | null
    
    InstanceId: string | null
    
    OrderBy: string | null
    
    OrderType: number | null
    
    VpcIds: Array<string> | null
    
    SubnetIds: Array<string> | null
    
    ProjectIds: Array<number> | null
    
    SearchKey: string | null
    
    InstanceName: string | null
    
    UniqVpcIds: Array<string> | null
    
    UniqSubnetIds: Array<string> | null
    
    RegionIds: Array<number> | null
    
    Status: Array<number> | null
    
    TypeVersion: number | null
    
    EngineName: string | null
    
    AutoRenew: Array<number> | null
    
    BillingMode: string | null
    
    Type: number | null
    
    SearchKeys: Array<string> | null
    
    TypeList: Array<number> | null
    
    constructor(){
        super();

        /**
         * 实例列表的大小，参数默认值20
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
         */
        this.Offset = null;

        /**
         * 实例Id，如：crs-6ubhgouj
         */
        this.InstanceId = null;

        /**
         * 枚举范围： projectId,createtime,instancename,type,curDeadline
         */
        this.OrderBy = null;

        /**
         * 1倒序，0顺序，默认倒序
         */
        this.OrderType = null;

        /**
         * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：47525
         */
        this.VpcIds = null;

        /**
         * 子网ID数组，数组下标从0开始，如：56854
         */
        this.SubnetIds = null;

        /**
         * 项目ID 组成的数组，数组下标从0开始
         */
        this.ProjectIds = null;

        /**
         * 查找实例的ID。
         */
        this.SearchKey = null;

        /**
         * 实例名称
         */
        this.InstanceName = null;

        /**
         * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：vpc-sad23jfdfk
         */
        this.UniqVpcIds = null;

        /**
         * 子网ID数组，数组下标从0开始，如：subnet-fdj24n34j2
         */
        this.UniqSubnetIds = null;

        /**
         * 地域ID，已经弃用，可通过公共参数Region查询对应地域
         */
        this.RegionIds = null;

        /**
         * 实例状态：0-待初始化，1-流程中，2-运行中，-2-已隔离，-3-待删除
         */
        this.Status = null;

        /**
         * 类型版本：1-单机版,2-主从版,3-集群版
         */
        this.TypeVersion = null;

        /**
         * 引擎信息：Redis-2.8，Redis-4.0，CKV
         */
        this.EngineName = null;

        /**
         * 续费模式：0 - 默认状态（手动续费）；1 - 自动续费；2 - 明确不自动续费
         */
        this.AutoRenew = null;

        /**
         * 计费模式：postpaid-按量计费；prepaid-包年包月
         */
        this.BillingMode = null;

        /**
         * 实例类型：1-Redis老集群版；2-Redis 2.8主从版；3-CKV主从版；4-CKV集群版；5-Redis 2.8单机版；6-Redis 4.0主从版；7-Redis 4.0集群版；8 – Redis5.0主从版，9 – Redis5.0集群版，
         */
        this.Type = null;

        /**
         * 搜索关键词：支持实例Id、实例名称、完整IP
         */
        this.SearchKeys = null;

        /**
         * 内部参数，用户可忽略
         */
        this.TypeList = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Limit: number | null;
        Offset: number | null;
        InstanceId: string | null;
        OrderBy: string | null;
        OrderType: number | null;
        VpcIds: Array<string> | null;
        SubnetIds: Array<string> | null;
        ProjectIds: Array<number> | null;
        SearchKey: string | null;
        InstanceName: string | null;
        UniqVpcIds: Array<string> | null;
        UniqSubnetIds: Array<string> | null;
        RegionIds: Array<number> | null;
        Status: Array<number> | null;
        TypeVersion: number | null;
        EngineName: string | null;
        AutoRenew: Array<number> | null;
        BillingMode: string | null;
        Type: number | null;
        SearchKeys: Array<string> | null;
        TypeList: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TypeVersion = 'TypeVersion' in params ? params.TypeVersion : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.TypeList = 'TypeList' in params ? params.TypeList : null;

    }
}

/**
 * 访问命令
 * @class
 */
class SourceCommand extends AbstractModel {

    Cmd: string | null
    
    Count: number | null
    
    constructor(){
        super();

        /**
         * 命令
         */
        this.Cmd = null;

        /**
         * 执行次数
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Cmd: string | null;
        Count: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ModfiyInstancePassword请求参数结构体
 * @class
 */
class ModfiyInstancePasswordRequest extends AbstractModel {

    InstanceId: string | null
    
    OldPassword: string | null
    
    Password: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 实例旧密码
         */
        this.OldPassword = null;

        /**
         * 实例新密码
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        OldPassword: string | null;
        Password: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeSlowLog请求参数结构体
 * @class
 */
class DescribeSlowLogRequest extends AbstractModel {

    InstanceId: string | null
    
    BeginTime: string | null
    
    EndTime: string | null
    
    MinQueryTime: number | null
    
    Limit: number | null
    
    Offset: number | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 开始时间
         */
        this.BeginTime = null;

        /**
         * 结束时间
         */
        this.EndTime = null;

        /**
         * 慢查询阈值（单位：微秒）
         */
        this.MinQueryTime = null;

        /**
         * 页面大小
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        BeginTime: string | null;
        EndTime: string | null;
        MinQueryTime: number | null;
        Limit: number | null;
        Offset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeAutoBackupConfig请求参数结构体
 * @class
 */
class DescribeAutoBackupConfigRequest extends AbstractModel {

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
 * DescribeInstanceMonitorSIP返回参数结构体
 * @class
 */
class DescribeInstanceMonitorSIPResponse extends AbstractModel {

    Data: Array<SourceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 访问来源信息
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
    deserialize(params: {
        Data: Array<SourceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SourceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPostpaidInstance请求参数结构体
 * @class
 */
class DestroyPostpaidInstanceRequest extends AbstractModel {

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
 * DeleteInstanceAccount请求参数结构体
 * @class
 */
class DeleteInstanceAccountRequest extends AbstractModel {

    InstanceId: string | null
    
    AccountName: string | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 子账号名称
         */
        this.AccountName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        AccountName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

    }
}

/**
 * UpgradeInstance返回参数结构体
 * @class
 */
class UpgradeInstanceResponse extends AbstractModel {

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
 * ManualBackupInstance请求参数结构体
 * @class
 */
class ManualBackupInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    Remark: string | null
    
    constructor(){
        super();

        /**
         * 待操作的实例ID，可通过 DescribeInstance接口返回值中的 InstanceId 获取。
         */
        this.InstanceId = null;

        /**
         * 备份的备注信息
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Remark: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModfiyInstancePassword返回参数结构体
 * @class
 */
class ModfiyInstancePasswordResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详细信息列表
 * @class
 */
class InstanceSet extends AbstractModel {

    InstanceName: string | null
    
    InstanceId: string | null
    
    Appid: number | null
    
    ProjectId: number | null
    
    RegionId: number | null
    
    ZoneId: number | null
    
    VpcId: number | null
    
    SubnetId: number | null
    
    Status: number | null
    
    WanIp: string | null
    
    Port: number | null
    
    Createtime: string | null
    
    Size: number | null
    
    SizeUsed: number | null
    
    Type: number | null
    
    AutoRenewFlag: number | null
    
    DeadlineTime: string | null
    
    Engine: string | null
    
    ProductType: string | null
    
    UniqVpcId: string | null
    
    UniqSubnetId: string | null
    
    BillingMode: number | null
    
    InstanceTitle: string | null
    
    OfflineTime: string | null
    
    SubStatus: number | null
    
    Tags: Array<string> | null
    
    InstanceNode: Array<InstanceNode> | null
    
    RedisShardSize: number | null
    
    RedisShardNum: number | null
    
    RedisReplicasNum: number | null
    
    PriceId: number | null
    
    CloseTime: string | null
    
    SlaveReadWeight: number | null
    
    InstanceTags: Array<InstanceTagInfo> | null
    
    ProjectName: string | null
    
    NoAuth: boolean | null
    
    ClientLimit: number | null
    
    DtsStatus: number | null
    
    NetLimit: number | null
    
    PasswordFree: number | null
    
    ReadOnly: number | null
    
    Vip6: string | null
    
    RemainBandwidthDuration: string | null
    
    constructor(){
        super();

        /**
         * 实例名称
         */
        this.InstanceName = null;

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 用户的Appid
         */
        this.Appid = null;

        /**
         * 项目Id
         */
        this.ProjectId = null;

        /**
         * 地域id 1--广州 4--上海 5-- 中国香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
         */
        this.RegionId = null;

        /**
         * 区域id
         */
        this.ZoneId = null;

        /**
         * vpc网络id 如：75101
         */
        this.VpcId = null;

        /**
         * vpc网络下子网id 如：46315
         */
        this.SubnetId = null;

        /**
         * 实例当前状态，0：待初始化；1：实例在流程中；2：实例运行中；-2：实例已隔离；-3：实例待删除
         */
        this.Status = null;

        /**
         * 实例vip
         */
        this.WanIp = null;

        /**
         * 实例端口号
         */
        this.Port = null;

        /**
         * 实例创建时间
         */
        this.Createtime = null;

        /**
         * 实例容量大小，单位：MB
         */
        this.Size = null;

        /**
         * 该字段已废弃
         */
        this.SizeUsed = null;

        /**
         * 实例类型，1：Redis2.8集群版；2：Redis2.8主从版；3：CKV主从版（Redis3.2）；4：CKV集群版（Redis3.2）；5：Redis2.8单机版；6：Redis4.0主从版；7：Redis4.0集群版；
         */
        this.Type = null;

        /**
         * 实例是否设置自动续费标识，1：设置自动续费；0：未设置自动续费
         */
        this.AutoRenewFlag = null;

        /**
         * 实例到期时间
         */
        this.DeadlineTime = null;

        /**
         * 引擎：社区版Redis、腾讯云CKV
         */
        this.Engine = null;

        /**
         * 产品类型：Redis2.8集群版、Redis2.8主从版、Redis3.2主从版（CKV主从版）、Redis3.2集群版（CKV集群版）、Redis2.8单机版、Redis4.0集群版
         */
        this.ProductType = null;

        /**
         * vpc网络id 如：vpc-fk33jsf43kgv
         */
        this.UniqVpcId = null;

        /**
         * vpc网络下子网id 如：subnet-fd3j6l35mm0
         */
        this.UniqSubnetId = null;

        /**
         * 计费模式：0-按量计费，1-包年包月
         */
        this.BillingMode = null;

        /**
         * 实例运行状态描述：如”实例运行中“
         */
        this.InstanceTitle = null;

        /**
         * 计划下线时间
         */
        this.OfflineTime = null;

        /**
         * 流程中的实例，返回子状态
         */
        this.SubStatus = null;

        /**
         * 反亲和性标签
         */
        this.Tags = null;

        /**
         * 实例节点信息
         */
        this.InstanceNode = null;

        /**
         * 分片大小
         */
        this.RedisShardSize = null;

        /**
         * 分片数量
         */
        this.RedisShardNum = null;

        /**
         * 副本数量
         */
        this.RedisReplicasNum = null;

        /**
         * 计费Id
         */
        this.PriceId = null;

        /**
         * 隔离时间
         */
        this.CloseTime = null;

        /**
         * 从节点读取权重
         */
        this.SlaveReadWeight = null;

        /**
         * 实例关联的标签信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceTags = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectName = null;

        /**
         * 是否为免密实例，true-免密实例；false-非免密实例
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NoAuth = null;

        /**
         * 客户端连接数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClientLimit = null;

        /**
         * DTS状态（内部参数，用户可忽略）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DtsStatus = null;

        /**
         * 分片带宽上限，单位MB
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NetLimit = null;

        /**
         * 免密实例标识（内部参数，用户可忽略）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PasswordFree = null;

        /**
         * 实例只读标识（内部参数，用户可忽略）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ReadOnly = null;

        /**
         * 内部参数，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Vip6 = null;

        /**
         * 内部参数，用户可忽略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RemainBandwidthDuration = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceName: string | null;
        InstanceId: string | null;
        Appid: number | null;
        ProjectId: number | null;
        RegionId: number | null;
        ZoneId: number | null;
        VpcId: number | null;
        SubnetId: number | null;
        Status: number | null;
        WanIp: string | null;
        Port: number | null;
        Createtime: string | null;
        Size: number | null;
        SizeUsed: number | null;
        Type: number | null;
        AutoRenewFlag: number | null;
        DeadlineTime: string | null;
        Engine: string | null;
        ProductType: string | null;
        UniqVpcId: string | null;
        UniqSubnetId: string | null;
        BillingMode: number | null;
        InstanceTitle: string | null;
        OfflineTime: string | null;
        SubStatus: number | null;
        Tags: Array<string> | null;
        InstanceNode: Array<InstanceNode> | null;
        RedisShardSize: number | null;
        RedisShardNum: number | null;
        RedisReplicasNum: number | null;
        PriceId: number | null;
        CloseTime: string | null;
        SlaveReadWeight: number | null;
        InstanceTags: Array<InstanceTagInfo> | null;
        ProjectName: string | null;
        NoAuth: boolean | null;
        ClientLimit: number | null;
        DtsStatus: number | null;
        NetLimit: number | null;
        PasswordFree: number | null;
        ReadOnly: number | null;
        Vip6: string | null;
        RemainBandwidthDuration: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.SizeUsed = 'SizeUsed' in params ? params.SizeUsed : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.InstanceTitle = 'InstanceTitle' in params ? params.InstanceTitle : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.InstanceNode) {
            this.InstanceNode = new Array();
            for (let z in params.InstanceNode) {
                let obj = new InstanceNode();
                obj.deserialize(params.InstanceNode[z]);
                this.InstanceNode.push(obj);
            }
        }
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.PriceId = 'PriceId' in params ? params.PriceId : null;
        this.CloseTime = 'CloseTime' in params ? params.CloseTime : null;
        this.SlaveReadWeight = 'SlaveReadWeight' in params ? params.SlaveReadWeight : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.ClientLimit = 'ClientLimit' in params ? params.ClientLimit : null;
        this.DtsStatus = 'DtsStatus' in params ? params.DtsStatus : null;
        this.NetLimit = 'NetLimit' in params ? params.NetLimit : null;
        this.PasswordFree = 'PasswordFree' in params ? params.PasswordFree : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.RemainBandwidthDuration = 'RemainBandwidthDuration' in params ? params.RemainBandwidthDuration : null;

    }
}

/**
 * InquiryPriceRenewInstance请求参数结构体
 * @class
 */
class InquiryPriceRenewInstanceRequest extends AbstractModel {

    Period: number | null
    
    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 购买时长，单位：月
         */
        this.Period = null;

        /**
         * 实例ID
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Period: number | null;
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyMaintenanceWindow返回参数结构体
 * @class
 */
class ModifyMaintenanceWindowResponse extends AbstractModel {

    Status: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 修改状态：success 或者 failed
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
 * DescribeInstanceMonitorTopNCmdTook请求参数结构体
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookRequest extends AbstractModel {

    InstanceId: string | null
    
    SpanType: number | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 时间范围：1——实时，2——近30分钟，3——近6小时，4——近24小时
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        SpanType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DestroyPrepaidInstance返回参数结构体
 * @class
 */
class DestroyPrepaidInstanceResponse extends AbstractModel {

    DealId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单Id
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
 * DescribeInstanceMonitorBigKeyTypeDist请求参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistRequest extends AbstractModel {

    InstanceId: string | null
    
    Date: string | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 时间；例如："20190219"
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Date: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * InquiryPriceCreateInstance请求参数结构体
 * @class
 */
class InquiryPriceCreateInstanceRequest extends AbstractModel {

    ZoneId: number | null
    
    TypeId: number | null
    
    MemSize: number | null
    
    GoodsNum: number | null
    
    Period: number | null
    
    BillingMode: number | null
    
    RedisShardNum: number | null
    
    RedisReplicasNum: number | null
    
    ReplicasReadonly: boolean | null
    
    constructor(){
        super();

        /**
         * 实例所属的可用区id
         */
        this.ZoneId = null;

        /**
         * 实例类型：2 – Redis2.8主从版，3 – Redis3.2主从版(CKV主从版)，4 – Redis3.2集群版(CKV集群版)，5-Redis2.8单机版，6 – Redis4.0主从版，7 – Redis4.0集群版，
         */
        this.TypeId = null;

        /**
         * 实例容量，单位MB， 取值大小以 查询售卖规格接口返回的规格为准
         */
        this.MemSize = null;

        /**
         * 实例数量，单次购买实例数量以 查询售卖规格接口返回的规格为准
         */
        this.GoodsNum = null;

        /**
         * 购买时长，在创建包年包月实例的时候需要填写，按量计费实例填1即可，单位：月，取值范围 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]
         */
        this.Period = null;

        /**
         * 付费方式:0-按量计费，1-包年包月。
         */
        this.BillingMode = null;

        /**
         * 实例分片数量，Redis2.8主从版、CKV主从版和Redis2.8单机版、Redis4.0主从版不需要填写
         */
        this.RedisShardNum = null;

        /**
         * 实例副本数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         */
        this.RedisReplicasNum = null;

        /**
         * 是否支持副本只读，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         */
        this.ReplicasReadonly = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneId: number | null;
        TypeId: number | null;
        MemSize: number | null;
        GoodsNum: number | null;
        Period: number | null;
        BillingMode: number | null;
        RedisShardNum: number | null;
        RedisReplicasNum: number | null;
        ReplicasReadonly: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;

    }
}

/**
 * ModifyInstanceParams请求参数结构体
 * @class
 */
class ModifyInstanceParamsRequest extends AbstractModel {

    InstanceId: string | null
    
    InstanceParams: Array<InstanceParam> | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 实例修改的参数列表
         */
        this.InstanceParams = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        InstanceParams: Array<InstanceParam> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.InstanceParams) {
            this.InstanceParams = new Array();
            for (let z in params.InstanceParams) {
                let obj = new InstanceParam();
                obj.deserialize(params.InstanceParams[z]);
                this.InstanceParams.push(obj);
            }
        }

    }
}

/**
 * 大Key类型分布详情
 * @class
 */
class BigKeyTypeInfo extends AbstractModel {

    Type: string | null
    
    Count: number | null
    
    Size: number | null
    
    Updatetime: number | null
    
    constructor(){
        super();

        /**
         * 类型
         */
        this.Type = null;

        /**
         * 数量
         */
        this.Count = null;

        /**
         * 大小
         */
        this.Size = null;

        /**
         * 时间戳
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Count: number | null;
        Size: number | null;
        Updatetime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeMaintenanceWindow请求参数结构体
 * @class
 */
class DescribeMaintenanceWindowRequest extends AbstractModel {

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
 * 实例节点类型
 * @class
 */
class InstanceClusterNode extends AbstractModel {

    Name: string | null
    
    RunId: string | null
    
    Role: number | null
    
    Status: number | null
    
    Connected: number | null
    
    CreateTime: string | null
    
    DownTime: string | null
    
    Slots: string | null
    
    Keys: number | null
    
    Qps: number | null
    
    QpsSlope: number | null
    
    Storage: number | null
    
    StorageSlope: number | null
    
    constructor(){
        super();

        /**
         * 节点名称
         */
        this.Name = null;

        /**
         * 实例运行时节点Id
         */
        this.RunId = null;

        /**
         * 集群角色：0-master；1-slave
         */
        this.Role = null;

        /**
         * 节点状态：0-readwrite, 1-read, 2-backup
         */
        this.Status = null;

        /**
         * 服务状态：0-down；1-on
         */
        this.Connected = null;

        /**
         * 节点创建时间
         */
        this.CreateTime = null;

        /**
         * 节点下线时间
         */
        this.DownTime = null;

        /**
         * 节点slot分布
         */
        this.Slots = null;

        /**
         * 节点key分布
         */
        this.Keys = null;

        /**
         * 节点qps
         */
        this.Qps = null;

        /**
         * 节点qps倾斜度
         */
        this.QpsSlope = null;

        /**
         * 节点存储
         */
        this.Storage = null;

        /**
         * 节点存储倾斜度
         */
        this.StorageSlope = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        RunId: string | null;
        Role: number | null;
        Status: number | null;
        Connected: number | null;
        CreateTime: string | null;
        DownTime: string | null;
        Slots: string | null;
        Keys: number | null;
        Qps: number | null;
        QpsSlope: number | null;
        Storage: number | null;
        StorageSlope: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Connected = 'Connected' in params ? params.Connected : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DownTime = 'DownTime' in params ? params.DownTime : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.QpsSlope = 'QpsSlope' in params ? params.QpsSlope : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;

    }
}

/**
 * EnableReplicaReadonly请求参数结构体
 * @class
 */
class EnableReplicaReadonlyRequest extends AbstractModel {

    InstanceId: string | null
    
    ReadonlyPolicy: Array<string> | null
    
    constructor(){
        super();

        /**
         * 实例序号ID
         */
        this.InstanceId = null;

        /**
         * 账号路由策略：填写master或者replication，表示路由主节点，从节点；不填路由策略默认为写主节点，读从节点
         */
        this.ReadonlyPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        ReadonlyPolicy: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;

    }
}

/**
 * UpgradeInstanceVersion请求参数结构体
 * @class
 */
class UpgradeInstanceVersionRequest extends AbstractModel {

    TargetInstanceType: string | null
    
    SwitchOption: number | null
    
    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 目标实例类型，同CreateInstances接口的Type，即实例要变更的目标类型
         */
        this.TargetInstanceType = null;

        /**
         * 切换模式：1-维护时间窗切换，2-立即切换
         */
        this.SwitchOption = null;

        /**
         * 实例ID
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TargetInstanceType: string | null;
        SwitchOption: number | null;
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TargetInstanceType = 'TargetInstanceType' in params ? params.TargetInstanceType : null;
        this.SwitchOption = 'SwitchOption' in params ? params.SwitchOption : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceAccount返回参数结构体
 * @class
 */
class DescribeInstanceAccountResponse extends AbstractModel {

    Accounts: Array<Account> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 账号详细信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Accounts = null;

        /**
         * 账号个数
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
        Accounts: Array<Account> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey请求参数结构体
 * @class
 */
class DescribeInstanceMonitorBigKeyRequest extends AbstractModel {

    InstanceId: string | null
    
    ReqType: number | null
    
    Date: string | null
    
    constructor(){
        super();

        /**
         * 实例Id
         */
        this.InstanceId = null;

        /**
         * 请求类型：1——string类型，2——所有类型
         */
        this.ReqType = null;

        /**
         * 时间；例如："20190219"
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        ReqType: number | null;
        Date: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReqType = 'ReqType' in params ? params.ReqType : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DisableReplicaReadonly请求参数结构体
 * @class
 */
class DisableReplicaReadonlyRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例序号ID
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
 * DescribeProductInfo请求参数结构体
 * @class
 */
class DescribeProductInfoRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * SwitchInstanceVip返回参数结构体
 * @class
 */
class SwitchInstanceVipResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceParams返回参数结构体
 * @class
 */
class DescribeInstanceParamsResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceEnumParam: Array<InstanceEnumParam> | null
    
    InstanceIntegerParam: Array<InstanceIntegerParam> | null
    
    InstanceTextParam: Array<InstanceTextParam> | null
    
    InstanceMultiParam: Array<InstanceMultiParam> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例参数个数
         */
        this.TotalCount = null;

        /**
         * 实例枚举类型参数
         */
        this.InstanceEnumParam = null;

        /**
         * 实例整型参数
         */
        this.InstanceIntegerParam = null;

        /**
         * 实例字符型参数
         */
        this.InstanceTextParam = null;

        /**
         * 实例多选项型参数
         */
        this.InstanceMultiParam = null;

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
        InstanceEnumParam: Array<InstanceEnumParam> | null;
        InstanceIntegerParam: Array<InstanceIntegerParam> | null;
        InstanceTextParam: Array<InstanceTextParam> | null;
        InstanceMultiParam: Array<InstanceMultiParam> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceEnumParam) {
            this.InstanceEnumParam = new Array();
            for (let z in params.InstanceEnumParam) {
                let obj = new InstanceEnumParam();
                obj.deserialize(params.InstanceEnumParam[z]);
                this.InstanceEnumParam.push(obj);
            }
        }

        if (params.InstanceIntegerParam) {
            this.InstanceIntegerParam = new Array();
            for (let z in params.InstanceIntegerParam) {
                let obj = new InstanceIntegerParam();
                obj.deserialize(params.InstanceIntegerParam[z]);
                this.InstanceIntegerParam.push(obj);
            }
        }

        if (params.InstanceTextParam) {
            this.InstanceTextParam = new Array();
            for (let z in params.InstanceTextParam) {
                let obj = new InstanceTextParam();
                obj.deserialize(params.InstanceTextParam[z]);
                this.InstanceTextParam.push(obj);
            }
        }

        if (params.InstanceMultiParam) {
            this.InstanceMultiParam = new Array();
            for (let z in params.InstanceMultiParam) {
                let obj = new InstanceMultiParam();
                obj.deserialize(params.InstanceMultiParam[z]);
                this.InstanceMultiParam.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest extends AbstractModel {

    Product: string | null
    
    SecurityGroupId: string | null
    
    InstanceIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 数据库引擎名称：mariadb,cdb,cynosdb,dcdb,redis,mongodb 等。
         */
        this.Product = null;

        /**
         * 安全组Id。
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID列表，一个或者多个实例Id组成的数组。
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Product: string | null;
        SecurityGroupId: string | null;
        InstanceIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * StartupInstance请求参数结构体
 * @class
 */
class StartupInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例id
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
 * 热Key详细信息
 * @class
 */
class HotKeyInfo extends AbstractModel {

    Key: string | null
    
    Type: string | null
    
    Count: number | null
    
    constructor(){
        super();

        /**
         * 热Key
         */
        this.Key = null;

        /**
         * 类型
         */
        this.Type = null;

        /**
         * 数量
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Key: string | null;
        Type: string | null;
        Count: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * CreateInstanceAccount返回参数结构体
 * @class
 */
class CreateInstanceAccountResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceBackups请求参数结构体
 * @class
 */
class DescribeInstanceBackupsRequest extends AbstractModel {

    InstanceId: string | null
    
    Limit: number | null
    
    Offset: number | null
    
    BeginTime: string | null
    
    EndTime: string | null
    
    Status: Array<number> | null
    
    constructor(){
        super();

        /**
         * 待操作的实例ID，可通过 DescribeInstance 接口返回值中的 InstanceId 获取。
         */
        this.InstanceId = null;

        /**
         * 实例列表大小，默认大小20
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
         */
        this.Offset = null;

        /**
         * 开始时间，格式如：2017-02-08 16:46:34。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。
         */
        this.BeginTime = null;

        /**
         * 结束时间，格式如：2017-02-08 19:09:26。查询实例在 [beginTime, endTime] 时间段内开始备份的备份列表。
         */
        this.EndTime = null;

        /**
         * 1：备份在流程中，2：备份正常，3：备份转RDB文件处理中，4：已完成RDB转换，-1：备份已过期，-2：备份已删除。
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Limit: number | null;
        Offset: number | null;
        BeginTime: string | null;
        EndTime: string | null;
        Status: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 安全组详情
 * @class
 */
class SecurityGroupDetail extends AbstractModel {

    ProjectId: number | null
    
    CreateTime: string | null
    
    SecurityGroupId: string | null
    
    SecurityGroupName: string | null
    
    SecurityGroupRemark: string | null
    
    InboundRule: Array<SecurityGroupsInboundAndOutbound> | null
    
    OutboundRule: Array<SecurityGroupsInboundAndOutbound> | null
    
    constructor(){
        super();

        /**
         * 项目Id
         */
        this.ProjectId = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * 安全组Id
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称
         */
        this.SecurityGroupName = null;

        /**
         * 安全组标记
         */
        this.SecurityGroupRemark = null;

        /**
         * 安全组入站规则
         */
        this.InboundRule = null;

        /**
         * 安全组出站规则
         */
        this.OutboundRule = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: number | null;
        CreateTime: string | null;
        SecurityGroupId: string | null;
        SecurityGroupName: string | null;
        SecurityGroupRemark: string | null;
        InboundRule: Array<SecurityGroupsInboundAndOutbound> | null;
        OutboundRule: Array<SecurityGroupsInboundAndOutbound> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.InboundRule) {
            this.InboundRule = new Array();
            for (let z in params.InboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.InboundRule[z]);
                this.InboundRule.push(obj);
            }
        }

        if (params.OutboundRule) {
            this.OutboundRule = new Array();
            for (let z in params.OutboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.OutboundRule[z]);
                this.OutboundRule.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceUpgradeInstance返回参数结构体
 * @class
 */
class InquiryPriceUpgradeInstanceResponse extends AbstractModel {

    Price: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 价格，单位：分
注意：此字段可能返回 null，表示取不到有效值。
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
        Price: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstanceAccount返回参数结构体
 * @class
 */
class DeleteInstanceAccountResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorSIP请求参数结构体
 * @class
 */
class DescribeInstanceMonitorSIPRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 实例Id
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
 * 实例分片列表信息
 * @class
 */
class InstanceClusterShard extends AbstractModel {

    ShardName: string | null
    
    ShardId: string | null
    
    Role: number | null
    
    Keys: number | null
    
    Slots: string | null
    
    Storage: number | null
    
    StorageSlope: number | null
    
    Runid: string | null
    
    Connected: number | null
    
    constructor(){
        super();

        /**
         * 分片节点名称
         */
        this.ShardName = null;

        /**
         * 分片节点Id
         */
        this.ShardId = null;

        /**
         * 角色
         */
        this.Role = null;

        /**
         * Key数量
         */
        this.Keys = null;

        /**
         * slot信息
         */
        this.Slots = null;

        /**
         * 使用容量
         */
        this.Storage = null;

        /**
         * 容量倾斜率
         */
        this.StorageSlope = null;

        /**
         * 实例运行时节点Id
         */
        this.Runid = null;

        /**
         * 服务状态：0-down；1-on
         */
        this.Connected = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ShardName: string | null;
        ShardId: string | null;
        Role: number | null;
        Keys: number | null;
        Slots: string | null;
        Storage: number | null;
        StorageSlope: number | null;
        Runid: string | null;
        Connected: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ShardName = 'ShardName' in params ? params.ShardName : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;
        this.Runid = 'Runid' in params ? params.Runid : null;
        this.Connected = 'Connected' in params ? params.Connected : null;

    }
}

/**
 * 可用区内产品信息
 * @class
 */
class ZoneCapacityConf extends AbstractModel {

    ZoneId: string | null
    
    ZoneName: string | null
    
    IsSaleout: boolean | null
    
    IsDefault: boolean | null
    
    NetWorkType: Array<string> | null
    
    ProductSet: Array<ProductConf> | null
    
    OldZoneId: number | null
    
    constructor(){
        super();

        /**
         * 可用区ID：如ap-guangzhou-3
         */
        this.ZoneId = null;

        /**
         * 可用区名称
         */
        this.ZoneName = null;

        /**
         * 可用区是否售罄
         */
        this.IsSaleout = null;

        /**
         * 是否为默认可用区
         */
        this.IsDefault = null;

        /**
         * 网络类型：basenet -- 基础网络；vpcnet -- VPC网络
         */
        this.NetWorkType = null;

        /**
         * 可用区内产品规格等信息
         */
        this.ProductSet = null;

        /**
         * 可用区ID：如100003
         */
        this.OldZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneId: string | null;
        ZoneName: string | null;
        IsSaleout: boolean | null;
        IsDefault: boolean | null;
        NetWorkType: Array<string> | null;
        ProductSet: Array<ProductConf> | null;
        OldZoneId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.IsSaleout = 'IsSaleout' in params ? params.IsSaleout : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.NetWorkType = 'NetWorkType' in params ? params.NetWorkType : null;

        if (params.ProductSet) {
            this.ProductSet = new Array();
            for (let z in params.ProductSet) {
                let obj = new ProductConf();
                obj.deserialize(params.ProductSet[z]);
                this.ProductSet.push(obj);
            }
        }
        this.OldZoneId = 'OldZoneId' in params ? params.OldZoneId : null;

    }
}

/**
 * UpgradeInstance请求参数结构体
 * @class
 */
class UpgradeInstanceRequest extends AbstractModel {

    InstanceId: string | null
    
    MemSize: number | null
    
    RedisShardNum: number | null
    
    RedisReplicasNum: number | null
    
    constructor(){
        super();

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 分片大小 单位 MB
         */
        this.MemSize = null;

        /**
         * 分片数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         */
        this.RedisShardNum = null;

        /**
         * 副本数量，Redis2.8主从版、CKV主从版和Redis2.8单机版不需要填写
         */
        this.RedisReplicasNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        MemSize: number | null;
        RedisShardNum: number | null;
        RedisReplicasNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

    }
}

/**
 * DescribeProjectSecurityGroup返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupResponse extends AbstractModel {

    SecurityGroupDetails: Array<SecurityGroupDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 项目安全组
         */
        this.SecurityGroupDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SecurityGroupDetails: Array<SecurityGroupDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey返回参数结构体
 * @class
 */
class DescribeInstanceMonitorHotKeyResponse extends AbstractModel {

    Data: Array<HotKeyInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 热Key详细信息
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
    deserialize(params: {
        Data: Array<HotKeyInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new HotKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例参数
 * @class
 */
class InstanceParam extends AbstractModel {

    Key: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 设置参数的名字
         */
        this.Key = null;

        /**
         * 设置参数的值
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Key: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
class DisassociateSecurityGroupsResponse extends AbstractModel {

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
 * ClearInstance返回参数结构体
 * @class
 */
class ClearInstanceResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 慢查询详情
 * @class
 */
class InstanceSlowlogDetail extends AbstractModel {

    Duration: number | null
    
    Client: string | null
    
    Command: string | null
    
    CommandLine: string | null
    
    ExecuteTime: string | null
    
    constructor(){
        super();

        /**
         * 慢查询耗时
         */
        this.Duration = null;

        /**
         * 客户端地址
         */
        this.Client = null;

        /**
         * 命令
         */
        this.Command = null;

        /**
         * 详细命令行信息
         */
        this.CommandLine = null;

        /**
         * 执行时间
         */
        this.ExecuteTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Duration: number | null;
        Client: string | null;
        Command: string | null;
        CommandLine: string | null;
        ExecuteTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;

    }
}

export const Models = {
    ModifyInstanceParamsResponse: ModifyInstanceParamsResponse,
    RedisBackupSet: RedisBackupSet,
    DescribeInstanceMonitorTopNCmdResponse: DescribeInstanceMonitorTopNCmdResponse,
    ModifyAutoBackupConfigResponse: ModifyAutoBackupConfigResponse,
    RestoreInstanceRequest: RestoreInstanceRequest,
    TaskInfoDetail: TaskInfoDetail,
    SwitchInstanceVipRequest: SwitchInstanceVipRequest,
    UpgradeInstanceVersionResponse: UpgradeInstanceVersionResponse,
    CreateInstancesRequest: CreateInstancesRequest,
    ModifyNetworkConfigResponse: ModifyNetworkConfigResponse,
    CommandTake: CommandTake,
    DescribeInstanceMonitorBigKeyResponse: DescribeInstanceMonitorBigKeyResponse,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeTaskListResponse: DescribeTaskListResponse,
    ModifyInstanceRequest: ModifyInstanceRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    DescribeSlowLogResponse: DescribeSlowLogResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    DescribeBackupUrlRequest: DescribeBackupUrlRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InstanceEnumParam: InstanceEnumParam,
    Account: Account,
    SecurityGroupsInboundAndOutbound: SecurityGroupsInboundAndOutbound,
    ResetPasswordResponse: ResetPasswordResponse,
    ClearInstanceRequest: ClearInstanceRequest,
    RegionConf: RegionConf,
    BigKeyInfo: BigKeyInfo,
    RenewInstanceRequest: RenewInstanceRequest,
    DescribeInstanceParamRecordsResponse: DescribeInstanceParamRecordsResponse,
    ModifyAutoBackupConfigRequest: ModifyAutoBackupConfigRequest,
    InstanceMultiParam: InstanceMultiParam,
    DescribeInstanceDealDetailRequest: DescribeInstanceDealDetailRequest,
    DescribeProjectSecurityGroupRequest: DescribeProjectSecurityGroupRequest,
    RestoreInstanceResponse: RestoreInstanceResponse,
    DescribeInstanceShardsResponse: DescribeInstanceShardsResponse,
    DestroyPrepaidInstanceRequest: DestroyPrepaidInstanceRequest,
    ManualBackupInstanceResponse: ManualBackupInstanceResponse,
    InstanceTagInfo: InstanceTagInfo,
    DescribeInstanceDTSInfoResponse: DescribeInstanceDTSInfoResponse,
    DestroyPostpaidInstanceResponse: DestroyPostpaidInstanceResponse,
    ModifyInstanceResponse: ModifyInstanceResponse,
    TradeDealDetail: TradeDealDetail,
    SourceInfo: SourceInfo,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    DescribeInstanceMonitorHotKeyRequest: DescribeInstanceMonitorHotKeyRequest,
    DescribeInstanceDTSInfoRequest: DescribeInstanceDTSInfoRequest,
    DescribeProductInfoResponse: DescribeProductInfoResponse,
    ModifyInstanceAccountRequest: ModifyInstanceAccountRequest,
    DescribeBackupUrlResponse: DescribeBackupUrlResponse,
    InquiryPriceRenewInstanceResponse: InquiryPriceRenewInstanceResponse,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    InstanceSecurityGroupDetail: InstanceSecurityGroupDetail,
    ResetPasswordRequest: ResetPasswordRequest,
    ModifyInstanceAccountResponse: ModifyInstanceAccountResponse,
    DelayDistribution: DelayDistribution,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DescribeInstanceMonitorTookDistResponse: DescribeInstanceMonitorTookDistResponse,
    DescribeInstanceBackupsResponse: DescribeInstanceBackupsResponse,
    InstanceIntegerParam: InstanceIntegerParam,
    DescribeInstanceMonitorTookDistRequest: DescribeInstanceMonitorTookDistRequest,
    ModifyMaintenanceWindowRequest: ModifyMaintenanceWindowRequest,
    InstanceTextParam: InstanceTextParam,
    DescribeInstanceMonitorTopNCmdTookResponse: DescribeInstanceMonitorTopNCmdTookResponse,
    DescribeInstanceMonitorBigKeySizeDistRequest: DescribeInstanceMonitorBigKeySizeDistRequest,
    DescribeInstanceAccountRequest: DescribeInstanceAccountRequest,
    DescribeInstanceParamRecordsRequest: DescribeInstanceParamRecordsRequest,
    DescribeTaskListRequest: DescribeTaskListRequest,
    DisableReplicaReadonlyResponse: DisableReplicaReadonlyResponse,
    CreateInstancesResponse: CreateInstancesResponse,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    DescribeInstanceMonitorTopNCmdRequest: DescribeInstanceMonitorTopNCmdRequest,
    ModifyNetworkConfigRequest: ModifyNetworkConfigRequest,
    DescribeInstanceSecurityGroupRequest: DescribeInstanceSecurityGroupRequest,
    InstanceParamHistory: InstanceParamHistory,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    CleanUpInstanceResponse: CleanUpInstanceResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeInstanceShardsRequest: DescribeInstanceShardsRequest,
    Outbound: Outbound,
    DescribeAutoBackupConfigResponse: DescribeAutoBackupConfigResponse,
    InquiryPriceUpgradeInstanceRequest: InquiryPriceUpgradeInstanceRequest,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    DescribeInstanceMonitorBigKeySizeDistResponse: DescribeInstanceMonitorBigKeySizeDistResponse,
    SecurityGroup: SecurityGroup,
    CreateInstanceAccountRequest: CreateInstanceAccountRequest,
    EnableReplicaReadonlyResponse: EnableReplicaReadonlyResponse,
    DescribeMaintenanceWindowResponse: DescribeMaintenanceWindowResponse,
    DescribeInstanceSecurityGroupResponse: DescribeInstanceSecurityGroupResponse,
    ProductConf: ProductConf,
    InstanceNode: InstanceNode,
    StartupInstanceResponse: StartupInstanceResponse,
    DescribeInstanceDTSInstanceInfo: DescribeInstanceDTSInstanceInfo,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    DescribeInstanceMonitorBigKeyTypeDistResponse: DescribeInstanceMonitorBigKeyTypeDistResponse,
    CleanUpInstanceRequest: CleanUpInstanceRequest,
    DescribeInstanceDealDetailResponse: DescribeInstanceDealDetailResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    SourceCommand: SourceCommand,
    ModfiyInstancePasswordRequest: ModfiyInstancePasswordRequest,
    DescribeSlowLogRequest: DescribeSlowLogRequest,
    DescribeAutoBackupConfigRequest: DescribeAutoBackupConfigRequest,
    DescribeInstanceMonitorSIPResponse: DescribeInstanceMonitorSIPResponse,
    DestroyPostpaidInstanceRequest: DestroyPostpaidInstanceRequest,
    DeleteInstanceAccountRequest: DeleteInstanceAccountRequest,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    ManualBackupInstanceRequest: ManualBackupInstanceRequest,
    ModfiyInstancePasswordResponse: ModfiyInstancePasswordResponse,
    InstanceSet: InstanceSet,
    InquiryPriceRenewInstanceRequest: InquiryPriceRenewInstanceRequest,
    ModifyMaintenanceWindowResponse: ModifyMaintenanceWindowResponse,
    DescribeInstanceMonitorTopNCmdTookRequest: DescribeInstanceMonitorTopNCmdTookRequest,
    DestroyPrepaidInstanceResponse: DestroyPrepaidInstanceResponse,
    DescribeInstanceMonitorBigKeyTypeDistRequest: DescribeInstanceMonitorBigKeyTypeDistRequest,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    ModifyInstanceParamsRequest: ModifyInstanceParamsRequest,
    BigKeyTypeInfo: BigKeyTypeInfo,
    DescribeMaintenanceWindowRequest: DescribeMaintenanceWindowRequest,
    InstanceClusterNode: InstanceClusterNode,
    EnableReplicaReadonlyRequest: EnableReplicaReadonlyRequest,
    UpgradeInstanceVersionRequest: UpgradeInstanceVersionRequest,
    DescribeInstanceAccountResponse: DescribeInstanceAccountResponse,
    DescribeInstanceMonitorBigKeyRequest: DescribeInstanceMonitorBigKeyRequest,
    DisableReplicaReadonlyRequest: DisableReplicaReadonlyRequest,
    DescribeProductInfoRequest: DescribeProductInfoRequest,
    SwitchInstanceVipResponse: SwitchInstanceVipResponse,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    StartupInstanceRequest: StartupInstanceRequest,
    HotKeyInfo: HotKeyInfo,
    CreateInstanceAccountResponse: CreateInstanceAccountResponse,
    DescribeInstanceBackupsRequest: DescribeInstanceBackupsRequest,
    SecurityGroupDetail: SecurityGroupDetail,
    InquiryPriceUpgradeInstanceResponse: InquiryPriceUpgradeInstanceResponse,
    DeleteInstanceAccountResponse: DeleteInstanceAccountResponse,
    DescribeInstanceMonitorSIPRequest: DescribeInstanceMonitorSIPRequest,
    InstanceClusterShard: InstanceClusterShard,
    ZoneCapacityConf: ZoneCapacityConf,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeProjectSecurityGroupResponse: DescribeProjectSecurityGroupResponse,
    DescribeInstanceMonitorHotKeyResponse: DescribeInstanceMonitorHotKeyResponse,
    InstanceParam: InstanceParam,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ClearInstanceResponse: ClearInstanceResponse,
    InstanceSlowlogDetail: InstanceSlowlogDetail,

}
