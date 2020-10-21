module.exports = {
  presets: ['@vant/cli/preset'],
  // ref: https://youzan.github.io/vant/#/zh-CN/theme
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ],
  ],
};
