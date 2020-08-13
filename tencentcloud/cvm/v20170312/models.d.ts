import { AbstractModel } from '../../common/abstract_model';
/**
 * 描述预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。
 * @class
 */
declare class ChargePrepaid extends AbstractModel {
    Period: number | null;
    RenewFlag: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Period: number | null;
        RenewFlag: string | null;
    }): void;
}
/**
 * 本地磁盘规格
 * @class
 */
declare class LocalDiskType extends AbstractModel {
    Type: string | null;
    PartitionType: string | null;
    MinSize: number | null;
    MaxSize: number | null;
    Required: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        PartitionType: string | null;
        MinSize: number | null;
        MaxSize: number | null;
        Required: string | null;
    }): void;
}
/**
 * AssociateInstancesKeyPairs返回参数结构体
 * @class
 */
declare class AssociateInstancesKeyPairsResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * RenewInstances请求参数结构体
 * @class
 */
declare class RenewInstancesRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InstanceChargePrepaid: InstanceChargePrepaid | null;
    RenewPortableDataDisk: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
        RenewPortableDataDisk: boolean | null;
    }): void;
}
/**
 * DescribeImageQuota返回参数结构体
 * @class
 */
declare class DescribeImageQuotaResponse extends AbstractModel {
    ImageNumQuota: number | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageNumQuota: number | null;
        RequestId: string | null;
    }): void;
}
/**
 * ModifyInstancesProject请求参数结构体
 * @class
 */
declare class ModifyInstancesProjectRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    ProjectId: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        ProjectId: number | null;
    }): void;
}
/**
 * ResetInstancesType返回参数结构体
 * @class
 */
declare class ResetInstancesTypeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * cdh实例的资源信息
 * @class
 */
declare class HostResource extends AbstractModel {
    CpuTotal: number | null;
    CpuAvailable: number | null;
    MemTotal: number | null;
    MemAvailable: number | null;
    DiskTotal: number | null;
    DiskAvailable: number | null;
    DiskType: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        CpuTotal: number | null;
        CpuAvailable: number | null;
        MemTotal: number | null;
        MemAvailable: number | null;
        DiskTotal: number | null;
        DiskAvailable: number | null;
        DiskType: string | null;
    }): void;
}
/**
 * DeleteDisasterRecoverGroups请求参数结构体
 * @class
 */
declare class DeleteDisasterRecoverGroupsRequest extends AbstractModel {
    DisasterRecoverGroupIds: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupIds: Array<string> | null;
    }): void;
}
/**
 * DeleteKeyPairs返回参数结构体
 * @class
 */
declare class DeleteKeyPairsResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * TerminateInstances返回参数结构体
 * @class
 */
declare class TerminateInstancesResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ModifyInstancesChargeType返回参数结构体
 * @class
 */
declare class ModifyInstancesChargeTypeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * CreateDisasterRecoverGroup返回参数结构体
 * @class
 */
declare class CreateDisasterRecoverGroupResponse extends AbstractModel {
    DisasterRecoverGroupId: string | null;
    Type: string | null;
    Name: string | null;
    CvmQuotaTotal: number | null;
    CurrentNum: number | null;
    CreateTime: string | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupId: string | null;
        Type: string | null;
        Name: string | null;
        CvmQuotaTotal: number | null;
        CurrentNum: number | null;
        CreateTime: string | null;
        RequestId: string | null;
    }): void;
}
/**
 * InquiryPriceResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
declare class InquiryPriceResetInstancesInternetMaxBandwidthResponse extends AbstractModel {
    Price: Price | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void;
}
/**
 * ModifyKeyPairAttribute请求参数结构体
 * @class
 */
declare class ModifyKeyPairAttributeRequest extends AbstractModel {
    KeyId: string | null;
    KeyName: string | null;
    Description: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyId: string | null;
        KeyName: string | null;
        Description: string | null;
    }): void;
}
/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
declare class AssociateSecurityGroupsRequest extends AbstractModel {
    SecurityGroupIds: Array<string> | null;
    InstanceIds: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SecurityGroupIds: Array<string> | null;
        InstanceIds: Array<string> | null;
    }): void;
}
/**
 * ResetInstancesType请求参数结构体
 * @class
 */
declare class ResetInstancesTypeRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InstanceType: string | null;
    ForceStop: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceType: string | null;
        ForceStop: boolean | null;
    }): void;
}
/**
 * InquiryPriceResetInstance请求参数结构体
 * @class
 */
declare class InquiryPriceResetInstanceRequest extends AbstractModel {
    InstanceId: string | null;
    ImageId: string | null;
    SystemDisk: SystemDisk | null;
    LoginSettings: LoginSettings | null;
    EnhancedService: EnhancedService | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        ImageId: string | null;
        SystemDisk: SystemDisk | null;
        LoginSettings: LoginSettings | null;
        EnhancedService: EnhancedService | null;
    }): void;
}
/**
 * RunInstances请求参数结构体
 * @class
 */
declare class RunInstancesRequest extends AbstractModel {
    Placement: Placement | null;
    ImageId: string | null;
    InstanceChargeType: string | null;
    InstanceChargePrepaid: InstanceChargePrepaid | null;
    InstanceType: string | null;
    SystemDisk: SystemDisk | null;
    DataDisks: Array<DataDisk> | null;
    VirtualPrivateCloud: VirtualPrivateCloud | null;
    InternetAccessible: InternetAccessible | null;
    InstanceCount: number | null;
    InstanceName: string | null;
    LoginSettings: LoginSettings | null;
    SecurityGroupIds: Array<string> | null;
    EnhancedService: EnhancedService | null;
    ClientToken: string | null;
    HostName: string | null;
    ActionTimer: ActionTimer | null;
    DisasterRecoverGroupIds: Array<string> | null;
    TagSpecification: Array<TagSpecification> | null;
    InstanceMarketOptions: InstanceMarketOptionsRequest | null;
    UserData: string | null;
    DryRun: boolean | null;
    HpcClusterId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement | null;
        ImageId: string | null;
        InstanceChargeType: string | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
        InstanceType: string | null;
        SystemDisk: SystemDisk | null;
        DataDisks: Array<DataDisk> | null;
        VirtualPrivateCloud: VirtualPrivateCloud | null;
        InternetAccessible: InternetAccessible | null;
        InstanceCount: number | null;
        InstanceName: string | null;
        LoginSettings: LoginSettings | null;
        SecurityGroupIds: Array<string> | null;
        EnhancedService: EnhancedService | null;
        ClientToken: string | null;
        HostName: string | null;
        ActionTimer: ActionTimer | null;
        DisasterRecoverGroupIds: Array<string> | null;
        TagSpecification: Array<TagSpecification> | null;
        InstanceMarketOptions: InstanceMarketOptionsRequest | null;
        UserData: string | null;
        DryRun: boolean | null;
        HpcClusterId: string | null;
    }): void;
}
/**
 * DeleteImages请求参数结构体
 * @class
 */
declare class DeleteImagesRequest extends AbstractModel {
    ImageIds: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageIds: Array<string> | null;
    }): void;
}
/**
 * DescribeInstances返回参数结构体
 * @class
 */
declare class DescribeInstancesResponse extends AbstractModel {
    TotalCount: number | null;
    InstanceSet: Array<Instance> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        InstanceSet: Array<Instance> | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeHosts返回参数结构体
 * @class
 */
declare class DescribeHostsResponse extends AbstractModel {
    TotalCount: number | null;
    HostSet: Array<HostItem> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        HostSet: Array<HostItem> | null;
        RequestId: string | null;
    }): void;
}
/**
 * DeleteKeyPairs请求参数结构体
 * @class
 */
declare class DeleteKeyPairsRequest extends AbstractModel {
    KeyIds: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyIds: Array<string> | null;
    }): void;
}
/**
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
declare class SystemDisk extends AbstractModel {
    DiskType: string | null;
    DiskId: string | null;
    DiskSize: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DiskType: string | null;
        DiskId: string | null;
        DiskSize: number | null;
    }): void;
}
/**
 * ResetInstance请求参数结构体
 * @class
 */
declare class ResetInstanceRequest extends AbstractModel {
    InstanceId: string | null;
    ImageId: string | null;
    SystemDisk: SystemDisk | null;
    LoginSettings: LoginSettings | null;
    EnhancedService: EnhancedService | null;
    HostName: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        ImageId: string | null;
        SystemDisk: SystemDisk | null;
        LoginSettings: LoginSettings | null;
        EnhancedService: EnhancedService | null;
        HostName: string | null;
    }): void;
}
/**
 * 描述实例机型配置信息
 * @class
 */
declare class InstanceTypeConfig extends AbstractModel {
    Zone: string | null;
    InstanceType: string | null;
    InstanceFamily: string | null;
    GPU: number | null;
    CPU: number | null;
    Memory: number | null;
    FPGA: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        InstanceType: string | null;
        InstanceFamily: string | null;
        GPU: number | null;
        CPU: number | null;
        Memory: number | null;
        FPGA: number | null;
    }): void;
}
/**
 * AllocateHosts请求参数结构体
 * @class
 */
declare class AllocateHostsRequest extends AbstractModel {
    Placement: Placement | null;
    ClientToken: string | null;
    HostChargePrepaid: ChargePrepaid | null;
    HostChargeType: string | null;
    HostType: string | null;
    HostCount: number | null;
    TagSpecification: Array<TagSpecification> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement | null;
        ClientToken: string | null;
        HostChargePrepaid: ChargePrepaid | null;
        HostChargeType: string | null;
        HostType: string | null;
        HostCount: number | null;
        TagSpecification: Array<TagSpecification> | null;
    }): void;
}
/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
declare class LoginSettings extends AbstractModel {
    Password: string | null;
    KeyIds: Array<string> | null;
    KeepImageLogin: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Password: string | null;
        KeyIds: Array<string> | null;
        KeepImageLogin: string | null;
    }): void;
}
/**
 * DescribeRegions返回参数结构体
 * @class
 */
declare class DescribeRegionsResponse extends AbstractModel {
    TotalCount: number | null;
    RegionSet: Array<RegionInfo> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        RegionSet: Array<RegionInfo> | null;
        RequestId: string | null;
    }): void;
}
/**
 * PurchaseReservedInstancesOffering请求参数结构体
 * @class
 */
declare class PurchaseReservedInstancesOfferingRequest extends AbstractModel {
    InstanceCount: number | null;
    ReservedInstancesOfferingId: string | null;
    DryRun: boolean | null;
    ClientToken: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceCount: number | null;
        ReservedInstancesOfferingId: string | null;
        DryRun: boolean | null;
        ClientToken: string | null;
    }): void;
}
/**
 * RebootInstances请求参数结构体
 * @class
 */
declare class RebootInstancesRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    ForceReboot: boolean | null;
    StopType: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        ForceReboot: boolean | null;
        StopType: string | null;
    }): void;
}
/**
 * AssociateInstancesKeyPairs请求参数结构体
 * @class
 */
declare class AssociateInstancesKeyPairsRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    KeyIds: Array<string> | null;
    ForceStop: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        KeyIds: Array<string> | null;
        ForceStop: boolean | null;
    }): void;
}
/**
 * ImportKeyPair返回参数结构体
 * @class
 */
declare class ImportKeyPairResponse extends AbstractModel {
    KeyId: string | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyId: string | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeInstancesStatus返回参数结构体
 * @class
 */
declare class DescribeInstancesStatusResponse extends AbstractModel {
    TotalCount: number | null;
    InstanceStatusSet: Array<InstanceStatus> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        InstanceStatusSet: Array<InstanceStatus> | null;
        RequestId: string | null;
    }): void;
}
/**
 * 可用区信息
 * @class
 */
declare class ZoneInfo extends AbstractModel {
    Zone: string | null;
    ZoneName: string | null;
    ZoneId: string | null;
    ZoneState: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        ZoneName: string | null;
        ZoneId: string | null;
        ZoneState: string | null;
    }): void;
}
/**
 * InquiryPriceModifyInstancesChargeType返回参数结构体
 * @class
 */
declare class InquiryPriceModifyInstancesChargeTypeResponse extends AbstractModel {
    Price: Price | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeKeyPairs返回参数结构体
 * @class
 */
declare class DescribeKeyPairsResponse extends AbstractModel {
    TotalCount: number | null;
    KeyPairSet: Array<KeyPair> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        KeyPairSet: Array<KeyPair> | null;
        RequestId: string | null;
    }): void;
}
/**
 * ResetInstancesPassword请求参数结构体
 * @class
 */
declare class ResetInstancesPasswordRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    Password: string | null;
    UserName: string | null;
    ForceStop: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        Password: string | null;
        UserName: string | null;
        ForceStop: boolean | null;
    }): void;
}
/**
 * 描述了网络计费
 * @class
 */
declare class InternetChargeTypeConfig extends AbstractModel {
    InternetChargeType: string | null;
    Description: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetChargeType: string | null;
        Description: string | null;
    }): void;
}
/**
 * DescribeImages返回参数结构体
 * @class
 */
declare class DescribeImagesResponse extends AbstractModel {
    ImageSet: Array<Image> | null;
    TotalCount: number | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageSet: Array<Image> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void;
}
/**
 * ModifyInstancesVpcAttribute返回参数结构体
 * @class
 */
declare class ModifyInstancesVpcAttributeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * InquiryPriceResetInstancesType请求参数结构体
 * @class
 */
declare class InquiryPriceResetInstancesTypeRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InstanceType: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceType: string | null;
    }): void;
}
/**
 * DescribeInstancesOperationLimit请求参数结构体
 * @class
 */
declare class DescribeInstancesOperationLimitRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    Operation: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        Operation: string | null;
    }): void;
}
/**
 * ModifyInstancesChargeType请求参数结构体
 * @class
 */
declare class ModifyInstancesChargeTypeRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InstanceChargeType: string | null;
    InstanceChargePrepaid: InstanceChargePrepaid | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceChargeType: string | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
    }): void;
}
/**
 * DescribeInstanceVncUrl请求参数结构体
 * @class
 */
declare class DescribeInstanceVncUrlRequest extends AbstractModel {
    InstanceId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
    }): void;
}
/**
 * ModifyImageSharePermission请求参数结构体
 * @class
 */
declare class ModifyImageSharePermissionRequest extends AbstractModel {
    ImageId: string | null;
    AccountIds: Array<string> | null;
    Permission: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        AccountIds: Array<string> | null;
        Permission: string | null;
    }): void;
}
/**
 * DisassociateInstancesKeyPairs返回参数结构体
 * @class
 */
declare class DisassociateInstancesKeyPairsResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * InquiryPriceResizeInstanceDisks请求参数结构体
 * @class
 */
declare class InquiryPriceResizeInstanceDisksRequest extends AbstractModel {
    InstanceId: string | null;
    DataDisks: Array<DataDisk> | null;
    ForceStop: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        DataDisks: Array<DataDisk> | null;
        ForceStop: boolean | null;
    }): void;
}
/**
 * RunInstances返回参数结构体
 * @class
 */
declare class RunInstancesResponse extends AbstractModel {
    InstanceIdSet: Array<string> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIdSet: Array<string> | null;
        RequestId: string | null;
    }): void;
}
/**
 * ResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
declare class ResetInstancesInternetMaxBandwidthResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
declare class ModifyInstancesAttributeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ModifyImageSharePermission返回参数结构体
 * @class
 */
declare class ModifyImageSharePermissionResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * DescribeInstancesOperationLimit返回参数结构体
 * @class
 */
declare class DescribeInstancesOperationLimitResponse extends AbstractModel {
    InstanceOperationLimitSet: Array<OperationCountLimit> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceOperationLimitSet: Array<OperationCountLimit> | null;
        RequestId: string | null;
    }): void;
}
/**
 * SyncImages返回参数结构体
 * @class
 */
declare class SyncImagesResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * DescribeZoneInstanceConfigInfos返回参数结构体
 * @class
 */
declare class DescribeZoneInstanceConfigInfosResponse extends AbstractModel {
    InstanceTypeQuotaSet: Array<InstanceTypeQuotaItem> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceTypeQuotaSet: Array<InstanceTypeQuotaItem> | null;
        RequestId: string | null;
    }): void;
}
/**
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
declare class ModifyInstancesAttributeRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InstanceName: string | null;
    SecurityGroups: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceName: string | null;
        SecurityGroups: Array<string> | null;
    }): void;
}
/**
 * RenewHosts请求参数结构体
 * @class
 */
declare class RenewHostsRequest extends AbstractModel {
    HostIds: Array<string> | null;
    HostChargePrepaid: ChargePrepaid | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        HostIds: Array<string> | null;
        HostChargePrepaid: ChargePrepaid | null;
    }): void;
}
/**
 * DescribeZones请求参数结构体
 * @class
 */
declare class DescribeZonesRequest extends AbstractModel {
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
declare class StartInstancesRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
    }): void;
}
/**
 * 标签键值对
 * @class
 */
declare class Tag extends AbstractModel {
    Key: string | null;
    Value: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Key: string | null;
        Value: string | null;
    }): void;
}
/**
 * DescribeInstanceInternetBandwidthConfigs返回参数结构体
 * @class
 */
declare class DescribeInstanceInternetBandwidthConfigsResponse extends AbstractModel {
    InternetBandwidthConfigSet: Array<InternetBandwidthConfig> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetBandwidthConfigSet: Array<InternetBandwidthConfig> | null;
        RequestId: string | null;
    }): void;
}
/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 * @class
 */
declare class Placement extends AbstractModel {
    Zone: string | null;
    ProjectId: number | null;
    HostIds: Array<string> | null;
    HostIps: Array<string> | null;
    HostId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        ProjectId: number | null;
        HostIds: Array<string> | null;
        HostIps: Array<string> | null;
        HostId: string | null;
    }): void;
}
/**
 * DescribeDisasterRecoverGroups请求参数结构体
 * @class
 */
declare class DescribeDisasterRecoverGroupsRequest extends AbstractModel {
    DisasterRecoverGroupIds: Array<string> | null;
    Name: string | null;
    Offset: number | null;
    Limit: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupIds: Array<string> | null;
        Name: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void;
}
/**
 * SyncImages请求参数结构体
 * @class
 */
declare class SyncImagesRequest extends AbstractModel {
    ImageIds: Array<string> | null;
    DestinationRegions: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageIds: Array<string> | null;
        DestinationRegions: Array<string> | null;
    }): void;
}
/**
 * DisassociateInstancesKeyPairs请求参数结构体
 * @class
 */
declare class DisassociateInstancesKeyPairsRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    KeyIds: Array<string> | null;
    ForceStop: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        KeyIds: Array<string> | null;
        ForceStop: boolean | null;
    }): void;
}
/**
 * DescribeImageQuota请求参数结构体
 * @class
 */
declare class DescribeImageQuotaRequest extends AbstractModel {
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
declare class DescribeInstanceFamilyConfigsResponse extends AbstractModel {
    InstanceFamilyConfigSet: Array<InstanceFamilyConfig> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceFamilyConfigSet: Array<InstanceFamilyConfig> | null;
        RequestId: string | null;
    }): void;
}
/**
 * CreateImage返回参数结构体
 * @class
 */
declare class CreateImageResponse extends AbstractModel {
    ImageId: string | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        RequestId: string | null;
    }): void;
}
/**
 * StopInstances返回参数结构体
 * @class
 */
declare class StopInstancesResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * 竞价请求相关选项
 * @class
 */
declare class InstanceMarketOptionsRequest extends AbstractModel {
    SpotOptions: SpotMarketOptions | null;
    MarketType: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SpotOptions: SpotMarketOptions | null;
        MarketType: string | null;
    }): void;
}
/**
 * InquiryPriceResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
declare class InquiryPriceResetInstancesInternetMaxBandwidthRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InternetAccessible: InternetAccessible | null;
    StartTime: string | null;
    EndTime: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InternetAccessible: InternetAccessible | null;
        StartTime: string | null;
        EndTime: string | null;
    }): void;
}
/**
 * ResetInstancesPassword返回参数结构体
 * @class
 */
declare class ResetInstancesPasswordResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * InquiryPriceRunInstances请求参数结构体
 * @class
 */
declare class InquiryPriceRunInstancesRequest extends AbstractModel {
    Placement: Placement | null;
    ImageId: string | null;
    InstanceChargeType: string | null;
    InstanceChargePrepaid: InstanceChargePrepaid | null;
    InstanceType: string | null;
    SystemDisk: SystemDisk | null;
    DataDisks: Array<DataDisk> | null;
    VirtualPrivateCloud: VirtualPrivateCloud | null;
    InternetAccessible: InternetAccessible | null;
    InstanceCount: number | null;
    InstanceName: string | null;
    LoginSettings: LoginSettings | null;
    SecurityGroupIds: Array<string> | null;
    EnhancedService: EnhancedService | null;
    ClientToken: string | null;
    HostName: string | null;
    TagSpecification: Array<TagSpecification> | null;
    InstanceMarketOptions: InstanceMarketOptionsRequest | null;
    HpcClusterId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement | null;
        ImageId: string | null;
        InstanceChargeType: string | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
        InstanceType: string | null;
        SystemDisk: SystemDisk | null;
        DataDisks: Array<DataDisk> | null;
        VirtualPrivateCloud: VirtualPrivateCloud | null;
        InternetAccessible: InternetAccessible | null;
        InstanceCount: number | null;
        InstanceName: string | null;
        LoginSettings: LoginSettings | null;
        SecurityGroupIds: Array<string> | null;
        EnhancedService: EnhancedService | null;
        ClientToken: string | null;
        HostName: string | null;
        TagSpecification: Array<TagSpecification> | null;
        InstanceMarketOptions: InstanceMarketOptionsRequest | null;
        HpcClusterId: string | null;
    }): void;
}
/**
 * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
 * @class
 */
declare class Image extends AbstractModel {
    ImageId: string | null;
    OsName: string | null;
    ImageType: string | null;
    CreatedTime: string | null;
    ImageName: string | null;
    ImageDescription: string | null;
    ImageSize: number | null;
    Architecture: string | null;
    ImageState: string | null;
    Platform: string | null;
    ImageCreator: string | null;
    ImageSource: string | null;
    SyncPercent: number | null;
    IsSupportCloudinit: boolean | null;
    SnapshotSet: Array<Snapshot> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        OsName: string | null;
        ImageType: string | null;
        CreatedTime: string | null;
        ImageName: string | null;
        ImageDescription: string | null;
        ImageSize: number | null;
        Architecture: string | null;
        ImageState: string | null;
        Platform: string | null;
        ImageCreator: string | null;
        ImageSource: string | null;
        SyncPercent: number | null;
        IsSupportCloudinit: boolean | null;
        SnapshotSet: Array<Snapshot> | null;
    }): void;
}
/**
 * DescribeDisasterRecoverGroupQuota返回参数结构体
 * @class
 */
declare class DescribeDisasterRecoverGroupQuotaResponse extends AbstractModel {
    GroupQuota: number | null;
    CurrentNum: number | null;
    CvmInHostGroupQuota: number | null;
    CvmInSwGroupQuota: number | null;
    CvmInRackGroupQuota: number | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        GroupQuota: number | null;
        CurrentNum: number | null;
        CvmInHostGroupQuota: number | null;
        CvmInSwGroupQuota: number | null;
        CvmInRackGroupQuota: number | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeRegions请求参数结构体
 * @class
 */
declare class DescribeRegionsRequest extends AbstractModel {
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
declare class CreateDisasterRecoverGroupRequest extends AbstractModel {
    Name: string | null;
    Type: string | null;
    ClientToken: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Type: string | null;
        ClientToken: string | null;
    }): void;
}
/**
 * DescribeReservedInstances返回参数结构体
 * @class
 */
declare class DescribeReservedInstancesResponse extends AbstractModel {
    TotalCount: number | null;
    ReservedInstancesSet: Array<ReservedInstances> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        ReservedInstancesSet: Array<ReservedInstances> | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeImportImageOs返回参数结构体
 * @class
 */
declare class DescribeImportImageOsResponse extends AbstractModel {
    ImportImageOsListSupported: ImageOsList | null;
    ImportImageOsVersionSet: Array<OsVersion> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImportImageOsListSupported: ImageOsList | null;
        ImportImageOsVersionSet: Array<OsVersion> | null;
        RequestId: string | null;
    }): void;
}
/**
 * ModifyKeyPairAttribute返回参数结构体
 * @class
 */
declare class ModifyKeyPairAttributeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * 描述了数据盘的信息
 * @class
 */
declare class DataDisk extends AbstractModel {
    DiskSize: number | null;
    DiskType: string | null;
    DiskId: string | null;
    DeleteWithInstance: boolean | null;
    SnapshotId: string | null;
    Encrypt: boolean | null;
    KmsKeyId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DiskSize: number | null;
        DiskType: string | null;
        DiskId: string | null;
        DeleteWithInstance: boolean | null;
        SnapshotId: string | null;
        Encrypt: boolean | null;
        KmsKeyId: string | null;
    }): void;
}
/**
 * DescribeKeyPairs请求参数结构体
 * @class
 */
declare class DescribeKeyPairsRequest extends AbstractModel {
    KeyIds: Array<string> | null;
    Filters: Array<Filter> | null;
    Offset: number | null;
    Limit: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void;
}
/**
 * 描述了单台实例操作次数限制
 * @class
 */
declare class OperationCountLimit extends AbstractModel {
    Operation: string | null;
    InstanceId: string | null;
    CurrentCount: number | null;
    LimitCount: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Operation: string | null;
        InstanceId: string | null;
        CurrentCount: number | null;
        LimitCount: number | null;
    }): void;
}
/**
 * DeleteDisasterRecoverGroups返回参数结构体
 * @class
 */
declare class DeleteDisasterRecoverGroupsResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * cdh实例详细信息
 * @class
 */
declare class HostItem extends AbstractModel {
    Placement: Placement | null;
    HostId: string | null;
    HostType: string | null;
    HostName: string | null;
    HostChargeType: string | null;
    RenewFlag: string | null;
    CreatedTime: string | null;
    ExpiredTime: string | null;
    InstanceIds: Array<string> | null;
    HostState: string | null;
    HostIp: string | null;
    HostResource: HostResource | null;
    CageId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement | null;
        HostId: string | null;
        HostType: string | null;
        HostName: string | null;
        HostChargeType: string | null;
        RenewFlag: string | null;
        CreatedTime: string | null;
        ExpiredTime: string | null;
        InstanceIds: Array<string> | null;
        HostState: string | null;
        HostIp: string | null;
        HostResource: HostResource | null;
        CageId: string | null;
    }): void;
}
/**
 * 扩展数据
 * @class
 */
declare class Externals extends AbstractModel {
    ReleaseAddress: boolean | null;
    UnsupportNetworks: Array<string> | null;
    StorageBlockAttr: StorageBlock | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ReleaseAddress: boolean | null;
        UnsupportNetworks: Array<string> | null;
        StorageBlockAttr: StorageBlock | null;
    }): void;
}
/**
 * InquiryPriceModifyInstancesChargeType请求参数结构体
 * @class
 */
declare class InquiryPriceModifyInstancesChargeTypeRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InstanceChargeType: string | null;
    InstanceChargePrepaid: InstanceChargePrepaid | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceChargeType: string | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
    }): void;
}
/**
 * CreateImage请求参数结构体
 * @class
 */
declare class CreateImageRequest extends AbstractModel {
    ImageName: string | null;
    InstanceId: string | null;
    ImageDescription: string | null;
    ForcePoweroff: string | null;
    Sysprep: string | null;
    DataDiskIds: Array<string> | null;
    SnapshotIds: Array<string> | null;
    DryRun: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageName: string | null;
        InstanceId: string | null;
        ImageDescription: string | null;
        ForcePoweroff: string | null;
        Sysprep: string | null;
        DataDiskIds: Array<string> | null;
        SnapshotIds: Array<string> | null;
        DryRun: boolean | null;
    }): void;
}
/**
 * 描述实例的信息
 * @class
 */
declare class Instance extends AbstractModel {
    Placement: Placement | null;
    InstanceId: string | null;
    InstanceType: string | null;
    CPU: number | null;
    Memory: number | null;
    RestrictState: string | null;
    InstanceName: string | null;
    InstanceChargeType: string | null;
    SystemDisk: SystemDisk | null;
    DataDisks: Array<DataDisk> | null;
    PrivateIpAddresses: Array<string> | null;
    PublicIpAddresses: Array<string> | null;
    InternetAccessible: InternetAccessible | null;
    VirtualPrivateCloud: VirtualPrivateCloud | null;
    ImageId: string | null;
    RenewFlag: string | null;
    CreatedTime: string | null;
    ExpiredTime: string | null;
    OsName: string | null;
    SecurityGroupIds: Array<string> | null;
    LoginSettings: LoginSettings | null;
    InstanceState: string | null;
    Tags: Array<Tag> | null;
    StopChargingMode: string | null;
    Uuid: string | null;
    LatestOperation: string | null;
    LatestOperationState: string | null;
    LatestOperationRequestId: string | null;
    DisasterRecoverGroupId: string | null;
    IPv6Addresses: Array<string> | null;
    CamRoleName: string | null;
    HpcClusterId: string | null;
    RdmaIpAddresses: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Placement: Placement | null;
        InstanceId: string | null;
        InstanceType: string | null;
        CPU: number | null;
        Memory: number | null;
        RestrictState: string | null;
        InstanceName: string | null;
        InstanceChargeType: string | null;
        SystemDisk: SystemDisk | null;
        DataDisks: Array<DataDisk> | null;
        PrivateIpAddresses: Array<string> | null;
        PublicIpAddresses: Array<string> | null;
        InternetAccessible: InternetAccessible | null;
        VirtualPrivateCloud: VirtualPrivateCloud | null;
        ImageId: string | null;
        RenewFlag: string | null;
        CreatedTime: string | null;
        ExpiredTime: string | null;
        OsName: string | null;
        SecurityGroupIds: Array<string> | null;
        LoginSettings: LoginSettings | null;
        InstanceState: string | null;
        Tags: Array<Tag> | null;
        StopChargingMode: string | null;
        Uuid: string | null;
        LatestOperation: string | null;
        LatestOperationState: string | null;
        LatestOperationRequestId: string | null;
        DisasterRecoverGroupId: string | null;
        IPv6Addresses: Array<string> | null;
        CamRoleName: string | null;
        HpcClusterId: string | null;
        RdmaIpAddresses: Array<string> | null;
    }): void;
}
/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 * @class
 */
declare class EnhancedService extends AbstractModel {
    SecurityService: RunSecurityServiceEnabled | null;
    MonitorService: RunMonitorServiceEnabled | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SecurityService: RunSecurityServiceEnabled | null;
        MonitorService: RunMonitorServiceEnabled | null;
    }): void;
}
/**
 * CreateKeyPair返回参数结构体
 * @class
 */
declare class CreateKeyPairResponse extends AbstractModel {
    KeyPair: KeyPair | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyPair: KeyPair | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeInstanceVncUrl返回参数结构体
 * @class
 */
declare class DescribeInstanceVncUrlResponse extends AbstractModel {
    InstanceVncUrl: string | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceVncUrl: string | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeReservedInstancesOfferings请求参数结构体
 * @class
 */
declare class DescribeReservedInstancesOfferingsRequest extends AbstractModel {
    DryRun: boolean | null;
    Offset: number | null;
    Limit: number | null;
    MaxDuration: number | null;
    MinDuration: number | null;
    Filters: Array<Filter> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DryRun: boolean | null;
        Offset: number | null;
        Limit: number | null;
        MaxDuration: number | null;
        MinDuration: number | null;
        Filters: Array<Filter> | null;
    }): void;
}
/**
 * DescribeDisasterRecoverGroups返回参数结构体
 * @class
 */
declare class DescribeDisasterRecoverGroupsResponse extends AbstractModel {
    DisasterRecoverGroupSet: Array<DisasterRecoverGroup> | null;
    TotalCount: number | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupSet: Array<DisasterRecoverGroup> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void;
}
/**
 * 描述了 “云安全” 服务相关的信息
 * @class
 */
declare class RunSecurityServiceEnabled extends AbstractModel {
    Enabled: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean | null;
    }): void;
}
/**
 * 定时任务
 * @class
 */
declare class ActionTimer extends AbstractModel {
    Externals: Externals | null;
    TimerAction: string | null;
    ActionTime: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Externals: Externals | null;
        TimerAction: string | null;
        ActionTime: string | null;
    }): void;
}
/**
 * 创建资源实例时同时绑定的标签对说明
 * @class
 */
declare class TagSpecification extends AbstractModel {
    ResourceType: string | null;
    Tags: Array<Tag> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ResourceType: string | null;
        Tags: Array<Tag> | null;
    }): void;
}
/**
 * ResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
declare class ResetInstancesInternetMaxBandwidthRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InternetAccessible: InternetAccessible | null;
    StartTime: string | null;
    EndTime: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InternetAccessible: InternetAccessible | null;
        StartTime: string | null;
        EndTime: string | null;
    }): void;
}
/**
 * 描述实例的机型族配置信息
形如：{'InstanceFamilyName': '标准型S1', 'InstanceFamily': 'S1'}、{'InstanceFamilyName': '网络优化型N1', 'InstanceFamily': 'N1'}、{'InstanceFamilyName': '高IO型I1', 'InstanceFamily': 'I1'}等。
 * @class
 */
declare class InstanceFamilyConfig extends AbstractModel {
    InstanceFamilyName: string | null;
    InstanceFamily: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceFamilyName: string | null;
        InstanceFamily: string | null;
    }): void;
}
/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
declare class AssociateSecurityGroupsResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ImportImage请求参数结构体
 * @class
 */
declare class ImportImageRequest extends AbstractModel {
    Architecture: string | null;
    OsType: string | null;
    OsVersion: string | null;
    ImageUrl: string | null;
    ImageName: string | null;
    ImageDescription: string | null;
    DryRun: boolean | null;
    Force: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Architecture: string | null;
        OsType: string | null;
        OsVersion: string | null;
        ImageUrl: string | null;
        ImageName: string | null;
        ImageDescription: string | null;
        DryRun: boolean | null;
        Force: boolean | null;
    }): void;
}
/**
 * 竞价相关选项
 * @class
 */
declare class SpotMarketOptions extends AbstractModel {
    MaxPrice: string | null;
    SpotInstanceType: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        MaxPrice: string | null;
        SpotInstanceType: string | null;
    }): void;
}
/**
 * DescribeImportImageOs请求参数结构体
 * @class
 */
declare class DescribeImportImageOsRequest extends AbstractModel {
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
declare class CreateKeyPairRequest extends AbstractModel {
    KeyName: string | null;
    ProjectId: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyName: string | null;
        ProjectId: number | null;
    }): void;
}
/**
 * 描述实例的状态。状态类型详见[实例状态表](/document/api/213/15753#InstanceStatus)
 * @class
 */
declare class InstanceStatus extends AbstractModel {
    InstanceId: string | null;
    InstanceState: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        InstanceState: string | null;
    }): void;
}
/**
 * InquiryPriceRenewInstances返回参数结构体
 * @class
 */
declare class InquiryPriceRenewInstancesResponse extends AbstractModel {
    Price: Price | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void;
}
/**
 * AllocateHosts返回参数结构体
 * @class
 */
declare class AllocateHostsResponse extends AbstractModel {
    HostIdSet: Array<string> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        HostIdSet: Array<string> | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeImageSharePermission请求参数结构体
 * @class
 */
declare class DescribeImageSharePermissionRequest extends AbstractModel {
    ImageId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
    }): void;
}
/**
 * 容灾组信息
 * @class
 */
declare class DisasterRecoverGroup extends AbstractModel {
    DisasterRecoverGroupId: string | null;
    Name: string | null;
    Type: string | null;
    CvmQuotaTotal: number | null;
    CurrentNum: number | null;
    InstanceIds: Array<string> | null;
    CreateTime: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupId: string | null;
        Name: string | null;
        Type: string | null;
        CvmQuotaTotal: number | null;
        CurrentNum: number | null;
        InstanceIds: Array<string> | null;
        CreateTime: string | null;
    }): void;
}
/**
 * InquiryPriceResetInstance返回参数结构体
 * @class
 */
declare class InquiryPriceResetInstanceResponse extends AbstractModel {
    Price: Price | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeInstanceTypeConfigs请求参数结构体
 * @class
 */
declare class DescribeInstanceTypeConfigsRequest extends AbstractModel {
    Filters: Array<Filter> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
    }): void;
}
/**
 * DescribeImageSharePermission返回参数结构体
 * @class
 */
declare class DescribeImageSharePermissionResponse extends AbstractModel {
    SharePermissionSet: Array<SharePermission> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SharePermissionSet: Array<SharePermission> | null;
        RequestId: string | null;
    }): void;
}
/**
 * ModifyHostsAttribute返回参数结构体
 * @class
 */
declare class ModifyHostsAttributeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * DescribeDisasterRecoverGroupQuota请求参数结构体
 * @class
 */
declare class DescribeDisasterRecoverGroupQuotaRequest extends AbstractModel {
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
declare class StartInstancesResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ModifyInstancesVpcAttribute请求参数结构体
 * @class
 */
declare class ModifyInstancesVpcAttributeRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    VirtualPrivateCloud: VirtualPrivateCloud | null;
    ForceStop: boolean | null;
    ReserveHostName: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        VirtualPrivateCloud: VirtualPrivateCloud | null;
        ForceStop: boolean | null;
        ReserveHostName: boolean | null;
    }): void;
}
/**
 * DescribeReservedInstances请求参数结构体
 * @class
 */
declare class DescribeReservedInstancesRequest extends AbstractModel {
    DryRun: boolean | null;
    Offset: number | null;
    Limit: number | null;
    Filters: Array<Filter> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DryRun: boolean | null;
        Offset: number | null;
        Limit: number | null;
        Filters: Array<Filter> | null;
    }): void;
}
/**
 * DescribeInternetChargeTypeConfigs返回参数结构体
 * @class
 */
declare class DescribeInternetChargeTypeConfigsResponse extends AbstractModel {
    InternetChargeTypeConfigSet: Array<InternetChargeTypeConfig> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetChargeTypeConfigSet: Array<InternetChargeTypeConfig> | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeZoneInstanceConfigInfos请求参数结构体
 * @class
 */
declare class DescribeZoneInstanceConfigInfosRequest extends AbstractModel {
    Filters: Array<Filter> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
    }): void;
}
/**
 * DescribeZones返回参数结构体
 * @class
 */
declare class DescribeZonesResponse extends AbstractModel {
    TotalCount: number | null;
    ZoneSet: Array<ZoneInfo> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        ZoneSet: Array<ZoneInfo> | null;
        RequestId: string | null;
    }): void;
}
/**
 * 描述了单项的价格信息
 * @class
 */
declare class ItemPrice extends AbstractModel {
    UnitPrice: number | null;
    ChargeUnit: string | null;
    OriginalPrice: number | null;
    DiscountPrice: number | null;
    Discount: number | null;
    UnitPriceDiscount: number | null;
    UnitPriceSecondStep: number | null;
    UnitPriceDiscountSecondStep: number | null;
    UnitPriceThirdStep: number | null;
    UnitPriceDiscountThirdStep: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        UnitPrice: number | null;
        ChargeUnit: string | null;
        OriginalPrice: number | null;
        DiscountPrice: number | null;
        Discount: number | null;
        UnitPriceDiscount: number | null;
        UnitPriceSecondStep: number | null;
        UnitPriceDiscountSecondStep: number | null;
        UnitPriceThirdStep: number | null;
        UnitPriceDiscountThirdStep: number | null;
    }): void;
}
/**
 * 描述实例机型配额信息。
 * @class
 */
declare class InstanceTypeQuotaItem extends AbstractModel {
    Zone: string | null;
    InstanceType: string | null;
    InstanceChargeType: string | null;
    NetworkCard: number | null;
    Externals: Externals | null;
    Cpu: number | null;
    Memory: number | null;
    InstanceFamily: string | null;
    TypeName: string | null;
    LocalDiskTypeList: Array<LocalDiskType> | null;
    Status: string | null;
    Price: ItemPrice | null;
    SoldOutReason: string | null;
    InstanceBandwidth: number | null;
    InstancePps: number | null;
    StorageBlockAmount: number | null;
    CpuType: string | null;
    Gpu: number | null;
    Fpga: number | null;
    Remark: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        InstanceType: string | null;
        InstanceChargeType: string | null;
        NetworkCard: number | null;
        Externals: Externals | null;
        Cpu: number | null;
        Memory: number | null;
        InstanceFamily: string | null;
        TypeName: string | null;
        LocalDiskTypeList: Array<LocalDiskType> | null;
        Status: string | null;
        Price: ItemPrice | null;
        SoldOutReason: string | null;
        InstanceBandwidth: number | null;
        InstancePps: number | null;
        StorageBlockAmount: number | null;
        CpuType: string | null;
        Gpu: number | null;
        Fpga: number | null;
        Remark: string | null;
    }): void;
}
/**
 * 支持的操作系统类型，根据windows和Linux分类。
 * @class
 */
declare class ImageOsList extends AbstractModel {
    Windows: Array<string> | null;
    Linux: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Windows: Array<string> | null;
        Linux: Array<string> | null;
    }): void;
}
/**
 * InquiryPriceRunInstances返回参数结构体
 * @class
 */
declare class InquiryPriceRunInstancesResponse extends AbstractModel {
    Price: Price | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void;
}
/**
 * DescribeHosts请求参数结构体
 * @class
 */
declare class DescribeHostsRequest extends AbstractModel {
    Filters: Array<Filter> | null;
    Offset: number | null;
    Limit: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void;
}
/**
 * ModifyInstancesRenewFlag返回参数结构体
 * @class
 */
declare class ModifyInstancesRenewFlagResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * DescribeInstancesStatus请求参数结构体
 * @class
 */
declare class DescribeInstancesStatusRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    Offset: number | null;
    Limit: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        Offset: number | null;
        Limit: number | null;
    }): void;
}
/**
 * InquiryPriceResizeInstanceDisks返回参数结构体
 * @class
 */
declare class InquiryPriceResizeInstanceDisksResponse extends AbstractModel {
    Price: Price | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void;
}
/**
 * TerminateInstances请求参数结构体
 * @class
 */
declare class TerminateInstancesRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
    }): void;
}
/**
 * 镜像分享信息结构
 * @class
 */
declare class SharePermission extends AbstractModel {
    CreatedTime: string | null;
    AccountId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        CreatedTime: string | null;
        AccountId: string | null;
    }): void;
}
/**
 * 描述用户已购买预留实例计费信息
 * @class
 */
declare class ReservedInstances extends AbstractModel {
    ReservedInstancesId: string | null;
    InstanceType: string | null;
    Zone: string | null;
    StartTime: string | null;
    EndTime: string | null;
    Duration: number | null;
    InstanceCount: number | null;
    ProductDescription: string | null;
    State: string | null;
    CurrencyCode: string | null;
    OfferingType: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ReservedInstancesId: string | null;
        InstanceType: string | null;
        Zone: string | null;
        StartTime: string | null;
        EndTime: string | null;
        Duration: number | null;
        InstanceCount: number | null;
        ProductDescription: string | null;
        State: string | null;
        CurrencyCode: string | null;
        OfferingType: string | null;
    }): void;
}
/**
 * DeleteImages返回参数结构体
 * @class
 */
declare class DeleteImagesResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ImportImage返回参数结构体
 * @class
 */
declare class ImportImageResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ModifyDisasterRecoverGroupAttribute请求参数结构体
 * @class
 */
declare class ModifyDisasterRecoverGroupAttributeRequest extends AbstractModel {
    DisasterRecoverGroupId: string | null;
    Name: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        DisasterRecoverGroupId: string | null;
        Name: string | null;
    }): void;
}
/**
 * RebootInstances返回参数结构体
 * @class
 */
declare class RebootInstancesResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * InquiryPriceResetInstancesType返回参数结构体
 * @class
 */
declare class InquiryPriceResetInstancesTypeResponse extends AbstractModel {
    Price: Price | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Price: Price | null;
        RequestId: string | null;
    }): void;
}
/**
 * 描述可购买预留实例计费信息
 * @class
 */
declare class ReservedInstancesOffering extends AbstractModel {
    Zone: string | null;
    CurrencyCode: string | null;
    Duration: number | null;
    FixedPrice: number | null;
    InstanceType: string | null;
    OfferingType: string | null;
    ReservedInstancesOfferingId: string | null;
    ProductDescription: string | null;
    UsagePrice: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        CurrencyCode: string | null;
        Duration: number | null;
        FixedPrice: number | null;
        InstanceType: string | null;
        OfferingType: string | null;
        ReservedInstancesOfferingId: string | null;
        ProductDescription: string | null;
        UsagePrice: number | null;
    }): void;
}
/**
 * 操作系统支持的类型。
 * @class
 */
declare class OsVersion extends AbstractModel {
    OsName: string | null;
    OsVersions: Array<string> | null;
    Architecture: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        OsName: string | null;
        OsVersions: Array<string> | null;
        Architecture: Array<string> | null;
    }): void;
}
/**
 * ModifyImageAttribute返回参数结构体
 * @class
 */
declare class ModifyImageAttributeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * InquiryPriceRenewInstances请求参数结构体
 * @class
 */
declare class InquiryPriceRenewInstancesRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    InstanceChargePrepaid: InstanceChargePrepaid | null;
    DryRun: boolean | null;
    RenewPortableDataDisk: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceChargePrepaid: InstanceChargePrepaid | null;
        DryRun: boolean | null;
        RenewPortableDataDisk: boolean | null;
    }): void;
}
/**
 * DescribeInstances请求参数结构体
 * @class
 */
declare class DescribeInstancesRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    Filters: Array<Filter> | null;
    Offset: number | null;
    Limit: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
    }): void;
}
/**
 * 地域信息
 * @class
 */
declare class RegionInfo extends AbstractModel {
    Region: string | null;
    RegionName: string | null;
    RegionState: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        RegionName: string | null;
        RegionState: string | null;
    }): void;
}
/**
 * StopInstances请求参数结构体
 * @class
 */
declare class StopInstancesRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    ForceStop: boolean | null;
    StopType: string | null;
    StoppedMode: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        ForceStop: boolean | null;
        StopType: string | null;
        StoppedMode: string | null;
    }): void;
}
/**
 * DescribeInternetChargeTypeConfigs请求参数结构体
 * @class
 */
declare class DescribeInternetChargeTypeConfigsRequest extends AbstractModel {
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
declare class DescribeImagesRequest extends AbstractModel {
    ImageIds: Array<string> | null;
    Filters: Array<Filter> | null;
    Offset: number | null;
    Limit: number | null;
    InstanceType: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageIds: Array<string> | null;
        Filters: Array<Filter> | null;
        Offset: number | null;
        Limit: number | null;
        InstanceType: string | null;
    }): void;
}
/**
 * ModifyImageAttribute请求参数结构体
 * @class
 */
declare class ModifyImageAttributeRequest extends AbstractModel {
    ImageId: string | null;
    ImageName: string | null;
    ImageDescription: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ImageId: string | null;
        ImageName: string | null;
        ImageDescription: string | null;
    }): void;
}
/**
 * ResizeInstanceDisks返回参数结构体
 * @class
 */
declare class ResizeInstanceDisksResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * ModifyInstancesRenewFlag请求参数结构体
 * @class
 */
declare class ModifyInstancesRenewFlagRequest extends AbstractModel {
    InstanceIds: Array<string> | null;
    RenewFlag: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        RenewFlag: string | null;
    }): void;
}
/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
declare class DisassociateSecurityGroupsRequest extends AbstractModel {
    SecurityGroupIds: Array<string> | null;
    InstanceIds: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SecurityGroupIds: Array<string> | null;
        InstanceIds: Array<string> | null;
    }): void;
}
/**
 * ModifyHostsAttribute请求参数结构体
 * @class
 */
declare class ModifyHostsAttributeRequest extends AbstractModel {
    HostIds: Array<string> | null;
    HostName: string | null;
    RenewFlag: string | null;
    ProjectId: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        HostIds: Array<string> | null;
        HostName: string | null;
        RenewFlag: string | null;
        ProjectId: number | null;
    }): void;
}
/**
 * ImportKeyPair请求参数结构体
 * @class
 */
declare class ImportKeyPairRequest extends AbstractModel {
    KeyName: string | null;
    ProjectId: number | null;
    PublicKey: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyName: string | null;
        ProjectId: number | null;
        PublicKey: string | null;
    }): void;
}
/**
 * 描述密钥对信息
 * @class
 */
declare class KeyPair extends AbstractModel {
    KeyId: string | null;
    KeyName: string | null;
    ProjectId: number | null;
    Description: string | null;
    PublicKey: string | null;
    PrivateKey: string | null;
    AssociatedInstanceIds: Array<string> | null;
    CreatedTime: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        KeyId: string | null;
        KeyName: string | null;
        ProjectId: number | null;
        Description: string | null;
        PublicKey: string | null;
        PrivateKey: string | null;
        AssociatedInstanceIds: Array<string> | null;
        CreatedTime: string | null;
    }): void;
}
/**
 * DescribeReservedInstancesOfferings返回参数结构体
 * @class
 */
declare class DescribeReservedInstancesOfferingsResponse extends AbstractModel {
    TotalCount: number | null;
    ReservedInstancesOfferingsSet: Array<ReservedInstancesOffering> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        ReservedInstancesOfferingsSet: Array<ReservedInstancesOffering> | null;
        RequestId: string | null;
    }): void;
}
/**
 * RenewInstances返回参数结构体
 * @class
 */
declare class RenewInstancesResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * 描述了 “云监控” 服务相关的信息
 * @class
 */
declare class RunMonitorServiceEnabled extends AbstractModel {
    Enabled: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean | null;
    }): void;
}
/**
 * ResetInstance返回参数结构体
 * @class
 */
declare class ResetInstanceResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
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
declare class Filter extends AbstractModel {
    Name: string | null;
    Values: Array<string> | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Values: Array<string> | null;
    }): void;
}
/**
 * 描述了VPC相关信息，包括子网，IP信息等
 * @class
 */
declare class VirtualPrivateCloud extends AbstractModel {
    VpcId: string | null;
    SubnetId: string | null;
    AsVpcGateway: boolean | null;
    PrivateIpAddresses: Array<string> | null;
    Ipv6AddressCount: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        VpcId: string | null;
        SubnetId: string | null;
        AsVpcGateway: boolean | null;
        PrivateIpAddresses: Array<string> | null;
        Ipv6AddressCount: number | null;
    }): void;
}
/**
 * 描述了按带宽计费的相关信息
 * @class
 */
declare class InternetBandwidthConfig extends AbstractModel {
    StartTime: string | null;
    EndTime: string | null;
    InternetAccessible: InternetAccessible | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        InternetAccessible: InternetAccessible | null;
    }): void;
}
/**
 * ModifyDisasterRecoverGroupAttribute返回参数结构体
 * @class
 */
declare class ModifyDisasterRecoverGroupAttributeResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * DescribeInstanceTypeConfigs返回参数结构体
 * @class
 */
declare class DescribeInstanceTypeConfigsResponse extends AbstractModel {
    InstanceTypeConfigSet: Array<InstanceTypeConfig> | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceTypeConfigSet: Array<InstanceTypeConfig> | null;
        RequestId: string | null;
    }): void;
}
/**
 * ResizeInstanceDisks请求参数结构体
 * @class
 */
declare class ResizeInstanceDisksRequest extends AbstractModel {
    InstanceId: string | null;
    DataDisks: Array<DataDisk> | null;
    ForceStop: boolean | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
        DataDisks: Array<DataDisk> | null;
        ForceStop: boolean | null;
    }): void;
}
/**
 * DescribeInstanceFamilyConfigs请求参数结构体
 * @class
 */
declare class DescribeInstanceFamilyConfigsRequest extends AbstractModel {
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
declare class DescribeInstanceInternetBandwidthConfigsRequest extends AbstractModel {
    InstanceId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstanceId: string | null;
    }): void;
}
/**
 * PurchaseReservedInstancesOffering返回参数结构体
 * @class
 */
declare class PurchaseReservedInstancesOfferingResponse extends AbstractModel {
    ReservedInstanceId: string | null;
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        ReservedInstanceId: string | null;
        RequestId: string | null;
    }): void;
}
/**
 * HDD的本地存储信息
 * @class
 */
declare class StorageBlock extends AbstractModel {
    Type: string | null;
    MinSize: number | null;
    MaxSize: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        MinSize: number | null;
        MaxSize: number | null;
    }): void;
}
/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
declare class InternetAccessible extends AbstractModel {
    InternetChargeType: string | null;
    InternetMaxBandwidthOut: number | null;
    PublicIpAssigned: boolean | null;
    BandwidthPackageId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InternetChargeType: string | null;
        InternetMaxBandwidthOut: number | null;
        PublicIpAssigned: boolean | null;
        BandwidthPackageId: string | null;
    }): void;
}
/**
 * RenewHosts返回参数结构体
 * @class
 */
declare class RenewHostsResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
declare class DisassociateSecurityGroupsResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * 描述镜像关联的快照信息
 * @class
 */
declare class Snapshot extends AbstractModel {
    SnapshotId: string | null;
    DiskUsage: string | null;
    DiskSize: number | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        SnapshotId: string | null;
        DiskUsage: string | null;
        DiskSize: number | null;
    }): void;
}
/**
 * ModifyInstancesProject返回参数结构体
 * @class
 */
declare class ModifyInstancesProjectResponse extends AbstractModel {
    RequestId: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void;
}
/**
 * 描述了实例的计费模式
 * @class
 */
declare class InstanceChargePrepaid extends AbstractModel {
    Period: number | null;
    RenewFlag: string | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        Period: number | null;
        RenewFlag: string | null;
    }): void;
}
/**
 * 价格
 * @class
 */
declare class Price extends AbstractModel {
    InstancePrice: ItemPrice | null;
    BandwidthPrice: ItemPrice | null;
    constructor();
    /**
     * @private
     */
    deserialize(params: {
        InstancePrice: ItemPrice | null;
        BandwidthPrice: ItemPrice | null;
    }): void;
}
export declare const Models: {
    ChargePrepaid: typeof ChargePrepaid;
    LocalDiskType: typeof LocalDiskType;
    AssociateInstancesKeyPairsResponse: typeof AssociateInstancesKeyPairsResponse;
    RenewInstancesRequest: typeof RenewInstancesRequest;
    DescribeImageQuotaResponse: typeof DescribeImageQuotaResponse;
    ModifyInstancesProjectRequest: typeof ModifyInstancesProjectRequest;
    ResetInstancesTypeResponse: typeof ResetInstancesTypeResponse;
    HostResource: typeof HostResource;
    DeleteDisasterRecoverGroupsRequest: typeof DeleteDisasterRecoverGroupsRequest;
    DeleteKeyPairsResponse: typeof DeleteKeyPairsResponse;
    TerminateInstancesResponse: typeof TerminateInstancesResponse;
    ModifyInstancesChargeTypeResponse: typeof ModifyInstancesChargeTypeResponse;
    CreateDisasterRecoverGroupResponse: typeof CreateDisasterRecoverGroupResponse;
    InquiryPriceResetInstancesInternetMaxBandwidthResponse: typeof InquiryPriceResetInstancesInternetMaxBandwidthResponse;
    ModifyKeyPairAttributeRequest: typeof ModifyKeyPairAttributeRequest;
    AssociateSecurityGroupsRequest: typeof AssociateSecurityGroupsRequest;
    ResetInstancesTypeRequest: typeof ResetInstancesTypeRequest;
    InquiryPriceResetInstanceRequest: typeof InquiryPriceResetInstanceRequest;
    RunInstancesRequest: typeof RunInstancesRequest;
    DeleteImagesRequest: typeof DeleteImagesRequest;
    DescribeInstancesResponse: typeof DescribeInstancesResponse;
    DescribeHostsResponse: typeof DescribeHostsResponse;
    DeleteKeyPairsRequest: typeof DeleteKeyPairsRequest;
    SystemDisk: typeof SystemDisk;
    ResetInstanceRequest: typeof ResetInstanceRequest;
    InstanceTypeConfig: typeof InstanceTypeConfig;
    AllocateHostsRequest: typeof AllocateHostsRequest;
    LoginSettings: typeof LoginSettings;
    DescribeRegionsResponse: typeof DescribeRegionsResponse;
    PurchaseReservedInstancesOfferingRequest: typeof PurchaseReservedInstancesOfferingRequest;
    RebootInstancesRequest: typeof RebootInstancesRequest;
    AssociateInstancesKeyPairsRequest: typeof AssociateInstancesKeyPairsRequest;
    ImportKeyPairResponse: typeof ImportKeyPairResponse;
    DescribeInstancesStatusResponse: typeof DescribeInstancesStatusResponse;
    ZoneInfo: typeof ZoneInfo;
    InquiryPriceModifyInstancesChargeTypeResponse: typeof InquiryPriceModifyInstancesChargeTypeResponse;
    DescribeKeyPairsResponse: typeof DescribeKeyPairsResponse;
    ResetInstancesPasswordRequest: typeof ResetInstancesPasswordRequest;
    InternetChargeTypeConfig: typeof InternetChargeTypeConfig;
    DescribeImagesResponse: typeof DescribeImagesResponse;
    ModifyInstancesVpcAttributeResponse: typeof ModifyInstancesVpcAttributeResponse;
    InquiryPriceResetInstancesTypeRequest: typeof InquiryPriceResetInstancesTypeRequest;
    DescribeInstancesOperationLimitRequest: typeof DescribeInstancesOperationLimitRequest;
    ModifyInstancesChargeTypeRequest: typeof ModifyInstancesChargeTypeRequest;
    DescribeInstanceVncUrlRequest: typeof DescribeInstanceVncUrlRequest;
    ModifyImageSharePermissionRequest: typeof ModifyImageSharePermissionRequest;
    DisassociateInstancesKeyPairsResponse: typeof DisassociateInstancesKeyPairsResponse;
    InquiryPriceResizeInstanceDisksRequest: typeof InquiryPriceResizeInstanceDisksRequest;
    RunInstancesResponse: typeof RunInstancesResponse;
    ResetInstancesInternetMaxBandwidthResponse: typeof ResetInstancesInternetMaxBandwidthResponse;
    ModifyInstancesAttributeResponse: typeof ModifyInstancesAttributeResponse;
    ModifyImageSharePermissionResponse: typeof ModifyImageSharePermissionResponse;
    DescribeInstancesOperationLimitResponse: typeof DescribeInstancesOperationLimitResponse;
    SyncImagesResponse: typeof SyncImagesResponse;
    DescribeZoneInstanceConfigInfosResponse: typeof DescribeZoneInstanceConfigInfosResponse;
    ModifyInstancesAttributeRequest: typeof ModifyInstancesAttributeRequest;
    RenewHostsRequest: typeof RenewHostsRequest;
    DescribeZonesRequest: typeof DescribeZonesRequest;
    StartInstancesRequest: typeof StartInstancesRequest;
    Tag: typeof Tag;
    DescribeInstanceInternetBandwidthConfigsResponse: typeof DescribeInstanceInternetBandwidthConfigsResponse;
    Placement: typeof Placement;
    DescribeDisasterRecoverGroupsRequest: typeof DescribeDisasterRecoverGroupsRequest;
    SyncImagesRequest: typeof SyncImagesRequest;
    DisassociateInstancesKeyPairsRequest: typeof DisassociateInstancesKeyPairsRequest;
    DescribeImageQuotaRequest: typeof DescribeImageQuotaRequest;
    DescribeInstanceFamilyConfigsResponse: typeof DescribeInstanceFamilyConfigsResponse;
    CreateImageResponse: typeof CreateImageResponse;
    StopInstancesResponse: typeof StopInstancesResponse;
    InstanceMarketOptionsRequest: typeof InstanceMarketOptionsRequest;
    InquiryPriceResetInstancesInternetMaxBandwidthRequest: typeof InquiryPriceResetInstancesInternetMaxBandwidthRequest;
    ResetInstancesPasswordResponse: typeof ResetInstancesPasswordResponse;
    InquiryPriceRunInstancesRequest: typeof InquiryPriceRunInstancesRequest;
    Image: typeof Image;
    DescribeDisasterRecoverGroupQuotaResponse: typeof DescribeDisasterRecoverGroupQuotaResponse;
    DescribeRegionsRequest: typeof DescribeRegionsRequest;
    CreateDisasterRecoverGroupRequest: typeof CreateDisasterRecoverGroupRequest;
    DescribeReservedInstancesResponse: typeof DescribeReservedInstancesResponse;
    DescribeImportImageOsResponse: typeof DescribeImportImageOsResponse;
    ModifyKeyPairAttributeResponse: typeof ModifyKeyPairAttributeResponse;
    DataDisk: typeof DataDisk;
    DescribeKeyPairsRequest: typeof DescribeKeyPairsRequest;
    OperationCountLimit: typeof OperationCountLimit;
    DeleteDisasterRecoverGroupsResponse: typeof DeleteDisasterRecoverGroupsResponse;
    HostItem: typeof HostItem;
    Externals: typeof Externals;
    InquiryPriceModifyInstancesChargeTypeRequest: typeof InquiryPriceModifyInstancesChargeTypeRequest;
    CreateImageRequest: typeof CreateImageRequest;
    Instance: typeof Instance;
    EnhancedService: typeof EnhancedService;
    CreateKeyPairResponse: typeof CreateKeyPairResponse;
    DescribeInstanceVncUrlResponse: typeof DescribeInstanceVncUrlResponse;
    DescribeReservedInstancesOfferingsRequest: typeof DescribeReservedInstancesOfferingsRequest;
    DescribeDisasterRecoverGroupsResponse: typeof DescribeDisasterRecoverGroupsResponse;
    RunSecurityServiceEnabled: typeof RunSecurityServiceEnabled;
    ActionTimer: typeof ActionTimer;
    TagSpecification: typeof TagSpecification;
    ResetInstancesInternetMaxBandwidthRequest: typeof ResetInstancesInternetMaxBandwidthRequest;
    InstanceFamilyConfig: typeof InstanceFamilyConfig;
    AssociateSecurityGroupsResponse: typeof AssociateSecurityGroupsResponse;
    ImportImageRequest: typeof ImportImageRequest;
    SpotMarketOptions: typeof SpotMarketOptions;
    DescribeImportImageOsRequest: typeof DescribeImportImageOsRequest;
    CreateKeyPairRequest: typeof CreateKeyPairRequest;
    InstanceStatus: typeof InstanceStatus;
    InquiryPriceRenewInstancesResponse: typeof InquiryPriceRenewInstancesResponse;
    AllocateHostsResponse: typeof AllocateHostsResponse;
    DescribeImageSharePermissionRequest: typeof DescribeImageSharePermissionRequest;
    DisasterRecoverGroup: typeof DisasterRecoverGroup;
    InquiryPriceResetInstanceResponse: typeof InquiryPriceResetInstanceResponse;
    DescribeInstanceTypeConfigsRequest: typeof DescribeInstanceTypeConfigsRequest;
    DescribeImageSharePermissionResponse: typeof DescribeImageSharePermissionResponse;
    ModifyHostsAttributeResponse: typeof ModifyHostsAttributeResponse;
    DescribeDisasterRecoverGroupQuotaRequest: typeof DescribeDisasterRecoverGroupQuotaRequest;
    StartInstancesResponse: typeof StartInstancesResponse;
    ModifyInstancesVpcAttributeRequest: typeof ModifyInstancesVpcAttributeRequest;
    DescribeReservedInstancesRequest: typeof DescribeReservedInstancesRequest;
    DescribeInternetChargeTypeConfigsResponse: typeof DescribeInternetChargeTypeConfigsResponse;
    DescribeZoneInstanceConfigInfosRequest: typeof DescribeZoneInstanceConfigInfosRequest;
    DescribeZonesResponse: typeof DescribeZonesResponse;
    ItemPrice: typeof ItemPrice;
    InstanceTypeQuotaItem: typeof InstanceTypeQuotaItem;
    ImageOsList: typeof ImageOsList;
    InquiryPriceRunInstancesResponse: typeof InquiryPriceRunInstancesResponse;
    DescribeHostsRequest: typeof DescribeHostsRequest;
    ModifyInstancesRenewFlagResponse: typeof ModifyInstancesRenewFlagResponse;
    DescribeInstancesStatusRequest: typeof DescribeInstancesStatusRequest;
    InquiryPriceResizeInstanceDisksResponse: typeof InquiryPriceResizeInstanceDisksResponse;
    TerminateInstancesRequest: typeof TerminateInstancesRequest;
    SharePermission: typeof SharePermission;
    ReservedInstances: typeof ReservedInstances;
    DeleteImagesResponse: typeof DeleteImagesResponse;
    ImportImageResponse: typeof ImportImageResponse;
    ModifyDisasterRecoverGroupAttributeRequest: typeof ModifyDisasterRecoverGroupAttributeRequest;
    RebootInstancesResponse: typeof RebootInstancesResponse;
    InquiryPriceResetInstancesTypeResponse: typeof InquiryPriceResetInstancesTypeResponse;
    ReservedInstancesOffering: typeof ReservedInstancesOffering;
    OsVersion: typeof OsVersion;
    ModifyImageAttributeResponse: typeof ModifyImageAttributeResponse;
    InquiryPriceRenewInstancesRequest: typeof InquiryPriceRenewInstancesRequest;
    DescribeInstancesRequest: typeof DescribeInstancesRequest;
    RegionInfo: typeof RegionInfo;
    StopInstancesRequest: typeof StopInstancesRequest;
    DescribeInternetChargeTypeConfigsRequest: typeof DescribeInternetChargeTypeConfigsRequest;
    DescribeImagesRequest: typeof DescribeImagesRequest;
    ModifyImageAttributeRequest: typeof ModifyImageAttributeRequest;
    ResizeInstanceDisksResponse: typeof ResizeInstanceDisksResponse;
    ModifyInstancesRenewFlagRequest: typeof ModifyInstancesRenewFlagRequest;
    DisassociateSecurityGroupsRequest: typeof DisassociateSecurityGroupsRequest;
    ModifyHostsAttributeRequest: typeof ModifyHostsAttributeRequest;
    ImportKeyPairRequest: typeof ImportKeyPairRequest;
    KeyPair: typeof KeyPair;
    DescribeReservedInstancesOfferingsResponse: typeof DescribeReservedInstancesOfferingsResponse;
    RenewInstancesResponse: typeof RenewInstancesResponse;
    RunMonitorServiceEnabled: typeof RunMonitorServiceEnabled;
    ResetInstanceResponse: typeof ResetInstanceResponse;
    Filter: typeof Filter;
    VirtualPrivateCloud: typeof VirtualPrivateCloud;
    InternetBandwidthConfig: typeof InternetBandwidthConfig;
    ModifyDisasterRecoverGroupAttributeResponse: typeof ModifyDisasterRecoverGroupAttributeResponse;
    DescribeInstanceTypeConfigsResponse: typeof DescribeInstanceTypeConfigsResponse;
    ResizeInstanceDisksRequest: typeof ResizeInstanceDisksRequest;
    DescribeInstanceFamilyConfigsRequest: typeof DescribeInstanceFamilyConfigsRequest;
    DescribeInstanceInternetBandwidthConfigsRequest: typeof DescribeInstanceInternetBandwidthConfigsRequest;
    PurchaseReservedInstancesOfferingResponse: typeof PurchaseReservedInstancesOfferingResponse;
    StorageBlock: typeof StorageBlock;
    InternetAccessible: typeof InternetAccessible;
    RenewHostsResponse: typeof RenewHostsResponse;
    DisassociateSecurityGroupsResponse: typeof DisassociateSecurityGroupsResponse;
    Snapshot: typeof Snapshot;
    ModifyInstancesProjectResponse: typeof ModifyInstancesProjectResponse;
    InstanceChargePrepaid: typeof InstanceChargePrepaid;
    Price: typeof Price;
};
export {};
