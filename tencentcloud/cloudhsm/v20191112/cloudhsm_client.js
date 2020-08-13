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
const Subnet = models_1.Models.Subnet;
const DescribeSubnetRequest = models_1.Models.DescribeSubnetRequest;
const DescribeVsmsResponse = models_1.Models.DescribeVsmsResponse;
const InquiryPriceBuyVsmRequest = models_1.Models.InquiryPriceBuyVsmRequest;
const DescribeVpcResponse = models_1.Models.DescribeVpcResponse;
const ModifyVsmAttributesRequest = models_1.Models.ModifyVsmAttributesRequest;
const DescribeSubnetResponse = models_1.Models.DescribeSubnetResponse;
const DescribeHSMByVpcIdRequest = models_1.Models.DescribeHSMByVpcIdRequest;
const DescribeHSMByVpcIdResponse = models_1.Models.DescribeHSMByVpcIdResponse;
const DescribeUsgRuleResponse = models_1.Models.DescribeUsgRuleResponse;
const ResourceInfo = models_1.Models.ResourceInfo;
const DescribeVpcRequest = models_1.Models.DescribeVpcRequest;
const Vpc = models_1.Models.Vpc;
const DescribeUsgRequest = models_1.Models.DescribeUsgRequest;
const DescribeVsmAttributesResponse = models_1.Models.DescribeVsmAttributesResponse;
const SgUnit = models_1.Models.SgUnit;
const UsgRuleDetail = models_1.Models.UsgRuleDetail;
const InquiryPriceBuyVsmResponse = models_1.Models.InquiryPriceBuyVsmResponse;
const DescribeHSMBySubnetIdResponse = models_1.Models.DescribeHSMBySubnetIdResponse;
const DescribeUsgResponse = models_1.Models.DescribeUsgResponse;
const DescribeHSMBySubnetIdRequest = models_1.Models.DescribeHSMBySubnetIdRequest;
const DescribeVsmsRequest = models_1.Models.DescribeVsmsRequest;
const DescribeUsgRuleRequest = models_1.Models.DescribeUsgRuleRequest;
const ModifyVsmAttributesResponse = models_1.Models.ModifyVsmAttributesResponse;
const DescribeVsmAttributesRequest = models_1.Models.DescribeVsmAttributesRequest;
const UsgPolicy = models_1.Models.UsgPolicy;
/**
 * cloudhsm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cloudhsm.tencentcloudapi.com", "2019-11-12", credential, region, profile);
    }
    /**
     * 修改VSM属性
     * @param {ModifyVsmAttributesRequest} req
     * @param {function(string, ModifyVsmAttributesResponse):void} cb
     * @public
     */
    ModifyVsmAttributes(req, cb) {
        const resp = new ModifyVsmAttributesResponse();
        this.request("ModifyVsmAttributes", req, resp, cb);
    }
    /**
     * 获取VSM属性
     * @param {DescribeVsmAttributesRequest} req
     * @param {function(string, DescribeVsmAttributesResponse):void} cb
     * @public
     */
    DescribeVsmAttributes(req, cb) {
        const resp = new DescribeVsmAttributesResponse();
        this.request("DescribeVsmAttributes", req, resp, cb);
    }
    /**
     * 获取用户VSM列表
     * @param {DescribeVsmsRequest} req
     * @param {function(string, DescribeVsmsResponse):void} cb
     * @public
     */
    DescribeVsms(req, cb) {
        const resp = new DescribeVsmsResponse();
        this.request("DescribeVsms", req, resp, cb);
    }
    /**
     * 查询用户的私有网络列表
     * @param {DescribeVpcRequest} req
     * @param {function(string, DescribeVpcResponse):void} cb
     * @public
     */
    DescribeVpc(req, cb) {
        const resp = new DescribeVpcResponse();
        this.request("DescribeVpc", req, resp, cb);
    }
    /**
     * 通过VpcId获取Hsm资源数
     * @param {DescribeHSMByVpcIdRequest} req
     * @param {function(string, DescribeHSMByVpcIdResponse):void} cb
     * @public
     */
    DescribeHSMByVpcId(req, cb) {
        const resp = new DescribeHSMByVpcIdResponse();
        this.request("DescribeHSMByVpcId", req, resp, cb);
    }
    /**
     * 通过SubnetId获取Hsm资源数
     * @param {DescribeHSMBySubnetIdRequest} req
     * @param {function(string, DescribeHSMBySubnetIdResponse):void} cb
     * @public
     */
    DescribeHSMBySubnetId(req, cb) {
        const resp = new DescribeHSMBySubnetIdResponse();
        this.request("DescribeHSMBySubnetId", req, resp, cb);
    }
    /**
     * 根据用户的AppId获取用户安全组列表
     * @param {DescribeUsgRequest} req
     * @param {function(string, DescribeUsgResponse):void} cb
     * @public
     */
    DescribeUsg(req, cb) {
        const resp = new DescribeUsgResponse();
        this.request("DescribeUsg", req, resp, cb);
    }
    /**
     * 查询子网列表
     * @param {DescribeSubnetRequest} req
     * @param {function(string, DescribeSubnetResponse):void} cb
     * @public
     */
    DescribeSubnet(req, cb) {
        const resp = new DescribeSubnetResponse();
        this.request("DescribeSubnet", req, resp, cb);
    }
    /**
     * 购买询价接口
     * @param {InquiryPriceBuyVsmRequest} req
     * @param {function(string, InquiryPriceBuyVsmResponse):void} cb
     * @public
     */
    InquiryPriceBuyVsm(req, cb) {
        const resp = new InquiryPriceBuyVsmResponse();
        this.request("InquiryPriceBuyVsm", req, resp, cb);
    }
    /**
     * 获取安全组详情
     * @param {DescribeUsgRuleRequest} req
     * @param {function(string, DescribeUsgRuleResponse):void} cb
     * @public
     */
    DescribeUsgRule(req, cb) {
        const resp = new DescribeUsgRuleResponse();
        this.request("DescribeUsgRule", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cloudhsm_client.js.map