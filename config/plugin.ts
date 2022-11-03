import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mysql: {
    enable: true,// 开启
    package: 'egg-mysql', // 对应哪个包
  }
};
// exports.mysql = {
//   enable: true,// 开启
//   package: 'egg-mysql', // 对应哪个包
// };
export default plugin;