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
 * TextTranslateBatch请求参数结构体
 * @class
 */
class TextTranslateBatchRequest extends AbstractModel {

    Source: string | null
    
    Target: string | null
    
    ProjectId: number | null
    
    SourceTextList: Array<string> | null
    
    constructor(){
        super();

        /**
         * 源语言，支持： 
auto：自动识别（识别为一种语言）
zh：简体中文
zh-TW：繁体中文
en：英语
ja：日语
ko：韩语
fr：法语
es：西班牙语
it：意大利语
de：德语
tr：土耳其语
ru：俄语
pt：葡萄牙语
vi：越南语
id：印尼语
th：泰语
ms：马来西亚语
ar：阿拉伯语
hi：印地语
         */
        this.Source = null;

        /**
         * 目标语言，各源语言的目标语言支持列表如下

<li> zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>en（英语）：zh（中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）</li>
<li>ja（日语）：zh（中文）、en（英语）、ko（韩语）</li>
<li>ko（韩语）：zh（中文）、en（英语）、ja（日语）</li>
<li>fr（法语）：zh（中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>es（西班牙语）：zh（中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>it（意大利语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>de（德语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>tr（土耳其语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）</li>
<li>ru（俄语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）</li>
<li>pt（葡萄牙语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）</li>
<li>vi（越南语）：zh（中文）、en（英语）</li>
<li>id（印尼语）：zh（中文）、en（英语）</li>
<li>th（泰语）：zh（中文）、en（英语）</li>
<li>ms（马来语）：zh（中文）、en（英语）</li>
<li>ar（阿拉伯语）：en（英语）</li>
<li>hi（印地语）：en（英语）</li>
         */
        this.Target = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         */
        this.ProjectId = null;

        /**
         * 待翻译的文本列表，批量接口可以以数组方式在一次请求中填写多个待翻译文本。文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度总和需要低于2000。
         */
        this.SourceTextList = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Source: string | null;
        Target: string | null;
        ProjectId: number | null;
        SourceTextList: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SourceTextList = 'SourceTextList' in params ? params.SourceTextList : null;

    }
}

/**
 * ImageTranslate返回参数结构体
 * @class
 */
class ImageTranslateResponse extends AbstractModel {

    SessionUuid: string | null
    
    Source: string | null
    
    Target: string | null
    
    ImageRecord: ImageRecord | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 请求的SessionUuid返回
         */
        this.SessionUuid = null;

        /**
         * 源语言
         */
        this.Source = null;

        /**
         * 目标语言
         */
        this.Target = null;

        /**
         * 图片翻译结果，翻译结果按识别的文本每一行独立翻译，后续会推出按段落划分并翻译的版本
         */
        this.ImageRecord = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SessionUuid: string | null;
        Source: string | null;
        Target: string | null;
        ImageRecord: ImageRecord | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;

        if (params.ImageRecord) {
            let obj = new ImageRecord();
            obj.deserialize(params.ImageRecord)
            this.ImageRecord = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SpeechTranslate返回参数结构体
 * @class
 */
class SpeechTranslateResponse extends AbstractModel {

    SessionUuid: string | null
    
    RecognizeStatus: number | null
    
    SourceText: string | null
    
    TargetText: string | null
    
    Seq: number | null
    
    Source: string | null
    
    Target: string | null
    
    VadSeq: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 请求的SessionUuid直接返回
         */
        this.SessionUuid = null;

        /**
         * 语音识别状态 1-进行中 0-完成
         */
        this.RecognizeStatus = null;

        /**
         * 识别出的原文
         */
        this.SourceText = null;

        /**
         * 翻译出的译文
         */
        this.TargetText = null;

        /**
         * 第几个语音分片
         */
        this.Seq = null;

        /**
         * 原语言
         */
        this.Source = null;

        /**
         * 目标语言
         */
        this.Target = null;

        /**
         * 当请求的Mode参数填写bvad是，启动VadSeq。此时Seq会被设置为后台vad（静音检测）后的新序号，而VadSeq代表客户端原始Seq值
         */
        this.VadSeq = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SessionUuid: string | null;
        RecognizeStatus: number | null;
        SourceText: string | null;
        TargetText: string | null;
        Seq: number | null;
        Source: string | null;
        Target: string | null;
        VadSeq: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.RecognizeStatus = 'RecognizeStatus' in params ? params.RecognizeStatus : null;
        this.SourceText = 'SourceText' in params ? params.SourceText : null;
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.VadSeq = 'VadSeq' in params ? params.VadSeq : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图片翻译结果
 * @class
 */
class ImageRecord extends AbstractModel {

    Value: Array<ItemValue> | null
    
    constructor(){
        super();

        /**
         * 图片翻译结果
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Value: Array<ItemValue> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new ItemValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * LanguageDetect请求参数结构体
 * @class
 */
class LanguageDetectRequest extends AbstractModel {

    Text: string | null
    
    ProjectId: number | null
    
    constructor(){
        super();

        /**
         * 待识别的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败。单次请求的文本长度需要低于2000。
         */
        this.Text = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Text: string | null;
        ProjectId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * TextTranslateBatch返回参数结构体
 * @class
 */
class TextTranslateBatchResponse extends AbstractModel {

    Source: string | null
    
    Target: string | null
    
    TargetTextList: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 源语言，详见入参Target
         */
        this.Source = null;

        /**
         * 目标语言，详见入参Target
         */
        this.Target = null;

        /**
         * 翻译后的文本列表
         */
        this.TargetTextList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Source: string | null;
        Target: string | null;
        TargetTextList: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.TargetTextList = 'TargetTextList' in params ? params.TargetTextList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LanguageDetect返回参数结构体
 * @class
 */
class LanguageDetectResponse extends AbstractModel {

    Lang: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 识别出的语言种类，参考语言列表
<li> zh : 中文 </li> <li> en : 英文 </li><li> jp : 日语 </li> <li> kr : 韩语 </li><li> de : 德语 </li><li> fr : 法语 </li><li> es : 西班牙文 </li> <li> it : 意大利文 </li><li> tr : 土耳其文 </li><li> ru : 俄文 </li><li> pt : 葡萄牙文 </li><li> vi : 越南文 </li><li> id : 印度尼西亚文 </li><li> ms : 马来西亚文 </li><li> th : 泰文 </li>
         */
        this.Lang = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Lang: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 翻译结果
 * @class
 */
class ItemValue extends AbstractModel {

    SourceText: string | null
    
    TargetText: string | null
    
    X: number | null
    
    Y: number | null
    
    W: number | null
    
    H: number | null
    
    constructor(){
        super();

        /**
         * 识别出的源文
         */
        this.SourceText = null;

        /**
         * 翻译后的译文
         */
        this.TargetText = null;

        /**
         * X坐标
         */
        this.X = null;

        /**
         * Y坐标
         */
        this.Y = null;

        /**
         * 宽度
         */
        this.W = null;

        /**
         * 高度
         */
        this.H = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SourceText: string | null;
        TargetText: string | null;
        X: number | null;
        Y: number | null;
        W: number | null;
        H: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SourceText = 'SourceText' in params ? params.SourceText : null;
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.W = 'W' in params ? params.W : null;
        this.H = 'H' in params ? params.H : null;

    }
}

/**
 * TextTranslate返回参数结构体
 * @class
 */
class TextTranslateResponse extends AbstractModel {

    TargetText: string | null
    
    Source: string | null
    
    Target: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 翻译后的文本
         */
        this.TargetText = null;

        /**
         * 源语言，详见入参Target
         */
        this.Source = null;

        /**
         * 目标语言，详见入参Target
         */
        this.Target = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TargetText: string | null;
        Source: string | null;
        Target: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SpeechTranslate请求参数结构体
 * @class
 */
class SpeechTranslateRequest extends AbstractModel {

    SessionUuid: string | null
    
    Source: string | null
    
    Target: string | null
    
    AudioFormat: number | null
    
    Seq: number | null
    
    IsEnd: number | null
    
    Data: string | null
    
    ProjectId: number | null
    
    Mode: string | null
    
    TransType: number | null
    
    constructor(){
        super();

        /**
         * 一段完整的语音对应一个SessionUuid
         */
        this.SessionUuid = null;

        /**
         * 音频中的语言类型，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
         */
        this.Source = null;

        /**
         * 翻译目标语言类型，支持的语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
         */
        this.Target = null;

        /**
         * pcm : 146   speex : 16779154   mp3 : 83886080
         */
        this.AudioFormat = null;

        /**
         * 语音分片的序号，从0开始
         */
        this.Seq = null;

        /**
         * 是否最后一片语音分片，0-否，1-是
         */
        this.IsEnd = null;

        /**
         * 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。
         */
        this.Data = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         */
        this.ProjectId = null;

        /**
         * 识别模式，该参数已废弃
         */
        this.Mode = null;

        /**
         * 该参数已废弃
         */
        this.TransType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SessionUuid: string | null;
        Source: string | null;
        Target: string | null;
        AudioFormat: number | null;
        Seq: number | null;
        IsEnd: number | null;
        Data: string | null;
        ProjectId: number | null;
        Mode: string | null;
        TransType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.AudioFormat = 'AudioFormat' in params ? params.AudioFormat : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.TransType = 'TransType' in params ? params.TransType : null;

    }
}

/**
 * ImageTranslate请求参数结构体
 * @class
 */
class ImageTranslateRequest extends AbstractModel {

    SessionUuid: string | null
    
    Scene: string | null
    
    Data: string | null
    
    Source: string | null
    
    Target: string | null
    
    ProjectId: number | null
    
    constructor(){
        super();

        /**
         * 唯一id，返回时原样返回
         */
        this.SessionUuid = null;

        /**
         * doc:文档扫描
         */
        this.Scene = null;

        /**
         * 图片数据的Base64字符串，图片大小上限为4M，建议对源图片进行一定程度压缩
         */
        this.Data = null;

        /**
         * 源语言，支持语言列表：<li> auto：自动识别（识别为一种语言）</li> <li>zh：简体中文</li> <li>zh-TW：繁体中文</li> <li>en：英语</li> <li>ja：日语</li> <li>ko：韩语</li> <li>ru：俄语</li> <li>fr：法语</li> <li>de：德语</li> <li>it：意大利语</li> <li>es：西班牙语</li> <li>pt：葡萄牙语</li> <li>ms：马来西亚语</li> <li>th：泰语</li><li>vi：越南语</li>
         */
        this.Source = null;

        /**
         * 目标语言，各源语言的目标语言支持列表如下：
<li>zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）</li>
<li>zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）</li>
<li>en（英语）：zh（中文）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）</li>
<li>ja（日语）：zh（中文）、en（英语）、ko（韩语）</li>
<li>ko（韩语）：zh（中文）、en（英语）、ja（日语）</li>
<li>ru：俄语：zh（中文）、en（英语）</li>
<li>fr：法语：zh（中文）、en（英语）</li>
<li>de：德语：zh（中文）、en（英语）</li>
<li>it：意大利语：zh（中文）、en（英语）</li>
<li>es：西班牙语：zh（中文）、en（英语）</li>
<li>pt：葡萄牙语：zh（中文）、en（英语）</li>
<li>ms：马来西亚语：zh（中文）、en（英语）</li>
<li>th：泰语：zh（中文）、en（英语）</li>
<li>vi：越南语：zh（中文）、en（英语）</li>
         */
        this.Target = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SessionUuid: string | null;
        Scene: string | null;
        Data: string | null;
        Source: string | null;
        Target: string | null;
        ProjectId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * TextTranslate请求参数结构体
 * @class
 */
class TextTranslateRequest extends AbstractModel {

    SourceText: string | null
    
    Source: string | null
    
    Target: string | null
    
    ProjectId: number | null
    
    UntranslatedText: string | null
    
    constructor(){
        super();

        /**
         * 待翻译的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度需要低于2000。
         */
        this.SourceText = null;

        /**
         * 源语言，支持：
auto：自动识别（识别为一种语言）
zh：简体中文
zh-TW：繁体中文
en：英语
ja：日语
ko：韩语
fr：法语
es：西班牙语
it：意大利语
de：德语
tr：土耳其语
ru：俄语
pt：葡萄牙语
vi：越南语
id：印尼语
th：泰语
ms：马来西亚语
ar：阿拉伯语
hi：印地语
         */
        this.Source = null;

        /**
         * 目标语言，各源语言的目标语言支持列表如下

<li> zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>en（英语）：zh（中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）</li>
<li>ja（日语）：zh（中文）、en（英语）、ko（韩语）</li>
<li>ko（韩语）：zh（中文）、en（英语）、ja（日语）</li>
<li>fr（法语）：zh（中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>es（西班牙语）：zh（中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>it（意大利语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>de（德语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>tr（土耳其语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）</li>
<li>ru（俄语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）</li>
<li>pt（葡萄牙语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）</li>
<li>vi（越南语）：zh（中文）、en（英语）</li>
<li>id（印尼语）：zh（中文）、en（英语）</li>
<li>th（泰语）：zh（中文）、en（英语）</li>
<li>ms（马来语）：zh（中文）、en（英语）</li>
<li>ar（阿拉伯语）：en（英语）</li>
<li>hi（印地语）：en（英语）</li>
         */
        this.Target = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         */
        this.ProjectId = null;

        /**
         * 用来标记不希望被翻译的文本内容，如句子中的特殊符号、人名、地名等；每次请求只支持配置一个不被翻译的单词；仅支持配置人名、地名等名词，不要配置动词或短语，否则会影响翻译结果。
         */
        this.UntranslatedText = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SourceText: string | null;
        Source: string | null;
        Target: string | null;
        ProjectId: number | null;
        UntranslatedText: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SourceText = 'SourceText' in params ? params.SourceText : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.UntranslatedText = 'UntranslatedText' in params ? params.UntranslatedText : null;

    }
}

export const Models = {
    TextTranslateBatchRequest: TextTranslateBatchRequest,
    ImageTranslateResponse: ImageTranslateResponse,
    SpeechTranslateResponse: SpeechTranslateResponse,
    ImageRecord: ImageRecord,
    LanguageDetectRequest: LanguageDetectRequest,
    TextTranslateBatchResponse: TextTranslateBatchResponse,
    LanguageDetectResponse: LanguageDetectResponse,
    ItemValue: ItemValue,
    TextTranslateResponse: TextTranslateResponse,
    SpeechTranslateRequest: SpeechTranslateRequest,
    ImageTranslateRequest: ImageTranslateRequest,
    TextTranslateRequest: TextTranslateRequest,

}
