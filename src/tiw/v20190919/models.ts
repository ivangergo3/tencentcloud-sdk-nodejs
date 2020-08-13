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
 * 混流画布参数
 * @class
 */
class Canvas extends AbstractModel {

    LayoutParams: LayoutParams | null
    
    BackgroundColor: string | null
    
    constructor(){
        super();

        /**
         * 混流画布宽高配置
         */
        this.LayoutParams = null;

        /**
         * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
         */
        this.BackgroundColor = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LayoutParams: LayoutParams | null;
        BackgroundColor: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;

    }
}

/**
 * 自定义混流配置布局参数
 * @class
 */
class LayoutParams extends AbstractModel {

    Width: number | null
    
    Height: number | null
    
    X: number | null
    
    Y: number | null
    
    ZOrder: number | null
    
    constructor(){
        super();

        /**
         * 流画面宽，取值范围[2,3000]
         */
        this.Width = null;

        /**
         * 流画面高，取值范围[2,3000]
         */
        this.Height = null;

        /**
         * 当前画面左上角顶点相对于Canvas左上角顶点的x轴偏移量，默认为0，取值范围[0,3000]
         */
        this.X = null;

        /**
         * 当前画面左上角顶点相对于Canvas左上角顶点的y轴偏移量，默认为0， 取值范围[0,3000]
         */
        this.Y = null;

        /**
         * 画面z轴位置，默认为0
z轴确定了重叠画面的遮盖顺序，z轴值大的画面处于顶层
         */
        this.ZOrder = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Width: number | null;
        Height: number | null;
        X: number | null;
        Y: number | null;
        ZOrder: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;

    }
}

/**
 * ResumeOnlineRecord返回参数结构体
 * @class
 */
class ResumeOnlineRecordResponse extends AbstractModel {

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
 * StartOnlineRecord请求参数结构体
 * @class
 */
class StartOnlineRecordRequest extends AbstractModel {

    SdkAppId: number | null
    
    RoomId: number | null
    
    RecordUserId: string | null
    
    RecordUserSig: string | null
    
    GroupId: string | null
    
    Concat: Concat | null
    
    Whiteboard: Whiteboard | null
    
    MixStream: MixStream | null
    
    Extras: Array<string> | null
    
    AudioFileNeeded: boolean | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 需要录制的房间号，取值范围: (1, 4294967295)
         */
        this.RoomId = null;

        /**
         * 用于实时录制服务进房的用户ID，格式为`tic_record_user_${RoomId}_${Random}`，其中 `${RoomId} `与录制房间号对应，`${Random}`为一个随机字符串。
该ID必须是一个单独的未在SDK中使用的ID，实时录制服务使用这个用户ID进入房间进行音视频与白板录制，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常录制。
         */
        this.RecordUserId = null;

        /**
         * 与RecordUserId对应的签名
         */
        this.RecordUserSig = null;

        /**
         * 白板的 IM 群组 Id，默认同房间号
         */
        this.GroupId = null;

        /**
         * 实时录制视频拼接参数
         */
        this.Concat = null;

        /**
         * 实时录制白板参数，例如白板宽高等
         */
        this.Whiteboard = null;

        /**
         * 实时录制混流参数
特别说明：
1. 混流功能需要根据额外开通， 请联系腾讯云互动白板客服人员
2. 使用混流功能，必须提供 Extras 参数，且 Extras 参数中必须包含 "MIX_STREAM"
         */
        this.MixStream = null;

        /**
         * 使用到的高级功能列表
可以选值列表：
MIX_STREAM - 混流功能
         */
        this.Extras = null;

        /**
         * 是否需要在结果回调中返回各路流的纯音频录制文件，文件格式为mp3
         */
        this.AudioFileNeeded = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        RoomId: number | null;
        RecordUserId: string | null;
        RecordUserSig: string | null;
        GroupId: string | null;
        Concat: Concat | null;
        Whiteboard: Whiteboard | null;
        MixStream: MixStream | null;
        Extras: Array<string> | null;
        AudioFileNeeded: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordUserSig = 'RecordUserSig' in params ? params.RecordUserSig : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Concat) {
            let obj = new Concat();
            obj.deserialize(params.Concat)
            this.Concat = obj;
        }

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }

        if (params.MixStream) {
            let obj = new MixStream();
            obj.deserialize(params.MixStream)
            this.MixStream = obj;
        }
        this.Extras = 'Extras' in params ? params.Extras : null;
        this.AudioFileNeeded = 'AudioFileNeeded' in params ? params.AudioFileNeeded : null;

    }
}

/**
 * DescribeOnlineRecordCallback请求参数结构体
 * @class
 */
class DescribeOnlineRecordCallbackRequest extends AbstractModel {

    SdkAppId: number | null
    
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeOnlineRecordCallback返回参数结构体
 * @class
 */
class DescribeOnlineRecordCallbackResponse extends AbstractModel {

    Callback: string | null
    
    CallbackKey: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实时录制事件回调地址，如果未设置回调地址，该字段为空字符串
         */
        this.Callback = null;

        /**
         * 实时录制回调鉴权密钥
         */
        this.CallbackKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Callback: string | null;
        CallbackKey: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTranscodeCallback返回参数结构体
 * @class
 */
class SetTranscodeCallbackResponse extends AbstractModel {

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
 * StopOnlineRecord请求参数结构体
 * @class
 */
class StopOnlineRecordRequest extends AbstractModel {

    SdkAppId: number | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 需要停止录制的任务 Id
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 流布局参数
 * @class
 */
class StreamLayout extends AbstractModel {

    LayoutParams: LayoutParams | null
    
    InputStreamId: string | null
    
    BackgroundColor: string | null
    
    constructor(){
        super();

        /**
         * 流布局配置参数
         */
        this.LayoutParams = null;

        /**
         * 视频流ID
流ID的取值含义如下：
1. tic_record_user - 表示当前画面用于显示白板视频流
2. tic_substream - 表示当前画面用于显示辅路视频流
3. 特定用户ID - 表示当前画面用于显示指定用户的视频流
4. 不填 - 表示当前画面用于备选，当有新的视频流加入时，会从这些备选的空位中选择一个没有被占用的位置来显示新的视频流画面
         */
        this.InputStreamId = null;

        /**
         * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
         */
        this.BackgroundColor = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LayoutParams: LayoutParams | null;
        InputStreamId: string | null;
        BackgroundColor: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.InputStreamId = 'InputStreamId' in params ? params.InputStreamId : null;
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;

    }
}

/**
 * CreateTranscode返回参数结构体
 * @class
 */
class CreateTranscodeResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 文档转码任务的唯一标识Id，用于查询该任务的进度以及转码结果
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
 * 视频信息
 * @class
 */
class VideoInfo extends AbstractModel {

    VideoPlayTime: number | null
    
    VideoSize: number | null
    
    VideoFormat: string | null
    
    VideoDuration: number | null
    
    VideoUrl: string | null
    
    VideoId: string | null
    
    VideoType: number | null
    
    UserId: string | null
    
    constructor(){
        super();

        /**
         * 视频开始播放的时间（单位：毫秒）
         */
        this.VideoPlayTime = null;

        /**
         * 视频大小（字节）
         */
        this.VideoSize = null;

        /**
         * 视频格式
         */
        this.VideoFormat = null;

        /**
         * 视频播放时长（单位：毫秒）
         */
        this.VideoDuration = null;

        /**
         * 视频文件URL
         */
        this.VideoUrl = null;

        /**
         * 视频文件Id
         */
        this.VideoId = null;

        /**
         * 视频流类型 
- 0：摄像头视频 
- 1：屏幕分享视频
- 2：白板视频 
- 3：混流视频
- 4：纯音频（mp3)
         */
        this.VideoType = null;

        /**
         * 摄像头/屏幕分享视频所属用户的 Id（白板视频为空、混流视频tic_mixstream_房间号_混流布局类型、辅路视频tic_substream_用户Id）
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VideoPlayTime: number | null;
        VideoSize: number | null;
        VideoFormat: string | null;
        VideoDuration: number | null;
        VideoUrl: string | null;
        VideoId: string | null;
        VideoType: number | null;
        UserId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.VideoPlayTime = 'VideoPlayTime' in params ? params.VideoPlayTime : null;
        this.VideoSize = 'VideoSize' in params ? params.VideoSize : null;
        this.VideoFormat = 'VideoFormat' in params ? params.VideoFormat : null;
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoId = 'VideoId' in params ? params.VideoId : null;
        this.VideoType = 'VideoType' in params ? params.VideoType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * 自定义混流布局参数
 * @class
 */
class CustomLayout extends AbstractModel {

    Canvas: Canvas | null
    
    InputStreamList: Array<StreamLayout> | null
    
    constructor(){
        super();

        /**
         * 混流画布参数
         */
        this.Canvas = null;

        /**
         * 流布局参数，每路流的布局不能超出画布区域
         */
        this.InputStreamList = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Canvas: Canvas | null;
        InputStreamList: Array<StreamLayout> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.InputStreamList) {
            this.InputStreamList = new Array();
            for (let z in params.InputStreamList) {
                let obj = new StreamLayout();
                obj.deserialize(params.InputStreamList[z]);
                this.InputStreamList.push(obj);
            }
        }

    }
}

/**
 * SetTranscodeCallbackKey返回参数结构体
 * @class
 */
class SetTranscodeCallbackKeyResponse extends AbstractModel {

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
 * 实时录制视频拼接参数
 * @class
 */
class Concat extends AbstractModel {

    Enabled: boolean | null
    
    Image: string | null
    
    constructor(){
        super();

        /**
         * 是否开启拼接功能
在开启了视频拼接功能的情况下，实时录制服务会把同一个用户因为暂停导致的多段视频拼接成一个视频
         */
        this.Enabled = null;

        /**
         * 视频拼接时使用的垫片图片下载地址，不填默认用全黑的图片进行视频垫片
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean | null;
        Image: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * DescribeOnlineRecord请求参数结构体
 * @class
 */
class DescribeOnlineRecordRequest extends AbstractModel {

    SdkAppId: number | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 实时录制任务Id
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * StartOnlineRecord返回参数结构体
 * @class
 */
class StartOnlineRecordResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 实时录制的任务Id
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
 * 实时录制白板参数，例如白板宽高等
 * @class
 */
class Whiteboard extends AbstractModel {

    Width: number | null
    
    Height: number | null
    
    InitParam: string | null
    
    constructor(){
        super();

        /**
         * 实时录制结果里白板视频宽，默认为1280
         */
        this.Width = null;

        /**
         * 实时录制结果里白板视频高，默认为960
         */
        this.Height = null;

        /**
         * 白板初始化参数，透传到白板 SDK
         */
        this.InitParam = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Width: number | null;
        Height: number | null;
        InitParam: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.InitParam = 'InitParam' in params ? params.InitParam : null;

    }
}

/**
 * DescribeOnlineRecord返回参数结构体
 * @class
 */
class DescribeOnlineRecordResponse extends AbstractModel {

    FinishReason: string | null
    
    TaskId: string | null
    
    Status: string | null
    
    RoomId: number | null
    
    GroupId: string | null
    
    RecordUserId: string | null
    
    RecordStartTime: number | null
    
    RecordStopTime: number | null
    
    TotalTime: number | null
    
    ExceptionCnt: number | null
    
    OmittedDurations: Array<OmittedDuration> | null
    
    VideoInfos: Array<VideoInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 录制结束原因，
- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止录制
- USER_CALL: 主动调用了停止录制接口
- EXCEPTION: 录制异常结束
         */
        this.FinishReason = null;

        /**
         * 需要查询结果的录制任务Id
         */
        this.TaskId = null;

        /**
         * 录制任务状态
- PREPARED: 表示录制正在准备中（进房/启动录制服务等操作）
- RECORDING: 表示录制已开始
- PAUSED: 表示录制已暂停
- STOPPED: 表示录制已停止，正在处理并上传视频
- FINISHED: 表示视频处理并上传完成，成功生成录制结果
         */
        this.Status = null;

        /**
         * 房间号
         */
        this.RoomId = null;

        /**
         * 白板的群组 Id
         */
        this.GroupId = null;

        /**
         * 录制用户Id
         */
        this.RecordUserId = null;

        /**
         * 实际开始录制时间，Unix 时间戳，单位秒
         */
        this.RecordStartTime = null;

        /**
         * 实际停止录制时间，Unix 时间戳，单位秒
         */
        this.RecordStopTime = null;

        /**
         * 回放视频总时长（单位：毫秒）
         */
        this.TotalTime = null;

        /**
         * 录制过程中出现异常的次数
         */
        this.ExceptionCnt = null;

        /**
         * 拼接视频中被忽略的时间段，只有开启视频拼接功能的时候，这个参数才是有效的
         */
        this.OmittedDurations = null;

        /**
         * 录制视频列表
         */
        this.VideoInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FinishReason: string | null;
        TaskId: string | null;
        Status: string | null;
        RoomId: number | null;
        GroupId: string | null;
        RecordUserId: string | null;
        RecordStartTime: number | null;
        RecordStopTime: number | null;
        TotalTime: number | null;
        ExceptionCnt: number | null;
        OmittedDurations: Array<OmittedDuration> | null;
        VideoInfos: Array<VideoInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordStartTime = 'RecordStartTime' in params ? params.RecordStartTime : null;
        this.RecordStopTime = 'RecordStopTime' in params ? params.RecordStopTime : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.ExceptionCnt = 'ExceptionCnt' in params ? params.ExceptionCnt : null;

        if (params.OmittedDurations) {
            this.OmittedDurations = new Array();
            for (let z in params.OmittedDurations) {
                let obj = new OmittedDuration();
                obj.deserialize(params.OmittedDurations[z]);
                this.OmittedDurations.push(obj);
            }
        }

        if (params.VideoInfos) {
            this.VideoInfos = new Array();
            for (let z in params.VideoInfos) {
                let obj = new VideoInfo();
                obj.deserialize(params.VideoInfos[z]);
                this.VideoInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTranscode请求参数结构体
 * @class
 */
class CreateTranscodeRequest extends AbstractModel {

    SdkAppId: number | null
    
    Url: string | null
    
    IsStaticPPT: boolean | null
    
    MinResolution: string | null
    
    ThumbnailResolution: string | null
    
    CompressFileType: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 需要进行转码文件地址
         */
        this.Url = null;

        /**
         * 是否为静态PPT，默认为False；
如果IsStaticPPT为False，后缀名为.ppt或.pptx的文档会动态转码成HTML5页面，其他格式的文档会静态转码成图片；如果IsStaticPPT为True，所有格式的文档会静态转码成图片；
         */
        this.IsStaticPPT = null;

        /**
         * 转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率

注意分辨率宽高中间为英文字母"xyz"的"x"
         */
        this.MinResolution = null;

        /**
         * 动态PPT转码可以为文件生成该分辨率的缩略图，不传、传空字符串或分辨率格式错误则不生成缩略图，分辨率格式同MinResolution

静态转码这个参数不起作用
         */
        this.ThumbnailResolution = null;

        /**
         * 转码文件压缩格式，不传、传空字符串或不是指定的格式则不生成压缩文件，目前支持如下压缩格式：

zip： 生成`.zip`压缩包
tar.gz： 生成`.tar.gz`压缩包
         */
        this.CompressFileType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        Url: string | null;
        IsStaticPPT: boolean | null;
        MinResolution: string | null;
        ThumbnailResolution: string | null;
        CompressFileType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.IsStaticPPT = 'IsStaticPPT' in params ? params.IsStaticPPT : null;
        this.MinResolution = 'MinResolution' in params ? params.MinResolution : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileType = 'CompressFileType' in params ? params.CompressFileType : null;

    }
}

/**
 * SetOnlineRecordCallbackKey返回参数结构体
 * @class
 */
class SetOnlineRecordCallbackKeyResponse extends AbstractModel {

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
 * PauseOnlineRecord返回参数结构体
 * @class
 */
class PauseOnlineRecordResponse extends AbstractModel {

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
 * SetTranscodeCallbackKey请求参数结构体
 * @class
 */
class SetTranscodeCallbackKeyRequest extends AbstractModel {

    SdkAppId: number | null
    
    CallbackKey: string | null
    
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 设置文档转码回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        CallbackKey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DescribeTranscode请求参数结构体
 * @class
 */
class DescribeTranscodeRequest extends AbstractModel {

    SdkAppId: number | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 文档转码任务的唯一标识Id
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTranscode返回参数结构体
 * @class
 */
class DescribeTranscodeResponse extends AbstractModel {

    Pages: number | null
    
    Progress: number | null
    
    Resolution: string | null
    
    ResultUrl: string | null
    
    Status: string | null
    
    TaskId: string | null
    
    Title: string | null
    
    ThumbnailUrl: string | null
    
    ThumbnailResolution: string | null
    
    CompressFileUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 文档的总页数
         */
        this.Pages = null;

        /**
         * 转码的当前进度,取值范围为0~100
         */
        this.Progress = null;

        /**
         * 文档的分辨率
         */
        this.Resolution = null;

        /**
         * 转码完成后结果的URL
动态转码：PPT转动态H5的链接
静态转码：文档每一页的图片URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/`，那么文档第1页的图片URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推
         */
        this.ResultUrl = null;

        /**
         * 任务的当前状态
- QUEUED: 正在排队等待转换
- PROCESSING: 转换中
- FINISHED: 转换完成
         */
        this.Status = null;

        /**
         * 转码任务的唯一标识Id
         */
        this.TaskId = null;

        /**
         * 文档的文件名
         */
        this.Title = null;

        /**
         * 缩略图URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/ `，那么动态PPT第1页的缩略图URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推

如果发起文档转码请求参数中带了ThumbnailResolution参数，并且转码类型为动态转码，该参数不为空，其余情况该参数为空字符串
         */
        this.ThumbnailUrl = null;

        /**
         * 动态转码缩略图生成分辨率
         */
        this.ThumbnailResolution = null;

        /**
         * 转码压缩文件下载的URL，如果发起文档转码请求参数中`CompressFileType`为空或者不是支持的压缩格式，该参数为空字符串
         */
        this.CompressFileUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Pages: number | null;
        Progress: number | null;
        Resolution: string | null;
        ResultUrl: string | null;
        Status: string | null;
        TaskId: string | null;
        Title: string | null;
        ThumbnailUrl: string | null;
        ThumbnailResolution: string | null;
        CompressFileUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.ThumbnailUrl = 'ThumbnailUrl' in params ? params.ThumbnailUrl : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileUrl = 'CompressFileUrl' in params ? params.CompressFileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetOnlineRecordCallback返回参数结构体
 * @class
 */
class SetOnlineRecordCallbackResponse extends AbstractModel {

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
 * SetOnlineRecordCallbackKey请求参数结构体
 * @class
 */
class SetOnlineRecordCallbackKeyRequest extends AbstractModel {

    SdkAppId: number | null
    
    CallbackKey: string | null
    
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 设置实时录制回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        CallbackKey: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * StopOnlineRecord返回参数结构体
 * @class
 */
class StopOnlineRecordResponse extends AbstractModel {

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
 * DescribeTranscodeCallback请求参数结构体
 * @class
 */
class DescribeTranscodeCallbackRequest extends AbstractModel {

    SdkAppId: number | null
    
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * ResumeOnlineRecord请求参数结构体
 * @class
 */
class ResumeOnlineRecordRequest extends AbstractModel {

    SdkAppId: number | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 恢复录制的实时录制任务 Id
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTranscodeCallback返回参数结构体
 * @class
 */
class DescribeTranscodeCallbackResponse extends AbstractModel {

    Callback: string | null
    
    CallbackKey: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 文档转码回调地址
         */
        this.Callback = null;

        /**
         * 文档转码回调鉴权密钥
         */
        this.CallbackKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Callback: string | null;
        CallbackKey: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTranscodeCallback请求参数结构体
 * @class
 */
class SetTranscodeCallbackRequest extends AbstractModel {

    SdkAppId: number | null
    
    Callback: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 文档转码进度回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。
回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        Callback: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * SetOnlineRecordCallback请求参数结构体
 * @class
 */
class SetOnlineRecordCallbackRequest extends AbstractModel {

    SdkAppId: number | null
    
    Callback: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 实时录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        Callback: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * 混流配置
 * @class
 */
class MixStream extends AbstractModel {

    Enabled: boolean | null
    
    DisableAudio: boolean | null
    
    ModelId: number | null
    
    TeacherId: string | null
    
    Custom: CustomLayout | null
    
    constructor(){
        super();

        /**
         * 是否开启混流
         */
        this.Enabled = null;

        /**
         * 是否禁用音频混流
         */
        this.DisableAudio = null;

        /**
         * 内置混流布局模板ID, 取值 [1, 2], 区别见内置混流布局模板样式示例说明
在没有填Custom字段时候，ModelId是必填的
         */
        this.ModelId = null;

        /**
         * 老师用户ID
此字段只有在ModelId填了的情况下生效
填写TeacherId的效果是把指定为TeacherId的用户视频流显示在内置模板的第一个小画面中
         */
        this.TeacherId = null;

        /**
         * 自定义混流布局参数
当此字段存在时，ModelId 及 TeacherId 字段将被忽略
         */
        this.Custom = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Enabled: boolean | null;
        DisableAudio: boolean | null;
        ModelId: number | null;
        TeacherId: string | null;
        Custom: CustomLayout | null;
    }): void {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

        if (params.Custom) {
            let obj = new CustomLayout();
            obj.deserialize(params.Custom)
            this.Custom = obj;
        }

    }
}

/**
 * 拼接视频中被忽略的时间段
 * @class
 */
class OmittedDuration extends AbstractModel {

    VideoTime: number | null
    
    PauseTime: number | null
    
    ResumeTime: number | null
    
    constructor(){
        super();

        /**
         * 录制暂停时间戳对应的视频播放时间(单位: 毫秒)
         */
        this.VideoTime = null;

        /**
         * 录制暂停时间戳(单位: 毫秒)
         */
        this.PauseTime = null;

        /**
         * 录制恢复时间戳(单位: 毫秒)
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VideoTime: number | null;
        PauseTime: number | null;
        ResumeTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VideoTime = 'VideoTime' in params ? params.VideoTime : null;
        this.PauseTime = 'PauseTime' in params ? params.PauseTime : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;

    }
}

/**
 * PauseOnlineRecord请求参数结构体
 * @class
 */
class PauseOnlineRecordRequest extends AbstractModel {

    SdkAppId: number | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         */
        this.SdkAppId = null;

        /**
         * 实时录制任务 Id
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SdkAppId: number | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

export const Models = {
    Canvas: Canvas,
    LayoutParams: LayoutParams,
    ResumeOnlineRecordResponse: ResumeOnlineRecordResponse,
    StartOnlineRecordRequest: StartOnlineRecordRequest,
    DescribeOnlineRecordCallbackRequest: DescribeOnlineRecordCallbackRequest,
    DescribeOnlineRecordCallbackResponse: DescribeOnlineRecordCallbackResponse,
    SetTranscodeCallbackResponse: SetTranscodeCallbackResponse,
    StopOnlineRecordRequest: StopOnlineRecordRequest,
    StreamLayout: StreamLayout,
    CreateTranscodeResponse: CreateTranscodeResponse,
    VideoInfo: VideoInfo,
    CustomLayout: CustomLayout,
    SetTranscodeCallbackKeyResponse: SetTranscodeCallbackKeyResponse,
    Concat: Concat,
    DescribeOnlineRecordRequest: DescribeOnlineRecordRequest,
    StartOnlineRecordResponse: StartOnlineRecordResponse,
    Whiteboard: Whiteboard,
    DescribeOnlineRecordResponse: DescribeOnlineRecordResponse,
    CreateTranscodeRequest: CreateTranscodeRequest,
    SetOnlineRecordCallbackKeyResponse: SetOnlineRecordCallbackKeyResponse,
    PauseOnlineRecordResponse: PauseOnlineRecordResponse,
    SetTranscodeCallbackKeyRequest: SetTranscodeCallbackKeyRequest,
    DescribeTranscodeRequest: DescribeTranscodeRequest,
    DescribeTranscodeResponse: DescribeTranscodeResponse,
    SetOnlineRecordCallbackResponse: SetOnlineRecordCallbackResponse,
    SetOnlineRecordCallbackKeyRequest: SetOnlineRecordCallbackKeyRequest,
    StopOnlineRecordResponse: StopOnlineRecordResponse,
    DescribeTranscodeCallbackRequest: DescribeTranscodeCallbackRequest,
    ResumeOnlineRecordRequest: ResumeOnlineRecordRequest,
    DescribeTranscodeCallbackResponse: DescribeTranscodeCallbackResponse,
    SetTranscodeCallbackRequest: SetTranscodeCallbackRequest,
    SetOnlineRecordCallbackRequest: SetOnlineRecordCallbackRequest,
    MixStream: MixStream,
    OmittedDuration: OmittedDuration,
    PauseOnlineRecordRequest: PauseOnlineRecordRequest,

}
