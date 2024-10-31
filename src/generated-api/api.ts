/* tslint:disable */
/* eslint-disable */
/**
 * Todo API Staging
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * Error code
     * @type {number}
     * @memberof ErrorResponse
     */
    'code': number;
    /**
     * Error message
     * @type {string}
     * @memberof ErrorResponse
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface TodoResponse
 */
export interface TodoResponse {
    /**
     * ID of the todo
     * @type {string}
     * @memberof TodoResponse
     */
    'id': string;
    /**
     * Name of the todo
     * @type {string}
     * @memberof TodoResponse
     */
    'name': string;
    /**
     * Description of the todo
     * @type {string}
     * @memberof TodoResponse
     */
    'description': string;
    /**
     * Status of the todo
     * @type {boolean}
     * @memberof TodoResponse
     */
    'isCompleted': boolean;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        root: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/heartbeat`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async root(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.root(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        root(options?: any): AxiosPromise<void> {
            return localVarFp.root(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public root(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).root(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TodosApi - axios parameter creator
 * @export
 */
export const TodosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns one todo based on an ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTodoById', 'id', id)
            const localVarPath = `/api/v1/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all todos for current user. Todos returned depends on the current user\'s access and roles.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodosApi - functional programming interface
 * @export
 */
export const TodosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodosApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns one todo based on an ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodoById(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodoById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all todos for current user. Todos returned depends on the current user\'s access and roles.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodos(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TodoResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodos(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodosApi - factory interface
 * @export
 */
export const TodosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodosApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns one todo based on an ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoById(id: string, options?: any): AxiosPromise<TodoResponse> {
            return localVarFp.getTodoById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all todos for current user. Todos returned depends on the current user\'s access and roles.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos(options?: any): AxiosPromise<Array<TodoResponse>> {
            return localVarFp.getTodos(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodosApi - object-oriented interface
 * @export
 * @class TodosApi
 * @extends {BaseAPI}
 */
export class TodosApi extends BaseAPI {
    /**
     * 
     * @summary Returns one todo based on an ID
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodosApi
     */
    public getTodoById(id: string, options?: AxiosRequestConfig) {
        return TodosApiFp(this.configuration).getTodoById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all todos for current user. Todos returned depends on the current user\'s access and roles.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodosApi
     */
    public getTodos(options?: AxiosRequestConfig) {
        return TodosApiFp(this.configuration).getTodos(options).then((request) => request(this.axios, this.basePath));
    }
}


