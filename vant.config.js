module.exports = {
  name: "SurveyUI",
  build: {
    css: {
      preprocessor: "less"
    },
    site: {
      publicPath: "/survey-h5-components/"
    }
  },
  site: {
    title: "SurveyUI",
    description: "移动端题问卷题型组件库",
    logo: "https://v3.cn.vuejs.org/logo.png",
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
        title: "题型组件",
        items: [
          {
            path: "single-select",
            title: "SuSingleSelect 单选题"
          }
        ]
      }
    ]
  }
};
