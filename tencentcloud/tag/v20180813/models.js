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
 * 表示一个标签键值对以及是否允许删除
 * @class
 */
class TagWithDelete extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
        /**
         * 是否可以删除
         */
        this.CanDelete = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.CanDelete = 'CanDelete' in params ? params.CanDelete : null;
    }
}
/**
 * DetachResourcesTag请求参数结构体
 * @class
 */
class DetachResourcesTagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源所属业务名称
         */
        this.ServiceType = null;
        /**
         * 资源ID数组，资源个数最多为50
         */
        this.ResourceIds = null;
        /**
         * 需要解绑的标签键
         */
        this.TagKey = null;
        /**
         * 资源所在地域不区分地域的资源不需要传入该字段
         */
        this.ResourceRegion = null;
        /**
         * 资源前缀，cos存储桶不需要传入该字段
         */
        this.ResourcePrefix = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
    }
}
/**
 * AttachResourcesTag返回参数结构体
 * @class
 */
class AttachResourcesTagResponse extends abstract_model_1.AbstractModel {
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
 * DeleteTag请求参数结构体
 * @class
 */
class DeleteTagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 需要删除的标签键
         */
        this.TagKey = null;
        /**
         * 需要删除的标签值
         */
        this.TagValue = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
    }
}
/**
 * DeleteResourceTag返回参数结构体
 * @class
 */
class DeleteResourceTagResponse extends abstract_model_1.AbstractModel {
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
 * DescribeResourceTagsByTagKeys请求参数结构体
 * @class
 */
class DescribeResourceTagsByTagKeysRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 业务类型
         */
        this.ServiceType = null;
        /**
         * 资源前缀
         */
        this.ResourcePrefix = null;
        /**
         * 资源地域
         */
        this.ResourceRegion = null;
        /**
         * 资源唯一标识
         */
        this.ResourceIds = null;
        /**
         * 资源标签键
         */
        this.TagKeys = null;
        /**
         * 每页大小，默认为 400
         */
        this.Limit = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
    }
}
/**
 * ModifyResourceTags返回参数结构体
 * @class
 */
class ModifyResourceTagsResponse extends abstract_model_1.AbstractModel {
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
 * DescribeTags请求参数结构体
 * @class
 */
class DescribeTagsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
         */
        this.TagKey = null;
        /**
         * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
         */
        this.TagValue = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
         */
        this.Limit = null;
        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         */
        this.CreateUin = null;
        /**
         * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
         */
        this.TagKeys = null;
        /**
         * 是否展现项目标签
         */
        this.ShowProject = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;
    }
}
/**
 * DescribeTagKeys返回参数结构体
 * @class
 */
class DescribeTagKeysResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 标签列表
         */
        this.Tags = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTagValues请求参数结构体
 * @class
 */
class DescribeTagValuesRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键列表
         */
        this.TagKeys = null;
        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         */
        this.CreateUin = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
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
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * ModifyResourceTags请求参数结构体
 * @class
 */
class ModifyResourceTagsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         */
        this.Resource = null;
        /**
         * 需要增加或修改的标签集合。如果Resource描述的资源未关联输入的标签键，则增加关联；若已关联，则将该资源关联的键对应的标签值修改为输入值。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键
         */
        this.ReplaceTags = null;
        /**
         * 需要解关联的标签集合。本接口中ReplaceTags和DeleteTags二者必须存在其一，且二者不能包含相同的标签键
         */
        this.DeleteTags = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new Tag();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }
        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagKeyObject();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }
    }
}
/**
 * DescribeResourcesByTagsUnion请求参数结构体
 * @class
 */
class DescribeResourcesByTagsUnionRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签过滤数组
         */
        this.TagFilters = null;
        /**
         * 创建标签者uin
         */
        this.CreateUin = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
         */
        this.Limit = null;
        /**
         * 资源前缀
         */
        this.ResourcePrefix = null;
        /**
         * 资源唯一标记
         */
        this.ResourceId = null;
        /**
         * 资源所在地域
         */
        this.ResourceRegion = null;
        /**
         * 业务类型
         */
        this.ServiceType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
    }
}
/**
 * DescribeTags返回参数结构体
 * @class
 */
class DescribeTagsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 标签列表
         */
        this.Tags = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDelete();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeResourcesByTags返回参数结构体
 * @class
 */
class DescribeResourcesByTagsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Limit = null;
        /**
         * 资源标签
         */
        this.Rows = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTagKeys请求参数结构体
 * @class
 */
class DescribeTagKeysRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         */
        this.CreateUin = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
         */
        this.Limit = null;
        /**
         * 是否展现项目
         */
        this.ShowProject = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;
    }
}
/**
 * DescribeTagsSeq返回参数结构体
 * @class
 */
class DescribeTagsSeqResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 标签列表
         */
        this.Tags = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagWithDelete();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeResourceTags返回参数结构体
 * @class
 */
class DescribeResourceTagsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Limit = null;
        /**
         * 资源标签
         */
        this.Rows = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagResource();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeResourceTagsByResourceIds请求参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 业务类型
         */
        this.ServiceType = null;
        /**
         * 资源前缀
         */
        this.ResourcePrefix = null;
        /**
         * 资源唯一标记
         */
        this.ResourceIds = null;
        /**
         * 资源所在地域
         */
        this.ResourceRegion = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * DescribeResourcesByTagsUnion返回参数结构体
 * @class
 */
class DescribeResourcesByTagsUnionResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 资源标签
         */
        this.Rows = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeResourceTagsByResourceIds返回参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 标签列表
         */
        this.Tags = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagResource();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyResourcesTagValue请求参数结构体
 * @class
 */
class ModifyResourcesTagValueRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源所属业务名称
         */
        this.ServiceType = null;
        /**
         * 资源ID数组，资源个数最多为50
         */
        this.ResourceIds = null;
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
        /**
         * 资源所在地域，不区分地域的资源不需要传入该字段
         */
        this.ResourceRegion = null;
        /**
         * 资源前缀，cos存储桶不需要传入该字段
         */
        this.ResourcePrefix = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
    }
}
/**
 * 标签键值对以及资源ID
 * @class
 */
class TagResource extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
        /**
         * 资源ID
         */
        this.ResourceId = null;
        /**
         * 标签键MD5值
         */
        this.TagKeyMd5 = null;
        /**
         * 标签值MD5值
         */
        this.TagValueMd5 = null;
        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ServiceType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.TagKeyMd5 = 'TagKeyMd5' in params ? params.TagKeyMd5 : null;
        this.TagValueMd5 = 'TagValueMd5' in params ? params.TagValueMd5 : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
    }
}
/**
 * AddResourceTag返回参数结构体
 * @class
 */
class AddResourceTagResponse extends abstract_model_1.AbstractModel {
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
 * ModifyResourcesTagValue返回参数结构体
 * @class
 */
class ModifyResourcesTagValueResponse extends abstract_model_1.AbstractModel {
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
 * AddResourceTag请求参数结构体
 * @class
 */
class AddResourceTagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
        /**
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         */
        this.Resource = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
    }
}
/**
 * DescribeTagValuesSeq返回参数结构体
 * @class
 */
class DescribeTagValuesSeqResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 标签列表
         */
        this.Tags = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateTag请求参数结构体
 * @class
 */
class CreateTagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
    }
}
/**
 * DescribeResourceTagsByTagKeys返回参数结构体
 * @class
 */
class DescribeResourceTagsByTagKeysResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 资源标签
         */
        this.Rows = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new ResourceIdTag();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTagsSeq请求参数结构体
 * @class
 */
class DescribeTagsSeqRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签
         */
        this.TagKey = null;
        /**
         * 标签值,与标签键同时存在或同时不存在，不存在时表示查询该用户所有标签
         */
        this.TagValue = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
         */
        this.Limit = null;
        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         */
        this.CreateUin = null;
        /**
         * 标签键数组,与标签值同时存在或同时不存在，不存在时表示查询该用户所有标签,当与TagKey同时传递时只取本值
         */
        this.TagKeys = null;
        /**
         * 是否展现项目标签
         */
        this.ShowProject = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ShowProject = 'ShowProject' in params ? params.ShowProject : null;
    }
}
/**
 * DescribeTagValues返回参数结构体
 * @class
 */
class DescribeTagValuesResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 标签列表
         */
        this.Tags = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * tag过滤数组多个是与的关系
 * @class
 */
class TagFilter extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值数组 多个值的话是或的关系
         */
        this.TagValue = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
    }
}
/**
 * 表示一个标签键值对
 * @class
 */
class Tag extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
    }
}
/**
 * AttachResourcesTag请求参数结构体
 * @class
 */
class AttachResourcesTagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源所属业务名称
         */
        this.ServiceType = null;
        /**
         * 资源ID数组，资源个数最多为50
         */
        this.ResourceIds = null;
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * 标签值
         */
        this.TagValue = null;
        /**
         * 资源所在地域，不区分地域的资源不需要传入该字段
         */
        this.ResourceRegion = null;
        /**
         * 资源前缀，cos存储桶不需要传入该字段
         */
        this.ResourcePrefix = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
    }
}
/**
 * CreateTag返回参数结构体
 * @class
 */
class CreateTagResponse extends abstract_model_1.AbstractModel {
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
 * DetachResourcesTag返回参数结构体
 * @class
 */
class DetachResourcesTagResponse extends abstract_model_1.AbstractModel {
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
 * DescribeResourceTagsByResourceIdsSeq返回参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsSeqResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 结果总数
         */
        this.TotalCount = null;
        /**
         * 数据位移偏量
         */
        this.Offset = null;
        /**
         * 每页大小
         */
        this.Limit = null;
        /**
         * 标签列表
         */
        this.Tags = null;
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagResource();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteTag返回参数结构体
 * @class
 */
class DeleteTagResponse extends abstract_model_1.AbstractModel {
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
 * 资源标签键值
 * @class
 */
class ResourceIdTag extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ResourceId = null;
        /**
         * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagKeyValues = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        if (params.TagKeyValues) {
            this.TagKeyValues = new Array();
            for (let z in params.TagKeyValues) {
                let obj = new Tag();
                obj.deserialize(params.TagKeyValues[z]);
                this.TagKeyValues.push(obj);
            }
        }
    }
}
/**
 * DescribeTagValuesSeq请求参数结构体
 * @class
 */
class DescribeTagValuesSeqRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键列表
         */
        this.TagKeys = null;
        /**
         * 创建者用户 Uin，不传或为空只将 Uin 作为条件查询
         */
        this.CreateUin = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
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
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * UpdateResourceTagValue请求参数结构体
 * @class
 */
class UpdateResourceTagValueRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源关联的标签键
         */
        this.TagKey = null;
        /**
         * 修改后的标签值
         */
        this.TagValue = null;
        /**
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         */
        this.Resource = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
    }
}
/**
 * DescribeResourcesByTags请求参数结构体
 * @class
 */
class DescribeResourcesByTagsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签过滤数组
         */
        this.TagFilters = null;
        /**
         * 创建标签者uin
         */
        this.CreateUin = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
         */
        this.Limit = null;
        /**
         * 资源前缀
         */
        this.ResourcePrefix = null;
        /**
         * 资源唯一标记
         */
        this.ResourceId = null;
        /**
         * 资源所在地域
         */
        this.ResourceRegion = null;
        /**
         * 业务类型
         */
        this.ServiceType = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.TagFilters) {
            this.TagFilters = new Array();
            for (let z in params.TagFilters) {
                let obj = new TagFilter();
                obj.deserialize(params.TagFilters[z]);
                this.TagFilters.push(obj);
            }
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
    }
}
/**
 * DeleteResourceTag请求参数结构体
 * @class
 */
class DeleteResourceTagRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
        /**
         * [ 资源六段式描述 ](https://cloud.tencent.com/document/product/598/10606)
         */
        this.Resource = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
    }
}
/**
 * UpdateResourceTagValue返回参数结构体
 * @class
 */
class UpdateResourceTagValueResponse extends abstract_model_1.AbstractModel {
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
 * 标签键对象
 * @class
 */
class TagKeyObject extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签键
         */
        this.TagKey = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
    }
}
/**
 * DescribeResourceTags请求参数结构体
 * @class
 */
class DescribeResourceTagsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 创建者uin
         */
        this.CreateUin = null;
        /**
         * 资源所在地域
         */
        this.ResourceRegion = null;
        /**
         * 业务类型
         */
        this.ServiceType = null;
        /**
         * 资源前缀
         */
        this.ResourcePrefix = null;
        /**
         * 资源唯一标识
         */
        this.ResourceId = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
         */
        this.Limit = null;
        /**
         * 是否是Cos的资源id
         */
        this.CosResourceId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CosResourceId = 'CosResourceId' in params ? params.CosResourceId : null;
    }
}
/**
 * DescribeResourceTagsByResourceIdsSeq请求参数结构体
 * @class
 */
class DescribeResourceTagsByResourceIdsSeqRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 业务类型
         */
        this.ServiceType = null;
        /**
         * 资源前缀
         */
        this.ResourcePrefix = null;
        /**
         * 资源唯一标记
         */
        this.ResourceIds = null;
        /**
         * 资源所在地域
         */
        this.ResourceRegion = null;
        /**
         * 数据偏移量，默认为 0, 必须为Limit参数的整数倍
         */
        this.Offset = null;
        /**
         * 每页大小，默认为 15
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
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * 资源标签
 * @class
 */
class ResourceTag extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 资源所在地域
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ResourceRegion = null;
        /**
         * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ServiceType = null;
        /**
         * 资源前缀
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ResourcePrefix = null;
        /**
         * 资源唯一标记
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ResourceId = null;
        /**
         * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Tags = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceRegion = 'ResourceRegion' in params ? params.ResourceRegion : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ResourcePrefix = 'ResourcePrefix' in params ? params.ResourcePrefix : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
    }
}
exports.Models = {
    TagWithDelete: TagWithDelete,
    DetachResourcesTagRequest: DetachResourcesTagRequest,
    AttachResourcesTagResponse: AttachResourcesTagResponse,
    DeleteTagRequest: DeleteTagRequest,
    DeleteResourceTagResponse: DeleteResourceTagResponse,
    DescribeResourceTagsByTagKeysRequest: DescribeResourceTagsByTagKeysRequest,
    ModifyResourceTagsResponse: ModifyResourceTagsResponse,
    DescribeTagsRequest: DescribeTagsRequest,
    DescribeTagKeysResponse: DescribeTagKeysResponse,
    DescribeTagValuesRequest: DescribeTagValuesRequest,
    ModifyResourceTagsRequest: ModifyResourceTagsRequest,
    DescribeResourcesByTagsUnionRequest: DescribeResourcesByTagsUnionRequest,
    DescribeTagsResponse: DescribeTagsResponse,
    DescribeResourcesByTagsResponse: DescribeResourcesByTagsResponse,
    DescribeTagKeysRequest: DescribeTagKeysRequest,
    DescribeTagsSeqResponse: DescribeTagsSeqResponse,
    DescribeResourceTagsResponse: DescribeResourceTagsResponse,
    DescribeResourceTagsByResourceIdsRequest: DescribeResourceTagsByResourceIdsRequest,
    DescribeResourcesByTagsUnionResponse: DescribeResourcesByTagsUnionResponse,
    DescribeResourceTagsByResourceIdsResponse: DescribeResourceTagsByResourceIdsResponse,
    ModifyResourcesTagValueRequest: ModifyResourcesTagValueRequest,
    TagResource: TagResource,
    AddResourceTagResponse: AddResourceTagResponse,
    ModifyResourcesTagValueResponse: ModifyResourcesTagValueResponse,
    AddResourceTagRequest: AddResourceTagRequest,
    DescribeTagValuesSeqResponse: DescribeTagValuesSeqResponse,
    CreateTagRequest: CreateTagRequest,
    DescribeResourceTagsByTagKeysResponse: DescribeResourceTagsByTagKeysResponse,
    DescribeTagsSeqRequest: DescribeTagsSeqRequest,
    DescribeTagValuesResponse: DescribeTagValuesResponse,
    TagFilter: TagFilter,
    Tag: Tag,
    AttachResourcesTagRequest: AttachResourcesTagRequest,
    CreateTagResponse: CreateTagResponse,
    DetachResourcesTagResponse: DetachResourcesTagResponse,
    DescribeResourceTagsByResourceIdsSeqResponse: DescribeResourceTagsByResourceIdsSeqResponse,
    DeleteTagResponse: DeleteTagResponse,
    ResourceIdTag: ResourceIdTag,
    DescribeTagValuesSeqRequest: DescribeTagValuesSeqRequest,
    UpdateResourceTagValueRequest: UpdateResourceTagValueRequest,
    DescribeResourcesByTagsRequest: DescribeResourcesByTagsRequest,
    DeleteResourceTagRequest: DeleteResourceTagRequest,
    UpdateResourceTagValueResponse: UpdateResourceTagValueResponse,
    TagKeyObject: TagKeyObject,
    DescribeResourceTagsRequest: DescribeResourceTagsRequest,
    DescribeResourceTagsByResourceIdsSeqRequest: DescribeResourceTagsByResourceIdsSeqRequest,
    ResourceTag: ResourceTag,
};
//# sourceMappingURL=models.js.map