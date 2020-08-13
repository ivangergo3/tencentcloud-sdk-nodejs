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
const DeleteCfsFileSystemRequest = models_1.Models.DeleteCfsFileSystemRequest;
const DeleteCfsFileSystemResponse = models_1.Models.DeleteCfsFileSystemResponse;
const UpdateCfsRuleRequest = models_1.Models.UpdateCfsRuleRequest;
const DeleteMountTargetRequest = models_1.Models.DeleteMountTargetRequest;
const CreateCfsRuleRequest = models_1.Models.CreateCfsRuleRequest;
const PGroup = models_1.Models.PGroup;
const DescribeAvailableZoneInfoResponse = models_1.Models.DescribeAvailableZoneInfoResponse;
const UpdateCfsFileSystemNameResponse = models_1.Models.UpdateCfsFileSystemNameResponse;
const UpdateCfsFileSystemNameRequest = models_1.Models.UpdateCfsFileSystemNameRequest;
const DescribeCfsPGroupsResponse = models_1.Models.DescribeCfsPGroupsResponse;
const UpdateCfsPGroupRequest = models_1.Models.UpdateCfsPGroupRequest;
const DeleteMountTargetResponse = models_1.Models.DeleteMountTargetResponse;
const DescribeMountTargetsResponse = models_1.Models.DescribeMountTargetsResponse;
const DeleteCfsRuleResponse = models_1.Models.DeleteCfsRuleResponse;
const DeleteCfsRuleRequest = models_1.Models.DeleteCfsRuleRequest;
const MountInfo = models_1.Models.MountInfo;
const UpdateCfsRuleResponse = models_1.Models.UpdateCfsRuleResponse;
const DescribeCfsFileSystemsResponse = models_1.Models.DescribeCfsFileSystemsResponse;
const CreateCfsFileSystemResponse = models_1.Models.CreateCfsFileSystemResponse;
const FileSystemInfo = models_1.Models.FileSystemInfo;
const TagInfo = models_1.Models.TagInfo;
const DescribeCfsPGroupsRequest = models_1.Models.DescribeCfsPGroupsRequest;
const AvailableZone = models_1.Models.AvailableZone;
const CreateCfsPGroupRequest = models_1.Models.CreateCfsPGroupRequest;
const DeleteCfsPGroupResponse = models_1.Models.DeleteCfsPGroupResponse;
const UpdateCfsFileSystemSizeLimitResponse = models_1.Models.UpdateCfsFileSystemSizeLimitResponse;
const DescribeAvailableZoneInfoRequest = models_1.Models.DescribeAvailableZoneInfoRequest;
const AvailableRegion = models_1.Models.AvailableRegion;
const CreateCfsFileSystemRequest = models_1.Models.CreateCfsFileSystemRequest;
const DescribeMountTargetsRequest = models_1.Models.DescribeMountTargetsRequest;
const CreateCfsPGroupResponse = models_1.Models.CreateCfsPGroupResponse;
const SignUpCfsServiceRequest = models_1.Models.SignUpCfsServiceRequest;
const DescribeCfsServiceStatusRequest = models_1.Models.DescribeCfsServiceStatusRequest;
const PGroupInfo = models_1.Models.PGroupInfo;
const SignUpCfsServiceResponse = models_1.Models.SignUpCfsServiceResponse;
const UpdateCfsFileSystemPGroupRequest = models_1.Models.UpdateCfsFileSystemPGroupRequest;
const DescribeCfsServiceStatusResponse = models_1.Models.DescribeCfsServiceStatusResponse;
const CreateCfsRuleResponse = models_1.Models.CreateCfsRuleResponse;
const AvailableProtoStatus = models_1.Models.AvailableProtoStatus;
const DescribeCfsRulesRequest = models_1.Models.DescribeCfsRulesRequest;
const PGroupRuleInfo = models_1.Models.PGroupRuleInfo;
const DeleteCfsPGroupRequest = models_1.Models.DeleteCfsPGroupRequest;
const AvailableType = models_1.Models.AvailableType;
const UpdateCfsFileSystemSizeLimitRequest = models_1.Models.UpdateCfsFileSystemSizeLimitRequest;
const DescribeCfsFileSystemsRequest = models_1.Models.DescribeCfsFileSystemsRequest;
const UpdateCfsPGroupResponse = models_1.Models.UpdateCfsPGroupResponse;
const DescribeCfsRulesResponse = models_1.Models.DescribeCfsRulesResponse;
const UpdateCfsFileSystemPGroupResponse = models_1.Models.UpdateCfsFileSystemPGroupResponse;
/**
 * cfs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cfs.tencentcloudapi.com", "2019-07-19", credential, region, profile);
    }
    /**
     * 用于添加新文件系统
     * @param {CreateCfsFileSystemRequest} req
     * @param {function(string, CreateCfsFileSystemResponse):void} cb
     * @public
     */
    CreateCfsFileSystem(req, cb) {
        const resp = new CreateCfsFileSystemResponse();
        this.request("CreateCfsFileSystem", req, resp, cb);
    }
    /**
     * 本接口（DescribeCfsPGroups）用于查询权限组列表。
     * @param {DescribeCfsPGroupsRequest} req
     * @param {function(string, DescribeCfsPGroupsResponse):void} cb
     * @public
     */
    DescribeCfsPGroups(req, cb) {
        const resp = new DescribeCfsPGroupsResponse();
        this.request("DescribeCfsPGroups", req, resp, cb);
    }
    /**
     * 本接口（DescribeCfsRules）用于查询权限组规则列表。
     * @param {DescribeCfsRulesRequest} req
     * @param {function(string, DescribeCfsRulesResponse):void} cb
     * @public
     */
    DescribeCfsRules(req, cb) {
        const resp = new DescribeCfsRulesResponse();
        this.request("DescribeCfsRules", req, resp, cb);
    }
    /**
     * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
     * @param {UpdateCfsFileSystemPGroupRequest} req
     * @param {function(string, UpdateCfsFileSystemPGroupResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemPGroup(req, cb) {
        const resp = new UpdateCfsFileSystemPGroupResponse();
        this.request("UpdateCfsFileSystemPGroup", req, resp, cb);
    }
    /**
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     * @param {DescribeAvailableZoneInfoRequest} req
     * @param {function(string, DescribeAvailableZoneInfoResponse):void} cb
     * @public
     */
    DescribeAvailableZoneInfo(req, cb) {
        const resp = new DescribeAvailableZoneInfoResponse();
        this.request("DescribeAvailableZoneInfo", req, resp, cb);
    }
    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     * @param {UpdateCfsFileSystemNameRequest} req
     * @param {function(string, UpdateCfsFileSystemNameResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemName(req, cb) {
        const resp = new UpdateCfsFileSystemNameResponse();
        this.request("UpdateCfsFileSystemName", req, resp, cb);
    }
    /**
     * 用于删除文件系统
     * @param {DeleteCfsFileSystemRequest} req
     * @param {function(string, DeleteCfsFileSystemResponse):void} cb
     * @public
     */
    DeleteCfsFileSystem(req, cb) {
        const resp = new DeleteCfsFileSystemResponse();
        this.request("DeleteCfsFileSystem", req, resp, cb);
    }
    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     * @param {UpdateCfsFileSystemSizeLimitRequest} req
     * @param {function(string, UpdateCfsFileSystemSizeLimitResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemSizeLimit(req, cb) {
        const resp = new UpdateCfsFileSystemSizeLimitResponse();
        this.request("UpdateCfsFileSystemSizeLimit", req, resp, cb);
    }
    /**
     * 本接口（CreateCfsPGroup）用于创建权限组
     * @param {CreateCfsPGroupRequest} req
     * @param {function(string, CreateCfsPGroupResponse):void} cb
     * @public
     */
    CreateCfsPGroup(req, cb) {
        const resp = new CreateCfsPGroupResponse();
        this.request("CreateCfsPGroup", req, resp, cb);
    }
    /**
     * 本接口（UpdateCfsRule）用于更新权限规则。
     * @param {UpdateCfsRuleRequest} req
     * @param {function(string, UpdateCfsRuleResponse):void} cb
     * @public
     */
    UpdateCfsRule(req, cb) {
        const resp = new UpdateCfsRuleResponse();
        this.request("UpdateCfsRule", req, resp, cb);
    }
    /**
     * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
     * @param {DescribeCfsServiceStatusRequest} req
     * @param {function(string, DescribeCfsServiceStatusResponse):void} cb
     * @public
     */
    DescribeCfsServiceStatus(req, cb) {
        const resp = new DescribeCfsServiceStatusResponse();
        this.request("DescribeCfsServiceStatus", req, resp, cb);
    }
    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     * @param {DescribeCfsFileSystemsRequest} req
     * @param {function(string, DescribeCfsFileSystemsResponse):void} cb
     * @public
     */
    DescribeCfsFileSystems(req, cb) {
        const resp = new DescribeCfsFileSystemsResponse();
        this.request("DescribeCfsFileSystems", req, resp, cb);
    }
    /**
     * 本接口（SignUpCfsService）用于开通CFS服务。
     * @param {SignUpCfsServiceRequest} req
     * @param {function(string, SignUpCfsServiceResponse):void} cb
     * @public
     */
    SignUpCfsService(req, cb) {
        const resp = new SignUpCfsServiceResponse();
        this.request("SignUpCfsService", req, resp, cb);
    }
    /**
     * 本接口（CreateCfsRule）用于创建权限组规则。
     * @param {CreateCfsRuleRequest} req
     * @param {function(string, CreateCfsRuleResponse):void} cb
     * @public
     */
    CreateCfsRule(req, cb) {
        const resp = new CreateCfsRuleResponse();
        this.request("CreateCfsRule", req, resp, cb);
    }
    /**
     * 本接口（DeleteCfsPGroup）用于删除权限组。
     * @param {DeleteCfsPGroupRequest} req
     * @param {function(string, DeleteCfsPGroupResponse):void} cb
     * @public
     */
    DeleteCfsPGroup(req, cb) {
        const resp = new DeleteCfsPGroupResponse();
        this.request("DeleteCfsPGroup", req, resp, cb);
    }
    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     * @param {DescribeMountTargetsRequest} req
     * @param {function(string, DescribeMountTargetsResponse):void} cb
     * @public
     */
    DescribeMountTargets(req, cb) {
        const resp = new DescribeMountTargetsResponse();
        this.request("DescribeMountTargets", req, resp, cb);
    }
    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     * @param {UpdateCfsPGroupRequest} req
     * @param {function(string, UpdateCfsPGroupResponse):void} cb
     * @public
     */
    UpdateCfsPGroup(req, cb) {
        const resp = new UpdateCfsPGroupResponse();
        this.request("UpdateCfsPGroup", req, resp, cb);
    }
    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     * @param {DeleteCfsRuleRequest} req
     * @param {function(string, DeleteCfsRuleResponse):void} cb
     * @public
     */
    DeleteCfsRule(req, cb) {
        const resp = new DeleteCfsRuleResponse();
        this.request("DeleteCfsRule", req, resp, cb);
    }
    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
     * @param {DeleteMountTargetRequest} req
     * @param {function(string, DeleteMountTargetResponse):void} cb
     * @public
     */
    DeleteMountTarget(req, cb) {
        const resp = new DeleteMountTargetResponse();
        this.request("DeleteMountTarget", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cfs_client.js.map