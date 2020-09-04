window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var navbar = document.getElementById("navbarr");
    if(document.documentElement.scrollTop > 176 || document.body.scrollTop > 200){      
        navbar.style.position = "fixed";
        navbar.style.top = "-10px";
        navbar.style.width = "100%";
        navbar.style.transition = "all 0.5s";
        navbar.style.backgroundColor = "rgb(0,0,0,0.9)";
    }else{
        navbar.style.position = "relative";
        navbar.style.transition = "all 0.5s"
    }
}