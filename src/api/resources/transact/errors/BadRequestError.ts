/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as Syndicate from "../../..";

export class BadRequestError extends errors.SyndicateError {
    constructor(body: Syndicate.transact.ErrorBody) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
