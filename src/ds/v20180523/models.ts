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
 * SendVcode返回参数结构体
 * @class
 */
class SendVcodeResponse extends AbstractModel {

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
 * DeleteAccount请求参数结构体
 * @class
 */
class DeleteAccountRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    AccountList: Array<string> | null
    
    constructor(){
        super();

        /**
         * 模块名AccountMng
         */
        this.Module = null;

        /**
         * 操作名DeleteAccount
         */
        this.Operation = null;

        /**
         * 帐号ID列表
         */
        this.AccountList = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        AccountList: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.AccountList = 'AccountList' in params ? params.AccountList : null;

    }
}

/**
 * CreateSeal请求参数结构体
 * @class
 */
class CreateSealRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    AccountResId: string | null
    
    ImgUrl: string | null
    
    ImgData: string | null
    
    constructor(){
        super();

        /**
         * 模块名SealMng
         */
        this.Module = null;

        /**
         * 操作名CreateSeal
         */
        this.Operation = null;

        /**
         * 帐号ID
         */
        this.AccountResId = null;

        /**
         * 签章链接，图片必须为png格式
         */
        this.ImgUrl = null;

        /**
         * 图片数据，base64编码
         */
        this.ImgData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        AccountResId: string | null;
        ImgUrl: string | null;
        ImgData: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.ImgUrl = 'ImgUrl' in params ? params.ImgUrl : null;
        this.ImgData = 'ImgData' in params ? params.ImgData : null;

    }
}

/**
 * CreateSeal返回参数结构体
 * @class
 */
class CreateSealResponse extends AbstractModel {

    SealResId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 签章ID
         */
        this.SealResId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SealResId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 签署关键字信息
 * @class
 */
class SignKeyword extends AbstractModel {

    Keyword: string | null
    
    OffsetCoordX: string | null
    
    OffsetCoordY: string | null
    
    ImageWidth: string | null
    
    ImageHeight: string | null
    
    constructor(){
        super();

        /**
         * 关键字
         */
        this.Keyword = null;

        /**
         * X轴偏移坐标
         */
        this.OffsetCoordX = null;

        /**
         * Y轴偏移坐标
         */
        this.OffsetCoordY = null;

        /**
         * 签章图片宽度
         */
        this.ImageWidth = null;

        /**
         * 签章图片高度
         */
        this.ImageHeight = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Keyword: string | null;
        OffsetCoordX: string | null;
        OffsetCoordY: string | null;
        ImageWidth: string | null;
        ImageHeight: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.OffsetCoordX = 'OffsetCoordX' in params ? params.OffsetCoordX : null;
        this.OffsetCoordY = 'OffsetCoordY' in params ? params.OffsetCoordY : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends AbstractModel {

    TaskResult: string | null
    
    TaskType: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务结果
         */
        this.TaskResult = null;

        /**
         * 任务类型，010代表合同上传结果，020代表合同下载结果
         */
        this.TaskType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskResult: string | null;
        TaskType: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskResult = 'TaskResult' in params ? params.TaskResult : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckVcode请求参数结构体
 * @class
 */
class CheckVcodeRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    AccountResId: string | null
    
    ContractResId: string | null
    
    VerifyCode: string | null
    
    constructor(){
        super();

        /**
         * 模块名VerifyCode
         */
        this.Module = null;

        /**
         * 操作名CheckVcode
         */
        this.Operation = null;

        /**
         * 帐号ID
         */
        this.AccountResId = null;

        /**
         * 合同ID
         */
        this.ContractResId = null;

        /**
         * 验证码
         */
        this.VerifyCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        AccountResId: string | null;
        ContractResId: string | null;
        VerifyCode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.VerifyCode = 'VerifyCode' in params ? params.VerifyCode : null;

    }
}

/**
 * CheckVcode返回参数结构体
 * @class
 */
class CheckVcodeResponse extends AbstractModel {

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
 * DownloadContract返回参数结构体
 * @class
 */
class DownloadContractResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 签署坐标对象
 * @class
 */
class SignLocation extends AbstractModel {

    SignOnPage: string | null
    
    SignLocationLBX: string | null
    
    SignLocationLBY: string | null
    
    SignLocationRUX: string | null
    
    SignLocationRUY: string | null
    
    constructor(){
        super();

        /**
         * 签名域页数
         */
        this.SignOnPage = null;

        /**
         * 签名域左下角X轴坐标轴
         */
        this.SignLocationLBX = null;

        /**
         * 签名域左下角Y轴坐标轴
         */
        this.SignLocationLBY = null;

        /**
         * 签名域右上角X轴坐标轴
         */
        this.SignLocationRUX = null;

        /**
         * 签名域右上角Y轴坐标轴
         */
        this.SignLocationRUY = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SignOnPage: string | null;
        SignLocationLBX: string | null;
        SignLocationLBY: string | null;
        SignLocationRUX: string | null;
        SignLocationRUY: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SignOnPage = 'SignOnPage' in params ? params.SignOnPage : null;
        this.SignLocationLBX = 'SignLocationLBX' in params ? params.SignLocationLBX : null;
        this.SignLocationLBY = 'SignLocationLBY' in params ? params.SignLocationLBY : null;
        this.SignLocationRUX = 'SignLocationRUX' in params ? params.SignLocationRUX : null;
        this.SignLocationRUY = 'SignLocationRUY' in params ? params.SignLocationRUY : null;

    }
}

/**
 * SignContractByKeyword返回参数结构体
 * @class
 */
class SignContractByKeywordResponse extends AbstractModel {

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
 * 签署人信息
 * @class
 */
class SignInfo extends AbstractModel {

    AccountResId: string | null
    
    AuthorizationTime: string | null
    
    Location: string | null
    
    SealId: string | null
    
    ImageData: string | null
    
    CertType: number | null
    
    SignLocation: string | null
    
    constructor(){
        super();

        /**
         * 账户ID
         */
        this.AccountResId = null;

        /**
         * 授权时间（上传合同可不传该参数）
         */
        this.AuthorizationTime = null;

        /**
         * 授权IP地址（上传合同可不传该参数）
         */
        this.Location = null;

        /**
         * 签章ID
         */
        this.SealId = null;

        /**
         * 签名图片，优先级比SealId高
         */
        this.ImageData = null;

        /**
         * 默认值：1  表示RSA证书， 2 表示国密证书， 参数不传时默认为1
         */
        this.CertType = null;

        /**
         * 签名域的标签值
         */
        this.SignLocation = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AccountResId: string | null;
        AuthorizationTime: string | null;
        Location: string | null;
        SealId: string | null;
        ImageData: string | null;
        CertType: number | null;
        SignLocation: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.AuthorizationTime = 'AuthorizationTime' in params ? params.AuthorizationTime : null;
        this.Location = 'Location' in params ? params.Location : null;
        this.SealId = 'SealId' in params ? params.SealId : null;
        this.ImageData = 'ImageData' in params ? params.ImageData : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SignLocation = 'SignLocation' in params ? params.SignLocation : null;

    }
}

/**
 * DeleteSeal请求参数结构体
 * @class
 */
class DeleteSealRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    AccountResId: string | null
    
    SealResId: string | null
    
    constructor(){
        super();

        /**
         * 模块名SealMng
         */
        this.Module = null;

        /**
         * 操作名DeleteSeal
         */
        this.Operation = null;

        /**
         * 帐号ID
         */
        this.AccountResId = null;

        /**
         * 签章ID
         */
        this.SealResId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        AccountResId: string | null;
        SealResId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.SealResId = 'SealResId' in params ? params.SealResId : null;

    }
}

/**
 * DownloadContract请求参数结构体
 * @class
 */
class DownloadContractRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    ContractResId: string | null
    
    constructor(){
        super();

        /**
         * 模块名ContractMng
         */
        this.Module = null;

        /**
         * 操作名DownloadContract
         */
        this.Operation = null;

        /**
         * 合同ID
         */
        this.ContractResId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        ContractResId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;

    }
}

/**
 * CreateEnterpriseAccount返回参数结构体
 * @class
 */
class CreateEnterpriseAccountResponse extends AbstractModel {

    AccountResId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 帐号ID
         */
        this.AccountResId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AccountResId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePersonalAccount返回参数结构体
 * @class
 */
class CreatePersonalAccountResponse extends AbstractModel {

    AccountResId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 账号ID
         */
        this.AccountResId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AccountResId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEnterpriseAccount请求参数结构体
 * @class
 */
class CreateEnterpriseAccountRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    Name: string | null
    
    IdentType: number | null
    
    IdentNo: string | null
    
    MobilePhone: string | null
    
    TransactorName: string | null
    
    TransactorIdentType: number | null
    
    TransactorIdentNo: string | null
    
    TransactorPhone: string | null
    
    Email: string | null
    
    constructor(){
        super();

        /**
         * 模块名AccountMng
         */
        this.Module = null;

        /**
         * 操作名CreateEnterpriseAccount
         */
        this.Operation = null;

        /**
         * 企业用户名称
         */
        this.Name = null;

        /**
         * 企业用户证件类型，8代表营业执照，详情请见常见问题
         */
        this.IdentType = null;

        /**
         * 企业用户营业执照号码
         */
        this.IdentNo = null;

        /**
         * 企业联系人手机号
         */
        this.MobilePhone = null;

        /**
         * 经办人姓名
         */
        this.TransactorName = null;

        /**
         * 经办人证件类型，0代表身份证
         */
        this.TransactorIdentType = null;

        /**
         * 经办人证件号码
         */
        this.TransactorIdentNo = null;

        /**
         * 经办人手机号
         */
        this.TransactorPhone = null;

        /**
         * 企业联系人邮箱
         */
        this.Email = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        Name: string | null;
        IdentType: number | null;
        IdentNo: string | null;
        MobilePhone: string | null;
        TransactorName: string | null;
        TransactorIdentType: number | null;
        TransactorIdentNo: string | null;
        TransactorPhone: string | null;
        Email: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdentType = 'IdentType' in params ? params.IdentType : null;
        this.IdentNo = 'IdentNo' in params ? params.IdentNo : null;
        this.MobilePhone = 'MobilePhone' in params ? params.MobilePhone : null;
        this.TransactorName = 'TransactorName' in params ? params.TransactorName : null;
        this.TransactorIdentType = 'TransactorIdentType' in params ? params.TransactorIdentType : null;
        this.TransactorIdentNo = 'TransactorIdentNo' in params ? params.TransactorIdentNo : null;
        this.TransactorPhone = 'TransactorPhone' in params ? params.TransactorPhone : null;
        this.Email = 'Email' in params ? params.Email : null;

    }
}

/**
 * CreateContractByUpload请求参数结构体
 * @class
 */
class CreateContractByUploadRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    SignInfos: Array<SignInfo> | null
    
    ContractFile: string | null
    
    ContractName: string | null
    
    Remarks: string | null
    
    Initiator: string | null
    
    ExpireTime: string | null
    
    constructor(){
        super();

        /**
         * 模块名ContractMng
         */
        this.Module = null;

        /**
         * 操作名CreateContractByUpload
         */
        this.Operation = null;

        /**
         * 签署人信息
         */
        this.SignInfos = null;

        /**
         * 合同上传链接地址
         */
        this.ContractFile = null;

        /**
         * 合同名称
         */
        this.ContractName = null;

        /**
         * 备注
         */
        this.Remarks = null;

        /**
         * 合同发起方腾讯云帐号ID（由平台自动填写）
         */
        this.Initiator = null;

        /**
         * 合同长时间未签署的过期时间
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        SignInfos: Array<SignInfo> | null;
        ContractFile: string | null;
        ContractName: string | null;
        Remarks: string | null;
        Initiator: string | null;
        ExpireTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

        if (params.SignInfos) {
            this.SignInfos = new Array();
            for (let z in params.SignInfos) {
                let obj = new SignInfo();
                obj.deserialize(params.SignInfos[z]);
                this.SignInfos.push(obj);
            }
        }
        this.ContractFile = 'ContractFile' in params ? params.ContractFile : null;
        this.ContractName = 'ContractName' in params ? params.ContractName : null;
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.Initiator = 'Initiator' in params ? params.Initiator : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * CreateContractByUpload返回参数结构体
 * @class
 */
class CreateContractByUploadResponse extends AbstractModel {

    TaskId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSeal返回参数结构体
 * @class
 */
class DeleteSealResponse extends AbstractModel {

    SealResId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 签章ID
         */
        this.SealResId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SealResId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePersonalAccount请求参数结构体
 * @class
 */
class CreatePersonalAccountRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    Name: string | null
    
    IdentType: number | null
    
    IdentNo: string | null
    
    MobilePhone: string | null
    
    constructor(){
        super();

        /**
         * 模块名AccountMng
         */
        this.Module = null;

        /**
         * 操作名CreatePersonalAccount
         */
        this.Operation = null;

        /**
         * 个人用户姓名
         */
        this.Name = null;

        /**
         * 个人用户证件类型，0代表身份证，详情请见常见问题
         */
        this.IdentType = null;

        /**
         * 个人用户证件号码
         */
        this.IdentNo = null;

        /**
         * 个人用户手机号
         */
        this.MobilePhone = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        Name: string | null;
        IdentType: number | null;
        IdentNo: string | null;
        MobilePhone: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdentType = 'IdentType' in params ? params.IdentType : null;
        this.IdentNo = 'IdentNo' in params ? params.IdentNo : null;
        this.MobilePhone = 'MobilePhone' in params ? params.MobilePhone : null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    TaskId: number | null
    
    constructor(){
        super();

        /**
         * 模块名CommonMng
         */
        this.Module = null;

        /**
         * 操作名DescribeTaskStatus
         */
        this.Operation = null;

        /**
         * 任务ID
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        TaskId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * SignContractByKeyword请求参数结构体
 * @class
 */
class SignContractByKeywordRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    ContractResId: string | null
    
    AccountResId: string | null
    
    SignKeyword: SignKeyword | null
    
    AuthorizationTime: string | null
    
    Position: string | null
    
    SealResId: string | null
    
    CertType: number | null
    
    ImageData: string | null
    
    constructor(){
        super();

        /**
         * 模块名ContractMng
         */
        this.Module = null;

        /**
         * 操作名SignContractByKeyword
         */
        this.Operation = null;

        /**
         * 合同ID
         */
        this.ContractResId = null;

        /**
         * 账户ID
         */
        this.AccountResId = null;

        /**
         * 签署关键字，偏移坐标原点为关键字中心
         */
        this.SignKeyword = null;

        /**
         * 授权时间（由平台自动填充）
         */
        this.AuthorizationTime = null;

        /**
         * 授权IP地址（由平台自动填充）
         */
        this.Position = null;

        /**
         * 签章ID
         */
        this.SealResId = null;

        /**
         * 选用证书类型：1  表示RSA证书， 2 表示国密证书， 参数不传时默认为1
         */
        this.CertType = null;

        /**
         * 签名图片，base64编码
         */
        this.ImageData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        ContractResId: string | null;
        AccountResId: string | null;
        SignKeyword: SignKeyword | null;
        AuthorizationTime: string | null;
        Position: string | null;
        SealResId: string | null;
        CertType: number | null;
        ImageData: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;

        if (params.SignKeyword) {
            let obj = new SignKeyword();
            obj.deserialize(params.SignKeyword)
            this.SignKeyword = obj;
        }
        this.AuthorizationTime = 'AuthorizationTime' in params ? params.AuthorizationTime : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.ImageData = 'ImageData' in params ? params.ImageData : null;

    }
}

/**
 * SendVcode请求参数结构体
 * @class
 */
class SendVcodeRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    ContractResId: string | null
    
    AccountResId: string | null
    
    constructor(){
        super();

        /**
         * 模块名VerifyCode
         */
        this.Module = null;

        /**
         * 操作名SendVcode
         */
        this.Operation = null;

        /**
         * 合同ID
         */
        this.ContractResId = null;

        /**
         * 帐号ID
         */
        this.AccountResId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        ContractResId: string | null;
        AccountResId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;

    }
}

/**
 * SignContractByCoordinate请求参数结构体
 * @class
 */
class SignContractByCoordinateRequest extends AbstractModel {

    Module: string | null
    
    Operation: string | null
    
    ContractResId: string | null
    
    AccountResId: string | null
    
    SignLocations: Array<SignLocation> | null
    
    AuthorizationTime: string | null
    
    Position: string | null
    
    SealResId: string | null
    
    CertType: number | null
    
    ImageData: string | null
    
    constructor(){
        super();

        /**
         * 模块名ContractMng
         */
        this.Module = null;

        /**
         * 操作名SignContractByCoordinate
         */
        this.Operation = null;

        /**
         * 合同ID
         */
        this.ContractResId = null;

        /**
         * 帐户ID
         */
        this.AccountResId = null;

        /**
         * 签署坐标，坐标原点在文件左下角，坐标单位为磅，坐标不得超过合同文件边界
         */
        this.SignLocations = null;

        /**
         * 授权时间（由平台自动填充）
         */
        this.AuthorizationTime = null;

        /**
         * 授权IP地址（由平台自动填充）
         */
        this.Position = null;

        /**
         * 签章ID
         */
        this.SealResId = null;

        /**
         * 选用证书类型：1  表示RSA证书， 2 表示国密证书， 参数不传时默认为1
         */
        this.CertType = null;

        /**
         * 签名图片，base64编码
         */
        this.ImageData = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Module: string | null;
        Operation: string | null;
        ContractResId: string | null;
        AccountResId: string | null;
        SignLocations: Array<SignLocation> | null;
        AuthorizationTime: string | null;
        Position: string | null;
        SealResId: string | null;
        CertType: number | null;
        ImageData: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ContractResId = 'ContractResId' in params ? params.ContractResId : null;
        this.AccountResId = 'AccountResId' in params ? params.AccountResId : null;

        if (params.SignLocations) {
            this.SignLocations = new Array();
            for (let z in params.SignLocations) {
                let obj = new SignLocation();
                obj.deserialize(params.SignLocations[z]);
                this.SignLocations.push(obj);
            }
        }
        this.AuthorizationTime = 'AuthorizationTime' in params ? params.AuthorizationTime : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.SealResId = 'SealResId' in params ? params.SealResId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.ImageData = 'ImageData' in params ? params.ImageData : null;

    }
}

/**
 * SignContractByCoordinate返回参数结构体
 * @class
 */
class SignContractByCoordinateResponse extends AbstractModel {

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
 * DeleteAccount返回参数结构体
 * @class
 */
class DeleteAccountResponse extends AbstractModel {

    DelSuccessList: Array<string> | null
    
    DelFailedList: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 删除成功帐号ID列表
         */
        this.DelSuccessList = null;

        /**
         * 删除失败帐号ID列表
         */
        this.DelFailedList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DelSuccessList: Array<string> | null;
        DelFailedList: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DelSuccessList = 'DelSuccessList' in params ? params.DelSuccessList : null;
        this.DelFailedList = 'DelFailedList' in params ? params.DelFailedList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    SendVcodeResponse: SendVcodeResponse,
    DeleteAccountRequest: DeleteAccountRequest,
    CreateSealRequest: CreateSealRequest,
    CreateSealResponse: CreateSealResponse,
    SignKeyword: SignKeyword,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    CheckVcodeRequest: CheckVcodeRequest,
    CheckVcodeResponse: CheckVcodeResponse,
    DownloadContractResponse: DownloadContractResponse,
    SignLocation: SignLocation,
    SignContractByKeywordResponse: SignContractByKeywordResponse,
    SignInfo: SignInfo,
    DeleteSealRequest: DeleteSealRequest,
    DownloadContractRequest: DownloadContractRequest,
    CreateEnterpriseAccountResponse: CreateEnterpriseAccountResponse,
    CreatePersonalAccountResponse: CreatePersonalAccountResponse,
    CreateEnterpriseAccountRequest: CreateEnterpriseAccountRequest,
    CreateContractByUploadRequest: CreateContractByUploadRequest,
    CreateContractByUploadResponse: CreateContractByUploadResponse,
    DeleteSealResponse: DeleteSealResponse,
    CreatePersonalAccountRequest: CreatePersonalAccountRequest,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    SignContractByKeywordRequest: SignContractByKeywordRequest,
    SendVcodeRequest: SendVcodeRequest,
    SignContractByCoordinateRequest: SignContractByCoordinateRequest,
    SignContractByCoordinateResponse: SignContractByCoordinateResponse,
    DeleteAccountResponse: DeleteAccountResponse,

}
