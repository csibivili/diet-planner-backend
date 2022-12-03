import { StackContext, Table } from '@serverless-stack/resources'

export function StorageStack({ stack }: StackContext) {
  // Create the DynamoDB table
  const table = new Table(stack, 'Recipes', {
    fields: {
      recipeId: 'string',
    },
    primaryIndex: { partitionKey: 'recipeId' },
  })

  return {
    table,
  }
}
