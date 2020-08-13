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
 * InquireAuditCredit返回参数结构体
 * @class
 */
class InquireAuditCreditResponse extends AbstractModel {

    AuditAmount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 可创建跟踪集的数量
         */
        this.AuditAmount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditAmount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditAmount = 'AuditAmount' in params ? params.AuditAmount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopLogging请求参数结构体
 * @class
 */
class StopLoggingRequest extends AbstractModel {

    AuditName: string | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * cmq地域信息
 * @class
 */
class CmqRegionInfo extends AbstractModel {

    CmqRegion: string | null
    
    CmqRegionName: string | null
    
    constructor(){
        super();

        /**
         * cmq地域
         */
        this.CmqRegion = null;

        /**
         * 地域描述
         */
        this.CmqRegionName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CmqRegion: string | null;
        CmqRegionName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.CmqRegionName = 'CmqRegionName' in params ? params.CmqRegionName : null;

    }
}

/**
 * GetAttributeKey请求参数结构体
 * @class
 */
class GetAttributeKeyRequest extends AbstractModel {

    WebsiteType: string | null
    
    constructor(){
        super();

        /**
         * 网站类型，取值范围是zh和en。如果不传值默认zh
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WebsiteType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * DeleteAudit返回参数结构体
 * @class
 */
class DeleteAuditResponse extends AbstractModel {

    IsSuccess: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 是否删除成功
         */
        this.IsSuccess = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        IsSuccess: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAudit请求参数结构体
 * @class
 */
class UpdateAuditRequest extends AbstractModel {

    AuditName: string | null
    
    CmqQueueName: string | null
    
    CmqRegion: string | null
    
    CosBucketName: string | null
    
    CosRegion: string | null
    
    IsCreateNewBucket: number | null
    
    IsCreateNewQueue: number | null
    
    IsEnableCmqNotify: number | null
    
    IsEnableKmsEncry: number | null
    
    KeyId: string | null
    
    KmsRegion: string | null
    
    LogFilePrefix: string | null
    
    ReadWriteAttribute: number | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称
         */
        this.AuditName = null;

        /**
         * 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。
         */
        this.CmqQueueName = null;

        /**
         * 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         */
        this.CmqRegion = null;

        /**
         * cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。
         */
        this.CosBucketName = null;

        /**
         * cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。
         */
        this.CosRegion = null;

        /**
         * 是否创建新的cos存储桶。1：是，0：否。
         */
        this.IsCreateNewBucket = null;

        /**
         * 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         */
        this.IsCreateNewQueue = null;

        /**
         * 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。
         */
        this.IsEnableCmqNotify = null;

        /**
         * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
         */
        this.IsEnableKmsEncry = null;

        /**
         * CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。
         */
        this.KeyId = null;

        /**
         * kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。
         */
        this.KmsRegion = null;

        /**
         * 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。
         */
        this.LogFilePrefix = null;

        /**
         * 管理事件的读写属性。1：只读，2：只写，3：全部。
         */
        this.ReadWriteAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
        CmqQueueName: string | null;
        CmqRegion: string | null;
        CosBucketName: string | null;
        CosRegion: string | null;
        IsCreateNewBucket: number | null;
        IsCreateNewQueue: number | null;
        IsEnableCmqNotify: number | null;
        IsEnableKmsEncry: number | null;
        KeyId: string | null;
        KmsRegion: string | null;
        LogFilePrefix: string | null;
        ReadWriteAttribute: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;

    }
}

/**
 * InquireAuditCredit请求参数结构体
 * @class
 */
class InquireAuditCreditRequest extends AbstractModel {

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
 * ListAudits请求参数结构体
 * @class
 */
class ListAuditsRequest extends AbstractModel {

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
 * LookUpEvents请求参数结构体
 * @class
 */
class LookUpEventsRequest extends AbstractModel {

    EndTime: number | null
    
    StartTime: number | null
    
    LookupAttributes: Array<LookupAttribute> | null
    
    MaxResults: number | null
    
    Mode: string | null
    
    NextToken: string | null
    
    constructor(){
        super();

        /**
         * 结束时间
         */
        this.EndTime = null;

        /**
         * 开始时间
         */
        this.StartTime = null;

        /**
         * 检索条件
         */
        this.LookupAttributes = null;

        /**
         * 返回日志的最大条数
         */
        this.MaxResults = null;

        /**
         * 云审计模式，有效值：standard | quick，其中standard是标准模式，quick是极速模式。默认为标准模式
         */
        this.Mode = null;

        /**
         * 查看更多日志的凭证
         */
        this.NextToken = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EndTime: number | null;
        StartTime: number | null;
        LookupAttributes: Array<LookupAttribute> | null;
        MaxResults: number | null;
        Mode: string | null;
        NextToken: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

        if (params.LookupAttributes) {
            this.LookupAttributes = new Array();
            for (let z in params.LookupAttributes) {
                let obj = new LookupAttribute();
                obj.deserialize(params.LookupAttributes[z]);
                this.LookupAttributes.push(obj);
            }
        }
        this.MaxResults = 'MaxResults' in params ? params.MaxResults : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;

    }
}

/**
 * StartLogging请求参数结构体
 * @class
 */
class StartLoggingRequest extends AbstractModel {

    AuditName: string | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * CreateAudit返回参数结构体
 * @class
 */
class CreateAuditResponse extends AbstractModel {

    IsSuccess: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 是否创建成功。
         */
        this.IsSuccess = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        IsSuccess: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartLogging返回参数结构体
 * @class
 */
class StartLoggingResponse extends AbstractModel {

    IsSuccess: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 是否开启成功
         */
        this.IsSuccess = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        IsSuccess: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttributeKey值详情
 * @class
 */
class AttributeKeyDetail extends AbstractModel {

    Label: string | null
    
    LabelType: string | null
    
    Order: number | null
    
    Starter: string | null
    
    Value: string | null
    
    constructor(){
        super();

        /**
         * 中文标签
         */
        this.Label = null;

        /**
         * 输入框类型
         */
        this.LabelType = null;

        /**
         * 展示排序
         */
        this.Order = null;

        /**
         * 初始化展示
         */
        this.Starter = null;

        /**
         * AttributeKey值
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Label: string | null;
        LabelType: string | null;
        Order: number | null;
        Starter: string | null;
        Value: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.LabelType = 'LabelType' in params ? params.LabelType : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Starter = 'Starter' in params ? params.Starter : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ListCosEnableRegion请求参数结构体
 * @class
 */
class ListCosEnableRegionRequest extends AbstractModel {

    WebsiteType: string | null
    
    constructor(){
        super();

        /**
         * 站点类型。zh表示中国区，en表示国际区。默认中国区。
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WebsiteType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * 资源类型
 * @class
 */
class Resource extends AbstractModel {

    ResourceName: string | null
    
    ResourceType: string | null
    
    constructor(){
        super();

        /**
         * 资源名称
         */
        this.ResourceName = null;

        /**
         * 资源类型
         */
        this.ResourceType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResourceName: string | null;
        ResourceType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * ListCosEnableRegion返回参数结构体
 * @class
 */
class ListCosEnableRegionResponse extends AbstractModel {

    EnableRegions: Array<CosRegionInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 云审计支持的cos可用区
         */
        this.EnableRegions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EnableRegions: Array<CosRegionInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.EnableRegions) {
            this.EnableRegions = new Array();
            for (let z in params.EnableRegions) {
                let obj = new CosRegionInfo();
                obj.deserialize(params.EnableRegions[z]);
                this.EnableRegions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopLogging返回参数结构体
 * @class
 */
class StopLoggingResponse extends AbstractModel {

    IsSuccess: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 是否关闭成功
         */
        this.IsSuccess = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        IsSuccess: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 检索条件
 * @class
 */
class LookupAttribute extends AbstractModel {

    AttributeKey: string | null
    
    AttributeValue: string | null
    
    constructor(){
        super();

        /**
         * AttributeKey的有效取值范围是:RequestId、EventName、ReadOnly、Username、ResourceType、ResourceName和AccessKeyId，EventId
         */
        this.AttributeKey = null;

        /**
         * AttributeValue
         */
        this.AttributeValue = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AttributeKey: string | null;
        AttributeValue: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AttributeKey = 'AttributeKey' in params ? params.AttributeKey : null;
        this.AttributeValue = 'AttributeValue' in params ? params.AttributeValue : null;

    }
}

/**
 * ListAudits返回参数结构体
 * @class
 */
class ListAuditsResponse extends AbstractModel {

    AuditSummarys: Array<AuditSummary> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 查询跟踪集概要集合
         */
        this.AuditSummarys = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditSummarys: Array<AuditSummary> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AuditSummarys) {
            this.AuditSummarys = new Array();
            for (let z in params.AuditSummarys) {
                let obj = new AuditSummary();
                obj.deserialize(params.AuditSummarys[z]);
                this.AuditSummarys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAudit返回参数结构体
 * @class
 */
class UpdateAuditResponse extends AbstractModel {

    IsSuccess: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 是否更新成功
         */
        this.IsSuccess = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        IsSuccess: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAudit请求参数结构体
 * @class
 */
class DescribeAuditRequest extends AbstractModel {

    AuditName: string | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * CreateAudit请求参数结构体
 * @class
 */
class CreateAuditRequest extends AbstractModel {

    AuditName: string | null
    
    CosBucketName: string | null
    
    CosRegion: string | null
    
    IsCreateNewBucket: number | null
    
    IsEnableCmqNotify: number | null
    
    ReadWriteAttribute: number | null
    
    CmqQueueName: string | null
    
    CmqRegion: string | null
    
    IsCreateNewQueue: number | null
    
    IsEnableKmsEncry: number | null
    
    KeyId: string | null
    
    KmsRegion: string | null
    
    LogFilePrefix: string | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称。3-128字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9，下划线 _。
         */
        this.AuditName = null;

        /**
         * cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。
         */
        this.CosBucketName = null;

        /**
         * cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。
         */
        this.CosRegion = null;

        /**
         * 是否创建新的cos存储桶。1：是，0：否。
         */
        this.IsCreateNewBucket = null;

        /**
         * 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。
         */
        this.IsEnableCmqNotify = null;

        /**
         * 管理事件的读写属性。1：只读，2：只写，3：全部。
         */
        this.ReadWriteAttribute = null;

        /**
         * 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。
         */
        this.CmqQueueName = null;

        /**
         * 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         */
        this.CmqRegion = null;

        /**
         * 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
         */
        this.IsCreateNewQueue = null;

        /**
         * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
         */
        this.IsEnableKmsEncry = null;

        /**
         * CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。
         */
        this.KeyId = null;

        /**
         * kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。
         */
        this.KmsRegion = null;

        /**
         * 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。可以不填，默认以账号ID作为日志前缀。
         */
        this.LogFilePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
        CosBucketName: string | null;
        CosRegion: string | null;
        IsCreateNewBucket: number | null;
        IsEnableCmqNotify: number | null;
        ReadWriteAttribute: number | null;
        CmqQueueName: string | null;
        CmqRegion: string | null;
        IsCreateNewQueue: number | null;
        IsEnableKmsEncry: number | null;
        KeyId: string | null;
        KmsRegion: string | null;
        LogFilePrefix: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsCreateNewBucket = 'IsCreateNewBucket' in params ? params.IsCreateNewBucket : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.IsCreateNewQueue = 'IsCreateNewQueue' in params ? params.IsCreateNewQueue : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;

    }
}

/**
 * DeleteAudit请求参数结构体
 * @class
 */
class DeleteAuditRequest extends AbstractModel {

    AuditName: string | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称
         */
        this.AuditName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;

    }
}

/**
 * ListCmqEnableRegion请求参数结构体
 * @class
 */
class ListCmqEnableRegionRequest extends AbstractModel {

    WebsiteType: string | null
    
    constructor(){
        super();

        /**
         * 站点类型。zh表示中国区，en表示国际区。默认中国区。
         */
        this.WebsiteType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WebsiteType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.WebsiteType = 'WebsiteType' in params ? params.WebsiteType : null;

    }
}

/**
 * GetAttributeKey返回参数结构体
 * @class
 */
class GetAttributeKeyResponse extends AbstractModel {

    AttributeKeyDetails: Array<AttributeKeyDetail> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * AttributeKey的有效取值范围
         */
        this.AttributeKeyDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AttributeKeyDetails: Array<AttributeKeyDetail> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AttributeKeyDetails) {
            this.AttributeKeyDetails = new Array();
            for (let z in params.AttributeKeyDetails) {
                let obj = new AttributeKeyDetail();
                obj.deserialize(params.AttributeKeyDetails[z]);
                this.AttributeKeyDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListCmqEnableRegion返回参数结构体
 * @class
 */
class ListCmqEnableRegionResponse extends AbstractModel {

    EnableRegions: Array<CmqRegionInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 云审计支持的cmq的可用区
         */
        this.EnableRegions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EnableRegions: Array<CmqRegionInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.EnableRegions) {
            this.EnableRegions = new Array();
            for (let z in params.EnableRegions) {
                let obj = new CmqRegionInfo();
                obj.deserialize(params.EnableRegions[z]);
                this.EnableRegions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LookUpEvents返回参数结构体
 * @class
 */
class LookUpEventsResponse extends AbstractModel {

    Events: Array<Event> | null
    
    ListOver: boolean | null
    
    NextToken: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 日志集合
         */
        this.Events = null;

        /**
         * 日志集合是否结束
         */
        this.ListOver = null;

        /**
         * 查看更多日志的凭证
         */
        this.NextToken = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Events: Array<Event> | null;
        ListOver: boolean | null;
        NextToken: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.NextToken = 'NextToken' in params ? params.NextToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cos地域信息
 * @class
 */
class CosRegionInfo extends AbstractModel {

    CosRegion: string | null
    
    CosRegionName: string | null
    
    constructor(){
        super();

        /**
         * cos地域
         */
        this.CosRegion = null;

        /**
         * 地域描述
         */
        this.CosRegionName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CosRegion: string | null;
        CosRegionName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.CosRegionName = 'CosRegionName' in params ? params.CosRegionName : null;

    }
}

/**
 * DescribeAudit返回参数结构体
 * @class
 */
class DescribeAuditResponse extends AbstractModel {

    AuditName: string | null
    
    AuditStatus: number | null
    
    CmqQueueName: string | null
    
    CmqRegion: string | null
    
    CosBucketName: string | null
    
    CosRegion: string | null
    
    IsEnableCmqNotify: number | null
    
    IsEnableKmsEncry: number | null
    
    KeyId: string | null
    
    KmsAlias: string | null
    
    KmsRegion: string | null
    
    LogFilePrefix: string | null
    
    ReadWriteAttribute: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称。
         */
        this.AuditName = null;

        /**
         * 跟踪集状态，1：开启，0：停止。
         */
        this.AuditStatus = null;

        /**
         * 队列名称。
         */
        this.CmqQueueName = null;

        /**
         * 队列所在地域。
         */
        this.CmqRegion = null;

        /**
         * cos存储桶名称。
         */
        this.CosBucketName = null;

        /**
         * cos存储桶所在地域。
         */
        this.CosRegion = null;

        /**
         * 是否开启cmq消息通知。1：是，0：否。
         */
        this.IsEnableCmqNotify = null;

        /**
         * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
         */
        this.IsEnableKmsEncry = null;

        /**
         * CMK的全局唯一标识符。
         */
        this.KeyId = null;

        /**
         * CMK别名。
         */
        this.KmsAlias = null;

        /**
         * kms地域。
         */
        this.KmsRegion = null;

        /**
         * 日志前缀。
         */
        this.LogFilePrefix = null;

        /**
         * 管理事件读写属性，1：只读，2：只写，3：全部
         */
        this.ReadWriteAttribute = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
        AuditStatus: number | null;
        CmqQueueName: string | null;
        CmqRegion: string | null;
        CosBucketName: string | null;
        CosRegion: string | null;
        IsEnableCmqNotify: number | null;
        IsEnableKmsEncry: number | null;
        KeyId: string | null;
        KmsAlias: string | null;
        KmsRegion: string | null;
        LogFilePrefix: string | null;
        ReadWriteAttribute: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.CmqQueueName = 'CmqQueueName' in params ? params.CmqQueueName : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.CosRegion = 'CosRegion' in params ? params.CosRegion : null;
        this.IsEnableCmqNotify = 'IsEnableCmqNotify' in params ? params.IsEnableCmqNotify : null;
        this.IsEnableKmsEncry = 'IsEnableKmsEncry' in params ? params.IsEnableKmsEncry : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KmsAlias = 'KmsAlias' in params ? params.KmsAlias : null;
        this.KmsRegion = 'KmsRegion' in params ? params.KmsRegion : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;
        this.ReadWriteAttribute = 'ReadWriteAttribute' in params ? params.ReadWriteAttribute : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 日志详情
 * @class
 */
class Event extends AbstractModel {

    Resources: Resource | null
    
    AccountID: number | null
    
    CloudAuditEvent: string | null
    
    ErrorCode: number | null
    
    EventId: string | null
    
    EventName: string | null
    
    EventNameCn: string | null
    
    EventRegion: string | null
    
    EventSource: string | null
    
    EventTime: string | null
    
    RequestID: string | null
    
    ResourceRegion: string | null
    
    ResourceTypeCn: string | null
    
    SecretId: string | null
    
    SourceIPAddress: string | null
    
    Username: string | null
    
    constructor(){
        super();

        /**
         * 资源对
         */
        this.Resources = null;

        /**
         * 主账号ID
         */
        this.AccountID = null;

        /**
         * 日志详情
         */
        this.CloudAuditEvent = null;

        /**
         * 鉴权错误码
         */
        this.ErrorCode = null;

        /**
         * 日志ID
         */
        this.EventId = null;

        /**
         * 事件名称
         */
        this.EventName = null;

        /**
         * 事件名称中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
         */
        this.EventNameCn = null;

        /**
         * 事件地域
         */
        this.EventRegion = null;

        /**
         * 请求来源
         */
        this.EventSource = null;

        /**
         * 事件时间
         */
        this.EventTime = null;

        /**
         * 请求ID
         */
        this.RequestID = null;

        /**
         * 资源地域
         */
        this.ResourceRegion = null;

        /**
         * 资源类型中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
         */
        this.ResourceTypeCn = null;

        /**
         * 证书ID
         */
        this.SecretId = null;

        /**
         * 源IP
         */
        this.SourceIPAddress = null;

        /**
         * 用户名
         */
        this.Username = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Resources: Resource | null;
        AccountID: number | null;
        CloudAuditEvent: string | null;
        ErrorCode: number | null;
        EventId: string | null;
        EventName: string | null;
        EventNameCn: string | null;
        EventRegion: string | null;
        EventSource: string | null;
        EventTime: string | null;
        RequestID: string | null;
        ResourceRegion: string | null;
        ResourceTypeCn: string | null;
        SecretId: string | null;
        SourceIPAddress: string | null;
        Username: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Resources) {
            let obj = new Resource();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }
        this.AccountID = 'AccountID' in params ? params.AccountID : null;
        this.CloudAuditEvent = 'CloudAuditEvent' in params ? params.CloudAuditEvent : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.EventName = 'EventName' in params ? params.EventName : null;
        this.EventNameCn = 'EventNameCn' in params ? params.EventNameCn : null;
        this.EventRegion = 'EventRegion' in params ? params.EventRegion : null;
        this.EventSource = 'EventSource' in params ? params.EventSource : null;
        this.EventTime = 'EventTime' in params ? params.EventTime : null;
        this.RequestID = 'RequestID' in params ? params.RequestID : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceTypeCn = 'ResourceTypeCn' in params ? params.ResourceTypeCn : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SourceIPAddress = 'SourceIPAddress' in params ? params.SourceIPAddress : null;
        this.Username = 'Username' in params ? params.Username : null;

    }
}

/**
 * 跟踪集概览
 * @class
 */
class AuditSummary extends AbstractModel {

    AuditName: string | null
    
    AuditStatus: number | null
    
    CosBucketName: string | null
    
    LogFilePrefix: string | null
    
    constructor(){
        super();

        /**
         * 跟踪集名称
         */
        this.AuditName = null;

        /**
         * 跟踪集状态，1：开启，0：关闭
         */
        this.AuditStatus = null;

        /**
         * COS存储桶名称
         */
        this.CosBucketName = null;

        /**
         * 日志前缀
         */
        this.LogFilePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditName: string | null;
        AuditStatus: number | null;
        CosBucketName: string | null;
        LogFilePrefix: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditName = 'AuditName' in params ? params.AuditName : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.LogFilePrefix = 'LogFilePrefix' in params ? params.LogFilePrefix : null;

    }
}

export const Models = {
    InquireAuditCreditResponse: InquireAuditCreditResponse,
    StopLoggingRequest: StopLoggingRequest,
    CmqRegionInfo: CmqRegionInfo,
    GetAttributeKeyRequest: GetAttributeKeyRequest,
    DeleteAuditResponse: DeleteAuditResponse,
    UpdateAuditRequest: UpdateAuditRequest,
    InquireAuditCreditRequest: InquireAuditCreditRequest,
    ListAuditsRequest: ListAuditsRequest,
    LookUpEventsRequest: LookUpEventsRequest,
    StartLoggingRequest: StartLoggingRequest,
    CreateAuditResponse: CreateAuditResponse,
    StartLoggingResponse: StartLoggingResponse,
    AttributeKeyDetail: AttributeKeyDetail,
    ListCosEnableRegionRequest: ListCosEnableRegionRequest,
    Resource: Resource,
    ListCosEnableRegionResponse: ListCosEnableRegionResponse,
    StopLoggingResponse: StopLoggingResponse,
    LookupAttribute: LookupAttribute,
    ListAuditsResponse: ListAuditsResponse,
    UpdateAuditResponse: UpdateAuditResponse,
    DescribeAuditRequest: DescribeAuditRequest,
    CreateAuditRequest: CreateAuditRequest,
    DeleteAuditRequest: DeleteAuditRequest,
    ListCmqEnableRegionRequest: ListCmqEnableRegionRequest,
    GetAttributeKeyResponse: GetAttributeKeyResponse,
    ListCmqEnableRegionResponse: ListCmqEnableRegionResponse,
    LookUpEventsResponse: LookUpEventsResponse,
    CosRegionInfo: CosRegionInfo,
    DescribeAuditResponse: DescribeAuditResponse,
    Event: Event,
    AuditSummary: AuditSummary,

}
