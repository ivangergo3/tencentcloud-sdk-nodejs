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
 * 语音过程中断句的中间结果
 * @class
 */
class SentenceInfo extends AbstractModel {

    SentenceId: number | null
    
    Words: Array<WordRsp> | null
    
    PronAccuracy: number | null
    
    PronFluency: number | null
    
    PronCompletion: number | null
    
    SuggestedScore: number | null
    
    constructor(){
        super();

        /**
         * 句子序号，在段落、自由说模式下有效，表示断句序号，最后的综合结果的为-1.
         */
        this.SentenceId = null;

        /**
         * 详细发音评估结果
         */
        this.Words = null;

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronCompletion = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）* 完整度（PronCompletionfloat）*（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         */
        this.SuggestedScore = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SentenceId: number | null;
        Words: Array<WordRsp> | null;
        PronAccuracy: number | null;
        PronFluency: number | null;
        PronCompletion: number | null;
        SuggestedScore: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SentenceId = 'SentenceId' in params ? params.SentenceId : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;

    }
}

/**
 * InitOralProcess请求参数结构体
 * @class
 */
class InitOralProcessRequest extends AbstractModel {

    SessionId: string | null
    
    RefText: string | null
    
    WorkMode: number | null
    
    EvalMode: number | null
    
    ScoreCoeff: number | null
    
    SoeAppId: string | null
    
    IsLongLifeSession: number | null
    
    StorageMode: number | null
    
    SentenceInfoEnabled: number | null
    
    ServerType: number | null
    
    IsAsync: number | null
    
    TextMode: number | null
    
    constructor(){
        super();

        /**
         * 语音段唯一标识，一段语音一个SessionId
         */
        this.SessionId = null;

        /**
         * 被评估语音对应的文本，句子模式下不超过个 20 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式该值传空。如需要在单词模式和句子模式下使用自定义音素，可以通过设置 TextMode 使用[音素标注](https://cloud.tencent.com/document/product/884/33698)。
         */
        this.RefText = null;

        /**
         * 语音输入模式，0：流式分片，1：非流式一次性评估
         */
        this.WorkMode = null;

        /**
         * 评估模式，0：词模式（中文评测模式下为文字模式），1：句子模式，2：段落模式，3：自由说模式，当为词模式评估时，能够提供每个音节的评估信息，当为句子模式时，能够提供完整度和流利度信息。4: 英文单词音素诊断评测模式，针对一个单词音素诊断评测。
         */
        this.EvalMode = null;

        /**
         * 评价苛刻指数，取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数，1.0为小年龄段，4.0为最高年龄段
         */
        this.ScoreCoeff = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。
         */
        this.SoeAppId = null;

        /**
         * 长效session标识，当该参数为1时，session的持续时间为300s，但会一定程度上影响第一个数据包的返回速度，且TransmitOralProcess必须同时为1才可生效。
         */
        this.IsLongLifeSession = null;

        /**
         * 音频存储模式，0：不存储，1：存储到公共对象存储，输出结果为该会话最后一个分片TransmitOralProcess 返回结果 AudioUrl 字段，2：永久存储音频，需要提工单申请，会产生一定存储费用，3：自定义存储，将音频存储到自定义的腾讯云[对象存储](https://cloud.tencent.com/product/cos)中，需要提工单登记存储信息。
         */
        this.StorageMode = null;

        /**
         * 输出断句中间结果标识，0：不输出，1：输出，通过设置该参数，可以在评估过程中的分片传输请求中，返回已经评估断句的中间结果，中间结果可用于客户端 UI 更新，输出结果为TransmitOralProcess请求返回结果 SentenceInfoSet 字段。
         */
        this.SentenceInfoEnabled = null;

        /**
         * 评估语言，0：英文，1：中文。
         */
        this.ServerType = null;

        /**
         * 异步模式标识，0：同步模式，1：异步模式，可选值参考[服务模式](https://cloud.tencent.com/document/product/884/33697)。
         */
        this.IsAsync = null;

        /**
         * 输入文本模式，0: 普通文本，1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本。2：音素注册模式（提工单注册需要使用音素的单词）。
         */
        this.TextMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SessionId: string | null;
        RefText: string | null;
        WorkMode: number | null;
        EvalMode: number | null;
        ScoreCoeff: number | null;
        SoeAppId: string | null;
        IsLongLifeSession: number | null;
        StorageMode: number | null;
        SentenceInfoEnabled: number | null;
        ServerType: number | null;
        IsAsync: number | null;
        TextMode: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RefText = 'RefText' in params ? params.RefText : null;
        this.WorkMode = 'WorkMode' in params ? params.WorkMode : null;
        this.EvalMode = 'EvalMode' in params ? params.EvalMode : null;
        this.ScoreCoeff = 'ScoreCoeff' in params ? params.ScoreCoeff : null;
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.IsLongLifeSession = 'IsLongLifeSession' in params ? params.IsLongLifeSession : null;
        this.StorageMode = 'StorageMode' in params ? params.StorageMode : null;
        this.SentenceInfoEnabled = 'SentenceInfoEnabled' in params ? params.SentenceInfoEnabled : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.IsAsync = 'IsAsync' in params ? params.IsAsync : null;
        this.TextMode = 'TextMode' in params ? params.TextMode : null;

    }
}

/**
 * 评测关键词
 * @class
 */
class Keyword extends AbstractModel {

    RefText: string | null
    
    EvalMode: number | null
    
    ScoreCoeff: number | null
    
    ServerType: number | null
    
    TextMode: number | null
    
    constructor(){
        super();

        /**
         * 被评估语音对应的文本，句子模式下不超过个 20 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式该值无效。如需要在单词模式和句子模式下使用自定义音素，可以通过设置 TextMode 使用[音素标注](https://cloud.tencent.com/document/product/884/33698)。
         */
        this.RefText = null;

        /**
         * 评估模式，0：词模式（中文评测模式下为文字模式），1：句子模式，2：段落模式，3：自由说模式，当为词模式评估时，能够提供每个音节的评估信息，当为句子模式时，能够提供完整度和流利度信息。
         */
        this.EvalMode = null;

        /**
         * 评价苛刻指数，取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数，1.0为小年龄段，4.0为最高年龄段
         */
        this.ScoreCoeff = null;

        /**
         * 评估语言，0：英文，1：中文。
         */
        this.ServerType = null;

        /**
         * 输入文本模式，0: 普通文本，1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本。
         */
        this.TextMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RefText: string | null;
        EvalMode: number | null;
        ScoreCoeff: number | null;
        ServerType: number | null;
        TextMode: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RefText = 'RefText' in params ? params.RefText : null;
        this.EvalMode = 'EvalMode' in params ? params.EvalMode : null;
        this.ScoreCoeff = 'ScoreCoeff' in params ? params.ScoreCoeff : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.TextMode = 'TextMode' in params ? params.TextMode : null;

    }
}

/**
 * KeywordEvaluate请求参数结构体
 * @class
 */
class KeywordEvaluateRequest extends AbstractModel {

    SeqId: number | null
    
    IsEnd: number | null
    
    VoiceFileType: number | null
    
    VoiceEncodeType: number | null
    
    UserVoiceData: string | null
    
    SessionId: string | null
    
    Keywords: Array<Keyword> | null
    
    SoeAppId: string | null
    
    IsQuery: number | null
    
    constructor(){
        super();

        /**
         * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
         */
        this.SeqId = null;

        /**
         * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
         */
        this.IsEnd = null;

        /**
         * 语音文件类型 	1: raw, 2: wav, 3: mp3, 4: speex (语言文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败)。
         */
        this.VoiceFileType = null;

        /**
         * 语音编码类型	1:pcm。
         */
        this.VoiceEncodeType = null;

        /**
         * 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络良好的情况下，建议设置为0.5k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。
         */
        this.UserVoiceData = null;

        /**
         * 语音段唯一标识，一个完整语音一个SessionId。
         */
        this.SessionId = null;

        /**
         * 关键词列表
         */
        this.Keywords = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。
         */
        this.SoeAppId = null;

        /**
         * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 评估结果。
         */
        this.IsQuery = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SeqId: number | null;
        IsEnd: number | null;
        VoiceFileType: number | null;
        VoiceEncodeType: number | null;
        UserVoiceData: string | null;
        SessionId: string | null;
        Keywords: Array<Keyword> | null;
        SoeAppId: string | null;
        IsQuery: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SeqId = 'SeqId' in params ? params.SeqId : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.UserVoiceData = 'UserVoiceData' in params ? params.UserVoiceData : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

        if (params.Keywords) {
            this.Keywords = new Array();
            for (let z in params.Keywords) {
                let obj = new Keyword();
                obj.deserialize(params.Keywords[z]);
                this.Keywords.push(obj);
            }
        }
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.IsQuery = 'IsQuery' in params ? params.IsQuery : null;

    }
}

/**
 * TransmitOralProcess请求参数结构体
 * @class
 */
class TransmitOralProcessRequest extends AbstractModel {

    SeqId: number | null
    
    IsEnd: number | null
    
    VoiceFileType: number | null
    
    VoiceEncodeType: number | null
    
    UserVoiceData: string | null
    
    SessionId: string | null
    
    SoeAppId: string | null
    
    IsLongLifeSession: number | null
    
    IsQuery: number | null
    
    constructor(){
        super();

        /**
         * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
         */
        this.SeqId = null;

        /**
         * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
         */
        this.IsEnd = null;

        /**
         * 语音文件类型 	1:raw, 2:wav, 3:mp3(三种格式目前仅支持16k采样率16bit编码单声道，如有不一致可能导致评估不准确或失败)。
         */
        this.VoiceFileType = null;

        /**
         * 语音编码类型	1:pcm。
         */
        this.VoiceEncodeType = null;

        /**
         * 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络稳定时，分片大小建议设置0.5k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。
         */
        this.UserVoiceData = null;

        /**
         * 语音段唯一标识，一个完整语音一个SessionId。
         */
        this.SessionId = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。
         */
        this.SoeAppId = null;

        /**
         * 长效session标识，当该参数为1时，session的持续时间为300s，但会一定程度上影响第一个数据包的返回速度。当InitOralProcess接口调用时此项为1时，此项必填1才可生效。
         */
        this.IsLongLifeSession = null;

        /**
         * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 的评估结果。
         */
        this.IsQuery = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SeqId: number | null;
        IsEnd: number | null;
        VoiceFileType: number | null;
        VoiceEncodeType: number | null;
        UserVoiceData: string | null;
        SessionId: string | null;
        SoeAppId: string | null;
        IsLongLifeSession: number | null;
        IsQuery: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SeqId = 'SeqId' in params ? params.SeqId : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.UserVoiceData = 'UserVoiceData' in params ? params.UserVoiceData : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.IsLongLifeSession = 'IsLongLifeSession' in params ? params.IsLongLifeSession : null;
        this.IsQuery = 'IsQuery' in params ? params.IsQuery : null;

    }
}

/**
 * TransmitOralProcess返回参数结构体
 * @class
 */
class TransmitOralProcessResponse extends AbstractModel {

    PronAccuracy: number | null
    
    PronFluency: number | null
    
    PronCompletion: number | null
    
    Words: Array<WordRsp> | null
    
    SessionId: string | null
    
    AudioUrl: string | null
    
    SentenceInfoSet: Array<SentenceInfo> | null
    
    Status: string | null
    
    SuggestedScore: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronCompletion = null;

        /**
         * 详细发音评估结果
         */
        this.Words = null;

        /**
         * 语音段唯一标识，一段语音一个SessionId
         */
        this.SessionId = null;

        /**
         * 保存语音音频文件下载地址
         */
        this.AudioUrl = null;

        /**
         * 断句中间结果，中间结果是局部最优而非全局最优的结果，所以中间结果有可能和最终整体结果对应部分不一致；中间结果的输出便于客户端UI更新；待用户发音完全结束后，系统会给出一个综合所有句子的整体结果。
         */
        this.SentenceInfoSet = null;

        /**
         * 评估 session 状态，“Evaluating"：评估中、"Failed"：评估失败、"Finished"：评估完成
         */
        this.Status = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）× 完整度（PronCompletionfloat）×（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         */
        this.SuggestedScore = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PronAccuracy: number | null;
        PronFluency: number | null;
        PronCompletion: number | null;
        Words: Array<WordRsp> | null;
        SessionId: string | null;
        AudioUrl: string | null;
        SentenceInfoSet: Array<SentenceInfo> | null;
        Status: string | null;
        SuggestedScore: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.AudioUrl = 'AudioUrl' in params ? params.AudioUrl : null;

        if (params.SentenceInfoSet) {
            this.SentenceInfoSet = new Array();
            for (let z in params.SentenceInfoSet) {
                let obj = new SentenceInfo();
                obj.deserialize(params.SentenceInfoSet[z]);
                this.SentenceInfoSet.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InitOralProcess返回参数结构体
 * @class
 */
class InitOralProcessResponse extends AbstractModel {

    SessionId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 语音段唯一标识，一个完整语音一个SessionId
         */
        this.SessionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SessionId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KeywordEvaluate返回参数结构体
 * @class
 */
class KeywordEvaluateResponse extends AbstractModel {

    KeywordScores: Array<KeywordScore> | null
    
    SessionId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 关键词得分
         */
        this.KeywordScores = null;

        /**
         * 语音段唯一标识，一段语音一个SessionId
         */
        this.SessionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        KeywordScores: Array<KeywordScore> | null;
        SessionId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.KeywordScores) {
            this.KeywordScores = new Array();
            for (let z in params.KeywordScores) {
                let obj = new KeywordScore();
                obj.deserialize(params.KeywordScores[z]);
                this.KeywordScores.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单音节评价结果
 * @class
 */
class PhoneInfo extends AbstractModel {

    MemBeginTime: number | null
    
    MemEndTime: number | null
    
    PronAccuracy: number | null
    
    DetectedStress: boolean | null
    
    Phone: string | null
    
    Stress: boolean | null
    
    ReferencePhone: string | null
    
    MatchTag: number | null
    
    constructor(){
        super();

        /**
         * 当前音节语音起始时间点，单位为ms
         */
        this.MemBeginTime = null;

        /**
         * 当前音节语音终止时间点，单位为ms
         */
        this.MemEndTime = null;

        /**
         * 音节发音准确度，取值范围[-1, 100]，当取-1时指完全不匹配
         */
        this.PronAccuracy = null;

        /**
         * 当前音节是否检测为重音
         */
        this.DetectedStress = null;

        /**
         * 当前音节
         */
        this.Phone = null;

        /**
         * 当前音节是否应为重音
         */
        this.Stress = null;

        /**
         * 参考音素，在单词诊断模式下，代表标准音素
         */
        this.ReferencePhone = null;

        /**
         * 当前词与输入语句的匹配情况，0：匹配单词、1：新增单词、2：缺少单词、3：错读的词、4：未录入单词。
         */
        this.MatchTag = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MemBeginTime: number | null;
        MemEndTime: number | null;
        PronAccuracy: number | null;
        DetectedStress: boolean | null;
        Phone: string | null;
        Stress: boolean | null;
        ReferencePhone: string | null;
        MatchTag: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MemBeginTime = 'MemBeginTime' in params ? params.MemBeginTime : null;
        this.MemEndTime = 'MemEndTime' in params ? params.MemEndTime : null;
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.DetectedStress = 'DetectedStress' in params ? params.DetectedStress : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Stress = 'Stress' in params ? params.Stress : null;
        this.ReferencePhone = 'ReferencePhone' in params ? params.ReferencePhone : null;
        this.MatchTag = 'MatchTag' in params ? params.MatchTag : null;

    }
}

/**
 * 单词评分细则
 * @class
 */
class WordRsp extends AbstractModel {

    MemBeginTime: number | null
    
    MemEndTime: number | null
    
    PronAccuracy: number | null
    
    PronFluency: number | null
    
    Word: string | null
    
    MatchTag: number | null
    
    PhoneInfos: Array<PhoneInfo> | null
    
    ReferenceWord: string | null
    
    constructor(){
        super();

        /**
         * 当前单词语音起始时间点，单位为ms，该字段段落模式下无意义。
         */
        this.MemBeginTime = null;

        /**
         * 当前单词语音终止时间点，单位为ms，该字段段落模式下无意义。
         */
        this.MemEndTime = null;

        /**
         * 单词发音准确度，取值范围[-1, 100]，当取-1时指完全不匹配
         */
        this.PronAccuracy = null;

        /**
         * 单词发音流利度，取值范围[0, 1]
         */
        this.PronFluency = null;

        /**
         * 当前词
         */
        this.Word = null;

        /**
         * 当前词与输入语句的匹配情况，0：匹配单词、1：新增单词、2：缺少单词、3：错读的词、4：未录入单词。
         */
        this.MatchTag = null;

        /**
         * 音节评估详情
         */
        this.PhoneInfos = null;

        /**
         * 参考词，目前为保留字段。
         */
        this.ReferenceWord = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MemBeginTime: number | null;
        MemEndTime: number | null;
        PronAccuracy: number | null;
        PronFluency: number | null;
        Word: string | null;
        MatchTag: number | null;
        PhoneInfos: Array<PhoneInfo> | null;
        ReferenceWord: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MemBeginTime = 'MemBeginTime' in params ? params.MemBeginTime : null;
        this.MemEndTime = 'MemEndTime' in params ? params.MemEndTime : null;
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.Word = 'Word' in params ? params.Word : null;
        this.MatchTag = 'MatchTag' in params ? params.MatchTag : null;

        if (params.PhoneInfos) {
            this.PhoneInfos = new Array();
            for (let z in params.PhoneInfos) {
                let obj = new PhoneInfo();
                obj.deserialize(params.PhoneInfos[z]);
                this.PhoneInfos.push(obj);
            }
        }
        this.ReferenceWord = 'ReferenceWord' in params ? params.ReferenceWord : null;

    }
}

/**
 * 关键词得分
 * @class
 */
class KeywordScore extends AbstractModel {

    Keyword: string | null
    
    PronAccuracy: number | null
    
    PronFluency: number | null
    
    PronCompletion: number | null
    
    Words: Array<WordRsp> | null
    
    SuggestedScore: number | null
    
    constructor(){
        super();

        /**
         * 关键词
         */
        this.Keyword = null;

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronCompletion = null;

        /**
         * 详细发音评估结果
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Words = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）× 完整度（PronCompletionfloat）×（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         */
        this.SuggestedScore = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keyword: string | null;
        PronAccuracy: number | null;
        PronFluency: number | null;
        PronCompletion: number | null;
        Words: Array<WordRsp> | null;
        SuggestedScore: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;

    }
}

/**
 * TransmitOralProcessWithInit请求参数结构体
 * @class
 */
class TransmitOralProcessWithInitRequest extends AbstractModel {

    SeqId: number | null
    
    IsEnd: number | null
    
    VoiceFileType: number | null
    
    VoiceEncodeType: number | null
    
    UserVoiceData: string | null
    
    SessionId: string | null
    
    RefText: string | null
    
    WorkMode: number | null
    
    EvalMode: number | null
    
    ScoreCoeff: number | null
    
    SoeAppId: string | null
    
    StorageMode: number | null
    
    SentenceInfoEnabled: number | null
    
    ServerType: number | null
    
    IsAsync: number | null
    
    IsQuery: number | null
    
    TextMode: number | null
    
    constructor(){
        super();

        /**
         * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
         */
        this.SeqId = null;

        /**
         * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
         */
        this.IsEnd = null;

        /**
         * 语音文件类型 	1: raw, 2: wav, 3: mp3, 4: speex (语言文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败)。
         */
        this.VoiceFileType = null;

        /**
         * 语音编码类型	1:pcm。
         */
        this.VoiceEncodeType = null;

        /**
         * 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络良好的情况下，建议设置为0.5k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。
         */
        this.UserVoiceData = null;

        /**
         * 语音段唯一标识，一个完整语音一个SessionId。
         */
        this.SessionId = null;

        /**
         * 被评估语音对应的文本，句子模式下不超过个 20 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式该值无效。如需要在单词模式和句子模式下使用自定义音素，可以通过设置 TextMode 使用[音素标注](https://cloud.tencent.com/document/product/884/33698)。
         */
        this.RefText = null;

        /**
         * 语音输入模式，0：流式分片，1：非流式一次性评估
         */
        this.WorkMode = null;

        /**
         * 评估模式，0：词模式（中文评测模式下为文字模式），1：句子模式，2：段落模式，3：自由说模式，当为词模式评估时，能够提供每个音节的评估信息，当为句子模式时，能够提供完整度和流利度信息，4：单词纠错模式：能够对单词和句子中的读错读音进行纠正，给出参考正确读音。
         */
        this.EvalMode = null;

        /**
         * 评价苛刻指数，取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数，1.0为小年龄段，4.0为最高年龄段
         */
        this.ScoreCoeff = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。
         */
        this.SoeAppId = null;

        /**
         * 音频存储模式，0：不存储，1：存储到公共对象存储，输出结果为该会话最后一个分片TransmitOralProcess 返回结果 AudioUrl 字段，2：永久存储音频，需要提工单申请，会产生一定存储费用，3：自定义存储，将音频存储到自定义的腾讯云[对象存储](https://cloud.tencent.com/product/cos)中，需要提工单登记存储信息。
         */
        this.StorageMode = null;

        /**
         * 输出断句中间结果标识，0：不输出，1：输出，通过设置该参数，可以在评估过程中的分片传输请求中，返回已经评估断句的中间结果，中间结果可用于客户端 UI 更新，输出结果为TransmitOralProcess请求返回结果 SentenceInfoSet 字段。
         */
        this.SentenceInfoEnabled = null;

        /**
         * 评估语言，0：英文，1：中文。
         */
        this.ServerType = null;

        /**
         * 异步模式标识，0：同步模式，1：异步模式，可选值参考[服务模式](https://cloud.tencent.com/document/product/884/33697)。
         */
        this.IsAsync = null;

        /**
         * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 评估结果。
         */
        this.IsQuery = null;

        /**
         * 输入文本模式，0: 普通文本，1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本。2：音素注册模式（提工单注册需要使用音素的单词）。
         */
        this.TextMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SeqId: number | null;
        IsEnd: number | null;
        VoiceFileType: number | null;
        VoiceEncodeType: number | null;
        UserVoiceData: string | null;
        SessionId: string | null;
        RefText: string | null;
        WorkMode: number | null;
        EvalMode: number | null;
        ScoreCoeff: number | null;
        SoeAppId: string | null;
        StorageMode: number | null;
        SentenceInfoEnabled: number | null;
        ServerType: number | null;
        IsAsync: number | null;
        IsQuery: number | null;
        TextMode: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SeqId = 'SeqId' in params ? params.SeqId : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.UserVoiceData = 'UserVoiceData' in params ? params.UserVoiceData : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RefText = 'RefText' in params ? params.RefText : null;
        this.WorkMode = 'WorkMode' in params ? params.WorkMode : null;
        this.EvalMode = 'EvalMode' in params ? params.EvalMode : null;
        this.ScoreCoeff = 'ScoreCoeff' in params ? params.ScoreCoeff : null;
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.StorageMode = 'StorageMode' in params ? params.StorageMode : null;
        this.SentenceInfoEnabled = 'SentenceInfoEnabled' in params ? params.SentenceInfoEnabled : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.IsAsync = 'IsAsync' in params ? params.IsAsync : null;
        this.IsQuery = 'IsQuery' in params ? params.IsQuery : null;
        this.TextMode = 'TextMode' in params ? params.TextMode : null;

    }
}

/**
 * TransmitOralProcessWithInit返回参数结构体
 * @class
 */
class TransmitOralProcessWithInitResponse extends AbstractModel {

    PronAccuracy: number | null
    
    PronFluency: number | null
    
    PronCompletion: number | null
    
    Words: Array<WordRsp> | null
    
    SessionId: string | null
    
    AudioUrl: string | null
    
    SentenceInfoSet: Array<SentenceInfo> | null
    
    Status: string | null
    
    SuggestedScore: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         */
        this.PronCompletion = null;

        /**
         * 详细发音评估结果
         */
        this.Words = null;

        /**
         * 语音段唯一标识，一段语音一个SessionId
         */
        this.SessionId = null;

        /**
         * 保存语音音频文件下载地址
         */
        this.AudioUrl = null;

        /**
         * 断句中间结果，中间结果是局部最优而非全局最优的结果，所以中间结果有可能和最终整体结果对应部分不一致；中间结果的输出便于客户端UI更新；待用户发音完全结束后，系统会给出一个综合所有句子的整体结果。
         */
        this.SentenceInfoSet = null;

        /**
         * 评估 session 状态，“Evaluating"：评估中、"Failed"：评估失败、"Finished"：评估完成
         */
        this.Status = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）× 完整度（PronCompletionfloat）×（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         */
        this.SuggestedScore = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PronAccuracy: number | null;
        PronFluency: number | null;
        PronCompletion: number | null;
        Words: Array<WordRsp> | null;
        SessionId: string | null;
        AudioUrl: string | null;
        SentenceInfoSet: Array<SentenceInfo> | null;
        Status: string | null;
        SuggestedScore: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.AudioUrl = 'AudioUrl' in params ? params.AudioUrl : null;

        if (params.SentenceInfoSet) {
            this.SentenceInfoSet = new Array();
            for (let z in params.SentenceInfoSet) {
                let obj = new SentenceInfo();
                obj.deserialize(params.SentenceInfoSet[z]);
                this.SentenceInfoSet.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    SentenceInfo: SentenceInfo,
    InitOralProcessRequest: InitOralProcessRequest,
    Keyword: Keyword,
    KeywordEvaluateRequest: KeywordEvaluateRequest,
    TransmitOralProcessRequest: TransmitOralProcessRequest,
    TransmitOralProcessResponse: TransmitOralProcessResponse,
    InitOralProcessResponse: InitOralProcessResponse,
    KeywordEvaluateResponse: KeywordEvaluateResponse,
    PhoneInfo: PhoneInfo,
    WordRsp: WordRsp,
    KeywordScore: KeywordScore,
    TransmitOralProcessWithInitRequest: TransmitOralProcessWithInitRequest,
    TransmitOralProcessWithInitResponse: TransmitOralProcessWithInitResponse,

}
