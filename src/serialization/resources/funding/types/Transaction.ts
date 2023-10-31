/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const Transaction: core.serialization.ObjectSchema<
    serializers.funding.Transaction.Raw,
    Syndicate.funding.Transaction
> = core.serialization.object({
    id: core.serialization.string(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    chainId: core.serialization.number(),
    projectId: core.serialization.string(),
    fromAddress: core.serialization.string(),
    toAddress: core.serialization.string(),
    amount: core.serialization.string(),
    hash: core.serialization.string(),
    signedTxn: core.serialization.string(),
    block: core.serialization.number(),
    status: core.serialization.lazy(async () => (await import("../../..")).funding.TransactionStatus),
});

export declare namespace Transaction {
    interface Raw {
        id: string;
        createdAt: string;
        updatedAt: string;
        chainId: number;
        projectId: string;
        fromAddress: string;
        toAddress: string;
        amount: string;
        hash: string;
        signedTxn: string;
        block: number;
        status: serializers.funding.TransactionStatus.Raw;
    }
}
