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
import { AbstractModel } from "../../common/abstract_model"

/**
 * 三元组查询返回的元记录
 * @class
 */
class TripleContent extends AbstractModel {

    Id: string | null
    
    Name: string | null
    
    Order: number | null
    
    Popular: number | null
    
    constructor(){
        super();

        /**
         * 实体id
         */
        this.Id = null;

        /**
         * 实体名称
         */
        this.Name = null;

        /**
         * 实体order
         */
        this.Order = null;

        /**
         * 实体流行度
         */
        this.Popular = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: string | null;
        Name: string | null;
        Order: number | null;
        Popular: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Popular = 'Popular' in params ? params.Popular : null;

    }
}

/**
 * DescribeEntity请求参数结构体
 * @class
 */
class DescribeEntityRequest extends AbstractModel {

    EntityName: string | null
    
    constructor(){
        super();

        /**
         * 实体名称
         */
        this.EntityName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        EntityName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

    }
}

/**
 * DescribeTriple请求参数结构体
 * @class
 */
class DescribeTripleRequest extends AbstractModel {

    TripleCondition: string | null
    
    constructor(){
        super();

        /**
         * 三元组查询条件
         */
        this.TripleCondition = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TripleCondition: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TripleCondition = 'TripleCondition' in params ? params.TripleCondition : null;

    }
}

/**
 * DescribeTriple返回参数结构体
 * @class
 */
class DescribeTripleResponse extends AbstractModel {

    Content: Array<TripleContent> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回三元组信息
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Content: Array<TripleContent> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TripleContent();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRelation返回参数结构体
 * @class
 */
class DescribeRelationResponse extends AbstractModel {

    Content: Array<EntityRelationContent> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回查询实体间的关系
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Content: Array<EntityRelationContent> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new EntityRelationContent();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返回的实体关系查询结果详细内容
 * @class
 */
class EntityRelationContent extends AbstractModel {

    Object: Array<EntityRelationObject> | null
    
    Subject: Array<EntityRelationSubject> | null
    
    Relation: string | null
    
    constructor(){
        super();

        /**
         * 实体关系查询返回关系的object
         */
        this.Object = null;

        /**
         * 实体关系查询返回关系的subject
         */
        this.Subject = null;

        /**
         * 实体关系查询返回的关系名称
         */
        this.Relation = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Object: Array<EntityRelationObject> | null;
        Subject: Array<EntityRelationSubject> | null;
        Relation: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Object) {
            this.Object = new Array();
            for (let z in params.Object) {
                let obj = new EntityRelationObject();
                obj.deserialize(params.Object[z]);
                this.Object.push(obj);
            }
        }

        if (params.Subject) {
            this.Subject = new Array();
            for (let z in params.Subject) {
                let obj = new EntityRelationSubject();
                obj.deserialize(params.Subject[z]);
                this.Subject.push(obj);
            }
        }
        this.Relation = 'Relation' in params ? params.Relation : null;

    }
}

/**
 * DescribeRelation请求参数结构体
 * @class
 */
class DescribeRelationRequest extends AbstractModel {

    LeftEntityName: string | null
    
    RightEntityName: string | null
    
    constructor(){
        super();

        /**
         * 输入第一个实体
         */
        this.LeftEntityName = null;

        /**
         * 输入第二个实体
         */
        this.RightEntityName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        LeftEntityName: string | null;
        RightEntityName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.LeftEntityName = 'LeftEntityName' in params ? params.LeftEntityName : null;
        this.RightEntityName = 'RightEntityName' in params ? params.RightEntityName : null;

    }
}

/**
 * 实体关系查询返回的Object类型
 * @class
 */
class EntityRelationObject extends AbstractModel {

    Id: Array<string> | null
    
    Name: Array<string> | null
    
    Popular: Array<number> | null
    
    constructor(){
        super();

        /**
         * object对应id
         */
        this.Id = null;

        /**
         * object对应name
         */
        this.Name = null;

        /**
         * object对应popular值
         */
        this.Popular = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: Array<string> | null;
        Name: Array<string> | null;
        Popular: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Popular = 'Popular' in params ? params.Popular : null;

    }
}

/**
 * DescribeEntity返回参数结构体
 * @class
 */
class DescribeEntityResponse extends AbstractModel {

    Content: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回查询实体相关信息
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Content: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实体关系查询返回Subject
 * @class
 */
class EntityRelationSubject extends AbstractModel {

    Id: Array<string> | null
    
    Name: Array<string> | null
    
    Popular: Array<number> | null
    
    constructor(){
        super();

        /**
         * Subject对应id
         */
        this.Id = null;

        /**
         * Subject对应name
         */
        this.Name = null;

        /**
         * Subject对应popular
         */
        this.Popular = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Id: Array<string> | null;
        Name: Array<string> | null;
        Popular: Array<number> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Popular = 'Popular' in params ? params.Popular : null;

    }
}

export const Models = {
    TripleContent: TripleContent,
    DescribeEntityRequest: DescribeEntityRequest,
    DescribeTripleRequest: DescribeTripleRequest,
    DescribeTripleResponse: DescribeTripleResponse,
    DescribeRelationResponse: DescribeRelationResponse,
    EntityRelationContent: EntityRelationContent,
    DescribeRelationRequest: DescribeRelationRequest,
    EntityRelationObject: EntityRelationObject,
    DescribeEntityResponse: DescribeEntityResponse,
    EntityRelationSubject: EntityRelationSubject,

}
