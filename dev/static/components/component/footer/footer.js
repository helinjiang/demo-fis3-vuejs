define('footer/footer', function(require, exports, module) {



var Vue = require("component_modules/vue");

module.exports = Vue.component("c-footer", {
    className: 'footer',
    template: "\r\n\r\n<div class=\"footer\">\r\n    仅供学习FIS3与vuejs使用，设计与内容版权归简书所有。<a target=\"_blank\" href=\"http://fis.baidu.com\">FIS首页</a>\r\n</div>\r\n",
    ready: function(){
        var self = this;
    }
});

});
