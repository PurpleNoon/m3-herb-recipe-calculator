import { isEqual, keyBy, flatten, uniq } from 'lodash';
import type { Potion } from '@/libs/herbRecipeCalculate';
// import type { HerbInfo } from '@/libs/herbs';
import herbs from '@/libs/herbs';
import herbEffects from '@/libs/herbEffects';

export function checkTestSet(testSet: [string[], Potion][]) {
  const herbMap = keyBy(herbs, 'name');
  const herbEffectMap = keyBy(herbEffects, 'name');
  testSet.forEach(testCase => {
    const [recipe, potion] = testCase;
    const isValidRecipe = recipe.every(recipeHerbName =>
      Boolean(herbMap[recipeHerbName]),
    );
    if (!isValidRecipe) {
      recipe.forEach(recipeHerbName => {
        const isValidHerb = Boolean(herbMap[recipeHerbName]);
        if (!isValidHerb) {
          // eslint-disable-next-line no-console
          console.log(`Unexpect herb: ${recipeHerbName}`);
        }
      });
      throw new Error(`Not vailable recipe: ${JSON.stringify(testCase)}`);
    }
    const isValidPotion =
      potion &&
      Object.keys(potion.effects).every(potionEffectName =>
        Boolean(herbEffectMap[potionEffectName]),
      );
    if (!isValidPotion) {
      Object.keys(potion.effects).forEach(potionEffectName => {
        const isValidEffect = Boolean(herbEffectMap[potionEffectName]);
        if (!isValidEffect) {
          // eslint-disable-next-line no-console
          console.log(`Unexpect effect: ${potionEffectName}`);
        }
      });
      throw new Error(`Not vailable potion: ${JSON.stringify(testCase)}`);
    }
  });
}

const normalPotionTimeRange = [10, 11, 12, 13, 14];

const potionAllTimeRange = uniq(
  flatten(
    normalPotionTimeRange.map(herbTime => [
      herbTime - 7,
      herbTime,
      herbTime + 8,
      herbTime + 8 - 7,
    ]),
  ),
);

const isSameHerbTime = (timeA: number, timeB: number) =>
  potionAllTimeRange.includes(timeA) &&
  potionAllTimeRange.includes(timeB) &&
  timeA >= timeB - 7 &&
  timeA <= timeB + 8;

export function isSamePotion(a: Potion, b: Potion) {
  return isSameHerbTime(a.time, b.time) && isEqual(a.effects, b.effects);
}
