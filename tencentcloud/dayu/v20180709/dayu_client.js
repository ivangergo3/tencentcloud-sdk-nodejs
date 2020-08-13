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
const ModifyDDoSPolicyCaseRequest = models_1.Models.ModifyDDoSPolicyCaseRequest;
const DescribeIpUnBlockListRequest = models_1.Models.DescribeIpUnBlockListRequest;
const DeleteDDoSPolicyCaseRequest = models_1.Models.DeleteDDoSPolicyCaseRequest;
const CreateDDoSPolicyResponse = models_1.Models.CreateDDoSPolicyResponse;
const DeleteL7RulesRequest = models_1.Models.DeleteL7RulesRequest;
const CreateBoundIPRequest = models_1.Models.CreateBoundIPRequest;
const DescribeNewL4RulesErrHealthResponse = models_1.Models.DescribeNewL4RulesErrHealthResponse;
const DescribeCCEvListRequest = models_1.Models.DescribeCCEvListRequest;
const DescribeTransmitStatisResponse = models_1.Models.DescribeTransmitStatisResponse;
const DDosPolicy = models_1.Models.DDosPolicy;
const ProtocolPort = models_1.Models.ProtocolPort;
const DescribeDDoSNetTrendRequest = models_1.Models.DescribeDDoSNetTrendRequest;
const DescribePolicyCaseRequest = models_1.Models.DescribePolicyCaseRequest;
const DescribeUnBlockStatisRequest = models_1.Models.DescribeUnBlockStatisRequest;
const ModifyCCUrlAllowResponse = models_1.Models.ModifyCCUrlAllowResponse;
const DescribeBasicDeviceThresholdResponse = models_1.Models.DescribeBasicDeviceThresholdResponse;
const DescribeCCAlarmThresholdResponse = models_1.Models.DescribeCCAlarmThresholdResponse;
const DescribeDDoSNetEvListRequest = models_1.Models.DescribeDDoSNetEvListRequest;
const DeleteNewL4RulesRequest = models_1.Models.DeleteNewL4RulesRequest;
const ModifyNewDomainRulesRequest = models_1.Models.ModifyNewDomainRulesRequest;
const DDoSAlarmThreshold = models_1.Models.DDoSAlarmThreshold;
const DescribePolicyCaseResponse = models_1.Models.DescribePolicyCaseResponse;
const DescribeResIpListRequest = models_1.Models.DescribeResIpListRequest;
const DescribeNewL4RulesErrHealthRequest = models_1.Models.DescribeNewL4RulesErrHealthRequest;
const ModifyCCLevelRequest = models_1.Models.ModifyCCLevelRequest;
const DeleteCCSelfDefinePolicyRequest = models_1.Models.DeleteCCSelfDefinePolicyRequest;
const DescribeCCUrlAllowRequest = models_1.Models.DescribeCCUrlAllowRequest;
const KeyValue = models_1.Models.KeyValue;
const IpBlackWhite = models_1.Models.IpBlackWhite;
const ModifyDDoSAlarmThresholdRequest = models_1.Models.ModifyDDoSAlarmThresholdRequest;
const DescribeNewL4RulesRequest = models_1.Models.DescribeNewL4RulesRequest;
const CreateDDoSPolicyRequest = models_1.Models.CreateDDoSPolicyRequest;
const ModifyCCThresholdResponse = models_1.Models.ModifyCCThresholdResponse;
const ModifyNetReturnSwitchResponse = models_1.Models.ModifyNetReturnSwitchResponse;
const DescribeActionLogRequest = models_1.Models.DescribeActionLogRequest;
const CreateL7RuleCertRequest = models_1.Models.CreateL7RuleCertRequest;
const DescribeBGPIPL7RuleMaxCntResponse = models_1.Models.DescribeBGPIPL7RuleMaxCntResponse;
const DescribePcapResponse = models_1.Models.DescribePcapResponse;
const DescribePackIndexResponse = models_1.Models.DescribePackIndexResponse;
const DescribeDDoSAttackSourceRequest = models_1.Models.DescribeDDoSAttackSourceRequest;
const DescribeDDoSCountRequest = models_1.Models.DescribeDDoSCountRequest;
const RegionInstanceCount = models_1.Models.RegionInstanceCount;
const WaterPrintKey = models_1.Models.WaterPrintKey;
const CreateNewL7RulesResponse = models_1.Models.CreateNewL7RulesResponse;
const ModifyNewL4RuleResponse = models_1.Models.ModifyNewL4RuleResponse;
const ModifyNewDomainRulesResponse = models_1.Models.ModifyNewDomainRulesResponse;
const CreateNewL4RulesResponse = models_1.Models.CreateNewL4RulesResponse;
const DescribeDDoSUsedStatisResponse = models_1.Models.DescribeDDoSUsedStatisResponse;
const DescribeBasicCCThresholdRequest = models_1.Models.DescribeBasicCCThresholdRequest;
const CreateDDoSPolicyCaseResponse = models_1.Models.CreateDDoSPolicyCaseResponse;
const DescribeIPProductInfoResponse = models_1.Models.DescribeIPProductInfoResponse;
const ModifyDDoSSwitchResponse = models_1.Models.ModifyDDoSSwitchResponse;
const IpBlockData = models_1.Models.IpBlockData;
const DescribeCCSelfDefinePolicyRequest = models_1.Models.DescribeCCSelfDefinePolicyRequest;
const ModifyDDoSDefendStatusRequest = models_1.Models.ModifyDDoSDefendStatusRequest;
const DescribeRuleSetsResponse = models_1.Models.DescribeRuleSetsResponse;
const DescribeBaradDataResponse = models_1.Models.DescribeBaradDataResponse;
const DescribeDDoSEvInfoRequest = models_1.Models.DescribeDDoSEvInfoRequest;
const DescribeDDoSAttackIPRegionMapResponse = models_1.Models.DescribeDDoSAttackIPRegionMapResponse;
const ModifyL4KeepTimeResponse = models_1.Models.ModifyL4KeepTimeResponse;
const ModifyL7RulesResponse = models_1.Models.ModifyL7RulesResponse;
const DescribeL7HealthConfigRequest = models_1.Models.DescribeL7HealthConfigRequest;
const BoundIpInfo = models_1.Models.BoundIpInfo;
const DescribePcapRequest = models_1.Models.DescribePcapRequest;
const DescribeDDoSAlarmThresholdResponse = models_1.Models.DescribeDDoSAlarmThresholdResponse;
const KeyValueRecord = models_1.Models.KeyValueRecord;
const DescribeBasicDeviceThresholdRequest = models_1.Models.DescribeBasicDeviceThresholdRequest;
const DescribleNewL7RulesResponse = models_1.Models.DescribleNewL7RulesResponse;
const ModifyResBindDDoSPolicyResponse = models_1.Models.ModifyResBindDDoSPolicyResponse;
const ModifyDDoSWaterKeyRequest = models_1.Models.ModifyDDoSWaterKeyRequest;
const ModifyCCLevelResponse = models_1.Models.ModifyCCLevelResponse;
const DescribeBaradDataRequest = models_1.Models.DescribeBaradDataRequest;
const DescribeDDoSDefendStatusResponse = models_1.Models.DescribeDDoSDefendStatusResponse;
const DescribeCCSelfDefinePolicyResponse = models_1.Models.DescribeCCSelfDefinePolicyResponse;
const CCPolicy = models_1.Models.CCPolicy;
const ModifyDDoSAIStatusResponse = models_1.Models.ModifyDDoSAIStatusResponse;
const DescribeDDoSNetEvInfoRequest = models_1.Models.DescribeDDoSNetEvInfoRequest;
const ModifyResourceRenewFlagRequest = models_1.Models.ModifyResourceRenewFlagRequest;
const DescribeCCEvListResponse = models_1.Models.DescribeCCEvListResponse;
const DescribeCCFrequencyRulesRequest = models_1.Models.DescribeCCFrequencyRulesRequest;
const CreateL4HealthConfigRequest = models_1.Models.CreateL4HealthConfigRequest;
const DescribeBGPIPL7RuleMaxCntRequest = models_1.Models.DescribeBGPIPL7RuleMaxCntRequest;
const ModifyDDoSPolicyNameResponse = models_1.Models.ModifyDDoSPolicyNameResponse;
const DescribeCCAlarmThresholdRequest = models_1.Models.DescribeCCAlarmThresholdRequest;
const ModifyCCUrlAllowRequest = models_1.Models.ModifyCCUrlAllowRequest;
const ModifyDDoSAlarmThresholdResponse = models_1.Models.ModifyDDoSAlarmThresholdResponse;
const ModifyDDoSLevelResponse = models_1.Models.ModifyDDoSLevelResponse;
const DescribeIpBlockListResponse = models_1.Models.DescribeIpBlockListResponse;
const DescribeCCIpAllowDenyResponse = models_1.Models.DescribeCCIpAllowDenyResponse;
const DescribeDDoSIpLogResponse = models_1.Models.DescribeDDoSIpLogResponse;
const CCRule = models_1.Models.CCRule;
const DescribeResIpListResponse = models_1.Models.DescribeResIpListResponse;
const ModifyCCIpAllowDenyRequest = models_1.Models.ModifyCCIpAllowDenyRequest;
const CreateInstanceNameResponse = models_1.Models.CreateInstanceNameResponse;
const DescribeDDoSDefendStatusRequest = models_1.Models.DescribeDDoSDefendStatusRequest;
const ModifyDDoSWaterKeyResponse = models_1.Models.ModifyDDoSWaterKeyResponse;
const ModifyL4HealthRequest = models_1.Models.ModifyL4HealthRequest;
const ModifyCCHostProtectionResponse = models_1.Models.ModifyCCHostProtectionResponse;
const CreateL4RulesResponse = models_1.Models.CreateL4RulesResponse;
const DescribeInsurePacksRequest = models_1.Models.DescribeInsurePacksRequest;
const DescribeDDoSNetCountRequest = models_1.Models.DescribeDDoSNetCountRequest;
const Paging = models_1.Models.Paging;
const ModifyCCSelfDefinePolicyRequest = models_1.Models.ModifyCCSelfDefinePolicyRequest;
const L4HealthConfig = models_1.Models.L4HealthConfig;
const CreateCCSelfDefinePolicyRequest = models_1.Models.CreateCCSelfDefinePolicyRequest;
const SuccessCode = models_1.Models.SuccessCode;
const DescribleL4RulesRequest = models_1.Models.DescribleL4RulesRequest;
const L4RuleEntry = models_1.Models.L4RuleEntry;
const DescribeL4HealthConfigRequest = models_1.Models.DescribeL4HealthConfigRequest;
const CreateL7CCRuleResponse = models_1.Models.CreateL7CCRuleResponse;
const ModifyNetReturnSwitchRequest = models_1.Models.ModifyNetReturnSwitchRequest;
const CreateL7CCRuleRequest = models_1.Models.CreateL7CCRuleRequest;
const CreateL7RulesRequest = models_1.Models.CreateL7RulesRequest;
const CreateL4RulesRequest = models_1.Models.CreateL4RulesRequest;
const DescribeNewL7RulesErrHealthResponse = models_1.Models.DescribeNewL7RulesErrHealthResponse;
const DescribeDDoSNetEvListResponse = models_1.Models.DescribeDDoSNetEvListResponse;
const ModifyCCFrequencyRulesStatusResponse = models_1.Models.ModifyCCFrequencyRulesStatusResponse;
const ModifyNewL4RuleRequest = models_1.Models.ModifyNewL4RuleRequest;
const DescribeL4RulesErrHealthRequest = models_1.Models.DescribeL4RulesErrHealthRequest;
const L4RuleSource = models_1.Models.L4RuleSource;
const CreateBasicDDoSAlarmThresholdResponse = models_1.Models.CreateBasicDDoSAlarmThresholdResponse;
const CreateNetReturnResponse = models_1.Models.CreateNetReturnResponse;
const DeleteL4RulesRequest = models_1.Models.DeleteL4RulesRequest;
const DescribeResourceListRequest = models_1.Models.DescribeResourceListRequest;
const DeleteL4RulesResponse = models_1.Models.DeleteL4RulesResponse;
const DescribleNewL7RulesRequest = models_1.Models.DescribleNewL7RulesRequest;
const DescribeIPProductInfoRequest = models_1.Models.DescribeIPProductInfoRequest;
const CreateL7HealthConfigRequest = models_1.Models.CreateL7HealthConfigRequest;
const CreateL7RuleCertResponse = models_1.Models.CreateL7RuleCertResponse;
const DescribeDDoSAttackIPRegionMapRequest = models_1.Models.DescribeDDoSAttackIPRegionMapRequest;
const ModifyDDoSPolicyRequest = models_1.Models.ModifyDDoSPolicyRequest;
const DescribeSourceIpSegmentRequest = models_1.Models.DescribeSourceIpSegmentRequest;
const DescribeSourceIpSegmentResponse = models_1.Models.DescribeSourceIpSegmentResponse;
const ModifyResBindDDoSPolicyRequest = models_1.Models.ModifyResBindDDoSPolicyRequest;
const L7RuleHealth = models_1.Models.L7RuleHealth;
const CreateL7RulesUploadRequest = models_1.Models.CreateL7RulesUploadRequest;
const L4RuleHealth = models_1.Models.L4RuleHealth;
const ModifyCCFrequencyRulesRequest = models_1.Models.ModifyCCFrequencyRulesRequest;
const ModifyCCPolicySwitchResponse = models_1.Models.ModifyCCPolicySwitchResponse;
const ModifyDDoSThresholdResponse = models_1.Models.ModifyDDoSThresholdResponse;
const CreateDDoSPolicyCaseRequest = models_1.Models.CreateDDoSPolicyCaseRequest;
const ModifyCCIpAllowDenyResponse = models_1.Models.ModifyCCIpAllowDenyResponse;
const ModifyCCAlarmThresholdRequest = models_1.Models.ModifyCCAlarmThresholdRequest;
const DescribeCCFrequencyRulesResponse = models_1.Models.DescribeCCFrequencyRulesResponse;
const DescribeDDoSEvListRequest = models_1.Models.DescribeDDoSEvListRequest;
const DescribeBasicCCThresholdResponse = models_1.Models.DescribeBasicCCThresholdResponse;
const ModifyDDoSPolicyNameRequest = models_1.Models.ModifyDDoSPolicyNameRequest;
const DescribeIpUnBlockListResponse = models_1.Models.DescribeIpUnBlockListResponse;
const ModifyCCPolicySwitchRequest = models_1.Models.ModifyCCPolicySwitchRequest;
const ModifyCCFrequencyRulesResponse = models_1.Models.ModifyCCFrequencyRulesResponse;
const ModifyL4KeepTimeRequest = models_1.Models.ModifyL4KeepTimeRequest;
const SchedulingDomain = models_1.Models.SchedulingDomain;
const ModifyCCHostProtectionRequest = models_1.Models.ModifyCCHostProtectionRequest;
const DescribeIpBlockListRequest = models_1.Models.DescribeIpBlockListRequest;
const DescribeDDoSNetCountResponse = models_1.Models.DescribeDDoSNetCountResponse;
const CreateL7RulesResponse = models_1.Models.CreateL7RulesResponse;
const BaradData = models_1.Models.BaradData;
const ModifyDDoSSwitchRequest = models_1.Models.ModifyDDoSSwitchRequest;
const CreateNetReturnRequest = models_1.Models.CreateNetReturnRequest;
const ModifyDDoSAIStatusRequest = models_1.Models.ModifyDDoSAIStatusRequest;
const DescribeResourceListResponse = models_1.Models.DescribeResourceListResponse;
const DescribeNewL4RulesResponse = models_1.Models.DescribeNewL4RulesResponse;
const ModifyCCThresholdRequest = models_1.Models.ModifyCCThresholdRequest;
const ModifyDDoSDefendStatusResponse = models_1.Models.ModifyDDoSDefendStatusResponse;
const CreateBasicDDoSAlarmThresholdRequest = models_1.Models.CreateBasicDDoSAlarmThresholdRequest;
const CCRuleConfig = models_1.Models.CCRuleConfig;
const DescribeDDoSEvInfoResponse = models_1.Models.DescribeDDoSEvInfoResponse;
const DescribleRegionCountRequest = models_1.Models.DescribleRegionCountRequest;
const ModifyCCSelfDefinePolicyResponse = models_1.Models.ModifyCCSelfDefinePolicyResponse;
const DescribeDDoSIpLogRequest = models_1.Models.DescribeDDoSIpLogRequest;
const DescribeDDoSAlarmThresholdRequest = models_1.Models.DescribeDDoSAlarmThresholdRequest;
const DeleteNewL4RulesResponse = models_1.Models.DeleteNewL4RulesResponse;
const WaterPrintPolicy = models_1.Models.WaterPrintPolicy;
const CreateNewL7RulesUploadRequest = models_1.Models.CreateNewL7RulesUploadRequest;
const DeleteNewL7RulesResponse = models_1.Models.DeleteNewL7RulesResponse;
const DeleteCCSelfDefinePolicyResponse = models_1.Models.DeleteCCSelfDefinePolicyResponse;
const DescribeDDoSPolicyResponse = models_1.Models.DescribeDDoSPolicyResponse;
const DeleteCCFrequencyRulesResponse = models_1.Models.DeleteCCFrequencyRulesResponse;
const DeleteDDoSPolicyCaseResponse = models_1.Models.DeleteDDoSPolicyCaseResponse;
const CreateL4HealthConfigResponse = models_1.Models.CreateL4HealthConfigResponse;
const CreateNewL7RulesRequest = models_1.Models.CreateNewL7RulesRequest;
const ModifyL7RulesRequest = models_1.Models.ModifyL7RulesRequest;
const ModifyElasticLimitResponse = models_1.Models.ModifyElasticLimitResponse;
const CreateNewL7RulesUploadResponse = models_1.Models.CreateNewL7RulesUploadResponse;
const DDoSAttackSourceRecord = models_1.Models.DDoSAttackSourceRecord;
const CreateUnblockIpResponse = models_1.Models.CreateUnblockIpResponse;
const DescribePackIndexRequest = models_1.Models.DescribePackIndexRequest;
const DescribeNewL7RulesErrHealthRequest = models_1.Models.DescribeNewL7RulesErrHealthRequest;
const ModifyL4RulesRequest = models_1.Models.ModifyL4RulesRequest;
const DescribeDDoSEvListResponse = models_1.Models.DescribeDDoSEvListResponse;
const DescribeDDoSPolicyRequest = models_1.Models.DescribeDDoSPolicyRequest;
const NewL4RuleEntry = models_1.Models.NewL4RuleEntry;
const DescribeL7HealthConfigResponse = models_1.Models.DescribeL7HealthConfigResponse;
const CCFrequencyRule = models_1.Models.CCFrequencyRule;
const CreateCCSelfDefinePolicyResponse = models_1.Models.CreateCCSelfDefinePolicyResponse;
const NewL7RuleEntry = models_1.Models.NewL7RuleEntry;
const L4DelRule = models_1.Models.L4DelRule;
const DescribeDDoSAttackSourceResponse = models_1.Models.DescribeDDoSAttackSourceResponse;
const CreateBoundIPResponse = models_1.Models.CreateBoundIPResponse;
const DescribeDDoSUsedStatisRequest = models_1.Models.DescribeDDoSUsedStatisRequest;
const DDoSPolicyDropOption = models_1.Models.DDoSPolicyDropOption;
const ModifyElasticLimitRequest = models_1.Models.ModifyElasticLimitRequest;
const ModifyL4HealthResponse = models_1.Models.ModifyL4HealthResponse;
const CCEventRecord = models_1.Models.CCEventRecord;
const DescribeTransmitStatisRequest = models_1.Models.DescribeTransmitStatisRequest;
const DescribeInsurePacksResponse = models_1.Models.DescribeInsurePacksResponse;
const CreateUnblockIpRequest = models_1.Models.CreateUnblockIpRequest;
const ModifyResourceRenewFlagResponse = models_1.Models.ModifyResourceRenewFlagResponse;
const OrderBy = models_1.Models.OrderBy;
const DescribeActionLogResponse = models_1.Models.DescribeActionLogResponse;
const DescribeCCTrendResponse = models_1.Models.DescribeCCTrendResponse;
const ModifyDDoSPolicyCaseResponse = models_1.Models.ModifyDDoSPolicyCaseResponse;
const DescribeCCUrlAllowResponse = models_1.Models.DescribeCCUrlAllowResponse;
const DescribeSecIndexRequest = models_1.Models.DescribeSecIndexRequest;
const ModifyCCFrequencyRulesStatusRequest = models_1.Models.ModifyCCFrequencyRulesStatusRequest;
const DescribeDDoSCountResponse = models_1.Models.DescribeDDoSCountResponse;
const DescribeL4RulesErrHealthResponse = models_1.Models.DescribeL4RulesErrHealthResponse;
const DeleteDDoSPolicyResponse = models_1.Models.DeleteDDoSPolicyResponse;
const DescribeDDoSTrendRequest = models_1.Models.DescribeDDoSTrendRequest;
const ModifyDDoSPolicyResponse = models_1.Models.ModifyDDoSPolicyResponse;
const ResourceIp = models_1.Models.ResourceIp;
const CCAlarmThreshold = models_1.Models.CCAlarmThreshold;
const DescribeDDoSNetIpLogRequest = models_1.Models.DescribeDDoSNetIpLogRequest;
const L7HealthConfig = models_1.Models.L7HealthConfig;
const DescribeDDoSNetEvInfoResponse = models_1.Models.DescribeDDoSNetEvInfoResponse;
const ModifyCCAlarmThresholdResponse = models_1.Models.ModifyCCAlarmThresholdResponse;
const DescribeRuleSetsRequest = models_1.Models.DescribeRuleSetsRequest;
const DescribeSchedulingDomainListRequest = models_1.Models.DescribeSchedulingDomainListRequest;
const DescribleL7RulesResponse = models_1.Models.DescribleL7RulesResponse;
const CreateCCFrequencyRulesResponse = models_1.Models.CreateCCFrequencyRulesResponse;
const CreateNewL4RulesRequest = models_1.Models.CreateNewL4RulesRequest;
const DDoSPolicyPortLimit = models_1.Models.DDoSPolicyPortLimit;
const DescribeSchedulingDomainListResponse = models_1.Models.DescribeSchedulingDomainListResponse;
const DescribeDDoSNetTrendResponse = models_1.Models.DescribeDDoSNetTrendResponse;
const DescribeUnBlockStatisResponse = models_1.Models.DescribeUnBlockStatisResponse;
const DescribleL7RulesRequest = models_1.Models.DescribleL7RulesRequest;
const DescribeCCIpAllowDenyRequest = models_1.Models.DescribeCCIpAllowDenyRequest;
const DescribeSecIndexResponse = models_1.Models.DescribeSecIndexResponse;
const L7RuleEntry = models_1.Models.L7RuleEntry;
const IpUnBlockData = models_1.Models.IpUnBlockData;
const DescribeL4HealthConfigResponse = models_1.Models.DescribeL4HealthConfigResponse;
const ModifyDDoSLevelRequest = models_1.Models.ModifyDDoSLevelRequest;
const DDoSPolicyPacketFilter = models_1.Models.DDoSPolicyPacketFilter;
const DeleteCCFrequencyRulesRequest = models_1.Models.DeleteCCFrequencyRulesRequest;
const DescribeDDoSNetIpLogResponse = models_1.Models.DescribeDDoSNetIpLogResponse;
const CreateCCFrequencyRulesRequest = models_1.Models.CreateCCFrequencyRulesRequest;
const DeleteL7RulesResponse = models_1.Models.DeleteL7RulesResponse;
const CreateL7HealthConfigResponse = models_1.Models.CreateL7HealthConfigResponse;
const DescribeDDoSTrendResponse = models_1.Models.DescribeDDoSTrendResponse;
const CreateL7RulesUploadResponse = models_1.Models.CreateL7RulesUploadResponse;
const DescribleRegionCountResponse = models_1.Models.DescribleRegionCountResponse;
const ModifyDDoSThresholdRequest = models_1.Models.ModifyDDoSThresholdRequest;
const DDoSEventRecord = models_1.Models.DDoSEventRecord;
const DescribleL4RulesResponse = models_1.Models.DescribleL4RulesResponse;
const ModifyL4RulesResponse = models_1.Models.ModifyL4RulesResponse;
const DescribeCCTrendRequest = models_1.Models.DescribeCCTrendRequest;
const DeleteNewL7RulesRequest = models_1.Models.DeleteNewL7RulesRequest;
const CreateInstanceNameRequest = models_1.Models.CreateInstanceNameRequest;
const DeleteDDoSPolicyRequest = models_1.Models.DeleteDDoSPolicyRequest;
/**
 * dayu client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("dayu.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    /**
     * 添加或删除CC的IP黑白名单
     * @param {ModifyCCIpAllowDenyRequest} req
     * @param {function(string, ModifyCCIpAllowDenyResponse):void} cb
     * @public
     */
    ModifyCCIpAllowDeny(req, cb) {
        const resp = new ModifyCCIpAllowDenyResponse();
        this.request("ModifyCCIpAllowDeny", req, resp, cb);
    }
    /**
     * 获取DDoS攻击占比分析
     * @param {DescribeDDoSCountRequest} req
     * @param {function(string, DescribeDDoSCountResponse):void} cb
     * @public
     */
    DescribeDDoSCount(req, cb) {
        const resp = new DescribeDDoSCountResponse();
        this.request("DescribeDDoSCount", req, resp, cb);
    }
    /**
     * 删除L4转发规则
     * @param {DeleteNewL4RulesRequest} req
     * @param {function(string, DeleteNewL4RulesResponse):void} cb
     * @public
     */
    DeleteNewL4Rules(req, cb) {
        const resp = new DeleteNewL4RulesResponse();
        this.request("DeleteNewL4Rules", req, resp, cb);
    }
    /**
     * 获取资源的规则数
     * @param {DescribeRuleSetsRequest} req
     * @param {function(string, DescribeRuleSetsResponse):void} cb
     * @public
     */
    DescribeRuleSets(req, cb) {
        const resp = new DescribeRuleSetsResponse();
        this.request("DescribeRuleSets", req, resp, cb);
    }
    /**
     * 批量上传7层转发规则
     * @param {CreateNewL7RulesUploadRequest} req
     * @param {function(string, CreateNewL7RulesUploadResponse):void} cb
     * @public
     */
    CreateNewL7RulesUpload(req, cb) {
        const resp = new CreateNewL7RulesUploadResponse();
        this.request("CreateNewL7RulesUpload", req, resp, cb);
    }
    /**
     * 此接口是7层CC的访问频控自定义规则（IP+Host维度，不支持具体的URI），此接口已弃用，请调用新接口CreateCCFrequencyRules，新接口同时支持IP+Host维度以及具体的URI；
     * @param {CreateL7CCRuleRequest} req
     * @param {function(string, CreateL7CCRuleResponse):void} cb
     * @public
     */
    CreateL7CCRule(req, cb) {
        const resp = new CreateL7CCRuleResponse();
        this.request("CreateL7CCRule", req, resp, cb);
    }
    /**
     * 创建CC自定义策略
     * @param {CreateCCSelfDefinePolicyRequest} req
     * @param {function(string, CreateCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    CreateCCSelfDefinePolicy(req, cb) {
        const resp = new CreateCCSelfDefinePolicyResponse();
        this.request("CreateCCSelfDefinePolicy", req, resp, cb);
    }
    /**
     * 添加7层转发规则
     * @param {CreateNewL7RulesRequest} req
     * @param {function(string, CreateNewL7RulesResponse):void} cb
     * @public
     */
    CreateNewL7Rules(req, cb) {
        const resp = new CreateNewL7RulesResponse();
        this.request("CreateNewL7Rules", req, resp, cb);
    }
    /**
     * 修改CC自定义策略开关
     * @param {ModifyCCPolicySwitchRequest} req
     * @param {function(string, ModifyCCPolicySwitchResponse):void} cb
     * @public
     */
    ModifyCCPolicySwitch(req, cb) {
        const resp = new ModifyCCPolicySwitchResponse();
        this.request("ModifyCCPolicySwitch", req, resp, cb);
    }
    /**
     * 获取L7转发规则健康检查异常结果
     * @param {DescribeNewL7RulesErrHealthRequest} req
     * @param {function(string, DescribeNewL7RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeNewL7RulesErrHealth(req, cb) {
        const resp = new DescribeNewL7RulesErrHealthResponse();
        this.request("DescribeNewL7RulesErrHealth", req, resp, cb);
    }
    /**
     * 添加策略场景
     * @param {CreateDDoSPolicyCaseRequest} req
     * @param {function(string, CreateDDoSPolicyCaseResponse):void} cb
     * @public
     */
    CreateDDoSPolicyCase(req, cb) {
        const resp = new CreateDDoSPolicyCaseResponse();
        this.request("CreateDDoSPolicyCase", req, resp, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击指标数据
     * @param {DescribeDDoSNetTrendRequest} req
     * @param {function(string, DescribeDDoSNetTrendResponse):void} cb
     * @public
     */
    DescribeDDoSNetTrend(req, cb) {
        const resp = new DescribeDDoSNetTrendResponse();
        this.request("DescribeDDoSNetTrend", req, resp, cb);
    }
    /**
     * 修改DDoS高级策略名称
     * @param {ModifyDDoSPolicyNameRequest} req
     * @param {function(string, ModifyDDoSPolicyNameResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyName(req, cb) {
        const resp = new ModifyDDoSPolicyNameResponse();
        this.request("ModifyDDoSPolicyName", req, resp, cb);
    }
    /**
     * 修改L4转发规则健康检查参数，支持的子产品：高防IP、高防IP专业版
     * @param {ModifyL4HealthRequest} req
     * @param {function(string, ModifyL4HealthResponse):void} cb
     * @public
     */
    ModifyL4Health(req, cb) {
        const resp = new ModifyL4HealthResponse();
        this.request("ModifyL4Health", req, resp, cb);
    }
    /**
     * 统计用户的高防资源的使用天数和DDoS攻击防护次数
     * @param {DescribeDDoSUsedStatisRequest} req
     * @param {function(string, DescribeDDoSUsedStatisResponse):void} cb
     * @public
     */
    DescribeDDoSUsedStatis(req, cb) {
        const resp = new DescribeDDoSUsedStatisResponse();
        this.request("DescribeDDoSUsedStatis", req, resp, cb);
    }
    /**
     * 获取DDoS防护状态（临时关闭状态），支持产品：基础防护，独享包，共享包，高防IP，高防IP专业版；调用此接口是获取当前是否有设置临时关闭DDoS防护状态，如果有设置会返回临时关闭的时长等参数。
     * @param {DescribeDDoSDefendStatusRequest} req
     * @param {function(string, DescribeDDoSDefendStatusResponse):void} cb
     * @public
     */
    DescribeDDoSDefendStatus(req, cb) {
        const resp = new DescribeDDoSDefendStatusResponse();
        this.request("DescribeDDoSDefendStatus", req, resp, cb);
    }
    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     * @param {DescribeCCAlarmThresholdRequest} req
     * @param {function(string, DescribeCCAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeCCAlarmThreshold(req, cb) {
        const resp = new DescribeCCAlarmThresholdResponse();
        this.request("DescribeCCAlarmThreshold", req, resp, cb);
    }
    /**
     * 下载攻击事件的pcap包
     * @param {DescribePcapRequest} req
     * @param {function(string, DescribePcapResponse):void} cb
     * @public
     */
    DescribePcap(req, cb) {
        const resp = new DescribePcapResponse();
        this.request("DescribePcap", req, resp, cb);
    }
    /**
     * 获取L4转发规则
     * @param {DescribeNewL4RulesRequest} req
     * @param {function(string, DescribeNewL4RulesResponse):void} cb
     * @public
     */
    DescribeNewL4Rules(req, cb) {
        const resp = new DescribeNewL4RulesResponse();
        this.request("DescribeNewL4Rules", req, resp, cb);
    }
    /**
     * 修改弹性防护阈值
     * @param {ModifyElasticLimitRequest} req
     * @param {function(string, ModifyElasticLimitResponse):void} cb
     * @public
     */
    ModifyElasticLimit(req, cb) {
        const resp = new ModifyElasticLimitResponse();
        this.request("ModifyElasticLimit", req, resp, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoSIP攻击日志
     * @param {DescribeDDoSNetIpLogRequest} req
     * @param {function(string, DescribeDDoSNetIpLogResponse):void} cb
     * @public
     */
    DescribeDDoSNetIpLog(req, cb) {
        const resp = new DescribeDDoSNetIpLogResponse();
        this.request("DescribeDDoSNetIpLog", req, resp, cb);
    }
    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾产品设置CC攻击的告警通知阈值
     * @param {ModifyCCAlarmThresholdRequest} req
     * @param {function(string, ModifyCCAlarmThresholdResponse):void} cb
     * @public
     */
    ModifyCCAlarmThreshold(req, cb) {
        const resp = new ModifyCCAlarmThresholdResponse();
        this.request("ModifyCCAlarmThreshold", req, resp, cb);
    }
    /**
     * 获取DDoS攻击事件列表
     * @param {DescribeDDoSEvListRequest} req
     * @param {function(string, DescribeDDoSEvListResponse):void} cb
     * @public
     */
    DescribeDDoSEvList(req, cb) {
        const resp = new DescribeDDoSEvListResponse();
        this.request("DescribeDDoSEvList", req, resp, cb);
    }
    /**
     * 获取IP封堵列表
     * @param {DescribeIpBlockListRequest} req
     * @param {function(string, DescribeIpBlockListResponse):void} cb
     * @public
     */
    DescribeIpBlockList(req, cb) {
        const resp = new DescribeIpBlockListResponse();
        this.request("DescribeIpBlockList", req, resp, cb);
    }
    /**
     * 导出四层健康检查配置
     * @param {DescribeL4HealthConfigRequest} req
     * @param {function(string, DescribeL4HealthConfigResponse):void} cb
     * @public
     */
    DescribeL4HealthConfig(req, cb) {
        const resp = new DescribeL4HealthConfigResponse();
        this.request("DescribeL4HealthConfig", req, resp, cb);
    }
    /**
     * 获取本月安全统计
     * @param {DescribeSecIndexRequest} req
     * @param {function(string, DescribeSecIndexResponse):void} cb
     * @public
     */
    DescribeSecIndex(req, cb) {
        const resp = new DescribeSecIndexResponse();
        this.request("DescribeSecIndex", req, resp, cb);
    }
    /**
     * 获取调度域名列表
     * @param {DescribeSchedulingDomainListRequest} req
     * @param {function(string, DescribeSchedulingDomainListResponse):void} cb
     * @public
     */
    DescribeSchedulingDomainList(req, cb) {
        const resp = new DescribeSchedulingDomainListResponse();
        this.request("DescribeSchedulingDomainList", req, resp, cb);
    }
    /**
     * 获取CC防护的访问频率控制规则
     * @param {DescribeCCFrequencyRulesRequest} req
     * @param {function(string, DescribeCCFrequencyRulesResponse):void} cb
     * @public
     */
    DescribeCCFrequencyRules(req, cb) {
        const resp = new DescribeCCFrequencyRulesResponse();
        this.request("DescribeCCFrequencyRules", req, resp, cb);
    }
    /**
     * 删除策略场景
     * @param {DeleteDDoSPolicyCaseRequest} req
     * @param {function(string, DeleteDDoSPolicyCaseResponse):void} cb
     * @public
     */
    DeleteDDoSPolicyCase(req, cb) {
        const resp = new DeleteDDoSPolicyCaseResponse();
        this.request("DeleteDDoSPolicyCase", req, resp, cb);
    }
    /**
     * 删除七层转发规则
     * @param {DeleteL7RulesRequest} req
     * @param {function(string, DeleteL7RulesResponse):void} cb
     * @public
     */
    DeleteL7Rules(req, cb) {
        const resp = new DeleteL7RulesResponse();
        this.request("DeleteL7Rules", req, resp, cb);
    }
    /**
     * 添加L4转发规则
     * @param {CreateNewL4RulesRequest} req
     * @param {function(string, CreateNewL4RulesResponse):void} cb
     * @public
     */
    CreateNewL4Rules(req, cb) {
        const resp = new CreateNewL4RulesResponse();
        this.request("CreateNewL4Rules", req, resp, cb);
    }
    /**
     * 添加L4转发规则
     * @param {CreateL4RulesRequest} req
     * @param {function(string, CreateL4RulesResponse):void} cb
     * @public
     */
    CreateL4Rules(req, cb) {
        const resp = new CreateL4RulesResponse();
        this.request("CreateL4Rules", req, resp, cb);
    }
    /**
     * 为大禹子产品提供业务转发指标数据的接口
     * @param {DescribeBaradDataRequest} req
     * @param {function(string, DescribeBaradDataResponse):void} cb
     * @public
     */
    DescribeBaradData(req, cb) {
        const resp = new DescribeBaradDataResponse();
        this.request("DescribeBaradData", req, resp, cb);
    }
    /**
     * 修改CC防护的访问频率控制规则
     * @param {ModifyCCFrequencyRulesRequest} req
     * @param {function(string, ModifyCCFrequencyRulesResponse):void} cb
     * @public
     */
    ModifyCCFrequencyRules(req, cb) {
        const resp = new ModifyCCFrequencyRulesResponse();
        this.request("ModifyCCFrequencyRules", req, resp, cb);
    }
    /**
     * 获取七层转发规则
     * @param {DescribleL7RulesRequest} req
     * @param {function(string, DescribleL7RulesResponse):void} cb
     * @public
     */
    DescribleL7Rules(req, cb) {
        const resp = new DescribleL7RulesResponse();
        this.request("DescribleL7Rules", req, resp, cb);
    }
    /**
     * 添加DDoS高级策略
     * @param {CreateDDoSPolicyRequest} req
     * @param {function(string, CreateDDoSPolicyResponse):void} cb
     * @public
     */
    CreateDDoSPolicy(req, cb) {
        const resp = new CreateDDoSPolicyResponse();
        this.request("CreateDDoSPolicy", req, resp, cb);
    }
    /**
     * 资源实例绑定DDoS高级策略
     * @param {ModifyResBindDDoSPolicyRequest} req
     * @param {function(string, ModifyResBindDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyResBindDDoSPolicy(req, cb) {
        const resp = new ModifyResBindDDoSPolicyResponse();
        this.request("ModifyResBindDDoSPolicy", req, resp, cb);
    }
    /**
     * 在客户收攻击或者被封堵时，切回到源站，并设置回切的时长
     * @param {ModifyNetReturnSwitchRequest} req
     * @param {function(string, ModifyNetReturnSwitchResponse):void} cb
     * @public
     */
    ModifyNetReturnSwitch(req, cb) {
        const resp = new ModifyNetReturnSwitchResponse();
        this.request("ModifyNetReturnSwitch", req, resp, cb);
    }
    /**
     * 获取L4转发规则健康检查异常结果
     * @param {DescribeNewL4RulesErrHealthRequest} req
     * @param {function(string, DescribeNewL4RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeNewL4RulesErrHealth(req, cb) {
        const resp = new DescribeNewL4RulesErrHealthResponse();
        this.request("DescribeNewL4RulesErrHealth", req, resp, cb);
    }
    /**
     * 获取回源IP段，支持的产品：高防IP，高防IP专业版；
     * @param {DescribeSourceIpSegmentRequest} req
     * @param {function(string, DescribeSourceIpSegmentResponse):void} cb
     * @public
     */
    DescribeSourceIpSegment(req, cb) {
        const resp = new DescribeSourceIpSegmentResponse();
        this.request("DescribeSourceIpSegment", req, resp, cb);
    }
    /**
     * 添加或删除CC的URL白名单
     * @param {ModifyCCUrlAllowRequest} req
     * @param {function(string, ModifyCCUrlAllowResponse):void} cb
     * @public
     */
    ModifyCCUrlAllow(req, cb) {
        const resp = new ModifyCCUrlAllowResponse();
        this.request("ModifyCCUrlAllow", req, resp, cb);
    }
    /**
     * 获取基础防护黑洞阈值
     * @param {DescribeBasicDeviceThresholdRequest} req
     * @param {function(string, DescribeBasicDeviceThresholdResponse):void} cb
     * @public
     */
    DescribeBasicDeviceThreshold(req, cb) {
        const resp = new DescribeBasicDeviceThresholdResponse();
        this.request("DescribeBasicDeviceThreshold", req, resp, cb);
    }
    /**
     * IP解封操作
     * @param {CreateUnblockIpRequest} req
     * @param {function(string, CreateUnblockIpResponse):void} cb
     * @public
     */
    CreateUnblockIp(req, cb) {
        const resp = new CreateUnblockIpResponse();
        this.request("CreateUnblockIp", req, resp, cb);
    }
    /**
     * 删除DDoS高级策略
     * @param {DeleteDDoSPolicyRequest} req
     * @param {function(string, DeleteDDoSPolicyResponse):void} cb
     * @public
     */
    DeleteDDoSPolicy(req, cb) {
        const resp = new DeleteDDoSPolicyResponse();
        this.request("DeleteDDoSPolicy", req, resp, cb);
    }
    /**
     * 修改4层转发规则
     * @param {ModifyNewL4RuleRequest} req
     * @param {function(string, ModifyNewL4RuleResponse):void} cb
     * @public
     */
    ModifyNewL4Rule(req, cb) {
        const resp = new ModifyNewL4RuleResponse();
        this.request("ModifyNewL4Rule", req, resp, cb);
    }
    /**
     * 获取资源列表
     * @param {DescribeResourceListRequest} req
     * @param {function(string, DescribeResourceListResponse):void} cb
     * @public
     */
    DescribeResourceList(req, cb) {
        const resp = new DescribeResourceListResponse();
        this.request("DescribeResourceList", req, resp, cb);
    }
    /**
     * 删除CC自定义策略
     * @param {DeleteCCSelfDefinePolicyRequest} req
     * @param {function(string, DeleteCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    DeleteCCSelfDefinePolicy(req, cb) {
        const resp = new DeleteCCSelfDefinePolicyResponse();
        this.request("DeleteCCSelfDefinePolicy", req, resp, cb);
    }
    /**
     * 获取策略场景
     * @param {DescribePolicyCaseRequest} req
     * @param {function(string, DescribePolicyCaseResponse):void} cb
     * @public
     */
    DescribePolicyCase(req, cb) {
        const resp = new DescribePolicyCaseResponse();
        this.request("DescribePolicyCase", req, resp, cb);
    }
    /**
     * 获取操作日志
     * @param {DescribeActionLogRequest} req
     * @param {function(string, DescribeActionLogResponse):void} cb
     * @public
     */
    DescribeActionLog(req, cb) {
        const resp = new DescribeActionLogResponse();
        this.request("DescribeActionLog", req, resp, cb);
    }
    /**
     * 修改L4转发规则
     * @param {ModifyL4RulesRequest} req
     * @param {function(string, ModifyL4RulesResponse):void} cb
     * @public
     */
    ModifyL4Rules(req, cb) {
        const resp = new ModifyL4RulesResponse();
        this.request("ModifyL4Rules", req, resp, cb);
    }
    /**
     * 获取DDoSIP攻击日志
     * @param {DescribeDDoSIpLogRequest} req
     * @param {function(string, DescribeDDoSIpLogResponse):void} cb
     * @public
     */
    DescribeDDoSIpLog(req, cb) {
        const resp = new DescribeDDoSIpLogResponse();
        this.request("DescribeDDoSIpLog", req, resp, cb);
    }
    /**
     * 获取高防包、高防IP、高防IP专业版、棋牌盾产品设置DDoS攻击的告警通知阈值
     * @param {DescribeDDoSAlarmThresholdRequest} req
     * @param {function(string, DescribeDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    DescribeDDoSAlarmThreshold(req, cb) {
        const resp = new DescribeDDoSAlarmThresholdResponse();
        this.request("DescribeDDoSAlarmThreshold", req, resp, cb);
    }
    /**
     * 获取产品总览统计，支持高防包、高防IP、高防IP专业版；
     * @param {DescribePackIndexRequest} req
     * @param {function(string, DescribePackIndexResponse):void} cb
     * @public
     */
    DescribePackIndex(req, cb) {
        const resp = new DescribePackIndexResponse();
        this.request("DescribePackIndex", req, resp, cb);
    }
    /**
     * 获取7层规则
     * @param {DescribleNewL7RulesRequest} req
     * @param {function(string, DescribleNewL7RulesResponse):void} cb
     * @public
     */
    DescribleNewL7Rules(req, cb) {
        const resp = new DescribleNewL7RulesResponse();
        this.request("DescribleNewL7Rules", req, resp, cb);
    }
    /**
     * 设置基础防护的DDoS告警阈值，只支持基础防护产品
     * @param {CreateBasicDDoSAlarmThresholdRequest} req
     * @param {function(string, CreateBasicDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    CreateBasicDDoSAlarmThreshold(req, cb) {
        const resp = new CreateBasicDDoSAlarmThresholdResponse();
        this.request("CreateBasicDDoSAlarmThreshold", req, resp, cb);
    }
    /**
     * 修改DDoS清洗阈值
     * @param {ModifyDDoSThresholdRequest} req
     * @param {function(string, ModifyDDoSThresholdResponse):void} cb
     * @public
     */
    ModifyDDoSThreshold(req, cb) {
        const resp = new ModifyDDoSThresholdResponse();
        this.request("ModifyDDoSThreshold", req, resp, cb);
    }
    /**
     * 配置7层转发规则的证书
     * @param {CreateL7RuleCertRequest} req
     * @param {function(string, CreateL7RuleCertResponse):void} cb
     * @public
     */
    CreateL7RuleCert(req, cb) {
        const resp = new CreateL7RuleCertResponse();
        this.request("CreateL7RuleCert", req, resp, cb);
    }
    /**
     * 读取或修改DDoS的AI防护状态
     * @param {ModifyDDoSAIStatusRequest} req
     * @param {function(string, ModifyDDoSAIStatusResponse):void} cb
     * @public
     */
    ModifyDDoSAIStatus(req, cb) {
        const resp = new ModifyDDoSAIStatusResponse();
        this.request("ModifyDDoSAIStatus", req, resp, cb);
    }
    /**
     * 获取CC的IP黑白名单
     * @param {DescribeCCIpAllowDenyRequest} req
     * @param {function(string, DescribeCCIpAllowDenyResponse):void} cb
     * @public
     */
    DescribeCCIpAllowDeny(req, cb) {
        const resp = new DescribeCCIpAllowDenyResponse();
        this.request("DescribeCCIpAllowDeny", req, resp, cb);
    }
    /**
     * 上传四层健康检查配置
     * @param {CreateL4HealthConfigRequest} req
     * @param {function(string, CreateL4HealthConfigResponse):void} cb
     * @public
     */
    CreateL4HealthConfig(req, cb) {
        const resp = new CreateL4HealthConfigResponse();
        this.request("CreateL4HealthConfig", req, resp, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击占比分析
     * @param {DescribeDDoSNetCountRequest} req
     * @param {function(string, DescribeDDoSNetCountResponse):void} cb
     * @public
     */
    DescribeDDoSNetCount(req, cb) {
        const resp = new DescribeDDoSNetCountResponse();
        this.request("DescribeDDoSNetCount", req, resp, cb);
    }
    /**
     * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
     * @param {CreateBoundIPRequest} req
     * @param {function(string, CreateBoundIPResponse):void} cb
     * @public
     */
    CreateBoundIP(req, cb) {
        const resp = new CreateBoundIPResponse();
        this.request("CreateBoundIP", req, resp, cb);
    }
    /**
     * 修改DDoS高级策略
     * @param {ModifyDDoSPolicyRequest} req
     * @param {function(string, ModifyDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyDDoSPolicy(req, cb) {
        const resp = new ModifyDDoSPolicyResponse();
        this.request("ModifyDDoSPolicy", req, resp, cb);
    }
    /**
     * 修改策略场景
     * @param {ModifyDDoSPolicyCaseRequest} req
     * @param {function(string, ModifyDDoSPolicyCaseResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyCase(req, cb) {
        const resp = new ModifyDDoSPolicyCaseResponse();
        this.request("ModifyDDoSPolicyCase", req, resp, cb);
    }
    /**
     * 为高防包、高防IP、高防IP专业版、棋牌盾等产品设置DDoS攻击的告警通知阈值
     * @param {ModifyDDoSAlarmThresholdRequest} req
     * @param {function(string, ModifyDDoSAlarmThresholdResponse):void} cb
     * @public
     */
    ModifyDDoSAlarmThreshold(req, cb) {
        const resp = new ModifyDDoSAlarmThresholdResponse();
        this.request("ModifyDDoSAlarmThreshold", req, resp, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击事件详情
     * @param {DescribeDDoSNetEvInfoRequest} req
     * @param {function(string, DescribeDDoSNetEvInfoResponse):void} cb
     * @public
     */
    DescribeDDoSNetEvInfo(req, cb) {
        const resp = new DescribeDDoSNetEvInfoResponse();
        this.request("DescribeDDoSNetEvInfo", req, resp, cb);
    }
    /**
     * 删除CC防护的访问频率控制规则
     * @param {DeleteCCFrequencyRulesRequest} req
     * @param {function(string, DeleteCCFrequencyRulesResponse):void} cb
     * @public
     */
    DeleteCCFrequencyRules(req, cb) {
        const resp = new DeleteCCFrequencyRulesResponse();
        this.request("DeleteCCFrequencyRules", req, resp, cb);
    }
    /**
     * 修改L4转发规则的会话保持，支持的子产品：高防IP、高防IP专业版
     * @param {ModifyL4KeepTimeRequest} req
     * @param {function(string, ModifyL4KeepTimeResponse):void} cb
     * @public
     */
    ModifyL4KeepTime(req, cb) {
        const resp = new ModifyL4KeepTimeResponse();
        this.request("ModifyL4KeepTime", req, resp, cb);
    }
    /**
     * 获取L4转发规则健康检查异常结果
     * @param {DescribeL4RulesErrHealthRequest} req
     * @param {function(string, DescribeL4RulesErrHealthResponse):void} cb
     * @public
     */
    DescribeL4RulesErrHealth(req, cb) {
        const resp = new DescribeL4RulesErrHealthResponse();
        this.request("DescribeL4RulesErrHealth", req, resp, cb);
    }
    /**
     * 批量上传7层转发规则
     * @param {CreateL7RulesUploadRequest} req
     * @param {function(string, CreateL7RulesUploadResponse):void} cb
     * @public
     */
    CreateL7RulesUpload(req, cb) {
        const resp = new CreateL7RulesUploadResponse();
        this.request("CreateL7RulesUpload", req, resp, cb);
    }
    /**
     * 获取DDoS攻击源IP地域分布图，支持全球攻击分布和国内省份攻击分布；
     * @param {DescribeDDoSAttackIPRegionMapRequest} req
     * @param {function(string, DescribeDDoSAttackIPRegionMapResponse):void} cb
     * @public
     */
    DescribeDDoSAttackIPRegionMap(req, cb) {
        const resp = new DescribeDDoSAttackIPRegionMapResponse();
        this.request("DescribeDDoSAttackIPRegionMap", req, resp, cb);
    }
    /**
     * 获取业务转发统计数据，支持转发流量和转发包速率
     * @param {DescribeTransmitStatisRequest} req
     * @param {function(string, DescribeTransmitStatisResponse):void} cb
     * @public
     */
    DescribeTransmitStatis(req, cb) {
        const resp = new DescribeTransmitStatisResponse();
        this.request("DescribeTransmitStatis", req, resp, cb);
    }
    /**
     * 修改CC防护等级
     * @param {ModifyCCLevelRequest} req
     * @param {function(string, ModifyCCLevelResponse):void} cb
     * @public
     */
    ModifyCCLevel(req, cb) {
        const resp = new ModifyCCLevelResponse();
        this.request("ModifyCCLevel", req, resp, cb);
    }
    /**
     * 开启或关闭DDoS防护状态，调用此接口允许临时关闭DDoS防护一段时间，等时间到了会自动开启DDoS防护；
     * @param {ModifyDDoSDefendStatusRequest} req
     * @param {function(string, ModifyDDoSDefendStatusResponse):void} cb
     * @public
     */
    ModifyDDoSDefendStatus(req, cb) {
        const resp = new ModifyDDoSDefendStatusResponse();
        this.request("ModifyDDoSDefendStatus", req, resp, cb);
    }
    /**
     * 获取黑洞解封次数
     * @param {DescribeUnBlockStatisRequest} req
     * @param {function(string, DescribeUnBlockStatisResponse):void} cb
     * @public
     */
    DescribeUnBlockStatis(req, cb) {
        const resp = new DescribeUnBlockStatisResponse();
        this.request("DescribeUnBlockStatis", req, resp, cb);
    }
    /**
     * 获取DDoS攻击流量带宽和攻击包速率数据
     * @param {DescribeDDoSTrendRequest} req
     * @param {function(string, DescribeDDoSTrendResponse):void} cb
     * @public
     */
    DescribeDDoSTrend(req, cb) {
        const resp = new DescribeDDoSTrendResponse();
        this.request("DescribeDDoSTrend", req, resp, cb);
    }
    /**
     * 高防IP专业版一键切回源站
     * @param {CreateNetReturnRequest} req
     * @param {function(string, CreateNetReturnResponse):void} cb
     * @public
     */
    CreateNetReturn(req, cb) {
        const resp = new CreateNetReturnResponse();
        this.request("CreateNetReturn", req, resp, cb);
    }
    /**
     * 开启或关闭DDoS防护，只支持基础防护产品；
     * @param {ModifyDDoSSwitchRequest} req
     * @param {function(string, ModifyDDoSSwitchResponse):void} cb
     * @public
     */
    ModifyDDoSSwitch(req, cb) {
        const resp = new ModifyDDoSSwitchResponse();
        this.request("ModifyDDoSSwitch", req, resp, cb);
    }
    /**
     * 读取或修改DDoS的防护等级
     * @param {ModifyDDoSLevelRequest} req
     * @param {function(string, ModifyDDoSLevelResponse):void} cb
     * @public
     */
    ModifyDDoSLevel(req, cb) {
        const resp = new ModifyDDoSLevelResponse();
        this.request("ModifyDDoSLevel", req, resp, cb);
    }
    /**
     * 获取DDoS攻击源列表
     * @param {DescribeDDoSAttackSourceRequest} req
     * @param {function(string, DescribeDDoSAttackSourceResponse):void} cb
     * @public
     */
    DescribeDDoSAttackSource(req, cb) {
        const resp = new DescribeDDoSAttackSourceResponse();
        this.request("DescribeDDoSAttackSource", req, resp, cb);
    }
    /**
     * 删除L7转发规则
     * @param {DeleteNewL7RulesRequest} req
     * @param {function(string, DeleteNewL7RulesResponse):void} cb
     * @public
     */
    DeleteNewL7Rules(req, cb) {
        const resp = new DeleteNewL7RulesResponse();
        this.request("DeleteNewL7Rules", req, resp, cb);
    }
    /**
     * 获取CC攻击事件列表
     * @param {DescribeCCEvListRequest} req
     * @param {function(string, DescribeCCEvListResponse):void} cb
     * @public
     */
    DescribeCCEvList(req, cb) {
        const resp = new DescribeCCEvListResponse();
        this.request("DescribeCCEvList", req, resp, cb);
    }
    /**
     * 支持水印密钥的添加，删除，开启，关闭
     * @param {ModifyDDoSWaterKeyRequest} req
     * @param {function(string, ModifyDDoSWaterKeyResponse):void} cb
     * @public
     */
    ModifyDDoSWaterKey(req, cb) {
        const resp = new ModifyDDoSWaterKeyResponse();
        this.request("ModifyDDoSWaterKey", req, resp, cb);
    }
    /**
     * 获取保险包套餐列表
     * @param {DescribeInsurePacksRequest} req
     * @param {function(string, DescribeInsurePacksResponse):void} cb
     * @public
     */
    DescribeInsurePacks(req, cb) {
        const resp = new DescribeInsurePacksResponse();
        this.request("DescribeInsurePacks", req, resp, cb);
    }
    /**
     * 删除四层转发规则
     * @param {DeleteL4RulesRequest} req
     * @param {function(string, DeleteL4RulesResponse):void} cb
     * @public
     */
    DeleteL4Rules(req, cb) {
        const resp = new DeleteL4RulesResponse();
        this.request("DeleteL4Rules", req, resp, cb);
    }
    /**
     * 获取高防IP专业版资源的DDoS攻击事件列表
     * @param {DescribeDDoSNetEvListRequest} req
     * @param {function(string, DescribeDDoSNetEvListResponse):void} cb
     * @public
     */
    DescribeDDoSNetEvList(req, cb) {
        const resp = new DescribeDDoSNetEvListResponse();
        this.request("DescribeDDoSNetEvList", req, resp, cb);
    }
    /**
     * 开启或关闭CC域名防护
     * @param {ModifyCCHostProtectionRequest} req
     * @param {function(string, ModifyCCHostProtectionResponse):void} cb
     * @public
     */
    ModifyCCHostProtection(req, cb) {
        const resp = new ModifyCCHostProtectionResponse();
        this.request("ModifyCCHostProtection", req, resp, cb);
    }
    /**
     * 获取地域的资源实例数
     * @param {DescribleRegionCountRequest} req
     * @param {function(string, DescribleRegionCountResponse):void} cb
     * @public
     */
    DescribleRegionCount(req, cb) {
        const resp = new DescribleRegionCountResponse();
        this.request("DescribleRegionCount", req, resp, cb);
    }
    /**
     * 添加7层(网站)转发规则
     * @param {CreateL7RulesRequest} req
     * @param {function(string, CreateL7RulesResponse):void} cb
     * @public
     */
    CreateL7Rules(req, cb) {
        const resp = new CreateL7RulesResponse();
        this.request("CreateL7Rules", req, resp, cb);
    }
    /**
     * 获取IP解封记录
     * @param {DescribeIpUnBlockListRequest} req
     * @param {function(string, DescribeIpUnBlockListResponse):void} cb
     * @public
     */
    DescribeIpUnBlockList(req, cb) {
        const resp = new DescribeIpUnBlockListResponse();
        this.request("DescribeIpUnBlockList", req, resp, cb);
    }
    /**
     * 获取独享包或共享包IP对应的云资产信息，只支持独享包和共享包的IP
     * @param {DescribeIPProductInfoRequest} req
     * @param {function(string, DescribeIPProductInfoResponse):void} cb
     * @public
     */
    DescribeIPProductInfo(req, cb) {
        const resp = new DescribeIPProductInfoResponse();
        this.request("DescribeIPProductInfo", req, resp, cb);
    }
    /**
     * 获取CC自定义策略
     * @param {DescribeCCSelfDefinePolicyRequest} req
     * @param {function(string, DescribeCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    DescribeCCSelfDefinePolicy(req, cb) {
        const resp = new DescribeCCSelfDefinePolicyResponse();
        this.request("DescribeCCSelfDefinePolicy", req, resp, cb);
    }
    /**
     * 开启或关闭CC防护的访问频率控制规则
     * @param {ModifyCCFrequencyRulesStatusRequest} req
     * @param {function(string, ModifyCCFrequencyRulesStatusResponse):void} cb
     * @public
     */
    ModifyCCFrequencyRulesStatus(req, cb) {
        const resp = new ModifyCCFrequencyRulesStatusResponse();
        this.request("ModifyCCFrequencyRulesStatus", req, resp, cb);
    }
    /**
     * 修改CC的防护阈值
     * @param {ModifyCCThresholdRequest} req
     * @param {function(string, ModifyCCThresholdResponse):void} cb
     * @public
     */
    ModifyCCThreshold(req, cb) {
        const resp = new ModifyCCThresholdResponse();
        this.request("ModifyCCThreshold", req, resp, cb);
    }
    /**
     * 获取四层转发规则
     * @param {DescribleL4RulesRequest} req
     * @param {function(string, DescribleL4RulesResponse):void} cb
     * @public
     */
    DescribleL4Rules(req, cb) {
        const resp = new DescribleL4RulesResponse();
        this.request("DescribleL4Rules", req, resp, cb);
    }
    /**
     * 修改7层转发规则
     * @param {ModifyNewDomainRulesRequest} req
     * @param {function(string, ModifyNewDomainRulesResponse):void} cb
     * @public
     */
    ModifyNewDomainRules(req, cb) {
        const resp = new ModifyNewDomainRulesResponse();
        this.request("ModifyNewDomainRules", req, resp, cb);
    }
    /**
     * 获取CC的Url白名单
     * @param {DescribeCCUrlAllowRequest} req
     * @param {function(string, DescribeCCUrlAllowResponse):void} cb
     * @public
     */
    DescribeCCUrlAllow(req, cb) {
        const resp = new DescribeCCUrlAllowResponse();
        this.request("DescribeCCUrlAllow", req, resp, cb);
    }
    /**
     * 导出七层健康检查配置
     * @param {DescribeL7HealthConfigRequest} req
     * @param {function(string, DescribeL7HealthConfigResponse):void} cb
     * @public
     */
    DescribeL7HealthConfig(req, cb) {
        const resp = new DescribeL7HealthConfigResponse();
        this.request("DescribeL7HealthConfig", req, resp, cb);
    }
    /**
     * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)
     * @param {DescribeCCTrendRequest} req
     * @param {function(string, DescribeCCTrendResponse):void} cb
     * @public
     */
    DescribeCCTrend(req, cb) {
        const resp = new DescribeCCTrendResponse();
        this.request("DescribeCCTrend", req, resp, cb);
    }
    /**
     * 添加CC防护的访问频率控制规则
     * @param {CreateCCFrequencyRulesRequest} req
     * @param {function(string, CreateCCFrequencyRulesResponse):void} cb
     * @public
     */
    CreateCCFrequencyRules(req, cb) {
        const resp = new CreateCCFrequencyRulesResponse();
        this.request("CreateCCFrequencyRules", req, resp, cb);
    }
    /**
     * 修改L7转发规则
     * @param {ModifyL7RulesRequest} req
     * @param {function(string, ModifyL7RulesResponse):void} cb
     * @public
     */
    ModifyL7Rules(req, cb) {
        const resp = new ModifyL7RulesResponse();
        this.request("ModifyL7Rules", req, resp, cb);
    }
    /**
     * 获取基础防护CC防护阈值
     * @param {DescribeBasicCCThresholdRequest} req
     * @param {function(string, DescribeBasicCCThresholdResponse):void} cb
     * @public
     */
    DescribeBasicCCThreshold(req, cb) {
        const resp = new DescribeBasicCCThresholdResponse();
        this.request("DescribeBasicCCThreshold", req, resp, cb);
    }
    /**
     * 上传七层健康检查配置
     * @param {CreateL7HealthConfigRequest} req
     * @param {function(string, CreateL7HealthConfigResponse):void} cb
     * @public
     */
    CreateL7HealthConfig(req, cb) {
        const resp = new CreateL7HealthConfigResponse();
        this.request("CreateL7HealthConfig", req, resp, cb);
    }
    /**
     * 获取资源的IP列表
     * @param {DescribeResIpListRequest} req
     * @param {function(string, DescribeResIpListResponse):void} cb
     * @public
     */
    DescribeResIpList(req, cb) {
        const resp = new DescribeResIpListResponse();
        this.request("DescribeResIpList", req, resp, cb);
    }
    /**
     * 资源实例重命名，支持独享包、共享包、高防IP、高防IP专业版；
     * @param {CreateInstanceNameRequest} req
     * @param {function(string, CreateInstanceNameResponse):void} cb
     * @public
     */
    CreateInstanceName(req, cb) {
        const resp = new CreateInstanceNameResponse();
        this.request("CreateInstanceName", req, resp, cb);
    }
    /**
     * 获取高防IP可添加的最多7层规则数量

     * @param {DescribeBGPIPL7RuleMaxCntRequest} req
     * @param {function(string, DescribeBGPIPL7RuleMaxCntResponse):void} cb
     * @public
     */
    DescribeBGPIPL7RuleMaxCnt(req, cb) {
        const resp = new DescribeBGPIPL7RuleMaxCntResponse();
        this.request("DescribeBGPIPL7RuleMaxCnt", req, resp, cb);
    }
    /**
     * 修改资源自动续费标记
     * @param {ModifyResourceRenewFlagRequest} req
     * @param {function(string, ModifyResourceRenewFlagResponse):void} cb
     * @public
     */
    ModifyResourceRenewFlag(req, cb) {
        const resp = new ModifyResourceRenewFlagResponse();
        this.request("ModifyResourceRenewFlag", req, resp, cb);
    }
    /**
     * 修改CC自定义策略
     * @param {ModifyCCSelfDefinePolicyRequest} req
     * @param {function(string, ModifyCCSelfDefinePolicyResponse):void} cb
     * @public
     */
    ModifyCCSelfDefinePolicy(req, cb) {
        const resp = new ModifyCCSelfDefinePolicyResponse();
        this.request("ModifyCCSelfDefinePolicy", req, resp, cb);
    }
    /**
     * 获取DDoS攻击事件详情
     * @param {DescribeDDoSEvInfoRequest} req
     * @param {function(string, DescribeDDoSEvInfoResponse):void} cb
     * @public
     */
    DescribeDDoSEvInfo(req, cb) {
        const resp = new DescribeDDoSEvInfoResponse();
        this.request("DescribeDDoSEvInfo", req, resp, cb);
    }
    /**
     * 获取DDoS高级策略
     * @param {DescribeDDoSPolicyRequest} req
     * @param {function(string, DescribeDDoSPolicyResponse):void} cb
     * @public
     */
    DescribeDDoSPolicy(req, cb) {
        const resp = new DescribeDDoSPolicyResponse();
        this.request("DescribeDDoSPolicy", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=dayu_client.js.map