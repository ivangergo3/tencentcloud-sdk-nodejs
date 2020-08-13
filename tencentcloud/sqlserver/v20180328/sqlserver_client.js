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
const DescribeReadOnlyGroupDetailsRequest = models_1.Models.DescribeReadOnlyGroupDetailsRequest;
const CreateDBInstancesRequest = models_1.Models.CreateDBInstancesRequest;
const InstanceRenewInfo = models_1.Models.InstanceRenewInfo;
const DealInfo = models_1.Models.DealInfo;
const CreateBasicDBInstancesResponse = models_1.Models.CreateBasicDBInstancesResponse;
const DescribeAccountsRequest = models_1.Models.DescribeAccountsRequest;
const DescribeMaintenanceSpanResponse = models_1.Models.DescribeMaintenanceSpanResponse;
const CreatePublishSubscribeRequest = models_1.Models.CreatePublishSubscribeRequest;
const CreateMigrationResponse = models_1.Models.CreateMigrationResponse;
const QueryMigrationCheckProcessRequest = models_1.Models.QueryMigrationCheckProcessRequest;
const DatabaseTuple = models_1.Models.DatabaseTuple;
const RegionInfo = models_1.Models.RegionInfo;
const ModifyBackupNameResponse = models_1.Models.ModifyBackupNameResponse;
const DeletePublishSubscribeRequest = models_1.Models.DeletePublishSubscribeRequest;
const ModifyMaintenanceSpanRequest = models_1.Models.ModifyMaintenanceSpanRequest;
const AssociateSecurityGroupsRequest = models_1.Models.AssociateSecurityGroupsRequest;
const DatabaseTupleStatus = models_1.Models.DatabaseTupleStatus;
const ModifyReadOnlyGroupDetailsResponse = models_1.Models.ModifyReadOnlyGroupDetailsResponse;
const ModifyBackupStrategyResponse = models_1.Models.ModifyBackupStrategyResponse;
const DescribeDBSecurityGroupsResponse = models_1.Models.DescribeDBSecurityGroupsResponse;
const MigrateDetail = models_1.Models.MigrateDetail;
const RunMigrationResponse = models_1.Models.RunMigrationResponse;
const DescribeProductConfigRequest = models_1.Models.DescribeProductConfigRequest;
const ModifyPublishSubscribeNameResponse = models_1.Models.ModifyPublishSubscribeNameResponse;
const DescribeCrossRegionZoneRequest = models_1.Models.DescribeCrossRegionZoneRequest;
const CompleteMigrationResponse = models_1.Models.CompleteMigrationResponse;
const RollbackInstanceResponse = models_1.Models.RollbackInstanceResponse;
const DBRemark = models_1.Models.DBRemark;
const MigrateDB = models_1.Models.MigrateDB;
const RestartDBInstanceRequest = models_1.Models.RestartDBInstanceRequest;
const DescribeReadOnlyGroupListResponse = models_1.Models.DescribeReadOnlyGroupListResponse;
const DescribeRegionsResponse = models_1.Models.DescribeRegionsResponse;
const DescribeBackupsRequest = models_1.Models.DescribeBackupsRequest;
const ModifyDBInstanceProjectResponse = models_1.Models.ModifyDBInstanceProjectResponse;
const DescribeRollbackTimeResponse = models_1.Models.DescribeRollbackTimeResponse;
const RestoreInstanceRequest = models_1.Models.RestoreInstanceRequest;
const DescribeReadOnlyGroupByReadOnlyInstanceResponse = models_1.Models.DescribeReadOnlyGroupByReadOnlyInstanceResponse;
const RunMigrationRequest = models_1.Models.RunMigrationRequest;
const SecurityGroupPolicy = models_1.Models.SecurityGroupPolicy;
const RestoreInstanceResponse = models_1.Models.RestoreInstanceResponse;
const ModifyMaintenanceSpanResponse = models_1.Models.ModifyMaintenanceSpanResponse;
const ZoneInfo = models_1.Models.ZoneInfo;
const InquiryPriceCreateDBInstancesRequest = models_1.Models.InquiryPriceCreateDBInstancesRequest;
const DescribeBackupByFlowIdResponse = models_1.Models.DescribeBackupByFlowIdResponse;
const DescribeFlowStatusRequest = models_1.Models.DescribeFlowStatusRequest;
const StartMigrationCheckResponse = models_1.Models.StartMigrationCheckResponse;
const MigrateTask = models_1.Models.MigrateTask;
const SpecInfo = models_1.Models.SpecInfo;
const DescribeOrdersResponse = models_1.Models.DescribeOrdersResponse;
const InquiryPriceCreateDBInstancesResponse = models_1.Models.InquiryPriceCreateDBInstancesResponse;
const CompleteMigrationRequest = models_1.Models.CompleteMigrationRequest;
const ModifyAccountPrivilegeResponse = models_1.Models.ModifyAccountPrivilegeResponse;
const RemoveBackupsRequest = models_1.Models.RemoveBackupsRequest;
const DBCreateInfo = models_1.Models.DBCreateInfo;
const AccountPrivilege = models_1.Models.AccountPrivilege;
const ModifyMigrationResponse = models_1.Models.ModifyMigrationResponse;
const DescribeZonesResponse = models_1.Models.DescribeZonesResponse;
const DescribeDBsResponse = models_1.Models.DescribeDBsResponse;
const DescribeDBInstancesRequest = models_1.Models.DescribeDBInstancesRequest;
const DescribeDBSecurityGroupsRequest = models_1.Models.DescribeDBSecurityGroupsRequest;
const SlowlogInfo = models_1.Models.SlowlogInfo;
const ModifyAccountRemarkResponse = models_1.Models.ModifyAccountRemarkResponse;
const DescribeMigrationsResponse = models_1.Models.DescribeMigrationsResponse;
const ModifyBackupStrategyRequest = models_1.Models.ModifyBackupStrategyRequest;
const RenewDBInstanceRequest = models_1.Models.RenewDBInstanceRequest;
const DescribeZonesRequest = models_1.Models.DescribeZonesRequest;
const DeleteDBRequest = models_1.Models.DeleteDBRequest;
const DescribeProjectSecurityGroupsResponse = models_1.Models.DescribeProjectSecurityGroupsResponse;
const DescribeCrossRegionZoneResponse = models_1.Models.DescribeCrossRegionZoneResponse;
const ModifyDBInstanceRenewFlagResponse = models_1.Models.ModifyDBInstanceRenewFlagResponse;
const DescribeMigrationDatabasesResponse = models_1.Models.DescribeMigrationDatabasesResponse;
const CompleteExpansionResponse = models_1.Models.CompleteExpansionResponse;
const MigrateSource = models_1.Models.MigrateSource;
const ResetAccountPasswordResponse = models_1.Models.ResetAccountPasswordResponse;
const ReadOnlyGroup = models_1.Models.ReadOnlyGroup;
const QueryMigrationCheckProcessResponse = models_1.Models.QueryMigrationCheckProcessResponse;
const CreateReadOnlyDBInstancesRequest = models_1.Models.CreateReadOnlyDBInstancesRequest;
const ModifyAccountPrivilegeRequest = models_1.Models.ModifyAccountPrivilegeRequest;
const DescribeMigrationsRequest = models_1.Models.DescribeMigrationsRequest;
const InstanceDBDetail = models_1.Models.InstanceDBDetail;
const StepDetail = models_1.Models.StepDetail;
const DescribeDBsRequest = models_1.Models.DescribeDBsRequest;
const CompleteExpansionRequest = models_1.Models.CompleteExpansionRequest;
const RenewPostpaidDBInstanceRequest = models_1.Models.RenewPostpaidDBInstanceRequest;
const DescribeBackupsResponse = models_1.Models.DescribeBackupsResponse;
const DescribeRegionsRequest = models_1.Models.DescribeRegionsRequest;
const DescribeFlowStatusResponse = models_1.Models.DescribeFlowStatusResponse;
const StopMigrationRequest = models_1.Models.StopMigrationRequest;
const CreateReadOnlyDBInstancesResponse = models_1.Models.CreateReadOnlyDBInstancesResponse;
const DeleteMigrationRequest = models_1.Models.DeleteMigrationRequest;
const DescribeMigrationDetailRequest = models_1.Models.DescribeMigrationDetailRequest;
const ModifyDBInstanceSecurityGroupsRequest = models_1.Models.ModifyDBInstanceSecurityGroupsRequest;
const DBPrivilegeModifyInfo = models_1.Models.DBPrivilegeModifyInfo;
const RemoveBackupsResponse = models_1.Models.RemoveBackupsResponse;
const TerminateDBInstanceRequest = models_1.Models.TerminateDBInstanceRequest;
const CreateDBRequest = models_1.Models.CreateDBRequest;
const DescribeProjectSecurityGroupsRequest = models_1.Models.DescribeProjectSecurityGroupsRequest;
const SecurityGroup = models_1.Models.SecurityGroup;
const ReadOnlyInstance = models_1.Models.ReadOnlyInstance;
const InquiryPriceUpgradeDBInstanceRequest = models_1.Models.InquiryPriceUpgradeDBInstanceRequest;
const ModifyDBRemarkRequest = models_1.Models.ModifyDBRemarkRequest;
const ReadOnlyInstanceWeightPair = models_1.Models.ReadOnlyInstanceWeightPair;
const ModifyDBInstanceNameRequest = models_1.Models.ModifyDBInstanceNameRequest;
const AccountPassword = models_1.Models.AccountPassword;
const DeleteMigrationResponse = models_1.Models.DeleteMigrationResponse;
const InquiryPriceRenewDBInstanceResponse = models_1.Models.InquiryPriceRenewDBInstanceResponse;
const InquiryPriceRenewDBInstanceRequest = models_1.Models.InquiryPriceRenewDBInstanceRequest;
const TerminateDBInstanceResponse = models_1.Models.TerminateDBInstanceResponse;
const DbRollbackTimeInfo = models_1.Models.DbRollbackTimeInfo;
const AssociateSecurityGroupsResponse = models_1.Models.AssociateSecurityGroupsResponse;
const DescribeReadOnlyGroupListRequest = models_1.Models.DescribeReadOnlyGroupListRequest;
const CreateBackupResponse = models_1.Models.CreateBackupResponse;
const DBInstance = models_1.Models.DBInstance;
const DescribeProductConfigResponse = models_1.Models.DescribeProductConfigResponse;
const CreateMigrationRequest = models_1.Models.CreateMigrationRequest;
const StartMigrationCheckRequest = models_1.Models.StartMigrationCheckRequest;
const AccountDetail = models_1.Models.AccountDetail;
const CreateBasicDBInstancesRequest = models_1.Models.CreateBasicDBInstancesRequest;
const ModifyDBNameResponse = models_1.Models.ModifyDBNameResponse;
const DescribePublishSubscribeResponse = models_1.Models.DescribePublishSubscribeResponse;
const ModifyDBNameRequest = models_1.Models.ModifyDBNameRequest;
const ModifyDBInstanceRenewFlagRequest = models_1.Models.ModifyDBInstanceRenewFlagRequest;
const Backup = models_1.Models.Backup;
const AccountRemark = models_1.Models.AccountRemark;
const ModifyDBInstanceSecurityGroupsResponse = models_1.Models.ModifyDBInstanceSecurityGroupsResponse;
const ModifyDBInstanceNameResponse = models_1.Models.ModifyDBInstanceNameResponse;
const AccountPrivilegeModifyInfo = models_1.Models.AccountPrivilegeModifyInfo;
const MigrateTarget = models_1.Models.MigrateTarget;
const AccountCreateInfo = models_1.Models.AccountCreateInfo;
const RenewDBInstanceResponse = models_1.Models.RenewDBInstanceResponse;
const DBPrivilege = models_1.Models.DBPrivilege;
const DescribeOrdersRequest = models_1.Models.DescribeOrdersRequest;
const DescribeReadOnlyGroupDetailsResponse = models_1.Models.DescribeReadOnlyGroupDetailsResponse;
const DeleteAccountRequest = models_1.Models.DeleteAccountRequest;
const DescribeReadOnlyGroupByReadOnlyInstanceRequest = models_1.Models.DescribeReadOnlyGroupByReadOnlyInstanceRequest;
const DescribeMaintenanceSpanRequest = models_1.Models.DescribeMaintenanceSpanRequest;
const PublishSubscribe = models_1.Models.PublishSubscribe;
const DescribeBackupByFlowIdRequest = models_1.Models.DescribeBackupByFlowIdRequest;
const CreateBackupRequest = models_1.Models.CreateBackupRequest;
const DescribePublishSubscribeRequest = models_1.Models.DescribePublishSubscribeRequest;
const ModifyAccountRemarkRequest = models_1.Models.ModifyAccountRemarkRequest;
const ModifyPublishSubscribeNameRequest = models_1.Models.ModifyPublishSubscribeNameRequest;
const DeletePublishSubscribeResponse = models_1.Models.DeletePublishSubscribeResponse;
const InquiryPriceUpgradeDBInstanceResponse = models_1.Models.InquiryPriceUpgradeDBInstanceResponse;
const DescribeMigrationDetailResponse = models_1.Models.DescribeMigrationDetailResponse;
const ModifyMigrationRequest = models_1.Models.ModifyMigrationRequest;
const DeleteDBInstanceRequest = models_1.Models.DeleteDBInstanceRequest;
const CreateAccountResponse = models_1.Models.CreateAccountResponse;
const RenewPostpaidDBInstanceResponse = models_1.Models.RenewPostpaidDBInstanceResponse;
const DescribeMigrationDatabasesRequest = models_1.Models.DescribeMigrationDatabasesRequest;
const UpgradeDBInstanceRequest = models_1.Models.UpgradeDBInstanceRequest;
const CreateAccountRequest = models_1.Models.CreateAccountRequest;
const DeleteDBResponse = models_1.Models.DeleteDBResponse;
const CreateDBResponse = models_1.Models.CreateDBResponse;
const RestartDBInstanceResponse = models_1.Models.RestartDBInstanceResponse;
const DescribeDBInstancesResponse = models_1.Models.DescribeDBInstancesResponse;
const DescribeSlowlogsResponse = models_1.Models.DescribeSlowlogsResponse;
const DBDetail = models_1.Models.DBDetail;
const ResetAccountPasswordRequest = models_1.Models.ResetAccountPasswordRequest;
const ModifyReadOnlyGroupDetailsRequest = models_1.Models.ModifyReadOnlyGroupDetailsRequest;
const RollbackInstanceRequest = models_1.Models.RollbackInstanceRequest;
const DescribeSlowlogsRequest = models_1.Models.DescribeSlowlogsRequest;
const ModifyDBInstanceProjectRequest = models_1.Models.ModifyDBInstanceProjectRequest;
const DisassociateSecurityGroupsRequest = models_1.Models.DisassociateSecurityGroupsRequest;
const ModifyBackupNameRequest = models_1.Models.ModifyBackupNameRequest;
const StopMigrationResponse = models_1.Models.StopMigrationResponse;
const CreatePublishSubscribeResponse = models_1.Models.CreatePublishSubscribeResponse;
const DescribeAccountsResponse = models_1.Models.DescribeAccountsResponse;
const DeleteDBInstanceResponse = models_1.Models.DeleteDBInstanceResponse;
const UpgradeDBInstanceResponse = models_1.Models.UpgradeDBInstanceResponse;
const DescribeRollbackTimeRequest = models_1.Models.DescribeRollbackTimeRequest;
const ModifyDBRemarkResponse = models_1.Models.ModifyDBRemarkResponse;
const DisassociateSecurityGroupsResponse = models_1.Models.DisassociateSecurityGroupsResponse;
const CreateDBInstancesResponse = models_1.Models.CreateDBInstancesResponse;
const DeleteAccountResponse = models_1.Models.DeleteAccountResponse;
/**
 * sqlserver client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("sqlserver.tencentcloudapi.com", "2018-03-28", credential, region, profile);
    }
    /**
     * 本接口（DescribeReadOnlyGroupList）用于查询只读组列表。
     * @param {DescribeReadOnlyGroupListRequest} req
     * @param {function(string, DescribeReadOnlyGroupListResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupList(req, cb) {
        const resp = new DescribeReadOnlyGroupListResponse();
        this.request("DescribeReadOnlyGroupList", req, resp, cb);
    }
    /**
     * 本接口（ModifyMigration）可以修改已有的迁移任务信息
     * @param {ModifyMigrationRequest} req
     * @param {function(string, ModifyMigrationResponse):void} cb
     * @public
     */
    ModifyMigration(req, cb) {
        const resp = new ModifyMigrationResponse();
        this.request("ModifyMigration", req, resp, cb);
    }
    /**
     * 本接口（DescribeOrders）用于查询订单信息
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        const resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }
    /**
     * 本接口（ModifyAccountPrivilege）用于修改实例账户权限。
     * @param {ModifyAccountPrivilegeRequest} req
     * @param {function(string, ModifyAccountPrivilegeResponse):void} cb
     * @public
     */
    ModifyAccountPrivilege(req, cb) {
        const resp = new ModifyAccountPrivilegeResponse();
        this.request("ModifyAccountPrivilege", req, resp, cb);
    }
    /**
     * 本接口（ModifyBackupStrategy）用于修改备份策略
     * @param {ModifyBackupStrategyRequest} req
     * @param {function(string, ModifyBackupStrategyResponse):void} cb
     * @public
     */
    ModifyBackupStrategy(req, cb) {
        const resp = new ModifyBackupStrategyResponse();
        this.request("ModifyBackupStrategy", req, resp, cb);
    }
    /**
     * 本接口(DescribeBackups)用于查询备份列表。
     * @param {DescribeBackupsRequest} req
     * @param {function(string, DescribeBackupsResponse):void} cb
     * @public
     */
    DescribeBackups(req, cb) {
        const resp = new DescribeBackupsResponse();
        this.request("DescribeBackups", req, resp, cb);
    }
    /**
     * 本接口（DeleteDBInstance）用于释放回收站中的SQL server实例。释放后的实例将保存一段时间后物理销毁。其发布订阅将自动解除，其ro副本将自动释放。
     * @param {DeleteDBInstanceRequest} req
     * @param {function(string, DeleteDBInstanceResponse):void} cb
     * @public
     */
    DeleteDBInstance(req, cb) {
        const resp = new DeleteDBInstanceResponse();
        this.request("DeleteDBInstance", req, resp, cb);
    }
    /**
     * 本接口（DeletePublishSubscribe）用于删除两个数据库间的发布订阅关系。
     * @param {DeletePublishSubscribeRequest} req
     * @param {function(string, DeletePublishSubscribeResponse):void} cb
     * @public
     */
    DeletePublishSubscribe(req, cb) {
        const resp = new DeletePublishSubscribeResponse();
        this.request("DeletePublishSubscribe", req, resp, cb);
    }
    /**
     * 本接口（DescribeMigrations）根据输入的限定条件，查询符合条件的迁移任务列表
     * @param {DescribeMigrationsRequest} req
     * @param {function(string, DescribeMigrationsResponse):void} cb
     * @public
     */
    DescribeMigrations(req, cb) {
        const resp = new DescribeMigrationsResponse();
        this.request("DescribeMigrations", req, resp, cb);
    }
    /**
     * 本接口(ModifyBackupName)用于修改备份名称。
     * @param {ModifyBackupNameRequest} req
     * @param {function(string, ModifyBackupNameResponse):void} cb
     * @public
     */
    ModifyBackupName(req, cb) {
        const resp = new ModifyBackupNameResponse();
        this.request("ModifyBackupName", req, resp, cb);
    }
    /**
     * 本接口（RunMigration）用于启动迁移任务，开始迁移
     * @param {RunMigrationRequest} req
     * @param {function(string, RunMigrationResponse):void} cb
     * @public
     */
    RunMigration(req, cb) {
        const resp = new RunMigrationResponse();
        this.request("RunMigration", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBName）用于更新数据库名。
     * @param {ModifyDBNameRequest} req
     * @param {function(string, ModifyDBNameResponse):void} cb
     * @public
     */
    ModifyDBName(req, cb) {
        const resp = new ModifyDBNameResponse();
        this.request("ModifyDBName", req, resp, cb);
    }
    /**
     * 本接口（InquiryPriceCreateDBInstances）用于查询申请实例价格。
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        const resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }
    /**
     * 本接口(DescribeCrossRegionZone)根据主实例查询备机的容灾地域和可用区。
     * @param {DescribeCrossRegionZoneRequest} req
     * @param {function(string, DescribeCrossRegionZoneResponse):void} cb
     * @public
     */
    DescribeCrossRegionZone(req, cb) {
        const resp = new DescribeCrossRegionZoneResponse();
        this.request("DescribeCrossRegionZone", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBInstanceProject）用于修改数据库实例所属项目。
     * @param {ModifyDBInstanceProjectRequest} req
     * @param {function(string, ModifyDBInstanceProjectResponse):void} cb
     * @public
     */
    ModifyDBInstanceProject(req, cb) {
        const resp = new ModifyDBInstanceProjectResponse();
        this.request("ModifyDBInstanceProject", req, resp, cb);
    }
    /**
     * 本接口（DescribeSlowlogs）用于获取慢查询日志文件信息
     * @param {DescribeSlowlogsRequest} req
     * @param {function(string, DescribeSlowlogsResponse):void} cb
     * @public
     */
    DescribeSlowlogs(req, cb) {
        const resp = new DescribeSlowlogsResponse();
        this.request("DescribeSlowlogs", req, resp, cb);
    }
    /**
     * 本接口（DeleteAccount）用于删除实例账号。
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        const resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }
    /**
     * 本接口（ModifyPublishSubscribeName）修改发布订阅的名称。
     * @param {ModifyPublishSubscribeNameRequest} req
     * @param {function(string, ModifyPublishSubscribeNameResponse):void} cb
     * @public
     */
    ModifyPublishSubscribeName(req, cb) {
        const resp = new ModifyPublishSubscribeNameResponse();
        this.request("ModifyPublishSubscribeName", req, resp, cb);
    }
    /**
     * 本接口(DescribeFlowStatus)用于查询流程状态。
     * @param {DescribeFlowStatusRequest} req
     * @param {function(string, DescribeFlowStatusResponse):void} cb
     * @public
     */
    DescribeFlowStatus(req, cb) {
        const resp = new DescribeFlowStatusResponse();
        this.request("DescribeFlowStatus", req, resp, cb);
    }
    /**
     * 本接口（ModifyAccountRemark）用于修改账户备注。
     * @param {ModifyAccountRemarkRequest} req
     * @param {function(string, ModifyAccountRemarkResponse):void} cb
     * @public
     */
    ModifyAccountRemark(req, cb) {
        const resp = new ModifyAccountRemarkResponse();
        this.request("ModifyAccountRemark", req, resp, cb);
    }
    /**
     * 本接口（CreateBasicDBInstances）用于创建SQL server基础版实例。
     * @param {CreateBasicDBInstancesRequest} req
     * @param {function(string, CreateBasicDBInstancesResponse):void} cb
     * @public
     */
    CreateBasicDBInstances(req, cb) {
        const resp = new CreateBasicDBInstancesResponse();
        this.request("CreateBasicDBInstances", req, resp, cb);
    }
    /**
     * 本接口（RestartDBInstance）用于重启数据库实例。
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        const resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改实例名字。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        const resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }
    /**
     * 本接口(DeleteDB)用于删除数据库。
     * @param {DeleteDBRequest} req
     * @param {function(string, DeleteDBResponse):void} cb
     * @public
     */
    DeleteDB(req, cb) {
        const resp = new DeleteDBResponse();
        this.request("DeleteDB", req, resp, cb);
    }
    /**
     * 本接口(CreateBackup)用于创建备份。
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        const resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }
    /**
     * 本接口（CreateDBInstances）用于创建实例。
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        const resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }
    /**
     * 本接口（RollbackInstance）用于回档实例
     * @param {RollbackInstanceRequest} req
     * @param {function(string, RollbackInstanceResponse):void} cb
     * @public
     */
    RollbackInstance(req, cb) {
        const resp = new RollbackInstanceResponse();
        this.request("RollbackInstance", req, resp, cb);
    }
    /**
     * 本接口（CreateMigration）作用是创建一个迁移任务
     * @param {CreateMigrationRequest} req
     * @param {function(string, CreateMigrationResponse):void} cb
     * @public
     */
    CreateMigration(req, cb) {
        const resp = new CreateMigrationResponse();
        this.request("CreateMigration", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBInstances)用于查询实例列表。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        const resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }
    /**
     * 本接口 (DescribeZones) 用于查询当前可售卖的可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        const resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBRemark）用于修改数据库备注。
     * @param {ModifyDBRemarkRequest} req
     * @param {function(string, ModifyDBRemarkResponse):void} cb
     * @public
     */
    ModifyDBRemark(req, cb) {
        const resp = new ModifyDBRemarkResponse();
        this.request("ModifyDBRemark", req, resp, cb);
    }
    /**
     * 本接口（RenewDBInstance）用于续费实例。
     * @param {RenewDBInstanceRequest} req
     * @param {function(string, RenewDBInstanceResponse):void} cb
     * @public
     */
    RenewDBInstance(req, cb) {
        const resp = new RenewDBInstanceResponse();
        this.request("RenewDBInstance", req, resp, cb);
    }
    /**
     * 本接口(TerminateDBInstance)用于主动销毁按量计费实例。
     * @param {TerminateDBInstanceRequest} req
     * @param {function(string, TerminateDBInstanceResponse):void} cb
     * @public
     */
    TerminateDBInstance(req, cb) {
        const resp = new TerminateDBInstanceResponse();
        this.request("TerminateDBInstance", req, resp, cb);
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
     * 本接口(AssociateSecurityGroups)用于安全组批量绑定实例。
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        const resp = new AssociateSecurityGroupsResponse();
        this.request("AssociateSecurityGroups", req, resp, cb);
    }
    /**
     * 本接口（CreateAccount）用于创建实例账号
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        const resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     * @param {InquiryPriceUpgradeDBInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeDBInstance(req, cb) {
        const resp = new InquiryPriceUpgradeDBInstanceResponse();
        this.request("InquiryPriceUpgradeDBInstance", req, resp, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        const resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }
    /**
     * 本接口（DescribeDBs）用于查询数据库列表。
     * @param {DescribeDBsRequest} req
     * @param {function(string, DescribeDBsResponse):void} cb
     * @public
     */
    DescribeDBs(req, cb) {
        const resp = new DescribeDBsResponse();
        this.request("DescribeDBs", req, resp, cb);
    }
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        const resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     * @param {InquiryPriceRenewDBInstanceRequest} req
     * @param {function(string, InquiryPriceRenewDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewDBInstance(req, cb) {
        const resp = new InquiryPriceRenewDBInstanceResponse();
        this.request("InquiryPriceRenewDBInstance", req, resp, cb);
    }
    /**
     * 本接口（DeleteMigration）用于删除迁移任务
     * @param {DeleteMigrationRequest} req
     * @param {function(string, DeleteMigrationResponse):void} cb
     * @public
     */
    DeleteMigration(req, cb) {
        const resp = new DeleteMigrationResponse();
        this.request("DeleteMigration", req, resp, cb);
    }
    /**
     * 本接口（CompleteMigration）作用是完成一个迁移任务
     * @param {CompleteMigrationRequest} req
     * @param {function(string, CompleteMigrationResponse):void} cb
     * @public
     */
    CompleteMigration(req, cb) {
        const resp = new CompleteMigrationResponse();
        this.request("CompleteMigration", req, resp, cb);
    }
    /**
     * 本接口（DescribeMaintenanceSpan）根据实例ID查询该实例的可维护时间窗。
     * @param {DescribeMaintenanceSpanRequest} req
     * @param {function(string, DescribeMaintenanceSpanResponse):void} cb
     * @public
     */
    DescribeMaintenanceSpan(req, cb) {
        const resp = new DescribeMaintenanceSpanResponse();
        this.request("DescribeMaintenanceSpan", req, resp, cb);
    }
    /**
     * 本接口（DescribeReadOnlyGroupDetails）用于查询只读组详情。
     * @param {DescribeReadOnlyGroupDetailsRequest} req
     * @param {function(string, DescribeReadOnlyGroupDetailsResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupDetails(req, cb) {
        const resp = new DescribeReadOnlyGroupDetailsResponse();
        this.request("DescribeReadOnlyGroupDetails", req, resp, cb);
    }
    /**
     * 本接口（CreatePublishSubscribe）用于创建两个数据库之间的发布订阅关系。作为订阅者，不能再充当发布者，作为发布者可以有多个订阅者实例。
     * @param {CreatePublishSubscribeRequest} req
     * @param {function(string, CreatePublishSubscribeResponse):void} cb
     * @public
     */
    CreatePublishSubscribe(req, cb) {
        const resp = new CreatePublishSubscribeResponse();
        this.request("CreatePublishSubscribe", req, resp, cb);
    }
    /**
     * 本接口（DescribeRollbackTime）用于查询实例可回档时间范围
     * @param {DescribeRollbackTimeRequest} req
     * @param {function(string, DescribeRollbackTimeResponse):void} cb
     * @public
     */
    DescribeRollbackTime(req, cb) {
        const resp = new DescribeRollbackTimeResponse();
        this.request("DescribeRollbackTime", req, resp, cb);
    }
    /**
     * 本接口（StopMigration）作用是中止一个迁移任务
     * @param {StopMigrationRequest} req
     * @param {function(string, StopMigrationResponse):void} cb
     * @public
     */
    StopMigration(req, cb) {
        const resp = new StopMigrationResponse();
        this.request("StopMigration", req, resp, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于拉取实例账户列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        const resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }
    /**
     * 本接口（QueryMigrationCheckProcess）的作用是查询迁移检查任务的进度，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     * @param {QueryMigrationCheckProcessRequest} req
     * @param {function(string, QueryMigrationCheckProcessResponse):void} cb
     * @public
     */
    QueryMigrationCheckProcess(req, cb) {
        const resp = new QueryMigrationCheckProcessResponse();
        this.request("QueryMigrationCheckProcess", req, resp, cb);
    }
    /**
     * 本接口（CompleteExpansion）在实例发起扩容后，实例状态处于“升级待切换”时，可立即完成实例升级切换操作，无需等待可维护时间窗。本接口需要在实例低峰时调用，在完全切换成功前，存在部分库不可访问的风险。
     * @param {CompleteExpansionRequest} req
     * @param {function(string, CompleteExpansionResponse):void} cb
     * @public
     */
    CompleteExpansion(req, cb) {
        const resp = new CompleteExpansionResponse();
        this.request("CompleteExpansion", req, resp, cb);
    }
    /**
     * 本接口(DescribeBackupByFlowId)用于通过备份创建流程的ID查询创建的备份详情，流程ID可从接口CreateBackup中获得。
     * @param {DescribeBackupByFlowIdRequest} req
     * @param {function(string, DescribeBackupByFlowIdResponse):void} cb
     * @public
     */
    DescribeBackupByFlowId(req, cb) {
        const resp = new DescribeBackupByFlowIdResponse();
        this.request("DescribeBackupByFlowId", req, resp, cb);
    }
    /**
     * 本接口（DescribePublishSubscribe）用于查询发布订阅关系列表。
     * @param {DescribePublishSubscribeRequest} req
     * @param {function(string, DescribePublishSubscribeResponse):void} cb
     * @public
     */
    DescribePublishSubscribe(req, cb) {
        const resp = new DescribePublishSubscribeResponse();
        this.request("DescribePublishSubscribe", req, resp, cb);
    }
    /**
     * 本接口（StartMigrationCheck）的作用是启动一个迁移前的校验任务，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     * @param {StartMigrationCheckRequest} req
     * @param {function(string, StartMigrationCheckResponse):void} cb
     * @public
     */
    StartMigrationCheck(req, cb) {
        const resp = new StartMigrationCheckResponse();
        this.request("StartMigrationCheck", req, resp, cb);
    }
    /**
     * 本接口（RemoveBackups）可以删除用户手动创建的备份文件。待删除的备份策略可以是实例备份，也可以是多库备份。
     * @param {RemoveBackupsRequest} req
     * @param {function(string, RemoveBackupsResponse):void} cb
     * @public
     */
    RemoveBackups(req, cb) {
        const resp = new RemoveBackupsResponse();
        this.request("RemoveBackups", req, resp, cb);
    }
    /**
     * 本接口（CreateDB）用于创建数据库。
     * @param {CreateDBRequest} req
     * @param {function(string, CreateDBResponse):void} cb
     * @public
     */
    CreateDB(req, cb) {
        const resp = new CreateDBResponse();
        this.request("CreateDB", req, resp, cb);
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
     * 本接口（DescribeMigrationDetail）用于查询迁移任务的详细情况
     * @param {DescribeMigrationDetailRequest} req
     * @param {function(string, DescribeMigrationDetailResponse):void} cb
     * @public
     */
    DescribeMigrationDetail(req, cb) {
        const resp = new DescribeMigrationDetailResponse();
        this.request("DescribeMigrationDetail", req, resp, cb);
    }
    /**
     * 本接口（ModifyReadOnlyGroupDetails）用于修改只读组详情。
     * @param {ModifyReadOnlyGroupDetailsRequest} req
     * @param {function(string, ModifyReadOnlyGroupDetailsResponse):void} cb
     * @public
     */
    ModifyReadOnlyGroupDetails(req, cb) {
        const resp = new ModifyReadOnlyGroupDetailsResponse();
        this.request("ModifyReadOnlyGroupDetails", req, resp, cb);
    }
    /**
     * 本接口（RestoreInstance）用于根据备份文件恢复实例。
     * @param {RestoreInstanceRequest} req
     * @param {function(string, RestoreInstanceResponse):void} cb
     * @public
     */
    RestoreInstance(req, cb) {
        const resp = new RestoreInstanceResponse();
        this.request("RestoreInstance", req, resp, cb);
    }
    /**
     * 本接口（UpgradeDBInstance）用于升级实例
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        const resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }
    /**
     * 本接口（DescribeMigrationDatabases）的作用是查询待迁移数据库列表
     * @param {DescribeMigrationDatabasesRequest} req
     * @param {function(string, DescribeMigrationDatabasesResponse):void} cb
     * @public
     */
    DescribeMigrationDatabases(req, cb) {
        const resp = new DescribeMigrationDatabasesResponse();
        this.request("DescribeMigrationDatabases", req, resp, cb);
    }
    /**
     * 本接口（ModifyMaintenanceSpan）用于修改实例的可维护时间窗
     * @param {ModifyMaintenanceSpanRequest} req
     * @param {function(string, ModifyMaintenanceSpanResponse):void} cb
     * @public
     */
    ModifyMaintenanceSpan(req, cb) {
        const resp = new ModifyMaintenanceSpanResponse();
        this.request("ModifyMaintenanceSpan", req, resp, cb);
    }
    /**
     * 本接口（RenewPostpaidDBInstance）用于将通过接口TerminateDBInstance手动隔离的按量计费实例从回收站中恢复。
     * @param {RenewPostpaidDBInstanceRequest} req
     * @param {function(string, RenewPostpaidDBInstanceResponse):void} cb
     * @public
     */
    RenewPostpaidDBInstance(req, cb) {
        const resp = new RenewPostpaidDBInstanceResponse();
        this.request("RenewPostpaidDBInstance", req, resp, cb);
    }
    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        const resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }
    /**
     * 本接口（CreateReadOnlyDBInstances）用于添加只读副本实例。
     * @param {CreateReadOnlyDBInstancesRequest} req
     * @param {function(string, CreateReadOnlyDBInstancesResponse):void} cb
     * @public
     */
    CreateReadOnlyDBInstances(req, cb) {
        const resp = new CreateReadOnlyDBInstancesResponse();
        this.request("CreateReadOnlyDBInstances", req, resp, cb);
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
     * 本接口（ModifyDBInstanceRenewFlag）用于修改实例续费标记
     * @param {ModifyDBInstanceRenewFlagRequest} req
     * @param {function(string, ModifyDBInstanceRenewFlagResponse):void} cb
     * @public
     */
    ModifyDBInstanceRenewFlag(req, cb) {
        const resp = new ModifyDBInstanceRenewFlagResponse();
        this.request("ModifyDBInstanceRenewFlag", req, resp, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        const resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }
    /**
     * 本接口（DescribeReadOnlyGroupByReadOnlyInstance）用于通过只读副本实例ID查询其所在的只读组。
     * @param {DescribeReadOnlyGroupByReadOnlyInstanceRequest} req
     * @param {function(string, DescribeReadOnlyGroupByReadOnlyInstanceResponse):void} cb
     * @public
     */
    DescribeReadOnlyGroupByReadOnlyInstance(req, cb) {
        const resp = new DescribeReadOnlyGroupByReadOnlyInstanceResponse();
        this.request("DescribeReadOnlyGroupByReadOnlyInstance", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=sqlserver_client.js.map