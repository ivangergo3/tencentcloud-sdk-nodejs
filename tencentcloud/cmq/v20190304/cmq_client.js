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
const TopicSet = models_1.Models.TopicSet;
const RewindQueueRequest = models_1.Models.RewindQueueRequest;
const DescribeSubscriptionDetailRequest = models_1.Models.DescribeSubscriptionDetailRequest;
const ModifyQueueAttributeResponse = models_1.Models.ModifyQueueAttributeResponse;
const CreateQueueRequest = models_1.Models.CreateQueueRequest;
const ModifySubscriptionAttributeResponse = models_1.Models.ModifySubscriptionAttributeResponse;
const DeadLetterPolicy = models_1.Models.DeadLetterPolicy;
const ModifyTopicAttributeResponse = models_1.Models.ModifyTopicAttributeResponse;
const DeleteSubscribeRequest = models_1.Models.DeleteSubscribeRequest;
const DescribeSubscriptionDetailResponse = models_1.Models.DescribeSubscriptionDetailResponse;
const CreateSubscribeRequest = models_1.Models.CreateSubscribeRequest;
const ClearQueueRequest = models_1.Models.ClearQueueRequest;
const CreateTopicResponse = models_1.Models.CreateTopicResponse;
const ClearSubscriptionFilterTagsResponse = models_1.Models.ClearSubscriptionFilterTagsResponse;
const UnbindDeadLetterResponse = models_1.Models.UnbindDeadLetterResponse;
const TransactionPolicy = models_1.Models.TransactionPolicy;
const DescribeTopicDetailRequest = models_1.Models.DescribeTopicDetailRequest;
const DeleteTopicRequest = models_1.Models.DeleteTopicRequest;
const DescribeTopicDetailResponse = models_1.Models.DescribeTopicDetailResponse;
const DescribeQueueDetailResponse = models_1.Models.DescribeQueueDetailResponse;
const UnbindDeadLetterRequest = models_1.Models.UnbindDeadLetterRequest;
const CreateTopicRequest = models_1.Models.CreateTopicRequest;
const DeleteQueueRequest = models_1.Models.DeleteQueueRequest;
const Filter = models_1.Models.Filter;
const DescribeDeadLetterSourceQueuesResponse = models_1.Models.DescribeDeadLetterSourceQueuesResponse;
const RewindQueueResponse = models_1.Models.RewindQueueResponse;
const ModifyTopicAttributeRequest = models_1.Models.ModifyTopicAttributeRequest;
const DescribeQueueDetailRequest = models_1.Models.DescribeQueueDetailRequest;
const QueueSet = models_1.Models.QueueSet;
const DeleteTopicResponse = models_1.Models.DeleteTopicResponse;
const ClearSubscriptionFilterTagsRequest = models_1.Models.ClearSubscriptionFilterTagsRequest;
const CreateQueueResponse = models_1.Models.CreateQueueResponse;
const DeleteSubscribeResponse = models_1.Models.DeleteSubscribeResponse;
const DescribeDeadLetterSourceQueuesRequest = models_1.Models.DescribeDeadLetterSourceQueuesRequest;
const Tag = models_1.Models.Tag;
const DeadLetterSource = models_1.Models.DeadLetterSource;
const CreateSubscribeResponse = models_1.Models.CreateSubscribeResponse;
const ClearQueueResponse = models_1.Models.ClearQueueResponse;
const ModifySubscriptionAttributeRequest = models_1.Models.ModifySubscriptionAttributeRequest;
const Subscription = models_1.Models.Subscription;
const DeleteQueueResponse = models_1.Models.DeleteQueueResponse;
const ModifyQueueAttributeRequest = models_1.Models.ModifyQueueAttributeRequest;
/**
 * cmq client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cmq.tencentcloudapi.com", "2019-03-04", credential, region, profile);
    }
    /**
     * 创建主题
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        const resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }
    /**
     * 创建订阅接口
     * @param {CreateSubscribeRequest} req
     * @param {function(string, CreateSubscribeResponse):void} cb
     * @public
     */
    CreateSubscribe(req, cb) {
        const resp = new CreateSubscribeResponse();
        this.request("CreateSubscribe", req, resp, cb);
    }
    /**
     * 修改主题属性
     * @param {ModifyTopicAttributeRequest} req
     * @param {function(string, ModifyTopicAttributeResponse):void} cb
     * @public
     */
    ModifyTopicAttribute(req, cb) {
        const resp = new ModifyTopicAttributeResponse();
        this.request("ModifyTopicAttribute", req, resp, cb);
    }
    /**
     * 清空订阅者消息标签
     * @param {ClearSubscriptionFilterTagsRequest} req
     * @param {function(string, ClearSubscriptionFilterTagsResponse):void} cb
     * @public
     */
    ClearSubscriptionFilterTags(req, cb) {
        const resp = new ClearSubscriptionFilterTagsResponse();
        this.request("ClearSubscriptionFilterTags", req, resp, cb);
    }
    /**
     * 删除订阅
     * @param {DeleteSubscribeRequest} req
     * @param {function(string, DeleteSubscribeResponse):void} cb
     * @public
     */
    DeleteSubscribe(req, cb) {
        const resp = new DeleteSubscribeResponse();
        this.request("DeleteSubscribe", req, resp, cb);
    }
    /**
     * 创建队列接口

     * @param {CreateQueueRequest} req
     * @param {function(string, CreateQueueResponse):void} cb
     * @public
     */
    CreateQueue(req, cb) {
        const resp = new CreateQueueResponse();
        this.request("CreateQueue", req, resp, cb);
    }
    /**
     * 回溯队列
     * @param {RewindQueueRequest} req
     * @param {function(string, RewindQueueResponse):void} cb
     * @public
     */
    RewindQueue(req, cb) {
        const resp = new RewindQueueResponse();
        this.request("RewindQueue", req, resp, cb);
    }
    /**
     * 修改订阅属性
     * @param {ModifySubscriptionAttributeRequest} req
     * @param {function(string, ModifySubscriptionAttributeResponse):void} cb
     * @public
     */
    ModifySubscriptionAttribute(req, cb) {
        const resp = new ModifySubscriptionAttributeResponse();
        this.request("ModifySubscriptionAttribute", req, resp, cb);
    }
    /**
     * 查询主题详情
     * @param {DescribeTopicDetailRequest} req
     * @param {function(string, DescribeTopicDetailResponse):void} cb
     * @public
     */
    DescribeTopicDetail(req, cb) {
        const resp = new DescribeTopicDetailResponse();
        this.request("DescribeTopicDetail", req, resp, cb);
    }
    /**
     * 枚举队列
     * @param {DescribeQueueDetailRequest} req
     * @param {function(string, DescribeQueueDetailResponse):void} cb
     * @public
     */
    DescribeQueueDetail(req, cb) {
        const resp = new DescribeQueueDetailResponse();
        this.request("DescribeQueueDetail", req, resp, cb);
    }
    /**
     * DeleteQueue
     * @param {DeleteQueueRequest} req
     * @param {function(string, DeleteQueueResponse):void} cb
     * @public
     */
    DeleteQueue(req, cb) {
        const resp = new DeleteQueueResponse();
        this.request("DeleteQueue", req, resp, cb);
    }
    /**
     * 查询订阅详情
     * @param {DescribeSubscriptionDetailRequest} req
     * @param {function(string, DescribeSubscriptionDetailResponse):void} cb
     * @public
     */
    DescribeSubscriptionDetail(req, cb) {
        const resp = new DescribeSubscriptionDetailResponse();
        this.request("DescribeSubscriptionDetail", req, resp, cb);
    }
    /**
     * 枚举死信队列源队列
     * @param {DescribeDeadLetterSourceQueuesRequest} req
     * @param {function(string, DescribeDeadLetterSourceQueuesResponse):void} cb
     * @public
     */
    DescribeDeadLetterSourceQueues(req, cb) {
        const resp = new DescribeDeadLetterSourceQueuesResponse();
        this.request("DescribeDeadLetterSourceQueues", req, resp, cb);
    }
    /**
     * 删除主题
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        const resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }
    /**
     * 清除queue中的所有消息
     * @param {ClearQueueRequest} req
     * @param {function(string, ClearQueueResponse):void} cb
     * @public
     */
    ClearQueue(req, cb) {
        const resp = new ClearQueueResponse();
        this.request("ClearQueue", req, resp, cb);
    }
    /**
     * 解绑死信队列
     * @param {UnbindDeadLetterRequest} req
     * @param {function(string, UnbindDeadLetterResponse):void} cb
     * @public
     */
    UnbindDeadLetter(req, cb) {
        const resp = new UnbindDeadLetterResponse();
        this.request("UnbindDeadLetter", req, resp, cb);
    }
    /**
     * 修改队列属性
     * @param {ModifyQueueAttributeRequest} req
     * @param {function(string, ModifyQueueAttributeResponse):void} cb
     * @public
     */
    ModifyQueueAttribute(req, cb) {
        const resp = new ModifyQueueAttributeResponse();
        this.request("ModifyQueueAttribute", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cmq_client.js.map