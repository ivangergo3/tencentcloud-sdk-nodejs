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
const ModifyClusterNameRequest = models_1.Models.ModifyClusterNameRequest;
const ModifyTableGroupNameResponse = models_1.Models.ModifyTableGroupNameResponse;
const DescribeTableTagsRequest = models_1.Models.DescribeTableTagsRequest;
const ModifyClusterPasswordResponse = models_1.Models.ModifyClusterPasswordResponse;
const DeleteClusterResponse = models_1.Models.DeleteClusterResponse;
const DeleteTableIndexResponse = models_1.Models.DeleteTableIndexResponse;
const TableRollbackResultNew = models_1.Models.TableRollbackResultNew;
const DescribeTablesResponse = models_1.Models.DescribeTablesResponse;
const DeleteClusterRequest = models_1.Models.DeleteClusterRequest;
const SelectedTableWithField = models_1.Models.SelectedTableWithField;
const DeleteTableIndexRequest = models_1.Models.DeleteTableIndexRequest;
const DescribeTasksResponse = models_1.Models.DescribeTasksResponse;
const DeleteTablesRequest = models_1.Models.DeleteTablesRequest;
const DescribeRegionsResponse = models_1.Models.DescribeRegionsResponse;
const SelectedTableInfoNew = models_1.Models.SelectedTableInfoNew;
const ModifyClusterPasswordRequest = models_1.Models.ModifyClusterPasswordRequest;
const DeleteTableGroupRequest = models_1.Models.DeleteTableGroupRequest;
const TagsInfoOfTableGroup = models_1.Models.TagsInfoOfTableGroup;
const CreateTableGroupRequest = models_1.Models.CreateTableGroupRequest;
const TagsInfoOfTable = models_1.Models.TagsInfoOfTable;
const DeleteIdlFilesResponse = models_1.Models.DeleteIdlFilesResponse;
const FieldInfo = models_1.Models.FieldInfo;
const ModifyTableTagsRequest = models_1.Models.ModifyTableTagsRequest;
const IdlFileInfo = models_1.Models.IdlFileInfo;
const DescribeTasksRequest = models_1.Models.DescribeTasksRequest;
const RecoverRecycleTablesResponse = models_1.Models.RecoverRecycleTablesResponse;
const ClearTablesResponse = models_1.Models.ClearTablesResponse;
const DescribeIdlFileInfosRequest = models_1.Models.DescribeIdlFileInfosRequest;
const ClusterInfo = models_1.Models.ClusterInfo;
const DescribeTablesInRecycleResponse = models_1.Models.DescribeTablesInRecycleResponse;
const ModifyTablesResponse = models_1.Models.ModifyTablesResponse;
const ModifyTableGroupTagsResponse = models_1.Models.ModifyTableGroupTagsResponse;
const ModifyClusterTagsRequest = models_1.Models.ModifyClusterTagsRequest;
const DescribeTableGroupTagsResponse = models_1.Models.DescribeTableGroupTagsResponse;
const SetTableIndexRequest = models_1.Models.SetTableIndexRequest;
const ModifyTableQuotasResponse = models_1.Models.ModifyTableQuotasResponse;
const RecoverRecycleTablesRequest = models_1.Models.RecoverRecycleTablesRequest;
const ModifyTableGroupNameRequest = models_1.Models.ModifyTableGroupNameRequest;
const DescribeTableGroupsRequest = models_1.Models.DescribeTableGroupsRequest;
const ModifyTableTagsResponse = models_1.Models.ModifyTableTagsResponse;
const ModifyTableGroupTagsRequest = models_1.Models.ModifyTableGroupTagsRequest;
const ModifyTableQuotasRequest = models_1.Models.ModifyTableQuotasRequest;
const CompareIdlFilesResponse = models_1.Models.CompareIdlFilesResponse;
const CreateTablesResponse = models_1.Models.CreateTablesResponse;
const DescribeRegionsRequest = models_1.Models.DescribeRegionsRequest;
const DescribeClustersResponse = models_1.Models.DescribeClustersResponse;
const ModifyClusterTagsResponse = models_1.Models.ModifyClusterTagsResponse;
const DescribeClusterTagsResponse = models_1.Models.DescribeClusterTagsResponse;
const TagsInfoOfCluster = models_1.Models.TagsInfoOfCluster;
const SetTableIndexResponse = models_1.Models.SetTableIndexResponse;
const ClearTablesRequest = models_1.Models.ClearTablesRequest;
const DescribeIdlFileInfosResponse = models_1.Models.DescribeIdlFileInfosResponse;
const TagInfoUnit = models_1.Models.TagInfoUnit;
const CreateClusterResponse = models_1.Models.CreateClusterResponse;
const DescribeClustersRequest = models_1.Models.DescribeClustersRequest;
const TableInfoNew = models_1.Models.TableInfoNew;
const TaskInfoNew = models_1.Models.TaskInfoNew;
const DeleteIdlFilesRequest = models_1.Models.DeleteIdlFilesRequest;
const CreateBackupResponse = models_1.Models.CreateBackupResponse;
const VerifyIdlFilesResponse = models_1.Models.VerifyIdlFilesResponse;
const DescribeTableTagsResponse = models_1.Models.DescribeTableTagsResponse;
const CreateTableGroupResponse = models_1.Models.CreateTableGroupResponse;
const VerifyIdlFilesRequest = models_1.Models.VerifyIdlFilesRequest;
const ModifyClusterNameResponse = models_1.Models.ModifyClusterNameResponse;
const ModifyTablesRequest = models_1.Models.ModifyTablesRequest;
const DescribeTableGroupTagsRequest = models_1.Models.DescribeTableGroupTagsRequest;
const DescribeTablesInRecycleRequest = models_1.Models.DescribeTablesInRecycleRequest;
const DescribeTablesRequest = models_1.Models.DescribeTablesRequest;
const ModifyTableMemosRequest = models_1.Models.ModifyTableMemosRequest;
const DescribeUinInWhitelistResponse = models_1.Models.DescribeUinInWhitelistResponse;
const ParsedTableInfoNew = models_1.Models.ParsedTableInfoNew;
const RollbackTablesResponse = models_1.Models.RollbackTablesResponse;
const CreateBackupRequest = models_1.Models.CreateBackupRequest;
const CreateClusterRequest = models_1.Models.CreateClusterRequest;
const TableResultNew = models_1.Models.TableResultNew;
const CreateTablesRequest = models_1.Models.CreateTablesRequest;
const DescribeClusterTagsRequest = models_1.Models.DescribeClusterTagsRequest;
const RegionInfo = models_1.Models.RegionInfo;
const DescribeTableGroupsResponse = models_1.Models.DescribeTableGroupsResponse;
const DeleteTableGroupResponse = models_1.Models.DeleteTableGroupResponse;
const RollbackTablesRequest = models_1.Models.RollbackTablesRequest;
const DescribeUinInWhitelistRequest = models_1.Models.DescribeUinInWhitelistRequest;
const CompareIdlFilesRequest = models_1.Models.CompareIdlFilesRequest;
const IdlFileInfoWithoutContent = models_1.Models.IdlFileInfoWithoutContent;
const ModifyTableMemosResponse = models_1.Models.ModifyTableMemosResponse;
const Filter = models_1.Models.Filter;
const DeleteTablesResponse = models_1.Models.DeleteTablesResponse;
const ErrorInfo = models_1.Models.ErrorInfo;
const TableGroupInfo = models_1.Models.TableGroupInfo;
/**
 * tcaplusdb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("tcaplusdb.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    /**
     * 删除表格的分布式索引
     * @param {DeleteTableIndexRequest} req
     * @param {function(string, DeleteTableIndexResponse):void} cb
     * @public
     */
    DeleteTableIndex(req, cb) {
        const resp = new DeleteTableIndexResponse();
        this.request("DeleteTableIndex", req, resp, cb);
    }
    /**
     * 获取表格标签
     * @param {DescribeTableTagsRequest} req
     * @param {function(string, DescribeTableTagsResponse):void} cb
     * @public
     */
    DescribeTableTags(req, cb) {
        const resp = new DescribeTableTagsResponse();
        this.request("DescribeTableTags", req, resp, cb);
    }
    /**
     * 修改表格标签
     * @param {ModifyTableTagsRequest} req
     * @param {function(string, ModifyTableTagsResponse):void} cb
     * @public
     */
    ModifyTableTags(req, cb) {
        const resp = new ModifyTableTagsResponse();
        this.request("ModifyTableTags", req, resp, cb);
    }
    /**
     * 本接口用于创建TcaplusDB集群
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        const resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }
    /**
     * 查询本用户是否在白名单中，控制是否能创建TDR类型的APP或表
     * @param {DescribeUinInWhitelistRequest} req
     * @param {function(string, DescribeUinInWhitelistResponse):void} cb
     * @public
     */
    DescribeUinInWhitelist(req, cb) {
        const resp = new DescribeUinInWhitelistResponse();
        this.request("DescribeUinInWhitelist", req, resp, cb);
    }
    /**
     * 查询回收站中的表详情
     * @param {DescribeTablesInRecycleRequest} req
     * @param {function(string, DescribeTablesInRecycleResponse):void} cb
     * @public
     */
    DescribeTablesInRecycle(req, cb) {
        const resp = new DescribeTablesInRecycleResponse();
        this.request("DescribeTablesInRecycle", req, resp, cb);
    }
    /**
     * 表格数据回档
     * @param {RollbackTablesRequest} req
     * @param {function(string, RollbackTablesResponse):void} cb
     * @public
     */
    RollbackTables(req, cb) {
        const resp = new RollbackTablesResponse();
        this.request("RollbackTables", req, resp, cb);
    }
    /**
     * 修改指定的集群名称
     * @param {ModifyClusterNameRequest} req
     * @param {function(string, ModifyClusterNameResponse):void} cb
     * @public
     */
    ModifyClusterName(req, cb) {
        const resp = new ModifyClusterNameResponse();
        this.request("ModifyClusterName", req, resp, cb);
    }
    /**
     * 删除TcaplusDB集群，必须在集群所属所有资源（包括表格组，表）都已经释放的情况下才会成功。
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        const resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }
    /**
     * 修改指定集群的密码，后台将在旧密码失效之前同时支持TcaplusDB SDK使用旧密码和新密码访问数据库。在旧密码失效之前不能提交新的密码修改请求，在旧密码失效之后不能提交修改旧密码过期时间的请求。
     * @param {ModifyClusterPasswordRequest} req
     * @param {function(string, ModifyClusterPasswordResponse):void} cb
     * @public
     */
    ModifyClusterPassword(req, cb) {
        const resp = new ModifyClusterPasswordResponse();
        this.request("ModifyClusterPassword", req, resp, cb);
    }
    /**
     * 指定集群ID和待删除IDL文件的信息，删除目标文件，如果文件正在被表关联则删除失败。
     * @param {DeleteIdlFilesRequest} req
     * @param {function(string, DeleteIdlFilesResponse):void} cb
     * @public
     */
    DeleteIdlFiles(req, cb) {
        const resp = new DeleteIdlFilesResponse();
        this.request("DeleteIdlFiles", req, resp, cb);
    }
    /**
     * 恢复回收站中，用户自行删除的表。对欠费待释放的表无效。
     * @param {RecoverRecycleTablesRequest} req
     * @param {function(string, RecoverRecycleTablesResponse):void} cb
     * @public
     */
    RecoverRecycleTables(req, cb) {
        const resp = new RecoverRecycleTablesResponse();
        this.request("RecoverRecycleTables", req, resp, cb);
    }
    /**
     * 设置表格分布式索引
     * @param {SetTableIndexRequest} req
     * @param {function(string, SetTableIndexResponse):void} cb
     * @public
     */
    SetTableIndex(req, cb) {
        const resp = new SetTableIndexResponse();
        this.request("SetTableIndex", req, resp, cb);
    }
    /**
     * 用户创建备份任务
     * @param {CreateBackupRequest} req
     * @param {function(string, CreateBackupResponse):void} cb
     * @public
     */
    CreateBackup(req, cb) {
        const resp = new CreateBackupResponse();
        this.request("CreateBackup", req, resp, cb);
    }
    /**
     * 根据选择的IDL文件列表，批量创建表格
     * @param {CreateTablesRequest} req
     * @param {function(string, CreateTablesResponse):void} cb
     * @public
     */
    CreateTables(req, cb) {
        const resp = new CreateTablesResponse();
        this.request("CreateTables", req, resp, cb);
    }
    /**
     * 表格扩缩容
     * @param {ModifyTableQuotasRequest} req
     * @param {function(string, ModifyTableQuotasResponse):void} cb
     * @public
     */
    ModifyTableQuotas(req, cb) {
        const resp = new ModifyTableQuotasResponse();
        this.request("ModifyTableQuotas", req, resp, cb);
    }
    /**
     * 查询TcaplusDB集群列表，包含集群详细信息。
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        const resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }
    /**
     * 删除表格组
     * @param {DeleteTableGroupRequest} req
     * @param {function(string, DeleteTableGroupResponse):void} cb
     * @public
     */
    DeleteTableGroup(req, cb) {
        const resp = new DeleteTableGroupResponse();
        this.request("DeleteTableGroup", req, resp, cb);
    }
    /**
     * 修改TcaplusDB表格组名称
     * @param {ModifyTableGroupNameRequest} req
     * @param {function(string, ModifyTableGroupNameResponse):void} cb
     * @public
     */
    ModifyTableGroupName(req, cb) {
        const resp = new ModifyTableGroupNameResponse();
        this.request("ModifyTableGroupName", req, resp, cb);
    }
    /**
     * 在TcaplusDB集群下创建表格组
     * @param {CreateTableGroupRequest} req
     * @param {function(string, CreateTableGroupResponse):void} cb
     * @public
     */
    CreateTableGroup(req, cb) {
        const resp = new CreateTableGroupResponse();
        this.request("CreateTableGroup", req, resp, cb);
    }
    /**
     * 查询TcaplusDB服务支持的地域列表
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        const resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }
    /**
     * 查询任务列表
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        const resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }
    /**
     * 修改集群标签
     * @param {ModifyClusterTagsRequest} req
     * @param {function(string, ModifyClusterTagsResponse):void} cb
     * @public
     */
    ModifyClusterTags(req, cb) {
        const resp = new ModifyClusterTagsResponse();
        this.request("ModifyClusterTags", req, resp, cb);
    }
    /**
     * 修改表格组标签
     * @param {ModifyTableGroupTagsRequest} req
     * @param {function(string, ModifyTableGroupTagsResponse):void} cb
     * @public
     */
    ModifyTableGroupTags(req, cb) {
        const resp = new ModifyTableGroupTagsResponse();
        this.request("ModifyTableGroupTags", req, resp, cb);
    }
    /**
     * 获取表格组关联的标签列表
     * @param {DescribeTableGroupTagsRequest} req
     * @param {function(string, DescribeTableGroupTagsResponse):void} cb
     * @public
     */
    DescribeTableGroupTags(req, cb) {
        const resp = new DescribeTableGroupTagsResponse();
        this.request("DescribeTableGroupTags", req, resp, cb);
    }
    /**
     * 查询表格组列表
     * @param {DescribeTableGroupsRequest} req
     * @param {function(string, DescribeTableGroupsResponse):void} cb
     * @public
     */
    DescribeTableGroups(req, cb) {
        const resp = new DescribeTableGroupsResponse();
        this.request("DescribeTableGroups", req, resp, cb);
    }
    /**
     * 选中目标表格，上传并校验改表文件，返回是否允许修改表格结构的结果。
     * @param {CompareIdlFilesRequest} req
     * @param {function(string, CompareIdlFilesResponse):void} cb
     * @public
     */
    CompareIdlFiles(req, cb) {
        const resp = new CompareIdlFilesResponse();
        this.request("CompareIdlFiles", req, resp, cb);
    }
    /**
     * 查询表描述文件详情
     * @param {DescribeIdlFileInfosRequest} req
     * @param {function(string, DescribeIdlFileInfosResponse):void} cb
     * @public
     */
    DescribeIdlFileInfos(req, cb) {
        const resp = new DescribeIdlFileInfosResponse();
        this.request("DescribeIdlFileInfos", req, resp, cb);
    }
    /**
     * 删除指定的表,第一次调用此接口代表将表移动至回收站，再次调用代表将此表格从回收站中彻底删除。
     * @param {DeleteTablesRequest} req
     * @param {function(string, DeleteTablesResponse):void} cb
     * @public
     */
    DeleteTables(req, cb) {
        const resp = new DeleteTablesResponse();
        this.request("DeleteTables", req, resp, cb);
    }
    /**
     * 修改表备注信息
     * @param {ModifyTableMemosRequest} req
     * @param {function(string, ModifyTableMemosResponse):void} cb
     * @public
     */
    ModifyTableMemos(req, cb) {
        const resp = new ModifyTableMemosResponse();
        this.request("ModifyTableMemos", req, resp, cb);
    }
    /**
     * 上传并校验创建表格文件，返回校验合法的表格定义
     * @param {VerifyIdlFilesRequest} req
     * @param {function(string, VerifyIdlFilesResponse):void} cb
     * @public
     */
    VerifyIdlFiles(req, cb) {
        const resp = new VerifyIdlFilesResponse();
        this.request("VerifyIdlFiles", req, resp, cb);
    }
    /**
     * 根据给定的表信息，清除表数据。
     * @param {ClearTablesRequest} req
     * @param {function(string, ClearTablesResponse):void} cb
     * @public
     */
    ClearTables(req, cb) {
        const resp = new ClearTablesResponse();
        this.request("ClearTables", req, resp, cb);
    }
    /**
     * 根据用户选定的表定义IDL文件，批量修改指定的表
     * @param {ModifyTablesRequest} req
     * @param {function(string, ModifyTablesResponse):void} cb
     * @public
     */
    ModifyTables(req, cb) {
        const resp = new ModifyTablesResponse();
        this.request("ModifyTables", req, resp, cb);
    }
    /**
     * 查询表详情
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        const resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }
    /**
     * 获取集群关联的标签列表
     * @param {DescribeClusterTagsRequest} req
     * @param {function(string, DescribeClusterTagsResponse):void} cb
     * @public
     */
    DescribeClusterTags(req, cb) {
        const resp = new DescribeClusterTagsResponse();
        this.request("DescribeClusterTags", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tcaplusdb_client.js.map