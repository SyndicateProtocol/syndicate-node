/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const SendTransactionResponse: core.serialization.ObjectSchema<
    serializers.transact.SendTransactionResponse.Raw,
    Syndicate.transact.SendTransactionResponse
> = core.serialization.object({
    transactionId: core.serialization.string(),
});

export declare namespace SendTransactionResponse {
    interface Raw {
        transactionId: string;
    }
}