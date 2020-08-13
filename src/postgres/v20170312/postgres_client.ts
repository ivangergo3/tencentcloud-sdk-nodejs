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
import { Models as models} from "./models"
import { AbstractClient } from '../../common/abstract_client'
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const CloseServerlessDBExtranetAccessResponse = models.CloseServerlessDBExtranetAccessResponse;
const DestroyDBInstanceRequest = models.DestroyDBInstanceRequest;
const CreateServerlessDBInstanceRequest = models.CreateServerlessDBInstanceRequest;
const InquiryPriceRenewDBInstanceRequest = models.InquiryPriceRenewDBInstanceRequest;
const SetAutoRenewFlagRequest = models.SetAutoRenewFlagRequest;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const DeleteServerlessDBInstanceRequest = models.DeleteServerlessDBInstanceRequest;
const DescribeDBXlogsRequest = models.DescribeDBXlogsRequest;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const AccountInfo = models.AccountInfo;
const InquiryPriceUpgradeDBInstanceRequest = models.InquiryPriceUpgradeDBInstanceRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const DescribeDBErrlogsResponse = models.DescribeDBErrlogsResponse;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const ModifyDBInstanceNameRequest = models.ModifyDBInstanceNameRequest;
const SpecItemInfo = models.SpecItemInfo;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const RestartDBInstanceRequest = models.RestartDBInstanceRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const ErrLogDetail = models.ErrLogDetail;
const ServerlessDBInstance = models.ServerlessDBInstance;
const DescribeServerlessDBInstancesResponse = models.DescribeServerlessDBInstancesResponse;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const RenewInstanceResponse = models.RenewInstanceResponse;
const DescribeZonesRequest = models.DescribeZonesRequest;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const OpenServerlessDBExtranetAccessRequest = models.OpenServerlessDBExtranetAccessRequest;
const RegionInfo = models.RegionInfo;
const DeleteServerlessDBInstanceResponse = models.DeleteServerlessDBInstanceResponse;
const SlowlogDetail = models.SlowlogDetail;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const RestartDBInstanceResponse = models.RestartDBInstanceResponse;
const SetAutoRenewFlagResponse = models.SetAutoRenewFlagResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const SpecInfo = models.SpecInfo;
const DBInstance = models.DBInstance;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const InquiryPriceUpgradeDBInstanceResponse = models.InquiryPriceUpgradeDBInstanceResponse;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const ServerlessDBAccount = models.ServerlessDBAccount;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const Filter = models.Filter;
const RenewInstanceRequest = models.RenewInstanceRequest;
const PgDeal = models.PgDeal;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const InquiryPriceRenewDBInstanceResponse = models.InquiryPriceRenewDBInstanceResponse;
const DescribeDBErrlogsRequest = models.DescribeDBErrlogsRequest;
const ZoneInfo = models.ZoneInfo;
const DBBackup = models.DBBackup;
const DBInstanceNetInfo = models.DBInstanceNetInfo;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const ServerlessDBInstanceNetInfo = models.ServerlessDBInstanceNetInfo;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const ModifyDBInstanceNameResponse = models.ModifyDBInstanceNameResponse;
const OpenServerlessDBExtranetAccessResponse = models.OpenServerlessDBExtranetAccessResponse;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const DestroyDBInstanceResponse = models.DestroyDBInstanceResponse;
const DescribeDBInstanceAttributeResponse = models.DescribeDBInstanceAttributeResponse;
const DescribeDBSlowlogsRequest = models.DescribeDBSlowlogsRequest;
const DescribeServerlessDBInstancesRequest = models.DescribeServerlessDBInstancesRequest;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const NormalQueryItem = models.NormalQueryItem;
const CreateServerlessDBInstanceResponse = models.CreateServerlessDBInstanceResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DescribeDBXlogsResponse = models.DescribeDBXlogsResponse;
const DescribeDBInstanceAttributeRequest = models.DescribeDBInstanceAttributeRequest;
const CloseServerlessDBExtranetAccessRequest = models.CloseServerlessDBExtranetAccessRequest;
const ModifyAccountRemarkResponse = models.ModifyAccountRemarkResponse;
const DescribeDBSlowlogsResponse = models.DescribeDBSlowlogsResponse;
const ModifyAccountRemarkRequest = models.ModifyAccountRemarkRequest;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const Xlog = models.Xlog;


/**
 * postgres client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("postgres.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeOrders）用于获取订单信息。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req: any, cb: any): void {
        const resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * 本接口 (DestroyDBInstance) 用于销毁指定DBInstanceId对应的实例。
     * @param {DestroyDBInstanceRequest} req
     * @param {function(string, DestroyDBInstanceResponse):void} cb
     * @public
     */
    DestroyDBInstance(req: any, cb: any): void {
        const resp = new DestroyDBInstanceResponse();
        this.request("DestroyDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。
     * @param {DescribeDBBackupsRequest} req
     * @param {function(string, DescribeDBBackupsResponse):void} cb
     * @public
     */
    DescribeDBBackups(req: any, cb: any): void {
        const resp = new DescribeDBBackupsResponse();
        this.request("DescribeDBBackups", req, resp, cb);
    }

    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req: any, cb: any): void {
        const resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBErrlogs）用于获取错误日志。
     * @param {DescribeDBErrlogsRequest} req
     * @param {function(string, DescribeDBErrlogsResponse):void} cb
     * @public
     */
    DescribeDBErrlogs(req: any, cb: any): void {
        const resp = new DescribeDBErrlogsResponse();
        this.request("DescribeDBErrlogs", req, resp, cb);
    }

    /**
     * 本接口（RestartDBInstance）用于重启实例。
     * @param {RestartDBInstanceRequest} req
     * @param {function(string, RestartDBInstanceResponse):void} cb
     * @public
     */
    RestartDBInstance(req: any, cb: any): void {
        const resp = new RestartDBInstanceResponse();
        this.request("RestartDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req: any, cb: any): void {
        const resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口（OpenDBExtranetAccess）用于开通外网。
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req: any, cb: any): void {
        const resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }

    /**
     * 关闭serverlessDB实例外网
     * @param {CloseServerlessDBExtranetAccessRequest} req
     * @param {function(string, CloseServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseServerlessDBExtranetAccess(req: any, cb: any): void {
        const resp = new CloseServerlessDBExtranetAccessResponse();
        this.request("CloseServerlessDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req: any, cb: any): void {
        const resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }

    /**
     * 本接口（ModifyAccountRemark）用于修改帐号备注。
     * @param {ModifyAccountRemarkRequest} req
     * @param {function(string, ModifyAccountRemarkResponse):void} cb
     * @public
     */
    ModifyAccountRemark(req: any, cb: any): void {
        const resp = new ModifyAccountRemarkResponse();
        this.request("ModifyAccountRemark", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
     * @param {DescribeDBXlogsRequest} req
     * @param {function(string, DescribeDBXlogsResponse):void} cb
     * @public
     */
    DescribeDBXlogs(req: any, cb: any): void {
        const resp = new DescribeDBXlogsResponse();
        this.request("DescribeDBXlogs", req, resp, cb);
    }

    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     * @param {SetAutoRenewFlagRequest} req
     * @param {function(string, SetAutoRenewFlagResponse):void} cb
     * @public
     */
    SetAutoRenewFlag(req: any, cb: any): void {
        const resp = new SetAutoRenewFlagResponse();
        this.request("SetAutoRenewFlag", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     * @param {DescribeDBInstanceAttributeRequest} req
     * @param {function(string, DescribeDBInstanceAttributeResponse):void} cb
     * @public
     */
    DescribeDBInstanceAttribute(req: any, cb: any): void {
        const resp = new DescribeDBInstanceAttributeResponse();
        this.request("DescribeDBInstanceAttribute", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     * @param {ModifyDBInstanceNameRequest} req
     * @param {function(string, ModifyDBInstanceNameResponse):void} cb
     * @public
     */
    ModifyDBInstanceName(req: any, cb: any): void {
        const resp = new ModifyDBInstanceNameResponse();
        this.request("ModifyDBInstanceName", req, resp, cb);
    }

    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例。
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req: any, cb: any): void {
        const resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     * @param {CreateServerlessDBInstanceRequest} req
     * @param {function(string, CreateServerlessDBInstanceResponse):void} cb
     * @public
     */
    CreateServerlessDBInstance(req: any, cb: any): void {
        const resp = new CreateServerlessDBInstanceResponse();
        this.request("CreateServerlessDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req: any, cb: any): void {
        const resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req: any, cb: any): void {
        const resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     * @param {DeleteServerlessDBInstanceRequest} req
     * @param {function(string, DeleteServerlessDBInstanceResponse):void} cb
     * @public
     */
    DeleteServerlessDBInstance(req: any, cb: any): void {
        const resp = new DeleteServerlessDBInstanceResponse();
        this.request("DeleteServerlessDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req: any, cb: any): void {
        const resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     * @param {InquiryPriceUpgradeDBInstanceRequest} req
     * @param {function(string, InquiryPriceUpgradeDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpgradeDBInstance(req: any, cb: any): void {
        const resp = new InquiryPriceUpgradeDBInstanceResponse();
        this.request("InquiryPriceUpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req: any, cb: any): void {
        const resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     * @param {InquiryPriceRenewDBInstanceRequest} req
     * @param {function(string, InquiryPriceRenewDBInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewDBInstance(req: any, cb: any): void {
        const resp = new InquiryPriceRenewDBInstanceResponse();
        this.request("InquiryPriceRenewDBInstance", req, resp, cb);
    }

    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req: any, cb: any): void {
        const resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccounts）用于获取实例用户列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req: any, cb: any): void {
        const resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 开通serverlessDB实例外网
     * @param {OpenServerlessDBExtranetAccessRequest} req
     * @param {function(string, OpenServerlessDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenServerlessDBExtranetAccess(req: any, cb: any): void {
        const resp = new OpenServerlessDBExtranetAccessResponse();
        this.request("OpenServerlessDBExtranetAccess", req, resp, cb);
    }

    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     * @param {DescribeServerlessDBInstancesRequest} req
     * @param {function(string, DescribeServerlessDBInstancesResponse):void} cb
     * @public
     */
    DescribeServerlessDBInstances(req: any, cb: any): void {
        const resp = new DescribeServerlessDBInstancesResponse();
        this.request("DescribeServerlessDBInstances", req, resp, cb);
    }

    /**
     * 本接口（RenewInstance）用于续费实例。
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req: any, cb: any): void {
        const resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * 接口（DescribeDatabases）用来拉取数据库列表
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req: any, cb: any): void {
        const resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 本接口（UpgradeDBInstance）用于升级实例。
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req: any, cb: any): void {
        const resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req: any, cb: any): void {
        const resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。
     * @param {DescribeDBSlowlogsRequest} req
     * @param {function(string, DescribeDBSlowlogsResponse):void} cb
     * @public
     */
    DescribeDBSlowlogs(req: any, cb: any): void {
        const resp = new DescribeDBSlowlogsResponse();
        this.request("DescribeDBSlowlogs", req, resp, cb);
    }


}
