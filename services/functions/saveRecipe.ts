import { DynamoDB } from 'aws-sdk'
import { Table } from '@serverless-stack/node/table'
import Recipe from '../Recipe'

const dynamoDb = new DynamoDB.DocumentClient()

export default async function saveRecipe(recipe: Recipe): Promise<Recipe> {
  const params = {
    Item: recipe as Record<string, unknown>,
    TableName: Table.Recipes.tableName,
  }

  await dynamoDb.put(params).promise()

  return recipe
}
