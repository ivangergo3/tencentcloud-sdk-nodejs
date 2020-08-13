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
const UploadOtaVersionResponse = models_1.Models.UploadOtaVersionResponse;
const CreateGencodeResponse = models_1.Models.CreateGencodeResponse;
const DescribeLogsRequest = models_1.Models.DescribeLogsRequest;
const CreateIotDataTypeRequest = models_1.Models.CreateIotDataTypeRequest;
const DescribePubVersionsRequest = models_1.Models.DescribePubVersionsRequest;
const DescribeIotModelResponse = models_1.Models.DescribeIotModelResponse;
const DisableDeviceResponse = models_1.Models.DisableDeviceResponse;
const DescribeRunLogRequest = models_1.Models.DescribeRunLogRequest;
const DescribeProductsRequest = models_1.Models.DescribeProductsRequest;
const DeleteTraceIdsRequest = models_1.Models.DeleteTraceIdsRequest;
const IotModelData = models_1.Models.IotModelData;
const DescribeDevicesResponse = models_1.Models.DescribeDevicesResponse;
const ModifyProductResponse = models_1.Models.ModifyProductResponse;
const ModifyProductRequest = models_1.Models.ModifyProductRequest;
const DisableDeviceStreamRequest = models_1.Models.DisableDeviceStreamRequest;
const CreateIotModelRequest = models_1.Models.CreateIotModelRequest;
const DescribeTraceStatusResponse = models_1.Models.DescribeTraceStatusResponse;
const CreateUploadPathRequest = models_1.Models.CreateUploadPathRequest;
const CreateDevTokenRequest = models_1.Models.CreateDevTokenRequest;
const DeleteIotDataTypeRequest = models_1.Models.DeleteIotDataTypeRequest;
const DescribeMessageQueueRequest = models_1.Models.DescribeMessageQueueRequest;
const DeleteAppUsrResponse = models_1.Models.DeleteAppUsrResponse;
const DescribeRegistrationStatusResponse = models_1.Models.DescribeRegistrationStatusResponse;
const DescribeProductRequest = models_1.Models.DescribeProductRequest;
const DescribeProductsResponse = models_1.Models.DescribeProductsResponse;
const CreateAppUsrRequest = models_1.Models.CreateAppUsrRequest;
const DeviceCertificate = models_1.Models.DeviceCertificate;
const UpgradeDeviceRequest = models_1.Models.UpgradeDeviceRequest;
const LogData = models_1.Models.LogData;
const DescribeModelDataRetResponse = models_1.Models.DescribeModelDataRetResponse;
const RunIotModelResponse = models_1.Models.RunIotModelResponse;
const RunIotModelRequest = models_1.Models.RunIotModelRequest;
const OtaPubHistory = models_1.Models.OtaPubHistory;
const DeleteProductRequest = models_1.Models.DeleteProductRequest;
const DescribeBindUsrResponse = models_1.Models.DescribeBindUsrResponse;
const DeviceData = models_1.Models.DeviceData;
const SetMessageQueueRequest = models_1.Models.SetMessageQueueRequest;
const BindUsrInfo = models_1.Models.BindUsrInfo;
const DeleteOtaVersionRequest = models_1.Models.DeleteOtaVersionRequest;
const DescribeIotDataTypeResponse = models_1.Models.DescribeIotDataTypeResponse;
const ProductData = models_1.Models.ProductData;
const CreateBindingRequest = models_1.Models.CreateBindingRequest;
const DeleteDeviceRequest = models_1.Models.DeleteDeviceRequest;
const TraceStatus = models_1.Models.TraceStatus;
const CreateDevTokenResponse = models_1.Models.CreateDevTokenResponse;
const ModifyDevicePropertyRequest = models_1.Models.ModifyDevicePropertyRequest;
const RunDeviceStreamRequest = models_1.Models.RunDeviceStreamRequest;
const RunDeviceResponse = models_1.Models.RunDeviceResponse;
const DeleteIotDataTypeResponse = models_1.Models.DeleteIotDataTypeResponse;
const DescribeTraceStatusRequest = models_1.Models.DescribeTraceStatusRequest;
const CreateUsrTokenResponse = models_1.Models.CreateUsrTokenResponse;
const DevTokenInfo = models_1.Models.DevTokenInfo;
const CreateTraceIdsRequest = models_1.Models.CreateTraceIdsRequest;
const DeleteMessageQueueResponse = models_1.Models.DeleteMessageQueueResponse;
const DescribeOtaVersionsRequest = models_1.Models.DescribeOtaVersionsRequest;
const DescribeTraceIdsResponse = models_1.Models.DescribeTraceIdsResponse;
const CreateProductResponse = models_1.Models.CreateProductResponse;
const DescribeRegistrationStatusRequest = models_1.Models.DescribeRegistrationStatusRequest;
const CreateStorageRequest = models_1.Models.CreateStorageRequest;
const UpgradeDeviceResponse = models_1.Models.UpgradeDeviceResponse;
const DisableOtaVersionResponse = models_1.Models.DisableOtaVersionResponse;
const DescribeBindDevResponse = models_1.Models.DescribeBindDevResponse;
const CreateProductRequest = models_1.Models.CreateProductRequest;
const RunTestOtaVersionResponse = models_1.Models.RunTestOtaVersionResponse;
const RunTestOtaVersionRequest = models_1.Models.RunTestOtaVersionRequest;
const DescribeDeviceResponse = models_1.Models.DescribeDeviceResponse;
const SetMessageQueueResponse = models_1.Models.SetMessageQueueResponse;
const DeleteOtaVersionResponse = models_1.Models.DeleteOtaVersionResponse;
const UploadOtaVersionRequest = models_1.Models.UploadOtaVersionRequest;
const DescribeIotModelsRequest = models_1.Models.DescribeIotModelsRequest;
const DescribeModelDataRetRequest = models_1.Models.DescribeModelDataRetRequest;
const CreateTraceIdsResponse = models_1.Models.CreateTraceIdsResponse;
const DeleteBindingRequest = models_1.Models.DeleteBindingRequest;
const DescribeOtaVersionsResponse = models_1.Models.DescribeOtaVersionsResponse;
const DeleteProductResponse = models_1.Models.DeleteProductResponse;
const RunOtaVersionRequest = models_1.Models.RunOtaVersionRequest;
const CreateDevicesResponse = models_1.Models.CreateDevicesResponse;
const DeviceModelData = models_1.Models.DeviceModelData;
const DescribeIotDataTypeRequest = models_1.Models.DescribeIotDataTypeRequest;
const SendOnlineMsgRequest = models_1.Models.SendOnlineMsgRequest;
const DescribeDeviceRequest = models_1.Models.DescribeDeviceRequest;
const DescribeRunLogResponse = models_1.Models.DescribeRunLogResponse;
const DescribeIotModelRequest = models_1.Models.DescribeIotModelRequest;
const DescribeTraceIdsRequest = models_1.Models.DescribeTraceIdsRequest;
const CreateAppUsrResponse = models_1.Models.CreateAppUsrResponse;
const DeleteTraceIdsResponse = models_1.Models.DeleteTraceIdsResponse;
const DeleteMessageQueueRequest = models_1.Models.DeleteMessageQueueRequest;
const CreateUsrTokenRequest = models_1.Models.CreateUsrTokenRequest;
const RunDeviceRequest = models_1.Models.RunDeviceRequest;
const DescribeDeviceModelResponse = models_1.Models.DescribeDeviceModelResponse;
const ProductBase = models_1.Models.ProductBase;
const CreateGencodeRequest = models_1.Models.CreateGencodeRequest;
const DescribePubVersionsResponse = models_1.Models.DescribePubVersionsResponse;
const ModifyDeviceActionRequest = models_1.Models.ModifyDeviceActionRequest;
const CreateIotModelResponse = models_1.Models.CreateIotModelResponse;
const BindDevInfo = models_1.Models.BindDevInfo;
const DescribeBindDevRequest = models_1.Models.DescribeBindDevRequest;
const MsgQueueData = models_1.Models.MsgQueueData;
const RegisteredStatus = models_1.Models.RegisteredStatus;
const RunDeviceStreamResponse = models_1.Models.RunDeviceStreamResponse;
const RunOtaVersionResponse = models_1.Models.RunOtaVersionResponse;
const DescribeDeviceModelRequest = models_1.Models.DescribeDeviceModelRequest;
const DescribeLogsResponse = models_1.Models.DescribeLogsResponse;
const ModifyDeviceActionResponse = models_1.Models.ModifyDeviceActionResponse;
const CreateBindingResponse = models_1.Models.CreateBindingResponse;
const DevicesData = models_1.Models.DevicesData;
const CreateDevicesRequest = models_1.Models.CreateDevicesRequest;
const DisableDeviceRequest = models_1.Models.DisableDeviceRequest;
const DisableOtaVersionRequest = models_1.Models.DisableOtaVersionRequest;
const DescribeProductResponse = models_1.Models.DescribeProductResponse;
const DescribeBindUsrRequest = models_1.Models.DescribeBindUsrRequest;
const SendOnlineMsgResponse = models_1.Models.SendOnlineMsgResponse;
const DeleteAppUsrRequest = models_1.Models.DeleteAppUsrRequest;
const DescribeIotModelsResponse = models_1.Models.DescribeIotModelsResponse;
const DescribeMessageQueueResponse = models_1.Models.DescribeMessageQueueResponse;
const DescribeDevicesRequest = models_1.Models.DescribeDevicesRequest;
const CreateIotDataTypeResponse = models_1.Models.CreateIotDataTypeResponse;
const ModifyDevicePropertyResponse = models_1.Models.ModifyDevicePropertyResponse;
const DeleteBindingResponse = models_1.Models.DeleteBindingResponse;
const CreateStorageResponse = models_1.Models.CreateStorageResponse;
const DisableDeviceStreamResponse = models_1.Models.DisableDeviceStreamResponse;
const DeleteDeviceResponse = models_1.Models.DeleteDeviceResponse;
const CreateUploadPathResponse = models_1.Models.CreateUploadPathResponse;
const VersionData = models_1.Models.VersionData;
/**
 * iotvideo client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("iotvideo.tencentcloudapi.com", "2019-11-26", credential, region, profile);
    }
    /**
     * 本接口（DescribeOtaVersions）用于查询固件版本信息列表。
     * @param {DescribeOtaVersionsRequest} req
     * @param {function(string, DescribeOtaVersionsResponse):void} cb
     * @public
     */
    DescribeOtaVersions(req, cb) {
        const resp = new DescribeOtaVersionsResponse();
        this.request("DescribeOtaVersions", req, resp, cb);
    }
    /**
     * 本接口（DisableOtaVersion）用于禁用固件版本。
     * @param {DisableOtaVersionRequest} req
     * @param {function(string, DisableOtaVersionResponse):void} cb
     * @public
     */
    DisableOtaVersion(req, cb) {
        const resp = new DisableOtaVersionResponse();
        this.request("DisableOtaVersion", req, resp, cb);
    }
    /**
     * 本接口（CreateGencode）用于生成设备物模型源代码
     * @param {CreateGencodeRequest} req
     * @param {function(string, CreateGencodeResponse):void} cb
     * @public
     */
    CreateGencode(req, cb) {
        const resp = new CreateGencodeResponse();
        this.request("CreateGencode", req, resp, cb);
    }
    /**
     * 本接口（DescribeIotDataType）用于查询自定义的物模型数据类型。
     * @param {DescribeIotDataTypeRequest} req
     * @param {function(string, DescribeIotDataTypeResponse):void} cb
     * @public
     */
    DescribeIotDataType(req, cb) {
        const resp = new DescribeIotDataTypeResponse();
        this.request("DescribeIotDataType", req, resp, cb);
    }
    /**
     * 本接口（DisableDevice）用于禁用设备，可进行批量操作，每次操作最多100台设备。
     * @param {DisableDeviceRequest} req
     * @param {function(string, DisableDeviceResponse):void} cb
     * @public
     */
    DisableDevice(req, cb) {
        const resp = new DisableDeviceResponse();
        this.request("DisableDevice", req, resp, cb);
    }
    /**
     * 本接口（DeleteTraceIds）用于将设备从日志跟踪白名单中删除，该接口可批量操作，最多支持同时操作100台设备。
     * @param {DeleteTraceIdsRequest} req
     * @param {function(string, DeleteTraceIdsResponse):void} cb
     * @public
     */
    DeleteTraceIds(req, cb) {
        const resp = new DeleteTraceIdsResponse();
        this.request("DeleteTraceIds", req, resp, cb);
    }
    /**
     * 本接口（RunOtaVersion）用于固件版本正式发布。
     * @param {RunOtaVersionRequest} req
     * @param {function(string, RunOtaVersionResponse):void} cb
     * @public
     */
    RunOtaVersion(req, cb) {
        const resp = new RunOtaVersionResponse();
        this.request("RunOtaVersion", req, resp, cb);
    }
    /**
     * 本接口（DescribeDevice）获取设备信息。
     * @param {DescribeDeviceRequest} req
     * @param {function(string, DescribeDeviceResponse):void} cb
     * @public
     */
    DescribeDevice(req, cb) {
        const resp = new DescribeDeviceResponse();
        this.request("DescribeDevice", req, resp, cb);
    }
    /**
     * 本接口（RunTestOtaVersion）用于固件版本测试发布。
     * @param {RunTestOtaVersionRequest} req
     * @param {function(string, RunTestOtaVersionResponse):void} cb
     * @public
     */
    RunTestOtaVersion(req, cb) {
        const resp = new RunTestOtaVersionResponse();
        this.request("RunTestOtaVersion", req, resp, cb);
    }
    /**
     * 本接口（DescribeProduct）用于获取单个产品的详细信息。
     * @param {DescribeProductRequest} req
     * @param {function(string, DescribeProductResponse):void} cb
     * @public
     */
    DescribeProduct(req, cb) {
        const resp = new DescribeProductResponse();
        this.request("DescribeProduct", req, resp, cb);
    }
    /**
     * 本接口（SendOnlineMsg）用于向设备发送在线消息。
注意：
若设备当前不在线,会直接返回错误;
若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒.waitresp非0情况下,会导致本接口阻塞3秒。
     * @param {SendOnlineMsgRequest} req
     * @param {function(string, SendOnlineMsgResponse):void} cb
     * @public
     */
    SendOnlineMsg(req, cb) {
        const resp = new SendOnlineMsgResponse();
        this.request("SendOnlineMsg", req, resp, cb);
    }
    /**
     * 本接口（RunIotModel）用于对定义的物模型进行发布。
     * @param {RunIotModelRequest} req
     * @param {function(string, RunIotModelResponse):void} cb
     * @public
     */
    RunIotModel(req, cb) {
        const resp = new RunIotModelResponse();
        this.request("RunIotModel", req, resp, cb);
    }
    /**
     * 本接口（ModifyDeviceAction）用于修改设备物模型的行为（Action）。

可对ctlVal数据属性进行写入,如:Action.takePhoto.ctlVal,设备在线且成功发送到设备才返回,物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
注意:
  1.若设备当前不在线,会直接返回错误
  2.若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒
  3.value的内容必须与实际物模型的定义一致
     * @param {ModifyDeviceActionRequest} req
     * @param {function(string, ModifyDeviceActionResponse):void} cb
     * @public
     */
    ModifyDeviceAction(req, cb) {
        const resp = new ModifyDeviceActionResponse();
        this.request("ModifyDeviceAction", req, resp, cb);
    }
    /**
     * 本接口（CreateIotDataType）用于创建自定义物模型数据类型。
     * @param {CreateIotDataTypeRequest} req
     * @param {function(string, CreateIotDataTypeResponse):void} cb
     * @public
     */
    CreateIotDataType(req, cb) {
        const resp = new CreateIotDataTypeResponse();
        this.request("CreateIotDataType", req, resp, cb);
    }
    /**
     * 本接口（CreateDevices）用于批量创建新的物联网视频通信设备。
注意：腾讯云不会对设备私钥进行保存，请自行保管好您的设备私钥。
     * @param {CreateDevicesRequest} req
     * @param {function(string, CreateDevicesResponse):void} cb
     * @public
     */
    CreateDevices(req, cb) {
        const resp = new CreateDevicesResponse();
        this.request("CreateDevices", req, resp, cb);
    }
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网智能视频产品。
     * @param {CreateProductRequest} req
     * @param {function(string, CreateProductResponse):void} cb
     * @public
     */
    CreateProduct(req, cb) {
        const resp = new CreateProductResponse();
        this.request("CreateProduct", req, resp, cb);
    }
    /**
     * 本接口（CreateIotModel）用于定义的物模型提交。
该接口实现了物模型草稿箱的功能，保存用户最后一次编辑的物模型数据。
     * @param {CreateIotModelRequest} req
     * @param {function(string, CreateIotModelResponse):void} cb
     * @public
     */
    CreateIotModel(req, cb) {
        const resp = new CreateIotModelResponse();
        this.request("CreateIotModel", req, resp, cb);
    }
    /**
     * 本接口（DeleteIotDataType）用于删除自定义物模型数据类型。
     * @param {DeleteIotDataTypeRequest} req
     * @param {function(string, DeleteIotDataTypeResponse):void} cb
     * @public
     */
    DeleteIotDataType(req, cb) {
        const resp = new DeleteIotDataTypeResponse();
        this.request("DeleteIotDataType", req, resp, cb);
    }
    /**
     * 本接口（DescribeMessageQueue）用于查询物联网智能视频产品转发消息配置。
     * @param {DescribeMessageQueueRequest} req
     * @param {function(string, DescribeMessageQueueResponse):void} cb
     * @public
     */
    DescribeMessageQueue(req, cb) {
        const resp = new DescribeMessageQueueResponse();
        this.request("DescribeMessageQueue", req, resp, cb);
    }
    /**
     * 本接口（DescribeIotModel）用于获取物模型定义详情。
     * @param {DescribeIotModelRequest} req
     * @param {function(string, DescribeIotModelResponse):void} cb
     * @public
     */
    DescribeIotModel(req, cb) {
        const resp = new DescribeIotModelResponse();
        this.request("DescribeIotModel", req, resp, cb);
    }
    /**
     * 本接口（DescribeProducts）用于列出用户账号下的物联网智能视频产品列表。
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        const resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }
    /**
     * 本接口（CreateTraceIds）用于将设备加到日志跟踪白名单。
     * @param {CreateTraceIdsRequest} req
     * @param {function(string, CreateTraceIdsResponse):void} cb
     * @public
     */
    CreateTraceIds(req, cb) {
        const resp = new CreateTraceIdsResponse();
        this.request("CreateTraceIds", req, resp, cb);
    }
    /**
     * 本接口（DescribeBindUsr）用于查询设备被分享的所有用户列表。
     * @param {DescribeBindUsrRequest} req
     * @param {function(string, DescribeBindUsrResponse):void} cb
     * @public
     */
    DescribeBindUsr(req, cb) {
        const resp = new DescribeBindUsrResponse();
        this.request("DescribeBindUsr", req, resp, cb);
    }
    /**
     * 本接口（CreateAppUsr）用于接收由厂商云发送过来的注册请求,建立厂商云终端用户与IoT Video终端用户的映射关系。
     * @param {CreateAppUsrRequest} req
     * @param {function(string, CreateAppUsrResponse):void} cb
     * @public
     */
    CreateAppUsr(req, cb) {
        const resp = new CreateAppUsrResponse();
        this.request("CreateAppUsr", req, resp, cb);
    }
    /**
     * 本接口（CreateBinding）用于终端用户和设备进行绑定，具体的应用场景如下：
    终端用户与设备具有“强关联”关系。用户与设备绑定之后，用户终端即具备了该设备的访问权限,访问或操作设备时，无需获取设备访问Token。
     * @param {CreateBindingRequest} req
     * @param {function(string, CreateBindingResponse):void} cb
     * @public
     */
    CreateBinding(req, cb) {
        const resp = new CreateBindingResponse();
        this.request("CreateBinding", req, resp, cb);
    }
    /**
     * 本接口（CreateDevToken）用于以下场景：
终端用户与设备没有强绑定关联关系;
允许终端用户短时或一次性临时访问设备;
当终端用户与设备有强绑定关系时，可以不用调用此接口
     * @param {CreateDevTokenRequest} req
     * @param {function(string, CreateDevTokenResponse):void} cb
     * @public
     */
    CreateDevToken(req, cb) {
        const resp = new CreateDevTokenResponse();
        this.request("CreateDevToken", req, resp, cb);
    }
    /**
     * 本接口（DeleteOtaVersion）用于删除固件版本信息。
     * @param {DeleteOtaVersionRequest} req
     * @param {function(string, DeleteOtaVersionResponse):void} cb
     * @public
     */
    DeleteOtaVersion(req, cb) {
        const resp = new DeleteOtaVersionResponse();
        this.request("DeleteOtaVersion", req, resp, cb);
    }
    /**
     * 本接口（DeleteAppUsr）用于删除终端用户。
     * @param {DeleteAppUsrRequest} req
     * @param {function(string, DeleteAppUsrResponse):void} cb
     * @public
     */
    DeleteAppUsr(req, cb) {
        const resp = new DeleteAppUsrResponse();
        this.request("DeleteAppUsr", req, resp, cb);
    }
    /**
     * 本接口（ModifyProduct）用于编辑物联网智能视频产品的相关信息。
     * @param {ModifyProductRequest} req
     * @param {function(string, ModifyProductResponse):void} cb
     * @public
     */
    ModifyProduct(req, cb) {
        const resp = new ModifyProductResponse();
        this.request("ModifyProduct", req, resp, cb);
    }
    /**
     * 本接口（DescribeLogs）用于查询设备日志列表。
设备日志最长保留时长为15天,超期自动清除。
     * @param {DescribeLogsRequest} req
     * @param {function(string, DescribeLogsResponse):void} cb
     * @public
     */
    DescribeLogs(req, cb) {
        const resp = new DescribeLogsResponse();
        this.request("DescribeLogs", req, resp, cb);
    }
    /**
     * 本接口（DeleteDevice）用于删除设备，可进行批量操作，每次操作最多100台设备。
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        const resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }
    /**
     * 本接口（DescribeIotModels）用于列出物模型历史版本列表。
     * @param {DescribeIotModelsRequest} req
     * @param {function(string, DescribeIotModelsResponse):void} cb
     * @public
     */
    DescribeIotModels(req, cb) {
        const resp = new DescribeIotModelsResponse();
        this.request("DescribeIotModels", req, resp, cb);
    }
    /**
     * 本接口（DeleteProduct）用于删除一个物联网智能视频产品。
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        const resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }
    /**
     * 本接口（DescribeTraceStatus）用于查询指定设备是否在白名单中。
     * @param {DescribeTraceStatusRequest} req
     * @param {function(string, DescribeTraceStatusResponse):void} cb
     * @public
     */
    DescribeTraceStatus(req, cb) {
        const resp = new DescribeTraceStatusResponse();
        this.request("DescribeTraceStatus", req, resp, cb);
    }
    /**
     * 本接口（DescribeRegistrationStatus）用于查询终端用户的注册状态。
     * @param {DescribeRegistrationStatusRequest} req
     * @param {function(string, DescribeRegistrationStatusResponse):void} cb
     * @public
     */
    DescribeRegistrationStatus(req, cb) {
        const resp = new DescribeRegistrationStatusResponse();
        this.request("DescribeRegistrationStatus", req, resp, cb);
    }
    /**
     * 本接口（DescribeRunLog）用于获取设备运行日志。
     * @param {DescribeRunLogRequest} req
     * @param {function(string, DescribeRunLogResponse):void} cb
     * @public
     */
    DescribeRunLog(req, cb) {
        const resp = new DescribeRunLogResponse();
        this.request("DescribeRunLog", req, resp, cb);
    }
    /**
     * 本接口（SetMessageQueue）用于配置物联网智能视频产品的转发消息队列。
     * @param {SetMessageQueueRequest} req
     * @param {function(string, SetMessageQueueResponse):void} cb
     * @public
     */
    SetMessageQueue(req, cb) {
        const resp = new SetMessageQueueResponse();
        this.request("SetMessageQueue", req, resp, cb);
    }
    /**
     * 本接口（DisableDeviceStream）用于停止设备推流，可进行批量操作，每次操作最多100台设备。
     * @param {DisableDeviceStreamRequest} req
     * @param {function(string, DisableDeviceStreamResponse):void} cb
     * @public
     */
    DisableDeviceStream(req, cb) {
        const resp = new DisableDeviceStreamResponse();
        this.request("DisableDeviceStream", req, resp, cb);
    }
    /**
     * 本接口（CreateUploadPath）用于获取固件上传路径。
     * @param {CreateUploadPathRequest} req
     * @param {function(string, CreateUploadPathResponse):void} cb
     * @public
     */
    CreateUploadPath(req, cb) {
        const resp = new CreateUploadPathResponse();
        this.request("CreateUploadPath", req, resp, cb);
    }
    /**
     * 本接口（DescribeModelDataRet）用于根据TaskId获取对设备物模型操作最终响应的结果。
     * @param {DescribeModelDataRetRequest} req
     * @param {function(string, DescribeModelDataRetResponse):void} cb
     * @public
     */
    DescribeModelDataRet(req, cb) {
        const resp = new DescribeModelDataRetResponse();
        this.request("DescribeModelDataRet", req, resp, cb);
    }
    /**
     * 本接口（DescribePubVersions）用于获取某一产品发布过的全部固件版本。
     * @param {DescribePubVersionsRequest} req
     * @param {function(string, DescribePubVersionsResponse):void} cb
     * @public
     */
    DescribePubVersions(req, cb) {
        const resp = new DescribePubVersionsResponse();
        this.request("DescribePubVersions", req, resp, cb);
    }
    /**
     * 本接口（RunDeviceStream）用于开启设备推流，可进行批量操作，每次操作最多100台设备。
     * @param {RunDeviceStreamRequest} req
     * @param {function(string, RunDeviceStreamResponse):void} cb
     * @public
     */
    RunDeviceStream(req, cb) {
        const resp = new RunDeviceStreamResponse();
        this.request("RunDeviceStream", req, resp, cb);
    }
    /**
     * 本接口（DescribeDevices）用于获取设备信息列表。
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        const resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }
    /**
     * 本接口（DescribeBindDev）用于查询终端用户绑定的设备列表。
     * @param {DescribeBindDevRequest} req
     * @param {function(string, DescribeBindDevResponse):void} cb
     * @public
     */
    DescribeBindDev(req, cb) {
        const resp = new DescribeBindDevResponse();
        this.request("DescribeBindDev", req, resp, cb);
    }
    /**
     * 本接口（DescribeDeviceModel）用于获取设备物模型。
     * @param {DescribeDeviceModelRequest} req
     * @param {function(string, DescribeDeviceModelResponse):void} cb
     * @public
     */
    DescribeDeviceModel(req, cb) {
        const resp = new DescribeDeviceModelResponse();
        this.request("DescribeDeviceModel", req, resp, cb);
    }
    /**
     * 本接口（DeleteBinding）用于终端用户和设备进行解绑定。
     * @param {DeleteBindingRequest} req
     * @param {function(string, DeleteBindingResponse):void} cb
     * @public
     */
    DeleteBinding(req, cb) {
        const resp = new DeleteBindingResponse();
        this.request("DeleteBinding", req, resp, cb);
    }
    /**
     * 本接口（CreateStorage）用于购买云存套餐。
     * @param {CreateStorageRequest} req
     * @param {function(string, CreateStorageResponse):void} cb
     * @public
     */
    CreateStorage(req, cb) {
        const resp = new CreateStorageResponse();
        this.request("CreateStorage", req, resp, cb);
    }
    /**
     * 本接口（DescribeTraceIds）用于查询设备日志跟踪白名单。
     * @param {DescribeTraceIdsRequest} req
     * @param {function(string, DescribeTraceIdsResponse):void} cb
     * @public
     */
    DescribeTraceIds(req, cb) {
        const resp = new DescribeTraceIdsResponse();
        this.request("DescribeTraceIds", req, resp, cb);
    }
    /**
     * 本接口（DeleteMessageQueue）用于删除物联网智能视频产品的转发消息配置信息。
     * @param {DeleteMessageQueueRequest} req
     * @param {function(string, DeleteMessageQueueResponse):void} cb
     * @public
     */
    DeleteMessageQueue(req, cb) {
        const resp = new DeleteMessageQueueResponse();
        this.request("DeleteMessageQueue", req, resp, cb);
    }
    /**
     * 本接口（ModifyDeviceProperty）用于修改设备物模型的属性（ProWritable）。
可对setVal数据属性进行写入,如:
ProWritable.Pos.setVal
对于嵌套类型的可写属性，可以仅对其部分数据内容进行写入，如:
ProWritable.Pos.setVal.x;
可写属性云端写入成功即返回;云端向设备端发布属性变更参数;若当前设备不在线,在设备下次上线时会自动更新这些属性参数;
物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
     * @param {ModifyDevicePropertyRequest} req
     * @param {function(string, ModifyDevicePropertyResponse):void} cb
     * @public
     */
    ModifyDeviceProperty(req, cb) {
        const resp = new ModifyDevicePropertyResponse();
        this.request("ModifyDeviceProperty", req, resp, cb);
    }
    /**
     * 本接口（RunDevice）用于启用设备，可进行批量操作，每次操作最多100台设备。
     * @param {RunDeviceRequest} req
     * @param {function(string, RunDeviceResponse):void} cb
     * @public
     */
    RunDevice(req, cb) {
        const resp = new RunDeviceResponse();
        this.request("RunDevice", req, resp, cb);
    }
    /**
     * 本接口（UploadOtaVersion）接收上传到控制台的固件版本信息。
     * @param {UploadOtaVersionRequest} req
     * @param {function(string, UploadOtaVersionResponse):void} cb
     * @public
     */
    UploadOtaVersion(req, cb) {
        const resp = new UploadOtaVersionResponse();
        this.request("UploadOtaVersion", req, resp, cb);
    }
    /**
     * 本接口（UpgradeDevice）用于对设备进行固件升级。
该接口向指定的设备下发固件更新指令,可将固件升级到任意版本(可实现固件降级)。
警告:使能UpgradeNow参数存在一定的风险性！建议仅在debug场景下使用!
     * @param {UpgradeDeviceRequest} req
     * @param {function(string, UpgradeDeviceResponse):void} cb
     * @public
     */
    UpgradeDevice(req, cb) {
        const resp = new UpgradeDeviceResponse();
        this.request("UpgradeDevice", req, resp, cb);
    }
    /**
     * 本接口（CreateUsrToken）用于终端用户获取IoT Video平台的accessToken，初始化SDK,连接到IoT Video接入服务器。
     * @param {CreateUsrTokenRequest} req
     * @param {function(string, CreateUsrTokenResponse):void} cb
     * @public
     */
    CreateUsrToken(req, cb) {
        const resp = new CreateUsrTokenResponse();
        this.request("CreateUsrToken", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=iotvideo_client.js.map