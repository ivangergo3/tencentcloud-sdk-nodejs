"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const models_1 = require("./models");
const abstract_client_1 = require("../../common/abstract_client");
const UnbindDevicesRequest = models_1.Models.UnbindDevicesRequest;
const BindDevicesRequest = models_1.Models.BindDevicesRequest;
const DescribeProductsRequest = models_1.Models.DescribeProductsRequest;
const DescribeDevicesResponse = models_1.Models.DescribeDevicesResponse;
const ProductInfo = models_1.Models.ProductInfo;
const Task = models_1.Models.Task;
const EnableTopicRuleResponse = models_1.Models.EnableTopicRuleResponse;
const DescribeTasksResponse = models_1.Models.DescribeTasksResponse;
const UpdateDeviceShadowRequest = models_1.Models.UpdateDeviceShadowRequest;
const DescribeMultiDevTaskRequest = models_1.Models.DescribeMultiDevTaskRequest;
const DescribeProductsResponse = models_1.Models.DescribeProductsResponse;
const DescribeDeviceShadowResponse = models_1.Models.DescribeDeviceShadowResponse;
const CreateMultiDeviceResponse = models_1.Models.CreateMultiDeviceResponse;
const PublishRRPCMessageRequest = models_1.Models.PublishRRPCMessageRequest;
const ProductProperties = models_1.Models.ProductProperties;
const UpdateTopicPolicyResponse = models_1.Models.UpdateTopicPolicyResponse;
const TaskInfo = models_1.Models.TaskInfo;
const DeleteProductRequest = models_1.Models.DeleteProductRequest;
const DescribeTasksRequest = models_1.Models.DescribeTasksRequest;
const ReplaceTopicRuleRequest = models_1.Models.ReplaceTopicRuleRequest;
const MultiDevicesInfo = models_1.Models.MultiDevicesInfo;
const ReplaceTopicRuleResponse = models_1.Models.ReplaceTopicRuleResponse;
const DescribeDeviceClientKeyRequest = models_1.Models.DescribeDeviceClientKeyRequest;
const UpdateTopicPolicyRequest = models_1.Models.UpdateTopicPolicyRequest;
const BatchUpdateShadow = models_1.Models.BatchUpdateShadow;
const DeleteDeviceRequest = models_1.Models.DeleteDeviceRequest;
const CreateMultiDevicesTaskRequest = models_1.Models.CreateMultiDevicesTaskRequest;
const CreateLoraDeviceRequest = models_1.Models.CreateLoraDeviceRequest;
const CreateProductResponse = models_1.Models.CreateProductResponse;
const DeleteLoraDeviceResponse = models_1.Models.DeleteLoraDeviceResponse;
const CreateTaskRequest = models_1.Models.CreateTaskRequest;
const CreateTopicPolicyResponse = models_1.Models.CreateTopicPolicyResponse;
const DescribeMultiDevicesResponse = models_1.Models.DescribeMultiDevicesResponse;
const CreateDeviceResponse = models_1.Models.CreateDeviceResponse;
const DeleteLoraDeviceRequest = models_1.Models.DeleteLoraDeviceRequest;
const CreateDeviceRequest = models_1.Models.CreateDeviceRequest;
const DescribeProductTaskRequest = models_1.Models.DescribeProductTaskRequest;
const CreateProductRequest = models_1.Models.CreateProductRequest;
const DisableTopicRuleResponse = models_1.Models.DisableTopicRuleResponse;
const BrokerSubscribe = models_1.Models.BrokerSubscribe;
const DescribeProductTaskResponse = models_1.Models.DescribeProductTaskResponse;
const DescribeDeviceResponse = models_1.Models.DescribeDeviceResponse;
const PublishBroadcastMessageRequest = models_1.Models.PublishBroadcastMessageRequest;
const PublishMessageRequest = models_1.Models.PublishMessageRequest;
const DeviceLabel = models_1.Models.DeviceLabel;
const UpdateDeviceAvailableStateResponse = models_1.Models.UpdateDeviceAvailableStateResponse;
const CancelTaskRequest = models_1.Models.CancelTaskRequest;
const UpdateDeviceAvailableStateRequest = models_1.Models.UpdateDeviceAvailableStateRequest;
const DeleteProductResponse = models_1.Models.DeleteProductResponse;
const TopicRulePayload = models_1.Models.TopicRulePayload;
const PublishToDeviceRequest = models_1.Models.PublishToDeviceRequest;
const DeleteTopicRuleResponse = models_1.Models.DeleteTopicRuleResponse;
const PublishBroadcastMessageResponse = models_1.Models.PublishBroadcastMessageResponse;
const DescribeDeviceRequest = models_1.Models.DescribeDeviceRequest;
const CreateMultiDevicesTaskResponse = models_1.Models.CreateMultiDevicesTaskResponse;
const CreateTopicPolicyRequest = models_1.Models.CreateTopicPolicyRequest;
const ProductMetadata = models_1.Models.ProductMetadata;
const DescribeLoraDeviceResponse = models_1.Models.DescribeLoraDeviceResponse;
const ProductTaskInfo = models_1.Models.ProductTaskInfo;
const PublishRRPCMessageResponse = models_1.Models.PublishRRPCMessageResponse;
const CancelTaskResponse = models_1.Models.CancelTaskResponse;
const Attribute = models_1.Models.Attribute;
const CreateLoraDeviceResponse = models_1.Models.CreateLoraDeviceResponse;
const DeleteTopicRuleRequest = models_1.Models.DeleteTopicRuleRequest;
const ResetDeviceStateRequest = models_1.Models.ResetDeviceStateRequest;
const CreateMultiDeviceRequest = models_1.Models.CreateMultiDeviceRequest;
const PublishToDeviceResponse = models_1.Models.PublishToDeviceResponse;
const DescribeDeviceShadowRequest = models_1.Models.DescribeDeviceShadowRequest;
const UnbindDevicesResponse = models_1.Models.UnbindDevicesResponse;
const CreateTaskFileUrlResponse = models_1.Models.CreateTaskFileUrlResponse;
const DescribeMultiDevicesRequest = models_1.Models.DescribeMultiDevicesRequest;
const CreateTaskFileUrlRequest = models_1.Models.CreateTaskFileUrlRequest;
const UpdateDeviceShadowResponse = models_1.Models.UpdateDeviceShadowResponse;
const DescribeTaskResponse = models_1.Models.DescribeTaskResponse;
const CreateTaskResponse = models_1.Models.CreateTaskResponse;
const BatchPublishMessage = models_1.Models.BatchPublishMessage;
const DescribeMultiDevTaskResponse = models_1.Models.DescribeMultiDevTaskResponse;
const DescribeProductTasksRequest = models_1.Models.DescribeProductTasksRequest;
const DeviceTag = models_1.Models.DeviceTag;
const DescribeLoraDeviceRequest = models_1.Models.DescribeLoraDeviceRequest;
const DescribeTaskRequest = models_1.Models.DescribeTaskRequest;
const PublishMessageResponse = models_1.Models.PublishMessageResponse;
const BindDevicesResponse = models_1.Models.BindDevicesResponse;
const ResetDeviceResult = models_1.Models.ResetDeviceResult;
const DescribeDevicesRequest = models_1.Models.DescribeDevicesRequest;
const DescribeDeviceClientKeyResponse = models_1.Models.DescribeDeviceClientKeyResponse;
const DisableTopicRuleRequest = models_1.Models.DisableTopicRuleRequest;
const ResetDeviceStateResponse = models_1.Models.ResetDeviceStateResponse;
const CreateTopicRuleResponse = models_1.Models.CreateTopicRuleResponse;
const CreateTopicRuleRequest = models_1.Models.CreateTopicRuleRequest;
const PublishAsDeviceRequest = models_1.Models.PublishAsDeviceRequest;
const DeleteDeviceResponse = models_1.Models.DeleteDeviceResponse;
const DeviceInfo = models_1.Models.DeviceInfo;
const DescribeProductTasksResponse = models_1.Models.DescribeProductTasksResponse;
const PublishAsDeviceResponse = models_1.Models.PublishAsDeviceResponse;
const EnableTopicRuleRequest = models_1.Models.EnableTopicRuleRequest;
/**
 * iotcloud client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("iotcloud.tencentcloudapi.com", "2018-06-14", credential, region, profile);
    }
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        const resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }
    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     * @param {ReplaceTopicRuleRequest} req
     * @param {function(string, ReplaceTopicRuleResponse):void} cb
     * @public
     */
    ReplaceTopicRule(req, cb) {
        const resp = new ReplaceTopicRuleResponse();
        this.request("ReplaceTopicRule", req, resp, cb);
    }
    /**
     * 发布RRPC消息
     * @param {PublishRRPCMessageRequest} req
     * @param {function(string, PublishRRPCMessageResponse):void} cb
     * @public
     */
    PublishRRPCMessage(req, cb) {
        const resp = new PublishRRPCMessageResponse();
        this.request("PublishRRPCMessage", req, resp, cb);
    }
    /**
     * 删除lora类型的设备
     * @param {DeleteLoraDeviceRequest} req
     * @param {function(string, DeleteLoraDeviceResponse):void} cb
     * @public
     */
    DeleteLoraDevice(req, cb) {
        const resp = new DeleteLoraDeviceResponse();
        this.request("DeleteLoraDevice", req, resp, cb);
    }
    /**
     * 服务器端下发消息给lora类型的设备
     * @param {PublishToDeviceRequest} req
     * @param {function(string, PublishToDeviceResponse):void} cb
     * @public
     */
    PublishToDevice(req, cb) {
        const resp = new PublishToDeviceResponse();
        this.request("PublishToDevice", req, resp, cb);
    }
    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。
     * @param {DescribeDeviceShadowRequest} req
     * @param {function(string, DescribeDeviceShadowResponse):void} cb
     * @public
     */
    DescribeDeviceShadow(req, cb) {
        const resp = new DescribeDeviceShadowResponse();
        this.request("DescribeDeviceShadow", req, resp, cb);
    }
    /**
     * 本接口（DescribeDevice）用于查看设备信息
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        const resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }
    /**
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     * @param {CreateMultiDeviceRequest} req
     * @param {function(string, CreateMultiDeviceResponse):void} cb
     * @public
     */
    CreateMultiDevice(req, cb) {
        const resp = new CreateMultiDeviceResponse();
        this.request("CreateMultiDevice", req, resp, cb);
    }
    /**
     * 本接口（CreateTopicRule）用于创建一个规则
     * @param {CreateTopicRuleRequest} req
     * @param {function(string, CreateTopicRuleResponse):void} cb
     * @public
     */
    CreateTopicRule(req, cb) {
        const resp = new CreateTopicRuleResponse();
        this.request("CreateTopicRule", req, resp, cb);
    }
    /**
     * 本接口（CancelTask）用于取消一个未被调度的任务。
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        const resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }
    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     * @param {UpdateDeviceShadowRequest} req
     * @param {function(string, UpdateDeviceShadowResponse):void} cb
     * @public
     */
    UpdateDeviceShadow(req, cb) {
        const resp = new UpdateDeviceShadowResponse();
        this.request("UpdateDeviceShadow", req, resp, cb);
    }
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     * @param {CreateTopicPolicyRequest} req
     * @param {function(string, CreateTopicPolicyResponse):void} cb
     * @public
     */
    CreateTopicPolicy(req, cb) {
        const resp = new CreateTopicPolicyResponse();
        this.request("CreateTopicPolicy", req, resp, cb);
    }
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品
     * @param {CreateProductRequest} req
     * @param {function(string, CreateProductResponse):void} cb
     * @public
     */
    CreateProduct(req, cb) {
        const resp = new CreateProductResponse();
        this.request("CreateProduct", req, resp, cb);
    }
    /**
     * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
     * @param {DescribeDeviceClientKeyRequest} req
     * @param {function(string, DescribeDeviceClientKeyResponse):void} cb
     * @public
     */
    DescribeDeviceClientKey(req, cb) {
        const resp = new DescribeDeviceClientKeyResponse();
        this.request("DescribeDeviceClientKey", req, resp, cb);
    }
    /**
     * 本接口（DescribeProducts）用于列出产品列表。
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        const resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }
    /**
     * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
     * @param {CreateMultiDevicesTaskRequest} req
     * @param {function(string, CreateMultiDevicesTaskResponse):void} cb
     * @public
     */
    CreateMultiDevicesTask(req, cb) {
        const resp = new CreateMultiDevicesTaskResponse();
        this.request("CreateMultiDevicesTask", req, resp, cb);
    }
    /**
     * 获取lora类型设备的详细信息
     * @param {DescribeLoraDeviceRequest} req
     * @param {function(string, DescribeLoraDeviceResponse):void} cb
     * @public
     */
    DescribeLoraDevice(req, cb) {
        const resp = new DescribeLoraDeviceResponse();
        this.request("DescribeLoraDevice", req, resp, cb);
    }
    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        const resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        const resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        const resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }
    /**
     * 本接口（PublishMessage）用于向某个主题发消息。
     * @param {PublishMessageRequest} req
     * @param {function(string, PublishMessageResponse):void} cb
     * @public
     */
    PublishMessage(req, cb) {
        const resp = new PublishMessageResponse();
        this.request("PublishMessage", req, resp, cb);
    }
    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        const resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     * @param {CreateTaskFileUrlRequest} req
     * @param {function(string, CreateTaskFileUrlResponse):void} cb
     * @public
     */
    CreateTaskFileUrl(req, cb) {
        const resp = new CreateTaskFileUrlResponse();
        this.request("CreateTaskFileUrl", req, resp, cb);
    }
    /**
     * 重置设备的连接状态
     * @param {ResetDeviceStateRequest} req
     * @param {function(string, ResetDeviceStateResponse):void} cb
     * @public
     */
    ResetDeviceState(req, cb) {
        const resp = new ResetDeviceStateResponse();
        this.request("ResetDeviceState", req, resp, cb);
    }
    /**
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        const resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }
    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     * @param {DescribeMultiDevicesRequest} req
     * @param {function(string, DescribeMultiDevicesResponse):void} cb
     * @public
     */
    DescribeMultiDevices(req, cb) {
        const resp = new DescribeMultiDevicesResponse();
        this.request("DescribeMultiDevices", req, resp, cb);
    }
    /**
     * 启用或者禁用设备
     * @param {UpdateDeviceAvailableStateRequest} req
     * @param {function(string, UpdateDeviceAvailableStateResponse):void} cb
     * @public
     */
    UpdateDeviceAvailableState(req, cb) {
        const resp = new UpdateDeviceAvailableStateResponse();
        this.request("UpdateDeviceAvailableState", req, resp, cb);
    }
    /**
     * 模拟lora类型的设备端向服务器端发送消息
     * @param {PublishAsDeviceRequest} req
     * @param {function(string, PublishAsDeviceResponse):void} cb
     * @public
     */
    PublishAsDevice(req, cb) {
        const resp = new PublishAsDeviceResponse();
        this.request("PublishAsDevice", req, resp, cb);
    }
    /**
     * 创建lora类型的设备
     * @param {CreateLoraDeviceRequest} req
     * @param {function(string, CreateLoraDeviceResponse):void} cb
     * @public
     */
    CreateLoraDevice(req, cb) {
        const resp = new CreateLoraDeviceResponse();
        this.request("CreateLoraDevice", req, resp, cb);
    }
    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     * @param {BindDevicesRequest} req
     * @param {function(string, BindDevicesResponse):void} cb
     * @public
     */
    BindDevices(req, cb) {
        const resp = new BindDevicesResponse();
        this.request("BindDevices", req, resp, cb);
    }
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     * @param {UpdateTopicPolicyRequest} req
     * @param {function(string, UpdateTopicPolicyResponse):void} cb
     * @public
     */
    UpdateTopicPolicy(req, cb) {
        const resp = new UpdateTopicPolicyResponse();
        this.request("UpdateTopicPolicy", req, resp, cb);
    }
    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     * @param {UnbindDevicesRequest} req
     * @param {function(string, UnbindDevicesResponse):void} cb
     * @public
     */
    UnbindDevices(req, cb) {
        const resp = new UnbindDevicesResponse();
        this.request("UnbindDevices", req, resp, cb);
    }
    /**
     * 发布广播消息
     * @param {PublishBroadcastMessageRequest} req
     * @param {function(string, PublishBroadcastMessageResponse):void} cb
     * @public
     */
    PublishBroadcastMessage(req, cb) {
        const resp = new PublishBroadcastMessageResponse();
        this.request("PublishBroadcastMessage", req, resp, cb);
    }
    /**
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     * @param {DescribeProductTasksRequest} req
     * @param {function(string, DescribeProductTasksResponse):void} cb
     * @public
     */
    DescribeProductTasks(req, cb) {
        const resp = new DescribeProductTasksResponse();
        this.request("DescribeProductTasks", req, resp, cb);
    }
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        const resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }
    /**
     * 本接口（DisableTopicRule）用于禁用规则
     * @param {DisableTopicRuleRequest} req
     * @param {function(string, DisableTopicRuleResponse):void} cb
     * @public
     */
    DisableTopicRule(req, cb) {
        const resp = new DisableTopicRuleResponse();
        this.request("DisableTopicRule", req, resp, cb);
    }
    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     * @param {DescribeMultiDevTaskRequest} req
     * @param {function(string, DescribeMultiDevTaskResponse):void} cb
     * @public
     */
    DescribeMultiDevTask(req, cb) {
        const resp = new DescribeMultiDevTaskResponse();
        this.request("DescribeMultiDevTask", req, resp, cb);
    }
    /**
     * 本接口（EnableTopicRule）用于启用规则
     * @param {EnableTopicRuleRequest} req
     * @param {function(string, EnableTopicRuleResponse):void} cb
     * @public
     */
    EnableTopicRule(req, cb) {
        const resp = new EnableTopicRuleResponse();
        this.request("EnableTopicRule", req, resp, cb);
    }
    /**
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     * @param {DescribeProductTaskRequest} req
     * @param {function(string, DescribeProductTaskResponse):void} cb
     * @public
     */
    DescribeProductTask(req, cb) {
        const resp = new DescribeProductTaskResponse();
        this.request("DescribeProductTask", req, resp, cb);
    }
    /**
     * 本接口（DeleteTopicRule）用于删除规则
     * @param {DeleteTopicRuleRequest} req
     * @param {function(string, DeleteTopicRuleResponse):void} cb
     * @public
     */
    DeleteTopicRule(req, cb) {
        const resp = new DeleteTopicRuleResponse();
        this.request("DeleteTopicRule", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=iotcloud_client.js.map