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
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends AbstractModel {

    InstanceIds: Array<string> | null
    
    InstanceNames: Array<string> | null
    
    Limit: number | null
    
    Offset: number | null
    
    OrderBy: string | null
    
    OrderType: number | null
    
    ProjectIds: Array<number> | null
    
    SearchKeys: Array<string> | null
    
    UniqSubnetIds: Array<string> | null
    
    UniqVpcIds: Array<string> | null
    
    Vips: Array<string> | null
    
    constructor(){
        super();

        /**
         * 实例ID组成的数组，数组下标从0开始
         */
        this.InstanceIds = null;

        /**
         * 实例名称组成的数组，数组下标从0开始
         */
        this.InstanceNames = null;

        /**
         * 实例列表的大小，参数默认值100
         */
        this.Limit = null;

        /**
         * 偏移量，取Limit整数倍
         */
        this.Offset = null;

        /**
         * 枚举范围： AddTimeStamp, InstanceName, ProjectId
         */
        this.OrderBy = null;

        /**
         * 0倒序，1正序，默认倒序
         */
        this.OrderType = null;

        /**
         * 项目ID组成的数组，数组下标从0开始
         */
        this.ProjectIds = null;

        /**
         * 搜索关键词：支持实例ID、实例名称、完整IP
         */
        this.SearchKeys = null;

        /**
         * 子网ID数组，数组下标从0开始，如：subnet-fdj24n34j2
         */
        this.UniqSubnetIds = null;

        /**
         * 私有网络ID数组，数组下标从0开始，如果不传则默认选择基础网络，如：vpc-sad23jfdfk
         */
        this.UniqVpcIds = null;

        /**
         * 实例服务IP组成的数组，数组下标从0开始
         */
        this.Vips = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceIds: Array<string> | null;
        InstanceNames: Array<string> | null;
        Limit: number | null;
        Offset: number | null;
        OrderBy: string | null;
        OrderType: number | null;
        ProjectIds: Array<number> | null;
        SearchKeys: Array<string> | null;
        UniqSubnetIds: Array<string> | null;
        UniqVpcIds: Array<string> | null;
        Vips: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.Vips = 'Vips' in params ? params.Vips : null;

    }
}

/**
 * 标签信息
 * @class
 */
class TagInfo extends AbstractModel {

    TagKey: string | null
    
    TagValue: string | null
    
    constructor(){
        super();

        /**
         * 标签键
         */
        this.TagKey = null;

        /**
         * 标签值
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TagKey: string | null;
        TagValue: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends AbstractModel {

    InstanceList: Array<InstanceListInfo> | null
    
    TotalNum: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实例详细信息列表
         */
        this.InstanceList = null;

        /**
         * 实例数量
         */
        this.TotalNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InstanceList: Array<InstanceListInfo> | null;
        TotalNum: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceListInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详细信息列表
 * @class
 */
class InstanceListInfo extends AbstractModel {

    Tags: Array<TagInfo> | null
    
    AddTimeStamp: string | null
    
    AppId: number | null
    
    AutoRenewFlag: number | null
    
    CmemId: number | null
    
    DeadlineTimeStamp: string | null
    
    Expire: number | null
    
    InstanceDesc: string | null
    
    InstanceId: string | null
    
    InstanceName: string | null
    
    IsolateTimeStamp: string | null
    
    ModTimeStamp: string | null
    
    PayMode: number | null
    
    ProjectId: number | null
    
    RegionId: number | null
    
    SetId: number | null
    
    Status: number | null
    
    SubnetId: number | null
    
    UniqSubnetId: string | null
    
    UniqVpcId: string | null
    
    Vip: string | null
    
    VpcId: number | null
    
    Vport: number | null
    
    ZoneId: number | null
    
    constructor(){
        super();

        /**
         * 实例关联的标签信息
         */
        this.Tags = null;

        /**
         * 实例创建时间
         */
        this.AddTimeStamp = null;

        /**
         * 用户AppID
         */
        this.AppId = null;

        /**
         * 实例是否设置自动续费标识，1：设置自动续费；0：未设置自动续费
         */
        this.AutoRenewFlag = null;

        /**
         * 实例内置ID
         */
        this.CmemId = null;

        /**
         * 实例截止时间
         */
        this.DeadlineTimeStamp = null;

        /**
         * 过期策略
         */
        this.Expire = null;

        /**
         * 实例描述信息
         */
        this.InstanceDesc = null;

        /**
         * 实例ID
         */
        this.InstanceId = null;

        /**
         * 实例名称
         */
        this.InstanceName = null;

        /**
         * 实例隔离时间
         */
        this.IsolateTimeStamp = null;

        /**
         * 实例修改时间
         */
        this.ModTimeStamp = null;

        /**
         * 计费模式：0-按量计费，1-包年包月
         */
        this.PayMode = null;

        /**
         * 项目ID
         */
        this.ProjectId = null;

        /**
         * 地域id 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
         */
        this.RegionId = null;

        /**
         * 仓库ID
         */
        this.SetId = null;

        /**
         * 实例当前状态，0：待初始化；1：实例在流程中；2：实例运行中；-2：实例已隔离；-3：实例待删除
         */
        this.Status = null;

        /**
         * vpc网络下子网id 如：46315
         */
        this.SubnetId = null;

        /**
         * vpc网络下子网id 如：subnet-fd3j6l35mm0
         */
        this.UniqSubnetId = null;

        /**
         * vpc网络id 如：vpc-fk33jsf43kgv
         */
        this.UniqVpcId = null;

        /**
         * 实例vip
         */
        this.Vip = null;

        /**
         * vpc网络id 如：75101
         */
        this.VpcId = null;

        /**
         * 实例端口号
         */
        this.Vport = null;

        /**
         * 区域ID
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tags: Array<TagInfo> | null;
        AddTimeStamp: string | null;
        AppId: number | null;
        AutoRenewFlag: number | null;
        CmemId: number | null;
        DeadlineTimeStamp: string | null;
        Expire: number | null;
        InstanceDesc: string | null;
        InstanceId: string | null;
        InstanceName: string | null;
        IsolateTimeStamp: string | null;
        ModTimeStamp: string | null;
        PayMode: number | null;
        ProjectId: number | null;
        RegionId: number | null;
        SetId: number | null;
        Status: number | null;
        SubnetId: number | null;
        UniqSubnetId: string | null;
        UniqVpcId: string | null;
        Vip: string | null;
        VpcId: number | null;
        Vport: number | null;
        ZoneId: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AddTimeStamp = 'AddTimeStamp' in params ? params.AddTimeStamp : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.CmemId = 'CmemId' in params ? params.CmemId : null;
        this.DeadlineTimeStamp = 'DeadlineTimeStamp' in params ? params.DeadlineTimeStamp : null;
        this.Expire = 'Expire' in params ? params.Expire : null;
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.IsolateTimeStamp = 'IsolateTimeStamp' in params ? params.IsolateTimeStamp : null;
        this.ModTimeStamp = 'ModTimeStamp' in params ? params.ModTimeStamp : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

export const Models = {
    DescribeInstancesRequest: DescribeInstancesRequest,
    TagInfo: TagInfo,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InstanceListInfo: InstanceListInfo,

}
