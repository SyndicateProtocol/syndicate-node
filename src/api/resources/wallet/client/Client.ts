/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Syndicate from "../../..";
import * as serializers from "../../../../serialization";
import * as environments from "../../../../environments";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Wallet {
    interface Options {
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Wallet {
    constructor(protected readonly _options: Wallet.Options) {}

    /**
     * Creates a new wallet and assigns it to a project
     * @throws {@link Syndicate.wallet.CreateWalletError}
     */
    public async createWallet(
        request: Syndicate.wallet.CreateWalletRequest,
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.CreateWalletResponse> {
        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, "/wallet/create"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            body: await serializers.wallet.CreateWalletRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.CreateWalletResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Syndicate.wallet.CreateWalletError(
                        await serializers.wallet.CreateWalletErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SyndicateError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retires a wallet from usage
     * @throws {@link Syndicate.wallet.RetireWalletError}
     */
    public async retireWallet(
        request: Syndicate.wallet.RetireWalletRequest,
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.RetireWalletResponse> {
        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, "/wallet/retire"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            body: await serializers.wallet.RetireWalletRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.RetireWalletResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Syndicate.wallet.RetireWalletError();
                default:
                    throw new errors.SyndicateError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Toggle a wallet's isActive status
     * @throws {@link Syndicate.wallet.WalletNotFoundError}
     */
    public async toggleIsActive(
        request: Syndicate.wallet.ToggleIsActiveRequest,
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.Wallet> {
        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, "/wallet/toggleIsActive"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            body: await serializers.wallet.ToggleIsActiveRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.Wallet.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Syndicate.wallet.WalletNotFoundError();
                default:
                    throw new errors.SyndicateError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a transaction request by id
     * @throws {@link Syndicate.wallet.TransactionNotFoundError}
     */
    public async getTransactionRequest(
        projectId: string,
        transactionId: string,
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.TransactionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                environments.SyndicateEnvironment.Production,
                `/wallet/project/${projectId}/request/${transactionId}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.TransactionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Syndicate.wallet.TransactionNotFoundError();
                default:
                    throw new errors.SyndicateError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets a list of transaction requests for a project
     * @throws {@link Syndicate.wallet.TransactionNotFoundError}
     */
    public async getTransactionRequestsByProject(
        projectId: string,
        request: Syndicate.wallet.GetRequestsByProjectIdRequest = {},
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.TransactionRequestsByProjectResponse> {
        const { search, page, limit, invalid } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (search != null) {
            _queryParams["search"] = search;
        }

        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (invalid != null) {
            _queryParams["invalid"] = invalid.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, `/wallet/project/${projectId}/requests`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.TransactionRequestsByProjectResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Syndicate.wallet.TransactionNotFoundError();
                default:
                    throw new errors.SyndicateError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets a list of wallets for a project
     * @throws {@link Syndicate.wallet.GetWalletsError}
     */
    public async getWalletsByProject(
        projectId: string,
        request: Syndicate.wallet.GetWalletsByProjectIdRequest = {},
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.WalletWithTxCountAndBalance[]> {
        const { withData } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (withData != null) {
            _queryParams["withData"] = withData.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, `/wallet/project/${projectId}/wallets`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.getWalletsByProject.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Syndicate.wallet.GetWalletsError();
                default:
                    throw new errors.SyndicateError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets a list of transactions for a project
     */
    public async getTransactionsByProject(
        projectId: string,
        request: Syndicate.wallet.GetTransactionsByProjectIdRequest = {},
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.TransactionsByProjectResponse> {
        const { search, page, limit, reverted, status } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (search != null) {
            _queryParams["search"] = search;
        }

        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (reverted != null) {
            _queryParams["reverted"] = reverted.toString();
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) => item);
            } else {
                _queryParams["status"] = status;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, `/wallet/project/${projectId}/transactions`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.TransactionsByProjectResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SyndicateError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get activity for a project
     */
    public async getProjectTransactionStats(
        projectId: string,
        requestOptions?: Wallet.RequestOptions
    ): Promise<Syndicate.wallet.ProjectTransactionStatsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, `/wallet/project/${projectId}/transactionStats`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@calebguy/testing",
                "X-Fern-SDK-Version": "0.0.466",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.wallet.ProjectTransactionStatsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SyndicateError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SyndicateError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SyndicateTimeoutError();
            case "unknown":
                throw new errors.SyndicateError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
