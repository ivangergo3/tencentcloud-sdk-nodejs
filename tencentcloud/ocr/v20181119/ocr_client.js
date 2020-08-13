"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const models_1 = require("./models");
const abstract_client_1 = require("../../common/abstract_client");
const VerifyBizLicenseRequest = models_1.Models.VerifyBizLicenseRequest;
const BusinessCardOCRResponse = models_1.Models.BusinessCardOCRResponse;
const TextArithmetic = models_1.Models.TextArithmetic;
const HKIDCardOCRRequest = models_1.Models.HKIDCardOCRRequest;
const CarInvoiceOCRRequest = models_1.Models.CarInvoiceOCRRequest;
const MixedInvoiceItem = models_1.Models.MixedInvoiceItem;
const TrainTicketOCRRequest = models_1.Models.TrainTicketOCRRequest;
const EstateCertOCRResponse = models_1.Models.EstateCertOCRResponse;
const FlightInvoiceOCRRequest = models_1.Models.FlightInvoiceOCRRequest;
const MLIDPassportOCRRequest = models_1.Models.MLIDPassportOCRRequest;
const TextDetectResponse = models_1.Models.TextDetectResponse;
const VerifyBizLicenseResponse = models_1.Models.VerifyBizLicenseResponse;
const FinanBillSliceOCRResponse = models_1.Models.FinanBillSliceOCRResponse;
const DriverLicenseOCRResponse = models_1.Models.DriverLicenseOCRResponse;
const Words = models_1.Models.Words;
const TextDetectionEn = models_1.Models.TextDetectionEn;
const PermitOCRResponse = models_1.Models.PermitOCRResponse;
const InvoiceGeneralOCRRequest = models_1.Models.InvoiceGeneralOCRRequest;
const Rect = models_1.Models.Rect;
const WaybillOCRResponse = models_1.Models.WaybillOCRResponse;
const SingleInvoiceInfo = models_1.Models.SingleInvoiceInfo;
const TextFormula = models_1.Models.TextFormula;
const MLIDCardOCRRequest = models_1.Models.MLIDCardOCRRequest;
const VatInvoiceItem = models_1.Models.VatInvoiceItem;
const VehicleRegCertInfo = models_1.Models.VehicleRegCertInfo;
const VehicleLicenseOCRRequest = models_1.Models.VehicleLicenseOCRRequest;
const EnterpriseLicenseOCRResponse = models_1.Models.EnterpriseLicenseOCRResponse;
const InvoiceGeneralInfo = models_1.Models.InvoiceGeneralInfo;
const WordCoordPoint = models_1.Models.WordCoordPoint;
const InstitutionOCRResponse = models_1.Models.InstitutionOCRResponse;
const DriverLicenseOCRRequest = models_1.Models.DriverLicenseOCRRequest;
const BizLicenseVerifyResult = models_1.Models.BizLicenseVerifyResult;
const TextDetection = models_1.Models.TextDetection;
const TextEduPaper = models_1.Models.TextEduPaper;
const QrcodeOCRResponse = models_1.Models.QrcodeOCRResponse;
const WaybillObj = models_1.Models.WaybillObj;
const InvoiceDetectInfo = models_1.Models.InvoiceDetectInfo;
const MainlandPermitOCRRequest = models_1.Models.MainlandPermitOCRRequest;
const EnterpriseLicenseOCRRequest = models_1.Models.EnterpriseLicenseOCRRequest;
const BankCardOCRRequest = models_1.Models.BankCardOCRRequest;
const PropOwnerCertOCRResponse = models_1.Models.PropOwnerCertOCRResponse;
const FinanBillInfo = models_1.Models.FinanBillInfo;
const TrainTicketOCRResponse = models_1.Models.TrainTicketOCRResponse;
const TollInvoiceInfo = models_1.Models.TollInvoiceInfo;
const ArithmeticOCRResponse = models_1.Models.ArithmeticOCRResponse;
const FormulaOCRResponse = models_1.Models.FormulaOCRResponse;
const BusInvoiceInfo = models_1.Models.BusInvoiceInfo;
const TextVatInvoice = models_1.Models.TextVatInvoice;
const GeneralHandwritingOCRRequest = models_1.Models.GeneralHandwritingOCRRequest;
const BizLicenseOCRRequest = models_1.Models.BizLicenseOCRRequest;
const MixedInvoiceDetectResponse = models_1.Models.MixedInvoiceDetectResponse;
const InsuranceBillOCRResponse = models_1.Models.InsuranceBillOCRResponse;
const GeneralEfficientOCRResponse = models_1.Models.GeneralEfficientOCRResponse;
const HmtResidentPermitOCRRequest = models_1.Models.HmtResidentPermitOCRRequest;
const QrcodeOCRRequest = models_1.Models.QrcodeOCRRequest;
const TaxiInvoiceOCRResponse = models_1.Models.TaxiInvoiceOCRResponse;
const GeneralBasicOCRResponse = models_1.Models.GeneralBasicOCRResponse;
const VinOCRRequest = models_1.Models.VinOCRRequest;
const QuotaInvoiceOCRRequest = models_1.Models.QuotaInvoiceOCRRequest;
const MixedInvoiceOCRResponse = models_1.Models.MixedInvoiceOCRResponse;
const ClassifyDetectOCRResponse = models_1.Models.ClassifyDetectOCRResponse;
const VehicleLicenseOCRResponse = models_1.Models.VehicleLicenseOCRResponse;
const VatInvoiceOCRRequest = models_1.Models.VatInvoiceOCRRequest;
const IDCardOCRResponse = models_1.Models.IDCardOCRResponse;
const ClassifyDetectOCRRequest = models_1.Models.ClassifyDetectOCRRequest;
const DutyPaidProofOCRResponse = models_1.Models.DutyPaidProofOCRResponse;
const TollInvoiceOCRRequest = models_1.Models.TollInvoiceOCRRequest;
const LicensePlateOCRResponse = models_1.Models.LicensePlateOCRResponse;
const HKIDCardOCRResponse = models_1.Models.HKIDCardOCRResponse;
const PermitOCRRequest = models_1.Models.PermitOCRRequest;
const InvoiceGeneralOCRResponse = models_1.Models.InvoiceGeneralOCRResponse;
const TaxiInvoiceOCRRequest = models_1.Models.TaxiInvoiceOCRRequest;
const PropOwnerCertOCRRequest = models_1.Models.PropOwnerCertOCRRequest;
const TextDetectRequest = models_1.Models.TextDetectRequest;
const VatRollInvoiceOCRResponse = models_1.Models.VatRollInvoiceOCRResponse;
const VatInvoiceVerifyRequest = models_1.Models.VatInvoiceVerifyRequest;
const EduPaperOCRResponse = models_1.Models.EduPaperOCRResponse;
const BusinessCardInfo = models_1.Models.BusinessCardInfo;
const TextGeneralHandwriting = models_1.Models.TextGeneralHandwriting;
const TableOCRRequest = models_1.Models.TableOCRRequest;
const QrcodeImgSize = models_1.Models.QrcodeImgSize;
const VerifyBasicBizLicenseResponse = models_1.Models.VerifyBasicBizLicenseResponse;
const VehicleRegCertOCRRequest = models_1.Models.VehicleRegCertOCRRequest;
const ProductDataRecord = models_1.Models.ProductDataRecord;
const LicensePlateOCRRequest = models_1.Models.LicensePlateOCRRequest;
const GeneralBasicOCRRequest = models_1.Models.GeneralBasicOCRRequest;
const TextVehicleBack = models_1.Models.TextVehicleBack;
const GeneralEfficientOCRRequest = models_1.Models.GeneralEfficientOCRRequest;
const TollInvoiceOCRResponse = models_1.Models.TollInvoiceOCRResponse;
const RideHailingDriverLicenseOCRResponse = models_1.Models.RideHailingDriverLicenseOCRResponse;
const EnglishOCRRequest = models_1.Models.EnglishOCRRequest;
const VatInvoiceVerifyResponse = models_1.Models.VatInvoiceVerifyResponse;
const PassportOCRResponse = models_1.Models.PassportOCRResponse;
const GeneralAccurateOCRRequest = models_1.Models.GeneralAccurateOCRRequest;
const OrgCodeCertOCRRequest = models_1.Models.OrgCodeCertOCRRequest;
const FlightInvoiceOCRResponse = models_1.Models.FlightInvoiceOCRResponse;
const InstitutionOCRRequest = models_1.Models.InstitutionOCRRequest;
const CarInvoiceInfo = models_1.Models.CarInvoiceInfo;
const FlightInvoiceInfo = models_1.Models.FlightInvoiceInfo;
const TextVehicleFront = models_1.Models.TextVehicleFront;
const FinanBillSliceInfo = models_1.Models.FinanBillSliceInfo;
const QueryBarCodeResponse = models_1.Models.QueryBarCodeResponse;
const ArithmeticOCRRequest = models_1.Models.ArithmeticOCRRequest;
const FinanBillSliceOCRRequest = models_1.Models.FinanBillSliceOCRRequest;
const MLIDPassportOCRResponse = models_1.Models.MLIDPassportOCRResponse;
const VatRollInvoiceOCRRequest = models_1.Models.VatRollInvoiceOCRRequest;
const Coord = models_1.Models.Coord;
const SealOCRResponse = models_1.Models.SealOCRResponse;
const DutyPaidProofInfo = models_1.Models.DutyPaidProofInfo;
const FinanBillOCRResponse = models_1.Models.FinanBillOCRResponse;
const TextWaybill = models_1.Models.TextWaybill;
const QuestionObj = models_1.Models.QuestionObj;
const VinOCRResponse = models_1.Models.VinOCRResponse;
const EduPaperOCRRequest = models_1.Models.EduPaperOCRRequest;
const FormulaOCRRequest = models_1.Models.FormulaOCRRequest;
const PassportOCRRequest = models_1.Models.PassportOCRRequest;
const DutyPaidProofOCRRequest = models_1.Models.DutyPaidProofOCRRequest;
const RideHailingDriverLicenseOCRRequest = models_1.Models.RideHailingDriverLicenseOCRRequest;
const QueryBarCodeRequest = models_1.Models.QueryBarCodeRequest;
const ItemCoord = models_1.Models.ItemCoord;
const OrgCodeCertOCRResponse = models_1.Models.OrgCodeCertOCRResponse;
const MixedInvoiceOCRRequest = models_1.Models.MixedInvoiceOCRRequest;
const ResidenceBookletOCRResponse = models_1.Models.ResidenceBookletOCRResponse;
const CarInvoiceOCRResponse = models_1.Models.CarInvoiceOCRResponse;
const GeneralFastOCRRequest = models_1.Models.GeneralFastOCRRequest;
const ShipInvoiceOCRResponse = models_1.Models.ShipInvoiceOCRResponse;
const InsuranceBillInfo = models_1.Models.InsuranceBillInfo;
const VehicleRegCertOCRResponse = models_1.Models.VehicleRegCertOCRResponse;
const ClassifyDetectInfo = models_1.Models.ClassifyDetectInfo;
const GeneralAccurateOCRResponse = models_1.Models.GeneralAccurateOCRResponse;
const SealOCRRequest = models_1.Models.SealOCRRequest;
const TextTable = models_1.Models.TextTable;
const ResidenceBookletOCRRequest = models_1.Models.ResidenceBookletOCRRequest;
const BusInvoiceOCRResponse = models_1.Models.BusInvoiceOCRResponse;
const QrcodeResultsInfo = models_1.Models.QrcodeResultsInfo;
const MainlandPermitOCRResponse = models_1.Models.MainlandPermitOCRResponse;
const VatInvoice = models_1.Models.VatInvoice;
const HmtResidentPermitOCRResponse = models_1.Models.HmtResidentPermitOCRResponse;
const EnglishOCRResponse = models_1.Models.EnglishOCRResponse;
const BusInvoiceOCRRequest = models_1.Models.BusInvoiceOCRRequest;
const QuotaInvoiceOCRResponse = models_1.Models.QuotaInvoiceOCRResponse;
const RideHailingTransportLicenseOCRResponse = models_1.Models.RideHailingTransportLicenseOCRResponse;
const CandWord = models_1.Models.CandWord;
const EnterpriseLicenseInfo = models_1.Models.EnterpriseLicenseInfo;
const InsuranceBillOCRRequest = models_1.Models.InsuranceBillOCRRequest;
const GeneralHandwritingOCRResponse = models_1.Models.GeneralHandwritingOCRResponse;
const TableOCRResponse = models_1.Models.TableOCRResponse;
const QuestionBlockObj = models_1.Models.QuestionBlockObj;
const WaybillOCRRequest = models_1.Models.WaybillOCRRequest;
const VatRollInvoiceInfo = models_1.Models.VatRollInvoiceInfo;
const ShipInvoiceInfo = models_1.Models.ShipInvoiceInfo;
const IDCardOCRRequest = models_1.Models.IDCardOCRRequest;
const MixedInvoiceDetectRequest = models_1.Models.MixedInvoiceDetectRequest;
const RideHailingTransportLicenseOCRRequest = models_1.Models.RideHailingTransportLicenseOCRRequest;
const MLIDCardOCRResponse = models_1.Models.MLIDCardOCRResponse;
const EstateCertOCRRequest = models_1.Models.EstateCertOCRRequest;
const VerifyBasicBizLicenseRequest = models_1.Models.VerifyBasicBizLicenseRequest;
const BizLicenseOCRResponse = models_1.Models.BizLicenseOCRResponse;
const VatInvoiceOCRResponse = models_1.Models.VatInvoiceOCRResponse;
const ShipInvoiceOCRRequest = models_1.Models.ShipInvoiceOCRRequest;
const BankCardOCRResponse = models_1.Models.BankCardOCRResponse;
const BusinessCardOCRRequest = models_1.Models.BusinessCardOCRRequest;
const FinanBillOCRRequest = models_1.Models.FinanBillOCRRequest;
const GeneralFastOCRResponse = models_1.Models.GeneralFastOCRResponse;
const QrcodePositionObj = models_1.Models.QrcodePositionObj;
/**
 * ocr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ocr.tencentcloudapi.com", "2018-11-19", credential, region, profile);
    }
    /**
     * 本接口支持病案首页、费用清单、结算单、医疗发票四种保险理赔单据的文本识别和结构化输出。
     * @param {InsuranceBillOCRRequest} req
     * @param {function(string, InsuranceBillOCRResponse):void} cb
     * @public
     */
    InsuranceBillOCR(req, cb) {
        const resp = new InsuranceBillOCRResponse();
        this.request("InsuranceBillOCR", req, resp, cb);
    }
    /**
     * 本接口支持营业执照信息的识别与准确性核验。您可以通过输入营业执照关键字段或传入营业执照图片提供所需的验证信息，接口返回真实的企业工商照面信息及核验结果，包括统一社会信用代码、经营期限、法人姓名、经营状态、经营业务范围、状态信息、原注册号、要核验的工商注册号、工商注册号、要核验的企业名称、企业名称、要核验的注册住址、注册住址、核验结果、注册资本共16个基础字段。
     * @param {VerifyBasicBizLicenseRequest} req
     * @param {function(string, VerifyBasicBizLicenseResponse):void} cb
     * @public
     */
    VerifyBasicBizLicense(req, cb) {
        const resp = new VerifyBasicBizLicenseResponse();
        this.request("VerifyBasicBizLicense", req, resp, cb);
    }
    /**
     * 本接口支持增值税发票的准确性核验，您可以通过输入增值税发票的关键字段提供所需的验证信息，接口返回真实的票面相关信息，包括发票代码、发票号码、开票日期、金额、消费类型、购方名称、购方税号、销方名称、销方税号等多个常用字段。支持多种发票类型核验，包括增值税专用发票、增值税普通发票（含电子普通发票、卷式发票、通行费发票）、机动车销售统一发票、货物运输业增值税专用发票、二手车销售统一发票。
     * @param {VatInvoiceVerifyRequest} req
     * @param {function(string, VatInvoiceVerifyResponse):void} cb
     * @public
     */
    VatInvoiceVerify(req, cb) {
        const resp = new VatInvoiceVerifyResponse();
        this.request("VatInvoiceVerify", req, resp, cb);
    }
    /**
     * 本接口支持条形码备案信息查询，返回条形码查询结果的相关信息，包括产品名称、产品英文名称、品牌名称、规格型号、宽度、高度、深度、关键字、产品描述、厂家名称、厂家地址、企业社会信用代码13个字段信息。

产品优势：直联中国物品编码中心，查询结果更加准确、可靠。

本接口目前为内测阶段，如需使用服务，请<a href="https://cloud.tencent.com/act/event/connect-service" target="_blank">联系商务</a>开通。
     * @param {QueryBarCodeRequest} req
     * @param {function(string, QueryBarCodeResponse):void} cb
     * @public
     */
    QueryBarCode(req, cb) {
        const resp = new QueryBarCodeResponse();
        this.request("QueryBarCode", req, resp, cb);
    }
    /**
     * 本接口支持智能化识别各类企业登记证书、许可证书、企业执照、三证合一类证书，结构化输出统一社会信用代码、公司名称、法定代表人、公司地址、注册资金、企业类型、经营范围等关键字段。
     * @param {EnterpriseLicenseOCRRequest} req
     * @param {function(string, EnterpriseLicenseOCRResponse):void} cb
     * @public
     */
    EnterpriseLicenseOCR(req, cb) {
        const resp = new EnterpriseLicenseOCRResponse();
        this.request("EnterpriseLicenseOCR", req, resp, cb);
    }
    /**
     * 本接口支持名片各字段的自动定位与识别，包含姓名、电话、手机号、邮箱、公司、部门、职位、网址、地址、QQ、微信、MSN等。
     * @param {BusinessCardOCRRequest} req
     * @param {function(string, BusinessCardOCRResponse):void} cb
     * @public
     */
    BusinessCardOCR(req, cb) {
        const resp = new BusinessCardOCRResponse();
        this.request("BusinessCardOCR", req, resp, cb);
    }
    /**
     * 本接口支持中国大陆居民二代身份证正反面所有字段的识别，包括姓名、性别、民族、出生日期、住址、公民身份证号、签发机关、有效期限，识别准确度达到99%以上。

另外，本接口还支持多种增值能力，满足不同场景的需求。如身份证照片、人像照片的裁剪功能，同时具备9种告警功能，如下表所示。

<table style="width:650px">
      <thead>
        <tr>
       <th width="150">增值能力</th>
          <th width="500">能力项</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">裁剪功能</td>
          <td>身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）</td>
        </tr>
        <tr>
          <td>人像照片裁剪（自动抠取身份证头像区域）</td>
        </tr>
        <tr>
          <td rowspan="9">告警功能</td>
          <td>身份证有效日期不合法告警</td>
        </tr>
        <tr>
          <td>身份证边框不完整告警</td>
        </tr>
        <tr>
          <td>身份证复印件告警</td>
        </tr>
        <tr>
          <td>身份证翻拍告警</td>
        </tr>
          <tr>
          <td>身份证框内遮挡告警</td>
        </tr>
         <tr>
          <td>临时身份证告警</td>
        </tr>
          <tr>
          <td>身份证 PS 告警</td>
        </tr>
          <tr>
          <td>图片模糊告警</td>
        </tr>
      </tbody>
    </table>
     * @param {IDCardOCRRequest} req
     * @param {function(string, IDCardOCRResponse):void} cb
     * @public
     */
    IDCardOCR(req, cb) {
        const resp = new IDCardOCRResponse();
        this.request("IDCardOCR", req, resp, cb);
    }
    /**
     * 本接口支持对过路过桥费发票的发票代码、发票号码、日期、小写金额等关键字段的识别。
     * @param {TollInvoiceOCRRequest} req
     * @param {function(string, TollInvoiceOCRResponse):void} cb
     * @public
     */
    TollInvoiceOCR(req, cb) {
        const resp = new TollInvoiceOCRResponse();
        this.request("TollInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持马来西亚身份证识别，识别字段包括身份证号、姓名、性别、地址；具备身份证人像照片的裁剪功能和翻拍、复印件告警功能。
本接口暂未完全对外开放，如需咨询，请[联系商务](https://cloud.tencent.com/about/connect)

     * @param {MLIDCardOCRRequest} req
     * @param {function(string, MLIDCardOCRResponse):void} cb
     * @public
     */
    MLIDCardOCR(req, cb) {
        const resp = new MLIDCardOCRResponse();
        this.request("MLIDCardOCR", req, resp, cb);
    }
    /**
     * 本接口支持条形码和二维码的识别（包括 DataMatrix 和 PDF417）。
     * @param {QrcodeOCRRequest} req
     * @param {function(string, QrcodeOCRResponse):void} cb
     * @public
     */
    QrcodeOCR(req, cb) {
        const resp = new QrcodeOCRResponse();
        this.request("QrcodeOCR", req, resp, cb);
    }
    /**
     * 本接口支持图像整体文字的检测和识别。支持中文、英文、中英文、数字和特殊字符号的识别，并返回文字框位置和文字内容。

适用于文字较多、版式复杂、对识别准召率要求较高的场景，如试卷试题、网络图片、街景店招牌、法律卷宗等场景。

产品优势：与通用印刷体识别相比，提供更高精度的文字识别服务，在文字较多、长串数字、小字、模糊字、倾斜文本等困难场景下，高精度版的准确率和召回率更高。

通用印刷体识别不同版本的差异如下：
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:150px"></th>
          <th >【荐】通用印刷体识别（高精度版）</th>
          <th style="width:200px"><a href="https://cloud.tencent.com/document/product/866/33526">【荐】通用印刷体识别</a></th>
          <th><a href="https://cloud.tencent.com/document/product/866/37831">通用印刷体识别（精简版）</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 适用场景</td>
          <td>适用于文字较多、长串数字、小字、模糊字、倾斜文本等困难场景</td>
          <td>适用于所有通用场景的印刷体识别</td>
          <td>适用于快速文本识别场景，准召率有一定损失，价格更优惠</td>
        </tr>
        <tr>
          <td>识别准确率</td>
          <td>99%</td>
          <td>96%</td>
          <td>91%</td>
        </tr>
        <tr>
          <td>价格</td>
          <td>高</td>
          <td>中</td>
          <td>低</td>
        </tr>
        <tr>
          <td>支持的语言</td>
          <td>中文、英文、中英文</td>
          <td>中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语</td>
          <td>中文、英文、中英文</td>
        </tr>
        <tr>
          <td>自动语言检测</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>返回文本行坐标</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>自动旋转纠正</td>
          <td>支持旋转识别，不支持角度返回</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，返回角度信息</td>
        </tr>
      </tbody>
    </table>
     * @param {GeneralAccurateOCRRequest} req
     * @param {function(string, GeneralAccurateOCRResponse):void} cb
     * @public
     */
    GeneralAccurateOCR(req, cb) {
        const resp = new GeneralAccurateOCRResponse();
        this.request("GeneralAccurateOCR", req, resp, cb);
    }
    /**
     * 本接口支持机票行程单关键字段的识别，包括姓名、身份证件号码、航班号、票价 、合计、电子客票号码、填开日期等。
     * @param {FlightInvoiceOCRRequest} req
     * @param {function(string, FlightInvoiceOCRResponse):void} cb
     * @public
     */
    FlightInvoiceOCR(req, cb) {
        const resp = new FlightInvoiceOCRResponse();
        this.request("FlightInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持多张、多类型票据的混合检测和自动分类，返回对应票据类型。目前已支持增值税发票、增值税发票（卷票）、定额发票、通用机打发票、购车发票、火车票、出租车发票、机票行程单、汽车票、轮船票、过路过桥费发票、酒店账单、客运限额发票、购物小票、完税证明共15种票据。
     * @param {MixedInvoiceDetectRequest} req
     * @param {function(string, MixedInvoiceDetectResponse):void} cb
     * @public
     */
    MixedInvoiceDetect(req, cb) {
        const resp = new MixedInvoiceDetectResponse();
        this.request("MixedInvoiceDetect", req, resp, cb);
    }
    /**
     * 本接口支持识别轮船票的发票代码、发票号码、日期、姓名、票价等字段。
     * @param {ShipInvoiceOCRRequest} req
     * @param {function(string, ShipInvoiceOCRResponse):void} cb
     * @public
     */
    ShipInvoiceOCR(req, cb) {
        const resp = new ShipInvoiceOCRResponse();
        this.request("ShipInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持中国港澳台地区以及其他国家、地区的护照。识别字段包括护照ID、姓名、出生日期、性别、有效期、发行国、国籍；具备护照人像照片的裁剪功能和翻拍、复印件告警功能。
本接口暂未完全对外开放，如需咨询，请[联系商务](https://cloud.tencent.com/about/connect)
     * @param {MLIDPassportOCRRequest} req
     * @param {function(string, MLIDPassportOCRResponse):void} cb
     * @public
     */
    MLIDPassportOCR(req, cb) {
        const resp = new MLIDPassportOCRResponse();
        this.request("MLIDPassportOCR", req, resp, cb);
    }
    /**
     * 本接口支持对增值税发票（卷票）的发票代码、发票号码、日期、校验码、合计金额（小写）等关键字段的识别。
     * @param {VatRollInvoiceOCRRequest} req
     * @param {function(string, VatRollInvoiceOCRResponse):void} cb
     * @public
     */
    VatRollInvoiceOCR(req, cb) {
        const resp = new VatRollInvoiceOCRResponse();
        this.request("VatRollInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持定额发票的发票号码、发票代码、金额(大小写)、发票消费类型、地区及是否有公司印章等关键字段的识别。
     * @param {QuotaInvoiceOCRRequest} req
     * @param {function(string, QuotaInvoiceOCRResponse):void} cb
     * @public
     */
    QuotaInvoiceOCR(req, cb) {
        const resp = new QuotaInvoiceOCRResponse();
        this.request("QuotaInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持图片内车辆识别代号（VIN）的检测和识别。
     * @param {VinOCRRequest} req
     * @param {function(string, VinOCRResponse):void} cb
     * @public
     */
    VinOCR(req, cb) {
        const resp = new VinOCRResponse();
        this.request("VinOCR", req, resp, cb);
    }
    /**
     * 本接口支持图片中整体文字的检测和识别，返回文字框位置与文字内容。相比通用印刷体识别接口，识别速度更快、支持的 QPS 更高。
     * @param {GeneralFastOCRRequest} req
     * @param {function(string, GeneralFastOCRResponse):void} cb
     * @public
     */
    GeneralFastOCR(req, cb) {
        const resp = new GeneralFastOCRResponse();
        this.request("GeneralFastOCR", req, resp, cb);
    }
    /**
     * 本接口支持房产证关键字段的识别，包括房地产权利人、共有情况、登记时间、规划用途、房屋性质、房屋坐落等。
     * @param {PropOwnerCertOCRRequest} req
     * @param {function(string, PropOwnerCertOCRResponse):void} cb
     * @public
     */
    PropOwnerCertOCR(req, cb) {
        const resp = new PropOwnerCertOCRResponse();
        this.request("PropOwnerCertOCR", req, resp, cb);
    }
    /**
     * 本接口支持快速精准识别营业执照上的字段，包括统一社会信用代码、公司名称、经营场所、主体类型、法定代表人、注册资金、组成形式、成立日期、营业期限和经营范围等字段。
     * @param {BizLicenseOCRRequest} req
     * @param {function(string, BizLicenseOCRResponse):void} cb
     * @public
     */
    BizLicenseOCR(req, cb) {
        const resp = new BizLicenseOCRResponse();
        this.request("BizLicenseOCR", req, resp, cb);
    }
    /**
     * 本接口支持图片内手写体文字的检测和识别，针对手写字体无规则、字迹潦草、模糊等特点进行了识别能力的增强。
     * @param {GeneralHandwritingOCRRequest} req
     * @param {function(string, GeneralHandwritingOCRResponse):void} cb
     * @public
     */
    GeneralHandwritingOCR(req, cb) {
        const resp = new GeneralHandwritingOCRResponse();
        this.request("GeneralHandwritingOCR", req, resp, cb);
    }
    /**
     * 本接口支持市面上主流版式电子运单的识别，包括收件人和寄件人的姓名、电话、地址以及运单号等字段。
     * @param {WaybillOCRRequest} req
     * @param {function(string, WaybillOCRResponse):void} cb
     * @public
     */
    WaybillOCR(req, cb) {
        const resp = new WaybillOCRResponse();
        this.request("WaybillOCR", req, resp, cb);
    }
    /**
     * 本接口支持对通用机打发票的发票代码、发票号码、日期、购买方识别号、销售方识别号、校验码、小写金额等关键字段的识别。
     * @param {InvoiceGeneralOCRRequest} req
     * @param {function(string, InvoiceGeneralOCRResponse):void} cb
     * @public
     */
    InvoiceGeneralOCR(req, cb) {
        const resp = new InvoiceGeneralOCRResponse();
        this.request("InvoiceGeneralOCR", req, resp, cb);
    }
    /**
     * 本接口支持中国香港身份证人像面中关键字段的识别，包括中文姓名、英文姓名、姓名电码、出生日期、性别、证件符号、首次签发日期、最近领用日期、身份证号、是否是永久性居民身份证；具备防伪识别、人像照片裁剪等扩展功能。
本接口暂未完全对外开放，如需咨询，请[联系商务](https://cloud.tencent.com/about/connect)

     * @param {HKIDCardOCRRequest} req
     * @param {function(string, HKIDCardOCRResponse):void} cb
     * @public
     */
    HKIDCardOCR(req, cb) {
        const resp = new HKIDCardOCRResponse();
        this.request("HKIDCardOCR", req, resp, cb);
    }
    /**
     * 本接口支持增值税专用发票、增值税普通发票、增值税电子发票全字段的内容检测和识别，包括发票代码、发票号码、打印发票代码、打印发票号码、开票日期、合计金额、校验码、税率、合计税额、价税合计、购买方识别号、复核、销售方识别号、开票人、密码区1、密码区2、密码区3、密码区4、发票名称、购买方名称、销售方名称、服务名称、备注、规格型号、数量、单价、金额、税额、收款人等字段。
     * @param {VatInvoiceOCRRequest} req
     * @param {function(string, VatInvoiceOCRResponse):void} cb
     * @public
     */
    VatInvoiceOCR(req, cb) {
        const resp = new VatInvoiceOCRResponse();
        this.request("VatInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持营业执照信息的识别与准确性核验，返回的营业执照信息比营业执照识别及核验（基础版）接口更详细。
您可以通过输入营业执照关键字段或传入营业执照图片提供所需的验证信息，接口返回真实的企业工商照面信息及核验结果，包括统一社会信用代码、组织机构代码、经营期限、法人姓名、经营状态、经营业务范围及方式、注册资金、注册币种、登记机关、开业日期、企业（机构）类型、注销日期、吊销日期、许可经营项目、一般经营项目、核准时间、省、地级市、区/县、住所所在行政区划代码、行业门类代码、行业门类名称、国民经济行业代码、国民经济行业名称、经营（业务）范围、要核验的工商注册号、工商注册号、要核验的企业名称、企业名称、要核验的注册住址、注册住址、核验结果共33个详细字段。
     * @param {VerifyBizLicenseRequest} req
     * @param {function(string, VerifyBizLicenseResponse):void} cb
     * @public
     */
    VerifyBizLicense(req, cb) {
        const resp = new VerifyBizLicenseResponse();
        this.request("VerifyBizLicense", req, resp, cb);
    }
    /**
     * 本接口支持对完税证明的税号、纳税人识别号、纳税人名称、金额合计大写、金额合计小写、填发日期、税务机关、填票人等关键字段的识别。
     * @param {DutyPaidProofOCRRequest} req
     * @param {function(string, DutyPaidProofOCRResponse):void} cb
     * @public
     */
    DutyPaidProofOCR(req, cb) {
        const resp = new DutyPaidProofOCRResponse();
        this.request("DutyPaidProofOCR", req, resp, cb);
    }
    /**
     * 本接口支持图像整体文字的检测和识别。可以识别中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语19种语言，且各种语言均支持与英文混合的文字识别。

适用于印刷文档识别、网络图片识别、广告图文字识别、街景店招牌识别、菜单识别、视频标题识别、头像文字识别等场景。

产品优势：支持自动识别语言类型，可返回文本框坐标信息，对于倾斜文本支持自动旋转纠正。

通用印刷体识别不同版本的差异如下：
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:150px"></th>
          <th style="width:200px">【荐】通用印刷体识别</th>
          <th ><a href="https://cloud.tencent.com/document/product/866/34937">【荐】通用印刷体识别（高精度版）</a></th>
          <th><a href="https://cloud.tencent.com/document/product/866/37831">通用印刷体识别（精简版）</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 适用场景</td>
          <td>适用于所有通用场景的印刷体识别</td>
          <td>适用于文字较多、长串数字、小字、模糊字、倾斜文本等困难场景</td>
          <td>适用于快速文本识别场景，准召率有一定损失，价格更优惠</td>
        </tr>
        <tr>
          <td>识别准确率</td>
          <td>96%</td>
          <td>99%</td>
          <td>91%</td>
        </tr>
        <tr>
          <td>价格</td>
          <td>中</td>
          <td>高</td>
          <td>低</td>
        </tr>
        <tr>
          <td>支持的语言</td>
          <td>中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语</td>
          <td>中文、英文、中英文</td>
          <td>中文、英文、中英文</td>
        </tr>
        <tr>
          <td>自动语言检测</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>返回文本行坐标</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>自动旋转纠正</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，不支持角度返回</td>
          <td>支持旋转识别，返回角度信息</td>
        </tr>
      </tbody>
    </table>
     * @param {GeneralBasicOCRRequest} req
     * @param {function(string, GeneralBasicOCRResponse):void} cb
     * @public
     */
    GeneralBasicOCR(req, cb) {
        const resp = new GeneralBasicOCRResponse();
        this.request("GeneralBasicOCR", req, resp, cb);
    }
    /**
     * 本接口支持对卡式港澳台通行证的识别，包括签发地点、签发机关、有效期限、性别、出生日期、英文姓名、姓名、证件号等字段。
     * @param {PermitOCRRequest} req
     * @param {function(string, PermitOCRResponse):void} cb
     * @public
     */
    PermitOCR(req, cb) {
        const resp = new PermitOCRResponse();
        this.request("PermitOCR", req, resp, cb);
    }
    /**
     * 本接口支持组织机构代码证关键字段的识别，包括代码、有效期、地址、机构名称等。
     * @param {OrgCodeCertOCRRequest} req
     * @param {function(string, OrgCodeCertOCRResponse):void} cb
     * @public
     */
    OrgCodeCertOCR(req, cb) {
        const resp = new OrgCodeCertOCRResponse();
        this.request("OrgCodeCertOCR", req, resp, cb);
    }
    /**
     * 本接口支持常见银行票据的自动分类和识别。切片识别包括金融行业常见票据的重要切片字段识别，包括金额、账号、日期、凭证号码等。（金融票据切片：金融票据中待识别字段及其周围局部区域的裁剪图像。）
     * @param {FinanBillSliceOCRRequest} req
     * @param {function(string, FinanBillSliceOCRResponse):void} cb
     * @public
     */
    FinanBillSliceOCR(req, cb) {
        const resp = new FinanBillSliceOCRResponse();
        this.request("FinanBillSliceOCR", req, resp, cb);
    }
    /**
     * 本接口支持识别公路汽车客票的发票代码、发票号码、日期、姓名、票价等字段。
     * @param {BusInvoiceOCRRequest} req
     * @param {function(string, BusInvoiceOCRResponse):void} cb
     * @public
     */
    BusInvoiceOCR(req, cb) {
        const resp = new BusInvoiceOCRResponse();
        this.request("BusInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持图片内表格文档的检测和识别，返回每个单元格的文字内容，支持将识别结果保存为 Excel 格式。
     * @param {TableOCRRequest} req
     * @param {function(string, TableOCRResponse):void} cb
     * @public
     */
    TableOCR(req, cb) {
        const resp = new TableOCRResponse();
        this.request("TableOCR", req, resp, cb);
    }
    /**
     * 本接口支持网约车驾驶证关键字段的识别，包括姓名、证号、起始日期、截止日期、发证日期。
     * @param {RideHailingDriverLicenseOCRRequest} req
     * @param {function(string, RideHailingDriverLicenseOCRResponse):void} cb
     * @public
     */
    RideHailingDriverLicenseOCR(req, cb) {
        const resp = new RideHailingDriverLicenseOCRResponse();
        this.request("RideHailingDriverLicenseOCR", req, resp, cb);
    }
    /**
     * 港澳台居住证OCR支持港澳台居住证正反面全字段内容检测识别功能，包括姓名、性别、出生日期、地址、身份证ID、签发机关、有效期限、签发次数、通行证号码关键字段识别。可以应用于港澳台居住证信息有效性校验场景，例如银行开户、用户注册等场景。
     * @param {HmtResidentPermitOCRRequest} req
     * @param {function(string, HmtResidentPermitOCRResponse):void} cb
     * @public
     */
    HmtResidentPermitOCR(req, cb) {
        const resp = new HmtResidentPermitOCRResponse();
        this.request("HmtResidentPermitOCR", req, resp, cb);
    }
    /**
     * 本接口支持作业算式题目的自动识别，目前覆盖 K12 学力范围内的 14 种题型，包括加减乘除四则运算、分数四则运算、竖式四则运算、脱式计算等。
     * @param {ArithmeticOCRRequest} req
     * @param {function(string, ArithmeticOCRResponse):void} cb
     * @public
     */
    ArithmeticOCR(req, cb) {
        const resp = new ArithmeticOCRResponse();
        this.request("ArithmeticOCR", req, resp, cb);
    }
    /**
     * 本接口支持对中国大陆机动车车牌的自动定位和识别，返回地域编号和车牌号信息。
     * @param {LicensePlateOCRRequest} req
     * @param {function(string, LicensePlateOCRResponse):void} cb
     * @public
     */
    LicensePlateOCR(req, cb) {
        const resp = new LicensePlateOCRResponse();
        this.request("LicensePlateOCR", req, resp, cb);
    }
    /**
     * 本接口支持不动产权证关键字段的识别，包括使用期限、面积、用途、权利性质、权利类型、坐落、共有情况、权利人、权利其他状况等。



     * @param {EstateCertOCRRequest} req
     * @param {function(string, EstateCertOCRResponse):void} cb
     * @public
     */
    EstateCertOCR(req, cb) {
        const resp = new EstateCertOCRResponse();
        this.request("EstateCertOCR", req, resp, cb);
    }
    /**
     * 支持身份证、护照、名片、银行卡、行驶证、驾驶证、港澳台通行证、户口本、港澳台来往内地通行证、港澳台居住证、不动产证、营业执照的智能分类。

     * @param {ClassifyDetectOCRRequest} req
     * @param {function(string, ClassifyDetectOCRResponse):void} cb
     * @public
     */
    ClassifyDetectOCR(req, cb) {
        const resp = new ClassifyDetectOCRResponse();
        this.request("ClassifyDetectOCR", req, resp, cb);
    }
    /**
     * 印章识别已支持各类印章，包括发票章，财务章等，适用于公文，票据等场景。
     * @param {SealOCRRequest} req
     * @param {function(string, SealOCRResponse):void} cb
     * @public
     */
    SealOCR(req, cb) {
        const resp = new SealOCRResponse();
        this.request("SealOCR", req, resp, cb);
    }
    /**
     * 本接口支持火车票全字段的识别，包括编号、票价、姓名、座位号、出发时间、出发站、到达站、车次、席别、发票类型及序列号等。

     * @param {TrainTicketOCRRequest} req
     * @param {function(string, TrainTicketOCRResponse):void} cb
     * @public
     */
    TrainTicketOCR(req, cb) {
        const resp = new TrainTicketOCRResponse();
        this.request("TrainTicketOCR", req, resp, cb);
    }
    /**
     * 本接口通过检测图片中的文字信息特征，快速判断图片中有无文字并返回判断结果，帮助用户过滤无文字的图片。
     * @param {TextDetectRequest} req
     * @param {function(string, TextDetectResponse):void} cb
     * @public
     */
    TextDetect(req, cb) {
        const resp = new TextDetectResponse();
        this.request("TextDetect", req, resp, cb);
    }
    /**
     * 本接口支持图像整体文字的检测和识别。支持中文、英文、中英文、数字和特殊字符号的识别，并返回文字框位置和文字内容。

适用于快速文本识别场景。

产品优势：与通用印刷体识别接口相比，精简版虽然在准确率和召回率上有一定损失，但价格更加优惠。

通用印刷体识别不同版本的差异如下：
<table style="width:715px">
      <thead>
        <tr>
          <th style="width:150px"></th>
          <th >通用印刷体识别（精简版）</th>
          <th style="width:200px"><a href="https://cloud.tencent.com/document/product/866/33526">【荐】通用印刷体识别</a></th>
          <th><a href="https://cloud.tencent.com/document/product/866/34937">【荐】通用印刷体识别（高精度版）</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 适用场景</td>
          <td>适用于快速文本识别场景，准召率有一定损失，价格更优惠</td>
          <td>适用于所有通用场景的印刷体识别</td>
          <td>适用于文字较多、长串数字、小字、模糊字、倾斜文本等困难场景</td>
          
          
        </tr>
        <tr>
          <td>识别准确率</td>
          <td>91%</td>
          <td>96%</td>
          <td>99%</td>
          
          
        </tr>
        <tr>
          <td>价格</td>
          <td>低</td>
          <td>中</td>
          <td>高</td>
          
          
        </tr>
        <tr>
          <td>支持的语言</td>
          <td>中文、英文、中英文</td>
          <td>中文、英文、中英文、日语、韩语、西班牙语、法语、德语、葡萄牙语、越南语、马来语、俄语、意大利语、荷兰语、瑞典语、芬兰语、丹麦语、挪威语、匈牙利语、泰语</td>
          <td>中文、英文、中英文</td>
          
          
        </tr>
        <tr>
          <td>自动语言检测</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          
          
        </tr>
        <tr>
          <td>返回文本行坐标</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
          
          
        </tr>
        <tr>
          <td>自动旋转纠正</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，返回角度信息</td>
          <td>支持旋转识别，不支持角度返回</td>
          
         
        </tr>
      </tbody>
    </table>
     * @param {GeneralEfficientOCRRequest} req
     * @param {function(string, GeneralEfficientOCRResponse):void} cb
     * @public
     */
    GeneralEfficientOCR(req, cb) {
        const resp = new GeneralEfficientOCRResponse();
        this.request("GeneralEfficientOCR", req, resp, cb);
    }
    /**
     * 本接口支持出租车发票关键字段的识别，包括发票号码、发票代码、金额、日期、上下车时间、里程、车牌号、发票类型及所属地区等字段。
     * @param {TaxiInvoiceOCRRequest} req
     * @param {function(string, TaxiInvoiceOCRResponse):void} cb
     * @public
     */
    TaxiInvoiceOCR(req, cb) {
        const resp = new TaxiInvoiceOCRResponse();
        this.request("TaxiInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持国内机动车登记证书主要字段的结构化识别，包括机动车所有人、身份证明名称、号码、车辆型号、车辆识别代号、发动机号、制造厂名称等。
     * @param {VehicleRegCertOCRRequest} req
     * @param {function(string, VehicleRegCertOCRResponse):void} cb
     * @public
     */
    VehicleRegCertOCR(req, cb) {
        const resp = new VehicleRegCertOCRResponse();
        this.request("VehicleRegCertOCR", req, resp, cb);
    }
    /**
     * 本接口支持事业单位法人证书关键字段识别，包括注册号、有效期、住所、名称、法定代表人等。
     * @param {InstitutionOCRRequest} req
     * @param {function(string, InstitutionOCRResponse):void} cb
     * @public
     */
    InstitutionOCR(req, cb) {
        const resp = new InstitutionOCRResponse();
        this.request("InstitutionOCR", req, resp, cb);
    }
    /**
     * 本接口支持图像英文文字的检测和识别，返回文字框位置与文字内容。支持多场景、任意版面下的英文、字母、数字和常见字符的识别，同时覆盖英文印刷体和英文手写体识别。
     * @param {EnglishOCRRequest} req
     * @param {function(string, EnglishOCRResponse):void} cb
     * @public
     */
    EnglishOCR(req, cb) {
        const resp = new EnglishOCRResponse();
        this.request("EnglishOCR", req, resp, cb);
    }
    /**
     * 本接口支持居民户口簿户主页及成员页关键字段的识别，包括姓名、户别、地址、籍贯、身份证号码等。
     * @param {ResidenceBookletOCRRequest} req
     * @param {function(string, ResidenceBookletOCRResponse):void} cb
     * @public
     */
    ResidenceBookletOCR(req, cb) {
        const resp = new ResidenceBookletOCRResponse();
        this.request("ResidenceBookletOCR", req, resp, cb);
    }
    /**
     * 本接口支持对中国大陆主流银行卡的卡号、银行信息、有效期等关键字段的检测与识别。
     * @param {BankCardOCRRequest} req
     * @param {function(string, BankCardOCRResponse):void} cb
     * @public
     */
    BankCardOCR(req, cb) {
        const resp = new BankCardOCRResponse();
        this.request("BankCardOCR", req, resp, cb);
    }
    /**
     * 本接口支持机动车销售统一发票和二手车销售统一发票的识别，包括发票号码、发票代码、合计金额、合计税额等二十多个字段。
     * @param {CarInvoiceOCRRequest} req
     * @param {function(string, CarInvoiceOCRResponse):void} cb
     * @public
     */
    CarInvoiceOCR(req, cb) {
        const resp = new CarInvoiceOCRResponse();
        this.request("CarInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持驾驶证主页和副页所有字段的自动定位与识别，重点字段的识别准确度达到99%以上。

驾驶证主页：包括证号、姓名、性别、国籍、住址、出生日期、初次领证日期、准驾车型、有效期限。

驾驶证副页：包括证号、姓名、档案编号、记录。

另外，本接口还支持复印件、翻拍和PS告警功能。
     * @param {DriverLicenseOCRRequest} req
     * @param {function(string, DriverLicenseOCRResponse):void} cb
     * @public
     */
    DriverLicenseOCR(req, cb) {
        const resp = new DriverLicenseOCRResponse();
        this.request("DriverLicenseOCR", req, resp, cb);
    }
    /**
     * 智能识别并结构化港澳台居民来往内地通行证正面全部字段，包含中文姓名、英文姓名、性别、出生日期、签发机关、有效期限、证件号、签发地点、签发次数、证件类别。
     * @param {MainlandPermitOCRRequest} req
     * @param {function(string, MainlandPermitOCRResponse):void} cb
     * @public
     */
    MainlandPermitOCR(req, cb) {
        const resp = new MainlandPermitOCRResponse();
        this.request("MainlandPermitOCR", req, resp, cb);
    }
    /**
     * 本接口支持识别主流初高中数学符号和公式，返回公式的 Latex 格式文本。
     * @param {FormulaOCRRequest} req
     * @param {function(string, FormulaOCRResponse):void} cb
     * @public
     */
    FormulaOCR(req, cb) {
        const resp = new FormulaOCRResponse();
        this.request("FormulaOCR", req, resp, cb);
    }
    /**
     * 本接口支持中国大陆地区护照个人资料页多个字段的检测与识别。已支持字段包括英文姓名、中文姓名、国家码、护照号、出生地、出生日期、国籍英文、性别英文、有效期、签发地点英文、签发日期、持证人签名、护照机读码（MRZ码）等。
     * @param {PassportOCRRequest} req
     * @param {function(string, PassportOCRResponse):void} cb
     * @public
     */
    PassportOCR(req, cb) {
        const resp = new PassportOCRResponse();
        this.request("PassportOCR", req, resp, cb);
    }
    /**
     * 本接口支持常见银行票据的自动分类和识别。整单识别包括支票（含现金支票、普通支票、转账支票），承兑汇票（含银行承兑汇票、商业承兑汇票）以及进账单等，适用于中国人民银行印发的 2010 版银行票据凭证版式（银发[2010]299 号）。
     * @param {FinanBillOCRRequest} req
     * @param {function(string, FinanBillOCRResponse):void} cb
     * @public
     */
    FinanBillOCR(req, cb) {
        const resp = new FinanBillOCRResponse();
        this.request("FinanBillOCR", req, resp, cb);
    }
    /**
     * 本接口支持多张、多类型票据的混合识别，系统自动实现分割、分类和识别，同时支持自选需要识别的票据类型。目前已支持增值税发票、增值税发票（卷票）、定额发票、通用机打发票、购车发票、火车票、出租车发票、机票行程单、汽车票、轮船票、过路过桥费发票共11种票据。
     * @param {MixedInvoiceOCRRequest} req
     * @param {function(string, MixedInvoiceOCRResponse):void} cb
     * @public
     */
    MixedInvoiceOCR(req, cb) {
        const resp = new MixedInvoiceOCRResponse();
        this.request("MixedInvoiceOCR", req, resp, cb);
    }
    /**
     * 本接口支持数学试题内容的识别和结构化输出，包括通用文本解析和小学/初中/高中数学公式解析能力（包括91种题型，180种符号）。
     * @param {EduPaperOCRRequest} req
     * @param {function(string, EduPaperOCRResponse):void} cb
     * @public
     */
    EduPaperOCR(req, cb) {
        const resp = new EduPaperOCRResponse();
        this.request("EduPaperOCR", req, resp, cb);
    }
    /**
     * 本接口支持网约车运输证关键字段的识别，包括交运管许可字号、车辆所有人、车辆号牌、起始日期、截止日期、发证日期。
           
     * @param {RideHailingTransportLicenseOCRRequest} req
     * @param {function(string, RideHailingTransportLicenseOCRResponse):void} cb
     * @public
     */
    RideHailingTransportLicenseOCR(req, cb) {
        const resp = new RideHailingTransportLicenseOCRResponse();
        this.request("RideHailingTransportLicenseOCR", req, resp, cb);
    }
    /**
     * 本接口支持行驶证主页和副页所有字段的自动定位与识别。

行驶证主页：车牌号码、车辆类型、所有人、住址、使用性质、品牌型号、识别代码、发动机号、注册日期、发证日期、发证单位。

行驶证副页：号牌号码、档案编号、核定载人数、总质量、整备质量、核定载质量、外廓尺寸、准牵引总质量、备注、检验记录。

另外，本接口还支持复印件、翻拍和PS告警功能。
     * @param {VehicleLicenseOCRRequest} req
     * @param {function(string, VehicleLicenseOCRResponse):void} cb
     * @public
     */
    VehicleLicenseOCR(req, cb) {
        const resp = new VehicleLicenseOCRResponse();
        this.request("VehicleLicenseOCR", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ocr_client.js.map