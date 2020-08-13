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
import { AbstractModel } from "../../common/abstract_model"

/**
 * MoveOrganizationMembersToNode请求参数结构体
 * @class
 */
class MoveOrganizationMembersToNodeRequest extends AbstractModel {

    NodeId: number | null
    
    Uins: Array<number> | null
    
    constructor(){
        super();

        /**
         * 组织单元ID
         */
        this.NodeId = null;

        /**
         * 成员UIN列表
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeId: number | null;
        Uins: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * GetOrganization请求参数结构体
 * @class
 */
class GetOrganizationRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * ListOrganizationMembers请求参数结构体
 * @class
 */
class ListOrganizationMembersRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteOrganizationMemberFromNode请求参数结构体
 * @class
 */
class DeleteOrganizationMemberFromNodeRequest extends AbstractModel {

    MemberUin: number | null
    
    NodeId: number | null
    
    constructor(){
        super();

        /**
         * 被删除成员UIN
         */
        this.MemberUin = null;

        /**
         * 组织单元ID
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MemberUin: number | null;
        NodeId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * 企业组织成员
 * @class
 */
class OrgMember extends AbstractModel {

    Uin: number | null
    
    Name: string | null
    
    Remark: string | null
    
    JoinTime: string | null
    
    constructor(){
        super();

        /**
         * UIN
         */
        this.Uin = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 备注
         */
        this.Remark = null;

        /**
         * 加入时间
         */
        this.JoinTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: number | null;
        Name: string | null;
        Remark: string | null;
        JoinTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;

    }
}

/**
 * UpdateOrganizationNode返回参数结构体
 * @class
 */
class UpdateOrganizationNodeResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetOrganizationMember返回参数结构体
 * @class
 */
class GetOrganizationMemberResponse extends AbstractModel {

    Uin: number | null
    
    Name: string | null
    
    Remark: string | null
    
    JoinTime: string | null
    
    NodeId: number | null
    
    NodeName: string | null
    
    ParentNodeId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 组织成员UIN
         */
        this.Uin = null;

        /**
         * 组织成员名称
         */
        this.Name = null;

        /**
         * 备注
         */
        this.Remark = null;

        /**
         * 加入时间
         */
        this.JoinTime = null;

        /**
         * 组织单元ID
         */
        this.NodeId = null;

        /**
         * 组织单元名称
         */
        this.NodeName = null;

        /**
         * 父组织单元ID
         */
        this.ParentNodeId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: number | null;
        Name: string | null;
        Remark: string | null;
        JoinTime: string | null;
        NodeId: number | null;
        NodeName: string | null;
        ParentNodeId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.JoinTime = 'JoinTime' in params ? params.JoinTime : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOrganization请求参数结构体
 * @class
 */
class CreateOrganizationRequest extends AbstractModel {

    OrgType: number | null
    
    constructor(){
        super();

        /**
         * 组织类型（目前固定为1）
         */
        this.OrgType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrgType: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrgType = 'OrgType' in params ? params.OrgType : null;

    }
}

/**
 * DeleteOrganization请求参数结构体
 * @class
 */
class DeleteOrganizationRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * QuitOrganization返回参数结构体
 * @class
 */
class QuitOrganizationResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateOrganizationMember返回参数结构体
 * @class
 */
class UpdateOrganizationMemberResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrganizationMembers请求参数结构体
 * @class
 */
class DeleteOrganizationMembersRequest extends AbstractModel {

    Uins: Array<number> | null
    
    constructor(){
        super();

        /**
         * 被删除成员的UIN列表
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uins: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * CreateOrganization返回参数结构体
 * @class
 */
class CreateOrganizationResponse extends AbstractModel {

    OrgId: number | null
    
    Nickname: string | null
    
    Mail: string | null
    
    OrgType: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 企业组织ID
         */
        this.OrgId = null;

        /**
         * 创建者昵称
         */
        this.Nickname = null;

        /**
         * 创建者邮箱
         */
        this.Mail = null;

        /**
         * 组织类型
         */
        this.OrgType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrgId: number | null;
        Nickname: string | null;
        Mail: string | null;
        OrgType: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrganizationNodes请求参数结构体
 * @class
 */
class DeleteOrganizationNodesRequest extends AbstractModel {

    NodeIds: Array<number> | null
    
    constructor(){
        super();

        /**
         * 组织单元ID列表
         */
        this.NodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeIds: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;

    }
}

/**
 * AddOrganizationNode返回参数结构体
 * @class
 */
class AddOrganizationNodeResponse extends AbstractModel {

    NodeId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 组织单元ID
         */
        this.NodeId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationInvitations返回参数结构体
 * @class
 */
class ListOrganizationInvitationsResponse extends AbstractModel {

    Invitations: Array<OrgInvitation> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 邀请信息列表
         */
        this.Invitations = null;

        /**
         * 总数目
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Invitations: Array<OrgInvitation> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Invitations) {
            this.Invitations = new Array();
            for (let z in params.Invitations) {
                let obj = new OrgInvitation();
                obj.deserialize(params.Invitations[z]);
                this.Invitations.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptOrganizationInvitation请求参数结构体
 * @class
 */
class AcceptOrganizationInvitationRequest extends AbstractModel {

    Id: number | null
    
    constructor(){
        super();

        /**
         * 邀请ID
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ListOrganizationNodeMembers返回参数结构体
 * @class
 */
class ListOrganizationNodeMembersResponse extends AbstractModel {

    TotalCount: number | null
    
    Members: Array<OrgMember> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 总数目
         */
        this.TotalCount = null;

        /**
         * 成员列表
         */
        this.Members = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        Members: Array<OrgMember> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new OrgMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetOrganizationMember请求参数结构体
 * @class
 */
class GetOrganizationMemberRequest extends AbstractModel {

    MemberUin: number | null
    
    constructor(){
        super();

        /**
         * 组织成员UIN
         */
        this.MemberUin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MemberUin: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;

    }
}

/**
 * DenyOrganizationInvitation返回参数结构体
 * @class
 */
class DenyOrganizationInvitationResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendOrganizationInvitation返回参数结构体
 * @class
 */
class SendOrganizationInvitationResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业组织邀请
 * @class
 */
class OrgInvitation extends AbstractModel {

    Id: number | null
    
    Uin: number | null
    
    HostUin: number | null
    
    HostName: string | null
    
    HostMail: string | null
    
    Status: number | null
    
    Name: string | null
    
    Remark: string | null
    
    OrgType: number | null
    
    InviteTime: string | null
    
    ExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 邀请ID
         */
        this.Id = null;

        /**
         * 被邀请UIN
         */
        this.Uin = null;

        /**
         * 创建者UIN
         */
        this.HostUin = null;

        /**
         * 创建者名称
         */
        this.HostName = null;

        /**
         * 创建者邮箱
         */
        this.HostMail = null;

        /**
         * 邀请状态。-1：已过期，0：正常，1：已接受，2：已失效，3：已取消
         */
        this.Status = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 备注
         */
        this.Remark = null;

        /**
         * 企业组织类型
         */
        this.OrgType = null;

        /**
         * 邀请时间
         */
        this.InviteTime = null;

        /**
         * 过期时间
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
        Uin: number | null;
        HostUin: number | null;
        HostName: string | null;
        HostMail: string | null;
        Status: number | null;
        Name: string | null;
        Remark: string | null;
        OrgType: number | null;
        InviteTime: string | null;
        ExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.HostMail = 'HostMail' in params ? params.HostMail : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.InviteTime = 'InviteTime' in params ? params.InviteTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * UpdateOrganizationMember请求参数结构体
 * @class
 */
class UpdateOrganizationMemberRequest extends AbstractModel {

    MemberUin: number | null
    
    Name: string | null
    
    Remark: string | null
    
    constructor(){
        super();

        /**
         * 成员UIN
         */
        this.MemberUin = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 备注
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MemberUin: number | null;
        Name: string | null;
        Remark: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.MemberUin = 'MemberUin' in params ? params.MemberUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * QuitOrganization请求参数结构体
 * @class
 */
class QuitOrganizationRequest extends AbstractModel {

    OrgId: number | null
    
    constructor(){
        super();

        /**
         * 企业组织ID
         */
        this.OrgId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrgId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrgId = 'OrgId' in params ? params.OrgId : null;

    }
}

/**
 * ListOrganizationInvitations请求参数结构体
 * @class
 */
class ListOrganizationInvitationsRequest extends AbstractModel {

    Invited: number | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 是否被邀请。1：被邀请，0：发出的邀请
         */
        this.Invited = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Invited: number | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Invited = 'Invited' in params ? params.Invited : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AddOrganizationNode请求参数结构体
 * @class
 */
class AddOrganizationNodeRequest extends AbstractModel {

    ParentNodeId: number | null
    
    Name: string | null
    
    constructor(){
        super();

        /**
         * 父组织单元ID
         */
        this.ParentNodeId = null;

        /**
         * 组织单元名字
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ParentNodeId: number | null;
        Name: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ListOrganizationNodeMembers请求参数结构体
 * @class
 */
class ListOrganizationNodeMembersRequest extends AbstractModel {

    NodeId: number | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 企业组织单元ID
         */
        this.NodeId = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeId: number | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateOrganizationNode请求参数结构体
 * @class
 */
class UpdateOrganizationNodeRequest extends AbstractModel {

    NodeId: number | null
    
    Name: string | null
    
    ParentNodeId: number | null
    
    constructor(){
        super();

        /**
         * 企业组织单元ID
         */
        this.NodeId = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 父单元ID
         */
        this.ParentNodeId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeId: number | null;
        Name: string | null;
        ParentNodeId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;

    }
}

/**
 * CancelOrganizationInvitation请求参数结构体
 * @class
 */
class CancelOrganizationInvitationRequest extends AbstractModel {

    Id: number | null
    
    constructor(){
        super();

        /**
         * 邀请ID
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteOrganizationMemberFromNode返回参数结构体
 * @class
 */
class DeleteOrganizationMemberFromNodeResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DenyOrganizationInvitation请求参数结构体
 * @class
 */
class DenyOrganizationInvitationRequest extends AbstractModel {

    Id: number | null
    
    constructor(){
        super();

        /**
         * 邀请ID
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteOrganizationNodes返回参数结构体
 * @class
 */
class DeleteOrganizationNodesResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOrganization返回参数结构体
 * @class
 */
class DeleteOrganizationResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelOrganizationInvitation返回参数结构体
 * @class
 */
class CancelOrganizationInvitationResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcceptOrganizationInvitation返回参数结构体
 * @class
 */
class AcceptOrganizationInvitationResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationNodes请求参数结构体
 * @class
 */
class ListOrganizationNodesRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * SendOrganizationInvitation请求参数结构体
 * @class
 */
class SendOrganizationInvitationRequest extends AbstractModel {

    InviteUin: number | null
    
    Name: string | null
    
    Remark: string | null
    
    constructor(){
        super();

        /**
         * 被邀请账户UIN
         */
        this.InviteUin = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 备注
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        InviteUin: number | null;
        Name: string | null;
        Remark: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.InviteUin = 'InviteUin' in params ? params.InviteUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DeleteOrganizationMembers返回参数结构体
 * @class
 */
class DeleteOrganizationMembersResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetOrganization返回参数结构体
 * @class
 */
class GetOrganizationResponse extends AbstractModel {

    OrgId: number | null
    
    HostUin: number | null
    
    Nickname: string | null
    
    Mail: string | null
    
    OrgType: number | null
    
    IsEmpty: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 企业组织ID
         */
        this.OrgId = null;

        /**
         * 创建者UIN
         */
        this.HostUin = null;

        /**
         * 创建者昵称
         */
        this.Nickname = null;

        /**
         * 创建者邮箱
         */
        this.Mail = null;

        /**
         * 企业组织类型
         */
        this.OrgType = null;

        /**
         * 是否为空
         */
        this.IsEmpty = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrgId: number | null;
        HostUin: number | null;
        Nickname: string | null;
        Mail: string | null;
        OrgType: number | null;
        IsEmpty: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrgId = 'OrgId' in params ? params.OrgId : null;
        this.HostUin = 'HostUin' in params ? params.HostUin : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.OrgType = 'OrgType' in params ? params.OrgType : null;
        this.IsEmpty = 'IsEmpty' in params ? params.IsEmpty : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationMembers返回参数结构体
 * @class
 */
class ListOrganizationMembersResponse extends AbstractModel {

    Members: Array<OrgMember> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 成员列表
         */
        this.Members = null;

        /**
         * 总数目
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Members: Array<OrgMember> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new OrgMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListOrganizationNodes返回参数结构体
 * @class
 */
class ListOrganizationNodesResponse extends AbstractModel {

    Nodes: Array<OrgNode> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 企业组织单元列表
         */
        this.Nodes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Nodes: Array<OrgNode> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new OrgNode();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MoveOrganizationMembersToNode返回参数结构体
 * @class
 */
class MoveOrganizationMembersToNodeResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业组织单元
 * @class
 */
class OrgNode extends AbstractModel {

    NodeId: number | null
    
    Name: string | null
    
    ParentNodeId: number | null
    
    MemberCount: number | null
    
    constructor(){
        super();

        /**
         * 组织单元ID
         */
        this.NodeId = null;

        /**
         * 名称
         */
        this.Name = null;

        /**
         * 父单元ID
         */
        this.ParentNodeId = null;

        /**
         * 成员数量
         */
        this.MemberCount = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        NodeId: number | null;
        Name: string | null;
        ParentNodeId: number | null;
        MemberCount: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParentNodeId = 'ParentNodeId' in params ? params.ParentNodeId : null;
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;

    }
}

export const Models = {
    MoveOrganizationMembersToNodeRequest: MoveOrganizationMembersToNodeRequest,
    GetOrganizationRequest: GetOrganizationRequest,
    ListOrganizationMembersRequest: ListOrganizationMembersRequest,
    DeleteOrganizationMemberFromNodeRequest: DeleteOrganizationMemberFromNodeRequest,
    OrgMember: OrgMember,
    UpdateOrganizationNodeResponse: UpdateOrganizationNodeResponse,
    GetOrganizationMemberResponse: GetOrganizationMemberResponse,
    CreateOrganizationRequest: CreateOrganizationRequest,
    DeleteOrganizationRequest: DeleteOrganizationRequest,
    QuitOrganizationResponse: QuitOrganizationResponse,
    UpdateOrganizationMemberResponse: UpdateOrganizationMemberResponse,
    DeleteOrganizationMembersRequest: DeleteOrganizationMembersRequest,
    CreateOrganizationResponse: CreateOrganizationResponse,
    DeleteOrganizationNodesRequest: DeleteOrganizationNodesRequest,
    AddOrganizationNodeResponse: AddOrganizationNodeResponse,
    ListOrganizationInvitationsResponse: ListOrganizationInvitationsResponse,
    AcceptOrganizationInvitationRequest: AcceptOrganizationInvitationRequest,
    ListOrganizationNodeMembersResponse: ListOrganizationNodeMembersResponse,
    GetOrganizationMemberRequest: GetOrganizationMemberRequest,
    DenyOrganizationInvitationResponse: DenyOrganizationInvitationResponse,
    SendOrganizationInvitationResponse: SendOrganizationInvitationResponse,
    OrgInvitation: OrgInvitation,
    UpdateOrganizationMemberRequest: UpdateOrganizationMemberRequest,
    QuitOrganizationRequest: QuitOrganizationRequest,
    ListOrganizationInvitationsRequest: ListOrganizationInvitationsRequest,
    AddOrganizationNodeRequest: AddOrganizationNodeRequest,
    ListOrganizationNodeMembersRequest: ListOrganizationNodeMembersRequest,
    UpdateOrganizationNodeRequest: UpdateOrganizationNodeRequest,
    CancelOrganizationInvitationRequest: CancelOrganizationInvitationRequest,
    DeleteOrganizationMemberFromNodeResponse: DeleteOrganizationMemberFromNodeResponse,
    DenyOrganizationInvitationRequest: DenyOrganizationInvitationRequest,
    DeleteOrganizationNodesResponse: DeleteOrganizationNodesResponse,
    DeleteOrganizationResponse: DeleteOrganizationResponse,
    CancelOrganizationInvitationResponse: CancelOrganizationInvitationResponse,
    AcceptOrganizationInvitationResponse: AcceptOrganizationInvitationResponse,
    ListOrganizationNodesRequest: ListOrganizationNodesRequest,
    SendOrganizationInvitationRequest: SendOrganizationInvitationRequest,
    DeleteOrganizationMembersResponse: DeleteOrganizationMembersResponse,
    GetOrganizationResponse: GetOrganizationResponse,
    ListOrganizationMembersResponse: ListOrganizationMembersResponse,
    ListOrganizationNodesResponse: ListOrganizationNodesResponse,
    MoveOrganizationMembersToNodeResponse: MoveOrganizationMembersToNodeResponse,
    OrgNode: OrgNode,

}
