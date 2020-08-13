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
const MultiDiskMC = models_1.Models.MultiDiskMC;
const EmrProductConfigOutter = models_1.Models.EmrProductConfigOutter;
const LoginSettings = models_1.Models.LoginSettings;
const VPCSettings = models_1.Models.VPCSettings;
const PriceResource = models_1.Models.PriceResource;
const ScaleOutInstanceResponse = models_1.Models.ScaleOutInstanceResponse;
const InquiryPriceCreateInstanceRequest = models_1.Models.InquiryPriceCreateInstanceRequest;
const Resource = models_1.Models.Resource;
const TerminateInstanceRequest = models_1.Models.TerminateInstanceRequest;
const TerminateInstanceResponse = models_1.Models.TerminateInstanceResponse;
const CreateInstanceResponse = models_1.Models.CreateInstanceResponse;
const PodSpec = models_1.Models.PodSpec;
const InquiryPriceRenewInstanceResponse = models_1.Models.InquiryPriceRenewInstanceResponse;
const TerminateTasksRequest = models_1.Models.TerminateTasksRequest;
const InquiryPriceCreateInstanceResponse = models_1.Models.InquiryPriceCreateInstanceResponse;
const DescribeClusterNodesRequest = models_1.Models.DescribeClusterNodesRequest;
const PreExecuteFileSettings = models_1.Models.PreExecuteFileSettings;
const CreateInstanceRequest = models_1.Models.CreateInstanceRequest;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const InquiryPriceScaleOutInstanceRequest = models_1.Models.InquiryPriceScaleOutInstanceRequest;
const Tag = models_1.Models.Tag;
const Placement = models_1.Models.Placement;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const CustomMetaInfo = models_1.Models.CustomMetaInfo;
const InquiryPriceUpdateInstanceRequest = models_1.Models.InquiryPriceUpdateInstanceRequest;
const COSSettings = models_1.Models.COSSettings;
const ClusterInstancesInfo = models_1.Models.ClusterInstancesInfo;
const MultiDisk = models_1.Models.MultiDisk;
const SearchItem = models_1.Models.SearchItem;
const InquiryPriceScaleOutInstanceResponse = models_1.Models.InquiryPriceScaleOutInstanceResponse;
const OutterResource = models_1.Models.OutterResource;
const UpdateInstanceSettings = models_1.Models.UpdateInstanceSettings;
const TerminateTasksResponse = models_1.Models.TerminateTasksResponse;
const DescribeClusterNodesResponse = models_1.Models.DescribeClusterNodesResponse;
const NodeHardwareInfo = models_1.Models.NodeHardwareInfo;
const InquiryPriceUpdateInstanceResponse = models_1.Models.InquiryPriceUpdateInstanceResponse;
const NewResourceSpec = models_1.Models.NewResourceSpec;
const InquiryPriceRenewInstanceRequest = models_1.Models.InquiryPriceRenewInstanceRequest;
const CdbInfo = models_1.Models.CdbInfo;
const ScaleOutInstanceRequest = models_1.Models.ScaleOutInstanceRequest;
/**
 * emr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("emr.tencentcloudapi.com", "2019-01-03", credential, region, profile);
    }
    /**
     * 缩容Task节点
     * @param {TerminateTasksRequest} req
     * @param {function(string, TerminateTasksResponse):void} cb
     * @public
     */
    TerminateTasks(req, cb) {
        const resp = new TerminateTasksResponse();
        this.request("TerminateTasks", req, resp, cb);
    }
    /**
     * 查询EMR实例
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }
    /**
     * 变配询价
     * @param {InquiryPriceUpdateInstanceRequest} req
     * @param {function(string, InquiryPriceUpdateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceUpdateInstance(req, cb) {
        const resp = new InquiryPriceUpdateInstanceResponse();
        this.request("InquiryPriceUpdateInstance", req, resp, cb);
    }
    /**
     * 查询硬件节点信息
     * @param {DescribeClusterNodesRequest} req
     * @param {function(string, DescribeClusterNodesResponse):void} cb
     * @public
     */
    DescribeClusterNodes(req, cb) {
        const resp = new DescribeClusterNodesResponse();
        this.request("DescribeClusterNodes", req, resp, cb);
    }
    /**
     * 续费询价。
     * @param {InquiryPriceRenewInstanceRequest} req
     * @param {function(string, InquiryPriceRenewInstanceResponse):void} cb
     * @public
     */
    InquiryPriceRenewInstance(req, cb) {
        const resp = new InquiryPriceRenewInstanceResponse();
        this.request("InquiryPriceRenewInstance", req, resp, cb);
    }
    /**
     * 创建EMR实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        const resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }
    /**
     * 创建实例询价
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        const resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     * @param {InquiryPriceScaleOutInstanceRequest} req
     * @param {function(string, InquiryPriceScaleOutInstanceResponse):void} cb
     * @public
     */
    InquiryPriceScaleOutInstance(req, cb) {
        const resp = new InquiryPriceScaleOutInstanceResponse();
        this.request("InquiryPriceScaleOutInstance", req, resp, cb);
    }
    /**
     * 实例扩容
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        const resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     * @param {TerminateInstanceRequest} req
     * @param {function(string, TerminateInstanceResponse):void} cb
     * @public
     */
    TerminateInstance(req, cb) {
        const resp = new TerminateInstanceResponse();
        this.request("TerminateInstance", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=emr_client.js.map