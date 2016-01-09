define('list/list', function(require, exports, module) {


var Vue = require("component_modules/vue");
var service = require("main/service.js");
var datetime = require('components/filter/datetime');

module.exports = Vue.component("c-list", {
    template: "\r\n<div id=\"list-container\">\r\n\r\n    <!-- 文章分类 -->\r\n    <c-category v-with=\"showLoading:showLoading,type:type,cates:cates\"></c-category>\r\n    \r\n    <!-- 文章列表 -->\r\n    <ul class=\"article-list top-notes\">\r\n        <li v-repeat=\"articles\" v-class=\"have-img:wrap_img\">\r\n            <!-- 文章封面 -->\r\n            <a v-if=\"wrap_img\" class=\"wrap-img\" href=\"#p/{{ article_id }}\">\r\n                <img v-attr=\"src: wrap_img\" alt=\"300\">\r\n            </a>\r\n            <div>\r\n                <p class=\"list-top\">\r\n                    <a class=\"author-name blue-link\" href=\"#users/{{ author_id }}\">\r\n                        {{ author }}\r\n                    </a>\r\n                    <em>\r\n                        ·\r\n                    </em>\r\n                    <span class=\"time\">\r\n                        {{ timestamp | datetime }}\r\n                    </span>\r\n                </p>\r\n                <h4 class=\"title\">\r\n                    <a  href=\"#p/{{ article_id }}\">\r\n                        {{ title }}\r\n                    </a>\r\n                </h4>\r\n                <a class=\"avatar maleskine-author\" href=\"#users/{{ author_id }}\">\r\n                    <img  v-attr=\"src: avatar\">\r\n                </a>\r\n                <div class=\"list-footer\">\r\n                    <a  href=\"#p/{{ article_id }}\">\r\n                        阅读 {{ read }}\r\n                    </a>\r\n                    <a  href=\"#p/{{ article_id }}\">\r\n                        · 评论 {{ comment }}\r\n                    </a>\r\n                    · 喜欢 {{ like }}\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>",
    data : function(){
        return {
            'cates' : [],
            'articles' : []
        }
    },
    watch : {
        cate : function(){
            console.log("cate change",this.cate);
            var cates = this.cates;
            for (var i = 0; i < cates.length; i++) {
                cates[i]['active'] = this.cate == cates[i]['id'];
            };
            this.getArticleList(this.type,this.cate);
        },
        type: function(){
            console.log("type change ", this.type);
            this.getCateList(this.type,this.cate);
        },
        search: function(){
            console.log("search article by :" + this.search);
            this.searchArticles(this.search);
        }
    },
    filters : {
        datetime : datetime
    },
    methods: {
        /*获取分类列表*/
        getCateList : function(type,cate){
            var cateList = {
                'hot' : [{
                    'id' : 'now',
                    'name' : '当前热门'
                },
                {
                    'id' : 'weekly',
                    'name' : '七日热门'
                },
                {
                    'id' : 'mouthly',
                    'name' : '三十日热门'
                }],

                'notes' : [{
                    'id' : 'all',
                    'name' : '全部'
                },
                {
                    'id' : '13',
                    'name' : '市集'
                },
                {
                    'id' : '14',
                    'name' : '生活家'
                },
                {
                    'id' : '15',
                    'name' : '世间事'
                }]
            };

            var list  = cateList[type] || [];
            for (var i = 0; i < list.length; i++) {
                list[i]['active'] = list[i]['id'] == cate;
            };      
            this.cates = list;
        },

        /*获取某个分类下的文章列表*/
        getArticleList: function (type,cate) {
            var self = this;
            service.getArticleList(type,cate,function(articles){
                self.$data.articles = articles;
            })
        },

        /*搜索文章列表*/
        searchArticles: function(keyword){
            var self = this;
            service.searchArticles(keyword,function(articles){
                self.$data.articles = articles;
            })
        }
    }
});

});
