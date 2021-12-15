function back1(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("shotaroExp").style.opacity = "0";
  document.getElementById("minatoExp").style.display="flex";
  document.getElementById("shiodomeExp").style.display="flex";
}
function exp1(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "1";
  document.getElementById("shotaroExp").style.opacity = "1";
  document.getElementById("minatoExp").style.display="none";
  document.getElementById("shiodomeExp").style.display="none";
}

function back2(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("minatoExp").style.opacity = "0";
  document.getElementById("shiodomeExp").style.display="flex";
}
function exp2(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("minatoExp").style.opacity = "1";
  document.getElementById("shiodomeExp").style.display="none";
}

function back3(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("shiodomeExp").style.opacity = "0";
}
function exp3(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("shiodomeExp").style.opacity = "1";
}