var scrGame = new Vue({
  el: "#scrGame",
  data: {
    show: true,
    message: "Happy!"
  },
  methods: {
    click: function() {
      this.message = "øoooooooo";
      //this.show = !this.show
    }
  },
});

export default scrGame;
