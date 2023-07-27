$(document).ready(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(this).scrollTop();
        //스크롤 하면 메뉴 보임
        if (currentScrollTop > 100) {
            $('#menu').addClass('fixed');
            $('#menu li i').addClass('txtch');
            $('.menu_trigger span').addClass('spanch');                 
            $('.show').show();
            $('#menu img').show();
        } else {
            $('#menu').removeClass('fixed');
            $('#menu li i').removeClass('txtch');
            $('.menu_trigger span').removeClass('spanch');
            $('.show').hide();
            $('#menu img').hide();
        }

        //스크롤 하면 텍스트 보임
        var banner = $('#banner').offset().top;
        //첫섹션 나타남, 배너 사라짐
        if(0 < currentScrollTop < banner-700){
            $('.inner p').css("transform","translateX(0px)").css("opacity","1");
            $('.out img').css("transform","translateX(0px)").css("opacity","1");
            $('.pbox p').css("transform","translateY(0px)").css("opacity","1");

            $('#banner p').css('transform', 'translateY(100px)').css('opacity','0')
        }
        //첫섹션 사라짐
        if(currentScrollTop > banner-400){
            $('.inner p').css("transform","translateX(-100px)").css("opacity","0");
            $('.out img').css("transform","translateX(50px)").css("opacity","0");
            $('.pbox p').css("transform","translateY(100px)").css("opacity","0");
        }
        //배너 나타남, 첫섹션과 두번째 섹션 사라짐
        if (currentScrollTop > banner-700) {
            $('.inner p').css("transform","translateX(-100px)").css("opacity","0");
            $('.out img').css("transform","translateX(50px)").css("opacity","0");

            $('#banner p').css('transform', 'translateY(0px)').css('opacity','1')

            $('.asitwop p').css('transform', 'translateX(-100px)').css('opacity','0');
            $('.asitwoimg img').css('transform', 'translateY(100px)').css('opacity','0');
            $('#artithr p').css('transform', 'translateX(300px)').css('opacity','0');
            $('#artifour p').css('transform', 'translateX(300px)').css('opacity','0');
        } 

         var sectiontwo = $('#sewraptwo').offset().top;
        //두번째 섹션 나타남
        if (currentScrollTop > sectiontwo-700) {
            $('.asitwop p').css('transform', 'translateX(0px)').css('opacity','1');
            $('.asitwoimg img').css('transform', 'translateY(0px)').css('opacity','1');
            $('#artithr p').css('transform', 'translateX(0px)').css('opacity','1');
            $('#artifour p').css('transform', 'translateX(0px)').css('opacity','1');
        } 
        //배너 사라짐
        if(currentScrollTop > sectiontwo-300){
            $('#banner p').css('transform', 'translateY(100px)').css('opacity','0')
        }

        var footer = $('#bannertwo').offset().top;
        if (currentScrollTop > footer-250) {
            $('.asitwop p').css('transform', 'translateX(-100px)').css('opacity','0');
            $('.asitwoimg img').css('transform', 'translateY(100px)').css('opacity','0');
            $('#artithr p').css('transform', 'translateX(300px)').css('opacity','0');
            $('#artifour p').css('transform', 'translateX(300px)').css('opacity','0');
        } 
    });

    //첫 방문 시 보임
        $('#slider p').css("transform","translateY(0px)").css("opacity","1");
        $('.inner p').css("transform","translateX(0px)").css("opacity","1");
        $('.out img').css("transform","translateX(0px)").css("opacity","1");
        $('.imgbox img').css("transform","translateY(0px)").css("opacity","1");
        $('.pbox p').css("transform","translateY(0px)").css("opacity","1");


    //메뉴 바 누르면 사이드 메뉴 보임
    $('.menu_trigger').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('#mynav').toggleClass('right');
            $('.menu_trigger span').toggleClass('spanch');
    })


    //슬라이드 이미지 반응형
    if (window.matchMedia("(min-width: 1500px)").matches) {

        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', '-25%');
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-25%' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });

    }else if (window.matchMedia("(min-width:1300px) and (max-width:1499px)").matches) {

        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', '-24%');
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-24%' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });

    } else if(window.matchMedia("(min-width:980px) and (max-width:1299px)").matches) {

        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', '-32%');
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-32%' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });

    }else if(window.matchMedia("(min-width:600px) and (max-width:979px)").matches) {

        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', '-50%');
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-50%' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });

    }else{
        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', '-100%');
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });
    }


    //hover 화살표 이미지 변경
    $('#artione').hover(function(){
        $('.arrow').attr('src','img/main/arrowwhite.png');
    }, function(){
        $('.arrow').attr('src','img/main/arrow.png');
    });


    //hover 텍스트 밑 라인 움직임 반응형
    if (window.matchMedia("(min-width:1500px)").matches) {
        $('#artithr').hover(function () {
            $(this).children('.line').stop().animate({ width: '27.5%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

        $('#artifour').hover(function () {
            $(this).children('.line').stop().animate({ width: '17%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

    } else if(window.matchMedia("(min-width:1300px) and (max-width:1499px)").matches) {
        $('#artithr').hover(function () {
            $(this).children('.line').stop().animate({ width: '38%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

        $('#artifour').hover(function () {
            $(this).children('.line').stop().animate({ width: '24%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

    }else if(window.matchMedia("(min-width:980px) and (max-width:1299px)").matches) {
        $('#artithr').hover(function () {
            $(this).children('.line').stop().animate({ width: '57%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

        $('#artifour').hover(function () {
            $(this).children('.line').stop().animate({ width: '36%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

    }else if(window.matchMedia("(min-width:768px) and (max-width:979px)").matches) {
        $('#artithr').hover(function () {
            $(this).children('.line').stop().animate({ width: '76%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

        $('#artifour').hover(function () {
            $(this).children('.line').stop().animate({ width: '48%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

    }else if(window.matchMedia("(min-width:501px) and (max-width:767px)").matches) {
        $('#artithr').hover(function () {
            $(this).children('.line').stop().animate({ width: '33%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

        $('#artifour').hover(function () {
            $(this).children('.line').stop().animate({ width: '21%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

    }else{
        $('#artithr').hover(function () {
            $(this).children('.line').stop().animate({ width: '51%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });

        $('#artifour').hover(function () {
            $(this).children('.line').stop().animate({ width: '32%' }, 1000);
        }, function () {
            $(this).children('.line').stop().stop().animate({ width: '0%' }, 1000);
        });
    }

});