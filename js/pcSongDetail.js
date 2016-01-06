/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-07 17:26:24
 * @version $Id$
 */
	/*PC歌词展开*/
		 $(document).ready(
			function(){
			if($(".sopen").is(":visible")==true){
				$(".aalot").click(function(){												
						$(".ssong .alots").css("display","block");
						$(".ssong .ssopen").css("display","none");
						$(".ssong .ssclose").css("display","block");						
						if($(".ssclose").is(":visible")==true){
            	           $(".aalest").click(function(){												
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
		 
    /*PC简介展开*/
		 $(document).ready(
			function(){
			if($(".sopen").is(":visible")==true){
				$(".alot").click(function(){												
						$(".introduce .lots").css("display","block");
						$(".introduce .sopen").css("display","none");
						$(".introduce .sclose").css("display","block");						
						if($(".sclose").is(":visible")==true){
            	           $(".alest").click(function(){										
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
			if($(".afterhot").is(":visible")==true){
				$(".hot-new .hot").css("background","rgb(91,91,91)");
				$(".hot-new .new").css("color","#000");			
				$(".hot-new .new").click(function(){											
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
						           
						if($(".afternew").is(":visible")==true){
            	           $(".hot-new .hot").click(function(){
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
    