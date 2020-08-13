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
const BgpPeer = models_1.Models.BgpPeer;
const RejectDirectConnectTunnelRequest = models_1.Models.RejectDirectConnectTunnelRequest;
const ModifyDirectConnectAttributeRequest = models_1.Models.ModifyDirectConnectAttributeRequest;
const DeleteDirectConnectTunnelRequest = models_1.Models.DeleteDirectConnectTunnelRequest;
const CreateDirectConnectResponse = models_1.Models.CreateDirectConnectResponse;
const DirectConnect = models_1.Models.DirectConnect;
const DescribeAccessPointsResponse = models_1.Models.DescribeAccessPointsResponse;
const AcceptDirectConnectTunnelResponse = models_1.Models.AcceptDirectConnectTunnelResponse;
const DescribeDirectConnectTunnelsRequest = models_1.Models.DescribeDirectConnectTunnelsRequest;
const ModifyDirectConnectTunnelAttributeResponse = models_1.Models.ModifyDirectConnectTunnelAttributeResponse;
const RouteFilterPrefix = models_1.Models.RouteFilterPrefix;
const AcceptDirectConnectTunnelRequest = models_1.Models.AcceptDirectConnectTunnelRequest;
const CreateDirectConnectTunnelRequest = models_1.Models.CreateDirectConnectTunnelRequest;
const DeleteDirectConnectResponse = models_1.Models.DeleteDirectConnectResponse;
const DescribeDirectConnectsResponse = models_1.Models.DescribeDirectConnectsResponse;
const DescribeAccessPointsRequest = models_1.Models.DescribeAccessPointsRequest;
const DescribeDirectConnectsRequest = models_1.Models.DescribeDirectConnectsRequest;
const ModifyDirectConnectTunnelAttributeRequest = models_1.Models.ModifyDirectConnectTunnelAttributeRequest;
const Filter = models_1.Models.Filter;
const CreateDirectConnectRequest = models_1.Models.CreateDirectConnectRequest;
const ModifyDirectConnectAttributeResponse = models_1.Models.ModifyDirectConnectAttributeResponse;
const RejectDirectConnectTunnelResponse = models_1.Models.RejectDirectConnectTunnelResponse;
const CreateDirectConnectTunnelResponse = models_1.Models.CreateDirectConnectTunnelResponse;
const DeleteDirectConnectTunnelResponse = models_1.Models.DeleteDirectConnectTunnelResponse;
const AccessPoint = models_1.Models.AccessPoint;
const DeleteDirectConnectRequest = models_1.Models.DeleteDirectConnectRequest;
const DescribeDirectConnectTunnelsResponse = models_1.Models.DescribeDirectConnectTunnelsResponse;
const Tag = models_1.Models.Tag;
const DirectConnectTunnel = models_1.Models.DirectConnectTunnel;
/**
 * dc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("dc.tencentcloudapi.com", "2018-04-10", credential, region, profile);
    }
    /**
     * 修改物理专线的属性。
     * @param {ModifyDirectConnectAttributeRequest} req
     * @param {function(string, ModifyDirectConnectAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectAttribute(req, cb) {
        const resp = new ModifyDirectConnectAttributeResponse();
        this.request("ModifyDirectConnectAttribute", req, resp, cb);
    }
    /**
     * 用于创建专用通道的接口
     * @param {CreateDirectConnectTunnelRequest} req
     * @param {function(string, CreateDirectConnectTunnelResponse):void} cb
     * @public
     */
    CreateDirectConnectTunnel(req, cb) {
        const resp = new CreateDirectConnectTunnelResponse();
        this.request("CreateDirectConnectTunnel", req, resp, cb);
    }
    /**
     * 删除物理专线。
只能删除处于已连接状态的物理专线。
     * @param {DeleteDirectConnectRequest} req
     * @param {function(string, DeleteDirectConnectResponse):void} cb
     * @public
     */
    DeleteDirectConnect(req, cb) {
        const resp = new DeleteDirectConnectResponse();
        this.request("DeleteDirectConnect", req, resp, cb);
    }
    /**
     * 接受专用通道申请
     * @param {AcceptDirectConnectTunnelRequest} req
     * @param {function(string, AcceptDirectConnectTunnelResponse):void} cb
     * @public
     */
    AcceptDirectConnectTunnel(req, cb) {
        const resp = new AcceptDirectConnectTunnelResponse();
        this.request("AcceptDirectConnectTunnel", req, resp, cb);
    }
    /**
     * 删除专用通道
     * @param {DeleteDirectConnectTunnelRequest} req
     * @param {function(string, DeleteDirectConnectTunnelResponse):void} cb
     * @public
     */
    DeleteDirectConnectTunnel(req, cb) {
        const resp = new DeleteDirectConnectTunnelResponse();
        this.request("DeleteDirectConnectTunnel", req, resp, cb);
    }
    /**
     * 查询物理专线接入点

     * @param {DescribeAccessPointsRequest} req
     * @param {function(string, DescribeAccessPointsResponse):void} cb
     * @public
     */
    DescribeAccessPoints(req, cb) {
        const resp = new DescribeAccessPointsResponse();
        this.request("DescribeAccessPoints", req, resp, cb);
    }
    /**
     * 用于查询专用通道列表。
     * @param {DescribeDirectConnectTunnelsRequest} req
     * @param {function(string, DescribeDirectConnectTunnelsResponse):void} cb
     * @public
     */
    DescribeDirectConnectTunnels(req, cb) {
        const resp = new DescribeDirectConnectTunnelsResponse();
        this.request("DescribeDirectConnectTunnels", req, resp, cb);
    }
    /**
     * 申请物理专线接入。
调用该接口时，请注意：
账号要进行实名认证，否则不允许申请物理专线；
若账户下存在欠费状态的物理专线，则不能申请更多的物理专线。
     * @param {CreateDirectConnectRequest} req
     * @param {function(string, CreateDirectConnectResponse):void} cb
     * @public
     */
    CreateDirectConnect(req, cb) {
        const resp = new CreateDirectConnectResponse();
        this.request("CreateDirectConnect", req, resp, cb);
    }
    /**
     * 拒绝专用通道申请
     * @param {RejectDirectConnectTunnelRequest} req
     * @param {function(string, RejectDirectConnectTunnelResponse):void} cb
     * @public
     */
    RejectDirectConnectTunnel(req, cb) {
        const resp = new RejectDirectConnectTunnelResponse();
        this.request("RejectDirectConnectTunnel", req, resp, cb);
    }
    /**
     * 查询物理专线列表。
     * @param {DescribeDirectConnectsRequest} req
     * @param {function(string, DescribeDirectConnectsResponse):void} cb
     * @public
     */
    DescribeDirectConnects(req, cb) {
        const resp = new DescribeDirectConnectsResponse();
        this.request("DescribeDirectConnects", req, resp, cb);
    }
    /**
     * 修改专用通道属性
     * @param {ModifyDirectConnectTunnelAttributeRequest} req
     * @param {function(string, ModifyDirectConnectTunnelAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectTunnelAttribute(req, cb) {
        const resp = new ModifyDirectConnectTunnelAttributeResponse();
        this.request("ModifyDirectConnectTunnelAttribute", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=dc_client.js.map