//get cookie & block from css//
var cookie = document.getElementById("cookie");
var block = document.getElementById("block");
var counter=0;

function jump() {
    if(cookie.classList == "animate"){return}
    cookie.classList.add("animate");
//timeout removes animation, cookie comes down//
  setTimeout(function(){
        cookie.classList.remove("animate");
    },300);
}

//checks if dead every 10ms//
var checkDead = setInterval(function() {
    let cookieTop = parseInt(window.getComputedStyle(cookie).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //if block and cookie collide at 360, cookie dies, animation stopps//
    if(blockLeft<40 && blockLeft>-40 && cookieTop>=360){
        block.style.animation = "none";
        alert("Your cookie died. Score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
