jQuery(document).ready(function() {
    // document.title="title";

    loadJson();
    // setInterval(function(){
    // 	loadJson();
    // },1000);
 
});

function loadJson() {
    jQuery.ajax({
        url: "../json/shangchengdemo.json",
        type: "GET",
        dataType: "json",
        success: function(data) {

            var title = data.data.title;
            var huodong = data.data.huodong;
            var gonggao = data.data.gonggao;
            var shangpin = data.data.shangpin;
            var mingxingdianpu = data.data.mingxingdianpu;
            var youhuishangpin = data.data.youhuishangpin;
            var youhui = data.data.youhui;
            // makeTitle(title);
            makeHuoDong(huodong, huodong.length);
            jQuery('.huodong>.num>span').eq(0).addClass('active');
            makeGongGao(gonggao);
            makeShangPin(shangpin);
            // console.log(mingxingdianpu);
            makeMingXingDianPu(mingxingdianpu);
            makeYouHuiShangPin(youhuishangpin);

            jQuery('div.youhuiquan .body').empty();
            jQuery.each(youhui, function(i) {
                makeYouHui(this.tupian, this.text, this.num);
            });



        },

        error: function(error) {
            alert('fail');
            console.log(error);
        }
    });
}

function makeTitle(pageTitle) {
    // var strHtml='<span class="title">'+pageTitle+'</span>';
    var strHtml = pageTitle;
    jQuery(document).attr('title', strHtml);
    // console.log(strHtml);
    // jQuery('head title').empty();
    // jQuery('head title').html(strHtml);
};

function makeHuoDong(huodong, length) {
    jQuery('div.guanggao').empty();
    var strHtml = "";
    for (var i = 0; i < length; i++) {
        strHtml = strHtml + '<li class="row"><img src=' + huodong[i] + '></li>';
    }

    var strHtml = strHtml + '</ul><div class="num">';
    for (var i = 1; i <= length; i++) {
        strHtml = strHtml + '<span >' + i + '</span>';
        // console.log(i);
    }
    strHtml = '<div class="huodong" ><ul class="tupian">' + strHtml + '</div>' + '</div>';
    jQuery('div.guanggao').html(strHtml);
    actionHuoDong();

}

function makeGongGao(gonggao) {
    var flagGongGao = false;
    var i = 0;
    var strHtml = '<span class="text"><span class="red">' + gonggao[0].decoration + '  </span><span class="content">' + gonggao[0].text + '</span></span>' + '';
    jQuery('div.gonggao ').append(strHtml);
    setInterval(function() {
        if (i == gonggao.length)
            i = 0;

        // jQuery('div.gonggao span.red').next().empty();
        var strHtml = '<span class="text"><span class="red">' + gonggao[i].decoration + '</span><span class="content">' + gonggao[i].text + '</span></span>' + '';
        jQuery('div.gonggao span.text').empty();
        // console.log(strHtml);
        i++;
        jQuery('div.gonggao ').append(strHtml);

    }, 4000);

}

function makeShangPin(shangpin) {
    var strHtml = '<div class="twocolom">';
    jQuery.each(shangpin, function(i) {
        if (i % 2 == 0) {
            strHtml = strHtml + '<div class="colom"><div class="colomitem">' + '<div class="tupian"><img src=' + this.tupian + '></div><div class="content"><p class="decoration">' +
                this.decoration + '</p><p class="money">' + this.money + '</p></div></div>';
        } else {
            strHtml = strHtml + '<div class="colomitem"><div class="tupian"><img src=' + this.tupian + '></div><div class="content"><p class="decoration">' +
                this.decoration + '</p><p class="money">' + this.money + '</p></div></div></div>';
        }
    });
    jQuery('div.shangpin .body').html(strHtml);
}

function makeMingXingDianPu(mingxingdianpu) {

    // var optionHtml = '<div class="container">';
    // jQuery.each(mingxingdianpu, function(i) {
    //     optionHtml = optionHtml + '<div class="row "><div class="tupian"><img src=' + this.tupian + '></div><div class="content"><p class="decoration">' +
    //         this.text + '</p><p class="num">' + this.num + '</p></div></div>';
    // })
    // optionHtml = optionHtml + '</div>';
    // console.log(optionHtml);
    // jQuery('div.mingxingdianpu .body').html(optionHtml);
    // var data=new Array();
    //  //valueMap初始化
    // for(var k=0;k<9;k++){
    // data[k]=new Array();
    // for(var j=0;j<5;j++){
    //      data[k][j]="";         
    //      }
    // }
    // valueMap[0][0]="pinghezhi";valueMap[1][0]="qixuzhi";valueMap[2][0]="telinzhi";
    // valueMap[3][0]="xueyuzhi";valueMap[4][0]="yangxuzhi";valueMap[5][0]="yinxuzhi";
    // valueMap[6][0]="tanshizhi";valueMap[7][0]="shirezhi";valueMap[8][0]="qiyuzhi";
    var data=new Array();
    for (var i=0;i<6;i++){
        data[i]=new Object();
    }
    
    // dat["href","pic","title"];
        // console.log(data);
    for(var i=0;i<mingxingdianpu.length;i++){
        data[i].href="#";
        data[i].pic=mingxingdianpu[i].tupian;
        data[i].title=mingxingdianpu[i].text+mingxingdianpu[i].num;
    }
    // console.log(data);
    var slider = Zepto.ui.slider('#slider', {
        autoPlay:false,
        showArr:false,
        viewNum:3,
        content:data
       
    });
   
    // actionMingXingDianPu();
}

function makeYouHuiShangPin(youhuishangpin) {
    var strHtml = '<div class="twocolom">';
    jQuery.each(youhuishangpin, function(i) {
        if (i % 2 == 0) {
            strHtml = strHtml + '<div class="colom"><div class="colomitem">' + '<div class="tupian"><img src=' + this.tupian + '></div><div class="content"><p class="decoration">' +
                this.decoration + '</p><p class="money">' + this.money + '</p></div></div>';
        } else {
            strHtml = strHtml + '<div class="colomitem"><div class="tupian"><img src=' + this.tupian + '></div><div class="content"><p class="decoration">' +
                this.decoration + '</p><p class="money">' + this.money + '</p></div></div></div>';
        }
    });
    jQuery('div.youhuishangpin .body').html(strHtml);
}

function makeYouHui(tupian, text, num) {
    var optionHtml = '<div class="item"><div class="tupian"><img src=' + tupian + '></div><div class="content"><p class="decoration">' +
        text + '</p><p class="reference">免费领取</p><p class="num">已领' + num + '张</p></div></div>';

    jQuery('div.youhuiquan .body').append(optionHtml);


}
//滚动 加手动显示广告
function actionHuoDong() {
    var jQueryhuodong = jQuery('div.guanggao div.huodong');
    var ul = jQuery('div.guanggao div.huodong ul');
    var jQuerynum = jQueryhuodong.find('.num span');
    var oneWidth = jQueryhuodong.find('ul li').eq(0).width();
    var timer = null;
    var iNow = 0;
    //delegate mingcheng shijian huo on shijain mingcheng chuli bangding
    jQuery('div.guanggao').delegate("span", "click", function() {
        // alert("fa");
        jQuery(this).addClass('active')
            .siblings().removeClass('active');
        iNow = jQuery(this).index();
        // console.log(iNow);

        ul.animate({
            "left": -iNow * oneWidth,
            //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
        }, 1000);
        // console.log(ul.css("left"));
    });

    function autoplay() {
        timer = setInterval(function() {
            iNow++;
            if (iNow > jQuerynum.length - 1) {
                iNow = 0;
            }
            jQuerynum.eq(iNow).trigger('click');
        }, 2500)
    }
    autoplay();
    //触摸悬停
    jQuery('div.guanggao').delegate("ul", "touchstart", function(e) {
        //防止页面整个左右摆动
        e.preventDefault();
        clearInterval(timer);
    });
    jQuery('div.guanggao').delegate("ul", "touchend", function(e) {
        autoplay();
        //防止页面整个左右摆动
        e.preventDefault();
    });
    //拖拽切换图片
    jQuery(".huodong").hover(function() {
        jQuery("#btn_prev,#btn_next").fadeIn()
    }, function() {
        jQuery("#btn_prev,#btn_next").fadeOut()
    });

    jQuerydragBln = false;

    jQuery(".huodong ").touchSlider({
        flexible: true,
        speed: 200,
        btn_prev: jQuery("#btn_prev"),
        btn_next: jQuery("#btn_next"),
        paging: jQuery(".num span"),
        counter: function(e) {
            jQuery(".num span").removeClass("active").eq(e.current - 1).addClass("active");
        }
    });

    jQuery(".huodong .tupian").bind("dragstart", function() {
        jQuerydragBln = true;
    });

    jQuery(".huodong .tupian ").click(function() {
        if (jQuerydragBln) {
            return false;
        }
    });
}

function actionMingXingDianPu() {
    var oneWidth = jQuery('.row').width();
    var timer = null;
    var jQueryrow=jQuery('.mingxingdianpu .row');
    var length=jQueryrow.length;
    // console.log(length);
    // console.log(oneWidth);
    var pos = 0;
    
    //  jQuery('div.mingxingdianpu').delegate(".row", "click",function() {
    // 	// if (jQuerydragBln) {
    //  //        return false;
    //  //    }
    //     pos = jQuery(this).index();
    //     console.log(pos);
    //     if(pos==length-1){
    //     	pos=0;
    //     }
    //     jQuery('div.container').animate({
    //         "left": -oneWidth *pos
    //     });
    //     console.log(jQuery('div.container').css("left"));
    // });
      jQuerydragBln = false;
      //触摸悬停
    jQuery('div.mingxingdianpu').delegate(".container", "touchstart", function(e) {
        //防止页面整个左右摆动
        e.preventDefault();
    });
    
    // jQuery(".mingxingdianpu").hover(function() {
    //     jQuery("#btn_prev,#btn_next").fadeIn()
    // }, function() {
    //     jQuery("#btn_prev,#btn_next").fadeOut()
    // });
   
    // jQuery(".mingxingdianpu ").touchSlider({
    //     // flexible: false,
    //     // speed: 200,
    //     // btn_prev: jQuery("#btn_prev"),
    //     // btn_next: jQuery("#btn_next"),
       
    // });

}
