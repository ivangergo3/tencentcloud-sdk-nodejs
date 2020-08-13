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
 * ES集群日志详细信息
 * @class
 */
class InstanceLog extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 日志时间
         */
        this.Time = null;
        /**
         * 日志级别
         */
        this.Level = null;
        /**
         * 集群节点ip
         */
        this.Ip = null;
        /**
         * 日志内容
         */
        this.Message = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Message = 'Message' in params ? params.Message : null;
    }
}
/**
 * 节点本地盘信息
 * @class
 */
class LocalDiskInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 本地盘类型<li>LOCAL_SATA：大数据型</li><li>NVME_SSD：高IO型</li>
         */
        this.LocalDiskType = null;
        /**
         * 本地盘单盘大小
         */
        this.LocalDiskSize = null;
        /**
         * 本地盘块数
         */
        this.LocalDiskCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalDiskType = 'LocalDiskType' in params ? params.LocalDiskType : null;
        this.LocalDiskSize = 'LocalDiskSize' in params ? params.LocalDiskSize : null;
        this.LocalDiskCount = 'LocalDiskCount' in params ? params.LocalDiskCount : null;
    }
}
/**
 * 实例操作记录中的流程任务信息
 * @class
 */
class TaskDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务名
         */
        this.Name = null;
        /**
         * 任务进度
         */
        this.Progress = null;
        /**
         * 任务完成时间
         */
        this.FinishTime = null;
        /**
         * 子任务
         */
        this.SubTasks = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        if (params.SubTasks) {
            this.SubTasks = new Array();
            for (let z in params.SubTasks) {
                let obj = new SubTaskDetail();
                obj.deserialize(params.SubTasks[z]);
                this.SubTasks.push(obj);
            }
        }
    }
}
/**
 * 集群中一种节点类型（如热数据节点，冷数据节点，专用主节点等）的规格描述信息，包括节点类型，节点个数，节点规格，磁盘类型，磁盘大小等, Type不指定时默认为热数据节点；如果节点为master节点，则DiskType和DiskSize参数会被忽略（主节点无数据盘）
 * @class
 */
class NodeInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 节点数量
         */
        this.NodeNum = null;
        /**
         * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         */
        this.NodeType = null;
        /**
         * 节点类型<li>hotData: 热数据节点</li>
<li>warmData: 冷数据节点</li>
<li>dedicatedMaster: 专用主节点</li>
默认值为hotData
         */
        this.Type = null;
        /**
         * 节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
         */
        this.DiskType = null;
        /**
         * 节点磁盘容量（单位GB）
         */
        this.DiskSize = null;
        /**
         * 节点本地盘信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LocalDiskInfo = null;
        /**
         * 节点磁盘块数
         */
        this.DiskCount = null;
        /**
         * 节点磁盘是否加密 0: 不加密，1: 加密；默认不加密
         */
        this.DiskEncrypt = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        if (params.LocalDiskInfo) {
            let obj = new LocalDiskInfo();
            obj.deserialize(params.LocalDiskInfo);
            this.LocalDiskInfo = obj;
        }
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;
        this.DiskEncrypt = 'DiskEncrypt' in params ? params.DiskEncrypt : null;
    }
}
/**
 * DescribeInstanceOperations请求参数结构体
 * @class
 */
class DescribeInstanceOperationsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集群实例ID
         */
        this.InstanceId = null;
        /**
         * 起始时间, e.g. "2019-03-07 16:30:39"
         */
        this.StartTime = null;
        /**
         * 结束时间, e.g. "2019-03-30 20:18:03"
         */
        this.EndTime = null;
        /**
         * 分页起始值
         */
        this.Offset = null;
        /**
         * 分页大小
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * 操作详情
 * @class
 */
class OperationDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例原始配置信息
         */
        this.OldInfo = null;
        /**
         * 实例更新后配置信息
         */
        this.NewInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.OldInfo) {
            this.OldInfo = new Array();
            for (let z in params.OldInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.OldInfo[z]);
                this.OldInfo.push(obj);
            }
        }
        if (params.NewInfo) {
            this.NewInfo = new Array();
            for (let z in params.NewInfo) {
                let obj = new KeyValue();
                obj.deserialize(params.NewInfo[z]);
                this.NewInfo.push(obj);
            }
        }
    }
}
/**
 * ES公网访问访问控制信息
 * @class
 */
class EsPublicAcl extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 访问黑名单
         */
        this.BlackIpList = null;
        /**
         * 访问白名单
         */
        this.WhiteIpList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;
    }
}
/**
 * ik插件词典信息
 * @class
 */
class DictInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 词典键值
         */
        this.Key = null;
        /**
         * 词典名称
         */
        this.Name = null;
        /**
         * 词典大小，单位B
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Size = 'Size' in params ? params.Size : null;
    }
}
/**
 * RestartInstance返回参数结构体
 * @class
 */
class RestartInstanceResponse extends abstract_model_1.AbstractModel {
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
 * CreateInstance返回参数结构体
 * @class
 */
class CreateInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeInstanceLogs请求参数结构体
 * @class
 */
class DescribeInstanceLogsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集群实例ID
         */
        this.InstanceId = null;
        /**
         * 日志类型，默认值为1
<li>1, 主日志</li>
<li>2, 搜索慢日志</li>
<li>3, 索引慢日志</li>
<li>4, GC日志</li>
         */
        this.LogType = null;
        /**
         * 搜索词，支持LUCENE语法，如 level:WARN、ip:1.1.1.1、message:test-index等
         */
        this.SearchKey = null;
        /**
         * 日志开始时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
         */
        this.StartTime = null;
        /**
         * 日志结束时间，格式为YYYY-MM-DD HH:MM:SS, 如2019-01-22 20:15:53
         */
        this.EndTime = null;
        /**
         * 分页起始值, 默认值为0
         */
        this.Offset = null;
        /**
         * 分页大小，默认值为100，最大值100
         */
        this.Limit = null;
        /**
         * 时间排序方式，默认值为0
<li>0, 降序</li>
<li>1, 升序</li>
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
    }
}
/**
 * UpgradeLicense请求参数结构体
 * @class
 */
class UpgradeLicenseRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
         */
        this.LicenseType = null;
        /**
         * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
         */
        this.AutoVoucher = null;
        /**
         * 代金券ID列表（目前仅支持指定一张代金券）
         */
        this.VoucherIds = null;
        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
         */
        this.BasicSecurityType = null;
        /**
         * 是否强制重启<li>true强制重启</li><li>false不强制重启</li> 默认值false
         */
        this.ForceRestart = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
    }
}
/**
 * ES cos自动备份信息
 * @class
 */
class CosBackup extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 是否开启cos自动备份
         */
        this.IsAutoBackup = null;
        /**
         * 自动备份执行时间（精确到小时）, e.g. "22:00"
         */
        this.BackupTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsAutoBackup = 'IsAutoBackup' in params ? params.IsAutoBackup : null;
        this.BackupTime = 'BackupTime' in params ? params.BackupTime : null;
    }
}
/**
 * 实例标签信息
 * @class
 */
class TagInfo extends abstract_model_1.AbstractModel {
    constructor() {
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
    }
}
/**
 * OperationDetail使用此结构的数组描述新旧配置
 * @class
 */
class KeyValue extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 键
         */
        this.Key = null;
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
    }
}
/**
 * CreateInstance请求参数结构体
 * @class
 */
class CreateInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 可用区
         */
        this.Zone = null;
        /**
         * 实例版本（支持"5.6.4"、"6.4.3"、"6.8.2"、"7.5.1"）
         */
        this.EsVersion = null;
        /**
         * 私有网络ID
         */
        this.VpcId = null;
        /**
         * 子网ID
         */
        this.SubnetId = null;
        /**
         * 访问密码（密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
         */
        this.Password = null;
        /**
         * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
         */
        this.InstanceName = null;
        /**
         * 已废弃请使用NodeInfoList
节点数量（2-50个）
         */
        this.NodeNum = null;
        /**
         * 计费类型<li>PREPAID：预付费，即包年包月</li><li>POSTPAID_BY_HOUR：按小时后付费</li>默认值POSTPAID_BY_HOUR
         */
        this.ChargeType = null;
        /**
         * 包年包月购买时长（单位由参数TimeUnit决定）
         */
        this.ChargePeriod = null;
        /**
         * 自动续费标识<li>RENEW_FLAG_AUTO：自动续费</li><li>RENEW_FLAG_MANUAL：不自动续费，用户手动续费</li>ChargeType为PREPAID时需要设置，如不传递该参数，普通用户默认不自动续费，SVIP用户自动续费
         */
        this.RenewFlag = null;
        /**
         * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         */
        this.NodeType = null;
        /**
         * 已废弃请使用NodeInfoList
节点磁盘类型<li>CLOUD_SSD：SSD云硬盘</li><li>CLOUD_PREMIUM：高硬能云硬盘</li>默认值CLOUD_SSD
         */
        this.DiskType = null;
        /**
         * 已废弃请使用NodeInfoList
节点磁盘容量（单位GB）
         */
        this.DiskSize = null;
        /**
         * 计费时长单位（ChargeType为PREPAID时需要设置，默认值为“m”，表示月，当前只支持“m”）
         */
        this.TimeUnit = null;
        /**
         * 是否自动使用代金券<li>0：不自动使用</li><li>1：自动使用</li>默认值0
         */
        this.AutoVoucher = null;
        /**
         * 代金券ID列表（目前仅支持指定一张代金券）
         */
        this.VoucherIds = null;
        /**
         * 已废弃请使用NodeInfoList
是否创建专用主节点<li>true：开启专用主节点</li><li>false：不开启专用主节点</li>默认值false
         */
        this.EnableDedicatedMaster = null;
        /**
         * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个和5个，EnableDedicatedMaster为true时该值必传）
         */
        this.MasterNodeNum = null;
        /**
         * 已废弃请使用NodeInfoList
专用主节点类型（EnableDedicatedMaster为true时必传）<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         */
        this.MasterNodeType = null;
        /**
         * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB，非必传，若传递则必须为50，暂不支持自定义）
         */
        this.MasterNodeDiskSize = null;
        /**
         * 集群配置文件中的ClusterName（系统默认配置为实例ID，暂不支持自定义）
         */
        this.ClusterNameInConf = null;
        /**
         * 集群部署方式<li>0：单可用区部署</li><li>1：多可用区部署</li>默认为0
         */
        this.DeployMode = null;
        /**
         * 多可用区部署时可用区的详细信息(DeployMode为1时必传)
         */
        this.MultiZoneInfo = null;
        /**
         * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
         */
        this.LicenseType = null;
        /**
         * 节点信息列表， 用于描述集群各类节点的规格信息如节点类型，节点个数，节点规格，磁盘类型，磁盘大小等
         */
        this.NodeInfoList = null;
        /**
         * 节点标签信息列表
         */
        this.TagList = null;
        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
         */
        this.BasicSecurityType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ClusterNameInConf = 'ClusterNameInConf' in params ? params.ClusterNameInConf : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
    }
}
/**
 * 实例详细信息
 * @class
 */
class InstanceInfo extends abstract_model_1.AbstractModel {
    constructor() {
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
         * 地域
         */
        this.Region = null;
        /**
         * 可用区
         */
        this.Zone = null;
        /**
         * 用户ID
         */
        this.AppId = null;
        /**
         * 用户UIN
         */
        this.Uin = null;
        /**
         * 实例所属VPC的UID
         */
        this.VpcUid = null;
        /**
         * 实例所属子网的UID
         */
        this.SubnetUid = null;
        /**
         * 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁
         */
        this.Status = null;
        /**
         * 实例计费模式。取值范围：  PREPAID：表示预付费，即包年包月  POSTPAID_BY_HOUR：表示后付费，即按量计费  CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
         */
        this.ChargeType = null;
        /**
         * 包年包月购买时长,单位:月
         */
        this.ChargePeriod = null;
        /**
         * 自动续费标识。取值范围：  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费  默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
         */
        this.RenewFlag = null;
        /**
         * 节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         */
        this.NodeType = null;
        /**
         * 节点个数
         */
        this.NodeNum = null;
        /**
         * 节点CPU核数
         */
        this.CpuNum = null;
        /**
         * 节点内存大小，单位GB
         */
        this.MemSize = null;
        /**
         * 节点磁盘类型
         */
        this.DiskType = null;
        /**
         * 节点磁盘大小，单位GB
         */
        this.DiskSize = null;
        /**
         * ES域名
         */
        this.EsDomain = null;
        /**
         * ES VIP
         */
        this.EsVip = null;
        /**
         * ES端口
         */
        this.EsPort = null;
        /**
         * Kibana访问url
         */
        this.KibanaUrl = null;
        /**
         * ES版本号
         */
        this.EsVersion = null;
        /**
         * ES配置项
         */
        this.EsConfig = null;
        /**
         * Kibana访问控制配置
         */
        this.EsAcl = null;
        /**
         * 实例创建时间
         */
        this.CreateTime = null;
        /**
         * 实例最后修改操作时间
         */
        this.UpdateTime = null;
        /**
         * 实例到期时间
         */
        this.Deadline = null;
        /**
         * 实例类型（实例类型标识，当前只有1,2两种）
         */
        this.InstanceType = null;
        /**
         * Ik分词器配置
         */
        this.IkConfig = null;
        /**
         * 专用主节点配置
         */
        this.MasterNodeInfo = null;
        /**
         * cos自动备份配置
         */
        this.CosBackup = null;
        /**
         * 是否允许cos自动备份
         */
        this.AllowCosBackup = null;
        /**
         * 实例拥有的标签列表
         */
        this.TagList = null;
        /**
         * License类型<li>oss：开源版</li><li>basic：基础版</li><li>platinum：白金版</li>默认值platinum
         */
        this.LicenseType = null;
        /**
         * 是否为冷热集群<li>true: 冷热集群</li><li>false: 非冷热集群</li>
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EnableHotWarmMode = null;
        /**
         * 冷节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WarmNodeType = null;
        /**
         * 冷节点个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WarmNodeNum = null;
        /**
         * 冷节点CPU核数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WarmCpuNum = null;
        /**
         * 冷节点内存内存大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WarmMemSize = null;
        /**
         * 冷节点磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WarmDiskType = null;
        /**
         * 冷节点磁盘大小，单位GB
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WarmDiskSize = null;
        /**
         * 集群节点信息列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NodeInfoList = null;
        /**
         * Es公网地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EsPublicUrl = null;
        /**
         * 多可用区网络信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MultiZoneInfo = null;
        /**
         * 部署模式<li>0：单可用区</li><li>1：多可用区</li>
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeployMode = null;
        /**
         * ES公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PublicAccess = null;
        /**
         * ES公网访问控制配置
         */
        this.EsPublicAcl = null;
        /**
         * Kibana内网地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.KibanaPrivateUrl = null;
        /**
         * Kibana公网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.KibanaPublicAccess = null;
        /**
         * Kibana内网访问状态<li>OPEN：开启</li><li>CLOSE：关闭
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.KibanaPrivateAccess = null;
        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SecurityType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.VpcUid = 'VpcUid' in params ? params.VpcUid : null;
        this.SubnetUid = 'SubnetUid' in params ? params.SubnetUid : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.ChargePeriod = 'ChargePeriod' in params ? params.ChargePeriod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.EsDomain = 'EsDomain' in params ? params.EsDomain : null;
        this.EsVip = 'EsVip' in params ? params.EsVip : null;
        this.EsPort = 'EsPort' in params ? params.EsPort : null;
        this.KibanaUrl = 'KibanaUrl' in params ? params.KibanaUrl : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;
        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl);
            this.EsAcl = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        if (params.IkConfig) {
            let obj = new EsDictionaryInfo();
            obj.deserialize(params.IkConfig);
            this.IkConfig = obj;
        }
        if (params.MasterNodeInfo) {
            let obj = new MasterNodeInfo();
            obj.deserialize(params.MasterNodeInfo);
            this.MasterNodeInfo = obj;
        }
        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup);
            this.CosBackup = obj;
        }
        this.AllowCosBackup = 'AllowCosBackup' in params ? params.AllowCosBackup : null;
        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.EnableHotWarmMode = 'EnableHotWarmMode' in params ? params.EnableHotWarmMode : null;
        this.WarmNodeType = 'WarmNodeType' in params ? params.WarmNodeType : null;
        this.WarmNodeNum = 'WarmNodeNum' in params ? params.WarmNodeNum : null;
        this.WarmCpuNum = 'WarmCpuNum' in params ? params.WarmCpuNum : null;
        this.WarmMemSize = 'WarmMemSize' in params ? params.WarmMemSize : null;
        this.WarmDiskType = 'WarmDiskType' in params ? params.WarmDiskType : null;
        this.WarmDiskSize = 'WarmDiskSize' in params ? params.WarmDiskSize : null;
        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.EsPublicUrl = 'EsPublicUrl' in params ? params.EsPublicUrl : null;
        if (params.MultiZoneInfo) {
            this.MultiZoneInfo = new Array();
            for (let z in params.MultiZoneInfo) {
                let obj = new ZoneDetail();
                obj.deserialize(params.MultiZoneInfo[z]);
                this.MultiZoneInfo.push(obj);
            }
        }
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;
        if (params.EsPublicAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsPublicAcl);
            this.EsPublicAcl = obj;
        }
        this.KibanaPrivateUrl = 'KibanaPrivateUrl' in params ? params.KibanaPrivateUrl : null;
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
    }
}
/**
 * DeleteInstance返回参数结构体
 * @class
 */
class DeleteInstanceResponse extends abstract_model_1.AbstractModel {
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
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的实例个数
         */
        this.TotalCount = null;
        /**
         * 实例详细信息列表
         */
        this.InstanceList = null;
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
        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeInstanceLogs返回参数结构体
 * @class
 */
class DescribeInstanceLogsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的日志条数
         */
        this.TotalCount = null;
        /**
         * 日志详细信息列表
         */
        this.InstanceLogList = null;
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
        if (params.InstanceLogList) {
            this.InstanceLogList = new Array();
            for (let z in params.InstanceLogList) {
                let obj = new InstanceLog();
                obj.deserialize(params.InstanceLogList[z]);
                this.InstanceLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdatePlugins返回参数结构体
 * @class
 */
class UpdatePluginsResponse extends abstract_model_1.AbstractModel {
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
 * RestartInstance请求参数结构体
 * @class
 */
class RestartInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 是否强制重启<li>true：强制重启</li><li>false：不强制重启</li>默认false
         */
        this.ForceRestart = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
    }
}
/**
 * 多可用区部署时可用区的详细信息
 * @class
 */
class ZoneDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 可用区
         */
        this.Zone = null;
        /**
         * 子网ID
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
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
    }
}
/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集群实例所属可用区，不传则默认所有可用区
         */
        this.Zone = null;
        /**
         * 集群实例ID列表
         */
        this.InstanceIds = null;
        /**
         * 集群实例名称列表
         */
        this.InstanceNames = null;
        /**
         * 分页起始值, 默认值0
         */
        this.Offset = null;
        /**
         * 分页大小，默认值20
         */
        this.Limit = null;
        /**
         * 排序字段<li>1：实例ID</li><li>2：实例名称</li><li>3：可用区</li><li>4：创建时间</li>若orderKey未传递则按创建时间降序排序
         */
        this.OrderByKey = null;
        /**
         * 排序方式<li>0：升序</li><li>1：降序</li>若传递了orderByKey未传递orderByType, 则默认升序
         */
        this.OrderByType = null;
        /**
         * 节点标签信息列表
         */
        this.TagList = null;
        /**
         * 私有网络vip列表
         */
        this.IpList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByKey = 'OrderByKey' in params ? params.OrderByKey : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.IpList = 'IpList' in params ? params.IpList : null;
    }
}
/**
 * UpdateInstance请求参数结构体
 * @class
 */
class UpdateInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 实例名称（1-50 个英文、汉字、数字、连接线-或下划线_）
         */
        this.InstanceName = null;
        /**
         * 已废弃请使用NodeInfoList
节点个数（2-50个）
         */
        this.NodeNum = null;
        /**
         * 配置项（JSON格式字符串）。当前仅支持以下配置项：<li>action.destructive_requires_name</li><li>indices.fielddata.cache.size</li><li>indices.query.bool.max_clause_count</li>
         */
        this.EsConfig = null;
        /**
         * 默认用户elastic的密码（8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号）
         */
        this.Password = null;
        /**
         * 访问控制列表
         */
        this.EsAcl = null;
        /**
         * 已废弃请使用NodeInfoList
磁盘大小（单位GB）
         */
        this.DiskSize = null;
        /**
         * 已废弃请使用NodeInfoList
节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         */
        this.NodeType = null;
        /**
         * 已废弃请使用NodeInfoList
专用主节点个数（只支持3个或5个）
         */
        this.MasterNodeNum = null;
        /**
         * 已废弃请使用NodeInfoList
专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         */
        this.MasterNodeType = null;
        /**
         * 已废弃请使用NodeInfoList
专用主节点磁盘大小（单位GB系统默认配置为50GB,暂不支持自定义）
         */
        this.MasterNodeDiskSize = null;
        /**
         * 更新配置时是否强制重启<li>true强制重启</li><li>false不强制重启</li>当前仅更新EsConfig时需要设置，默认值为false
         */
        this.ForceRestart = null;
        /**
         * COS自动备份信息
         */
        this.CosBackup = null;
        /**
         * 节点信息列表，可以只传递要更新的节点及其对应的规格信息。支持的操作包括<li>修改一种节点的个数</li><li>修改一种节点的节点规格及磁盘大小</li><li>增加一种节点类型（需要同时指定该节点的类型，个数，规格，磁盘等信息）</li>上述操作一次只能进行一种，且磁盘类型不支持修改
         */
        this.NodeInfoList = null;
        /**
         * 公网访问状态
         */
        this.PublicAccess = null;
        /**
         * 公网访问控制列表
         */
        this.EsPublicAcl = null;
        /**
         * Kibana公网访问状态
         */
        this.KibanaPublicAccess = null;
        /**
         * Kibana内网访问状态
         */
        this.KibanaPrivateAccess = null;
        /**
         * ES 6.8及以上版本基础版开启或关闭用户认证
         */
        this.BasicSecurityType = null;
        /**
         * Kibana内网端口
         */
        this.KibanaPrivatePort = null;
        /**
         * 0: 蓝绿变更方式扩容，集群不重启 （默认） 1: 磁盘解挂载扩容，集群滚动重启
         */
        this.ScaleType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.EsConfig = 'EsConfig' in params ? params.EsConfig : null;
        this.Password = 'Password' in params ? params.Password : null;
        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl);
            this.EsAcl = obj;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
        if (params.CosBackup) {
            let obj = new CosBackup();
            obj.deserialize(params.CosBackup);
            this.CosBackup = obj;
        }
        if (params.NodeInfoList) {
            this.NodeInfoList = new Array();
            for (let z in params.NodeInfoList) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodeInfoList[z]);
                this.NodeInfoList.push(obj);
            }
        }
        this.PublicAccess = 'PublicAccess' in params ? params.PublicAccess : null;
        if (params.EsPublicAcl) {
            let obj = new EsPublicAcl();
            obj.deserialize(params.EsPublicAcl);
            this.EsPublicAcl = obj;
        }
        this.KibanaPublicAccess = 'KibanaPublicAccess' in params ? params.KibanaPublicAccess : null;
        this.KibanaPrivateAccess = 'KibanaPrivateAccess' in params ? params.KibanaPrivateAccess : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
        this.KibanaPrivatePort = 'KibanaPrivatePort' in params ? params.KibanaPrivatePort : null;
        this.ScaleType = 'ScaleType' in params ? params.ScaleType : null;
    }
}
/**
 * ES 词库信息
 * @class
 */
class EsDictionaryInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 启用词词典列表
         */
        this.MainDict = null;
        /**
         * 停用词词典列表
         */
        this.Stopwords = null;
        /**
         * QQ分词词典列表
         */
        this.QQDict = null;
        /**
         * 同义词词典列表
         */
        this.Synonym = null;
        /**
         * 更新词典类型
         */
        this.UpdateType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.MainDict) {
            this.MainDict = new Array();
            for (let z in params.MainDict) {
                let obj = new DictInfo();
                obj.deserialize(params.MainDict[z]);
                this.MainDict.push(obj);
            }
        }
        if (params.Stopwords) {
            this.Stopwords = new Array();
            for (let z in params.Stopwords) {
                let obj = new DictInfo();
                obj.deserialize(params.Stopwords[z]);
                this.Stopwords.push(obj);
            }
        }
        if (params.QQDict) {
            this.QQDict = new Array();
            for (let z in params.QQDict) {
                let obj = new DictInfo();
                obj.deserialize(params.QQDict[z]);
                this.QQDict.push(obj);
            }
        }
        if (params.Synonym) {
            this.Synonym = new Array();
            for (let z in params.Synonym) {
                let obj = new DictInfo();
                obj.deserialize(params.Synonym[z]);
                this.Synonym.push(obj);
            }
        }
        this.UpdateType = 'UpdateType' in params ? params.UpdateType : null;
    }
}
/**
 * DescribeInstanceOperations返回参数结构体
 * @class
 */
class DescribeInstanceOperationsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 操作记录总数
         */
        this.TotalCount = null;
        /**
         * 操作记录
         */
        this.Operations = null;
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
        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new Operation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdatePlugins请求参数结构体
 * @class
 */
class UpdatePluginsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 需要安装的插件名列表
         */
        this.InstallPluginList = null;
        /**
         * 需要卸载的插件名列表
         */
        this.RemovePluginList = null;
        /**
         * 是否强制重启
         */
        this.ForceRestart = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstallPluginList = 'InstallPluginList' in params ? params.InstallPluginList : null;
        this.RemovePluginList = 'RemovePluginList' in params ? params.RemovePluginList : null;
        this.ForceRestart = 'ForceRestart' in params ? params.ForceRestart : null;
    }
}
/**
 * UpgradeLicense返回参数结构体
 * @class
 */
class UpgradeLicenseResponse extends abstract_model_1.AbstractModel {
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
 * ES集群配置项
 * @class
 */
class EsAcl extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * kibana访问黑名单
         */
        this.BlackIpList = null;
        /**
         * kibana访问白名单
         */
        this.WhiteIpList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;
    }
}
/**
 * 实例专用主节点相关信息
 * @class
 */
class MasterNodeInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 是否启用了专用主节点
         */
        this.EnableDedicatedMaster = null;
        /**
         * 专用主节点规格<li>ES.S1.SMALL2：1核2G</li><li>ES.S1.MEDIUM4：2核4G</li><li>ES.S1.MEDIUM8：2核8G</li><li>ES.S1.LARGE16：4核16G</li><li>ES.S1.2XLARGE32：8核32G</li><li>ES.S1.4XLARGE32：16核32G</li><li>ES.S1.4XLARGE64：16核64G</li>
         */
        this.MasterNodeType = null;
        /**
         * 专用主节点个数
         */
        this.MasterNodeNum = null;
        /**
         * 专用主节点CPU核数
         */
        this.MasterNodeCpuNum = null;
        /**
         * 专用主节点内存大小，单位GB
         */
        this.MasterNodeMemSize = null;
        /**
         * 专用主节点磁盘大小，单位GB
         */
        this.MasterNodeDiskSize = null;
        /**
         * 专用主节点磁盘类型
         */
        this.MasterNodeDiskType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableDedicatedMaster = 'EnableDedicatedMaster' in params ? params.EnableDedicatedMaster : null;
        this.MasterNodeType = 'MasterNodeType' in params ? params.MasterNodeType : null;
        this.MasterNodeNum = 'MasterNodeNum' in params ? params.MasterNodeNum : null;
        this.MasterNodeCpuNum = 'MasterNodeCpuNum' in params ? params.MasterNodeCpuNum : null;
        this.MasterNodeMemSize = 'MasterNodeMemSize' in params ? params.MasterNodeMemSize : null;
        this.MasterNodeDiskSize = 'MasterNodeDiskSize' in params ? params.MasterNodeDiskSize : null;
        this.MasterNodeDiskType = 'MasterNodeDiskType' in params ? params.MasterNodeDiskType : null;
    }
}
/**
 * DeleteInstance请求参数结构体
 * @class
 */
class DeleteInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
    }
}
/**
 * 实例操作记录流程任务中的子任务信息（如升级检查任务中的各个检查项）
 * @class
 */
class SubTaskDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子任务名
         */
        this.Name = null;
        /**
         * 子任务结果
         */
        this.Result = null;
        /**
         * 子任务错误信息
         */
        this.ErrMsg = null;
        /**
         * 子任务类型
         */
        this.Type = null;
        /**
         * 子任务状态，0处理中 1成功 -1失败
         */
        this.Status = null;
        /**
         * 升级检查失败的索引名
         */
        this.FailedIndices = null;
        /**
         * 子任务结束时间
         */
        this.FinishTime = null;
        /**
         * 子任务等级，1警告 2失败
         */
        this.Level = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailedIndices = 'FailedIndices' in params ? params.FailedIndices : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.Level = 'Level' in params ? params.Level : null;
    }
}
/**
 * UpgradeInstance返回参数结构体
 * @class
 */
class UpgradeInstanceResponse extends abstract_model_1.AbstractModel {
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
 * UpdateInstance返回参数结构体
 * @class
 */
class UpdateInstanceResponse extends abstract_model_1.AbstractModel {
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
 * UpgradeInstance请求参数结构体
 * @class
 */
class UpgradeInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 目标ES版本，支持：”6.4.3“, "6.8.2"，"7.5.1"
         */
        this.EsVersion = null;
        /**
         * 是否只做升级检查，默认值为false
         */
        this.CheckOnly = null;
        /**
         * 目标商业特性版本：<li>oss 开源版</li><li>basic 基础版</li>当前仅在5.6.4升级6.x版本时使用，默认值为basic
         */
        this.LicenseType = null;
        /**
         * 6.8（及以上版本）基础版是否开启xpack security认证<li>1：不开启</li><li>2：开启</li>
         */
        this.BasicSecurityType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EsVersion = 'EsVersion' in params ? params.EsVersion : null;
        this.CheckOnly = 'CheckOnly' in params ? params.CheckOnly : null;
        this.LicenseType = 'LicenseType' in params ? params.LicenseType : null;
        this.BasicSecurityType = 'BasicSecurityType' in params ? params.BasicSecurityType : null;
    }
}
/**
 * ES集群操作详细信息
 * @class
 */
class Operation extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 操作唯一id
         */
        this.Id = null;
        /**
         * 操作开始时间
         */
        this.StartTime = null;
        /**
         * 操作类型
         */
        this.Type = null;
        /**
         * 操作详情
         */
        this.Detail = null;
        /**
         * 操作结果
         */
        this.Result = null;
        /**
         * 流程任务信息
         */
        this.Tasks = null;
        /**
         * 操作进度
         */
        this.Progress = null;
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
        this.Type = 'Type' in params ? params.Type : null;
        if (params.Detail) {
            let obj = new OperationDetail();
            obj.deserialize(params.Detail);
            this.Detail = obj;
        }
        this.Result = 'Result' in params ? params.Result : null;
        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.Progress = 'Progress' in params ? params.Progress : null;
    }
}
exports.Models = {
    InstanceLog: InstanceLog,
    LocalDiskInfo: LocalDiskInfo,
    TaskDetail: TaskDetail,
    NodeInfo: NodeInfo,
    DescribeInstanceOperationsRequest: DescribeInstanceOperationsRequest,
    OperationDetail: OperationDetail,
    EsPublicAcl: EsPublicAcl,
    DictInfo: DictInfo,
    RestartInstanceResponse: RestartInstanceResponse,
    CreateInstanceResponse: CreateInstanceResponse,
    DescribeInstanceLogsRequest: DescribeInstanceLogsRequest,
    UpgradeLicenseRequest: UpgradeLicenseRequest,
    CosBackup: CosBackup,
    TagInfo: TagInfo,
    KeyValue: KeyValue,
    CreateInstanceRequest: CreateInstanceRequest,
    InstanceInfo: InstanceInfo,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceLogsResponse: DescribeInstanceLogsResponse,
    UpdatePluginsResponse: UpdatePluginsResponse,
    RestartInstanceRequest: RestartInstanceRequest,
    ZoneDetail: ZoneDetail,
    DescribeInstancesRequest: DescribeInstancesRequest,
    UpdateInstanceRequest: UpdateInstanceRequest,
    EsDictionaryInfo: EsDictionaryInfo,
    DescribeInstanceOperationsResponse: DescribeInstanceOperationsResponse,
    UpdatePluginsRequest: UpdatePluginsRequest,
    UpgradeLicenseResponse: UpgradeLicenseResponse,
    EsAcl: EsAcl,
    MasterNodeInfo: MasterNodeInfo,
    DeleteInstanceRequest: DeleteInstanceRequest,
    SubTaskDetail: SubTaskDetail,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    UpdateInstanceResponse: UpdateInstanceResponse,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    Operation: Operation,
};
//# sourceMappingURL=models.js.map