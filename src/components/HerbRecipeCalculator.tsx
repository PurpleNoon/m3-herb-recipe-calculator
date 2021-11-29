import { Select, Form, InputNumber, Button, Tag } from 'antd';
import { useState, FC } from 'react';
import herbEffects from '@/libs/herbEffects';
import {
  findHerbRecipe,
  getHerbEffectTagSet,
  targetEffectTagSorter,
  avoidEffectTagSorter,
} from '@/libs/herbRecipeCalculate';
import type { ValidHerbRecipe } from '@/libs/herbRecipeCalculate';

const { Option, OptGroup } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

interface HerbSearchForm {
  targetEffects: string[];
  avoidEffects: string[];
  topCount: number;
}

interface HerbRecipeCalculatorProps {
  search?: (form: HerbSearchForm) => void;
}

const herbEffectTagSet = getHerbEffectTagSet(herbEffects);

// 筛选配方 效果计算

const HerbRecipeCalculator: FC<HerbRecipeCalculatorProps> = () => {
  // const { search } = props;
  // TODO: 添加仅拥有药草菇选项
  // TODO: 添加一些预设，如法师、远程、近战等
  // TODO: 添加配方效果计算器
  // TODO: 算法中排除药剂结果中只有负面效果的药水，或者提供一个 "好友模式" 的选项，整个小问号，进行对 "好友模式" 的说明
  // TODO: 美化界面
  // TODO: 高级模式，功能（暂定）：自定义排序，"好友模式"等
  const [searchForm] = useState<HerbSearchForm>({
    targetEffects: ['药水等级提升1级'],
    avoidEffects: [],
    topCount: 999,
  });
  const [form] = Form.useForm();
  const [herbRecipeResult, setHerbRecipeResult] = useState<ValidHerbRecipe[]>(
    [],
  );
  const onFinish = (values: typeof searchForm) => {
    // eslint-disable-next-line no-console
    console.log(values);
    // TODO: 提供进度条显示
    // TODO: 拆分 form 和 list 组件
    // typeof search === 'function' && search(searchForm);
    const herbRecipes = findHerbRecipe(
      values.targetEffects,
      values.topCount,
      values.avoidEffects,
    );
    setHerbRecipeResult(herbRecipes);
  };
  const targetHerbEffectsOptions = Object.keys(herbEffectTagSet)
    .sort(targetEffectTagSorter)
    .map(herbEffectTag => (
      <OptGroup key={herbEffectTag} label={herbEffectTag}>
        {herbEffectTagSet[herbEffectTag].map(
          ([herbTag, { name, sampleDescription }]) => (
            <Option key={name + herbTag} value={name}>
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
        {herbEffectTagSet[herbEffectTag].map(
          ([herbTag, { name, sampleDescription }]) => (
            <Option key={name + herbTag} value={name}>
              {`${name} ${sampleDescription ? `[${sampleDescription}]` : ''}`}
            </Option>
          ),
        )}
      </OptGroup>
    ));
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
              }}>
              药草计算器
            </h2>
            <div>
              <hr />
              作者：泪随樱花落
              <br />
              QQ: 346014945
              <br />
              目前还在不断完善中（佛系更新ing），如果有什么好的建议或者发现了
              bug，欢迎联系作者_(:з」∠)_
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
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          配方列表:
          <ul style={{ listStyleType: 'decimal' }}>
            {/* TODO: 做成卡片样式 */}
            {herbRecipeResult.map(herbRecipeInfo => {
              const [recipe, potion] = herbRecipeInfo;
              return (
                <li key={recipe.map(herb => herb.name).join(',')}>
                  <div>
                    {recipe
                      .map(herb => herb.name)
                      .map((herbName, index) => (
                        // TODO: 添加点击复制效果
                        <Tag key={herbName + String(index)}>{herbName}</Tag>
                      ))}
                  </div>
                  <div>药水时间: {potion.time}</div>
                  <div>效果</div>
                  {Object.entries(potion.effects).map(([effect, lv]) => (
                    <div key={effect} style={{ marginLeft: '2rem' }}>
                      {effect}: {lv}
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
