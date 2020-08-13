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
const QueryRequest = models_1.Models.QueryRequest;
const GetBlockTransactionListForUserResponse = models_1.Models.GetBlockTransactionListForUserResponse;
const SendTransactionHandlerResponse = models_1.Models.SendTransactionHandlerResponse;
const ApplyUserCertRequest = models_1.Models.ApplyUserCertRequest;
const TransByDynamicContractHandlerRequest = models_1.Models.TransByDynamicContractHandlerRequest;
const GetTransListHandlerResponse = models_1.Models.GetTransListHandlerResponse;
const DeployDynamicContractHandlerResponse = models_1.Models.DeployDynamicContractHandlerResponse;
const ApplyUserCertResponse = models_1.Models.ApplyUserCertResponse;
const GetInvokeTxRequest = models_1.Models.GetInvokeTxRequest;
const InvokeResponse = models_1.Models.InvokeResponse;
const DownloadUserCertResponse = models_1.Models.DownloadUserCertResponse;
const GetLatesdTransactionListRequest = models_1.Models.GetLatesdTransactionListRequest;
const GetTransactionDetailForUserRequest = models_1.Models.GetTransactionDetailForUserRequest;
const GetBlockListResponse = models_1.Models.GetBlockListResponse;
const SrvInvokeRequest = models_1.Models.SrvInvokeRequest;
const BlockByNumberHandlerResponse = models_1.Models.BlockByNumberHandlerResponse;
const GetTransByHashHandlerResponse = models_1.Models.GetTransByHashHandlerResponse;
const DeployDynamicContractHandlerRequest = models_1.Models.DeployDynamicContractHandlerRequest;
const GetLatesdTransactionListResponse = models_1.Models.GetLatesdTransactionListResponse;
const DownloadUserCertRequest = models_1.Models.DownloadUserCertRequest;
const GetClusterSummaryResponse = models_1.Models.GetClusterSummaryResponse;
const TransByDynamicContractHandlerResponse = models_1.Models.TransByDynamicContractHandlerResponse;
const PeerSet = models_1.Models.PeerSet;
const GetBlockTransactionListForUserRequest = models_1.Models.GetBlockTransactionListForUserRequest;
const SrvInvokeResponse = models_1.Models.SrvInvokeResponse;
const GetBlockListHandlerRequest = models_1.Models.GetBlockListHandlerRequest;
const GetClusterSummaryRequest = models_1.Models.GetClusterSummaryRequest;
const Block = models_1.Models.Block;
const GetBlockListRequest = models_1.Models.GetBlockListRequest;
const BcosTransInfo = models_1.Models.BcosTransInfo;
const InvokeRequest = models_1.Models.InvokeRequest;
const GetInvokeTxResponse = models_1.Models.GetInvokeTxResponse;
const GetBlockListHandlerResponse = models_1.Models.GetBlockListHandlerResponse;
const GetTransactionDetailForUserResponse = models_1.Models.GetTransactionDetailForUserResponse;
const GetTransListHandlerRequest = models_1.Models.GetTransListHandlerRequest;
const SendTransactionHandlerRequest = models_1.Models.SendTransactionHandlerRequest;
const TransactionItem = models_1.Models.TransactionItem;
const BlockByNumberHandlerRequest = models_1.Models.BlockByNumberHandlerRequest;
const BcosBlockObj = models_1.Models.BcosBlockObj;
const GetTransByHashHandlerRequest = models_1.Models.GetTransByHashHandlerRequest;
const QueryResponse = models_1.Models.QueryResponse;
const EndorserGroup = models_1.Models.EndorserGroup;
/**
 * tbaas client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tbaas.tencentcloudapi.com", "2018-04-16", credential, region, profile);
    }
    /**
     * 申请用户证书
     * @param {ApplyUserCertRequest} req
     * @param {function(string, ApplyUserCertResponse):void} cb
     * @public
     */
    ApplyUserCert(req, cb) {
        const resp = new ApplyUserCertResponse();
        this.request("ApplyUserCert", req, resp, cb);
    }
    /**
     * 根据动态部署的合约发送交易
     * @param {TransByDynamicContractHandlerRequest} req
     * @param {function(string, TransByDynamicContractHandlerResponse):void} cb
     * @public
     */
    TransByDynamicContractHandler(req, cb) {
        const resp = new TransByDynamicContractHandlerResponse();
        this.request("TransByDynamicContractHandler", req, resp, cb);
    }
    /**
     * trustsql服务统一接口
     * @param {SrvInvokeRequest} req
     * @param {function(string, SrvInvokeResponse):void} cb
     * @public
     */
    SrvInvoke(req, cb) {
        const resp = new SrvInvokeResponse();
        this.request("SrvInvoke", req, resp, cb);
    }
    /**
     * 新增交易
     * @param {InvokeRequest} req
     * @param {function(string, InvokeResponse):void} cb
     * @public
     */
    Invoke(req, cb) {
        const resp = new InvokeResponse();
        this.request("Invoke", req, resp, cb);
    }
    /**
     * 获取区块链网络概要
     * @param {GetClusterSummaryRequest} req
     * @param {function(string, GetClusterSummaryResponse):void} cb
     * @public
     */
    GetClusterSummary(req, cb) {
        const resp = new GetClusterSummaryResponse();
        this.request("GetClusterSummary", req, resp, cb);
    }
    /**
     * 获取交易详情
     * @param {GetTransactionDetailForUserRequest} req
     * @param {function(string, GetTransactionDetailForUserResponse):void} cb
     * @public
     */
    GetTransactionDetailForUser(req, cb) {
        const resp = new GetTransactionDetailForUserResponse();
        this.request("GetTransactionDetailForUser", req, resp, cb);
    }
    /**
     * Bcos根据块高查询区块信息
     * @param {BlockByNumberHandlerRequest} req
     * @param {function(string, BlockByNumberHandlerResponse):void} cb
     * @public
     */
    BlockByNumberHandler(req, cb) {
        const resp = new BlockByNumberHandlerResponse();
        this.request("BlockByNumberHandler", req, resp, cb);
    }
    /**
     * Invoke异步调用结果查询
     * @param {GetInvokeTxRequest} req
     * @param {function(string, GetInvokeTxResponse):void} cb
     * @public
     */
    GetInvokeTx(req, cb) {
        const resp = new GetInvokeTxResponse();
        this.request("GetInvokeTx", req, resp, cb);
    }
    /**
     * Bcos分页查询当前群组的交易信息列表
     * @param {GetTransListHandlerRequest} req
     * @param {function(string, GetTransListHandlerResponse):void} cb
     * @public
     */
    GetTransListHandler(req, cb) {
        const resp = new GetTransListHandlerResponse();
        this.request("GetTransListHandler", req, resp, cb);
    }
    /**
     * Bcos发送交易
     * @param {SendTransactionHandlerRequest} req
     * @param {function(string, SendTransactionHandlerResponse):void} cb
     * @public
     */
    SendTransactionHandler(req, cb) {
        const resp = new SendTransactionHandlerResponse();
        this.request("SendTransactionHandler", req, resp, cb);
    }
    /**
     * 下载用户证书
     * @param {DownloadUserCertRequest} req
     * @param {function(string, DownloadUserCertResponse):void} cb
     * @public
     */
    DownloadUserCert(req, cb) {
        const resp = new DownloadUserCertResponse();
        this.request("DownloadUserCert", req, resp, cb);
    }
    /**
     * 获取区块内的交易列表
     * @param {GetBlockTransactionListForUserRequest} req
     * @param {function(string, GetBlockTransactionListForUserResponse):void} cb
     * @public
     */
    GetBlockTransactionListForUser(req, cb) {
        const resp = new GetBlockTransactionListForUserResponse();
        this.request("GetBlockTransactionListForUser", req, resp, cb);
    }
    /**
     * 查看当前网络下的所有区块列表，分页展示
     * @param {GetBlockListRequest} req
     * @param {function(string, GetBlockListResponse):void} cb
     * @public
     */
    GetBlockList(req, cb) {
        const resp = new GetBlockListResponse();
        this.request("GetBlockList", req, resp, cb);
    }
    /**
     * 查询交易
     * @param {QueryRequest} req
     * @param {function(string, QueryResponse):void} cb
     * @public
     */
    Query(req, cb) {
        const resp = new QueryResponse();
        this.request("Query", req, resp, cb);
    }
    /**
     * 动态部署合约
     * @param {DeployDynamicContractHandlerRequest} req
     * @param {function(string, DeployDynamicContractHandlerResponse):void} cb
     * @public
     */
    DeployDynamicContractHandler(req, cb) {
        const resp = new DeployDynamicContractHandlerResponse();
        this.request("DeployDynamicContractHandler", req, resp, cb);
    }
    /**
     * Bcos根据交易哈希查看交易详细信息
     * @param {GetTransByHashHandlerRequest} req
     * @param {function(string, GetTransByHashHandlerResponse):void} cb
     * @public
     */
    GetTransByHashHandler(req, cb) {
        const resp = new GetTransByHashHandlerResponse();
        this.request("GetTransByHashHandler", req, resp, cb);
    }
    /**
     * Bcos分页查询当前群组下的区块列表
     * @param {GetBlockListHandlerRequest} req
     * @param {function(string, GetBlockListHandlerResponse):void} cb
     * @public
     */
    GetBlockListHandler(req, cb) {
        const resp = new GetBlockListHandlerResponse();
        this.request("GetBlockListHandler", req, resp, cb);
    }
    /**
     * 获取最新交易列表
     * @param {GetLatesdTransactionListRequest} req
     * @param {function(string, GetLatesdTransactionListResponse):void} cb
     * @public
     */
    GetLatesdTransactionList(req, cb) {
        const resp = new GetLatesdTransactionListResponse();
        this.request("GetLatesdTransactionList", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tbaas_client.js.map