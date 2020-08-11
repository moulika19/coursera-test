
  var speakWord = "Hello";
  
  (function(window){
  	   var helloSpeaker={};
  	   helloSpeaker.speakWord =speakWord;
  	   helloSpeaker.speak=function(name) {
        console.log(helloSpeaker.speakWord + " " + name);
        }
       window.helloSpeaker=helloSpeaker;
   })(window);

