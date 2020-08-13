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
const EventVar = models_1.Models.EventVar;
const AnonymousComputeEnv = models_1.Models.AnonymousComputeEnv;
const DeleteComputeEnvResponse = models_1.Models.DeleteComputeEnvResponse;
const SubmitJobRequest = models_1.Models.SubmitJobRequest;
const ComputeEnvData = models_1.Models.ComputeEnvData;
const Authentication = models_1.Models.Authentication;
const RetryJobsResponse = models_1.Models.RetryJobsResponse;
const TerminateComputeNodeRequest = models_1.Models.TerminateComputeNodeRequest;
const DescribeTaskLogsRequest = models_1.Models.DescribeTaskLogsRequest;
const AgentRunningMode = models_1.Models.AgentRunningMode;
const EnvData = models_1.Models.EnvData;
const DescribeTaskTemplatesRequest = models_1.Models.DescribeTaskTemplatesRequest;
const Notification = models_1.Models.Notification;
const SystemDisk = models_1.Models.SystemDisk;
const Task = models_1.Models.Task;
const InstanceTypeConfig = models_1.Models.InstanceTypeConfig;
const LoginSettings = models_1.Models.LoginSettings;
const TerminateComputeNodesResponse = models_1.Models.TerminateComputeNodesResponse;
const DescribeComputeEnvActivitiesResponse = models_1.Models.DescribeComputeEnvActivitiesResponse;
const TaskInstanceMetrics = models_1.Models.TaskInstanceMetrics;
const TaskInstanceLog = models_1.Models.TaskInstanceLog;
const MountDataDisk = models_1.Models.MountDataDisk;
const TaskView = models_1.Models.TaskView;
const Externals = models_1.Models.Externals;
const OsInfo = models_1.Models.OsInfo;
const DescribeComputeEnvResponse = models_1.Models.DescribeComputeEnvResponse;
const DescribeCpmOsInfoResponse = models_1.Models.DescribeCpmOsInfoResponse;
const TerminateJobRequest = models_1.Models.TerminateJobRequest;
const DetachInstancesResponse = models_1.Models.DetachInstancesResponse;
const Application = models_1.Models.Application;
const EnvDataCpm = models_1.Models.EnvDataCpm;
const OutputMappingConfig = models_1.Models.OutputMappingConfig;
const AttachInstancesResponse = models_1.Models.AttachInstancesResponse;
const ComputeNodeMetrics = models_1.Models.ComputeNodeMetrics;
const TaskMetrics = models_1.Models.TaskMetrics;
const TerminateComputeNodesRequest = models_1.Models.TerminateComputeNodesRequest;
const LocalDiskType = models_1.Models.LocalDiskType;
const DescribeComputeEnvActivitiesRequest = models_1.Models.DescribeComputeEnvActivitiesRequest;
const CreateTaskTemplateRequest = models_1.Models.CreateTaskTemplateRequest;
const Job = models_1.Models.Job;
const DeleteComputeEnvRequest = models_1.Models.DeleteComputeEnvRequest;
const CreateComputeEnvRequest = models_1.Models.CreateComputeEnvRequest;
const DescribeComputeEnvCreateInfoResponse = models_1.Models.DescribeComputeEnvCreateInfoResponse;
const TerminateJobResponse = models_1.Models.TerminateJobResponse;
const ComputeEnvCreateInfo = models_1.Models.ComputeEnvCreateInfo;
const DescribeComputeEnvCreateInfosRequest = models_1.Models.DescribeComputeEnvCreateInfosRequest;
const DescribeComputeEnvRequest = models_1.Models.DescribeComputeEnvRequest;
const InstanceMarketOptionsRequest = models_1.Models.InstanceMarketOptionsRequest;
const DescribeTaskTemplatesResponse = models_1.Models.DescribeTaskTemplatesResponse;
const CreateCpmComputeEnvResponse = models_1.Models.CreateCpmComputeEnvResponse;
const DeleteJobRequest = models_1.Models.DeleteJobRequest;
const CreateCpmComputeEnvRequest = models_1.Models.CreateCpmComputeEnvRequest;
const DescribeTaskLogsResponse = models_1.Models.DescribeTaskLogsResponse;
const NamedCpmComputeEnv = models_1.Models.NamedCpmComputeEnv;
const DeleteTaskTemplatesRequest = models_1.Models.DeleteTaskTemplatesRequest;
const DescribeJobResponse = models_1.Models.DescribeJobResponse;
const DescribeComputeEnvCreateInfoRequest = models_1.Models.DescribeComputeEnvCreateInfoRequest;
const ModifyTaskTemplateRequest = models_1.Models.ModifyTaskTemplateRequest;
const DescribeCpmOsInfoRequest = models_1.Models.DescribeCpmOsInfoRequest;
const DataDisk = models_1.Models.DataDisk;
const NamedComputeEnv = models_1.Models.NamedComputeEnv;
const DeleteJobResponse = models_1.Models.DeleteJobResponse;
const EventConfig = models_1.Models.EventConfig;
const SpotMarketOptions = models_1.Models.SpotMarketOptions;
const CpmVirtualPrivateCloud = models_1.Models.CpmVirtualPrivateCloud;
const DetachInstancesRequest = models_1.Models.DetachInstancesRequest;
const Instance = models_1.Models.Instance;
const OutputMapping = models_1.Models.OutputMapping;
const EnhancedService = models_1.Models.EnhancedService;
const DescribeJobSubmitInfoResponse = models_1.Models.DescribeJobSubmitInfoResponse;
const DescribeComputeEnvCreateInfosResponse = models_1.Models.DescribeComputeEnvCreateInfosResponse;
const RunSecurityServiceEnabled = models_1.Models.RunSecurityServiceEnabled;
const DescribeJobRequest = models_1.Models.DescribeJobRequest;
const RedirectInfo = models_1.Models.RedirectInfo;
const DescribeInstanceCategoriesResponse = models_1.Models.DescribeInstanceCategoriesResponse;
const ModifyTaskTemplateResponse = models_1.Models.ModifyTaskTemplateResponse;
const SubmitJobResponse = models_1.Models.SubmitJobResponse;
const InputMapping = models_1.Models.InputMapping;
const RedirectLocalInfo = models_1.Models.RedirectLocalInfo;
const DescribeJobSubmitInfoRequest = models_1.Models.DescribeJobSubmitInfoRequest;
const Dependence = models_1.Models.Dependence;
const Filter = models_1.Models.Filter;
const CreateComputeEnvResponse = models_1.Models.CreateComputeEnvResponse;
const Docker = models_1.Models.Docker;
const ModifyComputeEnvResponse = models_1.Models.ModifyComputeEnvResponse;
const Placement = models_1.Models.Placement;
const ComputeNode = models_1.Models.ComputeNode;
const ItemPrice = models_1.Models.ItemPrice;
const InstanceTypeQuotaItem = models_1.Models.InstanceTypeQuotaItem;
const CreateTaskTemplateResponse = models_1.Models.CreateTaskTemplateResponse;
const StorageBlock = models_1.Models.StorageBlock;
const DescribeJobsRequest = models_1.Models.DescribeJobsRequest;
const TaskTemplateView = models_1.Models.TaskTemplateView;
const InstanceTypeOptions = models_1.Models.InstanceTypeOptions;
const DeleteTaskTemplatesResponse = models_1.Models.DeleteTaskTemplatesResponse;
const DescribeCvmZoneInstanceConfigInfosRequest = models_1.Models.DescribeCvmZoneInstanceConfigInfosRequest;
const TerminateTaskInstanceRequest = models_1.Models.TerminateTaskInstanceRequest;
const TerminateTaskInstanceResponse = models_1.Models.TerminateTaskInstanceResponse;
const RetryJobsRequest = models_1.Models.RetryJobsRequest;
const TaskInstanceView = models_1.Models.TaskInstanceView;
const DescribeAvailableCvmInstanceTypesResponse = models_1.Models.DescribeAvailableCvmInstanceTypesResponse;
const DescribeTaskResponse = models_1.Models.DescribeTaskResponse;
const InstanceCategoryItem = models_1.Models.InstanceCategoryItem;
const ComputeEnvView = models_1.Models.ComputeEnvView;
const DescribeComputeEnvsResponse = models_1.Models.DescribeComputeEnvsResponse;
const DescribeTaskRequest = models_1.Models.DescribeTaskRequest;
const AttachInstancesRequest = models_1.Models.AttachInstancesRequest;
const DescribeComputeEnvsRequest = models_1.Models.DescribeComputeEnvsRequest;
const DescribeCvmZoneInstanceConfigInfosResponse = models_1.Models.DescribeCvmZoneInstanceConfigInfosResponse;
const DescribeJobsResponse = models_1.Models.DescribeJobsResponse;
const Activity = models_1.Models.Activity;
const RunMonitorServiceEnabled = models_1.Models.RunMonitorServiceEnabled;
const TerminateComputeNodeResponse = models_1.Models.TerminateComputeNodeResponse;
const VirtualPrivateCloud = models_1.Models.VirtualPrivateCloud;
const DescribeAvailableCvmInstanceTypesRequest = models_1.Models.DescribeAvailableCvmInstanceTypesRequest;
const DescribeInstanceCategoriesRequest = models_1.Models.DescribeInstanceCategoriesRequest;
const ModifyComputeEnvRequest = models_1.Models.ModifyComputeEnvRequest;
const InternetAccessible = models_1.Models.InternetAccessible;
const JobView = models_1.Models.JobView;
const EnvVar = models_1.Models.EnvVar;
/**
 * batch client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("batch.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    /**
     * 用于查询计算环境的详细信息
     * @param {DescribeComputeEnvRequest} req
     * @param {function(string, DescribeComputeEnvResponse):void} cb
     * @public
     */
    DescribeComputeEnv(req, cb) {
        const resp = new DescribeComputeEnvResponse();
        this.request("DescribeComputeEnv", req, resp, cb);
    }
    /**
     * 用于创建任务模板
     * @param {CreateTaskTemplateRequest} req
     * @param {function(string, CreateTaskTemplateResponse):void} cb
     * @public
     */
    CreateTaskTemplate(req, cb) {
        const resp = new CreateTaskTemplateResponse();
        this.request("CreateTaskTemplate", req, resp, cb);
    }
    /**
     * 创建黑石计算环境
     * @param {CreateCpmComputeEnvRequest} req
     * @param {function(string, CreateCpmComputeEnvResponse):void} cb
     * @public
     */
    CreateCpmComputeEnv(req, cb) {
        const resp = new CreateCpmComputeEnvResponse();
        this.request("CreateCpmComputeEnv", req, resp, cb);
    }
    /**
     * 用于销毁计算节点。
对于状态为CREATED、CREATION_FAILED、RUNNING和ABNORMAL的节点，允许销毁处理。
     * @param {TerminateComputeNodeRequest} req
     * @param {function(string, TerminateComputeNodeResponse):void} cb
     * @public
     */
    TerminateComputeNode(req, cb) {
        const resp = new TerminateComputeNodeResponse();
        this.request("TerminateComputeNode", req, resp, cb);
    }
    /**
     * 用于查询若干个作业的概览信息
     * @param {DescribeJobsRequest} req
     * @param {function(string, DescribeJobsResponse):void} cb
     * @public
     */
    DescribeJobs(req, cb) {
        const resp = new DescribeJobsResponse();
        this.request("DescribeJobs", req, resp, cb);
    }
    /**
     * 查看可用的CVM机型配置信息
     * @param {DescribeAvailableCvmInstanceTypesRequest} req
     * @param {function(string, DescribeAvailableCvmInstanceTypesResponse):void} cb
     * @public
     */
    DescribeAvailableCvmInstanceTypes(req, cb) {
        const resp = new DescribeAvailableCvmInstanceTypesResponse();
        this.request("DescribeAvailableCvmInstanceTypes", req, resp, cb);
    }
    /**
     * 此接口可将已存在实例添加到计算环境中。
实例需要满足如下条件：<br/>
1.实例不在批量计算系统中。<br/>
2.实例状态要求处于运行中。<br/>
3.支持预付费实例，按小时后付费实例，专享子机实例。不支持竞价实例。<br/>

此接口会将加入到计算环境中的实例重设UserData和重装操作系统。
     * @param {AttachInstancesRequest} req
     * @param {function(string, AttachInstancesResponse):void} cb
     * @public
     */
    AttachInstances(req, cb) {
        const resp = new AttachInstancesResponse();
        this.request("AttachInstances", req, resp, cb);
    }
    /**
     * 用于创建计算环境
     * @param {CreateComputeEnvRequest} req
     * @param {function(string, CreateComputeEnvResponse):void} cb
     * @public
     */
    CreateComputeEnv(req, cb) {
        const resp = new CreateComputeEnvResponse();
        this.request("CreateComputeEnv", req, resp, cb);
    }
    /**
     * 用于删除计算环境
     * @param {DeleteComputeEnvRequest} req
     * @param {function(string, DeleteComputeEnvResponse):void} cb
     * @public
     */
    DeleteComputeEnv(req, cb) {
        const resp = new DeleteComputeEnvResponse();
        this.request("DeleteComputeEnv", req, resp, cb);
    }
    /**
     * 将添加到计算环境中的实例从计算环境中移出。若是由批量计算自动创建的计算节点实例则不允许移出。
     * @param {DetachInstancesRequest} req
     * @param {function(string, DetachInstancesResponse):void} cb
     * @public
     */
    DetachInstances(req, cb) {
        const resp = new DetachInstancesResponse();
        this.request("DetachInstances", req, resp, cb);
    }
    /**
     * 用于获取任务多个实例标准输出和标准错误日志。
     * @param {DescribeTaskLogsRequest} req
     * @param {function(string, DescribeTaskLogsResponse):void} cb
     * @public
     */
    DescribeTaskLogs(req, cb) {
        const resp = new DescribeTaskLogsResponse();
        this.request("DescribeTaskLogs", req, resp, cb);
    }
    /**
     * 用于终止作业。
当作业处于“SUBMITTED”状态时，禁止终止操作；当作业处于“SUCCEED”状态时，终止操作不会生效。
终止作业是一个异步过程。整个终止过程的耗时和任务总数成正比。终止的效果相当于所含的所有任务实例进行TerminateTaskInstance操作。具体效果和用法可参考TerminateTaskInstance。
     * @param {TerminateJobRequest} req
     * @param {function(string, TerminateJobResponse):void} cb
     * @public
     */
    TerminateJob(req, cb) {
        const resp = new TerminateJobResponse();
        this.request("TerminateJob", req, resp, cb);
    }
    /**
     * 用于查询指定任务的详细信息，包括任务内部的任务实例信息。
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        const resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }
    /**
     * 获取批量计算可用区机型配置信息
     * @param {DescribeCvmZoneInstanceConfigInfosRequest} req
     * @param {function(string, DescribeCvmZoneInstanceConfigInfosResponse):void} cb
     * @public
     */
    DescribeCvmZoneInstanceConfigInfos(req, cb) {
        const resp = new DescribeCvmZoneInstanceConfigInfosResponse();
        this.request("DescribeCvmZoneInstanceConfigInfos", req, resp, cb);
    }
    /**
     * 用于查看一个作业的详细信息，包括内部任务（Task）和依赖（Dependence）信息。
     * @param {DescribeJobRequest} req
     * @param {function(string, DescribeJobResponse):void} cb
     * @public
     */
    DescribeJob(req, cb) {
        const resp = new DescribeJobResponse();
        this.request("DescribeJob", req, resp, cb);
    }
    /**
     * 用于提交一个作业
     * @param {SubmitJobRequest} req
     * @param {function(string, SubmitJobResponse):void} cb
     * @public
     */
    SubmitJob(req, cb) {
        const resp = new SubmitJobResponse();
        this.request("SubmitJob", req, resp, cb);
    }
    /**
     * 用于批量销毁计算节点，不允许重复销毁同一个节点。
     * @param {TerminateComputeNodesRequest} req
     * @param {function(string, TerminateComputeNodesResponse):void} cb
     * @public
     */
    TerminateComputeNodes(req, cb) {
        const resp = new TerminateComputeNodesResponse();
        this.request("TerminateComputeNodes", req, resp, cb);
    }
    /**
     * 用于查询任务模板信息
     * @param {DescribeTaskTemplatesRequest} req
     * @param {function(string, DescribeTaskTemplatesResponse):void} cb
     * @public
     */
    DescribeTaskTemplates(req, cb) {
        const resp = new DescribeTaskTemplatesResponse();
        this.request("DescribeTaskTemplates", req, resp, cb);
    }
    /**
     * 目前对CVM现有实例族分类，每一类包含若干实例族。该接口用于查询实例分类信息。
     * @param {DescribeInstanceCategoriesRequest} req
     * @param {function(string, DescribeInstanceCategoriesResponse):void} cb
     * @public
     */
    DescribeInstanceCategories(req, cb) {
        const resp = new DescribeInstanceCategoriesResponse();
        this.request("DescribeInstanceCategories", req, resp, cb);
    }
    /**
     * 用于删除任务模板信息
     * @param {DeleteTaskTemplatesRequest} req
     * @param {function(string, DeleteTaskTemplatesResponse):void} cb
     * @public
     */
    DeleteTaskTemplates(req, cb) {
        const resp = new DeleteTaskTemplatesResponse();
        this.request("DeleteTaskTemplates", req, resp, cb);
    }
    /**
     * 用于终止任务实例。
对于状态已经为“SUCCEED”和“FAILED”的任务实例，不做处理。
对于状态为“SUBMITTED”、“PENDING”、“RUNNABLE”的任务实例，状态将置为“FAILED”状态。
对于状态为“STARTING”、“RUNNING”、“FAILED_INTERRUPTED”的任务实例，分区两种情况：如果未显示指定计算环境，会先销毁CVM服务器，然后将状态置为“FAILED”，具有一定耗时；如果指定了计算环境EnvId，任务实例状态置为“FAILED”，并重启执行该任务的CVM服务器，具有一定的耗时。
对于状态为“FAILED_INTERRUPTED”的任务实例，终止操作实际成功之后，相关资源和配额才会释放。
     * @param {TerminateTaskInstanceRequest} req
     * @param {function(string, TerminateTaskInstanceResponse):void} cb
     * @public
     */
    TerminateTaskInstance(req, cb) {
        const resp = new TerminateTaskInstanceResponse();
        this.request("TerminateTaskInstance", req, resp, cb);
    }
    /**
     * 用于修改计算环境属性
     * @param {ModifyComputeEnvRequest} req
     * @param {function(string, ModifyComputeEnvResponse):void} cb
     * @public
     */
    ModifyComputeEnv(req, cb) {
        const resp = new ModifyComputeEnvResponse();
        this.request("ModifyComputeEnv", req, resp, cb);
    }
    /**
     * 用于查询指定作业的提交信息，其返回内容包括 JobId 和 SubmitJob 接口中作为输入参数的作业提交信息
     * @param {DescribeJobSubmitInfoRequest} req
     * @param {function(string, DescribeJobSubmitInfoResponse):void} cb
     * @public
     */
    DescribeJobSubmitInfo(req, cb) {
        const resp = new DescribeJobSubmitInfoResponse();
        this.request("DescribeJobSubmitInfo", req, resp, cb);
    }
    /**
     * 查看计算环境的创建信息。
     * @param {DescribeComputeEnvCreateInfoRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfoResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfo(req, cb) {
        const resp = new DescribeComputeEnvCreateInfoResponse();
        this.request("DescribeComputeEnvCreateInfo", req, resp, cb);
    }
    /**
     * 用于查询计算环境的活动信息
     * @param {DescribeComputeEnvActivitiesRequest} req
     * @param {function(string, DescribeComputeEnvActivitiesResponse):void} cb
     * @public
     */
    DescribeComputeEnvActivities(req, cb) {
        const resp = new DescribeComputeEnvActivitiesResponse();
        this.request("DescribeComputeEnvActivities", req, resp, cb);
    }
    /**
     * 用于查看计算环境创建信息列表，包括名称、描述、类型、环境参数、通知及期望节点数等。
     * @param {DescribeComputeEnvCreateInfosRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfosResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfos(req, cb) {
        const resp = new DescribeComputeEnvCreateInfosResponse();
        this.request("DescribeComputeEnvCreateInfos", req, resp, cb);
    }
    /**
     * 用于删除作业记录。
删除作业的效果相当于删除作业相关的所有信息。删除成功后，作业相关的所有信息都无法查询。
待删除的作业必须处于完结状态，且其内部包含的所有任务实例也必须处于完结状态，否则会禁止操作。完结状态，是指处于 SUCCEED 或 FAILED 状态。
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        const resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }
    /**
     * 创建黑石计算环境时，查询批量计算环境支持的黑石操作系统信息
     * @param {DescribeCpmOsInfoRequest} req
     * @param {function(string, DescribeCpmOsInfoResponse):void} cb
     * @public
     */
    DescribeCpmOsInfo(req, cb) {
        const resp = new DescribeCpmOsInfoResponse();
        this.request("DescribeCpmOsInfo", req, resp, cb);
    }
    /**
     * 用于查看计算环境列表
     * @param {DescribeComputeEnvsRequest} req
     * @param {function(string, DescribeComputeEnvsResponse):void} cb
     * @public
     */
    DescribeComputeEnvs(req, cb) {
        const resp = new DescribeComputeEnvsResponse();
        this.request("DescribeComputeEnvs", req, resp, cb);
    }
    /**
     * 用于修改任务模板
     * @param {ModifyTaskTemplateRequest} req
     * @param {function(string, ModifyTaskTemplateResponse):void} cb
     * @public
     */
    ModifyTaskTemplate(req, cb) {
        const resp = new ModifyTaskTemplateResponse();
        this.request("ModifyTaskTemplate", req, resp, cb);
    }
    /**
     * 用于重试作业中失败的任务实例。
当且仅当作业处于“FAILED”状态，支持重试操作。重试操作成功后，作业会按照“DAG”中指定的任务依赖关系，依次重试各个任务中失败的任务实例。任务实例的历史信息将被重置，如同首次运行一样，参与后续的调度和执行。
     * @param {RetryJobsRequest} req
     * @param {function(string, RetryJobsResponse):void} cb
     * @public
     */
    RetryJobs(req, cb) {
        const resp = new RetryJobsResponse();
        this.request("RetryJobs", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=batch_client.js.map