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
 * 画布信息。制作视频时，如果源素材（视频或者图片）不能填满输出的视频窗口，将用设置的画布进行背景绘制。
 * @class
 */
class Canvas extends AbstractModel {

    Color: string | null
    
    Width: number | null
    
    Height: number | null
    
    constructor(){
        super();

        /**
         * 背景颜色，取值有：
<li>Black：黑色背景</li>
<li>White：白色背景</li>
默认值：Black。
         */
        this.Color = null;

        /**
         * 画布宽度，即输出视频的宽度，取值范围：0~ 4096，单位：px。
默认值：0，表示和第一个视频轨的第一个视频片段的视频宽度一致。
         */
        this.Width = null;

        /**
         * 画布高度，即输出视频的高度（或长边），取值范围：0~ 4096，单位：px。
默认值：0，表示和第一个视频轨的第一个视频片段的视频高度一致。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Color: string | null;
        Width: number | null;
        Height: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Color = 'Color' in params ? params.Color : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

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
    
    SubAppId: number | null
    
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
         * SVG 水印模板，该字段仅对 SVG 水印模板有效。
         */
        this.SvgTemplate = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * DescribeAllClass请求参数结构体
 * @class
 */
class DescribeAllClassRequest extends AbstractModel {

    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * WeChatMiniProgramPublish请求参数结构体
 * @class
 */
class WeChatMiniProgramPublishRequest extends AbstractModel {

    FileId: string | null
    
    SourceDefinition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体文件 ID。
         */
        this.FileId = null;

        /**
         * 发布视频所对应的转码模板 ID，为0代表原始视频。
         */
        this.SourceDefinition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        SourceDefinition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 转场操作
 * @class
 */
class TransitionOpertion extends AbstractModel {

    Type: string | null
    
    constructor(){
        super();

        /**
         * 转场类型，取值有：
<ul>
<li>图像的转场操作，用于两个视频片段图像间的转场处理：
<ul>
<li>ImageFadeInFadeOut：图像淡入淡出。 </li>
<li>BowTieHorizontal：水平蝴蝶结。 </li>
<li>BowTieVertical：垂直蝴蝶结。 </li>
<li>ButterflyWaveScrawler：晃动。 </li>
<li>Cannabisleaf：枫叶。 </li>
<li>Circle：弧形收放。 </li>
<li>CircleCrop：圆环聚拢。 </li>
<li>Circleopen：椭圆聚拢。 </li>
<li>Crosswarp：横向翘曲。 </li>
<li>Cube：立方体。 </li>
<li>DoomScreenTransition：幕布。 </li>
<li>Doorway：门廊。 </li>
<li>Dreamy：波浪。 </li>
<li>DreamyZoom：水平聚拢。 </li>
<li>FilmBurn：火烧云。 </li>
<li>GlitchMemories：抖动。 </li>
<li>Heart：心形。 </li>
<li>InvertedPageCurl：翻页。 </li>
<li>Luma：腐蚀。 </li>
<li>Mosaic：九宫格。 </li>
<li>Pinwheel：风车。 </li>
<li>PolarFunction：椭圆扩散。 </li>
<li>PolkaDotsCurtain：弧形扩散。 </li>
<li>Radial：雷达扫描 </li>
<li>RotateScaleFade：上下收放。 </li>
<li>Squeeze：上下聚拢。 </li>
<li>Swap：放大切换。 </li>
<li>Swirl：螺旋。 </li>
<li>UndulatingBurnOutSwirl：水流蔓延。 </li>
<li>Windowblinds：百叶窗。 </li>
<li>WipeDown：向下收起。 </li>
<li>WipeLeft：向左收起。 </li>
<li>WipeRight：向右收起。 </li>
<li>WipeUp：向上收起。 </li>
<li>ZoomInCircles：水波纹。 </li>
</ul>
</li>
<li>音频的转场操作，用于两个音频片段间的转场处理：
<ul>
<li>AudioFadeInFadeOut：声音淡入淡出。 </li>
</ul>
</li>
</ul>
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 音频轨道上的音频片段信息。
 * @class
 */
class AudioTrackItem extends AbstractModel {

    SourceMedia: string | null
    
    SourceMediaStartTime: number | null
    
    Duration: number | null
    
    AudioOperations: Array<AudioTransform> | null
    
    constructor(){
        super();

        /**
         * 音频素材的媒体文件来源。可以是点播的文件 ID，也可以是其它文件的 URL。
         */
        this.SourceMedia = null;

        /**
         * 音频片段取自素材文件的起始时间，单位为秒。0 表示从素材开始位置截取。默认为0。
         */
        this.SourceMediaStartTime = null;

        /**
         * 音频片段的时长，单位为秒。默认和素材本身长度一致，表示截取全部素材。
         */
        this.Duration = null;

        /**
         * 对音频片段进行的操作，如音量调节等。
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SourceMedia: string | null;
        SourceMediaStartTime: number | null;
        Duration: number | null;
        AudioOperations: Array<AudioTransform> | null;
    }): void {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new AudioTransform();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
            }
        }

    }
}

/**
 * 智能精彩片段信息
 * @class
 */
class MediaAiAnalysisHighlightItem extends AbstractModel {

    HighlightUrl: string | null
    
    CovImgUrl: string | null
    
    Confidence: number | null
    
    Duration: number | null
    
    SegmentSet: Array<HighlightSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 智能精彩集锦地址。
         */
        this.HighlightUrl = null;

        /**
         * 智能精彩集锦封面地址。
         */
        this.CovImgUrl = null;

        /**
         * 智能精彩集锦的可信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

        /**
         * 智能精彩集锦持续时间。
         */
        this.Duration = null;

        /**
         * 智能精彩集锦子片段列表，精彩集锦片段由这些子片段拼接生成。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HighlightUrl: string | null;
        CovImgUrl: string | null;
        Confidence: number | null;
        Duration: number | null;
        SegmentSet: Array<HighlightSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.HighlightUrl = 'HighlightUrl' in params ? params.HighlightUrl : null;
        this.CovImgUrl = 'CovImgUrl' in params ? params.CovImgUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new HighlightSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    DrmType: string | null
    
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
         * 自适应转码格式，取值范围：
<li>HLS。</li>
         */
        this.Format = null;

        /**
         * DRM 类型，取值范围：
<li>FairPlay；</li>
<li>SimpleAES；</li>
<li>Widevine。</li>
如果取值为空字符串，代表不对视频做 DRM 保护。
         */
        this.DrmType = null;

        /**
         * 自适应转码输入流参数信息，最多输入10路流。
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
        DrmType: string | null;
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
        this.DrmType = 'DrmType' in params ? params.DrmType : null;

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
    
    SubtitleUrl: string | null
    
    constructor(){
        super();

        /**
         * 语音全文识别片段列表。
         */
        this.SegmentSet = null;

        /**
         * 字幕文件 Url。
         */
        this.SubtitleUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SegmentSet: Array<AiRecognitionTaskAsrFullTextSegmentItem> | null;
        SubtitleUrl: string | null;
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
        this.SubtitleUrl = 'SubtitleUrl' in params ? params.SubtitleUrl : null;

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
 * 小程序审核概要元信息
 * @class
 */
class MediaMiniProgramReviewElem extends AbstractModel {

    Type: string | null
    
    Suggestion: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 审核类型。 
<li>Porn：画面涉黄，</li>
<li>Porn.Ocr：文字涉黄，</li>
<li>Porn.Asr：声音涉黄，</li>
<li>Terrorism：画面涉暴恐，</li>
<li>Political：画面涉政，</li>
<li>Political.Ocr：文字涉政，</li>
<li>Political.Asr：声音涉政。</li>
         */
        this.Type = null;

        /**
         * 审核意见。
<li>pass：确认正常，</li>
<li>block：确认违规，</li>
<li>review：疑似违规。</li>
         */
        this.Suggestion = null;

        /**
         * 审核结果置信度。取值 0~100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Suggestion: string | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 智能封面结果信息
 * @class
 */
class AiAnalysisTaskCoverOutput extends AbstractModel {

    CoverSet: Array<MediaAiAnalysisCoverItem> | null
    
    constructor(){
        super();

        /**
         * 智能封面列表。
         */
        this.CoverSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CoverSet: Array<MediaAiAnalysisCoverItem> | null;
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

    }
}

/**
 * 点播文件指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends AbstractModel {

    Definition: number | null
    
    PicInfoSet: Array<MediaSnapshotByTimePicInfoItem> | null
    
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

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        PicInfoSet: Array<MediaSnapshotByTimePicInfoItem> | null;
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
    
    SubAppId: number | null
    
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
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
 * 要处理的源视频信息，视频名称、视频自定义 ID。
 * @class
 */
class MediaInputInfo extends AbstractModel {

    Url: string | null
    
    Name: string | null
    
    Id: string | null
    
    constructor(){
        super();

        /**
         * 视频 URL。
         */
        this.Url = null;

        /**
         * 视频名称。
         */
        this.Name = null;

        /**
         * 视频自定义 ID。
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Url: string | null;
        Name: string | null;
        Id: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 视频截取雪碧图任务，该结构仅用于对 2017 版[截取雪碧图](https://cloud.tencent.com/document/product/266/8101)接口发起的任务。
 * @class
 */
class CreateImageSpriteTask2017 extends AbstractModel {

    TaskId: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    Definition: number | null
    
    TotalCount: number | null
    
    ImageSpriteUrlSet: Array<string> | null
    
    WebVttUrl: string | null
    
    constructor(){
        super();

        /**
         * 截图雪碧图任务 ID。
         */
        this.TaskId = null;

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
         * 截取雪碧图文件 ID。
         */
        this.FileId = null;

        /**
         * 雪碧图规格，参见[雪碧图截图模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         */
        this.Definition = null;

        /**
         * 雪碧图小图总数量。
         */
        this.TotalCount = null;

        /**
         * 截取雪碧图输出的地址。
         */
        this.ImageSpriteUrlSet = null;

        /**
         * 雪碧图子图位置与时间关系 WebVtt 文件地址。
         */
        this.WebVttUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        Definition: number | null;
        TotalCount: number | null;
        ImageSpriteUrlSet: Array<string> | null;
        WebVttUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImageSpriteUrlSet = 'ImageSpriteUrlSet' in params ? params.ImageSpriteUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;

    }
}

/**
 * 临时凭证
 * @class
 */
class TempCertificate extends AbstractModel {

    SecretId: string | null
    
    SecretKey: string | null
    
    Token: string | null
    
    ExpiredTime: number | null
    
    constructor(){
        super();

        /**
         * 临时安全证书 Id。
         */
        this.SecretId = null;

        /**
         * 临时安全证书 Key。
         */
        this.SecretKey = null;

        /**
         * Token 值。
         */
        this.Token = null;

        /**
         * 证书无效的时间，返回 Unix 时间戳，精确到秒。
         */
        this.ExpiredTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SecretId: string | null;
        SecretKey: string | null;
        Token: string | null;
        ExpiredTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;

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
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * CreateImageSpriteTemplate请求参数结构体
 * @class
 */
class CreateImageSpriteTemplateRequest extends AbstractModel {

    SampleType: string | null
    
    SampleInterval: number | null
    
    RowCount: number | null
    
    ColumnCount: number | null
    
    Name: string | null
    
    Comment: string | null
    
    FillType: string | null
    
    Width: number | null
    
    Height: number | null
    
    ResolutionAdaptive: string | null
    
    SubAppId: number | null
    
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
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
         */
        this.FillType = null;

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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        Comment: string | null;
        FillType: string | null;
        Width: number | null;
        Height: number | null;
        ResolutionAdaptive: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimePicInfoItem extends AbstractModel {

    TimeOffset: number | null
    
    Url: string | null
    
    WaterMarkDefinition: Array<number> | null
    
    constructor(){
        super();

        /**
         * 该张截图对应视频文件中的时间偏移，单位为<font color=red>毫秒</font>。
         */
        this.TimeOffset = null;

        /**
         * 该张截图的 URL 地址。
         */
        this.Url = null;

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
        Url: string | null;
        WaterMarkDefinition: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Url = 'Url' in params ? params.Url : null;
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
    
    ReviewWallSwitch: string | null
    
    ScreenshotInterval: number | null
    
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
         * 审核结果是否进入审核墙（对审核结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
         */
        this.ReviewWallSwitch = null;

        /**
         * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         */
        this.ScreenshotInterval = null;

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
        Name: string | null;
        Comment: string | null;
        PornConfigure: PornConfigureInfo | null;
        TerrorismConfigure: TerrorismConfigureInfo | null;
        PoliticalConfigure: PoliticalConfigureInfo | null;
        ProhibitedConfigure: ProhibitedConfigureInfo | null;
        UserDefineConfigure: UserDefineConfigureInfo | null;
        ReviewWallSwitch: string | null;
        ScreenshotInterval: number | null;
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
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
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
 * DeleteContentReviewTemplate请求参数结构体
 * @class
 */
class DeleteContentReviewTemplateRequest extends AbstractModel {

    Definition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 音频操作
 * @class
 */
class AudioTransform extends AbstractModel {

    Type: string | null
    
    VolumeParam: AudioVolumeParam | null
    
    constructor(){
        super();

        /**
         * 音频操作类型，取值有：
<li>Volume：音量调节。</li>
         */
        this.Type = null;

        /**
         * 音量调节参数， 当 Type = Volume 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VolumeParam = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        VolumeParam: AudioVolumeParam | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VolumeParam) {
            let obj = new AudioVolumeParam();
            obj.deserialize(params.VolumeParam)
            this.VolumeParam = obj;
        }

    }
}

/**
 * ResetProcedureTemplate请求参数结构体
 * @class
 */
class ResetProcedureTemplateRequest extends AbstractModel {

    Name: string | null
    
    Comment: string | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 任务流名字
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 视频处理类型任务参数。
         */
        this.MediaProcessTask = null;

        /**
         * AI 智能内容审核类型任务参数。
         */
        this.AiContentReviewTask = null;

        /**
         * AI 智能内容分析类型任务参数。
         */
        this.AiAnalysisTask = null;

        /**
         * AI 内容识别类型任务参数。
         */
        this.AiRecognitionTask = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Comment: string | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ComposeMedia返回参数结构体
 * @class
 */
class ComposeMediaResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 制作媒体文件的任务 ID，可以通过该 ID 查询制作任务（任务类型为 MakeMedia）的状态。
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
 * DeleteSampleSnapshotTemplate请求参数结构体
 * @class
 */
class DeleteSampleSnapshotTemplateRequest extends AbstractModel {

    Definition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 采样截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeStorageData返回参数结构体
 * @class
 */
class DescribeStorageDataResponse extends AbstractModel {

    MediaCount: number | null
    
    TotalStorage: number | null
    
    InfrequentStorage: number | null
    
    StandardStorage: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 当前媒体总量。
         */
        this.MediaCount = null;

        /**
         * 当前总存储量，单位是字节。
         */
        this.TotalStorage = null;

        /**
         * 当前低频存储量，单位是字节。
         */
        this.InfrequentStorage = null;

        /**
         * 当前标准存储量，单位是字节。
         */
        this.StandardStorage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaCount: number | null;
        TotalStorage: number | null;
        InfrequentStorage: number | null;
        StandardStorage: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MediaCount = 'MediaCount' in params ? params.MediaCount : null;
        this.TotalStorage = 'TotalStorage' in params ? params.TotalStorage : null;
        this.InfrequentStorage = 'InfrequentStorage' in params ? params.InfrequentStorage : null;
        this.StandardStorage = 'StandardStorage' in params ? params.StandardStorage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifySubAppIdInfo请求参数结构体
 * @class
 */
class ModifySubAppIdInfoRequest extends AbstractModel {

    SubAppId: number | null
    
    Name: string | null
    
    Description: string | null
    
    constructor(){
        super();

        /**
         * 子应用 ID。
         */
        this.SubAppId = null;

        /**
         * 子应用名称，长度限制：40个字符。
         */
        this.Name = null;

        /**
         * 子应用简介，长度限制： 300个字符。
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubAppId: number | null;
        Name: string | null;
        Description: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeletePersonSample请求参数结构体
 * @class
 */
class DeletePersonSampleRequest extends AbstractModel {

    PersonId: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 人物 ID。
         */
        this.PersonId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonId: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    ImageUrlSet: Array<string> | null
    
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
         * 生成的截图 url 列表。
         */
        this.ImageUrlSet = null;

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
        ImageUrlSet: Array<string> | null;
        WaterMarkDefinition: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

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
<li>libmp3lame：更适合 flv；</li>
<li>mp2。</li>
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
 * ExecuteFunction返回参数结构体
 * @class
 */
class ExecuteFunctionResponse extends AbstractModel {

    Result: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 处理结果打包后的字符串，具体与后台一同协调。
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Result: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ComposeMedia请求参数结构体
 * @class
 */
class ComposeMediaRequest extends AbstractModel {

    Tracks: Array<MediaTrack> | null
    
    Output: ComposeMediaOutput | null
    
    Canvas: Canvas | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息。输入的多个轨道在时间轴上和输出媒体文件的时间轴对齐，时间轴上相同时间点的各个轨道的素材进行重叠，视频或者图片按轨道顺序进行图像的叠加，轨道顺序高的素材叠加在上面；音频素材进行混音。
         */
        this.Tracks = null;

        /**
         * 输出的媒体文件信息。
         */
        this.Output = null;

        /**
         * 制作视频文件时使用的画布。
         */
        this.Canvas = null;

        /**
         * 标识来源上下文，用于透传用户请求信息，在ComposeMediaComplete回调将返回该字段值，最长 1000个字符。
         */
        this.SessionContext = null;

        /**
         * 用于任务去重的识别码，如果一天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tracks: Array<MediaTrack> | null;
        Output: ComposeMediaOutput | null;
        Canvas: Canvas | null;
        SessionContext: string | null;
        SessionId: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new MediaTrack();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }

        if (params.Output) {
            let obj = new ComposeMediaOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    HeadTailConfigure: HeadTailConfigureInfo | null
    
    SegmentConfigure: SegmentConfigureInfo | null
    
    FaceConfigure: FaceConfigureInfo | null
    
    OcrFullTextConfigure: OcrFullTextConfigureInfo | null
    
    OcrWordsConfigure: OcrWordsConfigureInfo | null
    
    AsrFullTextConfigure: AsrFullTextConfigureInfo | null
    
    AsrWordsConfigure: AsrWordsConfigureInfo | null
    
    ObjectConfigure: ObjectConfigureInfo | null
    
    ScreenshotInterval: number | null
    
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
         * 头尾识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HeadTailConfigure = null;

        /**
         * 拆条识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SegmentConfigure = null;

        /**
         * 人脸识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FaceConfigure = null;

        /**
         * 文本全文识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OcrFullTextConfigure = null;

        /**
         * 文本关键词识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OcrWordsConfigure = null;

        /**
         * 语音全文识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrFullTextConfigure = null;

        /**
         * 语音关键词识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrWordsConfigure = null;

        /**
         * 物体识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjectConfigure = null;

        /**
         * 截图时间间隔，单位：秒。
         */
        this.ScreenshotInterval = null;

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
        Name: string | null;
        Comment: string | null;
        HeadTailConfigure: HeadTailConfigureInfo | null;
        SegmentConfigure: SegmentConfigureInfo | null;
        FaceConfigure: FaceConfigureInfo | null;
        OcrFullTextConfigure: OcrFullTextConfigureInfo | null;
        OcrWordsConfigure: OcrWordsConfigureInfo | null;
        AsrFullTextConfigure: AsrFullTextConfigureInfo | null;
        AsrWordsConfigure: AsrWordsConfigureInfo | null;
        ObjectConfigure: ObjectConfigureInfo | null;
        ScreenshotInterval: number | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfo();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

        if (params.SegmentConfigure) {
            let obj = new SegmentConfigureInfo();
            obj.deserialize(params.SegmentConfigure)
            this.SegmentConfigure = obj;
        }

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

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfo();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
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
 * 视频片头片尾识别的输入。
 * @class
 */
class AiRecognitionTaskHeadTailResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频片头片尾识别模板 ID。
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
 * CreateAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateRequest extends AbstractModel {

    Format: string | null
    
    StreamInfos: Array<AdaptiveStreamTemplate> | null
    
    Name: string | null
    
    DrmType: string | null
    
    DisableHigherVideoBitrate: number | null
    
    DisableHigherVideoResolution: number | null
    
    Comment: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 自适应转码格式，取值范围：
<li>HLS。</li>
         */
        this.Format = null;

        /**
         * 自适应转码输出子流参数信息，最多输出10路子流。
注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。
         */
        this.StreamInfos = null;

        /**
         * 模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * DRM方案类型，取值范围：
<li>SimpleAES。</li>
如果取值为空字符串，代表不对视频做 DRM 保护。
         */
        this.DrmType = null;

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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Format: string | null;
        StreamInfos: Array<AdaptiveStreamTemplate> | null;
        Name: string | null;
        DrmType: string | null;
        DisableHigherVideoBitrate: number | null;
        DisableHigherVideoResolution: number | null;
        Comment: string | null;
        SubAppId: number | null;
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
        this.DrmType = 'DrmType' in params ? params.DrmType : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * PushUrlCache返回参数结构体
 * @class
 */
class PushUrlCacheResponse extends AbstractModel {

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 智能精彩片段结果类型
 * @class
 */
class AiAnalysisTaskHighlightResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiAnalysisTaskHighlightInput | null
    
    Output: AiAnalysisTaskHighlightOutput | null
    
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
         * 智能精彩片段任务输入。
         */
        this.Input = null;

        /**
         * 智能精彩片段任务输出。
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
        Input: AiAnalysisTaskHighlightInput | null;
        Output: AiAnalysisTaskHighlightOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskHighlightInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskHighlightOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
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
 * ApplyUpload返回参数结构体
 * @class
 */
class ApplyUploadResponse extends AbstractModel {

    StorageBucket: string | null
    
    StorageRegion: string | null
    
    VodSessionKey: string | null
    
    MediaStoragePath: string | null
    
    CoverStoragePath: string | null
    
    TempCertificate: TempCertificate | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 存储桶，用于上传接口 URL 的 bucket_name。
         */
        this.StorageBucket = null;

        /**
         * 存储园区，用于上传接口 Host 的 Region。
         */
        this.StorageRegion = null;

        /**
         * 点播会话，用于确认上传接口的参数 VodSessionKey。
         */
        this.VodSessionKey = null;

        /**
         * 媒体存储路径，用于上传接口存储媒体的对象键（Key）。
         */
        this.MediaStoragePath = null;

        /**
         * 封面存储路径，用于上传接口存储封面的对象键（Key）。
         */
        this.CoverStoragePath = null;

        /**
         * 临时凭证，用于上传接口的权限验证。
         */
        this.TempCertificate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StorageBucket: string | null;
        StorageRegion: string | null;
        VodSessionKey: string | null;
        MediaStoragePath: string | null;
        CoverStoragePath: string | null;
        TempCertificate: TempCertificate | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StorageBucket = 'StorageBucket' in params ? params.StorageBucket : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.VodSessionKey = 'VodSessionKey' in params ? params.VodSessionKey : null;
        this.MediaStoragePath = 'MediaStoragePath' in params ? params.MediaStoragePath : null;
        this.CoverStoragePath = 'CoverStoragePath' in params ? params.CoverStoragePath : null;

        if (params.TempCertificate) {
            let obj = new TempCertificate();
            obj.deserialize(params.TempCertificate)
            this.TempCertificate = obj;
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
 * DeleteSuperPlayerConfig请求参数结构体
 * @class
 */
class DeleteSuperPlayerConfigRequest extends AbstractModel {

    Name: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 播放器配置名称。
         */
        this.Name = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * CreateProcedureTemplate请求参数结构体
 * @class
 */
class CreateProcedureTemplateRequest extends AbstractModel {

    Name: string | null
    
    Comment: string | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 任务流名字（支持中文，不超过20个字）。
         */
        this.Name = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 视频处理类型任务参数。
         */
        this.MediaProcessTask = null;

        /**
         * AI 智能内容审核类型任务参数。
         */
        this.AiContentReviewTask = null;

        /**
         * AI 智能内容分析类型任务参数。
         */
        this.AiAnalysisTask = null;

        /**
         * AI 内容识别类型任务参数。
         */
        this.AiRecognitionTask = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Comment: string | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeMediaProcessUsageData请求参数结构体
 * @class
 */
class DescribeMediaProcessUsageDataRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    Type: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
         */
        this.StartTime = null;

        /**
         * 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
         */
        this.EndTime = null;

        /**
         * 查询视频处理任务类型，默认查询转码。目前只支持转码类型数据查询。
<li>Transcode: 转码</li>
         */
        this.Type = null;

        /**
         * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        Type: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 转场信息
 * @class
 */
class MediaTransitionItem extends AbstractModel {

    Duration: number | null
    
    Transitions: Array<TransitionOpertion> | null
    
    constructor(){
        super();

        /**
         * 转场持续时间，单位为秒。进行转场处理的两个媒体片段，第二个片段在轨道上的起始时间会自动进行调整，设置为前面一个片段的结束时间减去转场的持续时间。
         */
        this.Duration = null;

        /**
         * 转场操作列表。图像转场操作和音频转场操作各自最多支持一个。
         */
        this.Transitions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Duration: number | null;
        Transitions: Array<TransitionOpertion> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.Transitions) {
            this.Transitions = new Array();
            for (let z in params.Transitions) {
                let obj = new TransitionOpertion();
                obj.deserialize(params.Transitions[z]);
                this.Transitions.push(obj);
            }
        }

    }
}

/**
 * 智能封面信息
 * @class
 */
class MediaAiAnalysisCoverItem extends AbstractModel {

    CoverUrl: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 智能封面地址。
         */
        this.CoverUrl = null;

        /**
         * 智能封面的可信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CoverUrl: string | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

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
 * ModifySuperPlayerConfig返回参数结构体
 * @class
 */
class ModifySuperPlayerConfigResponse extends AbstractModel {

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
 * 视频拼接任务信息，该结构仅用于对 2017 版[视频拼接](https://cloud.tencent.com/document/product/266/7821)接口发起的任务。
 * @class
 */
class ConcatTask2017 extends AbstractModel {

    TaskId: string | null
    
    FileInfoSet: Array<ConcatFileInfo2017> | null
    
    constructor(){
        super();

        /**
         * 视频拼接任务 ID。
         */
        this.TaskId = null;

        /**
         * 视频拼接源文件信息。
         */
        this.FileInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        FileInfoSet: Array<ConcatFileInfo2017> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new ConcatFileInfo2017();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

    }
}

/**
 * DeleteAIRecognitionTemplate请求参数结构体
 * @class
 */
class DeleteAIRecognitionTemplateRequest extends AbstractModel {

    Definition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 文件上传任务信息
 * @class
 */
class FileUploadTask extends AbstractModel {

    FileId: string | null
    
    MediaBasicInfo: MediaBasicInfo | null
    
    ProcedureTaskId: string | null
    
    MetaData: MediaMetaData | null
    
    constructor(){
        super();

        /**
         * 文件唯一 ID。
         */
        this.FileId = null;

        /**
         * 上传完成后生成的媒体文件基础信息。
         */
        this.MediaBasicInfo = null;

        /**
         * 若视频上传时指定了视频处理流程，则该字段为流程任务 ID。
         */
        this.ProcedureTaskId = null;

        /**
         * 元信息。包括大小、时长、视频流信息、音频流信息等。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetaData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        MediaBasicInfo: MediaBasicInfo | null;
        ProcedureTaskId: string | null;
        MetaData: MediaMetaData | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.MediaBasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.MediaBasicInfo)
            this.MediaBasicInfo = obj;
        }
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
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
 * 文件删除任务
 * @class
 */
class FileDeleteTask extends AbstractModel {

    FileIdSet: Array<string> | null
    
    constructor(){
        super();

        /**
         * 删除文件 ID 列表。
         */
        this.FileIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileIdSet: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileIdSet = 'FileIdSet' in params ? params.FileIdSet : null;

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
 * 编辑视频任务的输入。
 * @class
 */
class EditMediaTaskInput extends AbstractModel {

    InputType: string | null
    
    FileInfoSet: Array<EditMediaFileInfo> | null
    
    StreamInfoSet: Array<EditMediaStreamInfo> | null
    
    constructor(){
        super();

        /**
         * 输入视频的来源类型，可以取的值为 File，Stream 两种。
         */
        this.InputType = null;

        /**
         * 输入的视频文件信息，当 InputType 为 File 时，该字段有值。
         */
        this.FileInfoSet = null;

        /**
         * 输入的流信息，当 InputType 为 Stream 时，该字段有值。
         */
        this.StreamInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InputType: string | null;
        FileInfoSet: Array<EditMediaFileInfo> | null;
        StreamInfoSet: Array<EditMediaStreamInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

        if (params.StreamInfoSet) {
            this.StreamInfoSet = new Array();
            for (let z in params.StreamInfoSet) {
                let obj = new EditMediaStreamInfo();
                obj.deserialize(params.StreamInfoSet[z]);
                this.StreamInfoSet.push(obj);
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
         */
        this.TotalCount = null;

        /**
         * 关键词信息。
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
         * 对视频转自适应码流任务的输入。
         */
        this.Input = null;

        /**
         * 对视频转自适应码流任务的输出。
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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * 对视频截图做封面任务输出类型
 * @class
 */
class CoverBySnapshotTaskOutput extends AbstractModel {

    CoverUrl: string | null
    
    constructor(){
        super();

        /**
         * 封面 URL。
         */
        this.CoverUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CoverUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

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
 * ForbidMediaDistribution请求参数结构体
 * @class
 */
class ForbidMediaDistributionRequest extends AbstractModel {

    FileIds: Array<string> | null
    
    Operation: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体文件列表，每次最多可提交 20 条。
         */
        this.FileIds = null;

        /**
         * forbid：禁播，recover：解禁。
         */
        this.Operation = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileIds: Array<string> | null;
        Operation: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * EditMedia返回参数结构体
 * @class
 */
class EditMediaResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 编辑视频的任务 ID，可以通过该 ID 查询编辑任务（任务类型为 EditMedia）的状态。
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
 * ProcessMediaByUrl请求参数结构体
 * @class
 */
class ProcessMediaByUrlRequest extends AbstractModel {

    InputInfo: MediaInputInfo | null
    
    OutputInfo: MediaOutputInfo | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    TasksPriority: number | null
    
    TasksNotifyMode: string | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 输入视频信息，包括视频 URL ， 名称、视频自定义 ID。
         */
        this.InputInfo = null;

        /**
         * 输出文件 COS 路径信息。
         */
        this.OutputInfo = null;

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
         * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InputInfo: MediaInputInfo | null;
        OutputInfo: MediaOutputInfo | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        TasksPriority: number | null;
        TasksNotifyMode: string | null;
        SessionContext: string | null;
        SessionId: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.OutputInfo) {
            let obj = new MediaOutputInfo();
            obj.deserialize(params.OutputInfo)
            this.OutputInfo = obj;
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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ModifyMediaInfo请求参数结构体
 * @class
 */
class ModifyMediaInfoRequest extends AbstractModel {

    FileId: string | null
    
    Name: string | null
    
    Description: string | null
    
    ClassId: number | null
    
    ExpireTime: string | null
    
    CoverData: string | null
    
    AddKeyFrameDescs: Array<MediaKeyFrameDescItem> | null
    
    DeleteKeyFrameDescs: Array<number> | null
    
    ClearKeyFrameDescs: number | null
    
    AddTags: Array<string> | null
    
    DeleteTags: Array<string> | null
    
    ClearTags: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体文件唯一标识。
         */
        this.FileId = null;

        /**
         * 媒体文件名称，最长 64 个字符。
         */
        this.Name = null;

        /**
         * 媒体文件描述，最长 128 个字符。
         */
        this.Description = null;

        /**
         * 媒体文件分类 ID。
         */
        this.ClassId = null;

        /**
         * 媒体文件过期时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。
         */
        this.ExpireTime = null;

        /**
         * 视频封面图片文件（如 jpeg, png 等）进行 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式。
         */
        this.CoverData = null;

        /**
         * 新增的一组视频打点信息，如果某个偏移时间已存在打点，则会进行覆盖操作，单个媒体文件最多 100 个打点信息。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。
         */
        this.AddKeyFrameDescs = null;

        /**
         * 要删除的一组视频打点信息的时间偏移，单位：秒。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。
         */
        this.DeleteKeyFrameDescs = null;

        /**
         * 取值 1 表示清空视频打点信息，其他值无意义。
同一个请求里，ClearKeyFrameDescs 与 AddKeyFrameDescs 不能同时出现。
         */
        this.ClearKeyFrameDescs = null;

        /**
         * 新增的一组标签，单个媒体文件最多 16 个标签，单个标签最多 16 个字符。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。
         */
        this.AddTags = null;

        /**
         * 要删除的一组标签。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。
         */
        this.DeleteTags = null;

        /**
         * 取值 1 表示清空媒体文件所有标签，其他值无意义。
同一个请求里，ClearTags 与 AddTags 不能同时出现。
         */
        this.ClearTags = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        Name: string | null;
        Description: string | null;
        ClassId: number | null;
        ExpireTime: string | null;
        CoverData: string | null;
        AddKeyFrameDescs: Array<MediaKeyFrameDescItem> | null;
        DeleteKeyFrameDescs: Array<number> | null;
        ClearKeyFrameDescs: number | null;
        AddTags: Array<string> | null;
        DeleteTags: Array<string> | null;
        ClearTags: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CoverData = 'CoverData' in params ? params.CoverData : null;

        if (params.AddKeyFrameDescs) {
            this.AddKeyFrameDescs = new Array();
            for (let z in params.AddKeyFrameDescs) {
                let obj = new MediaKeyFrameDescItem();
                obj.deserialize(params.AddKeyFrameDescs[z]);
                this.AddKeyFrameDescs.push(obj);
            }
        }
        this.DeleteKeyFrameDescs = 'DeleteKeyFrameDescs' in params ? params.DeleteKeyFrameDescs : null;
        this.ClearKeyFrameDescs = 'ClearKeyFrameDescs' in params ? params.ClearKeyFrameDescs : null;
        this.AddTags = 'AddTags' in params ? params.AddTags : null;
        this.DeleteTags = 'DeleteTags' in params ? params.DeleteTags : null;
        this.ClearTags = 'ClearTags' in params ? params.ClearTags : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DeleteTranscodeTemplate请求参数结构体
 * @class
 */
class DeleteTranscodeTemplateRequest extends AbstractModel {

    Definition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 转码模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 点播文件视频转动图结果信息
 * @class
 */
class MediaAnimatedGraphicsInfo extends AbstractModel {

    AnimatedGraphicsSet: Array<MediaAnimatedGraphicsItem> | null
    
    constructor(){
        super();

        /**
         * 视频转动图结果信息
         */
        this.AnimatedGraphicsSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AnimatedGraphicsSet: Array<MediaAnimatedGraphicsItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AnimatedGraphicsSet) {
            this.AnimatedGraphicsSet = new Array();
            for (let z in params.AnimatedGraphicsSet) {
                let obj = new MediaAnimatedGraphicsItem();
                obj.deserialize(params.AnimatedGraphicsSet[z]);
                this.AnimatedGraphicsSet.push(obj);
            }
        }

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 小程序审核信息单元
 * @class
 */
class MediaMiniProgramReviewInfoItem extends AbstractModel {

    Definition: number | null
    
    MetaData: MediaMetaData | null
    
    Url: string | null
    
    ReviewResult: string | null
    
    ReviewSummary: Array<MediaMiniProgramReviewElem> | null
    
    constructor(){
        super();

        /**
         * 模板id。小程序视频发布的视频所对应的转码模板ID，为0代表原始视频。
         */
        this.Definition = null;

        /**
         * 视频元信息。
         */
        this.MetaData = null;

        /**
         * 小程序审核视频播放地址。
         */
        this.Url = null;

        /**
         * 小程序视频发布状态：
<li>Pass：成功。</li>
<li>Rejected：未通过。</li>
         */
        this.ReviewResult = null;

        /**
         * 小程序审核元素。
         */
        this.ReviewSummary = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        MetaData: MediaMetaData | null;
        Url: string | null;
        ReviewResult: string | null;
        ReviewSummary: Array<MediaMiniProgramReviewElem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.ReviewResult = 'ReviewResult' in params ? params.ReviewResult : null;

        if (params.ReviewSummary) {
            this.ReviewSummary = new Array();
            for (let z in params.ReviewSummary) {
                let obj = new MediaMiniProgramReviewElem();
                obj.deserialize(params.ReviewSummary[z]);
                this.ReviewSummary.push(obj);
            }
        }

    }
}

/**
 * 视频处理任务统计数据。
 * @class
 */
class TaskStatData extends AbstractModel {

    TaskType: string | null
    
    Summary: Array<TaskStatDataItem> | null
    
    Details: Array<SpecificationDataItem> | null
    
    constructor(){
        super();

        /**
         * 任务类型。
<li>Transcode: 转码</li>
<li>Snapshot: 截图</li>
         */
        this.TaskType = null;

        /**
         * 任务数统计数据概览。
<li>Transcode: 用量单位为秒</li>
         */
        this.Summary = null;

        /**
         * 不同规格任务统计数据详情。
转码规格：
<li>Remuxing: 转封装</li>
<li>Audio: 音频转码</li>
<li>Standard.H264.SD: H.264编码方式标清转码</li>
<li>Standard.H264.HD: H.264编码方式高清转码</li>
<li>Standard.H264.FHD: H.264编码方式全高清转码</li>
<li>Standard.H264.2K: H.264编码方式2K转码</li>
<li>Standard.H264.4K: H.264编码方式4K转码</li>
<li>Standard.H265.SD: H.265编码方式标清转码</li>
<li>Standard.H265.HD: H.265编码方式高清转码</li>
<li>Standard.H265.FHD: H.265编码方式全高清转码</li>
<li>Standard.H265.2K: H.265编码方式2K转码</li>
<li>Standard.H265.4K: H.265编码方式4K转码</li>
<li>TESHD-10.H264.SD: H.264编码方式标清极速高清转码</li>
<li>TESHD-10.H264.HD: H.264编码方式高清极速高清转码</li>
<li>TESHD-10.H264.FHD: H.264编码方式全高清极速高清转码</li>
<li>TESHD-10.H264.2K: H.264编码方式2K极速高清转码</li>
<li>TESHD-10.H264.4K: H.264编码方式4K极速高清转码</li>
<li>TESHD-10.H265.SD: H.265编码方式标清极速高清转码</li>
<li>TESHD-10.H265.HD: H.265编码方式高清极速高清转码</li>
<li>TESHD-10.H265.FHD: H.265编码方式全高清极速高清转码</li>
<li>TESHD-10.H265.2K: H.265编码方式2K极速高清转码</li>
<li>TESHD-10.H265.4K: H.265编码方式4K极速高清转码</li>
<li>Edit.Audio: 音频编辑</li>
<li>Edit.H264.SD: H.264编码方式标清视频编辑</li>
<li>Edit.H264.HD: H.264编码方式高清视频编辑</li>
<li>Edit.H264.FHD: H.264编码方式全高清视频编辑</li>
<li>Edit.H264.2K: H.264编码方式2K视频编辑</li>
<li>Edit.H264.4K: H.264编码方式4K视频编辑</li>
<li>Edit.H265.SD: H.265编码方式标清视频编辑</li>
<li>Edit.H265.HD: H.265编码方式高清视频编辑</li>
<li>Edit.H265.FHD: H.265编码方式全高清视频编辑</li>
<li>Edit.H265.2K: H.265编码方式2K视频编辑</li>
<li>Edit.H265.4K: H.265编码方式4K视频编辑</li>
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskType: string | null;
        Summary: Array<TaskStatDataItem> | null;
        Details: Array<SpecificationDataItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

        if (params.Summary) {
            this.Summary = new Array();
            for (let z in params.Summary) {
                let obj = new TaskStatDataItem();
                obj.deserialize(params.Summary[z]);
                this.Summary.push(obj);
            }
        }

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new SpecificationDataItem();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

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
 * ProcessMediaByProcedure请求参数结构体
 * @class
 */
class ProcessMediaByProcedureRequest extends AbstractModel {

    FileId: string | null
    
    ProcedureName: string | null
    
    TasksPriority: number | null
    
    TasksNotifyMode: string | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    ExtInfo: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体文件 ID。
         */
        this.FileId = null;

        /**
         * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字。
         */
        this.ProcedureName = null;

        /**
         * 任务流的优先级，数值越大优先级越高，取值范围是-10到10，不填代表0。
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果一天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 保留字段，特殊用途时使用。
         */
        this.ExtInfo = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        ProcedureName: string | null;
        TasksPriority: number | null;
        TasksNotifyMode: string | null;
        SessionContext: string | null;
        SessionId: string | null;
        ExtInfo: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.ProcedureName = 'ProcedureName' in params ? params.ProcedureName : null;
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    CoverBySnapshotTaskSet: Array<CoverBySnapshotTaskInput> | null
    
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
         * 对视频截图做封面任务列表。
         */
        this.CoverBySnapshotTaskSet = null;

        /**
         * 对视频转自适应码流任务列表。
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
        CoverBySnapshotTaskSet: Array<CoverBySnapshotTaskInput> | null;
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

        if (params.CoverBySnapshotTaskSet) {
            this.CoverBySnapshotTaskSet = new Array();
            for (let z in params.CoverBySnapshotTaskSet) {
                let obj = new CoverBySnapshotTaskInput();
                obj.deserialize(params.CoverBySnapshotTaskSet[z]);
                this.CoverBySnapshotTaskSet.push(obj);
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
 * ProcessMedia返回参数结构体
 * @class
 */
class ProcessMediaResponse extends AbstractModel {

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
 * CreateWordSamples请求参数结构体
 * @class
 */
class CreateWordSamplesRequest extends AbstractModel {

    Usages: Array<string> | null
    
    Words: Array<AiSampleWordInfo> | null
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Usages: Array<string> | null;
        Words: Array<AiSampleWordInfo> | null;
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 微信小程序发布任务类型
 * @class
 */
class WechatMiniProgramPublishTaskInput extends AbstractModel {

    SourceDefinition: number | null
    
    constructor(){
        super();

        /**
         * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
         */
        this.SourceDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SourceDefinition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;

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
    
    CycleConfig: WatermarkCycleConfigForUpdate | null
    
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

        /**
         * 水印周期配置，用于配置水印周期性地显示与隐藏。
主要使用场景是：为了视频防遮标，在视频多个地方设置水印，这些水印按固定顺序周期性地显示与隐藏。
例如，设置 A、B、C、D 4 个水印分别位于视频的左上角、右上角、右下角、左下角处，视频开始时，{ A 显示 5 秒 -> B 显示 5 秒 -> C 显示 5 秒 -> D 显示 5 秒 } -> A 显示 5 秒 -> B 显示 5 秒 -> ...，任何时刻只显示一处水印。
花括号 {} 表示由 A、B、C、D 4 个水印组成的大周期，可以看出每个大周期持续 20 秒。
可以看出，A、B、C、D 都是周期性地显示 5 秒、隐藏 15 秒，且四者有固定的显示顺序。
此配置项即用来描述单个水印的周期配置。
         */
        this.CycleConfig = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Width: string | null;
        Height: string | null;
        CycleConfig: WatermarkCycleConfigForUpdate | null;
    }): void {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.CycleConfig) {
            let obj = new WatermarkCycleConfigForUpdate();
            obj.deserialize(params.CycleConfig)
            this.CycleConfig = obj;
        }

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
 * 视频拆条结果。
 * @class
 */
class AiRecognitionTaskSegmentResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskSegmentResultInput | null
    
    Output: AiRecognitionTaskSegmentResultOutput | null
    
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
         * 视频拆条任务输入信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Input = null;

        /**
         * 视频拆条任务输出信息。
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
        Input: AiRecognitionTaskSegmentResultInput | null;
        Output: AiRecognitionTaskSegmentResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskSegmentResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskSegmentResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
 * LiveRealTimeClip请求参数结构体
 * @class
 */
class LiveRealTimeClipRequest extends AbstractModel {

    StreamId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    IsPersistence: number | null
    
    ExpireTime: string | null
    
    Procedure: string | null
    
    MetaDataRequired: number | null
    
    Host: string | null
    
    ExtInfo: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 推流[直播码](https://cloud.tencent.com/document/product/267/5959)。
         */
        this.StreamId = null;

        /**
         * 流剪辑的开始时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.StartTime = null;

        /**
         * 流剪辑的结束时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.EndTime = null;

        /**
         * 是否固化。0 不固化，1 固化。默认不固化。
         */
        this.IsPersistence = null;

        /**
         * 剪辑固化后的视频存储过期时间。格式参照 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。仅 IsPersistence 为 1 时有效，默认剪辑固化的视频永不过期。
         */
        this.ExpireTime = null;

        /**
         * 剪辑固化后的视频点播任务流处理，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。仅 IsPersistence 为 1 时有效。
         */
        this.Procedure = null;

        /**
         * 是否需要返回剪辑后的视频元信息。0 不需要，1 需要。默认不需要。
         */
        this.MetaDataRequired = null;

        /**
         * 即时剪辑使用的域名，必须在直播侧开通时移。
         */
        this.Host = null;

        /**
         * 系统保留字段，请勿填写。
         */
        this.ExtInfo = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StreamId: string | null;
        StartTime: string | null;
        EndTime: string | null;
        IsPersistence: number | null;
        ExpireTime: string | null;
        Procedure: string | null;
        MetaDataRequired: number | null;
        Host: string | null;
        ExtInfo: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IsPersistence = 'IsPersistence' in params ? params.IsPersistence : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.MetaDataRequired = 'MetaDataRequired' in params ? params.MetaDataRequired : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DeleteAdaptiveDynamicStreamingTemplate请求参数结构体
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateRequest extends AbstractModel {

    Definition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 自适应转码模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 编辑视频的结果文件输出。
 * @class
 */
class EditMediaOutputConfig extends AbstractModel {

    MediaName: string | null
    
    Type: string | null
    
    ClassId: number | null
    
    ExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
         */
        this.MediaName = null;

        /**
         * 输出文件格式，可选值：mp4、hls。默认是 mp4。
         */
        this.Type = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
<li>默认值：0，表示其他分类。</li>
         */
        this.ClassId = null;

        /**
         * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaName: string | null;
        Type: string | null;
        ClassId: number | null;
        ExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

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
 * SimpleHlsClip返回参数结构体
 * @class
 */
class SimpleHlsClipResponse extends AbstractModel {

    Url: string | null
    
    MetaData: MediaMetaData | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 裁剪后的视频地址。
         */
        this.Url = null;

        /**
         * 裁剪后的视频元信息。目前`Size`，`Rotate`，`VideoDuration`，`AudioDuration` 几个字段暂时缺省，没有真实数据。
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
        Url: string | null;
        MetaData: MediaMetaData | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAIAnalysisTemplate请求参数结构体
 * @class
 */
class DeleteAIAnalysisTemplateRequest extends AbstractModel {

    Definition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * EditMedia请求参数结构体
 * @class
 */
class EditMediaRequest extends AbstractModel {

    InputType: string | null
    
    FileInfos: Array<EditMediaFileInfo> | null
    
    StreamInfos: Array<EditMediaStreamInfo> | null
    
    Definition: number | null
    
    ProcedureName: string | null
    
    OutputConfig: EditMediaOutputConfig | null
    
    SessionContext: string | null
    
    TasksPriority: number | null
    
    SessionId: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 输入视频的类型，可以取的值为  File，Stream 两种。
         */
        this.InputType = null;

        /**
         * 输入的视频文件信息，当 InputType 为 File 时必填。
         */
        this.FileInfos = null;

        /**
         * 输入的流信息，当 InputType 为 Stream 时必填。
         */
        this.StreamInfos = null;

        /**
         * 编辑模板 ID，取值有 10，20，不填代表使用 10 模板。
<li>10：拼接时，以分辨率最高的输入为基准；</li>
<li>20：拼接时，以码率最高的输入为基准；</li>
         */
        this.Definition = null;

        /**
         * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字，如果要对生成的新视频执行任务流时填写。
         */
        this.ProcedureName = null;

        /**
         * 编辑后生成的文件配置。
         */
        this.OutputConfig = null;

        /**
         * 标识来源上下文，用于透传用户请求信息，在EditMediaComplete回调和任务流状态变更回调将返回该字段值，最长 1000个字符。
         */
        this.SessionContext = null;

        /**
         * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         */
        this.TasksPriority = null;

        /**
         * 用于任务去重的识别码，如果一天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InputType: string | null;
        FileInfos: Array<EditMediaFileInfo> | null;
        StreamInfos: Array<EditMediaStreamInfo> | null;
        Definition: number | null;
        ProcedureName: string | null;
        OutputConfig: EditMediaOutputConfig | null;
        SessionContext: string | null;
        TasksPriority: number | null;
        SessionId: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.InputType = 'InputType' in params ? params.InputType : null;

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new EditMediaStreamInfo();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ProcedureName = 'ProcedureName' in params ? params.ProcedureName : null;

        if (params.OutputConfig) {
            let obj = new EditMediaOutputConfig();
            obj.deserialize(params.OutputConfig)
            this.OutputConfig = obj;
        }
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 视频拼接源文件信息（2017 版）
 * @class
 */
class ConcatFileInfo2017 extends AbstractModel {

    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    FileUrl: string | null
    
    FileType: string | null
    
    constructor(){
        super();

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
         * 视频拼接源文件的 ID。
         */
        this.FileId = null;

        /**
         * 视频拼接源文件的地址。
         */
        this.FileUrl = null;

        /**
         * 视频拼接源文件的格式。
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        FileUrl: string | null;
        FileType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

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
 * DescribeMediaInfos返回参数结构体
 * @class
 */
class DescribeMediaInfosResponse extends AbstractModel {

    MediaInfoSet: Array<MediaInfo> | null
    
    NotExistFileIdSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 媒体文件信息列表。
         */
        this.MediaInfoSet = null;

        /**
         * 不存在的文件 ID 列表。
         */
        this.NotExistFileIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaInfoSet: Array<MediaInfo> | null;
        NotExistFileIdSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.NotExistFileIdSet = 'NotExistFileIdSet' in params ? params.NotExistFileIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProcedureTemplate返回参数结构体
 * @class
 */
class DeleteProcedureTemplateResponse extends AbstractModel {

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
 * 小程序审核信息
 * @class
 */
class MediaMiniProgramReviewInfo extends AbstractModel {

    MiniProgramReviewList: Array<MediaMiniProgramReviewInfoItem> | null
    
    constructor(){
        super();

        /**
         * 审核信息列表。
         */
        this.MiniProgramReviewList = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MiniProgramReviewList: Array<MediaMiniProgramReviewInfoItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.MiniProgramReviewList) {
            this.MiniProgramReviewList = new Array();
            for (let z in params.MiniProgramReviewList) {
                let obj = new MediaMiniProgramReviewInfoItem();
                obj.deserialize(params.MiniProgramReviewList[z]);
                this.MiniProgramReviewList.push(obj);
            }
        }

    }
}

/**
 * ForbidMediaDistribution返回参数结构体
 * @class
 */
class ForbidMediaDistributionResponse extends AbstractModel {

    NotExistFileIdSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 不存在的文件 ID 列表。
         */
        this.NotExistFileIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NotExistFileIdSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NotExistFileIdSet = 'NotExistFileIdSet' in params ? params.NotExistFileIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 物体识别任务控制参数
 * @class
 */
class ObjectConfigureInfo extends AbstractModel {

    Switch: string | null
    
    ObjectLibrary: string | null
    
    constructor(){
        super();

        /**
         * 物体识别任务开关，可选值：
<li>ON：开启智能物体识别任务；</li>
<li>OFF：关闭智能物体识别任务。</li>
         */
        this.Switch = null;

        /**
         * 物体库选择，可选值：
<li>Default：使用默认物体库；</li>
<li>UserDefine：使用用户自定义物体库。</li>
<li>All：同时使用默认物体库和用户自定义物体库。</li>
默认值： All，同时使用默认物体库和用户自定义物体库。
         */
        this.ObjectLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        ObjectLibrary: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ObjectLibrary = 'ObjectLibrary' in params ? params.ObjectLibrary : null;

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
 * 视频片头片尾识别结果。
 * @class
 */
class AiRecognitionTaskHeadTailResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskHeadTailResultInput | null
    
    Output: AiRecognitionTaskHeadTailResultOutput | null
    
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
         * 视频片头片尾识别任务输入信息。
         */
        this.Input = null;

        /**
         * 视频片头片尾识别任务输出信息。
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
        Input: AiRecognitionTaskHeadTailResultInput | null;
        Output: AiRecognitionTaskHeadTailResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskHeadTailResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskHeadTailResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 视频转码任务信息，该结构仅用于对 2017 版[视频转码](https://cloud.tencent.com/document/product/266/7822)接口发起的任务。
 * @class
 */
class TranscodeTask2017 extends AbstractModel {

    TaskId: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    FileName: string | null
    
    Duration: number | null
    
    CoverUrl: string | null
    
    PlayInfoSet: Array<TranscodePlayInfo2017> | null
    
    constructor(){
        super();

        /**
         * 转码任务 ID。
         */
        this.TaskId = null;

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
         * 被转码文件 ID。
         */
        this.FileId = null;

        /**
         * 被转码文件名称。
         */
        this.FileName = null;

        /**
         * 视频时长，单位：秒。
         */
        this.Duration = null;

        /**
         * 封面地址。
         */
        this.CoverUrl = null;

        /**
         * 视频转码后生成的播放信息。
         */
        this.PlayInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        FileName: string | null;
        Duration: number | null;
        CoverUrl: string | null;
        PlayInfoSet: Array<TranscodePlayInfo2017> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;

        if (params.PlayInfoSet) {
            this.PlayInfoSet = new Array();
            for (let z in params.PlayInfoSet) {
                let obj = new TranscodePlayInfo2017();
                obj.deserialize(params.PlayInfoSet[z]);
                this.PlayInfoSet.push(obj);
            }
        }

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
 * 智能精彩片段任务控制参数
 * @class
 */
class HighlightsConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能精彩片段任务开关，可选值：
<li>ON：开启智能精彩片段任务；</li>
<li>OFF：关闭智能精彩片段任务。</li>
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
 * DescribeProcedureTemplates请求参数结构体
 * @class
 */
class DescribeProcedureTemplatesRequest extends AbstractModel {

    Names: Array<string> | null
    
    Type: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 任务流模板名字过滤条件，数组长度限制：100。
         */
        this.Names = null;

        /**
         * 任务流模板类型过滤条件，可选值：
<li>Preset：系统预置任务流模板；</li>
<li>Custom：用户自定义任务流模板。</li>
         */
        this.Type = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Names: Array<string> | null;
        Type: string | null;
        Offset: number | null;
        Limit: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Names = 'Names' in params ? params.Names : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 关键词，数组长度限制：100 个词。
         */
        this.Keywords = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keywords: Array<string> | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 空的轨道片段，用来进行时间轴的占位。如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。
 * @class
 */
class EmptyTrackItem extends AbstractModel {

    Duration: number | null
    
    constructor(){
        super();

        /**
         * 持续时间，单位为秒。
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Duration: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * 贴图轨上的贴图信息。
 * @class
 */
class StickerTrackItem extends AbstractModel {

    SourceMedia: string | null
    
    Duration: number | null
    
    StartTime: number | null
    
    CoordinateOrigin: string | null
    
    XPos: string | null
    
    YPos: string | null
    
    Width: string | null
    
    Height: string | null
    
    ImageOperations: Array<ImageTransform> | null
    
    constructor(){
        super();

        /**
         * 贴图素材的媒体文件来源。可以是点播的文件 ID，也可以是其它文件的 URL。
         */
        this.SourceMedia = null;

        /**
         * 贴图的持续时间，单位为秒。
         */
        this.Duration = null;

        /**
         * 贴图在轨道上的起始时间，单位为秒。
         */
        this.StartTime = null;

        /**
         * 原点位置，取值有：
<li>Center：坐标原点为中心位置，如画布中心。</li>
默认值：Center。
         */
        this.CoordinateOrigin = null;

        /**
         * 贴图原点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。</li><li>当字符串以 px 结尾，表示贴图 XPos 单位为像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
         */
        this.XPos = null;

        /**
         * 贴图原点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示贴图 YPos 单位为像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
         */
        this.YPos = null;

        /**
         * 贴图的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示贴图 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。</li>
<li>当 Width 为空0，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         */
        this.Width = null;

        /**
         * 贴图的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示贴图 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示贴图 Height 单位为像素，如 100px 表示 Hieght 为 100 像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         */
        this.Height = null;

        /**
         * 对贴图进行的操作，如图像旋转等。
         */
        this.ImageOperations = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SourceMedia: string | null;
        Duration: number | null;
        StartTime: number | null;
        CoordinateOrigin: string | null;
        XPos: string | null;
        YPos: string | null;
        Width: string | null;
        Height: string | null;
        ImageOperations: Array<ImageTransform> | null;
    }): void {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ImageTransform();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 水印模板唯一标识过滤条件，数组长度限制：100。
         */
        this.Definitions = null;

        /**
         * 水印类型过滤条件，可选值：
<li>image：图片水印；</li>
<li>text：文字水印；</li>
<li>svg：SVG 水印。</li>
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Type: string | null;
        Offset: number | null;
        Limit: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 对视频截图做封面任务输入参数类型
 * @class
 */
class CoverBySnapshotTaskInput extends AbstractModel {

    Definition: number | null
    
    PositionType: string | null
    
    PositionValue: number | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图模板 ID。
         */
        this.Definition = null;

        /**
         * 截图方式。包含：
<li>Time：依照时间点截图</li>
<li>Percent：依照百分比截图</li>
         */
        this.PositionType = null;

        /**
         * 截图位置：
<li>对于依照时间点截图，该值表示指定视频第几秒的截图作为封面</li>
<li>对于依照百分比截图，该值表示使用视频百分之多少的截图作为封面</li>
         */
        this.PositionValue = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         */
        this.WatermarkSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        PositionType: string | null;
        PositionValue: number | null;
        WatermarkSet: Array<WatermarkInput> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.PositionType = 'PositionType' in params ? params.PositionType : null;
        this.PositionValue = 'PositionValue' in params ? params.PositionValue : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

    }
}

/**
 * 视频拆条识别任务控制参数
 * @class
 */
class SegmentConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 视频拆条识别任务开关，可选值：
<li>ON：开启智能视频拆条识别任务；</li>
<li>OFF：关闭智能视频拆条识别任务。</li>
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
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FaceReviewInfo = null;

        /**
         * 用户自定义语音审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrReviewInfo = null;

        /**
         * 用户自定义文本审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 视频拆条片段。
 * @class
 */
class AiRecognitionTaskSegmentSegmentItem extends AbstractModel {

    FileId: string | null
    
    SegmentUrl: string | null
    
    Confidence: number | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    CovImgUrl: string | null
    
    SpecialInfo: string | null
    
    constructor(){
        super();

        /**
         * 文件 ID。仅当处理的是点播文件并且拆条生成的子片段为点播文件时有效。
         */
        this.FileId = null;

        /**
         * 视频拆条片段 Url。
         */
        this.SegmentUrl = null;

        /**
         * 拆条片段置信度。取值：0~100。
         */
        this.Confidence = null;

        /**
         * 拆条片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 拆条片段终止的偏移时间，单位：秒。
         */
        this.EndTimeOffset = null;

        /**
         * 拆条封面图片 Url。
         */
        this.CovImgUrl = null;

        /**
         * 特殊字段，请忽略。
         */
        this.SpecialInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        SegmentUrl: string | null;
        Confidence: number | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        CovImgUrl: string | null;
        SpecialInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SegmentUrl = 'SegmentUrl' in params ? params.SegmentUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.CovImgUrl = 'CovImgUrl' in params ? params.CovImgUrl : null;
        this.SpecialInfo = 'SpecialInfo' in params ? params.SpecialInfo : null;

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
 * CreateSuperPlayerConfig返回参数结构体
 * @class
 */
class CreateSuperPlayerConfigResponse extends AbstractModel {

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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 自适应转码模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板名称，长度限制：64 个字符。
         */
        this.Name = null;

        /**
         * 自适应转码格式，取值范围：
<li>HLS。</li>
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
         * 自适应转码输入流参数信息，最多输入10路流。
注意：各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。
         */
        this.StreamInfos = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 视频转动图结果信息
 * @class
 */
class MediaAnimatedGraphicsItem extends AbstractModel {

    Url: string | null
    
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
         * 转动图的文件地址。
         */
        this.Url = null;

        /**
         * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/33481#.3Cspan-id-.3D-.22zdt.22.3E.3C.2Fspan.3E.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
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
        Url: string | null;
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
        this.Url = 'Url' in params ? params.Url : null;
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
 * DescribeCDNUsageData返回参数结构体
 * @class
 */
class DescribeCDNUsageDataResponse extends AbstractModel {

    DataInterval: number | null
    
    Data: Array<StatDataItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 时间粒度，单位：分钟。
         */
        this.DataInterval = null;

        /**
         * CDN 统计数据。
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
    deserialize(params: {
        DataInterval: number | null;
        Data: Array<StatDataItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DataInterval = 'DataInterval' in params ? params.DataInterval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keyword: string | null;
        Usages: Array<string> | null;
        TagOperationInfo: AiSampleTagOperation | null;
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * DeleteMedia返回参数结构体
 * @class
 */
class DeleteMediaResponse extends AbstractModel {

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
 * 物体识别结果。
 * @class
 */
class AiRecognitionTaskObjectResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: AiRecognitionTaskObjectResultInput | null
    
    Output: AiRecognitionTaskObjectResultOutput | null
    
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
         * 物体识别任务输入信息。
         */
        this.Input = null;

        /**
         * 物体识别任务输出信息。
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
        Input: AiRecognitionTaskObjectResultInput | null;
        Output: AiRecognitionTaskObjectResultOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskObjectResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskObjectResultOutput();
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
 * SearchMedia返回参数结构体
 * @class
 */
class SearchMediaResponse extends AbstractModel {

    TotalCount: number | null
    
    MediaInfoSet: Array<MediaInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合搜索条件的记录总数。
<li>最大值：5000。当命中记录数超过5000时，该字段将返回 5000，而非实际命中总数。</li>
         */
        this.TotalCount = null;

        /**
         * 媒体文件信息列表，只包含基础信息（BasicInfo）。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MediaInfoSet = null;

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
        MediaInfoSet: Array<MediaInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.MediaInfoSet) {
            this.MediaInfoSet = new Array();
            for (let z in params.MediaInfoSet) {
                let obj = new MediaInfo();
                obj.deserialize(params.MediaInfoSet[z]);
                this.MediaInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 智能精彩片段结果信息
 * @class
 */
class AiAnalysisTaskHighlightOutput extends AbstractModel {

    HighlightSet: Array<MediaAiAnalysisHighlightItem> | null
    
    constructor(){
        super();

        /**
         * 视频智能精彩片段列表。
         */
        this.HighlightSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HighlightSet: Array<MediaAiAnalysisHighlightItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.HighlightSet) {
            this.HighlightSet = new Array();
            for (let z in params.HighlightSet) {
                let obj = new MediaAiAnalysisHighlightItem();
                obj.deserialize(params.HighlightSet[z]);
                this.HighlightSet.push(obj);
            }
        }

    }
}

/**
 * ProcessMedia请求参数结构体
 * @class
 */
class ProcessMediaRequest extends AbstractModel {

    FileId: string | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    TasksPriority: number | null
    
    TasksNotifyMode: string | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    ExtInfo: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。
         */
        this.FileId = null;

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
         * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 保留字段，特殊用途时使用。
         */
        this.ExtInfo = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        TasksPriority: number | null;
        TasksNotifyMode: string | null;
        SessionContext: string | null;
        SessionId: string | null;
        ExtInfo: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ModifyMediaInfo返回参数结构体
 * @class
 */
class ModifyMediaInfoResponse extends AbstractModel {

    CoverUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 新的视频封面 URL。
* 注意：仅当请求携带 CoverData 时此返回值有效。 *
         */
        this.CoverUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CoverUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 视频拆条输出。
 * @class
 */
class AiRecognitionTaskSegmentResultOutput extends AbstractModel {

    SegmentSet: Array<AiRecognitionTaskSegmentSegmentItem> | null
    
    constructor(){
        super();

        /**
         * 视频拆条片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SegmentSet: Array<AiRecognitionTaskSegmentSegmentItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskSegmentSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 对视频截雪碧图任务输入参数类型
 * @class
 */
class ImageSpriteTaskInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板 ID。
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
 * 物体识别任务控制参数
 * @class
 */
class ObjectConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    ObjectLibrary: string | null
    
    constructor(){
        super();

        /**
         * 物体识别任务开关，可选值：
<li>ON：开启智能物体识别任务；</li>
<li>OFF：关闭智能物体识别任务。</li>
         */
        this.Switch = null;

        /**
         * 物体库选择，可选值：
<li>Default：使用默认物体库；</li>
<li>UserDefine：使用用户自定义物体库。</li>
<li>All：同时使用默认物体库和用户自定义物体库。</li>
         */
        this.ObjectLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        ObjectLibrary: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ObjectLibrary = 'ObjectLibrary' in params ? params.ObjectLibrary : null;

    }
}

/**
 * DeleteMedia请求参数结构体
 * @class
 */
class DeleteMediaRequest extends AbstractModel {

    FileId: string | null
    
    DeleteParts: Array<MediaDeleteItem> | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体文件的唯一标识。
         */
        this.FileId = null;

        /**
         * 指定本次需要删除的部分。默认值为 "[]", 表示删除媒体及其对应的全部视频处理文件。
         */
        this.DeleteParts = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        DeleteParts: Array<MediaDeleteItem> | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.DeleteParts) {
            this.DeleteParts = new Array();
            for (let z in params.DeleteParts) {
                let obj = new MediaDeleteItem();
                obj.deserialize(params.DeleteParts[z]);
                this.DeleteParts.push(obj);
            }
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateSuperPlayerConfig请求参数结构体
 * @class
 */
class CreateSuperPlayerConfigRequest extends AbstractModel {

    Name: string | null
    
    DrmSwitch: string | null
    
    AdaptiveDynamicStreamingDefinition: number | null
    
    DrmStreamingsInfo: DrmStreamingsInfo | null
    
    ImageSpriteDefinition: number | null
    
    ResolutionNames: Array<ResolutionNameInfo> | null
    
    Domain: string | null
    
    Scheme: string | null
    
    Comment: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 播放器配置名称，长度限制：64 个字符。只允许出现 [0-9a-zA-Z] 及 _- 字符（如 test_ABC-123），同一个用户该名称唯一。
         */
        this.Name = null;

        /**
         * 播放 DRM 保护的自适应码流开关：
<li>ON：开启，表示仅播放 DRM  保护的自适应码流输出；</li>
<li>OFF：关闭，表示播放未加密的自适应码流输出。</li>
默认为 OFF。
         */
        this.DrmSwitch = null;

        /**
         * 允许输出的未加密的自适应码流模板 ID，当 DrmSwitch 为 OFF 时必填。
         */
        this.AdaptiveDynamicStreamingDefinition = null;

        /**
         * 允许输出的 DRM 自适应码流模板内容，当 DrmSwitch 为 ON 时必填。
         */
        this.DrmStreamingsInfo = null;

        /**
         * 允许输出的雪碧图模板 ID。
         */
        this.ImageSpriteDefinition = null;

        /**
         * 播放器对不于不同分辨率的子流展示名字，不填或者填空数组则使用默认配置：
<li>MinEdgeLength：240，Name：流畅；</li>
<li>MinEdgeLength：480，Name：标清；</li>
<li>MinEdgeLength：720，Name：高清；</li>
<li>MinEdgeLength：1080，Name：全高清；</li>
<li>MinEdgeLength：1440，Name：2K；</li>
<li>MinEdgeLength：2160，Name：4K；</li>
<li>MinEdgeLength：4320，Name：8K。</li>
         */
        this.ResolutionNames = null;

        /**
         * 播放时使用的域名。不填或者填 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。
         */
        this.Domain = null;

        /**
         * 播放时使用的 Scheme。不填或者填 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme。其他可选值：
<li>HTTP；</li>
<li>HTTPS。</li>
         */
        this.Scheme = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        DrmSwitch: string | null;
        AdaptiveDynamicStreamingDefinition: number | null;
        DrmStreamingsInfo: DrmStreamingsInfo | null;
        ImageSpriteDefinition: number | null;
        ResolutionNames: Array<ResolutionNameInfo> | null;
        Domain: string | null;
        Scheme: string | null;
        Comment: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DrmSwitch = 'DrmSwitch' in params ? params.DrmSwitch : null;
        this.AdaptiveDynamicStreamingDefinition = 'AdaptiveDynamicStreamingDefinition' in params ? params.AdaptiveDynamicStreamingDefinition : null;

        if (params.DrmStreamingsInfo) {
            let obj = new DrmStreamingsInfo();
            obj.deserialize(params.DrmStreamingsInfo)
            this.DrmStreamingsInfo = obj;
        }
        this.ImageSpriteDefinition = 'ImageSpriteDefinition' in params ? params.ImageSpriteDefinition : null;

        if (params.ResolutionNames) {
            this.ResolutionNames = new Array();
            for (let z in params.ResolutionNames) {
                let obj = new ResolutionNameInfo();
                obj.deserialize(params.ResolutionNames[z]);
                this.ResolutionNames.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * ModifySubAppIdInfo返回参数结构体
 * @class
 */
class ModifySubAppIdInfoResponse extends AbstractModel {

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
 * ModifySubAppIdStatus返回参数结构体
 * @class
 */
class ModifySubAppIdStatusResponse extends AbstractModel {

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
 * SimpleHlsClip请求参数结构体
 * @class
 */
class SimpleHlsClipRequest extends AbstractModel {

    Url: string | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 需要裁剪的腾讯云点播 HLS 视频 URL。
         */
        this.Url = null;

        /**
         * 裁剪的开始偏移时间，单位秒。默认 0，即从视频开头开始裁剪。负数表示距离视频结束多少秒开始裁剪。例如 -10 表示从倒数第 10 秒开始裁剪。
         */
        this.StartTimeOffset = null;

        /**
         * 裁剪的结束偏移时间，单位秒。默认 0，即裁剪到视频尾部。负数表示距离视频结束多少秒结束裁剪。例如 -10 表示到倒数第 10 秒结束裁剪。
         */
        this.EndTimeOffset = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Url: string | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 指定删除点播视频时的删除内容

 * @class
 */
class MediaDeleteItem extends AbstractModel {

    Type: string | null
    
    Definition: number | null
    
    constructor(){
        super();

        /**
         * 所指定的删除部分。如果未填写该字段则参数无效。可选值有：
<li>TranscodeFiles（删除转码文件）。</li>
<li>WechatPublishFiles（删除微信发布文件）。</li>
         */
        this.Type = null;

        /**
         * 删除由Type参数指定的种类下的视频模板号，模板定义参见[转码模板](https://cloud.tencent.com/document/product/266/33478#.3Cspan-id-.3D-.22zm.22-.3E.3C.2Fspan.3E.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
默认值为0，表示删除参数Type指定种类下所有的视频。
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Definition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Definition = 'Definition' in params ? params.Definition : null;

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
         * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * 转自适应码流信息
 * @class
 */
class MediaAdaptiveDynamicStreamingInfo extends AbstractModel {

    AdaptiveDynamicStreamingSet: Array<AdaptiveDynamicStreamingInfoItem> | null
    
    constructor(){
        super();

        /**
         * 转自适应码流信息数组。
         */
        this.AdaptiveDynamicStreamingSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AdaptiveDynamicStreamingSet: Array<AdaptiveDynamicStreamingInfoItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AdaptiveDynamicStreamingSet) {
            this.AdaptiveDynamicStreamingSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingSet) {
                let obj = new AdaptiveDynamicStreamingInfoItem();
                obj.deserialize(params.AdaptiveDynamicStreamingSet[z]);
                this.AdaptiveDynamicStreamingSet.push(obj);
            }
        }

    }
}

/**
 * DescribeSuperPlayerConfigs返回参数结构体
 * @class
 */
class DescribeSuperPlayerConfigsResponse extends AbstractModel {

    TotalCount: number | null
    
    PlayerConfigSet: Array<PlayerConfig> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 播放器配置数组。
         */
        this.PlayerConfigSet = null;

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
        PlayerConfigSet: Array<PlayerConfig> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.PlayerConfigSet) {
            this.PlayerConfigSet = new Array();
            for (let z in params.PlayerConfigSet) {
                let obj = new PlayerConfig();
                obj.deserialize(params.PlayerConfigSet[z]);
                this.PlayerConfigSet.push(obj);
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
 * DescribeStorageData请求参数结构体
 * @class
 */
class DescribeStorageDataRequest extends AbstractModel {

    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 转动图模板描述信息。
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
 * 视频片头片尾识别输出。
 * @class
 */
class AiRecognitionTaskHeadTailResultOutput extends AbstractModel {

    HeadConfidence: number | null
    
    HeadTimeOffset: number | null
    
    TailConfidence: number | null
    
    TailTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 片头识别置信度。取值：0~100。
         */
        this.HeadConfidence = null;

        /**
         * 视频片头的结束时间点，单位：秒。
         */
        this.HeadTimeOffset = null;

        /**
         * 片尾识别置信度。取值：0~100。
         */
        this.TailConfidence = null;

        /**
         * 视频片尾的开始时间点，单位：秒。
         */
        this.TailTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HeadConfidence: number | null;
        HeadTimeOffset: number | null;
        TailConfidence: number | null;
        TailTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.HeadConfidence = 'HeadConfidence' in params ? params.HeadConfidence : null;
        this.HeadTimeOffset = 'HeadTimeOffset' in params ? params.HeadTimeOffset : null;
        this.TailConfidence = 'TailConfidence' in params ? params.TailConfidence : null;
        this.TailTimeOffset = 'TailTimeOffset' in params ? params.TailTimeOffset : null;

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
 * 对视频截图做封面任务结果类型
 * @class
 */
class MediaProcessTaskCoverBySnapshotResult extends AbstractModel {

    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: CoverBySnapshotTaskInput | null
    
    Output: CoverBySnapshotTaskOutput | null
    
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
         * 对视频截图做封面任务的输入。
         */
        this.Input = null;

        /**
         * 对视频截图做封面任务的输出。
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
        Input: CoverBySnapshotTaskInput | null;
        Output: CoverBySnapshotTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new CoverBySnapshotTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new CoverBySnapshotTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

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
    
    SubAppId: number | null
    
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
         * 图片水印模板，当 Type 为 image，该字段必填。当 Type 为 text，该字段无效。
         */
        this.ImageTemplate = null;

        /**
         * 文字水印模板，当 Type 为 text，该字段必填。当 Type 为 image，该字段无效。
         */
        this.TextTemplate = null;

        /**
         * SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。
         */
        this.SvgTemplate = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 微信小程序发布任务信息
 * @class
 */
class WechatMiniProgramPublishTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    SourceDefinition: number | null
    
    PublishResult: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务状态，取值：
WAITING：等待中；
PROCESSING：处理中；
FINISH：已完成。
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
         * 发布视频文件 ID。
         */
        this.FileId = null;

        /**
         * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
         */
        this.SourceDefinition = null;

        /**
         * 微信小程序视频发布状态，取值：
<li>Pass：发布成功；</li>
<li>Failed：发布失败；</li>
<li>Rejected：审核未通过。</li>
         */
        this.PublishResult = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        SourceDefinition: number | null;
        PublishResult: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;
        this.PublishResult = 'PublishResult' in params ? params.PublishResult : null;

    }
}

/**
 * 制作媒体文件任务信息
 * @class
 */
class ComposeMediaTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    Input: ComposeMediaTaskInput | null
    
    Output: ComposeMediaTaskOutput | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
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
         * 制作媒体文件任务的输入。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Input = null;

        /**
         * 制作媒体文件任务的输出。
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
        Input: ComposeMediaTaskInput | null;
        Output: ComposeMediaTaskOutput | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new ComposeMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new ComposeMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 视频片头片尾识别任务控制参数
 * @class
 */
class HeadTailConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 视频片头片尾识别任务开关，可选值：
<li>ON：开启智能视频片头片尾识别任务；</li>
<li>OFF：关闭智能视频片头片尾识别任务。</li>
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
 * 视频转码播放信息（2017 版）
 * @class
 */
class TranscodePlayInfo2017 extends AbstractModel {

    Url: string | null
    
    Definition: number | null
    
    Bitrate: number | null
    
    Height: number | null
    
    Width: number | null
    
    constructor(){
        super();

        /**
         * 播放地址。
         */
        this.Url = null;

        /**
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33476)。
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

    }

    /**
     * @private
     */
    deserialize(params: {
        Url: string | null;
        Definition: number | null;
        Bitrate: number | null;
        Height: number | null;
        Width: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * 制作媒体文件任务的输入。
 * @class
 */
class ComposeMediaTaskInput extends AbstractModel {

    Tracks: Array<MediaTrack> | null
    
    Canvas: Canvas | null
    
    Output: ComposeMediaOutput | null
    
    constructor(){
        super();

        /**
         * 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息。
         */
        this.Tracks = null;

        /**
         * 制作视频文件时使用的画布。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Canvas = null;

        /**
         * 输出的媒体文件信息。
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tracks: Array<MediaTrack> | null;
        Canvas: Canvas | null;
        Output: ComposeMediaOutput | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new MediaTrack();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.Output) {
            let obj = new ComposeMediaOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * 转动图任务类型
 * @class
 */
class AnimatedGraphicTaskInput extends AbstractModel {

    Definition: number | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 视频转动图模板 ID
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

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

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
    
    HighlightConfigure: HighlightsConfigureInfo | null
    
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
         * 智能精彩集锦任务控制参数。
         */
        this.HighlightConfigure = null;

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
        Name: string | null;
        Comment: string | null;
        ClassificationConfigure: ClassificationConfigureInfo | null;
        TagConfigure: TagConfigureInfo | null;
        CoverConfigure: CoverConfigureInfo | null;
        FrameTagConfigure: FrameTagConfigureInfo | null;
        HighlightConfigure: HighlightsConfigureInfo | null;
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

        if (params.HighlightConfigure) {
            let obj = new HighlightsConfigureInfo();
            obj.deserialize(params.HighlightConfigure)
            this.HighlightConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 单个物体识别结果。
 * @class
 */
class AiRecognitionTaskObjectResultItem extends AbstractModel {

    Name: string | null
    
    SegmentSet: Array<AiRecognitionTaskObjectSeqmentItem> | null
    
    constructor(){
        super();

        /**
         * 识别的物体名称。
         */
        this.Name = null;

        /**
         * 物体出现的片段列表。
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        SegmentSet: Array<AiRecognitionTaskObjectSeqmentItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskObjectSeqmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 点播文件指定时间点截图信息
 * @class
 */
class MediaSnapshotByTimeOffsetInfo extends AbstractModel {

    SnapshotByTimeOffsetSet: Array<MediaSnapshotByTimeOffsetItem> | null
    
    constructor(){
        super();

        /**
         * 特定规格的指定时间点截图信息集合。目前每种规格只能有一套截图。
         */
        this.SnapshotByTimeOffsetSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SnapshotByTimeOffsetSet: Array<MediaSnapshotByTimeOffsetItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SnapshotByTimeOffsetSet) {
            this.SnapshotByTimeOffsetSet = new Array();
            for (let z in params.SnapshotByTimeOffsetSet) {
                let obj = new MediaSnapshotByTimeOffsetItem();
                obj.deserialize(params.SnapshotByTimeOffsetSet[z]);
                this.SnapshotByTimeOffsetSet.push(obj);
            }
        }

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 视频打点信息
 * @class
 */
class MediaKeyFrameDescItem extends AbstractModel {

    TimeOffset: number | null
    
    Content: string | null
    
    constructor(){
        super();

        /**
         * 打点的视频偏移时间，单位：秒。
         */
        this.TimeOffset = null;

        /**
         * 打点的内容字符串，限制 1-128 个字符。
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TimeOffset: number | null;
        Content: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Content = 'Content' in params ? params.Content : null;

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
 * 播放器配置详情
 * @class
 */
class PlayerConfig extends AbstractModel {

    Name: string | null
    
    Type: string | null
    
    DrmSwitch: string | null
    
    AdaptiveDynamicStreamingDefinition: number | null
    
    DrmStreamingsInfo: DrmStreamingsInfo | null
    
    ImageSpriteDefinition: number | null
    
    ResolutionNameSet: Array<ResolutionNameInfo> | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    Domain: string | null
    
    Scheme: string | null
    
    Comment: string | null
    
    constructor(){
        super();

        /**
         * 播放器配置名字。
         */
        this.Name = null;

        /**
         * 播放器配置类型，取值范围：
<li>Preset：系统预置配置；</li>
<li>Custom：用户自定义配置。</li>
         */
        this.Type = null;

        /**
         * 播放 DRM 保护的自适应码流开关：
<li>ON：开启，表示仅播放 DRM  保护的自适应码流输出；</li>
<li>OFF：关闭，表示播放未加密的自适应码流输出。</li>
         */
        this.DrmSwitch = null;

        /**
         * 允许输出的未加密的自适应码流模板 ID。
         */
        this.AdaptiveDynamicStreamingDefinition = null;

        /**
         * 允许输出的 DRM 自适应码流模板内容。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DrmStreamingsInfo = null;

        /**
         * 允许输出的雪碧图模板 ID。
         */
        this.ImageSpriteDefinition = null;

        /**
         * 播放器对不于不同分辨率的子流展示名字。
         */
        this.ResolutionNameSet = null;

        /**
         * 播放器配置创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         */
        this.CreateTime = null;

        /**
         * 播放器配置最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         */
        this.UpdateTime = null;

        /**
         * 播放时使用的域名。值为 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。
         */
        this.Domain = null;

        /**
         * 播放时使用的 Scheme。取值范围：
<li>Default：使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme；</li>
<li>HTTP；</li>
<li>HTTPS。</li>
         */
        this.Scheme = null;

        /**
         * 模板描述信息。
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Type: string | null;
        DrmSwitch: string | null;
        AdaptiveDynamicStreamingDefinition: number | null;
        DrmStreamingsInfo: DrmStreamingsInfo | null;
        ImageSpriteDefinition: number | null;
        ResolutionNameSet: Array<ResolutionNameInfo> | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        Domain: string | null;
        Scheme: string | null;
        Comment: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DrmSwitch = 'DrmSwitch' in params ? params.DrmSwitch : null;
        this.AdaptiveDynamicStreamingDefinition = 'AdaptiveDynamicStreamingDefinition' in params ? params.AdaptiveDynamicStreamingDefinition : null;

        if (params.DrmStreamingsInfo) {
            let obj = new DrmStreamingsInfo();
            obj.deserialize(params.DrmStreamingsInfo)
            this.DrmStreamingsInfo = obj;
        }
        this.ImageSpriteDefinition = 'ImageSpriteDefinition' in params ? params.ImageSpriteDefinition : null;

        if (params.ResolutionNameSet) {
            this.ResolutionNameSet = new Array();
            for (let z in params.ResolutionNameSet) {
                let obj = new ResolutionNameInfo();
                obj.deserialize(params.ResolutionNameSet[z]);
                this.ResolutionNameSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * ConfirmEvents请求参数结构体
 * @class
 */
class ConfirmEventsRequest extends AbstractModel {

    EventHandles: Array<string> | null
    
    ExtInfo: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 事件句柄，即 [拉取事件通知](/document/product/266/33433) 接口输出参数中的 EventSet. EventHandle 字段。
数组长度限制：16。
         */
        this.EventHandles = null;

        /**
         * 保留字段，特殊用途时使用。
         */
        this.ExtInfo = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventHandles: Array<string> | null;
        ExtInfo: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventHandles = 'EventHandles' in params ? params.EventHandles : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * ModifySubAppIdStatus请求参数结构体
 * @class
 */
class ModifySubAppIdStatusRequest extends AbstractModel {

    SubAppId: number | null
    
    Status: string | null
    
    constructor(){
        super();

        /**
         * 子应用 ID。
         */
        this.SubAppId = null;

        /**
         * 子应用状态，取值范围：
<li>On：启用</li>
<li>Off：停用</li>
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubAppId: number | null;
        Status: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateSubAppId返回参数结构体
 * @class
 */
class CreateSubAppIdResponse extends AbstractModel {

    SubAppId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 新创建的子应用 ID。
         */
        this.SubAppId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubAppId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ResetProcedureTemplate返回参数结构体
 * @class
 */
class ResetProcedureTemplateResponse extends AbstractModel {

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
 * DRM 自适应码流播放信息
 * @class
 */
class DrmStreamingsInfo extends AbstractModel {

    SimpleAesDefinition: number | null
    
    constructor(){
        super();

        /**
         * 保护类型为 SimpleAES 的转自适应码流模板 ID。
         */
        this.SimpleAesDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SimpleAesDefinition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SimpleAesDefinition = 'SimpleAesDefinition' in params ? params.SimpleAesDefinition : null;

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
    
    HighlightTask: AiAnalysisTaskHighlightResult | null
    
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

        /**
         * 视频内容分析智能精彩集锦任务的查询结果，当任务类型为 Highlight 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HighlightTask = null;

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
        HighlightTask: AiAnalysisTaskHighlightResult | null;
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

        if (params.HighlightTask) {
            let obj = new AiAnalysisTaskHighlightResult();
            obj.deserialize(params.HighlightTask)
            this.HighlightTask = obj;
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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 视频内容分析模板唯一标识过滤条件，数组长度最大值：100。
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 点播文件转码信息
 * @class
 */
class MediaTranscodeInfo extends AbstractModel {

    TranscodeSet: Array<MediaTranscodeItem> | null
    
    constructor(){
        super();

        /**
         * 各规格的转码信息集合，每个元素代表一个规格的转码结果。
         */
        this.TranscodeSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TranscodeSet: Array<MediaTranscodeItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TranscodeSet) {
            this.TranscodeSet = new Array();
            for (let z in params.TranscodeSet) {
                let obj = new MediaTranscodeItem();
                obj.deserialize(params.TranscodeSet[z]);
                this.TranscodeSet.push(obj);
            }
        }

    }
}

/**
 * 播放器子流名字信息
 * @class
 */
class ResolutionNameInfo extends AbstractModel {

    MinEdgeLength: number | null
    
    Name: string | null
    
    constructor(){
        super();

        /**
         * 视频短边长度，单位：像素。
         */
        this.MinEdgeLength = null;

        /**
         * 展示名字。
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MinEdgeLength: number | null;
        Name: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MinEdgeLength = 'MinEdgeLength' in params ? params.MinEdgeLength : null;
        this.Name = 'Name' in params ? params.Name : null;

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
 * ParseStreamingManifest请求参数结构体
 * @class
 */
class ParseStreamingManifestRequest extends AbstractModel {

    MediaManifestContent: string | null
    
    ManifestType: string | null
    
    constructor(){
        super();

        /**
         * 待解析的索引文件内容。
         */
        this.MediaManifestContent = null;

        /**
         * 视频索引文件格式。默认 m3u8 格式。
<li>m3u8</li>
<li>mpd</li>
         */
        this.ManifestType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaManifestContent: string | null;
        ManifestType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MediaManifestContent = 'MediaManifestContent' in params ? params.MediaManifestContent : null;
        this.ManifestType = 'ManifestType' in params ? params.ManifestType : null;

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
 * 媒体轨道的片段信息
 * @class
 */
class MediaTrackItem extends AbstractModel {

    Type: string | null
    
    VideoItem: VideoTrackItem | null
    
    AudioItem: AudioTrackItem | null
    
    StickerItem: StickerTrackItem | null
    
    TransitionItem: MediaTransitionItem | null
    
    EmptyItem: EmptyTrackItem | null
    
    constructor(){
        super();

        /**
         * 片段类型。取值有：
<li>Video：视频片段。</li>
<li>Audio：音频片段。</li>
<li>Sticker：贴图片段。</li>
<li>Transition：转场。</li>
<li>Empty：空白片段。</li>
         */
        this.Type = null;

        /**
         * 视频片段，当 Type = Video 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VideoItem = null;

        /**
         * 音频片段，当 Type = Audio 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AudioItem = null;

        /**
         * 贴图片段，当 Type = Sticker 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StickerItem = null;

        /**
         * 转场，当 Type = Transition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TransitionItem = null;

        /**
         * 空白片段，当 Type = Empty 时有效。空片段用于时间轴的占位。<li>如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。</li>
<li>使用 EmptyTrackItem 进行占位，来定位某个Item。</li>
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EmptyItem = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        VideoItem: VideoTrackItem | null;
        AudioItem: AudioTrackItem | null;
        StickerItem: StickerTrackItem | null;
        TransitionItem: MediaTransitionItem | null;
        EmptyItem: EmptyTrackItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VideoItem) {
            let obj = new VideoTrackItem();
            obj.deserialize(params.VideoItem)
            this.VideoItem = obj;
        }

        if (params.AudioItem) {
            let obj = new AudioTrackItem();
            obj.deserialize(params.AudioItem)
            this.AudioItem = obj;
        }

        if (params.StickerItem) {
            let obj = new StickerTrackItem();
            obj.deserialize(params.StickerItem)
            this.StickerItem = obj;
        }

        if (params.TransitionItem) {
            let obj = new MediaTransitionItem();
            obj.deserialize(params.TransitionItem)
            this.TransitionItem = obj;
        }

        if (params.EmptyItem) {
            let obj = new EmptyTrackItem();
            obj.deserialize(params.EmptyItem)
            this.EmptyItem = obj;
        }

    }
}

/**
 * DescribeStorageDetails返回参数结构体
 * @class
 */
class DescribeStorageDetailsResponse extends AbstractModel {

    Data: Array<StatDataItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 存储统计数据，每分钟/小时/天一条数据。
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
    deserialize(params: {
        Data: Array<StatDataItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PullEvents返回参数结构体
 * @class
 */
class PullEventsResponse extends AbstractModel {

    EventSet: Array<EventContent> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 事件列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EventSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventSet: Array<EventContent> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new EventContent();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 物体识别任务输入类型。
 * @class
 */
class AiRecognitionTaskObjectResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 物体识别模板 ID。
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
 * 输出的视频流信息
 * @class
 */
class OutputVideoStream extends AbstractModel {

    Codec: string | null
    
    Fps: number | null
    
    constructor(){
        super();

        /**
         * 视频流的编码格式，可选值：
<li>libx264：H.264 编码 </li>
默认值：libx264。
         */
        this.Codec = null;

        /**
         * 视频帧率，取值范围：[0, 60]，单位：Hz。
默认值：0，表示和第一个视频轨的第一个视频片段的视频帧率一致。
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Codec: string | null;
        Fps: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * 任务流模板详情
 * @class
 */
class ProcedureTemplate extends AbstractModel {

    Name: string | null
    
    Type: string | null
    
    Comment: string | null
    
    MediaProcessTask: MediaProcessTaskInput | null
    
    AiContentReviewTask: AiContentReviewTaskInput | null
    
    AiAnalysisTask: AiAnalysisTaskInput | null
    
    AiRecognitionTask: AiRecognitionTaskInput | null
    
    MiniProgramPublishTask: WechatMiniProgramPublishTaskInput | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 任务流名字。
         */
        this.Name = null;

        /**
         * 任务流模板类型，取值范围：
<li>Preset：系统预置任务流模板；</li>
<li>Custom：用户自定义任务流模板。</li>
         */
        this.Type = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 视频处理类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MediaProcessTask = null;

        /**
         * AI 智能内容审核类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiContentReviewTask = null;

        /**
         * AI 智能内容分析类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiAnalysisTask = null;

        /**
         * AI 内容识别类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AiRecognitionTask = null;

        /**
         * 微信小程序发布任务参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MiniProgramPublishTask = null;

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
        Name: string | null;
        Type: string | null;
        Comment: string | null;
        MediaProcessTask: MediaProcessTaskInput | null;
        AiContentReviewTask: AiContentReviewTaskInput | null;
        AiAnalysisTask: AiAnalysisTaskInput | null;
        AiRecognitionTask: AiRecognitionTaskInput | null;
        MiniProgramPublishTask: WechatMiniProgramPublishTaskInput | null;
        CreateTime: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

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

        if (params.MiniProgramPublishTask) {
            let obj = new WechatMiniProgramPublishTaskInput();
            obj.deserialize(params.MiniProgramPublishTask)
            this.MiniProgramPublishTask = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
 * ProcessMediaByUrl返回参数结构体
 * @class
 */
class ProcessMediaByUrlResponse extends AbstractModel {

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
    
    PicUrlExpireTimeStamp: number | null
    
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
         * 嫌疑片段鉴政结果标签。内容审核模板[画面鉴政任务控制参数](https://cloud.tencent.com/document/api/266/31773#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
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
         * 该字段已废弃，请使用 PicUrlExpireTime。
         */
        this.PicUrlExpireTimeStamp = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
        PicUrlExpireTimeStamp: number | null;
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
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;
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
    
    ScreenshotInterval: number | null
    
    ReviewWallSwitch: string | null
    
    SubAppId: number | null
    
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
         */
        this.ProhibitedConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
         */
        this.UserDefineConfigure = null;

        /**
         * 截帧间隔，单位为秒，最小值为 0.5 秒。
         */
        this.ScreenshotInterval = null;

        /**
         * 审核结果是否进入审核墙（对审核结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
         */
        this.ReviewWallSwitch = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        ScreenshotInterval: number | null;
        ReviewWallSwitch: string | null;
        SubAppId: number | null;
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
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * 对视频按指定时间点截图任务输入参数类型
 * @class
 */
class SnapshotByTimeOffsetTaskInput extends AbstractModel {

    Definition: number | null
    
    ExtTimeOffsetSet: Array<string> | null
    
    TimeOffsetSet: Array<number> | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
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
         * 截图时间点列表，单位为<font color=red>毫秒</font>。此参数已不再建议使用，建议您使用 ExtTimeOffsetSet 参数。
         */
        this.TimeOffsetSet = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         */
        this.WatermarkSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        ExtTimeOffsetSet: Array<string> | null;
        TimeOffsetSet: Array<number> | null;
        WatermarkSet: Array<WatermarkInput> | null;
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

    }
}

/**
 * 视频拆条任务识别控制参数
 * @class
 */
class SegmentConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 视频拆条识别任务开关，可选值：
<li>ON：开启智能视频拆条识别任务；</li>
<li>OFF：关闭智能视频拆条识别任务。</li>
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
 * 任务统计数据，包括任务数和用量。
 * @class
 */
class TaskStatDataItem extends AbstractModel {

    Time: string | null
    
    Count: number | null
    
    Usage: number | null
    
    constructor(){
        super();

        /**
         * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
         */
        this.Time = null;

        /**
         * 任务数。
         */
        this.Count = null;

        /**
         * 任务用量。
         */
        this.Usage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Time: string | null;
        Count: number | null;
        Usage: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Usage = 'Usage' in params ? params.Usage : null;

    }
}

/**
 * ParseStreamingManifest返回参数结构体
 * @class
 */
class ParseStreamingManifestResponse extends AbstractModel {

    MediaSegmentSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 分片文件列表。
         */
        this.MediaSegmentSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaSegmentSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MediaSegmentSet = 'MediaSegmentSet' in params ? params.MediaSegmentSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ApplyUpload请求参数结构体
 * @class
 */
class ApplyUploadRequest extends AbstractModel {

    MediaType: string | null
    
    MediaName: string | null
    
    CoverType: string | null
    
    Procedure: string | null
    
    ExpireTime: string | null
    
    StorageRegion: string | null
    
    ClassId: number | null
    
    SourceContext: string | null
    
    SessionContext: string | null
    
    ExtInfo: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体类型，可选值请参考 [上传能力综述](/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B)。
         */
        this.MediaType = null;

        /**
         * 媒体名称。
         */
        this.MediaName = null;

        /**
         * 封面类型，可选值请参考 [上传能力综述](/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B)。
         */
        this.CoverType = null;

        /**
         * 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 [创建任务流模板](/document/product/266/33819) 并为模板命名。
         */
        this.Procedure = null;

        /**
         * 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
         */
        this.ExpireTime = null;

        /**
         * 指定上传园区，仅适用于对上传地域有特殊需求的用户。
         */
        this.StorageRegion = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
<li>默认值：0，表示其他分类。</li>
         */
        this.ClassId = null;

        /**
         * 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。
         */
        this.SourceContext = null;

        /**
         * 会话上下文，用于透传用户请求信息，当指定 Procedure 参数后，[任务流状态变更回调](/document/product/266/9636) 将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 保留字段，特殊用途时使用。
         */
        this.ExtInfo = null;

        /**
         * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaType: string | null;
        MediaName: string | null;
        CoverType: string | null;
        Procedure: string | null;
        ExpireTime: string | null;
        StorageRegion: string | null;
        ClassId: number | null;
        SourceContext: string | null;
        SessionContext: string | null;
        ExtInfo: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MediaType = 'MediaType' in params ? params.MediaType : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.CoverType = 'CoverType' in params ? params.CoverType : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 智能精彩片段任务输入类型
 * @class
 */
class AiAnalysisTaskHighlightInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频智能精彩片段模板 ID。
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
 * 点播媒体文件基础信息
 * @class
 */
class MediaBasicInfo extends AbstractModel {

    Name: string | null
    
    Description: string | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    ExpireTime: string | null
    
    ClassId: number | null
    
    ClassName: string | null
    
    ClassPath: string | null
    
    CoverUrl: string | null
    
    Type: string | null
    
    MediaUrl: string | null
    
    SourceInfo: MediaSourceData | null
    
    StorageRegion: string | null
    
    TagSet: Array<string> | null
    
    Vid: string | null
    
    Category: string | null
    
    Status: string | null
    
    constructor(){
        super();

        /**
         * 媒体文件名称。
         */
        this.Name = null;

        /**
         * 媒体文件描述。
         */
        this.Description = null;

        /**
         * 媒体文件的创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.UpdateTime = null;

        /**
         * 媒体文件的过期时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。“9999-12-31T23:59:59Z”表示永不过期。
         */
        this.ExpireTime = null;

        /**
         * 媒体文件的分类 ID。
         */
        this.ClassId = null;

        /**
         * 媒体文件的分类名称。
         */
        this.ClassName = null;

        /**
         * 媒体文件的分类路径，分类间以“-”分隔，如“新的一级分类 - 新的二级分类”。
         */
        this.ClassPath = null;

        /**
         * 媒体文件的封面图片地址。
         */
        this.CoverUrl = null;

        /**
         * 媒体文件的封装格式，例如 mp4、flv 等。
         */
        this.Type = null;

        /**
         * 原始媒体文件的 URL 地址。
         */
        this.MediaUrl = null;

        /**
         * 该媒体文件的来源信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SourceInfo = null;

        /**
         * 媒体文件存储地区，如 ap-guangzhou，参见[地域列表](https://cloud.tencent.com/document/api/213/15692#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)。
         */
        this.StorageRegion = null;

        /**
         * 媒体文件的标签信息。
         */
        this.TagSet = null;

        /**
         * 直播录制文件的唯一标识。
         */
        this.Vid = null;

        /**
         * 文件类型：
<li>Video: 视频文件</li>
<li>Audio: 音频文件</li>
<li>Image: 图片文件</li>
         */
        this.Category = null;

        /**
         * 文件状态：Normal：正常，Forbidden：封禁。

*注意：此字段暂不支持。
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Description: string | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        ExpireTime: string | null;
        ClassId: number | null;
        ClassName: string | null;
        ClassPath: string | null;
        CoverUrl: string | null;
        Type: string | null;
        MediaUrl: string | null;
        SourceInfo: MediaSourceData | null;
        StorageRegion: string | null;
        TagSet: Array<string> | null;
        Vid: string | null;
        Category: string | null;
        Status: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;

        if (params.SourceInfo) {
            let obj = new MediaSourceData();
            obj.deserialize(params.SourceInfo)
            this.SourceInfo = obj;
        }
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.Vid = 'Vid' in params ? params.Vid : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * PullUpload请求参数结构体
 * @class
 */
class PullUploadRequest extends AbstractModel {

    MediaUrl: string | null
    
    MediaName: string | null
    
    CoverUrl: string | null
    
    Procedure: string | null
    
    ExpireTime: string | null
    
    StorageRegion: string | null
    
    ClassId: number | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    ExtInfo: string | null
    
    SubAppId: number | null
    
    SourceContext: string | null
    
    constructor(){
        super();

        /**
         * 要拉取的媒体 URL，暂不支持拉取 Dash 格式（可以支持 HLS）。
支持的扩展名详见[媒体类型](https://cloud.tencent.com/document/product/266/9760#.E5.AA.92.E4.BD.93.E7.B1.BB.E5.9E.8B)。
         */
        this.MediaUrl = null;

        /**
         * 媒体名称。
         */
        this.MediaName = null;

        /**
         * 要拉取的视频封面 URL。仅支持 gif、jpeg、png 三种图片格式。
         */
        this.CoverUrl = null;

        /**
         * 媒体后续任务操作，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。
         */
        this.Procedure = null;

        /**
         * 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.ExpireTime = null;

        /**
         * 指定上传园区，仅适用于对上传地域有特殊需求的用户：
<li>不填默认上传至您的[默认地域](https://cloud.tencent.com/document/product/266/14059?from=11329#.E5.AD.98.E5.82.A8.E5.9C.B0.E5.9F.9F.E6.AD.A5.E9.AA.A4)。</li>
<li>若指定上传园区，请先确认[上传存储设置](https://cloud.tencent.com/document/product/266/14059?from=11329#.E5.AD.98.E5.82.A8.E5.9C.B0.E5.9F.9F.E6.AD.A5.E9.AA.A4)已经开启相应的存储地域。</li>
         */
        this.StorageRegion = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过[创建分类](https://cloud.tencent.com/document/product/266/7812)接口，创建分类，获得分类 ID。
         */
        this.ClassId = null;

        /**
         * 来源上下文，用于透传用户请求信息，当指定 Procedure 任务后，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 保留字段，特殊用途时使用。
         */
        this.ExtInfo = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

        /**
         * 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。
         */
        this.SourceContext = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaUrl: string | null;
        MediaName: string | null;
        CoverUrl: string | null;
        Procedure: string | null;
        ExpireTime: string | null;
        StorageRegion: string | null;
        ClassId: number | null;
        SessionContext: string | null;
        SessionId: string | null;
        ExtInfo: string | null;
        SubAppId: number | null;
        SourceContext: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;

    }
}

/**
 * 排序依据
 * @class
 */
class SortBy extends AbstractModel {

    Field: string | null
    
    Order: string | null
    
    constructor(){
        super();

        /**
         * 排序字段
         */
        this.Field = null;

        /**
         * 排序方式，可选值：Asc（升序）、Desc（降序）
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Field: string | null;
        Order: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 视频剪辑任务信息，该结构仅用于对 2017 版[视频剪辑](https://cloud.tencent.com/document/product/266/10156)接口发起的任务。
 * @class
 */
class ClipTask2017 extends AbstractModel {

    TaskId: string | null
    
    SrcFileId: string | null
    
    FileInfo: ClipFileInfo2017 | null
    
    constructor(){
        super();

        /**
         * 视频剪辑任务 ID。
         */
        this.TaskId = null;

        /**
         * 视频剪辑任务源文件 ID。
         */
        this.SrcFileId = null;

        /**
         * 视频剪辑输出的文件信息。
         */
        this.FileInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        SrcFileId: string | null;
        FileInfo: ClipFileInfo2017 | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SrcFileId = 'SrcFileId' in params ? params.SrcFileId : null;

        if (params.FileInfo) {
            let obj = new ClipFileInfo2017();
            obj.deserialize(params.FileInfo)
            this.FileInfo = obj;
        }

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
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VideoTemplate = null;

        /**
         * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeCDNUsageData请求参数结构体
 * @class
 */
class DescribeCDNUsageDataRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    DataType: string | null
    
    DataInterval: number | null
    
    DomainNames: Array<string> | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 起始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.StartTime = null;

        /**
         * 结束日期，需大于开始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.EndTime = null;

        /**
         * CDN 统计数据类型，有效值：
<li>Flux：流量，单位为 byte。</li>
<li>Bandwidth：带宽，单位为 bps。</li>
         */
        this.DataType = null;

        /**
         * 用量数据的时间粒度，单位：分钟，取值有：
<li>5：5 分钟粒度，返回指定查询时间内5分钟粒度的明细数据。</li>
<li>60：小时粒度，返回指定查询时间内1小时粒度的数据。</li>
<li>1440：天粒度，返回指定查询时间内1天粒度的数据。</li>
默认值为1440，返回天粒度的数据。
当该字段为1时，表示以管理员身份查询所有子应用（含主应用）的用量合计。
         */
        this.DataInterval = null;

        /**
         * 域名列表。一次最多查询20个域名的用量数据。可以指定多个域名，查询这些域名叠加的用量数据。默认返回所有域名叠加的用量数据。
         */
        this.DomainNames = null;

        /**
         * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
当该字段为1时，表示以管理员身份查询所有子应用（含主应用）的用量合计，此时时间粒度只支持天粒度。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        DataType: string | null;
        DataInterval: number | null;
        DomainNames: Array<string> | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.DataInterval = 'DataInterval' in params ? params.DataInterval : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 内容审核 Asr 文字鉴政任务输入。
         */
        this.Input = null;

        /**
         * 内容审核 Asr 文字鉴政任务输出。
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
 * DescribeReviewDetails请求参数结构体
 * @class
 */
class DescribeReviewDetailsRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.StartTime = null;

        /**
         * 结束日期，需大于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.EndTime = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    PicUrlExpireTimeStamp: number | null
    
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
         * 该字段已废弃，请使用 PicUrlExpireTime。
         */
        this.PicUrlExpireTimeStamp = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
        PicUrlExpireTimeStamp: number | null;
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
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;
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
 * 智能物体识别输出。
 * @class
 */
class AiRecognitionTaskObjectResultOutput extends AbstractModel {

    ResultSet: Array<AiRecognitionTaskObjectResultItem> | null
    
    constructor(){
        super();

        /**
         * 智能物体识别结果集。
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultSet: Array<AiRecognitionTaskObjectResultItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskObjectResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
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
 * CreateClass返回参数结构体
 * @class
 */
class CreateClassResponse extends AbstractModel {

    ClassId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 分类 ID
         */
        this.ClassId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClassId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSuperPlayerConfig返回参数结构体
 * @class
 */
class DeleteSuperPlayerConfigResponse extends AbstractModel {

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
 * DescribeSampleSnapshotTemplates请求参数结构体
 * @class
 */
class DescribeSampleSnapshotTemplatesRequest extends AbstractModel {

    Definitions: Array<number> | null
    
    Offset: number | null
    
    Limit: number | null
    
    Type: string | null
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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

    }

    /**
     * @private
     */
    deserialize(params: {
        Video: VideoTemplateInfo | null;
        Audio: AudioTemplateInfo | null;
        RemoveAudio: number | null;
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

    }
}

/**
 * 转码任务输入参数类型
 * @class
 */
class TranscodeTaskInput extends AbstractModel {

    Definition: number | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
    MosaicSet: Array<MosaicInput> | null
    
    constructor(){
        super();

        /**
         * 视频转码模板 ID。
         */
        this.Definition = null;

        /**
         * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
         */
        this.WatermarkSet = null;

        /**
         * 马赛克列表，最大可支持 10 张。
         */
        this.MosaicSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        WatermarkSet: Array<WatermarkInput> | null;
        MosaicSet: Array<MosaicInput> | null;
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

        if (params.MosaicSet) {
            this.MosaicSet = new Array();
            for (let z in params.MosaicSet) {
                let obj = new MosaicInput();
                obj.deserialize(params.MosaicSet[z]);
                this.MosaicSet.push(obj);
            }
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
    
    HeadTailConfigure: HeadTailConfigureInfoForUpdate | null
    
    SegmentConfigure: SegmentConfigureInfoForUpdate | null
    
    FaceConfigure: FaceConfigureInfoForUpdate | null
    
    OcrFullTextConfigure: OcrFullTextConfigureInfoForUpdate | null
    
    OcrWordsConfigure: OcrWordsConfigureInfoForUpdate | null
    
    AsrFullTextConfigure: AsrFullTextConfigureInfoForUpdate | null
    
    AsrWordsConfigure: AsrWordsConfigureInfoForUpdate | null
    
    ObjectConfigure: ObjectConfigureInfoForUpdate | null
    
    ScreenshotInterval: number | null
    
    SubAppId: number | null
    
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
         * 视频片头片尾识别控制参数。
         */
        this.HeadTailConfigure = null;

        /**
         * 视频拆条识别控制参数。
         */
        this.SegmentConfigure = null;

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
         * 物体识别控制参数。
         */
        this.ObjectConfigure = null;

        /**
         * 截帧间隔，单位为秒，最小值为 0.5 秒。
         */
        this.ScreenshotInterval = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Name: string | null;
        Comment: string | null;
        HeadTailConfigure: HeadTailConfigureInfoForUpdate | null;
        SegmentConfigure: SegmentConfigureInfoForUpdate | null;
        FaceConfigure: FaceConfigureInfoForUpdate | null;
        OcrFullTextConfigure: OcrFullTextConfigureInfoForUpdate | null;
        OcrWordsConfigure: OcrWordsConfigureInfoForUpdate | null;
        AsrFullTextConfigure: AsrFullTextConfigureInfoForUpdate | null;
        AsrWordsConfigure: AsrWordsConfigureInfoForUpdate | null;
        ObjectConfigure: ObjectConfigureInfoForUpdate | null;
        ScreenshotInterval: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfoForUpdate();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

        if (params.SegmentConfigure) {
            let obj = new SegmentConfigureInfoForUpdate();
            obj.deserialize(params.SegmentConfigure)
            this.SegmentConfigure = obj;
        }

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

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfoForUpdate();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 微信发布任务信息
 * @class
 */
class WechatPublishTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    Definition: number | null
    
    SourceDefinition: number | null
    
    WechatStatus: string | null
    
    WechatVid: string | null
    
    WechatUrl: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务状态，取值：
WAITING：等待中；
PROCESSING：处理中；
FINISH：已完成。
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
         * 发布视频文件 ID。
         */
        this.FileId = null;

        /**
         * 微信发布模板 ID。
         */
        this.Definition = null;

        /**
         * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
         */
        this.SourceDefinition = null;

        /**
         * 微信发布状态，取值：
<li>FAIL：失败；</li>
<li>SUCCESS：成功；</li>
<li>AUDITNOTPASS：审核未通过；</li>
<li>NOTTRIGGERED：尚未发起微信发布。</li>
         */
        this.WechatStatus = null;

        /**
         * 微信 Vid。
         */
        this.WechatVid = null;

        /**
         * 微信地址。
         */
        this.WechatUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        Definition: number | null;
        SourceDefinition: number | null;
        WechatStatus: string | null;
        WechatVid: string | null;
        WechatUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SourceDefinition = 'SourceDefinition' in params ? params.SourceDefinition : null;
        this.WechatStatus = 'WechatStatus' in params ? params.WechatStatus : null;
        this.WechatVid = 'WechatVid' in params ? params.WechatVid : null;
        this.WechatUrl = 'WechatUrl' in params ? params.WechatUrl : null;

    }
}

/**
 * 视频裁剪结果文件信息（2017 版）
 * @class
 */
class ClipFileInfo2017 extends AbstractModel {

    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    FileUrl: string | null
    
    FileType: string | null
    
    constructor(){
        super();

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
         */
        this.ErrCode = null;

        /**
         * 错误描述。
         */
        this.Message = null;

        /**
         * 输出目标文件的文件 ID。
         */
        this.FileId = null;

        /**
         * 输出目标文件的文件地址。
         */
        this.FileUrl = null;

        /**
         * 输出目标文件的文件类型。
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        FileUrl: string | null;
        FileType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * 统计数据
 * @class
 */
class StatDataItem extends AbstractModel {

    Time: string | null
    
    Value: number | null
    
    constructor(){
        super();

        /**
         * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
<li>表示小时级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日0点到1点的统计数据。</li>
<li>表示天级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日的统计数据。</li>
         */
        this.Time = null;

        /**
         * 数据大小。
<li>存储空间的数据，单位是字节。</li>
<li>转码时长的数据，单位是秒。</li>
<li>流量数据，单位是字节。</li>
<li>带宽数据，单位是比特每秒。</li>
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Time: string | null;
        Value: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 来源文件信息
 * @class
 */
class MediaSourceData extends AbstractModel {

    SourceType: string | null
    
    SourceContext: string | null
    
    constructor(){
        super();

        /**
         * 媒体文件的来源类别：
<li>Record：来自录制。如直播录制、直播时移录制等。</li>
<li>Upload：来自上传。如拉取上传、服务端上传、客户端 UGC 上传等。</li>
<li>VideoProcessing：来自视频处理。如视频拼接、视频剪辑等。</li>
<li>Unknown：未知来源。</li>
         */
        this.SourceType = null;

        /**
         * 用户创建文件时透传的字段
         */
        this.SourceContext = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SourceType: string | null;
        SourceContext: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;

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
 * PushUrlCache请求参数结构体
 * @class
 */
class PushUrlCacheRequest extends AbstractModel {

    Urls: Array<string> | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 预热的 URL 列表，单次最多指定20个 URL。
         */
        this.Urls = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Urls: Array<string> | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 视频片头片尾识别任务控制参数
 * @class
 */
class HeadTailConfigureInfo extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 视频片头片尾识别任务开关，可选值：
<li>ON：开启智能视频片头片尾识别任务；</li>
<li>OFF：关闭智能视频片头片尾识别任务。</li>
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
 * 事件通知内容，其中，TranscodeCompleteEvent、ConcatCompleteEvent、ClipCompleteEvent、CreateImageSpriteCompleteEvent、SnapshotByTimeOffsetCompleteEvent 为兼容 2017 版接口发起任务的事件通知。
 * @class
 */
class EventContent extends AbstractModel {

    EventHandle: string | null
    
    EventType: string | null
    
    FileUploadEvent: FileUploadTask | null
    
    ProcedureStateChangeEvent: ProcedureTask | null
    
    FileDeleteEvent: FileDeleteTask | null
    
    PullCompleteEvent: PullUploadTask | null
    
    EditMediaCompleteEvent: EditMediaTask | null
    
    WechatPublishCompleteEvent: WechatPublishTask | null
    
    TranscodeCompleteEvent: TranscodeTask2017 | null
    
    ConcatCompleteEvent: ConcatTask2017 | null
    
    ClipCompleteEvent: ClipTask2017 | null
    
    CreateImageSpriteCompleteEvent: CreateImageSpriteTask2017 | null
    
    SnapshotByTimeOffsetCompleteEvent: SnapshotByTimeOffsetTask2017 | null
    
    ComposeMediaCompleteEvent: ComposeMediaTask | null
    
    WechatMiniProgramPublishCompleteEvent: WechatMiniProgramPublishTask | null
    
    constructor(){
        super();

        /**
         * 事件句柄，调用方必须调用 ConfirmEvents 来确认消息已经收到，确认有效时间 30 秒。失效后，事件可重新被获取。
         */
        this.EventHandle = null;

        /**
         * <b>支持事件类型：</b>
<li>NewFileUpload：视频上传完成；</li>
<li>ProcedureStateChanged：任务流状态变更；</li>
<li>FileDeleted：视频删除完成；</li>
<li>PullComplete：视频转拉完成；</li>
<li>EditMediaComplete：视频编辑完成；</li>
<li>WechatPublishComplete：微信发布完成；</li>
<li>ComposeMediaComplete：制作媒体文件完成；</li>
<li>WechatMiniProgramPublishComplete：微信小程序发布完成。</li>
<b>兼容 2017 版的事件类型：</b>
<li>TranscodeComplete：视频转码完成；</li>
<li>ConcatComplete：视频拼接完成；</li>
<li>ClipComplete：视频剪辑完成；</li>
<li>CreateImageSpriteComplete：视频截取雪碧图完成；</li>
<li>CreateSnapshotByTimeOffsetComplete：视频按时间点截图完成。</li>
         */
        this.EventType = null;

        /**
         * 视频上传完成事件，当事件类型为 NewFileUpload 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FileUploadEvent = null;

        /**
         * 任务流状态变更事件，当事件类型为 ProcedureStateChanged 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProcedureStateChangeEvent = null;

        /**
         * 文件删除事件，当事件类型为 FileDeleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FileDeleteEvent = null;

        /**
         * 视频转拉完成事件，当事件类型为 PullComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PullCompleteEvent = null;

        /**
         * 视频编辑完成事件，当事件类型为 EditMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EditMediaCompleteEvent = null;

        /**
         * 微信发布完成事件，当事件类型为 WechatPublishComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WechatPublishCompleteEvent = null;

        /**
         * 视频转码完成事件，当事件类型为 TranscodeComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TranscodeCompleteEvent = null;

        /**
         * 视频拼接完成事件，当事件类型为 ConcatComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ConcatCompleteEvent = null;

        /**
         * 视频剪辑完成事件，当事件类型为 ClipComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClipCompleteEvent = null;

        /**
         * 视频截取雪碧图完成事件，当事件类型为 CreateImageSpriteComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateImageSpriteCompleteEvent = null;

        /**
         * 视频按时间点截图完成事件，当事件类型为 CreateSnapshotByTimeOffsetComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SnapshotByTimeOffsetCompleteEvent = null;

        /**
         * 制作媒体文件任务完成事件，当事件类型为 ComposeMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ComposeMediaCompleteEvent = null;

        /**
         * 微信小程序发布任务完成事件，当事件类型为 WechatMiniProgramPublishComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WechatMiniProgramPublishCompleteEvent = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EventHandle: string | null;
        EventType: string | null;
        FileUploadEvent: FileUploadTask | null;
        ProcedureStateChangeEvent: ProcedureTask | null;
        FileDeleteEvent: FileDeleteTask | null;
        PullCompleteEvent: PullUploadTask | null;
        EditMediaCompleteEvent: EditMediaTask | null;
        WechatPublishCompleteEvent: WechatPublishTask | null;
        TranscodeCompleteEvent: TranscodeTask2017 | null;
        ConcatCompleteEvent: ConcatTask2017 | null;
        ClipCompleteEvent: ClipTask2017 | null;
        CreateImageSpriteCompleteEvent: CreateImageSpriteTask2017 | null;
        SnapshotByTimeOffsetCompleteEvent: SnapshotByTimeOffsetTask2017 | null;
        ComposeMediaCompleteEvent: ComposeMediaTask | null;
        WechatMiniProgramPublishCompleteEvent: WechatMiniProgramPublishTask | null;
    }): void {
        if (!params) {
            return;
        }
        this.EventHandle = 'EventHandle' in params ? params.EventHandle : null;
        this.EventType = 'EventType' in params ? params.EventType : null;

        if (params.FileUploadEvent) {
            let obj = new FileUploadTask();
            obj.deserialize(params.FileUploadEvent)
            this.FileUploadEvent = obj;
        }

        if (params.ProcedureStateChangeEvent) {
            let obj = new ProcedureTask();
            obj.deserialize(params.ProcedureStateChangeEvent)
            this.ProcedureStateChangeEvent = obj;
        }

        if (params.FileDeleteEvent) {
            let obj = new FileDeleteTask();
            obj.deserialize(params.FileDeleteEvent)
            this.FileDeleteEvent = obj;
        }

        if (params.PullCompleteEvent) {
            let obj = new PullUploadTask();
            obj.deserialize(params.PullCompleteEvent)
            this.PullCompleteEvent = obj;
        }

        if (params.EditMediaCompleteEvent) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaCompleteEvent)
            this.EditMediaCompleteEvent = obj;
        }

        if (params.WechatPublishCompleteEvent) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishCompleteEvent)
            this.WechatPublishCompleteEvent = obj;
        }

        if (params.TranscodeCompleteEvent) {
            let obj = new TranscodeTask2017();
            obj.deserialize(params.TranscodeCompleteEvent)
            this.TranscodeCompleteEvent = obj;
        }

        if (params.ConcatCompleteEvent) {
            let obj = new ConcatTask2017();
            obj.deserialize(params.ConcatCompleteEvent)
            this.ConcatCompleteEvent = obj;
        }

        if (params.ClipCompleteEvent) {
            let obj = new ClipTask2017();
            obj.deserialize(params.ClipCompleteEvent)
            this.ClipCompleteEvent = obj;
        }

        if (params.CreateImageSpriteCompleteEvent) {
            let obj = new CreateImageSpriteTask2017();
            obj.deserialize(params.CreateImageSpriteCompleteEvent)
            this.CreateImageSpriteCompleteEvent = obj;
        }

        if (params.SnapshotByTimeOffsetCompleteEvent) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetCompleteEvent)
            this.SnapshotByTimeOffsetCompleteEvent = obj;
        }

        if (params.ComposeMediaCompleteEvent) {
            let obj = new ComposeMediaTask();
            obj.deserialize(params.ComposeMediaCompleteEvent)
            this.ComposeMediaCompleteEvent = obj;
        }

        if (params.WechatMiniProgramPublishCompleteEvent) {
            let obj = new WechatMiniProgramPublishTask();
            obj.deserialize(params.WechatMiniProgramPublishCompleteEvent)
            this.WechatMiniProgramPublishCompleteEvent = obj;
        }

    }
}

/**
 * 智能精彩片段任务控制参数
 * @class
 */
class HighlightsConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    constructor(){
        super();

        /**
         * 智能精彩片段任务开关，可选值：
<li>ON：开启智能精彩片段任务；</li>
<li>OFF：关闭智能精彩片段任务。</li>
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
 * 输出的音频流信息
 * @class
 */
class OutputAudioStream extends AbstractModel {

    Codec: string | null
    
    SampleRate: number | null
    
    AudioChannel: number | null
    
    constructor(){
        super();

        /**
         * 音频流的编码格式，可选值：
<li>libfdk_aac：适合 mp4 文件。</li>
默认值：libfdk_aac。
         */
        this.Codec = null;

        /**
         * 音频流的采样率，可选值：
<li>16000</li>
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
默认值：16000。
         */
        this.SampleRate = null;

        /**
         * 音频声道数，可选值：
<li>1：单声道 。</li>
<li>2：双声道</li>
默认值：2。
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Codec: string | null;
        SampleRate: number | null;
        AudioChannel: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * ModifyClass请求参数结构体
 * @class
 */
class ModifyClassRequest extends AbstractModel {

    ClassId: number | null
    
    ClassName: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 分类 ID
         */
        this.ClassId = null;

        /**
         * 分类名称。长度限制：1-64 个字符。
         */
        this.ClassName = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClassId: number | null;
        ClassName: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 指定规格任务统计数据。
 * @class
 */
class SpecificationDataItem extends AbstractModel {

    Specification: string | null
    
    Data: Array<TaskStatDataItem> | null
    
    constructor(){
        super();

        /**
         * 任务规格。
         */
        this.Specification = null;

        /**
         * 统计数据。
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Specification: string | null;
        Data: Array<TaskStatDataItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Specification = 'Specification' in params ? params.Specification : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TaskStatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
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
 * 制作媒体文件任务的输出。
 * @class
 */
class ComposeMediaTaskOutput extends AbstractModel {

    FileType: string | null
    
    FileId: string | null
    
    FileUrl: string | null
    
    MediaName: string | null
    
    ClassId: number | null
    
    ExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 文件类型，例如 mp4、mp3 等。
         */
        this.FileType = null;

        /**
         * 媒体文件 ID。
         */
        this.FileId = null;

        /**
         * 媒体文件播放地址。
         */
        this.FileUrl = null;

        /**
         * 文件名称，最长 64 个字符。
         */
        this.MediaName = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
<li>默认值：0，表示其他分类。</li>
         */
        this.ClassId = null;

        /**
         * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileType: string | null;
        FileId: string | null;
        FileUrl: string | null;
        MediaName: string | null;
        ClassId: number | null;
        ExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeMediaInfos请求参数结构体
 * @class
 */
class DescribeMediaInfosRequest extends AbstractModel {

    FileIds: Array<string> | null
    
    Filters: Array<string> | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 媒体文件 ID 列表，N 从 0 开始取值，最大 19。
         */
        this.FileIds = null;

        /**
         * 指定所有媒体文件需要返回的信息，可同时指定多个信息，N 从 0 开始递增。如果未填写该字段，默认返回所有信息。选项有：
<li>basicInfo（视频基础信息）。</li>
<li>metaData（视频元信息）。</li>
<li>transcodeInfo（视频转码结果信息）。</li>
<li>animatedGraphicsInfo（视频转动图结果信息）。</li>
<li>imageSpriteInfo（视频雪碧图信息）。</li>
<li>snapshotByTimeOffsetInfo（视频指定时间点截图信息）。</li>
<li>sampleSnapshotInfo（采样截图信息）。</li>
<li>keyFrameDescInfo（打点信息）。</li>
<li>adaptiveDynamicStreamingInfo（转自适应码流信息）。</li>
<li>miniProgramReviewInfo（小程序审核信息）。</li>
         */
        this.Filters = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileIds: Array<string> | null;
        Filters: Array<string> | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.Filters = 'Filters' in params ? params.Filters : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * CreateAIRecognitionTemplate请求参数结构体
 * @class
 */
class CreateAIRecognitionTemplateRequest extends AbstractModel {

    Name: string | null
    
    Comment: string | null
    
    HeadTailConfigure: HeadTailConfigureInfo | null
    
    SegmentConfigure: SegmentConfigureInfo | null
    
    FaceConfigure: FaceConfigureInfo | null
    
    OcrFullTextConfigure: OcrFullTextConfigureInfo | null
    
    OcrWordsConfigure: OcrWordsConfigureInfo | null
    
    AsrFullTextConfigure: AsrFullTextConfigureInfo | null
    
    AsrWordsConfigure: AsrWordsConfigureInfo | null
    
    ObjectConfigure: ObjectConfigureInfo | null
    
    ScreenshotInterval: number | null
    
    SubAppId: number | null
    
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
         * 视频片头片尾识别控制参数。
         */
        this.HeadTailConfigure = null;

        /**
         * 视频拆条识别控制参数。
         */
        this.SegmentConfigure = null;

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
         * 物体识别控制参数。
         */
        this.ObjectConfigure = null;

        /**
         * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         */
        this.ScreenshotInterval = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Comment: string | null;
        HeadTailConfigure: HeadTailConfigureInfo | null;
        SegmentConfigure: SegmentConfigureInfo | null;
        FaceConfigure: FaceConfigureInfo | null;
        OcrFullTextConfigure: OcrFullTextConfigureInfo | null;
        OcrWordsConfigure: OcrWordsConfigureInfo | null;
        AsrFullTextConfigure: AsrFullTextConfigureInfo | null;
        AsrWordsConfigure: AsrWordsConfigureInfo | null;
        ObjectConfigure: ObjectConfigureInfo | null;
        ScreenshotInterval: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.HeadTailConfigure) {
            let obj = new HeadTailConfigureInfo();
            obj.deserialize(params.HeadTailConfigure)
            this.HeadTailConfigure = obj;
        }

        if (params.SegmentConfigure) {
            let obj = new SegmentConfigureInfo();
            obj.deserialize(params.SegmentConfigure)
            this.SegmentConfigure = obj;
        }

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

        if (params.ObjectConfigure) {
            let obj = new ObjectConfigureInfo();
            obj.deserialize(params.ObjectConfigure)
            this.ObjectConfigure = obj;
        }
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends AbstractModel {

    TaskId: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 视频处理任务的任务 ID。
         */
        this.TaskId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴政控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴政控制参数。
注意：此字段可能返回 null，表示取不到有效值。
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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    CoverBySnapshotTask: MediaProcessTaskCoverBySnapshotResult | null
    
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
         * 对视频截图做封面任务的查询结果，当任务类型为 CoverBySnapshot 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CoverBySnapshotTask = null;

        /**
         * 对视频转自适应码流任务的查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。
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
        CoverBySnapshotTask: MediaProcessTaskCoverBySnapshotResult | null;
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

        if (params.CoverBySnapshotTask) {
            let obj = new MediaProcessTaskCoverBySnapshotResult();
            obj.deserialize(params.CoverBySnapshotTask)
            this.CoverBySnapshotTask = obj;
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
 * DeleteProcedureTemplate请求参数结构体
 * @class
 */
class DeleteProcedureTemplateRequest extends AbstractModel {

    Name: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 任务流名字。
         */
        this.Name = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 视频处理任务中的水印参数类型
 * @class
 */
class WatermarkInput extends AbstractModel {

    Definition: number | null
    
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
        TextContent: string | null;
        SvgContent: string | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.TextContent = 'TextContent' in params ? params.TextContent : null;
        this.SvgContent = 'SvgContent' in params ? params.SvgContent : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

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
    
    DrmType: string | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 转自适应码流规格。
         */
        this.Definition = null;

        /**
         * 打包格式，只能为 HLS。
         */
        this.Package = null;

        /**
         * 加密类型。
         */
        this.DrmType = null;

        /**
         * 播放地址。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Package: string | null;
        DrmType: string | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Package = 'Package' in params ? params.Package : null;
        this.DrmType = 'DrmType' in params ? params.DrmType : null;
        this.Url = 'Url' in params ? params.Url : null;

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
 * DeleteClass返回参数结构体
 * @class
 */
class DeleteClassResponse extends AbstractModel {

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
 * 点播文件采样截图信息
 * @class
 */
class MediaSampleSnapshotInfo extends AbstractModel {

    SampleSnapshotSet: Array<MediaSampleSnapshotItem> | null
    
    constructor(){
        super();

        /**
         * 特定规格的采样截图信息集合，每个元素代表一套相同规格的采样截图。
         */
        this.SampleSnapshotSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SampleSnapshotSet: Array<MediaSampleSnapshotItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SampleSnapshotSet) {
            this.SampleSnapshotSet = new Array();
            for (let z in params.SampleSnapshotSet) {
                let obj = new MediaSampleSnapshotItem();
                obj.deserialize(params.SampleSnapshotSet[z]);
                this.SampleSnapshotSet.push(obj);
            }
        }

    }
}

/**
 * DescribeSubAppIds返回参数结构体
 * @class
 */
class DescribeSubAppIdsResponse extends AbstractModel {

    SubAppIdInfoSet: Array<SubAppIdInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 子应用信息集合。
         */
        this.SubAppIdInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubAppIdInfoSet: Array<SubAppIdInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SubAppIdInfoSet) {
            this.SubAppIdInfoSet = new Array();
            for (let z in params.SubAppIdInfoSet) {
                let obj = new SubAppIdInfo();
                obj.deserialize(params.SubAppIdInfoSet[z]);
                this.SubAppIdInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 点播文件信息
 * @class
 */
class MediaInfo extends AbstractModel {

    BasicInfo: MediaBasicInfo | null
    
    MetaData: MediaMetaData | null
    
    TranscodeInfo: MediaTranscodeInfo | null
    
    AnimatedGraphicsInfo: MediaAnimatedGraphicsInfo | null
    
    SampleSnapshotInfo: MediaSampleSnapshotInfo | null
    
    ImageSpriteInfo: MediaImageSpriteInfo | null
    
    SnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo | null
    
    KeyFrameDescInfo: MediaKeyFrameDescInfo | null
    
    AdaptiveDynamicStreamingInfo: MediaAdaptiveDynamicStreamingInfo | null
    
    MiniProgramReviewInfo: MediaMiniProgramReviewInfo | null
    
    FileId: string | null
    
    constructor(){
        super();

        /**
         * 基础信息。包括视频名称、分类、播放地址、封面图片等。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BasicInfo = null;

        /**
         * 元信息。包括大小、时长、视频流信息、音频流信息等。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetaData = null;

        /**
         * 转码结果信息。包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TranscodeInfo = null;

        /**
         * 转动图结果信息。对视频转动图（如 gif）后，动图相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AnimatedGraphicsInfo = null;

        /**
         * 采样截图信息。对视频采样截图后，相关截图信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SampleSnapshotInfo = null;

        /**
         * 雪碧图信息。对视频截取雪碧图之后，雪碧的相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageSpriteInfo = null;

        /**
         * 指定时间点截图信息。对视频依照指定时间点截图后，各个截图的信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SnapshotByTimeOffsetInfo = null;

        /**
         * 视频打点信息。对视频设置的各个打点信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.KeyFrameDescInfo = null;

        /**
         * 转自适应码流信息。包括规格、加密类型、打包格式等相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AdaptiveDynamicStreamingInfo = null;

        /**
         * 小程序审核信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MiniProgramReviewInfo = null;

        /**
         * 媒体文件唯一标识 ID。
         */
        this.FileId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BasicInfo: MediaBasicInfo | null;
        MetaData: MediaMetaData | null;
        TranscodeInfo: MediaTranscodeInfo | null;
        AnimatedGraphicsInfo: MediaAnimatedGraphicsInfo | null;
        SampleSnapshotInfo: MediaSampleSnapshotInfo | null;
        ImageSpriteInfo: MediaImageSpriteInfo | null;
        SnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo | null;
        KeyFrameDescInfo: MediaKeyFrameDescInfo | null;
        AdaptiveDynamicStreamingInfo: MediaAdaptiveDynamicStreamingInfo | null;
        MiniProgramReviewInfo: MediaMiniProgramReviewInfo | null;
        FileId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.TranscodeInfo) {
            let obj = new MediaTranscodeInfo();
            obj.deserialize(params.TranscodeInfo)
            this.TranscodeInfo = obj;
        }

        if (params.AnimatedGraphicsInfo) {
            let obj = new MediaAnimatedGraphicsInfo();
            obj.deserialize(params.AnimatedGraphicsInfo)
            this.AnimatedGraphicsInfo = obj;
        }

        if (params.SampleSnapshotInfo) {
            let obj = new MediaSampleSnapshotInfo();
            obj.deserialize(params.SampleSnapshotInfo)
            this.SampleSnapshotInfo = obj;
        }

        if (params.ImageSpriteInfo) {
            let obj = new MediaImageSpriteInfo();
            obj.deserialize(params.ImageSpriteInfo)
            this.ImageSpriteInfo = obj;
        }

        if (params.SnapshotByTimeOffsetInfo) {
            let obj = new MediaSnapshotByTimeOffsetInfo();
            obj.deserialize(params.SnapshotByTimeOffsetInfo)
            this.SnapshotByTimeOffsetInfo = obj;
        }

        if (params.KeyFrameDescInfo) {
            let obj = new MediaKeyFrameDescInfo();
            obj.deserialize(params.KeyFrameDescInfo)
            this.KeyFrameDescInfo = obj;
        }

        if (params.AdaptiveDynamicStreamingInfo) {
            let obj = new MediaAdaptiveDynamicStreamingInfo();
            obj.deserialize(params.AdaptiveDynamicStreamingInfo)
            this.AdaptiveDynamicStreamingInfo = obj;
        }

        if (params.MiniProgramReviewInfo) {
            let obj = new MediaMiniProgramReviewInfo();
            obj.deserialize(params.MiniProgramReviewInfo)
            this.MiniProgramReviewInfo = obj;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;

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
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * CreateContentReviewTemplate请求参数结构体
 * @class
 */
class CreateContentReviewTemplateRequest extends AbstractModel {

    ReviewWallSwitch: string | null
    
    Name: string | null
    
    Comment: string | null
    
    PornConfigure: PornConfigureInfo | null
    
    TerrorismConfigure: TerrorismConfigureInfo | null
    
    PoliticalConfigure: PoliticalConfigureInfo | null
    
    ProhibitedConfigure: ProhibitedConfigureInfo | null
    
    UserDefineConfigure: UserDefineConfigureInfo | null
    
    ScreenshotInterval: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 审核结果是否进入审核墙（对审核结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
         */
        this.ReviewWallSwitch = null;

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
         */
        this.ProhibitedConfigure = null;

        /**
         * 用户自定义内容审核控制参数。
         */
        this.UserDefineConfigure = null;

        /**
         * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         */
        this.ScreenshotInterval = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ReviewWallSwitch: string | null;
        Name: string | null;
        Comment: string | null;
        PornConfigure: PornConfigureInfo | null;
        TerrorismConfigure: TerrorismConfigureInfo | null;
        PoliticalConfigure: PoliticalConfigureInfo | null;
        ProhibitedConfigure: ProhibitedConfigureInfo | null;
        UserDefineConfigure: UserDefineConfigureInfo | null;
        ScreenshotInterval: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ReviewWallSwitch = 'ReviewWallSwitch' in params ? params.ReviewWallSwitch : null;
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
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 内容审核模板唯一标识过滤条件，数组长度限制：100。
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 对视频转自适应码流的输入参数类型
 * @class
 */
class AdaptiveDynamicStreamingTaskInput extends AbstractModel {

    Definition: number | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
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

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        WatermarkSet: Array<WatermarkInput> | null;
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
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends AbstractModel {

    TaskType: string | null
    
    Status: string | null
    
    CreateTime: string | null
    
    BeginProcessTime: string | null
    
    FinishTime: string | null
    
    ProcedureTask: ProcedureTask | null
    
    EditMediaTask: EditMediaTask | null
    
    WechatPublishTask: WechatPublishTask | null
    
    ComposeMediaTask: ComposeMediaTask | null
    
    PullUploadTask: PullUploadTask | null
    
    TranscodeTask: TranscodeTask2017 | null
    
    SnapshotByTimeOffsetTask: SnapshotByTimeOffsetTask2017 | null
    
    ConcatTask: ConcatTask2017 | null
    
    ClipTask: ClipTask2017 | null
    
    CreateImageSpriteTask: CreateImageSpriteTask2017 | null
    
    WechatMiniProgramPublishTask: WechatMiniProgramPublishTask | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务类型，取值：
<li>Procedure：视频处理任务；</li>
<li>EditMedia：视频编辑任务；</li>
<li>WechatPublish：微信发布任务；</li>
<li>WechatMiniProgramPublish：微信小程序视频发布任务；</li>
<li>ComposeMedia：制作媒体文件任务；</li>
<li>PullUpload：拉取上传媒体文件任务。</li>

兼容 2017 版的任务类型：
<li>Transcode：视频转码任务；</li>
<li>SnapshotByTimeOffset：视频截图任务；</li>
<li>Concat：视频拼接任务；</li>
<li>Clip：视频剪辑任务；</li>
<li>ImageSprites：截取雪碧图任务。</li>
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
         * 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.BeginProcessTime = null;

        /**
         * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.FinishTime = null;

        /**
         * 视频处理任务信息，仅当 TaskType 为 Procedure，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProcedureTask = null;

        /**
         * 视频编辑任务信息，仅当 TaskType 为 EditMedia，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EditMediaTask = null;

        /**
         * 微信发布任务信息，仅当 TaskType 为 WechatPublish，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WechatPublishTask = null;

        /**
         * 制作媒体文件任务信息，仅当 TaskType 为 ComposeMedia，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ComposeMediaTask = null;

        /**
         * 拉取上传媒体文件任务信息，仅当 TaskType 为 PullUpload，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PullUploadTask = null;

        /**
         * 视频转码任务信息，仅当 TaskType 为 Transcode，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TranscodeTask = null;

        /**
         * 视频指定时间点截图任务信息，仅当 TaskType 为 SnapshotByTimeOffset，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * 视频拼接任务信息，仅当 TaskType 为 Concat，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ConcatTask = null;

        /**
         * 视频剪辑任务信息，仅当 TaskType 为 Clip，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClipTask = null;

        /**
         * 截取雪碧图任务信息，仅当 TaskType 为 ImageSprite，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateImageSpriteTask = null;

        /**
         * 微信小程序发布任务信息，仅当 TaskType 为 WechatMiniProgramPublish，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WechatMiniProgramPublishTask = null;

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
        ProcedureTask: ProcedureTask | null;
        EditMediaTask: EditMediaTask | null;
        WechatPublishTask: WechatPublishTask | null;
        ComposeMediaTask: ComposeMediaTask | null;
        PullUploadTask: PullUploadTask | null;
        TranscodeTask: TranscodeTask2017 | null;
        SnapshotByTimeOffsetTask: SnapshotByTimeOffsetTask2017 | null;
        ConcatTask: ConcatTask2017 | null;
        ClipTask: ClipTask2017 | null;
        CreateImageSpriteTask: CreateImageSpriteTask2017 | null;
        WechatMiniProgramPublishTask: WechatMiniProgramPublishTask | null;
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

        if (params.ProcedureTask) {
            let obj = new ProcedureTask();
            obj.deserialize(params.ProcedureTask)
            this.ProcedureTask = obj;
        }

        if (params.EditMediaTask) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTask)
            this.EditMediaTask = obj;
        }

        if (params.WechatPublishTask) {
            let obj = new WechatPublishTask();
            obj.deserialize(params.WechatPublishTask)
            this.WechatPublishTask = obj;
        }

        if (params.ComposeMediaTask) {
            let obj = new ComposeMediaTask();
            obj.deserialize(params.ComposeMediaTask)
            this.ComposeMediaTask = obj;
        }

        if (params.PullUploadTask) {
            let obj = new PullUploadTask();
            obj.deserialize(params.PullUploadTask)
            this.PullUploadTask = obj;
        }

        if (params.TranscodeTask) {
            let obj = new TranscodeTask2017();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new SnapshotByTimeOffsetTask2017();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.ConcatTask) {
            let obj = new ConcatTask2017();
            obj.deserialize(params.ConcatTask)
            this.ConcatTask = obj;
        }

        if (params.ClipTask) {
            let obj = new ClipTask2017();
            obj.deserialize(params.ClipTask)
            this.ClipTask = obj;
        }

        if (params.CreateImageSpriteTask) {
            let obj = new CreateImageSpriteTask2017();
            obj.deserialize(params.CreateImageSpriteTask)
            this.CreateImageSpriteTask = obj;
        }

        if (params.WechatMiniProgramPublishTask) {
            let obj = new WechatMiniProgramPublishTask();
            obj.deserialize(params.WechatMiniProgramPublishTask)
            this.WechatMiniProgramPublishTask = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频打点信息
 * @class
 */
class MediaKeyFrameDescInfo extends AbstractModel {

    KeyFrameDescSet: Array<MediaKeyFrameDescItem> | null
    
    constructor(){
        super();

        /**
         * 视频打点信息数组。
         */
        this.KeyFrameDescSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        KeyFrameDescSet: Array<MediaKeyFrameDescItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.KeyFrameDescSet) {
            this.KeyFrameDescSet = new Array();
            for (let z in params.KeyFrameDescSet) {
                let obj = new MediaKeyFrameDescItem();
                obj.deserialize(params.KeyFrameDescSet[z]);
                this.KeyFrameDescSet.push(obj);
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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 雪碧图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateClass请求参数结构体
 * @class
 */
class CreateClassRequest extends AbstractModel {

    ParentId: number | null
    
    ClassName: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 父类 ID，一级分类填写 -1。
         */
        this.ParentId = null;

        /**
         * 分类名称，长度限制：1-64 个字符。
         */
        this.ClassName = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ParentId: number | null;
        ClassName: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * CreateProcedureTemplate返回参数结构体
 * @class
 */
class CreateProcedureTemplateResponse extends AbstractModel {

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
 * DescribeMediaProcessUsageData返回参数结构体
 * @class
 */
class DescribeMediaProcessUsageDataResponse extends AbstractModel {

    MediaProcessDataSet: Array<TaskStatData> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 视频处理统计数据概览，展示所查询任务的概览以及详细数据。
         */
        this.MediaProcessDataSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MediaProcessDataSet: Array<TaskStatData> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.MediaProcessDataSet) {
            this.MediaProcessDataSet = new Array();
            for (let z in params.MediaProcessDataSet) {
                let obj = new TaskStatData();
                obj.deserialize(params.MediaProcessDataSet[z]);
                this.MediaProcessDataSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSuperPlayerConfigs请求参数结构体
 * @class
 */
class DescribeSuperPlayerConfigsRequest extends AbstractModel {

    Names: Array<string> | null
    
    Offset: number | null
    
    Limit: number | null
    
    Type: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 播放器配置名字过滤条件，数组长度限制：100。
         */
        this.Names = null;

        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 播放器配置类型过滤条件，可选值：
<li>Preset：系统预置配置；</li>
<li>Custom：用户自定义配置。</li>
         */
        this.Type = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Names: Array<string> | null;
        Offset: number | null;
        Limit: number | null;
        Type: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Names = 'Names' in params ? params.Names : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 视频拆条输入。
 * @class
 */
class AiRecognitionTaskSegmentResultInput extends AbstractModel {

    Definition: number | null
    
    constructor(){
        super();

        /**
         * 视频拆条模板 ID。
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
         * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空，说明已无更多数据。
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
 * DescribeSubAppIds请求参数结构体
 * @class
 */
class DescribeSubAppIdsRequest extends AbstractModel {

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
         * 视频鉴政结果标签。内容审核模板[画面鉴政任务控制参数](https://cloud.tencent.com/document/api/266/31773#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
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
    
    SubAppId: number | null
    
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * 视频处理任务信息
 * @class
 */
class ProcedureTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    FileName: string | null
    
    FileUrl: string | null
    
    MetaData: MediaMetaData | null
    
    MediaProcessResultSet: Array<MediaProcessTaskResult> | null
    
    AiContentReviewResultSet: Array<AiContentReviewResult> | null
    
    AiAnalysisResultSet: Array<AiAnalysisResult> | null
    
    AiRecognitionResultSet: Array<AiRecognitionResult> | null
    
    TasksPriority: number | null
    
    TasksNotifyMode: string | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
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
         * 媒体文件 ID
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 FileId；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Id。</li>
         */
        this.FileId = null;

        /**
         * 媒体文件名称
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.Name；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Name。</li>
         */
        this.FileName = null;

        /**
         * 媒体文件地址
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.MediaUrl；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Url。</li>
         */
        this.FileUrl = null;

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

        /**
         * 任务流的优先级，取值范围为 [-10, 10]。
         */
        this.TasksPriority = null;

        /**
         * 任务流状态变更通知模式。
<li>Finish：只有当任务流全部执行完毕时，才发起一次事件通知；</li>
<li>Change：只要任务流中每个子任务的状态发生变化，都进行事件通知；</li>
<li>None：不接受该任务流回调。</li>
         */
        this.TasksNotifyMode = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        FileName: string | null;
        FileUrl: string | null;
        MetaData: MediaMetaData | null;
        MediaProcessResultSet: Array<MediaProcessTaskResult> | null;
        AiContentReviewResultSet: Array<AiContentReviewResult> | null;
        AiAnalysisResultSet: Array<AiAnalysisResult> | null;
        AiRecognitionResultSet: Array<AiRecognitionResult> | null;
        TasksPriority: number | null;
        TasksNotifyMode: string | null;
        SessionContext: string | null;
        SessionId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

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
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.TasksNotifyMode = 'TasksNotifyMode' in params ? params.TasksNotifyMode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * ModifySuperPlayerConfig请求参数结构体
 * @class
 */
class ModifySuperPlayerConfigRequest extends AbstractModel {

    Name: string | null
    
    DrmSwitch: string | null
    
    AdaptiveDynamicStreamingDefinition: number | null
    
    DrmStreamingsInfo: DrmStreamingsInfoForUpdate | null
    
    ImageSpriteDefinition: number | null
    
    ResolutionNames: Array<ResolutionNameInfo> | null
    
    Domain: string | null
    
    Scheme: string | null
    
    Comment: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 播放器配置名称。
         */
        this.Name = null;

        /**
         * 播放 DRM 保护的自适应码流开关：
<li>ON：开启，表示仅播放 DRM  保护的自适应码流输出；</li>
<li>OFF：关闭，表示播放未加密的自适应码流输出。</li>
         */
        this.DrmSwitch = null;

        /**
         * 允许输出的未加密的自适应码流模板 ID。
         */
        this.AdaptiveDynamicStreamingDefinition = null;

        /**
         * 允许输出的 DRM 自适应码流模板内容。
         */
        this.DrmStreamingsInfo = null;

        /**
         * 允许输出的雪碧图模板 ID。
         */
        this.ImageSpriteDefinition = null;

        /**
         * 播放器对不于不同分辨率的子流展示名字。
         */
        this.ResolutionNames = null;

        /**
         * 播放时使用的域名。填 Default 表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。
         */
        this.Domain = null;

        /**
         * 播放时使用的 Scheme。取值范围：
<li>Default：使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme；</li>
<li>HTTP；</li>
<li>HTTPS。</li>
         */
        this.Scheme = null;

        /**
         * 模板描述信息，长度限制：256 个字符。
         */
        this.Comment = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        DrmSwitch: string | null;
        AdaptiveDynamicStreamingDefinition: number | null;
        DrmStreamingsInfo: DrmStreamingsInfoForUpdate | null;
        ImageSpriteDefinition: number | null;
        ResolutionNames: Array<ResolutionNameInfo> | null;
        Domain: string | null;
        Scheme: string | null;
        Comment: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DrmSwitch = 'DrmSwitch' in params ? params.DrmSwitch : null;
        this.AdaptiveDynamicStreamingDefinition = 'AdaptiveDynamicStreamingDefinition' in params ? params.AdaptiveDynamicStreamingDefinition : null;

        if (params.DrmStreamingsInfo) {
            let obj = new DrmStreamingsInfoForUpdate();
            obj.deserialize(params.DrmStreamingsInfo)
            this.DrmStreamingsInfo = obj;
        }
        this.ImageSpriteDefinition = 'ImageSpriteDefinition' in params ? params.ImageSpriteDefinition : null;

        if (params.ResolutionNames) {
            this.ResolutionNames = new Array();
            for (let z in params.ResolutionNames) {
                let obj = new ResolutionNameInfo();
                obj.deserialize(params.ResolutionNames[z]);
                this.ResolutionNames.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SessionId: string | null
    
    SessionContext: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务类型，取值：
<li>Procedure：视频处理任务；</li>
<li>EditMedia：视频编辑任务</li>
<li>WechatDistribute：微信发布任务。</li>
兼容 2017 版的任务类型：
<li>Transcode：视频转码任务；</li>
<li>SnapshotByTimeOffset：视频截图任务；</li>
<li>Concat：视频拼接任务；</li>
<li>Clip：视频剪辑任务；</li>
<li>ImageSprites：截取雪碧图任务。</li>
         */
        this.TaskType = null;

        /**
         * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。若任务尚未开始，该字段为空。
         */
        this.BeginProcessTime = null;

        /**
         * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。若任务尚未完成，该字段为空。
         */
        this.FinishTime = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求。
         */
        this.SessionId = null;

        /**
         * 来源上下文，用于透传用户请求信息。
         */
        this.SessionContext = null;

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
        SessionId: string | null;
        SessionContext: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

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
 * 指定时间点截图模板详情
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
         * 指定时间点截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
         */
        this.Type = null;

        /**
         * 指定时间点截图模板名称。
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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
    
    FileId: string | null
    
    Limit: number | null
    
    ScrollToken: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 过滤条件：任务状态，可选值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。
         */
        this.Status = null;

        /**
         * 过滤条件：文件 ID。
         */
        this.FileId = null;

        /**
         * 返回记录条数，默认值：10，最大值：100。
         */
        this.Limit = null;

        /**
         * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
         */
        this.ScrollToken = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        FileId: string | null;
        Limit: number | null;
        ScrollToken: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DescribeReviewDetails返回参数结构体
 * @class
 */
class DescribeReviewDetailsResponse extends AbstractModel {

    TotalCount: number | null
    
    TotalDuration: number | null
    
    Data: Array<StatDataItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 发起内容审核次数。
         */
        this.TotalCount = null;

        /**
         * 内容审核总时长。
         */
        this.TotalDuration = null;

        /**
         * 内容审核时长统计数据，每天一个数据。
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
    deserialize(params: {
        TotalCount: number | null;
        TotalDuration: number | null;
        Data: Array<StatDataItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalDuration = 'TotalDuration' in params ? params.TotalDuration : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new StatDataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 截图输出信息（2017 版）
 * @class
 */
class SnapshotByTimeOffset2017 extends AbstractModel {

    ErrCode: number | null
    
    TimeOffset: number | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
         */
        this.ErrCode = null;

        /**
         * 截图的具体时间点，单位：毫秒。
         */
        this.TimeOffset = null;

        /**
         * 截图输出文件地址。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ErrCode: number | null;
        TimeOffset: number | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Url = 'Url' in params ? params.Url : null;

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
    
    HighlightConfigure: HighlightsConfigureInfo | null
    
    SubAppId: number | null
    
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

        /**
         * 智能精彩集锦任务控制参数。
         */
        this.HighlightConfigure = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        HighlightConfigure: HighlightsConfigureInfo | null;
        SubAppId: number | null;
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

        if (params.HighlightConfigure) {
            let obj = new HighlightsConfigureInfo();
            obj.deserialize(params.HighlightConfigure)
            this.HighlightConfigure = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 点播文件雪碧图信息
 * @class
 */
class MediaImageSpriteInfo extends AbstractModel {

    ImageSpriteSet: Array<MediaImageSpriteItem> | null
    
    constructor(){
        super();

        /**
         * 特定规格的雪碧图信息集合，每个元素代表一套相同规格的雪碧图。
         */
        this.ImageSpriteSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageSpriteSet: Array<MediaImageSpriteItem> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ImageSpriteSet) {
            this.ImageSpriteSet = new Array();
            for (let z in params.ImageSpriteSet) {
                let obj = new MediaImageSpriteItem();
                obj.deserialize(params.ImageSpriteSet[z]);
                this.ImageSpriteSet.push(obj);
            }
        }

    }
}

/**
 * 子应用信息。
 * @class
 */
class SubAppIdInfo extends AbstractModel {

    SubAppId: number | null
    
    Name: string | null
    
    Description: string | null
    
    CreateTime: string | null
    
    Status: string | null
    
    constructor(){
        super();

        /**
         * 子应用 ID。
         */
        this.SubAppId = null;

        /**
         * 子应用名称。
         */
        this.Name = null;

        /**
         * 子应用简介。
         */
        this.Description = null;

        /**
         * 子应用创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 子应用状态，有效值：
<li>On：启用；</li>
<li>Off：停用。</li>
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubAppId: number | null;
        Name: string | null;
        Description: string | null;
        CreateTime: string | null;
        Status: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeAllClass返回参数结构体
 * @class
 */
class DescribeAllClassResponse extends AbstractModel {

    ClassInfoSet: Array<MediaClassInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 分类信息集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClassInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClassInfoSet: Array<MediaClassInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new MediaClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    
    SubAppId: number | null
    
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
         * 雪碧图中小图的宽度，取值范围： [128, 4096]，单位：px。
         */
        this.Width = null;

        /**
         * 雪碧图中小图的高度，取值范围： [128, 4096]，单位：px。
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 水印模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 编辑视频流信息
 * @class
 */
class EditMediaStreamInfo extends AbstractModel {

    StreamId: string | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    constructor(){
        super();

        /**
         * 录制的流 ID
         */
        this.StreamId = null;

        /**
         * 流剪辑的起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.StartTime = null;

        /**
         * 流剪辑的结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StreamId: string | null;
        StartTime: string | null;
        EndTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * LiveRealTimeClip返回参数结构体
 * @class
 */
class LiveRealTimeClipResponse extends AbstractModel {

    Url: string | null
    
    FileId: string | null
    
    VodTaskId: string | null
    
    MetaData: MediaMetaData | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 剪辑后的视频播放 URL。
         */
        this.Url = null;

        /**
         * 剪辑固化后的视频的媒体文件的唯一标识。
         */
        this.FileId = null;

        /**
         * 剪辑固化后的视频任务流 ID。
         */
        this.VodTaskId = null;

        /**
         * 剪辑后的视频元信息。
注意：此字段可能返回 null，表示取不到有效值。
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
        Url: string | null;
        FileId: string | null;
        VodTaskId: string | null;
        MetaData: MediaMetaData | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.VodTaskId = 'VodTaskId' in params ? params.VodTaskId : null;

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
    
    HighlightConfigure: HighlightsConfigureInfoForUpdate | null
    
    SubAppId: number | null
    
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

        /**
         * 智能精彩集锦任务控制参数。
         */
        this.HighlightConfigure = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        HighlightConfigure: HighlightsConfigureInfoForUpdate | null;
        SubAppId: number | null;
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

        if (params.HighlightConfigure) {
            let obj = new HighlightsConfigureInfoForUpdate();
            obj.deserialize(params.HighlightConfigure)
            this.HighlightConfigure = obj;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CommitUpload返回参数结构体
 * @class
 */
class CommitUploadResponse extends AbstractModel {

    FileId: string | null
    
    MediaUrl: string | null
    
    CoverUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 媒体文件的唯一标识。
         */
        this.FileId = null;

        /**
         * 媒体播放地址。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MediaUrl = null;

        /**
         * 媒体封面地址。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CoverUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        MediaUrl: string | null;
        CoverUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.MediaUrl = 'MediaUrl' in params ? params.MediaUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
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
 * DRM 自适应码流播放信息修改对象
 * @class
 */
class DrmStreamingsInfoForUpdate extends AbstractModel {

    SimpleAesDefinition: number | null
    
    constructor(){
        super();

        /**
         * 保护类型为 SimpleAES 的转自适应码流模板 ID。
         */
        this.SimpleAesDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SimpleAesDefinition: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SimpleAesDefinition = 'SimpleAesDefinition' in params ? params.SimpleAesDefinition : null;

    }
}

/**
 * DeleteClass请求参数结构体
 * @class
 */
class DeleteClassRequest extends AbstractModel {

    ClassId: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 分类 ID
         */
        this.ClassId = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClassId: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * WeChatMiniProgramPublish返回参数结构体
 * @class
 */
class WeChatMiniProgramPublishResponse extends AbstractModel {

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
 * 图像旋转、翻转等操作
 * @class
 */
class ImageTransform extends AbstractModel {

    Type: string | null
    
    RotateAngle: number | null
    
    Flip: string | null
    
    constructor(){
        super();

        /**
         * 类型，取值有：
<li> Rotate：图像旋转。</li>
<li> Flip：图像翻转。</li>
         */
        this.Type = null;

        /**
         * 图像以中心点为原点进行旋转的角度，取值范围0~360。当 Type = Rotate 时有效。
         */
        this.RotateAngle = null;

        /**
         * 图像翻转动作，取值有：
<li>Horizental：水平翻转，即左右镜像。</li>
<li>Vertical：垂直翻转，即上下镜像。</li>
当 Type = Flip 时有效。
         */
        this.Flip = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        RotateAngle: number | null;
        Flip: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.RotateAngle = 'RotateAngle' in params ? params.RotateAngle : null;
        this.Flip = 'Flip' in params ? params.Flip : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 智能按帧标签任务控制参数
 * @class
 */
class FrameTagConfigureInfo extends AbstractModel {

    Switch: string | null
    
    ScreenshotInterval: number | null
    
    constructor(){
        super();

        /**
         * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
         */
        this.Switch = null;

        /**
         * 截帧间隔，单位为秒，当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
         */
        this.ScreenshotInterval = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        ScreenshotInterval: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;

    }
}

/**
 * ExecuteFunction请求参数结构体
 * @class
 */
class ExecuteFunctionRequest extends AbstractModel {

    FunctionName: string | null
    
    FunctionArg: string | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    ExtInfo: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 调用后端接口名称。
         */
        this.FunctionName = null;

        /**
         * 接口参数，具体参数格式调用时与后端协调。
         */
        this.FunctionArg = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

        /**
         * 保留字段，特殊用途时使用。
         */
        this.ExtInfo = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FunctionName: string | null;
        FunctionArg: string | null;
        SessionContext: string | null;
        SessionId: string | null;
        ExtInfo: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionArg = 'FunctionArg' in params ? params.FunctionArg : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * ConfirmEvents返回参数结构体
 * @class
 */
class ConfirmEventsResponse extends AbstractModel {

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
 * 视频轨的视频片段信息。
 * @class
 */
class VideoTrackItem extends AbstractModel {

    SourceMedia: string | null
    
    SourceMediaStartTime: number | null
    
    Duration: number | null
    
    CoordinateOrigin: string | null
    
    XPos: string | null
    
    YPos: string | null
    
    Width: string | null
    
    Height: string | null
    
    ImageOperations: Array<ImageTransform> | null
    
    AudioOperations: Array<AudioTransform> | null
    
    constructor(){
        super();

        /**
         * 视频片段的媒体素材来源，可以是点播的文件 ID，或者是其它文件的 URL。
         */
        this.SourceMedia = null;

        /**
         * 视频片段取自素材文件的起始时间，单位为秒。默认为0。
         */
        this.SourceMediaStartTime = null;

        /**
         * 视频片段时长，单位为秒。默认取视频素材本身长度，表示截取全部素材。如果源文件是图片，Duration需要大于0。
         */
        this.Duration = null;

        /**
         * 视频原点位置，取值有：
<li>Center：坐标原点为中心位置，如画布中心。</li>
默认值 ：Center。
         */
        this.CoordinateOrigin = null;

        /**
         * 视频片段原点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布口宽度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 XPos 单位为像素，如 100px 表示 XPos 为100像素。</li>
默认值：0px。
         */
        this.XPos = null;

        /**
         * 视频片段原点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 YPos 单位为像素，如 100px 表示 YPos 为100像素。</li>
默认值：0px。
         */
        this.YPos = null;

        /**
         * 视频片段的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 Width 单位为像素，如 100px 表示 Width 为100像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         */
        this.Width = null;

        /**
         * 视频片段的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%；
</li><li>当字符串以 px 结尾，表示视频片段 Height 单位为像素，如 100px 表示 Height 为100像素。</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
         */
        this.Height = null;

        /**
         * 对图像进行的操作，如图像旋转等。
         */
        this.ImageOperations = null;

        /**
         * 对音频进行操作，如静音等。
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SourceMedia: string | null;
        SourceMediaStartTime: number | null;
        Duration: number | null;
        CoordinateOrigin: string | null;
        XPos: string | null;
        YPos: string | null;
        Width: string | null;
        Height: string | null;
        ImageOperations: Array<ImageTransform> | null;
        AudioOperations: Array<AudioTransform> | null;
    }): void {
        if (!params) {
            return;
        }
        this.SourceMedia = 'SourceMedia' in params ? params.SourceMedia : null;
        this.SourceMediaStartTime = 'SourceMediaStartTime' in params ? params.SourceMediaStartTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ImageTransform();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new AudioTransform();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
            }
        }

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

    Url: string | null
    
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
         * 转码后的视频文件地址。
         */
        this.Url = null;

        /**
         * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33476)。
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
        Url: string | null;
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
        this.Url = 'Url' in params ? params.Url : null;
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
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImgReviewInfo = null;

        /**
         * 语音鉴黄控制参数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AsrReviewInfo = null;

        /**
         * 文本鉴黄控制参数。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 物体识别结果片段。
 * @class
 */
class AiRecognitionTaskObjectSeqmentItem extends AbstractModel {

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
 * PullEvents请求参数结构体
 * @class
 */
class PullEventsRequest extends AbstractModel {

    ExtInfo: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 保留字段，特殊用途时使用。
         */
        this.ExtInfo = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ExtInfo: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

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
 * CreateSubAppId请求参数结构体
 * @class
 */
class CreateSubAppIdRequest extends AbstractModel {

    Name: string | null
    
    Description: string | null
    
    constructor(){
        super();

        /**
         * 子应用名称，长度限制：40个字符。
         */
        this.Name = null;

        /**
         * 子应用简介，长度限制： 300个字符。
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Description: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeProcedureTemplates返回参数结构体
 * @class
 */
class DescribeProcedureTemplatesResponse extends AbstractModel {

    TotalCount: number | null
    
    ProcedureTemplateSet: Array<ProcedureTemplate> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合过滤条件的记录总数。
         */
        this.TotalCount = null;

        /**
         * 任务流模板详情列表。
         */
        this.ProcedureTemplateSet = null;

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
        ProcedureTemplateSet: Array<ProcedureTemplate> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ProcedureTemplateSet) {
            this.ProcedureTemplateSet = new Array();
            for (let z in params.ProcedureTemplateSet) {
                let obj = new ProcedureTemplate();
                obj.deserialize(params.ProcedureTemplateSet[z]);
                this.ProcedureTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchMedia请求参数结构体
 * @class
 */
class SearchMediaRequest extends AbstractModel {

    Text: string | null
    
    Tags: Array<string> | null
    
    ClassIds: Array<number> | null
    
    StartTime: string | null
    
    EndTime: string | null
    
    SourceType: string | null
    
    StreamId: string | null
    
    Vid: string | null
    
    Sort: SortBy | null
    
    Offset: number | null
    
    Limit: number | null
    
    Categories: Array<string> | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 搜索文本，模糊匹配媒体文件名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：64个字符。
         */
        this.Text = null;

        /**
         * 标签集合，匹配集合中任意元素。
<li>单个标签长度限制：8个字符。</li>
<li>数组长度限制：10。</li>
         */
        this.Tags = null;

        /**
         * 分类 ID 集合，匹配集合指定 ID 的分类及其所有子类。数组长度限制：10。
         */
        this.ClassIds = null;

        /**
         * 创建时间的开始时间。
<li>大于等于开始时间。</li>
<li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。</li>
         */
        this.StartTime = null;

        /**
         * 创建时间的结束时间。
<li>小于结束时间。</li>
<li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。</li>
         */
        this.EndTime = null;

        /**
         * 媒体文件来源，来源取值参见 [SourceType](https://cloud.tencent.com/document/product/266/31773#MediaSourceData)。
         */
        this.SourceType = null;

        /**
         * 推流 [直播码](https://cloud.tencent.com/document/product/267/5959)。
         */
        this.StreamId = null;

        /**
         * 直播录制文件的唯一标识。
         */
        this.Vid = null;

        /**
         * 排序方式。
<li>Sort.Field 可选值：CreateTime</li>
<li>指定 Text 搜索时，将根据匹配度排序，该字段无效</li>
         */
        this.Sort = null;

        /**
         * <div id="p_offset">分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
<li>取值范围：Offset + Limit 不超过5000。（参见：<a href="#maxResultsDesc">接口返回结果数限制</a>）</li></div>
         */
        this.Offset = null;

        /**
         * <div id="p_limit">分页返回的记录条数，默认值：10。将返回第 Offset 到第 Offset+Limit-1 条。
<li>取值范围：Offset + Limit 不超过5000。（参见：<a href="#maxResultsDesc">接口返回结果数限制</a>）</li></div>
         */
        this.Limit = null;

        /**
         * 文件类型：
<li>Video: 视频文件</li>
<li>Audio: 音频文件</li>
<li>Image: 图片文件</li>
         */
        this.Categories = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Text: string | null;
        Tags: Array<string> | null;
        ClassIds: Array<number> | null;
        StartTime: string | null;
        EndTime: string | null;
        SourceType: string | null;
        StreamId: string | null;
        Vid: string | null;
        Sort: SortBy | null;
        Offset: number | null;
        Limit: number | null;
        Categories: Array<string> | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.ClassIds = 'ClassIds' in params ? params.ClassIds : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.Vid = 'Vid' in params ? params.Vid : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Categories = 'Categories' in params ? params.Categories : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
    
    SubAppId: number | null
    
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

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
         * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * 音频增益调节参数
 * @class
 */
class AudioVolumeParam extends AbstractModel {

    Mute: number | null
    
    Gain: number | null
    
    constructor(){
        super();

        /**
         * 是否静音，取值范围0或1。
<li>0表示不静音。</li>
<li>1表示静音。</li>
默认是0。
         */
        this.Mute = null;

        /**
         * 音频增益，取值范围0~10。
<li>大于1表示增加音量。</li>
<li>小于1表示降低音量。</li>
<li>0和1：表示不改变。</li>
默认是0。
         */
        this.Gain = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Mute: number | null;
        Gain: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Mute = 'Mute' in params ? params.Mute : null;
        this.Gain = 'Gain' in params ? params.Gain : null;

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
 * ModifyClass返回参数结构体
 * @class
 */
class ModifyClassResponse extends AbstractModel {

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
 * 编辑点播视频文件信息
 * @class
 */
class EditMediaFileInfo extends AbstractModel {

    FileId: string | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 视频的 ID。
         */
        this.FileId = null;

        /**
         * 视频剪辑的起始偏移时间偏移，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 视频剪辑的起始结束时间偏移，单位：秒。
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileId: string | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * ProcessMediaByProcedure返回参数结构体
 * @class
 */
class ProcessMediaByProcedureResponse extends AbstractModel {

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
 * PullUpload返回参数结构体
 * @class
 */
class PullUploadResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 拉取上传视频的任务 ID，可以通过该 ID 查询拉取上传任务的状态。
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
    
    ProcedureTaskId: string | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    constructor(){
        super();

        /**
         * 任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
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
         * 视频编辑任务的输入。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Input = null;

        /**
         * 视频编辑任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Output = null;

        /**
         * 若发起视频编辑任务时指定了视频处理流程，则该字段为流程任务 ID。
         */
        this.ProcedureTaskId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

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
        ProcedureTaskId: string | null;
        SessionContext: string | null;
        SessionId: string | null;
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
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

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
 * CommitUpload请求参数结构体
 * @class
 */
class CommitUploadRequest extends AbstractModel {

    VodSessionKey: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 点播会话，取申请上传接口的返回值 VodSessionKey。
         */
        this.VodSessionKey = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VodSessionKey: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.VodSessionKey = 'VodSessionKey' in params ? params.VodSessionKey : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 水印周期配置。
 * @class
 */
class WatermarkCycleConfigForUpdate extends AbstractModel {

    StartTime: number | null
    
    DisplayDuration: number | null
    
    CycleDuration: number | null
    
    constructor(){
        super();

        /**
         * 水印在视频里第一次出现的播放时间点，单位：秒。
         */
        this.StartTime = null;

        /**
         * 在一个水印周期内，水印显示的持续时间，单位：秒。
         */
        this.DisplayDuration = null;

        /**
         * 一个水印周期的持续时间，单位：秒。
填 0 表示水印只持续一个水印周期（即在整个视频里只显示 DisplayDuration 秒）。
         */
        this.CycleDuration = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: number | null;
        DisplayDuration: number | null;
        CycleDuration: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.DisplayDuration = 'DisplayDuration' in params ? params.DisplayDuration : null;
        this.CycleDuration = 'CycleDuration' in params ? params.CycleDuration : null;

    }
}

/**
 * 视频指定时间点截图任务信息，该结构仅用于 2017 版[指定时间点截图](https://cloud.tencent.com/document/product/266/8102)接口发起的任务。
 * @class
 */
class SnapshotByTimeOffsetTask2017 extends AbstractModel {

    TaskId: string | null
    
    FileId: string | null
    
    Definition: number | null
    
    SnapshotInfoSet: Array<SnapshotByTimeOffset2017> | null
    
    constructor(){
        super();

        /**
         * 截图任务 ID。
         */
        this.TaskId = null;

        /**
         * 截图文件 ID。
         */
        this.FileId = null;

        /**
         * 截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
         */
        this.Definition = null;

        /**
         * 截图结果信息。
         */
        this.SnapshotInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        FileId: string | null;
        Definition: number | null;
        SnapshotInfoSet: Array<SnapshotByTimeOffset2017> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.SnapshotInfoSet) {
            this.SnapshotInfoSet = new Array();
            for (let z in params.SnapshotInfoSet) {
                let obj = new SnapshotByTimeOffset2017();
                obj.deserialize(params.SnapshotInfoSet[z]);
                this.SnapshotInfoSet.push(obj);
            }
        }

    }
}

/**
 * 分类信息描述
 * @class
 */
class MediaClassInfo extends AbstractModel {

    ClassId: number | null
    
    ParentId: number | null
    
    ClassName: string | null
    
    Level: number | null
    
    SubClassIdSet: Array<number> | null
    
    constructor(){
        super();

        /**
         * 分类 ID
         */
        this.ClassId = null;

        /**
         * 父类 ID，一级分类的父类 ID 为 -1。
         */
        this.ParentId = null;

        /**
         * 分类名称
         */
        this.ClassName = null;

        /**
         * 分类级别，一级分类为 0，最大值为 3，即最多允许 4 级分类层次。
         */
        this.Level = null;

        /**
         * 当前分类的第一级子类 ID 集合
         */
        this.SubClassIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClassId: number | null;
        ParentId: number | null;
        ClassName: string | null;
        Level: number | null;
        SubClassIdSet: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.ClassName = 'ClassName' in params ? params.ClassName : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.SubClassIdSet = 'SubClassIdSet' in params ? params.SubClassIdSet : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 转动图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate请求参数结构体
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateRequest extends AbstractModel {

    Definition: number | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 指定时间点截图模板唯一标识。
         */
        this.Definition = null;

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * 对视频做采样截图任务输入参数类型
 * @class
 */
class SampleSnapshotTaskInput extends AbstractModel {

    Definition: number | null
    
    WatermarkSet: Array<WatermarkInput> | null
    
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

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        WatermarkSet: Array<WatermarkInput> | null;
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
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImgReviewInfo = null;

        /**
         * 文字鉴恐任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.CreateTime = null;

        /**
         * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
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
 * 雪碧图信息
 * @class
 */
class MediaImageSpriteItem extends AbstractModel {

    Definition: number | null
    
    Height: number | null
    
    Width: number | null
    
    TotalCount: number | null
    
    ImageUrlSet: Array<string> | null
    
    WebVttUrl: string | null
    
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
         * 每一张雪碧图大图的地址。
         */
        this.ImageUrlSet = null;

        /**
         * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
         */
        this.WebVttUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definition: number | null;
        Height: number | null;
        Width: number | null;
        TotalCount: number | null;
        ImageUrlSet: Array<string> | null;
        WebVttUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;

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
    
    SubAppId: number | null
    
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

        /**
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

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
        SubAppId: number | null;
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
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
 * DescribeStorageDetails请求参数结构体
 * @class
 */
class DescribeStorageDetailsRequest extends AbstractModel {

    StartTime: string | null
    
    EndTime: string | null
    
    Interval: string | null
    
    StorageType: string | null
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 起始时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
         */
        this.StartTime = null;

        /**
         * 结束时间，需大于开始日期，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
         */
        this.EndTime = null;

        /**
         * 查询时间间隔，有效值：
<li>Minute：每分钟一个统计数据。</li>
<li>Hour：每小时一个统计数据。</li>
<li>Day：每天一个统计数据。</li>
默认按时间跨度决定，小于1小时按分钟，小于等于7天按小时，大于7天按天展示。
         */
        this.Interval = null;

        /**
         * 查询的存储类型，有效值：
<li>TotalStorage：存储总量。</li>
<li>StandardStorage：标准存储。</li>
<li>InfrequentStorage：低频存储。</li>
默认值为 TotalStorage。
         */
        this.StorageType = null;

        /**
         * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
当该字段为1时，表示以管理员身份查询所有子应用（含主应用）的用量合计。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        StartTime: string | null;
        EndTime: string | null;
        Interval: string | null;
        StorageType: string | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * 轨道信息
 * @class
 */
class MediaTrack extends AbstractModel {

    Type: string | null
    
    TrackItems: Array<MediaTrackItem> | null
    
    constructor(){
        super();

        /**
         * 轨道类型，取值有：
<ul>
<li>Video ：视频轨道。视频轨道由以下 Item 组成：<ul><li>VideoTrackItem</li><li>MediaTransitionItem</li> <li>EmptyTrackItem</li></ul> </li>
<li>Audio ：音频轨道。音频轨道由以下 Item 组成：<ul><li>AudioTrackItem</li><li>MediaTransitionItem</li><li>EmptyTrackItem</li></ul></li>
<li>Sticker ：贴图轨道。贴图轨道以下 Item 组成：<ul><li> StickerTrackItem</li><li>EmptyTrackItem</li></ul></li>	
</ul>
         */
        this.Type = null;

        /**
         * 轨道上的媒体片段列表。
         */
        this.TrackItems = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        TrackItems: Array<MediaTrackItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TrackItems) {
            this.TrackItems = new Array();
            for (let z in params.TrackItems) {
                let obj = new MediaTrackItem();
                obj.deserialize(params.TrackItems[z]);
                this.TrackItems.push(obj);
            }
        }

    }
}

/**
 * 视频处理输出文件信息参数。
 * @class
 */
class MediaOutputInfo extends AbstractModel {

    Region: string | null
    
    Bucket: string | null
    
    Dir: string | null
    
    constructor(){
        super();

        /**
         * 输出文件 Bucket 所属地域，如 ap-guangzhou  。
         */
        this.Region = null;

        /**
         * 输出文件 Bucket 。
         */
        this.Bucket = null;

        /**
         * 输出文件目录，目录名必须以 "/" 结尾。
         */
        this.Dir = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        Bucket: string | null;
        Dir: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Dir = 'Dir' in params ? params.Dir : null;

    }
}

/**
 * 编辑视频任务的输出
 * @class
 */
class EditMediaTaskOutput extends AbstractModel {

    FileType: string | null
    
    FileUrl: string | null
    
    FileId: string | null
    
    MediaName: string | null
    
    ClassId: number | null
    
    ExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 文件类型，例如 mp4、flv 等。
         */
        this.FileType = null;

        /**
         * 媒体文件播放地址。
         */
        this.FileUrl = null;

        /**
         * 媒体文件 ID。
         */
        this.FileId = null;

        /**
         * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
         */
        this.MediaName = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
<li>默认值：0，表示其他分类。</li>
         */
        this.ClassId = null;

        /**
         * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileType: string | null;
        FileUrl: string | null;
        FileId: string | null;
        MediaName: string | null;
        ClassId: number | null;
        ExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.MediaName = 'MediaName' in params ? params.MediaName : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * 智能精彩集锦片段列表。
 * @class
 */
class HighlightSegmentItem extends AbstractModel {

    Confidence: number | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 置信度。
         */
        this.Confidence = null;

        /**
         * 片段起始时间偏移。
         */
        this.StartTimeOffset = null;

        /**
         * 片段结束时间偏移。
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

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
 * 输出的媒体文件信息。
 * @class
 */
class ComposeMediaOutput extends AbstractModel {

    FileName: string | null
    
    Description: string | null
    
    ClassId: number | null
    
    ExpireTime: string | null
    
    Container: string | null
    
    VideoStream: OutputVideoStream | null
    
    AudioStream: OutputAudioStream | null
    
    RemoveVideo: number | null
    
    RemoveAudio: number | null
    
    constructor(){
        super();

        /**
         * 文件名称，最长 64 个字符。
         */
        this.FileName = null;

        /**
         * 描述信息，最长 128 个字符。
         */
        this.Description = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
<li>默认值：0，表示其他分类。</li>
         */
        this.ClassId = null;

        /**
         * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
         */
        this.ExpireTime = null;

        /**
         * 封装格式，可选值：mp4、mp3。其中，mp3 为纯音频文件。
         */
        this.Container = null;

        /**
         * 输出的视频信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VideoStream = null;

        /**
         * 输出的音频信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AudioStream = null;

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

    }

    /**
     * @private
     */
    deserialize(params: {
        FileName: string | null;
        Description: string | null;
        ClassId: number | null;
        ExpireTime: string | null;
        Container: string | null;
        VideoStream: OutputVideoStream | null;
        AudioStream: OutputAudioStream | null;
        RemoveVideo: number | null;
        RemoveAudio: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Container = 'Container' in params ? params.Container : null;

        if (params.VideoStream) {
            let obj = new OutputVideoStream();
            obj.deserialize(params.VideoStream)
            this.VideoStream = obj;
        }

        if (params.AudioStream) {
            let obj = new OutputAudioStream();
            obj.deserialize(params.AudioStream)
            this.AudioStream = obj;
        }
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

    }
}

/**
 * 视频转拉任务信息
 * @class
 */
class PullUploadTask extends AbstractModel {

    TaskId: string | null
    
    Status: string | null
    
    ErrCode: number | null
    
    Message: string | null
    
    FileId: string | null
    
    MediaBasicInfo: MediaBasicInfo | null
    
    FileUrl: string | null
    
    ProcedureTaskId: string | null
    
    SessionContext: string | null
    
    SessionId: string | null
    
    constructor(){
        super();

        /**
         * 转拉上传任务 ID。
         */
        this.TaskId = null;

        /**
         * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
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
         * 转拉上传完成后生成的视频 ID。
         */
        this.FileId = null;

        /**
         * 转拉完成后生成的媒体文件基础信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MediaBasicInfo = null;

        /**
         * 转拉上传完成后生成的播放地址。
         */
        this.FileUrl = null;

        /**
         * 若转拉上传时指定了视频处理流程，则该参数为流程任务 ID。
         */
        this.ProcedureTaskId = null;

        /**
         * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
         */
        this.SessionContext = null;

        /**
         * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: string | null;
        ErrCode: number | null;
        Message: string | null;
        FileId: string | null;
        MediaBasicInfo: MediaBasicInfo | null;
        FileUrl: string | null;
        ProcedureTaskId: string | null;
        SessionContext: string | null;
        SessionId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.MediaBasicInfo) {
            let obj = new MediaBasicInfo();
            obj.deserialize(params.MediaBasicInfo)
            this.MediaBasicInfo = obj;
        }
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.ProcedureTaskId = 'ProcedureTaskId' in params ? params.ProcedureTaskId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * 智能按帧标签任务控制参数
 * @class
 */
class FrameTagConfigureInfoForUpdate extends AbstractModel {

    Switch: string | null
    
    ScreenshotInterval: number | null
    
    constructor(){
        super();

        /**
         * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
         */
        this.Switch = null;

        /**
         * 截帧间隔，单位为秒，最小值为 0.5 秒。
         */
        this.ScreenshotInterval = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: string | null;
        ScreenshotInterval: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.ScreenshotInterval = 'ScreenshotInterval' in params ? params.ScreenshotInterval : null;

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
    
    SubAppId: number | null
    
    constructor(){
        super();

        /**
         * 视频内容识别模板唯一标识过滤条件，数组长度限制：100。
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
         * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Definitions: Array<number> | null;
        Offset: number | null;
        Limit: number | null;
        SubAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

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
         * 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有值。
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
    
    HeadTailTask: AiRecognitionTaskHeadTailResult | null
    
    SegmentTask: AiRecognitionTaskSegmentResult | null
    
    FaceTask: AiRecognitionTaskFaceResult | null
    
    AsrWordsTask: AiRecognitionTaskAsrWordsResult | null
    
    AsrFullTextTask: AiRecognitionTaskAsrFullTextResult | null
    
    OcrWordsTask: AiRecognitionTaskOcrWordsResult | null
    
    OcrFullTextTask: AiRecognitionTaskOcrFullTextResult | null
    
    ObjectTask: AiRecognitionTaskObjectResult | null
    
    constructor(){
        super();

        /**
         * 任务的类型，取值范围：
<li>FaceRecognition：人脸识别，</li>
<li>AsrWordsRecognition：语音关键词识别，</li>
<li>OcrWordsRecognition：文本关键词识别，</li>
<li>AsrFullTextRecognition：语音全文识别，</li>
<li>OcrFullTextRecognition：文本全文识别，</li>
<li>HeadTailRecognition：视频片头片尾识别，</li>
<li>ObjectRecognition：物体识别。</li>
         */
        this.Type = null;

        /**
         * 视频片头片尾识别结果，当 Type 为
 HeadTailRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HeadTailTask = null;

        /**
         * 视频拆条识别结果，当 Type 为
 SegmentRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SegmentTask = null;

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

        /**
         * 物体识别结果，当 Type 为
 ObjectRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ObjectTask = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        HeadTailTask: AiRecognitionTaskHeadTailResult | null;
        SegmentTask: AiRecognitionTaskSegmentResult | null;
        FaceTask: AiRecognitionTaskFaceResult | null;
        AsrWordsTask: AiRecognitionTaskAsrWordsResult | null;
        AsrFullTextTask: AiRecognitionTaskAsrFullTextResult | null;
        OcrWordsTask: AiRecognitionTaskOcrWordsResult | null;
        OcrFullTextTask: AiRecognitionTaskOcrFullTextResult | null;
        ObjectTask: AiRecognitionTaskObjectResult | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.HeadTailTask) {
            let obj = new AiRecognitionTaskHeadTailResult();
            obj.deserialize(params.HeadTailTask)
            this.HeadTailTask = obj;
        }

        if (params.SegmentTask) {
            let obj = new AiRecognitionTaskSegmentResult();
            obj.deserialize(params.SegmentTask)
            this.SegmentTask = obj;
        }

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

        if (params.ObjectTask) {
            let obj = new AiRecognitionTaskObjectResult();
            obj.deserialize(params.ObjectTask)
            this.ObjectTask = obj;
        }

    }
}

export const Models = {
    Canvas: Canvas,
    ModifySampleSnapshotTemplateResponse: ModifySampleSnapshotTemplateResponse,
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    AiRecognitionTaskAsrFullTextSegmentItem: AiRecognitionTaskAsrFullTextSegmentItem,
    UserDefineOcrTextReviewTemplateInfoForUpdate: UserDefineOcrTextReviewTemplateInfoForUpdate,
    DescribeAllClassRequest: DescribeAllClassRequest,
    WeChatMiniProgramPublishRequest: WeChatMiniProgramPublishRequest,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    SvgWatermarkInput: SvgWatermarkInput,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    TransitionOpertion: TransitionOpertion,
    AudioTrackItem: AudioTrackItem,
    MediaAiAnalysisHighlightItem: MediaAiAnalysisHighlightItem,
    DescribeAnimatedGraphicsTemplatesRequest: DescribeAnimatedGraphicsTemplatesRequest,
    AiReviewTaskProhibitedAsrResult: AiReviewTaskProhibitedAsrResult,
    AdaptiveDynamicStreamingTemplate: AdaptiveDynamicStreamingTemplate,
    DeleteAnimatedGraphicsTemplateResponse: DeleteAnimatedGraphicsTemplateResponse,
    AiReviewTaskProhibitedOcrResult: AiReviewTaskProhibitedOcrResult,
    AiRecognitionTaskAsrFullTextResultOutput: AiRecognitionTaskAsrFullTextResultOutput,
    AiReviewProhibitedOcrTaskOutput: AiReviewProhibitedOcrTaskOutput,
    MediaMiniProgramReviewElem: MediaMiniProgramReviewElem,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    ModifySampleSnapshotTemplateRequest: ModifySampleSnapshotTemplateRequest,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    MediaInputInfo: MediaInputInfo,
    CreateImageSpriteTask2017: CreateImageSpriteTask2017,
    TempCertificate: TempCertificate,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    AiSampleWord: AiSampleWord,
    CreateImageSpriteTemplateRequest: CreateImageSpriteTemplateRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    DeleteContentReviewTemplateRequest: DeleteContentReviewTemplateRequest,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    AudioTransform: AudioTransform,
    ResetProcedureTemplateRequest: ResetProcedureTemplateRequest,
    ComposeMediaResponse: ComposeMediaResponse,
    DeleteSampleSnapshotTemplateRequest: DeleteSampleSnapshotTemplateRequest,
    DescribeStorageDataResponse: DescribeStorageDataResponse,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    ModifySubAppIdInfoRequest: ModifySubAppIdInfoRequest,
    DeletePersonSampleRequest: DeletePersonSampleRequest,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    AudioTemplateInfo: AudioTemplateInfo,
    ExecuteFunctionResponse: ExecuteFunctionResponse,
    CoverConfigureInfo: CoverConfigureInfo,
    ComposeMediaRequest: ComposeMediaRequest,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    AiRecognitionTaskHeadTailResultInput: AiRecognitionTaskHeadTailResultInput,
    CreateAdaptiveDynamicStreamingTemplateRequest: CreateAdaptiveDynamicStreamingTemplateRequest,
    PushUrlCacheResponse: PushUrlCacheResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    TerrorismImgReviewTemplateInfoForUpdate: TerrorismImgReviewTemplateInfoForUpdate,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    AiAnalysisTaskHighlightResult: AiAnalysisTaskHighlightResult,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    ApplyUploadResponse: ApplyUploadResponse,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    DeleteSuperPlayerConfigRequest: DeleteSuperPlayerConfigRequest,
    AiReviewTerrorismOcrTaskInput: AiReviewTerrorismOcrTaskInput,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    CreateProcedureTemplateRequest: CreateProcedureTemplateRequest,
    DescribeMediaProcessUsageDataRequest: DescribeMediaProcessUsageDataRequest,
    CreatePersonSampleRequest: CreatePersonSampleRequest,
    MediaTransitionItem: MediaTransitionItem,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    TagConfigureInfo: TagConfigureInfo,
    ModifySuperPlayerConfigResponse: ModifySuperPlayerConfigResponse,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    ConcatTask2017: ConcatTask2017,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    FileUploadTask: FileUploadTask,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    FileDeleteTask: FileDeleteTask,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    EditMediaTaskInput: EditMediaTaskInput,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    DescribeWordSamplesResponse: DescribeWordSamplesResponse,
    AiSampleFaceInfo: AiSampleFaceInfo,
    MediaProcessTaskAdaptiveDynamicStreamingResult: MediaProcessTaskAdaptiveDynamicStreamingResult,
    OcrWordsConfigureInfoForUpdate: OcrWordsConfigureInfoForUpdate,
    WatermarkTemplate: WatermarkTemplate,
    CoverBySnapshotTaskOutput: CoverBySnapshotTaskOutput,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    ForbidMediaDistributionRequest: ForbidMediaDistributionRequest,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    EditMediaResponse: EditMediaResponse,
    PoliticalOcrReviewTemplateInfoForUpdate: PoliticalOcrReviewTemplateInfoForUpdate,
    ProcessMediaByUrlRequest: ProcessMediaByUrlRequest,
    ModifyMediaInfoRequest: ModifyMediaInfoRequest,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    PornAsrReviewTemplateInfoForUpdate: PornAsrReviewTemplateInfoForUpdate,
    MediaAnimatedGraphicsInfo: MediaAnimatedGraphicsInfo,
    DescribeSnapshotByTimeOffsetTemplatesRequest: DescribeSnapshotByTimeOffsetTemplatesRequest,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    MediaMiniProgramReviewInfoItem: MediaMiniProgramReviewInfoItem,
    TaskStatData: TaskStatData,
    OcrFullTextConfigureInfoForUpdate: OcrFullTextConfigureInfoForUpdate,
    ProcessMediaByProcedureRequest: ProcessMediaByProcedureRequest,
    MediaProcessTaskInput: MediaProcessTaskInput,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    ProcessMediaResponse: ProcessMediaResponse,
    CreateWordSamplesResponse: CreateWordSamplesResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    DeleteAdaptiveDynamicStreamingTemplateResponse: DeleteAdaptiveDynamicStreamingTemplateResponse,
    CreateWordSamplesRequest: CreateWordSamplesRequest,
    PoliticalAsrReviewTemplateInfoForUpdate: PoliticalAsrReviewTemplateInfoForUpdate,
    WechatMiniProgramPublishTaskInput: WechatMiniProgramPublishTaskInput,
    AiSampleFaceOperation: AiSampleFaceOperation,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    AiReviewTaskTerrorismOcrResult: AiReviewTaskTerrorismOcrResult,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    AiRecognitionTaskSegmentResult: AiRecognitionTaskSegmentResult,
    ProhibitedAsrReviewTemplateInfoForUpdate: ProhibitedAsrReviewTemplateInfoForUpdate,
    ModifyAnimatedGraphicsTemplateResponse: ModifyAnimatedGraphicsTemplateResponse,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    LiveRealTimeClipRequest: LiveRealTimeClipRequest,
    DeleteAdaptiveDynamicStreamingTemplateRequest: DeleteAdaptiveDynamicStreamingTemplateRequest,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    EditMediaOutputConfig: EditMediaOutputConfig,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    SimpleHlsClipResponse: SimpleHlsClipResponse,
    DeleteAIAnalysisTemplateRequest: DeleteAIAnalysisTemplateRequest,
    EditMediaRequest: EditMediaRequest,
    ConcatFileInfo2017: ConcatFileInfo2017,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    DescribeMediaInfosResponse: DescribeMediaInfosResponse,
    DeleteProcedureTemplateResponse: DeleteProcedureTemplateResponse,
    DescribeAdaptiveDynamicStreamingTemplatesResponse: DescribeAdaptiveDynamicStreamingTemplatesResponse,
    MediaMiniProgramReviewInfo: MediaMiniProgramReviewInfo,
    ForbidMediaDistributionResponse: ForbidMediaDistributionResponse,
    DescribeAdaptiveDynamicStreamingTemplatesRequest: DescribeAdaptiveDynamicStreamingTemplatesRequest,
    ImageWatermarkInput: ImageWatermarkInput,
    ObjectConfigureInfo: ObjectConfigureInfo,
    AsrFullTextConfigureInfoForUpdate: AsrFullTextConfigureInfoForUpdate,
    AiRecognitionTaskHeadTailResult: AiRecognitionTaskHeadTailResult,
    TranscodeTask2017: TranscodeTask2017,
    CreatePersonSampleResponse: CreatePersonSampleResponse,
    CreateContentReviewTemplateResponse: CreateContentReviewTemplateResponse,
    HighlightsConfigureInfo: HighlightsConfigureInfo,
    DescribeProcedureTemplatesRequest: DescribeProcedureTemplatesRequest,
    ProhibitedConfigureInfoForUpdate: ProhibitedConfigureInfoForUpdate,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    DeleteWordSamplesRequest: DeleteWordSamplesRequest,
    EmptyTrackItem: EmptyTrackItem,
    StickerTrackItem: StickerTrackItem,
    VideoTemplateInfo: VideoTemplateInfo,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    PornOcrReviewTemplateInfoForUpdate: PornOcrReviewTemplateInfoForUpdate,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    ModifyContentReviewTemplateResponse: ModifyContentReviewTemplateResponse,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    CoverBySnapshotTaskInput: CoverBySnapshotTaskInput,
    SegmentConfigureInfoForUpdate: SegmentConfigureInfoForUpdate,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    AiRecognitionTaskSegmentSegmentItem: AiRecognitionTaskSegmentSegmentItem,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    CreateSuperPlayerConfigResponse: CreateSuperPlayerConfigResponse,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    ModifyAdaptiveDynamicStreamingTemplateRequest: ModifyAdaptiveDynamicStreamingTemplateRequest,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    DescribeCDNUsageDataResponse: DescribeCDNUsageDataResponse,
    ModifyWordSampleRequest: ModifyWordSampleRequest,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    DeleteMediaResponse: DeleteMediaResponse,
    ModifySnapshotByTimeOffsetTemplateResponse: ModifySnapshotByTimeOffsetTemplateResponse,
    AiRecognitionTaskObjectResult: AiRecognitionTaskObjectResult,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    SearchMediaResponse: SearchMediaResponse,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    AiAnalysisTaskHighlightOutput: AiAnalysisTaskHighlightOutput,
    ProcessMediaRequest: ProcessMediaRequest,
    ModifyMediaInfoResponse: ModifyMediaInfoResponse,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    ModifyAdaptiveDynamicStreamingTemplateResponse: ModifyAdaptiveDynamicStreamingTemplateResponse,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    AiRecognitionTaskSegmentResultOutput: AiRecognitionTaskSegmentResultOutput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    ObjectConfigureInfoForUpdate: ObjectConfigureInfoForUpdate,
    DeleteMediaRequest: DeleteMediaRequest,
    CreateSuperPlayerConfigRequest: CreateSuperPlayerConfigRequest,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    ModifySubAppIdInfoResponse: ModifySubAppIdInfoResponse,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    ModifySubAppIdStatusResponse: ModifySubAppIdStatusResponse,
    SimpleHlsClipRequest: SimpleHlsClipRequest,
    MediaDeleteItem: MediaDeleteItem,
    AiSamplePerson: AiSamplePerson,
    MediaAdaptiveDynamicStreamingInfo: MediaAdaptiveDynamicStreamingInfo,
    DescribeSuperPlayerConfigsResponse: DescribeSuperPlayerConfigsResponse,
    AsrWordsConfigureInfoForUpdate: AsrWordsConfigureInfoForUpdate,
    DescribeStorageDataRequest: DescribeStorageDataRequest,
    DeleteImageSpriteTemplateResponse: DeleteImageSpriteTemplateResponse,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    TEHDConfig: TEHDConfig,
    AnimatedGraphicsTemplate: AnimatedGraphicsTemplate,
    TerrorismOcrReviewTemplateInfoForUpdate: TerrorismOcrReviewTemplateInfoForUpdate,
    UserDefineAsrTextReviewTemplateInfoForUpdate: UserDefineAsrTextReviewTemplateInfoForUpdate,
    AiRecognitionTaskHeadTailResultOutput: AiRecognitionTaskHeadTailResultOutput,
    ModifyImageSpriteTemplateResponse: ModifyImageSpriteTemplateResponse,
    MediaProcessTaskCoverBySnapshotResult: MediaProcessTaskCoverBySnapshotResult,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    TerrorismConfigureInfoForUpdate: TerrorismConfigureInfoForUpdate,
    WechatMiniProgramPublishTask: WechatMiniProgramPublishTask,
    ComposeMediaTask: ComposeMediaTask,
    HeadTailConfigureInfoForUpdate: HeadTailConfigureInfoForUpdate,
    TranscodePlayInfo2017: TranscodePlayInfo2017,
    ComposeMediaTaskInput: ComposeMediaTaskInput,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    MosaicInput: MosaicInput,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    AiRecognitionTaskObjectResultItem: AiRecognitionTaskObjectResultItem,
    MediaSnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo,
    DescribeImageSpriteTemplatesRequest: DescribeImageSpriteTemplatesRequest,
    MediaKeyFrameDescItem: MediaKeyFrameDescItem,
    AiSampleTagOperation: AiSampleTagOperation,
    PlayerConfig: PlayerConfig,
    ConfirmEventsRequest: ConfirmEventsRequest,
    CreateAIRecognitionTemplateResponse: CreateAIRecognitionTemplateResponse,
    ModifySubAppIdStatusRequest: ModifySubAppIdStatusRequest,
    CreateSubAppIdResponse: CreateSubAppIdResponse,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    ResetProcedureTemplateResponse: ResetProcedureTemplateResponse,
    ProhibitedConfigureInfo: ProhibitedConfigureInfo,
    DrmStreamingsInfo: DrmStreamingsInfo,
    AiReviewTerrorismOcrTaskOutput: AiReviewTerrorismOcrTaskOutput,
    AiAnalysisResult: AiAnalysisResult,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    MediaTranscodeInfo: MediaTranscodeInfo,
    ResolutionNameInfo: ResolutionNameInfo,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    ParseStreamingManifestRequest: ParseStreamingManifestRequest,
    DeleteSampleSnapshotTemplateResponse: DeleteSampleSnapshotTemplateResponse,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    MediaTrackItem: MediaTrackItem,
    DescribeStorageDetailsResponse: DescribeStorageDetailsResponse,
    PullEventsResponse: PullEventsResponse,
    AiRecognitionTaskObjectResultInput: AiRecognitionTaskObjectResultInput,
    OutputVideoStream: OutputVideoStream,
    ProcedureTemplate: ProcedureTemplate,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    ProcessMediaByUrlResponse: ProcessMediaByUrlResponse,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    DeletePersonSampleResponse: DeletePersonSampleResponse,
    CreateSnapshotByTimeOffsetTemplateResponse: CreateSnapshotByTimeOffsetTemplateResponse,
    ModifyContentReviewTemplateRequest: ModifyContentReviewTemplateRequest,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    CreateAdaptiveDynamicStreamingTemplateResponse: CreateAdaptiveDynamicStreamingTemplateResponse,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    ImageSpriteTemplate: ImageSpriteTemplate,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    SegmentConfigureInfo: SegmentConfigureInfo,
    TaskStatDataItem: TaskStatDataItem,
    ParseStreamingManifestResponse: ParseStreamingManifestResponse,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    ApplyUploadRequest: ApplyUploadRequest,
    CreateSampleSnapshotTemplateResponse: CreateSampleSnapshotTemplateResponse,
    AiAnalysisTaskHighlightInput: AiAnalysisTaskHighlightInput,
    DeleteContentReviewTemplateResponse: DeleteContentReviewTemplateResponse,
    MediaBasicInfo: MediaBasicInfo,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    PullUploadRequest: PullUploadRequest,
    SortBy: SortBy,
    ClipTask2017: ClipTask2017,
    TranscodeTemplate: TranscodeTemplate,
    DescribeCDNUsageDataRequest: DescribeCDNUsageDataRequest,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    DescribeReviewDetailsRequest: DescribeReviewDetailsRequest,
    PornConfigureInfoForUpdate: PornConfigureInfoForUpdate,
    AiReviewProhibitedAsrTaskInput: AiReviewProhibitedAsrTaskInput,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    TerrorismOcrReviewTemplateInfo: TerrorismOcrReviewTemplateInfo,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    AiRecognitionTaskObjectResultOutput: AiRecognitionTaskObjectResultOutput,
    AiReviewProhibitedAsrTaskOutput: AiReviewProhibitedAsrTaskOutput,
    CreateClassResponse: CreateClassResponse,
    DeleteSuperPlayerConfigResponse: DeleteSuperPlayerConfigResponse,
    DescribeSampleSnapshotTemplatesRequest: DescribeSampleSnapshotTemplatesRequest,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    PoliticalImgReviewTemplateInfoForUpdate: PoliticalImgReviewTemplateInfoForUpdate,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    AdaptiveStreamTemplate: AdaptiveStreamTemplate,
    TranscodeTaskInput: TranscodeTaskInput,
    ModifyAIRecognitionTemplateRequest: ModifyAIRecognitionTemplateRequest,
    WechatPublishTask: WechatPublishTask,
    ClipFileInfo2017: ClipFileInfo2017,
    StatDataItem: StatDataItem,
    MediaSourceData: MediaSourceData,
    ProhibitedAsrReviewTemplateInfo: ProhibitedAsrReviewTemplateInfo,
    PushUrlCacheRequest: PushUrlCacheRequest,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    HeadTailConfigureInfo: HeadTailConfigureInfo,
    EventContent: EventContent,
    HighlightsConfigureInfoForUpdate: HighlightsConfigureInfoForUpdate,
    UserDefineConfigureInfoForUpdate: UserDefineConfigureInfoForUpdate,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    OutputAudioStream: OutputAudioStream,
    ModifyClassRequest: ModifyClassRequest,
    SpecificationDataItem: SpecificationDataItem,
    TEHDConfigForUpdate: TEHDConfigForUpdate,
    ComposeMediaTaskOutput: ComposeMediaTaskOutput,
    DescribeMediaInfosRequest: DescribeMediaInfosRequest,
    ModifyPersonSampleRequest: ModifyPersonSampleRequest,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    CreateAIRecognitionTemplateRequest: CreateAIRecognitionTemplateRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    ModifyAIRecognitionTemplateResponse: ModifyAIRecognitionTemplateResponse,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    ModifyAnimatedGraphicsTemplateRequest: ModifyAnimatedGraphicsTemplateRequest,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteWordSamplesResponse: DeleteWordSamplesResponse,
    DeleteProcedureTemplateRequest: DeleteProcedureTemplateRequest,
    WatermarkInput: WatermarkInput,
    AiSampleWordInfo: AiSampleWordInfo,
    AdaptiveDynamicStreamingInfoItem: AdaptiveDynamicStreamingInfoItem,
    ProhibitedOcrReviewTemplateInfo: ProhibitedOcrReviewTemplateInfo,
    DeleteClassResponse: DeleteClassResponse,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaMetaData: MediaMetaData,
    MediaSampleSnapshotInfo: MediaSampleSnapshotInfo,
    DescribeSubAppIdsResponse: DescribeSubAppIdsResponse,
    MediaInfo: MediaInfo,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    CreateContentReviewTemplateRequest: CreateContentReviewTemplateRequest,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    AdaptiveDynamicStreamingTaskInput: AdaptiveDynamicStreamingTaskInput,
    DescribeImageSpriteTemplatesResponse: DescribeImageSpriteTemplatesResponse,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    MediaKeyFrameDescInfo: MediaKeyFrameDescInfo,
    DeleteImageSpriteTemplateRequest: DeleteImageSpriteTemplateRequest,
    CreateClassRequest: CreateClassRequest,
    AiSampleFailFaceInfo: AiSampleFailFaceInfo,
    UserDefineFaceReviewTemplateInfoForUpdate: UserDefineFaceReviewTemplateInfoForUpdate,
    CreateProcedureTemplateResponse: CreateProcedureTemplateResponse,
    DescribeMediaProcessUsageDataResponse: DescribeMediaProcessUsageDataResponse,
    DescribeSuperPlayerConfigsRequest: DescribeSuperPlayerConfigsRequest,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    AiRecognitionTaskSegmentResultInput: AiRecognitionTaskSegmentResultInput,
    DescribeTasksResponse: DescribeTasksResponse,
    DescribeSubAppIdsRequest: DescribeSubAppIdsRequest,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    ModifySnapshotByTimeOffsetTemplateRequest: ModifySnapshotByTimeOffsetTemplateRequest,
    ProcedureTask: ProcedureTask,
    ModifySuperPlayerConfigRequest: ModifySuperPlayerConfigRequest,
    TaskSimpleInfo: TaskSimpleInfo,
    DescribeSnapshotByTimeOffsetTemplatesResponse: DescribeSnapshotByTimeOffsetTemplatesResponse,
    MediaVideoStreamItem: MediaVideoStreamItem,
    SnapshotByTimeOffsetTemplate: SnapshotByTimeOffsetTemplate,
    DeleteSnapshotByTimeOffsetTemplateResponse: DeleteSnapshotByTimeOffsetTemplateResponse,
    ProhibitedOcrReviewTemplateInfoForUpdate: ProhibitedOcrReviewTemplateInfoForUpdate,
    DescribeTasksRequest: DescribeTasksRequest,
    DescribeReviewDetailsResponse: DescribeReviewDetailsResponse,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    SnapshotByTimeOffset2017: SnapshotByTimeOffset2017,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    MediaAudioStreamItem: MediaAudioStreamItem,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    SubAppIdInfo: SubAppIdInfo,
    DescribeAllClassResponse: DescribeAllClassResponse,
    ModifyImageSpriteTemplateRequest: ModifyImageSpriteTemplateRequest,
    AiReviewProhibitedOcrTaskInput: AiReviewProhibitedOcrTaskInput,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    EditMediaStreamInfo: EditMediaStreamInfo,
    DescribeWordSamplesRequest: DescribeWordSamplesRequest,
    LiveRealTimeClipResponse: LiveRealTimeClipResponse,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    CommitUploadResponse: CommitUploadResponse,
    DescribeSampleSnapshotTemplatesResponse: DescribeSampleSnapshotTemplatesResponse,
    ModifyWordSampleResponse: ModifyWordSampleResponse,
    AiContentReviewResult: AiContentReviewResult,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    DrmStreamingsInfoForUpdate: DrmStreamingsInfoForUpdate,
    DeleteClassRequest: DeleteClassRequest,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    PoliticalConfigureInfoForUpdate: PoliticalConfigureInfoForUpdate,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    WeChatMiniProgramPublishResponse: WeChatMiniProgramPublishResponse,
    ImageTransform: ImageTransform,
    CreateAnimatedGraphicsTemplateRequest: CreateAnimatedGraphicsTemplateRequest,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    ExecuteFunctionRequest: ExecuteFunctionRequest,
    ConfirmEventsResponse: ConfirmEventsResponse,
    ModifyPersonSampleResponse: ModifyPersonSampleResponse,
    VideoTrackItem: VideoTrackItem,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    MediaTranscodeItem: MediaTranscodeItem,
    DescribePersonSamplesResponse: DescribePersonSamplesResponse,
    PornConfigureInfo: PornConfigureInfo,
    AiRecognitionTaskObjectSeqmentItem: AiRecognitionTaskObjectSeqmentItem,
    PullEventsRequest: PullEventsRequest,
    FaceConfigureInfoForUpdate: FaceConfigureInfoForUpdate,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    CreateSnapshotByTimeOffsetTemplateRequest: CreateSnapshotByTimeOffsetTemplateRequest,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    CreateSubAppIdRequest: CreateSubAppIdRequest,
    DescribeProcedureTemplatesResponse: DescribeProcedureTemplatesResponse,
    SearchMediaRequest: SearchMediaRequest,
    CreateSampleSnapshotTemplateRequest: CreateSampleSnapshotTemplateRequest,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    AudioVolumeParam: AudioVolumeParam,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    ModifyClassResponse: ModifyClassResponse,
    EditMediaFileInfo: EditMediaFileInfo,
    ProcessMediaByProcedureResponse: ProcessMediaByProcedureResponse,
    PullUploadResponse: PullUploadResponse,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    PornImgReviewTemplateInfoForUpdate: PornImgReviewTemplateInfoForUpdate,
    EditMediaTask: EditMediaTask,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    CommitUploadRequest: CommitUploadRequest,
    WatermarkCycleConfigForUpdate: WatermarkCycleConfigForUpdate,
    SnapshotByTimeOffsetTask2017: SnapshotByTimeOffsetTask2017,
    MediaClassInfo: MediaClassInfo,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    DeleteAnimatedGraphicsTemplateRequest: DeleteAnimatedGraphicsTemplateRequest,
    DeleteSnapshotByTimeOffsetTemplateRequest: DeleteSnapshotByTimeOffsetTemplateRequest,
    DescribeAnimatedGraphicsTemplatesResponse: DescribeAnimatedGraphicsTemplatesResponse,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    CreateAnimatedGraphicsTemplateResponse: CreateAnimatedGraphicsTemplateResponse,
    SampleSnapshotTemplate: SampleSnapshotTemplate,
    MediaImageSpriteItem: MediaImageSpriteItem,
    DescribePersonSamplesRequest: DescribePersonSamplesRequest,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    DescribeStorageDetailsRequest: DescribeStorageDetailsRequest,
    MediaTrack: MediaTrack,
    MediaOutputInfo: MediaOutputInfo,
    EditMediaTaskOutput: EditMediaTaskOutput,
    HighlightSegmentItem: HighlightSegmentItem,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    ComposeMediaOutput: ComposeMediaOutput,
    PullUploadTask: PullUploadTask,
    FrameTagConfigureInfoForUpdate: FrameTagConfigureInfoForUpdate,
    CreateImageSpriteTemplateResponse: CreateImageSpriteTemplateResponse,
    DescribeAIRecognitionTemplatesRequest: DescribeAIRecognitionTemplatesRequest,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    AiRecognitionResult: AiRecognitionResult,

}
