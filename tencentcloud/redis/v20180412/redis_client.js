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
const ModifyInstanceParamsResponse = models_1.Models.ModifyInstanceParamsResponse;
const RedisBackupSet = models_1.Models.RedisBackupSet;
const DescribeInstanceMonitorTopNCmdResponse = models_1.Models.DescribeInstanceMonitorTopNCmdResponse;
const ModifyAutoBackupConfigResponse = models_1.Models.ModifyAutoBackupConfigResponse;
const RestoreInstanceRequest = models_1.Models.RestoreInstanceRequest;
const TaskInfoDetail = models_1.Models.TaskInfoDetail;
const SwitchInstanceVipRequest = models_1.Models.SwitchInstanceVipRequest;
const UpgradeInstanceVersionResponse = models_1.Models.UpgradeInstanceVersionResponse;
const CreateInstancesRequest = models_1.Models.CreateInstancesRequest;
const ModifyNetworkConfigResponse = models_1.Models.ModifyNetworkConfigResponse;
const CommandTake = models_1.Models.CommandTake;
const DescribeInstanceMonitorBigKeyResponse = models_1.Models.DescribeInstanceMonitorBigKeyResponse;
const Inbound = models_1.Models.Inbound;
const AssociateSecurityGroupsRequest = models_1.Models.AssociateSecurityGroupsRequest;
const DescribeTaskListResponse = models_1.Models.DescribeTaskListResponse;
const ModifyInstanceRequest = models_1.Models.ModifyInstanceRequest;
const RenewInstanceResponse = models_1.Models.RenewInstanceResponse;
const DescribeSlowLogResponse = models_1.Models.DescribeSlowLogResponse;
const DescribeDBSecurityGroupsResponse = models_1.Models.DescribeDBSecurityGroupsResponse;
const DescribeBackupUrlRequest = models_1.Models.DescribeBackupUrlRequest;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const InstanceEnumParam = models_1.Models.InstanceEnumParam;
const Account = models_1.Models.Account;
const SecurityGroupsInboundAndOutbound = models_1.Models.SecurityGroupsInboundAndOutbound;
const ResetPasswordResponse = models_1.Models.ResetPasswordResponse;
const ClearInstanceRequest = models_1.Models.ClearInstanceRequest;
const RegionConf = models_1.Models.RegionConf;
const BigKeyInfo = models_1.Models.BigKeyInfo;
const RenewInstanceRequest = models_1.Models.RenewInstanceRequest;
const DescribeInstanceParamRecordsResponse = models_1.Models.DescribeInstanceParamRecordsResponse;
const ModifyAutoBackupConfigRequest = models_1.Models.ModifyAutoBackupConfigRequest;
const InstanceMultiParam = models_1.Models.InstanceMultiParam;
const DescribeInstanceDealDetailRequest = models_1.Models.DescribeInstanceDealDetailRequest;
const DescribeProjectSecurityGroupRequest = models_1.Models.DescribeProjectSecurityGroupRequest;
const RestoreInstanceResponse = models_1.Models.RestoreInstanceResponse;
const DescribeInstanceShardsResponse = models_1.Models.DescribeInstanceShardsResponse;
const DestroyPrepaidInstanceRequest = models_1.Models.DestroyPrepaidInstanceRequest;
const ManualBackupInstanceResponse = models_1.Models.ManualBackupInstanceResponse;
const InstanceTagInfo = models_1.Models.InstanceTagInfo;
const DescribeInstanceDTSInfoResponse = models_1.Models.DescribeInstanceDTSInfoResponse;
const DestroyPostpaidInstanceResponse = models_1.Models.DestroyPostpaidInstanceResponse;
const ModifyInstanceResponse = models_1.Models.ModifyInstanceResponse;
const TradeDealDetail = models_1.Models.TradeDealDetail;
const SourceInfo = models_1.Models.SourceInfo;
const ModifyDBInstanceSecurityGroupsResponse = models_1.Models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeInstanceMonitorHotKeyRequest = models_1.Models.DescribeInstanceMonitorHotKeyRequest;
const DescribeInstanceDTSInfoRequest = models_1.Models.DescribeInstanceDTSInfoRequest;
const DescribeProductInfoResponse = models_1.Models.DescribeProductInfoResponse;
const ModifyInstanceAccountRequest = models_1.Models.ModifyInstanceAccountRequest;
const DescribeBackupUrlResponse = models_1.Models.DescribeBackupUrlResponse;
const InquiryPriceRenewInstanceResponse = models_1.Models.InquiryPriceRenewInstanceResponse;
const DescribeDBSecurityGroupsRequest = models_1.Models.DescribeDBSecurityGroupsRequest;
const InquiryPriceCreateInstanceResponse = models_1.Models.InquiryPriceCreateInstanceResponse;
const InstanceSecurityGroupDetail = models_1.Models.InstanceSecurityGroupDetail;
const ResetPasswordRequest = models_1.Models.ResetPasswordRequest;
const ModifyInstanceAccountResponse = models_1.Models.ModifyInstanceAccountResponse;
const DelayDistribution = models_1.Models.DelayDistribution;
const DescribeProjectSecurityGroupsResponse = models_1.Models.DescribeProjectSecurityGroupsResponse;
const DescribeInstanceMonitorTookDistResponse = models_1.Models.DescribeInstanceMonitorTookDistResponse;
const DescribeInstanceBackupsResponse = models_1.Models.DescribeInstanceBackupsResponse;
const InstanceIntegerParam = models_1.Models.InstanceIntegerParam;
const DescribeInstanceMonitorTookDistRequest = models_1.Models.DescribeInstanceMonitorTookDistRequest;
const ModifyMaintenanceWindowRequest = models_1.Models.ModifyMaintenanceWindowRequest;
const InstanceTextParam = models_1.Models.InstanceTextParam;
const DescribeInstanceMonitorTopNCmdTookResponse = models_1.Models.DescribeInstanceMonitorTopNCmdTookResponse;
const DescribeInstanceMonitorBigKeySizeDistRequest = models_1.Models.DescribeInstanceMonitorBigKeySizeDistRequest;
const DescribeInstanceAccountRequest = models_1.Models.DescribeInstanceAccountRequest;
const DescribeInstanceParamRecordsRequest = models_1.Models.DescribeInstanceParamRecordsRequest;
const DescribeTaskListRequest = models_1.Models.DescribeTaskListRequest;
const DisableReplicaReadonlyResponse = models_1.Models.DisableReplicaReadonlyResponse;
const CreateInstancesResponse = models_1.Models.CreateInstancesResponse;
const DescribeTaskInfoRequest = models_1.Models.DescribeTaskInfoRequest;
const DescribeInstanceMonitorTopNCmdRequest = models_1.Models.DescribeInstanceMonitorTopNCmdRequest;
const ModifyNetworkConfigRequest = models_1.Models.ModifyNetworkConfigRequest;
const DescribeInstanceSecurityGroupRequest = models_1.Models.DescribeInstanceSecurityGroupRequest;
const InstanceParamHistory = models_1.Models.InstanceParamHistory;
const DescribeInstanceParamsRequest = models_1.Models.DescribeInstanceParamsRequest;
const CleanUpInstanceResponse = models_1.Models.CleanUpInstanceResponse;
const ModifyDBInstanceSecurityGroupsRequest = models_1.Models.ModifyDBInstanceSecurityGroupsRequest;
const DescribeInstanceShardsRequest = models_1.Models.DescribeInstanceShardsRequest;
const Outbound = models_1.Models.Outbound;
const DescribeAutoBackupConfigResponse = models_1.Models.DescribeAutoBackupConfigResponse;
const InquiryPriceUpgradeInstanceRequest = models_1.Models.InquiryPriceUpgradeInstanceRequest;
const DescribeProjectSecurityGroupsRequest = models_1.Models.DescribeProjectSecurityGroupsRequest;
const DescribeInstanceMonitorBigKeySizeDistResponse = models_1.Models.DescribeInstanceMonitorBigKeySizeDistResponse;
const SecurityGroup = models_1.Models.SecurityGroup;
const CreateInstanceAccountRequest = models_1.Models.CreateInstanceAccountRequest;
const EnableReplicaReadonlyResponse = models_1.Models.EnableReplicaReadonlyResponse;
const DescribeMaintenanceWindowResponse = models_1.Models.DescribeMaintenanceWindowResponse;
const DescribeInstanceSecurityGroupResponse = models_1.Models.DescribeInstanceSecurityGroupResponse;
const ProductConf = models_1.Models.ProductConf;
const InstanceNode = models_1.Models.InstanceNode;
const StartupInstanceResponse = models_1.Models.StartupInstanceResponse;
const DescribeInstanceDTSInstanceInfo = models_1.Models.DescribeInstanceDTSInstanceInfo;
const AssociateSecurityGroupsResponse = models_1.Models.AssociateSecurityGroupsResponse;
const DescribeTaskInfoResponse = models_1.Models.DescribeTaskInfoResponse;
const DescribeInstanceMonitorBigKeyTypeDistResponse = models_1.Models.DescribeInstanceMonitorBigKeyTypeDistResponse;
const CleanUpInstanceRequest = models_1.Models.CleanUpInstanceRequest;
const DescribeInstanceDealDetailResponse = models_1.Models.DescribeInstanceDealDetailResponse;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const SourceCommand = models_1.Models.SourceCommand;
const ModfiyInstancePasswordRequest = models_1.Models.ModfiyInstancePasswordRequest;
const DescribeSlowLogRequest = models_1.Models.DescribeSlowLogRequest;
const DescribeAutoBackupConfigRequest = models_1.Models.DescribeAutoBackupConfigRequest;
const DescribeInstanceMonitorSIPResponse = models_1.Models.DescribeInstanceMonitorSIPResponse;
const DestroyPostpaidInstanceRequest = models_1.Models.DestroyPostpaidInstanceRequest;
const DeleteInstanceAccountRequest = models_1.Models.DeleteInstanceAccountRequest;
const UpgradeInstanceResponse = models_1.Models.UpgradeInstanceResponse;
const ManualBackupInstanceRequest = models_1.Models.ManualBackupInstanceRequest;
const ModfiyInstancePasswordResponse = models_1.Models.ModfiyInstancePasswordResponse;
const InstanceSet = models_1.Models.InstanceSet;
const InquiryPriceRenewInstanceRequest = models_1.Models.InquiryPriceRenewInstanceRequest;
const ModifyMaintenanceWindowResponse = models_1.Models.ModifyMaintenanceWindowResponse;
const DescribeInstanceMonitorTopNCmdTookRequest = models_1.Models.DescribeInstanceMonitorTopNCmdTookRequest;
const DestroyPrepaidInstanceResponse = models_1.Models.DestroyPrepaidInstanceResponse;
const DescribeInstanceMonitorBigKeyTypeDistRequest = models_1.Models.DescribeInstanceMonitorBigKeyTypeDistRequest;
const InquiryPriceCreateInstanceRequest = models_1.Models.InquiryPriceCreateInstanceRequest;
const ModifyInstanceParamsRequest = models_1.Models.ModifyInstanceParamsRequest;
const BigKeyTypeInfo = models_1.Models.BigKeyTypeInfo;
const DescribeMaintenanceWindowRequest = models_1.Models.DescribeMaintenanceWindowRequest;
const InstanceClusterNode = models_1.Models.InstanceClusterNode;
const EnableReplicaReadonlyRequest = models_1.Models.EnableReplicaReadonlyRequest;
const UpgradeInstanceVersionRequest = models_1.Models.UpgradeInstanceVersionRequest;
const DescribeInstanceAccountResponse = models_1.Models.DescribeInstanceAccountResponse;
const DescribeInstanceMonitorBigKeyRequest = models_1.Models.DescribeInstanceMonitorBigKeyRequest;
const DisableReplicaReadonlyRequest = models_1.Models.DisableReplicaReadonlyRequest;
const DescribeProductInfoRequest = models_1.Models.DescribeProductInfoRequest;
const SwitchInstanceVipResponse = models_1.Models.SwitchInstanceVipResponse;
const DescribeInstanceParamsResponse = models_1.Models.DescribeInstanceParamsResponse;
const DisassociateSecurityGroupsRequest = models_1.Models.DisassociateSecurityGroupsRequest;
const StartupInstanceRequest = models_1.Models.StartupInstanceRequest;
const HotKeyInfo = models_1.Models.HotKeyInfo;
const CreateInstanceAccountResponse = models_1.Models.CreateInstanceAccountResponse;
const DescribeInstanceBackupsRequest = models_1.Models.DescribeInstanceBackupsRequest;
const SecurityGroupDetail = models_1.Models.SecurityGroupDetail;
const InquiryPriceUpgradeInstanceResponse = models_1.Models.InquiryPriceUpgradeInstanceResponse;
const DeleteInstanceAccountResponse = models_1.Models.DeleteInstanceAccountResponse;
const DescribeInstanceMonitorSIPRequest = models_1.Models.DescribeInstanceMonitorSIPRequest;
const InstanceClusterShard = models_1.Models.InstanceClusterShard;
const ZoneCapacityConf = models_1.Models.ZoneCapacityConf;
const UpgradeInstanceRequest = models_1.Models.UpgradeInstanceRequest;
const DescribeProjectSecurityGroupResponse = models_1.Models.DescribeProjectSecurityGroupResponse;
const DescribeInstanceMonitorHotKeyResponse = models_1.Models.DescribeInstanceMonitorHotKeyResponse;
const InstanceParam = models_1.Models.InstanceParam;
const DisassociateSecurityGroupsResponse = models_1.Models.DisassociateSecurityGroupsResponse;
const ClearInstanceResponse = models_1.Models.ClearInstanceResponse;
const InstanceSlowlogDetail = models_1.Models.InstanceSlowlogDetail;
/**
 * redis client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("redis.tencentcloudapi.com", "2018-04-12", credential, region, profile);
    }
    /**
     * 查询实例大Key大小分布
     * @param {DescribeInstanceMonitorBigKeySizeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeySizeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeySizeDist(req, cb) {
        const resp = new DescribeInstanceMonitorBigKeySizeDistResponse();
        this.request("DescribeInstanceMonitorBigKeySizeDist", req, resp, cb);
    }
    /**
     * 创建实例子账号
     * @param {CreateInstanceAccountRequest} req
     * @param {function(string, CreateInstanceAccountResponse):void} cb
     * @public
     */
    CreateInstanceAccount(req, cb) {
        const resp = new CreateInstanceAccountResponse();
        this.request("CreateInstanceAccount", req, resp, cb);
    }
    /**
     * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     * @param {ModifyMaintenanceWindowRequest} req
     * @param {function(string, ModifyMaintenanceWindowResponse):void} cb
     * @public
     */
    ModifyMaintenanceWindow(req, cb) {
        const resp = new ModifyMaintenanceWindowResponse();
        this.request("ModifyMaintenanceWindow", req, resp, cb);
    }
    /**
     * 修改实例子账号
     * @param {ModifyInstanceAccountRequest} req
     * @param {function(string, ModifyInstanceAccountResponse):void} cb
     * @public
     */
    ModifyInstanceAccount(req, cb) {
        const resp = new ModifyInstanceAccountResponse();
        this.request("ModifyInstanceAccount", req, resp, cb);
    }
    /**
     * 查询实例慢查询记录
     * @param {DescribeSlowLogRequest} req
     * @param {function(string, DescribeSlowLogResponse):void} cb
     * @public
     */
    DescribeSlowLog(req, cb) {
        const resp = new DescribeSlowLogResponse();
        this.request("DescribeSlowLog", req, resp, cb);
    }
    /**
     * 查询任务列表信息
     * @param {DescribeTaskListRequest} req
     * @param {function(string, DescribeTaskListResponse):void} cb
     * @public
     */
    DescribeTaskList(req, cb) {
        const resp = new DescribeTaskListResponse();
        this.request("DescribeTaskList", req, resp, cb);
    }
    /**
     * 回收站实例立即下线
     * @param {CleanUpInstanceRequest} req
     * @param {function(string, CleanUpInstanceResponse):void} cb
     * @public
     */
    CleanUpInstance(req, cb) {
        const resp = new CleanUpInstanceResponse();
        this.request("CleanUpInstance", req, resp, cb);
    }
    /**
     * 查看实例子账号信息
     * @param {DescribeInstanceAccountRequest} req
     * @param {function(string, DescribeInstanceAccountResponse):void} cb
     * @public
     */
    DescribeInstanceAccount(req, cb) {
        const resp = new DescribeInstanceAccountResponse();
        this.request("DescribeInstanceAccount", req, resp, cb);
    }
    /**
     * 获取备份配置
     * @param {DescribeAutoBackupConfigRequest} req
     * @param {function(string, DescribeAutoBackupConfigResponse):void} cb
     * @public
     */
    DescribeAutoBackupConfig(req, cb) {
        const resp = new DescribeAutoBackupConfigResponse();
        this.request("DescribeAutoBackupConfig", req, resp, cb);
    }
    /**
     * 查询实例CPU耗时
     * @param {DescribeInstanceMonitorTopNCmdTookRequest} req
     * @param {function(string, DescribeInstanceMonitorTopNCmdTookResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTopNCmdTook(req, cb) {
        const resp = new DescribeInstanceMonitorTopNCmdTookResponse();
        this.request("DescribeInstanceMonitorTopNCmdTook", req, resp, cb);
    }
    /**
     * 设置自动备份时间
     * @param {ModifyAutoBackupConfigRequest} req
     * @param {function(string, ModifyAutoBackupConfigResponse):void} cb
     * @public
     */
    ModifyAutoBackupConfig(req, cb) {
        const resp = new ModifyAutoBackupConfigResponse();
        this.request("ModifyAutoBackupConfig", req, resp, cb);
    }
    /**
     * 获取集群版实例分片信息
     * @param {DescribeInstanceShardsRequest} req
     * @param {function(string, DescribeInstanceShardsResponse):void} cb
     * @public
     */
    DescribeInstanceShards(req, cb) {
        const resp = new DescribeInstanceShardsResponse();
        this.request("DescribeInstanceShards", req, resp, cb);
    }
    /**
     * 恢复 CRS 实例
     * @param {RestoreInstanceRequest} req
     * @param {function(string, RestoreInstanceResponse):void} cb
     * @public
     */
    RestoreInstance(req, cb) {
        const resp = new RestoreInstanceResponse();
        this.request("RestoreInstance", req, resp, cb);
    }
    /**
     * 查询Redis实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }
    /**
     * 重置密码
     * @param {ResetPasswordRequest} req
     * @param {function(string, ResetPasswordResponse):void} cb
     * @public
     */
    ResetPassword(req, cb) {
        const resp = new ResetPasswordResponse();
        this.request("ResetPassword", req, resp, cb);
    }
    /**
     * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     * @param {DescribeMaintenanceWindowRequest} req
     * @param {function(string, DescribeMaintenanceWindowResponse):void} cb
     * @public
     */
    DescribeMaintenanceWindow(req, cb) {
        const resp = new DescribeMaintenanceWindowResponse();
        this.request("DescribeMaintenanceWindow", req, resp, cb);
    }
    /**
     * 查询实例访问命令
     * @param {DescribeInstanceMonitorTopNCmdRequest} req
     * @param {function(string, DescribeInstanceMonitorTopNCmdResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTopNCmd(req, cb) {
        const resp = new DescribeInstanceMonitorTopNCmdResponse();
        this.request("DescribeInstanceMonitorTopNCmd", req, resp, cb);
    }
    /**
     * 禁用读写分离
     * @param {DisableReplicaReadonlyRequest} req
     * @param {function(string, DisableReplicaReadonlyResponse):void} cb
     * @public
     */
    DisableReplicaReadonly(req, cb) {
        const resp = new DisableReplicaReadonlyResponse();
        this.request("DisableReplicaReadonly", req, resp, cb);
    }
    /**
     * 查询实例DTS信息
     * @param {DescribeInstanceDTSInfoRequest} req
     * @param {function(string, DescribeInstanceDTSInfoResponse):void} cb
     * @public
     */
    DescribeInstanceDTSInfo(req, cb) {
        const resp = new DescribeInstanceDTSInfoResponse();
        this.request("DescribeInstanceDTSInfo", req, resp, cb);
    }
    /**
     * 修改实例网络配置
     * @param {ModifyNetworkConfigRequest} req
     * @param {function(string, ModifyNetworkConfigResponse):void} cb
     * @public
     */
    ModifyNetworkConfig(req, cb) {
        const resp = new ModifyNetworkConfigResponse();
        this.request("ModifyNetworkConfig", req, resp, cb);
    }
    /**
     * 查询实例访问来源信息
     * @param {DescribeInstanceMonitorSIPRequest} req
     * @param {function(string, DescribeInstanceMonitorSIPResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorSIP(req, cb) {
        const resp = new DescribeInstanceMonitorSIPResponse();
        this.request("DescribeInstanceMonitorSIP", req, resp, cb);
    }
    /**
     * 创建redis实例
     * @param {CreateInstancesRequest} req
     * @param {function(string, CreateInstancesResponse):void} cb
     * @public
     */
    CreateInstances(req, cb) {
        const resp = new CreateInstancesResponse();
        this.request("CreateInstances", req, resp, cb);
    }
    /**
     * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
     * @param {UpgradeInstanceVersionRequest} req
     * @param {function(string, UpgradeInstanceVersionResponse):void} cb
     * @public
     */
    UpgradeInstanceVersion(req, cb) {
        const resp = new UpgradeInstanceVersionResponse();
        this.request("UpgradeInstanceVersion", req, resp, cb);
    }
    /**
     * 查询实例续费价格（包年包月）
     * @param {InquiryPriceRenewInstanceRequest} req
     * @param {function(string, InquiryPriceRenewInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewInstance(req, cb) {
        const resp = new InquiryPriceRenewInstanceResponse();
        this.request("InquiryPriceRenewInstance", req, resp, cb);
    }
    /**
     * 查询实例扩容价格
     * @param {InquiryPriceUpgradeInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeInstance(req, cb) {
        const resp = new InquiryPriceUpgradeInstanceResponse();
        this.request("InquiryPriceUpgradeInstance", req, resp, cb);
    }
    /**
     * 查询项目安全组信息
     * @param {DescribeProjectSecurityGroupRequest} req
     * @param {function(string, DescribeProjectSecurityGroupResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroup(req, cb) {
        const resp = new DescribeProjectSecurityGroupResponse();
        this.request("DescribeProjectSecurityGroup", req, resp, cb);
    }
    /**
     * 查询实例热Key
     * @param {DescribeInstanceMonitorHotKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorHotKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorHotKey(req, cb) {
        const resp = new DescribeInstanceMonitorHotKeyResponse();
        this.request("DescribeInstanceMonitorHotKey", req, resp, cb);
    }
    /**
     * 用于查询任务结果
     * @param {DescribeTaskInfoRequest} req
     * @param {function(string, DescribeTaskInfoResponse):void} cb
     * @public
     */
    DescribeTaskInfo(req, cb) {
        const resp = new DescribeTaskInfoResponse();
        this.request("DescribeTaskInfo", req, resp, cb);
    }
    /**
     * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
     * @param {DescribeBackupUrlRequest} req
     * @param {function(string, DescribeBackupUrlResponse):void} cb
     * @public
     */
    DescribeBackupUrl(req, cb) {
        const resp = new DescribeBackupUrlResponse();
        this.request("DescribeBackupUrl", req, resp, cb);
    }
    /**
     * 启用读写分离
     * @param {EnableReplicaReadonlyRequest} req
     * @param {function(string, EnableReplicaReadonlyResponse):void} cb
     * @public
     */
    EnableReplicaReadonly(req, cb) {
        const resp = new EnableReplicaReadonlyResponse();
        this.request("EnableReplicaReadonly", req, resp, cb);
    }
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     * @param {DescribeProjectSecurityGroupsRequest} req
     * @param {function(string, DescribeProjectSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeProjectSecurityGroups(req, cb) {
        const resp = new DescribeProjectSecurityGroupsResponse();
        this.request("DescribeProjectSecurityGroups", req, resp, cb);
    }
    /**
     * 本接口 (AssociateSecurityGroups) 用于绑定安全组到指定实例。
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        const resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }
    /**
     * 修改实例参数
     * @param {ModifyInstanceParamsRequest} req
     * @param {function(string, ModifyInstanceParamsResponse):void} cb
     * @public
     */
    ModifyInstanceParams(req, cb) {
        const resp = new ModifyInstanceParamsResponse();
        this.request("ModifyInstanceParams", req, resp, cb);
    }
    /**
     * 查询新购实例价格
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        const resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        const resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }
    /**
     * 按量计费实例销毁
     * @param {DestroyPostpaidInstanceRequest} req
     * @param {function(string, DestroyPostpaidInstanceResponse):void} cb
     * @public
     */
    DestroyPostpaidInstance(req, cb) {
        const resp = new DestroyPostpaidInstanceResponse();
        this.request("DestroyPostpaidInstance", req, resp, cb);
    }
    /**
     * 查询实例大Key
     * @param {DescribeInstanceMonitorBigKeyRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKey(req, cb) {
        const resp = new DescribeInstanceMonitorBigKeyResponse();
        this.request("DescribeInstanceMonitorBigKey", req, resp, cb);
    }
    /**
     * 查询实例安全组信息
     * @param {DescribeInstanceSecurityGroupRequest} req
     * @param {function(string, DescribeInstanceSecurityGroupResponse):void} cb
     * @public
     */
    DescribeInstanceSecurityGroup(req, cb) {
        const resp = new DescribeInstanceSecurityGroupResponse();
        this.request("DescribeInstanceSecurityGroup", req, resp, cb);
    }
    /**
     * 查询实例大Key类型分布
     * @param {DescribeInstanceMonitorBigKeyTypeDistRequest} req
     * @param {function(string, DescribeInstanceMonitorBigKeyTypeDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorBigKeyTypeDist(req, cb) {
        const resp = new DescribeInstanceMonitorBigKeyTypeDistResponse();
        this.request("DescribeInstanceMonitorBigKeyTypeDist", req, resp, cb);
    }
    /**
     * 本接口查询指定可用区和实例类型下 Redis 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     * @param {DescribeProductInfoRequest} req
     * @param {function(string, DescribeProductInfoResponse):void} cb
     * @public
     */
    DescribeProductInfo(req, cb) {
        const resp = new DescribeProductInfoResponse();
        this.request("DescribeProductInfo", req, resp, cb);
    }
    /**
     * 升级实例
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        const resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }
    /**
     * 续费实例
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        const resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }
    /**
     * 手动备份Redis实例
     * @param {ManualBackupInstanceRequest} req
     * @param {function(string, ManualBackupInstanceResponse):void} cb
     * @public
     */
    ManualBackupInstance(req, cb) {
        const resp = new ManualBackupInstanceResponse();
        this.request("ManualBackupInstance", req, resp, cb);
    }
    /**
     * 修改redis密码
     * @param {ModfiyInstancePasswordRequest} req
     * @param {function(string, ModfiyInstancePasswordResponse):void} cb
     * @public
     */
    ModfiyInstancePassword(req, cb) {
        const resp = new ModfiyInstancePasswordResponse();
        this.request("ModfiyInstancePassword", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     * @param {DescribeDBSecurityGroupsRequest} req
     * @param {function(string, DescribeDBSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeDBSecurityGroups(req, cb) {
        const resp = new DescribeDBSecurityGroupsResponse();
        this.request("DescribeDBSecurityGroups", req, resp, cb);
    }
    /**
     * 查询实例参数列表
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        const resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }
    /**
     * 包年包月实例退还
     * @param {DestroyPrepaidInstanceRequest} req
     * @param {function(string, DestroyPrepaidInstanceResponse):void} cb
     * @public
     */
    DestroyPrepaidInstance(req, cb) {
        const resp = new DestroyPrepaidInstanceResponse();
        this.request("DestroyPrepaidInstance", req, resp, cb);
    }
    /**
     * 查询参数修改历史列表
     * @param {DescribeInstanceParamRecordsRequest} req
     * @param {function(string, DescribeInstanceParamRecordsResponse):void} cb
     * @public
     */
    DescribeInstanceParamRecords(req, cb) {
        const resp = new DescribeInstanceParamRecordsResponse();
        this.request("DescribeInstanceParamRecords", req, resp, cb);
    }
    /**
     * 清空Redis实例的实例数据。
     * @param {ClearInstanceRequest} req
     * @param {function(string, ClearInstanceResponse):void} cb
     * @public
     */
    ClearInstance(req, cb) {
        const resp = new ClearInstanceResponse();
        this.request("ClearInstance", req, resp, cb);
    }
    /**
     * 查询订单信息
     * @param {DescribeInstanceDealDetailRequest} req
     * @param {function(string, DescribeInstanceDealDetailResponse):void} cb
     * @public
     */
    DescribeInstanceDealDetail(req, cb) {
        const resp = new DescribeInstanceDealDetailResponse();
        this.request("DescribeInstanceDealDetail", req, resp, cb);
    }
    /**
     * 删除实例子账号
     * @param {DeleteInstanceAccountRequest} req
     * @param {function(string, DeleteInstanceAccountResponse):void} cb
     * @public
     */
    DeleteInstanceAccount(req, cb) {
        const resp = new DeleteInstanceAccountResponse();
        this.request("DeleteInstanceAccount", req, resp, cb);
    }
    /**
     * 查询 CRS 实例备份列表
     * @param {DescribeInstanceBackupsRequest} req
     * @param {function(string, DescribeInstanceBackupsResponse):void} cb
     * @public
     */
    DescribeInstanceBackups(req, cb) {
        const resp = new DescribeInstanceBackupsResponse();
        this.request("DescribeInstanceBackups", req, resp, cb);
    }
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        const resp = new DisassociateSecurityGroupsResponse();
        this.request("DisassociateSecurityGroups", req, resp, cb);
    }
    /**
     * 实例解隔离
     * @param {StartupInstanceRequest} req
     * @param {function(string, StartupInstanceResponse):void} cb
     * @public
     */
    StartupInstance(req, cb) {
        const resp = new StartupInstanceResponse();
        this.request("StartupInstance", req, resp, cb);
    }
    /**
     * 修改实例相关信息
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        const resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }
    /**
     * 查询实例访问的耗时分布
     * @param {DescribeInstanceMonitorTookDistRequest} req
     * @param {function(string, DescribeInstanceMonitorTookDistResponse):void} cb
     * @public
     */
    DescribeInstanceMonitorTookDist(req, cb) {
        const resp = new DescribeInstanceMonitorTookDistResponse();
        this.request("DescribeInstanceMonitorTookDist", req, resp, cb);
    }
    /**
     * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
     * @param {SwitchInstanceVipRequest} req
     * @param {function(string, SwitchInstanceVipResponse):void} cb
     * @public
     */
    SwitchInstanceVip(req, cb) {
        const resp = new SwitchInstanceVipResponse();
        this.request("SwitchInstanceVip", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=redis_client.js.map