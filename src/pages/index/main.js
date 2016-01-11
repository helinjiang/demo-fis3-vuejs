
/**
 * Boot up the Vue instance and wire up the router.
 */

// var Vue = require('component_modules/vue.js');
// var Router = require('component_modules/director.js').Router;
// var footer = require('footer/footer.js');
// var home = require('components/page/home/home.js');


var Vue = require('lib/vue');

window.app = new Vue({
    el: '#app',
    data: {
        'currentView' : 'home', //默认首页
        'type'  : '',
        'cate'  : '',
        'article_id' : ''
    }
});
