"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const abstract_model_1 = require("../../common/abstract_model");
/**
 * 素材信息
 * @class
 */
class PublicMaterialInfos extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材Id
         */
        this.MaterialId = null;
        /**
         * 素材状态
         */
        this.MaterialStatus = null;
        /**
         * 脸型参数P图
         */
        this.BlendParamPtu = null;
        /**
         * 五官参数P图
         */
        this.PositionParamPtu = null;
        /**
         * 脸型参数优图
         */
        this.BlendParamYoutu = null;
        /**
         * 五官参数优图
         */
        this.PositionParamYoutu = null;
        /**
         * 素材COS地址
         */
        this.Url = null;
        /**
         * 创建时间
         */
        this.CreateTime = null;
        /**
         * 修改时间
         */
        this.UpdateTime = null;
        /**
         * 人脸信息
         */
        this.MaterialFaceList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.MaterialStatus = 'MaterialStatus' in params ? params.MaterialStatus : null;
        this.BlendParamPtu = 'BlendParamPtu' in params ? params.BlendParamPtu : null;
        this.PositionParamPtu = 'PositionParamPtu' in params ? params.PositionParamPtu : null;
        this.BlendParamYoutu = 'BlendParamYoutu' in params ? params.BlendParamYoutu : null;
        this.PositionParamYoutu = 'PositionParamYoutu' in params ? params.PositionParamYoutu : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        if (params.MaterialFaceList) {
            this.MaterialFaceList = new Array();
            for (let z in params.MaterialFaceList) {
                let obj = new MaterialFaceList();
                obj.deserialize(params.MaterialFaceList[z]);
                this.MaterialFaceList.push(obj);
            }
        }
    }
}
/**
 * FaceFusion请求参数结构体
 * @class
 */
class FaceFusionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 活动 ID，请在人脸融合控制台查看。
         */
        this.ProjectId = null;
        /**
         * 素材 ID，请在人脸融合控制台查看。
         */
        this.ModelId = null;
        /**
         * 图片 base64 数据。请确保人脸为正脸，无旋转。若某些手机拍摄后人脸被旋转，请使用图片的 EXIF 信息对图片进行旋转处理；请勿在 base64 数据中包含头部，如“data:image/jpeg;base64,”。
         */
        this.Image = null;
        /**
         * 返回图像方式（url 或 base64) ，二选一。url有效期为30天。
         */
        this.RspImgType = null;
        /**
         * 历史遗留字段，无需填写。因为融合只需提取人脸特征，不需要鉴黄。
         */
        this.PornDetect = null;
        /**
         * 0表示不需要鉴政，1表示需要鉴政。默认值为0。
请注意，鉴政服务开启后，您需要根据返回结果自行判断是否调整您的业务逻辑。例如提示您的用户图片非法，请更换图片。
         */
        this.CelebrityIdentify = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;
        this.PornDetect = 'PornDetect' in params ? params.PornDetect : null;
        this.CelebrityIdentify = 'CelebrityIdentify' in params ? params.CelebrityIdentify : null;
    }
}
/**
 * FaceFusion返回参数结构体
 * @class
 */
class FaceFusionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。
         */
        this.Image = null;
        /**
         * 鉴政结果
         */
        this.ReviewResultSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        if (params.ReviewResultSet) {
            this.ReviewResultSet = new Array();
            for (let z in params.ReviewResultSet) {
                let obj = new FuseFaceReviewResult();
                obj.deserialize(params.ReviewResultSet[z]);
                this.ReviewResultSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeMaterialList返回参数结构体
 * @class
 */
class DescribeMaterialListResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材列表数据
         */
        this.MaterialInfos = null;
        /**
         * 素材条数
         */
        this.Count = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.MaterialInfos) {
            this.MaterialInfos = new Array();
            for (let z in params.MaterialInfos) {
                let obj = new PublicMaterialInfos();
                obj.deserialize(params.MaterialInfos[z]);
                this.MaterialInfos.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 人脸信息
 * @class
 */
class MaterialFaceList extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 人脸序号
         */
        this.FaceId = null;
        /**
         * 人脸框信息
         */
        this.FaceInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        if (params.FaceInfo) {
            let obj = new FaceInfo();
            obj.deserialize(params.FaceInfo);
            this.FaceInfo = obj;
        }
    }
}
/**
 * 人脸信息
 * @class
 */
class FaceInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 人脸框的横坐标
         */
        this.X = null;
        /**
         * 人脸框的纵坐标
         */
        this.Y = null;
        /**
         * 人脸框的宽度
         */
        this.Width = null;
        /**
         * 人脸框的高度
         */
        this.Height = null;
    }
    /**
     * @private
     */
    deserialize(params) {
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
 * 人脸融合鉴黄鉴政人脸信息
 * @class
 */
class FuseFaceReviewDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 保留字段
         */
        this.Field = null;
        /**
         * 人员名称
         */
        this.Label = null;
        /**
         * 对应识别label的置信度，分数越高意味涉政可能性越大。
0到70，Suggestion建议为PASS；
70到80，Suggestion建议为REVIEW；
80到100，Suggestion建议为BLOCK。
         */
        this.Confidence = null;
        /**
         * 识别场景的审核结论：
PASS：正常
REVIEW：疑似
BLOCK：违规
         */
        this.Suggestion = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
    }
}
/**
 * 人脸图片和待被融合的素材模板图的人脸位置信息。
 * @class
 */
class MergeInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 输入图片base64
         */
        this.Image = null;
        /**
         * 输入图片url
         */
        this.Url = null;
        /**
         * 上传的图片人脸位置信息（人脸框）
         */
        this.InputImageFaceRect = null;
        /**
         * 控制台上传的素材人脸ID
         */
        this.TemplateFaceID = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        if (params.InputImageFaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.InputImageFaceRect);
            this.InputImageFaceRect = obj;
        }
        this.TemplateFaceID = 'TemplateFaceID' in params ? params.TemplateFaceID : null;
    }
}
/**
 * 人脸融合鉴黄鉴政返回参数item
 * @class
 */
class FuseFaceReviewResult extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 保留字段
         */
        this.Category = null;
        /**
         * 状态码， 0为处理成功，其他值为处理失败
         */
        this.Code = null;
        /**
         * 对应状态码信息描述
         */
        this.CodeDescription = null;
        /**
         * 保留字段
         */
        this.Confidence = null;
        /**
         * 保留字段
         */
        this.Suggestion = null;
        /**
         * 审核详细内容
         */
        this.DetailSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Category = 'Category' in params ? params.Category : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.CodeDescription = 'CodeDescription' in params ? params.CodeDescription : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new FuseFaceReviewDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }
    }
}
/**
 * FuseFace返回参数结构体
 * @class
 */
class FuseFaceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。
         */
        this.FusedImage = null;
        /**
         * 鉴政结果。该数组的顺序和请求中mergeinfo的顺序一致，一一对应
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ReviewResultSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FusedImage = 'FusedImage' in params ? params.FusedImage : null;
        if (params.ReviewResultSet) {
            this.ReviewResultSet = new Array();
            for (let z in params.ReviewResultSet) {
                let obj = new FuseFaceReviewResult();
                obj.deserialize(params.ReviewResultSet[z]);
                this.ReviewResultSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * FuseFace请求参数结构体
 * @class
 */
class FuseFaceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 活动 ID，请在人脸融合控制台查看。
         */
        this.ProjectId = null;
        /**
         * 素材 ID，请在人脸融合控制台查看。
         */
        this.ModelId = null;
        /**
         * 返回图像方式（url 或 base64) ，二选一。url有效期为30天。
         */
        this.RspImgType = null;
        /**
         * 用户人脸图片、素材模板图的人脸位置信息。
         */
        this.MergeInfos = null;
        /**
         * 脸型融合比例，数值越高，融合后的脸型越像素材人物。取值范围[0,100]
若此参数不填写，则使用人脸融合控制台中脸型参数数值。（换脸版算法暂不支持此参数调整）
         */
        this.FuseProfileDegree = null;
        /**
         * 五官融合比例，数值越高，融合后的五官越像素材人物。取值范围[0,100]
若此参数不填写，则使用人脸融合控制台中五官参数数值。（换脸版算法暂不支持此参数调整）
         */
        this.FuseFaceDegree = null;
        /**
         * 0表示不需要鉴政，1表示需要鉴政。默认值为0。
请注意，鉴政服务开启后，您需要根据返回结果自行判断是否调整您的业务逻辑。例如提示您的用户图片非法，请更换图片。
         */
        this.CelebrityIdentify = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;
        if (params.MergeInfos) {
            this.MergeInfos = new Array();
            for (let z in params.MergeInfos) {
                let obj = new MergeInfo();
                obj.deserialize(params.MergeInfos[z]);
                this.MergeInfos.push(obj);
            }
        }
        this.FuseProfileDegree = 'FuseProfileDegree' in params ? params.FuseProfileDegree : null;
        this.FuseFaceDegree = 'FuseFaceDegree' in params ? params.FuseFaceDegree : null;
        this.CelebrityIdentify = 'CelebrityIdentify' in params ? params.CelebrityIdentify : null;
    }
}
/**
 * 人脸框信息
 * @class
 */
class FaceRect extends abstract_model_1.AbstractModel {
    constructor() {
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
    deserialize(params) {
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
 * DescribeMaterialList请求参数结构体
 * @class
 */
class DescribeMaterialListRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 活动Id
         */
        this.ActivityId = null;
        /**
         * 素材Id
         */
        this.MaterialId = null;
        /**
         * 每次拉取条数
         */
        this.Limit = null;
        /**
         * 偏移量
         */
        this.Offset = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
exports.Models = {
    PublicMaterialInfos: PublicMaterialInfos,
    FaceFusionRequest: FaceFusionRequest,
    FaceFusionResponse: FaceFusionResponse,
    DescribeMaterialListResponse: DescribeMaterialListResponse,
    MaterialFaceList: MaterialFaceList,
    FaceInfo: FaceInfo,
    FuseFaceReviewDetail: FuseFaceReviewDetail,
    MergeInfo: MergeInfo,
    FuseFaceReviewResult: FuseFaceReviewResult,
    FuseFaceResponse: FuseFaceResponse,
    FuseFaceRequest: FuseFaceRequest,
    FaceRect: FaceRect,
    DescribeMaterialListRequest: DescribeMaterialListRequest,
};
//# sourceMappingURL=models.js.map