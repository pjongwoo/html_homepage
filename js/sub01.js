$(function() {
    
    $('.box_detail').css("display","none");
    $('.box_detail').eq(0).css("display","block");
   
    $(".btn_box").on('click',function(e){
        e.preventDefault();
        var box_index = $(this).index() - 1;
        $('.box_detail').css("display","none");
        $('.box_detail').eq(box_index).css("display","block");
    });
    
});