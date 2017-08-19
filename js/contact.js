/**
 * Created by lishuang on 2017-08-11.
 */
$(document).ready(function () {
    //先循环遍历一下
    $('#contact-form .form-control').each(function () {

        if ($.trim($(this).val()) == '') {
            $(this).removeClass('input-filled');
        } else {
            $(this).addClass('input-filled');
        }
    });
//再有触发事件
    $('#contact-form .form-control').on('blur', function () {

        if ($.trim($(this).val()) == '') {
            $(this).removeClass('input-filled');
        } else {
            $(this).addClass('input-filled');
        }
    });


    $('#contact-form .form-control').on('focus',function(){
        $(this).parent('.controls').find('.error-message').fadeOut(300);
    });


});
