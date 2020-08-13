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
 * CheckDomain返回参数结构体
 * @class
 */
class CheckDomainResponse extends AbstractModel {

    DomainName: string | null
    
    Available: boolean | null
    
    Reason: string | null
    
    Premium: boolean | null
    
    Price: number | null
    
    BlackWord: boolean | null
    
    Describe: string | null
    
    FeeRenew: number | null
    
    RealPrice: number | null
    
    FeeTransfer: number | null
    
    FeeRestore: number | null
    
    Period: number | null
    
    RecordSupport: boolean | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 所查询域名名称
         */
        this.DomainName = null;

        /**
         * 是否能够注册
         */
        this.Available = null;

        /**
         * 不能注册原因
         */
        this.Reason = null;

        /**
         * 是否是溢价词
         */
        this.Premium = null;

        /**
         * 域名价格
         */
        this.Price = null;

        /**
         * 是否是敏感词
         */
        this.BlackWord = null;

        /**
         * 溢价词描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Describe = null;

        /**
         * 溢价词的续费价格
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FeeRenew = null;

        /**
         * 域名真实价格
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RealPrice = null;

        /**
         * 溢价词的转入价格
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.FeeTransfer = null;

        /**
         * 溢价词的赎回价格
         */
        this.FeeRestore = null;

        /**
         * 检测年限
         */
        this.Period = null;

        /**
         * 是否支持北京备案  true 支持  false 不支持
         */
        this.RecordSupport = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DomainName: string | null;
        Available: boolean | null;
        Reason: string | null;
        Premium: boolean | null;
        Price: number | null;
        BlackWord: boolean | null;
        Describe: string | null;
        FeeRenew: number | null;
        RealPrice: number | null;
        FeeTransfer: number | null;
        FeeRestore: number | null;
        Period: number | null;
        RecordSupport: boolean | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Premium = 'Premium' in params ? params.Premium : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.BlackWord = 'BlackWord' in params ? params.BlackWord : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.FeeRenew = 'FeeRenew' in params ? params.FeeRenew : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.FeeTransfer = 'FeeTransfer' in params ? params.FeeTransfer : null;
        this.FeeRestore = 'FeeRestore' in params ? params.FeeRestore : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RecordSupport = 'RecordSupport' in params ? params.RecordSupport : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainPriceList返回参数结构体
 * @class
 */
class DescribeDomainPriceListResponse extends AbstractModel {

    PriceList: Array<PriceInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 域名价格列表
         */
        this.PriceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PriceList: Array<PriceInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PriceList) {
            this.PriceList = new Array();
            for (let z in params.PriceList) {
                let obj = new PriceInfo();
                obj.deserialize(params.PriceList[z]);
                this.PriceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDomain请求参数结构体
 * @class
 */
class CheckDomainRequest extends AbstractModel {

    DomainName: string | null
    
    Period: string | null
    
    constructor(){
        super();

        /**
         * 所查询域名名称
         */
        this.DomainName = null;

        /**
         * 年限
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DomainName: string | null;
        Period: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * 域名价格信息
 * @class
 */
class PriceInfo extends AbstractModel {

    Tld: string | null
    
    Year: number | null
    
    Price: number | null
    
    RealPrice: number | null
    
    Operation: string | null
    
    constructor(){
        super();

        /**
         * 域名后缀，例如.com
         */
        this.Tld = null;

        /**
         * 购买年限，范围[1-10]
         */
        this.Year = null;

        /**
         * 域名原价
         */
        this.Price = null;

        /**
         * 域名现价
         */
        this.RealPrice = null;

        /**
         * 商品的购买类型，新购，续费，赎回，转入，续费并转入
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Tld: string | null;
        Year: number | null;
        Price: number | null;
        RealPrice: number | null;
        Operation: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Tld = 'Tld' in params ? params.Tld : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * DescribeDomainPriceList请求参数结构体
 * @class
 */
class DescribeDomainPriceListRequest extends AbstractModel {

    TldList: Array<string> | null
    
    Year: Array<number> | null
    
    Operation: Array<string> | null
    
    constructor(){
        super();

        /**
         * 查询价格的后缀列表。默认则为全部后缀
         */
        this.TldList = null;

        /**
         * 查询购买的年份，默认会列出所有年份的价格
         */
        this.Year = null;

        /**
         * 域名的购买类型：new  新购，renew 续费，redem 赎回，tran 转入
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TldList: Array<string> | null;
        Year: Array<number> | null;
        Operation: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.TldList = 'TldList' in params ? params.TldList : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

export const Models = {
    CheckDomainResponse: CheckDomainResponse,
    DescribeDomainPriceListResponse: DescribeDomainPriceListResponse,
    CheckDomainRequest: CheckDomainRequest,
    PriceInfo: PriceInfo,
    DescribeDomainPriceListRequest: DescribeDomainPriceListRequest,

}
