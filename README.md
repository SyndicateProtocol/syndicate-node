# <img src="https://avatars.githubusercontent.com/u/76978866?s=200&v=4" width="22"> Syndicate Node

[![npm shield](https://img.shields.io/npm/v/@syndicateio/syndicate-node)](https://www.npmjs.com/package/@syndicateio/syndicate-node)

The Syndicate Node.js library provides access to a selection of endpoints to the Syndicate API.

## Documentation

Our API documentation is available at https://docs.syndicate.io.

## Usage

```typescript
import { SyndicateClient } from "@syndicateio/syndicate-node";

const syndicate = new SyndicateClient({ token: 'YOUR_ACCESS_TOKEN' })
const tx = await syndicate.transact.sendTransaction({
  projectId,
  contractAddress,
  chainId,
  functionSignature,
  args,
})
console.log('Transaction ID Received:', tx.transactionId)
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update.
