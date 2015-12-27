var XboxController = require('xbox-controller');
var xbox = new XboxController;

var id = "cb157b931d5a4066bdc73de6080b794b";
var address = "fc:d8:58:53:49:ea";
var sphero = require("sphero");
var bb8 = sphero(id); // change BLE address accordingly

var seconds = function(ms){
  return ms * 1000;
};

var angle = 0;
var speed = 0;
xbox.on('left:move', function(position){
  if(position.x < 0){
    angle -= 1;
  }
  if(position.x > 0){
    angle += 1;
  }
  if(position.y === 0){
    speed = 0;
  }
  if(position.y > 0){
    speed = 1;
  }
});

bb8.connect(function() {

  setInterval(function(){
    bb8.roll(150 * speed, angle);
    console.log(speed, angle);
  }, 50);

});

xbox.on('not-found', function(){
  console.log('Xbox controller could not be found');
});
