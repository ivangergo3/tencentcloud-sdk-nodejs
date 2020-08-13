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
const DstInfo = models_1.Models.DstInfo;
const SrcInfo = models_1.Models.SrcInfo;
const DescribeMigrationTaskRequest = models_1.Models.DescribeMigrationTaskRequest;
const TimeObj = models_1.Models.TimeObj;
const ModifyMigrationTaskBelongToProjectRequest = models_1.Models.ModifyMigrationTaskBelongToProjectRequest;
const TaskStatus = models_1.Models.TaskStatus;
const ModifyMigrationTaskStatusResponse = models_1.Models.ModifyMigrationTaskStatusResponse;
const ListMigrationTaskRequest = models_1.Models.ListMigrationTaskRequest;
const DeregisterMigrationTaskResponse = models_1.Models.DeregisterMigrationTaskResponse;
const Project = models_1.Models.Project;
const ModifyMigrationTaskBelongToProjectResponse = models_1.Models.ModifyMigrationTaskBelongToProjectResponse;
const ListMigrationProjectResponse = models_1.Models.ListMigrationProjectResponse;
const Task = models_1.Models.Task;
const RegisterMigrationTaskResponse = models_1.Models.RegisterMigrationTaskResponse;
const ModifyMigrationTaskStatusRequest = models_1.Models.ModifyMigrationTaskStatusRequest;
const ListMigrationProjectRequest = models_1.Models.ListMigrationProjectRequest;
const DeregisterMigrationTaskRequest = models_1.Models.DeregisterMigrationTaskRequest;
const ListMigrationTaskResponse = models_1.Models.ListMigrationTaskResponse;
const DescribeMigrationTaskResponse = models_1.Models.DescribeMigrationTaskResponse;
const RegisterMigrationTaskRequest = models_1.Models.RegisterMigrationTaskRequest;
/**
 * msp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("msp.tencentcloudapi.com", "2018-03-19", credential, region, profile);
    }
    /**
     * 获取迁移任务列表
     * @param {ListMigrationTaskRequest} req
     * @param {function(string, ListMigrationTaskResponse):void} cb
     * @public
     */
    ListMigrationTask(req, cb) {
        const resp = new ListMigrationTaskResponse();
        this.request("ListMigrationTask", req, resp, cb);
    }
    /**
     * 注册迁移任务
     * @param {RegisterMigrationTaskRequest} req
     * @param {function(string, RegisterMigrationTaskResponse):void} cb
     * @public
     */
    RegisterMigrationTask(req, cb) {
        const resp = new RegisterMigrationTaskResponse();
        this.request("RegisterMigrationTask", req, resp, cb);
    }
    /**
     * 更新迁移任务状态
     * @param {ModifyMigrationTaskStatusRequest} req
     * @param {function(string, ModifyMigrationTaskStatusResponse):void} cb
     * @public
     */
    ModifyMigrationTaskStatus(req, cb) {
        const resp = new ModifyMigrationTaskStatusResponse();
        this.request("ModifyMigrationTaskStatus", req, resp, cb);
    }
    /**
     * 取消注册迁移任务
     * @param {DeregisterMigrationTaskRequest} req
     * @param {function(string, DeregisterMigrationTaskResponse):void} cb
     * @public
     */
    DeregisterMigrationTask(req, cb) {
        const resp = new DeregisterMigrationTaskResponse();
        this.request("DeregisterMigrationTask", req, resp, cb);
    }
    /**
     * 获取指定迁移任务详情
     * @param {DescribeMigrationTaskRequest} req
     * @param {function(string, DescribeMigrationTaskResponse):void} cb
     * @public
     */
    DescribeMigrationTask(req, cb) {
        const resp = new DescribeMigrationTaskResponse();
        this.request("DescribeMigrationTask", req, resp, cb);
    }
    /**
     * 更改迁移任务所属项目
     * @param {ModifyMigrationTaskBelongToProjectRequest} req
     * @param {function(string, ModifyMigrationTaskBelongToProjectResponse):void} cb
     * @public
     */
    ModifyMigrationTaskBelongToProject(req, cb) {
        const resp = new ModifyMigrationTaskBelongToProjectResponse();
        this.request("ModifyMigrationTaskBelongToProject", req, resp, cb);
    }
    /**
     * 获取迁移项目名称列表
     * @param {ListMigrationProjectRequest} req
     * @param {function(string, ListMigrationProjectResponse):void} cb
     * @public
     */
    ListMigrationProject(req, cb) {
        const resp = new ListMigrationProjectResponse();
        this.request("ListMigrationProject", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=msp_client.js.map