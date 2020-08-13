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
const DescribeUserCmdTasksResponse = models_1.Models.DescribeUserCmdTasksResponse;
const RunUserCmdRequest = models_1.Models.RunUserCmdRequest;
const CreatePsaRegulationRequest = models_1.Models.CreatePsaRegulationRequest;
const DescribeDeviceInventoryResponse = models_1.Models.DescribeDeviceInventoryResponse;
const DescribeOsInfoResponse = models_1.Models.DescribeOsInfoResponse;
const DescribeOsInfoRequest = models_1.Models.DescribeOsInfoRequest;
const DescribeTaskOperationLogResponse = models_1.Models.DescribeTaskOperationLogResponse;
const CreateCustomImageRequest = models_1.Models.CreateCustomImageRequest;
const DescribeCustomImagesRequest = models_1.Models.DescribeCustomImagesRequest;
const DescribeUserCmdTaskInfoResponse = models_1.Models.DescribeUserCmdTaskInfoResponse;
const DescribeDevicesResponse = models_1.Models.DescribeDevicesResponse;
const ModifyLanIpRequest = models_1.Models.ModifyLanIpRequest;
const DeviceClass = models_1.Models.DeviceClass;
const DescribeRepairTaskConstantRequest = models_1.Models.DescribeRepairTaskConstantRequest;
const DeletePsaRegulationRequest = models_1.Models.DeletePsaRegulationRequest;
const DescribeCustomImageProcessRequest = models_1.Models.DescribeCustomImageProcessRequest;
const CpuInfo = models_1.Models.CpuInfo;
const CustomImage = models_1.Models.CustomImage;
const ModifyDeviceAutoRenewFlagRequest = models_1.Models.ModifyDeviceAutoRenewFlagRequest;
const StartDevicesResponse = models_1.Models.StartDevicesResponse;
const BindPsaTagRequest = models_1.Models.BindPsaTagRequest;
const DescribeRegionsResponse = models_1.Models.DescribeRegionsResponse;
const DevicePartition = models_1.Models.DevicePartition;
const OfflineDevicesResponse = models_1.Models.OfflineDevicesResponse;
const ModifyPsaRegulationRequest = models_1.Models.ModifyPsaRegulationRequest;
const RecoverDevicesRequest = models_1.Models.RecoverDevicesRequest;
const DescribeDeviceClassPartitionRequest = models_1.Models.DescribeDeviceClassPartitionRequest;
const ZoneInfo = models_1.Models.ZoneInfo;
const CreateSpotDeviceResponse = models_1.Models.CreateSpotDeviceResponse;
const BuyDevicesRequest = models_1.Models.BuyDevicesRequest;
const DescribeHardwareSpecificationRequest = models_1.Models.DescribeHardwareSpecificationRequest;
const Tag = models_1.Models.Tag;
const CreateCustomImageResponse = models_1.Models.CreateCustomImageResponse;
const HostedDeviceOutBandInfo = models_1.Models.HostedDeviceOutBandInfo;
const ReturnDevicesRequest = models_1.Models.ReturnDevicesRequest;
const ModifyDeviceAliasesResponse = models_1.Models.ModifyDeviceAliasesResponse;
const PsaRegulation = models_1.Models.PsaRegulation;
const DescribeDevicePartitionResponse = models_1.Models.DescribeDevicePartitionResponse;
const DescribeHostedDeviceOutBandInfoRequest = models_1.Models.DescribeHostedDeviceOutBandInfoRequest;
const RebootDevicesResponse = models_1.Models.RebootDevicesResponse;
const ResetDevicePasswordRequest = models_1.Models.ResetDevicePasswordRequest;
const SubtaskStatus = models_1.Models.SubtaskStatus;
const DescribeDeviceInventoryRequest = models_1.Models.DescribeDeviceInventoryRequest;
const DescribeCustomImagesResponse = models_1.Models.DescribeCustomImagesResponse;
const DeviceAlias = models_1.Models.DeviceAlias;
const DeleteCustomImagesRequest = models_1.Models.DeleteCustomImagesRequest;
const PartitionInfo = models_1.Models.PartitionInfo;
const DescribeDevicePositionRequest = models_1.Models.DescribeDevicePositionRequest;
const UserCmdTaskInfo = models_1.Models.UserCmdTaskInfo;
const ShutdownDevicesResponse = models_1.Models.ShutdownDevicesResponse;
const TaskType = models_1.Models.TaskType;
const DeleteUserCmdsRequest = models_1.Models.DeleteUserCmdsRequest;
const DeviceDiskSizeInfo = models_1.Models.DeviceDiskSizeInfo;
const AttachCamRoleRequest = models_1.Models.AttachCamRoleRequest;
const DescribeDeviceClassResponse = models_1.Models.DescribeDeviceClassResponse;
const DescribeDeviceHardwareInfoResponse = models_1.Models.DescribeDeviceHardwareInfoResponse;
const ModifyUserCmdRequest = models_1.Models.ModifyUserCmdRequest;
const DescribeDevicePriceInfoResponse = models_1.Models.DescribeDevicePriceInfoResponse;
const ReloadDeviceOsResponse = models_1.Models.ReloadDeviceOsResponse;
const RunUserCmdResponse = models_1.Models.RunUserCmdResponse;
const ReloadDeviceOsRequest = models_1.Models.ReloadDeviceOsRequest;
const DescribeUserCmdsRequest = models_1.Models.DescribeUserCmdsRequest;
const DescribeTaskInfoRequest = models_1.Models.DescribeTaskInfoRequest;
const RepairTaskControlResponse = models_1.Models.RepairTaskControlResponse;
const DescribeRegionsRequest = models_1.Models.DescribeRegionsRequest;
const DescribePsaRegulationsRequest = models_1.Models.DescribePsaRegulationsRequest;
const UnbindPsaTagResponse = models_1.Models.UnbindPsaTagResponse;
const DescribeDevicePriceInfoRequest = models_1.Models.DescribeDevicePriceInfoRequest;
const DescribeDevicePartitionRequest = models_1.Models.DescribeDevicePartitionRequest;
const TaskInfo = models_1.Models.TaskInfo;
const ModifyPsaRegulationResponse = models_1.Models.ModifyPsaRegulationResponse;
const UserCmdTask = models_1.Models.UserCmdTask;
const TaskOperationLog = models_1.Models.TaskOperationLog;
const FailedTaskInfo = models_1.Models.FailedTaskInfo;
const DescribeDevicePositionResponse = models_1.Models.DescribeDevicePositionResponse;
const DeleteUserCmdsResponse = models_1.Models.DeleteUserCmdsResponse;
const ModifyDeviceAliasesRequest = models_1.Models.ModifyDeviceAliasesRequest;
const ModifyPayModePre2PostResponse = models_1.Models.ModifyPayModePre2PostResponse;
const SuccessTaskInfo = models_1.Models.SuccessTaskInfo;
const SetOutBandVpnAuthPasswordRequest = models_1.Models.SetOutBandVpnAuthPasswordRequest;
const OfflineDevicesRequest = models_1.Models.OfflineDevicesRequest;
const DeviceHardwareInfo = models_1.Models.DeviceHardwareInfo;
const DiskInfo = models_1.Models.DiskInfo;
const SetOutBandVpnAuthPasswordResponse = models_1.Models.SetOutBandVpnAuthPasswordResponse;
const DescribeTaskInfoResponse = models_1.Models.DescribeTaskInfoResponse;
const DescribeUserCmdTaskInfoRequest = models_1.Models.DescribeUserCmdTaskInfoRequest;
const CreateUserCmdResponse = models_1.Models.CreateUserCmdResponse;
const ModifyUserCmdResponse = models_1.Models.ModifyUserCmdResponse;
const ModifyPayModePre2PostRequest = models_1.Models.ModifyPayModePre2PostRequest;
const DeviceOperationLog = models_1.Models.DeviceOperationLog;
const DescribeRepairTaskConstantResponse = models_1.Models.DescribeRepairTaskConstantResponse;
const BuyDevicesResponse = models_1.Models.BuyDevicesResponse;
const ModifyLanIpResponse = models_1.Models.ModifyLanIpResponse;
const DescribePsaRegulationsResponse = models_1.Models.DescribePsaRegulationsResponse;
const StartDevicesRequest = models_1.Models.StartDevicesRequest;
const DescribeUserCmdsResponse = models_1.Models.DescribeUserCmdsResponse;
const ModifyDeviceAutoRenewFlagResponse = models_1.Models.ModifyDeviceAutoRenewFlagResponse;
const DescribeOperationResultResponse = models_1.Models.DescribeOperationResultResponse;
const DescribeDeviceClassRequest = models_1.Models.DescribeDeviceClassRequest;
const ModifyCustomImageAttributeRequest = models_1.Models.ModifyCustomImageAttributeRequest;
const DeletePsaRegulationResponse = models_1.Models.DeletePsaRegulationResponse;
const DeviceClassPartitionInfo = models_1.Models.DeviceClassPartitionInfo;
const DescribeTaskOperationLogRequest = models_1.Models.DescribeTaskOperationLogRequest;
const DescribeDeviceOperationLogRequest = models_1.Models.DescribeDeviceOperationLogRequest;
const DescribeOperationResultRequest = models_1.Models.DescribeOperationResultRequest;
const AttachCamRoleResponse = models_1.Models.AttachCamRoleResponse;
const RecoverDevicesResponse = models_1.Models.RecoverDevicesResponse;
const DetachCamRoleResponse = models_1.Models.DetachCamRoleResponse;
const ShutdownDevicesRequest = models_1.Models.ShutdownDevicesRequest;
const UnbindPsaTagRequest = models_1.Models.UnbindPsaTagRequest;
const ModifyCustomImageAttributeResponse = models_1.Models.ModifyCustomImageAttributeResponse;
const RegionInfo = models_1.Models.RegionInfo;
const UserCmd = models_1.Models.UserCmd;
const CustomImageProcess = models_1.Models.CustomImageProcess;
const CreateSpotDeviceRequest = models_1.Models.CreateSpotDeviceRequest;
const OsInfo = models_1.Models.OsInfo;
const CreateUserCmdRequest = models_1.Models.CreateUserCmdRequest;
const ReturnDevicesResponse = models_1.Models.ReturnDevicesResponse;
const BindPsaTagResponse = models_1.Models.BindPsaTagResponse;
const DescribeHostedDeviceOutBandInfoResponse = models_1.Models.DescribeHostedDeviceOutBandInfoResponse;
const DevicePriceInfo = models_1.Models.DevicePriceInfo;
const RebootDevicesRequest = models_1.Models.RebootDevicesRequest;
const DeleteCustomImagesResponse = models_1.Models.DeleteCustomImagesResponse;
const DescribeDevicesRequest = models_1.Models.DescribeDevicesRequest;
const DescribeHardwareSpecificationResponse = models_1.Models.DescribeHardwareSpecificationResponse;
const CreatePsaRegulationResponse = models_1.Models.CreatePsaRegulationResponse;
const DescribeCustomImageProcessResponse = models_1.Models.DescribeCustomImageProcessResponse;
const DescribeDeviceHardwareInfoRequest = models_1.Models.DescribeDeviceHardwareInfoRequest;
const DescribeDeviceOperationLogResponse = models_1.Models.DescribeDeviceOperationLogResponse;
const RepairTaskControlRequest = models_1.Models.RepairTaskControlRequest;
const DevicePositionInfo = models_1.Models.DevicePositionInfo;
const DeviceInfo = models_1.Models.DeviceInfo;
const ResetDevicePasswordResponse = models_1.Models.ResetDevicePasswordResponse;
const DescribeUserCmdTasksRequest = models_1.Models.DescribeUserCmdTasksRequest;
const DetachCamRoleRequest = models_1.Models.DetachCamRoleRequest;
const DescribeDeviceClassPartitionResponse = models_1.Models.DescribeDeviceClassPartitionResponse;
/**
 * bm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("bm.tencentcloudapi.com", "2018-04-23", credential, region, profile);
    }
    /**
     * 获取自定义脚本信息列表
     * @param {DescribeUserCmdsRequest} req
     * @param {function(string, DescribeUserCmdsResponse):void} cb
     * @public
     */
    DescribeUserCmds(req, cb) {
        const resp = new DescribeUserCmdsResponse();
        this.request("DescribeUserCmds", req, resp, cb);
    }
    /**
     * 重启机器
     * @param {RebootDevicesRequest} req
     * @param {function(string, RebootDevicesResponse):void} cb
     * @public
     */
    RebootDevices(req, cb) {
        const resp = new RebootDevicesResponse();
        this.request("RebootDevices", req, resp, cb);
    }
    /**
     * 允许修改规则信息及关联故障类型
     * @param {ModifyPsaRegulationRequest} req
     * @param {function(string, ModifyPsaRegulationResponse):void} cb
     * @public
     */
    ModifyPsaRegulation(req, cb) {
        const resp = new ModifyPsaRegulationResponse();
        this.request("ModifyPsaRegulation", req, resp, cb);
    }
    /**
     * 获取预授权规则列表
     * @param {DescribePsaRegulationsRequest} req
     * @param {function(string, DescribePsaRegulationsResponse):void} cb
     * @public
     */
    DescribePsaRegulations(req, cb) {
        const resp = new DescribePsaRegulationsResponse();
        this.request("DescribePsaRegulations", req, resp, cb);
    }
    /**
     * 修改物理机服务器自动续费标志
     * @param {ModifyDeviceAutoRenewFlagRequest} req
     * @param {function(string, ModifyDeviceAutoRenewFlagResponse):void} cb
     * @public
     */
    ModifyDeviceAutoRenewFlag(req, cb) {
        const resp = new ModifyDeviceAutoRenewFlagResponse();
        this.request("ModifyDeviceAutoRenewFlag", req, resp, cb);
    }
    /**
     * 销毁黑石物理机实例：可以销毁物理机列表中的竞价实例，或回收站列表中所有计费模式的实例
     * @param {OfflineDevicesRequest} req
     * @param {function(string, OfflineDevicesResponse):void} cb
     * @public
     */
    OfflineDevices(req, cb) {
        const resp = new OfflineDevicesResponse();
        this.request("OfflineDevices", req, resp, cb);
    }
    /**
     * 修改物理机内网IP（不重装系统）
     * @param {ModifyLanIpRequest} req
     * @param {function(string, ModifyLanIpResponse):void} cb
     * @public
     */
    ModifyLanIp(req, cb) {
        const resp = new ModifyLanIpResponse();
        this.request("ModifyLanIp", req, resp, cb);
    }
    /**
     * 运行自定义脚本
     * @param {RunUserCmdRequest} req
     * @param {function(string, RunUserCmdResponse):void} cb
     * @public
     */
    RunUserCmd(req, cb) {
        const resp = new RunUserCmdResponse();
        this.request("RunUserCmd", req, resp, cb);
    }
    /**
     * 查询自定义镜像制作进度
     * @param {DescribeCustomImageProcessRequest} req
     * @param {function(string, DescribeCustomImageProcessResponse):void} cb
     * @public
     */
    DescribeCustomImageProcess(req, cb) {
        const resp = new DescribeCustomImageProcessResponse();
        this.request("DescribeCustomImageProcess", req, resp, cb);
    }
    /**
     * 开启服务器
     * @param {StartDevicesRequest} req
     * @param {function(string, StartDevicesResponse):void} cb
     * @public
     */
    StartDevices(req, cb) {
        const resp = new StartDevicesResponse();
        this.request("StartDevices", req, resp, cb);
    }
    /**
     * 重装操作系统
     * @param {ReloadDeviceOsRequest} req
     * @param {function(string, ReloadDeviceOsResponse):void} cb
     * @public
     */
    ReloadDeviceOs(req, cb) {
        const resp = new ReloadDeviceOsResponse();
        this.request("ReloadDeviceOs", req, resp, cb);
    }
    /**
     * 查询设备硬件配置信息，如 CPU 型号，内存大小，磁盘大小和数量
     * @param {DescribeDeviceHardwareInfoRequest} req
     * @param {function(string, DescribeDeviceHardwareInfoResponse):void} cb
     * @public
     */
    DescribeDeviceHardwareInfo(req, cb) {
        const resp = new DescribeDeviceHardwareInfoResponse();
        this.request("DescribeDeviceHardwareInfo", req, resp, cb);
    }
    /**
     * 获取自定义脚本任务列表
     * @param {DescribeUserCmdTasksRequest} req
     * @param {function(string, DescribeUserCmdTasksResponse):void} cb
     * @public
     */
    DescribeUserCmdTasks(req, cb) {
        const resp = new DescribeUserCmdTasksResponse();
        this.request("DescribeUserCmdTasks", req, resp, cb);
    }
    /**
     * 创建预授权规则
     * @param {CreatePsaRegulationRequest} req
     * @param {function(string, CreatePsaRegulationResponse):void} cb
     * @public
     */
    CreatePsaRegulation(req, cb) {
        const resp = new CreatePsaRegulationResponse();
        this.request("CreatePsaRegulation", req, resp, cb);
    }
    /**
     * 获取获取设备类型
     * @param {DescribeDeviceClassRequest} req
     * @param {function(string, DescribeDeviceClassResponse):void} cb
     * @public
     */
    DescribeDeviceClass(req, cb) {
        const resp = new DescribeDeviceClassResponse();
        this.request("DescribeDeviceClass", req, resp, cb);
    }
    /**
     * 购买黑石物理机
     * @param {BuyDevicesRequest} req
     * @param {function(string, BuyDevicesResponse):void} cb
     * @public
     */
    BuyDevices(req, cb) {
        const resp = new BuyDevicesResponse();
        this.request("BuyDevices", req, resp, cb);
    }
    /**
     * 修改自定义脚本
     * @param {ModifyUserCmdRequest} req
     * @param {function(string, ModifyUserCmdResponse):void} cb
     * @public
     */
    ModifyUserCmd(req, cb) {
        const resp = new ModifyUserCmdResponse();
        this.request("ModifyUserCmd", req, resp, cb);
    }
    /**
     * 删除自定义脚本
     * @param {DeleteUserCmdsRequest} req
     * @param {function(string, DeleteUserCmdsResponse):void} cb
     * @public
     */
    DeleteUserCmds(req, cb) {
        const resp = new DeleteUserCmdsResponse();
        this.request("DeleteUserCmds", req, resp, cb);
    }
    /**
     * 查询托管设备带外信息
     * @param {DescribeHostedDeviceOutBandInfoRequest} req
     * @param {function(string, DescribeHostedDeviceOutBandInfoResponse):void} cb
     * @public
     */
    DescribeHostedDeviceOutBandInfo(req, cb) {
        const resp = new DescribeHostedDeviceOutBandInfoResponse();
        this.request("DescribeHostedDeviceOutBandInfo", req, resp, cb);
    }
    /**
     * 为预授权规则绑定标签
     * @param {BindPsaTagRequest} req
     * @param {function(string, BindPsaTagResponse):void} cb
     * @public
     */
    BindPsaTag(req, cb) {
        const resp = new BindPsaTagResponse();
        this.request("BindPsaTag", req, resp, cb);
    }
    /**
     * 删除自定义镜像<br>
正用于部署或重装中的镜像被删除后，镜像文件将保留一段时间，直到部署或重装结束
     * @param {DeleteCustomImagesRequest} req
     * @param {function(string, DeleteCustomImagesResponse):void} cb
     * @public
     */
    DeleteCustomImages(req, cb) {
        const resp = new DeleteCustomImagesResponse();
        this.request("DeleteCustomImages", req, resp, cb);
    }
    /**
     * 删除预授权规则
     * @param {DeletePsaRegulationRequest} req
     * @param {function(string, DeletePsaRegulationResponse):void} cb
     * @public
     */
    DeletePsaRegulation(req, cb) {
        const resp = new DeletePsaRegulationResponse();
        this.request("DeletePsaRegulation", req, resp, cb);
    }
    /**
     * 创建自定义脚本
     * @param {CreateUserCmdRequest} req
     * @param {function(string, CreateUserCmdResponse):void} cb
     * @public
     */
    CreateUserCmd(req, cb) {
        const resp = new CreateUserCmdResponse();
        this.request("CreateUserCmd", req, resp, cb);
    }
    /**
     * 查询自定义机型部件信息，包括CpuId对应的型号，DiskTypeId对应的磁盘类型
     * @param {DescribeHardwareSpecificationRequest} req
     * @param {function(string, DescribeHardwareSpecificationResponse):void} cb
     * @public
     */
    DescribeHardwareSpecification(req, cb) {
        const resp = new DescribeHardwareSpecificationResponse();
        this.request("DescribeHardwareSpecification", req, resp, cb);
    }
    /**
     * 服务器绑定CAM角色
     * @param {DetachCamRoleRequest} req
     * @param {function(string, DetachCamRoleResponse):void} cb
     * @public
     */
    DetachCamRole(req, cb) {
        const resp = new DetachCamRoleResponse();
        this.request("DetachCamRole", req, resp, cb);
    }
    /**
     * 服务器绑定CAM角色，该角色授权访问黑石物理服务器服务，为黑石物理服务器提供了访问资源的权限，如请求服务器的临时证书
     * @param {AttachCamRoleRequest} req
     * @param {function(string, AttachCamRoleResponse):void} cb
     * @public
     */
    AttachCamRole(req, cb) {
        const resp = new AttachCamRoleResponse();
        this.request("AttachCamRole", req, resp, cb);
    }
    /**
     * 查询指定机型所支持的操作系统
     * @param {DescribeOsInfoRequest} req
     * @param {function(string, DescribeOsInfoResponse):void} cb
     * @public
     */
    DescribeOsInfo(req, cb) {
        const resp = new DescribeOsInfoResponse();
        this.request("DescribeOsInfo", req, resp, cb);
    }
    /**
     * 获取异步操作状态的完成状态
     * @param {DescribeOperationResultRequest} req
     * @param {function(string, DescribeOperationResultResponse):void} cb
     * @public
     */
    DescribeOperationResult(req, cb) {
        const resp = new DescribeOperationResultResponse();
        this.request("DescribeOperationResult", req, resp, cb);
    }
    /**
     * 用于修改自定义镜像名或描述
     * @param {ModifyCustomImageAttributeRequest} req
     * @param {function(string, ModifyCustomImageAttributeResponse):void} cb
     * @public
     */
    ModifyCustomImageAttribute(req, cb) {
        const resp = new ModifyCustomImageAttributeResponse();
        this.request("ModifyCustomImageAttribute", req, resp, cb);
    }
    /**
     * 查询服务器所在的位置，如机架，上联交换机等信息
     * @param {DescribeDevicePositionRequest} req
     * @param {function(string, DescribeDevicePositionResponse):void} cb
     * @public
     */
    DescribeDevicePosition(req, cb) {
        const resp = new DescribeDevicePositionResponse();
        this.request("DescribeDevicePosition", req, resp, cb);
    }
    /**
     * 查询地域以及可用区
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        const resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }
    /**
     * 获取自定义脚本任务详细信息
     * @param {DescribeUserCmdTaskInfoRequest} req
     * @param {function(string, DescribeUserCmdTaskInfoResponse):void} cb
     * @public
     */
    DescribeUserCmdTaskInfo(req, cb) {
        const resp = new DescribeUserCmdTaskInfoResponse();
        this.request("DescribeUserCmdTaskInfo", req, resp, cb);
    }
    /**
     * 查询服务器价格信息，支持设备的批量查找，支持标准机型和弹性机型的混合查找
     * @param {DescribeDevicePriceInfoRequest} req
     * @param {function(string, DescribeDevicePriceInfoResponse):void} cb
     * @public
     */
    DescribeDevicePriceInfo(req, cb) {
        const resp = new DescribeDevicePriceInfoResponse();
        this.request("DescribeDevicePriceInfo", req, resp, cb);
    }
    /**
     * 退回物理机至回收站，支持批量退还不同计费模式的物理机（包括预付费、后付费、预付费转后付费）
     * @param {ReturnDevicesRequest} req
     * @param {function(string, ReturnDevicesResponse):void} cb
     * @public
     */
    ReturnDevices(req, cb) {
        const resp = new ReturnDevicesResponse();
        this.request("ReturnDevices", req, resp, cb);
    }
    /**
     * 获取维修任务操作日志
     * @param {DescribeTaskOperationLogRequest} req
     * @param {function(string, DescribeTaskOperationLogResponse):void} cb
     * @public
     */
    DescribeTaskOperationLog(req, cb) {
        const resp = new DescribeTaskOperationLogResponse();
        this.request("DescribeTaskOperationLog", req, resp, cb);
    }
    /**
     * 将设备的预付费模式修改为后付费计费模式，支持批量转换。（前提是客户要加入黑石物理机后付费计费的白名单，申请黑石物理机后付费可以联系腾讯云客服）
     * @param {ModifyPayModePre2PostRequest} req
     * @param {function(string, ModifyPayModePre2PostResponse):void} cb
     * @public
     */
    ModifyPayModePre2Post(req, cb) {
        const resp = new ModifyPayModePre2PostResponse();
        this.request("ModifyPayModePre2Post", req, resp, cb);
    }
    /**
     * 解除标签与预授权规则的绑定
     * @param {UnbindPsaTagRequest} req
     * @param {function(string, UnbindPsaTagResponse):void} cb
     * @public
     */
    UnbindPsaTag(req, cb) {
        const resp = new UnbindPsaTagResponse();
        this.request("UnbindPsaTag", req, resp, cb);
    }
    /**
     * 创建黑石竞价实例
     * @param {CreateSpotDeviceRequest} req
     * @param {function(string, CreateSpotDeviceResponse):void} cb
     * @public
     */
    CreateSpotDevice(req, cb) {
        const resp = new CreateSpotDeviceResponse();
        this.request("CreateSpotDevice", req, resp, cb);
    }
    /**
     * 修改服务器名称
     * @param {ModifyDeviceAliasesRequest} req
     * @param {function(string, ModifyDeviceAliasesResponse):void} cb
     * @public
     */
    ModifyDeviceAliases(req, cb) {
        const resp = new ModifyDeviceAliasesResponse();
        this.request("ModifyDeviceAliases", req, resp, cb);
    }
    /**
     * 查询设备库存
     * @param {DescribeDeviceInventoryRequest} req
     * @param {function(string, DescribeDeviceInventoryResponse):void} cb
     * @public
     */
    DescribeDeviceInventory(req, cb) {
        const resp = new DescribeDeviceInventoryResponse();
        this.request("DescribeDeviceInventory", req, resp, cb);
    }
    /**
     * 查询设备操作日志， 如设备重启，重装，设置密码等操作
     * @param {DescribeDeviceOperationLogRequest} req
     * @param {function(string, DescribeDeviceOperationLogResponse):void} cb
     * @public
     */
    DescribeDeviceOperationLog(req, cb) {
        const resp = new DescribeDeviceOperationLogResponse();
        this.request("DescribeDeviceOperationLog", req, resp, cb);
    }
    /**
     * 获取用户维修任务列表及详细信息<br>
<br>
TaskStatus（任务状态ID）与状态中文名的对应关系如下：<br>
1：未授权<br>
2：处理中<br>
3：待确认<br>
4：未授权-暂不处理<br>
5：已恢复<br>
6：待确认-未恢复<br>
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        const resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }
    /**
     * 此接口用于操作维修任务<br>
入参TaskId为维修任务ID<br>
入参Operate表示对维修任务的操作，支持如下取值：<br>
AuthorizeRepair（授权维修）<br>
Ignore（暂不提醒）<br>
ConfirmRecovered（维修完成后，确认故障恢复）<br>
ConfirmUnRecovered（维修完成后，确认故障未恢复）<br>
<br>
操作约束（当前任务状态(TaskStatus)->对应可执行的操作）：<br>
未授权(1)->授权维修；暂不处理<br>
暂不处理(4)->授权维修<br>
待确认(3)->确认故障恢复；确认故障未恢复<br>
未恢复(6)->确认故障恢复<br>
<br>
对于Ping不可达故障的任务，还允许：<br>
未授权->确认故障恢复<br>
暂不处理->确认故障恢复<br>
<br>
处理中与已恢复状态的任务不允许进行操作。<br>
<br>
详细信息请访问：https://cloud.tencent.com/document/product/386/18190
     * @param {RepairTaskControlRequest} req
     * @param {function(string, RepairTaskControlResponse):void} cb
     * @public
     */
    RepairTaskControl(req, cb) {
        const resp = new RepairTaskControlResponse();
        this.request("RepairTaskControl", req, resp, cb);
    }
    /**
     * 查询物理服务器，可以按照实例，业务IP等过滤
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        const resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }
    /**
     * 维修任务配置获取
     * @param {DescribeRepairTaskConstantRequest} req
     * @param {function(string, DescribeRepairTaskConstantResponse):void} cb
     * @public
     */
    DescribeRepairTaskConstant(req, cb) {
        const resp = new DescribeRepairTaskConstantResponse();
        this.request("DescribeRepairTaskConstant", req, resp, cb);
    }
    /**
     * 设置带外VPN认证用户密码
     * @param {SetOutBandVpnAuthPasswordRequest} req
     * @param {function(string, SetOutBandVpnAuthPasswordResponse):void} cb
     * @public
     */
    SetOutBandVpnAuthPassword(req, cb) {
        const resp = new SetOutBandVpnAuthPasswordResponse();
        this.request("SetOutBandVpnAuthPassword", req, resp, cb);
    }
    /**
     * 查看自定义镜像列表
     * @param {DescribeCustomImagesRequest} req
     * @param {function(string, DescribeCustomImagesResponse):void} cb
     * @public
     */
    DescribeCustomImages(req, cb) {
        const resp = new DescribeCustomImagesResponse();
        this.request("DescribeCustomImages", req, resp, cb);
    }
    /**
     * 恢复回收站中的物理机（仅限后付费的物理机）
     * @param {RecoverDevicesRequest} req
     * @param {function(string, RecoverDevicesResponse):void} cb
     * @public
     */
    RecoverDevices(req, cb) {
        const resp = new RecoverDevicesResponse();
        this.request("RecoverDevices", req, resp, cb);
    }
    /**
     * 获取物理机的分区格式
     * @param {DescribeDevicePartitionRequest} req
     * @param {function(string, DescribeDevicePartitionResponse):void} cb
     * @public
     */
    DescribeDevicePartition(req, cb) {
        const resp = new DescribeDevicePartitionResponse();
        this.request("DescribeDevicePartition", req, resp, cb);
    }
    /**
     * 关闭服务器
     * @param {ShutdownDevicesRequest} req
     * @param {function(string, ShutdownDevicesResponse):void} cb
     * @public
     */
    ShutdownDevices(req, cb) {
        const resp = new ShutdownDevicesResponse();
        this.request("ShutdownDevices", req, resp, cb);
    }
    /**
     * 重置服务器密码
     * @param {ResetDevicePasswordRequest} req
     * @param {function(string, ResetDevicePasswordResponse):void} cb
     * @public
     */
    ResetDevicePassword(req, cb) {
        const resp = new ResetDevicePasswordResponse();
        this.request("ResetDevicePassword", req, resp, cb);
    }
    /**
     * 查询机型支持的RAID方式， 并返回系统盘的分区和逻辑盘的列表
     * @param {DescribeDeviceClassPartitionRequest} req
     * @param {function(string, DescribeDeviceClassPartitionResponse):void} cb
     * @public
     */
    DescribeDeviceClassPartition(req, cb) {
        const resp = new DescribeDeviceClassPartitionResponse();
        this.request("DescribeDeviceClassPartition", req, resp, cb);
    }
    /**
     * 创建自定义镜像<br>
每个AppId在每个可用区最多保留20个自定义镜像
     * @param {CreateCustomImageRequest} req
     * @param {function(string, CreateCustomImageResponse):void} cb
     * @public
     */
    CreateCustomImage(req, cb) {
        const resp = new CreateCustomImageResponse();
        this.request("CreateCustomImage", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=bm_client.js.map