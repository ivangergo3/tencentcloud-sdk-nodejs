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
const AudioStreamInfo = models_1.Models.AudioStreamInfo;
const DescribeTeamsRequest = models_1.Models.DescribeTeamsRequest;
const DeleteProjectRequest = models_1.Models.DeleteProjectRequest;
const ImportMaterialResponse = models_1.Models.ImportMaterialResponse;
const DescribeTeamsResponse = models_1.Models.DescribeTeamsResponse;
const DescribeTaskDetailResponse = models_1.Models.DescribeTaskDetailResponse;
const ExportVideoEditProjectRequest = models_1.Models.ExportVideoEditProjectRequest;
const ClassInfo = models_1.Models.ClassInfo;
const DeleteMaterialResponse = models_1.Models.DeleteMaterialResponse;
const IntegerRange = models_1.Models.IntegerRange;
const SearchMaterialRequest = models_1.Models.SearchMaterialRequest;
const DeleteTeamResponse = models_1.Models.DeleteTeamResponse;
const RevokeResourceAuthorizationResponse = models_1.Models.RevokeResourceAuthorizationResponse;
const DescribeTasksResponse = models_1.Models.DescribeTasksResponse;
const ProjectInfo = models_1.Models.ProjectInfo;
const DeleteTeamRequest = models_1.Models.DeleteTeamRequest;
const ModifyMaterialResponse = models_1.Models.ModifyMaterialResponse;
const LinkMaterial = models_1.Models.LinkMaterial;
const FlattenListMediaRequest = models_1.Models.FlattenListMediaRequest;
const AudioMaterial = models_1.Models.AudioMaterial;
const AddMemberInfo = models_1.Models.AddMemberInfo;
const Entity = models_1.Models.Entity;
const TeamInfo = models_1.Models.TeamInfo;
const ExportVideoByEditorTrackDataRequest = models_1.Models.ExportVideoByEditorTrackDataRequest;
const MaterialTagInfo = models_1.Models.MaterialTagInfo;
const VideoEditProjectOutput = models_1.Models.VideoEditProjectOutput;
const CreateProjectRequest = models_1.Models.CreateProjectRequest;
const ModifyMaterialRequest = models_1.Models.ModifyMaterialRequest;
const Authorizer = models_1.Models.Authorizer;
const DescribeTasksRequest = models_1.Models.DescribeTasksRequest;
const TimeRange = models_1.Models.TimeRange;
const DescribeLoginStatusRequest = models_1.Models.DescribeLoginStatusRequest;
const DeleteLoginStatusResponse = models_1.Models.DeleteLoginStatusResponse;
const Resource = models_1.Models.Resource;
const CreateLinkResponse = models_1.Models.CreateLinkResponse;
const ListMediaResponse = models_1.Models.ListMediaResponse;
const SearchMaterialResponse = models_1.Models.SearchMaterialResponse;
const DescribeJoinTeamsRequest = models_1.Models.DescribeJoinTeamsRequest;
const DeleteMaterialRequest = models_1.Models.DeleteMaterialRequest;
const CreateProjectResponse = models_1.Models.CreateProjectResponse;
const DeleteProjectResponse = models_1.Models.DeleteProjectResponse;
const DeleteClassRequest = models_1.Models.DeleteClassRequest;
const CreateLinkRequest = models_1.Models.CreateLinkRequest;
const CreateClassRequest = models_1.Models.CreateClassRequest;
const DescribeMaterialsResponse = models_1.Models.DescribeMaterialsResponse;
const GrantResourceAuthorizationResponse = models_1.Models.GrantResourceAuthorizationResponse;
const CMEExportInfo = models_1.Models.CMEExportInfo;
const ImportMediaToProjectRequest = models_1.Models.ImportMediaToProjectRequest;
const VODExportInfo = models_1.Models.VODExportInfo;
const SortBy = models_1.Models.SortBy;
const ImageMaterial = models_1.Models.ImageMaterial;
const DescribeClassRequest = models_1.Models.DescribeClassRequest;
const MoveClassRequest = models_1.Models.MoveClassRequest;
const DeleteTeamMembersResponse = models_1.Models.DeleteTeamMembersResponse;
const MoveClassResponse = models_1.Models.MoveClassResponse;
const ImportMediaToProjectResponse = models_1.Models.ImportMediaToProjectResponse;
const ModifyTeamMemberResponse = models_1.Models.ModifyTeamMemberResponse;
const DescribeTeamMembersResponse = models_1.Models.DescribeTeamMembersResponse;
const AddTeamMemberResponse = models_1.Models.AddTeamMemberResponse;
const CreateTeamResponse = models_1.Models.CreateTeamResponse;
const ModifyTeamRequest = models_1.Models.ModifyTeamRequest;
const ModifyTeamMemberRequest = models_1.Models.ModifyTeamMemberRequest;
const CreateTeamRequest = models_1.Models.CreateTeamRequest;
const MaterialBasicInfo = models_1.Models.MaterialBasicInfo;
const JoinTeamInfo = models_1.Models.JoinTeamInfo;
const DescribeResourceAuthorizationRequest = models_1.Models.DescribeResourceAuthorizationRequest;
const CreateClassResponse = models_1.Models.CreateClassResponse;
const VideoStreamInfo = models_1.Models.VideoStreamInfo;
const AddTeamMemberRequest = models_1.Models.AddTeamMemberRequest;
const ExportVideoEditProjectResponse = models_1.Models.ExportVideoEditProjectResponse;
const ListMediaRequest = models_1.Models.ListMediaRequest;
const ModifyTeamResponse = models_1.Models.ModifyTeamResponse;
const DeleteLoginStatusRequest = models_1.Models.DeleteLoginStatusRequest;
const DeleteTeamMembersRequest = models_1.Models.DeleteTeamMembersRequest;
const DescribeSharedSpaceResponse = models_1.Models.DescribeSharedSpaceResponse;
const SearchScope = models_1.Models.SearchScope;
const VideoMaterial = models_1.Models.VideoMaterial;
const DescribeResourceAuthorizationResponse = models_1.Models.DescribeResourceAuthorizationResponse;
const FlattenListMediaResponse = models_1.Models.FlattenListMediaResponse;
const DescribeProjectsRequest = models_1.Models.DescribeProjectsRequest;
const DescribeLoginStatusResponse = models_1.Models.DescribeLoginStatusResponse;
const TeamMemberInfo = models_1.Models.TeamMemberInfo;
const DescribeJoinTeamsResponse = models_1.Models.DescribeJoinTeamsResponse;
const DescribeTeamMembersRequest = models_1.Models.DescribeTeamMembersRequest;
const MaterialStatus = models_1.Models.MaterialStatus;
const MediaImageSpriteInfo = models_1.Models.MediaImageSpriteInfo;
const AuthorizationInfo = models_1.Models.AuthorizationInfo;
const ModifyProjectResponse = models_1.Models.ModifyProjectResponse;
const RevokeResourceAuthorizationRequest = models_1.Models.RevokeResourceAuthorizationRequest;
const DescribeTaskDetailRequest = models_1.Models.DescribeTaskDetailRequest;
const ModifyProjectRequest = models_1.Models.ModifyProjectRequest;
const MaterialInfo = models_1.Models.MaterialInfo;
const LoginStatusInfo = models_1.Models.LoginStatusInfo;
const DescribeClassResponse = models_1.Models.DescribeClassResponse;
const MediaMetaData = models_1.Models.MediaMetaData;
const DescribeSharedSpaceRequest = models_1.Models.DescribeSharedSpaceRequest;
const TaskBaseInfo = models_1.Models.TaskBaseInfo;
const DeleteClassResponse = models_1.Models.DeleteClassResponse;
const GrantResourceAuthorizationRequest = models_1.Models.GrantResourceAuthorizationRequest;
const LinkMaterialInfo = models_1.Models.LinkMaterialInfo;
const ExportVideoByEditorTrackDataResponse = models_1.Models.ExportVideoByEditorTrackDataResponse;
const DescribeProjectsResponse = models_1.Models.DescribeProjectsResponse;
const ImportMaterialRequest = models_1.Models.ImportMaterialRequest;
const DescribeMaterialsRequest = models_1.Models.DescribeMaterialsRequest;
/**
 * cme client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cme.tencentcloudapi.com", "2019-10-29", credential, region, profile);
    }
    /**
     * 根据素材 Id 批量获取素材详情。
     * @param {DescribeMaterialsRequest} req
     * @param {function(string, DescribeMaterialsResponse):void} cb
     * @public
     */
    DescribeMaterials(req, cb) {
        const resp = new DescribeMaterialsResponse();
        this.request("DescribeMaterials", req, resp, cb);
    }
    /**
     * 获取指定团队的信息。
     * @param {DescribeTeamsRequest} req
     * @param {function(string, DescribeTeamsResponse):void} cb
     * @public
     */
    DescribeTeams(req, cb) {
        const resp = new DescribeTeamsResponse();
        this.request("DescribeTeams", req, resp, cb);
    }
    /**
     * 导出视频编辑项目，支持指定输出的模板。
     * @param {ExportVideoEditProjectRequest} req
     * @param {function(string, ExportVideoEditProjectResponse):void} cb
     * @public
     */
    ExportVideoEditProject(req, cb) {
        const resp = new ExportVideoEditProjectResponse();
        this.request("ExportVideoEditProject", req, resp, cb);
    }
    /**
     * 获取共享空间。当实体A对实体B授权某资源以后，实体B的共享空间就会增加实体A。
     * @param {DescribeSharedSpaceRequest} req
     * @param {function(string, DescribeSharedSpaceResponse):void} cb
     * @public
     */
    DescribeSharedSpace(req, cb) {
        const resp = new DescribeSharedSpaceResponse();
        this.request("DescribeSharedSpace", req, resp, cb);
    }
    /**
     * 资源所属实体对目标实体授予目标资源的相应权限。
     * @param {GrantResourceAuthorizationRequest} req
     * @param {function(string, GrantResourceAuthorizationResponse):void} cb
     * @public
     */
    GrantResourceAuthorization(req, cb) {
        const resp = new GrantResourceAuthorizationResponse();
        this.request("GrantResourceAuthorization", req, resp, cb);
    }
    /**
     * 根据检索条件搜索素材，返回素材的基本信息。
     * @param {SearchMaterialRequest} req
     * @param {function(string, SearchMaterialResponse):void} cb
     * @public
     */
    SearchMaterial(req, cb) {
        const resp = new SearchMaterialResponse();
        this.request("SearchMaterial", req, resp, cb);
    }
    /**
     *  资源所属实体对目标实体回收目标资源的相应权限，若原本没有相应权限则不产生变更。
     * @param {RevokeResourceAuthorizationRequest} req
     * @param {function(string, RevokeResourceAuthorizationResponse):void} cb
     * @public
     */
    RevokeResourceAuthorization(req, cb) {
        const resp = new RevokeResourceAuthorizationResponse();
        this.request("RevokeResourceAuthorization", req, resp, cb);
    }
    /**
     * 获取指定的团队成员所加入的团队列表。
     * @param {DescribeJoinTeamsRequest} req
     * @param {function(string, DescribeJoinTeamsResponse):void} cb
     * @public
     */
    DescribeJoinTeams(req, cb) {
        const resp = new DescribeJoinTeamsResponse();
        this.request("DescribeJoinTeams", req, resp, cb);
    }
    /**
     * 查询指定资源的授权列表。
     * @param {DescribeResourceAuthorizationRequest} req
     * @param {function(string, DescribeResourceAuthorizationResponse):void} cb
     * @public
     */
    DescribeResourceAuthorization(req, cb) {
        const resp = new DescribeResourceAuthorizationResponse();
        this.request("DescribeResourceAuthorization", req, resp, cb);
    }
    /**
     * 将云点播媒资文件导入到云剪素材库。
     * @param {ImportMaterialRequest} req
     * @param {function(string, ImportMaterialResponse):void} cb
     * @public
     */
    ImportMaterial(req, cb) {
        const resp = new ImportMaterialResponse();
        this.request("ImportMaterial", req, resp, cb);
    }
    /**
     * 使用在线编辑轨道数据直接导出视频。
     * @param {ExportVideoByEditorTrackDataRequest} req
     * @param {function(string, ExportVideoByEditorTrackDataResponse):void} cb
     * @public
     */
    ExportVideoByEditorTrackData(req, cb) {
        const resp = new ExportVideoByEditorTrackDataResponse();
        this.request("ExportVideoByEditorTrackData", req, resp, cb);
    }
    /**
     * 获取任务详情信息，包含下面几个部分：
<li>任务基础信息：包括任务状态、错误信息、创建时间等；</li>
<li>导出项目输出信息：包括输出的素材 Id 等。</li>
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        const resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }
    /**
     *  创建素材链接或分类路径链接，将源资源信息链接到目标。
     * @param {CreateLinkRequest} req
     * @param {function(string, CreateLinkResponse):void} cb
     * @public
     */
    CreateLink(req, cb) {
        const resp = new CreateLinkResponse();
        this.request("CreateLink", req, resp, cb);
    }
    /**
     * 修改团队信息，目前支持修改的操作有：
<li>修改团队名称。</li>
     * @param {ModifyTeamRequest} req
     * @param {function(string, ModifyTeamResponse):void} cb
     * @public
     */
    ModifyTeam(req, cb) {
        const resp = new ModifyTeamResponse();
        this.request("ModifyTeam", req, resp, cb);
    }
    /**
     * 根据素材 Id 删除素材。
     * @param {DeleteMaterialRequest} req
     * @param {function(string, DeleteMaterialResponse):void} cb
     * @public
     */
    DeleteMaterial(req, cb) {
        const resp = new DeleteMaterialResponse();
        this.request("DeleteMaterial", req, resp, cb);
    }
    /**
     * 修改素材信息，支持修改素材名称、分类路径、标签等信息。
     * @param {ModifyMaterialRequest} req
     * @param {function(string, ModifyMaterialResponse):void} cb
     * @public
     */
    ModifyMaterial(req, cb) {
        const resp = new ModifyMaterialResponse();
        this.request("ModifyMaterial", req, resp, cb);
    }
    /**
     * 删除一个团队。
<li>要删除的团队必须没有归属的素材；</li>
<li>要删除的团队必须没有归属的分类。</li>
     * @param {DeleteTeamRequest} req
     * @param {function(string, DeleteTeamResponse):void} cb
     * @public
     */
    DeleteTeam(req, cb) {
        const resp = new DeleteTeamResponse();
        this.request("DeleteTeam", req, resp, cb);
    }
    /**
     * 向一个团队中团队成员，并且指定成员的角色。
     * @param {AddTeamMemberRequest} req
     * @param {function(string, AddTeamMemberResponse):void} cb
     * @public
     */
    AddTeamMember(req, cb) {
        const resp = new AddTeamMemberResponse();
        this.request("AddTeamMember", req, resp, cb);
    }
    /**
     * 移动某一个分类到另外一个分类下，也可用于分类重命名。
<li>如果 SourceClassPath = /素材/视频/NBA，DestinationClassPath = /素材/视频/篮球，当 DestinationClassPath 不存在时候，操作结果为重命名 ClassPath，如果 DestinationClassPath 存在时候，操作结果为产生新目录 /素材/视频/篮球/NBA。</li>
     * @param {MoveClassRequest} req
     * @param {function(string, MoveClassResponse):void} cb
     * @public
     */
    MoveClass(req, cb) {
        const resp = new MoveClassResponse();
        this.request("MoveClass", req, resp, cb);
    }
    /**
     * 修改团队成员信息，包括成员备注、角色等。
     * @param {ModifyTeamMemberRequest} req
     * @param {function(string, ModifyTeamMemberResponse):void} cb
     * @public
     */
    ModifyTeamMember(req, cb) {
        const resp = new ModifyTeamMemberResponse();
        this.request("ModifyTeamMember", req, resp, cb);
    }
    /**
     * 将团队成员从团队中删除，默认只有 Owner 及管理员才有此权限。
     * @param {DeleteTeamMembersRequest} req
     * @param {function(string, DeleteTeamMembersResponse):void} cb
     * @public
     */
    DeleteTeamMembers(req, cb) {
        const resp = new DeleteTeamMembersResponse();
        this.request("DeleteTeamMembers", req, resp, cb);
    }
    /**
     * 删除用户登录态，使用户登出云剪平台。
     * @param {DeleteLoginStatusRequest} req
     * @param {function(string, DeleteLoginStatusResponse):void} cb
     * @public
     */
    DeleteLoginStatus(req, cb) {
        const resp = new DeleteLoginStatusResponse();
        this.request("DeleteLoginStatus", req, resp, cb);
    }
    /**
     * 支持根据多种条件过滤出项目列表。
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        const resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }
    /**
     * 查询指定用户的登录态。
     * @param {DescribeLoginStatusRequest} req
     * @param {function(string, DescribeLoginStatusResponse):void} cb
     * @public
     */
    DescribeLoginStatus(req, cb) {
        const resp = new DescribeLoginStatusResponse();
        this.request("DescribeLoginStatus", req, resp, cb);
    }
    /**
     * 获取任务列表，支持条件筛选，返回对应的任务基础信息列表。
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        const resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }
    /**
     * 获取指定归属者下所有的分类信息。
     * @param {DescribeClassRequest} req
     * @param {function(string, DescribeClassResponse):void} cb
     * @public
     */
    DescribeClass(req, cb) {
        const resp = new DescribeClassResponse();
        this.request("DescribeClass", req, resp, cb);
    }
    /**
     * 创建一个团队。
     * @param {CreateTeamRequest} req
     * @param {function(string, CreateTeamResponse):void} cb
     * @public
     */
    CreateTeam(req, cb) {
        const resp = new CreateTeamResponse();
        this.request("CreateTeam", req, resp, cb);
    }
    /**
     * 修改云剪编辑项目的信息。
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        const resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }
    /**
     * 新增分类，用于管理素材。
<li>分类层数不能超过10；</li>
<li>子分类数不能超过10。</li>
     * @param {CreateClassRequest} req
     * @param {function(string, CreateClassResponse):void} cb
     * @public
     */
    CreateClass(req, cb) {
        const resp = new CreateClassResponse();
        this.request("CreateClass", req, resp, cb);
    }
    /**
     * 将云点播中的媒资添加到素材库中，供后续视频编辑使用。
     * @param {ImportMediaToProjectRequest} req
     * @param {function(string, ImportMediaToProjectResponse):void} cb
     * @public
     */
    ImportMediaToProject(req, cb) {
        const resp = new ImportMediaToProjectResponse();
        this.request("ImportMediaToProject", req, resp, cb);
    }
    /**
     *  浏览当前分类路径下的资源，包括素材和子分类。
     * @param {ListMediaRequest} req
     * @param {function(string, ListMediaResponse):void} cb
     * @public
     */
    ListMedia(req, cb) {
        const resp = new ListMediaResponse();
        this.request("ListMedia", req, resp, cb);
    }
    /**
     * 创建云剪的编辑项目，支持创建视频剪辑及直播剪辑两大类项目。

     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        const resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }
    /**
     * 删除分类信息，删除时检验下述限制：
<li>分类路径必须存在；</li>
<li>分类下没有绑定素材。</li>
     * @param {DeleteClassRequest} req
     * @param {function(string, DeleteClassResponse):void} cb
     * @public
     */
    DeleteClass(req, cb) {
        const resp = new DeleteClassResponse();
        this.request("DeleteClass", req, resp, cb);
    }
    /**
     * 删除云剪编辑项目。
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        const resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }
    /**
     * 平铺分类路径下及其子分类下的所有素材。
     * @param {FlattenListMediaRequest} req
     * @param {function(string, FlattenListMediaResponse):void} cb
     * @public
     */
    FlattenListMedia(req, cb) {
        const resp = new FlattenListMediaResponse();
        this.request("FlattenListMedia", req, resp, cb);
    }
    /**
     * 获取指定成员 ID 的信息，同时支持拉取所有团队成员信息。
     * @param {DescribeTeamMembersRequest} req
     * @param {function(string, DescribeTeamMembersResponse):void} cb
     * @public
     */
    DescribeTeamMembers(req, cb) {
        const resp = new DescribeTeamMembersResponse();
        this.request("DescribeTeamMembers", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cme_client.js.map