# Turntable

### 介绍

抽奖大转盘组件，中奖结果由后端获得。

### 引入

```js
import Vue from 'vue';
import { turntable } from 'mm-cvm';

Vue.use(turntable);
```

## 代码演示

### 基础用法

```html
const awards = [
  { name: '奖品1', position: 1 },
  { name: '奖品2', position: 2 },
  { name: '奖品3', position: 3 },
  { name: '奖品4', position: 4 },
  { name: '奖品5', position: 5 },
  { name: '奖品6', position: 6 },
  { name: '奖品7', position: 7 },
  { name: '奖品8', position: 8 }
];

<mm-turntable
  :awards="awards"
  :position="2" />
```

## API

### Props

| 参数 | 是否必填 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| awards | 是 | 奖品列表 | *Array* | - |
| position | 是 | 中奖位置索引 | *Number* | - |
| radius | 否 | 抽奖转盘半径，不得小于 100 (px) | *Number* | 100 (px) |
| rotate-laps | 否 | 默认旋转圈数 | *Number* | 6 |
| rotate-times | 否 | 默认旋转时间，抽奖转盘会在 rotate-times 时间内旋转 rotate-laps 圈后停在 position 索引位置 | *Number* | 5 (s) |
| background | 否 | 抽奖转盘外层背景图片 | *Url* | - |
| needle-background | 否 | 抽奖转盘指针图片 | *Url* | - |

### Events


