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
const Item = models.Item;
const EvaluationRequest = models.EvaluationRequest;
const EvaluationResponse = models.EvaluationResponse;
const ItemCoord = models.ItemCoord;


/**
 * hcm client
 * @class
 */
export class Client extends AbstractClient {

    constructor(credential: any, region: string, profile?: any) {
        super("hcm.tencentcloudapi.com", "2018-11-06", credential, region, profile);
    }
    
    /**
     * 速算题目批改接口，根据用户上传的图片或图片的URL识别图片中的数学算式，进而给出算式的正确性评估。
     * @param {EvaluationRequest} req
     * @param {function(string, EvaluationResponse):void} cb
     * @public
     */
    Evaluation(req: any, cb: any): void {
        const resp = new EvaluationResponse();
        this.request("Evaluation", req, resp, cb);
    }


}
