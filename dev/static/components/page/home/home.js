define('components/page/home/home', function(require, exports, module) {

var Vue = require('component_modules/vue');



module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: "<p>FIS vueJS 简书DEMO</p>"
});

});
