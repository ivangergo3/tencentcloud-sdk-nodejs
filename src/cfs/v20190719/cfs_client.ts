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
import { Models as models} from "./models"
import { AbstractClient } from '../../common/abstract_client'
const DeleteCfsFileSystemRequest = models.DeleteCfsFileSystemRequest;
const DeleteCfsFileSystemResponse = models.DeleteCfsFileSystemResponse;
const UpdateCfsRuleRequest = models.UpdateCfsRuleRequest;
const DeleteMountTargetRequest = models.DeleteMountTargetRequest;
const CreateCfsRuleRequest = models.CreateCfsRuleRequest;
const PGroup = models.PGroup;
const DescribeAvailableZoneInfoResponse = models.DescribeAvailableZoneInfoResponse;
const UpdateCfsFileSystemNameResponse = models.UpdateCfsFileSystemNameResponse;
const UpdateCfsFileSystemNameRequest = models.UpdateCfsFileSystemNameRequest;
const DescribeCfsPGroupsResponse = models.DescribeCfsPGroupsResponse;
const UpdateCfsPGroupRequest = models.UpdateCfsPGroupRequest;
const DeleteMountTargetResponse = models.DeleteMountTargetResponse;
const DescribeMountTargetsResponse = models.DescribeMountTargetsResponse;
const DeleteCfsRuleResponse = models.DeleteCfsRuleResponse;
const DeleteCfsRuleRequest = models.DeleteCfsRuleRequest;
const MountInfo = models.MountInfo;
const UpdateCfsRuleResponse = models.UpdateCfsRuleResponse;
const DescribeCfsFileSystemsResponse = models.DescribeCfsFileSystemsResponse;
const CreateCfsFileSystemResponse = models.CreateCfsFileSystemResponse;
const FileSystemInfo = models.FileSystemInfo;
const TagInfo = models.TagInfo;
const DescribeCfsPGroupsRequest = models.DescribeCfsPGroupsRequest;
const AvailableZone = models.AvailableZone;
const CreateCfsPGroupRequest = models.CreateCfsPGroupRequest;
const DeleteCfsPGroupResponse = models.DeleteCfsPGroupResponse;
const UpdateCfsFileSystemSizeLimitResponse = models.UpdateCfsFileSystemSizeLimitResponse;
const DescribeAvailableZoneInfoRequest = models.DescribeAvailableZoneInfoRequest;
const AvailableRegion = models.AvailableRegion;
const CreateCfsFileSystemRequest = models.CreateCfsFileSystemRequest;
const DescribeMountTargetsRequest = models.DescribeMountTargetsRequest;
const CreateCfsPGroupResponse = models.CreateCfsPGroupResponse;
const SignUpCfsServiceRequest = models.SignUpCfsServiceRequest;
const DescribeCfsServiceStatusRequest = models.DescribeCfsServiceStatusRequest;
const PGroupInfo = models.PGroupInfo;
const SignUpCfsServiceResponse = models.SignUpCfsServiceResponse;
const UpdateCfsFileSystemPGroupRequest = models.UpdateCfsFileSystemPGroupRequest;
const DescribeCfsServiceStatusResponse = models.DescribeCfsServiceStatusResponse;
const CreateCfsRuleResponse = models.CreateCfsRuleResponse;
const AvailableProtoStatus = models.AvailableProtoStatus;
const DescribeCfsRulesRequest = models.DescribeCfsRulesRequest;
const PGroupRuleInfo = models.PGroupRuleInfo;
const DeleteCfsPGroupRequest = models.DeleteCfsPGroupRequest;
const AvailableType = models.AvailableType;
const UpdateCfsFileSystemSizeLimitRequest = models.UpdateCfsFileSystemSizeLimitRequest;
const DescribeCfsFileSystemsRequest = models.DescribeCfsFileSystemsRequest;
const UpdateCfsPGroupResponse = models.UpdateCfsPGroupResponse;
const DescribeCfsRulesResponse = models.DescribeCfsRulesResponse;
const UpdateCfsFileSystemPGroupResponse = models.UpdateCfsFileSystemPGroupResponse;


/**
 * cfs client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("cfs.tencentcloudapi.com", "2019-07-19", credential, region, profile);
    }
    
    /**
     * 用于添加新文件系统
     * @param {CreateCfsFileSystemRequest} req
     * @param {function(string, CreateCfsFileSystemResponse):void} cb
     * @public
     */
    CreateCfsFileSystem(req: any, cb: any): void {
        const resp = new CreateCfsFileSystemResponse();
        this.request("CreateCfsFileSystem", req, resp, cb);
    }

    /**
     * 本接口（DescribeCfsPGroups）用于查询权限组列表。
     * @param {DescribeCfsPGroupsRequest} req
     * @param {function(string, DescribeCfsPGroupsResponse):void} cb
     * @public
     */
    DescribeCfsPGroups(req: any, cb: any): void {
        const resp = new DescribeCfsPGroupsResponse();
        this.request("DescribeCfsPGroups", req, resp, cb);
    }

    /**
     * 本接口（DescribeCfsRules）用于查询权限组规则列表。
     * @param {DescribeCfsRulesRequest} req
     * @param {function(string, DescribeCfsRulesResponse):void} cb
     * @public
     */
    DescribeCfsRules(req: any, cb: any): void {
        const resp = new DescribeCfsRulesResponse();
        this.request("DescribeCfsRules", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
     * @param {UpdateCfsFileSystemPGroupRequest} req
     * @param {function(string, UpdateCfsFileSystemPGroupResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemPGroup(req: any, cb: any): void {
        const resp = new UpdateCfsFileSystemPGroupResponse();
        this.request("UpdateCfsFileSystemPGroup", req, resp, cb);
    }

    /**
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     * @param {DescribeAvailableZoneInfoRequest} req
     * @param {function(string, DescribeAvailableZoneInfoResponse):void} cb
     * @public
     */
    DescribeAvailableZoneInfo(req: any, cb: any): void {
        const resp = new DescribeAvailableZoneInfoResponse();
        this.request("DescribeAvailableZoneInfo", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     * @param {UpdateCfsFileSystemNameRequest} req
     * @param {function(string, UpdateCfsFileSystemNameResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemName(req: any, cb: any): void {
        const resp = new UpdateCfsFileSystemNameResponse();
        this.request("UpdateCfsFileSystemName", req, resp, cb);
    }

    /**
     * 用于删除文件系统
     * @param {DeleteCfsFileSystemRequest} req
     * @param {function(string, DeleteCfsFileSystemResponse):void} cb
     * @public
     */
    DeleteCfsFileSystem(req: any, cb: any): void {
        const resp = new DeleteCfsFileSystemResponse();
        this.request("DeleteCfsFileSystem", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     * @param {UpdateCfsFileSystemSizeLimitRequest} req
     * @param {function(string, UpdateCfsFileSystemSizeLimitResponse):void} cb
     * @public
     */
    UpdateCfsFileSystemSizeLimit(req: any, cb: any): void {
        const resp = new UpdateCfsFileSystemSizeLimitResponse();
        this.request("UpdateCfsFileSystemSizeLimit", req, resp, cb);
    }

    /**
     * 本接口（CreateCfsPGroup）用于创建权限组
     * @param {CreateCfsPGroupRequest} req
     * @param {function(string, CreateCfsPGroupResponse):void} cb
     * @public
     */
    CreateCfsPGroup(req: any, cb: any): void {
        const resp = new CreateCfsPGroupResponse();
        this.request("CreateCfsPGroup", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsRule）用于更新权限规则。
     * @param {UpdateCfsRuleRequest} req
     * @param {function(string, UpdateCfsRuleResponse):void} cb
     * @public
     */
    UpdateCfsRule(req: any, cb: any): void {
        const resp = new UpdateCfsRuleResponse();
        this.request("UpdateCfsRule", req, resp, cb);
    }

    /**
     * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
     * @param {DescribeCfsServiceStatusRequest} req
     * @param {function(string, DescribeCfsServiceStatusResponse):void} cb
     * @public
     */
    DescribeCfsServiceStatus(req: any, cb: any): void {
        const resp = new DescribeCfsServiceStatusResponse();
        this.request("DescribeCfsServiceStatus", req, resp, cb);
    }

    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     * @param {DescribeCfsFileSystemsRequest} req
     * @param {function(string, DescribeCfsFileSystemsResponse):void} cb
     * @public
     */
    DescribeCfsFileSystems(req: any, cb: any): void {
        const resp = new DescribeCfsFileSystemsResponse();
        this.request("DescribeCfsFileSystems", req, resp, cb);
    }

    /**
     * 本接口（SignUpCfsService）用于开通CFS服务。
     * @param {SignUpCfsServiceRequest} req
     * @param {function(string, SignUpCfsServiceResponse):void} cb
     * @public
     */
    SignUpCfsService(req: any, cb: any): void {
        const resp = new SignUpCfsServiceResponse();
        this.request("SignUpCfsService", req, resp, cb);
    }

    /**
     * 本接口（CreateCfsRule）用于创建权限组规则。
     * @param {CreateCfsRuleRequest} req
     * @param {function(string, CreateCfsRuleResponse):void} cb
     * @public
     */
    CreateCfsRule(req: any, cb: any): void {
        const resp = new CreateCfsRuleResponse();
        this.request("CreateCfsRule", req, resp, cb);
    }

    /**
     * 本接口（DeleteCfsPGroup）用于删除权限组。
     * @param {DeleteCfsPGroupRequest} req
     * @param {function(string, DeleteCfsPGroupResponse):void} cb
     * @public
     */
    DeleteCfsPGroup(req: any, cb: any): void {
        const resp = new DeleteCfsPGroupResponse();
        this.request("DeleteCfsPGroup", req, resp, cb);
    }

    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     * @param {DescribeMountTargetsRequest} req
     * @param {function(string, DescribeMountTargetsResponse):void} cb
     * @public
     */
    DescribeMountTargets(req: any, cb: any): void {
        const resp = new DescribeMountTargetsResponse();
        this.request("DescribeMountTargets", req, resp, cb);
    }

    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     * @param {UpdateCfsPGroupRequest} req
     * @param {function(string, UpdateCfsPGroupResponse):void} cb
     * @public
     */
    UpdateCfsPGroup(req: any, cb: any): void {
        const resp = new UpdateCfsPGroupResponse();
        this.request("UpdateCfsPGroup", req, resp, cb);
    }

    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     * @param {DeleteCfsRuleRequest} req
     * @param {function(string, DeleteCfsRuleResponse):void} cb
     * @public
     */
    DeleteCfsRule(req: any, cb: any): void {
        const resp = new DeleteCfsRuleResponse();
        this.request("DeleteCfsRule", req, resp, cb);
    }

    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
     * @param {DeleteMountTargetRequest} req
     * @param {function(string, DeleteMountTargetResponse):void} cb
     * @public
     */
    DeleteMountTarget(req: any, cb: any): void {
        const resp = new DeleteMountTargetResponse();
        this.request("DeleteMountTarget", req, resp, cb);
    }


}
