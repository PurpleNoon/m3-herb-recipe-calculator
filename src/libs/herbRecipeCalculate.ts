import { intersection, countBy, flatten, groupBy } from 'lodash';
import { combinationsWithReplacement } from '@shlappas/itertools';
import type { HerbEffect } from '../libs/herbEffects';
// import herbEffects from '@/libs/herbEffects';
import herbs from '../libs/herbs';
import type { HerbInfo } from '../libs/herbs';

// const herbEffectsSet = keyBy(herbEffects, 'name');
// const herbSet = keyBy(herbs, 'name');
export interface Potion {
  time: number;
  effects: Record<string, number>;
}

const getSpecialEffectMapWithLv = (recipe: HerbInfo[]) => {
  // 计算效果数量
  const specialEffectMap = countBy(
    recipe,
    herb => herb.effects[herb.effects.length - 1],
  );
  const specialEffectMapWithLv = {} as Record<string, number>;
  for (const [specialEffect, weight] of Object.entries(specialEffectMap)) {
    // 药草的每个效果相当于半级
    const effectLv = Math.floor(weight * 0.5);
    if (effectLv < 1) {
      // 半级效果不生效
      continue;
    }
    if (specialEffect === '药水时间提升8分') {
      const time = specialEffectMapWithLv['药水时间'] || 0;
      // 时间提升效果最多生效一次
      specialEffectMapWithLv['药水时间'] = time + 8;
    }
    if (specialEffect === '药水时间缩短7分') {
      const time = specialEffectMapWithLv['药水时间'] || 0;
      // 时间下降效果最多生效一次
      specialEffectMapWithLv['药水时间'] = time - 7;
    }
    if (specialEffect === '药水等级提升1级') {
      const lv = specialEffectMapWithLv['药水等级'] || 0;
      // 等级提升效果最多生效两次
      specialEffectMapWithLv['药水等级'] = lv + Math.min(effectLv, 2);
    }
    if (specialEffect === '药水等级下降1级') {
      const lv = specialEffectMapWithLv['药水等级'] || 0;
      // 等级下降效果最多生效两次
      specialEffectMapWithLv['药水等级'] = lv - Math.min(effectLv, 2);
    }
  }
  return specialEffectMapWithLv;
};

const getNormalEffectMapWithLv = (recipe: HerbInfo[]) => {
  // 计算效果数量
  const normalEffectMap = countBy(
    flatten(recipe.map(herb => herb.effects.slice(0, herb.effects.length - 1))),
  );
  const normalEffectMapWithLv = {} as Record<string, number>;
  for (const [effectName, weight] of Object.entries(normalEffectMap)) {
    // 药草的每个效果相当于半级
    const effectLv = Math.floor(weight * 0.5);
    // 半级效果不生效
    if (effectLv < 1) {
      continue;
    }
    normalEffectMapWithLv[effectName] = effectLv;
  }
  return normalEffectMapWithLv;
};

// 计算药草配方效果
export function calculateHerbRecipeEffects(herbRecipe: HerbInfo[]): Potion {
  const specialEffectMapWithLv = getSpecialEffectMapWithLv(herbRecipe);
  const normalEffectMapWithLv = getNormalEffectMapWithLv(herbRecipe);

  const improveTime = specialEffectMapWithLv['药水时间'] || 0;
  // TODO: 把这个时间换成偏移量
  const potionTime = 12 + improveTime;
  const improveLv = specialEffectMapWithLv['药水等级'] || 0;
  const finalEffectMapWithLv = Object.keys(normalEffectMapWithLv).reduce(
    (total, normalEffect) => {
      // 等级下降效果至少会将效果保留1级
      total[normalEffect] = Math.max(
        normalEffectMapWithLv[normalEffect] + improveLv,
        1,
      );
      return total;
    },
    {} as Record<string, number>,
  );

  return {
    time: potionTime,
    effects: finalEffectMapWithLv,
  };
}

export type ValidHerbRecipe = [HerbInfo[], Potion];

const herbSlotCount = 5;

export function findHerbRecipe(
  targetEffects: string[] = [],
  top = 10,
  avoidEffects: string[] = [],
  notice: (message: string) => void = () => undefined,
) {
  const aimHerbs = herbs.filter(
    herb =>
      herb.effects.includes('药水等级提升1级') ||
      Boolean(intersection(targetEffects, herb.effects).length),
  );
  notice('startFindHerbRecipes');
  const herbRecipes = [...combinationsWithReplacement(aimHerbs, herbSlotCount)];
  notice('calculatePotionsEffect');
  const herbRecipeResults = herbRecipes.map(
    herbRecipe =>
      [herbRecipe, calculateHerbRecipeEffects(herbRecipe)] as ValidHerbRecipe,
  );
  const validHerbRecipes = herbRecipeResults.filter(([_, potion]) =>
    Object.keys(potion.effects).every(
      potionEffect => !avoidEffects.includes(potionEffect),
    ),
  );
  notice('sortValidHerbRecipes');
  const sortedValidHerbRecipes = validHerbRecipes.sort(herbRecipeResultSorter);
  notice('finishFindHerbRecipes');
  return sortedValidHerbRecipes.slice(0, top);
}

export function getHerbEffectTagSet(allHerbEffects: HerbEffect[]) {
  const herbEffectWithTags = flatten(
    allHerbEffects.map(herbEffect =>
      herbEffect.tags
        .filter(herbEffectTag =>
          ['正面效果', '负面效果', '其他效果'].includes(herbEffectTag),
        )
        .map(herbTag => [herbTag, herbEffect] as [string, HerbEffect]),
    ),
  );
  const herbEffectTagSet = groupBy(
    herbEffectWithTags,
    herbEffectWithTag => herbEffectWithTag[0],
  );
  return herbEffectTagSet;
}

const targetEffectTagSortOrderMap = {
  正面效果: 1,
  其他效果: 2,
  负面效果: 3,
} as Record<string, number>;

export function targetEffectTagSorter(a: string, b: string) {
  return (
    (targetEffectTagSortOrderMap[a] || 0) -
    (targetEffectTagSortOrderMap[b] || 0)
  );
}

const avoidEffectTagSortOrderMap = {
  负面效果: 1,
  其他效果: 2,
  正面效果: 3,
} as Record<string, number>;

export function avoidEffectTagSorter(a: string, b: string) {
  return (
    (avoidEffectTagSortOrderMap[a] || 0) - (avoidEffectTagSortOrderMap[b] || 0)
  );
}

export function herbRecipeResultSorter(a: ValidHerbRecipe, b: ValidHerbRecipe) {
  const getPotionMaxEffectLv = (potion: Potion) =>
    Math.max(...Object.values(potion.effects));
  const sum = (...numbers: number[]) =>
    numbers.reduce((total, num) => total + num, 0);
  const getPotionAllEffectLv = (potion: Potion) =>
    sum(...Object.values(potion.effects));
  const potionMaxEffectDiff =
    getPotionMaxEffectLv(b[1]) - getPotionMaxEffectLv(a[1]);
  if (potionMaxEffectDiff !== 0) {
    return potionMaxEffectDiff;
  }
  return getPotionAllEffectLv(b[1]) - getPotionAllEffectLv(a[1]);
}
