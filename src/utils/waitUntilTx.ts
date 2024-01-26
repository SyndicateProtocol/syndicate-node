import { SyndicateClient } from "Client"

interface WaitUntilTxOptions {
  projectID: string
  txID: string
  maxAttempts?: number
  every?: number
}

export async function waitUntilTx(client: SyndicateClient, {
  projectID,
  txID,
  maxAttempts = 20,
  every = 1000,
}: WaitUntilTxOptions) {
  let currAttempts = 0
  let transactionHash = null

  while (!transactionHash) {
    await new Promise((resolve) => setTimeout(resolve, every))

    if (currAttempts >= maxAttempts - 1) {
      throw new Error("Max attempts reached")
    }

    const txAttempts = (await client.wallet.getTransactionRequest(projectID, txID))?.transactionAttempts

    if (txAttempts && txAttempts.length > 0) {
      transactionHash = txAttempts[txAttempts.length - 1].hash
      break
    }

    currAttempts += 1
  }

  return transactionHash
}
