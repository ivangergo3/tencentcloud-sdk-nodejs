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
const Container = models_1.Models.Container;
const InquiryPriceCreateCisResponse = models_1.Models.InquiryPriceCreateCisResponse;
const DescribeContainerLogRequest = models_1.Models.DescribeContainerLogRequest;
const CreateContainerInstanceRequest = models_1.Models.CreateContainerInstanceRequest;
const ContainerState = models_1.Models.ContainerState;
const InquiryPriceCreateCisRequest = models_1.Models.InquiryPriceCreateCisRequest;
const EnvironmentVar = models_1.Models.EnvironmentVar;
const Price = models_1.Models.Price;
const DescribeContainerInstancesResponse = models_1.Models.DescribeContainerInstancesResponse;
const DeleteContainerInstanceResponse = models_1.Models.DeleteContainerInstanceResponse;
const DescribeContainerInstancesRequest = models_1.Models.DescribeContainerInstancesRequest;
const Filter = models_1.Models.Filter;
const CreateContainerInstanceResponse = models_1.Models.CreateContainerInstanceResponse;
const DescribeContainerInstanceRequest = models_1.Models.DescribeContainerInstanceRequest;
const DescribeContainerInstanceResponse = models_1.Models.DescribeContainerInstanceResponse;
const ContainerLog = models_1.Models.ContainerLog;
const DescribeContainerInstanceEventsResponse = models_1.Models.DescribeContainerInstanceEventsResponse;
const Event = models_1.Models.Event;
const DescribeContainerInstanceEventsRequest = models_1.Models.DescribeContainerInstanceEventsRequest;
const DescribeContainerLogResponse = models_1.Models.DescribeContainerLogResponse;
const DeleteContainerInstanceRequest = models_1.Models.DeleteContainerInstanceRequest;
const ContainerInstance = models_1.Models.ContainerInstance;
/**
 * cis client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("cis.tencentcloudapi.com", "2018-04-08", credential, region, profile);
    }
    /**
     * 此接口（DescribeContainerInstances）查询容器实例列表
     * @param {DescribeContainerInstancesRequest} req
     * @param {function(string, DescribeContainerInstancesResponse):void} cb
     * @public
     */
    DescribeContainerInstances(req, cb) {
        const resp = new DescribeContainerInstancesResponse();
        this.request("DescribeContainerInstances", req, resp, cb);
    }
    /**
     * 此接口（CreateContainerInstance）用于创建容器实例
     * @param {CreateContainerInstanceRequest} req
     * @param {function(string, CreateContainerInstanceResponse):void} cb
     * @public
     */
    CreateContainerInstance(req, cb) {
        const resp = new CreateContainerInstanceResponse();
        this.request("CreateContainerInstance", req, resp, cb);
    }
    /**
     * 此接口（InquiryPriceCreateCis）用于查询容器实例价格
     * @param {InquiryPriceCreateCisRequest} req
     * @param {function(string, InquiryPriceCreateCisResponse):void} cb
     * @public
     */
    InquiryPriceCreateCis(req, cb) {
        const resp = new InquiryPriceCreateCisResponse();
        this.request("InquiryPriceCreateCis", req, resp, cb);
    }
    /**
     * 此接口（DescribeContainerInstance）用于获取容器实例详情
     * @param {DescribeContainerInstanceRequest} req
     * @param {function(string, DescribeContainerInstanceResponse):void} cb
     * @public
     */
    DescribeContainerInstance(req, cb) {
        const resp = new DescribeContainerInstanceResponse();
        this.request("DescribeContainerInstance", req, resp, cb);
    }
    /**
     * 此接口（DescribeContainerInstanceEvents）用于查询容器实例事件列表
     * @param {DescribeContainerInstanceEventsRequest} req
     * @param {function(string, DescribeContainerInstanceEventsResponse):void} cb
     * @public
     */
    DescribeContainerInstanceEvents(req, cb) {
        const resp = new DescribeContainerInstanceEventsResponse();
        this.request("DescribeContainerInstanceEvents", req, resp, cb);
    }
    /**
     * 此接口（DeleteContainerInstance）用于删除容器实例
     * @param {DeleteContainerInstanceRequest} req
     * @param {function(string, DeleteContainerInstanceResponse):void} cb
     * @public
     */
    DeleteContainerInstance(req, cb) {
        const resp = new DeleteContainerInstanceResponse();
        this.request("DeleteContainerInstance", req, resp, cb);
    }
    /**
     * 此接口（DescribeContainerLog）用于获取容器日志信息
     * @param {DescribeContainerLogRequest} req
     * @param {function(string, DescribeContainerLogResponse):void} cb
     * @public
     */
    DescribeContainerLog(req, cb) {
        const resp = new DescribeContainerLogResponse();
        this.request("DescribeContainerLog", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=cis_client.js.map