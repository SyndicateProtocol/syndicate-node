/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const TransactionResponse: core.serialization.ObjectSchema<
    serializers.wallet.TransactionResponse.Raw,
    Syndicate.wallet.TransactionResponse
> = core.serialization.object({
    transactionId: core.serialization.string(),
    chainId: core.serialization.number(),
    projectId: core.serialization.string(),
    invalid: core.serialization.boolean(),
    contractAddress: core.serialization.string(),
    functionSignature: core.serialization.string(),
    data: core.serialization.string(),
    value: core.serialization.string(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    transactionAttempts: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).wallet.TransactionAttempt))
        .optional(),
});

export declare namespace TransactionResponse {
    interface Raw {
        transactionId: string;
        chainId: number;
        projectId: string;
        invalid: boolean;
        contractAddress: string;
        functionSignature: string;
        data: string;
        value: string;
        createdAt: string;
        updatedAt: string;
        transactionAttempts?: serializers.wallet.TransactionAttempt.Raw[] | null;
    }
}
