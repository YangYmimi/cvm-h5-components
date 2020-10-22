<template>
  <demo-section>
    <demo-block title="奖品设置">
      <van-field v-model="awardsStr" label="奖品" placeholder="输入奖品名称以 ; 隔开" />
    </demo-block>
    <demo-block title="抽奖设置">
      <van-field v-model="position" type="digit" label="中奖位置" input-align="right" />
      <van-field v-model="radius" type="digit" label="大转盘半径" input-align="right" />
      <van-field v-model="rotateLaps" type="digit" label="旋转圈数" input-align="right" />
      <van-field v-model="rotateTimes" type="digit" label="旋转时间" input-align="right" />
    </demo-block>
    <demo-block title="抽奖样式">
      <mm-turntable
        :awards="awards"
        :position="toNumber(position)"
        :radius="toNumber(radius)"
        :rotate-laps="toNumber(rotateLaps)"
        :rotate-times="toNumber(rotateTimes)"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import { Field as VanField } from "vant"

export default {
  components: { VanField },
  data() {
    return {
      // 奖品名称拼接的字符串以分号隔开
      awardsStr: "奖品1;奖品2;奖品3;奖品4;奖品5;奖品6;奖品7;奖品8",
      position: 1,
      radius: 150,
      rotateLaps: 6,
      rotateTimes: 5
    }
  },
  computed: {
    awards() {
      return this.awardsStr.split(";").map((item, index) => {
        return {
          name: item,
          position: index + 1
        }
      })
    }
  },
  methods: {
    toNumber(str) {
      return Number(str)
    }
  }
}
</script>
