'use strict';
const Service = require('egg').Service;

class PostService extends Service {
  async create(params) {
    console.log(params);
    return { id: 222 };
  }
}

module.exports = PostService;
