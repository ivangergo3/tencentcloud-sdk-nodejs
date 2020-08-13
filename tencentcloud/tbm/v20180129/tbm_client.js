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
const DescribeBrandPosCommentsRequest = models_1.Models.DescribeBrandPosCommentsRequest;
const BrandReportArticle = models_1.Models.BrandReportArticle;
const DescribeBrandSocialOpinionResponse = models_1.Models.DescribeBrandSocialOpinionResponse;
const DescribeBrandExposureResponse = models_1.Models.DescribeBrandExposureResponse;
const DescribeBrandPosCommentsResponse = models_1.Models.DescribeBrandPosCommentsResponse;
const DescribeIndustryNewsRequest = models_1.Models.DescribeIndustryNewsRequest;
const DescribeBrandSocialOpinionRequest = models_1.Models.DescribeBrandSocialOpinionRequest;
const DescribeBrandSocialReportRequest = models_1.Models.DescribeBrandSocialReportRequest;
const DescribeBrandSocialReportResponse = models_1.Models.DescribeBrandSocialReportResponse;
const DescribeBrandExposureRequest = models_1.Models.DescribeBrandExposureRequest;
const CommentInfo = models_1.Models.CommentInfo;
const StarPortrait = models_1.Models.StarPortrait;
const DateCount = models_1.Models.DateCount;
const GenderPortraitInfo = models_1.Models.GenderPortraitInfo;
const IndustryNews = models_1.Models.IndustryNews;
const ProvincePortrait = models_1.Models.ProvincePortrait;
const StarPortraitInfo = models_1.Models.StarPortraitInfo;
const AgePortraitInfo = models_1.Models.AgePortraitInfo;
const DescribeUserPortraitResponse = models_1.Models.DescribeUserPortraitResponse;
const DescribeBrandCommentCountRequest = models_1.Models.DescribeBrandCommentCountRequest;
const DescribeBrandMediaReportRequest = models_1.Models.DescribeBrandMediaReportRequest;
const DescribeBrandMediaReportResponse = models_1.Models.DescribeBrandMediaReportResponse;
const Comment = models_1.Models.Comment;
const ProvincePortraitInfo = models_1.Models.ProvincePortraitInfo;
const DescribeBrandCommentCountResponse = models_1.Models.DescribeBrandCommentCountResponse;
const MoviePortrait = models_1.Models.MoviePortrait;
const DescribeIndustryNewsResponse = models_1.Models.DescribeIndustryNewsResponse;
const DescribeBrandNegCommentsResponse = models_1.Models.DescribeBrandNegCommentsResponse;
const DescribeUserPortraitRequest = models_1.Models.DescribeUserPortraitRequest;
const DescribeBrandNegCommentsRequest = models_1.Models.DescribeBrandNegCommentsRequest;
const AgePortrait = models_1.Models.AgePortrait;
const MoviePortraitInfo = models_1.Models.MoviePortraitInfo;
const GenderPortrait = models_1.Models.GenderPortrait;
/**
 * tbm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tbm.tencentcloudapi.com", "2018-01-29", credential, region, profile);
    }
    /**
     * 通过分析洞察参与过品牌媒体互动的用户，比如公开发表品牌的新闻评论、在公开社交渠道发表过对品牌的评价观点等用户，返回用户的画像属性分布，例如性别、年龄、地域、喜爱的明星、喜爱的影视。
     * @param {DescribeUserPortraitRequest} req
     * @param {function(string, DescribeUserPortraitResponse):void} cb
     * @public
     */
    DescribeUserPortrait(req, cb) {
        const resp = new DescribeUserPortraitResponse();
        this.request("DescribeUserPortrait", req, resp, cb);
    }
    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌热门好评观点列表。
     * @param {DescribeBrandPosCommentsRequest} req
     * @param {function(string, DescribeBrandPosCommentsResponse):void} cb
     * @public
     */
    DescribeBrandPosComments(req, cb) {
        const resp = new DescribeBrandPosCommentsResponse();
        this.request("DescribeBrandPosComments", req, resp, cb);
    }
    /**
     * 根据客户定制的行业关键词，监测关键词出现在媒体网站（新闻媒体、网络门户、政府网站、微信公众号、天天快报等）发布资讯标题和正文中的报道数，以及文章列表、来源渠道、作者、发布时间等。
     * @param {DescribeIndustryNewsRequest} req
     * @param {function(string, DescribeIndustryNewsResponse):void} cb
     * @public
     */
    DescribeIndustryNews(req, cb) {
        const resp = new DescribeIndustryNewsResponse();
        this.request("DescribeIndustryNews", req, resp, cb);
    }
    /**
     * 监测品牌关键词出现在媒体网站（新闻媒体、网络门户、政府网站、微信公众号、天天快报等）发布资讯标题和正文中的报道数。按天输出结果。
     * @param {DescribeBrandMediaReportRequest} req
     * @param {function(string, DescribeBrandMediaReportResponse):void} cb
     * @public
     */
    DescribeBrandMediaReport(req, cb) {
        const resp = new DescribeBrandMediaReportResponse();
        this.request("DescribeBrandMediaReport", req, resp, cb);
    }
    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌热门差评观点列表。
     * @param {DescribeBrandNegCommentsRequest} req
     * @param {function(string, DescribeBrandNegCommentsResponse):void} cb
     * @public
     */
    DescribeBrandNegComments(req, cb) {
        const resp = new DescribeBrandNegCommentsResponse();
        this.request("DescribeBrandNegComments", req, resp, cb);
    }
    /**
     * 监测品牌关键词出现在微博、QQ兴趣部落、论坛、博客等个人公开贡献资讯中的条数。按天输出数据结果。
     * @param {DescribeBrandSocialReportRequest} req
     * @param {function(string, DescribeBrandSocialReportResponse):void} cb
     * @public
     */
    DescribeBrandSocialReport(req, cb) {
        const resp = new DescribeBrandSocialReportResponse();
        this.request("DescribeBrandSocialReport", req, resp, cb);
    }
    /**
     * 检测品牌关键词出现在微博、QQ兴趣部落、论坛、博客等个人公开贡献资讯中的内容，每天聚合近30天热度最高的观点列表。
     * @param {DescribeBrandSocialOpinionRequest} req
     * @param {function(string, DescribeBrandSocialOpinionResponse):void} cb
     * @public
     */
    DescribeBrandSocialOpinion(req, cb) {
        const resp = new DescribeBrandSocialOpinionResponse();
        this.request("DescribeBrandSocialOpinion", req, resp, cb);
    }
    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌好评与差评评价条数，按天输出结果。
     * @param {DescribeBrandCommentCountRequest} req
     * @param {function(string, DescribeBrandCommentCountResponse):void} cb
     * @public
     */
    DescribeBrandCommentCount(req, cb) {
        const resp = new DescribeBrandCommentCountResponse();
        this.request("DescribeBrandCommentCount", req, resp, cb);
    }
    /**
     * 监测品牌关键词命中文章标题或全文的文章篇数，按天输出数据。
     * @param {DescribeBrandExposureRequest} req
     * @param {function(string, DescribeBrandExposureResponse):void} cb
     * @public
     */
    DescribeBrandExposure(req, cb) {
        const resp = new DescribeBrandExposureResponse();
        this.request("DescribeBrandExposure", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tbm_client.js.map