function back1(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.cursor = "pointer";
  document.getElementById("box").style.zIndex= "3";
  document.getElementById("shotaroExp").style.opacity = "0";
}
function exp1(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.cursor = "none";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("shotaroExp").style.opacity = "1";
}