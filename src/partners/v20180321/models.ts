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
 * 描述待审核代客信息
 * @class
 */
class AgentClientElem extends AbstractModel {

    Uin: string | null
    
    ClientUin: string | null
    
    ApplyTime: number | null
    
    ClientFlag: string | null
    
    Mail: string | null
    
    Phone: string | null
    
    HasOverdueBill: number | null
    
    Status: number | null
    
    SalesUin: string | null
    
    SalesName: string | null
    
    constructor(){
        super();

        /**
         * 代理商账号ID
         */
        this.Uin = null;

        /**
         * 代客账号ID
         */
        this.ClientUin = null;

        /**
         * 代客申请时间戳
         */
        this.ApplyTime = null;

        /**
         * 代客类型，可能值为a/b/c
         */
        this.ClientFlag = null;

        /**
         * 代客邮箱，打码显示
         */
        this.Mail = null;

        /**
         * 代客手机，打码显示
         */
        this.Phone = null;

        /**
         * 0表示不欠费，1表示欠费
         */
        this.HasOverdueBill = null;

        /**
         * 1:待代理商审核;2:待腾讯云审核
         */
        this.Status = null;

        /**
         * 业务员ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SalesUin = null;

        /**
         * 业务员姓名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SalesName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: string | null;
        ClientUin: string | null;
        ApplyTime: number | null;
        ClientFlag: string | null;
        Mail: string | null;
        Phone: string | null;
        HasOverdueBill: number | null;
        Status: number | null;
        SalesUin: string | null;
        SalesName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.HasOverdueBill = 'HasOverdueBill' in params ? params.HasOverdueBill : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;

    }
}

/**
 * DescribeAgentDealsCache请求参数结构体
 * @class
 */
class DescribeAgentDealsCacheRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    CreatTimeRangeStart: string | null
    
    CreatTimeRangeEnd: string | null
    
    Order: number | null
    
    Status: number | null
    
    OwnerUins: Array<string> | null
    
    DealNames: Array<string> | null
    
    PayerMode: number | null
    
    constructor(){
        super();

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

        /**
         * 下单时间范围起始点
         */
        this.CreatTimeRangeStart = null;

        /**
         * 下单时间范围终止点
         */
        this.CreatTimeRangeEnd = null;

        /**
         * 0:下单时间降序；其他：下单时间升序
         */
        this.Order = null;

        /**
         * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
         */
        this.Status = null;

        /**
         * 下单人账号ID列表
         */
        this.OwnerUins = null;

        /**
         * 订单号列表
         */
        this.DealNames = null;

        /**
         * 支付方式，0：自付；1：代付
         */
        this.PayerMode = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
        CreatTimeRangeStart: string | null;
        CreatTimeRangeEnd: string | null;
        Order: number | null;
        Status: number | null;
        OwnerUins: Array<string> | null;
        DealNames: Array<string> | null;
        PayerMode: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreatTimeRangeStart = 'CreatTimeRangeStart' in params ? params.CreatTimeRangeStart : null;
        this.CreatTimeRangeEnd = 'CreatTimeRangeEnd' in params ? params.CreatTimeRangeEnd : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUins = 'OwnerUins' in params ? params.OwnerUins : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.PayerMode = 'PayerMode' in params ? params.PayerMode : null;

    }
}

/**
 * DescribeSalesmans请求参数结构体
 * @class
 */
class DescribeSalesmansRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    SalesName: string | null
    
    SalesUin: string | null
    
    OrderDirection: string | null
    
    constructor(){
        super();

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

        /**
         * 业务员姓名(模糊查询)
         */
        this.SalesName = null;

        /**
         * 业务员ID
         */
        this.SalesUin = null;

        /**
         * ASC/DESC， 不区分大小写，按创建通过时间排序
         */
        this.OrderDirection = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
        SalesName: string | null;
        SalesUin: string | null;
        OrderDirection: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

    }
}

/**
 * DescribeAgentAuditedClients请求参数结构体
 * @class
 */
class DescribeAgentAuditedClientsRequest extends AbstractModel {

    ClientUin: string | null
    
    ClientName: string | null
    
    ClientFlag: string | null
    
    OrderDirection: string | null
    
    ClientUins: Array<string> | null
    
    HasOverdueBill: number | null
    
    ClientRemark: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    ClientType: string | null
    
    ProjectType: string | null
    
    SalesUin: string | null
    
    SalesName: string | null
    
    constructor(){
        super();

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

        /**
         * 客户名称。由于涉及隐私，名称打码显示，故名称仅支持打码后的模糊搜索
         */
        this.ClientName = null;

        /**
         * 客户类型，a/b，类型定义参考代理商相关政策文档
         */
        this.ClientFlag = null;

        /**
         * ASC/DESC， 不区分大小写，按审核通过时间排序
         */
        this.OrderDirection = null;

        /**
         * 客户账号ID列表
         */
        this.ClientUins = null;

        /**
         * 是否欠费。0：不欠费；1：欠费
         */
        this.HasOverdueBill = null;

        /**
         * 客户备注
         */
        this.ClientRemark = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

        /**
         * 客户类型：可以为new(新拓)/assign(指定)/old(存量)/空
         */
        this.ClientType = null;

        /**
         * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
         */
        this.ProjectType = null;

        /**
         * 业务员ID
         */
        this.SalesUin = null;

        /**
         * 业务员姓名（模糊查询）
         */
        this.SalesName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
        ClientName: string | null;
        ClientFlag: string | null;
        OrderDirection: string | null;
        ClientUins: Array<string> | null;
        HasOverdueBill: number | null;
        ClientRemark: string | null;
        Offset: number | null;
        Limit: number | null;
        ClientType: string | null;
        ProjectType: string | null;
        SalesUin: string | null;
        SalesName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ClientName = 'ClientName' in params ? params.ClientName : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.ClientUins = 'ClientUins' in params ? params.ClientUins : null;
        this.HasOverdueBill = 'HasOverdueBill' in params ? params.HasOverdueBill : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;

    }
}

/**
 * RemovePayRelationForClient请求参数结构体
 * @class
 */
class RemovePayRelationForClientRequest extends AbstractModel {

    ClientUin: string | null
    
    constructor(){
        super();

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

/**
 * AgentPayDeals请求参数结构体
 * @class
 */
class AgentPayDealsRequest extends AbstractModel {

    OwnerUin: string | null
    
    AgentPay: number | null
    
    DealNames: Array<string> | null
    
    constructor(){
        super();

        /**
         * 订单所有者uin
         */
        this.OwnerUin = null;

        /**
         * 代付标志，1：代付；0：自付
         */
        this.AgentPay = null;

        /**
         * 订单号数组
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OwnerUin: string | null;
        AgentPay: number | null;
        DealNames: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AgentPay = 'AgentPay' in params ? params.AgentPay : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * DescribeAgentClientGrade返回参数结构体
 * @class
 */
class DescribeAgentClientGradeResponse extends AbstractModel {

    AuditStatus: number | null
    
    AuthState: number | null
    
    ClientGrade: string | null
    
    ClientType: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 审核状态：0待审核，1，已审核
         */
        this.AuditStatus = null;

        /**
         * 实名认证状态：0，未实名认证，1实名认证
         */
        this.AuthState = null;

        /**
         * 客户级别
         */
        this.ClientGrade = null;

        /**
         * 客户类型：1，个人；2，企业；3，其他
         */
        this.ClientType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        AuditStatus: number | null;
        AuthState: number | null;
        ClientGrade: string | null;
        ClientType: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.AuthState = 'AuthState' in params ? params.AuthState : null;
        this.ClientGrade = 'ClientGrade' in params ? params.ClientGrade : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返佣信息定义
 * @class
 */
class RebateInfoElem extends AbstractModel {

    Uin: string | null
    
    RebateMonth: string | null
    
    Amt: number | null
    
    MonthSales: number | null
    
    QuarterSales: number | null
    
    ExceptionFlag: string | null
    
    constructor(){
        super();

        /**
         * 代理商账号ID
         */
        this.Uin = null;

        /**
         * 返佣月份，如2018-02
         */
        this.RebateMonth = null;

        /**
         * 返佣金额，单位分
         */
        this.Amt = null;

        /**
         * 月度业绩，单位分
         */
        this.MonthSales = null;

        /**
         * 季度业绩，单位分
         */
        this.QuarterSales = null;

        /**
         * NORMAL(正常)/HAS_OVERDUE_BILL(欠费)/NO_CONTRACT(缺合同)
         */
        this.ExceptionFlag = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: string | null;
        RebateMonth: string | null;
        Amt: number | null;
        MonthSales: number | null;
        QuarterSales: number | null;
        ExceptionFlag: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.RebateMonth = 'RebateMonth' in params ? params.RebateMonth : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.MonthSales = 'MonthSales' in params ? params.MonthSales : null;
        this.QuarterSales = 'QuarterSales' in params ? params.QuarterSales : null;
        this.ExceptionFlag = 'ExceptionFlag' in params ? params.ExceptionFlag : null;

    }
}

/**
 * DescribeClientBalance返回参数结构体
 * @class
 */
class DescribeClientBalanceResponse extends AbstractModel {

    Balance: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 账户余额，单位分
         */
        this.Balance = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Balance: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AgentTransferMoney请求参数结构体
 * @class
 */
class AgentTransferMoneyRequest extends AbstractModel {

    ClientUin: string | null
    
    Amount: number | null
    
    constructor(){
        super();

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

        /**
         * 转账金额，单位分
         */
        this.Amount = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
        Amount: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.Amount = 'Amount' in params ? params.Amount : null;

    }
}

/**
 * DescribeClientBalance请求参数结构体
 * @class
 */
class DescribeClientBalanceRequest extends AbstractModel {

    ClientUin: string | null
    
    constructor(){
        super();

        /**
         * 客户(代客)账号ID
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

/**
 * RemovePayRelationForClient返回参数结构体
 * @class
 */
class RemovePayRelationForClientResponse extends AbstractModel {

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
 * DescribeRebateInfos请求参数结构体
 * @class
 */
class DescribeRebateInfosRequest extends AbstractModel {

    RebateMonth: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 返佣月份，如2018-02
         */
        this.RebateMonth = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RebateMonth: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RebateMonth = 'RebateMonth' in params ? params.RebateMonth : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreatePayRelationForClient返回参数结构体
 * @class
 */
class CreatePayRelationForClientResponse extends AbstractModel {

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
 * DescribeAgentAuditedClients返回参数结构体
 * @class
 */
class DescribeAgentAuditedClientsResponse extends AbstractModel {

    AgentClientSet: Array<AgentAuditedClient> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 已审核代客列表
         */
        this.AgentClientSet = null;

        /**
         * 符合条件的代客总数
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
        AgentClientSet: Array<AgentAuditedClient> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AgentClientSet) {
            this.AgentClientSet = new Array();
            for (let z in params.AgentClientSet) {
                let obj = new AgentAuditedClient();
                obj.deserialize(params.AgentClientSet[z]);
                this.AgentClientSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentBills返回参数结构体
 * @class
 */
class DescribeAgentBillsResponse extends AbstractModel {

    TotalCount: number | null
    
    AgentBillSet: Array<AgentBillElem> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 符合查询条件列表总数量
         */
        this.TotalCount = null;

        /**
         * 业务明细列表
         */
        this.AgentBillSet = null;

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
        AgentBillSet: Array<AgentBillElem> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AgentBillSet) {
            this.AgentBillSet = new Array();
            for (let z in params.AgentBillSet) {
                let obj = new AgentBillElem();
                obj.deserialize(params.AgentBillSet[z]);
                this.AgentBillSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentPayDeals请求参数结构体
 * @class
 */
class DescribeAgentPayDealsRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    CreatTimeRangeStart: string | null
    
    CreatTimeRangeEnd: string | null
    
    Order: number | null
    
    Status: number | null
    
    OwnerUins: Array<string> | null
    
    DealNames: Array<string> | null
    
    constructor(){
        super();

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

        /**
         * 下单时间范围起始点(不传时会默认查15天内订单，传值时需要传15天内的起始时间)
         */
        this.CreatTimeRangeStart = null;

        /**
         * 下单时间范围终止点
         */
        this.CreatTimeRangeEnd = null;

        /**
         * 0:下单时间降序；其他：下单时间升序
         */
        this.Order = null;

        /**
         * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
         */
        this.Status = null;

        /**
         * 下单人账号ID列表
         */
        this.OwnerUins = null;

        /**
         * 订单号列表
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
        CreatTimeRangeStart: string | null;
        CreatTimeRangeEnd: string | null;
        Order: number | null;
        Status: number | null;
        OwnerUins: Array<string> | null;
        DealNames: Array<string> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.CreatTimeRangeStart = 'CreatTimeRangeStart' in params ? params.CreatTimeRangeStart : null;
        this.CreatTimeRangeEnd = 'CreatTimeRangeEnd' in params ? params.CreatTimeRangeEnd : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUins = 'OwnerUins' in params ? params.OwnerUins : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * AuditApplyClient请求参数结构体
 * @class
 */
class AuditApplyClientRequest extends AbstractModel {

    ClientUin: string | null
    
    AuditResult: string | null
    
    Note: string | null
    
    constructor(){
        super();

        /**
         * 待审核客户账号ID
         */
        this.ClientUin = null;

        /**
         * 审核结果，可能的取值：accept/reject
         */
        this.AuditResult = null;

        /**
         * 申请理由，B类客户审核通过时必须填写申请理由
         */
        this.Note = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
        AuditResult: string | null;
        Note: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.AuditResult = 'AuditResult' in params ? params.AuditResult : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * ModifyClientRemark返回参数结构体
 * @class
 */
class ModifyClientRemarkResponse extends AbstractModel {

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
 * DescribeAgentClients返回参数结构体
 * @class
 */
class DescribeAgentClientsResponse extends AbstractModel {

    AgentClientSet: Array<AgentClientElem> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 待审核代客列表
         */
        this.AgentClientSet = null;

        /**
         * 符合条件的代客总数
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
        AgentClientSet: Array<AgentClientElem> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AgentClientSet) {
            this.AgentClientSet = new Array();
            for (let z in params.AgentClientSet) {
                let obj = new AgentClientElem();
                obj.deserialize(params.AgentClientSet[z]);
                this.AgentClientSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentClients请求参数结构体
 * @class
 */
class DescribeAgentClientsRequest extends AbstractModel {

    ClientUin: string | null
    
    ClientName: string | null
    
    ClientFlag: string | null
    
    OrderDirection: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    SalesUin: string | null
    
    SalesName: string | null
    
    constructor(){
        super();

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

        /**
         * 客户名称。由于涉及隐私，名称打码显示，故名称仅支持打码后的模糊搜索
         */
        this.ClientName = null;

        /**
         * 客户类型，a/b，类型定义参考代理商相关政策文档
         */
        this.ClientFlag = null;

        /**
         * ASC/DESC， 不区分大小写，按申请时间排序
         */
        this.OrderDirection = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

        /**
         * 业务员ID
         */
        this.SalesUin = null;

        /**
         * 业务员姓名（模糊查询）
         */
        this.SalesName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
        ClientName: string | null;
        ClientFlag: string | null;
        OrderDirection: string | null;
        Offset: number | null;
        Limit: number | null;
        SalesUin: string | null;
        SalesName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ClientName = 'ClientName' in params ? params.ClientName : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;

    }
}

/**
 * DescribeSalesmans返回参数结构体
 * @class
 */
class DescribeSalesmansResponse extends AbstractModel {

    AgentSalesmanSet: Array<AgentSalesmanElem> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 业务员列表
         */
        this.AgentSalesmanSet = null;

        /**
         * 符合条件的代客总数
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
        AgentSalesmanSet: Array<AgentSalesmanElem> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AgentSalesmanSet) {
            this.AgentSalesmanSet = new Array();
            for (let z in params.AgentSalesmanSet) {
                let obj = new AgentSalesmanElem();
                obj.deserialize(params.AgentSalesmanSet[z]);
                this.AgentSalesmanSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 已审核代客信息
 * @class
 */
class AgentAuditedClient extends AbstractModel {

    Uin: string | null
    
    ClientUin: string | null
    
    AgentTime: string | null
    
    ClientFlag: string | null
    
    ClientRemark: string | null
    
    ClientName: string | null
    
    AuthType: string | null
    
    AppId: string | null
    
    LastMonthAmt: number | null
    
    ThisMonthAmt: number | null
    
    HasOverdueBill: number | null
    
    ClientType: string | null
    
    ProjectType: string | null
    
    SalesUin: string | null
    
    SalesName: string | null
    
    Mail: string | null
    
    constructor(){
        super();

        /**
         * 代理商账号ID
         */
        this.Uin = null;

        /**
         * 代客账号ID
         */
        this.ClientUin = null;

        /**
         * 代客审核通过时间戳
         */
        this.AgentTime = null;

        /**
         * 代客类型，可能值为a/b/c
         */
        this.ClientFlag = null;

        /**
         * 代客备注
         */
        this.ClientRemark = null;

        /**
         * 代客名称（首选实名认证名称）
         */
        this.ClientName = null;

        /**
         * 认证类型, 0：个人，1：企业；其他：未认证
         */
        this.AuthType = null;

        /**
         * 代客APPID
         */
        this.AppId = null;

        /**
         * 上月消费金额
         */
        this.LastMonthAmt = null;

        /**
         * 本月消费金额
         */
        this.ThisMonthAmt = null;

        /**
         * 是否欠费,0：不欠费；1：欠费
         */
        this.HasOverdueBill = null;

        /**
         * 客户类型：可以为new(新拓)/assign(指定)/old(存量)/空
         */
        this.ClientType = null;

        /**
         * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
         */
        this.ProjectType = null;

        /**
         * 业务员ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SalesUin = null;

        /**
         * 业务员姓名
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SalesName = null;

        /**
         * 代客邮箱
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Mail = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: string | null;
        ClientUin: string | null;
        AgentTime: string | null;
        ClientFlag: string | null;
        ClientRemark: string | null;
        ClientName: string | null;
        AuthType: string | null;
        AppId: string | null;
        LastMonthAmt: number | null;
        ThisMonthAmt: number | null;
        HasOverdueBill: number | null;
        ClientType: string | null;
        ProjectType: string | null;
        SalesUin: string | null;
        SalesName: string | null;
        Mail: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.AgentTime = 'AgentTime' in params ? params.AgentTime : null;
        this.ClientFlag = 'ClientFlag' in params ? params.ClientFlag : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.ClientName = 'ClientName' in params ? params.ClientName : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.LastMonthAmt = 'LastMonthAmt' in params ? params.LastMonthAmt : null;
        this.ThisMonthAmt = 'ThisMonthAmt' in params ? params.ThisMonthAmt : null;
        this.HasOverdueBill = 'HasOverdueBill' in params ? params.HasOverdueBill : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.Mail = 'Mail' in params ? params.Mail : null;

    }
}

/**
 * DescribeAgentPayDeals返回参数结构体
 * @class
 */
class DescribeAgentPayDealsResponse extends AbstractModel {

    AgentPayDealSet: Array<AgentDealElem> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单数组
         */
        this.AgentPayDealSet = null;

        /**
         * 符合条件的订单总数量
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
        AgentPayDealSet: Array<AgentDealElem> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AgentPayDealSet) {
            this.AgentPayDealSet = new Array();
            for (let z in params.AgentPayDealSet) {
                let obj = new AgentDealElem();
                obj.deserialize(params.AgentPayDealSet[z]);
                this.AgentPayDealSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订单价格详情
 * @class
 */
class DealGoodsPriceElem extends AbstractModel {

    RealTotalCost: number | null
    
    constructor(){
        super();

        /**
         * 实付金额
         */
        this.RealTotalCost = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RealTotalCost: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;

    }
}

/**
 * ModifyClientRemark请求参数结构体
 * @class
 */
class ModifyClientRemarkRequest extends AbstractModel {

    ClientRemark: string | null
    
    ClientUin: string | null
    
    constructor(){
        super();

        /**
         * 客户备注名称
         */
        this.ClientRemark = null;

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientRemark: string | null;
        ClientUin: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

/**
 * CreatePayRelationForClient请求参数结构体
 * @class
 */
class CreatePayRelationForClientRequest extends AbstractModel {

    ClientUin: string | null
    
    constructor(){
        super();

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

/**
 * AgentTransferMoney返回参数结构体
 * @class
 */
class AgentTransferMoneyResponse extends AbstractModel {

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
 * 业务信息定义
 * @class
 */
class AgentBillElem extends AbstractModel {

    Uin: string | null
    
    OrderId: string | null
    
    ClientUin: string | null
    
    ClientRemark: string | null
    
    PayTime: string | null
    
    GoodsType: string | null
    
    PayMode: string | null
    
    SettleMonth: string | null
    
    Amt: number | null
    
    PayerMode: string | null
    
    ClientType: string | null
    
    ProjectType: string | null
    
    ActivityId: string | null
    
    constructor(){
        super();

        /**
         * 代理商账号ID
         */
        this.Uin = null;

        /**
         * 订单号，仅对预付费账单有意义
         */
        this.OrderId = null;

        /**
         * 代客账号ID
         */
        this.ClientUin = null;

        /**
         * 代客备注名称
         */
        this.ClientRemark = null;

        /**
         * 支付时间
         */
        this.PayTime = null;

        /**
         * 云产品名称
         */
        this.GoodsType = null;

        /**
         * 预付费/后付费
         */
        this.PayMode = null;

        /**
         * 支付月份
         */
        this.SettleMonth = null;

        /**
         * 支付金额，单位分
         */
        this.Amt = null;

        /**
         * agentpay：代付；selfpay：自付
         */
        this.PayerMode = null;

        /**
         * 客户类型：可以为new(新拓)/assign(指定)/old(存量)/空
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClientType = null;

        /**
         * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectType = null;

        /**
         * 活动ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: string | null;
        OrderId: string | null;
        ClientUin: string | null;
        ClientRemark: string | null;
        PayTime: string | null;
        GoodsType: string | null;
        PayMode: string | null;
        SettleMonth: string | null;
        Amt: number | null;
        PayerMode: string | null;
        ClientType: string | null;
        ProjectType: string | null;
        ActivityId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.GoodsType = 'GoodsType' in params ? params.GoodsType : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SettleMonth = 'SettleMonth' in params ? params.SettleMonth : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.PayerMode = 'PayerMode' in params ? params.PayerMode : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;

    }
}

/**
 * AuditApplyClient返回参数结构体
 * @class
 */
class AuditApplyClientResponse extends AbstractModel {

    Uin: string | null
    
    ClientUin: string | null
    
    AuditResult: string | null
    
    AgentTime: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 代理商账号ID
         */
        this.Uin = null;

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

        /**
         * 审核结果，包括accept/reject/qcloudaudit（腾讯云审核）
         */
        this.AuditResult = null;

        /**
         * 关联时间对应的时间戳
         */
        this.AgentTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: string | null;
        ClientUin: string | null;
        AuditResult: string | null;
        AgentTime: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.AuditResult = 'AuditResult' in params ? params.AuditResult : null;
        this.AgentTime = 'AgentTime' in params ? params.AgentTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentDealsCache返回参数结构体
 * @class
 */
class DescribeAgentDealsCacheResponse extends AbstractModel {

    AgentDealSet: Array<AgentDealElem> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 订单数组
         */
        this.AgentDealSet = null;

        /**
         * 符合条件的订单总数量
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
        AgentDealSet: Array<AgentDealElem> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.AgentDealSet) {
            this.AgentDealSet = new Array();
            for (let z in params.AgentDealSet) {
                let obj = new AgentDealElem();
                obj.deserialize(params.AgentDealSet[z]);
                this.AgentDealSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentBills请求参数结构体
 * @class
 */
class DescribeAgentBillsRequest extends AbstractModel {

    SettleMonth: string | null
    
    ClientUin: string | null
    
    PayMode: string | null
    
    OrderId: string | null
    
    ClientRemark: string | null
    
    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 支付月份，如2018-02
         */
        this.SettleMonth = null;

        /**
         * 客户账号ID
         */
        this.ClientUin = null;

        /**
         * 支付方式，prepay/postpay
         */
        this.PayMode = null;

        /**
         * 预付费订单号
         */
        this.OrderId = null;

        /**
         * 客户备注名称
         */
        this.ClientRemark = null;

        /**
         * 偏移量
         */
        this.Offset = null;

        /**
         * 限制数目
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SettleMonth: string | null;
        ClientUin: string | null;
        PayMode: string | null;
        OrderId: string | null;
        ClientRemark: string | null;
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.SettleMonth = 'SettleMonth' in params ? params.SettleMonth : null;
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AgentPayDeals返回参数结构体
 * @class
 */
class AgentPayDealsResponse extends AbstractModel {

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
 * 描述代理商代付的订单信息
 * @class
 */
class AgentDealElem extends AbstractModel {

    DealId: string | null
    
    DealName: string | null
    
    GoodsCategoryId: string | null
    
    OwnerUin: string | null
    
    AppId: string | null
    
    GoodsNum: string | null
    
    GoodsPrice: DealGoodsPriceElem | null
    
    Creater: string | null
    
    CreatTime: string | null
    
    PayEndTime: string | null
    
    BillId: string | null
    
    Payer: string | null
    
    DealStatus: string | null
    
    Status: string | null
    
    GoodsName: string | null
    
    ClientRemark: string | null
    
    ActionType: string | null
    
    VoucherDecline: string | null
    
    BigDealId: string | null
    
    ClientType: string | null
    
    ProjectType: string | null
    
    SalesUin: string | null
    
    PayerMode: string | null
    
    ActivityId: string | null
    
    OverdueTime: string | null
    
    constructor(){
        super();

        /**
         * 订单自增 ID
         */
        this.DealId = null;

        /**
         * 订单号
         */
        this.DealName = null;

        /**
         * 商品类型 ID
         */
        this.GoodsCategoryId = null;

        /**
         * 订单所有者
         */
        this.OwnerUin = null;

        /**
         * 订单所有者对应 appId
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AppId = null;

        /**
         * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GoodsNum = null;

        /**
         * 价格详情
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GoodsPrice = null;

        /**
         * 下单人
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Creater = null;

        /**
         * 下单时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CreatTime = null;

        /**
         * 支付结束时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PayEndTime = null;

        /**
         * 扣费流水号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BillId = null;

        /**
         * 支付人
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Payer = null;

        /**
         * 订单状态，中文描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.DealStatus = null;

        /**
         * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Status = null;

        /**
         * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GoodsName = null;

        /**
         * 客户备注
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClientRemark = null;

        /**
         * 订单操作类型，purchase（新购），renew（续费），modify（配置变更）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActionType = null;

        /**
         * 代金券抵扣金额，单位分
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VoucherDecline = null;

        /**
         * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.BigDealId = null;

        /**
         * 客户类型（new：新拓；old：存量；assign：指派）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ClientType = null;

        /**
         * 项目类型（self：自拓；repeat：直销；platform：官网合作）
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ProjectType = null;

        /**
         * 业务员账号ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.SalesUin = null;

        /**
         * 支付方式，0：自付；1：代付
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.PayerMode = null;

        /**
         * 活动ID
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ActivityId = null;

        /**
         * 订单过期时间
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OverdueTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DealId: string | null;
        DealName: string | null;
        GoodsCategoryId: string | null;
        OwnerUin: string | null;
        AppId: string | null;
        GoodsNum: string | null;
        GoodsPrice: DealGoodsPriceElem | null;
        Creater: string | null;
        CreatTime: string | null;
        PayEndTime: string | null;
        BillId: string | null;
        Payer: string | null;
        DealStatus: string | null;
        Status: string | null;
        GoodsName: string | null;
        ClientRemark: string | null;
        ActionType: string | null;
        VoucherDecline: string | null;
        BigDealId: string | null;
        ClientType: string | null;
        ProjectType: string | null;
        SalesUin: string | null;
        PayerMode: string | null;
        ActivityId: string | null;
        OverdueTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.GoodsCategoryId = 'GoodsCategoryId' in params ? params.GoodsCategoryId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;

        if (params.GoodsPrice) {
            let obj = new DealGoodsPriceElem();
            obj.deserialize(params.GoodsPrice)
            this.GoodsPrice = obj;
        }
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;
        this.PayEndTime = 'PayEndTime' in params ? params.PayEndTime : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.Payer = 'Payer' in params ? params.Payer : null;
        this.DealStatus = 'DealStatus' in params ? params.DealStatus : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.ClientRemark = 'ClientRemark' in params ? params.ClientRemark : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.VoucherDecline = 'VoucherDecline' in params ? params.VoucherDecline : null;
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.ProjectType = 'ProjectType' in params ? params.ProjectType : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.PayerMode = 'PayerMode' in params ? params.PayerMode : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.OverdueTime = 'OverdueTime' in params ? params.OverdueTime : null;

    }
}

/**
 * 代理商业务员信息
 * @class
 */
class AgentSalesmanElem extends AbstractModel {

    Uin: string | null
    
    SalesUin: string | null
    
    SalesName: string | null
    
    CreateTime: string | null
    
    constructor(){
        super();

        /**
         * 代理商账号ID
         */
        this.Uin = null;

        /**
         * 业务员ID
         */
        this.SalesUin = null;

        /**
         * 业务员姓名
         */
        this.SalesName = null;

        /**
         * 业务员创建时间
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Uin: string | null;
        SalesUin: string | null;
        SalesName: string | null;
        CreateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.SalesUin = 'SalesUin' in params ? params.SalesUin : null;
        this.SalesName = 'SalesName' in params ? params.SalesName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeRebateInfos返回参数结构体
 * @class
 */
class DescribeRebateInfosResponse extends AbstractModel {

    RebateInfoSet: Array<RebateInfoElem> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返佣信息列表
         */
        this.RebateInfoSet = null;

        /**
         * 符合查询条件返佣信息数目
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
        RebateInfoSet: Array<RebateInfoElem> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.RebateInfoSet) {
            this.RebateInfoSet = new Array();
            for (let z in params.RebateInfoSet) {
                let obj = new RebateInfoElem();
                obj.deserialize(params.RebateInfoSet[z]);
                this.RebateInfoSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAgentClientGrade请求参数结构体
 * @class
 */
class DescribeAgentClientGradeRequest extends AbstractModel {

    ClientUin: string | null
    
    constructor(){
        super();

        /**
         * 代客uin
         */
        this.ClientUin = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        ClientUin: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ClientUin = 'ClientUin' in params ? params.ClientUin : null;

    }
}

export const Models = {
    AgentClientElem: AgentClientElem,
    DescribeAgentDealsCacheRequest: DescribeAgentDealsCacheRequest,
    DescribeSalesmansRequest: DescribeSalesmansRequest,
    DescribeAgentAuditedClientsRequest: DescribeAgentAuditedClientsRequest,
    RemovePayRelationForClientRequest: RemovePayRelationForClientRequest,
    AgentPayDealsRequest: AgentPayDealsRequest,
    DescribeAgentClientGradeResponse: DescribeAgentClientGradeResponse,
    RebateInfoElem: RebateInfoElem,
    DescribeClientBalanceResponse: DescribeClientBalanceResponse,
    AgentTransferMoneyRequest: AgentTransferMoneyRequest,
    DescribeClientBalanceRequest: DescribeClientBalanceRequest,
    RemovePayRelationForClientResponse: RemovePayRelationForClientResponse,
    DescribeRebateInfosRequest: DescribeRebateInfosRequest,
    CreatePayRelationForClientResponse: CreatePayRelationForClientResponse,
    DescribeAgentAuditedClientsResponse: DescribeAgentAuditedClientsResponse,
    DescribeAgentBillsResponse: DescribeAgentBillsResponse,
    DescribeAgentPayDealsRequest: DescribeAgentPayDealsRequest,
    AuditApplyClientRequest: AuditApplyClientRequest,
    ModifyClientRemarkResponse: ModifyClientRemarkResponse,
    DescribeAgentClientsResponse: DescribeAgentClientsResponse,
    DescribeAgentClientsRequest: DescribeAgentClientsRequest,
    DescribeSalesmansResponse: DescribeSalesmansResponse,
    AgentAuditedClient: AgentAuditedClient,
    DescribeAgentPayDealsResponse: DescribeAgentPayDealsResponse,
    DealGoodsPriceElem: DealGoodsPriceElem,
    ModifyClientRemarkRequest: ModifyClientRemarkRequest,
    CreatePayRelationForClientRequest: CreatePayRelationForClientRequest,
    AgentTransferMoneyResponse: AgentTransferMoneyResponse,
    AgentBillElem: AgentBillElem,
    AuditApplyClientResponse: AuditApplyClientResponse,
    DescribeAgentDealsCacheResponse: DescribeAgentDealsCacheResponse,
    DescribeAgentBillsRequest: DescribeAgentBillsRequest,
    AgentPayDealsResponse: AgentPayDealsResponse,
    AgentDealElem: AgentDealElem,
    AgentSalesmanElem: AgentSalesmanElem,
    DescribeRebateInfosResponse: DescribeRebateInfosResponse,
    DescribeAgentClientGradeRequest: DescribeAgentClientGradeRequest,

}
