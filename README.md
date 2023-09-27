# <img src="https://avatars.githubusercontent.com/u/76978866?s=200&v=4" width="22"> Syndicate Node

[![npm shield](https://img.shields.io/npm/v/@syndicateio/syndicate-node)](https://www.npmjs.com/package/@syndicateio/syndicate-node)

The Syndicate Node.js library provides access to a selection of endpoints to the Syndicate API. For full functionality of our API please view the documentation below.

## Documentation

Our API documentation is available at https://docs.syndicate.io.

## Installation
```
npm i @syndicateio/syndicate-node
# or
yarn add @syndicateio/syndicate-node
```

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/syndicate-typescript?file=app.ts&view=editor)

```typescript
import { SyndicateClient } from "@syndicateio/syndicate-node";

const syndicate = new SyndicateClient({ token: 'YOUR_ACCESS_TOKEN' })

const tx = await syndicate.transact.sendTransaction({
  projectId: 'eb7dab54-f66b-4739-8c18-f5a6196f7117',
  contractAddress: '0x4Bc7a03C46c0BBb290d5455ff7f03d30263809e4',
  chainId: 80001,
  functionSignature: 'mintTo(address to)',
  args: {
    to: '0x18F33CEf45817C428d98C4E188A770191fDD4B79'
  },
})
console.log('Transaction ID Received:', tx.transactionId)
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. To use the API directly, please view the [API documentation](https://docs.syndicate.io).
