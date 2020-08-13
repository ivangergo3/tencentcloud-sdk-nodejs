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
const CreateHostingDomainResponse = models_1.Models.CreateHostingDomainResponse;
const CreateStaticStoreResponse = models_1.Models.CreateStaticStoreResponse;
const DescribeEnvLimitRequest = models_1.Models.DescribeEnvLimitRequest;
const DescribeQuotaDataResponse = models_1.Models.DescribeQuotaDataResponse;
const CheckTcbServiceResponse = models_1.Models.CheckTcbServiceResponse;
const DescribeEndUserLoginStatisticRequest = models_1.Models.DescribeEndUserLoginStatisticRequest;
const StorageInfo = models_1.Models.StorageInfo;
const LoginStatistic = models_1.Models.LoginStatistic;
const PostpayEnvQuota = models_1.Models.PostpayEnvQuota;
const FunctionInfo = models_1.Models.FunctionInfo;
const CreatePostpayPackageResponse = models_1.Models.CreatePostpayPackageResponse;
const CommonServiceAPIRequest = models_1.Models.CommonServiceAPIRequest;
const DescribeEndUsersResponse = models_1.Models.DescribeEndUsersResponse;
const AuthDomain = models_1.Models.AuthDomain;
const LogServiceInfo = models_1.Models.LogServiceInfo;
const CreateStaticStoreRequest = models_1.Models.CreateStaticStoreRequest;
const CommonServiceAPIResponse = models_1.Models.CommonServiceAPIResponse;
const DescribeEndUserStatisticResponse = models_1.Models.DescribeEndUserStatisticResponse;
const DescribePostpayPackageFreeQuotasRequest = models_1.Models.DescribePostpayPackageFreeQuotasRequest;
const CreateAuthDomainResponse = models_1.Models.CreateAuthDomainResponse;
const ModifyEnvRequest = models_1.Models.ModifyEnvRequest;
const DescribeEndUsersRequest = models_1.Models.DescribeEndUsersRequest;
const DescribeEnvsRequest = models_1.Models.DescribeEnvsRequest;
const DescribeQuotaDataRequest = models_1.Models.DescribeQuotaDataRequest;
const ReinstateEnvResponse = models_1.Models.ReinstateEnvResponse;
const DescribeEndUserStatisticRequest = models_1.Models.DescribeEndUserStatisticRequest;
const PackageFreeQuotaInfo = models_1.Models.PackageFreeQuotaInfo;
const DescribeEnvFreeQuotaResponse = models_1.Models.DescribeEnvFreeQuotaResponse;
const CheckTcbServiceRequest = models_1.Models.CheckTcbServiceRequest;
const ModifyDatabaseACLResponse = models_1.Models.ModifyDatabaseACLResponse;
const StaticStorageInfo = models_1.Models.StaticStorageInfo;
const DescribeExtraPkgBillingInfoResponse = models_1.Models.DescribeExtraPkgBillingInfoResponse;
const DescribeExtraPkgBillingInfoRequest = models_1.Models.DescribeExtraPkgBillingInfoRequest;
const CreatePostpayPackageRequest = models_1.Models.CreatePostpayPackageRequest;
const DescribeEnvFreeQuotaRequest = models_1.Models.DescribeEnvFreeQuotaRequest;
const DatabasesInfo = models_1.Models.DatabasesInfo;
const DescribeAuthDomainsRequest = models_1.Models.DescribeAuthDomainsRequest;
const DeleteEndUserRequest = models_1.Models.DeleteEndUserRequest;
const DescribeAuthDomainsResponse = models_1.Models.DescribeAuthDomainsResponse;
const ReinstateEnvRequest = models_1.Models.ReinstateEnvRequest;
const DescribeDatabaseACLRequest = models_1.Models.DescribeDatabaseACLRequest;
const CreateHostingDomainRequest = models_1.Models.CreateHostingDomainRequest;
const DestroyStaticStoreResponse = models_1.Models.DestroyStaticStoreResponse;
const DeleteEndUserResponse = models_1.Models.DeleteEndUserResponse;
const EnvBillingInfoItem = models_1.Models.EnvBillingInfoItem;
const PlatformStatistic = models_1.Models.PlatformStatistic;
const ModifyEndUserRequest = models_1.Models.ModifyEndUserRequest;
const DescribeDatabaseACLResponse = models_1.Models.DescribeDatabaseACLResponse;
const EnvInfo = models_1.Models.EnvInfo;
const DestroyEnvRequest = models_1.Models.DestroyEnvRequest;
const DestroyEnvResponse = models_1.Models.DestroyEnvResponse;
const ModifyDatabaseACLRequest = models_1.Models.ModifyDatabaseACLRequest;
const DestroyStaticStoreRequest = models_1.Models.DestroyStaticStoreRequest;
const ModifyEndUserResponse = models_1.Models.ModifyEndUserResponse;
const EndUserInfo = models_1.Models.EndUserInfo;
const DescribeEnvLimitResponse = models_1.Models.DescribeEnvLimitResponse;
const DescribePostpayPackageFreeQuotasResponse = models_1.Models.DescribePostpayPackageFreeQuotasResponse;
const DescribeEndUserLoginStatisticResponse = models_1.Models.DescribeEndUserLoginStatisticResponse;
const DescribeEnvsResponse = models_1.Models.DescribeEnvsResponse;
const ModifyEnvResponse = models_1.Models.ModifyEnvResponse;
const OrderInfo = models_1.Models.OrderInfo;
const CreateAuthDomainRequest = models_1.Models.CreateAuthDomainRequest;
/**
 * tcb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tcb.tencentcloudapi.com", "2018-06-08", credential, region, profile);
    }
    /**
     * 创建托管域名
     * @param {CreateHostingDomainRequest} req
     * @param {function(string, CreateHostingDomainResponse):void} cb
     * @public
     */
    CreateHostingDomain(req, cb) {
        const resp = new CreateHostingDomainResponse();
        this.request("CreateHostingDomain", req, resp, cb);
    }
    /**
     * 获取终端用户列表
     * @param {DescribeEndUsersRequest} req
     * @param {function(string, DescribeEndUsersResponse):void} cb
     * @public
     */
    DescribeEndUsers(req, cb) {
        const resp = new DescribeEndUsersResponse();
        this.request("DescribeEndUsers", req, resp, cb);
    }
    /**
     * 增加安全域名
     * @param {CreateAuthDomainRequest} req
     * @param {function(string, CreateAuthDomainResponse):void} cb
     * @public
     */
    CreateAuthDomain(req, cb) {
        const resp = new CreateAuthDomainResponse();
        this.request("CreateAuthDomain", req, resp, cb);
    }
    /**
     * 获取安全域名列表
     * @param {DescribeAuthDomainsRequest} req
     * @param {function(string, DescribeAuthDomainsResponse):void} cb
     * @public
     */
    DescribeAuthDomains(req, cb) {
        const resp = new DescribeAuthDomainsResponse();
        this.request("DescribeAuthDomains", req, resp, cb);
    }
    /**
     * 开通后付费资源
     * @param {CreatePostpayPackageRequest} req
     * @param {function(string, CreatePostpayPackageResponse):void} cb
     * @public
     */
    CreatePostpayPackage(req, cb) {
        const resp = new CreatePostpayPackageResponse();
        this.request("CreatePostpayPackage", req, resp, cb);
    }
    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     * @param {ReinstateEnvRequest} req
     * @param {function(string, ReinstateEnvResponse):void} cb
     * @public
     */
    ReinstateEnv(req, cb) {
        const resp = new ReinstateEnvResponse();
        this.request("ReinstateEnv", req, resp, cb);
    }
    /**
     * 获取终端用户总量与平台分布情况
     * @param {DescribeEndUserStatisticRequest} req
     * @param {function(string, DescribeEndUserStatisticResponse):void} cb
     * @public
     */
    DescribeEndUserStatistic(req, cb) {
        const resp = new DescribeEndUserStatisticResponse();
        this.request("DescribeEndUserStatistic", req, resp, cb);
    }
    /**
     * 管理终端用户
     * @param {ModifyEndUserRequest} req
     * @param {function(string, ModifyEndUserResponse):void} cb
     * @public
     */
    ModifyEndUser(req, cb) {
        const resp = new ModifyEndUserResponse();
        this.request("ModifyEndUser", req, resp, cb);
    }
    /**
     * 获取后付费免费额度
     * @param {DescribePostpayPackageFreeQuotasRequest} req
     * @param {function(string, DescribePostpayPackageFreeQuotasResponse):void} cb
     * @public
     */
    DescribePostpayPackageFreeQuotas(req, cb) {
        const resp = new DescribePostpayPackageFreeQuotasResponse();
        this.request("DescribePostpayPackageFreeQuotas", req, resp, cb);
    }
    /**
     * TCB云API统一入口
     * @param {CommonServiceAPIRequest} req
     * @param {function(string, CommonServiceAPIResponse):void} cb
     * @public
     */
    CommonServiceAPI(req, cb) {
        const resp = new CommonServiceAPIResponse();
        this.request("CommonServiceAPI", req, resp, cb);
    }
    /**
     * 检查是否开通Tcb服务
     * @param {CheckTcbServiceRequest} req
     * @param {function(string, CheckTcbServiceResponse):void} cb
     * @public
     */
    CheckTcbService(req, cb) {
        const resp = new CheckTcbServiceResponse();
        this.request("CheckTcbService", req, resp, cb);
    }
    /**
     * 删除终端用户
     * @param {DeleteEndUserRequest} req
     * @param {function(string, DeleteEndUserResponse):void} cb
     * @public
     */
    DeleteEndUser(req, cb) {
        const resp = new DeleteEndUserResponse();
        this.request("DeleteEndUser", req, resp, cb);
    }
    /**
     * 获取环境终端用户新增与登录信息
     * @param {DescribeEndUserLoginStatisticRequest} req
     * @param {function(string, DescribeEndUserLoginStatisticResponse):void} cb
     * @public
     */
    DescribeEndUserLoginStatistic(req, cb) {
        const resp = new DescribeEndUserLoginStatisticResponse();
        this.request("DescribeEndUserLoginStatistic", req, resp, cb);
    }
    /**
     * 查询指定指标的配额使用量
     * @param {DescribeQuotaDataRequest} req
     * @param {function(string, DescribeQuotaDataResponse):void} cb
     * @public
     */
    DescribeQuotaData(req, cb) {
        const resp = new DescribeQuotaDataResponse();
        this.request("DescribeQuotaData", req, resp, cb);
    }
    /**
     * 获取增值包计费相关信息
     * @param {DescribeExtraPkgBillingInfoRequest} req
     * @param {function(string, DescribeExtraPkgBillingInfoResponse):void} cb
     * @public
     */
    DescribeExtraPkgBillingInfo(req, cb) {
        const resp = new DescribeExtraPkgBillingInfoResponse();
        this.request("DescribeExtraPkgBillingInfo", req, resp, cb);
    }
    /**
     * 更新环境信息
     * @param {ModifyEnvRequest} req
     * @param {function(string, ModifyEnvResponse):void} cb
     * @public
     */
    ModifyEnv(req, cb) {
        const resp = new ModifyEnvResponse();
        this.request("ModifyEnv", req, resp, cb);
    }
    /**
     * 获取数据库权限
     * @param {DescribeDatabaseACLRequest} req
     * @param {function(string, DescribeDatabaseACLResponse):void} cb
     * @public
     */
    DescribeDatabaseACL(req, cb) {
        const resp = new DescribeDatabaseACLResponse();
        this.request("DescribeDatabaseACL", req, resp, cb);
    }
    /**
     * 销毁环境
     * @param {DestroyEnvRequest} req
     * @param {function(string, DestroyEnvResponse):void} cb
     * @public
     */
    DestroyEnv(req, cb) {
        const resp = new DestroyEnvResponse();
        this.request("DestroyEnv", req, resp, cb);
    }
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     * @param {DescribeEnvsRequest} req
     * @param {function(string, DescribeEnvsResponse):void} cb
     * @public
     */
    DescribeEnvs(req, cb) {
        const resp = new DescribeEnvsResponse();
        this.request("DescribeEnvs", req, resp, cb);
    }
    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     * @param {DestroyStaticStoreRequest} req
     * @param {function(string, DestroyStaticStoreResponse):void} cb
     * @public
     */
    DestroyStaticStore(req, cb) {
        const resp = new DestroyStaticStoreResponse();
        this.request("DestroyStaticStore", req, resp, cb);
    }
    /**
     * 修改数据库权限
     * @param {ModifyDatabaseACLRequest} req
     * @param {function(string, ModifyDatabaseACLResponse):void} cb
     * @public
     */
    ModifyDatabaseACL(req, cb) {
        const resp = new ModifyDatabaseACLResponse();
        this.request("ModifyDatabaseACL", req, resp, cb);
    }
    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     * @param {CreateStaticStoreRequest} req
     * @param {function(string, CreateStaticStoreResponse):void} cb
     * @public
     */
    CreateStaticStore(req, cb) {
        const resp = new CreateStaticStoreResponse();
        this.request("CreateStaticStore", req, resp, cb);
    }
    /**
     * 查询环境个数上限
     * @param {DescribeEnvLimitRequest} req
     * @param {function(string, DescribeEnvLimitResponse):void} cb
     * @public
     */
    DescribeEnvLimit(req, cb) {
        const resp = new DescribeEnvLimitResponse();
        this.request("DescribeEnvLimit", req, resp, cb);
    }
    /**
     * 查询后付费免费配额信息
     * @param {DescribeEnvFreeQuotaRequest} req
     * @param {function(string, DescribeEnvFreeQuotaResponse):void} cb
     * @public
     */
    DescribeEnvFreeQuota(req, cb) {
        const resp = new DescribeEnvFreeQuotaResponse();
        this.request("DescribeEnvFreeQuota", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tcb_client.js.map