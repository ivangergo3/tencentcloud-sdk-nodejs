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
 * 视频标签识别结果信息
 * @class
 */
class TagTaskResult extends AbstractModel {

    Status: number | null
    
    ErrCode: number | null
    
    ErrMsg: string | null
    
    ItemSet: Array<TagTaskResultItem> | null
    
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         */
        this.ErrMsg = null;

        /**
         * 视频标签识别结果集。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        ErrCode: number | null;
        ErrMsg: string | null;
        ItemSet: Array<TagTaskResultItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new TagTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 视频标签识别结果项
 * @class
 */
class TagTaskResultItem extends AbstractModel {

    Tag: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 标签名称。
         */
        this.Tag = null;

        /**
         * 置信度，取值范围是 0 到 100。
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
 * 任务视频cos信息
 * @class
 */
class CosInfo extends AbstractModel {

    Region: string | null
    
    Bucket: string | null
    
    Path: string | null
    
    CosAuthMode: CosAuthMode | null
    
    constructor(){
        super();

        /**
         * cos 区域值。例如：ap-beijing。
         */
        this.Region = null;

        /**
         * cos 存储桶，格式为BuketName-AppId。例如：test-123456。
         */
        this.Bucket = null;

        /**
         * cos 路径。 
对于写表示目录，例如：/test； 
对于读表示文件路径，例如：/test/test.mp4。
         */
        this.Path = null;

        /**
         * cos 授权信息，不填默认为公有权限。
         */
        this.CosAuthMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        Bucket: string | null;
        Path: string | null;
        CosAuthMode: CosAuthMode | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.CosAuthMode) {
            let obj = new CosAuthMode();
            obj.deserialize(params.CosAuthMode)
            this.CosAuthMode = obj;
        }

    }
}

/**
 * 任务存储信息
 * @class
 */
class SaveInfo extends AbstractModel {

    Type: number | null
    
    CosInfo: CosInfo | null
    
    constructor(){
        super();

        /**
         * 存储类型，可选值： 
1：CosInfo。
         */
        this.Type = null;

        /**
         * Cos形式存储信息，当Type等于1时必选。
         */
        this.CosInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: number | null;
        CosInfo: CosInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosInfo) {
            let obj = new CosInfo();
            obj.deserialize(params.CosInfo)
            this.CosInfo = obj;
        }

    }
}

/**
 * 智能拆条结果项
 * @class
 */
class StripTaskResultItem extends AbstractModel {

    SegmentUrl: string | null
    
    CovImgUrl: string | null
    
    Confidence: number | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 视频拆条片段地址。
         */
        this.SegmentUrl = null;

        /**
         * 拆条封面图片地址。
         */
        this.CovImgUrl = null;

        /**
         * 置信度，取值范围是 0 到 100。
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

    }

    /**
     * @private
     */
    deserialize(params: {
        SegmentUrl: string | null;
        CovImgUrl: string | null;
        Confidence: number | null;
        StartTimeOffset: number | null;
        EndTimeOffset: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SegmentUrl = 'SegmentUrl' in params ? params.SegmentUrl : null;
        this.CovImgUrl = 'CovImgUrl' in params ? params.CovImgUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 任务视频cos授权信息
 * @class
 */
class CosAuthMode extends AbstractModel {

    Type: number | null
    
    HostedId: string | null
    
    SecretId: string | null
    
    SecretKey: string | null
    
    Token: string | null
    
    constructor(){
        super();

        /**
         * 授权类型，可选值： 
0：bucket授权，需要将对应bucket授权给本服务帐号（3020447271），否则会读写cos失败； 
1：key托管，把cos的账号id和key托管于本服务，本服务会提供一个托管id； 
3：临时key授权。
注意：目前智能编辑还不支持临时key授权。
         */
        this.Type = null;

        /**
         * cos账号托管id，Type等于1时必选。
         */
        this.HostedId = null;

        /**
         * cos身份识别id，Type等于3时必选。
         */
        this.SecretId = null;

        /**
         * cos身份秘钥，Type等于3时必选。
         */
        this.SecretKey = null;

        /**
         * 临时授权 token，Type等于3时必选。
         */
        this.Token = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: number | null;
        HostedId: string | null;
        SecretId: string | null;
        SecretKey: string | null;
        Token: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.HostedId = 'HostedId' in params ? params.HostedId : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;

    }
}

/**
 * 视频标签识别任务参数信息
 * @class
 */
class TagEditingInfo extends AbstractModel {

    Switch: number | null
    
    CustomInfo: string | null
    
    constructor(){
        super();

        /**
         * 是否开启视频标签识别。0为关闭，1为开启。其他非0非1值默认为0。
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: number | null;
        CustomInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 片头片尾识别结果项
 * @class
 */
class OpeningEndingTaskResultItem extends AbstractModel {

    OpeningTimeOffset: number | null
    
    OpeningConfidence: number | null
    
    EndingTimeOffset: number | null
    
    EndingConfidence: number | null
    
    constructor(){
        super();

        /**
         * 视频片头的结束时间点，单位：秒。
         */
        this.OpeningTimeOffset = null;

        /**
         * 片头识别置信度，取值范围是 0 到 100。
         */
        this.OpeningConfidence = null;

        /**
         * 视频片尾的开始时间点，单位：秒。
         */
        this.EndingTimeOffset = null;

        /**
         * 片尾识别置信度，取值范围是 0 到 100。
         */
        this.EndingConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OpeningTimeOffset: number | null;
        OpeningConfidence: number | null;
        EndingTimeOffset: number | null;
        EndingConfidence: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.OpeningTimeOffset = 'OpeningTimeOffset' in params ? params.OpeningTimeOffset : null;
        this.OpeningConfidence = 'OpeningConfidence' in params ? params.OpeningConfidence : null;
        this.EndingTimeOffset = 'EndingTimeOffset' in params ? params.EndingTimeOffset : null;
        this.EndingConfidence = 'EndingConfidence' in params ? params.EndingConfidence : null;

    }
}

/**
 * 视频源信息
 * @class
 */
class DownInfo extends AbstractModel {

    Type: number | null
    
    UrlInfo: UrlInfo | null
    
    CosInfo: CosInfo | null
    
    constructor(){
        super();

        /**
         * 下载类型，可选值： 
0：UrlInfo； 
1：CosInfo。
         */
        this.Type = null;

        /**
         * Url形式下载信息，当Type等于0时必选。
         */
        this.UrlInfo = null;

        /**
         * Cos形式下载信息，当Type等于1时必选。
         */
        this.CosInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: number | null;
        UrlInfo: UrlInfo | null;
        CosInfo: CosInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.UrlInfo) {
            let obj = new UrlInfo();
            obj.deserialize(params.UrlInfo)
            this.UrlInfo = obj;
        }

        if (params.CosInfo) {
            let obj = new CosInfo();
            obj.deserialize(params.CosInfo)
            this.CosInfo = obj;
        }

    }
}

/**
 * 视频分类识别任务参数信息
 * @class
 */
class ClassificationEditingInfo extends AbstractModel {

    Switch: number | null
    
    CustomInfo: string | null
    
    constructor(){
        super();

        /**
         * 是否开启视频分类识别。0为关闭，1为开启。其他非0非1值默认为0。
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: number | null;
        CustomInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * DescribeEditingTaskResult请求参数结构体
 * @class
 */
class DescribeEditingTaskResultRequest extends AbstractModel {

    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 编辑任务 ID。
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
 * 智能封面结果项
 * @class
 */
class CoverTaskResultItem extends AbstractModel {

    CoverUrl: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 智能封面地址。
         */
        this.CoverUrl = null;

        /**
         * 置信度，取值范围是 0 到 100。
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
 * 智能拆条任务参数信息
 * @class
 */
class StripEditingInfo extends AbstractModel {

    Switch: number | null
    
    CustomInfo: string | null
    
    constructor(){
        super();

        /**
         * 是否开启智能拆条。0为关闭，1为开启。其他非0非1值默认为0。
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: number | null;
        CustomInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 智能编辑任务参数信息
 * @class
 */
class EditingInfo extends AbstractModel {

    TagEditingInfo: TagEditingInfo | null
    
    ClassificationEditingInfo: ClassificationEditingInfo | null
    
    StripEditingInfo: StripEditingInfo | null
    
    HighlightsEditingInfo: HighlightsEditingInfo | null
    
    CoverEditingInfo: CoverEditingInfo | null
    
    OpeningEndingEditingInfo: OpeningEndingEditingInfo | null
    
    constructor(){
        super();

        /**
         * 视频标签识别任务参数，不填则不开启。
         */
        this.TagEditingInfo = null;

        /**
         * 视频分类识别任务参数，不填则不开启。
         */
        this.ClassificationEditingInfo = null;

        /**
         * 智能拆条任务参数，不填则不开启。
         */
        this.StripEditingInfo = null;

        /**
         * 智能集锦任务参数，不填则不开启。
         */
        this.HighlightsEditingInfo = null;

        /**
         * 智能封面任务参数，不填则不开启。
         */
        this.CoverEditingInfo = null;

        /**
         * 片头片尾识别任务参数，不填则不开启。
         */
        this.OpeningEndingEditingInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TagEditingInfo: TagEditingInfo | null;
        ClassificationEditingInfo: ClassificationEditingInfo | null;
        StripEditingInfo: StripEditingInfo | null;
        HighlightsEditingInfo: HighlightsEditingInfo | null;
        CoverEditingInfo: CoverEditingInfo | null;
        OpeningEndingEditingInfo: OpeningEndingEditingInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TagEditingInfo) {
            let obj = new TagEditingInfo();
            obj.deserialize(params.TagEditingInfo)
            this.TagEditingInfo = obj;
        }

        if (params.ClassificationEditingInfo) {
            let obj = new ClassificationEditingInfo();
            obj.deserialize(params.ClassificationEditingInfo)
            this.ClassificationEditingInfo = obj;
        }

        if (params.StripEditingInfo) {
            let obj = new StripEditingInfo();
            obj.deserialize(params.StripEditingInfo)
            this.StripEditingInfo = obj;
        }

        if (params.HighlightsEditingInfo) {
            let obj = new HighlightsEditingInfo();
            obj.deserialize(params.HighlightsEditingInfo)
            this.HighlightsEditingInfo = obj;
        }

        if (params.CoverEditingInfo) {
            let obj = new CoverEditingInfo();
            obj.deserialize(params.CoverEditingInfo)
            this.CoverEditingInfo = obj;
        }

        if (params.OpeningEndingEditingInfo) {
            let obj = new OpeningEndingEditingInfo();
            obj.deserialize(params.OpeningEndingEditingInfo)
            this.OpeningEndingEditingInfo = obj;
        }

    }
}

/**
 * CreateEditingTask请求参数结构体
 * @class
 */
class CreateEditingTaskRequest extends AbstractModel {

    EditingInfo: EditingInfo | null
    
    DownInfo: DownInfo | null
    
    SaveInfo: SaveInfo | null
    
    CallbackInfo: CallbackInfo | null
    
    constructor(){
        super();

        /**
         * 智能编辑任务参数。
         */
        this.EditingInfo = null;

        /**
         * 视频源信息。
         */
        this.DownInfo = null;

        /**
         * 结果存储信息。对于包含智能拆条、智能集锦或者智能封面的任务必选。
         */
        this.SaveInfo = null;

        /**
         * 任务结果回调地址信息。
         */
        this.CallbackInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EditingInfo: EditingInfo | null;
        DownInfo: DownInfo | null;
        SaveInfo: SaveInfo | null;
        CallbackInfo: CallbackInfo | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.EditingInfo) {
            let obj = new EditingInfo();
            obj.deserialize(params.EditingInfo)
            this.EditingInfo = obj;
        }

        if (params.DownInfo) {
            let obj = new DownInfo();
            obj.deserialize(params.DownInfo)
            this.DownInfo = obj;
        }

        if (params.SaveInfo) {
            let obj = new SaveInfo();
            obj.deserialize(params.SaveInfo)
            this.SaveInfo = obj;
        }

        if (params.CallbackInfo) {
            let obj = new CallbackInfo();
            obj.deserialize(params.CallbackInfo)
            this.CallbackInfo = obj;
        }

    }
}

/**
 * 智能集锦结果信息
 * @class
 */
class HighlightsTaskResult extends AbstractModel {

    Status: number | null
    
    ErrCode: number | null
    
    ErrMsg: string | null
    
    ItemSet: Array<HighlightsTaskResultItem> | null
    
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         */
        this.ErrMsg = null;

        /**
         * 智能集锦结果集。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        ErrCode: number | null;
        ErrMsg: string | null;
        ItemSet: Array<HighlightsTaskResultItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new HighlightsTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 片头片尾识别结果信息
 * @class
 */
class OpeningEndingTaskResult extends AbstractModel {

    Status: number | null
    
    ErrCode: number | null
    
    ErrMsg: string | null
    
    Item: OpeningEndingTaskResultItem | null
    
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         */
        this.ErrMsg = null;

        /**
         * 片头片尾识别结果项。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Item = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        ErrCode: number | null;
        ErrMsg: string | null;
        Item: OpeningEndingTaskResultItem | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.Item) {
            let obj = new OpeningEndingTaskResultItem();
            obj.deserialize(params.Item)
            this.Item = obj;
        }

    }
}

/**
 * DescribeEditingTaskResult返回参数结构体
 * @class
 */
class DescribeEditingTaskResultResponse extends AbstractModel {

    TaskResult: EditingTaskResult | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 编辑任务结果信息。
         */
        this.TaskResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskResult: EditingTaskResult | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TaskResult) {
            let obj = new EditingTaskResult();
            obj.deserialize(params.TaskResult)
            this.TaskResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEditingTask返回参数结构体
 * @class
 */
class CreateEditingTaskResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 编辑任务 ID，可以通过该 ID 查询任务状态。
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
 * 任务视频Url形式下载信息。
 * @class
 */
class UrlInfo extends AbstractModel {

    Url: string | null
    
    Format: number | null
    
    Host: string | null
    
    constructor(){
        super();

        /**
         * 视频 URL。音视频支持mp4、ts等格式；直播流支持flv、rtmp格式。
注意：目前智能编辑还不支持直播流场景。
         */
        this.Url = null;

        /**
         * 视频地址格式，可选值： 
0：音视频 ;
1：直播流。 
默认为0。其他非0非1值默认为0。
         */
        this.Format = null;

        /**
         * 指定请求资源时，HTTP头部host的值。
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Url: string | null;
        Format: number | null;
        Host: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * 视频分类识别结果项
 * @class
 */
class ClassificationTaskResultItem extends AbstractModel {

    Classification: string | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 分类名称。
         */
        this.Classification = null;

        /**
         * 置信度，取值范围是 0 到 100。
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
 * 智能识别任务结果信息
 * @class
 */
class EditingTaskResult extends AbstractModel {

    TaskId: string | null
    
    Status: number | null
    
    TagTaskResult: TagTaskResult | null
    
    ClassificationTaskResult: ClassificationTaskResult | null
    
    StripTaskResult: StripTaskResult | null
    
    HighlightsTaskResult: HighlightsTaskResult | null
    
    CoverTaskResult: CoverTaskResult | null
    
    OpeningEndingTaskResult: OpeningEndingTaskResult | null
    
    constructor(){
        super();

        /**
         * 编辑任务 ID。
         */
        this.TaskId = null;

        /**
         * 编辑任务状态。 
1：执行中；2：已完成。
         */
        this.Status = null;

        /**
         * 视频标签识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagTaskResult = null;

        /**
         * 视频分类识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClassificationTaskResult = null;

        /**
         * 智能拆条结果。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.StripTaskResult = null;

        /**
         * 智能集锦结果。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HighlightsTaskResult = null;

        /**
         * 智能封面结果。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CoverTaskResult = null;

        /**
         * 片头片尾识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OpeningEndingTaskResult = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        Status: number | null;
        TagTaskResult: TagTaskResult | null;
        ClassificationTaskResult: ClassificationTaskResult | null;
        StripTaskResult: StripTaskResult | null;
        HighlightsTaskResult: HighlightsTaskResult | null;
        CoverTaskResult: CoverTaskResult | null;
        OpeningEndingTaskResult: OpeningEndingTaskResult | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.TagTaskResult) {
            let obj = new TagTaskResult();
            obj.deserialize(params.TagTaskResult)
            this.TagTaskResult = obj;
        }

        if (params.ClassificationTaskResult) {
            let obj = new ClassificationTaskResult();
            obj.deserialize(params.ClassificationTaskResult)
            this.ClassificationTaskResult = obj;
        }

        if (params.StripTaskResult) {
            let obj = new StripTaskResult();
            obj.deserialize(params.StripTaskResult)
            this.StripTaskResult = obj;
        }

        if (params.HighlightsTaskResult) {
            let obj = new HighlightsTaskResult();
            obj.deserialize(params.HighlightsTaskResult)
            this.HighlightsTaskResult = obj;
        }

        if (params.CoverTaskResult) {
            let obj = new CoverTaskResult();
            obj.deserialize(params.CoverTaskResult)
            this.CoverTaskResult = obj;
        }

        if (params.OpeningEndingTaskResult) {
            let obj = new OpeningEndingTaskResult();
            obj.deserialize(params.OpeningEndingTaskResult)
            this.OpeningEndingTaskResult = obj;
        }

    }
}

/**
 * 智能拆条结果信息
 * @class
 */
class StripTaskResult extends AbstractModel {

    Status: number | null
    
    ErrCode: number | null
    
    ErrMsg: string | null
    
    ItemSet: Array<StripTaskResultItem> | null
    
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         */
        this.ErrMsg = null;

        /**
         * 智能拆条结果集。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        ErrCode: number | null;
        ErrMsg: string | null;
        ItemSet: Array<StripTaskResultItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new StripTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 智能集锦任务参数信息
 * @class
 */
class HighlightsEditingInfo extends AbstractModel {

    Switch: number | null
    
    CustomInfo: string | null
    
    constructor(){
        super();

        /**
         * 是否开启智能集锦。0为关闭，1为开启。其他非0非1值默认为0。
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: number | null;
        CustomInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 视频分类识别结果信息
 * @class
 */
class ClassificationTaskResult extends AbstractModel {

    Status: number | null
    
    ErrCode: number | null
    
    ErrMsg: string | null
    
    ItemSet: Array<ClassificationTaskResultItem> | null
    
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         */
        this.ErrMsg = null;

        /**
         * 视频分类识别结果集。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        ErrCode: number | null;
        ErrMsg: string | null;
        ItemSet: Array<ClassificationTaskResultItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new ClassificationTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 智能集锦结果项
 * @class
 */
class HighlightsTaskResultItem extends AbstractModel {

    HighlightUrl: string | null
    
    CovImgUrl: string | null
    
    Confidence: number | null
    
    Duration: number | null
    
    SegmentSet: Array<HighlightsTaskResultItemSegment> | null
    
    constructor(){
        super();

        /**
         * 智能集锦地址。
         */
        this.HighlightUrl = null;

        /**
         * 智能集锦封面地址。
         */
        this.CovImgUrl = null;

        /**
         * 置信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

        /**
         * 智能集锦持续时间，单位：秒。
         */
        this.Duration = null;

        /**
         * 智能集锦子片段结果集，集锦片段由这些子片段拼接生成。
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
        SegmentSet: Array<HighlightsTaskResultItemSegment> | null;
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
                let obj = new HighlightsTaskResultItemSegment();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 智能集锦结果片段
 * @class
 */
class HighlightsTaskResultItemSegment extends AbstractModel {

    Confidence: number | null
    
    StartTimeOffset: number | null
    
    EndTimeOffset: number | null
    
    constructor(){
        super();

        /**
         * 置信度，取值范围是 0 到 100。
         */
        this.Confidence = null;

        /**
         * 集锦片段起始的偏移时间，单位：秒。
         */
        this.StartTimeOffset = null;

        /**
         * 集锦片段终止的偏移时间，单位：秒。
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
 * 智能封面任务参数信息
 * @class
 */
class CoverEditingInfo extends AbstractModel {

    Switch: number | null
    
    CustomInfo: string | null
    
    constructor(){
        super();

        /**
         * 是否开启智能封面。0为关闭，1为开启。其他非0非1值默认为0。
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: number | null;
        CustomInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 任务结果回调地址信息
 * @class
 */
class CallbackInfo extends AbstractModel {

    Url: string | null
    
    constructor(){
        super();

        /**
         * 回调URL。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 片头片尾识别任务参数信息
 * @class
 */
class OpeningEndingEditingInfo extends AbstractModel {

    Switch: number | null
    
    CustomInfo: string | null
    
    constructor(){
        super();

        /**
         * 是否开启片头片尾识别。0为关闭，1为开启。其他非0非1值默认为0。
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Switch: number | null;
        CustomInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 智能封面结果信息
 * @class
 */
class CoverTaskResult extends AbstractModel {

    Status: number | null
    
    ErrCode: number | null
    
    ErrMsg: string | null
    
    ItemSet: Array<CoverTaskResultItem> | null
    
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         */
        this.ErrMsg = null;

        /**
         * 智能封面结果集。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: number | null;
        ErrCode: number | null;
        ErrMsg: string | null;
        ItemSet: Array<CoverTaskResultItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new CoverTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

export const Models = {
    TagTaskResult: TagTaskResult,
    TagTaskResultItem: TagTaskResultItem,
    CosInfo: CosInfo,
    SaveInfo: SaveInfo,
    StripTaskResultItem: StripTaskResultItem,
    CosAuthMode: CosAuthMode,
    TagEditingInfo: TagEditingInfo,
    OpeningEndingTaskResultItem: OpeningEndingTaskResultItem,
    DownInfo: DownInfo,
    ClassificationEditingInfo: ClassificationEditingInfo,
    DescribeEditingTaskResultRequest: DescribeEditingTaskResultRequest,
    CoverTaskResultItem: CoverTaskResultItem,
    StripEditingInfo: StripEditingInfo,
    EditingInfo: EditingInfo,
    CreateEditingTaskRequest: CreateEditingTaskRequest,
    HighlightsTaskResult: HighlightsTaskResult,
    OpeningEndingTaskResult: OpeningEndingTaskResult,
    DescribeEditingTaskResultResponse: DescribeEditingTaskResultResponse,
    CreateEditingTaskResponse: CreateEditingTaskResponse,
    UrlInfo: UrlInfo,
    ClassificationTaskResultItem: ClassificationTaskResultItem,
    EditingTaskResult: EditingTaskResult,
    StripTaskResult: StripTaskResult,
    HighlightsEditingInfo: HighlightsEditingInfo,
    ClassificationTaskResult: ClassificationTaskResult,
    HighlightsTaskResultItem: HighlightsTaskResultItem,
    HighlightsTaskResultItemSegment: HighlightsTaskResultItemSegment,
    CoverEditingInfo: CoverEditingInfo,
    CallbackInfo: CallbackInfo,
    OpeningEndingEditingInfo: OpeningEndingEditingInfo,
    CoverTaskResult: CoverTaskResult,

}
