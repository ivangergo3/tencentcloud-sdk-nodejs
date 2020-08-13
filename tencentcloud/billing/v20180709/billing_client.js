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
const CostComponentSet = models_1.Models.CostComponentSet;
const DescribeCostSummaryByProductRequest = models_1.Models.DescribeCostSummaryByProductRequest;
const DescribeCostSummaryByProjectResponse = models_1.Models.DescribeCostSummaryByProjectResponse;
const DescribeDosageDetailByDateRequest = models_1.Models.DescribeDosageDetailByDateRequest;
const ProjectSummaryOverviewItem = models_1.Models.ProjectSummaryOverviewItem;
const ConditionRegion = models_1.Models.ConditionRegion;
const DescribeBillSummaryByProductRequest = models_1.Models.DescribeBillSummaryByProductRequest;
const ConsumptionBusinessSummaryDataItem = models_1.Models.ConsumptionBusinessSummaryDataItem;
const DetailPoint = models_1.Models.DetailPoint;
const CostDetail = models_1.Models.CostDetail;
const DescribeBillSummaryByPayModeResponse = models_1.Models.DescribeBillSummaryByPayModeResponse;
const BillResourceSummary = models_1.Models.BillResourceSummary;
const DescribeBillSummaryByTagRequest = models_1.Models.DescribeBillSummaryByTagRequest;
const Conditions = models_1.Models.Conditions;
const DescribeBillSummaryByProductResponse = models_1.Models.DescribeBillSummaryByProductResponse;
const BillTagInfo = models_1.Models.BillTagInfo;
const DescribeBillSummaryByRegionResponse = models_1.Models.DescribeBillSummaryByRegionResponse;
const DetailSet = models_1.Models.DetailSet;
const BillTransactionInfo = models_1.Models.BillTransactionInfo;
const RegionSummaryOverviewItem = models_1.Models.RegionSummaryOverviewItem;
const ConsumptionResourceSummaryDataItem = models_1.Models.ConsumptionResourceSummaryDataItem;
const DescribeAccountBalanceRequest = models_1.Models.DescribeAccountBalanceRequest;
const DescribeBillDetailRequest = models_1.Models.DescribeBillDetailRequest;
const ConsumptionProjectSummaryDataItem = models_1.Models.ConsumptionProjectSummaryDataItem;
const DescribeCostSummaryByProductResponse = models_1.Models.DescribeCostSummaryByProductResponse;
const ProductInfo = models_1.Models.ProductInfo;
const DescribeDosageDetailByDateResponse = models_1.Models.DescribeDosageDetailByDateResponse;
const DescribeBillListResponse = models_1.Models.DescribeBillListResponse;
const DescribeAccountBalanceResponse = models_1.Models.DescribeAccountBalanceResponse;
const DescribeCostSummaryByRegionRequest = models_1.Models.DescribeCostSummaryByRegionRequest;
const BusinessSummaryOverviewItem = models_1.Models.BusinessSummaryOverviewItem;
const BillDetailComponent = models_1.Models.BillDetailComponent;
const ConsumptionSummaryTrend = models_1.Models.ConsumptionSummaryTrend;
const DescribeBillSummaryByRegionRequest = models_1.Models.DescribeBillSummaryByRegionRequest;
const DescribeBillSummaryByPayModeRequest = models_1.Models.DescribeBillSummaryByPayModeRequest;
const DescribeCostSummaryByProjectRequest = models_1.Models.DescribeCostSummaryByProjectRequest;
const ConsumptionRegionSummaryDataItem = models_1.Models.ConsumptionRegionSummaryDataItem;
const DescribeBillResourceSummaryResponse = models_1.Models.DescribeBillResourceSummaryResponse;
const ActionSummaryOverviewItem = models_1.Models.ActionSummaryOverviewItem;
const ConditionPayMode = models_1.Models.ConditionPayMode;
const DescribeDealsByCondRequest = models_1.Models.DescribeDealsByCondRequest;
const DescribeBillResourceSummaryRequest = models_1.Models.DescribeBillResourceSummaryRequest;
const DescribeBillListRequest = models_1.Models.DescribeBillListRequest;
const PayDealsResponse = models_1.Models.PayDealsResponse;
const BillDetail = models_1.Models.BillDetail;
const DescribeBillSummaryByTagResponse = models_1.Models.DescribeBillSummaryByTagResponse;
const TagSummaryOverviewItem = models_1.Models.TagSummaryOverviewItem;
const DescribeCostSummaryByResourceResponse = models_1.Models.DescribeCostSummaryByResourceResponse;
const DescribeBillDetailResponse = models_1.Models.DescribeBillDetailResponse;
const ConsumptionResourceSummaryConditionValue = models_1.Models.ConsumptionResourceSummaryConditionValue;
const Deal = models_1.Models.Deal;
const DescribeCostDetailRequest = models_1.Models.DescribeCostDetailRequest;
const DescribeDealsByCondResponse = models_1.Models.DescribeDealsByCondResponse;
const ConditionProject = models_1.Models.ConditionProject;
const ConsumptionSummaryTotal = models_1.Models.ConsumptionSummaryTotal;
const DescribeBillSummaryByProjectRequest = models_1.Models.DescribeBillSummaryByProjectRequest;
const DescribeBillSummaryByProjectResponse = models_1.Models.DescribeBillSummaryByProjectResponse;
const ConditionBusiness = models_1.Models.ConditionBusiness;
const DescribeCostSummaryByResourceRequest = models_1.Models.DescribeCostSummaryByResourceRequest;
const DescribeCostDetailResponse = models_1.Models.DescribeCostDetailResponse;
const PayDealsRequest = models_1.Models.PayDealsRequest;
const PayModeSummaryOverviewItem = models_1.Models.PayModeSummaryOverviewItem;
const BusinessSummaryTotal = models_1.Models.BusinessSummaryTotal;
const DescribeCostSummaryByRegionResponse = models_1.Models.DescribeCostSummaryByRegionResponse;
/**
 * billing client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("billing.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    /**
     * 获取云账户余额信息。
     * @param {DescribeAccountBalanceRequest} req
     * @param {function(string, DescribeAccountBalanceResponse):void} cb
     * @public
     */
    DescribeAccountBalance(req, cb) {
        const resp = new DescribeAccountBalanceResponse();
        this.request("DescribeAccountBalance", req, resp, cb);
    }
    /**
     * 按日期获取产品用量明细
     * @param {DescribeDosageDetailByDateRequest} req
     * @param {function(string, DescribeDosageDetailByDateResponse):void} cb
     * @public
     */
    DescribeDosageDetailByDate(req, cb) {
        const resp = new DescribeDosageDetailByDateResponse();
        this.request("DescribeDosageDetailByDate", req, resp, cb);
    }
    /**
     * 获取按资源汇总消耗详情
     * @param {DescribeCostSummaryByResourceRequest} req
     * @param {function(string, DescribeCostSummaryByResourceResponse):void} cb
     * @public
     */
    DescribeCostSummaryByResource(req, cb) {
        const resp = new DescribeCostSummaryByResourceResponse();
        this.request("DescribeCostSummaryByResource", req, resp, cb);
    }
    /**
     * 获取收支明细列表，支持翻页和参数过滤
     * @param {DescribeBillListRequest} req
     * @param {function(string, DescribeBillListResponse):void} cb
     * @public
     */
    DescribeBillList(req, cb) {
        const resp = new DescribeBillListResponse();
        this.request("DescribeBillList", req, resp, cb);
    }
    /**
     * 查询账单明细数据
     * @param {DescribeBillDetailRequest} req
     * @param {function(string, DescribeBillDetailResponse):void} cb
     * @public
     */
    DescribeBillDetail(req, cb) {
        const resp = new DescribeBillDetailResponse();
        this.request("DescribeBillDetail", req, resp, cb);
    }
    /**
     * 查询订单
     * @param {DescribeDealsByCondRequest} req
     * @param {function(string, DescribeDealsByCondResponse):void} cb
     * @public
     */
    DescribeDealsByCond(req, cb) {
        const resp = new DescribeDealsByCondResponse();
        this.request("DescribeDealsByCond", req, resp, cb);
    }
    /**
     * 获取按项目汇总消耗详情
     * @param {DescribeCostSummaryByProjectRequest} req
     * @param {function(string, DescribeCostSummaryByProjectResponse):void} cb
     * @public
     */
    DescribeCostSummaryByProject(req, cb) {
        const resp = new DescribeCostSummaryByProjectResponse();
        this.request("DescribeCostSummaryByProject", req, resp, cb);
    }
    /**
     * 获取按付费模式汇总费用分布
     * @param {DescribeBillSummaryByPayModeRequest} req
     * @param {function(string, DescribeBillSummaryByPayModeResponse):void} cb
     * @public
     */
    DescribeBillSummaryByPayMode(req, cb) {
        const resp = new DescribeBillSummaryByPayModeResponse();
        this.request("DescribeBillSummaryByPayMode", req, resp, cb);
    }
    /**
     * 查询账单资源汇总数据
     * @param {DescribeBillResourceSummaryRequest} req
     * @param {function(string, DescribeBillResourceSummaryResponse):void} cb
     * @public
     */
    DescribeBillResourceSummary(req, cb) {
        const resp = new DescribeBillResourceSummaryResponse();
        this.request("DescribeBillResourceSummary", req, resp, cb);
    }
    /**
     * 获取按地域汇总消耗详情
     * @param {DescribeCostSummaryByRegionRequest} req
     * @param {function(string, DescribeCostSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeCostSummaryByRegion(req, cb) {
        const resp = new DescribeCostSummaryByRegionResponse();
        this.request("DescribeCostSummaryByRegion", req, resp, cb);
    }
    /**
     * 获取按地域汇总费用分布
     * @param {DescribeBillSummaryByRegionRequest} req
     * @param {function(string, DescribeBillSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeBillSummaryByRegion(req, cb) {
        const resp = new DescribeBillSummaryByRegionResponse();
        this.request("DescribeBillSummaryByRegion", req, resp, cb);
    }
    /**
     * 获取按项目汇总费用分布
     * @param {DescribeBillSummaryByProjectRequest} req
     * @param {function(string, DescribeBillSummaryByProjectResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProject(req, cb) {
        const resp = new DescribeBillSummaryByProjectResponse();
        this.request("DescribeBillSummaryByProject", req, resp, cb);
    }
    /**
     * 获取产品汇总费用分布
     * @param {DescribeBillSummaryByProductRequest} req
     * @param {function(string, DescribeBillSummaryByProductResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProduct(req, cb) {
        const resp = new DescribeBillSummaryByProductResponse();
        this.request("DescribeBillSummaryByProduct", req, resp, cb);
    }
    /**
     * 获取按标签汇总费用分布
     * @param {DescribeBillSummaryByTagRequest} req
     * @param {function(string, DescribeBillSummaryByTagResponse):void} cb
     * @public
     */
    DescribeBillSummaryByTag(req, cb) {
        const resp = new DescribeBillSummaryByTagResponse();
        this.request("DescribeBillSummaryByTag", req, resp, cb);
    }
    /**
     * 获取按产品汇总消耗详情
     * @param {DescribeCostSummaryByProductRequest} req
     * @param {function(string, DescribeCostSummaryByProductResponse):void} cb
     * @public
     */
    DescribeCostSummaryByProduct(req, cb) {
        const resp = new DescribeCostSummaryByProductResponse();
        this.request("DescribeCostSummaryByProduct", req, resp, cb);
    }
    /**
     * 查询消耗明细
     * @param {DescribeCostDetailRequest} req
     * @param {function(string, DescribeCostDetailResponse):void} cb
     * @public
     */
    DescribeCostDetail(req, cb) {
        const resp = new DescribeCostDetailResponse();
        this.request("DescribeCostDetail", req, resp, cb);
    }
    /**
     * 支付订单
     * @param {PayDealsRequest} req
     * @param {function(string, PayDealsResponse):void} cb
     * @public
     */
    PayDeals(req, cb) {
        const resp = new PayDealsResponse();
        this.request("PayDeals", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=billing_client.js.map