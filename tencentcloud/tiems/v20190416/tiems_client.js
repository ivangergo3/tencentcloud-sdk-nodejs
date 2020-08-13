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
const DisableRsgAsGroupRequest = models_1.Models.DisableRsgAsGroupRequest;
const ExposeServiceResponse = models_1.Models.ExposeServiceResponse;
const RsgAsActivityRelatedInstance = models_1.Models.RsgAsActivityRelatedInstance;
const DeleteJobResponse = models_1.Models.DeleteJobResponse;
const DeleteRuntimeResponse = models_1.Models.DeleteRuntimeResponse;
const CreateJobRequest = models_1.Models.CreateJobRequest;
const ExposeServiceRequest = models_1.Models.ExposeServiceRequest;
const DescribeServiceConfigsResponse = models_1.Models.DescribeServiceConfigsResponse;
const Scaler = models_1.Models.Scaler;
const CreateJobResponse = models_1.Models.CreateJobResponse;
const DeleteServiceResponse = models_1.Models.DeleteServiceResponse;
const DescribeRsgAsGroupsResponse = models_1.Models.DescribeRsgAsGroupsResponse;
const UpdateServiceResponse = models_1.Models.UpdateServiceResponse;
const Instance = models_1.Models.Instance;
const UpdateRsgAsGroupResponse = models_1.Models.UpdateRsgAsGroupResponse;
const DescribeServicesResponse = models_1.Models.DescribeServicesResponse;
const DescribeResourceGroupsResponse = models_1.Models.DescribeResourceGroupsResponse;
const DescribeRsgAsGroupsRequest = models_1.Models.DescribeRsgAsGroupsRequest;
const DeleteResourceGroupRequest = models_1.Models.DeleteResourceGroupRequest;
const Conditions = models_1.Models.Conditions;
const DescribeServiceConfigsRequest = models_1.Models.DescribeServiceConfigsRequest;
const DeleteRsgAsGroupRequest = models_1.Models.DeleteRsgAsGroupRequest;
const ReplicaInfo = models_1.Models.ReplicaInfo;
const DeleteServiceConfigResponse = models_1.Models.DeleteServiceConfigResponse;
const UpdateRsgAsGroupRequest = models_1.Models.UpdateRsgAsGroupRequest;
const DeleteRsgAsGroupResponse = models_1.Models.DeleteRsgAsGroupResponse;
const Config = models_1.Models.Config;
const Option = models_1.Models.Option;
const PredictInput = models_1.Models.PredictInput;
const CreateRuntimeResponse = models_1.Models.CreateRuntimeResponse;
const Job = models_1.Models.Job;
const UpdateJobRequest = models_1.Models.UpdateJobRequest;
const DescribeResourceGroupsRequest = models_1.Models.DescribeResourceGroupsRequest;
const DescribeRuntimesResponse = models_1.Models.DescribeRuntimesResponse;
const DeleteInstanceResponse = models_1.Models.DeleteInstanceResponse;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const DeleteResourceGroupResponse = models_1.Models.DeleteResourceGroupResponse;
const DisableRsgAsGroupResponse = models_1.Models.DisableRsgAsGroupResponse;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const CreateServiceResponse = models_1.Models.CreateServiceResponse;
const CreateServiceRequest = models_1.Models.CreateServiceRequest;
const EnableRsgAsGroupResponse = models_1.Models.EnableRsgAsGroupResponse;
const JobStatus = models_1.Models.JobStatus;
const UpdateServiceRequest = models_1.Models.UpdateServiceRequest;
const Filter = models_1.Models.Filter;
const CreateServiceConfigResponse = models_1.Models.CreateServiceConfigResponse;
const ExposeInfo = models_1.Models.ExposeInfo;
const RsgAsGroup = models_1.Models.RsgAsGroup;
const DeleteServiceRequest = models_1.Models.DeleteServiceRequest;
const Runtime = models_1.Models.Runtime;
const CreateRsgAsGroupResponse = models_1.Models.CreateRsgAsGroupResponse;
const ServiceStatus = models_1.Models.ServiceStatus;
const RsgAsGroupActivity = models_1.Models.RsgAsGroupActivity;
const DescribeRsgAsGroupActivitiesRequest = models_1.Models.DescribeRsgAsGroupActivitiesRequest;
const ResourceGroup = models_1.Models.ResourceGroup;
const DeleteJobRequest = models_1.Models.DeleteJobRequest;
const DeleteInstanceRequest = models_1.Models.DeleteInstanceRequest;
const CreateRsgAsGroupRequest = models_1.Models.CreateRsgAsGroupRequest;
const DescribeRuntimesRequest = models_1.Models.DescribeRuntimesRequest;
const EnableRsgAsGroupRequest = models_1.Models.EnableRsgAsGroupRequest;
const CreateServiceConfigRequest = models_1.Models.CreateServiceConfigRequest;
const QuantizationInput = models_1.Models.QuantizationInput;
const UpdateJobResponse = models_1.Models.UpdateJobResponse;
const CreateRuntimeRequest = models_1.Models.CreateRuntimeRequest;
const ModelService = models_1.Models.ModelService;
const DeleteServiceConfigRequest = models_1.Models.DeleteServiceConfigRequest;
const DeleteRuntimeRequest = models_1.Models.DeleteRuntimeRequest;
const DescribeRsgAsGroupActivitiesResponse = models_1.Models.DescribeRsgAsGroupActivitiesResponse;
const DescribeServicesRequest = models_1.Models.DescribeServicesRequest;
/**
 * tiems client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tiems.tencentcloudapi.com", "2019-04-16", credential, region, profile);
    }
    /**
     * 创建服务
     * @param {CreateServiceRequest} req
     * @param {function(string, CreateServiceResponse):void} cb
     * @public
     */
    CreateService(req, cb) {
        const resp = new CreateServiceResponse();
        this.request("CreateService", req, resp, cb);
    }
    /**
     * 创建服务配置
     * @param {CreateServiceConfigRequest} req
     * @param {function(string, CreateServiceConfigResponse):void} cb
     * @public
     */
    CreateServiceConfig(req, cb) {
        const resp = new CreateServiceConfigResponse();
        this.request("CreateServiceConfig", req, resp, cb);
    }
    /**
     * 创建资源组的伸缩组。当前一个资源组仅允许创建一个伸缩组。
     * @param {CreateRsgAsGroupRequest} req
     * @param {function(string, CreateRsgAsGroupResponse):void} cb
     * @public
     */
    CreateRsgAsGroup(req, cb) {
        const resp = new CreateRsgAsGroupResponse();
        this.request("CreateRsgAsGroup", req, resp, cb);
    }
    /**
     * 删除资源组中的节点。目前仅支持删除已经到期的预付费节点，和按量付费节点。
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        const resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }
    /**
     * 删除服务
     * @param {DeleteServiceRequest} req
     * @param {function(string, DeleteServiceResponse):void} cb
     * @public
     */
    DeleteService(req, cb) {
        const resp = new DeleteServiceResponse();
        this.request("DeleteService", req, resp, cb);
    }
    /**
     * 创建任务
     * @param {CreateJobRequest} req
     * @param {function(string, CreateJobResponse):void} cb
     * @public
     */
    CreateJob(req, cb) {
        const resp = new CreateJobResponse();
        this.request("CreateJob", req, resp, cb);
    }
    /**
     * 更新资源组的伸缩组
     * @param {UpdateRsgAsGroupRequest} req
     * @param {function(string, UpdateRsgAsGroupResponse):void} cb
     * @public
     */
    UpdateRsgAsGroup(req, cb) {
        const resp = new UpdateRsgAsGroupResponse();
        this.request("UpdateRsgAsGroup", req, resp, cb);
    }
    /**
     * 描述服务
     * @param {DescribeServicesRequest} req
     * @param {function(string, DescribeServicesResponse):void} cb
     * @public
     */
    DescribeServices(req, cb) {
        const resp = new DescribeServicesResponse();
        this.request("DescribeServices", req, resp, cb);
    }
    /**
     * 停用资源组的伸缩组
     * @param {DisableRsgAsGroupRequest} req
     * @param {function(string, DisableRsgAsGroupResponse):void} cb
     * @public
     */
    DisableRsgAsGroup(req, cb) {
        const resp = new DisableRsgAsGroupResponse();
        this.request("DisableRsgAsGroup", req, resp, cb);
    }
    /**
     * 更新服务
     * @param {UpdateServiceRequest} req
     * @param {function(string, UpdateServiceResponse):void} cb
     * @public
     */
    UpdateService(req, cb) {
        const resp = new UpdateServiceResponse();
        this.request("UpdateService", req, resp, cb);
    }
    /**
     * 创建运行环境
     * @param {CreateRuntimeRequest} req
     * @param {function(string, CreateRuntimeResponse):void} cb
     * @public
     */
    CreateRuntime(req, cb) {
        const resp = new CreateRuntimeResponse();
        this.request("CreateRuntime", req, resp, cb);
    }
    /**
     * 删除服务配置
     * @param {DeleteServiceConfigRequest} req
     * @param {function(string, DeleteServiceConfigResponse):void} cb
     * @public
     */
    DeleteServiceConfig(req, cb) {
        const resp = new DeleteServiceConfigResponse();
        this.request("DeleteServiceConfig", req, resp, cb);
    }
    /**
     * 获取节点列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }
    /**
     * 查询伸缩组活动
     * @param {DescribeRsgAsGroupActivitiesRequest} req
     * @param {function(string, DescribeRsgAsGroupActivitiesResponse):void} cb
     * @public
     */
    DescribeRsgAsGroupActivities(req, cb) {
        const resp = new DescribeRsgAsGroupActivitiesResponse();
        this.request("DescribeRsgAsGroupActivities", req, resp, cb);
    }
    /**
     * 描述服务运行环境
     * @param {DescribeRuntimesRequest} req
     * @param {function(string, DescribeRuntimesResponse):void} cb
     * @public
     */
    DescribeRuntimes(req, cb) {
        const resp = new DescribeRuntimesResponse();
        this.request("DescribeRuntimes", req, resp, cb);
    }
    /**
     * 获取资源组列表
     * @param {DescribeResourceGroupsRequest} req
     * @param {function(string, DescribeResourceGroupsResponse):void} cb
     * @public
     */
    DescribeResourceGroups(req, cb) {
        const resp = new DescribeResourceGroupsResponse();
        this.request("DescribeResourceGroups", req, resp, cb);
    }
    /**
     * 更新任务
     * @param {UpdateJobRequest} req
     * @param {function(string, UpdateJobResponse):void} cb
     * @public
     */
    UpdateJob(req, cb) {
        const resp = new UpdateJobResponse();
        this.request("UpdateJob", req, resp, cb);
    }
    /**
     * 伸缩
     * @param {DeleteRsgAsGroupRequest} req
     * @param {function(string, DeleteRsgAsGroupResponse):void} cb
     * @public
     */
    DeleteRsgAsGroup(req, cb) {
        const resp = new DeleteRsgAsGroupResponse();
        this.request("DeleteRsgAsGroup", req, resp, cb);
    }
    /**
     * 删除资源组
     * @param {DeleteResourceGroupRequest} req
     * @param {function(string, DeleteResourceGroupResponse):void} cb
     * @public
     */
    DeleteResourceGroup(req, cb) {
        const resp = new DeleteResourceGroupResponse();
        this.request("DeleteResourceGroup", req, resp, cb);
    }
    /**
     * 删除运行环境
     * @param {DeleteRuntimeRequest} req
     * @param {function(string, DeleteRuntimeResponse):void} cb
     * @public
     */
    DeleteRuntime(req, cb) {
        const resp = new DeleteRuntimeResponse();
        this.request("DeleteRuntime", req, resp, cb);
    }
    /**
     * 暴露服务
     * @param {ExposeServiceRequest} req
     * @param {function(string, ExposeServiceResponse):void} cb
     * @public
     */
    ExposeService(req, cb) {
        const resp = new ExposeServiceResponse();
        this.request("ExposeService", req, resp, cb);
    }
    /**
     * 删除任务
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        const resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }
    /**
     * 启用资源组的伸缩组
     * @param {EnableRsgAsGroupRequest} req
     * @param {function(string, EnableRsgAsGroupResponse):void} cb
     * @public
     */
    EnableRsgAsGroup(req, cb) {
        const resp = new EnableRsgAsGroupResponse();
        this.request("EnableRsgAsGroup", req, resp, cb);
    }
    /**
     * 描述服务配置
     * @param {DescribeServiceConfigsRequest} req
     * @param {function(string, DescribeServiceConfigsResponse):void} cb
     * @public
     */
    DescribeServiceConfigs(req, cb) {
        const resp = new DescribeServiceConfigsResponse();
        this.request("DescribeServiceConfigs", req, resp, cb);
    }
    /**
     * 查询资源组的伸缩组信息
     * @param {DescribeRsgAsGroupsRequest} req
     * @param {function(string, DescribeRsgAsGroupsResponse):void} cb
     * @public
     */
    DescribeRsgAsGroups(req, cb) {
        const resp = new DescribeRsgAsGroupsResponse();
        this.request("DescribeRsgAsGroups", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tiems_client.js.map