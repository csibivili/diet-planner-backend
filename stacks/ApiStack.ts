import { AppSyncApi, StackContext, use } from '@serverless-stack/resources'
import { StorageStack } from './StorageStack'

export function ApiStack({ stack }: StackContext) {
  const { table } = use(StorageStack)

  // Create the API
  const api = new AppSyncApi(stack, 'Api', {
    schema: 'services/graphql/schema.graphql',
    defaults: {
      function: {
        bind: [table],
      },
    },
    dataSources: {
      recipes: 'functions/main.handler',
    },
    resolvers: {
      'Query getRecipes': 'recipes',
      'Mutation saveRecipe': 'recipes',
    },
  })

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiId: api.apiId,
    ApiKey: api.cdk.graphqlApi.apiKey ?? '',
    APiUrl: api.url,
  })

  // Return the API resource
  return {
    api,
  }
}
