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
const ModifySubnetDHCPRelayResponse = models_1.Models.ModifySubnetDHCPRelayResponse;
const DescribeNatSubnetsResponse = models_1.Models.DescribeNatSubnetsResponse;
const DescribeVpcPeerConnectionsResponse = models_1.Models.DescribeVpcPeerConnectionsResponse;
const UnbindIpsFromNatGatewayResponse = models_1.Models.UnbindIpsFromNatGatewayResponse;
const IKEOptionsSpecification = models_1.Models.IKEOptionsSpecification;
const ModifyRouteTableRequest = models_1.Models.ModifyRouteTableRequest;
const CreateRoutePoliciesRequest = models_1.Models.CreateRoutePoliciesRequest;
const Filter = models_1.Models.Filter;
const CreateVirtualSubnetWithVlanRequest = models_1.Models.CreateVirtualSubnetWithVlanRequest;
const DeleteVirtualIpResponse = models_1.Models.DeleteVirtualIpResponse;
const DescribeSubnetsRequest = models_1.Models.DescribeSubnetsRequest;
const CreateSubnetRequest = models_1.Models.CreateSubnetRequest;
const DownloadCustomerGatewayConfigurationRequest = models_1.Models.DownloadCustomerGatewayConfigurationRequest;
const CreateHostedInterfaceResponse = models_1.Models.CreateHostedInterfaceResponse;
const DescribeSubnetByDeviceResponse = models_1.Models.DescribeSubnetByDeviceResponse;
const DeleteSubnetResponse = models_1.Models.DeleteSubnetResponse;
const DeregisterIpsResponse = models_1.Models.DeregisterIpsResponse;
const DescribeSubnetsResponse = models_1.Models.DescribeSubnetsResponse;
const ModifyVpcPeerConnectionResponse = models_1.Models.ModifyVpcPeerConnectionResponse;
const DescribeCustomerGatewaysResponse = models_1.Models.DescribeCustomerGatewaysResponse;
const UnbindSubnetsFromNatGatewayRequest = models_1.Models.UnbindSubnetsFromNatGatewayRequest;
const SubnetInfo = models_1.Models.SubnetInfo;
const DeleteRoutePolicyResponse = models_1.Models.DeleteRoutePolicyResponse;
const DescribeVpnGatewaysResponse = models_1.Models.DescribeVpnGatewaysResponse;
const VpcInfo = models_1.Models.VpcInfo;
const CreateInterfacesResponse = models_1.Models.CreateInterfacesResponse;
const DescribeNatSubnetsRequest = models_1.Models.DescribeNatSubnetsRequest;
const DownloadCustomerGatewayConfigurationResponse = models_1.Models.DownloadCustomerGatewayConfigurationResponse;
const DeleteSubnetRequest = models_1.Models.DeleteSubnetRequest;
const DeleteRoutePolicyRequest = models_1.Models.DeleteRoutePolicyRequest;
const ModifyRoutePolicyRequest = models_1.Models.ModifyRoutePolicyRequest;
const RouteTable = models_1.Models.RouteTable;
const DescribeVpcQuotaRequest = models_1.Models.DescribeVpcQuotaRequest;
const CreateDockerSubnetWithVlanResponse = models_1.Models.CreateDockerSubnetWithVlanResponse;
const DescribeSubnetAvailableIpsRequest = models_1.Models.DescribeSubnetAvailableIpsRequest;
const DeleteVpcRequest = models_1.Models.DeleteVpcRequest;
const UnbindEipsFromNatGatewayRequest = models_1.Models.UnbindEipsFromNatGatewayRequest;
const DescribeRoutePoliciesResponse = models_1.Models.DescribeRoutePoliciesResponse;
const CreateSubnetResponse = models_1.Models.CreateSubnetResponse;
const AcceptVpcPeerConnectionRequest = models_1.Models.AcceptVpcPeerConnectionRequest;
const BindSubnetsToNatGatewayResponse = models_1.Models.BindSubnetsToNatGatewayResponse;
const VpcSubnetViewInfo = models_1.Models.VpcSubnetViewInfo;
const CreateVpcResponse = models_1.Models.CreateVpcResponse;
const CreateCustomerGatewayResponse = models_1.Models.CreateCustomerGatewayResponse;
const DescribeTaskStatusResponse = models_1.Models.DescribeTaskStatusResponse;
const DeleteVpnGatewayRequest = models_1.Models.DeleteVpnGatewayRequest;
const NatSubnetInfo = models_1.Models.NatSubnetInfo;
const DescribeSubnetByHostedDeviceRequest = models_1.Models.DescribeSubnetByHostedDeviceRequest;
const CreateVpcPeerConnectionResponse = models_1.Models.CreateVpcPeerConnectionResponse;
const ModifySubnetAttributeRequest = models_1.Models.ModifySubnetAttributeRequest;
const ResetVpnConnectionRequest = models_1.Models.ResetVpnConnectionRequest;
const DeleteNatGatewayRequest = models_1.Models.DeleteNatGatewayRequest;
const DeleteVpnConnectionResponse = models_1.Models.DeleteVpnConnectionResponse;
const ModifyCustomerGatewayAttributeResponse = models_1.Models.ModifyCustomerGatewayAttributeResponse;
const VpnConnection = models_1.Models.VpnConnection;
const CreateDockerSubnetWithVlanRequest = models_1.Models.CreateDockerSubnetWithVlanRequest;
const RoutePolicy = models_1.Models.RoutePolicy;
const DeleteHostedInterfaceResponse = models_1.Models.DeleteHostedInterfaceResponse;
const DeleteVpcPeerConnectionResponse = models_1.Models.DeleteVpcPeerConnectionResponse;
const DeleteHostedInterfacesResponse = models_1.Models.DeleteHostedInterfacesResponse;
const ModifySubnetDHCPRelayRequest = models_1.Models.ModifySubnetDHCPRelayRequest;
const DeleteVpcPeerConnectionRequest = models_1.Models.DeleteVpcPeerConnectionRequest;
const DeleteHostedInterfaceRequest = models_1.Models.DeleteHostedInterfaceRequest;
const BindEipsToNatGatewayRequest = models_1.Models.BindEipsToNatGatewayRequest;
const DeleteInterfacesRequest = models_1.Models.DeleteInterfacesRequest;
const DescribeVpcsRequest = models_1.Models.DescribeVpcsRequest;
const DescribeVpcResourceResponse = models_1.Models.DescribeVpcResourceResponse;
const RejectVpcPeerConnectionResponse = models_1.Models.RejectVpcPeerConnectionResponse;
const ModifyCustomerGatewayAttributeRequest = models_1.Models.ModifyCustomerGatewayAttributeRequest;
const DescribeRouteTablesResponse = models_1.Models.DescribeRouteTablesResponse;
const ModifyRouteTableResponse = models_1.Models.ModifyRouteTableResponse;
const DescribeNatGatewaysResponse = models_1.Models.DescribeNatGatewaysResponse;
const ModifyVpcAttributeResponse = models_1.Models.ModifyVpcAttributeResponse;
const ModifyVpnConnectionAttributeResponse = models_1.Models.ModifyVpnConnectionAttributeResponse;
const DescribeSubnetAvailableIpsResponse = models_1.Models.DescribeSubnetAvailableIpsResponse;
const DescribeNatGatewaysRequest = models_1.Models.DescribeNatGatewaysRequest;
const VpcPeerConnection = models_1.Models.VpcPeerConnection;
const VpcSubnetCreateInfo = models_1.Models.VpcSubnetCreateInfo;
const DescribeVpnConnectionsRequest = models_1.Models.DescribeVpnConnectionsRequest;
const ModifyVpcPeerConnectionRequest = models_1.Models.ModifyVpcPeerConnectionRequest;
const DeleteCustomerGatewayResponse = models_1.Models.DeleteCustomerGatewayResponse;
const ModifyVpcAttributeRequest = models_1.Models.ModifyVpcAttributeRequest;
const CreateRoutePoliciesResponse = models_1.Models.CreateRoutePoliciesResponse;
const DescribeRouteTablesRequest = models_1.Models.DescribeRouteTablesRequest;
const DeleteVirtualIpRequest = models_1.Models.DeleteVirtualIpRequest;
const DescribeVpnGatewaysRequest = models_1.Models.DescribeVpnGatewaysRequest;
const CreateHostedInterfaceRequest = models_1.Models.CreateHostedInterfaceRequest;
const NatGatewayInfo = models_1.Models.NatGatewayInfo;
const BindSubnetsToNatGatewayRequest = models_1.Models.BindSubnetsToNatGatewayRequest;
const ResetVpnConnectionResponse = models_1.Models.ResetVpnConnectionResponse;
const RejectVpcPeerConnectionRequest = models_1.Models.RejectVpcPeerConnectionRequest;
const VpcViewInfo = models_1.Models.VpcViewInfo;
const DescribeCustomerGatewaysRequest = models_1.Models.DescribeCustomerGatewaysRequest;
const CreateCustomerGatewayRequest = models_1.Models.CreateCustomerGatewayRequest;
const DeleteHostedInterfacesRequest = models_1.Models.DeleteHostedInterfacesRequest;
const DescribeTaskStatusRequest = models_1.Models.DescribeTaskStatusRequest;
const ModifyVpnConnectionAttributeRequest = models_1.Models.ModifyVpnConnectionAttributeRequest;
const DescribeVpcResourceRequest = models_1.Models.DescribeVpcResourceRequest;
const BindEipsToNatGatewayResponse = models_1.Models.BindEipsToNatGatewayResponse;
const DescribeVpcViewResponse = models_1.Models.DescribeVpcViewResponse;
const DescribeVpcViewRequest = models_1.Models.DescribeVpcViewRequest;
const DescribeSubnetByDeviceRequest = models_1.Models.DescribeSubnetByDeviceRequest;
const AcceptVpcPeerConnectionResponse = models_1.Models.AcceptVpcPeerConnectionResponse;
const DescribeRoutePoliciesRequest = models_1.Models.DescribeRoutePoliciesRequest;
const VpnGateway = models_1.Models.VpnGateway;
const ModifyVpnGatewayAttributeRequest = models_1.Models.ModifyVpnGatewayAttributeRequest;
const CreateNatGatewayRequest = models_1.Models.CreateNatGatewayRequest;
const IPSECOptionsSpecification = models_1.Models.IPSECOptionsSpecification;
const DeleteVpnConnectionRequest = models_1.Models.DeleteVpnConnectionRequest;
const UnbindSubnetsFromNatGatewayResponse = models_1.Models.UnbindSubnetsFromNatGatewayResponse;
const DescribeVpnConnectionsResponse = models_1.Models.DescribeVpnConnectionsResponse;
const DeleteCustomerGatewayRequest = models_1.Models.DeleteCustomerGatewayRequest;
const IpInfo = models_1.Models.IpInfo;
const UpgradeNatGatewayRequest = models_1.Models.UpgradeNatGatewayRequest;
const DeleteVpnGatewayResponse = models_1.Models.DeleteVpnGatewayResponse;
const DeleteInterfacesResponse = models_1.Models.DeleteInterfacesResponse;
const UnbindIpsFromNatGatewayRequest = models_1.Models.UnbindIpsFromNatGatewayRequest;
const CreateVirtualSubnetWithVlanResponse = models_1.Models.CreateVirtualSubnetWithVlanResponse;
const ModifyVpnGatewayAttributeResponse = models_1.Models.ModifyVpnGatewayAttributeResponse;
const DescribeVpcQuotaResponse = models_1.Models.DescribeVpcQuotaResponse;
const UnbindEipsFromNatGatewayResponse = models_1.Models.UnbindEipsFromNatGatewayResponse;
const ModifySubnetAttributeResponse = models_1.Models.ModifySubnetAttributeResponse;
const CreateInterfacesRequest = models_1.Models.CreateInterfacesRequest;
const DescribeVpcPeerConnectionsRequest = models_1.Models.DescribeVpcPeerConnectionsRequest;
const CreateVpcRequest = models_1.Models.CreateVpcRequest;
const DescribeSubnetByHostedDeviceResponse = models_1.Models.DescribeSubnetByHostedDeviceResponse;
const CreateVpcPeerConnectionRequest = models_1.Models.CreateVpcPeerConnectionRequest;
const CustomerGateway = models_1.Models.CustomerGateway;
const ModifyRoutePolicyResponse = models_1.Models.ModifyRoutePolicyResponse;
const AsyncRegisterIpsResponse = models_1.Models.AsyncRegisterIpsResponse;
const DeleteVpcResponse = models_1.Models.DeleteVpcResponse;
const BindIpsToNatGatewayResponse = models_1.Models.BindIpsToNatGatewayResponse;
const VpcQuota = models_1.Models.VpcQuota;
const CreateNatGatewayResponse = models_1.Models.CreateNatGatewayResponse;
const AsyncRegisterIpsRequest = models_1.Models.AsyncRegisterIpsRequest;
const BindIpsToNatGatewayRequest = models_1.Models.BindIpsToNatGatewayRequest;
const DescribeVpcsResponse = models_1.Models.DescribeVpcsResponse;
const SubnetCreateInputInfo = models_1.Models.SubnetCreateInputInfo;
const DeregisterIpsRequest = models_1.Models.DeregisterIpsRequest;
const SecurityPolicyDatabase = models_1.Models.SecurityPolicyDatabase;
const VpcResource = models_1.Models.VpcResource;
const UpgradeNatGatewayResponse = models_1.Models.UpgradeNatGatewayResponse;
const DeleteNatGatewayResponse = models_1.Models.DeleteNatGatewayResponse;
/**
 * bmvpc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("bmvpc.tencentcloudapi.com", "2018-06-25", credential, region, profile);
    }
    /**
     * 本接口(DownloadCustomerGatewayConfiguration)用于下载VPN通道配置。
     * @param {DownloadCustomerGatewayConfigurationRequest} req
     * @param {function(string, DownloadCustomerGatewayConfigurationResponse):void} cb
     * @public
     */
    DownloadCustomerGatewayConfiguration(req, cb) {
        const resp = new DownloadCustomerGatewayConfigurationResponse();
        this.request("DownloadCustomerGatewayConfiguration", req, resp, cb);
    }
    /**
     * 本接口（DescribeCustomerGateways）用于查询对端网关列表。
     * @param {DescribeCustomerGatewaysRequest} req
     * @param {function(string, DescribeCustomerGatewaysResponse):void} cb
     * @public
     */
    DescribeCustomerGateways(req, cb) {
        const resp = new DescribeCustomerGatewaysResponse();
        this.request("DescribeCustomerGateways", req, resp, cb);
    }
    /**
     * 创建对等连接
     * @param {CreateVpcPeerConnectionRequest} req
     * @param {function(string, CreateVpcPeerConnectionResponse):void} cb
     * @public
     */
    CreateVpcPeerConnection(req, cb) {
        const resp = new CreateVpcPeerConnectionResponse();
        this.request("CreateVpcPeerConnection", req, resp, cb);
    }
    /**
     * 批量注册虚拟IP，异步接口。通过接口来查询任务进度。每次请求最多注册256个IP
     * @param {AsyncRegisterIpsRequest} req
     * @param {function(string, AsyncRegisterIpsResponse):void} cb
     * @public
     */
    AsyncRegisterIps(req, cb) {
        const resp = new AsyncRegisterIpsResponse();
        this.request("AsyncRegisterIps", req, resp, cb);
    }
    /**
     * 本接口（DescribeRouteTables）用于查询路由表。
     * @param {DescribeRouteTablesRequest} req
     * @param {function(string, DescribeRouteTablesResponse):void} cb
     * @public
     */
    DescribeRouteTables(req, cb) {
        const resp = new DescribeRouteTablesResponse();
        this.request("DescribeRouteTables", req, resp, cb);
    }
    /**
     * NAT网关解绑该EIP后，NAT网关将不会使用该EIP作为访问外网的源IP地址

     * @param {UnbindEipsFromNatGatewayRequest} req
     * @param {function(string, UnbindEipsFromNatGatewayResponse):void} cb
     * @public
     */
    UnbindEipsFromNatGateway(req, cb) {
        const resp = new UnbindEipsFromNatGatewayResponse();
        this.request("UnbindEipsFromNatGateway", req, resp, cb);
    }
    /**
     * NAT网关绑定EIP接口，可将EIP绑定到NAT网关，该EIP作为访问外网的源IP地址，将流量发送到Internet
     * @param {BindEipsToNatGatewayRequest} req
     * @param {function(string, BindEipsToNatGatewayResponse):void} cb
     * @public
     */
    BindEipsToNatGateway(req, cb) {
        const resp = new BindEipsToNatGatewayResponse();
        this.request("BindEipsToNatGateway", req, resp, cb);
    }
    /**
     * 修改黑石对等连接
     * @param {ModifyVpcPeerConnectionRequest} req
     * @param {function(string, ModifyVpcPeerConnectionResponse):void} cb
     * @public
     */
    ModifyVpcPeerConnection(req, cb) {
        const resp = new ModifyVpcPeerConnectionResponse();
        this.request("ModifyVpcPeerConnection", req, resp, cb);
    }
    /**
     * 创建黑石私有网络
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        const resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }
    /**
     * 创建NAT网关接口，可针对网段方式、子网全部IP、子网部分IP这三种方式创建NAT网关
     * @param {CreateNatGatewayRequest} req
     * @param {function(string, CreateNatGatewayResponse):void} cb
     * @public
     */
    CreateNatGateway(req, cb) {
        const resp = new CreateNatGatewayResponse();
        this.request("CreateNatGateway", req, resp, cb);
    }
    /**
     * 获取子网内可用IP列表
     * @param {DescribeSubnetAvailableIpsRequest} req
     * @param {function(string, DescribeSubnetAvailableIpsResponse):void} cb
     * @public
     */
    DescribeSubnetAvailableIps(req, cb) {
        const resp = new DescribeSubnetAvailableIpsResponse();
        this.request("DescribeSubnetAvailableIps", req, resp, cb);
    }
    /**
     * 本接口（DescribeRoutePolicies）用于查询路由表条目。
     * @param {DescribeRoutePoliciesRequest} req
     * @param {function(string, DescribeRoutePoliciesResponse):void} cb
     * @public
     */
    DescribeRoutePolicies(req, cb) {
        const resp = new DescribeRoutePoliciesResponse();
        this.request("DescribeRoutePolicies", req, resp, cb);
    }
    /**
     * 本接口(DeleteVpc)用于删除黑石私有网络(VPC)。

删除私有网络前，请清理该私有网络下所有资源，包括子网、负载均衡、弹性 IP、对等连接、NAT 网关、专线通道、SSLVPN 等资源。
     * @param {DeleteVpcRequest} req
     * @param {function(string, DeleteVpcResponse):void} cb
     * @public
     */
    DeleteVpc(req, cb) {
        const resp = new DeleteVpcResponse();
        this.request("DeleteVpc", req, resp, cb);
    }
    /**
     * 本接口用于托管机器从VLANID不为5的子网中移除。
1) 不能从vlanId 为5的子网中移除。
2) 每次调用最多能支持传入10台物理机。
     * @param {DeleteHostedInterfaceRequest} req
     * @param {function(string, DeleteHostedInterfaceResponse):void} cb
     * @public
     */
    DeleteHostedInterface(req, cb) {
        const resp = new DeleteHostedInterfaceResponse();
        this.request("DeleteHostedInterface", req, resp, cb);
    }
    /**
     * 注销私有网络IP为空闲
     * @param {DeregisterIpsRequest} req
     * @param {function(string, DeregisterIpsResponse):void} cb
     * @public
     */
    DeregisterIps(req, cb) {
        const resp = new DeregisterIpsResponse();
        this.request("DeregisterIps", req, resp, cb);
    }
    /**
     * 修改自定义路由
     * @param {ModifyRoutePolicyRequest} req
     * @param {function(string, ModifyRoutePolicyResponse):void} cb
     * @public
     */
    ModifyRoutePolicy(req, cb) {
        const resp = new ModifyRoutePolicyResponse();
        this.request("ModifyRoutePolicy", req, resp, cb);
    }
    /**
     * 物理机加入子网
     * @param {CreateInterfacesRequest} req
     * @param {function(string, CreateInterfacesResponse):void} cb
     * @public
     */
    CreateInterfaces(req, cb) {
        const resp = new CreateInterfacesResponse();
        this.request("CreateInterfaces", req, resp, cb);
    }
    /**
     * 本接口（ModifyCustomerGatewayAttribute）用于修改对端网关信息。
     * @param {ModifyCustomerGatewayAttributeRequest} req
     * @param {function(string, ModifyCustomerGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyCustomerGatewayAttribute(req, cb) {
        const resp = new ModifyCustomerGatewayAttributeResponse();
        this.request("ModifyCustomerGatewayAttribute", req, resp, cb);
    }
    /**
     * 删除黑石路由表路由规则
     * @param {DeleteRoutePolicyRequest} req
     * @param {function(string, DeleteRoutePolicyResponse):void} cb
     * @public
     */
    DeleteRoutePolicy(req, cb) {
        const resp = new DeleteRoutePolicyResponse();
        this.request("DeleteRoutePolicy", req, resp, cb);
    }
    /**
     * 本接口（ModifyVpnConnectionAttribute）用于修改VPN通道。
     * @param {ModifyVpnConnectionAttributeRequest} req
     * @param {function(string, ModifyVpnConnectionAttributeResponse):void} cb
     * @public
     */
    ModifyVpnConnectionAttribute(req, cb) {
        const resp = new ModifyVpnConnectionAttributeResponse();
        this.request("ModifyVpnConnectionAttribute", req, resp, cb);
    }
    /**
     * 本接口(DeleteVpnConnection)用于删除VPN通道。
     * @param {DeleteVpnConnectionRequest} req
     * @param {function(string, DeleteVpnConnectionResponse):void} cb
     * @public
     */
    DeleteVpnConnection(req, cb) {
        const resp = new DeleteVpnConnectionResponse();
        this.request("DeleteVpnConnection", req, resp, cb);
    }
    /**
     * 本接口（DeleteVpnGateway）用于删除VPN网关。
     * @param {DeleteVpnGatewayRequest} req
     * @param {function(string, DeleteVpnGatewayResponse):void} cb
     * @public
     */
    DeleteVpnGateway(req, cb) {
        const resp = new DeleteVpnGatewayResponse();
        this.request("DeleteVpnGateway", req, resp, cb);
    }
    /**
     * 可用于将子网的部分IP绑定到NAT网关
     * @param {BindIpsToNatGatewayRequest} req
     * @param {function(string, BindIpsToNatGatewayResponse):void} cb
     * @public
     */
    BindIpsToNatGateway(req, cb) {
        const resp = new BindIpsToNatGatewayResponse();
        this.request("BindIpsToNatGateway", req, resp, cb);
    }
    /**
     * 本接口（ModifyVpnGatewayAttribute）用于修改VPN网关属性。
     * @param {ModifyVpnGatewayAttributeRequest} req
     * @param {function(string, ModifyVpnGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyVpnGatewayAttribute(req, cb) {
        const resp = new ModifyVpnGatewayAttributeResponse();
        this.request("ModifyVpnGatewayAttribute", req, resp, cb);
    }
    /**
     * NAT网关解绑IP接口，可将子网的部分IP从NAT网关中解绑
     * @param {UnbindIpsFromNatGatewayRequest} req
     * @param {function(string, UnbindIpsFromNatGatewayResponse):void} cb
     * @public
     */
    UnbindIpsFromNatGateway(req, cb) {
        const resp = new UnbindIpsFromNatGatewayResponse();
        this.request("UnbindIpsFromNatGateway", req, resp, cb);
    }
    /**
     * 本接口（DeleteCustomerGateway）用于删除对端网关。
     * @param {DeleteCustomerGatewayRequest} req
     * @param {function(string, DeleteCustomerGatewayResponse):void} cb
     * @public
     */
    DeleteCustomerGateway(req, cb) {
        const resp = new DeleteCustomerGatewayResponse();
        this.request("DeleteCustomerGateway", req, resp, cb);
    }
    /**
     * 本接口（DeleteSubnet）用于删除黑石私有网络子网。
删除子网前，请清理该子网下所有资源，包括物理机、负载均衡、黑石数据库、弹性IP、NAT网关等资源
     * @param {DeleteSubnetRequest} req
     * @param {function(string, DeleteSubnetResponse):void} cb
     * @public
     */
    DeleteSubnet(req, cb) {
        const resp = new DeleteSubnetResponse();
        this.request("DeleteSubnet", req, resp, cb);
    }
    /**
     * 修改子网属性
     * @param {ModifySubnetAttributeRequest} req
     * @param {function(string, ModifySubnetAttributeResponse):void} cb
     * @public
     */
    ModifySubnetAttribute(req, cb) {
        const resp = new ModifySubnetAttributeResponse();
        this.request("ModifySubnetAttribute", req, resp, cb);
    }
    /**
     * 可获取NAT网关绑定的子网信息
     * @param {DescribeNatSubnetsRequest} req
     * @param {function(string, DescribeNatSubnetsResponse):void} cb
     * @public
     */
    DescribeNatSubnets(req, cb) {
        const resp = new DescribeNatSubnetsResponse();
        this.request("DescribeNatSubnets", req, resp, cb);
    }
    /**
     * 拒绝黑石对等连接申请
     * @param {RejectVpcPeerConnectionRequest} req
     * @param {function(string, RejectVpcPeerConnectionResponse):void} cb
     * @public
     */
    RejectVpcPeerConnection(req, cb) {
        const resp = new RejectVpcPeerConnectionResponse();
        this.request("RejectVpcPeerConnection", req, resp, cb);
    }
    /**
     * 本接口（DescribeSubnets）用于查询黑石子网列表。
     * @param {DescribeSubnetsRequest} req
     * @param {function(string, DescribeSubnetsResponse):void} cb
     * @public
     */
    DescribeSubnets(req, cb) {
        const resp = new DescribeSubnetsResponse();
        this.request("DescribeSubnets", req, resp, cb);
    }
    /**
     * 物理机可以加入物理机子网，虚拟子网，DOCKER子网，通过此接口可以查询物理机加入的子网。
     * @param {DescribeSubnetByDeviceRequest} req
     * @param {function(string, DescribeSubnetByDeviceResponse):void} cb
     * @public
     */
    DescribeSubnetByDevice(req, cb) {
        const resp = new DescribeSubnetByDeviceResponse();
        this.request("DescribeSubnetByDevice", req, resp, cb);
    }
    /**
     * 修改路由表
     * @param {ModifyRouteTableRequest} req
     * @param {function(string, ModifyRouteTableResponse):void} cb
     * @public
     */
    ModifyRouteTable(req, cb) {
        const resp = new ModifyRouteTableResponse();
        this.request("ModifyRouteTable", req, resp, cb);
    }
    /**
     * 修改子网DHCP Relay属性
     * @param {ModifySubnetDHCPRelayRequest} req
     * @param {function(string, ModifySubnetDHCPRelayResponse):void} cb
     * @public
     */
    ModifySubnetDHCPRelay(req, cb) {
        const resp = new ModifySubnetDHCPRelayResponse();
        this.request("ModifySubnetDHCPRelay", req, resp, cb);
    }
    /**
     * 本接口（DescribeVpcView）用于查询VPC网络拓扑视图。
     * @param {DescribeVpcViewRequest} req
     * @param {function(string, DescribeVpcViewResponse):void} cb
     * @public
     */
    DescribeVpcView(req, cb) {
        const resp = new DescribeVpcViewResponse();
        this.request("DescribeVpcView", req, resp, cb);
    }
    /**
     * 退还虚拟IP。此接口只能退还虚拟IP，物理机IP不能退还。
     * @param {DeleteVirtualIpRequest} req
     * @param {function(string, DeleteVirtualIpResponse):void} cb
     * @public
     */
    DeleteVirtualIp(req, cb) {
        const resp = new DeleteVirtualIpResponse();
        this.request("DeleteVirtualIp", req, resp, cb);
    }
    /**
     * 本接口（CreateCustomerGateway）用于创建对端网关。
     * @param {CreateCustomerGatewayRequest} req
     * @param {function(string, CreateCustomerGatewayResponse):void} cb
     * @public
     */
    CreateCustomerGateway(req, cb) {
        const resp = new CreateCustomerGatewayResponse();
        this.request("CreateCustomerGateway", req, resp, cb);
    }
    /**
     * 根据任务ID，获取任务的执行状态
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        const resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }
    /**
     * 创建黑石Docker子网， 如果不指定VlanId，将会分配2000--2999范围的VlanId; 子网会关闭分布式网关
     * @param {CreateDockerSubnetWithVlanRequest} req
     * @param {function(string, CreateDockerSubnetWithVlanResponse):void} cb
     * @public
     */
    CreateDockerSubnetWithVlan(req, cb) {
        const resp = new CreateDockerSubnetWithVlanResponse();
        this.request("CreateDockerSubnetWithVlan", req, resp, cb);
    }
    /**
     * 升级NAT网关接口，可NAT网关修改为小型NAT网关、中型NAT网关、以及大型NAT网关

     * @param {UpgradeNatGatewayRequest} req
     * @param {function(string, UpgradeNatGatewayResponse):void} cb
     * @public
     */
    UpgradeNatGateway(req, cb) {
        const resp = new UpgradeNatGatewayResponse();
        this.request("UpgradeNatGateway", req, resp, cb);
    }
    /**
     * 创建黑石路由表的路由规则
     * @param {CreateRoutePoliciesRequest} req
     * @param {function(string, CreateRoutePoliciesResponse):void} cb
     * @public
     */
    CreateRoutePolicies(req, cb) {
        const resp = new CreateRoutePoliciesResponse();
        this.request("CreateRoutePolicies", req, resp, cb);
    }
    /**
     * 查询黑石私有网络关联资源
     * @param {DescribeVpcResourceRequest} req
     * @param {function(string, DescribeVpcResourceResponse):void} cb
     * @public
     */
    DescribeVpcResource(req, cb) {
        const resp = new DescribeVpcResourceResponse();
        this.request("DescribeVpcResource", req, resp, cb);
    }
    /**
     * NAT网关解绑子网接口，可将子网解绑NAT网关
     * @param {UnbindSubnetsFromNatGatewayRequest} req
     * @param {function(string, UnbindSubnetsFromNatGatewayResponse):void} cb
     * @public
     */
    UnbindSubnetsFromNatGateway(req, cb) {
        const resp = new UnbindSubnetsFromNatGatewayResponse();
        this.request("UnbindSubnetsFromNatGateway", req, resp, cb);
    }
    /**
     * 本接口(ResetVpnConnection)用于重置VPN通道。
     * @param {ResetVpnConnectionRequest} req
     * @param {function(string, ResetVpnConnectionResponse):void} cb
     * @public
     */
    ResetVpnConnection(req, cb) {
        const resp = new ResetVpnConnectionResponse();
        this.request("ResetVpnConnection", req, resp, cb);
    }
    /**
     * 本接口（DescribeVpnGateways）用于查询VPN网关列表。
     * @param {DescribeVpnGatewaysRequest} req
     * @param {function(string, DescribeVpnGatewaysResponse):void} cb
     * @public
     */
    DescribeVpnGateways(req, cb) {
        const resp = new DescribeVpnGatewaysResponse();
        this.request("DescribeVpnGateways", req, resp, cb);
    }
    /**
     * 托管机器移除子网批量接口，传入一台托管机器和多个子网，批量移除这些子网。异步接口，接口返回TaskId。
     * @param {DeleteHostedInterfacesRequest} req
     * @param {function(string, DeleteHostedInterfacesResponse):void} cb
     * @public
     */
    DeleteHostedInterfaces(req, cb) {
        const resp = new DeleteHostedInterfacesResponse();
        this.request("DeleteHostedInterfaces", req, resp, cb);
    }
    /**
     * 接受黑石对等连接
     * @param {AcceptVpcPeerConnectionRequest} req
     * @param {function(string, AcceptVpcPeerConnectionResponse):void} cb
     * @public
     */
    AcceptVpcPeerConnection(req, cb) {
        const resp = new AcceptVpcPeerConnectionResponse();
        this.request("AcceptVpcPeerConnection", req, resp, cb);
    }
    /**
     * 本接口（DescribeVpcQuota）用于查询用户VPC相关配额限制。
     * @param {DescribeVpcQuotaRequest} req
     * @param {function(string, DescribeVpcQuotaResponse):void} cb
     * @public
     */
    DescribeVpcQuota(req, cb) {
        const resp = new DescribeVpcQuotaResponse();
        this.request("DescribeVpcQuota", req, resp, cb);
    }
    /**
     * 获取NAT网关信息，包括NAT网关 ID、网关名称、私有网络、网关并发连接上限、绑定EIP列表等
     * @param {DescribeNatGatewaysRequest} req
     * @param {function(string, DescribeNatGatewaysResponse):void} cb
     * @public
     */
    DescribeNatGateways(req, cb) {
        const resp = new DescribeNatGatewaysResponse();
        this.request("DescribeNatGateways", req, resp, cb);
    }
    /**
     * NAT网关绑定子网后，该子网内全部IP可出公网
     * @param {BindSubnetsToNatGatewayRequest} req
     * @param {function(string, BindSubnetsToNatGatewayResponse):void} cb
     * @public
     */
    BindSubnetsToNatGateway(req, cb) {
        const resp = new BindSubnetsToNatGatewayResponse();
        this.request("BindSubnetsToNatGateway", req, resp, cb);
    }
    /**
     * 物理机移除子网批量接口，传入一台物理机和多个子网，批量移除这些子网。异步接口，接口返回TaskId。
     * @param {DeleteInterfacesRequest} req
     * @param {function(string, DeleteInterfacesResponse):void} cb
     * @public
     */
    DeleteInterfaces(req, cb) {
        const resp = new DeleteInterfacesResponse();
        this.request("DeleteInterfaces", req, resp, cb);
    }
    /**
     * 本接口（CreateHostedInterface）用于黑石托管机器加入带VLANID不为5的子网。

1) 不能加入vlanId 为5的子网，只能加入VLANID范围为2000-2999的子网。
2) 每台托管机器最多可以加入20个子网。
3) 每次调用最多能支持传入10台托管机器。
     * @param {CreateHostedInterfaceRequest} req
     * @param {function(string, CreateHostedInterfaceResponse):void} cb
     * @public
     */
    CreateHostedInterface(req, cb) {
        const resp = new CreateHostedInterfaceResponse();
        this.request("CreateHostedInterface", req, resp, cb);
    }
    /**
     *  本接口（DescribeVpnConnections）查询VPN通道列表。
     * @param {DescribeVpnConnectionsRequest} req
     * @param {function(string, DescribeVpnConnectionsResponse):void} cb
     * @public
     */
    DescribeVpnConnections(req, cb) {
        const resp = new DescribeVpnConnectionsResponse();
        this.request("DescribeVpnConnections", req, resp, cb);
    }
    /**
     * 托管可以加入物理机子网，虚拟子网，DOCKER子网，通过此接口可以查询托管加入的子网。
     * @param {DescribeSubnetByHostedDeviceRequest} req
     * @param {function(string, DescribeSubnetByHostedDeviceResponse):void} cb
     * @public
     */
    DescribeSubnetByHostedDevice(req, cb) {
        const resp = new DescribeSubnetByHostedDeviceResponse();
        this.request("DescribeSubnetByHostedDevice", req, resp, cb);
    }
    /**
     * 获取对等连接列表
     * @param {DescribeVpcPeerConnectionsRequest} req
     * @param {function(string, DescribeVpcPeerConnectionsResponse):void} cb
     * @public
     */
    DescribeVpcPeerConnections(req, cb) {
        const resp = new DescribeVpcPeerConnectionsResponse();
        this.request("DescribeVpcPeerConnections", req, resp, cb);
    }
    /**
     * 本接口（DescribeVpcs）用于查询私有网络列表。
本接口不传参数时，返回默认排序下的前20条VPC信息。
     * @param {DescribeVpcsRequest} req
     * @param {function(string, DescribeVpcsResponse):void} cb
     * @public
     */
    DescribeVpcs(req, cb) {
        const resp = new DescribeVpcsResponse();
        this.request("DescribeVpcs", req, resp, cb);
    }
    /**
     * 删除黑石对等连接
     * @param {DeleteVpcPeerConnectionRequest} req
     * @param {function(string, DeleteVpcPeerConnectionResponse):void} cb
     * @public
     */
    DeleteVpcPeerConnection(req, cb) {
        const resp = new DeleteVpcPeerConnectionResponse();
        this.request("DeleteVpcPeerConnection", req, resp, cb);
    }
    /**
     * 本接口（ModifyVpcAttribute）用于修改VPC的标识名称和控制VPC的监控起停。
     * @param {ModifyVpcAttributeRequest} req
     * @param {function(string, ModifyVpcAttributeResponse):void} cb
     * @public
     */
    ModifyVpcAttribute(req, cb) {
        const resp = new ModifyVpcAttributeResponse();
        this.request("ModifyVpcAttribute", req, resp, cb);
    }
    /**
     * 删除NAT网关
     * @param {DeleteNatGatewayRequest} req
     * @param {function(string, DeleteNatGatewayResponse):void} cb
     * @public
     */
    DeleteNatGateway(req, cb) {
        const resp = new DeleteNatGatewayResponse();
        this.request("DeleteNatGateway", req, resp, cb);
    }
    /**
     * 创建黑石虚拟子网， 虚拟子网用于在黑石上创建虚拟网络，与黑石子网要做好规划。虚拟子网会分配2000-2999的VlanId。
     * @param {CreateVirtualSubnetWithVlanRequest} req
     * @param {function(string, CreateVirtualSubnetWithVlanResponse):void} cb
     * @public
     */
    CreateVirtualSubnetWithVlan(req, cb) {
        const resp = new CreateVirtualSubnetWithVlanResponse();
        this.request("CreateVirtualSubnetWithVlan", req, resp, cb);
    }
    /**
     * 创建黑石私有网络的子网
访问管理: 用户可以对VpcId进行授权操作。例如设置资源为["qcs::bmvpc:::unVpc/vpc-xxxxx"]
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        const resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=bmvpc_client.js.map