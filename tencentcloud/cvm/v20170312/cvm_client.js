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
const ChargePrepaid = models_1.Models.ChargePrepaid;
const LocalDiskType = models_1.Models.LocalDiskType;
const AssociateInstancesKeyPairsResponse = models_1.Models.AssociateInstancesKeyPairsResponse;
const RenewInstancesRequest = models_1.Models.RenewInstancesRequest;
const DescribeImageQuotaResponse = models_1.Models.DescribeImageQuotaResponse;
const ModifyInstancesProjectRequest = models_1.Models.ModifyInstancesProjectRequest;
const ResetInstancesTypeResponse = models_1.Models.ResetInstancesTypeResponse;
const HostResource = models_1.Models.HostResource;
const DeleteDisasterRecoverGroupsRequest = models_1.Models.DeleteDisasterRecoverGroupsRequest;
const DeleteKeyPairsResponse = models_1.Models.DeleteKeyPairsResponse;
const TerminateInstancesResponse = models_1.Models.TerminateInstancesResponse;
const ModifyInstancesChargeTypeResponse = models_1.Models.ModifyInstancesChargeTypeResponse;
const CreateDisasterRecoverGroupResponse = models_1.Models.CreateDisasterRecoverGroupResponse;
const InquiryPriceResetInstancesInternetMaxBandwidthResponse = models_1.Models.InquiryPriceResetInstancesInternetMaxBandwidthResponse;
const ModifyKeyPairAttributeRequest = models_1.Models.ModifyKeyPairAttributeRequest;
const AssociateSecurityGroupsRequest = models_1.Models.AssociateSecurityGroupsRequest;
const ResetInstancesTypeRequest = models_1.Models.ResetInstancesTypeRequest;
const InquiryPriceResetInstanceRequest = models_1.Models.InquiryPriceResetInstanceRequest;
const RunInstancesRequest = models_1.Models.RunInstancesRequest;
const DeleteImagesRequest = models_1.Models.DeleteImagesRequest;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const DescribeHostsResponse = models_1.Models.DescribeHostsResponse;
const DeleteKeyPairsRequest = models_1.Models.DeleteKeyPairsRequest;
const SystemDisk = models_1.Models.SystemDisk;
const ResetInstanceRequest = models_1.Models.ResetInstanceRequest;
const InstanceTypeConfig = models_1.Models.InstanceTypeConfig;
const AllocateHostsRequest = models_1.Models.AllocateHostsRequest;
const LoginSettings = models_1.Models.LoginSettings;
const DescribeRegionsResponse = models_1.Models.DescribeRegionsResponse;
const PurchaseReservedInstancesOfferingRequest = models_1.Models.PurchaseReservedInstancesOfferingRequest;
const RebootInstancesRequest = models_1.Models.RebootInstancesRequest;
const AssociateInstancesKeyPairsRequest = models_1.Models.AssociateInstancesKeyPairsRequest;
const ImportKeyPairResponse = models_1.Models.ImportKeyPairResponse;
const DescribeInstancesStatusResponse = models_1.Models.DescribeInstancesStatusResponse;
const ZoneInfo = models_1.Models.ZoneInfo;
const InquiryPriceModifyInstancesChargeTypeResponse = models_1.Models.InquiryPriceModifyInstancesChargeTypeResponse;
const DescribeKeyPairsResponse = models_1.Models.DescribeKeyPairsResponse;
const ResetInstancesPasswordRequest = models_1.Models.ResetInstancesPasswordRequest;
const InternetChargeTypeConfig = models_1.Models.InternetChargeTypeConfig;
const DescribeImagesResponse = models_1.Models.DescribeImagesResponse;
const ModifyInstancesVpcAttributeResponse = models_1.Models.ModifyInstancesVpcAttributeResponse;
const InquiryPriceResetInstancesTypeRequest = models_1.Models.InquiryPriceResetInstancesTypeRequest;
const DescribeInstancesOperationLimitRequest = models_1.Models.DescribeInstancesOperationLimitRequest;
const ModifyInstancesChargeTypeRequest = models_1.Models.ModifyInstancesChargeTypeRequest;
const DescribeInstanceVncUrlRequest = models_1.Models.DescribeInstanceVncUrlRequest;
const ModifyImageSharePermissionRequest = models_1.Models.ModifyImageSharePermissionRequest;
const DisassociateInstancesKeyPairsResponse = models_1.Models.DisassociateInstancesKeyPairsResponse;
const InquiryPriceResizeInstanceDisksRequest = models_1.Models.InquiryPriceResizeInstanceDisksRequest;
const RunInstancesResponse = models_1.Models.RunInstancesResponse;
const ResetInstancesInternetMaxBandwidthResponse = models_1.Models.ResetInstancesInternetMaxBandwidthResponse;
const ModifyInstancesAttributeResponse = models_1.Models.ModifyInstancesAttributeResponse;
const ModifyImageSharePermissionResponse = models_1.Models.ModifyImageSharePermissionResponse;
const DescribeInstancesOperationLimitResponse = models_1.Models.DescribeInstancesOperationLimitResponse;
const SyncImagesResponse = models_1.Models.SyncImagesResponse;
const DescribeZoneInstanceConfigInfosResponse = models_1.Models.DescribeZoneInstanceConfigInfosResponse;
const ModifyInstancesAttributeRequest = models_1.Models.ModifyInstancesAttributeRequest;
const RenewHostsRequest = models_1.Models.RenewHostsRequest;
const DescribeZonesRequest = models_1.Models.DescribeZonesRequest;
const StartInstancesRequest = models_1.Models.StartInstancesRequest;
const Tag = models_1.Models.Tag;
const DescribeInstanceInternetBandwidthConfigsResponse = models_1.Models.DescribeInstanceInternetBandwidthConfigsResponse;
const Placement = models_1.Models.Placement;
const DescribeDisasterRecoverGroupsRequest = models_1.Models.DescribeDisasterRecoverGroupsRequest;
const SyncImagesRequest = models_1.Models.SyncImagesRequest;
const DisassociateInstancesKeyPairsRequest = models_1.Models.DisassociateInstancesKeyPairsRequest;
const DescribeImageQuotaRequest = models_1.Models.DescribeImageQuotaRequest;
const DescribeInstanceFamilyConfigsResponse = models_1.Models.DescribeInstanceFamilyConfigsResponse;
const CreateImageResponse = models_1.Models.CreateImageResponse;
const StopInstancesResponse = models_1.Models.StopInstancesResponse;
const InstanceMarketOptionsRequest = models_1.Models.InstanceMarketOptionsRequest;
const InquiryPriceResetInstancesInternetMaxBandwidthRequest = models_1.Models.InquiryPriceResetInstancesInternetMaxBandwidthRequest;
const ResetInstancesPasswordResponse = models_1.Models.ResetInstancesPasswordResponse;
const InquiryPriceRunInstancesRequest = models_1.Models.InquiryPriceRunInstancesRequest;
const Image = models_1.Models.Image;
const DescribeDisasterRecoverGroupQuotaResponse = models_1.Models.DescribeDisasterRecoverGroupQuotaResponse;
const DescribeRegionsRequest = models_1.Models.DescribeRegionsRequest;
const CreateDisasterRecoverGroupRequest = models_1.Models.CreateDisasterRecoverGroupRequest;
const DescribeReservedInstancesResponse = models_1.Models.DescribeReservedInstancesResponse;
const DescribeImportImageOsResponse = models_1.Models.DescribeImportImageOsResponse;
const ModifyKeyPairAttributeResponse = models_1.Models.ModifyKeyPairAttributeResponse;
const DataDisk = models_1.Models.DataDisk;
const DescribeKeyPairsRequest = models_1.Models.DescribeKeyPairsRequest;
const OperationCountLimit = models_1.Models.OperationCountLimit;
const DeleteDisasterRecoverGroupsResponse = models_1.Models.DeleteDisasterRecoverGroupsResponse;
const HostItem = models_1.Models.HostItem;
const Externals = models_1.Models.Externals;
const InquiryPriceModifyInstancesChargeTypeRequest = models_1.Models.InquiryPriceModifyInstancesChargeTypeRequest;
const CreateImageRequest = models_1.Models.CreateImageRequest;
const Instance = models_1.Models.Instance;
const EnhancedService = models_1.Models.EnhancedService;
const CreateKeyPairResponse = models_1.Models.CreateKeyPairResponse;
const DescribeInstanceVncUrlResponse = models_1.Models.DescribeInstanceVncUrlResponse;
const DescribeReservedInstancesOfferingsRequest = models_1.Models.DescribeReservedInstancesOfferingsRequest;
const DescribeDisasterRecoverGroupsResponse = models_1.Models.DescribeDisasterRecoverGroupsResponse;
const RunSecurityServiceEnabled = models_1.Models.RunSecurityServiceEnabled;
const ActionTimer = models_1.Models.ActionTimer;
const TagSpecification = models_1.Models.TagSpecification;
const ResetInstancesInternetMaxBandwidthRequest = models_1.Models.ResetInstancesInternetMaxBandwidthRequest;
const InstanceFamilyConfig = models_1.Models.InstanceFamilyConfig;
const AssociateSecurityGroupsResponse = models_1.Models.AssociateSecurityGroupsResponse;
const ImportImageRequest = models_1.Models.ImportImageRequest;
const SpotMarketOptions = models_1.Models.SpotMarketOptions;
const DescribeImportImageOsRequest = models_1.Models.DescribeImportImageOsRequest;
const CreateKeyPairRequest = models_1.Models.CreateKeyPairRequest;
const InstanceStatus = models_1.Models.InstanceStatus;
const InquiryPriceRenewInstancesResponse = models_1.Models.InquiryPriceRenewInstancesResponse;
const AllocateHostsResponse = models_1.Models.AllocateHostsResponse;
const DescribeImageSharePermissionRequest = models_1.Models.DescribeImageSharePermissionRequest;
const DisasterRecoverGroup = models_1.Models.DisasterRecoverGroup;
const InquiryPriceResetInstanceResponse = models_1.Models.InquiryPriceResetInstanceResponse;
const DescribeInstanceTypeConfigsRequest = models_1.Models.DescribeInstanceTypeConfigsRequest;
const DescribeImageSharePermissionResponse = models_1.Models.DescribeImageSharePermissionResponse;
const ModifyHostsAttributeResponse = models_1.Models.ModifyHostsAttributeResponse;
const DescribeDisasterRecoverGroupQuotaRequest = models_1.Models.DescribeDisasterRecoverGroupQuotaRequest;
const StartInstancesResponse = models_1.Models.StartInstancesResponse;
const ModifyInstancesVpcAttributeRequest = models_1.Models.ModifyInstancesVpcAttributeRequest;
const DescribeReservedInstancesRequest = models_1.Models.DescribeReservedInstancesRequest;
const DescribeInternetChargeTypeConfigsResponse = models_1.Models.DescribeInternetChargeTypeConfigsResponse;
const DescribeZoneInstanceConfigInfosRequest = models_1.Models.DescribeZoneInstanceConfigInfosRequest;
const DescribeZonesResponse = models_1.Models.DescribeZonesResponse;
const ItemPrice = models_1.Models.ItemPrice;
const InstanceTypeQuotaItem = models_1.Models.InstanceTypeQuotaItem;
const ImageOsList = models_1.Models.ImageOsList;
const InquiryPriceRunInstancesResponse = models_1.Models.InquiryPriceRunInstancesResponse;
const DescribeHostsRequest = models_1.Models.DescribeHostsRequest;
const ModifyInstancesRenewFlagResponse = models_1.Models.ModifyInstancesRenewFlagResponse;
const DescribeInstancesStatusRequest = models_1.Models.DescribeInstancesStatusRequest;
const InquiryPriceResizeInstanceDisksResponse = models_1.Models.InquiryPriceResizeInstanceDisksResponse;
const TerminateInstancesRequest = models_1.Models.TerminateInstancesRequest;
const SharePermission = models_1.Models.SharePermission;
const ReservedInstances = models_1.Models.ReservedInstances;
const DeleteImagesResponse = models_1.Models.DeleteImagesResponse;
const ImportImageResponse = models_1.Models.ImportImageResponse;
const ModifyDisasterRecoverGroupAttributeRequest = models_1.Models.ModifyDisasterRecoverGroupAttributeRequest;
const RebootInstancesResponse = models_1.Models.RebootInstancesResponse;
const InquiryPriceResetInstancesTypeResponse = models_1.Models.InquiryPriceResetInstancesTypeResponse;
const ReservedInstancesOffering = models_1.Models.ReservedInstancesOffering;
const OsVersion = models_1.Models.OsVersion;
const ModifyImageAttributeResponse = models_1.Models.ModifyImageAttributeResponse;
const InquiryPriceRenewInstancesRequest = models_1.Models.InquiryPriceRenewInstancesRequest;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const RegionInfo = models_1.Models.RegionInfo;
const StopInstancesRequest = models_1.Models.StopInstancesRequest;
const DescribeInternetChargeTypeConfigsRequest = models_1.Models.DescribeInternetChargeTypeConfigsRequest;
const DescribeImagesRequest = models_1.Models.DescribeImagesRequest;
const ModifyImageAttributeRequest = models_1.Models.ModifyImageAttributeRequest;
const ResizeInstanceDisksResponse = models_1.Models.ResizeInstanceDisksResponse;
const ModifyInstancesRenewFlagRequest = models_1.Models.ModifyInstancesRenewFlagRequest;
const DisassociateSecurityGroupsRequest = models_1.Models.DisassociateSecurityGroupsRequest;
const ModifyHostsAttributeRequest = models_1.Models.ModifyHostsAttributeRequest;
const ImportKeyPairRequest = models_1.Models.ImportKeyPairRequest;
const KeyPair = models_1.Models.KeyPair;
const DescribeReservedInstancesOfferingsResponse = models_1.Models.DescribeReservedInstancesOfferingsResponse;
const RenewInstancesResponse = models_1.Models.RenewInstancesResponse;
const RunMonitorServiceEnabled = models_1.Models.RunMonitorServiceEnabled;
const ResetInstanceResponse = models_1.Models.ResetInstanceResponse;
const Filter = models_1.Models.Filter;
const VirtualPrivateCloud = models_1.Models.VirtualPrivateCloud;
const InternetBandwidthConfig = models_1.Models.InternetBandwidthConfig;
const ModifyDisasterRecoverGroupAttributeResponse = models_1.Models.ModifyDisasterRecoverGroupAttributeResponse;
const DescribeInstanceTypeConfigsResponse = models_1.Models.DescribeInstanceTypeConfigsResponse;
const ResizeInstanceDisksRequest = models_1.Models.ResizeInstanceDisksRequest;
const DescribeInstanceFamilyConfigsRequest = models_1.Models.DescribeInstanceFamilyConfigsRequest;
const DescribeInstanceInternetBandwidthConfigsRequest = models_1.Models.DescribeInstanceInternetBandwidthConfigsRequest;
const PurchaseReservedInstancesOfferingResponse = models_1.Models.PurchaseReservedInstancesOfferingResponse;
const StorageBlock = models_1.Models.StorageBlock;
const InternetAccessible = models_1.Models.InternetAccessible;
const RenewHostsResponse = models_1.Models.RenewHostsResponse;
const DisassociateSecurityGroupsResponse = models_1.Models.DisassociateSecurityGroupsResponse;
const Snapshot = models_1.Models.Snapshot;
const ModifyInstancesProjectResponse = models_1.Models.ModifyInstancesProjectResponse;
const InstanceChargePrepaid = models_1.Models.InstanceChargePrepaid;
const Price = models_1.Models.Price;
/**
 * cvm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super('cvm.tencentcloudapi.com', '2017-03-12', credential, region, profile);
    }
    /**
     * 本接口(DescribeImageQuota)用于查询用户帐号的镜像配额。
     * @param {DescribeImageQuotaRequest} req
     * @param {function(string, DescribeImageQuotaResponse):void} cb
     * @public
     */
    DescribeImageQuota(req, cb) {
        const resp = new DescribeImageQuotaResponse();
        this.request('DescribeImageQuota', req, resp, cb);
    }
    /**
       * 本接口 (StopInstances) 用于关闭一个或多个实例。
  
  * 只有状态为`RUNNING`的实例才可以进行此操作。
  * 接口调用成功时，实例会进入`STOPPING`状态；关闭实例成功时，实例会进入`STOPPED`状态。
  * 支持强制关闭。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
  * 支持批量操作。每次请求批量实例的上限为100。
  * 本接口为异步接口，关闭实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表关闭实例操作成功。
       * @param {StopInstancesRequest} req
       * @param {function(string, StopInstancesResponse):void} cb
       * @public
       */
    StopInstances(req, cb) {
        const resp = new StopInstancesResponse();
        this.request('StopInstances', req, resp, cb);
    }
    /**
       * 本接口 (DescribeInstancesStatus) 用于查询一个或多个实例的状态。
  
  * 可以根据实例`ID`来查询实例的状态。
  * 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的实例状态。
       * @param {DescribeInstancesStatusRequest} req
       * @param {function(string, DescribeInstancesStatusResponse):void} cb
       * @public
       */
    DescribeInstancesStatus(req, cb) {
        const resp = new DescribeInstancesStatusResponse();
        this.request('DescribeInstancesStatus', req, resp, cb);
    }
    /**
       * 本接口（ModifyImageSharePermission）用于修改镜像分享信息。
  
  * 分享镜像后，被分享账户可以通过该镜像创建实例。
  * 每个自定义镜像最多可共享给50个账户。
  * 分享镜像无法更改名称，描述，仅可用于创建实例。
  * 只支持分享到对方账户相同地域。
  
       * @param {ModifyImageSharePermissionRequest} req
       * @param {function(string, ModifyImageSharePermissionResponse):void} cb
       * @public
       */
    ModifyImageSharePermission(req, cb) {
        const resp = new ModifyImageSharePermissionResponse();
        this.request('ModifyImageSharePermission', req, resp, cb);
    }
    /**
     * 本接口（DescribeImageSharePermission）用于查询镜像分享信息。
     * @param {DescribeImageSharePermissionRequest} req
     * @param {function(string, DescribeImageSharePermissionResponse):void} cb
     * @public
     */
    DescribeImageSharePermission(req, cb) {
        const resp = new DescribeImageSharePermissionResponse();
        this.request('DescribeImageSharePermission', req, resp, cb);
    }
    /**
       * 本接口 (InquiryPriceModifyInstancesChargeType) 用于切换实例的计费模式询价。
  
  * 只支持从 `POSTPAID_BY_HOUR` 计费模式切换为`PREPAID`计费模式。
  * 关机不收费的实例、`BC1`和`BS1`机型族的实例、设置定时销毁的实例、竞价实例不支持该操作。
       * @param {InquiryPriceModifyInstancesChargeTypeRequest} req
       * @param {function(string, InquiryPriceModifyInstancesChargeTypeResponse):void} cb
       * @public
       */
    InquiryPriceModifyInstancesChargeType(req, cb) {
        const resp = new InquiryPriceModifyInstancesChargeTypeResponse();
        this.request('InquiryPriceModifyInstancesChargeType', req, resp, cb);
    }
    /**
     * 本接口（ModifyHostsAttribute）用于修改CDH实例的属性，如实例名称和续费标记等。参数HostName和RenewFlag必须设置其中一个，但不能同时设置。
     * @param {ModifyHostsAttributeRequest} req
     * @param {function(string, ModifyHostsAttributeResponse):void} cb
     * @public
     */
    ModifyHostsAttribute(req, cb) {
        const resp = new ModifyHostsAttributeResponse();
        this.request('ModifyHostsAttribute', req, resp, cb);
    }
    /**
       * 本接口(DescribeImages) 用于查看镜像列表。
  
  * 可以通过指定镜像ID来查询指定镜像的详细信息，或通过设定过滤器来查询满足过滤条件的镜像的详细信息。
  * 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个镜像信息。
       * @param {DescribeImagesRequest} req
       * @param {function(string, DescribeImagesResponse):void} cb
       * @public
       */
    DescribeImages(req, cb) {
        const resp = new DescribeImagesResponse();
        this.request('DescribeImages', req, resp, cb);
    }
    /**
       * 本接口 (ModifyKeyPairAttribute) 用于修改密钥对属性。
  
  * 修改密钥对ID所指定的密钥对的名称和描述信息。
  * 密钥对名称不能和已经存在的密钥对的名称重复。
  * 密钥对ID是密钥对的唯一标识，不可修改。
       * @param {ModifyKeyPairAttributeRequest} req
       * @param {function(string, ModifyKeyPairAttributeResponse):void} cb
       * @public
       */
    ModifyKeyPairAttribute(req, cb) {
        const resp = new ModifyKeyPairAttributeResponse();
        this.request('ModifyKeyPairAttribute', req, resp, cb);
    }
    /**
     * 本接口(DescribeZoneInstanceConfigInfos) 获取可用区的机型信息。
     * @param {DescribeZoneInstanceConfigInfosRequest} req
     * @param {function(string, DescribeZoneInstanceConfigInfosResponse):void} cb
     * @public
     */
    DescribeZoneInstanceConfigInfos(req, cb) {
        const resp = new DescribeZoneInstanceConfigInfosResponse();
        this.request('DescribeZoneInstanceConfigInfos', req, resp, cb);
    }
    /**
       * 本接口 (ModifyInstancesAttribute) 用于修改实例的属性（目前只支持修改实例的名称和关联的安全组）。
  
  * “实例名称”仅为方便用户自己管理之用，腾讯云并不以此名称作为提交工单或是进行实例管理操作的依据。
  * 支持批量操作。每次请求批量实例的上限为100。
  * 修改关联安全组时，子机原来关联的安全组会被解绑。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ModifyInstancesAttributeRequest} req
       * @param {function(string, ModifyInstancesAttributeResponse):void} cb
       * @public
       */
    ModifyInstancesAttribute(req, cb) {
        const resp = new ModifyInstancesAttributeResponse();
        this.request('ModifyInstancesAttribute', req, resp, cb);
    }
    /**
     * 本接口(DescribeRegions)用于查询地域信息。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        const resp = new DescribeRegionsResponse();
        this.request('DescribeRegions', req, resp, cb);
    }
    /**
       * 本接口 (InquiryPriceResetInstancesInternetMaxBandwidth) 用于调整实例公网带宽上限询价。
  
  * 不同机型带宽上限范围不一致，具体限制详见[公网带宽上限](https://cloud.tencent.com/document/product/213/12523)。
  * 对于`BANDWIDTH_PREPAID`计费方式的带宽，目前不支持调小带宽，且需要输入参数`StartTime`和`EndTime`，指定调整后的带宽的生效时间段。在这种场景下会涉及扣费，请确保账户余额充足。可通过[`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
  * 对于 `TRAFFIC_POSTPAID_BY_HOUR`、 `BANDWIDTH_POSTPAID_BY_HOUR` 和 `BANDWIDTH_PACKAGE` 计费方式的带宽，使用该接口调整带宽上限是实时生效的，可以在带宽允许的范围内调大或者调小带宽，不支持输入参数 `StartTime` 和 `EndTime` 。
  * 接口不支持调整`BANDWIDTH_POSTPAID_BY_MONTH`计费方式的带宽。
  * 接口不支持批量调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽。
  * 接口不支持批量调整混合计费方式的带宽。例如不支持同时调整`TRAFFIC_POSTPAID_BY_HOUR`和`BANDWIDTH_PACKAGE`计费方式的带宽。
       * @param {InquiryPriceResetInstancesInternetMaxBandwidthRequest} req
       * @param {function(string, InquiryPriceResetInstancesInternetMaxBandwidthResponse):void} cb
       * @public
       */
    InquiryPriceResetInstancesInternetMaxBandwidth(req, cb) {
        const resp = new InquiryPriceResetInstancesInternetMaxBandwidthResponse();
        this.request('InquiryPriceResetInstancesInternetMaxBandwidth', req, resp, cb);
    }
    /**
       * 本接口 (DisassociateInstancesKeyPairs) 用于解除实例的密钥绑定关系。
  
  * 只支持[`STOPPED`](https://cloud.tencent.com/document/product/213/15753#InstanceStatus)状态的`Linux`操作系统的实例。
  * 解绑密钥后，实例可以通过原来设置的密码登录。
  * 如果原来没有设置密码，解绑后将无法使用 `SSH` 登录。可以调用 [ResetInstancesPassword](https://cloud.tencent.com/document/api/213/15736) 接口来设置登录密码。
  * 支持批量操作。每次请求批量实例的上限为100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
       * @param {DisassociateInstancesKeyPairsRequest} req
       * @param {function(string, DisassociateInstancesKeyPairsResponse):void} cb
       * @public
       */
    DisassociateInstancesKeyPairs(req, cb) {
        const resp = new DisassociateInstancesKeyPairsResponse();
        this.request('DisassociateInstancesKeyPairs', req, resp, cb);
    }
    /**
       * 本接口 (CreateKeyPair) 用于创建一个 `OpenSSH RSA` 密钥对，可以用于登录 `Linux` 实例。
  
  * 开发者只需指定密钥对名称，即可由系统自动创建密钥对，并返回所生成的密钥对的 `ID` 及其公钥、私钥的内容。
  * 密钥对名称不能和已经存在的密钥对的名称重复。
  * 私钥的内容可以保存到文件中作为 `SSH` 的一种认证方式。
  * 腾讯云不会保存用户的私钥，请妥善保管。
       * @param {CreateKeyPairRequest} req
       * @param {function(string, CreateKeyPairResponse):void} cb
       * @public
       */
    CreateKeyPair(req, cb) {
        const resp = new CreateKeyPairResponse();
        this.request('CreateKeyPair', req, resp, cb);
    }
    /**
       * 本接口 (DeleteKeyPairs) 用于删除已在腾讯云托管的密钥对。
  
  * 可以同时删除多个密钥对。
  * 不能删除已被实例或镜像引用的密钥对，所以需要独立判断是否所有密钥对都被成功删除。
       * @param {DeleteKeyPairsRequest} req
       * @param {function(string, DeleteKeyPairsResponse):void} cb
       * @public
       */
    DeleteKeyPairs(req, cb) {
        const resp = new DeleteKeyPairsResponse();
        this.request('DeleteKeyPairs', req, resp, cb);
    }
    /**
     * 本接口 (CreateDisasterRecoverGroup)用于创建[分散置放群组](https://cloud.tencent.com/document/product/213/15486)。创建好的置放群组，可在[创建实例](https://cloud.tencent.com/document/api/213/15730)时指定。
     * @param {CreateDisasterRecoverGroupRequest} req
     * @param {function(string, CreateDisasterRecoverGroupResponse):void} cb
     * @public
     */
    CreateDisasterRecoverGroup(req, cb) {
        const resp = new CreateDisasterRecoverGroupResponse();
        this.request('CreateDisasterRecoverGroup', req, resp, cb);
    }
    /**
       * 本接口 (DescribeInstances) 用于查询一个或多个实例的详细信息。
  
  * 可以根据实例`ID`、实例名称或者实例计费模式等信息来查询实例的详细信息。过滤信息详细请见过滤器`Filter`。
  * 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的实例。
  * 支持查询实例的最新操作（LatestOperation）以及最新操作状态(LatestOperationState)。
       * @param {DescribeInstancesRequest} req
       * @param {function(string, DescribeInstancesResponse):void} cb
       * @public
       */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request('DescribeInstances', req, resp, cb);
    }
    /**
       * 本接口 (ImportKeyPair) 用于导入密钥对。
  
  * 本接口的功能是将密钥对导入到用户账户，并不会自动绑定到实例。如需绑定可以使用[AssociasteInstancesKeyPair](https://cloud.tencent.com/document/api/213/9404)接口。
  * 需指定密钥对名称以及该密钥对的公钥文本。
  * 如果用户只有私钥，可以通过 `SSL` 工具将私钥转换成公钥后再导入。
       * @param {ImportKeyPairRequest} req
       * @param {function(string, ImportKeyPairResponse):void} cb
       * @public
       */
    ImportKeyPair(req, cb) {
        const resp = new ImportKeyPairResponse();
        this.request('ImportKeyPair', req, resp, cb);
    }
    /**
       * 本接口（SyncImages）用于将自定义镜像同步到其它地区。
  
  * 该接口每次调用只支持同步一个镜像。
  * 该接口支持多个同步地域。
  * 单个帐号在每个地域最多支持存在10个自定义镜像。
       * @param {SyncImagesRequest} req
       * @param {function(string, SyncImagesResponse):void} cb
       * @public
       */
    SyncImages(req, cb) {
        const resp = new SyncImagesResponse();
        this.request('SyncImages', req, resp, cb);
    }
    /**
       * 本接口 (DescribeInstanceInternetBandwidthConfigs) 用于查询实例带宽配置。
  
  * 只支持查询`BANDWIDTH_PREPAID`（ 预付费按带宽结算 ）计费模式的带宽配置。
  * 接口返回实例的所有带宽配置信息（包含历史的带宽配置信息）。
       * @param {DescribeInstanceInternetBandwidthConfigsRequest} req
       * @param {function(string, DescribeInstanceInternetBandwidthConfigsResponse):void} cb
       * @public
       */
    DescribeInstanceInternetBandwidthConfigs(req, cb) {
        const resp = new DescribeInstanceInternetBandwidthConfigsResponse();
        this.request('DescribeInstanceInternetBandwidthConfigs', req, resp, cb);
    }
    /**
       * 本接口 (AssociateInstancesKeyPairs) 用于将密钥绑定到实例上。
  
  * 将密钥的公钥写入到实例的`SSH`配置当中，用户就可以通过该密钥的私钥来登录实例。
  * 如果实例原来绑定过密钥，那么原来的密钥将失效。
  * 如果实例原来是通过密码登录，绑定密钥后无法使用密码登录。
  * 支持批量操作。每次请求批量实例的上限为100。如果批量实例存在不允许操作的实例，操作会以特定错误码返回。
       * @param {AssociateInstancesKeyPairsRequest} req
       * @param {function(string, AssociateInstancesKeyPairsResponse):void} cb
       * @public
       */
    AssociateInstancesKeyPairs(req, cb) {
        const resp = new AssociateInstancesKeyPairsResponse();
        this.request('AssociateInstancesKeyPairs', req, resp, cb);
    }
    /**
       * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
  
  * 实例创建成功后将自动开机启动，[实例状态](https://cloud.tencent.com/document/product/213/15753#InstanceStatus)变为“运行中”。
  * 预付费实例的购买会预先扣除本次实例购买所需金额，按小时后付费实例购买会预先冻结本次实例购买一小时内所需金额，在调用本接口前请确保账户余额充足。
  * 本接口允许购买的实例数量遵循[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)，所创建的实例和官网入口创建的实例共用配额。
  * 本接口为异步接口，当创建实例请求下发成功后会返回一个实例`ID`列表和一个`RequestId`，此时创建实例操作并未立即完成。在此期间实例的状态将会处于“PENDING”，实例创建结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728)  接口查询，如果实例状态(InstanceState)由“PENDING”变为“RUNNING”，则代表实例创建成功，“LAUNCH_FAILED”代表实例创建失败。
       * @param {RunInstancesRequest} req
       * @param {function(string, RunInstancesResponse):void} cb
       * @public
       */
    RunInstances(req, cb) {
        const resp = new RunInstancesResponse();
        this.request('RunInstances', req, resp, cb);
    }
    /**
       * 本接口（DeleteImages）用于删除一个或多个镜像。
  
  * 当[镜像状态](https://cloud.tencent.com/document/product/213/15753#Image)为`创建中`和`使用中`时, 不允许删除。镜像状态可以通过[DescribeImages](https://cloud.tencent.com/document/api/213/9418)获取。
  * 每个地域最多只支持创建10个自定义镜像，删除镜像可以释放账户的配额。
  * 当镜像正在被其它账户分享时，不允许删除。
       * @param {DeleteImagesRequest} req
       * @param {function(string, DeleteImagesResponse):void} cb
       * @public
       */
    DeleteImages(req, cb) {
        const resp = new DeleteImagesResponse();
        this.request('DeleteImages', req, resp, cb);
    }
    /**
       * 本接口 (InquiryPriceResizeInstanceDisks) 用于扩容实例的数据盘询价。
  
  * 目前只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性）询价，且[数据盘类型](https://cloud.tencent.com/document/product/213/15753#DataDisk)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`。
  * 目前不支持[CDH](https://cloud.tencent.com/document/product/416)实例使用该接口扩容数据盘询价。* 仅支持包年包月实例随机器购买的数据盘。* 目前只支持扩容一块数据盘询价。
       * @param {InquiryPriceResizeInstanceDisksRequest} req
       * @param {function(string, InquiryPriceResizeInstanceDisksResponse):void} cb
       * @public
       */
    InquiryPriceResizeInstanceDisks(req, cb) {
        const resp = new InquiryPriceResizeInstanceDisksResponse();
        this.request('InquiryPriceResizeInstanceDisks', req, resp, cb);
    }
    /**
       * 本接口 (TerminateInstances) 用于主动退还实例。
  
  * 不再使用的实例，可通过本接口主动退还。
  * 按量计费的实例通过本接口可直接退还；包年包月实例如符合[退还规则](https://cloud.tencent.com/document/product/213/9711)，也可通过本接口主动退还。
  * 包年包月实例首次调用本接口，实例将被移至回收站，再次调用本接口，实例将被销毁，且不可恢复。按量计费实例调用本接口将被直接销毁
  * 支持批量操作，每次请求批量实例的上限为100。
       * @param {TerminateInstancesRequest} req
       * @param {function(string, TerminateInstancesResponse):void} cb
       * @public
       */
    TerminateInstances(req, cb) {
        const resp = new TerminateInstancesResponse();
        this.request('TerminateInstances', req, resp, cb);
    }
    /**
     * 本接口(ModifyInstancesVpcAttribute)用于修改实例vpc属性，如私有网络ip。
     * 此操作默认会关闭实例，完成后再启动。
     * 当指定私有网络ID和子网ID（子网必须在实例所在的可用区）与指定实例所在私有网络不一致时，会将实例迁移至指定的私有网络的子网下。执行此操作前请确保指定的实例上没有绑定[弹性网卡](https://cloud.tencent.com/document/product/576)和[负载均衡](https://cloud.tencent.com/document/product/214)。
     * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     * @param {ModifyInstancesVpcAttributeRequest} req
     * @param {function(string, ModifyInstancesVpcAttributeResponse):void} cb
     * @public
     */
    ModifyInstancesVpcAttribute(req, cb) {
        const resp = new ModifyInstancesVpcAttributeResponse();
        this.request('ModifyInstancesVpcAttribute', req, resp, cb);
    }
    /**
       * 本接口 (InquiryPriceResetInstance) 用于重装实例询价。
  
  * 如果指定了`ImageId`参数，则使用指定的镜像进行重装询价；否则按照当前实例使用的镜像进行重装询价。
  * 目前只支持[系统盘类型](https://cloud.tencent.com/document/api/213/15753#SystemDisk)是`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`类型的实例使用该接口实现`Linux`和`Windows`操作系统切换的重装询价。
  * 目前不支持境外地域的实例使用该接口实现`Linux`和`Windows`操作系统切换的重装询价。
       * @param {InquiryPriceResetInstanceRequest} req
       * @param {function(string, InquiryPriceResetInstanceResponse):void} cb
       * @public
       */
    InquiryPriceResetInstance(req, cb) {
        const resp = new InquiryPriceResetInstanceResponse();
        this.request('InquiryPriceResetInstance', req, resp, cb);
    }
    /**
     * 本接口 (DescribeDisasterRecoverGroupQuota)用于查询[分散置放群组](https://cloud.tencent.com/document/product/213/15486)配额。
     * @param {DescribeDisasterRecoverGroupQuotaRequest} req
     * @param {function(string, DescribeDisasterRecoverGroupQuotaResponse):void} cb
     * @public
     */
    DescribeDisasterRecoverGroupQuota(req, cb) {
        const resp = new DescribeDisasterRecoverGroupQuotaResponse();
        this.request('DescribeDisasterRecoverGroupQuota', req, resp, cb);
    }
    /**
       * 本接口 (ResetInstancesPassword) 用于将实例操作系统的密码重置为用户指定的密码。
  
  *如果是修改系统管理云密码：实例的操作系统不同，管理员帐号也会不一样(`Windows`为`Administrator`，`Ubuntu`为`ubuntu`，其它系统为`root`)。
  * 重置处于运行中状态的实例密码，需要设置关机参数`ForceStop`为`TRUE`。如果没有显式指定强制关机参数，则只有处于关机状态的实例才允许执行重置密码操作。
  * 支持批量操作。将多个实例操作系统的密码重置为相同的密码。每次请求批量实例的上限为100。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ResetInstancesPasswordRequest} req
       * @param {function(string, ResetInstancesPasswordResponse):void} cb
       * @public
       */
    ResetInstancesPassword(req, cb) {
        const resp = new ResetInstancesPasswordResponse();
        this.request('ResetInstancesPassword', req, resp, cb);
    }
    /**
       * 本接口 (ModifyInstancesRenewFlag) 用于修改包年包月实例续费标识。
  
  * 实例被标识为自动续费后，每次在实例到期时，会自动续费一个月。
  * 支持批量操作。每次请求批量实例的上限为100。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ModifyInstancesRenewFlagRequest} req
       * @param {function(string, ModifyInstancesRenewFlagResponse):void} cb
       * @public
       */
    ModifyInstancesRenewFlag(req, cb) {
        const resp = new ModifyInstancesRenewFlagResponse();
        this.request('ModifyInstancesRenewFlag', req, resp, cb);
    }
    /**
     * 本接口(PurchaseReservedInstancesOffering)用于用户购买一个或者多个指定配置的预留实例
     * @param {PurchaseReservedInstancesOfferingRequest} req
     * @param {function(string, PurchaseReservedInstancesOfferingResponse):void} cb
     * @public
     */
    PurchaseReservedInstancesOffering(req, cb) {
        const resp = new PurchaseReservedInstancesOfferingResponse();
        this.request('PurchaseReservedInstancesOffering', req, resp, cb);
    }
    /**
       * 本接口 (ResizeInstanceDisks) 用于扩容实例的数据盘。
  
  * 目前只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性），且[数据盘类型](https://cloud.tencent.com/document/api/213/15753#DataDisk)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`和[CDH](https://cloud.tencent.com/document/product/416)实例的`LOCAL_BASIC`、`LOCAL_SSD`类型数据盘。
  * 对于包年包月实例，使用该接口会涉及扣费，请确保账户余额充足。可通过[`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
  * 目前只支持扩容一块数据盘。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ResizeInstanceDisksRequest} req
       * @param {function(string, ResizeInstanceDisksResponse):void} cb
       * @public
       */
    ResizeInstanceDisks(req, cb) {
        const resp = new ResizeInstanceDisksResponse();
        this.request('ResizeInstanceDisks', req, resp, cb);
    }
    /**
     * 本接口(DescribeReservedInstances)可提供列出用户已购买的预留实例
     * @param {DescribeReservedInstancesRequest} req
     * @param {function(string, DescribeReservedInstancesResponse):void} cb
     * @public
     */
    DescribeReservedInstances(req, cb) {
        const resp = new DescribeReservedInstancesResponse();
        this.request('DescribeReservedInstances', req, resp, cb);
    }
    /**
     * 本接口(DescribeZones)用于查询可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        const resp = new DescribeZonesResponse();
        this.request('DescribeZones', req, resp, cb);
    }
    /**
     * 本接口(CreateImage)用于将实例的系统盘制作为新镜像，创建后的镜像可以用于创建实例。
     * @param {CreateImageRequest} req
     * @param {function(string, CreateImageResponse):void} cb
     * @public
     */
    CreateImage(req, cb) {
        const resp = new CreateImageResponse();
        this.request('CreateImage', req, resp, cb);
    }
    /**
     * 本接口 (AssociateSecurityGroups) 用于绑定安全组到指定实例。
     * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     * @param {AssociateSecurityGroupsRequest} req
     * @param {function(string, AssociateSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateSecurityGroups(req, cb) {
        const resp = new AssociateSecurityGroupsResponse();
        this.request('AssociateSecurityGroups', req, resp, cb);
    }
    /**
     * 本接口 (ResetInstancesType) 用于调整实例的机型。
     * 目前只支持[系统盘类型](/document/api/213/9452#block_device)是`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`类型的实例使用该接口进行机型调整。
     * 目前不支持[CDH](https://cloud.tencent.com/document/product/416)实例使用该接口调整机型。对于包年包月实例，使用该接口会涉及扣费，请确保账户余额充足。可通过[`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
     * 本接口为异步接口，调整实例配置请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表调整实例配置操作成功。
     * @param {ResetInstancesTypeRequest} req
     * @param {function(string, ResetInstancesTypeResponse):void} cb
     * @public
     */
    ResetInstancesType(req, cb) {
        const resp = new ResetInstancesTypeResponse();
        this.request('ResetInstancesType', req, resp, cb);
    }
    /**
       * 本接口（ModifyImageAttribute）用于修改镜像属性。
  
  * 已分享的镜像无法修改属性。
       * @param {ModifyImageAttributeRequest} req
       * @param {function(string, ModifyImageAttributeResponse):void} cb
       * @public
       */
    ModifyImageAttribute(req, cb) {
        const resp = new ModifyImageAttributeResponse();
        this.request('ModifyImageAttribute', req, resp, cb);
    }
    /**
       * 本接口（DescribeInstancesOperationLimit）用于查询实例操作限制。
  
  * 目前支持调整配置操作限制次数查询。
       * @param {DescribeInstancesOperationLimitRequest} req
       * @param {function(string, DescribeInstancesOperationLimitResponse):void} cb
       * @public
       */
    DescribeInstancesOperationLimit(req, cb) {
        const resp = new DescribeInstancesOperationLimitResponse();
        this.request('DescribeInstancesOperationLimit', req, resp, cb);
    }
    /**
       * 本接口 (InquiryPriceResetInstancesType) 用于调整实例的机型询价。
  
  * 目前只支持[系统盘类型](https://cloud.tencent.com/document/product/213/15753#SystemDisk)是`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`类型的实例使用该接口进行调整机型询价。
  * 目前不支持[CDH](https://cloud.tencent.com/document/product/416)实例使用该接口调整机型询价。
  * 对于包年包月实例，使用该接口会涉及扣费，请确保账户余额充足。可通过[`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
       * @param {InquiryPriceResetInstancesTypeRequest} req
       * @param {function(string, InquiryPriceResetInstancesTypeResponse):void} cb
       * @public
       */
    InquiryPriceResetInstancesType(req, cb) {
        const resp = new InquiryPriceResetInstancesTypeResponse();
        this.request('InquiryPriceResetInstancesType', req, resp, cb);
    }
    /**
     * 本接口（DescribeInstanceFamilyConfigs）查询当前用户和地域所支持的机型族列表信息。
     * @param {DescribeInstanceFamilyConfigsRequest} req
     * @param {function(string, DescribeInstanceFamilyConfigsResponse):void} cb
     * @public
     */
    DescribeInstanceFamilyConfigs(req, cb) {
        const resp = new DescribeInstanceFamilyConfigsResponse();
        this.request('DescribeInstanceFamilyConfigs', req, resp, cb);
    }
    /**
     * 本接口 (DeleteDisasterRecoverGroups)用于删除[分散置放群组](https://cloud.tencent.com/document/product/213/15486)。只有空的置放群组才能被删除，非空的群组需要先销毁组内所有云服务器，才能执行删除操作，不然会产生删除置放群组失败的错误。
     * @param {DeleteDisasterRecoverGroupsRequest} req
     * @param {function(string, DeleteDisasterRecoverGroupsResponse):void} cb
     * @public
     */
    DeleteDisasterRecoverGroups(req, cb) {
        const resp = new DeleteDisasterRecoverGroupsResponse();
        this.request('DeleteDisasterRecoverGroups', req, resp, cb);
    }
    /**
     * 查看可以导入的镜像操作系统信息。
     * @param {DescribeImportImageOsRequest} req
     * @param {function(string, DescribeImportImageOsResponse):void} cb
     * @public
     */
    DescribeImportImageOs(req, cb) {
        const resp = new DescribeImportImageOsResponse();
        this.request('DescribeImportImageOs', req, resp, cb);
    }
    /**
       * 本接口 (ModifyInstancesProject) 用于修改实例所属项目。
  
  * 项目为一个虚拟概念，用户可以在一个账户下面建立多个项目，每个项目中管理不同的资源；将多个不同实例分属到不同项目中，后续使用 [`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口查询实例，项目ID可用于过滤结果。
  * 绑定负载均衡的实例不支持修改实例所属项目，请先使用[`DeregisterInstancesFromLoadBalancer`](https://cloud.tencent.com/document/api/214/1258)接口解绑负载均衡。
  [^_^]: # ( 修改实例所属项目会自动解关联实例原来关联的安全组，修改完成后可使用[`ModifyInstancesAttribute`](https://cloud.tencent.com/document/api/213/15739)接口关联安全组。)
  * 支持批量操作。每次请求批量实例的上限为100。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ModifyInstancesProjectRequest} req
       * @param {function(string, ModifyInstancesProjectResponse):void} cb
       * @public
       */
    ModifyInstancesProject(req, cb) {
        const resp = new ModifyInstancesProjectResponse();
        this.request('ModifyInstancesProject', req, resp, cb);
    }
    /**
       * 本接口 (ResetInstance) 用于重装指定实例上的操作系统。
  
  * 如果指定了`ImageId`参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装。
  * 系统盘将会被格式化，并重置；请确保系统盘中无重要文件。
  * `Linux`和`Windows`系统互相切换时，该实例系统盘`ID`将发生变化，系统盘关联快照将无法回滚、恢复数据。
  * 密码不指定将会通过站内信下发随机密码。
  * 目前只支持[系统盘类型](https://cloud.tencent.com/document/api/213/9452#SystemDisk)是`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`类型的实例使用该接口实现`Linux`和`Windows`操作系统切换。
  * 目前不支持境外地域的实例使用该接口实现`Linux`和`Windows`操作系统切换。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ResetInstanceRequest} req
       * @param {function(string, ResetInstanceResponse):void} cb
       * @public
       */
    ResetInstance(req, cb) {
        const resp = new ResetInstanceResponse();
        this.request('ResetInstance', req, resp, cb);
    }
    /**
       * 本接口 (InquiryPriceRenewInstances) 用于续费包年包月实例询价。
  
  * 只支持查询包年包月实例的续费价格。
       * @param {InquiryPriceRenewInstancesRequest} req
       * @param {function(string, InquiryPriceRenewInstancesResponse):void} cb
       * @public
       */
    InquiryPriceRenewInstances(req, cb) {
        const resp = new InquiryPriceRenewInstancesResponse();
        this.request('InquiryPriceRenewInstances', req, resp, cb);
    }
    /**
     * 本接口(InquiryPriceRunInstances)用于创建实例询价。本接口仅允许针对购买限制范围内的实例配置进行询价, 详见：[创建实例](https://cloud.tencent.com/document/api/213/15730)。
     * @param {InquiryPriceRunInstancesRequest} req
     * @param {function(string, InquiryPriceRunInstancesResponse):void} cb
     * @public
     */
    InquiryPriceRunInstances(req, cb) {
        const resp = new InquiryPriceRunInstancesResponse();
        this.request('InquiryPriceRunInstances', req, resp, cb);
    }
    /**
     * 本接口(ImportImage)用于导入镜像，导入后的镜像可用于创建实例。
     * @param {ImportImageRequest} req
     * @param {function(string, ImportImageResponse):void} cb
     * @public
     */
    ImportImage(req, cb) {
        const resp = new ImportImageResponse();
        this.request('ImportImage', req, resp, cb);
    }
    /**
       * 本接口 (RenewInstances) 用于续费包年包月实例。
  
  * 只支持操作包年包月实例。
  * 续费时请确保账户余额充足。可通过[`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {RenewInstancesRequest} req
       * @param {function(string, RenewInstancesResponse):void} cb
       * @public
       */
    RenewInstances(req, cb) {
        const resp = new RenewInstancesResponse();
        this.request('RenewInstances', req, resp, cb);
    }
    /**
     * 本接口 (ModifyDisasterRecoverGroupAttribute)用于修改[分散置放群组](https://cloud.tencent.com/document/product/213/15486)属性。
     * @param {ModifyDisasterRecoverGroupAttributeRequest} req
     * @param {function(string, ModifyDisasterRecoverGroupAttributeResponse):void} cb
     * @public
     */
    ModifyDisasterRecoverGroupAttribute(req, cb) {
        const resp = new ModifyDisasterRecoverGroupAttributeResponse();
        this.request('ModifyDisasterRecoverGroupAttribute', req, resp, cb);
    }
    /**
       * 本接口 ( DescribeInstanceVncUrl ) 用于查询实例管理终端地址，获取的地址可用于实例的 VNC 登录。
  
  * 处于 `STOPPED` 状态的机器无法使用此功能。
  * 管理终端地址的有效期为 15 秒，调用接口成功后如果 15 秒内不使用该链接进行访问，管理终端地址自动失效，您需要重新查询。
  * 管理终端地址一旦被访问，将自动失效，您需要重新查询。
  * 如果连接断开，每分钟内重新连接的次数不能超过 30 次。
  * 获取到 `InstanceVncUrl` 后，您需要在链接 <https://img.qcloud.com/qcloud/app/active_vnc/index.html?> 末尾加上参数 `InstanceVncUrl=xxxx`  。
  
    - 参数 `InstanceVncUrl` ：调用接口成功后会返回的 `InstanceVncUrl` 的值。
  
      最后组成的 URL 格式如下：
  
  ```
  https://img.qcloud.com/qcloud/app/active_vnc/index.html?InstanceVncUrl=wss%3A%2F%2Fbjvnc.qcloud.com%3A26789%2Fvnc%3Fs%3DaHpjWnRVMFNhYmxKdDM5MjRHNlVTSVQwajNUSW0wb2tBbmFtREFCTmFrcy8vUUNPMG0wSHZNOUUxRm5PMmUzWmFDcWlOdDJIbUJxSTZDL0RXcHZxYnZZMmRkWWZWcEZia2lyb09XMzdKNmM9
  ```
  
       * @param {DescribeInstanceVncUrlRequest} req
       * @param {function(string, DescribeInstanceVncUrlResponse):void} cb
       * @public
       */
    DescribeInstanceVncUrl(req, cb) {
        const resp = new DescribeInstanceVncUrlResponse();
        this.request('DescribeInstanceVncUrl', req, resp, cb);
    }
    /**
       * 本接口 (ModifyInstancesChargeType) 用于切换实例的计费模式。
  
  * 只支持从 `POSTPAID_BY_HOUR` 计费模式切换为`PREPAID`计费模式。
  * 关机不收费的实例、`BC1`和`BS1`机型族的实例、设置定时销毁的实例不支持该操作。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ModifyInstancesChargeTypeRequest} req
       * @param {function(string, ModifyInstancesChargeTypeResponse):void} cb
       * @public
       */
    ModifyInstancesChargeType(req, cb) {
        const resp = new ModifyInstancesChargeTypeResponse();
        this.request('ModifyInstancesChargeType', req, resp, cb);
    }
    /**
       * 本接口 (RenewHosts) 用于续费包年包月CDH实例。
  
  * 只支持操作包年包月实例，否则操作会以特定[错误码](#6.-.E9.94.99.E8.AF.AF.E7.A0.81)返回。
  * 续费时请确保账户余额充足。可通过[`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253)接口查询账户余额。
       * @param {RenewHostsRequest} req
       * @param {function(string, RenewHostsResponse):void} cb
       * @public
       */
    RenewHosts(req, cb) {
        const resp = new RenewHostsResponse();
        this.request('RenewHosts', req, resp, cb);
    }
    /**
     * 本接口 (DescribeDisasterRecoverGroups)用于查询[分散置放群组](https://cloud.tencent.com/document/product/213/15486)信息。
     * @param {DescribeDisasterRecoverGroupsRequest} req
     * @param {function(string, DescribeDisasterRecoverGroupsResponse):void} cb
     * @public
     */
    DescribeDisasterRecoverGroups(req, cb) {
        const resp = new DescribeDisasterRecoverGroupsResponse();
        this.request('DescribeDisasterRecoverGroups', req, resp, cb);
    }
    /**
       * 本接口 (StartInstances) 用于启动一个或多个实例。
  
  * 只有状态为`STOPPED`的实例才可以进行此操作。
  * 接口调用成功时，实例会进入`STARTING`状态；启动实例成功时，实例会进入`RUNNING`状态。
  * 支持批量操作。每次请求批量实例的上限为100。
  * 本接口为异步接口，启动实例请求发送成功后会返回一个RequestId，此时操作并未立即完成。实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表启动实例操作成功。
       * @param {StartInstancesRequest} req
       * @param {function(string, StartInstancesResponse):void} cb
       * @public
       */
    StartInstances(req, cb) {
        const resp = new StartInstancesResponse();
        this.request('StartInstances', req, resp, cb);
    }
    /**
       * 本接口 (ResetInstancesInternetMaxBandwidth) 用于调整实例公网带宽上限。
  
  * 不同机型带宽上限范围不一致，具体限制详见[公网带宽上限](https://cloud.tencent.com/document/product/213/12523)。
  * 对于 `BANDWIDTH_PREPAID` 计费方式的带宽，需要输入参数 `StartTime` 和 `EndTime` ，指定调整后的带宽的生效时间段。在这种场景下目前不支持调小带宽，会涉及扣费，请确保账户余额充足。可通过 [`DescribeAccountBalance`](https://cloud.tencent.com/document/product/555/20253) 接口查询账户余额。
  * 对于 `TRAFFIC_POSTPAID_BY_HOUR` 、 `BANDWIDTH_POSTPAID_BY_HOUR` 和 `BANDWIDTH_PACKAGE` 计费方式的带宽，使用该接口调整带宽上限是实时生效的，可以在带宽允许的范围内调大或者调小带宽，不支持输入参数 `StartTime` 和 `EndTime` 。
  * 接口不支持调整 `BANDWIDTH_POSTPAID_BY_MONTH` 计费方式的带宽。
  * 接口不支持批量调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽。
  * 接口不支持批量调整混合计费方式的带宽。例如不支持同时调整 `TRAFFIC_POSTPAID_BY_HOUR` 和 `BANDWIDTH_PACKAGE` 计费方式的带宽。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {ResetInstancesInternetMaxBandwidthRequest} req
       * @param {function(string, ResetInstancesInternetMaxBandwidthResponse):void} cb
       * @public
       */
    ResetInstancesInternetMaxBandwidth(req, cb) {
        const resp = new ResetInstancesInternetMaxBandwidthResponse();
        this.request('ResetInstancesInternetMaxBandwidth', req, resp, cb);
    }
    /**
       * 本接口 (DescribeKeyPairs) 用于查询密钥对信息。
  
  * 密钥对是通过一种算法生成的一对密钥，在生成的密钥对中，一个向外界公开，称为公钥；另一个用户自己保留，称为私钥。密钥对的公钥内容可以通过这个接口查询，但私钥内容系统不保留。
       * @param {DescribeKeyPairsRequest} req
       * @param {function(string, DescribeKeyPairsResponse):void} cb
       * @public
       */
    DescribeKeyPairs(req, cb) {
        const resp = new DescribeKeyPairsResponse();
        this.request('DescribeKeyPairs', req, resp, cb);
    }
    /**
     * 本接口(DescribeReservedInstancesOfferings)供用户列出可购买的预留实例配置
     * @param {DescribeReservedInstancesOfferingsRequest} req
     * @param {function(string, DescribeReservedInstancesOfferingsResponse):void} cb
     * @public
     */
    DescribeReservedInstancesOfferings(req, cb) {
        const resp = new DescribeReservedInstancesOfferingsResponse();
        this.request('DescribeReservedInstancesOfferings', req, resp, cb);
    }
    /**
     * 本接口 (DescribeHosts) 用于获取一个或多个CDH实例的详细信息。
     * @param {DescribeHostsRequest} req
     * @param {function(string, DescribeHostsResponse):void} cb
     * @public
     */
    DescribeHosts(req, cb) {
        const resp = new DescribeHostsResponse();
        this.request('DescribeHosts', req, resp, cb);
    }
    /**
     * 本接口 (AllocateHosts) 用于创建一个或多个指定配置的CDH实例。
     * 当HostChargeType为PREPAID时，必须指定HostChargePrepaid参数。
     * @param {AllocateHostsRequest} req
     * @param {function(string, AllocateHostsResponse):void} cb
     * @public
     */
    AllocateHosts(req, cb) {
        const resp = new AllocateHostsResponse();
        this.request('AllocateHosts', req, resp, cb);
    }
    /**
     * 本接口（DescribeInternetChargeTypeConfigs）用于查询网络的计费类型。
     * @param {DescribeInternetChargeTypeConfigsRequest} req
     * @param {function(string, DescribeInternetChargeTypeConfigsResponse):void} cb
     * @public
     */
    DescribeInternetChargeTypeConfigs(req, cb) {
        const resp = new DescribeInternetChargeTypeConfigsResponse();
        this.request('DescribeInternetChargeTypeConfigs', req, resp, cb);
    }
    /**
       * 本接口 (RebootInstances) 用于重启实例。
  
  * 只有状态为`RUNNING`的实例才可以进行此操作。
  * 接口调用成功时，实例会进入`REBOOTING`状态；重启实例成功时，实例会进入`RUNNING`状态。
  * 支持强制重启。强制重启的效果等同于关闭物理计算机的电源开关再重新启动。强制重启可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常重启时使用。
  * 支持批量操作，每次请求批量实例的上限为100。
  * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
       * @param {RebootInstancesRequest} req
       * @param {function(string, RebootInstancesResponse):void} cb
       * @public
       */
    RebootInstances(req, cb) {
        const resp = new RebootInstancesResponse();
        this.request('RebootInstances', req, resp, cb);
    }
    /**
       * 本接口 (DescribeInstanceTypeConfigs) 用于查询实例机型配置。
  
  * 可以根据`zone`、`instance-family`来查询实例机型配置。过滤条件详见过滤器[`Filter`](https://cloud.tencent.com/document/api/213/15753#Filter)。
  * 如果参数为空，返回指定地域的所有实例机型配置。
       * @param {DescribeInstanceTypeConfigsRequest} req
       * @param {function(string, DescribeInstanceTypeConfigsResponse):void} cb
       * @public
       */
    DescribeInstanceTypeConfigs(req, cb) {
        const resp = new DescribeInstanceTypeConfigsResponse();
        this.request('DescribeInstanceTypeConfigs', req, resp, cb);
    }
    /**
     * 本接口 (DisassociateSecurityGroups) 用于解绑实例的指定安全组。
     * 实例操作结果可以通过调用 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728#.E7.A4.BA.E4.BE.8B3-.E6.9F.A5.E8.AF.A2.E5.AE.9E.E4.BE.8B.E7.9A.84.E6.9C.80.E6.96.B0.E6.93.8D.E4.BD.9C.E6.83.85.E5.86.B5) 接口查询，如果实例的最新操作状态(LatestOperationState)为“SUCCESS”，则代表操作成功。
     * @param {DisassociateSecurityGroupsRequest} req
     * @param {function(string, DisassociateSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateSecurityGroups(req, cb) {
        const resp = new DisassociateSecurityGroupsResponse();
        this.request('DisassociateSecurityGroups', req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cvm_client.js.map