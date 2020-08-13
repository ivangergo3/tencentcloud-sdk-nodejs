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
const CreateFileSystemResponse = models_1.Models.CreateFileSystemResponse;
const AccessRule = models_1.Models.AccessRule;
const DescribeFileSystemResponse = models_1.Models.DescribeFileSystemResponse;
const AccessGroup = models_1.Models.AccessGroup;
const ModifyFileSystemResponse = models_1.Models.ModifyFileSystemResponse;
const ModifyAccessGroupRequest = models_1.Models.ModifyAccessGroupRequest;
const DescribeFileSystemsResponse = models_1.Models.DescribeFileSystemsResponse;
const DescribeFileSystemRequest = models_1.Models.DescribeFileSystemRequest;
const CreateMountPointRequest = models_1.Models.CreateMountPointRequest;
const DeleteAccessGroupRequest = models_1.Models.DeleteAccessGroupRequest;
const DeleteFileSystemRequest = models_1.Models.DeleteFileSystemRequest;
const DescribeMountPointRequest = models_1.Models.DescribeMountPointRequest;
const DescribeAccessGroupsRequest = models_1.Models.DescribeAccessGroupsRequest;
const DeleteAccessGroupResponse = models_1.Models.DeleteAccessGroupResponse;
const DeleteMountPointResponse = models_1.Models.DeleteMountPointResponse;
const CreateMountPointResponse = models_1.Models.CreateMountPointResponse;
const CreateFileSystemRequest = models_1.Models.CreateFileSystemRequest;
const ModifyFileSystemRequest = models_1.Models.ModifyFileSystemRequest;
const DescribeMountPointsResponse = models_1.Models.DescribeMountPointsResponse;
const DeleteMountPointRequest = models_1.Models.DeleteMountPointRequest;
const DeleteFileSystemResponse = models_1.Models.DeleteFileSystemResponse;
const Filter = models_1.Models.Filter;
const CreateAccessGroupResponse = models_1.Models.CreateAccessGroupResponse;
const FileSystem = models_1.Models.FileSystem;
const ModifyMountPointRequest = models_1.Models.ModifyMountPointRequest;
const DescribeAccessGroupsResponse = models_1.Models.DescribeAccessGroupsResponse;
const CreateAccessRulesResponse = models_1.Models.CreateAccessRulesResponse;
const DeleteAccessRulesRequest = models_1.Models.DeleteAccessRulesRequest;
const DescribeAccessRulesResponse = models_1.Models.DescribeAccessRulesResponse;
const DescribeFileSystemsRequest = models_1.Models.DescribeFileSystemsRequest;
const CreateAccessRulesRequest = models_1.Models.CreateAccessRulesRequest;
const DeleteAccessRulesResponse = models_1.Models.DeleteAccessRulesResponse;
const MountPoint = models_1.Models.MountPoint;
const DescribeAccessRulesRequest = models_1.Models.DescribeAccessRulesRequest;
const ModifyAccessRulesResponse = models_1.Models.ModifyAccessRulesResponse;
const DescribeMountPointsRequest = models_1.Models.DescribeMountPointsRequest;
const ModifyAccessGroupResponse = models_1.Models.ModifyAccessGroupResponse;
const ModifyMountPointResponse = models_1.Models.ModifyMountPointResponse;
const ModifyAccessRulesRequest = models_1.Models.ModifyAccessRulesRequest;
const CreateAccessGroupRequest = models_1.Models.CreateAccessGroupRequest;
const DescribeMountPointResponse = models_1.Models.DescribeMountPointResponse;
/**
 * chdfs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("chdfs.tencentcloudapi.com", "2019-07-18", credential, region, profile);
    }
    /**
     * 查看挂载点详细信息。
     * @param {DescribeMountPointRequest} req
     * @param {function(string, DescribeMountPointResponse):void} cb
     * @public
     */
    DescribeMountPoint(req, cb) {
        const resp = new DescribeMountPointResponse();
        this.request("DescribeMountPoint", req, resp, cb);
    }
    /**
     * 修改文件系统属性，仅限于创建成功的文件系统。
     * @param {ModifyFileSystemRequest} req
     * @param {function(string, ModifyFileSystemResponse):void} cb
     * @public
     */
    ModifyFileSystem(req, cb) {
        const resp = new ModifyFileSystemResponse();
        this.request("ModifyFileSystem", req, resp, cb);
    }
    /**
     * 删除文件系统，不允许删除非空文件系统。
     * @param {DeleteFileSystemRequest} req
     * @param {function(string, DeleteFileSystemResponse):void} cb
     * @public
     */
    DeleteFileSystem(req, cb) {
        const resp = new DeleteFileSystemResponse();
        this.request("DeleteFileSystem", req, resp, cb);
    }
    /**
     * 批量删除权限规则。
     * @param {DeleteAccessRulesRequest} req
     * @param {function(string, DeleteAccessRulesResponse):void} cb
     * @public
     */
    DeleteAccessRules(req, cb) {
        const resp = new DeleteAccessRulesResponse();
        this.request("DeleteAccessRules", req, resp, cb);
    }
    /**
     * 查看文件系统详细信息。
     * @param {DescribeFileSystemRequest} req
     * @param {function(string, DescribeFileSystemResponse):void} cb
     * @public
     */
    DescribeFileSystem(req, cb) {
        const resp = new DescribeFileSystemResponse();
        this.request("DescribeFileSystem", req, resp, cb);
    }
    /**
     * 查看权限组列表。
     * @param {DescribeAccessGroupsRequest} req
     * @param {function(string, DescribeAccessGroupsResponse):void} cb
     * @public
     */
    DescribeAccessGroups(req, cb) {
        const resp = new DescribeAccessGroupsResponse();
        this.request("DescribeAccessGroups", req, resp, cb);
    }
    /**
     * 通过权限组ID查看权限规则列表。
     * @param {DescribeAccessRulesRequest} req
     * @param {function(string, DescribeAccessRulesResponse):void} cb
     * @public
     */
    DescribeAccessRules(req, cb) {
        const resp = new DescribeAccessRulesResponse();
        this.request("DescribeAccessRules", req, resp, cb);
    }
    /**
     * 查看文件系统列表。
     * @param {DescribeFileSystemsRequest} req
     * @param {function(string, DescribeFileSystemsResponse):void} cb
     * @public
     */
    DescribeFileSystems(req, cb) {
        const resp = new DescribeFileSystemsResponse();
        this.request("DescribeFileSystems", req, resp, cb);
    }
    /**
     * 创建文件系统挂载点，仅限于创建成功的文件系统。
     * @param {CreateMountPointRequest} req
     * @param {function(string, CreateMountPointResponse):void} cb
     * @public
     */
    CreateMountPoint(req, cb) {
        const resp = new CreateMountPointResponse();
        this.request("CreateMountPoint", req, resp, cb);
    }
    /**
     * 通过文件系统ID或者权限组ID查看挂载点列表。
     * @param {DescribeMountPointsRequest} req
     * @param {function(string, DescribeMountPointsResponse):void} cb
     * @public
     */
    DescribeMountPoints(req, cb) {
        const resp = new DescribeMountPointsResponse();
        this.request("DescribeMountPoints", req, resp, cb);
    }
    /**
     * 修改权限组属性。
     * @param {ModifyAccessGroupRequest} req
     * @param {function(string, ModifyAccessGroupResponse):void} cb
     * @public
     */
    ModifyAccessGroup(req, cb) {
        const resp = new ModifyAccessGroupResponse();
        this.request("ModifyAccessGroup", req, resp, cb);
    }
    /**
     * 批量修改权限规则属性，需要指定权限规则ID。
     * @param {ModifyAccessRulesRequest} req
     * @param {function(string, ModifyAccessRulesResponse):void} cb
     * @public
     */
    ModifyAccessRules(req, cb) {
        const resp = new ModifyAccessRulesResponse();
        this.request("ModifyAccessRules", req, resp, cb);
    }
    /**
     * 删除权限组。
     * @param {DeleteAccessGroupRequest} req
     * @param {function(string, DeleteAccessGroupResponse):void} cb
     * @public
     */
    DeleteAccessGroup(req, cb) {
        const resp = new DeleteAccessGroupResponse();
        this.request("DeleteAccessGroup", req, resp, cb);
    }
    /**
     * 修改挂载点属性。
     * @param {ModifyMountPointRequest} req
     * @param {function(string, ModifyMountPointResponse):void} cb
     * @public
     */
    ModifyMountPoint(req, cb) {
        const resp = new ModifyMountPointResponse();
        this.request("ModifyMountPoint", req, resp, cb);
    }
    /**
     * 创建文件系统（异步）。
     * @param {CreateFileSystemRequest} req
     * @param {function(string, CreateFileSystemResponse):void} cb
     * @public
     */
    CreateFileSystem(req, cb) {
        const resp = new CreateFileSystemResponse();
        this.request("CreateFileSystem", req, resp, cb);
    }
    /**
     * 创建权限组。
     * @param {CreateAccessGroupRequest} req
     * @param {function(string, CreateAccessGroupResponse):void} cb
     * @public
     */
    CreateAccessGroup(req, cb) {
        const resp = new CreateAccessGroupResponse();
        this.request("CreateAccessGroup", req, resp, cb);
    }
    /**
     * 批量创建权限规则，权限规则ID和创建时间无需填写。
     * @param {CreateAccessRulesRequest} req
     * @param {function(string, CreateAccessRulesResponse):void} cb
     * @public
     */
    CreateAccessRules(req, cb) {
        const resp = new CreateAccessRulesResponse();
        this.request("CreateAccessRules", req, resp, cb);
    }
    /**
     * 删除挂载点。
     * @param {DeleteMountPointRequest} req
     * @param {function(string, DeleteMountPointResponse):void} cb
     * @public
     */
    DeleteMountPoint(req, cb) {
        const resp = new DeleteMountPointResponse();
        this.request("DeleteMountPoint", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=chdfs_client.js.map