define('search/search', function(require, exports, module) {


var Vue = require("component_modules/vue");

module.exports = Vue.component("c-search", {
    template: "\r\n<input name=\"utf8\" type=\"hidden\" value=\"✓\">\r\n<input v-model=\"search\" type=\"text\" name=\"q\" id=\"q\" placeholder=\"搜索\" class=\"input-medium search-query\">\r\n"
});

});
