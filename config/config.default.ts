import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667200241510_1594';

  // add your egg config in here
  config.middleware = [ 'middlewareFuckCors' ];

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'newdawn@2022',
      database: 'party_inter',
    },
    app: true,
    agent: false,
  };
  config.fuckCors = {};
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.security = {
    domainWhiteList: [ 'http://127.0.0.1:7001' ], // 没有配置的话，错误信息：404
    csrf: {
      enable: false, // 暂时禁用掉 csrf，错误信息：403 missing csrf token
    },
  };


  // config.cors = {
  //   credentials: true,
  //   origin: ctx => ctx.get('origin'),
  //   // origin: '*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  // };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
