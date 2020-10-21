# NPS

### 介绍

Nps 题组件

### 引入

```js
import Vue from 'vue';
import { Nps } from 'mm-cvm';

Vue.use(Nps);
```

## 代码演示

### 基础用法

```html
<mm-nps />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| data | 显示的数据，是一个数组，存放每一个分值对应的配置对象。<br>配置对象支持如下属性：<br>score：分值，不可以重复，作为 key；<br>desc：分值描述；<br>comment：评价信息；<br>placeholder：占位文字；<br>tags：分值标签 | *Array* | - |
| desc-index | 需要展示描述信息的分值的索引，默认只展示两端的分值描述信息 | *Array* | [0, 10] |
| show-tags | 是否展示标签 | *Boolean* | true |
| show-comment | 是否展示评价 | *Boolean* | true |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| value-changed | nps变化时候触发，包括分值变化，分值对应标签选择变化，评价内容变化 | { score, desc, comment, tags } |

