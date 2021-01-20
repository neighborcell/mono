import pStory from "./pStory.js"

var cnt = 0;

var app = new Vue({
  el: "#vApp",
  data: {
    show: true,
    dStory: null,
  },
  methods: {
    mStoryBtn: function() {
      cnt++;
      this.dStory = pStory['init'][cnt];
    },
  },
  created: function() {
    this.dStory = pStory['init'][cnt];
  },

});

//export default app;