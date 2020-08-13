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
const DescribeClusterPersonArrivedMallResponse = models_1.Models.DescribeClusterPersonArrivedMallResponse;
const DescribeShopTrafficInfoRequest = models_1.Models.DescribeShopTrafficInfoRequest;
const GenderAgeTrafficDetail = models_1.Models.GenderAgeTrafficDetail;
const DescribeZoneFlowAndStayTimeResponse = models_1.Models.DescribeZoneFlowAndStayTimeResponse;
const DescribePersonArrivedMallResponse = models_1.Models.DescribePersonArrivedMallResponse;
const ModifyPersonTypeResponse = models_1.Models.ModifyPersonTypeResponse;
const HourTrafficInfoDetail = models_1.Models.HourTrafficInfoDetail;
const DescribeZoneFlowDailyByZoneIdResponse = models_1.Models.DescribeZoneFlowDailyByZoneIdResponse;
const DescribeZoneFlowAgeInfoByZoneIdResponse = models_1.Models.DescribeZoneFlowAgeInfoByZoneIdResponse;
const DescribeClusterPersonTraceResponse = models_1.Models.DescribeClusterPersonTraceResponse;
const DescribePersonInfoRequest = models_1.Models.DescribePersonInfoRequest;
const DescribePersonInfoByFacePictureResponse = models_1.Models.DescribePersonInfoByFacePictureResponse;
const DescribePersonTraceDetailRequest = models_1.Models.DescribePersonTraceDetailRequest;
const CreateAccountRequest = models_1.Models.CreateAccountRequest;
const NetworkLastInfo = models_1.Models.NetworkLastInfo;
const DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse = models_1.Models.DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse;
const DeletePersonFeatureResponse = models_1.Models.DeletePersonFeatureResponse;
const DescribeCameraPersonResponse = models_1.Models.DescribeCameraPersonResponse;
const ModifyPersonTagInfoResponse = models_1.Models.ModifyPersonTagInfoResponse;
const DescribeShopHourTrafficInfoResponse = models_1.Models.DescribeShopHourTrafficInfoResponse;
const RegisterCallbackResponse = models_1.Models.RegisterCallbackResponse;
const NetworkInfo = models_1.Models.NetworkInfo;
const DescribeClusterPersonArrivedMallRequest = models_1.Models.DescribeClusterPersonArrivedMallRequest;
const DescribeZoneFlowGenderInfoByZoneIdResponse = models_1.Models.DescribeZoneFlowGenderInfoByZoneIdResponse;
const DescribeHistoryNetworkInfoRequest = models_1.Models.DescribeHistoryNetworkInfoRequest;
const DescribePersonTraceDetailResponse = models_1.Models.DescribePersonTraceDetailResponse;
const DescribePersonInfoByFacePictureRequest = models_1.Models.DescribePersonInfoByFacePictureRequest;
const DescribePersonVisitInfoRequest = models_1.Models.DescribePersonVisitInfoRequest;
const DescribeZoneTrafficInfoResponse = models_1.Models.DescribeZoneTrafficInfoResponse;
const DeletePersonFeatureRequest = models_1.Models.DeletePersonFeatureRequest;
const DescribeFaceIdByTempIdRequest = models_1.Models.DescribeFaceIdByTempIdRequest;
const PersonProfile = models_1.Models.PersonProfile;
const DescribePersonResponse = models_1.Models.DescribePersonResponse;
const DescribeTrajectoryDataRequest = models_1.Models.DescribeTrajectoryDataRequest;
const DescribeZoneTrafficInfoRequest = models_1.Models.DescribeZoneTrafficInfoRequest;
const ModifyPersonFeatureInfoResponse = models_1.Models.ModifyPersonFeatureInfoResponse;
const ZoneTrafficInfoDetail = models_1.Models.ZoneTrafficInfoDetail;
const DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest = models_1.Models.DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest;
const ZoneFlowAndAvrStayTime = models_1.Models.ZoneFlowAndAvrStayTime;
const SceneInfo = models_1.Models.SceneInfo;
const CameraPersonInfo = models_1.Models.CameraPersonInfo;
const DescribePersonVisitInfoResponse = models_1.Models.DescribePersonVisitInfoResponse;
const DescribeNetworkInfoRequest = models_1.Models.DescribeNetworkInfoRequest;
const DescribeZoneFlowAndStayTimeRequest = models_1.Models.DescribeZoneFlowAndStayTimeRequest;
const DescribeZoneFlowHourlyByZoneIdRequest = models_1.Models.DescribeZoneFlowHourlyByZoneIdRequest;
const DescribeFaceIdByTempIdResponse = models_1.Models.DescribeFaceIdByTempIdResponse;
const TrajectorySunData = models_1.Models.TrajectorySunData;
const ModifyPersonTagInfoRequest = models_1.Models.ModifyPersonTagInfoRequest;
const ShopDayTrafficInfo = models_1.Models.ShopDayTrafficInfo;
const DescribePersonRequest = models_1.Models.DescribePersonRequest;
const DescribePersonTraceResponse = models_1.Models.DescribePersonTraceResponse;
const PersonTraceRoute = models_1.Models.PersonTraceRoute;
const PersonTracePoint = models_1.Models.PersonTracePoint;
const ZoneTrafficInfo = models_1.Models.ZoneTrafficInfo;
const DescribeNetworkInfoResponse = models_1.Models.DescribeNetworkInfoResponse;
const NetworkAndShopInfo = models_1.Models.NetworkAndShopInfo;
const DescribeZoneFlowGenderInfoByZoneIdRequest = models_1.Models.DescribeZoneFlowGenderInfoByZoneIdRequest;
const DescribeShopHourTrafficInfoRequest = models_1.Models.DescribeShopHourTrafficInfoRequest;
const RegisterCallbackRequest = models_1.Models.RegisterCallbackRequest;
const DescribeShopInfoRequest = models_1.Models.DescribeShopInfoRequest;
const NetworkHistoryInfo = models_1.Models.NetworkHistoryInfo;
const PersonInfo = models_1.Models.PersonInfo;
const PersonTagInfo = models_1.Models.PersonTagInfo;
const ZoneHourFlow = models_1.Models.ZoneHourFlow;
const ShopHourTrafficInfo = models_1.Models.ShopHourTrafficInfo;
const DescribeClusterPersonTraceRequest = models_1.Models.DescribeClusterPersonTraceRequest;
const PersonCoordinate = models_1.Models.PersonCoordinate;
const ModifyPersonFeatureInfoRequest = models_1.Models.ModifyPersonFeatureInfoRequest;
const ZoneDayFlow = models_1.Models.ZoneDayFlow;
const DescribePersonTraceRequest = models_1.Models.DescribePersonTraceRequest;
const DescribeZoneFlowHourlyByZoneIdResponse = models_1.Models.DescribeZoneFlowHourlyByZoneIdResponse;
const DescribeZoneFlowDailyByZoneIdRequest = models_1.Models.DescribeZoneFlowDailyByZoneIdRequest;
const DescribePersonInfoResponse = models_1.Models.DescribePersonInfoResponse;
const DailyTracePoint = models_1.Models.DailyTracePoint;
const CreateAccountResponse = models_1.Models.CreateAccountResponse;
const DescribeHistoryNetworkInfoResponse = models_1.Models.DescribeHistoryNetworkInfoResponse;
const CreateFacePictureResponse = models_1.Models.CreateFacePictureResponse;
const DescribeShopInfoResponse = models_1.Models.DescribeShopInfoResponse;
const PersonVisitInfo = models_1.Models.PersonVisitInfo;
const CreateFacePictureRequest = models_1.Models.CreateFacePictureRequest;
const DescribeZoneFlowAgeInfoByZoneIdRequest = models_1.Models.DescribeZoneFlowAgeInfoByZoneIdRequest;
const ShopInfo = models_1.Models.ShopInfo;
const ModifyPersonTypeRequest = models_1.Models.ModifyPersonTypeRequest;
const ArrivedMallInfo = models_1.Models.ArrivedMallInfo;
const ZoneAgeGroupAvrStayTime = models_1.Models.ZoneAgeGroupAvrStayTime;
const DescribePersonArrivedMallRequest = models_1.Models.DescribePersonArrivedMallRequest;
const DescribeCameraPersonRequest = models_1.Models.DescribeCameraPersonRequest;
const DescribeShopTrafficInfoResponse = models_1.Models.DescribeShopTrafficInfoResponse;
const DescribeTrajectoryDataResponse = models_1.Models.DescribeTrajectoryDataResponse;
/**
 * youmall client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("youmall.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    /**
     * 通过指定设备ID和指定时段，获取该时段内中收银台摄像设备抓取到顾客头像及身份ID
     * @param {DescribeCameraPersonRequest} req
     * @param {function(string, DescribeCameraPersonResponse):void} cb
     * @public
     */
    DescribeCameraPerson(req, cb) {
        const resp = new DescribeCameraPersonResponse();
        this.request("DescribeCameraPerson", req, resp, cb);
    }
    /**
     * 指定门店获取所有顾客详情列表，包含客户ID、图片、年龄、性别
     * @param {DescribePersonInfoRequest} req
     * @param {function(string, DescribePersonInfoResponse):void} cb
     * @public
     */
    DescribePersonInfo(req, cb) {
        const resp = new DescribePersonInfoResponse();
        this.request("DescribePersonInfo", req, resp, cb);
    }
    /**
     * 按天提供查询日期范围内，客户指定门店下的所有区域（优Mall部署时已配置区域）的累计客流人次和平均停留时间。支持的时间范围：过去365天，含当天。
     * @param {DescribeZoneTrafficInfoRequest} req
     * @param {function(string, DescribeZoneTrafficInfoResponse):void} cb
     * @public
     */
    DescribeZoneTrafficInfo(req, cb) {
        const resp = new DescribeZoneTrafficInfoResponse();
        this.request("DescribeZoneTrafficInfo", req, resp, cb);
    }
    /**
     * 获取指定区域人流各年龄占比
     * @param {DescribeZoneFlowAgeInfoByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowAgeInfoByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowAgeInfoByZoneId(req, cb) {
        const resp = new DescribeZoneFlowAgeInfoByZoneIdResponse();
        this.request("DescribeZoneFlowAgeInfoByZoneId", req, resp, cb);
    }
    /**
     * 调用本接口在优Mall中注册自己集团的到店通知回调接口地址，接口协议为HTTP或HTTPS。注册后，若集团有特殊身份（例如老客）到店通知，优Mall后台将主动将到店信息push给该接口
     * @param {RegisterCallbackRequest} req
     * @param {function(string, RegisterCallbackResponse):void} cb
     * @public
     */
    RegisterCallback(req, cb) {
        const resp = new RegisterCallbackResponse();
        this.request("RegisterCallback", req, resp, cb);
    }
    /**
     * 获取指定区域不同年龄段男女平均停留时间
     * @param {DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowGenderAvrStayTimeByZoneId(req, cb) {
        const resp = new DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse();
        this.request("DescribeZoneFlowGenderAvrStayTimeByZoneId", req, resp, cb);
    }
    /**
     * 获取区域人流和停留时间
     * @param {DescribeZoneFlowAndStayTimeRequest} req
     * @param {function(string, DescribeZoneFlowAndStayTimeResponse):void} cb
     * @public
     */
    DescribeZoneFlowAndStayTime(req, cb) {
        const resp = new DescribeZoneFlowAndStayTimeResponse();
        this.request("DescribeZoneFlowAndStayTime", req, resp, cb);
    }
    /**
     * 获取门店指定时间范围内的所有用户到访信息记录，支持的时间范围：过去365天，含当天。
     * @param {DescribePersonVisitInfoRequest} req
     * @param {function(string, DescribePersonVisitInfoResponse):void} cb
     * @public
     */
    DescribePersonVisitInfo(req, cb) {
        const resp = new DescribePersonVisitInfoResponse();
        this.request("DescribePersonVisitInfo", req, resp, cb);
    }
    /**
     * 获取指定区域分时客流量
     * @param {DescribeZoneFlowHourlyByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowHourlyByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowHourlyByZoneId(req, cb) {
        const resp = new DescribeZoneFlowHourlyByZoneIdResponse();
        this.request("DescribeZoneFlowHourlyByZoneId", req, resp, cb);
    }
    /**
     * 根据客户身份标识获取客户下所有的门店信息列表
     * @param {DescribeShopInfoRequest} req
     * @param {function(string, DescribeShopInfoResponse):void} cb
     * @public
     */
    DescribeShopInfo(req, cb) {
        const resp = new DescribeShopInfoResponse();
        this.request("DescribeShopInfo", req, resp, cb);
    }
    /**
     * 通过DescribeCameraPerson接口上报的收银台身份ID查询顾客的FaceID。查询最佳时间为收银台上报的次日1点后。
     * @param {DescribeFaceIdByTempIdRequest} req
     * @param {function(string, DescribeFaceIdByTempIdResponse):void} cb
     * @public
     */
    DescribeFaceIdByTempId(req, cb) {
        const resp = new DescribeFaceIdByTempIdResponse();
        this.request("DescribeFaceIdByTempId", req, resp, cb);
    }
    /**
     * 获取指定区域性别占比
     * @param {DescribeZoneFlowGenderInfoByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowGenderInfoByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowGenderInfoByZoneId(req, cb) {
        const resp = new DescribeZoneFlowGenderInfoByZoneIdResponse();
        this.request("DescribeZoneFlowGenderInfoByZoneId", req, resp, cb);
    }
    /**
     * 按天提供查询日期范围内门店的单日累计客流人数，支持的时间范围：过去365天，含当天。
     * @param {DescribeShopTrafficInfoRequest} req
     * @param {function(string, DescribeShopTrafficInfoResponse):void} cb
     * @public
     */
    DescribeShopTrafficInfo(req, cb) {
        const resp = new DescribeShopTrafficInfoResponse();
        this.request("DescribeShopTrafficInfo", req, resp, cb);
    }
    /**
     * 通过上传人脸图片检索系统face id、顾客身份信息及底图
     * @param {DescribePersonInfoByFacePictureRequest} req
     * @param {function(string, DescribePersonInfoByFacePictureResponse):void} cb
     * @public
     */
    DescribePersonInfoByFacePicture(req, cb) {
        const resp = new DescribePersonInfoByFacePictureResponse();
        this.request("DescribePersonInfoByFacePicture", req, resp, cb);
    }
    /**
     * 通过上传指定规格的人脸图片，创建黑名单用户或者白名单用户。
     * @param {CreateFacePictureRequest} req
     * @param {function(string, CreateFacePictureResponse):void} cb
     * @public
     */
    CreateFacePicture(req, cb) {
        const resp = new CreateFacePictureResponse();
        this.request("CreateFacePicture", req, resp, cb);
    }
    /**
     * 创建集团门店管理员账号
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        const resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }
    /**
     * 按小时提供查询日期范围内门店的每天每小时累计客流人数数据，支持的时间范围：过去365天，含当天。
     * @param {DescribeShopHourTrafficInfoRequest} req
     * @param {function(string, DescribeShopHourTrafficInfoResponse):void} cb
     * @public
     */
    DescribeShopHourTrafficInfo(req, cb) {
        const resp = new DescribeShopHourTrafficInfoResponse();
        this.request("DescribeShopHourTrafficInfo", req, resp, cb);
    }
    /**
     * 输出开始时间到结束时间段内的进出场数据。
     * @param {DescribePersonTraceRequest} req
     * @param {function(string, DescribePersonTraceResponse):void} cb
     * @public
     */
    DescribePersonTrace(req, cb) {
        const resp = new DescribePersonTraceResponse();
        this.request("DescribePersonTrace", req, resp, cb);
    }
    /**
     * 获取指定区域每日客流量
     * @param {DescribeZoneFlowDailyByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowDailyByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowDailyByZoneId(req, cb) {
        const resp = new DescribeZoneFlowDailyByZoneIdResponse();
        this.request("DescribeZoneFlowDailyByZoneId", req, resp, cb);
    }
    /**
     * 输出开始时间到结束时间段内的进出场数据。不做按天聚合的情况下，每次进出场，产生一条进出场数据。


     * @param {DescribePersonArrivedMallRequest} req
     * @param {function(string, DescribePersonArrivedMallResponse):void} cb
     * @public
     */
    DescribePersonArrivedMall(req, cb) {
        const resp = new DescribePersonArrivedMallResponse();
        this.request("DescribePersonArrivedMall", req, resp, cb);
    }
    /**
     * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。停留时间为多次进出场的停留时间之和。
     * @param {DescribeClusterPersonArrivedMallRequest} req
     * @param {function(string, DescribeClusterPersonArrivedMallResponse):void} cb
     * @public
     */
    DescribeClusterPersonArrivedMall(req, cb) {
        const resp = new DescribeClusterPersonArrivedMallResponse();
        this.request("DescribeClusterPersonArrivedMall", req, resp, cb);
    }
    /**
     * 查询客户单次到场轨迹明细
     * @param {DescribePersonTraceDetailRequest} req
     * @param {function(string, DescribePersonTraceDetailResponse):void} cb
     * @public
     */
    DescribePersonTraceDetail(req, cb) {
        const resp = new DescribePersonTraceDetailResponse();
        this.request("DescribePersonTraceDetail", req, resp, cb);
    }
    /**
     * 修改顾客身份类型接口
     * @param {ModifyPersonTypeRequest} req
     * @param {function(string, ModifyPersonTypeResponse):void} cb
     * @public
     */
    ModifyPersonType(req, cb) {
        const resp = new ModifyPersonTypeResponse();
        this.request("ModifyPersonType", req, resp, cb);
    }
    /**
     * 支持修改黑白名单类型的顾客特征
     * @param {ModifyPersonFeatureInfoRequest} req
     * @param {function(string, ModifyPersonFeatureInfoResponse):void} cb
     * @public
     */
    ModifyPersonFeatureInfo(req, cb) {
        const resp = new ModifyPersonFeatureInfoResponse();
        this.request("ModifyPersonFeatureInfo", req, resp, cb);
    }
    /**
     * 返回当前门店历史网络状态数据
     * @param {DescribeHistoryNetworkInfoRequest} req
     * @param {function(string, DescribeHistoryNetworkInfoResponse):void} cb
     * @public
     */
    DescribeHistoryNetworkInfo(req, cb) {
        const resp = new DescribeHistoryNetworkInfoResponse();
        this.request("DescribeHistoryNetworkInfo", req, resp, cb);
    }
    /**
     * 返回当前门店最新网络状态数据
     * @param {DescribeNetworkInfoRequest} req
     * @param {function(string, DescribeNetworkInfoResponse):void} cb
     * @public
     */
    DescribeNetworkInfo(req, cb) {
        const resp = new DescribeNetworkInfoResponse();
        this.request("DescribeNetworkInfo", req, resp, cb);
    }
    /**
     * 删除顾客特征，仅支持删除黑名单或者白名单用户特征。
     * @param {DeletePersonFeatureRequest} req
     * @param {function(string, DeletePersonFeatureResponse):void} cb
     * @public
     */
    DeletePersonFeature(req, cb) {
        const resp = new DeletePersonFeatureResponse();
        this.request("DeletePersonFeature", req, resp, cb);
    }
    /**
     * 标记到店顾客的身份类型，例如黑名单、白名单等

     * @param {ModifyPersonTagInfoRequest} req
     * @param {function(string, ModifyPersonTagInfoResponse):void} cb
     * @public
     */
    ModifyPersonTagInfo(req, cb) {
        const resp = new ModifyPersonTagInfoResponse();
        this.request("ModifyPersonTagInfo", req, resp, cb);
    }
    /**
     * 查询指定某一卖场的用户信息
     * @param {DescribePersonRequest} req
     * @param {function(string, DescribePersonResponse):void} cb
     * @public
     */
    DescribePerson(req, cb) {
        const resp = new DescribePersonResponse();
        this.request("DescribePerson", req, resp, cb);
    }
    /**
     * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。
     * @param {DescribeClusterPersonTraceRequest} req
     * @param {function(string, DescribeClusterPersonTraceResponse):void} cb
     * @public
     */
    DescribeClusterPersonTrace(req, cb) {
        const resp = new DescribeClusterPersonTraceResponse();
        this.request("DescribeClusterPersonTrace", req, resp, cb);
    }
    /**
     * 获取动线轨迹信息
     * @param {DescribeTrajectoryDataRequest} req
     * @param {function(string, DescribeTrajectoryDataResponse):void} cb
     * @public
     */
    DescribeTrajectoryData(req, cb) {
        const resp = new DescribeTrajectoryDataResponse();
        this.request("DescribeTrajectoryData", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=youmall_client.js.map