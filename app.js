import pMessage from "./pMessage.js"

var app = new Vue({
  el: "#vApp",
  data: {
    show: true,
    dMessage: null,
  },
  methods: {
    mMessageBtn: function() {
      this.dMessage = pMessage.getMessage('init');
    },
  },
  created: function() {
    this.dMessage = pMessage.getMessage('init');
  },

});
