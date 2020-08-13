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
 * DescribeCaptchaResult返回参数结构体
 * @class
 */
class DescribeCaptchaResultResponse extends AbstractModel {

    CaptchaCode: number | null
    
    CaptchaMsg: string | null
    
    EvilLevel: number | null
    
    GetCaptchaTime: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 1	OK	验证通过
6	user code len error	验证码长度不匹配
7	captcha no match	验证码答案不匹配/Randstr参数不匹配
8	verify timeout	验证码签名超时
9	Sequnce repeat	验证码签名重放
10	Sequnce invalid	验证码签名序列
11	Cookie invalid	验证码cooking信息不合法
12	sig len error	签名长度错误
13	verify ip no match	ip不匹配
15	decrypt fail	验证码签名解密失败
16	appid no match	验证码强校验appid错误
17	cmd no much	验证码系统命令不匹配
18	uin no match	号码不匹配
19	seq redirect	重定向验证
20	opt no vcode	操作使用pt免验证码校验错误
21	diff	差别，验证错误
22	captcha type not match	验证码类型与拉取时不一致
23	verify type error	验证类型错误
24	invalid pkg	非法请求包
25	bad visitor	策略拦截
26	system busy	系统内部错误
100	param err	appsecretkey 参数校验错误
         */
        this.CaptchaCode = null;

        /**
         * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CaptchaMsg = null;

        /**
         * [0,100]，恶意等级
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.EvilLevel = null;

        /**
         * 前端获取验证码时间，时间戳格式
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.GetCaptchaTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaCode: number | null;
        CaptchaMsg: string | null;
        EvilLevel: number | null;
        GetCaptchaTime: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.EvilLevel = 'EvilLevel' in params ? params.EvilLevel : null;
        this.GetCaptchaTime = 'GetCaptchaTime' in params ? params.GetCaptchaTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaOperData返回参数结构体
 * @class
 */
class DescribeCaptchaOperDataResponse extends AbstractModel {

    CaptchaCode: number | null
    
    CaptchaMsg: string | null
    
    Data: CaptchaOperDataRes | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 成功返回 0 其它失败
         */
        this.CaptchaCode = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CaptchaMsg = null;

        /**
         * 用户操作数据
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaCode: number | null;
        CaptchaMsg: string | null;
        Data: CaptchaOperDataRes | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;

        if (params.Data) {
            let obj = new CaptchaOperDataRes();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaOperData方法 拦截情况type = 2 返回的数据结构
 * @class
 */
class CaptchaOperDataInterceptUnit extends AbstractModel {

    DateKey: string | null
    
    AllStopCnt: number | null
    
    PicStopCnt: number | null
    
    StrategyStopCnt: number | null
    
    constructor(){
        super();

        /**
         * 时间
         */
        this.DateKey = null;

        /**
         * 停止验证数量
         */
        this.AllStopCnt = null;

        /**
         * 图片停止加载数量
         */
        this.PicStopCnt = null;

        /**
         * 策略拦截数量
         */
        this.StrategyStopCnt = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DateKey: string | null;
        AllStopCnt: number | null;
        PicStopCnt: number | null;
        StrategyStopCnt: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.AllStopCnt = 'AllStopCnt' in params ? params.AllStopCnt : null;
        this.PicStopCnt = 'PicStopCnt' in params ? params.PicStopCnt : null;
        this.StrategyStopCnt = 'StrategyStopCnt' in params ? params.StrategyStopCnt : null;

    }
}

/**
 * DescribeCaptchaOperData方法 尝试次数分布 type = 4
 * @class
 */
class CaptchaOperDataTryTimesDistributeUnit extends AbstractModel {

    TryCount: number | null
    
    UserCount: number | null
    
    constructor(){
        super();

        /**
         * 尝试次数
         */
        this.TryCount = null;

        /**
         * 用户请求数量
         */
        this.UserCount = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        TryCount: number | null;
        UserCount: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.TryCount = 'TryCount' in params ? params.TryCount : null;
        this.UserCount = 'UserCount' in params ? params.UserCount : null;

    }
}

/**
 * 操作数据查询方法DescribeCaptchaOperData 的返回结果，安全验证码加载耗时type = 1
 * @class
 */
class CaptchaOperDataLoadTimeUnit extends AbstractModel {

    DateKey: string | null
    
    MarketLoadTime: number | null
    
    AppIdLoadTime: number | null
    
    constructor(){
        super();

        /**
         * 时间
         */
        this.DateKey = null;

        /**
         * Market加载时间
         */
        this.MarketLoadTime = null;

        /**
         * AppId加载时间
         */
        this.AppIdLoadTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DateKey: string | null;
        MarketLoadTime: number | null;
        AppIdLoadTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.MarketLoadTime = 'MarketLoadTime' in params ? params.MarketLoadTime : null;
        this.AppIdLoadTime = 'AppIdLoadTime' in params ? params.AppIdLoadTime : null;

    }
}

/**
 * DescribeCaptchaAppIdInfo请求参数结构体
 * @class
 */
class DescribeCaptchaAppIdInfoRequest extends AbstractModel {

    CaptchaAppId: number | null
    
    constructor(){
        super();

        /**
         * 验证码应用注册APPID
         */
        this.CaptchaAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;

    }
}

/**
 * DescribeCaptchaAppIdInfo返回参数结构体
 * @class
 */
class DescribeCaptchaAppIdInfoResponse extends AbstractModel {

    SchemeColor: string | null
    
    Language: number | null
    
    SceneType: number | null
    
    EvilInterceptGrade: number | null
    
    SmartVerify: number | null
    
    SmartEngine: number | null
    
    CapType: number | null
    
    AppName: string | null
    
    DomainLimit: string | null
    
    MailAlarm: Array<string> | null
    
    TrafficThreshold: number | null
    
    EncryptKey: string | null
    
    TopFullScreen: number | null
    
    CaptchaCode: number | null
    
    CaptchaMsg: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 界面风格
         */
        this.SchemeColor = null;

        /**
         * 语言
         */
        this.Language = null;

        /**
         * 场景
         */
        this.SceneType = null;

        /**
         * 防控风险等级
         */
        this.EvilInterceptGrade = null;

        /**
         * 智能验证
         */
        this.SmartVerify = null;

        /**
         * 智能引擎
         */
        this.SmartEngine = null;

        /**
         * 验证码类型
         */
        this.CapType = null;

        /**
         * 应用名称
         */
        this.AppName = null;

        /**
         * 域名限制
         */
        this.DomainLimit = null;

        /**
         * 邮件告警
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.MailAlarm = null;

        /**
         * 流量控制
         */
        this.TrafficThreshold = null;

        /**
         * 加密key
         */
        this.EncryptKey = null;

        /**
         * 是否全屏
         */
        this.TopFullScreen = null;

        /**
         * 成功返回0 其它失败
         */
        this.CaptchaCode = null;

        /**
         * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        SchemeColor: string | null;
        Language: number | null;
        SceneType: number | null;
        EvilInterceptGrade: number | null;
        SmartVerify: number | null;
        SmartEngine: number | null;
        CapType: number | null;
        AppName: string | null;
        DomainLimit: string | null;
        MailAlarm: Array<string> | null;
        TrafficThreshold: number | null;
        EncryptKey: string | null;
        TopFullScreen: number | null;
        CaptchaCode: number | null;
        CaptchaMsg: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.SchemeColor = 'SchemeColor' in params ? params.SchemeColor : null;
        this.Language = 'Language' in params ? params.Language : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.EvilInterceptGrade = 'EvilInterceptGrade' in params ? params.EvilInterceptGrade : null;
        this.SmartVerify = 'SmartVerify' in params ? params.SmartVerify : null;
        this.SmartEngine = 'SmartEngine' in params ? params.SmartEngine : null;
        this.CapType = 'CapType' in params ? params.CapType : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainLimit = 'DomainLimit' in params ? params.DomainLimit : null;
        this.MailAlarm = 'MailAlarm' in params ? params.MailAlarm : null;
        this.TrafficThreshold = 'TrafficThreshold' in params ? params.TrafficThreshold : null;
        this.EncryptKey = 'EncryptKey' in params ? params.EncryptKey : null;
        this.TopFullScreen = 'TopFullScreen' in params ? params.TopFullScreen : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaOperData操作数据查询尝试次数 type = 3
 * @class
 */
class CaptchaOperDataTryTimesUnit extends AbstractModel {

    DateKey: string | null
    
    CntPerPass: Array<number> | null
    
    MarketCntPerPass: number | null
    
    constructor(){
        super();

        /**
         * 时间
         */
        this.DateKey = null;

        /**
         * 平均尝试次数
         */
        this.CntPerPass = null;

        /**
         * market平均尝试次数
         */
        this.MarketCntPerPass = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        DateKey: string | null;
        CntPerPass: Array<number> | null;
        MarketCntPerPass: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.CntPerPass = 'CntPerPass' in params ? params.CntPerPass : null;
        this.MarketCntPerPass = 'MarketCntPerPass' in params ? params.MarketCntPerPass : null;

    }
}

/**
 * 用户注册的APPID和应用名称对象
 * @class
 */
class CaptchaUserAllAppId extends AbstractModel {

    CaptchaAppId: number | null
    
    AppName: string | null
    
    TcAppId: number | null
    
    constructor(){
        super();

        /**
         * 验证码应用ID
         */
        this.CaptchaAppId = null;

        /**
         * 注册应用名称
         */
        this.AppName = null;

        /**
         * 腾讯云APPID
         */
        this.TcAppId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaAppId: number | null;
        AppName: string | null;
        TcAppId: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.TcAppId = 'TcAppId' in params ? params.TcAppId : null;

    }
}

/**
 * DescribeCaptchaData返回参数结构体
 * @class
 */
class DescribeCaptchaDataResponse extends AbstractModel {

    CaptchaCode: number | null
    
    Data: Array<CaptchaQueryData> | null
    
    CaptchaMsg: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回码 0 成功 其它失败
         */
        this.CaptchaCode = null;

        /**
         * 数据数组
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Data = null;

        /**
         * 返回信息描述
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaCode: number | null;
        Data: Array<CaptchaQueryData> | null;
        CaptchaMsg: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CaptchaQueryData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaData请求参数结构体
 * @class
 */
class DescribeCaptchaDataRequest extends AbstractModel {

    CaptchaAppId: number | null
    
    Start: number | null
    
    End: number | null
    
    Type: number | null
    
    constructor(){
        super();

        /**
         * 验证码应用ID
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         */
        this.Start = null;

        /**
         * 查询结束时间
         */
        this.End = null;

        /**
         * 查询类型
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaAppId: number | null;
        Start: number | null;
        End: number | null;
        Type: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeCaptchaUserAllAppId返回参数结构体
 * @class
 */
class DescribeCaptchaUserAllAppIdResponse extends AbstractModel {

    Data: Array<CaptchaUserAllAppId> | null
    
    CaptchaCode: number | null
    
    CaptchaMsg: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 用户注册的所有Appid和应用名称
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.Data = null;

        /**
         * 成功返回 0  其它失败
         */
        this.CaptchaCode = null;

        /**
         * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Data: Array<CaptchaUserAllAppId> | null;
        CaptchaCode: number | null;
        CaptchaMsg: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CaptchaUserAllAppId();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaDataSum请求参数结构体
 * @class
 */
class DescribeCaptchaDataSumRequest extends AbstractModel {

    CaptchaAppId: number | null
    
    Start: number | null
    
    End: number | null
    
    constructor(){
        super();

        /**
         * 验证码应用ID
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         */
        this.Start = null;

        /**
         * 查询结束时间
         */
        this.End = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaAppId: number | null;
        Start: number | null;
        End: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.End = 'End' in params ? params.End : null;

    }
}

/**
 * UpdateCaptchaAppIdInfo请求参数结构体
 * @class
 */
class UpdateCaptchaAppIdInfoRequest extends AbstractModel {

    CaptchaAppId: number | null
    
    AppName: string | null
    
    DomainLimit: string | null
    
    SceneType: number | null
    
    CapType: number | null
    
    EvilInterceptGrade: number | null
    
    SmartVerify: number | null
    
    SmartEngine: number | null
    
    SchemeColor: string | null
    
    CaptchaLanguage: number | null
    
    MailAlarm: string | null
    
    TopFullScreen: number | null
    
    TrafficThreshold: number | null
    
    constructor(){
        super();

        /**
         * 验证码应用ID
         */
        this.CaptchaAppId = null;

        /**
         * 应用名
         */
        this.AppName = null;

        /**
         * 域名限制
         */
        this.DomainLimit = null;

        /**
         * 场景类型
         */
        this.SceneType = null;

        /**
         * 验证码类型
         */
        this.CapType = null;

        /**
         * 风险级别
         */
        this.EvilInterceptGrade = null;

        /**
         * 智能检测
         */
        this.SmartVerify = null;

        /**
         * 开启智能引擎
         */
        this.SmartEngine = null;

        /**
         * web风格
         */
        this.SchemeColor = null;

        /**
         * 语言
         */
        this.CaptchaLanguage = null;

        /**
         * 告警邮箱
         */
        this.MailAlarm = null;

        /**
         * 是否全屏
         */
        this.TopFullScreen = null;

        /**
         * 流量限制
         */
        this.TrafficThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaAppId: number | null;
        AppName: string | null;
        DomainLimit: string | null;
        SceneType: number | null;
        CapType: number | null;
        EvilInterceptGrade: number | null;
        SmartVerify: number | null;
        SmartEngine: number | null;
        SchemeColor: string | null;
        CaptchaLanguage: number | null;
        MailAlarm: string | null;
        TopFullScreen: number | null;
        TrafficThreshold: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.DomainLimit = 'DomainLimit' in params ? params.DomainLimit : null;
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.CapType = 'CapType' in params ? params.CapType : null;
        this.EvilInterceptGrade = 'EvilInterceptGrade' in params ? params.EvilInterceptGrade : null;
        this.SmartVerify = 'SmartVerify' in params ? params.SmartVerify : null;
        this.SmartEngine = 'SmartEngine' in params ? params.SmartEngine : null;
        this.SchemeColor = 'SchemeColor' in params ? params.SchemeColor : null;
        this.CaptchaLanguage = 'CaptchaLanguage' in params ? params.CaptchaLanguage : null;
        this.MailAlarm = 'MailAlarm' in params ? params.MailAlarm : null;
        this.TopFullScreen = 'TopFullScreen' in params ? params.TopFullScreen : null;
        this.TrafficThreshold = 'TrafficThreshold' in params ? params.TrafficThreshold : null;

    }
}

/**
 * UpdateCaptchaAppIdInfo返回参数结构体
 * @class
 */
class UpdateCaptchaAppIdInfoResponse extends AbstractModel {

    CaptchaCode: number | null
    
    CaptchaMsg: string | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 返回码 0 成功，其它失败
         */
        this.CaptchaCode = null;

        /**
         * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CaptchaMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaCode: number | null;
        CaptchaMsg: string | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaUserAllAppId请求参数结构体
 * @class
 */
class DescribeCaptchaUserAllAppIdRequest extends AbstractModel {

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
 * 该类型为DescribeCaptchaData 方法返回数据类型
 * @class
 */
class CaptchaQueryData extends AbstractModel {

    Cnt: number | null
    
    Date: string | null
    
    constructor(){
        super();

        /**
         * 数量
         */
        this.Cnt = null;

        /**
         * 时间
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        Cnt: number | null;
        Date: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.Cnt = 'Cnt' in params ? params.Cnt : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeCaptchaDataSum返回参数结构体
 * @class
 */
class DescribeCaptchaDataSumResponse extends AbstractModel {

    GetSum: number | null
    
    VfySuccSum: number | null
    
    VfySum: number | null
    
    AttackSum: number | null
    
    CaptchaMsg: string | null
    
    CaptchaCode: number | null
    
    CheckTicketSum: number | null
    
    RequestId: string | null
    
    constructor(){
        super();

        /**
         * 请求总量
         */
        this.GetSum = null;

        /**
         * 请求验证成功量
         */
        this.VfySuccSum = null;

        /**
         * 请求验证量
         */
        this.VfySum = null;

        /**
         * 拦截攻击量
         */
        this.AttackSum = null;

        /**
         * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.CaptchaMsg = null;

        /**
         * 成功返回0  其它失败
         */
        this.CaptchaCode = null;

        /**
         * 票据校验量
         */
        this.CheckTicketSum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        GetSum: number | null;
        VfySuccSum: number | null;
        VfySum: number | null;
        AttackSum: number | null;
        CaptchaMsg: string | null;
        CaptchaCode: number | null;
        CheckTicketSum: number | null;
        RequestId: string | null;
    }): void {
        if (!params) {
            return;
        }
        this.GetSum = 'GetSum' in params ? params.GetSum : null;
        this.VfySuccSum = 'VfySuccSum' in params ? params.VfySuccSum : null;
        this.VfySum = 'VfySum' in params ? params.VfySum : null;
        this.AttackSum = 'AttackSum' in params ? params.AttackSum : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CheckTicketSum = 'CheckTicketSum' in params ? params.CheckTicketSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaOperData请求参数结构体
 * @class
 */
class DescribeCaptchaOperDataRequest extends AbstractModel {

    CaptchaAppId: number | null
    
    Start: number | null
    
    Type: number | null
    
    constructor(){
        super();

        /**
         * 验证码应用ID
         */
        this.CaptchaAppId = null;

        /**
         * 查询开始时间
         */
        this.Start = null;

        /**
         * 查询类型
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaAppId: number | null;
        Start: number | null;
        Type: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.Start = 'Start' in params ? params.Start : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeCaptchaOperData 接口 返回数据类型集合
 * @class
 */
class CaptchaOperDataRes extends AbstractModel {

    OperDataLoadTimeUnitArray: Array<CaptchaOperDataLoadTimeUnit> | null
    
    OperDataInterceptUnitArray: Array<CaptchaOperDataInterceptUnit> | null
    
    OperDataTryTimesUnitArray: Array<CaptchaOperDataTryTimesUnit> | null
    
    OperDataTryTimesDistributeUnitArray: Array<CaptchaOperDataTryTimesDistributeUnit> | null
    
    constructor(){
        super();

        /**
         * 验证码加载耗时数据返回
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperDataLoadTimeUnitArray = null;

        /**
         * 验证码拦截情况数据返回
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperDataInterceptUnitArray = null;

        /**
         * 验证码尝试次数数据返回
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperDataTryTimesUnitArray = null;

        /**
         * 验证码尝试次数分布数据返回
注意：此字段可能返回 null，表示取不到有效值。
         */
        this.OperDataTryTimesDistributeUnitArray = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        OperDataLoadTimeUnitArray: Array<CaptchaOperDataLoadTimeUnit> | null;
        OperDataInterceptUnitArray: Array<CaptchaOperDataInterceptUnit> | null;
        OperDataTryTimesUnitArray: Array<CaptchaOperDataTryTimesUnit> | null;
        OperDataTryTimesDistributeUnitArray: Array<CaptchaOperDataTryTimesDistributeUnit> | null;
    }): void {
        if (!params) {
            return;
        }

        if (params.OperDataLoadTimeUnitArray) {
            this.OperDataLoadTimeUnitArray = new Array();
            for (let z in params.OperDataLoadTimeUnitArray) {
                let obj = new CaptchaOperDataLoadTimeUnit();
                obj.deserialize(params.OperDataLoadTimeUnitArray[z]);
                this.OperDataLoadTimeUnitArray.push(obj);
            }
        }

        if (params.OperDataInterceptUnitArray) {
            this.OperDataInterceptUnitArray = new Array();
            for (let z in params.OperDataInterceptUnitArray) {
                let obj = new CaptchaOperDataInterceptUnit();
                obj.deserialize(params.OperDataInterceptUnitArray[z]);
                this.OperDataInterceptUnitArray.push(obj);
            }
        }

        if (params.OperDataTryTimesUnitArray) {
            this.OperDataTryTimesUnitArray = new Array();
            for (let z in params.OperDataTryTimesUnitArray) {
                let obj = new CaptchaOperDataTryTimesUnit();
                obj.deserialize(params.OperDataTryTimesUnitArray[z]);
                this.OperDataTryTimesUnitArray.push(obj);
            }
        }

        if (params.OperDataTryTimesDistributeUnitArray) {
            this.OperDataTryTimesDistributeUnitArray = new Array();
            for (let z in params.OperDataTryTimesDistributeUnitArray) {
                let obj = new CaptchaOperDataTryTimesDistributeUnit();
                obj.deserialize(params.OperDataTryTimesDistributeUnitArray[z]);
                this.OperDataTryTimesDistributeUnitArray.push(obj);
            }
        }

    }
}

/**
 * DescribeCaptchaResult请求参数结构体
 * @class
 */
class DescribeCaptchaResultRequest extends AbstractModel {

    CaptchaType: number | null
    
    Ticket: string | null
    
    UserIp: string | null
    
    Randstr: string | null
    
    CaptchaAppId: number | null
    
    AppSecretKey: string | null
    
    BusinessId: number | null
    
    SceneId: number | null
    
    MacAddress: string | null
    
    Imei: string | null
    
    NeedGetCaptchaTime: number | null
    
    constructor(){
        super();

        /**
         * 固定填值：9。可在控制台配置不同验证码类型。
         */
        this.CaptchaType = null;

        /**
         * 前端回调函数返回的用户验证票据
         */
        this.Ticket = null;

        /**
         * 用户操作来源的外网 IP
         */
        this.UserIp = null;

        /**
         * 前端回调函数返回的随机字符串
         */
        this.Randstr = null;

        /**
         * 验证码应用ID
         */
        this.CaptchaAppId = null;

        /**
         * 用于服务器端校验验证码票据的验证密钥，请妥善保密，请勿泄露给第三方
         */
        this.AppSecretKey = null;

        /**
         * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
         */
        this.BusinessId = null;

        /**
         * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
         */
        this.SceneId = null;

        /**
         * mac 地址或设备唯一标识
         */
        this.MacAddress = null;

        /**
         * 手机设备号
         */
        this.Imei = null;

        /**
         * 是否返回前端获取验证码时间，取值1：需要返回
         */
        this.NeedGetCaptchaTime = null;

    }

    /**
     * @private
     */
    deserialize(params: {
        CaptchaType: number | null;
        Ticket: string | null;
        UserIp: string | null;
        Randstr: string | null;
        CaptchaAppId: number | null;
        AppSecretKey: string | null;
        BusinessId: number | null;
        SceneId: number | null;
        MacAddress: string | null;
        Imei: string | null;
        NeedGetCaptchaTime: number | null;
    }): void {
        if (!params) {
            return;
        }
        this.CaptchaType = 'CaptchaType' in params ? params.CaptchaType : null;
        this.Ticket = 'Ticket' in params ? params.Ticket : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Randstr = 'Randstr' in params ? params.Randstr : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppSecretKey = 'AppSecretKey' in params ? params.AppSecretKey : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.NeedGetCaptchaTime = 'NeedGetCaptchaTime' in params ? params.NeedGetCaptchaTime : null;

    }
}

export const Models = {
    DescribeCaptchaResultResponse: DescribeCaptchaResultResponse,
    DescribeCaptchaOperDataResponse: DescribeCaptchaOperDataResponse,
    CaptchaOperDataInterceptUnit: CaptchaOperDataInterceptUnit,
    CaptchaOperDataTryTimesDistributeUnit: CaptchaOperDataTryTimesDistributeUnit,
    CaptchaOperDataLoadTimeUnit: CaptchaOperDataLoadTimeUnit,
    DescribeCaptchaAppIdInfoRequest: DescribeCaptchaAppIdInfoRequest,
    DescribeCaptchaAppIdInfoResponse: DescribeCaptchaAppIdInfoResponse,
    CaptchaOperDataTryTimesUnit: CaptchaOperDataTryTimesUnit,
    CaptchaUserAllAppId: CaptchaUserAllAppId,
    DescribeCaptchaDataResponse: DescribeCaptchaDataResponse,
    DescribeCaptchaDataRequest: DescribeCaptchaDataRequest,
    DescribeCaptchaUserAllAppIdResponse: DescribeCaptchaUserAllAppIdResponse,
    DescribeCaptchaDataSumRequest: DescribeCaptchaDataSumRequest,
    UpdateCaptchaAppIdInfoRequest: UpdateCaptchaAppIdInfoRequest,
    UpdateCaptchaAppIdInfoResponse: UpdateCaptchaAppIdInfoResponse,
    DescribeCaptchaUserAllAppIdRequest: DescribeCaptchaUserAllAppIdRequest,
    CaptchaQueryData: CaptchaQueryData,
    DescribeCaptchaDataSumResponse: DescribeCaptchaDataSumResponse,
    DescribeCaptchaOperDataRequest: DescribeCaptchaOperDataRequest,
    CaptchaOperDataRes: CaptchaOperDataRes,
    DescribeCaptchaResultRequest: DescribeCaptchaResultRequest,

}
