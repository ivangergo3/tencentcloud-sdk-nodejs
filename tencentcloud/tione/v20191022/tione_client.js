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
const OutputDataConfig = models_1.Models.OutputDataConfig;
const StopTrainingJobResponse = models_1.Models.StopTrainingJobResponse;
const BillingLabel = models_1.Models.BillingLabel;
const EnvConfig = models_1.Models.EnvConfig;
const CreateNotebookInstanceRequest = models_1.Models.CreateNotebookInstanceRequest;
const DescribeNotebookSummaryRequest = models_1.Models.DescribeNotebookSummaryRequest;
const SecondaryStatusTransition = models_1.Models.SecondaryStatusTransition;
const DescribeNotebookInstanceRequest = models_1.Models.DescribeNotebookInstanceRequest;
const DeleteNotebookInstanceResponse = models_1.Models.DeleteNotebookInstanceResponse;
const NotebookInstanceSummary = models_1.Models.NotebookInstanceSummary;
const GitConfig = models_1.Models.GitConfig;
const CodeRepoSummary = models_1.Models.CodeRepoSummary;
const ResourceConfig = models_1.Models.ResourceConfig;
const DeleteNotebookLifecycleScriptResponse = models_1.Models.DeleteNotebookLifecycleScriptResponse;
const DescribeNotebookLifecycleScriptsRequest = models_1.Models.DescribeNotebookLifecycleScriptsRequest;
const GitSecret = models_1.Models.GitSecret;
const DeleteCodeRepositoryRequest = models_1.Models.DeleteCodeRepositoryRequest;
const DescribeCodeRepositoryResponse = models_1.Models.DescribeCodeRepositoryResponse;
const InputDataConfig = models_1.Models.InputDataConfig;
const StartNotebookInstanceResponse = models_1.Models.StartNotebookInstanceResponse;
const UpdateCodeRepositoryResponse = models_1.Models.UpdateCodeRepositoryResponse;
const CreateNotebookInstanceResponse = models_1.Models.CreateNotebookInstanceResponse;
const FileSystemDataSource = models_1.Models.FileSystemDataSource;
const NotebookLifecycleScriptsSummary = models_1.Models.NotebookLifecycleScriptsSummary;
const StopTrainingJobRequest = models_1.Models.StopTrainingJobRequest;
const UpdateNotebookInstanceResponse = models_1.Models.UpdateNotebookInstanceResponse;
const ClsConfig = models_1.Models.ClsConfig;
const UpdateNotebookLifecycleScriptRequest = models_1.Models.UpdateNotebookLifecycleScriptRequest;
const UpdateNotebookInstanceRequest = models_1.Models.UpdateNotebookInstanceRequest;
const CreatePresignedNotebookInstanceUrlRequest = models_1.Models.CreatePresignedNotebookInstanceUrlRequest;
const CreateNotebookLifecycleScriptRequest = models_1.Models.CreateNotebookLifecycleScriptRequest;
const CreateCodeRepositoryRequest = models_1.Models.CreateCodeRepositoryRequest;
const DescribeNotebookInstancesRequest = models_1.Models.DescribeNotebookInstancesRequest;
const DescribeTrainingJobsResponse = models_1.Models.DescribeTrainingJobsResponse;
const StoppingCondition = models_1.Models.StoppingCondition;
const DescribeCodeRepositoriesResponse = models_1.Models.DescribeCodeRepositoriesResponse;
const DescribeNotebookInstancesResponse = models_1.Models.DescribeNotebookInstancesResponse;
const DescribeCodeRepositoryRequest = models_1.Models.DescribeCodeRepositoryRequest;
const CreateTrainingJobResponse = models_1.Models.CreateTrainingJobResponse;
const DescribeNotebookInstanceResponse = models_1.Models.DescribeNotebookInstanceResponse;
const DescribeTrainingJobRequest = models_1.Models.DescribeTrainingJobRequest;
const TrainingJobSummary = models_1.Models.TrainingJobSummary;
const AlgorithmSpecification = models_1.Models.AlgorithmSpecification;
const CosDataSource = models_1.Models.CosDataSource;
const DescribeNotebookLifecycleScriptsResponse = models_1.Models.DescribeNotebookLifecycleScriptsResponse;
const DescribeNotebookSummaryResponse = models_1.Models.DescribeNotebookSummaryResponse;
const Filter = models_1.Models.Filter;
const StopNotebookInstanceRequest = models_1.Models.StopNotebookInstanceRequest;
const DeleteNotebookLifecycleScriptRequest = models_1.Models.DeleteNotebookLifecycleScriptRequest;
const DescribeNotebookLifecycleScriptResponse = models_1.Models.DescribeNotebookLifecycleScriptResponse;
const DescribeTrainingJobResponse = models_1.Models.DescribeTrainingJobResponse;
const StopNotebookInstanceResponse = models_1.Models.StopNotebookInstanceResponse;
const UpdateCodeRepositoryRequest = models_1.Models.UpdateCodeRepositoryRequest;
const CreateTrainingJobRequest = models_1.Models.CreateTrainingJobRequest;
const DeleteNotebookInstanceRequest = models_1.Models.DeleteNotebookInstanceRequest;
const DescribeNotebookLifecycleScriptRequest = models_1.Models.DescribeNotebookLifecycleScriptRequest;
const VpcConfig = models_1.Models.VpcConfig;
const CreateNotebookLifecycleScriptResponse = models_1.Models.CreateNotebookLifecycleScriptResponse;
const CreatePresignedNotebookInstanceUrlResponse = models_1.Models.CreatePresignedNotebookInstanceUrlResponse;
const UpdateNotebookLifecycleScriptResponse = models_1.Models.UpdateNotebookLifecycleScriptResponse;
const DescribeTrainingJobsRequest = models_1.Models.DescribeTrainingJobsRequest;
const StartNotebookInstanceRequest = models_1.Models.StartNotebookInstanceRequest;
const CreateCodeRepositoryResponse = models_1.Models.CreateCodeRepositoryResponse;
const DescribeCodeRepositoriesRequest = models_1.Models.DescribeCodeRepositoriesRequest;
const DataSource = models_1.Models.DataSource;
const ModelArtifacts = models_1.Models.ModelArtifacts;
const DeleteCodeRepositoryResponse = models_1.Models.DeleteCodeRepositoryResponse;
/**
 * tione client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tione.tencentcloudapi.com", "2019-10-22", credential, region, profile);
    }
    /**
     * 更新Notebook实例
     * @param {UpdateNotebookInstanceRequest} req
     * @param {function(string, UpdateNotebookInstanceResponse):void} cb
     * @public
     */
    UpdateNotebookInstance(req, cb) {
        const resp = new UpdateNotebookInstanceResponse();
        this.request("UpdateNotebookInstance", req, resp, cb);
    }
    /**
     * 查看notebook生命周期脚本列表
     * @param {DescribeNotebookLifecycleScriptsRequest} req
     * @param {function(string, DescribeNotebookLifecycleScriptsResponse):void} cb
     * @public
     */
    DescribeNotebookLifecycleScripts(req, cb) {
        const resp = new DescribeNotebookLifecycleScriptsResponse();
        this.request("DescribeNotebookLifecycleScripts", req, resp, cb);
    }
    /**
     * 启动Notebook实例
     * @param {StartNotebookInstanceRequest} req
     * @param {function(string, StartNotebookInstanceResponse):void} cb
     * @public
     */
    StartNotebookInstance(req, cb) {
        const resp = new StartNotebookInstanceResponse();
        this.request("StartNotebookInstance", req, resp, cb);
    }
    /**
     * 删除notebook实例
     * @param {DeleteNotebookInstanceRequest} req
     * @param {function(string, DeleteNotebookInstanceResponse):void} cb
     * @public
     */
    DeleteNotebookInstance(req, cb) {
        const resp = new DeleteNotebookInstanceResponse();
        this.request("DeleteNotebookInstance", req, resp, cb);
    }
    /**
     * 查看notebook生命周期脚本详情
     * @param {DescribeNotebookLifecycleScriptRequest} req
     * @param {function(string, DescribeNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    DescribeNotebookLifecycleScript(req, cb) {
        const resp = new DescribeNotebookLifecycleScriptResponse();
        this.request("DescribeNotebookLifecycleScript", req, resp, cb);
    }
    /**
     * 创建Notebook授权Url
     * @param {CreatePresignedNotebookInstanceUrlRequest} req
     * @param {function(string, CreatePresignedNotebookInstanceUrlResponse):void} cb
     * @public
     */
    CreatePresignedNotebookInstanceUrl(req, cb) {
        const resp = new CreatePresignedNotebookInstanceUrlResponse();
        this.request("CreatePresignedNotebookInstanceUrl", req, resp, cb);
    }
    /**
     * 创建存储库
     * @param {CreateCodeRepositoryRequest} req
     * @param {function(string, CreateCodeRepositoryResponse):void} cb
     * @public
     */
    CreateCodeRepository(req, cb) {
        const resp = new CreateCodeRepositoryResponse();
        this.request("CreateCodeRepository", req, resp, cb);
    }
    /**
     * 更新notebook生命周期脚本
     * @param {UpdateNotebookLifecycleScriptRequest} req
     * @param {function(string, UpdateNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    UpdateNotebookLifecycleScript(req, cb) {
        const resp = new UpdateNotebookLifecycleScriptResponse();
        this.request("UpdateNotebookLifecycleScript", req, resp, cb);
    }
    /**
     * 查询训练任务
     * @param {DescribeTrainingJobRequest} req
     * @param {function(string, DescribeTrainingJobResponse):void} cb
     * @public
     */
    DescribeTrainingJob(req, cb) {
        const resp = new DescribeTrainingJobResponse();
        this.request("DescribeTrainingJob", req, resp, cb);
    }
    /**
     * 停止Notebook实例
     * @param {StopNotebookInstanceRequest} req
     * @param {function(string, StopNotebookInstanceResponse):void} cb
     * @public
     */
    StopNotebookInstance(req, cb) {
        const resp = new StopNotebookInstanceResponse();
        this.request("StopNotebookInstance", req, resp, cb);
    }
    /**
     * 创建Notebook实例
     * @param {CreateNotebookInstanceRequest} req
     * @param {function(string, CreateNotebookInstanceResponse):void} cb
     * @public
     */
    CreateNotebookInstance(req, cb) {
        const resp = new CreateNotebookInstanceResponse();
        this.request("CreateNotebookInstance", req, resp, cb);
    }
    /**
     * 查询存储库详情
     * @param {DescribeCodeRepositoryRequest} req
     * @param {function(string, DescribeCodeRepositoryResponse):void} cb
     * @public
     */
    DescribeCodeRepository(req, cb) {
        const resp = new DescribeCodeRepositoryResponse();
        this.request("DescribeCodeRepository", req, resp, cb);
    }
    /**
     * 查询训练任务列表
     * @param {DescribeTrainingJobsRequest} req
     * @param {function(string, DescribeTrainingJobsResponse):void} cb
     * @public
     */
    DescribeTrainingJobs(req, cb) {
        const resp = new DescribeTrainingJobsResponse();
        this.request("DescribeTrainingJobs", req, resp, cb);
    }
    /**
     * 删除存储库
     * @param {DeleteCodeRepositoryRequest} req
     * @param {function(string, DeleteCodeRepositoryResponse):void} cb
     * @public
     */
    DeleteCodeRepository(req, cb) {
        const resp = new DeleteCodeRepositoryResponse();
        this.request("DeleteCodeRepository", req, resp, cb);
    }
    /**
     * 查询Notebook概览数据
     * @param {DescribeNotebookSummaryRequest} req
     * @param {function(string, DescribeNotebookSummaryResponse):void} cb
     * @public
     */
    DescribeNotebookSummary(req, cb) {
        const resp = new DescribeNotebookSummaryResponse();
        this.request("DescribeNotebookSummary", req, resp, cb);
    }
    /**
     * 创建Notebook生命周期脚本
     * @param {CreateNotebookLifecycleScriptRequest} req
     * @param {function(string, CreateNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    CreateNotebookLifecycleScript(req, cb) {
        const resp = new CreateNotebookLifecycleScriptResponse();
        this.request("CreateNotebookLifecycleScript", req, resp, cb);
    }
    /**
     * 删除Notebook生命周期脚本
     * @param {DeleteNotebookLifecycleScriptRequest} req
     * @param {function(string, DeleteNotebookLifecycleScriptResponse):void} cb
     * @public
     */
    DeleteNotebookLifecycleScript(req, cb) {
        const resp = new DeleteNotebookLifecycleScriptResponse();
        this.request("DeleteNotebookLifecycleScript", req, resp, cb);
    }
    /**
     * 查询Notebook实例详情
     * @param {DescribeNotebookInstanceRequest} req
     * @param {function(string, DescribeNotebookInstanceResponse):void} cb
     * @public
     */
    DescribeNotebookInstance(req, cb) {
        const resp = new DescribeNotebookInstanceResponse();
        this.request("DescribeNotebookInstance", req, resp, cb);
    }
    /**
     * 更新存储库
     * @param {UpdateCodeRepositoryRequest} req
     * @param {function(string, UpdateCodeRepositoryResponse):void} cb
     * @public
     */
    UpdateCodeRepository(req, cb) {
        const resp = new UpdateCodeRepositoryResponse();
        this.request("UpdateCodeRepository", req, resp, cb);
    }
    /**
     * 查询Notebook实例列表
     * @param {DescribeNotebookInstancesRequest} req
     * @param {function(string, DescribeNotebookInstancesResponse):void} cb
     * @public
     */
    DescribeNotebookInstances(req, cb) {
        const resp = new DescribeNotebookInstancesResponse();
        this.request("DescribeNotebookInstances", req, resp, cb);
    }
    /**
     * 创建训练任务
     * @param {CreateTrainingJobRequest} req
     * @param {function(string, CreateTrainingJobResponse):void} cb
     * @public
     */
    CreateTrainingJob(req, cb) {
        const resp = new CreateTrainingJobResponse();
        this.request("CreateTrainingJob", req, resp, cb);
    }
    /**
     * 查询存储库列表
     * @param {DescribeCodeRepositoriesRequest} req
     * @param {function(string, DescribeCodeRepositoriesResponse):void} cb
     * @public
     */
    DescribeCodeRepositories(req, cb) {
        const resp = new DescribeCodeRepositoriesResponse();
        this.request("DescribeCodeRepositories", req, resp, cb);
    }
    /**
     * 停止训练任务
     * @param {StopTrainingJobRequest} req
     * @param {function(string, StopTrainingJobResponse):void} cb
     * @public
     */
    StopTrainingJob(req, cb) {
        const resp = new StopTrainingJobResponse();
        this.request("StopTrainingJob", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tione_client.js.map