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
const ModifyEnvironmentAttributesRequest = models_1.Models.ModifyEnvironmentAttributesRequest;
const DescribeSubscriptionsRequest = models_1.Models.DescribeSubscriptionsRequest;
const Environment = models_1.Models.Environment;
const DescribeEnvironmentAttributesRequest = models_1.Models.DescribeEnvironmentAttributesRequest;
const PartitionsTopic = models_1.Models.PartitionsTopic;
const ResetMsgSubOffsetByTimestampResponse = models_1.Models.ResetMsgSubOffsetByTimestampResponse;
const DescribeTopicsResponse = models_1.Models.DescribeTopicsResponse;
const CreateTopicResponse = models_1.Models.CreateTopicResponse;
const DescribeEnvironmentsResponse = models_1.Models.DescribeEnvironmentsResponse;
const ModifyTopicResponse = models_1.Models.ModifyTopicResponse;
const DescribeProducersRequest = models_1.Models.DescribeProducersRequest;
const DescribeEnvironmentAttributesResponse = models_1.Models.DescribeEnvironmentAttributesResponse;
const Subscription = models_1.Models.Subscription;
const DeleteTopicsResponse = models_1.Models.DeleteTopicsResponse;
const SubscriptionTopic = models_1.Models.SubscriptionTopic;
const DescribeSubscriptionsResponse = models_1.Models.DescribeSubscriptionsResponse;
const DescribeProducersResponse = models_1.Models.DescribeProducersResponse;
const CreateTopicRequest = models_1.Models.CreateTopicRequest;
const DescribeTopicsRequest = models_1.Models.DescribeTopicsRequest;
const DeleteEnvironmentsResponse = models_1.Models.DeleteEnvironmentsResponse;
const Connection = models_1.Models.Connection;
const DeleteTopicsRequest = models_1.Models.DeleteTopicsRequest;
const CreateSubscriptionRequest = models_1.Models.CreateSubscriptionRequest;
const ModifyTopicRequest = models_1.Models.ModifyTopicRequest;
const Consumer = models_1.Models.Consumer;
const FilterSubscription = models_1.Models.FilterSubscription;
const ModifyEnvironmentAttributesResponse = models_1.Models.ModifyEnvironmentAttributesResponse;
const DeleteSubscriptionsRequest = models_1.Models.DeleteSubscriptionsRequest;
const CreateEnvironmentResponse = models_1.Models.CreateEnvironmentResponse;
const ResetMsgSubOffsetByTimestampRequest = models_1.Models.ResetMsgSubOffsetByTimestampRequest;
const Producer = models_1.Models.Producer;
const DeleteSubscriptionsResponse = models_1.Models.DeleteSubscriptionsResponse;
const CreateSubscriptionResponse = models_1.Models.CreateSubscriptionResponse;
const ConsumersSchedule = models_1.Models.ConsumersSchedule;
const DeleteEnvironmentsRequest = models_1.Models.DeleteEnvironmentsRequest;
const Topic = models_1.Models.Topic;
const DescribeEnvironmentsRequest = models_1.Models.DescribeEnvironmentsRequest;
const TopicRecord = models_1.Models.TopicRecord;
const CreateEnvironmentRequest = models_1.Models.CreateEnvironmentRequest;
/**
 * tdmq client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tdmq.tencentcloudapi.com", "2020-02-17", credential, region, profile);
    }
    /**
     * 新增指定分区、类型的消息主题
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        const resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }
    /**
     * 批量删除租户下的环境
     * @param {DeleteEnvironmentsRequest} req
     * @param {function(string, DeleteEnvironmentsResponse):void} cb
     * @public
     */
    DeleteEnvironments(req, cb) {
        const resp = new DeleteEnvironmentsResponse();
        this.request("DeleteEnvironments", req, resp, cb);
    }
    /**
     * 修改主题备注和分区数
     * @param {ModifyTopicRequest} req
     * @param {function(string, ModifyTopicResponse):void} cb
     * @public
     */
    ModifyTopic(req, cb) {
        const resp = new ModifyTopicResponse();
        this.request("ModifyTopic", req, resp, cb);
    }
    /**
     * 批量删除topics
     * @param {DeleteTopicsRequest} req
     * @param {function(string, DeleteTopicsResponse):void} cb
     * @public
     */
    DeleteTopics(req, cb) {
        const resp = new DeleteTopicsResponse();
        this.request("DeleteTopics", req, resp, cb);
    }
    /**
     * 创建一个主题的订阅关系
     * @param {CreateSubscriptionRequest} req
     * @param {function(string, CreateSubscriptionResponse):void} cb
     * @public
     */
    CreateSubscription(req, cb) {
        const resp = new CreateSubscriptionResponse();
        this.request("CreateSubscription", req, resp, cb);
    }
    /**
     * 查询指定环境和主题下的订阅者列表
     * @param {DescribeSubscriptionsRequest} req
     * @param {function(string, DescribeSubscriptionsResponse):void} cb
     * @public
     */
    DescribeSubscriptions(req, cb) {
        const resp = new DescribeSubscriptionsResponse();
        this.request("DescribeSubscriptions", req, resp, cb);
    }
    /**
     * 修改指定环境的属性值
     * @param {ModifyEnvironmentAttributesRequest} req
     * @param {function(string, ModifyEnvironmentAttributesResponse):void} cb
     * @public
     */
    ModifyEnvironmentAttributes(req, cb) {
        const resp = new ModifyEnvironmentAttributesResponse();
        this.request("ModifyEnvironmentAttributes", req, resp, cb);
    }
    /**
     * 获取指定环境的属性
     * @param {DescribeEnvironmentAttributesRequest} req
     * @param {function(string, DescribeEnvironmentAttributesResponse):void} cb
     * @public
     */
    DescribeEnvironmentAttributes(req, cb) {
        const resp = new DescribeEnvironmentAttributesResponse();
        this.request("DescribeEnvironmentAttributes", req, resp, cb);
    }
    /**
     * 用于在用户账户下创建消息队列 Tdmq环境（命名空间）
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        const resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
    }
    /**
     * 获取租户下环境列表
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        const resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     * @param {ResetMsgSubOffsetByTimestampRequest} req
     * @param {function(string, ResetMsgSubOffsetByTimestampResponse):void} cb
     * @public
     */
    ResetMsgSubOffsetByTimestamp(req, cb) {
        const resp = new ResetMsgSubOffsetByTimestampResponse();
        this.request("ResetMsgSubOffsetByTimestamp", req, resp, cb);
    }
    /**
     * 获取生产者列表，仅显示在线的生产者
     * @param {DescribeProducersRequest} req
     * @param {function(string, DescribeProducersResponse):void} cb
     * @public
     */
    DescribeProducers(req, cb) {
        const resp = new DescribeProducersResponse();
        this.request("DescribeProducers", req, resp, cb);
    }
    /**
     * 获取环境下主题列表
     * @param {DescribeTopicsRequest} req
     * @param {function(string, DescribeTopicsResponse):void} cb
     * @public
     */
    DescribeTopics(req, cb) {
        const resp = new DescribeTopicsResponse();
        this.request("DescribeTopics", req, resp, cb);
    }
    /**
     * 删除订阅关系
     * @param {DeleteSubscriptionsRequest} req
     * @param {function(string, DeleteSubscriptionsResponse):void} cb
     * @public
     */
    DeleteSubscriptions(req, cb) {
        const resp = new DeleteSubscriptionsResponse();
        this.request("DeleteSubscriptions", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tdmq_client.js.map