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
 * UnbindDevices请求参数结构体
 * @class
 */
class UnbindDevicesRequest extends AbstractModel {

    GatewayProductId: string | null
    
    GatewayDeviceName: string | null
    
    ProductId: string | null
    
    DeviceNames: Array<string> | null
    
    Skey: string | null
    
    constructor(){
        super();

        /**
         * 网关设备的产品ID
         */
        this.GatewayProductId = null;

        /**
         * 网关设备的设备名
         */
        this.GatewayDeviceName = null;

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 多个设备名
         */
        this.DeviceNames = null;

        /**
         * 中兴CLAA设备的解绑需要Skey，普通设备不需要
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GatewayProductId: string | null;
        GatewayDeviceName: string | null;
        ProductId: string | null;
        DeviceNames: Array<string> | null;
        Skey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * BindDevices请求参数结构体
 * @class
 */
class BindDevicesRequest extends AbstractModel {

    GatewayProductId: string | null
    
    GatewayDeviceName: string | null
    
    ProductId: string | null
    
    DeviceNames: Array<string> | null
    
    Skey: string | null
    
    constructor(){
        super();

        /**
         * 网关设备的产品ID
         */
        this.GatewayProductId = null;

        /**
         * 网关设备的设备名
         */
        this.GatewayDeviceName = null;

        /**
         * 被绑定设备的产品ID
         */
        this.ProductId = null;

        /**
         * 被绑定的多个设备名
         */
        this.DeviceNames = null;

        /**
         * 中兴CLAA设备的绑定需要skey，普通的设备不需要
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GatewayProductId: string | null;
        GatewayDeviceName: string | null;
        ProductId: string | null;
        DeviceNames: Array<string> | null;
        Skey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * DescribeProducts请求参数结构体
 * @class
 */
class DescribeProductsRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 偏移量，Offset从0开始
         */
        this.Offset = null;

        /**
         * 分页大小，当前页面中显示的最大数量，值范围 10-250。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDevices返回参数结构体
 * @class
 */
class DescribeDevicesResponse extends AbstractModel {

    TotalCount: number | null
    
    Devices: Array<DeviceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 设备总数
         */
        this.TotalCount = null;

        /**
         * 设备详细信息列表
         */
        this.Devices = null;

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
        Devices: Array<DeviceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品详细信息
 * @class
 */
class ProductInfo extends AbstractModel {

    ProductId: string | null
    
    ProductName: string | null
    
    ProductMetadata: ProductMetadata | null
    
    ProductProperties: ProductProperties | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 产品名
         */
        this.ProductName = null;

        /**
         * 产品元数据
         */
        this.ProductMetadata = null;

        /**
         * 产品属性
         */
        this.ProductProperties = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        ProductName: string | null;
        ProductMetadata: ProductMetadata | null;
        ProductProperties: ProductProperties | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.ProductMetadata) {
            let obj = new ProductMetadata();
            obj.deserialize(params.ProductMetadata)
            this.ProductMetadata = obj;
        }

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }

    }
}

/**
 * 任务描述细节
 * @class
 */
class Task extends AbstractModel {

    UpdateShadowTask: BatchUpdateShadow | null
    
    PublishMessageTask: BatchPublishMessage | null
    
    constructor(){
        super();

        /**
         * 批量更新影子任务的描述细节，当 taskType 取值为 “UpdateShadow” 时，此字段必填。描述见下 BatchUpdateShadow
         */
        this.UpdateShadowTask = null;

        /**
         * 批量下发消息任务的描述细节，当 taskType 取值为 “PublishMessage” 时，此字段必填。描述见下 BatchPublishMessage
         */
        this.PublishMessageTask = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UpdateShadowTask: BatchUpdateShadow | null;
        PublishMessageTask: BatchPublishMessage | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.UpdateShadowTask) {
            let obj = new BatchUpdateShadow();
            obj.deserialize(params.UpdateShadowTask)
            this.UpdateShadowTask = obj;
        }

        if (params.PublishMessageTask) {
            let obj = new BatchPublishMessage();
            obj.deserialize(params.PublishMessageTask)
            this.PublishMessageTask = obj;
        }

    }
}

/**
 * EnableTopicRule返回参数结构体
 * @class
 */
class EnableTopicRuleResponse extends AbstractModel {

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
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends AbstractModel {

    TotalCount: number | null
    
    Tasks: Array<TaskInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 用户一个月内创建的任务总数
         */
        this.TotalCount = null;

        /**
         * 此页任务对象的数组，按创建时间排序
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
        Tasks: Array<TaskInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDeviceShadow请求参数结构体
 * @class
 */
class UpdateDeviceShadowRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    State: string | null
    
    ShadowVersion: number | null
    
    Prefix: string | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * 虚拟设备的状态，JSON字符串格式，由desired结构组成
         */
        this.State = null;

        /**
         * 当前版本号，需要和后台的version保持一致，才能更新成功
         */
        this.ShadowVersion = null;

        /**
         * 下发delta消息的topic前缀，可选类型: "$shadow","$template"。不填写默认"$shadow"。
         */
        this.Prefix = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        State: string | null;
        ShadowVersion: number | null;
        Prefix: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.State = 'State' in params ? params.State : null;
        this.ShadowVersion = 'ShadowVersion' in params ? params.ShadowVersion : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;

    }
}

/**
 * DescribeMultiDevTask请求参数结构体
 * @class
 */
class DescribeMultiDevTaskRequest extends AbstractModel {

    TaskId: string | null
    
    ProductId: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID，由批量创建设备接口返回
         */
        this.TaskId = null;

        /**
         * 产品 ID，创建产品时腾讯云为用户分配全局唯一的 ID
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        ProductId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DescribeProducts返回参数结构体
 * @class
 */
class DescribeProductsResponse extends AbstractModel {

    TotalCount: number | null
    
    Products: Array<ProductInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 产品总数
         */
        this.TotalCount = null;

        /**
         * 产品详细信息列表
         */
        this.Products = null;

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
        Products: Array<ProductInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new ProductInfo();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceShadow返回参数结构体
 * @class
 */
class DescribeDeviceShadowResponse extends AbstractModel {

    Data: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 设备影子数据
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
        Data: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMultiDevice返回参数结构体
 * @class
 */
class CreateMultiDeviceResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID，腾讯云生成全局唯一的任务 ID，有效期一个月，一个月之后任务失效。可以调用获取创建多设备任务状态接口获取该任务的执行状态，当状态为成功时，可以调用获取创建多设备任务结果接口获取该任务的结果
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
        TaskId: string | null;
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
 * PublishRRPCMessage请求参数结构体
 * @class
 */
class PublishRRPCMessageRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    Payload: string | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * 消息内容，utf8编码
         */
        this.Payload = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        Payload: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

    }
}

/**
 * 产品属性
 * @class
 */
class ProductProperties extends AbstractModel {

    ProductDescription: string | null
    
    EncryptionType: string | null
    
    Region: string | null
    
    ProductType: number | null
    
    Format: string | null
    
    Platform: string | null
    
    Appeui: string | null
    
    ModelId: string | null
    
    ModelName: string | null
    
    ProductKey: string | null
    
    RegisterType: number | null
    
    ProductSecret: string | null
    
    RegisterLimit: number | null
    
    constructor(){
        super();

        /**
         * 产品描述
         */
        this.ProductDescription = null;

        /**
         * 加密类型，1表示证书认证，2表示签名认证。如不填写，默认值是1
         */
        this.EncryptionType = null;

        /**
         * 产品所属区域，目前只支持广州（gz）
         */
        this.Region = null;

        /**
         * 产品类型，各个类型值代表的节点-类型如下：
0 普通产品，2 NB-IoT产品，4 LoRa产品，3 LoRa网关产品，5 普通网关产品   默认值是0
         */
        this.ProductType = null;

        /**
         * 数据格式，取值为json或者custom，默认值是json
         */
        this.Format = null;

        /**
         * 产品所属平台，默认值是0
         */
        this.Platform = null;

        /**
         * LoRa产品运营侧APPEUI，只有LoRa产品需要填写
         */
        this.Appeui = null;

        /**
         * 产品绑定的物模型ID，-1表示不绑定
         */
        this.ModelId = null;

        /**
         * 产品绑定的物模型名称
         */
        this.ModelName = null;

        /**
         * 产品密钥，suite产品才会有
         */
        this.ProductKey = null;

        /**
         * 动态注册类型 0-关闭, 1-预定义设备名 2-动态定义设备名
         */
        this.RegisterType = null;

        /**
         * 动态注册产品秘钥
         */
        this.ProductSecret = null;

        /**
         * RegisterType为2时，设备动态创建的限制数量
         */
        this.RegisterLimit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductDescription: string | null;
        EncryptionType: string | null;
        Region: string | null;
        ProductType: number | null;
        Format: string | null;
        Platform: string | null;
        Appeui: string | null;
        ModelId: string | null;
        ModelName: string | null;
        ProductKey: string | null;
        RegisterType: number | null;
        ProductSecret: string | null;
        RegisterLimit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.EncryptionType = 'EncryptionType' in params ? params.EncryptionType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Appeui = 'Appeui' in params ? params.Appeui : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.RegisterType = 'RegisterType' in params ? params.RegisterType : null;
        this.ProductSecret = 'ProductSecret' in params ? params.ProductSecret : null;
        this.RegisterLimit = 'RegisterLimit' in params ? params.RegisterLimit : null;

    }
}

/**
 * UpdateTopicPolicy返回参数结构体
 * @class
 */
class UpdateTopicPolicyResponse extends AbstractModel {

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
 * 任务列表详细信息
 * @class
 */
class TaskInfo extends AbstractModel {

    Type: string | null
    
    Id: string | null
    
    ProductId: string | null
    
    Status: number | null
    
    CreateTime: number | null
    
    UpdateTime: number | null
    
    RetCode: number | null
    
    ErrMsg: string | null
    
    constructor(){
        super();

        /**
         * 任务类型，目前取值为 “UpdateShadow” 或者 “PublishMessage”
         */
        this.Type = null;

        /**
         * 任务 ID
         */
        this.Id = null;

        /**
         * 产品 ID
         */
        this.ProductId = null;

        /**
         * 状态。1表示等待处理，2表示调度处理中，3表示已完成，4表示失败，5表示已取消
         */
        this.Status = null;

        /**
         * 任务创建时间，Unix 时间戳
         */
        this.CreateTime = null;

        /**
         * 最后任务更新时间，Unix 时间戳
         */
        this.UpdateTime = null;

        /**
         * 返回的错误码
         */
        this.RetCode = null;

        /**
         * 返回的错误信息
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Id: string | null;
        ProductId: string | null;
        Status: number | null;
        CreateTime: number | null;
        UpdateTime: number | null;
        RetCode: number | null;
        ErrMsg: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * DeleteProduct请求参数结构体
 * @class
 */
class DeleteProductRequest extends AbstractModel {

    ProductId: string | null
    
    Skey: string | null
    
    constructor(){
        super();

        /**
         * 需要删除的产品 ID
         */
        this.ProductId = null;

        /**
         * 删除LoRa产品需要skey
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        Skey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 偏移量，从0开始
         */
        this.Offset = null;

        /**
         * 分页的大小，数值范围 1-250
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ReplaceTopicRule请求参数结构体
 * @class
 */
class ReplaceTopicRuleRequest extends AbstractModel {

    RuleName: string | null
    
    TopicRulePayload: TopicRulePayload | null
    
    ModifyType: number | null
    
    ActionIndex: number | null
    
    constructor(){
        super();

        /**
         * 规则名称
         */
        this.RuleName = null;

        /**
         * 替换的规则包体
         */
        this.TopicRulePayload = null;

        /**
         * 修改类型，0：其他，1：创建行为，2：更新行为，3：删除行为
         */
        this.ModifyType = null;

        /**
         * action增删改变更填对应topicRulePayload里面第几个action
         */
        this.ActionIndex = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleName: string | null;
        TopicRulePayload: TopicRulePayload | null;
        ModifyType: number | null;
        ActionIndex: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.TopicRulePayload) {
            let obj = new TopicRulePayload();
            obj.deserialize(params.TopicRulePayload)
            this.TopicRulePayload = obj;
        }
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;
        this.ActionIndex = 'ActionIndex' in params ? params.ActionIndex : null;

    }
}

/**
 * 创建设备时返回的设备信息
 * @class
 */
class MultiDevicesInfo extends AbstractModel {

    DeviceName: string | null
    
    DevicePsk: string | null
    
    DeviceCert: string | null
    
    DevicePrivateKey: string | null
    
    Result: number | null
    
    ErrMsg: string | null
    
    constructor(){
        super();

        /**
         * 设备名
         */
        this.DeviceName = null;

        /**
         * 对称加密密钥，base64 编码，采用对称加密时返回该参数
         */
        this.DevicePsk = null;

        /**
         * 设备证书，采用非对称加密时返回该参数
         */
        this.DeviceCert = null;

        /**
         * 设备私钥，采用非对称加密时返回该参数，腾讯云为用户缓存起来，其生命周期与任务生命周期一致
         */
        this.DevicePrivateKey = null;

        /**
         * 错误码
         */
        this.Result = null;

        /**
         * 错误信息
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DeviceName: string | null;
        DevicePsk: string | null;
        DeviceCert: string | null;
        DevicePrivateKey: string | null;
        Result: number | null;
        ErrMsg: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePrivateKey = 'DevicePrivateKey' in params ? params.DevicePrivateKey : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * ReplaceTopicRule返回参数结构体
 * @class
 */
class ReplaceTopicRuleResponse extends AbstractModel {

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
 * DescribeDeviceClientKey请求参数结构体
 * @class
 */
class DescribeDeviceClientKeyRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    constructor(){
        super();

        /**
         * 所属产品的Id
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * UpdateTopicPolicy请求参数结构体
 * @class
 */
class UpdateTopicPolicyRequest extends AbstractModel {

    ProductID: string | null
    
    TopicName: string | null
    
    NewTopicName: string | null
    
    Privilege: number | null
    
    BrokerSubscribe: BrokerSubscribe | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductID = null;

        /**
         * 更新前Topic名
         */
        this.TopicName = null;

        /**
         * 更新后Topic名
         */
        this.NewTopicName = null;

        /**
         * Topic权限
         */
        this.Privilege = null;

        /**
         * 代理订阅信息
         */
        this.BrokerSubscribe = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductID: string | null;
        TopicName: string | null;
        NewTopicName: string | null;
        Privilege: number | null;
        BrokerSubscribe: BrokerSubscribe | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.NewTopicName = 'NewTopicName' in params ? params.NewTopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

        if (params.BrokerSubscribe) {
            let obj = new BrokerSubscribe();
            obj.deserialize(params.BrokerSubscribe)
            this.BrokerSubscribe = obj;
        }

    }
}

/**
 * 批量更新设备影子任务
 * @class
 */
class BatchUpdateShadow extends AbstractModel {

    Desired: string | null
    
    constructor(){
        super();

        /**
         * 设备影子的期望状态，格式为 Json 对象序列化之后的字符串
         */
        this.Desired = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Desired: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Desired = 'Desired' in params ? params.Desired : null;

    }
}

/**
 * DeleteDevice请求参数结构体
 * @class
 */
class DeleteDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    Skey: string | null
    
    constructor(){
        super();

        /**
         * 设备所属的产品 ID
         */
        this.ProductId = null;

        /**
         * 需要删除的设备名称
         */
        this.DeviceName = null;

        /**
         * 删除LoRa设备以及LoRa网关设备需要skey
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        Skey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * CreateMultiDevicesTask请求参数结构体
 * @class
 */
class CreateMultiDevicesTaskRequest extends AbstractModel {

    ProductId: string | null
    
    ParametersType: string | null
    
    FileName: string | null
    
    FileSize: number | null
    
    BatchCount: number | null
    
    Hash: string | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 参数类型 cosfile-文件上传 random-随机创建
         */
        this.ParametersType = null;

        /**
         * 文件上传类型时文件名
         */
        this.FileName = null;

        /**
         * 文件上传类型时文件大小
         */
        this.FileSize = null;

        /**
         * 随机创建时设备创建个数
         */
        this.BatchCount = null;

        /**
         * 文件上传类型时文件md5值
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        ParametersType: string | null;
        FileName: string | null;
        FileSize: number | null;
        BatchCount: number | null;
        Hash: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ParametersType = 'ParametersType' in params ? params.ParametersType : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.BatchCount = 'BatchCount' in params ? params.BatchCount : null;
        this.Hash = 'Hash' in params ? params.Hash : null;

    }
}

/**
 * CreateLoraDevice请求参数结构体
 * @class
 */
class CreateLoraDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    DeviceType: string | null
    
    AppEui: string | null
    
    DeviceEui: string | null
    
    AppKey: string | null
    
    AuthKey: string | null
    
    Memo: string | null
    
    constructor(){
        super();

        /**
         * 产品 ID ，创建产品时腾讯云为用户分配全局唯一的 ID
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * 设备类型 ，目前支持A、B、C三种
         */
        this.DeviceType = null;

        /**
         * LoRa应用UUID
         */
        this.AppEui = null;

        /**
         * LoRa设备UUID
         */
        this.DeviceEui = null;

        /**
         * LoRa应用密钥
         */
        this.AppKey = null;

        /**
         * LoRa设备验证密钥
         */
        this.AuthKey = null;

        /**
         * 设备备注
         */
        this.Memo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        DeviceType: string | null;
        AppEui: string | null;
        DeviceEui: string | null;
        AppKey: string | null;
        AuthKey: string | null;
        Memo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.AppEui = 'AppEui' in params ? params.AppEui : null;
        this.DeviceEui = 'DeviceEui' in params ? params.DeviceEui : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.Memo = 'Memo' in params ? params.Memo : null;

    }
}

/**
 * CreateProduct返回参数结构体
 * @class
 */
class CreateProductResponse extends AbstractModel {

    ProductName: string | null
    
    ProductId: string | null
    
    ProductProperties: ProductProperties | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 产品名称
         */
        this.ProductName = null;

        /**
         * 产品 ID，腾讯云生成全局唯一 ID
         */
        this.ProductId = null;

        /**
         * 产品属性
         */
        this.ProductProperties = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductName: string | null;
        ProductId: string | null;
        ProductProperties: ProductProperties | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLoraDevice返回参数结构体
 * @class
 */
class DeleteLoraDeviceResponse extends AbstractModel {

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
 * CreateTask请求参数结构体
 * @class
 */
class CreateTaskRequest extends AbstractModel {

    TaskType: string | null
    
    ProductId: string | null
    
    DeviceNameFilter: string | null
    
    ScheduleTimeInSeconds: number | null
    
    Tasks: Task | null
    
    MaxExecutionTimeInSeconds: number | null
    
    constructor(){
        super();

        /**
         * 任务类型，取值为 “UpdateShadow” 或者 “PublishMessage”
         */
        this.TaskType = null;

        /**
         * 执行任务的产品ID
         */
        this.ProductId = null;

        /**
         * 执行任务的设备名的正则表达式
         */
        this.DeviceNameFilter = null;

        /**
         * 任务开始执行的时间。 取值为 Unix 时间戳，单位秒，且需大于等于当前时间时间戳，0为系统当前时间时间戳，即立即执行，最大为当前时间86400秒后，超过则取值为当前时间86400秒后
         */
        this.ScheduleTimeInSeconds = null;

        /**
         * 任务描述细节，描述见下 Task
         */
        this.Tasks = null;

        /**
         * 最长执行时间，单位秒，被调度后超过此时间仍未有结果则视为任务失败。取值为0-86400，默认为86400
         */
        this.MaxExecutionTimeInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskType: string | null;
        ProductId: string | null;
        DeviceNameFilter: string | null;
        ScheduleTimeInSeconds: number | null;
        Tasks: Task | null;
        MaxExecutionTimeInSeconds: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNameFilter = 'DeviceNameFilter' in params ? params.DeviceNameFilter : null;
        this.ScheduleTimeInSeconds = 'ScheduleTimeInSeconds' in params ? params.ScheduleTimeInSeconds : null;

        if (params.Tasks) {
            let obj = new Task();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.MaxExecutionTimeInSeconds = 'MaxExecutionTimeInSeconds' in params ? params.MaxExecutionTimeInSeconds : null;

    }
}

/**
 * CreateTopicPolicy返回参数结构体
 * @class
 */
class CreateTopicPolicyResponse extends AbstractModel {

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
 * DescribeMultiDevices返回参数结构体
 * @class
 */
class DescribeMultiDevicesResponse extends AbstractModel {

    TaskId: string | null
    
    DevicesInfo: Array<MultiDevicesInfo> | null
    
    TotalDevNum: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID，由批量创建设备接口返回
         */
        this.TaskId = null;

        /**
         * 设备详细信息列表
         */
        this.DevicesInfo = null;

        /**
         * 该任务创建设备的总数
         */
        this.TotalDevNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        DevicesInfo: Array<MultiDevicesInfo> | null;
        TotalDevNum: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.DevicesInfo) {
            this.DevicesInfo = new Array();
            for (let z in params.DevicesInfo) {
                let obj = new MultiDevicesInfo();
                obj.deserialize(params.DevicesInfo[z]);
                this.DevicesInfo.push(obj);
            }
        }
        this.TotalDevNum = 'TotalDevNum' in params ? params.TotalDevNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDevice返回参数结构体
 * @class
 */
class CreateDeviceResponse extends AbstractModel {

    DeviceName: string | null
    
    DevicePsk: string | null
    
    DeviceCert: string | null
    
    DevicePrivateKey: string | null
    
    LoraDevEui: string | null
    
    LoraMoteType: number | null
    
    LoraAppKey: string | null
    
    LoraNwkKey: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * 对称加密密钥，base64编码。采用对称加密时返回该参数
         */
        this.DevicePsk = null;

        /**
         * 设备证书，用于 TLS 建立链接时校验客户端身份。采用非对称加密时返回该参数
         */
        this.DeviceCert = null;

        /**
         * 设备私钥，用于 TLS 建立链接时校验客户端身份，腾讯云后台不保存，请妥善保管。采用非对称加密时返回该参数
         */
        this.DevicePrivateKey = null;

        /**
         * LoRa设备的DevEui，当设备是LoRa设备时，会返回该字段
         */
        this.LoraDevEui = null;

        /**
         * LoRa设备的MoteType，当设备是LoRa设备时，会返回该字段
         */
        this.LoraMoteType = null;

        /**
         * LoRa设备的AppKey，当设备是LoRa设备时，会返回该字段
         */
        this.LoraAppKey = null;

        /**
         * LoRa设备的NwkKey，当设备是LoRa设备时，会返回该字段
         */
        this.LoraNwkKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DeviceName: string | null;
        DevicePsk: string | null;
        DeviceCert: string | null;
        DevicePrivateKey: string | null;
        LoraDevEui: string | null;
        LoraMoteType: number | null;
        LoraAppKey: string | null;
        LoraNwkKey: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePrivateKey = 'DevicePrivateKey' in params ? params.DevicePrivateKey : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.LoraAppKey = 'LoraAppKey' in params ? params.LoraAppKey : null;
        this.LoraNwkKey = 'LoraNwkKey' in params ? params.LoraNwkKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLoraDevice请求参数结构体
 * @class
 */
class DeleteLoraDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    constructor(){
        super();

        /**
         * 设备所属产品ID
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * CreateDevice请求参数结构体
 * @class
 */
class CreateDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    Attribute: Attribute | null
    
    DefinedPsk: string | null
    
    Isp: number | null
    
    Imei: string | null
    
    LoraDevEui: string | null
    
    LoraMoteType: number | null
    
    Skey: string | null
    
    LoraAppKey: string | null
    
    constructor(){
        super();

        /**
         * 产品 ID 。创建产品时腾讯云为用户分配全局唯一的 ID
         */
        this.ProductId = null;

        /**
         * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}。
         */
        this.DeviceName = null;

        /**
         * 设备属性
         */
        this.Attribute = null;

        /**
         * 是否使用自定义PSK，默认不使用
         */
        this.DefinedPsk = null;

        /**
         * 运营商类型，当产品是NB-IoT产品时，此字段必填。1表示中国电信，2表示中国移动，3表示中国联通
         */
        this.Isp = null;

        /**
         * IMEI，当产品是NB-IoT产品时，此字段必填
         */
        this.Imei = null;

        /**
         * LoRa设备的DevEui，当创建LoRa时，此字段必填
         */
        this.LoraDevEui = null;

        /**
         * LoRa设备的MoteType
         */
        this.LoraMoteType = null;

        /**
         * 创建LoRa设备需要skey
         */
        this.Skey = null;

        /**
         * LoRa设备的AppKey
         */
        this.LoraAppKey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        Attribute: Attribute | null;
        DefinedPsk: string | null;
        Isp: number | null;
        Imei: string | null;
        LoraDevEui: string | null;
        LoraMoteType: number | null;
        Skey: string | null;
        LoraAppKey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

        if (params.Attribute) {
            let obj = new Attribute();
            obj.deserialize(params.Attribute)
            this.Attribute = obj;
        }
        this.DefinedPsk = 'DefinedPsk' in params ? params.DefinedPsk : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.LoraAppKey = 'LoraAppKey' in params ? params.LoraAppKey : null;

    }
}

/**
 * DescribeProductTask请求参数结构体
 * @class
 */
class DescribeProductTaskRequest extends AbstractModel {

    ProductId: string | null
    
    TaskId: number | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 任务ID
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        TaskId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateProduct请求参数结构体
 * @class
 */
class CreateProductRequest extends AbstractModel {

    ProductName: string | null
    
    ProductProperties: ProductProperties | null
    
    Skey: string | null
    
    constructor(){
        super();

        /**
         * 产品名称，名称不能和已经存在的产品名称重复。命名规则：[a-zA-Z0-9:_-]{1,32}
         */
        this.ProductName = null;

        /**
         * 产品属性
         */
        this.ProductProperties = null;

        /**
         * 创建CLAA产品时，需要Skey
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductName: string | null;
        ProductProperties: ProductProperties | null;
        Skey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * DisableTopicRule返回参数结构体
 * @class
 */
class DisableTopicRuleResponse extends AbstractModel {

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
 * 代理订阅信息
 * @class
 */
class BrokerSubscribe extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 设备名
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * DescribeProductTask返回参数结构体
 * @class
 */
class DescribeProductTaskResponse extends AbstractModel {

    TaskInfo: ProductTaskInfo | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 产品任务详细信息
         */
        this.TaskInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskInfo: ProductTaskInfo | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TaskInfo) {
            let obj = new ProductTaskInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevice返回参数结构体
 * @class
 */
class DescribeDeviceResponse extends AbstractModel {

    DeviceName: string | null
    
    Online: number | null
    
    LoginTime: number | null
    
    Version: string | null
    
    LastUpdateTime: number | null
    
    DeviceCert: string | null
    
    DevicePsk: string | null
    
    Tags: Array<DeviceTag> | null
    
    DeviceType: number | null
    
    Imei: string | null
    
    Isp: number | null
    
    ConnIP: number | null
    
    NbiotDeviceID: string | null
    
    LoraDevEui: string | null
    
    LoraMoteType: number | null
    
    LogLevel: number | null
    
    FirstOnlineTime: number | null
    
    LastOfflineTime: number | null
    
    CreateTime: number | null
    
    CertState: number | null
    
    EnableState: number | null
    
    Labels: Array<DeviceLabel> | null
    
    ClientIP: string | null
    
    FirmwareUpdateTime: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 设备名
         */
        this.DeviceName = null;

        /**
         * 设备是否在线，0不在线，1在线
         */
        this.Online = null;

        /**
         * 设备登录时间
         */
        this.LoginTime = null;

        /**
         * 设备固件版本
         */
        this.Version = null;

        /**
         * 设备最后更新时间
         */
        this.LastUpdateTime = null;

        /**
         * 设备证书
         */
        this.DeviceCert = null;

        /**
         * 设备密钥
         */
        this.DevicePsk = null;

        /**
         * 设备属性
         */
        this.Tags = null;

        /**
         * 设备类型
         */
        this.DeviceType = null;

        /**
         * 国际移动设备识别码 IMEI
         */
        this.Imei = null;

        /**
         * 运营商类型
         */
        this.Isp = null;

        /**
         * IP地址
         */
        this.ConnIP = null;

        /**
         * NB IoT运营商处的DeviceID
         */
        this.NbiotDeviceID = null;

        /**
         * Lora设备的dev eui
         */
        this.LoraDevEui = null;

        /**
         * Lora设备的mote type
         */
        this.LoraMoteType = null;

        /**
         * 设备的sdk日志等级
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LogLevel = null;

        /**
         * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FirstOnlineTime = null;

        /**
         * 最近下线时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LastOfflineTime = null;

        /**
         * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateTime = null;

        /**
         * 设备证书获取状态，0 未获取过设备密钥, 1 已获取过设备密钥
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CertState = null;

        /**
         * 设备启用状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EnableState = null;

        /**
         * 设备标签
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Labels = null;

        /**
         * MQTT客户端IP地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClientIP = null;

        /**
         * 设备固件更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FirmwareUpdateTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DeviceName: string | null;
        Online: number | null;
        LoginTime: number | null;
        Version: string | null;
        LastUpdateTime: number | null;
        DeviceCert: string | null;
        DevicePsk: string | null;
        Tags: Array<DeviceTag> | null;
        DeviceType: number | null;
        Imei: string | null;
        Isp: number | null;
        ConnIP: number | null;
        NbiotDeviceID: string | null;
        LoraDevEui: string | null;
        LoraMoteType: number | null;
        LogLevel: number | null;
        FirstOnlineTime: number | null;
        LastOfflineTime: number | null;
        CreateTime: number | null;
        CertState: number | null;
        EnableState: number | null;
        Labels: Array<DeviceLabel> | null;
        ClientIP: string | null;
        FirmwareUpdateTime: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.ConnIP = 'ConnIP' in params ? params.ConnIP : null;
        this.NbiotDeviceID = 'NbiotDeviceID' in params ? params.NbiotDeviceID : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.FirstOnlineTime = 'FirstOnlineTime' in params ? params.FirstOnlineTime : null;
        this.LastOfflineTime = 'LastOfflineTime' in params ? params.LastOfflineTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CertState = 'CertState' in params ? params.CertState : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DeviceLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.FirmwareUpdateTime = 'FirmwareUpdateTime' in params ? params.FirmwareUpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishBroadcastMessage请求参数结构体
 * @class
 */
class PublishBroadcastMessageRequest extends AbstractModel {

    ProductId: string | null
    
    Payload: string | null
    
    Qos: number | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 消息内容
         */
        this.Payload = null;

        /**
         * 消息质量等级
         */
        this.Qos = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        Payload: string | null;
        Qos: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.Qos = 'Qos' in params ? params.Qos : null;

    }
}

/**
 * PublishMessage请求参数结构体
 * @class
 */
class PublishMessageRequest extends AbstractModel {

    Topic: string | null
    
    Payload: string | null
    
    ProductId: string | null
    
    DeviceName: string | null
    
    Qos: number | null
    
    constructor(){
        super();

        /**
         * 消息发往的主题。命名规则：${ProductId}/${DeviceName}/[a-zA-Z0-9:_-]{1,128}
         */
        this.Topic = null;

        /**
         * 消息内容
         */
        this.Payload = null;

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * 服务质量等级，取值为0或1
         */
        this.Qos = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Topic: string | null;
        Payload: string | null;
        ProductId: string | null;
        DeviceName: string | null;
        Qos: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Qos = 'Qos' in params ? params.Qos : null;

    }
}

/**
 * 设备标签
 * @class
 */
class DeviceLabel extends AbstractModel {

    Key: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 标签标识
         */
        this.Key = null;

        /**
         * 标签值
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
 * UpdateDeviceAvailableState返回参数结构体
 * @class
 */
class UpdateDeviceAvailableStateResponse extends AbstractModel {

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
 * CancelTask请求参数结构体
 * @class
 */
class CancelTaskRequest extends AbstractModel {

    Id: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * UpdateDeviceAvailableState请求参数结构体
 * @class
 */
class UpdateDeviceAvailableStateRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    EnableState: number | null
    
    constructor(){
        super();

        /**
         * 设备所属产品id
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * 要设置的设备状态，1为启用，0为禁用
         */
        this.EnableState = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        EnableState: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

    }
}

/**
 * DeleteProduct返回参数结构体
 * @class
 */
class DeleteProductResponse extends AbstractModel {

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
 * 创建规则请求包体
 * @class
 */
class TopicRulePayload extends AbstractModel {

    Sql: string | null
    
    Actions: string | null
    
    Description: string | null
    
    RuleDisabled: boolean | null
    
    constructor(){
        super();

        /**
         * 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw==
         */
        this.Sql = null;

        /**
         * 行为的JSON字符串，大部分种类举例如下：
[
    {
        "republish": {
            "topic": "TEST/test"
        }
    },
    {
        "forward": {
            "api": "http://127.0.0.1:8080"
        }
    },
    {
        "ckafka": {
            "instance": {
                "id": "ckafka-test",
                "name": ""
            },
            "topic": {
                "id": "topic-test",
                "name": "test"
            },
            "region": "gz"
        }
    },
    {
        "cmqqueue": {
            "queuename": "queue-test-TEST",
            "region": "gz"
        }
    },
    {
        "mysql": {
            "instanceid": "cdb-test",
            "region": "gz",
            "username": "test",
            "userpwd": "*****",
            "dbname": "d_mqtt",
            "tablename": "t_test",
            "fieldpairs": [
                {
                    "field": "test",
                    "value": "test"
                }
            ],
            "devicetype": "CUSTOM"
        }
    }
]
         */
        this.Actions = null;

        /**
         * 规则描述
         */
        this.Description = null;

        /**
         * 是否禁用规则
         */
        this.RuleDisabled = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Sql: string | null;
        Actions: string | null;
        Description: string | null;
        RuleDisabled: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.Actions = 'Actions' in params ? params.Actions : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleDisabled = 'RuleDisabled' in params ? params.RuleDisabled : null;

    }
}

/**
 * PublishToDevice请求参数结构体
 * @class
 */
class PublishToDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    Port: number | null
    
    Payload: string | null
    
    constructor(){
        super();

        /**
         * 产品id
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * LoRa 端口
         */
        this.Port = null;

        /**
         * 消息内容
         */
        this.Payload = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        Port: number | null;
        Payload: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

    }
}

/**
 * DeleteTopicRule返回参数结构体
 * @class
 */
class DeleteTopicRuleResponse extends AbstractModel {

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
 * PublishBroadcastMessage返回参数结构体
 * @class
 */
class PublishBroadcastMessageResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 广播消息任务ID
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
 * DescribeDevice请求参数结构体
 * @class
 */
class DescribeDeviceRequest extends AbstractModel {

    ProductID: string | null
    
    DeviceName: string | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductID = null;

        /**
         * 设备名
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductID: string | null;
        DeviceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * CreateMultiDevicesTask返回参数结构体
 * @class
 */
class CreateMultiDevicesTaskResponse extends AbstractModel {

    Id: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopicPolicy请求参数结构体
 * @class
 */
class CreateTopicPolicyRequest extends AbstractModel {

    ProductID: string | null
    
    TopicName: string | null
    
    Privilege: number | null
    
    BrokerSubscribe: BrokerSubscribe | null
    
    constructor(){
        super();

        /**
         * 产品自身ID
         */
        this.ProductID = null;

        /**
         * Topic名称
         */
        this.TopicName = null;

        /**
         * Topic权限，1发布，2订阅，3订阅和发布
         */
        this.Privilege = null;

        /**
         * 代理订阅信息，网关产品为绑定的子产品创建topic时需要填写，内容为子产品的ID和设备信息。
         */
        this.BrokerSubscribe = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductID: string | null;
        TopicName: string | null;
        Privilege: number | null;
        BrokerSubscribe: BrokerSubscribe | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

        if (params.BrokerSubscribe) {
            let obj = new BrokerSubscribe();
            obj.deserialize(params.BrokerSubscribe)
            this.BrokerSubscribe = obj;
        }

    }
}

/**
 * 产品元数据
 * @class
 */
class ProductMetadata extends AbstractModel {

    CreationDate: number | null
    
    constructor(){
        super();

        /**
         * 产品创建时间
         */
        this.CreationDate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CreationDate: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;

    }
}

/**
 * DescribeLoraDevice返回参数结构体
 * @class
 */
class DescribeLoraDeviceResponse extends AbstractModel {

    DeviceName: string | null
    
    AppEui: string | null
    
    DeviceEui: string | null
    
    AppKey: string | null
    
    ClassType: string | null
    
    ProductId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * LoRa应用UUID
         */
        this.AppEui = null;

        /**
         * LoRa设备UUID
         */
        this.DeviceEui = null;

        /**
         * LoRa应用密钥
         */
        this.AppKey = null;

        /**
         * 设备类型,目前支持A、B、C三种
         */
        this.ClassType = null;

        /**
         * 设备所属产品id
         */
        this.ProductId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DeviceName: string | null;
        AppEui: string | null;
        DeviceEui: string | null;
        AppKey: string | null;
        ClassType: string | null;
        ProductId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.AppEui = 'AppEui' in params ? params.AppEui : null;
        this.DeviceEui = 'DeviceEui' in params ? params.DeviceEui : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.ClassType = 'ClassType' in params ? params.ClassType : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品级任务详细信息
 * @class
 */
class ProductTaskInfo extends AbstractModel {

    Id: number | null
    
    Type: number | null
    
    State: number | null
    
    ParametersType: string | null
    
    Parameters: string | null
    
    ResultType: string | null
    
    Result: string | null
    
    BatchCount: number | null
    
    BatchOffset: number | null
    
    CreateTime: number | null
    
    UpdateTime: number | null
    
    CompleteTime: number | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.Id = null;

        /**
         * 任务类型 0-批量创建设备类型
         */
        this.Type = null;

        /**
         * 任务状态 0-创建中 1-待执行 2-执行中 3-执行失败 4-子任务部分失败 5-执行成功
         */
        this.State = null;

        /**
         * 任务参数类型 cosfile-文件输入 random-随机生成
         */
        this.ParametersType = null;

        /**
         * 任务参数
         */
        this.Parameters = null;

        /**
         * 任务执行结果类型 cosfile-文件输出 errmsg-错误信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ResultType = null;

        /**
         * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Result = null;

        /**
         * 子任务总个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BatchCount = null;

        /**
         * 子任务已执行个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BatchOffset = null;

        /**
         * 任务创建时间
         */
        this.CreateTime = null;

        /**
         * 任务更新时间
         */
        this.UpdateTime = null;

        /**
         * 任务完成时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CompleteTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        Type: number | null;
        State: number | null;
        ParametersType: string | null;
        Parameters: string | null;
        ResultType: string | null;
        Result: string | null;
        BatchCount: number | null;
        BatchOffset: number | null;
        CreateTime: number | null;
        UpdateTime: number | null;
        CompleteTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.State = 'State' in params ? params.State : null;
        this.ParametersType = 'ParametersType' in params ? params.ParametersType : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.BatchCount = 'BatchCount' in params ? params.BatchCount : null;
        this.BatchOffset = 'BatchOffset' in params ? params.BatchOffset : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CompleteTime = 'CompleteTime' in params ? params.CompleteTime : null;

    }
}

/**
 * PublishRRPCMessage返回参数结构体
 * @class
 */
class PublishRRPCMessageResponse extends AbstractModel {

    MessageId: number | null
    
    PayloadBase64: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * RRPC消息ID
         */
        this.MessageId = null;

        /**
         * 设备回复的消息内容，采用base64编码
         */
        this.PayloadBase64 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MessageId: number | null;
        PayloadBase64: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.PayloadBase64 = 'PayloadBase64' in params ? params.PayloadBase64 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelTask返回参数结构体
 * @class
 */
class CancelTaskResponse extends AbstractModel {

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
 * 设备属性
 * @class
 */
class Attribute extends AbstractModel {

    Tags: Array<DeviceTag> | null
    
    constructor(){
        super();

        /**
         * 属性列表
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tags: Array<DeviceTag> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CreateLoraDevice返回参数结构体
 * @class
 */
class CreateLoraDeviceResponse extends AbstractModel {

    AppEui: string | null
    
    DeviceEui: string | null
    
    ClassType: string | null
    
    DeviceName: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * LoRa应用UUID
         */
        this.AppEui = null;

        /**
         * LoRa设备UUID
         */
        this.DeviceEui = null;

        /**
         * 设备类型,目前支持A、B、C三种
         */
        this.ClassType = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AppEui: string | null;
        DeviceEui: string | null;
        ClassType: string | null;
        DeviceName: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AppEui = 'AppEui' in params ? params.AppEui : null;
        this.DeviceEui = 'DeviceEui' in params ? params.DeviceEui : null;
        this.ClassType = 'ClassType' in params ? params.ClassType : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopicRule请求参数结构体
 * @class
 */
class DeleteTopicRuleRequest extends AbstractModel {

    RuleName: string | null
    
    constructor(){
        super();

        /**
         * 规则名
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * ResetDeviceState请求参数结构体
 * @class
 */
class ResetDeviceStateRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceNames: Array<string> | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceNames = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceNames: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * CreateMultiDevice请求参数结构体
 * @class
 */
class CreateMultiDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceNames: Array<string> | null
    
    constructor(){
        super();

        /**
         * 产品 ID。创建产品时腾讯云为用户分配全局唯一的 ID
         */
        this.ProductId = null;

        /**
         * 批量创建的设备名数组，单次最多创建 100 个设备。命名规则：[a-zA-Z0-9:_-]{1,48}
         */
        this.DeviceNames = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceNames: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * PublishToDevice返回参数结构体
 * @class
 */
class PublishToDeviceResponse extends AbstractModel {

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
 * DescribeDeviceShadow请求参数结构体
 * @class
 */
class DescribeDeviceShadowRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    constructor(){
        super();

        /**
         * 产品 ID
         */
        this.ProductId = null;

        /**
         * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * UnbindDevices返回参数结构体
 * @class
 */
class UnbindDevicesResponse extends AbstractModel {

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
 * CreateTaskFileUrl返回参数结构体
 * @class
 */
class CreateTaskFileUrlResponse extends AbstractModel {

    Url: string | null
    
    FileName: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务文件上传链接
         */
        this.Url = null;

        /**
         * 任务文件名
         */
        this.FileName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Url: string | null;
        FileName: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMultiDevices请求参数结构体
 * @class
 */
class DescribeMultiDevicesRequest extends AbstractModel {

    ProductId: string | null
    
    TaskId: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 产品 ID，创建产品时腾讯云为用户分配全局唯一的 ID
         */
        this.ProductId = null;

        /**
         * 任务 ID，由批量创建设备接口返回
         */
        this.TaskId = null;

        /**
         * 分页偏移
         */
        this.Offset = null;

        /**
         * 分页大小，每页返回的设备个数
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        TaskId: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateTaskFileUrl请求参数结构体
 * @class
 */
class CreateTaskFileUrlRequest extends AbstractModel {

    ProductId: string | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * UpdateDeviceShadow返回参数结构体
 * @class
 */
class UpdateDeviceShadowResponse extends AbstractModel {

    Data: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 设备影子数据，JSON字符串格式
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
        Data: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTask返回参数结构体
 * @class
 */
class DescribeTaskResponse extends AbstractModel {

    Type: string | null
    
    Id: string | null
    
    ProductId: string | null
    
    Status: number | null
    
    CreateTime: number | null
    
    UpdateTime: number | null
    
    DoneTime: number | null
    
    ScheduleTime: number | null
    
    RetCode: number | null
    
    ErrMsg: string | null
    
    Percent: number | null
    
    AllDeviceCnt: number | null
    
    DoneDeviceCnt: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务类型，目前取值为 “UpdateShadow” 或者 “PublishMessage”
         */
        this.Type = null;

        /**
         * 任务 ID
         */
        this.Id = null;

        /**
         * 产品 ID
         */
        this.ProductId = null;

        /**
         * 状态。1表示等待处理，2表示调度处理中，3表示已完成，4表示失败，5表示已取消
         */
        this.Status = null;

        /**
         * 任务创建时间，Unix 时间戳
         */
        this.CreateTime = null;

        /**
         * 最后任务更新时间，Unix 时间戳
         */
        this.UpdateTime = null;

        /**
         * 任务完成时间，Unix 时间戳
         */
        this.DoneTime = null;

        /**
         * 被调度时间，Unix 时间戳
         */
        this.ScheduleTime = null;

        /**
         * 返回的错误码
         */
        this.RetCode = null;

        /**
         * 返回的错误信息
         */
        this.ErrMsg = null;

        /**
         * 完成任务的设备比例
         */
        this.Percent = null;

        /**
         * 匹配到的需执行任务的设备数目
         */
        this.AllDeviceCnt = null;

        /**
         * 已完成任务的设备数目
         */
        this.DoneDeviceCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Id: string | null;
        ProductId: string | null;
        Status: number | null;
        CreateTime: number | null;
        UpdateTime: number | null;
        DoneTime: number | null;
        ScheduleTime: number | null;
        RetCode: number | null;
        ErrMsg: string | null;
        Percent: number | null;
        AllDeviceCnt: number | null;
        DoneDeviceCnt: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DoneTime = 'DoneTime' in params ? params.DoneTime : null;
        this.ScheduleTime = 'ScheduleTime' in params ? params.ScheduleTime : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.AllDeviceCnt = 'AllDeviceCnt' in params ? params.AllDeviceCnt : null;
        this.DoneDeviceCnt = 'DoneDeviceCnt' in params ? params.DoneDeviceCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTask返回参数结构体
 * @class
 */
class CreateTaskResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 创建的任务ID
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
        TaskId: string | null;
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
 * 批量发消息请求
 * @class
 */
class BatchPublishMessage extends AbstractModel {

    Topic: string | null
    
    Payload: string | null
    
    constructor(){
        super();

        /**
         * 消息发往的主题。为 Topic 权限中去除 ProductID 和 DeviceName 的部分，如 “event”
         */
        this.Topic = null;

        /**
         * 消息内容
         */
        this.Payload = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Topic: string | null;
        Payload: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

    }
}

/**
 * DescribeMultiDevTask返回参数结构体
 * @class
 */
class DescribeMultiDevTaskResponse extends AbstractModel {

    TaskId: string | null
    
    TaskStatus: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID
         */
        this.TaskId = null;

        /**
         * 任务是否完成。0 代表任务未开始，1 代表任务正在执行，2 代表任务已完成
         */
        this.TaskStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        TaskStatus: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductTasks请求参数结构体
 * @class
 */
class DescribeProductTasksRequest extends AbstractModel {

    ProductId: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 产品级别任务列表偏移量
         */
        this.Offset = null;

        /**
         * 产品级别任务列表拉取个数
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 设备属性
 * @class
 */
class DeviceTag extends AbstractModel {

    Tag: string | null
    
    Type: number | null
    
    Value: string | null
    
    Name: string | null
    
    constructor(){
        super();

        /**
         * 属性名称
         */
        this.Tag = null;

        /**
         * 属性值的类型，1 int，2 string
         */
        this.Type = null;

        /**
         * 属性的值
         */
        this.Value = null;

        /**
         * 属性描述名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tag: string | null;
        Type: number | null;
        Value: string | null;
        Name: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeLoraDevice请求参数结构体
 * @class
 */
class DescribeLoraDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    constructor(){
        super();

        /**
         * 产品id
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * DescribeTask请求参数结构体
 * @class
 */
class DescribeTaskRequest extends AbstractModel {

    Id: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * PublishMessage返回参数结构体
 * @class
 */
class PublishMessageResponse extends AbstractModel {

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
 * BindDevices返回参数结构体
 * @class
 */
class BindDevicesResponse extends AbstractModel {

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
 * 重置设备状态结果
 * @class
 */
class ResetDeviceResult extends AbstractModel {

    DeviceName: string | null
    
    Success: boolean | null
    
    Reason: string | null
    
    constructor(){
        super();

        /**
         * 设备名
         */
        this.DeviceName = null;

        /**
         * 是否成功
         */
        this.Success = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DeviceName: string | null;
        Success: boolean | null;
        Reason: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Success = 'Success' in params ? params.Success : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DescribeDevices请求参数结构体
 * @class
 */
class DescribeDevicesRequest extends AbstractModel {

    ProductId: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    FirmwareVersion: string | null
    
    DeviceName: string | null
    
    constructor(){
        super();

        /**
         * 需要查看设备列表的产品 ID
         */
        this.ProductId = null;

        /**
         * 偏移量，Offset从0开始
         */
        this.Offset = null;

        /**
         * 分页的大小，数值范围 10-250
         */
        this.Limit = null;

        /**
         * 设备固件版本号，若不带此参数会返回所有固件版本的设备。传"None-FirmwareVersion"查询无版本号的设备
         */
        this.FirmwareVersion = null;

        /**
         * 需要过滤的设备名称
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        Offset: number | null;
        Limit: number | null;
        FirmwareVersion: string | null;
        DeviceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * DescribeDeviceClientKey返回参数结构体
 * @class
 */
class DescribeDeviceClientKeyResponse extends AbstractModel {

    ClientKey: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 设备的私钥
         */
        this.ClientKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientKey: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientKey = 'ClientKey' in params ? params.ClientKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableTopicRule请求参数结构体
 * @class
 */
class DisableTopicRuleRequest extends AbstractModel {

    RuleName: string | null
    
    constructor(){
        super();

        /**
         * 规则名称
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * ResetDeviceState返回参数结构体
 * @class
 */
class ResetDeviceStateResponse extends AbstractModel {

    SuccessCount: number | null
    
    ResetDeviceResults: Array<ResetDeviceResult> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 批量重置设备成功数
         */
        this.SuccessCount = null;

        /**
         * 批量重置设备结果
         */
        this.ResetDeviceResults = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SuccessCount: number | null;
        ResetDeviceResults: Array<ResetDeviceResult> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.ResetDeviceResults) {
            this.ResetDeviceResults = new Array();
            for (let z in params.ResetDeviceResults) {
                let obj = new ResetDeviceResult();
                obj.deserialize(params.ResetDeviceResults[z]);
                this.ResetDeviceResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopicRule返回参数结构体
 * @class
 */
class CreateTopicRuleResponse extends AbstractModel {

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
 * CreateTopicRule请求参数结构体
 * @class
 */
class CreateTopicRuleRequest extends AbstractModel {

    RuleName: string | null
    
    TopicRulePayload: TopicRulePayload | null
    
    constructor(){
        super();

        /**
         * 规则名称
         */
        this.RuleName = null;

        /**
         * 规则内容
         */
        this.TopicRulePayload = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleName: string | null;
        TopicRulePayload: TopicRulePayload | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.TopicRulePayload) {
            let obj = new TopicRulePayload();
            obj.deserialize(params.TopicRulePayload)
            this.TopicRulePayload = obj;
        }

    }
}

/**
 * PublishAsDevice请求参数结构体
 * @class
 */
class PublishAsDeviceRequest extends AbstractModel {

    ProductId: string | null
    
    DeviceName: string | null
    
    Port: number | null
    
    Payload: string | null
    
    constructor(){
        super();

        /**
         * 产品ID
         */
        this.ProductId = null;

        /**
         * 设备名称
         */
        this.DeviceName = null;

        /**
         * LoRa 设备端口
         */
        this.Port = null;

        /**
         * 消息内容
         */
        this.Payload = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductId: string | null;
        DeviceName: string | null;
        Port: number | null;
        Payload: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

    }
}

/**
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends AbstractModel {

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
 * 设备详细信息
 * @class
 */
class DeviceInfo extends AbstractModel {

    DeviceName: string | null
    
    Online: number | null
    
    LoginTime: number | null
    
    Version: string | null
    
    DeviceCert: string | null
    
    DevicePsk: string | null
    
    Tags: Array<DeviceTag> | null
    
    DeviceType: number | null
    
    Imei: string | null
    
    Isp: number | null
    
    NbiotDeviceID: string | null
    
    ConnIP: number | null
    
    LastUpdateTime: number | null
    
    LoraDevEui: string | null
    
    LoraMoteType: number | null
    
    FirstOnlineTime: number | null
    
    LastOfflineTime: number | null
    
    CreateTime: number | null
    
    LogLevel: number | null
    
    CertState: number | null
    
    EnableState: number | null
    
    Labels: Array<DeviceLabel> | null
    
    ClientIP: string | null
    
    FirmwareUpdateTime: number | null
    
    constructor(){
        super();

        /**
         * 设备名
         */
        this.DeviceName = null;

        /**
         * 设备是否在线，0不在线，1在线
         */
        this.Online = null;

        /**
         * 设备登录时间
         */
        this.LoginTime = null;

        /**
         * 设备版本
         */
        this.Version = null;

        /**
         * 设备证书，证书加密的设备返回
         */
        this.DeviceCert = null;

        /**
         * 设备密钥，密钥加密的设备返回
         */
        this.DevicePsk = null;

        /**
         * 设备属性
         */
        this.Tags = null;

        /**
         * 设备类型
         */
        this.DeviceType = null;

        /**
         * 国际移动设备识别码 IMEI
         */
        this.Imei = null;

        /**
         * 运营商类型
         */
        this.Isp = null;

        /**
         * NB IOT运营商处的DeviceID
         */
        this.NbiotDeviceID = null;

        /**
         * IP地址
         */
        this.ConnIP = null;

        /**
         * 设备最后更新时间
         */
        this.LastUpdateTime = null;

        /**
         * LoRa设备的dev eui
         */
        this.LoraDevEui = null;

        /**
         * LoRa设备的Mote type
         */
        this.LoraMoteType = null;

        /**
         * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FirstOnlineTime = null;

        /**
         * 最近下线时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LastOfflineTime = null;

        /**
         * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateTime = null;

        /**
         * 设备日志级别
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LogLevel = null;

        /**
         * 设备证书获取状态, 1 已获取过设备密钥，0 未获取过设备密钥
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CertState = null;

        /**
         * 设备可用状态，0禁用，1启用
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EnableState = null;

        /**
         * 设备标签
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Labels = null;

        /**
         * MQTT客户端IP地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClientIP = null;

        /**
         * ota最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FirmwareUpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DeviceName: string | null;
        Online: number | null;
        LoginTime: number | null;
        Version: string | null;
        DeviceCert: string | null;
        DevicePsk: string | null;
        Tags: Array<DeviceTag> | null;
        DeviceType: number | null;
        Imei: string | null;
        Isp: number | null;
        NbiotDeviceID: string | null;
        ConnIP: number | null;
        LastUpdateTime: number | null;
        LoraDevEui: string | null;
        LoraMoteType: number | null;
        FirstOnlineTime: number | null;
        LastOfflineTime: number | null;
        CreateTime: number | null;
        LogLevel: number | null;
        CertState: number | null;
        EnableState: number | null;
        Labels: Array<DeviceLabel> | null;
        ClientIP: string | null;
        FirmwareUpdateTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.NbiotDeviceID = 'NbiotDeviceID' in params ? params.NbiotDeviceID : null;
        this.ConnIP = 'ConnIP' in params ? params.ConnIP : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.FirstOnlineTime = 'FirstOnlineTime' in params ? params.FirstOnlineTime : null;
        this.LastOfflineTime = 'LastOfflineTime' in params ? params.LastOfflineTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.CertState = 'CertState' in params ? params.CertState : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DeviceLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.FirmwareUpdateTime = 'FirmwareUpdateTime' in params ? params.FirmwareUpdateTime : null;

    }
}

/**
 * DescribeProductTasks返回参数结构体
 * @class
 */
class DescribeProductTasksResponse extends AbstractModel {

    TotalCount: number | null
    
    TaskInfos: Array<ProductTaskInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的任务总个数
         */
        this.TotalCount = null;

        /**
         * 任务详细信息列表
         */
        this.TaskInfos = null;

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
        TaskInfos: Array<ProductTaskInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new ProductTaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishAsDevice返回参数结构体
 * @class
 */
class PublishAsDeviceResponse extends AbstractModel {

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
 * EnableTopicRule请求参数结构体
 * @class
 */
class EnableTopicRuleRequest extends AbstractModel {

    RuleName: string | null
    
    constructor(){
        super();

        /**
         * 规则名称
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

export const Models = {
    UnbindDevicesRequest: UnbindDevicesRequest,
    BindDevicesRequest: BindDevicesRequest,
    DescribeProductsRequest: DescribeProductsRequest,
    DescribeDevicesResponse: DescribeDevicesResponse,
    ProductInfo: ProductInfo,
    Task: Task,
    EnableTopicRuleResponse: EnableTopicRuleResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    UpdateDeviceShadowRequest: UpdateDeviceShadowRequest,
    DescribeMultiDevTaskRequest: DescribeMultiDevTaskRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    DescribeDeviceShadowResponse: DescribeDeviceShadowResponse,
    CreateMultiDeviceResponse: CreateMultiDeviceResponse,
    PublishRRPCMessageRequest: PublishRRPCMessageRequest,
    ProductProperties: ProductProperties,
    UpdateTopicPolicyResponse: UpdateTopicPolicyResponse,
    TaskInfo: TaskInfo,
    DeleteProductRequest: DeleteProductRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    ReplaceTopicRuleRequest: ReplaceTopicRuleRequest,
    MultiDevicesInfo: MultiDevicesInfo,
    ReplaceTopicRuleResponse: ReplaceTopicRuleResponse,
    DescribeDeviceClientKeyRequest: DescribeDeviceClientKeyRequest,
    UpdateTopicPolicyRequest: UpdateTopicPolicyRequest,
    BatchUpdateShadow: BatchUpdateShadow,
    DeleteDeviceRequest: DeleteDeviceRequest,
    CreateMultiDevicesTaskRequest: CreateMultiDevicesTaskRequest,
    CreateLoraDeviceRequest: CreateLoraDeviceRequest,
    CreateProductResponse: CreateProductResponse,
    DeleteLoraDeviceResponse: DeleteLoraDeviceResponse,
    CreateTaskRequest: CreateTaskRequest,
    CreateTopicPolicyResponse: CreateTopicPolicyResponse,
    DescribeMultiDevicesResponse: DescribeMultiDevicesResponse,
    CreateDeviceResponse: CreateDeviceResponse,
    DeleteLoraDeviceRequest: DeleteLoraDeviceRequest,
    CreateDeviceRequest: CreateDeviceRequest,
    DescribeProductTaskRequest: DescribeProductTaskRequest,
    CreateProductRequest: CreateProductRequest,
    DisableTopicRuleResponse: DisableTopicRuleResponse,
    BrokerSubscribe: BrokerSubscribe,
    DescribeProductTaskResponse: DescribeProductTaskResponse,
    DescribeDeviceResponse: DescribeDeviceResponse,
    PublishBroadcastMessageRequest: PublishBroadcastMessageRequest,
    PublishMessageRequest: PublishMessageRequest,
    DeviceLabel: DeviceLabel,
    UpdateDeviceAvailableStateResponse: UpdateDeviceAvailableStateResponse,
    CancelTaskRequest: CancelTaskRequest,
    UpdateDeviceAvailableStateRequest: UpdateDeviceAvailableStateRequest,
    DeleteProductResponse: DeleteProductResponse,
    TopicRulePayload: TopicRulePayload,
    PublishToDeviceRequest: PublishToDeviceRequest,
    DeleteTopicRuleResponse: DeleteTopicRuleResponse,
    PublishBroadcastMessageResponse: PublishBroadcastMessageResponse,
    DescribeDeviceRequest: DescribeDeviceRequest,
    CreateMultiDevicesTaskResponse: CreateMultiDevicesTaskResponse,
    CreateTopicPolicyRequest: CreateTopicPolicyRequest,
    ProductMetadata: ProductMetadata,
    DescribeLoraDeviceResponse: DescribeLoraDeviceResponse,
    ProductTaskInfo: ProductTaskInfo,
    PublishRRPCMessageResponse: PublishRRPCMessageResponse,
    CancelTaskResponse: CancelTaskResponse,
    Attribute: Attribute,
    CreateLoraDeviceResponse: CreateLoraDeviceResponse,
    DeleteTopicRuleRequest: DeleteTopicRuleRequest,
    ResetDeviceStateRequest: ResetDeviceStateRequest,
    CreateMultiDeviceRequest: CreateMultiDeviceRequest,
    PublishToDeviceResponse: PublishToDeviceResponse,
    DescribeDeviceShadowRequest: DescribeDeviceShadowRequest,
    UnbindDevicesResponse: UnbindDevicesResponse,
    CreateTaskFileUrlResponse: CreateTaskFileUrlResponse,
    DescribeMultiDevicesRequest: DescribeMultiDevicesRequest,
    CreateTaskFileUrlRequest: CreateTaskFileUrlRequest,
    UpdateDeviceShadowResponse: UpdateDeviceShadowResponse,
    DescribeTaskResponse: DescribeTaskResponse,
    CreateTaskResponse: CreateTaskResponse,
    BatchPublishMessage: BatchPublishMessage,
    DescribeMultiDevTaskResponse: DescribeMultiDevTaskResponse,
    DescribeProductTasksRequest: DescribeProductTasksRequest,
    DeviceTag: DeviceTag,
    DescribeLoraDeviceRequest: DescribeLoraDeviceRequest,
    DescribeTaskRequest: DescribeTaskRequest,
    PublishMessageResponse: PublishMessageResponse,
    BindDevicesResponse: BindDevicesResponse,
    ResetDeviceResult: ResetDeviceResult,
    DescribeDevicesRequest: DescribeDevicesRequest,
    DescribeDeviceClientKeyResponse: DescribeDeviceClientKeyResponse,
    DisableTopicRuleRequest: DisableTopicRuleRequest,
    ResetDeviceStateResponse: ResetDeviceStateResponse,
    CreateTopicRuleResponse: CreateTopicRuleResponse,
    CreateTopicRuleRequest: CreateTopicRuleRequest,
    PublishAsDeviceRequest: PublishAsDeviceRequest,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DeviceInfo: DeviceInfo,
    DescribeProductTasksResponse: DescribeProductTasksResponse,
    PublishAsDeviceResponse: PublishAsDeviceResponse,
    EnableTopicRuleRequest: EnableTopicRuleRequest,

}
