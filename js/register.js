/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-08 09:55:08
 * @version $Id$
 */
 $(document).ready(function() {
   
   $('.btn_login').click(function(e) {     
	    //点击登陆  		     
		var name = $.trim($('input[name=name]').val());  
		var account = $.trim($('input[name=account]').val()); 
		var passwd = $.trim($('input[name=password]').val()); 
		var phone = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|14[57]\d{8}|15\d{9}|18\d{9}$/ ;
		var mail =/^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/;

		 alert(name); 
		 alert(account.length); 
		 alert(passwd.length); 
		if (name == '') {   
			$(".error_msg").html('请填写昵称');  
			$(".error_msg").show().fadeOut(3500);
			$('input[name=name]').focus();   
				return false;
		}else if (account == '') {  
			$(".error_msg").html('请填写邮箱或手机号');  
			$(".error_msg").show().fadeOut(3500);  
			$('input[name=password]').focus(); 
			    return false; 
		}else if (passwd == '') {  
			$(".error_msg").html('请填写密码');  
			$(".error_msg").show().fadeOut(3500);  
			$('input[name=password]').focus(); 
			    return false; 
		}else if(!passwd == ''&& passwd.length<6){	
			$(".error_msg").html('密码至少需要6个字符'); 
	        $(".error_msg").show().fadeOut(3500);  
	            return false;
        }else if(!(account == '') && (!account.match(phone) || !account.match(mail))){   
            if((account.match(phone)&& !account.match(mail))||(!account.match(phone)&&account.match(mail))){
            	$(".error_msg").html('手机号正确'); 
                $.ajax({			    
			    type: 'POST',// 请求发送方式			    
			    url: 'http://120.24.14.108:3000/api/v1/signup',// 验证文件			    
			    data: {'name': name, 'mobile': account,'pass': passwd},// 用户输入的帐号密码			    
			    async: true,// 异步，不写默认为True
			    //请求成功后的回调
			    success: function(data){
			    	  alert(JSON.stringify(data));
			          window.location.href='login.html?name='+name;
			    },
			    //请求失败后的回调
			    error: function(data){
			    	  alert(JSON.stringify(data));
				      var tmp='<span>'+data.responseJSON.errmsg+'</span>';
				      $('.error_msg').empty();
			          $('.error_msg').append(tmp);
			          $(".error_msg").show().fadeOut(3500);   
			          window.location.href="#";      
			    }
		      });            
            }else if(!account.match(phone)&& !account.match(mail)){
            	$(".error_msg").html('请输入正确的邮箱或手机号'); 
		        $(".error_msg").show().fadeOut(3500); 
		          return false; 
            }                               
        }
		 e.preventDefault();
    }); 

 });

