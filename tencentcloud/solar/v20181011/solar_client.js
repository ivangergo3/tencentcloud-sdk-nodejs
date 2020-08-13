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
const CheckStaffChUserRequest = models_1.Models.CheckStaffChUserRequest;
const DescribeResourceTemplateHeadersResponse = models_1.Models.DescribeResourceTemplateHeadersResponse;
const DeleteProjectRequest = models_1.Models.DeleteProjectRequest;
const ReplenishProjectStockResponse = models_1.Models.ReplenishProjectStockResponse;
const SendWxTouchTaskResponse = models_1.Models.SendWxTouchTaskResponse;
const DescribeCustomersRequest = models_1.Models.DescribeCustomersRequest;
const DescribeProjectsRequest = models_1.Models.DescribeProjectsRequest;
const ModifyProjectRequest = models_1.Models.ModifyProjectRequest;
const OffLineProjectRequest = models_1.Models.OffLineProjectRequest;
const DescribeSubProjectRequest = models_1.Models.DescribeSubProjectRequest;
const ExpireFlowRequest = models_1.Models.ExpireFlowRequest;
const CopyActivityChannelRequest = models_1.Models.CopyActivityChannelRequest;
const CopyActivityChannelResponse = models_1.Models.CopyActivityChannelResponse;
const DescribeProjectsResponse = models_1.Models.DescribeProjectsResponse;
const ReplenishProjectStockRequest = models_1.Models.ReplenishProjectStockRequest;
const ProjectStock = models_1.Models.ProjectStock;
const DescribeProjectStockResponse = models_1.Models.DescribeProjectStockResponse;
const CheckStaffChUserResponse = models_1.Models.CheckStaffChUserResponse;
const DescribeCustomerRequest = models_1.Models.DescribeCustomerRequest;
const ProductInfo = models_1.Models.ProductInfo;
const SubProjectInfo = models_1.Models.SubProjectInfo;
const ResourceTemplateHeader = models_1.Models.ResourceTemplateHeader;
const CreateSubProjectResponse = models_1.Models.CreateSubProjectResponse;
const Filters = models_1.Models.Filters;
const ProjectInfo = models_1.Models.ProjectInfo;
const DescribeCustomerResponse = models_1.Models.DescribeCustomerResponse;
const DescribeCustomersResponse = models_1.Models.DescribeCustomersResponse;
const CreateSubProjectRequest = models_1.Models.CreateSubProjectRequest;
const ModifyProjectResponse = models_1.Models.ModifyProjectResponse;
const CreateProjectResponse = models_1.Models.CreateProjectResponse;
const DescribeProjectStockRequest = models_1.Models.DescribeProjectStockRequest;
const DeleteProjectResponse = models_1.Models.DeleteProjectResponse;
const SendWxTouchTaskRequest = models_1.Models.SendWxTouchTaskRequest;
const DescribeProjectRequest = models_1.Models.DescribeProjectRequest;
const OffLineProjectResponse = models_1.Models.OffLineProjectResponse;
const CustomerInfo = models_1.Models.CustomerInfo;
const ActivityInfo = models_1.Models.ActivityInfo;
const DescribeResourceTemplateHeadersRequest = models_1.Models.DescribeResourceTemplateHeadersRequest;
const ExpireFlowResponse = models_1.Models.ExpireFlowResponse;
const DescribeSubProjectResponse = models_1.Models.DescribeSubProjectResponse;
const CreateProjectRequest = models_1.Models.CreateProjectRequest;
/**
 * solar client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("solar.tencentcloudapi.com", "2018-10-11", credential, region, profile);
    }
    /**
     * 子项目详情
     * @param {DescribeSubProjectRequest} req
     * @param {function(string, DescribeSubProjectResponse):void} cb
     * @public
     */
    DescribeSubProject(req, cb) {
        const resp = new DescribeSubProjectResponse();
        this.request("DescribeSubProject", req, resp, cb);
    }
    /**
     * 项目库存详情
     * @param {DescribeProjectStockRequest} req
     * @param {function(string, DescribeProjectStockResponse):void} cb
     * @public
     */
    DescribeProjectStock(req, cb) {
        const resp = new DescribeProjectStockResponse();
        this.request("DescribeProjectStock", req, resp, cb);
    }
    /**
     * 项目详情展示
     * @param {DescribeProjectRequest} req
     * @param {function(string, DescribeProjectResponse):void} cb
     * @public
     */
    DescribeProject(req, cb) {
        const resp = new DescribeProjectResponse();
        this.request("DescribeProject", req, resp, cb);
    }
    /**
     * 素材查询服务号模板的列表（样例）
     * @param {DescribeResourceTemplateHeadersRequest} req
     * @param {function(string, DescribeResourceTemplateHeadersResponse):void} cb
     * @public
     */
    DescribeResourceTemplateHeaders(req, cb) {
        const resp = new DescribeResourceTemplateHeadersResponse();
        this.request("DescribeResourceTemplateHeaders", req, resp, cb);
    }
    /**
     * 查询客户档案列表
     * @param {DescribeCustomersRequest} req
     * @param {function(string, DescribeCustomersResponse):void} cb
     * @public
     */
    DescribeCustomers(req, cb) {
        const resp = new DescribeCustomersResponse();
        this.request("DescribeCustomers", req, resp, cb);
    }
    /**
     * 发送企业微信触达任务
     * @param {SendWxTouchTaskRequest} req
     * @param {function(string, SendWxTouchTaskResponse):void} cb
     * @public
     */
    SendWxTouchTask(req, cb) {
        const resp = new SendWxTouchTaskResponse();
        this.request("SendWxTouchTask", req, resp, cb);
    }
    /**
     * 创建项目
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        const resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }
    /**
     * 补充子项目库存
     * @param {ReplenishProjectStockRequest} req
     * @param {function(string, ReplenishProjectStockResponse):void} cb
     * @public
     */
    ReplenishProjectStock(req, cb) {
        const resp = new ReplenishProjectStockResponse();
        this.request("ReplenishProjectStock", req, resp, cb);
    }
    /**
     * 项目列表展示
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        const resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }
    /**
     * 下线项目
     * @param {OffLineProjectRequest} req
     * @param {function(string, OffLineProjectResponse):void} cb
     * @public
     */
    OffLineProject(req, cb) {
        const resp = new OffLineProjectResponse();
        this.request("OffLineProject", req, resp, cb);
    }
    /**
     * 把审批中的工单置为已失效
     * @param {ExpireFlowRequest} req
     * @param {function(string, ExpireFlowResponse):void} cb
     * @public
     */
    ExpireFlow(req, cb) {
        const resp = new ExpireFlowResponse();
        this.request("ExpireFlow", req, resp, cb);
    }
    /**
     * 删除项目
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        const resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }
    /**
     * 员工渠道更改员工状态
     * @param {CheckStaffChUserRequest} req
     * @param {function(string, CheckStaffChUserResponse):void} cb
     * @public
     */
    CheckStaffChUser(req, cb) {
        const resp = new CheckStaffChUserResponse();
        this.request("CheckStaffChUser", req, resp, cb);
    }
    /**
     * 客户档案查询客户详情
     * @param {DescribeCustomerRequest} req
     * @param {function(string, DescribeCustomerResponse):void} cb
     * @public
     */
    DescribeCustomer(req, cb) {
        const resp = new DescribeCustomerResponse();
        this.request("DescribeCustomer", req, resp, cb);
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
     * 创建子项目
     * @param {CreateSubProjectRequest} req
     * @param {function(string, CreateSubProjectResponse):void} cb
     * @public
     */
    CreateSubProject(req, cb) {
        const resp = new CreateSubProjectResponse();
        this.request("CreateSubProject", req, resp, cb);
    }
    /**
     * 复制活动渠道的策略
     * @param {CopyActivityChannelRequest} req
     * @param {function(string, CopyActivityChannelResponse):void} cb
     * @public
     */
    CopyActivityChannel(req, cb) {
        const resp = new CopyActivityChannelResponse();
        this.request("CopyActivityChannel", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=solar_client.js.map