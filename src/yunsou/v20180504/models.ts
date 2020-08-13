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
 * DataSearch返回参数结构体
 * @class
 */
class DataSearchResponse extends AbstractModel {

    RetMsg: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 数据返回信息
         */
        this.RetMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RetMsg: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DataSearch请求参数结构体
 * @class
 */
class DataSearchRequest extends AbstractModel {

    ResourceId: number | null
    
    SearchQuery: string | null
    
    PageId: number | null
    
    NumPerPage: number | null
    
    SearchId: string | null
    
    QueryEncode: number | null
    
    RankType: number | null
    
    NumFilter: string | null
    
    ClFilter: string | null
    
    Extra: string | null
    
    SourceId: number | null
    
    SecondSearch: number | null
    
    MaxDocReturn: number | null
    
    IsSmartbox: number | null
    
    EnableAbsHighlight: number | null
    
    QcBid: number | null
    
    GroupBy: string | null
    
    Distinct: string | null
    
    L4RankExpression: string | null
    
    MatchValue: string | null
    
    Longitude: number | null
    
    Latitude: number | null
    
    MultiFilter: Array<string> | null
    
    constructor(){
        super();

        /**
         * 云搜的业务ID，用以表明当前数据请求的业务
         */
        this.ResourceId = null;

        /**
         * 检索串
         */
        this.SearchQuery = null;

        /**
         * 当前页，从第0页开始计算
         */
        this.PageId = null;

        /**
         * 每页结果数
         */
        this.NumPerPage = null;

        /**
         * 当前检索号，用于定位问题，建议指定并且全局唯一
         */
        this.SearchId = null;

        /**
         * 请求编码，0表示utf8，1表示gbk，建议指定
         */
        this.QueryEncode = null;

        /**
         * 排序类型
         */
        this.RankType = null;

        /**
         * 数值过滤，结果中按属性过滤
         */
        this.NumFilter = null;

        /**
         * 分类过滤，导航类检索请求
         */
        this.ClFilter = null;

        /**
         * 检索用户相关字段
         */
        this.Extra = null;

        /**
         * 检索来源
         */
        this.SourceId = null;

        /**
         * 是否进行二次检索，0关闭，1打开
         */
        this.SecondSearch = null;

        /**
         * 指定返回最大篇数，无特殊原因不建议指定
         */
        this.MaxDocReturn = null;

        /**
         * 是否smartbox检索，0关闭，1打开
         */
        this.IsSmartbox = null;

        /**
         * 是否打开高红标亮，0关闭，1打开
         */
        this.EnableAbsHighlight = null;

        /**
         * 指定访问QC纠错业务ID
         */
        this.QcBid = null;

        /**
         * 按指定字段进行group by，只能对数值字段进行操作
         */
        this.GroupBy = null;

        /**
         * 按指定字段进行distinct，只能对数值字段进行操作
         */
        this.Distinct = null;

        /**
         * 高级排序参数，具体参见高级排序说明
         */
        this.L4RankExpression = null;

        /**
         * 高级排序参数，具体参见高级排序说明
         */
        this.MatchValue = null;

        /**
         * 经度信息
         */
        this.Longitude = null;

        /**
         * 纬度信息
         */
        this.Latitude = null;

        /**
         * 分类过滤并集
         */
        this.MultiFilter = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ResourceId: number | null;
        SearchQuery: string | null;
        PageId: number | null;
        NumPerPage: number | null;
        SearchId: string | null;
        QueryEncode: number | null;
        RankType: number | null;
        NumFilter: string | null;
        ClFilter: string | null;
        Extra: string | null;
        SourceId: number | null;
        SecondSearch: number | null;
        MaxDocReturn: number | null;
        IsSmartbox: number | null;
        EnableAbsHighlight: number | null;
        QcBid: number | null;
        GroupBy: string | null;
        Distinct: string | null;
        L4RankExpression: string | null;
        MatchValue: string | null;
        Longitude: number | null;
        Latitude: number | null;
        MultiFilter: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.SearchQuery = 'SearchQuery' in params ? params.SearchQuery : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.NumPerPage = 'NumPerPage' in params ? params.NumPerPage : null;
        this.SearchId = 'SearchId' in params ? params.SearchId : null;
        this.QueryEncode = 'QueryEncode' in params ? params.QueryEncode : null;
        this.RankType = 'RankType' in params ? params.RankType : null;
        this.NumFilter = 'NumFilter' in params ? params.NumFilter : null;
        this.ClFilter = 'ClFilter' in params ? params.ClFilter : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.SecondSearch = 'SecondSearch' in params ? params.SecondSearch : null;
        this.MaxDocReturn = 'MaxDocReturn' in params ? params.MaxDocReturn : null;
        this.IsSmartbox = 'IsSmartbox' in params ? params.IsSmartbox : null;
        this.EnableAbsHighlight = 'EnableAbsHighlight' in params ? params.EnableAbsHighlight : null;
        this.QcBid = 'QcBid' in params ? params.QcBid : null;
        this.GroupBy = 'GroupBy' in params ? params.GroupBy : null;
        this.Distinct = 'Distinct' in params ? params.Distinct : null;
        this.L4RankExpression = 'L4RankExpression' in params ? params.L4RankExpression : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.MultiFilter = 'MultiFilter' in params ? params.MultiFilter : null;

    }
}

/**
 * DataManipulation请求参数结构体
 * @class
 */
class DataManipulationRequest extends AbstractModel {

    OpType: string | null
    
    Encoding: string | null
    
    Contents: string | null
    
    ResourceId: number | null
    
    constructor(){
        super();

        /**
         * 操作类型，add或del
         */
        this.OpType = null;

        /**
         * 数据编码类型
         */
        this.Encoding = null;

        /**
         * 数据
         */
        this.Contents = null;

        /**
         * 应用Id
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OpType: string | null;
        Encoding: string | null;
        Contents: string | null;
        ResourceId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.OpType = 'OpType' in params ? params.OpType : null;
        this.Encoding = 'Encoding' in params ? params.Encoding : null;
        this.Contents = 'Contents' in params ? params.Contents : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * DataManipulation返回参数结构体
 * @class
 */
class DataManipulationResponse extends AbstractModel {

    RetMsg: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回信息
         */
        this.RetMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RetMsg: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RetMsg = 'RetMsg' in params ? params.RetMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    DataSearchResponse: DataSearchResponse,
    DataSearchRequest: DataSearchRequest,
    DataManipulationRequest: DataManipulationRequest,
    DataManipulationResponse: DataManipulationResponse,

}
