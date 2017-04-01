$(document).ready(function(){
	// document.title="title";
	
	loadJson();
	// setInterval(function(){
	// 	loadJson();
	// },1000);
	
});
function loadJson(){
	$.ajax({
			url:"../json/shangchengdemo.json",
			type:"GET",
			dataType:"json",
			success:function(data){
				
					var title=data.data.title;
					var huodong=data.data.huodong;
					var gonggao=data.data.gonggao;
					var youhui=data.data.youhui;
					// makeTitle(title);
					makeHuoDong(huodong,huodong.length);
					$('.huodong>.num>span').eq(0).addClass('active');
					// console.log(gonggao);
						makeGongGao(gonggao);
			
					

					$('div.youhuiquan .body').empty();
					$.each(youhui,function(i){
						makeYouHui(this.tupian,this.text,this.num);
					});
					actionGonggao();

	// 				setInterval(function(){
	// 	loadJson();
	// },1000);
				
			},
			
			error:function(error){
				alert('fail');
				console.log(error);
			}
	});
}
function makeTitle(pageTitle){
	// var strHtml='<span class="title">'+pageTitle+'</span>';
	var strHtml=pageTitle;
	$(document).attr('title',strHtml);
	// console.log(strHtml);
	// $('head title').empty();
	// $('head title').html(strHtml);
};

function makeHuoDong(huodong,length){
	$('div.guanggao').empty();
	var strHtml='<div class="huodong" ><ul class="tupian"><li><img src='+huodong[0]+'></li><li><img src='
	+huodong[1]+'></li></ul><div class="num">';
	for(var i=1;i<=length;i++){
		strHtml=strHtml+'<span >'+i+'</span>';
		// console.log(i);
	}
	strHtml=strHtml+'</div>'+'</div>';	
	$('div.guanggao').html(strHtml);
	actionHuoDong();

}
function makeGongGao(gonggao) {
	var flagGongGao=false;
	var i=0;
	var strHtml='<span class="text"><span class="red">'+gonggao[0].decoration+'  </span><span class="content">'
				+gonggao[0].text+'</span></span>'+'';
	$('div.gonggao ').append(strHtml);
	setInterval(function(){
			if(i==gonggao.length)
				i=0;
		
			// $('div.gonggao span.red').next().empty();
			var strHtml='<span class="text"><span class="red">'+gonggao[i].decoration+'</span><span class="content">'
				+gonggao[i].text+'</span></span>'+'';
			$('div.gonggao span.text').empty();
			console.log(strHtml);
			i++;
			$('div.gonggao ').append(strHtml);
				
				
			
		},4000);
	// },200000);
	
	
	
}
function makeYouHui(tupian,text,num){
	var optionHtml='<div class="item"><div class="tupian"><img src='+tupian+'></div><div class="content"><p class="decoration">'+
	text+'</p><p class="reference">免费领取</p><p class="num">已领'+num+'张</p></div></div>';
	
	$('div.youhuiquan .body').append(optionHtml);


}
//滚动 加手动显示广告
function actionHuoDong(){
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
	$('div.guanggao').delegate("ul","touchstart",function(){
		clearInterval(timer);
	});
	$('div.guanggao').delegate("ul","touchend",function(){
		autoplay();
	});
	//拖拽切换图片
	$(".huodong").hover(function () {
            $("#btn_prev,#btn_next").fadeIn()
        }, function () {
            $("#btn_prev,#btn_next").fadeOut()
        });

        $dragBln = false;

        $(".huodong .tupian").touchSlider({
            flexible: true,
            speed: 200,
            btn_prev: $("#btn_prev"),
            btn_next: $("#btn_next"),
            paging: $(".num span"),
            counter: function (e) {
                $(".num span").removeClass("active").eq(e.current - 1).addClass("active");
            }
        });

        $(".huodong .tupian").bind("dragstart", function () {
            $dragBln = true;
        });

        $(".huodong .tupian ").click(function () {
            if ($dragBln) {
                return false;
            }
        });
}

function actionGonggao() {
	var timer=null;
	timer=setInterval(function(){

	},2000)
}