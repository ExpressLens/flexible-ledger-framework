export interface IUlaResponse {
    statusCode: any;
    body: any;
    error?: Error;
}
/**
 * UlaResponse object is sent back to the caller
 * and acts like an HTTP response. It contains
 * a statuscode and a dynamic body.
 */
export declare class UlaResponse {
    private readonly _statusCode;
    private readonly _body;
    private readonly _