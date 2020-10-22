module.exports = {
  name: "mm-cvm",
  build: {
    css: {
      preprocessor: "less"
    },
    site: {
      publicPath: "/mm-cvm/"
    }
  },
  site: {
    title: "基于 vant-ui 的问卷组件库",
    logo: "",
    nav: [
      {
        title: "开发指南",
        items: [
          {
            path: "home",
            title: "介绍"
          },
          {
            path: "quickstart",
            title: "快速上手"
          }
        ]
      },
      {
        title: "基础组件",
        items: [
          {
            path: "input",
            title: "文本输入"
          }
        ]
      },
      {
        title: "题型组件",
        items: [
          {
            path: "nps",
            title: "nps 题"
          }
        ]
      },
      {
        title: "抽奖组件",
        items: [
          {
            path: "turntable",
            title: "抽奖大转盘"
          }
        ]
      }
    ]
  }
}
