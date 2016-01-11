var Vue = require('lib/vue');
var service = require("common/service.js");
var marked = require("lib/marked.js");

module.exports = Vue.extend({
  inherit: true, //集成父元素所有属性
  template: __inline('main.html'),
  data: function() {
    return {
      'article': {
        'content': ''
      },
      'article_id': '0'
    }
  },
  compiled: function() {
    console.log('==', this.article_id);
    this.getArticleDetail(this.article_id);
  },
  methods: {
    getArticleDetail: function(id) {
      console.log('--', id);
      var self = this;
      var article = service.getArticleDetail(id, function(article) {
        self.$data.article = article;
      })
    }
  },
  filters: {
    marked: marked
  },
  ready: function() {
    console.log('==--', this.article_id);
  }
});
