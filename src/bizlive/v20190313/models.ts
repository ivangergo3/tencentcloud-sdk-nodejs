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
 * 流播放信息
 * @class
 */
class DayStreamPlayInfo extends AbstractModel {

    Bandwidth: number | null
    
    Flux: number | null
    
    Online: number | null
    
    Request: number | null
    
    Time: string | null
    
    constructor(){
        super();

        /**
         * 带宽（单位Mbps）。
         */
        this.Bandwidth = null;

        /**
         * 流量 （单位MB）。
         */
        this.Flux = null;

        /**
         * 在线人数。
         */
        this.Online = null;

        /**
         * 请求数。
         */
        this.Request = null;

        /**
         * 数据时间点，格式：yyyy-mm-dd HH:MM:SS。
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Bandwidth: number | null;
        Flux: number | null;
        Online: number | null;
        Request: number | null;
        Time: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * DescribeWorkers返回参数结构体
 * @class
 */
class DescribeWorkersResponse extends AbstractModel {

    RegionDetail: Array<WorkerRegionInfo> | null
    
    Idle: number | null
    
    RegionNum: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 各个区域的机器情况
         */
        this.RegionDetail = null;

        /**
         * 空闲机器总数量
         */
        this.Idle = null;

        /**
         * 区域个数
         */
        this.RegionNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegionDetail: Array<WorkerRegionInfo> | null;
        Idle: number | null;
        RegionNum: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.RegionDetail) {
            this.RegionDetail = new Array();
            for (let z in params.RegionDetail) {
                let obj = new WorkerRegionInfo();
                obj.deserialize(params.RegionDetail[z]);
                this.RegionDetail.push(obj);
            }
        }
        this.Idle = 'Idle' in params ? params.Idle : null;
        this.RegionNum = 'RegionNum' in params ? params.RegionNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ForbidLiveStream返回参数结构体
 * @class
 */
class ForbidLiveStreamResponse extends AbstractModel {

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
 * worker的区域信息
 * @class
 */
class WorkerRegionInfo extends AbstractModel {

    Idle: number | null
    
    Region: string | null
    
    constructor(){
        super();

        /**
         * 该区域空闲机器数量
         */
        this.Idle = null;

        /**
         * 区域
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Idle: number | null;
        Region: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Idle = 'Idle' in params ? params.Idle : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * RegisterIM请求参数结构体
 * @class
 */
class RegisterIMRequest extends AbstractModel {

    Nickname: string | null
    
    UserId: string | null
    
    HeadImgUrl: string | null
    
    Level: number | null
    
    constructor(){
        super();

        /**
         * 用户昵称
         */
        this.Nickname = null;

        /**
         * 用户唯一ID，建议采用用户小程序OpenID加盐形式
         */
        this.UserId = null;

        /**
         * 用户头像URL
         */
        this.HeadImgUrl = null;

        /**
         * 用户身份，默认值：0，表示无特殊身份
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Nickname: string | null;
        UserId: string | null;
        HeadImgUrl: string | null;
        Level: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.HeadImgUrl = 'HeadImgUrl' in params ? params.HeadImgUrl : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * StopGame返回参数结构体
 * @class
 */
class StopGameResponse extends AbstractModel {

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
 * ForbidLiveStream请求参数结构体
 * @class
 */
class ForbidLiveStreamRequest extends AbstractModel {

    AppName: string | null
    
    DomainName: string | null
    
    StreamName: string | null
    
    ResumeTime: string | null
    
    constructor(){
        super();

        /**
         * 应用名称。
         */
        this.AppName = null;

        /**
         * 您的推流域名。
         */
        this.DomainName = null;

        /**
         * 流名称。
         */
        this.StreamName = null;

        /**
         * 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：默认禁播90天，且最长支持禁播90天。
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AppName: string | null;
        DomainName: string | null;
        StreamName: string | null;
        ResumeTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;

    }
}

/**
 * StopGame请求参数结构体
 * @class
 */
class StopGameRequest extends AbstractModel {

    UserId: string | null
    
    constructor(){
        super();

        /**
         * 游戏用户ID
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UserId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * RegisterIM返回参数结构体
 * @class
 */
class RegisterIMResponse extends AbstractModel {

    UserKey: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 用来传递给插件的关键字段
         */
        this.UserKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UserKey: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.UserKey = 'UserKey' in params ? params.UserKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWorkers请求参数结构体
 * @class
 */
class DescribeWorkersRequest extends AbstractModel {

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
 * CreateSession返回参数结构体
 * @class
 */
class CreateSessionResponse extends AbstractModel {

    ServerSession: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 服务端session信息，返回给JSSDK
         */
        this.ServerSession = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ServerSession: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ServerSession = 'ServerSession' in params ? params.ServerSession : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStreamPlayInfoList返回参数结构体
 * @class
 */
class DescribeStreamPlayInfoListResponse extends AbstractModel {

    DataInfoList: Array<DayStreamPlayInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 统计信息列表。
         */
        this.DataInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DataInfoList: Array<DayStreamPlayInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.DataInfoList) {
            this.DataInfoList = new Array();
            for (let z in params.DataInfoList) {
                let obj = new DayStreamPlayInfo();
                obj.deserialize(params.DataInfoList[z]);
                this.DataInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSession请求参数结构体
 * @class
 */
class CreateSessionRequest extends AbstractModel {

    ClientSession: string | null
    
    GameId: string | null
    
    UserId: string | null
    
    GameParas: string | null
    
    GameRegion: string | null
    
    ImageUrl: string | null
    
    Resolution: string | null
    
    constructor(){
        super();

        /**
         * 客户端session信息，从JSSDK请求中获得
         */
        this.ClientSession = null;

        /**
         * 游戏ID
         */
        this.GameId = null;

        /**
         * 游戏用户ID
         */
        this.UserId = null;

        /**
         * 游戏参数
         */
        this.GameParas = null;

        /**
         * 游戏区域
         */
        this.GameRegion = null;

        /**
         * 背景图url
         */
        this.ImageUrl = null;

        /**
         * 分辨率
         */
        this.Resolution = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientSession: string | null;
        GameId: string | null;
        UserId: string | null;
        GameParas: string | null;
        GameRegion: string | null;
        ImageUrl: string | null;
        Resolution: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientSession = 'ClientSession' in params ? params.ClientSession : null;
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.GameParas = 'GameParas' in params ? params.GameParas : null;
        this.GameRegion = 'GameRegion' in params ? params.GameRegion : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;

    }
}

/**
 * DescribeStreamPlayInfoList请求参数结构体
 * @class
 */
class DescribeStreamPlayInfoListRequest extends AbstractModel {

    EndTime: string | null
    
    PlayDomain: string | null
    
    StartTime: string | null
    
    StreamName: string | null
    
    constructor(){
        super();

        /**
         * 结束时间，北京时间，格式：2019-04-28 10:36:00
结束时间 和 开始时间  必须在同一天内。
         */
        this.EndTime = null;

        /**
         * 播放域名。
         */
        this.PlayDomain = null;

        /**
         * 开始时间，北京时间，格式：2019-04-28 10:36:00
当前时间 和 开始时间 间隔不超过30天。
         */
        this.StartTime = null;

        /**
         * 流名称，精确匹配。
若不填，则为查询总体播放数据。
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EndTime: string | null;
        PlayDomain: string | null;
        StartTime: string | null;
        StreamName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PlayDomain = 'PlayDomain' in params ? params.PlayDomain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.StreamName = 'StreamName' in params ? params.StreamName : null;

    }
}

export const Models = {
    DayStreamPlayInfo: DayStreamPlayInfo,
    DescribeWorkersResponse: DescribeWorkersResponse,
    ForbidLiveStreamResponse: ForbidLiveStreamResponse,
    WorkerRegionInfo: WorkerRegionInfo,
    RegisterIMRequest: RegisterIMRequest,
    StopGameResponse: StopGameResponse,
    ForbidLiveStreamRequest: ForbidLiveStreamRequest,
    StopGameRequest: StopGameRequest,
    RegisterIMResponse: RegisterIMResponse,
    DescribeWorkersRequest: DescribeWorkersRequest,
    CreateSessionResponse: CreateSessionResponse,
    DescribeStreamPlayInfoListResponse: DescribeStreamPlayInfoListResponse,
    CreateSessionRequest: CreateSessionRequest,
    DescribeStreamPlayInfoListRequest: DescribeStreamPlayInfoListRequest,

}
