/**
 * @inner
 */
export default class Sign {
    static sign(secretKey: string, signStr: string, signMethod: any): string;
    static sign3({ method, url, payload, timestamp, service, secretId, secretKey, multipart, boundary, }: any): string;
}
