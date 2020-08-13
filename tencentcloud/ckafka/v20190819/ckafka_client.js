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
const TopicDetail = models_1.Models.TopicDetail;
const DeleteAclRequest = models_1.Models.DeleteAclRequest;
const GroupInfoMember = models_1.Models.GroupInfoMember;
const DeleteUserRequest = models_1.Models.DeleteUserRequest;
const PartitionOffset = models_1.Models.PartitionOffset;
const DescribeACLRequest = models_1.Models.DescribeACLRequest;
const DescribeTopicAttributesRequest = models_1.Models.DescribeTopicAttributesRequest;
const DescribeInstanceAttributesRequest = models_1.Models.DescribeInstanceAttributesRequest;
const ConsumerGroup = models_1.Models.ConsumerGroup;
const Assignment = models_1.Models.Assignment;
const DescribeConsumerGroupResponse = models_1.Models.DescribeConsumerGroupResponse;
const DeleteTopicRequest = models_1.Models.DeleteTopicRequest;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const GroupInfoTopics = models_1.Models.GroupInfoTopics;
const TopicResult = models_1.Models.TopicResult;
const DescribeInstancesDetailResponse = models_1.Models.DescribeInstancesDetailResponse;
const CreateInstancePreData = models_1.Models.CreateInstancePreData;
const DescribeACLResponse = models_1.Models.DescribeACLResponse;
const JgwOperateResponse = models_1.Models.JgwOperateResponse;
const Topic = models_1.Models.Topic;
const Tag = models_1.Models.Tag;
const GroupResponse = models_1.Models.GroupResponse;
const DescribeTopicAttributesResponse = models_1.Models.DescribeTopicAttributesResponse;
const RouteResponse = models_1.Models.RouteResponse;
const DescribeGroupResponse = models_1.Models.DescribeGroupResponse;
const ModifyInstanceAttributesConfig = models_1.Models.ModifyInstanceAttributesConfig;
const OperateResponseData = models_1.Models.OperateResponseData;
const CreateUserResponse = models_1.Models.CreateUserResponse;
const GroupOffsetTopic = models_1.Models.GroupOffsetTopic;
const CreatePartitionResponse = models_1.Models.CreatePartitionResponse;
const DeleteUserResponse = models_1.Models.DeleteUserResponse;
const CreateAclRequest = models_1.Models.CreateAclRequest;
const DescribeAppInfoRequest = models_1.Models.DescribeAppInfoRequest;
const DescribeTopicResponse = models_1.Models.DescribeTopicResponse;
const ConsumerGroupResponse = models_1.Models.ConsumerGroupResponse;
const CreateTopicIpWhiteListResponse = models_1.Models.CreateTopicIpWhiteListResponse;
const ModifyInstanceAttributesResponse = models_1.Models.ModifyInstanceAttributesResponse;
const ModifyGroupOffsetsResponse = models_1.Models.ModifyGroupOffsetsResponse;
const Partition = models_1.Models.Partition;
const CreateAclResponse = models_1.Models.CreateAclResponse;
const CreateTopicRequest = models_1.Models.CreateTopicRequest;
const DeleteAclResponse = models_1.Models.DeleteAclResponse;
const DescribeRouteRequest = models_1.Models.DescribeRouteRequest;
const InstanceConfigDO = models_1.Models.InstanceConfigDO;
const UserResponse = models_1.Models.UserResponse;
const DescribeGroupInfoRequest = models_1.Models.DescribeGroupInfoRequest;
const DescribeGroupInfoResponse = models_1.Models.DescribeGroupInfoResponse;
const DescribeUserResponse = models_1.Models.DescribeUserResponse;
const AppIdResponse = models_1.Models.AppIdResponse;
const DescribeTopicRequest = models_1.Models.DescribeTopicRequest;
const CreatePartitionRequest = models_1.Models.CreatePartitionRequest;
const Group = models_1.Models.Group;
const DescribeAppInfoResponse = models_1.Models.DescribeAppInfoResponse;
const AclResponse = models_1.Models.AclResponse;
const Instance = models_1.Models.Instance;
const DescribeInstanceAttributesResponse = models_1.Models.DescribeInstanceAttributesResponse;
const TopicDetailResponse = models_1.Models.TopicDetailResponse;
const Config = models_1.Models.Config;
const ModifyPasswordRequest = models_1.Models.ModifyPasswordRequest;
const ModifyInstanceAttributesRequest = models_1.Models.ModifyInstanceAttributesRequest;
const ModifyTopicAttributesResponse = models_1.Models.ModifyTopicAttributesResponse;
const DescribeConsumerGroupRequest = models_1.Models.DescribeConsumerGroupRequest;
const VipEntity = models_1.Models.VipEntity;
const ConsumerGroupTopic = models_1.Models.ConsumerGroupTopic;
const User = models_1.Models.User;
const GroupOffsetPartition = models_1.Models.GroupOffsetPartition;
const DeleteTopicResponse = models_1.Models.DeleteTopicResponse;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const InstanceAttributesResponse = models_1.Models.InstanceAttributesResponse;
const DescribeGroupRequest = models_1.Models.DescribeGroupRequest;
const Filter = models_1.Models.Filter;
const GroupOffsetResponse = models_1.Models.GroupOffsetResponse;
const CreateUserRequest = models_1.Models.CreateUserRequest;
const DeleteTopicIpWhiteListResponse = models_1.Models.DeleteTopicIpWhiteListResponse;
const CreateInstancePreResponse = models_1.Models.CreateInstancePreResponse;
const DescribeInstancesDetailRequest = models_1.Models.DescribeInstancesDetailRequest;
const ModifyPasswordResponse = models_1.Models.ModifyPasswordResponse;
const InstanceDetailResponse = models_1.Models.InstanceDetailResponse;
const GroupInfoResponse = models_1.Models.GroupInfoResponse;
const TopicAttributesResponse = models_1.Models.TopicAttributesResponse;
const InstanceResponse = models_1.Models.InstanceResponse;
const DescribeGroup = models_1.Models.DescribeGroup;
const TopicPartitionDO = models_1.Models.TopicPartitionDO;
const CreateTopicResp = models_1.Models.CreateTopicResp;
const DescribeRouteResponse = models_1.Models.DescribeRouteResponse;
const DescribeTopicDetailRequest = models_1.Models.DescribeTopicDetailRequest;
const DescribeGroupOffsetsResponse = models_1.Models.DescribeGroupOffsetsResponse;
const ModifyGroupOffsetsRequest = models_1.Models.ModifyGroupOffsetsRequest;
const CreateTopicIpWhiteListRequest = models_1.Models.CreateTopicIpWhiteListRequest;
const Route = models_1.Models.Route;
const Acl = models_1.Models.Acl;
const ModifyTopicAttributesRequest = models_1.Models.ModifyTopicAttributesRequest;
const CreateTopicResponse = models_1.Models.CreateTopicResponse;
const CreateInstancePreRequest = models_1.Models.CreateInstancePreRequest;
const DeleteTopicIpWhiteListRequest = models_1.Models.DeleteTopicIpWhiteListRequest;
const DescribeGroupOffsetsRequest = models_1.Models.DescribeGroupOffsetsRequest;
const DescribeUserRequest = models_1.Models.DescribeUserRequest;
const InstanceDetail = models_1.Models.InstanceDetail;
const DescribeTopicDetailResponse = models_1.Models.DescribeTopicDetailResponse;
const SubscribedInfo = models_1.Models.SubscribedInfo;
/**
 * ckafka client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ckafka.tencentcloudapi.com", "2019-08-19", credential, region, profile);
    }
    /**
     * 查看路由信息
     * @param {DescribeRouteRequest} req
     * @param {function(string, DescribeRouteResponse):void} cb
     * @public
     */
    DescribeRoute(req, cb) {
        const resp = new DescribeRouteResponse();
        this.request("DescribeRoute", req, resp, cb);
    }
    /**
     * 获取消费分组信息
     * @param {DescribeGroupInfoRequest} req
     * @param {function(string, DescribeGroupInfoResponse):void} cb
     * @public
     */
    DescribeGroupInfo(req, cb) {
        const resp = new DescribeGroupInfoResponse();
        this.request("DescribeGroupInfo", req, resp, cb);
    }
    /**
     * 查询消费分组信息
     * @param {DescribeConsumerGroupRequest} req
     * @param {function(string, DescribeConsumerGroupResponse):void} cb
     * @public
     */
    DescribeConsumerGroup(req, cb) {
        const resp = new DescribeConsumerGroupResponse();
        this.request("DescribeConsumerGroup", req, resp, cb);
    }
    /**
     * 本接口用于修改主题属性。
     * @param {ModifyTopicAttributesRequest} req
     * @param {function(string, ModifyTopicAttributesResponse):void} cb
     * @public
     */
    ModifyTopicAttributes(req, cb) {
        const resp = new ModifyTopicAttributesResponse();
        this.request("ModifyTopicAttributes", req, resp, cb);
    }
    /**
     * 创建主题ip白名单
     * @param {CreateTopicIpWhiteListRequest} req
     * @param {function(string, CreateTopicIpWhiteListResponse):void} cb
     * @public
     */
    CreateTopicIpWhiteList(req, cb) {
        const resp = new CreateTopicIpWhiteListResponse();
        this.request("CreateTopicIpWhiteList", req, resp, cb);
    }
    /**
     * 枚举消费分组(精简版)
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        const resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }
    /**
     * 设置Groups 消费分组offset
     * @param {ModifyGroupOffsetsRequest} req
     * @param {function(string, ModifyGroupOffsetsResponse):void} cb
     * @public
     */
    ModifyGroupOffsets(req, cb) {
        const resp = new ModifyGroupOffsetsResponse();
        this.request("ModifyGroupOffsets", req, resp, cb);
    }
    /**
     * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }
    /**
     * 设置实例属性
     * @param {ModifyInstanceAttributesRequest} req
     * @param {function(string, ModifyInstanceAttributesResponse):void} cb
     * @public
     */
    ModifyInstanceAttributes(req, cb) {
        const resp = new ModifyInstanceAttributesResponse();
        this.request("ModifyInstanceAttributes", req, resp, cb);
    }
    /**
     * 查询用户信息
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        const resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
    }
    /**
     * 枚举ACL
     * @param {DescribeACLRequest} req
     * @param {function(string, DescribeACLResponse):void} cb
     * @public
     */
    DescribeACL(req, cb) {
        const resp = new DescribeACLResponse();
        this.request("DescribeACL", req, resp, cb);
    }
    /**
     * 获取主题列表详情（仅控制台调用）
     * @param {DescribeTopicDetailRequest} req
     * @param {function(string, DescribeTopicDetailResponse):void} cb
     * @public
     */
    DescribeTopicDetail(req, cb) {
        const resp = new DescribeTopicDetailResponse();
        this.request("DescribeTopicDetail", req, resp, cb);
    }
    /**
     * 创建实例(预付费包年包月)
     * @param {CreateInstancePreRequest} req
     * @param {function(string, CreateInstancePreResponse):void} cb
     * @public
     */
    CreateInstancePre(req, cb) {
        const resp = new CreateInstancePreResponse();
        this.request("CreateInstancePre", req, resp, cb);
    }
    /**
     * 删除主题IP白名单
     * @param {DeleteTopicIpWhiteListRequest} req
     * @param {function(string, DeleteTopicIpWhiteListResponse):void} cb
     * @public
     */
    DeleteTopicIpWhiteList(req, cb) {
        const resp = new DeleteTopicIpWhiteListResponse();
        this.request("DeleteTopicIpWhiteList", req, resp, cb);
    }
    /**
     * 修改密码
     * @param {ModifyPasswordRequest} req
     * @param {function(string, ModifyPasswordResponse):void} cb
     * @public
     */
    ModifyPassword(req, cb) {
        const resp = new ModifyPasswordResponse();
        this.request("ModifyPassword", req, resp, cb);
    }
    /**
     * 添加 ACL 策略
     * @param {CreateAclRequest} req
     * @param {function(string, CreateAclResponse):void} cb
     * @public
     */
    CreateAcl(req, cb) {
        const resp = new CreateAclResponse();
        this.request("CreateAcl", req, resp, cb);
    }
    /**
     * 创建ckafka主题
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        const resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }
    /**
     * 本接口用于增加主题中的分区
     * @param {CreatePartitionRequest} req
     * @param {function(string, CreatePartitionResponse):void} cb
     * @public
     */
    CreatePartition(req, cb) {
        const resp = new CreatePartitionResponse();
        this.request("CreatePartition", req, resp, cb);
    }
    /**
     * 删除ACL
     * @param {DeleteAclRequest} req
     * @param {function(string, DeleteAclResponse):void} cb
     * @public
     */
    DeleteAcl(req, cb) {
        const resp = new DeleteAclResponse();
        this.request("DeleteAcl", req, resp, cb);
    }
    /**
     * 查询用户列表
     * @param {DescribeAppInfoRequest} req
     * @param {function(string, DescribeAppInfoResponse):void} cb
     * @public
     */
    DescribeAppInfo(req, cb) {
        const resp = new DescribeAppInfoResponse();
        this.request("DescribeAppInfo", req, resp, cb);
    }
    /**
     * 获取主题属性

     * @param {DescribeTopicAttributesRequest} req
     * @param {function(string, DescribeTopicAttributesResponse):void} cb
     * @public
     */
    DescribeTopicAttributes(req, cb) {
        const resp = new DescribeTopicAttributesResponse();
        this.request("DescribeTopicAttributes", req, resp, cb);
    }
    /**
     * 获取实例属性
     * @param {DescribeInstanceAttributesRequest} req
     * @param {function(string, DescribeInstanceAttributesResponse):void} cb
     * @public
     */
    DescribeInstanceAttributes(req, cb) {
        const resp = new DescribeInstanceAttributesResponse();
        this.request("DescribeInstanceAttributes", req, resp, cb);
    }
    /**
     * 用户账户下获取实例列表详情
     * @param {DescribeInstancesDetailRequest} req
     * @param {function(string, DescribeInstancesDetailResponse):void} cb
     * @public
     */
    DescribeInstancesDetail(req, cb) {
        const resp = new DescribeInstancesDetailResponse();
        this.request("DescribeInstancesDetail", req, resp, cb);
    }
    /**
     * 删除用户
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        const resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }
    /**
     * 获取消费分组offset
     * @param {DescribeGroupOffsetsRequest} req
     * @param {function(string, DescribeGroupOffsetsResponse):void} cb
     * @public
     */
    DescribeGroupOffsets(req, cb) {
        const resp = new DescribeGroupOffsetsResponse();
        this.request("DescribeGroupOffsets", req, resp, cb);
    }
    /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     * @param {DescribeTopicRequest} req
     * @param {function(string, DescribeTopicResponse):void} cb
     * @public
     */
    DescribeTopic(req, cb) {
        const resp = new DescribeTopicResponse();
        this.request("DescribeTopic", req, resp, cb);
    }
    /**
     * 添加用户
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        const resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }
    /**
     * 删除ckafka主题
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        const resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ckafka_client.js.map