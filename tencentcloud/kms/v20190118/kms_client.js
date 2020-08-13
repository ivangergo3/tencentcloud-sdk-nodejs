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
const UpdateAliasRequest = models_1.Models.UpdateAliasRequest;
const EnableWhiteBoxKeyRequest = models_1.Models.EnableWhiteBoxKeyRequest;
const AsymmetricRsaDecryptRequest = models_1.Models.AsymmetricRsaDecryptRequest;
const EnableKeyRotationRequest = models_1.Models.EnableKeyRotationRequest;
const DescribeWhiteBoxKeyDetailsResponse = models_1.Models.DescribeWhiteBoxKeyDetailsResponse;
const CreateKeyRequest = models_1.Models.CreateKeyRequest;
const DisableWhiteBoxKeyResponse = models_1.Models.DisableWhiteBoxKeyResponse;
const DisableKeyResponse = models_1.Models.DisableKeyResponse;
const DescribeWhiteBoxServiceStatusRequest = models_1.Models.DescribeWhiteBoxServiceStatusRequest;
const DescribeKeyRequest = models_1.Models.DescribeKeyRequest;
const WhiteboxKeyInfo = models_1.Models.WhiteboxKeyInfo;
const ListAlgorithmsResponse = models_1.Models.ListAlgorithmsResponse;
const DescribeWhiteBoxKeyResponse = models_1.Models.DescribeWhiteBoxKeyResponse;
const UpdateKeyDescriptionResponse = models_1.Models.UpdateKeyDescriptionResponse;
const DescribeWhiteBoxServiceStatusResponse = models_1.Models.DescribeWhiteBoxServiceStatusResponse;
const ImportKeyMaterialRequest = models_1.Models.ImportKeyMaterialRequest;
const EnableKeyRequest = models_1.Models.EnableKeyRequest;
const ImportKeyMaterialResponse = models_1.Models.ImportKeyMaterialResponse;
const ListAlgorithmsRequest = models_1.Models.ListAlgorithmsRequest;
const Tag = models_1.Models.Tag;
const ListKeyDetailResponse = models_1.Models.ListKeyDetailResponse;
const GenerateDataKeyRequest = models_1.Models.GenerateDataKeyRequest;
const UpdateAliasResponse = models_1.Models.UpdateAliasResponse;
const ScheduleKeyDeletionResponse = models_1.Models.ScheduleKeyDeletionResponse;
const GenerateRandomResponse = models_1.Models.GenerateRandomResponse;
const DescribeKeysRequest = models_1.Models.DescribeKeysRequest;
const GetPublicKeyRequest = models_1.Models.GetPublicKeyRequest;
const GetServiceStatusRequest = models_1.Models.GetServiceStatusRequest;
const EnableWhiteBoxKeysResponse = models_1.Models.EnableWhiteBoxKeysResponse;
const DescribeWhiteBoxKeyRequest = models_1.Models.DescribeWhiteBoxKeyRequest;
const GetParametersForImportResponse = models_1.Models.GetParametersForImportResponse;
const DecryptResponse = models_1.Models.DecryptResponse;
const CreateWhiteBoxKeyResponse = models_1.Models.CreateWhiteBoxKeyResponse;
const Key = models_1.Models.Key;
const DeleteImportedKeyMaterialResponse = models_1.Models.DeleteImportedKeyMaterialResponse;
const EnableKeysRequest = models_1.Models.EnableKeysRequest;
const EnableWhiteBoxKeysRequest = models_1.Models.EnableWhiteBoxKeysRequest;
const EncryptByWhiteBoxResponse = models_1.Models.EncryptByWhiteBoxResponse;
const DescribeKeysResponse = models_1.Models.DescribeKeysResponse;
const EnableWhiteBoxKeyResponse = models_1.Models.EnableWhiteBoxKeyResponse;
const ReEncryptRequest = models_1.Models.ReEncryptRequest;
const ListKeysResponse = models_1.Models.ListKeysResponse;
const GetServiceStatusResponse = models_1.Models.GetServiceStatusResponse;
const DisableKeyRotationResponse = models_1.Models.DisableKeyRotationResponse;
const DisableWhiteBoxKeysRequest = models_1.Models.DisableWhiteBoxKeysRequest;
const OverwriteWhiteBoxDeviceFingerprintsRequest = models_1.Models.OverwriteWhiteBoxDeviceFingerprintsRequest;
const DeleteWhiteBoxKeyRequest = models_1.Models.DeleteWhiteBoxKeyRequest;
const AlgorithmInfo = models_1.Models.AlgorithmInfo;
const GenerateDataKeyResponse = models_1.Models.GenerateDataKeyResponse;
const CreateWhiteBoxKeyRequest = models_1.Models.CreateWhiteBoxKeyRequest;
const OverwriteWhiteBoxDeviceFingerprintsResponse = models_1.Models.OverwriteWhiteBoxDeviceFingerprintsResponse;
const DisableWhiteBoxKeysResponse = models_1.Models.DisableWhiteBoxKeysResponse;
const GetParametersForImportRequest = models_1.Models.GetParametersForImportRequest;
const CreateKeyResponse = models_1.Models.CreateKeyResponse;
const ReEncryptResponse = models_1.Models.ReEncryptResponse;
const EncryptResponse = models_1.Models.EncryptResponse;
const CancelKeyDeletionRequest = models_1.Models.CancelKeyDeletionRequest;
const DeleteImportedKeyMaterialRequest = models_1.Models.DeleteImportedKeyMaterialRequest;
const EnableKeyResponse = models_1.Models.EnableKeyResponse;
const AsymmetricSm2DecryptResponse = models_1.Models.AsymmetricSm2DecryptResponse;
const DeviceFingerprint = models_1.Models.DeviceFingerprint;
const GetKeyRotationStatusResponse = models_1.Models.GetKeyRotationStatusResponse;
const EncryptRequest = models_1.Models.EncryptRequest;
const AsymmetricSm2DecryptRequest = models_1.Models.AsymmetricSm2DecryptRequest;
const DeleteWhiteBoxKeyResponse = models_1.Models.DeleteWhiteBoxKeyResponse;
const ListKeysRequest = models_1.Models.ListKeysRequest;
const DescribeWhiteBoxDecryptKeyRequest = models_1.Models.DescribeWhiteBoxDecryptKeyRequest;
const KeyMetadata = models_1.Models.KeyMetadata;
const DisableKeysResponse = models_1.Models.DisableKeysResponse;
const DecryptRequest = models_1.Models.DecryptRequest;
const DescribeWhiteBoxKeyDetailsRequest = models_1.Models.DescribeWhiteBoxKeyDetailsRequest;
const AsymmetricRsaDecryptResponse = models_1.Models.AsymmetricRsaDecryptResponse;
const CancelKeyDeletionResponse = models_1.Models.CancelKeyDeletionResponse;
const DisableKeysRequest = models_1.Models.DisableKeysRequest;
const DisableWhiteBoxKeyRequest = models_1.Models.DisableWhiteBoxKeyRequest;
const UnbindCloudResourceRequest = models_1.Models.UnbindCloudResourceRequest;
const ListKeyDetailRequest = models_1.Models.ListKeyDetailRequest;
const EnableKeyRotationResponse = models_1.Models.EnableKeyRotationResponse;
const BindCloudResourceResponse = models_1.Models.BindCloudResourceResponse;
const EnableKeysResponse = models_1.Models.EnableKeysResponse;
const DescribeWhiteBoxDeviceFingerprintsRequest = models_1.Models.DescribeWhiteBoxDeviceFingerprintsRequest;
const EncryptByWhiteBoxRequest = models_1.Models.EncryptByWhiteBoxRequest;
const GenerateRandomRequest = models_1.Models.GenerateRandomRequest;
const ScheduleKeyDeletionRequest = models_1.Models.ScheduleKeyDeletionRequest;
const DisableKeyRequest = models_1.Models.DisableKeyRequest;
const GetKeyRotationStatusRequest = models_1.Models.GetKeyRotationStatusRequest;
const GetPublicKeyResponse = models_1.Models.GetPublicKeyResponse;
const BindCloudResourceRequest = models_1.Models.BindCloudResourceRequest;
const DescribeWhiteBoxDecryptKeyResponse = models_1.Models.DescribeWhiteBoxDecryptKeyResponse;
const DescribeWhiteBoxDeviceFingerprintsResponse = models_1.Models.DescribeWhiteBoxDeviceFingerprintsResponse;
const UpdateKeyDescriptionRequest = models_1.Models.UpdateKeyDescriptionRequest;
const UnbindCloudResourceResponse = models_1.Models.UnbindCloudResourceResponse;
const DescribeKeyResponse = models_1.Models.DescribeKeyResponse;
const DisableKeyRotationRequest = models_1.Models.DisableKeyRotationRequest;
/**
 * kms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("kms.tencentcloudapi.com", "2019-01-18", credential, region, profile);
    }
    /**
     * 本接口用于加密最多为4KB任意数据，可用于加密数据库密码，RSA Key，或其它较小的敏感信息。对于应用的数据加密，使用GenerateDataKey生成的DataKey进行本地数据的加解密操作
     * @param {EncryptRequest} req
     * @param {function(string, EncryptResponse):void} cb
     * @public
     */
    Encrypt(req, cb) {
        const resp = new EncryptResponse();
        this.request("Encrypt", req, resp, cb);
    }
    /**
     * 本接口用于解密密文，得到明文数据。
     * @param {DecryptRequest} req
     * @param {function(string, DecryptResponse):void} cb
     * @public
     */
    Decrypt(req, cb) {
        const resp = new DecryptResponse();
        this.request("Decrypt", req, resp, cb);
    }
    /**
     * 用于修改CMK的别名。对于处于PendingDelete状态的CMK禁止修改。
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        const resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }
    /**
     * 删除白盒密钥, 注意：必须先禁用后，才可以删除。
     * @param {DeleteWhiteBoxKeyRequest} req
     * @param {function(string, DeleteWhiteBoxKeyResponse):void} cb
     * @public
     */
    DeleteWhiteBoxKey(req, cb) {
        const resp = new DeleteWhiteBoxKeyResponse();
        this.request("DeleteWhiteBoxKey", req, resp, cb);
    }
    /**
     * 用于导入密钥材料。只有类型为EXTERNAL 的CMK 才可以导入，导入的密钥材料使用 GetParametersForImport 获取的密钥进行加密。可以为指定的 CMK 重新导入密钥材料，并重新指定过期时间，但必须导入相同的密钥材料。CMK 密钥材料导入后不可以更换密钥材料。导入的密钥材料过期或者被删除后，指定的CMK将无法使用，需要再次导入相同的密钥材料才能正常使用。CMK是独立的，同样的密钥材料可导入不同的 CMK 中，但使用其中一个 CMK 加密的数据无法使用另一个 CMK解密。
只有Enabled 和 PendingImport状态的CMK可以导入密钥材料。
     * @param {ImportKeyMaterialRequest} req
     * @param {function(string, ImportKeyMaterialResponse):void} cb
     * @public
     */
    ImportKeyMaterial(req, cb) {
        const resp = new ImportKeyMaterialResponse();
        this.request("ImportKeyMaterial", req, resp, cb);
    }
    /**
     * 该接口用户获取 KeyUsage为ASYMMETRIC_DECRYPT_RSA_2048 和 ASYMMETRIC_DECRYPT_SM2 的非对称密钥的公钥信息，使用该公钥用户可在本地进行数据加密，使用该公钥加密的数据只能通过KMS使用对应的私钥进行解密。只有处于Enabled状态的非对称密钥才可能获取公钥。
     * @param {GetPublicKeyRequest} req
     * @param {function(string, GetPublicKeyResponse):void} cb
     * @public
     */
    GetPublicKey(req, cb) {
        const resp = new GetPublicKeyResponse();
        this.request("GetPublicKey", req, resp, cb);
    }
    /**
     * 本接口用于禁用一个主密钥，处于禁用状态的Key无法用于加密、解密操作。
     * @param {DisableKeyRequest} req
     * @param {function(string, DisableKeyResponse):void} cb
     * @public
     */
    DisableKey(req, cb) {
        const resp = new DisableKeyResponse();
        this.request("DisableKey", req, resp, cb);
    }
    /**
     * 本接口生成一个数据密钥，您可以用这个密钥进行本地数据的加密。
     * @param {GenerateDataKeyRequest} req
     * @param {function(string, GenerateDataKeyResponse):void} cb
     * @public
     */
    GenerateDataKey(req, cb) {
        const resp = new GenerateDataKeyResponse();
        this.request("GenerateDataKey", req, resp, cb);
    }
    /**
     * 使用指定的SM2非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。传入的密文的长度不能超过256字节。
     * @param {AsymmetricSm2DecryptRequest} req
     * @param {function(string, AsymmetricSm2DecryptResponse):void} cb
     * @public
     */
    AsymmetricSm2Decrypt(req, cb) {
        const resp = new AsymmetricSm2DecryptResponse();
        this.request("AsymmetricSm2Decrypt", req, resp, cb);
    }
    /**
     * 取消CMK的计划删除操作
     * @param {CancelKeyDeletionRequest} req
     * @param {function(string, CancelKeyDeletionResponse):void} cb
     * @public
     */
    CancelKeyDeletion(req, cb) {
        const resp = new CancelKeyDeletionResponse();
        this.request("CancelKeyDeletion", req, resp, cb);
    }
    /**
     * 查询指定的CMK是否开启了密钥轮换功能。
     * @param {GetKeyRotationStatusRequest} req
     * @param {function(string, GetKeyRotationStatusResponse):void} cb
     * @public
     */
    GetKeyRotationStatus(req, cb) {
        const resp = new GetKeyRotationStatusResponse();
        this.request("GetKeyRotationStatus", req, resp, cb);
    }
    /**
     * 获取白盒密钥列表
     * @param {DescribeWhiteBoxKeyDetailsRequest} req
     * @param {function(string, DescribeWhiteBoxKeyDetailsResponse):void} cb
     * @public
     */
    DescribeWhiteBoxKeyDetails(req, cb) {
        const resp = new DescribeWhiteBoxKeyDetailsResponse();
        this.request("DescribeWhiteBoxKeyDetails", req, resp, cb);
    }
    /**
     * 记录当前key被哪个云产品的那个资源所使用。如果当前key设置了自动过期，则取消该设置，确保当前key不会自动失效。如果当前关联关系已经创建，也返回成功。
     * @param {BindCloudResourceRequest} req
     * @param {function(string, BindCloudResourceResponse):void} cb
     * @public
     */
    BindCloudResource(req, cb) {
        const resp = new BindCloudResourceResponse();
        this.request("BindCloudResource", req, resp, cb);
    }
    /**
     * 用于查询该用户是否已开通KMS服务
     * @param {GetServiceStatusRequest} req
     * @param {function(string, GetServiceStatusResponse):void} cb
     * @public
     */
    GetServiceStatus(req, cb) {
        const resp = new GetServiceStatusResponse();
        this.request("GetServiceStatus", req, resp, cb);
    }
    /**
     * 使用指定CMK对密文重新加密。
     * @param {ReEncryptRequest} req
     * @param {function(string, ReEncryptResponse):void} cb
     * @public
     */
    ReEncrypt(req, cb) {
        const resp = new ReEncryptResponse();
        this.request("ReEncrypt", req, resp, cb);
    }
    /**
     * 批量启用白盒密钥
     * @param {EnableWhiteBoxKeysRequest} req
     * @param {function(string, EnableWhiteBoxKeysResponse):void} cb
     * @public
     */
    EnableWhiteBoxKeys(req, cb) {
        const resp = new EnableWhiteBoxKeysResponse();
        this.request("EnableWhiteBoxKeys", req, resp, cb);
    }
    /**
     * 列出当前Region支持的加密方式
     * @param {ListAlgorithmsRequest} req
     * @param {function(string, ListAlgorithmsResponse):void} cb
     * @public
     */
    ListAlgorithms(req, cb) {
        const resp = new ListAlgorithmsResponse();
        this.request("ListAlgorithms", req, resp, cb);
    }
    /**
     * 用于获取指定KeyId的主密钥属性详情信息。
     * @param {DescribeKeyRequest} req
     * @param {function(string, DescribeKeyResponse):void} cb
     * @public
     */
    DescribeKey(req, cb) {
        const resp = new DescribeKeyResponse();
        this.request("DescribeKey", req, resp, cb);
    }
    /**
     * 列出账号下面状态为Enabled， Disabled 和 PendingImport 的CMK KeyId 列表
     * @param {ListKeysRequest} req
     * @param {function(string, ListKeysResponse):void} cb
     * @public
     */
    ListKeys(req, cb) {
        const resp = new ListKeysResponse();
        this.request("ListKeys", req, resp, cb);
    }
    /**
     * 随机数生成接口。
     * @param {GenerateRandomRequest} req
     * @param {function(string, GenerateRandomResponse):void} cb
     * @public
     */
    GenerateRandom(req, cb) {
        const resp = new GenerateRandomResponse();
        this.request("GenerateRandom", req, resp, cb);
    }
    /**
     * 覆盖指定密钥的设备指纹信息
     * @param {OverwriteWhiteBoxDeviceFingerprintsRequest} req
     * @param {function(string, OverwriteWhiteBoxDeviceFingerprintsResponse):void} cb
     * @public
     */
    OverwriteWhiteBoxDeviceFingerprints(req, cb) {
        const resp = new OverwriteWhiteBoxDeviceFingerprintsResponse();
        this.request("OverwriteWhiteBoxDeviceFingerprints", req, resp, cb);
    }
    /**
     * 创建用户管理数据密钥的主密钥CMK（Custom Master Key）。
     * @param {CreateKeyRequest} req
     * @param {function(string, CreateKeyResponse):void} cb
     * @public
     */
    CreateKey(req, cb) {
        const resp = new CreateKeyResponse();
        this.request("CreateKey", req, resp, cb);
    }
    /**
     * 展示白盒密钥的信息
     * @param {DescribeWhiteBoxKeyRequest} req
     * @param {function(string, DescribeWhiteBoxKeyResponse):void} cb
     * @public
     */
    DescribeWhiteBoxKey(req, cb) {
        const resp = new DescribeWhiteBoxKeyResponse();
        this.request("DescribeWhiteBoxKey", req, resp, cb);
    }
    /**
     * 使用白盒密钥进行加密
     * @param {EncryptByWhiteBoxRequest} req
     * @param {function(string, EncryptByWhiteBoxResponse):void} cb
     * @public
     */
    EncryptByWhiteBox(req, cb) {
        const resp = new EncryptByWhiteBoxResponse();
        this.request("EncryptByWhiteBox", req, resp, cb);
    }
    /**
     * 获取导入主密钥（CMK）材料的参数，返回的Token作为执行ImportKeyMaterial的参数之一，返回的PublicKey用于对自主导入密钥材料进行加密。返回的Token和PublicKey 24小时后失效，失效后如需重新导入，需要再次调用该接口获取新的Token和PublicKey。
     * @param {GetParametersForImportRequest} req
     * @param {function(string, GetParametersForImportResponse):void} cb
     * @public
     */
    GetParametersForImport(req, cb) {
        const resp = new GetParametersForImportResponse();
        this.request("GetParametersForImport", req, resp, cb);
    }
    /**
     * 批量禁用白盒密钥
     * @param {DisableWhiteBoxKeysRequest} req
     * @param {function(string, DisableWhiteBoxKeysResponse):void} cb
     * @public
     */
    DisableWhiteBoxKeys(req, cb) {
        const resp = new DisableWhiteBoxKeysResponse();
        this.request("DisableWhiteBoxKeys", req, resp, cb);
    }
    /**
     * 根据指定Offset和Limit获取主密钥列表详情。
     * @param {ListKeyDetailRequest} req
     * @param {function(string, ListKeyDetailResponse):void} cb
     * @public
     */
    ListKeyDetail(req, cb) {
        const resp = new ListKeyDetailResponse();
        this.request("ListKeyDetail", req, resp, cb);
    }
    /**
     * 对指定的CMK禁止密钥轮换功能。
     * @param {DisableKeyRotationRequest} req
     * @param {function(string, DisableKeyRotationResponse):void} cb
     * @public
     */
    DisableKeyRotation(req, cb) {
        const resp = new DisableKeyRotationResponse();
        this.request("DisableKeyRotation", req, resp, cb);
    }
    /**
     * 禁用白盒密钥
     * @param {DisableWhiteBoxKeyRequest} req
     * @param {function(string, DisableWhiteBoxKeyResponse):void} cb
     * @public
     */
    DisableWhiteBoxKey(req, cb) {
        const resp = new DisableWhiteBoxKeyResponse();
        this.request("DisableWhiteBoxKey", req, resp, cb);
    }
    /**
     * 该接口用于批量启用CMK。
     * @param {EnableKeysRequest} req
     * @param {function(string, EnableKeysResponse):void} cb
     * @public
     */
    EnableKeys(req, cb) {
        const resp = new EnableKeysResponse();
        this.request("EnableKeys", req, resp, cb);
    }
    /**
     * CMK计划删除接口，用于指定CMK删除的时间，可选时间区间为[7,30]天
     * @param {ScheduleKeyDeletionRequest} req
     * @param {function(string, ScheduleKeyDeletionResponse):void} cb
     * @public
     */
    ScheduleKeyDeletion(req, cb) {
        const resp = new ScheduleKeyDeletionResponse();
        this.request("ScheduleKeyDeletion", req, resp, cb);
    }
    /**
     * 获取指定密钥的设备指纹列表
     * @param {DescribeWhiteBoxDeviceFingerprintsRequest} req
     * @param {function(string, DescribeWhiteBoxDeviceFingerprintsResponse):void} cb
     * @public
     */
    DescribeWhiteBoxDeviceFingerprints(req, cb) {
        const resp = new DescribeWhiteBoxDeviceFingerprintsResponse();
        this.request("DescribeWhiteBoxDeviceFingerprints", req, resp, cb);
    }
    /**
     * 使用指定的RSA非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。
     * @param {AsymmetricRsaDecryptRequest} req
     * @param {function(string, AsymmetricRsaDecryptResponse):void} cb
     * @public
     */
    AsymmetricRsaDecrypt(req, cb) {
        const resp = new AsymmetricRsaDecryptResponse();
        this.request("AsymmetricRsaDecrypt", req, resp, cb);
    }
    /**
     * 删除指定（key, 资源，云产品）的记录，以表明：指定的云产品的资源已不再使用当前的key。
     * @param {UnbindCloudResourceRequest} req
     * @param {function(string, UnbindCloudResourceResponse):void} cb
     * @public
     */
    UnbindCloudResource(req, cb) {
        const resp = new UnbindCloudResourceResponse();
        this.request("UnbindCloudResource", req, resp, cb);
    }
    /**
     * 对指定的CMK开启密钥轮换功能。
     * @param {EnableKeyRotationRequest} req
     * @param {function(string, EnableKeyRotationResponse):void} cb
     * @public
     */
    EnableKeyRotation(req, cb) {
        const resp = new EnableKeyRotationResponse();
        this.request("EnableKeyRotation", req, resp, cb);
    }
    /**
     * 创建白盒密钥。 密钥个数的上限为 50。
     * @param {CreateWhiteBoxKeyRequest} req
     * @param {function(string, CreateWhiteBoxKeyResponse):void} cb
     * @public
     */
    CreateWhiteBoxKey(req, cb) {
        const resp = new CreateWhiteBoxKeyResponse();
        this.request("CreateWhiteBoxKey", req, resp, cb);
    }
    /**
     * 启用白盒密钥
     * @param {EnableWhiteBoxKeyRequest} req
     * @param {function(string, EnableWhiteBoxKeyResponse):void} cb
     * @public
     */
    EnableWhiteBoxKey(req, cb) {
        const resp = new EnableWhiteBoxKeyResponse();
        this.request("EnableWhiteBoxKey", req, resp, cb);
    }
    /**
     * 用于启用一个指定的CMK。
     * @param {EnableKeyRequest} req
     * @param {function(string, EnableKeyResponse):void} cb
     * @public
     */
    EnableKey(req, cb) {
        const resp = new EnableKeyResponse();
        this.request("EnableKey", req, resp, cb);
    }
    /**
     * 用于删除导入的密钥材料，仅对EXTERNAL类型的CMK有效，该接口将CMK设置为PendingImport 状态，并不会删除CMK，在重新进行密钥导入后可继续使用。彻底删除CMK请使用 ScheduleKeyDeletion 接口。
     * @param {DeleteImportedKeyMaterialRequest} req
     * @param {function(string, DeleteImportedKeyMaterialResponse):void} cb
     * @public
     */
    DeleteImportedKeyMaterial(req, cb) {
        const resp = new DeleteImportedKeyMaterialResponse();
        this.request("DeleteImportedKeyMaterial", req, resp, cb);
    }
    /**
     * 该接口用于批量获取主密钥属性信息。
     * @param {DescribeKeysRequest} req
     * @param {function(string, DescribeKeysResponse):void} cb
     * @public
     */
    DescribeKeys(req, cb) {
        const resp = new DescribeKeysResponse();
        this.request("DescribeKeys", req, resp, cb);
    }
    /**
     * 获取白盒密钥服务状态
     * @param {DescribeWhiteBoxServiceStatusRequest} req
     * @param {function(string, DescribeWhiteBoxServiceStatusResponse):void} cb
     * @public
     */
    DescribeWhiteBoxServiceStatus(req, cb) {
        const resp = new DescribeWhiteBoxServiceStatusResponse();
        this.request("DescribeWhiteBoxServiceStatus", req, resp, cb);
    }
    /**
     * 该接口用于对指定的cmk修改描述信息。对于处于PendingDelete状态的CMK禁止修改。
     * @param {UpdateKeyDescriptionRequest} req
     * @param {function(string, UpdateKeyDescriptionResponse):void} cb
     * @public
     */
    UpdateKeyDescription(req, cb) {
        const resp = new UpdateKeyDescriptionResponse();
        this.request("UpdateKeyDescription", req, resp, cb);
    }
    /**
     * 该接口用于批量禁止CMK的使用。
     * @param {DisableKeysRequest} req
     * @param {function(string, DisableKeysResponse):void} cb
     * @public
     */
    DisableKeys(req, cb) {
        const resp = new DisableKeysResponse();
        this.request("DisableKeys", req, resp, cb);
    }
    /**
     * 获取白盒解密密钥
     * @param {DescribeWhiteBoxDecryptKeyRequest} req
     * @param {function(string, DescribeWhiteBoxDecryptKeyResponse):void} cb
     * @public
     */
    DescribeWhiteBoxDecryptKey(req, cb) {
        const resp = new DescribeWhiteBoxDecryptKeyResponse();
        this.request("DescribeWhiteBoxDecryptKey", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=kms_client.js.map