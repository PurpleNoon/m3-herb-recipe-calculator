import { keyBy } from 'lodash';
import herbRecipeTestSetContent from './herbRecipeTestSet.json';
import { checkTestSet, isSamePotion } from './testUtils';
import { calculateHerbRecipeEffects } from '@/libs/herbRecipeCalculate';
import type { Potion } from '@/libs/herbRecipeCalculate';
import herbs from '@/libs/herbs';

const herbMap = keyBy(herbs, 'name');
const herbRecipeTestSet = herbRecipeTestSetContent as [string[], Potion][];

describe('test herb recipe calculate', () => {
  test('use project test set', () => {
    checkTestSet(herbRecipeTestSet);
    let skipCount = 0;
    herbRecipeTestSet.forEach((testCase, index) => {
      const [recipe, potion] = testCase;
      // 随机效果的校验，以后再说吧
      if (
        recipe.some(herbName =>
          ['紫丁香蘑', '秀珍菇', '粉褶菌'].includes(herbName),
        )
      ) {
        skipCount++;
        // eslint-disable-next-line no-console
        console.log(
          `Skip recipe which has random effect herb: ${JSON.stringify(recipe)}`,
          '\n',
          `Skip count: ${skipCount}`,
        );
        return;
      }
      const fullRecipe = recipe.map(herbName => herbMap[herbName]);
      const actualPotion = calculateHerbRecipeEffects(fullRecipe);
      const samePotion = isSamePotion(potion, actualPotion);
      if (!samePotion) {
        // eslint-disable-next-line no-console
        console.log(`Recipe: ${JSON.stringify(fullRecipe, null, 2)}`);
        // eslint-disable-next-line no-console
        console.log(`Actual potion: ${JSON.stringify(actualPotion)}`);
        // eslint-disable-next-line no-console
        console.log(`Expect potion: ${JSON.stringify(potion)}`);
      }
      expect(samePotion).toBe(true);
      // eslint-disable-next-line no-console
      console.log(`Progress: ${index + 1}/${herbRecipeTestSet.length}`);
    });
  });
});
