function back1(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("shotaroExp").style.opacity = "0";
  document.getElementById("minatoExp").style.display="flex";
  document.getElementById("shiodomeExp").style.display="flex";
  document.getElementById("shiroExp").style.display="flex";
  document.getElementById("juroExp").style.display="flex";
  document.getElementById("yomiExp").style.display="flex";
}

function exp1(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "1";
  document.getElementById("shotaroExp").style.opacity = "1";
  document.getElementById("minatoExp").style.display="none";
  document.getElementById("shiodomeExp").style.display="none";
  document.getElementById("shiroExp").style.display="none";
  document.getElementById("juroExp").style.display="none";
  document.getElementById("yomiExp").style.display="none";
}

function back2(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("minatoExp").style.opacity = "0";
  document.getElementById("shiodomeExp").style.display="flex";
  document.getElementById("shiroExp").style.display="flex";
  document.getElementById("juroExp").style.display="flex";
  document.getElementById("yomiExp").style.display="flex";
}
function exp2(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("minatoExp").style.opacity = "1";
  document.getElementById("shiodomeExp").style.display="none";
  document.getElementById("shiroExp").style.display="none";
  document.getElementById("juroExp").style.display="none";
  document.getElementById("yomiExp").style.display="none";
}

function back3(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("shiodomeExp").style.opacity = "0";
  document.getElementById("shiroExp").style.display="flex";
  document.getElementById("juroExp").style.display="flex";
  document.getElementById("yomiExp").style.display="flex";
}
function exp3(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("shiodomeExp").style.opacity = "1";
  document.getElementById("shiroExp").style.display="none";
  document.getElementById("juroExp").style.display="none";
  document.getElementById("yomiExp").style.display="none";
}
function back4(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("shiroExp").style.opacity = "0";
  document.getElementById("juroExp").style.display="flex";
  document.getElementById("yomiExp").style.display="flex";
}
function exp4(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("shiroExp").style.opacity = "1";
  document.getElementById("juroExp").style.display="none";
  document.getElementById("yomiExp").style.display="none";
}
function back5(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("juroExp").style.opacity = "0";
  document.getElementById("yomiExp").style.display="flex";
}
function exp5(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("juroExp").style.opacity = "1";
  document.getElementById("yomiExp").style.display="none";
}
function back6(){
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.zIndex= "4";
  document.getElementById("yomiExp").style.opacity = "0";
}
function exp6(){
  document.getElementById("box").style.opacity = "0";
  document.getElementById("box").style.zIndex= "2";
  document.getElementById("yomiExp").style.opacity = "1";
}