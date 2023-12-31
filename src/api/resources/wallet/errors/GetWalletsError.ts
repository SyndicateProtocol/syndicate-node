/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class GetWalletsError extends errors.SyndicateError {
    constructor() {
        super({
            message: "GetWalletsError",
            statusCode: 500,
        });
        Object.setPrototypeOf(this, GetWalletsError.prototype);
    }
}
