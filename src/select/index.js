import { h } from "vue";

export default {
  name: "SvSelect",
  props: {
    // 选项
    options: {
      type: Array,
      required: true
    },
    // 是否允许多选
    multiple: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return h("div", {});
  }
};
