import {
  findHerbRecipe,
  herbRecipeResultSorter,
} from '../libs/herbRecipeCalculate';
import type { HerbSearchForm } from '../components/HerbRecipeCalculator'
import { throttle } from 'lodash'

// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

// Respond to message from parent thread
ctx.addEventListener("message", (event) => {
  const action = event.data;
  const handlerMap = {
    findRecipes(event) {
      const list = calculateHerbRecipesCount(event.data.data, ctx.postMessage)
      ctx.postMessage({
        name: 'finishCalculateHerbRecipes',
        data: {
          list
        }
      })
    }
  } as Record<string, (event: MessageEvent<any>) => void>;
  handlerMap[action.name] && handlerMap[action.name](event)
});

function calculateHerbRecipesCount(searchForm: HerbSearchForm, postMessage: typeof ctx.postMessage) {
  const {
    targetEffects,
    avoidEffects,
    topCount,
  } = searchForm
  const herbRecipes = findHerbRecipe({
    targetEffects,
    avoidEffects,
    notice: throttle((actionType: string, data) => {
      postMessage({
        name: actionType,
        data
      })
    }, 50)
  });
  postMessage({
    name: 'sortingHerbRecipes',
  })
  const sortedHerbRecipes = herbRecipes.sort(herbRecipeResultSorter);
  return sortedHerbRecipes.slice(0, topCount)
}
