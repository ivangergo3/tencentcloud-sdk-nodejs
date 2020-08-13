"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const abstract_model_1 = require("../../common/abstract_model");
/**
 * GetUser返回参数结构体
 * @class
 */
class GetUserResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户用户 UIN
         */
        this.Uin = null;
        /**
         * 子用户用户名
         */
        this.Name = null;
        /**
         * 子用户 UID
         */
        this.Uid = null;
        /**
         * 子用户备注
         */
        this.Remark = null;
        /**
         * 子用户能否登录控制台
         */
        this.ConsoleLogin = null;
        /**
         * 手机号
         */
        this.PhoneNum = null;
        /**
         * 区号
         */
        this.CountryCode = null;
        /**
         * 邮箱
         */
        this.Email = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListAccessKeys请求参数结构体
 * @class
 */
class ListAccessKeysRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 指定用户Uin，不填默认列出当前用户访问密钥
         */
        this.TargetUin = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
    }
}
/**
 * SetMfaFlag返回参数结构体
 * @class
 */
class SetMfaFlagResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteUser请求参数结构体
 * @class
 */
class DeleteUserRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户用户名
         */
        this.Name = null;
        /**
         * 是否强制删除该子用户，默认入参为0。0：若该用户存在未删除API密钥，则不删除用户；1：若该用户存在未删除API密钥，则先删除密钥后删除用户。删除密钥需要您拥有cam:DeleteApiKey权限，您将可以删除该用户下启用或禁用状态的所有密钥，无权限则删除密钥和用户失败
         */
        this.Force = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Force = 'Force' in params ? params.Force : null;
    }
}
/**
 * DetachGroupPolicy请求参数结构体
 * @class
 */
class DetachGroupPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略 id
         */
        this.PolicyId = null;
        /**
         * 用户组 id
         */
        this.DetachGroupId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachGroupId = 'DetachGroupId' in params ? params.DetachGroupId : null;
    }
}
/**
 * DescribeRoleList返回参数结构体
 * @class
 */
class DescribeRoleListResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色详情列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.List = null;
        /**
         * 角色总数
         */
        this.TotalNum = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new RoleInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreatePolicy返回参数结构体
 * @class
 */
class CreatePolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 新增策略ID
         */
        this.PolicyId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetRole请求参数结构体
 * @class
 */
class GetRoleRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色 ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleId = null;
        /**
         * 角色名，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * CreateServiceLinkedRole请求参数结构体
 * @class
 */
class CreateServiceLinkedRoleRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 授权服务，附加了此角色的腾讯云服务主体。
         */
        this.QCSServiceName = null;
        /**
         * 自定义后缀，根据您提供的字符串，与服务提供的前缀组合在一起以形成完整的角色名称。
         */
        this.CustomSuffix = null;
        /**
         * 角色说明。
         */
        this.Description = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QCSServiceName = 'QCSServiceName' in params ? params.QCSServiceName : null;
        this.CustomSuffix = 'CustomSuffix' in params ? params.CustomSuffix : null;
        this.Description = 'Description' in params ? params.Description : null;
    }
}
/**
 * ListAttachedGroupPolicies请求参数结构体
 * @class
 */
class ListAttachedGroupPoliciesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组ID
         */
        this.TargetGroupId = null;
        /**
         * 页码，默认值是 1，从 1 开始
         */
        this.Page = null;
        /**
         * 每页大小，默认值是 20
         */
        this.Rp = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
    }
}
/**
 * ListGroupsForUser请求参数结构体
 * @class
 */
class ListGroupsForUserRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户 UID
         */
        this.Uid = null;
        /**
         * 每页数量。默认为20。
         */
        this.Rp = null;
        /**
         * 页码。默认为1。
         */
        this.Page = null;
        /**
         * 子账号UIN
         */
        this.SubUin = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.SubUin = 'SubUin' in params ? params.SubUin : null;
    }
}
/**
 * AttachRolePolicy返回参数结构体
 * @class
 */
class AttachRolePolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetServiceLinkedRoleDeletionStatus返回参数结构体
 * @class
 */
class GetServiceLinkedRoleDeletionStatusResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 状态：NOT_STARTED，IN_PROGRESS，SUCCEEDED，FAILED
         */
        this.Status = null;
        /**
         * 失败原因
         */
        this.Reason = null;
        /**
         * 服务类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ServiceType = null;
        /**
         * 服务名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ServiceName = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteUserPermissionsBoundary返回参数结构体
 * @class
 */
class DeleteUserPermissionsBoundaryResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListUsers返回参数结构体
 * @class
 */
class ListUsersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户信息
         */
        this.Data = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SubAccountInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdateRoleDescription返回参数结构体
 * @class
 */
class UpdateRoleDescriptionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DetachUserPolicy请求参数结构体
 * @class
 */
class DetachUserPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略 id
         */
        this.PolicyId = null;
        /**
         * 子账号 uin
         */
        this.DetachUin = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachUin = 'DetachUin' in params ? params.DetachUin : null;
    }
}
/**
 * ListGroups返回参数结构体
 * @class
 */
class ListGroupsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组总数。
         */
        this.TotalNum = null;
        /**
         * 用户组数组信息。
         */
        this.GroupInfo = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListPolicyVersions请求参数结构体
 * @class
 */
class ListPolicyVersionsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID
         */
        this.PolicyId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
    }
}
/**
 * GetCustomMFATokenInfo请求参数结构体
 * @class
 */
class GetCustomMFATokenInfoRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义多因子验证Token
         */
        this.MFAToken = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MFAToken = 'MFAToken' in params ? params.MFAToken : null;
    }
}
/**
 * DescribeRoleList请求参数结构体
 * @class
 */
class DescribeRoleListRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 页码，从1开始
         */
        this.Page = null;
        /**
         * 每页行数，不能大于200
         */
        this.Rp = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
    }
}
/**
 * GetGroup请求参数结构体
 * @class
 */
class GetGroupRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组 ID
         */
        this.GroupId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
    }
}
/**
 * DeleteRole返回参数结构体
 * @class
 */
class DeleteRoleResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 策略版本列表元素结构
 * @class
 */
class PolicyVersionItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略版本号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VersionId = null;
        /**
         * 策略版本创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateDate = null;
        /**
         * 是否是正在生效的版本。0表示不是，1表示是
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsDefaultVersion = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.IsDefaultVersion = 'IsDefaultVersion' in params ? params.IsDefaultVersion : null;
    }
}
/**
 * DeleteUserPermissionsBoundary请求参数结构体
 * @class
 */
class DeleteUserPermissionsBoundaryRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子账号Uin
         */
        this.TargetUin = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
    }
}
/**
 * ListSAMLProviders请求参数结构体
 * @class
 */
class ListSAMLProvidersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
    }
}
/**
 * ListGroups请求参数结构体
 * @class
 */
class ListGroupsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 页码。默认为1。
         */
        this.Page = null;
        /**
         * 每页数量。默认为20。
         */
        this.Rp = null;
        /**
         * 按用户组名称匹配。
         */
        this.Keyword = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
    }
}
/**
 * DeletePolicyVersion返回参数结构体
 * @class
 */
class DeletePolicyVersionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdateSAMLProvider请求参数结构体
 * @class
 */
class UpdateSAMLProviderRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商名称
         */
        this.Name = null;
        /**
         * SAML身份提供商描述
         */
        this.Description = null;
        /**
         * SAML身份提供商Base64编码的元数据文档
         */
        this.SAMLMetadataDocument = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;
    }
}
/**
 * UpdateAssumeRolePolicy请求参数结构体
 * @class
 */
class UpdateAssumeRolePolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         */
        this.PolicyDocument = null;
        /**
         * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleId = null;
        /**
         * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * ListGroupsForUser返回参数结构体
 * @class
 */
class ListGroupsForUserResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户加入的用户组总数
         */
        this.TotalNum = null;
        /**
         * 用户组信息
         */
        this.GroupInfo = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.GroupInfo) {
            this.GroupInfo = new Array();
            for (let z in params.GroupInfo) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupInfo[z]);
                this.GroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListUsersForGroup请求参数结构体
 * @class
 */
class ListUsersForGroupRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组 ID。
         */
        this.GroupId = null;
        /**
         * 页码。默认为1。
         */
        this.Page = null;
        /**
         * 每页数量。默认为20。
         */
        this.Rp = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
    }
}
/**
 * RemoveUserFromGroup请求参数结构体
 * @class
 */
class RemoveUserFromGroupRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 要删除的用户 UID和用户组 ID对应数组
         */
        this.Info = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new GroupIdOfUidInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }
    }
}
/**
 * CreatePolicyVersion返回参数结构体
 * @class
 */
class CreatePolicyVersionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略版本号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VersionId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListPolicies返回参数结构体
 * @class
 */
class ListPoliciesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略总数
         */
        this.TotalNum = null;
        /**
         * 策略数组，数组每个成员包括 policyId、policyName、addTime、type、description、 createMode 字段。其中：
policyId：策略 id
policyName：策略名
addTime：策略创建时间
type：1 表示自定义策略，2 表示预设策略
description：策略描述
createMode：1 表示按业务权限创建的策略，其他值表示可以查看策略语法和通过策略语法更新策略
Attachments: 关联的用户数
ServiceType: 策略关联的产品
IsAttached: 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略
         */
        this.List = null;
        /**
         * 保留字段
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ServiceTypeList = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new StrategyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.ServiceTypeList = 'ServiceTypeList' in params ? params.ServiceTypeList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 子用户和用户组关联信息
 * @class
 */
class GroupIdOfUidInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户 UID
         */
        this.Uid = null;
        /**
         * 用户组 ID
         */
        this.GroupId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
    }
}
/**
 * UpdateRoleDescription请求参数结构体
 * @class
 */
class UpdateRoleDescriptionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色描述
         */
        this.Description = null;
        /**
         * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleId = null;
        /**
         * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * SetDefaultPolicyVersion请求参数结构体
 * @class
 */
class SetDefaultPolicyVersionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID
         */
        this.PolicyId = null;
        /**
         * 策略版本号
         */
        this.VersionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
    }
}
/**
 * 角色详细信息
 * @class
 */
class RoleInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色ID
         */
        this.RoleId = null;
        /**
         * 角色名称
         */
        this.RoleName = null;
        /**
         * 角色的策略文档
         */
        this.PolicyDocument = null;
        /**
         * 角色描述
         */
        this.Description = null;
        /**
         * 角色的创建时间
         */
        this.AddTime = null;
        /**
         * 角色的最近一次时间
         */
        this.UpdateTime = null;
        /**
         * 角色是否允许登录
         */
        this.ConsoleLogin = null;
        /**
         * 角色类型，取user、system或service_linked
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RoleType = null;
        /**
         * 有效时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SessionDuration = null;
        /**
         * 服务相关角色删除TaskId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeletionTaskId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.RoleType = 'RoleType' in params ? params.RoleType : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;
    }
}
/**
 * CreatePolicyVersion请求参数结构体
 * @class
 */
class CreatePolicyVersionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID
         */
        this.PolicyId = null;
        /**
         * 策略文本信息
         */
        this.PolicyDocument = null;
        /**
         * 是否设置为当前策略的版本
         */
        this.SetAsDefault = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.SetAsDefault = 'SetAsDefault' in params ? params.SetAsDefault : null;
    }
}
/**
 * DeleteGroup请求参数结构体
 * @class
 */
class DeleteGroupRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组 ID
         */
        this.GroupId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
    }
}
/**
 * ListAttachedRolePolicies返回参数结构体
 * @class
 */
class ListAttachedRolePoliciesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色关联的策略列表
         */
        this.List = null;
        /**
         * 角色关联的策略总数
         */
        this.TotalNum = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachedPolicyOfRole();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteUser返回参数结构体
 * @class
 */
class DeleteUserResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DetachRolePolicy请求参数结构体
 * @class
 */
class DetachRolePolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID，入参PolicyId与PolicyName二选一
         */
        this.PolicyId = null;
        /**
         * 角色ID，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         */
        this.DetachRoleId = null;
        /**
         * 角色名称，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         */
        this.DetachRoleName = null;
        /**
         * 策略名，入参PolicyId与PolicyName二选一
         */
        this.PolicyName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.DetachRoleId = 'DetachRoleId' in params ? params.DetachRoleId : null;
        this.DetachRoleName = 'DetachRoleName' in params ? params.DetachRoleName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
    }
}
/**
 * DeleteRolePermissionsBoundary请求参数结构体
 * @class
 */
class DeleteRolePermissionsBoundaryRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色ID（与角色名至少填一个）
         */
        this.RoleId = null;
        /**
         * 角色名（与角色ID至少填一个）
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * 策略信息
 * @class
 */
class StrategyInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID。
         */
        this.PolicyId = null;
        /**
         * 策略名称。
         */
        this.PolicyName = null;
        /**
         * 策略创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AddTime = null;
        /**
         * 策略类型。1 表示自定义策略，2 表示预设策略。
         */
        this.Type = null;
        /**
         * 策略描述。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Description = null;
        /**
         * 创建来源，1 通过控制台创建, 2 通过策略语法创建。
         */
        this.CreateMode = null;
        /**
         * 关联的用户数
         */
        this.Attachments = null;
        /**
         * 策略关联的产品
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ServiceType = null;
        /**
         * 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsAttached = null;
        /**
         * 是否已下线
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Deactived = null;
        /**
         * 已下线产品列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeactivedDetail = null;
        /**
         * 是否是服务相关角色策略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsServiceLinkedPolicy = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.Attachments = 'Attachments' in params ? params.Attachments : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.IsAttached = 'IsAttached' in params ? params.IsAttached : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;
        this.IsServiceLinkedPolicy = 'IsServiceLinkedPolicy' in params ? params.IsServiceLinkedPolicy : null;
    }
}
/**
 * DeletePolicy请求参数结构体
 * @class
 */
class DeletePolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 数组，数组成员是策略 id，支持批量删除策略
         */
        this.PolicyId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
    }
}
/**
 * 用户组信息
 * @class
 */
class GroupInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组 ID。
         */
        this.GroupId = null;
        /**
         * 用户组名称。
         */
        this.GroupName = null;
        /**
         * 用户组创建时间。
         */
        this.CreateTime = null;
        /**
         * 用户组描述。
         */
        this.Remark = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
    }
}
/**
 * AddUser请求参数结构体
 * @class
 */
class AddUserRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户用户名
         */
        this.Name = null;
        /**
         * 子用户备注
         */
        this.Remark = null;
        /**
         * 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。
         */
        this.ConsoleLogin = null;
        /**
         * 是否生成子用户密钥。传0不生成子用户密钥，传1生成子用户密钥。
         */
        this.UseApi = null;
        /**
         * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。
         */
        this.Password = null;
        /**
         * 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。
         */
        this.NeedResetPassword = null;
        /**
         * 手机号
         */
        this.PhoneNum = null;
        /**
         * 区号
         */
        this.CountryCode = null;
        /**
         * 邮箱
         */
        this.Email = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.UseApi = 'UseApi' in params ? params.UseApi : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
    }
}
/**
 * DeleteRole请求参数结构体
 * @class
 */
class DeleteRoleRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleId = null;
        /**
         * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * UpdateRoleConsoleLogin请求参数结构体
 * @class
 */
class UpdateRoleConsoleLoginRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 是否可登录，可登录：1，不可登录：0
         */
        this.ConsoleLogin = null;
        /**
         * 角色ID
         */
        this.RoleId = null;
        /**
         * 角色名
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * GetCustomMFATokenInfo返回参数结构体
 * @class
 */
class GetCustomMFATokenInfoResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义多因子验证Token对应的帐号Id
         */
        this.Uin = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdateAssumeRolePolicy返回参数结构体
 * @class
 */
class UpdateAssumeRolePolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListAttachedUserPolicies返回参数结构体
 * @class
 */
class ListAttachedUserPoliciesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略总数
         */
        this.TotalNum = null;
        /**
         * 策略列表
         */
        this.List = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachPolicyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateSAMLProvider返回参数结构体
 * @class
 */
class CreateSAMLProviderResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商资源描述符
         */
        this.ProviderArn = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderArn = 'ProviderArn' in params ? params.ProviderArn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteRolePermissionsBoundary返回参数结构体
 * @class
 */
class DeleteRolePermissionsBoundaryResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetUser请求参数结构体
 * @class
 */
class GetUserRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户用户名
         */
        this.Name = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * 登录和敏感操作flag
 * @class
 */
class LoginActionMfaFlag extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 手机
         */
        this.Phone = null;
        /**
         * 软token
         */
        this.Stoken = null;
        /**
         * 微信
         */
        this.Wechat = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Stoken = 'Stoken' in params ? params.Stoken : null;
        this.Wechat = 'Wechat' in params ? params.Wechat : null;
    }
}
/**
 * 子用户信息
 * @class
 */
class SubAccountInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户用户 ID
         */
        this.Uin = null;
        /**
         * 子用户用户名
         */
        this.Name = null;
        /**
         * 子用户 UID
         */
        this.Uid = null;
        /**
         * 子用户备注
         */
        this.Remark = null;
        /**
         * 子用户能否登录控制台
         */
        this.ConsoleLogin = null;
        /**
         * 手机号
         */
        this.PhoneNum = null;
        /**
         * 区号
         */
        this.CountryCode = null;
        /**
         * 邮箱
         */
        this.Email = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
    }
}
/**
 * CreateGroup请求参数结构体
 * @class
 */
class CreateGroupRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组名
         */
        this.GroupName = null;
        /**
         * 用户组描述
         */
        this.Remark = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
    }
}
/**
 * SAML身份提供商
 * @class
 */
class SAMLProviderInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商名称
         */
        this.Name = null;
        /**
         * SAML身份提供商描述
         */
        this.Description = null;
        /**
         * SAML身份提供商创建时间
         */
        this.CreateTime = null;
        /**
         * SAML身份提供商上次修改时间
         */
        this.ModifyTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
    }
}
/**
 * UpdateSAMLProvider返回参数结构体
 * @class
 */
class UpdateSAMLProviderResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdateUser请求参数结构体
 * @class
 */
class UpdateUserRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户用户名
         */
        this.Name = null;
        /**
         * 子用户备注
         */
        this.Remark = null;
        /**
         * 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。
         */
        this.ConsoleLogin = null;
        /**
         * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。
         */
        this.Password = null;
        /**
         * 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。
         */
        this.NeedResetPassword = null;
        /**
         * 手机号
         */
        this.PhoneNum = null;
        /**
         * 区号
         */
        this.CountryCode = null;
        /**
         * 邮箱
         */
        this.Email = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NeedResetPassword = 'NeedResetPassword' in params ? params.NeedResetPassword : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.Email = 'Email' in params ? params.Email : null;
    }
}
/**
 * CreateSAMLProvider请求参数结构体
 * @class
 */
class CreateSAMLProviderRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商名称
         */
        this.Name = null;
        /**
         * SAML身份提供商描述
         */
        this.Description = null;
        /**
         * SAML身份提供商Base64编码的元数据文档
         */
        this.SAMLMetadataDocument = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SAMLMetadataDocument = 'SAMLMetadataDocument' in params ? params.SAMLMetadataDocument : null;
    }
}
/**
 * 关联策略信息
 * @class
 */
class AttachPolicyInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略id
         */
        this.PolicyId = null;
        /**
         * 策略名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyName = null;
        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AddTime = null;
        /**
         * 创建来源，1 通过控制台创建, 2 通过策略语法创建。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateMode = null;
        /**
         * 取值为user和QCS
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyType = null;
        /**
         * 策略备注
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Remark = null;
        /**
         * 策略关联操作者主帐号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperateOwnerUin = null;
        /**
         * 策略关联操作者ID，如果UinType为0表示子帐号Uin，如果UinType为1表示角色ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperateUin = null;
        /**
         * UinType为0表示OperateUin字段是子帐号Uin，如果UinType为1表示OperateUin字段是角色ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperateUinType = null;
        /**
         * 是否已下线
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Deactived = null;
        /**
         * 已下线的产品列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeactivedDetail = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OperateOwnerUin = 'OperateOwnerUin' in params ? params.OperateOwnerUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;
        this.OperateUinType = 'OperateUinType' in params ? params.OperateUinType : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;
    }
}
/**
 * PutRolePermissionsBoundary请求参数结构体
 * @class
 */
class PutRolePermissionsBoundaryRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID
         */
        this.PolicyId = null;
        /**
         * 角色ID（与角色名至少填一个）
         */
        this.RoleId = null;
        /**
         * 角色名（与角色ID至少填一个）
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * UpdateRoleConsoleLogin返回参数结构体
 * @class
 */
class UpdateRoleConsoleLoginResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AttachRolePolicy请求参数结构体
 * @class
 */
class AttachRolePolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID，入参PolicyId与PolicyName二选一
         */
        this.PolicyId = null;
        /**
         * 角色ID，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         */
        this.AttachRoleId = null;
        /**
         * 角色名称，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
         */
        this.AttachRoleName = null;
        /**
         * 策略名，入参PolicyId与PolicyName二选一
         */
        this.PolicyName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachRoleId = 'AttachRoleId' in params ? params.AttachRoleId : null;
        this.AttachRoleName = 'AttachRoleName' in params ? params.AttachRoleName : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
    }
}
/**
 * ConsumeCustomMFAToken返回参数结构体
 * @class
 */
class ConsumeCustomMFATokenResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AttachUserPolicy请求参数结构体
 * @class
 */
class AttachUserPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略 id
         */
        this.PolicyId = null;
        /**
         * 子账号 uin
         */
        this.AttachUin = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachUin = 'AttachUin' in params ? params.AttachUin : null;
    }
}
/**
 * ListAttachedGroupPolicies返回参数结构体
 * @class
 */
class ListAttachedGroupPoliciesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略总数
         */
        this.TotalNum = null;
        /**
         * 策略列表
         */
        this.List = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachPolicyInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetPolicyVersion请求参数结构体
 * @class
 */
class GetPolicyVersionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID
         */
        this.PolicyId = null;
        /**
         * 策略版本号
         */
        this.VersionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
    }
}
/**
 * PutUserPermissionsBoundary返回参数结构体
 * @class
 */
class PutUserPermissionsBoundaryResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeletePolicy返回参数结构体
 * @class
 */
class DeletePolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ConsumeCustomMFAToken请求参数结构体
 * @class
 */
class ConsumeCustomMFATokenRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义多因子验证Token
         */
        this.MFAToken = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MFAToken = 'MFAToken' in params ? params.MFAToken : null;
    }
}
/**
 * 访问密钥列表
 * @class
 */
class AccessKey extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 访问密钥标识
         */
        this.AccessKeyId = null;
        /**
         * 密钥状态，激活（Active）或未激活（Inactive）
         */
        this.Status = null;
        /**
         * 创建时间
         */
        this.CreateTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
    }
}
/**
 * GetGroup返回参数结构体
 * @class
 */
class GetGroupResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组 ID
         */
        this.GroupId = null;
        /**
         * 用户组名称
         */
        this.GroupName = null;
        /**
         * 用户组成员数量
         */
        this.GroupNum = null;
        /**
         * 用户组描述
         */
        this.Remark = null;
        /**
         * 用户组创建时间
         */
        this.CreateTime = null;
        /**
         * 用户组成员信息
         */
        this.UserInfo = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new GroupMemberInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteSAMLProvider请求参数结构体
 * @class
 */
class DeleteSAMLProviderRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商名称
         */
        this.Name = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * DeleteSAMLProvider返回参数结构体
 * @class
 */
class DeleteSAMLProviderResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdateUser返回参数结构体
 * @class
 */
class UpdateUserResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateServiceLinkedRole返回参数结构体
 * @class
 */
class CreateServiceLinkedRoleResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色ID
         */
        this.RoleId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListUsers请求参数结构体
 * @class
 */
class ListUsersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
    }
}
/**
 * ListCollaborators请求参数结构体
 * @class
 */
class ListCollaboratorsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 分页条数，缺省为20
         */
        this.Limit = null;
        /**
         * 分页起始值，缺省为0
         */
        this.Offset = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * UpdatePolicy返回参数结构体
 * @class
 */
class UpdatePolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略id，入参是PolicyName时，才会返回
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AttachGroupPolicy返回参数结构体
 * @class
 */
class AttachGroupPolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdateGroup返回参数结构体
 * @class
 */
class UpdateGroupResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListEntitiesForPolicy请求参数结构体
 * @class
 */
class ListEntitiesForPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略 id
         */
        this.PolicyId = null;
        /**
         * 页码，默认值是 1，从 1 开始
         */
        this.Page = null;
        /**
         * 每页大小，默认值是 20
         */
        this.Rp = null;
        /**
         * 可取值 'All'、'User'、'Group' 和 'Role'，'All' 表示获取所有实体类型，'User' 表示只获取子账号，'Group' 表示只获取用户组，'Role' 表示只获取角色，默认取 'All'
         */
        this.EntityFilter = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.EntityFilter = 'EntityFilter' in params ? params.EntityFilter : null;
    }
}
/**
 * ListPolicies请求参数结构体
 * @class
 */
class ListPoliciesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 每页数量，默认值是 20，必须大于 0 且小于或等于 200
         */
        this.Rp = null;
        /**
         * 页码，默认值是 1，从 1开始，不能大于 200
         */
        this.Page = null;
        /**
         * 可取值 'All'、'QCS' 和 'Local'，'All' 获取所有策略，'QCS' 只获取预设策略，'Local' 只获取自定义策略，默认取 'All'
         */
        this.Scope = null;
        /**
         * 按策略名匹配
         */
        this.Keyword = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
    }
}
/**
 * GetServiceLinkedRoleDeletionStatus请求参数结构体
 * @class
 */
class GetServiceLinkedRoleDeletionStatusRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 删除任务ID
         */
        this.DeletionTaskId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;
    }
}
/**
 * DetachGroupPolicy返回参数结构体
 * @class
 */
class DetachGroupPolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreatePolicy请求参数结构体
 * @class
 */
class CreatePolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略名
         */
        this.PolicyName = null;
        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         */
        this.PolicyDocument = null;
        /**
         * 策略描述
         */
        this.Description = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
    }
}
/**
 * DeletePolicyVersion请求参数结构体
 * @class
 */
class DeletePolicyVersionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID
         */
        this.PolicyId = null;
        /**
         * 策略版本号
         */
        this.VersionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
    }
}
/**
 * UpdateGroup请求参数结构体
 * @class
 */
class UpdateGroupRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组 ID
         */
        this.GroupId = null;
        /**
         * 用户组名
         */
        this.GroupName = null;
        /**
         * 用户组描述
         */
        this.Remark = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
    }
}
/**
 * GetPolicyVersion返回参数结构体
 * @class
 */
class GetPolicyVersionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略版本详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyVersion = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.PolicyVersion) {
            let obj = new PolicyVersionDetail();
            obj.deserialize(params.PolicyVersion);
            this.PolicyVersion = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateRole返回参数结构体
 * @class
 */
class CreateRoleResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RoleId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetSAMLProvider返回参数结构体
 * @class
 */
class GetSAMLProviderResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商名称
         */
        this.Name = null;
        /**
         * SAML身份提供商描述
         */
        this.Description = null;
        /**
         * SAML身份提供商创建时间
         */
        this.CreateTime = null;
        /**
         * SAML身份提供商上次修改时间
         */
        this.ModifyTime = null;
        /**
         * SAML身份提供商元数据文档
         */
        this.SAMLMetadata = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.SAMLMetadata = 'SAMLMetadata' in params ? params.SAMLMetadata : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListPolicyVersions返回参数结构体
 * @class
 */
class ListPolicyVersionsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略版本列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Versions = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Versions) {
            this.Versions = new Array();
            for (let z in params.Versions) {
                let obj = new PolicyVersionItem();
                obj.deserialize(params.Versions[z]);
                this.Versions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetPolicy请求参数结构体
 * @class
 */
class GetPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略Id
         */
        this.PolicyId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
    }
}
/**
 * AddUserToGroup请求参数结构体
 * @class
 */
class AddUserToGroupRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 添加的子用户 UID 和用户组 ID 关联关系
         */
        this.Info = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new GroupIdOfUidInfo();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }
    }
}
/**
 * RemoveUserFromGroup返回参数结构体
 * @class
 */
class RemoveUserFromGroupResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DetachRolePolicy返回参数结构体
 * @class
 */
class DetachRolePolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 角色关联的策略信息
 * @class
 */
class AttachedPolicyOfRole extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID
         */
        this.PolicyId = null;
        /**
         * 策略名称
         */
        this.PolicyName = null;
        /**
         * 绑定时间
         */
        this.AddTime = null;
        /**
         * 策略类型，User表示自定义策略，QCS表示预设策略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyType = null;
        /**
         * 策略创建方式，1表示按产品功能或项目权限创建，其他表示按策略语法创建
         */
        this.CreateMode = null;
        /**
         * 是否已下线(0:否 1:是)
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Deactived = null;
        /**
         * 已下线的产品列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DeactivedDetail = null;
        /**
         * 策略描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Description = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.CreateMode = 'CreateMode' in params ? params.CreateMode : null;
        this.Deactived = 'Deactived' in params ? params.Deactived : null;
        this.DeactivedDetail = 'DeactivedDetail' in params ? params.DeactivedDetail : null;
        this.Description = 'Description' in params ? params.Description : null;
    }
}
/**
 * PutUserPermissionsBoundary请求参数结构体
 * @class
 */
class PutUserPermissionsBoundaryRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子账号Uin
         */
        this.TargetUin = null;
        /**
         * 策略ID
         */
        this.PolicyId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
    }
}
/**
 * ListSAMLProviders返回参数结构体
 * @class
 */
class ListSAMLProvidersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商总数
         */
        this.TotalCount = null;
        /**
         * SAML身份提供商列表
         */
        this.SAMLProviderSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.SAMLProviderSet) {
            this.SAMLProviderSet = new Array();
            for (let z in params.SAMLProviderSet) {
                let obj = new SAMLProviderInfo();
                obj.deserialize(params.SAMLProviderSet[z]);
                this.SAMLProviderSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SetDefaultPolicyVersion返回参数结构体
 * @class
 */
class SetDefaultPolicyVersionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListAttachedRolePolicies请求参数结构体
 * @class
 */
class ListAttachedRolePoliciesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 页码，从 1 开始
         */
        this.Page = null;
        /**
         * 每页行数，不能大于200
         */
        this.Rp = null;
        /**
         * 角色 ID。用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleId = null;
        /**
         * 角色名。用于指定角色，入参 RoleId 与 RoleName 二选一
         */
        this.RoleName = null;
        /**
         * 按策略类型过滤，User表示仅查询自定义策略，QCS表示仅查询预设策略
         */
        this.PolicyType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
        this.RoleId = 'RoleId' in params ? params.RoleId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
    }
}
/**
 * GetSAMLProvider请求参数结构体
 * @class
 */
class GetSAMLProviderRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * SAML身份提供商名称
         */
        this.Name = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * DetachUserPolicy返回参数结构体
 * @class
 */
class DetachUserPolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetRole返回参数结构体
 * @class
 */
class GetRoleResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色详情
         */
        this.RoleInfo = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.RoleInfo) {
            let obj = new RoleInfo();
            obj.deserialize(params.RoleInfo);
            this.RoleInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateRole请求参数结构体
 * @class
 */
class CreateRoleRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色名称
         */
        this.RoleName = null;
        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         */
        this.PolicyDocument = null;
        /**
         * 角色描述
         */
        this.Description = null;
        /**
         * 是否允许登录 1 为允许 0 为不允许
         */
        this.ConsoleLogin = null;
        /**
         * 申请角色临时密钥的最长有效期限制(范围：0~43200)
         */
        this.SessionDuration = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ConsoleLogin = 'ConsoleLogin' in params ? params.ConsoleLogin : null;
        this.SessionDuration = 'SessionDuration' in params ? params.SessionDuration : null;
    }
}
/**
 * DeleteServiceLinkedRole返回参数结构体
 * @class
 */
class DeleteServiceLinkedRoleResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 删除任务ID，可用于检查删除服务相关角色状态。
         */
        this.DeletionTaskId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeletionTaskId = 'DeletionTaskId' in params ? params.DeletionTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetPolicy返回参数结构体
 * @class
 */
class GetPolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyName = null;
        /**
         * 策略描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Description = null;
        /**
         * 1 表示自定义策略，2 表示预设策略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Type = null;
        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AddTime = null;
        /**
         * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UpdateTime = null;
        /**
         * 策略文档
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PolicyDocument = null;
        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PresetAlias = null;
        /**
         * 是否服务相关策略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsServiceLinkedRolePolicy = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.PresetAlias = 'PresetAlias' in params ? params.PresetAlias : null;
        this.IsServiceLinkedRolePolicy = 'IsServiceLinkedRolePolicy' in params ? params.IsServiceLinkedRolePolicy : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteGroup返回参数结构体
 * @class
 */
class DeleteGroupResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AttachGroupPolicy请求参数结构体
 * @class
 */
class AttachGroupPolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略 id
         */
        this.PolicyId = null;
        /**
         * 用户组 id
         */
        this.AttachGroupId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttachGroupId = 'AttachGroupId' in params ? params.AttachGroupId : null;
    }
}
/**
 * DeleteServiceLinkedRole请求参数结构体
 * @class
 */
class DeleteServiceLinkedRoleRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 要删除的服务相关角色的名称。
         */
        this.RoleName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
    }
}
/**
 * 策略关联的实体信息
 * @class
 */
class AttachEntityOfPolicy extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实体ID
         */
        this.Id = null;
        /**
         * 实体名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;
        /**
         * 实体Uin
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Uin = null;
        /**
         * 关联类型。1 用户关联 ； 2 用户组关联
         */
        this.RelatedType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RelatedType = 'RelatedType' in params ? params.RelatedType : null;
    }
}
/**
 * ListUsersForGroup返回参数结构体
 * @class
 */
class ListUsersForGroupResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组关联的用户总数。
         */
        this.TotalNum = null;
        /**
         * 子用户信息。
         */
        this.UserInfo = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.UserInfo) {
            this.UserInfo = new Array();
            for (let z in params.UserInfo) {
                let obj = new GroupMemberInfo();
                obj.deserialize(params.UserInfo[z]);
                this.UserInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 策略版本详情
 * @class
 */
class PolicyVersionDetail extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略版本号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VersionId = null;
        /**
         * 策略版本创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateDate = null;
        /**
         * 是否是正在生效的版本。0表示不是，1表示是
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IsDefaultVersion = null;
        /**
         * 策略语法文本
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Document = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionId = 'VersionId' in params ? params.VersionId : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.IsDefaultVersion = 'IsDefaultVersion' in params ? params.IsDefaultVersion : null;
        this.Document = 'Document' in params ? params.Document : null;
    }
}
/**
 * AddUser返回参数结构体
 * @class
 */
class AddUserResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户 UIN
         */
        this.Uin = null;
        /**
         * 子用户用户名
         */
        this.Name = null;
        /**
         * 如果输入参数组合为自动生成随机密码，则返回生成的密码
         */
        this.Password = null;
        /**
         * 子用户密钥 ID
         */
        this.SecretId = null;
        /**
         * 子用户密钥 Key
         */
        this.SecretKey = null;
        /**
         * 子用户 UID
         */
        this.Uid = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListEntitiesForPolicy返回参数结构体
 * @class
 */
class ListEntitiesForPolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实体总数
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TotalNum = null;
        /**
         * 实体列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.List = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new AttachEntityOfPolicy();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AddUserToGroup返回参数结构体
 * @class
 */
class AddUserToGroupResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AttachUserPolicy返回参数结构体
 * @class
 */
class AttachUserPolicyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * PutRolePermissionsBoundary返回参数结构体
 * @class
 */
class PutRolePermissionsBoundaryResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SetMfaFlag请求参数结构体
 * @class
 */
class SetMfaFlagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 设置用户的uin
         */
        this.OpUin = null;
        /**
         * 登录保护设置
         */
        this.LoginFlag = null;
        /**
         * 操作保护设置
         */
        this.ActionFlag = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpUin = 'OpUin' in params ? params.OpUin : null;
        if (params.LoginFlag) {
            let obj = new LoginActionMfaFlag();
            obj.deserialize(params.LoginFlag);
            this.LoginFlag = obj;
        }
        if (params.ActionFlag) {
            let obj = new LoginActionMfaFlag();
            obj.deserialize(params.ActionFlag);
            this.ActionFlag = obj;
        }
    }
}
/**
 * ListCollaborators返回参数结构体
 * @class
 */
class ListCollaboratorsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总数
         */
        this.TotalNum = null;
        /**
         * 协作者信息
         */
        this.Data = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SubAccountInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListAccessKeys返回参数结构体
 * @class
 */
class ListAccessKeysResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 访问密钥列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AccessKeys = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.AccessKeys) {
            this.AccessKeys = new Array();
            for (let z in params.AccessKeys) {
                let obj = new AccessKey();
                obj.deserialize(params.AccessKeys[z]);
                this.AccessKeys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListAttachedUserPolicies请求参数结构体
 * @class
 */
class ListAttachedUserPoliciesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子账号 uin
         */
        this.TargetUin = null;
        /**
         * 页码，默认值是 1，从 1 开始
         */
        this.Page = null;
        /**
         * 每页大小，默认值是 20
         */
        this.Rp = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetUin = 'TargetUin' in params ? params.TargetUin : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Rp = 'Rp' in params ? params.Rp : null;
    }
}
/**
 * UpdatePolicy请求参数结构体
 * @class
 */
class UpdatePolicyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 策略ID，与PolicyName二选一必填
         */
        this.PolicyId = null;
        /**
         * 策略名，与PolicyId二选一必填
         */
        this.PolicyName = null;
        /**
         * 策略描述
         */
        this.Description = null;
        /**
         * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
         */
        this.PolicyDocument = null;
        /**
         * 预设策略备注
         */
        this.Alias = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PolicyDocument = 'PolicyDocument' in params ? params.PolicyDocument : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
    }
}
/**
 * 用户组用户信息
 * @class
 */
class GroupMemberInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 子用户 Uid。
         */
        this.Uid = null;
        /**
         * 子用户 Uin。
         */
        this.Uin = null;
        /**
         * 子用户名称。
         */
        this.Name = null;
        /**
         * 手机号。
         */
        this.PhoneNum = null;
        /**
         * 手机区域代码。
         */
        this.CountryCode = null;
        /**
         * 是否已验证手机。
         */
        this.PhoneFlag = null;
        /**
         * 邮箱地址。
         */
        this.Email = null;
        /**
         * 是否已验证邮箱。
         */
        this.EmailFlag = null;
        /**
         * 用户类型。
         */
        this.UserType = null;
        /**
         * 创建时间。
         */
        this.CreateTime = null;
        /**
         * 是否为主消息接收人。
         */
        this.IsReceiverOwner = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.PhoneFlag = 'PhoneFlag' in params ? params.PhoneFlag : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.EmailFlag = 'EmailFlag' in params ? params.EmailFlag : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsReceiverOwner = 'IsReceiverOwner' in params ? params.IsReceiverOwner : null;
    }
}
/**
 * CreateGroup返回参数结构体
 * @class
 */
class CreateGroupResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户组 ID
         */
        this.GroupId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
exports.Models = {
    GetUserResponse: GetUserResponse,
    ListAccessKeysRequest: ListAccessKeysRequest,
    SetMfaFlagResponse: SetMfaFlagResponse,
    DeleteUserRequest: DeleteUserRequest,
    DetachGroupPolicyRequest: DetachGroupPolicyRequest,
    DescribeRoleListResponse: DescribeRoleListResponse,
    CreatePolicyResponse: CreatePolicyResponse,
    GetRoleRequest: GetRoleRequest,
    CreateServiceLinkedRoleRequest: CreateServiceLinkedRoleRequest,
    ListAttachedGroupPoliciesRequest: ListAttachedGroupPoliciesRequest,
    ListGroupsForUserRequest: ListGroupsForUserRequest,
    AttachRolePolicyResponse: AttachRolePolicyResponse,
    GetServiceLinkedRoleDeletionStatusResponse: GetServiceLinkedRoleDeletionStatusResponse,
    DeleteUserPermissionsBoundaryResponse: DeleteUserPermissionsBoundaryResponse,
    ListUsersResponse: ListUsersResponse,
    UpdateRoleDescriptionResponse: UpdateRoleDescriptionResponse,
    DetachUserPolicyRequest: DetachUserPolicyRequest,
    ListGroupsResponse: ListGroupsResponse,
    ListPolicyVersionsRequest: ListPolicyVersionsRequest,
    GetCustomMFATokenInfoRequest: GetCustomMFATokenInfoRequest,
    DescribeRoleListRequest: DescribeRoleListRequest,
    GetGroupRequest: GetGroupRequest,
    DeleteRoleResponse: DeleteRoleResponse,
    PolicyVersionItem: PolicyVersionItem,
    DeleteUserPermissionsBoundaryRequest: DeleteUserPermissionsBoundaryRequest,
    ListSAMLProvidersRequest: ListSAMLProvidersRequest,
    ListGroupsRequest: ListGroupsRequest,
    DeletePolicyVersionResponse: DeletePolicyVersionResponse,
    UpdateSAMLProviderRequest: UpdateSAMLProviderRequest,
    UpdateAssumeRolePolicyRequest: UpdateAssumeRolePolicyRequest,
    ListGroupsForUserResponse: ListGroupsForUserResponse,
    ListUsersForGroupRequest: ListUsersForGroupRequest,
    RemoveUserFromGroupRequest: RemoveUserFromGroupRequest,
    CreatePolicyVersionResponse: CreatePolicyVersionResponse,
    ListPoliciesResponse: ListPoliciesResponse,
    GroupIdOfUidInfo: GroupIdOfUidInfo,
    UpdateRoleDescriptionRequest: UpdateRoleDescriptionRequest,
    SetDefaultPolicyVersionRequest: SetDefaultPolicyVersionRequest,
    RoleInfo: RoleInfo,
    CreatePolicyVersionRequest: CreatePolicyVersionRequest,
    DeleteGroupRequest: DeleteGroupRequest,
    ListAttachedRolePoliciesResponse: ListAttachedRolePoliciesResponse,
    DeleteUserResponse: DeleteUserResponse,
    DetachRolePolicyRequest: DetachRolePolicyRequest,
    DeleteRolePermissionsBoundaryRequest: DeleteRolePermissionsBoundaryRequest,
    StrategyInfo: StrategyInfo,
    DeletePolicyRequest: DeletePolicyRequest,
    GroupInfo: GroupInfo,
    AddUserRequest: AddUserRequest,
    DeleteRoleRequest: DeleteRoleRequest,
    UpdateRoleConsoleLoginRequest: UpdateRoleConsoleLoginRequest,
    GetCustomMFATokenInfoResponse: GetCustomMFATokenInfoResponse,
    UpdateAssumeRolePolicyResponse: UpdateAssumeRolePolicyResponse,
    ListAttachedUserPoliciesResponse: ListAttachedUserPoliciesResponse,
    CreateSAMLProviderResponse: CreateSAMLProviderResponse,
    DeleteRolePermissionsBoundaryResponse: DeleteRolePermissionsBoundaryResponse,
    GetUserRequest: GetUserRequest,
    LoginActionMfaFlag: LoginActionMfaFlag,
    SubAccountInfo: SubAccountInfo,
    CreateGroupRequest: CreateGroupRequest,
    SAMLProviderInfo: SAMLProviderInfo,
    UpdateSAMLProviderResponse: UpdateSAMLProviderResponse,
    UpdateUserRequest: UpdateUserRequest,
    CreateSAMLProviderRequest: CreateSAMLProviderRequest,
    AttachPolicyInfo: AttachPolicyInfo,
    PutRolePermissionsBoundaryRequest: PutRolePermissionsBoundaryRequest,
    UpdateRoleConsoleLoginResponse: UpdateRoleConsoleLoginResponse,
    AttachRolePolicyRequest: AttachRolePolicyRequest,
    ConsumeCustomMFATokenResponse: ConsumeCustomMFATokenResponse,
    AttachUserPolicyRequest: AttachUserPolicyRequest,
    ListAttachedGroupPoliciesResponse: ListAttachedGroupPoliciesResponse,
    GetPolicyVersionRequest: GetPolicyVersionRequest,
    PutUserPermissionsBoundaryResponse: PutUserPermissionsBoundaryResponse,
    DeletePolicyResponse: DeletePolicyResponse,
    ConsumeCustomMFATokenRequest: ConsumeCustomMFATokenRequest,
    AccessKey: AccessKey,
    GetGroupResponse: GetGroupResponse,
    DeleteSAMLProviderRequest: DeleteSAMLProviderRequest,
    DeleteSAMLProviderResponse: DeleteSAMLProviderResponse,
    UpdateUserResponse: UpdateUserResponse,
    CreateServiceLinkedRoleResponse: CreateServiceLinkedRoleResponse,
    ListUsersRequest: ListUsersRequest,
    ListCollaboratorsRequest: ListCollaboratorsRequest,
    UpdatePolicyResponse: UpdatePolicyResponse,
    AttachGroupPolicyResponse: AttachGroupPolicyResponse,
    UpdateGroupResponse: UpdateGroupResponse,
    ListEntitiesForPolicyRequest: ListEntitiesForPolicyRequest,
    ListPoliciesRequest: ListPoliciesRequest,
    GetServiceLinkedRoleDeletionStatusRequest: GetServiceLinkedRoleDeletionStatusRequest,
    DetachGroupPolicyResponse: DetachGroupPolicyResponse,
    CreatePolicyRequest: CreatePolicyRequest,
    DeletePolicyVersionRequest: DeletePolicyVersionRequest,
    UpdateGroupRequest: UpdateGroupRequest,
    GetPolicyVersionResponse: GetPolicyVersionResponse,
    CreateRoleResponse: CreateRoleResponse,
    GetSAMLProviderResponse: GetSAMLProviderResponse,
    ListPolicyVersionsResponse: ListPolicyVersionsResponse,
    GetPolicyRequest: GetPolicyRequest,
    AddUserToGroupRequest: AddUserToGroupRequest,
    RemoveUserFromGroupResponse: RemoveUserFromGroupResponse,
    DetachRolePolicyResponse: DetachRolePolicyResponse,
    AttachedPolicyOfRole: AttachedPolicyOfRole,
    PutUserPermissionsBoundaryRequest: PutUserPermissionsBoundaryRequest,
    ListSAMLProvidersResponse: ListSAMLProvidersResponse,
    SetDefaultPolicyVersionResponse: SetDefaultPolicyVersionResponse,
    ListAttachedRolePoliciesRequest: ListAttachedRolePoliciesRequest,
    GetSAMLProviderRequest: GetSAMLProviderRequest,
    DetachUserPolicyResponse: DetachUserPolicyResponse,
    GetRoleResponse: GetRoleResponse,
    CreateRoleRequest: CreateRoleRequest,
    DeleteServiceLinkedRoleResponse: DeleteServiceLinkedRoleResponse,
    GetPolicyResponse: GetPolicyResponse,
    DeleteGroupResponse: DeleteGroupResponse,
    AttachGroupPolicyRequest: AttachGroupPolicyRequest,
    DeleteServiceLinkedRoleRequest: DeleteServiceLinkedRoleRequest,
    AttachEntityOfPolicy: AttachEntityOfPolicy,
    ListUsersForGroupResponse: ListUsersForGroupResponse,
    PolicyVersionDetail: PolicyVersionDetail,
    AddUserResponse: AddUserResponse,
    ListEntitiesForPolicyResponse: ListEntitiesForPolicyResponse,
    AddUserToGroupResponse: AddUserToGroupResponse,
    AttachUserPolicyResponse: AttachUserPolicyResponse,
    PutRolePermissionsBoundaryResponse: PutRolePermissionsBoundaryResponse,
    SetMfaFlagRequest: SetMfaFlagRequest,
    ListCollaboratorsResponse: ListCollaboratorsResponse,
    ListAccessKeysResponse: ListAccessKeysResponse,
    ListAttachedUserPoliciesRequest: ListAttachedUserPoliciesRequest,
    UpdatePolicyRequest: UpdatePolicyRequest,
    GroupMemberInfo: GroupMemberInfo,
    CreateGroupResponse: CreateGroupResponse,
};
//# sourceMappingURL=models.js.map