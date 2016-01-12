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
 // 登录如歌
   $('.btn_login').click(function(e) {  
	    //点击登陆  		     
		var phone = $.trim($('.content_login input[name=phone]').val());  
		var passwd = $.trim($('.content_login input[name=password]').val()); 
		// alert(name); 
		// alert(passwd); 
		if (phone == '') {   
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
				      // var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				      // $('.error_msg').empty();
			       //    $('.error_msg').append(tmp);
			       //    $(".error_msg").show().fadeOut(3500);   
			       $(".error_msg").html('用户名或密码错误');  
				   $(".error_msg").show().fadeOut(3500);  
				   $('input[name=password]').focus().css('border', '2px solid #AB9113'); 
			          window.location.href="#";      
			    }
		      }); 
            }
		 e.preventDefault();
    }); 

// 点击忘记密码
    $('.about .missPsw').click(function(e){ 
    	var phone = $.trim($('.input input[name=phone]').val());
    	alert(phone);
    	if(phone==''){
    		$(".error_msg").html('请输入手机号');  
			$(".error_msg").show().fadeOut(3500);  
			$('input[name=phone]').focus().css('border', '2px solid #AB9113'); 
			    return false; 
    	}else{
    		$.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/forgotPwd',// 验证文件			    
			    data: {'mobile': phone},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  // alert(JSON.stringify(data));
			        $("#missPsw input[name=phone]").val(phone); 
			       
    				$('.content_login').hide();
    				$('.content_register').hide();
    				$('#missPsw').show();
    				$('.footer').hide();  
			    },
			    //请求失败后的回调
			    error: function(data){
				      var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				      $('.error_msg').empty();
			          $('.error_msg').append(tmp);
			          $(".error_msg").show().fadeOut(3500);   			    
			    }
		      }); 
    	}
    	e.preventDefault();
    }); 

// 重设密码
 $('#missPsw .btn_reset').click(function(e){ 
    	var phone = $.trim($('input[name=phone]').val());
    	var newPsw = $.trim($('input[name=newPsw]').val());
    	var code = $.trim($('input[name=code]').val());

    	alert(phone);
    	alert(newPsw);
    	alert(code);

    	if(newPsw==""){
    		$(".error_msg").html('请输入新密码');  
			$(".error_msg").show().fadeOut(3500);  
			$('input[name=newPsw]').focus().css('border', '2px solid #AB9113'); 
			    return false; 
    	}else if(code==""){
    		$(".error_msg").html('请输入验证码');  
			$(".error_msg").show().fadeOut(3500);  
			$('input[name=code]').focus().css('border', '2px solid #AB9113'); 
			    return false;
    	}else{
    		$.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/resetPwd',// 验证文件			    
			    data: {'mobile': phone,'pass': newPsw,'verify': code},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  // alert(JSON.stringify(data));
			          $('.content_login').show();
    				  $('#missPsw').hide();
    				  $("#missPsw input[name=phone]").val(phone); 
			    },
			    //请求失败后的回调
			    error: function(data){
				      var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				      $('.error_msg').empty();
			          $('.error_msg').append(tmp);
			          $(".error_msg").show().fadeOut(3500);   			    
			    }
		      }); 
    	}
    	e.preventDefault();
    }); 


 // 点击登录按钮
    $('.headc .login_class').click(function(){
      $('.content_login').show();
      // $('.footer lz').show();
      $('.content_register').hide();
      $('#registerCode').hide();
      $('#missPsw').hide();

      // $('.footer lz1').hide();
    });

// 点击注册按钮
    $('.headc .register_class').click(function(){
      $('.content_register').show();
      $('.content_login').hide();
      // $('.footer lz').show();
      $('#registerCode').hide();
      // $('.footer lz1').hide();
      $('#missPsw').hide();
    });


   // 退出登录(登出)
    $('#xs .exit').click(function(e){ 
    	 var storage = window.localStorage;  
         var accessToken = storage["accessToken"];  
         alert(accessToken);
       	 $.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/signout',// 验证文件			    
			    data: {'accessToken': accessToken},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  // alert(JSON.stringify(data));
			    	  localStorage.clear();
			    	  window.location.href="index.html";
			    },
			    //请求失败后的回调
			    error: function(){
	
			    }
		      }); 
        e.preventDefault();

    }); 



 });
