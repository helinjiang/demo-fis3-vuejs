define('category/category', function(require, exports, module) {


var Vue = require("component_modules/vue");

module.exports = Vue.component("c-category", {
    template: "\r\n<ul class=\"unstyled clearfix sort-nav\" id=\"list-container\">\r\n    <li v-repeat=\"cates\" v-class=\"active : active\">\r\n      <a href=\"/#{{ type }}/{{ id }}\"  class=\"category\" href=\"javascript:void(null);\">{{ name }}</a>\r\n    </li>\r\n    <!-- <li>\r\n        <img class=\"hide loader-tiny\" src=\"/components/component/list/img/tiny.gif\" alt=\"Tiny\"  >\r\n    </li> -->\r\n</ul>\r\n",
    ready: function(){
        var self = this;
    },
    methods: {
        
    }
});

});
