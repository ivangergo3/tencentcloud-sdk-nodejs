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
const TripleContent = models_1.Models.TripleContent;
const DescribeEntityRequest = models_1.Models.DescribeEntityRequest;
const DescribeTripleRequest = models_1.Models.DescribeTripleRequest;
const DescribeTripleResponse = models_1.Models.DescribeTripleResponse;
const DescribeRelationResponse = models_1.Models.DescribeRelationResponse;
const EntityRelationContent = models_1.Models.EntityRelationContent;
const DescribeRelationRequest = models_1.Models.DescribeRelationRequest;
const EntityRelationObject = models_1.Models.EntityRelationObject;
const DescribeEntityResponse = models_1.Models.DescribeEntityResponse;
const EntityRelationSubject = models_1.Models.EntityRelationSubject;
/**
 * tkgdq client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tkgdq.tencentcloudapi.com", "2019-04-11", credential, region, profile);
    }
    /**
     * 输入实体名称，返回实体相关的信息如实体别名、实体英文名、实体详细信息、相关实体等
     * @param {DescribeEntityRequest} req
     * @param {function(string, DescribeEntityResponse):void} cb
     * @public
     */
    DescribeEntity(req, cb) {
        const resp = new DescribeEntityResponse();
        this.request("DescribeEntity", req, resp, cb);
    }
    /**
     * 三元组查询，主要分为两类，SP查询和PO查询。SP查询表示已知主语和谓语查询宾语，PO查询表示已知宾语和谓语查询主语。每一个SP或PO查询都是一个可独立执行的查询，TQL支持SP查询的嵌套查询，即主语可以是一个嵌套的子查询。其他复杂的三元组查询方法，请参考官网API文档示例。
     * @param {DescribeTripleRequest} req
     * @param {function(string, DescribeTripleResponse):void} cb
     * @public
     */
    DescribeTriple(req, cb) {
        const resp = new DescribeTripleResponse();
        this.request("DescribeTriple", req, resp, cb);
    }
    /**
     * 输入两个实体，返回两个实体间的关系，例如马化腾与腾讯公司不仅是相关实体，二者还存在隶属关系（马化腾属于腾讯公司）。
     * @param {DescribeRelationRequest} req
     * @param {function(string, DescribeRelationResponse):void} cb
     * @public
     */
    DescribeRelation(req, cb) {
        const resp = new DescribeRelationResponse();
        this.request("DescribeRelation", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tkgdq_client.js.map