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
import { Models as models} from "./models"
import { AbstractClient } from '../../common/abstract_client'
const Container = models.Container;
const InquiryPriceCreateCisResponse = models.InquiryPriceCreateCisResponse;
const DescribeContainerLogRequest = models.DescribeContainerLogRequest;
const CreateContainerInstanceRequest = models.CreateContainerInstanceRequest;
const ContainerState = models.ContainerState;
const InquiryPriceCreateCisRequest = models.InquiryPriceCreateCisRequest;
const EnvironmentVar = models.EnvironmentVar;
const Price = models.Price;
const DescribeContainerInstancesResponse = models.DescribeContainerInstancesResponse;
const DeleteContainerInstanceResponse = models.DeleteContainerInstanceResponse;
const DescribeContainerInstancesRequest = models.DescribeContainerInstancesRequest;
const Filter = models.Filter;
const CreateContainerInstanceResponse = models.CreateContainerInstanceResponse;
const DescribeContainerInstanceRequest = models.DescribeContainerInstanceRequest;
const DescribeContainerInstanceResponse = models.DescribeContainerInstanceResponse;
const ContainerLog = models.ContainerLog;
const DescribeContainerInstanceEventsResponse = models.DescribeContainerInstanceEventsResponse;
const Event = models.Event;
const DescribeContainerInstanceEventsRequest = models.DescribeContainerInstanceEventsRequest;
const DescribeContainerLogResponse = models.DescribeContainerLogResponse;
const DeleteContainerInstanceRequest = models.DeleteContainerInstanceRequest;
const ContainerInstance = models.ContainerInstance;


/**
 * cis client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("cis.tencentcloudapi.com", "2018-04-08", credential, region, profile);
    }
    
    /**
     * 此接口（DescribeContainerInstances）查询容器实例列表
     * @param {DescribeContainerInstancesRequest} req
     * @param {function(string, DescribeContainerInstancesResponse):void} cb
     * @public
     */
    DescribeContainerInstances(req: any, cb: any): void {
        const resp = new DescribeContainerInstancesResponse();
        this.request("DescribeContainerInstances", req, resp, cb);
    }

    /**
     * 此接口（CreateContainerInstance）用于创建容器实例
     * @param {CreateContainerInstanceRequest} req
     * @param {function(string, CreateContainerInstanceResponse):void} cb
     * @public
     */
    CreateContainerInstance(req: any, cb: any): void {
        const resp = new CreateContainerInstanceResponse();
        this.request("CreateContainerInstance", req, resp, cb);
    }

    /**
     * 此接口（InquiryPriceCreateCis）用于查询容器实例价格
     * @param {InquiryPriceCreateCisRequest} req
     * @param {function(string, InquiryPriceCreateCisResponse):void} cb
     * @public
     */
    InquiryPriceCreateCis(req: any, cb: any): void {
        const resp = new InquiryPriceCreateCisResponse();
        this.request("InquiryPriceCreateCis", req, resp, cb);
    }

    /**
     * 此接口（DescribeContainerInstance）用于获取容器实例详情
     * @param {DescribeContainerInstanceRequest} req
     * @param {function(string, DescribeContainerInstanceResponse):void} cb
     * @public
     */
    DescribeContainerInstance(req: any, cb: any): void {
        const resp = new DescribeContainerInstanceResponse();
        this.request("DescribeContainerInstance", req, resp, cb);
    }

    /**
     * 此接口（DescribeContainerInstanceEvents）用于查询容器实例事件列表
     * @param {DescribeContainerInstanceEventsRequest} req
     * @param {function(string, DescribeContainerInstanceEventsResponse):void} cb
     * @public
     */
    DescribeContainerInstanceEvents(req: any, cb: any): void {
        const resp = new DescribeContainerInstanceEventsResponse();
        this.request("DescribeContainerInstanceEvents", req, resp, cb);
    }

    /**
     * 此接口（DeleteContainerInstance）用于删除容器实例
     * @param {DeleteContainerInstanceRequest} req
     * @param {function(string, DeleteContainerInstanceResponse):void} cb
     * @public
     */
    DeleteContainerInstance(req: any, cb: any): void {
        const resp = new DeleteContainerInstanceResponse();
        this.request("DeleteContainerInstance", req, resp, cb);
    }

    /**
     * 此接口（DescribeContainerLog）用于获取容器日志信息
     * @param {DescribeContainerLogRequest} req
     * @param {function(string, DescribeContainerLogResponse):void} cb
     * @public
     */
    DescribeContainerLog(req: any, cb: any): void {
        const resp = new DescribeContainerLogResponse();
        this.request("DescribeContainerLog", req, resp, cb);
    }


}
