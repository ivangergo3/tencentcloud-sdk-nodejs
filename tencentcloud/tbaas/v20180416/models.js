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
 * Query请求参数结构体
 * @class
 */
class QueryRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：query
         */
        this.Operation = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 业务所属智能合约名称，可在智能合约详情或列表中获取
         */
        this.ChaincodeName = null;
        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         */
        this.ChannelName = null;
        /**
         * 执行该查询交易的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称极其所属组织名称
         */
        this.Peers = null;
        /**
         * 该笔交易查询需要调用的智能合约中的函数名称
         */
        this.FuncName = null;
        /**
         * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
        /**
         * 被调用的函数参数列表
         */
        this.Args = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        if (params.Peers) {
            this.Peers = new Array();
            for (let z in params.Peers) {
                let obj = new PeerSet();
                obj.deserialize(params.Peers[z]);
                this.Peers.push(obj);
            }
        }
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Args = 'Args' in params ? params.Args : null;
    }
}
/**
 * GetBlockTransactionListForUser返回参数结构体
 * @class
 */
class GetBlockTransactionListForUserResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易总数量
         */
        this.TotalCount = null;
        /**
         * 交易列表
         */
        this.TransactionList = null;
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
        if (params.TransactionList) {
            this.TransactionList = new Array();
            for (let z in params.TransactionList) {
                let obj = new TransactionItem();
                obj.deserialize(params.TransactionList[z]);
                this.TransactionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SendTransactionHandler返回参数结构体
 * @class
 */
class SendTransactionHandlerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易结果json字符串
         */
        this.TransactionRsp = null;
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
        this.TransactionRsp = 'TransactionRsp' in params ? params.TransactionRsp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ApplyUserCert请求参数结构体
 * @class
 */
class ApplyUserCertRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：cert_mng
         */
        this.Module = null;
        /**
         * 操作名，固定字段：cert_apply_for_user
         */
        this.Operation = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 申请证书的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
        /**
         * 用户证书标识，用于标识用户证书，要求由纯小写字母组成，长度小于10
         */
        this.UserIdentity = null;
        /**
         * 证书申请实体，使用腾讯云账号实名认证的名称
         */
        this.Applicant = null;
        /**
         * 证件号码。如果腾讯云账号对应的实名认证类型为企业认证，填入“0”；如果腾讯云账号对应的实名认证类型为个人认证，填入个人身份证号码
         */
        this.IdentityNum = null;
        /**
         * csr p10证书文件。需要用户根据文档生成证书的CSR文件
         */
        this.CsrData = null;
        /**
         * 证书备注信息
         */
        this.Notes = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.UserIdentity = 'UserIdentity' in params ? params.UserIdentity : null;
        this.Applicant = 'Applicant' in params ? params.Applicant : null;
        this.IdentityNum = 'IdentityNum' in params ? params.IdentityNum : null;
        this.CsrData = 'CsrData' in params ? params.CsrData : null;
        this.Notes = 'Notes' in params ? params.Notes : null;
    }
}
/**
 * TransByDynamicContractHandler请求参数结构体
 * @class
 */
class TransByDynamicContractHandlerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：trans_by_dynamic_contract
         */
        this.Operation = null;
        /**
         * 群组编号
         */
        this.GroupPk = null;
        /**
         * 合约地址（合约部署成功，可得到合约地址）
         */
        this.ContractAddress = null;
        /**
         * 合约名
         */
        this.ContractName = null;
        /**
         * 合约编译后的abi
         */
        this.AbiInfo = null;
        /**
         * 合约被调用方法名
         */
        this.FuncName = null;
        /**
         * 合约被调用方法的入参
         */
        this.FuncParam = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.ContractAddress = 'ContractAddress' in params ? params.ContractAddress : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;
        this.AbiInfo = 'AbiInfo' in params ? params.AbiInfo : null;
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.FuncParam = 'FuncParam' in params ? params.FuncParam : null;
    }
}
/**
 * GetTransListHandler返回参数结构体
 * @class
 */
class GetTransListHandlerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总记录数
         */
        this.TotalCount = null;
        /**
         * 当前群组编号
         */
        this.GroupPk = null;
        /**
         * 返回数据列表
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BcosTransInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeployDynamicContractHandler返回参数结构体
 * @class
 */
class DeployDynamicContractHandlerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 部署成功返回的合约地址
         */
        this.ContractAddress = null;
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
        this.ContractAddress = 'ContractAddress' in params ? params.ContractAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ApplyUserCert返回参数结构体
 * @class
 */
class ApplyUserCertResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 证书ID
         */
        this.CertId = null;
        /**
         * 证书DN
         */
        this.CertDn = null;
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertDn = 'CertDn' in params ? params.CertDn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetInvokeTx请求参数结构体
 * @class
 */
class GetInvokeTxRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：query_txid
         */
        this.Operation = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         */
        this.ChannelName = null;
        /**
         * 执行该查询交易的节点名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
         */
        this.PeerName = null;
        /**
         * 执行该查询交易的节点所属组织名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
         */
        this.PeerGroup = null;
        /**
         * 交易ID
         */
        this.TxId = null;
        /**
         * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.PeerGroup = 'PeerGroup' in params ? params.PeerGroup : null;
        this.TxId = 'TxId' in params ? params.TxId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
    }
}
/**
 * Invoke返回参数结构体
 * @class
 */
class InvokeResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易ID
         */
        this.Txid = null;
        /**
         * 交易执行结果
         */
        this.Events = null;
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
        this.Txid = 'Txid' in params ? params.Txid : null;
        this.Events = 'Events' in params ? params.Events : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DownloadUserCert返回参数结构体
 * @class
 */
class DownloadUserCertResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 证书名称
         */
        this.CertName = null;
        /**
         * 证书内容
         */
        this.CertCtx = null;
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
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertCtx = 'CertCtx' in params ? params.CertCtx : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetLatesdTransactionList请求参数结构体
 * @class
 */
class GetLatesdTransactionListRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名称，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名称，固定字段：latest_transaction_list
         */
        this.Operation = null;
        /**
         * 组织ID，固定字段：0
         */
        this.GroupId = null;
        /**
         * 通道ID，固定字段：0
         */
        this.ChannelId = null;
        /**
         * 获取的最新交易的区块数量，取值范围1~5
         */
        this.LatestBlockNumber = null;
        /**
         * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
        /**
         * 需要查询的通道名称，可在通道详情或列表中获取
         */
        this.ChannelName = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 需要获取的起始交易偏移
         */
        this.Offset = null;
        /**
         * 需要获取的交易数量
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.LatestBlockNumber = 'LatestBlockNumber' in params ? params.LatestBlockNumber : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * GetTransactionDetailForUser请求参数结构体
 * @class
 */
class GetTransactionDetailForUserRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：transaction_detail_for_user
         */
        this.Operation = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         */
        this.ChannelName = null;
        /**
         * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
         */
        this.BlockId = null;
        /**
         * 交易ID，需要查询的详情的交易ID
         */
        this.TransactionId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
    }
}
/**
 * GetBlockList返回参数结构体
 * @class
 */
class GetBlockListResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 区块数量
         */
        this.TotalCount = null;
        /**
         * 区块列表
         */
        this.BlockList = null;
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
        if (params.BlockList) {
            this.BlockList = new Array();
            for (let z in params.BlockList) {
                let obj = new Block();
                obj.deserialize(params.BlockList[z]);
                this.BlockList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SrvInvoke请求参数结构体
 * @class
 */
class SrvInvokeRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 服务类型，iss或者dam
         */
        this.Service = null;
        /**
         * 服务接口，要调用的方法函数名
         */
        this.Method = null;
        /**
         * 用户自定义json字符串
         */
        this.Param = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Service = 'Service' in params ? params.Service : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Param = 'Param' in params ? params.Param : null;
    }
}
/**
 * BlockByNumberHandler返回参数结构体
 * @class
 */
class BlockByNumberHandlerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回区块json字符串
         */
        this.BlockJson = null;
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
        this.BlockJson = 'BlockJson' in params ? params.BlockJson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetTransByHashHandler返回参数结构体
 * @class
 */
class GetTransByHashHandlerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易信息json字符串
         */
        this.TransactionJson = null;
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
        this.TransactionJson = 'TransactionJson' in params ? params.TransactionJson : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeployDynamicContractHandler请求参数结构体
 * @class
 */
class DeployDynamicContractHandlerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：contract
         */
        this.Module = null;
        /**
         * 操作名，固定字段：deploy_by_dynamic_contract
         */
        this.Operation = null;
        /**
         * 群组编号
         */
        this.GroupPk = null;
        /**
         * 合约名称
         */
        this.ContractName = null;
        /**
         * 合约编译后的abi
         */
        this.AbiInfo = null;
        /**
         * 合约编译后的binary
         */
        this.ByteCodeBin = null;
        /**
         * 构造函数入参
         */
        this.ConstructorParams = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;
        this.AbiInfo = 'AbiInfo' in params ? params.AbiInfo : null;
        this.ByteCodeBin = 'ByteCodeBin' in params ? params.ByteCodeBin : null;
        this.ConstructorParams = 'ConstructorParams' in params ? params.ConstructorParams : null;
    }
}
/**
 * GetLatesdTransactionList返回参数结构体
 * @class
 */
class GetLatesdTransactionListResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易总数量
         */
        this.TotalCount = null;
        /**
         * 交易列表
         */
        this.TransactionList = null;
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
        if (params.TransactionList) {
            this.TransactionList = new Array();
            for (let z in params.TransactionList) {
                let obj = new TransactionItem();
                obj.deserialize(params.TransactionList[z]);
                this.TransactionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DownloadUserCert请求参数结构体
 * @class
 */
class DownloadUserCertRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：cert_mng
         */
        this.Module = null;
        /**
         * 操作名，固定字段：cert_download_for_user
         */
        this.Operation = null;
        /**
         * 证书ID，可以在证书详情页面获取
         */
        this.CertId = null;
        /**
         * 证书DN，可以在证书详情页面获取
         */
        this.CertDn = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 下载证书的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertDn = 'CertDn' in params ? params.CertDn : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
    }
}
/**
 * GetClusterSummary返回参数结构体
 * @class
 */
class GetClusterSummaryResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 网络通道总数量
         */
        this.TotalChannelCount = null;
        /**
         * 当前组织创建的通道数量
         */
        this.MyChannelCount = null;
        /**
         * 当前组织加入的通道数量
         */
        this.JoinChannelCount = null;
        /**
         * 网络节点总数量
         */
        this.TotalPeerCount = null;
        /**
         * 当前组织创建的节点数量
         */
        this.MyPeerCount = null;
        /**
         * 其他组织创建的节点数量
         */
        this.OrderCount = null;
        /**
         * 网络组织总数量
         */
        this.TotalGroupCount = null;
        /**
         * 当前组织创建的组织数量
         */
        this.MyGroupCount = null;
        /**
         * 网络智能合约总数量
         */
        this.TotalChaincodeCount = null;
        /**
         * 最近7天发起的智能合约数量
         */
        this.RecentChaincodeCount = null;
        /**
         * 当前组织发起的智能合约数量
         */
        this.MyChaincodeCount = null;
        /**
         * 当前组织的证书总数量
         */
        this.TotalCertCount = null;
        /**
         * 颁发给当前组织的证书数量
         */
        this.TlsCertCount = null;
        /**
         * 网络背书节点证书数量
         */
        this.PeerCertCount = null;
        /**
         * 当前组织业务证书数量
         */
        this.ClientCertCount = null;
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
        this.TotalChannelCount = 'TotalChannelCount' in params ? params.TotalChannelCount : null;
        this.MyChannelCount = 'MyChannelCount' in params ? params.MyChannelCount : null;
        this.JoinChannelCount = 'JoinChannelCount' in params ? params.JoinChannelCount : null;
        this.TotalPeerCount = 'TotalPeerCount' in params ? params.TotalPeerCount : null;
        this.MyPeerCount = 'MyPeerCount' in params ? params.MyPeerCount : null;
        this.OrderCount = 'OrderCount' in params ? params.OrderCount : null;
        this.TotalGroupCount = 'TotalGroupCount' in params ? params.TotalGroupCount : null;
        this.MyGroupCount = 'MyGroupCount' in params ? params.MyGroupCount : null;
        this.TotalChaincodeCount = 'TotalChaincodeCount' in params ? params.TotalChaincodeCount : null;
        this.RecentChaincodeCount = 'RecentChaincodeCount' in params ? params.RecentChaincodeCount : null;
        this.MyChaincodeCount = 'MyChaincodeCount' in params ? params.MyChaincodeCount : null;
        this.TotalCertCount = 'TotalCertCount' in params ? params.TotalCertCount : null;
        this.TlsCertCount = 'TlsCertCount' in params ? params.TlsCertCount : null;
        this.PeerCertCount = 'PeerCertCount' in params ? params.PeerCertCount : null;
        this.ClientCertCount = 'ClientCertCount' in params ? params.ClientCertCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * TransByDynamicContractHandler返回参数结构体
 * @class
 */
class TransByDynamicContractHandlerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易结果json字符串
         */
        this.TransactionRsp = null;
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
        this.TransactionRsp = 'TransactionRsp' in params ? params.TransactionRsp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * PeerSet
 * @class
 */
class PeerSet extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 节点名称
         */
        this.PeerName = null;
        /**
         * 组织名称
         */
        this.OrgName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeerName = 'PeerName' in params ? params.PeerName : null;
        this.OrgName = 'OrgName' in params ? params.OrgName : null;
    }
}
/**
 * GetBlockTransactionListForUser请求参数结构体
 * @class
 */
class GetBlockTransactionListForUserRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：block_transaction_list_for_user
         */
        this.Operation = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         */
        this.ChannelName = null;
        /**
         * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
         */
        this.BlockId = null;
        /**
         * 查询的交易列表起始偏移地址
         */
        this.Offset = null;
        /**
         * 查询的交易列表数量
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * SrvInvoke返回参数结构体
 * @class
 */
class SrvInvokeResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回码
         */
        this.RetCode = null;
        /**
         * 返回消息
         */
        this.RetMsg = null;
        /**
         * 返回数据
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
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetBlockListHandler请求参数结构体
 * @class
 */
class GetBlockListHandlerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：block
         */
        this.Module = null;
        /**
         * 操作名，固定字段：get_block_list
         */
        this.Operation = null;
        /**
         * 记录偏移数
         */
        this.Offset = null;
        /**
         * 每页记录数
         */
        this.Limit = null;
        /**
         * 当前群组编号
         */
        this.GroupPk = null;
        /**
         * 区块哈希
         */
        this.BlockHash = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;
    }
}
/**
 * GetClusterSummary请求参数结构体
 * @class
 */
class GetClusterSummaryRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名称，固定字段：cluster_mng
         */
        this.Module = null;
        /**
         * 操作名称，固定字段：cluster_summary
         */
        this.Operation = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 组织ID，固定字段：0
         */
        this.GroupId = null;
        /**
         * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
    }
}
/**
 * 区块对象
 * @class
 */
class Block extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 区块编号
         */
        this.BlockNum = null;
        /**
         * 区块Hash数值
         */
        this.DataHash = null;
        /**
         * 区块ID，与区块编号一致
         */
        this.BlockId = null;
        /**
         * 前一个区块Hash（未使用）,与区块Hash数值一致
         */
        this.PreHash = null;
        /**
         * 区块内的交易数量
         */
        this.TxCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlockNum = 'BlockNum' in params ? params.BlockNum : null;
        this.DataHash = 'DataHash' in params ? params.DataHash : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.PreHash = 'PreHash' in params ? params.PreHash : null;
        this.TxCount = 'TxCount' in params ? params.TxCount : null;
    }
}
/**
 * GetBlockList请求参数结构体
 * @class
 */
class GetBlockListRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名称，固定字段：block
         */
        this.Module = null;
        /**
         * 操作名称，固定字段：block_list
         */
        this.Operation = null;
        /**
         * 通道ID，固定字段：0
         */
        this.ChannelId = null;
        /**
         * 组织ID，固定字段：0
         */
        this.GroupId = null;
        /**
         * 需要查询的通道名称，可在通道详情或列表中获取
         */
        this.ChannelName = null;
        /**
         * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 需要获取的起始交易偏移
         */
        this.Offset = null;
        /**
         * 需要获取的交易数量
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ChannelId = 'ChannelId' in params ? params.ChannelId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * Bcos交易信息对象
 * @class
 */
class BcosTransInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 所属区块高度
         */
        this.BlockNumber = null;
        /**
         * 区块时间戳
         */
        this.BlockTimestamp = null;
        /**
         * 交易哈希
         */
        this.TransHash = null;
        /**
         * 交易发起者
         */
        this.TransFrom = null;
        /**
         * 交易接收者
         */
        this.TransTo = null;
        /**
         * 落库时间
         */
        this.CreateTime = null;
        /**
         * 修改时间
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
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;
        this.BlockTimestamp = 'BlockTimestamp' in params ? params.BlockTimestamp : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;
        this.TransFrom = 'TransFrom' in params ? params.TransFrom : null;
        this.TransTo = 'TransTo' in params ? params.TransTo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
    }
}
/**
 * Invoke请求参数结构体
 * @class
 */
class InvokeRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：invoke
         */
        this.Operation = null;
        /**
         * 区块链网络ID，可在区块链网络详情或列表中获取
         */
        this.ClusterId = null;
        /**
         * 业务所属智能合约名称，可在智能合约详情或列表中获取
         */
        this.ChaincodeName = null;
        /**
         * 业务所属通道名称，可在通道详情或列表中获取
         */
        this.ChannelName = null;
        /**
         * 对该笔交易进行背书的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称极其所属组织名称
         */
        this.Peers = null;
        /**
         * 该笔交易需要调用的智能合约中的函数名称
         */
        this.FuncName = null;
        /**
         * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
         */
        this.GroupName = null;
        /**
         * 被调用的函数参数列表
         */
        this.Args = null;
        /**
         * 同步调用标识，可选参数，值为0或者不传表示使用同步方法调用，调用后会等待交易执行后再返回执行结果；值为1时表示使用异步方式调用Invoke，执行后会立即返回交易对应的Txid，后续需要通过GetInvokeTx这个API查询该交易的执行结果。（对于逻辑较为简单的交易，可以使用同步模式；对于逻辑较为复杂的交易，建议使用异步模式，否则容易导致API因等待时间过长，返回等待超时）
         */
        this.AsyncFlag = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ChaincodeName = 'ChaincodeName' in params ? params.ChaincodeName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        if (params.Peers) {
            this.Peers = new Array();
            for (let z in params.Peers) {
                let obj = new PeerSet();
                obj.deserialize(params.Peers[z]);
                this.Peers.push(obj);
            }
        }
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.AsyncFlag = 'AsyncFlag' in params ? params.AsyncFlag : null;
    }
}
/**
 * GetInvokeTx返回参数结构体
 * @class
 */
class GetInvokeTxResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易执行状态码
         */
        this.TxValidationCode = null;
        /**
         * 交易执行消息
         */
        this.TxValidationMsg = null;
        /**
         * 交易所在区块ID
         */
        this.BlockId = null;
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
        this.TxValidationCode = 'TxValidationCode' in params ? params.TxValidationCode : null;
        this.TxValidationMsg = 'TxValidationMsg' in params ? params.TxValidationMsg : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetBlockListHandler返回参数结构体
 * @class
 */
class GetBlockListHandlerResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总记录数
         */
        this.TotalCount = null;
        /**
         * 当前群组编号
         */
        this.GroupPk = null;
        /**
         * 返回数据列表
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BcosBlockObj();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetTransactionDetailForUser返回参数结构体
 * @class
 */
class GetTransactionDetailForUserResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易ID
         */
        this.TransactionId = null;
        /**
         * 交易hash
         */
        this.TransactionHash = null;
        /**
         * 创建交易的组织名
         */
        this.CreateOrgName = null;
        /**
         * 交易类型（普通交易和配置交易）
         */
        this.TransactionType = null;
        /**
         * 交易状态
         */
        this.TransactionStatus = null;
        /**
         * 交易创建时间
         */
        this.CreateTime = null;
        /**
         * 交易数据
         */
        this.TransactionData = null;
        /**
         * 交易所在区块号
         */
        this.BlockId = null;
        /**
         * 交易所在区块哈希
         */
        this.BlockHash = null;
        /**
         * 交易所在区块高度
         */
        this.BlockHeight = null;
        /**
         * 通道名称
         */
        this.ChannelName = null;
        /**
         * 交易所在合约名称
         */
        this.ContractName = null;
        /**
         * 背书组织列表
         */
        this.EndorserOrgList = null;
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
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionHash = 'TransactionHash' in params ? params.TransactionHash : null;
        this.CreateOrgName = 'CreateOrgName' in params ? params.CreateOrgName : null;
        this.TransactionType = 'TransactionType' in params ? params.TransactionType : null;
        this.TransactionStatus = 'TransactionStatus' in params ? params.TransactionStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TransactionData = 'TransactionData' in params ? params.TransactionData : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;
        this.BlockHeight = 'BlockHeight' in params ? params.BlockHeight : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;
        if (params.EndorserOrgList) {
            this.EndorserOrgList = new Array();
            for (let z in params.EndorserOrgList) {
                let obj = new EndorserGroup();
                obj.deserialize(params.EndorserOrgList[z]);
                this.EndorserOrgList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GetTransListHandler请求参数结构体
 * @class
 */
class GetTransListHandlerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：get_trans_list
         */
        this.Operation = null;
        /**
         * 记录偏移量
         */
        this.Offset = null;
        /**
         * 每页记录数
         */
        this.Limit = null;
        /**
         * 群组编号
         */
        this.GroupPk = null;
        /**
         * 交易哈希
         */
        this.TransHash = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;
    }
}
/**
 * SendTransactionHandler请求参数结构体
 * @class
 */
class SendTransactionHandlerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：send_transaction
         */
        this.Operation = null;
        /**
         * 群组编号
         */
        this.GroupPk = null;
        /**
         * 合约编号
         */
        this.ContractId = null;
        /**
         * 合约方法名
         */
        this.FuncName = null;
        /**
         * 合约方法入参
         */
        this.FuncParam = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.ContractId = 'ContractId' in params ? params.ContractId : null;
        this.FuncName = 'FuncName' in params ? params.FuncName : null;
        this.FuncParam = 'FuncParam' in params ? params.FuncParam : null;
    }
}
/**
 * 交易列表项信息
 * @class
 */
class TransactionItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 交易ID
         */
        this.TransactionId = null;
        /**
         * 交易hash
         */
        this.TransactionHash = null;
        /**
         * 创建交易的组织名
         */
        this.CreateOrgName = null;
        /**
         * 交易所在区块号
         */
        this.BlockId = null;
        /**
         * 交易类型（普通交易和配置交易）
         */
        this.TransactionType = null;
        /**
         * 交易创建时间
         */
        this.CreateTime = null;
        /**
         * 交易所在区块高度
         */
        this.BlockHeight = null;
        /**
         * 交易状态
         */
        this.TransactionStatus = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.TransactionHash = 'TransactionHash' in params ? params.TransactionHash : null;
        this.CreateOrgName = 'CreateOrgName' in params ? params.CreateOrgName : null;
        this.BlockId = 'BlockId' in params ? params.BlockId : null;
        this.TransactionType = 'TransactionType' in params ? params.TransactionType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BlockHeight = 'BlockHeight' in params ? params.BlockHeight : null;
        this.TransactionStatus = 'TransactionStatus' in params ? params.TransactionStatus : null;
    }
}
/**
 * BlockByNumberHandler请求参数结构体
 * @class
 */
class BlockByNumberHandlerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：block
         */
        this.Module = null;
        /**
         * 操作名，固定字段：block_by_number
         */
        this.Operation = null;
        /**
         * 当前群组编号
         */
        this.GroupPk = null;
        /**
         * 区块高度
         */
        this.BlockNumber = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;
    }
}
/**
 * Bcos区块对象
 * @class
 */
class BcosBlockObj extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 区块哈希
         */
        this.BlockHash = null;
        /**
         * 区块高度
         */
        this.BlockNumber = null;
        /**
         * 区块时间戳
         */
        this.BlockTimestamp = null;
        /**
         * 打包节点ID
         */
        this.Sealer = null;
        /**
         * 打包节点索引
         */
        this.SealerIndex = null;
        /**
         * 记录保存时间
         */
        this.CreateTime = null;
        /**
         * 交易数量
         */
        this.TransCount = null;
        /**
         * 记录修改时间
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
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;
        this.BlockNumber = 'BlockNumber' in params ? params.BlockNumber : null;
        this.BlockTimestamp = 'BlockTimestamp' in params ? params.BlockTimestamp : null;
        this.Sealer = 'Sealer' in params ? params.Sealer : null;
        this.SealerIndex = 'SealerIndex' in params ? params.SealerIndex : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TransCount = 'TransCount' in params ? params.TransCount : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
    }
}
/**
 * GetTransByHashHandler请求参数结构体
 * @class
 */
class GetTransByHashHandlerRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 模块名，固定字段：transaction
         */
        this.Module = null;
        /**
         * 操作名，固定字段：get_trans_by_hash
         */
        this.Operation = null;
        /**
         * 群组编号
         */
        this.GroupPk = null;
        /**
         * 交易哈希
         */
        this.TransHash = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.GroupPk = 'GroupPk' in params ? params.GroupPk : null;
        this.TransHash = 'TransHash' in params ? params.TransHash : null;
    }
}
/**
 * Query返回参数结构体
 * @class
 */
class QueryResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询结果数据
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 背书组织及其节点列表
 * @class
 */
class EndorserGroup extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 背书组织名称
         */
        this.EndorserGroupName = null;
        /**
         * 背书节点列表
         */
        this.EndorserPeerList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndorserGroupName = 'EndorserGroupName' in params ? params.EndorserGroupName : null;
        this.EndorserPeerList = 'EndorserPeerList' in params ? params.EndorserPeerList : null;
    }
}
exports.Models = {
    QueryRequest: QueryRequest,
    GetBlockTransactionListForUserResponse: GetBlockTransactionListForUserResponse,
    SendTransactionHandlerResponse: SendTransactionHandlerResponse,
    ApplyUserCertRequest: ApplyUserCertRequest,
    TransByDynamicContractHandlerRequest: TransByDynamicContractHandlerRequest,
    GetTransListHandlerResponse: GetTransListHandlerResponse,
    DeployDynamicContractHandlerResponse: DeployDynamicContractHandlerResponse,
    ApplyUserCertResponse: ApplyUserCertResponse,
    GetInvokeTxRequest: GetInvokeTxRequest,
    InvokeResponse: InvokeResponse,
    DownloadUserCertResponse: DownloadUserCertResponse,
    GetLatesdTransactionListRequest: GetLatesdTransactionListRequest,
    GetTransactionDetailForUserRequest: GetTransactionDetailForUserRequest,
    GetBlockListResponse: GetBlockListResponse,
    SrvInvokeRequest: SrvInvokeRequest,
    BlockByNumberHandlerResponse: BlockByNumberHandlerResponse,
    GetTransByHashHandlerResponse: GetTransByHashHandlerResponse,
    DeployDynamicContractHandlerRequest: DeployDynamicContractHandlerRequest,
    GetLatesdTransactionListResponse: GetLatesdTransactionListResponse,
    DownloadUserCertRequest: DownloadUserCertRequest,
    GetClusterSummaryResponse: GetClusterSummaryResponse,
    TransByDynamicContractHandlerResponse: TransByDynamicContractHandlerResponse,
    PeerSet: PeerSet,
    GetBlockTransactionListForUserRequest: GetBlockTransactionListForUserRequest,
    SrvInvokeResponse: SrvInvokeResponse,
    GetBlockListHandlerRequest: GetBlockListHandlerRequest,
    GetClusterSummaryRequest: GetClusterSummaryRequest,
    Block: Block,
    GetBlockListRequest: GetBlockListRequest,
    BcosTransInfo: BcosTransInfo,
    InvokeRequest: InvokeRequest,
    GetInvokeTxResponse: GetInvokeTxResponse,
    GetBlockListHandlerResponse: GetBlockListHandlerResponse,
    GetTransactionDetailForUserResponse: GetTransactionDetailForUserResponse,
    GetTransListHandlerRequest: GetTransListHandlerRequest,
    SendTransactionHandlerRequest: SendTransactionHandlerRequest,
    TransactionItem: TransactionItem,
    BlockByNumberHandlerRequest: BlockByNumberHandlerRequest,
    BcosBlockObj: BcosBlockObj,
    GetTransByHashHandlerRequest: GetTransByHashHandlerRequest,
    QueryResponse: QueryResponse,
    EndorserGroup: EndorserGroup,
};
//# sourceMappingURL=models.js.map