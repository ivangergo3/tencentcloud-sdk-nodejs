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
const DeleteCertRequest = models.DeleteCertRequest;
const UploadCertResponse = models.UploadCertResponse;
const DeleteCertResponse = models.DeleteCertResponse;
const DescribeCertListResponse = models.DescribeCertListResponse;
const UploadCertRequest = models.UploadCertRequest;
const SSLCertificate = models.SSLCertificate;
const DescribeCertListRequest = models.DescribeCertListRequest;
const SSLProjectInfo = models.SSLProjectInfo;


/**
 * wss client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("wss.tencentcloudapi.com", "2018-04-26", credential, region, profile);
    }
    
    /**
     * 本接口（DeleteCert）用于删除证书。
     * @param {DeleteCertRequest} req
     * @param {function(string, DeleteCertResponse):void} cb
     * @public
     */
    DeleteCert(req: any, cb: any): void {
        const resp = new DeleteCertResponse();
        this.request("DeleteCert", req, resp, cb);
    }

    /**
     * 本接口(DescribeCertList)用于获取证书列表。
     * @param {DescribeCertListRequest} req
     * @param {function(string, DescribeCertListResponse):void} cb
     * @public
     */
    DescribeCertList(req: any, cb: any): void {
        const resp = new DescribeCertListResponse();
        this.request("DescribeCertList", req, resp, cb);
    }

    /**
     * 本接口（UploadCert）用于上传证书。
     * @param {UploadCertRequest} req
     * @param {function(string, UploadCertResponse):void} cb
     * @public
     */
    UploadCert(req: any, cb: any): void {
        const resp = new UploadCertResponse();
        this.request("UploadCert", req, resp, cb);
    }


}
