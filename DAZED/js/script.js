$(document).ready(function(){
    
// 1. 배너(자동)
// $('.move_box').animate({
//     left:-680
// },2000,'linear',function(){
//     $('.img_box').first().appendTo('.move_box');
//     $('.move_box').css({
//         left:0
//     })
// });
auto_ani()

// 자동, 반복 일정 시간마다 호출되는 시간함수 사용
setInterval(function(){
    auto_ani()
    // $('.move_box').animate({
    //     left:-680
    // },4000,'linear',function(){
    //     $('.img_box').first().appendTo('.move_box');
    //     $('.move_box').css({
    //         left:0
    //     })
    // });
},4000)
// !) setInterval은 일정 시간 이후에 재생되기 때문에
// 기본값이 또 들어가야 지연없이 바로 실행됨
// 이런 경우 함수로 엮어주면 편함

// linear => 가속도 일정하게
// swing => 기본값 가속도
// => 기본 플러그인으로 사용가능
// easeOutBounce => 공이 튀는듯한 효과

function auto_ani(){
    $('.move_box').animate({
        left:-680
    },4000,'linear',function(){
        $('.img_box').first().appendTo('.move_box');
        $('.move_box').css({
            left:0
        })
    });
}
// 시간은 애니메이트와 셋인터벌이 동일하게 들어가야지만 안멈춤!!


// 2. main_header의 스크롤 반응
// => 스크롤을 내리면 올라가고 스크롤을 올리면 내려오고
// 스크롤 방향 확인
let sct_before=0;
$(window).scroll(function(){
    let sct_after=$(this).scrollTop();
    if(sct_before<sct_after){
        console.log('내림')
        // $('.main_header').css({
        //     top:-105
        //     // => 시간값 없음
        //     // => 스타일에서 트렌지션값 추가 필요함
        // })

        // $('.main_header').addClass('on',500);

        $('.main_header').stop().animate({
            top:-105
        },500);
        
        sct_before=sct_after;
    }else if(sct_before>sct_after){
        console.log('올림')
        // $('.main_header').css({
            //     top:0
            //     // => 시간값 없음
            //     // => 스타일에서 트렌지션값 추가 필요함
            // })

        // $('.main_header').removeClass('on',500);

        $('.main_header').stop().animate({
            top:0
        },500);
        // => animate는 지정 시간 동안에는 삭제, 수정, 정지 안됨
        // => stop을 중간에 넣어주면 이런 현상이 줄어듬

        sct_before=sct_after;
    }
})

// 3. 서브메뉴 영역
$('.top_menu').hover(function(){
    // 마우스를 올렸을 때
    $('.sub_menu',this).fadeIn(0).addClass('on_height',500);
},function(){
    // 마우스가 나왔을 때
    $('.sub_menu',this).fadeOut(200).removeClass('on_height',500);
});

// 4. 검색창
// => 검색창 클릭하면 위에서 박스가 내려옴
$('.search_box').click(function(){
    $('.search_wrap').stop().animate({
        top:0
    })
})

// 4-1. close_but를 클릭하면 search_box가 다시 위로 올라감

// 5. 숨김메뉴(토글 작업)
// => 마우스를 올렸을 때
$('.toggle_menu').on({
    mouseenter:function(){
        $('.toggle_box').stop().animate({
            right:0
        })
    },
    mouseleave:function(){}
})

// 어디에 마우스리브 기능을 넣어야 하는지 확인















}) /* end */