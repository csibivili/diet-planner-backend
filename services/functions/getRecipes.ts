import { DynamoDB } from 'aws-sdk'
import { Table } from '@serverless-stack/node/table'

const dynamoDb = new DynamoDB.DocumentClient()

export default async function getRecipes(): Promise<Record<string, unknown>[] | undefined> {
  const params = {
    TableName: Table.Recipes.tableName,
  }

  const data = await dynamoDb.scan(params).promise()

  return data.Items
}
