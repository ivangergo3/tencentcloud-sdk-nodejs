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
 * UploadFile请求参数结构体
 * @class
 */
class UploadFileRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  FileUrl: string | null

  FileName: string | null

  FileDate: string | null

  constructor() {
    super()

    /**
     * 模块名
     */
    this.Module = null

    /**
     * 操作名
     */
    this.Operation = null

    /**
     * 文件上传地址，要求地址协议为HTTPS，且URL端口必须为443
     */
    this.FileUrl = null

    /**
     * 文件名
     */
    this.FileName = null

    /**
     * 文件日期
     */
    this.FileDate = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    FileUrl: string | null
    FileName: string | null
    FileDate: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.FileUrl = "FileUrl" in params ? params.FileUrl : null
    this.FileName = "FileName" in params ? params.FileName : null
    this.FileDate = "FileDate" in params ? params.FileDate : null
  }
}

/**
 * UploadFile返回参数结构体
 * @class
 */
class UploadFileResponse extends AbstractModel {
  TaskId: number | null

  RequestId: string | null

  constructor() {
    super()

    /**
     * 任务ID
     */
    this.TaskId = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: { TaskId: number | null; RequestId: string | null }): void {
    if (!params) {
      return
    }
    this.TaskId = "TaskId" in params ? params.TaskId : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * UploadDataJson返回参数结构体
 * @class
 */
class UploadDataJsonResponse extends AbstractModel {
  Data: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
         * 响应报文信息
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.Data = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: { Data: string | null; RequestId: string | null }): void {
    if (!params) {
      return
    }
    this.Data = "Data" in params ? params.Data : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends AbstractModel {
  TaskResult: string | null

  TaskType: string | null

  TaskFileUrl: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
     * <p>任务结果：</p><ul style="margin-bottom:0px;"><li>处理中："Uploading Data."</li><li>上传成功："File Uploading Task Success."</li><li>上传失败：具体失败原因</li></ul>
     */
    this.TaskResult = null

    /**
     * <p>任务类型：</p><ul style="margin-bottom:0px;"><li>到期/逾期提醒数据上传：002</li><li>到期/逾期提醒停拨数据上传：003</li><li>回访数据上传：004</li><li>回访停拨数据上传：005</li></ul>
     */
    this.TaskType = null

    /**
         * 过滤文件下载链接，有过滤数据时才存在。
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.TaskFileUrl = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    TaskResult: string | null
    TaskType: string | null
    TaskFileUrl: string | null
    RequestId: string | null
  }): void {
    if (!params) {
      return
    }
    this.TaskResult = "TaskResult" in params ? params.TaskResult : null
    this.TaskType = "TaskType" in params ? params.TaskType : null
    this.TaskFileUrl = "TaskFileUrl" in params ? params.TaskFileUrl : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * DownloadReport请求参数结构体
 * @class
 */
class DownloadReportRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  ReportDate: string | null

  InstId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Report
     */
    this.Module = null

    /**
     * 操作名，本接口取值：DownloadReport
     */
    this.Operation = null

    /**
     * 报告日期，格式为YYYY-MM-DD
     */
    this.ReportDate = null

    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    this.InstId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    ReportDate: string | null
    InstId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.ReportDate = "ReportDate" in params ? params.ReportDate : null
    this.InstId = "InstId" in params ? params.InstId : null
  }
}

/**
 * ApplyCreditAudit返回参数结构体
 * @class
 */
class ApplyCreditAuditResponse extends AbstractModel {
  RequestDate: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
     * 请求日期
     */
    this.RequestDate = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: { RequestDate: string | null; RequestId: string | null }): void {
    if (!params) {
      return
    }
    this.RequestDate = "RequestDate" in params ? params.RequestDate : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * UploadDataFile返回参数结构体
 * @class
 */
class UploadDataFileResponse extends AbstractModel {
  DataResId: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
     * 数据ID
     */
    this.DataResId = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: { DataResId: string | null; RequestId: string | null }): void {
    if (!params) {
      return
    }
    this.DataResId = "DataResId" in params ? params.DataResId : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * 黑名单申请信息
 * @class
 */
class SingleBlackApply extends AbstractModel {
  BlackType: string | null

  OperationType: string | null

  BlackValue: string | null

  BlackDescription: string | null

  BlackValidDate: string | null

  constructor() {
    super()

    /**
     * 黑名单类型，01代表手机号码。
     */
    this.BlackType = null

    /**
     * 操作类型，A为新增，D为删除。
     */
    this.OperationType = null

    /**
     * 黑名单值，BlackType为01时，填写11位手机号码。
     */
    this.BlackValue = null

    /**
     * 备注。
     */
    this.BlackDescription = null

    /**
     * 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。
     */
    this.BlackValidDate = null
  }

  /**
   * @private
   */
  deserialize(params: {
    BlackType: string | null
    OperationType: string | null
    BlackValue: string | null
    BlackDescription: string | null
    BlackValidDate: string | null
  }): void {
    if (!params) {
      return
    }
    this.BlackType = "BlackType" in params ? params.BlackType : null
    this.OperationType = "OperationType" in params ? params.OperationType : null
    this.BlackValue = "BlackValue" in params ? params.BlackValue : null
    this.BlackDescription = "BlackDescription" in params ? params.BlackDescription : null
    this.BlackValidDate = "BlackValidDate" in params ? params.BlackValidDate : null
  }
}

/**
 * 录音信息
 * @class
 */
class SingleRecord extends AbstractModel {
  AccountNum: string | null

  BizDate: string | null

  CallStartTime: string | null

  CallerPhone: string | null

  Direction: string | null

  Duration: number | null

  ProductId: string | null

  RecordCosUrl: string | null

  constructor() {
    super()

    /**
     * 案件编号。
     */
    this.AccountNum = null

    /**
     * 外呼日期。
     */
    this.BizDate = null

    /**
     * 开始呼叫时间。
     */
    this.CallStartTime = null

    /**
     * 主叫号码。
     */
    this.CallerPhone = null

    /**
     * 呼叫方向，O为呼出，I为呼入。
     */
    this.Direction = null

    /**
     * 通话时长。
     */
    this.Duration = null

    /**
         * 产品ID。
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.ProductId = null

    /**
         * 录音下载链接。
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.RecordCosUrl = null
  }

  /**
   * @private
   */
  deserialize(params: {
    AccountNum: string | null
    BizDate: string | null
    CallStartTime: string | null
    CallerPhone: string | null
    Direction: string | null
    Duration: number | null
    ProductId: string | null
    RecordCosUrl: string | null
  }): void {
    if (!params) {
      return
    }
    this.AccountNum = "AccountNum" in params ? params.AccountNum : null
    this.BizDate = "BizDate" in params ? params.BizDate : null
    this.CallStartTime = "CallStartTime" in params ? params.CallStartTime : null
    this.CallerPhone = "CallerPhone" in params ? params.CallerPhone : null
    this.Direction = "Direction" in params ? params.Direction : null
    this.Duration = "Duration" in params ? params.Duration : null
    this.ProductId = "ProductId" in params ? params.ProductId : null
    this.RecordCosUrl = "RecordCosUrl" in params ? params.RecordCosUrl : null
  }
}

/**
 * QueryInstantData返回参数结构体
 * @class
 */
class QueryInstantDataResponse extends AbstractModel {
  TotalCount: number | null

  Data: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.TotalCount = null

    /**
         * 返回内容
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.Data = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    TotalCount: number | null
    Data: string | null
    RequestId: string | null
  }): void {
    if (!params) {
      return
    }
    this.TotalCount = "TotalCount" in params ? params.TotalCount : null
    this.Data = "Data" in params ? params.Data : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * DownloadRecordList请求参数结构体
 * @class
 */
class DownloadRecordListRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  BizDate: string | null

  InstId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Record
     */
    this.Module = null

    /**
     * 操作名，本接口取值：DownloadList
     */
    this.Operation = null

    /**
     * 录音日期，格式为YYYY-MM-DD
     */
    this.BizDate = null

    /**
     * 实例ID
     */
    this.InstId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    BizDate: string | null
    InstId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.BizDate = "BizDate" in params ? params.BizDate : null
    this.InstId = "InstId" in params ? params.InstId : null
  }
}

/**
 * UploadDataJson请求参数结构体
 * @class
 */
class UploadDataJsonRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  Data: string | null

  UploadModel: string | null

  InstanceId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Data
     */
    this.Module = null

    /**
     * 操作名，本接口取值：UploadJson
     */
    this.Operation = null

    /**
     * 报文信息
     */
    this.Data = null

    /**
     * <p>上传类型，不填默认到期/逾期提醒数据，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒数据</li><li>repay：到期/逾期提醒停拨数据</li></ul>
     */
    this.UploadModel = null

    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    this.InstanceId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    Data: string | null
    UploadModel: string | null
    InstanceId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.Data = "Data" in params ? params.Data : null
    this.UploadModel = "UploadModel" in params ? params.UploadModel : null
    this.InstanceId = "InstanceId" in params ? params.InstanceId : null
  }
}

/**
 * DescribeCreditResult返回参数结构体
 * @class
 */
class DescribeCreditResultResponse extends AbstractModel {
  ResultCode: string | null

  ClientCode: string | null

  RingStartTime: string | null

  RingDuration: number | null

  AnswerDuration: number | null

  ContextValue: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
     * <p>呼叫结果，取值范围：</p><ul style="margin-bottom:0px;"><li>NON：接通</li><li>DBU：号码忙</li><li>DRF：不在服务区</li><li>ANA：欠费未接听</li><li>REJ：拒接</li><li>SHU：关机</li><li>NAN：空号</li><li>HAL：停机</li><li>DAD：未接听</li><li>EXE：其他异常</li></ul>
     */
    this.ResultCode = null

    /**
         * 客户标识代码，多个标识码以英文逗号分隔，ResultCode为NON时才有。
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.ClientCode = null

    /**
         * 开始振铃时间，ResultCode为NON或DAD时才有此字段。
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.RingStartTime = null

    /**
     * 振铃时长
     */
    this.RingDuration = null

    /**
     * 接通时长
     */
    this.AnswerDuration = null

    /**
         * JSON格式的扩展信息字段，ResultCode为NON时才有。
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.ContextValue = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    ResultCode: string | null
    ClientCode: string | null
    RingStartTime: string | null
    RingDuration: number | null
    AnswerDuration: number | null
    ContextValue: string | null
    RequestId: string | null
  }): void {
    if (!params) {
      return
    }
    this.ResultCode = "ResultCode" in params ? params.ResultCode : null
    this.ClientCode = "ClientCode" in params ? params.ClientCode : null
    this.RingStartTime = "RingStartTime" in params ? params.RingStartTime : null
    this.RingDuration = "RingDuration" in params ? params.RingDuration : null
    this.AnswerDuration = "AnswerDuration" in params ? params.AnswerDuration : null
    this.ContextValue = "ContextValue" in params ? params.ContextValue : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * DownloadDialogueText返回参数结构体
 * @class
 */
class DownloadDialogueTextResponse extends AbstractModel {
  TextReportUrl: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
     * 对话文本下载地址
     */
    this.TextReportUrl = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: { TextReportUrl: string | null; RequestId: string | null }): void {
    if (!params) {
      return
    }
    this.TextReportUrl = "TextReportUrl" in params ? params.TextReportUrl : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * QueryInstantData请求参数结构体
 * @class
 */
class QueryInstantDataRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  ProductId: string | null

  InstanceId: string | null

  QueryModel: string | null

  Data: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Data
     */
    this.Module = null

    /**
     * 操作名，本接口取值：Query
     */
    this.Operation = null

    /**
     * 产品ID
     */
    this.ProductId = null

    /**
     * 实例ID，不传默认为系统分配的初始实例
     */
    this.InstanceId = null

    /**
     * 查询类型：callRecord 通话记录
     */
    this.QueryModel = null

    /**
     * 查询参数
     */
    this.Data = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    ProductId: string | null
    InstanceId: string | null
    QueryModel: string | null
    Data: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.ProductId = "ProductId" in params ? params.ProductId : null
    this.InstanceId = "InstanceId" in params ? params.InstanceId : null
    this.QueryModel = "QueryModel" in params ? params.QueryModel : null
    this.Data = "Data" in params ? params.Data : null
  }
}

/**
 * ApplyBlackList返回参数结构体
 * @class
 */
class ApplyBlackListResponse extends AbstractModel {
  RequestId: string | null

  constructor() {
    super()

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: { RequestId: string | null }): void {
    if (!params) {
      return
    }
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * DescribeRecords请求参数结构体
 * @class
 */
class DescribeRecordsRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  ProductId: string | null

  AccountNum: string | null

  CalledPhone: string | null

  StartBizDate: string | null

  EndBizDate: string | null

  Offset: string | null

  Limit: string | null

  InstId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Record
     */
    this.Module = null

    /**
     * 操作名，本接口取值：List
     */
    this.Operation = null

    /**
     * 产品ID
     */
    this.ProductId = null

    /**
     * 案件编号
     */
    this.AccountNum = null

    /**
     * 被叫号码
     */
    this.CalledPhone = null

    /**
     * 查询起始日期，格式为YYYY-MM-DD
     */
    this.StartBizDate = null

    /**
     * 查询结束日期，格式为YYYY-MM-DD
     */
    this.EndBizDate = null

    /**
     * 分页参数，索引，默认为0
     */
    this.Offset = null

    /**
     * 分页参数，页长，默认为20
     */
    this.Limit = null

    /**
     * 实例ID，不传默认为系统分配的初始实例
     */
    this.InstId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    ProductId: string | null
    AccountNum: string | null
    CalledPhone: string | null
    StartBizDate: string | null
    EndBizDate: string | null
    Offset: string | null
    Limit: string | null
    InstId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.ProductId = "ProductId" in params ? params.ProductId : null
    this.AccountNum = "AccountNum" in params ? params.AccountNum : null
    this.CalledPhone = "CalledPhone" in params ? params.CalledPhone : null
    this.StartBizDate = "StartBizDate" in params ? params.StartBizDate : null
    this.EndBizDate = "EndBizDate" in params ? params.EndBizDate : null
    this.Offset = "Offset" in params ? params.Offset : null
    this.Limit = "Limit" in params ? params.Limit : null
    this.InstId = "InstId" in params ? params.InstId : null
  }
}

/**
 * DescribeCreditResult请求参数结构体
 * @class
 */
class DescribeCreditResultRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  InstId: string | null

  ProductId: string | null

  CaseId: string | null

  RequestDate: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Credit
     */
    this.Module = null

    /**
     * 操作名，本接口取值：Get
     */
    this.Operation = null

    /**
     * 实例ID
     */
    this.InstId = null

    /**
     * 产品ID，形如P******。
     */
    this.ProductId = null

    /**
     * 信审任务ID
     */
    this.CaseId = null

    /**
     * 请求日期，格式为YYYY-MM-DD
     */
    this.RequestDate = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    InstId: string | null
    ProductId: string | null
    CaseId: string | null
    RequestDate: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.InstId = "InstId" in params ? params.InstId : null
    this.ProductId = "ProductId" in params ? params.ProductId : null
    this.CaseId = "CaseId" in params ? params.CaseId : null
    this.RequestDate = "RequestDate" in params ? params.RequestDate : null
  }
}

/**
 * ApplyBlackList请求参数结构体
 * @class
 */
class ApplyBlackListRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  BlackList: Array<SingleBlackApply> | null

  InstId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：account
     */
    this.Module = null

    /**
     * 操作名，本接口取值：ApplyBlackList
     */
    this.Operation = null

    /**
     * 黑名单列表
     */
    this.BlackList = null

    /**
     * 实例ID，不传默认为系统分配的初始实例
     */
    this.InstId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    BlackList: Array<SingleBlackApply> | null
    InstId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null

    if (params.BlackList) {
      this.BlackList = []
      for (const z in params.BlackList) {
        const obj = new SingleBlackApply()
        obj.deserialize(params.BlackList[z])
        this.BlackList.push(obj)
      }
    }
    this.InstId = "InstId" in params ? params.InstId : null
  }
}

/**
 * ApplyCreditAudit请求参数结构体
 * @class
 */
class ApplyCreditAuditRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  InstId: string | null

  ProductId: string | null

  CaseId: string | null

  CallbackUrl: string | null

  Data: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Credit
     */
    this.Module = null

    /**
     * 操作名，本接口取值：Apply
     */
    this.Operation = null

    /**
     * 实例ID
     */
    this.InstId = null

    /**
     * 产品ID，形如P******。
     */
    this.ProductId = null

    /**
     * 信审任务ID，同一天内，同一InstId下，同一CaseId只能调用一次。
     */
    this.CaseId = null

    /**
     * 回调地址
     */
    this.CallbackUrl = null

    /**
     * JSON格式的业务字段。
     */
    this.Data = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    InstId: string | null
    ProductId: string | null
    CaseId: string | null
    CallbackUrl: string | null
    Data: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.InstId = "InstId" in params ? params.InstId : null
    this.ProductId = "ProductId" in params ? params.ProductId : null
    this.CaseId = "CaseId" in params ? params.CaseId : null
    this.CallbackUrl = "CallbackUrl" in params ? params.CallbackUrl : null
    this.Data = "Data" in params ? params.Data : null
  }
}

/**
 * DownloadReport返回参数结构体
 * @class
 */
class DownloadReportResponse extends AbstractModel {
  DailyReportUrl: string | null

  ResultReportUrl: string | null

  DetailReportUrl: string | null

  CallbackDailyReportUrl: string | null

  CallbackResultReportUrl: string | null

  CallbackDetailReportUrl: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
         * 到期/逾期提醒日报下载地址
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.DailyReportUrl = null

    /**
         * 到期/逾期提醒结果下载地址
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.ResultReportUrl = null

    /**
         * 到期/逾期提醒明细下载地址
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.DetailReportUrl = null

    /**
         * 回访日报下载地址
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.CallbackDailyReportUrl = null

    /**
         * 回访结果下载地址
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.CallbackResultReportUrl = null

    /**
         * 回访明细下载地址
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.CallbackDetailReportUrl = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    DailyReportUrl: string | null
    ResultReportUrl: string | null
    DetailReportUrl: string | null
    CallbackDailyReportUrl: string | null
    CallbackResultReportUrl: string | null
    CallbackDetailReportUrl: string | null
    RequestId: string | null
  }): void {
    if (!params) {
      return
    }
    this.DailyReportUrl = "DailyReportUrl" in params ? params.DailyReportUrl : null
    this.ResultReportUrl = "ResultReportUrl" in params ? params.ResultReportUrl : null
    this.DetailReportUrl = "DetailReportUrl" in params ? params.DetailReportUrl : null
    this.CallbackDailyReportUrl =
      "CallbackDailyReportUrl" in params ? params.CallbackDailyReportUrl : null
    this.CallbackResultReportUrl =
      "CallbackResultReportUrl" in params ? params.CallbackResultReportUrl : null
    this.CallbackDetailReportUrl =
      "CallbackDetailReportUrl" in params ? params.CallbackDetailReportUrl : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * DownloadRecordList返回参数结构体
 * @class
 */
class DownloadRecordListResponse extends AbstractModel {
  RecordListUrl: string | null

  RequestId: string | null

  constructor() {
    super()

    /**
     * 录音列表下载地址
     */
    this.RecordListUrl = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: { RecordListUrl: string | null; RequestId: string | null }): void {
    if (!params) {
      return
    }
    this.RecordListUrl = "RecordListUrl" in params ? params.RecordListUrl : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * UploadDataFile请求参数结构体
 * @class
 */
class UploadDataFileRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  FileName: string | null

  UploadModel: string | null

  File: File | null

  FileUrl: string | null

  InstId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Data
     */
    this.Module = null

    /**
     * 操作名，本接口取值：Upload
     */
    this.Operation = null

    /**
     * 文件名
     */
    this.FileName = null

    /**
     * <p>上传类型，不填默认到期/逾期提醒文件，取值范围：</p><ul style="margin-bottom:0px;"><li>data：到期/逾期提醒文件</li><li>repay：到期/逾期提醒停拨文件</li><li>callback：回访文件</li><li>callstop：回访停拨文件</li><li>blacklist：黑名单文件</li></ul>
     */
    this.UploadModel = null

    /**
     * 文件，文件与文件地址上传只可选用一种，必须使用multipart/form-data协议来上传二进制流文件，建议使用xlsx格式，大小不超过5MB。
     */
    this.File = null

    /**
     * 文件上传地址，文件与文件地址上传只可选用一种，大小不超过50MB。
     */
    this.FileUrl = null

    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    this.InstId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    FileName: string | null
    UploadModel: string | null
    File: File | null
    FileUrl: string | null
    InstId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.FileName = "FileName" in params ? params.FileName : null
    this.UploadModel = "UploadModel" in params ? params.UploadModel : null
    this.File = "File" in params ? params.File : null
    this.FileUrl = "FileUrl" in params ? params.FileUrl : null
    this.InstId = "InstId" in params ? params.InstId : null
  }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  TaskId: string | null

  InstId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Task
     */
    this.Module = null

    /**
     * 操作名，本接口取值：DescribeTaskStatus
     */
    this.Operation = null

    /**
     * 任务ID，"上传文件"接口返回的DataResId，形如abc-xyz123
     */
    this.TaskId = null

    /**
     * 实例ID，不传默认为系统分配的初始实例。
     */
    this.InstId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    TaskId: string | null
    InstId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.TaskId = "TaskId" in params ? params.TaskId : null
    this.InstId = "InstId" in params ? params.InstId : null
  }
}

/**
 * DescribeRecords返回参数结构体
 * @class
 */
class DescribeRecordsResponse extends AbstractModel {
  RecordList: Array<SingleRecord> | null

  TotalCount: number | null

  RequestId: string | null

  constructor() {
    super()

    /**
         * 录音列表。
注意：此字段可能返回 null，表示取不到有效值。
         */
    this.RecordList = null

    /**
     * 录音总量。
     */
    this.TotalCount = null

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    this.RequestId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    RecordList: Array<SingleRecord> | null
    TotalCount: number | null
    RequestId: string | null
  }): void {
    if (!params) {
      return
    }

    if (params.RecordList) {
      this.RecordList = []
      for (const z in params.RecordList) {
        const obj = new SingleRecord()
        obj.deserialize(params.RecordList[z])
        this.RecordList.push(obj)
      }
    }
    this.TotalCount = "TotalCount" in params ? params.TotalCount : null
    this.RequestId = "RequestId" in params ? params.RequestId : null
  }
}

/**
 * DownloadDialogueText请求参数结构体
 * @class
 */
class DownloadDialogueTextRequest extends AbstractModel {
  Module: string | null

  Operation: string | null

  ReportDate: string | null

  InstId: string | null

  constructor() {
    super()

    /**
     * 模块名，本接口取值：Report
     */
    this.Module = null

    /**
     * 操作名，本接口取值：DownloadTextReport
     */
    this.Operation = null

    /**
     * 报告日期，格式为YYYY-MM-DD
     */
    this.ReportDate = null

    /**
     * 实例ID
     */
    this.InstId = null
  }

  /**
   * @private
   */
  deserialize(params: {
    Module: string | null
    Operation: string | null
    ReportDate: string | null
    InstId: string | null
  }): void {
    if (!params) {
      return
    }
    this.Module = "Module" in params ? params.Module : null
    this.Operation = "Operation" in params ? params.Operation : null
    this.ReportDate = "ReportDate" in params ? params.ReportDate : null
    this.InstId = "InstId" in params ? params.InstId : null
  }
}

export const Models = {
  UploadFileRequest: UploadFileRequest,
  UploadFileResponse: UploadFileResponse,
  UploadDataJsonResponse: UploadDataJsonResponse,
  DescribeTaskStatusResponse: DescribeTaskStatusResponse,
  DownloadReportRequest: DownloadReportRequest,
  ApplyCreditAuditResponse: ApplyCreditAuditResponse,
  UploadDataFileResponse: UploadDataFileResponse,
  SingleBlackApply: SingleBlackApply,
  SingleRecord: SingleRecord,
  QueryInstantDataResponse: QueryInstantDataResponse,
  DownloadRecordListRequest: DownloadRecordListRequest,
  UploadDataJsonRequest: UploadDataJsonRequest,
  DescribeCreditResultResponse: DescribeCreditResultResponse,
  DownloadDialogueTextResponse: DownloadDialogueTextResponse,
  QueryInstantDataRequest: QueryInstantDataRequest,
  ApplyBlackListResponse: ApplyBlackListResponse,
  DescribeRecordsRequest: DescribeRecordsRequest,
  DescribeCreditResultRequest: DescribeCreditResultRequest,
  ApplyBlackListRequest: ApplyBlackListRequest,
  ApplyCreditAuditRequest: ApplyCreditAuditRequest,
  DownloadReportResponse: DownloadReportResponse,
  DownloadRecordListResponse: DownloadRecordListResponse,
  UploadDataFileRequest: UploadDataFileRequest,
  DescribeTaskStatusRequest: DescribeTaskStatusRequest,
  DescribeRecordsResponse: DescribeRecordsResponse,
  DownloadDialogueTextRequest: DownloadDialogueTextRequest,
}
