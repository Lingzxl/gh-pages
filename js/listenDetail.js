/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-08 15:17:01
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

