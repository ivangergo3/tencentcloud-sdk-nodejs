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
 * DescribeProject返回参数结构体
 * @class
 */
class DescribeProjectResponse extends AbstractModel {

    ProjectId: string | null
    
    ProjectName: string | null
    
    ProjectBudget: number | null
    
    ProjectOrg: string | null
    
    ProjectIntroduction: string | null
    
    SubProjectList: Array<SubProjectInfo> | null
    
    ProjectStatus: string | null
    
    ProjectOrgId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 项目id
         */
        this.ProjectId = null;

        /**
         * 项目名称
         */
        this.ProjectName = null;

        /**
         * 项目预算
         */
        this.ProjectBudget = null;

        /**
         * 项目机构
         */
        this.ProjectOrg = null;

        /**
         * 项目简介
         */
        this.ProjectIntroduction = null;

        /**
         * 子项目列表
         */
        this.SubProjectList = null;

        /**
         * 项目状态
         */
        this.ProjectStatus = null;

        /**
         * 项目机构Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectOrgId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
        ProjectName: string | null;
        ProjectBudget: number | null;
        ProjectOrg: string | null;
        ProjectIntroduction: string | null;
        SubProjectList: Array<SubProjectInfo> | null;
        ProjectStatus: string | null;
        ProjectOrgId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectBudget = 'ProjectBudget' in params ? params.ProjectBudget : null;
        this.ProjectOrg = 'ProjectOrg' in params ? params.ProjectOrg : null;
        this.ProjectIntroduction = 'ProjectIntroduction' in params ? params.ProjectIntroduction : null;

        if (params.SubProjectList) {
            this.SubProjectList = new Array();
            for (let z in params.SubProjectList) {
                let obj = new SubProjectInfo();
                obj.deserialize(params.SubProjectList[z]);
                this.SubProjectList.push(obj);
            }
        }
        this.ProjectStatus = 'ProjectStatus' in params ? params.ProjectStatus : null;
        this.ProjectOrgId = 'ProjectOrgId' in params ? params.ProjectOrgId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckStaffChUser请求参数结构体
 * @class
 */
class CheckStaffChUserRequest extends AbstractModel {

    UserId: Array<string> | null
    
    OperateType: string | null
    
    constructor(){
        super();

        /**
         * 员工ID
         */
        this.UserId = null;

        /**
         * 渠道状态：checkpass审核通过, checkreject审核拒绝, enableoperate启用, stopoperate停用
         */
        this.OperateType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UserId: Array<string> | null;
        OperateType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.OperateType = 'OperateType' in params ? params.OperateType : null;

    }
}

/**
 * DescribeResourceTemplateHeaders返回参数结构体
 * @class
 */
class DescribeResourceTemplateHeadersResponse extends AbstractModel {

    TotalCount: number | null
    
    TmplList: Array<ResourceTemplateHeader> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 记录条数
         */
        this.TotalCount = null;

        /**
         * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TmplList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        TmplList: Array<ResourceTemplateHeader> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TmplList) {
            this.TmplList = new Array();
            for (let z in params.TmplList) {
                let obj = new ResourceTemplateHeader();
                obj.deserialize(params.TmplList[z]);
                this.TmplList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProject请求参数结构体
 * @class
 */
class DeleteProjectRequest extends AbstractModel {

    ProjectId: string | null
    
    constructor(){
        super();

        /**
         * 项目ID
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ReplenishProjectStock返回参数结构体
 * @class
 */
class ReplenishProjectStockResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendWxTouchTask返回参数结构体
 * @class
 */
class SendWxTouchTaskResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomers请求参数结构体
 * @class
 */
class DescribeCustomersRequest extends AbstractModel {

    QueryType: string | null
    
    GroupId: string | null
    
    MarkFlag: number | null
    
    TagIds: string | null
    
    RelChannelFlag: string | null
    
    NeedPhoneFlag: number | null
    
    Province: string | null
    
    City: string | null
    
    Sex: string | null
    
    KeyWord: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    SubProjectId: string | null
    
    constructor(){
        super();

        /**
         * 查询类型，0.个人，1负责部门，2.指定部门
         */
        this.QueryType = null;

        /**
         * 分组ID
         */
        this.GroupId = null;

        /**
         * 是否星级标记 1是 0否
         */
        this.MarkFlag = null;

        /**
         * 客户标签，多个标签用逗号隔开
         */
        this.TagIds = null;

        /**
         * 员工标识筛选，0：非员工，1：员工
         */
        this.RelChannelFlag = null;

        /**
         * 必须存在手机 1是 0否
         */
        this.NeedPhoneFlag = null;

        /**
         * 省份
         */
        this.Province = null;

        /**
         * 城市
         */
        this.City = null;

        /**
         * 性别 1男 2女
         */
        this.Sex = null;

        /**
         * 城市
         */
        this.KeyWord = null;

        /**
         * 查询开始位置
         */
        this.Offset = null;

        /**
         * 每页记录条数
         */
        this.Limit = null;

        /**
         * 子项目ID
         */
        this.SubProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        QueryType: string | null;
        GroupId: string | null;
        MarkFlag: number | null;
        TagIds: string | null;
        RelChannelFlag: string | null;
        NeedPhoneFlag: number | null;
        Province: string | null;
        City: string | null;
        Sex: string | null;
        KeyWord: string | null;
        Offset: number | null;
        Limit: number | null;
        SubProjectId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.MarkFlag = 'MarkFlag' in params ? params.MarkFlag : null;
        this.TagIds = 'TagIds' in params ? params.TagIds : null;
        this.RelChannelFlag = 'RelChannelFlag' in params ? params.RelChannelFlag : null;
        this.NeedPhoneFlag = 'NeedPhoneFlag' in params ? params.NeedPhoneFlag : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubProjectId = 'SubProjectId' in params ? params.SubProjectId : null;

    }
}

/**
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends AbstractModel {

    PageNo: number | null
    
    PageSize: number | null
    
    SearchWord: string | null
    
    Filters: Filters | null
    
    ProjectStatus: number | null
    
    constructor(){
        super();

        /**
         * 页码
         */
        this.PageNo = null;

        /**
         * 页面大小
         */
        this.PageSize = null;

        /**
         * 过滤规则
         */
        this.SearchWord = null;

        /**
         * 部门范围过滤
         */
        this.Filters = null;

        /**
         * 项目状态, 0:编辑中 1:运营中 2:已下线 3:已删除 4:审批中
         */
        this.ProjectStatus = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PageNo: number | null;
        PageSize: number | null;
        SearchWord: string | null;
        Filters: Filters | null;
        ProjectStatus: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

        if (params.Filters) {
            let obj = new Filters();
            obj.deserialize(params.Filters)
            this.Filters = obj;
        }
        this.ProjectStatus = 'ProjectStatus' in params ? params.ProjectStatus : null;

    }
}

/**
 * ModifyProject请求参数结构体
 * @class
 */
class ModifyProjectRequest extends AbstractModel {

    ProjectId: string | null
    
    ProjectName: string | null
    
    ProjectBudget: string | null
    
    ProjectOrg: string | null
    
    ProjectIntroduction: string | null
    
    ProjectOrgId: string | null
    
    constructor(){
        super();

        /**
         * 项目ID
         */
        this.ProjectId = null;

        /**
         * 项目名称
         */
        this.ProjectName = null;

        /**
         * 项目预算
         */
        this.ProjectBudget = null;

        /**
         * 项目机构
         */
        this.ProjectOrg = null;

        /**
         * 项目简介
         */
        this.ProjectIntroduction = null;

        /**
         * 项目机构Id
         */
        this.ProjectOrgId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
        ProjectName: string | null;
        ProjectBudget: string | null;
        ProjectOrg: string | null;
        ProjectIntroduction: string | null;
        ProjectOrgId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectBudget = 'ProjectBudget' in params ? params.ProjectBudget : null;
        this.ProjectOrg = 'ProjectOrg' in params ? params.ProjectOrg : null;
        this.ProjectIntroduction = 'ProjectIntroduction' in params ? params.ProjectIntroduction : null;
        this.ProjectOrgId = 'ProjectOrgId' in params ? params.ProjectOrgId : null;

    }
}

/**
 * OffLineProject请求参数结构体
 * @class
 */
class OffLineProjectRequest extends AbstractModel {

    ProjectId: string | null
    
    constructor(){
        super();

        /**
         * 项目ID
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeSubProject请求参数结构体
 * @class
 */
class DescribeSubProjectRequest extends AbstractModel {

    SubProjectId: string | null
    
    constructor(){
        super();

        /**
         * 子项目id
         */
        this.SubProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubProjectId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubProjectId = 'SubProjectId' in params ? params.SubProjectId : null;

    }
}

/**
 * ExpireFlow请求参数结构体
 * @class
 */
class ExpireFlowRequest extends AbstractModel {

    FlowId: string | null
    
    constructor(){
        super();

        /**
         * 工单ID
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FlowId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CopyActivityChannel请求参数结构体
 * @class
 */
class CopyActivityChannelRequest extends AbstractModel {

    ActivityId: string | null
    
    ChannelFrom: string | null
    
    ChannelTo: Array<string> | null
    
    constructor(){
        super();

        /**
         * 活动ID
         */
        this.ActivityId = null;

        /**
         * 来源渠道ID
         */
        this.ChannelFrom = null;

        /**
         * 目的渠道id
         */
        this.ChannelTo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ActivityId: string | null;
        ChannelFrom: string | null;
        ChannelTo: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.ChannelFrom = 'ChannelFrom' in params ? params.ChannelFrom : null;
        this.ChannelTo = 'ChannelTo' in params ? params.ChannelTo : null;

    }
}

/**
 * CopyActivityChannel返回参数结构体
 * @class
 */
class CopyActivityChannelResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjects返回参数结构体
 * @class
 */
class DescribeProjectsResponse extends AbstractModel {

    ProjectList: Array<ProjectInfo> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 项目列表
         */
        this.ProjectList = null;

        /**
         * 项目数
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectList: Array<ProjectInfo> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ProjectList) {
            this.ProjectList = new Array();
            for (let z in params.ProjectList) {
                let obj = new ProjectInfo();
                obj.deserialize(params.ProjectList[z]);
                this.ProjectList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReplenishProjectStock请求参数结构体
 * @class
 */
class ReplenishProjectStockRequest extends AbstractModel {

    SubProjectId: string | null
    
    PrizeId: string | null
    
    PrizeNum: number | null
    
    PoolIndex: number | null
    
    PoolName: string | null
    
    constructor(){
        super();

        /**
         * 项目id
         */
        this.SubProjectId = null;

        /**
         * 奖品id
         */
        this.PrizeId = null;

        /**
         * 奖品数量
         */
        this.PrizeNum = null;

        /**
         * 奖池索引
         */
        this.PoolIndex = null;

        /**
         * 奖池名称
         */
        this.PoolName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubProjectId: string | null;
        PrizeId: string | null;
        PrizeNum: number | null;
        PoolIndex: number | null;
        PoolName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubProjectId = 'SubProjectId' in params ? params.SubProjectId : null;
        this.PrizeId = 'PrizeId' in params ? params.PrizeId : null;
        this.PrizeNum = 'PrizeNum' in params ? params.PrizeNum : null;
        this.PoolIndex = 'PoolIndex' in params ? params.PoolIndex : null;
        this.PoolName = 'PoolName' in params ? params.PoolName : null;

    }
}

/**
 * 项目奖品库存
 * @class
 */
class ProjectStock extends AbstractModel {

    PrizeId: string | null
    
    PrizeBat: number | null
    
    PrizeName: string | null
    
    UsedStock: number | null
    
    RemainStock: number | null
    
    PoolIdx: number | null
    
    PoolName: string | null
    
    constructor(){
        super();

        /**
         * 奖品id
         */
        this.PrizeId = null;

        /**
         * 奖品批次
         */
        this.PrizeBat = null;

        /**
         * 奖品名称
         */
        this.PrizeName = null;

        /**
         * 已分配奖品数量
         */
        this.UsedStock = null;

        /**
         * 该奖品剩余库存数量
         */
        this.RemainStock = null;

        /**
         * 奖品所在奖池index
         */
        this.PoolIdx = null;

        /**
         * 奖品所在奖池名称
         */
        this.PoolName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PrizeId: string | null;
        PrizeBat: number | null;
        PrizeName: string | null;
        UsedStock: number | null;
        RemainStock: number | null;
        PoolIdx: number | null;
        PoolName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PrizeId = 'PrizeId' in params ? params.PrizeId : null;
        this.PrizeBat = 'PrizeBat' in params ? params.PrizeBat : null;
        this.PrizeName = 'PrizeName' in params ? params.PrizeName : null;
        this.UsedStock = 'UsedStock' in params ? params.UsedStock : null;
        this.RemainStock = 'RemainStock' in params ? params.RemainStock : null;
        this.PoolIdx = 'PoolIdx' in params ? params.PoolIdx : null;
        this.PoolName = 'PoolName' in params ? params.PoolName : null;

    }
}

/**
 * DescribeProjectStock返回参数结构体
 * @class
 */
class DescribeProjectStockResponse extends AbstractModel {

    ProjectStocks: Array<ProjectStock> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 项目库存列表
         */
        this.ProjectStocks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectStocks: Array<ProjectStock> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ProjectStocks) {
            this.ProjectStocks = new Array();
            for (let z in params.ProjectStocks) {
                let obj = new ProjectStock();
                obj.deserialize(params.ProjectStocks[z]);
                this.ProjectStocks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckStaffChUser返回参数结构体
 * @class
 */
class CheckStaffChUserResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomer请求参数结构体
 * @class
 */
class DescribeCustomerRequest extends AbstractModel {

    UserId: string | null
    
    constructor(){
        super();

        /**
         * 用户ID
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        UserId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * 内容页结构
 * @class
 */
class ProductInfo extends AbstractModel {

    TemplateId: string | null
    
    ProductTitle: string | null
    
    ProductDesc: string | null
    
    ProductCover: string | null
    
    ProductId: string | null
    
    ProductUrl: string | null
    
    ProductName: string | null
    
    constructor(){
        super();

        /**
         * 模板id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TemplateId = null;

        /**
         * 模板主题
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductTitle = null;

        /**
         * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductDesc = null;

        /**
         * 模板封面地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductCover = null;

        /**
         * 内容作品id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductId = null;

        /**
         * 作品预览链接
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductUrl = null;

        /**
         * 作品名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TemplateId: string | null;
        ProductTitle: string | null;
        ProductDesc: string | null;
        ProductCover: string | null;
        ProductId: string | null;
        ProductUrl: string | null;
        ProductName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.ProductTitle = 'ProductTitle' in params ? params.ProductTitle : null;
        this.ProductDesc = 'ProductDesc' in params ? params.ProductDesc : null;
        this.ProductCover = 'ProductCover' in params ? params.ProductCover : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductUrl = 'ProductUrl' in params ? params.ProductUrl : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

    }
}

/**
 * 子项目信息
 * @class
 */
class SubProjectInfo extends AbstractModel {

    SubProjectId: string | null
    
    SubProjectName: string | null
    
    SubProjectStatus: string | null
    
    constructor(){
        super();

        /**
         * 子项目id
         */
        this.SubProjectId = null;

        /**
         * 子项目名称
         */
        this.SubProjectName = null;

        /**
         * 子项目状态
         */
        this.SubProjectStatus = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubProjectId: string | null;
        SubProjectName: string | null;
        SubProjectStatus: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubProjectId = 'SubProjectId' in params ? params.SubProjectId : null;
        this.SubProjectName = 'SubProjectName' in params ? params.SubProjectName : null;
        this.SubProjectStatus = 'SubProjectStatus' in params ? params.SubProjectStatus : null;

    }
}

/**
 * 素材模板消息标题的样例列表
 * @class
 */
class ResourceTemplateHeader extends AbstractModel {

    Content: string | null
    
    Example: string | null
    
    KeyArray: string | null
    
    TemplateId: string | null
    
    Title: string | null
    
    constructor(){
        super();

        /**
         * 模板预览区内容
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Content = null;

        /**
         * 模板预览示例
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Example = null;

        /**
         * 模板预览区域键数组
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.KeyArray = null;

        /**
         * 模板id
         */
        this.TemplateId = null;

        /**
         * 模板标题
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Content: string | null;
        Example: string | null;
        KeyArray: string | null;
        TemplateId: string | null;
        Title: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.Example = 'Example' in params ? params.Example : null;
        this.KeyArray = 'KeyArray' in params ? params.KeyArray : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * CreateSubProject返回参数结构体
 * @class
 */
class CreateSubProjectResponse extends AbstractModel {

    SubProjectId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 子项目id
         */
        this.SubProjectId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubProjectId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubProjectId = 'SubProjectId' in params ? params.SubProjectId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 可见范围过滤参数
 * @class
 */
class Filters extends AbstractModel {

    Type: number | null
    
    DeptIds: Array<string> | null
    
    UserIds: Array<string> | null
    
    constructor(){
        super();

        /**
         * 过滤类型, 0: 默认(可见部门+自创) 1: 自创 2: 指定部门(部门在可见范围内)
         */
        this.Type = null;

        /**
         * 指定部门Id, 类型2使用
         */
        this.DeptIds = null;

        /**
         * 用户Id列表
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Type: number | null;
        DeptIds: Array<string> | null;
        UserIds: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.DeptIds = 'DeptIds' in params ? params.DeptIds : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * 项目基础信息
 * @class
 */
class ProjectInfo extends AbstractModel {

    ProjectId: string | null
    
    ProjectName: string | null
    
    ProjectOrg: string | null
    
    ProjectBudget: number | null
    
    ProjectStatus: string | null
    
    CreateTime: string | null
    
    ProjectIntroduction: string | null
    
    ProjectOrgId: string | null
    
    constructor(){
        super();

        /**
         * 项目ID
         */
        this.ProjectId = null;

        /**
         * 项目名称
         */
        this.ProjectName = null;

        /**
         * 项目所属机构
         */
        this.ProjectOrg = null;

        /**
         * 项目预算
         */
        this.ProjectBudget = null;

        /**
         * 项目状态
         */
        this.ProjectStatus = null;

        /**
         * 项目创建时间
         */
        this.CreateTime = null;

        /**
         * 项目简介
         */
        this.ProjectIntroduction = null;

        /**
         * 项目所属机构Id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectOrgId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
        ProjectName: string | null;
        ProjectOrg: string | null;
        ProjectBudget: number | null;
        ProjectStatus: string | null;
        CreateTime: string | null;
        ProjectIntroduction: string | null;
        ProjectOrgId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectOrg = 'ProjectOrg' in params ? params.ProjectOrg : null;
        this.ProjectBudget = 'ProjectBudget' in params ? params.ProjectBudget : null;
        this.ProjectStatus = 'ProjectStatus' in params ? params.ProjectStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectIntroduction = 'ProjectIntroduction' in params ? params.ProjectIntroduction : null;
        this.ProjectOrgId = 'ProjectOrgId' in params ? params.ProjectOrgId : null;

    }
}

/**
 * DescribeCustomer返回参数结构体
 * @class
 */
class DescribeCustomerResponse extends AbstractModel {

    AddressList: Array<string> | null
    
    UserId: string | null
    
    Avatar: string | null
    
    Birthday: string | null
    
    City: string | null
    
    CreateTime: string | null
    
    Device: string | null
    
    Industrys: Array<string> | null
    
    LastActiveTime: string | null
    
    MarkFlag: string | null
    
    Model: string | null
    
    OpenId: string | null
    
    PayFeature: string | null
    
    Phone: string | null
    
    PhoneList: string | null
    
    Province: string | null
    
    RealName: string | null
    
    RelChannelFlag: string | null
    
    Remark: string | null
    
    Sex: string | null
    
    SourceAudienceVo: string | null
    
    SubWechats: Array<string> | null
    
    UnionId: string | null
    
    UpdateTime: string | null
    
    UserTypes: Array<string> | null
    
    WxCity: string | null
    
    WxCountry: string | null
    
    WxNickname: string | null
    
    WxProvince: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 地址列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AddressList = null;

        /**
         * 用户id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UserId = null;

        /**
         * 头像
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Avatar = null;

        /**
         * 生日
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Birthday = null;

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.City = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreateTime = null;

        /**
         * 设备
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Device = null;

        /**
         * 行业
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Industrys = null;

        /**
         * 上次登录时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LastActiveTime = null;

        /**
         * 是否星标 1是 0否
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MarkFlag = null;

        /**
         * 手机型号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Model = null;

        /**
         * 微信openid
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OpenId = null;

        /**
         * 消费特点
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PayFeature = null;

        /**
         * 手机号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Phone = null;

        /**
         * 手机号码列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PhoneList = null;

        /**
         * 最近记录省份
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Province = null;

        /**
         * 姓名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RealName = null;

        /**
         * 员工标识 0：非员工 1：员工
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RelChannelFlag = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Remark = null;

        /**
         * 性别 1男 2女
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Sex = null;

        /**
         * 最初来源
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SourceAudienceVo = null;

        /**
         * 关注公众号列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubWechats = null;

        /**
         * 微信unionid
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UnionId = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UpdateTime = null;

        /**
         * 用户类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UserTypes = null;

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxCity = null;

        /**
         * 国家
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxCountry = null;

        /**
         * 昵称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxNickname = null;

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxProvince = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AddressList: Array<string> | null;
        UserId: string | null;
        Avatar: string | null;
        Birthday: string | null;
        City: string | null;
        CreateTime: string | null;
        Device: string | null;
        Industrys: Array<string> | null;
        LastActiveTime: string | null;
        MarkFlag: string | null;
        Model: string | null;
        OpenId: string | null;
        PayFeature: string | null;
        Phone: string | null;
        PhoneList: string | null;
        Province: string | null;
        RealName: string | null;
        RelChannelFlag: string | null;
        Remark: string | null;
        Sex: string | null;
        SourceAudienceVo: string | null;
        SubWechats: Array<string> | null;
        UnionId: string | null;
        UpdateTime: string | null;
        UserTypes: Array<string> | null;
        WxCity: string | null;
        WxCountry: string | null;
        WxNickname: string | null;
        WxProvince: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AddressList = 'AddressList' in params ? params.AddressList : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.City = 'City' in params ? params.City : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Device = 'Device' in params ? params.Device : null;
        this.Industrys = 'Industrys' in params ? params.Industrys : null;
        this.LastActiveTime = 'LastActiveTime' in params ? params.LastActiveTime : null;
        this.MarkFlag = 'MarkFlag' in params ? params.MarkFlag : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.PayFeature = 'PayFeature' in params ? params.PayFeature : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.PhoneList = 'PhoneList' in params ? params.PhoneList : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.RealName = 'RealName' in params ? params.RealName : null;
        this.RelChannelFlag = 'RelChannelFlag' in params ? params.RelChannelFlag : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.SourceAudienceVo = 'SourceAudienceVo' in params ? params.SourceAudienceVo : null;
        this.SubWechats = 'SubWechats' in params ? params.SubWechats : null;
        this.UnionId = 'UnionId' in params ? params.UnionId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.UserTypes = 'UserTypes' in params ? params.UserTypes : null;
        this.WxCity = 'WxCity' in params ? params.WxCity : null;
        this.WxCountry = 'WxCountry' in params ? params.WxCountry : null;
        this.WxNickname = 'WxNickname' in params ? params.WxNickname : null;
        this.WxProvince = 'WxProvince' in params ? params.WxProvince : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomers返回参数结构体
 * @class
 */
class DescribeCustomersResponse extends AbstractModel {

    TotalCount: number | null
    
    UserList: Array<CustomerInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 总记录条数
         */
        this.TotalCount = null;

        /**
         * 数据列表
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.UserList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TotalCount: number | null;
        UserList: Array<CustomerInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new CustomerInfo();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubProject请求参数结构体
 * @class
 */
class CreateSubProjectRequest extends AbstractModel {

    ProjectId: string | null
    
    SubProjectName: string | null
    
    constructor(){
        super();

        /**
         * 所属项目id
         */
        this.ProjectId = null;

        /**
         * 子项目名称
         */
        this.SubProjectName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
        SubProjectName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubProjectName = 'SubProjectName' in params ? params.SubProjectName : null;

    }
}

/**
 * ModifyProject返回参数结构体
 * @class
 */
class ModifyProjectResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProject返回参数结构体
 * @class
 */
class CreateProjectResponse extends AbstractModel {

    ProjectId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 项目ID
         */
        this.ProjectId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectStock请求参数结构体
 * @class
 */
class DescribeProjectStockRequest extends AbstractModel {

    SubProjectId: string | null
    
    constructor(){
        super();

        /**
         * 子项目id
         */
        this.SubProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SubProjectId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SubProjectId = 'SubProjectId' in params ? params.SubProjectId : null;

    }
}

/**
 * DeleteProject返回参数结构体
 * @class
 */
class DeleteProjectResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendWxTouchTask请求参数结构体
 * @class
 */
class SendWxTouchTaskRequest extends AbstractModel {

    GroupId: string | null
    
    DistinctFlag: boolean | null
    
    IsSendNow: boolean | null
    
    SendDate: number | null
    
    TaskName: string | null
    
    WxTouchType: string | null
    
    Title: string | null
    
    Content: string | null
    
    NewsId: string | null
    
    SmallProgramId: string | null
    
    TemplateId: string | null
    
    WxAppId: string | null
    
    constructor(){
        super();

        /**
         * 客户分组ID
         */
        this.GroupId = null;

        /**
         * 去除今日已发送的客户
         */
        this.DistinctFlag = null;

        /**
         * 是否立马发送
         */
        this.IsSendNow = null;

        /**
         * 发送时间，一般为0
         */
        this.SendDate = null;

        /**
         * 任务名称
         */
        this.TaskName = null;

        /**
         * 微信触达类型，text, news, smallapp, tmplmsg
         */
        this.WxTouchType = null;

        /**
         * 标题
         */
        this.Title = null;

        /**
         * 文本内容
         */
        this.Content = null;

        /**
         * 图文素材ID
         */
        this.NewsId = null;

        /**
         * 小程序卡片ID
         */
        this.SmallProgramId = null;

        /**
         * 模板消息ID
         */
        this.TemplateId = null;

        /**
         * 微信公众号appId
         */
        this.WxAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GroupId: string | null;
        DistinctFlag: boolean | null;
        IsSendNow: boolean | null;
        SendDate: number | null;
        TaskName: string | null;
        WxTouchType: string | null;
        Title: string | null;
        Content: string | null;
        NewsId: string | null;
        SmallProgramId: string | null;
        TemplateId: string | null;
        WxAppId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DistinctFlag = 'DistinctFlag' in params ? params.DistinctFlag : null;
        this.IsSendNow = 'IsSendNow' in params ? params.IsSendNow : null;
        this.SendDate = 'SendDate' in params ? params.SendDate : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.WxTouchType = 'WxTouchType' in params ? params.WxTouchType : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.NewsId = 'NewsId' in params ? params.NewsId : null;
        this.SmallProgramId = 'SmallProgramId' in params ? params.SmallProgramId : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;

    }
}

/**
 * DescribeProject请求参数结构体
 * @class
 */
class DescribeProjectRequest extends AbstractModel {

    ProjectId: string | null
    
    constructor(){
        super();

        /**
         * 项目ID
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * OffLineProject返回参数结构体
 * @class
 */
class OffLineProjectResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 客户档案
 * @class
 */
class CustomerInfo extends AbstractModel {

    Activity: number | null
    
    AudienceUserId: string | null
    
    Avatar: string | null
    
    City: string | null
    
    LastActiveTime: string | null
    
    MarkFlag: string | null
    
    MonthActive: number | null
    
    MonthRecommend: number | null
    
    Phone: string | null
    
    Province: string | null
    
    RealName: string | null
    
    RelChannelFlag: number | null
    
    Sex: number | null
    
    Spread: number | null
    
    WeekActive: number | null
    
    WeekRecommend: number | null
    
    WxCity: string | null
    
    WxCountry: string | null
    
    WxNickname: string | null
    
    WxProvince: string | null
    
    constructor(){
        super();

        /**
         * 总活跃度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Activity = null;

        /**
         * 客户ID
         */
        this.AudienceUserId = null;

        /**
         * 头像
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Avatar = null;

        /**
         * 最近记录城市
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.City = null;

        /**
         * 最活跃时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LastActiveTime = null;

        /**
         * 是否星标客户
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MarkFlag = null;

        /**
         * 30天活跃度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MonthActive = null;

        /**
         * 30天推荐度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MonthRecommend = null;

        /**
         * 手机号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Phone = null;

        /**
         * 最近记录省份
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Province = null;

        /**
         * 姓名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RealName = null;

        /**
         * 员工标识 0 未关联 1 已关联
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.RelChannelFlag = null;

        /**
         * 性别 1男 2女
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Sex = null;

        /**
         * 传播力（好友数）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Spread = null;

        /**
         * 7天活跃度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WeekActive = null;

        /**
         * 7天推荐度
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WeekRecommend = null;

        /**
         * 微信城市
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxCity = null;

        /**
         * 微信国家或地区
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxCountry = null;

        /**
         * 微信呢称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxNickname = null;

        /**
         * 微信省份
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.WxProvince = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Activity: number | null;
        AudienceUserId: string | null;
        Avatar: string | null;
        City: string | null;
        LastActiveTime: string | null;
        MarkFlag: string | null;
        MonthActive: number | null;
        MonthRecommend: number | null;
        Phone: string | null;
        Province: string | null;
        RealName: string | null;
        RelChannelFlag: number | null;
        Sex: number | null;
        Spread: number | null;
        WeekActive: number | null;
        WeekRecommend: number | null;
        WxCity: string | null;
        WxCountry: string | null;
        WxNickname: string | null;
        WxProvince: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Activity = 'Activity' in params ? params.Activity : null;
        this.AudienceUserId = 'AudienceUserId' in params ? params.AudienceUserId : null;
        this.Avatar = 'Avatar' in params ? params.Avatar : null;
        this.City = 'City' in params ? params.City : null;
        this.LastActiveTime = 'LastActiveTime' in params ? params.LastActiveTime : null;
        this.MarkFlag = 'MarkFlag' in params ? params.MarkFlag : null;
        this.MonthActive = 'MonthActive' in params ? params.MonthActive : null;
        this.MonthRecommend = 'MonthRecommend' in params ? params.MonthRecommend : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.RealName = 'RealName' in params ? params.RealName : null;
        this.RelChannelFlag = 'RelChannelFlag' in params ? params.RelChannelFlag : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Spread = 'Spread' in params ? params.Spread : null;
        this.WeekActive = 'WeekActive' in params ? params.WeekActive : null;
        this.WeekRecommend = 'WeekRecommend' in params ? params.WeekRecommend : null;
        this.WxCity = 'WxCity' in params ? params.WxCity : null;
        this.WxCountry = 'WxCountry' in params ? params.WxCountry : null;
        this.WxNickname = 'WxNickname' in params ? params.WxNickname : null;
        this.WxProvince = 'WxProvince' in params ? params.WxProvince : null;

    }
}

/**
 * 活动详情
 * @class
 */
class ActivityInfo extends AbstractModel {

    TemplateId: string | null
    
    ActivityTitle: string | null
    
    ActivityDesc: string | null
    
    ActivityCover: string | null
    
    ActivityType: string | null
    
    ActivityId: string | null
    
    PersonalConfig: string | null
    
    constructor(){
        super();

        /**
         * 活动使用模板id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TemplateId = null;

        /**
         * 活动标题
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityTitle = null;

        /**
         * 活动描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityDesc = null;

        /**
         * 活动封面地址
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityCover = null;

        /**
         * 活动类型
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityType = null;

        /**
         * 活动id
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityId = null;

        /**
         * 活动模板自定义配置
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PersonalConfig = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TemplateId: string | null;
        ActivityTitle: string | null;
        ActivityDesc: string | null;
        ActivityCover: string | null;
        ActivityType: string | null;
        ActivityId: string | null;
        PersonalConfig: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.ActivityTitle = 'ActivityTitle' in params ? params.ActivityTitle : null;
        this.ActivityDesc = 'ActivityDesc' in params ? params.ActivityDesc : null;
        this.ActivityCover = 'ActivityCover' in params ? params.ActivityCover : null;
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.PersonalConfig = 'PersonalConfig' in params ? params.PersonalConfig : null;

    }
}

/**
 * DescribeResourceTemplateHeaders请求参数结构体
 * @class
 */
class DescribeResourceTemplateHeadersRequest extends AbstractModel {

    WxAppId: string | null
    
    constructor(){
        super();

        /**
         * 微信公众号appId
         */
        this.WxAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        WxAppId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;

    }
}

/**
 * ExpireFlow返回参数结构体
 * @class
 */
class ExpireFlowResponse extends AbstractModel {

    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubProject返回参数结构体
 * @class
 */
class DescribeSubProjectResponse extends AbstractModel {

    ProductInfo: ProductInfo | null
    
    ActivityInfo: ActivityInfo | null
    
    ShareTitle: string | null
    
    ShareDesc: string | null
    
    ShareImg: string | null
    
    HasStrategy: number | null
    
    SubProjectStatus: string | null
    
    ShareAppId: string | null
    
    ShareWsId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 作品信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProductInfo = null;

        /**
         * 活动信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityInfo = null;

        /**
         * 分享标题
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ShareTitle = null;

        /**
         * 分享描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ShareDesc = null;

        /**
         * 分享图标
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ShareImg = null;

        /**
         * 是否已创建策略
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.HasStrategy = null;

        /**
         * 子项目状态
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SubProjectStatus = null;

        /**
         * 分享公众号的appId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ShareAppId = null;

        /**
         * 分享公众号的wsId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ShareWsId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProductInfo: ProductInfo | null;
        ActivityInfo: ActivityInfo | null;
        ShareTitle: string | null;
        ShareDesc: string | null;
        ShareImg: string | null;
        HasStrategy: number | null;
        SubProjectStatus: string | null;
        ShareAppId: string | null;
        ShareWsId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.ProductInfo) {
            let obj = new ProductInfo();
            obj.deserialize(params.ProductInfo)
            this.ProductInfo = obj;
        }

        if (params.ActivityInfo) {
            let obj = new ActivityInfo();
            obj.deserialize(params.ActivityInfo)
            this.ActivityInfo = obj;
        }
        this.ShareTitle = 'ShareTitle' in params ? params.ShareTitle : null;
        this.ShareDesc = 'ShareDesc' in params ? params.ShareDesc : null;
        this.ShareImg = 'ShareImg' in params ? params.ShareImg : null;
        this.HasStrategy = 'HasStrategy' in params ? params.HasStrategy : null;
        this.SubProjectStatus = 'SubProjectStatus' in params ? params.SubProjectStatus : null;
        this.ShareAppId = 'ShareAppId' in params ? params.ShareAppId : null;
        this.ShareWsId = 'ShareWsId' in params ? params.ShareWsId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProject请求参数结构体
 * @class
 */
class CreateProjectRequest extends AbstractModel {

    ProjectName: string | null
    
    ProjectOrg: string | null
    
    ProjectBudget: string | null
    
    ProjectIntroduction: string | null
    
    ProjectOrgId: string | null
    
    constructor(){
        super();

        /**
         * 项目名称
         */
        this.ProjectName = null;

        /**
         * 项目机构
         */
        this.ProjectOrg = null;

        /**
         * 项目预算
         */
        this.ProjectBudget = null;

        /**
         * 项目简介
         */
        this.ProjectIntroduction = null;

        /**
         * 所属部门ID
         */
        this.ProjectOrgId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectName: string | null;
        ProjectOrg: string | null;
        ProjectBudget: string | null;
        ProjectIntroduction: string | null;
        ProjectOrgId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectOrg = 'ProjectOrg' in params ? params.ProjectOrg : null;
        this.ProjectBudget = 'ProjectBudget' in params ? params.ProjectBudget : null;
        this.ProjectIntroduction = 'ProjectIntroduction' in params ? params.ProjectIntroduction : null;
        this.ProjectOrgId = 'ProjectOrgId' in params ? params.ProjectOrgId : null;

    }
}

export const Models = {
    DescribeProjectResponse: DescribeProjectResponse,
    CheckStaffChUserRequest: CheckStaffChUserRequest,
    DescribeResourceTemplateHeadersResponse: DescribeResourceTemplateHeadersResponse,
    DeleteProjectRequest: DeleteProjectRequest,
    ReplenishProjectStockResponse: ReplenishProjectStockResponse,
    SendWxTouchTaskResponse: SendWxTouchTaskResponse,
    DescribeCustomersRequest: DescribeCustomersRequest,
    DescribeProjectsRequest: DescribeProjectsRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    OffLineProjectRequest: OffLineProjectRequest,
    DescribeSubProjectRequest: DescribeSubProjectRequest,
    ExpireFlowRequest: ExpireFlowRequest,
    CopyActivityChannelRequest: CopyActivityChannelRequest,
    CopyActivityChannelResponse: CopyActivityChannelResponse,
    DescribeProjectsResponse: DescribeProjectsResponse,
    ReplenishProjectStockRequest: ReplenishProjectStockRequest,
    ProjectStock: ProjectStock,
    DescribeProjectStockResponse: DescribeProjectStockResponse,
    CheckStaffChUserResponse: CheckStaffChUserResponse,
    DescribeCustomerRequest: DescribeCustomerRequest,
    ProductInfo: ProductInfo,
    SubProjectInfo: SubProjectInfo,
    ResourceTemplateHeader: ResourceTemplateHeader,
    CreateSubProjectResponse: CreateSubProjectResponse,
    Filters: Filters,
    ProjectInfo: ProjectInfo,
    DescribeCustomerResponse: DescribeCustomerResponse,
    DescribeCustomersResponse: DescribeCustomersResponse,
    CreateSubProjectRequest: CreateSubProjectRequest,
    ModifyProjectResponse: ModifyProjectResponse,
    CreateProjectResponse: CreateProjectResponse,
    DescribeProjectStockRequest: DescribeProjectStockRequest,
    DeleteProjectResponse: DeleteProjectResponse,
    SendWxTouchTaskRequest: SendWxTouchTaskRequest,
    DescribeProjectRequest: DescribeProjectRequest,
    OffLineProjectResponse: OffLineProjectResponse,
    CustomerInfo: CustomerInfo,
    ActivityInfo: ActivityInfo,
    DescribeResourceTemplateHeadersRequest: DescribeResourceTemplateHeadersRequest,
    ExpireFlowResponse: ExpireFlowResponse,
    DescribeSubProjectResponse: DescribeSubProjectResponse,
    CreateProjectRequest: CreateProjectRequest,

}
