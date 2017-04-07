function ce(type,id,parent){var e=document.createElement(type);if(id)e.id=id;if(parent)ac(parent,e);return e;}
function gi(id){return document.getElementById(id);}
var isIOSAndroid;
var gEvtsMap={'mousedown':'touchstart','mousemove':'touchmove','mouseup':'touchend','click':'touchstart'};
if('ontouchstart' in window)isIOSAndroid=1; else var isIOSAndroid=0;
function aeh(o, evt, handler){
	if(evt=='mousewheel')evt=(/Firefox/i.test(navigator.userAgent))?'DOMMouseScroll':evt;
	var origEvt=evt;
	if(isIOSAndroid)evt=gEvtsMap[evt]||evt;

	if(origEvt=='click'&&isIOSAndroid){
		function clickObj(handler){
			this.hStart=function(e){
				self.pMove=0;self.pStart=mpos(e);self.pStart.touches=e.targetTouches?e.targetTouches.length:0;
				self.eStart=e;
			};
			this.hEnd=function(e){
				if(!self.pMove){callHandler();return;}
				var p1=self.pStart,p2=self.pMove;if(!p1.x&&!p1.y)return;if(e.targetTouches&&e.targetTouches.length>1||p1.touches>1)return;
				if(Math.abs(p1.x-p2.x)>10||Math.abs(p1.y-p2.y)>10)return;
				callHandler();
			};
			this.hMove=function(e){
				self.pMove=mpos(e);
			}
			this.handler=handler;
			var self=this,callHandler=function(){handler(self.eStart);self.pStart={x:0,y:0};self.pMove=0;}
			this.pStart={x:0,y:0};this.eStart=0;
		};var h=new clickObj(handler);
		document.addEventListener?o.addEventListener('touchstart',function(e){h.hStart(e);}, false):document.attachEvent?o.attachEvent("ontouchstart",function(e){h.hStart(e);}):false;
		document.addEventListener?o.addEventListener('touchmove',function(e){h.hMove(e);}, false):document.attachEvent?o.attachEvent("ontouchmove",function(e){h.hMove(e);}):false;
		document.addEventListener?o.addEventListener('touchend',function(e){h.hEnd(e);}, false):document.attachEvent?o.attachEvent("ontouchend",function(e){h.hEnd(e);}):false;
	}else {
		document.addEventListener?o.addEventListener(evt, handler, false):document.attachEvent?o.attachEvent("on" + evt, handler):false;
	}
}
function reh(o,evt, handler){
	if(isIOSAndroid)evt=gEvtsMap[evt]||evt;
	document.removeEventListener?o.removeEventListener(evt,handler,false):o.detachEvent?o.detachEvent("on"+evt, handler):false;
}
function getEvtSrc(e){var o;if(!e&&window.event)o=window.event.srcElement;else if(e.srcElement)o=e.srcElement;else o=e.target;return o;}
function fkey(e){return ((e.keycode)?e.keycode:((window.event)?window.event.keyCode:e.which));}
function mpos(e){
	var d=document,de=d.documentElement;if(!e)e=window.event;
	if(e.targetTouches&&e.targetTouches[0])return{"x":e.targetTouches[0].pageX,"y":e.targetTouches[0].pageY};
	else if(e.pageX!==undefined)return {"x":e.pageX,"y":e.pageY};
	else if(e.clientX!==undefined)return {"x":e.clientX+d.body.scrollLeft+de.scrollLeft,"y":e.clientY+d.body.scrollTop+de.scrollTop};
	return false;
};
function getPos(e){
	var vo=e.getBoundingClientRect(),w=window,d=document;
	var left=vo.left+((w.pageXOffset!==undefined)?w.pageXOffset:(d.documentElement||d.body.parentNode||d.body).scrollLeft);
	var top=vo.top+((w.pageYOffset!==undefined)?w.pageYOffset:(d.documentElement||d.body.parentNode||d.body).scrollTop);
	return {left:left,top:top,w:e.clientWidth,h:e.clientHeight}
}
function epos(e){var y=0,x=0;while(e&&e.tagName!="BODY"){y+=e.offsetTop||0;x+=e.offsetLeft||0;e=e.offsetParent;}return {"x":x,"y":y};};
function del(e){if(e)e.parentNode.removeChild(e);}
function empty(e){while(e.firstChild)del(e.firstChild);}
function next(e){do{e=e.nextSibling;}while(e&&e.nodeType!=1)return e;};
function prev(e){do{e=e.previousSibling;}while(e&&e.nodeType!=1)return e;};
function first(e){e=e.firstChild;return e&&e.nodeType!=1?next(e):e;};
function last(e){e=e.lastChild;return e&&e.nodeType!=1?prev(e):e;};
function gparent(e,n){n=n||1;for(var i=0;i<n;i++)if(e)e=e.parentNode;return e;}
function ac(p,c){if(c)p.appendChild(c);}
function ib(p,c,n){if(!c)return;var s=first(p);while(n){s=next(p);if(n--==0)break;}p.insertBefore(c,s);}//insert before number
function ibe(c,e){if(!c||!e)return;gparent(e).insertBefore(c,e);}//insert before element
function prevDefault(e){e.preventDefault?e.preventDefault():e.returnValue=false;}
function stopProp(e){if(e.stopPropagation)e.stopPropagation();else {e=window.event;e.cancelBubble=true;}};
function qsa(s,e){return (e||document).querySelectorAll(s)||[];}
function qs(s){return document.querySelector(s)||[];}
function writeCk(name,value,days){var expires="";if(days) {var date=new Date();date.addms(days * 86400000);expires="; expires=" + date.toGMTString();}document.cookie=name + "=" + value + expires + "; path=/";}
function readCk(n){var s=n+"=",ck=document.cookie.split(';');for(var i=0;i< ck.length; i++){var c=ck[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(s)==0)return c.substring(s.length,c.length);}return null;}
function eraseCk(n) {writeCk(n,"",-1);}
function randomStr(l){var c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",s="";for(var i=0;i<l;i++) s=s+c.charAt(Math.floor(Math.random()*c.length));return s;}
function getWindowSize(){var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth || e.clientWidth || g.clientWidth,y=w.innerHeight|| e.clientHeight|| g.clientHeight;return{w:x,h:y};}