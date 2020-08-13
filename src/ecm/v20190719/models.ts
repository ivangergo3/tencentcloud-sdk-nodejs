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
 * IP直通相关的信息
 * @class
 */
class RunEIPDirectServiceEnabled extends AbstractModel {

    Enabled: boolean | null
    
    constructor(){
        super();

        /**
         * 是否开通IP直通。取值范围：
TRUE：表示开通IP直通
FALSE：表示不开通IP直通
默认取值：TRUE。
windows镜像目前不支持IP直通。
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeTaskResult返回参数结构体
 * @class
 */
class DescribeTaskResultResponse extends AbstractModel {

    TaskId: string | null
    
    Result: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务ID。
         */
        this.TaskId = null;

        /**
         * 执行结果，包括"SUCCESS", "FAILED", "RUNNING"
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Result: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IPv6地址信息。
 * @class
 */
class Ipv6Address extends AbstractModel {

    Address: string | null
    
    Primary: boolean | null
    
    AddressId: string | null
    
    Description: string | null
    
    IsWanIpBlocked: boolean | null
    
    State: string | null
    
    constructor(){
        super();

        /**
         * IPv6地址，形如：3402:4e00:20:100:0:8cd9:2a67:71f3
         */
        this.Address = null;

        /**
         * 是否是主IP。
         */
        this.Primary = null;

        /**
         * EIP实例ID，形如：eip-hxlqja90。
         */
        this.AddressId = null;

        /**
         * 描述信息。
         */
        this.Description = null;

        /**
         * 公网IP是否被封堵。
         */
        this.IsWanIpBlocked = null;

        /**
         * IPv6地址状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Address: string | null;
        Primary: boolean | null;
        AddressId: string | null;
        Description: string | null;
        IsWanIpBlocked: boolean | null;
        State: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * DescribePeakBaseOverview请求参数结构体
 * @class
 */
class DescribePeakBaseOverviewRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    constructor(){
        super();

        /**
         * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期。
         */
        this.StartTime = null;

        /**
         * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天。
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreateNetworkInterface请求参数结构体
 * @class
 */
class CreateNetworkInterfaceRequest extends AbstractModel {

    VpcId: string | null
    
    NetworkInterfaceName: string | null
    
    SubnetId: string | null
    
    EcmRegion: string | null
    
    NetworkInterfaceDescription: string | null
    
    SecondaryPrivateIpAddressCount: number | null
    
    SecurityGroupIds: Array<string> | null
    
    PrivateIpAddresses: Array<PrivateIpAddressSpecification> | null
    
    Tags: Array<Tag> | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         */
        this.VpcId = null;

        /**
         * 弹性网卡名称，最大长度不能超过60个字节。
         */
        this.NetworkInterfaceName = null;

        /**
         * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
         */
        this.SubnetId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡描述，可任意命名，但不得超过60个字符。
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配数。
         */
        this.SecondaryPrivateIpAddressCount = null;

        /**
         * 指定绑定的安全组，例如：['sg-1dd51d']。
         */
        this.SecurityGroupIds = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。
         */
        this.PrivateIpAddresses = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        NetworkInterfaceName: string | null;
        SubnetId: string | null;
        EcmRegion: string | null;
        NetworkInterfaceDescription: string | null;
        SecondaryPrivateIpAddressCount: number | null;
        SecurityGroupIds: Array<string> | null;
        PrivateIpAddresses: Array<PrivateIpAddressSpecification> | null;
        Tags: Array<Tag> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeInstancesDeniedActions请求参数结构体
 * @class
 */
class DescribeInstancesDeniedActionsRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 无
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * 实例的网络相关信息。
 * @class
 */
class Internet extends AbstractModel {

    PrivateIPAddressSet: Array<PrivateIPAddressInfo> | null
    
    PublicIPAddressSet: Array<PublicIPAddressInfo> | null
    
    constructor(){
        super();

        /**
         * 实例的内网相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PrivateIPAddressSet = null;

        /**
         * 实例的公网相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PublicIPAddressSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PrivateIPAddressSet: Array<PrivateIPAddressInfo> | null;
        PublicIPAddressSet: Array<PublicIPAddressInfo> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PrivateIPAddressSet) {
            this.PrivateIPAddressSet = new Array();
            for (let z in params.PrivateIPAddressSet) {
                let obj = new PrivateIPAddressInfo();
                obj.deserialize(params.PrivateIPAddressSet[z]);
                this.PrivateIPAddressSet.push(obj);
            }
        }

        if (params.PublicIPAddressSet) {
            this.PublicIPAddressSet = new Array();
            for (let z in params.PublicIPAddressSet) {
                let obj = new PublicIPAddressInfo();
                obj.deserialize(params.PublicIPAddressSet[z]);
                this.PublicIPAddressSet.push(obj);
            }
        }

    }
}

/**
 * DescribeModule返回参数结构体
 * @class
 */
class DescribeModuleResponse extends AbstractModel {

    TotalCount: number | null
    
    ModuleItemSet: Array<ModuleItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的模块数量。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TotalCount = null;

        /**
         * 模块详情信息的列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ModuleItemSet = null;

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
        ModuleItemSet: Array<ModuleItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ModuleItemSet) {
            this.ModuleItemSet = new Array();
            for (let z in params.ModuleItemSet) {
                let obj = new ModuleItem();
                obj.deserialize(params.ModuleItemSet[z]);
                this.ModuleItemSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 镜像任务
 * @class
 */
class ImageTask extends AbstractModel {

    State: string | null
    
    Message: string | null
    
    ImageName: string | null
    
    CreateTime: string | null
    
    constructor(){
        super();

        /**
         * 镜像导入状态， PENDING, PROCESSING, SUCCESS, FAILED
         */
        this.State = null;

        /**
         * 导入失败(FAILED)时， 说明失败原因
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Message = null;

        /**
         * 镜像名称
         */
        this.ImageName = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        State: string | null;
        Message: string | null;
        ImageName: string | null;
        CreateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 省份信息
 * @class
 */
class Province extends AbstractModel {

    ProvinceId: string | null
    
    ProvinceName: string | null
    
    constructor(){
        super();

        /**
         * 省份Id
         */
        this.ProvinceId = null;

        /**
         * 省份名称
         */
        this.ProvinceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProvinceId: string | null;
        ProvinceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;

    }
}

/**
 * ImportCustomImage返回参数结构体
 * @class
 */
class ImportCustomImageResponse extends AbstractModel {

    ImageId: string | null
    
    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 镜像ID
         */
        this.ImageId = null;

        /**
         * 异步任务ID，可根据DescribeCustomImageTask查询任务信息
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
        ImageId: string | null;
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModuleName返回参数结构体
 * @class
 */
class ModifyModuleNameResponse extends AbstractModel {

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
 * DescribeNetworkInterfaces请求参数结构体
 * @class
 */
class DescribeNetworkInterfacesRequest extends AbstractModel {

    EcmRegion: string | null
    
    NetworkInterfaceIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。
         */
        this.NetworkInterfaceIds = null;

        /**
         * 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。
network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。
attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。
groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。
network-interface-name - String - （过滤条件）网卡实例名称。
network-interface-description - String - （过滤条件）网卡实例描述。
address-ip - String - （过滤条件）内网IPv4地址。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。
is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；次过滤参数为提供时，同时过滤主网卡和辅助网卡。
         */
        this.Filters = null;

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
        EcmRegion: string | null;
        NetworkInterfaceIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceIds = 'NetworkInterfaceIds' in params ? params.NetworkInterfaceIds : null;

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
 * DescribeSubnets请求参数结构体
 * @class
 */
class DescribeSubnetsRequest extends AbstractModel {

    EcmRegion: string | null
    
    SubnetIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: string | null
    
    Limit: string | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。
         */
        this.SubnetIds = null;

        /**
         * 过滤条件，参数不支持同时指定SubnetIds和Filters。
subnet-id - String - （过滤条件）Subnet实例名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
cidr-block - String - （过滤条件）子网网段，形如: 192.168.1.0 。
is-default - Boolean - （过滤条件）是否是默认子网。
is-remote-vpc-snat - Boolean - （过滤条件）是否为VPC SNAT地址池子网。
subnet-name - String - （过滤条件）子网名称。
zone - String - （过滤条件）可用区。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例
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

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        SubnetIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: string | null;
        Limit: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
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

    }
}

/**
 * CreateSubnet请求参数结构体
 * @class
 */
class CreateSubnetRequest extends AbstractModel {

    VpcId: string | null
    
    SubnetName: string | null
    
    CidrBlock: string | null
    
    Zone: string | null
    
    EcmRegion: string | null
    
    Tags: Array<Tag> | null
    
    constructor(){
        super();

        /**
         * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         */
        this.VpcId = null;

        /**
         * 子网名称，最大长度不能超过60个字节。
         */
        this.SubnetName = null;

        /**
         * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。
         */
        this.CidrBlock = null;

        /**
         * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
         */
        this.Zone = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetName: string | null;
        CidrBlock: string | null;
        Zone: string | null;
        EcmRegion: string | null;
        Tags: Array<Tag> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DeleteModule返回参数结构体
 * @class
 */
class DeleteModuleResponse extends AbstractModel {

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
 * 描述EIP配额信息
 * @class
 */
class EipQuota extends AbstractModel {

    QuotaId: string | null
    
    QuotaCurrent: number | null
    
    QuotaLimit: number | null
    
    constructor(){
        super();

        /**
         * 配额名称，取值范围：
TOTAL_EIP_QUOTA：用户当前地域下EIP的配额数；
DAILY_EIP_APPLY：用户当前地域下今日申购次数；
DAILY_PUBLIC_IP_ASSIGN：用户当前地域下，重新分配公网 IP次数。
         */
        this.QuotaId = null;

        /**
         * 当前数量
         */
        this.QuotaCurrent = null;

        /**
         * 配额数量
         */
        this.QuotaLimit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        QuotaId: string | null;
        QuotaCurrent: number | null;
        QuotaLimit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.QuotaCurrent = 'QuotaCurrent' in params ? params.QuotaCurrent : null;
        this.QuotaLimit = 'QuotaLimit' in params ? params.QuotaLimit : null;

    }
}

/**
 * DeleteSubnet返回参数结构体
 * @class
 */
class DeleteSubnetResponse extends AbstractModel {

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
 * ModifyAddressesBandwidth返回参数结构体
 * @class
 */
class ModifyAddressesBandwidthResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务TaskId。
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
        TaskId: string | null;
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
 * DescribeSubnets返回参数结构体
 * @class
 */
class DescribeSubnetsResponse extends AbstractModel {

    TotalCount: number | null
    
    SubnetSet: Array<Subnet> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         */
        this.TotalCount = null;

        /**
         * 子网对象。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubnetSet = null;

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
        SubnetSet: Array<Subnet> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RunInstances请求参数结构体
 * @class
 */
class RunInstancesRequest extends AbstractModel {

    ZoneInstanceCountISPSet: Array<ZoneInstanceCountISP> | null
    
    Password: string | null
    
    InternetMaxBandwidthOut: number | null
    
    ModuleId: string | null
    
    ImageId: string | null
    
    InstanceName: string | null
    
    HostName: string | null
    
    ClientToken: string | null
    
    EnhancedService: EnhancedService | null
    
    TagSpecification: Array<TagSpecification> | null
    
    UserData: string | null
    
    InstanceType: string | null
    
    DataDiskSize: number | null
    
    SecurityGroupIds: Array<string> | null
    
    SystemDiskSize: number | null
    
    constructor(){
        super();

        /**
         * 需要创建实例的可用区及创建数目及运营商的列表。在单次请求的过程中，单个region下的请求创建实例数上限为100
         */
        this.ZoneInstanceCountISPSet = null;

        /**
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? / ]中的特殊符。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? /]中的特殊符号。
         */
        this.Password = null;

        /**
         * 公网出带宽上限，单位：Mbps。如果未传该参数或者传的值为0，则使用模块下的默认值
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 模块ID。如果未传该参数，则必须传ImageId，InstanceType，DataDiskSize，InternetMaxBandwidthOut参数
         */
        this.ModuleId = null;

        /**
         * 镜像ID。如果未传该参数或者传的值为空，则使用模块下的默认值
         */
        this.ImageId = null;

        /**
         * 实例显示名称。
不指定实例显示名称则默认显示‘未命名’。
购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server\_{R:3}，购买1台时，实例显示名称为server\_3；购买2台时，实例显示名称分别为server\_3，server\_4。
支持指定多个模式串{R:x}。
购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server\_1，server\_2。
如果购买的实例属于不同的地域或运营商，则上述规则在每个地域和运营商内独立计数。
最多支持60个字符（包含模式串）。
         */
        this.InstanceName = null;

        /**
         * 主机名称
点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。
Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。
其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
         */
        this.HostName = null;

        /**
         * 用于保证请求幂等性的字符串。目前为保留参数，请勿使用。
         */
        this.ClientToken = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务
         */
        this.EnhancedService = null;

        /**
         * 标签列表
         */
        this.TagSpecification = null;

        /**
         * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB
         */
        this.UserData = null;

        /**
         * 机型。如果未传该参数或者传的值为空，则使用模块下的默认值
         */
        this.InstanceType = null;

        /**
         * 数据盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
         */
        this.DataDiskSize = null;

        /**
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
         */
        this.SecurityGroupIds = null;

        /**
         * 系统盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
         */
        this.SystemDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneInstanceCountISPSet: Array<ZoneInstanceCountISP> | null;
        Password: string | null;
        InternetMaxBandwidthOut: number | null;
        ModuleId: string | null;
        ImageId: string | null;
        InstanceName: string | null;
        HostName: string | null;
        ClientToken: string | null;
        EnhancedService: EnhancedService | null;
        TagSpecification: Array<TagSpecification> | null;
        UserData: string | null;
        InstanceType: string | null;
        DataDiskSize: number | null;
        SecurityGroupIds: Array<string> | null;
        SystemDiskSize: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ZoneInstanceCountISPSet) {
            this.ZoneInstanceCountISPSet = new Array();
            for (let z in params.ZoneInstanceCountISPSet) {
                let obj = new ZoneInstanceCountISP();
                obj.deserialize(params.ZoneInstanceCountISPSet[z]);
                this.ZoneInstanceCountISPSet.push(obj);
            }
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceSet: Array<Instance> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回的实例相关信息列表的长度。
         */
        this.TotalCount = null;

        /**
         * 返回的实例相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceSet = null;

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
        InstanceSet: Array<Instance> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 弹性网卡
 * @class
 */
class NetworkInterface extends AbstractModel {

    NetworkInterfaceId: string | null
    
    NetworkInterfaceName: string | null
    
    NetworkInterfaceDescription: string | null
    
    SubnetId: string | null
    
    VpcId: string | null
    
    GroupSet: Array<string> | null
    
    Primary: boolean | null
    
    MacAddress: string | null
    
    State: string | null
    
    PrivateIpAddressSet: Array<PrivateIpAddressSpecification> | null
    
    Attachment: NetworkInterfaceAttachment | null
    
    Zone: string | null
    
    CreatedTime: string | null
    
    Ipv6AddressSet: Array<Ipv6Address> | null
    
    TagSet: Array<Tag> | null
    
    EniType: number | null
    
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-f1xjkw1b。
         */
        this.NetworkInterfaceId = null;

        /**
         * 弹性网卡名称。
         */
        this.NetworkInterfaceName = null;

        /**
         * 弹性网卡描述。
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 子网实例ID。
         */
        this.SubnetId = null;

        /**
         * VPC实例ID。
         */
        this.VpcId = null;

        /**
         * 绑定的安全组。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GroupSet = null;

        /**
         * 是否是主网卡。
         */
        this.Primary = null;

        /**
         * MAC地址。
         */
        this.MacAddress = null;

        /**
         * 弹性网卡状态：
PENDING：创建中
AVAILABLE：可用的
ATTACHING：绑定中
DETACHING：解绑中
DELETING：删除中
         */
        this.State = null;

        /**
         * 内网IP信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PrivateIpAddressSet = null;

        /**
         * 绑定的云服务器对象。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Attachment = null;

        /**
         * 可用区。
         */
        this.Zone = null;

        /**
         * 创建时间。
         */
        this.CreatedTime = null;

        /**
         * IPv6地址列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Ipv6AddressSet = null;

        /**
         * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagSet = null;

        /**
         * 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。
         */
        this.EniType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NetworkInterfaceId: string | null;
        NetworkInterfaceName: string | null;
        NetworkInterfaceDescription: string | null;
        SubnetId: string | null;
        VpcId: string | null;
        GroupSet: Array<string> | null;
        Primary: boolean | null;
        MacAddress: string | null;
        State: string | null;
        PrivateIpAddressSet: Array<PrivateIpAddressSpecification> | null;
        Attachment: NetworkInterfaceAttachment | null;
        Zone: string | null;
        CreatedTime: string | null;
        Ipv6AddressSet: Array<Ipv6Address> | null;
        TagSet: Array<Tag> | null;
        EniType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.GroupSet = 'GroupSet' in params ? params.GroupSet : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.State = 'State' in params ? params.State : null;

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }

        if (params.Attachment) {
            let obj = new NetworkInterfaceAttachment();
            obj.deserialize(params.Attachment)
            this.Attachment = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.EniType = 'EniType' in params ? params.EniType : null;

    }
}

/**
 * ResetInstancesPassword返回参数结构体
 * @class
 */
class ResetInstancesPasswordResponse extends AbstractModel {

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
 * 镜像来源信息
 * @class
 */
class SrcImage extends AbstractModel {

    ImageId: string | null
    
    ImageName: string | null
    
    ImageOsName: string | null
    
    ImageDescription: string | null
    
    Region: string | null
    
    RegionID: number | null
    
    RegionName: string | null
    
    InstanceName: string | null
    
    InstanceId: string | null
    
    ImageType: string | null
    
    constructor(){
        super();

        /**
         * 镜像id
         */
        this.ImageId = null;

        /**
         * 镜像名称
         */
        this.ImageName = null;

        /**
         * 系统名称
         */
        this.ImageOsName = null;

        /**
         * 镜像描述
         */
        this.ImageDescription = null;

        /**
         * 区域
         */
        this.Region = null;

        /**
         * 区域ID
         */
        this.RegionID = null;

        /**
         * 区域名称
         */
        this.RegionName = null;

        /**
         * 来源实例名称
         */
        this.InstanceName = null;

        /**
         * 来源实例ID
         */
        this.InstanceId = null;

        /**
         * 来源镜像类型
         */
        this.ImageType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        ImageName: string | null;
        ImageOsName: string | null;
        ImageDescription: string | null;
        Region: string | null;
        RegionID: number | null;
        RegionName: string | null;
        InstanceName: string | null;
        InstanceId: string | null;
        ImageType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionID = 'RegionID' in params ? params.RegionID : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;

    }
}

/**
 * 机型配置
 * @class
 */
class InstanceTypeConfig extends AbstractModel {

    InstanceFamilyConfig: InstanceFamilyConfig | null
    
    InstanceType: string | null
    
    Vcpu: number | null
    
    Memory: number | null
    
    Frequency: string | null
    
    CpuModelName: string | null
    
    InstanceFamilyTypeConfig: InstanceFamilyTypeConfig | null
    
    ExtInfo: string | null
    
    constructor(){
        super();

        /**
         * 机型族配置信息
         */
        this.InstanceFamilyConfig = null;

        /**
         * 机型
         */
        this.InstanceType = null;

        /**
         * CPU核数
         */
        this.Vcpu = null;

        /**
         * 内存大小
         */
        this.Memory = null;

        /**
         * 主频
         */
        this.Frequency = null;

        /**
         * 处理器型号
         */
        this.CpuModelName = null;

        /**
         * 机型族类别配置信息
         */
        this.InstanceFamilyTypeConfig = null;

        /**
         * 机型额外信息 是一个json字符串，如果存在则表示特殊机型，格式如下：{"dataDiskSize":3200,"systemDiskSize":60, "systemDiskSizeShow":"系统盘默认60G","dataDiskSizeShow":"本地NVMe SSD 硬盘3200 GB"}
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExtInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceFamilyConfig: InstanceFamilyConfig | null;
        InstanceType: string | null;
        Vcpu: number | null;
        Memory: number | null;
        Frequency: string | null;
        CpuModelName: string | null;
        InstanceFamilyTypeConfig: InstanceFamilyTypeConfig | null;
        ExtInfo: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InstanceFamilyConfig) {
            let obj = new InstanceFamilyConfig();
            obj.deserialize(params.InstanceFamilyConfig)
            this.InstanceFamilyConfig = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Vcpu = 'Vcpu' in params ? params.Vcpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.CpuModelName = 'CpuModelName' in params ? params.CpuModelName : null;

        if (params.InstanceFamilyTypeConfig) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamilyTypeConfig)
            this.InstanceFamilyTypeConfig = obj;
        }
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;

    }
}

/**
 * DescribeNode返回参数结构体
 * @class
 */
class DescribeNodeResponse extends AbstractModel {

    NodeSet: Array<Node> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 节点详细信息的列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NodeSet = null;

        /**
         * 所有的节点数量。
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
        NodeSet: Array<Node> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new Node();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemovePrivateIpAddresses返回参数结构体
 * @class
 */
class RemovePrivateIpAddressesResponse extends AbstractModel {

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
 * DescribeDefaultSubnet返回参数结构体
 * @class
 */
class DescribeDefaultSubnetResponse extends AbstractModel {

    Subnet: Subnet | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 默认子网信息，若无子网，则为空数据。
         */
        this.Subnet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Subnet: Subnet | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 私有网络(VPC)对象。
 * @class
 */
class VpcInfo extends AbstractModel {

    VpcName: string | null
    
    VpcId: string | null
    
    CidrBlock: string | null
    
    IsDefault: boolean | null
    
    EnableMulticast: boolean | null
    
    CreatedTime: string | null
    
    DnsServerSet: Array<string> | null
    
    DomainName: string | null
    
    DhcpOptionsId: string | null
    
    EnableDhcp: boolean | null
    
    Ipv6CidrBlock: string | null
    
    TagSet: Array<Tag> | null
    
    AssistantCidrSet: Array<AssistantCidr> | null
    
    constructor(){
        super();

        /**
         * VPC名称。
         */
        this.VpcName = null;

        /**
         * VPC实例ID，例如：vpc-azd4dt1c。
         */
        this.VpcId = null;

        /**
         * VPC的IPv4 CIDR。
         */
        this.CidrBlock = null;

        /**
         * 是否默认VPC。
         */
        this.IsDefault = null;

        /**
         * 是否开启组播。
         */
        this.EnableMulticast = null;

        /**
         * 创建时间。
         */
        this.CreatedTime = null;

        /**
         * DNS列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DnsServerSet = null;

        /**
         * DHCP域名选项值。
         */
        this.DomainName = null;

        /**
         * DHCP选项集ID。
         */
        this.DhcpOptionsId = null;

        /**
         * 是否开启DHCP。
         */
        this.EnableDhcp = null;

        /**
         * VPC的IPv6 CIDR。
         */
        this.Ipv6CidrBlock = null;

        /**
         * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagSet = null;

        /**
         * 辅助CIDR
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AssistantCidrSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcName: string | null;
        VpcId: string | null;
        CidrBlock: string | null;
        IsDefault: boolean | null;
        EnableMulticast: boolean | null;
        CreatedTime: string | null;
        DnsServerSet: Array<string> | null;
        DomainName: string | null;
        DhcpOptionsId: string | null;
        EnableDhcp: boolean | null;
        Ipv6CidrBlock: string | null;
        TagSet: Array<Tag> | null;
        AssistantCidrSet: Array<AssistantCidr> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DnsServerSet = 'DnsServerSet' in params ? params.DnsServerSet : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DhcpOptionsId = 'DhcpOptionsId' in params ? params.DhcpOptionsId : null;
        this.EnableDhcp = 'EnableDhcp' in params ? params.EnableDhcp : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }

    }
}

/**
 * DescribeCustomImageTask返回参数结构体
 * @class
 */
class DescribeCustomImageTaskResponse extends AbstractModel {

    ImageTaskSet: Array<ImageTask> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 导入任务详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageTaskSet = null;

        /**
         * 总数
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
        ImageTaskSet: Array<ImageTask> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImageTaskSet) {
            this.ImageTaskSet = new Array();
            for (let z in params.ImageTaskSet) {
                let obj = new ImageTask();
                obj.deserialize(params.ImageTaskSet[z]);
                this.ImageTaskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组对象
 * @class
 */
class SecurityGroup extends AbstractModel {

    SecurityGroupId: string | null
    
    SecurityGroupName: string | null
    
    SecurityGroupDesc: string | null
    
    IsDefault: boolean | null
    
    CreatedTime: string | null
    
    TagSet: Array<Tag> | null
    
    constructor(){
        super();

        /**
         * 安全组实例ID，例如：esg-ohuuioma。
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注，最多100个字符。
         */
        this.SecurityGroupDesc = null;

        /**
         * 是否是默认安全组，默认安全组不支持删除。
         */
        this.IsDefault = null;

        /**
         * 安全组创建时间。
         */
        this.CreatedTime = null;

        /**
         * 标签键值对。
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SecurityGroupId: string | null;
        SecurityGroupName: string | null;
        SecurityGroupDesc: string | null;
        IsDefault: boolean | null;
        CreatedTime: string | null;
        TagSet: Array<Tag> | null;
    }): void {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupDesc = 'SecurityGroupDesc' in params ? params.SecurityGroupDesc : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSubnet请求参数结构体
 * @class
 */
class DeleteSubnetRequest extends AbstractModel {

    SubnetId: string | null
    
    EcmRegion: string | null
    
    constructor(){
        super();

        /**
         * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
         */
        this.SubnetId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetId: string | null;
        EcmRegion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeModule请求参数结构体
 * @class
 */
class DescribeModuleRequest extends AbstractModel {

    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    OrderByField: string | null
    
    OrderDirection: number | null
    
    constructor(){
        super();

        /**
         * 过滤条件。
module-name - string - 是否必填：否 - （过滤条件）按照模块名称过滤。
module-id - string - 是否必填：否 - （过滤条件）按照模块ID过滤。
image-id      String      是否必填：否      （过滤条件）按照镜像ID过滤。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
security-group-id - string 是否必填：否 - （过滤条件）按照模块绑定的安全组id过滤。
每次请求的Filters的上限为10，Filter.Values的上限为5。
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
         */
        this.Limit = null;

        /**
         * 指定排序字段。目前支持的可选值如下
instance-num 按实例数量排序。
node-num 按节点数量排序。
timestamp 按实例创建时间排序。
如果不传，默认按实例创建时间排序
         */
        this.OrderByField = null;

        /**
         * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        OrderByField: string | null;
        OrderDirection: number | null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByField = 'OrderByField' in params ? params.OrderByField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * 描述实例的位置相关信息。
 * @class
 */
class Position extends AbstractModel {

    ZoneInfo: ZoneInfo | null
    
    Country: Country | null
    
    Area: Area | null
    
    Province: Province | null
    
    City: City | null
    
    RegionInfo: RegionInfo | null
    
    constructor(){
        super();

        /**
         * 实例所在的Zone的信息。
         */
        this.ZoneInfo = null;

        /**
         * 实例所在的国家的信息。
         */
        this.Country = null;

        /**
         * 实例所在的Area的信息。
         */
        this.Area = null;

        /**
         * 实例所在的省份的信息。
         */
        this.Province = null;

        /**
         * 实例所在的城市的信息。
         */
        this.City = null;

        /**
         * 实例所在的Region的信息。
         */
        this.RegionInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneInfo: ZoneInfo | null;
        Country: Country | null;
        Area: Area | null;
        Province: Province | null;
        City: City | null;
        RegionInfo: RegionInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

    }
}

/**
 * CreateModule返回参数结构体
 * @class
 */
class CreateModuleResponse extends AbstractModel {

    ModuleId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 模块ID，创建模块成功后分配给该模块的ID。
         */
        this.ModuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RebootInstances请求参数结构体
 * @class
 */
class RebootInstancesRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    ForceReboot: boolean | null
    
    StopType: string | null
    
    constructor(){
        super();

        /**
         * 待重启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         */
        this.InstanceIdSet = null;

        /**
         * 是否在正常重启失败后选择强制重启实例。取值范围：
TRUE：表示在正常重启失败后进行强制重启；
FALSE：表示在正常重启失败后不进行强制重启；
默认取值：FALSE。
         */
        this.ForceReboot = null;

        /**
         * 关机类型。取值范围：
SOFT：表示软关机
HARD：表示硬关机
SOFT_FIRST：表示优先软关机，失败再执行硬关机

默认取值：SOFT。
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        ForceReboot: boolean | null;
        StopType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ForceReboot = 'ForceReboot' in params ? params.ForceReboot : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * AllocateAddresses请求参数结构体
 * @class
 */
class AllocateAddressesRequest extends AbstractModel {

    EcmRegion: string | null
    
    AddressCount: number | null
    
    InternetServiceProvider: string | null
    
    InternetMaxBandwidthOut: number | null
    
    Tags: Array<Tag> | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * EIP数量。默认值：1。
         */
        this.AddressCount = null;

        /**
         * CMCC：中国移动
CTCC：中国电信
CUCC：中国联通
         */
        this.InternetServiceProvider = null;

        /**
         * 1 Mbps 至 5000 Mbps，默认值：1 Mbps。
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 需要关联的标签列表。
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        AddressCount: number | null;
        InternetServiceProvider: string | null;
        InternetMaxBandwidthOut: number | null;
        Tags: Array<Tag> | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DeleteNetworkInterface请求参数结构体
 * @class
 */
class DeleteNetworkInterfaceRequest extends AbstractModel {

    NetworkInterfaceId: string | null
    
    EcmRegion: string | null
    
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         */
        this.NetworkInterfaceId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NetworkInterfaceId: string | null;
        EcmRegion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * RemovePrivateIpAddresses请求参数结构体
 * @class
 */
class RemovePrivateIpAddressesRequest extends AbstractModel {

    EcmRegion: string | null
    
    NetworkInterfaceId: string | null
    
    PrivateIpAddresses: Array<PrivateIpAddressSpecification> | null
    
    constructor(){
        super();

        /**
         * ECM 地域。
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID，例如：eni-11112222。
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        NetworkInterfaceId: string | null;
        PrivateIpAddresses: Array<PrivateIpAddressSpecification> | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
class ModifyInstancesAttributeRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    InstanceName: string | null
    
    constructor(){
        super();

        /**
         * 待修改的实例ID列表。在单次请求的过程中，请求实例数上限为100。
         */
        this.InstanceIdSet = null;

        /**
         * 修改成功后显示的实例名称，不得超过60个字符，不传则名称显示为空。
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        InstanceName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * 实例系列类型配置
 * @class
 */
class InstanceFamilyTypeConfig extends AbstractModel {

    InstanceFamilyType: string | null
    
    InstanceFamilyTypeName: string | null
    
    constructor(){
        super();

        /**
         * 实例机型系列类型Id
         */
        this.InstanceFamilyType = null;

        /**
         * 实例机型系列类型名称
         */
        this.InstanceFamilyTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceFamilyType: string | null;
        InstanceFamilyTypeName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceFamilyType = 'InstanceFamilyType' in params ? params.InstanceFamilyType : null;
        this.InstanceFamilyTypeName = 'InstanceFamilyTypeName' in params ? params.InstanceFamilyTypeName : null;

    }
}

/**
 * ResetInstances返回参数结构体
 * @class
 */
class ResetInstancesResponse extends AbstractModel {

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
 * DescribeImage请求参数结构体
 * @class
 */
class DescribeImageRequest extends AbstractModel {

    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 过滤条件，每次请求的Filters的上限为10，详细的过滤条件如下：
image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤
image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
PRIVATE_IMAGE: 私有镜像 (本帐户创建的镜像) 
PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * MigratePrivateIpAddress请求参数结构体
 * @class
 */
class MigratePrivateIpAddressRequest extends AbstractModel {

    EcmRegion: string | null
    
    SourceNetworkInterfaceId: string | null
    
    DestinationNetworkInterfaceId: string | null
    
    PrivateIpAddress: string | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 当内网IP绑定的弹性网卡实例ID，例如：eni-11112222。
         */
        this.SourceNetworkInterfaceId = null;

        /**
         * 待迁移的目的弹性网卡实例ID。
         */
        this.DestinationNetworkInterfaceId = null;

        /**
         * 迁移的内网IP地址，例如：10.0.0.6。
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        SourceNetworkInterfaceId: string | null;
        DestinationNetworkInterfaceId: string | null;
        PrivateIpAddress: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.SourceNetworkInterfaceId = 'SourceNetworkInterfaceId' in params ? params.SourceNetworkInterfaceId : null;
        this.DestinationNetworkInterfaceId = 'DestinationNetworkInterfaceId' in params ? params.DestinationNetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

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
 * Zone信息
 * @class
 */
class ZoneInfo extends AbstractModel {

    ZoneId: number | null
    
    ZoneName: string | null
    
    Zone: string | null
    
    constructor(){
        super();

        /**
         * ZoneId
         */
        this.ZoneId = null;

        /**
         * ZoneName
         */
        this.ZoneName = null;

        /**
         * Zone
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneId: number | null;
        ZoneName: string | null;
        Zone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeNode请求参数结构体
 * @class
 */
class DescribeNodeRequest extends AbstractModel {

    Filters: Array<Filter> | null
    
    constructor(){
        super();

        /**
         * 过滤条件，name取值为： InstanceFamily-实例系列
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
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

    }
}

/**
 * CreateSubnet返回参数结构体
 * @class
 */
class CreateSubnetResponse extends AbstractModel {

    Subnet: Subnet | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 子网对象。
         */
        this.Subnet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Subnet: Subnet | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetInstancesPassword请求参数结构体
 * @class
 */
class ResetInstancesPasswordRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    Password: string | null
    
    ForceStop: boolean | null
    
    UserName: string | null
    
    constructor(){
        super();

        /**
         * 待重置密码的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         */
        this.InstanceIdSet = null;

        /**
         * 新密码，Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
如果实例即包含Linux实例又包含Windows实例，则密码复杂度限制按照Windows实例的限制。
         */
        this.Password = null;

        /**
         * 是否强制关机，默认为false。
         */
        this.ForceStop = null;

        /**
         * 待重置密码的实例的用户名，不得超过64个字符。若未指定用户名，则对于Linux而言，默认重置root用户的密码，对于Windows而言，默认重置administrator的密码。
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        Password: string | null;
        ForceStop: boolean | null;
        UserName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * ModifyModuleConfig请求参数结构体
 * @class
 */
class ModifyModuleConfigRequest extends AbstractModel {

    ModuleId: string | null
    
    InstanceType: string | null
    
    DefaultDataDiskSize: number | null
    
    constructor(){
        super();

        /**
         * 模块ID。
         */
        this.ModuleId = null;

        /**
         * 机型ID。
         */
        this.InstanceType = null;

        /**
         * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
         */
        this.DefaultDataDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
        InstanceType: string | null;
        DefaultDataDiskSize: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;

    }
}

/**
 * 区域信息
 * @class
 */
class Area extends AbstractModel {

    AreaId: string | null
    
    AreaName: string | null
    
    constructor(){
        super();

        /**
         * 区域ID
         */
        this.AreaId = null;

        /**
         * 区域名称
         */
        this.AreaName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AreaId: string | null;
        AreaName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;

    }
}

/**
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeInstanceVncUrl请求参数结构体
 * @class
 */
class DescribeInstanceVncUrlRequest extends AbstractModel {

    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 一个操作的实例ID。可通过DescribeInstances API返回值中的InstanceId获取。
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 网络硬盘上下限数据
 * @class
 */
class NetworkStorageRange extends AbstractModel {

    MaxBandwidth: number | null
    
    MaxSystemDiskSize: number | null
    
    MinBandwidth: number | null
    
    MinSystemDiskSize: number | null
    
    MaxDataDiskSize: number | null
    
    MinDataDiskSize: number | null
    
    SuggestBandwidth: number | null
    
    SuggestDataDiskSize: number | null
    
    SuggestSystemDiskSize: number | null
    
    MaxVcpu: number | null
    
    MinVcpu: number | null
    
    MaxVcpuPerReq: number | null
    
    PerBandwidth: number | null
    
    PerDataDisk: number | null
    
    MaxModuleNum: number | null
    
    constructor(){
        super();

        /**
         * 网络带宽上限
         */
        this.MaxBandwidth = null;

        /**
         * 数据盘上限
         */
        this.MaxSystemDiskSize = null;

        /**
         * 网络带宽下限
         */
        this.MinBandwidth = null;

        /**
         * 数据盘下限
         */
        this.MinSystemDiskSize = null;

        /**
         * 最大数据盘大小
         */
        this.MaxDataDiskSize = null;

        /**
         * 最小数据盘大小
         */
        this.MinDataDiskSize = null;

        /**
         * 建议带宽
         */
        this.SuggestBandwidth = null;

        /**
         * 建议硬盘大小
         */
        this.SuggestDataDiskSize = null;

        /**
         * 建议系统盘大小
         */
        this.SuggestSystemDiskSize = null;

        /**
         * Cpu核数峰值
         */
        this.MaxVcpu = null;

        /**
         * Cpu核最小值
         */
        this.MinVcpu = null;

        /**
         * 单次请求最大cpu核数
         */
        this.MaxVcpuPerReq = null;

        /**
         * 带宽步长
         */
        this.PerBandwidth = null;

        /**
         * 数据盘步长
         */
        this.PerDataDisk = null;

        /**
         * 总模块数量
         */
        this.MaxModuleNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MaxBandwidth: number | null;
        MaxSystemDiskSize: number | null;
        MinBandwidth: number | null;
        MinSystemDiskSize: number | null;
        MaxDataDiskSize: number | null;
        MinDataDiskSize: number | null;
        SuggestBandwidth: number | null;
        SuggestDataDiskSize: number | null;
        SuggestSystemDiskSize: number | null;
        MaxVcpu: number | null;
        MinVcpu: number | null;
        MaxVcpuPerReq: number | null;
        PerBandwidth: number | null;
        PerDataDisk: number | null;
        MaxModuleNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.MaxSystemDiskSize = 'MaxSystemDiskSize' in params ? params.MaxSystemDiskSize : null;
        this.MinBandwidth = 'MinBandwidth' in params ? params.MinBandwidth : null;
        this.MinSystemDiskSize = 'MinSystemDiskSize' in params ? params.MinSystemDiskSize : null;
        this.MaxDataDiskSize = 'MaxDataDiskSize' in params ? params.MaxDataDiskSize : null;
        this.MinDataDiskSize = 'MinDataDiskSize' in params ? params.MinDataDiskSize : null;
        this.SuggestBandwidth = 'SuggestBandwidth' in params ? params.SuggestBandwidth : null;
        this.SuggestDataDiskSize = 'SuggestDataDiskSize' in params ? params.SuggestDataDiskSize : null;
        this.SuggestSystemDiskSize = 'SuggestSystemDiskSize' in params ? params.SuggestSystemDiskSize : null;
        this.MaxVcpu = 'MaxVcpu' in params ? params.MaxVcpu : null;
        this.MinVcpu = 'MinVcpu' in params ? params.MinVcpu : null;
        this.MaxVcpuPerReq = 'MaxVcpuPerReq' in params ? params.MaxVcpuPerReq : null;
        this.PerBandwidth = 'PerBandwidth' in params ? params.PerBandwidth : null;
        this.PerDataDisk = 'PerDataDisk' in params ? params.PerDataDisk : null;
        this.MaxModuleNum = 'MaxModuleNum' in params ? params.MaxModuleNum : null;

    }
}

/**
 * StartInstances返回参数结构体
 * @class
 */
class StartInstancesResponse extends AbstractModel {

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
 * CreateVpc返回参数结构体
 * @class
 */
class CreateVpcResponse extends AbstractModel {

    Vpc: VpcInfo | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * Vpc对象。
         */
        this.Vpc = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Vpc: VpcInfo | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Vpc) {
            let obj = new VpcInfo();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VPC辅助CIDR信息。
 * @class
 */
class AssistantCidr extends AbstractModel {

    VpcId: string | null
    
    CidrBlock: string | null
    
    AssistantType: number | null
    
    SubnetSet: Array<Subnet> | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-6v2ht8q5
         */
        this.VpcId = null;

        /**
         * 辅助CIDR。形如：172.16.0.0/16
         */
        this.CidrBlock = null;

        /**
         * 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。
         */
        this.AssistantType = null;

        /**
         * 辅助CIDR拆分的子网。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        CidrBlock: string | null;
        AssistantType: number | null;
        SubnetSet: Array<Subnet> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.AssistantType = 'AssistantType' in params ? params.AssistantType : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends AbstractModel {

    TaskSet: Array<TaskOutput> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务描述
         */
        this.TaskSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskSet: Array<TaskOutput> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskOutput();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModuleIpDirect请求参数结构体
 * @class
 */
class ModifyModuleIpDirectRequest extends AbstractModel {

    ModuleId: string | null
    
    CloseIpDirect: boolean | null
    
    constructor(){
        super();

        /**
         * 模块ID。
         */
        this.ModuleId = null;

        /**
         * 是否关闭IP直通。取值范围：
1：表示关闭IP直通
0：表示开通IP直通
         */
        this.CloseIpDirect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
        CloseIpDirect: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;

    }
}

/**
 * CreateModule请求参数结构体
 * @class
 */
class CreateModuleRequest extends AbstractModel {

    ModuleName: string | null
    
    DefaultBandWidth: number | null
    
    DefaultImageId: string | null
    
    InstanceType: string | null
    
    DefaultSystemDiskSize: number | null
    
    DefaultDataDiskSize: number | null
    
    CloseIpDirect: boolean | null
    
    TagSpecification: Array<TagSpecification> | null
    
    constructor(){
        super();

        /**
         * 模块名称，如视频直播模块。限制：模块名称不得以空格开头，长度不得超过60个字符。
         */
        this.ModuleName = null;

        /**
         * 默认带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
         */
        this.DefaultBandWidth = null;

        /**
         * 默认镜像，如img-qsdf3ff2。
         */
        this.DefaultImageId = null;

        /**
         * 机型ID。
         */
        this.InstanceType = null;

        /**
         * 默认系统盘大小，单位：G，默认大小为50G。范围不得超过系统盘上下限制，详看DescribeConfig。
         */
        this.DefaultSystemDiskSize = null;

        /**
         * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
         */
        this.DefaultDataDiskSize = null;

        /**
         * 是否关闭IP直通。取值范围：
1：表示关闭IP直通
0：表示开通IP直通
         */
        this.CloseIpDirect = null;

        /**
         * 标签列表。
         */
        this.TagSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleName: string | null;
        DefaultBandWidth: number | null;
        DefaultImageId: string | null;
        InstanceType: string | null;
        DefaultSystemDiskSize: number | null;
        DefaultDataDiskSize: number | null;
        CloseIpDirect: boolean | null;
        TagSpecification: Array<TagSpecification> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.DefaultBandWidth = 'DefaultBandWidth' in params ? params.DefaultBandWidth : null;
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

    }
}

/**
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
class ModifyInstancesAttributeResponse extends AbstractModel {

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
 * ReleaseAddresses返回参数结构体
 * @class
 */
class ReleaseAddressesResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
        TaskId: string | null;
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
 * DescribeInstancesDeniedActions返回参数结构体
 * @class
 */
class DescribeInstancesDeniedActionsResponse extends AbstractModel {

    InstanceOperatorSet: Array<InstanceOperator> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例对应的禁止操作
         */
        this.InstanceOperatorSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceOperatorSet: Array<InstanceOperator> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InstanceOperatorSet) {
            this.InstanceOperatorSet = new Array();
            for (let z in params.InstanceOperatorSet) {
                let obj = new InstanceOperator();
                obj.deserialize(params.InstanceOperatorSet[z]);
                this.InstanceOperatorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateAddress请求参数结构体
 * @class
 */
class DisassociateAddressRequest extends AbstractModel {

    EcmRegion: string | null
    
    AddressId: string | null
    
    ReallocateNormalPublicIp: boolean | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
         */
        this.AddressId = null;

        /**
         * 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：
TRUE：表示解绑 EIP 之后分配普通公网 IP。
FALSE：表示解绑 EIP 之后不分配普通公网 IP。
默认取值：FALSE。

只有满足以下条件时才能指定该参数：
只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。
解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 DescribeAddressQuota 接口获取。
         */
        this.ReallocateNormalPublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        AddressId: string | null;
        ReallocateNormalPublicIp: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.ReallocateNormalPublicIp = 'ReallocateNormalPublicIp' in params ? params.ReallocateNormalPublicIp : null;

    }
}

/**
 * 任务查询出参
 * @class
 */
class TaskOutput extends AbstractModel {

    TaskId: string | null
    
    Message: string | null
    
    Status: string | null
    
    AddTime: string | null
    
    EndTime: string | null
    
    Operation: string | null
    
    constructor(){
        super();

        /**
         * 任务id
         */
        this.TaskId = null;

        /**
         * 状态描述
         */
        this.Message = null;

        /**
         * 状态值，SUCCESS/FAILED/OPERATING
         */
        this.Status = null;

        /**
         * 任务提交时间
         */
        this.AddTime = null;

        /**
         * 任务结束时间
         */
        this.EndTime = null;

        /**
         * 操作名
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Message: string | null;
        Status: string | null;
        AddTime: string | null;
        EndTime: string | null;
        Operation: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * 节点统计数据
 * @class
 */
class ModuleCounter extends AbstractModel {

    ISPCounterSet: Array<ISPCounter> | null
    
    ProvinceNum: number | null
    
    CityNum: number | null
    
    NodeNum: number | null
    
    InstanceNum: number | null
    
    constructor(){
        super();

        /**
         * 运营商统计信息列表
         */
        this.ISPCounterSet = null;

        /**
         * 省份数量
         */
        this.ProvinceNum = null;

        /**
         * 城市数量
         */
        this.CityNum = null;

        /**
         * 节点数量
         */
        this.NodeNum = null;

        /**
         * 实例数量
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ISPCounterSet: Array<ISPCounter> | null;
        ProvinceNum: number | null;
        CityNum: number | null;
        NodeNum: number | null;
        InstanceNum: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ISPCounterSet) {
            this.ISPCounterSet = new Array();
            for (let z in params.ISPCounterSet) {
                let obj = new ISPCounter();
                obj.deserialize(params.ISPCounterSet[z]);
                this.ISPCounterSet.push(obj);
            }
        }
        this.ProvinceNum = 'ProvinceNum' in params ? params.ProvinceNum : null;
        this.CityNum = 'CityNum' in params ? params.CityNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * 实例可用区及对应的实例创建数目及运营商的组合；
 * @class
 */
class ZoneInstanceCountISP extends AbstractModel {

    Zone: string | null
    
    InstanceCount: number | null
    
    ISP: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    PrivateIpAddresses: Array<string> | null
    
    constructor(){
        super();

        /**
         * 创建实例的可用区。
         */
        this.Zone = null;

        /**
         * 在当前可用区欲创建的实例数目。
         */
        this.InstanceCount = null;

        /**
         * 运营商，CTCC电信，CUCC联通，CMCC移动，多个运营商用英文分号连接";"。多运营商需要开通白名单，请直接联系腾讯云客服。
         */
        this.ISP = null;

        /**
         * 指定私有网络编号，SubnetId与VpcId必须同时指定或不指定
         */
        this.VpcId = null;

        /**
         * 指定子网编号，SubnetId与VpcId必须同时指定或不指定
         */
        this.SubnetId = null;

        /**
         * 指定主网卡内网IP。条件：SubnetId与VpcId必须同时指定，并且IP数量与InstanceCount相同，多IP主机副网卡内网IP在相同子网内通过DHCP获取。
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        InstanceCount: number | null;
        ISP: string | null;
        VpcId: string | null;
        SubnetId: string | null;
        PrivateIpAddresses: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ISP = 'ISP' in params ? params.ISP : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;

    }
}

/**
 * 任务查询
 * @class
 */
class TaskInput extends AbstractModel {

    Operation: string | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 操作名，即API名称，比如：CreateImage
         */
        this.Operation = null;

        /**
         * 任务id
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Operation: string | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * StartInstances请求参数结构体
 * @class
 */
class StartInstancesRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 待开启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * 标签信息。
 * @class
 */
class Tag extends AbstractModel {

    Key: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 标签的键。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Key = null;

        /**
         * 标签的值。
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
 * DescribeDefaultSubnet请求参数结构体
 * @class
 */
class DescribeDefaultSubnetRequest extends AbstractModel {

    EcmRegion: string | null
    
    Zone: string | null
    
    constructor(){
        super();

        /**
         * ECM地域
         */
        this.EcmRegion = null;

        /**
         * ECM可用区
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        Zone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ResetInstancesMaxBandwidth返回参数结构体
 * @class
 */
class ResetInstancesMaxBandwidthResponse extends AbstractModel {

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
 * DeleteVpc请求参数结构体
 * @class
 */
class DeleteVpcRequest extends AbstractModel {

    VpcId: string | null
    
    EcmRegion: string | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         */
        this.VpcId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        EcmRegion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * CreateNetworkInterface返回参数结构体
 * @class
 */
class CreateNetworkInterfaceResponse extends AbstractModel {

    NetworkInterface: NetworkInterface | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 弹性网卡实例。
         */
        this.NetworkInterface = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NetworkInterface: NetworkInterface | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.NetworkInterface) {
            let obj = new NetworkInterface();
            obj.deserialize(params.NetworkInterface)
            this.NetworkInterface = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节点信息
 * @class
 */
class Node extends AbstractModel {

    ZoneInfo: ZoneInfo | null
    
    Country: Country | null
    
    Area: Area | null
    
    Province: Province | null
    
    City: City | null
    
    RegionInfo: RegionInfo | null
    
    ISPSet: Array<ISP> | null
    
    ISPNum: number | null
    
    constructor(){
        super();

        /**
         * zone信息
         */
        this.ZoneInfo = null;

        /**
         * 国家信息
         */
        this.Country = null;

        /**
         * 区域信息
         */
        this.Area = null;

        /**
         * 省份信息
         */
        this.Province = null;

        /**
         * 城市信息
         */
        this.City = null;

        /**
         * Region信息
         */
        this.RegionInfo = null;

        /**
         * 运营商列表
         */
        this.ISPSet = null;

        /**
         * 运营商数量
         */
        this.ISPNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneInfo: ZoneInfo | null;
        Country: Country | null;
        Area: Area | null;
        Province: Province | null;
        City: City | null;
        RegionInfo: RegionInfo | null;
        ISPSet: Array<ISP> | null;
        ISPNum: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

        if (params.ISPSet) {
            this.ISPSet = new Array();
            for (let z in params.ISPSet) {
                let obj = new ISP();
                obj.deserialize(params.ISPSet[z]);
                this.ISPSet.push(obj);
            }
        }
        this.ISPNum = 'ISPNum' in params ? params.ISPNum : null;

    }
}

/**
 * RunInstances返回参数结构体
 * @class
 */
class RunInstancesResponse extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 创建中的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAddressQuota请求参数结构体
 * @class
 */
class DescribeAddressQuotaRequest extends AbstractModel {

    EcmRegion: string | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeInstanceTypeConfig返回参数结构体
 * @class
 */
class DescribeInstanceTypeConfigResponse extends AbstractModel {

    TotalCount: number | null
    
    InstanceTypeConfigSet: Array<InstanceTypeConfig> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 总数
         */
        this.TotalCount = null;

        /**
         * 机型配置信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceTypeConfigSet = null;

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
        InstanceTypeConfigSet: Array<InstanceTypeConfig> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节点实例数量信息
 * @class
 */
class NodeInstanceNum extends AbstractModel {

    NodeNum: number | null
    
    InstanceNum: number | null
    
    constructor(){
        super();

        /**
         * 节点数量
         */
        this.NodeNum = null;

        /**
         * 实例数量
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeNum: number | null;
        InstanceNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * DescribeAddresses返回参数结构体
 * @class
 */
class DescribeAddressesResponse extends AbstractModel {

    TotalCount: number | null
    
    AddressSet: Array<Address> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的 EIP 数量。
         */
        this.TotalCount = null;

        /**
         * EIP 详细信息列表。
         */
        this.AddressSet = null;

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
        AddressSet: Array<Address> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AddressSet) {
            this.AddressSet = new Array();
            for (let z in params.AddressSet) {
                let obj = new Address();
                obj.deserialize(params.AddressSet[z]);
                this.AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportImage请求参数结构体
 * @class
 */
class ImportImageRequest extends AbstractModel {

    ImageId: string | null
    
    ImageDescription: string | null
    
    SourceRegion: string | null
    
    constructor(){
        super();

        /**
         * 镜像的Id。
         */
        this.ImageId = null;

        /**
         * 镜像的描述。
         */
        this.ImageDescription = null;

        /**
         * 源地域
         */
        this.SourceRegion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        ImageDescription: string | null;
        SourceRegion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.SourceRegion = 'SourceRegion' in params ? params.SourceRegion : null;

    }
}

/**
 * DetachNetworkInterface返回参数结构体
 * @class
 */
class DetachNetworkInterfaceResponse extends AbstractModel {

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
 * 机型族配置
 * @class
 */
class InstanceFamilyConfig extends AbstractModel {

    InstanceFamilyName: string | null
    
    InstanceFamily: string | null
    
    constructor(){
        super();

        /**
         * 机型名称
         */
        this.InstanceFamilyName = null;

        /**
         * 机型ID
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceFamilyName: string | null;
        InstanceFamily: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceFamilyName = 'InstanceFamilyName' in params ? params.InstanceFamilyName : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * DeleteModule请求参数结构体
 * @class
 */
class DeleteModuleRequest extends AbstractModel {

    ModuleId: string | null
    
    constructor(){
        super();

        /**
         * 模块ID。如：em-qn46snq8
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * DescribeVpcs请求参数结构体
 * @class
 */
class DescribeVpcsRequest extends AbstractModel {

    EcmRegion: string | null
    
    VpcIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 地域
         */
        this.EcmRegion = null;

        /**
         * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
         */
        this.VpcIds = null;

        /**
         * 过滤条件，参数不支持同时指定VpcIds和Filters。
vpc-name - String - （过滤条件）VPC实例名称。
is-default - String - （过滤条件）是否默认VPC。
vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。
cidr-block - String - （过滤条件）vpc的cidr。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例
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

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        VpcIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
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
 * ResetInstancesMaxBandwidth请求参数结构体
 * @class
 */
class ResetInstancesMaxBandwidthRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    MaxBandwidthOut: number | null
    
    constructor(){
        super();

        /**
         * 待重置带宽上限的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         */
        this.InstanceIdSet = null;

        /**
         * 修改后的最大带宽上限。
         */
        this.MaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        MaxBandwidthOut: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;

    }
}

/**
 * 操作系统支持的类型。
 * @class
 */
class OsVersion extends AbstractModel {

    OsName: string | null
    
    OsVersions: Array<string> | null
    
    Architecture: Array<string> | null
    
    constructor(){
        super();

        /**
         * 操作系统类型
         */
        this.OsName = null;

        /**
         * 支持的操作系统版本
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OsVersions = null;

        /**
         * 支持的操作系统架构
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Architecture = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OsName: string | null;
        OsVersions: Array<string> | null;
        Architecture: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsVersions = 'OsVersions' in params ? params.OsVersions : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;

    }
}

/**
 * 峰值信息
 * @class
 */
class PeakBase extends AbstractModel {

    PeakCpuNum: number | null
    
    PeakMemoryNum: number | null
    
    PeakStorageNum: number | null
    
    RecordTime: string | null
    
    constructor(){
        super();

        /**
         * CPU峰值
         */
        this.PeakCpuNum = null;

        /**
         * 内存峰值
         */
        this.PeakMemoryNum = null;

        /**
         * 硬盘峰值
         */
        this.PeakStorageNum = null;

        /**
         * 记录时间
         */
        this.RecordTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PeakCpuNum: number | null;
        PeakMemoryNum: number | null;
        PeakStorageNum: number | null;
        RecordTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PeakCpuNum = 'PeakCpuNum' in params ? params.PeakCpuNum : null;
        this.PeakMemoryNum = 'PeakMemoryNum' in params ? params.PeakMemoryNum : null;
        this.PeakStorageNum = 'PeakStorageNum' in params ? params.PeakStorageNum : null;
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;

    }
}

/**
 * ModifyModuleNetwork请求参数结构体
 * @class
 */
class ModifyModuleNetworkRequest extends AbstractModel {

    ModuleId: string | null
    
    DefaultBandwidth: number | null
    
    constructor(){
        super();

        /**
         * 模块Id
         */
        this.ModuleId = null;

        /**
         * 默认带宽上限
         */
        this.DefaultBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
        DefaultBandwidth: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;

    }
}

/**
 * 镜像信息
 * @class
 */
class Image extends AbstractModel {

    ImageId: string | null
    
    ImageName: string | null
    
    ImageState: string | null
    
    ImageType: string | null
    
    ImageOsName: string | null
    
    ImageDescription: string | null
    
    ImageCreateTime: string | null
    
    Architecture: string | null
    
    OsType: string | null
    
    OsVersion: string | null
    
    Platform: string | null
    
    ImageOwner: number | null
    
    ImageSize: number | null
    
    SrcImage: SrcImage | null
    
    ImageSource: string | null
    
    constructor(){
        super();

        /**
         * 镜像ID
         */
        this.ImageId = null;

        /**
         * 镜像名称
         */
        this.ImageName = null;

        /**
         * 镜像状态
         */
        this.ImageState = null;

        /**
         * 镜像类型
         */
        this.ImageType = null;

        /**
         * 操作系统名称
         */
        this.ImageOsName = null;

        /**
         * 镜像描述
         */
        this.ImageDescription = null;

        /**
         * 镜像导入时间
         */
        this.ImageCreateTime = null;

        /**
         * 操作系统位数
         */
        this.Architecture = null;

        /**
         * 操作系统类型
         */
        this.OsType = null;

        /**
         * 操作系统版本
         */
        this.OsVersion = null;

        /**
         * 操作系统平台
         */
        this.Platform = null;

        /**
         * 镜像所有者
         */
        this.ImageOwner = null;

        /**
         * 镜像大小。单位：GB
         */
        this.ImageSize = null;

        /**
         * 镜像来源信息
         */
        this.SrcImage = null;

        /**
         * 镜像来源类型
         */
        this.ImageSource = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        ImageName: string | null;
        ImageState: string | null;
        ImageType: string | null;
        ImageOsName: string | null;
        ImageDescription: string | null;
        ImageCreateTime: string | null;
        Architecture: string | null;
        OsType: string | null;
        OsVersion: string | null;
        Platform: string | null;
        ImageOwner: number | null;
        ImageSize: number | null;
        SrcImage: SrcImage | null;
        ImageSource: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageState = 'ImageState' in params ? params.ImageState : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ImageCreateTime = 'ImageCreateTime' in params ? params.ImageCreateTime : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ImageOwner = 'ImageOwner' in params ? params.ImageOwner : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;

        if (params.SrcImage) {
            let obj = new SrcImage();
            obj.deserialize(params.SrcImage)
            this.SrcImage = obj;
        }
        this.ImageSource = 'ImageSource' in params ? params.ImageSource : null;

    }
}

/**
 * 资源类型的Tag
 * @class
 */
class TagSpecification extends AbstractModel {

    ResourceType: string | null
    
    Tags: Array<Tag> | null
    
    constructor(){
        super();

        /**
         * 资源类型，目前仅支持"instance"、"module"
         */
        this.ResourceType = null;

        /**
         * 标签列表
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResourceType: string | null;
        Tags: Array<Tag> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DetachNetworkInterface请求参数结构体
 * @class
 */
class DetachNetworkInterfaceRequest extends AbstractModel {

    NetworkInterfaceId: string | null
    
    InstanceId: string | null
    
    EcmRegion: string | null
    
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         */
        this.NetworkInterfaceId = null;

        /**
         * 实例ID。形如：ein-hcs7jkg4
         */
        this.InstanceId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NetworkInterfaceId: string | null;
        InstanceId: string | null;
        EcmRegion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends AbstractModel {

    NetworkStorageRange: NetworkStorageRange | null
    
    ImageWhiteSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 网络带宽硬盘大小的范围信息。
         */
        this.NetworkStorageRange = null;

        /**
         * 镜像操作系统白名单
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageWhiteSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NetworkStorageRange: NetworkStorageRange | null;
        ImageWhiteSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.NetworkStorageRange) {
            let obj = new NetworkStorageRange();
            obj.deserialize(params.NetworkStorageRange)
            this.NetworkStorageRange = obj;
        }
        this.ImageWhiteSet = 'ImageWhiteSet' in params ? params.ImageWhiteSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDefaultSubnet返回参数结构体
 * @class
 */
class ModifyDefaultSubnetResponse extends AbstractModel {

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
 * DescribeImportImageOs返回参数结构体
 * @class
 */
class DescribeImportImageOsResponse extends AbstractModel {

    ImportImageOsListSupported: ImageOsList | null
    
    ImportImageOsVersionSet: Array<OsVersion> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 支持的导入镜像的操作系统类型
         */
        this.ImportImageOsListSupported = null;

        /**
         * 支持的导入镜像的操作系统版本
         */
        this.ImportImageOsVersionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImportImageOsListSupported: ImageOsList | null;
        ImportImageOsVersionSet: Array<OsVersion> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImportImageOsListSupported) {
            let obj = new ImageOsList();
            obj.deserialize(params.ImportImageOsListSupported)
            this.ImportImageOsListSupported = obj;
        }

        if (params.ImportImageOsVersionSet) {
            this.ImportImageOsVersionSet = new Array();
            for (let z in params.ImportImageOsVersionSet) {
                let obj = new OsVersion();
                obj.deserialize(params.ImportImageOsVersionSet[z]);
                this.ImportImageOsVersionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModuleDetail返回参数结构体
 * @class
 */
class DescribeModuleDetailResponse extends AbstractModel {

    Module: Module | null
    
    ModuleCounter: ModuleCounter | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 模块的详细信息，详细见数据结构中的ModuleInfo。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Module = null;

        /**
         * 模块的统计信息，详细见数据结构中的ModuleCounterInfo。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ModuleCounter = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: Module | null;
        ModuleCounter: ModuleCounter | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Module) {
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

        if (params.ModuleCounter) {
            let obj = new ModuleCounter();
            obj.deserialize(params.ModuleCounter)
            this.ModuleCounter = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopInstances请求参数结构体
 * @class
 */
class StopInstancesRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    ForceStop: boolean | null
    
    StopType: string | null
    
    constructor(){
        super();

        /**
         * 需要关机的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         */
        this.InstanceIdSet = null;

        /**
         * 是否在正常关闭失败后选择强制关闭实例，默认为false，即否。
         */
        this.ForceStop = null;

        /**
         * 实例的关闭模式。取值范围：
SOFT_FIRST：表示在正常关闭失败后进行强制关闭;
HARD：直接强制关闭;
SOFT：仅软关机；
默认为SOFT。
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        ForceStop: boolean | null;
        StopType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * 子网对象
 * @class
 */
class Subnet extends AbstractModel {

    VpcId: string | null
    
    SubnetId: string | null
    
    SubnetName: string | null
    
    CidrBlock: string | null
    
    IsDefault: boolean | null
    
    EnableBroadcast: boolean | null
    
    RouteTableId: string | null
    
    CreatedTime: string | null
    
    AvailableIpAddressCount: number | null
    
    Ipv6CidrBlock: string | null
    
    NetworkAclId: string | null
    
    IsRemoteVpcSnat: boolean | null
    
    TagSet: Array<Tag> | null
    
    Zone: string | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。
         */
        this.VpcId = null;

        /**
         * 子网实例ID，例如：subnet-bthucmmy。
         */
        this.SubnetId = null;

        /**
         * 子网名称。
         */
        this.SubnetName = null;

        /**
         * 子网的 IPv4 CIDR。
         */
        this.CidrBlock = null;

        /**
         * 是否默认子网。
         */
        this.IsDefault = null;

        /**
         * 是否开启广播。
         */
        this.EnableBroadcast = null;

        /**
         * 路由表实例ID，例如：rtb-l2h8d7c2。
         */
        this.RouteTableId = null;

        /**
         * 创建时间。
         */
        this.CreatedTime = null;

        /**
         * 可用IP数。
         */
        this.AvailableIpAddressCount = null;

        /**
         * 子网的 IPv6 CIDR。
         */
        this.Ipv6CidrBlock = null;

        /**
         * 关联ACLID
         */
        this.NetworkAclId = null;

        /**
         * 是否为 SNAT 地址池子网。
         */
        this.IsRemoteVpcSnat = null;

        /**
         * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagSet = null;

        /**
         * 所在区域
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetId: string | null;
        SubnetName: string | null;
        CidrBlock: string | null;
        IsDefault: boolean | null;
        EnableBroadcast: boolean | null;
        RouteTableId: string | null;
        CreatedTime: string | null;
        AvailableIpAddressCount: number | null;
        Ipv6CidrBlock: string | null;
        NetworkAclId: string | null;
        IsRemoteVpcSnat: boolean | null;
        TagSet: Array<Tag> | null;
        Zone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AvailableIpAddressCount = 'AvailableIpAddressCount' in params ? params.AvailableIpAddressCount : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.IsRemoteVpcSnat = 'IsRemoteVpcSnat' in params ? params.IsRemoteVpcSnat : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

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
 * DeleteVpc返回参数结构体
 * @class
 */
class DeleteVpcResponse extends AbstractModel {

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
 * 镜像文件信息
 * @class
 */
class ImageUrl extends AbstractModel {

    ImageFile: string | null
    
    constructor(){
        super();

        /**
         * 镜像文件COS链接，如设置私有读写，需授权腾讯云ECM运营账号访问权限。
         */
        this.ImageFile = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageFile: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageFile = 'ImageFile' in params ? params.ImageFile : null;

    }
}

/**
 * 运营商信息
 * @class
 */
class ISP extends AbstractModel {

    ISPId: string | null
    
    ISPName: string | null
    
    constructor(){
        super();

        /**
         * 运营商ID
         */
        this.ISPId = null;

        /**
         * 运营商名称
         */
        this.ISPName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ISPId: string | null;
        ISPName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ISPId = 'ISPId' in params ? params.ISPId : null;
        this.ISPName = 'ISPName' in params ? params.ISPName : null;

    }
}

/**
 * 内网IP信息
 * @class
 */
class PrivateIpAddressSpecification extends AbstractModel {

    PrivateIpAddress: string | null
    
    Primary: boolean | null
    
    PublicIpAddress: string | null
    
    AddressId: string | null
    
    Description: string | null
    
    IsWanIpBlocked: boolean | null
    
    State: string | null
    
    constructor(){
        super();

        /**
         * 内网IP地址。
         */
        this.PrivateIpAddress = null;

        /**
         * 是否是主IP。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Primary = null;

        /**
         * 公网IP地址。
         */
        this.PublicIpAddress = null;

        /**
         * EIP实例ID，例如：eip-11112222。
         */
        this.AddressId = null;

        /**
         * 内网IP描述信息。
         */
        this.Description = null;

        /**
         * 公网IP是否被封堵。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsWanIpBlocked = null;

        /**
         * IP状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PrivateIpAddress: string | null;
        Primary: boolean | null;
        PublicIpAddress: string | null;
        AddressId: string | null;
        Description: string | null;
        IsWanIpBlocked: boolean | null;
        State: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * 运行商统计信息
 * @class
 */
class ISPCounter extends AbstractModel {

    ProviderName: string | null
    
    ProviderNodeNum: number | null
    
    ProvederInstanceNum: number | null
    
    ZoneInstanceInfoSet: Array<ZoneInstanceInfo> | null
    
    constructor(){
        super();

        /**
         * 运营商名称
         */
        this.ProviderName = null;

        /**
         * 节点数量
         */
        this.ProviderNodeNum = null;

        /**
         * 实例数量
         */
        this.ProvederInstanceNum = null;

        /**
         * Zone实例信息结构体数组
         */
        this.ZoneInstanceInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProviderName: string | null;
        ProviderNodeNum: number | null;
        ProvederInstanceNum: number | null;
        ZoneInstanceInfoSet: Array<ZoneInstanceInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProviderName = 'ProviderName' in params ? params.ProviderName : null;
        this.ProviderNodeNum = 'ProviderNodeNum' in params ? params.ProviderNodeNum : null;
        this.ProvederInstanceNum = 'ProvederInstanceNum' in params ? params.ProvederInstanceNum : null;

        if (params.ZoneInstanceInfoSet) {
            this.ZoneInstanceInfoSet = new Array();
            for (let z in params.ZoneInstanceInfoSet) {
                let obj = new ZoneInstanceInfo();
                obj.deserialize(params.ZoneInstanceInfoSet[z]);
                this.ZoneInstanceInfoSet.push(obj);
            }
        }

    }
}

/**
 * MigratePrivateIpAddress返回参数结构体
 * @class
 */
class MigratePrivateIpAddressResponse extends AbstractModel {

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
 * CreateImage请求参数结构体
 * @class
 */
class CreateImageRequest extends AbstractModel {

    ImageName: string | null
    
    InstanceId: string | null
    
    ImageDescription: string | null
    
    ForcePoweroff: string | null
    
    constructor(){
        super();

        /**
         * 镜像名称。
         */
        this.ImageName = null;

        /**
         * 需要制作镜像的实例ID。
         */
        this.InstanceId = null;

        /**
         * 镜像描述。
         */
        this.ImageDescription = null;

        /**
         * 是否执行强制关机以制作镜像。取值范围：
TRUE：表示自动关机后制作镜像
FALSE：表示开机状态制作，目前不支持，需要先手动关机
默认取值：FALSE。
         */
        this.ForcePoweroff = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageName: string | null;
        InstanceId: string | null;
        ImageDescription: string | null;
        ForcePoweroff: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ForcePoweroff = 'ForcePoweroff' in params ? params.ForcePoweroff : null;

    }
}

/**
 * 用于描述实例相关的信息。
 * @class
 */
class Instance extends AbstractModel {

    InstanceId: string | null
    
    InstanceName: string | null
    
    InstanceState: string | null
    
    Image: Image | null
    
    SimpleModule: SimpleModule | null
    
    Position: Position | null
    
    Internet: Internet | null
    
    InstanceTypeConfig: InstanceTypeConfig | null
    
    CreateTime: string | null
    
    TagSet: Array<Tag> | null
    
    LatestOperation: string | null
    
    LatestOperationState: string | null
    
    RestrictState: string | null
    
    SystemDiskSize: number | null
    
    DataDiskSize: number | null
    
    UUID: string | null
    
    PayMode: number | null
    
    ExpireTime: string | null
    
    IsolatedTime: string | null
    
    RenewFlag: number | null
    
    ExpireState: string | null
    
    SystemDisk: DiskInfo | null
    
    DataDisks: Array<DiskInfo> | null
    
    NewFlag: number | null
    
    SecurityGroupIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 实例ID。
         */
        this.InstanceId = null;

        /**
         * 实例名称，如ens-34241f3s。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceName = null;

        /**
         * 实例状态。取值范围：
PENDING：表示创建中
LAUNCH_FAILED：表示创建失败
RUNNING：表示运行中
STOPPED：表示关机
STARTING：表示开机中
STOPPING：表示关机中
REBOOTING：表示重启中
SHUTDOWN：表示停止待销毁
TERMINATING：表示销毁中。
         */
        this.InstanceState = null;

        /**
         * 实例当前使用的镜像的信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Image = null;

        /**
         * 实例当前所属的模块简要信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SimpleModule = null;

        /**
         * 实例所在的位置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Position = null;

        /**
         * 实例的网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Internet = null;

        /**
         * 实例的配置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceTypeConfig = null;

        /**
         * 实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateTime = null;

        /**
         * 实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagSet = null;

        /**
         * 实例最后一次操作。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LatestOperation = null;

        /**
         * 实例最后一次操作结果。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LatestOperationState = null;

        /**
         * 实例业务状态。取值范围：
NORMAL：表示正常状态的实例
EXPIRED：表示过期的实例
PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RestrictState = null;

        /**
         * 系统盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SystemDiskSize = null;

        /**
         * 数据盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DataDiskSize = null;

        /**
         * 实例UUID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UUID = null;

        /**
         * 付费方式。
    0为后付费。
    1为预付费。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PayMode = null;

        /**
         * 过期时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExpireTime = null;

        /**
         * 隔离时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsolatedTime = null;

        /**
         * 是否自动续费。
      0为不自动续费。
      1为自动续费。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RenewFlag = null;

        /**
         * 过期状态。
    NORMAL 表示机器运行正常。
    WILL_EXPIRE 表示即将过期。
    EXPIRED 表示已过期。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExpireState = null;

        /**
         * 系统盘信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SystemDisk = null;

        /**
         * 数据盘信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DataDisks = null;

        /**
         * 新实例标志
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NewFlag = null;

        /**
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        InstanceName: string | null;
        InstanceState: string | null;
        Image: Image | null;
        SimpleModule: SimpleModule | null;
        Position: Position | null;
        Internet: Internet | null;
        InstanceTypeConfig: InstanceTypeConfig | null;
        CreateTime: string | null;
        TagSet: Array<Tag> | null;
        LatestOperation: string | null;
        LatestOperationState: string | null;
        RestrictState: string | null;
        SystemDiskSize: number | null;
        DataDiskSize: number | null;
        UUID: string | null;
        PayMode: number | null;
        ExpireTime: string | null;
        IsolatedTime: string | null;
        RenewFlag: number | null;
        ExpireState: string | null;
        SystemDisk: DiskInfo | null;
        DataDisks: Array<DiskInfo> | null;
        NewFlag: number | null;
        SecurityGroupIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

        if (params.Image) {
            let obj = new Image();
            obj.deserialize(params.Image)
            this.Image = obj;
        }

        if (params.SimpleModule) {
            let obj = new SimpleModule();
            obj.deserialize(params.SimpleModule)
            this.SimpleModule = obj;
        }

        if (params.Position) {
            let obj = new Position();
            obj.deserialize(params.Position)
            this.Position = obj;
        }

        if (params.Internet) {
            let obj = new Internet();
            obj.deserialize(params.Internet)
            this.Internet = obj;
        }

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.UUID = 'UUID' in params ? params.UUID : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ExpireState = 'ExpireState' in params ? params.ExpireState : null;

        if (params.SystemDisk) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.NewFlag = 'NewFlag' in params ? params.NewFlag : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * 增强服务
 * @class
 */
class EnhancedService extends AbstractModel {

    SecurityService: RunSecurityServiceEnabled | null
    
    MonitorService: RunMonitorServiceEnabled | null
    
    EIPDirectService: RunEIPDirectServiceEnabled | null
    
    constructor(){
        super();

        /**
         * 是否开启云镜服务。
         */
        this.SecurityService = null;

        /**
         * 是否开启云监控服务。
         */
        this.MonitorService = null;

        /**
         * 是否开通IP直通。若不指定该参数，则Linux镜像默认开通，windows镜像暂不支持IP直通。
         */
        this.EIPDirectService = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SecurityService: RunSecurityServiceEnabled | null;
        MonitorService: RunMonitorServiceEnabled | null;
        EIPDirectService: RunEIPDirectServiceEnabled | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

        if (params.EIPDirectService) {
            let obj = new RunEIPDirectServiceEnabled();
            obj.deserialize(params.EIPDirectService)
            this.EIPDirectService = obj;
        }

    }
}

/**
 * DescribeInstanceVncUrl返回参数结构体
 * @class
 */
class DescribeInstanceVncUrlResponse extends AbstractModel {

    InstanceVncUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例的管理终端地址。
         */
        this.InstanceVncUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceVncUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceVncUrl = 'InstanceVncUrl' in params ? params.InstanceVncUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateAddress返回参数结构体
 * @class
 */
class DisassociateAddressResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
        TaskId: string | null;
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
 * DescribeInstanceTypeConfig请求参数结构体
 * @class
 */
class DescribeInstanceTypeConfigRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * ImportCustomImage请求参数结构体
 * @class
 */
class ImportCustomImageRequest extends AbstractModel {

    ImageName: string | null
    
    Architecture: string | null
    
    OsType: string | null
    
    OsVersion: string | null
    
    ImageDescription: string | null
    
    InitFlag: string | null
    
    ImageUrls: Array<ImageUrl> | null
    
    constructor(){
        super();

        /**
         * 镜像名称
         */
        this.ImageName = null;

        /**
         * 导入镜像的操作系统架构，x86_64 或 i386
         */
        this.Architecture = null;

        /**
         * 导入镜像的操作系统类型，通过DescribeImportImageOs获取
         */
        this.OsType = null;

        /**
         * 导入镜像的操作系统版本，通过DescribeImportImageOs获取
         */
        this.OsVersion = null;

        /**
         * 镜像描述
         */
        this.ImageDescription = null;

        /**
         * 镜像启动方式，cloudinit或nbd， 默认cloudinit
         */
        this.InitFlag = null;

        /**
         * 镜像描述，多层镜像按顺序传入
         */
        this.ImageUrls = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageName: string | null;
        Architecture: string | null;
        OsType: string | null;
        OsVersion: string | null;
        ImageDescription: string | null;
        InitFlag: string | null;
        ImageUrls: Array<ImageUrl> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;

        if (params.ImageUrls) {
            this.ImageUrls = new Array();
            for (let z in params.ImageUrls) {
                let obj = new ImageUrl();
                obj.deserialize(params.ImageUrls[z]);
                this.ImageUrls.push(obj);
            }
        }

    }
}

/**
 * DescribeModuleDetail请求参数结构体
 * @class
 */
class DescribeModuleDetailRequest extends AbstractModel {

    ModuleId: string | null
    
    constructor(){
        super();

        /**
         * 模块ID，如em-qn46snq8。
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * AssociateAddress请求参数结构体
 * @class
 */
class AssociateAddressRequest extends AbstractModel {

    EcmRegion: string | null
    
    AddressId: string | null
    
    InstanceId: string | null
    
    NetworkInterfaceId: string | null
    
    PrivateIpAddress: string | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
         */
        this.AddressId = null;

        /**
         * 要绑定的实例 ID。
         */
        this.InstanceId = null;

        /**
         * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
         */
        this.NetworkInterfaceId = null;

        /**
         * 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        AddressId: string | null;
        InstanceId: string | null;
        NetworkInterfaceId: string | null;
        PrivateIpAddress: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * ModifyVpcAttribute请求参数结构体
 * @class
 */
class ModifyVpcAttributeRequest extends AbstractModel {

    VpcId: string | null
    
    EcmRegion: string | null
    
    VpcName: string | null
    
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-f49l6u0z。
         */
        this.VpcId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 私有网络名称，可任意命名，但不得超过60个字符。
         */
        this.VpcName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        EcmRegion: string | null;
        VpcName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

    }
}

/**
 * DescribePeakNetworkOverview返回参数结构体
 * @class
 */
class DescribePeakNetworkOverviewResponse extends AbstractModel {

    PeakNetworkRegionSet: Array<PeakNetworkRegionInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 网络峰值数组。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PeakNetworkRegionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PeakNetworkRegionSet: Array<PeakNetworkRegionInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PeakNetworkRegionSet) {
            this.PeakNetworkRegionSet = new Array();
            for (let z in params.PeakNetworkRegionSet) {
                let obj = new PeakNetworkRegionInfo();
                obj.deserialize(params.PeakNetworkRegionSet[z]);
                this.PeakNetworkRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachNetworkInterface返回参数结构体
 * @class
 */
class AttachNetworkInterfaceResponse extends AbstractModel {

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
 * CreateImage返回参数结构体
 * @class
 */
class CreateImageResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务id
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
        TaskId: string | null;
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
 * DescribeBaseOverview请求参数结构体
 * @class
 */
class DescribeBaseOverviewRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * ModifyModuleNetwork返回参数结构体
 * @class
 */
class ModifyModuleNetworkResponse extends AbstractModel {

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
 * 磁盘信息
 * @class
 */
class DiskInfo extends AbstractModel {

    DiskType: string | null
    
    DiskId: string | null
    
    DiskSize: number | null
    
    constructor(){
        super();

        /**
         * 磁盘类型：LOCAL_BASIC
         */
        this.DiskType = null;

        /**
         * 磁盘ID
         */
        this.DiskId = null;

        /**
         * 磁盘大小（GB）
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DiskType: string | null;
        DiskId: string | null;
        DiskSize: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * DescribeImportImageOs请求参数结构体
 * @class
 */
class DescribeImportImageOsRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * 弹性网卡绑定关系
 * @class
 */
class NetworkInterfaceAttachment extends AbstractModel {

    InstanceId: string | null
    
    DeviceIndex: number | null
    
    InstanceAccountId: string | null
    
    AttachTime: string | null
    
    constructor(){
        super();

        /**
         * 云主机实例ID。
         */
        this.InstanceId = null;

        /**
         * 网卡在云主机实例内的序号。
         */
        this.DeviceIndex = null;

        /**
         * 云主机所有者账户信息。
         */
        this.InstanceAccountId = null;

        /**
         * 绑定时间。
         */
        this.AttachTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        DeviceIndex: number | null;
        InstanceAccountId: string | null;
        AttachTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceIndex = 'DeviceIndex' in params ? params.DeviceIndex : null;
        this.InstanceAccountId = 'InstanceAccountId' in params ? params.InstanceAccountId : null;
        this.AttachTime = 'AttachTime' in params ? params.AttachTime : null;

    }
}

/**
 * StopInstances返回参数结构体
 * @class
 */
class StopInstancesResponse extends AbstractModel {

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
 * ModifyModuleIpDirect返回参数结构体
 * @class
 */
class ModifyModuleIpDirectResponse extends AbstractModel {

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
 * ModifyModuleName请求参数结构体
 * @class
 */
class ModifyModuleNameRequest extends AbstractModel {

    ModuleId: string | null
    
    ModuleName: string | null
    
    constructor(){
        super();

        /**
         * 模块ID。
         */
        this.ModuleId = null;

        /**
         * 模块名称。
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
        ModuleName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * ModifyDefaultSubnet请求参数结构体
 * @class
 */
class ModifyDefaultSubnetRequest extends AbstractModel {

    EcmRegion: string | null
    
    Zone: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * ECM地域
         */
        this.EcmRegion = null;

        /**
         * ECM可用区
         */
        this.Zone = null;

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
        EcmRegion: string | null;
        Zone: string | null;
        VpcId: string | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends AbstractModel {

    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    OrderByField: string | null
    
    OrderDirection: number | null
    
    constructor(){
        super();

        /**
         * 过滤条件。
zone      String      是否必填：否     （过滤条件）按照可用区英文标识符过滤。
zone-name      String      是否必填：否     （过滤条件）按照可用区中文名过滤,支持模糊匹配。
module-id      String      是否必填：否     （过滤条件）按照模块ID过滤。
instance-id      String      是否必填：否      （过滤条件）按照实例ID过滤。
instance-name      String      是否必填：否      （过滤条件）按照实例名称过滤,支持模糊匹配。
ip-address      String      是否必填：否      （过滤条件）按照实例的内网/公网IP过滤。
instance-uuid   string 是否必填：否 （过滤条件）按照uuid过滤实例列表。
instance-state  string  是否必填：否 （过滤条件）按照实例状态更新实例列表。
internet-service-provider      String      是否必填：否      （过滤条件）按照实例公网IP所属的运营商进行过滤。
tag-key      String      是否必填：否      （过滤条件）按照标签键进行过滤。
tag:tag-key      String      是否必填：否      （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
module-name      String      是否必填：否      （过滤条件）按照模块名称过滤,支持模糊匹配。
image-id      String      是否必填：否      （过滤条件）按照实例的镜像ID过滤。

若不传Filters参数则表示查询所有相关的实例信息。
单次请求的Filter.Values的上限为5。
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20(如果查询结果数目大于等于20)，最大值为100。
         */
        this.Limit = null;

        /**
         * 指定排序字段。目前支持的可选值如下
timestamp 按实例创建时间排序。
注意：目前仅支持按创建时间排序，后续可能会有扩展。
如果不传，默认按实例创建时间排序
         */
        this.OrderByField = null;

        /**
         * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        OrderByField: string | null;
        OrderDirection: number | null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderByField = 'OrderByField' in params ? params.OrderByField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * DescribeTaskResult请求参数结构体
 * @class
 */
class DescribeTaskResultRequest extends AbstractModel {

    EcmRegion: string | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 异步任务ID。
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * AssociateAddress返回参数结构体
 * @class
 */
class AssociateAddressResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
        TaskId: string | null;
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
 * 过滤器Filter;由Name和ValueSet组成，是string的key和字符串数组的value
 * @class
 */
class Filter extends AbstractModel {

    Name: string | null
    
    Values: Array<string> | null
    
    constructor(){
        super();

        /**
         * 过滤字段名称
         */
        this.Name = null;

        /**
         * 过滤字段内容数组
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
 * 实例的公网ip相关信息。
 * @class
 */
class PublicIPAddressInfo extends AbstractModel {

    ChargeMode: string | null
    
    PublicIPAddress: string | null
    
    ISP: ISP | null
    
    MaxBandwidthOut: number | null
    
    constructor(){
        super();

        /**
         * 计费模式。
         */
        this.ChargeMode = null;

        /**
         * 实例的公网ip。
         */
        this.PublicIPAddress = null;

        /**
         * 实例的公网ip所属的运营商。
         */
        this.ISP = null;

        /**
         * 实例的最大出带宽上限。
         */
        this.MaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ChargeMode: string | null;
        PublicIPAddress: string | null;
        ISP: ISP | null;
        MaxBandwidthOut: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ChargeMode = 'ChargeMode' in params ? params.ChargeMode : null;
        this.PublicIPAddress = 'PublicIPAddress' in params ? params.PublicIPAddress : null;

        if (params.ISP) {
            let obj = new ISP();
            obj.deserialize(params.ISP)
            this.ISP = obj;
        }
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;

    }
}

/**
 * TerminateInstances返回参数结构体
 * @class
 */
class TerminateInstancesResponse extends AbstractModel {

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
 * DescribeAddresses请求参数结构体
 * @class
 */
class DescribeAddressesRequest extends AbstractModel {

    EcmRegion: string | null
    
    AddressIds: Array<string> | null
    
    Filters: Array<Filter> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：eip-11112222。参数不支持同时指定AddressIds和Filters。
         */
        this.AddressIds = null;

        /**
         * 每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定AddressIds和Filters。详细的过滤条件如下：
address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。
address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。
address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。
address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。取值范围：详见EIP状态列表。
instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。
private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。
network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。
is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）
         */
        this.Filters = null;

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
        EcmRegion: string | null;
        AddressIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

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
 * ModifyModuleConfig返回参数结构体
 * @class
 */
class ModifyModuleConfigResponse extends AbstractModel {

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
 * MigrateNetworkInterface请求参数结构体
 * @class
 */
class MigrateNetworkInterfaceRequest extends AbstractModel {

    EcmRegion: string | null
    
    NetworkInterfaceId: string | null
    
    SourceInstanceId: string | null
    
    DestinationInstanceId: string | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         */
        this.NetworkInterfaceId = null;

        /**
         * 弹性网卡当前绑定的ECM实例ID。形如：ein-r8hr2upy。
         */
        this.SourceInstanceId = null;

        /**
         * 待迁移的目的ECM实例ID。
         */
        this.DestinationInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        NetworkInterfaceId: string | null;
        SourceInstanceId: string | null;
        DestinationInstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.SourceInstanceId = 'SourceInstanceId' in params ? params.SourceInstanceId : null;
        this.DestinationInstanceId = 'DestinationInstanceId' in params ? params.DestinationInstanceId : null;

    }
}

/**
 * DescribeAddressQuota返回参数结构体
 * @class
 */
class DescribeAddressQuotaResponse extends AbstractModel {

    QuotaSet: Array<EipQuota> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 账户 EIP 配额信息。
         */
        this.QuotaSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        QuotaSet: Array<EipQuota> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new EipQuota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSecurityGroup返回参数结构体
 * @class
 */
class CreateSecurityGroupResponse extends AbstractModel {

    SecurityGroup: SecurityGroup | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 安全组对象。
         */
        this.SecurityGroup = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SecurityGroup: SecurityGroup | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SecurityGroup) {
            let obj = new SecurityGroup();
            obj.deserialize(params.SecurityGroup)
            this.SecurityGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Zone的实例信息
 * @class
 */
class ZoneInstanceInfo extends AbstractModel {

    ZoneName: string | null
    
    InstanceNum: number | null
    
    constructor(){
        super();

        /**
         * Zone名称
         */
        this.ZoneName = null;

        /**
         * 实例数量
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ZoneName: string | null;
        InstanceNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends AbstractModel {

    TaskSet: Array<TaskInput> | null
    
    constructor(){
        super();

        /**
         * 任务描述
         */
        this.TaskSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskSet: Array<TaskInput> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskInput();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }

    }
}

/**
 * ModifyAddressAttribute请求参数结构体
 * @class
 */
class ModifyAddressAttributeRequest extends AbstractModel {

    EcmRegion: string | null
    
    AddressId: string | null
    
    AddressName: string | null
    
    EipDirectConnection: string | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
         */
        this.AddressId = null;

        /**
         * 修改后的 EIP 名称。长度上限为20个字符。
         */
        this.AddressName = null;

        /**
         * 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。
         */
        this.EipDirectConnection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        AddressId: string | null;
        AddressName: string | null;
        EipDirectConnection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.EipDirectConnection = 'EipDirectConnection' in params ? params.EipDirectConnection : null;

    }
}

/**
 * ModifyModuleImage返回参数结构体
 * @class
 */
class ModifyModuleImageResponse extends AbstractModel {

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
 * ResetInstances请求参数结构体
 * @class
 */
class ResetInstancesRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    ImageId: string | null
    
    Password: string | null
    
    EnhancedService: EnhancedService | null
    
    KeepData: string | null
    
    constructor(){
        super();

        /**
         * 待重装的实例ID列表。
         */
        this.InstanceIdSet = null;

        /**
         * 重装使用的镜像ID，若未指定，则使用各个实例当前的镜像进行重装。
         */
        this.ImageId = null;

        /**
         * 密码设置，若未指定，则后续将以站内信的形式通知密码。
         */
        this.Password = null;

        /**
         * 是否开启云监控和云镜服务，未指定时默认开启。
         */
        this.EnhancedService = null;

        /**
         * 是否保留数据盘数据，取值"true"/"false"。默认为"true"
         */
        this.KeepData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        ImageId: string | null;
        Password: string | null;
        EnhancedService: EnhancedService | null;
        KeepData: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.KeepData = 'KeepData' in params ? params.KeepData : null;

    }
}

/**
 * 峰值网络数据
 * @class
 */
class PeakNetwork extends AbstractModel {

    RecordTime: string | null
    
    PeakInNetwork: string | null
    
    PeakOutNetwork: string | null
    
    constructor(){
        super();

        /**
         * 记录时间。
         */
        this.RecordTime = null;

        /**
         * 入带宽数据。
         */
        this.PeakInNetwork = null;

        /**
         * 出带宽数据。
         */
        this.PeakOutNetwork = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RecordTime: string | null;
        PeakInNetwork: string | null;
        PeakOutNetwork: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;
        this.PeakInNetwork = 'PeakInNetwork' in params ? params.PeakInNetwork : null;
        this.PeakOutNetwork = 'PeakOutNetwork' in params ? params.PeakOutNetwork : null;

    }
}

/**
 * DescribeCustomImageTask请求参数结构体
 * @class
 */
class DescribeCustomImageTaskRequest extends AbstractModel {

    Filters: Array<Filter> | null
    
    constructor(){
        super();

        /**
         * 支持key,value查询
task-id: 异步任务ID
image-id: 镜像ID
image-name: 镜像名称
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
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

    }
}

/**
 * 支持的操作系统类型，根据windows和Linux分类。
 * @class
 */
class ImageOsList extends AbstractModel {

    Windows: Array<string> | null
    
    Linux: Array<string> | null
    
    constructor(){
        super();

        /**
         * 支持的windows操作系统
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Windows = null;

        /**
         * 支持的linux操作系统
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Linux = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Windows: Array<string> | null;
        Linux: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Windows = 'Windows' in params ? params.Windows : null;
        this.Linux = 'Linux' in params ? params.Linux : null;

    }
}

/**
 * 实例可执行操作
 * @class
 */
class InstanceOperator extends AbstractModel {

    InstanceId: string | null
    
    DeniedActions: Array<OperatorAction> | null
    
    constructor(){
        super();

        /**
         * 实例id
         */
        this.InstanceId = null;

        /**
         * 实例禁止的操作
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeniedActions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        DeniedActions: Array<OperatorAction> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new OperatorAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * ModifyAddressAttribute返回参数结构体
 * @class
 */
class ModifyAddressAttributeResponse extends AbstractModel {

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
 * ImportImage返回参数结构体
 * @class
 */
class ImportImageResponse extends AbstractModel {

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
 * CreateSecurityGroup请求参数结构体
 * @class
 */
class CreateSecurityGroupRequest extends AbstractModel {

    GroupName: string | null
    
    GroupDescription: string | null
    
    Tags: Array<Tag> | null
    
    constructor(){
        super();

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         */
        this.GroupName = null;

        /**
         * 安全组备注，最多100个字符。
         */
        this.GroupDescription = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupName: string | null;
        GroupDescription: string | null;
        Tags: Array<Tag> | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 城市信息
 * @class
 */
class City extends AbstractModel {

    CityId: string | null
    
    CityName: string | null
    
    constructor(){
        super();

        /**
         * 城市ID
         */
        this.CityId = null;

        /**
         * 城市名称
         */
        this.CityName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CityId: string | null;
        CityName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.CityName = 'CityName' in params ? params.CityName : null;

    }
}

/**
 * 实例的内网ip相关信息。
 * @class
 */
class PrivateIPAddressInfo extends AbstractModel {

    PrivateIPAddress: string | null
    
    constructor(){
        super();

        /**
         * 实例的内网ip。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PrivateIPAddress = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PrivateIPAddress: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PrivateIPAddress = 'PrivateIPAddress' in params ? params.PrivateIPAddress : null;

    }
}

/**
 * TerminateInstances请求参数结构体
 * @class
 */
class TerminateInstancesRequest extends AbstractModel {

    InstanceIdSet: Array<string> | null
    
    TerminateDelay: boolean | null
    
    TerminateTime: string | null
    
    constructor(){
        super();

        /**
         * 待销毁的实例ID列表。
         */
        this.InstanceIdSet = null;

        /**
         * 是否定时销毁，默认为否。
         */
        this.TerminateDelay = null;

        /**
         * 定时销毁的时间，格式形如："2019-08-05 12:01:30"，若非定时销毁，则此参数被忽略。
         */
        this.TerminateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        TerminateDelay: boolean | null;
        TerminateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.TerminateDelay = 'TerminateDelay' in params ? params.TerminateDelay : null;
        this.TerminateTime = 'TerminateTime' in params ? params.TerminateTime : null;

    }
}

/**
 * DeleteNetworkInterface返回参数结构体
 * @class
 */
class DeleteNetworkInterfaceResponse extends AbstractModel {

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
 * Module的简要信息
 * @class
 */
class SimpleModule extends AbstractModel {

    ModuleId: string | null
    
    ModuleName: string | null
    
    constructor(){
        super();

        /**
         * 模块ID
         */
        this.ModuleId = null;

        /**
         * 模块名称
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
        ModuleName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * DescribePeakNetworkOverview请求参数结构体
 * @class
 */
class DescribePeakNetworkOverviewRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    Filters: Array<Filter> | null
    
    constructor(){
        super();

        /**
         * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期。
         */
        this.StartTime = null;

        /**
         * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天。
         */
        this.EndTime = null;

        /**
         * 过滤条件。
region    String      是否必填：否     （过滤条件）按照region过滤,不支持模糊匹配。
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        Filters: Array<Filter> | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * AssignPrivateIpAddresses返回参数结构体
 * @class
 */
class AssignPrivateIpAddressesResponse extends AbstractModel {

    PrivateIpAddressSet: Array<PrivateIpAddressSpecification> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 内网IP详细信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PrivateIpAddressSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PrivateIpAddressSet: Array<PrivateIpAddressSpecification> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * region维度的网络峰值信息
 * @class
 */
class PeakNetworkRegionInfo extends AbstractModel {

    Region: string | null
    
    PeakNetworkSet: Array<PeakNetwork> | null
    
    constructor(){
        super();

        /**
         * region信息
         */
        this.Region = null;

        /**
         * 网络峰值集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PeakNetworkSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        PeakNetworkSet: Array<PeakNetwork> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.PeakNetworkSet) {
            this.PeakNetworkSet = new Array();
            for (let z in params.PeakNetworkSet) {
                let obj = new PeakNetwork();
                obj.deserialize(params.PeakNetworkSet[z]);
                this.PeakNetworkSet.push(obj);
            }
        }

    }
}

/**
 * RebootInstances返回参数结构体
 * @class
 */
class RebootInstancesResponse extends AbstractModel {

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
 * ModifyAddressesBandwidth请求参数结构体
 * @class
 */
class ModifyAddressesBandwidthRequest extends AbstractModel {

    EcmRegion: string | null
    
    AddressIds: Array<string> | null
    
    InternetMaxBandwidthOut: number | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * EIP唯一标识ID，形如'eip-xxxxxxx'
         */
        this.AddressIds = null;

        /**
         * 调整带宽目标值
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        AddressIds: Array<string> | null;
        InternetMaxBandwidthOut: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * 操作Action
 * @class
 */
class OperatorAction extends AbstractModel {

    Action: string | null
    
    Code: string | null
    
    Message: string | null
    
    constructor(){
        super();

        /**
         * 可执行操作
         */
        this.Action = null;

        /**
         * 编码Code
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Code = null;

        /**
         * 具体信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Action: string | null;
        Code: string | null;
        Message: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * PeakFamilyInfo 按机型类别分类的cpu等数据的峰值信息
 * @class
 */
class PeakFamilyInfo extends AbstractModel {

    InstanceFamily: InstanceFamilyTypeConfig | null
    
    PeakBaseSet: Array<PeakBase> | null
    
    constructor(){
        super();

        /**
         * 机型类别信息。
         */
        this.InstanceFamily = null;

        /**
         * 基础数据峰值信息。
         */
        this.PeakBaseSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceFamily: InstanceFamilyTypeConfig | null;
        PeakBaseSet: Array<PeakBase> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InstanceFamily) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamily)
            this.InstanceFamily = obj;
        }

        if (params.PeakBaseSet) {
            this.PeakBaseSet = new Array();
            for (let z in params.PeakBaseSet) {
                let obj = new PeakBase();
                obj.deserialize(params.PeakBaseSet[z]);
                this.PeakBaseSet.push(obj);
            }
        }

    }
}

/**
 * DescribePeakBaseOverview返回参数结构体
 * @class
 */
class DescribePeakBaseOverviewResponse extends AbstractModel {

    PeakFamilyInfoSet: Array<PeakFamilyInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 基础峰值列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PeakFamilyInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PeakFamilyInfoSet: Array<PeakFamilyInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PeakFamilyInfoSet) {
            this.PeakFamilyInfoSet = new Array();
            for (let z in params.PeakFamilyInfoSet) {
                let obj = new PeakFamilyInfo();
                obj.deserialize(params.PeakFamilyInfoSet[z]);
                this.PeakFamilyInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyImageAttribute返回参数结构体
 * @class
 */
class ModifyImageAttributeResponse extends AbstractModel {

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
 * DescribeImage返回参数结构体
 * @class
 */
class DescribeImageResponse extends AbstractModel {

    TotalCount: number | null
    
    ImageSet: Array<Image> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 镜像总数
         */
        this.TotalCount = null;

        /**
         * 镜像数组
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageSet = null;

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
        ImageSet: Array<Image> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ImageSet) {
            this.ImageSet = new Array();
            for (let z in params.ImageSet) {
                let obj = new Image();
                obj.deserialize(params.ImageSet[z]);
                this.ImageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Region和RegionName
 * @class
 */
class RegionInfo extends AbstractModel {

    Region: string | null
    
    RegionName: string | null
    
    RegionId: number | null
    
    constructor(){
        super();

        /**
         * Region
         */
        this.Region = null;

        /**
         * Region名称
         */
        this.RegionName = null;

        /**
         * RegionID
         */
        this.RegionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        RegionName: string | null;
        RegionId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DeleteImage返回参数结构体
 * @class
 */
class DeleteImageResponse extends AbstractModel {

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
 * 描述 EIP 信息
 * @class
 */
class Address extends AbstractModel {

    AddressId: string | null
    
    AddressName: string | null
    
    AddressStatus: string | null
    
    AddressIp: string | null
    
    InstanceId: string | null
    
    CreatedTime: string | null
    
    NetworkInterfaceId: string | null
    
    PrivateAddressIp: string | null
    
    IsArrears: boolean | null
    
    IsBlocked: boolean | null
    
    IsEipDirectConnection: boolean | null
    
    AddressType: string | null
    
    CascadeRelease: boolean | null
    
    InternetServiceProvider: string | null
    
    Bandwidth: number | null
    
    PayMode: string | null
    
    constructor(){
        super();

        /**
         * EIP的ID，是EIP的唯一标识。
         */
        this.AddressId = null;

        /**
         * EIP名称。
         */
        this.AddressName = null;

        /**
         * EIP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)
         */
        this.AddressStatus = null;

        /**
         * 外网IP地址
         */
        this.AddressIp = null;

        /**
         * 绑定的资源实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InstanceId = null;

        /**
         * 创建时间。ISO 8601 格式：YYYY-MM-DDTHH:mm:ss.sssZ
         */
        this.CreatedTime = null;

        /**
         * 绑定的弹性网卡ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NetworkInterfaceId = null;

        /**
         * 绑定的资源内网ip
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PrivateAddressIp = null;

        /**
         * 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态
         */
        this.IsArrears = null;

        /**
         * 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态
         */
        this.IsBlocked = null;

        /**
         * eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式
         */
        this.IsEipDirectConnection = null;

        /**
         * eip资源类型，包括"CalcIP","WanIP","EIP","AnycastEIP"。其中"CalcIP"表示设备ip，“WanIP”表示普通公网ip，“EIP”表示弹性公网ip，“AnycastEip”表示加速EIP
         */
        this.AddressType = null;

        /**
         * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
         */
        this.CascadeRelease = null;

        /**
         * 运营商，CTCC电信，CUCC联通，CMCC移动
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InternetServiceProvider = null;

        /**
         * 带宽上限
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Bandwidth = null;

        /**
         * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AddressId: string | null;
        AddressName: string | null;
        AddressStatus: string | null;
        AddressIp: string | null;
        InstanceId: string | null;
        CreatedTime: string | null;
        NetworkInterfaceId: string | null;
        PrivateAddressIp: string | null;
        IsArrears: boolean | null;
        IsBlocked: boolean | null;
        IsEipDirectConnection: boolean | null;
        AddressType: string | null;
        CascadeRelease: boolean | null;
        InternetServiceProvider: string | null;
        Bandwidth: number | null;
        PayMode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.AddressStatus = 'AddressStatus' in params ? params.AddressStatus : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateAddressIp = 'PrivateAddressIp' in params ? params.PrivateAddressIp : null;
        this.IsArrears = 'IsArrears' in params ? params.IsArrears : null;
        this.IsBlocked = 'IsBlocked' in params ? params.IsBlocked : null;
        this.IsEipDirectConnection = 'IsEipDirectConnection' in params ? params.IsEipDirectConnection : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.CascadeRelease = 'CascadeRelease' in params ? params.CascadeRelease : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * DescribeNetworkInterfaces返回参数结构体
 * @class
 */
class DescribeNetworkInterfacesResponse extends AbstractModel {

    TotalCount: number | null
    
    NetworkInterfaceSet: Array<NetworkInterface> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.NetworkInterfaceSet = null;

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
        NetworkInterfaceSet: Array<NetworkInterface> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.NetworkInterfaceSet) {
            this.NetworkInterfaceSet = new Array();
            for (let z in params.NetworkInterfaceSet) {
                let obj = new NetworkInterface();
                obj.deserialize(params.NetworkInterfaceSet[z]);
                this.NetworkInterfaceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignPrivateIpAddresses请求参数结构体
 * @class
 */
class AssignPrivateIpAddressesRequest extends AbstractModel {

    NetworkInterfaceId: string | null
    
    EcmRegion: string | null
    
    PrivateIpAddresses: Array<PrivateIpAddressSpecification> | null
    
    SecondaryPrivateIpAddressCount: number | null
    
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         */
        this.NetworkInterfaceId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。
         */
        this.PrivateIpAddresses = null;

        /**
         * 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数
         */
        this.SecondaryPrivateIpAddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NetworkInterfaceId: string | null;
        EcmRegion: string | null;
        PrivateIpAddresses: Array<PrivateIpAddressSpecification> | null;
        SecondaryPrivateIpAddressCount: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;

    }
}

/**
 * ModifyImageAttribute请求参数结构体
 * @class
 */
class ModifyImageAttributeRequest extends AbstractModel {

    ImageId: string | null
    
    ImageName: string | null
    
    ImageDescription: string | null
    
    constructor(){
        super();

        /**
         * 镜像ID，形如img-gvbnzy6f
         */
        this.ImageId = null;

        /**
         * 设置新的镜像名称；必须满足下列限制：
不得超过20个字符。
- 镜像名称不能与已有镜像重复。
         */
        this.ImageName = null;

        /**
         * 设置新的镜像描述；必须满足下列限制：
- 不得超过60个字符。
         */
        this.ImageDescription = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        ImageName: string | null;
        ImageDescription: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;

    }
}

/**
 * ReleaseAddresses请求参数结构体
 * @class
 */
class ReleaseAddressesRequest extends AbstractModel {

    EcmRegion: string | null
    
    AddressIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID 列表。
         */
        this.AddressIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EcmRegion: string | null;
        AddressIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

    }
}

/**
 * CreateVpc请求参数结构体
 * @class
 */
class CreateVpcRequest extends AbstractModel {

    VpcName: string | null
    
    CidrBlock: string | null
    
    EcmRegion: string | null
    
    EnableMulticast: string | null
    
    DnsServers: Array<string> | null
    
    DomainName: string | null
    
    Tags: Array<Tag> | null
    
    constructor(){
        super();

        /**
         * vpc名称，最大长度不能超过60个字节。
         */
        this.VpcName = null;

        /**
         * vpc的cidr，只能为10.0.0.0/16，172.16.0.0/16，192.168.0.0/16这三个内网网段内。
         */
        this.CidrBlock = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 是否开启组播。true: 开启, false: 不开启。
         */
        this.EnableMulticast = null;

        /**
         * DNS地址，最多支持4个
         */
        this.DnsServers = null;

        /**
         * 域名
         */
        this.DomainName = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VpcName: string | null;
        CidrBlock: string | null;
        EcmRegion: string | null;
        EnableMulticast: string | null;
        DnsServers: Array<string> | null;
        DomainName: string | null;
        Tags: Array<Tag> | null;
    }): void {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 云镜服务；
 * @class
 */
class RunSecurityServiceEnabled extends AbstractModel {

    Enabled: boolean | null
    
    Version: number | null
    
    constructor(){
        super();

        /**
         * 是否开启。
         */
        this.Enabled = null;

        /**
         * 云镜版本：0 基础版，1 专业版。目前仅支持基础版
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean | null;
        Version: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * 国家信息
 * @class
 */
class Country extends AbstractModel {

    CountryId: string | null
    
    CountryName: string | null
    
    constructor(){
        super();

        /**
         * 国家ID
         */
        this.CountryId = null;

        /**
         * 国家名称
         */
        this.CountryName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CountryId: string | null;
        CountryName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CountryId = 'CountryId' in params ? params.CountryId : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;

    }
}

/**
 * ModifySubnetAttribute请求参数结构体
 * @class
 */
class ModifySubnetAttributeRequest extends AbstractModel {

    SubnetId: string | null
    
    EcmRegion: string | null
    
    SubnetName: string | null
    
    EnableBroadcast: string | null
    
    constructor(){
        super();

        /**
         * 子网实例ID。形如：subnet-pxir56ns。
         */
        this.SubnetId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

        /**
         * 子网名称，最大长度不能超过60个字节。
         */
        this.SubnetName = null;

        /**
         * 子网是否开启广播。
         */
        this.EnableBroadcast = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubnetId: string | null;
        EcmRegion: string | null;
        SubnetName: string | null;
        EnableBroadcast: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;

    }
}

/**
 * AllocateAddresses返回参数结构体
 * @class
 */
class AllocateAddressesResponse extends AbstractModel {

    AddressSet: Array<string> | null
    
    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AddressSet = null;

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
        AddressSet: Array<string> | null;
        TaskId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AddressSet = 'AddressSet' in params ? params.AddressSet : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachNetworkInterface请求参数结构体
 * @class
 */
class AttachNetworkInterfaceRequest extends AbstractModel {

    NetworkInterfaceId: string | null
    
    InstanceId: string | null
    
    EcmRegion: string | null
    
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         */
        this.NetworkInterfaceId = null;

        /**
         * 实例ID。形如：ein-r8hr2upy。
         */
        this.InstanceId = null;

        /**
         * ECM 地域
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NetworkInterfaceId: string | null;
        InstanceId: string | null;
        EcmRegion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * 模块列表Item信息
 * @class
 */
class ModuleItem extends AbstractModel {

    NodeInstanceNum: NodeInstanceNum | null
    
    Module: Module | null
    
    constructor(){
        super();

        /**
         * 节点实例统计信息
         */
        this.NodeInstanceNum = null;

        /**
         * 模块信息
         */
        this.Module = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeInstanceNum: NodeInstanceNum | null;
        Module: Module | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.NodeInstanceNum) {
            let obj = new NodeInstanceNum();
            obj.deserialize(params.NodeInstanceNum)
            this.NodeInstanceNum = obj;
        }

        if (params.Module) {
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

    }
}

/**
 * ModifyModuleImage请求参数结构体
 * @class
 */
class ModifyModuleImageRequest extends AbstractModel {

    DefaultImageId: string | null
    
    ModuleId: string | null
    
    constructor(){
        super();

        /**
         * 默认镜像ID
         */
        this.DefaultImageId = null;

        /**
         * 模块ID
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DefaultImageId: string | null;
        ModuleId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * 云监控服务
 * @class
 */
class RunMonitorServiceEnabled extends AbstractModel {

    Enabled: boolean | null
    
    constructor(){
        super();

        /**
         * 是否开启。
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * MigrateNetworkInterface返回参数结构体
 * @class
 */
class MigrateNetworkInterfaceResponse extends AbstractModel {

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
 * DescribeVpcs返回参数结构体
 * @class
 */
class DescribeVpcsResponse extends AbstractModel {

    TotalCount: number | null
    
    VpcSet: Array<VpcInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         */
        this.TotalCount = null;

        /**
         * 私有网络对象。
注意：此字段可能返回 null，表示取不到有效值。
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
        TotalCount: number | null;
        VpcSet: Array<VpcInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

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
 * DeleteImage请求参数结构体
 * @class
 */
class DeleteImageRequest extends AbstractModel {

    ImageIDSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 镜像ID列表。
         */
        this.ImageIDSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageIDSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageIDSet = 'ImageIDSet' in params ? params.ImageIDSet : null;

    }
}

/**
 * 模块信息
 * @class
 */
class Module extends AbstractModel {

    ModuleId: string | null
    
    ModuleName: string | null
    
    ModuleState: string | null
    
    DefaultSystemDiskSize: number | null
    
    DefaultDataDiskSize: number | null
    
    InstanceTypeConfig: InstanceTypeConfig | null
    
    DefaultImage: Image | null
    
    CreateTime: string | null
    
    DefaultBandwidth: number | null
    
    TagSet: Array<Tag> | null
    
    CloseIpDirect: number | null
    
    constructor(){
        super();

        /**
         * 模块Id
         */
        this.ModuleId = null;

        /**
         * 模块名称
         */
        this.ModuleName = null;

        /**
         * 模块状态：
NORMAL：正常
DELETING：删除中 
DELETEFAILED：删除失败
         */
        this.ModuleState = null;

        /**
         * 默认系统盘大小
         */
        this.DefaultSystemDiskSize = null;

        /**
         * 默认数据盘大小
         */
        this.DefaultDataDiskSize = null;

        /**
         * 默认机型
         */
        this.InstanceTypeConfig = null;

        /**
         * 默认镜像
         */
        this.DefaultImage = null;

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * 默认带宽
         */
        this.DefaultBandwidth = null;

        /**
         * 标签集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagSet = null;

        /**
         * 是否关闭IP直通
         */
        this.CloseIpDirect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleId: string | null;
        ModuleName: string | null;
        ModuleState: string | null;
        DefaultSystemDiskSize: number | null;
        DefaultDataDiskSize: number | null;
        InstanceTypeConfig: InstanceTypeConfig | null;
        DefaultImage: Image | null;
        CreateTime: string | null;
        DefaultBandwidth: number | null;
        TagSet: Array<Tag> | null;
        CloseIpDirect: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.ModuleState = 'ModuleState' in params ? params.ModuleState : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }

        if (params.DefaultImage) {
            let obj = new Image();
            obj.deserialize(params.DefaultImage)
            this.DefaultImage = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;

    }
}

/**
 * DescribeBaseOverview返回参数结构体
 * @class
 */
class DescribeBaseOverviewResponse extends AbstractModel {

    ModuleNum: number | null
    
    NodeNum: number | null
    
    VcpuNum: number | null
    
    MemoryNum: number | null
    
    StorageNum: number | null
    
    NetworkNum: number | null
    
    InstanceNum: number | null
    
    RunningNum: number | null
    
    IsolationNum: number | null
    
    ExpiredNum: number | null
    
    WillExpireNum: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 模块数量，单位：个
         */
        this.ModuleNum = null;

        /**
         * 节点数量，单位：个
         */
        this.NodeNum = null;

        /**
         * cpu核数，单位：个
         */
        this.VcpuNum = null;

        /**
         * 内存大小，单位：G
         */
        this.MemoryNum = null;

        /**
         * 硬盘大小，单位：G
         */
        this.StorageNum = null;

        /**
         * 昨日网络峰值,单位：M
         */
        this.NetworkNum = null;

        /**
         * 实例数量，单位：台
         */
        this.InstanceNum = null;

        /**
         * 运行中数量，单位：台
         */
        this.RunningNum = null;

        /**
         * 安全隔离数量，单位：台
         */
        this.IsolationNum = null;

        /**
         * 过期实例数量，单位：台
         */
        this.ExpiredNum = null;

        /**
         * 即将过期实例数量，单位：台
         */
        this.WillExpireNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModuleNum: number | null;
        NodeNum: number | null;
        VcpuNum: number | null;
        MemoryNum: number | null;
        StorageNum: number | null;
        NetworkNum: number | null;
        InstanceNum: number | null;
        RunningNum: number | null;
        IsolationNum: number | null;
        ExpiredNum: number | null;
        WillExpireNum: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModuleNum = 'ModuleNum' in params ? params.ModuleNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.VcpuNum = 'VcpuNum' in params ? params.VcpuNum : null;
        this.MemoryNum = 'MemoryNum' in params ? params.MemoryNum : null;
        this.StorageNum = 'StorageNum' in params ? params.StorageNum : null;
        this.NetworkNum = 'NetworkNum' in params ? params.NetworkNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.RunningNum = 'RunningNum' in params ? params.RunningNum : null;
        this.IsolationNum = 'IsolationNum' in params ? params.IsolationNum : null;
        this.ExpiredNum = 'ExpiredNum' in params ? params.ExpiredNum : null;
        this.WillExpireNum = 'WillExpireNum' in params ? params.WillExpireNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    RunEIPDirectServiceEnabled: RunEIPDirectServiceEnabled,
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    Ipv6Address: Ipv6Address,
    DescribePeakBaseOverviewRequest: DescribePeakBaseOverviewRequest,
    CreateNetworkInterfaceRequest: CreateNetworkInterfaceRequest,
    DescribeInstancesDeniedActionsRequest: DescribeInstancesDeniedActionsRequest,
    Internet: Internet,
    DescribeModuleResponse: DescribeModuleResponse,
    ImageTask: ImageTask,
    Province: Province,
    ImportCustomImageResponse: ImportCustomImageResponse,
    ModifyModuleNameResponse: ModifyModuleNameResponse,
    DescribeNetworkInterfacesRequest: DescribeNetworkInterfacesRequest,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    DeleteModuleResponse: DeleteModuleResponse,
    EipQuota: EipQuota,
    DeleteSubnetResponse: DeleteSubnetResponse,
    ModifyAddressesBandwidthResponse: ModifyAddressesBandwidthResponse,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    RunInstancesRequest: RunInstancesRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    NetworkInterface: NetworkInterface,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    SrcImage: SrcImage,
    InstanceTypeConfig: InstanceTypeConfig,
    DescribeNodeResponse: DescribeNodeResponse,
    RemovePrivateIpAddressesResponse: RemovePrivateIpAddressesResponse,
    DescribeDefaultSubnetResponse: DescribeDefaultSubnetResponse,
    VpcInfo: VpcInfo,
    DescribeCustomImageTaskResponse: DescribeCustomImageTaskResponse,
    SecurityGroup: SecurityGroup,
    DeleteSubnetRequest: DeleteSubnetRequest,
    DescribeModuleRequest: DescribeModuleRequest,
    Position: Position,
    CreateModuleResponse: CreateModuleResponse,
    RebootInstancesRequest: RebootInstancesRequest,
    AllocateAddressesRequest: AllocateAddressesRequest,
    DeleteNetworkInterfaceRequest: DeleteNetworkInterfaceRequest,
    RemovePrivateIpAddressesRequest: RemovePrivateIpAddressesRequest,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    InstanceFamilyTypeConfig: InstanceFamilyTypeConfig,
    ResetInstancesResponse: ResetInstancesResponse,
    DescribeImageRequest: DescribeImageRequest,
    MigratePrivateIpAddressRequest: MigratePrivateIpAddressRequest,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    ZoneInfo: ZoneInfo,
    DescribeNodeRequest: DescribeNodeRequest,
    CreateSubnetResponse: CreateSubnetResponse,
    ResetInstancesPasswordRequest: ResetInstancesPasswordRequest,
    ModifyModuleConfigRequest: ModifyModuleConfigRequest,
    Area: Area,
    DescribeConfigRequest: DescribeConfigRequest,
    DescribeInstanceVncUrlRequest: DescribeInstanceVncUrlRequest,
    NetworkStorageRange: NetworkStorageRange,
    StartInstancesResponse: StartInstancesResponse,
    CreateVpcResponse: CreateVpcResponse,
    AssistantCidr: AssistantCidr,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    ModifyModuleIpDirectRequest: ModifyModuleIpDirectRequest,
    CreateModuleRequest: CreateModuleRequest,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    ReleaseAddressesResponse: ReleaseAddressesResponse,
    DescribeInstancesDeniedActionsResponse: DescribeInstancesDeniedActionsResponse,
    DisassociateAddressRequest: DisassociateAddressRequest,
    TaskOutput: TaskOutput,
    ModuleCounter: ModuleCounter,
    ZoneInstanceCountISP: ZoneInstanceCountISP,
    TaskInput: TaskInput,
    StartInstancesRequest: StartInstancesRequest,
    Tag: Tag,
    DescribeDefaultSubnetRequest: DescribeDefaultSubnetRequest,
    ResetInstancesMaxBandwidthResponse: ResetInstancesMaxBandwidthResponse,
    DeleteVpcRequest: DeleteVpcRequest,
    CreateNetworkInterfaceResponse: CreateNetworkInterfaceResponse,
    Node: Node,
    RunInstancesResponse: RunInstancesResponse,
    DescribeAddressQuotaRequest: DescribeAddressQuotaRequest,
    DescribeInstanceTypeConfigResponse: DescribeInstanceTypeConfigResponse,
    NodeInstanceNum: NodeInstanceNum,
    DescribeAddressesResponse: DescribeAddressesResponse,
    ImportImageRequest: ImportImageRequest,
    DetachNetworkInterfaceResponse: DetachNetworkInterfaceResponse,
    InstanceFamilyConfig: InstanceFamilyConfig,
    DeleteModuleRequest: DeleteModuleRequest,
    DescribeVpcsRequest: DescribeVpcsRequest,
    ResetInstancesMaxBandwidthRequest: ResetInstancesMaxBandwidthRequest,
    OsVersion: OsVersion,
    PeakBase: PeakBase,
    ModifyModuleNetworkRequest: ModifyModuleNetworkRequest,
    Image: Image,
    TagSpecification: TagSpecification,
    DetachNetworkInterfaceRequest: DetachNetworkInterfaceRequest,
    DescribeConfigResponse: DescribeConfigResponse,
    ModifyDefaultSubnetResponse: ModifyDefaultSubnetResponse,
    DescribeImportImageOsResponse: DescribeImportImageOsResponse,
    DescribeModuleDetailResponse: DescribeModuleDetailResponse,
    StopInstancesRequest: StopInstancesRequest,
    Subnet: Subnet,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    DeleteVpcResponse: DeleteVpcResponse,
    ImageUrl: ImageUrl,
    ISP: ISP,
    PrivateIpAddressSpecification: PrivateIpAddressSpecification,
    ISPCounter: ISPCounter,
    MigratePrivateIpAddressResponse: MigratePrivateIpAddressResponse,
    CreateImageRequest: CreateImageRequest,
    Instance: Instance,
    EnhancedService: EnhancedService,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    DisassociateAddressResponse: DisassociateAddressResponse,
    DescribeInstanceTypeConfigRequest: DescribeInstanceTypeConfigRequest,
    ImportCustomImageRequest: ImportCustomImageRequest,
    DescribeModuleDetailRequest: DescribeModuleDetailRequest,
    AssociateAddressRequest: AssociateAddressRequest,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    DescribePeakNetworkOverviewResponse: DescribePeakNetworkOverviewResponse,
    AttachNetworkInterfaceResponse: AttachNetworkInterfaceResponse,
    CreateImageResponse: CreateImageResponse,
    DescribeBaseOverviewRequest: DescribeBaseOverviewRequest,
    ModifyModuleNetworkResponse: ModifyModuleNetworkResponse,
    DiskInfo: DiskInfo,
    DescribeImportImageOsRequest: DescribeImportImageOsRequest,
    NetworkInterfaceAttachment: NetworkInterfaceAttachment,
    StopInstancesResponse: StopInstancesResponse,
    ModifyModuleIpDirectResponse: ModifyModuleIpDirectResponse,
    ModifyModuleNameRequest: ModifyModuleNameRequest,
    ModifyDefaultSubnetRequest: ModifyDefaultSubnetRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    AssociateAddressResponse: AssociateAddressResponse,
    Filter: Filter,
    PublicIPAddressInfo: PublicIPAddressInfo,
    TerminateInstancesResponse: TerminateInstancesResponse,
    DescribeAddressesRequest: DescribeAddressesRequest,
    ModifyModuleConfigResponse: ModifyModuleConfigResponse,
    MigrateNetworkInterfaceRequest: MigrateNetworkInterfaceRequest,
    DescribeAddressQuotaResponse: DescribeAddressQuotaResponse,
    CreateSecurityGroupResponse: CreateSecurityGroupResponse,
    ZoneInstanceInfo: ZoneInstanceInfo,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    ModifyAddressAttributeRequest: ModifyAddressAttributeRequest,
    ModifyModuleImageResponse: ModifyModuleImageResponse,
    ResetInstancesRequest: ResetInstancesRequest,
    PeakNetwork: PeakNetwork,
    DescribeCustomImageTaskRequest: DescribeCustomImageTaskRequest,
    ImageOsList: ImageOsList,
    InstanceOperator: InstanceOperator,
    ModifyAddressAttributeResponse: ModifyAddressAttributeResponse,
    ImportImageResponse: ImportImageResponse,
    CreateSecurityGroupRequest: CreateSecurityGroupRequest,
    City: City,
    PrivateIPAddressInfo: PrivateIPAddressInfo,
    TerminateInstancesRequest: TerminateInstancesRequest,
    DeleteNetworkInterfaceResponse: DeleteNetworkInterfaceResponse,
    SimpleModule: SimpleModule,
    DescribePeakNetworkOverviewRequest: DescribePeakNetworkOverviewRequest,
    AssignPrivateIpAddressesResponse: AssignPrivateIpAddressesResponse,
    PeakNetworkRegionInfo: PeakNetworkRegionInfo,
    RebootInstancesResponse: RebootInstancesResponse,
    ModifyAddressesBandwidthRequest: ModifyAddressesBandwidthRequest,
    OperatorAction: OperatorAction,
    PeakFamilyInfo: PeakFamilyInfo,
    DescribePeakBaseOverviewResponse: DescribePeakBaseOverviewResponse,
    ModifyImageAttributeResponse: ModifyImageAttributeResponse,
    DescribeImageResponse: DescribeImageResponse,
    RegionInfo: RegionInfo,
    DeleteImageResponse: DeleteImageResponse,
    Address: Address,
    DescribeNetworkInterfacesResponse: DescribeNetworkInterfacesResponse,
    AssignPrivateIpAddressesRequest: AssignPrivateIpAddressesRequest,
    ModifyImageAttributeRequest: ModifyImageAttributeRequest,
    ReleaseAddressesRequest: ReleaseAddressesRequest,
    CreateVpcRequest: CreateVpcRequest,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    Country: Country,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    AllocateAddressesResponse: AllocateAddressesResponse,
    AttachNetworkInterfaceRequest: AttachNetworkInterfaceRequest,
    ModuleItem: ModuleItem,
    ModifyModuleImageRequest: ModifyModuleImageRequest,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    MigrateNetworkInterfaceResponse: MigrateNetworkInterfaceResponse,
    DescribeVpcsResponse: DescribeVpcsResponse,
    DeleteImageRequest: DeleteImageRequest,
    Module: Module,
    DescribeBaseOverviewResponse: DescribeBaseOverviewResponse,

}
