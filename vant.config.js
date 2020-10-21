module.exports = {
  name: 'mm-cvm',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/mm-cvm/',
    },
  },
  site: {
    title: '基于 vant-ui 的问卷组件库',
    logo: '',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '题型组件',
        items: [
          {
            path: 'nps',
            title: 'nps 题',
          },
        ],
      },
    ],
  },
};
