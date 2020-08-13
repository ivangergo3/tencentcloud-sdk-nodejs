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
const CreateDBInstancesRequest = models_1.Models.CreateDBInstancesRequest;
const CloseServerlessDBExtranetAccessResponse = models_1.Models.CloseServerlessDBExtranetAccessResponse;
const DestroyDBInstanceRequest = models_1.Models.DestroyDBInstanceRequest;
const CreateServerlessDBInstanceRequest = models_1.Models.CreateServerlessDBInstanceRequest;
const InquiryPriceRenewDBInstanceRequest = models_1.Models.InquiryPriceRenewDBInstanceRequest;
const SetAutoRenewFlagRequest = models_1.Models.SetAutoRenewFlagRequest;
const DescribeOrdersResponse = models_1.Models.DescribeOrdersResponse;
const DeleteServerlessDBInstanceRequest = models_1.Models.DeleteServerlessDBInstanceRequest;
const DescribeDBXlogsRequest = models_1.Models.DescribeDBXlogsRequest;
const InquiryPriceCreateDBInstancesResponse = models_1.Models.InquiryPriceCreateDBInstancesResponse;
const AccountInfo = models_1.Models.AccountInfo;
const InquiryPriceUpgradeDBInstanceRequest = models_1.Models.InquiryPriceUpgradeDBInstanceRequest;
const DescribeAccountsRequest = models_1.Models.DescribeAccountsRequest;
const DescribeDBErrlogsResponse = models_1.Models.DescribeDBErrlogsResponse;
const InquiryPriceCreateDBInstancesRequest = models_1.Models.InquiryPriceCreateDBInstancesRequest;
const ModifyDBInstanceNameRequest = models_1.Models.ModifyDBInstanceNameRequest;
const SpecItemInfo = models_1.Models.SpecItemInfo;
const DescribeProductConfigRequest = models_1.Models.DescribeProductConfigRequest;
const CreateDBInstancesResponse = models_1.Models.CreateDBInstancesResponse;
const RestartDBInstanceRequest = models_1.Models.RestartDBInstanceRequest;
const DescribeDBInstancesRequest = models_1.Models.DescribeDBInstancesRequest;
const ErrLogDetail = models_1.Models.ErrLogDetail;
const ServerlessDBInstance = models_1.Models.ServerlessDBInstance;
const DescribeServerlessDBInstancesResponse = models_1.Models.DescribeServerlessDBInstancesResponse;
const ModifyDBInstancesProjectResponse = models_1.Models.ModifyDBInstancesProjectResponse;
const RenewInstanceResponse = models_1.Models.RenewInstanceResponse;
const DescribeZonesRequest = models_1.Models.DescribeZonesRequest;
const UpgradeDBInstanceRequest = models_1.Models.UpgradeDBInstanceRequest;
const OpenServerlessDBExtranetAccessRequest = models_1.Models.OpenServerlessDBExtranetAccessRequest;
const RegionInfo = models_1.Models.RegionInfo;
const DeleteServerlessDBInstanceResponse = models_1.Models.DeleteServerlessDBInstanceResponse;
const SlowlogDetail = models_1.Models.SlowlogDetail;
const InitDBInstancesRequest = models_1.Models.InitDBInstancesRequest;
const RestartDBInstanceResponse = models_1.Models.RestartDBInstanceResponse;
const SetAutoRenewFlagResponse = models_1.Models.SetAutoRenewFlagResponse;
const DescribeDBInstancesResponse = models_1.Models.DescribeDBInstancesResponse;
const SpecInfo = models_1.Models.SpecInfo;
const DBInstance = models_1.Models.DBInstance;
const DescribeProductConfigResponse = models_1.Models.DescribeProductConfigResponse;
const ResetAccountPasswordResponse = models_1.Models.ResetAccountPasswordResponse;
const ResetAccountPasswordRequest = models_1.Models.ResetAccountPasswordRequest;
const DescribeOrdersRequest = models_1.Models.DescribeOrdersRequest;
const InquiryPriceUpgradeDBInstanceResponse = models_1.Models.InquiryPriceUpgradeDBInstanceResponse;
const InitDBInstancesResponse = models_1.Models.InitDBInstancesResponse;
const DescribeDBBackupsRequest = models_1.Models.DescribeDBBackupsRequest;
const ServerlessDBAccount = models_1.Models.ServerlessDBAccount;
const OpenDBExtranetAccessResponse = models_1.Models.OpenDBExtranetAccessResponse;
const Filter = models_1.Models.Filter;
const RenewInstanceRequest = models_1.Models.RenewInstanceRequest;
const PgDeal = models_1.Models.PgDeal;
const DescribeRegionsResponse = models_1.Models.DescribeRegionsResponse;
const DescribeDatabasesRequest = models_1.Models.DescribeDatabasesRequest;
const DescribeAccountsResponse = models_1.Models.DescribeAccountsResponse;
const InquiryPriceRenewDBInstanceResponse = models_1.Models.InquiryPriceRenewDBInstanceResponse;
const DescribeDBErrlogsRequest = models_1.Models.DescribeDBErrlogsRequest;
const ZoneInfo = models_1.Models.ZoneInfo;
const DBBackup = models_1.Models.DBBackup;
const DBInstanceNetInfo = models_1.Models.DBInstanceNetInfo;
const ModifyDBInstancesProjectRequest = models_1.Models.ModifyDBInstancesProjectRequest;
const ServerlessDBInstanceNetInfo = models_1.Models.ServerlessDBInstanceNetInfo;
const UpgradeDBInstanceResponse = models_1.Models.UpgradeDBInstanceResponse;
const ModifyDBInstanceNameResponse = models_1.Models.ModifyDBInstanceNameResponse;
const OpenServerlessDBExtranetAccessResponse = models_1.Models.OpenServerlessDBExtranetAccessResponse;
const CloseDBExtranetAccessResponse = models_1.Models.CloseDBExtranetAccessResponse;
const DestroyDBInstanceResponse = models_1.Models.DestroyDBInstanceResponse;
const DescribeDBInstanceAttributeResponse = models_1.Models.DescribeDBInstanceAttributeResponse;
const DescribeDBSlowlogsRequest = models_1.Models.DescribeDBSlowlogsRequest;
const DescribeServerlessDBInstancesRequest = models_1.Models.DescribeServerlessDBInstancesRequest;
const OpenDBExtranetAccessRequest = models_1.Models.OpenDBExtranetAccessRequest;
const DescribeDBBackupsResponse = models_1.Models.DescribeDBBackupsResponse;
const DescribeRegionsRequest = models_1.Models.DescribeRegionsRequest;
const DescribeZonesResponse = models_1.Models.DescribeZonesResponse;
const NormalQueryItem = models_1.Models.NormalQueryItem;
const CreateServerlessDBInstanceResponse = models_1.Models.CreateServerlessDBInstanceResponse;
const DescribeDatabasesResponse = models_1.Models.DescribeDatabasesResponse;
const DescribeDBXlogsResponse = models_1.Models.DescribeDBXlogsResponse;
const DescribeDBInstanceAttributeRequest = models_1.Models.DescribeDBInstanceAttributeRequest;
const CloseServerlessDBExtranetAccessRequest = models_1.Models.CloseServerlessDBExtranetAccessRequest;
const ModifyAccountRemarkResponse = models_1.Models.ModifyAccountRemarkResponse;
const DescribeDBSlowlogsResponse = models_1.Models.DescribeDBSlowlogsResponse;
const ModifyAccountRemarkRequest = models_1.Models.ModifyAccountRemarkRequest;
const CloseDBExtranetAccessRequest = models_1.Models.CloseDBExtranetAccessRequest;
const Xlog = models_1.Models.Xlog;
/**
 * postgres client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("postgres.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    /**
     * 本接口（DescribeOrders）用于获取订单信息。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        const resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }
    /**
     * 本接口 (DestroyDBInstance) 用于销毁指定DBInstanceId对应的实例。
     * @param {DestroyDBInstanceRequest} req
     * @param {function(string, DestroyDBInstanceResponse):void} cb
     * @public
     */
    DestroyDBInstance(req, cb) {
        const resp = new DestroyDBInstanceResponse();
        this.request("DestroyDBInstance", req, resp, cb);
    }
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。
     * @param {DescribeDBBackupsRequest} req
     * @param {function(string, DescribeDBBackupsResponse):void} cb
     * @public
     */
    DescribeDBBackups(req, cb) {
        const resp = new DescribeDBBackupsResponse();
        this.request("DescribeDBBackups", req, resp, cb);
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
     * 本接口（DescribeDBErrlogs）用于获取错误日志。
     * @param {DescribeDBErrlogsRequest} req
     * @param {function(string, DescribeDBErrlogsResponse):void} cb
     * @public
     */
    DescribeDBErrlogs(req, cb) {
        const resp = new DescribeDBErrlogsResponse();
        this.request("DescribeDBErrlogs", req, resp, cb);
    }
    /**
     * 本接口（RestartDBInstance）用于重启实例。
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req, cb) {
        const resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        const resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }
    /**
     * 本接口（OpenDBExtranetAccess）用于开通外网。
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        const resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }
    /**
     * 关闭serverlessDB实例外网
     * @param {CloseServerlessDBExtranetAccessRequest} req
     * @param {function(string, CloseServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseServerlessDBExtranetAccess(req, cb) {
        const resp = new CloseServerlessDBExtranetAccessResponse();
        this.request("CloseServerlessDBExtranetAccess", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        const resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }
    /**
     * 本接口（ModifyAccountRemark）用于修改帐号备注。
     * @param {ModifyAccountRemarkRequest} req
     * @param {function(string, ModifyAccountRemarkResponse):void} cb
     * @public
     */
    ModifyAccountRemark(req, cb) {
        const resp = new ModifyAccountRemarkResponse();
        this.request("ModifyAccountRemark", req, resp, cb);
    }
    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
     * @param {DescribeDBXlogsRequest} req
     * @param {function(string, DescribeDBXlogsResponse):void} cb
     * @public
     */
    DescribeDBXlogs(req, cb) {
        const resp = new DescribeDBXlogsResponse();
        this.request("DescribeDBXlogs", req, resp, cb);
    }
    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     * @param {SetAutoRenewFlagRequest} req
     * @param {function(string, SetAutoRenewFlagResponse):void} cb
     * @public
     */
    SetAutoRenewFlag(req, cb) {
        const resp = new SetAutoRenewFlagResponse();
        this.request("SetAutoRenewFlag", req, resp, cb);
    }
    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     * @param {DescribeDBInstanceAttributeRequest} req
     * @param {function(string, DescribeDBInstanceAttributeResponse):void} cb
     * @public
     */
    DescribeDBInstanceAttribute(req, cb) {
        const resp = new DescribeDBInstanceAttributeResponse();
        this.request("DescribeDBInstanceAttribute", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        const resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }
    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例。
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        const resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }
    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     * @param {CreateServerlessDBInstanceRequest} req
     * @param {function(string, CreateServerlessDBInstanceResponse):void} cb
     * @public
     */
    CreateServerlessDBInstance(req, cb) {
        const resp = new CreateServerlessDBInstanceResponse();
        this.request("CreateServerlessDBInstance", req, resp, cb);
    }
    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        const resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }
    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        const resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }
    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     * @param {DeleteServerlessDBInstanceRequest} req
     * @param {function(string, DeleteServerlessDBInstanceResponse):void} cb
     * @public
     */
    DeleteServerlessDBInstance(req, cb) {
        const resp = new DeleteServerlessDBInstanceResponse();
        this.request("DeleteServerlessDBInstance", req, resp, cb);
    }
    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        const resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
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
     * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        const resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于获取实例用户列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        const resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }
    /**
     * 开通serverlessDB实例外网
     * @param {OpenServerlessDBExtranetAccessRequest} req
     * @param {function(string, OpenServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenServerlessDBExtranetAccess(req, cb) {
        const resp = new OpenServerlessDBExtranetAccessResponse();
        this.request("OpenServerlessDBExtranetAccess", req, resp, cb);
    }
    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     * @param {DescribeServerlessDBInstancesRequest} req
     * @param {function(string, DescribeServerlessDBInstancesResponse):void} cb
     * @public
     */
    DescribeServerlessDBInstances(req, cb) {
        const resp = new DescribeServerlessDBInstancesResponse();
        this.request("DescribeServerlessDBInstances", req, resp, cb);
    }
    /**
     * 本接口（RenewInstance）用于续费实例。
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        const resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }
    /**
     * 接口（DescribeDatabases）用来拉取数据库列表
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        const resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }
    /**
     * 本接口（UpgradeDBInstance）用于升级实例。
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        const resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
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
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。
     * @param {DescribeDBSlowlogsRequest} req
     * @param {function(string, DescribeDBSlowlogsResponse):void} cb
     * @public
     */
    DescribeDBSlowlogs(req, cb) {
        const resp = new DescribeDBSlowlogsResponse();
        this.request("DescribeDBSlowlogs", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=postgres_client.js.map