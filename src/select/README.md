# SvSelect 单选/多选题

### 介绍

SvSelect：单选/多选题组件。基于 [van-radio/van-radio-group](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/radio)，[van-checkbox/van-checkbox-group](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/checkbox)。

### 引入

```js
import Vue from 'vue';
import { SvSelect } from 'survey-ui';

Vue.use(SvSelect);
```

## 代码演示

### 基础用法

```html
<sv-select />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| options | 选项列表 | Array | [] |
| multiple | 是否支持多选 | Boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| value-changed | 选中值变化时触发 | 单选题则为 string，多选题为 array |

### Slots

| 名称 | 说明 |
| ---- | ---- |
