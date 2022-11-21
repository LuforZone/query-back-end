import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mysql: {
    enable: true, // 开启
    package: 'egg-mysql', // 对应哪个包
  },

  // security: {
  //   enable: false,
  //   package: 'egg-security',
  // },

  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
// exports.mysql = {
//   enable: true,// 开启
//   package: 'egg-mysql', // 对应哪个包
// };
export default plugin;
