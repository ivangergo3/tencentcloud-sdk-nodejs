import { AbstractModel } from "../../common/abstract_model";
/**
 * 描述预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。
 * @class
 */
export declare class ChargePrepaid extends AbstractModel {
    Period: number;
    RenewFlag: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Period: number;
        RenewFlag: string;
    }): void;
}
/**
 * 本地磁盘规格
 * @class
 */
export declare class LocalDiskType extends AbstractModel {
    Type: string;
    PartitionType: string;
    MinSize: number;
    MaxSize: number;
    Required: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Type: string;
        PartitionType: string;
        MinSize: number;
        MaxSize: number;
        Required: string;
    }): void;
}
/**
 * AssociateInstancesKeyPairs返回参数结构体
 * @class
 */
export declare class AssociateInstancesKeyPairsResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * RenewInstances请求参数结构体
 * @class
 */
export declare class RenewInstancesRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InstanceChargePrepaid: InstanceChargePrepaid;
    RenewPortableDataDisk: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InstanceChargePrepaid: InstanceChargePrepaid;
        RenewPortableDataDisk: boolean;
    }): void;
}
/**
 * DescribeImageQuota返回参数结构体
 * @class
 */
export declare class DescribeImageQuotaResponse extends AbstractModel {
    ImageNumQuota: number;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageNumQuota: number;
        RequestId: string;
    }): void;
}
/**
 * ModifyInstancesProject请求参数结构体
 * @class
 */
export declare class ModifyInstancesProjectRequest extends AbstractModel {
    InstanceIds: Array<string>;
    ProjectId: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        ProjectId: number;
    }): void;
}
/**
 * ResetInstancesType返回参数结构体
 * @class
 */
export declare class ResetInstancesTypeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * cdh实例的资源信息
 * @class
 */
export declare class HostResource extends AbstractModel {
    CpuTotal: number;
    CpuAvailable: number;
    MemTotal: number;
    MemAvailable: number;
    DiskTotal: number;
    DiskAvailable: number;
    DiskType: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        CpuTotal: number;
        CpuAvailable: number;
        MemTotal: number;
        MemAvailable: number;
        DiskTotal: number;
        DiskAvailable: number;
        DiskType: string;
    }): void;
}
/**
 * DeleteDisasterRecoverGroups请求参数结构体
 * @class
 */
export declare class DeleteDisasterRecoverGroupsRequest extends AbstractModel {
    DisasterRecoverGroupIds: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupIds: Array<string>;
    }): void;
}
/**
 * DeleteKeyPairs返回参数结构体
 * @class
 */
export declare class DeleteKeyPairsResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * TerminateInstances返回参数结构体
 * @class
 */
export declare class TerminateInstancesResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ModifyInstancesChargeType返回参数结构体
 * @class
 */
export declare class ModifyInstancesChargeTypeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * CreateDisasterRecoverGroup返回参数结构体
 * @class
 */
export declare class CreateDisasterRecoverGroupResponse extends AbstractModel {
    DisasterRecoverGroupId: string;
    Type: string;
    Name: string;
    CvmQuotaTotal: number;
    CurrentNum: number;
    CreateTime: string;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupId: string;
        Type: string;
        Name: string;
        CvmQuotaTotal: number;
        CurrentNum: number;
        CreateTime: string;
        RequestId: string;
    }): void;
}
/**
 * InquiryPriceResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
export declare class InquiryPriceResetInstancesInternetMaxBandwidthResponse extends AbstractModel {
    Price: Price;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price;
        RequestId: string;
    }): void;
}
/**
 * ModifyKeyPairAttribute请求参数结构体
 * @class
 */
export declare class ModifyKeyPairAttributeRequest extends AbstractModel {
    KeyId: string;
    KeyName: string;
    Description: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyId: string;
        KeyName: string;
        Description: string;
    }): void;
}
/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
export declare class AssociateSecurityGroupsRequest extends AbstractModel {
    SecurityGroupIds: Array<string>;
    InstanceIds: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SecurityGroupIds: Array<string>;
        InstanceIds: Array<string>;
    }): void;
}
/**
 * ResetInstancesType请求参数结构体
 * @class
 */
export declare class ResetInstancesTypeRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InstanceType: string;
    ForceStop: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InstanceType: string;
        ForceStop: boolean;
    }): void;
}
/**
 * InquiryPriceResetInstance请求参数结构体
 * @class
 */
export declare class InquiryPriceResetInstanceRequest extends AbstractModel {
    InstanceId: string;
    ImageId: string;
    SystemDisk: SystemDisk;
    LoginSettings: LoginSettings;
    EnhancedService: EnhancedService;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string;
        ImageId: string;
        SystemDisk: SystemDisk;
        LoginSettings: LoginSettings;
        EnhancedService: EnhancedService;
    }): void;
}
/**
 * RunInstances请求参数结构体
 * @class
 */
export declare class RunInstancesRequest extends AbstractModel {
    Placement: Placement;
    ImageId: string;
    InstanceChargeType: string;
    InstanceChargePrepaid: InstanceChargePrepaid;
    InstanceType: string;
    SystemDisk: SystemDisk;
    DataDisks: Array<DataDisk>;
    VirtualPrivateCloud: VirtualPrivateCloud;
    InternetAccessible: InternetAccessible;
    InstanceCount: number;
    InstanceName: string;
    LoginSettings: LoginSettings;
    SecurityGroupIds: Array<string>;
    EnhancedService: EnhancedService;
    ClientToken: string;
    HostName: string;
    ActionTimer: ActionTimer;
    DisasterRecoverGroupIds: Array<string>;
    TagSpecification: Array<TagSpecification>;
    InstanceMarketOptions: InstanceMarketOptionsRequest;
    UserData: string;
    DryRun: boolean;
    HpcClusterId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement;
        ImageId: string;
        InstanceChargeType: string;
        InstanceChargePrepaid: InstanceChargePrepaid;
        InstanceType: string;
        SystemDisk: SystemDisk;
        DataDisks: Array<DataDisk>;
        VirtualPrivateCloud: VirtualPrivateCloud;
        InternetAccessible: InternetAccessible;
        InstanceCount: number;
        InstanceName: string;
        LoginSettings: LoginSettings;
        SecurityGroupIds: Array<string>;
        EnhancedService: EnhancedService;
        ClientToken: string;
        HostName: string;
        ActionTimer: ActionTimer;
        DisasterRecoverGroupIds: Array<string>;
        TagSpecification: Array<TagSpecification>;
        InstanceMarketOptions: InstanceMarketOptionsRequest;
        UserData: string;
        DryRun: boolean;
        HpcClusterId: string;
    }): void;
}
/**
 * DeleteImages请求参数结构体
 * @class
 */
export declare class DeleteImagesRequest extends AbstractModel {
    ImageIds: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageIds: Array<string>;
    }): void;
}
/**
 * DescribeInstances返回参数结构体
 * @class
 */
export declare class DescribeInstancesResponse extends AbstractModel {
    TotalCount: number;
    InstanceSet: Array<Instance>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        InstanceSet: Array<Instance>;
        RequestId: string;
    }): void;
}
/**
 * DescribeHosts返回参数结构体
 * @class
 */
export declare class DescribeHostsResponse extends AbstractModel {
    TotalCount: number;
    HostSet: Array<HostItem>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        HostSet: Array<HostItem>;
        RequestId: string;
    }): void;
}
/**
 * DeleteKeyPairs请求参数结构体
 * @class
 */
export declare class DeleteKeyPairsRequest extends AbstractModel {
    KeyIds: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyIds: Array<string>;
    }): void;
}
/**
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
export declare class SystemDisk extends AbstractModel {
    DiskType: string;
    DiskId: string;
    DiskSize: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DiskType: string;
        DiskId: string;
        DiskSize: number;
    }): void;
}
/**
 * ResetInstance请求参数结构体
 * @class
 */
export declare class ResetInstanceRequest extends AbstractModel {
    InstanceId: string;
    ImageId: string;
    SystemDisk: SystemDisk;
    LoginSettings: LoginSettings;
    EnhancedService: EnhancedService;
    HostName: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string;
        ImageId: string;
        SystemDisk: SystemDisk;
        LoginSettings: LoginSettings;
        EnhancedService: EnhancedService;
        HostName: string;
    }): void;
}
/**
 * 描述实例机型配置信息
 * @class
 */
export declare class InstanceTypeConfig extends AbstractModel {
    Zone: string;
    InstanceType: string;
    InstanceFamily: string;
    GPU: number;
    CPU: number;
    Memory: number;
    FPGA: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string;
        InstanceType: string;
        InstanceFamily: string;
        GPU: number;
        CPU: number;
        Memory: number;
        FPGA: number;
    }): void;
}
/**
 * AllocateHosts请求参数结构体
 * @class
 */
export declare class AllocateHostsRequest extends AbstractModel {
    Placement: Placement;
    ClientToken: string;
    HostChargePrepaid: ChargePrepaid;
    HostChargeType: string;
    HostType: string;
    HostCount: number;
    TagSpecification: Array<TagSpecification>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement;
        ClientToken: string;
        HostChargePrepaid: ChargePrepaid;
        HostChargeType: string;
        HostType: string;
        HostCount: number;
        TagSpecification: Array<TagSpecification>;
    }): void;
}
/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
export declare class LoginSettings extends AbstractModel {
    Password: string;
    KeyIds: Array<string>;
    KeepImageLogin: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Password: string;
        KeyIds: Array<string>;
        KeepImageLogin: string;
    }): void;
}
/**
 * DescribeRegions返回参数结构体
 * @class
 */
export declare class DescribeRegionsResponse extends AbstractModel {
    TotalCount: number;
    RegionSet: Array<RegionInfo>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        RegionSet: Array<RegionInfo>;
        RequestId: string;
    }): void;
}
/**
 * PurchaseReservedInstancesOffering请求参数结构体
 * @class
 */
export declare class PurchaseReservedInstancesOfferingRequest extends AbstractModel {
    InstanceCount: number;
    ReservedInstancesOfferingId: string;
    DryRun: boolean;
    ClientToken: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceCount: number;
        ReservedInstancesOfferingId: string;
        DryRun: boolean;
        ClientToken: string;
    }): void;
}
/**
 * RebootInstances请求参数结构体
 * @class
 */
export declare class RebootInstancesRequest extends AbstractModel {
    InstanceIds: Array<string>;
    ForceReboot: boolean;
    StopType: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        ForceReboot: boolean;
        StopType: string;
    }): void;
}
/**
 * AssociateInstancesKeyPairs请求参数结构体
 * @class
 */
export declare class AssociateInstancesKeyPairsRequest extends AbstractModel {
    InstanceIds: Array<string>;
    KeyIds: Array<string>;
    ForceStop: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        KeyIds: Array<string>;
        ForceStop: boolean;
    }): void;
}
/**
 * ImportKeyPair返回参数结构体
 * @class
 */
export declare class ImportKeyPairResponse extends AbstractModel {
    KeyId: string;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyId: string;
        RequestId: string;
    }): void;
}
/**
 * DescribeInstancesStatus返回参数结构体
 * @class
 */
export declare class DescribeInstancesStatusResponse extends AbstractModel {
    TotalCount: number;
    InstanceStatusSet: Array<InstanceStatus>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        InstanceStatusSet: Array<InstanceStatus>;
        RequestId: string;
    }): void;
}
/**
 * 可用区信息
 * @class
 */
export declare class ZoneInfo extends AbstractModel {
    Zone: string;
    ZoneName: string;
    ZoneId: string;
    ZoneState: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string;
        ZoneName: string;
        ZoneId: string;
        ZoneState: string;
    }): void;
}
/**
 * InquiryPriceModifyInstancesChargeType返回参数结构体
 * @class
 */
export declare class InquiryPriceModifyInstancesChargeTypeResponse extends AbstractModel {
    Price: Price;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price;
        RequestId: string;
    }): void;
}
/**
 * DescribeKeyPairs返回参数结构体
 * @class
 */
export declare class DescribeKeyPairsResponse extends AbstractModel {
    TotalCount: number;
    KeyPairSet: Array<KeyPair>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        KeyPairSet: Array<KeyPair>;
        RequestId: string;
    }): void;
}
/**
 * ResetInstancesPassword请求参数结构体
 * @class
 */
export declare class ResetInstancesPasswordRequest extends AbstractModel {
    InstanceIds: Array<string>;
    Password: string;
    UserName: string;
    ForceStop: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        Password: string;
        UserName: string;
        ForceStop: boolean;
    }): void;
}
/**
 * 描述了网络计费
 * @class
 */
export declare class InternetChargeTypeConfig extends AbstractModel {
    InternetChargeType: string;
    Description: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetChargeType: string;
        Description: string;
    }): void;
}
/**
 * DescribeImages返回参数结构体
 * @class
 */
export declare class DescribeImagesResponse extends AbstractModel {
    ImageSet: Array<Image>;
    TotalCount: number;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageSet: Array<Image>;
        TotalCount: number;
        RequestId: string;
    }): void;
}
/**
 * ModifyInstancesVpcAttribute返回参数结构体
 * @class
 */
export declare class ModifyInstancesVpcAttributeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * InquiryPriceResetInstancesType请求参数结构体
 * @class
 */
export declare class InquiryPriceResetInstancesTypeRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InstanceType: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InstanceType: string;
    }): void;
}
/**
 * DescribeInstancesOperationLimit请求参数结构体
 * @class
 */
export declare class DescribeInstancesOperationLimitRequest extends AbstractModel {
    InstanceIds: Array<string>;
    Operation: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        Operation: string;
    }): void;
}
/**
 * ModifyInstancesChargeType请求参数结构体
 * @class
 */
export declare class ModifyInstancesChargeTypeRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InstanceChargeType: string;
    InstanceChargePrepaid: InstanceChargePrepaid;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InstanceChargeType: string;
        InstanceChargePrepaid: InstanceChargePrepaid;
    }): void;
}
/**
 * DescribeInstanceVncUrl请求参数结构体
 * @class
 */
export declare class DescribeInstanceVncUrlRequest extends AbstractModel {
    InstanceId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string;
    }): void;
}
/**
 * ModifyImageSharePermission请求参数结构体
 * @class
 */
export declare class ModifyImageSharePermissionRequest extends AbstractModel {
    ImageId: string;
    AccountIds: Array<string>;
    Permission: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string;
        AccountIds: Array<string>;
        Permission: string;
    }): void;
}
/**
 * DisassociateInstancesKeyPairs返回参数结构体
 * @class
 */
export declare class DisassociateInstancesKeyPairsResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * InquiryPriceResizeInstanceDisks请求参数结构体
 * @class
 */
export declare class InquiryPriceResizeInstanceDisksRequest extends AbstractModel {
    InstanceId: string;
    DataDisks: Array<DataDisk>;
    ForceStop: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string;
        DataDisks: Array<DataDisk>;
        ForceStop: boolean;
    }): void;
}
/**
 * RunInstances返回参数结构体
 * @class
 */
export declare class RunInstancesResponse extends AbstractModel {
    InstanceIdSet: Array<string>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string>;
        RequestId: string;
    }): void;
}
/**
 * ResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
export declare class ResetInstancesInternetMaxBandwidthResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
export declare class ModifyInstancesAttributeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ModifyImageSharePermission返回参数结构体
 * @class
 */
export declare class ModifyImageSharePermissionResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * DescribeInstancesOperationLimit返回参数结构体
 * @class
 */
export declare class DescribeInstancesOperationLimitResponse extends AbstractModel {
    InstanceOperationLimitSet: Array<OperationCountLimit>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceOperationLimitSet: Array<OperationCountLimit>;
        RequestId: string;
    }): void;
}
/**
 * SyncImages返回参数结构体
 * @class
 */
export declare class SyncImagesResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * DescribeZoneInstanceConfigInfos返回参数结构体
 * @class
 */
export declare class DescribeZoneInstanceConfigInfosResponse extends AbstractModel {
    InstanceTypeQuotaSet: Array<InstanceTypeQuotaItem>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceTypeQuotaSet: Array<InstanceTypeQuotaItem>;
        RequestId: string;
    }): void;
}
/**
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
export declare class ModifyInstancesAttributeRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InstanceName: string;
    SecurityGroups: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InstanceName: string;
        SecurityGroups: Array<string>;
    }): void;
}
/**
 * RenewHosts请求参数结构体
 * @class
 */
export declare class RenewHostsRequest extends AbstractModel {
    HostIds: Array<string>;
    HostChargePrepaid: ChargePrepaid;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        HostIds: Array<string>;
        HostChargePrepaid: ChargePrepaid;
    }): void;
}
/**
 * DescribeZones请求参数结构体
 * @class
 */
export declare class DescribeZonesRequest extends AbstractModel {
    constructor();
    /**
     * @private
     */
    deserialize(params: {}): void;
}
/**
 * StartInstances请求参数结构体
 * @class
 */
export declare class StartInstancesRequest extends AbstractModel {
    InstanceIds: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
    }): void;
}
/**
 * 标签键值对
 * @class
 */
export declare class Tag extends AbstractModel {
    Key: string;
    Value: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Key: string;
        Value: string;
    }): void;
}
/**
 * DescribeInstanceInternetBandwidthConfigs返回参数结构体
 * @class
 */
export declare class DescribeInstanceInternetBandwidthConfigsResponse extends AbstractModel {
    InternetBandwidthConfigSet: Array<InternetBandwidthConfig>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetBandwidthConfigSet: Array<InternetBandwidthConfig>;
        RequestId: string;
    }): void;
}
/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 * @class
 */
export declare class Placement extends AbstractModel {
    Zone: string;
    ProjectId: number;
    HostIds: Array<string>;
    HostIps: Array<string>;
    HostId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string;
        ProjectId: number;
        HostIds: Array<string>;
        HostIps: Array<string>;
        HostId: string;
    }): void;
}
/**
 * DescribeDisasterRecoverGroups请求参数结构体
 * @class
 */
export declare class DescribeDisasterRecoverGroupsRequest extends AbstractModel {
    DisasterRecoverGroupIds: Array<string>;
    Name: string;
    Offset: number;
    Limit: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupIds: Array<string>;
        Name: string;
        Offset: number;
        Limit: number;
    }): void;
}
/**
 * SyncImages请求参数结构体
 * @class
 */
export declare class SyncImagesRequest extends AbstractModel {
    ImageIds: Array<string>;
    DestinationRegions: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageIds: Array<string>;
        DestinationRegions: Array<string>;
    }): void;
}
/**
 * DisassociateInstancesKeyPairs请求参数结构体
 * @class
 */
export declare class DisassociateInstancesKeyPairsRequest extends AbstractModel {
    InstanceIds: Array<string>;
    KeyIds: Array<string>;
    ForceStop: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        KeyIds: Array<string>;
        ForceStop: boolean;
    }): void;
}
/**
 * DescribeImageQuota请求参数结构体
 * @class
 */
export declare class DescribeImageQuotaRequest extends AbstractModel {
    constructor();
    /**
     * @private
     */
    deserialize(params: {}): void;
}
/**
 * DescribeInstanceFamilyConfigs返回参数结构体
 * @class
 */
export declare class DescribeInstanceFamilyConfigsResponse extends AbstractModel {
    InstanceFamilyConfigSet: Array<InstanceFamilyConfig>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceFamilyConfigSet: Array<InstanceFamilyConfig>;
        RequestId: string;
    }): void;
}
/**
 * CreateImage返回参数结构体
 * @class
 */
export declare class CreateImageResponse extends AbstractModel {
    ImageId: string;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string;
        RequestId: string;
    }): void;
}
/**
 * StopInstances返回参数结构体
 * @class
 */
export declare class StopInstancesResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * 竞价请求相关选项
 * @class
 */
export declare class InstanceMarketOptionsRequest extends AbstractModel {
    SpotOptions: SpotMarketOptions;
    MarketType: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SpotOptions: SpotMarketOptions;
        MarketType: string;
    }): void;
}
/**
 * InquiryPriceResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
export declare class InquiryPriceResetInstancesInternetMaxBandwidthRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InternetAccessible: InternetAccessible;
    StartTime: string;
    EndTime: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InternetAccessible: InternetAccessible;
        StartTime: string;
        EndTime: string;
    }): void;
}
/**
 * ResetInstancesPassword返回参数结构体
 * @class
 */
export declare class ResetInstancesPasswordResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * InquiryPriceRunInstances请求参数结构体
 * @class
 */
export declare class InquiryPriceRunInstancesRequest extends AbstractModel {
    Placement: Placement;
    ImageId: string;
    InstanceChargeType: string;
    InstanceChargePrepaid: InstanceChargePrepaid;
    InstanceType: string;
    SystemDisk: SystemDisk;
    DataDisks: Array<DataDisk>;
    VirtualPrivateCloud: VirtualPrivateCloud;
    InternetAccessible: InternetAccessible;
    InstanceCount: number;
    InstanceName: string;
    LoginSettings: LoginSettings;
    SecurityGroupIds: Array<string>;
    EnhancedService: EnhancedService;
    ClientToken: string;
    HostName: string;
    TagSpecification: Array<TagSpecification>;
    InstanceMarketOptions: InstanceMarketOptionsRequest;
    HpcClusterId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement;
        ImageId: string;
        InstanceChargeType: string;
        InstanceChargePrepaid: InstanceChargePrepaid;
        InstanceType: string;
        SystemDisk: SystemDisk;
        DataDisks: Array<DataDisk>;
        VirtualPrivateCloud: VirtualPrivateCloud;
        InternetAccessible: InternetAccessible;
        InstanceCount: number;
        InstanceName: string;
        LoginSettings: LoginSettings;
        SecurityGroupIds: Array<string>;
        EnhancedService: EnhancedService;
        ClientToken: string;
        HostName: string;
        TagSpecification: Array<TagSpecification>;
        InstanceMarketOptions: InstanceMarketOptionsRequest;
        HpcClusterId: string;
    }): void;
}
/**
 * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
 * @class
 */
export declare class Image extends AbstractModel {
    ImageId: string;
    OsName: string;
    ImageType: string;
    CreatedTime: string;
    ImageName: string;
    ImageDescription: string;
    ImageSize: number;
    Architecture: string;
    ImageState: string;
    Platform: string;
    ImageCreator: string;
    ImageSource: string;
    SyncPercent: number;
    IsSupportCloudinit: boolean;
    SnapshotSet: Array<Snapshot>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string;
        OsName: string;
        ImageType: string;
        CreatedTime: string;
        ImageName: string;
        ImageDescription: string;
        ImageSize: number;
        Architecture: string;
        ImageState: string;
        Platform: string;
        ImageCreator: string;
        ImageSource: string;
        SyncPercent: number;
        IsSupportCloudinit: boolean;
        SnapshotSet: Array<Snapshot>;
    }): void;
}
/**
 * DescribeDisasterRecoverGroupQuota返回参数结构体
 * @class
 */
export declare class DescribeDisasterRecoverGroupQuotaResponse extends AbstractModel {
    GroupQuota: number;
    CurrentNum: number;
    CvmInHostGroupQuota: number;
    CvmInSwGroupQuota: number;
    CvmInRackGroupQuota: number;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        GroupQuota: number;
        CurrentNum: number;
        CvmInHostGroupQuota: number;
        CvmInSwGroupQuota: number;
        CvmInRackGroupQuota: number;
        RequestId: string;
    }): void;
}
/**
 * DescribeRegions请求参数结构体
 * @class
 */
export declare class DescribeRegionsRequest extends AbstractModel {
    constructor();
    /**
     * @private
     */
    deserialize(params: {}): void;
}
/**
 * CreateDisasterRecoverGroup请求参数结构体
 * @class
 */
export declare class CreateDisasterRecoverGroupRequest extends AbstractModel {
    Name: string;
    Type: string;
    ClientToken: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Name: string;
        Type: string;
        ClientToken: string;
    }): void;
}
/**
 * DescribeReservedInstances返回参数结构体
 * @class
 */
export declare class DescribeReservedInstancesResponse extends AbstractModel {
    TotalCount: number;
    ReservedInstancesSet: Array<ReservedInstances>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        ReservedInstancesSet: Array<ReservedInstances>;
        RequestId: string;
    }): void;
}
/**
 * DescribeImportImageOs返回参数结构体
 * @class
 */
export declare class DescribeImportImageOsResponse extends AbstractModel {
    ImportImageOsListSupported: ImageOsList;
    ImportImageOsVersionSet: Array<OsVersion>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImportImageOsListSupported: ImageOsList;
        ImportImageOsVersionSet: Array<OsVersion>;
        RequestId: string;
    }): void;
}
/**
 * ModifyKeyPairAttribute返回参数结构体
 * @class
 */
export declare class ModifyKeyPairAttributeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * 描述了数据盘的信息
 * @class
 */
export declare class DataDisk extends AbstractModel {
    DiskSize: number;
    DiskType: string;
    DiskId: string;
    DeleteWithInstance: boolean;
    SnapshotId: string;
    Encrypt: boolean;
    KmsKeyId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DiskSize: number;
        DiskType: string;
        DiskId: string;
        DeleteWithInstance: boolean;
        SnapshotId: string;
        Encrypt: boolean;
        KmsKeyId: string;
    }): void;
}
/**
 * DescribeKeyPairs请求参数结构体
 * @class
 */
export declare class DescribeKeyPairsRequest extends AbstractModel {
    KeyIds: Array<string>;
    Filters: Array<Filter>;
    Offset: number;
    Limit: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyIds: Array<string>;
        Filters: Array<Filter>;
        Offset: number;
        Limit: number;
    }): void;
}
/**
 * 描述了单台实例操作次数限制
 * @class
 */
export declare class OperationCountLimit extends AbstractModel {
    Operation: string;
    InstanceId: string;
    CurrentCount: number;
    LimitCount: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Operation: string;
        InstanceId: string;
        CurrentCount: number;
        LimitCount: number;
    }): void;
}
/**
 * DeleteDisasterRecoverGroups返回参数结构体
 * @class
 */
export declare class DeleteDisasterRecoverGroupsResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * cdh实例详细信息
 * @class
 */
export declare class HostItem extends AbstractModel {
    Placement: Placement;
    HostId: string;
    HostType: string;
    HostName: string;
    HostChargeType: string;
    RenewFlag: string;
    CreatedTime: string;
    ExpiredTime: string;
    InstanceIds: Array<string>;
    HostState: string;
    HostIp: string;
    HostResource: HostResource;
    CageId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement;
        HostId: string;
        HostType: string;
        HostName: string;
        HostChargeType: string;
        RenewFlag: string;
        CreatedTime: string;
        ExpiredTime: string;
        InstanceIds: Array<string>;
        HostState: string;
        HostIp: string;
        HostResource: HostResource;
        CageId: string;
    }): void;
}
/**
 * 扩展数据
 * @class
 */
export declare class Externals extends AbstractModel {
    ReleaseAddress: boolean;
    UnsupportNetworks: Array<string>;
    StorageBlockAttr: StorageBlock;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ReleaseAddress: boolean;
        UnsupportNetworks: Array<string>;
        StorageBlockAttr: StorageBlock;
    }): void;
}
/**
 * InquiryPriceModifyInstancesChargeType请求参数结构体
 * @class
 */
export declare class InquiryPriceModifyInstancesChargeTypeRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InstanceChargeType: string;
    InstanceChargePrepaid: InstanceChargePrepaid;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InstanceChargeType: string;
        InstanceChargePrepaid: InstanceChargePrepaid;
    }): void;
}
/**
 * CreateImage请求参数结构体
 * @class
 */
export declare class CreateImageRequest extends AbstractModel {
    ImageName: string;
    InstanceId: string;
    ImageDescription: string;
    ForcePoweroff: string;
    Sysprep: string;
    DataDiskIds: Array<string>;
    SnapshotIds: Array<string>;
    DryRun: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageName: string;
        InstanceId: string;
        ImageDescription: string;
        ForcePoweroff: string;
        Sysprep: string;
        DataDiskIds: Array<string>;
        SnapshotIds: Array<string>;
        DryRun: boolean;
    }): void;
}
/**
 * 描述实例的信息
 * @class
 */
export declare class Instance extends AbstractModel {
    Placement: Placement;
    InstanceId: string;
    InstanceType: string;
    CPU: number;
    Memory: number;
    RestrictState: string;
    InstanceName: string;
    InstanceChargeType: string;
    SystemDisk: SystemDisk;
    DataDisks: Array<DataDisk>;
    PrivateIpAddresses: Array<string>;
    PublicIpAddresses: Array<string>;
    InternetAccessible: InternetAccessible;
    VirtualPrivateCloud: VirtualPrivateCloud;
    ImageId: string;
    RenewFlag: string;
    CreatedTime: string;
    ExpiredTime: string;
    OsName: string;
    SecurityGroupIds: Array<string>;
    LoginSettings: LoginSettings;
    InstanceState: string;
    Tags: Array<Tag>;
    StopChargingMode: string;
    Uuid: string;
    LatestOperation: string;
    LatestOperationState: string;
    LatestOperationRequestId: string;
    DisasterRecoverGroupId: string;
    IPv6Addresses: Array<string>;
    CamRoleName: string;
    HpcClusterId: string;
    RdmaIpAddresses: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement;
        InstanceId: string;
        InstanceType: string;
        CPU: number;
        Memory: number;
        RestrictState: string;
        InstanceName: string;
        InstanceChargeType: string;
        SystemDisk: SystemDisk;
        DataDisks: Array<DataDisk>;
        PrivateIpAddresses: Array<string>;
        PublicIpAddresses: Array<string>;
        InternetAccessible: InternetAccessible;
        VirtualPrivateCloud: VirtualPrivateCloud;
        ImageId: string;
        RenewFlag: string;
        CreatedTime: string;
        ExpiredTime: string;
        OsName: string;
        SecurityGroupIds: Array<string>;
        LoginSettings: LoginSettings;
        InstanceState: string;
        Tags: Array<Tag>;
        StopChargingMode: string;
        Uuid: string;
        LatestOperation: string;
        LatestOperationState: string;
        LatestOperationRequestId: string;
        DisasterRecoverGroupId: string;
        IPv6Addresses: Array<string>;
        CamRoleName: string;
        HpcClusterId: string;
        RdmaIpAddresses: Array<string>;
    }): void;
}
/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 * @class
 */
export declare class EnhancedService extends AbstractModel {
    SecurityService: RunSecurityServiceEnabled;
    MonitorService: RunMonitorServiceEnabled;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SecurityService: RunSecurityServiceEnabled;
        MonitorService: RunMonitorServiceEnabled;
    }): void;
}
/**
 * CreateKeyPair返回参数结构体
 * @class
 */
export declare class CreateKeyPairResponse extends AbstractModel {
    KeyPair: KeyPair;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyPair: KeyPair;
        RequestId: string;
    }): void;
}
/**
 * DescribeInstanceVncUrl返回参数结构体
 * @class
 */
export declare class DescribeInstanceVncUrlResponse extends AbstractModel {
    InstanceVncUrl: string;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceVncUrl: string;
        RequestId: string;
    }): void;
}
/**
 * DescribeReservedInstancesOfferings请求参数结构体
 * @class
 */
export declare class DescribeReservedInstancesOfferingsRequest extends AbstractModel {
    DryRun: boolean;
    Offset: number;
    Limit: number;
    MaxDuration: number;
    MinDuration: number;
    Filters: Array<Filter>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DryRun: boolean;
        Offset: number;
        Limit: number;
        MaxDuration: number;
        MinDuration: number;
        Filters: Array<Filter>;
    }): void;
}
/**
 * DescribeDisasterRecoverGroups返回参数结构体
 * @class
 */
export declare class DescribeDisasterRecoverGroupsResponse extends AbstractModel {
    DisasterRecoverGroupSet: Array<DisasterRecoverGroup>;
    TotalCount: number;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupSet: Array<DisasterRecoverGroup>;
        TotalCount: number;
        RequestId: string;
    }): void;
}
/**
 * 描述了 “云安全” 服务相关的信息
 * @class
 */
export declare class RunSecurityServiceEnabled extends AbstractModel {
    Enabled: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean;
    }): void;
}
/**
 * 定时任务
 * @class
 */
export declare class ActionTimer extends AbstractModel {
    Externals: Externals;
    TimerAction: string;
    ActionTime: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Externals: Externals;
        TimerAction: string;
        ActionTime: string;
    }): void;
}
/**
 * 创建资源实例时同时绑定的标签对说明
 * @class
 */
export declare class TagSpecification extends AbstractModel {
    ResourceType: string;
    Tags: Array<Tag>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ResourceType: string;
        Tags: Array<Tag>;
    }): void;
}
/**
 * ResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
export declare class ResetInstancesInternetMaxBandwidthRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InternetAccessible: InternetAccessible;
    StartTime: string;
    EndTime: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InternetAccessible: InternetAccessible;
        StartTime: string;
        EndTime: string;
    }): void;
}
/**
 * 描述实例的机型族配置信息
形如：{'InstanceFamilyName': '标准型S1', 'InstanceFamily': 'S1'}、{'InstanceFamilyName': '网络优化型N1', 'InstanceFamily': 'N1'}、{'InstanceFamilyName': '高IO型I1', 'InstanceFamily': 'I1'}等。
 * @class
 */
export declare class InstanceFamilyConfig extends AbstractModel {
    InstanceFamilyName: string;
    InstanceFamily: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceFamilyName: string;
        InstanceFamily: string;
    }): void;
}
/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
export declare class AssociateSecurityGroupsResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ImportImage请求参数结构体
 * @class
 */
export declare class ImportImageRequest extends AbstractModel {
    Architecture: string;
    OsType: string;
    OsVersion: string;
    ImageUrl: string;
    ImageName: string;
    ImageDescription: string;
    DryRun: boolean;
    Force: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Architecture: string;
        OsType: string;
        OsVersion: string;
        ImageUrl: string;
        ImageName: string;
        ImageDescription: string;
        DryRun: boolean;
        Force: boolean;
    }): void;
}
/**
 * 竞价相关选项
 * @class
 */
export declare class SpotMarketOptions extends AbstractModel {
    MaxPrice: string;
    SpotInstanceType: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        MaxPrice: string;
        SpotInstanceType: string;
    }): void;
}
/**
 * DescribeImportImageOs请求参数结构体
 * @class
 */
export declare class DescribeImportImageOsRequest extends AbstractModel {
    constructor();
    /**
     * @private
     */
    deserialize(params: {}): void;
}
/**
 * CreateKeyPair请求参数结构体
 * @class
 */
export declare class CreateKeyPairRequest extends AbstractModel {
    KeyName: string;
    ProjectId: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyName: string;
        ProjectId: number;
    }): void;
}
/**
 * 描述实例的状态。状态类型详见[实例状态表](/document/api/213/15753#InstanceStatus)
 * @class
 */
export declare class InstanceStatus extends AbstractModel {
    InstanceId: string;
    InstanceState: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string;
        InstanceState: string;
    }): void;
}
/**
 * InquiryPriceRenewInstances返回参数结构体
 * @class
 */
export declare class InquiryPriceRenewInstancesResponse extends AbstractModel {
    Price: Price;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price;
        RequestId: string;
    }): void;
}
/**
 * AllocateHosts返回参数结构体
 * @class
 */
export declare class AllocateHostsResponse extends AbstractModel {
    HostIdSet: Array<string>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        HostIdSet: Array<string>;
        RequestId: string;
    }): void;
}
/**
 * DescribeImageSharePermission请求参数结构体
 * @class
 */
export declare class DescribeImageSharePermissionRequest extends AbstractModel {
    ImageId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string;
    }): void;
}
/**
 * 容灾组信息
 * @class
 */
export declare class DisasterRecoverGroup extends AbstractModel {
    DisasterRecoverGroupId: string;
    Name: string;
    Type: string;
    CvmQuotaTotal: number;
    CurrentNum: number;
    InstanceIds: Array<string>;
    CreateTime: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupId: string;
        Name: string;
        Type: string;
        CvmQuotaTotal: number;
        CurrentNum: number;
        InstanceIds: Array<string>;
        CreateTime: string;
    }): void;
}
/**
 * InquiryPriceResetInstance返回参数结构体
 * @class
 */
export declare class InquiryPriceResetInstanceResponse extends AbstractModel {
    Price: Price;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price;
        RequestId: string;
    }): void;
}
/**
 * DescribeInstanceTypeConfigs请求参数结构体
 * @class
 */
export declare class DescribeInstanceTypeConfigsRequest extends AbstractModel {
    Filters: Array<Filter>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter>;
    }): void;
}
/**
 * DescribeImageSharePermission返回参数结构体
 * @class
 */
export declare class DescribeImageSharePermissionResponse extends AbstractModel {
    SharePermissionSet: Array<SharePermission>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SharePermissionSet: Array<SharePermission>;
        RequestId: string;
    }): void;
}
/**
 * ModifyHostsAttribute返回参数结构体
 * @class
 */
export declare class ModifyHostsAttributeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * DescribeDisasterRecoverGroupQuota请求参数结构体
 * @class
 */
export declare class DescribeDisasterRecoverGroupQuotaRequest extends AbstractModel {
    constructor();
    /**
     * @private
     */
    deserialize(params: {}): void;
}
/**
 * StartInstances返回参数结构体
 * @class
 */
export declare class StartInstancesResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ModifyInstancesVpcAttribute请求参数结构体
 * @class
 */
export declare class ModifyInstancesVpcAttributeRequest extends AbstractModel {
    InstanceIds: Array<string>;
    VirtualPrivateCloud: VirtualPrivateCloud;
    ForceStop: boolean;
    ReserveHostName: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        VirtualPrivateCloud: VirtualPrivateCloud;
        ForceStop: boolean;
        ReserveHostName: boolean;
    }): void;
}
/**
 * DescribeReservedInstances请求参数结构体
 * @class
 */
export declare class DescribeReservedInstancesRequest extends AbstractModel {
    DryRun: boolean;
    Offset: number;
    Limit: number;
    Filters: Array<Filter>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DryRun: boolean;
        Offset: number;
        Limit: number;
        Filters: Array<Filter>;
    }): void;
}
/**
 * DescribeInternetChargeTypeConfigs返回参数结构体
 * @class
 */
export declare class DescribeInternetChargeTypeConfigsResponse extends AbstractModel {
    InternetChargeTypeConfigSet: Array<InternetChargeTypeConfig>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetChargeTypeConfigSet: Array<InternetChargeTypeConfig>;
        RequestId: string;
    }): void;
}
/**
 * DescribeZoneInstanceConfigInfos请求参数结构体
 * @class
 */
export declare class DescribeZoneInstanceConfigInfosRequest extends AbstractModel {
    Filters: Array<Filter>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter>;
    }): void;
}
/**
 * DescribeZones返回参数结构体
 * @class
 */
export declare class DescribeZonesResponse extends AbstractModel {
    TotalCount: number;
    ZoneSet: Array<ZoneInfo>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        ZoneSet: Array<ZoneInfo>;
        RequestId: string;
    }): void;
}
/**
 * 描述了单项的价格信息
 * @class
 */
export declare class ItemPrice extends AbstractModel {
    UnitPrice: number;
    ChargeUnit: string;
    OriginalPrice: number;
    DiscountPrice: number;
    Discount: number;
    UnitPriceDiscount: number;
    UnitPriceSecondStep: number;
    UnitPriceDiscountSecondStep: number;
    UnitPriceThirdStep: number;
    UnitPriceDiscountThirdStep: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        UnitPrice: number;
        ChargeUnit: string;
        OriginalPrice: number;
        DiscountPrice: number;
        Discount: number;
        UnitPriceDiscount: number;
        UnitPriceSecondStep: number;
        UnitPriceDiscountSecondStep: number;
        UnitPriceThirdStep: number;
        UnitPriceDiscountThirdStep: number;
    }): void;
}
/**
 * 描述实例机型配额信息。
 * @class
 */
export declare class InstanceTypeQuotaItem extends AbstractModel {
    Zone: string;
    InstanceType: string;
    InstanceChargeType: string;
    NetworkCard: number;
    Externals: Externals;
    Cpu: number;
    Memory: number;
    InstanceFamily: string;
    TypeName: string;
    LocalDiskTypeList: Array<LocalDiskType>;
    Status: string;
    Price: ItemPrice;
    SoldOutReason: string;
    InstanceBandwidth: number;
    InstancePps: number;
    StorageBlockAmount: number;
    CpuType: string;
    Gpu: number;
    Fpga: number;
    Remark: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string;
        InstanceType: string;
        InstanceChargeType: string;
        NetworkCard: number;
        Externals: Externals;
        Cpu: number;
        Memory: number;
        InstanceFamily: string;
        TypeName: string;
        LocalDiskTypeList: Array<LocalDiskType>;
        Status: string;
        Price: ItemPrice;
        SoldOutReason: string;
        InstanceBandwidth: number;
        InstancePps: number;
        StorageBlockAmount: number;
        CpuType: string;
        Gpu: number;
        Fpga: number;
        Remark: string;
    }): void;
}
/**
 * 支持的操作系统类型，根据windows和Linux分类。
 * @class
 */
export declare class ImageOsList extends AbstractModel {
    Windows: Array<string>;
    Linux: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Windows: Array<string>;
        Linux: Array<string>;
    }): void;
}
/**
 * InquiryPriceRunInstances返回参数结构体
 * @class
 */
export declare class InquiryPriceRunInstancesResponse extends AbstractModel {
    Price: Price;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price;
        RequestId: string;
    }): void;
}
/**
 * DescribeHosts请求参数结构体
 * @class
 */
export declare class DescribeHostsRequest extends AbstractModel {
    Filters: Array<Filter>;
    Offset: number;
    Limit: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter>;
        Offset: number;
        Limit: number;
    }): void;
}
/**
 * ModifyInstancesRenewFlag返回参数结构体
 * @class
 */
export declare class ModifyInstancesRenewFlagResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * DescribeInstancesStatus请求参数结构体
 * @class
 */
export declare class DescribeInstancesStatusRequest extends AbstractModel {
    InstanceIds: Array<string>;
    Offset: number;
    Limit: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        Offset: number;
        Limit: number;
    }): void;
}
/**
 * InquiryPriceResizeInstanceDisks返回参数结构体
 * @class
 */
export declare class InquiryPriceResizeInstanceDisksResponse extends AbstractModel {
    Price: Price;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price;
        RequestId: string;
    }): void;
}
/**
 * TerminateInstances请求参数结构体
 * @class
 */
export declare class TerminateInstancesRequest extends AbstractModel {
    InstanceIds: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
    }): void;
}
/**
 * 镜像分享信息结构
 * @class
 */
export declare class SharePermission extends AbstractModel {
    CreatedTime: string;
    AccountId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        CreatedTime: string;
        AccountId: string;
    }): void;
}
/**
 * 描述用户已购买预留实例计费信息
 * @class
 */
export declare class ReservedInstances extends AbstractModel {
    ReservedInstancesId: string;
    InstanceType: string;
    Zone: string;
    StartTime: string;
    EndTime: string;
    Duration: number;
    InstanceCount: number;
    ProductDescription: string;
    State: string;
    CurrencyCode: string;
    OfferingType: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ReservedInstancesId: string;
        InstanceType: string;
        Zone: string;
        StartTime: string;
        EndTime: string;
        Duration: number;
        InstanceCount: number;
        ProductDescription: string;
        State: string;
        CurrencyCode: string;
        OfferingType: string;
    }): void;
}
/**
 * DeleteImages返回参数结构体
 * @class
 */
export declare class DeleteImagesResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ImportImage返回参数结构体
 * @class
 */
export declare class ImportImageResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ModifyDisasterRecoverGroupAttribute请求参数结构体
 * @class
 */
export declare class ModifyDisasterRecoverGroupAttributeRequest extends AbstractModel {
    DisasterRecoverGroupId: string;
    Name: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupId: string;
        Name: string;
    }): void;
}
/**
 * RebootInstances返回参数结构体
 * @class
 */
export declare class RebootInstancesResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * InquiryPriceResetInstancesType返回参数结构体
 * @class
 */
export declare class InquiryPriceResetInstancesTypeResponse extends AbstractModel {
    Price: Price;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price;
        RequestId: string;
    }): void;
}
/**
 * 描述可购买预留实例计费信息
 * @class
 */
export declare class ReservedInstancesOffering extends AbstractModel {
    Zone: string;
    CurrencyCode: string;
    Duration: number;
    FixedPrice: number;
    InstanceType: string;
    OfferingType: string;
    ReservedInstancesOfferingId: string;
    ProductDescription: string;
    UsagePrice: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string;
        CurrencyCode: string;
        Duration: number;
        FixedPrice: number;
        InstanceType: string;
        OfferingType: string;
        ReservedInstancesOfferingId: string;
        ProductDescription: string;
        UsagePrice: number;
    }): void;
}
/**
 * 操作系统支持的类型。
 * @class
 */
export declare class OsVersion extends AbstractModel {
    OsName: string;
    OsVersions: Array<string>;
    Architecture: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        OsName: string;
        OsVersions: Array<string>;
        Architecture: Array<string>;
    }): void;
}
/**
 * ModifyImageAttribute返回参数结构体
 * @class
 */
export declare class ModifyImageAttributeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * InquiryPriceRenewInstances请求参数结构体
 * @class
 */
export declare class InquiryPriceRenewInstancesRequest extends AbstractModel {
    InstanceIds: Array<string>;
    InstanceChargePrepaid: InstanceChargePrepaid;
    DryRun: boolean;
    RenewPortableDataDisk: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        InstanceChargePrepaid: InstanceChargePrepaid;
        DryRun: boolean;
        RenewPortableDataDisk: boolean;
    }): void;
}
/**
 * DescribeInstances请求参数结构体
 * @class
 */
export declare class DescribeInstancesRequest extends AbstractModel {
    InstanceIds: Array<string>;
    Filters: Array<Filter>;
    Offset: number;
    Limit: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        Filters: Array<Filter>;
        Offset: number;
        Limit: number;
    }): void;
}
/**
 * 地域信息
 * @class
 */
export declare class RegionInfo extends AbstractModel {
    Region: string;
    RegionName: string;
    RegionState: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Region: string;
        RegionName: string;
        RegionState: string;
    }): void;
}
/**
 * StopInstances请求参数结构体
 * @class
 */
export declare class StopInstancesRequest extends AbstractModel {
    InstanceIds: Array<string>;
    ForceStop: boolean;
    StopType: string;
    StoppedMode: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        ForceStop: boolean;
        StopType: string;
        StoppedMode: string;
    }): void;
}
/**
 * DescribeInternetChargeTypeConfigs请求参数结构体
 * @class
 */
export declare class DescribeInternetChargeTypeConfigsRequest extends AbstractModel {
    constructor();
    /**
     * @private
     */
    deserialize(params: {}): void;
}
/**
 * DescribeImages请求参数结构体
 * @class
 */
export declare class DescribeImagesRequest extends AbstractModel {
    ImageIds: Array<string>;
    Filters: Array<Filter>;
    Offset: number;
    Limit: number;
    InstanceType: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageIds: Array<string>;
        Filters: Array<Filter>;
        Offset: number;
        Limit: number;
        InstanceType: string;
    }): void;
}
/**
 * ModifyImageAttribute请求参数结构体
 * @class
 */
export declare class ModifyImageAttributeRequest extends AbstractModel {
    ImageId: string;
    ImageName: string;
    ImageDescription: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string;
        ImageName: string;
        ImageDescription: string;
    }): void;
}
/**
 * ResizeInstanceDisks返回参数结构体
 * @class
 */
export declare class ResizeInstanceDisksResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * ModifyInstancesRenewFlag请求参数结构体
 * @class
 */
export declare class ModifyInstancesRenewFlagRequest extends AbstractModel {
    InstanceIds: Array<string>;
    RenewFlag: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string>;
        RenewFlag: string;
    }): void;
}
/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
export declare class DisassociateSecurityGroupsRequest extends AbstractModel {
    SecurityGroupIds: Array<string>;
    InstanceIds: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SecurityGroupIds: Array<string>;
        InstanceIds: Array<string>;
    }): void;
}
/**
 * ModifyHostsAttribute请求参数结构体
 * @class
 */
export declare class ModifyHostsAttributeRequest extends AbstractModel {
    HostIds: Array<string>;
    HostName: string;
    RenewFlag: string;
    ProjectId: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        HostIds: Array<string>;
        HostName: string;
        RenewFlag: string;
        ProjectId: number;
    }): void;
}
/**
 * ImportKeyPair请求参数结构体
 * @class
 */
export declare class ImportKeyPairRequest extends AbstractModel {
    KeyName: string;
    ProjectId: number;
    PublicKey: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyName: string;
        ProjectId: number;
        PublicKey: string;
    }): void;
}
/**
 * 描述密钥对信息
 * @class
 */
export declare class KeyPair extends AbstractModel {
    KeyId: string;
    KeyName: string;
    ProjectId: number;
    Description: string;
    PublicKey: string;
    PrivateKey: string;
    AssociatedInstanceIds: Array<string>;
    CreatedTime: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyId: string;
        KeyName: string;
        ProjectId: number;
        Description: string;
        PublicKey: string;
        PrivateKey: string;
        AssociatedInstanceIds: Array<string>;
        CreatedTime: string;
    }): void;
}
/**
 * DescribeReservedInstancesOfferings返回参数结构体
 * @class
 */
export declare class DescribeReservedInstancesOfferingsResponse extends AbstractModel {
    TotalCount: number;
    ReservedInstancesOfferingsSet: Array<ReservedInstancesOffering>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number;
        ReservedInstancesOfferingsSet: Array<ReservedInstancesOffering>;
        RequestId: string;
    }): void;
}
/**
 * RenewInstances返回参数结构体
 * @class
 */
export declare class RenewInstancesResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * 描述了 “云监控” 服务相关的信息
 * @class
 */
export declare class RunMonitorServiceEnabled extends AbstractModel {
    Enabled: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean;
    }): void;
}
/**
 * ResetInstance返回参数结构体
 * @class
 */
export declare class ResetInstanceResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
 * @class
 */
export declare class Filter extends AbstractModel {
    Name: string;
    Values: Array<string>;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Name: string;
        Values: Array<string>;
    }): void;
}
/**
 * 描述了VPC相关信息，包括子网，IP信息等
 * @class
 */
export declare class VirtualPrivateCloud extends AbstractModel {
    VpcId: string;
    SubnetId: string;
    AsVpcGateway: boolean;
    PrivateIpAddresses: Array<string>;
    Ipv6AddressCount: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        VpcId: string;
        SubnetId: string;
        AsVpcGateway: boolean;
        PrivateIpAddresses: Array<string>;
        Ipv6AddressCount: number;
    }): void;
}
/**
 * 描述了按带宽计费的相关信息
 * @class
 */
export declare class InternetBandwidthConfig extends AbstractModel {
    StartTime: string;
    EndTime: string;
    InternetAccessible: InternetAccessible;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        StartTime: string;
        EndTime: string;
        InternetAccessible: InternetAccessible;
    }): void;
}
/**
 * ModifyDisasterRecoverGroupAttribute返回参数结构体
 * @class
 */
export declare class ModifyDisasterRecoverGroupAttributeResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * DescribeInstanceTypeConfigs返回参数结构体
 * @class
 */
export declare class DescribeInstanceTypeConfigsResponse extends AbstractModel {
    InstanceTypeConfigSet: Array<InstanceTypeConfig>;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceTypeConfigSet: Array<InstanceTypeConfig>;
        RequestId: string;
    }): void;
}
/**
 * ResizeInstanceDisks请求参数结构体
 * @class
 */
export declare class ResizeInstanceDisksRequest extends AbstractModel {
    InstanceId: string;
    DataDisks: Array<DataDisk>;
    ForceStop: boolean;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string;
        DataDisks: Array<DataDisk>;
        ForceStop: boolean;
    }): void;
}
/**
 * DescribeInstanceFamilyConfigs请求参数结构体
 * @class
 */
export declare class DescribeInstanceFamilyConfigsRequest extends AbstractModel {
    constructor();
    /**
     * @private
     */
    deserialize(params: {}): void;
}
/**
 * DescribeInstanceInternetBandwidthConfigs请求参数结构体
 * @class
 */
export declare class DescribeInstanceInternetBandwidthConfigsRequest extends AbstractModel {
    InstanceId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string;
    }): void;
}
/**
 * PurchaseReservedInstancesOffering返回参数结构体
 * @class
 */
export declare class PurchaseReservedInstancesOfferingResponse extends AbstractModel {
    ReservedInstanceId: string;
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ReservedInstanceId: string;
        RequestId: string;
    }): void;
}
/**
 * HDD的本地存储信息
 * @class
 */
export declare class StorageBlock extends AbstractModel {
    Type: string;
    MinSize: number;
    MaxSize: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Type: string;
        MinSize: number;
        MaxSize: number;
    }): void;
}
/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
export declare class InternetAccessible extends AbstractModel {
    InternetChargeType: string;
    InternetMaxBandwidthOut: number;
    PublicIpAssigned: boolean;
    BandwidthPackageId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetChargeType: string;
        InternetMaxBandwidthOut: number;
        PublicIpAssigned: boolean;
        BandwidthPackageId: string;
    }): void;
}
/**
 * RenewHosts返回参数结构体
 * @class
 */
export declare class RenewHostsResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
export declare class DisassociateSecurityGroupsResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * 描述镜像关联的快照信息
 * @class
 */
export declare class Snapshot extends AbstractModel {
    SnapshotId: string;
    DiskUsage: string;
    DiskSize: number;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SnapshotId: string;
        DiskUsage: string;
        DiskSize: number;
    }): void;
}
/**
 * ModifyInstancesProject返回参数结构体
 * @class
 */
export declare class ModifyInstancesProjectResponse extends AbstractModel {
    RequestId: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string;
    }): void;
}
/**
 * 描述了实例的计费模式
 * @class
 */
export declare class InstanceChargePrepaid extends AbstractModel {
    Period: number;
    RenewFlag: string;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Period: number;
        RenewFlag: string;
    }): void;
}
/**
 * 价格
 * @class
 */
export declare class Price extends AbstractModel {
    InstancePrice: ItemPrice;
    BandwidthPrice: ItemPrice;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstancePrice: ItemPrice;
        BandwidthPrice: ItemPrice;
    }): void;
}
