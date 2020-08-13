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
const DescribeClusterEndpointVipStatusRequest = models_1.Models.DescribeClusterEndpointVipStatusRequest;
const DescribeClusterSecurityResponse = models_1.Models.DescribeClusterSecurityResponse;
const DescribeClusterSecurityRequest = models_1.Models.DescribeClusterSecurityRequest;
const DeleteClusterInstancesResponse = models_1.Models.DeleteClusterInstancesResponse;
const CreateClusterRouteRequest = models_1.Models.CreateClusterRouteRequest;
const DescribeClusterEndpointVipStatusResponse = models_1.Models.DescribeClusterEndpointVipStatusResponse;
const ModifyClusterEndpointSPRequest = models_1.Models.ModifyClusterEndpointSPRequest;
const DescribeClusterInstancesResponse = models_1.Models.DescribeClusterInstancesResponse;
const DeleteClusterResponse = models_1.Models.DeleteClusterResponse;
const CreateClusterRouteTableResponse = models_1.Models.CreateClusterRouteTableResponse;
const DeleteClusterEndpointResponse = models_1.Models.DeleteClusterEndpointResponse;
const RouteInfo = models_1.Models.RouteInfo;
const DeleteClusterRequest = models_1.Models.DeleteClusterRequest;
const RunInstancesForNode = models_1.Models.RunInstancesForNode;
const DeleteClusterAsGroupsRequest = models_1.Models.DeleteClusterAsGroupsRequest;
const DescribeExistedInstancesRequest = models_1.Models.DescribeExistedInstancesRequest;
const DescribeRegionsResponse = models_1.Models.DescribeRegionsResponse;
const CreateClusterRouteResponse = models_1.Models.CreateClusterRouteResponse;
const RouteTableInfo = models_1.Models.RouteTableInfo;
const ClusterAsGroup = models_1.Models.ClusterAsGroup;
const DescribeClusterEndpointStatusRequest = models_1.Models.DescribeClusterEndpointStatusRequest;
const Tag = models_1.Models.Tag;
const ClusterNetworkSettings = models_1.Models.ClusterNetworkSettings;
const DescribeImagesResponse = models_1.Models.DescribeImagesResponse;
const AutoScalingGroupRange = models_1.Models.AutoScalingGroupRange;
const ModifyClusterAttributeRequest = models_1.Models.ModifyClusterAttributeRequest;
const DeleteClusterRouteResponse = models_1.Models.DeleteClusterRouteResponse;
const CreateClusterEndpointVipResponse = models_1.Models.CreateClusterEndpointVipResponse;
const DescribeClusterRoutesResponse = models_1.Models.DescribeClusterRoutesResponse;
const DescribeClustersRequest = models_1.Models.DescribeClustersRequest;
const RegionInstance = models_1.Models.RegionInstance;
const Label = models_1.Models.Label;
const DeleteClusterEndpointVipResponse = models_1.Models.DeleteClusterEndpointVipResponse;
const ClusterBasicSettings = models_1.Models.ClusterBasicSettings;
const RouteTableConflict = models_1.Models.RouteTableConflict;
const DeleteClusterInstancesRequest = models_1.Models.DeleteClusterInstancesRequest;
const ModifyClusterAsGroupAttributeResponse = models_1.Models.ModifyClusterAsGroupAttributeResponse;
const CreateClusterInstancesRequest = models_1.Models.CreateClusterInstancesRequest;
const DescribeClusterRouteTablesResponse = models_1.Models.DescribeClusterRouteTablesResponse;
const ClusterCIDRSettings = models_1.Models.ClusterCIDRSettings;
const CreateClusterEndpointVipRequest = models_1.Models.CreateClusterEndpointVipRequest;
const ExistedInstance = models_1.Models.ExistedInstance;
const DescribeRouteTableConflictsResponse = models_1.Models.DescribeRouteTableConflictsResponse;
const TagSpecification = models_1.Models.TagSpecification;
const DescribeRegionsRequest = models_1.Models.DescribeRegionsRequest;
const DescribeClustersResponse = models_1.Models.DescribeClustersResponse;
const ClusterExtraArgs = models_1.Models.ClusterExtraArgs;
const DataDisk = models_1.Models.DataDisk;
const DescribeExistedInstancesResponse = models_1.Models.DescribeExistedInstancesResponse;
const ResourceDeleteOption = models_1.Models.ResourceDeleteOption;
const LoginSettings = models_1.Models.LoginSettings;
const Instance = models_1.Models.Instance;
const EnhancedService = models_1.Models.EnhancedService;
const CreateClusterAsGroupRequest = models_1.Models.CreateClusterAsGroupRequest;
const CreateClusterResponse = models_1.Models.CreateClusterResponse;
const RunSecurityServiceEnabled = models_1.Models.RunSecurityServiceEnabled;
const DeleteClusterRouteTableRequest = models_1.Models.DeleteClusterRouteTableRequest;
const CreateClusterRequest = models_1.Models.CreateClusterRequest;
const InstanceExtraArgs = models_1.Models.InstanceExtraArgs;
const CreateClusterAsGroupResponse = models_1.Models.CreateClusterAsGroupResponse;
const DeleteClusterAsGroupsResponse = models_1.Models.DeleteClusterAsGroupsResponse;
const DescribeClusterInstancesRequest = models_1.Models.DescribeClusterInstancesRequest;
const Filter = models_1.Models.Filter;
const ImageInstance = models_1.Models.ImageInstance;
const CreateClusterEndpointResponse = models_1.Models.CreateClusterEndpointResponse;
const ClusterAdvancedSettings = models_1.Models.ClusterAdvancedSettings;
const DeleteClusterEndpointVipRequest = models_1.Models.DeleteClusterEndpointVipRequest;
const Cluster = models_1.Models.Cluster;
const DescribeClusterEndpointStatusResponse = models_1.Models.DescribeClusterEndpointStatusResponse;
const AddExistedInstancesResponse = models_1.Models.AddExistedInstancesResponse;
const DeleteClusterRouteTableResponse = models_1.Models.DeleteClusterRouteTableResponse;
const DescribeClusterAsGroupOptionRequest = models_1.Models.DescribeClusterAsGroupOptionRequest;
const ModifyClusterAttributeResponse = models_1.Models.ModifyClusterAttributeResponse;
const CreateClusterEndpointRequest = models_1.Models.CreateClusterEndpointRequest;
const AddExistedInstancesRequest = models_1.Models.AddExistedInstancesRequest;
const ClusterAsGroupOption = models_1.Models.ClusterAsGroupOption;
const CreateClusterInstancesResponse = models_1.Models.CreateClusterInstancesResponse;
const DescribeClusterRouteTablesRequest = models_1.Models.DescribeClusterRouteTablesRequest;
const ExistedInstancesForNode = models_1.Models.ExistedInstancesForNode;
const DescribeClusterRoutesRequest = models_1.Models.DescribeClusterRoutesRequest;
const DeleteClusterRouteRequest = models_1.Models.DeleteClusterRouteRequest;
const DeleteClusterEndpointRequest = models_1.Models.DeleteClusterEndpointRequest;
const CreateClusterRouteTableRequest = models_1.Models.CreateClusterRouteTableRequest;
const DescribeClusterAsGroupsRequest = models_1.Models.DescribeClusterAsGroupsRequest;
const DescribeImagesRequest = models_1.Models.DescribeImagesRequest;
const ModifyClusterEndpointSPResponse = models_1.Models.ModifyClusterEndpointSPResponse;
const DescribeRouteTableConflictsRequest = models_1.Models.DescribeRouteTableConflictsRequest;
const ExistedInstancesPara = models_1.Models.ExistedInstancesPara;
const DescribeClusterAsGroupOptionResponse = models_1.Models.DescribeClusterAsGroupOptionResponse;
const ClusterAsGroupAttribute = models_1.Models.ClusterAsGroupAttribute;
const RunMonitorServiceEnabled = models_1.Models.RunMonitorServiceEnabled;
const InstanceAdvancedSettings = models_1.Models.InstanceAdvancedSettings;
const ModifyClusterAsGroupAttributeRequest = models_1.Models.ModifyClusterAsGroupAttributeRequest;
const InstanceDataDiskMountSetting = models_1.Models.InstanceDataDiskMountSetting;
const DescribeClusterAsGroupsResponse = models_1.Models.DescribeClusterAsGroupsResponse;
/**
 * tke client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tke.tencentcloudapi.com", "2018-05-25", credential, region, profile);
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
     * 获取镜像信息
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        const resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }
    /**
     * 修改集群伸缩组属性
     * @param {ModifyClusterAsGroupAttributeRequest} req
     * @param {function(string, ModifyClusterAsGroupAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAsGroupAttribute(req, cb) {
        const resp = new ModifyClusterAsGroupAttributeResponse();
        this.request("ModifyClusterAsGroupAttribute", req, resp, cb);
    }
    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @param {DeleteClusterEndpointRequest} req
     * @param {function(string, DeleteClusterEndpointResponse):void} cb
     * @public
     */
    DeleteClusterEndpoint(req, cb) {
        const resp = new DeleteClusterEndpointResponse();
        this.request("DeleteClusterEndpoint", req, resp, cb);
    }
    /**
     * 删除集群(YUNAPI V3版本)
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        const resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }
    /**
     * 修改集群属性
     * @param {ModifyClusterAttributeRequest} req
     * @param {function(string, ModifyClusterAttributeResponse):void} cb
     * @public
     */
    ModifyClusterAttribute(req, cb) {
        const resp = new ModifyClusterAttributeResponse();
        this.request("ModifyClusterAttribute", req, resp, cb);
    }
    /**
     * 删除集群伸缩组
     * @param {DeleteClusterAsGroupsRequest} req
     * @param {function(string, DeleteClusterAsGroupsResponse):void} cb
     * @public
     */
    DeleteClusterAsGroups(req, cb) {
        const resp = new DeleteClusterAsGroupsResponse();
        this.request("DeleteClusterAsGroups", req, resp, cb);
    }
    /**
     * 删除集群路由
     * @param {DeleteClusterRouteRequest} req
     * @param {function(string, DeleteClusterRouteResponse):void} cb
     * @public
     */
    DeleteClusterRoute(req, cb) {
        const resp = new DeleteClusterRouteResponse();
        this.request("DeleteClusterRoute", req, resp, cb);
    }
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     * @param {DescribeClusterEndpointVipStatusRequest} req
     * @param {function(string, DescribeClusterEndpointVipStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointVipStatus(req, cb) {
        const resp = new DescribeClusterEndpointVipStatusResponse();
        this.request("DescribeClusterEndpointVipStatus", req, resp, cb);
    }
    /**
     * 扩展(新建)集群节点
     * @param {CreateClusterInstancesRequest} req
     * @param {function(string, CreateClusterInstancesResponse):void} cb
     * @public
     */
    CreateClusterInstances(req, cb) {
        const resp = new CreateClusterInstancesResponse();
        this.request("CreateClusterInstances", req, resp, cb);
    }
    /**
     * 为已经存在的集群创建伸缩组
     * @param {CreateClusterAsGroupRequest} req
     * @param {function(string, CreateClusterAsGroupResponse):void} cb
     * @public
     */
    CreateClusterAsGroup(req, cb) {
        const resp = new CreateClusterAsGroupResponse();
        this.request("CreateClusterAsGroup", req, resp, cb);
    }
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     * @param {DescribeExistedInstancesRequest} req
     * @param {function(string, DescribeExistedInstancesResponse):void} cb
     * @public
     */
    DescribeExistedInstances(req, cb) {
        const resp = new DescribeExistedInstancesResponse();
        this.request("DescribeExistedInstances", req, resp, cb);
    }
    /**
     * 创建集群路由
     * @param {CreateClusterRouteRequest} req
     * @param {function(string, CreateClusterRouteResponse):void} cb
     * @public
     */
    CreateClusterRoute(req, cb) {
        const resp = new CreateClusterRouteResponse();
        this.request("CreateClusterRoute", req, resp, cb);
    }
    /**
     * 创建集群路由表
     * @param {CreateClusterRouteTableRequest} req
     * @param {function(string, CreateClusterRouteTableResponse):void} cb
     * @public
     */
    CreateClusterRouteTable(req, cb) {
        const resp = new CreateClusterRouteTableResponse();
        this.request("CreateClusterRouteTable", req, resp, cb);
    }
    /**
     * 查询集群路由表
     * @param {DescribeClusterRouteTablesRequest} req
     * @param {function(string, DescribeClusterRouteTablesResponse):void} cb
     * @public
     */
    DescribeClusterRouteTables(req, cb) {
        const resp = new DescribeClusterRouteTablesResponse();
        this.request("DescribeClusterRouteTables", req, resp, cb);
    }
    /**
     * 查询集群列表
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        const resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @param {DescribeClusterEndpointStatusRequest} req
     * @param {function(string, DescribeClusterEndpointStatusResponse):void} cb
     * @public
     */
    DescribeClusterEndpointStatus(req, cb) {
        const resp = new DescribeClusterEndpointStatusResponse();
        this.request("DescribeClusterEndpointStatus", req, resp, cb);
    }
    /**
     * 集群关联的伸缩组列表
     * @param {DescribeClusterAsGroupsRequest} req
     * @param {function(string, DescribeClusterAsGroupsResponse):void} cb
     * @public
     */
    DescribeClusterAsGroups(req, cb) {
        const resp = new DescribeClusterAsGroupsResponse();
        this.request("DescribeClusterAsGroups", req, resp, cb);
    }
    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @param {CreateClusterEndpointRequest} req
     * @param {function(string, CreateClusterEndpointResponse):void} cb
     * @public
     */
    CreateClusterEndpoint(req, cb) {
        const resp = new CreateClusterEndpointResponse();
        this.request("CreateClusterEndpoint", req, resp, cb);
    }
    /**
     * 集群弹性伸缩配置
     * @param {DescribeClusterAsGroupOptionRequest} req
     * @param {function(string, DescribeClusterAsGroupOptionResponse):void} cb
     * @public
     */
    DescribeClusterAsGroupOption(req, cb) {
        const resp = new DescribeClusterAsGroupOptionResponse();
        this.request("DescribeClusterAsGroupOption", req, resp, cb);
    }
    /**
     * 获取容器服务支持的所有地域
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        const resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }
    /**
     * 添加已经存在的实例到集群
     * @param {AddExistedInstancesRequest} req
     * @param {function(string, AddExistedInstancesResponse):void} cb
     * @public
     */
    AddExistedInstances(req, cb) {
        const resp = new AddExistedInstancesResponse();
        this.request("AddExistedInstances", req, resp, cb);
    }
    /**
     * 集群的密钥信息
     * @param {DescribeClusterSecurityRequest} req
     * @param {function(string, DescribeClusterSecurityResponse):void} cb
     * @public
     */
    DescribeClusterSecurity(req, cb) {
        const resp = new DescribeClusterSecurityResponse();
        this.request("DescribeClusterSecurity", req, resp, cb);
    }
    /**
     * 查询路由表冲突列表
     * @param {DescribeRouteTableConflictsRequest} req
     * @param {function(string, DescribeRouteTableConflictsResponse):void} cb
     * @public
     */
    DescribeRouteTableConflicts(req, cb) {
        const resp = new DescribeRouteTableConflictsResponse();
        this.request("DescribeRouteTableConflicts", req, resp, cb);
    }
    /**
     *  查询集群下节点实例信息
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        const resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @param {DeleteClusterEndpointVipRequest} req
     * @param {function(string, DeleteClusterEndpointVipResponse):void} cb
     * @public
     */
    DeleteClusterEndpointVip(req, cb) {
        const resp = new DeleteClusterEndpointVipResponse();
        this.request("DeleteClusterEndpointVip", req, resp, cb);
    }
    /**
     * 删除集群中的实例
     * @param {DeleteClusterInstancesRequest} req
     * @param {function(string, DeleteClusterInstancesResponse):void} cb
     * @public
     */
    DeleteClusterInstances(req, cb) {
        const resp = new DeleteClusterInstancesResponse();
        this.request("DeleteClusterInstances", req, resp, cb);
    }
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     * @param {ModifyClusterEndpointSPRequest} req
     * @param {function(string, ModifyClusterEndpointSPResponse):void} cb
     * @public
     */
    ModifyClusterEndpointSP(req, cb) {
        const resp = new ModifyClusterEndpointSPResponse();
        this.request("ModifyClusterEndpointSP", req, resp, cb);
    }
    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @param {CreateClusterEndpointVipRequest} req
     * @param {function(string, CreateClusterEndpointVipResponse):void} cb
     * @public
     */
    CreateClusterEndpointVip(req, cb) {
        const resp = new CreateClusterEndpointVipResponse();
        this.request("CreateClusterEndpointVip", req, resp, cb);
    }
    /**
     * 删除集群路由表
     * @param {DeleteClusterRouteTableRequest} req
     * @param {function(string, DeleteClusterRouteTableResponse):void} cb
     * @public
     */
    DeleteClusterRouteTable(req, cb) {
        const resp = new DeleteClusterRouteTableResponse();
        this.request("DeleteClusterRouteTable", req, resp, cb);
    }
    /**
     * 查询集群路由
     * @param {DescribeClusterRoutesRequest} req
     * @param {function(string, DescribeClusterRoutesResponse):void} cb
     * @public
     */
    DescribeClusterRoutes(req, cb) {
        const resp = new DescribeClusterRoutesResponse();
        this.request("DescribeClusterRoutes", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tke_client.js.map