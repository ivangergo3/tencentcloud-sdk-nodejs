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
 * 搜索结果
 * @class
 */
class SearchResult extends AbstractModel {

    CostTime: number | null
    
    DisplayNum: number | null
    
    Echo: string | null
    
    EResultNum: number | null
    
    ResultNum: number | null
    
    ResultList: Array<SearchResultItem> | null
    
    SegList: Array<SearchResultSeg> | null
    
    constructor(){
        super();

        /**
         * 检索耗时，单位ms
         */
        this.CostTime = null;

        /**
         * 搜索最多可以展示的结果数，多页
         */
        this.DisplayNum = null;

        /**
         * 和检索请求中的echo相对应
         */
        this.Echo = null;

        /**
         * 检索结果的估算篇数，由索引平台估算
         */
        this.EResultNum = null;

        /**
         * 检索返回的当前页码结果数
         */
        this.ResultNum = null;

        /**
         * 检索结果列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ResultList = null;

        /**
         * 检索的分词结果，array类型，可包含多个
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SegList = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CostTime: number | null;
        DisplayNum: number | null;
        Echo: string | null;
        EResultNum: number | null;
        ResultNum: number | null;
        ResultList: Array<SearchResultItem> | null;
        SegList: Array<SearchResultSeg> | null;
    }): void {
        if (!params) {
            return;
        }
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.DisplayNum = 'DisplayNum' in params ? params.DisplayNum : null;
        this.Echo = 'Echo' in params ? params.Echo : null;
        this.EResultNum = 'EResultNum' in params ? params.EResultNum : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;

        if (params.ResultList) {
            this.ResultList = new Array();
            for (let z in params.ResultList) {
                let obj = new SearchResultItem();
                obj.deserialize(params.ResultList[z]);
                this.ResultList.push(obj);
            }
        }

        if (params.SegList) {
            this.SegList = new Array();
            for (let z in params.SegList) {
                let obj = new SearchResultSeg();
                obj.deserialize(params.SegList[z]);
                this.SegList.push(obj);
            }
        }

    }
}

/**
 * SearchResultSeg
 * @class
 */
class SearchResultSeg extends AbstractModel {

    SegStr: string | null
    
    constructor(){
        super();

        /**
         * 分词
         */
        this.SegStr = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SegStr: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SegStr = 'SegStr' in params ? params.SegStr : null;

    }
}

/**
 * 数据操作结果
 * @class
 */
class DataManipulationResult extends AbstractModel {

    AppId: number | null
    
    Seq: number | null
    
    TotalResult: string | null
    
    Result: Array<DataManipulationResultItem> | null
    
    ErrorResult: string | null
    
    constructor(){
        super();

        /**
         * 应用ID
         */
        this.AppId = null;

        /**
         * 序号
         */
        this.Seq = null;

        /**
         * 结果
         */
        this.TotalResult = null;

        /**
         * 操作结果明细
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Result = null;

        /**
         * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ErrorResult = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AppId: number | null;
        Seq: number | null;
        TotalResult: string | null;
        Result: Array<DataManipulationResultItem> | null;
        ErrorResult: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.TotalResult = 'TotalResult' in params ? params.TotalResult : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new DataManipulationResultItem();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.ErrorResult = 'ErrorResult' in params ? params.ErrorResult : null;

    }
}

/**
 * 搜索结果元素
 * @class
 */
class SearchResultItem extends AbstractModel {

    DocAbs: string | null
    
    DocId: string | null
    
    DocMeta: string | null
    
    L2Score: number | null
    
    SearchDebuginfo: string | null
    
    constructor(){
        super();

        /**
         * 动态摘要信息
         */
        this.DocAbs = null;

        /**
         * 检索文档id
         */
        this.DocId = null;

        /**
         * 原始文档信息
         */
        this.DocMeta = null;

        /**
         * 精计算得分
         */
        this.L2Score = null;

        /**
         * 文档级回传信息
         */
        this.SearchDebuginfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DocAbs: string | null;
        DocId: string | null;
        DocMeta: string | null;
        L2Score: number | null;
        SearchDebuginfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DocAbs = 'DocAbs' in params ? params.DocAbs : null;
        this.DocId = 'DocId' in params ? params.DocId : null;
        this.DocMeta = 'DocMeta' in params ? params.DocMeta : null;
        this.L2Score = 'L2Score' in params ? params.L2Score : null;
        this.SearchDebuginfo = 'SearchDebuginfo' in params ? params.SearchDebuginfo : null;

    }
}

/**
 * DataSearch返回参数结构体
 * @class
 */
class DataSearchResponse extends AbstractModel {

    Data: SearchResult | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 检索结果
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
        Data: SearchResult | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new SearchResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
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
 * 数据操作结果明细
 * @class
 */
class DataManipulationResultItem extends AbstractModel {

    Result: string | null
    
    DocId: string | null
    
    Errno: number | null
    
    constructor(){
        super();

        /**
         * 结果
         */
        this.Result = null;

        /**
         * 文档ID
         */
        this.DocId = null;

        /**
         * 错误码
         */
        this.Errno = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Result: string | null;
        DocId: string | null;
        Errno: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.DocId = 'DocId' in params ? params.DocId : null;
        this.Errno = 'Errno' in params ? params.Errno : null;

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

    Data: DataManipulationResult | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 数据操作结果
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
        Data: DataManipulationResult | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new DataManipulationResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    SearchResult: SearchResult,
    SearchResultSeg: SearchResultSeg,
    DataManipulationResult: DataManipulationResult,
    SearchResultItem: SearchResultItem,
    DataSearchResponse: DataSearchResponse,
    DataSearchRequest: DataSearchRequest,
    DataManipulationResultItem: DataManipulationResultItem,
    DataManipulationRequest: DataManipulationRequest,
    DataManipulationResponse: DataManipulationResponse,

}
