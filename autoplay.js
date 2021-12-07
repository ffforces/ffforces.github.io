var audio = document.getElementById("audio")
function start() {
          if (audio.readyState) {
                document.getElementById("audio").play();
          } else {
                 audio.oncanplay = function () {

               document.getElementById("audio").play();
               };
          }
 }
