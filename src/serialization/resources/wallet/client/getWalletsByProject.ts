/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.wallet.getWalletsByProject.Response.Raw,
    Syndicate.wallet.WalletWithTxCountAndBalance[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).wallet.WalletWithTxCountAndBalance)
);

export declare namespace Response {
    type Raw = serializers.wallet.WalletWithTxCountAndBalance.Raw[];
}
