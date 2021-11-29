const herbEffects = [
  {
    name: '急迫',
    description: `方块挖掘速度提升(等级x20%)，攻击速度提升(等级x10%)，玩家的手臂挥动得更快`,
    sampleDescription: `挖掘速度提升`,
    tags: ['正面效果', '原版'],
  },
  {
    name: '防火',
    description: `获得对火、熔岩、烈焰人火球冲击与岩浆块效果的免疫`,
    sampleDescription: `免疫火焰伤害`,
    tags: ['正面效果', '原版'],
  },
  {
    name: '力量',
    description: `力量buff可以提高玩家的近战伤害。\n带有该buff的玩家将提升0.3*（物理攻击力+武器面板）的近战伤害。\n物理远程伤害及魔法伤害则不受影响。`,
    sampleDescription: `提升近战伤害`,
    tags: ['正面效果', '魔法金属', '机制重写'],
  },
  {
    name: '缓慢',
    description: `缩小视野\n每等级速度减慢15%`,
    sampleDescription: `移动速度降低`,
    tags: ['负面效果', '原版'],
  },
  {
    name: '药水时间缩短7分',
    description: ``,
    sampleDescription: ``,
    tags: ['其他效果', '魔法金属'],
  },
  {
    name: '速度',
    description: `增加视野，每等级移动速度提升20%。`,
    sampleDescription: `提高移动速度`,
    tags: ['正面效果', '原版'],
  },
  {
    name: '水下呼吸',
    description: `氧气条在水下不会减少并且在水下的视野变好`,
    sampleDescription: `水下不消耗氧气`,
    tags: ['正面效果', '原版'],
  },
  {
    name: '冰缓',
    description: `这个效果将导致玩家体温下降，每5秒额外降低3点。`,
    sampleDescription: `体温持续下降`,
    tags: ['负面效果', '魔法金属'],
  },
  {
    name: '魔导',
    description: `在拥有此效果时，造成的魔法伤害+30%。`,
    sampleDescription: `提高魔法伤害`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '跳跃提升',
    description: `允许玩家跳得更高，每等级增加0.75米的跳跃能力，并且每等级减少1点摔落伤害。`,
    sampleDescription: `提高跳跃力`,
    tags: ['正面效果', '原版'],
  },
  {
    name: '夜视',
    description: `在视觉上提升亮度至14级，以提升黑暗中的视野亮度，最后10秒会闪烁。实际光照不变。`,
    sampleDescription: `提升黑暗中视野亮度`,
    tags: ['正面效果', '原版'],
  },
  {
    name: '感性',
    description: `持有此效果时，增加7.14%的职业经验获取。`,
    sampleDescription: `提高职业经验获得量`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '诅咒',
    description: `被诅咒时，造成的伤害降低，受到的伤害提高。`,
    sampleDescription: `受到伤害提高，造成伤害降低`,
    tags: ['负面效果', '魔法金属'],
  },
  {
    name: '药水等级下降1级',
    description: ``,
    sampleDescription: ``,
    tags: ['其他效果', '魔法金属'],
  },
  {
    name: '生命恢复',
    description: `每50刻（=2.5秒）恢复1点生命值，每等级恢复间隔减半。`,
    sampleDescription: `每秒回复生命值`,
    tags: ['正面效果', '原版'],
  },
  {
    name: '看穿',
    description: `提高5点穿透值。\n持有此buff时能看到天空守护龙召唤的真理水晶。`,
    sampleDescription: `提高穿透值`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    // 出血和伤口是一个效果
    name: '伤口',
    description: `在拥有此效果时，无法受到治疗效果，如生命自然回复、竖琴治疗、吸血等效果。\n食用料理回血、使用地下城补血站仍然有效。\n被持有二转被动的剑斗士攻击时增加40%受到的伤害`,
    sampleDescription: `无法回复生命值`,
    tags: ['负面效果', '魔法金属'],
  },
  {
    name: '药水等级提升1级',
    description: ``,
    sampleDescription: ``,
    tags: ['其他效果', '魔法金属'],
  },
  {
    name: '抗性提升',
    description: `带有抗性提升buff的玩家将提高12点防御力，无论该buff的等级是多少。`,
    sampleDescription: `降低受到的伤害`,
    tags: ['正面效果', '魔法金属', '机制重写'],
  },
  {
    name: '虚弱',
    description: `每级虚弱状态将降低玩家0.5点物理近战伤害，过高等级的虚弱状态将使玩家无法造成近战伤害。\n这个状态也会影响玩家空手攻击，带有2级虚弱的玩家空手攻击将没有任何效果，也无法击退。\n物理远程伤害与魔法伤害则不受影响。`,
    sampleDescription: `降低物理近战伤害`,
    tags: ['负面效果', '魔法金属', '机制重写'],
  },
  {
    name: '魔药',
    description: `在拥有此效果时，造成的伤害+15%。`,
    sampleDescription: `提高造成的伤害`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '药水时间提升8分',
    description: ``,
    sampleDescription: ``,
    tags: ['其他效果', '魔法金属'],
  },
  {
    name: '箭术',
    description: `持有此效果时，提高30%物理远程伤害。`,
    sampleDescription: `提高物理远程伤害`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '贪婪',
    description: `在拥有此效果时，掉宝率提高30%。\n击杀魔物的时候掉落更多的货币。\n5.5.1版本及以前，贪婪效果的掉宝率提升为20%。`,
    sampleDescription: `提高掉宝率`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '凋零',
    description: `每40刻（即2秒）给予1点伤害。`,
    sampleDescription: `持续受到伤害`,
    tags: ['负面效果', '原版'],
  },
  {
    name: '迅捷',
    description: `持有此效果时，提高回避率。`,
    sampleDescription: `大幅提高回避率`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '铁皮',
    description: `持有此效果时，提高12点防御力。`,
    sampleDescription: `提高防御力`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '精确',
    description: `拥有此效果时，暴击率提高10点。`,
    sampleDescription: `大幅提高暴击率`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '幸运',
    description: `持有此效果时，能获得更多的生产经验。`,
    sampleDescription: `提高生产经验获得量`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '失手',
    description: `攻击时有一定概率失手而攻击无效化。通俗讲就是命中降低`,
    sampleDescription: `攻击时有概率打空`,
    tags: ['负面效果', '魔法金属'],
  },
  {
    name: '中毒',
    description: `每 25 刻（= 1.25 秒）给予 1 点伤害，每等级伤害间隔减半（数值取整）`,
    sampleDescription: `持续受到伤害`,
    tags: ['负面效果', '原版'],
  },
  {
    name: '毅力',
    description: `持有此效果时，死亡后不会掉落xp和货币。`,
    sampleDescription: `死亡时不掉落货币和经验`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '饥饿',
    description: `导致饥饿值更快的消耗，每刻减少 0.005 × 等级 的饥饿值，换言之每秒减少 0.1 × 等级 的饥饿值。`,
    sampleDescription: `更快更容易消耗饱食度`,
    tags: ['负面效果', '原版'],
  },
  {
    name: '甜蜜',
    description: `持有此效果时，每5秒的生命恢复量变为两倍，穿透值+3，暴击伤害+20%。\n5.6.5版本前，甜蜜效果为提高生命恢复速度。`,
    sampleDescription: `提高生命恢复`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '脱水',
    description: `在拥有此效果时，每5秒额外减少50点水量。`,
    sampleDescription: `水量不断减少`,
    tags: ['负面效果', '魔法金属'],
  },
  {
    name: '甜点',
    description: `在拥有此效果时，暴击/回避+8，造成的伤害+10%，暴击伤害+20%。\n5.6.5-2以前的效果为：造成的伤害+10%，暴击率+8，回避率+8。`,
    sampleDescription: `提高暴击率与回避率`,
    tags: ['正面效果', '魔法金属'],
  },
  {
    name: '剧毒',
    description: `拥有该效果时，每5秒受到最大生命值30%的伤害。该伤害无法被闪避，不受防御力减免，但“受到伤害-%”有减`,
    sampleDescription: `持续受到大量伤害`,
    tags: ['负面效果', '魔法金属'],
  },
  {
    name: '随机效果',
    description: ``,
    sampleDescription: ``,
    tags: ['其他效果', '魔法金属'],
  },
];

export interface HerbEffect {
  name: string;
  description: string;
  sampleDescription: string;
  tags: string[];
}

export default herbEffects;
