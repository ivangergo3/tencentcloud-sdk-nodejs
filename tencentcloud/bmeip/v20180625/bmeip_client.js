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
const UnbindEipAclsRequest = models_1.Models.UnbindEipAclsRequest;
const EipAclMap = models_1.Models.EipAclMap;
const ModifyEipChargeResponse = models_1.Models.ModifyEipChargeResponse;
const ModifyEipAclResponse = models_1.Models.ModifyEipAclResponse;
const DescribeEipsResponse = models_1.Models.DescribeEipsResponse;
const ModifyEipAclRequest = models_1.Models.ModifyEipAclRequest;
const UnbindVpcIpRequest = models_1.Models.UnbindVpcIpRequest;
const BindRsResponse = models_1.Models.BindRsResponse;
const BindEipAclsResponse = models_1.Models.BindEipAclsResponse;
const CreateEipRequest = models_1.Models.CreateEipRequest;
const EipAclRule = models_1.Models.EipAclRule;
const UnbindHostedResponse = models_1.Models.UnbindHostedResponse;
const DeleteEipAclRequest = models_1.Models.DeleteEipAclRequest;
const EipInfo = models_1.Models.EipInfo;
const UnbindEipAclsResponse = models_1.Models.UnbindEipAclsResponse;
const DescribeEipAclsResponse = models_1.Models.DescribeEipAclsResponse;
const ModifyEipNameResponse = models_1.Models.ModifyEipNameResponse;
const DescribeEipQuotaResponse = models_1.Models.DescribeEipQuotaResponse;
const UnbindRsResponse = models_1.Models.UnbindRsResponse;
const BindRsRequest = models_1.Models.BindRsRequest;
const UnbindHostedRequest = models_1.Models.UnbindHostedRequest;
const UnbindRsListResponse = models_1.Models.UnbindRsListResponse;
const BindVpcIpResponse = models_1.Models.BindVpcIpResponse;
const DescribeEipsRequest = models_1.Models.DescribeEipsRequest;
const ModifyEipNameRequest = models_1.Models.ModifyEipNameRequest;
const DeleteEipResponse = models_1.Models.DeleteEipResponse;
const BindHostedResponse = models_1.Models.BindHostedResponse;
const BindVpcIpRequest = models_1.Models.BindVpcIpRequest;
const CreateEipAclRequest = models_1.Models.CreateEipAclRequest;
const EipAcl = models_1.Models.EipAcl;
const CreateEipResponse = models_1.Models.CreateEipResponse;
const BindHostedRequest = models_1.Models.BindHostedRequest;
const DescribeEipTaskResponse = models_1.Models.DescribeEipTaskResponse;
const ModifyEipChargeRequest = models_1.Models.ModifyEipChargeRequest;
const DescribeEipQuotaRequest = models_1.Models.DescribeEipQuotaRequest;
const DeleteEipRequest = models_1.Models.DeleteEipRequest;
const EipRsMap = models_1.Models.EipRsMap;
const UnbindRsListRequest = models_1.Models.UnbindRsListRequest;
const DeleteEipAclResponse = models_1.Models.DeleteEipAclResponse;
const DescribeEipAclsRequest = models_1.Models.DescribeEipAclsRequest;
const BindEipAclsRequest = models_1.Models.BindEipAclsRequest;
const DescribeEipTaskRequest = models_1.Models.DescribeEipTaskRequest;
const UnbindRsRequest = models_1.Models.UnbindRsRequest;
const UnbindVpcIpResponse = models_1.Models.UnbindVpcIpResponse;
const CreateEipAclResponse = models_1.Models.CreateEipAclResponse;
/**
 * bmeip client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("bmeip.tencentcloudapi.com", "2018-06-25", credential, region, profile);
    }
    /**
     * 解绑黑石EIP
     * @param {UnbindRsRequest} req
     * @param {function(string, UnbindRsResponse):void} cb
     * @public
     */
    UnbindRs(req, cb) {
        const resp = new UnbindRsResponse();
        this.request("UnbindRs", req, resp, cb);
    }
    /**
     * BindHosted接口用于绑定黑石弹性公网IP到黑石托管机器上
     * @param {BindHostedRequest} req
     * @param {function(string, BindHostedResponse):void} cb
     * @public
     */
    BindHosted(req, cb) {
        const resp = new BindHostedResponse();
        this.request("BindHosted", req, resp, cb);
    }
    /**
     * 创建黑石弹性公网 EIPACL
     * @param {CreateEipAclRequest} req
     * @param {function(string, CreateEipAclResponse):void} cb
     * @public
     */
    CreateEipAcl(req, cb) {
        const resp = new CreateEipAclResponse();
        this.request("CreateEipAcl", req, resp, cb);
    }
    /**
     * 创建黑石弹性公网IP
     * @param {CreateEipRequest} req
     * @param {function(string, CreateEipResponse):void} cb
     * @public
     */
    CreateEip(req, cb) {
        const resp = new CreateEipResponse();
        this.request("CreateEip", req, resp, cb);
    }
    /**
     * 修改弹性公网IP ACL
     * @param {ModifyEipAclRequest} req
     * @param {function(string, ModifyEipAclResponse):void} cb
     * @public
     */
    ModifyEipAcl(req, cb) {
        const resp = new ModifyEipAclResponse();
        this.request("ModifyEipAcl", req, resp, cb);
    }
    /**
     * 查询黑石EIP 限额
     * @param {DescribeEipQuotaRequest} req
     * @param {function(string, DescribeEipQuotaResponse):void} cb
     * @public
     */
    DescribeEipQuota(req, cb) {
        const resp = new DescribeEipQuotaResponse();
        this.request("DescribeEipQuota", req, resp, cb);
    }
    /**
     * 绑定黑石EIP
     * @param {BindRsRequest} req
     * @param {function(string, BindRsResponse):void} cb
     * @public
     */
    BindRs(req, cb) {
        const resp = new BindRsResponse();
        this.request("BindRs", req, resp, cb);
    }
    /**
     * 黑石EIP查询任务状态
     * @param {DescribeEipTaskRequest} req
     * @param {function(string, DescribeEipTaskResponse):void} cb
     * @public
     */
    DescribeEipTask(req, cb) {
        const resp = new DescribeEipTaskResponse();
        this.request("DescribeEipTask", req, resp, cb);
    }
    /**
     * UnbindHosted接口用于解绑托管机器上的EIP
     * @param {UnbindHostedRequest} req
     * @param {function(string, UnbindHostedResponse):void} cb
     * @public
     */
    UnbindHosted(req, cb) {
        const resp = new UnbindHostedResponse();
        this.request("UnbindHosted", req, resp, cb);
    }
    /**
     * 黑石EIP解绑VPCIP
     * @param {UnbindVpcIpRequest} req
     * @param {function(string, UnbindVpcIpResponse):void} cb
     * @public
     */
    UnbindVpcIp(req, cb) {
        const resp = new UnbindVpcIpResponse();
        this.request("UnbindVpcIp", req, resp, cb);
    }
    /**
     * 释放黑石弹性公网IP
     * @param {DeleteEipRequest} req
     * @param {function(string, DeleteEipResponse):void} cb
     * @public
     */
    DeleteEip(req, cb) {
        const resp = new DeleteEipResponse();
        this.request("DeleteEip", req, resp, cb);
    }
    /**
     * 黑石EIP修改计费方式
     * @param {ModifyEipChargeRequest} req
     * @param {function(string, ModifyEipChargeResponse):void} cb
     * @public
     */
    ModifyEipCharge(req, cb) {
        const resp = new ModifyEipChargeResponse();
        this.request("ModifyEipCharge", req, resp, cb);
    }
    /**
     * 更新黑石EIP名称
     * @param {ModifyEipNameRequest} req
     * @param {function(string, ModifyEipNameResponse):void} cb
     * @public
     */
    ModifyEipName(req, cb) {
        const resp = new ModifyEipNameResponse();
        this.request("ModifyEipName", req, resp, cb);
    }
    /**
     * 此接口用于为某个 EIP 关联 ACL。
     * @param {BindEipAclsRequest} req
     * @param {function(string, BindEipAclsResponse):void} cb
     * @public
     */
    BindEipAcls(req, cb) {
        const resp = new BindEipAclsResponse();
        this.request("BindEipAcls", req, resp, cb);
    }
    /**
     * 删除弹性公网IP ACL
     * @param {DeleteEipAclRequest} req
     * @param {function(string, DeleteEipAclResponse):void} cb
     * @public
     */
    DeleteEipAcl(req, cb) {
        const resp = new DeleteEipAclResponse();
        this.request("DeleteEipAcl", req, resp, cb);
    }
    /**
     * 解绑弹性公网IP ACL
     * @param {UnbindEipAclsRequest} req
     * @param {function(string, UnbindEipAclsResponse):void} cb
     * @public
     */
    UnbindEipAcls(req, cb) {
        const resp = new UnbindEipAclsResponse();
        this.request("UnbindEipAcls", req, resp, cb);
    }
    /**
     * 黑石EIP查询接口
     * @param {DescribeEipsRequest} req
     * @param {function(string, DescribeEipsResponse):void} cb
     * @public
     */
    DescribeEips(req, cb) {
        const resp = new DescribeEipsResponse();
        this.request("DescribeEips", req, resp, cb);
    }
    /**
     * 黑石EIP绑定VPCIP
     * @param {BindVpcIpRequest} req
     * @param {function(string, BindVpcIpResponse):void} cb
     * @public
     */
    BindVpcIp(req, cb) {
        const resp = new BindVpcIpResponse();
        this.request("BindVpcIp", req, resp, cb);
    }
    /**
     * 批量解绑物理机弹性公网IP接口
     * @param {UnbindRsListRequest} req
     * @param {function(string, UnbindRsListResponse):void} cb
     * @public
     */
    UnbindRsList(req, cb) {
        const resp = new UnbindRsListResponse();
        this.request("UnbindRsList", req, resp, cb);
    }
    /**
     * 查询弹性公网IP ACL
     * @param {DescribeEipAclsRequest} req
     * @param {function(string, DescribeEipAclsResponse):void} cb
     * @public
     */
    DescribeEipAcls(req, cb) {
        const resp = new DescribeEipAclsResponse();
        this.request("DescribeEipAcls", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=bmeip_client.js.map