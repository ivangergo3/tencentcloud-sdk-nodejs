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
 * Album
 * @class
 */
class Album extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 专辑名
         */
        this.AlbumName = null;
        /**
         * 专辑图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImagePathMap = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlbumName = 'AlbumName' in params ? params.AlbumName : null;
        if (params.ImagePathMap) {
            this.ImagePathMap = new Array();
            for (let z in params.ImagePathMap) {
                let obj = new ImagePath();
                obj.deserialize(params.ImagePathMap[z]);
                this.ImagePathMap.push(obj);
            }
        }
    }
}
/**
 * DescribeMusic返回参数结构体
 * @class
 */
class DescribeMusicResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 音乐相关信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Music = null;
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
        if (params.Music) {
            let obj = new Music();
            obj.deserialize(params.Music);
            this.Music = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 图片路径
 * @class
 */
class ImagePath extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * station图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Key = null;
        /**
         * station图片地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Value = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
    }
}
/**
 * 数据信息
 * @class
 */
class DataInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * Song Name
         */
        this.Name = null;
        /**
         * 歌曲版本
         */
        this.Version = null;
        /**
         * 歌曲总时长（非试听时长）
         */
        this.Duration = null;
        /**
         * 试听开始时间
         */
        this.AuditionBegin = null;
        /**
         * 试听结束时间
         */
        this.AuditionEnd = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.AuditionBegin = 'AuditionBegin' in params ? params.AuditionBegin : null;
        this.AuditionEnd = 'AuditionEnd' in params ? params.AuditionEnd : null;
    }
}
/**
 * DescribeItems返回参数结构体
 * @class
 */
class DescribeItemsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 分页偏移量
         */
        this.Offset = null;
        /**
         * 当前页歌曲数量
         */
        this.Size = null;
        /**
         * 总数据条数
         */
        this.Total = null;
        /**
         * 剩余数量（total-offset-size），通过这个值判断是否
还有下一页
         */
        this.HaveMore = null;
        /**
         * Items 歌曲列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Items = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.HaveMore = 'HaveMore' in params ? params.HaveMore : null;
        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 音乐详情
 * @class
 */
class Music extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 音乐播放链接相对路径，必须通过在正版曲库直通车控制台上登记的域名进行拼接。
         */
        this.Url = null;
        /**
         * 音频文件大小
         */
        this.FileSize = null;
        /**
         * 音频文件类型
         */
        this.FileExtension = null;
        /**
         * Song fragment start.试听片段开始时间，试听时长为auditionEnd-auditionBegin
Unit :ms
         */
        this.AuditionBegin = null;
        /**
         * Song fragment end.试听片段结束时间, 试听时长为auditionEnd-auditionBegin
Unit :ms
         */
        this.AuditionEnd = null;
        /**
         * 音乐播放链接全路径，前提是在正版曲库直通车控制台添加过域名，否则返回空字符。
如果添加过多个域名只返回第一个添加域名的播放全路径。
         */
        this.FullUrl = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileExtension = 'FileExtension' in params ? params.FileExtension : null;
        this.AuditionBegin = 'AuditionBegin' in params ? params.AuditionBegin : null;
        this.AuditionEnd = 'AuditionEnd' in params ? params.AuditionEnd : null;
        this.FullUrl = 'FullUrl' in params ? params.FullUrl : null;
    }
}
/**
 * Artist
 * @class
 */
class Artist extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 歌手名
         */
        this.ArtistName = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArtistName = 'ArtistName' in params ? params.ArtistName : null;
    }
}
/**
 * DescribeLyric返回参数结构体
 * @class
 */
class DescribeLyricResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 歌词详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Lyric = null;
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
        if (params.Lyric) {
            let obj = new Lyric();
            obj.deserialize(params.Lyric);
            this.Lyric = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeItemById返回参数结构体
 * @class
 */
class DescribeItemByIdResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 歌曲信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Items = null;
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
        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ReportData返回参数结构体
 * @class
 */
class ReportDataResponse extends abstract_model_1.AbstractModel {
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
 * DescribeItems请求参数结构体
 * @class
 */
class DescribeItemsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * offset (Default = 0)，(当前页-1) * Limit
         */
        this.Offset = null;
        /**
         * 条数，必须大于0，最大值为30
         */
        this.Limit = null;
        /**
         * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
         */
        this.CategoryId = null;
        /**
         * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
         */
        this.CategoryCode = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.CategoryCode = 'CategoryCode' in params ? params.CategoryCode : null;
    }
}
/**
 * DescribeStations请求参数结构体
 * @class
 */
class DescribeStationsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 条数，必须大于0
         */
        this.Limit = null;
        /**
         * offset (Default = 0)，(当前页-1) * Limit
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
 * Item
 * @class
 */
class Item extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * Song ID
         */
        this.ItemID = null;
        /**
         * Song info
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DataInfo = null;
        /**
         * 专辑信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Album = null;
        /**
         * 多个歌手集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Artists = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemID = 'ItemID' in params ? params.ItemID : null;
        if (params.DataInfo) {
            let obj = new DataInfo();
            obj.deserialize(params.DataInfo);
            this.DataInfo = obj;
        }
        if (params.Album) {
            let obj = new Album();
            obj.deserialize(params.Album);
            this.Album = obj;
        }
        if (params.Artists) {
            this.Artists = new Array();
            for (let z in params.Artists) {
                let obj = new Artist();
                obj.deserialize(params.Artists[z]);
                this.Artists.push(obj);
            }
        }
    }
}
/**
 * 分类内容
 * @class
 */
class Station extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * StationID
         */
        this.CategoryID = null;
        /**
         * Station MCCode
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CategoryCode = null;
        /**
         * Category Name
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Name = null;
        /**
         * Station的排序值，供参考（返回结果已按其升序）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Rank = null;
        /**
         * station图片集合
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImagePathMap = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CategoryID = 'CategoryID' in params ? params.CategoryID : null;
        this.CategoryCode = 'CategoryCode' in params ? params.CategoryCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Rank = 'Rank' in params ? params.Rank : null;
        if (params.ImagePathMap) {
            this.ImagePathMap = new Array();
            for (let z in params.ImagePathMap) {
                let obj = new ImagePath();
                obj.deserialize(params.ImagePathMap[z]);
                this.ImagePathMap.push(obj);
            }
        }
    }
}
/**
 * 歌词信息
 * @class
 */
class Lyric extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 歌词cdn地址
         */
        this.Url = null;
        /**
         * 歌词后缀名
         */
        this.FileNameExt = null;
        /**
         * 歌词类型
         */
        this.SubItemType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.FileNameExt = 'FileNameExt' in params ? params.FileNameExt : null;
        this.SubItemType = 'SubItemType' in params ? params.SubItemType : null;
    }
}
/**
 * DescribeLyric请求参数结构体
 * @class
 */
class DescribeLyricRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 歌曲ID
         */
        this.ItemId = null;
        /**
         * 歌词格式，可选项，可不填写，目前填写只能填LRC-LRC。该字段为预留的扩展字段。后续如果不填，会返回歌曲的所有格式的歌词。如果填写某个正确的格式，则只返回该格式的歌词。
         */
        this.SubItemType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.SubItemType = 'SubItemType' in params ? params.SubItemType : null;
    }
}
/**
 * DescribeStations返回参数结构体
 * @class
 */
class DescribeStationsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 总数量
         */
        this.Total = null;
        /**
         * 分页偏移量
         */
        this.Offset = null;
        /**
         * 当前页station数量
         */
        this.Size = null;
        /**
         * 剩余数量（total-offset-size），通过这个值判断是否还有下一页
         */
        this.HaveMore = null;
        /**
         * Stations 素材库列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Stations = null;
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
        this.Total = 'Total' in params ? params.Total : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.HaveMore = 'HaveMore' in params ? params.HaveMore : null;
        if (params.Stations) {
            this.Stations = new Array();
            for (let z in params.Stations) {
                let obj = new Station();
                obj.deserialize(params.Stations[z]);
                this.Stations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ReportData请求参数结构体
 * @class
 */
class ReportDataRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 上报数据
注:reportData为客户端压缩后的上报数据进行16进制转换的字符串数据
压缩说明：
a) 上报的json格式字符串通过流的转换（ByteArrayInputStream, java.util.zip.GZIPOutputStream），获取到压缩后的字节数组。
b) 将压缩后的字节数组转成16进制字符串。

reportData由两部分数据组成：
1）report_type（上报类型）
2）data（歌曲上报数据）
不同的report_type对应的data数据结构不一样。

详细说明请参考文档reportdata.docx：
https://github.com/ame-demo/doc
         */
        this.ReportData = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportData = 'ReportData' in params ? params.ReportData : null;
    }
}
/**
 * DescribeItemById请求参数结构体
 * @class
 */
class DescribeItemByIdRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 歌曲ID，目前暂不支持批量查询
         */
        this.ItemIDs = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemIDs = 'ItemIDs' in params ? params.ItemIDs : null;
    }
}
/**
 * DescribeMusic请求参数结构体
 * @class
 */
class DescribeMusicRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 歌曲ID
         */
        this.ItemId = null;
        /**
         * 在应用前端播放音乐C端用户的唯一标识。无需是账户信息，用户唯一标识即可。
         */
        this.IdentityId = null;
        /**
         * 填 MP3-64K-FTD-P 获取歌曲热门片段
         */
        this.SubItemType = null;
        /**
         * CDN URL Protocol:HTTP or HTTPS/SSL
Values:Y , N(default)
         */
        this.Ssl = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.SubItemType = 'SubItemType' in params ? params.SubItemType : null;
        this.Ssl = 'Ssl' in params ? params.Ssl : null;
    }
}
exports.Models = {
    Album: Album,
    DescribeMusicResponse: DescribeMusicResponse,
    ImagePath: ImagePath,
    DataInfo: DataInfo,
    DescribeItemsResponse: DescribeItemsResponse,
    Music: Music,
    Artist: Artist,
    DescribeLyricResponse: DescribeLyricResponse,
    DescribeItemByIdResponse: DescribeItemByIdResponse,
    ReportDataResponse: ReportDataResponse,
    DescribeItemsRequest: DescribeItemsRequest,
    DescribeStationsRequest: DescribeStationsRequest,
    Item: Item,
    Station: Station,
    Lyric: Lyric,
    DescribeLyricRequest: DescribeLyricRequest,
    DescribeStationsResponse: DescribeStationsResponse,
    ReportDataRequest: ReportDataRequest,
    DescribeItemByIdRequest: DescribeItemByIdRequest,
    DescribeMusicRequest: DescribeMusicRequest,
};
//# sourceMappingURL=models.js.map