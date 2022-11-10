import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667200241510_1594';

  // add your egg config in here
  config.middleware = [];
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

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
