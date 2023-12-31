/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const CreateWalletResponse: core.serialization.ObjectSchema<
    serializers.wallet.CreateWalletResponse.Raw,
    Syndicate.wallet.CreateWalletResponse
> = core.serialization.object({
    projectId: core.serialization.string(),
    walletAddress: core.serialization.string(),
});

export declare namespace CreateWalletResponse {
    interface Raw {
        projectId: string;
        walletAddress: string;
    }
}
