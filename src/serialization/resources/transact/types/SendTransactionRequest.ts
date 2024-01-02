/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const SendTransactionRequest: core.serialization.ObjectSchema<
    serializers.transact.SendTransactionRequest.Raw,
    Syndicate.transact.SendTransactionRequest
> = core.serialization.object({
    requestId: core.serialization.string().optional(),
    projectId: core.serialization.string(),
    contractAddress: core.serialization.string(),
    chainId: core.serialization.number(),
    functionSignature: core.serialization.string(),
    args: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    organizationId: core.serialization.string(),
    organizationTier: core.serialization.string(),
});

export declare namespace SendTransactionRequest {
    interface Raw {
        requestId?: string | null;
        projectId: string;
        contractAddress: string;
        chainId: number;
        functionSignature: string;
        args?: Record<string, unknown> | null;
        organizationId: string;
        organizationTier: string;
    }
}
