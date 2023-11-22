/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Transact } from "./api/resources/transact/client/Client";
import { Funding } from "./api/resources/funding/client/Client";
import { Wallet } from "./api/resources/wallet/client/Client";

export declare namespace SyndicateClient {
    interface Options {
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class SyndicateClient {
    constructor(protected readonly _options: SyndicateClient.Options) {}

    protected _transact: Transact | undefined;

    public get transact(): Transact {
        return (this._transact ??= new Transact(this._options));
    }

    protected _funding: Funding | undefined;

    public get funding(): Funding {
        return (this._funding ??= new Funding(this._options));
    }

    protected _wallet: Wallet | undefined;

    public get wallet(): Wallet {
        return (this._wallet ??= new Wallet(this._options));
    }
}
