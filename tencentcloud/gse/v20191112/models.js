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
 * 游戏属性详情
 * @class
 */
class GameProperty extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 属性名称
         */
        this.Key = null;
        /**
         * 属性值
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
 * 基于规则的动态扩缩容配置项
 * @class
 */
class TargetConfiguration extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 预留存率
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TargetValue = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetValue = 'TargetValue' in params ? params.TargetValue : null;
    }
}
/**
 * DeleteScalingPolicy请求参数结构体
 * @class
 */
class DeleteScalingPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务部署ID
         */
        this.FleetId = null;
        /**
         * 名称
         */
        this.Name = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * 部署的玩家游戏会话
 * @class
 */
class PlacedPlayerSession extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 玩家Id
         */
        this.PlayerId = null;
        /**
         * 玩家会话Id
         */
        this.PlayerSessionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
    }
}
/**
 * DescribeGameServerSessions返回参数结构体
 * @class
 */
class DescribeGameServerSessionsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessions = null;
        /**
         * 页偏移，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NextToken = null;
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
        if (params.GameServerSessions) {
            this.GameServerSessions = new Array();
            for (let z in params.GameServerSessions) {
                let obj = new GameServerSession();
                obj.deserialize(params.GameServerSessions[z]);
                this.GameServerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 实例信息
 * @class
 */
class Instance extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务部署ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FleetId = null;
        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceId = null;
        /**
         * IP地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IpAddress = null;
        /**
         * dns
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DnsName = null;
        /**
         * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperatingSystem = null;
        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;
        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Type = null;
        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
    }
}
/**
 * DescribeGameServerSessionQueues返回参数结构体
 * @class
 */
class DescribeGameServerSessionQueuesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话队列数组
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessionQueues = null;
        /**
         * 总数
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
        if (params.GameServerSessionQueues) {
            this.GameServerSessionQueues = new Array();
            for (let z in params.GameServerSessionQueues) {
                let obj = new GameServerSessionQueue();
                obj.deserialize(params.GameServerSessionQueues[z]);
                this.GameServerSessionQueues.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetInstanceAccess返回参数结构体
 * @class
 */
class GetInstanceAccessResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实例登录所需要的凭据
         */
        this.InstanceAccess = null;
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
        if (params.InstanceAccess) {
            let obj = new InstanceAccess();
            obj.deserialize(params.InstanceAccess);
            this.InstanceAccess = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * JoinGameServerSession请求参数结构体
 * @class
 */
class JoinGameServerSessionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
        /**
         * 玩家ID
         */
        this.PlayerId = null;
        /**
         * 玩家自定义信息
         */
        this.PlayerData = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;
    }
}
/**
 * DescribePlayerSessions返回参数结构体
 * @class
 */
class DescribePlayerSessionsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 玩家会话列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerSessions = null;
        /**
         * 页偏移
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NextToken = null;
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
        if (params.PlayerSessions) {
            this.PlayerSessions = new Array();
            for (let z in params.PlayerSessions) {
                let obj = new PlayerSession();
                obj.deserialize(params.PlayerSessions[z]);
                this.PlayerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SetServerWeight返回参数结构体
 * @class
 */
class SetServerWeightResponse extends abstract_model_1.AbstractModel {
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
 * 玩家延迟信息
 * @class
 */
class PlayerLatency extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 玩家Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerId = null;
        /**
         * 延迟对应的区域名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RegionIdentifier = null;
        /**
         * 毫秒级延迟
         */
        this.LatencyInMilliseconds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.RegionIdentifier = 'RegionIdentifier' in params ? params.RegionIdentifier : null;
        this.LatencyInMilliseconds = 'LatencyInMilliseconds' in params ? params.LatencyInMilliseconds : null;
    }
}
/**
 * StopGameServerSessionPlacement请求参数结构体
 * @class
 */
class StopGameServerSessionPlacementRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话放置的唯一标识符
         */
        this.PlacementId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
    }
}
/**
 * UpdateGameServerSession返回参数结构体
 * @class
 */
class UpdateGameServerSessionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 更新后的游戏会话
         */
        this.GameServerSession = null;
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
        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession);
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 动态扩缩容配置
 * @class
 */
class ScalingPolicy extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务部署ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FleetId = null;
        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;
        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;
        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ScalingAdjustment = null;
        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ScalingAdjustmentType = null;
        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ComparisonOperator = null;
        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Threshold = null;
        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EvaluationPeriods = null;
        /**
         * 保留参数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetricName = null;
        /**
         * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyType = null;
        /**
         * 基于规则的配置
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TargetConfiguration = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ScalingAdjustment = 'ScalingAdjustment' in params ? params.ScalingAdjustment : null;
        this.ScalingAdjustmentType = 'ScalingAdjustmentType' in params ? params.ScalingAdjustmentType : null;
        this.ComparisonOperator = 'ComparisonOperator' in params ? params.ComparisonOperator : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.EvaluationPeriods = 'EvaluationPeriods' in params ? params.EvaluationPeriods : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        if (params.TargetConfiguration) {
            let obj = new TargetConfiguration();
            obj.deserialize(params.TargetConfiguration);
            this.TargetConfiguration = obj;
        }
    }
}
/**
 * GetInstanceAccess请求参数结构体
 * @class
 */
class GetInstanceAccessRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务部署Id
         */
        this.FleetId = null;
        /**
         * 实例Id
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
    }
}
/**
 * DescribeGameServerSessions请求参数结构体
 * @class
 */
class DescribeGameServerSessionsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 别名ID
         */
        this.AliasId = null;
        /**
         * 舰队ID
         */
        this.FleetId = null;
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
        /**
         * 单次查询记录数上限
         */
        this.Limit = null;
        /**
         * 页偏移，用于查询下一页
         */
        this.NextToken = null;
        /**
         * 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR)
         */
        this.StatusFilter = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;
    }
}
/**
 * UpdateGameServerSession请求参数结构体
 * @class
 */
class UpdateGameServerSessionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
        /**
         * 最大玩家数量
         */
        this.MaximumPlayerSessionCount = null;
        /**
         * 游戏服务器会话名称
         */
        this.Name = null;
        /**
         * 玩家会话创建策略（ACCEPT_ALL,DENY_ALL）
         */
        this.PlayerSessionCreationPolicy = null;
        /**
         * 保护策略(NoProtection,TimeLimitProtection,FullProtection)
         */
        this.ProtectionPolicy = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;
    }
}
/**
 * StartMatchPlacement返回参数结构体
 * @class
 */
class StartMatchPlacementResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话放置
         */
        this.GameServerSessionPlacement = null;
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
        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement);
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribePlayerSessions请求参数结构体
 * @class
 */
class DescribePlayerSessionsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
        /**
         * 单次查询记录数上限
         */
        this.Limit = null;
        /**
         * 页偏移，用于查询下一页
         */
        this.NextToken = null;
        /**
         * 玩家ID
         */
        this.PlayerId = null;
        /**
         * 玩家会话ID
         */
        this.PlayerSessionId = null;
        /**
         * 玩家会话状态（RESERVED,ACTIVE,COMPLETED,TIMEDOUT）
         */
        this.PlayerSessionStatusFilter = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.PlayerSessionStatusFilter = 'PlayerSessionStatusFilter' in params ? params.PlayerSessionStatusFilter : null;
    }
}
/**
 * StartGameServerSessionPlacement返回参数结构体
 * @class
 */
class StartGameServerSessionPlacementResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话放置
         */
        this.GameServerSessionPlacement = null;
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
        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement);
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 访问实例所需要的凭据
 * @class
 */
class Credentials extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * ssh私钥
         */
        this.Secret = null;
        /**
         * 用户名
         */
        this.UserName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Secret = 'Secret' in params ? params.Secret : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
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
         * 实例信息列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Instances = null;
        /**
         * 结果返回最大数量
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetGameServerSessionLogUrl请求参数结构体
 * @class
 */
class GetGameServerSessionLogUrlRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
    }
}
/**
 * StartMatchPlacement请求参数结构体
 * @class
 */
class StartMatchPlacementRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 开始部署游戏服务器会话的唯一标识符
         */
        this.PlacementId = null;
        /**
         * 游戏服务器会话队列名称
         */
        this.GameServerSessionQueueName = null;
        /**
         * 游戏服务器允许同时连接到游戏会话的最大玩家数量
         */
        this.MaximumPlayerSessionCount = null;
        /**
         * 玩家游戏会话信息
         */
        this.DesiredPlayerSessions = null;
        /**
         * 玩家游戏会话属性
         */
        this.GameProperties = null;
        /**
         * 游戏服务器会话数据
         */
        this.GameServerSessionData = null;
        /**
         * 游戏服务器会话名称
         */
        this.GameServerSessionName = null;
        /**
         * 玩家延迟
         */
        this.PlayerLatencies = null;
        /**
         * 游戏匹配数据
         */
        this.MatchmakerData = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        if (params.DesiredPlayerSessions) {
            this.DesiredPlayerSessions = new Array();
            for (let z in params.DesiredPlayerSessions) {
                let obj = new DesiredPlayerSession();
                obj.deserialize(params.DesiredPlayerSessions[z]);
                this.DesiredPlayerSessions.push(obj);
            }
        }
        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;
        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;
    }
}
/**
 * CreateGameServerSession返回参数结构体
 * @class
 */
class CreateGameServerSessionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSession = null;
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
        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession);
            this.GameServerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
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
         * 服务部署ID
         */
        this.FleetId = null;
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 结果返回最大数量
         */
        this.Offset = null;
        /**
         * 返回结果偏移
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * DescribeScalingPolicies请求参数结构体
 * @class
 */
class DescribeScalingPoliciesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务部署ID
         */
        this.FleetId = null;
        /**
         * 状态过滤条件
         */
        this.StatusFilter = null;
        /**
         * 结果返回最大数量
         */
        this.Offset = null;
        /**
         * 返回结果偏移
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
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * DescribeGameServerSessionDetails返回参数结构体
 * @class
 */
class DescribeGameServerSessionDetailsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话详情列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessionDetails = null;
        /**
         * 页偏移，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NextToken = null;
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
        if (params.GameServerSessionDetails) {
            this.GameServerSessionDetails = new Array();
            for (let z in params.GameServerSessionDetails) {
                let obj = new GameServerSessionDetail();
                obj.deserialize(params.GameServerSessionDetails[z]);
                this.GameServerSessionDetails.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 延迟策略
 * @class
 */
class PlayerLatencyPolicy extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任意player允许的最大延迟，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MaximumIndividualPlayerLatencyMilliseconds = null;
        /**
         * 放置新GameServerSession时强制实施策略的时间长度，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyDurationSeconds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaximumIndividualPlayerLatencyMilliseconds = 'MaximumIndividualPlayerLatencyMilliseconds' in params ? params.MaximumIndividualPlayerLatencyMilliseconds : null;
        this.PolicyDurationSeconds = 'PolicyDurationSeconds' in params ? params.PolicyDurationSeconds : null;
    }
}
/**
 * PutScalingPolicy返回参数结构体
 * @class
 */
class PutScalingPolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;
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
        this.Name = 'Name' in params ? params.Name : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * JoinGameServerSession返回参数结构体
 * @class
 */
class JoinGameServerSessionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 玩家会话
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerSession = null;
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
        if (params.PlayerSession) {
            let obj = new PlayerSession();
            obj.deserialize(params.PlayerSession);
            this.PlayerSession = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 玩家游戏会话信息
 * @class
 */
class DesiredPlayerSession extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 与玩家会话关联的唯一玩家标识
         */
        this.PlayerId = null;
        /**
         * 开发人员定义的玩家数据
         */
        this.PlayerData = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;
    }
}
/**
 * SearchGameServerSessions返回参数结构体
 * @class
 */
class SearchGameServerSessionsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessions = null;
        /**
         * 页偏移，用于查询下一页
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NextToken = null;
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
        if (params.GameServerSessions) {
            this.GameServerSessions = new Array();
            for (let z in params.GameServerSessions) {
                let obj = new GameServerSession();
                obj.deserialize(params.GameServerSessions[z]);
                this.GameServerSessions.push(obj);
            }
        }
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeGameServerSessionPlacement请求参数结构体
 * @class
 */
class DescribeGameServerSessionPlacementRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话放置的唯一标识符
         */
        this.PlacementId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
    }
}
/**
 * DescribeScalingPolicies返回参数结构体
 * @class
 */
class DescribeScalingPoliciesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 动态扩缩容配置
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ScalingPolicies = null;
        /**
         * 返回总数
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.ScalingPolicies) {
            this.ScalingPolicies = new Array();
            for (let z in params.ScalingPolicies) {
                let obj = new ScalingPolicy();
                obj.deserialize(params.ScalingPolicies[z]);
                this.ScalingPolicies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 服务部署组目的集合
 * @class
 */
class GameServerSessionQueueDestination extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务部署组目的的资源描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DestinationArn = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestinationArn = 'DestinationArn' in params ? params.DestinationArn : null;
    }
}
/**
 * 游戏会话部署对象
 * @class
 */
class GameServerSessionPlacement extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 部署Id
         */
        this.PlacementId = null;
        /**
         * 服务部署组名称
         */
        this.GameServerSessionQueueName = null;
        /**
         * 玩家延迟
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerLatencies = null;
        /**
         * 服务部署状态
         */
        this.Status = null;
        /**
         * 分配给正在运行游戏会话的实例的DNS标识符
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DnsName = null;
        /**
         * 游戏会话Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessionId = null;
        /**
         * 游戏会话名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessionName = null;
        /**
         * 服务部署区域
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessionRegion = null;
        /**
         * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameProperties = null;
        /**
         * 最大玩家数量
         */
        this.MaximumPlayerSessionCount = null;
        /**
         * 游戏会话数据
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessionData = null;
        /**
         * 运行游戏会话的实例的IP地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IpAddress = null;
        /**
         * 运行游戏会话的实例的端口号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Port = null;
        /**
         * 游戏匹配数据
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MatchmakerData = null;
        /**
         * 部署的玩家游戏数据
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlacedPlayerSessions = null;
        /**
         * 开始时间
         */
        this.StartTime = null;
        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;
        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;
        this.GameServerSessionRegion = 'GameServerSessionRegion' in params ? params.GameServerSessionRegion : null;
        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;
        if (params.PlacedPlayerSessions) {
            this.PlacedPlayerSessions = new Array();
            for (let z in params.PlacedPlayerSessions) {
                let obj = new PlacedPlayerSession();
                obj.deserialize(params.PlacedPlayerSessions[z]);
                this.PlacedPlayerSessions.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * 服务部署组对象
 * @class
 */
class GameServerSessionQueue extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务部署组名字
         */
        this.Name = null;
        /**
         * 服务部署组资源
         */
        this.GameServerSessionQueueArn = null;
        /**
         * 目的fleet（可为别名）列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Destinations = null;
        /**
         * 延迟策略集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerLatencyPolicies = null;
        /**
         * 超时时间
         */
        this.TimeoutInSeconds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.GameServerSessionQueueArn = 'GameServerSessionQueueArn' in params ? params.GameServerSessionQueueArn : null;
        if (params.Destinations) {
            this.Destinations = new Array();
            for (let z in params.Destinations) {
                let obj = new GameServerSessionQueueDestination();
                obj.deserialize(params.Destinations[z]);
                this.Destinations.push(obj);
            }
        }
        if (params.PlayerLatencyPolicies) {
            this.PlayerLatencyPolicies = new Array();
            for (let z in params.PlayerLatencyPolicies) {
                let obj = new PlayerLatencyPolicy();
                obj.deserialize(params.PlayerLatencyPolicies[z]);
                this.PlayerLatencyPolicies.push(obj);
            }
        }
        this.TimeoutInSeconds = 'TimeoutInSeconds' in params ? params.TimeoutInSeconds : null;
    }
}
/**
 * SetServerWeight请求参数结构体
 * @class
 */
class SetServerWeightRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务舰队ID
         */
        this.FleetId = null;
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 权重
         */
        this.Weight = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
    }
}
/**
 * 玩家会话详情
 * @class
 */
class PlayerSession extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 玩家会话创建时间
         */
        this.CreationTime = null;
        /**
         * 游戏服务器会话运行的DNS标识
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DnsName = null;
        /**
         * 舰队ID
         */
        this.FleetId = null;
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
        /**
         * 游戏服务器会话运行的CVM地址
         */
        this.IpAddress = null;
        /**
         * 玩家相关信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerData = null;
        /**
         * 玩家ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerId = null;
        /**
         * 玩家会话ID
         */
        this.PlayerSessionId = null;
        /**
         * 端口号
         */
        this.Port = null;
        /**
         * 玩家会话的状态
         */
        this.Status = null;
        /**
         * 玩家会话终止时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TerminationTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.PlayerData = 'PlayerData' in params ? params.PlayerData : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.PlayerSessionId = 'PlayerSessionId' in params ? params.PlayerSessionId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;
    }
}
/**
 * CreateGameServerSession请求参数结构体
 * @class
 */
class CreateGameServerSessionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 最大玩家数量
         */
        this.MaximumPlayerSessionCount = null;
        /**
         * 别名ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
         */
        this.AliasId = null;
        /**
         * 创建者ID
         */
        this.CreatorId = null;
        /**
         * 舰队ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
         */
        this.FleetId = null;
        /**
         * 游戏属性
         */
        this.GameProperties = null;
        /**
         * 游戏服务器会话属性详情
         */
        this.GameServerSessionData = null;
        /**
         * 游戏服务器会话自定义ID
         */
        this.GameServerSessionId = null;
        /**
         * 幂等token
         */
        this.IdempotencyToken = null;
        /**
         * 游戏服务器会话名称
         */
        this.Name = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IdempotencyToken = 'IdempotencyToken' in params ? params.IdempotencyToken : null;
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * GetGameServerSessionLogUrl返回参数结构体
 * @class
 */
class GetGameServerSessionLogUrlResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 日志下载URL
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PreSignedUrl = null;
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
        this.PreSignedUrl = 'PreSignedUrl' in params ? params.PreSignedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 游戏服务器会话详情（GameServerSessionDetail）
 * @class
 */
class GameServerSessionDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话
         */
        this.GameServerSession = null;
        /**
         * 保护策略，可选（NoProtection,FullProtection）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProtectionPolicy = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.GameServerSession) {
            let obj = new GameServerSession();
            obj.deserialize(params.GameServerSession);
            this.GameServerSession = obj;
        }
        this.ProtectionPolicy = 'ProtectionPolicy' in params ? params.ProtectionPolicy : null;
    }
}
/**
 * DescribeGameServerSessionDetails请求参数结构体
 * @class
 */
class DescribeGameServerSessionDetailsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 别名ID
         */
        this.AliasId = null;
        /**
         * 舰队ID
         */
        this.FleetId = null;
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
        /**
         * 单次查询记录数上限
         */
        this.Limit = null;
        /**
         * 页偏移，用于查询下一页
         */
        this.NextToken = null;
        /**
         * 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR)
         */
        this.StatusFilter = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.StatusFilter = 'StatusFilter' in params ? params.StatusFilter : null;
    }
}
/**
 * StartGameServerSessionPlacement请求参数结构体
 * @class
 */
class StartGameServerSessionPlacementRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 开始部署游戏服务器会话的唯一标识符
         */
        this.PlacementId = null;
        /**
         * 游戏服务器会话队列名称
         */
        this.GameServerSessionQueueName = null;
        /**
         * 游戏服务器允许同时连接到游戏会话的最大玩家数量
         */
        this.MaximumPlayerSessionCount = null;
        /**
         * 玩家游戏会话信息
         */
        this.DesiredPlayerSessions = null;
        /**
         * 玩家游戏会话属性
         */
        this.GameProperties = null;
        /**
         * 游戏服务器会话数据
         */
        this.GameServerSessionData = null;
        /**
         * 游戏服务器会话名称
         */
        this.GameServerSessionName = null;
        /**
         * 玩家延迟
         */
        this.PlayerLatencies = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlacementId = 'PlacementId' in params ? params.PlacementId : null;
        this.GameServerSessionQueueName = 'GameServerSessionQueueName' in params ? params.GameServerSessionQueueName : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        if (params.DesiredPlayerSessions) {
            this.DesiredPlayerSessions = new Array();
            for (let z in params.DesiredPlayerSessions) {
                let obj = new DesiredPlayerSession();
                obj.deserialize(params.DesiredPlayerSessions[z]);
                this.DesiredPlayerSessions.push(obj);
            }
        }
        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionName = 'GameServerSessionName' in params ? params.GameServerSessionName : null;
        if (params.PlayerLatencies) {
            this.PlayerLatencies = new Array();
            for (let z in params.PlayerLatencies) {
                let obj = new PlayerLatency();
                obj.deserialize(params.PlayerLatencies[z]);
                this.PlayerLatencies.push(obj);
            }
        }
    }
}
/**
 * 游戏会话详情
 * @class
 */
class GameServerSession extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话创建时间
         */
        this.CreationTime = null;
        /**
         * 创建者ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreatorId = null;
        /**
         * 当前玩家数量
         */
        this.CurrentPlayerSessionCount = null;
        /**
         * CVM的DNS标识符
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DnsName = null;
        /**
         * 舰队ID
         */
        this.FleetId = null;
        /**
         * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameProperties = null;
        /**
         * 游戏服务器会话属性详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GameServerSessionData = null;
        /**
         * 游戏服务器会话ID
         */
        this.GameServerSessionId = null;
        /**
         * CVM IP地址
         */
        this.IpAddress = null;
        /**
         * 对战进程详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MatchmakerData = null;
        /**
         * 最大玩家数量
         */
        this.MaximumPlayerSessionCount = null;
        /**
         * 游戏服务器会话名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;
        /**
         * 玩家会话创建策略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlayerSessionCreationPolicy = null;
        /**
         * 端口号
         */
        this.Port = null;
        /**
         * 游戏服务器会话状态
         */
        this.Status = null;
        /**
         * 游戏服务器会话状态附加信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StatusReason = null;
        /**
         * 终止的时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TerminationTime = null;
        /**
         * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceType = null;
        /**
         * 当前自定义数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CurrentCustomCount = null;
        /**
         * 最大自定义数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MaxCustomCount = null;
        /**
         * 权重
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Weight = null;
        /**
         * 会话可用性状态，是否被屏蔽
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AvailabilityStatus = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.CurrentPlayerSessionCount = 'CurrentPlayerSessionCount' in params ? params.CurrentPlayerSessionCount : null;
        this.DnsName = 'DnsName' in params ? params.DnsName : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        if (params.GameProperties) {
            this.GameProperties = new Array();
            for (let z in params.GameProperties) {
                let obj = new GameProperty();
                obj.deserialize(params.GameProperties[z]);
                this.GameProperties.push(obj);
            }
        }
        this.GameServerSessionData = 'GameServerSessionData' in params ? params.GameServerSessionData : null;
        this.GameServerSessionId = 'GameServerSessionId' in params ? params.GameServerSessionId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.MatchmakerData = 'MatchmakerData' in params ? params.MatchmakerData : null;
        this.MaximumPlayerSessionCount = 'MaximumPlayerSessionCount' in params ? params.MaximumPlayerSessionCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PlayerSessionCreationPolicy = 'PlayerSessionCreationPolicy' in params ? params.PlayerSessionCreationPolicy : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusReason = 'StatusReason' in params ? params.StatusReason : null;
        this.TerminationTime = 'TerminationTime' in params ? params.TerminationTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.CurrentCustomCount = 'CurrentCustomCount' in params ? params.CurrentCustomCount : null;
        this.MaxCustomCount = 'MaxCustomCount' in params ? params.MaxCustomCount : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.AvailabilityStatus = 'AvailabilityStatus' in params ? params.AvailabilityStatus : null;
    }
}
/**
 * DescribeGameServerSessionQueues请求参数结构体
 * @class
 */
class DescribeGameServerSessionQueuesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话队列数组
         */
        this.Names = null;
        /**
         * 要返回的最大结果数
         */
        this.Limit = null;
        /**
         * 偏移
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
        this.Names = 'Names' in params ? params.Names : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * DeleteScalingPolicy返回参数结构体
 * @class
 */
class DeleteScalingPolicyResponse extends abstract_model_1.AbstractModel {
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
 * DescribeGameServerSessionPlacement返回参数结构体
 * @class
 */
class DescribeGameServerSessionPlacementResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话放置
         */
        this.GameServerSessionPlacement = null;
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
        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement);
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SearchGameServerSessions请求参数结构体
 * @class
 */
class SearchGameServerSessionsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 别名ID
         */
        this.AliasId = null;
        /**
         * 舰队ID
         */
        this.FleetId = null;
        /**
         * 单次查询记录数上限
         */
        this.Limit = null;
        /**
         * 页偏移，用于查询下一页
         */
        this.NextToken = null;
        /**
         * 搜索条件表达式，支持如下变量
gameServerSessionName 游戏会话名称 String
gameServerSessionId 游戏会话ID String
maximumSessions 最大的玩家会话数 Number
creationTimeMillis 创建时间，单位：毫秒 Number
playerSessionCount 当前玩家会话数 Number
hasAvailablePlayerSessions 是否有可用玩家数 String 取值true或false
gameServerSessionProperties 游戏会话属性 String

表达式String类型 等于=，不等于<>判断
表示Number类型支持 =,<>,>,>=,<,<=
         */
        this.FilterExpression = null;
        /**
         * 排序条件关键字
支持排序字段
gameServerSessionName 游戏会话名称 String
gameServerSessionId 游戏会话ID String
maximumSessions 最大的玩家会话数 Number
creationTimeMillis 创建时间，单位：毫秒 Number
playerSessionCount 当前玩家会话数 Number
         */
        this.SortExpression = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasId = 'AliasId' in params ? params.AliasId : null;
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.FilterExpression = 'FilterExpression' in params ? params.FilterExpression : null;
        this.SortExpression = 'SortExpression' in params ? params.SortExpression : null;
    }
}
/**
 * PutScalingPolicy请求参数结构体
 * @class
 */
class PutScalingPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 基于规则的扩缩容配置
         */
        this.FleetId = null;
        /**
         * 名称
         */
        this.Name = null;
        /**
         * 调整值
         */
        this.ScalingAdjustment = null;
        /**
         * 调整类型
         */
        this.ScalingAdjustmentType = null;
        /**
         * 指标阈值
         */
        this.Threshold = null;
        /**
         * 比较符
         */
        this.ComparisonOperator = null;
        /**
         * 时间长度（分钟）
         */
        this.EvaluationPeriods = null;
        /**
         * 指标名称
         */
        this.MetricName = null;
        /**
         * 策略类型
         */
        this.PolicyType = null;
        /**
         * 扩缩容配置类型
         */
        this.TargetConfiguration = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ScalingAdjustment = 'ScalingAdjustment' in params ? params.ScalingAdjustment : null;
        this.ScalingAdjustmentType = 'ScalingAdjustmentType' in params ? params.ScalingAdjustmentType : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.ComparisonOperator = 'ComparisonOperator' in params ? params.ComparisonOperator : null;
        this.EvaluationPeriods = 'EvaluationPeriods' in params ? params.EvaluationPeriods : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        if (params.TargetConfiguration) {
            let obj = new TargetConfiguration();
            obj.deserialize(params.TargetConfiguration);
            this.TargetConfiguration = obj;
        }
    }
}
/**
 * StopGameServerSessionPlacement返回参数结构体
 * @class
 */
class StopGameServerSessionPlacementResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 游戏服务器会话放置
         */
        this.GameServerSessionPlacement = null;
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
        if (params.GameServerSessionPlacement) {
            let obj = new GameServerSessionPlacement();
            obj.deserialize(params.GameServerSessionPlacement);
            this.GameServerSessionPlacement = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 实例访问凭证信息
 * @class
 */
class InstanceAccess extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 访问实例所需要的凭据
         */
        this.Credentials = null;
        /**
         * 服务部署Id
         */
        this.FleetId = null;
        /**
         * 实例ID
         */
        this.InstanceId = null;
        /**
         * 实例公网IP
         */
        this.IpAddress = null;
        /**
         * 操作系统
         */
        this.OperatingSystem = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials);
            this.Credentials = obj;
        }
        this.FleetId = 'FleetId' in params ? params.FleetId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;
    }
}
exports.Models = {
    GameProperty: GameProperty,
    TargetConfiguration: TargetConfiguration,
    DeleteScalingPolicyRequest: DeleteScalingPolicyRequest,
    PlacedPlayerSession: PlacedPlayerSession,
    DescribeGameServerSessionsResponse: DescribeGameServerSessionsResponse,
    Instance: Instance,
    DescribeGameServerSessionQueuesResponse: DescribeGameServerSessionQueuesResponse,
    GetInstanceAccessResponse: GetInstanceAccessResponse,
    JoinGameServerSessionRequest: JoinGameServerSessionRequest,
    DescribePlayerSessionsResponse: DescribePlayerSessionsResponse,
    SetServerWeightResponse: SetServerWeightResponse,
    PlayerLatency: PlayerLatency,
    StopGameServerSessionPlacementRequest: StopGameServerSessionPlacementRequest,
    UpdateGameServerSessionResponse: UpdateGameServerSessionResponse,
    ScalingPolicy: ScalingPolicy,
    GetInstanceAccessRequest: GetInstanceAccessRequest,
    DescribeGameServerSessionsRequest: DescribeGameServerSessionsRequest,
    UpdateGameServerSessionRequest: UpdateGameServerSessionRequest,
    StartMatchPlacementResponse: StartMatchPlacementResponse,
    DescribePlayerSessionsRequest: DescribePlayerSessionsRequest,
    StartGameServerSessionPlacementResponse: StartGameServerSessionPlacementResponse,
    Credentials: Credentials,
    DescribeInstancesResponse: DescribeInstancesResponse,
    GetGameServerSessionLogUrlRequest: GetGameServerSessionLogUrlRequest,
    StartMatchPlacementRequest: StartMatchPlacementRequest,
    CreateGameServerSessionResponse: CreateGameServerSessionResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DescribeScalingPoliciesRequest: DescribeScalingPoliciesRequest,
    DescribeGameServerSessionDetailsResponse: DescribeGameServerSessionDetailsResponse,
    PlayerLatencyPolicy: PlayerLatencyPolicy,
    PutScalingPolicyResponse: PutScalingPolicyResponse,
    JoinGameServerSessionResponse: JoinGameServerSessionResponse,
    DesiredPlayerSession: DesiredPlayerSession,
    SearchGameServerSessionsResponse: SearchGameServerSessionsResponse,
    DescribeGameServerSessionPlacementRequest: DescribeGameServerSessionPlacementRequest,
    DescribeScalingPoliciesResponse: DescribeScalingPoliciesResponse,
    GameServerSessionQueueDestination: GameServerSessionQueueDestination,
    GameServerSessionPlacement: GameServerSessionPlacement,
    GameServerSessionQueue: GameServerSessionQueue,
    SetServerWeightRequest: SetServerWeightRequest,
    PlayerSession: PlayerSession,
    CreateGameServerSessionRequest: CreateGameServerSessionRequest,
    GetGameServerSessionLogUrlResponse: GetGameServerSessionLogUrlResponse,
    GameServerSessionDetail: GameServerSessionDetail,
    DescribeGameServerSessionDetailsRequest: DescribeGameServerSessionDetailsRequest,
    StartGameServerSessionPlacementRequest: StartGameServerSessionPlacementRequest,
    GameServerSession: GameServerSession,
    DescribeGameServerSessionQueuesRequest: DescribeGameServerSessionQueuesRequest,
    DeleteScalingPolicyResponse: DeleteScalingPolicyResponse,
    DescribeGameServerSessionPlacementResponse: DescribeGameServerSessionPlacementResponse,
    SearchGameServerSessionsRequest: SearchGameServerSessionsRequest,
    PutScalingPolicyRequest: PutScalingPolicyRequest,
    StopGameServerSessionPlacementResponse: StopGameServerSessionPlacementResponse,
    InstanceAccess: InstanceAccess,
};
//# sourceMappingURL=models.js.map