/**
 * @inner
 */
export declare class AbstractModel {
    constructor();
    /**
     * @inner
     */
    deserialize(params: any): void;
    /**
     * 将object转化为json格式的string
     * @return {string}
     */
    to_json_string(): string;
    /**
     * 将json格式的string转化为object
     * @param  {string} dataString
     */
    from_json_string(dataString: string): void;
}
