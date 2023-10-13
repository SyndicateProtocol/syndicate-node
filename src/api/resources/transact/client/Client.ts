/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Syndicate from "../../..";
import * as serializers from "../../../../serialization";
import * as environments from "../../../../environments";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Transact {
    interface Options {
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Transact {
    constructor(protected readonly _options: Transact.Options) {}

    /**
     * Send transaction to blockchain
     * @throws {@link Syndicate.transact.MalformedFunctionDataError}
     * @throws {@link Syndicate.transact.ImATeapotError}
     * @throws {@link Syndicate.transact.InternalError}
     * @throws {@link Syndicate.transact.InvalidRequestIdError}
     */
    public async sendTransaction(
        request: Syndicate.transact.SendTransactionRequest,
        requestOptions?: Transact.RequestOptions
    ): Promise<Syndicate.transact.SendTransactionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(environments.SyndicateEnvironment.Production, "/transact/sendTransaction"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@syndicateio/syndicate-node",
                "X-Fern-SDK-Version": "0.0.286",
            },
            contentType: "application/json",
            body: await serializers.transact.SendTransactionRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.transact.SendTransactionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Syndicate.transact.MalformedFunctionDataError(
                        await serializers.transact.ErrorWithMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 418:
                    throw new Syndicate.transact.ImATeapotError();
                case 500:
                    throw new Syndicate.transact.InternalError();
                case 422:
                    throw new Syndicate.transact.InvalidRequestIdError(
                        await serializers.transact.ErrorWithMessage.parseOrThrow(_response.error.body, {
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

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
