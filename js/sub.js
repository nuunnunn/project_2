$(function () {

    //메뉴 바 누르면 사이드 메뉴 보임
    $('.menu_trigger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#mynav').toggleClass('right');
        $('.menu_trigger span').toggleClass('spanch');
    });


    //slide img
    if (window.matchMedia("(min-width:1301px)").matches) {

        $('#slwrap .prev').click(function () {
            $('.slideimg li:last').prependTo('.slideimg');
            $('.slideimg').css('margin-left', '-53%');
            $('.slideimg').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap .next').click(function () {
            $('.slideimg').stop().animate({ marginLeft: '-53%' }, 800, function () {
                $('.slideimg li:first').appendTo('.slideimg');
                $('.slideimg').css({ marginLeft: 0 });
            });
        });

        //slide img2
        $('#slwrap2 .prev').click(function () {
            $('.slideimg2 li:last').prependTo('.slideimg2');
            $('.slideimg2').css('margin-left', '-52.5%');
            $('.slideimg2').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap2 .next').click(function () {
            $('.slideimg2').stop().animate({ marginLeft: '-52.5%' }, 800, function () {
                $('.slideimg2 li:first').appendTo('.slideimg2');
                $('.slideimg2').css({ marginLeft: 0 });
            });
        });

        //slide img3
        $('#slwrap3 .prev').click(function () {
            $('.slideimg3 li:last').prependTo('.slideimg3');
            $('.slideimg3').css('margin-left', '-52.5%');
            $('.slideimg3').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap3 .next').click(function () {
            $('.slideimg3').stop().animate({ marginLeft: '-52.5%' }, 800, function () {
                $('.slideimg3 li:first').appendTo('.slideimg3');
                $('.slideimg3').css({ marginLeft: 0 });
            });
        });


        //objslide img
        $('#candleSl .objprev').click(function () {
            $('.candleSlImg li:last').prependTo('.candleSlImg');
            $('.candleSlImg').css('margin-left', '-100%');
            $('.candleSlImg').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#candleSl .objnext').click(function () {
            $('.candleSlImg').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.candleSlImg li:first').appendTo('.candleSlImg');
                $('.candleSlImg').css({ marginLeft: 0 });
            });
        });

        //objslide img2
        $('#candleSl2 .objprev').click(function () {
            $('.candleSlImg2 li:last').prependTo('.candleSlImg2');
            $('.candleSlImg2').css('margin-left', '-100%');
            $('.candleSlImg2').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#candleSl2 .objnext').click(function () {
            $('.candleSlImg2').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.candleSlImg2 li:first').appendTo('.candleSlImg2');
                $('.candleSlImg2').css({ marginLeft: 0 });
            });
        });


        //slide img4
        $('#slwrap4 .prev').click(function () {
            $('.slideimg4 li:last').prependTo('.slideimg4');
            $('.slideimg4').css('margin-left', '-35%');
            $('.slideimg4').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap4 .next').click(function () {
            $('.slideimg4').stop().animate({ marginLeft: '-35%' }, 800, function () {
                $('.slideimg4 li:first').appendTo('.slideimg4');
                $('.slideimg4').css({ marginLeft: 0 });
            });
        });

        //slide img5
        $('#slwrap5 .prev').click(function () {
            $('.slideimg5 li:last').prependTo('.slideimg5');
            $('.slideimg5').css('margin-left', '-52.5%');
            $('.slideimg5').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap5 .next').click(function () {
            $('.slideimg5').stop().animate({ marginLeft: '-52.5%' }, 800, function () {
                $('.slideimg5 li:first').appendTo('.slideimg5');
                $('.slideimg5').css({ marginLeft: 0 });
            });
        });

        //slide img6
        $('#slwrap6 .prev').click(function () {
            $('.slideimg6 li:last').prependTo('.slideimg6');
            $('.slideimg6').css('margin-left', '-52.5%');
            $('.slideimg6').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap6 .next').click(function () {
            $('.slideimg6').stop().animate({ marginLeft: '-52.5%' }, 800, function () {
                $('.slideimg6 li:first').appendTo('.slideimg6');
                $('.slideimg6').css({ marginLeft: 0 });
            });
        });

        //slide img7
        $('#slwrap7 .prev').click(function () {
            $('.slideimg7 li:last').prependTo('.slideimg7');
            $('.slideimg7').css('margin-left', '-52.5%');
            $('.slideimg7').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap7 .next').click(function () {
            $('.slideimg7').stop().animate({ marginLeft: '-52.5%' }, 800, function () {
                $('.slideimg7 li:first').appendTo('.slideimg7');
                $('.slideimg7').css({ marginLeft: 0 });
            });
        });

        //slide img8
        $('#slwrap8 .prev').click(function () {
            $('.slideimg8 li:last').prependTo('.slideimg8');
            $('.slideimg8').css('margin-left', '-35%');
            $('.slideimg8').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap8 .next').click(function () {
            $('.slideimg8').stop().animate({ marginLeft: '-35%' }, 800, function () {
                $('.slideimg8 li:first').appendTo('.slideimg8');
                $('.slideimg8').css({ marginLeft: 0 });
            });
        });

        //slide img9
        $('#slwrap9 .prev').click(function () {
            $('.slideimg9 li:last').prependTo('.slideimg9');
            $('.slideimg9').css('margin-left', '-52.5%');
            $('.slideimg9').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap9 .next').click(function () {
            $('.slideimg9').stop().animate({ marginLeft: '-52.5%' }, 800, function () {
                $('.slideimg9 li:first').appendTo('.slideimg9');
                $('.slideimg9').css({ marginLeft: 0 });
            });
        });
    
    }//slide img 반응형
    else if(window.matchMedia("(min-width:700px) and (max-width:1300px)").matches)
     {
    
        $('#slwrap .prev').click(function () {
            $('.slideimg li:last').prependTo('.slideimg');
            $('.slideimg').css('margin-left', '-100%');
            $('.slideimg').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap .next').click(function () {
            $('.slideimg').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg li:first').appendTo('.slideimg');
                $('.slideimg').css({ marginLeft: 0 });
            });
        });

        //slide img2
        $('#slwrap2 .prev').click(function () {
            $('.slideimg2 li:last').prependTo('.slideimg2');
            $('.slideimg2').css('margin-left', '-100%');
            $('.slideimg2').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap2 .next').click(function () {
            $('.slideimg2').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg2 li:first').appendTo('.slideimg2');
                $('.slideimg2').css({ marginLeft: 0 });
            });
        });

        //slide img3
        $('#slwrap3 .prev').click(function () {
            $('.slideimg3 li:last').prependTo('.slideimg3');
            $('.slideimg3').css('margin-left', '-100%');
            $('.slideimg3').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap3 .next').click(function () {
            $('.slideimg3').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg3 li:first').appendTo('.slideimg3');
                $('.slideimg3').css({ marginLeft: 0 });
            });
        });

        

        //objslide img
        $('#candleSl .objprev').click(function () {
            $('.candleSlImg li:last').prependTo('.candleSlImg');
            $('.candleSlImg').css('margin-left', '-100%');
            $('.candleSlImg').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#candleSl .objnext').click(function () {
            $('.candleSlImg').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.candleSlImg li:first').appendTo('.candleSlImg');
                $('.candleSlImg').css({ marginLeft: 0 });
            });
        });

        //objslide img2
        $('#candleSl2 .objprev').click(function () {
            $('.candleSlImg2 li:last').prependTo('.candleSlImg2');
            $('.candleSlImg2').css('margin-left', '-100%');
            $('.candleSlImg2').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#candleSl2 .objnext').click(function () {
            $('.candleSlImg2').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.candleSlImg2 li:first').appendTo('.candleSlImg2');
                $('.candleSlImg2').css({ marginLeft: 0 });
            });
        });


        //slide img4
        $('#slwrap4 .prev').click(function () {
            $('.slideimg4 li:last').prependTo('.slideimg4');
            $('.slideimg4').css('margin-left', '-50.5%');
            $('.slideimg4').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap4 .next').click(function () {
            $('.slideimg4').stop().animate({ marginLeft: '-50.5%' }, 800, function () {
                $('.slideimg4 li:first').appendTo('.slideimg4');
                $('.slideimg4').css({ marginLeft: 0 });
            });
        });

        //slide img5
        $('#slwrap5 .prev').click(function () {
            $('.slideimg5 li:last').prependTo('.slideimg5');
            $('.slideimg5').css('margin-left', '-100%');
            $('.slideimg5').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap5 .next').click(function () {
            $('.slideimg5').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg5 li:first').appendTo('.slideimg5');
                $('.slideimg5').css({ marginLeft: 0 });
            });
        });

        //slide img6
        $('#slwrap6 .prev').click(function () {
            $('.slideimg6 li:last').prependTo('.slideimg6');
            $('.slideimg6').css('margin-left', '-100%');
            $('.slideimg6').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap6 .next').click(function () {
            $('.slideimg6').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg6 li:first').appendTo('.slideimg6');
                $('.slideimg6').css({ marginLeft: 0 });
            });
        });

        //slide img7
        $('#slwrap7 .prev').click(function () {
            $('.slideimg7 li:last').prependTo('.slideimg7');
            $('.slideimg7').css('margin-left', '-100%');
            $('.slideimg7').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap7 .next').click(function () {
            $('.slideimg7').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg7 li:first').appendTo('.slideimg7');
                $('.slideimg7').css({ marginLeft: 0 });
            });
        });

        //slide img8
        $('#slwrap8 .prev').click(function () {
            $('.slideimg8 li:last').prependTo('.slideimg8');
            $('.slideimg8').css('margin-left', '-51.5%');
            $('.slideimg8').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap8 .next').click(function () {
            $('.slideimg8').stop().animate({ marginLeft: '-51.5%' }, 800, function () {
                $('.slideimg8 li:first').appendTo('.slideimg8');
                $('.slideimg8').css({ marginLeft: 0 });
            });
        });

        //slide img9
        $('#slwrap9 .prev').click(function () {
            $('.slideimg9 li:last').prependTo('.slideimg9');
            $('.slideimg9').css('margin-left', '-102%');
            $('.slideimg9').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap9 .next').click(function () {
            $('.slideimg9').stop().animate({ marginLeft: '-102%' }, 800, function () {
                $('.slideimg9 li:first').appendTo('.slideimg9');
                $('.slideimg9').css({ marginLeft: 0 });
            });
        });

    }//slide img 반응형
    else
    //  (window.matchMedia("(max-width:1300px)").matches) 
     {
    
        $('#slwrap .prev').click(function () {
            $('.slideimg li:last').prependTo('.slideimg');
            $('.slideimg').css('margin-left', '-100%');
            $('.slideimg').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap .next').click(function () {
            $('.slideimg').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg li:first').appendTo('.slideimg');
                $('.slideimg').css({ marginLeft: 0 });
            });
        });

        //slide img2
        $('#slwrap2 .prev').click(function () {
            $('.slideimg2 li:last').prependTo('.slideimg2');
            $('.slideimg2').css('margin-left', '-100%');
            $('.slideimg2').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap2 .next').click(function () {
            $('.slideimg2').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg2 li:first').appendTo('.slideimg2');
                $('.slideimg2').css({ marginLeft: 0 });
            });
        });

        //slide img3
        $('#slwrap3 .prev').click(function () {
            $('.slideimg3 li:last').prependTo('.slideimg3');
            $('.slideimg3').css('margin-left', '-100%');
            $('.slideimg3').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap3 .next').click(function () {
            $('.slideimg3').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg3 li:first').appendTo('.slideimg3');
                $('.slideimg3').css({ marginLeft: 0 });
            });
        });

        

        //objslide img
        $('#candleSl .objprev').click(function () {
            $('.candleSlImg li:last').prependTo('.candleSlImg');
            $('.candleSlImg').css('margin-left', '-100%');
            $('.candleSlImg').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#candleSl .objnext').click(function () {
            $('.candleSlImg').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.candleSlImg li:first').appendTo('.candleSlImg');
                $('.candleSlImg').css({ marginLeft: 0 });
            });
        });

        //objslide img2
        $('#candleSl2 .objprev').click(function () {
            $('.candleSlImg2 li:last').prependTo('.candleSlImg2');
            $('.candleSlImg2').css('margin-left', '-100%');
            $('.candleSlImg2').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#candleSl2 .objnext').click(function () {
            $('.candleSlImg2').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.candleSlImg2 li:first').appendTo('.candleSlImg2');
                $('.candleSlImg2').css({ marginLeft: 0 });
            });
        });


        //slide img4
        $('#slwrap4 .prev').click(function () {
            $('.slideimg4 li:last').prependTo('.slideimg4');
            $('.slideimg4').css('margin-left', '-100%');
            $('.slideimg4').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap4 .next').click(function () {
            $('.slideimg4').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg4 li:first').appendTo('.slideimg4');
                $('.slideimg4').css({ marginLeft: 0 });
            });
        });

        //slide img5
        $('#slwrap5 .prev').click(function () {
            $('.slideimg5 li:last').prependTo('.slideimg5');
            $('.slideimg5').css('margin-left', '-100%');
            $('.slideimg5').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap5 .next').click(function () {
            $('.slideimg5').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg5 li:first').appendTo('.slideimg5');
                $('.slideimg5').css({ marginLeft: 0 });
            });
        });

        //slide img6
        $('#slwrap6 .prev').click(function () {
            $('.slideimg6 li:last').prependTo('.slideimg6');
            $('.slideimg6').css('margin-left', '-100%');
            $('.slideimg6').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap6 .next').click(function () {
            $('.slideimg6').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg6 li:first').appendTo('.slideimg6');
                $('.slideimg6').css({ marginLeft: 0 });
            });
        });

        //slide img7
        $('#slwrap7 .prev').click(function () {
            $('.slideimg7 li:last').prependTo('.slideimg7');
            $('.slideimg7').css('margin-left', '-100%');
            $('.slideimg7').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap7 .next').click(function () {
            $('.slideimg7').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg7 li:first').appendTo('.slideimg7');
                $('.slideimg7').css({ marginLeft: 0 });
            });
        });

        //slide img8
        $('#slwrap8 .prev').click(function () {
            $('.slideimg8 li:last').prependTo('.slideimg8');
            $('.slideimg8').css('margin-left', '-100%');
            $('.slideimg8').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap8 .next').click(function () {
            $('.slideimg8').stop().animate({ marginLeft: '-100%' }, 800, function () {
                $('.slideimg8 li:first').appendTo('.slideimg8');
                $('.slideimg8').css({ marginLeft: 0 });
            });
        });

        //slide img9
        $('#slwrap9 .prev').click(function () {
            $('.slideimg9 li:last').prependTo('.slideimg9');
            $('.slideimg9').css('margin-left', '-102%');
            $('.slideimg9').stop().animate({ marginLeft: 0 }, 800);
        });

        $('#slwrap9 .next').click(function () {
            $('.slideimg9').stop().animate({ marginLeft: '-102%' }, 800, function () {
                $('.slideimg9 li:first').appendTo('.slideimg9');
                $('.slideimg9').css({ marginLeft: 0 });
            });
        });

    }    


    $('#butn').click(function () {
        $('#innerwrap').fadeIn('slow');
        $('#innerwrap2').hide();
    });

    $('#butn2').click(function () {
        $('#innerwrap2').fadeIn('slow');
        $('#innerwrap').hide();
    });


});