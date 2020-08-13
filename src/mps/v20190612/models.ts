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
 * ModifySnapshotByTimeOffsetTemplate返回参数结构体
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateResponse extends AbstractModel {

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
 * ModifySampleSnapshotTemplate返回参数结构体
 * @class
 */
class ModifySampleSnapshotTemplateResponse extends AbstractModel {

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
 * ModifyWatermarkTemplate请求参数结构体
 * @class
 */
class ModifyWatermarkTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Comment: string | null
    
    CoordinateOrigin: string | null
    
    XPos: string | null
    
    YPos: string | null
    
    ImageTemplate: ImageWatermarkInputForUpdate | null
    
    TextTemplate: TextWatermarkTemplateInputForUpdate | null
    
    SvgTemplate: SvgWatermarkInputForUpdate | null
    
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         */
        this.Definition = null;

        /**
         * 水印模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 原点位置，可选值：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
         */
        this.CoordinateOrigin = null;

        /**
         * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
         */
        this.XPos = null;

        /**
         * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
         */
        this.YPos = null;

        /**
         * 图片水印模板，该字段仅对图片水印模板有效。
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，该字段仅对文字水印模板有效。
         */
        this.TextTemplate = null;

        /**
         * SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。
         */
        this.SvgTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        CoordinateOrigin: string | null;
        XPos: string | null;
        YPos: string | null;
        ImageTemplate: ImageWatermarkInputForUpdate | null;
        TextTemplate: TextWatermarkTemplateInputForUpdate | null;
        SvgTemplate: SvgWatermarkInputForUpdate | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInputForUpdate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInputForUpdate();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInputForUpdate();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }

    }
}

/**
 * 语音全文识别片段。
 * @class
 */
class AiRecognitionTaskAsrFullTextSegmentItem extends AbstractModel {

    Confidence: number | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Text: string | null
    
    constructor(){
        super();

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 识别片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 识别文本。
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Text: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 用户自定义文本审核任务控制参数。
 * @class
 */
class UserDefineOcrTextReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 用户自定文本审核任务开关，可选值：
<li>ON：开启自定义文本审核任务；</li>
<li>OFF：关闭自定义文本审核任务。</li>
         */
        this.Switch = null;

        /**
         * 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 智能分类任务输入类型
 * @class
 */
class AiAnalysisTaskClassificationInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频智能分类模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * SVG水印模板输入参数
 * @class
 */
class SvgWatermarkInput extends AbstractModel {

    Width: string | null
    
    Height: string | null
    
    constructor(){
        super();

        /**
         * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
<li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 W%。</li>
默认值为 10W%。
         */
        this.Width = null;

        /**
         * 水印的高度，支持 px，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
<li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 H%。</li>
默认值为 0px。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Width: string | null;
        Height: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 工作流信息详情。
 * @class
 */
class WorkflowInfo extends AbstractModel {

    WorkflowId: number | null
    
    WorkflowName: string | null
    
    Status: string | null
    
    Trigger: WorkflowTrigger | null
    
    OutputStorage: TaskOutputStorage | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    TaskNotifyConfig: TaskNotifyConfig | null
    
    TaskPriority: number | null
    
    OutputDir: string | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 工作流 ID。
         */
        this.WorkflowId = null;

        /**
         * 工作流名称。
         */
        this.WorkflowName = null;

        /**
         * 工作流状态，取值范围：
<li>Enabled：已启用，</li>
<li>Disabled：已禁用。</li>
         */
        this.Status = null;

        /**
         * 工作流绑定的输入规则，当上传视频命中该规则到该对象时即触发工作流。
         */
        this.Trigger = null;

        /**
         * 视频处理的文件输出存储位置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OutputStorage = null;

        /**
         * 视频处理类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiRecognitionTask = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         */
        this.TaskPriority = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。
         */
        this.OutputDir = null;

        /**
         * 工作流创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 工作流最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowId: number | null;
        WorkflowName: string | null;
        Status: string | null;
        Trigger: WorkflowTrigger | null;
        OutputStorage: TaskOutputStorage | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        TaskNotifyConfig: TaskNotifyConfig | null;
        TaskPriority: number | null;
        OutputDir: string | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateTranscodeTemplate请求参数结构体
 * @class
 */
class CreateTranscodeTemplateRequest extends AbstractModel {

    Container: string | null
    
    Name: string | null
    
    Comment: string | null
    
    RemoveVideo: number | null
    
    RemoveAudio: number | null
    
    VideoTemplate: VideoTemplateInfo | null
    
    AudioTemplate: AudioTemplateInfo | null
    
    TEHDConfig: TEHDConfig | null
    
    constructor(){
        super();

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
         */
        this.Container = null;

        /**
         * 转码模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
默认值：0。
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
默认值：0。
         */
        this.RemoveAudio = null;

        /**
         * 视频流配置参数，当 RemoveVideo 为 0，该字段必填。
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数，当 RemoveAudio 为 0，该字段必填。
         */
        this.AudioTemplate = null;

        /**
         * 极速高清转码参数。
         */
        this.TEHDConfig = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Container: string | null;
        Name: string | null;
        Comment: string | null;
        RemoveVideo: number | null;
        RemoveAudio: number | null;
        VideoTemplate: VideoTemplateInfo | null;
        AudioTemplate: AudioTemplateInfo | null;
        TEHDConfig: TEHDConfig | null;
    }): void {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

    }
}

/**
 * ProcessLiveStream返回参数结构体
 * @class
 */
class ProcessLiveStreamResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID
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
 * DescribeAnimatedGraphicsTemplates请求参数结构体
 * @class
 */
class DescribeAnimatedGraphicsTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    Type: string | null
    
    constructor(){
        super();

        /**
         * 转动图模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 内容审核 Asr 文字鉴任违禁务结果类型
 * @class
 */
class AiReviewTaskProhibitedAsrResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewProhibitedAsrTaskInput | null
    
    Output: AiReviewProhibitedAsrTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核 Asr 文字鉴违禁任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewProhibitedAsrTaskInput | null;
        Output: AiReviewProhibitedAsrTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 转自适应码流模板详情
 * @class
 */
class AdaptiveDynamicStreamingTemplate extends AbstractModel {

    Definition: number | null
    
    Type: string | null
    
    Name: string | null
    
    Comment: string | null
    
    Format: string | null
    
    StreamInfos: Array<AdaptiveStreamTemplate> | null
    
    DisableHigherVideoBitrate: number | null
    
    DisableHigherVideoResolution: number | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 转自适应码流模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 转自适应码流模板名称。
         */
        this.Name = null;

        /**
         * 转自适应码流模板描述信息。
         */
        this.Comment = null;

        /**
         * 转自适应码流格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
         */
        this.Format = null;

        /**
         * 转自适应码流输入流参数信息，最多输入10路流。
         */
        this.StreamInfos = null;

        /**
         * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         */
        this.DisableHigherVideoResolution = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Type: string | null;
        Name: string | null;
        Comment: string | null;
        Format: string | null;
        StreamInfos: Array<AdaptiveStreamTemplate> | null;
        DisableHigherVideoBitrate: number | null;
        DisableHigherVideoResolution: number | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate返回参数结构体
 * @class
 */
class DeleteAnimatedGraphicsTemplateResponse extends AbstractModel {

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
 * 内容审核 Ocr 文字鉴任违禁务结果类型
 * @class
 */
class AiReviewTaskProhibitedOcrResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewProhibitedOcrTaskInput | null
    
    Output: AiReviewProhibitedOcrTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字鉴违禁任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewProhibitedOcrTaskInput | null;
        Output: AiReviewProhibitedOcrTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 语音全文识别结果。
 * @class
 */
class AiRecognitionTaskAsrFullTextResultOutput extends AbstractModel {

    SegmentSet: Array<AiRecognitionTaskAsrFullTextSegmentItem> | null
    
    SubtitlePath: string | null
    
    OutputStorage: TaskOutputStorage | null
    
    constructor(){
        super();

        /**
         * 语音全文识别片段列表。
         */
        this.SegmentSet = null;

        /**
         * 字幕文件地址。
         */
        this.SubtitlePath = null;

        /**
         * 字幕文件存储位置。
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SegmentSet: Array<AiRecognitionTaskAsrFullTextSegmentItem> | null;
        SubtitlePath: string | null;
        OutputStorage: TaskOutputStorage | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }
        this.SubtitlePath = 'SubtitlePath' in params ? params.SubtitlePath : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * Ocr 文字涉违禁信息
 * @class
 */
class AiReviewProhibitedOcrTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * Ocr 文字涉违禁评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉违禁嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * ManageTask返回参数结构体
 * @class
 */
class ManageTaskResponse extends AbstractModel {

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
 * DeleteWorkflow请求参数结构体
 * @class
 */
class DeleteWorkflowRequest extends AbstractModel {

    WorkflowId: number | null
    
    constructor(){
        super();

        /**
         * 工作流 ID。
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * 智能封面结果信息
 * @class
 */
class AiAnalysisTaskCoverOutput extends AbstractModel {

    CoverSet: Array<MediaAiAnalysisCoverItem> | null
    
    OutputStorage: TaskOutputStorage | null
    
    constructor(){
        super();

        /**
         * 智能封面列表。
         */
        this.CoverSet = null;

        /**
         * 智能封面的存储位置。
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CoverSet: Array<MediaAiAnalysisCoverItem> | null;
        OutputStorage: TaskOutputStorage | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CoverSet) {
            this.CoverSet = new Array();
            for (let z in params.CoverSet) {
                let obj = new MediaAiAnalysisCoverItem();
                obj.deserialize(params.CoverSet[z]);
                this.CoverSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * 智能封面结果类型
 * @class
 */
class AiAnalysisTaskCoverResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiAnalysisTaskCoverInput | null
    
    Output: AiAnalysisTaskCoverOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 智能封面任务输入。
         */
        this.Input = null;

        /**
         * 智能封面任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiAnalysisTaskCoverInput | null;
        Output: AiAnalysisTaskCoverOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskCoverInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskCoverOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifySampleSnapshotTemplate请求参数结构体
 * @class
 */
class ModifySampleSnapshotTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    SampleType: string | null
    
    SampleInterval: number | null
    
    Format: string | null
    
    Comment: string | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 采样截图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 采样截图类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         */
        this.SampleInterval = null;

        /**
         * 图片格式，取值为 jpg 和 png。
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        SampleType: string | null;
        SampleInterval: number | null;
        Format: string | null;
        Comment: string | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴政任务输入参数类型
 * @class
 */
class AiReviewPoliticalOcrTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴政模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 视频处理的输入对象信息。
 * @class
 */
class MediaInputInfo extends AbstractModel {

    Type: string | null
    
    CosInputInfo: CosInputInfo | null
    
    constructor(){
        super();

        /**
         * 输入来源对象的类型，现在仅支持 COS。
         */
        this.Type = null;

        /**
         * 当 Type 为 COS 时有效，则该项为必填，表示视频处理 COS 对象信息。
         */
        this.CosInputInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        CosInputInfo: CosInputInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosInputInfo) {
            let obj = new CosInputInfo();
            obj.deserialize(params.CosInputInfo)
            this.CosInputInfo = obj;
        }

    }
}

/**
 * CreateWorkflow请求参数结构体
 * @class
 */
class CreateWorkflowRequest extends AbstractModel {

    WorkflowName: string | null
    
    Trigger: WorkflowTrigger | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputDir: string | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    TaskNotifyConfig: TaskNotifyConfig | null
    
    TaskPriority: number | null
    
    constructor(){
        super();

        /**
         * 工作流名称，最多128字符。同一个用户该名称唯一。
         */
        this.WorkflowName = null;

        /**
         * 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。
         */
        this.Trigger = null;

        /**
         * 视频处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。
         */
        this.OutputStorage = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致。
         */
        this.OutputDir = null;

        /**
         * 视频处理类型任务参数。
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
         */
        this.AiRecognitionTask = null;

        /**
         * 任务的事件通知配置，不填代表不获取事件通知。
         */
        this.TaskNotifyConfig = null;

        /**
         * 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         */
        this.TaskPriority = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowName: string | null;
        Trigger: WorkflowTrigger | null;
        OutputStorage: TaskOutputStorage | null;
        OutputDir: string | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        TaskNotifyConfig: TaskNotifyConfig | null;
        TaskPriority: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;

    }
}

/**
 * 文本关键词识别控制参数。
 * @class
 */
class OcrWordsConfigureInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 文本关键词识别任务开关，可选值：
<li>ON：开启文本关键词识别任务；</li>
<li>OFF：关闭文本关键词识别任务。</li>
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * 自定义水印规格参数。
 * @class
 */
class RawWatermarkParameter extends AbstractModel {

    Type: string | null
    
    CoordinateOrigin: string | null
    
    XPos: string | null
    
    YPos: string | null
    
    ImageTemplate: RawImageWatermarkInput | null
    
    constructor(){
        super();

        /**
         * 水印类型，可选值：
<li>image：图片水印。</li>
         */
        this.Type = null;

        /**
         * 原点位置，目前仅支持：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角。</li>
默认值：TopLeft。
         */
        this.CoordinateOrigin = null;

        /**
         * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
         */
        this.XPos = null;

        /**
         * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
         */
        this.YPos = null;

        /**
         * 图片水印模板，当 Type 为 image，该字段必填。当 Type 为 text，该字段无效。
         */
        this.ImageTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        CoordinateOrigin: string | null;
        XPos: string | null;
        YPos: string | null;
        ImageTemplate: RawImageWatermarkInput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new RawImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

    }
}

/**
 * 内容审核 Ocr 文字鉴政、敏感任务结果类型
 * @class
 */
class AiReviewTaskPoliticalOcrResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewPoliticalOcrTaskInput | null
    
    Output: AiReviewPoliticalOcrTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS �� FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字鉴政任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字鉴政任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewPoliticalOcrTaskInput | null;
        Output: AiReviewPoliticalOcrTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ManageTask请求参数结构体
 * @class
 */
class ManageTaskRequest extends AbstractModel {

    OperationType: string | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 操作类型，取值范围：
<li>Abort：终止任务。</li>
         */
        this.OperationType = null;

        /**
         * 视频处理的任务 ID。
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OperationType: string | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateImageSpriteTemplate请求参数结构体
 * @class
 */
class CreateImageSpriteTemplateRequest extends AbstractModel {

    SampleType: string | null
    
    SampleInterval: number | null
    
    RowCount: number | null
    
    ColumnCount: number | null
    
    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    FillType: string | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 采样类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         */
        this.SampleInterval = null;

        /**
         * 雪碧图中小图的行数。
         */
        this.RowCount = null;

        /**
         * 雪碧图中小图的列数。
         */
        this.ColumnCount = null;

        /**
         * 雪碧图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         */
        this.FillType = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SampleType: string | null;
        SampleInterval: number | null;
        RowCount: number | null;
        ColumnCount: number | null;
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        FillType: string | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimePicInfoItem extends AbstractModel {

    TimeOffset: number | null
    
    Path: string | null
    
    WaterMarkDefinition: Array<number> | null
    
    constructor(){
        super();

        /**
         * 该张截图对应视频文件中的时间偏移，单位为<font color=red>毫秒</font>。
         */
        this.TimeOffset = null;

        /**
         * 该张截图的路径。
         */
        this.Path = null;

        /**
         * 截图如果被打上了水印，被打水印的模板 ID 列表。
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TimeOffset: number | null;
        Path: string | null;
        WaterMarkDefinition: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * 用户自定义人物审核任务控制参数
 * @class
 */
class UserDefineFaceReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 用户自定义人物审核任务开关，可选值：
<li>ON：开启自定义人物审核任务；</li>
<li>OFF：关闭自定义人物审核任务。</li>
         */
        this.Switch = null;

        /**
         * 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 内容审核模板详情
 * @class
 */
class ContentReviewTemplateItem extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Comment: string | null
    
    PornConfigure: PornConfigureInfo | null
    
    TerrorismConfigure: TerrorismConfigureInfo | null
    
    PoliticalConfigure: PoliticalConfigureInfo | null
    
    ProhibitedConfigure: ProhibitedConfigureInfo | null
    
    UserDefineConfigure: UserDefineConfigureInfo | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         */
        this.Definition = null;

        /**
         * 内容审核模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 内容审核模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 鉴黄控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PornConfigure = null;

        /**
         * 鉴恐控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TerrorismConfigure = null;

        /**
         * 鉴政控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PoliticalConfigure = null;

        /**
         * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProhibitedConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UserDefineConfigure = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        PornConfigure: PornConfigureInfo | null;
        TerrorismConfigure: TerrorismConfigureInfo | null;
        PoliticalConfigure: PoliticalConfigureInfo | null;
        ProhibitedConfigure: ProhibitedConfigureInfo | null;
        UserDefineConfigure: UserDefineConfigureInfo | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfo();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfo();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfo();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfo();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteAIRecognitionTemplate返回参数结构体
 * @class
 */
class DeleteAIRecognitionTemplateResponse extends AbstractModel {

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
 * 视频处理任务中的马赛克参数类型
 * @class
 */
class MosaicInput extends AbstractModel {

    CoordinateOrigin: string | null
    
    XPos: string | null
    
    YPos: string | null
    
    Width: string | null
    
    Height: string | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 原点位置，目前仅支持：
<li>TopLeft：表示坐标原点位于视频图像左上角，马赛克原点为图片或文字的左上角。</li>
默认值：TopLeft。
         */
        this.CoordinateOrigin = null;

        /**
         * 马赛克原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
         */
        this.XPos = null;

        /**
         * 马赛克原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
         */
        this.YPos = null;

        /**
         * 马赛克的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
默认值：10%。
         */
        this.Width = null;

        /**
         * 马赛克的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 Height 单位为像素，如 100px 表示 Height 为 100 像素。</li>
默认值：10%。
         */
        this.Height = null;

        /**
         * 马赛克的起始时间偏移，单位：秒。不填或填0，表示马赛克从画面出现时开始显现。
<li>不填或填0，表示马赛克从画面开始就出现；</li>
<li>当数值大于0时（假设为 n），表示马赛克从画面开始的第 n 秒出现；</li>
<li>当数值小于0时（假设为 -n），表示马赛克从离画面结束 n 秒前开始出现。</li>
         */
        this.StartTimeOffset = null;

        /**
         * 马赛克的结束时间偏移，单位：秒。
<li>不填或填0，表示马赛克持续到画面结束；</li>
<li>当数值大于0时（假设为 n），表示马赛克持续到第 n 秒时消失；</li>
<li>当数值小于0时（假设为 -n），表示马赛克持续到离画面结束 n 秒前消失。</li>
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CoordinateOrigin: string | null;
        XPos: string | null;
        YPos: string | null;
        Width: string | null;
        Height: string | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 内容审核鉴政任务输入参数类型
 * @class
 */
class AiReviewPoliticalTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴政模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 智能分类任务控制参数
 * @class
 */
class ClassificationConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能分类任务开关，可选值：
<li>ON：开启智能分类任务；</li>
<li>OFF：关闭智能分类任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 智能分类结果
 * @class
 */
class MediaAiAnalysisClassificationItem extends AbstractModel {

    Classification: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 智能分类的类别名称。
         */
        this.Classification = null;

        /**
         * 智能分类的可信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Classification: string | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Classification = 'Classification' in params ? params.Classification : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 音频流配置参数
 * @class
 */
class AudioTemplateInfoForUpdate extends AbstractModel {

    Codec: string | null
    
    Bitrate: number | null
    
    SampleRate: number | null
    
    AudioChannel: number | null
    
    constructor(){
        super();

        /**
         * 音频流的编码格式。
当外层参数 Container 为 mp3 时，可选值为：
<li>libmp3lame。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>libfdk_aac：更适合 mp4；</li>
<li>libmp3lame：更适合 flv；</li>
<li>mp2。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
         */
        this.Codec = null;

        /**
         * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
         */
        this.SampleRate = null;

        /**
         * 音频通道方式，可选值：
<li>1：单通道</li>
<li>2：双通道</li>
<li>6：立体声</li>
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Codec: string | null;
        Bitrate: number | null;
        SampleRate: number | null;
        AudioChannel: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * DeletePersonSample请求参数结构体
 * @class
 */
class DeletePersonSampleRequest extends AbstractModel {

    PersonId: string | null
    
    constructor(){
        super();

        /**
         * 人物 ID。
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * 采样截图信息
 * @class
 */
class MediaSampleSnapshotItem extends AbstractModel {

    Definition: number | null
    
    SampleType: string | null
    
    Interval: number | null
    
    Storage: TaskOutputStorage | null
    
    ImagePathSet: Array<string> | null
    
    WaterMarkDefinition: Array<number> | null
    
    constructor(){
        super();

        /**
         * 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         */
        this.Definition = null;

        /**
         * 采样方式，取值范围：
<li>Percent：根据百分比间隔采样。</li>
<li>Time：根据时间间隔采样。</li>
         */
        this.SampleType = null;

        /**
         * 采样间隔
<li>当 SampleType 为 Percent 时，该值表示多少百分比一张图。</li>
<li>当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。</li>
         */
        this.Interval = null;

        /**
         * 截图后文件的存储位置。
         */
        this.Storage = null;

        /**
         * 生成的截图 path 列表。
         */
        this.ImagePathSet = null;

        /**
         * 截图如果被打上了水印，被打水印的模板 ID 列表。
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SampleType: string | null;
        Interval: number | null;
        Storage: TaskOutputStorage | null;
        ImagePathSet: Array<string> | null;
        WaterMarkDefinition: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.ImagePathSet = 'ImagePathSet' in params ? params.ImagePathSet : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * ParseLiveStreamProcessNotification返回参数结构体
 * @class
 */
class ParseLiveStreamProcessNotificationResponse extends AbstractModel {

    NotificationType: string | null
    
    TaskId: string | null
    
    ProcessEofInfo: LiveStreamProcessErrorInfo | null
    
    AiReviewResultInfo: LiveStreamAiReviewResultInfo | null
    
    AiRecognitionResultInfo: LiveStreamAiRecognitionResultInfo | null
    
    SessionId: string | null
    
    SessionContext: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 直播流处理结果类型，包含：
<li>AiReviewResult：内容审核结果；</li>
<li>AiRecognitionResult：内容识别结果；</li>
<li>ProcessEof：直播流处理结束。</li>
         */
        this.NotificationType = null;

        /**
         * 视频处理任务 ID。
         */
        this.TaskId = null;

        /**
         * 直播流处理错误信息，当 NotificationType 为 ProcessEof 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProcessEofInfo = null;

        /**
         * 内容审核结果，当 NotificationType 为 AiReviewResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiReviewResultInfo = null;

        /**
         * 内容识别结果，当 NotificationType 为 AiRecognitionResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiRecognitionResultInfo = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
         */
        this.SessionContext = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NotificationType: string | null;
        TaskId: string | null;
        ProcessEofInfo: LiveStreamProcessErrorInfo | null;
        AiReviewResultInfo: LiveStreamAiReviewResultInfo | null;
        AiRecognitionResultInfo: LiveStreamAiRecognitionResultInfo | null;
        SessionId: string | null;
        SessionContext: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NotificationType = 'NotificationType' in params ? params.NotificationType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.ProcessEofInfo) {
            let obj = new LiveStreamProcessErrorInfo();
            obj.deserialize(params.ProcessEofInfo)
            this.ProcessEofInfo = obj;
        }

        if (params.AiReviewResultInfo) {
            let obj = new LiveStreamAiReviewResultInfo();
            obj.deserialize(params.AiReviewResultInfo)
            this.AiReviewResultInfo = obj;
        }

        if (params.AiRecognitionResultInfo) {
            let obj = new LiveStreamAiRecognitionResultInfo();
            obj.deserialize(params.AiRecognitionResultInfo)
            this.AiRecognitionResultInfo = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频内容识别输入参数类型
 * @class
 */
class AiRecognitionTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频智能识别模板 ID 。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 音频流配置参数
 * @class
 */
class AudioTemplateInfo extends AbstractModel {

    Codec: string | null
    
    Bitrate: number | null
    
    SampleRate: number | null
    
    AudioChannel: number | null
    
    constructor(){
        super();

        /**
         * 音频流的编码格式。
当外层参数 Container 为 mp3 时，可选值为：
<li>libmp3lame。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>libfdk_aac：更适合 mp4；</li>
<li>libmp3lame：更适合 flv。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
         */
        this.Codec = null;

        /**
         * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。
当取值为 0，表示音频码率和原始音频保持一致。
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
         */
        this.SampleRate = null;

        /**
         * 音频通道方式，可选值：
<li>1：单通道</li>
<li>2：双通道</li>
<li>6：立体声</li>
默认值：2。
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Codec: string | null;
        Bitrate: number | null;
        SampleRate: number | null;
        AudioChannel: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * 智能封面任务控制参数
 * @class
 */
class CoverConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能封面任务开关，可选值：
<li>ON：开启智能封面任务；</li>
<li>OFF：关闭智能封面任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 视频内容识别模板详情
 * @class
 */
class AIRecognitionTemplateItem extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Comment: string | null
    
    FaceConfigure: FaceConfigureInfo | null
    
    OcrFullTextConfigure: OcrFullTextConfigureInfo | null
    
    OcrWordsConfigure: OcrWordsConfigureInfo | null
    
    AsrFullTextConfigure: AsrFullTextConfigureInfo | null
    
    AsrWordsConfigure: AsrWordsConfigureInfo | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         */
        this.Definition = null;

        /**
         * 视频内容识别模板名称。
         */
        this.Name = null;

        /**
         * 视频内容识别模板描述信息。
         */
        this.Comment = null;

        /**
         * 人脸识别控制参数。
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
         */
        this.AsrWordsConfigure = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        FaceConfigure: FaceConfigureInfo | null;
        OcrFullTextConfigure: OcrFullTextConfigureInfo | null;
        OcrWordsConfigure: OcrWordsConfigureInfo | null;
        AsrFullTextConfigure: AsrFullTextConfigureInfo | null;
        AsrWordsConfigure: AsrWordsConfigureInfo | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfo();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfo();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfo();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfo();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfo();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 内容审核 Asr 文字鉴黄任务输入参数类型
 * @class
 */
class AiReviewPornAsrTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴黄模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 人脸识别结果。
 * @class
 */
class AiRecognitionTaskFaceResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskFaceResultInput | null
    
    Output: AiRecognitionTaskFaceResultOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 人脸识别任务输入信息。
         */
        this.Input = null;

        /**
         * 人脸识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiRecognitionTaskFaceResultInput | null;
        Output: AiRecognitionTaskFaceResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskFaceResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskFaceResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * CreateAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateRequest extends AbstractModel {

    Format: string | null
    
    StreamInfos: Array<AdaptiveStreamTemplate> | null
    
    Name: string | null
    
    DisableHigherVideoBitrate: number | null
    
    DisableHigherVideoResolution: number | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 自适应转码格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
         */
        this.Format = null;

        /**
         * 转自适应码流输出子流参数信息，最多输出10路子流。
注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。
         */
        this.StreamInfos = null;

        /**
         * 模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
默认为否。
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
默认为否。
         */
        this.DisableHigherVideoResolution = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Format: string | null;
        StreamInfos: Array<AdaptiveStreamTemplate> | null;
        Name: string | null;
        DisableHigherVideoBitrate: number | null;
        DisableHigherVideoResolution: number | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 画面鉴恐任务控制参数。
 * @class
 */
class TerrorismImgReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 画面鉴恐任务开关，可选值：
<li>ON：开启画面鉴恐任务；</li>
<li>OFF：关闭画面鉴恐任务。</li>
         */
        this.Switch = null;

        /**
         * 画面鉴恐过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：暴恐旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：暴恐人物。</li>
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 文本全文识别输出。
 * @class
 */
class AiRecognitionTaskOcrFullTextResultOutput extends AbstractModel {

    SegmentSet: Array<AiRecognitionTaskOcrFullTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 文本全文识别结果集。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SegmentSet: Array<AiRecognitionTaskOcrFullTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DeleteAIAnalysisTemplate返回参数结构体
 * @class
 */
class DeleteAIAnalysisTemplateResponse extends AbstractModel {

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
 * 文字水印模板
 * @class
 */
class TextWatermarkTemplateInputForUpdate extends AbstractModel {

    FontType: string | null
    
    FontSize: string | null
    
    FontColor: string | null
    
    FontAlpha: number | null
    
    constructor(){
        super();

        /**
         * 字体类型，目前可以支持两种：
<li>simkai.ttf：可以支持中文和英文；</li>
<li>arial.ttf：仅支持英文。</li>
         */
        this.FontType = null;

        /**
         * 字体大小，格式：Npx，N 为数值。
         */
        this.FontSize = null;

        /**
         * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
         */
        this.FontColor = null;

        /**
         * 文字透明度，取值范围：(0, 1]
<li>0：完全透明</li>
<li>1：完全不透明</li>
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FontType: string | null;
        FontSize: string | null;
        FontColor: string | null;
        FontAlpha: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴恐任务输入参数类型
 * @class
 */
class AiReviewTerrorismOcrTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴恐模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 文本关键词识别输入。
 * @class
 */
class AiRecognitionTaskOcrWordsResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 文本关键词识别模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteWorkflow返回参数结构体
 * @class
 */
class DeleteWorkflowResponse extends AbstractModel {

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
 * 内容审核鉴黄任务输入参数类型
 * @class
 */
class AiReviewPornTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴黄模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreatePersonSample请求参数结构体
 * @class
 */
class CreatePersonSampleRequest extends AbstractModel {

    Name: string | null
    
    Usages: Array<string> | null
    
    Description: string | null
    
    FaceContents: Array<string> | null
    
    Tags: Array<string> | null
    
    constructor(){
        super();

        /**
         * 人物名称，长度限制：20 个字符。
         */
        this.Name = null;

        /**
         * 人物应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于内容审核，等价于 Review.Face。
3. All：用于内容识别、内容审核，等价于 1+2。
         */
        this.Usages = null;

        /**
         * 人物描述，长度限制：1024 个字符。
         */
        this.Description = null;

        /**
         * 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 jpeg、png 图片格式。数组长度限制：5 张图片。
注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。
         */
        this.FaceContents = null;

        /**
         * 人物标签
<li>数组长度限制：20 个标签；</li>
<li>单个标签长度限制：128 个字符。</li>
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Usages: Array<string> | null;
        Description: string | null;
        FaceContents: Array<string> | null;
        Tags: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 智能封面信息
 * @class
 */
class MediaAiAnalysisCoverItem extends AbstractModel {

    CoverPath: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 智能封面存储路径。
         */
        this.CoverPath = null;

        /**
         * 智能封面的可信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CoverPath: string | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CoverPath = 'CoverPath' in params ? params.CoverPath : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 视频处理 COS 对象信息。
 * @class
 */
class CosInputInfo extends AbstractModel {

    Bucket: string | null
    
    Region: string | null
    
    Object: string | null
    
    constructor(){
        super();

        /**
         * 视频处理对象文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。
         */
        this.Bucket = null;

        /**
         * 视频处理对象文件所在的 COS Bucket 所属园区，如 ap-chongqing。
         */
        this.Region = null;

        /**
         * 视频处理对象文件的输入路径，如`/movie/201907/WildAnimal.mov`。
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
 * 智能标签任务控制参数
 * @class
 */
class TagConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能标签任务开关，可选值：
<li>ON：开启智能标签任务；</li>
<li>OFF：关闭智能标签任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 文本关键词识别输出。
 * @class
 */
class AiRecognitionTaskOcrWordsResultOutput extends AbstractModel {

    ResultSet: Array<AiRecognitionTaskOcrWordsResultItem> | null
    
    constructor(){
        super();

        /**
         * 文本关键词识别结果集。
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultSet: Array<AiRecognitionTaskOcrWordsResultItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskOcrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * AI 样本管理，人脸信息。
 * @class
 */
class AiSampleFaceInfo extends AbstractModel {

    FaceId: string | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 人脸图片 ID。
         */
        this.FaceId = null;

        /**
         * 人脸图片地址。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FaceId: string | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DeleteAIRecognitionTemplate请求参数结构体
 * @class
 */
class DeleteAIRecognitionTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 输出文件名的`{number}`变量的规则。
 * @class
 */
class NumberFormat extends AbstractModel {

    InitialValue: number | null
    
    Increment: number | null
    
    MinLength: number | null
    
    PlaceHolder: string | null
    
    constructor(){
        super();

        /**
         * `{number}`变量的起始值，默认为0。
         */
        this.InitialValue = null;

        /**
         * `{number}`变量的增长步长，默认为1。
         */
        this.Increment = null;

        /**
         * `{number}`变量的最小长度，不足时补占位符。默认为1。
         */
        this.MinLength = null;

        /**
         * `{number}`变量的长度不足时，补充的占位符。默认为"0"。
         */
        this.PlaceHolder = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InitialValue: number | null;
        Increment: number | null;
        MinLength: number | null;
        PlaceHolder: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InitialValue = 'InitialValue' in params ? params.InitialValue : null;
        this.Increment = 'Increment' in params ? params.Increment : null;
        this.MinLength = 'MinLength' in params ? params.MinLength : null;
        this.PlaceHolder = 'PlaceHolder' in params ? params.PlaceHolder : null;

    }
}

/**
 * EnableWorkflow请求参数结构体
 * @class
 */
class EnableWorkflowRequest extends AbstractModel {

    WorkflowId: number | null
    
    constructor(){
        super();

        /**
         * 工作流 ID。
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * 智能分类结果信息
 * @class
 */
class AiAnalysisTaskClassificationOutput extends AbstractModel {

    ClassificationSet: Array<MediaAiAnalysisClassificationItem> | null
    
    constructor(){
        super();

        /**
         * 视频智能分类列表。
         */
        this.ClassificationSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClassificationSet: Array<MediaAiAnalysisClassificationItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ClassificationSet) {
            this.ClassificationSet = new Array();
            for (let z in params.ClassificationSet) {
                let obj = new MediaAiAnalysisClassificationItem();
                obj.deserialize(params.ClassificationSet[z]);
                this.ClassificationSet.push(obj);
            }
        }

    }
}

/**
 * ModifyTranscodeTemplate请求参数结构体
 * @class
 */
class ModifyTranscodeTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Container: string | null
    
    Name: string | null
    
    Comment: string | null
    
    RemoveVideo: number | null
    
    RemoveAudio: number | null
    
    VideoTemplate: VideoTemplateInfoForUpdate | null
    
    AudioTemplate: AudioTemplateInfoForUpdate | null
    
    TEHDConfig: TEHDConfigForUpdate | null
    
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         */
        this.Definition = null;

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
         */
        this.Container = null;

        /**
         * 转码模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 是否去除视频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
         */
        this.RemoveAudio = null;

        /**
         * 视频流配置参数。
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数。
         */
        this.AudioTemplate = null;

        /**
         * 极速高清转码参数。
         */
        this.TEHDConfig = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Container: string | null;
        Name: string | null;
        Comment: string | null;
        RemoveVideo: number | null;
        RemoveAudio: number | null;
        VideoTemplate: VideoTemplateInfoForUpdate | null;
        AudioTemplate: AudioTemplateInfoForUpdate | null;
        TEHDConfig: TEHDConfigForUpdate | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfoForUpdate();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfoForUpdate();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfigForUpdate();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

    }
}

/**
 * 编辑视频任务的输入。
 * @class
 */
class EditMediaTaskInput extends AbstractModel {

    FileInfoSet: Array<EditMediaFileInfo> | null
    
    constructor(){
        super();

        /**
         * 输入的视频文件信息。
         */
        this.FileInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileInfoSet: Array<EditMediaFileInfo> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

    }
}

/**
 * 用户自定义语音审核任务控制参数
 * @class
 */
class UserDefineAsrTextReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 用户自定语音审核任务开关，可选值：
<li>ON：开启自定义语音审核任务；</li>
<li>OFF：关闭自定义语音审核任务。</li>
         */
        this.Switch = null;

        /**
         * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeWordSamples返回参数结构体
 * @class
 */
class DescribeWordSamplesResponse extends AbstractModel {

    TotalCount: number | null
    
    WordSet: Array<AiSampleWord> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TotalCount = null;

        /**
         * 关键词信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WordSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        WordSet: Array<AiSampleWord> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WordSet) {
            this.WordSet = new Array();
            for (let z in params.WordSet) {
                let obj = new AiSampleWord();
                obj.deserialize(params.WordSet[z]);
                this.WordSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能按帧标签结果信息
 * @class
 */
class AiAnalysisTaskFrameTagOutput extends AbstractModel {

    SegmentSet: Array<MediaAiAnalysisFrameTagSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 视频按帧标签列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SegmentSet: Array<MediaAiAnalysisFrameTagSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaAiAnalysisFrameTagSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 对视频转自适应码流任务结果类型
 * @class
 */
class MediaProcessTaskAdaptiveDynamicStreamingResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AdaptiveDynamicStreamingTaskInput | null
    
    Output: AdaptiveDynamicStreamingInfoItem | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 对视频转自适应码流任务的输入。
         */
        this.Input = null;

        /**
         * 对视频转自适应码流任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AdaptiveDynamicStreamingTaskInput | null;
        Output: AdaptiveDynamicStreamingInfoItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AdaptiveDynamicStreamingTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AdaptiveDynamicStreamingInfoItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 文本关键词识别控制参数。
 * @class
 */
class OcrWordsConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 文本关键词识别任务开关，可选值：
<li>ON：开启文本关键词识别任务；</li>
<li>OFF：关闭文本关键词识别任务。</li>
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * 水印模板详情
 * @class
 */
class WatermarkTemplate extends AbstractModel {

    Definition: number | null
    
    Type: string | null
    
    Name: string | null
    
    Comment: string | null
    
    XPos: string | null
    
    YPos: string | null
    
    ImageTemplate: ImageWatermarkTemplate | null
    
    TextTemplate: TextWatermarkTemplateInput | null
    
    SvgTemplate: SvgWatermarkInput | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    CoordinateOrigin: string | null
    
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         */
        this.Definition = null;

        /**
         * 水印类型，取值：
<li>image：图片水印；</li>
<li>text：文字水印。</li>
         */
        this.Type = null;

        /**
         * 水印模板名称。
         */
        this.Name = null;

        /**
         * 模板描述信息。
         */
        this.Comment = null;

        /**
         * 水印图片原点距离视频图像原点的水平位置。
<li>当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。</li>
         */
        this.XPos = null;

        /**
         * 水印图片原点距离视频图像原点的垂直位置。
<li>当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。</li>
         */
        this.YPos = null;

        /**
         * 图片水印模板，仅当 Type 为 image，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，仅当 Type 为 text，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TextTemplate = null;

        /**
         * SVG 水印模板，当 Type 为 svg，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SvgTemplate = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

        /**
         * 原点位置，可选值：
<li>topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下。；</li>
         */
        this.CoordinateOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Type: string | null;
        Name: string | null;
        Comment: string | null;
        XPos: string | null;
        YPos: string | null;
        ImageTemplate: ImageWatermarkTemplate | null;
        TextTemplate: TextWatermarkTemplateInput | null;
        SvgTemplate: SvgWatermarkInput | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        CoordinateOrigin: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkTemplate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;

    }
}

/**
 * 文字水印模板
 * @class
 */
class TextWatermarkTemplateInput extends AbstractModel {

    FontType: string | null
    
    FontSize: string | null
    
    FontColor: string | null
    
    FontAlpha: number | null
    
    constructor(){
        super();

        /**
         * 字体类型，目前可以支持两种：
<li>simkai.ttf：可以支持中文和英文；</li>
<li>arial.ttf：仅支持英文。</li>
         */
        this.FontType = null;

        /**
         * 字体大小，格式：Npx，N 为数值。
         */
        this.FontSize = null;

        /**
         * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
         */
        this.FontColor = null;

        /**
         * 文字透明度，取值范围：(0, 1]
<li>0：完全透明</li>
<li>1：完全不透明</li>
默认值：1。
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FontType: string | null;
        FontSize: string | null;
        FontColor: string | null;
        FontAlpha: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * ModifyAIAnalysisTemplate返回参数结构体
 * @class
 */
class ModifyAIAnalysisTemplateResponse extends AbstractModel {

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
 * DescribeAIRecognitionTemplates返回参数结构体
 * @class
 */
class DescribeAIRecognitionTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    AIRecognitionTemplateSet: Array<AIRecognitionTemplateItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 视频内容识别模板详情列表。
         */
        this.AIRecognitionTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        AIRecognitionTemplateSet: Array<AIRecognitionTemplateItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AIRecognitionTemplateSet) {
            this.AIRecognitionTemplateSet = new Array();
            for (let z in params.AIRecognitionTemplateSet) {
                let obj = new AIRecognitionTemplateItem();
                obj.deserialize(params.AIRecognitionTemplateSet[z]);
                this.AIRecognitionTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直播流 AI 审核结果
 * @class
 */
class LiveStreamAiReviewResultInfo extends AbstractModel {

    ResultSet: Array<LiveStreamAiReviewResultItem> | null
    
    constructor(){
        super();

        /**
         * 内容审核结果列表。
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultSet: Array<LiveStreamAiReviewResultItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new LiveStreamAiReviewResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * EditMedia返回参数结构体
 * @class
 */
class EditMediaResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 编辑视频的任务 ID，可以通过该 ID 查询编辑任务的状态。
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
 * 文本鉴政任务控制参数。
 * @class
 */
class PoliticalOcrReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本鉴政任务开关，可选值：
<li>ON：开启文本鉴政任务；</li>
<li>OFF：关闭文本鉴政任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 语音鉴黄任务控制参数。
 * @class
 */
class PornAsrReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 语音鉴黄任务开关，可选值：
<li>ON：开启语音鉴黄任务；</li>
<li>OFF：关闭语音鉴黄任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeSnapshotByTimeOffsetTemplates请求参数结构体
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    Type: string | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 语音全文识别的输入。
 * @class
 */
class AiRecognitionTaskAsrFullTextResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 语音全文识别模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 视频处理任务类型
 * @class
 */
class MediaProcessTaskInput extends AbstractModel {

    TranscodeTaskSet: Array<TranscodeTaskInput> | null
    
    AnimatedGraphicTaskSet: Array<AnimatedGraphicTaskInput> | null
    
    SnapshotByTimeOffsetTaskSet: Array<SnapshotByTimeOffsetTaskInput> | null
    
    SampleSnapshotTaskSet: Array<SampleSnapshotTaskInput> | null
    
    ImageSpriteTaskSet: Array<ImageSpriteTaskInput> | null
    
    AdaptiveDynamicStreamingTaskSet: Array<AdaptiveDynamicStreamingTaskInput> | null
    
    constructor(){
        super();

        /**
         * 视频转码任务列表。
         */
        this.TranscodeTaskSet = null;

        /**
         * 视频转动图任务列表。
         */
        this.AnimatedGraphicTaskSet = null;

        /**
         * 对视频按时间点截图任务列表。
         */
        this.SnapshotByTimeOffsetTaskSet = null;

        /**
         * 对视频采样截图任务列表。
         */
        this.SampleSnapshotTaskSet = null;

        /**
         * 对视频截雪碧图任务列表。
         */
        this.ImageSpriteTaskSet = null;

        /**
         * 转自适应码流任务列表。
         */
        this.AdaptiveDynamicStreamingTaskSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TranscodeTaskSet: Array<TranscodeTaskInput> | null;
        AnimatedGraphicTaskSet: Array<AnimatedGraphicTaskInput> | null;
        SnapshotByTimeOffsetTaskSet: Array<SnapshotByTimeOffsetTaskInput> | null;
        SampleSnapshotTaskSet: Array<SampleSnapshotTaskInput> | null;
        ImageSpriteTaskSet: Array<ImageSpriteTaskInput> | null;
        AdaptiveDynamicStreamingTaskSet: Array<AdaptiveDynamicStreamingTaskInput> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TranscodeTaskSet) {
            this.TranscodeTaskSet = new Array();
            for (let z in params.TranscodeTaskSet) {
                let obj = new TranscodeTaskInput();
                obj.deserialize(params.TranscodeTaskSet[z]);
                this.TranscodeTaskSet.push(obj);
            }
        }

        if (params.AnimatedGraphicTaskSet) {
            this.AnimatedGraphicTaskSet = new Array();
            for (let z in params.AnimatedGraphicTaskSet) {
                let obj = new AnimatedGraphicTaskInput();
                obj.deserialize(params.AnimatedGraphicTaskSet[z]);
                this.AnimatedGraphicTaskSet.push(obj);
            }
        }

        if (params.SnapshotByTimeOffsetTaskSet) {
            this.SnapshotByTimeOffsetTaskSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTaskSet) {
                let obj = new SnapshotByTimeOffsetTaskInput();
                obj.deserialize(params.SnapshotByTimeOffsetTaskSet[z]);
                this.SnapshotByTimeOffsetTaskSet.push(obj);
            }
        }

        if (params.SampleSnapshotTaskSet) {
            this.SampleSnapshotTaskSet = new Array();
            for (let z in params.SampleSnapshotTaskSet) {
                let obj = new SampleSnapshotTaskInput();
                obj.deserialize(params.SampleSnapshotTaskSet[z]);
                this.SampleSnapshotTaskSet.push(obj);
            }
        }

        if (params.ImageSpriteTaskSet) {
            this.ImageSpriteTaskSet = new Array();
            for (let z in params.ImageSpriteTaskSet) {
                let obj = new ImageSpriteTaskInput();
                obj.deserialize(params.ImageSpriteTaskSet[z]);
                this.ImageSpriteTaskSet.push(obj);
            }
        }

        if (params.AdaptiveDynamicStreamingTaskSet) {
            this.AdaptiveDynamicStreamingTaskSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTaskSet) {
                let obj = new AdaptiveDynamicStreamingTaskInput();
                obj.deserialize(params.AdaptiveDynamicStreamingTaskSet[z]);
                this.AdaptiveDynamicStreamingTaskSet.push(obj);
            }
        }

    }
}

/**
 * 视频处理 COS 输出对象信息。
 * @class
 */
class CosOutputStorage extends AbstractModel {

    Bucket: string | null
    
    Region: string | null
    
    constructor(){
        super();

        /**
         * 视频处理生成的文件输出的目标 Bucket 名，如 TopRankVideo-125xxx88。如果不填，表示继承上层。
         */
        this.Bucket = null;

        /**
         * 视频处理生成的文件输出的目标 Bucket 的园区，如 ap-chongqing。如果不填，表示继承上层。
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Bucket: string | null;
        Region: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 人脸识别结果片段
 * @class
 */
class AiRecognitionTaskFaceSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Confidence: number | null
    
    AreaCoordSet: Array<number> | null
    
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Confidence: number | null;
        AreaCoordSet: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * ProcessMedia返回参数结构体
 * @class
 */
class ProcessMediaResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
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
 * CreateWordSamples返回参数结构体
 * @class
 */
class CreateWordSamplesResponse extends AbstractModel {

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
 * 智能分类任务控制参数
 * @class
 */
class ClassificationConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能分类任务开关，可选值：
<li>ON：开启智能分类任务；</li>
<li>OFF：关闭智能分类任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DeleteAdaptiveDynamicStreamingTemplate返回参数结构体
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateResponse extends AbstractModel {

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
 * ParseNotification请求参数结构体
 * @class
 */
class ParseNotificationRequest extends AbstractModel {

    Content: string | null
    
    constructor(){
        super();

        /**
         * 从 CMQ 获取到的事件通知内容。
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Content: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * CreateWordSamples请求参数结构体
 * @class
 */
class CreateWordSamplesRequest extends AbstractModel {

    Usages: Array<string> | null
    
    Words: Array<AiSampleWordInfo> | null
    
    constructor(){
        super();

        /**
         * <b>关键词应用场景，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过语音识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行内容审核；
4. Review.Asr：通过语音识别技术，进行内容审核；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、语音识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、语音识别技术，进行内容审核，等价于 3+4；
7. All：通过光学字符识别技术、语音识别技术，进行内容识别、内容审核，等价于 1+2+3+4。
         */
        this.Usages = null;

        /**
         * 关键词，数组长度限制：100。
         */
        this.Words = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Usages: Array<string> | null;
        Words: Array<AiSampleWordInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new AiSampleWordInfo();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }

    }
}

/**
 * 语音鉴政任务控制参数。
 * @class
 */
class PoliticalAsrReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 语音鉴政任务开关，可选值：
<li>ON：开启语音鉴政任务；</li>
<li>OFF：关闭语音鉴政任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * AI 样本管理，人脸数据操作。
 * @class
 */
class AiSampleFaceOperation extends AbstractModel {

    Type: string | null
    
    FaceIds: Array<string> | null
    
    FaceContents: Array<string> | null
    
    constructor(){
        super();

        /**
         * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。重置操作将清空该人物已有人脸数据，并添加 FaceContents 指定人脸数据。
         */
        this.Type = null;

        /**
         * 人脸 ID 集合，当 Type为delete 时，该字段必填。
         */
        this.FaceIds = null;

        /**
         * 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串集合。
<li>当 Type为add 或 reset 时，该字段必填；</li>
<li>数组长度限制：5 张图片。</li>
注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。
         */
        this.FaceContents = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        FaceIds: Array<string> | null;
        FaceContents: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;

    }
}

/**
 * SVG水印模板输入参数
 * @class
 */
class SvgWatermarkInputForUpdate extends AbstractModel {

    Width: string | null
    
    Height: string | null
    
    constructor(){
        super();

        /**
         * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
<li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 W%。</li>
默认值为 10W%。
         */
        this.Width = null;

        /**
         * 水印的高度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
<li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 H%。
默认值为 0px。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Width: string | null;
        Height: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴恐任务结果类型
 * @class
 */
class AiReviewTaskTerrorismOcrResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewTerrorismOcrTaskInput | null
    
    Output: AiReviewTerrorismOcrTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字鉴恐任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字鉴恐任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewTerrorismOcrTaskInput | null;
        Output: AiReviewTerrorismOcrTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 文本关键识别结果。
 * @class
 */
class AiRecognitionTaskOcrWordsResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskOcrWordsResultInput | null
    
    Output: AiRecognitionTaskOcrWordsResultOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 文本关键词识别任务输入信息。
         */
        this.Input = null;

        /**
         * 文本关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiRecognitionTaskOcrWordsResultInput | null;
        Output: AiRecognitionTaskOcrWordsResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 语音鉴黄任务控制参数
 * @class
 */
class PornAsrReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 语音鉴黄任务开关，可选值：
<li>ON：开启语音鉴黄任务；</li>
<li>OFF：关闭语音鉴黄任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 语音违禁任务控制参数
 * @class
 */
class ProhibitedAsrReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 语音违禁任务开关，可选值：
<li>ON：开启语音违禁任务；</li>
<li>OFF：关闭语音违禁任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyAnimatedGraphicsTemplate返回参数结构体
 * @class
 */
class ModifyAnimatedGraphicsTemplateResponse extends AbstractModel {

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
 * DeleteAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 自适应转码模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 文本全文识别片段。
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    TextSet: Array<AiRecognitionTaskOcrFullTextSegmentTextItem> | null
    
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段结果集。
         */
        this.TextSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        TextSet: Array<AiRecognitionTaskOcrFullTextSegmentTextItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TextSet) {
            this.TextSet = new Array();
            for (let z in params.TextSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentTextItem();
                obj.deserialize(params.TextSet[z]);
                this.TextSet.push(obj);
            }
        }

    }
}

/**
 * Asr 文字涉黄信息
 * @class
 */
class AiReviewPornAsrTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    SegmentSet: Array<MediaContentReviewAsrTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * Asr 文字涉黄评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * Asr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉黄嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        SegmentSet: Array<MediaContentReviewAsrTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DeleteAIAnalysisTemplate请求参数结构体
 * @class
 */
class DeleteAIAnalysisTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * EditMedia请求参数结构体
 * @class
 */
class EditMediaRequest extends AbstractModel {

    FileInfos: Array<EditMediaFileInfo> | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputObjectPath: string | null
    
    TaskNotifyConfig: TaskNotifyConfig | null
    
    TasksPriority: number | null
    
    SessionId: string | null
    
    SessionContext: string | null
    
    constructor(){
        super();

        /**
         * 输入的视频文件信息。
         */
        this.FileInfos = null;

        /**
         * 视频处理输出文件的目标存储。
         */
        this.OutputStorage = null;

        /**
         * 视频处理输出文件的目标路径。
         */
        this.OutputObjectPath = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
         */
        this.TasksPriority = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileInfos: Array<EditMediaFileInfo> | null;
        OutputStorage: TaskOutputStorage | null;
        OutputObjectPath: string | null;
        TaskNotifyConfig: TaskNotifyConfig | null;
        TasksPriority: number | null;
        SessionId: string | null;
        SessionContext: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * 对视频截雪碧图任务结果类型
 * @class
 */
class MediaProcessTaskImageSpriteResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: ImageSpriteTaskInput | null
    
    Output: MediaImageSpriteItem | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 对视频截雪碧图任务的输入。
         */
        this.Input = null;

        /**
         * 对视频截雪碧图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: ImageSpriteTaskInput | null;
        Output: MediaImageSpriteItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new ImageSpriteTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaImageSpriteItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates返回参数结构体
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    AdaptiveDynamicStreamingTemplateSet: Array<AdaptiveDynamicStreamingTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 转自适应码流模板详情列表。
         */
        this.AdaptiveDynamicStreamingTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        AdaptiveDynamicStreamingTemplateSet: Array<AdaptiveDynamicStreamingTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AdaptiveDynamicStreamingTemplateSet) {
            this.AdaptiveDynamicStreamingTemplateSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTemplateSet) {
                let obj = new AdaptiveDynamicStreamingTemplate();
                obj.deserialize(params.AdaptiveDynamicStreamingTemplateSet[z]);
                this.AdaptiveDynamicStreamingTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 内容审核 Ocr 文字审核嫌疑片段
 * @class
 */
class MediaContentReviewOcrTextSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Confidence: number | null
    
    Suggestion: string | null
    
    KeywordSet: Array<string> | null
    
    AreaCoordSet: Array<number> | null
    
    Url: string | null
    
    PicUrlExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
         */
        this.KeywordSet = null;

        /**
         * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Confidence: number | null;
        Suggestion: string | null;
        KeywordSet: Array<string> | null;
        AreaCoordSet: Array<number> | null;
        Url: string | null;
        PicUrlExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates请求参数结构体
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    Type: string | null
    
    constructor(){
        super();

        /**
         * 转自适应码流模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 图片水印模板输入参数
 * @class
 */
class ImageWatermarkInput extends AbstractModel {

    ImageContent: string | null
    
    Width: string | null
    
    Height: string | null
    
    constructor(){
        super();

        /**
         * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。
         */
        this.ImageContent = null;

        /**
         * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
默认值：10%。
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageContent: string | null;
        Width: string | null;
        Height: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 语音全文识别任务控制参数
 * @class
 */
class AsrFullTextConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    SubtitleFormat: string | null
    
    constructor(){
        super();

        /**
         * 语音全文识别任务开关，可选值：
<li>ON：开启智能语音全文识别任务；</li>
<li>OFF：关闭智能语音全文识别任务。</li>
         */
        this.Switch = null;

        /**
         * 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
         */
        this.SubtitleFormat = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        SubtitleFormat: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubtitleFormat = 'SubtitleFormat' in params ? params.SubtitleFormat : null;

    }
}

/**
 * CreatePersonSample返回参数结构体
 * @class
 */
class CreatePersonSampleResponse extends AbstractModel {

    Person: AiSamplePerson | null
    
    FailFaceInfoSet: Array<AiSampleFailFaceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 人物信息。
         */
        this.Person = null;

        /**
         * 处理失败的人脸信息。
         */
        this.FailFaceInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Person: AiSamplePerson | null;
        FailFaceInfoSet: Array<AiSampleFailFaceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateContentReviewTemplate返回参数结构体
 * @class
 */
class CreateContentReviewTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 违禁任务控制参数
 * @class
 */
class ProhibitedConfigureInfoForUpdate extends AbstractModel {

    AsrReviewInfo: ProhibitedAsrReviewTemplateInfoForUpdate | null
    
    OcrReviewInfo: ProhibitedOcrReviewTemplateInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 语音违禁控制参数。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本违禁控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AsrReviewInfo: ProhibitedAsrReviewTemplateInfoForUpdate | null;
        OcrReviewInfo: ProhibitedOcrReviewTemplateInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AsrReviewInfo) {
            let obj = new ProhibitedAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 智能标签任务控制参数
 * @class
 */
class TagConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能标签任务开关，可选值：
<li>ON：开启智能标签任务；</li>
<li>OFF：关闭智能标签任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DeleteWordSamples请求参数结构体
 * @class
 */
class DeleteWordSamplesRequest extends AbstractModel {

    Keywords: Array<string> | null
    
    constructor(){
        super();

        /**
         * 关键词，数组长度限制：100 个词。
         */
        this.Keywords = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keywords: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keywords = 'Keywords' in params ? params.Keywords : null;

    }
}

/**
 * 自定义转码的规格参数。
 * @class
 */
class RawTranscodeParameter extends AbstractModel {

    Container: string | null
    
    RemoveVideo: number | null
    
    RemoveAudio: number | null
    
    VideoTemplate: VideoTemplateInfo | null
    
    AudioTemplate: AudioTemplateInfo | null
    
    TEHDConfig: TEHDConfig | null
    
    constructor(){
        super();

        /**
         * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
         */
        this.Container = null;

        /**
         * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
         */
        this.RemoveAudio = null;

        /**
         * 视频流配置参数，当 RemoveVideo 为 0，该字段必填。
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数，当 RemoveAudio 为 0，该字段必填。
         */
        this.AudioTemplate = null;

        /**
         * 极速高清转码参数。
         */
        this.TEHDConfig = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Container: string | null;
        RemoveVideo: number | null;
        RemoveAudio: number | null;
        VideoTemplate: VideoTemplateInfo | null;
        AudioTemplate: AudioTemplateInfo | null;
        TEHDConfig: TEHDConfig | null;
    }): void {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

    }
}

/**
 * 任务处理的事件通知配置。
 * @class
 */
class LiveStreamTaskNotifyConfig extends AbstractModel {

    CmqModel: string | null
    
    CmqRegion: string | null
    
    QueueName: string | null
    
    TopicName: string | null
    
    constructor(){
        super();

        /**
         * CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。
         */
        this.CmqModel = null;

        /**
         * CMQ 的园区，如 sh，bj 等。
         */
        this.CmqRegion = null;

        /**
         * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。
         */
        this.QueueName = null;

        /**
         * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CmqModel: string | null;
        CmqRegion: string | null;
        QueueName: string | null;
        TopicName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CmqModel = 'CmqModel' in params ? params.CmqModel : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 视频流配置参数
 * @class
 */
class VideoTemplateInfo extends AbstractModel {

    Codec: string | null
    
    Fps: number | null
    
    Bitrate: number | null
    
    ResolutionAdaptive: string | null
    
    Width: number | null
    
    Height: number | null
    
    Gop: number | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
<li>av1：AOMedia Video 1 编码</li>
目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。av1 编码容器目前只支持 mp4 。
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 60]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
         */
        this.Fps = null;

        /**
         * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
         */
        this.Bitrate = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
当填 0 或不填时，系统将自动设置 gop 长度。
         */
        this.Gop = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Codec: string | null;
        Fps: number | null;
        Bitrate: number | null;
        ResolutionAdaptive: string | null;
        Width: number | null;
        Height: number | null;
        Gop: number | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 文本鉴政任务控制参数
 * @class
 */
class PoliticalOcrReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本鉴政任务开关，可选值：
<li>ON：开启文本鉴政任务；</li>
<li>OFF：关闭文本鉴政任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 文本鉴黄任务控制参数。
 * @class
 */
class PornOcrReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本鉴黄任务开关，可选值：
<li>ON：开启文本鉴黄任务；</li>
<li>OFF：关闭文本鉴黄任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴黄任务结果类型
 * @class
 */
class AiReviewTaskPornOcrResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewPornOcrTaskInput | null
    
    Output: AiReviewPornOcrTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核 Ocr 文字鉴黄任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Ocr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewPornOcrTaskInput | null;
        Output: AiReviewPornOcrTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifyContentReviewTemplate返回参数结构体
 * @class
 */
class ModifyContentReviewTemplateResponse extends AbstractModel {

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
 * DescribeWatermarkTemplates请求参数结构体
 * @class
 */
class DescribeWatermarkTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Type: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 水印模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 水印类型过滤条件，可选值：
<li>image：图片水印；</li>
<li>text：文字水印。</li>
         */
        this.Type = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数
<li>默认值：10；</li>
<li>最大值：100。</li>
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Type: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 视频处理输出对象信息。
 * @class
 */
class TaskOutputStorage extends AbstractModel {

    Type: string | null
    
    CosOutputStorage: CosOutputStorage | null
    
    constructor(){
        super();

        /**
         * 视频处理输出对象存储位置的类型，现在仅支持 COS。
         */
        this.Type = null;

        /**
         * 当 Type 为 COS 时有效，则该项为必填，表示视频处理 COS 输出位置。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CosOutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        CosOutputStorage: CosOutputStorage | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosOutputStorage) {
            let obj = new CosOutputStorage();
            obj.deserialize(params.CosOutputStorage)
            this.CosOutputStorage = obj;
        }

    }
}

/**
 * 用户自定义审核任务控制参数
 * @class
 */
class UserDefineConfigureInfo extends AbstractModel {

    FaceReviewInfo: UserDefineFaceReviewTemplateInfo | null
    
    AsrReviewInfo: UserDefineAsrTextReviewTemplateInfo | null
    
    OcrReviewInfo: UserDefineOcrTextReviewTemplateInfo | null
    
    constructor(){
        super();

        /**
         * 用户自定义人物审核控制参数。
         */
        this.FaceReviewInfo = null;

        /**
         * 用户自定义语音审核控制参数。
         */
        this.AsrReviewInfo = null;

        /**
         * 用户自定义文本审核控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FaceReviewInfo: UserDefineFaceReviewTemplateInfo | null;
        AsrReviewInfo: UserDefineAsrTextReviewTemplateInfo | null;
        OcrReviewInfo: UserDefineOcrTextReviewTemplateInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FaceReviewInfo) {
            let obj = new UserDefineFaceReviewTemplateInfo();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 内容审核 Ocr 文字鉴黄任务输入参数类型
 * @class
 */
class AiReviewPornOcrTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴黄模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 点播文件指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends AbstractModel {

    Definition: number | null
    
    PicInfoSet: Array<MediaSnapshotByTimePicInfoItem> | null
    
    Storage: TaskOutputStorage | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         */
        this.Definition = null;

        /**
         * 同一规格的截图信息集合，每个元素代表一张截图。
         */
        this.PicInfoSet = null;

        /**
         * 指定时间点截图文件的存储位置。
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        PicInfoSet: Array<MediaSnapshotByTimePicInfoItem> | null;
        Storage: TaskOutputStorage | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.PicInfoSet) {
            this.PicInfoSet = new Array();
            for (let z in params.PicInfoSet) {
                let obj = new MediaSnapshotByTimePicInfoItem();
                obj.deserialize(params.PicInfoSet[z]);
                this.PicInfoSet.push(obj);
            }
        }

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * ModifyAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Format: string | null
    
    DisableHigherVideoBitrate: number | null
    
    DisableHigherVideoResolution: number | null
    
    StreamInfos: Array<AdaptiveStreamTemplate> | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 转自适应码流模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 转自适应码流格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
         */
        this.Format = null;

        /**
         * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         */
        this.DisableHigherVideoResolution = null;

        /**
         * 转自适应码流输入流参数信息，最多输入10路流。
注意：各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。
         */
        this.StreamInfos = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Format: string | null;
        DisableHigherVideoBitrate: number | null;
        DisableHigherVideoResolution: number | null;
        StreamInfos: Array<AdaptiveStreamTemplate> | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 视频转动图结果信息
 * @class
 */
class MediaAnimatedGraphicsItem extends AbstractModel {

    Storage: TaskOutputStorage | null
    
    Path: string | null
    
    Definition: number | null
    
    Container: string | null
    
    Height: number | null
    
    Width: number | null
    
    Bitrate: number | null
    
    Size: number | null
    
    Md5: string | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 转动图文件的存储位置。
         */
        this.Storage = null;

        /**
         * 转动图的文件路径。
         */
        this.Path = null;

        /**
         * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/862/37042#.E9.A2.84.E7.BD.AE.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         */
        this.Definition = null;

        /**
         * 动图格式，如 gif。
         */
        this.Container = null;

        /**
         * 动图的高度，单位：px。
         */
        this.Height = null;

        /**
         * 动图的宽度，单位：px。
         */
        this.Width = null;

        /**
         * 动图码率，单位：bps。
         */
        this.Bitrate = null;

        /**
         * 动图大小，单位：字节。
         */
        this.Size = null;

        /**
         * 动图的md5值。
         */
        this.Md5 = null;

        /**
         * 动图在视频中的起始时间偏移，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 动图在视频中的结束时间偏移，单位：秒。
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Storage: TaskOutputStorage | null;
        Path: string | null;
        Definition: number | null;
        Container: string | null;
        Height: number | null;
        Width: number | null;
        Bitrate: number | null;
        Size: number | null;
        Md5: string | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * ModifyWordSample请求参数结构体
 * @class
 */
class ModifyWordSampleRequest extends AbstractModel {

    Keyword: string | null
    
    Usages: Array<string> | null
    
    TagOperationInfo: AiSampleTagOperation | null
    
    constructor(){
        super();

        /**
         * 关键词，长度限制：128 个字符。
         */
        this.Keyword = null;

        /**
         * <b>关键词应用场景，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过语音识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行内容审核；
4. Review.Asr：通过语音识别技术，进行内容审核；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、语音识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、语音识别技术，进行内容审核，等价于 3+4；
7. All：通过光学字符识别技术、语音识别技术，进行内容识别、内容审核，等价于 1+2+3+4。
         */
        this.Usages = null;

        /**
         * 标签操作信息。
         */
        this.TagOperationInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keyword: string | null;
        Usages: Array<string> | null;
        TagOperationInfo: AiSampleTagOperation | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }

    }
}

/**
 * 转动图任务结果类型
 * @class
 */
class MediaProcessTaskAnimatedGraphicResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AnimatedGraphicTaskInput | null
    
    Output: MediaAnimatedGraphicsItem | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 转动图任务的输入。
         */
        this.Input = null;

        /**
         * 转动图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AnimatedGraphicTaskInput | null;
        Output: MediaAnimatedGraphicsItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AnimatedGraphicTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaAnimatedGraphicsItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 智能标签结果类型
 * @class
 */
class AiAnalysisTaskTagResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiAnalysisTaskTagInput | null
    
    Output: AiAnalysisTaskTagOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 智能标签任务输入。
         */
        this.Input = null;

        /**
         * 智能标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiAnalysisTaskTagInput | null;
        Output: AiAnalysisTaskTagOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 智能标签结果信息
 * @class
 */
class AiAnalysisTaskTagOutput extends AbstractModel {

    TagSet: Array<MediaAiAnalysisTagItem> | null
    
    constructor(){
        super();

        /**
         * 视频智能标签列表。
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TagSet: Array<MediaAiAnalysisTagItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * ProcessMedia请求参数结构体
 * @class
 */
class ProcessMediaRequest extends AbstractModel {

    InputInfo: MediaInputInfo | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputDir: string | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    TaskNotifyConfig: TaskNotifyConfig | null
    
    TasksPriority: number | null
    
    SessionId: string | null
    
    SessionContext: string | null
    
    constructor(){
        super();

        /**
         * 视频处理的文件输入信息。
         */
        this.InputInfo = null;

        /**
         * 视频处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。
         */
        this.OutputStorage = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与 InputInfo 中文件所在的目录一致。
         */
        this.OutputDir = null;

        /**
         * 视频处理类型任务参数。
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
         */
        this.AiRecognitionTask = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务流的优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
         */
        this.TasksPriority = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InputInfo: MediaInputInfo | null;
        OutputStorage: TaskOutputStorage | null;
        OutputDir: string | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        TaskNotifyConfig: TaskNotifyConfig | null;
        TasksPriority: number | null;
        SessionId: string | null;
        SessionContext: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * 文本全文识别结果。
 * @class
 */
class AiRecognitionTaskOcrFullTextResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskOcrFullTextResultInput | null
    
    Output: AiRecognitionTaskOcrFullTextResultOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 文本全文识别任务输入信息。
         */
        this.Input = null;

        /**
         * 文本全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiRecognitionTaskOcrFullTextResultInput | null;
        Output: AiRecognitionTaskOcrFullTextResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 对视频按指定时间点截图任务结果类型
 * @class
 */
class MediaProcessTaskSnapshotByTimeOffsetResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: SnapshotByTimeOffsetTaskInput | null
    
    Output: MediaSnapshotByTimeOffsetItem | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 对视频按指定时间点截图任务输入。
         */
        this.Input = null;

        /**
         * 对视频按指定时间点截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: SnapshotByTimeOffsetTaskInput | null;
        Output: MediaSnapshotByTimeOffsetItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SnapshotByTimeOffsetTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSnapshotByTimeOffsetItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * AI 样本管理，关键词输出信息。
 * @class
 */
class AiSampleWord extends AbstractModel {

    Keyword: string | null
    
    TagSet: Array<string> | null
    
    UsageSet: Array<string> | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 关键词。
         */
        this.Keyword = null;

        /**
         * 关键词标签。
         */
        this.TagSet = null;

        /**
         * 关键词应用场景。
         */
        this.UsageSet = null;

        /**
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keyword: string | null;
        TagSet: Array<string> | null;
        UsageSet: Array<string> | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 语音关键词识别输出。
 * @class
 */
class AiRecognitionTaskAsrWordsResultOutput extends AbstractModel {

    ResultSet: Array<AiRecognitionTaskAsrWordsResultItem> | null
    
    constructor(){
        super();

        /**
         * 语音关键词识别结果集。
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultSet: Array<AiRecognitionTaskAsrWordsResultItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskAsrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * 直播 AI Ocr 单词识别结果
 * @class
 */
class LiveStreamOcrWordsRecognitionResult extends AbstractModel {

    Word: string | null
    
    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    AreaCoords: Array<number> | null
    
    constructor(){
        super();

        /**
         * 文本关键词。
         */
        this.Word = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         */
        this.AreaCoords = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Word: string | null;
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
        AreaCoords: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoords = 'AreaCoords' in params ? params.AreaCoords : null;

    }
}

/**
 * 直播流处理错误信息
 * @class
 */
class LiveStreamProcessErrorInfo extends AbstractModel {

    ErrCode: number | null
    
    Message: string | null
    
    constructor(){
        super();

        /**
         * 错误码：
<li>0表示没有错误；</li>
<li>非0表示错误，请参考 Message 错误信息。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ErrCode: number | null;
        Message: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyAdaptiveDynamicStreamingTemplate返回参数结构体
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateResponse extends AbstractModel {

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
 * 转码任务结果类型
 * @class
 */
class MediaProcessTaskTranscodeResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: TranscodeTaskInput | null
    
    Output: MediaTranscodeItem | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 转码任务的输入。
         */
        this.Input = null;

        /**
         * 转码任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: TranscodeTaskInput | null;
        Output: MediaTranscodeItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new TranscodeTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaTranscodeItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 对视频按指定时间点截图任务输入参数类型
 * @class
 */
class SnapshotByTimeOffsetTaskInput extends AbstractModel {

    Definition: number | null
    
    ExtTimeOffsetSet: Array<string> | null
    
    TimeOffsetSet: Array<number> | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputObjectPath: string | null
    
    ObjectNumberFormat: NumberFormat | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图模板 ID。
         */
        this.Definition = null;

        /**
         * 截图时间点列表，时间点支持 s、% 两种格式：
<li>当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
<li>当字符串以 % 结尾，表示时间点为视频时长的百分比大小，如10%表示时间点为视频前第10%的时间。</li>
         */
        this.ExtTimeOffsetSet = null;

        /**
         * 截图时间点列表，单位为<font color=red>秒</font>。此参数已不再建议使用，建议您使用 ExtTimeOffsetSet 参数。
         */
        this.TimeOffsetSet = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         */
        this.WatermarkSet = null;

        /**
         * 时间点截图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OutputStorage = null;

        /**
         * 时间点截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`。
         */
        this.OutputObjectPath = null;

        /**
         * 时间点截图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        ExtTimeOffsetSet: Array<string> | null;
        TimeOffsetSet: Array<number> | null;
        WatermarkSet: Array<WatermarkInput> | null;
        OutputStorage: TaskOutputStorage | null;
        OutputObjectPath: string | null;
        ObjectNumberFormat: NumberFormat | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExtTimeOffsetSet = 'ExtTimeOffsetSet' in params ? params.ExtTimeOffsetSet : null;
        this.TimeOffsetSet = 'TimeOffsetSet' in params ? params.TimeOffsetSet : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * 对视频截雪碧图任务输入参数类型
 * @class
 */
class ImageSpriteTaskInput extends AbstractModel {

    Definition: number | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputObjectPath: string | null
    
    WebVttObjectName: string | null
    
    ObjectNumberFormat: NumberFormat | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板 ID。
         */
        this.Definition = null;

        /**
         * 截取雪碧图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OutputStorage = null;

        /**
         * 截取雪碧图后，雪碧图图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}_{number}.{format}`。
         */
        this.OutputObjectPath = null;

        /**
         * 截取雪碧图后，Web VTT 文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}.{format}`。
         */
        this.WebVttObjectName = null;

        /**
         * 截取雪碧图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        OutputStorage: TaskOutputStorage | null;
        OutputObjectPath: string | null;
        WebVttObjectName: string | null;
        ObjectNumberFormat: NumberFormat | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.WebVttObjectName = 'WebVttObjectName' in params ? params.WebVttObjectName : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * DeleteContentReviewTemplate返回参数结构体
 * @class
 */
class DeleteContentReviewTemplateResponse extends AbstractModel {

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
 * 图片水印模板
 * @class
 */
class ImageWatermarkTemplate extends AbstractModel {

    ImageUrl: string | null
    
    Width: string | null
    
    Height: string | null
    
    constructor(){
        super();

        /**
         * 水印图片地址。
         */
        this.ImageUrl = null;

        /**
         * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；</li>
0px：表示 Height 按照 Width 对视频宽度的比例缩放。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageUrl: string | null;
        Width: string | null;
        Height: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 语音关键词识别控制参数。
 * @class
 */
class AsrWordsConfigureInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 语音关键词识别任务开关，可选值：
<li>ON：开启语音关键词识别任务；</li>
<li>OFF：关闭语音关键词识别任务。</li>
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * 直播 AI Asr 单词识别结果
 * @class
 */
class LiveStreamAsrWordsRecognitionResult extends AbstractModel {

    Word: string | null
    
    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 语音关键词。
         */
        this.Word = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Word: string | null;
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * AI 样本管理，人物信息。
 * @class
 */
class AiSamplePerson extends AbstractModel {

    PersonId: string | null
    
    Name: string | null
    
    Description: string | null
    
    FaceInfoSet: Array<AiSampleFaceInfo> | null
    
    TagSet: Array<string> | null
    
    UsageSet: Array<string> | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 人物 ID。
         */
        this.PersonId = null;

        /**
         * 人物名称。
         */
        this.Name = null;

        /**
         * 人物描述。
         */
        this.Description = null;

        /**
         * 人脸信息。
         */
        this.FaceInfoSet = null;

        /**
         * 人物标签。
         */
        this.TagSet = null;

        /**
         * 应用场景。
         */
        this.UsageSet = null;

        /**
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonId: string | null;
        Name: string | null;
        Description: string | null;
        FaceInfoSet: Array<AiSampleFaceInfo> | null;
        TagSet: Array<string> | null;
        UsageSet: Array<string> | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new AiSampleFaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeWorkflows返回参数结构体
 * @class
 */
class DescribeWorkflowsResponse extends AbstractModel {

    TotalCount: number | null
    
    WorkflowInfoSet: Array<WorkflowInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 工作流信息数组。
         */
        this.WorkflowInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        WorkflowInfoSet: Array<WorkflowInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WorkflowInfoSet) {
            this.WorkflowInfoSet = new Array();
            for (let z in params.WorkflowInfoSet) {
                let obj = new WorkflowInfo();
                obj.deserialize(params.WorkflowInfoSet[z]);
                this.WorkflowInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 语音关键词识别控制参数。
 * @class
 */
class AsrWordsConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 语音关键词识别任务开关，可选值：
<li>ON：开启语音关键词识别任务；</li>
<li>OFF：关闭语音关键词识别任务。</li>
         */
        this.Switch = null;

        /**
         * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * DeleteImageSpriteTemplate返回参数结构体
 * @class
 */
class DeleteImageSpriteTemplateResponse extends AbstractModel {

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
 * DescribeContentReviewTemplates返回参数结构体
 * @class
 */
class DescribeContentReviewTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    ContentReviewTemplateSet: Array<ContentReviewTemplateItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 内容审核模板详情列表。
         */
        this.ContentReviewTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        ContentReviewTemplateSet: Array<ContentReviewTemplateItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ContentReviewTemplateSet) {
            this.ContentReviewTemplateSet = new Array();
            for (let z in params.ContentReviewTemplateSet) {
                let obj = new ContentReviewTemplateItem();
                obj.deserialize(params.ContentReviewTemplateSet[z]);
                this.ContentReviewTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 极速高清参数配置。
 * @class
 */
class TEHDConfig extends AbstractModel {

    Type: string | null
    
    MaxVideoBitrate: number | null
    
    constructor(){
        super();

        /**
         * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100。</li>
不填代表不启用极速高清。
         */
        this.Type = null;

        /**
         * 视频码率上限，当 Type 指定了极速高清类型时有效。
不填或填0表示不设视频码率上限。
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        MaxVideoBitrate: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * 转动图模板详情。
 * @class
 */
class AnimatedGraphicsTemplate extends AbstractModel {

    Definition: number | null
    
    Type: string | null
    
    Name: string | null
    
    Comment: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    Fps: number | null
    
    Quality: number | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 转动图模板名称。
         */
        this.Name = null;

        /**
         * 转动图模板描述。
         */
        this.Comment = null;

        /**
         * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 动图格式。
         */
        this.Format = null;

        /**
         * 帧率。
         */
        this.Fps = null;

        /**
         * 图片质量。
         */
        this.Quality = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Type: string | null;
        Name: string | null;
        Comment: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        Fps: number | null;
        Quality: number | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 输入规则，当上传视频命中该规则时，即触发工作流。
 * @class
 */
class WorkflowTrigger extends AbstractModel {

    Type: string | null
    
    CosFileUploadTrigger: CosFileUploadTrigger | null
    
    constructor(){
        super();

        /**
         * 触发器的类型，目前仅支持 CosFileUpload。
         */
        this.Type = null;

        /**
         * 当 Type 为 CosFileUpload 时必填且有效，为 COS 触发规则。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CosFileUploadTrigger = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        CosFileUploadTrigger: CosFileUploadTrigger | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosFileUploadTrigger) {
            let obj = new CosFileUploadTrigger();
            obj.deserialize(params.CosFileUploadTrigger)
            this.CosFileUploadTrigger = obj;
        }

    }
}

/**
 * 直播流 AI 识别结果
 * @class
 */
class LiveStreamAiRecognitionResultInfo extends AbstractModel {

    ResultSet: Array<LiveStreamAiRecognitionResultItem> | null
    
    constructor(){
        super();

        /**
         * 内容识别结果列表。
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultSet: Array<LiveStreamAiRecognitionResultItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new LiveStreamAiRecognitionResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * 直播 AI 内容审核图片鉴政结果
 * @class
 */
class LiveStreamAiReviewImagePoliticalResult extends AbstractModel {

    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    Name: string | null
    
    AreaCoordSet: Array<number> | null
    
    Url: string | null
    
    PicUrlExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉政分数。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         */
        this.Suggestion = null;

        /**
         * 视频鉴政结果标签，取值范围：
<li>politician：政治人物。</li>
<li>violation_photo：违规图标。</li>
         */
        this.Label = null;

        /**
         * 涉政人物、违规图标名字。
         */
        this.Name = null;

        /**
         * 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
        Suggestion: string | null;
        Label: string | null;
        Name: string | null;
        AreaCoordSet: Array<number> | null;
        Url: string | null;
        PicUrlExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * 文本鉴恐任务控制参数
 * @class
 */
class TerrorismOcrReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本鉴恐任务开关，可选值：
<li>ON：开启文本鉴恐任务；</li>
<li>OFF：关闭文本鉴恐任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 用户自定义语音审核任务控制参数
 * @class
 */
class UserDefineAsrTextReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 用户自定语音审核任务开关，可选值：
<li>ON：开启自定义语音审核任务；</li>
<li>OFF：关闭自定义语音审核任务。</li>
         */
        this.Switch = null;

        /**
         * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyImageSpriteTemplate返回参数结构体
 * @class
 */
class ModifyImageSpriteTemplateResponse extends AbstractModel {

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
 * CreateWatermarkTemplate请求参数结构体
 * @class
 */
class CreateWatermarkTemplateRequest extends AbstractModel {

    Type: string | null
    
    Name: string | null
    
    Comment: string | null
    
    CoordinateOrigin: string | null
    
    XPos: string | null
    
    YPos: string | null
    
    ImageTemplate: ImageWatermarkInput | null
    
    TextTemplate: TextWatermarkTemplateInput | null
    
    SvgTemplate: SvgWatermarkInput | null
    
    constructor(){
        super();

        /**
         * 水印类型，可选值：
<li>image：图片水印；</li>
<li>text：文字水印；</li>
<li>svg：SVG 水印。</li>
         */
        this.Type = null;

        /**
         * 水印模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 原点位置，可选值：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
默认值：TopLeft。
         */
        this.CoordinateOrigin = null;

        /**
         * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
         */
        this.XPos = null;

        /**
         * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
         */
        this.YPos = null;

        /**
         * 图片水印模板，仅当 Type 为 image，该字段必填且有效。
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，仅当 Type 为 text，该字段必填且有效。
         */
        this.TextTemplate = null;

        /**
         * SVG 水印模板，仅当 Type 为 svg，该字段必填且有效。
         */
        this.SvgTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Name: string | null;
        Comment: string | null;
        CoordinateOrigin: string | null;
        XPos: string | null;
        YPos: string | null;
        ImageTemplate: ImageWatermarkInput | null;
        TextTemplate: TextWatermarkTemplateInput | null;
        SvgTemplate: SvgWatermarkInput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }

    }
}

/**
 * 鉴恐任务控制参数。
 * @class
 */
class TerrorismConfigureInfoForUpdate extends AbstractModel {

    ImgReviewInfo: TerrorismImgReviewTemplateInfoForUpdate | null
    
    OcrReviewInfo: TerrorismOcrReviewTemplateInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 画面鉴恐任务控制参数。
         */
        this.ImgReviewInfo = null;

        /**
         * 文本鉴恐任务控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImgReviewInfo: TerrorismImgReviewTemplateInfoForUpdate | null;
        OcrReviewInfo: TerrorismOcrReviewTemplateInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new TerrorismImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 转动图任务类型。
 * @class
 */
class AnimatedGraphicTaskInput extends AbstractModel {

    Definition: number | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputObjectPath: string | null
    
    constructor(){
        super();

        /**
         * 视频转动图模板 ID。
         */
        this.Definition = null;

        /**
         * 动图在视频中的开始时间，单位为秒。
         */
        this.StartTimeOffset = null;

        /**
         * 动图在视频中的结束时间，单位为秒。
         */
        this.EndTimeOffset = null;

        /**
         * 转动图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OutputStorage = null;

        /**
         * 转动图后文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_animatedGraphic_{definition}.{format}`。
         */
        this.OutputObjectPath = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        OutputStorage: TaskOutputStorage | null;
        OutputObjectPath: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

    }
}

/**
 * DeleteContentReviewTemplate请求参数结构体
 * @class
 */
class DeleteContentReviewTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * AI 智能分析模板详情
 * @class
 */
class AIAnalysisTemplateItem extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Comment: string | null
    
    ClassificationConfigure: ClassificationConfigureInfo | null
    
    TagConfigure: TagConfigureInfo | null
    
    CoverConfigure: CoverConfigureInfo | null
    
    FrameTagConfigure: FrameTagConfigureInfo | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 智能分析模板唯一标识。
         */
        this.Definition = null;

        /**
         * 智能分析模板名称。
         */
        this.Name = null;

        /**
         * 智能分析模板描述信息。
         */
        this.Comment = null;

        /**
         * 智能分类任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClassificationConfigure = null;

        /**
         * 智能标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagConfigure = null;

        /**
         * 智能封面任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CoverConfigure = null;

        /**
         * 智能按帧标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FrameTagConfigure = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        ClassificationConfigure: ClassificationConfigureInfo | null;
        TagConfigure: TagConfigureInfo | null;
        CoverConfigure: CoverConfigureInfo | null;
        FrameTagConfigure: FrameTagConfigureInfo | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 图片水印模板输入参数
 * @class
 */
class RawImageWatermarkInput extends AbstractModel {

    ImageContent: MediaInputInfo | null
    
    Width: string | null
    
    Height: string | null
    
    constructor(){
        super();

        /**
         * 水印图片的输入内容。支持 jpeg、png 图片格式。
         */
        this.ImageContent = null;

        /**
         * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
默认值：10%。
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageContent: MediaInputInfo | null;
        Width: string | null;
        Height: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImageContent) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.ImageContent)
            this.ImageContent = obj;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DescribeImageSpriteTemplates请求参数结构体
 * @class
 */
class DescribeImageSpriteTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    Type: string | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * AI 样本管理，标签操作。
 * @class
 */
class AiSampleTagOperation extends AbstractModel {

    Type: string | null
    
    Tags: Array<string> | null
    
    constructor(){
        super();

        /**
         * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。
         */
        this.Type = null;

        /**
         * 标签，长度限制：128 个字符。
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Tags: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * CreateAIRecognitionTemplate返回参数结构体
 * @class
 */
class CreateAIRecognitionTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTranscodeTemplate请求参数结构体
 * @class
 */
class DeleteTranscodeTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 暴恐信息
 * @class
 */
class AiReviewTerrorismTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    SegmentSet: Array<MediaContentReviewSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 视频暴恐评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * 暴恐结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * 视频暴恐结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：暴恐旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：暴恐人物。</li>
         */
        this.Label = null;

        /**
         * 有暴恐嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        Label: string | null;
        SegmentSet: Array<MediaContentReviewSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 违禁任务控制参数
 * @class
 */
class ProhibitedConfigureInfo extends AbstractModel {

    AsrReviewInfo: ProhibitedAsrReviewTemplateInfo | null
    
    OcrReviewInfo: ProhibitedOcrReviewTemplateInfo | null
    
    constructor(){
        super();

        /**
         * 语音违禁控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本违禁控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AsrReviewInfo: ProhibitedAsrReviewTemplateInfo | null;
        OcrReviewInfo: ProhibitedOcrReviewTemplateInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AsrReviewInfo) {
            let obj = new ProhibitedAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * Ocr 文字涉恐信息
 * @class
 */
class AiReviewTerrorismOcrTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * Ocr 文字涉恐评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉恐结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉恐嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 智能分析结果
 * @class
 */
class AiAnalysisResult extends AbstractModel {

    Type: string | null
    
    ClassificationTask: AiAnalysisTaskClassificationResult | null
    
    CoverTask: AiAnalysisTaskCoverResult | null
    
    TagTask: AiAnalysisTaskTagResult | null
    
    FrameTagTask: AiAnalysisTaskFrameTagResult | null
    
    constructor(){
        super();

        /**
         * 任务的类型，可以取的值有：
<li>Classification：智能分类</li>
<li>Cover：智能封面</li>
<li>Tag：智能标签</li>
<li>FrameTag：智能按帧标签</li>
<li>Highlight：智能精彩集锦</li>
         */
        this.Type = null;

        /**
         * 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClassificationTask = null;

        /**
         * 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CoverTask = null;

        /**
         * 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagTask = null;

        /**
         * 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FrameTagTask = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        ClassificationTask: AiAnalysisTaskClassificationResult | null;
        CoverTask: AiAnalysisTaskCoverResult | null;
        TagTask: AiAnalysisTaskTagResult | null;
        FrameTagTask: AiAnalysisTaskFrameTagResult | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ClassificationTask) {
            let obj = new AiAnalysisTaskClassificationResult();
            obj.deserialize(params.ClassificationTask)
            this.ClassificationTask = obj;
        }

        if (params.CoverTask) {
            let obj = new AiAnalysisTaskCoverResult();
            obj.deserialize(params.CoverTask)
            this.CoverTask = obj;
        }

        if (params.TagTask) {
            let obj = new AiAnalysisTaskTagResult();
            obj.deserialize(params.TagTask)
            this.TagTask = obj;
        }

        if (params.FrameTagTask) {
            let obj = new AiAnalysisTaskFrameTagResult();
            obj.deserialize(params.FrameTagTask)
            this.FrameTagTask = obj;
        }

    }
}

/**
 * DescribeAIAnalysisTemplates请求参数结构体
 * @class
 */
class DescribeAIAnalysisTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识过滤条件，数组长度限制：10。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 文本关键词识别结果。
 * @class
 */
class AiRecognitionTaskOcrWordsResultItem extends AbstractModel {

    Word: string | null
    
    SegmentSet: Array<AiRecognitionTaskOcrWordsSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 文本关键词。
         */
        this.Word = null;

        /**
         * 文本关键出现的片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Word: string | null;
        SegmentSet: Array<AiRecognitionTaskOcrWordsSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSampleSnapshotTemplate返回参数结构体
 * @class
 */
class DeleteSampleSnapshotTemplateResponse extends AbstractModel {

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
 * 智能标签任务输入类型
 * @class
 */
class AiAnalysisTaskTagInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频智能标签模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * ResetWorkflow请求参数结构体
 * @class
 */
class ResetWorkflowRequest extends AbstractModel {

    WorkflowId: number | null
    
    WorkflowName: string | null
    
    Trigger: WorkflowTrigger | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputDir: string | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    TaskPriority: number | null
    
    TaskNotifyConfig: TaskNotifyConfig | null
    
    constructor(){
        super();

        /**
         * 工作流 ID。
         */
        this.WorkflowId = null;

        /**
         * 工作流名称，最多128字符。同一个用户该名称唯一。
         */
        this.WorkflowName = null;

        /**
         * 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。
         */
        this.Trigger = null;

        /**
         * 视频处理的文件输出配置。不填则继承 Trigger 中的存储位置。
         */
        this.OutputStorage = null;

        /**
         * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致，即`{inputDir}`。
         */
        this.OutputDir = null;

        /**
         * 视频处理类型任务参数。
         */
        this.MediaProcessTask = null;

        /**
         * 视频内容审核类型任务参数。
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容分析类型任务参数。
         */
        this.AiAnalysisTask = null;

        /**
         * 视频内容识别类型任务参数。
         */
        this.AiRecognitionTask = null;

        /**
         * 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         */
        this.TaskPriority = null;

        /**
         * 任务的事件通知信息，不填代表不获取事件通知。
         */
        this.TaskNotifyConfig = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowId: number | null;
        WorkflowName: string | null;
        Trigger: WorkflowTrigger | null;
        OutputStorage: TaskOutputStorage | null;
        OutputDir: string | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        TaskPriority: number | null;
        TaskNotifyConfig: TaskNotifyConfig | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

    }
}

/**
 * 内容审核鉴恐任务结果类型
 * @class
 */
class AiReviewTaskTerrorismResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewTerrorismTaskInput | null
    
    Output: AiReviewTerrorismTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核鉴恐任务输入。
         */
        this.Input = null;

        /**
         * 内容审核鉴恐任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewTerrorismTaskInput | null;
        Output: AiReviewTerrorismTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 直播 AI 内容审核声音鉴黄结果
 * @class
 */
class LiveStreamAiReviewVoicePornResult extends AbstractModel {

    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉黄分数。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
<li>sexual_moan：呻吟。</li>
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
        Suggestion: string | null;
        Label: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * 内容审核 Asr 文字审核嫌疑片段
 * @class
 */
class MediaContentReviewAsrTextSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Confidence: number | null
    
    Suggestion: string | null
    
    KeywordSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
         */
        this.KeywordSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Confidence: number | null;
        Suggestion: string | null;
        KeywordSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;

    }
}

/**
 * 内容审核涉政嫌疑片段
 * @class
 */
class MediaContentReviewPoliticalSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Confidence: number | null
    
    Suggestion: string | null
    
    Name: string | null
    
    Label: string | null
    
    Url: string | null
    
    AreaCoordSet: Array<number> | null
    
    PicUrlExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉政分数。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴政结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * 涉政人物、违规图标名字。
         */
        this.Name = null;

        /**
         * 嫌疑片段鉴政结果标签。内容审核模板[画面鉴政任务控制参数](https://cloud.tencent.com/document/api/862/37615#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
violation_photo：
<li>violation_photo：违规图标。</li>
politician：
<li>nation_politician：国家领导人；</li>
<li>province_politician: 省部级领导人；</li>
<li>bureau_politician：厅局级领导人；</li>
<li>county_politician：县处级领导人；</li>
<li>rural_politician：乡科级领导人；</li>
<li>sensitive_politician：敏感政治人物；</li>
<li>foreign_politician：国外领导人。</li>
entertainment：
<li>sensitive_entertainment：敏感娱乐人物。</li>
sport：
<li>sensitive_sport：敏感体育人物。</li>
entrepreneur：
<li>sensitive_entrepreneur：敏感商业人物。</li>
scholar：
<li>sensitive_scholar：敏感教育学者。</li>
celebrity：
<li>sensitive_celebrity：敏感知名人物；</li>
<li>historical_celebrity：历史知名人物。</li>
military：
<li>sensitive_military：敏感军事人物。</li>
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
         */
        this.Url = null;

        /**
         * 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
         */
        this.AreaCoordSet = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Confidence: number | null;
        Suggestion: string | null;
        Name: string | null;
        Label: string | null;
        Url: string | null;
        AreaCoordSet: Array<number> | null;
        PicUrlExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * DeletePersonSample返回参数结构体
 * @class
 */
class DeletePersonSampleResponse extends AbstractModel {

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
 * CreateSnapshotByTimeOffsetTemplate返回参数结构体
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 时间点截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyContentReviewTemplate请求参数结构体
 * @class
 */
class ModifyContentReviewTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Comment: string | null
    
    PornConfigure: PornConfigureInfoForUpdate | null
    
    TerrorismConfigure: TerrorismConfigureInfoForUpdate | null
    
    PoliticalConfigure: PoliticalConfigureInfoForUpdate | null
    
    ProhibitedConfigure: ProhibitedConfigureInfoForUpdate | null
    
    UserDefineConfigure: UserDefineConfigureInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         */
        this.Definition = null;

        /**
         * 内容审核模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 内容审核模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 鉴黄控制参数。
         */
        this.PornConfigure = null;

        /**
         * 鉴恐控制参数。
         */
        this.TerrorismConfigure = null;

        /**
         * 鉴政控制参数。
         */
        this.PoliticalConfigure = null;

        /**
         * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此参数尚未支持。
         */
        this.ProhibitedConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
         */
        this.UserDefineConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        PornConfigure: PornConfigureInfoForUpdate | null;
        TerrorismConfigure: TerrorismConfigureInfoForUpdate | null;
        PoliticalConfigure: PoliticalConfigureInfoForUpdate | null;
        ProhibitedConfigure: ProhibitedConfigureInfoForUpdate | null;
        UserDefineConfigure: UserDefineConfigureInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfoForUpdate();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfoForUpdate();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfoForUpdate();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfoForUpdate();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfoForUpdate();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

    }
}

/**
 * 图片水印模板输入参数
 * @class
 */
class ImageWatermarkInputForUpdate extends AbstractModel {

    ImageContent: string | null
    
    Width: string | null
    
    Height: string | null
    
    constructor(){
        super();

        /**
         * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。
         */
        this.ImageContent = null;

        /**
         * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
         */
        this.Width = null;

        /**
         * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageContent: string | null;
        Width: string | null;
        Height: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 智能内容审核任务类型
 * @class
 */
class AiContentReviewTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频内容审核模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateAdaptiveDynamicStreamingTemplate返回参数结构体
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 自适应转码模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSampleSnapshotTemplate请求参数结构体
 * @class
 */
class DeleteSampleSnapshotTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * AI 视频智能分析输入参数类型
 * @class
 */
class AiAnalysisTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 雪碧图模板详情
 * @class
 */
class ImageSpriteTemplate extends AbstractModel {

    Definition: number | null
    
    Type: string | null
    
    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    SampleType: string | null
    
    SampleInterval: number | null
    
    RowCount: number | null
    
    ColumnCount: number | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    FillType: string | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 雪碧图模板名称。
         */
        this.Name = null;

        /**
         * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 采样类型。
         */
        this.SampleType = null;

        /**
         * 采样间隔。
         */
        this.SampleInterval = null;

        /**
         * 雪碧图中小图的行数。
         */
        this.RowCount = null;

        /**
         * 雪碧图中小图的列数。
         */
        this.ColumnCount = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         */
        this.FillType = null;

        /**
         * 模板描述信息。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Type: string | null;
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        SampleType: string | null;
        SampleInterval: number | null;
        RowCount: number | null;
        ColumnCount: number | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        FillType: string | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 文本全文识别片段。
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentTextItem extends AbstractModel {

    Confidence: number | null
    
    AreaCoordSet: Array<number> | null
    
    Text: string | null
    
    constructor(){
        super();

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         */
        this.AreaCoordSet = null;

        /**
         * 识别文本。
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        AreaCoordSet: Array<number> | null;
        Text: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 直播识别 Asr 全文识别
 * @class
 */
class LiveStreamAsrFullTextRecognitionResult extends AbstractModel {

    Text: string | null
    
    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 识别文本。
         */
        this.Text = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Text: string | null;
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Ocr 文字涉黄信息
 * @class
 */
class AiReviewPornOcrTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * Ocr 文字涉黄评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉黄嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * CreateSampleSnapshotTemplate返回参数结构体
 * @class
 */
class CreateSampleSnapshotTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 语音违禁任务控制参数
 * @class
 */
class ProhibitedAsrReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 语音违禁任务开关，可选值：
<li>ON：开启语音违禁任务；</li>
<li>OFF：关闭语音违禁任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 内容审核 Asr 文字鉴政、敏感任务输入参数类型
 * @class
 */
class AiReviewPoliticalAsrTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴政模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 智能标签结果信息
 * @class
 */
class MediaAiAnalysisTagItem extends AbstractModel {

    Tag: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 标签名称。
         */
        this.Tag = null;

        /**
         * 标签的可信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tag: string | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 转码模板详情
 * @class
 */
class TranscodeTemplate extends AbstractModel {

    Definition: string | null
    
    Container: string | null
    
    Name: string | null
    
    Comment: string | null
    
    Type: string | null
    
    RemoveVideo: number | null
    
    RemoveAudio: number | null
    
    VideoTemplate: VideoTemplateInfo | null
    
    AudioTemplate: AudioTemplateInfo | null
    
    TEHDConfig: TEHDConfig | null
    
    ContainerType: string | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         */
        this.Definition = null;

        /**
         * 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。
         */
        this.Container = null;

        /**
         * 转码模板名称。
         */
        this.Name = null;

        /**
         * 模板描述信息。
         */
        this.Comment = null;

        /**
         * 模板类型，取值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
         */
        this.RemoveVideo = null;

        /**
         * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
         */
        this.RemoveAudio = null;

        /**
         * 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
         */
        this.AudioTemplate = null;

        /**
         * 极速高清转码参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TEHDConfig = null;

        /**
         * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式板。</li>
         */
        this.ContainerType = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: string | null;
        Container: string | null;
        Name: string | null;
        Comment: string | null;
        Type: string | null;
        RemoveVideo: number | null;
        RemoveAudio: number | null;
        VideoTemplate: VideoTemplateInfo | null;
        AudioTemplate: AudioTemplateInfo | null;
        TEHDConfig: TEHDConfig | null;
        ContainerType: string | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 文本鉴黄任务控制参数
 * @class
 */
class PornOcrReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本鉴黄任务开关，可选值：
<li>ON：开启文本鉴黄任务；</li>
<li>OFF：关闭文本鉴黄任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 内容审核 Asr 文字鉴政、敏感任务结果类型
 * @class
 */
class AiReviewTaskPoliticalAsrResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewPoliticalAsrTaskInput | null
    
    Output: AiReviewPoliticalAsrTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核 Asr 文字鉴政任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字鉴政任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewPoliticalAsrTaskInput | null;
        Output: AiReviewPoliticalAsrTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 语音识别片段。
 * @class
 */
class AiRecognitionTaskAsrWordsSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 鉴黄任务控制参数。
 * @class
 */
class PornConfigureInfoForUpdate extends AbstractModel {

    ImgReviewInfo: PornImgReviewTemplateInfoForUpdate | null
    
    AsrReviewInfo: PornAsrReviewTemplateInfoForUpdate | null
    
    OcrReviewInfo: PornOcrReviewTemplateInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 画面鉴黄控制参数。
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴黄控制参数。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴黄控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImgReviewInfo: PornImgReviewTemplateInfoForUpdate | null;
        AsrReviewInfo: PornAsrReviewTemplateInfoForUpdate | null;
        OcrReviewInfo: PornOcrReviewTemplateInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PornImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 内容审核 Asr 文字鉴违禁任务输入参数类型
 * @class
 */
class AiReviewProhibitedAsrTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴违禁模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 内容审核涉黄/暴恐嫌疑片段
 * @class
 */
class MediaContentReviewSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Confidence: number | null
    
    Label: string | null
    
    Suggestion: string | null
    
    Url: string | null
    
    PicUrlExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉黄分数。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果标签。
         */
        this.Label = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Confidence: number | null;
        Label: string | null;
        Suggestion: string | null;
        Url: string | null;
        PicUrlExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * 文本鉴恐任务控制参数
 * @class
 */
class TerrorismOcrReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本鉴恐任务开关，可选值：
<li>ON：开启文本鉴恐任务；</li>
<li>OFF：关闭文本鉴恐任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 内容审核鉴黄任务结果类型
 * @class
 */
class AiReviewTaskPornResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewPornTaskInput | null
    
    Output: AiReviewPornTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核鉴黄任务输入。
         */
        this.Input = null;

        /**
         * 内容审核鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewPornTaskInput | null;
        Output: AiReviewPornTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Asr 文字涉违禁信息
 * @class
 */
class AiReviewProhibitedAsrTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    SegmentSet: Array<MediaContentReviewAsrTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * Asr 文字涉违禁评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * Asr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉违禁嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        SegmentSet: Array<MediaContentReviewAsrTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 直播 AI 人脸识别结果
 * @class
 */
class LiveStreamFaceRecognitionResult extends AbstractModel {

    Id: string | null
    
    Name: string | null
    
    Type: string | null
    
    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    AreaCoordSet: Array<number> | null
    
    constructor(){
        super();

        /**
         * 人物唯一标识 ID。
         */
        this.Id = null;

        /**
         * 人物名称。
         */
        this.Name = null;

        /**
         * 人物库类型，表示识别出的人物来自哪个人物库：
<li>Default：默认人物库；</li><li>UserDefine：用户自定义人物库。</li>
         */
        this.Type = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: string | null;
        Name: string | null;
        Type: string | null;
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
        AreaCoordSet: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * DescribeSampleSnapshotTemplates请求参数结构体
 * @class
 */
class DescribeSampleSnapshotTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    Type: string | null
    
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 智能封面任务控制参数
 * @class
 */
class CoverConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能封面任务开关，可选值：
<li>ON：开启智能封面任务；</li>
<li>OFF：关闭智能封面任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DisableWorkflow返回参数结构体
 * @class
 */
class DisableWorkflowResponse extends AbstractModel {

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
 * 采样截图模板详情
 * @class
 */
class SampleSnapshotTemplate extends AbstractModel {

    Definition: number | null
    
    Type: string | null
    
    Name: string | null
    
    Comment: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    SampleType: string | null
    
    SampleInterval: number | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 采样截图模板名称。
         */
        this.Name = null;

        /**
         * 模板描述信息。
         */
        this.Comment = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 图片格式。
         */
        this.Format = null;

        /**
         * 采样截图类型。
         */
        this.SampleType = null;

        /**
         * 采样间隔。
         */
        this.SampleInterval = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Type: string | null;
        Name: string | null;
        Comment: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        SampleType: string | null;
        SampleInterval: number | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 画面鉴政任务控制参数。
 * @class
 */
class PoliticalImgReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 画面鉴政任务开关，可选值：
<li>ON：开启画面鉴政任务；</li>
<li>OFF：关闭画面鉴政任务。</li>
         */
        this.Switch = null;

        /**
         * 画面鉴政过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：政治人物；</li>
<li>entertainment：娱乐人物；</li>
<li>sport：体育人物；</li>
<li>entrepreneur：商业人物；</li>
<li>scholar：教育学者；</li>
<li>celebrity：知名人物；</li>
<li>military：军事人物。</li>
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 用户自定义文本审核任务控制参数
 * @class
 */
class UserDefineOcrTextReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 用户自定文本审核任务开关，可选值：
<li>ON：开启自定义文本审核任务；</li>
<li>OFF：关闭自定义文本审核任务。</li>
         */
        this.Switch = null;

        /**
         * 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 自适应转码流参数模板
 * @class
 */
class AdaptiveStreamTemplate extends AbstractModel {

    Video: VideoTemplateInfo | null
    
    Audio: AudioTemplateInfo | null
    
    RemoveAudio: number | null
    
    RemoveVideo: number | null
    
    constructor(){
        super();

        /**
         * 视频参数信息。
         */
        this.Video = null;

        /**
         * 音频参数信息。
         */
        this.Audio = null;

        /**
         * 是否移除音频流，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         */
        this.RemoveAudio = null;

        /**
         * 是否移除视频流，取值范围：
<li>0：否，</li>
<li>1：是。</li>
         */
        this.RemoveVideo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Video: VideoTemplateInfo | null;
        Audio: AudioTemplateInfo | null;
        RemoveAudio: number | null;
        RemoveVideo: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Video) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.Video)
            this.Video = obj;
        }

        if (params.Audio) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.Audio)
            this.Audio = obj;
        }
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;

    }
}

/**
 * 转码任务输入参数类型
 * @class
 */
class TranscodeTaskInput extends AbstractModel {

    Definition: number | null
    
    RawParameter: RawTranscodeParameter | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
    MosaicSet: Array<MosaicInput> | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputObjectPath: string | null
    
    SegmentObjectName: string | null
    
    ObjectNumberFormat: NumberFormat | null
    
    constructor(){
        super();

        /**
         * 视频转码模板 ID。
         */
        this.Definition = null;

        /**
         * 视频转码自定义参数，当 Definition 填 0 时有效。
该参数用于高度定制场景，建议您优先使用 Definition 指定转码参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RawParameter = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WatermarkSet = null;

        /**
         * 马赛克列表，最大可支持 10 张。
         */
        this.MosaicSet = null;

        /**
         * 转码后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OutputStorage = null;

        /**
         * 转码后主文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_transcode_{definition}.{format}`。
         */
        this.OutputObjectPath = null;

        /**
         * 转码后分片文件的输出路径（转码 HLS 时 ts 的路径），只能为相对路径。如果不填，则默认为：`{inputName}_transcode_{definition}_{number}.{format}`。
         */
        this.SegmentObjectName = null;

        /**
         * 转码后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RawParameter: RawTranscodeParameter | null;
        WatermarkSet: Array<WatermarkInput> | null;
        MosaicSet: Array<MosaicInput> | null;
        OutputStorage: TaskOutputStorage | null;
        OutputObjectPath: string | null;
        SegmentObjectName: string | null;
        ObjectNumberFormat: NumberFormat | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.RawParameter) {
            let obj = new RawTranscodeParameter();
            obj.deserialize(params.RawParameter)
            this.RawParameter = obj;
        }

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.MosaicSet) {
            this.MosaicSet = new Array();
            for (let z in params.MosaicSet) {
                let obj = new MosaicInput();
                obj.deserialize(params.MosaicSet[z]);
                this.MosaicSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.SegmentObjectName = 'SegmentObjectName' in params ? params.SegmentObjectName : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * ModifyAIRecognitionTemplate请求参数结构体
 * @class
 */
class ModifyAIRecognitionTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Comment: string | null
    
    FaceConfigure: FaceConfigureInfoForUpdate | null
    
    OcrFullTextConfigure: OcrFullTextConfigureInfoForUpdate | null
    
    OcrWordsConfigure: OcrWordsConfigureInfoForUpdate | null
    
    AsrFullTextConfigure: AsrFullTextConfigureInfoForUpdate | null
    
    AsrWordsConfigure: AsrWordsConfigureInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         */
        this.Definition = null;

        /**
         * 视频内容识别模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 视频内容识别模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 人脸识别控制参数。
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
         */
        this.AsrWordsConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        FaceConfigure: FaceConfigureInfoForUpdate | null;
        OcrFullTextConfigure: OcrFullTextConfigureInfoForUpdate | null;
        OcrWordsConfigure: OcrWordsConfigureInfoForUpdate | null;
        AsrFullTextConfigure: AsrFullTextConfigureInfoForUpdate | null;
        AsrWordsConfigure: AsrWordsConfigureInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfoForUpdate();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfoForUpdate();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfoForUpdate();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }

    }
}

/**
 * ParseNotification返回参数结构体
 * @class
 */
class ParseNotificationResponse extends AbstractModel {

    EventType: string | null
    
    WorkflowTaskEvent: WorkflowTask | null
    
    EditMediaTaskEvent: EditMediaTask | null
    
    SessionId: string | null
    
    SessionContext: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 支持事件类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
<li>EditMediaTask：视频编辑任务。</li>
         */
        this.EventType = null;

        /**
         * 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WorkflowTaskEvent = null;

        /**
         * 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EditMediaTaskEvent = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
         */
        this.SessionContext = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventType: string | null;
        WorkflowTaskEvent: WorkflowTask | null;
        EditMediaTaskEvent: EditMediaTask | null;
        SessionId: string | null;
        SessionContext: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventType = 'EventType' in params ? params.EventType : null;

        if (params.WorkflowTaskEvent) {
            let obj = new WorkflowTask();
            obj.deserialize(params.WorkflowTaskEvent)
            this.WorkflowTaskEvent = obj;
        }

        if (params.EditMediaTaskEvent) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTaskEvent)
            this.EditMediaTaskEvent = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetWorkflow返回参数结构体
 * @class
 */
class ResetWorkflowResponse extends AbstractModel {

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
 * CreateAIAnalysisTemplate返回参数结构体
 * @class
 */
class CreateAIAnalysisTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对视频做采样截图任务结果类型
 * @class
 */
class MediaProcessTaskSampleSnapshotResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: SampleSnapshotTaskInput | null
    
    Output: MediaSampleSnapshotItem | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败：
<li>40000：输入参数不合法，请检查输入参数；</li>
<li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
<li>70000：内部服务错误，建议重试。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 对视频做采样截图任务输入。
         */
        this.Input = null;

        /**
         * 对视频做采样截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: SampleSnapshotTaskInput | null;
        Output: MediaSampleSnapshotItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SampleSnapshotTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSampleSnapshotItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 用户自定义审核任务控制参数。
 * @class
 */
class UserDefineConfigureInfoForUpdate extends AbstractModel {

    FaceReviewInfo: UserDefineFaceReviewTemplateInfoForUpdate | null
    
    AsrReviewInfo: UserDefineAsrTextReviewTemplateInfoForUpdate | null
    
    OcrReviewInfo: UserDefineOcrTextReviewTemplateInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 用户自定义人物审核控制参数。
         */
        this.FaceReviewInfo = null;

        /**
         * 用户自定义语音审核控制参数。
         */
        this.AsrReviewInfo = null;

        /**
         * 用户自定义文本审核控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FaceReviewInfo: UserDefineFaceReviewTemplateInfoForUpdate | null;
        AsrReviewInfo: UserDefineAsrTextReviewTemplateInfoForUpdate | null;
        OcrReviewInfo: UserDefineOcrTextReviewTemplateInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FaceReviewInfo) {
            let obj = new UserDefineFaceReviewTemplateInfoForUpdate();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 绑定到 COS 的输入规则。
 * @class
 */
class CosFileUploadTrigger extends AbstractModel {

    Bucket: string | null
    
    Region: string | null
    
    Dir: string | null
    
    Formats: Array<string> | null
    
    constructor(){
        super();

        /**
         * 工作流绑定的 COS Bucket 名，如 TopRankVideo-125xxx88。
         */
        this.Bucket = null;

        /**
         * 工作流绑定的 COS Bucket 所属园区，如 ap-chongiqng。
         */
        this.Region = null;

        /**
         * 工作流绑定的输入路径目录，必须为绝对路径，即以 `/` 开头和结尾。如`/movie/201907/`，不填代表根目录`/`。
         */
        this.Dir = null;

        /**
         * 工作流允许触发的文件格式列表，如 ["mp4", "flv", "mov"]。不填代表所有格式的文件都可以触发工作流。
         */
        this.Formats = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Bucket: string | null;
        Region: string | null;
        Dir: string | null;
        Formats: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dir = 'Dir' in params ? params.Dir : null;
        this.Formats = 'Formats' in params ? params.Formats : null;

    }
}

/**
 * Asr 文字涉政信息
 * @class
 */
class AiReviewPoliticalAsrTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    SegmentSet: Array<MediaContentReviewAsrTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * Asr 文字涉政、敏感评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * Asr 文字涉政、敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉政、敏感嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        SegmentSet: Array<MediaContentReviewAsrTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 极速高清参数配置。
 * @class
 */
class TEHDConfigForUpdate extends AbstractModel {

    Type: string | null
    
    MaxVideoBitrate: number | null
    
    constructor(){
        super();

        /**
         * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100。</li>
不填代表不修改。
         */
        this.Type = null;

        /**
         * 视频码率上限，不填代表不修改。
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        MaxVideoBitrate: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * ModifyPersonSample请求参数结构体
 * @class
 */
class ModifyPersonSampleRequest extends AbstractModel {

    PersonId: string | null
    
    Name: string | null
    
    Description: string | null
    
    Usages: Array<string> | null
    
    FaceOperationInfo: AiSampleFaceOperation | null
    
    TagOperationInfo: AiSampleTagOperation | null
    
    constructor(){
        super();

        /**
         * 人物 ID。
         */
        this.PersonId = null;

        /**
         * 名称，长度限制：128 个字符。
         */
        this.Name = null;

        /**
         * 描述，长度限制：1024 个字符。
         */
        this.Description = null;

        /**
         * 人物应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于内容审核，等价于 Review.Face。
3. All：用于内容识别、内容审核，等价于 1+2。
         */
        this.Usages = null;

        /**
         * 人脸操作信息。
         */
        this.FaceOperationInfo = null;

        /**
         * 标签操作信息。
         */
        this.TagOperationInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonId: string | null;
        Name: string | null;
        Description: string | null;
        Usages: Array<string> | null;
        FaceOperationInfo: AiSampleFaceOperation | null;
        TagOperationInfo: AiSampleTagOperation | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.FaceOperationInfo) {
            let obj = new AiSampleFaceOperation();
            obj.deserialize(params.FaceOperationInfo)
            this.FaceOperationInfo = obj;
        }

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }

    }
}

/**
 * 语音全文识别任务控制参数
 * @class
 */
class AsrFullTextConfigureInfo extends AbstractModel {

    Switch: string | null
    
    SubtitleFormat: string | null
    
    constructor(){
        super();

        /**
         * 语音全文识别任务开关，可选值：
<li>ON：开启智能语音全文识别任务；</li>
<li>OFF：关闭智能语音全文识别任务。</li>
         */
        this.Switch = null;

        /**
         * 生成的字幕文件格式，不填或者填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
         */
        this.SubtitleFormat = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        SubtitleFormat: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubtitleFormat = 'SubtitleFormat' in params ? params.SubtitleFormat : null;

    }
}

/**
 * DescribeMediaMetaData返回参数结构体
 * @class
 */
class DescribeMediaMetaDataResponse extends AbstractModel {

    MetaData: MediaMetaData | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 媒体元信息。
         */
        this.MetaData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MetaData: MediaMetaData | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAIRecognitionTemplate请求参数结构体
 * @class
 */
class CreateAIRecognitionTemplateRequest extends AbstractModel {

    Name: string | null
    
    Comment: string | null
    
    FaceConfigure: FaceConfigureInfo | null
    
    OcrFullTextConfigure: OcrFullTextConfigureInfo | null
    
    OcrWordsConfigure: OcrWordsConfigureInfo | null
    
    AsrFullTextConfigure: AsrFullTextConfigureInfo | null
    
    AsrWordsConfigure: AsrWordsConfigureInfo | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 视频内容识别模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 人脸识别控制参数。
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
         */
        this.AsrWordsConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Comment: string | null;
        FaceConfigure: FaceConfigureInfo | null;
        OcrFullTextConfigure: OcrFullTextConfigureInfo | null;
        OcrWordsConfigure: OcrWordsConfigureInfo | null;
        AsrFullTextConfigure: AsrFullTextConfigureInfo | null;
        AsrWordsConfigure: AsrWordsConfigureInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfo();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfo();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfo();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfo();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfo();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }

    }
}

/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends AbstractModel {

    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 视频处理任务的任务 ID。
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 智能按帧标签结果类型
 * @class
 */
class AiAnalysisTaskFrameTagResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiAnalysisTaskFrameTagInput | null
    
    Output: AiAnalysisTaskFrameTagOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 智能按帧标签任务输入。
         */
        this.Input = null;

        /**
         * 智能按帧标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiAnalysisTaskFrameTagInput | null;
        Output: AiAnalysisTaskFrameTagOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskFrameTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskFrameTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 鉴黄结果信息
 * @class
 */
class AiReviewPornTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    SegmentSet: Array<MediaContentReviewSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 视频鉴黄评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * 鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
         */
        this.Label = null;

        /**
         * 有涉黄嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        Label: string | null;
        SegmentSet: Array<MediaContentReviewSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * CreateWorkflow返回参数结构体
 * @class
 */
class CreateWorkflowResponse extends AbstractModel {

    WorkflowId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 工作流 ID。
         */
        this.WorkflowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 语音全文识别结果。
 * @class
 */
class AiRecognitionTaskAsrFullTextResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskAsrFullTextResultInput | null
    
    Output: AiRecognitionTaskAsrFullTextResultOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 语音全文识别任务输入信息。
         */
        this.Input = null;

        /**
         * 语音全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiRecognitionTaskAsrFullTextResultInput | null;
        Output: AiRecognitionTaskAsrFullTextResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifyAIRecognitionTemplate返回参数结构体
 * @class
 */
class ModifyAIRecognitionTemplateResponse extends AbstractModel {

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
 * 画面鉴政任务控制参数
 * @class
 */
class PoliticalImgReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 画面鉴政任务开关，可选值：
<li>ON：开启画面鉴政任务；</li>
<li>OFF：关闭画面鉴政任务。</li>
         */
        this.Switch = null;

        /**
         * 画面鉴政过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：政治人物；</li>
<li>entertainment：娱乐人物；</li>
<li>sport：体育人物；</li>
<li>entrepreneur：商业人物；</li>
<li>scholar：教育学者；</li>
<li>celebrity：知名人物；</li>
<li>military：军事人物。</li>
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 鉴政任务控制参数
 * @class
 */
class PoliticalConfigureInfo extends AbstractModel {

    ImgReviewInfo: PoliticalImgReviewTemplateInfo | null
    
    AsrReviewInfo: PoliticalAsrReviewTemplateInfo | null
    
    OcrReviewInfo: PoliticalOcrReviewTemplateInfo | null
    
    constructor(){
        super();

        /**
         * 画面鉴政控制参数。
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴政控制参数。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴政控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImgReviewInfo: PoliticalImgReviewTemplateInfo | null;
        AsrReviewInfo: PoliticalAsrReviewTemplateInfo | null;
        OcrReviewInfo: PoliticalOcrReviewTemplateInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PoliticalImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * ModifyAnimatedGraphicsTemplate请求参数结构体
 * @class
 */
class ModifyAnimatedGraphicsTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    Fps: number | null
    
    Quality: number | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 转动图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 动图格式，取值为 gif 和 webp。
         */
        this.Format = null;

        /**
         * 帧率，取值范围：[1, 30]，单位：Hz。
         */
        this.Fps = null;

        /**
         * 图片质量，取值范围：[1, 100]，默认值为 75。
         */
        this.Quality = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        Fps: number | null;
        Quality: number | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 文本识别片段。
 * @class
 */
class AiRecognitionTaskOcrWordsSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    Confidence: number | null
    
    AreaCoordSet: Array<number> | null
    
    constructor(){
        super();

        /**
         * 识别片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 识别片段终止的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        Confidence: number | null;
        AreaCoordSet: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * 任务查询结果类型
 * @class
 */
class MediaProcessTaskResult extends AbstractModel {

    Type: string | null
    
    TranscodeTask: MediaProcessTaskTranscodeResult | null
    
    AnimatedGraphicTask: MediaProcessTaskAnimatedGraphicResult | null
    
    SnapshotByTimeOffsetTask: MediaProcessTaskSnapshotByTimeOffsetResult | null
    
    SampleSnapshotTask: MediaProcessTaskSampleSnapshotResult | null
    
    ImageSpriteTask: MediaProcessTaskImageSpriteResult | null
    
    AdaptiveDynamicStreamingTask: MediaProcessTaskAdaptiveDynamicStreamingResult | null
    
    constructor(){
        super();

        /**
         * 任务的类型，可以取的值有：
<li>Transcode：转码</li>
<li>AnimatedGraphics：转动图</li>
<li>SnapshotByTimeOffset：时间点截图</li>
<li>SampleSnapshot：采样截图</li>
<li>ImageSprites：雪碧图</li>
<li>CoverBySnapshot：截图做封面</li>
<li>AdaptiveDynamicStreaming：自适应码流</li>
         */
        this.Type = null;

        /**
         * 视频转码任务的查询结果，当任务类型为 Transcode 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TranscodeTask = null;

        /**
         * 视频转动图任务的查询结果，当任务类型为 AnimatedGraphics 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AnimatedGraphicTask = null;

        /**
         * 对视频按时间点截图任务的查询结果，当任务类型为 SnapshotByTimeOffset 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * 对视频采样截图任务的查询结果，当任务类型为 SampleSnapshot 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SampleSnapshotTask = null;

        /**
         * 对视频截雪碧图任务的查询结果，当任务类型为 ImageSprite 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageSpriteTask = null;

        /**
         * 转自适应码流任务查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AdaptiveDynamicStreamingTask = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        TranscodeTask: MediaProcessTaskTranscodeResult | null;
        AnimatedGraphicTask: MediaProcessTaskAnimatedGraphicResult | null;
        SnapshotByTimeOffsetTask: MediaProcessTaskSnapshotByTimeOffsetResult | null;
        SampleSnapshotTask: MediaProcessTaskSampleSnapshotResult | null;
        ImageSpriteTask: MediaProcessTaskImageSpriteResult | null;
        AdaptiveDynamicStreamingTask: MediaProcessTaskAdaptiveDynamicStreamingResult | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TranscodeTask) {
            let obj = new MediaProcessTaskTranscodeResult();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.AnimatedGraphicTask) {
            let obj = new MediaProcessTaskAnimatedGraphicResult();
            obj.deserialize(params.AnimatedGraphicTask)
            this.AnimatedGraphicTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new MediaProcessTaskSnapshotByTimeOffsetResult();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.SampleSnapshotTask) {
            let obj = new MediaProcessTaskSampleSnapshotResult();
            obj.deserialize(params.SampleSnapshotTask)
            this.SampleSnapshotTask = obj;
        }

        if (params.ImageSpriteTask) {
            let obj = new MediaProcessTaskImageSpriteResult();
            obj.deserialize(params.ImageSpriteTask)
            this.ImageSpriteTask = obj;
        }

        if (params.AdaptiveDynamicStreamingTask) {
            let obj = new MediaProcessTaskAdaptiveDynamicStreamingResult();
            obj.deserialize(params.AdaptiveDynamicStreamingTask)
            this.AdaptiveDynamicStreamingTask = obj;
        }

    }
}

/**
 * DeleteWordSamples返回参数结构体
 * @class
 */
class DeleteWordSamplesResponse extends AbstractModel {

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
 * 视频处理任务中的水印参数类型
 * @class
 */
class WatermarkInput extends AbstractModel {

    Definition: number | null
    
    RawParameter: RawWatermarkParameter | null
    
    TextContent: string | null
    
    SvgContent: string | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 水印模板 ID。
         */
        this.Definition = null;

        /**
         * 水印自定义参数，当 Definition 填 0 时有效。
该参数用于高度定制场景，建议您优先使用 Definition 指定水印参数。
         */
        this.RawParameter = null;

        /**
         * 文字内容，长度不超过100个字符。仅当水印类型为文字水印时填写。
         */
        this.TextContent = null;

        /**
         * SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。
         */
        this.SvgContent = null;

        /**
         * 水印的起始时间偏移，单位：秒。不填或填0，表示水印从画面出现时开始显现。
<li>不填或填0，表示水印从画面开始就出现；</li>
<li>当数值大于0时（假设为 n），表示水印从画面开始的第 n 秒出现；</li>
<li>当数值小于0时（假设为 -n），表示水印从离画面结束 n 秒前开始出现。</li>
         */
        this.StartTimeOffset = null;

        /**
         * 水印的结束时间偏移，单位：秒。
<li>不填或填0，表示水印持续到画面结束；</li>
<li>当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；</li>
<li>当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。</li>
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RawParameter: RawWatermarkParameter | null;
        TextContent: string | null;
        SvgContent: string | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.RawParameter) {
            let obj = new RawWatermarkParameter();
            obj.deserialize(params.RawParameter)
            this.RawParameter = obj;
        }
        this.TextContent = 'TextContent' in params ? params.TextContent : null;
        this.SvgContent = 'SvgContent' in params ? params.SvgContent : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * EnableWorkflow返回参数结构体
 * @class
 */
class EnableWorkflowResponse extends AbstractModel {

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
 * AI 样本管理，关键词输入信息。
 * @class
 */
class AiSampleWordInfo extends AbstractModel {

    Keyword: string | null
    
    Tags: Array<string> | null
    
    constructor(){
        super();

        /**
         * 关键词，长度限制：20 个字符。
         */
        this.Keyword = null;

        /**
         * 关键词标签
<li>数组长度限制：20 个标签；</li>
<li>单个标签长度限制：128 个字符。</li>
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keyword: string | null;
        Tags: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 转自适应码流信息
 * @class
 */
class AdaptiveDynamicStreamingInfoItem extends AbstractModel {

    Definition: number | null
    
    Package: string | null
    
    Path: string | null
    
    Storage: TaskOutputStorage | null
    
    constructor(){
        super();

        /**
         * 转自适应码流规格。
         */
        this.Definition = null;

        /**
         * 打包格式，可能为 HLS和 MPEG-DASH 两种。
         */
        this.Package = null;

        /**
         * 播放路径。
         */
        this.Path = null;

        /**
         * 自适应码流文件的存储位置。
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Package: string | null;
        Path: string | null;
        Storage: TaskOutputStorage | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Package = 'Package' in params ? params.Package : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * 文本违禁任务控制参数
 * @class
 */
class ProhibitedOcrReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本违禁任务开关，可选值：
<li>ON：开启文本违禁任务；</li>
<li>OFF：关闭文本违禁任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 直播识别 Ocr 全文识别
 * @class
 */
class LiveStreamOcrFullTextRecognitionResult extends AbstractModel {

    Text: string | null
    
    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    AreaCoordSet: Array<number> | null
    
    constructor(){
        super();

        /**
         * 语音文本。
         */
        this.Text = null;

        /**
         * 识别片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 识别片段终止的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 识别片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Text: string | null;
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
        AreaCoordSet: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * ModifyTranscodeTemplate返回参数结构体
 * @class
 */
class ModifyTranscodeTemplateResponse extends AbstractModel {

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
 * 点播媒体文件元信息
 * @class
 */
class MediaMetaData extends AbstractModel {

    Size: number | null
    
    Container: string | null
    
    Bitrate: number | null
    
    Height: number | null
    
    Width: number | null
    
    Duration: number | null
    
    Rotate: number | null
    
    VideoStreamSet: Array<MediaVideoStreamItem> | null
    
    AudioStreamSet: Array<MediaAudioStreamItem> | null
    
    VideoDuration: number | null
    
    AudioDuration: number | null
    
    constructor(){
        super();

        /**
         * 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
         */
        this.Size = null;

        /**
         * 容器类型，例如 m4a，mp4 等。
         */
        this.Container = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和，单位：bps。
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
         */
        this.Width = null;

        /**
         * 视频时长，单位：秒。
         */
        this.Duration = null;

        /**
         * 视频拍摄时的选择角度，单位：度。
         */
        this.Rotate = null;

        /**
         * 视频流信息。
         */
        this.VideoStreamSet = null;

        /**
         * 音频流信息。
         */
        this.AudioStreamSet = null;

        /**
         * 视频时长，单位：秒。
         */
        this.VideoDuration = null;

        /**
         * 音频时长，单位：秒。
         */
        this.AudioDuration = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Size: number | null;
        Container: string | null;
        Bitrate: number | null;
        Height: number | null;
        Width: number | null;
        Duration: number | null;
        Rotate: number | null;
        VideoStreamSet: Array<MediaVideoStreamItem> | null;
        AudioStreamSet: Array<MediaAudioStreamItem> | null;
        VideoDuration: number | null;
        AudioDuration: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.AudioDuration = 'AudioDuration' in params ? params.AudioDuration : null;

    }
}

/**
 * 视频流配置参数
 * @class
 */
class VideoTemplateInfoForUpdate extends AbstractModel {

    Codec: string | null
    
    Fps: number | null
    
    Bitrate: number | null
    
    ResolutionAdaptive: string | null
    
    Width: number | null
    
    Height: number | null
    
    Gop: number | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
<li>av1：AOMedia Video 1 编码</li>
目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。av1 编码容器目前只支持 mp4 。
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 60]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
         */
        this.Fps = null;

        /**
         * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
         */
        this.Bitrate = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
         */
        this.ResolutionAdaptive = null;

        /**
         * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
         */
        this.Width = null;

        /**
         * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
         */
        this.Height = null;

        /**
         * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 时，系统将自动设置 gop 长度。
         */
        this.Gop = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Codec: string | null;
        Fps: number | null;
        Bitrate: number | null;
        ResolutionAdaptive: string | null;
        Width: number | null;
        Height: number | null;
        Gop: number | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * CreateContentReviewTemplate请求参数结构体
 * @class
 */
class CreateContentReviewTemplateRequest extends AbstractModel {

    Name: string | null
    
    Comment: string | null
    
    PornConfigure: PornConfigureInfo | null
    
    TerrorismConfigure: TerrorismConfigureInfo | null
    
    PoliticalConfigure: PoliticalConfigureInfo | null
    
    ProhibitedConfigure: ProhibitedConfigureInfo | null
    
    UserDefineConfigure: UserDefineConfigureInfo | null
    
    constructor(){
        super();

        /**
         * 内容审核模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 内容审核模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 鉴黄控制参数。
         */
        this.PornConfigure = null;

        /**
         * 鉴恐控制参数。
         */
        this.TerrorismConfigure = null;

        /**
         * 鉴政控制参数。
         */
        this.PoliticalConfigure = null;

        /**
         * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此参数尚未支持。
         */
        this.ProhibitedConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
         */
        this.UserDefineConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Comment: string | null;
        PornConfigure: PornConfigureInfo | null;
        TerrorismConfigure: TerrorismConfigureInfo | null;
        PoliticalConfigure: PoliticalConfigureInfo | null;
        ProhibitedConfigure: ProhibitedConfigureInfo | null;
        UserDefineConfigure: UserDefineConfigureInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfo();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfo();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfo();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfo();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

    }
}

/**
 * DescribeContentReviewTemplates请求参数结构体
 * @class
 */
class DescribeContentReviewTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识过滤条件，数组长度限制：50。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：50。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 对视频转自适应码流的输入参数类型
 * @class
 */
class AdaptiveDynamicStreamingTaskInput extends AbstractModel {

    Definition: number | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputObjectPath: string | null
    
    SubStreamObjectName: string | null
    
    SegmentObjectName: string | null
    
    constructor(){
        super();

        /**
         * 转自适应码流模板 ID。
         */
        this.Definition = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         */
        this.WatermarkSet = null;

        /**
         * 转自适应码流后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OutputStorage = null;

        /**
         * 转自适应码流后，manifest 文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}.{format}`。
         */
        this.OutputObjectPath = null;

        /**
         * 转自适应码流后，子流文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`。
         */
        this.SubStreamObjectName = null;

        /**
         * 转自适应码流（仅 HLS）后，分片文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`。
         */
        this.SegmentObjectName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        WatermarkSet: Array<WatermarkInput> | null;
        OutputStorage: TaskOutputStorage | null;
        OutputObjectPath: string | null;
        SubStreamObjectName: string | null;
        SegmentObjectName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.SubStreamObjectName = 'SubStreamObjectName' in params ? params.SubStreamObjectName : null;
        this.SegmentObjectName = 'SegmentObjectName' in params ? params.SegmentObjectName : null;

    }
}

/**
 * DescribeImageSpriteTemplates返回参数结构体
 * @class
 */
class DescribeImageSpriteTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    ImageSpriteTemplateSet: Array<ImageSpriteTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 雪碧图模板详情列表。
         */
        this.ImageSpriteTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        ImageSpriteTemplateSet: Array<ImageSpriteTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ImageSpriteTemplateSet) {
            this.ImageSpriteTemplateSet = new Array();
            for (let z in params.ImageSpriteTemplateSet) {
                let obj = new ImageSpriteTemplate();
                obj.deserialize(params.ImageSpriteTemplateSet[z]);
                this.ImageSpriteTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务的事件通知配置。
 * @class
 */
class TaskNotifyConfig extends AbstractModel {

    CmqModel: string | null
    
    CmqRegion: string | null
    
    QueueName: string | null
    
    TopicName: string | null
    
    NotifyMode: string | null
    
    constructor(){
        super();

        /**
         * CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。
         */
        this.CmqModel = null;

        /**
         * CMQ 的园区，如 sh，bj 等。
         */
        this.CmqRegion = null;

        /**
         * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。
         */
        this.QueueName = null;

        /**
         * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。
         */
        this.TopicName = null;

        /**
         * 工作流通知的模式，可取值有 Finish 和 Change，不填代表 Finish。
         */
        this.NotifyMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CmqModel: string | null;
        CmqRegion: string | null;
        QueueName: string | null;
        TopicName: string | null;
        NotifyMode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CmqModel = 'CmqModel' in params ? params.CmqModel : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.NotifyMode = 'NotifyMode' in params ? params.NotifyMode : null;

    }
}

/**
 * 内容审核鉴政任务结果类型
 * @class
 */
class AiReviewTaskPoliticalResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewPoliticalTaskInput | null
    
    Output: AiReviewPoliticalTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核鉴政任务输入。
         */
        this.Input = null;

        /**
         * 内容审核鉴政任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewPoliticalTaskInput | null;
        Output: AiReviewPoliticalTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 智能按帧标签任务输入类型
 * @class
 */
class AiAnalysisTaskFrameTagInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频智能按帧标签模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 按帧标签片段列表
 * @class
 */
class MediaAiAnalysisFrameTagSegmentItem extends AbstractModel {

    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    TagSet: Array<MediaAiAnalysisFrameTagItem> | null
    
    constructor(){
        super();

        /**
         * 按帧标签起始的偏移时间。
         */
        this.StartTimeOffset = null;

        /**
         * 按帧标签结束的偏移时间。
         */
        this.EndTimeOffset = null;

        /**
         * 时间片段内的标签列表。
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        TagSet: Array<MediaAiAnalysisFrameTagItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisFrameTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * 语音关键词识别结果。
 * @class
 */
class AiRecognitionTaskAsrWordsResultItem extends AbstractModel {

    Word: string | null
    
    SegmentSet: Array<AiRecognitionTaskAsrWordsSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 语音关键词。
         */
        this.Word = null;

        /**
         * 语音关键词出现的时间片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Word: string | null;
        SegmentSet: Array<AiRecognitionTaskAsrWordsSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends AbstractModel {

    TaskType: string | null
    
    Status: string | null
    
    CreateTime: string | null
    
    BeginProcessTime: string | null
    
    FinishTime: string | null
    
    WorkflowTask: WorkflowTask | null
    
    EditMediaTask: EditMediaTask | null
    
    LiveStreamProcessTask: LiveStreamProcessTask | null
    
    TaskNotifyConfig: TaskNotifyConfig | null
    
    TasksPriority: number | null
    
    SessionId: string | null
    
    SessionContext: string | null
    
    ExtInfo: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
<li>EditMediaTask：视频编辑任务。</li>
<li>LiveStreamProcessTask：直播流处理任务。</li>
         */
        this.TaskType = null;

        /**
         * 任务状态，取值：
<li>WAITING：等待中；</li>
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         */
        this.Status = null;

        /**
         * 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.BeginProcessTime = null;

        /**
         * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.FinishTime = null;

        /**
         * 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WorkflowTask = null;

        /**
         * 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EditMediaTask = null;

        /**
         * 直播流处理任务信息，仅当 TaskType 为 LiveStreamProcessTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LiveStreamProcessTask = null;

        /**
         * 任务的事件通知信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TaskNotifyConfig = null;

        /**
         * 任务流的优先级，取值范围为 [-10, 10]。
         */
        this.TasksPriority = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
         */
        this.SessionContext = null;

        /**
         * 扩展信息字段，仅用于特定场景。
         */
        this.ExtInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskType: string | null;
        Status: string | null;
        CreateTime: string | null;
        BeginProcessTime: string | null;
        FinishTime: string | null;
        WorkflowTask: WorkflowTask | null;
        EditMediaTask: EditMediaTask | null;
        LiveStreamProcessTask: LiveStreamProcessTask | null;
        TaskNotifyConfig: TaskNotifyConfig | null;
        TasksPriority: number | null;
        SessionId: string | null;
        SessionContext: string | null;
        ExtInfo: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.WorkflowTask) {
            let obj = new WorkflowTask();
            obj.deserialize(params.WorkflowTask)
            this.WorkflowTask = obj;
        }

        if (params.EditMediaTask) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTask)
            this.EditMediaTask = obj;
        }

        if (params.LiveStreamProcessTask) {
            let obj = new LiveStreamProcessTask();
            obj.deserialize(params.LiveStreamProcessTask)
            this.LiveStreamProcessTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直播流 AI 识别结果
 * @class
 */
class LiveStreamAiRecognitionResultItem extends AbstractModel {

    Type: string | null
    
    FaceRecognitionResultSet: Array<LiveStreamFaceRecognitionResult> | null
    
    AsrWordsRecognitionResultSet: Array<LiveStreamAsrWordsRecognitionResult> | null
    
    OcrWordsRecognitionResultSet: Array<LiveStreamOcrWordsRecognitionResult> | null
    
    AsrFullTextRecognitionResultSet: Array<LiveStreamAsrFullTextRecognitionResult> | null
    
    OcrFullTextRecognitionResultSet: Array<LiveStreamOcrFullTextRecognitionResult> | null
    
    constructor(){
        super();

        /**
         * 结果的类型，取值范围：
<li>FaceRecognition：人脸识别，</li>
<li>AsrWordsRecognition：语音关键词识别，</li>
<li>OcrWordsRecognition：文本关键词识别，</li>
<li>AsrFullTextRecognition：语音全文识别，</li>
<li>OcrFullTextRecognition：文本全文识别。</li>
         */
        this.Type = null;

        /**
         * 人脸识别结果，当 Type 为
FaceRecognition 时有效。
         */
        this.FaceRecognitionResultSet = null;

        /**
         * 语音关键词识别结果，当 Type 为
AsrWordsRecognition 时有效。
         */
        this.AsrWordsRecognitionResultSet = null;

        /**
         * 文本关键词识别结果，当 Type 为
OcrWordsRecognition 时有效。
         */
        this.OcrWordsRecognitionResultSet = null;

        /**
         * 语音全文识别结果，当 Type 为
AsrFullTextRecognition 时有效。
         */
        this.AsrFullTextRecognitionResultSet = null;

        /**
         * 文本全文识别结果，当 Type 为
OcrFullTextRecognition 时有效。
         */
        this.OcrFullTextRecognitionResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        FaceRecognitionResultSet: Array<LiveStreamFaceRecognitionResult> | null;
        AsrWordsRecognitionResultSet: Array<LiveStreamAsrWordsRecognitionResult> | null;
        OcrWordsRecognitionResultSet: Array<LiveStreamOcrWordsRecognitionResult> | null;
        AsrFullTextRecognitionResultSet: Array<LiveStreamAsrFullTextRecognitionResult> | null;
        OcrFullTextRecognitionResultSet: Array<LiveStreamOcrFullTextRecognitionResult> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.FaceRecognitionResultSet) {
            this.FaceRecognitionResultSet = new Array();
            for (let z in params.FaceRecognitionResultSet) {
                let obj = new LiveStreamFaceRecognitionResult();
                obj.deserialize(params.FaceRecognitionResultSet[z]);
                this.FaceRecognitionResultSet.push(obj);
            }
        }

        if (params.AsrWordsRecognitionResultSet) {
            this.AsrWordsRecognitionResultSet = new Array();
            for (let z in params.AsrWordsRecognitionResultSet) {
                let obj = new LiveStreamAsrWordsRecognitionResult();
                obj.deserialize(params.AsrWordsRecognitionResultSet[z]);
                this.AsrWordsRecognitionResultSet.push(obj);
            }
        }

        if (params.OcrWordsRecognitionResultSet) {
            this.OcrWordsRecognitionResultSet = new Array();
            for (let z in params.OcrWordsRecognitionResultSet) {
                let obj = new LiveStreamOcrWordsRecognitionResult();
                obj.deserialize(params.OcrWordsRecognitionResultSet[z]);
                this.OcrWordsRecognitionResultSet.push(obj);
            }
        }

        if (params.AsrFullTextRecognitionResultSet) {
            this.AsrFullTextRecognitionResultSet = new Array();
            for (let z in params.AsrFullTextRecognitionResultSet) {
                let obj = new LiveStreamAsrFullTextRecognitionResult();
                obj.deserialize(params.AsrFullTextRecognitionResultSet[z]);
                this.AsrFullTextRecognitionResultSet.push(obj);
            }
        }

        if (params.OcrFullTextRecognitionResultSet) {
            this.OcrFullTextRecognitionResultSet = new Array();
            for (let z in params.OcrFullTextRecognitionResultSet) {
                let obj = new LiveStreamOcrFullTextRecognitionResult();
                obj.deserialize(params.OcrFullTextRecognitionResultSet[z]);
                this.OcrFullTextRecognitionResultSet.push(obj);
            }
        }

    }
}

/**
 * DeleteImageSpriteTemplate请求参数结构体
 * @class
 */
class DeleteImageSpriteTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * AI 样本管理，处理失败的人脸信息
 * @class
 */
class AiSampleFailFaceInfo extends AbstractModel {

    Index: number | null
    
    ErrCode: number | null
    
    Message: string | null
    
    constructor(){
        super();

        /**
         * 对应入参 FaceContents 中错误图片下标，从 0 开始。
         */
        this.Index = null;

        /**
         * 错误码，取值：
<li>0：成功；</li>
<li>其他：失败。</li>
         */
        this.ErrCode = null;

        /**
         * 错误描述。
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Index: number | null;
        ErrCode: number | null;
        Message: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 用户自定义人物审核任务控制参数。
 * @class
 */
class UserDefineFaceReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 用户自定义人物审核任务开关，可选值：
<li>ON：开启自定义人物审核任务；</li>
<li>OFF：关闭自定义人物审核任务。</li>
         */
        this.Switch = null;

        /**
         * 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 文本全文本识别任务控制参数
 * @class
 */
class OcrFullTextConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 文本全文识别任务开关，可选值：
<li>ON：开启智能文本全文识别任务；</li>
<li>OFF：关闭智能文本全文识别任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 文本全文识别输入。
 * @class
 */
class AiRecognitionTaskOcrFullTextResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 文本全文识别模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends AbstractModel {

    TaskSet: Array<TaskSimpleInfo> | null
    
    ScrollToken: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务概要列表。
         */
        this.TaskSet = null;

        /**
         * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空字符串，说明已无更多数据。
         */
        this.ScrollToken = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskSet: Array<TaskSimpleInfo> | null;
        ScrollToken: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskSimpleInfo();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人脸识别输入。
 * @class
 */
class AiRecognitionTaskFaceResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 人脸识别模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 涉政信息
 * @class
 */
class AiReviewPoliticalTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    SegmentSet: Array<MediaContentReviewPoliticalSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 视频涉政评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * 涉政结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * 视频鉴政结果标签。内容审核模板[画面鉴政任务控制参数](https://cloud.tencent.com/document/api/862/37615#AiReviewPoliticalTaskOutput)里 LabelSet 参数与此参数取值范围的对应关系：
violation_photo：
<li>violation_photo：违规图标。</li>
其他（即 politician/entertainment/sport/entrepreneur/scholar/celebrity/military）：
<li>politician：政治人物。</li>
         */
        this.Label = null;

        /**
         * 有涉政嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        Label: string | null;
        SegmentSet: Array<MediaContentReviewPoliticalSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewPoliticalSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 直播 AI 内容审核图片鉴黄结果
 * @class
 */
class LiveStreamAiReviewImagePornResult extends AbstractModel {

    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    Url: string | null
    
    PicUrlExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉黄分数。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
        Suggestion: string | null;
        Label: string | null;
        Url: string | null;
        PicUrlExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * ModifySnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    Comment: string | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 指定时间点截图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 图片格式，取值可以为 jpg 和 png。
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        Comment: string | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 直播流 AI 审核结果
 * @class
 */
class LiveStreamAiReviewResultItem extends AbstractModel {

    Type: string | null
    
    ImagePornResultSet: Array<LiveStreamAiReviewImagePornResult> | null
    
    ImageTerrorismResultSet: Array<LiveStreamAiReviewImageTerrorismResult> | null
    
    ImagePoliticalResultSet: Array<LiveStreamAiReviewImagePoliticalResult> | null
    
    VoicePornResultSet: Array<LiveStreamAiReviewVoicePornResult> | null
    
    constructor(){
        super();

        /**
         * 审核结果的类型，可以取的值有：
<li>ImagePorn：图片鉴黄</li>
<li>ImageTerrorism：图片鉴恐</li>
<li>ImagePolitical：图片鉴政</li>
<li>PornVoice：声音鉴黄</li>
         */
        this.Type = null;

        /**
         * 图片鉴黄的结果，当 Type 为 ImagePorn 时有效。
         */
        this.ImagePornResultSet = null;

        /**
         * 图片鉴恐的结果，当 Type 为 ImageTerrorism 时有效。
         */
        this.ImageTerrorismResultSet = null;

        /**
         * 图片鉴政的结果，当 Type 为 ImagePolitical 时有效。
         */
        this.ImagePoliticalResultSet = null;

        /**
         * 声音鉴黄的结果，当 Type 为 PornVoice 时有效。
         */
        this.VoicePornResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        ImagePornResultSet: Array<LiveStreamAiReviewImagePornResult> | null;
        ImageTerrorismResultSet: Array<LiveStreamAiReviewImageTerrorismResult> | null;
        ImagePoliticalResultSet: Array<LiveStreamAiReviewImagePoliticalResult> | null;
        VoicePornResultSet: Array<LiveStreamAiReviewVoicePornResult> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ImagePornResultSet) {
            this.ImagePornResultSet = new Array();
            for (let z in params.ImagePornResultSet) {
                let obj = new LiveStreamAiReviewImagePornResult();
                obj.deserialize(params.ImagePornResultSet[z]);
                this.ImagePornResultSet.push(obj);
            }
        }

        if (params.ImageTerrorismResultSet) {
            this.ImageTerrorismResultSet = new Array();
            for (let z in params.ImageTerrorismResultSet) {
                let obj = new LiveStreamAiReviewImageTerrorismResult();
                obj.deserialize(params.ImageTerrorismResultSet[z]);
                this.ImageTerrorismResultSet.push(obj);
            }
        }

        if (params.ImagePoliticalResultSet) {
            this.ImagePoliticalResultSet = new Array();
            for (let z in params.ImagePoliticalResultSet) {
                let obj = new LiveStreamAiReviewImagePoliticalResult();
                obj.deserialize(params.ImagePoliticalResultSet[z]);
                this.ImagePoliticalResultSet.push(obj);
            }
        }

        if (params.VoicePornResultSet) {
            this.VoicePornResultSet = new Array();
            for (let z in params.VoicePornResultSet) {
                let obj = new LiveStreamAiReviewVoicePornResult();
                obj.deserialize(params.VoicePornResultSet[z]);
                this.VoicePornResultSet.push(obj);
            }
        }

    }
}

/**
 * 任务概要信息
 * @class
 */
class TaskSimpleInfo extends AbstractModel {

    TaskId: string | null
    
    TaskType: string | null
    
    CreateTime: string | null
    
    BeginProcessTime: string | null
    
    FinishTime: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务类型，包含：
<li> WorkflowTask：工作流处理任务；</li>
<li> EditMediaTask：视频编辑任务；</li>
<li> LiveProcessTask：直播处理任务。</li>
         */
        this.TaskType = null;

        /**
         * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未开始，该字段为：0000-00-00T00:00:00Z。
         */
        this.BeginProcessTime = null;

        /**
         * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未完成，该字段为：0000-00-00T00:00:00Z。
         */
        this.FinishTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        TaskType: string | null;
        CreateTime: string | null;
        BeginProcessTime: string | null;
        FinishTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

    }
}

/**
 * DescribeSnapshotByTimeOffsetTemplates返回参数结构体
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    SnapshotByTimeOffsetTemplateSet: Array<SnapshotByTimeOffsetTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 指定时间点截图模板详情列表。
         */
        this.SnapshotByTimeOffsetTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        SnapshotByTimeOffsetTemplateSet: Array<SnapshotByTimeOffsetTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SnapshotByTimeOffsetTemplateSet) {
            this.SnapshotByTimeOffsetTemplateSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTemplateSet) {
                let obj = new SnapshotByTimeOffsetTemplate();
                obj.deserialize(params.SnapshotByTimeOffsetTemplateSet[z]);
                this.SnapshotByTimeOffsetTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 点播文件视频流信息
 * @class
 */
class MediaVideoStreamItem extends AbstractModel {

    Bitrate: number | null
    
    Height: number | null
    
    Width: number | null
    
    Codec: string | null
    
    Fps: number | null
    
    constructor(){
        super();

        /**
         * 视频流的码率，单位：bps。
         */
        this.Bitrate = null;

        /**
         * 视频流的高度，单位：px。
         */
        this.Height = null;

        /**
         * 视频流的宽度，单位：px。
         */
        this.Width = null;

        /**
         * 视频流的编码格式，例如 h264。
         */
        this.Codec = null;

        /**
         * 帧率，单位：hz。
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Bitrate: number | null;
        Height: number | null;
        Width: number | null;
        Codec: string | null;
        Fps: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * 时间点截图模板详情
 * @class
 */
class SnapshotByTimeOffsetTemplate extends AbstractModel {

    Definition: number | null
    
    Type: string | null
    
    Name: string | null
    
    Comment: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 时间点截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 时间点截图模板名称。
         */
        this.Name = null;

        /**
         * 模板描述信息。
         */
        this.Comment = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 图片格式。
         */
        this.Format = null;

        /**
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.UpdateTime = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>black：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>black：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Type: string | null;
        Name: string | null;
        Comment: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate返回参数结构体
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateResponse extends AbstractModel {

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
 * 文本违禁任务控制参数
 * @class
 */
class ProhibitedOcrReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 文本违禁任务开关，可选值：
<li>ON：开启文本违禁任务；</li>
<li>OFF：关闭文本违禁任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends AbstractModel {

    Status: string | null
    
    Limit: number | null
    
    ScrollToken: string | null
    
    constructor(){
        super();

        /**
         * 过滤条件：任务状态，可选值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。
         */
        this.Status = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
         */
        this.ScrollToken = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        Limit: number | null;
        ScrollToken: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;

    }
}

/**
 * 人脸识别任务控制参数
 * @class
 */
class FaceConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    Score: number | null
    
    DefaultLibraryLabelSet: Array<string> | null
    
    UserDefineLibraryLabelSet: Array<string> | null
    
    FaceLibrary: string | null
    
    constructor(){
        super();

        /**
         * 人脸识别任务开关，可选值：
<li>ON：开启智能人脸识别任务；</li>
<li>OFF：关闭智能人脸识别任务。</li>
         */
        this.Switch = null;

        /**
         * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。取值范围：0-100。
         */
        this.Score = null;

        /**
         * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星；</li>
<li>politician：政治人物。</li>
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.UserDefineLibraryLabelSet = null;

        /**
         * 人物库选择，可选值：
<li>Default：使用默认人物库；</li>
<li>UserDefine：使用用户自定义人物库。</li>
<li>All：同时使用默认人物库和用户自定义人物库。</li>
         */
        this.FaceLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        Score: number | null;
        DefaultLibraryLabelSet: Array<string> | null;
        UserDefineLibraryLabelSet: Array<string> | null;
        FaceLibrary: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.DefaultLibraryLabelSet = 'DefaultLibraryLabelSet' in params ? params.DefaultLibraryLabelSet : null;
        this.UserDefineLibraryLabelSet = 'UserDefineLibraryLabelSet' in params ? params.UserDefineLibraryLabelSet : null;
        this.FaceLibrary = 'FaceLibrary' in params ? params.FaceLibrary : null;

    }
}

/**
 * CreateTranscodeTemplate返回参数结构体
 * @class
 */
class CreateTranscodeTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 语音关键词识别输入。
 * @class
 */
class AiRecognitionTaskAsrWordsResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 语音关键词识别模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateAIAnalysisTemplate请求参数结构体
 * @class
 */
class CreateAIAnalysisTemplateRequest extends AbstractModel {

    Name: string | null
    
    Comment: string | null
    
    ClassificationConfigure: ClassificationConfigureInfo | null
    
    TagConfigure: TagConfigureInfo | null
    
    CoverConfigure: CoverConfigureInfo | null
    
    FrameTagConfigure: FrameTagConfigureInfo | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 视频内容分析模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 智能分类任务控制参数。
         */
        this.ClassificationConfigure = null;

        /**
         * 智能标签任务控制参数。
         */
        this.TagConfigure = null;

        /**
         * 智能封面任务控制参数。
         */
        this.CoverConfigure = null;

        /**
         * 智能按帧标签任务控制参数。
         */
        this.FrameTagConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Comment: string | null;
        ClassificationConfigure: ClassificationConfigureInfo | null;
        TagConfigure: TagConfigureInfo | null;
        CoverConfigure: CoverConfigureInfo | null;
        FrameTagConfigure: FrameTagConfigureInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

    }
}

/**
 * 内容审核鉴恐任务输入参数类型
 * @class
 */
class AiReviewTerrorismTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴恐模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeWorkflows请求参数结构体
 * @class
 */
class DescribeWorkflowsRequest extends AbstractModel {

    WorkflowIds: Array<number> | null
    
    Status: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 工作流 ID 过滤条件，数组长度限制：100。
         */
        this.WorkflowIds = null;

        /**
         * 工作流状态，取值范围：
<li>Enabled：已启用，</li>
<li>Disabled：已禁用。</li>
不填此参数，则不区分工作流状态。
         */
        this.Status = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowIds: Array<number> | null;
        Status: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowIds = 'WorkflowIds' in params ? params.WorkflowIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 点播文件音频流信息
 * @class
 */
class MediaAudioStreamItem extends AbstractModel {

    Bitrate: number | null
    
    SamplingRate: number | null
    
    Codec: string | null
    
    constructor(){
        super();

        /**
         * 音频流的码率，单位：bps。
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，单位：hz。
         */
        this.SamplingRate = null;

        /**
         * 音频流的编码格式，例如 aac。
         */
        this.Codec = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Bitrate: number | null;
        SamplingRate: number | null;
        Codec: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;

    }
}

/**
 * 直播 AI 内容审核图片鉴恐结果
 * @class
 */
class LiveStreamAiReviewImageTerrorismResult extends AbstractModel {

    StartPtsTime: number | null
    
    EndPtsTime: number | null
    
    Confidence: number | null
    
    Suggestion: string | null
    
    Label: string | null
    
    Url: string | null
    
    PicUrlExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 嫌疑片段起始的 PTS 时间，单位：秒。
         */
        this.StartPtsTime = null;

        /**
         * 嫌疑片段结束的 PTS 时间，单位：秒。
         */
        this.EndPtsTime = null;

        /**
         * 嫌疑片段涉恐分数。
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴恐结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
         */
        this.Suggestion = null;

        /**
         * 视频暴恐结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：暴恐旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：暴恐人物。</li>
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartPtsTime: number | null;
        EndPtsTime: number | null;
        Confidence: number | null;
        Suggestion: string | null;
        Label: string | null;
        Url: string | null;
        PicUrlExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * ProcessLiveStream请求参数结构体
 * @class
 */
class ProcessLiveStreamRequest extends AbstractModel {

    Url: string | null
    
    TaskNotifyConfig: LiveStreamTaskNotifyConfig | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputDir: string | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    SessionId: string | null
    
    SessionContext: string | null
    
    constructor(){
        super();

        /**
         * 直播流 URL（必须是直播文件地址，支持 rtmp，hls 和 flv 等）。
         */
        this.Url = null;

        /**
         * 任务的事件通知信息，用于指定直播流处理的结果。
         */
        this.TaskNotifyConfig = null;

        /**
         * 直播流处理输出文件的目标存储。如处理有文件输出，该参数为必填项。
         */
        this.OutputStorage = null;

        /**
         * 直播流处理生成的文件输出的目标目录，如`/movie/201909/`，如果不填为 `/` 目录。
         */
        this.OutputDir = null;

        /**
         * 视频内容审核类型任务参数。
         */
        this.AiContentReviewTask = null;

        /**
         * 视频内容识别类型任务参数。
         */
        this.AiRecognitionTask = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Url: string | null;
        TaskNotifyConfig: LiveStreamTaskNotifyConfig | null;
        OutputStorage: TaskOutputStorage | null;
        OutputDir: string | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        SessionId: string | null;
        SessionContext: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

        if (params.TaskNotifyConfig) {
            let obj = new LiveStreamTaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * ModifyImageSpriteTemplate请求参数结构体
 * @class
 */
class ModifyImageSpriteTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    SampleType: string | null
    
    SampleInterval: number | null
    
    RowCount: number | null
    
    ColumnCount: number | null
    
    FillType: string | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 雪碧图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 采样类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         */
        this.SampleInterval = null;

        /**
         * 雪碧图中小图的行数。
         */
        this.RowCount = null;

        /**
         * 雪碧图中小图的列数。
         */
        this.ColumnCount = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         */
        this.FillType = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        SampleType: string | null;
        SampleInterval: number | null;
        RowCount: number | null;
        ColumnCount: number | null;
        FillType: string | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 内容审核 Ocr 文字鉴违禁任务输入参数类型
 * @class
 */
class AiReviewProhibitedOcrTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 鉴违禁模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteWatermarkTemplate请求参数结构体
 * @class
 */
class DeleteWatermarkTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeWordSamples请求参数结构体
 * @class
 */
class DescribeWordSamplesRequest extends AbstractModel {

    Usages: Array<string> | null
    
    Keywords: Array<string> | null
    
    Tags: Array<string> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * <b>关键词应用场景过滤条件，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过语音识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行内容审核；
4. Review.Asr：通过语音识别技术，进行内容审核；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、语音识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、语音识别技术，进行内容审核，等价于 3+4；
可多选，元素间关系为 or，即关键词的应用场景包含该字段集合中任意元素的记录，均符合该条件。
         */
        this.Usages = null;

        /**
         * 关键词过滤条件，数组长度限制：100 个词。
         */
        this.Keywords = null;

        /**
         * 标签过滤条件，数组长度限制：20 个词。
         */
        this.Tags = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：100，最大值：100。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Usages: Array<string> | null;
        Keywords: Array<string> | null;
        Tags: Array<string> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyAIAnalysisTemplate请求参数结构体
 * @class
 */
class ModifyAIAnalysisTemplateRequest extends AbstractModel {

    Definition: number | null
    
    Name: string | null
    
    Comment: string | null
    
    ClassificationConfigure: ClassificationConfigureInfoForUpdate | null
    
    TagConfigure: TagConfigureInfoForUpdate | null
    
    CoverConfigure: CoverConfigureInfoForUpdate | null
    
    FrameTagConfigure: FrameTagConfigureInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识。
         */
        this.Definition = null;

        /**
         * 视频内容分析模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 视频内容分析模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 智能分类任务控制参数。
         */
        this.ClassificationConfigure = null;

        /**
         * 智能标签任务控制参数。
         */
        this.TagConfigure = null;

        /**
         * 智能封面任务控制参数。
         */
        this.CoverConfigure = null;

        /**
         * 智能按帧标签任务控制参数。
         */
        this.FrameTagConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        ClassificationConfigure: ClassificationConfigureInfoForUpdate | null;
        TagConfigure: TagConfigureInfoForUpdate | null;
        CoverConfigure: CoverConfigureInfoForUpdate | null;
        FrameTagConfigure: FrameTagConfigureInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfoForUpdate();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfoForUpdate();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfoForUpdate();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfoForUpdate();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

    }
}

/**
 * 直播处理任务信息
 * @class
 */
class LiveStreamProcessTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 视频处理任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         */
        this.Status = null;

        /**
         * 错误码，0 表示成功，其他值表示失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 直播流 URL。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CreateWatermarkTemplate返回参数结构体
 * @class
 */
class CreateWatermarkTemplateResponse extends AbstractModel {

    Definition: number | null
    
    ImageUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         */
        this.Definition = null;

        /**
         * 水印图片地址，仅当 Type 为 image，该字段有效。
         */
        this.ImageUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        ImageUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSampleSnapshotTemplates返回参数结构体
 * @class
 */
class DescribeSampleSnapshotTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    SampleSnapshotTemplateSet: Array<SampleSnapshotTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 采样截图模板详情列表。
         */
        this.SampleSnapshotTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        SampleSnapshotTemplateSet: Array<SampleSnapshotTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SampleSnapshotTemplateSet) {
            this.SampleSnapshotTemplateSet = new Array();
            for (let z in params.SampleSnapshotTemplateSet) {
                let obj = new SampleSnapshotTemplate();
                obj.deserialize(params.SampleSnapshotTemplateSet[z]);
                this.SampleSnapshotTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyWordSample返回参数结构体
 * @class
 */
class ModifyWordSampleResponse extends AbstractModel {

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
 * 内容审核结果
 * @class
 */
class AiContentReviewResult extends AbstractModel {

    Type: string | null
    
    SampleRate: number | null
    
    Duration: number | null
    
    PornTask: AiReviewTaskPornResult | null
    
    TerrorismTask: AiReviewTaskTerrorismResult | null
    
    PoliticalTask: AiReviewTaskPoliticalResult | null
    
    PornAsrTask: AiReviewTaskPornAsrResult | null
    
    PornOcrTask: AiReviewTaskPornOcrResult | null
    
    PoliticalAsrTask: AiReviewTaskPoliticalAsrResult | null
    
    PoliticalOcrTask: AiReviewTaskPoliticalOcrResult | null
    
    TerrorismOcrTask: AiReviewTaskTerrorismOcrResult | null
    
    ProhibitedAsrTask: AiReviewTaskProhibitedAsrResult | null
    
    ProhibitedOcrTask: AiReviewTaskProhibitedOcrResult | null
    
    constructor(){
        super();

        /**
         * 任务的类型，可以取的值有：
<li>Porn：图片鉴黄</li>
<li>Terrorism：图片鉴恐</li>
<li>Political：图片鉴政</li>
<li>Porn.Asr：Asr 文字鉴黄</li>
<li>Porn.Ocr：Ocr 文字鉴黄</li>
<li>Political.Asr：Asr 文字鉴政</li>
<li>Political.Ocr：Ocr 文字鉴政</li>
<li>Terrorism.Ocr：Ocr 文字鉴恐</li>
<li>Prohibited.Asr：Asr 文字鉴违禁</li>
<li>Prohibited.Ocr：Ocr 文字鉴违禁</li>
         */
        this.Type = null;

        /**
         * 采样频率，即对视频每秒截取进行审核的帧数。
         */
        this.SampleRate = null;

        /**
         * 审核的视频时长，单位：秒。
         */
        this.Duration = null;

        /**
         * 视频内容审核智能画面鉴黄任务的查询结果，当任务类型为 Porn 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PornTask = null;

        /**
         * 视频内容审核智能画面鉴恐任务的查询结果，当任务类型为 Terrorism 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TerrorismTask = null;

        /**
         * 视频内容审核智能画面鉴政任务的查询结果，当任务类型为 Political 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PoliticalTask = null;

        /**
         * 视频内容审核 Asr 文字鉴黄任务的查询结果，当任务类型为 Porn.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PornAsrTask = null;

        /**
         * 视频内容审核 Ocr 文字鉴黄任务的查询结果，当任务类型为 Porn.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PornOcrTask = null;

        /**
         * 视频内容审核 Asr 文字鉴政任务的查询结果，当任务类型为 Political.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PoliticalAsrTask = null;

        /**
         * 视频内容审核 Ocr 文字鉴政任务的查询结果，当任务类型为 Political.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PoliticalOcrTask = null;

        /**
         * 视频内容审核 Ocr 文字鉴恐任务的查询结果，当任务类型为 Terrorism.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TerrorismOcrTask = null;

        /**
         * 视频内容审核 Asr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProhibitedAsrTask = null;

        /**
         * 视频内容审核 Ocr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProhibitedOcrTask = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        SampleRate: number | null;
        Duration: number | null;
        PornTask: AiReviewTaskPornResult | null;
        TerrorismTask: AiReviewTaskTerrorismResult | null;
        PoliticalTask: AiReviewTaskPoliticalResult | null;
        PornAsrTask: AiReviewTaskPornAsrResult | null;
        PornOcrTask: AiReviewTaskPornOcrResult | null;
        PoliticalAsrTask: AiReviewTaskPoliticalAsrResult | null;
        PoliticalOcrTask: AiReviewTaskPoliticalOcrResult | null;
        TerrorismOcrTask: AiReviewTaskTerrorismOcrResult | null;
        ProhibitedAsrTask: AiReviewTaskProhibitedAsrResult | null;
        ProhibitedOcrTask: AiReviewTaskProhibitedOcrResult | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.PornTask) {
            let obj = new AiReviewTaskPornResult();
            obj.deserialize(params.PornTask)
            this.PornTask = obj;
        }

        if (params.TerrorismTask) {
            let obj = new AiReviewTaskTerrorismResult();
            obj.deserialize(params.TerrorismTask)
            this.TerrorismTask = obj;
        }

        if (params.PoliticalTask) {
            let obj = new AiReviewTaskPoliticalResult();
            obj.deserialize(params.PoliticalTask)
            this.PoliticalTask = obj;
        }

        if (params.PornAsrTask) {
            let obj = new AiReviewTaskPornAsrResult();
            obj.deserialize(params.PornAsrTask)
            this.PornAsrTask = obj;
        }

        if (params.PornOcrTask) {
            let obj = new AiReviewTaskPornOcrResult();
            obj.deserialize(params.PornOcrTask)
            this.PornOcrTask = obj;
        }

        if (params.PoliticalAsrTask) {
            let obj = new AiReviewTaskPoliticalAsrResult();
            obj.deserialize(params.PoliticalAsrTask)
            this.PoliticalAsrTask = obj;
        }

        if (params.PoliticalOcrTask) {
            let obj = new AiReviewTaskPoliticalOcrResult();
            obj.deserialize(params.PoliticalOcrTask)
            this.PoliticalOcrTask = obj;
        }

        if (params.TerrorismOcrTask) {
            let obj = new AiReviewTaskTerrorismOcrResult();
            obj.deserialize(params.TerrorismOcrTask)
            this.TerrorismOcrTask = obj;
        }

        if (params.ProhibitedAsrTask) {
            let obj = new AiReviewTaskProhibitedAsrResult();
            obj.deserialize(params.ProhibitedAsrTask)
            this.ProhibitedAsrTask = obj;
        }

        if (params.ProhibitedOcrTask) {
            let obj = new AiReviewTaskProhibitedOcrResult();
            obj.deserialize(params.ProhibitedOcrTask)
            this.ProhibitedOcrTask = obj;
        }

    }
}

/**
 * 画面鉴恐任务控制参数
 * @class
 */
class TerrorismImgReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 画面鉴恐任务开关，可选值：
<li>ON：开启画面鉴恐任务；</li>
<li>OFF：关闭画面鉴恐任务。</li>
         */
        this.Switch = null;

        /**
         * 画面鉴恐过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：暴恐旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：暴恐人物。</li>
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 80 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeTranscodeTemplates请求参数结构体
 * @class
 */
class DescribeTranscodeTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Type: string | null
    
    ContainerType: string | null
    
    TEHDType: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 转码模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式板；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式。</li>
         */
        this.ContainerType = null;

        /**
         * 极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：
<li>Common：普通转码模板；</li>
<li>TEHD：极速高清模板。</li>
         */
        this.TEHDType = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Type: string | null;
        ContainerType: string | null;
        TEHDType: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.TEHDType = 'TEHDType' in params ? params.TEHDType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DisableWorkflow请求参数结构体
 * @class
 */
class DisableWorkflowRequest extends AbstractModel {

    WorkflowId: number | null
    
    constructor(){
        super();

        /**
         * 工作流 ID。
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WorkflowId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * 鉴政任务控制参数。
 * @class
 */
class PoliticalConfigureInfoForUpdate extends AbstractModel {

    ImgReviewInfo: PoliticalImgReviewTemplateInfoForUpdate | null
    
    AsrReviewInfo: PoliticalAsrReviewTemplateInfoForUpdate | null
    
    OcrReviewInfo: PoliticalOcrReviewTemplateInfoForUpdate | null
    
    constructor(){
        super();

        /**
         * 画面鉴政控制参数。
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴政控制参数。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴政控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImgReviewInfo: PoliticalImgReviewTemplateInfoForUpdate | null;
        AsrReviewInfo: PoliticalAsrReviewTemplateInfoForUpdate | null;
        OcrReviewInfo: PoliticalOcrReviewTemplateInfoForUpdate | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PoliticalImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * DescribeWatermarkTemplates返回参数结构体
 * @class
 */
class DescribeWatermarkTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    WatermarkTemplateSet: Array<WatermarkTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 水印模板详情列表。
         */
        this.WatermarkTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        WatermarkTemplateSet: Array<WatermarkTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WatermarkTemplateSet) {
            this.WatermarkTemplateSet = new Array();
            for (let z in params.WatermarkTemplateSet) {
                let obj = new WatermarkTemplate();
                obj.deserialize(params.WatermarkTemplateSet[z]);
                this.WatermarkTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate请求参数结构体
 * @class
 */
class CreateAnimatedGraphicsTemplateRequest extends AbstractModel {

    Fps: number | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    Quality: number | null
    
    Name: string | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 帧率，取值范围：[1, 30]，单位：Hz。
         */
        this.Fps = null;

        /**
         * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 动图格式，取值为 gif 和 webp。默认为 gif。
         */
        this.Format = null;

        /**
         * 图片质量，取值范围：[1, 100]，默认值为 75。
         */
        this.Quality = null;

        /**
         * 转动图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Fps: number | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        Quality: number | null;
        Name: string | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * 智能按帧标签任务控制参数
 * @class
 */
class FrameTagConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ModifyPersonSample返回参数结构体
 * @class
 */
class ModifyPersonSampleResponse extends AbstractModel {

    Person: AiSamplePerson | null
    
    FailFaceInfoSet: Array<AiSampleFailFaceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 人物信息。
         */
        this.Person = null;

        /**
         * 处理失败的人脸信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FailFaceInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Person: AiSamplePerson | null;
        FailFaceInfoSet: Array<AiSampleFailFaceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTranscodeTemplate返回参数结构体
 * @class
 */
class DeleteTranscodeTemplateResponse extends AbstractModel {

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
 * 转码信息
 * @class
 */
class MediaTranscodeItem extends AbstractModel {

    OutputStorage: TaskOutputStorage | null
    
    Path: string | null
    
    Definition: number | null
    
    Bitrate: number | null
    
    Height: number | null
    
    Width: number | null
    
    Size: number | null
    
    Duration: number | null
    
    Container: string | null
    
    Md5: string | null
    
    AudioStreamSet: Array<MediaAudioStreamItem> | null
    
    VideoStreamSet: Array<MediaVideoStreamItem> | null
    
    constructor(){
        super();

        /**
         * 转码后文件的目标存储。
         */
        this.OutputStorage = null;

        /**
         * 转码后的视频文件路径。
         */
        this.Path = null;

        /**
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/862/37042)。
         */
        this.Definition = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和， 单位：bps。
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
         */
        this.Width = null;

        /**
         * 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
         */
        this.Size = null;

        /**
         * 视频时长，单位：秒。
         */
        this.Duration = null;

        /**
         * 容器类型，例如 m4a，mp4 等。
         */
        this.Container = null;

        /**
         * 视频的 md5 值。
         */
        this.Md5 = null;

        /**
         * 音频流信息。
         */
        this.AudioStreamSet = null;

        /**
         * 视频流信息。
         */
        this.VideoStreamSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OutputStorage: TaskOutputStorage | null;
        Path: string | null;
        Definition: number | null;
        Bitrate: number | null;
        Height: number | null;
        Width: number | null;
        Size: number | null;
        Duration: number | null;
        Container: string | null;
        Md5: string | null;
        AudioStreamSet: Array<MediaAudioStreamItem> | null;
        VideoStreamSet: Array<MediaVideoStreamItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

    }
}

/**
 * DescribePersonSamples返回参数结构体
 * @class
 */
class DescribePersonSamplesResponse extends AbstractModel {

    TotalCount: number | null
    
    PersonSet: Array<AiSamplePerson> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 人物信息。
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
    deserialize(params: {
        TotalCount: number | null;
        PersonSet: Array<AiSamplePerson> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.PersonSet) {
            this.PersonSet = new Array();
            for (let z in params.PersonSet) {
                let obj = new AiSamplePerson();
                obj.deserialize(params.PersonSet[z]);
                this.PersonSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 鉴黄任务控制参数
 * @class
 */
class PornConfigureInfo extends AbstractModel {

    ImgReviewInfo: PornImgReviewTemplateInfo | null
    
    AsrReviewInfo: PornAsrReviewTemplateInfo | null
    
    OcrReviewInfo: PornOcrReviewTemplateInfo | null
    
    constructor(){
        super();

        /**
         * 画面鉴黄控制参数。
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴黄控制参数。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴黄控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImgReviewInfo: PornImgReviewTemplateInfo | null;
        AsrReviewInfo: PornAsrReviewTemplateInfo | null;
        OcrReviewInfo: PornOcrReviewTemplateInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PornImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * DescribeAIAnalysisTemplates返回参数结构体
 * @class
 */
class DescribeAIAnalysisTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    AIAnalysisTemplateSet: Array<AIAnalysisTemplateItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 视频内容分析模板详情列表。
         */
        this.AIAnalysisTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        AIAnalysisTemplateSet: Array<AIAnalysisTemplateItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AIAnalysisTemplateSet) {
            this.AIAnalysisTemplateSet = new Array();
            for (let z in params.AIAnalysisTemplateSet) {
                let obj = new AIAnalysisTemplateItem();
                obj.deserialize(params.AIAnalysisTemplateSet[z]);
                this.AIAnalysisTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateRequest extends AbstractModel {

    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    Comment: string | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 图片格式，取值可以为 jpg 和 png。默认为 jpg。
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        Comment: string | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * ParseLiveStreamProcessNotification请求参数结构体
 * @class
 */
class ParseLiveStreamProcessNotificationRequest extends AbstractModel {

    Content: string | null
    
    constructor(){
        super();

        /**
         * 从 CMQ 获取到的直播流事件通知内容。
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Content: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * 语音关键词识别结果。
 * @class
 */
class AiRecognitionTaskAsrWordsResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskAsrWordsResultInput | null
    
    Output: AiRecognitionTaskAsrWordsResultOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 语音关键词识别任务输入信息。
         */
        this.Input = null;

        /**
         * 语音关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiRecognitionTaskAsrWordsResultInput | null;
        Output: AiRecognitionTaskAsrWordsResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * CreateSampleSnapshotTemplate请求参数结构体
 * @class
 */
class CreateSampleSnapshotTemplateRequest extends AbstractModel {

    SampleType: string | null
    
    SampleInterval: number | null
    
    Name: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    Format: string | null
    
    Comment: string | null
    
    FillType: string | null
    
    constructor(){
        super();

        /**
         * 采样截图类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
         */
        this.SampleType = null;

        /**
         * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
         */
        this.SampleInterval = null;

        /**
         * 采样截图模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Width = null;

        /**
         * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
         */
        this.Height = null;

        /**
         * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
         */
        this.ResolutionAdaptive = null;

        /**
         * 图片格式，取值为 jpg 和 png。默认为 jpg。
         */
        this.Format = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SampleType: string | null;
        SampleInterval: number | null;
        Name: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        Format: string | null;
        Comment: string | null;
        FillType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 视频处理任务信息
 * @class
 */
class WorkflowTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    InputInfo: MediaInputInfo | null
    
    MetaData: MediaMetaData | null
    
    MediaProcessResultSet: Array<MediaProcessTaskResult> | null
    
    AiContentReviewResultSet: Array<AiContentReviewResult> | null
    
    AiAnalysisResultSet: Array<AiAnalysisResult> | null
    
    AiRecognitionResultSet: Array<AiRecognitionResult> | null
    
    constructor(){
        super();

        /**
         * 视频处理任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         */
        this.Status = null;

        /**
         * 已弃用，请使用各个具体任务的 ErrCode。
         */
        this.ErrCode = null;

        /**
         * 已弃用，请使用各个具体任务的 Message。
         */
        this.Message = null;

        /**
         * 视频处理的目标文件信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.InputInfo = null;

        /**
         * 原始视频的元信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetaData = null;

        /**
         * 视频处理任务的执行状态与结果。
         */
        this.MediaProcessResultSet = null;

        /**
         * 视频内容审核任务的执行状态与结果。
         */
        this.AiContentReviewResultSet = null;

        /**
         * 视频内容分析任务的执行状态与结果。
         */
        this.AiAnalysisResultSet = null;

        /**
         * 视频内容识别任务的执行状态与结果。
         */
        this.AiRecognitionResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        InputInfo: MediaInputInfo | null;
        MetaData: MediaMetaData | null;
        MediaProcessResultSet: Array<MediaProcessTaskResult> | null;
        AiContentReviewResultSet: Array<AiContentReviewResult> | null;
        AiAnalysisResultSet: Array<AiAnalysisResult> | null;
        AiRecognitionResultSet: Array<AiRecognitionResult> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.MediaProcessResultSet) {
            this.MediaProcessResultSet = new Array();
            for (let z in params.MediaProcessResultSet) {
                let obj = new MediaProcessTaskResult();
                obj.deserialize(params.MediaProcessResultSet[z]);
                this.MediaProcessResultSet.push(obj);
            }
        }

        if (params.AiContentReviewResultSet) {
            this.AiContentReviewResultSet = new Array();
            for (let z in params.AiContentReviewResultSet) {
                let obj = new AiContentReviewResult();
                obj.deserialize(params.AiContentReviewResultSet[z]);
                this.AiContentReviewResultSet.push(obj);
            }
        }

        if (params.AiAnalysisResultSet) {
            this.AiAnalysisResultSet = new Array();
            for (let z in params.AiAnalysisResultSet) {
                let obj = new AiAnalysisResult();
                obj.deserialize(params.AiAnalysisResultSet[z]);
                this.AiAnalysisResultSet.push(obj);
            }
        }

        if (params.AiRecognitionResultSet) {
            this.AiRecognitionResultSet = new Array();
            for (let z in params.AiRecognitionResultSet) {
                let obj = new AiRecognitionResult();
                obj.deserialize(params.AiRecognitionResultSet[z]);
                this.AiRecognitionResultSet.push(obj);
            }
        }

    }
}

/**
 * 内容审核 Asr 文字鉴黄任务结果类型
 * @class
 */
class AiReviewTaskPornAsrResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiReviewPornAsrTaskInput | null
    
    Output: AiReviewPornAsrTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 内容审核 Asr 文字鉴黄任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiReviewPornAsrTaskInput | null;
        Output: AiReviewPornAsrTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 编辑点播视频文件信息
 * @class
 */
class EditMediaFileInfo extends AbstractModel {

    InputInfo: MediaInputInfo | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 视频的输入信息。
         */
        this.InputInfo = null;

        /**
         * 视频剪辑的起始时间偏移，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 视频剪辑的结束时间偏移，单位：秒。
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InputInfo: MediaInputInfo | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 人脸识别任务控制参数
 * @class
 */
class FaceConfigureInfo extends AbstractModel {

    Switch: string | null
    
    Score: number | null
    
    DefaultLibraryLabelSet: Array<string> | null
    
    UserDefineLibraryLabelSet: Array<string> | null
    
    FaceLibrary: string | null
    
    constructor(){
        super();

        /**
         * 人脸识别任务开关，可选值：
<li>ON：开启智能人脸识别任务；</li>
<li>OFF：关闭智能人脸识别任务。</li>
         */
        this.Switch = null;

        /**
         * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。默认 95 分。取值范围：0 - 100。
         */
        this.Score = null;

        /**
         * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星；</li>
<li>politician：政治人物。</li>
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
         */
        this.UserDefineLibraryLabelSet = null;

        /**
         * 人物库选择，可选值：
<li>Default：使用默认人物库；</li>
<li>UserDefine：使用用户自定义人物库。</li>
<li>All：同时使用默认人物库和用户自定义人物库。</li>
默认值：All，使用系统默认人物库及用户自定义人物库。
         */
        this.FaceLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        Score: number | null;
        DefaultLibraryLabelSet: Array<string> | null;
        UserDefineLibraryLabelSet: Array<string> | null;
        FaceLibrary: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.DefaultLibraryLabelSet = 'DefaultLibraryLabelSet' in params ? params.DefaultLibraryLabelSet : null;
        this.UserDefineLibraryLabelSet = 'UserDefineLibraryLabelSet' in params ? params.UserDefineLibraryLabelSet : null;
        this.FaceLibrary = 'FaceLibrary' in params ? params.FaceLibrary : null;

    }
}

/**
 * 智能人脸识别输出。
 * @class
 */
class AiRecognitionTaskFaceResultOutput extends AbstractModel {

    ResultSet: Array<AiRecognitionTaskFaceResultItem> | null
    
    constructor(){
        super();

        /**
         * 智能人脸识别结果集。
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultSet: Array<AiRecognitionTaskFaceResultItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskFaceResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * 画面鉴黄任务控制参数。
 * @class
 */
class PornImgReviewTemplateInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 画面鉴黄任务开关，可选值：
<li>ON：开启画面鉴黄任务；</li>
<li>OFF：关闭画面鉴黄任务。</li>
         */
        this.Switch = null;

        /**
         * 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * 编辑视频任务信息
 * @class
 */
class EditMediaTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: EditMediaTaskInput | null
    
    Output: EditMediaTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
         */
        this.Status = null;

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 视频编辑任务的输入。
         */
        this.Input = null;

        /**
         * 视频编辑任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: EditMediaTaskInput | null;
        Output: EditMediaTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new EditMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new EditMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 画面鉴黄任务控制参数
 * @class
 */
class PornImgReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    LabelSet: Array<string> | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 画面鉴黄任务开关，可选值：
<li>ON：开启画面鉴黄任务；</li>
<li>OFF：关闭画面鉴黄任务。</li>
         */
        this.Switch = null;

        /**
         * 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
         */
        this.LabelSet = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 0 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        LabelSet: Array<string> | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Ocr 文字涉政信息
 * @class
 */
class AiReviewPoliticalOcrTaskOutput extends AbstractModel {

    Confidence: number | null
    
    Suggestion: string | null
    
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null
    
    constructor(){
        super();

        /**
         * Ocr 文字涉政、敏感评分，分值为0到100。
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉政、敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉政、敏感嫌疑的视频片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Suggestion: string | null;
        SegmentSet: Array<MediaContentReviewOcrTextSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 文本全文本识别任务控制参数
 * @class
 */
class OcrFullTextConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 文本全文识别任务开关，可选值：
<li>ON：开启智能文本全文识别任务；</li>
<li>OFF：关闭智能文本全文识别任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeTranscodeTemplates返回参数结构体
 * @class
 */
class DescribeTranscodeTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    TranscodeTemplateSet: Array<TranscodeTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 转码模板详情列表。
         */
        this.TranscodeTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        TranscodeTemplateSet: Array<TranscodeTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TranscodeTemplateSet) {
            this.TranscodeTemplateSet = new Array();
            for (let z in params.TranscodeTemplateSet) {
                let obj = new TranscodeTemplate();
                obj.deserialize(params.TranscodeTemplateSet[z]);
                this.TranscodeTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate请求参数结构体
 * @class
 */
class DeleteAnimatedGraphicsTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateRequest extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图模板唯一标识。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeAnimatedGraphicsTemplates返回参数结构体
 * @class
 */
class DescribeAnimatedGraphicsTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    AnimatedGraphicsTemplateSet: Array<AnimatedGraphicsTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 转动图模板详情列表。
         */
        this.AnimatedGraphicsTemplateSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        AnimatedGraphicsTemplateSet: Array<AnimatedGraphicsTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AnimatedGraphicsTemplateSet) {
            this.AnimatedGraphicsTemplateSet = new Array();
            for (let z in params.AnimatedGraphicsTemplateSet) {
                let obj = new AnimatedGraphicsTemplate();
                obj.deserialize(params.AnimatedGraphicsTemplateSet[z]);
                this.AnimatedGraphicsTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能按帧标签结果信息
 * @class
 */
class MediaAiAnalysisFrameTagItem extends AbstractModel {

    Tag: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 按帧标签名称。
         */
        this.Tag = null;

        /**
         * 按帧标签的可信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tag: string | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 对视频做采样截图任务输入参数类型。
 * @class
 */
class SampleSnapshotTaskInput extends AbstractModel {

    Definition: number | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
    OutputStorage: TaskOutputStorage | null
    
    OutputObjectPath: string | null
    
    ObjectNumberFormat: NumberFormat | null
    
    constructor(){
        super();

        /**
         * 采样截图模板 ID。
         */
        this.Definition = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         */
        this.WatermarkSet = null;

        /**
         * 采样截图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OutputStorage = null;

        /**
         * 采样截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_sampleSnapshot_{definition}_{number}.{format}`。
         */
        this.OutputObjectPath = null;

        /**
         * 采样截图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        WatermarkSet: Array<WatermarkInput> | null;
        OutputStorage: TaskOutputStorage | null;
        OutputObjectPath: string | null;
        ObjectNumberFormat: NumberFormat | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * 鉴恐任务控制参数
 * @class
 */
class TerrorismConfigureInfo extends AbstractModel {

    ImgReviewInfo: TerrorismImgReviewTemplateInfo | null
    
    OcrReviewInfo: TerrorismOcrReviewTemplateInfo | null
    
    constructor(){
        super();

        /**
         * 画面鉴恐任务控制参数。
         */
        this.ImgReviewInfo = null;

        /**
         * 文本鉴恐任务控制参数。
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImgReviewInfo: TerrorismImgReviewTemplateInfo | null;
        OcrReviewInfo: TerrorismOcrReviewTemplateInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new TerrorismImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * 语音鉴政任务控制参数
 * @class
 */
class PoliticalAsrReviewTemplateInfo extends AbstractModel {

    Switch: string | null
    
    BlockConfidence: number | null
    
    ReviewConfidence: number | null
    
    constructor(){
        super();

        /**
         * 语音鉴政任务开关，可选值：
<li>ON：开启语音鉴政任务；</li>
<li>OFF：关闭语音鉴政任务。</li>
         */
        this.Switch = null;

        /**
         * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
         */
        this.BlockConfidence = null;

        /**
         * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        BlockConfidence: number | null;
        ReviewConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate返回参数结构体
 * @class
 */
class CreateAnimatedGraphicsTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能分类任务结果类型
 * @class
 */
class AiAnalysisTaskClassificationResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiAnalysisTaskClassificationInput | null
    
    Output: AiAnalysisTaskClassificationOutput | null
    
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 错误信息。
         */
        this.Message = null;

        /**
         * 智能分类任务输入。
         */
        this.Input = null;

        /**
         * 智能分类任务输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        Input: AiAnalysisTaskClassificationInput | null;
        Output: AiAnalysisTaskClassificationOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskClassificationInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskClassificationOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 雪碧图信息
 * @class
 */
class MediaImageSpriteItem extends AbstractModel {

    Definition: number | null
    
    Height: number | null
    
    Width: number | null
    
    TotalCount: number | null
    
    ImagePathSet: Array<string> | null
    
    WebVttPath: string | null
    
    Storage: TaskOutputStorage | null
    
    constructor(){
        super();

        /**
         * 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         */
        this.Definition = null;

        /**
         * 雪碧图小图的高度。
         */
        this.Height = null;

        /**
         * 雪碧图小图的宽度。
         */
        this.Width = null;

        /**
         * 每一张雪碧图大图里小图的数量。
         */
        this.TotalCount = null;

        /**
         * 每一张雪碧图大图的路径。
         */
        this.ImagePathSet = null;

        /**
         * 雪碧图子图位置与时间关系的 WebVtt 文件路径。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
         */
        this.WebVttPath = null;

        /**
         * 雪碧图文件的存储位置。
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Height: number | null;
        Width: number | null;
        TotalCount: number | null;
        ImagePathSet: Array<string> | null;
        WebVttPath: string | null;
        Storage: TaskOutputStorage | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImagePathSet = 'ImagePathSet' in params ? params.ImagePathSet : null;
        this.WebVttPath = 'WebVttPath' in params ? params.WebVttPath : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * DescribePersonSamples请求参数结构体
 * @class
 */
class DescribePersonSamplesRequest extends AbstractModel {

    Type: string | null
    
    PersonIds: Array<string> | null
    
    Names: Array<string> | null
    
    Tags: Array<string> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 拉取的人物类型，可选值：
<li>UserDefine：用户自定义人物库；</li>
<li>Default：系统默认人物库。</li>

默认值：UserDefine，拉取用户自定义人物库人物。
说明：如果是拉取系统默认人物库，只能使用人物名字或者人物 ID + 人物名字的方式进行拉取，且人脸图片只返回一张。
         */
        this.Type = null;

        /**
         * 人物 ID，数组长度限制：100。
         */
        this.PersonIds = null;

        /**
         * 人物名称，数组长度限制：20。
         */
        this.Names = null;

        /**
         * 人物标签，数组长度限制：20。
         */
        this.Tags = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：100，最大值：100。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        PersonIds: Array<string> | null;
        Names: Array<string> | null;
        Tags: Array<string> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PersonIds = 'PersonIds' in params ? params.PersonIds : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 人脸识别结果
 * @class
 */
class AiRecognitionTaskFaceResultItem extends AbstractModel {

    Id: string | null
    
    Type: string | null
    
    Name: string | null
    
    SegmentSet: Array<AiRecognitionTaskFaceSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 人物唯一标识 ID。
         */
        this.Id = null;

        /**
         * 人物库类型，表示识别出的人物来自哪个人物库：
<li>Default：默认人物库；</li>
<li>UserDefine：用户自定义人物库。</li>
         */
        this.Type = null;

        /**
         * 人物名称。
         */
        this.Name = null;

        /**
         * 人物出现的片段结果集。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: string | null;
        Type: string | null;
        Name: string | null;
        SegmentSet: Array<AiRecognitionTaskFaceSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskFaceSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 智能分类任务输入类型
 * @class
 */
class AiAnalysisTaskCoverInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频智能封面模板 ID。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * 编辑视频任务的输出
 * @class
 */
class EditMediaTaskOutput extends AbstractModel {

    OutputStorage: TaskOutputStorage | null
    
    Path: string | null
    
    constructor(){
        super();

        /**
         * 编辑后文件的目标存储。
         */
        this.OutputStorage = null;

        /**
         * 编辑后的视频文件路径。
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OutputStorage: TaskOutputStorage | null;
        Path: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * DeleteWatermarkTemplate返回参数结构体
 * @class
 */
class DeleteWatermarkTemplateResponse extends AbstractModel {

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
 * DescribeMediaMetaData请求参数结构体
 * @class
 */
class DescribeMediaMetaDataRequest extends AbstractModel {

    InputInfo: MediaInputInfo | null
    
    constructor(){
        super();

        /**
         * 需要获取元信息的文件输入信息。
         */
        this.InputInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InputInfo: MediaInputInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

    }
}

/**
 * 智能按帧标签任务控制参数
 * @class
 */
class FrameTagConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateImageSpriteTemplate返回参数结构体
 * @class
 */
class CreateImageSpriteTemplateResponse extends AbstractModel {

    Definition: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAIRecognitionTemplates请求参数结构体
 * @class
 */
class DescribeAIRecognitionTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识过滤条件，数组长度限制：10。
         */
        this.Definitions = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：50。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyWatermarkTemplate返回参数结构体
 * @class
 */
class ModifyWatermarkTemplateResponse extends AbstractModel {

    ImageUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有效。
         */
        this.ImageUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能识别结果。
 * @class
 */
class AiRecognitionResult extends AbstractModel {

    Type: string | null
    
    FaceTask: AiRecognitionTaskFaceResult | null
    
    AsrWordsTask: AiRecognitionTaskAsrWordsResult | null
    
    AsrFullTextTask: AiRecognitionTaskAsrFullTextResult | null
    
    OcrWordsTask: AiRecognitionTaskOcrWordsResult | null
    
    OcrFullTextTask: AiRecognitionTaskOcrFullTextResult | null
    
    constructor(){
        super();

        /**
         * 任务的类型，取值范围：
<li>FaceRecognition：人脸识别，</li>
<li>AsrWordsRecognition：语音关键词识别，</li>
<li>OcrWordsRecognition：文本关键词识别，</li>
<li>AsrFullTextRecognition：语音全文识别，</li>
<li>OcrFullTextRecognition：文本全文识别。</li>
         */
        this.Type = null;

        /**
         * 人脸识别结果，当 Type 为 
 FaceRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FaceTask = null;

        /**
         * 语音关键词识别结果，当 Type 为
 AsrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrWordsTask = null;

        /**
         * 语音全文识别结果，当 Type 为
 AsrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrFullTextTask = null;

        /**
         * 文本关键词识别结果，当 Type 为
 OcrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OcrWordsTask = null;

        /**
         * 文本全文识别结果，当 Type 为
 OcrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OcrFullTextTask = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        FaceTask: AiRecognitionTaskFaceResult | null;
        AsrWordsTask: AiRecognitionTaskAsrWordsResult | null;
        AsrFullTextTask: AiRecognitionTaskAsrFullTextResult | null;
        OcrWordsTask: AiRecognitionTaskOcrWordsResult | null;
        OcrFullTextTask: AiRecognitionTaskOcrFullTextResult | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.FaceTask) {
            let obj = new AiRecognitionTaskFaceResult();
            obj.deserialize(params.FaceTask)
            this.FaceTask = obj;
        }

        if (params.AsrWordsTask) {
            let obj = new AiRecognitionTaskAsrWordsResult();
            obj.deserialize(params.AsrWordsTask)
            this.AsrWordsTask = obj;
        }

        if (params.AsrFullTextTask) {
            let obj = new AiRecognitionTaskAsrFullTextResult();
            obj.deserialize(params.AsrFullTextTask)
            this.AsrFullTextTask = obj;
        }

        if (params.OcrWordsTask) {
            let obj = new AiRecognitionTaskOcrWordsResult();
            obj.deserialize(params.OcrWordsTask)
            this.OcrWordsTask = obj;
        }

        if (params.OcrFullTextTask) {
            let obj = new AiRecognitionTaskOcrFullTextResult();
            obj.deserialize(params.OcrFullTextTask)
            this.OcrFullTextTask = obj;
        }

    }
}

export const Models = {
    ModifySnapshotByTimeOffsetTemplateResponse: ModifySnapshotByTimeOffsetTemplateResponse,
    ModifySampleSnapshotTemplateResponse: ModifySampleSnapshotTemplateResponse,
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    AiRecognitionTaskAsrFullTextSegmentItem: AiRecognitionTaskAsrFullTextSegmentItem,
    UserDefineOcrTextReviewTemplateInfoForUpdate: UserDefineOcrTextReviewTemplateInfoForUpdate,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    SvgWatermarkInput: SvgWatermarkInput,
    WorkflowInfo: WorkflowInfo,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    ProcessLiveStreamResponse: ProcessLiveStreamResponse,
    DescribeAnimatedGraphicsTemplatesRequest: DescribeAnimatedGraphicsTemplatesRequest,
    AiReviewTaskProhibitedAsrResult: AiReviewTaskProhibitedAsrResult,
    AdaptiveDynamicStreamingTemplate: AdaptiveDynamicStreamingTemplate,
    DeleteAnimatedGraphicsTemplateResponse: DeleteAnimatedGraphicsTemplateResponse,
    AiReviewTaskProhibitedOcrResult: AiReviewTaskProhibitedOcrResult,
    AiRecognitionTaskAsrFullTextResultOutput: AiRecognitionTaskAsrFullTextResultOutput,
    AiReviewProhibitedOcrTaskOutput: AiReviewProhibitedOcrTaskOutput,
    ManageTaskResponse: ManageTaskResponse,
    DeleteWorkflowRequest: DeleteWorkflowRequest,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    ModifySampleSnapshotTemplateRequest: ModifySampleSnapshotTemplateRequest,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    MediaInputInfo: MediaInputInfo,
    CreateWorkflowRequest: CreateWorkflowRequest,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    RawWatermarkParameter: RawWatermarkParameter,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    ManageTaskRequest: ManageTaskRequest,
    CreateImageSpriteTemplateRequest: CreateImageSpriteTemplateRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    MosaicInput: MosaicInput,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    DeletePersonSampleRequest: DeletePersonSampleRequest,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    ParseLiveStreamProcessNotificationResponse: ParseLiveStreamProcessNotificationResponse,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    AudioTemplateInfo: AudioTemplateInfo,
    CoverConfigureInfo: CoverConfigureInfo,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    CreateAdaptiveDynamicStreamingTemplateRequest: CreateAdaptiveDynamicStreamingTemplateRequest,
    TerrorismImgReviewTemplateInfoForUpdate: TerrorismImgReviewTemplateInfoForUpdate,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    AiReviewTerrorismOcrTaskInput: AiReviewTerrorismOcrTaskInput,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    DeleteWorkflowResponse: DeleteWorkflowResponse,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    CreatePersonSampleRequest: CreatePersonSampleRequest,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    CosInputInfo: CosInputInfo,
    TagConfigureInfo: TagConfigureInfo,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    AiSampleFaceInfo: AiSampleFaceInfo,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    NumberFormat: NumberFormat,
    EnableWorkflowRequest: EnableWorkflowRequest,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    EditMediaTaskInput: EditMediaTaskInput,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    DescribeWordSamplesResponse: DescribeWordSamplesResponse,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    MediaProcessTaskAdaptiveDynamicStreamingResult: MediaProcessTaskAdaptiveDynamicStreamingResult,
    OcrWordsConfigureInfoForUpdate: OcrWordsConfigureInfoForUpdate,
    WatermarkTemplate: WatermarkTemplate,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    LiveStreamAiReviewResultInfo: LiveStreamAiReviewResultInfo,
    EditMediaResponse: EditMediaResponse,
    PoliticalOcrReviewTemplateInfoForUpdate: PoliticalOcrReviewTemplateInfoForUpdate,
    PornAsrReviewTemplateInfoForUpdate: PornAsrReviewTemplateInfoForUpdate,
    DescribeSnapshotByTimeOffsetTemplatesRequest: DescribeSnapshotByTimeOffsetTemplatesRequest,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    MediaProcessTaskInput: MediaProcessTaskInput,
    CosOutputStorage: CosOutputStorage,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    ProcessMediaResponse: ProcessMediaResponse,
    CreateWordSamplesResponse: CreateWordSamplesResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    DeleteAdaptiveDynamicStreamingTemplateResponse: DeleteAdaptiveDynamicStreamingTemplateResponse,
    ParseNotificationRequest: ParseNotificationRequest,
    CreateWordSamplesRequest: CreateWordSamplesRequest,
    PoliticalAsrReviewTemplateInfoForUpdate: PoliticalAsrReviewTemplateInfoForUpdate,
    AiSampleFaceOperation: AiSampleFaceOperation,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    AiReviewTaskTerrorismOcrResult: AiReviewTaskTerrorismOcrResult,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    ProhibitedAsrReviewTemplateInfoForUpdate: ProhibitedAsrReviewTemplateInfoForUpdate,
    ModifyAnimatedGraphicsTemplateResponse: ModifyAnimatedGraphicsTemplateResponse,
    DeleteAdaptiveDynamicStreamingTemplateRequest: DeleteAdaptiveDynamicStreamingTemplateRequest,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    DeleteAIAnalysisTemplateRequest: DeleteAIAnalysisTemplateRequest,
    EditMediaRequest: EditMediaRequest,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    DescribeAdaptiveDynamicStreamingTemplatesResponse: DescribeAdaptiveDynamicStreamingTemplatesResponse,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    DescribeAdaptiveDynamicStreamingTemplatesRequest: DescribeAdaptiveDynamicStreamingTemplatesRequest,
    ImageWatermarkInput: ImageWatermarkInput,
    AsrFullTextConfigureInfoForUpdate: AsrFullTextConfigureInfoForUpdate,
    CreatePersonSampleResponse: CreatePersonSampleResponse,
    CreateContentReviewTemplateResponse: CreateContentReviewTemplateResponse,
    ProhibitedConfigureInfoForUpdate: ProhibitedConfigureInfoForUpdate,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    DeleteWordSamplesRequest: DeleteWordSamplesRequest,
    RawTranscodeParameter: RawTranscodeParameter,
    LiveStreamTaskNotifyConfig: LiveStreamTaskNotifyConfig,
    VideoTemplateInfo: VideoTemplateInfo,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    PornOcrReviewTemplateInfoForUpdate: PornOcrReviewTemplateInfoForUpdate,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    ModifyContentReviewTemplateResponse: ModifyContentReviewTemplateResponse,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    TaskOutputStorage: TaskOutputStorage,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    ModifyAdaptiveDynamicStreamingTemplateRequest: ModifyAdaptiveDynamicStreamingTemplateRequest,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    ModifyWordSampleRequest: ModifyWordSampleRequest,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    ProcessMediaRequest: ProcessMediaRequest,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    AiSampleWord: AiSampleWord,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    LiveStreamOcrWordsRecognitionResult: LiveStreamOcrWordsRecognitionResult,
    LiveStreamProcessErrorInfo: LiveStreamProcessErrorInfo,
    ModifyAdaptiveDynamicStreamingTemplateResponse: ModifyAdaptiveDynamicStreamingTemplateResponse,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    DeleteContentReviewTemplateResponse: DeleteContentReviewTemplateResponse,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    LiveStreamAsrWordsRecognitionResult: LiveStreamAsrWordsRecognitionResult,
    AiSamplePerson: AiSamplePerson,
    DescribeWorkflowsResponse: DescribeWorkflowsResponse,
    AsrWordsConfigureInfoForUpdate: AsrWordsConfigureInfoForUpdate,
    DeleteImageSpriteTemplateResponse: DeleteImageSpriteTemplateResponse,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    TEHDConfig: TEHDConfig,
    AnimatedGraphicsTemplate: AnimatedGraphicsTemplate,
    WorkflowTrigger: WorkflowTrigger,
    LiveStreamAiRecognitionResultInfo: LiveStreamAiRecognitionResultInfo,
    LiveStreamAiReviewImagePoliticalResult: LiveStreamAiReviewImagePoliticalResult,
    TerrorismOcrReviewTemplateInfoForUpdate: TerrorismOcrReviewTemplateInfoForUpdate,
    UserDefineAsrTextReviewTemplateInfoForUpdate: UserDefineAsrTextReviewTemplateInfoForUpdate,
    ModifyImageSpriteTemplateResponse: ModifyImageSpriteTemplateResponse,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    TerrorismConfigureInfoForUpdate: TerrorismConfigureInfoForUpdate,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    DeleteContentReviewTemplateRequest: DeleteContentReviewTemplateRequest,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    RawImageWatermarkInput: RawImageWatermarkInput,
    DescribeImageSpriteTemplatesRequest: DescribeImageSpriteTemplatesRequest,
    AiSampleTagOperation: AiSampleTagOperation,
    CreateAIRecognitionTemplateResponse: CreateAIRecognitionTemplateResponse,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    ProhibitedConfigureInfo: ProhibitedConfigureInfo,
    AiReviewTerrorismOcrTaskOutput: AiReviewTerrorismOcrTaskOutput,
    AiAnalysisResult: AiAnalysisResult,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    DeleteSampleSnapshotTemplateResponse: DeleteSampleSnapshotTemplateResponse,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    ResetWorkflowRequest: ResetWorkflowRequest,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    LiveStreamAiReviewVoicePornResult: LiveStreamAiReviewVoicePornResult,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    DeletePersonSampleResponse: DeletePersonSampleResponse,
    CreateSnapshotByTimeOffsetTemplateResponse: CreateSnapshotByTimeOffsetTemplateResponse,
    ModifyContentReviewTemplateRequest: ModifyContentReviewTemplateRequest,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    CreateAdaptiveDynamicStreamingTemplateResponse: CreateAdaptiveDynamicStreamingTemplateResponse,
    DeleteSampleSnapshotTemplateRequest: DeleteSampleSnapshotTemplateRequest,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    ImageSpriteTemplate: ImageSpriteTemplate,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    LiveStreamAsrFullTextRecognitionResult: LiveStreamAsrFullTextRecognitionResult,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    CreateSampleSnapshotTemplateResponse: CreateSampleSnapshotTemplateResponse,
    ProhibitedAsrReviewTemplateInfo: ProhibitedAsrReviewTemplateInfo,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    TranscodeTemplate: TranscodeTemplate,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    PornConfigureInfoForUpdate: PornConfigureInfoForUpdate,
    AiReviewProhibitedAsrTaskInput: AiReviewProhibitedAsrTaskInput,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    TerrorismOcrReviewTemplateInfo: TerrorismOcrReviewTemplateInfo,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    AiReviewProhibitedAsrTaskOutput: AiReviewProhibitedAsrTaskOutput,
    LiveStreamFaceRecognitionResult: LiveStreamFaceRecognitionResult,
    DescribeSampleSnapshotTemplatesRequest: DescribeSampleSnapshotTemplatesRequest,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    DisableWorkflowResponse: DisableWorkflowResponse,
    SampleSnapshotTemplate: SampleSnapshotTemplate,
    PoliticalImgReviewTemplateInfoForUpdate: PoliticalImgReviewTemplateInfoForUpdate,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    AdaptiveStreamTemplate: AdaptiveStreamTemplate,
    TranscodeTaskInput: TranscodeTaskInput,
    ModifyAIRecognitionTemplateRequest: ModifyAIRecognitionTemplateRequest,
    ParseNotificationResponse: ParseNotificationResponse,
    ResetWorkflowResponse: ResetWorkflowResponse,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    UserDefineConfigureInfoForUpdate: UserDefineConfigureInfoForUpdate,
    CosFileUploadTrigger: CosFileUploadTrigger,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    TEHDConfigForUpdate: TEHDConfigForUpdate,
    ModifyPersonSampleRequest: ModifyPersonSampleRequest,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    DescribeMediaMetaDataResponse: DescribeMediaMetaDataResponse,
    CreateAIRecognitionTemplateRequest: CreateAIRecognitionTemplateRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    CreateWorkflowResponse: CreateWorkflowResponse,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    ModifyAIRecognitionTemplateResponse: ModifyAIRecognitionTemplateResponse,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    ModifyAnimatedGraphicsTemplateRequest: ModifyAnimatedGraphicsTemplateRequest,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteWordSamplesResponse: DeleteWordSamplesResponse,
    WatermarkInput: WatermarkInput,
    EnableWorkflowResponse: EnableWorkflowResponse,
    AiSampleWordInfo: AiSampleWordInfo,
    AdaptiveDynamicStreamingInfoItem: AdaptiveDynamicStreamingInfoItem,
    ProhibitedOcrReviewTemplateInfo: ProhibitedOcrReviewTemplateInfo,
    LiveStreamOcrFullTextRecognitionResult: LiveStreamOcrFullTextRecognitionResult,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaMetaData: MediaMetaData,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    CreateContentReviewTemplateRequest: CreateContentReviewTemplateRequest,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    AdaptiveDynamicStreamingTaskInput: AdaptiveDynamicStreamingTaskInput,
    DescribeImageSpriteTemplatesResponse: DescribeImageSpriteTemplatesResponse,
    TaskNotifyConfig: TaskNotifyConfig,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    LiveStreamAiRecognitionResultItem: LiveStreamAiRecognitionResultItem,
    DeleteImageSpriteTemplateRequest: DeleteImageSpriteTemplateRequest,
    AiSampleFailFaceInfo: AiSampleFailFaceInfo,
    UserDefineFaceReviewTemplateInfoForUpdate: UserDefineFaceReviewTemplateInfoForUpdate,
    OcrFullTextConfigureInfoForUpdate: OcrFullTextConfigureInfoForUpdate,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    DescribeTasksResponse: DescribeTasksResponse,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    LiveStreamAiReviewImagePornResult: LiveStreamAiReviewImagePornResult,
    ModifySnapshotByTimeOffsetTemplateRequest: ModifySnapshotByTimeOffsetTemplateRequest,
    LiveStreamAiReviewResultItem: LiveStreamAiReviewResultItem,
    TaskSimpleInfo: TaskSimpleInfo,
    DescribeSnapshotByTimeOffsetTemplatesResponse: DescribeSnapshotByTimeOffsetTemplatesResponse,
    MediaVideoStreamItem: MediaVideoStreamItem,
    SnapshotByTimeOffsetTemplate: SnapshotByTimeOffsetTemplate,
    DeleteSnapshotByTimeOffsetTemplateResponse: DeleteSnapshotByTimeOffsetTemplateResponse,
    ProhibitedOcrReviewTemplateInfoForUpdate: ProhibitedOcrReviewTemplateInfoForUpdate,
    DescribeTasksRequest: DescribeTasksRequest,
    FaceConfigureInfoForUpdate: FaceConfigureInfoForUpdate,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    DescribeWorkflowsRequest: DescribeWorkflowsRequest,
    MediaAudioStreamItem: MediaAudioStreamItem,
    LiveStreamAiReviewImageTerrorismResult: LiveStreamAiReviewImageTerrorismResult,
    ProcessLiveStreamRequest: ProcessLiveStreamRequest,
    ModifyImageSpriteTemplateRequest: ModifyImageSpriteTemplateRequest,
    AiReviewProhibitedOcrTaskInput: AiReviewProhibitedOcrTaskInput,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    DescribeWordSamplesRequest: DescribeWordSamplesRequest,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    LiveStreamProcessTask: LiveStreamProcessTask,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    DescribeSampleSnapshotTemplatesResponse: DescribeSampleSnapshotTemplatesResponse,
    ModifyWordSampleResponse: ModifyWordSampleResponse,
    AiContentReviewResult: AiContentReviewResult,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    DisableWorkflowRequest: DisableWorkflowRequest,
    PoliticalConfigureInfoForUpdate: PoliticalConfigureInfoForUpdate,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    CreateAnimatedGraphicsTemplateRequest: CreateAnimatedGraphicsTemplateRequest,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    ModifyPersonSampleResponse: ModifyPersonSampleResponse,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    MediaTranscodeItem: MediaTranscodeItem,
    DescribePersonSamplesResponse: DescribePersonSamplesResponse,
    PornConfigureInfo: PornConfigureInfo,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    CreateSnapshotByTimeOffsetTemplateRequest: CreateSnapshotByTimeOffsetTemplateRequest,
    ParseLiveStreamProcessNotificationRequest: ParseLiveStreamProcessNotificationRequest,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    CreateSampleSnapshotTemplateRequest: CreateSampleSnapshotTemplateRequest,
    WorkflowTask: WorkflowTask,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    EditMediaFileInfo: EditMediaFileInfo,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    PornImgReviewTemplateInfoForUpdate: PornImgReviewTemplateInfoForUpdate,
    EditMediaTask: EditMediaTask,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    DeleteAnimatedGraphicsTemplateRequest: DeleteAnimatedGraphicsTemplateRequest,
    DeleteSnapshotByTimeOffsetTemplateRequest: DeleteSnapshotByTimeOffsetTemplateRequest,
    DescribeAnimatedGraphicsTemplatesResponse: DescribeAnimatedGraphicsTemplatesResponse,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    CreateAnimatedGraphicsTemplateResponse: CreateAnimatedGraphicsTemplateResponse,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    MediaImageSpriteItem: MediaImageSpriteItem,
    DescribePersonSamplesRequest: DescribePersonSamplesRequest,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    EditMediaTaskOutput: EditMediaTaskOutput,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    DescribeMediaMetaDataRequest: DescribeMediaMetaDataRequest,
    FrameTagConfigureInfoForUpdate: FrameTagConfigureInfoForUpdate,
    CreateImageSpriteTemplateResponse: CreateImageSpriteTemplateResponse,
    DescribeAIRecognitionTemplatesRequest: DescribeAIRecognitionTemplatesRequest,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    AiRecognitionResult: AiRecognitionResult,

}
