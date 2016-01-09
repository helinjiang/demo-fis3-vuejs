define('components/page/error/notfound', function(require, exports, module) {


var Vue = require('component_modules/vue');


module.exports = Vue.extend({
    template: "<h1>页面找不到</h1> <a href='/'>返回首页</a>",
    data : {}
});

});
