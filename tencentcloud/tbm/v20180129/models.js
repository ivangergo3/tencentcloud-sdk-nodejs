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
 * DescribeBrandPosComments请求参数结构体
 * @class
 */
class DescribeBrandPosCommentsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
        /**
         * 查询开始时间
         */
        this.StartDate = null;
        /**
         * 查询结束时间
         */
        this.EndDate = null;
        /**
         * 查询条数上限，默认20
         */
        this.Limit = null;
        /**
         * 查询偏移，从0开始
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
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * 文章信息
 * @class
 */
class BrandReportArticle extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 文章标题
         */
        this.Title = null;
        /**
         * 文章url地址
         */
        this.Url = null;
        /**
         * 文章来源
         */
        this.FromSite = null;
        /**
         * 文章发表日期
         */
        this.PubTime = null;
        /**
         * 文章标识
         */
        this.Flag = null;
        /**
         * 文章热度值
         */
        this.Hot = null;
        /**
         * 文章来源等级
         */
        this.Level = null;
        /**
         * 文章摘要
         */
        this.Abstract = null;
        /**
         * 文章ID
         */
        this.ArticleId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = 'Title' in params ? params.Title : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FromSite = 'FromSite' in params ? params.FromSite : null;
        this.PubTime = 'PubTime' in params ? params.PubTime : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Hot = 'Hot' in params ? params.Hot : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Abstract = 'Abstract' in params ? params.Abstract : null;
        this.ArticleId = 'ArticleId' in params ? params.ArticleId : null;
    }
}
/**
 * DescribeBrandSocialOpinion返回参数结构体
 * @class
 */
class DescribeBrandSocialOpinionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 文章总数
         */
        this.ArticleCount = null;
        /**
         * 来源统计总数
         */
        this.FromCount = null;
        /**
         * 疑似负面报道总数
         */
        this.AdverseCount = null;
        /**
         * 文章列表详情
         */
        this.ArticleSet = null;
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
        this.ArticleCount = 'ArticleCount' in params ? params.ArticleCount : null;
        this.FromCount = 'FromCount' in params ? params.FromCount : null;
        this.AdverseCount = 'AdverseCount' in params ? params.AdverseCount : null;
        if (params.ArticleSet) {
            this.ArticleSet = new Array();
            for (let z in params.ArticleSet) {
                let obj = new BrandReportArticle();
                obj.deserialize(params.ArticleSet[z]);
                this.ArticleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeBrandExposure返回参数结构体
 * @class
 */
class DescribeBrandExposureResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 累计曝光量
         */
        this.TotalCount = null;
        /**
         * 按天计算的统计数据
         */
        this.DateCountSet = null;
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
        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeBrandPosComments返回参数结构体
 * @class
 */
class DescribeBrandPosCommentsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 评论列表
         */
        this.BrandCommentSet = null;
        /**
         * 总的好评个数
         */
        this.TotalComments = null;
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
        if (params.BrandCommentSet) {
            this.BrandCommentSet = new Array();
            for (let z in params.BrandCommentSet) {
                let obj = new CommentInfo();
                obj.deserialize(params.BrandCommentSet[z]);
                this.BrandCommentSet.push(obj);
            }
        }
        this.TotalComments = 'TotalComments' in params ? params.TotalComments : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeIndustryNews请求参数结构体
 * @class
 */
class DescribeIndustryNewsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 行业ID
         */
        this.IndustryId = null;
        /**
         * 查询开始时间
         */
        this.StartDate = null;
        /**
         * 查询结束时间
         */
        this.EndDate = null;
        /**
         * 是否显示列表，若为 true，则返回文章列表
         */
        this.ShowList = null;
        /**
         * 查询偏移，默认从0开始
         */
        this.Offset = null;
        /**
         * 查询条数上限，默认20
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
        this.IndustryId = 'IndustryId' in params ? params.IndustryId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ShowList = 'ShowList' in params ? params.ShowList : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * DescribeBrandSocialOpinion请求参数结构体
 * @class
 */
class DescribeBrandSocialOpinionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
        /**
         * 检索开始时间
         */
        this.StartDate = null;
        /**
         * 检索结束时间
         */
        this.EndDate = null;
        /**
         * 查询偏移，默认从0开始
         */
        this.Offset = null;
        /**
         * 查询条数上限，默认20
         */
        this.Limit = null;
        /**
         * 列表显示标记，若为true，则返回文章列表详情
         */
        this.ShowList = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ShowList = 'ShowList' in params ? params.ShowList : null;
    }
}
/**
 * DescribeBrandSocialReport请求参数结构体
 * @class
 */
class DescribeBrandSocialReportRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
        /**
         * 查询开始时间
         */
        this.StartDate = null;
        /**
         * 查询结束时间
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * DescribeBrandSocialReport返回参数结构体
 * @class
 */
class DescribeBrandSocialReportResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 累计统计数据
         */
        this.TotalCount = null;
        /**
         * 按天计算的统计数据
         */
        this.DateCountSet = null;
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
        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeBrandExposure请求参数结构体
 * @class
 */
class DescribeBrandExposureRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
        /**
         * 查询开始时间
         */
        this.StartDate = null;
        /**
         * 查询结束时间
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * 用户评论内容类型
 * @class
 */
class CommentInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户评论内容
         */
        this.Comment = null;
        /**
         * 评论的时间
         */
        this.Date = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Date = 'Date' in params ? params.Date : null;
    }
}
/**
 * 明星喜好画像元素
 * @class
 */
class StarPortrait extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 喜欢的明星名字
         */
        this.Name = null;
        /**
         * 百分比
         */
        this.Percent = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
    }
}
/**
 * 按日期的统计数据
 * @class
 */
class DateCount extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 统计日期
         */
        this.Date = null;
        /**
         * 统计值
         */
        this.Count = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.Count = 'Count' in params ? params.Count : null;
    }
}
/**
 * 用户性别画像元素数组
 * @class
 */
class GenderPortraitInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户性别画像数组
         */
        this.PortraitSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new GenderPortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }
    }
}
/**
 * 行业报道新闻
 * @class
 */
class IndustryNews extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 行业报道ID
         */
        this.IndustryId = null;
        /**
         * 报道发表时间
         */
        this.PubTime = null;
        /**
         * 报道来源
         */
        this.FromSite = null;
        /**
         * 报道标题
         */
        this.Title = null;
        /**
         * 报道来源url
         */
        this.Url = null;
        /**
         * 报道来源等级
         */
        this.Level = null;
        /**
         * 热度值
         */
        this.Hot = null;
        /**
         * 报道标识
         */
        this.Flag = null;
        /**
         * 报道摘要
         */
        this.Abstract = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IndustryId = 'IndustryId' in params ? params.IndustryId : null;
        this.PubTime = 'PubTime' in params ? params.PubTime : null;
        this.FromSite = 'FromSite' in params ? params.FromSite : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Hot = 'Hot' in params ? params.Hot : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Abstract = 'Abstract' in params ? params.Abstract : null;
    }
}
/**
 * 省份画像元素
 * @class
 */
class ProvincePortrait extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 省份名称
         */
        this.Province = null;
        /**
         * 百分比
         */
        this.Percent = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Province = 'Province' in params ? params.Province : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
    }
}
/**
 * 用户喜好的明星画像元素数组
 * @class
 */
class StarPortraitInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户喜好的明星画像数组
         */
        this.PortraitSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new StarPortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }
    }
}
/**
 * 用户年龄画像元素数组
 * @class
 */
class AgePortraitInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户年龄画像数组
         */
        this.PortraitSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new AgePortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }
    }
}
/**
 * DescribeUserPortrait返回参数结构体
 * @class
 */
class DescribeUserPortraitResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 年龄画像
         */
        this.Age = null;
        /**
         * 性别画像
         */
        this.Gender = null;
        /**
         * 省份画像
         */
        this.Province = null;
        /**
         * 电影喜好画像
         */
        this.Movie = null;
        /**
         * 明星喜好画像
         */
        this.Star = null;
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
        if (params.Age) {
            let obj = new AgePortraitInfo();
            obj.deserialize(params.Age);
            this.Age = obj;
        }
        if (params.Gender) {
            let obj = new GenderPortraitInfo();
            obj.deserialize(params.Gender);
            this.Gender = obj;
        }
        if (params.Province) {
            let obj = new ProvincePortraitInfo();
            obj.deserialize(params.Province);
            this.Province = obj;
        }
        if (params.Movie) {
            let obj = new MoviePortraitInfo();
            obj.deserialize(params.Movie);
            this.Movie = obj;
        }
        if (params.Star) {
            let obj = new StarPortraitInfo();
            obj.deserialize(params.Star);
            this.Star = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeBrandCommentCount请求参数结构体
 * @class
 */
class DescribeBrandCommentCountRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
        /**
         * 查询开始日期
         */
        this.StartDate = null;
        /**
         * 查询结束日期
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * DescribeBrandMediaReport请求参数结构体
 * @class
 */
class DescribeBrandMediaReportRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
        /**
         * 查询开始时间
         */
        this.StartDate = null;
        /**
         * 查询结束时间
         */
        this.EndDate = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
    }
}
/**
 * DescribeBrandMediaReport返回参数结构体
 * @class
 */
class DescribeBrandMediaReportResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询范围内文章总数
         */
        this.TotalCount = null;
        /**
         * 按天计算的每天文章数
         */
        this.DateCountSet = null;
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
        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 用户好评差评个数信息
 * @class
 */
class Comment extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 评论的日期
         */
        this.Date = null;
        /**
         * 差评的个数
         */
        this.NegCommentCount = null;
        /**
         * 好评的个数
         */
        this.PosCommentCount = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.NegCommentCount = 'NegCommentCount' in params ? params.NegCommentCount : null;
        this.PosCommentCount = 'PosCommentCount' in params ? params.PosCommentCount : null;
    }
}
/**
 * 用户省份画像元素数组
 * @class
 */
class ProvincePortraitInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户省份画像数组
         */
        this.PortraitSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new ProvincePortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }
    }
}
/**
 * DescribeBrandCommentCount返回参数结构体
 * @class
 */
class DescribeBrandCommentCountResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 按天统计好评/差评数
         */
        this.CommentSet = null;
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
        if (params.CommentSet) {
            this.CommentSet = new Array();
            for (let z in params.CommentSet) {
                let obj = new Comment();
                obj.deserialize(params.CommentSet[z]);
                this.CommentSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 电影喜好画像元素
 * @class
 */
class MoviePortrait extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 电影名称
         */
        this.Name = null;
        /**
         * 百分比
         */
        this.Percent = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
    }
}
/**
 * DescribeIndustryNews返回参数结构体
 * @class
 */
class DescribeIndustryNewsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总计文章数量
         */
        this.NewsCount = null;
        /**
         * 总计来源数量
         */
        this.FromCount = null;
        /**
         * 总计疑似负面数量
         */
        this.AdverseCount = null;
        /**
         * 文章列表
         */
        this.NewsSet = null;
        /**
         * 按天统计的数量列表
         */
        this.DateCountSet = null;
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
        this.NewsCount = 'NewsCount' in params ? params.NewsCount : null;
        this.FromCount = 'FromCount' in params ? params.FromCount : null;
        this.AdverseCount = 'AdverseCount' in params ? params.AdverseCount : null;
        if (params.NewsSet) {
            this.NewsSet = new Array();
            for (let z in params.NewsSet) {
                let obj = new IndustryNews();
                obj.deserialize(params.NewsSet[z]);
                this.NewsSet.push(obj);
            }
        }
        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeBrandNegComments返回参数结构体
 * @class
 */
class DescribeBrandNegCommentsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 评论列表
         */
        this.BrandCommentSet = null;
        /**
         * 总的差评个数
         */
        this.TotalComments = null;
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
        if (params.BrandCommentSet) {
            this.BrandCommentSet = new Array();
            for (let z in params.BrandCommentSet) {
                let obj = new CommentInfo();
                obj.deserialize(params.BrandCommentSet[z]);
                this.BrandCommentSet.push(obj);
            }
        }
        this.TotalComments = 'TotalComments' in params ? params.TotalComments : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeUserPortrait请求参数结构体
 * @class
 */
class DescribeUserPortraitRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
    }
}
/**
 * DescribeBrandNegComments请求参数结构体
 * @class
 */
class DescribeBrandNegCommentsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 品牌ID
         */
        this.BrandId = null;
        /**
         * 查询开始时间
         */
        this.StartDate = null;
        /**
         * 查询结束时间
         */
        this.EndDate = null;
        /**
         * 查询条数上限，默认20
         */
        this.Limit = null;
        /**
         * 查询偏移，默认从0开始
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
        this.BrandId = 'BrandId' in params ? params.BrandId : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * 用户年龄画像
 * @class
 */
class AgePortrait extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 年龄区间
         */
        this.AgeRange = null;
        /**
         * 百分比
         */
        this.Percent = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgeRange = 'AgeRange' in params ? params.AgeRange : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
    }
}
/**
 * 用户喜好电影画像元素数组
 * @class
 */
class MoviePortraitInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户喜好电影画像数组
         */
        this.PortraitSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new MoviePortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }
    }
}
/**
 * 性别画像元素
 * @class
 */
class GenderPortrait extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 性别
         */
        this.Gender = null;
        /**
         * 百分比
         */
        this.Percent = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
    }
}
exports.Models = {
    DescribeBrandPosCommentsRequest: DescribeBrandPosCommentsRequest,
    BrandReportArticle: BrandReportArticle,
    DescribeBrandSocialOpinionResponse: DescribeBrandSocialOpinionResponse,
    DescribeBrandExposureResponse: DescribeBrandExposureResponse,
    DescribeBrandPosCommentsResponse: DescribeBrandPosCommentsResponse,
    DescribeIndustryNewsRequest: DescribeIndustryNewsRequest,
    DescribeBrandSocialOpinionRequest: DescribeBrandSocialOpinionRequest,
    DescribeBrandSocialReportRequest: DescribeBrandSocialReportRequest,
    DescribeBrandSocialReportResponse: DescribeBrandSocialReportResponse,
    DescribeBrandExposureRequest: DescribeBrandExposureRequest,
    CommentInfo: CommentInfo,
    StarPortrait: StarPortrait,
    DateCount: DateCount,
    GenderPortraitInfo: GenderPortraitInfo,
    IndustryNews: IndustryNews,
    ProvincePortrait: ProvincePortrait,
    StarPortraitInfo: StarPortraitInfo,
    AgePortraitInfo: AgePortraitInfo,
    DescribeUserPortraitResponse: DescribeUserPortraitResponse,
    DescribeBrandCommentCountRequest: DescribeBrandCommentCountRequest,
    DescribeBrandMediaReportRequest: DescribeBrandMediaReportRequest,
    DescribeBrandMediaReportResponse: DescribeBrandMediaReportResponse,
    Comment: Comment,
    ProvincePortraitInfo: ProvincePortraitInfo,
    DescribeBrandCommentCountResponse: DescribeBrandCommentCountResponse,
    MoviePortrait: MoviePortrait,
    DescribeIndustryNewsResponse: DescribeIndustryNewsResponse,
    DescribeBrandNegCommentsResponse: DescribeBrandNegCommentsResponse,
    DescribeUserPortraitRequest: DescribeUserPortraitRequest,
    DescribeBrandNegCommentsRequest: DescribeBrandNegCommentsRequest,
    AgePortrait: AgePortrait,
    MoviePortraitInfo: MoviePortraitInfo,
    GenderPortrait: GenderPortrait,
};
//# sourceMappingURL=models.js.map