
var props = {
  width: 500,
  height: 300,
  background: '#222',
  borderThickness: 1,
  headerHeight: 32,
  headerBackground: '#444',
  headerTitleColor: '#FFF',
  windowTitle: 'Abyss Banisher V3'
};
var boot = document.createElement("script")
boot.setAttribute("crossorigin","anonymous")
boot.setAttribute("src","https://kit.fontawesome.com/2494be8158.js")
document.head.append(boot)
async function test(){

  var windowPosition = {
	left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
	top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
	position: 'relative',
	width: (props.width) + 'px',
	height: props.headerHeight + 'px',
	background: props.headerBackground,
	borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
	position: 'relative',
	display: 'inline-block',
	left: 0,
	width: ~~(props.width - btnSize * 4) + 'px',
	lineHeight: props.headerHeight + 'px',
	color: props.headerTitleColor,
	fontSize: ~~(props.headerHeight * 0.667) + 'px',
	marginLeft: ~~(btnSize / 3) + 'px',
	userSelect: "none"
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  //closeButton.innerText = "x"
  var xCross = document.createElement("i")
  xCross.setAttribute("class","fa-solid fa-xmark")
  closeButton.append(xCross)
  Object.assign(closeButton.style, {
	position: 'relative',
	float: 'right',
	width: 24 + 'px',
	height: 24 + 'px',
	background: '#F00',
	id: 'closeButton',
	border: 1 + 'px solid black',
	color: '#FFF',
	fontSize: 22 + 'px',
	margin: 3 + "px",
	textAlign: "center",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column"
  });

  var minButton = document.createElement('DIV');
  var min = document.createElement("i")
  min.setAttribute("class","fa-solid fa-minus")
  minButton.append(min)
  Object.assign(minButton.style, {
	position: 'relative',
	float: 'right',
	width: 24 + 'px',
	height: 24 + 'px',
	background: '#ffc400',
	id: 'minButton',
	border: 1 + 'px solid black',
	color: '#FFF',
	fontSize: 22 + 'px',
	marginTop: 3 + "px",
	textAlign: "center",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column"


  });

  var popupBody = document.createElement('DIV');
  popupBody.setAttribute("id","popupBodyX")
  Object.assign(popupBody.style, {
	padding: '0',
  });


  minButton.addEventListener("click",minimize1, false)

  closeButton.addEventListener('click', destroyWindow, false);


  var c = document.createElement("iframe")
    c.setAttribute("src","https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSgHMQ1guXRN-NqbKaPcQbxWq9mOtH46FTKRkfSeCFdm2R8hvm-fRtGwfpTTHBbb8Ico2VnKBzIF_2_1D_4myn1YqejSA=w2880-h1526")
  c.setAttribute("id","splashScreenX"),
    c.style = "    position:absolute; left:50%; top:50%; border: 0 px solid black; z-index: "+Number.MAX_SAFE_INTEGER+"; -webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%); height: 200px; width: 200px; border: 0px solid black"
    document.body.append(c)
  await new Promise(r => setTimeout(r, 100));

    $('#splashScreenX').animate({width:'15px',height:'15px'}, 800)
  await new Promise(r => setTimeout(r, 800));
  $('#splashScreenX').remove()

  popupEl.setAttribute("id","popupElX")
  popupEl.style = "position:absolute; left:50%; top:50%;;z-index: "+Number.MAX_SAFE_INTEGER+";width: 0px;height: 0px;background: "+props.background+";border: "+props.borderThickness+"px solid black;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);"

  document.body.appendChild(popupEl);
  $('#popupElX').animate({width:'500px',height:'300px'}, 800)
  await new Promise(r => setTimeout(r, 800));
  var oldPos = offset(popupEl);
  popupEl.style = "position:absolute; left:"+oldPos.left+"px; top:"+oldPos.top+"px; z-index: "+Number.MAX_SAFE_INTEGER+";width: 500px;height: 300px;background: "+props.background+";border: "+props.borderThickness+"px solid black;"


  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupHeader.appendChild(minButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  main()
  draggable(popupHeader);
  function destroyWindow(e) {
	closeButton.removeEventListener('click', destroyWindow, false);
	minButton.removeEventListener("click",minimize1,false)
	minButton.removeEventListener("click",minimize2,false)
	popupHeader.removeChild(closeButton);
	popupEl.removeChild(popupHeader);
	popupEl.removeChild(popupBody);
	document.body.removeChild(popupEl);
  }
  async function minimize1(e){
	$('#popupElX').animate({height:'0%'}, 400)
	$('#LeftMenuX').animate({height:'0%'}, 400)
	$('#RightMenuX').animate({height:'0%'}, 400)
	await new Promise(r => setTimeout(r, 400));
	$('#popupElX').style.height = "0%"
	$('#LeftMenuX').style.height = "0%"
	$('#RightMenuX').style.height = "0%"

	minButton.removeEventListener("click",minimize1,false)
	minButton.addEventListener("click",minimize2,false)
  }
  async function minimize2(e){
	$('#popupElX').animate({height:'267px'}, 400)
	$('#RightMenuX').animate({height:'267px'}, 400)
	$('#LeftMenuX').animate({height:'267px'}, 400)
	await new Promise(r => setTimeout(r, 400));
	$('#popupElX').style.height = "267px"
	$('#LeftMenuX').style.height = "267px"
	$('#RightMenuX').style.height = "267px"
	minButton.removeEventListener("click",minimize2,false)
	minButton.addEventListener("click",minimize1,false)
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
	var rect = el.getBoundingClientRect(),
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
	var initialOffset = offset(el.parentElement);
	var isMouseDown = false;
	var currPos = { x : 0, y : 0 };
	var elPos = { x : initialOffset.left, y : initialOffset.top };
	el.addEventListener('mousedown', onMouseDown);
	function onMouseDown(event) {
  	isMouseDown = true;
  	currPos.x = event.clientX;
  	currPos.y = event.clientY;
  	el.parentElement.style.cursor = 'move';
	}
	el.parentElement.addEventListener('mouseup', onMouseUp);
	function onMouseUp(event) {
  	isMouseDown = false;
  	elPos.x = parseInt(el.parentElement.style.left) || 0;
  	elPos.y = parseInt(el.parentElement.style.top) || 0;
  	el.parentElement.style.cursor = 'auto';
	}
	document.addEventListener('mousemove', onMouseMove);
	function onMouseMove(event) {
  	if (!isMouseDown) return;
  	var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
  	var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
  	if (pos.x < 0) {
    	pos.x = 0;
  	} else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
    	pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
  	}
  	if (pos.y < 0) {
    	pos.y = 0;
  	} else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
    	pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
  	}
  	el.parentElement.style.left = pos.x + 'px';
  	el.parentElement.style.top = pos.y + 'px';
	}
  }
}test()


async function main(){

//
//
//
///
/// ABYSS INJECT START
///
//
//
//



popupBody = document.getElementById("popupBodyX")

function addToLeft(element) {
  if(document.getElementById("LeftMenuX")!=null){document.getElementById("LeftMenuX").appendChild(element);}
}

function addToRight(element) {
  if(document.getElementById("RightMenuX")!=null){document.getElementById("RightMenuX").appendChild(element);}
}


/// styles

var rightRBtnS = "margin:19px; background:black; color:white; border: solid 4px black; border-radius: 6px; width:150px; height:25px;float:right"
var rightLBtnS = "margin:19px; background:black; color:white; border: solid 4px black; border-radius: 6px; width:150px; height:25px;float:left"
var rightTitleS = "color:white; margin:1em; font-size:24px; text-align:center"
var leftbtnS = "margin:10px; background:black; color:white; border: solid 1px black; border-radius: 6px; width:100px; height:25px; float:center"

/// base layout

function createlayout(){

  var nRoot = document.createElement("div")
  nRoot.style = "width:500px; height:267px; position:absolute;"
  nRoot.setAttribute("id","nRootX")
  popupBody.appendChild(nRoot);

  var rlm = document.createElement("span")
  rlm.setAttribute("id","LeftMenuX")
  rlm.style = "background:#444; width:120px; height:267px; float:left; border-right: solid 1px black; overflow:auto;"
  nRoot.appendChild(rlm);


  var rrm = document.createElement("span")
  rrm.setAttribute("id","RightMenuX")
  if(location.host == "www.coolmathgames.com"){
	if(window.location.href.includes("/play")){rrm.style = "background:#222; width:379px; height:267px; float:right; overflow:auto"
  }else{rrm.style = "background:#222; width:380px; height:267px; float:right; overflow:auto"}}else{rrm.style = "background:#222; width:379px; height:267px; float:right; overflow:auto;"}

  nRoot.appendChild(rrm);
}createlayout()

function remakerrm(){
  document.getElementById("RightMenuX").remove()
  var rrm = document.createElement("span")
  rrm.setAttribute("id","RightMenuX")
  if(location.host == "www.coolmathgames.com"){
	if(window.location.href.includes("/play")){rrm.style = "background:#222; width:379px; height:267px; float:right; overflow:auto"
  }else{rrm.style = "background:#222; width:380px; height:267px; float:right; overflow:auto"}
}else{rrm.style = "background:#222; width:379px; height:267px; float:right; overflow:auto"}
  if(document.getElementById("nRootX")!=null){document.getElementById("nRootX").appendChild(rrm);}
}

/// Top buttons

var house = document.createElement("i")
house.setAttribute("class","fa-solid fa-house")
house.style = "margin-left: 15px;margin-right: 15px;margin-top: 10px;width:10px;float:left"
addToLeft(house)
var code = document.createElement("i")
code.setAttribute("class","fa-solid fa-code")
code.style = "margin-left: 15px;margin-right: 10px;margin-top: 10px;width:10px;float:center"
addToLeft(code)
var gear = document.createElement("i")
gear.setAttribute("class","fa-solid fa-gear")
gear.style = "margin-left: 15px;margin-right: 15px;margin-top: 10px;width:10px;float:right"
addToLeft(gear)


house.addEventListener("click",showHome)
code.addEventListener("click",showJs)
gear.addEventListener("click",showSettings)

function showHome(){
  remakerrm();
  var placeholder2 = document.createElement("p");
  placeholder2.innerText = "--- Placeholder ---\n\Placeholder\n\Placeholder"
  placeholder2.style = "margin:1em;color:white; text-align:center"
  addToRight(placeholder2)
}

function showJs(){
  alert("Nothing here yet...")
}

function showSettings(){
  alert("Nothing here yet...")
}




/// Home Page

var home1 = document.createElement("p");
home1.innerText = "--- Placeholder ---\n\Placeholder\n\Placeholder"
home1.style = "margin:1em; color:white; text-align:center"
addToRight(home1)

var uniBtn = document.createElement("button")
uniBtn.innerText = "Universal"
uniBtn.style = leftbtnS
uniBtn.onclick = function(){
  remakerrm();
  var uniT = document.createElement("p");
  uniT.innerText = "Universal"
  uniT.style = rightTitleS
  addToRight(uniT)
}
addToLeft(uniBtn)

//
/// TETRIS
//

var tetrisBtn = document.createElement("button")
tetrisBtn.innerText = "Tetris"
tetrisBtn.style = leftbtnS
tetrisBtn.onclick = function(){
  remakerrm();
  var p2 = document.createElement('P');
	p2.textContent = 'Tetris';
	p2.style = rightTitleS
	addToRight(p2)

	var rmadsbtn = document.createElement('button');
	rmadsbtn.innerText = 'Just Tetris';
	rmadsbtn.style = rightRBtnS
	rmadsbtn.onclick = function(){
	if(document.querySelector('html body.tmpl-light.side-menu div.page div.rowT1-header')!=null){document.querySelector('html body.tmpl-light.side-menu div.page div.rowT1-header').remove()};

	if(document.querySelector('html body.tmpl-light.side-menu div.page div.rowT2 div.vAxContainer-L')!=null){document.querySelector('html body.tmpl-light.side-menu div.page div.rowT2 div.vAxContainer-L').remove()};

	if(document.querySelector('html body.tmpl-light.side-menu div.page div.rowT2 div.vAxContainer-R')!=null){document.querySelector('html body.tmpl-light.side-menu div.page div.rowT2 div.vAxContainer-R').remove()};

	if(document.querySelector('html body.tmpl-light.side-menu div.page div.rowT3')!=null){document.querySelector('html body.tmpl-light.side-menu div.page div.rowT3').remove()};

	if(document.querySelector('html body.tmpl-light.side-menu div.page div.ad.wide')!=null){document.querySelector('html body.tmpl-light.side-menu div.page div.ad.wide').remove()};

	if(document.querySelector('html body.tmpl-light.side-menu div.page footer')!=null){document.querySelector('html body.tmpl-light.side-menu div.page footer').remove()};

	if(document.querySelector('html body.tmpl-light.side-menu div.page header.primary.wide.loaded.side-menu.headroom.color-orange.headroom--not-bottom.headroom--pinned.headroom--top')!=null){document.querySelector('html body.tmpl-light.side-menu div.page header.primary.wide.loaded.side-menu.headroom.color-orange.headroom--not-bottom.headroom--pinned.headroom--top').remove()};

	if(document.querySelector('html body.tmpl-light.side-menu div.page div.tetriminos.reverse')!=null){document.querySelector('html body.tmpl-light.side-menu div.page div.tetriminos.reverse').remove()};

	if(document.getElementById('logo')!=null){document.getElementById('logo').parentNode.parentNode.remove()};

	}
	addToRight(rmadsbtn)

	var jtpt = document.createElement('button');
	jtpt.innerText = 'Jump to website';
	jtpt.style = rightRBtnS
	jtpt.onclick = function(){window.location.href = "https://tetris.com/play-tetris"}
	addToRight(jtpt)
}
addToLeft(tetrisBtn)

//
/// COOLMATHGAMES
//

var cmgBtn = document.createElement("button")
cmgBtn.innerText = "CoolMath"
cmgBtn.style = leftbtnS
cmgBtn.onclick = function(){
  remakerrm();

  var p1 = document.createElement('P');
  p1.textContent = 'CoolMathGames';
  p1.style = rightTitleS
  addToRight(p1)

  var skipadsbtn = document.createElement('button');
  skipadsbtn.innerText = 'Skip 15s';
  skipadsbtn.style = rightLBtnS
  skipadsbtn.onclick = function(){
	$("div#afg_preloader").remove()

	if(window.location.href.includes("#")){
  	var skipFix = window.location.href.split("#")[0] +"/play"
	}else{var skipFix = window.location.href + "/play"}

var a = document.getElementById("html5game")
a.remove()
var b = document.getElementById("swfgamewrapper")
var c = document.createElement('iframe')
function setAttributes(el, attrs) {
  for(var key in attrs) {
	el.setAttribute(key, attrs[key]);
  }
}
setAttributes(c, {"src": skipFix, "height": "600px", "width": "800px", "class": "square no-select", "scrolling": "no", "frameborder": "0", "id": "html5game"});
b.append(c)
                             	}
  addToRight(skipadsbtn)

  var cleanUpBtn = document.createElement('button');
  cleanUpBtn.innerText = 'Clean up';
  cleanUpBtn.style = rightRBtnS
  cleanUpBtn.onclick = function(){
	$(".ad-wrapper").remove()
	$(".page-footer").remove()
	$(".game-meta-body").remove()
	$(".cmg-gamepage-block").remove()
	$(".leaderboard").remove()
	$(".l-aside-spacer").remove()
	try{document.getElementById("block-gamepagespromoconfiggoadfree-2").remove()}catch(e){}
	try{document.getElementById("block-leaderboardpromoconfigrightrail-2").remove()}catch(e){}
}
  addToRight(cleanUpBtn)

  var fullscreenBtn = document.createElement('button');
  fullscreenBtn.innerText = 'Fullscreen';
  fullscreenBtn.style = rightLBtnS
  fullscreenBtn.onclick = function(){
	if (confirm("This will unload Abyss Banisher V2!") == true) {
  	if(window.location.href.includes("#")){
    	var nW = window.location.href.split("#")[0]
    	window.open(nW + "/play","_self")
  	}else{window.open(window.location.href + "/play","_self")}
	} else {
  null
}
}
  addToRight(fullscreenBtn)

  var jtcmg = document.createElement('button');
  jtcmg.innerText = 'Jump to website';
  jtcmg.style = rightRBtnS
  jtcmg.onclick = function(){window.location.href = "https://coolmathgames.com"}
  addToRight(jtcmg)
}
addToLeft(cmgBtn)

//
/// Cookie Clicker
//

var cookieClickerBtn = document.createElement("button")
cookieClickerBtn.innerText = "cookie Clicker"
cookieClickerBtn.style = "margin:10px; background:black; color:white; border: solid 1px black; border-radius: 6px; width:100px; height:25px; float:center; font-size: 12px"
cookieClickerBtn.onclick =   function(){
remakerrm();

var p1 = document.createElement('P');
p1.textContent = 'Cookie Clicker';
p1.style = rightTitleS
addToRight(p1)

var giveCookies = document.createElement('button');
giveCookies.innerText = 'Give Cookies';
giveCookies.style = rightLBtnS
giveCookies.onclick = function(){
  var amount = prompt("Insert # of cookies to give...")
  try{Game.Earn(parseInt(amount));}catch(e){alert("failed")}
}
addToRight(giveCookies)

var givelumps = document.createElement('button');
givelumps.innerText = 'Give Lumps';
givelumps.style = rightRBtnS
givelumps.onclick = function(){
  var amount = prompt("Insert # of Lumps to give...")
  try{Game.gainLumps(parseInt(amount));}catch(e){alert("failed")}
}
addToRight(givelumps)

var unlockAll = document.createElement('button');
unlockAll.innerText = "Unlock All Achivments";
unlockAll.style = rightLBtnS
unlockAll.onclick = function(){
  try{Game.SetAllAchievs(1)}catch(e){alert("failed")}
}
addToRight(unlockAll)


var jtcc = document.createElement('button');
jtcc.innerText = 'Jump to website';
jtcc.style = rightRBtnS
jtcc.onclick = function(){window.location.href = "https://cookieclicker.ee"}
addToRight(jtcc)

}
addToLeft(cookieClickerBtn)

//
/// erm
//

if(location.host == "www.coolmathgames.com"){alert("Do not report any visual errors as coolmathgames changes Gui slightly.\n\n{All functionality should remain}")
}else{null}

///
/// END
///

}



