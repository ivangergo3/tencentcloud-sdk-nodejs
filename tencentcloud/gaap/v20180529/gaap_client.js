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
const RegionDetail = models_1.Models.RegionDetail;
const DescribeUDPListenersRequest = models_1.Models.DescribeUDPListenersRequest;
const DeleteProxyGroupRequest = models_1.Models.DeleteProxyGroupRequest;
const DescribeResourcesByTagRequest = models_1.Models.DescribeResourcesByTagRequest;
const DescribeListenerStatisticsRequest = models_1.Models.DescribeListenerStatisticsRequest;
const DescribeProxyAndStatisticsListenersResponse = models_1.Models.DescribeProxyAndStatisticsListenersResponse;
const DeleteRuleRequest = models_1.Models.DeleteRuleRequest;
const BindRuleRealServersRequest = models_1.Models.BindRuleRealServersRequest;
const DescribeHTTPSListenersResponse = models_1.Models.DescribeHTTPSListenersResponse;
const ModifyProxiesProjectRequest = models_1.Models.ModifyProxiesProjectRequest;
const DomainErrorPageInfo = models_1.Models.DomainErrorPageInfo;
const AccessConfiguration = models_1.Models.AccessConfiguration;
const DescribeCertificateDetailRequest = models_1.Models.DescribeCertificateDetailRequest;
const TagResourceInfo = models_1.Models.TagResourceInfo;
const SetAuthenticationResponse = models_1.Models.SetAuthenticationResponse;
const DescribeProxyGroupStatisticsResponse = models_1.Models.DescribeProxyGroupStatisticsResponse;
const DescribeResourcesByTagResponse = models_1.Models.DescribeResourcesByTagResponse;
const ModifyGroupDomainConfigRequest = models_1.Models.ModifyGroupDomainConfigRequest;
const BandwidthPriceGradient = models_1.Models.BandwidthPriceGradient;
const DescribeHTTPListenersRequest = models_1.Models.DescribeHTTPListenersRequest;
const ModifyRealServerNameResponse = models_1.Models.ModifyRealServerNameResponse;
const DescribeGroupDomainConfigResponse = models_1.Models.DescribeGroupDomainConfigResponse;
const ModifyCertificateResponse = models_1.Models.ModifyCertificateResponse;
const OpenSecurityPolicyRequest = models_1.Models.OpenSecurityPolicyRequest;
const DeleteDomainErrorPageInfoRequest = models_1.Models.DeleteDomainErrorPageInfoRequest;
const DescribeListenerRealServersRequest = models_1.Models.DescribeListenerRealServersRequest;
const DescribeProxyGroupStatisticsRequest = models_1.Models.DescribeProxyGroupStatisticsRequest;
const DescribeHTTPSListenersRequest = models_1.Models.DescribeHTTPSListenersRequest;
const DescribeAccessRegionsByDestRegionResponse = models_1.Models.DescribeAccessRegionsByDestRegionResponse;
const DescribeCountryAreaMappingRequest = models_1.Models.DescribeCountryAreaMappingRequest;
const CheckProxyCreateResponse = models_1.Models.CheckProxyCreateResponse;
const ModifyCertificateRequest = models_1.Models.ModifyCertificateRequest;
const DestroyProxiesRequest = models_1.Models.DestroyProxiesRequest;
const DescribeRulesResponse = models_1.Models.DescribeRulesResponse;
const DescribeProxiesResponse = models_1.Models.DescribeProxiesResponse;
const CreateRuleResponse = models_1.Models.CreateRuleResponse;
const ModifyRealServerNameRequest = models_1.Models.ModifyRealServerNameRequest;
const DeleteProxyGroupResponse = models_1.Models.DeleteProxyGroupResponse;
const CreateDomainErrorPageInfoResponse = models_1.Models.CreateDomainErrorPageInfoResponse;
const BindListenerRealServersRequest = models_1.Models.BindListenerRealServersRequest;
const ModifyProxyConfigurationRequest = models_1.Models.ModifyProxyConfigurationRequest;
const DescribeRuleRealServersRequest = models_1.Models.DescribeRuleRealServersRequest;
const DescribeGroupDomainConfigRequest = models_1.Models.DescribeGroupDomainConfigRequest;
const CreateProxyGroupDomainRequest = models_1.Models.CreateProxyGroupDomainRequest;
const CreateTCPListenersRequest = models_1.Models.CreateTCPListenersRequest;
const CertificateDetail = models_1.Models.CertificateDetail;
const DescribeListenerStatisticsResponse = models_1.Models.DescribeListenerStatisticsResponse;
const DescribeProxyGroupDetailsRequest = models_1.Models.DescribeProxyGroupDetailsRequest;
const CloseProxiesRequest = models_1.Models.CloseProxiesRequest;
const DescribeListenerRealServersResponse = models_1.Models.DescribeListenerRealServersResponse;
const DescribeProxyDetailRequest = models_1.Models.DescribeProxyDetailRequest;
const ModifyTCPListenerAttributeRequest = models_1.Models.ModifyTCPListenerAttributeRequest;
const DeleteDomainRequest = models_1.Models.DeleteDomainRequest;
const OpenSecurityPolicyResponse = models_1.Models.OpenSecurityPolicyResponse;
const ModifyCertificateAttributesResponse = models_1.Models.ModifyCertificateAttributesResponse;
const DescribeSecurityPolicyDetailResponse = models_1.Models.DescribeSecurityPolicyDetailResponse;
const CreateHTTPListenerResponse = models_1.Models.CreateHTTPListenerResponse;
const ModifyUDPListenerAttributeResponse = models_1.Models.ModifyUDPListenerAttributeResponse;
const CreateProxyGroupRequest = models_1.Models.CreateProxyGroupRequest;
const RuleInfo = models_1.Models.RuleInfo;
const RealServerStatus = models_1.Models.RealServerStatus;
const DescribeTCPListenersResponse = models_1.Models.DescribeTCPListenersResponse;
const DescribeRulesRequest = models_1.Models.DescribeRulesRequest;
const DescribeCountryAreaMappingResponse = models_1.Models.DescribeCountryAreaMappingResponse;
const DescribeRealServersResponse = models_1.Models.DescribeRealServersResponse;
const ModifyHTTPListenerAttributeResponse = models_1.Models.ModifyHTTPListenerAttributeResponse;
const DescribeRealServerStatisticsRequest = models_1.Models.DescribeRealServerStatisticsRequest;
const BindRealServerInfo = models_1.Models.BindRealServerInfo;
const DescribeProxyAndStatisticsListenersRequest = models_1.Models.DescribeProxyAndStatisticsListenersRequest;
const DescribeAccessRegionsResponse = models_1.Models.DescribeAccessRegionsResponse;
const DeleteListenersRequest = models_1.Models.DeleteListenersRequest;
const DescribeSecurityRulesRequest = models_1.Models.DescribeSecurityRulesRequest;
const DescribeDestRegionsResponse = models_1.Models.DescribeDestRegionsResponse;
const DescribeDomainErrorPageInfoByIdsResponse = models_1.Models.DescribeDomainErrorPageInfoByIdsResponse;
const DescribeProxiesRequest = models_1.Models.DescribeProxiesRequest;
const BindListenerRealServersResponse = models_1.Models.BindListenerRealServersResponse;
const ModifyProxyGroupAttributeResponse = models_1.Models.ModifyProxyGroupAttributeResponse;
const ListenerInfo = models_1.Models.ListenerInfo;
const DescribeUDPListenersResponse = models_1.Models.DescribeUDPListenersResponse;
const CreateUDPListenersRequest = models_1.Models.CreateUDPListenersRequest;
const ModifyRuleAttributeRequest = models_1.Models.ModifyRuleAttributeRequest;
const CreateSecurityPolicyResponse = models_1.Models.CreateSecurityPolicyResponse;
const TCPListener = models_1.Models.TCPListener;
const CreateSecurityRulesResponse = models_1.Models.CreateSecurityRulesResponse;
const DescribeAccessRegionsRequest = models_1.Models.DescribeAccessRegionsRequest;
const CreateCertificateRequest = models_1.Models.CreateCertificateRequest;
const DescribeCertificatesResponse = models_1.Models.DescribeCertificatesResponse;
const DescribeProxyGroupListResponse = models_1.Models.DescribeProxyGroupListResponse;
const DescribeDomainErrorPageInfoRequest = models_1.Models.DescribeDomainErrorPageInfoRequest;
const HTTPSListener = models_1.Models.HTTPSListener;
const DomainAccessRegionDict = models_1.Models.DomainAccessRegionDict;
const CloseSecurityPolicyRequest = models_1.Models.CloseSecurityPolicyRequest;
const ModifyCertificateAttributesRequest = models_1.Models.ModifyCertificateAttributesRequest;
const TagPair = models_1.Models.TagPair;
const CreateSecurityRulesRequest = models_1.Models.CreateSecurityRulesRequest;
const DescribeCertificatesRequest = models_1.Models.DescribeCertificatesRequest;
const DescribeProxiesStatusRequest = models_1.Models.DescribeProxiesStatusRequest;
const ProxyStatus = models_1.Models.ProxyStatus;
const DescribeGroupAndStatisticsProxyResponse = models_1.Models.DescribeGroupAndStatisticsProxyResponse;
const CreateDomainResponse = models_1.Models.CreateDomainResponse;
const ModifyProxiesProjectResponse = models_1.Models.ModifyProxiesProjectResponse;
const ModifyDomainRequest = models_1.Models.ModifyDomainRequest;
const ModifySecurityRuleRequest = models_1.Models.ModifySecurityRuleRequest;
const NationCountryInnerInfo = models_1.Models.NationCountryInnerInfo;
const DescribeAccessRegionsByDestRegionRequest = models_1.Models.DescribeAccessRegionsByDestRegionRequest;
const RealServer = models_1.Models.RealServer;
const DescribeRealServersRequest = models_1.Models.DescribeRealServersRequest;
const StatisticsDataInfo = models_1.Models.StatisticsDataInfo;
const ProxyGroupInfo = models_1.Models.ProxyGroupInfo;
const CreateProxyGroupDomainResponse = models_1.Models.CreateProxyGroupDomainResponse;
const Certificate = models_1.Models.Certificate;
const DescribeDomainErrorPageInfoResponse = models_1.Models.DescribeDomainErrorPageInfoResponse;
const DestroyProxiesResponse = models_1.Models.DestroyProxiesResponse;
const DescribeRuleRealServersResponse = models_1.Models.DescribeRuleRealServersResponse;
const DescribeRealServersStatusRequest = models_1.Models.DescribeRealServersStatusRequest;
const ModifyHTTPListenerAttributeRequest = models_1.Models.ModifyHTTPListenerAttributeRequest;
const CreateProxyRequest = models_1.Models.CreateProxyRequest;
const DeleteCertificateRequest = models_1.Models.DeleteCertificateRequest;
const ModifySecurityRuleResponse = models_1.Models.ModifySecurityRuleResponse;
const DescribeProxiesStatusResponse = models_1.Models.DescribeProxiesStatusResponse;
const RemoveRealServersRequest = models_1.Models.RemoveRealServersRequest;
const CreateDomainRequest = models_1.Models.CreateDomainRequest;
const CreateRuleRequest = models_1.Models.CreateRuleRequest;
const DeleteSecurityPolicyRequest = models_1.Models.DeleteSecurityPolicyRequest;
const HTTPListener = models_1.Models.HTTPListener;
const ProxyGroupDetail = models_1.Models.ProxyGroupDetail;
const CreateHTTPListenerRequest = models_1.Models.CreateHTTPListenerRequest;
const CloseSecurityPolicyResponse = models_1.Models.CloseSecurityPolicyResponse;
const DescribeRegionAndPriceResponse = models_1.Models.DescribeRegionAndPriceResponse;
const AddRealServersResponse = models_1.Models.AddRealServersResponse;
const CloseProxiesResponse = models_1.Models.CloseProxiesResponse;
const DeleteCertificateResponse = models_1.Models.DeleteCertificateResponse;
const SecurityPolicyRuleIn = models_1.Models.SecurityPolicyRuleIn;
const ProxySimpleInfo = models_1.Models.ProxySimpleInfo;
const DescribeDestRegionsRequest = models_1.Models.DescribeDestRegionsRequest;
const ModifyRuleAttributeResponse = models_1.Models.ModifyRuleAttributeResponse;
const CreateTCPListenersResponse = models_1.Models.CreateTCPListenersResponse;
const DescribeSecurityPolicyDetailRequest = models_1.Models.DescribeSecurityPolicyDetailRequest;
const ModifyDomainResponse = models_1.Models.ModifyDomainResponse;
const DescribeRulesByRuleIdsResponse = models_1.Models.DescribeRulesByRuleIdsResponse;
const SetAuthenticationRequest = models_1.Models.SetAuthenticationRequest;
const InquiryPriceCreateProxyResponse = models_1.Models.InquiryPriceCreateProxyResponse;
const NewRealServer = models_1.Models.NewRealServer;
const DescribeHTTPListenersResponse = models_1.Models.DescribeHTTPListenersResponse;
const HttpHeaderParam = models_1.Models.HttpHeaderParam;
const DescribeRealServerStatisticsResponse = models_1.Models.DescribeRealServerStatisticsResponse;
const AccessRegionDomainConf = models_1.Models.AccessRegionDomainConf;
const DeleteDomainResponse = models_1.Models.DeleteDomainResponse;
const DeleteListenersResponse = models_1.Models.DeleteListenersResponse;
const RuleCheckParams = models_1.Models.RuleCheckParams;
const CreateSecurityPolicyRequest = models_1.Models.CreateSecurityPolicyRequest;
const ModifyHTTPSListenerAttributeResponse = models_1.Models.ModifyHTTPSListenerAttributeResponse;
const AccessRegionDetial = models_1.Models.AccessRegionDetial;
const DescribeProxyGroupListRequest = models_1.Models.DescribeProxyGroupListRequest;
const SecurityPolicyRuleOut = models_1.Models.SecurityPolicyRuleOut;
const BindRealServer = models_1.Models.BindRealServer;
const GroupStatisticsInfo = models_1.Models.GroupStatisticsInfo;
const CreateProxyGroupResponse = models_1.Models.CreateProxyGroupResponse;
const CreateHTTPSListenerResponse = models_1.Models.CreateHTTPSListenerResponse;
const DeleteRuleResponse = models_1.Models.DeleteRuleResponse;
const BindRuleRealServersResponse = models_1.Models.BindRuleRealServersResponse;
const DescribeGroupAndStatisticsProxyRequest = models_1.Models.DescribeGroupAndStatisticsProxyRequest;
const ModifyUDPListenerAttributeRequest = models_1.Models.ModifyUDPListenerAttributeRequest;
const DeleteSecurityRulesResponse = models_1.Models.DeleteSecurityRulesResponse;
const ModifyTCPListenerAttributeResponse = models_1.Models.ModifyTCPListenerAttributeResponse;
const CountryAreaMap = models_1.Models.CountryAreaMap;
const MetricStatisticsInfo = models_1.Models.MetricStatisticsInfo;
const DescribeProxyDetailResponse = models_1.Models.DescribeProxyDetailResponse;
const DeleteSecurityPolicyResponse = models_1.Models.DeleteSecurityPolicyResponse;
const CreateUDPListenersResponse = models_1.Models.CreateUDPListenersResponse;
const ModifyHTTPSListenerAttributeRequest = models_1.Models.ModifyHTTPSListenerAttributeRequest;
const DescribeProxyStatisticsRequest = models_1.Models.DescribeProxyStatisticsRequest;
const DomainRuleSet = models_1.Models.DomainRuleSet;
const DescribeTCPListenersRequest = models_1.Models.DescribeTCPListenersRequest;
const CreateCertificateResponse = models_1.Models.CreateCertificateResponse;
const ModifyGroupDomainConfigResponse = models_1.Models.ModifyGroupDomainConfigResponse;
const DescribeProxyStatisticsResponse = models_1.Models.DescribeProxyStatisticsResponse;
const DescribeRealServersStatusResponse = models_1.Models.DescribeRealServersStatusResponse;
const ModifyProxyGroupAttributeRequest = models_1.Models.ModifyProxyGroupAttributeRequest;
const CloseProxyGroupResponse = models_1.Models.CloseProxyGroupResponse;
const DeleteDomainErrorPageInfoResponse = models_1.Models.DeleteDomainErrorPageInfoResponse;
const ModifyProxiesAttributeResponse = models_1.Models.ModifyProxiesAttributeResponse;
const DescribeDomainErrorPageInfoByIdsRequest = models_1.Models.DescribeDomainErrorPageInfoByIdsRequest;
const CheckProxyCreateRequest = models_1.Models.CheckProxyCreateRequest;
const DescribeRegionAndPriceRequest = models_1.Models.DescribeRegionAndPriceRequest;
const AddRealServersRequest = models_1.Models.AddRealServersRequest;
const ModifyProxiesAttributeRequest = models_1.Models.ModifyProxiesAttributeRequest;
const DescribeSecurityRulesResponse = models_1.Models.DescribeSecurityRulesResponse;
const CertificateAliasInfo = models_1.Models.CertificateAliasInfo;
const CreateHTTPSListenerRequest = models_1.Models.CreateHTTPSListenerRequest;
const DeleteSecurityRulesRequest = models_1.Models.DeleteSecurityRulesRequest;
const DescribeCertificateDetailResponse = models_1.Models.DescribeCertificateDetailResponse;
const OpenProxyGroupResponse = models_1.Models.OpenProxyGroupResponse;
const ProxyIdDict = models_1.Models.ProxyIdDict;
const Filter = models_1.Models.Filter;
const CreateProxyResponse = models_1.Models.CreateProxyResponse;
const OpenProxiesRequest = models_1.Models.OpenProxiesRequest;
const InquiryPriceCreateProxyRequest = models_1.Models.InquiryPriceCreateProxyRequest;
const DescribeProxyGroupDetailsResponse = models_1.Models.DescribeProxyGroupDetailsResponse;
const OpenProxyGroupRequest = models_1.Models.OpenProxyGroupRequest;
const UDPListener = models_1.Models.UDPListener;
const ProxyInfo = models_1.Models.ProxyInfo;
const RemoveRealServersResponse = models_1.Models.RemoveRealServersResponse;
const DescribeRulesByRuleIdsRequest = models_1.Models.DescribeRulesByRuleIdsRequest;
const RealServerBindSetReq = models_1.Models.RealServerBindSetReq;
const CloseProxyGroupRequest = models_1.Models.CloseProxyGroupRequest;
const OpenProxiesResponse = models_1.Models.OpenProxiesResponse;
const ModifyProxyConfigurationResponse = models_1.Models.ModifyProxyConfigurationResponse;
const CreateDomainErrorPageInfoRequest = models_1.Models.CreateDomainErrorPageInfoRequest;
/**
 * gaap client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("gaap.tencentcloudapi.com", "2018-05-29", credential, region, profile);
    }
    /**
     * 本接口（DescribeProxyGroupList）用于拉取通道组列表及各通道组基本信息。
     * @param {DescribeProxyGroupListRequest} req
     * @param {function(string, DescribeProxyGroupListResponse):void} cb
     * @public
     */
    DescribeProxyGroupList(req, cb) {
        const resp = new DescribeProxyGroupListResponse();
        this.request("DescribeProxyGroupList", req, resp, cb);
    }
    /**
     * 开启安全策略
     * @param {OpenSecurityPolicyRequest} req
     * @param {function(string, OpenSecurityPolicyResponse):void} cb
     * @public
     */
    OpenSecurityPolicy(req, cb) {
        const resp = new OpenSecurityPolicyResponse();
        this.request("OpenSecurityPolicy", req, resp, cb);
    }
    /**
     * 本接口（DescribeCertificates）用来查询可以使用的证书列表。
     * @param {DescribeCertificatesRequest} req
     * @param {function(string, DescribeCertificatesResponse):void} cb
     * @public
     */
    DescribeCertificates(req, cb) {
        const resp = new DescribeCertificatesResponse();
        this.request("DescribeCertificates", req, resp, cb);
    }
    /**
     * 添加安全策略规则
     * @param {CreateSecurityRulesRequest} req
     * @param {function(string, CreateSecurityRulesResponse):void} cb
     * @public
     */
    CreateSecurityRules(req, cb) {
        const resp = new CreateSecurityRulesResponse();
        this.request("CreateSecurityRules", req, resp, cb);
    }
    /**
     * 修改安全策略规则名
     * @param {ModifySecurityRuleRequest} req
     * @param {function(string, ModifySecurityRuleResponse):void} cb
     * @public
     */
    ModifySecurityRule(req, cb) {
        const resp = new ModifySecurityRuleResponse();
        this.request("ModifySecurityRule", req, resp, cb);
    }
    /**
     * 本接口（DescribeHTTPSListeners）用来查询HTTPS监听器信息。
     * @param {DescribeHTTPSListenersRequest} req
     * @param {function(string, DescribeHTTPSListenersResponse):void} cb
     * @public
     */
    DescribeHTTPSListeners(req, cb) {
        const resp = new DescribeHTTPSListenersResponse();
        this.request("DescribeHTTPSListeners", req, resp, cb);
    }
    /**
     * 该接口（CreateHTTPSListener）用于在通道实例下创建HTTPS协议类型的监听器。
     * @param {CreateHTTPSListenerRequest} req
     * @param {function(string, CreateHTTPSListenerResponse):void} cb
     * @public
     */
    CreateHTTPSListener(req, cb) {
        const resp = new CreateHTTPSListenerResponse();
        this.request("CreateHTTPSListener", req, resp, cb);
    }
    /**
     * 删除安全策略
     * @param {DeleteSecurityPolicyRequest} req
     * @param {function(string, DeleteSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteSecurityPolicy(req, cb) {
        const resp = new DeleteSecurityPolicyResponse();
        this.request("DeleteSecurityPolicy", req, resp, cb);
    }
    /**
     * 该接口（DescribeRealServerStatistics）用于查询源站健康检查结果的统计数据。源站状态展示位为1：正常或者0：异常。查询的源站需要在监听器或者规则上进行了绑定，查询时需指定绑定的监听器或者规则ID。该接口支持最近1，3，6，12，24小时内1分钟细粒度的源站状态统计数据展示。
     * @param {DescribeRealServerStatisticsRequest} req
     * @param {function(string, DescribeRealServerStatisticsResponse):void} cb
     * @public
     */
    DescribeRealServerStatistics(req, cb) {
        const resp = new DescribeRealServerStatisticsResponse();
        this.request("DescribeRealServerStatistics", req, resp, cb);
    }
    /**
     * 本接口（DescribeProxyGroupDetails）用于查询通道组详情。
     * @param {DescribeProxyGroupDetailsRequest} req
     * @param {function(string, DescribeProxyGroupDetailsResponse):void} cb
     * @public
     */
    DescribeProxyGroupDetails(req, cb) {
        const resp = new DescribeProxyGroupDetailsResponse();
        this.request("DescribeProxyGroupDetails", req, resp, cb);
    }
    /**
     * 删除域名的定制错误
     * @param {DeleteDomainErrorPageInfoRequest} req
     * @param {function(string, DeleteDomainErrorPageInfoResponse):void} cb
     * @public
     */
    DeleteDomainErrorPageInfo(req, cb) {
        const resp = new DeleteDomainErrorPageInfoResponse();
        this.request("DeleteDomainErrorPageInfo", req, resp, cb);
    }
    /**
     * 本接口（ModifyCertificate）用于修改监听器下的域名对应的证书。该接口仅适用于version3.0的通道。
     * @param {ModifyCertificateRequest} req
     * @param {function(string, ModifyCertificateResponse):void} cb
     * @public
     */
    ModifyCertificate(req, cb) {
        const resp = new ModifyCertificateResponse();
        this.request("ModifyCertificate", req, resp, cb);
    }
    /**
     * 该接口（DescribeTCPListeners）用于查询单通道或者通道组下的TCP监听器信息。
     * @param {DescribeTCPListenersRequest} req
     * @param {function(string, DescribeTCPListenersResponse):void} cb
     * @public
     */
    DescribeTCPListeners(req, cb) {
        const resp = new DescribeTCPListenersResponse();
        this.request("DescribeTCPListeners", req, resp, cb);
    }
    /**
     * 该接口（CreateRule）用于创建HTTP/HTTPS监听器转发规则。
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        const resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }
    /**
     * 定制域名指定错误码的错误响应
     * @param {CreateDomainErrorPageInfoRequest} req
     * @param {function(string, CreateDomainErrorPageInfoResponse):void} cb
     * @public
     */
    CreateDomainErrorPageInfo(req, cb) {
        const resp = new CreateDomainErrorPageInfoResponse();
        this.request("CreateDomainErrorPageInfo", req, resp, cb);
    }
    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
     * @param {DescribeProxyGroupStatisticsRequest} req
     * @param {function(string, DescribeProxyGroupStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyGroupStatistics(req, cb) {
        const resp = new DescribeProxyGroupStatisticsResponse();
        this.request("DescribeProxyGroupStatistics", req, resp, cb);
    }
    /**
     * 获取安全策略详情
     * @param {DescribeSecurityPolicyDetailRequest} req
     * @param {function(string, DescribeSecurityPolicyDetailResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyDetail(req, cb) {
        const resp = new DescribeSecurityPolicyDetailResponse();
        this.request("DescribeSecurityPolicyDetail", req, resp, cb);
    }
    /**
     * 本接口（ModifyDomain）用于监听器下的域名。当通道版本为3.0时，支持对该域名所对应的证书修改。
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        const resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }
    /**
     * 本接口（ModifyCertificateAttributes）用于修改证书，包括证明名字以及证书内容。
     * @param {ModifyCertificateAttributesRequest} req
     * @param {function(string, ModifyCertificateAttributesResponse):void} cb
     * @public
     */
    ModifyCertificateAttributes(req, cb) {
        const resp = new ModifyCertificateAttributesResponse();
        this.request("ModifyCertificateAttributes", req, resp, cb);
    }
    /**
     * 该接口（OpenProxies）用于开启一条或者多条通道。
     * @param {OpenProxiesRequest} req
     * @param {function(string, OpenProxiesResponse):void} cb
     * @public
     */
    OpenProxies(req, cb) {
        const resp = new OpenProxiesResponse();
        this.request("OpenProxies", req, resp, cb);
    }
    /**
     * 本接口（DescribeRuleRealServers）用于查询转发规则相关的源站信息， 包括该规则可绑定的源站信息和已绑定的源站信息。
     * @param {DescribeRuleRealServersRequest} req
     * @param {function(string, DescribeRuleRealServersResponse):void} cb
     * @public
     */
    DescribeRuleRealServers(req, cb) {
        const resp = new DescribeRuleRealServersResponse();
        this.request("DescribeRuleRealServers", req, resp, cb);
    }
    /**
     * 本接口（ModifyRealServerName）用于修改源站的名称
     * @param {ModifyRealServerNameRequest} req
     * @param {function(string, ModifyRealServerNameResponse):void} cb
     * @public
     */
    ModifyRealServerName(req, cb) {
        const resp = new ModifyRealServerNameResponse();
        this.request("ModifyRealServerName", req, resp, cb);
    }
    /**
     * 本接口(CheckProxyCreate)用于查询能否创建指定配置的加速通道。
     * @param {CheckProxyCreateRequest} req
     * @param {function(string, CheckProxyCreateResponse):void} cb
     * @public
     */
    CheckProxyCreate(req, cb) {
        const resp = new CheckProxyCreateResponse();
        this.request("CheckProxyCreate", req, resp, cb);
    }
    /**
     * 本接口（DescribeCountryAreaMapping）用于获取国家地区编码映射表。
     * @param {DescribeCountryAreaMappingRequest} req
     * @param {function(string, DescribeCountryAreaMappingResponse):void} cb
     * @public
     */
    DescribeCountryAreaMapping(req, cb) {
        const resp = new DescribeCountryAreaMappingResponse();
        this.request("DescribeCountryAreaMapping", req, resp, cb);
    }
    /**
     * 本接口（DescribeAccessRegions）用于查询加速区域，即客户端接入区域。
     * @param {DescribeAccessRegionsRequest} req
     * @param {function(string, DescribeAccessRegionsResponse):void} cb
     * @public
     */
    DescribeAccessRegions(req, cb) {
        const resp = new DescribeAccessRegionsResponse();
        this.request("DescribeAccessRegions", req, resp, cb);
    }
    /**
     * 删除安全策略规则
     * @param {DeleteSecurityRulesRequest} req
     * @param {function(string, DeleteSecurityRulesResponse):void} cb
     * @public
     */
    DeleteSecurityRules(req, cb) {
        const resp = new DeleteSecurityRulesResponse();
        this.request("DeleteSecurityRules", req, resp, cb);
    }
    /**
     * 该接口（ModifyHTTPListenerAttribute）用于修改通道的HTTP监听器配置信息，目前仅支持修改监听器的名称。
注意：通道组通道暂时不支持HTTP/HTTPS监听器。
     * @param {ModifyHTTPListenerAttributeRequest} req
     * @param {function(string, ModifyHTTPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyHTTPListenerAttribute(req, cb) {
        const resp = new ModifyHTTPListenerAttributeResponse();
        this.request("ModifyHTTPListenerAttribute", req, resp, cb);
    }
    /**
     * 该接口（DeleteRule）用于删除HTTP/HTTPS监听器的转发规则。
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        const resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }
    /**
     * 本接口（DescribeProxyDetail）用于查询通道详情。
     * @param {DescribeProxyDetailRequest} req
     * @param {function(string, DescribeProxyDetailResponse):void} cb
     * @public
     */
    DescribeProxyDetail(req, cb) {
        const resp = new DescribeProxyDetailResponse();
        this.request("DescribeProxyDetail", req, resp, cb);
    }
    /**
     * 本接口（DeleteCertificate）用于删除证书。
     * @param {DeleteCertificateRequest} req
     * @param {function(string, DeleteCertificateResponse):void} cb
     * @public
     */
    DeleteCertificate(req, cb) {
        const resp = new DeleteCertificateResponse();
        this.request("DeleteCertificate", req, resp, cb);
    }
    /**
     * 创建安全策略
     * @param {CreateSecurityPolicyRequest} req
     * @param {function(string, CreateSecurityPolicyResponse):void} cb
     * @public
     */
    CreateSecurityPolicy(req, cb) {
        const resp = new CreateSecurityPolicyResponse();
        this.request("CreateSecurityPolicy", req, resp, cb);
    }
    /**
     * 本接口（DescribeProxies）用于查询通道实例列表。
     * @param {DescribeProxiesRequest} req
     * @param {function(string, DescribeProxiesResponse):void} cb
     * @public
     */
    DescribeProxies(req, cb) {
        const resp = new DescribeProxiesResponse();
        this.request("DescribeProxies", req, resp, cb);
    }
    /**
     * 本接口（DeleteProxyGroup）用于删除通道组。
     * @param {DeleteProxyGroupRequest} req
     * @param {function(string, DeleteProxyGroupResponse):void} cb
     * @public
     */
    DeleteProxyGroup(req, cb) {
        const resp = new DeleteProxyGroupResponse();
        this.request("DeleteProxyGroup", req, resp, cb);
    }
    /**
     * 本接口（ModifyProxiesProject）用于修改通道所属项目。
     * @param {ModifyProxiesProjectRequest} req
     * @param {function(string, ModifyProxiesProjectResponse):void} cb
     * @public
     */
    ModifyProxiesProject(req, cb) {
        const resp = new ModifyProxiesProjectResponse();
        this.request("ModifyProxiesProject", req, resp, cb);
    }
    /**
     * 本接口（DescribeGroupDomainConfig）用于获取通道组域名解析配置详情。
     * @param {DescribeGroupDomainConfigRequest} req
     * @param {function(string, DescribeGroupDomainConfigResponse):void} cb
     * @public
     */
    DescribeGroupDomainConfig(req, cb) {
        const resp = new DescribeGroupDomainConfigResponse();
        this.request("DescribeGroupDomainConfig", req, resp, cb);
    }
    /**
     * 该接口（DescribeUDPListeners）用于查询单通道或者通道组下的UDP监听器信息
     * @param {DescribeUDPListenersRequest} req
     * @param {function(string, DescribeUDPListenersResponse):void} cb
     * @public
     */
    DescribeUDPListeners(req, cb) {
        const resp = new DescribeUDPListenersResponse();
        this.request("DescribeUDPListeners", req, resp, cb);
    }
    /**
     * 添加源站(服务器)信息，支持IP或域名
     * @param {AddRealServersRequest} req
     * @param {function(string, AddRealServersResponse):void} cb
     * @public
     */
    AddRealServers(req, cb) {
        const resp = new AddRealServersResponse();
        this.request("AddRealServers", req, resp, cb);
    }
    /**
     * 本接口（DescribeAccessRegionsByDestRegion）根据源站区域查询可用的加速区域列表
     * @param {DescribeAccessRegionsByDestRegionRequest} req
     * @param {function(string, DescribeAccessRegionsByDestRegionResponse):void} cb
     * @public
     */
    DescribeAccessRegionsByDestRegion(req, cb) {
        const resp = new DescribeAccessRegionsByDestRegionResponse();
        this.request("DescribeAccessRegionsByDestRegion", req, resp, cb);
    }
    /**
     * 该接口（ModifyHTTPSListenerAttribute）用于修改HTTPS监听器配置，当前不支持通道组和v1版本通道。
     * @param {ModifyHTTPSListenerAttributeRequest} req
     * @param {function(string, ModifyHTTPSListenerAttributeResponse):void} cb
     * @public
     */
    ModifyHTTPSListenerAttribute(req, cb) {
        const resp = new ModifyHTTPSListenerAttributeResponse();
        this.request("ModifyHTTPSListenerAttribute", req, resp, cb);
    }
    /**
     * 本接口（CreateDomain）用于创建HTTP/HTTPS监听器的访问域名，客户端请求通过访问该域名来请求后端业务。
该接口仅支持version3.0的通道。
     * @param {CreateDomainRequest} req
     * @param {function(string, CreateDomainResponse):void} cb
     * @public
     */
    CreateDomain(req, cb) {
        const resp = new CreateDomainResponse();
        this.request("CreateDomain", req, resp, cb);
    }
    /**
     * 本接口（ModifyRuleAttribute）用于修改转发规则的信息，包括健康检查的配置以及转发策略。
     * @param {ModifyRuleAttributeRequest} req
     * @param {function(string, ModifyRuleAttributeResponse):void} cb
     * @public
     */
    ModifyRuleAttribute(req, cb) {
        const resp = new ModifyRuleAttributeResponse();
        this.request("ModifyRuleAttribute", req, resp, cb);
    }
    /**
     * 本接口（DescribeCertificateDetail）用于查询证书详情，包括证书ID，证书名字，证书类型，证书内容以及密钥等信息。
     * @param {DescribeCertificateDetailRequest} req
     * @param {function(string, DescribeCertificateDetailResponse):void} cb
     * @public
     */
    DescribeCertificateDetail(req, cb) {
        const resp = new DescribeCertificateDetailResponse();
        this.request("DescribeCertificateDetail", req, resp, cb);
    }
    /**
     * 关闭安全策略
     * @param {CloseSecurityPolicyRequest} req
     * @param {function(string, CloseSecurityPolicyResponse):void} cb
     * @public
     */
    CloseSecurityPolicy(req, cb) {
        const resp = new CloseSecurityPolicyResponse();
        this.request("CloseSecurityPolicy", req, resp, cb);
    }
    /**
     * 本接口（ModifyGroupDomainConfig）用于配置通道组就近接入域名。
     * @param {ModifyGroupDomainConfigRequest} req
     * @param {function(string, ModifyGroupDomainConfigResponse):void} cb
     * @public
     */
    ModifyGroupDomainConfig(req, cb) {
        const resp = new ModifyGroupDomainConfigResponse();
        this.request("ModifyGroupDomainConfig", req, resp, cb);
    }
    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发，丢包和时延数据。支持300, 3600和86400的细粒度，取值为细粒度范围内最大值。
     * @param {DescribeProxyStatisticsRequest} req
     * @param {function(string, DescribeProxyStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyStatistics(req, cb) {
        const resp = new DescribeProxyStatisticsResponse();
        this.request("DescribeProxyStatistics", req, resp, cb);
    }
    /**
     * 删除已添加的源站(服务器)IP或域名
     * @param {RemoveRealServersRequest} req
     * @param {function(string, RemoveRealServersResponse):void} cb
     * @public
     */
    RemoveRealServers(req, cb) {
        const resp = new RemoveRealServersResponse();
        this.request("RemoveRealServers", req, resp, cb);
    }
    /**
     * 查询目前定制域名的错误响应
     * @param {DescribeDomainErrorPageInfoRequest} req
     * @param {function(string, DescribeDomainErrorPageInfoResponse):void} cb
     * @public
     */
    DescribeDomainErrorPageInfo(req, cb) {
        const resp = new DescribeDomainErrorPageInfoResponse();
        this.request("DescribeDomainErrorPageInfo", req, resp, cb);
    }
    /**
     * 本接口（DescribeRealServers）用于查询源站信息，可以根据项目名查询所有的源站信息，此外支持指定IP机或者域名的源站模糊查询。
     * @param {DescribeRealServersRequest} req
     * @param {function(string, DescribeRealServersResponse):void} cb
     * @public
     */
    DescribeRealServers(req, cb) {
        const resp = new DescribeRealServersResponse();
        this.request("DescribeRealServers", req, resp, cb);
    }
    /**
     * 本接口（SetAuthentication）用于通道的高级认证配置，包括认证方式选择，以及各种认证方式对应的证书选择。仅支持Version3.0的通道。
     * @param {SetAuthenticationRequest} req
     * @param {function(string, SetAuthenticationResponse):void} cb
     * @public
     */
    SetAuthentication(req, cb) {
        const resp = new SetAuthenticationResponse();
        this.request("SetAuthentication", req, resp, cb);
    }
    /**
     * 本接口（ModifyUDPListenerAttribute）用于修改通道实例下UDP监听器配置，包括监听器名称和调度策略的修改。
     * @param {ModifyUDPListenerAttributeRequest} req
     * @param {function(string, ModifyUDPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyUDPListenerAttribute(req, cb) {
        const resp = new ModifyUDPListenerAttributeResponse();
        this.request("ModifyUDPListenerAttribute", req, resp, cb);
    }
    /**
     * 该接口为内部接口，用于查询可以获取统计数据的通道和监听器信息
     * @param {DescribeProxyAndStatisticsListenersRequest} req
     * @param {function(string, DescribeProxyAndStatisticsListenersResponse):void} cb
     * @public
     */
    DescribeProxyAndStatisticsListeners(req, cb) {
        const resp = new DescribeProxyAndStatisticsListenersResponse();
        this.request("DescribeProxyAndStatisticsListeners", req, resp, cb);
    }
    /**
     * 该接口（CreateHTTPListener）用于在通道实例下创建HTTP协议类型的监听器。
     * @param {CreateHTTPListenerRequest} req
     * @param {function(string, CreateHTTPListenerResponse):void} cb
     * @public
     */
    CreateHTTPListener(req, cb) {
        const resp = new CreateHTTPListenerResponse();
        this.request("CreateHTTPListener", req, resp, cb);
    }
    /**
     * 本接口（CreateProxyGroupDomain）用于创建通道组域名，并开启域名解析。
     * @param {CreateProxyGroupDomainRequest} req
     * @param {function(string, CreateProxyGroupDomainResponse):void} cb
     * @public
     */
    CreateProxyGroupDomain(req, cb) {
        const resp = new CreateProxyGroupDomainResponse();
        this.request("CreateProxyGroupDomain", req, resp, cb);
    }
    /**
     * 本接口（ModifyProxyConfiguration）用于修改通道的配置。根据当前业务的容量需求，扩容或缩容相关通道的配置。仅支持Scalarable为1的通道,Scalarable可通过接口DescribeProxies获取。
     * @param {ModifyProxyConfigurationRequest} req
     * @param {function(string, ModifyProxyConfigurationResponse):void} cb
     * @public
     */
    ModifyProxyConfiguration(req, cb) {
        const resp = new ModifyProxyConfigurationResponse();
        this.request("ModifyProxyConfiguration", req, resp, cb);
    }
    /**
     * 本接口（DescribeResourcesByTag）用于根据标签来查询对应的资源信息，包括通道，通道组和源站。
     * @param {DescribeResourcesByTagRequest} req
     * @param {function(string, DescribeResourcesByTagResponse):void} cb
     * @public
     */
    DescribeResourcesByTag(req, cb) {
        const resp = new DescribeResourcesByTagResponse();
        this.request("DescribeResourcesByTag", req, resp, cb);
    }
    /**
     * 本接口（CloseProxyGroup）用于关闭通道组。通道组关闭后，不再产生流量，但每天仍然收取通道基础配置费用。
     * @param {CloseProxyGroupRequest} req
     * @param {function(string, CloseProxyGroupResponse):void} cb
     * @public
     */
    CloseProxyGroup(req, cb) {
        const resp = new CloseProxyGroupResponse();
        this.request("CloseProxyGroup", req, resp, cb);
    }
    /**
     * 本接口（ModifyTCPListenerAttribute）用于修改通道实例下TCP监听器配置，包括健康检查的配置，调度策略。
     * @param {ModifyTCPListenerAttributeRequest} req
     * @param {function(string, ModifyTCPListenerAttributeResponse):void} cb
     * @public
     */
    ModifyTCPListenerAttribute(req, cb) {
        const resp = new ModifyTCPListenerAttributeResponse();
        this.request("ModifyTCPListenerAttribute", req, resp, cb);
    }
    /**
     * 本接口（ModifyProxyGroupAttribute）用于修改通道组属性，目前仅支持修改通道组名称。
     * @param {ModifyProxyGroupAttributeRequest} req
     * @param {function(string, ModifyProxyGroupAttributeResponse):void} cb
     * @public
     */
    ModifyProxyGroupAttribute(req, cb) {
        const resp = new ModifyProxyGroupAttributeResponse();
        this.request("ModifyProxyGroupAttribute", req, resp, cb);
    }
    /**
     * 该接口为内部接口，用于查询可以获取统计数据的通道组和通道信息
     * @param {DescribeGroupAndStatisticsProxyRequest} req
     * @param {function(string, DescribeGroupAndStatisticsProxyResponse):void} cb
     * @public
     */
    DescribeGroupAndStatisticsProxy(req, cb) {
        const resp = new DescribeGroupAndStatisticsProxyResponse();
        this.request("DescribeGroupAndStatisticsProxy", req, resp, cb);
    }
    /**
     * 本接口（DescribeDestRegions）用于查询源站区域，即源站服务器所在区域。
     * @param {DescribeDestRegionsRequest} req
     * @param {function(string, DescribeDestRegionsResponse):void} cb
     * @public
     */
    DescribeDestRegions(req, cb) {
        const resp = new DescribeDestRegionsResponse();
        this.request("DescribeDestRegions", req, resp, cb);
    }
    /**
     * 本接口（BindListenerRealServers）用于TCP/UDP监听器绑定解绑源站。
注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。例如：原来绑定的源站为A，B，C，本次调用的选择绑定的源站为C，D，E，那么调用后所绑定的源站为C，D，E。
     * @param {BindListenerRealServersRequest} req
     * @param {function(string, BindListenerRealServersResponse):void} cb
     * @public
     */
    BindListenerRealServers(req, cb) {
        const resp = new BindListenerRealServersResponse();
        this.request("BindListenerRealServers", req, resp, cb);
    }
    /**
     * 该接口（DescribeHTTPListeners）用来查询HTTP监听器信息。
     * @param {DescribeHTTPListenersRequest} req
     * @param {function(string, DescribeHTTPListenersResponse):void} cb
     * @public
     */
    DescribeHTTPListeners(req, cb) {
        const resp = new DescribeHTTPListenersResponse();
        this.request("DescribeHTTPListeners", req, resp, cb);
    }
    /**
     * 本接口（CreateProxyGroup）用于创建通道组。
     * @param {CreateProxyGroupRequest} req
     * @param {function(string, CreateProxyGroupResponse):void} cb
     * @public
     */
    CreateProxyGroup(req, cb) {
        const resp = new CreateProxyGroupResponse();
        this.request("CreateProxyGroup", req, resp, cb);
    }
    /**
     * 该接口（CreateUDPListeners）用于批量创建单通道或者通道组的UDP协议类型的监听器。
     * @param {CreateUDPListenersRequest} req
     * @param {function(string, CreateUDPListenersResponse):void} cb
     * @public
     */
    CreateUDPListeners(req, cb) {
        const resp = new CreateUDPListenersResponse();
        this.request("CreateUDPListeners", req, resp, cb);
    }
    /**
     * 该接口（DescribeRegionAndPrice）用于获取源站区域和带宽梯度价格
     * @param {DescribeRegionAndPriceRequest} req
     * @param {function(string, DescribeRegionAndPriceResponse):void} cb
     * @public
     */
    DescribeRegionAndPrice(req, cb) {
        const resp = new DescribeRegionAndPriceResponse();
        this.request("DescribeRegionAndPrice", req, resp, cb);
    }
    /**
     * 本接口（CreateCertificate）用于创建Gaap相关证书和配置文件，包括基础认证配置文件，客户端CA证书，服务器SSL证书，Gaap SSL证书以及源站CA证书。
     * @param {CreateCertificateRequest} req
     * @param {function(string, CreateCertificateResponse):void} cb
     * @public
     */
    CreateCertificate(req, cb) {
        const resp = new CreateCertificateResponse();
        this.request("CreateCertificate", req, resp, cb);
    }
    /**
     * 该接口用于查询监听器统计数据，包括出入带宽，出入包量，并发数据。支持300秒, 3600秒和86400秒的细粒度，取值为细粒度范围内最大值。
     * @param {DescribeListenerStatisticsRequest} req
     * @param {function(string, DescribeListenerStatisticsResponse):void} cb
     * @public
     */
    DescribeListenerStatistics(req, cb) {
        const resp = new DescribeListenerStatisticsResponse();
        this.request("DescribeListenerStatistics", req, resp, cb);
    }
    /**
     * 本接口（DescribeRealServersStatus）用于查询源站是否已被规则或者监听器绑定
     * @param {DescribeRealServersStatusRequest} req
     * @param {function(string, DescribeRealServersStatusResponse):void} cb
     * @public
     */
    DescribeRealServersStatus(req, cb) {
        const resp = new DescribeRealServersStatusResponse();
        this.request("DescribeRealServersStatus", req, resp, cb);
    }
    /**
     * 该接口（OpenProxyGroup）用于开启一条通道组中的所有通道
     * @param {OpenProxyGroupRequest} req
     * @param {function(string, OpenProxyGroupResponse):void} cb
     * @public
     */
    OpenProxyGroup(req, cb) {
        const resp = new OpenProxyGroupResponse();
        this.request("OpenProxyGroup", req, resp, cb);
    }
    /**
     * 本接口（CloseProxies）用于关闭通道。通道关闭后，不再产生流量，但每天仍然收取通道基础配置费用。
     * @param {CloseProxiesRequest} req
     * @param {function(string, CloseProxiesResponse):void} cb
     * @public
     */
    CloseProxies(req, cb) {
        const resp = new CloseProxiesResponse();
        this.request("CloseProxies", req, resp, cb);
    }
    /**
     * 根据定制错误ID查询错误响应
     * @param {DescribeDomainErrorPageInfoByIdsRequest} req
     * @param {function(string, DescribeDomainErrorPageInfoByIdsResponse):void} cb
     * @public
     */
    DescribeDomainErrorPageInfoByIds(req, cb) {
        const resp = new DescribeDomainErrorPageInfoByIdsResponse();
        this.request("DescribeDomainErrorPageInfoByIds", req, resp, cb);
    }
    /**
     * 本接口（DescribeProxiesStatus）用于查询通道状态列表。
     * @param {DescribeProxiesStatusRequest} req
     * @param {function(string, DescribeProxiesStatusResponse):void} cb
     * @public
     */
    DescribeProxiesStatus(req, cb) {
        const resp = new DescribeProxiesStatusResponse();
        this.request("DescribeProxiesStatus", req, resp, cb);
    }
    /**
     * 本接口（DescribeSecurityRules）用于根据安全规则ID查询安全规则详情列表。支持一个或多个安全规则的查询。一次最多支持20个安全规则的查询。
     * @param {DescribeSecurityRulesRequest} req
     * @param {function(string, DescribeSecurityRulesResponse):void} cb
     * @public
     */
    DescribeSecurityRules(req, cb) {
        const resp = new DescribeSecurityRulesResponse();
        this.request("DescribeSecurityRules", req, resp, cb);
    }
    /**
     * 本接口（DescribeRules）用于查询监听器下的所有规则信息，包括规则域名，路径以及该规则下所绑定的源站列表。当通道版本为3.0时，该接口会返回该域名对应的高级认证配置信息。
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        const resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }
    /**
     * 该接口（CreateTCPListeners）用于批量创建单通道或者通道组的TCP协议类型的监听器。
     * @param {CreateTCPListenersRequest} req
     * @param {function(string, CreateTCPListenersResponse):void} cb
     * @public
     */
    CreateTCPListeners(req, cb) {
        const resp = new CreateTCPListenersResponse();
        this.request("CreateTCPListeners", req, resp, cb);
    }
    /**
     * 本接口（DestroyProxies）用于销毁。通道销毁后，不再产生任何费用。
     * @param {DestroyProxiesRequest} req
     * @param {function(string, DestroyProxiesResponse):void} cb
     * @public
     */
    DestroyProxies(req, cb) {
        const resp = new DestroyProxiesResponse();
        this.request("DestroyProxies", req, resp, cb);
    }
    /**
     * 本接口（ModifyProxiesAttribute）用于修改实例的属性（目前只支持修改通道的名称）。
     * @param {ModifyProxiesAttributeRequest} req
     * @param {function(string, ModifyProxiesAttributeResponse):void} cb
     * @public
     */
    ModifyProxiesAttribute(req, cb) {
        const resp = new ModifyProxiesAttributeResponse();
        this.request("ModifyProxiesAttribute", req, resp, cb);
    }
    /**
     * 该接口用于7层监听器的转发规则绑定源站。注意：本接口会解绑之前绑定的源站，绑定本次调用所选择的源站。
     * @param {BindRuleRealServersRequest} req
     * @param {function(string, BindRuleRealServersResponse):void} cb
     * @public
     */
    BindRuleRealServers(req, cb) {
        const resp = new BindRuleRealServersResponse();
        this.request("BindRuleRealServers", req, resp, cb);
    }
    /**
     * 本接口（CreateProxy）用于创建/复制一个指定配置的加速通道。当复制通道时，需要设置新通道的基本配置参数，并设置ClonedProxyId来指定被复制的通道。
     * @param {CreateProxyRequest} req
     * @param {function(string, CreateProxyResponse):void} cb
     * @public
     */
    CreateProxy(req, cb) {
        const resp = new CreateProxyResponse();
        this.request("CreateProxy", req, resp, cb);
    }
    /**
     * 本接口（DeleteDomain）仅适用于7层监听器，用于删除该监听器下对应域名及域名下的所有规则，所有已绑定源站的规则将自动解绑。
     * @param {DeleteDomainRequest} req
     * @param {function(string, DeleteDomainResponse):void} cb
     * @public
     */
    DeleteDomain(req, cb) {
        const resp = new DeleteDomainResponse();
        this.request("DeleteDomain", req, resp, cb);
    }
    /**
     * 该接口（DescribeListenerRealServers）用于查询TCP/UDP监听器源站列表，包括该监听器已经绑定的源站列表以及可以绑定的源站列表。
     * @param {DescribeListenerRealServersRequest} req
     * @param {function(string, DescribeListenerRealServersResponse):void} cb
     * @public
     */
    DescribeListenerRealServers(req, cb) {
        const resp = new DescribeListenerRealServersResponse();
        this.request("DescribeListenerRealServers", req, resp, cb);
    }
    /**
     * 该接口（DeleteListeners）用于批量删除通道或通道组的监听器，包括4/7层监听器。
     * @param {DeleteListenersRequest} req
     * @param {function(string, DeleteListenersResponse):void} cb
     * @public
     */
    DeleteListeners(req, cb) {
        const resp = new DeleteListenersResponse();
        this.request("DeleteListeners", req, resp, cb);
    }
    /**
     * 本接口（DescribeRulesByRuleIds）用于根据规则ID拉取规则信息列表。支持一个或者多个规则信息的拉取。一次最多支持10个规则信息的拉取。
     * @param {DescribeRulesByRuleIdsRequest} req
     * @param {function(string, DescribeRulesByRuleIdsResponse):void} cb
     * @public
     */
    DescribeRulesByRuleIds(req, cb) {
        const resp = new DescribeRulesByRuleIdsResponse();
        this.request("DescribeRulesByRuleIds", req, resp, cb);
    }
    /**
     * 本接口（InquiryPriceCreateProxy）用于创建加速通道询价。
     * @param {InquiryPriceCreateProxyRequest} req
     * @param {function(string, InquiryPriceCreateProxyResponse):void} cb
     * @public
     */
    InquiryPriceCreateProxy(req, cb) {
        const resp = new InquiryPriceCreateProxyResponse();
        this.request("InquiryPriceCreateProxy", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=gaap_client.js.map