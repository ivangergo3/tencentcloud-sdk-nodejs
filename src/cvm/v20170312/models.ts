const AbstractModel = require('../../common/abstract_model')

/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 * @class
 */
class Placement extends AbstractModel {
  constructor() {
    super()

    /**
     * 实例所属的[可用区](/document/product/213/9452#zone)ID。该参数也可以通过调用  [DescribeZones](/document/api/213/9455) 的返回值中的Zone字段来获取。
     * @type {string || null}
     */
    this.Zone = null

    /**
     * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
     * @type {number || null}
     */
    this.ProjectId = null

    /**
     * 实例所属的专用宿主机ID列表。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。
     * @type {Array.<string> || null}
     */
    this.HostIds = null

    /**
     * 指定母机ip生产子机
     * @type {Array.<string> || null}
     */
    this.HostIps = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.Zone = 'Zone' in params ? params.Zone : null
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null
    this.HostIds = 'HostIds' in params ? params.HostIds : null
    this.HostIps = 'HostIps' in params ? params.HostIps : null
  }
}

/**
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
class SystemDisk extends AbstractModel {
  constructor() {
    super()

    /**
     * 系统盘类型。系统盘类型限制详见[CVM实例配置](/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><br>默认取值：CLOUD_BASIC。
     * @type {string || null}
     */
    this.DiskType = null

    /**
     * 系统盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
     * @type {string || null}
     */
    this.DiskId = null

    /**
     * 系统盘大小，单位：GB。默认值为 50
     * @type {number || null}
     */
    this.DiskSize = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.DiskType = 'DiskType' in params ? params.DiskType : null
    this.DiskId = 'DiskId' in params ? params.DiskId : null
    this.DiskSize = 'DiskSize' in params ? params.DiskSize : null
  }
}

/**
 * 描述了数据盘的信息
 * @class
 */
class DataDisk extends AbstractModel {
  constructor() {
    super()

    /**
     * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[CVM实例配置](/document/product/213/2177)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
     * @type {number || null}
     */
    this.DiskSize = null

    /**
     * 数据盘类型。数据盘类型限制详见[CVM实例配置](/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。<br><br>该参数对`ResizeInstanceDisk`接口无效。
     * @type {string || null}
     */
    this.DiskType = null

    /**
     * 数据盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
     * @type {string || null}
     */
    this.DiskId = null

    /**
         * 数据盘是否随子机销毁。取值范围：
<li>TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘
<li>FALSE：子机销毁时，保留数据盘<br>
默认取值：TRUE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.DeleteWithInstance = null

    /**
         * 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.SnapshotId = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.DiskSize = 'DiskSize' in params ? params.DiskSize : null
    this.DiskType = 'DiskType' in params ? params.DiskType : null
    this.DiskId = 'DiskId' in params ? params.DiskId : null
    this.DeleteWithInstance = 'DeleteWithInstance' in params ? params.DeleteWithInstance : null
    this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null
  }
}

/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
class InternetAccessible extends AbstractModel {
  constructor() {
    super()

    /**
     * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：非带宽包用户默认与子机付费类型保持一致。
     * @type {string || null}
     */
    this.InternetChargeType = null

    /**
     * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](/document/product/213/509)。
     * @type {number || null}
     */
    this.InternetMaxBandwidthOut = null

    /**
     * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。
     * @type {boolean || null}
     */
    this.PublicIpAssigned = null

    /**
     * 带宽包ID。可通过[`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。
     * @type {string || null}
     */
    this.BandwidthPackageId = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null
    this.InternetMaxBandwidthOut =
      'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null
    this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null
    this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null
  }
}

/**
 * 描述了VPC相关信息，包括子网，IP信息等
 * @class
 */
class VirtualPrivateCloud extends AbstractModel {
  constructor() {
    super()

    /**
     * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
     * @type {string || null}
     */
    this.VpcId = null

    /**
     * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
     * @type {string || null}
     */
    this.SubnetId = null

    /**
     * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：<br><li>TRUE：表示用作公网网关<br><li>FALSE：表示不用作公网网关<br><br>默认取值：FALSE。
     * @type {boolean || null}
     */
    this.AsVpcGateway = null

    /**
     * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。
     * @type {Array.<string> || null}
     */
    this.PrivateIpAddresses = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.VpcId = 'VpcId' in params ? params.VpcId : null
    this.SubnetId = 'SubnetId' in params ? params.SubnetId : null
    this.AsVpcGateway = 'AsVpcGateway' in params ? params.AsVpcGateway : null
    this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null
  }
}

/**
 * 标签键值对
 * @class
 */
class Tag extends AbstractModel {
  constructor() {
    super()

    /**
     * 标签键
     * @type {string || null}
     */
    this.Key = null

    /**
     * 标签值
     * @type {string || null}
     */
    this.Value = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.Key = 'Key' in params ? params.Key : null
    this.Value = 'Value' in params ? params.Value : null
  }
}

/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
class LoginSettings extends AbstractModel {
  constructor() {
    super()

    /**
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Password = null

    /**
         * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
    this.KeyIds = null

    /**
         * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.KeepImageLogin = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.Password = 'Password' in params ? params.Password : null
    this.KeyIds = 'KeyIds' in params ? params.KeyIds : null
    this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null
  }
}

/**
 * 描述实例的信息
 * @class
 */
class Instance extends AbstractModel {
  constructor() {
    super()

    /**
     * 实例所在的位置。
     * @type {Placement || null}
     */
    this.Placement = null

    /**
     * 实例`ID`。
     * @type {string || null}
     */
    this.InstanceId = null

    /**
     * 实例机型。
     * @type {string || null}
     */
    this.InstanceType = null

    /**
     * 实例的CPU核数，单位：核。
     * @type {number || null}
     */
    this.CPU = null

    /**
     * 实例内存容量，单位：`GB`。
     * @type {number || null}
     */
    this.Memory = null

    /**
     * 实例业务状态。取值范围：<br><li>NORMAL：表示正常状态的实例<br><li>EXPIRED：表示过期的实例<br><li>PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
     * @type {string || null}
     */
    this.RestrictState = null

    /**
     * 实例名称。
     * @type {string || null}
     */
    this.InstanceName = null

    /**
     * 实例计费模式。取值范围：<br><li>`PREPAID`：表示预付费，即包年包月<br><li>`POSTPAID_BY_HOUR`：表示后付费，即按量计费<br><li>`CDHPAID`：`CDH`付费，即只对`CDH`计费，不对`CDH`上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
     * @type {string || null}
     */
    this.InstanceChargeType = null

    /**
     * 实例系统盘信息。
     * @type {SystemDisk || null}
     */
    this.SystemDisk = null

    /**
     * 实例数据盘信息。只包含随实例购买的数据盘。
     * @type {Array.<DataDisk> || null}
     */
    this.DataDisks = null

    /**
     * 实例主网卡的内网`IP`列表。
     * @type {Array.<string> || null}
     */
    this.PrivateIpAddresses = null

    /**
         * 实例主网卡的公网`IP`列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
    this.PublicIpAddresses = null

    /**
     * 实例带宽信息。
     * @type {InternetAccessible || null}
     */
    this.InternetAccessible = null

    /**
     * 实例所属虚拟私有网络信息。
     * @type {VirtualPrivateCloud || null}
     */
    this.VirtualPrivateCloud = null

    /**
     * 生产实例所使用的镜像`ID`。
     * @type {string || null}
     */
    this.ImageId = null

    /**
     * 自动续费标识。取值范围：<br><li>`NOTIFY_AND_MANUAL_RENEW`：表示通知即将过期，但不自动续费<br><li>`NOTIFY_AND_AUTO_RENEW`：表示通知即将过期，而且自动续费<br><li>`DISABLE_NOTIFY_AND_MANUAL_RENEW`：表示不通知即将过期，也不自动续费。
     * @type {string || null}
     */
    this.RenewFlag = null

    /**
     * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @type {string || null}
     */
    this.CreatedTime = null

    /**
     * 到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @type {string || null}
     */
    this.ExpiredTime = null

    /**
     * 操作系统名称。
     * @type {string || null}
     */
    this.OsName = null

    /**
     * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。
     * @type {Array.<string> || null}
     */
    this.SecurityGroupIds = null

    /**
     * 实例登录设置。目前只返回实例所关联的密钥。
     * @type {LoginSettings || null}
     */
    this.LoginSettings = null

    /**
     * 实例状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>RUNNING：表示运行中<br></li><li>STOPPED：表示关机<br></li><li>STARTING：表示开机中<br></li><li>STOPPING：表示关机中<br></li><li>REBOOTING：表示重启中<br></li><li>SHUTDOWN：表示停止待销毁<br></li><li>TERMINATING：表示销毁中。<br></li>
     * @type {string || null}
     */
    this.InstanceState = null

    /**
     * 实例关联的标签列表。
     * @type {Array.<Tag> || null}
     */
    this.Tags = null

    /**
         * 实例的关机计费模式。
取值范围：<br><li>KEEP_CHARGING：关机继续收费<br><li>STOP_CHARGING：关机停止收费<li>NOT_APPLICABLE：实例处于非关机状态或者不适用关机停止计费的条件<br>
         * @type {string || null}
         */
    this.StopChargingMode = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }

    if (params.Placement) {
      let obj = new Placement()
      obj.deserialize(params.Placement)
      this.Placement = obj
    }
    this.InstanceId = 'InstanceId' in params ? params.InstanceId : null
    this.InstanceType = 'InstanceType' in params ? params.InstanceType : null
    this.CPU = 'CPU' in params ? params.CPU : null
    this.Memory = 'Memory' in params ? params.Memory : null
    this.RestrictState = 'RestrictState' in params ? params.RestrictState : null
    this.InstanceName = 'InstanceName' in params ? params.InstanceName : null
    this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null

    if (params.SystemDisk) {
      let obj = new SystemDisk()
      obj.deserialize(params.SystemDisk)
      this.SystemDisk = obj
    }

    if (params.DataDisks) {
      this.DataDisks = new Array()
      for (let z in params.DataDisks) {
        let obj = new DataDisk()
        obj.deserialize(params.DataDisks[z])
        this.DataDisks.push(obj)
      }
    }
    this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null
    this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null

    if (params.InternetAccessible) {
      let obj = new InternetAccessible()
      obj.deserialize(params.InternetAccessible)
      this.InternetAccessible = obj
    }

    if (params.VirtualPrivateCloud) {
      let obj = new VirtualPrivateCloud()
      obj.deserialize(params.VirtualPrivateCloud)
      this.VirtualPrivateCloud = obj
    }
    this.ImageId = 'ImageId' in params ? params.ImageId : null
    this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null
    this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null
    this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null
    this.OsName = 'OsName' in params ? params.OsName : null
    this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null

    if (params.LoginSettings) {
      let obj = new LoginSettings()
      obj.deserialize(params.LoginSettings)
      this.LoginSettings = obj
    }
    this.InstanceState = 'InstanceState' in params ? params.InstanceState : null

    if (params.Tags) {
      this.Tags = new Array()
      for (let z in params.Tags) {
        let obj = new Tag()
        obj.deserialize(params.Tags[z])
        this.Tags.push(obj)
      }
    }
    this.StopChargingMode = 'StopChargingMode' in params ? params.StopChargingMode : null
  }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
export class DescribeInstancesResponse extends AbstractModel {
  constructor() {
    super()

    /**
     * 符合条件的实例数量。
     * @type {number || null}
     */
    this.TotalCount = null

    /**
     * 实例详细信息列表。
     * @type {Array.<Instance> || null}
     */
    this.InstanceSet = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: any) {
    if (!params) {
      return
    }
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null

    if (params.InstanceSet) {
      this.InstanceSet = new Array()
      for (let z in params.InstanceSet) {
        let obj = new Instance()
        obj.deserialize(params.InstanceSet[z])
        this.InstanceSet.push(obj)
      }
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null
  }
}
