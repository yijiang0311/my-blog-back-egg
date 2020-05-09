'use strict';

module.exports = app => {
  app.once('server', server => {
    console.log('server', server);
    // websocket
  });
  app.on('error', (err, ctx) => {
    console.log('error', err);
    // console.log(ctx);
    // report error
  });
  app.on('request', ctx => {
    // console.log('ctx', ctx);
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log('used', used);
    // log total cost
  });
};
