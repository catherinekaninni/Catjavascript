function myFunction() {
    let text;
    let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
    switch(favDrink) {
      case "Coca-Cola":
        text = "Excellent choice. Coca-Cola is good for your soul.";
        break;
      case "Pepsi":
        text = "Pepsi is my favorite too!";
        break;
      case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?";
        break;
      default:
        text = "I have never heard of that one..";
    }
    document.getElementById("demo").innerHTML = text;
  }


  var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

hopperLab.func();


// The answer to this code is
// outer func:  self.name = bar
// inner func:  this.name = undefined
// inner func:  self.name = bar

// Trying to console inner func returns undefined as this keyword refers to the globalobject myObject  which does not have an assigned value to its inner func







