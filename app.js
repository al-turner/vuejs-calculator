window.onload = function() {
  var app = new Vue({
    el: "#app",
    data: {
      readout: null
    },
    methods: {
      addToReadout: function(number) {
        if (this.readout === null) {
          this.readout = number;
        } else this.readout = this.readout + "" + number;
      },
      addOperatorToReadout: function(operator) {
        if (this.readout === null) {
          return;
        } else this.readout += operator;
      },
      solveAnswer: function() {
        this.readout = eval(this.readout);
      },
      clearCalculator: function() {
        this.readout = null;
      }
    }
  });
};
