// JavaScript Document
<script> 
var speed=30//速度数值越大速度越慢 
butong_net_left2.innerHTML=butong_net_left1.innerHTML 
function Marquee3(){ 
if(butong_net_left2.offsetWidth-butong_net_left.scrollLeft<=0)
butong_net_left.scrollLeft-=butong_net_left1.offsetWidth 
else{ 
butong_net_left.scrollLeft++ 
} 
} 
var MyMar3=setInterval(Marquee3,speed) 
butong_net_left.onmouseover=function() {clearInterval(MyMar3)} 
butong_net_left.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)} 
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
 function bigger1(){
  img1.style.width = '400px';
  img1.style.height = '400px';
 }
 function bigger2(){
  img2.style.width = '400px';
  img2.style.height = '400px';
 }
 function bigger3(){
  img3.style.width = '400px';
  img3.style.height = '400px';
 }
 function bigger4(){
  img4.style.width = '400px';
  img4.style.height = '400px';
 }
 function normal1(){
  img1.style.width = '200px';
  img1.style.height = '230px';
 }
 function normal2(){
  img2.style.width = '300px';
  img2.style.height = '230px';
 }
 function normal3(){
  img3.style.width = '250px';
  img3.style.height = '230px';
 }
 function normal4(){
  img4.style.width = '200px';
  img4.style.height = '230px';
 }
</script>