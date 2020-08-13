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
const AppUpdateDeviceRequest = models_1.Models.AppUpdateDeviceRequest;
const GetDeviceResponse = models_1.Models.GetDeviceResponse;
const GetDeviceDataResponse = models_1.Models.GetDeviceDataResponse;
const AppResetPasswordResponse = models_1.Models.AppResetPasswordResponse;
const DeleteRuleRequest = models_1.Models.DeleteRuleRequest;
const ActivateRuleResponse = models_1.Models.ActivateRuleResponse;
const UpdateRuleRequest = models_1.Models.UpdateRuleRequest;
const DeviceSignature = models_1.Models.DeviceSignature;
const AppGetDevicesRequest = models_1.Models.AppGetDevicesRequest;
const AppGetDeviceDataResponse = models_1.Models.AppGetDeviceDataResponse;
const GetTopicResponse = models_1.Models.GetTopicResponse;
const DeactivateRuleResponse = models_1.Models.DeactivateRuleResponse;
const IssueDeviceControlRequest = models_1.Models.IssueDeviceControlRequest;
const GetDeviceStatisticsRequest = models_1.Models.GetDeviceStatisticsRequest;
const ResetDeviceResponse = models_1.Models.ResetDeviceResponse;
const GetDeviceLogResponse = models_1.Models.GetDeviceLogResponse;
const AddRuleRequest = models_1.Models.AddRuleRequest;
const ResetDeviceRequest = models_1.Models.ResetDeviceRequest;
const ServiceAction = models_1.Models.ServiceAction;
const DataTemplate = models_1.Models.DataTemplate;
const DeleteTopicRequest = models_1.Models.DeleteTopicRequest;
const AddProductResponse = models_1.Models.AddProductResponse;
const UpdateProductResponse = models_1.Models.UpdateProductResponse;
const DataHistoryEntry = models_1.Models.DataHistoryEntry;
const AppGetDeviceResponse = models_1.Models.AppGetDeviceResponse;
const UpdateRuleResponse = models_1.Models.UpdateRuleResponse;
const AppDeviceDetail = models_1.Models.AppDeviceDetail;
const GetDeviceStatisticsResponse = models_1.Models.GetDeviceStatisticsResponse;
const UnassociateSubDeviceFromGatewayProductResponse = models_1.Models.UnassociateSubDeviceFromGatewayProductResponse;
const Topic = models_1.Models.Topic;
const AssociateSubDeviceToGatewayProductResponse = models_1.Models.AssociateSubDeviceToGatewayProductResponse;
const GetProductRequest = models_1.Models.GetProductRequest;
const AppGetTokenRequest = models_1.Models.AppGetTokenRequest;
const GetRuleRequest = models_1.Models.GetRuleRequest;
const DeleteProductRequest = models_1.Models.DeleteProductRequest;
const AppGetUserRequest = models_1.Models.AppGetUserRequest;
const GetProductsResponse = models_1.Models.GetProductsResponse;
const AppGetDeviceRequest = models_1.Models.AppGetDeviceRequest;
const GetDataHistoryRequest = models_1.Models.GetDataHistoryRequest;
const AddTopicResponse = models_1.Models.AddTopicResponse;
const AddProductRequest = models_1.Models.AddProductRequest;
const ProductEntry = models_1.Models.ProductEntry;
const GetRulesResponse = models_1.Models.GetRulesResponse;
const DeleteDeviceRequest = models_1.Models.DeleteDeviceRequest;
const AssociateSubDeviceToGatewayProductRequest = models_1.Models.AssociateSubDeviceToGatewayProductRequest;
const GetDeviceSignaturesResponse = models_1.Models.GetDeviceSignaturesResponse;
const RuleQuery = models_1.Models.RuleQuery;
const AppUser = models_1.Models.AppUser;
const BoolData = models_1.Models.BoolData;
const PublishMsgRequest = models_1.Models.PublishMsgRequest;
const GetProductsRequest = models_1.Models.GetProductsRequest;
const AddTopicRequest = models_1.Models.AddTopicRequest;
const AppGetDeviceStatusesRequest = models_1.Models.AppGetDeviceStatusesRequest;
const DeviceLogEntry = models_1.Models.DeviceLogEntry;
const GetDebugLogRequest = models_1.Models.GetDebugLogRequest;
const GetDeviceRequest = models_1.Models.GetDeviceRequest;
const GetDeviceDataRequest = models_1.Models.GetDeviceDataRequest;
const DeactivateRuleRequest = models_1.Models.DeactivateRuleRequest;
const GetTopicRequest = models_1.Models.GetTopicRequest;
const GetDevicesResponse = models_1.Models.GetDevicesResponse;
const NumberData = models_1.Models.NumberData;
const GetDevicesRequest = models_1.Models.GetDevicesRequest;
const AppGetTokenResponse = models_1.Models.AppGetTokenResponse;
const GetProductResponse = models_1.Models.GetProductResponse;
const AppAddUserRequest = models_1.Models.AppAddUserRequest;
const AddRuleResponse = models_1.Models.AddRuleResponse;
const AppDeleteDeviceResponse = models_1.Models.AppDeleteDeviceResponse;
const AppIssueDeviceControlRequest = models_1.Models.AppIssueDeviceControlRequest;
const DeviceStatus = models_1.Models.DeviceStatus;
const DeleteProductResponse = models_1.Models.DeleteProductResponse;
const AppGetUserResponse = models_1.Models.AppGetUserResponse;
const AppUpdateUserRequest = models_1.Models.AppUpdateUserRequest;
const GetDebugLogResponse = models_1.Models.GetDebugLogResponse;
const AppUpdateUserResponse = models_1.Models.AppUpdateUserResponse;
const Device = models_1.Models.Device;
const GetRulesRequest = models_1.Models.GetRulesRequest;
const Rule = models_1.Models.Rule;
const IssueDeviceControlResponse = models_1.Models.IssueDeviceControlResponse;
const GetDataHistoryResponse = models_1.Models.GetDataHistoryResponse;
const Action = models_1.Models.Action;
const PublishMsgResponse = models_1.Models.PublishMsgResponse;
const AppGetDevicesResponse = models_1.Models.AppGetDevicesResponse;
const CkafkaAction = models_1.Models.CkafkaAction;
const AddDeviceRequest = models_1.Models.AddDeviceRequest;
const UpdateProductRequest = models_1.Models.UpdateProductRequest;
const DeleteRuleResponse = models_1.Models.DeleteRuleResponse;
const GetDeviceSignaturesRequest = models_1.Models.GetDeviceSignaturesRequest;
const GetRuleResponse = models_1.Models.GetRuleResponse;
const AppUpdateDeviceResponse = models_1.Models.AppUpdateDeviceResponse;
const Product = models_1.Models.Product;
const DebugLogEntry = models_1.Models.DebugLogEntry;
const GetDeviceStatusesRequest = models_1.Models.GetDeviceStatusesRequest;
const GetDeviceStatusesResponse = models_1.Models.GetDeviceStatusesResponse;
const UnassociateSubDeviceFromGatewayProductRequest = models_1.Models.UnassociateSubDeviceFromGatewayProductRequest;
const AppDeleteDeviceRequest = models_1.Models.AppDeleteDeviceRequest;
const StringData = models_1.Models.StringData;
const AppGetDeviceStatusesResponse = models_1.Models.AppGetDeviceStatusesResponse;
const GetTopicsResponse = models_1.Models.GetTopicsResponse;
const AppGetDeviceDataRequest = models_1.Models.AppGetDeviceDataRequest;
const AppAddUserResponse = models_1.Models.AppAddUserResponse;
const DeviceEntry = models_1.Models.DeviceEntry;
const GetDeviceLogRequest = models_1.Models.GetDeviceLogRequest;
const AddDeviceResponse = models_1.Models.AddDeviceResponse;
const ActivateRuleRequest = models_1.Models.ActivateRuleRequest;
const AppResetPasswordRequest = models_1.Models.AppResetPasswordRequest;
const DeleteTopicResponse = models_1.Models.DeleteTopicResponse;
const AppDevice = models_1.Models.AppDevice;
const GetTopicsRequest = models_1.Models.GetTopicsRequest;
const DeviceStatData = models_1.Models.DeviceStatData;
const EnumData = models_1.Models.EnumData;
const DeleteDeviceResponse = models_1.Models.DeleteDeviceResponse;
const AppSecureAddDeviceResponse = models_1.Models.AppSecureAddDeviceResponse;
const AppSecureAddDeviceRequest = models_1.Models.AppSecureAddDeviceRequest;
const AppIssueDeviceControlResponse = models_1.Models.AppIssueDeviceControlResponse;
const TopicAction = models_1.Models.TopicAction;
/**
 * iot client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("iot.tencentcloudapi.com", "2018-01-23", credential, region, profile);
    }
    /**
     * 批量获取设备某一段时间范围的设备上报数据。该接口适用于使用高级版类型的产品
     * @param {GetDataHistoryRequest} req
     * @param {function(string, GetDataHistoryResponse):void} cb
     * @public
     */
    GetDataHistory(req, cb) {
        const resp = new GetDataHistoryResponse();
        this.request("GetDataHistory", req, resp, cb);
    }
    /**
     * 重置设备操作，将会为设备生成新的证书及清空最新数据，需谨慎操作。
     * @param {ResetDeviceRequest} req
     * @param {function(string, ResetDeviceResponse):void} cb
     * @public
     */
    ResetDevice(req, cb) {
        const resp = new ResetDeviceResponse();
        this.request("ResetDevice", req, resp, cb);
    }
    /**
     * 查询某段时间范围内产品的在线、激活设备数
     * @param {GetDeviceStatisticsRequest} req
     * @param {function(string, GetDeviceStatisticsResponse):void} cb
     * @public
     */
    GetDeviceStatistics(req, cb) {
        const resp = new GetDeviceStatisticsResponse();
        this.request("GetDeviceStatistics", req, resp, cb);
    }
    /**
     * 用户绑定设备，绑定后可以在APP端进行控制。绑定设备前需调用“获取设备绑定签名”接口
     * @param {AppSecureAddDeviceRequest} req
     * @param {function(string, AppSecureAddDeviceResponse):void} cb
     * @public
     */
    AppSecureAddDevice(req, cb) {
        const resp = new AppSecureAddDeviceResponse();
        this.request("AppSecureAddDevice", req, resp, cb);
    }
    /**
     * 提供下发控制指令到指定设备的能力，该接口适用于使用高级版类型的产品。
     * @param {IssueDeviceControlRequest} req
     * @param {function(string, IssueDeviceControlResponse):void} cb
     * @public
     */
    IssueDeviceControl(req, cb) {
        const resp = new IssueDeviceControlResponse();
        this.request("IssueDeviceControl", req, resp, cb);
    }
    /**
     * 获取设备的调试日志，用于定位问题
     * @param {GetDebugLogRequest} req
     * @param {function(string, GetDebugLogResponse):void} cb
     * @public
     */
    GetDebugLog(req, cb) {
        const resp = new GetDebugLogResponse();
        this.request("GetDebugLog", req, resp, cb);
    }
    /**
     * 禁用规则
     * @param {DeactivateRuleRequest} req
     * @param {function(string, DeactivateRuleResponse):void} cb
     * @public
     */
    DeactivateRule(req, cb) {
        const resp = new DeactivateRuleResponse();
        this.request("DeactivateRule", req, resp, cb);
    }
    /**
     * 提供分页查询某个产品Id下设备信息的能力。
     * @param {GetDevicesRequest} req
     * @param {function(string, GetDevicesResponse):void} cb
     * @public
     */
    GetDevices(req, cb) {
        const resp = new GetDevicesResponse();
        this.request("GetDevices", req, resp, cb);
    }
    /**
     * 新增Topic，用于设备或应用发布消息至该Topic或订阅该Topic的消息。
     * @param {AddTopicRequest} req
     * @param {function(string, AddTopicResponse):void} cb
     * @public
     */
    AddTopic(req, cb) {
        const resp = new AddTopicResponse();
        this.request("AddTopic", req, resp, cb);
    }
    /**
     * 获取绑定设备的上下线状态
     * @param {AppGetDeviceStatusesRequest} req
     * @param {function(string, AppGetDeviceStatusesResponse):void} cb
     * @public
     */
    AppGetDeviceStatuses(req, cb) {
        const resp = new AppGetDeviceStatusesResponse();
        this.request("AppGetDeviceStatuses", req, resp, cb);
    }
    /**
     * 获取用户在物联网套件所创建的所有产品信息。
     * @param {GetProductsRequest} req
     * @param {function(string, GetProductsResponse):void} cb
     * @public
     */
    GetProducts(req, cb) {
        const resp = new GetProductsResponse();
        this.request("GetProducts", req, resp, cb);
    }
    /**
     * 获取用户token
     * @param {AppGetTokenRequest} req
     * @param {function(string, AppGetTokenResponse):void} cb
     * @public
     */
    AppGetToken(req, cb) {
        const resp = new AppGetTokenResponse();
        this.request("AppGetToken", req, resp, cb);
    }
    /**
     * 修改用户信息
     * @param {AppUpdateUserRequest} req
     * @param {function(string, AppUpdateUserResponse):void} cb
     * @public
     */
    AppUpdateUser(req, cb) {
        const resp = new AppUpdateUserResponse();
        this.request("AppUpdateUser", req, resp, cb);
    }
    /**
     * 新增规则
     * @param {AddRuleRequest} req
     * @param {function(string, AddRuleResponse):void} cb
     * @public
     */
    AddRule(req, cb) {
        const resp = new AddRuleResponse();
        this.request("AddRule", req, resp, cb);
    }
    /**
     * 取消子设备产品与网关设备产品的关联
     * @param {UnassociateSubDeviceFromGatewayProductRequest} req
     * @param {function(string, UnassociateSubDeviceFromGatewayProductResponse):void} cb
     * @public
     */
    UnassociateSubDeviceFromGatewayProduct(req, cb) {
        const resp = new UnassociateSubDeviceFromGatewayProductResponse();
        this.request("UnassociateSubDeviceFromGatewayProduct", req, resp, cb);
    }
    /**
     * 获取设备绑定签名，用于用户绑定某个设备的应用场景
     * @param {GetDeviceSignaturesRequest} req
     * @param {function(string, GetDeviceSignaturesResponse):void} cb
     * @public
     */
    GetDeviceSignatures(req, cb) {
        const resp = new GetDeviceSignaturesResponse();
        this.request("GetDeviceSignatures", req, resp, cb);
    }
    /**
     * 删除规则
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        const resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }
    /**
     * 本接口(AddProduct)用于创建、定义某款硬件产品。
     * @param {AddProductRequest} req
     * @param {function(string, AddProductResponse):void} cb
     * @public
     */
    AddProduct(req, cb) {
        const resp = new AddProductResponse();
        this.request("AddProduct", req, resp, cb);
    }
    /**
     * 提供在指定的产品Id下删除一个设备的能力。
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        const resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }
    /**
     * 提供向指定的Topic发布消息的能力，常用于向设备下发控制指令。该接口只适用于产品版本为“基础版”类型的产品，使用高级版的产品需使用“下发设备控制指令”接口
     * @param {PublishMsgRequest} req
     * @param {function(string, PublishMsgResponse):void} cb
     * @public
     */
    PublishMsg(req, cb) {
        const resp = new PublishMsgResponse();
        this.request("PublishMsg", req, resp, cb);
    }
    /**
     * 更新规则
     * @param {UpdateRuleRequest} req
     * @param {function(string, UpdateRuleResponse):void} cb
     * @public
     */
    UpdateRule(req, cb) {
        const resp = new UpdateRuleResponse();
        this.request("UpdateRule", req, resp, cb);
    }
    /**
     * 用户解除与设备的关联关系，解除后APP用户无法控制设备，获取设备数据
     * @param {AppDeleteDeviceRequest} req
     * @param {function(string, AppDeleteDeviceResponse):void} cb
     * @public
     */
    AppDeleteDevice(req, cb) {
        const resp = new AppDeleteDeviceResponse();
        this.request("AppDeleteDevice", req, resp, cb);
    }
    /**
     * 批量获取设备的当前状态，状态包括在线、离线或未激活状态。
     * @param {GetDeviceStatusesRequest} req
     * @param {function(string, GetDeviceStatusesResponse):void} cb
     * @public
     */
    GetDeviceStatuses(req, cb) {
        const resp = new GetDeviceStatusesResponse();
        this.request("GetDeviceStatuses", req, resp, cb);
    }
    /**
     * 获取转发规则列表
     * @param {GetRulesRequest} req
     * @param {function(string, GetRulesResponse):void} cb
     * @public
     */
    GetRules(req, cb) {
        const resp = new GetRulesResponse();
        this.request("GetRules", req, resp, cb);
    }
    /**
     * 删除用户指定的产品Id对应的信息。
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        const resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }
    /**
     * 获取用户信息
     * @param {AppGetUserRequest} req
     * @param {function(string, AppGetUserResponse):void} cb
     * @public
     */
    AppGetUser(req, cb) {
        const resp = new AppGetUserResponse();
        this.request("AppGetUser", req, resp, cb);
    }
    /**
     * 获取用户的绑定设备列表
     * @param {AppGetDevicesRequest} req
     * @param {function(string, AppGetDevicesResponse):void} cb
     * @public
     */
    AppGetDevices(req, cb) {
        const resp = new AppGetDevicesResponse();
        this.request("AppGetDevices", req, resp, cb);
    }
    /**
     * 为APP提供用户注册功能
     * @param {AppAddUserRequest} req
     * @param {function(string, AppAddUserResponse):void} cb
     * @public
     */
    AppAddUser(req, cb) {
        const resp = new AppAddUserResponse();
        this.request("AppAddUser", req, resp, cb);
    }
    /**
     * 提供修改产品信息及数据模板的能力。
     * @param {UpdateProductRequest} req
     * @param {function(string, UpdateProductResponse):void} cb
     * @public
     */
    UpdateProduct(req, cb) {
        const resp = new UpdateProductResponse();
        this.request("UpdateProduct", req, resp, cb);
    }
    /**
     * 用户通过APP控制设备
     * @param {AppIssueDeviceControlRequest} req
     * @param {function(string, AppIssueDeviceControlResponse):void} cb
     * @public
     */
    AppIssueDeviceControl(req, cb) {
        const resp = new AppIssueDeviceControlResponse();
        this.request("AppIssueDeviceControl", req, resp, cb);
    }
    /**
     * 获取Topic信息
     * @param {GetTopicRequest} req
     * @param {function(string, GetTopicResponse):void} cb
     * @public
     */
    GetTopic(req, cb) {
        const resp = new GetTopicResponse();
        this.request("GetTopic", req, resp, cb);
    }
    /**
     * 获取绑定设备数据，用于实时展示设备的最新数据
     * @param {AppGetDeviceDataRequest} req
     * @param {function(string, AppGetDeviceDataResponse):void} cb
     * @public
     */
    AppGetDeviceData(req, cb) {
        const resp = new AppGetDeviceDataResponse();
        this.request("AppGetDeviceData", req, resp, cb);
    }
    /**
     * 提供查询某个设备详细信息的能力。
     * @param {GetDeviceRequest} req
     * @param {function(string, GetDeviceResponse):void} cb
     * @public
     */
    GetDevice(req, cb) {
        const resp = new GetDeviceResponse();
        this.request("GetDevice", req, resp, cb);
    }
    /**
     * 获取绑定设备的基本信息与数据模板定义
     * @param {AppGetDeviceRequest} req
     * @param {function(string, AppGetDeviceResponse):void} cb
     * @public
     */
    AppGetDevice(req, cb) {
        const resp = new AppGetDeviceResponse();
        this.request("AppGetDevice", req, resp, cb);
    }
    /**
     * 获取某个设备当前上报到云端的数据，该接口适用于使用数据模板协议的产品。
     * @param {GetDeviceDataRequest} req
     * @param {function(string, GetDeviceDataResponse):void} cb
     * @public
     */
    GetDeviceData(req, cb) {
        const resp = new GetDeviceDataResponse();
        this.request("GetDeviceData", req, resp, cb);
    }
    /**
     * 获取转发规则信息
     * @param {GetRuleRequest} req
     * @param {function(string, GetRuleResponse):void} cb
     * @public
     */
    GetRule(req, cb) {
        const resp = new GetRuleResponse();
        this.request("GetRule", req, resp, cb);
    }
    /**
     * 批量获取设备与云端的详细通信日志，该接口适用于使用高级版类型的产品。
     * @param {GetDeviceLogRequest} req
     * @param {function(string, GetDeviceLogResponse):void} cb
     * @public
     */
    GetDeviceLog(req, cb) {
        const resp = new GetDeviceLogResponse();
        this.request("GetDeviceLog", req, resp, cb);
    }
    /**
     * 获取Topic列表
     * @param {GetTopicsRequest} req
     * @param {function(string, GetTopicsResponse):void} cb
     * @public
     */
    GetTopics(req, cb) {
        const resp = new GetTopicsResponse();
        this.request("GetTopics", req, resp, cb);
    }
    /**
     * 提供在指定的产品Id下创建一个设备的能力，生成设备名称与设备秘钥。
     * @param {AddDeviceRequest} req
     * @param {function(string, AddDeviceResponse):void} cb
     * @public
     */
    AddDevice(req, cb) {
        const resp = new AddDeviceResponse();
        this.request("AddDevice", req, resp, cb);
    }
    /**
     * 获取产品定义的详细信息，包括产品名称、产品描述，鉴权模式等信息。
     * @param {GetProductRequest} req
     * @param {function(string, GetProductResponse):void} cb
     * @public
     */
    GetProduct(req, cb) {
        const resp = new GetProductResponse();
        this.request("GetProduct", req, resp, cb);
    }
    /**
     * 重置APP用户密码
     * @param {AppResetPasswordRequest} req
     * @param {function(string, AppResetPasswordResponse):void} cb
     * @public
     */
    AppResetPassword(req, cb) {
        const resp = new AppResetPasswordResponse();
        this.request("AppResetPassword", req, resp, cb);
    }
    /**
     * 启用规则
     * @param {ActivateRuleRequest} req
     * @param {function(string, ActivateRuleResponse):void} cb
     * @public
     */
    ActivateRule(req, cb) {
        const resp = new ActivateRuleResponse();
        this.request("ActivateRule", req, resp, cb);
    }
    /**
     * 关联子设备产品和网关产品
     * @param {AssociateSubDeviceToGatewayProductRequest} req
     * @param {function(string, AssociateSubDeviceToGatewayProductResponse):void} cb
     * @public
     */
    AssociateSubDeviceToGatewayProduct(req, cb) {
        const resp = new AssociateSubDeviceToGatewayProductResponse();
        this.request("AssociateSubDeviceToGatewayProduct", req, resp, cb);
    }
    /**
     * 删除Topic
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        const resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }
    /**
     * 修改设备别名，便于用户个性化定义设备的名称
     * @param {AppUpdateDeviceRequest} req
     * @param {function(string, AppUpdateDeviceResponse):void} cb
     * @public
     */
    AppUpdateDevice(req, cb) {
        const resp = new AppUpdateDeviceResponse();
        this.request("AppUpdateDevice", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=iot_client.js.map