/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-10 15:20:20
 * @version $Id$
 */

     $(document).ready(function(){
		   $('.div_list ul li .close').tap(function(){
            $(this).parents('.div_list').remove();
        });

           $('.div_input .close').tap(function(){
            $('.div_input .input').value.remove();
        });	 

		}
    );
	
