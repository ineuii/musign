// ------------------nav bar---------------

$('.gnb li a').mouseenter(function(){
    var bar = $(this).position().left; 
    // positionleft란 뜻은 a태그의 왼쪽 띄워진 공간(margin)값을 계산해라는 뜻
    //console.log(bar)
    var widNum = $(this).width();
    console.log(widNum)
    $('.bar').animate({
        'left':bar + 'px',
        'width':widNum + 'px',
        'opacity':1
    },300)
});

$('.gnb').mouseleave(function(){
    $('.bar').animate({
        'left':0,
        'width':0,
        'opacity':1
    },10)
})


// ------------------화면전체에 "scrolla"를 적용---------------

$('.animate').scrolla({
    // default
    mobile: true, // 모바일버전시 활성화
    once: false, // 스크롤시 한번만 실행 or 영역이 보일때마다 실행
});


// ------------------menuOpen 열기---------------
//$('..menuOpen button.open').on('click',function(){});
$('.menuOpen button.open').click(function(){
    $('.menuOpen .menuWrap').addClass('on')
});
$('.menuWrap .close').click(function(){
    $('.menuOpen .menuWrap').removeClass('on')
})


// ------------------background colour 변경---------------
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    var offset = $(".service").offset().top - 500;
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
})