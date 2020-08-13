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
 * VerifyBizLicense请求参数结构体
 * @class
 */
class VerifyBizLicenseRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    ImageConfig: string | null
    
    RegNum: string | null
    
    Name: string | null
    
    Address: string | null
    
    constructor(){
        super();

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageUrl = null;

        /**
         * 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。
格式为{RegNum: true, Name:true/false, Address:true/false}

设置方式参考：
Config = Json.stringify({"Name":true,"Address":true})
API 3.0 Explorer 设置方式参考：
Config = {"Name":true,"Address":true}
         */
        this.ImageConfig = null;

        /**
         * 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。RegNum为必选项。
         */
        this.RegNum = null;

        /**
         * 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。
         */
        this.Name = null;

        /**
         * 用于入参是文本的场景，Address表示经营地址，填写后会返回Name的校验结果。
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        ImageConfig: string | null;
        RegNum: string | null;
        Name: string | null;
        Address: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageConfig = 'ImageConfig' in params ? params.ImageConfig : null;
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * BusinessCardOCR返回参数结构体
 * @class
 */
class BusinessCardOCRResponse extends AbstractModel {

    BusinessCardInfos: Array<BusinessCardInfo> | null
    
    RetImageBase64: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 名片识别结果，具体内容请点击左侧链接。
         */
        this.BusinessCardInfos = null;

        /**
         * 返回图像预处理后的图片，图像预处理未开启时返回内容为空。
         */
        this.RetImageBase64 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BusinessCardInfos: Array<BusinessCardInfo> | null;
        RetImageBase64: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.BusinessCardInfos) {
            this.BusinessCardInfos = new Array();
            for (let z in params.BusinessCardInfos) {
                let obj = new BusinessCardInfo();
                obj.deserialize(params.BusinessCardInfos[z]);
                this.BusinessCardInfos.push(obj);
            }
        }
        this.RetImageBase64 = 'RetImageBase64' in params ? params.RetImageBase64 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 算式识别结果
 * @class
 */
class TextArithmetic extends AbstractModel {

    DetectedText: string | null
    
    Result: boolean | null
    
    Confidence: number | null
    
    Polygon: Array<Coord> | null
    
    AdvancedInfo: string | null
    
    ItemCoord: ItemCoord | null
    
    ExpressionType: string | null
    
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         */
        this.DetectedText = null;

        /**
         * 算式运算结果
         */
        this.Result = null;

        /**
         * 保留字段，暂不支持
         */
        this.Confidence = null;

        /**
         * 原图文本行坐标，以四个顶点坐标表示（保留字段，暂不支持）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Polygon = null;

        /**
         * 保留字段，暂不支持
         */
        this.AdvancedInfo = null;

        /**
         * 文本行旋转纠正之后在图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
         */
        this.ItemCoord = null;

        /**
         * 算式题型编号：
‘1’: 加减乘除四则
‘2’: 加减乘除已知结果求运算因子
‘3’: 判断大小
‘4’: 约等于估算
‘5’: 带余数除法
‘6’: 分数四则运算
‘7’: 单位换算
‘8’: 竖式加减法
‘9’: 竖式乘除法
‘10’: 脱式计算
‘11’: 解方程
         */
        this.ExpressionType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DetectedText: string | null;
        Result: boolean | null;
        Confidence: number | null;
        Polygon: Array<Coord> | null;
        AdvancedInfo: string | null;
        ItemCoord: ItemCoord | null;
        ExpressionType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.ItemCoord) {
            let obj = new ItemCoord();
            obj.deserialize(params.ItemCoord)
            this.ItemCoord = obj;
        }
        this.ExpressionType = 'ExpressionType' in params ? params.ExpressionType : null;

    }
}

/**
 * HKIDCardOCR请求参数结构体
 * @class
 */
class HKIDCardOCRRequest extends AbstractModel {

    DetectFake: boolean | null
    
    ReturnHeadImage: boolean | null
    
    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 是否鉴伪。
         */
        this.DetectFake = null;

        /**
         * 是否返回人像照片。
         */
        this.ReturnHeadImage = null;

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DetectFake: boolean | null;
        ReturnHeadImage: boolean | null;
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DetectFake = 'DetectFake' in params ? params.DetectFake : null;
        this.ReturnHeadImage = 'ReturnHeadImage' in params ? params.ReturnHeadImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * CarInvoiceOCR请求参数结构体
 * @class
 */
class CarInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 混贴票据单张发票识别信息
 * @class
 */
class MixedInvoiceItem extends AbstractModel {

    Code: string | null
    
    Type: number | null
    
    Rect: Rect | null
    
    Angle: number | null
    
    SingleInvoiceInfos: Array<SingleInvoiceInfo> | null
    
    constructor(){
        super();

        /**
         * 识别结果。
OK：表示识别成功；FailedOperation.UnsupportedInvioce：表示不支持识别；
FailedOperation.UnKnowError：表示识别失败；
其它错误码见各个票据接口的定义。
         */
        this.Code = null;

        /**
         * 识别出的图片所属的票据类型。
-1：未知类型
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
         */
        this.Type = null;

        /**
         * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
         */
        this.Rect = null;

        /**
         * 识别出的图片在混贴票据图片中的旋转角度。
         */
        this.Angle = null;

        /**
         * 识别到的内容。
         */
        this.SingleInvoiceInfos = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Code: string | null;
        Type: number | null;
        Rect: Rect | null;
        Angle: number | null;
        SingleInvoiceInfos: Array<SingleInvoiceInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.SingleInvoiceInfos) {
            this.SingleInvoiceInfos = new Array();
            for (let z in params.SingleInvoiceInfos) {
                let obj = new SingleInvoiceInfo();
                obj.deserialize(params.SingleInvoiceInfos[z]);
                this.SingleInvoiceInfos.push(obj);
            }
        }

    }
}

/**
 * TrainTicketOCR请求参数结构体
 * @class
 */
class TrainTicketOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * EstateCertOCR返回参数结构体
 * @class
 */
class EstateCertOCRResponse extends AbstractModel {

    Obligee: string | null
    
    Ownership: string | null
    
    Location: string | null
    
    Unit: string | null
    
    Type: string | null
    
    Property: string | null
    
    Usage: string | null
    
    Area: string | null
    
    Term: string | null
    
    Other: string | null
    
    Angle: number | null
    
    Number: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权利人
         */
        this.Obligee = null;

        /**
         * 共有情况
         */
        this.Ownership = null;

        /**
         * 坐落
         */
        this.Location = null;

        /**
         * 不动产单元号
         */
        this.Unit = null;

        /**
         * 权利类型
         */
        this.Type = null;

        /**
         * 权利性质
         */
        this.Property = null;

        /**
         * 用途
         */
        this.Usage = null;

        /**
         * 面积
         */
        this.Area = null;

        /**
         * 使用期限
         */
        this.Term = null;

        /**
         * 权利其他状况，多行会用换行符\n连接。
         */
        this.Other = null;

        /**
         * 图片旋转角度
         */
        this.Angle = null;

        /**
         * 不动产权号
         */
        this.Number = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Obligee: string | null;
        Ownership: string | null;
        Location: string | null;
        Unit: string | null;
        Type: string | null;
        Property: string | null;
        Usage: string | null;
        Area: string | null;
        Term: string | null;
        Other: string | null;
        Angle: number | null;
        Number: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Obligee = 'Obligee' in params ? params.Obligee : null;
        this.Ownership = 'Ownership' in params ? params.Ownership : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Property = 'Property' in params ? params.Property : null;
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Term = 'Term' in params ? params.Term : null;
        this.Other = 'Other' in params ? params.Other : null;
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlightInvoiceOCR请求参数结构体
 * @class
 */
class FlightInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDPassportOCR请求参数结构体
 * @class
 */
class MLIDPassportOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    RetImage: boolean | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 是否返回图片
         */
        this.RetImage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        RetImage: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * TextDetect返回参数结构体
 * @class
 */
class TextDetectResponse extends AbstractModel {

    HasText: boolean | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 图片中是否包含文字。
         */
        this.HasText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HasText: boolean | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.HasText = 'HasText' in params ? params.HasText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyBizLicense返回参数结构体
 * @class
 */
class VerifyBizLicenseResponse extends AbstractModel {

    ErrorCode: number | null
    
    CreditCode: string | null
    
    OrgCode: string | null
    
    OpenFrom: string | null
    
    OpenTo: string | null
    
    FrName: string | null
    
    EnterpriseStatus: string | null
    
    OperateScopeAndForm: string | null
    
    RegCap: string | null
    
    RegCapCur: string | null
    
    RegOrg: string | null
    
    EsDate: string | null
    
    EnterpriseType: string | null
    
    CancelDate: string | null
    
    RevokeDate: string | null
    
    AbuItem: string | null
    
    CbuItem: string | null
    
    ApprDate: string | null
    
    Province: string | null
    
    City: string | null
    
    County: string | null
    
    AreaCode: string | null
    
    IndustryPhyCode: string | null
    
    IndustryPhyName: string | null
    
    IndustryCode: string | null
    
    IndustryName: string | null
    
    OperateScope: string | null
    
    VerifyRegNo: string | null
    
    RegNo: string | null
    
    VerifyEnterpriseName: string | null
    
    EnterpriseName: string | null
    
    VerifyAddress: string | null
    
    Address: string | null
    
    RegNumResult: BizLicenseVerifyResult | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 状态码
         */
        this.ErrorCode = null;

        /**
         * 统一社会信用代码
         */
        this.CreditCode = null;

        /**
         * 组织机构代码
         */
        this.OrgCode = null;

        /**
         * 经营期限自（YYYY-MM-DD）
         */
        this.OpenFrom = null;

        /**
         * 经营期限至（YYYY-MM-DD）
         */
        this.OpenTo = null;

        /**
         * 法人姓名
         */
        this.FrName = null;

        /**
         * 经营状态（在营、注销、吊销、其他）
         */
        this.EnterpriseStatus = null;

        /**
         * 经营（业务）范围及方式
         */
        this.OperateScopeAndForm = null;

        /**
         * 注册资金（单位:万元）
         */
        this.RegCap = null;

        /**
         * 注册币种
         */
        this.RegCapCur = null;

        /**
         * 登记机关
         */
        this.RegOrg = null;

        /**
         * 开业日期（YYYY-MM-DD）
         */
        this.EsDate = null;

        /**
         * 企业（机构）类型
         */
        this.EnterpriseType = null;

        /**
         * 注销日期
         */
        this.CancelDate = null;

        /**
         * 吊销日期
         */
        this.RevokeDate = null;

        /**
         * 许可经营项目
         */
        this.AbuItem = null;

        /**
         * 一般经营项目
         */
        this.CbuItem = null;

        /**
         * 核准时间
         */
        this.ApprDate = null;

        /**
         * 省
         */
        this.Province = null;

        /**
         * 地级市
         */
        this.City = null;

        /**
         * 区\县
         */
        this.County = null;

        /**
         * 住所所在行政区划代码
         */
        this.AreaCode = null;

        /**
         * 行业门类代码
         */
        this.IndustryPhyCode = null;

        /**
         * 行业门类名称
         */
        this.IndustryPhyName = null;

        /**
         * 国民经济行业代码
         */
        this.IndustryCode = null;

        /**
         * 国民经济行业名称
         */
        this.IndustryName = null;

        /**
         * 经营（业务）范围
         */
        this.OperateScope = null;

        /**
         * 要核验的工商注册号
         */
        this.VerifyRegNo = null;

        /**
         * 工商注册号
         */
        this.RegNo = null;

        /**
         * 要核验的企业名称
         */
        this.VerifyEnterpriseName = null;

        /**
         * 企业名称
         */
        this.EnterpriseName = null;

        /**
         * 要核验的注册地址
         */
        this.VerifyAddress = null;

        /**
         * 注册地址
         */
        this.Address = null;

        /**
         * 验证结果
         */
        this.RegNumResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ErrorCode: number | null;
        CreditCode: string | null;
        OrgCode: string | null;
        OpenFrom: string | null;
        OpenTo: string | null;
        FrName: string | null;
        EnterpriseStatus: string | null;
        OperateScopeAndForm: string | null;
        RegCap: string | null;
        RegCapCur: string | null;
        RegOrg: string | null;
        EsDate: string | null;
        EnterpriseType: string | null;
        CancelDate: string | null;
        RevokeDate: string | null;
        AbuItem: string | null;
        CbuItem: string | null;
        ApprDate: string | null;
        Province: string | null;
        City: string | null;
        County: string | null;
        AreaCode: string | null;
        IndustryPhyCode: string | null;
        IndustryPhyName: string | null;
        IndustryCode: string | null;
        IndustryName: string | null;
        OperateScope: string | null;
        VerifyRegNo: string | null;
        RegNo: string | null;
        VerifyEnterpriseName: string | null;
        EnterpriseName: string | null;
        VerifyAddress: string | null;
        Address: string | null;
        RegNumResult: BizLicenseVerifyResult | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.CreditCode = 'CreditCode' in params ? params.CreditCode : null;
        this.OrgCode = 'OrgCode' in params ? params.OrgCode : null;
        this.OpenFrom = 'OpenFrom' in params ? params.OpenFrom : null;
        this.OpenTo = 'OpenTo' in params ? params.OpenTo : null;
        this.FrName = 'FrName' in params ? params.FrName : null;
        this.EnterpriseStatus = 'EnterpriseStatus' in params ? params.EnterpriseStatus : null;
        this.OperateScopeAndForm = 'OperateScopeAndForm' in params ? params.OperateScopeAndForm : null;
        this.RegCap = 'RegCap' in params ? params.RegCap : null;
        this.RegCapCur = 'RegCapCur' in params ? params.RegCapCur : null;
        this.RegOrg = 'RegOrg' in params ? params.RegOrg : null;
        this.EsDate = 'EsDate' in params ? params.EsDate : null;
        this.EnterpriseType = 'EnterpriseType' in params ? params.EnterpriseType : null;
        this.CancelDate = 'CancelDate' in params ? params.CancelDate : null;
        this.RevokeDate = 'RevokeDate' in params ? params.RevokeDate : null;
        this.AbuItem = 'AbuItem' in params ? params.AbuItem : null;
        this.CbuItem = 'CbuItem' in params ? params.CbuItem : null;
        this.ApprDate = 'ApprDate' in params ? params.ApprDate : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.County = 'County' in params ? params.County : null;
        this.AreaCode = 'AreaCode' in params ? params.AreaCode : null;
        this.IndustryPhyCode = 'IndustryPhyCode' in params ? params.IndustryPhyCode : null;
        this.IndustryPhyName = 'IndustryPhyName' in params ? params.IndustryPhyName : null;
        this.IndustryCode = 'IndustryCode' in params ? params.IndustryCode : null;
        this.IndustryName = 'IndustryName' in params ? params.IndustryName : null;
        this.OperateScope = 'OperateScope' in params ? params.OperateScope : null;
        this.VerifyRegNo = 'VerifyRegNo' in params ? params.VerifyRegNo : null;
        this.RegNo = 'RegNo' in params ? params.RegNo : null;
        this.VerifyEnterpriseName = 'VerifyEnterpriseName' in params ? params.VerifyEnterpriseName : null;
        this.EnterpriseName = 'EnterpriseName' in params ? params.EnterpriseName : null;
        this.VerifyAddress = 'VerifyAddress' in params ? params.VerifyAddress : null;
        this.Address = 'Address' in params ? params.Address : null;

        if (params.RegNumResult) {
            let obj = new BizLicenseVerifyResult();
            obj.deserialize(params.RegNumResult)
            this.RegNumResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FinanBillSliceOCR返回参数结构体
 * @class
 */
class FinanBillSliceOCRResponse extends AbstractModel {

    FinanBillSliceInfos: Array<FinanBillSliceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 金融票据切片识别结果，具体内容请点击左侧链接。
         */
        this.FinanBillSliceInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FinanBillSliceInfos: Array<FinanBillSliceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FinanBillSliceInfos) {
            this.FinanBillSliceInfos = new Array();
            for (let z in params.FinanBillSliceInfos) {
                let obj = new FinanBillSliceInfo();
                obj.deserialize(params.FinanBillSliceInfos[z]);
                this.FinanBillSliceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DriverLicenseOCR返回参数结构体
 * @class
 */
class DriverLicenseOCRResponse extends AbstractModel {

    Name: string | null
    
    Sex: string | null
    
    Nationality: string | null
    
    Address: string | null
    
    DateOfBirth: string | null
    
    DateOfFirstIssue: string | null
    
    Class: string | null
    
    StartDate: string | null
    
    EndDate: string | null
    
    CardCode: string | null
    
    ArchivesCode: string | null
    
    Record: string | null
    
    RecognizeWarnCode: Array<number> | null
    
    RecognizeWarnMsg: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 性别
         */
        this.Sex = null;

        /**
         * 国籍
         */
        this.Nationality = null;

        /**
         * 住址
         */
        this.Address = null;

        /**
         * 出生日期
         */
        this.DateOfBirth = null;

        /**
         * 初次领证日期
         */
        this.DateOfFirstIssue = null;

        /**
         * 准驾车型
         */
        this.Class = null;

        /**
         * 有效期开始时间
         */
        this.StartDate = null;

        /**
         * 有效期截止时间
         */
        this.EndDate = null;

        /**
         * 证号
         */
        this.CardCode = null;

        /**
         * 档案编号
         */
        this.ArchivesCode = null;

        /**
         * 记录
         */
        this.Record = null;

        /**
         * Code 告警码列表和释义：
-9102  复印件告警
-9103  翻拍件告警
-9106  ps告警
注：告警码可以同时存在多个
         */
        this.RecognizeWarnCode = null;

        /**
         * 告警码说明：
WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
WARN_DRIVER_LICENSE_PS_CARD ps告警
注：告警信息可以同时存在多个
         */
        this.RecognizeWarnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Sex: string | null;
        Nationality: string | null;
        Address: string | null;
        DateOfBirth: string | null;
        DateOfFirstIssue: string | null;
        Class: string | null;
        StartDate: string | null;
        EndDate: string | null;
        CardCode: string | null;
        ArchivesCode: string | null;
        Record: string | null;
        RecognizeWarnCode: Array<number> | null;
        RecognizeWarnMsg: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.DateOfFirstIssue = 'DateOfFirstIssue' in params ? params.DateOfFirstIssue : null;
        this.Class = 'Class' in params ? params.Class : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.CardCode = 'CardCode' in params ? params.CardCode : null;
        this.ArchivesCode = 'ArchivesCode' in params ? params.ArchivesCode : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.RecognizeWarnCode = 'RecognizeWarnCode' in params ? params.RecognizeWarnCode : null;
        this.RecognizeWarnMsg = 'RecognizeWarnMsg' in params ? params.RecognizeWarnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别出来的单词信息包括单词（包括单词Character和单词置信度confidence）
 * @class
 */
class Words extends AbstractModel {

    Confidence: number | null
    
    Character: string | null
    
    constructor(){
        super();

        /**
         * 置信度 0 ~100
         */
        this.Confidence = null;

        /**
         * 候选字Character
         */
        this.Character = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Confidence: number | null;
        Character: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Character = 'Character' in params ? params.Character : null;

    }
}

/**
 * 英文识别结果
 * @class
 */
class TextDetectionEn extends AbstractModel {

    DetectedText: string | null
    
    Confidence: number | null
    
    Polygon: Array<Coord> | null
    
    AdvancedInfo: string | null
    
    WordCoordPoint: Array<WordCoordPoint> | null
    
    CandWord: Array<CandWord> | null
    
    Words: Array<Words> | null
    
    constructor(){
        super();

        /**
         * 识别出的文本行内容。
         */
        this.DetectedText = null;

        /**
         * 置信度 0 ~100。
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。目前EnglishOCR接口返回内容为空。
         */
        this.AdvancedInfo = null;

        /**
         * 单词在原图中的四点坐标。
         */
        this.WordCoordPoint = null;

        /**
         * 候选字符集(包含候选字Character以及置信度Confidence)。
         */
        this.CandWord = null;

        /**
         * 识别出来的单词信息（包括单词Character和单词置信度confidence）
         */
        this.Words = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DetectedText: string | null;
        Confidence: number | null;
        Polygon: Array<Coord> | null;
        AdvancedInfo: string | null;
        WordCoordPoint: Array<WordCoordPoint> | null;
        CandWord: Array<CandWord> | null;
        Words: Array<Words> | null;
    }): void {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.WordCoordPoint) {
            this.WordCoordPoint = new Array();
            for (let z in params.WordCoordPoint) {
                let obj = new WordCoordPoint();
                obj.deserialize(params.WordCoordPoint[z]);
                this.WordCoordPoint.push(obj);
            }
        }

        if (params.CandWord) {
            this.CandWord = new Array();
            for (let z in params.CandWord) {
                let obj = new CandWord();
                obj.deserialize(params.CandWord[z]);
                this.CandWord.push(obj);
            }
        }

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new Words();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }

    }
}

/**
 * PermitOCR返回参数结构体
 * @class
 */
class PermitOCRResponse extends AbstractModel {

    Name: string | null
    
    EnglishName: string | null
    
    Number: string | null
    
    Sex: string | null
    
    ValidDate: string | null
    
    IssueAuthority: string | null
    
    IssueAddress: string | null
    
    Birthday: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 英文姓名
         */
        this.EnglishName = null;

        /**
         * 证件号
         */
        this.Number = null;

        /**
         * 性别
         */
        this.Sex = null;

        /**
         * 有效期限
         */
        this.ValidDate = null;

        /**
         * 签发机关
         */
        this.IssueAuthority = null;

        /**
         * 签发地点
         */
        this.IssueAddress = null;

        /**
         * 出生日期
         */
        this.Birthday = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        EnglishName: string | null;
        Number: string | null;
        Sex: string | null;
        ValidDate: string | null;
        IssueAuthority: string | null;
        IssueAddress: string | null;
        Birthday: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.IssueAuthority = 'IssueAuthority' in params ? params.IssueAuthority : null;
        this.IssueAddress = 'IssueAddress' in params ? params.IssueAddress : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InvoiceGeneralOCR请求参数结构体
 * @class
 */
class InvoiceGeneralOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 矩形坐标
 * @class
 */
class Rect extends AbstractModel {

    X: number | null
    
    Y: number | null
    
    Width: number | null
    
    Height: number | null
    
    constructor(){
        super();

        /**
         * 左上角x
         */
        this.X = null;

        /**
         * 左上角y
         */
        this.Y = null;

        /**
         * 宽度
         */
        this.Width = null;

        /**
         * 高度
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
 * WaybillOCR返回参数结构体
 * @class
 */
class WaybillOCRResponse extends AbstractModel {

    TextDetections: TextWaybill | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: TextWaybill | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            let obj = new TextWaybill();
            obj.deserialize(params.TextDetections)
            this.TextDetections = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 混贴票据中单张发票的内容
 * @class
 */
class SingleInvoiceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 数学公式识别结果
 * @class
 */
class TextFormula extends AbstractModel {

    DetectedText: string | null
    
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         */
        this.DetectedText = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DetectedText: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;

    }
}

/**
 * MLIDCardOCR请求参数结构体
 * @class
 */
class MLIDCardOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    RetImage: boolean | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。( 中国地区之外不支持这个字段 )
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 是否返回图片，默认false
         */
        this.RetImage = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        RetImage: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * 增值税发票项目明细
 * @class
 */
class VatInvoiceItem extends AbstractModel {

    LineNo: string | null
    
    Name: string | null
    
    Spec: string | null
    
    Unit: string | null
    
    Quantity: string | null
    
    UnitPrice: string | null
    
    AmountWithoutTax: string | null
    
    TaxRate: string | null
    
    TaxAmount: string | null
    
    constructor(){
        super();

        /**
         * 行号
         */
        this.LineNo = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 规格
         */
        this.Spec = null;

        /**
         * 单位
         */
        this.Unit = null;

        /**
         * 数量
         */
        this.Quantity = null;

        /**
         * 单价
         */
        this.UnitPrice = null;

        /**
         * 不含税金额
         */
        this.AmountWithoutTax = null;

        /**
         * 税率
         */
        this.TaxRate = null;

        /**
         * 税额
         */
        this.TaxAmount = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LineNo: string | null;
        Name: string | null;
        Spec: string | null;
        Unit: string | null;
        Quantity: string | null;
        UnitPrice: string | null;
        AmountWithoutTax: string | null;
        TaxRate: string | null;
        TaxAmount: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.LineNo = 'LineNo' in params ? params.LineNo : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.UnitPrice = 'UnitPrice' in params ? params.UnitPrice : null;
        this.AmountWithoutTax = 'AmountWithoutTax' in params ? params.AmountWithoutTax : null;
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;

    }
}

/**
 * 机动车登记证书识别结果
 * @class
 */
class VehicleRegCertInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * VehicleLicenseOCR请求参数结构体
 * @class
 */
class VehicleLicenseOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    CardSide: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

        /**
         * FRONT 为行驶证主页正面（有红色印章的一面），
BACK 为行驶证副页正面（有号码号牌的一面）。
         */
        this.CardSide = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        CardSide: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * EnterpriseLicenseOCR返回参数结构体
 * @class
 */
class EnterpriseLicenseOCRResponse extends AbstractModel {

    EnterpriseLicenseInfos: Array<EnterpriseLicenseInfo> | null
    
    Angle: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 企业证照识别结果，具体内容请点击左侧链接。
         */
        this.EnterpriseLicenseInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EnterpriseLicenseInfos: Array<EnterpriseLicenseInfo> | null;
        Angle: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.EnterpriseLicenseInfos) {
            this.EnterpriseLicenseInfos = new Array();
            for (let z in params.EnterpriseLicenseInfos) {
                let obj = new EnterpriseLicenseInfo();
                obj.deserialize(params.EnterpriseLicenseInfos[z]);
                this.EnterpriseLicenseInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用机打发票信息
 * @class
 */
class InvoiceGeneralInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * 英文OCR识别出的单词在原图中的四点坐标数组
 * @class
 */
class WordCoordPoint extends AbstractModel {

    WordCoordinate: Array<Coord> | null
    
    constructor(){
        super();

        /**
         * 英文OCR识别出的每个单词在原图中的四点坐标。
         */
        this.WordCoordinate = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WordCoordinate: Array<Coord> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.WordCoordinate) {
            this.WordCoordinate = new Array();
            for (let z in params.WordCoordinate) {
                let obj = new Coord();
                obj.deserialize(params.WordCoordinate[z]);
                this.WordCoordinate.push(obj);
            }
        }

    }
}

/**
 * InstitutionOCR返回参数结构体
 * @class
 */
class InstitutionOCRResponse extends AbstractModel {

    RegId: string | null
    
    ValidDate: string | null
    
    Location: string | null
    
    Name: string | null
    
    LegalPerson: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 注册号
         */
        this.RegId = null;

        /**
         * 有效期
         */
        this.ValidDate = null;

        /**
         * 住所
         */
        this.Location = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 法定代表人
         */
        this.LegalPerson = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegId: string | null;
        ValidDate: string | null;
        Location: string | null;
        Name: string | null;
        LegalPerson: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RegId = 'RegId' in params ? params.RegId : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.LegalPerson = 'LegalPerson' in params ? params.LegalPerson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DriverLicenseOCR请求参数结构体
 * @class
 */
class DriverLicenseOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    CardSide: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

        /**
         * FRONT 为驾驶证主页正面（有红色印章的一面），
BACK 为驾驶证副页正面（有档案编号的一面）。
         */
        this.CardSide = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        CardSide: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * 验真接口
 * @class
 */
class BizLicenseVerifyResult extends AbstractModel {

    RegNum: string | null
    
    Name: string | null
    
    Address: string | null
    
    constructor(){
        super();

        /**
         * “0“：一致
“-1”：此号未查询到结果
         */
        this.RegNum = null;

        /**
         * “0“：一致
“-1”：不一致
“”：不验真
         */
        this.Name = null;

        /**
         * “0“：一致
“-1”：不一致
“”：不验真
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegNum: string | null;
        Name: string | null;
        Address: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * 文字识别结果
 * @class
 */
class TextDetection extends AbstractModel {

    DetectedText: string | null
    
    Confidence: number | null
    
    Polygon: Array<Coord> | null
    
    AdvancedInfo: string | null
    
    ItemPolygon: ItemCoord | null
    
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         */
        this.DetectedText = null;

        /**
         * 置信度 0 ~100
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。
GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。
         */
        this.AdvancedInfo = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
         */
        this.ItemPolygon = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DetectedText: string | null;
        Confidence: number | null;
        Polygon: Array<Coord> | null;
        AdvancedInfo: string | null;
        ItemPolygon: ItemCoord | null;
    }): void {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

        if (params.ItemPolygon) {
            let obj = new ItemCoord();
            obj.deserialize(params.ItemPolygon)
            this.ItemPolygon = obj;
        }

    }
}

/**
 * 数学试题识别结果
 * @class
 */
class TextEduPaper extends AbstractModel {

    Item: string | null
    
    DetectedText: string | null
    
    Itemcoord: ItemCoord | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）
         */
        this.Item = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Item对应的字符串结果
         */
        this.DetectedText = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
         */
        this.Itemcoord = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Item: string | null;
        DetectedText: string | null;
        Itemcoord: ItemCoord | null;
    }): void {
        if (!params) {
            return;
        }
        this.Item = 'Item' in params ? params.Item : null;
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;

        if (params.Itemcoord) {
            let obj = new ItemCoord();
            obj.deserialize(params.Itemcoord)
            this.Itemcoord = obj;
        }

    }
}

/**
 * QrcodeOCR返回参数结构体
 * @class
 */
class QrcodeOCRResponse extends AbstractModel {

    CodeResults: Array<QrcodeResultsInfo> | null
    
    ImgSize: QrcodeImgSize | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 二维码/条形码识别结果信息，具体内容请点击左侧链接。
         */
        this.CodeResults = null;

        /**
         * 图片大小，具体内容请点击左侧链接。
         */
        this.ImgSize = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CodeResults: Array<QrcodeResultsInfo> | null;
        ImgSize: QrcodeImgSize | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CodeResults) {
            this.CodeResults = new Array();
            for (let z in params.CodeResults) {
                let obj = new QrcodeResultsInfo();
                obj.deserialize(params.CodeResults[z]);
                this.CodeResults.push(obj);
            }
        }

        if (params.ImgSize) {
            let obj = new QrcodeImgSize();
            obj.deserialize(params.ImgSize)
            this.ImgSize = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运单识别对象
 * @class
 */
class WaybillObj extends AbstractModel {

    Text: string | null
    
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Text: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 票据检测结果
 * @class
 */
class InvoiceDetectInfo extends AbstractModel {

    Angle: number | null
    
    Type: number | null
    
    Rect: Rect | null
    
    Image: string | null
    
    constructor(){
        super();

        /**
         * 识别出的图片在混贴票据图片中的旋转角度。
         */
        this.Angle = null;

        /**
         * 识别出的图片所属的票据类型。
-1：未知类型
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
4：客运限额发票
5：机票行程单
6：酒店账单
7：完税证明
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
14：购物小票
         */
        this.Type = null;

        /**
         * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
         */
        this.Rect = null;

        /**
         * 入参 ReturnImage 为 True 时返回 Base64 编码后的图片。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Angle: number | null;
        Type: number | null;
        Rect: Rect | null;
        Image: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * MainlandPermitOCR请求参数结构体
 * @class
 */
class MainlandPermitOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    RetProfile: boolean | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 是否返回头像。默认不返回。
         */
        this.RetProfile = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        RetProfile: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RetProfile = 'RetProfile' in params ? params.RetProfile : null;

    }
}

/**
 * EnterpriseLicenseOCR请求参数结构体
 * @class
 */
class EnterpriseLicenseOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BankCardOCR请求参数结构体
 * @class
 */
class BankCardOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * PropOwnerCertOCR返回参数结构体
 * @class
 */
class PropOwnerCertOCRResponse extends AbstractModel {

    Owner: string | null
    
    Possession: string | null
    
    RegisterTime: string | null
    
    Purpose: string | null
    
    Nature: string | null
    
    Location: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 房地产权利人
         */
        this.Owner = null;

        /**
         * 共有情况
         */
        this.Possession = null;

        /**
         * 登记时间
         */
        this.RegisterTime = null;

        /**
         * 规划用途
         */
        this.Purpose = null;

        /**
         * 房屋性质
         */
        this.Nature = null;

        /**
         * 房地坐落
         */
        this.Location = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Owner: string | null;
        Possession: string | null;
        RegisterTime: string | null;
        Purpose: string | null;
        Nature: string | null;
        Location: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.Possession = 'Possession' in params ? params.Possession : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.Purpose = 'Purpose' in params ? params.Purpose : null;
        this.Nature = 'Nature' in params ? params.Nature : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 金融票据整单识别单个字段的内容
 * @class
 */
class FinanBillInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * TrainTicketOCR返回参数结构体
 * @class
 */
class TrainTicketOCRResponse extends AbstractModel {

    TicketNum: string | null
    
    StartStation: string | null
    
    DestinationStation: string | null
    
    Date: string | null
    
    TrainNum: string | null
    
    Seat: string | null
    
    Name: string | null
    
    Price: string | null
    
    SeatCategory: string | null
    
    ID: string | null
    
    InvoiceType: string | null
    
    SerialNumber: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 编号
         */
        this.TicketNum = null;

        /**
         * 出发站
         */
        this.StartStation = null;

        /**
         * 到达站
         */
        this.DestinationStation = null;

        /**
         * 出发时间
         */
        this.Date = null;

        /**
         * 车次
         */
        this.TrainNum = null;

        /**
         * 座位号
         */
        this.Seat = null;

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 票价
         */
        this.Price = null;

        /**
         * 席别
         */
        this.SeatCategory = null;

        /**
         * 身份证号
         */
        this.ID = null;

        /**
         * 发票消费类型
         */
        this.InvoiceType = null;

        /**
         * 序列号
         */
        this.SerialNumber = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TicketNum: string | null;
        StartStation: string | null;
        DestinationStation: string | null;
        Date: string | null;
        TrainNum: string | null;
        Seat: string | null;
        Name: string | null;
        Price: string | null;
        SeatCategory: string | null;
        ID: string | null;
        InvoiceType: string | null;
        SerialNumber: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TicketNum = 'TicketNum' in params ? params.TicketNum : null;
        this.StartStation = 'StartStation' in params ? params.StartStation : null;
        this.DestinationStation = 'DestinationStation' in params ? params.DestinationStation : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.TrainNum = 'TrainNum' in params ? params.TrainNum : null;
        this.Seat = 'Seat' in params ? params.Seat : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.SeatCategory = 'SeatCategory' in params ? params.SeatCategory : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 过路过桥费字段信息
 * @class
 */
class TollInvoiceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * ArithmeticOCR返回参数结构体
 * @class
 */
class ArithmeticOCRResponse extends AbstractModel {

    TextDetections: Array<TextArithmetic> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: Array<TextArithmetic> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextArithmetic();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FormulaOCR返回参数结构体
 * @class
 */
class FormulaOCRResponse extends AbstractModel {

    Angle: number | null
    
    FormulaInfos: Array<TextFormula> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
         */
        this.Angle = null;

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.FormulaInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Angle: number | null;
        FormulaInfos: Array<TextFormula> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.FormulaInfos) {
            this.FormulaInfos = new Array();
            for (let z in params.FormulaInfos) {
                let obj = new TextFormula();
                obj.deserialize(params.FormulaInfos[z]);
                this.FormulaInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 汽车票字段信息
 * @class
 */
class BusInvoiceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * 增值税发票识别结果
 * @class
 */
class TextVatInvoice extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * GeneralHandwritingOCR请求参数结构体
 * @class
 */
class GeneralHandwritingOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    Scene: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 场景字段，默认不用填写。
可选值:only_hw  表示只输出手写体识别结果，过滤印刷体。
         */
        this.Scene = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        Scene: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Scene = 'Scene' in params ? params.Scene : null;

    }
}

/**
 * BizLicenseOCR请求参数结构体
 * @class
 */
class BizLicenseOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MixedInvoiceDetect返回参数结构体
 * @class
 */
class MixedInvoiceDetectResponse extends AbstractModel {

    InvoiceDetectInfos: Array<InvoiceDetectInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测出的票据类型列表，具体内容请点击左侧链接。
         */
        this.InvoiceDetectInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InvoiceDetectInfos: Array<InvoiceDetectInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InvoiceDetectInfos) {
            this.InvoiceDetectInfos = new Array();
            for (let z in params.InvoiceDetectInfos) {
                let obj = new InvoiceDetectInfo();
                obj.deserialize(params.InvoiceDetectInfos[z]);
                this.InvoiceDetectInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InsuranceBillOCR返回参数结构体
 * @class
 */
class InsuranceBillOCRResponse extends AbstractModel {

    InsuranceBillInfos: Array<InsuranceBillInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 保险单据识别结果，具体内容请点击左侧链接。
         */
        this.InsuranceBillInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InsuranceBillInfos: Array<InsuranceBillInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InsuranceBillInfos) {
            this.InsuranceBillInfos = new Array();
            for (let z in params.InsuranceBillInfos) {
                let obj = new InsuranceBillInfo();
                obj.deserialize(params.InsuranceBillInfos[z]);
                this.InsuranceBillInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralEfficientOCR返回参数结构体
 * @class
 */
class GeneralEfficientOCRResponse extends AbstractModel {

    TextDetections: Array<TextDetection> | null
    
    Angel: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         */
        this.Angel = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: Array<TextDetection> | null;
        Angel: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HmtResidentPermitOCR请求参数结构体
 * @class
 */
class HmtResidentPermitOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    CardSide: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * FRONT：有照片的一面（人像面），
BACK：无照片的一面（国徽面），
该参数如果不填或填错，将为您自动判断正反面。
         */
        this.CardSide = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        CardSide: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * QrcodeOCR请求参数结构体
 * @class
 */
class QrcodeOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 3M，支持PNG、JPG、JPEG格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 3M，支持PNG、JPG、JPEG格式。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * TaxiInvoiceOCR返回参数结构体
 * @class
 */
class TaxiInvoiceOCRResponse extends AbstractModel {

    InvoiceNum: string | null
    
    InvoiceCode: string | null
    
    Date: string | null
    
    Fare: string | null
    
    GetOnTime: string | null
    
    GetOffTime: string | null
    
    Distance: string | null
    
    Location: string | null
    
    PlateNumber: string | null
    
    InvoiceType: string | null
    
    Province: string | null
    
    City: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 发票代码
         */
        this.InvoiceNum = null;

        /**
         * 发票号码
         */
        this.InvoiceCode = null;

        /**
         * 日期
         */
        this.Date = null;

        /**
         * 金额
         */
        this.Fare = null;

        /**
         * 上车时间
         */
        this.GetOnTime = null;

        /**
         * 下车时间
         */
        this.GetOffTime = null;

        /**
         * 里程
         */
        this.Distance = null;

        /**
         * 发票所在地
         */
        this.Location = null;

        /**
         * 车牌号
         */
        this.PlateNumber = null;

        /**
         * 发票消费类型
         */
        this.InvoiceType = null;

        /**
         * 省
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Province = null;

        /**
         * 市
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.City = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InvoiceNum: string | null;
        InvoiceCode: string | null;
        Date: string | null;
        Fare: string | null;
        GetOnTime: string | null;
        GetOffTime: string | null;
        Distance: string | null;
        Location: string | null;
        PlateNumber: string | null;
        InvoiceType: string | null;
        Province: string | null;
        City: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InvoiceNum = 'InvoiceNum' in params ? params.InvoiceNum : null;
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Fare = 'Fare' in params ? params.Fare : null;
        this.GetOnTime = 'GetOnTime' in params ? params.GetOnTime : null;
        this.GetOffTime = 'GetOffTime' in params ? params.GetOffTime : null;
        this.Distance = 'Distance' in params ? params.Distance : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.PlateNumber = 'PlateNumber' in params ? params.PlateNumber : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralBasicOCR返回参数结构体
 * @class
 */
class GeneralBasicOCRResponse extends AbstractModel {

    TextDetections: Array<TextDetection> | null
    
    Language: string | null
    
    Angel: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。
         */
        this.Language = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
         */
        this.Angel = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: Array<TextDetection> | null;
        Language: string | null;
        Angel: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Language = 'Language' in params ? params.Language : null;
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VinOCR请求参数结构体
 * @class
 */
class VinOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * QuotaInvoiceOCR请求参数结构体
 * @class
 */
class QuotaInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MixedInvoiceOCR返回参数结构体
 * @class
 */
class MixedInvoiceOCRResponse extends AbstractModel {

    MixedInvoiceItems: Array<MixedInvoiceItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 混贴票据识别结果，具体内容请点击左侧链接。
         */
        this.MixedInvoiceItems = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MixedInvoiceItems: Array<MixedInvoiceItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.MixedInvoiceItems) {
            this.MixedInvoiceItems = new Array();
            for (let z in params.MixedInvoiceItems) {
                let obj = new MixedInvoiceItem();
                obj.deserialize(params.MixedInvoiceItems[z]);
                this.MixedInvoiceItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClassifyDetectOCR返回参数结构体
 * @class
 */
class ClassifyDetectOCRResponse extends AbstractModel {

    ClassifyDetectInfos: Array<ClassifyDetectInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 智能卡证分类结果。当图片类型不支持分类识别或者识别出的类型不在请求参数DiscernType指定的范围内时，返回结果中的Type字段将为空字符串，Name字段将返回"其它"
         */
        this.ClassifyDetectInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClassifyDetectInfos: Array<ClassifyDetectInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ClassifyDetectInfos) {
            this.ClassifyDetectInfos = new Array();
            for (let z in params.ClassifyDetectInfos) {
                let obj = new ClassifyDetectInfo();
                obj.deserialize(params.ClassifyDetectInfos[z]);
                this.ClassifyDetectInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VehicleLicenseOCR返回参数结构体
 * @class
 */
class VehicleLicenseOCRResponse extends AbstractModel {

    FrontInfo: TextVehicleFront | null
    
    BackInfo: TextVehicleBack | null
    
    RecognizeWarnCode: Array<number> | null
    
    RecognizeWarnMsg: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 行驶证主页正面的识别结果，CardSide 为 FRONT。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FrontInfo = null;

        /**
         * 行驶证副页正面的识别结果，CardSide 为 BACK。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BackInfo = null;

        /**
         * Code 告警码列表和释义：
-9102 复印件告警
-9103 翻拍件告警
-9106 ps告警
注：告警码可以同时存在多个
         */
        this.RecognizeWarnCode = null;

        /**
         * 告警码说明：
WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
WARN_DRIVER_LICENSE_PS_CARD ps告警
注：告警信息可以同时存在多个
         */
        this.RecognizeWarnMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FrontInfo: TextVehicleFront | null;
        BackInfo: TextVehicleBack | null;
        RecognizeWarnCode: Array<number> | null;
        RecognizeWarnMsg: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FrontInfo) {
            let obj = new TextVehicleFront();
            obj.deserialize(params.FrontInfo)
            this.FrontInfo = obj;
        }

        if (params.BackInfo) {
            let obj = new TextVehicleBack();
            obj.deserialize(params.BackInfo)
            this.BackInfo = obj;
        }
        this.RecognizeWarnCode = 'RecognizeWarnCode' in params ? params.RecognizeWarnCode : null;
        this.RecognizeWarnMsg = 'RecognizeWarnMsg' in params ? params.RecognizeWarnMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatInvoiceOCR请求参数结构体
 * @class
 */
class VatInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * IDCardOCR返回参数结构体
 * @class
 */
class IDCardOCRResponse extends AbstractModel {

    Name: string | null
    
    Sex: string | null
    
    Nation: string | null
    
    Birth: string | null
    
    Address: string | null
    
    IdNum: string | null
    
    Authority: string | null
    
    ValidDate: string | null
    
    AdvancedInfo: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 姓名（人像面）
         */
        this.Name = null;

        /**
         * 性别（人像面）
         */
        this.Sex = null;

        /**
         * 民族（人像面）
         */
        this.Nation = null;

        /**
         * 出生日期（人像面）
         */
        this.Birth = null;

        /**
         * 地址（人像面）
         */
        this.Address = null;

        /**
         * 身份证号（人像面）
         */
        this.IdNum = null;

        /**
         * 发证机关（国徽面）
         */
        this.Authority = null;

        /**
         * 证件有效期（国徽面）
         */
        this.ValidDate = null;

        /**
         * 扩展信息，不请求则不返回，具体输入参考示例3和示例4。
IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；
Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；

Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0~100，分数越低越模糊，建议阈值≥50）;
BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0~100，分数越低边框遮挡可能性越低，建议阈值≥50）;

WarnInfos，告警信息，Code 告警码列表和释义：
-9100	身份证有效日期不合法告警，
-9101	身份证边框不完整告警，
-9102	身份证复印件告警，
-9103	身份证翻拍告警，
-9105	身份证框内遮挡告警，
-9104	临时身份证告警，
-9106	身份证 PS 告警。
         */
        this.AdvancedInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Sex: string | null;
        Nation: string | null;
        Birth: string | null;
        Address: string | null;
        IdNum: string | null;
        Authority: string | null;
        ValidDate: string | null;
        AdvancedInfo: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClassifyDetectOCR请求参数结构体
 * @class
 */
class ClassifyDetectOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    DiscernType: Array<string> | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 可以指定要识别的票证类型,指定后不出现在此列表的票证将不返回类型。不指定时默认返回所有支持类别票证的识别信息。

以下是当前支持的类型：
IDCardFront: 身份证正面识别
IDCardBack: 身份证背面识别
Passport: 护照
BusinessCard: 名片识别
BankCard: 银行卡识别
VehicleLicenseFront: 行驶证主页识别
VehicleLicenseBack: 行驶证副页识别
DriverLicenseFront: 驾驶证主页识别
DriverLicenseBack: 驾驶证副页识别
PermitFront: 港澳台通行证正面
ResidenceBooklet: 户口本资料页
MainlandPermitFront: 港澳台来往内地通行证正面
HmtResidentPermitFront: 港澳台居住证正面
HmtResidentPermitBack: 港澳台居住证背面
EstateCert: 不动产证
BizLicense: 营业执照
         */
        this.DiscernType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        DiscernType: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.DiscernType = 'DiscernType' in params ? params.DiscernType : null;

    }
}

/**
 * DutyPaidProofOCR返回参数结构体
 * @class
 */
class DutyPaidProofOCRResponse extends AbstractModel {

    DutyPaidProofInfos: Array<DutyPaidProofInfo> | null
    
    Angle: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 完税证明识别结果，具体内容请点击左侧链接。
         */
        this.DutyPaidProofInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DutyPaidProofInfos: Array<DutyPaidProofInfo> | null;
        Angle: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.DutyPaidProofInfos) {
            this.DutyPaidProofInfos = new Array();
            for (let z in params.DutyPaidProofInfos) {
                let obj = new DutyPaidProofInfo();
                obj.deserialize(params.DutyPaidProofInfos[z]);
                this.DutyPaidProofInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TollInvoiceOCR请求参数结构体
 * @class
 */
class TollInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * LicensePlateOCR返回参数结构体
 * @class
 */
class LicensePlateOCRResponse extends AbstractModel {

    Number: string | null
    
    Confidence: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 识别出的车牌号码。
         */
        this.Number = null;

        /**
         * 置信度，0 - 100 之间。
         */
        this.Confidence = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Number: string | null;
        Confidence: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Number = 'Number' in params ? params.Number : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HKIDCardOCR返回参数结构体
 * @class
 */
class HKIDCardOCRResponse extends AbstractModel {

    CnName: string | null
    
    EnName: string | null
    
    TelexCode: string | null
    
    Sex: string | null
    
    Birthday: string | null
    
    Permanent: number | null
    
    IdNum: string | null
    
    Symbol: string | null
    
    FirstIssueDate: string | null
    
    CurrentIssueDate: string | null
    
    FakeDetectResult: number | null
    
    HeadImage: string | null
    
    WarningCode: Array<number> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 中文姓名
         */
        this.CnName = null;

        /**
         * 英文姓名
         */
        this.EnName = null;

        /**
         * 中文姓名对应电码
         */
        this.TelexCode = null;

        /**
         * 性别 ：“男M”或“女F”
         */
        this.Sex = null;

        /**
         * 出生日期
         */
        this.Birthday = null;

        /**
         * 永久性居民身份证。
0：非永久；
1：永久；
-1：未知。
         */
        this.Permanent = null;

        /**
         * 身份证号码
         */
        this.IdNum = null;

        /**
         * 证件符号，出生日期下的符号，例如"***AZ"
         */
        this.Symbol = null;

        /**
         * 首次签发日期
         */
        this.FirstIssueDate = null;

        /**
         * 最近领用日期
         */
        this.CurrentIssueDate = null;

        /**
         * 真假判断。
0：无法判断（图像模糊、不完整、反光、过暗等导致无法判断）；
1：假；
2：真。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FakeDetectResult = null;

        /**
         * 人像照片Base64后的结果
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HeadImage = null;

        /**
         * 多重告警码，当身份证是翻拍、复印、PS件时返回对应告警码。
-9102：证照复印件告警
-9103：证照翻拍告警
-9104：证照PS告警
-9105：证照防伪告警
         */
        this.WarningCode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CnName: string | null;
        EnName: string | null;
        TelexCode: string | null;
        Sex: string | null;
        Birthday: string | null;
        Permanent: number | null;
        IdNum: string | null;
        Symbol: string | null;
        FirstIssueDate: string | null;
        CurrentIssueDate: string | null;
        FakeDetectResult: number | null;
        HeadImage: string | null;
        WarningCode: Array<number> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CnName = 'CnName' in params ? params.CnName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.TelexCode = 'TelexCode' in params ? params.TelexCode : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Permanent = 'Permanent' in params ? params.Permanent : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Symbol = 'Symbol' in params ? params.Symbol : null;
        this.FirstIssueDate = 'FirstIssueDate' in params ? params.FirstIssueDate : null;
        this.CurrentIssueDate = 'CurrentIssueDate' in params ? params.CurrentIssueDate : null;
        this.FakeDetectResult = 'FakeDetectResult' in params ? params.FakeDetectResult : null;
        this.HeadImage = 'HeadImage' in params ? params.HeadImage : null;
        this.WarningCode = 'WarningCode' in params ? params.WarningCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PermitOCR请求参数结构体
 * @class
 */
class PermitOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * InvoiceGeneralOCR返回参数结构体
 * @class
 */
class InvoiceGeneralOCRResponse extends AbstractModel {

    InvoiceGeneralInfos: Array<InvoiceGeneralInfo> | null
    
    Angle: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 通用机打发票识别结果，具体内容请点击左侧链接。
         */
        this.InvoiceGeneralInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InvoiceGeneralInfos: Array<InvoiceGeneralInfo> | null;
        Angle: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.InvoiceGeneralInfos) {
            this.InvoiceGeneralInfos = new Array();
            for (let z in params.InvoiceGeneralInfos) {
                let obj = new InvoiceGeneralInfo();
                obj.deserialize(params.InvoiceGeneralInfos[z]);
                this.InvoiceGeneralInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TaxiInvoiceOCR请求参数结构体
 * @class
 */
class TaxiInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * PropOwnerCertOCR请求参数结构体
 * @class
 */
class PropOwnerCertOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * TextDetect请求参数结构体
 * @class
 */
class TextDetectRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VatRollInvoiceOCR返回参数结构体
 * @class
 */
class VatRollInvoiceOCRResponse extends AbstractModel {

    VatRollInvoiceInfos: Array<VatRollInvoiceInfo> | null
    
    Angle: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 增值税发票（卷票）识别结果，具体内容请点击左侧链接。
         */
        this.VatRollInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VatRollInvoiceInfos: Array<VatRollInvoiceInfo> | null;
        Angle: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.VatRollInvoiceInfos) {
            this.VatRollInvoiceInfos = new Array();
            for (let z in params.VatRollInvoiceInfos) {
                let obj = new VatRollInvoiceInfo();
                obj.deserialize(params.VatRollInvoiceInfos[z]);
                this.VatRollInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatInvoiceVerify请求参数结构体
 * @class
 */
class VatInvoiceVerifyRequest extends AbstractModel {

    InvoiceCode: string | null
    
    InvoiceNo: string | null
    
    InvoiceDate: string | null
    
    Additional: string | null
    
    constructor(){
        super();

        /**
         * 发票代码， 一张发票一天只能查询5次。
         */
        this.InvoiceCode = null;

        /**
         * 发票号码（8位）。
         */
        this.InvoiceNo = null;

        /**
         * 开票日期（不支持当天发票查询，只支持一年以内），如：2019-12-20。
         */
        this.InvoiceDate = null;

        /**
         * 金额/发票校验码后6位（根据票种传递对应值，如果报参数错误，请仔细检查每个票种对应的值）
增值税专用发票：开具金额（不含税）
增值税普通发票、增值税电子普通发票（含通行费发票）、增值税普通发票（卷票）：校验码后6位
机动车销售统一发票：不含税价
货物运输业增值税专用发票：合计金额
二手车销售统一发票：车价合计
         */
        this.Additional = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InvoiceCode: string | null;
        InvoiceNo: string | null;
        InvoiceDate: string | null;
        Additional: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.InvoiceNo = 'InvoiceNo' in params ? params.InvoiceNo : null;
        this.InvoiceDate = 'InvoiceDate' in params ? params.InvoiceDate : null;
        this.Additional = 'Additional' in params ? params.Additional : null;

    }
}

/**
 * EduPaperOCR返回参数结构体
 * @class
 */
class EduPaperOCRResponse extends AbstractModel {

    EduPaperInfos: Array<TextEduPaper> | null
    
    Angle: number | null
    
    QuestionBlockInfos: Array<QuestionBlockObj> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.EduPaperInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 结构化方式输出，具体内容请点击左侧链接。
         */
        this.QuestionBlockInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EduPaperInfos: Array<TextEduPaper> | null;
        Angle: number | null;
        QuestionBlockInfos: Array<QuestionBlockObj> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.EduPaperInfos) {
            this.EduPaperInfos = new Array();
            for (let z in params.EduPaperInfos) {
                let obj = new TextEduPaper();
                obj.deserialize(params.EduPaperInfos[z]);
                this.EduPaperInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;

        if (params.QuestionBlockInfos) {
            this.QuestionBlockInfos = new Array();
            for (let z in params.QuestionBlockInfos) {
                let obj = new QuestionBlockObj();
                obj.deserialize(params.QuestionBlockInfos[z]);
                this.QuestionBlockInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 名片识别结果
 * @class
 */
class BusinessCardInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字，可能重复，比如多个手机），能识别的字段名为：
姓名、英文姓名、英文地址、公司、英文公司、职位、英文职位、部门、英文部门、手机、电话、传真、社交帐号、QQ、MSN、微信、微博、邮箱、邮编、网址、公司账号、其他。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 文字识别结果
 * @class
 */
class TextGeneralHandwriting extends AbstractModel {

    DetectedText: string | null
    
    Confidence: number | null
    
    Polygon: Array<Coord> | null
    
    AdvancedInfo: string | null
    
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         */
        this.DetectedText = null;

        /**
         * 置信度 0 - 100
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。
能返回文本行的段落信息，例如：{\"Parag\":{\"ParagNo\":2}}，
其中ParagNo为段落行，从1开始。
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DetectedText: string | null;
        Confidence: number | null;
        Polygon: Array<Coord> | null;
        AdvancedInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * TableOCR请求参数结构体
 * @class
 */
class TableOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 图片大小
 * @class
 */
class QrcodeImgSize extends AbstractModel {

    Wide: number | null
    
    High: number | null
    
    constructor(){
        super();

        /**
         * 宽
         */
        this.Wide = null;

        /**
         * 高
         */
        this.High = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Wide: number | null;
        High: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Wide = 'Wide' in params ? params.Wide : null;
        this.High = 'High' in params ? params.High : null;

    }
}

/**
 * VerifyBasicBizLicense返回参数结构体
 * @class
 */
class VerifyBasicBizLicenseResponse extends AbstractModel {

    ErrorCode: number | null
    
    CreditCode: string | null
    
    Opfrom: string | null
    
    Opto: string | null
    
    Frname: string | null
    
    Entstatus: string | null
    
    Zsopscope: string | null
    
    Reason: string | null
    
    Oriregno: string | null
    
    VerifyRegno: string | null
    
    Regno: string | null
    
    VerifyEntname: string | null
    
    Entname: string | null
    
    VerifyDom: string | null
    
    Dom: string | null
    
    RegNumResult: BizLicenseVerifyResult | null
    
    RegCapital: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 状态码，成功时返回0
         */
        this.ErrorCode = null;

        /**
         * 统一社会信用代码
         */
        this.CreditCode = null;

        /**
         * 经营期限自（YYYY-MM-DD）
         */
        this.Opfrom = null;

        /**
         * 经营期限至（YYYY-MM-DD）
         */
        this.Opto = null;

        /**
         * 法人姓名
         */
        this.Frname = null;

        /**
         * 经营状态（在营、注销、吊销、其他）
         */
        this.Entstatus = null;

        /**
         * 经营业务范围
         */
        this.Zsopscope = null;

        /**
         * 状态信息
         */
        this.Reason = null;

        /**
         * 原注册号
         */
        this.Oriregno = null;

        /**
         * 要核验的工商注册号
         */
        this.VerifyRegno = null;

        /**
         * 工商注册号
         */
        this.Regno = null;

        /**
         * 要核验的企业名称
         */
        this.VerifyEntname = null;

        /**
         * 企业名称
         */
        this.Entname = null;

        /**
         * 要核验的住址
         */
        this.VerifyDom = null;

        /**
         * 住址
         */
        this.Dom = null;

        /**
         * 验证结果
         */
        this.RegNumResult = null;

        /**
         * 注册资本（单位：万元）,只有输入参数regCapital为1的时候才输出
         */
        this.RegCapital = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ErrorCode: number | null;
        CreditCode: string | null;
        Opfrom: string | null;
        Opto: string | null;
        Frname: string | null;
        Entstatus: string | null;
        Zsopscope: string | null;
        Reason: string | null;
        Oriregno: string | null;
        VerifyRegno: string | null;
        Regno: string | null;
        VerifyEntname: string | null;
        Entname: string | null;
        VerifyDom: string | null;
        Dom: string | null;
        RegNumResult: BizLicenseVerifyResult | null;
        RegCapital: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.CreditCode = 'CreditCode' in params ? params.CreditCode : null;
        this.Opfrom = 'Opfrom' in params ? params.Opfrom : null;
        this.Opto = 'Opto' in params ? params.Opto : null;
        this.Frname = 'Frname' in params ? params.Frname : null;
        this.Entstatus = 'Entstatus' in params ? params.Entstatus : null;
        this.Zsopscope = 'Zsopscope' in params ? params.Zsopscope : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Oriregno = 'Oriregno' in params ? params.Oriregno : null;
        this.VerifyRegno = 'VerifyRegno' in params ? params.VerifyRegno : null;
        this.Regno = 'Regno' in params ? params.Regno : null;
        this.VerifyEntname = 'VerifyEntname' in params ? params.VerifyEntname : null;
        this.Entname = 'Entname' in params ? params.Entname : null;
        this.VerifyDom = 'VerifyDom' in params ? params.VerifyDom : null;
        this.Dom = 'Dom' in params ? params.Dom : null;

        if (params.RegNumResult) {
            let obj = new BizLicenseVerifyResult();
            obj.deserialize(params.RegNumResult)
            this.RegNumResult = obj;
        }
        this.RegCapital = 'RegCapital' in params ? params.RegCapital : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VehicleRegCertOCR请求参数结构体
 * @class
 */
class VehicleRegCertOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 商品码信息
 * @class
 */
class ProductDataRecord extends AbstractModel {

    ProductName: string | null
    
    EnName: string | null
    
    BrandName: string | null
    
    Type: string | null
    
    Width: string | null
    
    Height: string | null
    
    Depth: string | null
    
    KeyWord: string | null
    
    Description: string | null
    
    ImageLink: Array<string> | null
    
    ManufacturerName: string | null
    
    ManufacturerAddress: string | null
    
    FirmCode: string | null
    
    CheckResult: string | null
    
    CategoryCode: string | null
    
    constructor(){
        super();

        /**
         * 产品名称
         */
        this.ProductName = null;

        /**
         * 产品名称(英文)
         */
        this.EnName = null;

        /**
         * 品牌名称
         */
        this.BrandName = null;

        /**
         * 规格型号
         */
        this.Type = null;

        /**
         * 宽度，单位毫米
         */
        this.Width = null;

        /**
         * 高度，单位毫米
         */
        this.Height = null;

        /**
         * 深度，单位毫米
         */
        this.Depth = null;

        /**
         * 关键字
         */
        this.KeyWord = null;

        /**
         * 简短描述
         */
        this.Description = null;

        /**
         * 图片链接
         */
        this.ImageLink = null;

        /**
         * 厂家名称
         */
        this.ManufacturerName = null;

        /**
         * 厂家地址
         */
        this.ManufacturerAddress = null;

        /**
         * 企业社会信用代码
         */
        this.FirmCode = null;

        /**
         * 表示数据查询状态
checkResult	状态说明
1	 经查，该商品条码已在中国物品编码中心注册
2	经查，该厂商识别代码已在中国物品编码中心注册，但编码信息未按规定通报。
3	经查，该厂商识别代码已于xxxxx注销，请关注产品生产日期。
4	经查，该企业以及条码未经条码中心注册，属于违法使用
-1	经查，该商品条码被冒用
-2	经查，该厂商识别代码已在中国物品编码中心注册，但该产品已经下市
S001                未找到该厂商识别代码的注册信息。
S002		该厂商识别代码已经在GS1注册，但编码信息未通报
S003		该商品条码已在GS1通报
S004		该商品条码已注销
S005		数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。
E001		完整性失败：此GTIN的长度无效。
E002		完整性失败：校验位不正确。
E003		完整性失败：字符串包含字母数字字符。
E004		数字不正确。GS1前缀（3位国家/地区代码）不存在。
E005		数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。
E006		数字不正确。尚未分配该GS1公司前缀。
E008	        经查，该企业厂商识别代码以及条码尚未通报
         */
        this.CheckResult = null;

        /**
         * UNSPSC分类码
         */
        this.CategoryCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductName: string | null;
        EnName: string | null;
        BrandName: string | null;
        Type: string | null;
        Width: string | null;
        Height: string | null;
        Depth: string | null;
        KeyWord: string | null;
        Description: string | null;
        ImageLink: Array<string> | null;
        ManufacturerName: string | null;
        ManufacturerAddress: string | null;
        FirmCode: string | null;
        CheckResult: string | null;
        CategoryCode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.EnName = 'EnName' in params ? params.EnName : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ImageLink = 'ImageLink' in params ? params.ImageLink : null;
        this.ManufacturerName = 'ManufacturerName' in params ? params.ManufacturerName : null;
        this.ManufacturerAddress = 'ManufacturerAddress' in params ? params.ManufacturerAddress : null;
        this.FirmCode = 'FirmCode' in params ? params.FirmCode : null;
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.CategoryCode = 'CategoryCode' in params ? params.CategoryCode : null;

    }
}

/**
 * LicensePlateOCR请求参数结构体
 * @class
 */
class LicensePlateOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * GeneralBasicOCR请求参数结构体
 * @class
 */
class GeneralBasicOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    Scene: string | null
    
    LanguageType: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 保留字段。
         */
        this.Scene = null;

        /**
         * 识别语言类型。
支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)，各种语言均支持与英文混合的文字识别。
可选值：
zh\auto\jap\kor\
spa\fre\ger\por\
vie\may\rus\ita\
hol\swe\fin\dan\
nor\hun\tha\lat
可选值分别表示：
中英文混合、自动识别、日语、韩语、
西班牙语、法语、德语、葡萄牙语、
越南语、马来语、俄语、意大利语、
荷兰语、瑞典语、芬兰语、丹麦语、
挪威语、匈牙利语、泰语、拉丁语系。
         */
        this.LanguageType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        Scene: string | null;
        LanguageType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.LanguageType = 'LanguageType' in params ? params.LanguageType : null;

    }
}

/**
 * 行驶证副页正面的识别结果
 * @class
 */
class TextVehicleBack extends AbstractModel {

    PlateNo: string | null
    
    FileNo: string | null
    
    AllowNum: string | null
    
    TotalMass: string | null
    
    CurbWeight: string | null
    
    LoadQuality: string | null
    
    ExternalSize: string | null
    
    Marks: string | null
    
    Record: string | null
    
    TotalQuasiMass: string | null
    
    constructor(){
        super();

        /**
         * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlateNo = null;

        /**
         * 档案编号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FileNo = null;

        /**
         * 核定人数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AllowNum = null;

        /**
         * 总质量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TotalMass = null;

        /**
         * 整备质量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CurbWeight = null;

        /**
         * 核定载质量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LoadQuality = null;

        /**
         * 外廓尺寸
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExternalSize = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Marks = null;

        /**
         * 检验记录
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Record = null;

        /**
         * 准牵引总质量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TotalQuasiMass = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PlateNo: string | null;
        FileNo: string | null;
        AllowNum: string | null;
        TotalMass: string | null;
        CurbWeight: string | null;
        LoadQuality: string | null;
        ExternalSize: string | null;
        Marks: string | null;
        Record: string | null;
        TotalQuasiMass: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PlateNo = 'PlateNo' in params ? params.PlateNo : null;
        this.FileNo = 'FileNo' in params ? params.FileNo : null;
        this.AllowNum = 'AllowNum' in params ? params.AllowNum : null;
        this.TotalMass = 'TotalMass' in params ? params.TotalMass : null;
        this.CurbWeight = 'CurbWeight' in params ? params.CurbWeight : null;
        this.LoadQuality = 'LoadQuality' in params ? params.LoadQuality : null;
        this.ExternalSize = 'ExternalSize' in params ? params.ExternalSize : null;
        this.Marks = 'Marks' in params ? params.Marks : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.TotalQuasiMass = 'TotalQuasiMass' in params ? params.TotalQuasiMass : null;

    }
}

/**
 * GeneralEfficientOCR请求参数结构体
 * @class
 */
class GeneralEfficientOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * TollInvoiceOCR返回参数结构体
 * @class
 */
class TollInvoiceOCRResponse extends AbstractModel {

    TollInvoiceInfos: Array<TollInvoiceInfo> | null
    
    Angle: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 过路过桥费发票识别结果，具体内容请点击左侧链接。
         */
        this.TollInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TollInvoiceInfos: Array<TollInvoiceInfo> | null;
        Angle: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TollInvoiceInfos) {
            this.TollInvoiceInfos = new Array();
            for (let z in params.TollInvoiceInfos) {
                let obj = new TollInvoiceInfo();
                obj.deserialize(params.TollInvoiceInfos[z]);
                this.TollInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RideHailingDriverLicenseOCR返回参数结构体
 * @class
 */
class RideHailingDriverLicenseOCRResponse extends AbstractModel {

    Name: string | null
    
    LicenseNumber: string | null
    
    StartDate: string | null
    
    EndDate: string | null
    
    ReleaseDate: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 证号，对应网约车驾驶证字段：证号/从业资格证号/驾驶员证号/身份证号
         */
        this.LicenseNumber = null;

        /**
         * 有效起始日期
         */
        this.StartDate = null;

        /**
         * 有效期截止时间，对应网约车驾驶证字段：有效期至/营运期限止
         */
        this.EndDate = null;

        /**
         * 初始发证日期，对应网约车驾驶证字段：初始领证日期/发证日期
         */
        this.ReleaseDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        LicenseNumber: string | null;
        StartDate: string | null;
        EndDate: string | null;
        ReleaseDate: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.LicenseNumber = 'LicenseNumber' in params ? params.LicenseNumber : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ReleaseDate = 'ReleaseDate' in params ? params.ReleaseDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnglishOCR请求参数结构体
 * @class
 */
class EnglishOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    EnableCoordPoint: boolean | null
    
    EnableCandWord: boolean | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 单词四点坐标开关，开启可返回图片中单词的四点坐标。
该参数默认值为false。
         */
        this.EnableCoordPoint = null;

        /**
         * 候选字开关，开启可返回识别时多个可能的候选字（每个候选字对应其置信度）。
该参数默认值为false。
         */
        this.EnableCandWord = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        EnableCoordPoint: boolean | null;
        EnableCandWord: boolean | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.EnableCoordPoint = 'EnableCoordPoint' in params ? params.EnableCoordPoint : null;
        this.EnableCandWord = 'EnableCandWord' in params ? params.EnableCandWord : null;

    }
}

/**
 * VatInvoiceVerify返回参数结构体
 * @class
 */
class VatInvoiceVerifyResponse extends AbstractModel {

    Invoice: VatInvoice | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 增值税发票信息，详情请点击左侧链接。
         */
        this.Invoice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Invoice: VatInvoice | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Invoice) {
            let obj = new VatInvoice();
            obj.deserialize(params.Invoice)
            this.Invoice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PassportOCR返回参数结构体
 * @class
 */
class PassportOCRResponse extends AbstractModel {

    Country: string | null
    
    PassportNo: string | null
    
    Sex: string | null
    
    Nationality: string | null
    
    BirthDate: string | null
    
    BirthPlace: string | null
    
    IssueDate: string | null
    
    IssuePlace: string | null
    
    ExpiryDate: string | null
    
    Signature: string | null
    
    CodeSet: string | null
    
    CodeCrc: string | null
    
    Name: string | null
    
    FamilyName: string | null
    
    FirstName: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 国家码
         */
        this.Country = null;

        /**
         * 护照号
         */
        this.PassportNo = null;

        /**
         * 性别
         */
        this.Sex = null;

        /**
         * 国籍
         */
        this.Nationality = null;

        /**
         * 出生日期
         */
        this.BirthDate = null;

        /**
         * 出生地点
         */
        this.BirthPlace = null;

        /**
         * 签发日期
         */
        this.IssueDate = null;

        /**
         * 签发地点
         */
        this.IssuePlace = null;

        /**
         * 有效期
         */
        this.ExpiryDate = null;

        /**
         * 持证人签名
         */
        this.Signature = null;

        /**
         * 最下方第一行 MRZ Code 序列
         */
        this.CodeSet = null;

        /**
         * 最下方第二行 MRZ Code 序列
         */
        this.CodeCrc = null;

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 姓
         */
        this.FamilyName = null;

        /**
         * 名
         */
        this.FirstName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Country: string | null;
        PassportNo: string | null;
        Sex: string | null;
        Nationality: string | null;
        BirthDate: string | null;
        BirthPlace: string | null;
        IssueDate: string | null;
        IssuePlace: string | null;
        ExpiryDate: string | null;
        Signature: string | null;
        CodeSet: string | null;
        CodeCrc: string | null;
        Name: string | null;
        FamilyName: string | null;
        FirstName: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Country = 'Country' in params ? params.Country : null;
        this.PassportNo = 'PassportNo' in params ? params.PassportNo : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.BirthDate = 'BirthDate' in params ? params.BirthDate : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.IssuePlace = 'IssuePlace' in params ? params.IssuePlace : null;
        this.ExpiryDate = 'ExpiryDate' in params ? params.ExpiryDate : null;
        this.Signature = 'Signature' in params ? params.Signature : null;
        this.CodeSet = 'CodeSet' in params ? params.CodeSet : null;
        this.CodeCrc = 'CodeCrc' in params ? params.CodeCrc : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.FamilyName = 'FamilyName' in params ? params.FamilyName : null;
        this.FirstName = 'FirstName' in params ? params.FirstName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralAccurateOCR请求参数结构体
 * @class
 */
class GeneralAccurateOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * OrgCodeCertOCR请求参数结构体
 * @class
 */
class OrgCodeCertOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * FlightInvoiceOCR返回参数结构体
 * @class
 */
class FlightInvoiceOCRResponse extends AbstractModel {

    FlightInvoiceInfos: Array<FlightInvoiceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 机票行程单识别结果，具体内容请点击左侧链接。
         */
        this.FlightInvoiceInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FlightInvoiceInfos: Array<FlightInvoiceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FlightInvoiceInfos) {
            this.FlightInvoiceInfos = new Array();
            for (let z in params.FlightInvoiceInfos) {
                let obj = new FlightInvoiceInfo();
                obj.deserialize(params.FlightInvoiceInfos[z]);
                this.FlightInvoiceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InstitutionOCR请求参数结构体
 * @class
 */
class InstitutionOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 购车发票识别结果
 * @class
 */
class CarInvoiceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * 机票行程单识别结果
 * @class
 */
class FlightInvoiceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 行驶证主页正面的识别结果
 * @class
 */
class TextVehicleFront extends AbstractModel {

    PlateNo: string | null
    
    VehicleType: string | null
    
    Owner: string | null
    
    Address: string | null
    
    UseCharacter: string | null
    
    Model: string | null
    
    Vin: string | null
    
    EngineNo: string | null
    
    RegisterDate: string | null
    
    IssueDate: string | null
    
    Seal: string | null
    
    constructor(){
        super();

        /**
         * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PlateNo = null;

        /**
         * 车辆类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VehicleType = null;

        /**
         * 所有人
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Owner = null;

        /**
         * 住址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Address = null;

        /**
         * 使用性质
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UseCharacter = null;

        /**
         * 品牌型号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Model = null;

        /**
         * 车辆识别代号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Vin = null;

        /**
         * 发动机号码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EngineNo = null;

        /**
         * 注册日期
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RegisterDate = null;

        /**
         * 发证日期
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IssueDate = null;

        /**
         * 印章
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Seal = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PlateNo: string | null;
        VehicleType: string | null;
        Owner: string | null;
        Address: string | null;
        UseCharacter: string | null;
        Model: string | null;
        Vin: string | null;
        EngineNo: string | null;
        RegisterDate: string | null;
        IssueDate: string | null;
        Seal: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PlateNo = 'PlateNo' in params ? params.PlateNo : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UseCharacter = 'UseCharacter' in params ? params.UseCharacter : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.Vin = 'Vin' in params ? params.Vin : null;
        this.EngineNo = 'EngineNo' in params ? params.EngineNo : null;
        this.RegisterDate = 'RegisterDate' in params ? params.RegisterDate : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.Seal = 'Seal' in params ? params.Seal : null;

    }
}

/**
 * 金融票据切片识别单个字段的内容
 * @class
 */
class FinanBillSliceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * QueryBarCode返回参数结构体
 * @class
 */
class QueryBarCodeResponse extends AbstractModel {

    BarCode: string | null
    
    ProductDataRecords: Array<ProductDataRecord> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 条码
         */
        this.BarCode = null;

        /**
         * 条码信息数组
         */
        this.ProductDataRecords = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BarCode: string | null;
        ProductDataRecords: Array<ProductDataRecord> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.BarCode = 'BarCode' in params ? params.BarCode : null;

        if (params.ProductDataRecords) {
            this.ProductDataRecords = new Array();
            for (let z in params.ProductDataRecords) {
                let obj = new ProductDataRecord();
                obj.deserialize(params.ProductDataRecords[z]);
                this.ProductDataRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ArithmeticOCR请求参数结构体
 * @class
 */
class ArithmeticOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * FinanBillSliceOCR请求参数结构体
 * @class
 */
class FinanBillSliceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDPassportOCR返回参数结构体
 * @class
 */
class MLIDPassportOCRResponse extends AbstractModel {

    ID: string | null
    
    Name: string | null
    
    DateOfBirth: string | null
    
    Sex: string | null
    
    DateOfExpiration: string | null
    
    IssuingCountry: string | null
    
    Nationality: string | null
    
    Warn: Array<number> | null
    
    Image: string | null
    
    AdvancedInfo: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 护照ID
         */
        this.ID = null;

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 出生日期
         */
        this.DateOfBirth = null;

        /**
         * 性别（F女，M男）
         */
        this.Sex = null;

        /**
         * 有效期
         */
        this.DateOfExpiration = null;

        /**
         * 发行国
         */
        this.IssuingCountry = null;

        /**
         * 国籍
         */
        this.Nationality = null;

        /**
         * 告警码
-9103	证照翻拍告警
-9102	证照复印件告警
-9106       证件遮挡告警
         */
        this.Warn = null;

        /**
         * 证件图片
         */
        this.Image = null;

        /**
         * 扩展字段:
{
    ID:{
        Confidence:0.9999
    },
    Name:{
        Confidence:0.9996
    }
}
         */
        this.AdvancedInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ID: string | null;
        Name: string | null;
        DateOfBirth: string | null;
        Sex: string | null;
        DateOfExpiration: string | null;
        IssuingCountry: string | null;
        Nationality: string | null;
        Warn: Array<number> | null;
        Image: string | null;
        AdvancedInfo: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.IssuingCountry = 'IssuingCountry' in params ? params.IssuingCountry : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatRollInvoiceOCR请求参数结构体
 * @class
 */
class VatRollInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 坐标
 * @class
 */
class Coord extends AbstractModel {

    X: number | null
    
    Y: number | null
    
    constructor(){
        super();

        /**
         * 横坐标
         */
        this.X = null;

        /**
         * 纵坐标
         */
        this.Y = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        X: number | null;
        Y: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;

    }
}

/**
 * SealOCR返回参数结构体
 * @class
 */
class SealOCRResponse extends AbstractModel {

    SealBody: string | null
    
    Location: Rect | null
    
    OtherTexts: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 印章内容
         */
        this.SealBody = null;

        /**
         * 印章坐标
         */
        this.Location = null;

        /**
         * 其它文本内容
         */
        this.OtherTexts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SealBody: string | null;
        Location: Rect | null;
        OtherTexts: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SealBody = 'SealBody' in params ? params.SealBody : null;

        if (params.Location) {
            let obj = new Rect();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.OtherTexts = 'OtherTexts' in params ? params.OtherTexts : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别出的字段
 * @class
 */
class DutyPaidProofInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * FinanBillOCR返回参数结构体
 * @class
 */
class FinanBillOCRResponse extends AbstractModel {

    FinanBillInfos: Array<FinanBillInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 金融票据整单识别结果，具体内容请点击左侧链接。
         */
        this.FinanBillInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FinanBillInfos: Array<FinanBillInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FinanBillInfos) {
            this.FinanBillInfos = new Array();
            for (let z in params.FinanBillInfos) {
                let obj = new FinanBillInfo();
                obj.deserialize(params.FinanBillInfos[z]);
                this.FinanBillInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 运单识别结果
 * @class
 */
class TextWaybill extends AbstractModel {

    RecName: WaybillObj | null
    
    RecNum: WaybillObj | null
    
    RecAddr: WaybillObj | null
    
    SenderName: WaybillObj | null
    
    SenderNum: WaybillObj | null
    
    SenderAddr: WaybillObj | null
    
    WaybillNum: WaybillObj | null
    
    constructor(){
        super();

        /**
         * 收件人姓名
         */
        this.RecName = null;

        /**
         * 收件人手机号
         */
        this.RecNum = null;

        /**
         * 收件人地址
         */
        this.RecAddr = null;

        /**
         * 寄件人姓名
         */
        this.SenderName = null;

        /**
         * 寄件人手机号
         */
        this.SenderNum = null;

        /**
         * 寄件人地址
         */
        this.SenderAddr = null;

        /**
         * 运单号
         */
        this.WaybillNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RecName: WaybillObj | null;
        RecNum: WaybillObj | null;
        RecAddr: WaybillObj | null;
        SenderName: WaybillObj | null;
        SenderNum: WaybillObj | null;
        SenderAddr: WaybillObj | null;
        WaybillNum: WaybillObj | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.RecName) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecName)
            this.RecName = obj;
        }

        if (params.RecNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecNum)
            this.RecNum = obj;
        }

        if (params.RecAddr) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecAddr)
            this.RecAddr = obj;
        }

        if (params.SenderName) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderName)
            this.SenderName = obj;
        }

        if (params.SenderNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderNum)
            this.SenderNum = obj;
        }

        if (params.SenderAddr) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderAddr)
            this.SenderAddr = obj;
        }

        if (params.WaybillNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.WaybillNum)
            this.WaybillNum = obj;
        }

    }
}

/**
 * 试题识别结构化信息
 * @class
 */
class QuestionObj extends AbstractModel {

    QuestionTextNo: string | null
    
    QuestionTextType: number | null
    
    QuestionText: string | null
    
    QuestionOptions: string | null
    
    QuestionSubquestion: string | null
    
    constructor(){
        super();

        /**
         * 题号
         */
        this.QuestionTextNo = null;

        /**
         * 题型：
1: "选择题"
2: "填空题"
3: "解答题"
         */
        this.QuestionTextType = null;

        /**
         * 题干
         */
        this.QuestionText = null;

        /**
         * 选择题选项，包含1个或多个option
         */
        this.QuestionOptions = null;

        /**
         * 所有子题的question属性
         */
        this.QuestionSubquestion = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        QuestionTextNo: string | null;
        QuestionTextType: number | null;
        QuestionText: string | null;
        QuestionOptions: string | null;
        QuestionSubquestion: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.QuestionTextNo = 'QuestionTextNo' in params ? params.QuestionTextNo : null;
        this.QuestionTextType = 'QuestionTextType' in params ? params.QuestionTextType : null;
        this.QuestionText = 'QuestionText' in params ? params.QuestionText : null;
        this.QuestionOptions = 'QuestionOptions' in params ? params.QuestionOptions : null;
        this.QuestionSubquestion = 'QuestionSubquestion' in params ? params.QuestionSubquestion : null;

    }
}

/**
 * VinOCR返回参数结构体
 * @class
 */
class VinOCRResponse extends AbstractModel {

    Vin: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的车辆 VIN 码。
         */
        this.Vin = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Vin: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Vin = 'Vin' in params ? params.Vin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EduPaperOCR请求参数结构体
 * @class
 */
class EduPaperOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    Config: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 扩展配置信息。
配置格式：{"option1":value1,"option2":value2}
可配置信息：
      参数名称  是否必选   类型   可选值  默认值  描述
      task_type  否  Int32  [0,1]  1  用于选择任务类型: 0: 关闭版式分析与处理 1: 开启版式分析处理
      is_structuralization 否 Bool false\true true  用于选择是否结构化输出：false：返回包体返回通用输出 true：返回包体同时返回通用和结构化输出
      if_readable_format 否 Bool false\true false 是否按照版式整合通用文本/公式输出结果
例子：
{"task_type": 1,"is_structuralization": true,"if_readable_format": true}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        Config: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * FormulaOCR请求参数结构体
 * @class
 */
class FormulaOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * PassportOCR请求参数结构体
 * @class
 */
class PassportOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    Type: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

        /**
         * 默认填写CN
支持中国大陆地区护照。
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DutyPaidProofOCR请求参数结构体
 * @class
 */
class DutyPaidProofOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * RideHailingDriverLicenseOCR请求参数结构体
 * @class
 */
class RideHailingDriverLicenseOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * QueryBarCode请求参数结构体
 * @class
 */
class QueryBarCodeRequest extends AbstractModel {

    BarCode: string | null
    
    constructor(){
        super();

        /**
         * 条形码
         */
        this.BarCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BarCode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.BarCode = 'BarCode' in params ? params.BarCode : null;

    }
}

/**
 * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
 * @class
 */
class ItemCoord extends AbstractModel {

    X: number | null
    
    Y: number | null
    
    Width: number | null
    
    Height: number | null
    
    constructor(){
        super();

        /**
         * 左上角x
         */
        this.X = null;

        /**
         * 左上角y
         */
        this.Y = null;

        /**
         * 宽width
         */
        this.Width = null;

        /**
         * 高height
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
 * OrgCodeCertOCR返回参数结构体
 * @class
 */
class OrgCodeCertOCRResponse extends AbstractModel {

    OrgCode: string | null
    
    Name: string | null
    
    Address: string | null
    
    ValidDate: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 代码
         */
        this.OrgCode = null;

        /**
         * 机构名称
         */
        this.Name = null;

        /**
         * 地址
         */
        this.Address = null;

        /**
         * 有效期
         */
        this.ValidDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrgCode: string | null;
        Name: string | null;
        Address: string | null;
        ValidDate: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrgCode = 'OrgCode' in params ? params.OrgCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MixedInvoiceOCR请求参数结构体
 * @class
 */
class MixedInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    Types: Array<number> | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 需要识别的票据类型列表，为空或不填表示识别全部类型。
0：出租车发票
1：定额发票
2：火车票
3：增值税发票
5：机票行程单
8：通用机打发票
9：汽车票
10：轮船票
11：增值税发票（卷票 ）
12：购车发票
13：过路过桥费发票
         */
        this.Types = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        Types: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Types = 'Types' in params ? params.Types : null;

    }
}

/**
 * ResidenceBookletOCR返回参数结构体
 * @class
 */
class ResidenceBookletOCRResponse extends AbstractModel {

    HouseholdNumber: string | null
    
    Name: string | null
    
    Sex: string | null
    
    BirthPlace: string | null
    
    Nation: string | null
    
    NativePlace: string | null
    
    BirthDate: string | null
    
    IdCardNumber: string | null
    
    EducationDegree: string | null
    
    ServicePlace: string | null
    
    Household: string | null
    
    Address: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 户号
         */
        this.HouseholdNumber = null;

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 性别
         */
        this.Sex = null;

        /**
         * 出生地
         */
        this.BirthPlace = null;

        /**
         * 民族
         */
        this.Nation = null;

        /**
         * 籍贯
         */
        this.NativePlace = null;

        /**
         * 出生日期
         */
        this.BirthDate = null;

        /**
         * 公民身份证件编号
         */
        this.IdCardNumber = null;

        /**
         * 文化程度
         */
        this.EducationDegree = null;

        /**
         * 服务处所
         */
        this.ServicePlace = null;

        /**
         * 户别
         */
        this.Household = null;

        /**
         * 住址
         */
        this.Address = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        HouseholdNumber: string | null;
        Name: string | null;
        Sex: string | null;
        BirthPlace: string | null;
        Nation: string | null;
        NativePlace: string | null;
        BirthDate: string | null;
        IdCardNumber: string | null;
        EducationDegree: string | null;
        ServicePlace: string | null;
        Household: string | null;
        Address: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.HouseholdNumber = 'HouseholdNumber' in params ? params.HouseholdNumber : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.NativePlace = 'NativePlace' in params ? params.NativePlace : null;
        this.BirthDate = 'BirthDate' in params ? params.BirthDate : null;
        this.IdCardNumber = 'IdCardNumber' in params ? params.IdCardNumber : null;
        this.EducationDegree = 'EducationDegree' in params ? params.EducationDegree : null;
        this.ServicePlace = 'ServicePlace' in params ? params.ServicePlace : null;
        this.Household = 'Household' in params ? params.Household : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CarInvoiceOCR返回参数结构体
 * @class
 */
class CarInvoiceOCRResponse extends AbstractModel {

    CarInvoiceInfos: Array<CarInvoiceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 购车发票识别结果，具体内容请点击左侧链接。
         */
        this.CarInvoiceInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CarInvoiceInfos: Array<CarInvoiceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CarInvoiceInfos) {
            this.CarInvoiceInfos = new Array();
            for (let z in params.CarInvoiceInfos) {
                let obj = new CarInvoiceInfo();
                obj.deserialize(params.CarInvoiceInfos[z]);
                this.CarInvoiceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralFastOCR请求参数结构体
 * @class
 */
class GeneralFastOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * ShipInvoiceOCR返回参数结构体
 * @class
 */
class ShipInvoiceOCRResponse extends AbstractModel {

    ShipInvoiceInfos: Array<ShipInvoiceInfo> | null
    
    Angle: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 轮船票识别结果，具体内容请点击左侧链接。
         */
        this.ShipInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ShipInvoiceInfos: Array<ShipInvoiceInfo> | null;
        Angle: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ShipInvoiceInfos) {
            this.ShipInvoiceInfos = new Array();
            for (let z in params.ShipInvoiceInfos) {
                let obj = new ShipInvoiceInfo();
                obj.deserialize(params.ShipInvoiceInfos[z]);
                this.ShipInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 保险单据信息
 * @class
 */
class InsuranceBillInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * VehicleRegCertOCR返回参数结构体
 * @class
 */
class VehicleRegCertOCRResponse extends AbstractModel {

    VehicleRegCertInfos: Array<VehicleRegCertInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 机动车登记证书识别结果，具体内容请点击左侧链接。
         */
        this.VehicleRegCertInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VehicleRegCertInfos: Array<VehicleRegCertInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.VehicleRegCertInfos) {
            this.VehicleRegCertInfos = new Array();
            for (let z in params.VehicleRegCertInfos) {
                let obj = new VehicleRegCertInfo();
                obj.deserialize(params.VehicleRegCertInfos[z]);
                this.VehicleRegCertInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 卡证智能分类结果
 * @class
 */
class ClassifyDetectInfo extends AbstractModel {

    Name: string | null
    
    Type: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 分类名称
         */
        this.Name = null;

        /**
         * 分类类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Type = null;

        /**
         * 位置坐标
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Type: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * GeneralAccurateOCR返回参数结构体
 * @class
 */
class GeneralAccurateOCRResponse extends AbstractModel {

    TextDetections: Array<TextDetection> | null
    
    Angel: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。
         */
        this.Angel = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: Array<TextDetection> | null;
        Angel: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SealOCR请求参数结构体
 * @class
 */
class SealOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 表格识别结果
 * @class
 */
class TextTable extends AbstractModel {

    ColTl: number | null
    
    RowTl: number | null
    
    ColBr: number | null
    
    RowBr: number | null
    
    Text: string | null
    
    Type: string | null
    
    Confidence: number | null
    
    Polygon: Array<Coord> | null
    
    AdvancedInfo: string | null
    
    constructor(){
        super();

        /**
         * 单元格左上角的列索引
         */
        this.ColTl = null;

        /**
         * 单元格左上角的行索引
         */
        this.RowTl = null;

        /**
         * 单元格右下角的列索引
         */
        this.ColBr = null;

        /**
         * 单元格右下角的行索引
         */
        this.RowBr = null;

        /**
         * 单元格文字
         */
        this.Text = null;

        /**
         * 单元格类型，包含body（表格主体）、header（表头）、footer（表尾）三种
         */
        this.Type = null;

        /**
         * 置信度 0 ~100
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ColTl: number | null;
        RowTl: number | null;
        ColBr: number | null;
        RowBr: number | null;
        Text: string | null;
        Type: string | null;
        Confidence: number | null;
        Polygon: Array<Coord> | null;
        AdvancedInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ColTl = 'ColTl' in params ? params.ColTl : null;
        this.RowTl = 'RowTl' in params ? params.RowTl : null;
        this.ColBr = 'ColBr' in params ? params.ColBr : null;
        this.RowBr = 'RowBr' in params ? params.RowBr : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * ResidenceBookletOCR请求参数结构体
 * @class
 */
class ResidenceBookletOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BusInvoiceOCR返回参数结构体
 * @class
 */
class BusInvoiceOCRResponse extends AbstractModel {

    BusInvoiceInfos: Array<BusInvoiceInfo> | null
    
    Angle: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 汽车票识别结果，具体内容请点击左侧链接。
         */
        this.BusInvoiceInfos = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
         */
        this.Angle = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        BusInvoiceInfos: Array<BusInvoiceInfo> | null;
        Angle: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.BusInvoiceInfos) {
            this.BusInvoiceInfos = new Array();
            for (let z in params.BusInvoiceInfos) {
                let obj = new BusInvoiceInfo();
                obj.deserialize(params.BusInvoiceInfos[z]);
                this.BusInvoiceInfos.push(obj);
            }
        }
        this.Angle = 'Angle' in params ? params.Angle : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 二维码/条形码识别结果信息
 * @class
 */
class QrcodeResultsInfo extends AbstractModel {

    TypeName: string | null
    
    Url: string | null
    
    Position: QrcodePositionObj | null
    
    constructor(){
        super();

        /**
         * 类型（二维码、条形码）
         */
        this.TypeName = null;

        /**
         * 二维码/条形码包含的地址
         */
        this.Url = null;

        /**
         * 二维码/条形码坐标（二维码会返回位置坐标，条形码暂不返回位置坐标，因此默认X和Y返回值均为-1）
         */
        this.Position = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TypeName: string | null;
        Url: string | null;
        Position: QrcodePositionObj | null;
    }): void {
        if (!params) {
            return;
        }
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Position) {
            let obj = new QrcodePositionObj();
            obj.deserialize(params.Position)
            this.Position = obj;
        }

    }
}

/**
 * MainlandPermitOCR返回参数结构体
 * @class
 */
class MainlandPermitOCRResponse extends AbstractModel {

    Name: string | null
    
    EnglishName: string | null
    
    Sex: string | null
    
    Birthday: string | null
    
    IssueAuthority: string | null
    
    ValidDate: string | null
    
    Number: string | null
    
    IssueAddress: string | null
    
    IssueNumber: string | null
    
    Type: string | null
    
    Profile: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 中文姓名
         */
        this.Name = null;

        /**
         * 英文姓名
         */
        this.EnglishName = null;

        /**
         * 性别
         */
        this.Sex = null;

        /**
         * 出生日期
         */
        this.Birthday = null;

        /**
         * 签发机关
         */
        this.IssueAuthority = null;

        /**
         * 有效期限
         */
        this.ValidDate = null;

        /**
         * 证件号
         */
        this.Number = null;

        /**
         * 签发地点
         */
        this.IssueAddress = null;

        /**
         * 签发次数
         */
        this.IssueNumber = null;

        /**
         * 证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。
         */
        this.Type = null;

        /**
         * RetProfile为True时返回头像字段， Base64编码
         */
        this.Profile = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        EnglishName: string | null;
        Sex: string | null;
        Birthday: string | null;
        IssueAuthority: string | null;
        ValidDate: string | null;
        Number: string | null;
        IssueAddress: string | null;
        IssueNumber: string | null;
        Type: string | null;
        Profile: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.IssueAuthority = 'IssueAuthority' in params ? params.IssueAuthority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.IssueAddress = 'IssueAddress' in params ? params.IssueAddress : null;
        this.IssueNumber = 'IssueNumber' in params ? params.IssueNumber : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 增值税发票信息
 * @class
 */
class VatInvoice extends AbstractModel {

    Code: string | null
    
    Number: string | null
    
    Date: string | null
    
    BuyerName: string | null
    
    BuyerTaxCode: string | null
    
    BuyerAddressPhone: string | null
    
    BuyerBankAccount: string | null
    
    SellerName: string | null
    
    SellerTaxCode: string | null
    
    SellerAddressPhone: string | null
    
    SellerBankAccount: string | null
    
    Remark: string | null
    
    MachineNo: string | null
    
    Type: string | null
    
    CheckCode: string | null
    
    IsAbandoned: string | null
    
    HasSellerList: string | null
    
    SellerListTitle: string | null
    
    SellerListTax: string | null
    
    AmountWithoutTax: string | null
    
    TaxAmount: string | null
    
    AmountWithTax: string | null
    
    Items: Array<VatInvoiceItem> | null
    
    constructor(){
        super();

        /**
         * 发票代码
         */
        this.Code = null;

        /**
         * 发票号码
         */
        this.Number = null;

        /**
         * 开票日期
         */
        this.Date = null;

        /**
         * 购方抬头
         */
        this.BuyerName = null;

        /**
         * 购方税号
         */
        this.BuyerTaxCode = null;

        /**
         * 购方地址电话
         */
        this.BuyerAddressPhone = null;

        /**
         * 购方银行账号
         */
        this.BuyerBankAccount = null;

        /**
         * 销方名称
         */
        this.SellerName = null;

        /**
         * 销方税号
         */
        this.SellerTaxCode = null;

        /**
         * 销方地址电话
         */
        this.SellerAddressPhone = null;

        /**
         * 销方银行账号
         */
        this.SellerBankAccount = null;

        /**
         * 备注
         */
        this.Remark = null;

        /**
         * 机器编码
         */
        this.MachineNo = null;

        /**
         * 发票类型
01：专用发票 
02：货运发票
03：机动车发票 
04：普通发票 
10：电子发票 
11：卷式发票 
14：通行费发票 
15：二手车发票
         */
        this.Type = null;

        /**
         * 检验码
         */
        this.CheckCode = null;

        /**
         * 是否作废（红冲）是否作废（红冲）
Y: 已作废 N：未作废 H：红冲
         */
        this.IsAbandoned = null;

        /**
         * 是否有销货清单 
Y: 有清单 N：无清单 
卷票无
         */
        this.HasSellerList = null;

        /**
         * 销货清单标题
         */
        this.SellerListTitle = null;

        /**
         * 销货清单税额
         */
        this.SellerListTax = null;

        /**
         * 不含税金额
         */
        this.AmountWithoutTax = null;

        /**
         * 税额
         */
        this.TaxAmount = null;

        /**
         * 含税金额
         */
        this.AmountWithTax = null;

        /**
         * 项目明细
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Code: string | null;
        Number: string | null;
        Date: string | null;
        BuyerName: string | null;
        BuyerTaxCode: string | null;
        BuyerAddressPhone: string | null;
        BuyerBankAccount: string | null;
        SellerName: string | null;
        SellerTaxCode: string | null;
        SellerAddressPhone: string | null;
        SellerBankAccount: string | null;
        Remark: string | null;
        MachineNo: string | null;
        Type: string | null;
        CheckCode: string | null;
        IsAbandoned: string | null;
        HasSellerList: string | null;
        SellerListTitle: string | null;
        SellerListTax: string | null;
        AmountWithoutTax: string | null;
        TaxAmount: string | null;
        AmountWithTax: string | null;
        Items: Array<VatInvoiceItem> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.BuyerName = 'BuyerName' in params ? params.BuyerName : null;
        this.BuyerTaxCode = 'BuyerTaxCode' in params ? params.BuyerTaxCode : null;
        this.BuyerAddressPhone = 'BuyerAddressPhone' in params ? params.BuyerAddressPhone : null;
        this.BuyerBankAccount = 'BuyerBankAccount' in params ? params.BuyerBankAccount : null;
        this.SellerName = 'SellerName' in params ? params.SellerName : null;
        this.SellerTaxCode = 'SellerTaxCode' in params ? params.SellerTaxCode : null;
        this.SellerAddressPhone = 'SellerAddressPhone' in params ? params.SellerAddressPhone : null;
        this.SellerBankAccount = 'SellerBankAccount' in params ? params.SellerBankAccount : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MachineNo = 'MachineNo' in params ? params.MachineNo : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.IsAbandoned = 'IsAbandoned' in params ? params.IsAbandoned : null;
        this.HasSellerList = 'HasSellerList' in params ? params.HasSellerList : null;
        this.SellerListTitle = 'SellerListTitle' in params ? params.SellerListTitle : null;
        this.SellerListTax = 'SellerListTax' in params ? params.SellerListTax : null;
        this.AmountWithoutTax = 'AmountWithoutTax' in params ? params.AmountWithoutTax : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;
        this.AmountWithTax = 'AmountWithTax' in params ? params.AmountWithTax : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new VatInvoiceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * HmtResidentPermitOCR返回参数结构体
 * @class
 */
class HmtResidentPermitOCRResponse extends AbstractModel {

    Name: string | null
    
    Sex: string | null
    
    Birth: string | null
    
    Address: string | null
    
    IdCardNo: string | null
    
    CardType: number | null
    
    ValidDate: string | null
    
    Authority: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 证件姓名
         */
        this.Name = null;

        /**
         * 性别
         */
        this.Sex = null;

        /**
         * 出生日期
         */
        this.Birth = null;

        /**
         * 地址
         */
        this.Address = null;

        /**
         * 身份证号
         */
        this.IdCardNo = null;

        /**
         * 0-正面
1-反面
         */
        this.CardType = null;

        /**
         * 证件有效期限
         */
        this.ValidDate = null;

        /**
         * 签发机关
         */
        this.Authority = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Sex: string | null;
        Birth: string | null;
        Address: string | null;
        IdCardNo: string | null;
        CardType: number | null;
        ValidDate: string | null;
        Authority: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdCardNo = 'IdCardNo' in params ? params.IdCardNo : null;
        this.CardType = 'CardType' in params ? params.CardType : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnglishOCR返回参数结构体
 * @class
 */
class EnglishOCRResponse extends AbstractModel {

    TextDetections: Array<TextDetectionEn> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: Array<TextDetectionEn> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetectionEn();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BusInvoiceOCR请求参数结构体
 * @class
 */
class BusInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * QuotaInvoiceOCR返回参数结构体
 * @class
 */
class QuotaInvoiceOCRResponse extends AbstractModel {

    InvoiceNum: string | null
    
    InvoiceCode: string | null
    
    Rate: string | null
    
    RateNum: string | null
    
    InvoiceType: string | null
    
    Province: string | null
    
    City: string | null
    
    HasStamp: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 发票号码
         */
        this.InvoiceNum = null;

        /**
         * 发票代码
         */
        this.InvoiceCode = null;

        /**
         * 大写金额
         */
        this.Rate = null;

        /**
         * 小写金额
         */
        this.RateNum = null;

        /**
         * 发票消费类型
         */
        this.InvoiceType = null;

        /**
         * 省
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Province = null;

        /**
         * 市
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.City = null;

        /**
         * 是否有公司印章（1有 0无 空为识别不出）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HasStamp = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InvoiceNum: string | null;
        InvoiceCode: string | null;
        Rate: string | null;
        RateNum: string | null;
        InvoiceType: string | null;
        Province: string | null;
        City: string | null;
        HasStamp: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InvoiceNum = 'InvoiceNum' in params ? params.InvoiceNum : null;
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.RateNum = 'RateNum' in params ? params.RateNum : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.HasStamp = 'HasStamp' in params ? params.HasStamp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RideHailingTransportLicenseOCR返回参数结构体
 * @class
 */
class RideHailingTransportLicenseOCRResponse extends AbstractModel {

    OperationLicenseNumber: string | null
    
    VehicleOwner: string | null
    
    VehicleNumber: string | null
    
    StartDate: string | null
    
    EndDate: string | null
    
    ReleaseDate: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 交运管许可字号。
         */
        this.OperationLicenseNumber = null;

        /**
         * 车辆所有人，对应网约车运输证字段：车辆所有人/车主名称/业户名称。
         */
        this.VehicleOwner = null;

        /**
         * 车牌号码，对应网约车运输证字段：车牌号码/车辆号牌。
         */
        this.VehicleNumber = null;

        /**
         * 有效起始日期。
         */
        this.StartDate = null;

        /**
         * 有效期截止时间，对应网约车运输证字段：有效期至/营运期限止。
         */
        this.EndDate = null;

        /**
         * 初始发证日期，对应网约车运输证字段：初始领证日期/发证日期。
         */
        this.ReleaseDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OperationLicenseNumber: string | null;
        VehicleOwner: string | null;
        VehicleNumber: string | null;
        StartDate: string | null;
        EndDate: string | null;
        ReleaseDate: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OperationLicenseNumber = 'OperationLicenseNumber' in params ? params.OperationLicenseNumber : null;
        this.VehicleOwner = 'VehicleOwner' in params ? params.VehicleOwner : null;
        this.VehicleNumber = 'VehicleNumber' in params ? params.VehicleNumber : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ReleaseDate = 'ReleaseDate' in params ? params.ReleaseDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 候选字符集(包含候选字Character以及置信度Confidence)
 * @class
 */
class CandWord extends AbstractModel {

    CandWords: Array<Words> | null
    
    constructor(){
        super();

        /**
         * 候选字符集的单词信息（包括单词Character和单词置信度confidence）
         */
        this.CandWords = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CandWords: Array<Words> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.CandWords) {
            this.CandWords = new Array();
            for (let z in params.CandWords) {
                let obj = new Words();
                obj.deserialize(params.CandWords[z]);
                this.CandWords.push(obj);
            }
        }

    }
}

/**
 * 企业证照单个字段的内容
 * @class
 */
class EnterpriseLicenseInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * InsuranceBillOCR请求参数结构体
 * @class
 */
class InsuranceBillOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * GeneralHandwritingOCR返回参数结构体
 * @class
 */
class GeneralHandwritingOCRResponse extends AbstractModel {

    TextDetections: Array<TextGeneralHandwriting> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: Array<TextGeneralHandwriting> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextGeneralHandwriting();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TableOCR返回参数结构体
 * @class
 */
class TableOCRResponse extends AbstractModel {

    TextDetections: Array<TextTable> | null
    
    Data: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * Base64 编码后的 Excel 数据。
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
        TextDetections: Array<TextTable> | null;
        Data: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextTable();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数学试题识别结构化对象
 * @class
 */
class QuestionBlockObj extends AbstractModel {

    QuestionArr: Array<QuestionObj> | null
    
    constructor(){
        super();

        /**
         * 数学试题识别结构化信息数组
         */
        this.QuestionArr = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        QuestionArr: Array<QuestionObj> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.QuestionArr) {
            this.QuestionArr = new Array();
            for (let z in params.QuestionArr) {
                let obj = new QuestionObj();
                obj.deserialize(params.QuestionArr[z]);
                this.QuestionArr.push(obj);
            }
        }

    }
}

/**
 * WaybillOCR请求参数结构体
 * @class
 */
class WaybillOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 增值税发票卷票信息
 * @class
 */
class VatRollInvoiceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * 轮船票字段信息
 * @class
 */
class ShipInvoiceInfo extends AbstractModel {

    Name: string | null
    
    Value: string | null
    
    Rect: Rect | null
    
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
         */
        this.Value = null;

        /**
         * 文本行在旋转纠正之后的图像中的像素坐标。
         */
        this.Rect = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        Value: string | null;
        Rect: Rect | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rect) {
            let obj = new Rect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }

    }
}

/**
 * IDCardOCR请求参数结构体
 * @class
 */
class IDCardOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    CardSide: string | null
    
    Config: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

        /**
         * FRONT：身份证有照片的一面（人像面），
BACK：身份证有国徽的一面（国徽面），
该参数如果不填，将为您自动判断身份证正反面。
         */
        this.CardSide = null;

        /**
         * 以下可选字段均为bool 类型，默认false：
CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）
CropPortrait，人像照片裁剪（自动抠取身份证头像区域）
CopyWarn，复印件告警
BorderCheckWarn，边框和框内遮挡告警
ReshootWarn，翻拍告警
DetectPsWarn，PS检测告警
TempIdWarn，临时身份证告警
InvalidDateWarn，身份证有效日期不合法告警
Quality，图片质量分数（评价图片的模糊程度）
MultiCardDetect，是否开启多卡证检测

SDK 设置方式参考：
Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})
API 3.0 Explorer 设置方式参考：
Config = {"CropIdCard":true,"CropPortrait":true}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        CardSide: string | null;
        Config: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CardSide = 'CardSide' in params ? params.CardSide : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * MixedInvoiceDetect请求参数结构体
 * @class
 */
class MixedInvoiceDetectRequest extends AbstractModel {

    ReturnImage: boolean | null
    
    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 是否需要返回裁剪后的图片。
         */
        this.ReturnImage = null;

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ReturnImage: boolean | null;
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ReturnImage = 'ReturnImage' in params ? params.ReturnImage : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * RideHailingTransportLicenseOCR请求参数结构体
 * @class
 */
class RideHailingTransportLicenseOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDCardOCR返回参数结构体
 * @class
 */
class MLIDCardOCRResponse extends AbstractModel {

    ID: string | null
    
    Name: string | null
    
    Address: string | null
    
    Sex: string | null
    
    Warn: Array<number> | null
    
    Image: string | null
    
    AdvancedInfo: string | null
    
    Type: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 身份证号
         */
        this.ID = null;

        /**
         * 姓名
         */
        this.Name = null;

        /**
         * 地址
         */
        this.Address = null;

        /**
         * 性别
         */
        this.Sex = null;

        /**
         * 告警码
-9103	证照翻拍告警
-9102	证照复印件告警
-9106       证件遮挡告警
         */
        this.Warn = null;

        /**
         * 证件图片
         */
        this.Image = null;

        /**
         * 扩展字段:
{
    ID:{
        Confidence:0.9999
    },
    Name:{
        Confidence:0.9996
    }
}
         */
        this.AdvancedInfo = null;

        /**
         * 证件类型
MyKad  身份证
MyPR    永居证
MyTentera   军官证
MyKAS    临时身份证
POLIS  警察
IKAD   劳工证
         */
        this.Type = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ID: string | null;
        Name: string | null;
        Address: string | null;
        Sex: string | null;
        Warn: Array<number> | null;
        Image: string | null;
        AdvancedInfo: string | null;
        Type: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EstateCertOCR请求参数结构体
 * @class
 */
class EstateCertOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VerifyBasicBizLicense请求参数结构体
 * @class
 */
class VerifyBasicBizLicenseRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    ImageConfig: string | null
    
    RegNum: string | null
    
    Name: string | null
    
    Address: string | null
    
    RegCapital: number | null
    
    constructor(){
        super();

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageUrl = null;

        /**
         * 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。
格式为{RegNum: true, Name:true/false, Address:true/false}

设置方式参考：
Config = Json.stringify({"Name":true,"Address":true})
API 3.0 Explorer 设置方式参考：
Config = {"Name":true,"Address":true}
         */
        this.ImageConfig = null;

        /**
         * 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。RegNum为必选项。
         */
        this.RegNum = null;

        /**
         * 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。
         */
        this.Name = null;

        /**
         * 用于入参是文本的场景，Address表示经营地址，填写后会返回Name的校验结果。
         */
        this.Address = null;

        /**
         * 1表示输出注册资本字段（单位：万元），其他值表示不输出。默认不输出。
         */
        this.RegCapital = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        ImageConfig: string | null;
        RegNum: string | null;
        Name: string | null;
        Address: string | null;
        RegCapital: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageConfig = 'ImageConfig' in params ? params.ImageConfig : null;
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.RegCapital = 'RegCapital' in params ? params.RegCapital : null;

    }
}

/**
 * BizLicenseOCR返回参数结构体
 * @class
 */
class BizLicenseOCRResponse extends AbstractModel {

    RegNum: string | null
    
    Name: string | null
    
    Capital: string | null
    
    Person: string | null
    
    Address: string | null
    
    Business: string | null
    
    Type: string | null
    
    Period: string | null
    
    ComposingForm: string | null
    
    SetDate: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 统一社会信用代码（三合一之前为注册号）
         */
        this.RegNum = null;

        /**
         * 公司名称
         */
        this.Name = null;

        /**
         * 注册资本
         */
        this.Capital = null;

        /**
         * 法定代表人
         */
        this.Person = null;

        /**
         * 地址
         */
        this.Address = null;

        /**
         * 经营范围
         */
        this.Business = null;

        /**
         * 主体类型
         */
        this.Type = null;

        /**
         * 营业期限
         */
        this.Period = null;

        /**
         * 组成形式
         */
        this.ComposingForm = null;

        /**
         * 成立日期
         */
        this.SetDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegNum: string | null;
        Name: string | null;
        Capital: string | null;
        Person: string | null;
        Address: string | null;
        Business: string | null;
        Type: string | null;
        Period: string | null;
        ComposingForm: string | null;
        SetDate: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Capital = 'Capital' in params ? params.Capital : null;
        this.Person = 'Person' in params ? params.Person : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ComposingForm = 'ComposingForm' in params ? params.ComposingForm : null;
        this.SetDate = 'SetDate' in params ? params.SetDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VatInvoiceOCR返回参数结构体
 * @class
 */
class VatInvoiceOCRResponse extends AbstractModel {

    VatInvoiceInfos: Array<TextVatInvoice> | null
    
    Items: Array<VatInvoiceItem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.VatInvoiceInfos = null;

        /**
         * 明细条目。VatInvoiceInfos中关于明细项的具体条目。
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        VatInvoiceInfos: Array<TextVatInvoice> | null;
        Items: Array<VatInvoiceItem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.VatInvoiceInfos) {
            this.VatInvoiceInfos = new Array();
            for (let z in params.VatInvoiceInfos) {
                let obj = new TextVatInvoice();
                obj.deserialize(params.VatInvoiceInfos[z]);
                this.VatInvoiceInfos.push(obj);
            }
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new VatInvoiceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ShipInvoiceOCR请求参数结构体
 * @class
 */
class ShipInvoiceOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BankCardOCR返回参数结构体
 * @class
 */
class BankCardOCRResponse extends AbstractModel {

    CardNo: string | null
    
    BankInfo: string | null
    
    ValidDate: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 卡号
         */
        this.CardNo = null;

        /**
         * 银行信息
         */
        this.BankInfo = null;

        /**
         * 有效期
         */
        this.ValidDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CardNo: string | null;
        BankInfo: string | null;
        ValidDate: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CardNo = 'CardNo' in params ? params.CardNo : null;
        this.BankInfo = 'BankInfo' in params ? params.BankInfo : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BusinessCardOCR请求参数结构体
 * @class
 */
class BusinessCardOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    Config: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

        /**
         * 可选字段，根据需要选择是否请求对应字段。
目前支持的字段为：
RetImageType-“PROPROCESS” 图像预处理，string 类型。
图像预处理功能为，检测图片倾斜的角度，将原本倾斜的图片围绕中心点转正，最终输出一张正的名片抠图。

SDK 设置方式参考：
Config = Json.stringify({"RetImageType":"PROPROCESS"})
API 3.0 Explorer 设置方式参考：
Config = {"RetImageType":"PROPROCESS"}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
        Config: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * FinanBillOCR请求参数结构体
 * @class
 */
class FinanBillOCRRequest extends AbstractModel {

    ImageBase64: string | null
    
    ImageUrl: string | null
    
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ImageBase64: string | null;
        ImageUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * GeneralFastOCR返回参数结构体
 * @class
 */
class GeneralFastOCRResponse extends AbstractModel {

    TextDetections: Array<TextDetection> | null
    
    Language: string | null
    
    Angel: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         */
        this.TextDetections = null;

        /**
         * 检测到的语言，目前支持的语种范围为：简体中文、繁体中文、英文、日文、韩文。未来将陆续新增对更多语种的支持。
返回结果含义为：zh - 中英混合，jap - 日文，kor - 韩文。
         */
        this.Language = null;

        /**
         * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
         */
        this.Angel = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TextDetections: Array<TextDetection> | null;
        Language: string | null;
        Angel: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Language = 'Language' in params ? params.Language : null;
        this.Angel = 'Angel' in params ? params.Angel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 二维码/条形码坐标信息
 * @class
 */
class QrcodePositionObj extends AbstractModel {

    LeftTop: Coord | null
    
    RightTop: Coord | null
    
    RightBottom: Coord | null
    
    LeftBottom: Coord | null
    
    constructor(){
        super();

        /**
         * 左上顶点坐标（如果是条形码，X和Y都为-1）
         */
        this.LeftTop = null;

        /**
         * 右上顶点坐标（如果是条形码，X和Y都为-1）
         */
        this.RightTop = null;

        /**
         * 右下顶点坐标（如果是条形码，X和Y都为-1）
         */
        this.RightBottom = null;

        /**
         * 左下顶点坐标（如果是条形码，X和Y都为-1）
         */
        this.LeftBottom = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LeftTop: Coord | null;
        RightTop: Coord | null;
        RightBottom: Coord | null;
        LeftBottom: Coord | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.LeftTop) {
            let obj = new Coord();
            obj.deserialize(params.LeftTop)
            this.LeftTop = obj;
        }

        if (params.RightTop) {
            let obj = new Coord();
            obj.deserialize(params.RightTop)
            this.RightTop = obj;
        }

        if (params.RightBottom) {
            let obj = new Coord();
            obj.deserialize(params.RightBottom)
            this.RightBottom = obj;
        }

        if (params.LeftBottom) {
            let obj = new Coord();
            obj.deserialize(params.LeftBottom)
            this.LeftBottom = obj;
        }

    }
}

export const Models = {
    VerifyBizLicenseRequest: VerifyBizLicenseRequest,
    BusinessCardOCRResponse: BusinessCardOCRResponse,
    TextArithmetic: TextArithmetic,
    HKIDCardOCRRequest: HKIDCardOCRRequest,
    CarInvoiceOCRRequest: CarInvoiceOCRRequest,
    MixedInvoiceItem: MixedInvoiceItem,
    TrainTicketOCRRequest: TrainTicketOCRRequest,
    EstateCertOCRResponse: EstateCertOCRResponse,
    FlightInvoiceOCRRequest: FlightInvoiceOCRRequest,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    TextDetectResponse: TextDetectResponse,
    VerifyBizLicenseResponse: VerifyBizLicenseResponse,
    FinanBillSliceOCRResponse: FinanBillSliceOCRResponse,
    DriverLicenseOCRResponse: DriverLicenseOCRResponse,
    Words: Words,
    TextDetectionEn: TextDetectionEn,
    PermitOCRResponse: PermitOCRResponse,
    InvoiceGeneralOCRRequest: InvoiceGeneralOCRRequest,
    Rect: Rect,
    WaybillOCRResponse: WaybillOCRResponse,
    SingleInvoiceInfo: SingleInvoiceInfo,
    TextFormula: TextFormula,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    VatInvoiceItem: VatInvoiceItem,
    VehicleRegCertInfo: VehicleRegCertInfo,
    VehicleLicenseOCRRequest: VehicleLicenseOCRRequest,
    EnterpriseLicenseOCRResponse: EnterpriseLicenseOCRResponse,
    InvoiceGeneralInfo: InvoiceGeneralInfo,
    WordCoordPoint: WordCoordPoint,
    InstitutionOCRResponse: InstitutionOCRResponse,
    DriverLicenseOCRRequest: DriverLicenseOCRRequest,
    BizLicenseVerifyResult: BizLicenseVerifyResult,
    TextDetection: TextDetection,
    TextEduPaper: TextEduPaper,
    QrcodeOCRResponse: QrcodeOCRResponse,
    WaybillObj: WaybillObj,
    InvoiceDetectInfo: InvoiceDetectInfo,
    MainlandPermitOCRRequest: MainlandPermitOCRRequest,
    EnterpriseLicenseOCRRequest: EnterpriseLicenseOCRRequest,
    BankCardOCRRequest: BankCardOCRRequest,
    PropOwnerCertOCRResponse: PropOwnerCertOCRResponse,
    FinanBillInfo: FinanBillInfo,
    TrainTicketOCRResponse: TrainTicketOCRResponse,
    TollInvoiceInfo: TollInvoiceInfo,
    ArithmeticOCRResponse: ArithmeticOCRResponse,
    FormulaOCRResponse: FormulaOCRResponse,
    BusInvoiceInfo: BusInvoiceInfo,
    TextVatInvoice: TextVatInvoice,
    GeneralHandwritingOCRRequest: GeneralHandwritingOCRRequest,
    BizLicenseOCRRequest: BizLicenseOCRRequest,
    MixedInvoiceDetectResponse: MixedInvoiceDetectResponse,
    InsuranceBillOCRResponse: InsuranceBillOCRResponse,
    GeneralEfficientOCRResponse: GeneralEfficientOCRResponse,
    HmtResidentPermitOCRRequest: HmtResidentPermitOCRRequest,
    QrcodeOCRRequest: QrcodeOCRRequest,
    TaxiInvoiceOCRResponse: TaxiInvoiceOCRResponse,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    VinOCRRequest: VinOCRRequest,
    QuotaInvoiceOCRRequest: QuotaInvoiceOCRRequest,
    MixedInvoiceOCRResponse: MixedInvoiceOCRResponse,
    ClassifyDetectOCRResponse: ClassifyDetectOCRResponse,
    VehicleLicenseOCRResponse: VehicleLicenseOCRResponse,
    VatInvoiceOCRRequest: VatInvoiceOCRRequest,
    IDCardOCRResponse: IDCardOCRResponse,
    ClassifyDetectOCRRequest: ClassifyDetectOCRRequest,
    DutyPaidProofOCRResponse: DutyPaidProofOCRResponse,
    TollInvoiceOCRRequest: TollInvoiceOCRRequest,
    LicensePlateOCRResponse: LicensePlateOCRResponse,
    HKIDCardOCRResponse: HKIDCardOCRResponse,
    PermitOCRRequest: PermitOCRRequest,
    InvoiceGeneralOCRResponse: InvoiceGeneralOCRResponse,
    TaxiInvoiceOCRRequest: TaxiInvoiceOCRRequest,
    PropOwnerCertOCRRequest: PropOwnerCertOCRRequest,
    TextDetectRequest: TextDetectRequest,
    VatRollInvoiceOCRResponse: VatRollInvoiceOCRResponse,
    VatInvoiceVerifyRequest: VatInvoiceVerifyRequest,
    EduPaperOCRResponse: EduPaperOCRResponse,
    BusinessCardInfo: BusinessCardInfo,
    TextGeneralHandwriting: TextGeneralHandwriting,
    TableOCRRequest: TableOCRRequest,
    QrcodeImgSize: QrcodeImgSize,
    VerifyBasicBizLicenseResponse: VerifyBasicBizLicenseResponse,
    VehicleRegCertOCRRequest: VehicleRegCertOCRRequest,
    ProductDataRecord: ProductDataRecord,
    LicensePlateOCRRequest: LicensePlateOCRRequest,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,
    TextVehicleBack: TextVehicleBack,
    GeneralEfficientOCRRequest: GeneralEfficientOCRRequest,
    TollInvoiceOCRResponse: TollInvoiceOCRResponse,
    RideHailingDriverLicenseOCRResponse: RideHailingDriverLicenseOCRResponse,
    EnglishOCRRequest: EnglishOCRRequest,
    VatInvoiceVerifyResponse: VatInvoiceVerifyResponse,
    PassportOCRResponse: PassportOCRResponse,
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    OrgCodeCertOCRRequest: OrgCodeCertOCRRequest,
    FlightInvoiceOCRResponse: FlightInvoiceOCRResponse,
    InstitutionOCRRequest: InstitutionOCRRequest,
    CarInvoiceInfo: CarInvoiceInfo,
    FlightInvoiceInfo: FlightInvoiceInfo,
    TextVehicleFront: TextVehicleFront,
    FinanBillSliceInfo: FinanBillSliceInfo,
    QueryBarCodeResponse: QueryBarCodeResponse,
    ArithmeticOCRRequest: ArithmeticOCRRequest,
    FinanBillSliceOCRRequest: FinanBillSliceOCRRequest,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    VatRollInvoiceOCRRequest: VatRollInvoiceOCRRequest,
    Coord: Coord,
    SealOCRResponse: SealOCRResponse,
    DutyPaidProofInfo: DutyPaidProofInfo,
    FinanBillOCRResponse: FinanBillOCRResponse,
    TextWaybill: TextWaybill,
    QuestionObj: QuestionObj,
    VinOCRResponse: VinOCRResponse,
    EduPaperOCRRequest: EduPaperOCRRequest,
    FormulaOCRRequest: FormulaOCRRequest,
    PassportOCRRequest: PassportOCRRequest,
    DutyPaidProofOCRRequest: DutyPaidProofOCRRequest,
    RideHailingDriverLicenseOCRRequest: RideHailingDriverLicenseOCRRequest,
    QueryBarCodeRequest: QueryBarCodeRequest,
    ItemCoord: ItemCoord,
    OrgCodeCertOCRResponse: OrgCodeCertOCRResponse,
    MixedInvoiceOCRRequest: MixedInvoiceOCRRequest,
    ResidenceBookletOCRResponse: ResidenceBookletOCRResponse,
    CarInvoiceOCRResponse: CarInvoiceOCRResponse,
    GeneralFastOCRRequest: GeneralFastOCRRequest,
    ShipInvoiceOCRResponse: ShipInvoiceOCRResponse,
    InsuranceBillInfo: InsuranceBillInfo,
    VehicleRegCertOCRResponse: VehicleRegCertOCRResponse,
    ClassifyDetectInfo: ClassifyDetectInfo,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    SealOCRRequest: SealOCRRequest,
    TextTable: TextTable,
    ResidenceBookletOCRRequest: ResidenceBookletOCRRequest,
    BusInvoiceOCRResponse: BusInvoiceOCRResponse,
    QrcodeResultsInfo: QrcodeResultsInfo,
    MainlandPermitOCRResponse: MainlandPermitOCRResponse,
    VatInvoice: VatInvoice,
    HmtResidentPermitOCRResponse: HmtResidentPermitOCRResponse,
    EnglishOCRResponse: EnglishOCRResponse,
    BusInvoiceOCRRequest: BusInvoiceOCRRequest,
    QuotaInvoiceOCRResponse: QuotaInvoiceOCRResponse,
    RideHailingTransportLicenseOCRResponse: RideHailingTransportLicenseOCRResponse,
    CandWord: CandWord,
    EnterpriseLicenseInfo: EnterpriseLicenseInfo,
    InsuranceBillOCRRequest: InsuranceBillOCRRequest,
    GeneralHandwritingOCRResponse: GeneralHandwritingOCRResponse,
    TableOCRResponse: TableOCRResponse,
    QuestionBlockObj: QuestionBlockObj,
    WaybillOCRRequest: WaybillOCRRequest,
    VatRollInvoiceInfo: VatRollInvoiceInfo,
    ShipInvoiceInfo: ShipInvoiceInfo,
    IDCardOCRRequest: IDCardOCRRequest,
    MixedInvoiceDetectRequest: MixedInvoiceDetectRequest,
    RideHailingTransportLicenseOCRRequest: RideHailingTransportLicenseOCRRequest,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    EstateCertOCRRequest: EstateCertOCRRequest,
    VerifyBasicBizLicenseRequest: VerifyBasicBizLicenseRequest,
    BizLicenseOCRResponse: BizLicenseOCRResponse,
    VatInvoiceOCRResponse: VatInvoiceOCRResponse,
    ShipInvoiceOCRRequest: ShipInvoiceOCRRequest,
    BankCardOCRResponse: BankCardOCRResponse,
    BusinessCardOCRRequest: BusinessCardOCRRequest,
    FinanBillOCRRequest: FinanBillOCRRequest,
    GeneralFastOCRResponse: GeneralFastOCRResponse,
    QrcodePositionObj: QrcodePositionObj,

}
