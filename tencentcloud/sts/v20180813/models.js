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
 * AssumeRoleWithSAML返回参数结构体
 * @class
 */
class AssumeRoleWithSAMLResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 对象里面包含 Token，TmpSecretId，TmpSecretKey 三元组
         */
        this.Credentials = null;
        /**
         * 证书无效的时间，返回 Unix 时间戳，精确到秒
         */
        this.ExpiredTime = null;
        /**
         * 证书无效的时间，以 ISO8601 格式的 UTC 时间表示
         */
        this.Expiration = null;
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
        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials);
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * API密钥数据列表
 * @class
 */
class ApiKey extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 密钥ID
         */
        this.SecretId = null;
        /**
         * 创建时间(时间戳)
         */
        this.CreateTime = null;
        /**
         * 状态(2:有效, 3:禁用, 4:已删除)
         */
        this.Status = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
    }
}
/**
 * AssumeRoleWithSAML请求参数结构体
 * @class
 */
class AssumeRoleWithSAMLRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * base64 编码的 SAML 断言信息
         */
        this.SAMLAssertion = null;
        /**
         * 扮演者访问描述名
         */
        this.PrincipalArn = null;
        /**
         * 角色访问描述名
         */
        this.RoleArn = null;
        /**
         * 会话名称
         */
        this.RoleSessionName = null;
        /**
         * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 7200 秒
         */
        this.DurationSeconds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SAMLAssertion = 'SAMLAssertion' in params ? params.SAMLAssertion : null;
        this.PrincipalArn = 'PrincipalArn' in params ? params.PrincipalArn : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;
    }
}
/**
 * GetFederationToken返回参数结构体
 * @class
 */
class GetFederationTokenResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 临时证书
         */
        this.Credentials = null;
        /**
         * 临时证书有效的时间，返回 Unix 时间戳，精确到秒
         */
        this.ExpiredTime = null;
        /**
         * 证书有效的时间，以 iso8601 格式的 UTC 时间表示
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Expiration = null;
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
        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials);
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * QueryApiKey返回参数结构体
 * @class
 */
class QueryApiKeyResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 密钥ID列表
         */
        this.IdKeys = null;
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
        if (params.IdKeys) {
            this.IdKeys = new Array();
            for (let z in params.IdKeys) {
                let obj = new ApiKey();
                obj.deserialize(params.IdKeys[z]);
                this.IdKeys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AssumeRole返回参数结构体
 * @class
 */
class AssumeRoleResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 临时安全证书
         */
        this.Credentials = null;
        /**
         * 证书无效的时间，返回 Unix 时间戳，精确到秒
         */
        this.ExpiredTime = null;
        /**
         * 证书无效的时间，以 iso8601 格式的 UTC 时间表示
         */
        this.Expiration = null;
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
        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials);
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * QueryApiKey请求参数结构体
 * @class
 */
class QueryApiKeyRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待查询的账号(不填默认查当前账号)
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
 * GetFederationToken请求参数结构体
 * @class
 */
class GetFederationTokenRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 您可以自定义调用方英文名称，由字母组成。
         */
        this.Name = null;
        /**
         * 授予该临时证书权限的CAM策略
注意：
1、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。
2、策略中不能包含 principal 元素。
3、该参数需要做urlencode。
         */
        this.Policy = null;
        /**
         * 指定临时证书的有效期，单位：秒，默认1800秒，最长可设定有效期为7200秒。
         */
        this.DurationSeconds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;
    }
}
/**
 * 临时证书
 * @class
 */
class Credentials extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * token
         */
        this.Token = null;
        /**
         * 临时证书密钥ID
         */
        this.TmpSecretId = null;
        /**
         * 临时证书密钥Key
         */
        this.TmpSecretKey = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
    }
}
/**
 * AssumeRole请求参数结构体
 * @class
 */
class AssumeRoleRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 角色的资源描述。例如：qcs::cam::uin/12345678:role/4611686018427397919、qcs::cam::uin/12345678:roleName/testRoleName
         */
        this.RoleArn = null;
        /**
         * 临时会话名称，由用户自定义名称
         */
        this.RoleSessionName = null;
        /**
         * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
         */
        this.DurationSeconds = null;
        /**
         * 策略描述
注意：
1、policy 需要做 urlencode（如果通过 GET 方法请求云 API，发送请求前，所有参数都需要按照[云 API 规范](https://cloud.tencent.com/document/api/598/33159#1.-.E6.8B.BC.E6.8E.A5.E8.A7.84.E8.8C.83.E8.AF.B7.E6.B1.82.E4.B8.B2)再 urlencode 一次）。
2、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。
3、策略中不能包含 principal 元素。
         */
        this.Policy = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
    }
}
exports.Models = {
    AssumeRoleWithSAMLResponse: AssumeRoleWithSAMLResponse,
    ApiKey: ApiKey,
    AssumeRoleWithSAMLRequest: AssumeRoleWithSAMLRequest,
    GetFederationTokenResponse: GetFederationTokenResponse,
    QueryApiKeyResponse: QueryApiKeyResponse,
    AssumeRoleResponse: AssumeRoleResponse,
    QueryApiKeyRequest: QueryApiKeyRequest,
    GetFederationTokenRequest: GetFederationTokenRequest,
    Credentials: Credentials,
    AssumeRoleRequest: AssumeRoleRequest,
};
//# sourceMappingURL=models.js.map