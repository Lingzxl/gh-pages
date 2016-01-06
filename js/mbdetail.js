/**
 * Created by admin on 2015/12/30.
 */

/*手机端音乐标签页选择标签*/
$(function () {
    $('#tt').leanModal({top: 200, closeButton: ".modal_close"});
});
$(document).ready(function( ) {
    var i=0;
   $(".tball a").click(function(){
       i+=1;
       var ahtml=$(this).html();
       $(".tbshow").append('<a>'+ahtml+'</a>');
       if(i>=4){
           $("#tt").showModal();
           $(".tbshow a").eq(3).remove();
       }
       var ah=$(".tbshow a");
         ah.click(function(){
             $(this).remove();
       })
   });
});
