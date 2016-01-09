define('components/page/trend/trend', function(require, exports, module) {

var Vue = require('component_modules/vue');

require('category/category.js');
require('list/list.js');
require('search/search.js');


module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: "<div class=\"recommended\">\r\n    <!-- 分类切换 -->\r\n    <div class=\"page-title\">\r\n        <ul class=\"recommened-nav navigation clearfix\">\r\n            <!-- 用户未订阅专题或人，或者未完成订阅 or 用户订阅列表已准备就绪 -->\r\n            <li data-name=\"trending_notes\" v-class=\"active: type=='hot'\">\r\n                <a data-pjax=\"true\" href=\"/#hot/now\">\r\n                    <i v-if=\"type=='hot'\" class=\"fa fa-bars\">\r\n                    </i>\r\n                    热门文章\r\n                </a>\r\n            </li>\r\n            <li data-name=\"recommended_notes\" v-class=\"active: type=='notes'\">\r\n                <a data-pjax=\"true\" href=\"/#notes/all\">\r\n                    <i v-if=\"type=='notes'\" class=\"fa fa-bars\">\r\n                    </i>\r\n                    今日看点\r\n                </a>\r\n            </li>\r\n            <li data-name=\"subscription_notes\" v-class=\"active: type=='subscribe'\">\r\n                <a data-pjax=\"true\" href=\"/#subscribe/all\">\r\n                    <i v-if=\"type=='subscribe'\" class=\"fa fa-bars\">\r\n                    </i>\r\n                    我的订阅\r\n                </a>\r\n            </li>\r\n            <img class=\"hide loader-tiny\" src=\"/static/components/component/list/img/tiny.gif\"\r\n            alt=\"Tiny\">\r\n            <li class=\"search\">  \r\n                <c-search v-with=\"search:search\"></c-search>             \r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n    <!-- 文章列表 -->\r\n    <c-list v-with=\"type:type,cate:cate,search:search\"></c-list>\r\n</div>\r\n\r\n\r\n\r\n<c-footer></c-footer>"
});

});
