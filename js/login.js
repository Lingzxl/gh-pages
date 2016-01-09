/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-07 15:52:05
 * @version $Id$
 */
  // 记住我切换图片效果
 function change_pic(){
	var imgObj = document.getElementById("caocao_pic");
	var Flag=(imgObj.getAttribute("src",2)=="images/checkbox1.png")
	imgObj.src=Flag?"images/checkbox2.png":"images/checkbox1.png";
 }

 $(document).ready(function() {
  
   $(".error_msg").hide();
   
   $('.btn_login').click(function(e) {  
	    //点击登陆  		     
		var name = $.trim($('input[name=name]').val());  
		var passwd = $.trim($('input[name=password]').val()); 
		// alert(name); 
		// alert(passwd); 
		if (name == '') {   
			$(".error_msg").html('请填写用户名');  
			$(".error_msg").show().fadeOut(3500);
			$('input[name=name]').focus().css('border', '2px solid #AB9113');
				return false;
		}else if (passwd == '') {  
			$(".error_msg").html('请填写密码');  
			$(".error_msg").show().fadeOut(3500);  
			$('input[name=password]').focus().css('border', '2px solid #AB9113'); 
			    return false; 
		}else if(!passwd == ''&& passwd.length<6){
			$(".error_msg").html('密码小于6位');  
			$(".error_msg").show().fadeOut(3500);  
			$('input[name=password]').focus().css('border', '2px solid #AB9113'); 
			    return false; 
		}else{	
             $.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/login',// 验证文件			    
			    data: {'mue': name, 'pass': passwd},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  // alert(JSON.stringify(data));
			          window.location.href="index.html";
			    },
			    //请求失败后的回调
			    error: function(data){
				      var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				      $('.error_msg').empty();
			          $('.error_msg').append(tmp);
			          $(".error_msg").show().fadeOut(3500);   
			          window.location.href="#";      
			    }
		      }); 
            }
		 e.preventDefault();
    }); 
 });
