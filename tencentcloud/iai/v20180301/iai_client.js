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
const Candidate = models_1.Models.Candidate;
const VerifyFaceResponse = models_1.Models.VerifyFaceResponse;
const SearchPersonsReturnsByGroupResponse = models_1.Models.SearchPersonsReturnsByGroupResponse;
const CreatePersonRequest = models_1.Models.CreatePersonRequest;
const CreateFaceResponse = models_1.Models.CreateFaceResponse;
const FaceHairAttributesInfo = models_1.Models.FaceHairAttributesInfo;
const CreateFaceRequest = models_1.Models.CreateFaceRequest;
const CreateGroupRequest = models_1.Models.CreateGroupRequest;
const GetPersonGroupInfoRequest = models_1.Models.GetPersonGroupInfoRequest;
const FaceInfo = models_1.Models.FaceInfo;
const CheckSimilarPersonRequest = models_1.Models.CheckSimilarPersonRequest;
const FaceShape = models_1.Models.FaceShape;
const GetGroupListRequest = models_1.Models.GetGroupListRequest;
const GetUpgradeGroupFaceModelVersionJobListRequest = models_1.Models.GetUpgradeGroupFaceModelVersionJobListRequest;
const GetUpgradeGroupFaceModelVersionResultResponse = models_1.Models.GetUpgradeGroupFaceModelVersionResultResponse;
const AnalyzeFaceRequest = models_1.Models.AnalyzeFaceRequest;
const CreatePersonResponse = models_1.Models.CreatePersonResponse;
const SearchFacesResponse = models_1.Models.SearchFacesResponse;
const CopyPersonResponse = models_1.Models.CopyPersonResponse;
const EstimateCheckSimilarPersonCostTimeResponse = models_1.Models.EstimateCheckSimilarPersonCostTimeResponse;
const GroupCandidate = models_1.Models.GroupCandidate;
const DeleteFaceResponse = models_1.Models.DeleteFaceResponse;
const DeletePersonRequest = models_1.Models.DeletePersonRequest;
const DetectLiveFaceResponse = models_1.Models.DetectLiveFaceResponse;
const DeleteFaceRequest = models_1.Models.DeleteFaceRequest;
const ModifyGroupRequest = models_1.Models.ModifyGroupRequest;
const DeleteGroupRequest = models_1.Models.DeleteGroupRequest;
const EstimateCheckSimilarPersonCostTimeRequest = models_1.Models.EstimateCheckSimilarPersonCostTimeRequest;
const FaceQualityCompleteness = models_1.Models.FaceQualityCompleteness;
const DetectLiveFaceRequest = models_1.Models.DetectLiveFaceRequest;
const GetPersonBaseInfoResponse = models_1.Models.GetPersonBaseInfoResponse;
const GetSimilarPersonResultRequest = models_1.Models.GetSimilarPersonResultRequest;
const SearchPersonsResponse = models_1.Models.SearchPersonsResponse;
const GetUpgradeGroupFaceModelVersionResultRequest = models_1.Models.GetUpgradeGroupFaceModelVersionResultRequest;
const GroupInfo = models_1.Models.GroupInfo;
const FaceQualityInfo = models_1.Models.FaceQualityInfo;
const SearchFacesReturnsByGroupResponse = models_1.Models.SearchFacesReturnsByGroupResponse;
const CopyPersonRequest = models_1.Models.CopyPersonRequest;
const SearchPersonsReturnsByGroupRequest = models_1.Models.SearchPersonsReturnsByGroupRequest;
const DeletePersonFromGroupResponse = models_1.Models.DeletePersonFromGroupResponse;
const GetCheckSimilarPersonJobIdListResponse = models_1.Models.GetCheckSimilarPersonJobIdListResponse;
const ResultsReturnsByGroup = models_1.Models.ResultsReturnsByGroup;
const Point = models_1.Models.Point;
const GetPersonListNumResponse = models_1.Models.GetPersonListNumResponse;
const DeletePersonFromGroupRequest = models_1.Models.DeletePersonFromGroupRequest;
const VerifyFaceRequest = models_1.Models.VerifyFaceRequest;
const GetPersonListResponse = models_1.Models.GetPersonListResponse;
const GetPersonListNumRequest = models_1.Models.GetPersonListNumRequest;
const Result = models_1.Models.Result;
const GetPersonGroupInfoResponse = models_1.Models.GetPersonGroupInfoResponse;
const UpgradeGroupFaceModelVersionResponse = models_1.Models.UpgradeGroupFaceModelVersionResponse;
const SearchFacesReturnsByGroupRequest = models_1.Models.SearchFacesReturnsByGroupRequest;
const ModifyPersonBaseInfoResponse = models_1.Models.ModifyPersonBaseInfoResponse;
const GetSimilarPersonResultResponse = models_1.Models.GetSimilarPersonResultResponse;
const ModifyPersonGroupInfoRequest = models_1.Models.ModifyPersonGroupInfoRequest;
const RevertGroupFaceModelVersionRequest = models_1.Models.RevertGroupFaceModelVersionRequest;
const UpgradeGroupFaceModelVersionRequest = models_1.Models.UpgradeGroupFaceModelVersionRequest;
const FaceAttributesInfo = models_1.Models.FaceAttributesInfo;
const VerifyPersonRequest = models_1.Models.VerifyPersonRequest;
const ModifyPersonBaseInfoRequest = models_1.Models.ModifyPersonBaseInfoRequest;
const JobIdInfo = models_1.Models.JobIdInfo;
const SearchFacesRequest = models_1.Models.SearchFacesRequest;
const GetCheckSimilarPersonJobIdListRequest = models_1.Models.GetCheckSimilarPersonJobIdListRequest;
const SearchPersonsRequest = models_1.Models.SearchPersonsRequest;
const PersonInfo = models_1.Models.PersonInfo;
const GroupExDescriptionInfo = models_1.Models.GroupExDescriptionInfo;
const AnalyzeFaceResponse = models_1.Models.AnalyzeFaceResponse;
const DetectFaceRequest = models_1.Models.DetectFaceRequest;
const GetPersonBaseInfoRequest = models_1.Models.GetPersonBaseInfoRequest;
const DeletePersonResponse = models_1.Models.DeletePersonResponse;
const PersonExDescriptionInfo = models_1.Models.PersonExDescriptionInfo;
const GetUpgradeGroupFaceModelVersionJobListResponse = models_1.Models.GetUpgradeGroupFaceModelVersionJobListResponse;
const GetGroupListResponse = models_1.Models.GetGroupListResponse;
const PersonGroupInfo = models_1.Models.PersonGroupInfo;
const GetGroupInfoResponse = models_1.Models.GetGroupInfoResponse;
const CompareFaceResponse = models_1.Models.CompareFaceResponse;
const RevertGroupFaceModelVersionResponse = models_1.Models.RevertGroupFaceModelVersionResponse;
const DeleteGroupResponse = models_1.Models.DeleteGroupResponse;
const CompareFaceRequest = models_1.Models.CompareFaceRequest;
const VerifyPersonResponse = models_1.Models.VerifyPersonResponse;
const DetectFaceResponse = models_1.Models.DetectFaceResponse;
const CheckSimilarPersonResponse = models_1.Models.CheckSimilarPersonResponse;
const GetGroupInfoRequest = models_1.Models.GetGroupInfoRequest;
const UpgradeJobInfo = models_1.Models.UpgradeJobInfo;
const ModifyGroupResponse = models_1.Models.ModifyGroupResponse;
const GetPersonListRequest = models_1.Models.GetPersonListRequest;
const FaceRect = models_1.Models.FaceRect;
const ModifyPersonGroupInfoResponse = models_1.Models.ModifyPersonGroupInfoResponse;
const CreateGroupResponse = models_1.Models.CreateGroupResponse;
/**
 * iai client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("iai.tencentcloudapi.com", "2018-03-01", credential, region, profile);
    }
    /**
     * 从某人员库中删除人员，此操作仅影响该人员库。若该人员仅存在于指定的人员库中，该人员将被删除，其所有的人脸信息也将被删除。
     * @param {DeletePersonFromGroupRequest} req
     * @param {function(string, DeletePersonFromGroupResponse):void} cb
     * @public
     */
    DeletePersonFromGroup(req, cb) {
        const resp = new DeletePersonFromGroupResponse();
        this.request("DeletePersonFromGroup", req, resp, cb);
    }
    /**
     * 用于对一张待识别的人脸图片，在一个或多个人员库中识别出最相似的 TopK 人员，按照**人员库的维度**以人员相似度从大到小顺序排列。

支持一次性识别图片中的最多 10 张人脸，支持跨人员库（Group）搜索。

单次搜索的人员库人脸总数量和人员库的算法模型版本（FaceModelVersion）相关。算法模型版本为2.0的人员库，单次搜索人员库人脸总数量不得超过 100 万张；算法模型版本为3.0的人员库，单次搜索人员库人脸总数量不得超过 300 万张。

与[人员搜索](https://cloud.tencent.com/document/product/867/38881)及[人员搜索按库返回](https://cloud.tencent.com/document/product/867/38880)接口不同的是，本接口将该人员（Person）下的每个人脸（Face）都作为单独个体进行验证，而[人员搜索](https://cloud.tencent.com/document/product/867/38881)及[人员搜索按库返回](https://cloud.tencent.com/document/product/867/38880)接口 会将该人员（Person）下的所有人脸（Face）进行融合特征处理，即若某个Person下有4张 Face，本接口会将4张 Face 的特征进行融合处理，生成对应这个 Person 的特征，使搜索更加准确。

本接口需与[人员库管理相关接口](https://cloud.tencent.com/document/product/867/32794)结合使用。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。


     * @param {SearchFacesReturnsByGroupRequest} req
     * @param {function(string, SearchFacesReturnsByGroupResponse):void} cb
     * @public
     */
    SearchFacesReturnsByGroup(req, cb) {
        const resp = new SearchFacesReturnsByGroupResponse();
        this.request("SearchFacesReturnsByGroup", req, resp, cb);
    }
    /**
     * 用于创建一个空的人员库，如果人员库已存在返回错误。
可根据需要创建自定义描述字段，用于辅助描述该人员库下的人员信息。

1个APPID下最多创建10万个人员库（Group）、最多包含5000万张人脸（Face）。

不同算法模型版本（FaceModelVersion）的人员库（Group）最多可包含人脸（Face）数不同。算法模型版本为2.0的人员库最多包含100万张人脸，算法模型版本为3.0的人员库最多可包含300万张人脸。
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        const resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }
    /**
     * 获取人员查重任务列表，按任务创建时间逆序（最新的在前面）。

只保留最近1年的数据。
     * @param {GetCheckSimilarPersonJobIdListRequest} req
     * @param {function(string, GetCheckSimilarPersonJobIdListResponse):void} cb
     * @public
     */
    GetCheckSimilarPersonJobIdList(req, cb) {
        const resp = new GetCheckSimilarPersonJobIdListResponse();
        this.request("GetCheckSimilarPersonJobIdList", req, resp, cb);
    }
    /**
     * 获取指定人员的信息，包括姓名、性别、人脸等。
     * @param {GetPersonBaseInfoRequest} req
     * @param {function(string, GetPersonBaseInfoResponse):void} cb
     * @public
     */
    GetPersonBaseInfo(req, cb) {
        const resp = new GetPersonBaseInfoResponse();
        this.request("GetPersonBaseInfo", req, resp, cb);
    }
    /**
     * 用于对用户上传的静态图片进行人脸活体检测。与动态活体检测的区别是：静态活体检测中，用户不需要通过唇语或摇头眨眼等动作来识别。

静态活体检测适用于手机自拍的场景，或对防攻击要求不高的场景。如果对活体检测有更高安全性要求，请使用[人脸核身·云智慧眼](https://cloud.tencent.com/product/faceid)产品。

>
- 图片的宽高比请接近3：4，不符合宽高比的图片返回的分值不具备参考意义。本接口适用于类手机自拍场景，非类手机自拍照返回的分值不具备参考意义。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {DetectLiveFaceRequest} req
     * @param {function(string, DetectLiveFaceResponse):void} cb
     * @public
     */
    DetectLiveFace(req, cb) {
        const resp = new DetectLiveFaceResponse();
        this.request("DetectLiveFace", req, resp, cb);
    }
    /**
     * 将一组人脸图片添加到一个人员中。一个人员最多允许包含 5 张图片。若该人员存在多个人员库中，所有人员库中该人员图片均会增加。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {CreateFaceRequest} req
     * @param {function(string, CreateFaceResponse):void} cb
     * @public
     */
    CreateFace(req, cb) {
        const resp = new CreateFaceResponse();
        this.request("CreateFace", req, resp, cb);
    }
    /**
     * 获取指定人员库中人员数量。
     * @param {GetPersonListNumRequest} req
     * @param {function(string, GetPersonListNumResponse):void} cb
     * @public
     */
    GetPersonListNum(req, cb) {
        const resp = new GetPersonListNumResponse();
        this.request("GetPersonListNum", req, resp, cb);
    }
    /**
     * 获取指定人员的信息，包括加入的人员库、描述内容等。
     * @param {GetPersonGroupInfoRequest} req
     * @param {function(string, GetPersonGroupInfoResponse):void} cb
     * @public
     */
    GetPersonGroupInfo(req, cb) {
        const resp = new GetPersonGroupInfoResponse();
        this.request("GetPersonGroupInfo", req, resp, cb);
    }
    /**
     * 对请求图片进行五官定位（也称人脸关键点定位），计算构成人脸轮廓的 90 个点，包括眉毛（左右各 8 点）、眼睛（左右各 8 点）、鼻子（13 点）、嘴巴（22 点）、脸型轮廓（21 点）、眼珠[或瞳孔]（2点）。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {AnalyzeFaceRequest} req
     * @param {function(string, AnalyzeFaceResponse):void} cb
     * @public
     */
    AnalyzeFace(req, cb) {
        const resp = new AnalyzeFaceResponse();
        this.request("AnalyzeFace", req, resp, cb);
    }
    /**
     * 修改人员信息，包括名称、性别等。人员名称和性别修改会同步到包含该人员的所有人员库。
     * @param {ModifyPersonBaseInfoRequest} req
     * @param {function(string, ModifyPersonBaseInfoResponse):void} cb
     * @public
     */
    ModifyPersonBaseInfo(req, cb) {
        const resp = new ModifyPersonBaseInfoResponse();
        this.request("ModifyPersonBaseInfo", req, resp, cb);
    }
    /**
     * 用于对一张待识别的人脸图片，在一个或多个人员库中识别出最相似的 TopK 人员，识别结果按照相似度从大到小排序。

支持一次性识别图片中的最多 10 张人脸，支持一次性跨 100 个人员库（Group）搜索。

单次搜索的人员库人脸总数量和人员库的算法模型版本（FaceModelVersion）相关。算法模型版本为2.0的人员库，单次搜索人员库人脸总数量不得超过 100 万张；算法模型版本为3.0的人员库，单次搜索人员库人脸总数量不得超过 300 万张。

与[人员搜索](https://cloud.tencent.com/document/product/867/38881)及[人员搜索按库返回](https://cloud.tencent.com/document/product/867/38880)接口不同的是，本接口将该人员（Person）下的每个人脸（Face）都作为单独个体进行验证，而人员搜索及人员搜索按库返回接口 会将该人员（Person）下的所有人脸（Face）进行融合特征处理，即若某个Person下有4张 Face，本接口会将4张 Face 的特征进行融合处理，生成对应这个 Person 的特征，使搜索更加准确。


本接口需与[人员库管理相关接口](https://cloud.tencent.com/document/product/867/32794)结合使用。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {SearchFacesRequest} req
     * @param {function(string, SearchFacesResponse):void} cb
     * @public
     */
    SearchFaces(req, cb) {
        const resp = new SearchFacesResponse();
        this.request("SearchFaces", req, resp, cb);
    }
    /**
     * 将已存在于某人员库的人员复制到其他人员库，该人员的描述信息不会被复制。单个人员最多只能同时存在100个人员库中。
>
- 注：若该人员创建时算法模型版本为2.0，复制到非2.0算法模型版本的Group中时，复制操作将会失败。
     * @param {CopyPersonRequest} req
     * @param {function(string, CopyPersonResponse):void} cb
     * @public
     */
    CopyPerson(req, cb) {
        const resp = new CopyPersonResponse();
        this.request("CopyPerson", req, resp, cb);
    }
    /**
     * 对指定的人员库进行人员查重，给出疑似相同人的信息。

可以使用本接口对已有的单个人员库进行人员查重，避免同一人在单个人员库中拥有多个身份；也可以使用本接口对已有的多个人员库进行人员查重，查询同一人是否同时存在多个人员库中。

不支持跨算法模型版本查重，且目前仅支持算法模型为3.0的人员库使用查重功能。

>
- 若对完全相同的指定人员库进行查重操作，需等待上次操作完成才可。即，若两次请求输入的 GroupIds 相同，第一次请求若未完成，第二次请求将返回失败。

>
- 查重的人员库状态为腾讯云开始进行查重任务的那一刻，即您可以理解为当您发起查重请求后，若您的查重任务需要排队，在排队期间您对人员库的增删操作均会会影响查重的结果。腾讯云将以开始进行查重任务的那一刻人员库的状态进行查重。查重任务开始后，您对人员库的任何操作均不影响查重任务的进行。但建议查重任务开始后，请不要对人员库中人员和人脸进行增删操作。
     * @param {CheckSimilarPersonRequest} req
     * @param {function(string, CheckSimilarPersonResponse):void} cb
     * @public
     */
    CheckSimilarPerson(req, cb) {
        const resp = new CheckSimilarPersonResponse();
        this.request("CheckSimilarPerson", req, resp, cb);
    }
    /**
     * 删除该人员库及包含的所有的人员。同时，人员对应的所有人脸信息将被删除。若某人员同时存在多个人员库中，该人员不会被删除，但属于该人员库中的自定义描述字段信息会被删除，属于其他人员库的自定义描述字段信息不受影响。

     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        const resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }
    /**
     * 删除该人员信息，此操作会导致所有人员库均删除此人员。同时，该人员的所有人脸信息将被删除。
     * @param {DeletePersonRequest} req
     * @param {function(string, DeletePersonResponse):void} cb
     * @public
     */
    DeletePerson(req, cb) {
        const resp = new DeletePersonResponse();
        this.request("DeletePerson", req, resp, cb);
    }
    /**
     * 修改人员库名称、备注、自定义描述字段名称。
     * @param {ModifyGroupRequest} req
     * @param {function(string, ModifyGroupResponse):void} cb
     * @public
     */
    ModifyGroup(req, cb) {
        const resp = new ModifyGroupResponse();
        this.request("ModifyGroup", req, resp, cb);
    }
    /**
     * 升级人员库。升级过程中，人员库仍然为原算法版本，人员库相关操作仍然支持。升级完成后，人员库为新算法版本。
单个人员库有且仅支持一次回滚操作。
注：此处QPS限制为10。
     * @param {UpgradeGroupFaceModelVersionRequest} req
     * @param {function(string, UpgradeGroupFaceModelVersionResponse):void} cb
     * @public
     */
    UpgradeGroupFaceModelVersion(req, cb) {
        const resp = new UpgradeGroupFaceModelVersionResponse();
        this.request("UpgradeGroupFaceModelVersion", req, resp, cb);
    }
    /**
     * 获取人员查重接口（CheckSimilarPerson）结果。
     * @param {GetSimilarPersonResultRequest} req
     * @param {function(string, GetSimilarPersonResultResponse):void} cb
     * @public
     */
    GetSimilarPersonResult(req, cb) {
        const resp = new GetSimilarPersonResultResponse();
        this.request("GetSimilarPersonResult", req, resp, cb);
    }
    /**
     * 本接口用于回滚人员库的人脸识别算法模型版本。单个人员库有且仅有一次回滚机会。

回滚操作会在10s内生效，回滚操作中，您对人员库的操作可能会失效。

注：给客户我会写10s内生效，我们实际上越快越好。待讨论。
     * @param {RevertGroupFaceModelVersionRequest} req
     * @param {function(string, RevertGroupFaceModelVersionResponse):void} cb
     * @public
     */
    RevertGroupFaceModelVersion(req, cb) {
        const resp = new RevertGroupFaceModelVersionResponse();
        this.request("RevertGroupFaceModelVersion", req, resp, cb);
    }
    /**
     * 创建人员，添加人脸、姓名、性别及其他相关信息。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {CreatePersonRequest} req
     * @param {function(string, CreatePersonResponse):void} cb
     * @public
     */
    CreatePerson(req, cb) {
        const resp = new CreatePersonResponse();
        this.request("CreatePerson", req, resp, cb);
    }
    /**
     * 获取人员库升级任务列表

     * @param {GetUpgradeGroupFaceModelVersionJobListRequest} req
     * @param {function(string, GetUpgradeGroupFaceModelVersionJobListResponse):void} cb
     * @public
     */
    GetUpgradeGroupFaceModelVersionJobList(req, cb) {
        const resp = new GetUpgradeGroupFaceModelVersionJobListResponse();
        this.request("GetUpgradeGroupFaceModelVersionJobList", req, resp, cb);
    }
    /**
     * 获取人员库信息。
     * @param {GetGroupInfoRequest} req
     * @param {function(string, GetGroupInfoResponse):void} cb
     * @public
     */
    GetGroupInfo(req, cb) {
        const resp = new GetGroupInfoResponse();
        this.request("GetGroupInfo", req, resp, cb);
    }
    /**
     * 检测给定图片中的人脸（Face）的位置、相应的面部属性和人脸质量信息，位置包括 (x，y，w，h)，面部属性包括性别（gender）、年龄（age）、表情（expression）、魅力（beauty）、眼镜（glass）、发型（hair）、口罩（mask）和姿态 (pitch，roll，yaw)，人脸质量信息包括整体质量分（score）、模糊分（sharpness）、光照分（brightness）和五官遮挡分（completeness）。

 
其中，人脸质量信息主要用于评价输入的人脸图片的质量。在使用人脸识别服务时，建议您对输入的人脸图片进行质量检测，提升后续业务处理的效果。该功能的应用场景包括：

1） 人员库[创建人员](https://cloud.tencent.com/document/product/867/32793)/[增加人脸](https://cloud.tencent.com/document/product/867/32795)：保证人员人脸信息的质量，便于后续的业务处理。

2） [人脸搜索](https://cloud.tencent.com/document/product/867/32798)：保证输入的图片质量，快速准确匹配到对应的人员。

3） [人脸验证](https://cloud.tencent.com/document/product/867/32806)：保证人脸信息的质量，避免明明是本人却认证不通过的情况。

4） [人脸融合](https://cloud.tencent.com/product/facefusion)：保证上传的人脸质量，人脸融合的效果更好。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。


     * @param {DetectFaceRequest} req
     * @param {function(string, DetectFaceResponse):void} cb
     * @public
     */
    DetectFace(req, cb) {
        const resp = new DetectFaceResponse();
        this.request("DetectFace", req, resp, cb);
    }
    /**
     * 获取指定人员库中的人员列表。
     * @param {GetPersonListRequest} req
     * @param {function(string, GetPersonListResponse):void} cb
     * @public
     */
    GetPersonList(req, cb) {
        const resp = new GetPersonListResponse();
        this.request("GetPersonList", req, resp, cb);
    }
    /**
     * 给定一张人脸图片和一个 PersonId，判断图片中的人和 PersonId 对应的人是否为同一人。PersonId 请参考[人员库管理相关接口](https://cloud.tencent.com/document/product/867/32794)。
本接口会将该人员（Person）下的所有人脸（Face）进行融合特征处理，即若某个Person下有4张 Face，本接口会将4张 Face 的特征进行融合处理，生成对应这个 Person 的特征，使人员验证（确定待识别的人脸图片是某人员）更加准确。

 和人脸比对相关接口不同的是，人脸验证相关接口用于判断 “此人是否是此人”，“此人”的信息已存于人员库中，“此人”可能存在多张人脸图片；而人脸比对相关接口用于判断两张人脸的相似度。


>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
- 仅支持算法模型版本（FaceModelVersion）为3.0的人员库。
     * @param {VerifyPersonRequest} req
     * @param {function(string, VerifyPersonResponse):void} cb
     * @public
     */
    VerifyPerson(req, cb) {
        const resp = new VerifyPersonResponse();
        this.request("VerifyPerson", req, resp, cb);
    }
    /**
     * 人员库升级结果查询

     * @param {GetUpgradeGroupFaceModelVersionResultRequest} req
     * @param {function(string, GetUpgradeGroupFaceModelVersionResultResponse):void} cb
     * @public
     */
    GetUpgradeGroupFaceModelVersionResult(req, cb) {
        const resp = new GetUpgradeGroupFaceModelVersionResultResponse();
        this.request("GetUpgradeGroupFaceModelVersionResult", req, resp, cb);
    }
    /**
     * 修改指定人员库人员描述内容。
     * @param {ModifyPersonGroupInfoRequest} req
     * @param {function(string, ModifyPersonGroupInfoResponse):void} cb
     * @public
     */
    ModifyPersonGroupInfo(req, cb) {
        const resp = new ModifyPersonGroupInfoResponse();
        this.request("ModifyPersonGroupInfo", req, resp, cb);
    }
    /**
     * 给定一张人脸图片和一个 PersonId，判断图片中的人和 PersonId 对应的人是否为同一人。PersonId 请参考[人员库管理相关接口](https://cloud.tencent.com/document/product/867/32794)。

与[人脸比对](https://cloud.tencent.com/document/product/867/32802)接口不同的是，人脸验证用于判断 “此人是否是此人”，“此人”的信息已存于人员库中，“此人”可能存在多张人脸图片；而[人脸比对](https://cloud.tencent.com/document/product/867/32802)用于判断两张人脸的相似度。

与[人员验证](https://cloud.tencent.com/document/product/867/38879)接口不同的是，人脸验证将该人员（Person）下的每个人脸（Face）都作为单独个体进行验证，而[人员验证](https://cloud.tencent.com/document/product/867/38879)会将该人员（Person）下的所有人脸（Face）进行融合特征处理，即若某个 Person下有4张 Face，本接口会将4张 Face 的特征进行融合处理，生成对应这个 Person 的特征，使人员验证（确定待识别的人脸图片是某人员）更加准确。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {VerifyFaceRequest} req
     * @param {function(string, VerifyFaceResponse):void} cb
     * @public
     */
    VerifyFace(req, cb) {
        const resp = new VerifyFaceResponse();
        this.request("VerifyFace", req, resp, cb);
    }
    /**
     * 用于对一张待识别的人脸图片，在一个或多个人员库中识别出最相似的 TopK 人员，按照相似度从大到小排列。

支持一次性识别图片中的最多 10 张人脸，支持一次性跨 100 个人员库（Group）搜索。

单次搜索的人员库人脸总数量和人员库的算法模型版本（FaceModelVersion）相关。算法模型版本为2.0的人员库，单次搜索人员库人脸总数量不得超过 100 万张；算法模型版本为3.0的人员库，单次搜索人员库人脸总数量不得超过 300 万张。

本接口会将该人员（Person）下的所有人脸（Face）进行融合特征处理，即若某个 Person 下有4张 Face ，本接口会将4张 Face 的特征进行融合处理，生成对应这个 Person 的特征，使人员搜索（确定待识别的人脸图片是某人）更加准确。而[人脸搜索](https://cloud.tencent.com/document/product/867/32798)及[人脸搜索按库返回接口](https://cloud.tencent.com/document/product/867/38882)将该人员（Person）下的每个人脸（Face）都作为单独个体进行搜索。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
- 仅支持算法模型版本（FaceModelVersion）为3.0的人员库。
     * @param {SearchPersonsRequest} req
     * @param {function(string, SearchPersonsResponse):void} cb
     * @public
     */
    SearchPersons(req, cb) {
        const resp = new SearchPersonsResponse();
        this.request("SearchPersons", req, resp, cb);
    }
    /**
     * 对两张图片中的人脸进行相似度比对，返回人脸相似度分数。

若您需要判断 “此人是否是某人”，即验证某张图片中的人是否是已知身份的某人，如常见的人脸登录场景，建议使用[人脸验证](https://cloud.tencent.com/document/product/867/32806)或[人员验证](https://cloud.tencent.com/document/product/867/38879)接口。

>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @param {CompareFaceRequest} req
     * @param {function(string, CompareFaceResponse):void} cb
     * @public
     */
    CompareFace(req, cb) {
        const resp = new CompareFaceResponse();
        this.request("CompareFace", req, resp, cb);
    }
    /**
     * 用于对一张待识别的人脸图片，在一个或多个人员库中识别出最相似的 TopK 人员，按照**人员库的维度**以人员相似度从大到小顺序排列。

支持一次性识别图片中的最多 10 张人脸，支持跨人员库（Group）搜索。

单次搜索的人员库人脸总数量和人员库的算法模型版本（FaceModelVersion）相关。算法模型版本为2.0的人员库，单次搜索人员库人脸总数量不得超过 100 万张；算法模型版本为3.0的人员库，单次搜索人员库人脸总数量不得超过 300 万张。

本接口会将该人员（Person）下的所有人脸（Face）进行融合特征处理，即若某个 Person 下有4张 Face ，本接口会将4张 Face 的特征进行融合处理，生成对应这个 Person 的特征，使人员搜索（确定待识别的人脸图片是某人）更加准确。而[人脸搜索](https://cloud.tencent.com/document/product/867/32798)及[人脸搜索按库返回接口](https://cloud.tencent.com/document/product/867/38882)将该人员（Person）下的每个人脸（Face）都作为单独个体进行搜索。
>
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
- 仅支持算法模型版本（FaceModelVersion）为3.0的人员库。
     * @param {SearchPersonsReturnsByGroupRequest} req
     * @param {function(string, SearchPersonsReturnsByGroupResponse):void} cb
     * @public
     */
    SearchPersonsReturnsByGroup(req, cb) {
        const resp = new SearchPersonsReturnsByGroupResponse();
        this.request("SearchPersonsReturnsByGroup", req, resp, cb);
    }
    /**
     * 获取人员库列表。
     * @param {GetGroupListRequest} req
     * @param {function(string, GetGroupListResponse):void} cb
     * @public
     */
    GetGroupList(req, cb) {
        const resp = new GetGroupListResponse();
        this.request("GetGroupList", req, resp, cb);
    }
    /**
     * 获取若要开始一个人员查重任务，这个任务结束的预估时间。

若EndTimestamp符合您预期，请您尽快发起人员查重请求，否则导致可能需要更多处理时间。

若预估时间超过5小时，则无法使用人员查重功能。
     * @param {EstimateCheckSimilarPersonCostTimeRequest} req
     * @param {function(string, EstimateCheckSimilarPersonCostTimeResponse):void} cb
     * @public
     */
    EstimateCheckSimilarPersonCostTime(req, cb) {
        const resp = new EstimateCheckSimilarPersonCostTimeResponse();
        this.request("EstimateCheckSimilarPersonCostTime", req, resp, cb);
    }
    /**
     * 删除一个人员下的人脸图片。如果该人员只有一张人脸图片，则返回错误。
     * @param {DeleteFaceRequest} req
     * @param {function(string, DeleteFaceResponse):void} cb
     * @public
     */
    DeleteFace(req, cb) {
        const resp = new DeleteFaceResponse();
        this.request("DeleteFace", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=iai_client.js.map