'use strict';
const BAR = Symbol('Application#bar');
// https://github.com/eggjs/egg/blob/master/docs/source/zh-cn/basics/extend.md
// 框架会把 app/extend/application.js 中定义的对象与 Koa Application 的 prototype 对象进行合并，在应用启动时会基于扩展后的 prototype 生成 app 对象。
module.exports = {
  // 给app添加属性 bar ,app.bar
  get bar() {
    // this 就是app对象，在其中可以调用app上的其他方法，或访问属性
    if (!this[BAR]) {
      // 实际情况更复杂
      this[BAR] = this.config.xxx + this.config.yy;
    }
    return this[BAR];
  },
  // 增加app.foo()方法
  foo(param) {
    console.log(param);
    // this 就是app对象，在其中可以调用app上的其他方法，或访问属性
  },
};
