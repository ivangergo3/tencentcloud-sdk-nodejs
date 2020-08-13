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
const DetectInfoVideoData = models_1.Models.DetectInfoVideoData;
const GetDetectInfoEnhancedRequest = models_1.Models.GetDetectInfoEnhancedRequest;
const LivenessRequest = models_1.Models.LivenessRequest;
const LivenessCompareResponse = models_1.Models.LivenessCompareResponse;
const MobileNetworkTimeVerificationResponse = models_1.Models.MobileNetworkTimeVerificationResponse;
const GetLiveCodeRequest = models_1.Models.GetLiveCodeRequest;
const IdCardVerificationRequest = models_1.Models.IdCardVerificationRequest;
const BankCardVerificationRequest = models_1.Models.BankCardVerificationRequest;
const DetectInfoBestFrame = models_1.Models.DetectInfoBestFrame;
const CheckIdCardInformationResponse = models_1.Models.CheckIdCardInformationResponse;
const GetDetectInfoEnhancedResponse = models_1.Models.GetDetectInfoEnhancedResponse;
const PhoneVerificationRequest = models_1.Models.PhoneVerificationRequest;
const DetectAuthResponse = models_1.Models.DetectAuthResponse;
const PhoneVerificationResponse = models_1.Models.PhoneVerificationResponse;
const IdCardOCRVerificationRequest = models_1.Models.IdCardOCRVerificationRequest;
const BankCard4EVerificationResponse = models_1.Models.BankCard4EVerificationResponse;
const MobileStatusRequest = models_1.Models.MobileStatusRequest;
const LivenessRecognitionResponse = models_1.Models.LivenessRecognitionResponse;
const BankCard2EVerificationRequest = models_1.Models.BankCard2EVerificationRequest;
const LivenessRecognitionRequest = models_1.Models.LivenessRecognitionRequest;
const MobileNetworkTimeVerificationRequest = models_1.Models.MobileNetworkTimeVerificationRequest;
const IdCardOCRVerificationResponse = models_1.Models.IdCardOCRVerificationResponse;
const MobileStatusResponse = models_1.Models.MobileStatusResponse;
const LivenessResponse = models_1.Models.LivenessResponse;
const CheckIdCardInformationRequest = models_1.Models.CheckIdCardInformationRequest;
const DetectInfoText = models_1.Models.DetectInfoText;
const DetectAuthRequest = models_1.Models.DetectAuthRequest;
const MinorsVerificationResponse = models_1.Models.MinorsVerificationResponse;
const BankCardVerificationResponse = models_1.Models.BankCardVerificationResponse;
const ImageRecognitionRequest = models_1.Models.ImageRecognitionRequest;
const BankCard4EVerificationRequest = models_1.Models.BankCard4EVerificationRequest;
const GetActionSequenceResponse = models_1.Models.GetActionSequenceResponse;
const MinorsVerificationRequest = models_1.Models.MinorsVerificationRequest;
const ImageRecognitionResponse = models_1.Models.ImageRecognitionResponse;
const GetActionSequenceRequest = models_1.Models.GetActionSequenceRequest;
const GetDetectInfoResponse = models_1.Models.GetDetectInfoResponse;
const GetLiveCodeResponse = models_1.Models.GetLiveCodeResponse;
const GetDetectInfoRequest = models_1.Models.GetDetectInfoRequest;
const BankCard2EVerificationResponse = models_1.Models.BankCard2EVerificationResponse;
const IdCardVerificationResponse = models_1.Models.IdCardVerificationResponse;
const DetectInfoIdCardData = models_1.Models.DetectInfoIdCardData;
const LivenessCompareRequest = models_1.Models.LivenessCompareRequest;
const DetectDetail = models_1.Models.DetectDetail;
/**
 * faceid client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("faceid.tencentcloudapi.com", "2018-03-01", credential, region, profile);
    }
    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     * @param {GetDetectInfoRequest} req
     * @param {function(string, GetDetectInfoResponse):void} cb
     * @public
     */
    GetDetectInfo(req, cb) {
        const resp = new GetDetectInfoResponse();
        this.request("GetDetectInfo", req, resp, cb);
    }
    /**
     * 未成年人守护接口是通过传入手机号或姓名和身份证号，结合权威数据源和腾讯健康守护可信模型，判断该信息是否真实且年满18周岁。腾讯健康守护可信模型覆盖了上十亿手机库源，覆盖率高、准确率高，如果不在库中的手机号，还可以通过姓名+身份证进行兜底验证。
     * @param {MinorsVerificationRequest} req
     * @param {function(string, MinorsVerificationResponse):void} cb
     * @public
     */
    MinorsVerification(req, cb) {
        const resp = new MinorsVerificationResponse();
        this.request("MinorsVerification", req, resp, cb);
    }
    /**
     * 使用数字活体检测模式前，需调用本接口获取数字验证码。
     * @param {GetLiveCodeRequest} req
     * @param {function(string, GetLiveCodeResponse):void} cb
     * @public
     */
    GetLiveCode(req, cb) {
        const resp = new GetLiveCodeResponse();
        this.request("GetLiveCode", req, resp, cb);
    }
    /**
     * 本接口用于查询手机号在网时长，输入手机号进行查询。
     * @param {MobileNetworkTimeVerificationRequest} req
     * @param {function(string, MobileNetworkTimeVerificationResponse):void} cb
     * @public
     */
    MobileNetworkTimeVerification(req, cb) {
        const resp = new MobileNetworkTimeVerificationResponse();
        this.request("MobileNetworkTimeVerification", req, resp, cb);
    }
    /**
     * 使用动作活体检测模式前，需调用本接口获取动作顺序。
     * @param {GetActionSequenceRequest} req
     * @param {function(string, GetActionSequenceResponse):void} cb
     * @public
     */
    GetActionSequence(req, cb) {
        const resp = new GetActionSequenceResponse();
        this.request("GetActionSequence", req, resp, cb);
    }
    /**
     * 传入身份证人像面照片，识别身份证照片上的信息，并将姓名、身份证号、身份证人像照片与公安权威库的证件照进行比对，是否属于同一个人，从而验证身份证信息的真实性。
     * @param {CheckIdCardInformationRequest} req
     * @param {function(string, CheckIdCardInformationResponse):void} cb
     * @public
     */
    CheckIdCardInformation(req, cb) {
        const resp = new CheckIdCardInformationResponse();
        this.request("CheckIdCardInformation", req, resp, cb);
    }
    /**
     * 本接口用于银行卡号、姓名、开户证件号信息的真实性和一致性。
     * @param {BankCardVerificationRequest} req
     * @param {function(string, BankCardVerificationResponse):void} cb
     * @public
     */
    BankCardVerification(req, cb) {
        const resp = new BankCardVerificationResponse();
        this.request("BankCardVerification", req, resp, cb);
    }
    /**
     * 活体检测
     * @param {LivenessRequest} req
     * @param {function(string, LivenessResponse):void} cb
     * @public
     */
    Liveness(req, cb) {
        const resp = new LivenessResponse();
        this.request("Liveness", req, resp, cb);
    }
    /**
     * 传入视频和身份信息，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与公安权威库的证件照是否属于同一个人。
     * @param {LivenessRecognitionRequest} req
     * @param {function(string, LivenessRecognitionResponse):void} cb
     * @public
     */
    LivenessRecognition(req, cb) {
        const resp = new LivenessRecognitionResponse();
        this.request("LivenessRecognition", req, resp, cb);
    }
    /**
     * 本接口用于校验姓名和银行卡号的真实性和一致性。
     * @param {BankCard2EVerificationRequest} req
     * @param {function(string, BankCard2EVerificationResponse):void} cb
     * @public
     */
    BankCard2EVerification(req, cb) {
        const resp = new BankCard2EVerificationResponse();
        this.request("BankCard2EVerification", req, resp, cb);
    }
    /**
     * 传入姓名和身份证号，校验两者的真实性和一致性。
     * @param {IdCardVerificationRequest} req
     * @param {function(string, IdCardVerificationResponse):void} cb
     * @public
     */
    IdCardVerification(req, cb) {
        const resp = new IdCardVerificationResponse();
        this.request("IdCardVerification", req, resp, cb);
    }
    /**
     * 本接口用于校验姓名和身份证号的真实性和一致性，您可以通过输入姓名和身份证号或传入身份证人像面照片提供所需验证信息。
     * @param {IdCardOCRVerificationRequest} req
     * @param {function(string, IdCardOCRVerificationResponse):void} cb
     * @public
     */
    IdCardOCRVerification(req, cb) {
        const resp = new IdCardOCRVerificationResponse();
        this.request("IdCardOCRVerification", req, resp, cb);
    }
    /**
     * 本接口用于输入银行卡号、姓名、开户证件号、开户手机号，校验信息的真实性和一致性。
     * @param {BankCard4EVerificationRequest} req
     * @param {function(string, BankCard4EVerificationResponse):void} cb
     * @public
     */
    BankCard4EVerification(req, cb) {
        const resp = new BankCard4EVerificationResponse();
        this.request("BankCard4EVerification", req, resp, cb);
    }
    /**
     * 传入照片和身份信息，判断该照片与公安权威库的证件照是否属于同一个人。
     * @param {ImageRecognitionRequest} req
     * @param {function(string, ImageRecognitionResponse):void} cb
     * @public
     */
    ImageRecognition(req, cb) {
        const resp = new ImageRecognitionResponse();
        this.request("ImageRecognition", req, resp, cb);
    }
    /**
     * 每次调用人脸核身SaaS化服务前，需先调用本接口获取BizToken，用来串联核身流程，在验证完成后，用于获取验证结果信息。
     * @param {DetectAuthRequest} req
     * @param {function(string, DetectAuthResponse):void} cb
     * @public
     */
    DetectAuth(req, cb) {
        const resp = new DetectAuthResponse();
        this.request("DetectAuth", req, resp, cb);
    }
    /**
     * 完成验证后，用BizToken调用本接口获取结果信息，BizToken生成后三天内（3\*24\*3,600秒）可多次拉取。
     * @param {GetDetectInfoEnhancedRequest} req
     * @param {function(string, GetDetectInfoEnhancedResponse):void} cb
     * @public
     */
    GetDetectInfoEnhanced(req, cb) {
        const resp = new GetDetectInfoEnhancedResponse();
        this.request("GetDetectInfoEnhanced", req, resp, cb);
    }
    /**
     * 本接口用于验证手机号的状态，您可以输入手机号进行查询。
     * @param {MobileStatusRequest} req
     * @param {function(string, MobileStatusResponse):void} cb
     * @public
     */
    MobileStatus(req, cb) {
        const resp = new MobileStatusResponse();
        this.request("MobileStatus", req, resp, cb);
    }
    /**
     * 本接口用于校验手机号、姓名和身份证号的真实性和一致性。
     * @param {PhoneVerificationRequest} req
     * @param {function(string, PhoneVerificationResponse):void} cb
     * @public
     */
    PhoneVerification(req, cb) {
        const resp = new PhoneVerificationResponse();
        this.request("PhoneVerification", req, resp, cb);
    }
    /**
     * 传入视频和照片，先判断视频中是否为真人，判断为真人后，再判断该视频中的人与上传照片是否属于同一个人。
     * @param {LivenessCompareRequest} req
     * @param {function(string, LivenessCompareResponse):void} cb
     * @public
     */
    LivenessCompare(req, cb) {
        const resp = new LivenessCompareResponse();
        this.request("LivenessCompare", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=faceid_client.js.map