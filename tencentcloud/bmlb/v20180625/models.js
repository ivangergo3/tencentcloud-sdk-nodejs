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
 * SetTrafficMirrorHealthSwitch请求参数结构体
 * @class
 */
class SetTrafficMirrorHealthSwitchRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 健康检查开关，0：关闭，1：打开
         */
        this.HealthSwitch = null;
        /**
         * 健康检查判断健康的次数，最小值2，最大值10。
         */
        this.HealthNum = null;
        /**
         * 健康检查判断不健康的次数，最小值2，最大值10。
         */
        this.UnhealthNum = null;
        /**
         * 健康检查间隔，单位：秒，最小值5，最大值300。
         */
        this.IntervalTime = null;
        /**
         * 检查的域名配置。
         */
        this.HttpCheckDomain = null;
        /**
         * 检查的路径配置。
         */
        this.HttpCheckPath = null;
        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         */
        this.HttpCodes = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
    }
}
/**
 * SetTrafficMirrorAlias返回参数结构体
 * @class
 */
class SetTrafficMirrorAliasResponse extends abstract_model_1.AbstractModel {
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
 * DeleteL7Rules请求参数结构体
 * @class
 */
class DeleteL7RulesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         */
        this.DomainId = null;
        /**
         * 转发路径实例ID列表，可通过接口DescribeL7Rules查询。
         */
        this.LocationIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;
    }
}
/**
 * DeleteTrafficMirror返回参数结构体
 * @class
 */
class DeleteTrafficMirrorResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyL7BackendPort返回参数结构体
 * @class
 */
class ModifyL7BackendPortResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyL4BackendProbePort返回参数结构体
 * @class
 */
class ModifyL4BackendProbePortResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 待与流量镜像绑定的接收机信息。
 * @class
 */
class BindTrafficMirrorReceiver extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待绑定的主机端口，可选值1~65535。
         */
        this.Port = null;
        /**
         * 待绑定的主机实例ID。
         */
        this.InstanceId = null;
        /**
         * 待绑定的主机权重，可选值0~100。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
    }
}
/**
 * ModifyL4BackendPort返回参数结构体
 * @class
 */
class ModifyL4BackendPortResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyL7Locations返回参数结构体
 * @class
 */
class ModifyL7LocationsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTrafficMirrorReceiverHealthStatus请求参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiverHealthStatusRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询所在的流量镜像ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 流量镜像接收机实例ID和端口数组。
         */
        this.ReceiverSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new DescribeTrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }
    }
}
/**
 * 待与四层监听器解绑的物理机主机、虚拟机或半托管主机信息。
 * @class
 */
class UnbindL4Backend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待解绑的主机端口，可选值1~65535。
         */
        this.Port = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
    }
}
/**
 * ModifyL4Listener返回参数结构体
 * @class
 */
class ModifyL4ListenerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 获取设备绑定信息时返回的四层监听器信息。
 * @class
 */
class DevicesBindInfoL4Listener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 七层监听器实例ID。
         */
        this.ListenerId = null;
        /**
         * 七层监听器协议类型，可选值：http,https。
         */
        this.Protocol = null;
        /**
         * 七层监听器的监听端口。
         */
        this.LoadBalancerPort = null;
        /**
         * 该转发路径所绑定的主机列表。
         */
        this.BackendSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new DevicesBindInfoBackend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
    }
}
/**
 * DescribeL4ListenerInfo请求参数结构体
 * @class
 */
class DescribeL4ListenerInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 查找的键值，可用于模糊查找该名称的监听器。
         */
        this.SearchKey = null;
        /**
         * 主机ID或虚机IP列表，可用于获取绑定了该主机的监听器。
         */
        this.InstanceIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
    }
}
/**
 * 查询绑定了某主机的四层监听器时返回的四层监听器信息。

 * @class
 */
class L4ListenerInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 监听器ID。
         */
        this.ListenerId = null;
        /**
         * 用户自定义的监听器名称。
         */
        this.ListenerName = null;
        /**
         * 负载均衡实例监听器协议类型，可选值tcp，udp。
         */
        this.Protocol = null;
        /**
         * 负载均衡监听器的监听接口，可选值1~65535。
         */
        this.LoadBalancerPort = null;
        /**
         * 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         */
        this.ListenerType = null;
        /**
         * 会话保持时间。单位：秒
         */
        this.SessionExpire = null;
        /**
         * 是否开启了检查：1（开启）、0（关闭）。
         */
        this.HealthSwitch = null;
        /**
         * 响应超时时间，单位：秒。
         */
        this.TimeOut = null;
        /**
         * 检查间隔，单位：秒。
         */
        this.IntervalTime = null;
        /**
         * 负载均衡监听器健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         */
        this.HealthNum = null;
        /**
         * 负载均衡监听器不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         */
        this.UnhealthNum = null;
        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         */
        this.CustomHealthSwitch = null;
        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         */
        this.InputType = null;
        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         */
        this.LineSeparatorType = null;
        /**
         * 自定义探测请求内容。
         */
        this.HealthRequest = null;
        /**
         * 自定义探测返回内容。
         */
        this.HealthResponse = null;
        /**
         * 是否开启toa：1（开启）、0（关闭）。
         */
        this.ToaFlag = null;
        /**
         * 转发后端服务器调度类型。
         */
        this.BalanceMode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
    }
}
/**
 * DescribeL7Rules请求参数结构体
 * @class
 */
class DescribeL7RulesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名ID列表，可通过接口DescribeL7Rules查询。
         */
        this.DomainIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainIds = 'DomainIds' in params ? params.DomainIds : null;
    }
}
/**
 * UnbindL7Backends返回参数结构体
 * @class
 */
class UnbindL7BackendsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyL4BackendWeight返回参数结构体
 * @class
 */
class ModifyL4BackendWeightResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteL7Domains返回参数结构体
 * @class
 */
class DeleteL7DomainsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 获取设备绑定信息时返回的所绑定的主机信息。
 * @class
 */
class DevicesBindInfoBackend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 黑石物理机的主机ID、托管主机ID或虚拟机IP。
         */
        this.InstanceId = null;
        /**
         * 主机端口。
         */
        this.Port = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
    }
}
/**
 * UnbindL4Backends请求参数结构体
 * @class
 */
class UnbindL4BackendsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 待解绑的主机信息。可以绑定多个主机端口。目前一个四层监听器下面最多允许绑定255个主机端口。
         */
        this.BackendSet = null;
        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new UnbindL4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * DescribeL7Listeners请求参数结构体
 * @class
 */
class DescribeL7ListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID列表，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
    }
}
/**
 * DescribeTrafficMirrorListeners请求参数结构体
 * @class
 */
class DescribeTrafficMirrorListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 分页的偏移量，也即从第几条记录开始查询
         */
        this.Offset = null;
        /**
         * 单次查询返回的条目数，默认值：500。
         */
        this.Limit = null;
        /**
         * 待搜索的负载均衡Id。
         */
        this.SearchLoadBalancerIds = null;
        /**
         * 待搜索的负载均衡名称。
         */
        this.SearchLoadBalancerNames = null;
        /**
         * 待搜索的Vip。
         */
        this.SearchVips = null;
        /**
         * 待搜索的监听器ID。
         */
        this.SearchListenerIds = null;
        /**
         * 待搜索的监听器名称。
         */
        this.SearchListenerNames = null;
        /**
         * 待搜索的协议名称。
         */
        this.SearchProtocols = null;
        /**
         * 待搜索的端口。
         */
        this.SearchLoadBalancerPorts = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchLoadBalancerIds = 'SearchLoadBalancerIds' in params ? params.SearchLoadBalancerIds : null;
        this.SearchLoadBalancerNames = 'SearchLoadBalancerNames' in params ? params.SearchLoadBalancerNames : null;
        this.SearchVips = 'SearchVips' in params ? params.SearchVips : null;
        this.SearchListenerIds = 'SearchListenerIds' in params ? params.SearchListenerIds : null;
        this.SearchListenerNames = 'SearchListenerNames' in params ? params.SearchListenerNames : null;
        this.SearchProtocols = 'SearchProtocols' in params ? params.SearchProtocols : null;
        this.SearchLoadBalancerPorts = 'SearchLoadBalancerPorts' in params ? params.SearchLoadBalancerPorts : null;
    }
}
/**
 * 待与七层监听器转发规则绑定的物理机主机、虚拟机或半托管主机信息。目前一个七层转发路径下面最多允许绑定255个主机端口。
 * @class
 */
class BindL7Backend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待绑定的主机端口，可选值1~65535。
         */
        this.Port = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         */
        this.InstanceId = null;
        /**
         * 待绑定的主机权重，可选值0~100。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
    }
}
/**
 * ModifyL7Listener返回参数结构体
 * @class
 */
class ModifyL7ListenerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用[DescribeLoadBalancerTaskResult](/document/product/386/9308)接口来查询任务操作结果
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeLoadBalancerTaskResult请求参数结构体
 * @class
 */
class DescribeLoadBalancerTaskResultRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。由具体的异步操作接口提供。
         */
        this.TaskId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
    }
}
/**
 * DescribeL7Rules返回参数结构体
 * @class
 */
class DescribeL7RulesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的转发规则列表。
         */
        this.RuleSet = null;
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
        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new L7Rule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateTrafficMirror返回参数结构体
 * @class
 */
class CreateTrafficMirrorResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID
         */
        this.TrafficMirrorId = null;
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
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDevicesBindInfo请求参数结构体
 * @class
 */
class DescribeDevicesBindInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 黑石私有网络唯一ID。
         */
        this.VpcId = null;
        /**
         * 主机ID或虚机IP列表，可用于获取绑定了该主机的负载均衡列表。
         */
        this.InstanceIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
    }
}
/**
 * BindL4Backends返回参数结构体
 * @class
 */
class BindL4BackendsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 获取流量镜像的监听器列表信息时返回的与流量镜像绑定的监听器信息。
 * @class
 */
class TrafficMirrorListener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 监听器ID。
         */
        this.ListenerId = null;
        /**
         * 监听器名称。
         */
        this.ListenerName = null;
        /**
         * 七层监听器协议类型，可选值：http,https。
         */
        this.Protocol = null;
        /**
         * 监听器的监听端口。
         */
        this.LoadBalancerPort = null;
        /**
         * 当前带宽。
         */
        this.Bandwidth = null;
        /**
         * 带宽上限。
         */
        this.MaxBandwidth = null;
        /**
         * 监听器类型。
         */
        this.ListenerType = null;
        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         */
        this.SslMode = null;
        /**
         * 服务端证书ID。
         */
        this.CertId = null;
        /**
         * 客户端证书ID。
         */
        this.CertCaId = null;
        /**
         * 添加时间。
         */
        this.AddTimestamp = null;
        /**
         * 负载均衡ID。
         */
        this.LoadBalancerId = null;
        /**
         * 私有网络名称。
         */
        this.VpcName = null;
        /**
         * 私有网络Cidr。
         */
        this.VpcCidrBlock = null;
        /**
         * 负载均衡的VIP。
         */
        this.LoadBalancerVips = null;
        /**
         * 负载均衡名称。
         */
        this.LoadBalancerName = null;
        /**
         * 负载均衡的IPV6的VIP。
         */
        this.LoadBalancerVipv6s = null;
        /**
         * 支持的IP协议类型。ipv4或者是ipv6。
         */
        this.IpProtocolType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerVipv6s = 'LoadBalancerVipv6s' in params ? params.LoadBalancerVipv6s : null;
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;
    }
}
/**
 * DescribeL7ListenersEx返回参数结构体
 * @class
 */
class DescribeL7ListenersExResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 此指定VPC中负载均衡的总数。
         */
        this.TotalCount = null;
        /**
         * 符合条件的监听器。
         */
        this.ListenerSet = null;
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
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L7ExListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 待与七层监听器转发规则解绑的物理机主机、虚拟机或半托管主机信息。
 * @class
 */
class UnbindL7Backend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待解绑的主机端口，可选值1~65535。
         */
        this.Port = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
    }
}
/**
 * 获取与流量镜像绑定的接收机信息时返回的接收机信息。
 * @class
 */
class TrafficMirrorReceiver extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 接收机实例ID。
         */
        this.InstanceId = null;
        /**
         * 接收机接收端口。
         */
        this.Port = null;
        /**
         * 接收机权重。
         */
        this.Weight = null;
        /**
         * 流量镜像ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 接收机别名。
         */
        this.Alias = null;
        /**
         * 接收机内网IP地址。
         */
        this.LanIp = null;
        /**
         * 接收机所在的子网的ID。
         */
        this.SubnetId = null;
        /**
         * 接收机所在的子网的名称。
         */
        this.SubnetName = null;
        /**
         * 接收机所在的子网的Cidr。
         */
        this.SubnetCidrBlock = null;
        /**
         * 接收机所在的私有网络的ID。
         */
        this.VpcId = null;
        /**
         * 接收机所在的私有网络的名称。
         */
        this.VpcName = null;
        /**
         * 接收机所在的私有网络的Cidr。
         */
        this.VpcCidrBlock = null;
        /**
         * 接收机的健康状态。
         */
        this.HealthStatus = null;
        /**
         * 接收机的可以执行的操作集合。
         */
        this.Operates = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetCidrBlock = 'SubnetCidrBlock' in params ? params.SubnetCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.Operates = 'Operates' in params ? params.Operates : null;
    }
}
/**
 * 流量镜像健康检查返回的接收机的端口及状态信息。
 * @class
 */
class TrafficMirrorPortStatus extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 接收机端口。
         */
        this.Port = null;
        /**
         * 状态。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
    }
}
/**
 * UploadCert返回参数结构体
 * @class
 */
class UploadCertResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 新建的证书ID。
         */
        this.CertId = null;
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTrafficMirrorReceivers返回参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiversResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 接收机列表，具体结构描述如data结构所示。
         */
        this.ReceiverSet = null;
        /**
         * 接收机总数。
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
        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new TrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteListeners请求参数结构体
 * @class
 */
class DeleteListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 待删除的负载均衡四层和七层监听器ID列表，可通过接口DescribeL4Listeners和DescribeL7Listeners查询。目前同时只能删除一种类型的监听器，并且删除七层监听器的数量上限为一个。
         */
        this.ListenerIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
    }
}
/**
 * ModifyL4BackendProbePort请求参数结构体
 * @class
 */
class ModifyL4BackendProbePortRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         */
        this.InstanceId = null;
        /**
         * 已绑定的主机端口。
         */
        this.Port = null;
        /**
         * 新的探测端口，可选值1~65535。
         */
        this.ProbePort = null;
        /**
         * 绑定类型。0：物理机 1：虚拟机IP 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProbePort = 'ProbePort' in params ? params.ProbePort : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * DescribeTrafficMirrors请求参数结构体
 * @class
 */
class DescribeTrafficMirrorsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID的数组，支持批量查询
         */
        this.TrafficMirrorIds = null;
        /**
         * 流量镜像实例别名数组。
         */
        this.Aliases = null;
        /**
         * 流量镜像实例所属的私有网络ID数组，形如：vpc-xxx。
         */
        this.VpcIds = null;
        /**
         * 分页的偏移量，也即从第几条记录开始查询
         */
        this.Offset = null;
        /**
         * 单次查询返回的条目数，默认值：500。
         */
        this.Limit = null;
        /**
         * 排序字段。trafficMirrorId或者createTime。
         */
        this.OrderField = null;
        /**
         * 排序方式，取值：0:增序(默认)，1:降序
         */
        this.Order = null;
        /**
         * 模糊匹配trafficMirrorId或者alias字段。
         */
        this.SearchKey = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorIds = 'TrafficMirrorIds' in params ? params.TrafficMirrorIds : null;
        this.Aliases = 'Aliases' in params ? params.Aliases : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
    }
}
/**
 * UploadCert请求参数结构体
 * @class
 */
class UploadCertRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 证书类型，可选值：CA，SVR。
         */
        this.CertType = null;
        /**
         * 证书内容。
         */
        this.Cert = null;
        /**
         * 证书别名。
         */
        this.Alias = null;
        /**
         * 私钥内容，证书类型为SVR时不需要传递。
         */
        this.Key = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Key = 'Key' in params ? params.Key : null;
    }
}
/**
 * DescribeL4ListenerInfo返回参数结构体
 * @class
 */
class DescribeL4ListenerInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的四层监听器列表。
         */
        this.ListenerSet = null;
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
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L4ListenerInfo();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * BindTrafficMirrorListeners请求参数结构体
 * @class
 */
class BindTrafficMirrorListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 七层监听器实例ID数组，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
    }
}
/**
 * ModifyL7BackendPort请求参数结构体
 * @class
 */
class ModifyL7BackendPortRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         */
        this.DomainId = null;
        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         */
        this.LocationId = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         */
        this.InstanceId = null;
        /**
         * 已绑定的主机端口。
         */
        this.Port = null;
        /**
         * 新的主机端口，可选值1~65535。
         */
        this.NewPort = null;
        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NewPort = 'NewPort' in params ? params.NewPort : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * ModifyL4BackendPort请求参数结构体
 * @class
 */
class ModifyL4BackendPortRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         */
        this.InstanceId = null;
        /**
         * 已绑定的主机端口。
         */
        this.Port = null;
        /**
         * 新的主机端口，可选值1~65535。
         */
        this.NewPort = null;
        /**
         * 绑定类型。0：物理机  1：虚拟机 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NewPort = 'NewPort' in params ? params.NewPort : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * DescribeL4Listeners返回参数结构体
 * @class
 */
class DescribeL4ListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 监听器信息数组。
         */
        this.ListenerSet = null;
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
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L4Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyL7Locations请求参数结构体
 * @class
 */
class ModifyL7LocationsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 待更新的七层转发规则信息数组。
         */
        this.RuleSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new ModifyL7LocationRule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
    }
}
/**
 * ModifyLoadBalancer返回参数结构体
 * @class
 */
class ModifyLoadBalancerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateL4Listeners返回参数结构体
 * @class
 */
class CreateL4ListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyL7BackendWeight返回参数结构体
 * @class
 */
class ModifyL7BackendWeightResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTrafficMirrors返回参数结构体
 * @class
 */
class DescribeTrafficMirrorsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像总数。
         */
        this.TotalCount = null;
        /**
         * 对象数组。数组元素为流量镜像信息，具体结构描述如list结构所示。
         */
        this.TrafficMirrorSet = null;
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
        if (params.TrafficMirrorSet) {
            this.TrafficMirrorSet = new Array();
            for (let z in params.TrafficMirrorSet) {
                let obj = new TrafficMirror();
                obj.deserialize(params.TrafficMirrorSet[z]);
                this.TrafficMirrorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeL7Backends请求参数结构体
 * @class
 */
class DescribeL7BackendsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         */
        this.DomainId = null;
        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         */
        this.LocationId = null;
        /**
         * 查询条件，传'all'则查询所有与规则绑定的主机信息。如果为all时，DomainId和LocationId参数没有意义不必传入，否则DomainId和LocationId参数必须传入。
         */
        this.QueryType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
    }
}
/**
 * 获取黑石负载均衡七层监听器时返回的七层监听器信息。
 * @class
 */
class L7Listener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 七层监听器实例ID。
         */
        this.ListenerId = null;
        /**
         * 七层监听器名称。
         */
        this.ListenerName = null;
        /**
         * 七层监听器协议类型，可选值：http,https。
         */
        this.Protocol = null;
        /**
         * 七层监听器的监听端口。
         */
        this.LoadBalancerPort = null;
        /**
         * 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         */
        this.ListenerType = null;
        /**
         * 七层监听器的认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         */
        this.SslMode = null;
        /**
         * 七层监听器关联的服务端证书ID。
         */
        this.CertId = null;
        /**
         * 七层监听器关联的客户端证书ID。
         */
        this.CertCaId = null;
        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
        /**
         * https转发类型。0：https。1：spdy。2：http2。3：spdy+http2。
         */
        this.ForwardProtocol = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
    }
}
/**
 * CreateL7Rules请求参数结构体
 * @class
 */
class CreateL7RulesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 七层转发规则信息数组，可以创建多个七层转发规则。目前一个七层监听器下面最多允许创建50个七层转发域名，而每一个转发域名下最多可以创建100个转发规则。目前只能单条创建，不能批量创建。
         */
        this.RuleSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new CreateL7Rule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
    }
}
/**
 * ModifyL7BackendWeight请求参数结构体
 * @class
 */
class ModifyL7BackendWeightRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         */
        this.DomainId = null;
        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         */
        this.LocationId = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         */
        this.InstanceId = null;
        /**
         * 权重信息，可选值0~100。
         */
        this.Weight = null;
        /**
         * 已绑定的主机端口。
         */
        this.Port = null;
        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * CreateL4Listeners请求参数结构体
 * @class
 */
class CreateL4ListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 监听器信息数组，可以创建多个监听器。目前一个负载均衡下面最多允许创建50个监听器
         */
        this.ListenerSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new CreateL4Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
    }
}
/**
 * ReplaceCert请求参数结构体
 * @class
 */
class ReplaceCertRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 要被替换的证书ID
         */
        this.OldCertId = null;
        /**
         * 证书内容
         */
        this.NewCert = null;
        /**
         * 证书名称
         */
        this.NewAlias = null;
        /**
         * 私钥内容，证书类型为SVR时不需要传递
         */
        this.NewKey = null;
        /**
         * 是否删除旧证书，0 表示不删除，1 表示删除
         */
        this.DeleteOld = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldCertId = 'OldCertId' in params ? params.OldCertId : null;
        this.NewCert = 'NewCert' in params ? params.NewCert : null;
        this.NewAlias = 'NewAlias' in params ? params.NewAlias : null;
        this.NewKey = 'NewKey' in params ? params.NewKey : null;
        this.DeleteOld = 'DeleteOld' in params ? params.DeleteOld : null;
    }
}
/**
 * BindL7Backends返回参数结构体
 * @class
 */
class BindL7BackendsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 获取七层监听器转发规则时返回的转发规则。
 * @class
 */
class L7Rule extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转发域名。
         */
        this.Domain = null;
        /**
         * 转发域名实例ID。
         */
        this.DomainId = null;
        /**
         * 转发路径当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
        /**
         * 该转发域名下面的转发路径列表。
         */
        this.LocationSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        if (params.LocationSet) {
            this.LocationSet = new Array();
            for (let z in params.LocationSet) {
                let obj = new L7RulesLocation();
                obj.deserialize(params.LocationSet[z]);
                this.LocationSet.push(obj);
            }
        }
    }
}
/**
 * UnbindTrafficMirrorReceivers返回参数结构体
 * @class
 */
class UnbindTrafficMirrorReceiversResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteL7Domains请求参数结构体
 * @class
 */
class DeleteL7DomainsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名实例ID列表，可通过接口DescribeL7Rules查询。
         */
        this.DomainIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainIds = 'DomainIds' in params ? params.DomainIds : null;
    }
}
/**
 * BindTrafficMirrorReceivers请求参数结构体
 * @class
 */
class BindTrafficMirrorReceiversRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 待绑定的黑石物理机信息数组。
         */
        this.ReceiverSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new BindTrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }
    }
}
/**
 * BindTrafficMirrorListeners返回参数结构体
 * @class
 */
class BindTrafficMirrorListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * BindL7Backends请求参数结构体
 * @class
 */
class BindL7BackendsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         */
        this.DomainId = null;
        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         */
        this.LocationId = null;
        /**
         * 待绑定的主机信息。可以绑定多个主机端口。目前一个七层转发路径下面最多允许绑定255个主机端口。
         */
        this.BackendSet = null;
        /**
         * 绑定类型。0：物理机，1：虚拟机 2：半托管机器。
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new BindL7Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * 待查询四层监听器绑定的主机信息。
 * @class
 */
class DescribeL4Backend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待绑定的主机端口，可选值1~65535。
         */
        this.Port = null;
        /**
         * 黑石物理机的主机ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
    }
}
/**
 * DescribeCertDetail返回参数结构体
 * @class
 */
class DescribeCertDetailResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 证书ID。
         */
        this.CertId = null;
        /**
         * 证书名称。
         */
        this.CertName = null;
        /**
         * 证书类型（SVR=服务器证书，CA=客户端证书）。
         */
        this.CertType = null;
        /**
         * 证书内容。
         */
        this.CertContent = null;
        /**
         * 证书主域名。
         */
        this.CertDomain = null;
        /**
         * 证书子域名列表。
         */
        this.CertSubjectDomain = null;
        /**
         * 证书上传时间。
         */
        this.CertUploadTime = null;
        /**
         * 证书生效时间。
         */
        this.CertBeginTime = null;
        /**
         * 证书失效时间。
         */
        this.CertEndTime = null;
        /**
         * 该证书关联的黑石负载均衡对象列表。
         */
        this.CertLoadBalancerSet = null;
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertDomain = 'CertDomain' in params ? params.CertDomain : null;
        this.CertSubjectDomain = 'CertSubjectDomain' in params ? params.CertSubjectDomain : null;
        this.CertUploadTime = 'CertUploadTime' in params ? params.CertUploadTime : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        if (params.CertLoadBalancerSet) {
            this.CertLoadBalancerSet = new Array();
            for (let z in params.CertLoadBalancerSet) {
                let obj = new CertDetailLoadBalancer();
                obj.deserialize(params.CertLoadBalancerSet[z]);
                this.CertLoadBalancerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeL4Backends请求参数结构体
 * @class
 */
class DescribeL4BackendsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 待查询的主机信息。
         */
        this.BackendSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new DescribeL4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
    }
}
/**
 * DescribeTrafficMirrorReceiverHealthStatus返回参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiverHealthStatusResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 内网IP和端口对应的状态。
         */
        this.ReceiversStatusSet = null;
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
        if (params.ReceiversStatusSet) {
            this.ReceiversStatusSet = new Array();
            for (let z in params.ReceiversStatusSet) {
                let obj = new TrafficMirrorReciversStatus();
                obj.deserialize(params.ReceiversStatusSet[z]);
                this.ReceiversStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * BindTrafficMirrorReceivers返回参数结构体
 * @class
 */
class BindTrafficMirrorReceiversResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ReplaceCert返回参数结构体
 * @class
 */
class ReplaceCertResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 新证书ID。
         */
        this.NewCertId = null;
        /**
         * 旧证书ID。
         */
        this.OldCertId = null;
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
        this.NewCertId = 'NewCertId' in params ? params.NewCertId : null;
        this.OldCertId = 'OldCertId' in params ? params.OldCertId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeLoadBalancerPortInfo请求参数结构体
 * @class
 */
class DescribeLoadBalancerPortInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
    }
}
/**
 * 获取设备绑定信息时返回的设备所绑定的转发路径信息。
 * @class
 */
class DevicesBindInfoLocation extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转发路径。
         */
        this.Url = null;
        /**
         * 转发路径实例ID。
         */
        this.LocationId = null;
        /**
         * 该转发路径所绑定的主机列表。
         */
        this.BackendSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new DevicesBindInfoBackend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
    }
}
/**
 * SetTrafficMirrorHealthSwitch返回参数结构体
 * @class
 */
class SetTrafficMirrorHealthSwitchResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteLoadBalancer请求参数结构体
 * @class
 */
class DeleteLoadBalancerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
    }
}
/**
 * UnbindTrafficMirrorListeners返回参数结构体
 * @class
 */
class UnbindTrafficMirrorListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 用于创建七层监听器的转发规则的信息。目前一个七层监听器下面最多允许创建50个七层转发域名，而每一个转发域名下最多可以创建100个转发规则。
 * @class
 */
class CreateL7Rule extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 七层转发规则的转发域名。
         */
        this.Domain = null;
        /**
         * 七层转发规则的转发路径。
         */
        this.Url = null;
        /**
         * 会话保持时间，单位：秒。可选值：30~3600。默认值0，表示不开启会话保持。
         */
        this.SessionExpire = null;
        /**
         * 健康检查开关：1（开启）、0（关闭）。默认值0，表示关闭。
         */
        this.HealthSwitch = null;
        /**
         * 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。
         */
        this.IntervalTime = null;
        /**
         * 健康检查健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         */
        this.HealthNum = null;
        /**
         * 健康检查不健康阈值，默认值：5，表示当连续探测五次不健康则表示该转发不正常，可选值：2-10，单位：次。
         */
        this.UnhealthNum = null;
        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         */
        this.HttpCodes = null;
        /**
         * 健康检查检查路径。
         */
        this.HttpCheckPath = null;
        /**
         * 健康检查检查域名。如果创建规则的域名使用通配符或正则表达式，则健康检查检查域名可自定义，否则必须跟健康检查检查域名一样。
         */
        this.HttpCheckDomain = null;
        /**
         * 均衡方式：ip_hash、wrr。默认值wrr。
         */
        this.BalanceMode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
    }
}
/**
 * CreateL7Rules返回参数结构体
 * @class
 */
class CreateL7RulesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyL7Listener请求参数结构体
 * @class
 */
class ModifyL7ListenerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 七层监听器名称。
         */
        this.ListenerName = null;
        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         */
        this.SslMode = null;
        /**
         * 服务端证书ID。
         */
        this.CertId = null;
        /**
         * 服务端证书名称。
         */
        this.CertName = null;
        /**
         * 服务端证书内容。
         */
        this.CertContent = null;
        /**
         * 服务端证书密钥。
         */
        this.CertKey = null;
        /**
         * 客户端证书ID。
         */
        this.CertCaId = null;
        /**
         * 客户端证书名称。
         */
        this.CertCaName = null;
        /**
         * 客户端证书内容。
         */
        this.CertCaContent = null;
        /**
         * 计费模式为按固定带宽方式时监听器的限速值，可选值：0-1000，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 转发协议。当监听器Protocol为https时并且SslMode为1或2时，有意义。可选的值为0：https，1：spdy，2：http2，3：spdy+http2。
         */
        this.ForwardProtocol = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.CertCaName = 'CertCaName' in params ? params.CertCaName : null;
        this.CertCaContent = 'CertCaContent' in params ? params.CertCaContent : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
    }
}
/**
 * 流量镜像进行健康检查的接收机信息。
 * @class
 */
class DescribeTrafficMirrorReceiver extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 物理机实例ID。
         */
        this.InstanceId = null;
        /**
         * 物理机绑定的端口。
         */
        this.Port = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
    }
}
/**
 * 监听器信息。
 * @class
 */
class L7ExListener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 绑定的监听器唯一ID。
         */
        this.ListenerId = null;
        /**
         * 监听器名称。
         */
        this.ListenerName = null;
        /**
         * 七层监听器协议类型，可选值：http,https。
         */
        this.Protocol = null;
        /**
         * 监听器的监听端口。
         */
        this.LoadBalancerPort = null;
        /**
         * 当前带宽。
         */
        this.Bandwidth = null;
        /**
         * 带宽上限。
         */
        this.MaxBandwidth = null;
        /**
         * 监听器类型。
         */
        this.ListenerType = null;
        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         */
        this.SslMode = null;
        /**
         * 服务端证书ID。
         */
        this.CertId = null;
        /**
         * 客户端证书ID。
         */
        this.CertCaId = null;
        /**
         * 添加时间。
         */
        this.AddTimestamp = null;
        /**
         * 负载均衡名ID。
         */
        this.LoadBalancerId = null;
        /**
         * 私有网络名称。
         */
        this.VpcName = null;
        /**
         * 私有网络Cidr。
         */
        this.VpcCidrBlock = null;
        /**
         * 负载均衡的VIP。
         */
        this.LoadBalancerVips = null;
        /**
         * 负载均衡名称。
         */
        this.LoadBalancerName = null;
        /**
         * 负载均衡IPV6的VIP。
         */
        this.LoadBalancerVipv6s = null;
        /**
         * 支持的IP协议类型。ipv4或者是ipv6。
         */
        this.IpProtocolType = null;
        /**
         * 是否绑定在入参指定的流量镜像中。
         */
        this.BindTrafficMirror = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerVipv6s = 'LoadBalancerVipv6s' in params ? params.LoadBalancerVipv6s : null;
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;
        this.BindTrafficMirror = 'BindTrafficMirror' in params ? params.BindTrafficMirror : null;
    }
}
/**
 * 查询绑定了某主机的七层监听器时返回的七层监听器信息。
 * @class
 */
class L7ListenerInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 七层监听器实例ID。
         */
        this.ListenerId = null;
        /**
         * 七层监听器名称。
         */
        this.ListenerName = null;
        /**
         * 七层监听器协议类型，可选值：http,https。
         */
        this.Protocol = null;
        /**
         * 七层监听器的监听端口。
         */
        this.LoadBalancerPort = null;
        /**
         * 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         */
        this.ListenerType = null;
        /**
         * 七层监听器的认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         */
        this.SslMode = null;
        /**
         * 七层监听器关联的服务端证书ID。
         */
        this.CertId = null;
        /**
         * 七层监听器关联的客户端证书ID。
         */
        this.CertCaId = null;
        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
        /**
         * 返回的转发规则列表。
         */
        this.RuleSet = null;
        /**
         * https转发类型。0：https。1：spdy。2：http2。3：spdy+http2。
         */
        this.ForwardProtocol = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new L7ListenerInfoRule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
    }
}
/**
 * 查询绑定了某主机的七层监听器时返回的转发规则。
 * @class
 */
class L7ListenerInfoRule extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转发域名。
         */
        this.Domain = null;
        /**
         * 转发域名实例ID。
         */
        this.DomainId = null;
        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
        /**
         * 该转发域名下面的转发路径列表。
         */
        this.LocationSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        if (params.LocationSet) {
            this.LocationSet = new Array();
            for (let z in params.LocationSet) {
                let obj = new L7ListenerInfoLocation();
                obj.deserialize(params.LocationSet[z]);
                this.LocationSet.push(obj);
            }
        }
    }
}
/**
 * DescribeL7Backends返回参数结构体
 * @class
 */
class DescribeL7BackendsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的绑定关系列表。
         */
        this.BackendSet = null;
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
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new L7Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 过滤器
 * @class
 */
class Filter extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
         */
        this.Name = null;
        /**
         * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
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
 * 获取设备绑定信息时返回的设备所绑定的转发规则信息。
 * @class
 */
class DevicesBindInfoRule extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转发域名。
         */
        this.Domain = null;
        /**
         * 转发域名ID。
         */
        this.DomainId = null;
        /**
         * 转发路径列表。
         */
        this.LocationSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        if (params.LocationSet) {
            this.LocationSet = new Array();
            for (let z in params.LocationSet) {
                let obj = new DevicesBindInfoLocation();
                obj.deserialize(params.LocationSet[z]);
                this.LocationSet.push(obj);
            }
        }
    }
}
/**
 * 获取流量镜像实例的列表信息时返回的流量镜像信息。
 * @class
 */
class TrafficMirror extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 流量镜像名称。
         */
        this.Alias = null;
        /**
         * 流量镜像所在的私有网络ID。
         */
        this.VpcId = null;
        /**
         * 接收机负载均衡方式。wrr，ip_hash，wlc。
         */
        this.LoadBalancerType = null;
        /**
         * 是否开始对接收机的健康检查。0：关闭，非0：开启。
         */
        this.HealthSwitch = null;
        /**
         * 健康阈值。
         */
        this.HealthNum = null;
        /**
         * 不健康阈值。
         */
        this.UnhealthNum = null;
        /**
         * 检查间隔。
         */
        this.IntervalTime = null;
        /**
         * 检查域名。
         */
        this.HttpCheckDomain = null;
        /**
         * 检查目录。
         */
        this.HttpCheckPath = null;
        /**
         * 健康检查返回码。 1：1xx，2：2xx，3：3xx，4：4xx，5：5xx。
         */
        this.HttpCodes = null;
        /**
         * 创建时间。
         */
        this.CreateTime = null;
        /**
         * 流量镜像所在私有网络的Cidr。
         */
        this.VpcCidrBlock = null;
        /**
         * 流量镜像所在私有网络的名称。
         */
        this.VpcName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
    }
}
/**
 * DescribeLoadBalancers请求参数结构体
 * @class
 */
class DescribeLoadBalancersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡器ID数组
         */
        this.LoadBalancerIds = null;
        /**
         * 负载均衡的类型 : open表示公网LB类型，internal表示内网LB类型
         */
        this.LoadBalancerType = null;
        /**
         * 负载均衡器名称
         */
        this.LoadBalancerName = null;
        /**
         * 负载均衡域名。规则：1-60个小写英文字母、数字、点号“.”或连接线“-”。内网类型的负载均衡不能配置该字段
         */
        this.Domain = null;
        /**
         * 负载均衡获得的公网IP地址,支持多个
         */
        this.LoadBalancerVips = null;
        /**
         * 数据偏移量，默认为0
         */
        this.Offset = null;
        /**
         * 返回数据长度，默认为20
         */
        this.Limit = null;
        /**
         * 模糊查找名称、域名、VIP
         */
        this.SearchKey = null;
        /**
         * 排序字段，支持：loadBalancerName,createTime,domain,loadBalancerType
         */
        this.OrderBy = null;
        /**
         * 1倒序，0顺序，默认顺序
         */
        this.OrderType = null;
        /**
         * 项目ID
         */
        this.ProjectId = null;
        /**
         * 是否筛选独占集群，0表示非独占集群，1表示四层独占集群，2表示七层独占集群，3表示四层和七层独占集群，4表示共享容灾
         */
        this.Exclusive = null;
        /**
         * 该负载均衡对应的tgw集群（fullnat,tunnel,dnat）
         */
        this.TgwSetType = null;
        /**
         * 该负载均衡对应的所在的私有网络ID
         */
        this.VpcId = null;
        /**
         * 'CONFLIST' 查询带confId的LB列表，'CONFID' 查询某个confId绑定的LB列表
         */
        this.QueryType = null;
        /**
         * 个性化配置ID
         */
        this.ConfId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.ConfId = 'ConfId' in params ? params.ConfId : null;
    }
}
/**
 * 获取设备绑定信息时返回的设备被绑定所在的负载均衡信息。
 * @class
 */
class DevicesBindInfoLoadBalancer extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID。
         */
        this.LoadBalancerId = null;
        /**
         * 开发商AppId。
         */
        this.AppId = null;
        /**
         * 负载均衡所属的项目ID。
         */
        this.ProjectId = null;
        /**
         * 黑石私有网络唯一ID。
         */
        this.VpcId = null;
        /**
         * 负载均衡的IP地址。
         */
        this.Vip = null;
        /**
         * 负载均衡对应的TGW集群类别，取值为tunnel或fullnat。tunnel表示隧道集群，fullnat表示FULLNAT集群。
         */
        this.TgwSetType = null;
        /**
         * 是否独占TGW集群。
         */
        this.Exclusive = null;
        /**
         * 具有该绑定关系的四层监听器列表。
         */
        this.L4ListenerSet = null;
        /**
         * 具有该绑定关系的七层监听器列表。
         */
        this.L7ListenerSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        if (params.L4ListenerSet) {
            this.L4ListenerSet = new Array();
            for (let z in params.L4ListenerSet) {
                let obj = new DevicesBindInfoL4Listener();
                obj.deserialize(params.L4ListenerSet[z]);
                this.L4ListenerSet.push(obj);
            }
        }
        if (params.L7ListenerSet) {
            this.L7ListenerSet = new Array();
            for (let z in params.L7ListenerSet) {
                let obj = new DevicesBindInfoL7Listener();
                obj.deserialize(params.L7ListenerSet[z]);
                this.L7ListenerSet.push(obj);
            }
        }
    }
}
/**
 * 查询四层监听器时返回的四层监听器信息。
 * @class
 */
class L4Listener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 监听器ID。
         */
        this.ListenerId = null;
        /**
         * 用户自定义的监听器名称。
         */
        this.ListenerName = null;
        /**
         * 负载均衡实例监听器协议类型，可选值tcp，udp。
         */
        this.Protocol = null;
        /**
         * 负载均衡监听器的监听接口，可选值1~65535。
         */
        this.LoadBalancerPort = null;
        /**
         * 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         */
        this.ListenerType = null;
        /**
         * 会话保持时间。单位：秒
         */
        this.SessionExpire = null;
        /**
         * 是否开启了检查：1（开启）、0（关闭）。
         */
        this.HealthSwitch = null;
        /**
         * 响应超时时间，单位：秒。
         */
        this.TimeOut = null;
        /**
         * 检查间隔，单位：秒。
         */
        this.IntervalTime = null;
        /**
         * 负载均衡监听器健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         */
        this.HealthNum = null;
        /**
         * 负载均衡监听器不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         */
        this.UnhealthNum = null;
        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         */
        this.CustomHealthSwitch = null;
        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         */
        this.InputType = null;
        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         */
        this.LineSeparatorType = null;
        /**
         * 自定义探测请求内容。
         */
        this.HealthRequest = null;
        /**
         * 自定义探测返回内容。
         */
        this.HealthResponse = null;
        /**
         * 是否开启toa：1（开启）、0（关闭）。
         */
        this.ToaFlag = null;
        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
        /**
         * 转发后端服务器调度类型。
         */
        this.BalanceMode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
    }
}
/**
 * 用于创建四层监听器的监听器信息。目前一个负载均衡下面最多允许创建50个七层监听器。
 * @class
 */
class CreateL7Listener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 七层监听器端口，可选值1~65535。
         */
        this.LoadBalancerPort = null;
        /**
         * 七层监听器协议类型，可选值：http,https。
         */
        this.Protocol = null;
        /**
         * 七层监听器名称。
         */
        this.ListenerName = null;
        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。当创建的是https类型的监听器时，此值必选。
         */
        this.SslMode = null;
        /**
         * 服务端证书ID。当创建的是https类型的监听器时，此值必选。
         */
        this.CertId = null;
        /**
         * 服务端证书名称。
         */
        this.CertName = null;
        /**
         * 服务端证书内容。
         */
        this.CertContent = null;
        /**
         * 服务端证书密钥。
         */
        this.CertKey = null;
        /**
         * 客户端证书ID。
         */
        this.CertCaId = null;
        /**
         * 客户端证书名称。
         */
        this.CertCaName = null;
        /**
         * 客户端证书内容。
         */
        this.CertCaContent = null;
        /**
         * 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 转发协议。当Protocol为https时并且SslMode为1或2时，有意义。可选的值为0：https，1：spdy，2：http2，3：spdy+http2。
         */
        this.ForwardProtocol = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.CertCaName = 'CertCaName' in params ? params.CertCaName : null;
        this.CertCaContent = 'CertCaContent' in params ? params.CertCaContent : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
    }
}
/**
 * DeleteLoadBalancer返回参数结构体
 * @class
 */
class DeleteLoadBalancerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateTrafficMirror请求参数结构体
 * @class
 */
class CreateTrafficMirrorRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例别名。
         */
        this.Alias = null;
        /**
         * 流量镜像实例所属的私有网络ID，形如：vpc-xxx。
         */
        this.VpcId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
    }
}
/**
 * BindL4Backends请求参数结构体
 * @class
 */
class BindL4BackendsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 四层监听器实例ID，可通过接口DescribeL4Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 待绑定的主机信息。可以绑定多个主机端口。目前一个四层监听器下面最多允许绑定255个主机端口。
         */
        this.BackendSet = null;
        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new BindL4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * DescribeL7ListenerInfo返回参数结构体
 * @class
 */
class DescribeL7ListenerInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的七层监听器列表。
         */
        this.ListenerSet = null;
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
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L7ListenerInfo();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeL7Listeners返回参数结构体
 * @class
 */
class DescribeL7ListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的七层监听器列表。
         */
        this.ListenerSet = null;
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
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L7Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteListeners返回参数结构体
 * @class
 */
class DeleteListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateLoadBalancers返回参数结构体
 * @class
 */
class CreateLoadBalancersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 创建的黑石负载均衡实例ID。
         */
        this.LoadBalancerIds = null;
        /**
         * 创建负载均衡的异步任务ID。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 待与流量镜像解绑的接收机信息。
 * @class
 */
class UnbindTrafficMirrorReceiver extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待解绑的主机端口，可选值1~65535。
         */
        this.Port = null;
        /**
         * 待解绑的主机实例ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
    }
}
/**
 * ModifyLoadBalancerChargeMode返回参数结构体
 * @class
 */
class ModifyLoadBalancerChargeModeResponse extends abstract_model_1.AbstractModel {
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
 * UnbindL7Backends请求参数结构体
 * @class
 */
class UnbindL7BackendsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         */
        this.DomainId = null;
        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         */
        this.LocationId = null;
        /**
         * 待绑定的主机信息。
         */
        this.BackendSet = null;
        /**
         * 绑定类型。0：物理机  1：虚拟机 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new UnbindL7Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * 查询绑定了某主机的七层监听器时返回的转发路径。
 * @class
 */
class L7ListenerInfoLocation extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转发路径。
         */
        this.Url = null;
        /**
         * 转发路径实例ID。
         */
        this.LocationId = null;
        /**
         * 会话保持时间。
         */
        this.SessionExpire = null;
        /**
         * 是否开启健康检查。
         */
        this.HealthSwitch = null;
        /**
         * 健康检查检查路径。
         */
        this.HttpCheckPath = null;
        /**
         * 健康检查检查域名。
         */
        this.HttpCheckDomain = null;
        /**
         * 健康检查检查间隔时间。
         */
        this.IntervalTime = null;
        /**
         * 健康检查健康阈值。
         */
        this.HealthNum = null;
        /**
         * 健康检查不健康阈值。
         */
        this.UnhealthNum = null;
        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         */
        this.HttpCodes = null;
        /**
         * 均衡方式。
         */
        this.BalanceMode = null;
        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
        /**
         * 该转发路径所绑定的主机列表。
         */
        this.BackendSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new L7ListenerInfoBackend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
    }
}
/**
 * 获取七层转发规则时返回的转发域名下面的转发路径。
 * @class
 */
class L7RulesLocation extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转发路径。
         */
        this.Url = null;
        /**
         * 转发路径实例ID。
         */
        this.LocationId = null;
        /**
         * 会话保持时间。
         */
        this.SessionExpire = null;
        /**
         * 是否开启健康检查。
         */
        this.HealthSwitch = null;
        /**
         * 健康检查检查路径。
         */
        this.HttpCheckPath = null;
        /**
         * 健康检查检查域名。
         */
        this.HttpCheckDomain = null;
        /**
         * 健康检查检查间隔时间。
         */
        this.IntervalTime = null;
        /**
         * 健康检查健康阈值。
         */
        this.HealthNum = null;
        /**
         * 健康检查不健康阈值。
         */
        this.UnhealthNum = null;
        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         */
        this.HttpCodes = null;
        /**
         * 均衡方式。
         */
        this.BalanceMode = null;
        /**
         * 转发路径当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         */
        this.Status = null;
        /**
         * 创建时间戳。
         */
        this.AddTimestamp = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
    }
}
/**
 * 修改负载均衡计费方式的监听器信息。
 * @class
 */
class ModifyLoadBalancerChargeModeListener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 监听器ID。
         */
        this.ListenerId = null;
        /**
         * 协议类型。
         */
        this.Protocol = null;
        /**
         * 带宽。
         */
        this.Bandwidth = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
    }
}
/**
 * 流量镜像健康检查返回的接收机状态信息。
 * @class
 */
class TrafficMirrorReciversStatus extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 内网IP。
         */
        this.LanIp = null;
        /**
         * 端口及对应的状态。
         */
        this.ReceiversPortStatusSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        if (params.ReceiversPortStatusSet) {
            this.ReceiversPortStatusSet = new Array();
            for (let z in params.ReceiversPortStatusSet) {
                let obj = new TrafficMirrorPortStatus();
                obj.deserialize(params.ReceiversPortStatusSet[z]);
                this.ReceiversPortStatusSet.push(obj);
            }
        }
    }
}
/**
 * CreateLoadBalancers请求参数结构体
 * @class
 */
class CreateLoadBalancersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 黑石负载均衡实例所属的私有网络ID。
         */
        this.VpcId = null;
        /**
         * 负载均衡的类型，取值为open或internal。open表示公网(有日租)，internal表示内网。
         */
        this.LoadBalancerType = null;
        /**
         * 在私有网络内购买内网负载均衡实例的时候需要指定子网ID，内网负载均衡实例的VIP将从这个子网中产生。其他情况不用填写该字段。
         */
        this.SubnetId = null;
        /**
         * 负载均衡所属项目ID。不填则属于默认项目。
         */
        this.ProjectId = null;
        /**
         * 购买黑石负载均衡实例的数量。默认值为1, 最大值为20。
         */
        this.GoodsNum = null;
        /**
         * 黑石负载均衡的计费模式，取值为flow和bandwidth，其中flow模式表示流量模式，bandwidth表示带宽模式。默认值为flow。
         */
        this.PayMode = null;
        /**
         * 负载均衡对应的TGW集群类别，取值为tunnel、fullnat或dnat。tunnel表示隧道集群，fullnat表示FULLNAT集群（普通外网负载均衡），dnat表示DNAT集群（增强型外网负载均衡）。默认值为fullnat。如需获取client IP，可以选择 tunnel 模式，fullnat 模式（tcp 通过toa 获取），dnat 模式。
         */
        this.TgwSetType = null;
        /**
         * 负载均衡的独占类别，取值为0表示非独占，1表示四层独占，2表示七层独占，3表示四层和七层独占，4表示共享容灾。
         */
        this.Exclusive = null;
        /**
         * 指定的VIP，如果指定，则数量必须与goodsNum一致。如果不指定，则由后台分配随机VIP。
         */
        this.SpecifiedVips = null;
        /**
         * （未全地域开放）保障型负载均衡设定参数，如果类别选择保障型则需传入此参数。
         */
        this.BzConf = null;
        /**
         * IP协议类型。可取的值为“ipv4”或“ipv6”。
         */
        this.IpProtocolType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.SpecifiedVips = 'SpecifiedVips' in params ? params.SpecifiedVips : null;
        if (params.BzConf) {
            let obj = new CreateLoadBalancerBzConf();
            obj.deserialize(params.BzConf);
            this.BzConf = obj;
        }
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;
    }
}
/**
 * DescribeLoadBalancerPortInfo返回参数结构体
 * @class
 */
class DescribeLoadBalancerPortInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的监听器列表（四层和七层）。
         */
        this.ListenerSet = null;
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
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new LoadBalancerPortInfoListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeL7ListenerInfo请求参数结构体
 * @class
 */
class DescribeL7ListenerInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 查找的键值，可用于模糊查找有该转发域名的监听器。
         */
        this.SearchKey = null;
        /**
         * 主机ID或虚机IP列表，可用于获取绑定了该主机的监听器。
         */
        this.InstanceIds = null;
        /**
         * 是否获取转发规则下的主机信息。默认为0，不获取。
         */
        this.IfGetBackendInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.IfGetBackendInfo = 'IfGetBackendInfo' in params ? params.IfGetBackendInfo : null;
    }
}
/**
 * ModifyL4Listener请求参数结构体
 * @class
 */
class ModifyL4ListenerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 四层监听器ID。可通过接口DescribeL4Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 四层监听器名称。
         */
        this.ListenerName = null;
        /**
         * 会话保持时间，单位：秒。可选值：900~3600。
         */
        this.SessionExpire = null;
        /**
         * 是否开启健康检查：1（开启）、0（关闭）。默认值0，表示关闭。
         */
        this.HealthSwitch = null;
        /**
         * 健康检查的响应超时时间，可选值：2-60，默认值：2，单位:秒。<br><font color="red">响应超时时间要小于检查间隔时间。</font>
         */
        this.TimeOut = null;
        /**
         * 健康检查间隔，默认值：5，可选值：5-300，单位：秒。
         */
        this.IntervalTime = null;
        /**
         * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         */
        this.HealthNum = null;
        /**
         * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         */
        this.UnhealthNum = null;
        /**
         * 监听器最大带宽值，用于计费模式为固定带宽计费。可选值：0-1000，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         */
        this.CustomHealthSwitch = null;
        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         */
        this.InputType = null;
        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         */
        this.LineSeparatorType = null;
        /**
         * 自定义探测请求内容。
         */
        this.HealthRequest = null;
        /**
         * 自定义探测返回内容。
         */
        this.HealthResponse = null;
        /**
         * 是否开启toa。可选值：0（关闭）、1（开启），默认关闭。（该字段在负载均衡为fullnat类型下才生效）
         */
        this.ToaFlag = null;
        /**
         * 四层调度方式。wrr，wlc。
         */
        this.BalanceMode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
    }
}
/**
 * 查询四层监听器返回的与监听器绑定关系的主机信息。
 * @class
 */
class L4Backend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 绑定类别（0代表黑石物理机，1代表虚拟机IP）。
         */
        this.BindType = null;
        /**
         * 主机端口。
         */
        this.Port = null;
        /**
         * 权重。
         */
        this.Weight = null;
        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         */
        this.Status = null;
        /**
         * 黑石物理机的主机ID。
         */
        this.InstanceId = null;
        /**
         * 黑石物理机的别名。
         */
        this.Alias = null;
        /**
         * 主机IP。
         */
        this.LanIp = null;
        /**
         * 黑石物理机当前可以执行的操作。
         */
        this.Operates = null;
        /**
         * 主机探测端口。
         */
        this.ProbePort = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.Operates = 'Operates' in params ? params.Operates : null;
        this.ProbePort = 'ProbePort' in params ? params.ProbePort : null;
    }
}
/**
 * 获取七层转发路径绑定的主机列表时返回的主机信息。
 * @class
 */
class L7Backend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 绑定类别（0代表黑石物理机，1代表虚拟机IP）。
         */
        this.BindType = null;
        /**
         * 主机端口。
         */
        this.Port = null;
        /**
         * 权重。
         */
        this.Weight = null;
        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         */
        this.Status = null;
        /**
         * 黑石物理机的主机ID。
         */
        this.InstanceId = null;
        /**
         * 黑石物理机的别名。
         */
        this.Alias = null;
        /**
         * 主机IP。
         */
        this.LanIp = null;
        /**
         * 黑石物理机的管理IP。
         */
        this.MgtIp = null;
        /**
         * 黑石物理机当前可以执行的操作。
         */
        this.Operates = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.MgtIp = 'MgtIp' in params ? params.MgtIp : null;
        this.Operates = 'Operates' in params ? params.Operates : null;
    }
}
/**
 * 修改黑石负载均衡七层转发路径时待修改的七层转发规则信息。
 * @class
 */
class ModifyL7LocationRule extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         */
        this.DomainId = null;
        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         */
        this.LocationId = null;
        /**
         * 转发路径。
         */
        this.Url = null;
        /**
         * 会话保持时间，单位：秒。可选值：30~3600。默认值0，表示不开启会话保持。
         */
        this.SessionExpire = null;
        /**
         * 健康检查开关：1（开启）、0（关闭）。默认值0，表示关闭。
         */
        this.HealthSwitch = null;
        /**
         * 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。
         */
        this.IntervalTime = null;
        /**
         * 健康检查健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         */
        this.HealthNum = null;
        /**
         * 健康检查不健康阈值，默认值：5，表示当连续探测五次不健康则表示该转发不正常，可选值：2-10，单位：次。
         */
        this.UnhealthNum = null;
        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         */
        this.HttpCodes = null;
        /**
         * 健康检查检查路径。
         */
        this.HttpCheckPath = null;
        /**
         * 健康检查检查域名。如果规则的域名使用通配符或正则表达式，则健康检查检查域名可自定义，否则必须跟健康检查检查域名一样。不填表示不修改。
         */
        this.HttpCheckDomain = null;
        /**
         * 均衡方式：ip_hash、wrr。默认值wrr。
         */
        this.BalanceMode = null;
        /**
         * 转发域名。
         */
        this.Domain = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
    }
}
/**
 * ModifyLoadBalancer请求参数结构体
 * @class
 */
class ModifyLoadBalancerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 负载均衡器名称，规则：1-20个英文、汉字、数字、连接线“-”或下划线“_”。
         */
        this.LoadBalancerName = null;
        /**
         * 域名前缀，负载均衡的域名由用户输入的域名前缀与配置文件中的域名后缀一起组合而成，保证是唯一的域名。规则：1-20个小写英文字母、数字或连接线“-”。内网类型的负载均衡不能配置该字段。
         */
        this.DomainPrefix = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;
    }
}
/**
 * 获取设备绑定信息时返回的七层监听器信息。
 * @class
 */
class DevicesBindInfoL7Listener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 七层监听器实例ID。
         */
        this.ListenerId = null;
        /**
         * 七层监听器协议类型，可选值：http,https。
         */
        this.Protocol = null;
        /**
         * 七层监听器的监听端口。
         */
        this.LoadBalancerPort = null;
        /**
         * 返回的转发规则列表。
         */
        this.RuleSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new DevicesBindInfoRule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
    }
}
/**
 * DescribeL4Listeners请求参数结构体
 * @class
 */
class DescribeL4ListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 四层监听器实例ID数组，可通过接口DescribeL4Listeners查询。
         */
        this.ListenerIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
    }
}
/**
 * CreateL7Listeners返回参数结构体
 * @class
 */
class CreateL7ListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 新建的负载均衡七层监听器的唯一ID列表。
         */
        this.ListenerIds = null;
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
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 用于创建负载均衡的个性化配置。
 * @class
 */
class CreateLoadBalancerBzConf extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 按月/按小时计费。
         */
        this.BzPayMode = null;
        /**
         * 四层可选按带宽，连接数衡量。
         */
        this.BzL4Metrics = null;
        /**
         * 七层可选按qps衡量。
         */
        this.BzL7Metrics = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BzPayMode = 'BzPayMode' in params ? params.BzPayMode : null;
        this.BzL4Metrics = 'BzL4Metrics' in params ? params.BzL4Metrics : null;
        this.BzL7Metrics = 'BzL7Metrics' in params ? params.BzL7Metrics : null;
    }
}
/**
 * DeleteTrafficMirror请求参数结构体
 * @class
 */
class DeleteTrafficMirrorRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID数组，可以批量删除，每次删除上限为20
         */
        this.TrafficMirrorIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorIds = 'TrafficMirrorIds' in params ? params.TrafficMirrorIds : null;
    }
}
/**
 * CreateL7Listeners请求参数结构体
 * @class
 */
class CreateL7ListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID
         */
        this.LoadBalancerId = null;
        /**
         * 七层监听器信息数组，可以创建多个七层监听器。目前一个负载均衡下面最多允许创建50个七层监听器。
         */
        this.ListenerSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new CreateL7Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
    }
}
/**
 * 待与四层监听器绑定的物理机主机、虚拟机或半托管主机信息。目前一个四层监听器下面最多允许绑定255个主机端口。
 * @class
 */
class BindL4Backend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待绑定的主机端口，可选值1~65535。
         */
        this.Port = null;
        /**
         * 待绑定的黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         */
        this.InstanceId = null;
        /**
         * 待绑定的主机权重，可选值0~100。
         */
        this.Weight = null;
        /**
         * 自定义探测的主机端口，可选值1~65535。（需要监听器开启自定义健康检查）
         */
        this.ProbePort = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.ProbePort = 'ProbePort' in params ? params.ProbePort : null;
    }
}
/**
 * DescribeL7ListenersEx请求参数结构体
 * @class
 */
class DescribeL7ListenersExRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的监听器中标识是否绑定在此流量镜像中。
         */
        this.TrafficMirrorId = null;
        /**
         * 待获取监听器所在的VPC的ID。
         */
        this.VpcId = null;
        /**
         * 此VPC中获取负载均衡的偏移。
         */
        this.Offset = null;
        /**
         * 此VPC中获取负载均衡的数量。
         */
        this.Limit = null;
        /**
         * 过滤条件。
LoadBalancerId - String - （过滤条件）负载均衡ID。
LoadBalancerName - String - （过滤条件）负载均衡名称。
Vip - String - （过滤条件）VIP。
ListenerId - String - （过滤条件）监听器ID。
ListenerName -  String - （过滤条件）监听器名称。
Protocol -  String - （过滤条件）七层协议。
LoadBalancerPort -  String - （过滤条件）监听器端口。
         */
        this.Filters = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
    }
}
/**
 * DescribeLoadBalancerTaskResult返回参数结构体
 * @class
 */
class DescribeLoadBalancerTaskResultResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务当前状态。0：成功，1：失败，2：进行中。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UnbindTrafficMirrorReceivers请求参数结构体
 * @class
 */
class UnbindTrafficMirrorReceiversRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 待绑定的主机实例ID和端口数组。
         */
        this.ReceiverSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new UnbindTrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }
    }
}
/**
 * UnbindTrafficMirrorListeners请求参数结构体
 * @class
 */
class UnbindTrafficMirrorListenersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 七层监听器实例ID数组，可通过接口DescribeL7Listeners查询。
         */
        this.ListenerIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
    }
}
/**
 * DescribeCertDetail请求参数结构体
 * @class
 */
class DescribeCertDetailRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 证书ID。
         */
        this.CertId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
    }
}
/**
 * DescribeDevicesBindInfo返回参数结构体
 * @class
 */
class DescribeDevicesBindInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的负载均衡绑定信息。
         */
        this.LoadBalancerSet = null;
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
        if (params.LoadBalancerSet) {
            this.LoadBalancerSet = new Array();
            for (let z in params.LoadBalancerSet) {
                let obj = new DevicesBindInfoLoadBalancer();
                obj.deserialize(params.LoadBalancerSet[z]);
                this.LoadBalancerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 获取黑石负载均衡端口相关信息时返回的监听器信息（四层和七层）。
 * @class
 */
class LoadBalancerPortInfoListener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡监听器ID。
         */
        this.ListenerId = null;
        /**
         * 监听器名称。
         */
        this.ListenerName = null;
        /**
         * 监听器协议类型，可选值：http，https，tcp，udp。
         */
        this.Protocol = null;
        /**
         * 监听器的监听端口。
         */
        this.LoadBalancerPort = null;
        /**
         * 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         */
        this.Status = null;
        /**
         * 与监听器绑定的主机端口。
         */
        this.Port = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Port = 'Port' in params ? params.Port : null;
    }
}
/**
 * DescribeL4Backends返回参数结构体
 * @class
 */
class DescribeL4BackendsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回的绑定关系列表。
         */
        this.BackendSet = null;
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
        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new L4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 用于创建四层监听器的监听器信息。目前一个负载均衡下面最多允许创建50个监听器。
 * @class
 */
class CreateL4Listener extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 监听器监听端口，可选值1~65535。
         */
        this.LoadBalancerPort = null;
        /**
         * 监听器协议类型，可选值tcp，udp。
         */
        this.Protocol = null;
        /**
         * 监听器名称。
         */
        this.ListenerName = null;
        /**
         * 监听器的会话保持时间，单位：秒。可选值：900~3600,不传表示不开启会话保持。
         */
        this.SessionExpire = null;
        /**
         * 是否开启健康检查：1（开启）、0（关闭）。默认值0，表示关闭。
         */
        this.HealthSwitch = null;
        /**
         * 健康检查的响应超时时间，可选值：2-60，默认值：2，单位:秒。<br><font color="red">响应超时时间要小于检查间隔时间。</font>
         */
        this.TimeOut = null;
        /**
         * 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。
         */
        this.IntervalTime = null;
        /**
         * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         */
        this.HealthNum = null;
        /**
         * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         */
        this.UnhealthNum = null;
        /**
         * 监听器最大带宽值，用于计费模式为固定带宽计费，可选值：0-1000，单位：Mbps。
         */
        this.Bandwidth = null;
        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         */
        this.CustomHealthSwitch = null;
        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         */
        this.InputType = null;
        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         */
        this.LineSeparatorType = null;
        /**
         * 自定义探测请求内容。
         */
        this.HealthRequest = null;
        /**
         * 自定义探测返回内容。
         */
        this.HealthResponse = null;
        /**
         * 是否开启toa。可选值：0（关闭）、1（开启），默认关闭。（该字段在负载均衡为fullnat类型下才生效）
         */
        this.ToaFlag = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;
    }
}
/**
 * DescribeTrafficMirrorListeners返回参数结构体
 * @class
 */
class DescribeTrafficMirrorListenersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 监听器列表。
         */
        this.ListenerSet = null;
        /**
         * 监听器总数。
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
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new TrafficMirrorListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeLoadBalancers返回参数结构体
 * @class
 */
class DescribeLoadBalancersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回负载均衡信息列表。
         */
        this.LoadBalancerSet = null;
        /**
         * 符合条件的负载均衡总数。
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
        if (params.LoadBalancerSet) {
            this.LoadBalancerSet = new Array();
            for (let z in params.LoadBalancerSet) {
                let obj = new LoadBalancer();
                obj.deserialize(params.LoadBalancerSet[z]);
                this.LoadBalancerSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteL7Rules返回参数结构体
 * @class
 */
class DeleteL7RulesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 获取证书信息时返回的所用在的负载均衡信息。
 * @class
 */
class CertDetailLoadBalancer extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 黑石负载均衡实例ID。
         */
        this.LoadBalancerId = null;
        /**
         * 黑石负载均衡实例名称。
         */
        this.LoadBalancerName = null;
        /**
         * 该黑石负载均衡所在的VpcId。
         */
        this.VpcId = null;
        /**
         * 该黑石负载均衡所在的regionId。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
    }
}
/**
 * DescribeTrafficMirrorReceivers请求参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiversRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 接收机黑石物理机实例ID数组。
         */
        this.InstanceIds = null;
        /**
         * 接收机接收端口数组。
         */
        this.Ports = null;
        /**
         * 接收机实例权重数组。
         */
        this.Weights = null;
        /**
         * 分页的偏移量，也即从第几条记录开始查询
         */
        this.Offset = null;
        /**
         * 单次查询返回的条目数，默认值：500。
         */
        this.Limit = null;
        /**
         * 搜索instance或者alias
         */
        this.VagueStr = null;
        /**
         * 搜索IP
         */
        this.VagueIp = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Weights = 'Weights' in params ? params.Weights : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.VagueStr = 'VagueStr' in params ? params.VagueStr : null;
        this.VagueIp = 'VagueIp' in params ? params.VagueIp : null;
    }
}
/**
 * SetTrafficMirrorAlias请求参数结构体
 * @class
 */
class SetTrafficMirrorAliasRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 流量镜像实例ID。
         */
        this.TrafficMirrorId = null;
        /**
         * 流量镜像实例别名。
         */
        this.Alias = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
    }
}
/**
 * UnbindL4Backends返回参数结构体
 * @class
 */
class UnbindL4BackendsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 查询绑定了某主机七层监听器时返回的与转发路径所绑定的主机信息。
 * @class
 */
class L7ListenerInfoBackend extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 绑定类别（0代表黑石物理机，1代表虚拟机IP）。
         */
        this.BindType = null;
        /**
         * 主机端口。
         */
        this.Port = null;
        /**
         * 权重。
         */
        this.Weight = null;
        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         */
        this.Status = null;
        /**
         * 黑石物理机的主机ID。
         */
        this.InstanceId = null;
        /**
         * 黑石物理机的别名。
         */
        this.Alias = null;
        /**
         * 主机IP。
         */
        this.LanIp = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
    }
}
/**
 * ModifyLoadBalancerChargeMode请求参数结构体
 * @class
 */
class ModifyLoadBalancerChargeModeRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID。
         */
        this.LoadBalancerId = null;
        /**
         * 计费方式。flow或bandwidth。
         */
        this.PayMode = null;
        /**
         * 监听器信息，当计费方式选为 bandwidth 且此负载均衡实例下存在监听器时需填入此字段，可以自定义每个监听器带宽上限。
         */
        this.ListenerSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new ModifyLoadBalancerChargeModeListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
    }
}
/**
 * ModifyL4BackendWeight请求参数结构体
 * @class
 */
class ModifyL4BackendWeightRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         */
        this.LoadBalancerId = null;
        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         */
        this.ListenerId = null;
        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         */
        this.InstanceId = null;
        /**
         * 权重信息，可选值0~100。
         */
        this.Weight = null;
        /**
         * 已绑定的主机端口。
         */
        this.Port = null;
        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         */
        this.BindType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
    }
}
/**
 * 获取负载均衡实例列表时返回的负载均衡信息。
 * @class
 */
class LoadBalancer extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负载均衡器ID
         */
        this.LoadBalancerId = null;
        /**
         * 项目ID，通过v2/DescribeProject 接口获得
         */
        this.ProjectId = null;
        /**
         * 负载均衡器名称
         */
        this.LoadBalancerName = null;
        /**
         * 负载均衡的类型 : open表示公网负载均衡类型，internal表示内网负载均衡类型
         */
        this.LoadBalancerType = null;
        /**
         * 是否筛选独占集群，0表示非独占集群，1表示四层独占集群，2表示七层独占集群，3表示四层和七层独占集群，4表示共享容灾
         */
        this.Exclusive = null;
        /**
         * 该负载均衡对应的tgw集群（fullnat,tunnel,dnat）
         */
        this.TgwSetType = null;
        /**
         * 负载均衡域名。规则：1-60个小写英文字母、数字、点号“.”或连接线“-”。内网类型的负载均衡不能配置该字段
         */
        this.Domain = null;
        /**
         * 该负载均衡对应的所在的VpcId
         */
        this.VpcId = null;
        /**
         * 该负载均衡对应的所在的SubnetId
         */
        this.SubnetId = null;
        /**
         * 无
         */
        this.Status = null;
        /**
         * 无
         */
        this.PayMode = null;
        /**
         * 无
         */
        this.LatestPayMode = null;
        /**
         * 无
         */
        this.CreateTime = null;
        /**
         * 无
         */
        this.StatusTime = null;
        /**
         * 私有网络名称。
         */
        this.VpcName = null;
        /**
         * 私有网络Cidr。
         */
        this.VpcCidrBlock = null;
        /**
         * 负载均衡的IPV4的VIP。
         */
        this.LoadBalancerVips = null;
        /**
         * 无
         */
        this.SupportListenerTypes = null;
        /**
         * 无
         */
        this.Bandwidth = null;
        /**
         * 负载均衡个性化配置ID
         */
        this.ConfId = null;
        /**
         * 无
         */
        this.ConfName = null;
        /**
         * 负载均衡的IPV6的VIP。
         */
        this.LoadBalancerVipv6s = null;
        /**
         * 负载均衡IP协议类型。ipv4或者ipv6。
         */
        this.IpProtocolType = null;
        /**
         * 保障型网关计费形式
         */
        this.BzPayMode = null;
        /**
         * 保障型网关四层计费指标
         */
        this.BzL4Metrics = null;
        /**
         * 保障型网关七层计费指标
         */
        this.BzL7Metrics = null;
        /**
         * 该负载均衡对应的所在的整形类型的VpcId
         */
        this.IntVpcId = null;
        /**
         * 负载均衡的IPV6或者IPV4的VIP。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CurVips = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.LatestPayMode = 'LatestPayMode' in params ? params.LatestPayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StatusTime = 'StatusTime' in params ? params.StatusTime : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.SupportListenerTypes = 'SupportListenerTypes' in params ? params.SupportListenerTypes : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ConfId = 'ConfId' in params ? params.ConfId : null;
        this.ConfName = 'ConfName' in params ? params.ConfName : null;
        this.LoadBalancerVipv6s = 'LoadBalancerVipv6s' in params ? params.LoadBalancerVipv6s : null;
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;
        this.BzPayMode = 'BzPayMode' in params ? params.BzPayMode : null;
        this.BzL4Metrics = 'BzL4Metrics' in params ? params.BzL4Metrics : null;
        this.BzL7Metrics = 'BzL7Metrics' in params ? params.BzL7Metrics : null;
        this.IntVpcId = 'IntVpcId' in params ? params.IntVpcId : null;
        this.CurVips = 'CurVips' in params ? params.CurVips : null;
    }
}
exports.Models = {
    SetTrafficMirrorHealthSwitchRequest: SetTrafficMirrorHealthSwitchRequest,
    SetTrafficMirrorAliasResponse: SetTrafficMirrorAliasResponse,
    DeleteL7RulesRequest: DeleteL7RulesRequest,
    DeleteTrafficMirrorResponse: DeleteTrafficMirrorResponse,
    ModifyL7BackendPortResponse: ModifyL7BackendPortResponse,
    ModifyL4BackendProbePortResponse: ModifyL4BackendProbePortResponse,
    BindTrafficMirrorReceiver: BindTrafficMirrorReceiver,
    ModifyL4BackendPortResponse: ModifyL4BackendPortResponse,
    ModifyL7LocationsResponse: ModifyL7LocationsResponse,
    DescribeTrafficMirrorReceiverHealthStatusRequest: DescribeTrafficMirrorReceiverHealthStatusRequest,
    UnbindL4Backend: UnbindL4Backend,
    ModifyL4ListenerResponse: ModifyL4ListenerResponse,
    DevicesBindInfoL4Listener: DevicesBindInfoL4Listener,
    DescribeL4ListenerInfoRequest: DescribeL4ListenerInfoRequest,
    L4ListenerInfo: L4ListenerInfo,
    DescribeL7RulesRequest: DescribeL7RulesRequest,
    UnbindL7BackendsResponse: UnbindL7BackendsResponse,
    ModifyL4BackendWeightResponse: ModifyL4BackendWeightResponse,
    DeleteL7DomainsResponse: DeleteL7DomainsResponse,
    DevicesBindInfoBackend: DevicesBindInfoBackend,
    UnbindL4BackendsRequest: UnbindL4BackendsRequest,
    DescribeL7ListenersRequest: DescribeL7ListenersRequest,
    DescribeTrafficMirrorListenersRequest: DescribeTrafficMirrorListenersRequest,
    BindL7Backend: BindL7Backend,
    ModifyL7ListenerResponse: ModifyL7ListenerResponse,
    DescribeLoadBalancerTaskResultRequest: DescribeLoadBalancerTaskResultRequest,
    DescribeL7RulesResponse: DescribeL7RulesResponse,
    CreateTrafficMirrorResponse: CreateTrafficMirrorResponse,
    DescribeDevicesBindInfoRequest: DescribeDevicesBindInfoRequest,
    BindL4BackendsResponse: BindL4BackendsResponse,
    TrafficMirrorListener: TrafficMirrorListener,
    DescribeL7ListenersExResponse: DescribeL7ListenersExResponse,
    UnbindL7Backend: UnbindL7Backend,
    TrafficMirrorReceiver: TrafficMirrorReceiver,
    TrafficMirrorPortStatus: TrafficMirrorPortStatus,
    UploadCertResponse: UploadCertResponse,
    DescribeTrafficMirrorReceiversResponse: DescribeTrafficMirrorReceiversResponse,
    DeleteListenersRequest: DeleteListenersRequest,
    ModifyL4BackendProbePortRequest: ModifyL4BackendProbePortRequest,
    DescribeTrafficMirrorsRequest: DescribeTrafficMirrorsRequest,
    UploadCertRequest: UploadCertRequest,
    DescribeL4ListenerInfoResponse: DescribeL4ListenerInfoResponse,
    BindTrafficMirrorListenersRequest: BindTrafficMirrorListenersRequest,
    ModifyL7BackendPortRequest: ModifyL7BackendPortRequest,
    ModifyL4BackendPortRequest: ModifyL4BackendPortRequest,
    DescribeL4ListenersResponse: DescribeL4ListenersResponse,
    ModifyL7LocationsRequest: ModifyL7LocationsRequest,
    ModifyLoadBalancerResponse: ModifyLoadBalancerResponse,
    CreateL4ListenersResponse: CreateL4ListenersResponse,
    ModifyL7BackendWeightResponse: ModifyL7BackendWeightResponse,
    DescribeTrafficMirrorsResponse: DescribeTrafficMirrorsResponse,
    DescribeL7BackendsRequest: DescribeL7BackendsRequest,
    L7Listener: L7Listener,
    CreateL7RulesRequest: CreateL7RulesRequest,
    ModifyL7BackendWeightRequest: ModifyL7BackendWeightRequest,
    CreateL4ListenersRequest: CreateL4ListenersRequest,
    ReplaceCertRequest: ReplaceCertRequest,
    BindL7BackendsResponse: BindL7BackendsResponse,
    L7Rule: L7Rule,
    UnbindTrafficMirrorReceiversResponse: UnbindTrafficMirrorReceiversResponse,
    DeleteL7DomainsRequest: DeleteL7DomainsRequest,
    BindTrafficMirrorReceiversRequest: BindTrafficMirrorReceiversRequest,
    BindTrafficMirrorListenersResponse: BindTrafficMirrorListenersResponse,
    BindL7BackendsRequest: BindL7BackendsRequest,
    DescribeL4Backend: DescribeL4Backend,
    DescribeCertDetailResponse: DescribeCertDetailResponse,
    DescribeL4BackendsRequest: DescribeL4BackendsRequest,
    DescribeTrafficMirrorReceiverHealthStatusResponse: DescribeTrafficMirrorReceiverHealthStatusResponse,
    BindTrafficMirrorReceiversResponse: BindTrafficMirrorReceiversResponse,
    ReplaceCertResponse: ReplaceCertResponse,
    DescribeLoadBalancerPortInfoRequest: DescribeLoadBalancerPortInfoRequest,
    DevicesBindInfoLocation: DevicesBindInfoLocation,
    SetTrafficMirrorHealthSwitchResponse: SetTrafficMirrorHealthSwitchResponse,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    UnbindTrafficMirrorListenersResponse: UnbindTrafficMirrorListenersResponse,
    CreateL7Rule: CreateL7Rule,
    CreateL7RulesResponse: CreateL7RulesResponse,
    ModifyL7ListenerRequest: ModifyL7ListenerRequest,
    DescribeTrafficMirrorReceiver: DescribeTrafficMirrorReceiver,
    L7ExListener: L7ExListener,
    L7ListenerInfo: L7ListenerInfo,
    L7ListenerInfoRule: L7ListenerInfoRule,
    DescribeL7BackendsResponse: DescribeL7BackendsResponse,
    Filter: Filter,
    DevicesBindInfoRule: DevicesBindInfoRule,
    TrafficMirror: TrafficMirror,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DevicesBindInfoLoadBalancer: DevicesBindInfoLoadBalancer,
    L4Listener: L4Listener,
    CreateL7Listener: CreateL7Listener,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    CreateTrafficMirrorRequest: CreateTrafficMirrorRequest,
    BindL4BackendsRequest: BindL4BackendsRequest,
    DescribeL7ListenerInfoResponse: DescribeL7ListenerInfoResponse,
    DescribeL7ListenersResponse: DescribeL7ListenersResponse,
    DeleteListenersResponse: DeleteListenersResponse,
    CreateLoadBalancersResponse: CreateLoadBalancersResponse,
    UnbindTrafficMirrorReceiver: UnbindTrafficMirrorReceiver,
    ModifyLoadBalancerChargeModeResponse: ModifyLoadBalancerChargeModeResponse,
    UnbindL7BackendsRequest: UnbindL7BackendsRequest,
    L7ListenerInfoLocation: L7ListenerInfoLocation,
    L7RulesLocation: L7RulesLocation,
    ModifyLoadBalancerChargeModeListener: ModifyLoadBalancerChargeModeListener,
    TrafficMirrorReciversStatus: TrafficMirrorReciversStatus,
    CreateLoadBalancersRequest: CreateLoadBalancersRequest,
    DescribeLoadBalancerPortInfoResponse: DescribeLoadBalancerPortInfoResponse,
    DescribeL7ListenerInfoRequest: DescribeL7ListenerInfoRequest,
    ModifyL4ListenerRequest: ModifyL4ListenerRequest,
    L4Backend: L4Backend,
    L7Backend: L7Backend,
    ModifyL7LocationRule: ModifyL7LocationRule,
    ModifyLoadBalancerRequest: ModifyLoadBalancerRequest,
    DevicesBindInfoL7Listener: DevicesBindInfoL7Listener,
    DescribeL4ListenersRequest: DescribeL4ListenersRequest,
    CreateL7ListenersResponse: CreateL7ListenersResponse,
    CreateLoadBalancerBzConf: CreateLoadBalancerBzConf,
    DeleteTrafficMirrorRequest: DeleteTrafficMirrorRequest,
    CreateL7ListenersRequest: CreateL7ListenersRequest,
    BindL4Backend: BindL4Backend,
    DescribeL7ListenersExRequest: DescribeL7ListenersExRequest,
    DescribeLoadBalancerTaskResultResponse: DescribeLoadBalancerTaskResultResponse,
    UnbindTrafficMirrorReceiversRequest: UnbindTrafficMirrorReceiversRequest,
    UnbindTrafficMirrorListenersRequest: UnbindTrafficMirrorListenersRequest,
    DescribeCertDetailRequest: DescribeCertDetailRequest,
    DescribeDevicesBindInfoResponse: DescribeDevicesBindInfoResponse,
    LoadBalancerPortInfoListener: LoadBalancerPortInfoListener,
    DescribeL4BackendsResponse: DescribeL4BackendsResponse,
    CreateL4Listener: CreateL4Listener,
    DescribeTrafficMirrorListenersResponse: DescribeTrafficMirrorListenersResponse,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    DeleteL7RulesResponse: DeleteL7RulesResponse,
    CertDetailLoadBalancer: CertDetailLoadBalancer,
    DescribeTrafficMirrorReceiversRequest: DescribeTrafficMirrorReceiversRequest,
    SetTrafficMirrorAliasRequest: SetTrafficMirrorAliasRequest,
    UnbindL4BackendsResponse: UnbindL4BackendsResponse,
    L7ListenerInfoBackend: L7ListenerInfoBackend,
    ModifyLoadBalancerChargeModeRequest: ModifyLoadBalancerChargeModeRequest,
    ModifyL4BackendWeightRequest: ModifyL4BackendWeightRequest,
    LoadBalancer: LoadBalancer,
};
//# sourceMappingURL=models.js.map