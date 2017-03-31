$(document).ready(function(){
	$.ajax({
			url:"../json/shangchengdemo.json",
			type:"GET",
			dataType:"json",
			success:function(data){
				
					var title=data.data.title;
					var huodong=data.data.huodong;
					var youhui=data.data.youhui;
					makeTitle(title);
					makeHuoDong(huodong,huodong.length);
					$('.huodong>.num>span').eq(0).addClass('active');
					action();
					$.each(youhui,function(i){
						makeYouHui(this.tupian,this.text,this.num);
					});
				
				
			},
			
			error:function(error){
				alert('fail');
				console.log(error);
			}
});
	
});
function makeTitle(pageTitle){
	var strHtml='<span class="title">'+pageTitle+'</span>';
	$('div.head').append(strHtml);
};

function makeHuoDong(huodong,length){
	var strHtml='<div class="huodong" ><ul class="tupian"><li><img src='+huodong[0]+'></li><li><img src='
	+huodong[1]+'></li></ul><div class="num">';
	for(var i=1;i<=length;i++){
		strHtml=strHtml+'<span >'+i+'</span>';
		// console.log(i);
	}
	strHtml=strHtml+'</div>'+'</div>';
	$('div.guanggao').append(strHtml);


}
function makeYouHui(tupian,text,num){
	var optionHtml='<div class="item"><div class="tupian"><img src='+tupian+'></div><div class="content"><p class="decoration>'+
	text+'</p><p class="reference">免费领取</p><p class="num">已领'+num+'张</p></div></div>';
	$('div.youhuiquan').append(optionHtml);


}
//滚动 加手动显示广告
function action(){
	var $huodong=$('div.guanggao div.huodong');
	var ul=$('div.guanggao div.huodong ul');
	var $num=$huodong.find('.num span');
	var oneWidth=$huodong.find('ul li').eq(0).width();
	var timer=null;
	var iNow=0;
	//delegate mingcheng shijian huo on shijain mingcheng chuli bangding
	$('div.guanggao').delegate("span","click",function(){
		// alert("fa");
		$(this).addClass('active')
				.siblings().removeClass('active');
		iNow=$(this).index();
		// console.log(iNow);
		
		ul.animate({
                "left":-iNow*oneWidth,
                 //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
            }),1000;
		// console.log(ul.css("left"));
	});
	function autoplay(){
		timer=setInterval(function(){
			iNow++;
			if(iNow>$num.length-1){
				iNow=0;
			}
			$num.eq(iNow).trigger('click');
		},2500)
	}
	autoplay();
	//触摸悬停
	$('div.guanggao').delegate("ul","ontouchstart",function(){
		alert("fa");
			clearInterval(timer);
			
	
	});
	$('div.guanggao').on("pointer","ul",function(){
		autoplay();
	});
	
}