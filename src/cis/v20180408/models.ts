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
 * 容器实例中容器结构体
 * @class
 */
class Container extends AbstractModel {

    Command: string | null
    
    Args: Array<string> | null
    
    EnvironmentVars: Array<EnvironmentVar> | null
    
    Image: string | null
    
    Name: string | null
    
    Cpu: number | null
    
    Memory: number | null
    
    RestartCount: number | null
    
    CurrentState: ContainerState | null
    
    PreviousState: ContainerState | null
    
    WorkingDir: string | null
    
    ContainerId: string | null
    
    constructor(){
        super();

        /**
         * 容器启动命令
         */
        this.Command = null;

        /**
         * 容器启动参数
         */
        this.Args = null;

        /**
         * 容器环境变量
         */
        this.EnvironmentVars = null;

        /**
         * 镜像
         */
        this.Image = null;

        /**
         * 容器名，由小写字母、数字和 - 组成，由小写字母开头，小写字母或数字结尾，且长度不超过 63个字符
         */
        this.Name = null;

        /**
         * CPU，单位：核
         */
        this.Cpu = null;

        /**
         * 内存，单位：Gi
         */
        this.Memory = null;

        /**
         * 重启次数
         */
        this.RestartCount = null;

        /**
         * 当前状态
         */
        this.CurrentState = null;

        /**
         * 上一次状态
         */
        this.PreviousState = null;

        /**
         * 容器工作目录
         */
        this.WorkingDir = null;

        /**
         * 容器ID
         */
        this.ContainerId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Command: string | null;
        Args: Array<string> | null;
        EnvironmentVars: Array<EnvironmentVar> | null;
        Image: string | null;
        Name: string | null;
        Cpu: number | null;
        Memory: number | null;
        RestartCount: number | null;
        CurrentState: ContainerState | null;
        PreviousState: ContainerState | null;
        WorkingDir: string | null;
        ContainerId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Command = 'Command' in params ? params.Command : null;
        this.Args = 'Args' in params ? params.Args : null;

        if (params.EnvironmentVars) {
            this.EnvironmentVars = new Array();
            for (let z in params.EnvironmentVars) {
                let obj = new EnvironmentVar();
                obj.deserialize(params.EnvironmentVars[z]);
                this.EnvironmentVars.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;

        if (params.CurrentState) {
            let obj = new ContainerState();
            obj.deserialize(params.CurrentState)
            this.CurrentState = obj;
        }

        if (params.PreviousState) {
            let obj = new ContainerState();
            obj.deserialize(params.PreviousState)
            this.PreviousState = obj;
        }
        this.WorkingDir = 'WorkingDir' in params ? params.WorkingDir : null;
        this.ContainerId = 'ContainerId' in params ? params.ContainerId : null;

    }
}

/**
 * InquiryPriceCreateCis返回参数结构体
 * @class
 */
class InquiryPriceCreateCisResponse extends AbstractModel {

    Price: Price | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 价格
         */
        this.Price = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerLog请求参数结构体
 * @class
 */
class DescribeContainerLogRequest extends AbstractModel {

    InstanceName: string | null
    
    ContainerName: string | null
    
    Tail: number | null
    
    SinceTime: string | null
    
    constructor(){
        super();

        /**
         * 容器实例名称
         */
        this.InstanceName = null;

        /**
         * 容器名称
         */
        this.ContainerName = null;

        /**
         * 日志显示尾部行数
         */
        this.Tail = null;

        /**
         * 日志起始时间
         */
        this.SinceTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceName: string | null;
        ContainerName: string | null;
        Tail: number | null;
        SinceTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.Tail = 'Tail' in params ? params.Tail : null;
        this.SinceTime = 'SinceTime' in params ? params.SinceTime : null;

    }
}

/**
 * CreateContainerInstance请求参数结构体
 * @class
 */
class CreateContainerInstanceRequest extends AbstractModel {

    Zone: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    InstanceName: string | null
    
    RestartPolicy: string | null
    
    Containers: Array<Container> | null
    
    constructor(){
        super();

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * vpcId
         */
        this.VpcId = null;

        /**
         * subnetId
         */
        this.SubnetId = null;

        /**
         * 容器实例名称，由小写字母、数字和 - 组成，由小写字母开头，小写字母或数字结尾，且长度不超过 40个字符
         */
        this.InstanceName = null;

        /**
         * 重启策略（Always,OnFailure,Never）
         */
        this.RestartPolicy = null;

        /**
         * 容器列表
         */
        this.Containers = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        VpcId: string | null;
        SubnetId: string | null;
        InstanceName: string | null;
        RestartPolicy: string | null;
        Containers: Array<Container> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

    }
}

/**
 * 容器状态
 * @class
 */
class ContainerState extends AbstractModel {

    StartTime: string | null
    
    State: string | null
    
    Reason: string | null
    
    FinishTime: string | null
    
    ExitCode: number | null
    
    constructor(){
        super();

        /**
         * 容器运行开始时间
         */
        this.StartTime = null;

        /**
         * 容器状态
         */
        this.State = null;

        /**
         * 状态详情
         */
        this.Reason = null;

        /**
         * 容器运行结束时间
         */
        this.FinishTime = null;

        /**
         * 容器运行退出码
         */
        this.ExitCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        State: string | null;
        Reason: string | null;
        FinishTime: string | null;
        ExitCode: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.State = 'State' in params ? params.State : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.ExitCode = 'ExitCode' in params ? params.ExitCode : null;

    }
}

/**
 * InquiryPriceCreateCis请求参数结构体
 * @class
 */
class InquiryPriceCreateCisRequest extends AbstractModel {

    Zone: string | null
    
    Cpu: number | null
    
    Memory: number | null
    
    constructor(){
        super();

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * CPU，单位：核
         */
        this.Cpu = null;

        /**
         * 内存，单位：Gi
         */
        this.Memory = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        Cpu: number | null;
        Memory: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;

    }
}

/**
 * 容器环境变量
 * @class
 */
class EnvironmentVar extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 环境变量名
         */
        this.Name = null;

        /**
         * 环境变量值
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
 * 价格
 * @class
 */
class Price extends AbstractModel {

    DiscountPrice: number | null
    
    OriginalPrice: number | null
    
    constructor(){
        super();

        /**
         * 原价，单位：元
         */
        this.DiscountPrice = null;

        /**
         * 折扣价，单位：元
         */
        this.OriginalPrice = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DiscountPrice: number | null;
        OriginalPrice: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;

    }
}

/**
 * DescribeContainerInstances返回参数结构体
 * @class
 */
class DescribeContainerInstancesResponse extends AbstractModel {

    ContainerInstanceList: Array<ContainerInstance> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 容器实例列表
         */
        this.ContainerInstanceList = null;

        /**
         * 容器实例总数
         */
        this.TotalCount = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ContainerInstanceList: Array<ContainerInstance> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ContainerInstanceList) {
            this.ContainerInstanceList = new Array();
            for (let z in params.ContainerInstanceList) {
                let obj = new ContainerInstance();
                obj.deserialize(params.ContainerInstanceList[z]);
                this.ContainerInstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteContainerInstance返回参数结构体
 * @class
 */
class DeleteContainerInstanceResponse extends AbstractModel {

    Msg: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 操作信息
         */
        this.Msg = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Msg: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerInstances请求参数结构体
 * @class
 */
class DescribeContainerInstancesRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    Filters: Array<Filter> | null
    
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10
         */
        this.Limit = null;

        /**
         * 过滤条件。
- Zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。
- VpcId - String - 是否必填：否 -（过滤条件）按照VpcId过滤。
- InstanceName - String - 是否必填：否 -（过滤条件）按照容器实例名称做模糊查询。
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
        Filters: Array<Filter> | null;
    }): void {
        if (!params) {
            return;
        }
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
 * 过滤条件
 * @class
 */
class Filter extends AbstractModel {

    Name: string | null
    
    ValueList: Array<string> | null
    
    constructor(){
        super();

        /**
         * 过滤字段，可选值 - Zone，VpcId，InstanceName
         */
        this.Name = null;

        /**
         * 过滤值列表
         */
        this.ValueList = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        ValueList: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ValueList = 'ValueList' in params ? params.ValueList : null;

    }
}

/**
 * CreateContainerInstance返回参数结构体
 * @class
 */
class CreateContainerInstanceResponse extends AbstractModel {

    InstanceId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 容器实例ID
         */
        this.InstanceId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContainerInstance请求参数结构体
 * @class
 */
class DescribeContainerInstanceRequest extends AbstractModel {

    InstanceName: string | null
    
    constructor(){
        super();

        /**
         * 容器实例名称
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeContainerInstance返回参数结构体
 * @class
 */
class DescribeContainerInstanceResponse extends AbstractModel {

    ContainerInstance: ContainerInstance | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 容器实例详细信息
         */
        this.ContainerInstance = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ContainerInstance: ContainerInstance | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ContainerInstance) {
            let obj = new ContainerInstance();
            obj.deserialize(params.ContainerInstance)
            this.ContainerInstance = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器日志
 * @class
 */
class ContainerLog extends AbstractModel {

    Name: string | null
    
    Log: string | null
    
    Time: string | null
    
    constructor(){
        super();

        /**
         * 容器名称
         */
        this.Name = null;

        /**
         * 日志
         */
        this.Log = null;

        /**
         * 日志记录时间
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Log: string | null;
        Time: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * DescribeContainerInstanceEvents返回参数结构体
 * @class
 */
class DescribeContainerInstanceEventsResponse extends AbstractModel {

    EventList: Array<Event> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 容器实例事件列表
         */
        this.EventList = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventList: Array<Event> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new Event();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 容器实例事件
 * @class
 */
class Event extends AbstractModel {

    FirstSeen: string | null
    
    LastSeen: string | null
    
    Level: string | null
    
    Count: string | null
    
    Reason: string | null
    
    Message: string | null
    
    constructor(){
        super();

        /**
         * 事件首次出现时间
         */
        this.FirstSeen = null;

        /**
         * 事件上次出现时间
         */
        this.LastSeen = null;

        /**
         * 事件等级
         */
        this.Level = null;

        /**
         * 事件出现次数
         */
        this.Count = null;

        /**
         * 事件出现原因
         */
        this.Reason = null;

        /**
         * 事件消息
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FirstSeen: string | null;
        LastSeen: string | null;
        Level: string | null;
        Count: string | null;
        Reason: string | null;
        Message: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FirstSeen = 'FirstSeen' in params ? params.FirstSeen : null;
        this.LastSeen = 'LastSeen' in params ? params.LastSeen : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeContainerInstanceEvents请求参数结构体
 * @class
 */
class DescribeContainerInstanceEventsRequest extends AbstractModel {

    InstanceName: string | null
    
    constructor(){
        super();

        /**
         * 容器实例名称
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeContainerLog返回参数结构体
 * @class
 */
class DescribeContainerLogResponse extends AbstractModel {

    ContainerLogList: Array<ContainerLog> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 容器日志数组
         */
        this.ContainerLogList = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ContainerLogList: Array<ContainerLog> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ContainerLogList) {
            this.ContainerLogList = new Array();
            for (let z in params.ContainerLogList) {
                let obj = new ContainerLog();
                obj.deserialize(params.ContainerLogList[z]);
                this.ContainerLogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteContainerInstance请求参数结构体
 * @class
 */
class DeleteContainerInstanceRequest extends AbstractModel {

    InstanceName: string | null
    
    constructor(){
        super();

        /**
         * 容器实例名称
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * 容器实例的具体信息
 * @class
 */
class ContainerInstance extends AbstractModel {

    InstanceId: string | null
    
    InstanceName: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    State: string | null
    
    Containers: Array<Container> | null
    
    RestartPolicy: string | null
    
    CreateTime: string | null
    
    StartTime: string | null
    
    Zone: string | null
    
    VpcName: string | null
    
    VpcCidr: string | null
    
    SubnetName: string | null
    
    SubnetCidr: string | null
    
    LanIp: string | null
    
    constructor(){
        super();

        /**
         * 容器实例ID
         */
        this.InstanceId = null;

        /**
         * 容器实例名称
         */
        this.InstanceName = null;

        /**
         * 容器实例所属VpcId
         */
        this.VpcId = null;

        /**
         * 容器实例所属SubnetId
         */
        this.SubnetId = null;

        /**
         * 容器实例状态
         */
        this.State = null;

        /**
         * 容器列表
         */
        this.Containers = null;

        /**
         * 重启策略
         */
        this.RestartPolicy = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * 启动时间
         */
        this.StartTime = null;

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * Vpc名称
         */
        this.VpcName = null;

        /**
         * VpcCidr
         */
        this.VpcCidr = null;

        /**
         * SubnetName
         */
        this.SubnetName = null;

        /**
         * 子网Cidr
         */
        this.SubnetCidr = null;

        /**
         * 内网IP
         */
        this.LanIp = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        InstanceName: string | null;
        VpcId: string | null;
        SubnetId: string | null;
        State: string | null;
        Containers: Array<Container> | null;
        RestartPolicy: string | null;
        CreateTime: string | null;
        StartTime: string | null;
        Zone: string | null;
        VpcName: string | null;
        VpcCidr: string | null;
        SubnetName: string | null;
        SubnetCidr: string | null;
        LanIp: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.State = 'State' in params ? params.State : null;

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidr = 'VpcCidr' in params ? params.VpcCidr : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetCidr = 'SubnetCidr' in params ? params.SubnetCidr : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;

    }
}

export const Models = {
    Container: Container,
    InquiryPriceCreateCisResponse: InquiryPriceCreateCisResponse,
    DescribeContainerLogRequest: DescribeContainerLogRequest,
    CreateContainerInstanceRequest: CreateContainerInstanceRequest,
    ContainerState: ContainerState,
    InquiryPriceCreateCisRequest: InquiryPriceCreateCisRequest,
    EnvironmentVar: EnvironmentVar,
    Price: Price,
    DescribeContainerInstancesResponse: DescribeContainerInstancesResponse,
    DeleteContainerInstanceResponse: DeleteContainerInstanceResponse,
    DescribeContainerInstancesRequest: DescribeContainerInstancesRequest,
    Filter: Filter,
    CreateContainerInstanceResponse: CreateContainerInstanceResponse,
    DescribeContainerInstanceRequest: DescribeContainerInstanceRequest,
    DescribeContainerInstanceResponse: DescribeContainerInstanceResponse,
    ContainerLog: ContainerLog,
    DescribeContainerInstanceEventsResponse: DescribeContainerInstanceEventsResponse,
    Event: Event,
    DescribeContainerInstanceEventsRequest: DescribeContainerInstanceEventsRequest,
    DescribeContainerLogResponse: DescribeContainerLogResponse,
    DeleteContainerInstanceRequest: DeleteContainerInstanceRequest,
    ContainerInstance: ContainerInstance,

}
