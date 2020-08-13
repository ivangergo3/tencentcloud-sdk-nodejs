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
const QueryInvoiceResponse = models_1.Models.QueryInvoiceResponse;
const ApplyTradeRequest = models_1.Models.ApplyTradeRequest;
const QueryOutwardOrderResponse = models_1.Models.QueryOutwardOrderResponse;
const QueryExchangeRateResponse = models_1.Models.QueryExchangeRateResponse;
const QueryAcctInfoListResponse = models_1.Models.QueryAcctInfoListResponse;
const QueryAcctBindingRequest = models_1.Models.QueryAcctBindingRequest;
const ModifyMntMbrBindRelateAcctBankCodeRequest = models_1.Models.ModifyMntMbrBindRelateAcctBankCodeRequest;
const CreateMerchantResult = models_1.Models.CreateMerchantResult;
const ApplyPayerInfoResponse = models_1.Models.ApplyPayerInfoResponse;
const RevokeRechargeByThirdPayRequest = models_1.Models.RevokeRechargeByThirdPayRequest;
const QueryTradeRequest = models_1.Models.QueryTradeRequest;
const UnifiedOrderResponse = models_1.Models.UnifiedOrderResponse;
const QueryBankWithdrawCashDetailsRequest = models_1.Models.QueryBankWithdrawCashDetailsRequest;
const ApplyPayerinfoResult = models_1.Models.ApplyPayerinfoResult;
const QueryCustAcctIdBalanceRequest = models_1.Models.QueryCustAcctIdBalanceRequest;
const QueryPayerInfoResponse = models_1.Models.QueryPayerInfoResponse;
const WithdrawItem = models_1.Models.WithdrawItem;
const BindAcctRequest = models_1.Models.BindAcctRequest;
const ReviseMbrPropertyRequest = models_1.Models.ReviseMbrPropertyRequest;
const MigrateOrderRefundQueryResponse = models_1.Models.MigrateOrderRefundQueryResponse;
const RevResigterBillSupportWithdrawRequest = models_1.Models.RevResigterBillSupportWithdrawRequest;
const CreateInvoiceResponse = models_1.Models.CreateInvoiceResponse;
const AgentTaxPayment = models_1.Models.AgentTaxPayment;
const QueryOutwardOrderRequest = models_1.Models.QueryOutwardOrderRequest;
const QueryAnchorContractInfoRequest = models_1.Models.QueryAnchorContractInfoRequest;
const CreateRedInvoiceResult = models_1.Models.CreateRedInvoiceResult;
const QueryBankWithdrawCashDetailsResponse = models_1.Models.QueryBankWithdrawCashDetailsResponse;
const QueryItem = models_1.Models.QueryItem;
const ApplyTradeResult = models_1.Models.ApplyTradeResult;
const RefundOutSubOrderRefundList = models_1.Models.RefundOutSubOrderRefundList;
const UnbindRelateAcctRequest = models_1.Models.UnbindRelateAcctRequest;
const QueryAcctInfoListRequest = models_1.Models.QueryAcctInfoListRequest;
const CreateMerchantRequest = models_1.Models.CreateMerchantRequest;
const ApplyDeclareResult = models_1.Models.ApplyDeclareResult;
const DeleteAgentTaxPaymentInfoRequest = models_1.Models.DeleteAgentTaxPaymentInfoRequest;
const UnifiedOrderInSubOrderList = models_1.Models.UnifiedOrderInSubOrderList;
const QueryInvoiceResult = models_1.Models.QueryInvoiceResult;
const QueryAcctBindingResponse = models_1.Models.QueryAcctBindingResponse;
const QueryCommonTransferRechargeResponse = models_1.Models.QueryCommonTransferRechargeResponse;
const QueryTradeData = models_1.Models.QueryTradeData;
const ApplyReWithdrawalResponse = models_1.Models.ApplyReWithdrawalResponse;
const ModifyAgentTaxPaymentInfoResponse = models_1.Models.ModifyAgentTaxPaymentInfoResponse;
const RegisterBillRequest = models_1.Models.RegisterBillRequest;
const CreateInvoiceItem = models_1.Models.CreateInvoiceItem;
const ApplyOutwardOrderData = models_1.Models.ApplyOutwardOrderData;
const RevokeRechargeByThirdPayResponse = models_1.Models.RevokeRechargeByThirdPayResponse;
const ReviseMbrPropertyResponse = models_1.Models.ReviseMbrPropertyResponse;
const CreateAcctRequest = models_1.Models.CreateAcctRequest;
const CreateAgentTaxPaymentInfosRequest = models_1.Models.CreateAgentTaxPaymentInfosRequest;
const Acct = models_1.Models.Acct;
const CloseOrderResponse = models_1.Models.CloseOrderResponse;
const ApplyPayerinfoData = models_1.Models.ApplyPayerinfoData;
const CreateRedInvoiceItem = models_1.Models.CreateRedInvoiceItem;
const CheckAcctRequest = models_1.Models.CheckAcctRequest;
const CheckAmountResponse = models_1.Models.CheckAmountResponse;
const QueryOrderOutSubOrderList = models_1.Models.QueryOrderOutSubOrderList;
const QueryOutwardOrderResult = models_1.Models.QueryOutwardOrderResult;
const CreateAgentTaxPaymentInfosResponse = models_1.Models.CreateAgentTaxPaymentInfosResponse;
const QueryPayerInfoRequest = models_1.Models.QueryPayerInfoRequest;
const QueryMerchantInfoForManagementResponse = models_1.Models.QueryMerchantInfoForManagementResponse;
const QuerySingleTransactionStatusRequest = models_1.Models.QuerySingleTransactionStatusRequest;
const MerchantManagementList = models_1.Models.MerchantManagementList;
const CreateInvoiceResult = models_1.Models.CreateInvoiceResult;
const DescribeOrderStatusRequest = models_1.Models.DescribeOrderStatusRequest;
const QueryMerchantBalanceResult = models_1.Models.QueryMerchantBalanceResult;
const QuerySinglePayResult = models_1.Models.QuerySinglePayResult;
const QuerySinglePayResponse = models_1.Models.QuerySinglePayResponse;
const QueryCustAcctIdBalanceResponse = models_1.Models.QueryCustAcctIdBalanceResponse;
const QueryTradeResponse = models_1.Models.QueryTradeResponse;
const DownloadBillResponse = models_1.Models.DownloadBillResponse;
const RevokeMemberRechargeThirdPayResponse = models_1.Models.RevokeMemberRechargeThirdPayResponse;
const CreateRedInvoiceRequest = models_1.Models.CreateRedInvoiceRequest;
const ApplyOutwardOrderResponse = models_1.Models.ApplyOutwardOrderResponse;
const DeleteAgentTaxPaymentInfosRequest = models_1.Models.DeleteAgentTaxPaymentInfosRequest;
const WithdrawCashMembershipRequest = models_1.Models.WithdrawCashMembershipRequest;
const ExecuteMemberTransactionResponse = models_1.Models.ExecuteMemberTransactionResponse;
const BindRelateAcctUnionPayRequest = models_1.Models.BindRelateAcctUnionPayRequest;
const CreateInvoiceResultData = models_1.Models.CreateInvoiceResultData;
const RefundResponse = models_1.Models.RefundResponse;
const QueryAgentTaxPaymentBatchResponse = models_1.Models.QueryAgentTaxPaymentBatchResponse;
const DeleteAgentTaxPaymentInfosResponse = models_1.Models.DeleteAgentTaxPaymentInfosResponse;
const RegisterBillSupportWithdrawResponse = models_1.Models.RegisterBillSupportWithdrawResponse;
const QuerySmallAmountTransferResponse = models_1.Models.QuerySmallAmountTransferResponse;
const CreateRedInvoiceResponse = models_1.Models.CreateRedInvoiceResponse;
const QueryInvoiceResultData = models_1.Models.QueryInvoiceResultData;
const RechargeByThirdPayRequest = models_1.Models.RechargeByThirdPayRequest;
const QuerySingleTransactionStatusResponse = models_1.Models.QuerySingleTransactionStatusResponse;
const QueryAcctInfoRequest = models_1.Models.QueryAcctInfoRequest;
const DescribeChargeDetailResponse = models_1.Models.DescribeChargeDetailResponse;
const ApplyDeclareData = models_1.Models.ApplyDeclareData;
const TranItem = models_1.Models.TranItem;
const ClearItem = models_1.Models.ClearItem;
const MerchantManagementResult = models_1.Models.MerchantManagementResult;
const ApplyWithdrawalResponse = models_1.Models.ApplyWithdrawalResponse;
const QueryBankTransactionDetailsResponse = models_1.Models.QueryBankTransactionDetailsResponse;
const QueryPayerinfoData = models_1.Models.QueryPayerinfoData;
const QueryMerchantBalanceData = models_1.Models.QueryMerchantBalanceData;
const QueryMemberTransactionRequest = models_1.Models.QueryMemberTransactionRequest;
const QueryExchangerateResult = models_1.Models.QueryExchangerateResult;
const QueryOrderResponse = models_1.Models.QueryOrderResponse;
const QueryMerchantBalanceRequest = models_1.Models.QueryMerchantBalanceRequest;
const CreateAcctResponse = models_1.Models.CreateAcctResponse;
const DescribeChargeDetailRequest = models_1.Models.DescribeChargeDetailRequest;
const BindAcctResponse = models_1.Models.BindAcctResponse;
const CreateSinglePayRequest = models_1.Models.CreateSinglePayRequest;
const QueryExchangerateData = models_1.Models.QueryExchangerateData;
const WithdrawBill = models_1.Models.WithdrawBill;
const QueryRefundRequest = models_1.Models.QueryRefundRequest;
const BindRelateAccReUnionPayRequest = models_1.Models.BindRelateAccReUnionPayRequest;
const CreateCustAcctIdResponse = models_1.Models.CreateCustAcctIdResponse;
const QueryMerchantBalanceResponse = models_1.Models.QueryMerchantBalanceResponse;
const CreateSinglePayResult = models_1.Models.CreateSinglePayResult;
const QueryAcctInfoResponse = models_1.Models.QueryAcctInfoResponse;
const MigrateOrderRefundQueryRequest = models_1.Models.MigrateOrderRefundQueryRequest;
const QueryAgentTaxPaymentBatchRequest = models_1.Models.QueryAgentTaxPaymentBatchRequest;
const QueryPayerinfoResult = models_1.Models.QueryPayerinfoResult;
const TransferItem = models_1.Models.TransferItem;
const OrderItem = models_1.Models.OrderItem;
const RefundMemberTransactionRequest = models_1.Models.RefundMemberTransactionRequest;
const QueryMemberBindResponse = models_1.Models.QueryMemberBindResponse;
const RegisterBillResponse = models_1.Models.RegisterBillResponse;
const ApplyOutwardOrderRequest = models_1.Models.ApplyOutwardOrderRequest;
const UnbindRelateAcctResponse = models_1.Models.UnbindRelateAcctResponse;
const RechargeByThirdPayResponse = models_1.Models.RechargeByThirdPayResponse;
const CheckAmountRequest = models_1.Models.CheckAmountRequest;
const ApplyReWithdrawalRequest = models_1.Models.ApplyReWithdrawalRequest;
const AgentTaxPaymentBatch = models_1.Models.AgentTaxPaymentBatch;
const CreateInvoiceRequest = models_1.Models.CreateInvoiceRequest;
const QueryTradeResult = models_1.Models.QueryTradeResult;
const AnchorContractInfo = models_1.Models.AnchorContractInfo;
const RegisterBillSupportWithdrawRequest = models_1.Models.RegisterBillSupportWithdrawRequest;
const QueryDeclareResult = models_1.Models.QueryDeclareResult;
const CreateCustAcctIdRequest = models_1.Models.CreateCustAcctIdRequest;
const UnBindAcctResponse = models_1.Models.UnBindAcctResponse;
const QueryOrderOutOrderList = models_1.Models.QueryOrderOutOrderList;
const QueryCommonTransferRechargeRequest = models_1.Models.QueryCommonTransferRechargeRequest;
const QueryAgentStatementsResponse = models_1.Models.QueryAgentStatementsResponse;
const QueryOrderRequest = models_1.Models.QueryOrderRequest;
const CloseOrderRequest = models_1.Models.CloseOrderRequest;
const RevResigterBillSupportWithdrawResponse = models_1.Models.RevResigterBillSupportWithdrawResponse;
const QueryBalanceResponse = models_1.Models.QueryBalanceResponse;
const QueryOutwardOrderData = models_1.Models.QueryOutwardOrderData;
const TransactionItem = models_1.Models.TransactionItem;
const CheckAcctResponse = models_1.Models.CheckAcctResponse;
const QueryReconciliationDocumentResponse = models_1.Models.QueryReconciliationDocumentResponse;
const QueryApplicationMaterialResponse = models_1.Models.QueryApplicationMaterialResponse;
const CreateMerchantResultData = models_1.Models.CreateMerchantResultData;
const QueryExchangeRateRequest = models_1.Models.QueryExchangeRateRequest;
const QueryMerchantInfoForManagementRequest = models_1.Models.QueryMerchantInfoForManagementRequest;
const FileItem = models_1.Models.FileItem;
const RechargeMemberThirdPayRequest = models_1.Models.RechargeMemberThirdPayRequest;
const ApplyOutwardOrderResult = models_1.Models.ApplyOutwardOrderResult;
const ApplyPayerInfoRequest = models_1.Models.ApplyPayerInfoRequest;
const CreateSinglePayResponse = models_1.Models.CreateSinglePayResponse;
const RefundMemberTransactionResponse = models_1.Models.RefundMemberTransactionResponse;
const MigrateOrderRefundRequest = models_1.Models.MigrateOrderRefundRequest;
const QueryBankClearRequest = models_1.Models.QueryBankClearRequest;
const QueryInvoiceRequest = models_1.Models.QueryInvoiceRequest;
const ApplyApplicationMaterialResponse = models_1.Models.ApplyApplicationMaterialResponse;
const QueryBankTransactionDetailsRequest = models_1.Models.QueryBankTransactionDetailsRequest;
const DownloadBillRequest = models_1.Models.DownloadBillRequest;
const RevokeMemberRechargeThirdPayRequest = models_1.Models.RevokeMemberRechargeThirdPayRequest;
const ExecuteMemberTransactionRequest = models_1.Models.ExecuteMemberTransactionRequest;
const QuerySinglePayRequest = models_1.Models.QuerySinglePayRequest;
const ApplyTradeResponse = models_1.Models.ApplyTradeResponse;
const QueryBankClearResponse = models_1.Models.QueryBankClearResponse;
const RechargeMemberThirdPayResponse = models_1.Models.RechargeMemberThirdPayResponse;
const DescribeOrderStatusResponse = models_1.Models.DescribeOrderStatusResponse;
const WithdrawCashMembershipResponse = models_1.Models.WithdrawCashMembershipResponse;
const QueryApplicationMaterialRequest = models_1.Models.QueryApplicationMaterialRequest;
const CreateMerchantResponse = models_1.Models.CreateMerchantResponse;
const QueryMemberTransactionResponse = models_1.Models.QueryMemberTransactionResponse;
const ApplyTradeData = models_1.Models.ApplyTradeData;
const QuerySinglePayItem = models_1.Models.QuerySinglePayItem;
const ApplyApplicationMaterialRequest = models_1.Models.ApplyApplicationMaterialRequest;
const QueryAcctItem = models_1.Models.QueryAcctItem;
const ModifyAgentTaxPaymentInfoRequest = models_1.Models.ModifyAgentTaxPaymentInfoRequest;
const QuerySmallAmountTransferRequest = models_1.Models.QuerySmallAmountTransferRequest;
const BindRelateAcctSmallAmountResponse = models_1.Models.BindRelateAcctSmallAmountResponse;
const ModifyMntMbrBindRelateAcctBankCodeResponse = models_1.Models.ModifyMntMbrBindRelateAcctBankCodeResponse;
const QueryBalanceRequest = models_1.Models.QueryBalanceRequest;
const ApplyWithdrawalRequest = models_1.Models.ApplyWithdrawalRequest;
const CreateRedInvoiceResultData = models_1.Models.CreateRedInvoiceResultData;
const BindRelateAcctSmallAmountRequest = models_1.Models.BindRelateAcctSmallAmountRequest;
const QueryRefundResponse = models_1.Models.QueryRefundResponse;
const Order = models_1.Models.Order;
const QueryDeclareData = models_1.Models.QueryDeclareData;
const QueryMemberBindRequest = models_1.Models.QueryMemberBindRequest;
const QueryAgentStatementsRequest = models_1.Models.QueryAgentStatementsRequest;
const BindRelateAcctUnionPayResponse = models_1.Models.BindRelateAcctUnionPayResponse;
const QueryReconciliationDocumentRequest = models_1.Models.QueryReconciliationDocumentRequest;
const UnifiedOrderRequest = models_1.Models.UnifiedOrderRequest;
const UnBindAcctRequest = models_1.Models.UnBindAcctRequest;
const MigrateOrderRefundResponse = models_1.Models.MigrateOrderRefundResponse;
const QueryAnchorContractInfoResponse = models_1.Models.QueryAnchorContractInfoResponse;
const DeleteAgentTaxPaymentInfoResponse = models_1.Models.DeleteAgentTaxPaymentInfoResponse;
const RefundRequest = models_1.Models.RefundRequest;
const BindRelateAccReUnionPayResponse = models_1.Models.BindRelateAccReUnionPayResponse;
const BankCardItem = models_1.Models.BankCardItem;
/**
 * cpdp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cpdp.tencentcloudapi.com", "2019-08-20", credential, region, profile);
    }
    /**
     * 会员间交易-不验证。此接口可以实现会员间的余额的交易，实现资金在会员之间流动。
     * @param {QueryMemberTransactionRequest} req
     * @param {function(string, QueryMemberTransactionResponse):void} cb
     * @public
     */
    QueryMemberTransaction(req, cb) {
        const resp = new QueryMemberTransactionResponse();
        this.request("QueryMemberTransaction", req, resp, cb);
    }
    /**
     * 银企直连-单笔支付状态查询接口
     * @param {QuerySinglePayRequest} req
     * @param {function(string, QuerySinglePayResponse):void} cb
     * @public
     */
    QuerySinglePay(req, cb) {
        const resp = new QuerySinglePayResponse();
        this.request("QuerySinglePay", req, resp, cb);
    }
    /**
     * 跨境-付款人查询
     * @param {QueryPayerInfoRequest} req
     * @param {function(string, QueryPayerInfoResponse):void} cb
     * @public
     */
    QueryPayerInfo(req, cb) {
        const resp = new QueryPayerInfoResponse();
        this.request("QueryPayerInfo", req, resp, cb);
    }
    /**
     * 查询单笔订单交易状态
     * @param {DescribeOrderStatusRequest} req
     * @param {function(string, DescribeOrderStatusResponse):void} cb
     * @public
     */
    DescribeOrderStatus(req, cb) {
        const resp = new DescribeOrderStatusResponse();
        this.request("DescribeOrderStatus", req, resp, cb);
    }
    /**
     * 直播平台-查询主播签约信息
     * @param {QueryAnchorContractInfoRequest} req
     * @param {function(string, QueryAnchorContractInfoResponse):void} cb
     * @public
     */
    QueryAnchorContractInfo(req, cb) {
        const resp = new QueryAnchorContractInfoResponse();
        this.request("QueryAnchorContractInfo", req, resp, cb);
    }
    /**
     * 商户绑定提现银行卡，每个商户只能绑定一张提现银行卡
     * @param {BindAcctRequest} req
     * @param {function(string, BindAcctResponse):void} cb
     * @public
     */
    BindAcct(req, cb) {
        const resp = new BindAcctResponse();
        this.request("BindAcct", req, resp, cb);
    }
    /**
     * 会员绑定提现账户-小额鉴权。会员申请绑定提现账户，绑定后从会员子账户中提现到绑定账户。
转账鉴权有两种形式：往账鉴权和来账鉴权。
往账鉴权：该接口发起成功后，银行会向提现账户转入小于等于0.5元的随机金额，并短信通知客户查看，客户查看后，需将收到的金额大小，在电商平台页面上回填，并通知银行。银行验证通过后，完成提现账户绑定。
来账鉴权：该接口发起成功后，银行以短信通知客户查看，客户查看后，需通过待绑定的账户往市场的监管账户转入短信上指定的金额。银行检索到该笔指定金额的来账是源自待绑定账户，则绑定成功。平安银行的账户，即BankType送1时，大小额行号和超级网银号都不用送。
     * @param {BindRelateAcctSmallAmountRequest} req
     * @param {function(string, BindRelateAcctSmallAmountResponse):void} cb
     * @public
     */
    BindRelateAcctSmallAmount(req, cb) {
        const resp = new BindRelateAcctSmallAmountResponse();
        this.request("BindRelateAcctSmallAmount", req, resp, cb);
    }
    /**
     * 商户提现
     * @param {ApplyWithdrawalRequest} req
     * @param {function(string, ApplyWithdrawalResponse):void} cb
     * @public
     */
    ApplyWithdrawal(req, cb) {
        const resp = new ApplyWithdrawalResponse();
        this.request("ApplyWithdrawal", req, resp, cb);
    }
    /**
     * 直播平台-修改代理商完税信息
     * @param {ModifyAgentTaxPaymentInfoRequest} req
     * @param {function(string, ModifyAgentTaxPaymentInfoResponse):void} cb
     * @public
     */
    ModifyAgentTaxPaymentInfo(req, cb) {
        const resp = new ModifyAgentTaxPaymentInfoResponse();
        this.request("ModifyAgentTaxPaymentInfo", req, resp, cb);
    }
    /**
     * 会员绑定信息查询。查询标志为“单个会员”的情况下，返回该会员的有效的绑定账户信息。
查询标志为“全部会员”的情况下，返回市场下的全部的有效的绑定账户信息。查询标志为“单个会员的证件信息”的情况下，返回市场下的指定的会员的留存在电商见证宝系统的证件信息。
     * @param {QueryMemberBindRequest} req
     * @param {function(string, QueryMemberBindResponse):void} cb
     * @public
     */
    QueryMemberBind(req, cb) {
        const resp = new QueryMemberBindResponse();
        this.request("QueryMemberBind", req, resp, cb);
    }
    /**
     * 维护会员绑定提现账户联行号。此接口可以支持市场修改会员的提现账户的开户行信息，具体包括开户行行名、开户行的银行联行号（大小额联行号）和超级网银行号。
     * @param {ModifyMntMbrBindRelateAcctBankCodeRequest} req
     * @param {function(string, ModifyMntMbrBindRelateAcctBankCodeResponse):void} cb
     * @public
     */
    ModifyMntMbrBindRelateAcctBankCode(req, cb) {
        const resp = new ModifyMntMbrBindRelateAcctBankCodeResponse();
        this.request("ModifyMntMbrBindRelateAcctBankCode", req, resp, cb);
    }
    /**
     * 银企直连-单笔支付接口
     * @param {CreateSinglePayRequest} req
     * @param {function(string, CreateSinglePayResponse):void} cb
     * @public
     */
    CreateSinglePay(req, cb) {
        const resp = new CreateSinglePayResponse();
        this.request("CreateSinglePay", req, resp, cb);
    }
    /**
     * 查询充值明细接口
     * @param {DescribeChargeDetailRequest} req
     * @param {function(string, DescribeChargeDetailResponse):void} cb
     * @public
     */
    DescribeChargeDetail(req, cb) {
        const resp = new DescribeChargeDetailResponse();
        this.request("DescribeChargeDetail", req, resp, cb);
    }
    /**
     * 登记挂账(支持撤销)。此接口可实现把不明来账或自有资金等已登记在挂账子账户下的资金调整到普通会员子账户。即通过申请调用此接口，将会减少挂账子账户的资金，调增指定的普通会员子账户的可提现余额及可用余额。此接口不支持把挂账子账户资金清分到功能子账户。
     * @param {RegisterBillSupportWithdrawRequest} req
     * @param {function(string, RegisterBillSupportWithdrawResponse):void} cb
     * @public
     */
    RegisterBillSupportWithdraw(req, cb) {
        const resp = new RegisterBillSupportWithdrawResponse();
        this.request("RegisterBillSupportWithdraw", req, resp, cb);
    }
    /**
     * 会员子账户开立。会员在银行注册，并开立会员子账户，交易网会员代码即会员在平台端系统的会员编号。
平台需保存银行返回的子账户账号，后续交易接口都会用到。会员属性字段为预留扩展字段，当前必须送默认值。
     * @param {CreateCustAcctIdRequest} req
     * @param {function(string, CreateCustAcctIdResponse):void} cb
     * @public
     */
    CreateCustAcctId(req, cb) {
        const resp = new CreateCustAcctIdResponse();
        this.request("CreateCustAcctId", req, resp, cb);
    }
    /**
     * 会员提现-不验证。此接口受理会员发起的提现申请。会员子账户的可提现余额、可用余额会减少，市场的资金汇总账户(监管账户)会减少相应的发生金额，提现到会员申请的收款账户。
     * @param {WithdrawCashMembershipRequest} req
     * @param {function(string, WithdrawCashMembershipResponse):void} cb
     * @public
     */
    WithdrawCashMembership(req, cb) {
        const resp = new WithdrawCashMembershipResponse();
        this.request("WithdrawCashMembership", req, resp, cb);
    }
    /**
     * 通过此接口关闭此前已创建的订单，关闭后，用户将无法继续付款。仅能关闭创建后未支付的订单
     * @param {CloseOrderRequest} req
     * @param {function(string, CloseOrderResponse):void} cb
     * @public
     */
    CloseOrder(req, cb) {
        const resp = new CloseOrderResponse();
        this.request("CloseOrder", req, resp, cb);
    }
    /**
     * 跨境-查询汇率
     * @param {QueryExchangeRateRequest} req
     * @param {function(string, QueryExchangeRateResponse):void} cb
     * @public
     */
    QueryExchangeRate(req, cb) {
        const resp = new QueryExchangeRateResponse();
        this.request("QueryExchangeRate", req, resp, cb);
    }
    /**
     * 智慧零售-查询管理端商户
     * @param {QueryMerchantInfoForManagementRequest} req
     * @param {function(string, QueryMerchantInfoForManagementResponse):void} cb
     * @public
     */
    QueryMerchantInfoForManagement(req, cb) {
        const resp = new QueryMerchantInfoForManagementResponse();
        this.request("QueryMerchantInfoForManagement", req, resp, cb);
    }
    /**
     * 修改会员属性-普通商户子账户。修改会员的会员属性。
     * @param {ReviseMbrPropertyRequest} req
     * @param {function(string, ReviseMbrPropertyResponse):void} cb
     * @public
     */
    ReviseMbrProperty(req, cb) {
        const resp = new ReviseMbrPropertyResponse();
        this.request("ReviseMbrProperty", req, resp, cb);
    }
    /**
     * 子商户余额查询
     * @param {QueryBalanceRequest} req
     * @param {function(string, QueryBalanceResponse):void} cb
     * @public
     */
    QueryBalance(req, cb) {
        const resp = new QueryBalanceResponse();
        this.request("QueryBalance", req, resp, cb);
    }
    /**
     * 撤销会员在途充值(经第三方支付渠道)接口
     * @param {RevokeRechargeByThirdPayRequest} req
     * @param {function(string, RevokeRechargeByThirdPayResponse):void} cb
     * @public
     */
    RevokeRechargeByThirdPay(req, cb) {
        const resp = new RevokeRechargeByThirdPayResponse();
        this.request("RevokeRechargeByThirdPay", req, resp, cb);
    }
    /**
     * 直播平台-查询批次信息
     * @param {QueryAgentTaxPaymentBatchRequest} req
     * @param {function(string, QueryAgentTaxPaymentBatchResponse):void} cb
     * @public
     */
    QueryAgentTaxPaymentBatch(req, cb) {
        const resp = new QueryAgentTaxPaymentBatchResponse();
        this.request("QueryAgentTaxPaymentBatch", req, resp, cb);
    }
    /**
     * 直播平台-删除代理商完税信息
     * @param {DeleteAgentTaxPaymentInfoRequest} req
     * @param {function(string, DeleteAgentTaxPaymentInfoResponse):void} cb
     * @public
     */
    DeleteAgentTaxPaymentInfo(req, cb) {
        const resp = new DeleteAgentTaxPaymentInfoResponse();
        this.request("DeleteAgentTaxPaymentInfo", req, resp, cb);
    }
    /**
     * 会员绑定提现账户-银联鉴权。用于会员申请绑定提现账户，申请后银行前往银联验证卡信息：姓名、证件、卡号、银行预留手机是否相符，相符则发送给会员手机动态验证码并返回成功，不相符则返回失败。
平台接收到银行返回成功后，进入输入动态验证码的页面，有效期120秒，若120秒未输入，客户可点击重新发送动态验证码，这个步骤重新调用该接口即可。
平安银行的账户，大小额行号和超级网银号都不用送。
超级网银号：单笔转账金额不超过5万，不限制笔数，只用选XX银行，不用具体到支行，可实时知道对方是否收款成功。
大小额联行号：单笔转账可超过5万，需具体到支行，不能实时知道对方是否收款成功。金额超过5万的，在工作日的8点30-17点间才会成功。
     * @param {BindRelateAcctUnionPayRequest} req
     * @param {function(string, BindRelateAcctUnionPayResponse):void} cb
     * @public
     */
    BindRelateAcctUnionPay(req, cb) {
        const resp = new BindRelateAcctUnionPayResponse();
        this.request("BindRelateAcctUnionPay", req, resp, cb);
    }
    /**
     * 直播平台-代理商完税信息录入
     * @param {CreateAgentTaxPaymentInfosRequest} req
     * @param {function(string, CreateAgentTaxPaymentInfosResponse):void} cb
     * @public
     */
    CreateAgentTaxPaymentInfos(req, cb) {
        const resp = new CreateAgentTaxPaymentInfosResponse();
        this.request("CreateAgentTaxPaymentInfos", req, resp, cb);
    }
    /**
     * 会员解绑提现账户。此接口可以支持会员解除名下的绑定账户关系。
     * @param {UnbindRelateAcctRequest} req
     * @param {function(string, UnbindRelateAcctResponse):void} cb
     * @public
     */
    UnbindRelateAcct(req, cb) {
        const resp = new UnbindRelateAcctResponse();
        this.request("UnbindRelateAcct", req, resp, cb);
    }
    /**
     * 跨境-成功申报材料查询。查询成功入库的申报材料。
     * @param {QueryApplicationMaterialRequest} req
     * @param {function(string, QueryApplicationMaterialResponse):void} cb
     * @public
     */
    QueryApplicationMaterial(req, cb) {
        const resp = new QueryApplicationMaterialResponse();
        this.request("QueryApplicationMaterial", req, resp, cb);
    }
    /**
     * 直播平台-删除代理商完税信息
     * @param {DeleteAgentTaxPaymentInfosRequest} req
     * @param {function(string, DeleteAgentTaxPaymentInfosResponse):void} cb
     * @public
     */
    DeleteAgentTaxPaymentInfos(req, cb) {
        const resp = new DeleteAgentTaxPaymentInfosResponse();
        this.request("DeleteAgentTaxPaymentInfos", req, resp, cb);
    }
    /**
     * 查询普通转账充值明细。接口用于查询会员主动转账进资金汇总账户的明细情况。若会员使用绑定账号转入，则直接入账到会员子账户。若未使用绑定账号转入，则系统无法自动清分到对应子账户，则转入挂账子账户由平台自行清分。若是 “见证+收单充值”T0充值记录时备注Note为“见证+收单充值,订单号” 此接口可以查到T0到账的“见证+收单充值”充值记录。
     * @param {QueryCommonTransferRechargeRequest} req
     * @param {function(string, QueryCommonTransferRechargeResponse):void} cb
     * @public
     */
    QueryCommonTransferRecharge(req, cb) {
        const resp = new QueryCommonTransferRechargeResponse();
        this.request("QueryCommonTransferRecharge", req, resp, cb);
    }
    /**
     * 账单下载接口，根据本接口返回的URL地址，在D+1日下载对账单。注意，本接口返回的URL地址有时效，请尽快下载。URL超时时效后，请重新调用本接口再次获取。
     * @param {DownloadBillRequest} req
     * @param {function(string, DownloadBillResponse):void} cb
     * @public
     */
    DownloadBill(req, cb) {
        const resp = new DownloadBillResponse();
        this.request("DownloadBill", req, resp, cb);
    }
    /**
     * 聚鑫-查询子账户绑定银行卡
     * @param {QueryAcctBindingRequest} req
     * @param {function(string, QueryAcctBindingResponse):void} cb
     * @public
     */
    QueryAcctBinding(req, cb) {
        const resp = new QueryAcctBindingResponse();
        this.request("QueryAcctBinding", req, resp, cb);
    }
    /**
     * 根据订单号，或者用户Id，查询支付订单状态
     * @param {QueryOrderRequest} req
     * @param {function(string, QueryOrderResponse):void} cb
     * @public
     */
    QueryOrder(req, cb) {
        const resp = new QueryOrderResponse();
        this.request("QueryOrder", req, resp, cb);
    }
    /**
     * 智慧零售-发票开具
     * @param {CreateInvoiceRequest} req
     * @param {function(string, CreateInvoiceResponse):void} cb
     * @public
     */
    CreateInvoice(req, cb) {
        const resp = new CreateInvoiceResponse();
        this.request("CreateInvoice", req, resp, cb);
    }
    /**
     * 正常结算提现失败情况下，发起重新提现的请求接口
     * @param {ApplyReWithdrawalRequest} req
     * @param {function(string, ApplyReWithdrawalResponse):void} cb
     * @public
     */
    ApplyReWithdrawal(req, cb) {
        const resp = new ApplyReWithdrawalResponse();
        this.request("ApplyReWithdrawal", req, resp, cb);
    }
    /**
     * 跨境-付款人申请。通过该接口提交付款人信息并进行 kyc 审核。
     * @param {ApplyPayerInfoRequest} req
     * @param {function(string, ApplyPayerInfoResponse):void} cb
     * @public
     */
    ApplyPayerInfo(req, cb) {
        const resp = new ApplyPayerInfoResponse();
        this.request("ApplyPayerInfo", req, resp, cb);
    }
    /**
     * 跨境-对接方账户余额查询
     * @param {QueryMerchantBalanceRequest} req
     * @param {function(string, QueryMerchantBalanceResponse):void} cb
     * @public
     */
    QueryMerchantBalance(req, cb) {
        const resp = new QueryMerchantBalanceResponse();
        this.request("QueryMerchantBalance", req, resp, cb);
    }
    /**
     * 跨境-贸易材料明细查询。
     * @param {QueryTradeRequest} req
     * @param {function(string, QueryTradeResponse):void} cb
     * @public
     */
    QueryTrade(req, cb) {
        const resp = new QueryTradeResponse();
        this.request("QueryTrade", req, resp, cb);
    }
    /**
     * 会员间交易退款
     * @param {RefundMemberTransactionRequest} req
     * @param {function(string, RefundMemberTransactionResponse):void} cb
     * @public
     */
    RefundMemberTransaction(req, cb) {
        const resp = new RefundMemberTransactionResponse();
        this.request("RefundMemberTransaction", req, resp, cb);
    }
    /**
     * 跨境-提交贸易材料。通过提交贸易材料接口可为对接方累计贸易额度，在额度范围内可发起汇兑汇出交易。
     * @param {ApplyTradeRequest} req
     * @param {function(string, ApplyTradeResponse):void} cb
     * @public
     */
    ApplyTrade(req, cb) {
        const resp = new ApplyTradeResponse();
        this.request("ApplyTrade", req, resp, cb);
    }
    /**
     * 查询银行在途清算结果。查询时间段内交易网的在途清算结果。
     * @param {QueryBankClearRequest} req
     * @param {function(string, QueryBankClearResponse):void} cb
     * @public
     */
    QueryBankClear(req, cb) {
        const resp = new QueryBankClearResponse();
        this.request("QueryBankClear", req, resp, cb);
    }
    /**
     * 查询银行单笔交易状态。查询单笔交易的状态。
     * @param {QuerySingleTransactionStatusRequest} req
     * @param {function(string, QuerySingleTransactionStatusResponse):void} cb
     * @public
     */
    QuerySingleTransactionStatus(req, cb) {
        const resp = new QuerySingleTransactionStatusResponse();
        this.request("QuerySingleTransactionStatus", req, resp, cb);
    }
    /**
     * 直播平台-查询代理商结算单链接
     * @param {QueryAgentStatementsRequest} req
     * @param {function(string, QueryAgentStatementsResponse):void} cb
     * @public
     */
    QueryAgentStatements(req, cb) {
        const resp = new QueryAgentStatementsResponse();
        this.request("QueryAgentStatements", req, resp, cb);
    }
    /**
     * 会员绑定提现账户-回填银联鉴权短信码。用于会员填写动态验证码后，发往银行进行验证，验证成功则完成绑定。
     * @param {BindRelateAccReUnionPayRequest} req
     * @param {function(string, BindRelateAccReUnionPayResponse):void} cb
     * @public
     */
    BindRelateAccReUnionPay(req, cb) {
        const resp = new BindRelateAccReUnionPayResponse();
        this.request("BindRelateAccReUnionPay", req, resp, cb);
    }
    /**
     * 智慧零售-发票红冲
     * @param {CreateRedInvoiceRequest} req
     * @param {function(string, CreateRedInvoiceResponse):void} cb
     * @public
     */
    CreateRedInvoice(req, cb) {
        const resp = new CreateRedInvoiceResponse();
        this.request("CreateRedInvoice", req, resp, cb);
    }
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时。
     * @param {MigrateOrderRefundQueryRequest} req
     * @param {function(string, MigrateOrderRefundQueryResponse):void} cb
     * @public
     */
    MigrateOrderRefundQuery(req, cb) {
        const resp = new MigrateOrderRefundQueryResponse();
        this.request("MigrateOrderRefundQuery", req, resp, cb);
    }
    /**
     * 验证鉴权金额。此接口可受理BindRelateAcctSmallAmount接口发起的转账金额（往账鉴权方式）的验证处理。若所回填的验证金额验证通过，则会绑定原申请中的银行账户作为提现账户。通过此接口也可以查得BindRelateAcctSmallAmount接口发起的来账鉴权方式的申请的当前状态。
     * @param {CheckAmountRequest} req
     * @param {function(string, CheckAmountResponse):void} cb
     * @public
     */
    CheckAmount(req, cb) {
        const resp = new CheckAmountResponse();
        this.request("CheckAmount", req, resp, cb);
    }
    /**
     * 登记挂账撤销。此接口可以实现把RegisterBillSupportWithdraw接口完成的登记挂账进行撤销，即调减普通会员子账户的可提现和可用余额，调增挂账子账户的可用余额。
     * @param {RevResigterBillSupportWithdrawRequest} req
     * @param {function(string, RevResigterBillSupportWithdrawResponse):void} cb
     * @public
     */
    RevResigterBillSupportWithdraw(req, cb) {
        const resp = new RevResigterBillSupportWithdrawResponse();
        this.request("RevResigterBillSupportWithdraw", req, resp, cb);
    }
    /**
     * 撤销会员在途充值(经第三方支付渠道)
     * @param {RevokeMemberRechargeThirdPayRequest} req
     * @param {function(string, RevokeMemberRechargeThirdPayResponse):void} cb
     * @public
     */
    RevokeMemberRechargeThirdPay(req, cb) {
        const resp = new RevokeMemberRechargeThirdPayResponse();
        this.request("RevokeMemberRechargeThirdPay", req, resp, cb);
    }
    /**
     * 查询银行时间段内交易明细。查询时间段的会员成功交易。
     * @param {QueryBankTransactionDetailsRequest} req
     * @param {function(string, QueryBankTransactionDetailsResponse):void} cb
     * @public
     */
    QueryBankTransactionDetails(req, cb) {
        const resp = new QueryBankTransactionDetailsResponse();
        this.request("QueryBankTransactionDetails", req, resp, cb);
    }
    /**
     * 跨境-提交申报材料。申报材料的主体是付款人，需要提前调用【跨境-付款人申请】接口提交付款人信息且审核通过后调用。
     * @param {ApplyApplicationMaterialRequest} req
     * @param {function(string, ApplyApplicationMaterialResponse):void} cb
     * @public
     */
    ApplyApplicationMaterial(req, cb) {
        const resp = new ApplyApplicationMaterialResponse();
        this.request("ApplyApplicationMaterial", req, resp, cb);
    }
    /**
     * 跨境-汇出指令申请。通过该接口可将对接方账户中的人民币余额汇兑成外币，再汇出至指定银行账户。
     * @param {ApplyOutwardOrderRequest} req
     * @param {function(string, ApplyOutwardOrderResponse):void} cb
     * @public
     */
    ApplyOutwardOrder(req, cb) {
        const resp = new ApplyOutwardOrderResponse();
        this.request("ApplyOutwardOrder", req, resp, cb);
    }
    /**
     * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。
     * @param {RefundRequest} req
     * @param {function(string, RefundResponse):void} cb
     * @public
     */
    Refund(req, cb) {
        const resp = new RefundResponse();
        this.request("Refund", req, resp, cb);
    }
    /**
     * 查询银行子账户余额。查询会员子账户以及平台的功能子账户的余额。
     * @param {QueryCustAcctIdBalanceRequest} req
     * @param {function(string, QueryCustAcctIdBalanceResponse):void} cb
     * @public
     */
    QueryCustAcctIdBalance(req, cb) {
        const resp = new QueryCustAcctIdBalanceResponse();
        this.request("QueryCustAcctIdBalance", req, resp, cb);
    }
    /**
     * 查询小额鉴权转账结果。查询小额往账鉴权的转账状态。
     * @param {QuerySmallAmountTransferRequest} req
     * @param {function(string, QuerySmallAmountTransferResponse):void} cb
     * @public
     */
    QuerySmallAmountTransfer(req, cb) {
        const resp = new QuerySmallAmountTransferResponse();
        this.request("QuerySmallAmountTransfer", req, resp, cb);
    }
    /**
     * 山姆聚合支付项目-存量订单退款接口。可以通过本接口将支付款全部或部分退还给付款方，在收到用户退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。
     * @param {MigrateOrderRefundRequest} req
     * @param {function(string, MigrateOrderRefundResponse):void} cb
     * @public
     */
    MigrateOrderRefund(req, cb) {
        const resp = new MigrateOrderRefundResponse();
        this.request("MigrateOrderRefund", req, resp, cb);
    }
    /**
     * 会员在途充值(经第三方支付渠道)接口
     * @param {RechargeByThirdPayRequest} req
     * @param {function(string, RechargeByThirdPayResponse):void} cb
     * @public
     */
    RechargeByThirdPay(req, cb) {
        const resp = new RechargeByThirdPayResponse();
        this.request("RechargeByThirdPay", req, resp, cb);
    }
    /**
     * 见证宝-会员在途充值(经第三方支付渠道)
     * @param {RechargeMemberThirdPayRequest} req
     * @param {function(string, RechargeMemberThirdPayResponse):void} cb
     * @public
     */
    RechargeMemberThirdPay(req, cb) {
        const resp = new RechargeMemberThirdPayResponse();
        this.request("RechargeMemberThirdPay", req, resp, cb);
    }
    /**
     * 智慧零售-发票查询
     * @param {QueryInvoiceRequest} req
     * @param {function(string, QueryInvoiceResponse):void} cb
     * @public
     */
    QueryInvoice(req, cb) {
        const resp = new QueryInvoiceResponse();
        this.request("QueryInvoice", req, resp, cb);
    }
    /**
     * 智慧零售-商户注册
     * @param {CreateMerchantRequest} req
     * @param {function(string, CreateMerchantResponse):void} cb
     * @public
     */
    CreateMerchant(req, cb) {
        const resp = new CreateMerchantResponse();
        this.request("CreateMerchant", req, resp, cb);
    }
    /**
     * 子商户入驻聚鑫平台
     * @param {CreateAcctRequest} req
     * @param {function(string, CreateAcctResponse):void} cb
     * @public
     */
    CreateAcct(req, cb) {
        const resp = new CreateAcctResponse();
        this.request("CreateAcct", req, resp, cb);
    }
    /**
     * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     * @param {UnifiedOrderRequest} req
     * @param {function(string, UnifiedOrderResponse):void} cb
     * @public
     */
    UnifiedOrder(req, cb) {
        const resp = new UnifiedOrderResponse();
        this.request("UnifiedOrder", req, resp, cb);
    }
    /**
     * 登记挂账(支持撤销)
     * @param {RegisterBillRequest} req
     * @param {function(string, RegisterBillResponse):void} cb
     * @public
     */
    RegisterBill(req, cb) {
        const resp = new RegisterBillResponse();
        this.request("RegisterBill", req, resp, cb);
    }
    /**
     * 聚鑫-开户信息查询
     * @param {QueryAcctInfoRequest} req
     * @param {function(string, QueryAcctInfoResponse):void} cb
     * @public
     */
    QueryAcctInfo(req, cb) {
        const resp = new QueryAcctInfoResponse();
        this.request("QueryAcctInfo", req, resp, cb);
    }
    /**
     * 会员间交易接口
     * @param {ExecuteMemberTransactionRequest} req
     * @param {function(string, ExecuteMemberTransactionResponse):void} cb
     * @public
     */
    ExecuteMemberTransaction(req, cb) {
        const resp = new ExecuteMemberTransactionResponse();
        this.request("ExecuteMemberTransaction", req, resp, cb);
    }
    /**
     * 跨境-查询汇出结果
     * @param {QueryOutwardOrderRequest} req
     * @param {function(string, QueryOutwardOrderResponse):void} cb
     * @public
     */
    QueryOutwardOrder(req, cb) {
        const resp = new QueryOutwardOrderResponse();
        this.request("QueryOutwardOrder", req, resp, cb);
    }
    /**
     * 商户解除绑定的提现银行卡
     * @param {UnBindAcctRequest} req
     * @param {function(string, UnBindAcctResponse):void} cb
     * @public
     */
    UnBindAcct(req, cb) {
        const resp = new UnBindAcctResponse();
        this.request("UnBindAcct", req, resp, cb);
    }
    /**
     * 查询银行时间段内清分提现明细。查询银行时间段内清分提现明细接口：若为“见证+收单退款”“见证+收单充值”记录时备注Note为“见证+收单充值,订单号”“见证+收单退款,订单号”，此接口可以查到T0/T1的充值明细和退款记录。查询标志：充值记录仍用3清分选项查询，退款记录同提现用2选项查询。
     * @param {QueryBankWithdrawCashDetailsRequest} req
     * @param {function(string, QueryBankWithdrawCashDetailsResponse):void} cb
     * @public
     */
    QueryBankWithdrawCashDetails(req, cb) {
        const resp = new QueryBankWithdrawCashDetailsResponse();
        this.request("QueryBankWithdrawCashDetails", req, resp, cb);
    }
    /**
     * 聚鑫-开户信息列表查询, 查询某一段时间的开户信息
     * @param {QueryAcctInfoListRequest} req
     * @param {function(string, QueryAcctInfoListResponse):void} cb
     * @public
     */
    QueryAcctInfoList(req, cb) {
        const resp = new QueryAcctInfoListResponse();
        this.request("QueryAcctInfoList", req, resp, cb);
    }
    /**
     * 查询对账文件信息。平台调用该接口获取需下载对账文件的文件名称以及密钥。 平台获取到信息后， 可以再调用OPENAPI的文件下载功能。
     * @param {QueryReconciliationDocumentRequest} req
     * @param {function(string, QueryReconciliationDocumentResponse):void} cb
     * @public
     */
    QueryReconciliationDocument(req, cb) {
        const resp = new QueryReconciliationDocumentResponse();
        this.request("QueryReconciliationDocument", req, resp, cb);
    }
    /**
     * 商户绑定提现银行卡的验证接口
     * @param {CheckAcctRequest} req
     * @param {function(string, CheckAcctResponse):void} cb
     * @public
     */
    CheckAcct(req, cb) {
        const resp = new CheckAcctResponse();
        this.request("CheckAcct", req, resp, cb);
    }
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     * @param {QueryRefundRequest} req
     * @param {function(string, QueryRefundResponse):void} cb
     * @public
     */
    QueryRefund(req, cb) {
        const resp = new QueryRefundResponse();
        this.request("QueryRefund", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cpdp_client.js.map