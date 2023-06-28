// 사이드메뉴 나타나게 하기
$('.menuicon').on('click', function(){
    // 슬라이딩으로 보이게 하기
    $('.mobile_gnb').stop().show().animate({left:0});  
});
// 사이드메뉴 다시 사라지게 하기
$('.mobile_gnb article>img').on('click', function(){
    $('.mobile_gnb').animate({left:'-250px'}, {duration:300}, function(){
    $('.mobile_gnb').hide();}); 
});


/* 스와이퍼 생성 */
var swiper = new Swiper('.swiper-container',{
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 1,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '10.333333%',
    /* c. 슬라이드 반복 여부 */
    loop: true,
    /* d. 그룹수 맞추기 => 안 맞을 경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: true,
    
    // 페이지, 넘버링
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        // bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크 여부
        clickable: true,
    },
}); 

