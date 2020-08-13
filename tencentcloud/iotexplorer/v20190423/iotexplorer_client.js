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
const DescribeProjectResponse = models_1.Models.DescribeProjectResponse;
const ControlDeviceDataResponse = models_1.Models.ControlDeviceDataResponse;
const DescribeDeviceDataHistoryRequest = models_1.Models.DescribeDeviceDataHistoryRequest;
const SearchStudioProductResponse = models_1.Models.SearchStudioProductResponse;
const DeviceData = models_1.Models.DeviceData;
const DescribeStudioProductRequest = models_1.Models.DescribeStudioProductRequest;
const DeleteProjectRequest = models_1.Models.DeleteProjectRequest;
const ListEventHistoryRequest = models_1.Models.ListEventHistoryRequest;
const ListEventHistoryResponse = models_1.Models.ListEventHistoryResponse;
const DeviceDataHistoryItem = models_1.Models.DeviceDataHistoryItem;
const ProductEntry = models_1.Models.ProductEntry;
const GetStudioProductListResponse = models_1.Models.GetStudioProductListResponse;
const DescribeModelDefinitionResponse = models_1.Models.DescribeModelDefinitionResponse;
const ModifyModelDefinitionResponse = models_1.Models.ModifyModelDefinitionResponse;
const GetLoRaGatewayListResponse = models_1.Models.GetLoRaGatewayListResponse;
const ProjectEntry = models_1.Models.ProjectEntry;
const GetProjectListRequest = models_1.Models.GetProjectListRequest;
const DeleteStudioProductResponse = models_1.Models.DeleteStudioProductResponse;
const EventHistoryItem = models_1.Models.EventHistoryItem;
const DeleteDeviceRequest = models_1.Models.DeleteDeviceRequest;
const GetDeviceListResponse = models_1.Models.GetDeviceListResponse;
const ModifyStudioProductResponse = models_1.Models.ModifyStudioProductResponse;
const ControlDeviceDataRequest = models_1.Models.ControlDeviceDataRequest;
const SearchStudioProductRequest = models_1.Models.SearchStudioProductRequest;
const ReleaseStudioProductResponse = models_1.Models.ReleaseStudioProductResponse;
const DescribeStudioProductResponse = models_1.Models.DescribeStudioProductResponse;
const DeleteLoRaGatewayRequest = models_1.Models.DeleteLoRaGatewayRequest;
const ModifyProjectResponse = models_1.Models.ModifyProjectResponse;
const ModifyModelDefinitionRequest = models_1.Models.ModifyModelDefinitionRequest;
const LoRaGatewayLocation = models_1.Models.LoRaGatewayLocation;
const CreateStudioProductResponse = models_1.Models.CreateStudioProductResponse;
const CallDeviceActionSyncRequest = models_1.Models.CallDeviceActionSyncRequest;
const DeleteStudioProductRequest = models_1.Models.DeleteStudioProductRequest;
const ModifyProjectRequest = models_1.Models.ModifyProjectRequest;
const ModifyLoRaGatewayResponse = models_1.Models.ModifyLoRaGatewayResponse;
const CallDeviceActionSyncResponse = models_1.Models.CallDeviceActionSyncResponse;
const CreateLoRaGatewayRequest = models_1.Models.CreateLoRaGatewayRequest;
const ModifyStudioProductRequest = models_1.Models.ModifyStudioProductRequest;
const DescribeDeviceDataHistoryResponse = models_1.Models.DescribeDeviceDataHistoryResponse;
const CreateStudioProductRequest = models_1.Models.CreateStudioProductRequest;
const ProductModelDefinition = models_1.Models.ProductModelDefinition;
const CreateProjectResponse = models_1.Models.CreateProjectResponse;
const ReleaseStudioProductRequest = models_1.Models.ReleaseStudioProductRequest;
const DescribeModelDefinitionRequest = models_1.Models.DescribeModelDefinitionRequest;
const DeleteProjectResponse = models_1.Models.DeleteProjectResponse;
const CallDeviceActionAsyncResponse = models_1.Models.CallDeviceActionAsyncResponse;
const CallDeviceActionAsyncRequest = models_1.Models.CallDeviceActionAsyncRequest;
const ProjectEntryEx = models_1.Models.ProjectEntryEx;
const DescribeDeviceDataResponse = models_1.Models.DescribeDeviceDataResponse;
const CreateDeviceResponse = models_1.Models.CreateDeviceResponse;
const GetLoRaGatewayListRequest = models_1.Models.GetLoRaGatewayListRequest;
const CreateDeviceRequest = models_1.Models.CreateDeviceRequest;
const DescribeProjectRequest = models_1.Models.DescribeProjectRequest;
const GetStudioProductListRequest = models_1.Models.GetStudioProductListRequest;
const DescribeDeviceDataRequest = models_1.Models.DescribeDeviceDataRequest;
const DeleteDeviceResponse = models_1.Models.DeleteDeviceResponse;
const DeviceInfo = models_1.Models.DeviceInfo;
const CreateLoRaGatewayResponse = models_1.Models.CreateLoRaGatewayResponse;
const DescribeDeviceRequest = models_1.Models.DescribeDeviceRequest;
const GetDeviceListRequest = models_1.Models.GetDeviceListRequest;
const ModifyLoRaGatewayRequest = models_1.Models.ModifyLoRaGatewayRequest;
const DeleteLoRaGatewayResponse = models_1.Models.DeleteLoRaGatewayResponse;
const LoRaGatewayItem = models_1.Models.LoRaGatewayItem;
const DescribeDeviceResponse = models_1.Models.DescribeDeviceResponse;
const GetProjectListResponse = models_1.Models.GetProjectListResponse;
const CreateProjectRequest = models_1.Models.CreateProjectRequest;
/**
 * iotexplorer client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("iotexplorer.tencentcloudapi.com", "2019-04-23", credential, region, profile);
    }
    /**
     * 提供修改产品的名称和描述等信息的能力，对于已发布产品不允许进行修改。
     * @param {ModifyStudioProductRequest} req
     * @param {function(string, ModifyStudioProductResponse):void} cb
     * @public
     */
    ModifyStudioProduct(req, cb) {
        const resp = new ModifyStudioProductResponse();
        this.request("ModifyStudioProduct", req, resp, cb);
    }
    /**
     * 提供删除某个项目下产品的能力
     * @param {DeleteStudioProductRequest} req
     * @param {function(string, DeleteStudioProductResponse):void} cb
     * @public
     */
    DeleteStudioProduct(req, cb) {
        const resp = new DeleteStudioProductResponse();
        this.request("DeleteStudioProduct", req, resp, cb);
    }
    /**
     * 根据设备产品ID、设备名称，获取设备上报的属性数据。
     * @param {DescribeDeviceDataRequest} req
     * @param {function(string, DescribeDeviceDataResponse):void} cb
     * @public
     */
    DescribeDeviceData(req, cb) {
        const resp = new DescribeDeviceDataResponse();
        this.request("DescribeDeviceData", req, resp, cb);
    }
    /**
     * 删除  LoRa 网关的接口
     * @param {DeleteLoRaGatewayRequest} req
     * @param {function(string, DeleteLoRaGatewayResponse):void} cb
     * @public
     */
    DeleteLoRaGateway(req, cb) {
        const resp = new DeleteLoRaGatewayResponse();
        this.request("DeleteLoRaGateway", req, resp, cb);
    }
    /**
     * 为用户提供新建产品的能力，用于管理用户的设备
     * @param {CreateStudioProductRequest} req
     * @param {function(string, CreateStudioProductResponse):void} cb
     * @public
     */
    CreateStudioProduct(req, cb) {
        const resp = new CreateStudioProductResponse();
        this.request("CreateStudioProduct", req, resp, cb);
    }
    /**
     * 用于查看某个设备的详细信息
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        const resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }
    /**
     * 创建新 LoRa 网关设备接口
     * @param {CreateLoRaGatewayRequest} req
     * @param {function(string, CreateLoRaGatewayResponse):void} cb
     * @public
     */
    CreateLoRaGateway(req, cb) {
        const resp = new CreateLoRaGatewayResponse();
        this.request("CreateLoRaGateway", req, resp, cb);
    }
    /**
     * 修改 LoRa 网关信息
     * @param {ModifyLoRaGatewayRequest} req
     * @param {function(string, ModifyLoRaGatewayResponse):void} cb
     * @public
     */
    ModifyLoRaGateway(req, cb) {
        const resp = new ModifyLoRaGatewayResponse();
        this.request("ModifyLoRaGateway", req, resp, cb);
    }
    /**
     * 提供根据产品名称查找产品的能力
     * @param {SearchStudioProductRequest} req
     * @param {function(string, SearchStudioProductResponse):void} cb
     * @public
     */
    SearchStudioProduct(req, cb) {
        const resp = new SearchStudioProductResponse();
        this.request("SearchStudioProduct", req, resp, cb);
    }
    /**
     * 提供查询用户所创建的项目列表查询功能。
     * @param {GetProjectListRequest} req
     * @param {function(string, GetProjectListResponse):void} cb
     * @public
     */
    GetProjectList(req, cb) {
        const resp = new GetProjectListResponse();
        this.request("GetProjectList", req, resp, cb);
    }
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     * @param {DescribeDeviceDataHistoryRequest} req
     * @param {function(string, DescribeDeviceDataHistoryResponse):void} cb
     * @public
     */
    DescribeDeviceDataHistory(req, cb) {
        const resp = new DescribeDeviceDataHistoryResponse();
        this.request("DescribeDeviceDataHistory", req, resp, cb);
    }
    /**
     * 为用户提供同步调用设备行为的能力。
     * @param {CallDeviceActionSyncRequest} req
     * @param {function(string, CallDeviceActionSyncResponse):void} cb
     * @public
     */
    CallDeviceActionSync(req, cb) {
        const resp = new CallDeviceActionSyncResponse();
        this.request("CallDeviceActionSync", req, resp, cb);
    }
    /**
     * 提供查看茶品详细信息的能力，包括产品的ID、数据协议、认证类型等重要参数
     * @param {DescribeStudioProductRequest} req
     * @param {function(string, DescribeStudioProductResponse):void} cb
     * @public
     */
    DescribeStudioProduct(req, cb) {
        const resp = new DescribeStudioProductResponse();
        this.request("DescribeStudioProduct", req, resp, cb);
    }
    /**
     * 修改项目
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        const resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }
    /**
     * 用于查询某个产品下的设备列表
     * @param {GetDeviceListRequest} req
     * @param {function(string, GetDeviceListResponse):void} cb
     * @public
     */
    GetDeviceList(req, cb) {
        const resp = new GetDeviceListResponse();
        this.request("GetDeviceList", req, resp, cb);
    }
    /**
     * 创建设备
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        const resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }
    /**
     * 获取设备的历史事件
     * @param {ListEventHistoryRequest} req
     * @param {function(string, ListEventHistoryResponse):void} cb
     * @public
     */
    ListEventHistory(req, cb) {
        const resp = new ListEventHistoryResponse();
        this.request("ListEventHistory", req, resp, cb);
    }
    /**
     * 删除设备
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        const resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }
    /**
     * 获取 LoRa 网关列表接口
     * @param {GetLoRaGatewayListRequest} req
     * @param {function(string, GetLoRaGatewayListResponse):void} cb
     * @public
     */
    GetLoRaGatewayList(req, cb) {
        const resp = new GetLoRaGatewayListResponse();
        this.request("GetLoRaGatewayList", req, resp, cb);
    }
    /**
     * 产品开发完成并测试通过后，通过发布产品将产品设置为发布状态
     * @param {ReleaseStudioProductRequest} req
     * @param {function(string, ReleaseStudioProductResponse):void} cb
     * @public
     */
    ReleaseStudioProduct(req, cb) {
        const resp = new ReleaseStudioProductResponse();
        this.request("ReleaseStudioProduct", req, resp, cb);
    }
    /**
     * 提供修改产品的数据模板的能力
     * @param {ModifyModelDefinitionRequest} req
     * @param {function(string, ModifyModelDefinitionResponse):void} cb
     * @public
     */
    ModifyModelDefinition(req, cb) {
        const resp = new ModifyModelDefinitionResponse();
        this.request("ModifyModelDefinition", req, resp, cb);
    }
    /**
     * 查询项目详情
     * @param {DescribeProjectRequest} req
     * @param {function(string, DescribeProjectResponse):void} cb
     * @public
     */
    DescribeProject(req, cb) {
        const resp = new DescribeProjectResponse();
        this.request("DescribeProject", req, resp, cb);
    }
    /**
     * 查询产品配置的数据模板信息
     * @param {DescribeModelDefinitionRequest} req
     * @param {function(string, DescribeModelDefinitionResponse):void} cb
     * @public
     */
    DescribeModelDefinition(req, cb) {
        const resp = new DescribeModelDefinitionResponse();
        this.request("DescribeModelDefinition", req, resp, cb);
    }
    /**
     * 为用户提供新建项目的能力，用于集中管理产品和应用。
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        const resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }
    /**
     * 提供给用户异步调用设备行为的能力
     * @param {CallDeviceActionAsyncRequest} req
     * @param {function(string, CallDeviceActionAsyncResponse):void} cb
     * @public
     */
    CallDeviceActionAsync(req, cb) {
        const resp = new CallDeviceActionAsyncResponse();
        this.request("CallDeviceActionAsync", req, resp, cb);
    }
    /**
     * 提供删除某个项目的能力
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        const resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }
    /**
     * 根据设备产品ID、设备名称，设置控制设备的属性数据。
     * @param {ControlDeviceDataRequest} req
     * @param {function(string, ControlDeviceDataResponse):void} cb
     * @public
     */
    ControlDeviceData(req, cb) {
        const resp = new ControlDeviceDataResponse();
        this.request("ControlDeviceData", req, resp, cb);
    }
    /**
     * 提供查询某个项目下所有产品信息的能力。
     * @param {GetStudioProductListRequest} req
     * @param {function(string, GetStudioProductListResponse):void} cb
     * @public
     */
    GetStudioProductList(req, cb) {
        const resp = new GetStudioProductListResponse();
        this.request("GetStudioProductList", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=iotexplorer_client.js.map