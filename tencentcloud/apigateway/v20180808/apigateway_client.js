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
const UnBindSubDomainResponse = models_1.Models.UnBindSubDomainResponse;
const UpdateApiKeyRequest = models_1.Models.UpdateApiKeyRequest;
const Service = models_1.Models.Service;
const ServiceReleaseVersion = models_1.Models.ServiceReleaseVersion;
const ApiUsagePlanSet = models_1.Models.ApiUsagePlanSet;
const DescribeUsagePlanRequest = models_1.Models.DescribeUsagePlanRequest;
const DeleteUsagePlanResponse = models_1.Models.DeleteUsagePlanResponse;
const DisableApiKeyResponse = models_1.Models.DisableApiKeyResponse;
const UnReleaseServiceRequest = models_1.Models.UnReleaseServiceRequest;
const ModifySubDomainRequest = models_1.Models.ModifySubDomainRequest;
const DescribeServiceEnvironmentListResponse = models_1.Models.DescribeServiceEnvironmentListResponse;
const ModifyApiResponse = models_1.Models.ModifyApiResponse;
const ServiceEnvironmentStrategy = models_1.Models.ServiceEnvironmentStrategy;
const DemoteServiceUsagePlanRequest = models_1.Models.DemoteServiceUsagePlanRequest;
const TargetServicesReq = models_1.Models.TargetServicesReq;
const TsfLoadBalanceConfResp = models_1.Models.TsfLoadBalanceConfResp;
const CreateIPStrategyRequest = models_1.Models.CreateIPStrategyRequest;
const IPStrategy = models_1.Models.IPStrategy;
const DescribeUsagePlansStatusResponse = models_1.Models.DescribeUsagePlansStatusResponse;
const HealthCheckConf = models_1.Models.HealthCheckConf;
const DescribeApiUsagePlanResponse = models_1.Models.DescribeApiUsagePlanResponse;
const DeleteIPStrategyRequest = models_1.Models.DeleteIPStrategyRequest;
const DomainSets = models_1.Models.DomainSets;
const DeleteUsagePlanRequest = models_1.Models.DeleteUsagePlanRequest;
const DeleteServiceRequest = models_1.Models.DeleteServiceRequest;
const DescribeApiEnvironmentStrategyRequest = models_1.Models.DescribeApiEnvironmentStrategyRequest;
const UpdateServiceResponse = models_1.Models.UpdateServiceResponse;
const ServiceConfig = models_1.Models.ServiceConfig;
const ServiceEnvironmentSet = models_1.Models.ServiceEnvironmentSet;
const DescribeServiceResponse = models_1.Models.DescribeServiceResponse;
const UsagePlanEnvironmentStatus = models_1.Models.UsagePlanEnvironmentStatus;
const ModifyIPStrategyResponse = models_1.Models.ModifyIPStrategyResponse;
const BindSubDomainResponse = models_1.Models.BindSubDomainResponse;
const BindEnvironmentResponse = models_1.Models.BindEnvironmentResponse;
const Tag = models_1.Models.Tag;
const DescribeServiceEnvironmentStrategyResponse = models_1.Models.DescribeServiceEnvironmentStrategyResponse;
const ConstantParameter = models_1.Models.ConstantParameter;
const UsagePlansStatus = models_1.Models.UsagePlansStatus;
const ModifySubDomainResponse = models_1.Models.ModifySubDomainResponse;
const LogQuery = models_1.Models.LogQuery;
const ServiceParameter = models_1.Models.ServiceParameter;
const ModifyServiceResponse = models_1.Models.ModifyServiceResponse;
const DisableApiKeyRequest = models_1.Models.DisableApiKeyRequest;
const PathMapping = models_1.Models.PathMapping;
const UnBindIPStrategyResponse = models_1.Models.UnBindIPStrategyResponse;
const BindIPStrategyResponse = models_1.Models.BindIPStrategyResponse;
const DescribeApisStatusRequest = models_1.Models.DescribeApisStatusRequest;
const DeleteServiceSubDomainMappingRequest = models_1.Models.DeleteServiceSubDomainMappingRequest;
const DescribeIPStrategyResponse = models_1.Models.DescribeIPStrategyResponse;
const DeleteApiResponse = models_1.Models.DeleteApiResponse;
const CreateApiResponse = models_1.Models.CreateApiResponse;
const DescribeIPStrategyApisStatusRequest = models_1.Models.DescribeIPStrategyApisStatusRequest;
const UnBindEnvironmentRequest = models_1.Models.UnBindEnvironmentRequest;
const OauthConfig = models_1.Models.OauthConfig;
const ModifyApiEnvironmentStrategyRequest = models_1.Models.ModifyApiEnvironmentStrategyRequest;
const ModifyUsagePlanResponse = models_1.Models.ModifyUsagePlanResponse;
const CreateUsagePlanResponse = models_1.Models.CreateUsagePlanResponse;
const ReqParameter = models_1.Models.ReqParameter;
const DescribeServicesStatusRequest = models_1.Models.DescribeServicesStatusRequest;
const RequestConfig = models_1.Models.RequestConfig;
const DeleteApiKeyResponse = models_1.Models.DeleteApiKeyResponse;
const UsagePlan = models_1.Models.UsagePlan;
const DescribeServiceReleaseVersionRequest = models_1.Models.DescribeServiceReleaseVersionRequest;
const DescribeUsagePlanSecretIdsRequest = models_1.Models.DescribeUsagePlanSecretIdsRequest;
const DescribeLogSearchResponse = models_1.Models.DescribeLogSearchResponse;
const ResponseErrorCodeReq = models_1.Models.ResponseErrorCodeReq;
const CreateServiceRequest = models_1.Models.CreateServiceRequest;
const DescribeIPStrategysStatusRequest = models_1.Models.DescribeIPStrategysStatusRequest;
const DemoteServiceUsagePlanResponse = models_1.Models.DemoteServiceUsagePlanResponse;
const EnableApiKeyResponse = models_1.Models.EnableApiKeyResponse;
const ServiceReleaseHistory = models_1.Models.ServiceReleaseHistory;
const UnReleaseServiceResponse = models_1.Models.UnReleaseServiceResponse;
const DescribeServiceRequest = models_1.Models.DescribeServiceRequest;
const CreateUsagePlanRequest = models_1.Models.CreateUsagePlanRequest;
const DescribeUsagePlanSecretIdsResponse = models_1.Models.DescribeUsagePlanSecretIdsResponse;
const UpdateServiceRequest = models_1.Models.UpdateServiceRequest;
const ReleaseService = models_1.Models.ReleaseService;
const DescribeServiceSubDomainMappingsResponse = models_1.Models.DescribeServiceSubDomainMappingsResponse;
const BindSecretIdsRequest = models_1.Models.BindSecretIdsRequest;
const UnBindEnvironmentResponse = models_1.Models.UnBindEnvironmentResponse;
const UsagePlanBindSecret = models_1.Models.UsagePlanBindSecret;
const DeleteApiKeyRequest = models_1.Models.DeleteApiKeyRequest;
const ModifyApiEnvironmentStrategyResponse = models_1.Models.ModifyApiEnvironmentStrategyResponse;
const DomainSetList = models_1.Models.DomainSetList;
const IPStrategysStatus = models_1.Models.IPStrategysStatus;
const DescribeApiKeyResponse = models_1.Models.DescribeApiKeyResponse;
const ModifyApiIncrementResponse = models_1.Models.ModifyApiIncrementResponse;
const ModifyApiRequest = models_1.Models.ModifyApiRequest;
const ModifyUsagePlanRequest = models_1.Models.ModifyUsagePlanRequest;
const ApiRequestConfig = models_1.Models.ApiRequestConfig;
const ModifyServiceRequest = models_1.Models.ModifyServiceRequest;
const ApiIdStatus = models_1.Models.ApiIdStatus;
const CreateApiRequest = models_1.Models.CreateApiRequest;
const DescribeServiceEnvironmentStrategyRequest = models_1.Models.DescribeServiceEnvironmentStrategyRequest;
const ReleaseServiceRequest = models_1.Models.ReleaseServiceRequest;
const DeleteServiceResponse = models_1.Models.DeleteServiceResponse;
const DescribeServiceEnvironmentReleaseHistoryResponse = models_1.Models.DescribeServiceEnvironmentReleaseHistoryResponse;
const Environment = models_1.Models.Environment;
const ServiceReleaseHistoryInfo = models_1.Models.ServiceReleaseHistoryInfo;
const ReleaseServiceResponse = models_1.Models.ReleaseServiceResponse;
const UnBindIPStrategyRequest = models_1.Models.UnBindIPStrategyRequest;
const ModifyApiIncrementRequest = models_1.Models.ModifyApiIncrementRequest;
const GenerateApiDocumentRequest = models_1.Models.GenerateApiDocumentRequest;
const ServiceUsagePlanSet = models_1.Models.ServiceUsagePlanSet;
const DescribeIPStrategyApisStatusResponse = models_1.Models.DescribeIPStrategyApisStatusResponse;
const ModifyServiceEnvironmentStrategyResponse = models_1.Models.ModifyServiceEnvironmentStrategyResponse;
const UpdateApiKeyResponse = models_1.Models.UpdateApiKeyResponse;
const DescribeApisStatusResponse = models_1.Models.DescribeApisStatusResponse;
const DescribeApiKeysStatusRequest = models_1.Models.DescribeApiKeysStatusRequest;
const DescribeApiResponse = models_1.Models.DescribeApiResponse;
const BindSecretIdsResponse = models_1.Models.BindSecretIdsResponse;
const CreateApiRsp = models_1.Models.CreateApiRsp;
const UsagePlanBindEnvironment = models_1.Models.UsagePlanBindEnvironment;
const DeleteApiRequest = models_1.Models.DeleteApiRequest;
const DescribeServiceSubDomainMappingsRequest = models_1.Models.DescribeServiceSubDomainMappingsRequest;
const DescribeServiceEnvironmentListRequest = models_1.Models.DescribeServiceEnvironmentListRequest;
const ServiceSubDomainMappings = models_1.Models.ServiceSubDomainMappings;
const DescribeApiKeyRequest = models_1.Models.DescribeApiKeyRequest;
const DescribeUsagePlanResponse = models_1.Models.DescribeUsagePlanResponse;
const Filter = models_1.Models.Filter;
const UsagePlanBindSecretStatus = models_1.Models.UsagePlanBindSecretStatus;
const DeleteServiceSubDomainMappingResponse = models_1.Models.DeleteServiceSubDomainMappingResponse;
const DescribeServiceUsagePlanRequest = models_1.Models.DescribeServiceUsagePlanRequest;
const DescribeUsagePlansStatusRequest = models_1.Models.DescribeUsagePlansStatusRequest;
const UsagePlanEnvironment = models_1.Models.UsagePlanEnvironment;
const ModifyIPStrategyRequest = models_1.Models.ModifyIPStrategyRequest;
const UnBindSecretIdsRequest = models_1.Models.UnBindSecretIdsRequest;
const ApiEnvironmentStrategy = models_1.Models.ApiEnvironmentStrategy;
const UnBindSecretIdsResponse = models_1.Models.UnBindSecretIdsResponse;
const ApiUsagePlan = models_1.Models.ApiUsagePlan;
const IPStrategyApi = models_1.Models.IPStrategyApi;
const DocumentSDK = models_1.Models.DocumentSDK;
const ModifyServiceEnvironmentStrategyRequest = models_1.Models.ModifyServiceEnvironmentStrategyRequest;
const DescribeServiceSubDomainsRequest = models_1.Models.DescribeServiceSubDomainsRequest;
const GenerateApiDocumentResponse = models_1.Models.GenerateApiDocumentResponse;
const DescribeUsagePlanEnvironmentsResponse = models_1.Models.DescribeUsagePlanEnvironmentsResponse;
const DescribeServiceSubDomainsResponse = models_1.Models.DescribeServiceSubDomainsResponse;
const BindSubDomainRequest = models_1.Models.BindSubDomainRequest;
const IPStrategyApiStatus = models_1.Models.IPStrategyApiStatus;
const CreateIPStrategyResponse = models_1.Models.CreateIPStrategyResponse;
const BindIPStrategyRequest = models_1.Models.BindIPStrategyRequest;
const MicroServiceReq = models_1.Models.MicroServiceReq;
const ErrorCodes = models_1.Models.ErrorCodes;
const ServiceEnvironmentStrategyStatus = models_1.Models.ServiceEnvironmentStrategyStatus;
const DescribeApiEnvironmentStrategyResponse = models_1.Models.DescribeApiEnvironmentStrategyResponse;
const MicroService = models_1.Models.MicroService;
const ApiEnvironmentStrategyStataus = models_1.Models.ApiEnvironmentStrategyStataus;
const DeleteIPStrategyResponse = models_1.Models.DeleteIPStrategyResponse;
const ApiKey = models_1.Models.ApiKey;
const BindEnvironmentRequest = models_1.Models.BindEnvironmentRequest;
const DescribeIPStrategyRequest = models_1.Models.DescribeIPStrategyRequest;
const DescribeUsagePlanEnvironmentsRequest = models_1.Models.DescribeUsagePlanEnvironmentsRequest;
const CreateApiKeyResponse = models_1.Models.CreateApiKeyResponse;
const DescribeServiceReleaseVersionResponse = models_1.Models.DescribeServiceReleaseVersionResponse;
const RequestParameter = models_1.Models.RequestParameter;
const UsagePlanInfo = models_1.Models.UsagePlanInfo;
const DescribeServiceEnvironmentReleaseHistoryRequest = models_1.Models.DescribeServiceEnvironmentReleaseHistoryRequest;
const UsagePlanStatusInfo = models_1.Models.UsagePlanStatusInfo;
const CreateServiceResponse = models_1.Models.CreateServiceResponse;
const DesApisStatus = models_1.Models.DesApisStatus;
const DescribeApiKeysStatusResponse = models_1.Models.DescribeApiKeysStatusResponse;
const ServicesStatus = models_1.Models.ServicesStatus;
const DescribeLogSearchRequest = models_1.Models.DescribeLogSearchRequest;
const ApisStatus = models_1.Models.ApisStatus;
const ApiKeysStatus = models_1.Models.ApiKeysStatus;
const DescribeServiceUsagePlanResponse = models_1.Models.DescribeServiceUsagePlanResponse;
const DescribeApiUsagePlanRequest = models_1.Models.DescribeApiUsagePlanRequest;
const UnBindSubDomainRequest = models_1.Models.UnBindSubDomainRequest;
const DescribeApiRequest = models_1.Models.DescribeApiRequest;
const DescribeIPStrategysStatusResponse = models_1.Models.DescribeIPStrategysStatusResponse;
const ApiInfo = models_1.Models.ApiInfo;
const EnvironmentStrategy = models_1.Models.EnvironmentStrategy;
const EnableApiKeyRequest = models_1.Models.EnableApiKeyRequest;
const DescribeServicesStatusResponse = models_1.Models.DescribeServicesStatusResponse;
const CreateApiKeyRequest = models_1.Models.CreateApiKeyRequest;
/**
 * apigateway client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("apigateway.tencentcloudapi.com", "2018-08-08", credential, region, profile);
    }
    /**
     * 本接口（CreateService）用于创建服务。
API 网关使用的最大单元为服务，每个服务中可创建多个 API 接口。每个服务有一个默认域名供客户调用，用户也可绑定自定义域名到此服务中。
     * @param {CreateServiceRequest} req
     * @param {function(string, CreateServiceResponse):void} cb
     * @public
     */
    CreateService(req, cb) {
        const resp = new CreateServiceResponse();
        this.request("CreateService", req, resp, cb);
    }
    /**
     * 本接口（DescribeUsagePlanStatus）用于查询使用计划的列表。
     * @param {DescribeUsagePlansStatusRequest} req
     * @param {function(string, DescribeUsagePlansStatusResponse):void} cb
     * @public
     */
    DescribeUsagePlansStatus(req, cb) {
        const resp = new DescribeUsagePlansStatusResponse();
        this.request("DescribeUsagePlansStatus", req, resp, cb);
    }
    /**
     * 本接口（DeleteUsagePlan）用于删除使用计划。
     * @param {DeleteUsagePlanRequest} req
     * @param {function(string, DeleteUsagePlanResponse):void} cb
     * @public
     */
    DeleteUsagePlan(req, cb) {
        const resp = new DeleteUsagePlanResponse();
        this.request("DeleteUsagePlan", req, resp, cb);
    }
    /**
     * 本接口（ModifyApi）用于修改 API 接口，可调用此接口对已经配置的 API 接口进行编辑修改。修改后的 API 需要重新发布 API 所在的服务到对应环境方能生效。
     * @param {ModifyApiRequest} req
     * @param {function(string, ModifyApiResponse):void} cb
     * @public
     */
    ModifyApi(req, cb) {
        const resp = new ModifyApiResponse();
        this.request("ModifyApi", req, resp, cb);
    }
    /**
     * 本接口（DemoteServiceUsagePlan）用于将某个服务在某个环境的使用计划，降级到API上。
如果服务内没有API不允许进行此操作。
如果当前环境没有发布，不允许进行此操作。
     * @param {DemoteServiceUsagePlanRequest} req
     * @param {function(string, DemoteServiceUsagePlanResponse):void} cb
     * @public
     */
    DemoteServiceUsagePlan(req, cb) {
        const resp = new DemoteServiceUsagePlanResponse();
        this.request("DemoteServiceUsagePlan", req, resp, cb);
    }
    /**
     * 本接口（DescribeApiKeysStatus）用于查询密钥列表。
当用户创建了多个密钥对时，可使用本接口查询一个或多个 API 密钥信息，本接口不会显示密钥 Key。
     * @param {DescribeApiKeysStatusRequest} req
     * @param {function(string, DescribeApiKeysStatusResponse):void} cb
     * @public
     */
    DescribeApiKeysStatus(req, cb) {
        const resp = new DescribeApiKeysStatusResponse();
        this.request("DescribeApiKeysStatus", req, resp, cb);
    }
    /**
     * 本接口（ModifyApiEnvironmentStrategy）用于修改API限流策略
     * @param {ModifyApiEnvironmentStrategyRequest} req
     * @param {function(string, ModifyApiEnvironmentStrategyResponse):void} cb
     * @public
     */
    ModifyApiEnvironmentStrategy(req, cb) {
        const resp = new ModifyApiEnvironmentStrategyResponse();
        this.request("ModifyApiEnvironmentStrategy", req, resp, cb);
    }
    /**
     * 本接口（ModifyUsagePlan）用于修改使用计划的名称，描述及 QPS。
     * @param {ModifyUsagePlanRequest} req
     * @param {function(string, ModifyUsagePlanResponse):void} cb
     * @public
     */
    ModifyUsagePlan(req, cb) {
        const resp = new ModifyUsagePlanResponse();
        this.request("ModifyUsagePlan", req, resp, cb);
    }
    /**
     * 本接口DescribeLogSearch用于搜索日志
     * @param {DescribeLogSearchRequest} req
     * @param {function(string, DescribeLogSearchResponse):void} cb
     * @public
     */
    DescribeLogSearch(req, cb) {
        const resp = new DescribeLogSearchResponse();
        this.request("DescribeLogSearch", req, resp, cb);
    }
    /**
     * 本接口（DescribeUsagePlanSecretIds）用于查询使用计划绑定的密钥列表。
在 API 网关中，一个使用计划可绑定多个密钥对，可使用本接口查询使用计划绑定的密钥列表。
     * @param {DescribeUsagePlanSecretIdsRequest} req
     * @param {function(string, DescribeUsagePlanSecretIdsResponse):void} cb
     * @public
     */
    DescribeUsagePlanSecretIds(req, cb) {
        const resp = new DescribeUsagePlanSecretIdsResponse();
        this.request("DescribeUsagePlanSecretIds", req, resp, cb);
    }
    /**
     * 本接口（DescribeServiceSubDomains）用于查询自定义域名列表。
API 网关可绑定自定义域名到服务，用于服务调用。此接口用于查询用户绑定在服务的自定义域名列表。
     * @param {DescribeServiceSubDomainsRequest} req
     * @param {function(string, DescribeServiceSubDomainsResponse):void} cb
     * @public
     */
    DescribeServiceSubDomains(req, cb) {
        const resp = new DescribeServiceSubDomainsResponse();
        this.request("DescribeServiceSubDomains", req, resp, cb);
    }
    /**
     * 本接口（ModifyIPStrategy）用于修改服务IP策略。
     * @param {ModifyIPStrategyRequest} req
     * @param {function(string, ModifyIPStrategyResponse):void} cb
     * @public
     */
    ModifyIPStrategy(req, cb) {
        const resp = new ModifyIPStrategyResponse();
        this.request("ModifyIPStrategy", req, resp, cb);
    }
    /**
     * 本接口（DeleteService）用于删除 API 网关中某个服务。
     * @param {DeleteServiceRequest} req
     * @param {function(string, DeleteServiceResponse):void} cb
     * @public
     */
    DeleteService(req, cb) {
        const resp = new DeleteServiceResponse();
        this.request("DeleteService", req, resp, cb);
    }
    /**
     * 本接口（UnBindIPStrategy）用于服务解绑IP策略。
     * @param {UnBindIPStrategyRequest} req
     * @param {function(string, UnBindIPStrategyResponse):void} cb
     * @public
     */
    UnBindIPStrategy(req, cb) {
        const resp = new UnBindIPStrategyResponse();
        this.request("UnBindIPStrategy", req, resp, cb);
    }
    /**
     * 本接口（UpdateService）用于从服务发布的环境中运行版本切换到特定版本。用户在使用 API 网关创建服务并发布服务到某个环境后，多因为开发过程会产生多个版本，此时可调用本接口。
     * @param {UpdateServiceRequest} req
     * @param {function(string, UpdateServiceResponse):void} cb
     * @public
     */
    UpdateService(req, cb) {
        const resp = new UpdateServiceResponse();
        this.request("UpdateService", req, resp, cb);
    }
    /**
     * 本接口（DescribeIPStrategyApisStatus）用于查询IP策略可以绑定的API列表。即服务下所有API和该策略已绑定API的差集。
     * @param {DescribeIPStrategyApisStatusRequest} req
     * @param {function(string, DescribeIPStrategyApisStatusResponse):void} cb
     * @public
     */
    DescribeIPStrategyApisStatus(req, cb) {
        const resp = new DescribeIPStrategyApisStatusResponse();
        this.request("DescribeIPStrategyApisStatus", req, resp, cb);
    }
    /**
     * 本接口（UnReleaseService）用于下线服务。
用户发布服务到某个环境后，此服务中的 API 方可被调用者进行调用，当用户需要将此服务从发布环境中下线时，可调用此 API。下线后的服务不可被调用。
     * @param {UnReleaseServiceRequest} req
     * @param {function(string, UnReleaseServiceResponse):void} cb
     * @public
     */
    UnReleaseService(req, cb) {
        const resp = new UnReleaseServiceResponse();
        this.request("UnReleaseService", req, resp, cb);
    }
    /**
     * 提供增量更新API能力，主要是给程序调用（区别于ModifyApi，该接口是需要传入API的全量参数，对console使用较友好）
     * @param {ModifyApiIncrementRequest} req
     * @param {function(string, ModifyApiIncrementResponse):void} cb
     * @public
     */
    ModifyApiIncrement(req, cb) {
        const resp = new ModifyApiIncrementResponse();
        this.request("ModifyApiIncrement", req, resp, cb);
    }
    /**
     * 本接口（DescribeServiceEnvironmentReleaseHistory）用于查询服务环境的发布历史。
用户在创建好服务后需要发布到某个环境中才能进行使用，本接口用于查询一个服务某个环境的发布记录。
     * @param {DescribeServiceEnvironmentReleaseHistoryRequest} req
     * @param {function(string, DescribeServiceEnvironmentReleaseHistoryResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentReleaseHistory(req, cb) {
        const resp = new DescribeServiceEnvironmentReleaseHistoryResponse();
        this.request("DescribeServiceEnvironmentReleaseHistory", req, resp, cb);
    }
    /**
     * 本接口（DescribeApiUsagePlan）用于查询服务中 API 使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务及其中 API 的所有使用计划。
     * @param {DescribeApiUsagePlanRequest} req
     * @param {function(string, DescribeApiUsagePlanResponse):void} cb
     * @public
     */
    DescribeApiUsagePlan(req, cb) {
        const resp = new DescribeApiUsagePlanResponse();
        this.request("DescribeApiUsagePlan", req, resp, cb);
    }
    /**
     * 本接口（DeleteApi）用于删除已经创建的API。
     * @param {DeleteApiRequest} req
     * @param {function(string, DeleteApiResponse):void} cb
     * @public
     */
    DeleteApi(req, cb) {
        const resp = new DeleteApiResponse();
        this.request("DeleteApi", req, resp, cb);
    }
    /**
     * 本接口（DescribeIPStrategysStatus）用于查询服务IP策略列表。
     * @param {DescribeIPStrategysStatusRequest} req
     * @param {function(string, DescribeIPStrategysStatusResponse):void} cb
     * @public
     */
    DescribeIPStrategysStatus(req, cb) {
        const resp = new DescribeIPStrategysStatusResponse();
        this.request("DescribeIPStrategysStatus", req, resp, cb);
    }
    /**
     * 本接口（DescribeServiceEnvironmentList）用于查询一个服务的环境列表，可查询到此服务下所有环境及其状态。
     * @param {DescribeServiceEnvironmentListRequest} req
     * @param {function(string, DescribeServiceEnvironmentListResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentList(req, cb) {
        const resp = new DescribeServiceEnvironmentListResponse();
        this.request("DescribeServiceEnvironmentList", req, resp, cb);
    }
    /**
     * 本接口（DescribeServiceUsagePlan）用于查询服务使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务的所有使用计划。
     * @param {DescribeServiceUsagePlanRequest} req
     * @param {function(string, DescribeServiceUsagePlanResponse):void} cb
     * @public
     */
    DescribeServiceUsagePlan(req, cb) {
        const resp = new DescribeServiceUsagePlanResponse();
        this.request("DescribeServiceUsagePlan", req, resp, cb);
    }
    /**
     * 本接口（ModifyServiceEnvironmentStrategy）用于修改服务限流策略
     * @param {ModifyServiceEnvironmentStrategyRequest} req
     * @param {function(string, ModifyServiceEnvironmentStrategyResponse):void} cb
     * @public
     */
    ModifyServiceEnvironmentStrategy(req, cb) {
        const resp = new ModifyServiceEnvironmentStrategyResponse();
        this.request("ModifyServiceEnvironmentStrategy", req, resp, cb);
    }
    /**
     * 本接口（CreateUsagePlan）用于创建使用计划。
用户在使用 API 网关时，需要创建使用计划并将其绑定到服务的环境中使用。
     * @param {CreateUsagePlanRequest} req
     * @param {function(string, CreateUsagePlanResponse):void} cb
     * @public
     */
    CreateUsagePlan(req, cb) {
        const resp = new CreateUsagePlanResponse();
        this.request("CreateUsagePlan", req, resp, cb);
    }
    /**
     * 本接口（UpdateApiKey）用于更换用户已创建的一对 API 密钥。
     * @param {UpdateApiKeyRequest} req
     * @param {function(string, UpdateApiKeyResponse):void} cb
     * @public
     */
    UpdateApiKey(req, cb) {
        const resp = new UpdateApiKeyResponse();
        this.request("UpdateApiKey", req, resp, cb);
    }
    /**
     * 本接口（DescribeServiceSubDomainMappings）用于查询自定义域名的路径映射。
API 网关可绑定自定义域名到服务，并且可以对自定义域名的路径进行映射，可自定义不同的路径映射到服务中的三个环境，本接口用于查询绑定服务的自定义域名的路径映射列表。
     * @param {DescribeServiceSubDomainMappingsRequest} req
     * @param {function(string, DescribeServiceSubDomainMappingsResponse):void} cb
     * @public
     */
    DescribeServiceSubDomainMappings(req, cb) {
        const resp = new DescribeServiceSubDomainMappingsResponse();
        this.request("DescribeServiceSubDomainMappings", req, resp, cb);
    }
    /**
     * 本接口（BindEnvironment）用于绑定使用计划到服务或API。
用户在发布服务到某个环境中后，如果 API 需要鉴权，还需要绑定使用计划才能进行调用，此接口用户将使用计划绑定到特定环境。
目前支持绑定使用计划到API，但是同一个服务不能同时存在绑定到服务的使用计划和绑定到API的使用计划，所以对已经绑定过服务级别使用计划的环境，请先使用 服务级别使用计划降级 接口进行降级操作。
     * @param {BindEnvironmentRequest} req
     * @param {function(string, BindEnvironmentResponse):void} cb
     * @public
     */
    BindEnvironment(req, cb) {
        const resp = new BindEnvironmentResponse();
        this.request("BindEnvironment", req, resp, cb);
    }
    /**
     * 本接口（UnBindSecretIds）用于为使用计划解绑密钥。
     * @param {UnBindSecretIdsRequest} req
     * @param {function(string, UnBindSecretIdsResponse):void} cb
     * @public
     */
    UnBindSecretIds(req, cb) {
        const resp = new UnBindSecretIdsResponse();
        this.request("UnBindSecretIds", req, resp, cb);
    }
    /**
     * 本接口（BindIPStrategy）用于API绑定IP策略。
     * @param {BindIPStrategyRequest} req
     * @param {function(string, BindIPStrategyResponse):void} cb
     * @public
     */
    BindIPStrategy(req, cb) {
        const resp = new BindIPStrategyResponse();
        this.request("BindIPStrategy", req, resp, cb);
    }
    /**
     * 本接口（DescribeServicesStatus）用于搜索查询某一个服务或多个服务的列表，并返回服务相关的域名、时间等信息。
     * @param {DescribeServicesStatusRequest} req
     * @param {function(string, DescribeServicesStatusResponse):void} cb
     * @public
     */
    DescribeServicesStatus(req, cb) {
        const resp = new DescribeServicesStatusResponse();
        this.request("DescribeServicesStatus", req, resp, cb);
    }
    /**
     * 本接口（DescribeIPStrategy）用于查询IP策略详情。
     * @param {DescribeIPStrategyRequest} req
     * @param {function(string, DescribeIPStrategyResponse):void} cb
     * @public
     */
    DescribeIPStrategy(req, cb) {
        const resp = new DescribeIPStrategyResponse();
        this.request("DescribeIPStrategy", req, resp, cb);
    }
    /**
     * 本接口（DescribeUsagePlanEnvironments）用于查询使用计划绑定的环境列表。
用户在绑定了某个使用计划到环境后，可使用本接口查询这个使用计划绑定的所有服务的环境。
     * @param {DescribeUsagePlanEnvironmentsRequest} req
     * @param {function(string, DescribeUsagePlanEnvironmentsResponse):void} cb
     * @public
     */
    DescribeUsagePlanEnvironments(req, cb) {
        const resp = new DescribeUsagePlanEnvironmentsResponse();
        this.request("DescribeUsagePlanEnvironments", req, resp, cb);
    }
    /**
     * 本接口（EnableApiKey）用于启动一对被禁用的 API 密钥。
     * @param {EnableApiKeyRequest} req
     * @param {function(string, EnableApiKeyResponse):void} cb
     * @public
     */
    EnableApiKey(req, cb) {
        const resp = new EnableApiKeyResponse();
        this.request("EnableApiKey", req, resp, cb);
    }
    /**
     * 本接口（CreateIPStrategy）用于创建服务IP策略。
     * @param {CreateIPStrategyRequest} req
     * @param {function(string, CreateIPStrategyResponse):void} cb
     * @public
     */
    CreateIPStrategy(req, cb) {
        const resp = new CreateIPStrategyResponse();
        this.request("CreateIPStrategy", req, resp, cb);
    }
    /**
     * 本接口（DescribeServiceReleaseVersion）查询一个服务下面所有已经发布的版本列表。
用户在发布服务时，常有多个版本发布，可使用本接口查询已发布的版本。
     * @param {DescribeServiceReleaseVersionRequest} req
     * @param {function(string, DescribeServiceReleaseVersionResponse):void} cb
     * @public
     */
    DescribeServiceReleaseVersion(req, cb) {
        const resp = new DescribeServiceReleaseVersionResponse();
        this.request("DescribeServiceReleaseVersion", req, resp, cb);
    }
    /**
     * 本接口（DescribeApisStatus）用于查看一个服务下的某个 API 或所有 API 列表及其相关信息。
     * @param {DescribeApisStatusRequest} req
     * @param {function(string, DescribeApisStatusResponse):void} cb
     * @public
     */
    DescribeApisStatus(req, cb) {
        const resp = new DescribeApisStatusResponse();
        this.request("DescribeApisStatus", req, resp, cb);
    }
    /**
     * 本接口（CreateApiKey）用于创建一对新的 API 密钥。
     * @param {CreateApiKeyRequest} req
     * @param {function(string, CreateApiKeyResponse):void} cb
     * @public
     */
    CreateApiKey(req, cb) {
        const resp = new CreateApiKeyResponse();
        this.request("CreateApiKey", req, resp, cb);
    }
    /**
     * 本接口（ModifySubDomain）用于修改服务的自定义域名设置中的路径映射，可以修改绑定自定义域名之前的路径映射规则。
     * @param {ModifySubDomainRequest} req
     * @param {function(string, ModifySubDomainResponse):void} cb
     * @public
     */
    ModifySubDomain(req, cb) {
        const resp = new ModifySubDomainResponse();
        this.request("ModifySubDomain", req, resp, cb);
    }
    /**
     * 本接口（DeleteIPStrategy）用于删除服务IP策略。
     * @param {DeleteIPStrategyRequest} req
     * @param {function(string, DeleteIPStrategyResponse):void} cb
     * @public
     */
    DeleteIPStrategy(req, cb) {
        const resp = new DeleteIPStrategyResponse();
        this.request("DeleteIPStrategy", req, resp, cb);
    }
    /**
     * 本接口（ReleaseService）用于发布服务。
API 网关的服务创建后，需要发布到某个环境方生效后，使用者才能进行调用，此接口用于发布服务到环境，如 release 环境。
     * @param {ReleaseServiceRequest} req
     * @param {function(string, ReleaseServiceResponse):void} cb
     * @public
     */
    ReleaseService(req, cb) {
        const resp = new ReleaseServiceResponse();
        this.request("ReleaseService", req, resp, cb);
    }
    /**
     * 本接口（DisableApiKey）用于禁用一对 API 密钥。
     * @param {DisableApiKeyRequest} req
     * @param {function(string, DisableApiKeyResponse):void} cb
     * @public
     */
    DisableApiKey(req, cb) {
        const resp = new DisableApiKeyResponse();
        this.request("DisableApiKey", req, resp, cb);
    }
    /**
     * 本接口（ModifyService）用于修改服务的相关信息。当服务创建后，服务的名称、描述和服务类型均可被修改。
     * @param {ModifyServiceRequest} req
     * @param {function(string, ModifyServiceResponse):void} cb
     * @public
     */
    ModifyService(req, cb) {
        const resp = new ModifyServiceResponse();
        this.request("ModifyService", req, resp, cb);
    }
    /**
     * 本接口（UnBindEnvironment）用于将使用计划从特定环境解绑。
     * @param {UnBindEnvironmentRequest} req
     * @param {function(string, UnBindEnvironmentResponse):void} cb
     * @public
     */
    UnBindEnvironment(req, cb) {
        const resp = new UnBindEnvironmentResponse();
        this.request("UnBindEnvironment", req, resp, cb);
    }
    /**
     * 本接口（DescribeApiEnvironmentStrategy）用于展示API绑定的限流策略。
     * @param {DescribeApiEnvironmentStrategyRequest} req
     * @param {function(string, DescribeApiEnvironmentStrategyResponse):void} cb
     * @public
     */
    DescribeApiEnvironmentStrategy(req, cb) {
        const resp = new DescribeApiEnvironmentStrategyResponse();
        this.request("DescribeApiEnvironmentStrategy", req, resp, cb);
    }
    /**
     * 本接口（BindSecretIds）用于为使用计划绑定密钥。
将密钥绑定到某个使用计划，并将此使用计划绑定到某个服务发布的环境上，调用者方可使用此密钥调用这个服务中的 API，可使用本接口为使用计划绑定密钥。
     * @param {BindSecretIdsRequest} req
     * @param {function(string, BindSecretIdsResponse):void} cb
     * @public
     */
    BindSecretIds(req, cb) {
        const resp = new BindSecretIdsResponse();
        this.request("BindSecretIds", req, resp, cb);
    }
    /**
     * 本接口（DescribeServiceEnvironmentStrategy）用于展示服务限流策略。
     * @param {DescribeServiceEnvironmentStrategyRequest} req
     * @param {function(string, DescribeServiceEnvironmentStrategyResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentStrategy(req, cb) {
        const resp = new DescribeServiceEnvironmentStrategyResponse();
        this.request("DescribeServiceEnvironmentStrategy", req, resp, cb);
    }
    /**
     * 本接口（DescribeService）用于查询一个服务的详细信息、包括服务的描述、域名、协议、创建时间、发布情况等信息。
     * @param {DescribeServiceRequest} req
     * @param {function(string, DescribeServiceResponse):void} cb
     * @public
     */
    DescribeService(req, cb) {
        const resp = new DescribeServiceResponse();
        this.request("DescribeService", req, resp, cb);
    }
    /**
     * 本接口（DeleteServiceSubDomainMapping）用于删除服务中某个环境的自定义域名映射。
当用户使用自定义域名，并使用了自定义映射时，可使用此接口。但需注意，若删除了所有环境的映射时，调用此 API 均会返回失败。
     * @param {DeleteServiceSubDomainMappingRequest} req
     * @param {function(string, DeleteServiceSubDomainMappingResponse):void} cb
     * @public
     */
    DeleteServiceSubDomainMapping(req, cb) {
        const resp = new DeleteServiceSubDomainMappingResponse();
        this.request("DeleteServiceSubDomainMapping", req, resp, cb);
    }
    /**
     * 本接口（DescribeApiKey）用于查询密钥详情。
用户在创建密钥后，可用此接口查询一个 API 密钥的详情，该接口会显示密钥 Key。
     * @param {DescribeApiKeyRequest} req
     * @param {function(string, DescribeApiKeyResponse):void} cb
     * @public
     */
    DescribeApiKey(req, cb) {
        const resp = new DescribeApiKeyResponse();
        this.request("DescribeApiKey", req, resp, cb);
    }
    /**
     * 本接口（DescribeUsagePlan）用于查询一个使用计划的详细信息，包括名称、QPS、创建时间绑定的环境等。
     * @param {DescribeUsagePlanRequest} req
     * @param {function(string, DescribeUsagePlanResponse):void} cb
     * @public
     */
    DescribeUsagePlan(req, cb) {
        const resp = new DescribeUsagePlanResponse();
        this.request("DescribeUsagePlan", req, resp, cb);
    }
    /**
     * 本接口（UnBindSubDomain）用于解绑自定义域名。
用户使用 API 网关绑定了自定义域名到服务中后，若想要解绑此自定义域名，可使用此接口。
     * @param {UnBindSubDomainRequest} req
     * @param {function(string, UnBindSubDomainResponse):void} cb
     * @public
     */
    UnBindSubDomain(req, cb) {
        const resp = new UnBindSubDomainResponse();
        this.request("UnBindSubDomain", req, resp, cb);
    }
    /**
     * 本接口（BindSubDomain）用于绑定自定义域名到服务。
API 网关中每个服务都会提供一个默认的域名供用户调用，但当用户想使用自己的已有域名时，也可以将自定义域名绑定到此服务，在做好备案、与默认域名的 CNAME 后，可直接调用自定义域名。
     * @param {BindSubDomainRequest} req
     * @param {function(string, BindSubDomainResponse):void} cb
     * @public
     */
    BindSubDomain(req, cb) {
        const resp = new BindSubDomainResponse();
        this.request("BindSubDomain", req, resp, cb);
    }
    /**
     * 本接口（DescribeApi）用于查询用户部署于 API 网关的 API 接口的详细信息。​
     * @param {DescribeApiRequest} req
     * @param {function(string, DescribeApiResponse):void} cb
     * @public
     */
    DescribeApi(req, cb) {
        const resp = new DescribeApiResponse();
        this.request("DescribeApi", req, resp, cb);
    }
    /**
     * 本接口（DeleteApiKey）用于删除一对 API 密钥。
     * @param {DeleteApiKeyRequest} req
     * @param {function(string, DeleteApiKeyResponse):void} cb
     * @public
     */
    DeleteApiKey(req, cb) {
        const resp = new DeleteApiKeyResponse();
        this.request("DeleteApiKey", req, resp, cb);
    }
    /**
     * 本接口（CreateApi）用于创建 API 接口，创建 API 前，用户需要先创建服务，每个 API 都有自己归属的服务。
     * @param {CreateApiRequest} req
     * @param {function(string, CreateApiResponse):void} cb
     * @public
     */
    CreateApi(req, cb) {
        const resp = new CreateApiResponse();
        this.request("CreateApi", req, resp, cb);
    }
    /**
     * 本接口（GenerateApiDocument）用于自动生成 API 文档和 SDK，一个服务的一个环境生成一份文档和 SDK。
     * @param {GenerateApiDocumentRequest} req
     * @param {function(string, GenerateApiDocumentResponse):void} cb
     * @public
     */
    GenerateApiDocument(req, cb) {
        const resp = new GenerateApiDocumentResponse();
        this.request("GenerateApiDocument", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=apigateway_client.js.map