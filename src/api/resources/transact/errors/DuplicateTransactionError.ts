/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as Syndicate from "../../..";

export class DuplicateTransactionError extends errors.SyndicateError {
    constructor(body: Syndicate.transact.ErrorBody) {
        super({
            statusCode: 409,
            body: body,
        });
        Object.setPrototypeOf(this, DuplicateTransactionError.prototype);
    }
}
