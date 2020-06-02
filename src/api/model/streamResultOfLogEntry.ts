/**
 * Onepanel Core
 * Onepanel Core project API
 *
 * The version of the OpenAPI document: 1.0.0-beta1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GrpcGatewayRuntimeStreamError } from './grpcGatewayRuntimeStreamError';
import { LogEntry } from './logEntry';


export interface StreamResultOfLogEntry { 
    result?: LogEntry;
    error?: GrpcGatewayRuntimeStreamError;
}
