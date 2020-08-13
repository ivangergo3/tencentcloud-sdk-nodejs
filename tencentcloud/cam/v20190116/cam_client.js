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
const GetUserResponse = models_1.Models.GetUserResponse;
const ListAccessKeysRequest = models_1.Models.ListAccessKeysRequest;
const SetMfaFlagResponse = models_1.Models.SetMfaFlagResponse;
const DeleteUserRequest = models_1.Models.DeleteUserRequest;
const DetachGroupPolicyRequest = models_1.Models.DetachGroupPolicyRequest;
const DescribeRoleListResponse = models_1.Models.DescribeRoleListResponse;
const CreatePolicyResponse = models_1.Models.CreatePolicyResponse;
const GetRoleRequest = models_1.Models.GetRoleRequest;
const CreateServiceLinkedRoleRequest = models_1.Models.CreateServiceLinkedRoleRequest;
const ListAttachedGroupPoliciesRequest = models_1.Models.ListAttachedGroupPoliciesRequest;
const ListGroupsForUserRequest = models_1.Models.ListGroupsForUserRequest;
const AttachRolePolicyResponse = models_1.Models.AttachRolePolicyResponse;
const GetServiceLinkedRoleDeletionStatusResponse = models_1.Models.GetServiceLinkedRoleDeletionStatusResponse;
const DeleteUserPermissionsBoundaryResponse = models_1.Models.DeleteUserPermissionsBoundaryResponse;
const ListUsersResponse = models_1.Models.ListUsersResponse;
const UpdateRoleDescriptionResponse = models_1.Models.UpdateRoleDescriptionResponse;
const DetachUserPolicyRequest = models_1.Models.DetachUserPolicyRequest;
const ListGroupsResponse = models_1.Models.ListGroupsResponse;
const ListPolicyVersionsRequest = models_1.Models.ListPolicyVersionsRequest;
const GetCustomMFATokenInfoRequest = models_1.Models.GetCustomMFATokenInfoRequest;
const DescribeRoleListRequest = models_1.Models.DescribeRoleListRequest;
const GetGroupRequest = models_1.Models.GetGroupRequest;
const DeleteRoleResponse = models_1.Models.DeleteRoleResponse;
const PolicyVersionItem = models_1.Models.PolicyVersionItem;
const DeleteUserPermissionsBoundaryRequest = models_1.Models.DeleteUserPermissionsBoundaryRequest;
const ListSAMLProvidersRequest = models_1.Models.ListSAMLProvidersRequest;
const ListGroupsRequest = models_1.Models.ListGroupsRequest;
const DeletePolicyVersionResponse = models_1.Models.DeletePolicyVersionResponse;
const UpdateSAMLProviderRequest = models_1.Models.UpdateSAMLProviderRequest;
const UpdateAssumeRolePolicyRequest = models_1.Models.UpdateAssumeRolePolicyRequest;
const ListGroupsForUserResponse = models_1.Models.ListGroupsForUserResponse;
const ListUsersForGroupRequest = models_1.Models.ListUsersForGroupRequest;
const RemoveUserFromGroupRequest = models_1.Models.RemoveUserFromGroupRequest;
const CreatePolicyVersionResponse = models_1.Models.CreatePolicyVersionResponse;
const ListPoliciesResponse = models_1.Models.ListPoliciesResponse;
const GroupIdOfUidInfo = models_1.Models.GroupIdOfUidInfo;
const UpdateRoleDescriptionRequest = models_1.Models.UpdateRoleDescriptionRequest;
const SetDefaultPolicyVersionRequest = models_1.Models.SetDefaultPolicyVersionRequest;
const RoleInfo = models_1.Models.RoleInfo;
const CreatePolicyVersionRequest = models_1.Models.CreatePolicyVersionRequest;
const DeleteGroupRequest = models_1.Models.DeleteGroupRequest;
const ListAttachedRolePoliciesResponse = models_1.Models.ListAttachedRolePoliciesResponse;
const DeleteUserResponse = models_1.Models.DeleteUserResponse;
const DetachRolePolicyRequest = models_1.Models.DetachRolePolicyRequest;
const DeleteRolePermissionsBoundaryRequest = models_1.Models.DeleteRolePermissionsBoundaryRequest;
const StrategyInfo = models_1.Models.StrategyInfo;
const DeletePolicyRequest = models_1.Models.DeletePolicyRequest;
const GroupInfo = models_1.Models.GroupInfo;
const AddUserRequest = models_1.Models.AddUserRequest;
const DeleteRoleRequest = models_1.Models.DeleteRoleRequest;
const UpdateRoleConsoleLoginRequest = models_1.Models.UpdateRoleConsoleLoginRequest;
const GetCustomMFATokenInfoResponse = models_1.Models.GetCustomMFATokenInfoResponse;
const UpdateAssumeRolePolicyResponse = models_1.Models.UpdateAssumeRolePolicyResponse;
const ListAttachedUserPoliciesResponse = models_1.Models.ListAttachedUserPoliciesResponse;
const CreateSAMLProviderResponse = models_1.Models.CreateSAMLProviderResponse;
const DeleteRolePermissionsBoundaryResponse = models_1.Models.DeleteRolePermissionsBoundaryResponse;
const GetUserRequest = models_1.Models.GetUserRequest;
const LoginActionMfaFlag = models_1.Models.LoginActionMfaFlag;
const SubAccountInfo = models_1.Models.SubAccountInfo;
const CreateGroupRequest = models_1.Models.CreateGroupRequest;
const SAMLProviderInfo = models_1.Models.SAMLProviderInfo;
const UpdateSAMLProviderResponse = models_1.Models.UpdateSAMLProviderResponse;
const UpdateUserRequest = models_1.Models.UpdateUserRequest;
const CreateSAMLProviderRequest = models_1.Models.CreateSAMLProviderRequest;
const AttachPolicyInfo = models_1.Models.AttachPolicyInfo;
const PutRolePermissionsBoundaryRequest = models_1.Models.PutRolePermissionsBoundaryRequest;
const UpdateRoleConsoleLoginResponse = models_1.Models.UpdateRoleConsoleLoginResponse;
const AttachRolePolicyRequest = models_1.Models.AttachRolePolicyRequest;
const ConsumeCustomMFATokenResponse = models_1.Models.ConsumeCustomMFATokenResponse;
const AttachUserPolicyRequest = models_1.Models.AttachUserPolicyRequest;
const ListAttachedGroupPoliciesResponse = models_1.Models.ListAttachedGroupPoliciesResponse;
const GetPolicyVersionRequest = models_1.Models.GetPolicyVersionRequest;
const PutUserPermissionsBoundaryResponse = models_1.Models.PutUserPermissionsBoundaryResponse;
const DeletePolicyResponse = models_1.Models.DeletePolicyResponse;
const ConsumeCustomMFATokenRequest = models_1.Models.ConsumeCustomMFATokenRequest;
const AccessKey = models_1.Models.AccessKey;
const GetGroupResponse = models_1.Models.GetGroupResponse;
const DeleteSAMLProviderRequest = models_1.Models.DeleteSAMLProviderRequest;
const DeleteSAMLProviderResponse = models_1.Models.DeleteSAMLProviderResponse;
const UpdateUserResponse = models_1.Models.UpdateUserResponse;
const CreateServiceLinkedRoleResponse = models_1.Models.CreateServiceLinkedRoleResponse;
const ListUsersRequest = models_1.Models.ListUsersRequest;
const ListCollaboratorsRequest = models_1.Models.ListCollaboratorsRequest;
const UpdatePolicyResponse = models_1.Models.UpdatePolicyResponse;
const AttachGroupPolicyResponse = models_1.Models.AttachGroupPolicyResponse;
const UpdateGroupResponse = models_1.Models.UpdateGroupResponse;
const ListEntitiesForPolicyRequest = models_1.Models.ListEntitiesForPolicyRequest;
const ListPoliciesRequest = models_1.Models.ListPoliciesRequest;
const GetServiceLinkedRoleDeletionStatusRequest = models_1.Models.GetServiceLinkedRoleDeletionStatusRequest;
const DetachGroupPolicyResponse = models_1.Models.DetachGroupPolicyResponse;
const CreatePolicyRequest = models_1.Models.CreatePolicyRequest;
const DeletePolicyVersionRequest = models_1.Models.DeletePolicyVersionRequest;
const UpdateGroupRequest = models_1.Models.UpdateGroupRequest;
const GetPolicyVersionResponse = models_1.Models.GetPolicyVersionResponse;
const CreateRoleResponse = models_1.Models.CreateRoleResponse;
const GetSAMLProviderResponse = models_1.Models.GetSAMLProviderResponse;
const ListPolicyVersionsResponse = models_1.Models.ListPolicyVersionsResponse;
const GetPolicyRequest = models_1.Models.GetPolicyRequest;
const AddUserToGroupRequest = models_1.Models.AddUserToGroupRequest;
const RemoveUserFromGroupResponse = models_1.Models.RemoveUserFromGroupResponse;
const DetachRolePolicyResponse = models_1.Models.DetachRolePolicyResponse;
const AttachedPolicyOfRole = models_1.Models.AttachedPolicyOfRole;
const PutUserPermissionsBoundaryRequest = models_1.Models.PutUserPermissionsBoundaryRequest;
const ListSAMLProvidersResponse = models_1.Models.ListSAMLProvidersResponse;
const SetDefaultPolicyVersionResponse = models_1.Models.SetDefaultPolicyVersionResponse;
const ListAttachedRolePoliciesRequest = models_1.Models.ListAttachedRolePoliciesRequest;
const GetSAMLProviderRequest = models_1.Models.GetSAMLProviderRequest;
const DetachUserPolicyResponse = models_1.Models.DetachUserPolicyResponse;
const GetRoleResponse = models_1.Models.GetRoleResponse;
const CreateRoleRequest = models_1.Models.CreateRoleRequest;
const DeleteServiceLinkedRoleResponse = models_1.Models.DeleteServiceLinkedRoleResponse;
const GetPolicyResponse = models_1.Models.GetPolicyResponse;
const DeleteGroupResponse = models_1.Models.DeleteGroupResponse;
const AttachGroupPolicyRequest = models_1.Models.AttachGroupPolicyRequest;
const DeleteServiceLinkedRoleRequest = models_1.Models.DeleteServiceLinkedRoleRequest;
const AttachEntityOfPolicy = models_1.Models.AttachEntityOfPolicy;
const ListUsersForGroupResponse = models_1.Models.ListUsersForGroupResponse;
const PolicyVersionDetail = models_1.Models.PolicyVersionDetail;
const AddUserResponse = models_1.Models.AddUserResponse;
const ListEntitiesForPolicyResponse = models_1.Models.ListEntitiesForPolicyResponse;
const AddUserToGroupResponse = models_1.Models.AddUserToGroupResponse;
const AttachUserPolicyResponse = models_1.Models.AttachUserPolicyResponse;
const PutRolePermissionsBoundaryResponse = models_1.Models.PutRolePermissionsBoundaryResponse;
const SetMfaFlagRequest = models_1.Models.SetMfaFlagRequest;
const ListCollaboratorsResponse = models_1.Models.ListCollaboratorsResponse;
const ListAccessKeysResponse = models_1.Models.ListAccessKeysResponse;
const ListAttachedUserPoliciesRequest = models_1.Models.ListAttachedUserPoliciesRequest;
const UpdatePolicyRequest = models_1.Models.UpdatePolicyRequest;
const GroupMemberInfo = models_1.Models.GroupMemberInfo;
const CreateGroupResponse = models_1.Models.CreateGroupResponse;
/**
 * cam client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cam.tencentcloudapi.com", "2019-01-16", credential, region, profile);
    }
    /**
     * 设置子用户的登录保护和敏感操作校验方式
     * @param {SetMfaFlagRequest} req
     * @param {function(string, SetMfaFlagResponse):void} cb
     * @public
     */
    SetMfaFlag(req, cb) {
        const resp = new SetMfaFlagResponse();
        this.request("SetMfaFlag", req, resp, cb);
    }
    /**
     * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
     * @param {UpdateRoleConsoleLoginRequest} req
     * @param {function(string, UpdateRoleConsoleLoginResponse):void} cb
     * @public
     */
    UpdateRoleConsoleLogin(req, cb) {
        const resp = new UpdateRoleConsoleLoginResponse();
        this.request("UpdateRoleConsoleLogin", req, resp, cb);
    }
    /**
     * 创建用户组
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        const resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }
    /**
     * 删除服务相关角色
     * @param {DeleteServiceLinkedRoleRequest} req
     * @param {function(string, DeleteServiceLinkedRoleResponse):void} cb
     * @public
     */
    DeleteServiceLinkedRole(req, cb) {
        const resp = new DeleteServiceLinkedRoleResponse();
        this.request("DeleteServiceLinkedRole", req, resp, cb);
    }
    /**
     * 添加子用户
     * @param {AddUserRequest} req
     * @param {function(string, AddUserResponse):void} cb
     * @public
     */
    AddUser(req, cb) {
        const resp = new AddUserResponse();
        this.request("AddUser", req, resp, cb);
    }
    /**
     * 创建服务相关角色
     * @param {CreateServiceLinkedRoleRequest} req
     * @param {function(string, CreateServiceLinkedRoleResponse):void} cb
     * @public
     */
    CreateServiceLinkedRole(req, cb) {
        const resp = new CreateServiceLinkedRoleResponse();
        this.request("CreateServiceLinkedRole", req, resp, cb);
    }
    /**
     * 查询SAML身份提供商详情
     * @param {GetSAMLProviderRequest} req
     * @param {function(string, GetSAMLProviderResponse):void} cb
     * @public
     */
    GetSAMLProvider(req, cb) {
        const resp = new GetSAMLProviderResponse();
        this.request("GetSAMLProvider", req, resp, cb);
    }
    /**
     * 查询SAML身份提供商列表
     * @param {ListSAMLProvidersRequest} req
     * @param {function(string, ListSAMLProvidersResponse):void} cb
     * @public
     */
    ListSAMLProviders(req, cb) {
        const resp = new ListSAMLProvidersResponse();
        this.request("ListSAMLProviders", req, resp, cb);
    }
    /**
     * 本接口（CreateRole）用于创建角色。
     * @param {CreateRoleRequest} req
     * @param {function(string, CreateRoleResponse):void} cb
     * @public
     */
    CreateRole(req, cb) {
        const resp = new CreateRoleResponse();
        this.request("CreateRole", req, resp, cb);
    }
    /**
     * 设置角色权限边界
     * @param {PutRolePermissionsBoundaryRequest} req
     * @param {function(string, PutRolePermissionsBoundaryResponse):void} cb
     * @public
     */
    PutRolePermissionsBoundary(req, cb) {
        const resp = new PutRolePermissionsBoundaryResponse();
        this.request("PutRolePermissionsBoundary", req, resp, cb);
    }
    /**
     * 拉取子用户
     * @param {ListUsersRequest} req
     * @param {function(string, ListUsersResponse):void} cb
     * @public
     */
    ListUsers(req, cb) {
        const resp = new ListUsersResponse();
        this.request("ListUsers", req, resp, cb);
    }
    /**
     * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
     * @param {ListAttachedRolePoliciesRequest} req
     * @param {function(string, ListAttachedRolePoliciesResponse):void} cb
     * @public
     */
    ListAttachedRolePolicies(req, cb) {
        const resp = new ListAttachedRolePoliciesResponse();
        this.request("ListAttachedRolePolicies", req, resp, cb);
    }
    /**
     * 本接口（DeletePolicy）可用于删除策略。
     * @param {DeletePolicyRequest} req
     * @param {function(string, DeletePolicyResponse):void} cb
     * @public
     */
    DeletePolicy(req, cb) {
        const resp = new DeletePolicyResponse();
        this.request("DeletePolicy", req, resp, cb);
    }
    /**
     * 删除角色权限边界
     * @param {DeleteRolePermissionsBoundaryRequest} req
     * @param {function(string, DeleteRolePermissionsBoundaryResponse):void} cb
     * @public
     */
    DeleteRolePermissionsBoundary(req, cb) {
        const resp = new DeleteRolePermissionsBoundaryResponse();
        this.request("DeleteRolePermissionsBoundary", req, resp, cb);
    }
    /**
     * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
     * @param {DeletePolicyVersionRequest} req
     * @param {function(string, DeletePolicyVersionResponse):void} cb
     * @public
     */
    DeletePolicyVersion(req, cb) {
        const resp = new DeletePolicyVersionResponse();
        this.request("DeletePolicyVersion", req, resp, cb);
    }
    /**
     * 本接口（DetachRolePolicy）用于解除绑定角色的策略。
     * @param {DetachRolePolicyRequest} req
     * @param {function(string, DetachRolePolicyResponse):void} cb
     * @public
     */
    DetachRolePolicy(req, cb) {
        const resp = new DetachRolePolicyResponse();
        this.request("DetachRolePolicy", req, resp, cb);
    }
    /**
     * 本接口（DescribeRoleList）用于获取账号下的角色列表。
     * @param {DescribeRoleListRequest} req
     * @param {function(string, DescribeRoleListResponse):void} cb
     * @public
     */
    DescribeRoleList(req, cb) {
        const resp = new DescribeRoleListResponse();
        this.request("DescribeRoleList", req, resp, cb);
    }
    /**
     * 创建SAML身份提供商
     * @param {CreateSAMLProviderRequest} req
     * @param {function(string, CreateSAMLProviderResponse):void} cb
     * @public
     */
    CreateSAMLProvider(req, cb) {
        const resp = new CreateSAMLProviderResponse();
        this.request("CreateSAMLProvider", req, resp, cb);
    }
    /**
     * 删除SAML身份提供商
     * @param {DeleteSAMLProviderRequest} req
     * @param {function(string, DeleteSAMLProviderResponse):void} cb
     * @public
     */
    DeleteSAMLProvider(req, cb) {
        const resp = new DeleteSAMLProviderResponse();
        this.request("DeleteSAMLProvider", req, resp, cb);
    }
    /**
     * 更新子用户
     * @param {UpdateUserRequest} req
     * @param {function(string, UpdateUserResponse):void} cb
     * @public
     */
    UpdateUser(req, cb) {
        const resp = new UpdateUserResponse();
        this.request("UpdateUser", req, resp, cb);
    }
    /**
     * 本接口（GetPolicy）可用于查询查看策略详情。
     * @param {GetPolicyRequest} req
     * @param {function(string, GetPolicyResponse):void} cb
     * @public
     */
    GetPolicy(req, cb) {
        const resp = new GetPolicyResponse();
        this.request("GetPolicy", req, resp, cb);
    }
    /**
     * 更新SAML身份提供商信息
     * @param {UpdateSAMLProviderRequest} req
     * @param {function(string, UpdateSAMLProviderResponse):void} cb
     * @public
     */
    UpdateSAMLProvider(req, cb) {
        const resp = new UpdateSAMLProviderResponse();
        this.request("UpdateSAMLProvider", req, resp, cb);
    }
    /**
     * 获取自定义多因子Token关联信息
     * @param {GetCustomMFATokenInfoRequest} req
     * @param {function(string, GetCustomMFATokenInfoResponse):void} cb
     * @public
     */
    GetCustomMFATokenInfo(req, cb) {
        const resp = new GetCustomMFATokenInfoResponse();
        this.request("GetCustomMFATokenInfo", req, resp, cb);
    }
    /**
     * 列出指定CAM用户的访问密钥
     * @param {ListAccessKeysRequest} req
     * @param {function(string, ListAccessKeysResponse):void} cb
     * @public
     */
    ListAccessKeys(req, cb) {
        const resp = new ListAccessKeysResponse();
        this.request("ListAccessKeys", req, resp, cb);
    }
    /**
     * 删除用户组
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        const resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }
    /**
     * 本接口（DeleteRole）用于删除指定角色。
     * @param {DeleteRoleRequest} req
     * @param {function(string, DeleteRoleResponse):void} cb
     * @public
     */
    DeleteRole(req, cb) {
        const resp = new DeleteRoleResponse();
        this.request("DeleteRole", req, resp, cb);
    }
    /**
     * 查询子用户
     * @param {GetUserRequest} req
     * @param {function(string, GetUserResponse):void} cb
     * @public
     */
    GetUser(req, cb) {
        const resp = new GetUserResponse();
        this.request("GetUser", req, resp, cb);
    }
    /**
     * 删除用户权限边界
     * @param {DeleteUserPermissionsBoundaryRequest} req
     * @param {function(string, DeleteUserPermissionsBoundaryResponse):void} cb
     * @public
     */
    DeleteUserPermissionsBoundary(req, cb) {
        const resp = new DeleteUserPermissionsBoundaryResponse();
        this.request("DeleteUserPermissionsBoundary", req, resp, cb);
    }
    /**
     * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
     * @param {ListAttachedGroupPoliciesRequest} req
     * @param {function(string, ListAttachedGroupPoliciesResponse):void} cb
     * @public
     */
    ListAttachedGroupPolicies(req, cb) {
        const resp = new ListAttachedGroupPoliciesResponse();
        this.request("ListAttachedGroupPolicies", req, resp, cb);
    }
    /**
     * 根据删除TaskId获取服务相关角色删除状态
     * @param {GetServiceLinkedRoleDeletionStatusRequest} req
     * @param {function(string, GetServiceLinkedRoleDeletionStatusResponse):void} cb
     * @public
     */
    GetServiceLinkedRoleDeletionStatus(req, cb) {
        const resp = new GetServiceLinkedRoleDeletionStatusResponse();
        this.request("GetServiceLinkedRoleDeletionStatus", req, resp, cb);
    }
    /**
     * 验证自定义多因子Token
     * @param {ConsumeCustomMFATokenRequest} req
     * @param {function(string, ConsumeCustomMFATokenResponse):void} cb
     * @public
     */
    ConsumeCustomMFAToken(req, cb) {
        const resp = new ConsumeCustomMFATokenResponse();
        this.request("ConsumeCustomMFAToken", req, resp, cb);
    }
    /**
     * 查询用户组详情
     * @param {GetGroupRequest} req
     * @param {function(string, GetGroupResponse):void} cb
     * @public
     */
    GetGroup(req, cb) {
        const resp = new GetGroupResponse();
        this.request("GetGroup", req, resp, cb);
    }
    /**
     * 该接口（GetPolicyVersion）用于查询策略版本详情
     * @param {GetPolicyVersionRequest} req
     * @param {function(string, GetPolicyVersionResponse):void} cb
     * @public
     */
    GetPolicyVersion(req, cb) {
        const resp = new GetPolicyVersionResponse();
        this.request("GetPolicyVersion", req, resp, cb);
    }
    /**
     * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
     * @param {UpdateAssumeRolePolicyRequest} req
     * @param {function(string, UpdateAssumeRolePolicyResponse):void} cb
     * @public
     */
    UpdateAssumeRolePolicy(req, cb) {
        const resp = new UpdateAssumeRolePolicyResponse();
        this.request("UpdateAssumeRolePolicy", req, resp, cb);
    }
    /**
     * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
     * @param {SetDefaultPolicyVersionRequest} req
     * @param {function(string, SetDefaultPolicyVersionResponse):void} cb
     * @public
     */
    SetDefaultPolicyVersion(req, cb) {
        const resp = new SetDefaultPolicyVersionResponse();
        this.request("SetDefaultPolicyVersion", req, resp, cb);
    }
    /**
     * 查询用户组列表
     * @param {ListGroupsRequest} req
     * @param {function(string, ListGroupsResponse):void} cb
     * @public
     */
    ListGroups(req, cb) {
        const resp = new ListGroupsResponse();
        this.request("ListGroups", req, resp, cb);
    }
    /**
     * 用户加入到用户组
     * @param {AddUserToGroupRequest} req
     * @param {function(string, AddUserToGroupResponse):void} cb
     * @public
     */
    AddUserToGroup(req, cb) {
        const resp = new AddUserToGroupResponse();
        this.request("AddUserToGroup", req, resp, cb);
    }
    /**
     * 本接口（AttachRolePolicy）用于绑定策略到角色。
     * @param {AttachRolePolicyRequest} req
     * @param {function(string, AttachRolePolicyResponse):void} cb
     * @public
     */
    AttachRolePolicy(req, cb) {
        const resp = new AttachRolePolicyResponse();
        this.request("AttachRolePolicy", req, resp, cb);
    }
    /**
     * 本接口（UpdatePolicy ）可用于更新策略。
如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
     * @param {UpdatePolicyRequest} req
     * @param {function(string, UpdatePolicyResponse):void} cb
     * @public
     */
    UpdatePolicy(req, cb) {
        const resp = new UpdatePolicyResponse();
        this.request("UpdatePolicy", req, resp, cb);
    }
    /**
     * 该接口（ListPolicyVersions）用于获取策略版本列表
     * @param {ListPolicyVersionsRequest} req
     * @param {function(string, ListPolicyVersionsResponse):void} cb
     * @public
     */
    ListPolicyVersions(req, cb) {
        const resp = new ListPolicyVersionsResponse();
        this.request("ListPolicyVersions", req, resp, cb);
    }
    /**
     * 本接口（GetRole）用于获取指定角色的详细信息。
     * @param {GetRoleRequest} req
     * @param {function(string, GetRoleResponse):void} cb
     * @public
     */
    GetRole(req, cb) {
        const resp = new GetRoleResponse();
        this.request("GetRole", req, resp, cb);
    }
    /**
     * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
     * @param {UpdateRoleDescriptionRequest} req
     * @param {function(string, UpdateRoleDescriptionResponse):void} cb
     * @public
     */
    UpdateRoleDescription(req, cb) {
        const resp = new UpdateRoleDescriptionResponse();
        this.request("UpdateRoleDescription", req, resp, cb);
    }
    /**
     * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
     * @param {ListAttachedUserPoliciesRequest} req
     * @param {function(string, ListAttachedUserPoliciesResponse):void} cb
     * @public
     */
    ListAttachedUserPolicies(req, cb) {
        const resp = new ListAttachedUserPoliciesResponse();
        this.request("ListAttachedUserPolicies", req, resp, cb);
    }
    /**
     * 删除子用户
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        const resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }
    /**
     * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
     * @param {CreatePolicyVersionRequest} req
     * @param {function(string, CreatePolicyVersionResponse):void} cb
     * @public
     */
    CreatePolicyVersion(req, cb) {
        const resp = new CreatePolicyVersionResponse();
        this.request("CreatePolicyVersion", req, resp, cb);
    }
    /**
     * 获取协作者列表
     * @param {ListCollaboratorsRequest} req
     * @param {function(string, ListCollaboratorsResponse):void} cb
     * @public
     */
    ListCollaborators(req, cb) {
        const resp = new ListCollaboratorsResponse();
        this.request("ListCollaborators", req, resp, cb);
    }
    /**
     * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
     * @param {DetachGroupPolicyRequest} req
     * @param {function(string, DetachGroupPolicyResponse):void} cb
     * @public
     */
    DetachGroupPolicy(req, cb) {
        const resp = new DetachGroupPolicyResponse();
        this.request("DetachGroupPolicy", req, resp, cb);
    }
    /**
     * 从用户组删除用户
     * @param {RemoveUserFromGroupRequest} req
     * @param {function(string, RemoveUserFromGroupResponse):void} cb
     * @public
     */
    RemoveUserFromGroup(req, cb) {
        const resp = new RemoveUserFromGroupResponse();
        this.request("RemoveUserFromGroup", req, resp, cb);
    }
    /**
     * 本接口（ListPolicies）可用于查询策略列表。
     * @param {ListPoliciesRequest} req
     * @param {function(string, ListPoliciesResponse):void} cb
     * @public
     */
    ListPolicies(req, cb) {
        const resp = new ListPoliciesResponse();
        this.request("ListPolicies", req, resp, cb);
    }
    /**
     * 查询用户组关联的用户列表
     * @param {ListUsersForGroupRequest} req
     * @param {function(string, ListUsersForGroupResponse):void} cb
     * @public
     */
    ListUsersForGroup(req, cb) {
        const resp = new ListUsersForGroupResponse();
        this.request("ListUsersForGroup", req, resp, cb);
    }
    /**
     * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
     * @param {AttachUserPolicyRequest} req
     * @param {function(string, AttachUserPolicyResponse):void} cb
     * @public
     */
    AttachUserPolicy(req, cb) {
        const resp = new AttachUserPolicyResponse();
        this.request("AttachUserPolicy", req, resp, cb);
    }
    /**
     * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
     * @param {ListEntitiesForPolicyRequest} req
     * @param {function(string, ListEntitiesForPolicyResponse):void} cb
     * @public
     */
    ListEntitiesForPolicy(req, cb) {
        const resp = new ListEntitiesForPolicyResponse();
        this.request("ListEntitiesForPolicy", req, resp, cb);
    }
    /**
     * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
     * @param {AttachGroupPolicyRequest} req
     * @param {function(string, AttachGroupPolicyResponse):void} cb
     * @public
     */
    AttachGroupPolicy(req, cb) {
        const resp = new AttachGroupPolicyResponse();
        this.request("AttachGroupPolicy", req, resp, cb);
    }
    /**
     * 更新用户组
     * @param {UpdateGroupRequest} req
     * @param {function(string, UpdateGroupResponse):void} cb
     * @public
     */
    UpdateGroup(req, cb) {
        const resp = new UpdateGroupResponse();
        this.request("UpdateGroup", req, resp, cb);
    }
    /**
     * 设置用户权限边界
     * @param {PutUserPermissionsBoundaryRequest} req
     * @param {function(string, PutUserPermissionsBoundaryResponse):void} cb
     * @public
     */
    PutUserPermissionsBoundary(req, cb) {
        const resp = new PutUserPermissionsBoundaryResponse();
        this.request("PutUserPermissionsBoundary", req, resp, cb);
    }
    /**
     * 本接口（CreatePolicy）可用于创建策略。
     * @param {CreatePolicyRequest} req
     * @param {function(string, CreatePolicyResponse):void} cb
     * @public
     */
    CreatePolicy(req, cb) {
        const resp = new CreatePolicyResponse();
        this.request("CreatePolicy", req, resp, cb);
    }
    /**
     * 本接口（DetachUserPolicy）可用于解除绑定到用户的策略。
     * @param {DetachUserPolicyRequest} req
     * @param {function(string, DetachUserPolicyResponse):void} cb
     * @public
     */
    DetachUserPolicy(req, cb) {
        const resp = new DetachUserPolicyResponse();
        this.request("DetachUserPolicy", req, resp, cb);
    }
    /**
     * 列出用户关联的用户组
     * @param {ListGroupsForUserRequest} req
     * @param {function(string, ListGroupsForUserResponse):void} cb
     * @public
     */
    ListGroupsForUser(req, cb) {
        const resp = new ListGroupsForUserResponse();
        this.request("ListGroupsForUser", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cam_client.js.map