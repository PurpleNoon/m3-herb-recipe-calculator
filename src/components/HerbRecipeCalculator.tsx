import { Select, Form, InputNumber, Button, Tag, message } from 'antd';
import { useState, FC } from 'react';
import {
  targetEffectTagSorter,
  avoidEffectTagSorter,
  herbEffectTagSet,
  potionEffectSorter,
  getEffectType,
  numberWithSymbol,
} from '../libs/herbRecipeCalculate';
import type { ValidHerbRecipe } from '../libs/herbRecipeCalculate';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './HerbRecipeCalculator.css';
import pkg from '../../package.json'

// 这里的 .ts 必须加
import Worker from '../workers/findHerbRecipes.worker.ts';

const { Option, OptGroup } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

export interface HerbSearchForm {
  targetEffects: string[];
  avoidEffects: string[];
  topCount: number;
}

interface HerbRecipeCalculatorProps {
  search?: (form: HerbSearchForm) => void;
}

// 筛选配方 效果计算

const effectTypeClassesMapping = {
  正面效果: 'herb-card__effect--positive',
  其他效果: 'herb-card__effect--other',
  负面效果: 'herb-card__effect--negative',
} as Partial<Record<string, string>>

// 使用 web workers 进行计算药剂配方，避免阻塞主线程
const calcHerbRecipesWithWorker = (params: HerbSearchForm): Promise<ValidHerbRecipe[]> => {
  return new Promise((resolve) => {
    const worker = new Worker();
    worker.onmessage = function (event) {
      const action = event.data;
      const handlerMap = {
        finishCalculateHerbRecipes(event) {
          worker.terminate();
          const { data } = event.data;
          resolve(data.list);
        }
      } as Record<string, (event: MessageEvent<any>) => void>;
      handlerMap[action.name] && handlerMap[action.name](event);
    };
    worker.postMessage({
      name: 'findRecipes',
      data: params
    });
  })
}

const HerbRecipeCalculator: FC<HerbRecipeCalculatorProps> = () => {
  // const { search } = props;
  // TODO: 添加仅拥有药草菇选项
  // TODO: 添加一些预设，如法师、远程、近战等
  // TODO: 添加配方效果计算器
  // TODO: 美化界面
  // TODO: 高级模式，功能（暂定）：自定义排序，"好友模式"（整个小问号，进行对 "好友模式" 的说明）等
  const [searchForm] = useState<HerbSearchForm>({
    targetEffects: ['药水等级提升1级', '药水时间提升8分'],
    avoidEffects: [],
    topCount: 99,
  });
  const [form] = Form.useForm();
  const [herbRecipeResult, setHerbRecipeResult] = useState<ValidHerbRecipe[]>(
    [],
  );
  const [loading, setLoading] = useState(false)
  const onFinish = async (values: typeof searchForm) => {
    // eslint-disable-next-line no-console
    // TODO: 添加查询到的配方总数
    // TODO: 拆分 form 和 list 组件
    setLoading(true);
    // 使用 web workers 进行计算药剂配方，避免阻塞主线程
    const herbRecipes = await calcHerbRecipesWithWorker(values);
    setHerbRecipeResult(herbRecipes)
    setLoading(false);
  };
  const targetHerbEffectsOptions = Object.keys(herbEffectTagSet)
    .sort(targetEffectTagSorter)
    .map(herbEffectTag => (
      <OptGroup key={herbEffectTag} label={herbEffectTag}>
        {herbEffectTagSet[herbEffectTag].map(
          ({ name, sampleDescription }) => (
            <Option key={name + herbEffectTag} value={name}>
              {`${name} ${sampleDescription ? `[${sampleDescription}]` : ''}`}
            </Option>
          ),
        )}
      </OptGroup>
    ));
  const avoidHerbEffectsOptions = Object.keys(herbEffectTagSet)
    .sort(avoidEffectTagSorter)
    .map(herbEffectTag => (
      <OptGroup key={herbEffectTag} label={herbEffectTag}>
        {herbEffectTagSet[herbEffectTag]
          .map(
            ({ name, sampleDescription }) => (
              <Option key={name + herbEffectTag} value={name}>
                {`${name} ${sampleDescription ? `[${sampleDescription}]` : ''}`}
              </Option>
            ),
        )}
      </OptGroup>
    ));
  const handleHerbNameCopied = () => message.success('药草名称复制完成');
  return (
    <div>
      <div
        style={{
          margin: '0 auto',
          width: 480,
        }}>
        <div>
          <Form
            initialValues={searchForm}
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}>
            <h2
              style={{
                textAlign: 'center',
                marginBottom: 0
              }}>
              药草计算器
            </h2>
            <div>
              <div style={{
                float: 'right',
                fontSize: 12,
                color: 'gray'
              }}>
                Version {pkg.version}
              </div>
              <div style={{ clear: 'both' }}></div>
            </div>
            <div>
              <hr />
              作者：泪随樱花落<span style={{ marginLeft: '1rem' }}></span>QQ：346014945
              <br />
              目前还在不断完善中（佛系更新ing），如果有什么好的建议或者发现了
              bug，欢迎联系作者_(:з」∠)_
              <br />
              PS: 查找配方可能会慢一点，因为配方数量比较大（取决于选择的期望的效果和排除的效果），稍等一会即可
              <br />
              更新日志：<a target="_blank" href="https://github.com/PurpleNoon/m3-herb-recipe-calculator/blob/main/docs/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.md" rel="noreferrer">链接地址</a>
              <hr />
            </div>
            <Form.Item
              name="targetEffects"
              label="期望的效果"
              rules={[{ required: true, message: '请选择期望的效果' }]}>
              <Select
                mode="multiple"
                allowClear={true}
                tagRender={renderProps => {
                  const { value, closable, onClose } = renderProps;
                  return (
                    <Tag
                      color={'default'}
                      onMouseDown={event => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      closable={closable}
                      onClose={onClose}
                      style={{ marginRight: 3 }}>
                      {value}
                    </Tag>
                  );
                }}>
                {targetHerbEffectsOptions}
              </Select>
            </Form.Item>
            <Form.Item name="avoidEffects" label="排除的效果">
              <Select
                mode="multiple"
                allowClear={true}
                tagRender={renderProps => {
                  const { value, closable, onClose } = renderProps;
                  return (
                    <Tag
                      color={'default'}
                      onMouseDown={event => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      closable={closable}
                      onClose={onClose}
                      style={{ marginRight: 3 }}>
                      {value}
                    </Tag>
                  );
                }}>
                {avoidHerbEffectsOptions}
              </Select>
            </Form.Item>
            <Form.Item name="topCount" label="配方数量">
              <InputNumber min={1} keyboard={true} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={loading}>
                查找配方
              </Button>
            </Form.Item>
          </Form>
        </div>
        <hr />
        <div>
          <h3>药水配方列表:</h3>
          <ul style={{ listStyleType: 'decimal' }}>
            {/* TODO: 做成卡片样式 */}
            {herbRecipeResult.map(herbRecipeInfo => {
              const [recipe, potion] = herbRecipeInfo;
              const recipeContent = (
                <div>
                  {/* 药草列表： */}
                  {recipe
                    .map(herb => herb.name)
                    .map((herbName, index) => (
                      <CopyToClipboard
                        key={herbName + String(index)}
                        text={herbName}
                        onCopy={handleHerbNameCopied}>
                        <Tag style={{
                          cursor: 'pointer'
                        }}>{herbName}</Tag>
                      </CopyToClipboard>
                    ))}
                </div>
              )
              return (
                <li style={{
                  marginBottom: 4
                }} key={recipe.map(herb => herb.name).join(',')}>
                  {recipeContent}
                  <div>药水变化时间: {numberWithSymbol(potion.time)}</div>
                  <div>效果：</div>
                  {Object.entries(potion.effects)
                    .sort((a, b) => potionEffectSorter(a[0], b[0]))
                    .map(([effect, lv]) => (
                    <div key={effect} style={{ marginLeft: '2rem' }}>
                      <span className={effectTypeClassesMapping[getEffectType(effect)] || ''}>
                        {effect
                      }</span>: {lv}
                    </div>
                  ))}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HerbRecipeCalculator;
