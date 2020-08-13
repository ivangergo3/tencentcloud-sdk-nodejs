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
 * 图片段信息
 * @class
 */
class ImageSegments extends AbstractModel {

    Result: ImageResult | null
    
    OffsetTime: string | null
    
    constructor(){
        super();

        /**
         * 画面截帧结果详情
         */
        this.Result = null;

        /**
         * 截帧时间。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
         */
        this.OffsetTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Result: ImageResult | null;
        OffsetTime: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Result) {
            let obj = new ImageResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;

    }
}

/**
 * 图片输出结果的子结果
 * @class
 */
class ImageResultResult extends AbstractModel {

    Scene: string | null
    
    HitFlag: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    SubLabel: string | null
    
    Score: number | null
    
    Names: Array<string> | null
    
    Text: string | null
    
    Details: Array<ImageResultsResultDetail> | null
    
    constructor(){
        super();

        /**
         * 场景
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Scene = null;

        /**
         * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HitFlag = null;

        /**
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Suggestion = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Label = null;

        /**
         * 子标签
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubLabel = null;

        /**
         * 分数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Score = null;

        /**
         * 如果命中场景为涉政，则该数据为人物姓名列表，否则null
         */
        this.Names = null;

        /**
         * 图片OCR文本
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Text = null;

        /**
         * 其他详情
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Scene: string | null;
        HitFlag: number | null;
        Suggestion: string | null;
        Label: string | null;
        SubLabel: string | null;
        Score: number | null;
        Names: Array<string> | null;
        Text: string | null;
        Details: Array<ImageResultsResultDetail> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ImageResultsResultDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 *  数据存储信息
 * @class
 */
class StorageInfo extends AbstractModel {

    Type: string | null
    
    Url: string | null
    
    BucketInfo: BucketInfo | null
    
    constructor(){
        super();

        /**
         * 类型 可选：
URL 资源链接类型
COS 腾讯云对象存储类型
         */
        this.Type = null;

        /**
         * 资源链接
         */
        this.Url = null;

        /**
         * 腾讯云存储桶信息
         */
        this.BucketInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Url: string | null;
        BucketInfo: BucketInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.BucketInfo) {
            let obj = new BucketInfo();
            obj.deserialize(params.BucketInfo)
            this.BucketInfo = obj;
        }

    }
}

/**
 * 文件桶信息
参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352
 * @class
 */
class BucketInfo extends AbstractModel {

    Bucket: string | null
    
    Region: string | null
    
    Object: string | null
    
    constructor(){
        super();

        /**
         * 腾讯云对象存储，存储桶名称
         */
        this.Bucket = null;

        /**
         * 地域
         */
        this.Region = null;

        /**
         * 对象Key
         */
        this.Object = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Bucket: string | null;
        Region: string | null;
        Object: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Object = 'Object' in params ? params.Object : null;

    }
}

/**
 * CreateAudioModerationTask返回参数结构体
 * @class
 */
class CreateAudioModerationTaskResponse extends AbstractModel {

    Results: Array<TaskResult> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务创建结果
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Results: Array<TaskResult> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new TaskResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBizConfig请求参数结构体
 * @class
 */
class CreateBizConfigRequest extends AbstractModel {

    BizType: string | null
    
    MediaModeration: MediaModerationConfig | null
    
    BizName: string | null
    
    ModerationCategories: Array<string> | null
    
    constructor(){
        super();

        /**
         * 业务ID
         */
        this.BizType = null;

        /**
         * 审核分类信息
         */
        this.MediaModeration = null;

        /**
         * 页面名称
         */
        this.BizName = null;

        /**
         * 审核内容，可选：Polity (政治); Porn (色情); Illegal(违法);Abuse (谩骂); Terror (暴恐); Ad (广告);
         */
        this.ModerationCategories = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BizType: string | null;
        MediaModeration: MediaModerationConfig | null;
        BizName: string | null;
        ModerationCategories: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;

        if (params.MediaModeration) {
            let obj = new MediaModerationConfig();
            obj.deserialize(params.MediaModeration)
            this.MediaModeration = obj;
        }
        this.BizName = 'BizName' in params ? params.BizName : null;
        this.ModerationCategories = 'ModerationCategories' in params ? params.ModerationCategories : null;

    }
}

/**
 * DescribeBizConfig请求参数结构体
 * @class
 */
class DescribeBizConfigRequest extends AbstractModel {

    BizType: string | null
    
    constructor(){
        super();

        /**
         * 审核业务类类型
         */
        this.BizType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BizType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;

    }
}

/**
 * 创建任务时的返回结果
 * @class
 */
class TaskResult extends AbstractModel {

    DataId: string | null
    
    TaskId: string | null
    
    Code: string | null
    
    Message: string | null
    
    constructor(){
        super();

        /**
         * 请求时传入的DataId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DataId = null;

        /**
         * TaskId，任务ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TaskId = null;

        /**
         * 错误码。如果code为OK，则表示创建成功，其他则参考公共错误码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Code = null;

        /**
         * 如果错误，该字段表示错误详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DataId: string | null;
        TaskId: string | null;
        Code: string | null;
        Message: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends AbstractModel {

    TaskId: string | null
    
    DataId: string | null
    
    BizType: string | null
    
    Name: string | null
    
    Status: string | null
    
    Type: string | null
    
    Suggestion: string | null
    
    Labels: Array<TaskLabel> | null
    
    MediaInfo: MediaInfo | null
    
    InputInfo: InputInfo | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    TryInSeconds: number | null
    
    AudioSegments: Array<AudioSegments> | null
    
    ImageSegments: Array<ImageSegments> | null
    
    AudioText: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TaskId = null;

        /**
         * 审核时传入的数据Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DataId = null;

        /**
         * 业务类型，用于调用识别策略模板；
（暂未发布功能，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BizType = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;

        /**
         * 查询内容审核任务的状态，可选值：
FINISH 已完成
PENDING 等待中
RUNNING 进行中
ERROR 出错
CANCELLED 已取消
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;

        /**
         * 任务类型：可选AUDIO（点播音频），LIVE_AUDIO（直播音频）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Type = null;

        /**
         * 智能审核服务对于内容违规类型的等级，可选值：
Pass 建议通过；
Reveiw 建议复审；
Block 建议屏蔽；
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Suggestion = null;

        /**
         * 智能审核服务对于内容违规类型的判断，详见返回值列表
如：Label：Porn（色情）；
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Labels = null;

        /**
         * 传入媒体的解码信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MediaInfo = null;

        /**
         * 审核任务的信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InputInfo = null;

        /**
         * 审核任务的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreatedAt = null;

        /**
         * 审核任务的更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UpdatedAt = null;

        /**
         * 在N秒后重试
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TryInSeconds = null;

        /**
         * 视频/音频审核中的音频结果
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AudioSegments = null;

        /**
         * 视频审核中的图片结果
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageSegments = null;

        /**
         * 音频识别总文本
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AudioText = null;

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
        DataId: string | null;
        BizType: string | null;
        Name: string | null;
        Status: string | null;
        Type: string | null;
        Suggestion: string | null;
        Labels: Array<TaskLabel> | null;
        MediaInfo: MediaInfo | null;
        InputInfo: InputInfo | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        TryInSeconds: number | null;
        AudioSegments: Array<AudioSegments> | null;
        ImageSegments: Array<ImageSegments> | null;
        AudioText: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new TaskLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.MediaInfo) {
            let obj = new MediaInfo();
            obj.deserialize(params.MediaInfo)
            this.MediaInfo = obj;
        }

        if (params.InputInfo) {
            let obj = new InputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.TryInSeconds = 'TryInSeconds' in params ? params.TryInSeconds : null;

        if (params.AudioSegments) {
            this.AudioSegments = new Array();
            for (let z in params.AudioSegments) {
                let obj = new AudioSegments();
                obj.deserialize(params.AudioSegments[z]);
                this.AudioSegments.push(obj);
            }
        }

        if (params.ImageSegments) {
            this.ImageSegments = new Array();
            for (let z in params.ImageSegments) {
                let obj = new ImageSegments();
                obj.deserialize(params.ImageSegments[z]);
                this.ImageSegments.push(obj);
            }
        }
        this.AudioText = 'AudioText' in params ? params.AudioText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAudioModerationTask请求参数结构体
 * @class
 */
class CreateAudioModerationTaskRequest extends AbstractModel {

    BizType: string | null
    
    Type: string | null
    
    Seed: string | null
    
    CallbackUrl: string | null
    
    Tasks: Array<TaskInput> | null
    
    constructor(){
        super();

        /**
         * 业务类型, 定义 模版策略，输出存储配置。如果没有BizType，可以先参考 【创建业务配置】接口进行创建
         */
        this.BizType = null;

        /**
         * 异步检测结果回调通知接收URL。支持HTTP和HTTPS
         */
        this.Type = null;

        /**
         * 回调签名key，具体可以查看签名文档。
         */
        this.Seed = null;

        /**
         * 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口
         */
        this.CallbackUrl = null;

        /**
         * 输入的任务信息，最多可以同时创建10个任务
         */
        this.Tasks = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BizType: string | null;
        Type: string | null;
        Seed: string | null;
        CallbackUrl: string | null;
        Tasks: Array<TaskInput> | null;
    }): void {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Seed = 'Seed' in params ? params.Seed : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInput();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }

    }
}

/**
 * CreateBizConfig返回参数结构体
 * @class
 */
class CreateBizConfigResponse extends AbstractModel {

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
 * 音视频任务结构
 * @class
 */
class TaskInput extends AbstractModel {

    DataId: string | null
    
    Name: string | null
    
    Input: StorageInfo | null
    
    constructor(){
        super();

        /**
         * 数据ID
         */
        this.DataId = null;

        /**
         * 任务名
         */
        this.Name = null;

        /**
         * 任务输入
         */
        this.Input = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DataId: string | null;
        Name: string | null;
        Input: StorageInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Input) {
            let obj = new StorageInfo();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

    }
}

/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends AbstractModel {

    TaskId: string | null
    
    ShowAllSegments: boolean | null
    
    constructor(){
        super();

        /**
         * 任务ID，创建任务后返回的TaskId字段
         */
        this.TaskId = null;

        /**
         * 是否展示所有分片，默认只展示命中规则的分片
         */
        this.ShowAllSegments = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        ShowAllSegments: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ShowAllSegments = 'ShowAllSegments' in params ? params.ShowAllSegments : null;

    }
}

/**
 * 任务输出标签
 * @class
 */
class TaskLabel extends AbstractModel {

    Label: string | null
    
    Suggestion: string | null
    
    Score: number | null
    
    constructor(){
        super();

        /**
         * 命中的标签
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Label = null;

        /**
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Suggestion = null;

        /**
         * 得分，分数是 0 ～ 100
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Label: string | null;
        Suggestion: string | null;
        Score: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 具体场景下的图片识别结果
 * @class
 */
class ImageResultsResultDetail extends AbstractModel {

    Location: Array<ImageResultsResultDetailLocation> | null
    
    Name: string | null
    
    Text: string | null
    
    Label: string | null
    
    LibId: string | null
    
    LibName: string | null
    
    Keywords: Array<string> | null
    
    Suggestion: string | null
    
    Score: number | null
    
    SubLabelCode: string | null
    
    constructor(){
        super();

        /**
         * 位置信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Location = null;

        /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;

        /**
         * OCR识别文本
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Text = null;

        /**
         * 标签
         */
        this.Label = null;

        /**
         * 库ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LibId = null;

        /**
         * 库名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LibName = null;

        /**
         * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Keywords = null;

        /**
         * 建议
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Suggestion = null;

        /**
         * 得分
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Score = null;

        /**
         * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubLabelCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Location: Array<ImageResultsResultDetailLocation> | null;
        Name: string | null;
        Text: string | null;
        Label: string | null;
        LibId: string | null;
        LibName: string | null;
        Keywords: Array<string> | null;
        Suggestion: string | null;
        Score: number | null;
        SubLabelCode: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Location) {
            this.Location = new Array();
            for (let z in params.Location) {
                let obj = new ImageResultsResultDetailLocation();
                obj.deserialize(params.Location[z]);
                this.Location.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * 输入信息详情
 * @class
 */
class InputInfo extends AbstractModel {

    Type: string | null
    
    Url: string | null
    
    BucketInfo: BucketInfo | null
    
    constructor(){
        super();

        /**
         * 传入的类型可选：URL，COS
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Type = null;

        /**
         * Url地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Url = null;

        /**
         * 桶信息。当输入当时COS时，该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BucketInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Url: string | null;
        BucketInfo: BucketInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.BucketInfo) {
            let obj = new BucketInfo();
            obj.deserialize(params.BucketInfo)
            this.BucketInfo = obj;
        }

    }
}

/**
 * 音频小语种检测结果
 * @class
 */
class AudioResultDetailLanguageResult extends AbstractModel {

    Label: string | null
    
    Score: number | null
    
    StartTime: number | null
    
    EndTime: number | null
    
    SubLabelCode: string | null
    
    constructor(){
        super();

        /**
         * 语种
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Label = null;

        /**
         * 得分
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Score = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StartTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EndTime = null;

        /**
         * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubLabelCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Label: string | null;
        Score: number | null;
        StartTime: number | null;
        EndTime: number | null;
        SubLabelCode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * Cos FileOutput 
 * @class
 */
class FileOutput extends AbstractModel {

    Bucket: string | null
    
    Region: string | null
    
    ObjectPrefix: string | null
    
    constructor(){
        super();

        /**
         * 存储的Bucket
         */
        this.Bucket = null;

        /**
         * Cos Region
         */
        this.Region = null;

        /**
         * 对象前缀
         */
        this.ObjectPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Bucket: string | null;
        Region: string | null;
        ObjectPrefix: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ObjectPrefix = 'ObjectPrefix' in params ? params.ObjectPrefix : null;

    }
}

/**
 * 音频ASR文本审核结果
 * @class
 */
class AudioResultDetailTextResult extends AbstractModel {

    Label: string | null
    
    Keywords: Array<string> | null
    
    LibId: string | null
    
    LibName: string | null
    
    Score: number | null
    
    Suggestion: string | null
    
    LibType: number | null
    
    constructor(){
        super();

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Label = null;

        /**
         * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Keywords = null;

        /**
         * 命中的LibId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LibId = null;

        /**
         * 命中的LibName
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LibName = null;

        /**
         * 得分
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Score = null;

        /**
         * 审核建议
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Suggestion = null;

        /**
         * 词库类型 1 黑白库 2 自定义库
         */
        this.LibType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Label: string | null;
        Keywords: Array<string> | null;
        LibId: string | null;
        LibName: string | null;
        Score: number | null;
        Suggestion: string | null;
        LibType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.LibType = 'LibType' in params ? params.LibType : null;

    }
}

/**
 * 音频输出参数
 * @class
 */
class AudioResult extends AbstractModel {

    HitFlag: number | null
    
    Label: string | null
    
    Suggestion: string | null
    
    Score: number | null
    
    Text: string | null
    
    Url: string | null
    
    Duration: string | null
    
    Extra: string | null
    
    TextResults: Array<AudioResultDetailTextResult> | null
    
    MoanResults: Array<AudioResultDetailMoanResult> | null
    
    LanguageResults: Array<AudioResultDetailLanguageResult> | null
    
    constructor(){
        super();

        /**
         * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HitFlag = null;

        /**
         * 命中的标签
Porn 色情
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
Moan 呻吟
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Label = null;

        /**
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Suggestion = null;

        /**
         * 得分，0-100
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Score = null;

        /**
         * 音频ASR文本
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Text = null;

        /**
         * 音频片段存储URL，有效期为1天
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Url = null;

        /**
         * 音频时长
         */
        this.Duration = null;

        /**
         * 拓展字段
         */
        this.Extra = null;

        /**
         * 文本审核结果
         */
        this.TextResults = null;

        /**
         * 音频呻吟审核结果
         */
        this.MoanResults = null;

        /**
         * 音频语种检测结果
         */
        this.LanguageResults = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HitFlag: number | null;
        Label: string | null;
        Suggestion: string | null;
        Score: number | null;
        Text: string | null;
        Url: string | null;
        Duration: string | null;
        Extra: string | null;
        TextResults: Array<AudioResultDetailTextResult> | null;
        MoanResults: Array<AudioResultDetailMoanResult> | null;
        LanguageResults: Array<AudioResultDetailLanguageResult> | null;
    }): void {
        if (!params) {
            return;
        }
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.TextResults) {
            this.TextResults = new Array();
            for (let z in params.TextResults) {
                let obj = new AudioResultDetailTextResult();
                obj.deserialize(params.TextResults[z]);
                this.TextResults.push(obj);
            }
        }

        if (params.MoanResults) {
            this.MoanResults = new Array();
            for (let z in params.MoanResults) {
                let obj = new AudioResultDetailMoanResult();
                obj.deserialize(params.MoanResults[z]);
                this.MoanResults.push(obj);
            }
        }

        if (params.LanguageResults) {
            this.LanguageResults = new Array();
            for (let z in params.LanguageResults) {
                let obj = new AudioResultDetailLanguageResult();
                obj.deserialize(params.LanguageResults[z]);
                this.LanguageResults.push(obj);
            }
        }

    }
}

/**
 * 音频呻吟审核结果
 * @class
 */
class AudioResultDetailMoanResult extends AbstractModel {

    Label: string | null
    
    Score: number | null
    
    StartTime: number | null
    
    EndTime: number | null
    
    SubLabelCode: string | null
    
    constructor(){
        super();

        /**
         * 固定为Moan
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Label = null;

        /**
         * 分数
         */
        this.Score = null;

        /**
         * 开始时间
         */
        this.StartTime = null;

        /**
         * 结束时间
         */
        this.EndTime = null;

        /**
         * 子标签码
         */
        this.SubLabelCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Label: string | null;
        Score: number | null;
        StartTime: number | null;
        EndTime: number | null;
        SubLabelCode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubLabelCode = 'SubLabelCode' in params ? params.SubLabelCode : null;

    }
}

/**
 * DescribeBizConfig返回参数结构体
 * @class
 */
class DescribeBizConfigResponse extends AbstractModel {

    BizType: string | null
    
    BizName: string | null
    
    ModerationCategories: Array<string> | null
    
    MediaModeration: MediaModerationConfig | null
    
    CreatedAt: string | null
    
    UpdatedAt: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 业务类型
         */
        this.BizType = null;

        /**
         * 业务名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BizName = null;

        /**
         * 审核范围
         */
        this.ModerationCategories = null;

        /**
         * 多媒体审核配置
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MediaModeration = null;

        /**
         * 创建时间
         */
        this.CreatedAt = null;

        /**
         * 更新时间
         */
        this.UpdatedAt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BizType: string | null;
        BizName: string | null;
        ModerationCategories: Array<string> | null;
        MediaModeration: MediaModerationConfig | null;
        CreatedAt: string | null;
        UpdatedAt: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.BizName = 'BizName' in params ? params.BizName : null;
        this.ModerationCategories = 'ModerationCategories' in params ? params.ModerationCategories : null;

        if (params.MediaModeration) {
            let obj = new MediaModerationConfig();
            obj.deserialize(params.MediaModeration)
            this.MediaModeration = obj;
        }
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 媒体类型
 * @class
 */
class MediaInfo extends AbstractModel {

    Codecs: string | null
    
    Duration: number | null
    
    Width: number | null
    
    Height: number | null
    
    constructor(){
        super();

        /**
         * 编码格式
         */
        this.Codecs = null;

        /**
         * 流检测时分片时长
注意：此字段可能返回 0，表示取不到有效值。
         */
        this.Duration = null;

        /**
         * 宽，单位为像素
         */
        this.Width = null;

        /**
         * 高，单位为像素
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Codecs: string | null;
        Duration: number | null;
        Width: number | null;
        Height: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Codecs = 'Codecs' in params ? params.Codecs : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 媒体审核配置
 * @class
 */
class MediaModerationConfig extends AbstractModel {

    AudioFrequency: number | null
    
    ImageFrequency: number | null
    
    CallbackUrl: string | null
    
    SegmentOutput: FileOutput | null
    
    UseOCR: boolean | null
    
    UseAudio: boolean | null
    
    constructor(){
        super();

        /**
         * 音频截帧频率。默认一分钟
         */
        this.AudioFrequency = null;

        /**
         * 图片取帧频率, 单位（秒/帧），默认 5， 可选 1 ～ 300
         */
        this.ImageFrequency = null;

        /**
         * 异步回调地址。
         */
        this.CallbackUrl = null;

        /**
         * 临时文件存储位置
         */
        this.SegmentOutput = null;

        /**
         * 是否使用OCR，默认为true
         */
        this.UseOCR = null;

        /**
         * 是否使用音频。（音频场景下，该值永远为true）
         */
        this.UseAudio = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AudioFrequency: number | null;
        ImageFrequency: number | null;
        CallbackUrl: string | null;
        SegmentOutput: FileOutput | null;
        UseOCR: boolean | null;
        UseAudio: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.AudioFrequency = 'AudioFrequency' in params ? params.AudioFrequency : null;
        this.ImageFrequency = 'ImageFrequency' in params ? params.ImageFrequency : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;

        if (params.SegmentOutput) {
            let obj = new FileOutput();
            obj.deserialize(params.SegmentOutput)
            this.SegmentOutput = obj;
        }
        this.UseOCR = 'UseOCR' in params ? params.UseOCR : null;
        this.UseAudio = 'UseAudio' in params ? params.UseAudio : null;

    }
}

/**
 * 声音段信息
 * @class
 */
class AudioSegments extends AbstractModel {

    OffsetTime: string | null
    
    Result: AudioResult | null
    
    constructor(){
        super();

        /**
         * 截帧时间。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OffsetTime = null;

        /**
         * 结果集
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OffsetTime: string | null;
        Result: AudioResult | null;
    }): void {
        if (!params) {
            return;
        }
        this.OffsetTime = 'OffsetTime' in params ? params.OffsetTime : null;

        if (params.Result) {
            let obj = new AudioResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

    }
}

/**
 * 图片详情位置信息
 * @class
 */
class ImageResultsResultDetailLocation extends AbstractModel {

    X: number | null
    
    Y: number | null
    
    Width: number | null
    
    Height: number | null
    
    Rotate: number | null
    
    constructor(){
        super();

        /**
         * x坐标
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.X = null;

        /**
         * y坐标
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Y = null;

        /**
         * 宽度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Width = null;

        /**
         * 高度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Height = null;

        /**
         * 旋转角度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Rotate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        X: number | null;
        Y: number | null;
        Width: number | null;
        Height: number | null;
        Rotate: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

    }
}

/**
 * Result结果详情
 * @class
 */
class ImageResult extends AbstractModel {

    HitFlag: number | null
    
    Label: string | null
    
    Suggestion: string | null
    
    Score: number | null
    
    Results: Array<ImageResultResult> | null
    
    Url: string | null
    
    Extra: string | null
    
    constructor(){
        super();

        /**
         * 违规标志
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HitFlag = null;

        /**
         * 命中的标签
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Label = null;

        /**
         * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
         */
        this.Suggestion = null;

        /**
         * 得分
         */
        this.Score = null;

        /**
         * 画面截帧图片结果集
         */
        this.Results = null;

        /**
         * 图片URL地址
         */
        this.Url = null;

        /**
         * 附加字段
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HitFlag: number | null;
        Label: string | null;
        Suggestion: string | null;
        Score: number | null;
        Results: Array<ImageResultResult> | null;
        Url: string | null;
        Extra: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ImageResultResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

export const Models = {
    ImageSegments: ImageSegments,
    ImageResultResult: ImageResultResult,
    StorageInfo: StorageInfo,
    BucketInfo: BucketInfo,
    CreateAudioModerationTaskResponse: CreateAudioModerationTaskResponse,
    CreateBizConfigRequest: CreateBizConfigRequest,
    DescribeBizConfigRequest: DescribeBizConfigRequest,
    TaskResult: TaskResult,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    CreateAudioModerationTaskRequest: CreateAudioModerationTaskRequest,
    CreateBizConfigResponse: CreateBizConfigResponse,
    TaskInput: TaskInput,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    TaskLabel: TaskLabel,
    ImageResultsResultDetail: ImageResultsResultDetail,
    InputInfo: InputInfo,
    AudioResultDetailLanguageResult: AudioResultDetailLanguageResult,
    FileOutput: FileOutput,
    AudioResultDetailTextResult: AudioResultDetailTextResult,
    AudioResult: AudioResult,
    AudioResultDetailMoanResult: AudioResultDetailMoanResult,
    DescribeBizConfigResponse: DescribeBizConfigResponse,
    MediaInfo: MediaInfo,
    MediaModerationConfig: MediaModerationConfig,
    AudioSegments: AudioSegments,
    ImageResultsResultDetailLocation: ImageResultsResultDetailLocation,
    ImageResult: ImageResult,

}
