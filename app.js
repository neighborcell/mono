import pMessage from "./pMessage.js"

var app = new Vue({
  el: "#vApp",
  data: {
    show: true,
    dMessage: null,
  },
  methods: {
    mMessageBtn: function(btnidx) {
      this.dMessage = pMessage.next(btnidx);
    },
  },
  created: function() {
    this.dMessage = pMessage.get('init');
  },

});
