/**
 * 
 * @authors Ling (you@example.org)
 * @date    2015-12-10 18:01:48
 * @version $Id$
 */

/*---------------------------------------加载左边的html-----------------------------------------------*/
$(function() {
	if (document.getElementById("pcleft")) {
		$("#pcleft")
				.html('<div class="menu mobilenone">'
					 	  +'<ul>'
						 	+'<li class="current"><a href="index.html"><span>首页</span></a></li>'
						 	+'<li><a href="news.html"><span>消息</span></a></li>'
						 	+'<li><a href="my.html"><span>我的</span></a></li>'
					      +'</ul>'
					        +'<a href="editPage.html"><div class="button"><span>写听后感</span></div></a>'
					        +'<p><a href="#"><span class="am-icon-search am-icon-btn search"></span></a></p>'
					    +'</div>'

    +'<div class="search_ab mobilenone">' 
  		+'<div class="searchdiv2">'
  		     +'<div class="song">'
  		     +'<div class="song_div">'
  		        +'<lable style="color:#666666">歌曲</lable>'
  			   	+'<a href="#"><p>罗生门<span>-麦浚龙/谢安琪</span></p></a>'
  			   	+'<a href="#"><p>罗生门<span>-罗志祥</span></p></a>'
  			   	+'<a href="#"><p>罗生门<span>-林峰</span></p></a>'
  			 +'</div>'
  		     +'</div>'

  		     +'<div class="listen">'
  		   	 +'<div class="listen_div">'
  		        +'<lable style="color:#666666">听后感</lable>'
  		        +'<a href="#"><p><span>听</span>罗生门<span>有感</span></p></a>'
  			 +'</div>'
  			 +'</div>'
  		+'</div>'

        +'<div class="put">'
  		    +'<input results="ss" type="text" placeholder="搜听后感、歌曲" />'
  		    +'<a href="#"><img src="images/u52.png"></a>'
        +'</div>'

    +'</div>');
	}

	/*菜单栏的导航效果:首页、消息、我的*/
	var current = $(".pcleft .menu .current");
		$(".pcleft .menu li").click(function(){			
		    current.removeClass("current");		
		    $(this).addClass("current");
		    current = $(this);
		});

    /*搜索框2，输入搜索文字弹出div*/
	  $(document).ready(function(e){	  	
          	  $('.search_ab input').focus(function(){
              $(".searchdiv2").fadeIn("slow");//淡入淡出效果显示div
          	});
              $('.search_ab input').blur(function(){
		      $(".searchdiv2").fadeOut("slow");
		  });  	  
	  });
   
    /*点击空白地方，菜单栏中搜索框2隐藏*/
      $(document).ready(function() {
	        $(".pcleft .search").click(function(){	        	
		     $(".search_ab").toggle();
		      return false;
	     });  
	        $(document).click(function(event){
			var _con =  $(".search_ab ");
			if(!_con.is(event.target) && _con.has(event.target).length === 0){
				$(".search_ab ").hide();
			}
	});
  });

/*-------------------------------------------加载左边的html---------------------------------------------*/
	if (document.getElementById("pcright")) {
		$("#pcright")
				.html('<div class="aa"><div class="headd mobilenone">'
					    +'<ul>'
					     +'<li><span class="dnone">罗生门</span></li>'
					     +'<li><span class="am-icon-play-circle-o am-icon-sm dcircle" style="color: #FFF;font-size:2.6rem;"></span></li>'
					    +'</ul>'
					   +'</div>' 

					 +'<div class="conright mobilenone">'
					   +'<a href="#"><span class="chesong">查看歌曲</span></a>'
					   +'<a href="#"><span class="checlose">收起</span></a>'
					 +'<div class="code">'
					   +'<p class="code-img">'
					   +'<img src="images/cade.jpg" height="220" width="220" alt=""></p>'
					   +'<p class="download">'
					   +'<a href="#"><span class="am-icon-mobile am-icon-md" style="color: #fFF;">下载如歌客户端</span></a>'
					   +'</p>'
				     +'</div>'

					+'<div class="jScrollbar"><div class="jScrollbar_mask">'
					   +'<p>男：若果你 未觉荒谬<br>被传闻谈论的疯子<br>'
						  +'女：很感激 喜欢我十年 六百周<br>'
						  +'耿耿于你心 六百周<br>'
						  +'男：若果你 未觉荒谬<br>'
						  +'女：很感激 喜欢我十年<br>'
						  +'耿耿于你心 六百周<br>'
						  +'男：若果你 未觉荒谬<br>被传闻谈论的疯子 挽着手<br>'
						  +'女：很感激 喜欢我十年<br>耿耿于你心 六百周<br>'
						  +'男：若果你 未觉荒谬<br>被传闻谈论的疯子 挽着手<br>'
						  +'女：很感激 喜欢我十年<br>耿耿于你心 六百周<br>'
						  +'男：很可惜 这一世未能<br> 长厮守 但事实 如若告诉<br>'
						  +'男：若果你 未觉荒谬<br>被传闻谈论的疯子 挽着手<br>'
						  +'女：很感激 喜欢我十年<br>'
					   +'</p>'
					+'</div>'

				  +'<div class="jScrollbar_draggable"><a href="#" class="draggable"></a></div>'

				  +'</div>'
				  +'</div>'
				  +'</div>');
	}

   /*设置歌词收起展开，并且二维码的变化随之变化*/
		$(document).ready(function() {
		if($(".conright .code").is(":visible")==true){
			$('.conright .chesong').click(function(){
				$('.conright .code').hide();
				$('.conright .jScrollbar').css('display', 'block');
				$('.conright .chesong').hide();
				$('.conright .checlose').css('display', 'block');
			
			  if($(".conright .jScrollbar").is(":visible")==true){
			  	$('.jScrollbar').jScrollbar();//滚动条滚动
			    $('.conright .checlose').click(function(){
                $('.conright .jScrollbar').hide();
                $('.conright .code').css('display', 'block');
                $('.conright .chesong').css('display', 'block');
                $('.conright .checlose').css('display', 'none');
		         });
		      }
	       });
		}		
});

   /* 使自定义滚动条和页面滚动条不一起滚动*/
	$(document).ready(function () {
		$('.conright .jScrollbar').mouseenter(function () {
			var stop = $(document).scrollTop();
			$(document).scroll(function (e) {
				$(this).scrollTop(stop);
			});
		}).mouseleave(function(){
			$(document).unbind('scroll');
		});
	});
 });

