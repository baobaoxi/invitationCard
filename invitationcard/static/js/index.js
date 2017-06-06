var loadingAnimate = function (w) {
    $('.loading-bar-act').animate({
        width: w
    }, 500, 'ease-out');
};
// 进页面先loading到50%，页面加载完毕加载到100%;
loadingAnimate('50%');


$(document).ready(function () {
    loadingAnimate('100%');
    setTimeout(function () {
        $('.loading-page').hide();
    }, 500);
	var swiper2;
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
			if(swiper.realIndex == 0){
				reClass( $('.school-wrap'), 'school-wrap-act');
			}
            // 1 学校背景
            if (swiper.realIndex == 1) {
                reClass($('.biye-img-box'), 'biye-act');
                $('.school-wrap').addClass('school-wrap-act');

            }
            // 2 毕业照 & 学校门口婚纱照
            if (swiper.realIndex == 2) {
                $('.biye-img-box').addClass('biye-act');
                reClass($('#J_2016'), 'certificate-active');
				reClass($('.school-wrap'), 'school-wrap-act');
            }
            // 3 结婚证
            if (swiper.realIndex == 3) {
				reClass($('.biye-img-box'), 'biye-act');
                $('#J_2016').addClass('certificate-active');
            }
            // 4 婚纱照横滑
            if (swiper.realIndex == 4) {
                reClass($('#J_2016'), 'certificate-active');
                // 婚纱照部分滚动
				if(swiper2){
					return;
				}
               	swiper2 = new Swiper('#J_other-photo-wrap', {
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
    bless.renderBless();

});