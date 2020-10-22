<template>
  <div
    :style="{
      width: `${radiusDerived * 2}px`,
      height: `${radiusDerived * 2}px`,
      borderRadius: `${radiusDerived * 2}px`
    }"
    class="mm-turntable"
  >
    <!-- 背景图片 -->
    <div
      v-if="background"
      :style="{
        position: 'absolute',
        background: `url(${background}) center center / cover no-repeat`,
        width: `${radiusDerived * 2}px`,
        height: `${radiusDerived * 2}px`
      }"
      class="mm-turntable__background"
    />

    <div
      :style="{
        width: `${radiusDerived * 2}px`,
        height: `${radiusDerived * 2}px`,
        borderRadius: `${radiusDerived * 2}px`,
        transition: `transform ${rotateTimes}s`,
        transform: `rotate(${totalRotatedDeg}deg)`,
        '-moz-transform': `rotate(${totalRotatedDeg}deg)`,
        '-webkit-transform': `rotate(${totalRotatedDeg}deg)`,
        overflow: 'hidden'
      }"
      class="mm-turntable__awards"
    >
      <div
        v-for="award in awardsDerived"
        :key="award.position"
        :data-index="award.position"
        :style="{
          width: `${radiusDerived}px`,
          height: `${radiusDerived}px`,
          left: `${radiusDerived}px`,
          transform: `rotate(${award.rotate}deg) skewY(${-degreeDerived}deg)`,
          '-moz-transform': `rotate(${award.rotate}deg) skewY(${-degreeDerived}deg)`,
          '-webkit-transform': `rotate(${award.rotate}deg) skewY(${-degreeDerived}deg)`
        }"
        class="mm-turntable__award"
      >
        <div
          :style="{
            transform: `skewY(${degreeDerived}deg) rotate(${degreeDerived / 2}deg) translateX(${-(
              radiusDerived / 2
            )}px)`,
            '-moz-transform': `skewY(${degreeDerived}deg) rotate(${degreeDerived / 2}deg) translateX(${-(
              radiusDerived / 2
            )}px)`,
            '-webkit-transform': `skewY(${degreeDerived}deg) rotate(${degreeDerived / 2}deg) translateX(${-(
              radiusDerived / 2
            )}px)`,
            padding: `1.5rem 0 0`
          }"
          class="mm-turntable__award__content"
        >
          <!-- 奖品名称 -->
          <span class="mm-turntable__award__text">
            {{ award.name.length > 10 ? `${award.name.substring(0, 10)}...` : award.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mm-turntable",
  props: {
    // 奖品列表
    awards: {
      type: Array,
      required: true
    },
    // 中奖位置：抽奖结果由后端接口获取
    position: {
      type: Number,
      default: 0
    },
    // 抽奖转盘半径：不得小于200
    radius: {
      type: Number,
      default: 100
    },
    // 抽奖转盘会在 rotate-times 时间内旋转 rotate-laps 圈后停在 position 索引位置
    rotateLaps: {
      type: Number,
      default: 6
    },
    rotateTimes: {
      type: Number,
      default: 5
    },
    // 抽奖转盘外层背景图片
    background: {
      type: String,
      default: ""
    },
    // 抽奖转盘指针图片
    needleBackground: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      timer: null,
      // 这个用来控制转盘转动
      // 初始为0
      // 当点击开始抽奖的时候开始变换
      totalRotatedDeg: 0
    }
  },
  computed: {
    // 派生属性: 控制转盘半径
    radiusDerived() {
      return this.radius < 100 ? 100 : this.radius
    },
    // 每个扇叶的度数
    degreeDerived() {
      const awardsLen = this.awards.length
      return awardsLen > 0 ? 360 / awardsLen : 360
    },
    // 派生属性
    // 奖品位置不同 Style 不同
    awardsDerived() {
      return this.awards.map((award, index) => {
        return {
          ...award,
          rotate: this.degreeDerived * index
        }
      })
    }
  },
  watch: {
    // 监听位置的变化
    // 后端抽奖得到中奖位置之后进行角度计算并转动转盘
    position(value) {
      if (value > 0) {
        // 旋转总度数 = 基础度数 - position 所在的度数 + 一半旋转（这样就可以在扇形正中间）
        this.totalRotatedDeg = this.rotateLaps * 360 - this.degreeDerived * value + this.degreeDerived / 2
        this.timer = setTimeout(() => {
          this.$emit("end-lottery")
          if (this.timer) {
            clearTimeout(this.timer)
          }
        }, this.times * 1000 + 500)
      }
    }
  }
}
</script>
