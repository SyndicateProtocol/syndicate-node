/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const WalletWithTxCountAndBalance: core.serialization.ObjectSchema<
    serializers.wallet.WalletWithTxCountAndBalance.Raw,
    Syndicate.wallet.WalletWithTxCountAndBalance
> = core.serialization
    .object({
        txCount: core.serialization.number().optional(),
        balance: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).wallet.Wallet));

export declare namespace WalletWithTxCountAndBalance {
    interface Raw extends serializers.wallet.Wallet.Raw {
        txCount?: number | null;
        balance?: string | null;
    }
}
