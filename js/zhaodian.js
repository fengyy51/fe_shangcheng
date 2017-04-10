$(document).ready(function(){
	init();
});
function init(){
	$.ajax({
		url:"../json/zhaodian.json",
		type:"GET",
		dataType:"json",
		success:function(data){
			var item=data.data.item;
			console.log(item);
			makeSouSuoItem(item,item.length);
		},
		error:function(error){
			alert("fail");
			console.log(error);
		}
	});
}
function makeSouSuoItem(item,length){
	$('div.sousuoshow').empty();
	var strHtml='<li class="row">';
	var page=1;
	for(var i=0;i<length;i++){
		if(item[i].page==page){
			strHtml=strHtml+'<div class="item">'+'<span class="tupian"><img src='+item[i].logo+'></span><span class="text">'+item[i].text
			+'</span></div>';

		}		
		else{	
			strHtml=strHtml+'</li>';		
			page++;
			strHtml=strHtml+'<li class="row">'+'<div class="item">'+'<span class="tupian"><img src='+item[i].logo+'></span><span class="text">'+item[i].text
			+'</span></div>';
		}	
		if(i==length-1&&item[i].page==page){
			strHtml=strHtml+'</li>';
		}		
 		
	}
	strHtml=strHtml+'</ul><div class="num">';
	for(i=1;i<=page;i++){
		strHtml=strHtml+'<span>●</span>';
	}
	console.log(strHtml);
	Html='<div class="itemshow"><ul>'+strHtml+'</div></div>';
	$('div.sousuoshow').html(Html);
	action();

}
function action(){
	 jQuery('div.sousuoshow').delegate("ul", "touchstart", function(e) {
        //防止页面整个左右摆动
        e.preventDefault();
      
    });
    jQuery('div.sousuoshow').delegate("ul", "touchend", function(e) {
       
        //防止页面整个左右摆动
        e.preventDefault();
    });
    //拖拽切换图片
    jQuery(".sousuoshow").hover(function() {
        jQuery("#btn_prev,#btn_next").fadeIn()
    }, function() {
        jQuery("#btn_prev,#btn_next").fadeOut()
    });

	jQuerydragBln = false;

    jQuery(".sousuoshow ").touchSlider({
        flexible: true,
        speed: 200,
        btn_prev: jQuery("#btn_prev"),
        btn_next: jQuery("#btn_next"),
        paging: jQuery(".num span"),
        counter: function(e) {
            jQuery(".num span").removeClass("active").eq(e.current - 1).addClass("active");
        }
    });

    jQuery(".sousuoshow .tupian").bind("dragstart", function() {
        jQuerydragBln = true;
    });

    jQuery(".sousuoshow .tupian ").click(function() {
        if (jQuerydragBln) {
            return false;
        }
    });
}