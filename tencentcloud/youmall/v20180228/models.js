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
 * DescribeClusterPersonArrivedMall返回参数结构体
 * @class
 */
class DescribeClusterPersonArrivedMallResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场系统编码
         */
        this.MallId = null;
        /**
         * 卖场客户编码
         */
        this.MallCode = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 到场信息
         */
        this.ArrivedMallSet = null;
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
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.MallCode = 'MallCode' in params ? params.MallCode : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        if (params.ArrivedMallSet) {
            this.ArrivedMallSet = new Array();
            for (let z in params.ArrivedMallSet) {
                let obj = new ArrivedMallInfo();
                obj.deserialize(params.ArrivedMallSet[z]);
                this.ArrivedMallSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeShopTrafficInfo请求参数结构体
 * @class
 */
class DescribeShopTrafficInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 介绍日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         */
        this.Offset = null;
        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * 性别年龄分组下的客流信息
 * @class
 */
class GenderAgeTrafficDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 性别: 0男1女
         */
        this.Gender = null;
        /**
         * 年龄区间，枚举值：0-17、18-23、24-30、31-40、41-50、51-60、>60
         */
        this.AgeGap = null;
        /**
         * 客流量
         */
        this.TrafficCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.AgeGap = 'AgeGap' in params ? params.AgeGap : null;
        this.TrafficCount = 'TrafficCount' in params ? params.TrafficCount : null;
    }
}
/**
 * DescribeZoneFlowAndStayTime返回参数结构体
 * @class
 */
class DescribeZoneFlowAndStayTimeResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团id
         */
        this.CompanyId = null;
        /**
         * 店铺id
         */
        this.ShopId = null;
        /**
         * 各区域人流数目和停留时长
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneFlowAndAvrStayTime();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribePersonArrivedMall返回参数结构体
 * @class
 */
class DescribePersonArrivedMallResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场系统编码
         */
        this.MallId = null;
        /**
         * 卖场用户编码
         */
        this.MallCode = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 到场轨迹
         */
        this.ArrivedMallSet = null;
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
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.MallCode = 'MallCode' in params ? params.MallCode : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        if (params.ArrivedMallSet) {
            this.ArrivedMallSet = new Array();
            for (let z in params.ArrivedMallSet) {
                let obj = new ArrivedMallInfo();
                obj.deserialize(params.ArrivedMallSet[z]);
                this.ArrivedMallSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyPersonType返回参数结构体
 * @class
 */
class ModifyPersonTypeResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 分时客流量详细信息
 * @class
 */
class HourTrafficInfoDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 小时 取值为：0，1，2，3，4，5，6，7，8，9，10，11，12，13，14，15，16，17，18，19，20，21，22，23
         */
        this.Hour = null;
        /**
         * 分时客流量
         */
        this.HourTrafficTotalCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.HourTrafficTotalCount = 'HourTrafficTotalCount' in params ? params.HourTrafficTotalCount : null;
    }
}
/**
 * DescribeZoneFlowDailyByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowDailyByZoneIdResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团id
         */
        this.CompanyId = null;
        /**
         * 店铺id
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 区域名称
         */
        this.ZoneName = null;
        /**
         * 每日人流量
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneDayFlow();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeZoneFlowAgeInfoByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowAgeInfoByZoneIdResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 区域名称
         */
        this.ZoneName = null;
        /**
         * 当前年龄段占比
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeClusterPersonTrace返回参数结构体
 * @class
 */
class DescribeClusterPersonTraceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场系统编码
         */
        this.MallId = null;
        /**
         * 卖场用户编码
         */
        this.MallCode = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 轨迹序列
         */
        this.TracePointSet = null;
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
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.MallCode = 'MallCode' in params ? params.MallCode : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        if (params.TracePointSet) {
            this.TracePointSet = new Array();
            for (let z in params.TracePointSet) {
                let obj = new DailyTracePoint();
                obj.deserialize(params.TracePointSet[z]);
                this.TracePointSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribePersonInfo请求参数结构体
 * @class
 */
class DescribePersonInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 起始ID，第一次拉取时StartPersonId传0，后续送入的值为上一页最后一条数据项的PersonId
         */
        this.StartPersonId = null;
        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         */
        this.Offset = null;
        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
         */
        this.Limit = null;
        /**
         * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
         */
        this.PictureExpires = null;
        /**
         * 身份类型(0表示普通顾客，1 白名单，2 表示黑名单）
         */
        this.PersonType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.StartPersonId = 'StartPersonId' in params ? params.StartPersonId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PictureExpires = 'PictureExpires' in params ? params.PictureExpires : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
    }
}
/**
 * DescribePersonInfoByFacePicture返回参数结构体
 * @class
 */
class DescribePersonInfoByFacePictureResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团id
         */
        this.CompanyId = null;
        /**
         * 店铺id
         */
        this.ShopId = null;
        /**
         * 顾客face id
         */
        this.PersonId = null;
        /**
         * 顾客底图url
         */
        this.PictureUrl = null;
        /**
         * 顾客类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
         */
        this.PersonType = null;
        /**
         * 顾客首次进店时间
         */
        this.FirstVisitTime = null;
        /**
         * 顾客历史到访次数
         */
        this.VisitTimes = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.FirstVisitTime = 'FirstVisitTime' in params ? params.FirstVisitTime : null;
        this.VisitTimes = 'VisitTimes' in params ? params.VisitTimes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribePersonTraceDetail请求参数结构体
 * @class
 */
class DescribePersonTraceDetailRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场编码
         */
        this.MallId = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 轨迹编码
         */
        this.TraceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
    }
}
/**
 * CreateAccount请求参数结构体
 * @class
 */
class CreateAccountRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 账号名；需要是手机号
         */
        this.Name = null;
        /**
         * 密码；需要是(`~!@#$%^&*()_+=-）中的至少两种且八位以上
         */
        this.Password = null;
        /**
         * 客户门店编码
         */
        this.ShopCode = null;
        /**
         * 备注说明; 30个字符以内
         */
        this.Remark = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ShopCode = 'ShopCode' in params ? params.ShopCode : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
    }
}
/**
 * 获取当前门店最新网络状态数据返回结构
 * @class
 */
class NetworkLastInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总数
         */
        this.Count = null;
        /**
         * 网络状态
         */
        this.Infos = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new NetworkAndShopInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
    }
}
/**
 * DescribeZoneFlowGenderAvrStayTimeByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 区域名称
         */
        this.ZoneName = null;
        /**
         * 不同年龄段男女停留时间（返回格式为数组，从第 1 个到最后一个数据，年龄段分别为 0-17，18 - 23,  24 - 30, 31 - 40, 41 - 50, 51 - 60, 61 - 100）
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneAgeGroupAvrStayTime();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeletePersonFeature返回参数结构体
 * @class
 */
class DeletePersonFeatureResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeCameraPerson返回参数结构体
 * @class
 */
class DescribeCameraPersonResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团id
         */
        this.CompanyId = null;
        /**
         * 店铺id
         */
        this.ShopId = null;
        /**
         * 摄像机id
         */
        this.CameraId = null;
        /**
         * pos机id
         */
        this.PosId = null;
        /**
         * 抓取的顾客信息
         */
        this.Infos = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.PosId = 'PosId' in params ? params.PosId : null;
        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new CameraPersonInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyPersonTagInfo返回参数结构体
 * @class
 */
class ModifyPersonTagInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeShopHourTrafficInfo返回参数结构体
 * @class
 */
class DescribeShopHourTrafficInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 查询结果总数
         */
        this.TotalCount = null;
        /**
         * 分时客流信息
         */
        this.ShopHourTrafficInfoSet = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.ShopHourTrafficInfoSet) {
            this.ShopHourTrafficInfoSet = new Array();
            for (let z in params.ShopHourTrafficInfoSet) {
                let obj = new ShopHourTrafficInfo();
                obj.deserialize(params.ShopHourTrafficInfoSet[z]);
                this.ShopHourTrafficInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * RegisterCallback返回参数结构体
 * @class
 */
class RegisterCallbackResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 没有店铺信息的网络状态
 * @class
 */
class NetworkInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 上传带宽，单位Mb/s，-1：未知
         */
        this.Upload = null;
        /**
         * 下载带宽，单位Mb/s，-1：未知
         */
        this.Download = null;
        /**
         * 最小延迟，单位ms，-1：未知
         */
        this.MinRtt = null;
        /**
         * 平均延迟，单位ms，-1：未知
         */
        this.AvgRtt = null;
        /**
         * 最大延迟，单位ms，-1：未知
         */
        this.MaxRtt = null;
        /**
         * 平均偏差延迟，单位ms，-1：未知
         */
        this.MdevRtt = null;
        /**
         * 丢包率百分比，-1：未知
         */
        this.Loss = null;
        /**
         * 更新时间戳
         */
        this.UpdateTime = null;
        /**
         * 上报网络状态设备
         */
        this.Mac = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Upload = 'Upload' in params ? params.Upload : null;
        this.Download = 'Download' in params ? params.Download : null;
        this.MinRtt = 'MinRtt' in params ? params.MinRtt : null;
        this.AvgRtt = 'AvgRtt' in params ? params.AvgRtt : null;
        this.MaxRtt = 'MaxRtt' in params ? params.MaxRtt : null;
        this.MdevRtt = 'MdevRtt' in params ? params.MdevRtt : null;
        this.Loss = 'Loss' in params ? params.Loss : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
    }
}
/**
 * DescribeClusterPersonArrivedMall请求参数结构体
 * @class
 */
class DescribeClusterPersonArrivedMallRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场编码
         */
        this.MallId = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 查询开始时间
         */
        this.StartTime = null;
        /**
         * 查询结束时间
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * DescribeZoneFlowGenderInfoByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowGenderInfoByZoneIdResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 区域名称
         */
        this.ZoneName = null;
        /**
         * 男性占比
         */
        this.MalePercent = null;
        /**
         * 女性占比
         */
        this.FemalePercent = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.MalePercent = 'MalePercent' in params ? params.MalePercent : null;
        this.FemalePercent = 'FemalePercent' in params ? params.FemalePercent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeHistoryNetworkInfo请求参数结构体
 * @class
 */
class DescribeHistoryNetworkInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 请求时间戳
         */
        this.Time = null;
        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.CompanyId = null;
        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前
         */
        this.ShopId = null;
        /**
         * 拉取开始日期，格式：2018-09-05
         */
        this.StartDay = null;
        /**
         * 拉取结束日期，格式L:2018-09-05，超过StartDay 90天，按StartDay+90天算
         */
        this.EndDay = null;
        /**
         * 拉取条数，默认10
         */
        this.Limit = null;
        /**
         * 拉取偏移，返回offset之后的数据
         */
        this.Offset = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.StartDay = 'StartDay' in params ? params.StartDay : null;
        this.EndDay = 'EndDay' in params ? params.EndDay : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * DescribePersonTraceDetail返回参数结构体
 * @class
 */
class DescribePersonTraceDetailResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场编码
         */
        this.MallId = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 轨迹编码
         */
        this.TraceId = null;
        /**
         * 轨迹点坐标序列
         */
        this.CoordinateSet = null;
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
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        if (params.CoordinateSet) {
            this.CoordinateSet = new Array();
            for (let z in params.CoordinateSet) {
                let obj = new PersonCoordinate();
                obj.deserialize(params.CoordinateSet[z]);
                this.CoordinateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribePersonInfoByFacePicture请求参数结构体
 * @class
 */
class DescribePersonInfoByFacePictureRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.CompanyId = null;
        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.ShopId = null;
        /**
         * 人脸图片BASE编码
         */
        this.Picture = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.Picture = 'Picture' in params ? params.Picture : null;
    }
}
/**
 * DescribePersonVisitInfo请求参数结构体
 * @class
 */
class DescribePersonVisitInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         */
        this.Offset = null;
        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
         */
        this.Limit = null;
        /**
         * 开始日期，格式yyyy-MM-dd，已废弃，请使用StartDateTime
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd，已废弃，请使用EndDateTime
         */
        this.EndDate = null;
        /**
         * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
         */
        this.PictureExpires = null;
        /**
         * 开始时间，格式yyyy-MM-dd HH:mm:ss
         */
        this.StartDateTime = null;
        /**
         * 结束时间，格式yyyy-MM-dd HH:mm:ss
         */
        this.EndDateTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.PictureExpires = 'PictureExpires' in params ? params.PictureExpires : null;
        this.StartDateTime = 'StartDateTime' in params ? params.StartDateTime : null;
        this.EndDateTime = 'EndDateTime' in params ? params.EndDateTime : null;
    }
}
/**
 * DescribeZoneTrafficInfo返回参数结构体
 * @class
 */
class DescribeZoneTrafficInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 查询结果总数
         */
        this.TotalCount = null;
        /**
         * 区域客流信息列表
         */
        this.ZoneTrafficInfoSet = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.ZoneTrafficInfoSet) {
            this.ZoneTrafficInfoSet = new Array();
            for (let z in params.ZoneTrafficInfoSet) {
                let obj = new ZoneTrafficInfo();
                obj.deserialize(params.ZoneTrafficInfoSet[z]);
                this.ZoneTrafficInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeletePersonFeature请求参数结构体
 * @class
 */
class DeletePersonFeatureRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 顾客ID
         */
        this.PersonId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
    }
}
/**
 * DescribeFaceIdByTempId请求参数结构体
 * @class
 */
class DescribeFaceIdByTempIdRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.CompanyId = null;
        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.ShopId = null;
        /**
         * 临时id
         */
        this.TempId = null;
        /**
         * 摄像头id
         */
        this.CameraId = null;
        /**
         * pos机id
         */
        this.PosId = null;
        /**
         * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
         */
        this.PictureExpires = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.TempId = 'TempId' in params ? params.TempId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.PosId = 'PosId' in params ? params.PosId : null;
        this.PictureExpires = 'PictureExpires' in params ? params.PictureExpires : null;
    }
}
/**
 * 来访客人基本资料
 * @class
 */
class PersonProfile extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 客人编码
         */
        this.PersonId = null;
        /**
         * 性别
         */
        this.Gender = null;
        /**
         * 年龄
         */
        this.Age = null;
        /**
         * 首次到场时间
         */
        this.FirstArrivedTime = null;
        /**
         * 来访次数
         */
        this.ArrivedCount = null;
        /**
         * 客户图片
         */
        this.PicUrl = null;
        /**
         * 置信度
         */
        this.Similarity = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.FirstArrivedTime = 'FirstArrivedTime' in params ? params.FirstArrivedTime : null;
        this.ArrivedCount = 'ArrivedCount' in params ? params.ArrivedCount : null;
        this.PicUrl = 'PicUrl' in params ? params.PicUrl : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
    }
}
/**
 * DescribePerson返回参数结构体
 * @class
 */
class DescribePersonResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总计客户数量
         */
        this.TotalCount = null;
        /**
         * 客户信息
         */
        this.PersonSet = null;
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
        if (params.PersonSet) {
            this.PersonSet = new Array();
            for (let z in params.PersonSet) {
                let obj = new PersonProfile();
                obj.deserialize(params.PersonSet[z]);
                this.PersonSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTrajectoryData请求参数结构体
 * @class
 */
class DescribeTrajectoryDataRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
        /**
         * 限制返回数据的最大条数，最大 400（负数代为 400）
         */
        this.Limit = null;
        /**
         * 顾客性别顾虑，0是男，1是女，其它代表不分性别
         */
        this.Gender = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
    }
}
/**
 * DescribeZoneTrafficInfo请求参数结构体
 * @class
 */
class DescribeZoneTrafficInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         */
        this.Offset = null;
        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * ModifyPersonFeatureInfo返回参数结构体
 * @class
 */
class ModifyPersonFeatureInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID，如果不填表示操作集团身份库
         */
        this.ShopId = null;
        /**
         * 请求的顾客id
         */
        this.PersonId = null;
        /**
         * 图片实际绑定person_id，可能与请求的person_id不同，以此id为准
         */
        this.PersonIdBind = null;
        /**
         * 请求的顾客类型
         */
        this.PersonType = null;
        /**
         * 与请求的person_id类型相同、与请求图片特征相似的一个或多个person_id，需要额外确认这些id是否是同一个人
         */
        this.SimilarPersonIds = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonIdBind = 'PersonIdBind' in params ? params.PersonIdBind : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.SimilarPersonIds = 'SimilarPersonIds' in params ? params.SimilarPersonIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 门店区域客流详细信息
 * @class
 */
class ZoneTrafficInfoDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 区域名称
         */
        this.ZoneName = null;
        /**
         * 客流量
         */
        this.TrafficTotalCount = null;
        /**
         * 平均停留时间
         */
        this.AvgStayTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.TrafficTotalCount = 'TrafficTotalCount' in params ? params.TrafficTotalCount : null;
        this.AvgStayTime = 'AvgStayTime' in params ? params.AvgStayTime : null;
    }
}
/**
 * DescribeZoneFlowGenderAvrStayTimeByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * 客流停留统计子结构
 * @class
 */
class ZoneFlowAndAvrStayTime extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 区域id
         */
        this.ZoneId = null;
        /**
         * 区域名称
         */
        this.ZoneName = null;
        /**
         * 人流量
         */
        this.FlowCount = null;
        /**
         * 平均停留时长
         */
        this.AvrStayTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.FlowCount = 'FlowCount' in params ? params.FlowCount : null;
        this.AvrStayTime = 'AvrStayTime' in params ? params.AvrStayTime : null;
    }
}
/**
 * 场景图信息
 * @class
 */
class SceneInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 场景图
         */
        this.ScenePictureURL = null;
        /**
         * 抓拍头像左上角X坐标在场景图中的像素点位置
         */
        this.HeadX = null;
        /**
         * 抓拍头像左上角Y坐标在场景图中的像素点位置
         */
        this.HeadY = null;
        /**
         * 抓拍头像在场景图中占有的像素宽度
         */
        this.HeadWidth = null;
        /**
         * 抓拍头像在场景图中占有的像素高度
         */
        this.HeadHeight = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenePictureURL = 'ScenePictureURL' in params ? params.ScenePictureURL : null;
        this.HeadX = 'HeadX' in params ? params.HeadX : null;
        this.HeadY = 'HeadY' in params ? params.HeadY : null;
        this.HeadWidth = 'HeadWidth' in params ? params.HeadWidth : null;
        this.HeadHeight = 'HeadHeight' in params ? params.HeadHeight : null;
    }
}
/**
 * 摄像头抓图人物属性
 * @class
 */
class CameraPersonInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 临时id，还未生成face id时返回
         */
        this.TempId = null;
        /**
         * 人脸face id
         */
        this.FaceId = null;
        /**
         * 确定当次返回的哪个id有效，1-FaceId，2-TempId
         */
        this.IdType = null;
        /**
         * 当次抓拍到的人脸图片base编码
         */
        this.FacePic = null;
        /**
         * 当次抓拍时间戳
         */
        this.Time = null;
        /**
         * 当前的person基本信息，图片以FacePic为准，结构体内未填
         */
        this.PersonInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TempId = 'TempId' in params ? params.TempId : null;
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.IdType = 'IdType' in params ? params.IdType : null;
        this.FacePic = 'FacePic' in params ? params.FacePic : null;
        this.Time = 'Time' in params ? params.Time : null;
        if (params.PersonInfo) {
            let obj = new PersonInfo();
            obj.deserialize(params.PersonInfo);
            this.PersonInfo = obj;
        }
    }
}
/**
 * DescribePersonVisitInfo返回参数结构体
 * @class
 */
class DescribePersonVisitInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 总数
         */
        this.TotalCount = null;
        /**
         * 用户到访明细
         */
        this.PersonVisitInfoSet = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.PersonVisitInfoSet) {
            this.PersonVisitInfoSet = new Array();
            for (let z in params.PersonVisitInfoSet) {
                let obj = new PersonVisitInfo();
                obj.deserialize(params.PersonVisitInfoSet[z]);
                this.PersonVisitInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeNetworkInfo请求参数结构体
 * @class
 */
class DescribeNetworkInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 请求时间戳
         */
        this.Time = null;
        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.CompanyId = null;
        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，不填则拉取集团全部店铺当前
         */
        this.ShopId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
    }
}
/**
 * DescribeZoneFlowAndStayTime请求参数结构体
 * @class
 */
class DescribeZoneFlowAndStayTimeRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * DescribeZoneFlowHourlyByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowHourlyByZoneIdRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * DescribeFaceIdByTempId返回参数结构体
 * @class
 */
class DescribeFaceIdByTempIdResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团id
         */
        this.CompanyId = null;
        /**
         * 店铺id
         */
        this.ShopId = null;
        /**
         * 摄像机id
         */
        this.CameraId = null;
        /**
         * pos机id
         */
        this.PosId = null;
        /**
         * 请求的临时id
         */
        this.TempId = null;
        /**
         * 临时id对应的face id
         */
        this.FaceId = null;
        /**
         * 顾客属性信息
         */
        this.PersonInfo = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.PosId = 'PosId' in params ? params.PosId : null;
        this.TempId = 'TempId' in params ? params.TempId : null;
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        if (params.PersonInfo) {
            let obj = new PersonInfo();
            obj.deserialize(params.PersonInfo);
            this.PersonInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 轨迹动线信息子结构
 * @class
 */
class TrajectorySunData extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 区域动线，形如 x-x-x-x-x，其中 x 为区域 ID
         */
        this.Zones = null;
        /**
         * 该动线出现次数
         */
        this.Count = null;
        /**
         * 该动线平均停留时间（秒）
         */
        this.AvgStayTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.AvgStayTime = 'AvgStayTime' in params ? params.AvgStayTime : null;
    }
}
/**
 * ModifyPersonTagInfo请求参数结构体
 * @class
 */
class ModifyPersonTagInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.CompanyId = null;
        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前
         */
        this.ShopId = null;
        /**
         * 需要设置的顾客信息，批量设置最大为10个
         */
        this.Tags = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new PersonTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
    }
}
/**
 * 门店客流量列表信息
 * @class
 */
class ShopDayTrafficInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 日期
         */
        this.Date = null;
        /**
         * 客流量
         */
        this.DayTrafficTotalCount = null;
        /**
         * 性别年龄分组下的客流信息
         */
        this.GenderAgeTrafficDetailSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.DayTrafficTotalCount = 'DayTrafficTotalCount' in params ? params.DayTrafficTotalCount : null;
        if (params.GenderAgeTrafficDetailSet) {
            this.GenderAgeTrafficDetailSet = new Array();
            for (let z in params.GenderAgeTrafficDetailSet) {
                let obj = new GenderAgeTrafficDetail();
                obj.deserialize(params.GenderAgeTrafficDetailSet[z]);
                this.GenderAgeTrafficDetailSet.push(obj);
            }
        }
    }
}
/**
 * DescribePerson请求参数结构体
 * @class
 */
class DescribePersonRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场编码
         */
        this.MallId = null;
        /**
         * 查询偏移
         */
        this.Offset = null;
        /**
         * 查询数量，默认20，最大查询数量100
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * DescribePersonTrace返回参数结构体
 * @class
 */
class DescribePersonTraceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场系统编码
         */
        this.MallId = null;
        /**
         * 卖场用户编码
         */
        this.MallCode = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 轨迹列表
         */
        this.TraceRouteSet = null;
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
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.MallCode = 'MallCode' in params ? params.MallCode : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        if (params.TraceRouteSet) {
            this.TraceRouteSet = new Array();
            for (let z in params.TraceRouteSet) {
                let obj = new PersonTraceRoute();
                obj.deserialize(params.TraceRouteSet[z]);
                this.TraceRouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 客户轨迹序列
 * @class
 */
class PersonTraceRoute extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 轨迹编码
         */
        this.TraceId = null;
        /**
         * 轨迹点序列
         */
        this.TracePointSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        if (params.TracePointSet) {
            this.TracePointSet = new Array();
            for (let z in params.TracePointSet) {
                let obj = new PersonTracePoint();
                obj.deserialize(params.TracePointSet[z]);
                this.TracePointSet.push(obj);
            }
        }
    }
}
/**
 * 客户轨迹点
 * @class
 */
class PersonTracePoint extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场区域编码
         */
        this.MallAreaId = null;
        /**
         * 门店编码
         */
        this.ShopId = null;
        /**
         * 卖场区域类型
         */
        this.MallAreaType = null;
        /**
         * 轨迹事件
         */
        this.TraceEventType = null;
        /**
         * 轨迹事件发生时间点
         */
        this.TraceEventTime = null;
        /**
         * 抓拍图片
         */
        this.CapPic = null;
        /**
         * 购物袋类型
         */
        this.ShoppingBagType = null;
        /**
         * 购物袋数量
         */
        this.ShoppingBagCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallAreaId = 'MallAreaId' in params ? params.MallAreaId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.MallAreaType = 'MallAreaType' in params ? params.MallAreaType : null;
        this.TraceEventType = 'TraceEventType' in params ? params.TraceEventType : null;
        this.TraceEventTime = 'TraceEventTime' in params ? params.TraceEventTime : null;
        this.CapPic = 'CapPic' in params ? params.CapPic : null;
        this.ShoppingBagType = 'ShoppingBagType' in params ? params.ShoppingBagType : null;
        this.ShoppingBagCount = 'ShoppingBagCount' in params ? params.ShoppingBagCount : null;
    }
}
/**
 * 门店区域客流信息
 * @class
 */
class ZoneTrafficInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 日期
         */
        this.Date = null;
        /**
         * 门店区域客流详细信息
         */
        this.ZoneTrafficInfoDetailSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        if (params.ZoneTrafficInfoDetailSet) {
            this.ZoneTrafficInfoDetailSet = new Array();
            for (let z in params.ZoneTrafficInfoDetailSet) {
                let obj = new ZoneTrafficInfoDetail();
                obj.deserialize(params.ZoneTrafficInfoDetailSet[z]);
                this.ZoneTrafficInfoDetailSet.push(obj);
            }
        }
    }
}
/**
 * DescribeNetworkInfo返回参数结构体
 * @class
 */
class DescribeNetworkInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 网络状态详情
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.InstanceSet) {
            let obj = new NetworkLastInfo();
            obj.deserialize(params.InstanceSet);
            this.InstanceSet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 网络状态
 * @class
 */
class NetworkAndShopInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团id
         */
        this.CompanyId = null;
        /**
         * 店铺id
         */
        this.ShopId = null;
        /**
         * 店铺省份
         */
        this.Province = null;
        /**
         * 店铺城市
         */
        this.City = null;
        /**
         * 店铺名
         */
        this.ShopName = null;
        /**
         * 上传带宽，单位Mb/s，-1：未知
         */
        this.Upload = null;
        /**
         * 下载带宽，单位Mb/s，-1：未知
         */
        this.Download = null;
        /**
         * 最小延迟，单位ms，-1：未知
         */
        this.MinRtt = null;
        /**
         * 平均延迟，单位ms，-1：未知
         */
        this.AvgRtt = null;
        /**
         * 最大延迟，单位ms，-1：未知
         */
        this.MaxRtt = null;
        /**
         * 平均偏差延迟，单位ms，-1：未知
         */
        this.MdevRtt = null;
        /**
         * 丢包率百分比，-1：未知
         */
        this.Loss = null;
        /**
         * 更新时间戳
         */
        this.UpdateTime = null;
        /**
         * 上报网络状态设备
         */
        this.Mac = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;
        this.Upload = 'Upload' in params ? params.Upload : null;
        this.Download = 'Download' in params ? params.Download : null;
        this.MinRtt = 'MinRtt' in params ? params.MinRtt : null;
        this.AvgRtt = 'AvgRtt' in params ? params.AvgRtt : null;
        this.MaxRtt = 'MaxRtt' in params ? params.MaxRtt : null;
        this.MdevRtt = 'MdevRtt' in params ? params.MdevRtt : null;
        this.Loss = 'Loss' in params ? params.Loss : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
    }
}
/**
 * DescribeZoneFlowGenderInfoByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowGenderInfoByZoneIdRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * DescribeShopHourTrafficInfo请求参数结构体
 * @class
 */
class DescribeShopHourTrafficInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 开始日期，格式：yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式：yyyy-MM-dd
         */
        this.EndDate = null;
        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         */
        this.Offset = null;
        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * RegisterCallback请求参数结构体
 * @class
 */
class RegisterCallbackRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.CompanyId = null;
        /**
         * 通知回调地址，完整url，示例（http://youmall.tencentcloudapi.com/）
         */
        this.BackUrl = null;
        /**
         * 请求时间戳
         */
        this.Time = null;
        /**
         * 是否需要顾客图片，1-需要图片，其它-不需要图片
         */
        this.NeedFacePic = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.BackUrl = 'BackUrl' in params ? params.BackUrl : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.NeedFacePic = 'NeedFacePic' in params ? params.NeedFacePic : null;
    }
}
/**
 * DescribeShopInfo请求参数结构体
 * @class
 */
class DescribeShopInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         */
        this.Offset = null;
        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * 查询网络状态历史数据输出
 * @class
 */
class NetworkHistoryInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总数
         */
        this.Count = null;
        /**
         * 集团id
         */
        this.CompanyId = null;
        /**
         * 店铺id
         */
        this.ShopId = null;
        /**
         * 店铺省份
         */
        this.Province = null;
        /**
         * 店铺城市
         */
        this.City = null;
        /**
         * 店铺名称
         */
        this.ShopName = null;
        /**
         * 网络信息
         */
        this.Infos = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;
        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new NetworkInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
    }
}
/**
 * 用户信息
 * @class
 */
class PersonInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户ID
         */
        this.PersonId = null;
        /**
         * 人脸图片Base64内容，已弃用，返回默认空值
         */
        this.PersonPicture = null;
        /**
         * 性别：0男1女
         */
        this.Gender = null;
        /**
         * 年龄
         */
        this.Age = null;
        /**
         * 身份类型（0表示普通顾客，1 白名单，2 表示黑名单）
         */
        this.PersonType = null;
        /**
         * 人脸图片Url，在有效期内可以访问下载
         */
        this.PersonPictureUrl = null;
        /**
         * 身份子类型:
PersonType=0时(普通顾客)，0普通顾客
PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册用户，5VIP用户
PersonType=2时(黑名单)，0普通黑名单，1小偷)
         */
        this.PersonSubType = null;
        /**
         * 到访次数，-1表示未知
         */
        this.VisitTimes = null;
        /**
         * 到访天数，-1表示未知
         */
        this.VisitDays = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonPicture = 'PersonPicture' in params ? params.PersonPicture : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.PersonPictureUrl = 'PersonPictureUrl' in params ? params.PersonPictureUrl : null;
        this.PersonSubType = 'PersonSubType' in params ? params.PersonSubType : null;
        this.VisitTimes = 'VisitTimes' in params ? params.VisitTimes : null;
        this.VisitDays = 'VisitDays' in params ? params.VisitDays : null;
    }
}
/**
 * 修改顾客属性参数
 * @class
 */
class PersonTagInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 顾客原类型
         */
        this.OldType = null;
        /**
         * 顾客新类型
         */
        this.NewType = null;
        /**
         * 顾客face id
         */
        this.PersonId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldType = 'OldType' in params ? params.OldType : null;
        this.NewType = 'NewType' in params ? params.NewType : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
    }
}
/**
 * 客流统计分时数据子结构
 * @class
 */
class ZoneHourFlow extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 分时 0~23
         */
        this.Hour = null;
        /**
         * 客流量
         */
        this.FlowCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.FlowCount = 'FlowCount' in params ? params.FlowCount : null;
    }
}
/**
 * 分时客流量信息
 * @class
 */
class ShopHourTrafficInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 日期，格式yyyy-MM-dd
         */
        this.Date = null;
        /**
         * 分时客流详细信息
         */
        this.HourTrafficInfoDetailSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        if (params.HourTrafficInfoDetailSet) {
            this.HourTrafficInfoDetailSet = new Array();
            for (let z in params.HourTrafficInfoDetailSet) {
                let obj = new HourTrafficInfoDetail();
                obj.deserialize(params.HourTrafficInfoDetailSet[z]);
                this.HourTrafficInfoDetailSet.push(obj);
            }
        }
    }
}
/**
 * DescribeClusterPersonTrace请求参数结构体
 * @class
 */
class DescribeClusterPersonTraceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场编码
         */
        this.MallId = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 查询开始时间
         */
        this.StartTime = null;
        /**
         * 查询结束时间
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * 轨迹点坐标
 * @class
 */
class PersonCoordinate extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * CAD图X坐标
         */
        this.CADX = null;
        /**
         * CAD图Y坐标
         */
        this.CADY = null;
        /**
         * 抓拍时间点
         */
        this.CapTime = null;
        /**
         * 抓拍图片
         */
        this.CapPic = null;
        /**
         * 卖场区域类型
         */
        this.MallAreaType = null;
        /**
         * 坐标编号
         */
        this.PosId = null;
        /**
         * 门店编号
         */
        this.ShopId = null;
        /**
         * 事件
         */
        this.Event = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CADX = 'CADX' in params ? params.CADX : null;
        this.CADY = 'CADY' in params ? params.CADY : null;
        this.CapTime = 'CapTime' in params ? params.CapTime : null;
        this.CapPic = 'CapPic' in params ? params.CapPic : null;
        this.MallAreaType = 'MallAreaType' in params ? params.MallAreaType : null;
        this.PosId = 'PosId' in params ? params.PosId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.Event = 'Event' in params ? params.Event : null;
    }
}
/**
 * ModifyPersonFeatureInfo请求参数结构体
 * @class
 */
class ModifyPersonFeatureInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 需要修改的顾客id
         */
        this.PersonId = null;
        /**
         * 图片BASE编码
         */
        this.Picture = null;
        /**
         * 图片名称（尽量不要重复）
         */
        this.PictureName = null;
        /**
         * 人物类型，仅能操作黑白名单顾客（1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
         */
        this.PersonType = null;
        /**
         * 店铺ID，如果不填表示操作集团身份库
         */
        this.ShopId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Picture = 'Picture' in params ? params.Picture : null;
        this.PictureName = 'PictureName' in params ? params.PictureName : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
    }
}
/**
 * 每日客流统计子结构
 * @class
 */
class ZoneDayFlow extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 日期，如 2018-08-6
         */
        this.Day = null;
        /**
         * 客流量
         */
        this.FlowCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Day = 'Day' in params ? params.Day : null;
        this.FlowCount = 'FlowCount' in params ? params.FlowCount : null;
    }
}
/**
 * DescribePersonTrace请求参数结构体
 * @class
 */
class DescribePersonTraceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场编码
         */
        this.MallId = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 查询开始时间
         */
        this.StartTime = null;
        /**
         * 查询结束时间
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * DescribeZoneFlowHourlyByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowHourlyByZoneIdResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 区域名称
         */
        this.ZoneName = null;
        /**
         * 各个分时人流量
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneHourFlow();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeZoneFlowDailyByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowDailyByZoneIdRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * DescribePersonInfo返回参数结构体
 * @class
 */
class DescribePersonInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 总数
         */
        this.TotalCount = null;
        /**
         * 用户信息
         */
        this.PersonInfoSet = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.PersonInfoSet) {
            this.PersonInfoSet = new Array();
            for (let z in params.PersonInfoSet) {
                let obj = new PersonInfo();
                obj.deserialize(params.PersonInfoSet[z]);
                this.PersonInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 客户天轨迹
 * @class
 */
class DailyTracePoint extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 轨迹日期
         */
        this.TraceDate = null;
        /**
         * 轨迹点序列
         */
        this.TracePointSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceDate = 'TraceDate' in params ? params.TraceDate : null;
        if (params.TracePointSet) {
            this.TracePointSet = new Array();
            for (let z in params.TracePointSet) {
                let obj = new PersonTracePoint();
                obj.deserialize(params.TracePointSet[z]);
                this.TracePointSet.push(obj);
            }
        }
    }
}
/**
 * CreateAccount返回参数结构体
 * @class
 */
class CreateAccountResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeHistoryNetworkInfo返回参数结构体
 * @class
 */
class DescribeHistoryNetworkInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 网络状态数据
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
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.InstanceSet) {
            let obj = new NetworkHistoryInfo();
            obj.deserialize(params.InstanceSet);
            this.InstanceSet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateFacePicture返回参数结构体
 * @class
 */
class CreateFacePictureResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 人物ID
         */
        this.PersonId = null;
        /**
         * 0.正常建档 1.重复身份 2.未检测到人脸 3.检测到多个人脸 4.人脸大小过小 5.人脸质量不达标 6.其他错误
         */
        this.Status = null;
        /**
         * 图片url
         */
        this.PictureUrl = null;
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
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PictureUrl = 'PictureUrl' in params ? params.PictureUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeShopInfo返回参数结构体
 * @class
 */
class DescribeShopInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 门店总数
         */
        this.TotalCount = null;
        /**
         * 门店列表信息
         */
        this.ShopInfoSet = null;
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
        if (params.ShopInfoSet) {
            this.ShopInfoSet = new Array();
            for (let z in params.ShopInfoSet) {
                let obj = new ShopInfo();
                obj.deserialize(params.ShopInfoSet[z]);
                this.ShopInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 用户到访明细
 * @class
 */
class PersonVisitInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户ID
         */
        this.PersonId = null;
        /**
         * 用户到访ID
         */
        this.VisitId = null;
        /**
         * 到访时间：Unix时间戳
         */
        this.InTime = null;
        /**
         * 抓拍到的头像Base64内容，已弃用，返回默认空值
         */
        this.CapturedPicture = null;
        /**
         * 口罩类型：0不戴口罩，1戴口罩
         */
        this.MaskType = null;
        /**
         * 眼镜类型：0不戴眼镜，1普通眼镜 , 2墨镜
         */
        this.GlassType = null;
        /**
         * 发型：0 短发,  1长发
         */
        this.HairType = null;
        /**
         * 抓拍到的头像Url，在有效期内可以访问下载
         */
        this.CapturedPictureUrl = null;
        /**
         * 抓拍头像的场景图信息
         */
        this.SceneInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.VisitId = 'VisitId' in params ? params.VisitId : null;
        this.InTime = 'InTime' in params ? params.InTime : null;
        this.CapturedPicture = 'CapturedPicture' in params ? params.CapturedPicture : null;
        this.MaskType = 'MaskType' in params ? params.MaskType : null;
        this.GlassType = 'GlassType' in params ? params.GlassType : null;
        this.HairType = 'HairType' in params ? params.HairType : null;
        this.CapturedPictureUrl = 'CapturedPictureUrl' in params ? params.CapturedPictureUrl : null;
        if (params.SceneInfo) {
            let obj = new SceneInfo();
            obj.deserialize(params.SceneInfo);
            this.SceneInfo = obj;
        }
    }
}
/**
 * CreateFacePicture请求参数结构体
 * @class
 */
class CreateFacePictureRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 人物类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
         */
        this.PersonType = null;
        /**
         * 图片BASE编码
         */
        this.Picture = null;
        /**
         * 图片名称
         */
        this.PictureName = null;
        /**
         * 店铺ID，如果不填表示操作集团身份库
         */
        this.ShopId = null;
        /**
         * 是否强制更新：为ture时会为用户创建一个新的指定PersonType的身份;目前这个参数已废弃，可不传
         */
        this.IsForceUpload = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.Picture = 'Picture' in params ? params.Picture : null;
        this.PictureName = 'PictureName' in params ? params.PictureName : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.IsForceUpload = 'IsForceUpload' in params ? params.IsForceUpload : null;
    }
}
/**
 * DescribeZoneFlowAgeInfoByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowAgeInfoByZoneIdRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 区域ID
         */
        this.ZoneId = null;
        /**
         * 开始日期，格式yyyy-MM-dd
         */
        this.StartDate = null;
        /**
         * 结束日期，格式yyyy-MM-dd
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * 客户所属的门店信息
 * @class
 */
class ShopInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 门店名称
         */
        this.ShopName = null;
        /**
         * 客户门店编码
         */
        this.ShopCode = null;
        /**
         * 省
         */
        this.Province = null;
        /**
         * 市
         */
        this.City = null;
        /**
         * 公司名称
         */
        this.CompanyName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;
        this.ShopCode = 'ShopCode' in params ? params.ShopCode : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
    }
}
/**
 * ModifyPersonType请求参数结构体
 * @class
 */
class ModifyPersonTypeRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 顾客ID
         */
        this.PersonId = null;
        /**
         * 身份类型(0表示普通顾客，1 白名单，2 表示黑名单）
         */
        this.PersonType = null;
        /**
         * 身份子类型:
PersonType=0时(普通顾客)，0普通顾客
PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册会员，5VIP用户
PersonType=2时(黑名单)，0普通黑名单，1小偷)
         */
        this.PersonSubType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.PersonSubType = 'PersonSubType' in params ? params.PersonSubType : null;
    }
}
/**
 * 客户到场信息
 * @class
 */
class ArrivedMallInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 到场时间
         */
        this.ArrivedTime = null;
        /**
         * 出场时间
         */
        this.LeaveTime = null;
        /**
         * 停留时间，秒
         */
        this.StaySecond = null;
        /**
         * 到场抓拍图片
         */
        this.InCapPic = null;
        /**
         * 出场抓拍图片
         */
        this.OutCapPic = null;
        /**
         * 轨迹编码
         */
        this.TraceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArrivedTime = 'ArrivedTime' in params ? params.ArrivedTime : null;
        this.LeaveTime = 'LeaveTime' in params ? params.LeaveTime : null;
        this.StaySecond = 'StaySecond' in params ? params.StaySecond : null;
        this.InCapPic = 'InCapPic' in params ? params.InCapPic : null;
        this.OutCapPic = 'OutCapPic' in params ? params.OutCapPic : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
    }
}
/**
 * 区域性别平均停留时间子结构
 * @class
 */
class ZoneAgeGroupAvrStayTime extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 男性平均停留时间
         */
        this.MaleAvrStayTime = null;
        /**
         * 女性平均停留时间
         */
        this.FemaleAvrStayTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaleAvrStayTime = 'MaleAvrStayTime' in params ? params.MaleAvrStayTime : null;
        this.FemaleAvrStayTime = 'FemaleAvrStayTime' in params ? params.FemaleAvrStayTime : null;
    }
}
/**
 * DescribePersonArrivedMall请求参数结构体
 * @class
 */
class DescribePersonArrivedMallRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 卖场编码
         */
        this.MallId = null;
        /**
         * 客户编码
         */
        this.PersonId = null;
        /**
         * 查询开始时间
         */
        this.StartTime = null;
        /**
         * 查询结束时间
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = 'MallId' in params ? params.MallId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * DescribeCameraPerson请求参数结构体
 * @class
 */
class DescribeCameraPersonRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.CompanyId = null;
        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
         */
        this.ShopId = null;
        /**
         * 摄像头id
         */
        this.CameraId = null;
        /**
         * 拉取开始时间戳，单位秒
         */
        this.StartTime = null;
        /**
         * 拉取结束时间戳，单位秒，不超过StartTime+10秒，超过默认为StartTime+10
         */
        this.EndTime = null;
        /**
         * pos机id
         */
        this.PosId = null;
        /**
         * 拉取图片数，默认为1，最大为3
         */
        this.Num = null;
        /**
         * 是否需要base64的图片，0-不需要，1-需要，默认0
         */
        this.IsNeedPic = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.CameraId = 'CameraId' in params ? params.CameraId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PosId = 'PosId' in params ? params.PosId : null;
        this.Num = 'Num' in params ? params.Num : null;
        this.IsNeedPic = 'IsNeedPic' in params ? params.IsNeedPic : null;
    }
}
/**
 * DescribeShopTrafficInfo返回参数结构体
 * @class
 */
class DescribeShopTrafficInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 公司ID
         */
        this.CompanyId = null;
        /**
         * 门店ID
         */
        this.ShopId = null;
        /**
         * 查询结果总数
         */
        this.TotalCount = null;
        /**
         * 客流信息列表
         */
        this.ShopDayTrafficInfoSet = null;
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.ShopDayTrafficInfoSet) {
            this.ShopDayTrafficInfoSet = new Array();
            for (let z in params.ShopDayTrafficInfoSet) {
                let obj = new ShopDayTrafficInfo();
                obj.deserialize(params.ShopDayTrafficInfoSet[z]);
                this.ShopDayTrafficInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTrajectoryData返回参数结构体
 * @class
 */
class DescribeTrajectoryDataResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 集团ID
         */
        this.CompanyId = null;
        /**
         * 店铺ID
         */
        this.ShopId = null;
        /**
         * 总人数
         */
        this.TotalPerson = null;
        /**
         * 总动迹数目
         */
        this.TotalTrajectory = null;
        /**
         * 返回动迹中的总人数
         */
        this.Person = null;
        /**
         * 返回动迹的数目
         */
        this.Trajectory = null;
        /**
         * 返回动迹的具体信息
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.ShopId = 'ShopId' in params ? params.ShopId : null;
        this.TotalPerson = 'TotalPerson' in params ? params.TotalPerson : null;
        this.TotalTrajectory = 'TotalTrajectory' in params ? params.TotalTrajectory : null;
        this.Person = 'Person' in params ? params.Person : null;
        this.Trajectory = 'Trajectory' in params ? params.Trajectory : null;
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TrajectorySunData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
exports.Models = {
    DescribeClusterPersonArrivedMallResponse: DescribeClusterPersonArrivedMallResponse,
    DescribeShopTrafficInfoRequest: DescribeShopTrafficInfoRequest,
    GenderAgeTrafficDetail: GenderAgeTrafficDetail,
    DescribeZoneFlowAndStayTimeResponse: DescribeZoneFlowAndStayTimeResponse,
    DescribePersonArrivedMallResponse: DescribePersonArrivedMallResponse,
    ModifyPersonTypeResponse: ModifyPersonTypeResponse,
    HourTrafficInfoDetail: HourTrafficInfoDetail,
    DescribeZoneFlowDailyByZoneIdResponse: DescribeZoneFlowDailyByZoneIdResponse,
    DescribeZoneFlowAgeInfoByZoneIdResponse: DescribeZoneFlowAgeInfoByZoneIdResponse,
    DescribeClusterPersonTraceResponse: DescribeClusterPersonTraceResponse,
    DescribePersonInfoRequest: DescribePersonInfoRequest,
    DescribePersonInfoByFacePictureResponse: DescribePersonInfoByFacePictureResponse,
    DescribePersonTraceDetailRequest: DescribePersonTraceDetailRequest,
    CreateAccountRequest: CreateAccountRequest,
    NetworkLastInfo: NetworkLastInfo,
    DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse: DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse,
    DeletePersonFeatureResponse: DeletePersonFeatureResponse,
    DescribeCameraPersonResponse: DescribeCameraPersonResponse,
    ModifyPersonTagInfoResponse: ModifyPersonTagInfoResponse,
    DescribeShopHourTrafficInfoResponse: DescribeShopHourTrafficInfoResponse,
    RegisterCallbackResponse: RegisterCallbackResponse,
    NetworkInfo: NetworkInfo,
    DescribeClusterPersonArrivedMallRequest: DescribeClusterPersonArrivedMallRequest,
    DescribeZoneFlowGenderInfoByZoneIdResponse: DescribeZoneFlowGenderInfoByZoneIdResponse,
    DescribeHistoryNetworkInfoRequest: DescribeHistoryNetworkInfoRequest,
    DescribePersonTraceDetailResponse: DescribePersonTraceDetailResponse,
    DescribePersonInfoByFacePictureRequest: DescribePersonInfoByFacePictureRequest,
    DescribePersonVisitInfoRequest: DescribePersonVisitInfoRequest,
    DescribeZoneTrafficInfoResponse: DescribeZoneTrafficInfoResponse,
    DeletePersonFeatureRequest: DeletePersonFeatureRequest,
    DescribeFaceIdByTempIdRequest: DescribeFaceIdByTempIdRequest,
    PersonProfile: PersonProfile,
    DescribePersonResponse: DescribePersonResponse,
    DescribeTrajectoryDataRequest: DescribeTrajectoryDataRequest,
    DescribeZoneTrafficInfoRequest: DescribeZoneTrafficInfoRequest,
    ModifyPersonFeatureInfoResponse: ModifyPersonFeatureInfoResponse,
    ZoneTrafficInfoDetail: ZoneTrafficInfoDetail,
    DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest: DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest,
    ZoneFlowAndAvrStayTime: ZoneFlowAndAvrStayTime,
    SceneInfo: SceneInfo,
    CameraPersonInfo: CameraPersonInfo,
    DescribePersonVisitInfoResponse: DescribePersonVisitInfoResponse,
    DescribeNetworkInfoRequest: DescribeNetworkInfoRequest,
    DescribeZoneFlowAndStayTimeRequest: DescribeZoneFlowAndStayTimeRequest,
    DescribeZoneFlowHourlyByZoneIdRequest: DescribeZoneFlowHourlyByZoneIdRequest,
    DescribeFaceIdByTempIdResponse: DescribeFaceIdByTempIdResponse,
    TrajectorySunData: TrajectorySunData,
    ModifyPersonTagInfoRequest: ModifyPersonTagInfoRequest,
    ShopDayTrafficInfo: ShopDayTrafficInfo,
    DescribePersonRequest: DescribePersonRequest,
    DescribePersonTraceResponse: DescribePersonTraceResponse,
    PersonTraceRoute: PersonTraceRoute,
    PersonTracePoint: PersonTracePoint,
    ZoneTrafficInfo: ZoneTrafficInfo,
    DescribeNetworkInfoResponse: DescribeNetworkInfoResponse,
    NetworkAndShopInfo: NetworkAndShopInfo,
    DescribeZoneFlowGenderInfoByZoneIdRequest: DescribeZoneFlowGenderInfoByZoneIdRequest,
    DescribeShopHourTrafficInfoRequest: DescribeShopHourTrafficInfoRequest,
    RegisterCallbackRequest: RegisterCallbackRequest,
    DescribeShopInfoRequest: DescribeShopInfoRequest,
    NetworkHistoryInfo: NetworkHistoryInfo,
    PersonInfo: PersonInfo,
    PersonTagInfo: PersonTagInfo,
    ZoneHourFlow: ZoneHourFlow,
    ShopHourTrafficInfo: ShopHourTrafficInfo,
    DescribeClusterPersonTraceRequest: DescribeClusterPersonTraceRequest,
    PersonCoordinate: PersonCoordinate,
    ModifyPersonFeatureInfoRequest: ModifyPersonFeatureInfoRequest,
    ZoneDayFlow: ZoneDayFlow,
    DescribePersonTraceRequest: DescribePersonTraceRequest,
    DescribeZoneFlowHourlyByZoneIdResponse: DescribeZoneFlowHourlyByZoneIdResponse,
    DescribeZoneFlowDailyByZoneIdRequest: DescribeZoneFlowDailyByZoneIdRequest,
    DescribePersonInfoResponse: DescribePersonInfoResponse,
    DailyTracePoint: DailyTracePoint,
    CreateAccountResponse: CreateAccountResponse,
    DescribeHistoryNetworkInfoResponse: DescribeHistoryNetworkInfoResponse,
    CreateFacePictureResponse: CreateFacePictureResponse,
    DescribeShopInfoResponse: DescribeShopInfoResponse,
    PersonVisitInfo: PersonVisitInfo,
    CreateFacePictureRequest: CreateFacePictureRequest,
    DescribeZoneFlowAgeInfoByZoneIdRequest: DescribeZoneFlowAgeInfoByZoneIdRequest,
    ShopInfo: ShopInfo,
    ModifyPersonTypeRequest: ModifyPersonTypeRequest,
    ArrivedMallInfo: ArrivedMallInfo,
    ZoneAgeGroupAvrStayTime: ZoneAgeGroupAvrStayTime,
    DescribePersonArrivedMallRequest: DescribePersonArrivedMallRequest,
    DescribeCameraPersonRequest: DescribeCameraPersonRequest,
    DescribeShopTrafficInfoResponse: DescribeShopTrafficInfoResponse,
    DescribeTrajectoryDataResponse: DescribeTrajectoryDataResponse,
};
//# sourceMappingURL=models.js.map