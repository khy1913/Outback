
$('.content_title h2').click(function(){
    $('.academy_sub_menu').stop().slideToggle();

});


/* a 막기 */
$('a[href="#"]').on('click',function(e){
    // 기본 기능 제거
    e.preventDefault();
});
