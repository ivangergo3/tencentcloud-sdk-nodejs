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
const MoveOrganizationMembersToNodeRequest = models_1.Models.MoveOrganizationMembersToNodeRequest;
const GetOrganizationRequest = models_1.Models.GetOrganizationRequest;
const ListOrganizationMembersRequest = models_1.Models.ListOrganizationMembersRequest;
const DeleteOrganizationMemberFromNodeRequest = models_1.Models.DeleteOrganizationMemberFromNodeRequest;
const OrgMember = models_1.Models.OrgMember;
const UpdateOrganizationNodeResponse = models_1.Models.UpdateOrganizationNodeResponse;
const GetOrganizationMemberResponse = models_1.Models.GetOrganizationMemberResponse;
const CreateOrganizationRequest = models_1.Models.CreateOrganizationRequest;
const DeleteOrganizationRequest = models_1.Models.DeleteOrganizationRequest;
const QuitOrganizationResponse = models_1.Models.QuitOrganizationResponse;
const UpdateOrganizationMemberResponse = models_1.Models.UpdateOrganizationMemberResponse;
const DeleteOrganizationMembersRequest = models_1.Models.DeleteOrganizationMembersRequest;
const CreateOrganizationResponse = models_1.Models.CreateOrganizationResponse;
const DeleteOrganizationNodesRequest = models_1.Models.DeleteOrganizationNodesRequest;
const AddOrganizationNodeResponse = models_1.Models.AddOrganizationNodeResponse;
const ListOrganizationInvitationsResponse = models_1.Models.ListOrganizationInvitationsResponse;
const AcceptOrganizationInvitationRequest = models_1.Models.AcceptOrganizationInvitationRequest;
const ListOrganizationNodeMembersResponse = models_1.Models.ListOrganizationNodeMembersResponse;
const GetOrganizationMemberRequest = models_1.Models.GetOrganizationMemberRequest;
const DenyOrganizationInvitationResponse = models_1.Models.DenyOrganizationInvitationResponse;
const SendOrganizationInvitationResponse = models_1.Models.SendOrganizationInvitationResponse;
const OrgInvitation = models_1.Models.OrgInvitation;
const UpdateOrganizationMemberRequest = models_1.Models.UpdateOrganizationMemberRequest;
const QuitOrganizationRequest = models_1.Models.QuitOrganizationRequest;
const ListOrganizationInvitationsRequest = models_1.Models.ListOrganizationInvitationsRequest;
const AddOrganizationNodeRequest = models_1.Models.AddOrganizationNodeRequest;
const ListOrganizationNodeMembersRequest = models_1.Models.ListOrganizationNodeMembersRequest;
const UpdateOrganizationNodeRequest = models_1.Models.UpdateOrganizationNodeRequest;
const CancelOrganizationInvitationRequest = models_1.Models.CancelOrganizationInvitationRequest;
const DeleteOrganizationMemberFromNodeResponse = models_1.Models.DeleteOrganizationMemberFromNodeResponse;
const DenyOrganizationInvitationRequest = models_1.Models.DenyOrganizationInvitationRequest;
const DeleteOrganizationNodesResponse = models_1.Models.DeleteOrganizationNodesResponse;
const DeleteOrganizationResponse = models_1.Models.DeleteOrganizationResponse;
const CancelOrganizationInvitationResponse = models_1.Models.CancelOrganizationInvitationResponse;
const AcceptOrganizationInvitationResponse = models_1.Models.AcceptOrganizationInvitationResponse;
const ListOrganizationNodesRequest = models_1.Models.ListOrganizationNodesRequest;
const SendOrganizationInvitationRequest = models_1.Models.SendOrganizationInvitationRequest;
const DeleteOrganizationMembersResponse = models_1.Models.DeleteOrganizationMembersResponse;
const GetOrganizationResponse = models_1.Models.GetOrganizationResponse;
const ListOrganizationMembersResponse = models_1.Models.ListOrganizationMembersResponse;
const ListOrganizationNodesResponse = models_1.Models.ListOrganizationNodesResponse;
const MoveOrganizationMembersToNodeResponse = models_1.Models.MoveOrganizationMembersToNodeResponse;
const OrgNode = models_1.Models.OrgNode;
/**
 * organization client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("organization.tencentcloudapi.com", "2018-12-25", credential, region, profile);
    }
    /**
     * 拒绝企业组织邀请
     * @param {DenyOrganizationInvitationRequest} req
     * @param {function(string, DenyOrganizationInvitationResponse):void} cb
     * @public
     */
    DenyOrganizationInvitation(req, cb) {
        const resp = new DenyOrganizationInvitationResponse();
        this.request("DenyOrganizationInvitation", req, resp, cb);
    }
    /**
     * 获取邀请信息列表
     * @param {ListOrganizationInvitationsRequest} req
     * @param {function(string, ListOrganizationInvitationsResponse):void} cb
     * @public
     */
    ListOrganizationInvitations(req, cb) {
        const resp = new ListOrganizationInvitationsResponse();
        this.request("ListOrganizationInvitations", req, resp, cb);
    }
    /**
     * 更新企业组织单元
     * @param {UpdateOrganizationNodeRequest} req
     * @param {function(string, UpdateOrganizationNodeResponse):void} cb
     * @public
     */
    UpdateOrganizationNode(req, cb) {
        const resp = new UpdateOrganizationNodeResponse();
        this.request("UpdateOrganizationNode", req, resp, cb);
    }
    /**
     * 接受加入企业组织邀请
     * @param {AcceptOrganizationInvitationRequest} req
     * @param {function(string, AcceptOrganizationInvitationResponse):void} cb
     * @public
     */
    AcceptOrganizationInvitation(req, cb) {
        const resp = new AcceptOrganizationInvitationResponse();
        this.request("AcceptOrganizationInvitation", req, resp, cb);
    }
    /**
     * 获取企业组织成员
     * @param {GetOrganizationMemberRequest} req
     * @param {function(string, GetOrganizationMemberResponse):void} cb
     * @public
     */
    GetOrganizationMember(req, cb) {
        const resp = new GetOrganizationMemberResponse();
        this.request("GetOrganizationMember", req, resp, cb);
    }
    /**
     * 获取企业组织信息
     * @param {GetOrganizationRequest} req
     * @param {function(string, GetOrganizationResponse):void} cb
     * @public
     */
    GetOrganization(req, cb) {
        const resp = new GetOrganizationResponse();
        this.request("GetOrganization", req, resp, cb);
    }
    /**
     * 获取企业组织单元列表
     * @param {ListOrganizationNodesRequest} req
     * @param {function(string, ListOrganizationNodesResponse):void} cb
     * @public
     */
    ListOrganizationNodes(req, cb) {
        const resp = new ListOrganizationNodesResponse();
        this.request("ListOrganizationNodes", req, resp, cb);
    }
    /**
     * 更新企业成员信息
     * @param {UpdateOrganizationMemberRequest} req
     * @param {function(string, UpdateOrganizationMemberResponse):void} cb
     * @public
     */
    UpdateOrganizationMember(req, cb) {
        const resp = new UpdateOrganizationMemberResponse();
        this.request("UpdateOrganizationMember", req, resp, cb);
    }
    /**
     * 退出企业组织
     * @param {QuitOrganizationRequest} req
     * @param {function(string, QuitOrganizationResponse):void} cb
     * @public
     */
    QuitOrganization(req, cb) {
        const resp = new QuitOrganizationResponse();
        this.request("QuitOrganization", req, resp, cb);
    }
    /**
     * 批量删除企业组织单元
     * @param {DeleteOrganizationNodesRequest} req
     * @param {function(string, DeleteOrganizationNodesResponse):void} cb
     * @public
     */
    DeleteOrganizationNodes(req, cb) {
        const resp = new DeleteOrganizationNodesResponse();
        this.request("DeleteOrganizationNodes", req, resp, cb);
    }
    /**
     * 获取企业组织成员列表
     * @param {ListOrganizationMembersRequest} req
     * @param {function(string, ListOrganizationMembersResponse):void} cb
     * @public
     */
    ListOrganizationMembers(req, cb) {
        const resp = new ListOrganizationMembersResponse();
        this.request("ListOrganizationMembers", req, resp, cb);
    }
    /**
     * 删除企业组织成员
     * @param {DeleteOrganizationMemberFromNodeRequest} req
     * @param {function(string, DeleteOrganizationMemberFromNodeResponse):void} cb
     * @public
     */
    DeleteOrganizationMemberFromNode(req, cb) {
        const resp = new DeleteOrganizationMemberFromNodeResponse();
        this.request("DeleteOrganizationMemberFromNode", req, resp, cb);
    }
    /**
     * 添加企业组织单元
     * @param {AddOrganizationNodeRequest} req
     * @param {function(string, AddOrganizationNodeResponse):void} cb
     * @public
     */
    AddOrganizationNode(req, cb) {
        const resp = new AddOrganizationNodeResponse();
        this.request("AddOrganizationNode", req, resp, cb);
    }
    /**
     * 发送企业组织邀请
     * @param {SendOrganizationInvitationRequest} req
     * @param {function(string, SendOrganizationInvitationResponse):void} cb
     * @public
     */
    SendOrganizationInvitation(req, cb) {
        const resp = new SendOrganizationInvitationResponse();
        this.request("SendOrganizationInvitation", req, resp, cb);
    }
    /**
     * 取消企业组织邀请
     * @param {CancelOrganizationInvitationRequest} req
     * @param {function(string, CancelOrganizationInvitationResponse):void} cb
     * @public
     */
    CancelOrganizationInvitation(req, cb) {
        const resp = new CancelOrganizationInvitationResponse();
        this.request("CancelOrganizationInvitation", req, resp, cb);
    }
    /**
     * 删除企业组织
     * @param {DeleteOrganizationRequest} req
     * @param {function(string, DeleteOrganizationResponse):void} cb
     * @public
     */
    DeleteOrganization(req, cb) {
        const resp = new DeleteOrganizationResponse();
        this.request("DeleteOrganization", req, resp, cb);
    }
    /**
     * 批量删除企业组织成员
     * @param {DeleteOrganizationMembersRequest} req
     * @param {function(string, DeleteOrganizationMembersResponse):void} cb
     * @public
     */
    DeleteOrganizationMembers(req, cb) {
        const resp = new DeleteOrganizationMembersResponse();
        this.request("DeleteOrganizationMembers", req, resp, cb);
    }
    /**
     * 获取企业组织单元成员列表
     * @param {ListOrganizationNodeMembersRequest} req
     * @param {function(string, ListOrganizationNodeMembersResponse):void} cb
     * @public
     */
    ListOrganizationNodeMembers(req, cb) {
        const resp = new ListOrganizationNodeMembersResponse();
        this.request("ListOrganizationNodeMembers", req, resp, cb);
    }
    /**
     * 创建企业组织
     * @param {CreateOrganizationRequest} req
     * @param {function(string, CreateOrganizationResponse):void} cb
     * @public
     */
    CreateOrganization(req, cb) {
        const resp = new CreateOrganizationResponse();
        this.request("CreateOrganization", req, resp, cb);
    }
    /**
     * 移动成员到指定企业组织单元
     * @param {MoveOrganizationMembersToNodeRequest} req
     * @param {function(string, MoveOrganizationMembersToNodeResponse):void} cb
     * @public
     */
    MoveOrganizationMembersToNode(req, cb) {
        const resp = new MoveOrganizationMembersToNodeResponse();
        this.request("MoveOrganizationMembersToNode", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=organization_client.js.map