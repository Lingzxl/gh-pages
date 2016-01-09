/**
 * 
 * @authors Ling (you@example.org)
 * @date    2015-11-30 11:32:56
 * @version $Id$
 */

 
    /*从底部回到顶部*/
  $(document).ready(
			function(){
				$(window).scroll(
					function(){			
						var A = $(window).scrollTop();						
							if(A > 50){
								$(".to-top").show();
								$(".to-top").stop().animate({"bottom":30},800);
							}else if(A <= 50){
								$(".to-top").hide();
							    $(".to-top").stop().animate(function(){
							    $(".to-top").css("bottom",50);									
							});
								}
					}		
				);
				$(".to-top").click(
					function(){
						$("html,body").animate({"scrollTop":0},800);
					}
				);

  /*搜索框1，输入搜索文字弹出div*/
  $('.headb input').focus(function() {
    $(".searchdiv1").fadeIn("slow"); //淡入淡出效果显示div
  });
  $('.headb input').blur(function() {
    $(".searchdiv1").fadeOut("slow");
  });

 loadItem(page*pageSize, pageSize,1);

 var hot=1;
// /*最热最新分类效果*/
 var option1 = $(".content .hot-new .option1");

  $(".content .hot-new .option1").click(function() {
    option1.removeClass("option1");
    $(this).addClass("option1");
    option1 = $(this);
    if (hot == 0) {
        hot = 1;
        loadItem(0, 5, 1);
    }
  });

  $(".content .hot-new .op_new").click(function() {
    option1.removeClass("option1");
    $(this).addClass("option1");
    option1 = $(this);
    if (hot == 1) {
        hot = 0;
        loadItem(0, 5, 0);
    }
  });

  var div_hot = $('<div></div>');
  var div_new = $('<div></div>');

  div_hot.attr('id', 'div_hot');
  div_new.attr('id', 'div_new');

 /////////主题列表//////////////////////
        var page = 0,
        pageSize =5,
        loading = false,
        loadFinish = false;
  function loadItem(p, s,h) {
        loding = true;
        $.get('http://120.24.14.108:3000/api/v1/topics', {offset:p,limit:s,hot:h}, function(data, status) {
            if (status === 'success') {
                if (data.topics.length < 1) {
                    loadFinish = true;
                    $('.finish').text('暂无更多').css({
                      textAlign: 'center',
                      color: '#fff',
                      margin: '5px auto'
                    });
                    return;
                }
                //alert(JSON.stringify(hot));
            for (var i = 0; i < data.topics.length; i++) {
             var tmp='<div class="conbox">'+
                    '<div class="conimg mobilenone">'+
                        '<a href="songDetail.html">'+
                           '<p><img src="'+data.topics[i].cover+'" height="266" width="640" alt=""></p>'+
                        '</a>'+
                    '</div>'+
                '<div class="contxt">'+
                    '<div class="txttop mobilenone">'+
                      '<a href="#"><p class="disp">/'+data.topics[i].song.name+'</a>'+
                      '<a href="#"><p class="txtsize">'+data.topics[i].title+'</p></a>'+                                  
                    '</div>'+
                    '<div class="txtmid mobilenone">'+                                   
                        '<p class="disp">'+                       
                          '<span class="disp"><a href="#"><img src="'+data.topics[i]._author.avatar_api+'" height="35" width="35" alt=""></span>'+
                          '<span>'+data.topics[i]._author.name+'</span></a>'+
                          '<p class="ptalk">'+ 
                            '<span><img src="images/like.png"/></span><span>'+data.topics[i]._ups.length+'</span>'+
                            '<span>/</span>'+ 
                            '<span><img src="images/talk.png"/></span><span>'+data.topics[i].reply_count+'</span>'+
                          '</p>'+
                        '</p>'+
                    '</div>'+
                    '<div class="bg_image">'+
                    '<div class="mtop pcnone">'+
                        '<a href="#"><p class="msize">'+data.topics[i].title+'</p></a>'+
                    '</div>'+
                    '<div class="mmiddle pcnone">'+
                        '<a href="#"><p class="mdisp">《'+data.topics[i].song.name+'》</p></a>'+
                    '</div>'+
                    '<div class="mbottom pcnone">'+                        
                        '<span class="mdisp">'+
                          '<a href="#">'+
                            '<img src="'+data.topics[i]._author.avatar_api+'" height="27" width="27" alt="">'+            
                            '<span style="font-size:1.2rem;">'+data.topics[i]._author.name+'</span>'+
                          '</a>'+
                        '</span>'+                        
                        '<span class="mtalk">'+
                          '<span>'+data.topics[i]._ups.length+'</span><span>喜欢</span>'+
                          '<span>'+data.topics[i].reply_count+'</span><span>评论</span>'+
                        '</span>'+
                    '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';

        if(hot==1){
          $('#JKDiv_0').append(div_hot);
          $('#div_new').empty();
          $('#div_hot').append(tmp); 
           //console.log(tmp);
        }else if(hot==0){
          $('#JKDiv_0').append(div_new);
          $('#div_hot').empty();
          $('#div_new').append(tmp);
        }

         var image=document.getElementsByClassName("bg_image");
         image[i].style.background='url('+data.topics[i].cover+')';
         image[i].style.backgroundPosition='center center';
         image[i].style.backgroundSize='100% 100%';

        }
        
                ++page;
                if ($(document.body).height() < $(window).height() && !loadFinish) {
                    loadItem(page*pageSize, pageSize, hot);
                }

            } else {
                alert('网络加载失败！');
            }
            loading = false;   
        });
    }




});



	

   

