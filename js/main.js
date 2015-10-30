// Message me button

function init(){
   var obj=document.getElementsByTagName('html')[0];
   var obj1=document.getElementById('mes');

   var w=obj.offsetWidth;
   var h=obj.offsetHeight;

   var l=Math.floor(Math.random()*w);
   var t=Math.floor(Math.random()*h);

if(l>w-obj1.offsetWidth){
   l=w-obj1.offsetWidth;
 }
if(t>h-obj1.offsetHeight){
   t=h-obj1.offsetHeight;
 }
   obj1.style.left=l+'px';
   obj1.style.top=t+'px';
   obj1.className='pstn';
 } 
 
 // Typed.js

 window.addEventListener?
 window.addEventListener('load',init,false):
 window.attachEvent('onload',init);
 
 	$(function(){

		$("#typed").typed({
			strings: ["I design apps." ],
			typeSpeed: 120,
			backDelay: 1000,
			loop: false,
			// defaults to false for infinite loop
			loopCount: false,
			callback: function(){ foo(); }
		});

		function foo(){ console.log("Callback"); }

	});

