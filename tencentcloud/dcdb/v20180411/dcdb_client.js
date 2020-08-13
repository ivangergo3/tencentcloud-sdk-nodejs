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
const InitDCDBInstancesResponse = models_1.Models.InitDCDBInstancesResponse;
const UpgradeDCDBInstanceResponse = models_1.Models.UpgradeDCDBInstanceResponse;
const DescribeAccountPrivilegesResponse = models_1.Models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models_1.Models.DescribeDatabasesRequest;
const ParamDesc = models_1.Models.ParamDesc;
const DescribeDBParametersRequest = models_1.Models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models_1.Models.DescribeAccountsRequest;
const SpecConfig = models_1.Models.SpecConfig;
const DescribeDCDBPriceResponse = models_1.Models.DescribeDCDBPriceResponse;
const RenewDCDBInstanceResponse = models_1.Models.RenewDCDBInstanceResponse;
const DescribeDBSyncModeResponse = models_1.Models.DescribeDBSyncModeResponse;
const DescribeDCDBUpgradePriceResponse = models_1.Models.DescribeDCDBUpgradePriceResponse;
const CreateAccountRequest = models_1.Models.CreateAccountRequest;
const Project = models_1.Models.Project;
const CloneAccountResponse = models_1.Models.CloneAccountResponse;
const ModifyAccountDescriptionResponse = models_1.Models.ModifyAccountDescriptionResponse;
const CreateDCDBInstanceResponse = models_1.Models.CreateDCDBInstanceResponse;
const ParamConstraint = models_1.Models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models_1.Models.ModifyDBInstancesProjectResponse;
const DatabaseView = models_1.Models.DatabaseView;
const DescribeDBLogFilesRequest = models_1.Models.DescribeDBLogFilesRequest;
const DescribeOrdersResponse = models_1.Models.DescribeOrdersResponse;
const ResetAccountPasswordRequest = models_1.Models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models_1.Models.CopyAccountPrivilegesResponse;
const CloneAccountRequest = models_1.Models.CloneAccountRequest;
const DescribeDCDBRenewalPriceRequest = models_1.Models.DescribeDCDBRenewalPriceRequest;
const ParamModifyResult = models_1.Models.ParamModifyResult;
const DescribeDCDBPriceRequest = models_1.Models.DescribeDCDBPriceRequest;
const DatabaseFunction = models_1.Models.DatabaseFunction;
const DescribeSqlLogsRequest = models_1.Models.DescribeSqlLogsRequest;
const ResetAccountPasswordResponse = models_1.Models.ResetAccountPasswordResponse;
const DescribeDCDBSaleInfoRequest = models_1.Models.DescribeDCDBSaleInfoRequest;
const ExpandShardConfig = models_1.Models.ExpandShardConfig;
const RenewDCDBInstanceRequest = models_1.Models.RenewDCDBInstanceRequest;
const ShardZoneChooseInfo = models_1.Models.ShardZoneChooseInfo;
const DatabaseTable = models_1.Models.DatabaseTable;
const Deal = models_1.Models.Deal;
const GrantAccountPrivilegesRequest = models_1.Models.GrantAccountPrivilegesRequest;
const DescribeShardSpecRequest = models_1.Models.DescribeShardSpecRequest;
const DescribeDCDBShardsRequest = models_1.Models.DescribeDCDBShardsRequest;
const DBParamValue = models_1.Models.DBParamValue;
const SpecConfigInfo = models_1.Models.SpecConfigInfo;
const ModifyDBParametersRequest = models_1.Models.ModifyDBParametersRequest;
const DCDBInstanceInfo = models_1.Models.DCDBInstanceInfo;
const ZonesInfo = models_1.Models.ZonesInfo;
const ModifyDBParametersResponse = models_1.Models.ModifyDBParametersResponse;
const DCDBShardInfo = models_1.Models.DCDBShardInfo;
const CopyAccountPrivilegesRequest = models_1.Models.CopyAccountPrivilegesRequest;
const DescribeDatabaseTableRequest = models_1.Models.DescribeDatabaseTableRequest;
const OpenDBExtranetAccessResponse = models_1.Models.OpenDBExtranetAccessResponse;
const DescribeDatabaseObjectsResponse = models_1.Models.DescribeDatabaseObjectsResponse;
const TableColumn = models_1.Models.TableColumn;
const SplitShardConfig = models_1.Models.SplitShardConfig;
const DescribeDCDBRenewalPriceResponse = models_1.Models.DescribeDCDBRenewalPriceResponse;
const DescribeShardSpecResponse = models_1.Models.DescribeShardSpecResponse;
const DescribeDCDBShardsResponse = models_1.Models.DescribeDCDBShardsResponse;
const Database = models_1.Models.Database;
const GrantAccountPrivilegesResponse = models_1.Models.GrantAccountPrivilegesResponse;
const ShardInfo = models_1.Models.ShardInfo;
const OpenDBExtranetAccessRequest = models_1.Models.OpenDBExtranetAccessRequest;
const DescribeDCDBSaleInfoResponse = models_1.Models.DescribeDCDBSaleInfoResponse;
const DescribeDBSyncModeRequest = models_1.Models.DescribeDBSyncModeRequest;
const CloseDBExtranetAccessResponse = models_1.Models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models_1.Models.ModifyAccountDescriptionRequest;
const DescribeProjectsRequest = models_1.Models.DescribeProjectsRequest;
const DescribeDatabasesResponse = models_1.Models.DescribeDatabasesResponse;
const DescribeOrdersRequest = models_1.Models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models_1.Models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models_1.Models.CloseDBExtranetAccessRequest;
const InitDCDBInstancesRequest = models_1.Models.InitDCDBInstancesRequest;
const DescribeSqlLogsResponse = models_1.Models.DescribeSqlLogsResponse;
const DeleteAccountRequest = models_1.Models.DeleteAccountRequest;
const DescribeDCDBInstancesResponse = models_1.Models.DescribeDCDBInstancesResponse;
const CreateDCDBInstanceRequest = models_1.Models.CreateDCDBInstanceRequest;
const DescribeDCDBUpgradePriceRequest = models_1.Models.DescribeDCDBUpgradePriceRequest;
const DatabaseProcedure = models_1.Models.DatabaseProcedure;
const AddShardConfig = models_1.Models.AddShardConfig;
const ModifyDBSyncModeRequest = models_1.Models.ModifyDBSyncModeRequest;
const DescribeProjectsResponse = models_1.Models.DescribeProjectsResponse;
const CreateAccountResponse = models_1.Models.CreateAccountResponse;
const RegionInfo = models_1.Models.RegionInfo;
const DescribeDatabaseObjectsRequest = models_1.Models.DescribeDatabaseObjectsRequest;
const UpgradeDCDBInstanceRequest = models_1.Models.UpgradeDCDBInstanceRequest;
const ConstraintRange = models_1.Models.ConstraintRange;
const LogFileInfo = models_1.Models.LogFileInfo;
const DBAccount = models_1.Models.DBAccount;
const DescribeDatabaseTableResponse = models_1.Models.DescribeDatabaseTableResponse;
const DescribeAccountPrivilegesRequest = models_1.Models.DescribeAccountPrivilegesRequest;
const SqlLogItem = models_1.Models.SqlLogItem;
const DescribeAccountsResponse = models_1.Models.DescribeAccountsResponse;
const DescribeDCDBInstancesRequest = models_1.Models.DescribeDCDBInstancesRequest;
const DescribeDBParametersResponse = models_1.Models.DescribeDBParametersResponse;
const ModifyDBInstancesProjectRequest = models_1.Models.ModifyDBInstancesProjectRequest;
const ModifyDBSyncModeResponse = models_1.Models.ModifyDBSyncModeResponse;
const DeleteAccountResponse = models_1.Models.DeleteAccountResponse;
/**
 * dcdb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("dcdb.tencentcloudapi.com", "2018-04-11", credential, region, profile);
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
     * 本接口（DescribeOrders）用于查询分布式数据库订单信息。传入订单ID来查询订单关联的分布式数据库实例，和对应的任务流程ID。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        const resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }
    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
     * @param {DescribeDatabaseObjectsRequest} req
     * @param {function(string, DescribeDatabaseObjectsResponse):void} cb
     * @public
     */
    DescribeDatabaseObjects(req, cb) {
        const resp = new DescribeDatabaseObjectsResponse();
        this.request("DescribeDatabaseObjects", req, resp, cb);
    }
    /**
     * 查询可创建的分布式数据库可售卖的分片规格配置。
     * @param {DescribeShardSpecRequest} req
     * @param {function(string, DescribeShardSpecResponse):void} cb
     * @public
     */
    DescribeShardSpec(req, cb) {
        const resp = new DescribeShardSpecResponse();
        this.request("DescribeShardSpec", req, resp, cb);
    }
    /**
     * 本接口（DescribeDCDBUpgradePrice）用于查询升级分布式数据库实例价格。
     * @param {DescribeDCDBUpgradePriceRequest} req
     * @param {function(string, DescribeDCDBUpgradePriceResponse):void} cb
     * @public
     */
    DescribeDCDBUpgradePrice(req, cb) {
        const resp = new DescribeDCDBUpgradePriceResponse();
        this.request("DescribeDCDBUpgradePrice", req, resp, cb);
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
     * 本接口（DescribeDCDBPrice）用于在购买实例前，查询实例的价格。
     * @param {DescribeDCDBPriceRequest} req
     * @param {function(string, DescribeDCDBPriceResponse):void} cb
     * @public
     */
    DescribeDCDBPrice(req, cb) {
        const resp = new DescribeDCDBPriceResponse();
        this.request("DescribeDCDBPrice", req, resp, cb);
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
     * 本接口(DescribeDCDBSaleInfo)用于查询分布式数据库可售卖的地域和可用区信息。
     * @param {DescribeDCDBSaleInfoRequest} req
     * @param {function(string, DescribeDCDBSaleInfoResponse):void} cb
     * @public
     */
    DescribeDCDBSaleInfo(req, cb) {
        const resp = new DescribeDCDBSaleInfoResponse();
        this.request("DescribeDCDBSaleInfo", req, resp, cb);
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
     * 本接口(InitDCDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     * @param {InitDCDBInstancesRequest} req
     * @param {function(string, InitDCDBInstancesResponse):void} cb
     * @public
     */
    InitDCDBInstances(req, cb) {
        const resp = new InitDCDBInstancesResponse();
        this.request("InitDCDBInstances", req, resp, cb);
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
     * 本接口（RenewDCDBInstance）用于续费分布式数据库实例。
     * @param {RenewDCDBInstanceRequest} req
     * @param {function(string, RenewDCDBInstanceResponse):void} cb
     * @public
     */
    RenewDCDBInstance(req, cb) {
        const resp = new RenewDCDBInstanceResponse();
        this.request("RenewDCDBInstance", req, resp, cb);
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
     * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
     * @param {DescribeDBSyncModeRequest} req
     * @param {function(string, DescribeDBSyncModeResponse):void} cb
     * @public
     */
    DescribeDBSyncMode(req, cb) {
        const resp = new DescribeDBSyncModeResponse();
        this.request("DescribeDBSyncMode", req, resp, cb);
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
     * 本接口（UpgradeDCDBInstance）用于升级分布式数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     * @param {UpgradeDCDBInstanceRequest} req
     * @param {function(string, UpgradeDCDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDCDBInstance(req, cb) {
        const resp = new UpgradeDCDBInstanceResponse();
        this.request("UpgradeDCDBInstance", req, resp, cb);
    }
    /**
     * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
     * @param {ModifyDBSyncModeRequest} req
     * @param {function(string, ModifyDBSyncModeResponse):void} cb
     * @public
     */
    ModifyDBSyncMode(req, cb) {
        const resp = new ModifyDBSyncModeResponse();
        this.request("ModifyDBSyncMode", req, resp, cb);
    }
    /**
     * 本接口（DescribeProjects）用于查询项目列表
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        const resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
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
     * 查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回10条实例记录，单次请求最多支持返回100条实例记录。
     * @param {DescribeDCDBInstancesRequest} req
     * @param {function(string, DescribeDCDBInstancesResponse):void} cb
     * @public
     */
    DescribeDCDBInstances(req, cb) {
        const resp = new DescribeDCDBInstancesResponse();
        this.request("DescribeDCDBInstances", req, resp, cb);
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
     * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
     * @param {DescribeDCDBShardsRequest} req
     * @param {function(string, DescribeDCDBShardsResponse):void} cb
     * @public
     */
    DescribeDCDBShards(req, cb) {
        const resp = new DescribeDCDBShardsResponse();
        this.request("DescribeDCDBShards", req, resp, cb);
    }
    /**
     * 本接口（CreateDCDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
     * @param {CreateDCDBInstanceRequest} req
     * @param {function(string, CreateDCDBInstanceResponse):void} cb
     * @public
     */
    CreateDCDBInstance(req, cb) {
        const resp = new CreateDCDBInstanceResponse();
        this.request("CreateDCDBInstance", req, resp, cb);
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
     * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
     * @param {DescribeDatabaseTableRequest} req
     * @param {function(string, DescribeDatabaseTableResponse):void} cb
     * @public
     */
    DescribeDatabaseTable(req, cb) {
        const resp = new DescribeDatabaseTableResponse();
        this.request("DescribeDatabaseTable", req, resp, cb);
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
     * 本接口（DescribeDCDBRenewalPrice）用于在续费分布式数据库实例时，查询续费的价格。
     * @param {DescribeDCDBRenewalPriceRequest} req
     * @param {function(string, DescribeDCDBRenewalPriceResponse):void} cb
     * @public
     */
    DescribeDCDBRenewalPrice(req, cb) {
        const resp = new DescribeDCDBRenewalPriceResponse();
        this.request("DescribeDCDBRenewalPrice", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=dcdb_client.js.map