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
import { AbstractModel } from "../../common/abstract_model"

/**
 * ModifySubnetDHCPRelay返回参数结构体
 * @class
 */
class ModifySubnetDHCPRelayResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatSubnets返回参数结构体
 * @class
 */
class DescribeNatSubnetsResponse extends AbstractModel {

    NatSubnetInfoSet: Array<NatSubnetInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * NAT子网信息
         */
        this.NatSubnetInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatSubnetInfoSet: Array<NatSubnetInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.NatSubnetInfoSet) {
            this.NatSubnetInfoSet = new Array();
            for (let z in params.NatSubnetInfoSet) {
                let obj = new NatSubnetInfo();
                obj.deserialize(params.NatSubnetInfoSet[z]);
                this.NatSubnetInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcPeerConnections返回参数结构体
 * @class
 */
class DescribeVpcPeerConnectionsResponse extends AbstractModel {

    TotalCount: number | null
    
    VpcPeerConnectionSet: Array<VpcPeerConnection> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         */
        this.TotalCount = null;

        /**
         * 对等连接实例。
         */
        this.VpcPeerConnectionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        VpcPeerConnectionSet: Array<VpcPeerConnection> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VpcPeerConnectionSet) {
            this.VpcPeerConnectionSet = new Array();
            for (let z in params.VpcPeerConnectionSet) {
                let obj = new VpcPeerConnection();
                obj.deserialize(params.VpcPeerConnectionSet[z]);
                this.VpcPeerConnectionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindIpsFromNatGateway返回参数结构体
 * @class
 */
class UnbindIpsFromNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议
 * @class
 */
class IKEOptionsSpecification extends AbstractModel {

    PropoEncryAlgorithm: string | null
    
    PropoAuthenAlgorithm: string | null
    
    ExchangeMode: string | null
    
    LocalIdentity: string | null
    
    RemoteIdentity: string | null
    
    LocalAddress: string | null
    
    RemoteAddress: string | null
    
    LocalFqdnName: string | null
    
    RemoteFqdnName: string | null
    
    DhGroupName: string | null
    
    IKESaLifetimeSeconds: number | null
    
    IKEVersion: string | null
    
    constructor(){
        super();

        /**
         * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC'，默认为3DES-CBC
         */
        this.PropoEncryAlgorithm = null;

        /**
         * 认证算法：可选值：'MD5', 'SHA1'，默认为MD5
         */
        this.PropoAuthenAlgorithm = null;

        /**
         * 协商模式：可选值：'AGGRESSIVE', 'MAIN'，默认为MAIN
         */
        this.ExchangeMode = null;

        /**
         * 本端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS
         */
        this.LocalIdentity = null;

        /**
         * 对端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS
         */
        this.RemoteIdentity = null;

        /**
         * 本端标识，当LocalIdentity选为ADDRESS时，LocalAddress必填。localAddress默认为vpn网关公网IP
         */
        this.LocalAddress = null;

        /**
         * 对端标识，当RemoteIdentity选为ADDRESS时，RemoteAddress必填
         */
        this.RemoteAddress = null;

        /**
         * 本端标识，当LocalIdentity选为FQDN时，LocalFqdnName必填
         */
        this.LocalFqdnName = null;

        /**
         * 对端标识，当remoteIdentity选为FQDN时，RemoteFqdnName必填
         */
        this.RemoteFqdnName = null;

        /**
         * DH group，指定IKE交换密钥时使用的DH组，可选值：'GROUP1', 'GROUP2', 'GROUP5', 'GROUP14', 'GROUP24'，
         */
        this.DhGroupName = null;

        /**
         * IKE SA Lifetime，单位：秒，设置IKE SA的生存周期，取值范围：60-604800
         */
        this.IKESaLifetimeSeconds = null;

        /**
         * IKE版本
         */
        this.IKEVersion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PropoEncryAlgorithm: string | null;
        PropoAuthenAlgorithm: string | null;
        ExchangeMode: string | null;
        LocalIdentity: string | null;
        RemoteIdentity: string | null;
        LocalAddress: string | null;
        RemoteAddress: string | null;
        LocalFqdnName: string | null;
        RemoteFqdnName: string | null;
        DhGroupName: string | null;
        IKESaLifetimeSeconds: number | null;
        IKEVersion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PropoEncryAlgorithm = 'PropoEncryAlgorithm' in params ? params.PropoEncryAlgorithm : null;
        this.PropoAuthenAlgorithm = 'PropoAuthenAlgorithm' in params ? params.PropoAuthenAlgorithm : null;
        this.ExchangeMode = 'ExchangeMode' in params ? params.ExchangeMode : null;
        this.LocalIdentity = 'LocalIdentity' in params ? params.LocalIdentity : null;
        this.RemoteIdentity = 'RemoteIdentity' in params ? params.RemoteIdentity : null;
        this.LocalAddress = 'LocalAddress' in params ? params.LocalAddress : null;
        this.RemoteAddress = 'RemoteAddress' in params ? params.RemoteAddress : null;
        this.LocalFqdnName = 'LocalFqdnName' in params ? params.LocalFqdnName : null;
        this.RemoteFqdnName = 'RemoteFqdnName' in params ? params.RemoteFqdnName : null;
        this.DhGroupName = 'DhGroupName' in params ? params.DhGroupName : null;
        this.IKESaLifetimeSeconds = 'IKESaLifetimeSeconds' in params ? params.IKESaLifetimeSeconds : null;
        this.IKEVersion = 'IKEVersion' in params ? params.IKEVersion : null;

    }
}

/**
 * ModifyRouteTable请求参数结构体
 * @class
 */
class ModifyRouteTableRequest extends AbstractModel {

    RouteTableId: string | null
    
    RouteTableName: string | null
    
    constructor(){
        super();

        /**
         * 路由表ID
         */
        this.RouteTableId = null;

        /**
         * 路由表名称
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RouteTableId: string | null;
        RouteTableName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * CreateRoutePolicies请求参数结构体
 * @class
 */
class CreateRoutePoliciesRequest extends AbstractModel {

    RouteTableId: string | null
    
    RoutePolicySet: Array<RoutePolicy> | null
    
    constructor(){
        super();

        /**
         * 路由表ID
         */
        this.RouteTableId = null;

        /**
         * 新增的路由
         */
        this.RoutePolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RouteTableId: string | null;
        RoutePolicySet: Array<RoutePolicy> | null;
    }): void {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.RoutePolicySet) {
            this.RoutePolicySet = new Array();
            for (let z in params.RoutePolicySet) {
                let obj = new RoutePolicy();
                obj.deserialize(params.RoutePolicySet[z]);
                this.RoutePolicySet.push(obj);
            }
        }

    }
}

/**
 * 过滤器
 * @class
 */
class Filter extends AbstractModel {

    Name: string | null
    
    Values: Array<string> | null
    
    constructor(){
        super();

        /**
         * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
         */
        this.Name = null;

        /**
         * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Values: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * CreateVirtualSubnetWithVlan请求参数结构体
 * @class
 */
class CreateVirtualSubnetWithVlanRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetSet: Array<SubnetCreateInputInfo> | null
    
    constructor(){
        super();

        /**
         * 系统分配的私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 子网信息
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetSet: Array<SubnetCreateInputInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new SubnetCreateInputInfo();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * DeleteVirtualIp返回参数结构体
 * @class
 */
class DeleteVirtualIpResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID。
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubnets请求参数结构体
 * @class
 */
class DescribeSubnetsRequest extends AbstractModel {

    SubnetIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    OrderField: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * 子网实例ID查询。形如：subnet-pxir56ns。参数不支持同时指定SubnetIds和Filters。
         */
        this.SubnetIds = null;

        /**
         * 过滤条件，参数不支持同时指定SubnetIds和Filters。
subnet-id - String - （过滤条件）Subnet实例名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
cidr-block - String - （过滤条件）vpc的cidr。
subnet-name - String - （过滤条件）子网名称。
zone - String - （过滤条件）可用区。
         */
        this.Filters = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 返回数量
         */
        this.Limit = null;

        /**
         * 排序字段, 支持按“CreateTime”，“VlanId”
         */
        this.OrderField = null;

        /**
         * 排序方向, “asc”、“desc”
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        OrderField: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * CreateSubnet请求参数结构体
 * @class
 */
class CreateSubnetRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetSet: Array<SubnetCreateInputInfo> | null
    
    constructor(){
        super();

        /**
         * 系统分配的私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 子网信息
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetSet: Array<SubnetCreateInputInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new SubnetCreateInputInfo();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * DownloadCustomerGatewayConfiguration请求参数结构体
 * @class
 */
class DownloadCustomerGatewayConfigurationRequest extends AbstractModel {

    VpnConnectionId: string | null
    
    VendorName: string | null
    
    constructor(){
        super();

        /**
         * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
         */
        this.VpnConnectionId = null;

        /**
         * 厂商,取值 h3c，cisco
         */
        this.VendorName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnConnectionId: string | null;
        VendorName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;
        this.VendorName = 'VendorName' in params ? params.VendorName : null;

    }
}

/**
 * CreateHostedInterface返回参数结构体
 * @class
 */
class CreateHostedInterfaceResponse extends AbstractModel {

    TaskId: number | null
    
    ResourceIds: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 黑石托管机器ID
         */
        this.ResourceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        ResourceIds: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubnetByDevice返回参数结构体
 * @class
 */
class DescribeSubnetByDeviceResponse extends AbstractModel {

    TotalCount: number | null
    
    Data: Array<SubnetInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 子网个数
         */
        this.TotalCount = null;

        /**
         * 子网列表
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        Data: Array<SubnetInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SubnetInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubnet返回参数结构体
 * @class
 */
class DeleteSubnetResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID。
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeregisterIps返回参数结构体
 * @class
 */
class DeregisterIpsResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubnets返回参数结构体
 * @class
 */
class DescribeSubnetsResponse extends AbstractModel {

    SubnetSet: Array<SubnetInfo> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 子网列表信息
         */
        this.SubnetSet = null;

        /**
         * 返回的子网总数
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetSet: Array<SubnetInfo> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new SubnetInfo();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpcPeerConnection返回参数结构体
 * @class
 */
class ModifyVpcPeerConnectionResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomerGateways返回参数结构体
 * @class
 */
class DescribeCustomerGatewaysResponse extends AbstractModel {

    CustomerGatewaySet: Array<CustomerGateway> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 对端网关对象列表
         */
        this.CustomerGatewaySet = null;

        /**
         * 符合条件的实例数量。
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGatewaySet: Array<CustomerGateway> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CustomerGatewaySet) {
            this.CustomerGatewaySet = new Array();
            for (let z in params.CustomerGatewaySet) {
                let obj = new CustomerGateway();
                obj.deserialize(params.CustomerGatewaySet[z]);
                this.CustomerGatewaySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindSubnetsFromNatGateway请求参数结构体
 * @class
 */
class UnbindSubnetsFromNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    SubnetIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 子网ID列表，子网不区分加入NAT网关的转发方式
         */
        this.SubnetIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
        SubnetIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * 黑石子网的信息
 * @class
 */
class SubnetInfo extends AbstractModel {

    VpcId: string | null
    
    VpcName: string | null
    
    VpcCidrBlock: string | null
    
    SubnetId: string | null
    
    SubnetName: string | null
    
    CidrBlock: string | null
    
    Type: number | null
    
    ZoneId: number | null
    
    CpmNum: number | null
    
    VlanId: number | null
    
    DistributedFlag: number | null
    
    DhcpEnable: number | null
    
    DhcpServerIp: Array<string> | null
    
    IpReserve: number | null
    
    AvailableIpNum: number | null
    
    TotalIpNum: number | null
    
    SubnetCreateTime: string | null
    
    IsSmartNic: number | null
    
    Zone: string | null
    
    VpcZoneId: number | null
    
    VpcZone: string | null
    
    BroadcastFlag: number | null
    
    constructor(){
        super();

        /**
         * 私有网络的唯一ID。
         */
        this.VpcId = null;

        /**
         * VPC的名称。
         */
        this.VpcName = null;

        /**
         * VPC的CIDR。
         */
        this.VpcCidrBlock = null;

        /**
         * 私有网络的唯一ID
         */
        this.SubnetId = null;

        /**
         * 子网名称。
         */
        this.SubnetName = null;

        /**
         * 子网CIDR。
         */
        this.CidrBlock = null;

        /**
         * 子网类型。0: 黑石物理机子网; 6: ccs子网; 7 Docker子网; 8: 虚拟机子网
         */
        this.Type = null;

        /**
         * 子网可用区ID。
         */
        this.ZoneId = null;

        /**
         * 子网物理机的个数
         */
        this.CpmNum = null;

        /**
         * 子网的VlanId。
         */
        this.VlanId = null;

        /**
         * 是否开启分布式网关 ，关闭为0，开启为1。
         */
        this.DistributedFlag = null;

        /**
         * 是否开启dhcp relay ，关闭为0，开启为1。默认为0。
         */
        this.DhcpEnable = null;

        /**
         * DHCP SERVER 的IP地址数组。IP地址为相同VPC的子网内分配的IP。
         */
        this.DhcpServerIp = null;

        /**
         * 预留的IP个数。从该子网的最大可分配IP倒序分配N个IP 用于DHCP 动态分配使用的地址段。
         */
        this.IpReserve = null;

        /**
         * 子网中可用的IP个数
         */
        this.AvailableIpNum = null;

        /**
         * 子网中总共的IP个数
         */
        this.TotalIpNum = null;

        /**
         * 子网创建时间
         */
        this.SubnetCreateTime = null;

        /**
         * 25G子网标识
         */
        this.IsSmartNic = null;

        /**
         * 子网可用区。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Zone = null;

        /**
         * VPC所在可用区ID
         */
        this.VpcZoneId = null;

        /**
         * VPC所在可用区
         */
        this.VpcZone = null;

        /**
         * 是否开启广播，关闭为0，开启为1。
         */
        this.BroadcastFlag = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        VpcName: string | null;
        VpcCidrBlock: string | null;
        SubnetId: string | null;
        SubnetName: string | null;
        CidrBlock: string | null;
        Type: number | null;
        ZoneId: number | null;
        CpmNum: number | null;
        VlanId: number | null;
        DistributedFlag: number | null;
        DhcpEnable: number | null;
        DhcpServerIp: Array<string> | null;
        IpReserve: number | null;
        AvailableIpNum: number | null;
        TotalIpNum: number | null;
        SubnetCreateTime: string | null;
        IsSmartNic: number | null;
        Zone: string | null;
        VpcZoneId: number | null;
        VpcZone: string | null;
        BroadcastFlag: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CpmNum = 'CpmNum' in params ? params.CpmNum : null;
        this.VlanId = 'VlanId' in params ? params.VlanId : null;
        this.DistributedFlag = 'DistributedFlag' in params ? params.DistributedFlag : null;
        this.DhcpEnable = 'DhcpEnable' in params ? params.DhcpEnable : null;
        this.DhcpServerIp = 'DhcpServerIp' in params ? params.DhcpServerIp : null;
        this.IpReserve = 'IpReserve' in params ? params.IpReserve : null;
        this.AvailableIpNum = 'AvailableIpNum' in params ? params.AvailableIpNum : null;
        this.TotalIpNum = 'TotalIpNum' in params ? params.TotalIpNum : null;
        this.SubnetCreateTime = 'SubnetCreateTime' in params ? params.SubnetCreateTime : null;
        this.IsSmartNic = 'IsSmartNic' in params ? params.IsSmartNic : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcZoneId = 'VpcZoneId' in params ? params.VpcZoneId : null;
        this.VpcZone = 'VpcZone' in params ? params.VpcZone : null;
        this.BroadcastFlag = 'BroadcastFlag' in params ? params.BroadcastFlag : null;

    }
}

/**
 * DeleteRoutePolicy返回参数结构体
 * @class
 */
class DeleteRoutePolicyResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpnGateways返回参数结构体
 * @class
 */
class DescribeVpnGatewaysResponse extends AbstractModel {

    TotalCount: number | null
    
    VpnGatewaySet: Array<VpnGateway> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         */
        this.TotalCount = null;

        /**
         * VPN网关实例详细信息列表。
         */
        this.VpnGatewaySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        VpnGatewaySet: Array<VpnGateway> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VpnGatewaySet) {
            this.VpnGatewaySet = new Array();
            for (let z in params.VpnGatewaySet) {
                let obj = new VpnGateway();
                obj.deserialize(params.VpnGatewaySet[z]);
                this.VpnGatewaySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC信息
 * @class
 */
class VpcInfo extends AbstractModel {

    VpcId: string | null
    
    VpcName: string | null
    
    CidrBlock: string | null
    
    Zone: string | null
    
    State: string | null
    
    CreateTime: string | null
    
    IntVpcId: number | null
    
    constructor(){
        super();

        /**
         * 私有网络的唯一ID。
         */
        this.VpcId = null;

        /**
         * VPC的名称。
         */
        this.VpcName = null;

        /**
         * VPC的CIDR。
         */
        this.CidrBlock = null;

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * VPC状态
         */
        this.State = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * 整型私有网络ID。
         */
        this.IntVpcId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        VpcName: string | null;
        CidrBlock: string | null;
        Zone: string | null;
        State: string | null;
        CreateTime: string | null;
        IntVpcId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.State = 'State' in params ? params.State : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IntVpcId = 'IntVpcId' in params ? params.IntVpcId : null;

    }
}

/**
 * CreateInterfaces返回参数结构体
 * @class
 */
class CreateInterfacesResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatSubnets请求参数结构体
 * @class
 */
class DescribeNatSubnetsRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DownloadCustomerGatewayConfiguration返回参数结构体
 * @class
 */
class DownloadCustomerGatewayConfigurationResponse extends AbstractModel {

    CustomerGatewayConfiguration: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 配置信息。
         */
        this.CustomerGatewayConfiguration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGatewayConfiguration: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CustomerGatewayConfiguration = 'CustomerGatewayConfiguration' in params ? params.CustomerGatewayConfiguration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubnet请求参数结构体
 * @class
 */
class DeleteSubnetRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * 私有网络ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         */
        this.VpcId = null;

        /**
         * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DeleteRoutePolicy请求参数结构体
 * @class
 */
class DeleteRoutePolicyRequest extends AbstractModel {

    RouteTableId: string | null
    
    RoutePolicyId: string | null
    
    constructor(){
        super();

        /**
         * 路由表ID
         */
        this.RouteTableId = null;

        /**
         * 路由表策略ID
         */
        this.RoutePolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RouteTableId: string | null;
        RoutePolicyId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RoutePolicyId = 'RoutePolicyId' in params ? params.RoutePolicyId : null;

    }
}

/**
 * ModifyRoutePolicy请求参数结构体
 * @class
 */
class ModifyRoutePolicyRequest extends AbstractModel {

    RouteTableId: string | null
    
    RoutePolicy: RoutePolicy | null
    
    constructor(){
        super();

        /**
         * 路由表ID
         */
        this.RouteTableId = null;

        /**
         * 修改的路由
         */
        this.RoutePolicy = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RouteTableId: string | null;
        RoutePolicy: RoutePolicy | null;
    }): void {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.RoutePolicy) {
            let obj = new RoutePolicy();
            obj.deserialize(params.RoutePolicy)
            this.RoutePolicy = obj;
        }

    }
}

/**
 * 路由表对象
 * @class
 */
class RouteTable extends AbstractModel {

    VpcId: string | null
    
    VpcName: string | null
    
    VpcCidrBlock: string | null
    
    Zone: string | null
    
    RouteTableId: string | null
    
    RouteTableName: string | null
    
    CreateTime: string | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。
         */
        this.VpcId = null;

        /**
         * VPC的名称
         */
        this.VpcName = null;

        /**
         * VPC的CIDR
         */
        this.VpcCidrBlock = null;

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         */
        this.RouteTableId = null;

        /**
         * 路由表名称。
         */
        this.RouteTableName = null;

        /**
         * 创建时间。
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        VpcName: string | null;
        VpcCidrBlock: string | null;
        Zone: string | null;
        RouteTableId: string | null;
        RouteTableName: string | null;
        CreateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeVpcQuota请求参数结构体
 * @class
 */
class DescribeVpcQuotaRequest extends AbstractModel {

    TypeIds: Array<number> | null
    
    constructor(){
        super();

        /**
         * 类型
         */
        this.TypeIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TypeIds: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TypeIds = 'TypeIds' in params ? params.TypeIds : null;

    }
}

/**
 * CreateDockerSubnetWithVlan返回参数结构体
 * @class
 */
class CreateDockerSubnetWithVlanResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubnetAvailableIps请求参数结构体
 * @class
 */
class DescribeSubnetAvailableIpsRequest extends AbstractModel {

    SubnetId: string | null
    
    Cidr: string | null
    
    constructor(){
        super();

        /**
         * 私有网络子网ID
         */
        this.SubnetId = null;

        /**
         * CIDR前缀，例如10.0.1
         */
        this.Cidr = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetId: string | null;
        Cidr: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Cidr = 'Cidr' in params ? params.Cidr : null;

    }
}

/**
 * DeleteVpc请求参数结构体
 * @class
 */
class DeleteVpcRequest extends AbstractModel {

    VpcId: string | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * UnbindEipsFromNatGateway请求参数结构体
 * @class
 */
class UnbindEipsFromNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    AssignedEips: Array<string> | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 已分配的EIP列表
         */
        this.AssignedEips = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
        AssignedEips: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.AssignedEips = 'AssignedEips' in params ? params.AssignedEips : null;

    }
}

/**
 * DescribeRoutePolicies返回参数结构体
 * @class
 */
class DescribeRoutePoliciesResponse extends AbstractModel {

    TotalCount: number | null
    
    RoutePolicySet: Array<RoutePolicy> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 路由策略数
         */
        this.TotalCount = null;

        /**
         * 路由策略列表
         */
        this.RoutePolicySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        RoutePolicySet: Array<RoutePolicy> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RoutePolicySet) {
            this.RoutePolicySet = new Array();
            for (let z in params.RoutePolicySet) {
                let obj = new RoutePolicy();
                obj.deserialize(params.RoutePolicySet[z]);
                this.RoutePolicySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubnet返回参数结构体
 * @class
 */
class CreateSubnetResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptVpcPeerConnection请求参数结构体
 * @class
 */
class AcceptVpcPeerConnectionRequest extends AbstractModel {

    VpcPeerConnectionId: string | null
    
    constructor(){
        super();

        /**
         * 黑石对等连接实例ID
         */
        this.VpcPeerConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcPeerConnectionId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcPeerConnectionId = 'VpcPeerConnectionId' in params ? params.VpcPeerConnectionId : null;

    }
}

/**
 * BindSubnetsToNatGateway返回参数结构体
 * @class
 */
class BindSubnetsToNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC视图子网信息
 * @class
 */
class VpcSubnetViewInfo extends AbstractModel {

    SubnetId: string | null
    
    SubnetName: string | null
    
    CidrBlock: string | null
    
    CpmNum: number | null
    
    LbNum: number | null
    
    Zone: string | null
    
    constructor(){
        super();

        /**
         * 子网ID
         */
        this.SubnetId = null;

        /**
         * 子网名称
         */
        this.SubnetName = null;

        /**
         * 子网CIDR
         */
        this.CidrBlock = null;

        /**
         * 子网下设备个数
         */
        this.CpmNum = null;

        /**
         * 内网负载均衡个数
         */
        this.LbNum = null;

        /**
         * 子网所在可用区
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetId: string | null;
        SubnetName: string | null;
        CidrBlock: string | null;
        CpmNum: number | null;
        LbNum: number | null;
        Zone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.CpmNum = 'CpmNum' in params ? params.CpmNum : null;
        this.LbNum = 'LbNum' in params ? params.LbNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * CreateVpc返回参数结构体
 * @class
 */
class CreateVpcResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomerGateway返回参数结构体
 * @class
 */
class CreateCustomerGatewayResponse extends AbstractModel {

    CustomerGateway: CustomerGateway | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 对端网关对象
         */
        this.CustomerGateway = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGateway: CustomerGateway | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CustomerGateway) {
            let obj = new CustomerGateway();
            obj.deserialize(params.CustomerGateway)
            this.CustomerGateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends AbstractModel {

    Status: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务状态，其中0表示任务执行成功，1表示任务执行失败，2表示任务正在执行中
         */
        this.Status = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpnGateway请求参数结构体
 * @class
 */
class DeleteVpnGatewayRequest extends AbstractModel {

    VpnGatewayId: string | null
    
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         */
        this.VpnGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnGatewayId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;

    }
}

/**
 * NAT子网信息
 * @class
 */
class NatSubnetInfo extends AbstractModel {

    Name: string | null
    
    SubnetId: string | null
    
    SubnetNatType: number | null
    
    CidrBlock: string | null
    
    constructor(){
        super();

        /**
         * 子网名称
         */
        this.Name = null;

        /**
         * 子网ID
         */
        this.SubnetId = null;

        /**
         * NAT子网类型，其中0表示绑定部分IP的NAT子网，1表示绑定全部IP的NAT子网，2表示绑定网关方式的NAT子网
         */
        this.SubnetNatType = null;

        /**
         * 子网网段
         */
        this.CidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        SubnetId: string | null;
        SubnetNatType: number | null;
        CidrBlock: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetNatType = 'SubnetNatType' in params ? params.SubnetNatType : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;

    }
}

/**
 * DescribeSubnetByHostedDevice请求参数结构体
 * @class
 */
class DescribeSubnetByHostedDeviceRequest extends AbstractModel {

    InstanceId: string | null
    
    Types: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 托管机器ID, 如chm-xasdfx2j
         */
        this.InstanceId = null;

        /**
         * 子网类型。0: 物理机子网; 7: DOCKER子网 8: 虚拟子网
         */
        this.Types = null;

        /**
         * 查询的起始位置。
         */
        this.Offset = null;

        /**
         * 查询的个数。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Types: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Types = 'Types' in params ? params.Types : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateVpcPeerConnection返回参数结构体
 * @class
 */
class CreateVpcPeerConnectionResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubnetAttribute请求参数结构体
 * @class
 */
class ModifySubnetAttributeRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetId: string | null
    
    SubnetName: string | null
    
    constructor(){
        super();

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 子网ID
         */
        this.SubnetId = null;

        /**
         * 子网名称
         */
        this.SubnetName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetId: string | null;
        SubnetName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;

    }
}

/**
 * ResetVpnConnection请求参数结构体
 * @class
 */
class ResetVpnConnectionRequest extends AbstractModel {

    VpcId: string | null
    
    VpnConnectionId: string | null
    
    constructor(){
        super();

        /**
         * VPC唯一ID
         */
        this.VpcId = null;

        /**
         * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
         */
        this.VpnConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        VpnConnectionId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

    }
}

/**
 * DeleteNatGateway请求参数结构体
 * @class
 */
class DeleteNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DeleteVpnConnection返回参数结构体
 * @class
 */
class DeleteVpnConnectionResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCustomerGatewayAttribute返回参数结构体
 * @class
 */
class ModifyCustomerGatewayAttributeResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPN通道对象。
 * @class
 */
class VpnConnection extends AbstractModel {

    VpnConnectionId: string | null
    
    VpnConnectionName: string | null
    
    VpcId: string | null
    
    VpnGatewayId: string | null
    
    CustomerGatewayId: string | null
    
    PreShareKey: string | null
    
    VpnProto: string | null
    
    CreateTime: string | null
    
    State: string | null
    
    NetStatus: string | null
    
    SecurityPolicyDatabaseSet: Array<SecurityPolicyDatabase> | null
    
    IKEOptionsSpecification: IKEOptionsSpecification | null
    
    IPSECOptionsSpecification: IPSECOptionsSpecification | null
    
    Zone: string | null
    
    VpcCidrBlock: string | null
    
    VpcName: string | null
    
    VpnGatewayName: string | null
    
    CustomerGatewayName: string | null
    
    DestinationCidr: Array<string> | null
    
    SourceCidr: Array<string> | null
    
    constructor(){
        super();

        /**
         * 通道实例ID。
         */
        this.VpnConnectionId = null;

        /**
         * 通道名称。
         */
        this.VpnConnectionName = null;

        /**
         * VPC实例ID。
         */
        this.VpcId = null;

        /**
         * VPN网关实例ID。
         */
        this.VpnGatewayId = null;

        /**
         * 对端网关实例ID。
         */
        this.CustomerGatewayId = null;

        /**
         * 预共享密钥。
         */
        this.PreShareKey = null;

        /**
         * 通道传输协议。
         */
        this.VpnProto = null;

        /**
         * 创建时间。
         */
        this.CreateTime = null;

        /**
         * 通道的生产状态
         */
        this.State = null;

        /**
         * 通道连接状态
         */
        this.NetStatus = null;

        /**
         * SPD。
         */
        this.SecurityPolicyDatabaseSet = null;

        /**
         * IKE选项。
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSEC选项。
         */
        this.IPSECOptionsSpecification = null;

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * VPC网段
         */
        this.VpcCidrBlock = null;

        /**
         * VPC名称
         */
        this.VpcName = null;

        /**
         * VPN网关名称
         */
        this.VpnGatewayName = null;

        /**
         * 对端网关名称
         */
        this.CustomerGatewayName = null;

        /**
         * IPSEC VPN通道路由策略目的端地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DestinationCidr = null;

        /**
         * IPSEC VPN通道路由策略源端地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SourceCidr = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnConnectionId: string | null;
        VpnConnectionName: string | null;
        VpcId: string | null;
        VpnGatewayId: string | null;
        CustomerGatewayId: string | null;
        PreShareKey: string | null;
        VpnProto: string | null;
        CreateTime: string | null;
        State: string | null;
        NetStatus: string | null;
        SecurityPolicyDatabaseSet: Array<SecurityPolicyDatabase> | null;
        IKEOptionsSpecification: IKEOptionsSpecification | null;
        IPSECOptionsSpecification: IPSECOptionsSpecification | null;
        Zone: string | null;
        VpcCidrBlock: string | null;
        VpcName: string | null;
        VpnGatewayName: string | null;
        CustomerGatewayName: string | null;
        DestinationCidr: Array<string> | null;
        SourceCidr: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;
        this.VpnProto = 'VpnProto' in params ? params.VpnProto : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.NetStatus = 'NetStatus' in params ? params.NetStatus : null;

        if (params.SecurityPolicyDatabaseSet) {
            this.SecurityPolicyDatabaseSet = new Array();
            for (let z in params.SecurityPolicyDatabaseSet) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabaseSet[z]);
                this.SecurityPolicyDatabaseSet.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.CustomerGatewayName = 'CustomerGatewayName' in params ? params.CustomerGatewayName : null;
        this.DestinationCidr = 'DestinationCidr' in params ? params.DestinationCidr : null;
        this.SourceCidr = 'SourceCidr' in params ? params.SourceCidr : null;

    }
}

/**
 * CreateDockerSubnetWithVlan请求参数结构体
 * @class
 */
class CreateDockerSubnetWithVlanRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetSet: Array<SubnetCreateInputInfo> | null
    
    constructor(){
        super();

        /**
         * 系统分配的私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 子网信息
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetSet: Array<SubnetCreateInputInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new SubnetCreateInputInfo();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * 路由条目
 * @class
 */
class RoutePolicy extends AbstractModel {

    DestinationCidrBlock: string | null
    
    GatewayType: string | null
    
    GatewayId: string | null
    
    RouteDescription: string | null
    
    RoutePolicyId: string | null
    
    RoutePolicyType: string | null
    
    Enabled: boolean | null
    
    constructor(){
        super();

        /**
         * 目的网段
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳类型，目前我们支持的类型有：
LOCAL：物理机默认路由；
VPN：VPN网关；
PEERCONNECTION：对等连接；
CPM：物理机自定义路由；
CCN：云联网；
TGW：公网默认路由；
SSLVPN : SSH SSL VPN网关。
         */
        this.GatewayType = null;

        /**
         * 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。
         */
        this.GatewayId = null;

        /**
         * 路由策略描述。
         */
        this.RouteDescription = null;

        /**
         * 路由策略ID
         */
        this.RoutePolicyId = null;

        /**
         * 路由类型，目前我们支持的类型有：
USER：用户自定义路由；
NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；
CCN：云联网路由，系统默认下发，不可编辑与删除。
用户只能添加和编辑USER 类型的路由。
         */
        this.RoutePolicyType = null;

        /**
         * 是否启用
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DestinationCidrBlock: string | null;
        GatewayType: string | null;
        GatewayId: string | null;
        RouteDescription: string | null;
        RoutePolicyId: string | null;
        RoutePolicyType: string | null;
        Enabled: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.RouteDescription = 'RouteDescription' in params ? params.RouteDescription : null;
        this.RoutePolicyId = 'RoutePolicyId' in params ? params.RoutePolicyId : null;
        this.RoutePolicyType = 'RoutePolicyType' in params ? params.RoutePolicyType : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DeleteHostedInterface返回参数结构体
 * @class
 */
class DeleteHostedInterfaceResponse extends AbstractModel {

    TaskId: number | null
    
    ResourceIds: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 黑石托管机器ID
         */
        this.ResourceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        ResourceIds: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpcPeerConnection返回参数结构体
 * @class
 */
class DeleteVpcPeerConnectionResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteHostedInterfaces返回参数结构体
 * @class
 */
class DeleteHostedInterfacesResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubnetDHCPRelay请求参数结构体
 * @class
 */
class ModifySubnetDHCPRelayRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetId: string | null
    
    EnableDHCP: boolean | null
    
    ServerIps: Array<string> | null
    
    ReservedIpCount: number | null
    
    constructor(){
        super();

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 子网ID
         */
        this.SubnetId = null;

        /**
         * 是否开启DHCP Relay
         */
        this.EnableDHCP = null;

        /**
         * DHCP服务器IP
         */
        this.ServerIps = null;

        /**
         * 预留IP个数
         */
        this.ReservedIpCount = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetId: string | null;
        EnableDHCP: boolean | null;
        ServerIps: Array<string> | null;
        ReservedIpCount: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EnableDHCP = 'EnableDHCP' in params ? params.EnableDHCP : null;
        this.ServerIps = 'ServerIps' in params ? params.ServerIps : null;
        this.ReservedIpCount = 'ReservedIpCount' in params ? params.ReservedIpCount : null;

    }
}

/**
 * DeleteVpcPeerConnection请求参数结构体
 * @class
 */
class DeleteVpcPeerConnectionRequest extends AbstractModel {

    VpcPeerConnectionId: string | null
    
    constructor(){
        super();

        /**
         * 黑石对等连接实例ID
         */
        this.VpcPeerConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcPeerConnectionId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcPeerConnectionId = 'VpcPeerConnectionId' in params ? params.VpcPeerConnectionId : null;

    }
}

/**
 * DeleteHostedInterface请求参数结构体
 * @class
 */
class DeleteHostedInterfaceRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * 托管机器唯一ID 数组
         */
        this.InstanceIds = null;

        /**
         * 私有网络ID或者私有网络统一ID，建议使用统一ID
         */
        this.VpcId = null;

        /**
         * 子网ID或者子网统一ID，建议使用统一ID
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        VpcId: string | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * BindEipsToNatGateway请求参数结构体
 * @class
 */
class BindEipsToNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    AssignedEips: Array<string> | null
    
    AutoAllocEipNum: number | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 已分配的EIP列表；AssignedEips和AutoAllocEipNum至少输入一个
         */
        this.AssignedEips = null;

        /**
         * 新建EIP数目，系统将会按您的要求生产该数目个数EIP；AssignedEips和AutoAllocEipNum至少输入一个
         */
        this.AutoAllocEipNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
        AssignedEips: Array<string> | null;
        AutoAllocEipNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.AssignedEips = 'AssignedEips' in params ? params.AssignedEips : null;
        this.AutoAllocEipNum = 'AutoAllocEipNum' in params ? params.AutoAllocEipNum : null;

    }
}

/**
 * DeleteInterfaces请求参数结构体
 * @class
 */
class DeleteInterfacesRequest extends AbstractModel {

    InstanceId: string | null
    
    SubnetIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 物理机ID
         */
        this.InstanceId = null;

        /**
         * 子网的唯一ID列表
         */
        this.SubnetIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        SubnetIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * DescribeVpcs请求参数结构体
 * @class
 */
class DescribeVpcsRequest extends AbstractModel {

    VpcIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
         */
        this.VpcIds = null;

        /**
         * 过滤条件，参数不支持同时指定VpcIds和Filters。
vpc-name - String - （过滤条件）VPC实例名称。
vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。
cidr-block - String - （过滤条件）vpc的cidr。
state - String - （过滤条件）VPC状态。(pending | available).
zone -  String - （过滤条件）VPC的可用区。
         */
        this.Filters = null;

        /**
         * 初始行的偏移量，默认为0。
         */
        this.Offset = null;

        /**
         * 每页行数，默认为20。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeVpcResource返回参数结构体
 * @class
 */
class DescribeVpcResourceResponse extends AbstractModel {

    VpcResourceSet: Array<VpcResource> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * VPC数据
         */
        this.VpcResourceSet = null;

        /**
         * VPC个数
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcResourceSet: Array<VpcResource> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.VpcResourceSet) {
            this.VpcResourceSet = new Array();
            for (let z in params.VpcResourceSet) {
                let obj = new VpcResource();
                obj.deserialize(params.VpcResourceSet[z]);
                this.VpcResourceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RejectVpcPeerConnection返回参数结构体
 * @class
 */
class RejectVpcPeerConnectionResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCustomerGatewayAttribute请求参数结构体
 * @class
 */
class ModifyCustomerGatewayAttributeRequest extends AbstractModel {

    CustomerGatewayId: string | null
    
    CustomerGatewayName: string | null
    
    constructor(){
        super();

        /**
         * 对端网关ID，例如：bmcgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。
         */
        this.CustomerGatewayId = null;

        /**
         * 对端网关名称，可任意命名，但不得超过60个字符。
         */
        this.CustomerGatewayName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGatewayId: string | null;
        CustomerGatewayName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.CustomerGatewayName = 'CustomerGatewayName' in params ? params.CustomerGatewayName : null;

    }
}

/**
 * DescribeRouteTables返回参数结构体
 * @class
 */
class DescribeRouteTablesResponse extends AbstractModel {

    TotalCount: number | null
    
    RouteTableSet: Array<RouteTable> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 路由表个数
         */
        this.TotalCount = null;

        /**
         * 路由表列表
         */
        this.RouteTableSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        RouteTableSet: Array<RouteTable> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRouteTable返回参数结构体
 * @class
 */
class ModifyRouteTableResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatGateways返回参数结构体
 * @class
 */
class DescribeNatGatewaysResponse extends AbstractModel {

    NatGatewayInfoSet: Array<NatGatewayInfo> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * NAT网关信息列表
         */
        this.NatGatewayInfoSet = null;

        /**
         * 总数目
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatGatewayInfoSet: Array<NatGatewayInfo> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.NatGatewayInfoSet) {
            this.NatGatewayInfoSet = new Array();
            for (let z in params.NatGatewayInfoSet) {
                let obj = new NatGatewayInfo();
                obj.deserialize(params.NatGatewayInfoSet[z]);
                this.NatGatewayInfoSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpcAttribute返回参数结构体
 * @class
 */
class ModifyVpcAttributeResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpnConnectionAttribute返回参数结构体
 * @class
 */
class ModifyVpnConnectionAttributeResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubnetAvailableIps返回参数结构体
 * @class
 */
class DescribeSubnetAvailableIpsResponse extends AbstractModel {

    IpSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 可用IP的范围列表
         */
        this.IpSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        IpSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.IpSet = 'IpSet' in params ? params.IpSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNatGateways请求参数结构体
 * @class
 */
class DescribeNatGatewaysRequest extends AbstractModel {

    NatId: string | null
    
    NatName: string | null
    
    SearchKey: string | null
    
    VpcId: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    Zone: string | null
    
    OrderField: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * NAT名称
         */
        this.NatName = null;

        /**
         * 搜索字段
         */
        this.SearchKey = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 起始值
         */
        this.Offset = null;

        /**
         * 偏移值，默认值为 20
         */
        this.Limit = null;

        /**
         * NAT所在可用区，形如：ap-guangzhou-2。
         */
        this.Zone = null;

        /**
         * 排序字段, 支持"CreateTime"排序
         */
        this.OrderField = null;

        /**
         * 排序方向, “asc”、“desc”
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        NatName: string | null;
        SearchKey: string | null;
        VpcId: string | null;
        Offset: number | null;
        Limit: number | null;
        Zone: string | null;
        OrderField: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.NatName = 'NatName' in params ? params.NatName : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * 对等连接对象
 * @class
 */
class VpcPeerConnection extends AbstractModel {

    VpcId: string | null
    
    PeerVpcId: string | null
    
    AppId: string | null
    
    PeerAppId: string | null
    
    VpcPeerConnectionId: string | null
    
    VpcPeerConnectionName: string | null
    
    State: string | null
    
    VpcZone: string | null
    
    PeerVpcZone: string | null
    
    Uin: number | null
    
    PeerUin: number | null
    
    PeerType: number | null
    
    Bandwidth: number | null
    
    Region: string | null
    
    PeerRegion: string | null
    
    DeleteFlag: number | null
    
    CreateTime: string | null
    
    constructor(){
        super();

        /**
         * 本端VPC唯一ID
         */
        this.VpcId = null;

        /**
         * 对端VPC唯一ID
         */
        this.PeerVpcId = null;

        /**
         * 本端APPID
         */
        this.AppId = null;

        /**
         * 对端APPID
         */
        this.PeerAppId = null;

        /**
         * 对等连接唯一ID
         */
        this.VpcPeerConnectionId = null;

        /**
         * 对等连接名称
         */
        this.VpcPeerConnectionName = null;

        /**
         * 对等连接状态。pending:申请中,available:运行中,expired:已过期,rejected:已拒绝,deleted:已删除
         */
        this.State = null;

        /**
         * 本端VPC所属可用区
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VpcZone = null;

        /**
         * 对端VPC所属可用区
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PeerVpcZone = null;

        /**
         * 本端Uin
         */
        this.Uin = null;

        /**
         * 对端Uin
         */
        this.PeerUin = null;

        /**
         * 对等连接类型
         */
        this.PeerType = null;

        /**
         * 对等连接带宽
         */
        this.Bandwidth = null;

        /**
         * 本端VPC地域
         */
        this.Region = null;

        /**
         * 对端VPC地域
         */
        this.PeerRegion = null;

        /**
         * 是否允许删除
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeleteFlag = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        PeerVpcId: string | null;
        AppId: string | null;
        PeerAppId: string | null;
        VpcPeerConnectionId: string | null;
        VpcPeerConnectionName: string | null;
        State: string | null;
        VpcZone: string | null;
        PeerVpcZone: string | null;
        Uin: number | null;
        PeerUin: number | null;
        PeerType: number | null;
        Bandwidth: number | null;
        Region: string | null;
        PeerRegion: string | null;
        DeleteFlag: number | null;
        CreateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PeerVpcId = 'PeerVpcId' in params ? params.PeerVpcId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.PeerAppId = 'PeerAppId' in params ? params.PeerAppId : null;
        this.VpcPeerConnectionId = 'VpcPeerConnectionId' in params ? params.VpcPeerConnectionId : null;
        this.VpcPeerConnectionName = 'VpcPeerConnectionName' in params ? params.VpcPeerConnectionName : null;
        this.State = 'State' in params ? params.State : null;
        this.VpcZone = 'VpcZone' in params ? params.VpcZone : null;
        this.PeerVpcZone = 'PeerVpcZone' in params ? params.PeerVpcZone : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.PeerUin = 'PeerUin' in params ? params.PeerUin : null;
        this.PeerType = 'PeerType' in params ? params.PeerType : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PeerRegion = 'PeerRegion' in params ? params.PeerRegion : null;
        this.DeleteFlag = 'DeleteFlag' in params ? params.DeleteFlag : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 创建VPC下默认子网
 * @class
 */
class VpcSubnetCreateInfo extends AbstractModel {

    SubnetName: string | null
    
    CidrBlock: string | null
    
    Zone: string | null
    
    constructor(){
        super();

        /**
         * 子网名称
         */
        this.SubnetName = null;

        /**
         * 子网的CIDR
         */
        this.CidrBlock = null;

        /**
         * 子网的可用区
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetName: string | null;
        CidrBlock: string | null;
        Zone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeVpnConnections请求参数结构体
 * @class
 */
class DescribeVpnConnectionsRequest extends AbstractModel {

    VpnConnectionIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    VpnGatewayId: string | null
    
    VpnConnectionName: string | null
    
    OrderField: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * VPN通道实例ID。形如：bmvpnx-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnConnectionIds和Filters。
         */
        this.VpnConnectionIds = null;

        /**
         * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpnConnectionIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>state - String - （过滤条件 VPN状态：creating，available，createfailed，changing，changefailed，deleting，deletefailed。</li>
<li>zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。</li>
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         */
        this.Limit = null;

        /**
         * VPN网关实例ID
         */
        this.VpnGatewayId = null;

        /**
         * VPN通道名称
         */
        this.VpnConnectionName = null;

        /**
         * 排序字段, 支持"CreateTime"排序
         */
        this.OrderField = null;

        /**
         * 排序方向, “asc”、“desc”
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnConnectionIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        VpnGatewayId: string | null;
        VpnConnectionName: string | null;
        OrderField: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnConnectionIds = 'VpnConnectionIds' in params ? params.VpnConnectionIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * ModifyVpcPeerConnection请求参数结构体
 * @class
 */
class ModifyVpcPeerConnectionRequest extends AbstractModel {

    VpcPeerConnectionId: string | null
    
    Bandwidth: number | null
    
    VpcPeerConnectionName: string | null
    
    constructor(){
        super();

        /**
         * 黑石对等连接唯一ID
         */
        this.VpcPeerConnectionId = null;

        /**
         * 对等连接带宽
         */
        this.Bandwidth = null;

        /**
         * 对等连接名称
         */
        this.VpcPeerConnectionName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcPeerConnectionId: string | null;
        Bandwidth: number | null;
        VpcPeerConnectionName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcPeerConnectionId = 'VpcPeerConnectionId' in params ? params.VpcPeerConnectionId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.VpcPeerConnectionName = 'VpcPeerConnectionName' in params ? params.VpcPeerConnectionName : null;

    }
}

/**
 * DeleteCustomerGateway返回参数结构体
 * @class
 */
class DeleteCustomerGatewayResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpcAttribute请求参数结构体
 * @class
 */
class ModifyVpcAttributeRequest extends AbstractModel {

    VpcId: string | null
    
    VpcName: string | null
    
    EnableMonitor: boolean | null
    
    constructor(){
        super();

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 私有网络名称
         */
        this.VpcName = null;

        /**
         * 是否开启内网监控，0为关闭，1为开启
         */
        this.EnableMonitor = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        VpcName: string | null;
        EnableMonitor: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.EnableMonitor = 'EnableMonitor' in params ? params.EnableMonitor : null;

    }
}

/**
 * CreateRoutePolicies返回参数结构体
 * @class
 */
class CreateRoutePoliciesResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRouteTables请求参数结构体
 * @class
 */
class DescribeRouteTablesRequest extends AbstractModel {

    RouteTableIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    OrderField: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         */
        this.RouteTableIds = null;

        /**
         * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
route-table-id - String - （过滤条件）路由表实例ID。
route-table-name - String - （过滤条件）路由表名称。
route-table-id-like - String - （模糊过滤条件）路由表实例ID。
route-table-name-like - String - （模糊过滤条件）路由表名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
zone - String - （过滤条件）可用区。
         */
        this.Filters = null;

        /**
         * 初始行的偏移量，默认为0。
         */
        this.Offset = null;

        /**
         * 每页行数，默认为20。
         */
        this.Limit = null;

        /**
         * 排序字段, 支持按“RouteTableId”，“VpcId”, "RouteTableName", "CreateTime"
         */
        this.OrderField = null;

        /**
         * 排序方向, “asc”、“desc”
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RouteTableIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        OrderField: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RouteTableIds = 'RouteTableIds' in params ? params.RouteTableIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * DeleteVirtualIp请求参数结构体
 * @class
 */
class DeleteVirtualIpRequest extends AbstractModel {

    VpcId: string | null
    
    Ips: Array<string> | null
    
    constructor(){
        super();

        /**
         * 私有网络唯一ID。
         */
        this.VpcId = null;

        /**
         * 退还的IP列表。
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        Ips: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Ips = 'Ips' in params ? params.Ips : null;

    }
}

/**
 * DescribeVpnGateways请求参数结构体
 * @class
 */
class DescribeVpnGatewaysRequest extends AbstractModel {

    VpnGatewayIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    OrderField: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * VPN网关实例ID。形如：bmvpngw-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnGatewayIds和Filters。
         */
        this.VpnGatewayIds = null;

        /**
         * 过滤条件，参数不支持同时指定VpnGatewayIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>state - String - （过滤条件 VPN状态：creating，available，createfailed，changing，changefailed，deleting，deletefailed。</li>
<li>zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。</li>
<li>vpngw-name - String - （过滤条件）vpn网关名称。</li>
         */
        this.Filters = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 请求对象个数
         */
        this.Limit = null;

        /**
         * 排序字段, 支持"CreateTime"排序
         */
        this.OrderField = null;

        /**
         * 排序方向, “asc”、“desc”
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnGatewayIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        OrderField: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnGatewayIds = 'VpnGatewayIds' in params ? params.VpnGatewayIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * CreateHostedInterface请求参数结构体
 * @class
 */
class CreateHostedInterfaceRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * 托管机器唯一ID 数组
         */
        this.InstanceIds = null;

        /**
         * 私有网络ID或者私有网络统一ID，建议使用统一ID
         */
        this.VpcId = null;

        /**
         * 子网ID或者子网统一ID，建议使用统一ID
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        VpcId: string | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * NAT详情
 * @class
 */
class NatGatewayInfo extends AbstractModel {

    NatId: string | null
    
    NatName: string | null
    
    VpcId: string | null
    
    VpcName: string | null
    
    ProductionStatus: number | null
    
    Eips: Array<string> | null
    
    MaxConcurrent: number | null
    
    Zone: string | null
    
    Exclusive: number | null
    
    ForwardMode: number | null
    
    VpcCidrBlock: string | null
    
    Type: string | null
    
    CreateTime: string | null
    
    State: number | null
    
    IntVpcId: number | null
    
    NatResourceId: number | null
    
    constructor(){
        super();

        /**
         * NAT网关ID
         */
        this.NatId = null;

        /**
         * 网关名称
         */
        this.NatName = null;

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 私有网络名称
         */
        this.VpcName = null;

        /**
         * 网关创建状态，其中0表示创建中，1表示运行中，2表示创建失败
         */
        this.ProductionStatus = null;

        /**
         * EIP列表
         */
        this.Eips = null;

        /**
         * 并发连接数规格，取值为1000000, 3000000, 10000000
         */
        this.MaxConcurrent = null;

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * 独占标识，其中0表示共享，1表示独占，默认值为0
         */
        this.Exclusive = null;

        /**
         * 转发模式，其中0表示IP方式，1表示网段方式
         */
        this.ForwardMode = null;

        /**
         * 私有网络网段
         */
        this.VpcCidrBlock = null;

        /**
         * 网关类型，取值为 small，middle，big，分别对应小型、中型、大型
         */
        this.Type = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * 网关启用状态，1为禁用，0为启用。
         */
        this.State = null;

        /**
         * 私有网络整型ID
         */
        this.IntVpcId = null;

        /**
         * NAT资源ID
         */
        this.NatResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        NatName: string | null;
        VpcId: string | null;
        VpcName: string | null;
        ProductionStatus: number | null;
        Eips: Array<string> | null;
        MaxConcurrent: number | null;
        Zone: string | null;
        Exclusive: number | null;
        ForwardMode: number | null;
        VpcCidrBlock: string | null;
        Type: string | null;
        CreateTime: string | null;
        State: number | null;
        IntVpcId: number | null;
        NatResourceId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.NatName = 'NatName' in params ? params.NatName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.ProductionStatus = 'ProductionStatus' in params ? params.ProductionStatus : null;
        this.Eips = 'Eips' in params ? params.Eips : null;
        this.MaxConcurrent = 'MaxConcurrent' in params ? params.MaxConcurrent : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.ForwardMode = 'ForwardMode' in params ? params.ForwardMode : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.IntVpcId = 'IntVpcId' in params ? params.IntVpcId : null;
        this.NatResourceId = 'NatResourceId' in params ? params.NatResourceId : null;

    }
}

/**
 * BindSubnetsToNatGateway请求参数结构体
 * @class
 */
class BindSubnetsToNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    SubnetIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 子网ID列表，子网下全部IP将加入NAT，不区分网关转发方式
         */
        this.SubnetIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
        SubnetIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * ResetVpnConnection返回参数结构体
 * @class
 */
class ResetVpnConnectionResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RejectVpcPeerConnection请求参数结构体
 * @class
 */
class RejectVpcPeerConnectionRequest extends AbstractModel {

    VpcPeerConnectionId: string | null
    
    constructor(){
        super();

        /**
         * 黑石对等连接实例ID
         */
        this.VpcPeerConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcPeerConnectionId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcPeerConnectionId = 'VpcPeerConnectionId' in params ? params.VpcPeerConnectionId : null;

    }
}

/**
 * VPC视图信息
 * @class
 */
class VpcViewInfo extends AbstractModel {

    VpcId: string | null
    
    VpcName: string | null
    
    CidrBlock: string | null
    
    Zone: string | null
    
    LbNum: number | null
    
    EipNum: number | null
    
    NatNum: number | null
    
    SubnetSet: Array<VpcSubnetViewInfo> | null
    
    constructor(){
        super();

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 私有网络名称
         */
        this.VpcName = null;

        /**
         * 私有网络CIDR
         */
        this.CidrBlock = null;

        /**
         * 私有网络所在可用区
         */
        this.Zone = null;

        /**
         * 外网负载均衡个数
         */
        this.LbNum = null;

        /**
         * 弹性公网IP个数
         */
        this.EipNum = null;

        /**
         * NAT网关个数
         */
        this.NatNum = null;

        /**
         * 子网列表
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        VpcName: string | null;
        CidrBlock: string | null;
        Zone: string | null;
        LbNum: number | null;
        EipNum: number | null;
        NatNum: number | null;
        SubnetSet: Array<VpcSubnetViewInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.LbNum = 'LbNum' in params ? params.LbNum : null;
        this.EipNum = 'EipNum' in params ? params.EipNum : null;
        this.NatNum = 'NatNum' in params ? params.NatNum : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new VpcSubnetViewInfo();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * DescribeCustomerGateways请求参数结构体
 * @class
 */
class DescribeCustomerGatewaysRequest extends AbstractModel {

    CustomerGatewayIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    OrderField: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * 对端网关ID，例如：bmcgw-2wqq41m9。每次请求的实例的上限为100。参数不支持同时指定CustomerGatewayIds和Filters。
         */
        this.CustomerGatewayIds = null;

        /**
         * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定CustomerGatewayIds和Filters。
<li>customergateway-name - String - （过滤条件）对端网关名称。</li>
<li>ip-address - String - （过滤条件)对端网关地址。</li>
<li>customergateway-id - String - （过滤条件）对端网关唯一ID。</li>
<li>zone - String - （过滤条件）对端所在可用区，形如：ap-guangzhou-2。</li>
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         */
        this.Limit = null;

        /**
         * 排序字段, 支持"CreateTime"排序
         */
        this.OrderField = null;

        /**
         * 排序方向, “asc”、“desc”
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGatewayIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        OrderField: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CustomerGatewayIds = 'CustomerGatewayIds' in params ? params.CustomerGatewayIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * CreateCustomerGateway请求参数结构体
 * @class
 */
class CreateCustomerGatewayRequest extends AbstractModel {

    CustomerGatewayName: string | null
    
    IpAddress: string | null
    
    Zone: string | null
    
    constructor(){
        super();

        /**
         * 对端网关名称，可任意命名，但不得超过60个字符。
         */
        this.CustomerGatewayName = null;

        /**
         * 对端网关公网IP。
         */
        this.IpAddress = null;

        /**
         * 可用区ID
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGatewayName: string | null;
        IpAddress: string | null;
        Zone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CustomerGatewayName = 'CustomerGatewayName' in params ? params.CustomerGatewayName : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DeleteHostedInterfaces请求参数结构体
 * @class
 */
class DeleteHostedInterfacesRequest extends AbstractModel {

    InstanceId: string | null
    
    SubnetIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 物理机ID
         */
        this.InstanceId = null;

        /**
         * 物理机ID
         */
        this.SubnetIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        SubnetIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends AbstractModel {

    TaskId: number | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ModifyVpnConnectionAttribute请求参数结构体
 * @class
 */
class ModifyVpnConnectionAttributeRequest extends AbstractModel {

    VpnConnectionId: string | null
    
    VpcId: string | null
    
    VpnConnectionName: string | null
    
    PreShareKey: string | null
    
    SecurityPolicyDatabases: Array<SecurityPolicyDatabase> | null
    
    IKEOptionsSpecification: IKEOptionsSpecification | null
    
    IPSECOptionsSpecification: IPSECOptionsSpecification | null
    
    constructor(){
        super();

        /**
         * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
         */
        this.VpnConnectionId = null;

        /**
         * VPC实例ID
         */
        this.VpcId = null;

        /**
         * VPN通道名称，可任意命名，但不得超过60个字符。
         */
        this.VpnConnectionName = null;

        /**
         * 预共享密钥。
         */
        this.PreShareKey = null;

        /**
         * SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。
         */
        this.SecurityPolicyDatabases = null;

        /**
         * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议。
         */
        this.IKEOptionsSpecification = null;

        /**
         * IPSec配置，腾讯云提供IPSec安全会话设置。
         */
        this.IPSECOptionsSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnConnectionId: string | null;
        VpcId: string | null;
        VpnConnectionName: string | null;
        PreShareKey: string | null;
        SecurityPolicyDatabases: Array<SecurityPolicyDatabase> | null;
        IKEOptionsSpecification: IKEOptionsSpecification | null;
        IPSECOptionsSpecification: IPSECOptionsSpecification | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnConnectionName = 'VpnConnectionName' in params ? params.VpnConnectionName : null;
        this.PreShareKey = 'PreShareKey' in params ? params.PreShareKey : null;

        if (params.SecurityPolicyDatabases) {
            this.SecurityPolicyDatabases = new Array();
            for (let z in params.SecurityPolicyDatabases) {
                let obj = new SecurityPolicyDatabase();
                obj.deserialize(params.SecurityPolicyDatabases[z]);
                this.SecurityPolicyDatabases.push(obj);
            }
        }

        if (params.IKEOptionsSpecification) {
            let obj = new IKEOptionsSpecification();
            obj.deserialize(params.IKEOptionsSpecification)
            this.IKEOptionsSpecification = obj;
        }

        if (params.IPSECOptionsSpecification) {
            let obj = new IPSECOptionsSpecification();
            obj.deserialize(params.IPSECOptionsSpecification)
            this.IPSECOptionsSpecification = obj;
        }

    }
}

/**
 * DescribeVpcResource请求参数结构体
 * @class
 */
class DescribeVpcResourceRequest extends AbstractModel {

    VpcIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    OrderField: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * 私有网络实例ID
         */
        this.VpcIds = null;

        /**
         * 过滤条件，参数不支持同时指定SubnetIds和Filters。
vpc-id - String - （过滤条件）私有网络实例ID，形如：vpc-f49l6u0z。
vpc-name - String - （过滤条件）私有网络名称。
zone - String - （过滤条件）可用区。
state - String - （过滤条件）VPC状态。available: 运营中; pending: 创建中; failed: 创建失败; deleting: 删除中
         */
        this.Filters = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 返回数量
         */
        this.Limit = null;

        /**
         * 排序字段
         */
        this.OrderField = null;

        /**
         * 排序方向, “asc”、“desc”
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        OrderField: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * BindEipsToNatGateway返回参数结构体
 * @class
 */
class BindEipsToNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcView返回参数结构体
 * @class
 */
class DescribeVpcViewResponse extends AbstractModel {

    VpcView: VpcViewInfo | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * VPC视图信息
         */
        this.VpcView = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcView: VpcViewInfo | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.VpcView) {
            let obj = new VpcViewInfo();
            obj.deserialize(params.VpcView)
            this.VpcView = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcView请求参数结构体
 * @class
 */
class DescribeVpcViewRequest extends AbstractModel {

    VpcId: string | null
    
    constructor(){
        super();

        /**
         * 私有网络唯一ID
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DescribeSubnetByDevice请求参数结构体
 * @class
 */
class DescribeSubnetByDeviceRequest extends AbstractModel {

    InstanceId: string | null
    
    Types: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 物理机ID
         */
        this.InstanceId = null;

        /**
         * 子网类型。0: 物理机子网; 7: DOCKER子网 8: 虚拟子网
         */
        this.Types = null;

        /**
         * 查询的起始位置。
         */
        this.Offset = null;

        /**
         * 查询的个数。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        Types: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Types = 'Types' in params ? params.Types : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AcceptVpcPeerConnection返回参数结构体
 * @class
 */
class AcceptVpcPeerConnectionResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoutePolicies请求参数结构体
 * @class
 */
class DescribeRoutePoliciesRequest extends AbstractModel {

    RouteTableId: string | null
    
    RoutePolicyIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-afg8md3c。
         */
        this.RouteTableId = null;

        /**
         * 路由策略实例ID，例如：rti-azd4dt1c。
         */
        this.RoutePolicyIds = null;

        /**
         * 过滤条件，参数不支持同时指定RoutePolicyIds和Filters。
route-table-id - String - （过滤条件）路由表实例ID。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
route-policy-id - String - （过滤条件）路由策略ID。
route-policy-description-like - String -（过滤条件）路由项备注。
route-policy-type - String - （过滤条件）路由项策略类型。
destination-cidr-like - String - （过滤条件）路由项目的地址。
gateway-id-like - String - （过滤条件）路由项下一跳网关。
gateway-type - String - （过滤条件）路由项下一条网关类型。
enable - Bool - （过滤条件）路由策略是否启用。
         */
        this.Filters = null;

        /**
         * 初始行的偏移量，默认为0。
         */
        this.Offset = null;

        /**
         * 每页行数，默认为20。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RouteTableId: string | null;
        RoutePolicyIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RoutePolicyIds = 'RoutePolicyIds' in params ? params.RoutePolicyIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * VPN网关对象。
 * @class
 */
class VpnGateway extends AbstractModel {

    VpnGatewayId: string | null
    
    VpcId: string | null
    
    VpnGatewayName: string | null
    
    VpcCidrBlock: string | null
    
    VpcName: string | null
    
    InternetMaxBandwidthOut: number | null
    
    State: string | null
    
    PublicIpAddress: string | null
    
    CreateTime: string | null
    
    Zone: string | null
    
    VpnConnNum: number | null
    
    constructor(){
        super();

        /**
         * 网关实例ID。
         */
        this.VpnGatewayId = null;

        /**
         * VPC实例ID。
         */
        this.VpcId = null;

        /**
         * 网关实例名称。
         */
        this.VpnGatewayName = null;

        /**
         * VPC网段
         */
        this.VpcCidrBlock = null;

        /**
         * VPC名称
         */
        this.VpcName = null;

        /**
         * 网关出带宽。
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 网关实例状态
         */
        this.State = null;

        /**
         * 网关公网IP。
         */
        this.PublicIpAddress = null;

        /**
         * 创建时间。
         */
        this.CreateTime = null;

        /**
         * 可用区，如：ap-guangzhou
         */
        this.Zone = null;

        /**
         * VPN网关的通道数
         */
        this.VpnConnNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnGatewayId: string | null;
        VpcId: string | null;
        VpnGatewayName: string | null;
        VpcCidrBlock: string | null;
        VpcName: string | null;
        InternetMaxBandwidthOut: number | null;
        State: string | null;
        PublicIpAddress: string | null;
        CreateTime: string | null;
        Zone: string | null;
        VpnConnNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.State = 'State' in params ? params.State : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpnConnNum = 'VpnConnNum' in params ? params.VpnConnNum : null;

    }
}

/**
 * ModifyVpnGatewayAttribute请求参数结构体
 * @class
 */
class ModifyVpnGatewayAttributeRequest extends AbstractModel {

    VpnGatewayId: string | null
    
    VpnGatewayName: string | null
    
    constructor(){
        super();

        /**
         * VPN网关实例ID。
         */
        this.VpnGatewayId = null;

        /**
         * VPN网关名称，最大长度不能超过60个字节。
         */
        this.VpnGatewayName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnGatewayId: string | null;
        VpnGatewayName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnGatewayId = 'VpnGatewayId' in params ? params.VpnGatewayId : null;
        this.VpnGatewayName = 'VpnGatewayName' in params ? params.VpnGatewayName : null;

    }
}

/**
 * CreateNatGateway请求参数结构体
 * @class
 */
class CreateNatGatewayRequest extends AbstractModel {

    ForwardMode: string | null
    
    VpcId: string | null
    
    NatName: string | null
    
    MaxConcurrent: number | null
    
    SubnetIds: Array<string> | null
    
    IpInfoSet: Array<IpInfo> | null
    
    AssignedEips: Array<string> | null
    
    AutoAllocEipNum: number | null
    
    Exclusive: number | null
    
    constructor(){
        super();

        /**
         * 转发模式，其中0表示IP方式，1表示网段方式；通过cidr方式可支持更多的IP接入到NAT网关
         */
        this.ForwardMode = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * NAT名称
         */
        this.NatName = null;

        /**
         * 并发连接数规格；取值为1000000、3000000、10000000，分别对应小型、中型、大型NAT网关
         */
        this.MaxConcurrent = null;

        /**
         * 子网ID列表，子网下全部IP将加入NAT，不区分网关转发方式
         */
        this.SubnetIds = null;

        /**
         * 部分IP信息，子网下只有该部分IP将加入NAT，仅当网关转发模式为IP方式有效；IpInfoSet和SubnetIds中的子网ID不能同时存在
         */
        this.IpInfoSet = null;

        /**
         * 已分配的EIP列表, AssignedEips和AutoAllocEipNum至少输入一个
         */
        this.AssignedEips = null;

        /**
         * 新建EIP数目，系统将会按您的要求生产该数目个数EIP, AssignedEips和AutoAllocEipNum至少输入一个
         */
        this.AutoAllocEipNum = null;

        /**
         * 独占标识，取值为0和1，默认值为0；0和1分别表示创建共享型NAT网关和独占NAT型网关；由于同一个VPC网络内，指向NAT集群的默认路由只有一条，因此VPC内只能创建一种类型NAT网关；创建独占型NAT网关时，需联系对应架构师进行独占NAT集群搭建，否则无法创建独占型NAT网关。
         */
        this.Exclusive = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ForwardMode: string | null;
        VpcId: string | null;
        NatName: string | null;
        MaxConcurrent: number | null;
        SubnetIds: Array<string> | null;
        IpInfoSet: Array<IpInfo> | null;
        AssignedEips: Array<string> | null;
        AutoAllocEipNum: number | null;
        Exclusive: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ForwardMode = 'ForwardMode' in params ? params.ForwardMode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NatName = 'NatName' in params ? params.NatName : null;
        this.MaxConcurrent = 'MaxConcurrent' in params ? params.MaxConcurrent : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

        if (params.IpInfoSet) {
            this.IpInfoSet = new Array();
            for (let z in params.IpInfoSet) {
                let obj = new IpInfo();
                obj.deserialize(params.IpInfoSet[z]);
                this.IpInfoSet.push(obj);
            }
        }
        this.AssignedEips = 'AssignedEips' in params ? params.AssignedEips : null;
        this.AutoAllocEipNum = 'AutoAllocEipNum' in params ? params.AutoAllocEipNum : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;

    }
}

/**
 * IPSec配置，腾讯云提供IPSec安全会话设置
 * @class
 */
class IPSECOptionsSpecification extends AbstractModel {

    PfsDhGroup: string | null
    
    IPSECSaLifetimeTraffic: number | null
    
    EncryptAlgorithm: string | null
    
    IntegrityAlgorith: string | null
    
    IPSECSaLifetimeSeconds: number | null
    
    SecurityProto: string | null
    
    EncapMode: string | null
    
    constructor(){
        super();

        /**
         * PFS：可选值：'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', 'DH-GROUP24'，默认为NULL
         */
        this.PfsDhGroup = null;

        /**
         * IPsec SA lifetime(KB)：单位KB，取值范围：2560-604800
         */
        this.IPSECSaLifetimeTraffic = null;

        /**
         * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', 'NULL'， 默认为AES-CBC-128
         */
        this.EncryptAlgorithm = null;

        /**
         * 认证算法：可选值：'MD5', 'SHA1'，默认为
         */
        this.IntegrityAlgorith = null;

        /**
         * IPsec SA lifetime(s)：单位秒，取值范围：180-604800
         */
        this.IPSECSaLifetimeSeconds = null;

        /**
         * 安全协议，默认为ESP
         */
        this.SecurityProto = null;

        /**
         * 报文封装模式:默认为Tunnel
         */
        this.EncapMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PfsDhGroup: string | null;
        IPSECSaLifetimeTraffic: number | null;
        EncryptAlgorithm: string | null;
        IntegrityAlgorith: string | null;
        IPSECSaLifetimeSeconds: number | null;
        SecurityProto: string | null;
        EncapMode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PfsDhGroup = 'PfsDhGroup' in params ? params.PfsDhGroup : null;
        this.IPSECSaLifetimeTraffic = 'IPSECSaLifetimeTraffic' in params ? params.IPSECSaLifetimeTraffic : null;
        this.EncryptAlgorithm = 'EncryptAlgorithm' in params ? params.EncryptAlgorithm : null;
        this.IntegrityAlgorith = 'IntegrityAlgorith' in params ? params.IntegrityAlgorith : null;
        this.IPSECSaLifetimeSeconds = 'IPSECSaLifetimeSeconds' in params ? params.IPSECSaLifetimeSeconds : null;
        this.SecurityProto = 'SecurityProto' in params ? params.SecurityProto : null;
        this.EncapMode = 'EncapMode' in params ? params.EncapMode : null;

    }
}

/**
 * DeleteVpnConnection请求参数结构体
 * @class
 */
class DeleteVpnConnectionRequest extends AbstractModel {

    VpnConnectionId: string | null
    
    constructor(){
        super();

        /**
         * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
         */
        this.VpnConnectionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpnConnectionId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpnConnectionId = 'VpnConnectionId' in params ? params.VpnConnectionId : null;

    }
}

/**
 * UnbindSubnetsFromNatGateway返回参数结构体
 * @class
 */
class UnbindSubnetsFromNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpnConnections返回参数结构体
 * @class
 */
class DescribeVpnConnectionsResponse extends AbstractModel {

    TotalCount: number | null
    
    VpnConnectionSet: Array<VpnConnection> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         */
        this.TotalCount = null;

        /**
         * VPN通道实例。
         */
        this.VpnConnectionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        VpnConnectionSet: Array<VpnConnection> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VpnConnectionSet) {
            this.VpnConnectionSet = new Array();
            for (let z in params.VpnConnectionSet) {
                let obj = new VpnConnection();
                obj.deserialize(params.VpnConnectionSet[z]);
                this.VpnConnectionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCustomerGateway请求参数结构体
 * @class
 */
class DeleteCustomerGatewayRequest extends AbstractModel {

    CustomerGatewayId: string | null
    
    constructor(){
        super();

        /**
         * 对端网关ID，例如：bmcgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。
         */
        this.CustomerGatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGatewayId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;

    }
}

/**
 * NAT IP信息
 * @class
 */
class IpInfo extends AbstractModel {

    SubnetId: string | null
    
    Ips: Array<string> | null
    
    constructor(){
        super();

        /**
         * 子网ID
         */
        this.SubnetId = null;

        /**
         * IP列表
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetId: string | null;
        Ips: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Ips = 'Ips' in params ? params.Ips : null;

    }
}

/**
 * UpgradeNatGateway请求参数结构体
 * @class
 */
class UpgradeNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    MaxConcurrent: number | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 并发连接数规格；取值为1000000、3000000、10000000，分别对应小型、中型、大型NAT网关
         */
        this.MaxConcurrent = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
        MaxConcurrent: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.MaxConcurrent = 'MaxConcurrent' in params ? params.MaxConcurrent : null;

    }
}

/**
 * DeleteVpnGateway返回参数结构体
 * @class
 */
class DeleteVpnGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInterfaces返回参数结构体
 * @class
 */
class DeleteInterfacesResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindIpsFromNatGateway请求参数结构体
 * @class
 */
class UnbindIpsFromNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    IpInfoSet: Array<IpInfo> | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 部分IP信息；子网须以部分IP将加入NAT网关
         */
        this.IpInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
        IpInfoSet: Array<IpInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.IpInfoSet) {
            this.IpInfoSet = new Array();
            for (let z in params.IpInfoSet) {
                let obj = new IpInfo();
                obj.deserialize(params.IpInfoSet[z]);
                this.IpInfoSet.push(obj);
            }
        }

    }
}

/**
 * CreateVirtualSubnetWithVlan返回参数结构体
 * @class
 */
class CreateVirtualSubnetWithVlanResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVpnGatewayAttribute返回参数结构体
 * @class
 */
class ModifyVpnGatewayAttributeResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcQuota返回参数结构体
 * @class
 */
class DescribeVpcQuotaResponse extends AbstractModel {

    VpcQuotaSet: Array<VpcQuota> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 配额信息
         */
        this.VpcQuotaSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcQuotaSet: Array<VpcQuota> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.VpcQuotaSet) {
            this.VpcQuotaSet = new Array();
            for (let z in params.VpcQuotaSet) {
                let obj = new VpcQuota();
                obj.deserialize(params.VpcQuotaSet[z]);
                this.VpcQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindEipsFromNatGateway返回参数结构体
 * @class
 */
class UnbindEipsFromNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySubnetAttribute返回参数结构体
 * @class
 */
class ModifySubnetAttributeResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInterfaces请求参数结构体
 * @class
 */
class CreateInterfacesRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * 物理机实例ID列表
         */
        this.InstanceIds = null;

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 子网ID
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        VpcId: string | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeVpcPeerConnections请求参数结构体
 * @class
 */
class DescribeVpcPeerConnectionsRequest extends AbstractModel {

    VpcPeerConnectionIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    VpcId: string | null
    
    constructor(){
        super();

        /**
         * 对等连接实例ID
         */
        this.VpcPeerConnectionIds = null;

        /**
         * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpcPeerConnectionIds和Filters。
过滤条件，参数不支持同时指定VpcPeerConnectionIds和Filters。
<li>peer-name - String - （过滤条件）对等连接名称。</li>
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         */
        this.Limit = null;

        /**
         * 私有网络ID
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcPeerConnectionIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        VpcId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcPeerConnectionIds = 'VpcPeerConnectionIds' in params ? params.VpcPeerConnectionIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * CreateVpc请求参数结构体
 * @class
 */
class CreateVpcRequest extends AbstractModel {

    VpcName: string | null
    
    CidrBlock: string | null
    
    Zone: string | null
    
    SubnetSet: Array<VpcSubnetCreateInfo> | null
    
    EnableMonitoring: boolean | null
    
    constructor(){
        super();

        /**
         * 私有网络的名称
         */
        this.VpcName = null;

        /**
         * 私有网络的CIDR
         */
        this.CidrBlock = null;

        /**
         * 私有网络的可用区
         */
        this.Zone = null;

        /**
         * 子网信息
         */
        this.SubnetSet = null;

        /**
         * 是否启用内网监控
         */
        this.EnableMonitoring = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcName: string | null;
        CidrBlock: string | null;
        Zone: string | null;
        SubnetSet: Array<VpcSubnetCreateInfo> | null;
        EnableMonitoring: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new VpcSubnetCreateInfo();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.EnableMonitoring = 'EnableMonitoring' in params ? params.EnableMonitoring : null;

    }
}

/**
 * DescribeSubnetByHostedDevice返回参数结构体
 * @class
 */
class DescribeSubnetByHostedDeviceResponse extends AbstractModel {

    TotalCount: number | null
    
    Data: Array<SubnetInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 子网个数
         */
        this.TotalCount = null;

        /**
         * 子网列表
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        Data: Array<SubnetInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SubnetInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVpcPeerConnection请求参数结构体
 * @class
 */
class CreateVpcPeerConnectionRequest extends AbstractModel {

    VpcId: string | null
    
    PeerVpcId: string | null
    
    PeerRegion: string | null
    
    VpcPeerConnectionName: string | null
    
    PeerUin: string | null
    
    Bandwidth: number | null
    
    constructor(){
        super();

        /**
         * 本端VPC唯一ID
         */
        this.VpcId = null;

        /**
         * 对端VPC唯一ID
         */
        this.PeerVpcId = null;

        /**
         * 对端地域，取值范围为gz,sh,bj,hk,cd,de,sh_bm,gz_bm,bj_bm,cq_bm等
         */
        this.PeerRegion = null;

        /**
         * 对等连接名称
         */
        this.VpcPeerConnectionName = null;

        /**
         * 对端账户OwnerUin（默认值为本端账户）
         */
        this.PeerUin = null;

        /**
         * 跨地域必传，带宽上限值
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        PeerVpcId: string | null;
        PeerRegion: string | null;
        VpcPeerConnectionName: string | null;
        PeerUin: string | null;
        Bandwidth: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PeerVpcId = 'PeerVpcId' in params ? params.PeerVpcId : null;
        this.PeerRegion = 'PeerRegion' in params ? params.PeerRegion : null;
        this.VpcPeerConnectionName = 'VpcPeerConnectionName' in params ? params.VpcPeerConnectionName : null;
        this.PeerUin = 'PeerUin' in params ? params.PeerUin : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * 对端网关
 * @class
 */
class CustomerGateway extends AbstractModel {

    CustomerGatewayId: string | null
    
    CustomerGatewayName: string | null
    
    IpAddress: string | null
    
    CreateTime: string | null
    
    VpnConnNum: number | null
    
    constructor(){
        super();

        /**
         * 用户网关唯一ID
         */
        this.CustomerGatewayId = null;

        /**
         * 网关名称
         */
        this.CustomerGatewayName = null;

        /**
         * 公网地址
         */
        this.IpAddress = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * VPN通道引用个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VpnConnNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CustomerGatewayId: string | null;
        CustomerGatewayName: string | null;
        IpAddress: string | null;
        CreateTime: string | null;
        VpnConnNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CustomerGatewayId = 'CustomerGatewayId' in params ? params.CustomerGatewayId : null;
        this.CustomerGatewayName = 'CustomerGatewayName' in params ? params.CustomerGatewayName : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpnConnNum = 'VpnConnNum' in params ? params.VpnConnNum : null;

    }
}

/**
 * ModifyRoutePolicy返回参数结构体
 * @class
 */
class ModifyRoutePolicyResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AsyncRegisterIps返回参数结构体
 * @class
 */
class AsyncRegisterIpsResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID。
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVpc返回参数结构体
 * @class
 */
class DeleteVpcResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID。
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindIpsToNatGateway返回参数结构体
 * @class
 */
class BindIpsToNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC限额信息
 * @class
 */
class VpcQuota extends AbstractModel {

    TypeId: number | null
    
    Quota: number | null
    
    constructor(){
        super();

        /**
         * 配额类型ID
         */
        this.TypeId = null;

        /**
         * 配额
         */
        this.Quota = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TypeId: number | null;
        Quota: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.Quota = 'Quota' in params ? params.Quota : null;

    }
}

/**
 * CreateNatGateway返回参数结构体
 * @class
 */
class CreateNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AsyncRegisterIps请求参数结构体
 * @class
 */
class AsyncRegisterIpsRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetId: string | null
    
    Ips: Array<string> | null
    
    constructor(){
        super();

        /**
         * 私有网络的唯一ID。
         */
        this.VpcId = null;

        /**
         * 子网唯一ID。
         */
        this.SubnetId = null;

        /**
         * 需要注册的IP列表。
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetId: string | null;
        Ips: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Ips = 'Ips' in params ? params.Ips : null;

    }
}

/**
 * BindIpsToNatGateway请求参数结构体
 * @class
 */
class BindIpsToNatGatewayRequest extends AbstractModel {

    NatId: string | null
    
    VpcId: string | null
    
    IpInfoSet: Array<IpInfo> | null
    
    constructor(){
        super();

        /**
         * NAT网关ID，例如：nat-kdm476mp
         */
        this.NatId = null;

        /**
         * 私有网络ID，例如：vpc-kd7d06of
         */
        this.VpcId = null;

        /**
         * 部分IP信息，子网下只有该部分IP将加入NAT，仅当网关转发模式为IP方式有效
         */
        this.IpInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NatId: string | null;
        VpcId: string | null;
        IpInfoSet: Array<IpInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.IpInfoSet) {
            this.IpInfoSet = new Array();
            for (let z in params.IpInfoSet) {
                let obj = new IpInfo();
                obj.deserialize(params.IpInfoSet[z]);
                this.IpInfoSet.push(obj);
            }
        }

    }
}

/**
 * DescribeVpcs返回参数结构体
 * @class
 */
class DescribeVpcsResponse extends AbstractModel {

    VpcSet: Array<VpcInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * VPC列表
         */
        this.VpcSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcSet: Array<VpcInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建子网时的子网类型
 * @class
 */
class SubnetCreateInputInfo extends AbstractModel {

    SubnetName: string | null
    
    CidrBlock: string | null
    
    DistributedFlag: number | null
    
    DhcpEnable: number | null
    
    DhcpServerIp: Array<string> | null
    
    IpReserve: number | null
    
    VlanId: number | null
    
    Zone: string | null
    
    IsSmartNic: number | null
    
    constructor(){
        super();

        /**
         * 子网名称，可任意命名，但不得超过60个字符
         */
        this.SubnetName = null;

        /**
         * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠
         */
        this.CidrBlock = null;

        /**
         * 是否开启子网分布式网关，默认传1，传0为关闭子网分布式网关。关闭分布式网关子网用于云服务器化子网，此子网中只能有一台物理机，同时此物理机及其上子机只能在此子网中
         */
        this.DistributedFlag = null;

        /**
         * 是否开启dhcp relay ，关闭为0，开启为1。默认为0
         */
        this.DhcpEnable = null;

        /**
         * DHCP SERVER 的IP地址数组。IP地址为相同VPC的子网内分配的IP
         */
        this.DhcpServerIp = null;

        /**
         * 预留的IP个数。从该子网的最大可分配IP倒序分配N个IP 用于DHCP 动态分配使用的地址段
         */
        this.IpReserve = null;

        /**
         * 子网绑定的vlanId。VlanId取值范围为2000-2999。创建物理机子网，VlanId默认为5; 创建docker子网或者虚拟子网，VlanId默认会分配2000--2999未使用的数值。
         */
        this.VlanId = null;

        /**
         * 黑石子网的可用区
         */
        this.Zone = null;

        /**
         * 是否25G子网，1为是，0为否。
         */
        this.IsSmartNic = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetName: string | null;
        CidrBlock: string | null;
        DistributedFlag: number | null;
        DhcpEnable: number | null;
        DhcpServerIp: Array<string> | null;
        IpReserve: number | null;
        VlanId: number | null;
        Zone: string | null;
        IsSmartNic: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.DistributedFlag = 'DistributedFlag' in params ? params.DistributedFlag : null;
        this.DhcpEnable = 'DhcpEnable' in params ? params.DhcpEnable : null;
        this.DhcpServerIp = 'DhcpServerIp' in params ? params.DhcpServerIp : null;
        this.IpReserve = 'IpReserve' in params ? params.IpReserve : null;
        this.VlanId = 'VlanId' in params ? params.VlanId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.IsSmartNic = 'IsSmartNic' in params ? params.IsSmartNic : null;

    }
}

/**
 * DeregisterIps请求参数结构体
 * @class
 */
class DeregisterIpsRequest extends AbstractModel {

    VpcId: string | null
    
    IpSet: Array<string> | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 注销指定IP的列表
         */
        this.IpSet = null;

        /**
         * 私有网络子网ID
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        IpSet: Array<string> | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IpSet = 'IpSet' in params ? params.IpSet : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * SecurityPolicyDatabase策略
 * @class
 */
class SecurityPolicyDatabase extends AbstractModel {

    LocalCidrBlock: string | null
    
    RemoteCidrBlock: Array<string> | null
    
    constructor(){
        super();

        /**
         * 本端网段
         */
        this.LocalCidrBlock = null;

        /**
         * 对端网段
         */
        this.RemoteCidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LocalCidrBlock: string | null;
        RemoteCidrBlock: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.LocalCidrBlock = 'LocalCidrBlock' in params ? params.LocalCidrBlock : null;
        this.RemoteCidrBlock = 'RemoteCidrBlock' in params ? params.RemoteCidrBlock : null;

    }
}

/**
 * VPC占用资源
 * @class
 */
class VpcResource extends AbstractModel {

    VpcId: string | null
    
    VpcName: string | null
    
    CidrBlock: string | null
    
    SubnetNum: number | null
    
    NatNum: number | null
    
    State: string | null
    
    MonitorFlag: boolean | null
    
    CpmNum: number | null
    
    LeaveIpNum: number | null
    
    LbNum: number | null
    
    TrafficMirrorNum: number | null
    
    EipNum: number | null
    
    PlgwNum: number | null
    
    PlvpNum: number | null
    
    SslVpnGwNum: number | null
    
    VpcPeerNum: number | null
    
    IpsecVpnGwNum: number | null
    
    Zone: string | null
    
    CreateTime: string | null
    
    IsOld: boolean | null
    
    CcnServiceNum: number | null
    
    VpcPeerLimitToAllRegion: number | null
    
    VpcPeerLimitToSameRegion: number | null
    
    IntVpcId: number | null
    
    constructor(){
        super();

        /**
         * 私有网络ID
         */
        this.VpcId = null;

        /**
         * 私有网络名称
         */
        this.VpcName = null;

        /**
         * 私有网络的CIDR
         */
        this.CidrBlock = null;

        /**
         * 子网个数
         */
        this.SubnetNum = null;

        /**
         * NAT个数
         */
        this.NatNum = null;

        /**
         * VPC状态
         */
        this.State = null;

        /**
         * 是否开启监控
         */
        this.MonitorFlag = null;

        /**
         * 物理机个数
         */
        this.CpmNum = null;

        /**
         * 可用IP个数
         */
        this.LeaveIpNum = null;

        /**
         * 负载均衡个数
         */
        this.LbNum = null;

        /**
         * 流量镜像网关个数
         */
        this.TrafficMirrorNum = null;

        /**
         * 弹性IP个数
         */
        this.EipNum = null;

        /**
         * 专线网关个数
         */
        this.PlgwNum = null;

        /**
         * 专线通道个数
         */
        this.PlvpNum = null;

        /**
         * ssl vpn网关个数
         */
        this.SslVpnGwNum = null;

        /**
         * 对等链接个数
         */
        this.VpcPeerNum = null;

        /**
         * ipsec vpn网关个数
         */
        this.IpsecVpnGwNum = null;

        /**
         * 可用区
         */
        this.Zone = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * 是否老专区VPC
         */
        this.IsOld = null;

        /**
         * 云联网服务个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CcnServiceNum = null;

        /**
         * VPC允许创建的对等连接个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VpcPeerLimitToAllRegion = null;

        /**
         * VPC允许创建的同地域的对等连接的个数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VpcPeerLimitToSameRegion = null;

        /**
         * 整型私有网络ID
         */
        this.IntVpcId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        VpcName: string | null;
        CidrBlock: string | null;
        SubnetNum: number | null;
        NatNum: number | null;
        State: string | null;
        MonitorFlag: boolean | null;
        CpmNum: number | null;
        LeaveIpNum: number | null;
        LbNum: number | null;
        TrafficMirrorNum: number | null;
        EipNum: number | null;
        PlgwNum: number | null;
        PlvpNum: number | null;
        SslVpnGwNum: number | null;
        VpcPeerNum: number | null;
        IpsecVpnGwNum: number | null;
        Zone: string | null;
        CreateTime: string | null;
        IsOld: boolean | null;
        CcnServiceNum: number | null;
        VpcPeerLimitToAllRegion: number | null;
        VpcPeerLimitToSameRegion: number | null;
        IntVpcId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.SubnetNum = 'SubnetNum' in params ? params.SubnetNum : null;
        this.NatNum = 'NatNum' in params ? params.NatNum : null;
        this.State = 'State' in params ? params.State : null;
        this.MonitorFlag = 'MonitorFlag' in params ? params.MonitorFlag : null;
        this.CpmNum = 'CpmNum' in params ? params.CpmNum : null;
        this.LeaveIpNum = 'LeaveIpNum' in params ? params.LeaveIpNum : null;
        this.LbNum = 'LbNum' in params ? params.LbNum : null;
        this.TrafficMirrorNum = 'TrafficMirrorNum' in params ? params.TrafficMirrorNum : null;
        this.EipNum = 'EipNum' in params ? params.EipNum : null;
        this.PlgwNum = 'PlgwNum' in params ? params.PlgwNum : null;
        this.PlvpNum = 'PlvpNum' in params ? params.PlvpNum : null;
        this.SslVpnGwNum = 'SslVpnGwNum' in params ? params.SslVpnGwNum : null;
        this.VpcPeerNum = 'VpcPeerNum' in params ? params.VpcPeerNum : null;
        this.IpsecVpnGwNum = 'IpsecVpnGwNum' in params ? params.IpsecVpnGwNum : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsOld = 'IsOld' in params ? params.IsOld : null;
        this.CcnServiceNum = 'CcnServiceNum' in params ? params.CcnServiceNum : null;
        this.VpcPeerLimitToAllRegion = 'VpcPeerLimitToAllRegion' in params ? params.VpcPeerLimitToAllRegion : null;
        this.VpcPeerLimitToSameRegion = 'VpcPeerLimitToSameRegion' in params ? params.VpcPeerLimitToSameRegion : null;
        this.IntVpcId = 'IntVpcId' in params ? params.IntVpcId : null;

    }
}

/**
 * UpgradeNatGateway返回参数结构体
 * @class
 */
class UpgradeNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNatGateway返回参数结构体
 * @class
 */
class DeleteNatGatewayResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    ModifySubnetDHCPRelayResponse: ModifySubnetDHCPRelayResponse,
    DescribeNatSubnetsResponse: DescribeNatSubnetsResponse,
    DescribeVpcPeerConnectionsResponse: DescribeVpcPeerConnectionsResponse,
    UnbindIpsFromNatGatewayResponse: UnbindIpsFromNatGatewayResponse,
    IKEOptionsSpecification: IKEOptionsSpecification,
    ModifyRouteTableRequest: ModifyRouteTableRequest,
    CreateRoutePoliciesRequest: CreateRoutePoliciesRequest,
    Filter: Filter,
    CreateVirtualSubnetWithVlanRequest: CreateVirtualSubnetWithVlanRequest,
    DeleteVirtualIpResponse: DeleteVirtualIpResponse,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    DownloadCustomerGatewayConfigurationRequest: DownloadCustomerGatewayConfigurationRequest,
    CreateHostedInterfaceResponse: CreateHostedInterfaceResponse,
    DescribeSubnetByDeviceResponse: DescribeSubnetByDeviceResponse,
    DeleteSubnetResponse: DeleteSubnetResponse,
    DeregisterIpsResponse: DeregisterIpsResponse,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    ModifyVpcPeerConnectionResponse: ModifyVpcPeerConnectionResponse,
    DescribeCustomerGatewaysResponse: DescribeCustomerGatewaysResponse,
    UnbindSubnetsFromNatGatewayRequest: UnbindSubnetsFromNatGatewayRequest,
    SubnetInfo: SubnetInfo,
    DeleteRoutePolicyResponse: DeleteRoutePolicyResponse,
    DescribeVpnGatewaysResponse: DescribeVpnGatewaysResponse,
    VpcInfo: VpcInfo,
    CreateInterfacesResponse: CreateInterfacesResponse,
    DescribeNatSubnetsRequest: DescribeNatSubnetsRequest,
    DownloadCustomerGatewayConfigurationResponse: DownloadCustomerGatewayConfigurationResponse,
    DeleteSubnetRequest: DeleteSubnetRequest,
    DeleteRoutePolicyRequest: DeleteRoutePolicyRequest,
    ModifyRoutePolicyRequest: ModifyRoutePolicyRequest,
    RouteTable: RouteTable,
    DescribeVpcQuotaRequest: DescribeVpcQuotaRequest,
    CreateDockerSubnetWithVlanResponse: CreateDockerSubnetWithVlanResponse,
    DescribeSubnetAvailableIpsRequest: DescribeSubnetAvailableIpsRequest,
    DeleteVpcRequest: DeleteVpcRequest,
    UnbindEipsFromNatGatewayRequest: UnbindEipsFromNatGatewayRequest,
    DescribeRoutePoliciesResponse: DescribeRoutePoliciesResponse,
    CreateSubnetResponse: CreateSubnetResponse,
    AcceptVpcPeerConnectionRequest: AcceptVpcPeerConnectionRequest,
    BindSubnetsToNatGatewayResponse: BindSubnetsToNatGatewayResponse,
    VpcSubnetViewInfo: VpcSubnetViewInfo,
    CreateVpcResponse: CreateVpcResponse,
    CreateCustomerGatewayResponse: CreateCustomerGatewayResponse,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    DeleteVpnGatewayRequest: DeleteVpnGatewayRequest,
    NatSubnetInfo: NatSubnetInfo,
    DescribeSubnetByHostedDeviceRequest: DescribeSubnetByHostedDeviceRequest,
    CreateVpcPeerConnectionResponse: CreateVpcPeerConnectionResponse,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    ResetVpnConnectionRequest: ResetVpnConnectionRequest,
    DeleteNatGatewayRequest: DeleteNatGatewayRequest,
    DeleteVpnConnectionResponse: DeleteVpnConnectionResponse,
    ModifyCustomerGatewayAttributeResponse: ModifyCustomerGatewayAttributeResponse,
    VpnConnection: VpnConnection,
    CreateDockerSubnetWithVlanRequest: CreateDockerSubnetWithVlanRequest,
    RoutePolicy: RoutePolicy,
    DeleteHostedInterfaceResponse: DeleteHostedInterfaceResponse,
    DeleteVpcPeerConnectionResponse: DeleteVpcPeerConnectionResponse,
    DeleteHostedInterfacesResponse: DeleteHostedInterfacesResponse,
    ModifySubnetDHCPRelayRequest: ModifySubnetDHCPRelayRequest,
    DeleteVpcPeerConnectionRequest: DeleteVpcPeerConnectionRequest,
    DeleteHostedInterfaceRequest: DeleteHostedInterfaceRequest,
    BindEipsToNatGatewayRequest: BindEipsToNatGatewayRequest,
    DeleteInterfacesRequest: DeleteInterfacesRequest,
    DescribeVpcsRequest: DescribeVpcsRequest,
    DescribeVpcResourceResponse: DescribeVpcResourceResponse,
    RejectVpcPeerConnectionResponse: RejectVpcPeerConnectionResponse,
    ModifyCustomerGatewayAttributeRequest: ModifyCustomerGatewayAttributeRequest,
    DescribeRouteTablesResponse: DescribeRouteTablesResponse,
    ModifyRouteTableResponse: ModifyRouteTableResponse,
    DescribeNatGatewaysResponse: DescribeNatGatewaysResponse,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    ModifyVpnConnectionAttributeResponse: ModifyVpnConnectionAttributeResponse,
    DescribeSubnetAvailableIpsResponse: DescribeSubnetAvailableIpsResponse,
    DescribeNatGatewaysRequest: DescribeNatGatewaysRequest,
    VpcPeerConnection: VpcPeerConnection,
    VpcSubnetCreateInfo: VpcSubnetCreateInfo,
    DescribeVpnConnectionsRequest: DescribeVpnConnectionsRequest,
    ModifyVpcPeerConnectionRequest: ModifyVpcPeerConnectionRequest,
    DeleteCustomerGatewayResponse: DeleteCustomerGatewayResponse,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    CreateRoutePoliciesResponse: CreateRoutePoliciesResponse,
    DescribeRouteTablesRequest: DescribeRouteTablesRequest,
    DeleteVirtualIpRequest: DeleteVirtualIpRequest,
    DescribeVpnGatewaysRequest: DescribeVpnGatewaysRequest,
    CreateHostedInterfaceRequest: CreateHostedInterfaceRequest,
    NatGatewayInfo: NatGatewayInfo,
    BindSubnetsToNatGatewayRequest: BindSubnetsToNatGatewayRequest,
    ResetVpnConnectionResponse: ResetVpnConnectionResponse,
    RejectVpcPeerConnectionRequest: RejectVpcPeerConnectionRequest,
    VpcViewInfo: VpcViewInfo,
    DescribeCustomerGatewaysRequest: DescribeCustomerGatewaysRequest,
    CreateCustomerGatewayRequest: CreateCustomerGatewayRequest,
    DeleteHostedInterfacesRequest: DeleteHostedInterfacesRequest,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    ModifyVpnConnectionAttributeRequest: ModifyVpnConnectionAttributeRequest,
    DescribeVpcResourceRequest: DescribeVpcResourceRequest,
    BindEipsToNatGatewayResponse: BindEipsToNatGatewayResponse,
    DescribeVpcViewResponse: DescribeVpcViewResponse,
    DescribeVpcViewRequest: DescribeVpcViewRequest,
    DescribeSubnetByDeviceRequest: DescribeSubnetByDeviceRequest,
    AcceptVpcPeerConnectionResponse: AcceptVpcPeerConnectionResponse,
    DescribeRoutePoliciesRequest: DescribeRoutePoliciesRequest,
    VpnGateway: VpnGateway,
    ModifyVpnGatewayAttributeRequest: ModifyVpnGatewayAttributeRequest,
    CreateNatGatewayRequest: CreateNatGatewayRequest,
    IPSECOptionsSpecification: IPSECOptionsSpecification,
    DeleteVpnConnectionRequest: DeleteVpnConnectionRequest,
    UnbindSubnetsFromNatGatewayResponse: UnbindSubnetsFromNatGatewayResponse,
    DescribeVpnConnectionsResponse: DescribeVpnConnectionsResponse,
    DeleteCustomerGatewayRequest: DeleteCustomerGatewayRequest,
    IpInfo: IpInfo,
    UpgradeNatGatewayRequest: UpgradeNatGatewayRequest,
    DeleteVpnGatewayResponse: DeleteVpnGatewayResponse,
    DeleteInterfacesResponse: DeleteInterfacesResponse,
    UnbindIpsFromNatGatewayRequest: UnbindIpsFromNatGatewayRequest,
    CreateVirtualSubnetWithVlanResponse: CreateVirtualSubnetWithVlanResponse,
    ModifyVpnGatewayAttributeResponse: ModifyVpnGatewayAttributeResponse,
    DescribeVpcQuotaResponse: DescribeVpcQuotaResponse,
    UnbindEipsFromNatGatewayResponse: UnbindEipsFromNatGatewayResponse,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    CreateInterfacesRequest: CreateInterfacesRequest,
    DescribeVpcPeerConnectionsRequest: DescribeVpcPeerConnectionsRequest,
    CreateVpcRequest: CreateVpcRequest,
    DescribeSubnetByHostedDeviceResponse: DescribeSubnetByHostedDeviceResponse,
    CreateVpcPeerConnectionRequest: CreateVpcPeerConnectionRequest,
    CustomerGateway: CustomerGateway,
    ModifyRoutePolicyResponse: ModifyRoutePolicyResponse,
    AsyncRegisterIpsResponse: AsyncRegisterIpsResponse,
    DeleteVpcResponse: DeleteVpcResponse,
    BindIpsToNatGatewayResponse: BindIpsToNatGatewayResponse,
    VpcQuota: VpcQuota,
    CreateNatGatewayResponse: CreateNatGatewayResponse,
    AsyncRegisterIpsRequest: AsyncRegisterIpsRequest,
    BindIpsToNatGatewayRequest: BindIpsToNatGatewayRequest,
    DescribeVpcsResponse: DescribeVpcsResponse,
    SubnetCreateInputInfo: SubnetCreateInputInfo,
    DeregisterIpsRequest: DeregisterIpsRequest,
    SecurityPolicyDatabase: SecurityPolicyDatabase,
    VpcResource: VpcResource,
    UpgradeNatGatewayResponse: UpgradeNatGatewayResponse,
    DeleteNatGatewayResponse: DeleteNatGatewayResponse,

}
