
$(function () {
    $('#email').leanModal({top: 200, closeButton: ".modal_close"});
    $('#mc').leanModal({top: 200, closeButton: ".modal_close"});
    $('#ms').leanModal({top: 200, closeButton: ".modal_close"});
    $('#mg').leanModal({top: 200, closeButton: ".modal_close"});
    $('#st').leanModal({top: 200, closeButton: ".modal_close"});
    $('#pc').leanModal({top: 200, closeButton: ".modal_close"});
    $('#ps').leanModal({top: 200, closeButton: ".modal_close"});
    $('#pt').leanModal({top: 200, closeButton: ".modal_close"});
    $('#ptt').leanModal({top: 200, closeButton: ".modal_close"});
    $('#lt').leanModal({top: 200, closeButton: ".modal_close"});
    $('#np').leanModal({top: 200, closeButton: ".modal_close"});
    $('#cs').leanModal({top: 200, closeButton: ".modal_close"});
    $('#phone').leanModal({top: 200, closeButton: ".modal_close"});
    $('#password').leanModal({top: 200, closeButton: ".modal_close"});
    $('#micro').leanModal({top: 200, closeButton: ".modal_close"});
    $('#wb').leanModal({top: 200, closeButton: ".modal_close"});
    $('#ten').leanModal({top: 200, closeButton: ".modal_close"});
    $('#phchange').leanModal({top: 200, closeButton: ".modal_close"});
    $('#pwchange').leanModal({top: 200, closeButton: ".modal_close"});
    $('#mailchange').leanModal({top: 200, closeButton: ".modal_close"});
    $('#ubmicro').leanModal({top: 200, closeButton: ".modal_close"});
    $('#ubwb').leanModal({top: 200, closeButton: ".modal_close"});
    $('#ubten').leanModal({top: 200, closeButton: ".modal_close"});
    $('#tt').leanModal({top: 200, closeButton: ".modal_close"});

    <!-- 绑定邮箱-->
    $("#sendmail").click(function(){
        $('#email').hideModal();
        $('#mc').showModal();
    });
    $("#complete").click(function(){
        $('#mc').hideModal();
        $('#ms').showModal();
    });


    <!-- 绑定手机-->
        $("#sendphone").click(function(){
            $('#phone').hideModal();
            $('#pc').showModal();
        });
        $("#phcomplete").click(function(){
            $('#pc').hideModal();
            $('#ps').showModal();
        });

    $("#testbtn").click(function(){
        var modal_id = $('.modal_click').attr('id');
         if(modal_id == 'mailchange'){
            $("#mg").showModal();
            $("#setchange").click(function(){
                $('#mg').hideModal();
                $('#st').showModal();
            });
            $("#sendtest").click(function(){
                $('#st').hideModal();
                $('#email').showModal();
            });
            $("#sendmail").click(function(){
                $('#email').hideModal();
                $('#mc').showModal();
            });
            $("#complete").click(function(){
                $('#mc').hideModal();
                $('#ms').showModal();
            });
        }else if(modal_id == 'phchange'){
            $("#pt").showModal();
            $("#changept").click(function(){
                $('#pt').hideModal();
                $('#ptt').showModal();
            });
            $("#sendpt").click(function(){
                $('#ptt').hideModal();
                $('#phone').showModal();
            });
            $("#sendphone").click(function(){
                $('#phone').hideModal();
                $('#pc').showModal();
            });
            $("#phcomplete").click(function(){
                $('#pc').hideModal();
                $('#ps').showModal();
            });
        }else if(modal_id == 'pwchange'){
            $("#lt").showModal();
            $("#sendpd").click(function(){
                $('#lt').hideModal();
                $('#np').showModal();
            });
            $("#setpd").click(function(){
                $('#np').hideModal();
                $('#cs').showModal();
            });
        }
    });
});
