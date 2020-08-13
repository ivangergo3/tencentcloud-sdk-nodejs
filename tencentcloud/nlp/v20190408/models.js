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
 * LexicalAnalysis返回参数结构体
 * @class
 */
class LexicalAnalysisResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 命名实体识别结果。取值范围：
<li>PER：表示人名，如刘德华、贝克汉姆</li>
<li>LOC：表示地名，如北京、华山</li>
<li>ORG：表示机构团体名，如腾讯、最高人民法院、人大附中</li>
<li>PRODUCTION：表示产品名，如QQ、微信、iPhone</li>
         */
        this.NerTokens = null;
        /**
         * 分词&词性标注结果（词性表请参见附录）
         */
        this.PosTokens = null;
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
        if (params.NerTokens) {
            this.NerTokens = new Array();
            for (let z in params.NerTokens) {
                let obj = new NerToken();
                obj.deserialize(params.NerTokens[z]);
                this.NerTokens.push(obj);
            }
        }
        if (params.PosTokens) {
            this.PosTokens = new Array();
            for (let z in params.PosTokens) {
                let obj = new PosToken();
                obj.deserialize(params.PosTokens[z]);
                this.PosTokens.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SentenceEmbedding请求参数结构体
 * @class
 */
class SentenceEmbeddingRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 输入的文本（仅支持UTF-8格式，不超过500字）
         */
        this.Text = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
    }
}
/**
 * DescribeTriple请求参数结构体
 * @class
 */
class DescribeTripleRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 三元组查询条件
         */
        this.TripleCondition = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TripleCondition = 'TripleCondition' in params ? params.TripleCondition : null;
    }
}
/**
 * WordSimilarity请求参数结构体
 * @class
 */
class WordSimilarityRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 计算相似度的源词（仅支持UTF-8格式，不超过20字）
         */
        this.SrcWord = null;
        /**
         * 计算相似度的目标词（仅支持UTF-8格式，不超过20字）
         */
        this.TargetWord = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcWord = 'SrcWord' in params ? params.SrcWord : null;
        this.TargetWord = 'TargetWord' in params ? params.TargetWord : null;
    }
}
/**
 * SearchWordItems返回参数结构体
 * @class
 */
class SearchWordItemsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 词条检索结果集合。
         */
        this.Results = null;
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
        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new SearchResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 句法依存分析结果，包括基础词，基础词的序号，当前词父节点的序号，句法依存关系的类型
 * @class
 */
class DpToken extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 当前词父节点的序号
         */
        this.HeadId = null;
        /**
         * 基础词的序号
         */
        this.Id = null;
        /**
         * 句法依存关系的类型
         */
        this.Relation = null;
        /**
         * 基础词
         */
        this.Word = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeadId = 'HeadId' in params ? params.HeadId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Relation = 'Relation' in params ? params.Relation : null;
        this.Word = 'Word' in params ? params.Word : null;
    }
}
/**
 * TextSimilarity返回参数结构体
 * @class
 */
class TextSimilarityResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 每个目标句子与源句子的相似度分值，按照分值降序排列
         */
        this.Similarity = null;
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
        if (params.Similarity) {
            this.Similarity = new Array();
            for (let z in params.Similarity) {
                let obj = new Similarity();
                obj.deserialize(params.Similarity[z]);
                this.Similarity.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * WordEmbedding请求参数结构体
 * @class
 */
class WordEmbeddingRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 输入的词语（仅支持UTF-8格式，不超过20字）
         */
        this.Text = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
    }
}
/**
 * ChatBot返回参数结构体
 * @class
 */
class ChatBotResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 对于当前输出回复的自信度
         */
        this.Confidence = null;
        /**
         * 闲聊回复
         */
        this.Reply = null;
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
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Reply = 'Reply' in params ? params.Reply : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * KeywordsExtraction返回参数结构体
 * @class
 */
class KeywordsExtractionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 关键词提取结果
         */
        this.Keywords = null;
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
        if (params.Keywords) {
            this.Keywords = new Array();
            for (let z in params.Keywords) {
                let obj = new Keyword();
                obj.deserialize(params.Keywords[z]);
                this.Keywords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AutoSummarization请求参数结构体
 * @class
 */
class AutoSummarizationRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待处理的文本（仅支持UTF-8格式，不超过2000字）
         */
        this.Text = null;
        /**
         * 指定摘要的长度上限（默认值为200）
注：为保证摘要的可读性，最终生成的摘要长度会低于指定的长度上限。
         */
        this.Length = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Length = 'Length' in params ? params.Length : null;
    }
}
/**
 * ChatBot请求参数结构体
 * @class
 */
class ChatBotRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户请求的query
         */
        this.Query = null;
        /**
         * 0: 通用闲聊, 1:儿童闲聊, 默认是通用闲聊
         */
        this.Flag = null;
        /**
         * 服务的id,  主要用于儿童闲聊接口，比如手Q的openid
         */
        this.OpenId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Query = 'Query' in params ? params.Query : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
    }
}
/**
 * DescribeRelation请求参数结构体
 * @class
 */
class DescribeRelationRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 输入第一个实体
         */
        this.LeftEntityName = null;
        /**
         * 输入第二个实体
         */
        this.RightEntityName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LeftEntityName = 'LeftEntityName' in params ? params.LeftEntityName : null;
        this.RightEntityName = 'RightEntityName' in params ? params.RightEntityName : null;
    }
}
/**
 * KeywordsExtraction请求参数结构体
 * @class
 */
class KeywordsExtractionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待处理的文本（仅支持UTF-8格式，不超过10000字）
         */
        this.Text = null;
        /**
         * 指定关键词个数上限（默认值为5）
         */
        this.Num = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Num = 'Num' in params ? params.Num : null;
    }
}
/**
 * 自定义词库信息
 * @class
 */
class DictInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义词库ID。
         */
        this.Id = null;
        /**
         * 自定义词库名称。
         */
        this.Name = null;
        /**
         * 自定义词库创建时间，形式为:yyyy-mm-dd hh:mm:ss。
         */
        this.CreateTime = null;
        /**
         * 自定义词库描述信息。
         */
        this.Description = null;
        /**
         * 自定义词库修改时间，形式为:yyyy-mm-dd hh:mm:ss。
         */
        this.UpdateTime = null;
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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
    }
}
/**
 * DescribeEntity返回参数结构体
 * @class
 */
class DescribeEntityResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回查询实体相关信息
         */
        this.Content = null;
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
        this.Content = 'Content' in params ? params.Content : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 词条信息。
 * @class
 */
class WordItem extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 词条文本内容。
         */
        this.Text = null;
        /**
         * 词条创建时间。
         */
        this.CreateTime = null;
        /**
         * 词条的词性。
         */
        this.Pos = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Pos = 'Pos' in params ? params.Pos : null;
    }
}
/**
 * 文本分类结果
 * @class
 */
class ClassificationResult extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 一级分类名称
         */
        this.FirstClassName = null;
        /**
         * 一级分类概率
         */
        this.FirstClassProbability = null;
        /**
         * 二级分类名称
         */
        this.SecondClassName = null;
        /**
         * 二级分类概率
         */
        this.SecondClassProbability = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstClassName = 'FirstClassName' in params ? params.FirstClassName : null;
        this.FirstClassProbability = 'FirstClassProbability' in params ? params.FirstClassProbability : null;
        this.SecondClassName = 'SecondClassName' in params ? params.SecondClassName : null;
        this.SecondClassProbability = 'SecondClassProbability' in params ? params.SecondClassProbability : null;
    }
}
/**
 * DescribeEntity请求参数结构体
 * @class
 */
class DescribeEntityRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实体名称
         */
        this.EntityName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityName = 'EntityName' in params ? params.EntityName : null;
    }
}
/**
 * 关键词提取结果
 * @class
 */
class Keyword extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 权重
         */
        this.Score = null;
        /**
         * 关键词
         */
        this.Word = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Score = 'Score' in params ? params.Score : null;
        this.Word = 'Word' in params ? params.Word : null;
    }
}
/**
 * UpdateDict返回参数结构体
 * @class
 */
class UpdateDictResponse extends abstract_model_1.AbstractModel {
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
 * DescribeDicts请求参数结构体
 * @class
 */
class DescribeDictsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 每页数据量，范围为1~100，默认为10。
         */
        this.Limit = null;
        /**
         * 分页偏移量，从0开始，默认为0。
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
 * DescribeRelation返回参数结构体
 * @class
 */
class DescribeRelationResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回查询实体间的关系
         */
        this.Content = null;
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
        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new EntityRelationContent();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 词条搜索的结果，主要描述该词条是否存在以及相关的词性。
 * @class
 */
class SearchResult extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 0表示词条不存在，1表示存在。
         */
        this.IsExist = null;
        /**
         * 匹配到的词条文本。
         */
        this.MatchText = null;
        /**
         * 被搜索的词条文本。
         */
        this.Text = null;
        /**
         * 词条的词性。
         */
        this.Pos = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsExist = 'IsExist' in params ? params.IsExist : null;
        this.MatchText = 'MatchText' in params ? params.MatchText : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Pos = 'Pos' in params ? params.Pos : null;
    }
}
/**
 * CreateWordItems请求参数结构体
 * @class
 */
class CreateWordItemsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待添加的词条集合。
         */
        this.WordItems = null;
        /**
         * 自定义词库ID。
         */
        this.DictId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }
        this.DictId = 'DictId' in params ? params.DictId : null;
    }
}
/**
 * TextCorrection请求参数结构体
 * @class
 */
class TextCorrectionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待纠错的文本（仅支持UTF-8格式，不超过2000字）
         */
        this.Text = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
    }
}
/**
 * DeleteWordItems返回参数结构体
 * @class
 */
class DeleteWordItemsResponse extends abstract_model_1.AbstractModel {
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
 * SentenceEmbedding返回参数结构体
 * @class
 */
class SentenceEmbeddingResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 句向量的维度
         */
        this.Dimension = null;
        /**
         * 句向量数组
         */
        this.Vector = null;
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
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.Vector = 'Vector' in params ? params.Vector : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * UpdateDict请求参数结构体
 * @class
 */
class UpdateDictRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义词库ID。
         */
        this.DictId = null;
        /**
         * 词库描述，不超过100字。
         */
        this.Description = null;
        /**
         * 词库名称，不超过20字。
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
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * TextClassification返回参数结构体
 * @class
 */
class TextClassificationResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 文本分类结果（文本分类映射表请参见附录）
         */
        this.Classes = null;
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
        if (params.Classes) {
            this.Classes = new Array();
            for (let z in params.Classes) {
                let obj = new ClassificationResult();
                obj.deserialize(params.Classes[z]);
                this.Classes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteDict返回参数结构体
 * @class
 */
class DeleteDictResponse extends abstract_model_1.AbstractModel {
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
 * DescribeWordItems请求参数结构体
 * @class
 */
class DescribeWordItemsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义词库ID。
         */
        this.DictId = null;
        /**
         * 每页数据量，范围为1~100，默认为10。
         */
        this.Limit = null;
        /**
         * 分页偏移量，从0开始，默认为0。
         */
        this.Offset = null;
        /**
         * 待检索的词条文本，支持模糊匹配。
         */
        this.Text = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Text = 'Text' in params ? params.Text : null;
    }
}
/**
 * SearchWordItems请求参数结构体
 * @class
 */
class SearchWordItemsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待检索的词条集合。
         */
        this.WordItems = null;
        /**
         * 自定义词库ID。
         */
        this.DictId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }
        this.DictId = 'DictId' in params ? params.DictId : null;
    }
}
/**
 * TextClassification请求参数结构体
 * @class
 */
class TextClassificationRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待分类的文本（仅支持UTF-8格式，不超过10000字）
         */
        this.Text = null;
        /**
         * 领域分类体系（默认取1值）：
1、通用领域
2、新闻领域
         */
        this.Flag = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
    }
}
/**
 * CreateDict返回参数结构体
 * @class
 */
class CreateDictResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 创建的自定义词库ID。
         */
        this.DictId = null;
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
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * TextSimilarity请求参数结构体
 * @class
 */
class TextSimilarityRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过500字符）
         */
        this.SrcText = null;
        /**
         * 需要与源句子计算相似度的一个或多个目标句子（仅支持UTF-8格式，目标句子的数量不超过100个，每个句子不超过500字符）
注意：每成功计算1个目标句子与源句子的相似度算1次调用
         */
        this.TargetText = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcText = 'SrcText' in params ? params.SrcText : null;
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
    }
}
/**
 * AutoSummarization返回参数结构体
 * @class
 */
class AutoSummarizationResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 文本摘要结果
         */
        this.Summary = null;
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
        this.Summary = 'Summary' in params ? params.Summary : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * WordEmbedding返回参数结构体
 * @class
 */
class WordEmbeddingResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 词向量的维度
         */
        this.Dimension = null;
        /**
         * 词向量数组
         */
        this.Vector = null;
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
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.Vector = 'Vector' in params ? params.Vector : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTriple返回参数结构体
 * @class
 */
class DescribeTripleResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 返回三元组信息
         */
        this.Content = null;
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
        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TripleContent();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeWordItems返回参数结构体
 * @class
 */
class DescribeWordItemsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 词条信息列表。
         */
        this.WordItems = null;
        /**
         * 词条记录总条数。
         */
        this.TotalCount = null;
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
        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SimilarWords请求参数结构体
 * @class
 */
class SimilarWordsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 输入的词语（仅支持UTF-8格式，不超过20字）
         */
        this.Text = null;
        /**
         * 相似词个数；取值范围：1-200，默认为10；
         */
        this.WordNumber = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.WordNumber = 'WordNumber' in params ? params.WordNumber : null;
    }
}
/**
 * DescribeDict请求参数结构体
 * @class
 */
class DescribeDictRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义词库ID。
         */
        this.DictId = null;
        /**
         * 自定义词库名称，模糊搜索。
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
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * 分词&词性标注结果
 * @class
 */
class PosToken extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 起始位置
         */
        this.BeginOffset = null;
        /**
         * 长度
         */
        this.Length = null;
        /**
         * 词性
         */
        this.Pos = null;
        /**
         * 基础词
         */
        this.Word = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Pos = 'Pos' in params ? params.Pos : null;
        this.Word = 'Word' in params ? params.Word : null;
    }
}
/**
 * SentimentAnalysis返回参数结构体
 * @class
 */
class SentimentAnalysisResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 负面情感概率
         */
        this.Negative = null;
        /**
         * 中性情感概率，当输入参数Mode取值为3class时有效，否则值为空
         */
        this.Neutral = null;
        /**
         * 正面情感概率
         */
        this.Positive = null;
        /**
         * 情感分类结果：
1、positive，表示正面情感
2、negative，表示负面情感
3、neutral，表示中性、无情感
         */
        this.Sentiment = null;
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
        this.Negative = 'Negative' in params ? params.Negative : null;
        this.Neutral = 'Neutral' in params ? params.Neutral : null;
        this.Positive = 'Positive' in params ? params.Positive : null;
        this.Sentiment = 'Sentiment' in params ? params.Sentiment : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteWordItems请求参数结构体
 * @class
 */
class DeleteWordItemsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待删除的词条集合。
         */
        this.WordItems = null;
        /**
         * 自定义词库ID。
         */
        this.DictId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }
        this.DictId = 'DictId' in params ? params.DictId : null;
    }
}
/**
 * DescribeDict返回参数结构体
 * @class
 */
class DescribeDictResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询到的词库信息列表。
         */
        this.Dicts = null;
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
        if (params.Dicts) {
            this.Dicts = new Array();
            for (let z in params.Dicts) {
                let obj = new DictInfo();
                obj.deserialize(params.Dicts[z]);
                this.Dicts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * TextCorrection返回参数结构体
 * @class
 */
class TextCorrectionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 纠错详情
         */
        this.CCITokens = null;
        /**
         * 纠错后的文本
         */
        this.ResultText = null;
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
        if (params.CCITokens) {
            this.CCITokens = new Array();
            for (let z in params.CCITokens) {
                let obj = new CCIToken();
                obj.deserialize(params.CCITokens[z]);
                this.CCITokens.push(obj);
            }
        }
        this.ResultText = 'ResultText' in params ? params.ResultText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeDicts返回参数结构体
 * @class
 */
class DescribeDictsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义词库信息列表。
         */
        this.Dicts = null;
        /**
         * 记录总条数。
         */
        this.TotalCount = null;
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
        if (params.Dicts) {
            this.Dicts = new Array();
            for (let z in params.Dicts) {
                let obj = new DictInfo();
                obj.deserialize(params.Dicts[z]);
                this.Dicts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DependencyParsing请求参数结构体
 * @class
 */
class DependencyParsingRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待分析的文本（仅支持UTF-8格式，不超过200字）
         */
        this.Text = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
    }
}
/**
 * DeleteDict请求参数结构体
 * @class
 */
class DeleteDictRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 要删除的自定义词库ID。
         */
        this.DictId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;
    }
}
/**
 * 命名实体识别结果
 * @class
 */
class NerToken extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 起始位置
         */
        this.BeginOffset = null;
        /**
         * 长度
         */
        this.Length = null;
        /**
         * 命名实体类型
         */
        this.Type = null;
        /**
         * 基础词
         */
        this.Word = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Word = 'Word' in params ? params.Word : null;
    }
}
/**
 * SimilarWords返回参数结构体
 * @class
 */
class SimilarWordsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 相似词数组
         */
        this.SimilarWords = null;
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
        this.SimilarWords = 'SimilarWords' in params ? params.SimilarWords : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 实体关系查询返回的Object类型
 * @class
 */
class EntityRelationObject extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * object对应id
         */
        this.Id = null;
        /**
         * object对应name
         */
        this.Name = null;
        /**
         * object对应popular值
         */
        this.Popular = null;
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
        this.Popular = 'Popular' in params ? params.Popular : null;
    }
}
/**
 * DependencyParsing返回参数结构体
 * @class
 */
class DependencyParsingResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 句法依存分析结果，其中句法依存关系的类型包括：
<li>主谓关系，eg: 我送她一束花 (我 <-- 送)
<li>动宾关系，eg: 我送她一束花 (送 --> 花)
<li>间宾关系，eg: 我送她一束花 (送 --> 她)
<li>前置宾语，eg: 他什么书都读 (书 <-- 读)
<li>兼语，eg: 他请我吃饭 (请 --> 我)
<li>定中关系，eg: 红苹果 (红 <-- 苹果)
<li>状中结构，eg: 非常美丽 (非常 <-- 美丽)
<li>动补结构，eg: 做完了作业 (做 --> 完)
<li>并列关系，eg: 大山和大海 (大山 --> 大海)
<li>介宾关系，eg: 在贸易区内 (在 --> 内)
<li>左附加关系，eg: 大山和大海 (和 <-- 大海)
<li>右附加关系，eg: 孩子们 (孩子 --> 们)
<li>独立结构，eg: 两个单句在结构上彼此独立
<li>标点符号，eg: 。
<li>核心关系，eg: 整个句子的核心
         */
        this.DpTokens = null;
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
        if (params.DpTokens) {
            this.DpTokens = new Array();
            for (let z in params.DpTokens) {
                let obj = new DpToken();
                obj.deserialize(params.DpTokens[z]);
                this.DpTokens.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 文本相似度
 * @class
 */
class Similarity extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 相似度分数
         */
        this.Score = null;
        /**
         * 目标文本句子
         */
        this.Text = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Score = 'Score' in params ? params.Score : null;
        this.Text = 'Text' in params ? params.Text : null;
    }
}
/**
 * 文本纠错结果
 * @class
 */
class CCIToken extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 错别字的起始位置，从0开始
         */
        this.BeginOffset = null;
        /**
         * 错别字纠错结果
         */
        this.CorrectWord = null;
        /**
         * 错别字内容
         */
        this.Word = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.CorrectWord = 'CorrectWord' in params ? params.CorrectWord : null;
        this.Word = 'Word' in params ? params.Word : null;
    }
}
/**
 * LexicalAnalysis请求参数结构体
 * @class
 */
class LexicalAnalysisRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待分析的文本（仅支持UTF-8格式，不超过500字）
         */
        this.Text = null;
        /**
         * 指定要加载的自定义词库ID。
         */
        this.DictId = null;
        /**
         * 词法分析模式（默认取2值）：
1、高精度（混合粒度分词能力）；
2、高性能（单粒度分词能力）；
         */
        this.Flag = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
    }
}
/**
 * CreateWordItems返回参数结构体
 * @class
 */
class CreateWordItemsResponse extends abstract_model_1.AbstractModel {
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
 * SentimentAnalysis请求参数结构体
 * @class
 */
class SentimentAnalysisRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 待分析的文本（仅支持UTF-8格式，不超过200字）
         */
        this.Text = null;
        /**
         * 待分析文本所属的类型，仅当输入参数Mode取值为2class时有效（默认取4值）：
1、商品评论类
2、社交类
3、美食酒店类
4、通用领域类
         */
        this.Flag = null;
        /**
         * 情感分类模式选项，可取2class或3class（默认值为2class）
1、2class：返回正负面二分类情感结果
2、3class：返回正负面及中性三分类情感结果
         */
        this.Mode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
    }
}
/**
 * 实体关系查询返回Subject
 * @class
 */
class EntityRelationSubject extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * Subject对应id
         */
        this.Id = null;
        /**
         * Subject对应name
         */
        this.Name = null;
        /**
         * Subject对应popular
         */
        this.Popular = null;
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
        this.Popular = 'Popular' in params ? params.Popular : null;
    }
}
/**
 * 返回的实体关系查询结果详细内容
 * @class
 */
class EntityRelationContent extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实体关系查询返回关系的object
         */
        this.Object = null;
        /**
         * 实体关系查询返回关系的subject
         */
        this.Subject = null;
        /**
         * 实体关系查询返回的关系名称
         */
        this.Relation = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Object) {
            this.Object = new Array();
            for (let z in params.Object) {
                let obj = new EntityRelationObject();
                obj.deserialize(params.Object[z]);
                this.Object.push(obj);
            }
        }
        if (params.Subject) {
            this.Subject = new Array();
            for (let z in params.Subject) {
                let obj = new EntityRelationSubject();
                obj.deserialize(params.Subject[z]);
                this.Subject.push(obj);
            }
        }
        this.Relation = 'Relation' in params ? params.Relation : null;
    }
}
/**
 * WordSimilarity返回参数结构体
 * @class
 */
class WordSimilarityResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 两个词语的相似度
         */
        this.Similarity = null;
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
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 三元组查询返回的元记录
 * @class
 */
class TripleContent extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 实体id
         */
        this.Id = null;
        /**
         * 实体名称
         */
        this.Name = null;
        /**
         * 实体order
         */
        this.Order = null;
        /**
         * 实体流行度
         */
        this.Popular = null;
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
        this.Order = 'Order' in params ? params.Order : null;
        this.Popular = 'Popular' in params ? params.Popular : null;
    }
}
/**
 * CreateDict请求参数结构体
 * @class
 */
class CreateDictRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 自定义词库名称，不超过20字。
         */
        this.Name = null;
        /**
         * 自定义词库描述，不超过100字。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
    }
}
exports.Models = {
    LexicalAnalysisResponse: LexicalAnalysisResponse,
    SentenceEmbeddingRequest: SentenceEmbeddingRequest,
    DescribeTripleRequest: DescribeTripleRequest,
    WordSimilarityRequest: WordSimilarityRequest,
    SearchWordItemsResponse: SearchWordItemsResponse,
    DpToken: DpToken,
    TextSimilarityResponse: TextSimilarityResponse,
    WordEmbeddingRequest: WordEmbeddingRequest,
    ChatBotResponse: ChatBotResponse,
    KeywordsExtractionResponse: KeywordsExtractionResponse,
    AutoSummarizationRequest: AutoSummarizationRequest,
    ChatBotRequest: ChatBotRequest,
    DescribeRelationRequest: DescribeRelationRequest,
    KeywordsExtractionRequest: KeywordsExtractionRequest,
    DictInfo: DictInfo,
    DescribeEntityResponse: DescribeEntityResponse,
    WordItem: WordItem,
    ClassificationResult: ClassificationResult,
    DescribeEntityRequest: DescribeEntityRequest,
    Keyword: Keyword,
    UpdateDictResponse: UpdateDictResponse,
    DescribeDictsRequest: DescribeDictsRequest,
    DescribeRelationResponse: DescribeRelationResponse,
    SearchResult: SearchResult,
    CreateWordItemsRequest: CreateWordItemsRequest,
    TextCorrectionRequest: TextCorrectionRequest,
    DeleteWordItemsResponse: DeleteWordItemsResponse,
    SentenceEmbeddingResponse: SentenceEmbeddingResponse,
    UpdateDictRequest: UpdateDictRequest,
    TextClassificationResponse: TextClassificationResponse,
    DeleteDictResponse: DeleteDictResponse,
    DescribeWordItemsRequest: DescribeWordItemsRequest,
    SearchWordItemsRequest: SearchWordItemsRequest,
    TextClassificationRequest: TextClassificationRequest,
    CreateDictResponse: CreateDictResponse,
    TextSimilarityRequest: TextSimilarityRequest,
    AutoSummarizationResponse: AutoSummarizationResponse,
    WordEmbeddingResponse: WordEmbeddingResponse,
    DescribeTripleResponse: DescribeTripleResponse,
    DescribeWordItemsResponse: DescribeWordItemsResponse,
    SimilarWordsRequest: SimilarWordsRequest,
    DescribeDictRequest: DescribeDictRequest,
    PosToken: PosToken,
    SentimentAnalysisResponse: SentimentAnalysisResponse,
    DeleteWordItemsRequest: DeleteWordItemsRequest,
    DescribeDictResponse: DescribeDictResponse,
    TextCorrectionResponse: TextCorrectionResponse,
    DescribeDictsResponse: DescribeDictsResponse,
    DependencyParsingRequest: DependencyParsingRequest,
    DeleteDictRequest: DeleteDictRequest,
    NerToken: NerToken,
    SimilarWordsResponse: SimilarWordsResponse,
    EntityRelationObject: EntityRelationObject,
    DependencyParsingResponse: DependencyParsingResponse,
    Similarity: Similarity,
    CCIToken: CCIToken,
    LexicalAnalysisRequest: LexicalAnalysisRequest,
    CreateWordItemsResponse: CreateWordItemsResponse,
    SentimentAnalysisRequest: SentimentAnalysisRequest,
    EntityRelationSubject: EntityRelationSubject,
    EntityRelationContent: EntityRelationContent,
    WordSimilarityResponse: WordSimilarityResponse,
    TripleContent: TripleContent,
    CreateDictRequest: CreateDictRequest,
};
//# sourceMappingURL=models.js.map