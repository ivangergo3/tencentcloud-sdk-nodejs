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
const DescribeImagePersonalResponse = models_1.Models.DescribeImagePersonalResponse;
const DescribeUserQuotaPersonalRequest = models_1.Models.DescribeUserQuotaPersonalRequest;
const WebhookTarget = models_1.Models.WebhookTarget;
const WebhookTriggerLog = models_1.Models.WebhookTriggerLog;
const ModifyRepositoryResponse = models_1.Models.ModifyRepositoryResponse;
const TriggerInvokePara = models_1.Models.TriggerInvokePara;
const DescribeNamespacesResponse = models_1.Models.DescribeNamespacesResponse;
const TriggerLogResp = models_1.Models.TriggerLogResp;
const TagInfoResp = models_1.Models.TagInfoResp;
const CreateInstanceResponse = models_1.Models.CreateInstanceResponse;
const DeleteInstanceTokenRequest = models_1.Models.DeleteInstanceTokenRequest;
const ModifyRepositoryRequest = models_1.Models.ModifyRepositoryRequest;
const DescribeWebhookTriggerLogResponse = models_1.Models.DescribeWebhookTriggerLogResponse;
const CreateApplicationTriggerPersonalRequest = models_1.Models.CreateApplicationTriggerPersonalRequest;
const AutoDelStrategyInfo = models_1.Models.AutoDelStrategyInfo;
const ValidateNamespaceExistPersonalRequest = models_1.Models.ValidateNamespaceExistPersonalRequest;
const Registry = models_1.Models.Registry;
const DescribeRepositoriesResponse = models_1.Models.DescribeRepositoriesResponse;
const DeleteInstanceTokenResponse = models_1.Models.DeleteInstanceTokenResponse;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const ModifyInstanceTokenResponse = models_1.Models.ModifyInstanceTokenResponse;
const DescribeApplicationTriggerLogPersonalResponse = models_1.Models.DescribeApplicationTriggerLogPersonalResponse;
const FavorResp = models_1.Models.FavorResp;
const DescribeApplicationTriggerPersonalRequest = models_1.Models.DescribeApplicationTriggerPersonalRequest;
const DeleteNamespacePersonalRequest = models_1.Models.DeleteNamespacePersonalRequest;
const NamespaceInfo = models_1.Models.NamespaceInfo;
const Limit = models_1.Models.Limit;
const DeleteRepositoryResponse = models_1.Models.DeleteRepositoryResponse;
const DeleteImagePersonalResponse = models_1.Models.DeleteImagePersonalResponse;
const RegistryCondition = models_1.Models.RegistryCondition;
const DeleteWebhookTriggerResponse = models_1.Models.DeleteWebhookTriggerResponse;
const DeleteImageLifecycleGlobalPersonalResponse = models_1.Models.DeleteImageLifecycleGlobalPersonalResponse;
const DuplicateImagePersonalResponse = models_1.Models.DuplicateImagePersonalResponse;
const Tag = models_1.Models.Tag;
const DupImageTagResp = models_1.Models.DupImageTagResp;
const DescribeImagesResponse = models_1.Models.DescribeImagesResponse;
const DescribeRepositoryFilterPersonalRequest = models_1.Models.DescribeRepositoryFilterPersonalRequest;
const DescribeRepositoryPersonalRequest = models_1.Models.DescribeRepositoryPersonalRequest;
const AutoDelStrategyInfoResp = models_1.Models.AutoDelStrategyInfoResp;
const DeleteApplicationTriggerPersonalRequest = models_1.Models.DeleteApplicationTriggerPersonalRequest;
const SearchUserRepositoryResp = models_1.Models.SearchUserRepositoryResp;
const DescribeImageLifecyclePersonalResponse = models_1.Models.DescribeImageLifecyclePersonalResponse;
const ModifyInstanceTokenRequest = models_1.Models.ModifyInstanceTokenRequest;
const DeleteImageLifecyclePersonalResponse = models_1.Models.DeleteImageLifecyclePersonalResponse;
const CreateNamespaceResponse = models_1.Models.CreateNamespaceResponse;
const DescribeRepositoryOwnerPersonalResponse = models_1.Models.DescribeRepositoryOwnerPersonalResponse;
const ModifyWebhookTriggerResponse = models_1.Models.ModifyWebhookTriggerResponse;
const CreateImageLifecyclePersonalResponse = models_1.Models.CreateImageLifecyclePersonalResponse;
const RepoIsExistResp = models_1.Models.RepoIsExistResp;
const TcrImageInfo = models_1.Models.TcrImageInfo;
const DescribeImageLifecycleGlobalPersonalResponse = models_1.Models.DescribeImageLifecycleGlobalPersonalResponse;
const CreateNamespacePersonalResponse = models_1.Models.CreateNamespacePersonalResponse;
const DeleteImageLifecycleGlobalPersonalRequest = models_1.Models.DeleteImageLifecycleGlobalPersonalRequest;
const DescribeInstanceStatusRequest = models_1.Models.DescribeInstanceStatusRequest;
const ModifyWebhookTriggerRequest = models_1.Models.ModifyWebhookTriggerRequest;
const DescribeInstanceStatusResponse = models_1.Models.DescribeInstanceStatusResponse;
const DeleteNamespaceResponse = models_1.Models.DeleteNamespaceResponse;
const Favors = models_1.Models.Favors;
const DescribeRepositoryPersonalResponse = models_1.Models.DescribeRepositoryPersonalResponse;
const DescribeRepositoriesRequest = models_1.Models.DescribeRepositoriesRequest;
const DescribeImageFilterPersonalRequest = models_1.Models.DescribeImageFilterPersonalRequest;
const ModifyNamespaceResponse = models_1.Models.ModifyNamespaceResponse;
const ValidateRepositoryExistPersonalRequest = models_1.Models.ValidateRepositoryExistPersonalRequest;
const ModifyUserPasswordPersonalResponse = models_1.Models.ModifyUserPasswordPersonalResponse;
const TcrNamespaceInfo = models_1.Models.TcrNamespaceInfo;
const DeleteApplicationTriggerPersonalResponse = models_1.Models.DeleteApplicationTriggerPersonalResponse;
const ModifyRepositoryInfoPersonalResponse = models_1.Models.ModifyRepositoryInfoPersonalResponse;
const DescribeWebhookTriggerLogRequest = models_1.Models.DescribeWebhookTriggerLogRequest;
const CreateUserPersonalRequest = models_1.Models.CreateUserPersonalRequest;
const RepoInfoResp = models_1.Models.RepoInfoResp;
const ManageImageLifecycleGlobalPersonalResponse = models_1.Models.ManageImageLifecycleGlobalPersonalResponse;
const RegistryStatus = models_1.Models.RegistryStatus;
const DescribeNamespacePersonalRequest = models_1.Models.DescribeNamespacePersonalRequest;
const DeleteRepositoryPersonalResponse = models_1.Models.DeleteRepositoryPersonalResponse;
const CreateInstanceTokenResponse = models_1.Models.CreateInstanceTokenResponse;
const DescribeApplicationTriggerLogPersonalResp = models_1.Models.DescribeApplicationTriggerLogPersonalResp;
const DeleteImagePersonalRequest = models_1.Models.DeleteImagePersonalRequest;
const DescribeApplicationTriggerPersonalResponse = models_1.Models.DescribeApplicationTriggerPersonalResponse;
const NamespaceInfoResp = models_1.Models.NamespaceInfoResp;
const CreateRepositoryPersonalRequest = models_1.Models.CreateRepositoryPersonalRequest;
const DescribeImageFilterPersonalResponse = models_1.Models.DescribeImageFilterPersonalResponse;
const CreateImageLifecyclePersonalRequest = models_1.Models.CreateImageLifecyclePersonalRequest;
const DeleteWebhookTriggerRequest = models_1.Models.DeleteWebhookTriggerRequest;
const TriggerInvokeResult = models_1.Models.TriggerInvokeResult;
const CreateUserPersonalResponse = models_1.Models.CreateUserPersonalResponse;
const DescribeWebhookTriggerResponse = models_1.Models.DescribeWebhookTriggerResponse;
const DescribeImageManifestsRequest = models_1.Models.DescribeImageManifestsRequest;
const ModifyNamespaceRequest = models_1.Models.ModifyNamespaceRequest;
const ModifyRepositoryAccessPersonalRequest = models_1.Models.ModifyRepositoryAccessPersonalRequest;
const TagSpecification = models_1.Models.TagSpecification;
const DescribeImageLifecycleGlobalPersonalRequest = models_1.Models.DescribeImageLifecycleGlobalPersonalRequest;
const DescribeImageLifecyclePersonalRequest = models_1.Models.DescribeImageLifecyclePersonalRequest;
const RepositoryInfoResp = models_1.Models.RepositoryInfoResp;
const CreateInstanceRequest = models_1.Models.CreateInstanceRequest;
const DescribeInstanceTokenRequest = models_1.Models.DescribeInstanceTokenRequest;
const BatchDeleteRepositoryPersonalResponse = models_1.Models.BatchDeleteRepositoryPersonalResponse;
const CreateNamespaceRequest = models_1.Models.CreateNamespaceRequest;
const BatchDeleteRepositoryPersonalRequest = models_1.Models.BatchDeleteRepositoryPersonalRequest;
const TriggerInvokeCondition = models_1.Models.TriggerInvokeCondition;
const ValidateRepositoryExistPersonalResponse = models_1.Models.ValidateRepositoryExistPersonalResponse;
const NamespaceIsExistsResp = models_1.Models.NamespaceIsExistsResp;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const Filter = models_1.Models.Filter;
const RepoInfo = models_1.Models.RepoInfo;
const ManageImageLifecycleGlobalPersonalRequest = models_1.Models.ManageImageLifecycleGlobalPersonalRequest;
const DescribeUserQuotaPersonalResponse = models_1.Models.DescribeUserQuotaPersonalResponse;
const DescribeImagePersonalRequest = models_1.Models.DescribeImagePersonalRequest;
const DeleteImageLifecyclePersonalRequest = models_1.Models.DeleteImageLifecyclePersonalRequest;
const ModifyApplicationTriggerPersonalResponse = models_1.Models.ModifyApplicationTriggerPersonalResponse;
const DescribeImageManifestsResponse = models_1.Models.DescribeImageManifestsResponse;
const DescribeNamespacePersonalResponse = models_1.Models.DescribeNamespacePersonalResponse;
const DeleteNamespacePersonalResponse = models_1.Models.DeleteNamespacePersonalResponse;
const Header = models_1.Models.Header;
const CreateWebhookTriggerRequest = models_1.Models.CreateWebhookTriggerRequest;
const DescribeRepositoryOwnerPersonalRequest = models_1.Models.DescribeRepositoryOwnerPersonalRequest;
const ModifyRepositoryInfoPersonalRequest = models_1.Models.ModifyRepositoryInfoPersonalRequest;
const DescribeApplicationTriggerLogPersonalRequest = models_1.Models.DescribeApplicationTriggerLogPersonalRequest;
const DescribeFavorRepositoryPersonalRequest = models_1.Models.DescribeFavorRepositoryPersonalRequest;
const DescribeNamespacesRequest = models_1.Models.DescribeNamespacesRequest;
const DescribeRepositoryFilterPersonalResponse = models_1.Models.DescribeRepositoryFilterPersonalResponse;
const DescribeFavorRepositoryPersonalResponse = models_1.Models.DescribeFavorRepositoryPersonalResponse;
const ModifyRepositoryAccessPersonalResponse = models_1.Models.ModifyRepositoryAccessPersonalResponse;
const ModifyApplicationTriggerPersonalRequest = models_1.Models.ModifyApplicationTriggerPersonalRequest;
const CreateInstanceTokenRequest = models_1.Models.CreateInstanceTokenRequest;
const ModifyUserPasswordPersonalRequest = models_1.Models.ModifyUserPasswordPersonalRequest;
const ValidateNamespaceExistPersonalResponse = models_1.Models.ValidateNamespaceExistPersonalResponse;
const DescribeApplicationTriggerPersonalResp = models_1.Models.DescribeApplicationTriggerPersonalResp;
const TagInfo = models_1.Models.TagInfo;
const CreateRepositoryRequest = models_1.Models.CreateRepositoryRequest;
const DeleteImageResponse = models_1.Models.DeleteImageResponse;
const DescribeWebhookTriggerRequest = models_1.Models.DescribeWebhookTriggerRequest;
const DeleteNamespaceRequest = models_1.Models.DeleteNamespaceRequest;
const BatchDeleteImagePersonalRequest = models_1.Models.BatchDeleteImagePersonalRequest;
const DescribeImagesRequest = models_1.Models.DescribeImagesRequest;
const TriggerResp = models_1.Models.TriggerResp;
const CreateRepositoryResponse = models_1.Models.CreateRepositoryResponse;
const RespLimit = models_1.Models.RespLimit;
const DuplicateImagePersonalRequest = models_1.Models.DuplicateImagePersonalRequest;
const DescribeInstanceTokenResponse = models_1.Models.DescribeInstanceTokenResponse;
const SameImagesResp = models_1.Models.SameImagesResp;
const CreateNamespacePersonalRequest = models_1.Models.CreateNamespacePersonalRequest;
const WebhookTrigger = models_1.Models.WebhookTrigger;
const CreateWebhookTriggerResponse = models_1.Models.CreateWebhookTriggerResponse;
const TcrRepositoryInfo = models_1.Models.TcrRepositoryInfo;
const TcrInstanceToken = models_1.Models.TcrInstanceToken;
const DeleteRepositoryRequest = models_1.Models.DeleteRepositoryRequest;
const DeleteImageRequest = models_1.Models.DeleteImageRequest;
const CreateRepositoryPersonalResponse = models_1.Models.CreateRepositoryPersonalResponse;
const CreateApplicationTriggerPersonalResponse = models_1.Models.CreateApplicationTriggerPersonalResponse;
const BatchDeleteImagePersonalResponse = models_1.Models.BatchDeleteImagePersonalResponse;
const DeleteRepositoryPersonalRequest = models_1.Models.DeleteRepositoryPersonalRequest;
/**
 * tcr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tcr.tencentcloudapi.com", "2019-09-24", credential, region, profile);
    }
    /**
     * 更新命名空间信息，当前仅支持修改命名空间访问级别
     * @param {ModifyNamespaceRequest} req
     * @param {function(string, ModifyNamespaceResponse):void} cb
     * @public
     */
    ModifyNamespace(req, cb) {
        const resp = new ModifyNamespaceResponse();
        this.request("ModifyNamespace", req, resp, cb);
    }
    /**
     * 用于在个人版中查询与指定tag镜像内容相同的tag列表
     * @param {DescribeImageFilterPersonalRequest} req
     * @param {function(string, DescribeImageFilterPersonalResponse):void} cb
     * @public
     */
    DescribeImageFilterPersonal(req, cb) {
        const resp = new DescribeImageFilterPersonalResponse();
        this.request("DescribeImageFilterPersonal", req, resp, cb);
    }
    /**
     * 用于查询应用更新触发器
     * @param {DescribeApplicationTriggerPersonalRequest} req
     * @param {function(string, DescribeApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    DescribeApplicationTriggerPersonal(req, cb) {
        const resp = new DescribeApplicationTriggerPersonalResponse();
        this.request("DescribeApplicationTriggerPersonal", req, resp, cb);
    }
    /**
     * 用于在个人版中创建清理策略
     * @param {CreateImageLifecyclePersonalRequest} req
     * @param {function(string, CreateImageLifecyclePersonalResponse):void} cb
     * @public
     */
    CreateImageLifecyclePersonal(req, cb) {
        const resp = new CreateImageLifecyclePersonalResponse();
        this.request("CreateImageLifecyclePersonal", req, resp, cb);
    }
    /**
     * 用于获取个人版镜像仓库tag列表
     * @param {DescribeImagePersonalRequest} req
     * @param {function(string, DescribeImagePersonalResponse):void} cb
     * @public
     */
    DescribeImagePersonal(req, cb) {
        const resp = new DescribeImagePersonalResponse();
        this.request("DescribeImagePersonal", req, resp, cb);
    }
    /**
     * 用于获取个人版仓库中自动清理策略
     * @param {DescribeImageLifecyclePersonalRequest} req
     * @param {function(string, DescribeImageLifecyclePersonalResponse):void} cb
     * @public
     */
    DescribeImageLifecyclePersonal(req, cb) {
        const resp = new DescribeImageLifecyclePersonalResponse();
        this.request("DescribeImageLifecyclePersonal", req, resp, cb);
    }
    /**
     * 用于获取个人版全局镜像版本自动清理策略
     * @param {DescribeImageLifecycleGlobalPersonalRequest} req
     * @param {function(string, DescribeImageLifecycleGlobalPersonalResponse):void} cb
     * @public
     */
    DescribeImageLifecycleGlobalPersonal(req, cb) {
        const resp = new DescribeImageLifecycleGlobalPersonalResponse();
        this.request("DescribeImageLifecycleGlobalPersonal", req, resp, cb);
    }
    /**
     * 用于在企业版中创建命名空间
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        const resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }
    /**
     * 用于修改应用更新触发器
     * @param {ModifyApplicationTriggerPersonalRequest} req
     * @param {function(string, ModifyApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    ModifyApplicationTriggerPersonal(req, cb) {
        const resp = new ModifyApplicationTriggerPersonalResponse();
        this.request("ModifyApplicationTriggerPersonal", req, resp, cb);
    }
    /**
     * 更新镜像仓库信息，可修改仓库描述信息
     * @param {ModifyRepositoryRequest} req
     * @param {function(string, ModifyRepositoryResponse):void} cb
     * @public
     */
    ModifyRepository(req, cb) {
        const resp = new ModifyRepositoryResponse();
        this.request("ModifyRepository", req, resp, cb);
    }
    /**
     * 用于个人版镜像仓库中删除
     * @param {DeleteRepositoryPersonalRequest} req
     * @param {function(string, DeleteRepositoryPersonalResponse):void} cb
     * @public
     */
    DeleteRepositoryPersonal(req, cb) {
        const resp = new DeleteRepositoryPersonalResponse();
        this.request("DeleteRepositoryPersonal", req, resp, cb);
    }
    /**
     * 删除镜像仓库
     * @param {DeleteRepositoryRequest} req
     * @param {function(string, DeleteRepositoryResponse):void} cb
     * @public
     */
    DeleteRepository(req, cb) {
        const resp = new DeleteRepositoryResponse();
        this.request("DeleteRepository", req, resp, cb);
    }
    /**
     * 查询镜像仓库列表或指定镜像仓库信息
     * @param {DescribeRepositoriesRequest} req
     * @param {function(string, DescribeRepositoriesResponse):void} cb
     * @public
     */
    DescribeRepositories(req, cb) {
        const resp = new DescribeRepositoriesResponse();
        this.request("DescribeRepositories", req, resp, cb);
    }
    /**
     * 查询实例信息
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }
    /**
     * 用于在个人版镜像仓库中更新容器镜像描述
     * @param {ModifyRepositoryInfoPersonalRequest} req
     * @param {function(string, ModifyRepositoryInfoPersonalResponse):void} cb
     * @public
     */
    ModifyRepositoryInfoPersonal(req, cb) {
        const resp = new ModifyRepositoryInfoPersonalResponse();
        this.request("ModifyRepositoryInfoPersonal", req, resp, cb);
    }
    /**
     * 获取触发器日志
     * @param {DescribeWebhookTriggerLogRequest} req
     * @param {function(string, DescribeWebhookTriggerLogResponse):void} cb
     * @public
     */
    DescribeWebhookTriggerLog(req, cb) {
        const resp = new DescribeWebhookTriggerLogResponse();
        this.request("DescribeWebhookTriggerLog", req, resp, cb);
    }
    /**
     * 查询镜像版本列表或指定容器镜像信息
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        const resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }
    /**
     * 查询个人版命名空间信息
     * @param {DescribeNamespacePersonalRequest} req
     * @param {function(string, DescribeNamespacePersonalResponse):void} cb
     * @public
     */
    DescribeNamespacePersonal(req, cb) {
        const resp = new DescribeNamespacePersonalResponse();
        this.request("DescribeNamespacePersonal", req, resp, cb);
    }
    /**
     * 删除命名空间
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        const resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }
    /**
     * 查询个人版仓库信息
     * @param {DescribeRepositoryPersonalRequest} req
     * @param {function(string, DescribeRepositoryPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryPersonal(req, cb) {
        const resp = new DescribeRepositoryPersonalResponse();
        this.request("DescribeRepositoryPersonal", req, resp, cb);
    }
    /**
     * 查询容器镜像Manifest信息
     * @param {DescribeImageManifestsRequest} req
     * @param {function(string, DescribeImageManifestsResponse):void} cb
     * @public
     */
    DescribeImageManifests(req, cb) {
        const resp = new DescribeImageManifestsResponse();
        this.request("DescribeImageManifests", req, resp, cb);
    }
    /**
     * 查询长期访问凭证信息
     * @param {DescribeInstanceTokenRequest} req
     * @param {function(string, DescribeInstanceTokenResponse):void} cb
     * @public
     */
    DescribeInstanceToken(req, cb) {
        const resp = new DescribeInstanceTokenResponse();
        this.request("DescribeInstanceToken", req, resp, cb);
    }
    /**
     * 用于设置个人版全局镜像版本自动清理策略
     * @param {ManageImageLifecycleGlobalPersonalRequest} req
     * @param {function(string, ManageImageLifecycleGlobalPersonalResponse):void} cb
     * @public
     */
    ManageImageLifecycleGlobalPersonal(req, cb) {
        const resp = new ManageImageLifecycleGlobalPersonalResponse();
        this.request("ManageImageLifecycleGlobalPersonal", req, resp, cb);
    }
    /**
     * 用于查询应用更新触发器触发日志
     * @param {DescribeApplicationTriggerLogPersonalRequest} req
     * @param {function(string, DescribeApplicationTriggerLogPersonalResponse):void} cb
     * @public
     */
    DescribeApplicationTriggerLogPersonal(req, cb) {
        const resp = new DescribeApplicationTriggerLogPersonalResponse();
        this.request("DescribeApplicationTriggerLogPersonal", req, resp, cb);
    }
    /**
     * 删除长期访问凭证
     * @param {DeleteInstanceTokenRequest} req
     * @param {function(string, DeleteInstanceTokenResponse):void} cb
     * @public
     */
    DeleteInstanceToken(req, cb) {
        const resp = new DeleteInstanceTokenResponse();
        this.request("DeleteInstanceToken", req, resp, cb);
    }
    /**
     * 修改个人用户登录密码
     * @param {ModifyUserPasswordPersonalRequest} req
     * @param {function(string, ModifyUserPasswordPersonalResponse):void} cb
     * @public
     */
    ModifyUserPasswordPersonal(req, cb) {
        const resp = new ModifyUserPasswordPersonalResponse();
        this.request("ModifyUserPasswordPersonal", req, resp, cb);
    }
    /**
     * 用于删除应用更新触发器
     * @param {DeleteApplicationTriggerPersonalRequest} req
     * @param {function(string, DeleteApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    DeleteApplicationTriggerPersonal(req, cb) {
        const resp = new DeleteApplicationTriggerPersonalResponse();
        this.request("DeleteApplicationTriggerPersonal", req, resp, cb);
    }
    /**
     * 查询触发器
     * @param {DescribeWebhookTriggerRequest} req
     * @param {function(string, DescribeWebhookTriggerResponse):void} cb
     * @public
     */
    DescribeWebhookTrigger(req, cb) {
        const resp = new DescribeWebhookTriggerResponse();
        this.request("DescribeWebhookTrigger", req, resp, cb);
    }
    /**
     * 用于在个人版中删除tag
     * @param {DeleteImagePersonalRequest} req
     * @param {function(string, DeleteImagePersonalResponse):void} cb
     * @public
     */
    DeleteImagePersonal(req, cb) {
        const resp = new DeleteImagePersonalResponse();
        this.request("DeleteImagePersonal", req, resp, cb);
    }
    /**
     * 更新触发器
     * @param {ModifyWebhookTriggerRequest} req
     * @param {function(string, ModifyWebhookTriggerResponse):void} cb
     * @public
     */
    ModifyWebhookTrigger(req, cb) {
        const resp = new ModifyWebhookTriggerResponse();
        this.request("ModifyWebhookTrigger", req, resp, cb);
    }
    /**
     * 更新实例内指定长期访问凭证的启用状态
     * @param {ModifyInstanceTokenRequest} req
     * @param {function(string, ModifyInstanceTokenResponse):void} cb
     * @public
     */
    ModifyInstanceToken(req, cb) {
        const resp = new ModifyInstanceTokenResponse();
        this.request("ModifyInstanceToken", req, resp, cb);
    }
    /**
     * 创建实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        const resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }
    /**
     * 创建触发器
     * @param {CreateWebhookTriggerRequest} req
     * @param {function(string, CreateWebhookTriggerResponse):void} cb
     * @public
     */
    CreateWebhookTrigger(req, cb) {
        const resp = new CreateWebhookTriggerResponse();
        this.request("CreateWebhookTrigger", req, resp, cb);
    }
    /**
     * 用于创建应用更新触发器
     * @param {CreateApplicationTriggerPersonalRequest} req
     * @param {function(string, CreateApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    CreateApplicationTriggerPersonal(req, cb) {
        const resp = new CreateApplicationTriggerPersonalResponse();
        this.request("CreateApplicationTriggerPersonal", req, resp, cb);
    }
    /**
     * 用于个人版镜像仓库中批量删除镜像仓库
     * @param {BatchDeleteRepositoryPersonalRequest} req
     * @param {function(string, BatchDeleteRepositoryPersonalResponse):void} cb
     * @public
     */
    BatchDeleteRepositoryPersonal(req, cb) {
        const resp = new BatchDeleteRepositoryPersonalResponse();
        this.request("BatchDeleteRepositoryPersonal", req, resp, cb);
    }
    /**
     * 查询个人用户配额
     * @param {DescribeUserQuotaPersonalRequest} req
     * @param {function(string, DescribeUserQuotaPersonalResponse):void} cb
     * @public
     */
    DescribeUserQuotaPersonal(req, cb) {
        const resp = new DescribeUserQuotaPersonalResponse();
        this.request("DescribeUserQuotaPersonal", req, resp, cb);
    }
    /**
     * 删除触发器
     * @param {DeleteWebhookTriggerRequest} req
     * @param {function(string, DeleteWebhookTriggerResponse):void} cb
     * @public
     */
    DeleteWebhookTrigger(req, cb) {
        const resp = new DeleteWebhookTriggerResponse();
        this.request("DeleteWebhookTrigger", req, resp, cb);
    }
    /**
     * 用于企业版创建镜像仓库
     * @param {CreateRepositoryRequest} req
     * @param {function(string, CreateRepositoryResponse):void} cb
     * @public
     */
    CreateRepository(req, cb) {
        const resp = new CreateRepositoryResponse();
        this.request("CreateRepository", req, resp, cb);
    }
    /**
     * 查询个人收藏仓库
     * @param {DescribeFavorRepositoryPersonalRequest} req
     * @param {function(string, DescribeFavorRepositoryPersonalResponse):void} cb
     * @public
     */
    DescribeFavorRepositoryPersonal(req, cb) {
        const resp = new DescribeFavorRepositoryPersonalResponse();
        this.request("DescribeFavorRepositoryPersonal", req, resp, cb);
    }
    /**
     * 用于在个人版中获取用户全部的镜像仓库列表
     * @param {DescribeRepositoryOwnerPersonalRequest} req
     * @param {function(string, DescribeRepositoryOwnerPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryOwnerPersonal(req, cb) {
        const resp = new DescribeRepositoryOwnerPersonalResponse();
        this.request("DescribeRepositoryOwnerPersonal", req, resp, cb);
    }
    /**
     * 查询命名空间列表或指定命名空间信息
     * @param {DescribeNamespacesRequest} req
     * @param {function(string, DescribeNamespacesResponse):void} cb
     * @public
     */
    DescribeNamespaces(req, cb) {
        const resp = new DescribeNamespacesResponse();
        this.request("DescribeNamespaces", req, resp, cb);
    }
    /**
     * 查询实例当前状态以及过程信息
     * @param {DescribeInstanceStatusRequest} req
     * @param {function(string, DescribeInstanceStatusResponse):void} cb
     * @public
     */
    DescribeInstanceStatus(req, cb) {
        const resp = new DescribeInstanceStatusResponse();
        this.request("DescribeInstanceStatus", req, resp, cb);
    }
    /**
     * 用于在个人版仓库中创建镜像仓库
     * @param {CreateRepositoryPersonalRequest} req
     * @param {function(string, CreateRepositoryPersonalResponse):void} cb
     * @public
     */
    CreateRepositoryPersonal(req, cb) {
        const resp = new CreateRepositoryPersonalResponse();
        this.request("CreateRepositoryPersonal", req, resp, cb);
    }
    /**
     * 用于在个人版镜像仓库中批量删除Tag
     * @param {BatchDeleteImagePersonalRequest} req
     * @param {function(string, BatchDeleteImagePersonalResponse):void} cb
     * @public
     */
    BatchDeleteImagePersonal(req, cb) {
        const resp = new BatchDeleteImagePersonalResponse();
        this.request("BatchDeleteImagePersonal", req, resp, cb);
    }
    /**
     * 用于在个人版镜像仓库中复制镜像版本
     * @param {DuplicateImagePersonalRequest} req
     * @param {function(string, DuplicateImagePersonalResponse):void} cb
     * @public
     */
    DuplicateImagePersonal(req, cb) {
        const resp = new DuplicateImagePersonalResponse();
        this.request("DuplicateImagePersonal", req, resp, cb);
    }
    /**
     * 用于在个人版镜像仓库中，获取满足输入搜索条件的用户镜像仓库
     * @param {DescribeRepositoryFilterPersonalRequest} req
     * @param {function(string, DescribeRepositoryFilterPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryFilterPersonal(req, cb) {
        const resp = new DescribeRepositoryFilterPersonalResponse();
        this.request("DescribeRepositoryFilterPersonal", req, resp, cb);
    }
    /**
     * 查询个人版用户命名空间是否存在
     * @param {ValidateNamespaceExistPersonalRequest} req
     * @param {function(string, ValidateNamespaceExistPersonalResponse):void} cb
     * @public
     */
    ValidateNamespaceExistPersonal(req, cb) {
        const resp = new ValidateNamespaceExistPersonalResponse();
        this.request("ValidateNamespaceExistPersonal", req, resp, cb);
    }
    /**
     * 创建个人版镜像仓库命名空间，此命名空间全局唯一
     * @param {CreateNamespacePersonalRequest} req
     * @param {function(string, CreateNamespacePersonalResponse):void} cb
     * @public
     */
    CreateNamespacePersonal(req, cb) {
        const resp = new CreateNamespacePersonalResponse();
        this.request("CreateNamespacePersonal", req, resp, cb);
    }
    /**
     * 创建个人用户
     * @param {CreateUserPersonalRequest} req
     * @param {function(string, CreateUserPersonalResponse):void} cb
     * @public
     */
    CreateUserPersonal(req, cb) {
        const resp = new CreateUserPersonalResponse();
        this.request("CreateUserPersonal", req, resp, cb);
    }
    /**
     * 用于删除个人版全局镜像版本自动清理策略
     * @param {DeleteImageLifecycleGlobalPersonalRequest} req
     * @param {function(string, DeleteImageLifecycleGlobalPersonalResponse):void} cb
     * @public
     */
    DeleteImageLifecycleGlobalPersonal(req, cb) {
        const resp = new DeleteImageLifecycleGlobalPersonalResponse();
        this.request("DeleteImageLifecycleGlobalPersonal", req, resp, cb);
    }
    /**
     * 删除共享版命名空间
     * @param {DeleteNamespacePersonalRequest} req
     * @param {function(string, DeleteNamespacePersonalResponse):void} cb
     * @public
     */
    DeleteNamespacePersonal(req, cb) {
        const resp = new DeleteNamespacePersonalResponse();
        this.request("DeleteNamespacePersonal", req, resp, cb);
    }
    /**
     * 用于更新个人版镜像仓库的访问属性
     * @param {ModifyRepositoryAccessPersonalRequest} req
     * @param {function(string, ModifyRepositoryAccessPersonalResponse):void} cb
     * @public
     */
    ModifyRepositoryAccessPersonal(req, cb) {
        const resp = new ModifyRepositoryAccessPersonalResponse();
        this.request("ModifyRepositoryAccessPersonal", req, resp, cb);
    }
    /**
     * 用于在个人版镜像仓库中删除仓库Tag自动清理策略
     * @param {DeleteImageLifecyclePersonalRequest} req
     * @param {function(string, DeleteImageLifecyclePersonalResponse):void} cb
     * @public
     */
    DeleteImageLifecyclePersonal(req, cb) {
        const resp = new DeleteImageLifecyclePersonalResponse();
        this.request("DeleteImageLifecyclePersonal", req, resp, cb);
    }
    /**
     * 用于判断个人版仓库是否存在
     * @param {ValidateRepositoryExistPersonalRequest} req
     * @param {function(string, ValidateRepositoryExistPersonalResponse):void} cb
     * @public
     */
    ValidateRepositoryExistPersonal(req, cb) {
        const resp = new ValidateRepositoryExistPersonalResponse();
        this.request("ValidateRepositoryExistPersonal", req, resp, cb);
    }
    /**
     * 删除指定镜像
     * @param {DeleteImageRequest} req
     * @param {function(string, DeleteImageResponse):void} cb
     * @public
     */
    DeleteImage(req, cb) {
        const resp = new DeleteImageResponse();
        this.request("DeleteImage", req, resp, cb);
    }
    /**
     * 创建实例的临时或长期访问凭证
     * @param {CreateInstanceTokenRequest} req
     * @param {function(string, CreateInstanceTokenResponse):void} cb
     * @public
     */
    CreateInstanceToken(req, cb) {
        const resp = new CreateInstanceTokenResponse();
        this.request("CreateInstanceToken", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tcr_client.js.map