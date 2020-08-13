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
 * DeleteCfsFileSystem请求参数结构体
 * @class
 */
class DeleteCfsFileSystemRequest extends AbstractModel {

    FileSystemId: string | null
    
    constructor(){
        super();

        /**
         * 文件系统 ID。说明，进行删除文件系统操作前需要先调用 DeleteMountTarget 接口删除该文件系统的挂载点，否则会删除失败。
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileSystemId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DeleteCfsFileSystem返回参数结构体
 * @class
 */
class DeleteCfsFileSystemResponse extends AbstractModel {

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
 * UpdateCfsRule请求参数结构体
 * @class
 */
class UpdateCfsRuleRequest extends AbstractModel {

    PGroupId: string | null
    
    RuleId: string | null
    
    AuthClientIp: string | null
    
    RWPermission: string | null
    
    UserPermission: string | null
    
    Priority: number | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 规则 ID
         */
        this.RuleId = null;

        /**
         * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
         */
        this.AuthClientIp = null;

        /**
         * 读写权限, 值为RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
         */
        this.RWPermission = null;

        /**
         * 用户权限，值为all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
         */
        this.UserPermission = null;

        /**
         * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        RuleId: string | null;
        AuthClientIp: string | null;
        RWPermission: string | null;
        UserPermission: string | null;
        Priority: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DeleteMountTarget请求参数结构体
 * @class
 */
class DeleteMountTargetRequest extends AbstractModel {

    FileSystemId: string | null
    
    MountTargetId: string | null
    
    constructor(){
        super();

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

        /**
         * 挂载点 ID
         */
        this.MountTargetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileSystemId: string | null;
        MountTargetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.MountTargetId = 'MountTargetId' in params ? params.MountTargetId : null;

    }
}

/**
 * CreateCfsRule请求参数结构体
 * @class
 */
class CreateCfsRuleRequest extends AbstractModel {

    PGroupId: string | null
    
    AuthClientIp: string | null
    
    Priority: number | null
    
    RWPermission: string | null
    
    UserPermission: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
         */
        this.AuthClientIp = null;

        /**
         * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
         */
        this.Priority = null;

        /**
         * 读写权限, 值为 RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
         */
        this.RWPermission = null;

        /**
         * 用户权限，值为 all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
         */
        this.UserPermission = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        AuthClientIp: string | null;
        Priority: number | null;
        RWPermission: string | null;
        UserPermission: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;

    }
}

/**
 * 文件系统绑定权限组信息
 * @class
 */
class PGroup extends AbstractModel {

    PGroupId: string | null
    
    Name: string | null
    
    constructor(){
        super();

        /**
         * 权限组ID
         */
        this.PGroupId = null;

        /**
         * 权限组名称
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        Name: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeAvailableZoneInfo返回参数结构体
 * @class
 */
class DescribeAvailableZoneInfoResponse extends AbstractModel {

    RegionZones: Array<AvailableRegion> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 各可用区的资源售卖情况以及支持的存储类型、存储协议等信息
         */
        this.RegionZones = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RegionZones: Array<AvailableRegion> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.RegionZones) {
            this.RegionZones = new Array();
            for (let z in params.RegionZones) {
                let obj = new AvailableRegion();
                obj.deserialize(params.RegionZones[z]);
                this.RegionZones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemName返回参数结构体
 * @class
 */
class UpdateCfsFileSystemNameResponse extends AbstractModel {

    CreationToken: string | null
    
    FileSystemId: string | null
    
    FsName: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 用户自定义文件系统名称
         */
        this.CreationToken = null;

        /**
         * 文件系统ID
         */
        this.FileSystemId = null;

        /**
         * 用户自定义文件系统名称
         */
        this.FsName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CreationToken: string | null;
        FileSystemId: string | null;
        FsName: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemName请求参数结构体
 * @class
 */
class UpdateCfsFileSystemNameRequest extends AbstractModel {

    FileSystemId: string | null
    
    FsName: string | null
    
    constructor(){
        super();

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

        /**
         * 用户自定义文件系统名称
         */
        this.FsName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileSystemId: string | null;
        FsName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

    }
}

/**
 * DescribeCfsPGroups返回参数结构体
 * @class
 */
class DescribeCfsPGroupsResponse extends AbstractModel {

    PGroupList: Array<PGroupInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权限组信息列表
         */
        this.PGroupList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupList: Array<PGroupInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.PGroupList) {
            this.PGroupList = new Array();
            for (let z in params.PGroupList) {
                let obj = new PGroupInfo();
                obj.deserialize(params.PGroupList[z]);
                this.PGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsPGroup请求参数结构体
 * @class
 */
class UpdateCfsPGroupRequest extends AbstractModel {

    PGroupId: string | null
    
    Name: string | null
    
    DescInfo: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
         */
        this.Name = null;

        /**
         * 权限组描述信息，1-255个字符
         */
        this.DescInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        Name: string | null;
        DescInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;

    }
}

/**
 * DeleteMountTarget返回参数结构体
 * @class
 */
class DeleteMountTargetResponse extends AbstractModel {

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
 * DescribeMountTargets返回参数结构体
 * @class
 */
class DescribeMountTargetsResponse extends AbstractModel {

    MountTargets: Array<MountInfo> | null
    
    NumberOfMountTargets: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 挂载点详情
         */
        this.MountTargets = null;

        /**
         * 挂载点数量
         */
        this.NumberOfMountTargets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        MountTargets: Array<MountInfo> | null;
        NumberOfMountTargets: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.MountTargets) {
            this.MountTargets = new Array();
            for (let z in params.MountTargets) {
                let obj = new MountInfo();
                obj.deserialize(params.MountTargets[z]);
                this.MountTargets.push(obj);
            }
        }
        this.NumberOfMountTargets = 'NumberOfMountTargets' in params ? params.NumberOfMountTargets : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsRule返回参数结构体
 * @class
 */
class DeleteCfsRuleResponse extends AbstractModel {

    RuleId: string | null
    
    PGroupId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 规则 ID
         */
        this.RuleId = null;

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleId: string | null;
        PGroupId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCfsRule请求参数结构体
 * @class
 */
class DeleteCfsRuleRequest extends AbstractModel {

    PGroupId: string | null
    
    RuleId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 规则 ID
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        RuleId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 挂载点信息
 * @class
 */
class MountInfo extends AbstractModel {

    FileSystemId: string | null
    
    MountTargetId: string | null
    
    IpAddress: string | null
    
    FSID: string | null
    
    LifeCycleState: string | null
    
    NetworkInterface: string | null
    
    VpcId: string | null
    
    VpcName: string | null
    
    SubnetId: string | null
    
    SubnetName: string | null
    
    constructor(){
        super();

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

        /**
         * 挂载点 ID
         */
        this.MountTargetId = null;

        /**
         * 挂载点 IP
         */
        this.IpAddress = null;

        /**
         * 挂载根目录
         */
        this.FSID = null;

        /**
         * 挂载点状态
         */
        this.LifeCycleState = null;

        /**
         * 网络类型
         */
        this.NetworkInterface = null;

        /**
         * 私有网络 ID
         */
        this.VpcId = null;

        /**
         * 私有网络名称
         */
        this.VpcName = null;

        /**
         * 子网 Id
         */
        this.SubnetId = null;

        /**
         * 子网名称
         */
        this.SubnetName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileSystemId: string | null;
        MountTargetId: string | null;
        IpAddress: string | null;
        FSID: string | null;
        LifeCycleState: string | null;
        NetworkInterface: string | null;
        VpcId: string | null;
        VpcName: string | null;
        SubnetId: string | null;
        SubnetName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.MountTargetId = 'MountTargetId' in params ? params.MountTargetId : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.FSID = 'FSID' in params ? params.FSID : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.NetworkInterface = 'NetworkInterface' in params ? params.NetworkInterface : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;

    }
}

/**
 * UpdateCfsRule返回参数结构体
 * @class
 */
class UpdateCfsRuleResponse extends AbstractModel {

    PGroupId: string | null
    
    RuleId: string | null
    
    AuthClientIp: string | null
    
    RWPermission: string | null
    
    UserPermission: string | null
    
    Priority: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 规则 ID
         */
        this.RuleId = null;

        /**
         * 允许访问的客户端 IP 或者 IP 段
         */
        this.AuthClientIp = null;

        /**
         * 读写权限
         */
        this.RWPermission = null;

        /**
         * 用户权限
         */
        this.UserPermission = null;

        /**
         * 优先级
         */
        this.Priority = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        RuleId: string | null;
        AuthClientIp: string | null;
        RWPermission: string | null;
        UserPermission: string | null;
        Priority: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsFileSystems返回参数结构体
 * @class
 */
class DescribeCfsFileSystemsResponse extends AbstractModel {

    FileSystems: Array<FileSystemInfo> | null
    
    TotalCount: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 文件系统信息
         */
        this.FileSystems = null;

        /**
         * 文件系统总数
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
        FileSystems: Array<FileSystemInfo> | null;
        TotalCount: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.FileSystems) {
            this.FileSystems = new Array();
            for (let z in params.FileSystems) {
                let obj = new FileSystemInfo();
                obj.deserialize(params.FileSystems[z]);
                this.FileSystems.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCfsFileSystem返回参数结构体
 * @class
 */
class CreateCfsFileSystemResponse extends AbstractModel {

    CreationTime: string | null
    
    CreationToken: string | null
    
    FileSystemId: string | null
    
    LifeCycleState: string | null
    
    SizeByte: number | null
    
    ZoneId: number | null
    
    FsName: string | null
    
    Encrypted: boolean | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 文件系统创建时间
         */
        this.CreationTime = null;

        /**
         * 用户自定义文件系统名称
         */
        this.CreationToken = null;

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

        /**
         * 文件系统状态
         */
        this.LifeCycleState = null;

        /**
         * 文件系统已使用容量大小
         */
        this.SizeByte = null;

        /**
         * 可用区 ID
         */
        this.ZoneId = null;

        /**
         * 用户自定义文件系统名称
         */
        this.FsName = null;

        /**
         * 文件系统是否加密
         */
        this.Encrypted = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CreationTime: string | null;
        CreationToken: string | null;
        FileSystemId: string | null;
        LifeCycleState: string | null;
        SizeByte: number | null;
        ZoneId: number | null;
        FsName: string | null;
        Encrypted: boolean | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.Encrypted = 'Encrypted' in params ? params.Encrypted : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件系统基本信息
 * @class
 */
class FileSystemInfo extends AbstractModel {

    CreationTime: string | null
    
    CreationToken: string | null
    
    FileSystemId: string | null
    
    LifeCycleState: string | null
    
    SizeByte: number | null
    
    SizeLimit: number | null
    
    ZoneId: number | null
    
    Zone: string | null
    
    Protocol: string | null
    
    StorageType: string | null
    
    StorageResourcePkg: string | null
    
    BandwidthResourcePkg: string | null
    
    PGroup: PGroup | null
    
    FsName: string | null
    
    Encrypted: boolean | null
    
    KmsKeyId: string | null
    
    AppId: number | null
    
    constructor(){
        super();

        /**
         * 创建时间
         */
        this.CreationTime = null;

        /**
         * 用户自定义名称
         */
        this.CreationToken = null;

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

        /**
         * 文件系统状态
         */
        this.LifeCycleState = null;

        /**
         * 文件系统已使用容量
         */
        this.SizeByte = null;

        /**
         * 文件系统最大空间限制
         */
        this.SizeLimit = null;

        /**
         * 区域 ID
         */
        this.ZoneId = null;

        /**
         * 区域名称
         */
        this.Zone = null;

        /**
         * 文件系统协议类型
         */
        this.Protocol = null;

        /**
         * 文件系统存储类型
         */
        this.StorageType = null;

        /**
         * 文件系统绑定的预付费存储包（暂未支持）
         */
        this.StorageResourcePkg = null;

        /**
         * 文件系统绑定的预付费带宽包（暂未支持）
         */
        this.BandwidthResourcePkg = null;

        /**
         * 文件系统绑定权限组信息
         */
        this.PGroup = null;

        /**
         * 用户自定义名称
         */
        this.FsName = null;

        /**
         * 文件系统是否加密
         */
        this.Encrypted = null;

        /**
         * 加密所使用的密钥，可以为密钥的 ID 或者 ARN
         */
        this.KmsKeyId = null;

        /**
         * 应用ID
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CreationTime: string | null;
        CreationToken: string | null;
        FileSystemId: string | null;
        LifeCycleState: string | null;
        SizeByte: number | null;
        SizeLimit: number | null;
        ZoneId: number | null;
        Zone: string | null;
        Protocol: string | null;
        StorageType: string | null;
        StorageResourcePkg: string | null;
        BandwidthResourcePkg: string | null;
        PGroup: PGroup | null;
        FsName: string | null;
        Encrypted: boolean | null;
        KmsKeyId: string | null;
        AppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.CreationToken = 'CreationToken' in params ? params.CreationToken : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.LifeCycleState = 'LifeCycleState' in params ? params.LifeCycleState : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.SizeLimit = 'SizeLimit' in params ? params.SizeLimit : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.StorageResourcePkg = 'StorageResourcePkg' in params ? params.StorageResourcePkg : null;
        this.BandwidthResourcePkg = 'BandwidthResourcePkg' in params ? params.BandwidthResourcePkg : null;

        if (params.PGroup) {
            let obj = new PGroup();
            obj.deserialize(params.PGroup)
            this.PGroup = obj;
        }
        this.FsName = 'FsName' in params ? params.FsName : null;
        this.Encrypted = 'Encrypted' in params ? params.Encrypted : null;
        this.KmsKeyId = 'KmsKeyId' in params ? params.KmsKeyId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * Tag信息单元
 * @class
 */
class TagInfo extends AbstractModel {

    TagKey: string | null
    
    TagValue: string | null
    
    constructor(){
        super();

        /**
         * 标签键
         */
        this.TagKey = null;

        /**
         * 标签值
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TagKey: string | null;
        TagValue: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeCfsPGroups请求参数结构体
 * @class
 */
class DescribeCfsPGroupsRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * 版本控制-可用区数组
 * @class
 */
class AvailableZone extends AbstractModel {

    Zone: string | null
    
    ZoneId: number | null
    
    ZoneCnName: string | null
    
    Types: Array<AvailableType> | null
    
    ZoneName: string | null
    
    constructor(){
        super();

        /**
         * 可用区名称
         */
        this.Zone = null;

        /**
         * 可用区ID
         */
        this.ZoneId = null;

        /**
         * 可用区中文名称
         */
        this.ZoneCnName = null;

        /**
         * Type数组
         */
        this.Types = null;

        /**
         * 可用区中英文名称
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        ZoneId: number | null;
        ZoneCnName: string | null;
        Types: Array<AvailableType> | null;
        ZoneName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneCnName = 'ZoneCnName' in params ? params.ZoneCnName : null;

        if (params.Types) {
            this.Types = new Array();
            for (let z in params.Types) {
                let obj = new AvailableType();
                obj.deserialize(params.Types[z]);
                this.Types.push(obj);
            }
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * CreateCfsPGroup请求参数结构体
 * @class
 */
class CreateCfsPGroupRequest extends AbstractModel {

    Name: string | null
    
    DescInfo: string | null
    
    constructor(){
        super();

        /**
         * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
         */
        this.Name = null;

        /**
         * 权限组描述信息，1-255个字符
         */
        this.DescInfo = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Name: string | null;
        DescInfo: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;

    }
}

/**
 * DeleteCfsPGroup返回参数结构体
 * @class
 */
class DeleteCfsPGroupResponse extends AbstractModel {

    PGroupId: string | null
    
    AppId: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 用户 ID
         */
        this.AppId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        AppId: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemSizeLimit返回参数结构体
 * @class
 */
class UpdateCfsFileSystemSizeLimitResponse extends AbstractModel {

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
 * DescribeAvailableZoneInfo请求参数结构体
 * @class
 */
class DescribeAvailableZoneInfoRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * 版本控制-区域数组
 * @class
 */
class AvailableRegion extends AbstractModel {

    Region: string | null
    
    RegionName: string | null
    
    RegionStatus: string | null
    
    Zones: Array<AvailableZone> | null
    
    RegionCnName: string | null
    
    constructor(){
        super();

        /**
         * 区域名称，如“ap-beijing”
         */
        this.Region = null;

        /**
         * 区域名称，如“bj”
         */
        this.RegionName = null;

        /**
         * 区域可用情况，当区域内至少有一个可用区处于可售状态时，取值为AVAILABLE，否则为UNAVAILABLE
         */
        this.RegionStatus = null;

        /**
         * 可用区数组
         */
        this.Zones = null;

        /**
         * 区域中文名称，如“广州”
         */
        this.RegionCnName = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Region: string | null;
        RegionName: string | null;
        RegionStatus: string | null;
        Zones: Array<AvailableZone> | null;
        RegionCnName: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionStatus = 'RegionStatus' in params ? params.RegionStatus : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new AvailableZone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RegionCnName = 'RegionCnName' in params ? params.RegionCnName : null;

    }
}

/**
 * CreateCfsFileSystem请求参数结构体
 * @class
 */
class CreateCfsFileSystemRequest extends AbstractModel {

    Zone: string | null
    
    NetInterface: string | null
    
    PGroupId: string | null
    
    Protocol: string | null
    
    StorageType: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    MountIP: string | null
    
    FsName: string | null
    
    ResourceTags: Array<TagInfo> | null
    
    constructor(){
        super();

        /**
         * 可用区名称，例如ap-beijing-1，请参考 [概览](https://cloud.tencent.com/document/product/582/13225) 文档中的地域与可用区列表
         */
        this.Zone = null;

        /**
         * 网络类型，值为 VPC，BASIC；其中 VPC 为私有网络，BASIC 为基础网络
         */
        this.NetInterface = null;

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 文件系统协议类型， 值为 NFS、CIFS; 若留空则默认为 NFS协议
         */
        this.Protocol = null;

        /**
         * 文件系统存储类型，值为 SD ；其中 SD 为标准型存储， HP为性能存储。
         */
        this.StorageType = null;

        /**
         * 私有网络（VPC） ID，若网络类型选择的是VPC，该字段为必填。
         */
        this.VpcId = null;

        /**
         * 子网 ID，若网络类型选择的是VPC，该字段为必填。
         */
        this.SubnetId = null;

        /**
         * 指定IP地址，仅VPC网络支持；若不填写、将在该子网下随机分配 IP
         */
        this.MountIP = null;

        /**
         * 用户自定义文件系统名称
         */
        this.FsName = null;

        /**
         * 文件系统标签
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Zone: string | null;
        NetInterface: string | null;
        PGroupId: string | null;
        Protocol: string | null;
        StorageType: string | null;
        VpcId: string | null;
        SubnetId: string | null;
        MountIP: string | null;
        FsName: string | null;
        ResourceTags: Array<TagInfo> | null;
    }): void {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NetInterface = 'NetInterface' in params ? params.NetInterface : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MountIP = 'MountIP' in params ? params.MountIP : null;
        this.FsName = 'FsName' in params ? params.FsName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfo();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DescribeMountTargets请求参数结构体
 * @class
 */
class DescribeMountTargetsRequest extends AbstractModel {

    FileSystemId: string | null
    
    constructor(){
        super();

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileSystemId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * CreateCfsPGroup返回参数结构体
 * @class
 */
class CreateCfsPGroupResponse extends AbstractModel {

    PGroupId: string | null
    
    Name: string | null
    
    DescInfo: string | null
    
    BindCfsNum: number | null
    
    CDate: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 权限组名字
         */
        this.Name = null;

        /**
         * 权限组描述信息
         */
        this.DescInfo = null;

        /**
         * 已经与该权限组绑定的文件系统个数
         */
        this.BindCfsNum = null;

        /**
         * 权限组创建时间
         */
        this.CDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        Name: string | null;
        DescInfo: string | null;
        BindCfsNum: number | null;
        CDate: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.BindCfsNum = 'BindCfsNum' in params ? params.BindCfsNum : null;
        this.CDate = 'CDate' in params ? params.CDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SignUpCfsService请求参数结构体
 * @class
 */
class SignUpCfsServiceRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeCfsServiceStatus请求参数结构体
 * @class
 */
class DescribeCfsServiceStatusRequest extends AbstractModel {

    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params: {
        
    }): void {
        if (!params) {
            return;
        }

    }
}

/**
 * 权限组数组
 * @class
 */
class PGroupInfo extends AbstractModel {

    PGroupId: string | null
    
    Name: string | null
    
    DescInfo: string | null
    
    CDate: string | null
    
    BindCfsNum: number | null
    
    constructor(){
        super();

        /**
         * 权限组ID
         */
        this.PGroupId = null;

        /**
         * 权限组名称
         */
        this.Name = null;

        /**
         * 描述信息
         */
        this.DescInfo = null;

        /**
         * 创建时间
         */
        this.CDate = null;

        /**
         * 关联文件系统个数
         */
        this.BindCfsNum = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        Name: string | null;
        DescInfo: string | null;
        CDate: string | null;
        BindCfsNum: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.CDate = 'CDate' in params ? params.CDate : null;
        this.BindCfsNum = 'BindCfsNum' in params ? params.BindCfsNum : null;

    }
}

/**
 * SignUpCfsService返回参数结构体
 * @class
 */
class SignUpCfsServiceResponse extends AbstractModel {

    CfsServiceStatus: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 该用户当前 CFS 服务的状态，none 是未开通，creating 是开通中，created 是已开通
         */
        this.CfsServiceStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CfsServiceStatus: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CfsServiceStatus = 'CfsServiceStatus' in params ? params.CfsServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemPGroup请求参数结构体
 * @class
 */
class UpdateCfsFileSystemPGroupRequest extends AbstractModel {

    PGroupId: string | null
    
    FileSystemId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        FileSystemId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DescribeCfsServiceStatus返回参数结构体
 * @class
 */
class DescribeCfsServiceStatusResponse extends AbstractModel {

    CfsServiceStatus: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 该用户当前 CFS 服务的状态，none 为未开通，creating 为开通中，created 为已开通
         */
        this.CfsServiceStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CfsServiceStatus: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CfsServiceStatus = 'CfsServiceStatus' in params ? params.CfsServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCfsRule返回参数结构体
 * @class
 */
class CreateCfsRuleResponse extends AbstractModel {

    RuleId: string | null
    
    PGroupId: string | null
    
    AuthClientIp: string | null
    
    RWPermission: string | null
    
    UserPermission: string | null
    
    Priority: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 规则 ID
         */
        this.RuleId = null;

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 客户端 IP
         */
        this.AuthClientIp = null;

        /**
         * 读写权限
         */
        this.RWPermission = null;

        /**
         * 用户权限
         */
        this.UserPermission = null;

        /**
         * 优先级
         */
        this.Priority = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleId: string | null;
        PGroupId: string | null;
        AuthClientIp: string | null;
        RWPermission: string | null;
        UserPermission: string | null;
        Priority: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 版本控制-协议详情

 * @class
 */
class AvailableProtoStatus extends AbstractModel {

    SaleStatus: string | null
    
    Protocol: string | null
    
    constructor(){
        super();

        /**
         * 售卖状态。可选值有 sale_out 售罄、saling可售、no_saling不可销售
         */
        this.SaleStatus = null;

        /**
         * 协议类型。可选值有 NFS、CIFS
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SaleStatus: string | null;
        Protocol: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SaleStatus = 'SaleStatus' in params ? params.SaleStatus : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeCfsRules请求参数结构体
 * @class
 */
class DescribeCfsRulesRequest extends AbstractModel {

    PGroupId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;

    }
}

/**
 * 权限组规则列表
 * @class
 */
class PGroupRuleInfo extends AbstractModel {

    RuleId: string | null
    
    AuthClientIp: string | null
    
    RWPermission: string | null
    
    UserPermission: string | null
    
    Priority: number | null
    
    constructor(){
        super();

        /**
         * 规则ID
         */
        this.RuleId = null;

        /**
         * 允许访问的客户端IP
         */
        this.AuthClientIp = null;

        /**
         * 读写权限, ro为只读，rw为读写
         */
        this.RWPermission = null;

        /**
         * 用户权限。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。
         */
        this.UserPermission = null;

        /**
         * 规则优先级，1-100。 其中 1 为最高，100为最低
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleId: string | null;
        AuthClientIp: string | null;
        RWPermission: string | null;
        UserPermission: string | null;
        Priority: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AuthClientIp = 'AuthClientIp' in params ? params.AuthClientIp : null;
        this.RWPermission = 'RWPermission' in params ? params.RWPermission : null;
        this.UserPermission = 'UserPermission' in params ? params.UserPermission : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DeleteCfsPGroup请求参数结构体
 * @class
 */
class DeleteCfsPGroupRequest extends AbstractModel {

    PGroupId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;

    }
}

/**
 * 版本控制-类型数组
 * @class
 */
class AvailableType extends AbstractModel {

    Protocols: Array<AvailableProtoStatus> | null
    
    Type: string | null
    
    constructor(){
        super();

        /**
         * 协议与售卖详情
         */
        this.Protocols = null;

        /**
         * 存储类型。可选值有 SD 标准型存储、HP性能型存储
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Protocols: Array<AvailableProtoStatus> | null;
        Type: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Protocols) {
            this.Protocols = new Array();
            for (let z in params.Protocols) {
                let obj = new AvailableProtoStatus();
                obj.deserialize(params.Protocols[z]);
                this.Protocols.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * UpdateCfsFileSystemSizeLimit请求参数结构体
 * @class
 */
class UpdateCfsFileSystemSizeLimitRequest extends AbstractModel {

    FsLimit: number | null
    
    FileSystemId: string | null
    
    constructor(){
        super();

        /**
         * 文件系统容量限制大小，输入范围0-1073741824, 单位为GB；其中输入值为0时，表示不限制文件系统容量。
         */
        this.FsLimit = null;

        /**
         * 文件系统ID
         */
        this.FileSystemId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FsLimit: number | null;
        FileSystemId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FsLimit = 'FsLimit' in params ? params.FsLimit : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;

    }
}

/**
 * DescribeCfsFileSystems请求参数结构体
 * @class
 */
class DescribeCfsFileSystemsRequest extends AbstractModel {

    FileSystemId: string | null
    
    VpcId: string | null
    
    SubnetId: string | null
    
    constructor(){
        super();

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

        /**
         * 私有网络（VPC） ID
         */
        this.VpcId = null;

        /**
         * 子网 ID
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        FileSystemId: string | null;
        VpcId: string | null;
        SubnetId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * UpdateCfsPGroup返回参数结构体
 * @class
 */
class UpdateCfsPGroupResponse extends AbstractModel {

    PGroupId: string | null
    
    Name: string | null
    
    DescInfo: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权限组ID
         */
        this.PGroupId = null;

        /**
         * 权限组名称
         */
        this.Name = null;

        /**
         * 描述信息
         */
        this.DescInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        Name: string | null;
        DescInfo: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DescInfo = 'DescInfo' in params ? params.DescInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCfsRules返回参数结构体
 * @class
 */
class DescribeCfsRulesResponse extends AbstractModel {

    RuleList: Array<PGroupRuleInfo> | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权限组规则列表
         */
        this.RuleList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        RuleList: Array<PGroupRuleInfo> | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new PGroupRuleInfo();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateCfsFileSystemPGroup返回参数结构体
 * @class
 */
class UpdateCfsFileSystemPGroupResponse extends AbstractModel {

    PGroupId: string | null
    
    FileSystemId: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 权限组 ID
         */
        this.PGroupId = null;

        /**
         * 文件系统 ID
         */
        this.FileSystemId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        PGroupId: string | null;
        FileSystemId: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.PGroupId = 'PGroupId' in params ? params.PGroupId : null;
        this.FileSystemId = 'FileSystemId' in params ? params.FileSystemId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

export const Models = {
    DeleteCfsFileSystemRequest: DeleteCfsFileSystemRequest,
    DeleteCfsFileSystemResponse: DeleteCfsFileSystemResponse,
    UpdateCfsRuleRequest: UpdateCfsRuleRequest,
    DeleteMountTargetRequest: DeleteMountTargetRequest,
    CreateCfsRuleRequest: CreateCfsRuleRequest,
    PGroup: PGroup,
    DescribeAvailableZoneInfoResponse: DescribeAvailableZoneInfoResponse,
    UpdateCfsFileSystemNameResponse: UpdateCfsFileSystemNameResponse,
    UpdateCfsFileSystemNameRequest: UpdateCfsFileSystemNameRequest,
    DescribeCfsPGroupsResponse: DescribeCfsPGroupsResponse,
    UpdateCfsPGroupRequest: UpdateCfsPGroupRequest,
    DeleteMountTargetResponse: DeleteMountTargetResponse,
    DescribeMountTargetsResponse: DescribeMountTargetsResponse,
    DeleteCfsRuleResponse: DeleteCfsRuleResponse,
    DeleteCfsRuleRequest: DeleteCfsRuleRequest,
    MountInfo: MountInfo,
    UpdateCfsRuleResponse: UpdateCfsRuleResponse,
    DescribeCfsFileSystemsResponse: DescribeCfsFileSystemsResponse,
    CreateCfsFileSystemResponse: CreateCfsFileSystemResponse,
    FileSystemInfo: FileSystemInfo,
    TagInfo: TagInfo,
    DescribeCfsPGroupsRequest: DescribeCfsPGroupsRequest,
    AvailableZone: AvailableZone,
    CreateCfsPGroupRequest: CreateCfsPGroupRequest,
    DeleteCfsPGroupResponse: DeleteCfsPGroupResponse,
    UpdateCfsFileSystemSizeLimitResponse: UpdateCfsFileSystemSizeLimitResponse,
    DescribeAvailableZoneInfoRequest: DescribeAvailableZoneInfoRequest,
    AvailableRegion: AvailableRegion,
    CreateCfsFileSystemRequest: CreateCfsFileSystemRequest,
    DescribeMountTargetsRequest: DescribeMountTargetsRequest,
    CreateCfsPGroupResponse: CreateCfsPGroupResponse,
    SignUpCfsServiceRequest: SignUpCfsServiceRequest,
    DescribeCfsServiceStatusRequest: DescribeCfsServiceStatusRequest,
    PGroupInfo: PGroupInfo,
    SignUpCfsServiceResponse: SignUpCfsServiceResponse,
    UpdateCfsFileSystemPGroupRequest: UpdateCfsFileSystemPGroupRequest,
    DescribeCfsServiceStatusResponse: DescribeCfsServiceStatusResponse,
    CreateCfsRuleResponse: CreateCfsRuleResponse,
    AvailableProtoStatus: AvailableProtoStatus,
    DescribeCfsRulesRequest: DescribeCfsRulesRequest,
    PGroupRuleInfo: PGroupRuleInfo,
    DeleteCfsPGroupRequest: DeleteCfsPGroupRequest,
    AvailableType: AvailableType,
    UpdateCfsFileSystemSizeLimitRequest: UpdateCfsFileSystemSizeLimitRequest,
    DescribeCfsFileSystemsRequest: DescribeCfsFileSystemsRequest,
    UpdateCfsPGroupResponse: UpdateCfsPGroupResponse,
    DescribeCfsRulesResponse: DescribeCfsRulesResponse,
    UpdateCfsFileSystemPGroupResponse: UpdateCfsFileSystemPGroupResponse,

}
