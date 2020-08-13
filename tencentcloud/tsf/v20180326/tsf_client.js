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
const DescribeMsApiListRequest = models_1.Models.DescribeMsApiListRequest;
const TsfApiListResponse = models_1.Models.TsfApiListResponse;
const DescribeGroupInstancesResponse = models_1.Models.DescribeGroupInstancesResponse;
const DescribeMsApiListResponse = models_1.Models.DescribeMsApiListResponse;
const DescribeDownloadInfoRequest = models_1.Models.DescribeDownloadInfoRequest;
const ApiDetailResponse = models_1.Models.ApiDetailResponse;
const ImageTag = models_1.Models.ImageTag;
const DescribePublicConfigSummaryRequest = models_1.Models.DescribePublicConfigSummaryRequest;
const DescribeClusterInstancesResponse = models_1.Models.DescribeClusterInstancesResponse;
const DescribeMicroserviceRequest = models_1.Models.DescribeMicroserviceRequest;
const CosCredentials = models_1.Models.CosCredentials;
const DescribeContainerGroupsRequest = models_1.Models.DescribeContainerGroupsRequest;
const ExpandGroupRequest = models_1.Models.ExpandGroupRequest;
const DeleteServerlessGroupRequest = models_1.Models.DeleteServerlessGroupRequest;
const DescribeImageTagsRequest = models_1.Models.DescribeImageTagsRequest;
const ModifyLaneRuleResponse = models_1.Models.ModifyLaneRuleResponse;
const DescribeSimpleClustersResponse = models_1.Models.DescribeSimpleClustersResponse;
const DescribePodInstancesResponse = models_1.Models.DescribePodInstancesResponse;
const VmGroup = models_1.Models.VmGroup;
const DescribeRepositoryResponse = models_1.Models.DescribeRepositoryResponse;
const RevocationConfigRequest = models_1.Models.RevocationConfigRequest;
const GroupPod = models_1.Models.GroupPod;
const ModifyUploadInfoRequest = models_1.Models.ModifyUploadInfoRequest;
const DescribeUploadInfoResponse = models_1.Models.DescribeUploadInfoResponse;
const DescribeReleasedConfigRequest = models_1.Models.DescribeReleasedConfigRequest;
const DescribeApiVersionsResponse = models_1.Models.DescribeApiVersionsResponse;
const DescribeRepositoriesResponse = models_1.Models.DescribeRepositoriesResponse;
const StopGroupResponse = models_1.Models.StopGroupResponse;
const StartContainerGroupResponse = models_1.Models.StartContainerGroupResponse;
const CreateGroupRequest = models_1.Models.CreateGroupRequest;
const ModifyMicroserviceRequest = models_1.Models.ModifyMicroserviceRequest;
const DescribeConfigReleasesRequest = models_1.Models.DescribeConfigReleasesRequest;
const DeleteLaneResponse = models_1.Models.DeleteLaneResponse;
const ModifyLaneResponse = models_1.Models.ModifyLaneResponse;
const TsfPageConfigRelease = models_1.Models.TsfPageConfigRelease;
const CreateContainGroupResponse = models_1.Models.CreateContainGroupResponse;
const DescribeContainerGroupDetailResponse = models_1.Models.DescribeContainerGroupDetailResponse;
const SimpleApplication = models_1.Models.SimpleApplication;
const DescribePublicConfigSummaryResponse = models_1.Models.DescribePublicConfigSummaryResponse;
const HealthCheckSetting = models_1.Models.HealthCheckSetting;
const DescribeSimpleApplicationsResponse = models_1.Models.DescribeSimpleApplicationsResponse;
const DeleteRepositoryResponse = models_1.Models.DeleteRepositoryResponse;
const DescribePublicConfigReleaseLogsRequest = models_1.Models.DescribePublicConfigReleaseLogsRequest;
const CreateServerlessGroupResponse = models_1.Models.CreateServerlessGroupResponse;
const CreateLaneRequest = models_1.Models.CreateLaneRequest;
const DeleteApplicationResponse = models_1.Models.DeleteApplicationResponse;
const UpdateRepositoryRequest = models_1.Models.UpdateRepositoryRequest;
const Instance = models_1.Models.Instance;
const DeployServerlessGroupResponse = models_1.Models.DeployServerlessGroupResponse;
const DescribeConfigsResponse = models_1.Models.DescribeConfigsResponse;
const DescribeApplicationAttributeResponse = models_1.Models.DescribeApplicationAttributeResponse;
const DescribeApplicationsResponse = models_1.Models.DescribeApplicationsResponse;
const VmGroupSimple = models_1.Models.VmGroupSimple;
const ModifyContainerReplicasRequest = models_1.Models.ModifyContainerReplicasRequest;
const ModifyLaneRequest = models_1.Models.ModifyLaneRequest;
const DescribeLanesRequest = models_1.Models.DescribeLanesRequest;
const DeleteMicroserviceRequest = models_1.Models.DeleteMicroserviceRequest;
const CreatePublicConfigRequest = models_1.Models.CreatePublicConfigRequest;
const RemoveInstancesResponse = models_1.Models.RemoveInstancesResponse;
const DescribeApiVersionsRequest = models_1.Models.DescribeApiVersionsRequest;
const ModifyContainerReplicasResponse = models_1.Models.ModifyContainerReplicasResponse;
const DescribeConfigRequest = models_1.Models.DescribeConfigRequest;
const Namespace = models_1.Models.Namespace;
const TsfPageCluster = models_1.Models.TsfPageCluster;
const DescribeGroupResponse = models_1.Models.DescribeGroupResponse;
const DescribeGroupsResponse = models_1.Models.DescribeGroupsResponse;
const Env = models_1.Models.Env;
const DeleteContainerGroupResponse = models_1.Models.DeleteContainerGroupResponse;
const DescribeSimpleGroupsRequest = models_1.Models.DescribeSimpleGroupsRequest;
const CreateNamespaceResponse = models_1.Models.CreateNamespaceResponse;
const DeleteServerlessGroupResponse = models_1.Models.DeleteServerlessGroupResponse;
const DeleteImageTagsResponse = models_1.Models.DeleteImageTagsResponse;
const ModifyUploadInfoResponse = models_1.Models.ModifyUploadInfoResponse;
const DescribeImageTagsResponse = models_1.Models.DescribeImageTagsResponse;
const DeleteGroupRequest = models_1.Models.DeleteGroupRequest;
const ApiDefinitionDescr = models_1.Models.ApiDefinitionDescr;
const TsfPageMsInstance = models_1.Models.TsfPageMsInstance;
const ServerlessGroup = models_1.Models.ServerlessGroup;
const DescribeApplicationResponse = models_1.Models.DescribeApplicationResponse;
const LaneInfo = models_1.Models.LaneInfo;
const DescribeConfigReleaseLogsResponse = models_1.Models.DescribeConfigReleaseLogsResponse;
const RevocationConfigResponse = models_1.Models.RevocationConfigResponse;
const DescribeSimpleGroupsResponse = models_1.Models.DescribeSimpleGroupsResponse;
const ContainerGroupDetail = models_1.Models.ContainerGroupDetail;
const DeletePublicConfigRequest = models_1.Models.DeletePublicConfigRequest;
const DeleteNamespaceResponse = models_1.Models.DeleteNamespaceResponse;
const CreateMicroserviceRequest = models_1.Models.CreateMicroserviceRequest;
const DescribePkgsRequest = models_1.Models.DescribePkgsRequest;
const ReleaseConfigResponse = models_1.Models.ReleaseConfigResponse;
const RemoveInstancesRequest = models_1.Models.RemoveInstancesRequest;
const ShrinkInstancesRequest = models_1.Models.ShrinkInstancesRequest;
const ShrinkInstancesResponse = models_1.Models.ShrinkInstancesResponse;
const DeleteImageTagsRequest = models_1.Models.DeleteImageTagsRequest;
const DescribeRepositoriesRequest = models_1.Models.DescribeRepositoriesRequest;
const DescribeApplicationAttributeRequest = models_1.Models.DescribeApplicationAttributeRequest;
const DescribePodInstancesRequest = models_1.Models.DescribePodInstancesRequest;
const TsfPageSimpleGroup = models_1.Models.TsfPageSimpleGroup;
const DescribeConfigsRequest = models_1.Models.DescribeConfigsRequest;
const OperationInfo = models_1.Models.OperationInfo;
const AddClusterInstancesRequest = models_1.Models.AddClusterInstancesRequest;
const DescribePublicConfigResponse = models_1.Models.DescribePublicConfigResponse;
const RollbackConfigRequest = models_1.Models.RollbackConfigRequest;
const DeleteConfigResponse = models_1.Models.DeleteConfigResponse;
const TsfPageNamespace = models_1.Models.TsfPageNamespace;
const DescribeContainerGroupsResponse = models_1.Models.DescribeContainerGroupsResponse;
const DescribeSimpleApplicationsRequest = models_1.Models.DescribeSimpleApplicationsRequest;
const DescribeConfigResponse = models_1.Models.DescribeConfigResponse;
const DescribeSimpleNamespacesRequest = models_1.Models.DescribeSimpleNamespacesRequest;
const LaneRule = models_1.Models.LaneRule;
const MsInstance = models_1.Models.MsInstance;
const ExpandGroupResponse = models_1.Models.ExpandGroupResponse;
const DescribeServerlessGroupsResponse = models_1.Models.DescribeServerlessGroupsResponse;
const DescribePublicConfigsResponse = models_1.Models.DescribePublicConfigsResponse;
const ModifyLaneRuleRequest = models_1.Models.ModifyLaneRuleRequest;
const AddInstancesResponse = models_1.Models.AddInstancesResponse;
const DeleteApplicationRequest = models_1.Models.DeleteApplicationRequest;
const RevocationPublicConfigRequest = models_1.Models.RevocationPublicConfigRequest;
const DescribeSimpleClustersRequest = models_1.Models.DescribeSimpleClustersRequest;
const StartContainerGroupRequest = models_1.Models.StartContainerGroupRequest;
const DeleteConfigRequest = models_1.Models.DeleteConfigRequest;
const DescribePublicConfigReleaseLogsResponse = models_1.Models.DescribePublicConfigReleaseLogsResponse;
const HealthCheckSettings = models_1.Models.HealthCheckSettings;
const ServiceSetting = models_1.Models.ServiceSetting;
const ApiResponseDescr = models_1.Models.ApiResponseDescr;
const DeployServerlessGroupRequest = models_1.Models.DeployServerlessGroupRequest;
const Config = models_1.Models.Config;
const CreateClusterResponse = models_1.Models.CreateClusterResponse;
const DeletePublicConfigResponse = models_1.Models.DeletePublicConfigResponse;
const ApiRequestDescr = models_1.Models.ApiRequestDescr;
const CreateMicroserviceResponse = models_1.Models.CreateMicroserviceResponse;
const ApiVersionArray = models_1.Models.ApiVersionArray;
const CreateClusterRequest = models_1.Models.CreateClusterRequest;
const StopGroupRequest = models_1.Models.StopGroupRequest;
const ConfigReleaseLog = models_1.Models.ConfigReleaseLog;
const ShrinkGroupResponse = models_1.Models.ShrinkGroupResponse;
const CosUploadInfo = models_1.Models.CosUploadInfo;
const ConfigRelease = models_1.Models.ConfigRelease;
const DeleteContainerGroupRequest = models_1.Models.DeleteContainerGroupRequest;
const DescribeContainerGroupDetailRequest = models_1.Models.DescribeContainerGroupDetailRequest;
const ReleaseConfigRequest = models_1.Models.ReleaseConfigRequest;
const CreateConfigRequest = models_1.Models.CreateConfigRequest;
const MsApiArray = models_1.Models.MsApiArray;
const CreateNamespaceRequest = models_1.Models.CreateNamespaceRequest;
const DescribeApiDetailRequest = models_1.Models.DescribeApiDetailRequest;
const DescribeUploadInfoRequest = models_1.Models.DescribeUploadInfoRequest;
const DescribeClusterInstancesRequest = models_1.Models.DescribeClusterInstancesRequest;
const StopContainerGroupRequest = models_1.Models.StopContainerGroupRequest;
const DescribeRepositoryRequest = models_1.Models.DescribeRepositoryRequest;
const PropertyField = models_1.Models.PropertyField;
const TsfPageApplication = models_1.Models.TsfPageApplication;
const DescribeGroupRequest = models_1.Models.DescribeGroupRequest;
const ImageTagsResult = models_1.Models.ImageTagsResult;
const RepositoryInfo = models_1.Models.RepositoryInfo;
const StopContainerGroupResponse = models_1.Models.StopContainerGroupResponse;
const CreateLaneResponse = models_1.Models.CreateLaneResponse;
const DescribeServerlessGroupRequest = models_1.Models.DescribeServerlessGroupRequest;
const TsfPageVmGroup = models_1.Models.TsfPageVmGroup;
const AddInstanceResult = models_1.Models.AddInstanceResult;
const DescribePkgsResponse = models_1.Models.DescribePkgsResponse;
const DescribeSimpleNamespacesResponse = models_1.Models.DescribeSimpleNamespacesResponse;
const ApplicationAttribute = models_1.Models.ApplicationAttribute;
const DeleteImageTag = models_1.Models.DeleteImageTag;
const DeletePkgsResponse = models_1.Models.DeletePkgsResponse;
const DescribeConfigReleasesResponse = models_1.Models.DescribeConfigReleasesResponse;
const Cluster = models_1.Models.Cluster;
const ModifyMicroserviceResponse = models_1.Models.ModifyMicroserviceResponse;
const DescribeMicroservicesResponse = models_1.Models.DescribeMicroservicesResponse;
const DescribeDownloadInfoResponse = models_1.Models.DescribeDownloadInfoResponse;
const GroupPodResult = models_1.Models.GroupPodResult;
const DescribeApplicationRequest = models_1.Models.DescribeApplicationRequest;
const Microservice = models_1.Models.Microservice;
const TsfPageConfigReleaseLog = models_1.Models.TsfPageConfigReleaseLog;
const DescribePublicConfigRequest = models_1.Models.DescribePublicConfigRequest;
const ApplicationForPage = models_1.Models.ApplicationForPage;
const StartGroupResponse = models_1.Models.StartGroupResponse;
const DeployContainerGroupResponse = models_1.Models.DeployContainerGroupResponse;
const CreatePublicConfigResponse = models_1.Models.CreatePublicConfigResponse;
const DeleteMicroserviceResponse = models_1.Models.DeleteMicroserviceResponse;
const DescribeLanesResponse = models_1.Models.DescribeLanesResponse;
const ContainGroupResult = models_1.Models.ContainGroupResult;
const ProtocolPort = models_1.Models.ProtocolPort;
const LaneRules = models_1.Models.LaneRules;
const DescribeReleasedConfigResponse = models_1.Models.DescribeReleasedConfigResponse;
const DescribeMicroservicesRequest = models_1.Models.DescribeMicroservicesRequest;
const ShrinkGroupRequest = models_1.Models.ShrinkGroupRequest;
const TsfPageSimpleApplication = models_1.Models.TsfPageSimpleApplication;
const CreateConfigResponse = models_1.Models.CreateConfigResponse;
const AddClusterInstancesResponse = models_1.Models.AddClusterInstancesResponse;
const PkgInfo = models_1.Models.PkgInfo;
const RepositoryList = models_1.Models.RepositoryList;
const CreateLaneRuleResponse = models_1.Models.CreateLaneRuleResponse;
const DescribeConfigReleaseLogsRequest = models_1.Models.DescribeConfigReleaseLogsRequest;
const DescribeApiDetailResponse = models_1.Models.DescribeApiDetailResponse;
const DescribeGroupsRequest = models_1.Models.DescribeGroupsRequest;
const ModifyContainerGroupRequest = models_1.Models.ModifyContainerGroupRequest;
const UpdateRepositoryResponse = models_1.Models.UpdateRepositoryResponse;
const TsfPageMicroservice = models_1.Models.TsfPageMicroservice;
const DescribePublicConfigsRequest = models_1.Models.DescribePublicConfigsRequest;
const AddInstancesRequest = models_1.Models.AddInstancesRequest;
const StartGroupRequest = models_1.Models.StartGroupRequest;
const LaneRuleTag = models_1.Models.LaneRuleTag;
const RollbackConfigResponse = models_1.Models.RollbackConfigResponse;
const DescribeApplicationsRequest = models_1.Models.DescribeApplicationsRequest;
const OperationInfoDetail = models_1.Models.OperationInfoDetail;
const CreateRepositoryRequest = models_1.Models.CreateRepositoryRequest;
const CreateApplicationRequest = models_1.Models.CreateApplicationRequest;
const DescribePublicConfigReleasesRequest = models_1.Models.DescribePublicConfigReleasesRequest;
const SimpleGroup = models_1.Models.SimpleGroup;
const DeleteNamespaceRequest = models_1.Models.DeleteNamespaceRequest;
const PkgBind = models_1.Models.PkgBind;
const DescribeLaneRulesRequest = models_1.Models.DescribeLaneRulesRequest;
const DeployGroupRequest = models_1.Models.DeployGroupRequest;
const LaneInfos = models_1.Models.LaneInfos;
const CreateServerlessGroupRequest = models_1.Models.CreateServerlessGroupRequest;
const DescribeMicroserviceResponse = models_1.Models.DescribeMicroserviceResponse;
const DeleteGroupResponse = models_1.Models.DeleteGroupResponse;
const CreateRepositoryResponse = models_1.Models.CreateRepositoryResponse;
const CreateLaneRuleRequest = models_1.Models.CreateLaneRuleRequest;
const DescribeServerlessGroupsRequest = models_1.Models.DescribeServerlessGroupsRequest;
const DeployContainerGroupRequest = models_1.Models.DeployContainerGroupRequest;
const CosDownloadInfo = models_1.Models.CosDownloadInfo;
const DeletePkgsRequest = models_1.Models.DeletePkgsRequest;
const TsfPageInstance = models_1.Models.TsfPageInstance;
const ServerlessGroupPage = models_1.Models.ServerlessGroupPage;
const DescribeConfigSummaryResponse = models_1.Models.DescribeConfigSummaryResponse;
const CreateContainGroupRequest = models_1.Models.CreateContainGroupRequest;
const ContainGroup = models_1.Models.ContainGroup;
const DescribePublicConfigReleasesResponse = models_1.Models.DescribePublicConfigReleasesResponse;
const DescribeLaneRulesResponse = models_1.Models.DescribeLaneRulesResponse;
const PkgList = models_1.Models.PkgList;
const CreateApplicationResponse = models_1.Models.CreateApplicationResponse;
const DeleteRepositoryRequest = models_1.Models.DeleteRepositoryRequest;
const DescribeConfigSummaryRequest = models_1.Models.DescribeConfigSummaryRequest;
const DeleteLaneRequest = models_1.Models.DeleteLaneRequest;
const DeployGroupResponse = models_1.Models.DeployGroupResponse;
const ModifyContainerGroupResponse = models_1.Models.ModifyContainerGroupResponse;
const ReleasePublicConfigResponse = models_1.Models.ReleasePublicConfigResponse;
const ReleasePublicConfigRequest = models_1.Models.ReleasePublicConfigRequest;
const DescribeServerlessGroupResponse = models_1.Models.DescribeServerlessGroupResponse;
const LaneGroup = models_1.Models.LaneGroup;
const TaskId = models_1.Models.TaskId;
const TsfPageConfig = models_1.Models.TsfPageConfig;
const RevocationPublicConfigResponse = models_1.Models.RevocationPublicConfigResponse;
const DescribeGroupInstancesRequest = models_1.Models.DescribeGroupInstancesRequest;
const CreateGroupResponse = models_1.Models.CreateGroupResponse;
/**
 * tsf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tsf.tencentcloudapi.com", "2018-03-26", credential, region, profile);
    }
    /**
     * 删除公共配置项
     * @param {DeletePublicConfigRequest} req
     * @param {function(string, DeletePublicConfigResponse):void} cb
     * @public
     */
    DeletePublicConfig(req, cb) {
        const resp = new DeletePublicConfigResponse();
        this.request("DeletePublicConfig", req, resp, cb);
    }
    /**
     * 创建集群
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        const resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }
    /**
     * 修改容器部署组实例数
     * @param {ModifyContainerReplicasRequest} req
     * @param {function(string, ModifyContainerReplicasResponse):void} cb
     * @public
     */
    ModifyContainerReplicas(req, cb) {
        const resp = new ModifyContainerReplicasResponse();
        this.request("ModifyContainerReplicas", req, resp, cb);
    }
    /**
     * 虚拟机部署组下线实例
     * @param {ShrinkInstancesRequest} req
     * @param {function(string, ShrinkInstancesResponse):void} cb
     * @public
     */
    ShrinkInstances(req, cb) {
        const resp = new ShrinkInstancesResponse();
        this.request("ShrinkInstances", req, resp, cb);
    }
    /**
     * 获取部署组实例列表
     * @param {DescribePodInstancesRequest} req
     * @param {function(string, DescribePodInstancesResponse):void} cb
     * @public
     */
    DescribePodInstances(req, cb) {
        const resp = new DescribePodInstancesResponse();
        this.request("DescribePodInstances", req, resp, cb);
    }
    /**
     * 创建命名空间
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        const resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }
    /**
     * 添加云主机节点至TSF集群
     * @param {AddClusterInstancesRequest} req
     * @param {function(string, AddClusterInstancesResponse):void} cb
     * @public
     */
    AddClusterInstances(req, cb) {
        const resp = new AddClusterInstancesResponse();
        this.request("AddClusterInstances", req, resp, cb);
    }
    /**
     * 查询公共配置汇总列表
     * @param {DescribePublicConfigSummaryRequest} req
     * @param {function(string, DescribePublicConfigSummaryResponse):void} cb
     * @public
     */
    DescribePublicConfigSummary(req, cb) {
        const resp = new DescribePublicConfigSummaryResponse();
        this.request("DescribePublicConfigSummary", req, resp, cb);
    }
    /**
     * 容器部署组列表
     * @param {DescribeContainerGroupsRequest} req
     * @param {function(string, DescribeContainerGroupsResponse):void} cb
     * @public
     */
    DescribeContainerGroups(req, cb) {
        const resp = new DescribeContainerGroupsResponse();
        this.request("DescribeContainerGroups", req, resp, cb);
    }
    /**
     * 查询配置项列表
     * @param {DescribeConfigsRequest} req
     * @param {function(string, DescribeConfigsResponse):void} cb
     * @public
     */
    DescribeConfigs(req, cb) {
        const resp = new DescribeConfigsResponse();
        this.request("DescribeConfigs", req, resp, cb);
    }
    /**
     * 查询配置
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        const resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }
    /**
     *  容器部署组详情
     * @param {DescribeContainerGroupDetailRequest} req
     * @param {function(string, DescribeContainerGroupDetailResponse):void} cb
     * @public
     */
    DescribeContainerGroupDetail(req, cb) {
        const resp = new DescribeContainerGroupDetailResponse();
        this.request("DescribeContainerGroupDetail", req, resp, cb);
    }
    /**
     * 回滚配置
     * @param {RollbackConfigRequest} req
     * @param {function(string, RollbackConfigResponse):void} cb
     * @public
     */
    RollbackConfig(req, cb) {
        const resp = new RollbackConfigResponse();
        this.request("RollbackConfig", req, resp, cb);
    }
    /**
     * 镜像版本列表
     * @param {DescribeImageTagsRequest} req
     * @param {function(string, DescribeImageTagsResponse):void} cb
     * @public
     */
    DescribeImageTags(req, cb) {
        const resp = new DescribeImageTagsResponse();
        this.request("DescribeImageTags", req, resp, cb);
    }
    /**
     * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
调用此接口完成后，才标志上传包流程结束。
     * @param {ModifyUploadInfoRequest} req
     * @param {function(string, ModifyUploadInfoResponse):void} cb
     * @public
     */
    ModifyUploadInfo(req, cb) {
        const resp = new ModifyUploadInfoResponse();
        this.request("ModifyUploadInfo", req, resp, cb);
    }
    /**
     * 查询简单集群列表
     * @param {DescribeSimpleClustersRequest} req
     * @param {function(string, DescribeSimpleClustersResponse):void} cb
     * @public
     */
    DescribeSimpleClusters(req, cb) {
        const resp = new DescribeSimpleClustersResponse();
        this.request("DescribeSimpleClusters", req, resp, cb);
    }
    /**
     * 查询API详情
     * @param {DescribeApiDetailRequest} req
     * @param {function(string, DescribeApiDetailResponse):void} cb
     * @public
     */
    DescribeApiDetail(req, cb) {
        const resp = new DescribeApiDetailResponse();
        this.request("DescribeApiDetail", req, resp, cb);
    }
    /**
     * 部署Serverless应用
     * @param {DeployServerlessGroupRequest} req
     * @param {function(string, DeployServerlessGroupResponse):void} cb
     * @public
     */
    DeployServerlessGroup(req, cb) {
        const resp = new DeployServerlessGroupResponse();
        this.request("DeployServerlessGroup", req, resp, cb);
    }
    /**
     * 创建配置项
     * @param {CreateConfigRequest} req
     * @param {function(string, CreateConfigResponse):void} cb
     * @public
     */
    CreateConfig(req, cb) {
        const resp = new CreateConfigResponse();
        this.request("CreateConfig", req, resp, cb);
    }
    /**
     * 撤回已发布的公共配置
     * @param {RevocationPublicConfigRequest} req
     * @param {function(string, RevocationPublicConfigResponse):void} cb
     * @public
     */
    RevocationPublicConfig(req, cb) {
        const resp = new RevocationPublicConfigResponse();
        this.request("RevocationPublicConfig", req, resp, cb);
    }
    /**
     * 批量删除镜像版本
     * @param {DeleteImageTagsRequest} req
     * @param {function(string, DeleteImageTagsResponse):void} cb
     * @public
     */
    DeleteImageTags(req, cb) {
        const resp = new DeleteImageTagsResponse();
        this.request("DeleteImageTags", req, resp, cb);
    }
    /**
     * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     * @param {DescribeDownloadInfoRequest} req
     * @param {function(string, DescribeDownloadInfoResponse):void} cb
     * @public
     */
    DescribeDownloadInfo(req, cb) {
        const resp = new DescribeDownloadInfoResponse();
        this.request("DescribeDownloadInfo", req, resp, cb);
    }
    /**
     * 获取应用列表
     * @param {DescribeApplicationsRequest} req
     * @param {function(string, DescribeApplicationsResponse):void} cb
     * @public
     */
    DescribeApplications(req, cb) {
        const resp = new DescribeApplicationsResponse();
        this.request("DescribeApplications", req, resp, cb);
    }
    /**
     * 更新仓库信息
     * @param {UpdateRepositoryRequest} req
     * @param {function(string, UpdateRepositoryResponse):void} cb
     * @public
     */
    UpdateRepository(req, cb) {
        const resp = new UpdateRepositoryResponse();
        this.request("UpdateRepository", req, resp, cb);
    }
    /**
     * 获取应用详情
     * @param {DescribeApplicationRequest} req
     * @param {function(string, DescribeApplicationResponse):void} cb
     * @public
     */
    DescribeApplication(req, cb) {
        const resp = new DescribeApplicationResponse();
        this.request("DescribeApplication", req, resp, cb);
    }
    /**
     * 查询公共配置（单条）
     * @param {DescribePublicConfigRequest} req
     * @param {function(string, DescribePublicConfigResponse):void} cb
     * @public
     */
    DescribePublicConfig(req, cb) {
        const resp = new DescribePublicConfigResponse();
        this.request("DescribePublicConfig", req, resp, cb);
    }
    /**
     * 查询泳道列表
     * @param {DescribeLanesRequest} req
     * @param {function(string, DescribeLanesResponse):void} cb
     * @public
     */
    DescribeLanes(req, cb) {
        const resp = new DescribeLanesResponse();
        this.request("DescribeLanes", req, resp, cb);
    }
    /**
     * 查询简单命名空间列表
     * @param {DescribeSimpleNamespacesRequest} req
     * @param {function(string, DescribeSimpleNamespacesResponse):void} cb
     * @public
     */
    DescribeSimpleNamespaces(req, cb) {
        const resp = new DescribeSimpleNamespacesResponse();
        this.request("DescribeSimpleNamespaces", req, resp, cb);
    }
    /**
     * 删除微服务
     * @param {DeleteMicroserviceRequest} req
     * @param {function(string, DeleteMicroserviceResponse):void} cb
     * @public
     */
    DeleteMicroservice(req, cb) {
        const resp = new DeleteMicroserviceResponse();
        this.request("DeleteMicroservice", req, resp, cb);
    }
    /**
     * 停止容器部署组
     * @param {StopContainerGroupRequest} req
     * @param {function(string, StopContainerGroupResponse):void} cb
     * @public
     */
    StopContainerGroup(req, cb) {
        const resp = new StopContainerGroupResponse();
        this.request("StopContainerGroup", req, resp, cb);
    }
    /**
     * 创建泳道规则
     * @param {CreateLaneRuleRequest} req
     * @param {function(string, CreateLaneRuleResponse):void} cb
     * @public
     */
    CreateLaneRule(req, cb) {
        const resp = new CreateLaneRuleResponse();
        this.request("CreateLaneRule", req, resp, cb);
    }
    /**
     * 删除容器部署组
     * @param {DeleteContainerGroupRequest} req
     * @param {function(string, DeleteContainerGroupResponse):void} cb
     * @public
     */
    DeleteContainerGroup(req, cb) {
        const resp = new DeleteContainerGroupResponse();
        this.request("DeleteContainerGroup", req, resp, cb);
    }
    /**
     * 发布配置
     * @param {ReleaseConfigRequest} req
     * @param {function(string, ReleaseConfigResponse):void} cb
     * @public
     */
    ReleaseConfig(req, cb) {
        const resp = new ReleaseConfigResponse();
        this.request("ReleaseConfig", req, resp, cb);
    }
    /**
     * 获取虚拟机部署组列表
     * @param {DescribeGroupsRequest} req
     * @param {function(string, DescribeGroupsResponse):void} cb
     * @public
     */
    DescribeGroups(req, cb) {
        const resp = new DescribeGroupsResponse();
        this.request("DescribeGroups", req, resp, cb);
    }
    /**
     * 查询仓库列表
     * @param {DescribeRepositoriesRequest} req
     * @param {function(string, DescribeRepositoriesResponse):void} cb
     * @public
     */
    DescribeRepositories(req, cb) {
        const resp = new DescribeRepositoriesResponse();
        this.request("DescribeRepositories", req, resp, cb);
    }
    /**
     * 创建仓库
     * @param {CreateRepositoryRequest} req
     * @param {function(string, CreateRepositoryResponse):void} cb
     * @public
     */
    CreateRepository(req, cb) {
        const resp = new CreateRepositoryResponse();
        this.request("CreateRepository", req, resp, cb);
    }
    /**
     * 查询集群实例
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        const resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }
    /**
     * 创建公共配置项
     * @param {CreatePublicConfigRequest} req
     * @param {function(string, CreatePublicConfigResponse):void} cb
     * @public
     */
    CreatePublicConfig(req, cb) {
        const resp = new CreatePublicConfigResponse();
        this.request("CreatePublicConfig", req, resp, cb);
    }
    /**
     * 查询简单部署组列表
     * @param {DescribeSimpleGroupsRequest} req
     * @param {function(string, DescribeSimpleGroupsResponse):void} cb
     * @public
     */
    DescribeSimpleGroups(req, cb) {
        const resp = new DescribeSimpleGroupsResponse();
        this.request("DescribeSimpleGroups", req, resp, cb);
    }
    /**
     * 创建Serverless部署组
     * @param {CreateServerlessGroupRequest} req
     * @param {function(string, CreateServerlessGroupResponse):void} cb
     * @public
     */
    CreateServerlessGroup(req, cb) {
        const resp = new CreateServerlessGroupResponse();
        this.request("CreateServerlessGroup", req, resp, cb);
    }
    /**
     * 添加云主机节点至TSF集群
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        const resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }
    /**
     * 查询配置汇总列表
     * @param {DescribeConfigSummaryRequest} req
     * @param {function(string, DescribeConfigSummaryResponse):void} cb
     * @public
     */
    DescribeConfigSummary(req, cb) {
        const resp = new DescribeConfigSummaryResponse();
        this.request("DescribeConfigSummary", req, resp, cb);
    }
    /**
     * 无
     * @param {DescribePkgsRequest} req
     * @param {function(string, DescribePkgsResponse):void} cb
     * @public
     */
    DescribePkgs(req, cb) {
        const resp = new DescribePkgsResponse();
        this.request("DescribePkgs", req, resp, cb);
    }
    /**
     * 查询简单应用列表
     * @param {DescribeSimpleApplicationsRequest} req
     * @param {function(string, DescribeSimpleApplicationsResponse):void} cb
     * @public
     */
    DescribeSimpleApplications(req, cb) {
        const resp = new DescribeSimpleApplicationsResponse();
        this.request("DescribeSimpleApplications", req, resp, cb);
    }
    /**
     * 删除容器部署组
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        const resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }
    /**
     * 查询Serverless部署组列表
     * @param {DescribeServerlessGroupsRequest} req
     * @param {function(string, DescribeServerlessGroupsResponse):void} cb
     * @public
     */
    DescribeServerlessGroups(req, cb) {
        const resp = new DescribeServerlessGroupsResponse();
        this.request("DescribeServerlessGroups", req, resp, cb);
    }
    /**
     * 创建虚拟机部署组
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        const resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }
    /**
     * 查询虚拟机部署组云主机列表
     * @param {DescribeGroupInstancesRequest} req
     * @param {function(string, DescribeGroupInstancesResponse):void} cb
     * @public
     */
    DescribeGroupInstances(req, cb) {
        const resp = new DescribeGroupInstancesResponse();
        this.request("DescribeGroupInstances", req, resp, cb);
    }
    /**
     * 从软件仓库批量删除程序包。
一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
     * @param {DeletePkgsRequest} req
     * @param {function(string, DeletePkgsResponse):void} cb
     * @public
     */
    DeletePkgs(req, cb) {
        const resp = new DeletePkgsResponse();
        this.request("DeletePkgs", req, resp, cb);
    }
    /**
     * 查询公共配置项列表
     * @param {DescribePublicConfigsRequest} req
     * @param {function(string, DescribePublicConfigsResponse):void} cb
     * @public
     */
    DescribePublicConfigs(req, cb) {
        const resp = new DescribePublicConfigsResponse();
        this.request("DescribePublicConfigs", req, resp, cb);
    }
    /**
     * 启动容器部署组
     * @param {StartContainerGroupRequest} req
     * @param {function(string, StartContainerGroupResponse):void} cb
     * @public
     */
    StartContainerGroup(req, cb) {
        const resp = new StartContainerGroupResponse();
        this.request("StartContainerGroup", req, resp, cb);
    }
    /**
     * 从 TSF 集群中批量移除云主机节点
     * @param {RemoveInstancesRequest} req
     * @param {function(string, RemoveInstancesResponse):void} cb
     * @public
     */
    RemoveInstances(req, cb) {
        const resp = new RemoveInstancesResponse();
        this.request("RemoveInstances", req, resp, cb);
    }
    /**
     * 虚拟机部署组添加实例
     * @param {ExpandGroupRequest} req
     * @param {function(string, ExpandGroupResponse):void} cb
     * @public
     */
    ExpandGroup(req, cb) {
        const resp = new ExpandGroupResponse();
        this.request("ExpandGroup", req, resp, cb);
    }
    /**
     * 删除泳道
     * @param {DeleteLaneRequest} req
     * @param {function(string, DeleteLaneResponse):void} cb
     * @public
     */
    DeleteLane(req, cb) {
        const resp = new DeleteLaneResponse();
        this.request("DeleteLane", req, resp, cb);
    }
    /**
     * 查询配置发布信息
     * @param {DescribeConfigReleasesRequest} req
     * @param {function(string, DescribeConfigReleasesResponse):void} cb
     * @public
     */
    DescribeConfigReleases(req, cb) {
        const resp = new DescribeConfigReleasesResponse();
        this.request("DescribeConfigReleases", req, resp, cb);
    }
    /**
     * 创建泳道
     * @param {CreateLaneRequest} req
     * @param {function(string, CreateLaneResponse):void} cb
     * @public
     */
    CreateLane(req, cb) {
        const resp = new CreateLaneResponse();
        this.request("CreateLane", req, resp, cb);
    }
    /**
     * 部署虚拟机部署组应用
     * @param {DeployGroupRequest} req
     * @param {function(string, DeployGroupResponse):void} cb
     * @public
     */
    DeployGroup(req, cb) {
        const resp = new DeployGroupResponse();
        this.request("DeployGroup", req, resp, cb);
    }
    /**
     * 更新泳道信息
     * @param {ModifyLaneRequest} req
     * @param {function(string, ModifyLaneResponse):void} cb
     * @public
     */
    ModifyLane(req, cb) {
        const resp = new ModifyLaneResponse();
        this.request("ModifyLane", req, resp, cb);
    }
    /**
     * 新增微服务
     * @param {CreateMicroserviceRequest} req
     * @param {function(string, CreateMicroserviceResponse):void} cb
     * @public
     */
    CreateMicroservice(req, cb) {
        const resp = new CreateMicroserviceResponse();
        this.request("CreateMicroservice", req, resp, cb);
    }
    /**
     * 修改微服务详情
     * @param {ModifyMicroserviceRequest} req
     * @param {function(string, ModifyMicroserviceResponse):void} cb
     * @public
     */
    ModifyMicroservice(req, cb) {
        const resp = new ModifyMicroserviceResponse();
        this.request("ModifyMicroservice", req, resp, cb);
    }
    /**
     * 查询服务API列表
     * @param {DescribeMsApiListRequest} req
     * @param {function(string, DescribeMsApiListResponse):void} cb
     * @public
     */
    DescribeMsApiList(req, cb) {
        const resp = new DescribeMsApiListResponse();
        this.request("DescribeMsApiList", req, resp, cb);
    }
    /**
     * 创建应用
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        const resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
    }
    /**
     * 查询公共配置发布历史
     * @param {DescribePublicConfigReleaseLogsRequest} req
     * @param {function(string, DescribePublicConfigReleaseLogsResponse):void} cb
     * @public
     */
    DescribePublicConfigReleaseLogs(req, cb) {
        const resp = new DescribePublicConfigReleaseLogsResponse();
        this.request("DescribePublicConfigReleaseLogs", req, resp, cb);
    }
    /**
     * 查询配置发布历史
     * @param {DescribeConfigReleaseLogsRequest} req
     * @param {function(string, DescribeConfigReleaseLogsResponse):void} cb
     * @public
     */
    DescribeConfigReleaseLogs(req, cb) {
        const resp = new DescribeConfigReleaseLogsResponse();
        this.request("DescribeConfigReleaseLogs", req, resp, cb);
    }
    /**
     * 查询微服务详情
     * @param {DescribeMicroserviceRequest} req
     * @param {function(string, DescribeMicroserviceResponse):void} cb
     * @public
     */
    DescribeMicroservice(req, cb) {
        const resp = new DescribeMicroserviceResponse();
        this.request("DescribeMicroservice", req, resp, cb);
    }
    /**
     * 删除Serverless部署组
     * @param {DeleteServerlessGroupRequest} req
     * @param {function(string, DeleteServerlessGroupResponse):void} cb
     * @public
     */
    DeleteServerlessGroup(req, cb) {
        const resp = new DeleteServerlessGroupResponse();
        this.request("DeleteServerlessGroup", req, resp, cb);
    }
    /**
     * 删除仓库
     * @param {DeleteRepositoryRequest} req
     * @param {function(string, DeleteRepositoryResponse):void} cb
     * @public
     */
    DeleteRepository(req, cb) {
        const resp = new DeleteRepositoryResponse();
        this.request("DeleteRepository", req, resp, cb);
    }
    /**
     * 部署容器应用
     * @param {DeployContainerGroupRequest} req
     * @param {function(string, DeployContainerGroupResponse):void} cb
     * @public
     */
    DeployContainerGroup(req, cb) {
        const resp = new DeployContainerGroupResponse();
        this.request("DeployContainerGroup", req, resp, cb);
    }
    /**
     * 删除应用
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        const resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
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
     * 删除配置项
     * @param {DeleteConfigRequest} req
     * @param {function(string, DeleteConfigResponse):void} cb
     * @public
     */
    DeleteConfig(req, cb) {
        const resp = new DeleteConfigResponse();
        this.request("DeleteConfig", req, resp, cb);
    }
    /**
     * 发布公共配置
     * @param {ReleasePublicConfigRequest} req
     * @param {function(string, ReleasePublicConfigResponse):void} cb
     * @public
     */
    ReleasePublicConfig(req, cb) {
        const resp = new ReleasePublicConfigResponse();
        this.request("ReleasePublicConfig", req, resp, cb);
    }
    /**
     * 获取微服务列表
     * @param {DescribeMicroservicesRequest} req
     * @param {function(string, DescribeMicroservicesResponse):void} cb
     * @public
     */
    DescribeMicroservices(req, cb) {
        const resp = new DescribeMicroservicesResponse();
        this.request("DescribeMicroservices", req, resp, cb);
    }
    /**
     * 查询API 版本
     * @param {DescribeApiVersionsRequest} req
     * @param {function(string, DescribeApiVersionsResponse):void} cb
     * @public
     */
    DescribeApiVersions(req, cb) {
        const resp = new DescribeApiVersionsResponse();
        this.request("DescribeApiVersions", req, resp, cb);
    }
    /**
     * 查询虚拟机部署组详情
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        const resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }
    /**
     * 创建容器部署组
     * @param {CreateContainGroupRequest} req
     * @param {function(string, CreateContainGroupResponse):void} cb
     * @public
     */
    CreateContainGroup(req, cb) {
        const resp = new CreateContainGroupResponse();
        this.request("CreateContainGroup", req, resp, cb);
    }
    /**
     * 查询Serverless部署组明细
     * @param {DescribeServerlessGroupRequest} req
     * @param {function(string, DescribeServerlessGroupResponse):void} cb
     * @public
     */
    DescribeServerlessGroup(req, cb) {
        const resp = new DescribeServerlessGroupResponse();
        this.request("DescribeServerlessGroup", req, resp, cb);
    }
    /**
     * 查询仓库信息
     * @param {DescribeRepositoryRequest} req
     * @param {function(string, DescribeRepositoryResponse):void} cb
     * @public
     */
    DescribeRepository(req, cb) {
        const resp = new DescribeRepositoryResponse();
        this.request("DescribeRepository", req, resp, cb);
    }
    /**
     * 获取应用列表其它字段，如实例数量信息等
     * @param {DescribeApplicationAttributeRequest} req
     * @param {function(string, DescribeApplicationAttributeResponse):void} cb
     * @public
     */
    DescribeApplicationAttribute(req, cb) {
        const resp = new DescribeApplicationAttributeResponse();
        this.request("DescribeApplicationAttribute", req, resp, cb);
    }
    /**
     * 撤回已发布的配置
     * @param {RevocationConfigRequest} req
     * @param {function(string, RevocationConfigResponse):void} cb
     * @public
     */
    RevocationConfig(req, cb) {
        const resp = new RevocationConfigResponse();
        this.request("RevocationConfig", req, resp, cb);
    }
    /**
     * 查询泳道规则列表
     * @param {DescribeLaneRulesRequest} req
     * @param {function(string, DescribeLaneRulesResponse):void} cb
     * @public
     */
    DescribeLaneRules(req, cb) {
        const resp = new DescribeLaneRulesResponse();
        this.request("DescribeLaneRules", req, resp, cb);
    }
    /**
     * 更新泳道规则
     * @param {ModifyLaneRuleRequest} req
     * @param {function(string, ModifyLaneRuleResponse):void} cb
     * @public
     */
    ModifyLaneRule(req, cb) {
        const resp = new ModifyLaneRuleResponse();
        this.request("ModifyLaneRule", req, resp, cb);
    }
    /**
     * 查询group发布的配置
     * @param {DescribeReleasedConfigRequest} req
     * @param {function(string, DescribeReleasedConfigResponse):void} cb
     * @public
     */
    DescribeReleasedConfig(req, cb) {
        const resp = new DescribeReleasedConfigResponse();
        this.request("DescribeReleasedConfig", req, resp, cb);
    }
    /**
     * 查询公共配置发布信息
     * @param {DescribePublicConfigReleasesRequest} req
     * @param {function(string, DescribePublicConfigReleasesResponse):void} cb
     * @public
     */
    DescribePublicConfigReleases(req, cb) {
        const resp = new DescribePublicConfigReleasesResponse();
        this.request("DescribePublicConfigReleases", req, resp, cb);
    }
    /**
     * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     * @param {DescribeUploadInfoRequest} req
     * @param {function(string, DescribeUploadInfoResponse):void} cb
     * @public
     */
    DescribeUploadInfo(req, cb) {
        const resp = new DescribeUploadInfoResponse();
        this.request("DescribeUploadInfo", req, resp, cb);
    }
    /**
     * 停止虚拟机部署组
     * @param {StopGroupRequest} req
     * @param {function(string, StopGroupResponse):void} cb
     * @public
     */
    StopGroup(req, cb) {
        const resp = new StopGroupResponse();
        this.request("StopGroup", req, resp, cb);
    }
    /**
     * 下线部署组所有机器实例
     * @param {ShrinkGroupRequest} req
     * @param {function(string, ShrinkGroupResponse):void} cb
     * @public
     */
    ShrinkGroup(req, cb) {
        const resp = new ShrinkGroupResponse();
        this.request("ShrinkGroup", req, resp, cb);
    }
    /**
     * 启动分组
     * @param {StartGroupRequest} req
     * @param {function(string, StartGroupResponse):void} cb
     * @public
     */
    StartGroup(req, cb) {
        const resp = new StartGroupResponse();
        this.request("StartGroup", req, resp, cb);
    }
    /**
     * 修改容器部署组
     * @param {ModifyContainerGroupRequest} req
     * @param {function(string, ModifyContainerGroupResponse):void} cb
     * @public
     */
    ModifyContainerGroup(req, cb) {
        const resp = new ModifyContainerGroupResponse();
        this.request("ModifyContainerGroup", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tsf_client.js.map