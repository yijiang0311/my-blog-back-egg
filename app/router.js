'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/post', controller.post.create);
  router.post('/api/post/list', controller.post.listPosts);
};
