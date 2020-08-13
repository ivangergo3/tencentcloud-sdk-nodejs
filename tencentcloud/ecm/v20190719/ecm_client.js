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
const RunEIPDirectServiceEnabled = models_1.Models.RunEIPDirectServiceEnabled;
const DescribeTaskResultResponse = models_1.Models.DescribeTaskResultResponse;
const Ipv6Address = models_1.Models.Ipv6Address;
const DescribePeakBaseOverviewRequest = models_1.Models.DescribePeakBaseOverviewRequest;
const CreateNetworkInterfaceRequest = models_1.Models.CreateNetworkInterfaceRequest;
const DescribeInstancesDeniedActionsRequest = models_1.Models.DescribeInstancesDeniedActionsRequest;
const Internet = models_1.Models.Internet;
const DescribeModuleResponse = models_1.Models.DescribeModuleResponse;
const ImageTask = models_1.Models.ImageTask;
const Province = models_1.Models.Province;
const ImportCustomImageResponse = models_1.Models.ImportCustomImageResponse;
const ModifyModuleNameResponse = models_1.Models.ModifyModuleNameResponse;
const DescribeNetworkInterfacesRequest = models_1.Models.DescribeNetworkInterfacesRequest;
const DescribeSubnetsRequest = models_1.Models.DescribeSubnetsRequest;
const CreateSubnetRequest = models_1.Models.CreateSubnetRequest;
const DeleteModuleResponse = models_1.Models.DeleteModuleResponse;
const EipQuota = models_1.Models.EipQuota;
const DeleteSubnetResponse = models_1.Models.DeleteSubnetResponse;
const ModifyAddressesBandwidthResponse = models_1.Models.ModifyAddressesBandwidthResponse;
const DescribeSubnetsResponse = models_1.Models.DescribeSubnetsResponse;
const RunInstancesRequest = models_1.Models.RunInstancesRequest;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const NetworkInterface = models_1.Models.NetworkInterface;
const ResetInstancesPasswordResponse = models_1.Models.ResetInstancesPasswordResponse;
const SrcImage = models_1.Models.SrcImage;
const InstanceTypeConfig = models_1.Models.InstanceTypeConfig;
const DescribeNodeResponse = models_1.Models.DescribeNodeResponse;
const RemovePrivateIpAddressesResponse = models_1.Models.RemovePrivateIpAddressesResponse;
const DescribeDefaultSubnetResponse = models_1.Models.DescribeDefaultSubnetResponse;
const VpcInfo = models_1.Models.VpcInfo;
const DescribeCustomImageTaskResponse = models_1.Models.DescribeCustomImageTaskResponse;
const SecurityGroup = models_1.Models.SecurityGroup;
const DeleteSubnetRequest = models_1.Models.DeleteSubnetRequest;
const DescribeModuleRequest = models_1.Models.DescribeModuleRequest;
const Position = models_1.Models.Position;
const CreateModuleResponse = models_1.Models.CreateModuleResponse;
const RebootInstancesRequest = models_1.Models.RebootInstancesRequest;
const AllocateAddressesRequest = models_1.Models.AllocateAddressesRequest;
const DeleteNetworkInterfaceRequest = models_1.Models.DeleteNetworkInterfaceRequest;
const RemovePrivateIpAddressesRequest = models_1.Models.RemovePrivateIpAddressesRequest;
const ModifyInstancesAttributeRequest = models_1.Models.ModifyInstancesAttributeRequest;
const InstanceFamilyTypeConfig = models_1.Models.InstanceFamilyTypeConfig;
const ResetInstancesResponse = models_1.Models.ResetInstancesResponse;
const DescribeImageRequest = models_1.Models.DescribeImageRequest;
const MigratePrivateIpAddressRequest = models_1.Models.MigratePrivateIpAddressRequest;
const ModifySubnetAttributeResponse = models_1.Models.ModifySubnetAttributeResponse;
const ZoneInfo = models_1.Models.ZoneInfo;
const DescribeNodeRequest = models_1.Models.DescribeNodeRequest;
const CreateSubnetResponse = models_1.Models.CreateSubnetResponse;
const ResetInstancesPasswordRequest = models_1.Models.ResetInstancesPasswordRequest;
const ModifyModuleConfigRequest = models_1.Models.ModifyModuleConfigRequest;
const Area = models_1.Models.Area;
const DescribeConfigRequest = models_1.Models.DescribeConfigRequest;
const DescribeInstanceVncUrlRequest = models_1.Models.DescribeInstanceVncUrlRequest;
const NetworkStorageRange = models_1.Models.NetworkStorageRange;
const StartInstancesResponse = models_1.Models.StartInstancesResponse;
const CreateVpcResponse = models_1.Models.CreateVpcResponse;
const AssistantCidr = models_1.Models.AssistantCidr;
const DescribeTaskStatusResponse = models_1.Models.DescribeTaskStatusResponse;
const ModifyModuleIpDirectRequest = models_1.Models.ModifyModuleIpDirectRequest;
const CreateModuleRequest = models_1.Models.CreateModuleRequest;
const ModifyInstancesAttributeResponse = models_1.Models.ModifyInstancesAttributeResponse;
const ReleaseAddressesResponse = models_1.Models.ReleaseAddressesResponse;
const DescribeInstancesDeniedActionsResponse = models_1.Models.DescribeInstancesDeniedActionsResponse;
const DisassociateAddressRequest = models_1.Models.DisassociateAddressRequest;
const TaskOutput = models_1.Models.TaskOutput;
const ModuleCounter = models_1.Models.ModuleCounter;
const ZoneInstanceCountISP = models_1.Models.ZoneInstanceCountISP;
const TaskInput = models_1.Models.TaskInput;
const StartInstancesRequest = models_1.Models.StartInstancesRequest;
const Tag = models_1.Models.Tag;
const DescribeDefaultSubnetRequest = models_1.Models.DescribeDefaultSubnetRequest;
const ResetInstancesMaxBandwidthResponse = models_1.Models.ResetInstancesMaxBandwidthResponse;
const DeleteVpcRequest = models_1.Models.DeleteVpcRequest;
const CreateNetworkInterfaceResponse = models_1.Models.CreateNetworkInterfaceResponse;
const Node = models_1.Models.Node;
const RunInstancesResponse = models_1.Models.RunInstancesResponse;
const DescribeAddressQuotaRequest = models_1.Models.DescribeAddressQuotaRequest;
const DescribeInstanceTypeConfigResponse = models_1.Models.DescribeInstanceTypeConfigResponse;
const NodeInstanceNum = models_1.Models.NodeInstanceNum;
const DescribeAddressesResponse = models_1.Models.DescribeAddressesResponse;
const ImportImageRequest = models_1.Models.ImportImageRequest;
const DetachNetworkInterfaceResponse = models_1.Models.DetachNetworkInterfaceResponse;
const InstanceFamilyConfig = models_1.Models.InstanceFamilyConfig;
const DeleteModuleRequest = models_1.Models.DeleteModuleRequest;
const DescribeVpcsRequest = models_1.Models.DescribeVpcsRequest;
const ResetInstancesMaxBandwidthRequest = models_1.Models.ResetInstancesMaxBandwidthRequest;
const OsVersion = models_1.Models.OsVersion;
const PeakBase = models_1.Models.PeakBase;
const ModifyModuleNetworkRequest = models_1.Models.ModifyModuleNetworkRequest;
const Image = models_1.Models.Image;
const TagSpecification = models_1.Models.TagSpecification;
const DetachNetworkInterfaceRequest = models_1.Models.DetachNetworkInterfaceRequest;
const DescribeConfigResponse = models_1.Models.DescribeConfigResponse;
const ModifyDefaultSubnetResponse = models_1.Models.ModifyDefaultSubnetResponse;
const DescribeImportImageOsResponse = models_1.Models.DescribeImportImageOsResponse;
const DescribeModuleDetailResponse = models_1.Models.DescribeModuleDetailResponse;
const StopInstancesRequest = models_1.Models.StopInstancesRequest;
const Subnet = models_1.Models.Subnet;
const ModifyVpcAttributeResponse = models_1.Models.ModifyVpcAttributeResponse;
const DeleteVpcResponse = models_1.Models.DeleteVpcResponse;
const ImageUrl = models_1.Models.ImageUrl;
const ISP = models_1.Models.ISP;
const PrivateIpAddressSpecification = models_1.Models.PrivateIpAddressSpecification;
const ISPCounter = models_1.Models.ISPCounter;
const MigratePrivateIpAddressResponse = models_1.Models.MigratePrivateIpAddressResponse;
const CreateImageRequest = models_1.Models.CreateImageRequest;
const Instance = models_1.Models.Instance;
const EnhancedService = models_1.Models.EnhancedService;
const DescribeInstanceVncUrlResponse = models_1.Models.DescribeInstanceVncUrlResponse;
const DisassociateAddressResponse = models_1.Models.DisassociateAddressResponse;
const DescribeInstanceTypeConfigRequest = models_1.Models.DescribeInstanceTypeConfigRequest;
const ImportCustomImageRequest = models_1.Models.ImportCustomImageRequest;
const DescribeModuleDetailRequest = models_1.Models.DescribeModuleDetailRequest;
const AssociateAddressRequest = models_1.Models.AssociateAddressRequest;
const ModifyVpcAttributeRequest = models_1.Models.ModifyVpcAttributeRequest;
const DescribePeakNetworkOverviewResponse = models_1.Models.DescribePeakNetworkOverviewResponse;
const AttachNetworkInterfaceResponse = models_1.Models.AttachNetworkInterfaceResponse;
const CreateImageResponse = models_1.Models.CreateImageResponse;
const DescribeBaseOverviewRequest = models_1.Models.DescribeBaseOverviewRequest;
const ModifyModuleNetworkResponse = models_1.Models.ModifyModuleNetworkResponse;
const DiskInfo = models_1.Models.DiskInfo;
const DescribeImportImageOsRequest = models_1.Models.DescribeImportImageOsRequest;
const NetworkInterfaceAttachment = models_1.Models.NetworkInterfaceAttachment;
const StopInstancesResponse = models_1.Models.StopInstancesResponse;
const ModifyModuleIpDirectResponse = models_1.Models.ModifyModuleIpDirectResponse;
const ModifyModuleNameRequest = models_1.Models.ModifyModuleNameRequest;
const ModifyDefaultSubnetRequest = models_1.Models.ModifyDefaultSubnetRequest;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const DescribeTaskResultRequest = models_1.Models.DescribeTaskResultRequest;
const AssociateAddressResponse = models_1.Models.AssociateAddressResponse;
const Filter = models_1.Models.Filter;
const PublicIPAddressInfo = models_1.Models.PublicIPAddressInfo;
const TerminateInstancesResponse = models_1.Models.TerminateInstancesResponse;
const DescribeAddressesRequest = models_1.Models.DescribeAddressesRequest;
const ModifyModuleConfigResponse = models_1.Models.ModifyModuleConfigResponse;
const MigrateNetworkInterfaceRequest = models_1.Models.MigrateNetworkInterfaceRequest;
const DescribeAddressQuotaResponse = models_1.Models.DescribeAddressQuotaResponse;
const CreateSecurityGroupResponse = models_1.Models.CreateSecurityGroupResponse;
const ZoneInstanceInfo = models_1.Models.ZoneInstanceInfo;
const DescribeTaskStatusRequest = models_1.Models.DescribeTaskStatusRequest;
const ModifyAddressAttributeRequest = models_1.Models.ModifyAddressAttributeRequest;
const ModifyModuleImageResponse = models_1.Models.ModifyModuleImageResponse;
const ResetInstancesRequest = models_1.Models.ResetInstancesRequest;
const PeakNetwork = models_1.Models.PeakNetwork;
const DescribeCustomImageTaskRequest = models_1.Models.DescribeCustomImageTaskRequest;
const ImageOsList = models_1.Models.ImageOsList;
const InstanceOperator = models_1.Models.InstanceOperator;
const ModifyAddressAttributeResponse = models_1.Models.ModifyAddressAttributeResponse;
const ImportImageResponse = models_1.Models.ImportImageResponse;
const CreateSecurityGroupRequest = models_1.Models.CreateSecurityGroupRequest;
const City = models_1.Models.City;
const PrivateIPAddressInfo = models_1.Models.PrivateIPAddressInfo;
const TerminateInstancesRequest = models_1.Models.TerminateInstancesRequest;
const DeleteNetworkInterfaceResponse = models_1.Models.DeleteNetworkInterfaceResponse;
const SimpleModule = models_1.Models.SimpleModule;
const DescribePeakNetworkOverviewRequest = models_1.Models.DescribePeakNetworkOverviewRequest;
const AssignPrivateIpAddressesResponse = models_1.Models.AssignPrivateIpAddressesResponse;
const PeakNetworkRegionInfo = models_1.Models.PeakNetworkRegionInfo;
const RebootInstancesResponse = models_1.Models.RebootInstancesResponse;
const ModifyAddressesBandwidthRequest = models_1.Models.ModifyAddressesBandwidthRequest;
const OperatorAction = models_1.Models.OperatorAction;
const PeakFamilyInfo = models_1.Models.PeakFamilyInfo;
const DescribePeakBaseOverviewResponse = models_1.Models.DescribePeakBaseOverviewResponse;
const ModifyImageAttributeResponse = models_1.Models.ModifyImageAttributeResponse;
const DescribeImageResponse = models_1.Models.DescribeImageResponse;
const RegionInfo = models_1.Models.RegionInfo;
const DeleteImageResponse = models_1.Models.DeleteImageResponse;
const Address = models_1.Models.Address;
const DescribeNetworkInterfacesResponse = models_1.Models.DescribeNetworkInterfacesResponse;
const AssignPrivateIpAddressesRequest = models_1.Models.AssignPrivateIpAddressesRequest;
const ModifyImageAttributeRequest = models_1.Models.ModifyImageAttributeRequest;
const ReleaseAddressesRequest = models_1.Models.ReleaseAddressesRequest;
const CreateVpcRequest = models_1.Models.CreateVpcRequest;
const RunSecurityServiceEnabled = models_1.Models.RunSecurityServiceEnabled;
const Country = models_1.Models.Country;
const ModifySubnetAttributeRequest = models_1.Models.ModifySubnetAttributeRequest;
const AllocateAddressesResponse = models_1.Models.AllocateAddressesResponse;
const AttachNetworkInterfaceRequest = models_1.Models.AttachNetworkInterfaceRequest;
const ModuleItem = models_1.Models.ModuleItem;
const ModifyModuleImageRequest = models_1.Models.ModifyModuleImageRequest;
const RunMonitorServiceEnabled = models_1.Models.RunMonitorServiceEnabled;
const MigrateNetworkInterfaceResponse = models_1.Models.MigrateNetworkInterfaceResponse;
const DescribeVpcsResponse = models_1.Models.DescribeVpcsResponse;
const DeleteImageRequest = models_1.Models.DeleteImageRequest;
const Module = models_1.Models.Module;
const DescribeBaseOverviewResponse = models_1.Models.DescribeBaseOverviewResponse;
/**
 * ecm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ecm.tencentcloudapi.com", "2019-07-19", credential, region, profile);
    }
    /**
     * 重置实例的最大带宽上限。
     * @param {ResetInstancesMaxBandwidthRequest} req
     * @param {function(string, ResetInstancesMaxBandwidthResponse):void} cb
     * @public
     */
    ResetInstancesMaxBandwidth(req, cb) {
        const resp = new ResetInstancesMaxBandwidthResponse();
        this.request("ResetInstancesMaxBandwidth", req, resp, cb);
    }
    /**
     * 销毁实例
     * @param {TerminateInstancesRequest} req
     * @param {function(string, TerminateInstancesResponse):void} cb
     * @public
     */
    TerminateInstances(req, cb) {
        const resp = new TerminateInstancesResponse();
        this.request("TerminateInstances", req, resp, cb);
    }
    /**
     * 获取模块列表
     * @param {DescribeModuleRequest} req
     * @param {function(string, DescribeModuleResponse):void} cb
     * @public
     */
    DescribeModule(req, cb) {
        const resp = new DescribeModuleResponse();
        this.request("DescribeModule", req, resp, cb);
    }
    /**
     * 获取带宽硬盘等数据的限制
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        const resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }
    /**
     * 获取概览页统计的基本数据
     * @param {DescribeBaseOverviewRequest} req
     * @param {function(string, DescribeBaseOverviewResponse):void} cb
     * @public
     */
    DescribeBaseOverview(req, cb) {
        const resp = new DescribeBaseOverviewResponse();
        this.request("DescribeBaseOverview", req, resp, cb);
    }
    /**
     * 只有状态为STOPPED的实例才可以进行此操作；接口调用成功时，实例会进入STARTING状态；启动实例成功时，实例会进入RUNNING状态。
     * @param {StartInstancesRequest} req
     * @param {function(string, StartInstancesResponse):void} cb
     * @public
     */
    StartInstances(req, cb) {
        const resp = new StartInstancesResponse();
        this.request("StartInstances", req, resp, cb);
    }
    /**
     * 修改模块名称
     * @param {ModifyModuleNameRequest} req
     * @param {function(string, ModifyModuleNameResponse):void} cb
     * @public
     */
    ModifyModuleName(req, cb) {
        const resp = new ModifyModuleNameResponse();
        this.request("ModifyModuleName", req, resp, cb);
    }
    /**
     * 从CVM产品导入镜像到ECM
     * @param {ImportImageRequest} req
     * @param {function(string, ImportImageResponse):void} cb
     * @public
     */
    ImportImage(req, cb) {
        const resp = new ImportImageResponse();
        this.request("ImportImage", req, resp, cb);
    }
    /**
     * 解绑弹性公网IP（简称 EIP）
只有状态为 BIND 和 BIND_ENI 的 EIP 才能进行解绑定操作。
EIP 如果被封堵，则不能进行解绑定操作。
     * @param {DisassociateAddressRequest} req
     * @param {function(string, DisassociateAddressResponse):void} cb
     * @public
     */
    DisassociateAddress(req, cb) {
        const resp = new DisassociateAddressResponse();
        this.request("DisassociateAddress", req, resp, cb);
    }
    /**
     * 弹性网卡绑定云主机
     * @param {AttachNetworkInterfaceRequest} req
     * @param {function(string, AttachNetworkInterfaceResponse):void} cb
     * @public
     */
    AttachNetworkInterface(req, cb) {
        const resp = new AttachNetworkInterfaceResponse();
        this.request("AttachNetworkInterface", req, resp, cb);
    }
    /**
     * 释放一个或多个弹性公网IP（简称 EIP）。
该操作不可逆，释放后 EIP 关联的 IP 地址将不再属于您的名下。
只有状态为 UNBIND 的 EIP 才能进行释放操作。
     * @param {ReleaseAddressesRequest} req
     * @param {function(string, ReleaseAddressesResponse):void} cb
     * @public
     */
    ReleaseAddresses(req, cb) {
        const resp = new ReleaseAddressesResponse();
        this.request("ReleaseAddresses", req, resp, cb);
    }
    /**
     * 创建私有网络
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        const resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }
    /**
     * 查询您账户的弹性公网IP（简称 EIP）在当前地域的配额信息
     * @param {DescribeAddressQuotaRequest} req
     * @param {function(string, DescribeAddressQuotaResponse):void} cb
     * @public
     */
    DescribeAddressQuota(req, cb) {
        const resp = new DescribeAddressQuotaResponse();
        this.request("DescribeAddressQuota", req, resp, cb);
    }
    /**
     * 修改模块配置，已关联实例的模块不支持调整配置。
     * @param {ModifyModuleConfigRequest} req
     * @param {function(string, ModifyModuleConfigResponse):void} cb
     * @public
     */
    ModifyModuleConfig(req, cb) {
        const resp = new ModifyModuleConfigResponse();
        this.request("ModifyModuleConfig", req, resp, cb);
    }
    /**
     * 删除私有网络
     * @param {DeleteVpcRequest} req
     * @param {function(string, DeleteVpcResponse):void} cb
     * @public
     */
    DeleteVpc(req, cb) {
        const resp = new DeleteVpcResponse();
        this.request("DeleteVpc", req, resp, cb);
    }
    /**
     * 查询子网列表
     * @param {DescribeSubnetsRequest} req
     * @param {function(string, DescribeSubnetsResponse):void} cb
     * @public
     */
    DescribeSubnets(req, cb) {
        const resp = new DescribeSubnetsResponse();
        this.request("DescribeSubnets", req, resp, cb);
    }
    /**
     * 修改弹性公网IP属性
     * @param {ModifyAddressAttributeRequest} req
     * @param {function(string, ModifyAddressAttributeResponse):void} cb
     * @public
     */
    ModifyAddressAttribute(req, cb) {
        const resp = new ModifyAddressAttributeResponse();
        this.request("ModifyAddressAttribute", req, resp, cb);
    }
    /**
     * 申请一个或多个弹性公网IP（简称 EIP）
     * @param {AllocateAddressesRequest} req
     * @param {function(string, AllocateAddressesResponse):void} cb
     * @public
     */
    AllocateAddresses(req, cb) {
        const resp = new AllocateAddressesResponse();
        this.request("AllocateAddresses", req, resp, cb);
    }
    /**
     * 获取实例的相关信息。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }
    /**
     * 获取机型配置列表
     * @param {DescribeInstanceTypeConfigRequest} req
     * @param {function(string, DescribeInstanceTypeConfigResponse):void} cb
     * @public
     */
    DescribeInstanceTypeConfig(req, cb) {
        const resp = new DescribeInstanceTypeConfigResponse();
        this.request("DescribeInstanceTypeConfig", req, resp, cb);
    }
    /**
     * 创建ECM实例
     * @param {RunInstancesRequest} req
     * @param {function(string, RunInstancesResponse):void} cb
     * @public
     */
    RunInstances(req, cb) {
        const resp = new RunInstancesResponse();
        this.request("RunInstances", req, resp, cb);
    }
    /**
     * 弹性网卡申请内网 IP
     * @param {AssignPrivateIpAddressesRequest} req
     * @param {function(string, AssignPrivateIpAddressesResponse):void} cb
     * @public
     */
    AssignPrivateIpAddresses(req, cb) {
        const resp = new AssignPrivateIpAddressesResponse();
        this.request("AssignPrivateIpAddresses", req, resp, cb);
    }
    /**
     * 查询可用区的默认子网
     * @param {DescribeDefaultSubnetRequest} req
     * @param {function(string, DescribeDefaultSubnetResponse):void} cb
     * @public
     */
    DescribeDefaultSubnet(req, cb) {
        const resp = new DescribeDefaultSubnetResponse();
        this.request("DescribeDefaultSubnet", req, resp, cb);
    }
    /**
     * 将弹性公网IP（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
将 EIP 绑定到实例（CVM）上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
将 EIP 绑定到主网卡的主内网IP上，绑定过程会把其上绑定的普通公网 IP 自动解绑并释放。
将 EIP 绑定到指定网卡的内网 IP上（非主网卡的主内网IP），则必须先解绑该 EIP，才能再绑定新的。
将 EIP 绑定到NAT网关，请使用接口EipBindNatGateway
EIP 如果欠费或被封堵，则不能被绑定。
只有状态为 UNBIND 的 EIP 才能够被绑定。
     * @param {AssociateAddressRequest} req
     * @param {function(string, AssociateAddressResponse):void} cb
     * @public
     */
    AssociateAddress(req, cb) {
        const resp = new AssociateAddressResponse();
        this.request("AssociateAddress", req, resp, cb);
    }
    /**
     * 查询EIP异步任务执行结果
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        const resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }
    /**
     * 创建模块
     * @param {CreateModuleRequest} req
     * @param {function(string, CreateModuleResponse):void} cb
     * @public
     */
    CreateModule(req, cb) {
        const resp = new CreateModuleResponse();
        this.request("CreateModule", req, resp, cb);
    }
    /**
     * 查询弹性公网IP列表
     * @param {DescribeAddressesRequest} req
     * @param {function(string, DescribeAddressesResponse):void} cb
     * @public
     */
    DescribeAddresses(req, cb) {
        const resp = new DescribeAddressesResponse();
        this.request("DescribeAddresses", req, resp, cb);
    }
    /**
     * 删除子网，若子网为可用区下的默认子网，则默认子网会回退到系统自动创建的默认子网，非用户最新创建的子网。若默认子网不满足需求，可调用设置默认子网接口设置。
     * @param {DeleteSubnetRequest} req
     * @param {function(string, DeleteSubnetResponse):void} cb
     * @public
     */
    DeleteSubnet(req, cb) {
        const resp = new DeleteSubnetResponse();
        this.request("DeleteSubnet", req, resp, cb);
    }
    /**
     * 修改子网属性
     * @param {ModifySubnetAttributeRequest} req
     * @param {function(string, ModifySubnetAttributeResponse):void} cb
     * @public
     */
    ModifySubnetAttribute(req, cb) {
        const resp = new ModifySubnetAttributeResponse();
        this.request("ModifySubnetAttribute", req, resp, cb);
    }
    /**
     * 查询弹性网卡列表
     * @param {DescribeNetworkInterfacesRequest} req
     * @param {function(string, DescribeNetworkInterfacesResponse):void} cb
     * @public
     */
    DescribeNetworkInterfaces(req, cb) {
        const resp = new DescribeNetworkInterfacesResponse();
        this.request("DescribeNetworkInterfaces", req, resp, cb);
    }
    /**
     * 弹性网卡迁移
     * @param {MigrateNetworkInterfaceRequest} req
     * @param {function(string, MigrateNetworkInterfaceResponse):void} cb
     * @public
     */
    MigrateNetworkInterface(req, cb) {
        const resp = new MigrateNetworkInterfaceResponse();
        this.request("MigrateNetworkInterface", req, resp, cb);
    }
    /**
     * 本接口(CreateImage)用于将实例的系统盘制作为新镜像，创建后的镜像可以用于创建实例。
     * @param {CreateImageRequest} req
     * @param {function(string, CreateImageResponse):void} cb
     * @public
     */
    CreateImage(req, cb) {
        const resp = new CreateImageResponse();
        this.request("CreateImage", req, resp, cb);
    }
    /**
     * 修改模块默认带宽上限
     * @param {ModifyModuleNetworkRequest} req
     * @param {function(string, ModifyModuleNetworkResponse):void} cb
     * @public
     */
    ModifyModuleNetwork(req, cb) {
        const resp = new ModifyModuleNetworkResponse();
        this.request("ModifyModuleNetwork", req, resp, cb);
    }
    /**
     * 重置处于运行中状态的实例的密码，需要显式指定强制关机参数ForceStop。如果没有显式指定强制关机参数，则只有处于关机状态的实例才允许执行重置密码操作。
     * @param {ResetInstancesPasswordRequest} req
     * @param {function(string, ResetInstancesPasswordResponse):void} cb
     * @public
     */
    ResetInstancesPassword(req, cb) {
        const resp = new ResetInstancesPasswordResponse();
        this.request("ResetInstancesPassword", req, resp, cb);
    }
    /**
     * 本接口（ModifyImageAttribute）用于修改镜像属性。
     * @param {ModifyImageAttributeRequest} req
     * @param {function(string, ModifyImageAttributeResponse):void} cb
     * @public
     */
    ModifyImageAttribute(req, cb) {
        const resp = new ModifyImageAttributeResponse();
        this.request("ModifyImageAttribute", req, resp, cb);
    }
    /**
     * 通过实例id获取当前禁止的操作
     * @param {DescribeInstancesDeniedActionsRequest} req
     * @param {function(string, DescribeInstancesDeniedActionsResponse):void} cb
     * @public
     */
    DescribeInstancesDeniedActions(req, cb) {
        const resp = new DescribeInstancesDeniedActionsResponse();
        this.request("DescribeInstancesDeniedActions", req, resp, cb);
    }
    /**
     * 本接口(DescribeTaskStatus)用于获取异步任务状态
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        const resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }
    /**
     * 创建弹性网卡
     * @param {CreateNetworkInterfaceRequest} req
     * @param {function(string, CreateNetworkInterfaceResponse):void} cb
     * @public
     */
    CreateNetworkInterface(req, cb) {
        const resp = new CreateNetworkInterfaceResponse();
        this.request("CreateNetworkInterface", req, resp, cb);
    }
    /**
     * 获取网络峰值数据
     * @param {DescribePeakNetworkOverviewRequest} req
     * @param {function(string, DescribePeakNetworkOverviewResponse):void} cb
     * @public
     */
    DescribePeakNetworkOverview(req, cb) {
        const resp = new DescribePeakNetworkOverviewResponse();
        this.request("DescribePeakNetworkOverview", req, resp, cb);
    }
    /**
     * 只有处于"RUNNING"状态的实例才能够进行关机操作；
调用成功时，实例会进入STOPPING状态；关闭实例成功时，实例会进入STOPPED状态；
支持强制关闭，强制关机的效果等同于关闭物理计算机的电源开关，强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
     * @param {StopInstancesRequest} req
     * @param {function(string, StopInstancesResponse):void} cb
     * @public
     */
    StopInstances(req, cb) {
        const resp = new StopInstancesResponse();
        this.request("StopInstances", req, resp, cb);
    }
    /**
     * 查询外部导入镜像支持的OS列表
     * @param {DescribeImportImageOsRequest} req
     * @param {function(string, DescribeImportImageOsResponse):void} cb
     * @public
     */
    DescribeImportImageOs(req, cb) {
        const resp = new DescribeImportImageOsResponse();
        this.request("DescribeImportImageOs", req, resp, cb);
    }
    /**
     * 创建安全组
     * @param {CreateSecurityGroupRequest} req
     * @param {function(string, CreateSecurityGroupResponse):void} cb
     * @public
     */
    CreateSecurityGroup(req, cb) {
        const resp = new CreateSecurityGroupResponse();
        this.request("CreateSecurityGroup", req, resp, cb);
    }
    /**
     * 获取节点列表
     * @param {DescribeNodeRequest} req
     * @param {function(string, DescribeNodeResponse):void} cb
     * @public
     */
    DescribeNode(req, cb) {
        const resp = new DescribeNodeResponse();
        this.request("DescribeNode", req, resp, cb);
    }
    /**
     * 导入自定义镜像，支持 RAW、VHD、QCOW2、VMDK 镜像格式
     * @param {ImportCustomImageRequest} req
     * @param {function(string, ImportCustomImageResponse):void} cb
     * @public
     */
    ImportCustomImage(req, cb) {
        const resp = new ImportCustomImageResponse();
        this.request("ImportCustomImage", req, resp, cb);
    }
    /**
     * 展示模块详细信息
     * @param {DescribeModuleDetailRequest} req
     * @param {function(string, DescribeModuleDetailResponse):void} cb
     * @public
     */
    DescribeModuleDetail(req, cb) {
        const resp = new DescribeModuleDetailResponse();
        this.request("DescribeModuleDetail", req, resp, cb);
    }
    /**
     * 弹性网卡解绑云主机
     * @param {DetachNetworkInterfaceRequest} req
     * @param {function(string, DetachNetworkInterfaceResponse):void} cb
     * @public
     */
    DetachNetworkInterface(req, cb) {
        const resp = new DetachNetworkInterfaceResponse();
        this.request("DetachNetworkInterface", req, resp, cb);
    }
    /**
     * 查询导入镜像任务
     * @param {DescribeCustomImageTaskRequest} req
     * @param {function(string, DescribeCustomImageTaskResponse):void} cb
     * @public
     */
    DescribeCustomImageTask(req, cb) {
        const resp = new DescribeCustomImageTaskResponse();
        this.request("DescribeCustomImageTask", req, resp, cb);
    }
    /**
     * 重装实例，若指定了ImageId参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装；若未指定密码，则密码通过站内信形式随后发送。
     * @param {ResetInstancesRequest} req
     * @param {function(string, ResetInstancesResponse):void} cb
     * @public
     */
    ResetInstances(req, cb) {
        const resp = new ResetInstancesResponse();
        this.request("ResetInstances", req, resp, cb);
    }
    /**
     * 查询实例管理终端地址
     * @param {DescribeInstanceVncUrlRequest} req
     * @param {function(string, DescribeInstanceVncUrlResponse):void} cb
     * @public
     */
    DescribeInstanceVncUrl(req, cb) {
        const resp = new DescribeInstanceVncUrlResponse();
        this.request("DescribeInstanceVncUrl", req, resp, cb);
    }
    /**
     * 修改私有网络（VPC）的相关属性
     * @param {ModifyVpcAttributeRequest} req
     * @param {function(string, ModifyVpcAttributeResponse):void} cb
     * @public
     */
    ModifyVpcAttribute(req, cb) {
        const resp = new ModifyVpcAttributeResponse();
        this.request("ModifyVpcAttribute", req, resp, cb);
    }
    /**
     * 修改模块的默认镜像
     * @param {ModifyModuleImageRequest} req
     * @param {function(string, ModifyModuleImageResponse):void} cb
     * @public
     */
    ModifyModuleImage(req, cb) {
        const resp = new ModifyModuleImageResponse();
        this.request("ModifyModuleImage", req, resp, cb);
    }
    /**
     * 修改实例的属性。
     * @param {ModifyInstancesAttributeRequest} req
     * @param {function(string, ModifyInstancesAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesAttribute(req, cb) {
        const resp = new ModifyInstancesAttributeResponse();
        this.request("ModifyInstancesAttribute", req, resp, cb);
    }
    /**
     * CPU 内存 硬盘等基础信息峰值数据
     * @param {DescribePeakBaseOverviewRequest} req
     * @param {function(string, DescribePeakBaseOverviewResponse):void} cb
     * @public
     */
    DescribePeakBaseOverview(req, cb) {
        const resp = new DescribePeakBaseOverviewResponse();
        this.request("DescribePeakBaseOverview", req, resp, cb);
    }
    /**
     * 修改在一个可用区下创建实例时使用的默认子网（创建实例时，未填写VPC参数时使用的sunbetId）
     * @param {ModifyDefaultSubnetRequest} req
     * @param {function(string, ModifyDefaultSubnetResponse):void} cb
     * @public
     */
    ModifyDefaultSubnet(req, cb) {
        const resp = new ModifyDefaultSubnetResponse();
        this.request("ModifyDefaultSubnet", req, resp, cb);
    }
    /**
     * 删除弹性网卡
     * @param {DeleteNetworkInterfaceRequest} req
     * @param {function(string, DeleteNetworkInterfaceResponse):void} cb
     * @public
     */
    DeleteNetworkInterface(req, cb) {
        const resp = new DeleteNetworkInterfaceResponse();
        this.request("DeleteNetworkInterface", req, resp, cb);
    }
    /**
     * 删除业务模块
     * @param {DeleteModuleRequest} req
     * @param {function(string, DeleteModuleResponse):void} cb
     * @public
     */
    DeleteModule(req, cb) {
        const resp = new DeleteModuleResponse();
        this.request("DeleteModule", req, resp, cb);
    }
    /**
     * 只有状态为RUNNING的实例才可以进行此操作；接口调用成功时，实例会进入REBOOTING状态；重启实例成功时，实例会进入RUNNING状态；支持强制重启，强制重启的效果等同于关闭物理计算机的电源开关再重新启动。强制重启可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常重启时使用。
     * @param {RebootInstancesRequest} req
     * @param {function(string, RebootInstancesResponse):void} cb
     * @public
     */
    RebootInstances(req, cb) {
        const resp = new RebootInstancesResponse();
        this.request("RebootInstances", req, resp, cb);
    }
    /**
     * 查询私有网络列表
     * @param {DescribeVpcsRequest} req
     * @param {function(string, DescribeVpcsResponse):void} cb
     * @public
     */
    DescribeVpcs(req, cb) {
        const resp = new DescribeVpcsResponse();
        this.request("DescribeVpcs", req, resp, cb);
    }
    /**
     * 弹性网卡内网IP迁移。
该接口用于将一个内网IP从一个弹性网卡上迁移到另外一个弹性网卡，主IP地址不支持迁移。
迁移前后的弹性网卡必须在同一个子网内。
     * @param {MigratePrivateIpAddressRequest} req
     * @param {function(string, MigratePrivateIpAddressResponse):void} cb
     * @public
     */
    MigratePrivateIpAddress(req, cb) {
        const resp = new MigratePrivateIpAddressResponse();
        this.request("MigratePrivateIpAddress", req, resp, cb);
    }
    /**
     * 展示镜像列表
     * @param {DescribeImageRequest} req
     * @param {function(string, DescribeImageResponse):void} cb
     * @public
     */
    DescribeImage(req, cb) {
        const resp = new DescribeImageResponse();
        this.request("DescribeImage", req, resp, cb);
    }
    /**
     * 修改模块IP直通。
     * @param {ModifyModuleIpDirectRequest} req
     * @param {function(string, ModifyModuleIpDirectResponse):void} cb
     * @public
     */
    ModifyModuleIpDirect(req, cb) {
        const resp = new ModifyModuleIpDirectResponse();
        this.request("ModifyModuleIpDirect", req, resp, cb);
    }
    /**
     * 删除镜像
     * @param {DeleteImageRequest} req
     * @param {function(string, DeleteImageResponse):void} cb
     * @public
     */
    DeleteImage(req, cb) {
        const resp = new DeleteImageResponse();
        this.request("DeleteImage", req, resp, cb);
    }
    /**
     * 调整弹性公网IP带宽

     * @param {ModifyAddressesBandwidthRequest} req
     * @param {function(string, ModifyAddressesBandwidthResponse):void} cb
     * @public
     */
    ModifyAddressesBandwidth(req, cb) {
        const resp = new ModifyAddressesBandwidthResponse();
        this.request("ModifyAddressesBandwidth", req, resp, cb);
    }
    /**
     * 弹性网卡退还内网 IP。
退还弹性网卡上的辅助内网IP，接口自动解关联弹性公网 IP。不能退还弹性网卡的主内网IP。
     * @param {RemovePrivateIpAddressesRequest} req
     * @param {function(string, RemovePrivateIpAddressesResponse):void} cb
     * @public
     */
    RemovePrivateIpAddresses(req, cb) {
        const resp = new RemovePrivateIpAddressesResponse();
        this.request("RemovePrivateIpAddresses", req, resp, cb);
    }
    /**
     * 创建子网，若创建成功，则此子网会成为此可用区的默认子网。
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        const resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ecm_client.js.map