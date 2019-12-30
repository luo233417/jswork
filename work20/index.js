$('#fold>ul>li:frist').find('.wrap').css({
    display:'block'
});
$('#fold>ul>li').click(function (){
    $(this).siblings('li').find('.wrap').css({
        diapay: 'none'
    });
    $(this).find('.wrap').css({
        dispaly: 'block'
    });
});