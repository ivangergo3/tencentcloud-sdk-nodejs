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
 * 迁移目的信息
 * @class
 */
class DstInfo extends AbstractModel {

    Region: string | null
    
    Ip: string | null
    
    Port: string | null
    
    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 迁移目的地域
         */
        this.Region = null;

        /**
         * 迁移目的Ip
         */
        this.Ip = null;

        /**
         * 迁移目的端口
         */
        this.Port = null;

        /**
         * 迁移目的实例Id
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        Ip: string | null;
        Port: string | null;
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 迁移源信息
 * @class
 */
class SrcInfo extends AbstractModel {

    Region: string | null
    
    Ip: string | null
    
    Port: string | null
    
    InstanceId: string | null
    
    constructor(){
        super();

        /**
         * 迁移源地域
         */
        this.Region = null;

        /**
         * 迁移源Ip
         */
        this.Ip = null;

        /**
         * 迁移源端口
         */
        this.Port = null;

        /**
         * 迁移源实例Id
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        Ip: string | null;
        Port: string | null;
        InstanceId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeMigrationTask请求参数结构体
 * @class
 */
class DescribeMigrationTaskRequest extends AbstractModel {

    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID，例如msp-jitoh33n
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 时间对象
 * @class
 */
class TimeObj extends AbstractModel {

    CreateTime: string | null
    
    EndTime: string | null
    
    constructor(){
        super();

        /**
         * 创建时间
         */
        this.CreateTime = null;

        /**
         * 结束时间
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CreateTime: string | null;
        EndTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyMigrationTaskBelongToProject请求参数结构体
 * @class
 */
class ModifyMigrationTaskBelongToProjectRequest extends AbstractModel {

    TaskId: string | null
    
    ProjectId: number | null
    
    constructor(){
        super();

        /**
         * 任务ID，例如msp-jitoh33n
         */
        this.TaskId = null;

        /**
         * 项目ID，例如10005
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        ProjectId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 迁移详情列表
 * @class
 */
class TaskStatus extends AbstractModel {

    Status: string | null
    
    Progress: string | null
    
    UpdateTime: string | null
    
    constructor(){
        super();

        /**
         * 迁移状态
         */
        this.Status = null;

        /**
         * 迁移进度
         */
        this.Progress = null;

        /**
         * 迁移日期
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        Progress: string | null;
        UpdateTime: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyMigrationTaskStatus返回参数结构体
 * @class
 */
class ModifyMigrationTaskStatusResponse extends AbstractModel {

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
 * ListMigrationTask请求参数结构体
 * @class
 */
class ListMigrationTaskRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    ProjectId: number | null
    
    constructor(){
        super();

        /**
         * 记录起始数，默认值为0
         */
        this.Offset = null;

        /**
         * 记录条数，默认值为10
         */
        this.Limit = null;

        /**
         * 项目ID，默认值为空
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
        ProjectId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DeregisterMigrationTask返回参数结构体
 * @class
 */
class DeregisterMigrationTaskResponse extends AbstractModel {

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
 * 列表类型
 * @class
 */
class Project extends AbstractModel {

    ProjectId: number | null
    
    ProjectName: string | null
    
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

    }

    /**
     * @private
     */
    deserialize(params: {
        ProjectId: number | null;
        ProjectName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * ModifyMigrationTaskBelongToProject返回参数结构体
 * @class
 */
class ModifyMigrationTaskBelongToProjectResponse extends AbstractModel {

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
 * ListMigrationProject返回参数结构体
 * @class
 */
class ListMigrationProjectResponse extends AbstractModel {

    Projects: Array<Project> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 项目列表
         */
        this.Projects = null;

        /**
         * 项目总数
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
        Projects: Array<Project> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new Project();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 迁移任务类别
 * @class
 */
class Task extends AbstractModel {

    TaskId: string | null
    
    TaskName: string | null
    
    MigrationType: string | null
    
    Status: string | null
    
    ProjectId: number | null
    
    ProjectName: string | null
    
    SrcInfo: SrcInfo | null
    
    MigrationTimeLine: TimeObj | null
    
    Updated: string | null
    
    DstInfo: DstInfo | null
    
    constructor(){
        super();

        /**
         * 任务Id
         */
        this.TaskId = null;

        /**
         * 任务名称
         */
        this.TaskName = null;

        /**
         * 迁移类型
         */
        this.MigrationType = null;

        /**
         * 迁移状态
         */
        this.Status = null;

        /**
         * 项目Id
         */
        this.ProjectId = null;

        /**
         * 项目名称
         */
        this.ProjectName = null;

        /**
         * 迁移源信息
         */
        this.SrcInfo = null;

        /**
         * 迁移时间信息
         */
        this.MigrationTimeLine = null;

        /**
         * 状态更新时间
         */
        this.Updated = null;

        /**
         * 迁移目的信息
         */
        this.DstInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        TaskName: string | null;
        MigrationType: string | null;
        Status: string | null;
        ProjectId: number | null;
        ProjectName: string | null;
        SrcInfo: SrcInfo | null;
        MigrationTimeLine: TimeObj | null;
        Updated: string | null;
        DstInfo: DstInfo | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.MigrationType = 'MigrationType' in params ? params.MigrationType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.MigrationTimeLine) {
            let obj = new TimeObj();
            obj.deserialize(params.MigrationTimeLine)
            this.MigrationTimeLine = obj;
        }
        this.Updated = 'Updated' in params ? params.Updated : null;

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }

    }
}

/**
 * RegisterMigrationTask返回参数结构体
 * @class
 */
class RegisterMigrationTaskResponse extends AbstractModel {

    TaskId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMigrationTaskStatus请求参数结构体
 * @class
 */
class ModifyMigrationTaskStatusRequest extends AbstractModel {

    Status: string | null
    
    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 任务状态，取值为unstart，migrating，finish，fail之一，分别代表该迁移任务状态为迁移未开始，迁移中，迁移完成，迁移失败
         */
        this.Status = null;

        /**
         * 任务ID，例如msp-jitoh33n
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Status: string | null;
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ListMigrationProject请求参数结构体
 * @class
 */
class ListMigrationProjectRequest extends AbstractModel {

    Offset: number | null
    
    Limit: number | null
    
    constructor(){
        super();

        /**
         * 记录起始数，默认值为0
         */
        this.Offset = null;

        /**
         * 返回条数，默认值为500
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Offset: number | null;
        Limit: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeregisterMigrationTask请求参数结构体
 * @class
 */
class DeregisterMigrationTaskRequest extends AbstractModel {

    TaskId: string | null
    
    constructor(){
        super();

        /**
         * 任务ID
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ListMigrationTask返回参数结构体
 * @class
 */
class ListMigrationTaskResponse extends AbstractModel {

    TotalCount: number | null
    
    Tasks: Array<Task> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 记录总条数
         */
        this.TotalCount = null;

        /**
         * 迁移任务列表
         */
        this.Tasks = null;

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
        Tasks: Array<Task> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMigrationTask返回参数结构体
 * @class
 */
class DescribeMigrationTaskResponse extends AbstractModel {

    TaskStatus: Array<TaskStatus> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 迁移详情列表
         */
        this.TaskStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskStatus: Array<TaskStatus> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.TaskStatus) {
            this.TaskStatus = new Array();
            for (let z in params.TaskStatus) {
                let obj = new TaskStatus();
                obj.deserialize(params.TaskStatus[z]);
                this.TaskStatus.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterMigrationTask请求参数结构体
 * @class
 */
class RegisterMigrationTaskRequest extends AbstractModel {

    TaskType: string | null
    
    TaskName: string | null
    
    ServiceSupplier: string | null
    
    CreateTime: string | null
    
    UpdateTime: string | null
    
    MigrateClass: string | null
    
    SrcInfo: SrcInfo | null
    
    DstInfo: DstInfo | null
    
    SrcAccessType: string | null
    
    SrcDatabaseType: string | null
    
    DstAccessType: string | null
    
    DstDatabaseType: string | null
    
    constructor(){
        super();

        /**
         * 任务类型，取值database（数据库迁移）、file（文件迁移）、host（主机迁移）
         */
        this.TaskType = null;

        /**
         * 任务名称
         */
        this.TaskName = null;

        /**
         * 服务提供商名称
         */
        this.ServiceSupplier = null;

        /**
         * 迁移任务创建时间
         */
        this.CreateTime = null;

        /**
         * 迁移任务更新时间
         */
        this.UpdateTime = null;

        /**
         * 迁移类别，如数据库迁移中mysql:mysql代表从mysql迁移到mysql，文件迁移中oss:cos代表从阿里云oss迁移到腾讯云cos
         */
        this.MigrateClass = null;

        /**
         * 迁移任务源信息
         */
        this.SrcInfo = null;

        /**
         * 迁移任务目的信息
         */
        this.DstInfo = null;

        /**
         * 源实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         */
        this.SrcAccessType = null;

        /**
         * 源实例数据库类型，数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一
         */
        this.SrcDatabaseType = null;

        /**
         * 目标实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例)
         */
        this.DstAccessType = null;

        /**
         * 目标实例数据库类型,数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一
         */
        this.DstDatabaseType = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TaskType: string | null;
        TaskName: string | null;
        ServiceSupplier: string | null;
        CreateTime: string | null;
        UpdateTime: string | null;
        MigrateClass: string | null;
        SrcInfo: SrcInfo | null;
        DstInfo: DstInfo | null;
        SrcAccessType: string | null;
        SrcDatabaseType: string | null;
        DstAccessType: string | null;
        DstDatabaseType: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ServiceSupplier = 'ServiceSupplier' in params ? params.ServiceSupplier : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MigrateClass = 'MigrateClass' in params ? params.MigrateClass : null;

        if (params.SrcInfo) {
            let obj = new SrcInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DstInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.SrcAccessType = 'SrcAccessType' in params ? params.SrcAccessType : null;
        this.SrcDatabaseType = 'SrcDatabaseType' in params ? params.SrcDatabaseType : null;
        this.DstAccessType = 'DstAccessType' in params ? params.DstAccessType : null;
        this.DstDatabaseType = 'DstDatabaseType' in params ? params.DstDatabaseType : null;

    }
}

export const Models = {
    DstInfo: DstInfo,
    SrcInfo: SrcInfo,
    DescribeMigrationTaskRequest: DescribeMigrationTaskRequest,
    TimeObj: TimeObj,
    ModifyMigrationTaskBelongToProjectRequest: ModifyMigrationTaskBelongToProjectRequest,
    TaskStatus: TaskStatus,
    ModifyMigrationTaskStatusResponse: ModifyMigrationTaskStatusResponse,
    ListMigrationTaskRequest: ListMigrationTaskRequest,
    DeregisterMigrationTaskResponse: DeregisterMigrationTaskResponse,
    Project: Project,
    ModifyMigrationTaskBelongToProjectResponse: ModifyMigrationTaskBelongToProjectResponse,
    ListMigrationProjectResponse: ListMigrationProjectResponse,
    Task: Task,
    RegisterMigrationTaskResponse: RegisterMigrationTaskResponse,
    ModifyMigrationTaskStatusRequest: ModifyMigrationTaskStatusRequest,
    ListMigrationProjectRequest: ListMigrationProjectRequest,
    DeregisterMigrationTaskRequest: DeregisterMigrationTaskRequest,
    ListMigrationTaskResponse: ListMigrationTaskResponse,
    DescribeMigrationTaskResponse: DescribeMigrationTaskResponse,
    RegisterMigrationTaskRequest: RegisterMigrationTaskRequest,

}
