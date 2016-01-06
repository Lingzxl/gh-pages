/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-11-30 11:32:56
 * @version $Id$
 */


/* 左右栏自适应宽度
 $(document).ready(function(e) {
 var winResize = function () {
 var left = $(".left");
 var right = $(".right");
 var w = $(window).width();
 var lw = left.width();
 var rw = right.width();
 var mw = 1280;

 if (w > mw) {
 left.css("left", "" + (w - mw) / 2 + "px");
 }
 else {
 left.css("left", "0");
 }

 if (w > mw) {
 right.css("right", "" + (w - mw) / 2 + "px");
 }
 else {
 right.css("right", "0");
 }

 };

 $(window).resize(winResize);
 winResize();
 });*/

/* 编辑页JS*/

 /* 解决左侧导航搜索按钮与编辑页其他交互冲突*/
       $(document).ready(function() {
		   var but= $(".left p span");
	       but .click(function(e){
			   event.stopPropagation();
		       $(".left .popinput").toggle();
			   $(".left .popsong").hide();
			   $(".amcontent").hide();
			   $(".edtxt .popchoose").hide();
			   $(".upload").hide();
			   return false;
		   });
		   $(document).click(function(event){
			   var _con = $(".left .popinput");
			   if(!_con.is(event.target) && _con.has(event.target).length === 0){
				   $(".left .popinput").hide();
			   }
		   });
      });


/* 解决左侧导航搜索框与编辑页其他交互冲突*/
				 $(document).ready(function( ) {
					 var inp=$(".left .popinput");
					 inp .click(function(e){
					   event.stopPropagation();
						 $(".left .popsong").toggle();
						 $(".amcontent").hide();
						 $(".edtxt .popchoose").hide();
						 $(".upload").hide();
						 return false;
				});
				$(document).click(function(event){
					var _con =  $(".left .popsong");
					if(!_con.is(event.target) && _con.has(event.target).length === 0){
						$(".left .popsong").hide();
					}
				});
			});

/*编辑页上传照片按钮*/
			$(document).ready(function( ) {
				var addimg= $(".add p");
				var close=$(".upload").find("span");
				addimg.click(function(e){
					event.stopPropagation();
					$(".upload").toggle();
					$(".left .popinput").hide();
					$(".left .popsong").hide();
					$(".amcontent").hide();
					$(".edtxt .popchoose").hide();
					return false;
				});
				$(document).click(function(event){
					var _con = $(".upload");
					if(!_con.is(event.target) && _con.has(event.target).length === 0){
						$(".upload").hide();
					}
				});
				close.click(function(){
					$(".upload").hide();
				});
			});

/* 编辑页请选择歌曲按钮*/
		   $(document).ready(function( ) {
			  var edin= $(".amtoggle");
			   edin .click(function(e){
				  event.stopPropagation();
				  $(".amcontent").toggle();
				   $(".popchoose").hide();
				   $(".upload").hide();
				   $(".left .popinput").hide();
				   $(".left .popsong").hide();
				   return false;
			   });
			   $(document).click(function(event){
				  var _con = $(".amcontent");
				  if(!_con.is(event.target) && _con.has(event.target).length === 0){
					$(".amcontent").hide();
				}
			  });
		   });

/* 编辑页选择歌曲名称输入框*/
    $(document).ready(function( ) {
	 	var edin= $(".amcontent");
	     edin .click(function(e){
			 event.stopPropagation();
		   $(".edtxt .popchoose").toggle();
			 $(".upload").hide();
			 $(".left .popinput").hide();
			 $(".left .popsong").hide();
			 return false;
	    });
		$(document).click(function(event){
			var _con = $(".edtxt .popchoose");
			if(!_con.is(event.target) && _con.has(event.target).length === 0){

				$(".edtxt .popchoose").hide();
			}
		});
     });


/*消息主页导航栏切换*/
$(document).ready(function( ) {
	$(".ntab li").click(function(){
		$(this).addClass("addborder").removeClass("addtwo").siblings().removeClass("addborder").addClass("addtwo");
		var ind=$(".ntab li").index(this);
       $(".tbcontent>div").eq(ind).show().siblings().hide();
	}).eq(0).click();
});

/*我的主页JS*/
    /*我的主页设置按钮*/
			$(document).ready(function() {
				var cogbtn=$(".dataright .setbtn");
				cogbtn.click(function(e){
					event.stopPropagation();
					$(".dataright .unfold").toggle();
				});
				$(document).click(function(event){
					var _con = $(".dataright .unfold");
					if(!_con.is(event.target) && _con.has(event.target).length === 0){
						$(".dataright .unfold").hide();
					}
				});
			});


/*我的主页下部分导航切换*/
       function ismb(){
		   var mq = window.matchMedia('(max-width: 614px)');

		   if (mq.matches) {
				return true;
		   } else {
				return false;
		   }
		   //var system = {
			//   win: false,
			//   mac: false,
			//   xll: false,
			//   ipad:false
		   //};
		   //var p = navigator.platform;
		   //system.win = p.indexOf("Win") == 0;
		   //system.mac = p.indexOf("Mac") == 0;
		   //system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		   //system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
           //
		   //if(system.win || system.mac || system.xll||system.ipad) {
			//   return true;
		   //} else {
			//   return false;
		   //}
	   }
			var f=function(){
				$(this).addClass("addborder").removeClass("addtwo").siblings().removeClass("addborder").addClass("addtwo");
				var ind= $(".classifynav li").index(this);
				$(".classifycont>div").eq(ind).show().siblings().hide();
			};

			$(document).ready(function( ) {
				if(ismb()){
					$(".classifynav li").click(function(){
						var ind=$(".classifynav li").index(this);
					//$(".classifynav li a").click(function(){
					//	var $li=$(this).parent();
					//	var ind=$li.parent().children().index($li);
						if(ind=="0"){
							window.location.href="myFeel.html";
						}else if(ind=="1"){
							window.location.href="myDraft.html";
						}else if(ind=="2"){
							window.location.href="myCollect.html";
						}else if(ind=="3"){
							window.location.href="considerMe.html";
						}else{
							window.location.href="myAttention.html";
						}
					})
				}else{
					$(".classifynav li").click(f);
					$(".classifynav li").eq(0).click();
					$("#concernbox .classifynav li").eq(0).click();
				}
			});

/*我的主页上部分分类切换*/
			$(document).ready(function() {
				if(ismb()){
					$(".dataright li ul li").click(function(){
						var mfocus=$(this).attr("mfocus");
						$(".classifynav li").eq(mfocus).click();
					})
				}else{
					$(".dataright li ul li").click(function(){
						var hrf=$(this).children("a").attr("href");
						$(hrf).show().siblings().hide();
						var focus=$(this).attr("focus");
						$(".classifynav li").eq(focus).click();
					})
				}
			});

    /*我的主页我的收藏里按钮切换*/
			$(document).ready(function( ) {
				$(".collectbtn span").click(function(){
					$(this).addClass("changebtn").siblings().removeClass("changebtn");
					var ind=$(".collectbtn span").index(this);
					if(ind==0){
						$(".collectbox .collfeel").show().siblings("div").hide();
					}else{
						$(".collectbox .collsong").show().siblings("div").hide();
					}
				}).eq(0).click();
			});

/*设置主页导航栏切换*/
		$(document).ready(function( ) {
			$(".setnav li").click(function(){
				$(this).addClass("addborder").removeClass("addtwo").siblings().removeClass("addborder").addClass("addtwo");
				var ind=$(".setnav li").index(this);
				$(".setcontent>div").eq(ind).show().siblings().hide();
			}).eq(0).click();
		});


/*我的主页设置点击跳转*/
		$(document).ready(function() {
			var focus=location.search.substring(location.search.length - 1);
			$(".setnav li").eq(focus).click();
		});


/*设置主页下部分数据更改伸缩*/
			$(document).ready(function () {
					$('.perdata p .alter').click(function () {
						 var change=$(this).parent().parent();
						$(this).hide();
						change.find(".pack").css('display', 'block');
						change.find(".extend").css('display', 'block');
					});
				$('.perdata p .pack').click(function () {
					var change=$(this).parent().parent();
					$(this).hide();
					change.find(".alter").css('display', 'block');
					change.find(".extend").css('display', 'none');
				});

			});

/*他的主页上部分分类切换*/
$(document).ready(function() {
	$(".odright li ul  a").click(function(){
		var hrf=$(this).attr("href");
		$(hrf).show().siblings().hide();
	})
});

/*他的主页我的收藏里按钮切换*/
$(document).ready(function( ) {
	$("#othersfeel .newhot span").click(function(){
		$(this).addClass("switch").siblings().removeClass("switch");
		var ind=$("#othersfeel .newhot span").index(this);
		if(ind==0){
			$("#othersfeel .newest").show().siblings("div").hide();
		}else{
			$("#othersfeel .hotest").show().siblings("div").hide();
		}
	}).eq(0).click();
});
////$("#fenlei > li").click({
////	var res =  $(this).html();// 获取当前点击的li的值
////$("#show").html(res); //将获取的值赋值。
//
//})