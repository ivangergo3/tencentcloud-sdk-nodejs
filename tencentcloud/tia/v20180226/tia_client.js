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
const DeleteModelRequest = models_1.Models.DeleteModelRequest;
const Log = models_1.Models.Log;
const DeleteJobResponse = models_1.Models.DeleteJobResponse;
const CreateJobRequest = models_1.Models.CreateJobRequest;
const CreateJobResponse = models_1.Models.CreateJobResponse;
const InstallAgentResponse = models_1.Models.InstallAgentResponse;
const DescribeModelResponse = models_1.Models.DescribeModelResponse;
const DescribeModelRequest = models_1.Models.DescribeModelRequest;
const DescribeJobRequest = models_1.Models.DescribeJobRequest;
const ListJobsRequest = models_1.Models.ListJobsRequest;
const Job = models_1.Models.Job;
const CreateModelResponse = models_1.Models.CreateModelResponse;
const ListModelsRequest = models_1.Models.ListModelsRequest;
const QueryLogsResponse = models_1.Models.QueryLogsResponse;
const InstallAgentRequest = models_1.Models.InstallAgentRequest;
const ListJobsResponse = models_1.Models.ListJobsResponse;
const QueryLogsRequest = models_1.Models.QueryLogsRequest;
const Model = models_1.Models.Model;
const DeleteModelResponse = models_1.Models.DeleteModelResponse;
const ListModelsResponse = models_1.Models.ListModelsResponse;
const DeleteJobRequest = models_1.Models.DeleteJobRequest;
const CreateModelRequest = models_1.Models.CreateModelRequest;
const DescribeJobResponse = models_1.Models.DescribeJobResponse;
/**
 * tia client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tia.tencentcloudapi.com", "2018-02-26", credential, region, profile);
    }
    /**
     * 部署模型，用以对外提供服务。有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     * @param {CreateModelRequest} req
     * @param {function(string, CreateModelResponse):void} cb
     * @public
     */
    CreateModel(req, cb) {
        const resp = new CreateModelResponse();
        this.request("CreateModel", req, resp, cb);
    }
    /**
     * 列举训练任务
     * @param {ListJobsRequest} req
     * @param {function(string, ListJobsResponse):void} cb
     * @public
     */
    ListJobs(req, cb) {
        const resp = new ListJobsResponse();
        this.request("ListJobs", req, resp, cb);
    }
    /**
     * 创建训练任务
     * @param {CreateJobRequest} req
     * @param {function(string, CreateJobResponse):void} cb
     * @public
     */
    CreateJob(req, cb) {
        const resp = new CreateJobResponse();
        this.request("CreateJob", req, resp, cb);
    }
    /**
     * 描述已经部署的某个模型。而模型部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     * @param {DescribeModelRequest} req
     * @param {function(string, DescribeModelResponse):void} cb
     * @public
     */
    DescribeModel(req, cb) {
        const resp = new DescribeModelResponse();
        this.request("DescribeModel", req, resp, cb);
    }
    /**
     * 查询 TI-A 训练任务的日志
     * @param {QueryLogsRequest} req
     * @param {function(string, QueryLogsResponse):void} cb
     * @public
     */
    QueryLogs(req, cb) {
        const resp = new QueryLogsResponse();
        this.request("QueryLogs", req, resp, cb);
    }
    /**
     * 用以列举已经部署的模型。而部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。不同部署模式下的模型分开列出。
     * @param {ListModelsRequest} req
     * @param {function(string, ListModelsResponse):void} cb
     * @public
     */
    ListModels(req, cb) {
        const resp = new ListModelsResponse();
        this.request("ListModels", req, resp, cb);
    }
    /**
     * 删除训练任务
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        const resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }
    /**
     * 删除指定的部署模型。模型有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     * @param {DeleteModelRequest} req
     * @param {function(string, DeleteModelResponse):void} cb
     * @public
     */
    DeleteModel(req, cb) {
        const resp = new DeleteModelResponse();
        this.request("DeleteModel", req, resp, cb);
    }
    /**
     * 获取训练任务详情
     * @param {DescribeJobRequest} req
     * @param {function(string, DescribeJobResponse):void} cb
     * @public
     */
    DescribeJob(req, cb) {
        const resp = new DescribeJobResponse();
        this.request("DescribeJob", req, resp, cb);
    }
    /**
     * 安装agent
     * @param {InstallAgentRequest} req
     * @param {function(string, InstallAgentResponse):void} cb
     * @public
     */
    InstallAgent(req, cb) {
        const resp = new InstallAgentResponse();
        this.request("InstallAgent", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tia_client.js.map