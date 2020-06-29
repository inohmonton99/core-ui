/**
 * Onepanel
 * Onepanel API
 *
 * The version of the OpenAPI document: 0.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { KeyValue } from './keyValue';
import { WorkspaceTemplate } from './workspaceTemplate';
import { Parameter } from './parameter';
import { WorkspaceStatus } from './workspaceStatus';


export interface Workspace { 
    uid?: string;
    name?: string;
    version?: string;
    createdAt?: string;
    parameters?: Array<Parameter>;
    workspaceTemplate?: WorkspaceTemplate;
    status?: WorkspaceStatus;
    labels?: Array<KeyValue>;
    url?: string;
    templateParameters?: Array<Parameter>;
}

