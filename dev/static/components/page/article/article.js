define('components/page/article/article', function(require, exports, module) {

var Vue = require('component_modules/vue');
var service = require("main/service.js");
var marked = require("component_modules/marked");

module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: "\r\n<div class=\"container reader-font1\">\r\n    <div class=\"article\">\r\n        <div class=\"preview\">\r\n            <div class=\"author-info\">\r\n                <a class=\"avatar\" href=\"#\">\r\n                    <img thumbnail=\"90x90\" quality=\"100\" v-attr=\"src:article.avatar\">\r\n                </a>\r\n                <span class=\"label\">\r\n                    作者\r\n                </span>\r\n                <a class=\"author-name blue-link\" href=\"#\">\r\n                    <span>\r\n                        {{ article.author }}\r\n                    </span>\r\n                </a>\r\n                <span data-toggle=\"tooltip\" data-original-title=\"最后编辑于 2015.06.21 18:49\">\r\n                    {{ article.timestamp }}\r\n                </span>\r\n                <div>\r\n                    <span>\r\n                        写了85799字\r\n                    </span>\r\n                    ，\r\n                    <span>\r\n                        被{{ article.read }}人关注\r\n                    </span>\r\n                    ，\r\n                    <span>\r\n                        获得了{{ article.like }}个喜欢\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <h1 class=\"title\">\r\n                {{ article.title }}\r\n            </h1>\r\n            <div class=\"meta-top\">\r\n                <span class=\"wordage\">\r\n                    字数5669\r\n                </span>\r\n                <span class=\"views-count\">\r\n                    阅读{{ article.read }}\r\n                </span>\r\n                <span class=\"comments-count\">\r\n                    评论{{ article.comment }}\r\n                </span>\r\n                <span class=\"likes-count\">\r\n                    喜欢{{ article.like }}\r\n                </span>\r\n            </div>\r\n           \r\n            <div class=\"show-content\" v-html=\"article.content | marked\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<c-footer></c-footer>",
    data: function(){
        return {
            'article' : {
                'content' : ''
            }
        }
    },
    compiled : function(){
        this.getArticleDetail(this.article_id);
    },
    methods : {
        getArticleDetail : function(id){
            var self = this;
            var article = service.getArticleDetail(id,function(article){
                self.$data.article = article;
            })
        }
    },
    filters: {
        marked: marked
    }
});

});
