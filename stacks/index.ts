import { App } from '@serverless-stack/resources'
import { StorageStack } from './StorageStack'
import { ApiStack } from './ApiStack'
import { RemovalPolicy } from 'aws-cdk-lib'

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm',
    },
  })

  app.stack(StorageStack).stack(ApiStack).setDefaultRemovalPolicy(RemovalPolicy.DESTROY)
}