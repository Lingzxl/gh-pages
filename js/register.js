/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-08 09:55:08
 * @version $Id$
 */
 $(document).ready(function() {
   // 注册如歌账号
   $('.btn_register').click(function(e) {  
	    //点击登陆  		  
	    var phone = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}$/ ;   
		var name = $.trim($('.content_register input[name=name]').val());  
		alert(name);
		var account = $.trim($('.content_register input[name=account]').val()); 
		var passwd = $.trim($('.content_register input[name=password]').val()); 
		// alert(name); 
		// alert(passwd); 
		if (name == '') {   
			$(".content_register .error_msg").html('请填写昵称');  
			$(".content_register .error_msg").show().fadeOut(3500);
			$('.content_register input[name=name]').focus().css('border', '2px solid #AB9113');
				return false;
		}else if (account == '') {  
			$(".content_register .error_msg").html('请填写手机号码');  
			$(".content_register .error_msg").show().fadeOut(3500);  
			$('.content_register input[name=account]').focus().css('border', '2px solid #AB9113'); 
			    return false; 
		}else if (passwd == '') {  
			$(".content_register .error_msg").html('请输入密码');  
			$(".content_register .error_msg").show().fadeOut(3500);  
			$('.content_register input[name=password]').focus().css('border', '2px solid #AB9113'); 
			    return false; 
		}else if(!passwd == ''&& passwd.length<6){
			$(".content_register .error_msg").html('密码至少需要6个字符');  
			$(".content_register .error_msg").show().fadeOut(3500);  
			$('.content_register input[name=password]').focus().css('border', '2px solid #AB9113'); 
			    return false; 
		}else if(!(account == '') && (!account.match(phone))){
        	$(".content_register .error_msg").html('请输入正确的手机号码'); 
		    $(".content_register .error_msg").show().fadeOut(3500); 
		        return false; 
        }else if(!(account == '') && !(passwd == '') && !(name == '') && (account.match(phone))){
             $.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/signup',// 验证文件			    
			    data: {'name': name, 'pass': passwd, 'mobile': account},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  // alert(JSON.stringify(data));
			    	   $(".content_register").hide();
				  	   $(".footer").hide();
				  	   $("#registerCode").show();
				  	   $(".input_code input[name=phone]").val(account);					
			    },
			    //请求失败后的回调
			    error: function(data){
				      var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				      $('.content_register .error_msg').empty();
			          $('.content_register .error_msg').append(tmp);
			          $(".content_register .error_msg").show().fadeOut(3500);   
			          window.location.href="#registerCode";      
			    }
		      }); 
            }
		 e.preventDefault();
    }); 

// 输入验证码进入如歌
    $('.input_code .jr').click(function(e){ 
       var code = $.trim($('.input_code input[name=code]').val());
       var phone = $.trim($('.input_code input[name=phone]').val());
       var account = $.trim($('.content_register input[name=account]').val()); 
       if (code=='') {
            $(".content_register .error_msg").html('请输入验证码');  
		    $(".content_register .error_msg").show().fadeOut(3500);
		    $('.content_register input[name=name]').focus().css('border', '2px solid #AB9113');
				return false;
       }else{
       	 $.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/active_account',// 验证文件			    
			    data: {'verify': code, 'mobile': phone},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  // alert(JSON.stringify(data));
			    	   var key1 = 'id';
				  	   var value1 = ''+data.user.id+'';
				  	   var key2 = 'name';
				  	   var value2 = ''+data.user.name+'';
				  	   var key3='accessToken';
				  	   var value3 = ''+data.user.accesstoken+'';
                       localStorage.setItem(key1, value1);
                       localStorage.setItem(key2, value2);
                       localStorage.setItem(key3, value3);
			    	   window.location.href="index.html";
			    },
			    //请求失败后的回调
			    error: function(data){
				       var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				       $('#registerCode .error_msg').empty();
			           $('#registerCode .error_msg').append(tmp);
			           $("#registerCode.error_msg").show().fadeOut(3500);   
			           $(".content_register").hide();
				  	   $(".footer").hide();
				  	   $("#registerCode").show();
				  	   $(".input_code input[name=phone]").val(account);    
			    }
		      }); 
            }
        e.preventDefault();
    }); 

// 重新获得验证码
    $('.input_code .lyouge').click(function(e){ 
       var phone = $.trim($('.input_code input[name=phone]').val());
       	 $.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/activationCode',// 验证文件			    
			    data: {'mobile': phone},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  // alert(JSON.stringify(data));
			    	  // window.location.href="index.html";
			    },
			    //请求失败后的回调
			    error: function(data){
				       var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				       $('#registerCode .error_msg').empty();
			           $('#registerCode .error_msg').append(tmp);
			           $("#registerCode.error_msg").show().fadeOut(3500);   
			           $(".content_register").hide();
				  	   $(".footer").hide();
				  	   $("#registerCode").show();
				  	   $(".input_code input[name=phone]").val(account);    
			    }
		      }); 
        e.preventDefault();
    }); 


 });

