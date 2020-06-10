'use strict';
module.exports = () => {
  return async function (ctx, next) {
    try {
      await next();
    } catch (error) {
      // 本地开发环境 前端传参数错误 egg-validate 配合
      const isDev = ctx.app.config.env === 'local';
      const isParamException = error.code === 'invalid_param';
      if (isDev && !isParamException) {
        throw error;
      }
      if (isParamException) {
        ctx.logger.warn(err.errors);
        ctx.body = {
          // msg: error.message,
          msg: '参数错误',
          code: 406,
          errors: error.errors,
        };
        ctx.status = 422;
      } else {
        ctx.body = {
          msg: 'we made a mistake',
          code: 99999,
        };
        ctx.status = 500;
      }
    }
  };
};
