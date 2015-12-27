var id = "cb157b931d5a4066bdc73de6080b794b";
var address = "fc:d8:58:53:49:ea";
var sphero = require("sphero"),
    bb8 = sphero(id); // change BLE address accordingly

bb8.connect(function() {
  console.log('connected');
  var delay = 1000;
  var step_duration = 200;
  var total_steps = 24;
  var take_step = function(step, total_steps){
    setTimeout(function(){
      direction = step/total_steps * 360;
      bb8.roll(150, direction);
      bb8.color({red: 0, green: direction, blue: 360 - direction });
      console.log(direction, step);
    }, (step * step_duration) + delay);
  };
  
  for(var step = 0; step < total_steps; ++step ){
    take_step(step, total_steps); 
  }

  setTimeout(function(){
    bb8.stop();
    process.exit();
  }, (total_steps * step_duration) + delay);
});
