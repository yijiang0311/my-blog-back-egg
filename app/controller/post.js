'use strict';
const assert = require('assert').strict;
// const Controller = require('egg').Controller;
const Controller = require('../core/base_controller');

class PostController extends Controller {
  async create() {
    const { ctx, service } = this;
    const createRule = {
      title: { type: 'string' },
      content: { type: 'string' },
    };
    ctx.validate(createRule);
    // const author = ctx.session.userId;
    const author = this.user;
    const req = Object.assign(ctx.request.body, { author });
    const res = await service.post.create(req);
    // ctx.body = { id: res.id };
    this.success({ id: res.id });
    ctx.status = 201;
  }
  async listPosts() {
    const { ctx } = this;
    const query = ctx.query;
    const queries = ctx.queries;
    assert.equal(query.a, '1');
    console.log(ctx.header);
    console.log(ctx.get('user-agent'));
    console.log(ctx.ip);
    console.log(ctx.host);
    console.log(ctx.cookies.get('csrfToken'));
    console.log(queries);
    ctx.set('res-time', 1);
    ctx.body = {
      id: 1,
    };
  }
}

module.exports = PostController;
