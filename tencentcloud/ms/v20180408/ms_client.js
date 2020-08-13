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
const PlanDetailInfo = models_1.Models.PlanDetailInfo;
const AppSetInfo = models_1.Models.AppSetInfo;
const CreateShieldPlanInstanceResponse = models_1.Models.CreateShieldPlanInstanceResponse;
const ScanInfo = models_1.Models.ScanInfo;
const CreateResourceInstancesRequest = models_1.Models.CreateResourceInstancesRequest;
const DescribeShieldInstancesResponse = models_1.Models.DescribeShieldInstancesResponse;
const PluginInfo = models_1.Models.PluginInfo;
const ScanSensitiveList = models_1.Models.ScanSensitiveList;
const DescribeShieldResultRequest = models_1.Models.DescribeShieldResultRequest;
const CreateShieldInstanceRequest = models_1.Models.CreateShieldInstanceRequest;
const CreateCosSecKeyInstanceRequest = models_1.Models.CreateCosSecKeyInstanceRequest;
const DescribeScanResultsResponse = models_1.Models.DescribeScanResultsResponse;
const CreateScanInstancesRequest = models_1.Models.CreateScanInstancesRequest;
const DescribeUserBaseInfoInstanceResponse = models_1.Models.DescribeUserBaseInfoInstanceResponse;
const CreateShieldPlanInstanceRequest = models_1.Models.CreateShieldPlanInstanceRequest;
const ScanSetInfo = models_1.Models.ScanSetInfo;
const AppScanSet = models_1.Models.AppScanSet;
const ShieldPlanInfo = models_1.Models.ShieldPlanInfo;
const CreateBindInstanceRequest = models_1.Models.CreateBindInstanceRequest;
const CreateShieldInstanceResponse = models_1.Models.CreateShieldInstanceResponse;
const DeleteShieldInstancesRequest = models_1.Models.DeleteShieldInstancesRequest;
const ResourceInfo = models_1.Models.ResourceInfo;
const DescribeShieldInstancesRequest = models_1.Models.DescribeShieldInstancesRequest;
const CreateScanInstancesResponse = models_1.Models.CreateScanInstancesResponse;
const DescribeScanInstancesResponse = models_1.Models.DescribeScanInstancesResponse;
const VulInfo = models_1.Models.VulInfo;
const AppInfo = models_1.Models.AppInfo;
const ServiceInfo = models_1.Models.ServiceInfo;
const SoInfo = models_1.Models.SoInfo;
const DescribeShieldPlanInstanceResponse = models_1.Models.DescribeShieldPlanInstanceResponse;
const ScanSensitiveInfo = models_1.Models.ScanSensitiveInfo;
const ResourceServiceInfo = models_1.Models.ResourceServiceInfo;
const DescribeResourceInstancesRequest = models_1.Models.DescribeResourceInstancesRequest;
const AdInfo = models_1.Models.AdInfo;
const DescribeShieldPlanInstanceRequest = models_1.Models.DescribeShieldPlanInstanceRequest;
const ShieldInfo = models_1.Models.ShieldInfo;
const ScanPermissionList = models_1.Models.ScanPermissionList;
const CreateResourceInstancesResponse = models_1.Models.CreateResourceInstancesResponse;
const AppDetailInfo = models_1.Models.AppDetailInfo;
const DeleteScanInstancesResponse = models_1.Models.DeleteScanInstancesResponse;
const Filter = models_1.Models.Filter;
const DeleteShieldInstancesResponse = models_1.Models.DeleteShieldInstancesResponse;
const DescribeScanInstancesRequest = models_1.Models.DescribeScanInstancesRequest;
const DescribeUserBaseInfoInstanceRequest = models_1.Models.DescribeUserBaseInfoInstanceRequest;
const DescribeResourceInstancesResponse = models_1.Models.DescribeResourceInstancesResponse;
const DescribeScanResultsRequest = models_1.Models.DescribeScanResultsRequest;
const CreateCosSecKeyInstanceResponse = models_1.Models.CreateCosSecKeyInstanceResponse;
const VirusInfo = models_1.Models.VirusInfo;
const ScanPermissionInfo = models_1.Models.ScanPermissionInfo;
const PlanInfo = models_1.Models.PlanInfo;
const DescribeShieldResultResponse = models_1.Models.DescribeShieldResultResponse;
const CreateBindInstanceResponse = models_1.Models.CreateBindInstanceResponse;
const VulList = models_1.Models.VulList;
const BindInfo = models_1.Models.BindInfo;
const DeleteScanInstancesRequest = models_1.Models.DeleteScanInstancesRequest;
/**
 * ms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ms.tencentcloudapi.com", "2018-04-08", credential, region, profile);
    }
    /**
     * 用户通过该接口批量提交应用进行应用扫描，扫描后需通过DescribeScanResults接口查询扫描结果
     * @param {CreateScanInstancesRequest} req
     * @param {function(string, CreateScanInstancesResponse):void} cb
     * @public
     */
    CreateScanInstances(req, cb) {
        const resp = new CreateScanInstancesResponse();
        this.request("CreateScanInstances", req, resp, cb);
    }
    /**
     * 通过唯一标识获取加固的结果
     * @param {DescribeShieldResultRequest} req
     * @param {function(string, DescribeShieldResultResponse):void} cb
     * @public
     */
    DescribeShieldResult(req, cb) {
        const resp = new DescribeShieldResultResponse();
        this.request("DescribeShieldResult", req, resp, cb);
    }
    /**
     * 删除一个或者多个app扫描信息
     * @param {DeleteScanInstancesRequest} req
     * @param {function(string, DeleteScanInstancesResponse):void} cb
     * @public
     */
    DeleteScanInstances(req, cb) {
        const resp = new DeleteScanInstancesResponse();
        this.request("DeleteScanInstances", req, resp, cb);
    }
    /**
     * 用户可以使用该接口自建资源，只支持白名单用户
     * @param {CreateResourceInstancesRequest} req
     * @param {function(string, CreateResourceInstancesResponse):void} cb
     * @public
     */
    CreateResourceInstances(req, cb) {
        const resp = new CreateResourceInstancesResponse();
        this.request("CreateResourceInstances", req, resp, cb);
    }
    /**
     * 将应用和资源进行绑定
     * @param {CreateBindInstanceRequest} req
     * @param {function(string, CreateBindInstanceResponse):void} cb
     * @public
     */
    CreateBindInstance(req, cb) {
        const resp = new CreateBindInstanceResponse();
        this.request("CreateBindInstance", req, resp, cb);
    }
    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性。
     * @param {CreateCosSecKeyInstanceRequest} req
     * @param {function(string, CreateCosSecKeyInstanceResponse):void} cb
     * @public
     */
    CreateCosSecKeyInstance(req, cb) {
        const resp = new CreateCosSecKeyInstanceResponse();
        this.request("CreateCosSecKeyInstance", req, resp, cb);
    }
    /**
     * 获取某个用户的所有资源信息
     * @param {DescribeResourceInstancesRequest} req
     * @param {function(string, DescribeResourceInstancesResponse):void} cb
     * @public
     */
    DescribeResourceInstances(req, cb) {
        const resp = new DescribeResourceInstancesResponse();
        this.request("DescribeResourceInstances", req, resp, cb);
    }
    /**
     * 用户通过CreateScanInstances接口提交应用进行风险批量扫描后，用此接口批量获取风险详细信息,包含漏洞信息，广告信息，插件信息和病毒信息
     * @param {DescribeScanResultsRequest} req
     * @param {function(string, DescribeScanResultsResponse):void} cb
     * @public
     */
    DescribeScanResults(req, cb) {
        const resp = new DescribeScanResultsResponse();
        this.request("DescribeScanResults", req, resp, cb);
    }
    /**
     * 查询加固策略
     * @param {DescribeShieldPlanInstanceRequest} req
     * @param {function(string, DescribeShieldPlanInstanceResponse):void} cb
     * @public
     */
    DescribeShieldPlanInstance(req, cb) {
        const resp = new DescribeShieldPlanInstanceResponse();
        this.request("DescribeShieldPlanInstance", req, resp, cb);
    }
    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果
     * @param {CreateShieldInstanceRequest} req
     * @param {function(string, CreateShieldInstanceResponse):void} cb
     * @public
     */
    CreateShieldInstance(req, cb) {
        const resp = new CreateShieldInstanceResponse();
        this.request("CreateShieldInstance", req, resp, cb);
    }
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。

     * @param {DescribeShieldInstancesRequest} req
     * @param {function(string, DescribeShieldInstancesResponse):void} cb
     * @public
     */
    DescribeShieldInstances(req, cb) {
        const resp = new DescribeShieldInstancesResponse();
        this.request("DescribeShieldInstances", req, resp, cb);
    }
    /**
     * 对资源进行策略新增
     * @param {CreateShieldPlanInstanceRequest} req
     * @param {function(string, CreateShieldPlanInstanceResponse):void} cb
     * @public
     */
    CreateShieldPlanInstance(req, cb) {
        const resp = new CreateShieldPlanInstanceResponse();
        this.request("CreateShieldPlanInstance", req, resp, cb);
    }
    /**
     * 获取用户基础信息
     * @param {DescribeUserBaseInfoInstanceRequest} req
     * @param {function(string, DescribeUserBaseInfoInstanceResponse):void} cb
     * @public
     */
    DescribeUserBaseInfoInstance(req, cb) {
        const resp = new DescribeUserBaseInfoInstanceResponse();
        this.request("DescribeUserBaseInfoInstance", req, resp, cb);
    }
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。
     * @param {DescribeScanInstancesRequest} req
     * @param {function(string, DescribeScanInstancesResponse):void} cb
     * @public
     */
    DescribeScanInstances(req, cb) {
        const resp = new DescribeScanInstancesResponse();
        this.request("DescribeScanInstances", req, resp, cb);
    }
    /**
     * 删除一个或者多个app加固信息
     * @param {DeleteShieldInstancesRequest} req
     * @param {function(string, DeleteShieldInstancesResponse):void} cb
     * @public
     */
    DeleteShieldInstances(req, cb) {
        const resp = new DeleteShieldInstancesResponse();
        this.request("DeleteShieldInstances", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ms_client.js.map