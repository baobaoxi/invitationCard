var loadingAnimate = function (w) {
    $('.loading-bar-act').animate({
        width: w
    }, 500, 'ease-out');
};
// 进页面先loading到50%，页面加载完毕加载到100%;
loadingAnimate('50%');
var animateFun2012 = function () {
    var imgWidth = $('.school-img-box img').width();
    var imgboxWidth = $('.school-img-box').width();
    $('.school-img-box img').css({
        left: (imgboxWidth - imgWidth) / 2
    });
};
var hidePre = function () {
    $(document).on('click', '.name-and', function () {
        $('#J_pre-page').addClass('pagehide');
        $('#J_main-photo-wrap').show();
        $('#J_2012').addClass('pageshow');
        setTimeout(function () {
            $('#J_pre-page').hide();
        }, 1500);
    });
};
var show2014 = function () {
    $('#J_2014 .biye-img-box').addClass('biye-act');
};
var hide2012 = function () {
    $(document).on('click', '.J_2012-click', function () {
        $('.cloud-wrap').addClass('pagehide');
        $('.school-img').addClass('pagehide');
        $('#J_2012').addClass('pagehide').removeClass('pageshow');
        $('.school-door').addClass('school-door-act');
        $('#J_2014').addClass('pageshow');
        setTimeout(function () {
            $('#J_2012').hide();
            show2014();
        }, 3000);
    });
};
var hide2014 = function () {
    $(document).on('click', '.J_2014-click', function () {
        $('#J_2014').addClass('pagehide');
        $('#J_2015-17').addClass('pageshow');
        setTimeout(function () {
            $('#J_2014').hide();
        }, 1500);
    });
};
var hide2015 = function () {
    $(document).on('click', '.J_2015-click', function () {
        $('#J_2015-17').addClass('pagehide');
        $('#J_2016').addClass('pageshow');
        setTimeout(function () {
            $('#J_2015-17').hide();
        }, 1500);
        $('#J_2016').addClass('certificate-active');
    });
};
var renderStar = function () {
    var starLenth = $('.star-bg img').length;
    $.each($('.star-bg img'), function (key, value) {
        var random1 = Math.random() * 100 + 1;
        var random2 = Math.random() * 100 + 1;
        if (key < starLenth / 2) {
            $($('.star-bg img')[key]).css({
                'top': random1 + '%',
                'left': random2 + '%'
            });
        }
        else {
            $($('.star-bg img')[key]).css({
                'top': random1 + '%',
                'right': random2 + '%'
            });
        }
    })
};

$(document).ready(function () {
    loadingAnimate('100%');
    setTimeout(function () {
        $('.loading-page').hide();
    }, 500);
    //整体上下滚动
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',

        speed: 500,
        onSlideChangeStart: function () {
            slideract();
        }
    });



    var photoAct = function () {
        var reClass = function (className1, className2) {
            setTimeout(function () {
                $(className1).removeClass(className2);
            }, 500);
        };
        var addClass = function (className1, className2) {
            setTimeout(function () {
                $(className1).addClass(className2);
            }, 500);
        };
        $('.photo-li .p8-box').width(20 * $(window).height() / 31);


    };
    var slideract = function () {
            // 学校
            var reClass = function (className1, className2) {
                setTimeout(function () {
                    $(className1).removeClass(className2);
                }, 500);
            };
            // 1 学校背景
            if (swiper.realIndex == 1) {
                reClass($('.biye-img-box'), 'biye-act');
                $('.school-wrap').addClass('school-wrap-act');

            }
            // 2 毕业照 & 学校门口婚纱照
            if (swiper.realIndex == 2) {
                $('.biye-img-box').addClass('biye-act');

                reClass($('#J_2016'), 'certificate-active');
            }
            // 3 结婚证
            if (swiper.realIndex == 3) {
                $('#J_2016').addClass('certificate-active');
            }
            // 4 婚纱照横滑
            if (swiper.realIndex == 4) {
                reClass($('#J_2016'), 'certificate-active');
                // 婚纱照部分滚动
                var swiper2 = new Swiper('#J_other-photo-wrap', {
                    paginationClickable: true,
                    speed: 1000,
                    effect: 'fade',
                    autoplay: 4000,
                    onSlideChangeStart: function () {
//                        photoAct();
						 //去掉前后的act状态class
						if ($('#J_other-photo-wrap .photo-li')[swiper2.realIndex + 1]) {
							reClass($('#J_other-photo-wrap .photo-li')[swiper2.realIndex + 1], 'photo-li-act' + (parseInt([swiper2.realIndex], 10) + 2));
						}
						if ($('#J_other-photo-wrap .photo-li')[swiper2.realIndex - 1]) {
							reClass($('#J_other-photo-wrap .photo-li')[swiper2.realIndex - 1], 'photo-li-act' + (parseInt([swiper2.realIndex], 10)));
						}
						//给当前photo加act状态的class
						$($('#J_other-photo-wrap .photo-li')[swiper2.realIndex]).addClass( 'photo-li-act' + (parseInt([swiper2.realIndex], 10) + 1));
                    }
                });
				$($('#J_other-photo-wrap .photo-li')[0]).addClass('photo-li-act1');
               
                //                $('#J_2016').removeClass('certificate-active');
            }
            // 5 bless
            if (swiper.realIndex == 5) {
                bless.blessSwiper();
            }
        }
        //    hidePre();
        //    hide2012();
        //    hide2014();
        //    hide2015();
        //    animateFun2012();
    bless.renderBless();

});