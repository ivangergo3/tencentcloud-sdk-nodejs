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
const DeleteRewriteRequest = models_1.Models.DeleteRewriteRequest;
const DescribeTargetGroupListResponse = models_1.Models.DescribeTargetGroupListResponse;
const DisassociateTargetGroupsResponse = models_1.Models.DisassociateTargetGroupsResponse;
const DescribeTargetGroupListRequest = models_1.Models.DescribeTargetGroupListRequest;
const BatchDeregisterTargetsResponse = models_1.Models.BatchDeregisterTargetsResponse;
const SetLoadBalancerSecurityGroupsResponse = models_1.Models.SetLoadBalancerSecurityGroupsResponse;
const ExtraInfo = models_1.Models.ExtraInfo;
const BatchModifyTargetWeightResponse = models_1.Models.BatchModifyTargetWeightResponse;
const SetSecurityGroupForLoadbalancersRequest = models_1.Models.SetSecurityGroupForLoadbalancersRequest;
const CreateLoadBalancerRequest = models_1.Models.CreateLoadBalancerRequest;
const RuleHealth = models_1.Models.RuleHealth;
const DeleteRuleRequest = models_1.Models.DeleteRuleRequest;
const ModifyLoadBalancerAttributesRequest = models_1.Models.ModifyLoadBalancerAttributesRequest;
const SetLoadBalancerClsLogResponse = models_1.Models.SetLoadBalancerClsLogResponse;
const ModifyRuleRequest = models_1.Models.ModifyRuleRequest;
const DescribeClassicalLBByInstanceIdResponse = models_1.Models.DescribeClassicalLBByInstanceIdResponse;
const DescribeBlockIPListResponse = models_1.Models.DescribeBlockIPListResponse;
const DescribeRewriteRequest = models_1.Models.DescribeRewriteRequest;
const CreateRuleResponse = models_1.Models.CreateRuleResponse;
const AssociateTargetGroupsRequest = models_1.Models.AssociateTargetGroupsRequest;
const ClassicalTarget = models_1.Models.ClassicalTarget;
const RsWeightRule = models_1.Models.RsWeightRule;
const DeregisterTargetsFromClassicalLBRequest = models_1.Models.DeregisterTargetsFromClassicalLBRequest;
const SetSecurityGroupForLoadbalancersResponse = models_1.Models.SetSecurityGroupForLoadbalancersResponse;
const BasicTargetGroupInfo = models_1.Models.BasicTargetGroupInfo;
const ModifyTargetWeightResponse = models_1.Models.ModifyTargetWeightResponse;
const DescribeTaskStatusRequest = models_1.Models.DescribeTaskStatusRequest;
const TargetGroupInstance = models_1.Models.TargetGroupInstance;
const DescribeRewriteResponse = models_1.Models.DescribeRewriteResponse;
const DescribeTargetGroupInstancesRequest = models_1.Models.DescribeTargetGroupInstancesRequest;
const RegisterTargetGroupInstancesResponse = models_1.Models.RegisterTargetGroupInstancesResponse;
const ClassicalTargetInfo = models_1.Models.ClassicalTargetInfo;
const DescribeTargetsRequest = models_1.Models.DescribeTargetsRequest;
const ZoneInfo = models_1.Models.ZoneInfo;
const RegisterTargetsWithClassicalLBResponse = models_1.Models.RegisterTargetsWithClassicalLBResponse;
const DescribeTargetGroupsResponse = models_1.Models.DescribeTargetGroupsResponse;
const LoadBalancerHealth = models_1.Models.LoadBalancerHealth;
const SetLoadBalancerClsLogRequest = models_1.Models.SetLoadBalancerClsLogRequest;
const DeleteLoadBalancerListenersRequest = models_1.Models.DeleteLoadBalancerListenersRequest;
const BlockedIP = models_1.Models.BlockedIP;
const ModifyRuleResponse = models_1.Models.ModifyRuleResponse;
const DescribeClassicalLBTargetsRequest = models_1.Models.DescribeClassicalLBTargetsRequest;
const DescribeListenersResponse = models_1.Models.DescribeListenersResponse;
const AutoRewriteRequest = models_1.Models.AutoRewriteRequest;
const DescribeLoadBalancerListByCertIdResponse = models_1.Models.DescribeLoadBalancerListByCertIdResponse;
const ModifyTargetGroupInstancesWeightResponse = models_1.Models.ModifyTargetGroupInstancesWeightResponse;
const DescribeTargetGroupsRequest = models_1.Models.DescribeTargetGroupsRequest;
const DescribeTaskStatusResponse = models_1.Models.DescribeTaskStatusResponse;
const BatchRegisterTargetsResponse = models_1.Models.BatchRegisterTargetsResponse;
const Target = models_1.Models.Target;
const DescribeBlockIPListRequest = models_1.Models.DescribeBlockIPListRequest;
const CertIdRelatedWithLoadBalancers = models_1.Models.CertIdRelatedWithLoadBalancers;
const DescribeClassicalLBHealthStatusResponse = models_1.Models.DescribeClassicalLBHealthStatusResponse;
const DescribeClsLogSetRequest = models_1.Models.DescribeClsLogSetRequest;
const Listener = models_1.Models.Listener;
const ModifyLoadBalancerAttributesResponse = models_1.Models.ModifyLoadBalancerAttributesResponse;
const RegisterTargetsWithClassicalLBRequest = models_1.Models.RegisterTargetsWithClassicalLBRequest;
const ModifyDomainAttributesResponse = models_1.Models.ModifyDomainAttributesResponse;
const ReplaceCertForLoadBalancersResponse = models_1.Models.ReplaceCertForLoadBalancersResponse;
const DescribeTargetsResponse = models_1.Models.DescribeTargetsResponse;
const ModifyListenerRequest = models_1.Models.ModifyListenerRequest;
const DeregisterTargetGroupInstancesResponse = models_1.Models.DeregisterTargetGroupInstancesResponse;
const RegisterTargetsRequest = models_1.Models.RegisterTargetsRequest;
const HealthCheck = models_1.Models.HealthCheck;
const AssociateTargetGroupsResponse = models_1.Models.AssociateTargetGroupsResponse;
const CreateTopicRequest = models_1.Models.CreateTopicRequest;
const DeleteListenerRequest = models_1.Models.DeleteListenerRequest;
const ClassicalHealth = models_1.Models.ClassicalHealth;
const ModifyTargetPortResponse = models_1.Models.ModifyTargetPortResponse;
const DescribeLoadBalancersDetailRequest = models_1.Models.DescribeLoadBalancersDetailRequest;
const TargetGroupBackend = models_1.Models.TargetGroupBackend;
const DescribeClassicalLBByInstanceIdRequest = models_1.Models.DescribeClassicalLBByInstanceIdRequest;
const ManualRewriteResponse = models_1.Models.ManualRewriteResponse;
const ModifyBlockIPListRequest = models_1.Models.ModifyBlockIPListRequest;
const ModifyBlockIPListResponse = models_1.Models.ModifyBlockIPListResponse;
const ExclusiveCluster = models_1.Models.ExclusiveCluster;
const DescribeClassicalLBHealthStatusRequest = models_1.Models.DescribeClassicalLBHealthStatusRequest;
const ModifyDomainRequest = models_1.Models.ModifyDomainRequest;
const CreateClsLogSetResponse = models_1.Models.CreateClsLogSetResponse;
const Backend = models_1.Models.Backend;
const LBChargePrepaid = models_1.Models.LBChargePrepaid;
const ClassicalListener = models_1.Models.ClassicalListener;
const DeleteLoadBalancerRequest = models_1.Models.DeleteLoadBalancerRequest;
const CertificateInput = models_1.Models.CertificateInput;
const CreateListenerResponse = models_1.Models.CreateListenerResponse;
const CreateTargetGroupResponse = models_1.Models.CreateTargetGroupResponse;
const CreateLoadBalancerSnatIpsResponse = models_1.Models.CreateLoadBalancerSnatIpsResponse;
const ClassicalLoadBalancerInfo = models_1.Models.ClassicalLoadBalancerInfo;
const RuleOutput = models_1.Models.RuleOutput;
const CreateTopicResponse = models_1.Models.CreateTopicResponse;
const CreateRuleRequest = models_1.Models.CreateRuleRequest;
const ModifyTargetGroupInstancesPortResponse = models_1.Models.ModifyTargetGroupInstancesPortResponse;
const RuleTargets = models_1.Models.RuleTargets;
const BatchDeregisterTargetsRequest = models_1.Models.BatchDeregisterTargetsRequest;
const DeregisterTargetGroupInstancesRequest = models_1.Models.DeregisterTargetGroupInstancesRequest;
const ManualRewriteRequest = models_1.Models.ManualRewriteRequest;
const ModifyListenerResponse = models_1.Models.ModifyListenerResponse;
const DescribeTargetHealthResponse = models_1.Models.DescribeTargetHealthResponse;
const DescribeTargetGroupInstancesResponse = models_1.Models.DescribeTargetGroupInstancesResponse;
const CreateTargetGroupRequest = models_1.Models.CreateTargetGroupRequest;
const ClusterItem = models_1.Models.ClusterItem;
const CreateListenerRequest = models_1.Models.CreateListenerRequest;
const CreateClsLogSetRequest = models_1.Models.CreateClsLogSetRequest;
const DisassociateTargetGroupsRequest = models_1.Models.DisassociateTargetGroupsRequest;
const Filter = models_1.Models.Filter;
const ModifyDomainResponse = models_1.Models.ModifyDomainResponse;
const RegisterTargetsResponse = models_1.Models.RegisterTargetsResponse;
const DeregisterTargetsFromClassicalLBResponse = models_1.Models.DeregisterTargetsFromClassicalLBResponse;
const DescribeLoadBalancersRequest = models_1.Models.DescribeLoadBalancersRequest;
const DeleteLoadBalancerResponse = models_1.Models.DeleteLoadBalancerResponse;
const AutoRewriteResponse = models_1.Models.AutoRewriteResponse;
const DeregisterTargetsResponse = models_1.Models.DeregisterTargetsResponse;
const RewriteTarget = models_1.Models.RewriteTarget;
const ModifyTargetWeightRequest = models_1.Models.ModifyTargetWeightRequest;
const DescribeLoadBalancersDetailResponse = models_1.Models.DescribeLoadBalancersDetailResponse;
const LoadBalancerDetail = models_1.Models.LoadBalancerDetail;
const BatchModifyTargetWeightRequest = models_1.Models.BatchModifyTargetWeightRequest;
const DeleteRewriteResponse = models_1.Models.DeleteRewriteResponse;
const BatchTarget = models_1.Models.BatchTarget;
const DescribeLoadBalancerListByCertIdRequest = models_1.Models.DescribeLoadBalancerListByCertIdRequest;
const TargetRegionInfo = models_1.Models.TargetRegionInfo;
const DescribeTargetHealthRequest = models_1.Models.DescribeTargetHealthRequest;
const ReplaceCertForLoadBalancersRequest = models_1.Models.ReplaceCertForLoadBalancersRequest;
const DeleteRuleResponse = models_1.Models.DeleteRuleResponse;
const DescribeClsLogSetResponse = models_1.Models.DescribeClsLogSetResponse;
const ModifyTargetGroupAttributeRequest = models_1.Models.ModifyTargetGroupAttributeRequest;
const ModifyDomainAttributesRequest = models_1.Models.ModifyDomainAttributesRequest;
const DeregisterTargetsRequest = models_1.Models.DeregisterTargetsRequest;
const InternetAccessible = models_1.Models.InternetAccessible;
const CreateLoadBalancerSnatIpsRequest = models_1.Models.CreateLoadBalancerSnatIpsRequest;
const ModifyTargetGroupInstancesWeightRequest = models_1.Models.ModifyTargetGroupInstancesWeightRequest;
const DeleteTargetGroupsResponse = models_1.Models.DeleteTargetGroupsResponse;
const ModifyTargetGroupInstancesPortRequest = models_1.Models.ModifyTargetGroupInstancesPortRequest;
const BatchRegisterTargetsRequest = models_1.Models.BatchRegisterTargetsRequest;
const ListenerBackend = models_1.Models.ListenerBackend;
const RuleInput = models_1.Models.RuleInput;
const TagInfo = models_1.Models.TagInfo;
const SnatIp = models_1.Models.SnatIp;
const DescribeBlockIPTaskResponse = models_1.Models.DescribeBlockIPTaskResponse;
const DescribeClassicalLBListenersResponse = models_1.Models.DescribeClassicalLBListenersResponse;
const ModifyTargetGroupAttributeResponse = models_1.Models.ModifyTargetGroupAttributeResponse;
const DescribeBlockIPTaskRequest = models_1.Models.DescribeBlockIPTaskRequest;
const CreateLoadBalancerResponse = models_1.Models.CreateLoadBalancerResponse;
const DeleteLoadBalancerListenersResponse = models_1.Models.DeleteLoadBalancerListenersResponse;
const DescribeListenersRequest = models_1.Models.DescribeListenersRequest;
const DeleteLoadBalancerSnatIpsRequest = models_1.Models.DeleteLoadBalancerSnatIpsRequest;
const SetLoadBalancerSecurityGroupsRequest = models_1.Models.SetLoadBalancerSecurityGroupsRequest;
const DescribeClassicalLBTargetsResponse = models_1.Models.DescribeClassicalLBTargetsResponse;
const RewriteLocationMap = models_1.Models.RewriteLocationMap;
const ModifyTargetPortRequest = models_1.Models.ModifyTargetPortRequest;
const DescribeLoadBalancersResponse = models_1.Models.DescribeLoadBalancersResponse;
const DeleteListenerResponse = models_1.Models.DeleteListenerResponse;
const DeleteLoadBalancerSnatIpsResponse = models_1.Models.DeleteLoadBalancerSnatIpsResponse;
const CertificateOutput = models_1.Models.CertificateOutput;
const DeleteTargetGroupsRequest = models_1.Models.DeleteTargetGroupsRequest;
const DescribeClassicalLBListenersRequest = models_1.Models.DescribeClassicalLBListenersRequest;
const TargetHealth = models_1.Models.TargetHealth;
const TargetGroupAssociation = models_1.Models.TargetGroupAssociation;
const ListenerHealth = models_1.Models.ListenerHealth;
const AssociationItem = models_1.Models.AssociationItem;
const TargetGroupInfo = models_1.Models.TargetGroupInfo;
const RegisterTargetGroupInstancesRequest = models_1.Models.RegisterTargetGroupInstancesRequest;
const LoadBalancer = models_1.Models.LoadBalancer;
/**
 * clb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("clb.tencentcloudapi.com", "2018-03-17", credential, region, profile);
    }
    /**
     * RegisterTargets 接口用来将一台或多台后端服务绑定到负载均衡的监听器（或7层转发规则），在此之前您需要先行创建相关的4层监听器或7层转发规则。对于四层监听器（TCP、UDP），只需指定监听器ID即可，对于七层监听器（HTTP、HTTPS），还需通过LocationId或者Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {RegisterTargetsRequest} req
     * @param {function(string, RegisterTargetsResponse):void} cb
     * @public
     */
    RegisterTargets(req, cb) {
        const resp = new RegisterTargetsResponse();
        this.request("RegisterTargets", req, resp, cb);
    }
    /**
     * 根据证书ID查询其在一个地域中所关联到负载均衡实例列表
     * @param {DescribeLoadBalancerListByCertIdRequest} req
     * @param {function(string, DescribeLoadBalancerListByCertIdResponse):void} cb
     * @public
     */
    DescribeLoadBalancerListByCertId(req, cb) {
        const resp = new DescribeLoadBalancerListByCertIdResponse();
        this.request("DescribeLoadBalancerListByCertId", req, resp, cb);
    }
    /**
     * DescribeClassicalLBListeners 接口用于获取传统型负载均衡的监听器信息。
     * @param {DescribeClassicalLBListenersRequest} req
     * @param {function(string, DescribeClassicalLBListenersResponse):void} cb
     * @public
     */
    DescribeClassicalLBListeners(req, cb) {
        const resp = new DescribeClassicalLBListenersResponse();
        this.request("DescribeClassicalLBListeners", req, resp, cb);
    }
    /**
     * 创建主题，默认开启全文索引和键值索引。如果不存在clb专有日志集，则创建失败。
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        const resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }
    /**
     * 对于SnatPro的负载均衡，这个接口用于删除SnatIp
     * @param {DeleteLoadBalancerSnatIpsRequest} req
     * @param {function(string, DeleteLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    DeleteLoadBalancerSnatIps(req, cb) {
        const resp = new DeleteLoadBalancerSnatIpsResponse();
        this.request("DeleteLoadBalancerSnatIps", req, resp, cb);
    }
    /**
     * 本接口用来删除负载均衡实例下的监听器（四层和七层）。
本接口为异步接口，接口返回成功后，需以得到的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeleteListenerRequest} req
     * @param {function(string, DeleteListenerResponse):void} cb
     * @public
     */
    DeleteListener(req, cb) {
        const resp = new DeleteListenerResponse();
        this.request("DeleteListener", req, resp, cb);
    }
    /**
     * 绑定或解绑一个安全组到多个公网负载均衡实例。注意：内网负载均衡不支持绑定安全组。
     * @param {SetSecurityGroupForLoadbalancersRequest} req
     * @param {function(string, SetSecurityGroupForLoadbalancersResponse):void} cb
     * @public
     */
    SetSecurityGroupForLoadbalancers(req, cb) {
        const resp = new SetSecurityGroupForLoadbalancersResponse();
        this.request("SetSecurityGroupForLoadbalancers", req, resp, cb);
    }
    /**
     * 批量解绑四七层后端服务。
     * @param {BatchDeregisterTargetsRequest} req
     * @param {function(string, BatchDeregisterTargetsResponse):void} cb
     * @public
     */
    BatchDeregisterTargets(req, cb) {
        const resp = new BatchDeregisterTargetsResponse();
        this.request("BatchDeregisterTargets", req, resp, cb);
    }
    /**
     * 注册服务器到目标组。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {RegisterTargetGroupInstancesRequest} req
     * @param {function(string, RegisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    RegisterTargetGroupInstances(req, cb) {
        const resp = new RegisterTargetGroupInstancesResponse();
        this.request("RegisterTargetGroupInstances", req, resp, cb);
    }
    /**
     * CreateRule 接口用于在一个已存在的负载均衡七层监听器下创建转发规则，七层监听器中，后端服务必须绑定到规则上而非监听器上。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        const resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }
    /**
     * 增加、删除、更新负载均衡的日志服务(CLS)主题
     * @param {SetLoadBalancerClsLogRequest} req
     * @param {function(string, SetLoadBalancerClsLogResponse):void} cb
     * @public
     */
    SetLoadBalancerClsLog(req, cb) {
        const resp = new SetLoadBalancerClsLogResponse();
        this.request("SetLoadBalancerClsLog", req, resp, cb);
    }
    /**
     * 用户需要先创建出一个HTTPS:443监听器，并在其下创建转发规则。通过调用本接口，系统会自动创建出一个HTTP:80监听器（如果之前不存在），并在其下创建转发规则，与HTTPS:443监听器下的Domains（在入参中指定）对应。创建成功后可以通过HTTP:80地址自动跳转为HTTPS:443地址进行访问。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {AutoRewriteRequest} req
     * @param {function(string, AutoRewriteResponse):void} cb
     * @public
     */
    AutoRewrite(req, cb) {
        const resp = new AutoRewriteResponse();
        this.request("AutoRewrite", req, resp, cb);
    }
    /**
     * 解除规则的目标组关联关系。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DisassociateTargetGroupsRequest} req
     * @param {function(string, DisassociateTargetGroupsResponse):void} cb
     * @public
     */
    DisassociateTargetGroups(req, cb) {
        const resp = new DisassociateTargetGroupsResponse();
        this.request("DisassociateTargetGroups", req, resp, cb);
    }
    /**
     * ModifyListener接口用来修改负载均衡监听器的属性，包括监听器名称、健康检查参数、证书信息、转发策略等。本接口不支持传统型负载均衡。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyListenerRequest} req
     * @param {function(string, ModifyListenerResponse):void} cb
     * @public
     */
    ModifyListener(req, cb) {
        const resp = new ModifyListenerResponse();
        this.request("ModifyListener", req, resp, cb);
    }
    /**
     * 该接口支持删除负载均衡的多个监听器。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeleteLoadBalancerListenersRequest} req
     * @param {function(string, DeleteLoadBalancerListenersResponse):void} cb
     * @public
     */
    DeleteLoadBalancerListeners(req, cb) {
        const resp = new DeleteLoadBalancerListenersResponse();
        this.request("DeleteLoadBalancerListeners", req, resp, cb);
    }
    /**
     * SetLoadBalancerSecurityGroups 接口支持对一个公网负载均衡实例执行设置（绑定、解绑）安全组操作。查询一个负载均衡实例目前已绑定的安全组，可使用 DescribeLoadBalancers 接口。本接口是set语义，
绑定操作时，入参需要传入负载均衡实例要绑定的所有安全组（已绑定的+新增绑定的）。
解绑操作时，入参需要传入负载均衡实例执行解绑后所绑定的所有安全组；如果要解绑所有安全组，可不传此参数，或传入空数组。注意：内网负载均衡不支持绑定安全组。
     * @param {SetLoadBalancerSecurityGroupsRequest} req
     * @param {function(string, SetLoadBalancerSecurityGroupsResponse):void} cb
     * @public
     */
    SetLoadBalancerSecurityGroups(req, cb) {
        const resp = new SetLoadBalancerSecurityGroupsResponse();
        this.request("SetLoadBalancerSecurityGroups", req, resp, cb);
    }
    /**
     * 删除目标组
     * @param {DeleteTargetGroupsRequest} req
     * @param {function(string, DeleteTargetGroupsResponse):void} cb
     * @public
     */
    DeleteTargetGroups(req, cb) {
        const resp = new DeleteTargetGroupsResponse();
        this.request("DeleteTargetGroups", req, resp, cb);
    }
    /**
     * 修改负载均衡的IP（client IP）封禁黑名单列表，一个转发规则最多支持封禁 2000000 个IP，及黑名单容量为 2000000。
（接口灰度中，如需使用请提工单）
     * @param {ModifyBlockIPListRequest} req
     * @param {function(string, ModifyBlockIPListResponse):void} cb
     * @public
     */
    ModifyBlockIPList(req, cb) {
        const resp = new ModifyBlockIPListResponse();
        this.request("ModifyBlockIPList", req, resp, cb);
    }
    /**
     * DeregisterTargetsFromClassicalLB 接口用于解绑负载均衡后端服务。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeregisterTargetsFromClassicalLBRequest} req
     * @param {function(string, DeregisterTargetsFromClassicalLBResponse):void} cb
     * @public
     */
    DeregisterTargetsFromClassicalLB(req, cb) {
        const resp = new DeregisterTargetsFromClassicalLBResponse();
        this.request("DeregisterTargetsFromClassicalLB", req, resp, cb);
    }
    /**
     * 创建clb专有日志集，此日志集用于存储clb的日志。
     * @param {CreateClsLogSetRequest} req
     * @param {function(string, CreateClsLogSetResponse):void} cb
     * @public
     */
    CreateClsLogSet(req, cb) {
        const resp = new CreateClsLogSetResponse();
        this.request("CreateClsLogSet", req, resp, cb);
    }
    /**
     * 查询负载均衡的详细信息，包括监听器，规则及后端目标。
     * @param {DescribeLoadBalancersDetailRequest} req
     * @param {function(string, DescribeLoadBalancersDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancersDetail(req, cb) {
        const resp = new DescribeLoadBalancersDetailResponse();
        this.request("DescribeLoadBalancersDetail", req, resp, cb);
    }
    /**
     * DeleteLoadBalancer 接口用以删除指定的一个或多个负载均衡实例。成功删除后，会把负载均衡实例下的监听器、转发规则一起删除，并把后端服务解绑。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        const resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }
    /**
     * ModifyDomainAttributes接口用于修改负载均衡7层监听器转发规则的域名级别属性，如修改域名、修改DefaultServer、开启/关闭Http2、修改证书。
本接口为异步接口，本接口返回成功后，需以返回的RequestId为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyDomainAttributesRequest} req
     * @param {function(string, ModifyDomainAttributesResponse):void} cb
     * @public
     */
    ModifyDomainAttributes(req, cb) {
        const resp = new ModifyDomainAttributesResponse();
        this.request("ModifyDomainAttributes", req, resp, cb);
    }
    /**
     * DeleteRule 接口用来删除负载均衡实例七层监听器下的转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        const resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }
    /**
     * ReplaceCertForLoadBalancers 接口用以替换负载均衡实例所关联的证书，对于各个地域的负载均衡，如果指定的老的证书ID与其有关联关系，则会先解除关联，再建立新证书与该负载均衡的关联关系。
此接口支持替换服务端证书或客户端证书。
需要使用的新证书，可以通过传入证书ID来指定，如果不指定证书ID，则必须传入证书内容等相关信息，用以新建证书并绑定至负载均衡。
注：本接口仅可从广州地域调用。
     * @param {ReplaceCertForLoadBalancersRequest} req
     * @param {function(string, ReplaceCertForLoadBalancersResponse):void} cb
     * @public
     */
    ReplaceCertForLoadBalancers(req, cb) {
        const resp = new ReplaceCertForLoadBalancersResponse();
        this.request("ReplaceCertForLoadBalancers", req, resp, cb);
    }
    /**
     * 本接口(AssociateTargetGroups)用来将目标组绑定到负载均衡的监听器（四层协议）或转发规则（七层协议）上。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {AssociateTargetGroupsRequest} req
     * @param {function(string, AssociateTargetGroupsResponse):void} cb
     * @public
     */
    AssociateTargetGroups(req, cb) {
        const resp = new AssociateTargetGroupsResponse();
        this.request("AssociateTargetGroups", req, resp, cb);
    }
    /**
     * 将服务器从目标组中解绑。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {DeregisterTargetGroupInstancesRequest} req
     * @param {function(string, DeregisterTargetGroupInstancesResponse):void} cb
     * @public
     */
    DeregisterTargetGroupInstances(req, cb) {
        const resp = new DeregisterTargetGroupInstancesResponse();
        this.request("DeregisterTargetGroupInstances", req, resp, cb);
    }
    /**
     * 查询一个地域的负载均衡实例列表

     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        const resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }
    /**
     * 查询一个负载均衡所封禁的IP列表（黑名单）。（接口灰度中，如需使用请提工单）
     * @param {DescribeBlockIPListRequest} req
     * @param {function(string, DescribeBlockIPListResponse):void} cb
     * @public
     */
    DescribeBlockIPList(req, cb) {
        const resp = new DescribeBlockIPListResponse();
        this.request("DescribeBlockIPList", req, resp, cb);
    }
    /**
     * DescribeListeners 接口可根据负载均衡器 ID，监听器的协议或端口作为过滤条件获取监听器列表。如果不指定任何过滤条件，则返回该负载均衡实例下的所有监听器。
     * @param {DescribeListenersRequest} req
     * @param {function(string, DescribeListenersResponse):void} cb
     * @public
     */
    DescribeListeners(req, cb) {
        const resp = new DescribeListenersResponse();
        this.request("DescribeListeners", req, resp, cb);
    }
    /**
     * DescribeClassicalLBTargets用于获取传统型负载均衡绑定的后端服务
     * @param {DescribeClassicalLBTargetsRequest} req
     * @param {function(string, DescribeClassicalLBTargetsResponse):void} cb
     * @public
     */
    DescribeClassicalLBTargets(req, cb) {
        const resp = new DescribeClassicalLBTargetsResponse();
        this.request("DescribeClassicalLBTargets", req, resp, cb);
    }
    /**
     * 在一个负载均衡实例下创建监听器。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {CreateListenerRequest} req
     * @param {function(string, CreateListenerResponse):void} cb
     * @public
     */
    CreateListener(req, cb) {
        const resp = new CreateListenerResponse();
        this.request("CreateListener", req, resp, cb);
    }
    /**
     * 批量绑定虚拟主机或弹性网卡，支持跨域绑定，支持四层、七层（TCP、UDP、HTTP、HTTPS）协议绑定。
     * @param {BatchRegisterTargetsRequest} req
     * @param {function(string, BatchRegisterTargetsResponse):void} cb
     * @public
     */
    BatchRegisterTargets(req, cb) {
        const resp = new BatchRegisterTargetsResponse();
        this.request("BatchRegisterTargets", req, resp, cb);
    }
    /**
     * 获取用户的clb独占日志集。
     * @param {DescribeClsLogSetRequest} req
     * @param {function(string, DescribeClsLogSetResponse):void} cb
     * @public
     */
    DescribeClsLogSet(req, cb) {
        const resp = new DescribeClsLogSetResponse();
        this.request("DescribeClsLogSet", req, resp, cb);
    }
    /**
     * ModifyTargetPort接口用于修改监听器绑定的后端服务的端口。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyTargetPortRequest} req
     * @param {function(string, ModifyTargetPortResponse):void} cb
     * @public
     */
    ModifyTargetPort(req, cb) {
        const resp = new ModifyTargetPortResponse();
        this.request("ModifyTargetPort", req, resp, cb);
    }
    /**
     * ModifyTargetWeight 接口用于修改负载均衡绑定的后端服务的转发权重。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyTargetWeightRequest} req
     * @param {function(string, ModifyTargetWeightResponse):void} cb
     * @public
     */
    ModifyTargetWeight(req, cb) {
        const resp = new ModifyTargetWeightResponse();
        this.request("ModifyTargetWeight", req, resp, cb);
    }
    /**
     * 本接口用于查询异步任务的执行状态，对于非查询类的接口（创建/删除负载均衡实例、监听器、规则以及绑定或解绑后端服务等），在接口调用成功后，都需要使用本接口查询任务最终是否执行成功。
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        const resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }
    /**
     * ModifyRule 接口用来修改负载均衡七层监听器下的转发规则的各项属性，包括转发路径、健康检查属性、转发策略等。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        const resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }
    /**
     * DescribeTargetHealth 接口用来获取负载均衡后端服务的健康检查结果，不支持传统型负载均衡。
     * @param {DescribeTargetHealthRequest} req
     * @param {function(string, DescribeTargetHealthResponse):void} cb
     * @public
     */
    DescribeTargetHealth(req, cb) {
        const resp = new DescribeTargetHealthResponse();
        this.request("DescribeTargetHealth", req, resp, cb);
    }
    /**
     * 获取目标组列表
     * @param {DescribeTargetGroupListRequest} req
     * @param {function(string, DescribeTargetGroupListResponse):void} cb
     * @public
     */
    DescribeTargetGroupList(req, cb) {
        const resp = new DescribeTargetGroupListResponse();
        this.request("DescribeTargetGroupList", req, resp, cb);
    }
    /**
     * 根据 ModifyBlockIPList 接口返回的异步任务的ID，查询封禁IP（黑名单）异步任务的执行状态。（接口灰度中，如需使用请提工单）
     * @param {DescribeBlockIPTaskRequest} req
     * @param {function(string, DescribeBlockIPTaskResponse):void} cb
     * @public
     */
    DescribeBlockIPTask(req, cb) {
        const resp = new DescribeBlockIPTaskResponse();
        this.request("DescribeBlockIPTask", req, resp, cb);
    }
    /**
     * 创建目标组。该功能正在内测中，如需使用，请通过[工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20LB&step=1)。
     * @param {CreateTargetGroupRequest} req
     * @param {function(string, CreateTargetGroupResponse):void} cb
     * @public
     */
    CreateTargetGroup(req, cb) {
        const resp = new CreateTargetGroupResponse();
        this.request("CreateTargetGroup", req, resp, cb);
    }
    /**
     * DescribeTargets 接口用来查询负载均衡实例的某些监听器绑定的后端服务列表。
     * @param {DescribeTargetsRequest} req
     * @param {function(string, DescribeTargetsResponse):void} cb
     * @public
     */
    DescribeTargets(req, cb) {
        const resp = new DescribeTargetsResponse();
        this.request("DescribeTargets", req, resp, cb);
    }
    /**
     * ModifyDomain接口用来修改负载均衡七层监听器下的域名。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ModifyDomainRequest} req
     * @param {function(string, ModifyDomainResponse):void} cb
     * @public
     */
    ModifyDomain(req, cb) {
        const resp = new ModifyDomainResponse();
        this.request("ModifyDomain", req, resp, cb);
    }
    /**
     * RegisterTargetsWithClassicalLB 接口用于绑定后端服务到传统型负载均衡。
本接口为异步接口，接口返回成功后，需以返回的 RequestId 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {RegisterTargetsWithClassicalLBRequest} req
     * @param {function(string, RegisterTargetsWithClassicalLBResponse):void} cb
     * @public
     */
    RegisterTargetsWithClassicalLB(req, cb) {
        const resp = new RegisterTargetsWithClassicalLBResponse();
        this.request("RegisterTargetsWithClassicalLB", req, resp, cb);
    }
    /**
     * DescribeRewrite 接口可根据负载均衡实例ID，查询一个负载均衡实例下转发规则的重定向关系。如果不指定监听器ID或转发规则ID，则返回该负载均衡实例下的所有重定向关系。
     * @param {DescribeRewriteRequest} req
     * @param {function(string, DescribeRewriteResponse):void} cb
     * @public
     */
    DescribeRewrite(req, cb) {
        const resp = new DescribeRewriteResponse();
        this.request("DescribeRewrite", req, resp, cb);
    }
    /**
     * 查询目标组信息
     * @param {DescribeTargetGroupsRequest} req
     * @param {function(string, DescribeTargetGroupsResponse):void} cb
     * @public
     */
    DescribeTargetGroups(req, cb) {
        const resp = new DescribeTargetGroupsResponse();
        this.request("DescribeTargetGroups", req, resp, cb);
    }
    /**
     * 修改目标组的名称或者默认端口属性
     * @param {ModifyTargetGroupAttributeRequest} req
     * @param {function(string, ModifyTargetGroupAttributeResponse):void} cb
     * @public
     */
    ModifyTargetGroupAttribute(req, cb) {
        const resp = new ModifyTargetGroupAttributeResponse();
        this.request("ModifyTargetGroupAttribute", req, resp, cb);
    }
    /**
     * DescribeClassicalLBHealthStatus用于获取传统型负载均衡后端的健康状态
     * @param {DescribeClassicalLBHealthStatusRequest} req
     * @param {function(string, DescribeClassicalLBHealthStatusResponse):void} cb
     * @public
     */
    DescribeClassicalLBHealthStatus(req, cb) {
        const resp = new DescribeClassicalLBHealthStatusResponse();
        this.request("DescribeClassicalLBHealthStatus", req, resp, cb);
    }
    /**
     * DeregisterTargets 接口用来将一台或多台后端服务从负载均衡的监听器或转发规则上解绑，对于四层监听器，只需指定监听器ID即可，对于七层监听器，还需通过LocationId或Domain+Url指定转发规则。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeregisterTargetsRequest} req
     * @param {function(string, DeregisterTargetsResponse):void} cb
     * @public
     */
    DeregisterTargets(req, cb) {
        const resp = new DeregisterTargetsResponse();
        this.request("DeregisterTargets", req, resp, cb);
    }
    /**
     * 修改负载均衡实例的属性。支持修改负载均衡实例的名称、设置负载均衡的跨域属性。
     * @param {ModifyLoadBalancerAttributesRequest} req
     * @param {function(string, ModifyLoadBalancerAttributesResponse):void} cb
     * @public
     */
    ModifyLoadBalancerAttributes(req, cb) {
        const resp = new ModifyLoadBalancerAttributesResponse();
        this.request("ModifyLoadBalancerAttributes", req, resp, cb);
    }
    /**
     * 批量修改目标组的服务器权重。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {ModifyTargetGroupInstancesWeightRequest} req
     * @param {function(string, ModifyTargetGroupInstancesWeightResponse):void} cb
     * @public
     */
    ModifyTargetGroupInstancesWeight(req, cb) {
        const resp = new ModifyTargetGroupInstancesWeightResponse();
        this.request("ModifyTargetGroupInstancesWeight", req, resp, cb);
    }
    /**
     * 针对SnatPro负载均衡，这个接口用于添加SnatIp，如果负载均衡没有开启SnatPro，添加SnatIp后会自动开启
     * @param {CreateLoadBalancerSnatIpsRequest} req
     * @param {function(string, CreateLoadBalancerSnatIpsResponse):void} cb
     * @public
     */
    CreateLoadBalancerSnatIps(req, cb) {
        const resp = new CreateLoadBalancerSnatIpsResponse();
        this.request("CreateLoadBalancerSnatIps", req, resp, cb);
    }
    /**
     * DescribeClassicalLBByInstanceId用于通过后端实例ID获取传统型负载均衡ID列表
     * @param {DescribeClassicalLBByInstanceIdRequest} req
     * @param {function(string, DescribeClassicalLBByInstanceIdResponse):void} cb
     * @public
     */
    DescribeClassicalLBByInstanceId(req, cb) {
        const resp = new DescribeClassicalLBByInstanceIdResponse();
        this.request("DescribeClassicalLBByInstanceId", req, resp, cb);
    }
    /**
     * 获取目标组绑定的服务器信息
     * @param {DescribeTargetGroupInstancesRequest} req
     * @param {function(string, DescribeTargetGroupInstancesResponse):void} cb
     * @public
     */
    DescribeTargetGroupInstances(req, cb) {
        const resp = new DescribeTargetGroupInstancesResponse();
        this.request("DescribeTargetGroupInstances", req, resp, cb);
    }
    /**
     * 批量修改目标组服务器端口。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {ModifyTargetGroupInstancesPortRequest} req
     * @param {function(string, ModifyTargetGroupInstancesPortResponse):void} cb
     * @public
     */
    ModifyTargetGroupInstancesPort(req, cb) {
        const resp = new ModifyTargetGroupInstancesPortResponse();
        this.request("ModifyTargetGroupInstancesPort", req, resp, cb);
    }
    /**
     * 本接口(BatchModifyTargetWeight)用于批量修改负载均衡监听器绑定的后端机器的转发权重，支持负载均衡的4层和7层监听器；不支持传统型负载均衡。
本接口为异步接口，本接口返回成功后需以返回的 RequestID 为入参，调用 DescribeTaskStatus 接口查询本次任务是否成功。
     * @param {BatchModifyTargetWeightRequest} req
     * @param {function(string, BatchModifyTargetWeightResponse):void} cb
     * @public
     */
    BatchModifyTargetWeight(req, cb) {
        const resp = new BatchModifyTargetWeightResponse();
        this.request("BatchModifyTargetWeight", req, resp, cb);
    }
    /**
     * DeleteRewrite 接口支持删除指定转发规则之间的重定向关系。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {DeleteRewriteRequest} req
     * @param {function(string, DeleteRewriteResponse):void} cb
     * @public
     */
    DeleteRewrite(req, cb) {
        const resp = new DeleteRewriteResponse();
        this.request("DeleteRewrite", req, resp, cb);
    }
    /**
     * 本接口(CreateLoadBalancer)用来创建负载均衡实例（本接口只支持购买按量计费的负载均衡，包年包月的负载均衡请通过控制台购买）。为了使用负载均衡服务，您必须购买一个或多个负载均衡实例。成功调用该接口后，会返回负载均衡实例的唯一 ID。负载均衡实例的类型分为：公网、内网。详情可参考产品说明中的产品类型。
注意：(1)指定可用区申请负载均衡、跨zone容灾(仅香港支持)【如果您需要体验该功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category)】；(2)目前只有北京、上海、广州支持IPv6；(3)一个账号在每个地域的默认购买配额为：公网100个，内网100个。
本接口为异步接口，接口成功返回后，可使用 DescribeLoadBalancers 接口查询负载均衡实例的状态（如创建中、正常），以确定是否创建成功。
     * @param {CreateLoadBalancerRequest} req
     * @param {function(string, CreateLoadBalancerResponse):void} cb
     * @public
     */
    CreateLoadBalancer(req, cb) {
        const resp = new CreateLoadBalancerResponse();
        this.request("CreateLoadBalancer", req, resp, cb);
    }
    /**
     * 用户手动配置原访问地址和重定向地址，系统自动将原访问地址的请求重定向至对应路径的目的地址。同一域名下可以配置多条路径作为重定向策略，实现http/https之间请求的自动跳转。设置重定向时，需满足如下约束条件：若A已经重定向至B，则A不能再重定向至C（除非先删除老的重定向关系，再建立新的重定向关系），B不能重定向至任何其它地址。
本接口为异步接口，本接口返回成功后需以返回的RequestID为入参，调用DescribeTaskStatus接口查询本次任务是否成功。
     * @param {ManualRewriteRequest} req
     * @param {function(string, ManualRewriteResponse):void} cb
     * @public
     */
    ManualRewrite(req, cb) {
        const resp = new ManualRewriteResponse();
        this.request("ManualRewrite", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=clb_client.js.map