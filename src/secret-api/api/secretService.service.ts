/**
 * secret.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ApiAddSecretKeyValueResponse } from '../model/apiAddSecretKeyValueResponse';
import { ApiDeleteSecretKeyResponse } from '../model/apiDeleteSecretKeyResponse';
import { ApiDeleteSecretResponse } from '../model/apiDeleteSecretResponse';
import { ApiListSecretsResponse } from '../model/apiListSecretsResponse';
import { ApiSecret } from '../model/apiSecret';
import { ApiSecretExistsResponse } from '../model/apiSecretExistsResponse';
import { ApiUpdateSecretKeyValueResponse } from '../model/apiUpdateSecretKeyValueResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SecretServiceService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param body 
     * @param namespace 
     * @param secretName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe?: 'body', reportProgress?: boolean): Observable<ApiAddSecretKeyValueResponse>;
    public addSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiAddSecretKeyValueResponse>>;
    public addSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiAddSecretKeyValueResponse>>;
    public addSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addSecretKeyValue.');
        }

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling addSecretKeyValue.');
        }

        if (secretName === null || secretName === undefined) {
            throw new Error('Required parameter secretName was null or undefined when calling addSecretKeyValue.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ApiAddSecretKeyValueResponse>('post',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets/${encodeURIComponent(String(secretName))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param namespace 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSecret(body: ApiSecret, namespace: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createSecret(body: ApiSecret, namespace: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createSecret(body: ApiSecret, namespace: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createSecret(body: ApiSecret, namespace: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createSecret.');
        }

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling createSecret.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param namespace 
     * @param name 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSecret(namespace: string, name: string, observe?: 'body', reportProgress?: boolean): Observable<ApiDeleteSecretResponse>;
    public deleteSecret(namespace: string, name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiDeleteSecretResponse>>;
    public deleteSecret(namespace: string, name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiDeleteSecretResponse>>;
    public deleteSecret(namespace: string, name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling deleteSecret.');
        }

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteSecret.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ApiDeleteSecretResponse>('delete',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param namespace 
     * @param secretName 
     * @param key 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSecretKey(namespace: string, secretName: string, key: string, observe?: 'body', reportProgress?: boolean): Observable<ApiDeleteSecretKeyResponse>;
    public deleteSecretKey(namespace: string, secretName: string, key: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiDeleteSecretKeyResponse>>;
    public deleteSecretKey(namespace: string, secretName: string, key: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiDeleteSecretKeyResponse>>;
    public deleteSecretKey(namespace: string, secretName: string, key: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling deleteSecretKey.');
        }

        if (secretName === null || secretName === undefined) {
            throw new Error('Required parameter secretName was null or undefined when calling deleteSecretKey.');
        }

        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling deleteSecretKey.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ApiDeleteSecretKeyResponse>('delete',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets/${encodeURIComponent(String(secretName))}/keys/${encodeURIComponent(String(key))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param namespace 
     * @param name 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSecret(namespace: string, name: string, observe?: 'body', reportProgress?: boolean): Observable<ApiSecret>;
    public getSecret(namespace: string, name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiSecret>>;
    public getSecret(namespace: string, name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiSecret>>;
    public getSecret(namespace: string, name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling getSecret.');
        }

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSecret.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ApiSecret>('get',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param namespace 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listSecrets(namespace: string, observe?: 'body', reportProgress?: boolean): Observable<ApiListSecretsResponse>;
    public listSecrets(namespace: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiListSecretsResponse>>;
    public listSecrets(namespace: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiListSecretsResponse>>;
    public listSecrets(namespace: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling listSecrets.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ApiListSecretsResponse>('get',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param namespace 
     * @param name 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public secretExists(namespace: string, name: string, observe?: 'body', reportProgress?: boolean): Observable<ApiSecretExistsResponse>;
    public secretExists(namespace: string, name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiSecretExistsResponse>>;
    public secretExists(namespace: string, name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiSecretExistsResponse>>;
    public secretExists(namespace: string, name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling secretExists.');
        }

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling secretExists.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ApiSecretExistsResponse>('get',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets/${encodeURIComponent(String(name))}/exists`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param namespace 
     * @param secretName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe?: 'body', reportProgress?: boolean): Observable<ApiUpdateSecretKeyValueResponse>;
    public updateSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiUpdateSecretKeyValueResponse>>;
    public updateSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiUpdateSecretKeyValueResponse>>;
    public updateSecretKeyValue(body: ApiSecret, namespace: string, secretName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateSecretKeyValue.');
        }

        if (namespace === null || namespace === undefined) {
            throw new Error('Required parameter namespace was null or undefined when calling updateSecretKeyValue.');
        }

        if (secretName === null || secretName === undefined) {
            throw new Error('Required parameter secretName was null or undefined when calling updateSecretKeyValue.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ApiUpdateSecretKeyValueResponse>('patch',`${this.basePath}/apis/v1beta1/${encodeURIComponent(String(namespace))}/secrets/${encodeURIComponent(String(secretName))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
