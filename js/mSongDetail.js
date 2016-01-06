/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-05 10:34:41
 * @version $Id$
 */
/*当点击下载信息关闭按钮时隐藏*/	
		$(document).ready(
			function(){
				$(".mdownload .close .cl").tap(
					function(){						
						$(".mdownload").hide();
						$("header").css("top","0");
					}
				);
			}
		);

/*判断当屏幕滚动时，下载信息隐藏*/
		window.onscroll=function(){		  
			$(".mdownload").hide();
			$("header").css("top","0");	
		}

    /*移动端歌词展开*/
		 $(document).ready(
			function(){
			if($(".sopen").css("display")=="block"){
				$(".aalot").tap(function(){												
						$(".ssong .alots").css("display","block");
						$(".ssong .ssopen").css("display","none");
						$(".ssong .ssclose").css("display","block");						
						if($(".ssclose").css("display")=="block"){
            	           $(".aalest").tap(function(){												
						         $(".ssong .alots").css("display","none");
						         $(".ssong .ssclose").css("display","none");
						         $(".ssong .ssopen").css("display","block");
					            }
				           );
                         }
					  }
				   );	
                }            
		    }
	    );
    /*移动端简介展开*/
		 $(document).ready(
			function(){
			if($(".sopen").css("display")=="block"){
				$(".alot").tap(function(){												
						$(".introduce .lots").css("display","block");
						$(".introduce .sopen").css("display","none");
						$(".introduce .sclose").css("display","block");						
						if($(".sclose").css("display")=="block"){
            	           $(".alest").tap(function(){										
						         $(".introduce .lots").css("display","none");
						         $(".introduce .sclose").css("display","none");
						         $(".introduce .sopen").css("display","block");
					            }
				           );
                         }
					  }
				   );	
                }            
		    }
	    );

    /*听后感的最热最新搜索*/
		 $(document).ready(
			function(){
			if($(".afterhot").css("display")=="block"){
				$(".hot-new .hot").css("background","rgb(91,91,91)");
				$(".hot-new .new").css("color","#000");			
				$(".hot-new .new").tap(function(){											
						$(".afterhot").css("display","none");	
						$(".afternew").css("display","block");	
						$(".hot-new .hot").css({
							background: 'none',
							color: '#000'
						});
						$(".hot-new .new").css({
							background: 'rgb(91,91,91)',
							color: '#fff'
						});					
						           
						if($(".afternew").css("display")=="block"){
            	           $(".hot-new .hot").tap(function(){
            	           		$(".hot-new .new").css({
            	           			background: 'none',
            	           			color: '#000'
            	           		});
            	           		$(".hot-new .hot").css({
            	           			background: 'rgb(91,91,91)',
            	           			color: '#fff'
            	           		});          
						        $(".afterhot").css("display","block");	
						        $(".afternew").css("display","none");				         
					            }
				           );
                         }
					  }
				   );	
                }            
		    }
	    );	

