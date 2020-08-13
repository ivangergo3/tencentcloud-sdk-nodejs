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
const SetTrafficMirrorHealthSwitchRequest = models_1.Models.SetTrafficMirrorHealthSwitchRequest;
const SetTrafficMirrorAliasResponse = models_1.Models.SetTrafficMirrorAliasResponse;
const DeleteL7RulesRequest = models_1.Models.DeleteL7RulesRequest;
const DeleteTrafficMirrorResponse = models_1.Models.DeleteTrafficMirrorResponse;
const ModifyL7BackendPortResponse = models_1.Models.ModifyL7BackendPortResponse;
const ModifyL4BackendProbePortResponse = models_1.Models.ModifyL4BackendProbePortResponse;
const BindTrafficMirrorReceiver = models_1.Models.BindTrafficMirrorReceiver;
const ModifyL4BackendPortResponse = models_1.Models.ModifyL4BackendPortResponse;
const ModifyL7LocationsResponse = models_1.Models.ModifyL7LocationsResponse;
const DescribeTrafficMirrorReceiverHealthStatusRequest = models_1.Models.DescribeTrafficMirrorReceiverHealthStatusRequest;
const UnbindL4Backend = models_1.Models.UnbindL4Backend;
const ModifyL4ListenerResponse = models_1.Models.ModifyL4ListenerResponse;
const DevicesBindInfoL4Listener = models_1.Models.DevicesBindInfoL4Listener;
const DescribeL4ListenerInfoRequest = models_1.Models.DescribeL4ListenerInfoRequest;
const L4ListenerInfo = models_1.Models.L4ListenerInfo;
const DescribeL7RulesRequest = models_1.Models.DescribeL7RulesRequest;
const UnbindL7BackendsResponse = models_1.Models.UnbindL7BackendsResponse;
const ModifyL4BackendWeightResponse = models_1.Models.ModifyL4BackendWeightResponse;
const DeleteL7DomainsResponse = models_1.Models.DeleteL7DomainsResponse;
const DevicesBindInfoBackend = models_1.Models.DevicesBindInfoBackend;
const UnbindL4BackendsRequest = models_1.Models.UnbindL4BackendsRequest;
const DescribeL7ListenersRequest = models_1.Models.DescribeL7ListenersRequest;
const DescribeTrafficMirrorListenersRequest = models_1.Models.DescribeTrafficMirrorListenersRequest;
const BindL7Backend = models_1.Models.BindL7Backend;
const ModifyL7ListenerResponse = models_1.Models.ModifyL7ListenerResponse;
const DescribeLoadBalancerTaskResultRequest = models_1.Models.DescribeLoadBalancerTaskResultRequest;
const DescribeL7RulesResponse = models_1.Models.DescribeL7RulesResponse;
const CreateTrafficMirrorResponse = models_1.Models.CreateTrafficMirrorResponse;
const DescribeDevicesBindInfoRequest = models_1.Models.DescribeDevicesBindInfoRequest;
const BindL4BackendsResponse = models_1.Models.BindL4BackendsResponse;
const TrafficMirrorListener = models_1.Models.TrafficMirrorListener;
const DescribeL7ListenersExResponse = models_1.Models.DescribeL7ListenersExResponse;
const UnbindL7Backend = models_1.Models.UnbindL7Backend;
const TrafficMirrorReceiver = models_1.Models.TrafficMirrorReceiver;
const TrafficMirrorPortStatus = models_1.Models.TrafficMirrorPortStatus;
const UploadCertResponse = models_1.Models.UploadCertResponse;
const DescribeTrafficMirrorReceiversResponse = models_1.Models.DescribeTrafficMirrorReceiversResponse;
const DeleteListenersRequest = models_1.Models.DeleteListenersRequest;
const ModifyL4BackendProbePortRequest = models_1.Models.ModifyL4BackendProbePortRequest;
const DescribeTrafficMirrorsRequest = models_1.Models.DescribeTrafficMirrorsRequest;
const UploadCertRequest = models_1.Models.UploadCertRequest;
const DescribeL4ListenerInfoResponse = models_1.Models.DescribeL4ListenerInfoResponse;
const BindTrafficMirrorListenersRequest = models_1.Models.BindTrafficMirrorListenersRequest;
const ModifyL7BackendPortRequest = models_1.Models.ModifyL7BackendPortRequest;
const ModifyL4BackendPortRequest = models_1.Models.ModifyL4BackendPortRequest;
const DescribeL4ListenersResponse = models_1.Models.DescribeL4ListenersResponse;
const ModifyL7LocationsRequest = models_1.Models.ModifyL7LocationsRequest;
const ModifyLoadBalancerResponse = models_1.Models.ModifyLoadBalancerResponse;
const CreateL4ListenersResponse = models_1.Models.CreateL4ListenersResponse;
const ModifyL7BackendWeightResponse = models_1.Models.ModifyL7BackendWeightResponse;
const DescribeTrafficMirrorsResponse = models_1.Models.DescribeTrafficMirrorsResponse;
const DescribeL7BackendsRequest = models_1.Models.DescribeL7BackendsRequest;
const L7Listener = models_1.Models.L7Listener;
const CreateL7RulesRequest = models_1.Models.CreateL7RulesRequest;
const ModifyL7BackendWeightRequest = models_1.Models.ModifyL7BackendWeightRequest;
const CreateL4ListenersRequest = models_1.Models.CreateL4ListenersRequest;
const ReplaceCertRequest = models_1.Models.ReplaceCertRequest;
const BindL7BackendsResponse = models_1.Models.BindL7BackendsResponse;
const L7Rule = models_1.Models.L7Rule;
const UnbindTrafficMirrorReceiversResponse = models_1.Models.UnbindTrafficMirrorReceiversResponse;
const DeleteL7DomainsRequest = models_1.Models.DeleteL7DomainsRequest;
const BindTrafficMirrorReceiversRequest = models_1.Models.BindTrafficMirrorReceiversRequest;
const BindTrafficMirrorListenersResponse = models_1.Models.BindTrafficMirrorListenersResponse;
const BindL7BackendsRequest = models_1.Models.BindL7BackendsRequest;
const DescribeL4Backend = models_1.Models.DescribeL4Backend;
const DescribeCertDetailResponse = models_1.Models.DescribeCertDetailResponse;
const DescribeL4BackendsRequest = models_1.Models.DescribeL4BackendsRequest;
const DescribeTrafficMirrorReceiverHealthStatusResponse = models_1.Models.DescribeTrafficMirrorReceiverHealthStatusResponse;
const BindTrafficMirrorReceiversResponse = models_1.Models.BindTrafficMirrorReceiversResponse;
const ReplaceCertResponse = models_1.Models.ReplaceCertResponse;
const DescribeLoadBalancerPortInfoRequest = models_1.Models.DescribeLoadBalancerPortInfoRequest;
const DevicesBindInfoLocation = models_1.Models.DevicesBindInfoLocation;
const SetTrafficMirrorHealthSwitchResponse = models_1.Models.SetTrafficMirrorHealthSwitchResponse;
const DeleteLoadBalancerRequest = models_1.Models.DeleteLoadBalancerRequest;
const UnbindTrafficMirrorListenersResponse = models_1.Models.UnbindTrafficMirrorListenersResponse;
const CreateL7Rule = models_1.Models.CreateL7Rule;
const CreateL7RulesResponse = models_1.Models.CreateL7RulesResponse;
const ModifyL7ListenerRequest = models_1.Models.ModifyL7ListenerRequest;
const DescribeTrafficMirrorReceiver = models_1.Models.DescribeTrafficMirrorReceiver;
const L7ExListener = models_1.Models.L7ExListener;
const L7ListenerInfo = models_1.Models.L7ListenerInfo;
const L7ListenerInfoRule = models_1.Models.L7ListenerInfoRule;
const DescribeL7BackendsResponse = models_1.Models.DescribeL7BackendsResponse;
const Filter = models_1.Models.Filter;
const DevicesBindInfoRule = models_1.Models.DevicesBindInfoRule;
const TrafficMirror = models_1.Models.TrafficMirror;
const DescribeLoadBalancersRequest = models_1.Models.DescribeLoadBalancersRequest;
const DevicesBindInfoLoadBalancer = models_1.Models.DevicesBindInfoLoadBalancer;
const L4Listener = models_1.Models.L4Listener;
const CreateL7Listener = models_1.Models.CreateL7Listener;
const DeleteLoadBalancerResponse = models_1.Models.DeleteLoadBalancerResponse;
const CreateTrafficMirrorRequest = models_1.Models.CreateTrafficMirrorRequest;
const BindL4BackendsRequest = models_1.Models.BindL4BackendsRequest;
const DescribeL7ListenerInfoResponse = models_1.Models.DescribeL7ListenerInfoResponse;
const DescribeL7ListenersResponse = models_1.Models.DescribeL7ListenersResponse;
const DeleteListenersResponse = models_1.Models.DeleteListenersResponse;
const CreateLoadBalancersResponse = models_1.Models.CreateLoadBalancersResponse;
const UnbindTrafficMirrorReceiver = models_1.Models.UnbindTrafficMirrorReceiver;
const ModifyLoadBalancerChargeModeResponse = models_1.Models.ModifyLoadBalancerChargeModeResponse;
const UnbindL7BackendsRequest = models_1.Models.UnbindL7BackendsRequest;
const L7ListenerInfoLocation = models_1.Models.L7ListenerInfoLocation;
const L7RulesLocation = models_1.Models.L7RulesLocation;
const ModifyLoadBalancerChargeModeListener = models_1.Models.ModifyLoadBalancerChargeModeListener;
const TrafficMirrorReciversStatus = models_1.Models.TrafficMirrorReciversStatus;
const CreateLoadBalancersRequest = models_1.Models.CreateLoadBalancersRequest;
const DescribeLoadBalancerPortInfoResponse = models_1.Models.DescribeLoadBalancerPortInfoResponse;
const DescribeL7ListenerInfoRequest = models_1.Models.DescribeL7ListenerInfoRequest;
const ModifyL4ListenerRequest = models_1.Models.ModifyL4ListenerRequest;
const L4Backend = models_1.Models.L4Backend;
const L7Backend = models_1.Models.L7Backend;
const ModifyL7LocationRule = models_1.Models.ModifyL7LocationRule;
const ModifyLoadBalancerRequest = models_1.Models.ModifyLoadBalancerRequest;
const DevicesBindInfoL7Listener = models_1.Models.DevicesBindInfoL7Listener;
const DescribeL4ListenersRequest = models_1.Models.DescribeL4ListenersRequest;
const CreateL7ListenersResponse = models_1.Models.CreateL7ListenersResponse;
const CreateLoadBalancerBzConf = models_1.Models.CreateLoadBalancerBzConf;
const DeleteTrafficMirrorRequest = models_1.Models.DeleteTrafficMirrorRequest;
const CreateL7ListenersRequest = models_1.Models.CreateL7ListenersRequest;
const BindL4Backend = models_1.Models.BindL4Backend;
const DescribeL7ListenersExRequest = models_1.Models.DescribeL7ListenersExRequest;
const DescribeLoadBalancerTaskResultResponse = models_1.Models.DescribeLoadBalancerTaskResultResponse;
const UnbindTrafficMirrorReceiversRequest = models_1.Models.UnbindTrafficMirrorReceiversRequest;
const UnbindTrafficMirrorListenersRequest = models_1.Models.UnbindTrafficMirrorListenersRequest;
const DescribeCertDetailRequest = models_1.Models.DescribeCertDetailRequest;
const DescribeDevicesBindInfoResponse = models_1.Models.DescribeDevicesBindInfoResponse;
const LoadBalancerPortInfoListener = models_1.Models.LoadBalancerPortInfoListener;
const DescribeL4BackendsResponse = models_1.Models.DescribeL4BackendsResponse;
const CreateL4Listener = models_1.Models.CreateL4Listener;
const DescribeTrafficMirrorListenersResponse = models_1.Models.DescribeTrafficMirrorListenersResponse;
const DescribeLoadBalancersResponse = models_1.Models.DescribeLoadBalancersResponse;
const DeleteL7RulesResponse = models_1.Models.DeleteL7RulesResponse;
const CertDetailLoadBalancer = models_1.Models.CertDetailLoadBalancer;
const DescribeTrafficMirrorReceiversRequest = models_1.Models.DescribeTrafficMirrorReceiversRequest;
const SetTrafficMirrorAliasRequest = models_1.Models.SetTrafficMirrorAliasRequest;
const UnbindL4BackendsResponse = models_1.Models.UnbindL4BackendsResponse;
const L7ListenerInfoBackend = models_1.Models.L7ListenerInfoBackend;
const ModifyLoadBalancerChargeModeRequest = models_1.Models.ModifyLoadBalancerChargeModeRequest;
const ModifyL4BackendWeightRequest = models_1.Models.ModifyL4BackendWeightRequest;
const LoadBalancer = models_1.Models.LoadBalancer;
/**
 * bmlb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("bmlb.tencentcloudapi.com", "2018-06-25", credential, region, profile);
    }
    /**
     * 获取黑石负载均衡七层监听器列表信息。
     * @param {DescribeL7ListenersRequest} req
     * @param {function(string, DescribeL7ListenersResponse):void} cb
     * @public
     */
    DescribeL7Listeners(req, cb) {
        const resp = new DescribeL7ListenersResponse();
        this.request("DescribeL7Listeners", req, resp, cb);
    }
    /**
     * 从流量镜像实例上解绑流量镜像接收机。
     * @param {UnbindTrafficMirrorReceiversRequest} req
     * @param {function(string, UnbindTrafficMirrorReceiversResponse):void} cb
     * @public
     */
    UnbindTrafficMirrorReceivers(req, cb) {
        const resp = new UnbindTrafficMirrorReceiversResponse();
        this.request("UnbindTrafficMirrorReceivers", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡七层转发路径后端实例权重。
     * @param {ModifyL7BackendWeightRequest} req
     * @param {function(string, ModifyL7BackendWeightResponse):void} cb
     * @public
     */
    ModifyL7BackendWeight(req, cb) {
        const resp = new ModifyL7BackendWeightResponse();
        this.request("ModifyL7BackendWeight", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器后端实例权重功能。
     * @param {ModifyL4BackendWeightRequest} req
     * @param {function(string, ModifyL4BackendWeightResponse):void} cb
     * @public
     */
    ModifyL4BackendWeight(req, cb) {
        const resp = new ModifyL4BackendWeightResponse();
        this.request("ModifyL4BackendWeight", req, resp, cb);
    }
    /**
     * 创建黑石四层负载均衡监听器功能。黑石负载均衡四层监听器提供了转发用户请求的具体规则，包括端口、协议、会话保持、健康检查等参数。
     * @param {CreateL4ListenersRequest} req
     * @param {function(string, CreateL4ListenersResponse):void} cb
     * @public
     */
    CreateL4Listeners(req, cb) {
        const resp = new CreateL4ListenersResponse();
        this.request("CreateL4Listeners", req, resp, cb);
    }
    /**
     * 解绑黑石负载均衡四层监听器物理服务器。
     * @param {UnbindL4BackendsRequest} req
     * @param {function(string, UnbindL4BackendsResponse):void} cb
     * @public
     */
    UnbindL4Backends(req, cb) {
        const resp = new UnbindL4BackendsResponse();
        this.request("UnbindL4Backends", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡七层监听器。
     * @param {ModifyL7ListenerRequest} req
     * @param {function(string, ModifyL7ListenerResponse):void} cb
     * @public
     */
    ModifyL7Listener(req, cb) {
        const resp = new ModifyL7ListenerResponse();
        this.request("ModifyL7Listener", req, resp, cb);
    }
    /**
     * 删除已创建的黑石流量镜像实例，删除过程是异步执行的，因此需要使用查询任务接口获取删除的结果。
     * @param {DeleteTrafficMirrorRequest} req
     * @param {function(string, DeleteTrafficMirrorResponse):void} cb
     * @public
     */
    DeleteTrafficMirror(req, cb) {
        const resp = new DeleteTrafficMirrorResponse();
        this.request("DeleteTrafficMirror", req, resp, cb);
    }
    /**
     * 创建黑石负载均衡七层转发规则。
     * @param {CreateL7RulesRequest} req
     * @param {function(string, CreateL7RulesResponse):void} cb
     * @public
     */
    CreateL7Rules(req, cb) {
        const resp = new CreateL7RulesResponse();
        this.request("CreateL7Rules", req, resp, cb);
    }
    /**
     * 获取流量镜像接收机健康状态。
     * @param {DescribeTrafficMirrorReceiverHealthStatusRequest} req
     * @param {function(string, DescribeTrafficMirrorReceiverHealthStatusResponse):void} cb
     * @public
     */
    DescribeTrafficMirrorReceiverHealthStatus(req, cb) {
        const resp = new DescribeTrafficMirrorReceiverHealthStatusResponse();
        this.request("DescribeTrafficMirrorReceiverHealthStatus", req, resp, cb);
    }
    /**
     * 解绑黑石物理服务器或者托管服务器到七层转发路径功能。
     * @param {UnbindL7BackendsRequest} req
     * @param {function(string, UnbindL7BackendsResponse):void} cb
     * @public
     */
    UnbindL7Backends(req, cb) {
        const resp = new UnbindL7BackendsResponse();
        this.request("UnbindL7Backends", req, resp, cb);
    }
    /**
     * 删除黑石负载均衡七层转发规则。
     * @param {DeleteL7RulesRequest} req
     * @param {function(string, DeleteL7RulesResponse):void} cb
     * @public
     */
    DeleteL7Rules(req, cb) {
        const resp = new DeleteL7RulesResponse();
        this.request("DeleteL7Rules", req, resp, cb);
    }
    /**
     * 查找绑定了某主机或者指定监听器名称的黑石负载均衡四层监听器。
     * @param {DescribeL4ListenerInfoRequest} req
     * @param {function(string, DescribeL4ListenerInfoResponse):void} cb
     * @public
     */
    DescribeL4ListenerInfo(req, cb) {
        const resp = new DescribeL4ListenerInfoResponse();
        this.request("DescribeL4ListenerInfo", req, resp, cb);
    }
    /**
     * 获取流量镜像的监听器列表信息。
     * @param {DescribeTrafficMirrorListenersRequest} req
     * @param {function(string, DescribeTrafficMirrorListenersResponse):void} cb
     * @public
     */
    DescribeTrafficMirrorListeners(req, cb) {
        const resp = new DescribeTrafficMirrorListenersResponse();
        this.request("DescribeTrafficMirrorListeners", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡七层转发路径。
     * @param {ModifyL7LocationsRequest} req
     * @param {function(string, ModifyL7LocationsResponse):void} cb
     * @public
     */
    ModifyL7Locations(req, cb) {
        const resp = new ModifyL7LocationsResponse();
        this.request("ModifyL7Locations", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器后端实例端口。
     * @param {ModifyL4BackendPortRequest} req
     * @param {function(string, ModifyL4BackendPortResponse):void} cb
     * @public
     */
    ModifyL4BackendPort(req, cb) {
        const resp = new ModifyL4BackendPortResponse();
        this.request("ModifyL4BackendPort", req, resp, cb);
    }
    /**
     * 删除用户指定的黑石负载均衡实例。
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        const resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }
    /**
     * 用来创建黑石负载均衡。为了使用黑石负载均衡服务，您必须要创建一个或者多个负载均衡实例。通过成功调用该接口，会返回负载均衡实例的唯一ID。用户可以购买的黑石负载均衡实例类型分为：公网类型、内网类型。公网类型负载均衡对应一个BGP VIP，可用于快速访问公网负载均衡绑定的物理服务器；内网类型负载均衡对应一个腾讯云内部的VIP，不能通过Internet访问，可快速访问内网负载均衡绑定的物理服务器。
     * @param {CreateLoadBalancersRequest} req
     * @param {function(string, CreateLoadBalancersResponse):void} cb
     * @public
     */
    CreateLoadBalancers(req, cb) {
        const resp = new CreateLoadBalancersResponse();
        this.request("CreateLoadBalancers", req, resp, cb);
    }
    /**
     * 获取黑石负载均衡七层转发规则。
     * @param {DescribeL7RulesRequest} req
     * @param {function(string, DescribeL7RulesResponse):void} cb
     * @public
     */
    DescribeL7Rules(req, cb) {
        const resp = new DescribeL7RulesResponse();
        this.request("DescribeL7Rules", req, resp, cb);
    }
    /**
     * 查询负载均衡实例异步任务的执行情况。
     * @param {DescribeLoadBalancerTaskResultRequest} req
     * @param {function(string, DescribeLoadBalancerTaskResultResponse):void} cb
     * @public
     */
    DescribeLoadBalancerTaskResult(req, cb) {
        const resp = new DescribeLoadBalancerTaskResultResponse();
        this.request("DescribeLoadBalancerTaskResult", req, resp, cb);
    }
    /**
     * 查找绑定了某主机或者有某转发域名黑石负载均衡七层监听器。
     * @param {DescribeL7ListenerInfoRequest} req
     * @param {function(string, DescribeL7ListenerInfoResponse):void} cb
     * @public
     */
    DescribeL7ListenerInfo(req, cb) {
        const resp = new DescribeL7ListenerInfoResponse();
        this.request("DescribeL7ListenerInfo", req, resp, cb);
    }
    /**
     * 获取黑石负载均衡四层监听器。
     * @param {DescribeL4ListenersRequest} req
     * @param {function(string, DescribeL4ListenersResponse):void} cb
     * @public
     */
    DescribeL4Listeners(req, cb) {
        const resp = new DescribeL4ListenersResponse();
        this.request("DescribeL4Listeners", req, resp, cb);
    }
    /**
     * 设置流量镜像的健康检查参数。
     * @param {SetTrafficMirrorHealthSwitchRequest} req
     * @param {function(string, SetTrafficMirrorHealthSwitchResponse):void} cb
     * @public
     */
    SetTrafficMirrorHealthSwitch(req, cb) {
        const resp = new SetTrafficMirrorHealthSwitchResponse();
        this.request("SetTrafficMirrorHealthSwitch", req, resp, cb);
    }
    /**
     * 获取黑石负载均衡实例列表
     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        const resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }
    /**
     * 删除黑石负载均衡监听器。
     * @param {DeleteListenersRequest} req
     * @param {function(string, DeleteListenersResponse):void} cb
     * @public
     */
    DeleteListeners(req, cb) {
        const resp = new DeleteListenersResponse();
        this.request("DeleteListeners", req, resp, cb);
    }
    /**
     * 获取黑石负载均衡证书详情。
     * @param {DescribeCertDetailRequest} req
     * @param {function(string, DescribeCertDetailResponse):void} cb
     * @public
     */
    DescribeCertDetail(req, cb) {
        const resp = new DescribeCertDetailResponse();
        this.request("DescribeCertDetail", req, resp, cb);
    }
    /**
     * 解绑流量镜像监听器。
     * @param {UnbindTrafficMirrorListenersRequest} req
     * @param {function(string, UnbindTrafficMirrorListenersResponse):void} cb
     * @public
     */
    UnbindTrafficMirrorListeners(req, cb) {
        const resp = new UnbindTrafficMirrorListenersResponse();
        this.request("UnbindTrafficMirrorListeners", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡七层转发路径后端实例端口。
     * @param {ModifyL7BackendPortRequest} req
     * @param {function(string, ModifyL7BackendPortResponse):void} cb
     * @public
     */
    ModifyL7BackendPort(req, cb) {
        const resp = new ModifyL7BackendPortResponse();
        this.request("ModifyL7BackendPort", req, resp, cb);
    }
    /**
     * 获取黑石负载均衡七层监听器绑定的主机列表
     * @param {DescribeL7BackendsRequest} req
     * @param {function(string, DescribeL7BackendsResponse):void} cb
     * @public
     */
    DescribeL7Backends(req, cb) {
        const resp = new DescribeL7BackendsResponse();
        this.request("DescribeL7Backends", req, resp, cb);
    }
    /**
     * 创建流量镜像实例。
     * @param {CreateTrafficMirrorRequest} req
     * @param {function(string, CreateTrafficMirrorResponse):void} cb
     * @public
     */
    CreateTrafficMirror(req, cb) {
        const resp = new CreateTrafficMirrorResponse();
        this.request("CreateTrafficMirror", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器后端探测端口。
     * @param {ModifyL4BackendProbePortRequest} req
     * @param {function(string, ModifyL4BackendProbePortResponse):void} cb
     * @public
     */
    ModifyL4BackendProbePort(req, cb) {
        const resp = new ModifyL4BackendProbePortResponse();
        this.request("ModifyL4BackendProbePort", req, resp, cb);
    }
    /**
     * 绑定黑石服务器到四层监听器。服务器包括物理服务器、虚拟机以及半托管机器。
     * @param {BindL4BackendsRequest} req
     * @param {function(string, BindL4BackendsResponse):void} cb
     * @public
     */
    BindL4Backends(req, cb) {
        const resp = new BindL4BackendsResponse();
        this.request("BindL4Backends", req, resp, cb);
    }
    /**
     * 绑定黑石物理服务器成为流量镜像接收机。
     * @param {BindTrafficMirrorReceiversRequest} req
     * @param {function(string, BindTrafficMirrorReceiversResponse):void} cb
     * @public
     */
    BindTrafficMirrorReceivers(req, cb) {
        const resp = new BindTrafficMirrorReceiversResponse();
        this.request("BindTrafficMirrorReceivers", req, resp, cb);
    }
    /**
     * 更新黑石负载均衡证书。
     * @param {ReplaceCertRequest} req
     * @param {function(string, ReplaceCertResponse):void} cb
     * @public
     */
    ReplaceCert(req, cb) {
        const resp = new ReplaceCertResponse();
        this.request("ReplaceCert", req, resp, cb);
    }
    /**
     * 删除黑石负载均衡七层转发域名。
     * @param {DeleteL7DomainsRequest} req
     * @param {function(string, DeleteL7DomainsResponse):void} cb
     * @public
     */
    DeleteL7Domains(req, cb) {
        const resp = new DeleteL7DomainsResponse();
        this.request("DeleteL7Domains", req, resp, cb);
    }
    /**
     * 获取流量镜像实例的列表信息。
     * @param {DescribeTrafficMirrorsRequest} req
     * @param {function(string, DescribeTrafficMirrorsResponse):void} cb
     * @public
     */
    DescribeTrafficMirrors(req, cb) {
        const resp = new DescribeTrafficMirrorsResponse();
        this.request("DescribeTrafficMirrors", req, resp, cb);
    }
    /**
     * 获取指定VPC下的7层监听器(支持模糊匹配)。
     * @param {DescribeL7ListenersExRequest} req
     * @param {function(string, DescribeL7ListenersExResponse):void} cb
     * @public
     */
    DescribeL7ListenersEx(req, cb) {
        const resp = new DescribeL7ListenersExResponse();
        this.request("DescribeL7ListenersEx", req, resp, cb);
    }
    /**
     * 创建黑石负载均衡证书。
     * @param {UploadCertRequest} req
     * @param {function(string, UploadCertResponse):void} cb
     * @public
     */
    UploadCert(req, cb) {
        const resp = new UploadCertResponse();
        this.request("UploadCert", req, resp, cb);
    }
    /**
     * 绑定黑石物理服务器或半托管服务器到七层转发路径。
     * @param {BindL7BackendsRequest} req
     * @param {function(string, BindL7BackendsResponse):void} cb
     * @public
     */
    BindL7Backends(req, cb) {
        const resp = new BindL7BackendsResponse();
        this.request("BindL7Backends", req, resp, cb);
    }
    /**
     * 获取黑石负载均衡四层监听器绑定的主机列表。
     * @param {DescribeL4BackendsRequest} req
     * @param {function(string, DescribeL4BackendsResponse):void} cb
     * @public
     */
    DescribeL4Backends(req, cb) {
        const resp = new DescribeL4BackendsResponse();
        this.request("DescribeL4Backends", req, resp, cb);
    }
    /**
     * 绑定黑石服务器七层监听器到流量镜像实例。
     * @param {BindTrafficMirrorListenersRequest} req
     * @param {function(string, BindTrafficMirrorListenersResponse):void} cb
     * @public
     */
    BindTrafficMirrorListeners(req, cb) {
        const resp = new BindTrafficMirrorListenersResponse();
        this.request("BindTrafficMirrorListeners", req, resp, cb);
    }
    /**
     * 根据输入参数来修改黑石负载均衡实例的基本配置信息。可能的信息包括负载均衡实例的名称，域名前缀。
     * @param {ModifyLoadBalancerRequest} req
     * @param {function(string, ModifyLoadBalancerResponse):void} cb
     * @public
     */
    ModifyLoadBalancer(req, cb) {
        const resp = new ModifyLoadBalancerResponse();
        this.request("ModifyLoadBalancer", req, resp, cb);
    }
    /**
     * 设置流量镜像的别名。
     * @param {SetTrafficMirrorAliasRequest} req
     * @param {function(string, SetTrafficMirrorAliasResponse):void} cb
     * @public
     */
    SetTrafficMirrorAlias(req, cb) {
        const resp = new SetTrafficMirrorAliasResponse();
        this.request("SetTrafficMirrorAlias", req, resp, cb);
    }
    /**
     * 获取黑石负载均衡端口相关信息。
     * @param {DescribeLoadBalancerPortInfoRequest} req
     * @param {function(string, DescribeLoadBalancerPortInfoResponse):void} cb
     * @public
     */
    DescribeLoadBalancerPortInfo(req, cb) {
        const resp = new DescribeLoadBalancerPortInfoResponse();
        this.request("DescribeLoadBalancerPortInfo", req, resp, cb);
    }
    /**
     * 更改黑石负载均衡的计费方式
     * @param {ModifyLoadBalancerChargeModeRequest} req
     * @param {function(string, ModifyLoadBalancerChargeModeResponse):void} cb
     * @public
     */
    ModifyLoadBalancerChargeMode(req, cb) {
        const resp = new ModifyLoadBalancerChargeModeResponse();
        this.request("ModifyLoadBalancerChargeMode", req, resp, cb);
    }
    /**
     * 创建黑石负载均衡七层监听器功能。负载均衡七层监听器提供了转发用户请求的具体规则，包括端口、协议等参数。
     * @param {CreateL7ListenersRequest} req
     * @param {function(string, CreateL7ListenersResponse):void} cb
     * @public
     */
    CreateL7Listeners(req, cb) {
        const resp = new CreateL7ListenersResponse();
        this.request("CreateL7Listeners", req, resp, cb);
    }
    /**
     * 查询黑石物理机和虚机以及托管服务器绑定的黑石负载均衡详情。
     * @param {DescribeDevicesBindInfoRequest} req
     * @param {function(string, DescribeDevicesBindInfoResponse):void} cb
     * @public
     */
    DescribeDevicesBindInfo(req, cb) {
        const resp = new DescribeDevicesBindInfoResponse();
        this.request("DescribeDevicesBindInfo", req, resp, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器。
     * @param {ModifyL4ListenerRequest} req
     * @param {function(string, ModifyL4ListenerResponse):void} cb
     * @public
     */
    ModifyL4Listener(req, cb) {
        const resp = new ModifyL4ListenerResponse();
        this.request("ModifyL4Listener", req, resp, cb);
    }
    /**
     * 获取指定流量镜像实例的接收机信息。
     * @param {DescribeTrafficMirrorReceiversRequest} req
     * @param {function(string, DescribeTrafficMirrorReceiversResponse):void} cb
     * @public
     */
    DescribeTrafficMirrorReceivers(req, cb) {
        const resp = new DescribeTrafficMirrorReceiversResponse();
        this.request("DescribeTrafficMirrorReceivers", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=bmlb_client.js.map