

var speakWord = "Good Bye";
  
  (function(window){
  	   var byeSpeaker={};
  	   byeSpeaker.speakWord =speakWord;
  	   byeSpeaker.speak=function(name) {
        console.log(byeSpeaker.speakWord + " " + name);
        }
       window.byeSpeaker=byeSpeaker;
   })(window);

