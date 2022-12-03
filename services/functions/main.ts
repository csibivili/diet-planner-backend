import Recipe from '../Recipe'
import saveRecipe from './saveRecipe'
import getRecipes from './getRecipes'

type AppSyncEvent = {
  info: {
    fieldName: string
  }
  arguments: {
    recipe: Recipe
  }
}

export async function handler(
  event: AppSyncEvent
): Promise<Record<string, unknown>[] | Recipe | string | null | undefined> {
  switch (event.info.fieldName) {
    case 'saveRecipe':
      return await saveRecipe(event.arguments.recipe)
    case 'getRecipes':
      return await getRecipes()
    default:
      return null
  }
}
