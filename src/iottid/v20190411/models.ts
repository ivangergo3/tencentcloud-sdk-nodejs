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
 * DescribePermission请求参数结构体
 * @class
 */
class DescribePermissionRequest extends AbstractModel {

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
 * VerifyChipBurnInfo返回参数结构体
 * @class
 */
class VerifyChipBurnInfoResponse extends AbstractModel {

    Pass: boolean | null
    
    VerifiedTimes: number | null
    
    LeftTimes: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 验证结果
         */
        this.Pass = null;

        /**
         * 已验证次数
         */
        this.VerifiedTimes = null;

        /**
         * 剩余验证次数
         */
        this.LeftTimes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Pass: boolean | null;
        VerifiedTimes: number | null;
        LeftTimes: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Pass = 'Pass' in params ? params.Pass : null;
        this.VerifiedTimes = 'VerifiedTimes' in params ? params.VerifiedTimes : null;
        this.LeftTimes = 'LeftTimes' in params ? params.LeftTimes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeliverTids返回参数结构体
 * @class
 */
class DeliverTidsResponse extends AbstractModel {

    TidSet: Array<TidKeysInfo> | null
    
    ProductKey: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 空发的TID信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TidSet = null;

        /**
         * 产品公钥
         */
        this.ProductKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TidSet: Array<TidKeysInfo> | null;
        ProductKey: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TidSet) {
            this.TidSet = new Array();
            for (let z in params.TidSet) {
                let obj = new TidKeysInfo();
                obj.deserialize(params.TidSet[z]);
                this.TidSet.push(obj);
            }
        }
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BurnTidNotify返回参数结构体
 * @class
 */
class BurnTidNotifyResponse extends AbstractModel {

    Tid: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 接收回执成功的TID
         */
        this.Tid = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tid: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableLibCount返回参数结构体
 * @class
 */
class DescribeAvailableLibCountResponse extends AbstractModel {

    Quantity: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 可空发的白盒密钥数量
         */
        this.Quantity = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Quantity: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadDeviceUniqueCode返回参数结构体
 * @class
 */
class UploadDeviceUniqueCodeResponse extends AbstractModel {

    Count: number | null
    
    ExistedCodeSet: Array<string> | null
    
    LeftQuantity: number | null
    
    IllegalCodeSet: Array<string> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 本次已上传数量
         */
        this.Count = null;

        /**
         * 重复的硬件唯一标识码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ExistedCodeSet = null;

        /**
         * 剩余可上传数量
         */
        this.LeftQuantity = null;

        /**
         * 错误的硬件唯一标识码
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.IllegalCodeSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Count: number | null;
        ExistedCodeSet: Array<string> | null;
        LeftQuantity: number | null;
        IllegalCodeSet: Array<string> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.ExistedCodeSet = 'ExistedCodeSet' in params ? params.ExistedCodeSet : null;
        this.LeftQuantity = 'LeftQuantity' in params ? params.LeftQuantity : null;
        this.IllegalCodeSet = 'IllegalCodeSet' in params ? params.IllegalCodeSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AuthTestTid返回参数结构体
 * @class
 */
class AuthTestTidResponse extends AbstractModel {

    Pass: boolean | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 认证结果
         */
        this.Pass = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Pass: boolean | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Pass = 'Pass' in params ? params.Pass : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeliverTidNotify返回参数结构体
 * @class
 */
class DeliverTidNotifyResponse extends AbstractModel {

    RemaindCount: number | null
    
    Tid: string | null
    
    ProductKey: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 剩余空发数量
         */
        this.RemaindCount = null;

        /**
         * 已回执的TID编码
         */
        this.Tid = null;

        /**
         * 产品公钥
         */
        this.ProductKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RemaindCount: number | null;
        Tid: string | null;
        ProductKey: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RemaindCount = 'RemaindCount' in params ? params.RemaindCount : null;
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AuthTestTid请求参数结构体
 * @class
 */
class AuthTestTidRequest extends AbstractModel {

    Data: string | null
    
    constructor(){
        super();

        /**
         * 设备端SDK填入测试TID参数后生成的加密数据串
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Data: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * BurnTidNotify请求参数结构体
 * @class
 */
class BurnTidNotifyRequest extends AbstractModel {

    OrderId: string | null
    
    Tid: string | null
    
    constructor(){
        super();

        /**
         * 订单编号
         */
        this.OrderId = null;

        /**
         * TID编号
         */
        this.Tid = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrderId: string | null;
        Tid: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;

    }
}

/**
 * VerifyChipBurnInfo请求参数结构体
 * @class
 */
class VerifyChipBurnInfoRequest extends AbstractModel {

    Data: string | null
    
    constructor(){
        super();

        /**
         * 验证数据
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Data: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * UploadDeviceUniqueCode请求参数结构体
 * @class
 */
class UploadDeviceUniqueCodeRequest extends AbstractModel {

    CodeSet: Array<string> | null
    
    OrderId: string | null
    
    constructor(){
        super();

        /**
         * 硬件唯一标识码
         */
        this.CodeSet = null;

        /**
         * 硬件标识码绑定的申请编号
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CodeSet: Array<string> | null;
        OrderId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CodeSet = 'CodeSet' in params ? params.CodeSet : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

    }
}

/**
 * DescribeAvailableLibCount请求参数结构体
 * @class
 */
class DescribeAvailableLibCountRequest extends AbstractModel {

    OrderId: string | null
    
    constructor(){
        super();

        /**
         * 订单编号
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrderId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

    }
}

/**
 * DeliverTids请求参数结构体
 * @class
 */
class DeliverTidsRequest extends AbstractModel {

    OrderId: string | null
    
    Quantity: number | null
    
    constructor(){
        super();

        /**
         * 订单ID
         */
        this.OrderId = null;

        /**
         * 数量，1~100
         */
        this.Quantity = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrderId: string | null;
        Quantity: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;

    }
}

/**
 * DeliverTidNotify请求参数结构体
 * @class
 */
class DeliverTidNotifyRequest extends AbstractModel {

    OrderId: string | null
    
    Tid: string | null
    
    constructor(){
        super();

        /**
         * 订单编号
         */
        this.OrderId = null;

        /**
         * TID编号
         */
        this.Tid = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrderId: string | null;
        Tid: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Tid = 'Tid' in params ? params.Tid : null;

    }
}

/**
 * 系统生成的TID和密钥信息
 * @class
 */
class TidKeysInfo extends AbstractModel {

    Tid: string | null
    
    PublicKey: string | null
    
    PrivateKey: string | null
    
    Psk: string | null
    
    DownloadUrl: string | null
    
    DeviceCode: string | null
    
    constructor(){
        super();

        /**
         * TID号码
         */
        this.Tid = null;

        /**
         * 公钥
         */
        this.PublicKey = null;

        /**
         * 私钥
         */
        this.PrivateKey = null;

        /**
         * 共享密钥
         */
        this.Psk = null;

        /**
         * 软加固白盒密钥下载地址
         */
        this.DownloadUrl = null;

        /**
         * 软加固设备标识码
         */
        this.DeviceCode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tid: string | null;
        PublicKey: string | null;
        PrivateKey: string | null;
        Psk: string | null;
        DownloadUrl: string | null;
        DeviceCode: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Tid = 'Tid' in params ? params.Tid : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.Psk = 'Psk' in params ? params.Psk : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.DeviceCode = 'DeviceCode' in params ? params.DeviceCode : null;

    }
}

/**
 * DescribePermission返回参数结构体
 * @class
 */
class DescribePermissionResponse extends AbstractModel {

    EnterpriseUser: boolean | null
    
    DownloadPermission: string | null
    
    UsePermission: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 企业用户
         */
        this.EnterpriseUser = null;

        /**
         * 下载控制台权限
         */
        this.DownloadPermission = null;

        /**
         * 使用控制台权限
         */
        this.UsePermission = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EnterpriseUser: boolean | null;
        DownloadPermission: string | null;
        UsePermission: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EnterpriseUser = 'EnterpriseUser' in params ? params.EnterpriseUser : null;
        this.DownloadPermission = 'DownloadPermission' in params ? params.DownloadPermission : null;
        this.UsePermission = 'UsePermission' in params ? params.UsePermission : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadTids请求参数结构体
 * @class
 */
class DownloadTidsRequest extends AbstractModel {

    OrderId: string | null
    
    Quantity: number | null
    
    constructor(){
        super();

        /**
         * 订单编号
         */
        this.OrderId = null;

        /**
         * 下载数量：1~10
         */
        this.Quantity = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OrderId: string | null;
        Quantity: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;

    }
}

/**
 * DownloadTids返回参数结构体
 * @class
 */
class DownloadTidsResponse extends AbstractModel {

    TidSet: Array<TidKeysInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 下载的TID信息列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TidSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TidSet: Array<TidKeysInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TidSet) {
            this.TidSet = new Array();
            for (let z in params.TidSet) {
                let obj = new TidKeysInfo();
                obj.deserialize(params.TidSet[z]);
                this.TidSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    DescribePermissionRequest: DescribePermissionRequest,
    VerifyChipBurnInfoResponse: VerifyChipBurnInfoResponse,
    DeliverTidsResponse: DeliverTidsResponse,
    BurnTidNotifyResponse: BurnTidNotifyResponse,
    DescribeAvailableLibCountResponse: DescribeAvailableLibCountResponse,
    UploadDeviceUniqueCodeResponse: UploadDeviceUniqueCodeResponse,
    AuthTestTidResponse: AuthTestTidResponse,
    DeliverTidNotifyResponse: DeliverTidNotifyResponse,
    AuthTestTidRequest: AuthTestTidRequest,
    BurnTidNotifyRequest: BurnTidNotifyRequest,
    VerifyChipBurnInfoRequest: VerifyChipBurnInfoRequest,
    UploadDeviceUniqueCodeRequest: UploadDeviceUniqueCodeRequest,
    DescribeAvailableLibCountRequest: DescribeAvailableLibCountRequest,
    DeliverTidsRequest: DeliverTidsRequest,
    DeliverTidNotifyRequest: DeliverTidNotifyRequest,
    TidKeysInfo: TidKeysInfo,
    DescribePermissionResponse: DescribePermissionResponse,
    DownloadTidsRequest: DownloadTidsRequest,
    DownloadTidsResponse: DownloadTidsResponse,

}
