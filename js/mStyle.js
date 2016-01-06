/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-14 10:30:10
 * @version $Id$
 */

	$(document).ready(function(){
 /*最热最新分类效果*/
		var option1 = $(".content .hot-new .option1");
		$(".content .hot-new li").tap(function(){
		    option1.removeClass("option1");
		    $(this).addClass("option1");
		    option1 = $(this);
		});
    });