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

  if (app.stage !== "prod") {
    app.setDefaultRemovalPolicy(RemovalPolicy.DESTROY);
  }

  app.stack(StorageStack).stack(ApiStack);
}
