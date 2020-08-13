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
 * bgp参数，包括Asn，AuthKey
 * @class
 */
class BgpPeer extends AbstractModel {

    Asn: number | null
    
    AuthKey: string | null
    
    constructor(){
        super();

        /**
         * 用户侧，BGP Asn
         */
        this.Asn = null;

        /**
         * 用户侧BGP密钥
         */
        this.AuthKey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Asn: number | null;
        AuthKey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Asn = 'Asn' in params ? params.Asn : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;

    }
}

/**
 * RejectDirectConnectTunnel请求参数结构体
 * @class
 */
class RejectDirectConnectTunnelRequest extends AbstractModel {

    DirectConnectTunnelId: string | null
    
    constructor(){
        super();

        /**
         * 无
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectTunnelId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * ModifyDirectConnectAttribute请求参数结构体
 * @class
 */
class ModifyDirectConnectAttributeRequest extends AbstractModel {

    DirectConnectId: string | null
    
    DirectConnectName: string | null
    
    CircuitCode: string | null
    
    Vlan: number | null
    
    TencentAddress: string | null
    
    CustomerAddress: string | null
    
    CustomerName: string | null
    
    CustomerContactMail: string | null
    
    CustomerContactNumber: string | null
    
    FaultReportContactPerson: string | null
    
    FaultReportContactNumber: string | null
    
    SignLaw: boolean | null
    
    constructor(){
        super();

        /**
         * 物理专线的ID。
         */
        this.DirectConnectId = null;

        /**
         * 物理专线名称。
         */
        this.DirectConnectName = null;

        /**
         * 运营商或者服务商为物理专线提供的电路编码。
         */
        this.CircuitCode = null;

        /**
         * 物理专线调试VLAN。
         */
        this.Vlan = null;

        /**
         * 物理专线调试腾讯侧互联 IP。
         */
        this.TencentAddress = null;

        /**
         * 物理专线调试用户侧互联 IP。
         */
        this.CustomerAddress = null;

        /**
         * 物理专线申请者姓名。默认从账户体系获取。
         */
        this.CustomerName = null;

        /**
         * 物理专线申请者联系邮箱。默认从账户体系获取。
         */
        this.CustomerContactMail = null;

        /**
         * 物理专线申请者联系号码。默认从账户体系获取。
         */
        this.CustomerContactNumber = null;

        /**
         * 报障联系人。
         */
        this.FaultReportContactPerson = null;

        /**
         * 报障联系电话。
         */
        this.FaultReportContactNumber = null;

        /**
         * 物理专线申请者补签用户使用协议
         */
        this.SignLaw = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectId: string | null;
        DirectConnectName: string | null;
        CircuitCode: string | null;
        Vlan: number | null;
        TencentAddress: string | null;
        CustomerAddress: string | null;
        CustomerName: string | null;
        CustomerContactMail: string | null;
        CustomerContactNumber: string | null;
        FaultReportContactPerson: string | null;
        FaultReportContactNumber: string | null;
        SignLaw: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;

    }
}

/**
 * DeleteDirectConnectTunnel请求参数结构体
 * @class
 */
class DeleteDirectConnectTunnelRequest extends AbstractModel {

    DirectConnectTunnelId: string | null
    
    constructor(){
        super();

        /**
         * 专用通道ID
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectTunnelId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * CreateDirectConnect返回参数结构体
 * @class
 */
class CreateDirectConnectResponse extends AbstractModel {

    DirectConnectIdSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 物理专线的ID。
         */
        this.DirectConnectIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectIdSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectIdSet = 'DirectConnectIdSet' in params ? params.DirectConnectIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 物理专线信息列表
 * @class
 */
class DirectConnect extends AbstractModel {

    DirectConnectId: string | null
    
    DirectConnectName: string | null
    
    AccessPointId: string | null
    
    State: string | null
    
    CreatedTime: string | null
    
    EnabledTime: string | null
    
    LineOperator: string | null
    
    Location: string | null
    
    Bandwidth: number | null
    
    PortType: string | null
    
    CircuitCode: string | null
    
    RedundantDirectConnectId: string | null
    
    Vlan: number | null
    
    TencentAddress: string | null
    
    CustomerAddress: string | null
    
    CustomerName: string | null
    
    CustomerContactMail: string | null
    
    CustomerContactNumber: string | null
    
    ExpiredTime: string | null
    
    ChargeType: string | null
    
    FaultReportContactPerson: string | null
    
    FaultReportContactNumber: string | null
    
    TagSet: Array<Tag> | null
    
    AccessPointType: string | null
    
    IdcCity: string | null
    
    ChargeState: string | null
    
    StartTime: string | null
    
    SignLaw: boolean | null
    
    constructor(){
        super();

        /**
         * 物理专线ID。
         */
        this.DirectConnectId = null;

        /**
         * 物理专线的名称。
         */
        this.DirectConnectName = null;

        /**
         * 物理专线的接入点ID。
         */
        this.AccessPointId = null;

        /**
         * 物理专线的状态。
申请中：PENDING 
申请驳回：REJECTED   
待付款：TOPAY 
已付款：PAID 
建设中：ALLOCATED   
已开通：AVAILABLE  
删除中 ：DELETING
已删除：DELETED 。
         */
        this.State = null;

        /**
         * 物理专线创建时间。
         */
        this.CreatedTime = null;

        /**
         * 物理专线的开通时间。
         */
        this.EnabledTime = null;

        /**
         * 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。
         */
        this.LineOperator = null;

        /**
         * 本地数据中心的地理位置。
         */
        this.Location = null;

        /**
         * 物理专线接入接口带宽，单位为Mbps。
         */
        this.Bandwidth = null;

        /**
         * 用户侧物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米）
         */
        this.PortType = null;

        /**
         * 运营商或者服务商为物理专线提供的电路编码。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CircuitCode = null;

        /**
         * 冗余物理专线的ID。
         */
        this.RedundantDirectConnectId = null;

        /**
         * 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Vlan = null;

        /**
         * 物理专线调试腾讯侧互联IP。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TencentAddress = null;

        /**
         * 物理专线调试用户侧互联IP。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CustomerAddress = null;

        /**
         * 物理专线申请者姓名。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CustomerName = null;

        /**
         * 物理专线申请者联系邮箱。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CustomerContactMail = null;

        /**
         * 物理专线申请者联系号码。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CustomerContactNumber = null;

        /**
         * 物理专线的过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExpiredTime = null;

        /**
         * 物理专线计费类型。 NON_RECURRING_CHARGE：一次性接入费用；PREPAID_BY_YEAR：按年预付费。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ChargeType = null;

        /**
         * 报障联系人。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FaultReportContactPerson = null;

        /**
         * 报障联系电话。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FaultReportContactNumber = null;

        /**
         * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagSet = null;

        /**
         * 物理专线的接入点类型。
         */
        this.AccessPointType = null;

        /**
         * IDC所在城市
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IdcCity = null;

        /**
         * 计费状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ChargeState = null;

        /**
         * 物理专线开通时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StartTime = null;

        /**
         * 物理专线是否已签署用户协议
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SignLaw = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectId: string | null;
        DirectConnectName: string | null;
        AccessPointId: string | null;
        State: string | null;
        CreatedTime: string | null;
        EnabledTime: string | null;
        LineOperator: string | null;
        Location: string | null;
        Bandwidth: number | null;
        PortType: string | null;
        CircuitCode: string | null;
        RedundantDirectConnectId: string | null;
        Vlan: number | null;
        TencentAddress: string | null;
        CustomerAddress: string | null;
        CustomerName: string | null;
        CustomerContactMail: string | null;
        CustomerContactNumber: string | null;
        ExpiredTime: string | null;
        ChargeType: string | null;
        FaultReportContactPerson: string | null;
        FaultReportContactNumber: string | null;
        TagSet: Array<Tag> | null;
        AccessPointType: string | null;
        IdcCity: string | null;
        ChargeState: string | null;
        StartTime: string | null;
        SignLaw: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.EnabledTime = 'EnabledTime' in params ? params.EnabledTime : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.PortType = 'PortType' in params ? params.PortType : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.RedundantDirectConnectId = 'RedundantDirectConnectId' in params ? params.RedundantDirectConnectId : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;
        this.IdcCity = 'IdcCity' in params ? params.IdcCity : null;
        this.ChargeState = 'ChargeState' in params ? params.ChargeState : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;

    }
}

/**
 * DescribeAccessPoints返回参数结构体
 * @class
 */
class DescribeAccessPointsResponse extends AbstractModel {

    AccessPointSet: Array<AccessPoint> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 接入点信息。
         */
        this.AccessPointSet = null;

        /**
         * 符合接入点数量。
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
        AccessPointSet: Array<AccessPoint> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AccessPointSet) {
            this.AccessPointSet = new Array();
            for (let z in params.AccessPointSet) {
                let obj = new AccessPoint();
                obj.deserialize(params.AccessPointSet[z]);
                this.AccessPointSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptDirectConnectTunnel返回参数结构体
 * @class
 */
class AcceptDirectConnectTunnelResponse extends AbstractModel {

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
 * DescribeDirectConnectTunnels请求参数结构体
 * @class
 */
class DescribeDirectConnectTunnelsRequest extends AbstractModel {

    Filters: Array<Filter> | null
    
    DirectConnectTunnelIds: Array<string> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 过滤条件:
参数不支持同时指定DirectConnectTunnelIds和Filters。
<li> direct-connect-tunnel-name, 专用通道名称。</li>
<li> direct-connect-tunnel-id, 专用通道实例ID，如dcx-abcdefgh。</li>
<li>direct-connect-id, 物理专线实例ID，如，dc-abcdefgh。</li>
         */
        this.Filters = null;

        /**
         * 专用通道 ID数组
         */
        this.DirectConnectTunnelIds = null;

        /**
         * 偏移量，默认为0
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
        DirectConnectTunnelIds: Array<string> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.DirectConnectTunnelIds = 'DirectConnectTunnelIds' in params ? params.DirectConnectTunnelIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyDirectConnectTunnelAttribute返回参数结构体
 * @class
 */
class ModifyDirectConnectTunnelAttributeResponse extends AbstractModel {

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
 * 用户侧网段地址
 * @class
 */
class RouteFilterPrefix extends AbstractModel {

    Cidr: string | null
    
    constructor(){
        super();

        /**
         * 用户侧网段地址
         */
        this.Cidr = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Cidr: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Cidr = 'Cidr' in params ? params.Cidr : null;

    }
}

/**
 * AcceptDirectConnectTunnel请求参数结构体
 * @class
 */
class AcceptDirectConnectTunnelRequest extends AbstractModel {

    DirectConnectTunnelId: string | null
    
    constructor(){
        super();

        /**
         * 物理专线拥有者接受共享专用通道申请
         */
        this.DirectConnectTunnelId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectTunnelId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;

    }
}

/**
 * CreateDirectConnectTunnel请求参数结构体
 * @class
 */
class CreateDirectConnectTunnelRequest extends AbstractModel {

    DirectConnectId: string | null
    
    DirectConnectTunnelName: string | null
    
    DirectConnectOwnerAccount: string | null
    
    NetworkType: string | null
    
    NetworkRegion: string | null
    
    VpcId: string | null
    
    DirectConnectGatewayId: string | null
    
    Bandwidth: number | null
    
    RouteType: string | null
    
    BgpPeer: BgpPeer | null
    
    RouteFilterPrefixes: Array<RouteFilterPrefix> | null
    
    Vlan: number | null
    
    TencentAddress: string | null
    
    CustomerAddress: string | null
    
    TencentBackupAddress: string | null
    
    constructor(){
        super();

        /**
         * 专线 ID，例如：dc-kd7d06of
         */
        this.DirectConnectId = null;

        /**
         * 专用通道名称
         */
        this.DirectConnectTunnelName = null;

        /**
         * 物理专线 owner，缺省为当前客户（物理专线 owner）
共享专线时这里需要填写共享专线的开发商账号 ID
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * 网络类型，分别为VPC、BMVPC，CCN，默认是VPC
VPC：私有网络
BMVPC：黑石网络
CCN：云联网
         */
        this.NetworkType = null;

        /**
         * 网络地域
         */
        this.NetworkRegion = null;

        /**
         * 私有网络统一 ID 或者黑石网络统一 ID
         */
        this.VpcId = null;

        /**
         * 专线网关 ID，例如 dcg-d545ddf
         */
        this.DirectConnectGatewayId = null;

        /**
         * 专线带宽，单位：Mbps
默认是物理专线带宽值
         */
        this.Bandwidth = null;

        /**
         * BGP ：BGP路由
STATIC：静态
默认为 BGP 路由
         */
        this.RouteType = null;

        /**
         * BgpPeer，用户侧bgp信息，包括Asn和AuthKey
         */
        this.BgpPeer = null;

        /**
         * 静态路由，用户IDC的网段地址
         */
        this.RouteFilterPrefixes = null;

        /**
         * vlan，范围：0 ~ 3000
0：不开启子接口
默认值是非0
         */
        this.Vlan = null;

        /**
         * TencentAddress，腾讯侧互联 IP
         */
        this.TencentAddress = null;

        /**
         * CustomerAddress，用户侧互联 IP
         */
        this.CustomerAddress = null;

        /**
         * TencentBackupAddress，腾讯侧备用互联 IP
         */
        this.TencentBackupAddress = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectId: string | null;
        DirectConnectTunnelName: string | null;
        DirectConnectOwnerAccount: string | null;
        NetworkType: string | null;
        NetworkRegion: string | null;
        VpcId: string | null;
        DirectConnectGatewayId: string | null;
        Bandwidth: number | null;
        RouteType: string | null;
        BgpPeer: BgpPeer | null;
        RouteFilterPrefixes: Array<RouteFilterPrefix> | null;
        Vlan: number | null;
        TencentAddress: string | null;
        CustomerAddress: string | null;
        TencentBackupAddress: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;
        this.DirectConnectOwnerAccount = 'DirectConnectOwnerAccount' in params ? params.DirectConnectOwnerAccount : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkRegion = 'NetworkRegion' in params ? params.NetworkRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;

    }
}

/**
 * DeleteDirectConnect返回参数结构体
 * @class
 */
class DeleteDirectConnectResponse extends AbstractModel {

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
 * DescribeDirectConnects返回参数结构体
 * @class
 */
class DescribeDirectConnectsResponse extends AbstractModel {

    DirectConnectSet: Array<DirectConnect> | null
    
    TotalCount: number | null
    
    AllSignLaw: boolean | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 物理专线列表。
         */
        this.DirectConnectSet = null;

        /**
         * 符合物理专线列表数量。
         */
        this.TotalCount = null;

        /**
         * 用户名下物理专线是否都签署了用户协议
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AllSignLaw = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectSet: Array<DirectConnect> | null;
        TotalCount: number | null;
        AllSignLaw: boolean | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.DirectConnectSet) {
            this.DirectConnectSet = new Array();
            for (let z in params.DirectConnectSet) {
                let obj = new DirectConnect();
                obj.deserialize(params.DirectConnectSet[z]);
                this.DirectConnectSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AllSignLaw = 'AllSignLaw' in params ? params.AllSignLaw : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessPoints请求参数结构体
 * @class
 */
class DescribeAccessPointsRequest extends AbstractModel {

    RegionId: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 接入点所在的地域。使用DescribeRegions查询

您可以通过调用 DescribeRegions接口获取地域ID。
         */
        this.RegionId = null;

        /**
         * 偏移量，默认为0。
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegionId: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDirectConnects请求参数结构体
 * @class
 */
class DescribeDirectConnectsRequest extends AbstractModel {

    Filters: Array<Filter> | null
    
    DirectConnectIds: Array<string> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 过滤条件:
         */
        this.Filters = null;

        /**
         * 物理专线 ID数组
         */
        this.DirectConnectIds = null;

        /**
         * 偏移量，默认为0
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
        DirectConnectIds: Array<string> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.DirectConnectIds = 'DirectConnectIds' in params ? params.DirectConnectIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyDirectConnectTunnelAttribute请求参数结构体
 * @class
 */
class ModifyDirectConnectTunnelAttributeRequest extends AbstractModel {

    DirectConnectTunnelId: string | null
    
    DirectConnectTunnelName: string | null
    
    BgpPeer: BgpPeer | null
    
    RouteFilterPrefixes: Array<RouteFilterPrefix> | null
    
    TencentAddress: string | null
    
    CustomerAddress: string | null
    
    Bandwidth: number | null
    
    TencentBackupAddress: string | null
    
    constructor(){
        super();

        /**
         * 专用通道ID
         */
        this.DirectConnectTunnelId = null;

        /**
         * 专用通道名称
         */
        this.DirectConnectTunnelName = null;

        /**
         * 用户侧BGP，包括Asn，AuthKey
         */
        this.BgpPeer = null;

        /**
         * 用户侧网段地址
         */
        this.RouteFilterPrefixes = null;

        /**
         * 腾讯侧互联IP
         */
        this.TencentAddress = null;

        /**
         * 用户侧互联IP
         */
        this.CustomerAddress = null;

        /**
         * 专用通道带宽值，单位为M。
         */
        this.Bandwidth = null;

        /**
         * 腾讯侧备用互联IP
         */
        this.TencentBackupAddress = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectTunnelId: string | null;
        DirectConnectTunnelName: string | null;
        BgpPeer: BgpPeer | null;
        RouteFilterPrefixes: Array<RouteFilterPrefix> | null;
        TencentAddress: string | null;
        CustomerAddress: string | null;
        Bandwidth: number | null;
        TencentBackupAddress: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;

    }
}

/**
 * 用于条件过滤查询
 * @class
 */
class Filter extends AbstractModel {

    Name: string | null
    
    Values: Array<string> | null
    
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         */
        this.Name = null;

        /**
         * 字段的过滤值。
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
 * CreateDirectConnect请求参数结构体
 * @class
 */
class CreateDirectConnectRequest extends AbstractModel {

    DirectConnectName: string | null
    
    AccessPointId: string | null
    
    LineOperator: string | null
    
    PortType: string | null
    
    CircuitCode: string | null
    
    Location: string | null
    
    Bandwidth: number | null
    
    RedundantDirectConnectId: string | null
    
    Vlan: number | null
    
    TencentAddress: string | null
    
    CustomerAddress: string | null
    
    CustomerName: string | null
    
    CustomerContactMail: string | null
    
    CustomerContactNumber: string | null
    
    FaultReportContactPerson: string | null
    
    FaultReportContactNumber: string | null
    
    SignLaw: boolean | null
    
    constructor(){
        super();

        /**
         * 物理专线的名称。
         */
        this.DirectConnectName = null;

        /**
         * 物理专线所在的接入点。
您可以通过调用 DescribeAccessPoints接口获取地域ID。所选择的接入点必须存在且处于可接入的状态。
         */
        this.AccessPointId = null;

        /**
         * 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。
         */
        this.LineOperator = null;

        /**
         * 物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米）。
         */
        this.PortType = null;

        /**
         * 运营商或者服务商为物理专线提供的电路编码。
         */
        this.CircuitCode = null;

        /**
         * 本地数据中心的地理位置。
         */
        this.Location = null;

        /**
         * 物理专线接入接口带宽，单位为Mbps，默认值为1000，取值范围为 [2, 10240]。
         */
        this.Bandwidth = null;

        /**
         * 冗余物理专线的ID。
         */
        this.RedundantDirectConnectId = null;

        /**
         * 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。
         */
        this.Vlan = null;

        /**
         * 物理专线调试腾讯侧互联 IP。默认自动分配。
         */
        this.TencentAddress = null;

        /**
         * 物理专线调试用户侧互联 IP。默认自动分配。
         */
        this.CustomerAddress = null;

        /**
         * 物理专线申请者姓名。默认从账户体系获取。
         */
        this.CustomerName = null;

        /**
         * 物理专线申请者联系邮箱。默认从账户体系获取。
         */
        this.CustomerContactMail = null;

        /**
         * 物理专线申请者联系号码。默认从账户体系获取。
         */
        this.CustomerContactNumber = null;

        /**
         * 报障联系人。
         */
        this.FaultReportContactPerson = null;

        /**
         * 报障联系电话。
         */
        this.FaultReportContactNumber = null;

        /**
         * 物理专线申请者是否签署了用户使用协议。默认已签署
         */
        this.SignLaw = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectName: string | null;
        AccessPointId: string | null;
        LineOperator: string | null;
        PortType: string | null;
        CircuitCode: string | null;
        Location: string | null;
        Bandwidth: number | null;
        RedundantDirectConnectId: string | null;
        Vlan: number | null;
        TencentAddress: string | null;
        CustomerAddress: string | null;
        CustomerName: string | null;
        CustomerContactMail: string | null;
        CustomerContactNumber: string | null;
        FaultReportContactPerson: string | null;
        FaultReportContactNumber: string | null;
        SignLaw: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectName = 'DirectConnectName' in params ? params.DirectConnectName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.PortType = 'PortType' in params ? params.PortType : null;
        this.CircuitCode = 'CircuitCode' in params ? params.CircuitCode : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.RedundantDirectConnectId = 'RedundantDirectConnectId' in params ? params.RedundantDirectConnectId : null;
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.CustomerName = 'CustomerName' in params ? params.CustomerName : null;
        this.CustomerContactMail = 'CustomerContactMail' in params ? params.CustomerContactMail : null;
        this.CustomerContactNumber = 'CustomerContactNumber' in params ? params.CustomerContactNumber : null;
        this.FaultReportContactPerson = 'FaultReportContactPerson' in params ? params.FaultReportContactPerson : null;
        this.FaultReportContactNumber = 'FaultReportContactNumber' in params ? params.FaultReportContactNumber : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;

    }
}

/**
 * ModifyDirectConnectAttribute返回参数结构体
 * @class
 */
class ModifyDirectConnectAttributeResponse extends AbstractModel {

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
 * RejectDirectConnectTunnel返回参数结构体
 * @class
 */
class RejectDirectConnectTunnelResponse extends AbstractModel {

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
 * CreateDirectConnectTunnel返回参数结构体
 * @class
 */
class CreateDirectConnectTunnelResponse extends AbstractModel {

    DirectConnectTunnelIdSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 专用通道ID
         */
        this.DirectConnectTunnelIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectTunnelIdSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelIdSet = 'DirectConnectTunnelIdSet' in params ? params.DirectConnectTunnelIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDirectConnectTunnel返回参数结构体
 * @class
 */
class DeleteDirectConnectTunnelResponse extends AbstractModel {

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
 * 接入点信息。
 * @class
 */
class AccessPoint extends AbstractModel {

    AccessPointName: string | null
    
    AccessPointId: string | null
    
    State: string | null
    
    Location: string | null
    
    LineOperator: Array<string> | null
    
    RegionId: string | null
    
    AvailablePortType: Array<string> | null
    
    constructor(){
        super();

        /**
         * 接入点的名称。
         */
        this.AccessPointName = null;

        /**
         * 接入点唯一ID。
         */
        this.AccessPointId = null;

        /**
         * 接入点的状态。可用，不可用。
         */
        this.State = null;

        /**
         * 接入点的位置。
         */
        this.Location = null;

        /**
         * 接入点支持的运营商列表。
         */
        this.LineOperator = null;

        /**
         * 接入点管理的大区ID。
         */
        this.RegionId = null;

        /**
         * 接入点可用的端口类型列表。1000BASE-T代表千兆电口，1000BASE-LX代表千兆单模光口10km，1000BASE-ZX代表千兆单模光口80km,10GBASE-LR代表万兆单模光口10km,10GBASE-ZR代表万兆单模光口80km,10GBASE-LH代表万兆单模光口40km,100GBASE-LR4代表100G单模光口10km
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AvailablePortType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AccessPointName: string | null;
        AccessPointId: string | null;
        State: string | null;
        Location: string | null;
        LineOperator: Array<string> | null;
        RegionId: string | null;
        AvailablePortType: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.AccessPointName = 'AccessPointName' in params ? params.AccessPointName : null;
        this.AccessPointId = 'AccessPointId' in params ? params.AccessPointId : null;
        this.State = 'State' in params ? params.State : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.LineOperator = 'LineOperator' in params ? params.LineOperator : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.AvailablePortType = 'AvailablePortType' in params ? params.AvailablePortType : null;

    }
}

/**
 * DeleteDirectConnect请求参数结构体
 * @class
 */
class DeleteDirectConnectRequest extends AbstractModel {

    DirectConnectId: string | null
    
    constructor(){
        super();

        /**
         * 物理专线的ID。
         */
        this.DirectConnectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;

    }
}

/**
 * DescribeDirectConnectTunnels返回参数结构体
 * @class
 */
class DescribeDirectConnectTunnelsResponse extends AbstractModel {

    DirectConnectTunnelSet: Array<DirectConnectTunnel> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 专用通道列表
         */
        this.DirectConnectTunnelSet = null;

        /**
         * 符合专用通道数量。
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
        DirectConnectTunnelSet: Array<DirectConnectTunnel> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.DirectConnectTunnelSet) {
            this.DirectConnectTunnelSet = new Array();
            for (let z in params.DirectConnectTunnelSet) {
                let obj = new DirectConnectTunnel();
                obj.deserialize(params.DirectConnectTunnelSet[z]);
                this.DirectConnectTunnelSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签键值对
 * @class
 */
class Tag extends AbstractModel {

    Key: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 标签键
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Key = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Key: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 专用通道信息列表
 * @class
 */
class DirectConnectTunnel extends AbstractModel {

    DirectConnectTunnelId: string | null
    
    DirectConnectId: string | null
    
    State: string | null
    
    DirectConnectOwnerAccount: string | null
    
    OwnerAccount: string | null
    
    NetworkType: string | null
    
    NetworkRegion: string | null
    
    VpcId: string | null
    
    DirectConnectGatewayId: string | null
    
    RouteType: string | null
    
    BgpPeer: BgpPeer | null
    
    RouteFilterPrefixes: Array<RouteFilterPrefix> | null
    
    Vlan: number | null
    
    TencentAddress: string | null
    
    CustomerAddress: string | null
    
    DirectConnectTunnelName: string | null
    
    CreatedTime: string | null
    
    Bandwidth: number | null
    
    TagSet: Array<Tag> | null
    
    NetDetectId: string | null
    
    EnableBGPCommunity: boolean | null
    
    NatType: number | null
    
    VpcRegion: string | null
    
    BfdEnable: number | null
    
    AccessPointType: string | null
    
    DirectConnectGatewayName: string | null
    
    VpcName: string | null
    
    TencentBackupAddress: string | null
    
    SignLaw: boolean | null
    
    constructor(){
        super();

        /**
         * 专用通道ID
         */
        this.DirectConnectTunnelId = null;

        /**
         * 物理专线ID
         */
        this.DirectConnectId = null;

        /**
         * 专用通道状态
AVAILABLE:就绪或者已连接
PENDING:申请中
ALLOCATING:配置中
ALLOCATED:配置完成
ALTERING:修改中
DELETING:删除中
DELETED:删除完成
COMFIRMING:待接受
REJECTED:拒绝
         */
        this.State = null;

        /**
         * 物理专线的拥有者，开发商账号 ID
         */
        this.DirectConnectOwnerAccount = null;

        /**
         * 专用通道的拥有者，开发商账号 ID
         */
        this.OwnerAccount = null;

        /**
         * 网络类型，分别为VPC、BMVPC、CCN
 VPC：私有网络 ，BMVPC：黑石网络，CCN：云联网
         */
        this.NetworkType = null;

        /**
         * VPC地域对应的网络名，如ap-guangzhou
         */
        this.NetworkRegion = null;

        /**
         * 私有网络统一 ID 或者黑石网络统一 ID
         */
        this.VpcId = null;

        /**
         * 专线网关 ID
         */
        this.DirectConnectGatewayId = null;

        /**
         * BGP ：BGP路由 STATIC：静态 默认为 BGP 路由
         */
        this.RouteType = null;

        /**
         * 用户侧BGP，Asn，AuthKey
         */
        this.BgpPeer = null;

        /**
         * 用户侧网段地址
         */
        this.RouteFilterPrefixes = null;

        /**
         * 专用通道的Vlan
         */
        this.Vlan = null;

        /**
         * TencentAddress，腾讯侧互联 IP
         */
        this.TencentAddress = null;

        /**
         * CustomerAddress，用户侧互联 IP
         */
        this.CustomerAddress = null;

        /**
         * 专用通道名称
         */
        this.DirectConnectTunnelName = null;

        /**
         * 专用通道创建时间
         */
        this.CreatedTime = null;

        /**
         * 专用通道带宽值
         */
        this.Bandwidth = null;

        /**
         * 专用通道标签值
         */
        this.TagSet = null;

        /**
         * 关联的网络自定义探测ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NetDetectId = null;

        /**
         * BGP community开关
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EnableBGPCommunity = null;

        /**
         * 是否为Nat通道
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NatType = null;

        /**
         * VPC地域简码，如gz、cd
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VpcRegion = null;

        /**
         * 是否开启BFD
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BfdEnable = null;

        /**
         * 专用通道接入点类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AccessPointType = null;

        /**
         * 专线网关名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DirectConnectGatewayName = null;

        /**
         * VPC名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VpcName = null;

        /**
         * TencentBackupAddress，腾讯侧备用互联 IP
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TencentBackupAddress = null;

        /**
         * 专用通道关联的物理专线是否签署了用户协议
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SignLaw = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DirectConnectTunnelId: string | null;
        DirectConnectId: string | null;
        State: string | null;
        DirectConnectOwnerAccount: string | null;
        OwnerAccount: string | null;
        NetworkType: string | null;
        NetworkRegion: string | null;
        VpcId: string | null;
        DirectConnectGatewayId: string | null;
        RouteType: string | null;
        BgpPeer: BgpPeer | null;
        RouteFilterPrefixes: Array<RouteFilterPrefix> | null;
        Vlan: number | null;
        TencentAddress: string | null;
        CustomerAddress: string | null;
        DirectConnectTunnelName: string | null;
        CreatedTime: string | null;
        Bandwidth: number | null;
        TagSet: Array<Tag> | null;
        NetDetectId: string | null;
        EnableBGPCommunity: boolean | null;
        NatType: number | null;
        VpcRegion: string | null;
        BfdEnable: number | null;
        AccessPointType: string | null;
        DirectConnectGatewayName: string | null;
        VpcName: string | null;
        TencentBackupAddress: string | null;
        SignLaw: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.DirectConnectTunnelId = 'DirectConnectTunnelId' in params ? params.DirectConnectTunnelId : null;
        this.DirectConnectId = 'DirectConnectId' in params ? params.DirectConnectId : null;
        this.State = 'State' in params ? params.State : null;
        this.DirectConnectOwnerAccount = 'DirectConnectOwnerAccount' in params ? params.DirectConnectOwnerAccount : null;
        this.OwnerAccount = 'OwnerAccount' in params ? params.OwnerAccount : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.NetworkRegion = 'NetworkRegion' in params ? params.NetworkRegion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.DirectConnectGatewayId = 'DirectConnectGatewayId' in params ? params.DirectConnectGatewayId : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;

        if (params.BgpPeer) {
            let obj = new BgpPeer();
            obj.deserialize(params.BgpPeer)
            this.BgpPeer = obj;
        }

        if (params.RouteFilterPrefixes) {
            this.RouteFilterPrefixes = new Array();
            for (let z in params.RouteFilterPrefixes) {
                let obj = new RouteFilterPrefix();
                obj.deserialize(params.RouteFilterPrefixes[z]);
                this.RouteFilterPrefixes.push(obj);
            }
        }
        this.Vlan = 'Vlan' in params ? params.Vlan : null;
        this.TencentAddress = 'TencentAddress' in params ? params.TencentAddress : null;
        this.CustomerAddress = 'CustomerAddress' in params ? params.CustomerAddress : null;
        this.DirectConnectTunnelName = 'DirectConnectTunnelName' in params ? params.DirectConnectTunnelName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.NetDetectId = 'NetDetectId' in params ? params.NetDetectId : null;
        this.EnableBGPCommunity = 'EnableBGPCommunity' in params ? params.EnableBGPCommunity : null;
        this.NatType = 'NatType' in params ? params.NatType : null;
        this.VpcRegion = 'VpcRegion' in params ? params.VpcRegion : null;
        this.BfdEnable = 'BfdEnable' in params ? params.BfdEnable : null;
        this.AccessPointType = 'AccessPointType' in params ? params.AccessPointType : null;
        this.DirectConnectGatewayName = 'DirectConnectGatewayName' in params ? params.DirectConnectGatewayName : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.TencentBackupAddress = 'TencentBackupAddress' in params ? params.TencentBackupAddress : null;
        this.SignLaw = 'SignLaw' in params ? params.SignLaw : null;

    }
}

export const Models = {
    BgpPeer: BgpPeer,
    RejectDirectConnectTunnelRequest: RejectDirectConnectTunnelRequest,
    ModifyDirectConnectAttributeRequest: ModifyDirectConnectAttributeRequest,
    DeleteDirectConnectTunnelRequest: DeleteDirectConnectTunnelRequest,
    CreateDirectConnectResponse: CreateDirectConnectResponse,
    DirectConnect: DirectConnect,
    DescribeAccessPointsResponse: DescribeAccessPointsResponse,
    AcceptDirectConnectTunnelResponse: AcceptDirectConnectTunnelResponse,
    DescribeDirectConnectTunnelsRequest: DescribeDirectConnectTunnelsRequest,
    ModifyDirectConnectTunnelAttributeResponse: ModifyDirectConnectTunnelAttributeResponse,
    RouteFilterPrefix: RouteFilterPrefix,
    AcceptDirectConnectTunnelRequest: AcceptDirectConnectTunnelRequest,
    CreateDirectConnectTunnelRequest: CreateDirectConnectTunnelRequest,
    DeleteDirectConnectResponse: DeleteDirectConnectResponse,
    DescribeDirectConnectsResponse: DescribeDirectConnectsResponse,
    DescribeAccessPointsRequest: DescribeAccessPointsRequest,
    DescribeDirectConnectsRequest: DescribeDirectConnectsRequest,
    ModifyDirectConnectTunnelAttributeRequest: ModifyDirectConnectTunnelAttributeRequest,
    Filter: Filter,
    CreateDirectConnectRequest: CreateDirectConnectRequest,
    ModifyDirectConnectAttributeResponse: ModifyDirectConnectAttributeResponse,
    RejectDirectConnectTunnelResponse: RejectDirectConnectTunnelResponse,
    CreateDirectConnectTunnelResponse: CreateDirectConnectTunnelResponse,
    DeleteDirectConnectTunnelResponse: DeleteDirectConnectTunnelResponse,
    AccessPoint: AccessPoint,
    DeleteDirectConnectRequest: DeleteDirectConnectRequest,
    DescribeDirectConnectTunnelsResponse: DescribeDirectConnectTunnelsResponse,
    Tag: Tag,
    DirectConnectTunnel: DirectConnectTunnel,

}
