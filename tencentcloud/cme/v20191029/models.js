"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const abstract_model_1 = require("../../common/abstract_model");
/**
 * 音频流信息。
 * @class
 */
class AudioStreamInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 码率，单位：bps。
         */
        this.Bitrate = null;
        /**
         * 采样率，单位：hz。
         */
        this.SamplingRate = null;
        /**
         * 编码格式。
         */
        this.Codec = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
    }
}
/**
 * DescribeTeams请求参数结构体
 * @class
 */
class DescribeTeamsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队 ID 列表，限30个。
         */
        this.TeamIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamIds = 'TeamIds' in params ? params.TeamIds : null;
    }
}
/**
 * DeleteProject请求参数结构体
 * @class
 */
class DeleteProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 项目 Id。
         */
        this.ProjectId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    }
}
/**
 * ImportMaterial返回参数结构体
 * @class
 */
class ImportMaterialResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材 Id。
         */
        this.MaterialId = null;
        /**
         * 素材预处理任务 ID，如果未指定发起预处理任务则为空。
         */
        this.PreProcessTaskId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.PreProcessTaskId = 'PreProcessTaskId' in params ? params.PreProcessTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTeams返回参数结构体
 * @class
 */
class DescribeTeamsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 团队列表。
         */
        this.TeamSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.TeamSet) {
            this.TeamSet = new Array();
            for (let z in params.TeamSet) {
                let obj = new TeamInfo();
                obj.deserialize(params.TeamSet[z]);
                this.TeamSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTaskDetail返回参数结构体
 * @class
 */
class DescribeTaskDetailResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
         */
        this.Status = null;
        /**
         * 任务进度，取值为：0~100。
         */
        this.Progress = null;
        /**
         * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
         */
        this.ErrCode = null;
        /**
         * 错误信息。
         */
        this.ErrMsg = null;
        /**
         * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>
         */
        this.TaskType = null;
        /**
         * 导出项目输出信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VideoEditProjectOutput = null;
        /**
         * 创建时间，格式按照 ISO 8601 标准表示。
         */
        this.CreateTime = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        if (params.VideoEditProjectOutput) {
            let obj = new VideoEditProjectOutput();
            obj.deserialize(params.VideoEditProjectOutput);
            this.VideoEditProjectOutput = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ExportVideoEditProject请求参数结构体
 * @class
 */
class ExportVideoEditProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 项目 Id。
         */
        this.ProjectId = null;
        /**
         * 导出模板 Id，目前不支持自定义创建，只支持下面的预置模板 Id。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
         */
        this.Definition = null;
        /**
         * 导出目标。
<li>CME：云剪，即导出为云剪素材；</li>
<li>VOD：云点播，即导出为云点播媒资。</li>
         */
        this.ExportDestination = null;
        /**
         * 导出的云剪素材信息。指定 ExportDestination = CME 时有效。
         */
        this.CMEExportInfo = null;
        /**
         * 导出的云点播媒资信息。指定 ExportDestination = VOD 时有效。
         */
        this.VODExportInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExportDestination = 'ExportDestination' in params ? params.ExportDestination : null;
        if (params.CMEExportInfo) {
            let obj = new CMEExportInfo();
            obj.deserialize(params.CMEExportInfo);
            this.CMEExportInfo = obj;
        }
        if (params.VODExportInfo) {
            let obj = new VODExportInfo();
            obj.deserialize(params.VODExportInfo);
            this.VODExportInfo = obj;
        }
    }
}
/**
 * 分类信息
 * @class
 */
class ClassInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 归属者。
         */
        this.Owner = null;
        /**
         * 分类路径。
         */
        this.ClassPath = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
    }
}
/**
 * DeleteMaterial返回参数结构体
 * @class
 */
class DeleteMaterialResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 整型范围
 * @class
 */
class IntegerRange extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 按整形代表值的下限检索。
         */
        this.LowerBound = null;
        /**
         * 按整形代表值的上限检索。
         */
        this.UpperBound = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LowerBound = 'LowerBound' in params ? params.LowerBound : null;
        this.UpperBound = 'UpperBound' in params ? params.UpperBound : null;
    }
}
/**
 * SearchMaterial请求参数结构体
 * @class
 */
class SearchMaterialRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 指定搜索空间，数组长度不得超过5。
         */
        this.SearchScopes = null;
        /**
         * 素材类型，取值：
<li>AUDIO：音频；</li>
<li>VIDEO：视频 ；</li>
<li>IMAGE：图片。</li>
         */
        this.MaterialTypes = null;
        /**
         * 搜索文本，模糊匹配素材名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：15个字符。
         */
        this.Text = null;
        /**
         * 按画质检索，取值为：LD/SD/HD/FHD/2K/4K。
         */
        this.Resolution = null;
        /**
         * 按素材时长检索，单位s。
         */
        this.DurationRange = null;
        /**
         * 按照素材创建时间检索。
         */
        this.CreateTimeRange = null;
        /**
         * 按标签检索，填入检索的标签名。
         */
        this.Tags = null;
        /**
         * 排序方式。Sort.Field 可选值：CreateTime。指定 Text 搜索时，将根据匹配度排序，该字段无效。
         */
        this.Sort = null;
        /**
         * 偏移量。默认值：0。
         */
        this.Offset = null;
        /**
         * 返回记录条数，默认值：50。
         */
        this.Limit = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.SearchScopes) {
            this.SearchScopes = new Array();
            for (let z in params.SearchScopes) {
                let obj = new SearchScope();
                obj.deserialize(params.SearchScopes[z]);
                this.SearchScopes.push(obj);
            }
        }
        this.MaterialTypes = 'MaterialTypes' in params ? params.MaterialTypes : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        if (params.DurationRange) {
            let obj = new IntegerRange();
            obj.deserialize(params.DurationRange);
            this.DurationRange = obj;
        }
        if (params.CreateTimeRange) {
            let obj = new TimeRange();
            obj.deserialize(params.CreateTimeRange);
            this.CreateTimeRange = obj;
        }
        this.Tags = 'Tags' in params ? params.Tags : null;
        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort);
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * DeleteTeam返回参数结构体
 * @class
 */
class DeleteTeamResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * RevokeResourceAuthorization返回参数结构体
 * @class
 */
class RevokeResourceAuthorizationResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合搜索条件的记录总数。
         */
        this.TotalCount = null;
        /**
         * 任务基础信息列表。
         */
        this.TaskBaseInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.TaskBaseInfoSet) {
            this.TaskBaseInfoSet = new Array();
            for (let z in params.TaskBaseInfoSet) {
                let obj = new TaskBaseInfo();
                obj.deserialize(params.TaskBaseInfoSet[z]);
                this.TaskBaseInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 项目信息。
 * @class
 */
class ProjectInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 项目 Id。
         */
        this.ProjectId = null;
        /**
         * 项目名称。
         */
        this.Name = null;
        /**
         * 画布宽高比。
         */
        this.AspectRatio = null;
        /**
         * 项目类别。
         */
        this.Category = null;
        /**
         * 归属者。
         */
        this.Owner = null;
        /**
         * 项目封面图片地址。
         */
        this.CoverUrl = null;
        /**
         * 项目创建时间，格式按照 ISO 8601 标准表示。
         */
        this.CreateTime = null;
        /**
         * 项目更新时间，格式按照 ISO 8601 标准表示。
         */
        this.UpdateTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        this.Category = 'Category' in params ? params.Category : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
    }
}
/**
 * DeleteTeam请求参数结构体
 * @class
 */
class DeleteTeamRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问平台。
         */
        this.Platform = null;
        /**
         * 要删除的团队  ID。
         */
        this.TeamId = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * ModifyMaterial返回参数结构体
 * @class
 */
class ModifyMaterialResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 链接类型的素材信息
 * @class
 */
class LinkMaterial extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 链接类型取值:
<li>CLASS: 分类链接;</li>
<li> MATERIAL：素材链接。</li>
         */
        this.LinkType = null;
        /**
         * 链接状态取值：
<li> Normal：正常 ；</li>
<li>NotFound：链接目标不存在；</li> <li>Forbidden：无权限。</li>
         */
        this.LinkStatus = null;
        /**
         * 素材链接详细信息，当LinkType="MATERIAL"时有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LinkMaterialInfo = null;
        /**
         * 分类链接目标信息，当LinkType=“CLASS”时有值。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LinkClassInfo = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkType = 'LinkType' in params ? params.LinkType : null;
        this.LinkStatus = 'LinkStatus' in params ? params.LinkStatus : null;
        if (params.LinkMaterialInfo) {
            let obj = new LinkMaterialInfo();
            obj.deserialize(params.LinkMaterialInfo);
            this.LinkMaterialInfo = obj;
        }
        if (params.LinkClassInfo) {
            let obj = new ClassInfo();
            obj.deserialize(params.LinkClassInfo);
            this.LinkClassInfo = obj;
        }
    }
}
/**
 * FlattenListMedia请求参数结构体
 * @class
 */
class FlattenListMediaRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 素材分类路径，例如填写"/a/b"，则代表平铺该分类路径下及其子分类路径下的素材信息。
         */
        this.ClassPath = null;
        /**
         * 素材路径的归属者。
         */
        this.Owner = null;
        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;
        /**
         * 返回记录条数，默认值：10，最大值：50。
         */
        this.Limit = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * 音频素材信息
 * @class
 */
class AudioMaterial extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材元信息。
         */
        this.MetaData = null;
        /**
         * 素材媒体文件的播放 URL 地址。
         */
        this.MaterialUrl = null;
        /**
         * 素材媒体文件的封面图片地址。
         */
        this.CoverUrl = null;
        /**
         * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MaterialStatus = null;
        /**
         * 素材媒体文件的原始 URL 地址。
         */
        this.OriginalUrl = null;
        /**
         * 云点播媒资 FileId。
         */
        this.VodFileId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData);
            this.MetaData = obj;
        }
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        if (params.MaterialStatus) {
            let obj = new MaterialStatus();
            obj.deserialize(params.MaterialStatus);
            this.MaterialStatus = obj;
        }
        this.OriginalUrl = 'OriginalUrl' in params ? params.OriginalUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
    }
}
/**
 * 添加的团队成员信息
 * @class
 */
class AddMemberInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 团队成员 ID。
         */
        this.MemberId = null;
        /**
         * 团队成员备注。
         */
        this.Remark = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
    }
}
/**
 * 用于描述资源的归属实体。
 * @class
 */
class Entity extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
         */
        this.Type = null;
        /**
         * Id，当 Type=PERSON，取值为用户 Id，当 Type=TEAM，取值为团队 Id。
         */
        this.Id = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
    }
}
/**
 * 团队信息
 * @class
 */
class TeamInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 团队 ID。
         */
        this.TeamId = null;
        /**
         * 团队名称。
         */
        this.Name = null;
        /**
         * 团队成员个数
         */
        this.MemberCount = null;
        /**
         * 团队创建时间，格式按照 ISO 8601 标准表示。
         */
        this.CreateTime = null;
        /**
         * 团队最后更新时间，格式按照 ISO 8601 标准表示。
         */
        this.UpdateTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
    }
}
/**
 * ExportVideoByEditorTrackData请求参数结构体
 * @class
 */
class ExportVideoByEditorTrackDataRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 导出模板 Id，目前不支持自定义创建，只支持下面的预置模板 Id。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
         */
        this.Definition = null;
        /**
         * 导出目标。
<li>CME：云剪，即导出为云剪素材；</li>
<li>VOD：云点播，即导出为云点播媒资。</li>
         */
        this.ExportDestination = null;
        /**
         * 在线编辑轨道数据。
         */
        this.TrackData = null;
        /**
         * 导出的云剪素材信息。指定 ExportDestination = CME 时有效。
         */
        this.CMEExportInfo = null;
        /**
         * 导出的云点播媒资信息。指定 ExportDestination = VOD 时有效。
         */
        this.VODExportInfo = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExportDestination = 'ExportDestination' in params ? params.ExportDestination : null;
        this.TrackData = 'TrackData' in params ? params.TrackData : null;
        if (params.CMEExportInfo) {
            let obj = new CMEExportInfo();
            obj.deserialize(params.CMEExportInfo);
            this.CMEExportInfo = obj;
        }
        if (params.VODExportInfo) {
            let obj = new VODExportInfo();
            obj.deserialize(params.VODExportInfo);
            this.VODExportInfo = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * 素材标签信息
 * @class
 */
class MaterialTagInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 标签类型，取值为：
<li>PRESET：预置标签；</li>
         */
        this.Type = null;
        /**
         * 标签 Id 。当标签类型为 PRESET 时，标签 Id 为预置标签 Id 。
         */
        this.Id = null;
        /**
         * 标签名称。
         */
        this.Name = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
    }
}
/**
 * 项目导出信息。
 * @class
 */
class VideoEditProjectOutput extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 云点播媒资 FileId。
         */
        this.VodFileId = null;
        /**
         * 导出的媒资 URL。
         */
        this.URL = null;
        /**
         * 元信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MetaData = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
        this.URL = 'URL' in params ? params.URL : null;
        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData);
            this.MetaData = obj;
        }
    }
}
/**
 * CreateProject请求参数结构体
 * @class
 */
class CreateProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 项目类别，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
         */
        this.Category = null;
        /**
         * 项目名称，不可超过30个字符。
         */
        this.Name = null;
        /**
         * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16。</li>
         */
        this.AspectRatio = null;
        /**
         * 归属者。
         */
        this.Owner = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
    }
}
/**
 * ModifyMaterial请求参数结构体
 * @class
 */
class ModifyMaterialRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 素材 Id。
         */
        this.MaterialId = null;
        /**
         * 素材归属。
         */
        this.Owner = null;
        /**
         * 素材名称，不能超过30个字符。
         */
        this.Name = null;
        /**
         * 素材分类路径，例如填写"/a/b"，则代表该素材存储的路径为"/a/b"。
         */
        this.ClassPath = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * 授权者
 * @class
 */
class Authorizer extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 授权者类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
         */
        this.Type = null;
        /**
         * Id，当 Type=PERSON，取值为用户 Id。当Type=TEAM，取值为团队 ID。
         */
        this.Id = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
    }
}
/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 项目 Id。
         */
        this.ProjectId = null;
        /**
         * 任务类型集合，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>
         */
        this.TaskTypeSet = null;
        /**
         * 任务状态集合，取值有：
<li>PROCESSING：处理中；</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
         */
        this.StatusSet = null;
        /**
         * 分页返回的起始偏移量，默认值：0。
         */
        this.Offset = null;
        /**
         * 分页返回的记录条数，默认值：10。
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.TaskTypeSet = 'TaskTypeSet' in params ? params.TaskTypeSet : null;
        this.StatusSet = 'StatusSet' in params ? params.StatusSet : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * 时间范围
 * @class
 */
class TimeRange extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 开始时间，使用 ISO 日期格式。
         */
        this.StartTime = null;
        /**
         * 结束时间，使用 ISO 日期格式。
         */
        this.EndTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
    }
}
/**
 * DescribeLoginStatus请求参数结构体
 * @class
 */
class DescribeLoginStatusRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 用户 Id 列表，N 从 0 开始取值，最大 19。
         */
        this.UserIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
    }
}
/**
 * DeleteLoginStatus返回参数结构体
 * @class
 */
class DeleteLoginStatusResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 用于描述资源
 * @class
 */
class Resource extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 类型，取值有：
<li>MATERIAL：素材。</li>
<li>CLASS：分类。</li>
         */
        this.Type = null;
        /**
         * 资源 Id，当 Type 为 MATERIAL 时，取值为素材 Id；当 Type 为 CLASS 时，取值为分类路径 ClassPath。
         */
        this.Id = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
    }
}
/**
 * CreateLink返回参数结构体
 * @class
 */
class CreateLinkResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 新建链接的素材 Id。
         */
        this.MaterialId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListMedia返回参数结构体
 * @class
 */
class ListMediaResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合条件的素材记录总数。
         */
        this.MaterialTotalCount = null;
        /**
         * 浏览分类路径下的素材列表信息。
         */
        this.MaterialInfoSet = null;
        /**
         * 浏览分类路径下的一级子类。
         */
        this.ClassInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialTotalCount = 'MaterialTotalCount' in params ? params.MaterialTotalCount : null;
        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }
        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new ClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * SearchMaterial返回参数结构体
 * @class
 */
class SearchMaterialResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合记录总条数。
         */
        this.TotalCount = null;
        /**
         * 素材信息，仅返回基础信息。
         */
        this.MaterialInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeJoinTeams请求参数结构体
 * @class
 */
class DescribeJoinTeamsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队成员　ID。
         */
        this.MemberId = null;
        /**
         * 分页偏移量，默认值：0
         */
        this.Offset = null;
        /**
         * 返回记录条数，默认值：30，最大值：30。
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * DeleteMaterial请求参数结构体
 * @class
 */
class DeleteMaterialRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 素材 Id。
         */
        this.MaterialId = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * CreateProject返回参数结构体
 * @class
 */
class CreateProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 项目 Id。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteProject返回参数结构体
 * @class
 */
class DeleteProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteClass请求参数结构体
 * @class
 */
class DeleteClassRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 归属者。
         */
        this.Owner = null;
        /**
         * 分类路径。
         */
        this.ClassPath = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * CreateLink请求参数结构体
 * @class
 */
class CreateLinkRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 链接类型，取值有:
<li>CLASS: 分类链接；</li>
<li> MATERIAL：素材链接。</li>
         */
        this.Type = null;
        /**
         * 链接名称，不能超过30个字符。
         */
        this.Name = null;
        /**
         * 链接归属实体。
         */
        this.Owner = null;
        /**
         * 目标资源Id。取值：
<li>当 Type 为 MATERIAL 时填素材 ID；</li>
<li>当 Type 为 CLASS 时填写分类路径。</li>
         */
        this.DestinationId = null;
        /**
         * 目标资源归属者。
         */
        this.DestinationOwner = null;
        /**
         * 链接的分类路径，如填"/a/b"则代表链接属于该分类路径，不填则默认为根路径。
         */
        this.ClassPath = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.DestinationId = 'DestinationId' in params ? params.DestinationId : null;
        if (params.DestinationOwner) {
            let obj = new Entity();
            obj.deserialize(params.DestinationOwner);
            this.DestinationOwner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * CreateClass请求参数结构体
 * @class
 */
class CreateClassRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 归属者。
         */
        this.Owner = null;
        /**
         * 分类路径。
         */
        this.ClassPath = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * DescribeMaterials返回参数结构体
 * @class
 */
class DescribeMaterialsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材列表信息。
         */
        this.MaterialInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GrantResourceAuthorization返回参数结构体
 * @class
 */
class GrantResourceAuthorizationResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 云剪导出信息。
 * @class
 */
class CMEExportInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 导出的归属者。
         */
        this.Owner = null;
        /**
         * 导出的素材名称，不得超过30个字符。
         */
        this.Name = null;
        /**
         * 导出的素材信息，不得超过50个字符。
         */
        this.Description = null;
        /**
         * 导出的素材分类路径，长度不能超过15字符。
         */
        this.ClassPath = null;
        /**
         * 导出的素材标签，单个标签不得超过10个字符。
         */
        this.TagSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
    }
}
/**
 * ImportMediaToProject请求参数结构体
 * @class
 */
class ImportMediaToProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 项目 Id。
         */
        this.ProjectId = null;
        /**
         * 云点播媒资 FileId。
         */
        this.VodFileId = null;
        /**
         * 素材名称，不能超过30个字符。
         */
        this.Name = null;
        /**
         * 素材预处理任务模板 ID，取值：
<li>10：进行编辑预处理。</li>
注意：如果填0则不进行处理。
         */
        this.PreProcessDefinition = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PreProcessDefinition = 'PreProcessDefinition' in params ? params.PreProcessDefinition : null;
    }
}
/**
 * 云点播导出信息。
 * @class
 */
class VODExportInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 导出的媒资名称。
         */
        this.Name = null;
        /**
         * 导出的媒资分类 Id。
         */
        this.ClassId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
    }
}
/**
 * 排序
 * @class
 */
class SortBy extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 排序字段。
         */
        this.Field = null;
        /**
         * 排序方式，可选值：Asc（升序）、Desc（降序），默认降序。
         */
        this.Order = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;
    }
}
/**
 * 图片素材信息
 * @class
 */
class ImageMaterial extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 图片高度，单位：px。
         */
        this.Height = null;
        /**
         * 图片宽度，单位：px。
         */
        this.Width = null;
        /**
         * 素材媒体文件的展示 URL 地址。
         */
        this.MaterialUrl = null;
        /**
         * 图片大小，单位：字节。
         */
        this.Size = null;
        /**
         * 素材媒体文件的原始 URL 地址。
         */
        this.OriginalUrl = null;
        /**
         * 云点播媒资 FileId。
         */
        this.VodFileId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.OriginalUrl = 'OriginalUrl' in params ? params.OriginalUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
    }
}
/**
 * DescribeClass请求参数结构体
 * @class
 */
class DescribeClassRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 归属者。
         */
        this.Owner = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * MoveClass请求参数结构体
 * @class
 */
class MoveClassRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 归属者。
         */
        this.Owner = null;
        /**
         * 源分类路径。
         */
        this.SourceClassPath = null;
        /**
         * 目标分类路径。
         */
        this.DestinationClassPath = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.SourceClassPath = 'SourceClassPath' in params ? params.SourceClassPath : null;
        this.DestinationClassPath = 'DestinationClassPath' in params ? params.DestinationClassPath : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * DeleteTeamMembers返回参数结构体
 * @class
 */
class DeleteTeamMembersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * MoveClass返回参数结构体
 * @class
 */
class MoveClassResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ImportMediaToProject返回参数结构体
 * @class
 */
class ImportMediaToProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材 Id。
         */
        this.MaterialId = null;
        /**
         * 素材预处理任务 ID，如果未指定发起预处理任务则为空。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyTeamMember返回参数结构体
 * @class
 */
class ModifyTeamMemberResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTeamMembers返回参数结构体
 * @class
 */
class DescribeTeamMembersResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合条件的记录总数。
         */
        this.TotalCount = null;
        /**
         * 团队成员列表。
         */
        this.MemberSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.MemberSet) {
            this.MemberSet = new Array();
            for (let z in params.MemberSet) {
                let obj = new TeamMemberInfo();
                obj.deserialize(params.MemberSet[z]);
                this.MemberSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * AddTeamMember返回参数结构体
 * @class
 */
class AddTeamMemberResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * CreateTeam返回参数结构体
 * @class
 */
class CreateTeamResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 创建的团队 ID。
         */
        this.TeamId = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ModifyTeam请求参数结构体
 * @class
 */
class ModifyTeamRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队 ID。
         */
        this.TeamId = null;
        /**
         * 团队名称，不能超过 30 个字符。
         */
        this.Name = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * ModifyTeamMember请求参数结构体
 * @class
 */
class ModifyTeamMemberRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队 ID。
         */
        this.TeamId = null;
        /**
         * 团队成员 ID。
         */
        this.MemberId = null;
        /**
         * 成员备注，允许设置备注为空，不为空时长度不能超过15个字符。
         */
        this.Remark = null;
        /**
         * 成员角色，取值：
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
         */
        this.Role = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * CreateTeam请求参数结构体
 * @class
 */
class CreateTeamRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队名称，限30个字符。
         */
        this.Name = null;
        /**
         * 团队所有者，指定用户 ID。
         */
        this.OwnerId = null;
        /**
         * 团队所有者的备注，限30个字符。
         */
        this.OwnerRemark = null;
        /**
         * 自定义团队 ID。创建后不可修改，限20个英文字符及"-"。同时不能以 cmetid_开头。不填会生成默认团队 ID。
         */
        this.TeamId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OwnerId = 'OwnerId' in params ? params.OwnerId : null;
        this.OwnerRemark = 'OwnerRemark' in params ? params.OwnerRemark : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
    }
}
/**
 * 素材基本信息。
 * @class
 */
class MaterialBasicInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材 Id。
         */
        this.MaterialId = null;
        /**
         * 素材类型，取值为：音频（AUDIO）、视频（VIDEO）、图片（IMAGE）、链接（LINK）、字幕 （SUBTITLE）、转场（TRANSITION）、滤镜（FILTER）、文本文字（TEXT）、图文动效（TEXT_IMAGE）。
         */
        this.MaterialType = null;
        /**
         * 素材归属实体。
         */
        this.Owner = null;
        /**
         * 素材名称。
         */
        this.Name = null;
        /**
         * 素材文件的创建时间，使用 ISO 日期格式。
         */
        this.CreateTime = null;
        /**
         * 素材文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 ISO 日期格式。
         */
        this.UpdateTime = null;
        /**
         * 素材的分类目录路径。
         */
        this.ClassPath = null;
        /**
         * 素材绑定的标签信息列表 。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TagInfoSet = null;
        /**
         * 素材媒体文件的预览图。
         */
        this.PreviewUrl = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaterialId = 'MaterialId' in params ? params.MaterialId : null;
        this.MaterialType = 'MaterialType' in params ? params.MaterialType : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        if (params.TagInfoSet) {
            this.TagInfoSet = new Array();
            for (let z in params.TagInfoSet) {
                let obj = new MaterialTagInfo();
                obj.deserialize(params.TagInfoSet[z]);
                this.TagInfoSet.push(obj);
            }
        }
        this.PreviewUrl = 'PreviewUrl' in params ? params.PreviewUrl : null;
    }
}
/**
 * 加入的团队信息
 * @class
 */
class JoinTeamInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 团队 ID。
         */
        this.TeamId = null;
        /**
         * 团队名称。
         */
        this.Name = null;
        /**
         * 团队成员个数
         */
        this.MemberCount = null;
        /**
         * 成员在团队中的角色，取值有：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
         */
        this.Role = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;
        this.Role = 'Role' in params ? params.Role : null;
    }
}
/**
 * DescribeResourceAuthorization请求参数结构体
 * @class
 */
class DescribeResourceAuthorizationRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 归属者。
         */
        this.Owner = null;
        /**
         * 资源。
         */
        this.Resource = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        if (params.Resource) {
            let obj = new Resource();
            obj.deserialize(params.Resource);
            this.Resource = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * CreateClass返回参数结构体
 * @class
 */
class CreateClassResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 视频流信息。
 * @class
 */
class VideoStreamInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 码率，单位：bps。
         */
        this.Bitrate = null;
        /**
         * 高度，单位：px。
         */
        this.Height = null;
        /**
         * 宽度，单位：px。
         */
        this.Width = null;
        /**
         * 编码格式。
         */
        this.Codec = null;
        /**
         * 帧率，单位：hz。
         */
        this.Fps = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
    }
}
/**
 * AddTeamMember请求参数结构体
 * @class
 */
class AddTeamMemberRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队 ID。
         */
        this.TeamId = null;
        /**
         * 要添加的成员列表，一次最多添加30个成员。
         */
        this.TeamMembers = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        if (params.TeamMembers) {
            this.TeamMembers = new Array();
            for (let z in params.TeamMembers) {
                let obj = new AddMemberInfo();
                obj.deserialize(params.TeamMembers[z]);
                this.TeamMembers.push(obj);
            }
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * ExportVideoEditProject返回参数结构体
 * @class
 */
class ExportVideoEditProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务 Id。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ListMedia请求参数结构体
 * @class
 */
class ListMediaRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 素材分类路径，例如填写"/a/b"，则代表浏览该分类路径下的素材和子分类信息。
         */
        this.ClassPath = null;
        /**
         * 素材和分类的归属者。
         */
        this.Owner = null;
        /**
         * 分页偏移量，默认值：0。
         */
        this.Offset = null;
        /**
         * 返回记录条数，默认值：10，最大值：50。
         */
        this.Limit = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * ModifyTeam返回参数结构体
 * @class
 */
class ModifyTeamResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DeleteLoginStatus请求参数结构体
 * @class
 */
class DeleteLoginStatusRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 用户 Id 列表，N 从 0 开始取值，最大 19。
         */
        this.UserIds = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
    }
}
/**
 * DeleteTeamMembers请求参数结构体
 * @class
 */
class DeleteTeamMembersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队 ID。
         */
        this.TeamId = null;
        /**
         * 要删除的成员列表。
         */
        this.MemberIds = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * DescribeSharedSpace返回参数结构体
 * @class
 */
class DescribeSharedSpaceResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 查询到的共享空间总数。
         */
        this.TotalCount = null;
        /**
         * 各个共享空间对应的授权者信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AuthorizerSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.AuthorizerSet) {
            this.AuthorizerSet = new Array();
            for (let z in params.AuthorizerSet) {
                let obj = new Authorizer();
                obj.deserialize(params.AuthorizerSet[z]);
                this.AuthorizerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 搜索空间
 * @class
 */
class SearchScope extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 分类路径归属。
         */
        this.Owner = null;
        /**
         * 按分类路径检索。 不填则默认按根分类路径检索。
         */
        this.ClassPath = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
    }
}
/**
 * 视频素材信息
 * @class
 */
class VideoMaterial extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材元信息。
         */
        this.MetaData = null;
        /**
         * 雪碧图信息。
         */
        this.ImageSpriteInfo = null;
        /**
         * 素材媒体文件的播放 URL 地址。
         */
        this.MaterialUrl = null;
        /**
         * 素材媒体文件的封面图片地址。
         */
        this.CoverUrl = null;
        /**
         * 媒体文件分辨率。取值为：LD/SD/HD/FHD/2K/4K。
         */
        this.Resolution = null;
        /**
         * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MaterialStatus = null;
        /**
         * 素材媒体文件的原始 URL 地址。
         */
        this.OriginalUrl = null;
        /**
         * 云点播媒资 FileId。
         */
        this.VodFileId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData);
            this.MetaData = obj;
        }
        if (params.ImageSpriteInfo) {
            let obj = new MediaImageSpriteInfo();
            obj.deserialize(params.ImageSpriteInfo);
            this.ImageSpriteInfo = obj;
        }
        this.MaterialUrl = 'MaterialUrl' in params ? params.MaterialUrl : null;
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        if (params.MaterialStatus) {
            let obj = new MaterialStatus();
            obj.deserialize(params.MaterialStatus);
            this.MaterialStatus = obj;
        }
        this.OriginalUrl = 'OriginalUrl' in params ? params.OriginalUrl : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
    }
}
/**
 * DescribeResourceAuthorization返回参数结构体
 * @class
 */
class DescribeResourceAuthorizationResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合条件的资源授权记录总数。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.TotalCount = null;
        /**
         * 授权信息列表。
         */
        this.AuthorizationInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.AuthorizationInfoSet) {
            this.AuthorizationInfoSet = new Array();
            for (let z in params.AuthorizationInfoSet) {
                let obj = new AuthorizationInfo();
                obj.deserialize(params.AuthorizationInfoSet[z]);
                this.AuthorizationInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * FlattenListMedia返回参数结构体
 * @class
 */
class FlattenListMediaResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合条件的记录总数。
         */
        this.TotalCount = null;
        /**
         * 该分类路径下及其子分类下的所有素材。
         */
        this.MaterialInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.MaterialInfoSet) {
            this.MaterialInfoSet = new Array();
            for (let z in params.MaterialInfoSet) {
                let obj = new MaterialInfo();
                obj.deserialize(params.MaterialInfoSet[z]);
                this.MaterialInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 项目 Id 列表，N 从 0 开始取值，最大 19。
         */
        this.ProjectIds = null;
        /**
         * 画布宽高比集合。
         */
        this.AspectRatioSet = null;
        /**
         * 项目类别集合。
         */
        this.CategorySet = null;
        /**
         * 列表排序，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>
         */
        this.Sort = null;
        /**
         * 项目归属者。
         */
        this.Owner = null;
        /**
         * 分页返回的起始偏移量，默认值：0。
         */
        this.Offset = null;
        /**
         * 分页返回的记录条数，默认值：10。
         */
        this.Limit = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.AspectRatioSet = 'AspectRatioSet' in params ? params.AspectRatioSet : null;
        this.CategorySet = 'CategorySet' in params ? params.CategorySet : null;
        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort);
            this.Sort = obj;
        }
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
    }
}
/**
 * DescribeLoginStatus返回参数结构体
 * @class
 */
class DescribeLoginStatusResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户登录状态列表。
         */
        this.LoginStatusInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.LoginStatusInfoSet) {
            this.LoginStatusInfoSet = new Array();
            for (let z in params.LoginStatusInfoSet) {
                let obj = new LoginStatusInfo();
                obj.deserialize(params.LoginStatusInfoSet[z]);
                this.LoginStatusInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 团队成员信息
 * @class
 */
class TeamMemberInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 团队成员 ID。
         */
        this.MemberId = null;
        /**
         * 团队成员备注。
         */
        this.Remark = null;
        /**
         * 团队成员角色，取值：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
         */
        this.Role = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Role = 'Role' in params ? params.Role : null;
    }
}
/**
 * DescribeJoinTeams返回参数结构体
 * @class
 */
class DescribeJoinTeamsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合条件的记录总数。
         */
        this.TotalCount = null;
        /**
         * 团队列表
         */
        this.TeamSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.TeamSet) {
            this.TeamSet = new Array();
            for (let z in params.TeamSet) {
                let obj = new JoinTeamInfo();
                obj.deserialize(params.TeamSet[z]);
                this.TeamSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeTeamMembers请求参数结构体
 * @class
 */
class DescribeTeamMembersRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 团队 ID。
         */
        this.TeamId = null;
        /**
         * 成员 ID 列表，限指定30个指定成员。
         */
        this.MemberIds = null;
        /**
         * 分页偏移量，默认值：0
         */
        this.Offset = null;
        /**
         * 返回记录条数，默认值：30，最大值：30。
         */
        this.Limit = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.MemberIds = 'MemberIds' in params ? params.MemberIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * 素材的状态，目前仅包含素材编辑可用状态。
 * @class
 */
class MaterialStatus extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材编辑可用状态，取值有：
<li>NORMAL：正常，可直接用于编辑；</li>
<li>ABNORMAL : 异常，不可用于编辑；</li>
<li>PROCESSING：处理中，暂不可用于编辑。</li>
         */
        this.EditorUsableStatus = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EditorUsableStatus = 'EditorUsableStatus' in params ? params.EditorUsableStatus : null;
    }
}
/**
 * 雪碧图
 * @class
 */
class MediaImageSpriteInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 雪碧图小图的高度。
         */
        this.Height = null;
        /**
         * 雪碧图小图的宽度。
         */
        this.Width = null;
        /**
         * 雪碧图小图的总数量。
         */
        this.TotalCount = null;
        /**
         * 截取雪碧图输出的地址。
         */
        this.ImageUrlSet = null;
        /**
         * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
         */
        this.WebVttUrl = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImageUrlSet = 'ImageUrlSet' in params ? params.ImageUrlSet : null;
        this.WebVttUrl = 'WebVttUrl' in params ? params.WebVttUrl : null;
    }
}
/**
 * 资源权限信息
 * @class
 */
class AuthorizationInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 被授权者实体。
         */
        this.Authorizee = null;
        /**
         * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
         */
        this.PermissionSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.Authorizee) {
            let obj = new Entity();
            obj.deserialize(params.Authorizee);
            this.Authorizee = obj;
        }
        this.PermissionSet = 'PermissionSet' in params ? params.PermissionSet : null;
    }
}
/**
 * ModifyProject返回参数结构体
 * @class
 */
class ModifyProjectResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * RevokeResourceAuthorization请求参数结构体
 * @class
 */
class RevokeResourceAuthorizationRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 资源所属实体。
         */
        this.Owner = null;
        /**
         * 被授权资源。
         */
        this.Resources = null;
        /**
         * 被授权目标实体。
         */
        this.Authorizees = null;
        /**
         * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
         */
        this.Permissions = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        if (params.Authorizees) {
            this.Authorizees = new Array();
            for (let z in params.Authorizees) {
                let obj = new Entity();
                obj.deserialize(params.Authorizees[z]);
                this.Authorizees.push(obj);
            }
        }
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * DescribeTaskDetail请求参数结构体
 * @class
 */
class DescribeTaskDetailRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 任务 Id。
         */
        this.TaskId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
    }
}
/**
 * ModifyProject请求参数结构体
 * @class
 */
class ModifyProjectRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 项目 Id。
         */
        this.ProjectId = null;
        /**
         * 项目名称，不可超过30个字符。
         */
        this.Name = null;
        /**
         * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16。</li>
         */
        this.AspectRatio = null;
        /**
         * 归属者。
         */
        this.Owner = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AspectRatio = 'AspectRatio' in params ? params.AspectRatio : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
    }
}
/**
 * 素材详情信息
 * @class
 */
class MaterialInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材基本信息。
         */
        this.BasicInfo = null;
        /**
         * 视频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VideoMaterial = null;
        /**
         * 音频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AudioMaterial = null;
        /**
         * 图片素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageMaterial = null;
        /**
         * 链接素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.LinkMaterial = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.BasicInfo) {
            let obj = new MaterialBasicInfo();
            obj.deserialize(params.BasicInfo);
            this.BasicInfo = obj;
        }
        if (params.VideoMaterial) {
            let obj = new VideoMaterial();
            obj.deserialize(params.VideoMaterial);
            this.VideoMaterial = obj;
        }
        if (params.AudioMaterial) {
            let obj = new AudioMaterial();
            obj.deserialize(params.AudioMaterial);
            this.AudioMaterial = obj;
        }
        if (params.ImageMaterial) {
            let obj = new ImageMaterial();
            obj.deserialize(params.ImageMaterial);
            this.ImageMaterial = obj;
        }
        if (params.LinkMaterial) {
            let obj = new LinkMaterial();
            obj.deserialize(params.LinkMaterial);
            this.LinkMaterial = obj;
        }
    }
}
/**
 * 登录态信息
 * @class
 */
class LoginStatusInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 用户 Id。
         */
        this.UserId = null;
        /**
         * 用户登录状态。
<li>Online：在线；</li>
<li>Offline：离线。</li>
         */
        this.Status = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Status = 'Status' in params ? params.Status : null;
    }
}
/**
 * DescribeClass返回参数结构体
 * @class
 */
class DescribeClassResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 分类信息列表。
         */
        this.ClassInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.ClassInfoSet) {
            this.ClassInfoSet = new Array();
            for (let z in params.ClassInfoSet) {
                let obj = new ClassInfo();
                obj.deserialize(params.ClassInfoSet[z]);
                this.ClassInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * 文件元信息。
 * @class
 */
class MediaMetaData extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 大小。
         */
        this.Size = null;
        /**
         * 容器类型。
         */
        this.Container = null;
        /**
         * 视频流码率平均值与音频流码率平均值之和，单位：bps。
         */
        this.Bitrate = null;
        /**
         * 视频流高度的最大值，单位：px。
         */
        this.Height = null;
        /**
         * 视频流宽度的最大值，单位：px。
         */
        this.Width = null;
        /**
         * 时长，单位：秒。
         */
        this.Duration = null;
        /**
         * 视频拍摄时的选择角度，单位：度
         */
        this.Rotate = null;
        /**
         * 视频流信息。
         */
        this.VideoStreamInfoSet = null;
        /**
         * 音频流信息。
         */
        this.AudioStreamInfoSet = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        if (params.VideoStreamInfoSet) {
            this.VideoStreamInfoSet = new Array();
            for (let z in params.VideoStreamInfoSet) {
                let obj = new VideoStreamInfo();
                obj.deserialize(params.VideoStreamInfoSet[z]);
                this.VideoStreamInfoSet.push(obj);
            }
        }
        if (params.AudioStreamInfoSet) {
            this.AudioStreamInfoSet = new Array();
            for (let z in params.AudioStreamInfoSet) {
                let obj = new AudioStreamInfo();
                obj.deserialize(params.AudioStreamInfoSet[z]);
                this.AudioStreamInfoSet.push(obj);
            }
        }
    }
}
/**
 * DescribeSharedSpace请求参数结构体
 * @class
 */
class DescribeSharedSpaceRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 被授权目标实体。
         */
        this.Authorizee = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Authorizee) {
            let obj = new Entity();
            obj.deserialize(params.Authorizee);
            this.Authorizee = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * 任务基础信息。
 * @class
 */
class TaskBaseInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务 Id。
         */
        this.TaskId = null;
        /**
         * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：项目导出。</li>
         */
        this.TaskType = null;
        /**
         * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
         */
        this.Status = null;
        /**
         * 任务进度，取值为：0~100。
         */
        this.Progress = null;
        /**
         * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
         */
        this.ErrCode = null;
        /**
         * 错误信息。
         */
        this.ErrMsg = null;
        /**
         * 创建时间，格式按照 ISO 8601 标准表示。
         */
        this.CreateTime = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
    }
}
/**
 * DeleteClass返回参数结构体
 * @class
 */
class DeleteClassResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * GrantResourceAuthorization请求参数结构体
 * @class
 */
class GrantResourceAuthorizationRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 资源所属实体。
         */
        this.Owner = null;
        /**
         * 被授权资源。
         */
        this.Resources = null;
        /**
         * 被授权目标实体。
         */
        this.Authorizees = null;
        /**
         * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
         */
        this.Permissions = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        if (params.Authorizees) {
            this.Authorizees = new Array();
            for (let z in params.Authorizees) {
                let obj = new Entity();
                obj.deserialize(params.Authorizees[z]);
                this.Authorizees.push(obj);
            }
        }
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * 链接素材信息
 * @class
 */
class LinkMaterialInfo extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 素材基本信息。
         */
        this.BasicInfo = null;
        /**
         * 视频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.VideoMaterial = null;
        /**
         * 音频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.AudioMaterial = null;
        /**
         * 图片素材信息。
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.ImageMaterial = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        if (params.BasicInfo) {
            let obj = new MaterialBasicInfo();
            obj.deserialize(params.BasicInfo);
            this.BasicInfo = obj;
        }
        if (params.VideoMaterial) {
            let obj = new VideoMaterial();
            obj.deserialize(params.VideoMaterial);
            this.VideoMaterial = obj;
        }
        if (params.AudioMaterial) {
            let obj = new AudioMaterial();
            obj.deserialize(params.AudioMaterial);
            this.AudioMaterial = obj;
        }
        if (params.ImageMaterial) {
            let obj = new ImageMaterial();
            obj.deserialize(params.ImageMaterial);
            this.ImageMaterial = obj;
        }
    }
}
/**
 * ExportVideoByEditorTrackData返回参数结构体
 * @class
 */
class ExportVideoByEditorTrackDataResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 任务 Id。
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
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * DescribeProjects返回参数结构体
 * @class
 */
class DescribeProjectsResponse extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 符合条件的记录总数。
         */
        this.TotalCount = null;
        /**
         * 项目信息列表。
         */
        this.ProjectInfoSet = null;
        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        if (params.ProjectInfoSet) {
            this.ProjectInfoSet = new Array();
            for (let z in params.ProjectInfoSet) {
                let obj = new ProjectInfo();
                obj.deserialize(params.ProjectInfoSet[z]);
                this.ProjectInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;
    }
}
/**
 * ImportMaterial请求参数结构体
 * @class
 */
class ImportMaterialRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 云点播媒资 FileId。
         */
        this.VodFileId = null;
        /**
         * 素材归属者。
         */
        this.Owner = null;
        /**
         * 素材名称，不能超过30个字符。
         */
        this.Name = null;
        /**
         * 素材分类路径，形如："/a/b"，层级数不能超过10，每个层级长度不能超过15字符。若不填则默认为根路径。
         */
        this.ClassPath = null;
        /**
         * 素材预处理任务模板 ID。取值：
<li>10：进行编辑预处理。</li>
         */
        this.PreProcessDefinition = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.VodFileId = 'VodFileId' in params ? params.VodFileId : null;
        if (params.Owner) {
            let obj = new Entity();
            obj.deserialize(params.Owner);
            this.Owner = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ClassPath = 'ClassPath' in params ? params.ClassPath : null;
        this.PreProcessDefinition = 'PreProcessDefinition' in params ? params.PreProcessDefinition : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
/**
 * DescribeMaterials请求参数结构体
 * @class
 */
class DescribeMaterialsRequest extends abstract_model_1.AbstractModel {
    constructor() {
        super();
        /**
         * 平台名称，指定访问的平台。
         */
        this.Platform = null;
        /**
         * 素材 ID 列表，N 从 0 开始取值，最大 19。
         */
        this.MaterialIds = null;
        /**
         * 列表排序，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>
         */
        this.Sort = null;
        /**
         * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
         */
        this.Operator = null;
    }
    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.MaterialIds = 'MaterialIds' in params ? params.MaterialIds : null;
        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort);
            this.Sort = obj;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
    }
}
exports.Models = {
    AudioStreamInfo: AudioStreamInfo,
    DescribeTeamsRequest: DescribeTeamsRequest,
    DeleteProjectRequest: DeleteProjectRequest,
    ImportMaterialResponse: ImportMaterialResponse,
    DescribeTeamsResponse: DescribeTeamsResponse,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    ExportVideoEditProjectRequest: ExportVideoEditProjectRequest,
    ClassInfo: ClassInfo,
    DeleteMaterialResponse: DeleteMaterialResponse,
    IntegerRange: IntegerRange,
    SearchMaterialRequest: SearchMaterialRequest,
    DeleteTeamResponse: DeleteTeamResponse,
    RevokeResourceAuthorizationResponse: RevokeResourceAuthorizationResponse,
    DescribeTasksResponse: DescribeTasksResponse,
    ProjectInfo: ProjectInfo,
    DeleteTeamRequest: DeleteTeamRequest,
    ModifyMaterialResponse: ModifyMaterialResponse,
    LinkMaterial: LinkMaterial,
    FlattenListMediaRequest: FlattenListMediaRequest,
    AudioMaterial: AudioMaterial,
    AddMemberInfo: AddMemberInfo,
    Entity: Entity,
    TeamInfo: TeamInfo,
    ExportVideoByEditorTrackDataRequest: ExportVideoByEditorTrackDataRequest,
    MaterialTagInfo: MaterialTagInfo,
    VideoEditProjectOutput: VideoEditProjectOutput,
    CreateProjectRequest: CreateProjectRequest,
    ModifyMaterialRequest: ModifyMaterialRequest,
    Authorizer: Authorizer,
    DescribeTasksRequest: DescribeTasksRequest,
    TimeRange: TimeRange,
    DescribeLoginStatusRequest: DescribeLoginStatusRequest,
    DeleteLoginStatusResponse: DeleteLoginStatusResponse,
    Resource: Resource,
    CreateLinkResponse: CreateLinkResponse,
    ListMediaResponse: ListMediaResponse,
    SearchMaterialResponse: SearchMaterialResponse,
    DescribeJoinTeamsRequest: DescribeJoinTeamsRequest,
    DeleteMaterialRequest: DeleteMaterialRequest,
    CreateProjectResponse: CreateProjectResponse,
    DeleteProjectResponse: DeleteProjectResponse,
    DeleteClassRequest: DeleteClassRequest,
    CreateLinkRequest: CreateLinkRequest,
    CreateClassRequest: CreateClassRequest,
    DescribeMaterialsResponse: DescribeMaterialsResponse,
    GrantResourceAuthorizationResponse: GrantResourceAuthorizationResponse,
    CMEExportInfo: CMEExportInfo,
    ImportMediaToProjectRequest: ImportMediaToProjectRequest,
    VODExportInfo: VODExportInfo,
    SortBy: SortBy,
    ImageMaterial: ImageMaterial,
    DescribeClassRequest: DescribeClassRequest,
    MoveClassRequest: MoveClassRequest,
    DeleteTeamMembersResponse: DeleteTeamMembersResponse,
    MoveClassResponse: MoveClassResponse,
    ImportMediaToProjectResponse: ImportMediaToProjectResponse,
    ModifyTeamMemberResponse: ModifyTeamMemberResponse,
    DescribeTeamMembersResponse: DescribeTeamMembersResponse,
    AddTeamMemberResponse: AddTeamMemberResponse,
    CreateTeamResponse: CreateTeamResponse,
    ModifyTeamRequest: ModifyTeamRequest,
    ModifyTeamMemberRequest: ModifyTeamMemberRequest,
    CreateTeamRequest: CreateTeamRequest,
    MaterialBasicInfo: MaterialBasicInfo,
    JoinTeamInfo: JoinTeamInfo,
    DescribeResourceAuthorizationRequest: DescribeResourceAuthorizationRequest,
    CreateClassResponse: CreateClassResponse,
    VideoStreamInfo: VideoStreamInfo,
    AddTeamMemberRequest: AddTeamMemberRequest,
    ExportVideoEditProjectResponse: ExportVideoEditProjectResponse,
    ListMediaRequest: ListMediaRequest,
    ModifyTeamResponse: ModifyTeamResponse,
    DeleteLoginStatusRequest: DeleteLoginStatusRequest,
    DeleteTeamMembersRequest: DeleteTeamMembersRequest,
    DescribeSharedSpaceResponse: DescribeSharedSpaceResponse,
    SearchScope: SearchScope,
    VideoMaterial: VideoMaterial,
    DescribeResourceAuthorizationResponse: DescribeResourceAuthorizationResponse,
    FlattenListMediaResponse: FlattenListMediaResponse,
    DescribeProjectsRequest: DescribeProjectsRequest,
    DescribeLoginStatusResponse: DescribeLoginStatusResponse,
    TeamMemberInfo: TeamMemberInfo,
    DescribeJoinTeamsResponse: DescribeJoinTeamsResponse,
    DescribeTeamMembersRequest: DescribeTeamMembersRequest,
    MaterialStatus: MaterialStatus,
    MediaImageSpriteInfo: MediaImageSpriteInfo,
    AuthorizationInfo: AuthorizationInfo,
    ModifyProjectResponse: ModifyProjectResponse,
    RevokeResourceAuthorizationRequest: RevokeResourceAuthorizationRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    MaterialInfo: MaterialInfo,
    LoginStatusInfo: LoginStatusInfo,
    DescribeClassResponse: DescribeClassResponse,
    MediaMetaData: MediaMetaData,
    DescribeSharedSpaceRequest: DescribeSharedSpaceRequest,
    TaskBaseInfo: TaskBaseInfo,
    DeleteClassResponse: DeleteClassResponse,
    GrantResourceAuthorizationRequest: GrantResourceAuthorizationRequest,
    LinkMaterialInfo: LinkMaterialInfo,
    ExportVideoByEditorTrackDataResponse: ExportVideoByEditorTrackDataResponse,
    DescribeProjectsResponse: DescribeProjectsResponse,
    ImportMaterialRequest: ImportMaterialRequest,
    DescribeMaterialsRequest: DescribeMaterialsRequest,
};
//# sourceMappingURL=models.js.map