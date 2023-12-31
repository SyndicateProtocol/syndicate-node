/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Syndicate from "../../../../api";
import * as core from "../../../../core";

export const TransactionStatus: core.serialization.Schema<
    serializers.wallet.TransactionStatus.Raw,
    Syndicate.wallet.TransactionStatus
> = core.serialization.enum_(["PENDING", "PROCESSED", "SUBMITTED", "CONFIRMED"]);

export declare namespace TransactionStatus {
    type Raw = "PENDING" | "PROCESSED" | "SUBMITTED" | "CONFIRMED";
}
