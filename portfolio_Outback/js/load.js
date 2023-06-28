/* index 제외 나머지 페이지 Header/Footer 모듈 */
$(".header").load("./module/header.html", function(){
    $('.menuicon').on('click', function(){
        // 슬라이딩으로 보이게 하기
        $('.mobile_gnb').show().animate({left:0});
    });
});


$(".footer").load("./module/footer.html");

/* nav module */
$('.mobile_gnb').load("./module/nav.html", function(){
    /* gnb 아코디언 */
    $('.depth_menu .sub_title').click(function(){
        if($(this).children('span').hasClass('active')){
            $(this).siblings('.sub_menu').slideUp();
            $(this).children('span').removeClass('active');
        }else {
            $('.sub_menu').stop().slideUp();
            $('.sub_title').children('span').removeClass('active');
            $(this).siblings('.sub_menu').slideToggle();
            $(this).children('span').addClass('active');
        }
    });
    // 사이드메뉴 다시 사라지게 하기
    $('.mobile_gnb article>img').on('click', function(){
        $('.mobile_gnb').animate({left:'-250px'}, {duration:500}, function(){
        $('.mobile_gnb').hide();}); 
    });
});

/* Bottom MENU */
$('.bottom_menu').load('./module/bottom_menu.html');

/* 화살표 클릭시 뒤로 가기 */
$('.content_title article').click(function(){
    history.go(-1);
});

/* a 막기 */
$('a[href="#"]').on('click',function(e){
    // 기본 기능 제거
    e.preventDefault();
});