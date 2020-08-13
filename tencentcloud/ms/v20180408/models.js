"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const abstract_model_1 = require("../../common/abstract_model");
/**
 * 加固策略具体信息
 * @class
 */
class PlanDetailInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 默认策略，1为默认，0为非默认
         */
        this.IsDefault = null;
        /**
         * 策略id
         */
        this.PlanId = null;
        /**
         * 策略名称
         */
        this.PlanName = null;
        /**
         * 策略信息
         */
        this.PlanInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.PlanName = 'PlanName' in params ? params.PlanName : null;
        if (params.PlanInfo) {
            let obj = new PlanInfo();
            obj.deserialize(params.PlanInfo);
            this.PlanInfo = obj;
        }
    }
}
/**
 * 加固后app的信息，包含基本信息和加固信息
 * @class
 */
class AppSetInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务唯一标识
         */
        this.ItemId = null;
        /**
         * app的名称
         */
        this.AppName = null;
        /**
         * app的包名
         */
        this.AppPkgName = null;
        /**
         * app的版本号
         */
        this.AppVersion = null;
        /**
         * app的md5
         */
        this.AppMd5 = null;
        /**
         * app的大小
         */
        this.AppSize = null;
        /**
         * 加固服务版本
         */
        this.ServiceEdition = null;
        /**
         * 加固结果返回码
         */
        this.ShieldCode = null;
        /**
         * 加固后的APP下载地址
         */
        this.AppUrl = null;
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.TaskStatus = null;
        /**
         * 请求的客户端ip
         */
        this.ClientIp = null;
        /**
         * 提交加固时间
         */
        this.TaskTime = null;
        /**
         * app的图标url
         */
        this.AppIconUrl = null;
        /**
         * 加固后app的md5
         */
        this.ShieldMd5 = null;
        /**
         * 加固后app的大小
         */
        this.ShieldSize = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppPkgName = 'AppPkgName' in params ? params.AppPkgName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.AppMd5 = 'AppMd5' in params ? params.AppMd5 : null;
        this.AppSize = 'AppSize' in params ? params.AppSize : null;
        this.ServiceEdition = 'ServiceEdition' in params ? params.ServiceEdition : null;
        this.ShieldCode = 'ShieldCode' in params ? params.ShieldCode : null;
        this.AppUrl = 'AppUrl' in params ? params.AppUrl : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.TaskTime = 'TaskTime' in params ? params.TaskTime : null;
        this.AppIconUrl = 'AppIconUrl' in params ? params.AppIconUrl : null;
        this.ShieldMd5 = 'ShieldMd5' in params ? params.ShieldMd5 : null;
        this.ShieldSize = 'ShieldSize' in params ? params.ShieldSize : null;
    }
}
/**
 * CreateShieldPlanInstance返回参数结构体
 * @class
 */
class CreateShieldPlanInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略id
         */
        this.PlanId = null;
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.Progress = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 需要扫描的应用的服务信息
 * @class
 */
class ScanInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务处理完成后的反向通知回调地址,批量提交app每扫描完成一个会通知一次,通知为POST请求，post信息{ItemId:
         */
        this.CallbackUrl = null;
        /**
         * VULSCAN-漏洞扫描信息，VIRUSSCAN-返回病毒扫描信息， ADSCAN-广告扫描信息，PLUGINSCAN-插件扫描信息，PERMISSION-系统权限信息，SENSITIVE-敏感词信息，可以自由组合
         */
        this.ScanTypes = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.ScanTypes = 'ScanTypes' in params ? params.ScanTypes : null;
    }
}
/**
 * CreateResourceInstances请求参数结构体
 * @class
 */
class CreateResourceInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源类型id。13624：加固专业版。
         */
        this.Pid = null;
        /**
         * 时间单位，取值为d，m，y，分别表示天，月，年。
         */
        this.TimeUnit = null;
        /**
         * 时间数量。
         */
        this.TimeSpan = null;
        /**
         * 资源数量。
         */
        this.ResourceNum = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ResourceNum = 'ResourceNum' in params ? params.ResourceNum : null;
    }
}
/**
 * DescribeShieldInstances返回参数结构体
 * @class
 */
class DescribeShieldInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合要求的app数量
         */
        this.TotalCount = null;
        /**
         * 一个关于app详细信息的结构体，主要包括app的基本信息和加固信息。
         */
        this.AppSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.AppSet) {
            this.AppSet = new Array();
            for (let z in params.AppSet) {
                let obj = new AppSetInfo();
                obj.deserialize(params.AppSet[z]);
                this.AppSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 插件信息
 * @class
 */
class PluginInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 插件类型，分别为 1-通知栏广告，2-积分墙广告，3-banner广告，4- 悬浮窗图标广告，5-精品推荐列表广告, 6-插播广告
         */
        this.PluginType = null;
        /**
         * 插件名称
         */
        this.PluginName = null;
        /**
         * 插件描述
         */
        this.PluginDesc = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PluginType = 'PluginType' in params ? params.PluginType : null;
        this.PluginName = 'PluginName' in params ? params.PluginName : null;
        this.PluginDesc = 'PluginDesc' in params ? params.PluginDesc : null;
    }
}
/**
 * 安全扫描敏感词列表
 * @class
 */
class ScanSensitiveList extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 敏感词列表
         */
        this.SensitiveList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.SensitiveList) {
            this.SensitiveList = new Array();
            for (let z in params.SensitiveList) {
                let obj = new ScanSensitiveInfo();
                obj.deserialize(params.SensitiveList[z]);
                this.SensitiveList.push(obj);
            }
        }
    }
}
/**
 * DescribeShieldResult请求参数结构体
 * @class
 */
class DescribeShieldResultRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务唯一标识
         */
        this.ItemId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
    }
}
/**
 * CreateShieldInstance请求参数结构体
 * @class
 */
class CreateShieldInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待加固的应用信息
         */
        this.AppInfo = null;
        /**
         * 加固服务信息
         */
        this.ServiceInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.AppInfo) {
            let obj = new AppInfo();
            obj.deserialize(params.AppInfo);
            this.AppInfo = obj;
        }
        if (params.ServiceInfo) {
            let obj = new ServiceInfo();
            obj.deserialize(params.ServiceInfo);
            this.ServiceInfo = obj;
        }
    }
}
/**
 * CreateCosSecKeyInstance请求参数结构体
 * @class
 */
class CreateCosSecKeyInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 地域信息，例如广州：ap-guangzhou，上海：ap-shanghai，默认为广州。
         */
        this.CosRegion = null;
        /**
         * 密钥有效时间，默认为1小时。
         */
        this.Duration = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
    }
}
/**
 * DescribeScanResults返回参数结构体
 * @class
 */
class DescribeScanResultsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 批量扫描的app结果集
         */
        this.ScanSet = null;
        /**
         * 批量扫描结果的个数
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.ScanSet) {
            this.ScanSet = new Array();
            for (let z in params.ScanSet) {
                let obj = new ScanSetInfo();
                obj.deserialize(params.ScanSet[z]);
                this.ScanSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateScanInstances请求参数结构体
 * @class
 */
class CreateScanInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待扫描的app信息列表，一次最多提交20个
         */
        this.AppInfos = null;
        /**
         * 扫描信息
         */
        this.ScanInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.AppInfos) {
            this.AppInfos = new Array();
            for (let z in params.AppInfos) {
                let obj = new AppInfo();
                obj.deserialize(params.AppInfos[z]);
                this.AppInfos.push(obj);
            }
        }
        if (params.ScanInfo) {
            let obj = new ScanInfo();
            obj.deserialize(params.ScanInfo);
            this.ScanInfo = obj;
        }
    }
}
/**
 * DescribeUserBaseInfoInstance返回参数结构体
 * @class
 */
class DescribeUserBaseInfoInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户uin信息
         */
        this.UserUin = null;
        /**
         * 用户APPID信息
         */
        this.UserAppid = null;
        /**
         * 系统时间戳
         */
        this.TimeStamp = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.UserAppid = 'UserAppid' in params ? params.UserAppid : null;
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateShieldPlanInstance请求参数结构体
 * @class
 */
class CreateShieldPlanInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源id
         */
        this.ResourceId = null;
        /**
         * 策略名称
         */
        this.PlanName = null;
        /**
         * 策略具体信息
         */
        this.PlanInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.PlanName = 'PlanName' in params ? params.PlanName : null;
        if (params.PlanInfo) {
            let obj = new PlanInfo();
            obj.deserialize(params.PlanInfo);
            this.PlanInfo = obj;
        }
    }
}
/**
 * app扫描结果集
 * @class
 */
class ScanSetInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.TaskStatus = null;
        /**
         * app信息
         */
        this.AppDetailInfo = null;
        /**
         * 病毒信息
         */
        this.VirusInfo = null;
        /**
         * 漏洞信息
         */
        this.VulInfo = null;
        /**
         * 广告插件信息
         */
        this.AdInfo = null;
        /**
         * 提交扫描的时间
         */
        this.TaskTime = null;
        /**
         * 状态码，成功返回0，失败返回错误码
         */
        this.StatusCode = null;
        /**
         * 状态描述
         */
        this.StatusDesc = null;
        /**
         * 状态操作指引
         */
        this.StatusRef = null;
        /**
         * 系统权限信息
         */
        this.PermissionInfo = null;
        /**
         * 敏感词列表
         */
        this.SensitiveInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        if (params.AppDetailInfo) {
            let obj = new AppDetailInfo();
            obj.deserialize(params.AppDetailInfo);
            this.AppDetailInfo = obj;
        }
        if (params.VirusInfo) {
            let obj = new VirusInfo();
            obj.deserialize(params.VirusInfo);
            this.VirusInfo = obj;
        }
        if (params.VulInfo) {
            let obj = new VulInfo();
            obj.deserialize(params.VulInfo);
            this.VulInfo = obj;
        }
        if (params.AdInfo) {
            let obj = new AdInfo();
            obj.deserialize(params.AdInfo);
            this.AdInfo = obj;
        }
        this.TaskTime = 'TaskTime' in params ? params.TaskTime : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.StatusRef = 'StatusRef' in params ? params.StatusRef : null;
        if (params.PermissionInfo) {
            let obj = new ScanPermissionList();
            obj.deserialize(params.PermissionInfo);
            this.PermissionInfo = obj;
        }
        if (params.SensitiveInfo) {
            let obj = new ScanSensitiveList();
            obj.deserialize(params.SensitiveInfo);
            this.SensitiveInfo = obj;
        }
    }
}
/**
 * 扫描后app的信息，包含基本信息和扫描状态信息
 * @class
 */
class AppScanSet extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务唯一标识
         */
        this.ItemId = null;
        /**
         * app的名称
         */
        this.AppName = null;
        /**
         * app的包名
         */
        this.AppPkgName = null;
        /**
         * app的版本号
         */
        this.AppVersion = null;
        /**
         * app的md5
         */
        this.AppMd5 = null;
        /**
         * app的大小
         */
        this.AppSize = null;
        /**
         * 扫描结果返回码
         */
        this.ScanCode = null;
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.TaskStatus = null;
        /**
         * 提交扫描时间
         */
        this.TaskTime = null;
        /**
         * app的图标url
         */
        this.AppIconUrl = null;
        /**
         * 标识唯一该app，主要用于删除
         */
        this.AppSid = null;
        /**
         * 安全类型:1-安全软件，2-风险软件，3病毒软件
         */
        this.SafeType = null;
        /**
         * 漏洞个数
         */
        this.VulCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppPkgName = 'AppPkgName' in params ? params.AppPkgName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.AppMd5 = 'AppMd5' in params ? params.AppMd5 : null;
        this.AppSize = 'AppSize' in params ? params.AppSize : null;
        this.ScanCode = 'ScanCode' in params ? params.ScanCode : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskTime = 'TaskTime' in params ? params.TaskTime : null;
        this.AppIconUrl = 'AppIconUrl' in params ? params.AppIconUrl : null;
        this.AppSid = 'AppSid' in params ? params.AppSid : null;
        this.SafeType = 'SafeType' in params ? params.SafeType : null;
        this.VulCount = 'VulCount' in params ? params.VulCount : null;
    }
}
/**
 * 加固策略信息
 * @class
 */
class ShieldPlanInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 加固策略数量
         */
        this.TotalCount = null;
        /**
         * 加固策略具体信息数组
         */
        this.PlanSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.PlanSet) {
            this.PlanSet = new Array();
            for (let z in params.PlanSet) {
                let obj = new PlanDetailInfo();
                obj.deserialize(params.PlanSet[z]);
                this.PlanSet.push(obj);
            }
        }
    }
}
/**
 * CreateBindInstance请求参数结构体
 * @class
 */
class CreateBindInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源id，全局唯一
         */
        this.ResourceId = null;
        /**
         * app的icon的url
         */
        this.AppIconUrl = null;
        /**
         * app的名称
         */
        this.AppName = null;
        /**
         * app的包名
         */
        this.AppPkgName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppIconUrl = 'AppIconUrl' in params ? params.AppIconUrl : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppPkgName = 'AppPkgName' in params ? params.AppPkgName : null;
    }
}
/**
 * CreateShieldInstance返回参数结构体
 * @class
 */
class CreateShieldInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.Progress = null;
        /**
         * 任务唯一标识
         */
        this.ItemId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteShieldInstances请求参数结构体
 * @class
 */
class DeleteShieldInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务唯一标识ItemId的列表
         */
        this.ItemIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemIds = 'ItemIds' in params ? params.ItemIds : null;
    }
}
/**
 * 拉取某个用户的所有资源信息
 * @class
 */
class ResourceInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户购买的资源id，全局唯一
         */
        this.ResourceId = null;
        /**
         * 资源的pid，MTP加固-12767，应用加固-12750 MTP反作弊-12766 源代码混淆-12736
         */
        this.Pid = null;
        /**
         * 购买时间戳
         */
        this.CreateTime = null;
        /**
         * 到期时间戳
         */
        this.ExpireTime = null;
        /**
         * 0-未绑定，1-已绑定
         */
        this.IsBind = null;
        /**
         * 用户绑定app的基本信息
         */
        this.BindInfo = null;
        /**
         * 资源名称，如应用加固，漏洞扫描
         */
        this.ResourceName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsBind = 'IsBind' in params ? params.IsBind : null;
        if (params.BindInfo) {
            let obj = new BindInfo();
            obj.deserialize(params.BindInfo);
            this.BindInfo = obj;
        }
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
    }
}
/**
 * DescribeShieldInstances请求参数结构体
 * @class
 */
class DescribeShieldInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 支持通过app名称，app包名，加固的服务版本，提交的渠道进行筛选。
         */
        this.Filters = null;
        /**
         * 偏移量，默认为0。
         */
        this.Offset = null;
        /**
         * 数量限制，默认为20，最大值为100。
         */
        this.Limit = null;
        /**
         * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
         */
        this.ItemIds = null;
        /**
         * 按某个字段排序，目前仅支持TaskTime排序。
         */
        this.OrderField = null;
        /**
         * 升序（asc）还是降序（desc），默认：desc。
         */
        this.OrderDirection = null;
    }
    /**
     * @private
     */
    deserialize(params) {
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
        this.ItemIds = 'ItemIds' in params ? params.ItemIds : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
    }
}
/**
 * CreateScanInstances返回参数结构体
 * @class
 */
class CreateScanInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务唯一标识
         */
        this.ItemId = null;
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.Progress = null;
        /**
         * 提交成功的app的md5集合
         */
        this.AppMd5s = null;
        /**
         * 剩余可用次数
         */
        this.LimitCount = null;
        /**
         * 到期时间
         */
        this.LimitTime = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.AppMd5s = 'AppMd5s' in params ? params.AppMd5s : null;
        this.LimitCount = 'LimitCount' in params ? params.LimitCount : null;
        this.LimitTime = 'LimitTime' in params ? params.LimitTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeScanInstances返回参数结构体
 * @class
 */
class DescribeScanInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合要求的app数量
         */
        this.TotalCount = null;
        /**
         * 一个关于app详细信息的结构体，主要包括app的基本信息和扫描状态信息。
         */
        this.ScanSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.ScanSet) {
            this.ScanSet = new Array();
            for (let z in params.ScanSet) {
                let obj = new AppScanSet();
                obj.deserialize(params.ScanSet[z]);
                this.ScanSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 漏洞信息
 * @class
 */
class VulInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 漏洞列表
         */
        this.VulList = null;
        /**
         * 漏洞文件评分
         */
        this.VulFileScore = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.VulList) {
            this.VulList = new Array();
            for (let z in params.VulList) {
                let obj = new VulList();
                obj.deserialize(params.VulList[z]);
                this.VulList.push(obj);
            }
        }
        this.VulFileScore = 'VulFileScore' in params ? params.VulFileScore : null;
    }
}
/**
 * 提交的app基本信息
 * @class
 */
class AppInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * app的url，必须保证不用权限校验就可以下载
         */
        this.AppUrl = null;
        /**
         * app的md5，需要正确传递
         */
        this.AppMd5 = null;
        /**
         * app的大小
         */
        this.AppSize = null;
        /**
         * app的文件名
         */
        this.FileName = null;
        /**
         * app的包名，需要正确的传递此字段
         */
        this.AppPkgName = null;
        /**
         * app的版本号
         */
        this.AppVersion = null;
        /**
         * app的图标url
         */
        this.AppIconUrl = null;
        /**
         * app的名称
         */
        this.AppName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppUrl = 'AppUrl' in params ? params.AppUrl : null;
        this.AppMd5 = 'AppMd5' in params ? params.AppMd5 : null;
        this.AppSize = 'AppSize' in params ? params.AppSize : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.AppPkgName = 'AppPkgName' in params ? params.AppPkgName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.AppIconUrl = 'AppIconUrl' in params ? params.AppIconUrl : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
    }
}
/**
 * 提交app加固的服务信息
 * @class
 */
class ServiceInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务版本，基础版basic，专业版professional，企业版enterprise。
         */
        this.ServiceEdition = null;
        /**
         * 任务处理完成后的反向通知回调地址，如果不需要通知请传递空字符串。通知为POST请求，post包体数据示例{"Response":{"ItemId":"4cdad8fb86f036b06bccb3f58971c306","ShieldCode":0,"ShieldMd5":"78701576793c4a5f04e1c9660de0aa0b","ShieldSize":11997354,"TaskStatus":1,"TaskTime":1539148141}}，调用方需要返回如下信息，{"Result":"ok","Reason":"xxxxx"}，如果Result字段值不等于ok会继续回调。
         */
        this.CallbackUrl = null;
        /**
         * 提交来源 YYB-应用宝 RDM-rdm MC-控制台 MAC_TOOL-mac工具 WIN_TOOL-window工具。
         */
        this.SubmitSource = null;
        /**
         * 加固策略编号，如果不传则使用系统默认加固策略。如果指定的plan不存在会返回错误。
         */
        this.PlanId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceEdition = 'ServiceEdition' in params ? params.ServiceEdition : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.SubmitSource = 'SubmitSource' in params ? params.SubmitSource : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
    }
}
/**
 * so加固信息
 * @class
 */
class SoInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * so文件列表
         */
        this.SoFileNames = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SoFileNames = 'SoFileNames' in params ? params.SoFileNames : null;
    }
}
/**
 * DescribeShieldPlanInstance返回参数结构体
 * @class
 */
class DescribeShieldPlanInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 绑定资源信息
         */
        this.BindInfo = null;
        /**
         * 加固策略信息
         */
        this.ShieldPlanInfo = null;
        /**
         * 加固资源信息
         */
        this.ResourceServiceInfo = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.BindInfo) {
            let obj = new BindInfo();
            obj.deserialize(params.BindInfo);
            this.BindInfo = obj;
        }
        if (params.ShieldPlanInfo) {
            let obj = new ShieldPlanInfo();
            obj.deserialize(params.ShieldPlanInfo);
            this.ShieldPlanInfo = obj;
        }
        if (params.ResourceServiceInfo) {
            let obj = new ResourceServiceInfo();
            obj.deserialize(params.ResourceServiceInfo);
            this.ResourceServiceInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 安全扫描敏感词
 * @class
 */
class ScanSensitiveInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 敏感词
         */
        this.WordList = null;
        /**
         * 敏感词对应的文件信息
         */
        this.FilePath = null;
        /**
         * 文件sha1值
         */
        this.FileSha = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WordList = 'WordList' in params ? params.WordList : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.FileSha = 'FileSha' in params ? params.FileSha : null;
    }
}
/**
 * 资源服务信息
 * @class
 */
class ResourceServiceInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 创建时间戳
         */
        this.CreateTime = null;
        /**
         * 到期时间戳
         */
        this.ExpireTime = null;
        /**
         * 资源名称，如应用加固，源码混淆
         */
        this.ResourceName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
    }
}
/**
 * DescribeResourceInstances请求参数结构体
 * @class
 */
class DescribeResourceInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源类别id数组，13624：加固专业版，12750：企业版。空数组表示返回全部资源。
         */
        this.Pids = null;
        /**
         * 支持通过资源id，pid进行查询
         */
        this.Filters = null;
        /**
         * 偏移量，默认为0
         */
        this.Offset = null;
        /**
         * 数量限制，默认为20，最大值为100。
         */
        this.Limit = null;
        /**
         * 按某个字段排序，目前支持CreateTime、ExpireTime其中的一个排序。
         */
        this.OrderField = null;
        /**
         * 升序（asc）还是降序（desc），默认：desc。
         */
        this.OrderDirection = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pids = 'Pids' in params ? params.Pids : null;
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
 * 广告信息
 * @class
 */
class AdInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 插播广告列表
         */
        this.Spots = null;
        /**
         * 精品推荐广告列表
         */
        this.BoutiqueRecommands = null;
        /**
         * 悬浮窗广告列表
         */
        this.FloatWindowses = null;
        /**
         * banner广告列表
         */
        this.Banners = null;
        /**
         * 积分墙广告列表
         */
        this.IntegralWalls = null;
        /**
         * 通知栏广告列表
         */
        this.NotifyBars = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Spots) {
            this.Spots = new Array();
            for (let z in params.Spots) {
                let obj = new PluginInfo();
                obj.deserialize(params.Spots[z]);
                this.Spots.push(obj);
            }
        }
        if (params.BoutiqueRecommands) {
            this.BoutiqueRecommands = new Array();
            for (let z in params.BoutiqueRecommands) {
                let obj = new PluginInfo();
                obj.deserialize(params.BoutiqueRecommands[z]);
                this.BoutiqueRecommands.push(obj);
            }
        }
        if (params.FloatWindowses) {
            this.FloatWindowses = new Array();
            for (let z in params.FloatWindowses) {
                let obj = new PluginInfo();
                obj.deserialize(params.FloatWindowses[z]);
                this.FloatWindowses.push(obj);
            }
        }
        if (params.Banners) {
            this.Banners = new Array();
            for (let z in params.Banners) {
                let obj = new PluginInfo();
                obj.deserialize(params.Banners[z]);
                this.Banners.push(obj);
            }
        }
        if (params.IntegralWalls) {
            this.IntegralWalls = new Array();
            for (let z in params.IntegralWalls) {
                let obj = new PluginInfo();
                obj.deserialize(params.IntegralWalls[z]);
                this.IntegralWalls.push(obj);
            }
        }
        if (params.NotifyBars) {
            this.NotifyBars = new Array();
            for (let z in params.NotifyBars) {
                let obj = new PluginInfo();
                obj.deserialize(params.NotifyBars[z]);
                this.NotifyBars.push(obj);
            }
        }
    }
}
/**
 * DescribeShieldPlanInstance请求参数结构体
 * @class
 */
class DescribeShieldPlanInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源id
         */
        this.ResourceId = null;
        /**
         * 服务类别id
         */
        this.Pid = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
    }
}
/**
 * 加固后app的信息
 * @class
 */
class ShieldInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 加固结果的返回码
         */
        this.ShieldCode = null;
        /**
         * 加固后app的大小
         */
        this.ShieldSize = null;
        /**
         * 加固后app的md5
         */
        this.ShieldMd5 = null;
        /**
         * 加固后的APP下载地址，该地址有效期为20分钟，请及时下载
         */
        this.AppUrl = null;
        /**
         * 加固的提交时间
         */
        this.TaskTime = null;
        /**
         * 任务唯一标识
         */
        this.ItemId = null;
        /**
         * 加固版本，basic基础版，professional专业版，enterprise企业版
         */
        this.ServiceEdition = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShieldCode = 'ShieldCode' in params ? params.ShieldCode : null;
        this.ShieldSize = 'ShieldSize' in params ? params.ShieldSize : null;
        this.ShieldMd5 = 'ShieldMd5' in params ? params.ShieldMd5 : null;
        this.AppUrl = 'AppUrl' in params ? params.AppUrl : null;
        this.TaskTime = 'TaskTime' in params ? params.TaskTime : null;
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.ServiceEdition = 'ServiceEdition' in params ? params.ServiceEdition : null;
    }
}
/**
 * 安全扫描系统权限信息
 * @class
 */
class ScanPermissionList extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 系统权限信息
         */
        this.PermissionList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.PermissionList) {
            this.PermissionList = new Array();
            for (let z in params.PermissionList) {
                let obj = new ScanPermissionInfo();
                obj.deserialize(params.PermissionList[z]);
                this.PermissionList.push(obj);
            }
        }
    }
}
/**
 * CreateResourceInstances返回参数结构体
 * @class
 */
class CreateResourceInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 新创建的资源列表。
         */
        this.ResourceSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceSet = 'ResourceSet' in params ? params.ResourceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * app的详细基础信息
 * @class
 */
class AppDetailInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * app的名称
         */
        this.AppName = null;
        /**
         * app的包名
         */
        this.AppPkgName = null;
        /**
         * app的版本号
         */
        this.AppVersion = null;
        /**
         * app的大小
         */
        this.AppSize = null;
        /**
         * app的md5
         */
        this.AppMd5 = null;
        /**
         * app的图标url
         */
        this.AppIconUrl = null;
        /**
         * app的文件名称
         */
        this.FileName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppPkgName = 'AppPkgName' in params ? params.AppPkgName : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.AppSize = 'AppSize' in params ? params.AppSize : null;
        this.AppMd5 = 'AppMd5' in params ? params.AppMd5 : null;
        this.AppIconUrl = 'AppIconUrl' in params ? params.AppIconUrl : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
    }
}
/**
 * DeleteScanInstances返回参数结构体
 * @class
 */
class DeleteScanInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.Progress = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 筛选数据结构
 * @class
 */
class Filter extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 需要过滤的字段
         */
        this.Name = null;
        /**
         * 需要过滤字段的值
         */
        this.Value = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
    }
}
/**
 * DeleteShieldInstances返回参数结构体
 * @class
 */
class DeleteShieldInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.Progress = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeScanInstances请求参数结构体
 * @class
 */
class DescribeScanInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 支持通过app名称，app包名进行筛选
         */
        this.Filters = null;
        /**
         * 偏移量，默认为0
         */
        this.Offset = null;
        /**
         * 数量限制，默认为20，最大值为100。
         */
        this.Limit = null;
        /**
         * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
         */
        this.ItemIds = null;
        /**
         * 按某个字段排序，目前仅支持TaskTime排序。
         */
        this.OrderField = null;
        /**
         * 升序（asc）还是降序（desc），默认：desc。
         */
        this.OrderDirection = null;
    }
    /**
     * @private
     */
    deserialize(params) {
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
        this.ItemIds = 'ItemIds' in params ? params.ItemIds : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
    }
}
/**
 * DescribeUserBaseInfoInstance请求参数结构体
 * @class
 */
class DescribeUserBaseInfoInstanceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
    }
}
/**
 * DescribeResourceInstances返回参数结构体
 * @class
 */
class DescribeResourceInstancesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合要求的资源数量
         */
        this.TotalCount = null;
        /**
         * 符合要求的资源数组
         */
        this.ResourceSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new ResourceInfo();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeScanResults请求参数结构体
 * @class
 */
class DescribeScanResultsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务唯一标识
         */
        this.ItemId = null;
        /**
         * 批量查询一个或者多个app的扫描结果，如果不传表示查询该任务下所提交的所有app
         */
        this.AppMd5s = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.AppMd5s = 'AppMd5s' in params ? params.AppMd5s : null;
    }
}
/**
 * CreateCosSecKeyInstance返回参数结构体
 * @class
 */
class CreateCosSecKeyInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * COS密钥对应的AppId
         */
        this.CosAppid = null;
        /**
         * COS密钥对应的存储桶名
         */
        this.CosBucket = null;
        /**
         * 存储桶对应的地域
         */
        this.CosRegion = null;
        /**
         * 密钥过期时间
         */
        this.ExpireTime = null;
        /**
         * 密钥ID信息
         */
        this.CosId = null;
        /**
         * 密钥KEY信息
         */
        this.CosKey = null;
        /**
         * 密钥TOCKEN信息
         */
        this.CosTocken = null;
        /**
         * 密钥可访问的文件前缀人。例如：CosPrefix=test/123/666，则该密钥只能操作test/123/666为前缀的文件，例如test/123/666/1.txt
         */
        this.CosPrefix = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosAppid = 'CosAppid' in params ? params.CosAppid : null;
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CosId = 'CosId' in params ? params.CosId : null;
        this.CosKey = 'CosKey' in params ? params.CosKey : null;
        this.CosTocken = 'CosTocken' in params ? params.CosTocken : null;
        this.CosPrefix = 'CosPrefix' in params ? params.CosPrefix : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 病毒信息
 * @class
 */
class VirusInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 软件安全类型，分别为0-未知、 1-安全软件、2-风险软件、3-病毒软件
         */
        this.SafeType = null;
        /**
         * 病毒名称， utf8编码，非病毒时值为空
         */
        this.VirusName = null;
        /**
         * 病毒描述，utf8编码，非病毒时值为空
         */
        this.VirusDesc = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SafeType = 'SafeType' in params ? params.SafeType : null;
        this.VirusName = 'VirusName' in params ? params.VirusName : null;
        this.VirusDesc = 'VirusDesc' in params ? params.VirusDesc : null;
    }
}
/**
 * 安全扫描系统权限信息
 * @class
 */
class ScanPermissionInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 系统权限
         */
        this.Permission = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Permission = 'Permission' in params ? params.Permission : null;
    }
}
/**
 * 加固策略信息
 * @class
 */
class PlanInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * apk大小优化，0关闭，1开启
         */
        this.ApkSizeOpt = null;
        /**
         * Dex加固，0关闭，1开启
         */
        this.Dex = null;
        /**
         * So加固，0关闭，1开启
         */
        this.So = null;
        /**
         * 数据收集，0关闭，1开启
         */
        this.Bugly = null;
        /**
         * 防止重打包，0关闭，1开启
         */
        this.AntiRepack = null;
        /**
         * Dex分离，0关闭，1开启
         */
        this.SeperateDex = null;
        /**
         * 内存保护，0关闭，1开启
         */
        this.Db = null;
        /**
         * Dex签名校验，0关闭，1开启
         */
        this.DexSig = null;
        /**
         * So文件信息
         */
        this.SoInfo = null;
        /**
         * vmp，0关闭，1开启
         */
        this.AntiVMP = null;
        /**
         * 保护so的强度，
         */
        this.SoType = null;
        /**
         * 防日志泄漏，0关闭，1开启
         */
        this.AntiLogLeak = null;
        /**
         * root检测，0关闭，1开启
         */
        this.AntiQemuRoot = null;
        /**
         * 资源防篡改，0关闭，1开启
         */
        this.AntiAssets = null;
        /**
         * 防止截屏，0关闭，1开启
         */
        this.AntiScreenshot = null;
        /**
         * SSL证书防窃取，0关闭，1开启
         */
        this.AntiSSL = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApkSizeOpt = 'ApkSizeOpt' in params ? params.ApkSizeOpt : null;
        this.Dex = 'Dex' in params ? params.Dex : null;
        this.So = 'So' in params ? params.So : null;
        this.Bugly = 'Bugly' in params ? params.Bugly : null;
        this.AntiRepack = 'AntiRepack' in params ? params.AntiRepack : null;
        this.SeperateDex = 'SeperateDex' in params ? params.SeperateDex : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.DexSig = 'DexSig' in params ? params.DexSig : null;
        if (params.SoInfo) {
            let obj = new SoInfo();
            obj.deserialize(params.SoInfo);
            this.SoInfo = obj;
        }
        this.AntiVMP = 'AntiVMP' in params ? params.AntiVMP : null;
        this.SoType = 'SoType' in params ? params.SoType : null;
        this.AntiLogLeak = 'AntiLogLeak' in params ? params.AntiLogLeak : null;
        this.AntiQemuRoot = 'AntiQemuRoot' in params ? params.AntiQemuRoot : null;
        this.AntiAssets = 'AntiAssets' in params ? params.AntiAssets : null;
        this.AntiScreenshot = 'AntiScreenshot' in params ? params.AntiScreenshot : null;
        this.AntiSSL = 'AntiSSL' in params ? params.AntiSSL : null;
    }
}
/**
 * DescribeShieldResult返回参数结构体
 * @class
 */
class DescribeShieldResultResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务状态: 0-请返回,1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.TaskStatus = null;
        /**
         * app加固前的详细信息
         */
        this.AppDetailInfo = null;
        /**
         * app加固后的详细信息
         */
        this.ShieldInfo = null;
        /**
         * 状态描述
         */
        this.StatusDesc = null;
        /**
         * 状态指引
         */
        this.StatusRef = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        if (params.AppDetailInfo) {
            let obj = new AppDetailInfo();
            obj.deserialize(params.AppDetailInfo);
            this.AppDetailInfo = obj;
        }
        if (params.ShieldInfo) {
            let obj = new ShieldInfo();
            obj.deserialize(params.ShieldInfo);
            this.ShieldInfo = obj;
        }
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.StatusRef = 'StatusRef' in params ? params.StatusRef : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateBindInstance返回参数结构体
 * @class
 */
class CreateBindInstanceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         */
        this.Progress = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 漏洞信息
 * @class
 */
class VulList extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 漏洞id
         */
        this.VulId = null;
        /**
         * 漏洞名称
         */
        this.VulName = null;
        /**
         * 漏洞代码
         */
        this.VulCode = null;
        /**
         * 漏洞描述
         */
        this.VulDesc = null;
        /**
         * 漏洞解决方案
         */
        this.VulSolution = null;
        /**
         * 漏洞来源类别，0默认自身，1第三方插件
         */
        this.VulSrcType = null;
        /**
         * 漏洞位置
         */
        this.VulFilepath = null;
        /**
         * 风险级别：1 低风险 ；2中等风险；3 高风险
         */
        this.RiskLevel = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = 'VulId' in params ? params.VulId : null;
        this.VulName = 'VulName' in params ? params.VulName : null;
        this.VulCode = 'VulCode' in params ? params.VulCode : null;
        this.VulDesc = 'VulDesc' in params ? params.VulDesc : null;
        this.VulSolution = 'VulSolution' in params ? params.VulSolution : null;
        this.VulSrcType = 'VulSrcType' in params ? params.VulSrcType : null;
        this.VulFilepath = 'VulFilepath' in params ? params.VulFilepath : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
    }
}
/**
 * 用户绑定app的基本信息
 * @class
 */
class BindInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * app的icon的url
         */
        this.AppIconUrl = null;
        /**
         * app的名称
         */
        this.AppName = null;
        /**
         * app的包名
         */
        this.AppPkgName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppIconUrl = 'AppIconUrl' in params ? params.AppIconUrl : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppPkgName = 'AppPkgName' in params ? params.AppPkgName : null;
    }
}
/**
 * DeleteScanInstances请求参数结构体
 * @class
 */
class DeleteScanInstancesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 删除一个或多个扫描的app，最大支持20个
         */
        this.AppSids = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppSids = 'AppSids' in params ? params.AppSids : null;
    }
}
exports.Models = {
    PlanDetailInfo: PlanDetailInfo,
    AppSetInfo: AppSetInfo,
    CreateShieldPlanInstanceResponse: CreateShieldPlanInstanceResponse,
    ScanInfo: ScanInfo,
    CreateResourceInstancesRequest: CreateResourceInstancesRequest,
    DescribeShieldInstancesResponse: DescribeShieldInstancesResponse,
    PluginInfo: PluginInfo,
    ScanSensitiveList: ScanSensitiveList,
    DescribeShieldResultRequest: DescribeShieldResultRequest,
    CreateShieldInstanceRequest: CreateShieldInstanceRequest,
    CreateCosSecKeyInstanceRequest: CreateCosSecKeyInstanceRequest,
    DescribeScanResultsResponse: DescribeScanResultsResponse,
    CreateScanInstancesRequest: CreateScanInstancesRequest,
    DescribeUserBaseInfoInstanceResponse: DescribeUserBaseInfoInstanceResponse,
    CreateShieldPlanInstanceRequest: CreateShieldPlanInstanceRequest,
    ScanSetInfo: ScanSetInfo,
    AppScanSet: AppScanSet,
    ShieldPlanInfo: ShieldPlanInfo,
    CreateBindInstanceRequest: CreateBindInstanceRequest,
    CreateShieldInstanceResponse: CreateShieldInstanceResponse,
    DeleteShieldInstancesRequest: DeleteShieldInstancesRequest,
    ResourceInfo: ResourceInfo,
    DescribeShieldInstancesRequest: DescribeShieldInstancesRequest,
    CreateScanInstancesResponse: CreateScanInstancesResponse,
    DescribeScanInstancesResponse: DescribeScanInstancesResponse,
    VulInfo: VulInfo,
    AppInfo: AppInfo,
    ServiceInfo: ServiceInfo,
    SoInfo: SoInfo,
    DescribeShieldPlanInstanceResponse: DescribeShieldPlanInstanceResponse,
    ScanSensitiveInfo: ScanSensitiveInfo,
    ResourceServiceInfo: ResourceServiceInfo,
    DescribeResourceInstancesRequest: DescribeResourceInstancesRequest,
    AdInfo: AdInfo,
    DescribeShieldPlanInstanceRequest: DescribeShieldPlanInstanceRequest,
    ShieldInfo: ShieldInfo,
    ScanPermissionList: ScanPermissionList,
    CreateResourceInstancesResponse: CreateResourceInstancesResponse,
    AppDetailInfo: AppDetailInfo,
    DeleteScanInstancesResponse: DeleteScanInstancesResponse,
    Filter: Filter,
    DeleteShieldInstancesResponse: DeleteShieldInstancesResponse,
    DescribeScanInstancesRequest: DescribeScanInstancesRequest,
    DescribeUserBaseInfoInstanceRequest: DescribeUserBaseInfoInstanceRequest,
    DescribeResourceInstancesResponse: DescribeResourceInstancesResponse,
    DescribeScanResultsRequest: DescribeScanResultsRequest,
    CreateCosSecKeyInstanceResponse: CreateCosSecKeyInstanceResponse,
    VirusInfo: VirusInfo,
    ScanPermissionInfo: ScanPermissionInfo,
    PlanInfo: PlanInfo,
    DescribeShieldResultResponse: DescribeShieldResultResponse,
    CreateBindInstanceResponse: CreateBindInstanceResponse,
    VulList: VulList,
    BindInfo: BindInfo,
    DeleteScanInstancesRequest: DeleteScanInstancesRequest,
};
//# sourceMappingURL=models.js.map