function My_Date() {
  var n = document.getElementById("Test_Date").name;
  document.getElementById("test").innerHTML = n;
}
function My_class(){
  var y = document.getElementById("Test_class").name;
  document.getElementById("test").innerHTML= y;
}
function My_subject(){
  var z = document.getElementById("Test_subject").name;
  document.getElementById("test").innerHTML
}



var hopperLab = {
  name: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.name = " + this.name);
    console.log("outer func:  self.name = " + self.name);
    (function () {
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







