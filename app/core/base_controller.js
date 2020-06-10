'use strict';
const { Controller } = require('egg');

class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }
  success(data) {
    this.ctx.body = {
      code: 0,
      msg: '成功',
      success: true,
      data,
    };
  }
  notFound(msg) {
    msg = msg || 'Not fond';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
