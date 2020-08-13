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
 * DescribeStatus请求参数结构体
 * @class
 */
class DescribeStatusRequest extends AbstractModel {

    Pk: string | null
    
    Md5: string | null
    
    constructor(){
        super();

        /**
         * 购买服务后获得的授权帐号，用于保证请求有效性
         */
        this.Pk = null;

        /**
         * 需要获取分析结果的样本md5
         */
        this.Md5 = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Pk: string | null;
        Md5: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Pk = 'Pk' in params ? params.Pk : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

    }
}

/**
 * StartAnalyse返回参数结构体
 * @class
 */
class StartAnalyseResponse extends AbstractModel {

    Status: number | null
    
    Info: string | null
    
    Data: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 接口调用状态，1表示成功，非1表示失败
         */
        this.Status = null;

        /**
         * 成功时返回success，失败时返回具体的失败原因
         */
        this.Info = null;

        /**
         * 保留字段
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
    deserialize(params: {
        Status: number | null;
        Info: string | null;
        Data: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartAnalyse请求参数结构体
 * @class
 */
class StartAnalyseRequest extends AbstractModel {

    Pk: string | null
    
    Md5: string | null
    
    DlUrl: string | null
    
    constructor(){
        super();

        /**
         * 购买服务后获得的授权帐号，用于保证请求有效性
         */
        this.Pk = null;

        /**
         * 样本md5，用于对下载获得的样本完整性进行校验
         */
        this.Md5 = null;

        /**
         * 待分析样本下载地址
         */
        this.DlUrl = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Pk: string | null;
        Md5: string | null;
        DlUrl: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Pk = 'Pk' in params ? params.Pk : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.DlUrl = 'DlUrl' in params ? params.DlUrl : null;

    }
}

/**
 * DescribeStatus返回参数结构体
 * @class
 */
class DescribeStatusResponse extends AbstractModel {

    Status: number | null
    
    Info: string | null
    
    Data: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 接口调用状态，1表示成功，非1表示失败
         */
        this.Status = null;

        /**
         * 成功时返回success，失败时返回具体的失败原因，如样本分析未完成
         */
        this.Info = null;

        /**
         * 成功时返回样本日志下载地址，该地址10分钟内有效
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
    deserialize(params: {
        Status: number | null;
        Info: string | null;
        Data: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Info = 'Info' in params ? params.Info : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    DescribeStatusRequest: DescribeStatusRequest,
    StartAnalyseResponse: StartAnalyseResponse,
    StartAnalyseRequest: StartAnalyseRequest,
    DescribeStatusResponse: DescribeStatusResponse,

}
