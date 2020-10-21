<template>
  <demo-section>
    <demo-block title="答题设置">
      <van-cell center title="开启标签">
        <template #right-icon>
          <van-switch v-model="config.showTags" size="16" />
        </template>
      </van-cell>
      <van-cell center title="开启评价">
        <template #right-icon>
          <van-switch v-model="config.showComment" size="16" />
        </template>
      </van-cell>
    </demo-block>
    <demo-block title="答题样式">
      <mm-nps
        :data="npsData"
        :show-tags="config.showTags"
        :show-comment="config.showComment"
        @value-changed="onValueChanged"
      />
    </demo-block>
    <demo-block title="答题结果">
      <van-cell-group>
        <van-cell title="分值" :value="answer.score" />
        <van-cell title="分值描述" :value="answer.desc" />
        <van-cell title="分值标签" :value="answer.tags.join(',')" />
        <van-cell title="分值评价" :value="answer.comment" />
      </van-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
import {
  Cell as VanCell,
  CellGroup as VanCellGroup,
  Switch as VanSwitch
} from 'vant';

export default {
  components: { VanCell, VanCellGroup, VanSwitch },
  data() {
    return {
      config: {
        showTags: true,
        showComment: true
      },
      answer: {
        score: '无', // 评分
        desc: '', // 当前得分的描述
        tags: [], // Tag
        comment: '' // 用户评价
      },
      npsData: [
        {
          score: 0,
          desc: '不可能',
          comment: '',
          placeholder: '请填写您打分的理由',
          tags: ['服务人员态度差', '房间不干净', '酒店设施陈旧']
        },
        {
          score: 1,
          desc: '1',
          comment: '',
          tags: ['服务人员态度差', '房间不干净', '酒店设施陈旧']
        },
        {
          score: 2,
          desc: '2',
          comment: '',
          tags: ['服务人员态度差', '房间不干净', '酒店设施陈旧']
        },
        {
          score: 3,
          desc: '3',
          comment: '',
          tags: ['服务人员态度差', '房间不干净', '酒店设施陈旧']
        },
        {
          score: 4,
          desc: '4',
          comment: '',
          tags: ['服务人员态度差', '房间不干净', '酒店设施陈旧']
        },
        {
          score: 5,
          desc: '5',
          comment: '',
          tags: ['服务人员态度差', '房间不干净', '酒店设施陈旧']
        },
        {
          score: 6,
          desc: '6',
          comment: '',
          tags: ['服务人员态度差', '房间不干净', '酒店设施陈旧']
        },
        {
          score: 7,
          desc: '7',
          comment: '',
          tags: ['服务人员一般', '酒店设置一般']
        },
        {
          score: 8,
          desc: '8',
          comment: '',
          tags: ['服务人员一般', '酒店设置一般']
        },
        {
          score: 9,
          desc: '9',
          comment: '',
          tags: ['服务人员好', '酒店设置完备', '房间卫生干净']
        },
        {
          score: 10,
          desc: '极有可能',
          comment: '',
          tags: ['服务人员好', '酒店设置完备', '房间卫生干净']
        }
      ]
    };
  },
  methods: {
    onValueChanged({ score, desc, comment, tags }) {
      this.answer = { score, desc, comment, tags };
    }
  }
};
</script>

<style lang="less" scoped>
.mm-nps {
  padding: 10px;
}
</style>
