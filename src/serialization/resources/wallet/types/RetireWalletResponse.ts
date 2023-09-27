/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const RetireWalletResponse: core.serialization.ObjectSchema<
    serializers.wallet.RetireWalletResponse.Raw,
    Syndicate.wallet.RetireWalletResponse
> = core.serialization.object({
    projectId: core.serialization.string(),
    walletAddress: core.serialization.string(),
    transactionId: core.serialization.string().optional(),
});

export declare namespace RetireWalletResponse {
    interface Raw {
        projectId: string;
        walletAddress: string;
        transactionId?: string | null;
    }
}
