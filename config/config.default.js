/* eslint-disable arrow-parens */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// eslint-disable-next-line arrow-parens
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    // 安全配置
    security: {
      csrf: {
        // enable: false,
        // ignore: (ctx) => isInnerIp(ctx.ip),
        headerName: 'x-csrf-token',
        // cookieName: 'csrfToken',
      },
      // ctx.redirect(url) 如果不在配置的白名单域名内，则禁止跳转。
      // domainWhiteList: ['http://localhost:7001'],
    },
    // mysql: {
      // client: {
      //   host: '127.0.0.1',
      //   port: '3306',
      //   user: 'root',
      //   password: 'zhongyi1',
      //   database: 'test',
      // },
    // },
    sequelize:{
      dialect:'mysql',
      database:'kkb',
      host:'127.0.0.1',
      port:3306,
      username:'root',
      password:'zhongyi1'
    },
    session: {
      key: 'EGG_SESS',
      maxAge: 24 * 3600 * 1000, // 1 天
      httpOnly: true,
      encrypt: true,
    },
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588930005283_7717';

  // add your middleware config here
  config.middleware = ['exception'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
