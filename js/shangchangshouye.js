$(document).ready(function(){
	init();
});
function init(){
	headInit();
	daolanlogoInit();
	gonggaoInit();
	footInit();
	gundong();
	 var slider = $.ui.slider('#slider', {
        autoPlay:false,
        showArr:false,
        viewNum:3,
        content:[
            {
                href: "#",
                pic: "../resource/fonts/one.png",
                title:''
            }, {
                href: "#",
                 pic: "../resource/fonts/three.png",
                title: ""
            }, {
                href: "#",
                 pic: "../resource/fonts/four.png",
                title: ""
            }, {
                href: "#",
                pic: "../resource/fonts/two.png",
                title: ""
            },
            {
                href: "#",
                 pic: "../resource/fonts/five.png",
                title: ""
            }, {
                href: "#",
                 pic: "../resource/fonts/six.png",
                title: ""
            }, {
                href: "#",
                pic: "../resource/fonts/one.png",
                title: ""
            }, {
                href: "#",
                 pic: "../resource/fonts/three.png",
                title: ""
            }, {
                href: "#",
                 pic: "../resource/fonts/four.png",
                title: ""
            }, {
                href: "#",
                 pic: "../resource/fonts/two.png",
                title: ""
            }
        ]
    });
}
function headInit(){
	var strHtml='<span ><img src="../resource/fonts/liebiao.png">商场</span>'
	+'<span><input class="sousuo" type="text" placeholder="  搜店/商品/优惠" ></span>'
	+'<span class="logo" ><img src="../resource/fonts/logo.png"><span >义乌一区商场</span></span>';	
	$('div.head').html(strHtml);
}
function daolanlogoInit(){
	var strHtml='<span class="logo" ><img src="../resource/fonts/停车缴费.png"><span >停车缴费</span></span>'
	+'<span class="logo" ><img src="../resource/fonts/付款.png"><span > 付款</span></span>'
	+'<span class="logo" ><img src="../resource/fonts/地图.png"><span >室内地图</span></span>'
	+'<span class="logo" ><img src="../resource/fonts/停车.png"><span >停车找车</span></span>'
	+'<span class="logo" ><img src="../resource/fonts/找货神器.png"><span > 找店</span></span>';
	$('div.body .daolanlogo').html(strHtml);
}
function gonggaoInit(){
	var strHtml='<span class="logo"><img src="../resource/fonts/通知.png"></span>'
	+'<span class="text">本商场一键wifi调整说明</span>';
	$('div.gonggao').html(strHtml);	
		
}
function footInit(){
	var strHtml='<div class="logo"><img src="../resource/fonts/首页.png"><span class="text">首页</span></div>'
	+'<div class="logo"><img src="../resource/fonts/搜索.png"><span class="text">搜索</span></div>'
	+'<div class="logo"><img src="../resource/fonts/我的.png"><span class="text">我的</span></div>';
	$('div.foot').html(strHtml);
}
function gundong(){
	
}