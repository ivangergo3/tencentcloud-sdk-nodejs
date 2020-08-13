"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const models_1 = require("./models");
const abstract_client_1 = require("../../common/abstract_client");
const TagWithDelete = models_1.Models.TagWithDelete;
const DetachResourcesTagRequest = models_1.Models.DetachResourcesTagRequest;
const AttachResourcesTagResponse = models_1.Models.AttachResourcesTagResponse;
const DeleteTagRequest = models_1.Models.DeleteTagRequest;
const DeleteResourceTagResponse = models_1.Models.DeleteResourceTagResponse;
const DescribeResourceTagsByTagKeysRequest = models_1.Models.DescribeResourceTagsByTagKeysRequest;
const ModifyResourceTagsResponse = models_1.Models.ModifyResourceTagsResponse;
const DescribeTagsRequest = models_1.Models.DescribeTagsRequest;
const DescribeTagKeysResponse = models_1.Models.DescribeTagKeysResponse;
const DescribeTagValuesRequest = models_1.Models.DescribeTagValuesRequest;
const ModifyResourceTagsRequest = models_1.Models.ModifyResourceTagsRequest;
const DescribeResourcesByTagsUnionRequest = models_1.Models.DescribeResourcesByTagsUnionRequest;
const DescribeTagsResponse = models_1.Models.DescribeTagsResponse;
const DescribeResourcesByTagsResponse = models_1.Models.DescribeResourcesByTagsResponse;
const DescribeTagKeysRequest = models_1.Models.DescribeTagKeysRequest;
const DescribeTagsSeqResponse = models_1.Models.DescribeTagsSeqResponse;
const DescribeResourceTagsResponse = models_1.Models.DescribeResourceTagsResponse;
const DescribeResourceTagsByResourceIdsRequest = models_1.Models.DescribeResourceTagsByResourceIdsRequest;
const DescribeResourcesByTagsUnionResponse = models_1.Models.DescribeResourcesByTagsUnionResponse;
const DescribeResourceTagsByResourceIdsResponse = models_1.Models.DescribeResourceTagsByResourceIdsResponse;
const ModifyResourcesTagValueRequest = models_1.Models.ModifyResourcesTagValueRequest;
const TagResource = models_1.Models.TagResource;
const AddResourceTagResponse = models_1.Models.AddResourceTagResponse;
const ModifyResourcesTagValueResponse = models_1.Models.ModifyResourcesTagValueResponse;
const AddResourceTagRequest = models_1.Models.AddResourceTagRequest;
const DescribeTagValuesSeqResponse = models_1.Models.DescribeTagValuesSeqResponse;
const CreateTagRequest = models_1.Models.CreateTagRequest;
const DescribeResourceTagsByTagKeysResponse = models_1.Models.DescribeResourceTagsByTagKeysResponse;
const DescribeTagsSeqRequest = models_1.Models.DescribeTagsSeqRequest;
const DescribeTagValuesResponse = models_1.Models.DescribeTagValuesResponse;
const TagFilter = models_1.Models.TagFilter;
const Tag = models_1.Models.Tag;
const AttachResourcesTagRequest = models_1.Models.AttachResourcesTagRequest;
const CreateTagResponse = models_1.Models.CreateTagResponse;
const DetachResourcesTagResponse = models_1.Models.DetachResourcesTagResponse;
const DescribeResourceTagsByResourceIdsSeqResponse = models_1.Models.DescribeResourceTagsByResourceIdsSeqResponse;
const DeleteTagResponse = models_1.Models.DeleteTagResponse;
const ResourceIdTag = models_1.Models.ResourceIdTag;
const DescribeTagValuesSeqRequest = models_1.Models.DescribeTagValuesSeqRequest;
const UpdateResourceTagValueRequest = models_1.Models.UpdateResourceTagValueRequest;
const DescribeResourcesByTagsRequest = models_1.Models.DescribeResourcesByTagsRequest;
const DeleteResourceTagRequest = models_1.Models.DeleteResourceTagRequest;
const UpdateResourceTagValueResponse = models_1.Models.UpdateResourceTagValueResponse;
const TagKeyObject = models_1.Models.TagKeyObject;
const DescribeResourceTagsRequest = models_1.Models.DescribeResourceTagsRequest;
const DescribeResourceTagsByResourceIdsSeqRequest = models_1.Models.DescribeResourceTagsByResourceIdsSeqRequest;
const ResourceTag = models_1.Models.ResourceTag;
/**
 * tag client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tag.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    /**
     * 根据标签键获取资源标签
     * @param {DescribeResourceTagsByTagKeysRequest} req
     * @param {function(string, DescribeResourceTagsByTagKeysResponse):void} cb
     * @public
     */
    DescribeResourceTagsByTagKeys(req, cb) {
        const resp = new DescribeResourceTagsByTagKeysResponse();
        this.request("DescribeResourceTagsByTagKeys", req, resp, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签值。
     * @param {DescribeTagValuesSeqRequest} req
     * @param {function(string, DescribeTagValuesSeqResponse):void} cb
     * @public
     */
    DescribeTagValuesSeq(req, cb) {
        const resp = new DescribeTagValuesSeqResponse();
        this.request("DescribeTagValuesSeq", req, resp, cb);
    }
    /**
     * 解绑多个资源关联的某个标签
     * @param {DetachResourcesTagRequest} req
     * @param {function(string, DetachResourcesTagResponse):void} cb
     * @public
     */
    DetachResourcesTag(req, cb) {
        const resp = new DetachResourcesTagResponse();
        this.request("DetachResourcesTag", req, resp, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签值。
     * @param {DescribeTagValuesRequest} req
     * @param {function(string, DescribeTagValuesResponse):void} cb
     * @public
     */
    DescribeTagValues(req, cb) {
        const resp = new DescribeTagValuesResponse();
        this.request("DescribeTagValues", req, resp, cb);
    }
    /**
     * 用于查询已有资源标签键值对
     * @param {DescribeResourceTagsByResourceIdsRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIds(req, cb) {
        const resp = new DescribeResourceTagsByResourceIdsResponse();
        this.request("DescribeResourceTagsByResourceIds", req, resp, cb);
    }
    /**
     * 查询资源关联标签
     * @param {DescribeResourceTagsRequest} req
     * @param {function(string, DescribeResourceTagsResponse):void} cb
     * @public
     */
    DescribeResourceTags(req, cb) {
        const resp = new DescribeResourceTagsResponse();
        this.request("DescribeResourceTags", req, resp, cb);
    }
    /**
     * 本接口用于修改资源关联的所有标签
     * @param {ModifyResourceTagsRequest} req
     * @param {function(string, ModifyResourceTagsResponse):void} cb
     * @public
     */
    ModifyResourceTags(req, cb) {
        const resp = new ModifyResourceTagsResponse();
        this.request("ModifyResourceTags", req, resp, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签键。

     * @param {DescribeTagKeysRequest} req
     * @param {function(string, DescribeTagKeysResponse):void} cb
     * @public
     */
    DescribeTagKeys(req, cb) {
        const resp = new DescribeTagKeysResponse();
        this.request("DescribeTagKeys", req, resp, cb);
    }
    /**
     * 本接口用于修改资源已关联的标签值（标签键不变）
     * @param {UpdateResourceTagValueRequest} req
     * @param {function(string, UpdateResourceTagValueResponse):void} cb
     * @public
     */
    UpdateResourceTagValue(req, cb) {
        const resp = new UpdateResourceTagValueResponse();
        this.request("UpdateResourceTagValue", req, resp, cb);
    }
    /**
     * 本接口用于解除标签和资源的关联关系
     * @param {DeleteResourceTagRequest} req
     * @param {function(string, DeleteResourceTagResponse):void} cb
     * @public
     */
    DeleteResourceTag(req, cb) {
        const resp = new DeleteResourceTagResponse();
        this.request("DeleteResourceTag", req, resp, cb);
    }
    /**
     * 通过标签查询资源列表并集
     * @param {DescribeResourcesByTagsUnionRequest} req
     * @param {function(string, DescribeResourcesByTagsUnionResponse):void} cb
     * @public
     */
    DescribeResourcesByTagsUnion(req, cb) {
        const resp = new DescribeResourcesByTagsUnionResponse();
        this.request("DescribeResourcesByTagsUnion", req, resp, cb);
    }
    /**
     * 按顺序查看资源关联的标签
     * @param {DescribeResourceTagsByResourceIdsSeqRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsSeqResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIdsSeq(req, cb) {
        const resp = new DescribeResourceTagsByResourceIdsSeqResponse();
        this.request("DescribeResourceTagsByResourceIdsSeq", req, resp, cb);
    }
    /**
     * 用于查询已建立的标签列表。

     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        const resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }
    /**
     * 用于查询已建立的标签列表。

     * @param {DescribeTagsSeqRequest} req
     * @param {function(string, DescribeTagsSeqResponse):void} cb
     * @public
     */
    DescribeTagsSeq(req, cb) {
        const resp = new DescribeTagsSeqResponse();
        this.request("DescribeTagsSeq", req, resp, cb);
    }
    /**
     * 通过标签查询资源列表
     * @param {DescribeResourcesByTagsRequest} req
     * @param {function(string, DescribeResourcesByTagsResponse):void} cb
     * @public
     */
    DescribeResourcesByTags(req, cb) {
        const resp = new DescribeResourcesByTagsResponse();
        this.request("DescribeResourcesByTags", req, resp, cb);
    }
    /**
     * 本接口用于给标签关联资源
     * @param {AddResourceTagRequest} req
     * @param {function(string, AddResourceTagResponse):void} cb
     * @public
     */
    AddResourceTag(req, cb) {
        const resp = new AddResourceTagResponse();
        this.request("AddResourceTag", req, resp, cb);
    }
    /**
     * 本接口用于删除一对标签键和标签值
     * @param {DeleteTagRequest} req
     * @param {function(string, DeleteTagResponse):void} cb
     * @public
     */
    DeleteTag(req, cb) {
        const resp = new DeleteTagResponse();
        this.request("DeleteTag", req, resp, cb);
    }
    /**
     * 给多个资源关联某个标签
     * @param {AttachResourcesTagRequest} req
     * @param {function(string, AttachResourcesTagResponse):void} cb
     * @public
     */
    AttachResourcesTag(req, cb) {
        const resp = new AttachResourcesTagResponse();
        this.request("AttachResourcesTag", req, resp, cb);
    }
    /**
     * 本接口用于创建一对标签键和标签值
     * @param {CreateTagRequest} req
     * @param {function(string, CreateTagResponse):void} cb
     * @public
     */
    CreateTag(req, cb) {
        const resp = new CreateTagResponse();
        this.request("CreateTag", req, resp, cb);
    }
    /**
     * 修改多个资源关联的某个标签键对应的标签值
     * @param {ModifyResourcesTagValueRequest} req
     * @param {function(string, ModifyResourcesTagValueResponse):void} cb
     * @public
     */
    ModifyResourcesTagValue(req, cb) {
        const resp = new ModifyResourcesTagValueResponse();
        this.request("ModifyResourcesTagValue", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tag_client.js.map