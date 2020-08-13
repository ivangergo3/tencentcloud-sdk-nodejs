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
 * SegmentPortraitPic返回参数结构体
 * @class
 */
class SegmentPortraitPicResponse extends AbstractModel {

    ResultImage: string | null
    
    ResultMask: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 处理后的图片 base64 数据，透明背景图
         */
        this.ResultImage = null;

        /**
         * 一个通过 Base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255）
         */
        this.ResultMask = null;

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
        ResultMask: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultMask = 'ResultMask' in params ? params.ResultMask : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectBodyJoints返回参数结构体
 * @class
 */
class DetectBodyJointsResponse extends AbstractModel {

    BodyJointsResults: Array<BodyJointsResult> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 图中检测出的人体框和人体关键点， 包含14个人体关键点的坐标，建议根据人体框置信度筛选出合格的人体；
         */
        this.BodyJointsResults = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BodyJointsResults: Array<BodyJointsResult> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.BodyJointsResults) {
            this.BodyJointsResults = new Array();
            for (let z in params.BodyJointsResults) {
                let obj = new BodyJointsResult();
                obj.deserialize(params.BodyJointsResults[z]);
                this.BodyJointsResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别出的最相似候选人。
 * @class
 */
class Candidate extends AbstractModel {

    PersonId: string | null
    
    TraceId: string | null
    
    Score: number | null
    
    constructor(){
        super();

        /**
         * 人员ID。
         */
        this.PersonId = null;

        /**
         * 人体轨迹ID。
         */
        this.TraceId = null;

        /**
         * 候选者的匹配得分。 
十万人体库下，误识率百分之五对应的分数为70分；误识率百分之二对应的分数为80分；误识率百分之一对应的分数为90分。
 
二十万人体库下，误识率百分之五对应的分数为80分；误识率百分之二对应的分数为90分；误识率百分之一对应的分数为95分。
 
通常情况建议使用分数80分（保召回）。若希望获得较高精度，建议使用分数90分（保准确）。
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonId: string | null;
        TraceId: string | null;
        Score: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * DeletePerson请求参数结构体
 * @class
 */
class DeletePersonRequest extends AbstractModel {

    PersonId: string | null
    
    constructor(){
        super();

        /**
         * 人员ID。
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
 * ModifyGroup返回参数结构体
 * @class
 */
class ModifyGroupResponse extends AbstractModel {

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
 * 上衣衣袖信息。
 * @class
 */
class UpperBodyClothSleeve extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 上衣衣袖信息, 返回值为以下集合中的一个 {长袖, 短袖}。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * 图中检测出的人体属性信息。
 * @class
 */
class BodyAttributeInfo extends AbstractModel {

    Age: Age | null
    
    Bag: Bag | null
    
    Gender: Gender | null
    
    Orientation: Orientation | null
    
    UpperBodyCloth: UpperBodyCloth | null
    
    LowerBodyCloth: LowerBodyCloth | null
    
    constructor(){
        super();

        /**
         * 人体年龄信息。 
AttributesType 不含 Age 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Age = null;

        /**
         * 人体是否挎包。 
AttributesType 不含 Bag 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Bag = null;

        /**
         * 人体性别信息。 
AttributesType 不含 Gender 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Gender = null;

        /**
         * 人体朝向信息。   
AttributesType 不含 UpperBodyCloth 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Orientation = null;

        /**
         * 人体上衣属性信息。
AttributesType 不含 Orientation 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UpperBodyCloth = null;

        /**
         * 人体下衣属性信息。  
AttributesType 不含 LowerBodyCloth 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LowerBodyCloth = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Age: Age | null;
        Bag: Bag | null;
        Gender: Gender | null;
        Orientation: Orientation | null;
        UpperBodyCloth: UpperBodyCloth | null;
        LowerBodyCloth: LowerBodyCloth | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Age) {
            let obj = new Age();
            obj.deserialize(params.Age)
            this.Age = obj;
        }

        if (params.Bag) {
            let obj = new Bag();
            obj.deserialize(params.Bag)
            this.Bag = obj;
        }

        if (params.Gender) {
            let obj = new Gender();
            obj.deserialize(params.Gender)
            this.Gender = obj;
        }

        if (params.Orientation) {
            let obj = new Orientation();
            obj.deserialize(params.Orientation)
            this.Orientation = obj;
        }

        if (params.UpperBodyCloth) {
            let obj = new UpperBodyCloth();
            obj.deserialize(params.UpperBodyCloth)
            this.UpperBodyCloth = obj;
        }

        if (params.LowerBodyCloth) {
            let obj = new LowerBodyCloth();
            obj.deserialize(params.LowerBodyCloth)
            this.LowerBodyCloth = obj;
        }

    }
}

/**
 * GetGroupList返回参数结构体
 * @class
 */
class GetGroupListResponse extends AbstractModel {

    GroupInfos: Array<GroupInfo> | null
    
    GroupNum: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回的人体库信息。
         */
        this.GroupInfos = null;

        /**
         * 人体库总数量。
         */
        this.GroupNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupInfos: Array<GroupInfo> | null;
        GroupNum: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.GroupInfos) {
            this.GroupInfos = new Array();
            for (let z in params.GroupInfos) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfos[z]);
                this.GroupInfos.push(obj);
            }
        }
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返回的人员库信息。
 * @class
 */
class GroupInfo extends AbstractModel {

    GroupName: string | null
    
    GroupId: string | null
    
    Tag: string | null
    
    BodyModelVersion: string | null
    
    CreationTimestamp: number | null
    
    constructor(){
        super();

        /**
         * 人体库名称。
         */
        this.GroupName = null;

        /**
         * 人体库ID。
         */
        this.GroupId = null;

        /**
         * 人体库信息备注。
         */
        this.Tag = null;

        /**
         * 人体识别所用的算法模型版本。
         */
        this.BodyModelVersion = null;

        /**
         * Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。  
Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 。
         */
        this.CreationTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupName: string | null;
        GroupId: string | null;
        Tag: string | null;
        BodyModelVersion: string | null;
        CreationTimestamp: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.CreationTimestamp = 'CreationTimestamp' in params ? params.CreationTimestamp : null;

    }
}

/**
 * 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。
 * @class
 */
class SegmentationOptions extends AbstractModel {

    Background: boolean | null
    
    Hair: boolean | null
    
    LeftEyebrow: boolean | null
    
    RightEyebrow: boolean | null
    
    LeftEye: boolean | null
    
    RightEye: boolean | null
    
    Nose: boolean | null
    
    UpperLip: boolean | null
    
    LowerLip: boolean | null
    
    Tooth: boolean | null
    
    Mouth: boolean | null
    
    LeftEar: boolean | null
    
    RightEar: boolean | null
    
    Face: boolean | null
    
    Head: boolean | null
    
    Body: boolean | null
    
    Hat: boolean | null
    
    Headdress: boolean | null
    
    Earrings: boolean | null
    
    Necklace: boolean | null
    
    Belongings: boolean | null
    
    constructor(){
        super();

        /**
         * 分割选项-背景
         */
        this.Background = null;

        /**
         * 分割选项-头发
         */
        this.Hair = null;

        /**
         * 分割选项-左眉
         */
        this.LeftEyebrow = null;

        /**
         * 分割选项-右眉
         */
        this.RightEyebrow = null;

        /**
         * 分割选项-左眼
         */
        this.LeftEye = null;

        /**
         * 分割选项-右眼
         */
        this.RightEye = null;

        /**
         * 分割选项-鼻子
         */
        this.Nose = null;

        /**
         * 分割选项-上唇
         */
        this.UpperLip = null;

        /**
         * 分割选项-下唇
         */
        this.LowerLip = null;

        /**
         * 分割选项-牙齿
         */
        this.Tooth = null;

        /**
         * 分割选项-口腔（不包含牙齿）
         */
        this.Mouth = null;

        /**
         * 分割选项-左耳
         */
        this.LeftEar = null;

        /**
         * 分割选项-右耳
         */
        this.RightEar = null;

        /**
         * 分割选项-面部(不包含眼、耳、口、鼻等五官及头发。)
         */
        this.Face = null;

        /**
         * 复合分割选项-头部(包含所有的头部元素，相关装饰除外)
         */
        this.Head = null;

        /**
         * 分割选项-身体（包含脖子）
         */
        this.Body = null;

        /**
         * 分割选项-帽子
         */
        this.Hat = null;

        /**
         * 分割选项-头饰
         */
        this.Headdress = null;

        /**
         * 分割选项-耳环
         */
        this.Earrings = null;

        /**
         * 分割选项-项链
         */
        this.Necklace = null;

        /**
         * 分割选项-随身物品（ 例如伞、包、手机等。 ）
         */
        this.Belongings = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Background: boolean | null;
        Hair: boolean | null;
        LeftEyebrow: boolean | null;
        RightEyebrow: boolean | null;
        LeftEye: boolean | null;
        RightEye: boolean | null;
        Nose: boolean | null;
        UpperLip: boolean | null;
        LowerLip: boolean | null;
        Tooth: boolean | null;
        Mouth: boolean | null;
        LeftEar: boolean | null;
        RightEar: boolean | null;
        Face: boolean | null;
        Head: boolean | null;
        Body: boolean | null;
        Hat: boolean | null;
        Headdress: boolean | null;
        Earrings: boolean | null;
        Necklace: boolean | null;
        Belongings: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Background = 'Background' in params ? params.Background : null;
        this.Hair = 'Hair' in params ? params.Hair : null;
        this.LeftEyebrow = 'LeftEyebrow' in params ? params.LeftEyebrow : null;
        this.RightEyebrow = 'RightEyebrow' in params ? params.RightEyebrow : null;
        this.LeftEye = 'LeftEye' in params ? params.LeftEye : null;
        this.RightEye = 'RightEye' in params ? params.RightEye : null;
        this.Nose = 'Nose' in params ? params.Nose : null;
        this.UpperLip = 'UpperLip' in params ? params.UpperLip : null;
        this.LowerLip = 'LowerLip' in params ? params.LowerLip : null;
        this.Tooth = 'Tooth' in params ? params.Tooth : null;
        this.Mouth = 'Mouth' in params ? params.Mouth : null;
        this.LeftEar = 'LeftEar' in params ? params.LeftEar : null;
        this.RightEar = 'RightEar' in params ? params.RightEar : null;
        this.Face = 'Face' in params ? params.Face : null;
        this.Head = 'Head' in params ? params.Head : null;
        this.Body = 'Body' in params ? params.Body : null;
        this.Hat = 'Hat' in params ? params.Hat : null;
        this.Headdress = 'Headdress' in params ? params.Headdress : null;
        this.Earrings = 'Earrings' in params ? params.Earrings : null;
        this.Necklace = 'Necklace' in params ? params.Necklace : null;
        this.Belongings = 'Belongings' in params ? params.Belongings : null;

    }
}

/**
 * ModifyGroup请求参数结构体
 * @class
 */
class ModifyGroupRequest extends AbstractModel {

    GroupId: string | null
    
    GroupName: string | null
    
    Tag: string | null
    
    constructor(){
        super();

        /**
         * 人体库ID。
         */
        this.GroupId = null;

        /**
         * 人体库名称。
         */
        this.GroupName = null;

        /**
         * 人体库信息备注。
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: string | null;
        GroupName: string | null;
        Tag: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * CreatePerson请求参数结构体
 * @class
 */
class CreatePersonRequest extends AbstractModel {

    GroupId: string | null
    
    PersonName: string | null
    
    PersonId: string | null
    
    Trace: Trace | null
    
    constructor(){
        super();

        /**
         * 待加入的人员库ID。
         */
        this.GroupId = null;

        /**
         * 人员名称。[1，60]个字符，可修改，可重复。
         */
        this.PersonName = null;

        /**
         * 人员ID，单个腾讯云账号下不可修改，不可重复。 
支持英文、数字、-%@#&_，，长度限制64B。
         */
        this.PersonId = null;

        /**
         * 人体轨迹信息。
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: string | null;
        PersonName: string | null;
        PersonId: string | null;
        Trace: Trace | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.Trace) {
            let obj = new Trace();
            obj.deserialize(params.Trace)
            this.Trace = obj;
        }

    }
}

/**
 * ModifyPersonInfo返回参数结构体
 * @class
 */
class ModifyPersonInfoResponse extends AbstractModel {

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
 * 人体轨迹信息
 * @class
 */
class Trace extends AbstractModel {

    Images: Array<string> | null
    
    Urls: Array<string> | null
    
    BodyRects: Array<BodyRect> | null
    
    constructor(){
        super();

        /**
         * 人体轨迹图片 Base64 数组。 
数组长度最小为1最大为5。 
单个图片 base64 编码后大小不可超过2M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Images = null;

        /**
         * 人体轨迹图片 Url 数组。 
数组长度最小为1最大为5。 
单个图片 base64 编码后大小不可超过2M。 
Urls、Images必须提供一个，如果都提供，只使用 Urls。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Urls = null;

        /**
         * 若输入的Images 和 Urls 是已经裁剪后的人体小图，则可以忽略本参数。 
若否，或图片中包含多个人体，则需要通过本参数来指定图片中的人体框。 
顺序对应 Images 或 Urls 中的顺序。  
当不输入本参数时，我们将认为输入图片已是经过裁剪后的人体小图，不会进行人体检测而直接进行特征提取处理。
         */
        this.BodyRects = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Images: Array<string> | null;
        Urls: Array<string> | null;
        BodyRects: Array<BodyRect> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Images = 'Images' in params ? params.Images : null;
        this.Urls = 'Urls' in params ? params.Urls : null;

        if (params.BodyRects) {
            this.BodyRects = new Array();
            for (let z in params.BodyRects) {
                let obj = new BodyRect();
                obj.deserialize(params.BodyRects[z]);
                this.BodyRects.push(obj);
            }
        }

    }
}

/**
 * DeleteGroup请求参数结构体
 * @class
 */
class DeleteGroupRequest extends AbstractModel {

    GroupId: string | null
    
    constructor(){
        super();

        /**
         * 人体库ID。
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * ModifyPersonInfo请求参数结构体
 * @class
 */
class ModifyPersonInfoRequest extends AbstractModel {

    PersonId: string | null
    
    PersonName: string | null
    
    constructor(){
        super();

        /**
         * 人员ID。
         */
        this.PersonId = null;

        /**
         * 人员名称。
         */
        this.PersonName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonId: string | null;
        PersonName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;

    }
}

/**
 * 人体性别信息。 
AttributesType 不含 Gender 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
 * @class
 */
class Gender extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 性别信息，返回值为以下集合中的一个 {男性, 女性}
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * SegmentCustomizedPortraitPic请求参数结构体
 * @class
 */
class SegmentCustomizedPortraitPicRequest extends AbstractModel {

    SegmentationOptions: SegmentationOptions | null
    
    Image: string | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。
         */
        this.SegmentationOptions = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
图片分辨率须小于2000*2000。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Image = null;

        /**
         * 图片的 Url 。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SegmentationOptions: SegmentationOptions | null;
        Image: string | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.SegmentationOptions) {
            let obj = new SegmentationOptions();
            obj.deserialize(params.SegmentationOptions)
            this.SegmentationOptions = obj;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CreateGroup请求参数结构体
 * @class
 */
class CreateGroupRequest extends AbstractModel {

    GroupName: string | null
    
    GroupId: string | null
    
    Tag: string | null
    
    BodyModelVersion: string | null
    
    constructor(){
        super();

        /**
         * 人体库名称，[1,60]个字符，可修改，不可重复。
         */
        this.GroupName = null;

        /**
         * 人体库 ID，不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。
         */
        this.GroupId = null;

        /**
         * 人体库信息备注，[0，40]个字符。
         */
        this.Tag = null;

        /**
         * 人体识别所用的算法模型版本。 
目前入参仅支持 “1.0”1个输入。 默认为"1.0"。  
不同算法模型版本对应的人体识别算法不同，新版本的整体效果会优于旧版本，后续我们将推出更新版本。
         */
        this.BodyModelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupName: string | null;
        GroupId: string | null;
        Tag: string | null;
        BodyModelVersion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;

    }
}

/**
 * 下衣属性信息
 * @class
 */
class LowerBodyCloth extends AbstractModel {

    Color: LowerBodyClothColor | null
    
    Length: LowerBodyClothLength | null
    
    Type: LowerBodyClothType | null
    
    constructor(){
        super();

        /**
         * 下衣颜色信息。
         */
        this.Color = null;

        /**
         * 下衣长度信息 。
         */
        this.Length = null;

        /**
         * 下衣类型信息。
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Color: LowerBodyClothColor | null;
        Length: LowerBodyClothLength | null;
        Type: LowerBodyClothType | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Color) {
            let obj = new LowerBodyClothColor();
            obj.deserialize(params.Color)
            this.Color = obj;
        }

        if (params.Length) {
            let obj = new LowerBodyClothLength();
            obj.deserialize(params.Length)
            this.Length = obj;
        }

        if (params.Type) {
            let obj = new LowerBodyClothType();
            obj.deserialize(params.Type)
            this.Type = obj;
        }

    }
}

/**
 * 上衣纹理信息。
 * @class
 */
class UpperBodyClothTexture extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 上衣纹理信息，返回值为以下集合中的一个, {纯色, 格子, 大色块}。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0], 代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * 人体轨迹信息。
 * @class
 */
class TraceInfo extends AbstractModel {

    TraceId: string | null
    
    BodyIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 人体轨迹ID。
         */
        this.TraceId = null;

        /**
         * 包含的人体轨迹图片Id列表。
         */
        this.BodyIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TraceId: string | null;
        BodyIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.BodyIds = 'BodyIds' in params ? params.BodyIds : null;

    }
}

/**
 * DeleteGroup返回参数结构体
 * @class
 */
class DeleteGroupResponse extends AbstractModel {

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
 * 人体框
 * @class
 */
class BodyRect extends AbstractModel {

    X: number | null
    
    Y: number | null
    
    Width: number | null
    
    Height: number | null
    
    constructor(){
        super();

        /**
         * 人体框左上角横坐标。
         */
        this.X = null;

        /**
         * 人体框左上角纵坐标。
         */
        this.Y = null;

        /**
         * 人体宽度。
         */
        this.Width = null;

        /**
         * 人体高度。
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
 * DetectBody请求参数结构体
 * @class
 */
class DetectBodyRequest extends AbstractModel {

    Image: string | null
    
    Url: string | null
    
    MaxBodyNum: number | null
    
    AttributesOptions: AttributesOptions | null
    
    constructor(){
        super();

        /**
         * 人体图片 Base64 数据。
图片 base64 编码后大小不可超过5M。
图片分辨率不得超过 2048*2048。
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Image = null;

        /**
         * 人体图片 Url 。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片 base64 编码后大小不可超过5M。 
图片分辨率不得超过 2048*2048。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Url = null;

        /**
         * 最多检测的人体数目，默认值为1（仅检测图片中面积最大的那个人体）； 最大值10 ，检测图片中面积最大的10个人体。
         */
        this.MaxBodyNum = null;

        /**
         * 是否返回年龄、性别、朝向等属性。 
可选项有 Age、Bag、Gender、UpperBodyCloth、LowerBodyCloth、Orientation。  
如果此参数为空则为不需要返回。 
需要将属性组成一个用逗号分隔的字符串，属性之间的顺序没有要求。 
关于各属性的详细描述，参见下文出参。 
最多返回面积最大的 5 个人体属性信息，超过 5 个人体（第 6 个及以后的人体）的 BodyAttributesInfo 不具备参考意义。
         */
        this.AttributesOptions = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Image: string | null;
        Url: string | null;
        MaxBodyNum: number | null;
        AttributesOptions: AttributesOptions | null;
    }): void {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.MaxBodyNum = 'MaxBodyNum' in params ? params.MaxBodyNum : null;

        if (params.AttributesOptions) {
            let obj = new AttributesOptions();
            obj.deserialize(params.AttributesOptions)
            this.AttributesOptions = obj;
        }

    }
}

/**
 * 人体年龄信息。 
AttributesType 不含 Age 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
 * @class
 */
class Age extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 人体年龄信息，返回值为以下集合中的一个{小孩,青年,中年,老年}。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * SearchTrace请求参数结构体
 * @class
 */
class SearchTraceRequest extends AbstractModel {

    GroupId: string | null
    
    Trace: Trace | null
    
    MaxPersonNum: number | null
    
    TraceMatchThreshold: number | null
    
    constructor(){
        super();

        /**
         * 希望搜索的人体库ID。
         */
        this.GroupId = null;

        /**
         * 人体轨迹信息。
         */
        this.Trace = null;

        /**
         * 单张被识别的人体轨迹返回的最相似人员数量。
默认值为5，最大值为100。
 例，设MaxPersonNum为8，则返回Top8相似的人员信息。 值越大，需要处理的时间越长。建议不要超过10。
         */
        this.MaxPersonNum = null;

        /**
         * 出参Score中，只有超过TraceMatchThreshold值的结果才会返回。
默认为0。范围[0, 100.0]。
         */
        this.TraceMatchThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: string | null;
        Trace: Trace | null;
        MaxPersonNum: number | null;
        TraceMatchThreshold: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Trace) {
            let obj = new Trace();
            obj.deserialize(params.Trace)
            this.Trace = obj;
        }
        this.MaxPersonNum = 'MaxPersonNum' in params ? params.MaxPersonNum : null;
        this.TraceMatchThreshold = 'TraceMatchThreshold' in params ? params.TraceMatchThreshold : null;

    }
}

/**
 * 人体关键点信息
 * @class
 */
class KeyPointInfo extends AbstractModel {

    KeyPointType: string | null
    
    X: number | null
    
    Y: number | null
    
    constructor(){
        super();

        /**
         * 代表不同位置的人体关键点信息，返回值为以下集合中的一个 [头部,颈部,右肩,右肘,右腕,左肩,左肘,左腕,右髋,右膝,右踝,左髋,左膝,左踝]
         */
        this.KeyPointType = null;

        /**
         * 人体关键点横坐标
         */
        this.X = null;

        /**
         * 人体关键点纵坐标
         */
        this.Y = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        KeyPointType: string | null;
        X: number | null;
        Y: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.KeyPointType = 'KeyPointType' in params ? params.KeyPointType : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;

    }
}

/**
 * DetectBody返回参数结构体
 * @class
 */
class DetectBodyResponse extends AbstractModel {

    BodyDetectResults: Array<BodyDetectResult> | null
    
    BodyModelVersion: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 图中检测出来的人体框。
         */
        this.BodyDetectResults = null;

        /**
         * 人体识别所用的算法模型版本。
         */
        this.BodyModelVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BodyDetectResults: Array<BodyDetectResult> | null;
        BodyModelVersion: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.BodyDetectResults) {
            this.BodyDetectResults = new Array();
            for (let z in params.BodyDetectResults) {
                let obj = new BodyDetectResult();
                obj.deserialize(params.BodyDetectResults[z]);
                this.BodyDetectResults.push(obj);
            }
        }
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人员信息。
 * @class
 */
class PersonInfo extends AbstractModel {

    PersonName: string | null
    
    PersonId: string | null
    
    TraceInfos: Array<TraceInfo> | null
    
    constructor(){
        super();

        /**
         * 人员名称。
         */
        this.PersonName = null;

        /**
         * 人员ID。
         */
        this.PersonId = null;

        /**
         * 包含的人体轨迹图片信息列表。
         */
        this.TraceInfos = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonName: string | null;
        PersonId: string | null;
        TraceInfos: Array<TraceInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.TraceInfos) {
            this.TraceInfos = new Array();
            for (let z in params.TraceInfos) {
                let obj = new TraceInfo();
                obj.deserialize(params.TraceInfos[z]);
                this.TraceInfos.push(obj);
            }
        }

    }
}

/**
 * 人体是否挎包。 
AttributesType 不含 Bag 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
 * @class
 */
class Bag extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 挎包信息，返回值为以下集合中的一个{双肩包, 斜挎包, 手拎包, 无包}。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * SegmentCustomizedPortraitPic返回参数结构体
 * @class
 */
class SegmentCustomizedPortraitPicResponse extends AbstractModel {

    PortraitImage: string | null
    
    MaskImage: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 根据指定标签分割输出的透明背景人像图片的 base64 数据。
         */
        this.PortraitImage = null;

        /**
         * 指定标签处理后的Mask。一个通过 Base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255）
         */
        this.MaskImage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PortraitImage: string | null;
        MaskImage: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PortraitImage = 'PortraitImage' in params ? params.PortraitImage : null;
        this.MaskImage = 'MaskImage' in params ? params.MaskImage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectBodyJoints请求参数结构体
 * @class
 */
class DetectBodyJointsRequest extends AbstractModel {

    Image: string | null
    
    Url: string | null
    
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

    }

    /**
     * @private
     */
    deserialize(params: {
        Image: string | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * SegmentPortraitPic请求参数结构体
 * @class
 */
class SegmentPortraitPicRequest extends AbstractModel {

    Image: string | null
    
    Url: string | null
    
    constructor(){
        super();

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。
图片分辨率须小于2000*2000。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Image = null;

        /**
         * 图片的 Url 。
Url、Image必须提供一个，如果都提供，只使用 Url。
图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Image: string | null;
        Url: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 上衣颜色信息。
 * @class
 */
class UpperBodyClothColor extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 上衣颜色信息，返回值为以下集合中的一个 {红色系, 黄色系, 绿色系, 蓝色系, 黑色系, 灰白色系。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * GetGroupList请求参数结构体
 * @class
 */
class GetGroupListRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 起始序号，默认值为0。
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为1000。
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
 * 图中检测出来的人体框。
 * @class
 */
class BodyDetectResult extends AbstractModel {

    Confidence: number | null
    
    BodyRect: BodyRect | null
    
    BodyAttributeInfo: BodyAttributeInfo | null
    
    constructor(){
        super();

        /**
         * 检测出的人体置信度。 
误识率百分之十对应的阈值是0.14；误识率百分之五对应的阈值是0.32；误识率百分之二对应的阈值是0.62；误识率百分之一对应的阈值是0.81。 
通常情况建议使用阈值0.32，可适用大多数情况。
         */
        this.Confidence = null;

        /**
         * 图中检测出来的人体框
         */
        this.BodyRect = null;

        /**
         * 图中检测出的人体属性信息。
         */
        this.BodyAttributeInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        BodyRect: BodyRect | null;
        BodyAttributeInfo: BodyAttributeInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.BodyRect) {
            let obj = new BodyRect();
            obj.deserialize(params.BodyRect)
            this.BodyRect = obj;
        }

        if (params.BodyAttributeInfo) {
            let obj = new BodyAttributeInfo();
            obj.deserialize(params.BodyAttributeInfo)
            this.BodyAttributeInfo = obj;
        }

    }
}

/**
 * 人体朝向信息。  
AttributesType 不含 Orientation 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。
 * @class
 */
class Orientation extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 人体朝向信息，返回值为以下集合中的一个 {正向, 背向, 左, 右}。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * 人体框和人体关键点信息。
 * @class
 */
class BodyJointsResult extends AbstractModel {

    BoundBox: BoundRect | null
    
    BodyJoints: Array<KeyPointInfo> | null
    
    Confidence: number | null
    
    constructor(){
        super();

        /**
         * 图中检测出来的人体框。
         */
        this.BoundBox = null;

        /**
         * 14个人体关键点的坐标，人体关键点详见KeyPointInfo。
         */
        this.BodyJoints = null;

        /**
         * 检测出的人体置信度，0-1之间，数值越高越准确。
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BoundBox: BoundRect | null;
        BodyJoints: Array<KeyPointInfo> | null;
        Confidence: number | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.BoundBox) {
            let obj = new BoundRect();
            obj.deserialize(params.BoundBox)
            this.BoundBox = obj;
        }

        if (params.BodyJoints) {
            this.BodyJoints = new Array();
            for (let z in params.BodyJoints) {
                let obj = new KeyPointInfo();
                obj.deserialize(params.BodyJoints[z]);
                this.BodyJoints.push(obj);
            }
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 上衣属性信息
 * @class
 */
class UpperBodyCloth extends AbstractModel {

    Texture: UpperBodyClothTexture | null
    
    Color: UpperBodyClothColor | null
    
    Sleeve: UpperBodyClothSleeve | null
    
    constructor(){
        super();

        /**
         * 上衣纹理信息。
         */
        this.Texture = null;

        /**
         * 上衣颜色信息。
         */
        this.Color = null;

        /**
         * 上衣衣袖信息。
         */
        this.Sleeve = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Texture: UpperBodyClothTexture | null;
        Color: UpperBodyClothColor | null;
        Sleeve: UpperBodyClothSleeve | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Texture) {
            let obj = new UpperBodyClothTexture();
            obj.deserialize(params.Texture)
            this.Texture = obj;
        }

        if (params.Color) {
            let obj = new UpperBodyClothColor();
            obj.deserialize(params.Color)
            this.Color = obj;
        }

        if (params.Sleeve) {
            let obj = new UpperBodyClothSleeve();
            obj.deserialize(params.Sleeve)
            this.Sleeve = obj;
        }

    }
}

/**
 * 下衣长度信息
 * @class
 */
class LowerBodyClothLength extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 下衣长度信息，返回值为以下集合中的一个，{长, 短} 。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * SearchTrace返回参数结构体
 * @class
 */
class SearchTraceResponse extends AbstractModel {

    Candidates: Array<Candidate> | null
    
    InputRetCode: number | null
    
    InputRetCodeDetails: Array<number> | null
    
    BodyModelVersion: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 识别出的最相似候选人。
         */
        this.Candidates = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果。
只有为0时结果才有意义。
-1001: 输入图片不合法。-1002: 输入图片不能构成轨迹。
         */
        this.InputRetCode = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果详情。 
-1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:轨迹中有非同人图片。-2024: 轨迹提取失败。-2025: 人体检测失败。
         */
        this.InputRetCodeDetails = null;

        /**
         * 人体识别所用的算法模型版本。
         */
        this.BodyModelVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Candidates: Array<Candidate> | null;
        InputRetCode: number | null;
        InputRetCodeDetails: Array<number> | null;
        BodyModelVersion: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Candidates) {
            this.Candidates = new Array();
            for (let z in params.Candidates) {
                let obj = new Candidate();
                obj.deserialize(params.Candidates[z]);
                this.Candidates.push(obj);
            }
        }
        this.InputRetCode = 'InputRetCode' in params ? params.InputRetCode : null;
        this.InputRetCodeDetails = 'InputRetCodeDetails' in params ? params.InputRetCodeDetails : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTrace返回参数结构体
 * @class
 */
class CreateTraceResponse extends AbstractModel {

    TraceId: string | null
    
    BodyModelVersion: string | null
    
    InputRetCode: number | null
    
    InputRetCodeDetails: Array<number> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 人员轨迹唯一标识。
         */
        this.TraceId = null;

        /**
         * 人体识别所用的算法模型版本。
         */
        this.BodyModelVersion = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果。
只有为0时结果才有意义。
-1001: 输入图片不合法。-1002: 输入图片不能构成轨迹。
         */
        this.InputRetCode = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果详情。 
-1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:轨迹中有非同人图片。-2024: 轨迹提取失败。-2025: 人体检测失败。
         */
        this.InputRetCodeDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TraceId: string | null;
        BodyModelVersion: string | null;
        InputRetCode: number | null;
        InputRetCodeDetails: Array<number> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.InputRetCode = 'InputRetCode' in params ? params.InputRetCode : null;
        this.InputRetCodeDetails = 'InputRetCodeDetails' in params ? params.InputRetCodeDetails : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePerson返回参数结构体
 * @class
 */
class CreatePersonResponse extends AbstractModel {

    TraceId: string | null
    
    BodyModelVersion: string | null
    
    InputRetCode: number | null
    
    InputRetCodeDetails: Array<number> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 人员轨迹唯一标识。
         */
        this.TraceId = null;

        /**
         * 人体识别所用的算法模型版本。
         */
        this.BodyModelVersion = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果。
只有为0时结果才有意义。
-1001: 输入图片不合法。-1002: 输入图片不能构成轨迹。
         */
        this.InputRetCode = null;

        /**
         * 输入的人体轨迹图片中的合法性校验结果详情。 
-1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:轨迹中有非同人图片。-2024: 轨迹提取失败。-2025: 人体检测失败。
RetCode 的顺序和入参中Images 或 Urls 的顺序一致。
         */
        this.InputRetCodeDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TraceId: string | null;
        BodyModelVersion: string | null;
        InputRetCode: number | null;
        InputRetCodeDetails: Array<number> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.InputRetCode = 'InputRetCode' in params ? params.InputRetCode : null;
        this.InputRetCodeDetails = 'InputRetCodeDetails' in params ? params.InputRetCodeDetails : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人体框
 * @class
 */
class BoundRect extends AbstractModel {

    X: number | null
    
    Y: number | null
    
    Width: number | null
    
    Height: number | null
    
    constructor(){
        super();

        /**
         * 人体框左上角横坐标。
         */
        this.X = null;

        /**
         * 人体框左上角纵坐标。
         */
        this.Y = null;

        /**
         * 人体宽度。
         */
        this.Width = null;

        /**
         * 人体高度。
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
 * 下衣颜色信息
 * @class
 */
class LowerBodyClothColor extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 下衣颜色信息，返回值为以下集合中的一个{ 黑色系, 灰白色系, 彩色} 。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * GetPersonList返回参数结构体
 * @class
 */
class GetPersonListResponse extends AbstractModel {

    PersonInfos: Array<PersonInfo> | null
    
    PersonNum: number | null
    
    BodyModelVersion: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回的人员信息。
         */
        this.PersonInfos = null;

        /**
         * 该人体库的人员数量。
         */
        this.PersonNum = null;

        /**
         * 人体识别所用的算法模型版本。
         */
        this.BodyModelVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonInfos: Array<PersonInfo> | null;
        PersonNum: number | null;
        BodyModelVersion: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PersonInfos) {
            this.PersonInfos = new Array();
            for (let z in params.PersonInfos) {
                let obj = new PersonInfo();
                obj.deserialize(params.PersonInfos[z]);
                this.PersonInfos.push(obj);
            }
        }
        this.PersonNum = 'PersonNum' in params ? params.PersonNum : null;
        this.BodyModelVersion = 'BodyModelVersion' in params ? params.BodyModelVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPersonList请求参数结构体
 * @class
 */
class GetPersonListRequest extends AbstractModel {

    GroupId: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 人体库ID。
         */
        this.GroupId = null;

        /**
         * 起始序号，默认值为0。
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为1000。
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 下衣类型信息
 * @class
 */
class LowerBodyClothType extends AbstractModel {

    Type: string | null
    
    Probability: number | null
    
    constructor(){
        super();

        /**
         * 下衣类型，返回值为以下集合中的一个 {裤子,裙子} 。
         */
        this.Type = null;

        /**
         * Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。
         */
        this.Probability = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: string | null;
        Probability: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Probability = 'Probability' in params ? params.Probability : null;

    }
}

/**
 * CreateTrace请求参数结构体
 * @class
 */
class CreateTraceRequest extends AbstractModel {

    PersonId: string | null
    
    Trace: Trace | null
    
    constructor(){
        super();

        /**
         * 人员ID。
         */
        this.PersonId = null;

        /**
         * 人体轨迹信息。
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PersonId: string | null;
        Trace: Trace | null;
    }): void {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.Trace) {
            let obj = new Trace();
            obj.deserialize(params.Trace)
            this.Trace = obj;
        }

    }
}

/**
 * DeletePerson返回参数结构体
 * @class
 */
class DeletePersonResponse extends AbstractModel {

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
 * 返回人体属性选项，此值不填则为不需要返回，可以选择的值为以下六个。
Age、Bag、Gender、Orientation、UpperBodyCloth、LowerBodyCloth，详细的解释请看对象描述
需注意本接口最多返回面积最大的 5 个人体属性信息，超过 5 个人体（第 6 个及以后的人体）的人体属性不具备参考意义。
 * @class
 */
class AttributesOptions extends AbstractModel {

    Age: boolean | null
    
    Bag: boolean | null
    
    Gender: boolean | null
    
    Orientation: boolean | null
    
    UpperBodyCloth: boolean | null
    
    LowerBodyCloth: boolean | null
    
    constructor(){
        super();

        /**
         * 返回年龄信息
         */
        this.Age = null;

        /**
         * 返回随身挎包信息
         */
        this.Bag = null;

        /**
         * 返回性别信息
         */
        this.Gender = null;

        /**
         * 返回朝向信息
         */
        this.Orientation = null;

        /**
         * 返回上装信息
         */
        this.UpperBodyCloth = null;

        /**
         * 返回下装信息
         */
        this.LowerBodyCloth = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Age: boolean | null;
        Bag: boolean | null;
        Gender: boolean | null;
        Orientation: boolean | null;
        UpperBodyCloth: boolean | null;
        LowerBodyCloth: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.Age = 'Age' in params ? params.Age : null;
        this.Bag = 'Bag' in params ? params.Bag : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Orientation = 'Orientation' in params ? params.Orientation : null;
        this.UpperBodyCloth = 'UpperBodyCloth' in params ? params.UpperBodyCloth : null;
        this.LowerBodyCloth = 'LowerBodyCloth' in params ? params.LowerBodyCloth : null;

    }
}

/**
 * CreateGroup返回参数结构体
 * @class
 */
class CreateGroupResponse extends AbstractModel {

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

export const Models = {
    SegmentPortraitPicResponse: SegmentPortraitPicResponse,
    DetectBodyJointsResponse: DetectBodyJointsResponse,
    Candidate: Candidate,
    DeletePersonRequest: DeletePersonRequest,
    ModifyGroupResponse: ModifyGroupResponse,
    UpperBodyClothSleeve: UpperBodyClothSleeve,
    BodyAttributeInfo: BodyAttributeInfo,
    GetGroupListResponse: GetGroupListResponse,
    GroupInfo: GroupInfo,
    SegmentationOptions: SegmentationOptions,
    ModifyGroupRequest: ModifyGroupRequest,
    CreatePersonRequest: CreatePersonRequest,
    ModifyPersonInfoResponse: ModifyPersonInfoResponse,
    Trace: Trace,
    DeleteGroupRequest: DeleteGroupRequest,
    ModifyPersonInfoRequest: ModifyPersonInfoRequest,
    Gender: Gender,
    SegmentCustomizedPortraitPicRequest: SegmentCustomizedPortraitPicRequest,
    CreateGroupRequest: CreateGroupRequest,
    LowerBodyCloth: LowerBodyCloth,
    UpperBodyClothTexture: UpperBodyClothTexture,
    TraceInfo: TraceInfo,
    DeleteGroupResponse: DeleteGroupResponse,
    BodyRect: BodyRect,
    DetectBodyRequest: DetectBodyRequest,
    Age: Age,
    SearchTraceRequest: SearchTraceRequest,
    KeyPointInfo: KeyPointInfo,
    DetectBodyResponse: DetectBodyResponse,
    PersonInfo: PersonInfo,
    Bag: Bag,
    SegmentCustomizedPortraitPicResponse: SegmentCustomizedPortraitPicResponse,
    DetectBodyJointsRequest: DetectBodyJointsRequest,
    SegmentPortraitPicRequest: SegmentPortraitPicRequest,
    UpperBodyClothColor: UpperBodyClothColor,
    GetGroupListRequest: GetGroupListRequest,
    BodyDetectResult: BodyDetectResult,
    Orientation: Orientation,
    BodyJointsResult: BodyJointsResult,
    UpperBodyCloth: UpperBodyCloth,
    LowerBodyClothLength: LowerBodyClothLength,
    SearchTraceResponse: SearchTraceResponse,
    CreateTraceResponse: CreateTraceResponse,
    CreatePersonResponse: CreatePersonResponse,
    BoundRect: BoundRect,
    LowerBodyClothColor: LowerBodyClothColor,
    GetPersonListResponse: GetPersonListResponse,
    GetPersonListRequest: GetPersonListRequest,
    LowerBodyClothType: LowerBodyClothType,
    CreateTraceRequest: CreateTraceRequest,
    DeletePersonResponse: DeletePersonResponse,
    AttributesOptions: AttributesOptions,
    CreateGroupResponse: CreateGroupResponse,

}
