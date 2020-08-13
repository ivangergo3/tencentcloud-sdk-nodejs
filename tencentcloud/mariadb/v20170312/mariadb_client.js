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
const CreateDBInstanceRequest = models_1.Models.CreateDBInstanceRequest;
const DescribeAccountPrivilegesResponse = models_1.Models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models_1.Models.DescribeDatabasesRequest;
const CreateAccountResponse = models_1.Models.CreateAccountResponse;
const DescribeDBParametersRequest = models_1.Models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models_1.Models.DescribeAccountsRequest;
const DescribeRenewalPriceResponse = models_1.Models.DescribeRenewalPriceResponse;
const CreateTmpInstancesRequest = models_1.Models.CreateTmpInstancesRequest;
const RestartDBInstancesResponse = models_1.Models.RestartDBInstancesResponse;
const DescribeUpgradePriceRequest = models_1.Models.DescribeUpgradePriceRequest;
const DescribeDBResourceUsageDetailsResponse = models_1.Models.DescribeDBResourceUsageDetailsResponse;
const DescribeDBInstanceSpecsResponse = models_1.Models.DescribeDBInstanceSpecsResponse;
const DescribeDBSlowLogsRequest = models_1.Models.DescribeDBSlowLogsRequest;
const CreateAccountRequest = models_1.Models.CreateAccountRequest;
const InitDBInstancesResponse = models_1.Models.InitDBInstancesResponse;
const DescribeDBParametersResponse = models_1.Models.DescribeDBParametersResponse;
const ResourceUsageMonitorSet = models_1.Models.ResourceUsageMonitorSet;
const ModifyLogFileRetentionPeriodRequest = models_1.Models.ModifyLogFileRetentionPeriodRequest;
const PerformanceMonitorSet = models_1.Models.PerformanceMonitorSet;
const DescribeFlowResponse = models_1.Models.DescribeFlowResponse;
const CloneAccountResponse = models_1.Models.CloneAccountResponse;
const ZoneChooseInfo = models_1.Models.ZoneChooseInfo;
const ModifyAccountDescriptionResponse = models_1.Models.ModifyAccountDescriptionResponse;
const DescribeDBResourceUsageRequest = models_1.Models.DescribeDBResourceUsageRequest;
const ParamConstraint = models_1.Models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models_1.Models.ModifyDBInstancesProjectResponse;
const DBBackupTimeConfig = models_1.Models.DBBackupTimeConfig;
const DescribeDBLogFilesRequest = models_1.Models.DescribeDBLogFilesRequest;
const DescribeDBResourceUsageResponse = models_1.Models.DescribeDBResourceUsageResponse;
const DescribeOrdersResponse = models_1.Models.DescribeOrdersResponse;
const ResetAccountPasswordRequest = models_1.Models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models_1.Models.CopyAccountPrivilegesResponse;
const CloneAccountRequest = models_1.Models.CloneAccountRequest;
const ParamModifyResult = models_1.Models.ParamModifyResult;
const DescribeDBInstancesRequest = models_1.Models.DescribeDBInstancesRequest;
const DescribeSaleInfoRequest = models_1.Models.DescribeSaleInfoRequest;
const RenewDBInstanceRequest = models_1.Models.RenewDBInstanceRequest;
const DescribeSqlLogsRequest = models_1.Models.DescribeSqlLogsRequest;
const ResetAccountPasswordResponse = models_1.Models.ResetAccountPasswordResponse;
const DescribeDBInstanceSpecsRequest = models_1.Models.DescribeDBInstanceSpecsRequest;
const DescribePriceRequest = models_1.Models.DescribePriceRequest;
const CreateDBInstanceResponse = models_1.Models.CreateDBInstanceResponse;
const DescribeBackupTimeRequest = models_1.Models.DescribeBackupTimeRequest;
const DescribeSaleInfoResponse = models_1.Models.DescribeSaleInfoResponse;
const Deal = models_1.Models.Deal;
const GrantAccountPrivilegesRequest = models_1.Models.GrantAccountPrivilegesRequest;
const DBParamValue = models_1.Models.DBParamValue;
const SpecConfigInfo = models_1.Models.SpecConfigInfo;
const ModifyDBParametersRequest = models_1.Models.ModifyDBParametersRequest;
const ZonesInfo = models_1.Models.ZonesInfo;
const ModifyDBParametersResponse = models_1.Models.ModifyDBParametersResponse;
const CopyAccountPrivilegesRequest = models_1.Models.CopyAccountPrivilegesRequest;
const OpenDBExtranetAccessResponse = models_1.Models.OpenDBExtranetAccessResponse;
const ModifyDBInstanceNameRequest = models_1.Models.ModifyDBInstanceNameRequest;
const ModifyBackupTimeRequest = models_1.Models.ModifyBackupTimeRequest;
const CreateTmpInstancesResponse = models_1.Models.CreateTmpInstancesResponse;
const UpgradeDBInstanceRequest = models_1.Models.UpgradeDBInstanceRequest;
const DescribeUpgradePriceResponse = models_1.Models.DescribeUpgradePriceResponse;
const DBInstance = models_1.Models.DBInstance;
const DescribePriceResponse = models_1.Models.DescribePriceResponse;
const InitDBInstancesRequest = models_1.Models.InitDBInstancesRequest;
const ModifyBackupTimeResponse = models_1.Models.ModifyBackupTimeResponse;
const Database = models_1.Models.Database;
const GrantAccountPrivilegesResponse = models_1.Models.GrantAccountPrivilegesResponse;
const OpenDBExtranetAccessRequest = models_1.Models.OpenDBExtranetAccessRequest;
const ModifyDBInstanceNameResponse = models_1.Models.ModifyDBInstanceNameResponse;
const CloseDBExtranetAccessResponse = models_1.Models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models_1.Models.ModifyAccountDescriptionRequest;
const DescribeDBPerformanceDetailsRequest = models_1.Models.DescribeDBPerformanceDetailsRequest;
const DescribeBackupTimeResponse = models_1.Models.DescribeBackupTimeResponse;
const SlowLogData = models_1.Models.SlowLogData;
const RenewDBInstanceResponse = models_1.Models.RenewDBInstanceResponse;
const DescribeDatabasesResponse = models_1.Models.DescribeDatabasesResponse;
const DescribeOrdersRequest = models_1.Models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models_1.Models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models_1.Models.CloseDBExtranetAccessRequest;
const DescribeSqlLogsResponse = models_1.Models.DescribeSqlLogsResponse;
const DeleteAccountRequest = models_1.Models.DeleteAccountRequest;
const InstanceSpec = models_1.Models.InstanceSpec;
const DescribeFlowRequest = models_1.Models.DescribeFlowRequest;
const DescribeDBPerformanceResponse = models_1.Models.DescribeDBPerformanceResponse;
const ParamDesc = models_1.Models.ParamDesc;
const DescribeLogFileRetentionPeriodResponse = models_1.Models.DescribeLogFileRetentionPeriodResponse;
const RegionInfo = models_1.Models.RegionInfo;
const DescribeDBInstancesResponse = models_1.Models.DescribeDBInstancesResponse;
const ConstraintRange = models_1.Models.ConstraintRange;
const DescribeRenewalPriceRequest = models_1.Models.DescribeRenewalPriceRequest;
const LogFileInfo = models_1.Models.LogFileInfo;
const RestartDBInstancesRequest = models_1.Models.RestartDBInstancesRequest;
const DescribeDBResourceUsageDetailsRequest = models_1.Models.DescribeDBResourceUsageDetailsRequest;
const DBAccount = models_1.Models.DBAccount;
const DescribeAccountPrivilegesRequest = models_1.Models.DescribeAccountPrivilegesRequest;
const DescribeDBPerformanceDetailsResponse = models_1.Models.DescribeDBPerformanceDetailsResponse;
const SqlLogItem = models_1.Models.SqlLogItem;
const DescribeAccountsResponse = models_1.Models.DescribeAccountsResponse;
const DescribeDBSlowLogsResponse = models_1.Models.DescribeDBSlowLogsResponse;
const UpgradeDBInstanceResponse = models_1.Models.UpgradeDBInstanceResponse;
const DescribeLogFileRetentionPeriodRequest = models_1.Models.DescribeLogFileRetentionPeriodRequest;
const ModifyDBInstancesProjectRequest = models_1.Models.ModifyDBInstancesProjectRequest;
const MonitorData = models_1.Models.MonitorData;
const ModifyLogFileRetentionPeriodResponse = models_1.Models.ModifyLogFileRetentionPeriodResponse;
const DescribeDBPerformanceRequest = models_1.Models.DescribeDBPerformanceRequest;
const DeleteAccountResponse = models_1.Models.DeleteAccountResponse;
/**
 * mariadb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("mariadb.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    /**
     * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
注意：注意：相同用户名，不同Host是不同的账号。
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        const resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }
    /**
     * 本接口（DescribeRenewalPrice）用于在续费云数据库实例时，查询续费的价格。
     * @param {DescribeRenewalPriceRequest} req
     * @param {function(string, DescribeRenewalPriceResponse):void} cb
     * @public
     */
    DescribeRenewalPrice(req, cb) {
        const resp = new DescribeRenewalPriceResponse();
        this.request("DescribeRenewalPrice", req, resp, cb);
    }
    /**
     * 本接口（DescribeOrders）用于查询云数据库订单信息。传入订单ID来查询订单关联的云数据库实例，和对应的任务流程ID。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        const resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }
    /**
     * 本接口(DescribeSaleInfo)用于查询云数据库可售卖的地域和可用区信息。
     * @param {DescribeSaleInfoRequest} req
     * @param {function(string, DescribeSaleInfoResponse):void} cb
     * @public
     */
    DescribeSaleInfo(req, cb) {
        const resp = new DescribeSaleInfoResponse();
        this.request("DescribeSaleInfo", req, resp, cb);
    }
    /**
     * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
注意：相同用户名，不同Host是不同的账号。
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        const resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }
    /**
     * 本接口（DescribeBackupTime）用于获取云数据库的备份时间。后台系统将根据此配置定期进行实例备份。
     * @param {DescribeBackupTimeRequest} req
     * @param {function(string, DescribeBackupTimeResponse):void} cb
     * @public
     */
    DescribeBackupTime(req, cb) {
        const resp = new DescribeBackupTimeResponse();
        this.request("DescribeBackupTime", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBResourceUsageDetails)用于查看数据库实例当前性能数据。
     * @param {DescribeDBResourceUsageDetailsRequest} req
     * @param {function(string, DescribeDBResourceUsageDetailsResponse):void} cb
     * @public
     */
    DescribeDBResourceUsageDetails(req, cb) {
        const resp = new DescribeDBResourceUsageDetailsResponse();
        this.request("DescribeDBResourceUsageDetails", req, resp, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
注意：相同用户名，不同Host是不同的账号。
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        const resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }
    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     * @param {ModifyDBParametersRequest} req
     * @param {function(string, ModifyDBParametersResponse):void} cb
     * @public
     */
    ModifyDBParameters(req, cb) {
        const resp = new ModifyDBParametersResponse();
        this.request("ModifyDBParameters", req, resp, cb);
    }
    /**
     * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
     * @param {DescribeSqlLogsRequest} req
     * @param {function(string, DescribeSqlLogsResponse):void} cb
     * @public
     */
    DescribeSqlLogs(req, cb) {
        const resp = new DescribeSqlLogsResponse();
        this.request("DescribeSqlLogs", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBSlowLogs)用于查询慢查询日志列表。
     * @param {DescribeDBSlowLogsRequest} req
     * @param {function(string, DescribeDBSlowLogsResponse):void} cb
     * @public
     */
    DescribeDBSlowLogs(req, cb) {
        const resp = new DescribeDBSlowLogsResponse();
        this.request("DescribeDBSlowLogs", req, resp, cb);
    }
    /**
     * 本接口（DescribeFlow）用于查询流程状态。
     * @param {DescribeFlowRequest} req
     * @param {function(string, DescribeFlowResponse):void} cb
     * @public
     */
    DescribeFlow(req, cb) {
        const resp = new DescribeFlowResponse();
        this.request("DescribeFlow", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改云数据库实例的名称。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req, cb) {
        const resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }
    /**
     * 本接口（RestartDBInstances）用于重启数据库实例
     * @param {RestartDBInstancesRequest} req
     * @param {function(string, RestartDBInstancesResponse):void} cb
     * @public
     */
    RestartDBInstances(req, cb) {
        const resp = new RestartDBInstancesResponse();
        this.request("RestartDBInstances", req, resp, cb);
    }
    /**
     * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
注意：相同用户名，不同Host是不同的账号。
     * @param {GrantAccountPrivilegesRequest} req
     * @param {function(string, GrantAccountPrivilegesResponse):void} cb
     * @public
     */
    GrantAccountPrivileges(req, cb) {
        const resp = new GrantAccountPrivilegesResponse();
        this.request("GrantAccountPrivileges", req, resp, cb);
    }
    /**
     * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        const resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
     * @param {DescribeDBParametersRequest} req
     * @param {function(string, DescribeDBParametersResponse):void} cb
     * @public
     */
    DescribeDBParameters(req, cb) {
        const resp = new DescribeDBParametersResponse();
        this.request("DescribeDBParameters", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        const resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBPerformanceDetails)用于查看实例性能数据详情。
     * @param {DescribeDBPerformanceDetailsRequest} req
     * @param {function(string, DescribeDBPerformanceDetailsResponse):void} cb
     * @public
     */
    DescribeDBPerformanceDetails(req, cb) {
        const resp = new DescribeDBPerformanceDetailsResponse();
        this.request("DescribeDBPerformanceDetails", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     * @param {DescribeDBLogFilesRequest} req
     * @param {function(string, DescribeDBLogFilesResponse):void} cb
     * @public
     */
    DescribeDBLogFiles(req, cb) {
        const resp = new DescribeDBLogFilesResponse();
        this.request("DescribeDBLogFiles", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBInstanceSpecs)用于查询可创建的云数据库可售卖的规格配置。
     * @param {DescribeDBInstanceSpecsRequest} req
     * @param {function(string, DescribeDBInstanceSpecsResponse):void} cb
     * @public
     */
    DescribeDBInstanceSpecs(req, cb) {
        const resp = new DescribeDBInstanceSpecsResponse();
        this.request("DescribeDBInstanceSpecs", req, resp, cb);
    }
    /**
     * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回20条实例记录，单次请求最多支持返回100条实例记录。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        const resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }
    /**
     * 本接口（RenewDBInstance）用于续费云数据库实例。
     * @param {RenewDBInstanceRequest} req
     * @param {function(string, RenewDBInstanceResponse):void} cb
     * @public
     */
    RenewDBInstance(req, cb) {
        const resp = new RenewDBInstanceResponse();
        this.request("RenewDBInstance", req, resp, cb);
    }
    /**
     * 本接口（DescribeUpgradePrice）用于在扩容云数据库实例时，查询扩容的价格。
     * @param {DescribeUpgradePriceRequest} req
     * @param {function(string, DescribeUpgradePriceResponse):void} cb
     * @public
     */
    DescribeUpgradePrice(req, cb) {
        const resp = new DescribeUpgradePriceResponse();
        this.request("DescribeUpgradePrice", req, resp, cb);
    }
    /**
     * 本接口（ModifyBackupTime）用于设置云数据库实例的备份时间。后台系统将根据此配置定期进行实例备份。
     * @param {ModifyBackupTimeRequest} req
     * @param {function(string, ModifyBackupTimeResponse):void} cb
     * @public
     */
    ModifyBackupTime(req, cb) {
        const resp = new ModifyBackupTimeResponse();
        this.request("ModifyBackupTime", req, resp, cb);
    }
    /**
     * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        const resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }
    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        const resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }
    /**
     * 本接口(InitDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        const resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }
    /**
     * 本接口（CreateDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长和数量等信息创建云数据库实例。
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        const resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
    }
    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        const resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }
    /**
     * 本接口（CreateTmpInstances）用于创建临时实例。
     * @param {CreateTmpInstancesRequest} req
     * @param {function(string, CreateTmpInstancesResponse):void} cb
     * @public
     */
    CreateTmpInstances(req, cb) {
        const resp = new CreateTmpInstancesResponse();
        this.request("CreateTmpInstances", req, resp, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        const resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }
    /**
     * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
     * @param {CopyAccountPrivilegesRequest} req
     * @param {function(string, CopyAccountPrivilegesResponse):void} cb
     * @public
     */
    CopyAccountPrivileges(req, cb) {
        const resp = new CopyAccountPrivilegesResponse();
        this.request("CopyAccountPrivileges", req, resp, cb);
    }
    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        const resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }
    /**
     * 本接口（DescribePrice）用于在购买实例前，查询实例的价格。
     * @param {DescribePriceRequest} req
     * @param {function(string, DescribePriceResponse):void} cb
     * @public
     */
    DescribePrice(req, cb) {
        const resp = new DescribePriceResponse();
        this.request("DescribePrice", req, resp, cb);
    }
    /**
     * 本接口（CloneAccount）用于克隆实例账户。
     * @param {CloneAccountRequest} req
     * @param {function(string, CloneAccountResponse):void} cb
     * @public
     */
    CloneAccount(req, cb) {
        const resp = new CloneAccountResponse();
        this.request("CloneAccount", req, resp, cb);
    }
    /**
     * 本接口(UpgradeDBInstance)用于扩容云数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        const resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBPerformance)用于查看数据库实例当前性能数据。
     * @param {DescribeDBPerformanceRequest} req
     * @param {function(string, DescribeDBPerformanceResponse):void} cb
     * @public
     */
    DescribeDBPerformance(req, cb) {
        const resp = new DescribeDBPerformanceResponse();
        this.request("DescribeDBPerformance", req, resp, cb);
    }
    /**
     * 本接口(DescribeLogFileRetentionPeriod)用于查看数据库备份日志的备份天数的设置情况。
     * @param {DescribeLogFileRetentionPeriodRequest} req
     * @param {function(string, DescribeLogFileRetentionPeriodResponse):void} cb
     * @public
     */
    DescribeLogFileRetentionPeriod(req, cb) {
        const resp = new DescribeLogFileRetentionPeriodResponse();
        this.request("DescribeLogFileRetentionPeriod", req, resp, cb);
    }
    /**
     * 本接口(DescribeDBResourceUsage)用于查看数据库实例资源的使用情况。
     * @param {DescribeDBResourceUsageRequest} req
     * @param {function(string, DescribeDBResourceUsageResponse):void} cb
     * @public
     */
    DescribeDBResourceUsage(req, cb) {
        const resp = new DescribeDBResourceUsageResponse();
        this.request("DescribeDBResourceUsage", req, resp, cb);
    }
    /**
     * 本接口(ModifyLogFileRetentionPeriod)用于修改数据库备份日志保存天数。
     * @param {ModifyLogFileRetentionPeriodRequest} req
     * @param {function(string, ModifyLogFileRetentionPeriodResponse):void} cb
     * @public
     */
    ModifyLogFileRetentionPeriod(req, cb) {
        const resp = new ModifyLogFileRetentionPeriodResponse();
        this.request("ModifyLogFileRetentionPeriod", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=mariadb_client.js.map