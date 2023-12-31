/* tslint:disable */
/* eslint-disable */
/**
 * Auth
 * Authenficate user
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateUserDto
 */
export interface CreateUserDto {
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    'password': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserDto
     */
    'status': CreateUserDtoStatusEnum;
}

export const CreateUserDtoStatusEnum = {
    ACTIVATED: 'ACTIVATED',
    PENDING: 'PENDING'
} as const;

export type CreateUserDtoStatusEnum = typeof CreateUserDtoStatusEnum[keyof typeof CreateUserDtoStatusEnum];

/**
 * 
 * @export
 * @interface SignupDto
 */
export interface SignupDto {
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface Tokens
 */
export interface Tokens {
    /**
     * 
     * @type {string}
     * @memberof Tokens
     */
    'access_token': string;
    /**
     * 
     * @type {string}
     * @memberof Tokens
     */
    'refresh_token': string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
        /**
         * 
         * @param {string} authorization Bearer &lt;referesh token&gt;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRefreshTokens: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('authControllerRefreshTokens', 'authorization', authorization)
            const localVarPath = `/api/auth/refresh-tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
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
         * @param {SignupDto} signupDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSigninLocal: async (signupDto: SignupDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signupDto' is not null or undefined
            assertParamExists('authControllerSigninLocal', 'signupDto', signupDto)
            const localVarPath = `/api/auth/local/signin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signupDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignupLocal: async (createUserDto: CreateUserDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserDto' is not null or undefined
            assertParamExists('authControllerSignupLocal', 'createUserDto', createUserDto)
            const localVarPath = `/api/auth/local/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerLogout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} authorization Bearer &lt;referesh token&gt;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerRefreshTokens(authorization: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tokens>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerRefreshTokens(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {SignupDto} signupDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerSigninLocal(signupDto: SignupDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tokens>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerSigninLocal(signupDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerSignupLocal(createUserDto: CreateUserDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerSignupLocal(createUserDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogout(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.authControllerLogout(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthApiAuthControllerRefreshTokensRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRefreshTokens(requestParameters: AuthApiAuthControllerRefreshTokensRequest, options?: AxiosRequestConfig): AxiosPromise<Tokens> {
            return localVarFp.authControllerRefreshTokens(requestParameters.authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthApiAuthControllerSigninLocalRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSigninLocal(requestParameters: AuthApiAuthControllerSigninLocalRequest, options?: AxiosRequestConfig): AxiosPromise<Tokens> {
            return localVarFp.authControllerSigninLocal(requestParameters.signupDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthApiAuthControllerSignupLocalRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignupLocal(requestParameters: AuthApiAuthControllerSignupLocalRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.authControllerSignupLocal(requestParameters.createUserDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authControllerRefreshTokens operation in AuthApi.
 * @export
 * @interface AuthApiAuthControllerRefreshTokensRequest
 */
export interface AuthApiAuthControllerRefreshTokensRequest {
    /**
     * Bearer &lt;referesh token&gt;
     * @type {string}
     * @memberof AuthApiAuthControllerRefreshTokens
     */
    readonly authorization: string
}

/**
 * Request parameters for authControllerSigninLocal operation in AuthApi.
 * @export
 * @interface AuthApiAuthControllerSigninLocalRequest
 */
export interface AuthApiAuthControllerSigninLocalRequest {
    /**
     * 
     * @type {SignupDto}
     * @memberof AuthApiAuthControllerSigninLocal
     */
    readonly signupDto: SignupDto
}

/**
 * Request parameters for authControllerSignupLocal operation in AuthApi.
 * @export
 * @interface AuthApiAuthControllerSignupLocalRequest
 */
export interface AuthApiAuthControllerSignupLocalRequest {
    /**
     * 
     * @type {CreateUserDto}
     * @memberof AuthApiAuthControllerSignupLocal
     */
    readonly createUserDto: CreateUserDto
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerLogout(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerLogout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthApiAuthControllerRefreshTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerRefreshTokens(requestParameters: AuthApiAuthControllerRefreshTokensRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerRefreshTokens(requestParameters.authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthApiAuthControllerSigninLocalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerSigninLocal(requestParameters: AuthApiAuthControllerSigninLocalRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerSigninLocal(requestParameters.signupDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthApiAuthControllerSignupLocalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerSignupLocal(requestParameters: AuthApiAuthControllerSignupLocalRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerSignupLocal(requestParameters.createUserDto, options).then((request) => request(this.axios, this.basePath));
    }
}



