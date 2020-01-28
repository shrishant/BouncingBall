var ball = document.createElement("DIV");
var x=true;
var force = 2;
var container = document.getElementById('container');
container.appendChild(ball);  
container.style.backgroundColor="rgb(" + Math.floor(Math.random() * 50)+","+Math.floor(Math.random() * 70)+","+Math.floor(Math.random() * 100) +")";
ball.style.width = "80px";
ball.style.height = "80px";
ball.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 100)+","+Math.floor(Math.random() * 20)+","+Math.floor(Math.random() * 10) +")";
ball.style.borderRadius = "50%";
ball.style.position = "relative";
ball.style.top = "20px";
ball.style.left = "45%";
(function () {
    setInterval(function(){ 
        if(x==true){
            ball.style.top = parseInt(ball.style.top) + 1 +"px";
            if(ball.style.top==500 -parseInt(ball.style.height) + "px"){
                x=false;
                ball.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 10)+","+Math.floor(Math.random() * 50)+","+Math.floor(Math.random() * 100) +")";
                container.style.backgroundColor="rgb(" + Math.floor(Math.random() * 90)+","+Math.floor(Math.random() * 05)+","+Math.floor(Math.random() * 10) +")";

            }
        }
        if(x==false){
            ball.style.top = parseInt(ball.style.top) - 1 +"px";
            if(ball.style.top==0+"px"){
                x=true;
                ball.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 50)+","+Math.floor(Math.random() * 10)+","+Math.floor(Math.random() * 6) +")";
                container.style.backgroundColor="rgb(" + Math.floor(Math.random() * 0)+","+Math.floor(Math.random() * 100)+","+Math.floor(Math.random() * 50) +")";

            }
        }
    }, 3);
})();
