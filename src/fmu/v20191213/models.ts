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
 * DeleteModel请求参数结构体
 * @class
 */
class DeleteModelRequest extends AbstractModel {

    ModelId: string | null
    
    constructor(){
        super();

        /**
         * 素材ID。
         */
        this.ModelId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModelId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;

    }
}

/**
 * TryLipstickPic请求参数结构体
 * @class
 */
class TryLipstickPicRequest extends AbstractModel {

    LipColorInfos: Array<LipColorInfo> | null
    
    Image: string | null
    
    Url: string | null
    
    RspImgType: string | null
    
    constructor(){
        super();

        /**
         * 唇色信息。 
您可以输入最多3个 LipColorInfo 来实现给一张图中的最多3张人脸试唇色。
         */
        this.LipColorInfos = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过6M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Image = null;

        /**
         * 图片的 Url ，对应图片 base64 编码后大小不可超过6M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Url = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LipColorInfos: Array<LipColorInfo> | null;
        Image: string | null;
        Url: string | null;
        RspImgType: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.LipColorInfos) {
            this.LipColorInfos = new Array();
            for (let z in params.LipColorInfos) {
                let obj = new LipColorInfo();
                obj.deserialize(params.LipColorInfos[z]);
                this.LipColorInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * GetModelList请求参数结构体
 * @class
 */
class GetModelListRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 起始序号，默认值为0。
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为100。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * TryLipstickPic返回参数结构体
 * @class
 */
class TryLipstickPicResponse extends AbstractModel {

    ResultImage: string | null
    
    ResultUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
         */
        this.ResultUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultImage: string | null;
        ResultUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 唇色信息
 * @class
 */
class LipColorInfo extends AbstractModel {

    RGBA: RGBAInfo | null
    
    ModelId: string | null
    
    FaceRect: FaceRect | null
    
    ModelAlpha: number | null
    
    constructor(){
        super();

        /**
         * 使用RGBA模型试唇色。
         */
        this.RGBA = null;

        /**
         * 使用已注册的 LUT 文件试唇色。  
ModelId 和 RGBA 两个参数只需提供一个，若都提供只使用 ModelId。
         */
        this.ModelId = null;

        /**
         * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
         */
        this.FaceRect = null;

        /**
         * 涂妆浓淡[0,100]。建议取值50。本参数仅控制ModelId对应的涂妆浓淡。
         */
        this.ModelAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RGBA: RGBAInfo | null;
        ModelId: string | null;
        FaceRect: FaceRect | null;
        ModelAlpha: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.RGBA) {
            let obj = new RGBAInfo();
            obj.deserialize(params.RGBA)
            this.RGBA = obj;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }
        this.ModelAlpha = 'ModelAlpha' in params ? params.ModelAlpha : null;

    }
}

/**
 * CreateModel请求参数结构体
 * @class
 */
class CreateModelRequest extends AbstractModel {

    LUTFile: string | null
    
    Description: string | null
    
    constructor(){
        super();

        /**
         * 用于试唇色，要求必须是LUT 格式的cube文件转换成512*512的PNG图片。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。了解 [cube文件转png图片小工具](http://yyb.gtimg.com/aiplat/static/qcloud-cube-to-png.html)。
         */
        this.LUTFile = null;

        /**
         * 文件描述信息，可用于备注。
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LUTFile: string | null;
        Description: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.LUTFile = 'LUTFile' in params ? params.LUTFile : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * RGBA通道信息
 * @class
 */
class RGBAInfo extends AbstractModel {

    R: number | null
    
    G: number | null
    
    B: number | null
    
    A: number | null
    
    constructor(){
        super();

        /**
         * R通道数值。[0,255]。
         */
        this.R = null;

        /**
         * G通道数值。[0,255]。
         */
        this.G = null;

        /**
         * B通道数值。[0,255]。
         */
        this.B = null;

        /**
         * A通道数值。[0,100]。建议取值50。
         */
        this.A = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        R: number | null;
        G: number | null;
        B: number | null;
        A: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.R = 'R' in params ? params.R : null;
        this.G = 'G' in params ? params.G : null;
        this.B = 'B' in params ? params.B : null;
        this.A = 'A' in params ? params.A : null;

    }
}

/**
 * GetModelList返回参数结构体
 * @class
 */
class GetModelListResponse extends AbstractModel {

    ModelIdNum: number | null
    
    ModelInfos: Array<ModelInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唇色素材总数量。
         */
        this.ModelIdNum = null;

        /**
         * 素材数据
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ModelInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModelIdNum: number | null;
        ModelInfos: Array<ModelInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModelIdNum = 'ModelIdNum' in params ? params.ModelIdNum : null;

        if (params.ModelInfos) {
            this.ModelInfos = new Array();
            for (let z in params.ModelInfos) {
                let obj = new ModelInfo();
                obj.deserialize(params.ModelInfos[z]);
                this.ModelInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LUT素材信息
 * @class
 */
class ModelInfo extends AbstractModel {

    ModelId: string | null
    
    LUTFileUrl: string | null
    
    Description: string | null
    
    constructor(){
        super();

        /**
         * 唇色素材ID
         */
        this.ModelId = null;

        /**
         * 唇色素材 url 。 LUT 文件 url 5分钟有效。
         */
        this.LUTFileUrl = null;

        /**
         * 文件描述信息。
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModelId: string | null;
        LUTFileUrl: string | null;
        Description: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.LUTFileUrl = 'LUTFileUrl' in params ? params.LUTFileUrl : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 人脸框信息
 * @class
 */
class FaceRect extends AbstractModel {

    X: number | null
    
    Y: number | null
    
    Width: number | null
    
    Height: number | null
    
    constructor(){
        super();

        /**
         * 人脸框左上角横坐标。
         */
        this.X = null;

        /**
         * 人脸框左上角纵坐标。
         */
        this.Y = null;

        /**
         * 人脸框宽度。
         */
        this.Width = null;

        /**
         * 人脸框高度。
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        X: number | null;
        Y: number | null;
        Width: number | null;
        Height: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * BeautifyPic请求参数结构体
 * @class
 */
class BeautifyPicRequest extends AbstractModel {

    Image: string | null
    
    Url: string | null
    
    Whitening: number | null
    
    Smoothing: number | null
    
    FaceLifting: number | null
    
    EyeEnlarging: number | null
    
    RspImgType: string | null
    
    constructor(){
        super();

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。 
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Url = null;

        /**
         * 美白程度，取值范围[0,100]。0不美白，100代表最高程度。默认值30。
         */
        this.Whitening = null;

        /**
         * 磨皮程度，取值范围[0,100]。0不磨皮，100代表最高程度。默认值10。
         */
        this.Smoothing = null;

        /**
         * 瘦脸程度，取值范围[0,100]。0不瘦脸，100代表最高程度。默认值70。
         */
        this.FaceLifting = null;

        /**
         * 大眼程度，取值范围[0,100]。0不大眼，100代表最高程度。默认值70。
         */
        this.EyeEnlarging = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Image: string | null;
        Url: string | null;
        Whitening: number | null;
        Smoothing: number | null;
        FaceLifting: number | null;
        EyeEnlarging: number | null;
        RspImgType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Whitening = 'Whitening' in params ? params.Whitening : null;
        this.Smoothing = 'Smoothing' in params ? params.Smoothing : null;
        this.FaceLifting = 'FaceLifting' in params ? params.FaceLifting : null;
        this.EyeEnlarging = 'EyeEnlarging' in params ? params.EyeEnlarging : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * CreateModel返回参数结构体
 * @class
 */
class CreateModelResponse extends AbstractModel {

    ModelId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唇色素材ID。
         */
        this.ModelId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ModelId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteModel返回参数结构体
 * @class
 */
class DeleteModelResponse extends AbstractModel {

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
 * BeautifyPic返回参数结构体
 * @class
 */
class BeautifyPicResponse extends AbstractModel {

    ResultImage: string | null
    
    ResultUrl: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
         */
        this.ResultUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResultImage: string | null;
        ResultUrl: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    DeleteModelRequest: DeleteModelRequest,
    TryLipstickPicRequest: TryLipstickPicRequest,
    GetModelListRequest: GetModelListRequest,
    TryLipstickPicResponse: TryLipstickPicResponse,
    LipColorInfo: LipColorInfo,
    CreateModelRequest: CreateModelRequest,
    RGBAInfo: RGBAInfo,
    GetModelListResponse: GetModelListResponse,
    ModelInfo: ModelInfo,
    FaceRect: FaceRect,
    BeautifyPicRequest: BeautifyPicRequest,
    CreateModelResponse: CreateModelResponse,
    DeleteModelResponse: DeleteModelResponse,
    BeautifyPicResponse: BeautifyPicResponse,

}
