<template>
  <div class="mm-nps">
    <!-- 描述信息 -->
    <ul class="mm-nps-box">
      <li
        v-for="(desc, $descIndex) in descs"
        :key="$descIndex"
        class="mm-nps-box__item"
      >
        <span
          v-show="descIndex.includes($descIndex)"
          class="mm-nps-box__item-text"
        >
          {{ desc }}
        </span>
      </li>
    </ul>

    <!-- 分值信息 -->
    <ul class="mm-nps-box">
      <li v-for="item in data" :key="item.score" class="mm-nps-box__item">
        <span
          :class="[
            'mm-nps-box__item-score',
            // 当前选中的分值
            // 索引从1开始为了匹配less
            answer.selectedScore === item.score
              ? `mm-nps-box__item-score-actived-${item.score + 1}`
              : ''
          ]"
          @click="onScoreClick(item)"
        >
          {{ item.score }}
        </span>
      </li>
    </ul>

    <!-- 评分标签信息 -->
    <ul v-if="answer.selectedScore >= 0 && showTags" class="mm-nps-tags">
      <li
        v-for="(tag, $tagIndex) in data[answer.selectedScore].tags"
        :key="$tagIndex"
        :class="[
          'mm-nps-tags__item',
          { 'mm-nps-tags__item-actived': answer.selectedTagList.includes(tag) }
        ]"
        @click="onTagClick(tag)"
      >
        {{ tag }}
      </li>
    </ul>

    <!-- 评价信息 -->
    <div
      v-if="answer.selectedScore >= 0 && showComment"
      class="mm-nps-comment"
    >
      <van-field
        v-model="answer.comment"
        rows="3"
        :autosize="{
          maxHeight: 100
        }"
        type="textarea"
        :placeholder="data[answer.selectedScore].placeholder"
      />
    </div>
  </div>
</template>

<script>
import { Field as VanField } from 'vant';

export default {
  name: 'mm-nps',
  components: { VanField },
  props: {
    // nps 数据
    data: {
      type: Array,
      required: true
    },
    descIndex: {
      type: Array,
      default: () => [0, 10]
    },
    // 是否展示标签
    showTags: {
      type: Boolean,
      default: true
    },
    // 是否展示评论
    showComment: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      answer: {
        selectedScore: -1, // 评分
        selectedScoreDesc: '', // 当前得分的描述
        selectedTagList: [], // Tag
        comment: '' // 用户评价
      }
    };
  },
  computed: {
    descs() {
      return this.data.map(item => {
        return item.desc;
      });
    }
  },
  watch: {
    'answer.selectedScore': function(nScore, oScore) {
      // 如果分值有变化，也就是说重新选择了 nps 的分值，需要将评价数组重置
      // 这边之所以做成 watch 是因为防止用户一直点击同一个 nps 分值的时候，是不用重置的
      if (nScore !== oScore) {
        this.answer.selectedTagList = [];
        this.answer.comment = '';
      }
    },
    answer: {
      handler(value) {
        this.$emit('value-changed', {
          score: value.selectedScore,
          desc: value.selectedScoreDesc,
          comment: value.comment,
          tags: value.selectedTagList
        });
      },
      deep: true
    }
  },
  methods: {
    onScoreClick(item) {
      this.answer.selectedScore = item.score;
      this.answer.selectedScoreDesc = item.desc;
    },
    onTagClick(tag) {
      const tIndex = this.answer.selectedTagList.indexOf(tag);
      if (tIndex === -1) {
        // 不存在就增加
        this.answer.selectedTagList.push(tag);
      } else {
        // 存在就删除
        this.answer.selectedTagList.splice(tIndex, 1);
      }
    }
  }
};
</script>
