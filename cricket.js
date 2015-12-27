var id = "cb157b931d5a4066bdc73de6080b794b";
var address = "fc:d8:58:53:49:ea";
var sphero = require("sphero"),
    bb8 = sphero(id); // change BLE address accordingly



var seconds = function(ms){
  return ms * 1000;
};
bb8.connect(function() {

  bb8.roll(150, 0);
  bb8.color({ red: 255, green: 0, blue: 255 });
  
  setTimeout(function(){
    bb8.roll(150, 180);
    bb8.color({ red: 0, green: 255, blue: 255 });
  }, seconds(6));

  setTimeout(function(){
    bb8.roll(150, 0);
    bb8.color({ red: 255, green: 255, blue: 0 });
  }, seconds(10));

  setTimeout(function(){
    bb8.roll(150, 180);
    bb8.color({ red: 255, green: 255, blue: 255 });
  }, seconds(14));

  setTimeout(function(){
    bb8.roll(150, 180);
    bb8.color({ red: 50, green: 150, blue: 255 });
  }, seconds(16));

  setTimeout(function(){
    bb8.roll(150, 90);
    bb8.color({ red: 50, green: 255, blue: 150 });
  }, seconds(20));

  setTimeout(function(){
    bb8.color({ red: 0, green: 0, blue: 0 });
    process.exit();
  }, seconds(22));

});

