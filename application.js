// var Sidebar = Backbone.Model.extend({
//   promptColor: function() {
//     var cssColor = prompt("Please enter a CSS color:");
//     this.set({color: cssColor});
//   }
// });

var Card = Backbone.Model.extend({

});

var Cards = Backbone.Collection.extend({
  model: Card,

  allSame: function(){
    return true;
  },

  allDifferent: function(){
    return false;
  }
});

var Game = Backbone.View.extend({

  el: "#main",

  events: {
    "click .card": "cardSelected"
  },

  initialize: function(){
    this.cards = [];
    this.renderCards();
  },

  renderCards: function(){
    for(x = 0; x < 9; x += 1){
      this.$el.append("<div class='card'><div class='shape'><div class='diamond'></div></div><div class='shape'><div class='diamond'></div></div></div>");
    }
  },

  cardSelected: function(event){
    event.preventDefault();
    console.log("card selected");
  }

})

$(function(){
  window.game = new Game();
})
