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
const GameProperty = models_1.Models.GameProperty;
const TargetConfiguration = models_1.Models.TargetConfiguration;
const DeleteScalingPolicyRequest = models_1.Models.DeleteScalingPolicyRequest;
const PlacedPlayerSession = models_1.Models.PlacedPlayerSession;
const DescribeGameServerSessionsResponse = models_1.Models.DescribeGameServerSessionsResponse;
const Instance = models_1.Models.Instance;
const DescribeGameServerSessionQueuesResponse = models_1.Models.DescribeGameServerSessionQueuesResponse;
const GetInstanceAccessResponse = models_1.Models.GetInstanceAccessResponse;
const JoinGameServerSessionRequest = models_1.Models.JoinGameServerSessionRequest;
const DescribePlayerSessionsResponse = models_1.Models.DescribePlayerSessionsResponse;
const SetServerWeightResponse = models_1.Models.SetServerWeightResponse;
const PlayerLatency = models_1.Models.PlayerLatency;
const StopGameServerSessionPlacementRequest = models_1.Models.StopGameServerSessionPlacementRequest;
const UpdateGameServerSessionResponse = models_1.Models.UpdateGameServerSessionResponse;
const ScalingPolicy = models_1.Models.ScalingPolicy;
const GetInstanceAccessRequest = models_1.Models.GetInstanceAccessRequest;
const DescribeGameServerSessionsRequest = models_1.Models.DescribeGameServerSessionsRequest;
const UpdateGameServerSessionRequest = models_1.Models.UpdateGameServerSessionRequest;
const StartMatchPlacementResponse = models_1.Models.StartMatchPlacementResponse;
const DescribePlayerSessionsRequest = models_1.Models.DescribePlayerSessionsRequest;
const StartGameServerSessionPlacementResponse = models_1.Models.StartGameServerSessionPlacementResponse;
const Credentials = models_1.Models.Credentials;
const DescribeInstancesResponse = models_1.Models.DescribeInstancesResponse;
const GetGameServerSessionLogUrlRequest = models_1.Models.GetGameServerSessionLogUrlRequest;
const StartMatchPlacementRequest = models_1.Models.StartMatchPlacementRequest;
const CreateGameServerSessionResponse = models_1.Models.CreateGameServerSessionResponse;
const DescribeInstancesRequest = models_1.Models.DescribeInstancesRequest;
const DescribeScalingPoliciesRequest = models_1.Models.DescribeScalingPoliciesRequest;
const DescribeGameServerSessionDetailsResponse = models_1.Models.DescribeGameServerSessionDetailsResponse;
const PlayerLatencyPolicy = models_1.Models.PlayerLatencyPolicy;
const PutScalingPolicyResponse = models_1.Models.PutScalingPolicyResponse;
const JoinGameServerSessionResponse = models_1.Models.JoinGameServerSessionResponse;
const DesiredPlayerSession = models_1.Models.DesiredPlayerSession;
const SearchGameServerSessionsResponse = models_1.Models.SearchGameServerSessionsResponse;
const DescribeGameServerSessionPlacementRequest = models_1.Models.DescribeGameServerSessionPlacementRequest;
const DescribeScalingPoliciesResponse = models_1.Models.DescribeScalingPoliciesResponse;
const GameServerSessionQueueDestination = models_1.Models.GameServerSessionQueueDestination;
const GameServerSessionPlacement = models_1.Models.GameServerSessionPlacement;
const GameServerSessionQueue = models_1.Models.GameServerSessionQueue;
const SetServerWeightRequest = models_1.Models.SetServerWeightRequest;
const PlayerSession = models_1.Models.PlayerSession;
const CreateGameServerSessionRequest = models_1.Models.CreateGameServerSessionRequest;
const GetGameServerSessionLogUrlResponse = models_1.Models.GetGameServerSessionLogUrlResponse;
const GameServerSessionDetail = models_1.Models.GameServerSessionDetail;
const DescribeGameServerSessionDetailsRequest = models_1.Models.DescribeGameServerSessionDetailsRequest;
const StartGameServerSessionPlacementRequest = models_1.Models.StartGameServerSessionPlacementRequest;
const GameServerSession = models_1.Models.GameServerSession;
const DescribeGameServerSessionQueuesRequest = models_1.Models.DescribeGameServerSessionQueuesRequest;
const DeleteScalingPolicyResponse = models_1.Models.DeleteScalingPolicyResponse;
const DescribeGameServerSessionPlacementResponse = models_1.Models.DescribeGameServerSessionPlacementResponse;
const SearchGameServerSessionsRequest = models_1.Models.SearchGameServerSessionsRequest;
const PutScalingPolicyRequest = models_1.Models.PutScalingPolicyRequest;
const StopGameServerSessionPlacementResponse = models_1.Models.StopGameServerSessionPlacementResponse;
const InstanceAccess = models_1.Models.InstanceAccess;
/**
 * gse client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("gse.tencentcloudapi.com", "2019-11-12", credential, region, profile);
    }
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     * @param {UpdateGameServerSessionRequest} req
     * @param {function(string, UpdateGameServerSessionResponse):void} cb
     * @public
     */
    UpdateGameServerSession(req, cb) {
        const resp = new UpdateGameServerSessionResponse();
        this.request("UpdateGameServerSession", req, resp, cb);
    }
    /**
     * 用于查询服务部署的动态扩缩容配置
     * @param {DescribeScalingPoliciesRequest} req
     * @param {function(string, DescribeScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeScalingPolicies(req, cb) {
        const resp = new DescribeScalingPoliciesResponse();
        this.request("DescribeScalingPolicies", req, resp, cb);
    }
    /**
     * 用于查询服务器实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        const resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }
    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     * @param {DescribeGameServerSessionsRequest} req
     * @param {function(string, DescribeGameServerSessionsResponse):void} cb
     * @public
     */
    DescribeGameServerSessions(req, cb) {
        const resp = new DescribeGameServerSessionsResponse();
        this.request("DescribeGameServerSessions", req, resp, cb);
    }
    /**
     * 获取实例登录所需要的凭据
     * @param {GetInstanceAccessRequest} req
     * @param {function(string, GetInstanceAccessResponse):void} cb
     * @public
     */
    GetInstanceAccess(req, cb) {
        const resp = new GetInstanceAccessResponse();
        this.request("GetInstanceAccess", req, resp, cb);
    }
    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     * @param {JoinGameServerSessionRequest} req
     * @param {function(string, JoinGameServerSessionResponse):void} cb
     * @public
     */
    JoinGameServerSession(req, cb) {
        const resp = new JoinGameServerSessionResponse();
        this.request("JoinGameServerSession", req, resp, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     * @param {DescribeGameServerSessionPlacementRequest} req
     * @param {function(string, DescribeGameServerSessionPlacementResponse):void} cb
     * @public
     */
    DescribeGameServerSessionPlacement(req, cb) {
        const resp = new DescribeGameServerSessionPlacementResponse();
        this.request("DescribeGameServerSessionPlacement", req, resp, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     * @param {DescribeGameServerSessionDetailsRequest} req
     * @param {function(string, DescribeGameServerSessionDetailsResponse):void} cb
     * @public
     */
    DescribeGameServerSessionDetails(req, cb) {
        const resp = new DescribeGameServerSessionDetailsResponse();
        this.request("DescribeGameServerSessionDetails", req, resp, cb);
    }
    /**
     * 用于设置动态扩缩容配置
     * @param {PutScalingPolicyRequest} req
     * @param {function(string, PutScalingPolicyResponse):void} cb
     * @public
     */
    PutScalingPolicy(req, cb) {
        const resp = new PutScalingPolicyResponse();
        this.request("PutScalingPolicy", req, resp, cb);
    }
    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     * @param {StartGameServerSessionPlacementRequest} req
     * @param {function(string, StartGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StartGameServerSessionPlacement(req, cb) {
        const resp = new StartGameServerSessionPlacementResponse();
        this.request("StartGameServerSessionPlacement", req, resp, cb);
    }
    /**
     * 设置服务器权重
     * @param {SetServerWeightRequest} req
     * @param {function(string, SetServerWeightResponse):void} cb
     * @public
     */
    SetServerWeight(req, cb) {
        const resp = new SetServerWeightResponse();
        this.request("SetServerWeight", req, resp, cb);
    }
    /**
     * 本接口（StartMatchPlacement）用于开始匹配放置游戏服务器会话
     * @param {StartMatchPlacementRequest} req
     * @param {function(string, StartMatchPlacementResponse):void} cb
     * @public
     */
    StartMatchPlacement(req, cb) {
        const resp = new StartMatchPlacementResponse();
        this.request("StartMatchPlacement", req, resp, cb);
    }
    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     * @param {StopGameServerSessionPlacementRequest} req
     * @param {function(string, StopGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StopGameServerSessionPlacement(req, cb) {
        const resp = new StopGameServerSessionPlacementResponse();
        this.request("StopGameServerSessionPlacement", req, resp, cb);
    }
    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     * @param {DescribePlayerSessionsRequest} req
     * @param {function(string, DescribePlayerSessionsResponse):void} cb
     * @public
     */
    DescribePlayerSessions(req, cb) {
        const resp = new DescribePlayerSessionsResponse();
        this.request("DescribePlayerSessions", req, resp, cb);
    }
    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     * @param {GetGameServerSessionLogUrlRequest} req
     * @param {function(string, GetGameServerSessionLogUrlResponse):void} cb
     * @public
     */
    GetGameServerSessionLogUrl(req, cb) {
        const resp = new GetGameServerSessionLogUrlResponse();
        this.request("GetGameServerSessionLogUrl", req, resp, cb);
    }
    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     * @param {SearchGameServerSessionsRequest} req
     * @param {function(string, SearchGameServerSessionsResponse):void} cb
     * @public
     */
    SearchGameServerSessions(req, cb) {
        const resp = new SearchGameServerSessionsResponse();
        this.request("SearchGameServerSessions", req, resp, cb);
    }
    /**
     * 用于删除扩缩容配置
     * @param {DeleteScalingPolicyRequest} req
     * @param {function(string, DeleteScalingPolicyResponse):void} cb
     * @public
     */
    DeleteScalingPolicy(req, cb) {
        const resp = new DeleteScalingPolicyResponse();
        this.request("DeleteScalingPolicy", req, resp, cb);
    }
    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     * @param {CreateGameServerSessionRequest} req
     * @param {function(string, CreateGameServerSessionResponse):void} cb
     * @public
     */
    CreateGameServerSession(req, cb) {
        const resp = new CreateGameServerSessionResponse();
        this.request("CreateGameServerSession", req, resp, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     * @param {DescribeGameServerSessionQueuesRequest} req
     * @param {function(string, DescribeGameServerSessionQueuesResponse):void} cb
     * @public
     */
    DescribeGameServerSessionQueues(req, cb) {
        const resp = new DescribeGameServerSessionQueuesResponse();
        this.request("DescribeGameServerSessionQueues", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=gse_client.js.map