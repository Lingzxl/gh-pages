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
					        +'<a href="editPage.html"><p class="button"><img src="images/write.png"/><span>写听后感</span></p></a>'
					        +'<p><a href="#"><span class="search"><img src="images/search1.png"/></span></a></p>'
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
				.html('<div class="conright mobilenone">'
					 +'<div class="code">'
					   +'<p class="code-img">'
					   +'<img src="images/code.png"></p>'
					   +'<p class="code-txt"><span>扫描二维码</span></p>'
					   +'<p class="code-txt"><span>下载如歌App</span></p>'
				     +'</div>'
				  +'</div>');
	}
 });

