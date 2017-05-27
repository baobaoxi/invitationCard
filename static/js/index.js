var blessData = [{
        name: '阿白',
        text: '百年好合'
    }, {
        name: '阿白',
        text: '百年好合'
    }, {
        name: '阿白',
        text: '百年好合'
    }, {
        name: '阿白',
        text: '百年好合'
    }, {
        name: '阿白',
        text: '百年好合'
    },

    {
        name: '阿白',
        text: '百年好合'
    },

    {
        name: '阿白',
        text: '百年好合'
    },

    {
        name: '阿白',
        text: '百年好合'
    },

    {
        name: '阿白',
        text: '百年好合'
    },

    {
        name: '阿白',
        text: '百年好合'
    },

    {
        name: '阿白',
        text: '百年好合'
    },

    {
        name: '阿白',
        text: '百年好合'
    },

];
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
var renderBless = function () {
    var tpl = '';
    $.each(blessData, function (key, value) {
        var blessClass;
        if (key % 2 == 0) {
            blessClass = "bless-fl";
        }
        else {
            blessClass = "bless-fr";
        }
        tpl += ' <span class="bless-item ' + blessClass + '">' +
            '<label class="name">' + value.name + '</label>' +
            '<label class="text">' + value.text + '</label>' +
            '</span>';
    });
    $('.bless-list-ul').html(tpl);

    //	renderStar();


};
$(document).ready(function () {
    loadingAnimate('100%');
    setTimeout(function () {
        $('.loading-page').hide();
    }, 500);

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',

        speed: 500,
        onSlideChangeStart: function () {
            slideract();
        }
    });
    var swiper2 = new Swiper('#J_other-photo-wrap', {
        paginationClickable: true,
        speed: 500,
        onSlideChangeStart: function () {
            photoAct();
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
		//去掉前后的act状态class
		if($('#J_other-photo-wrap .photo-li')[swiper2.realIndex+1]){
			reClass($('#J_other-photo-wrap .photo-li')[swiper2.realIndex+1], 'photo-li-act'+[swiper2.realIndex]);
		}
        if($('#J_other-photo-wrap .photo-li')[swiper2.realIndex-1]){
			reClass($('#J_other-photo-wrap .photo-li')[swiper2.realIndex-1], 'photo-li-act'+[swiper2.realIndex]);
		}
		//给当前photo加act状态的class
        addClass($('#J_other-photo-wrap .photo-li')[swiper2.realIndex], 'photo-li-act'+[swiper2.realIndex]);

    };
    var slideract = function () {
            // 学校
            //         alert(swiper.realIndex);
            var reClass = function (className1, className2) {
                setTimeout(function () {
                    $(className1).removeClass(className2);
                }, 500);
            };
            if (swiper.realIndex == 1) {
                reClass($('.biye-img-box'), 'biye-act');
                $('.school-wrap').addClass('school-wrap-act');
                //             setTimeout(function(){
                //                 $('.biye-img-box').removeClass('biye-act');
                //             },500);

            }
            if (swiper.realIndex == 2) {
                $('.biye-img-box').addClass('biye-act');
            }
            if (swiper.realIndex == 3) {
                reClass($('.biye-img-box'), 'biye-act');
                reClass($('#J_2016'), 'certificate-active');
                //
                //                $('.biye-img-box').removeClass('biye-act');
                //                $('#J_2016').removeClass('certificate-active');
            }
            if (swiper.realIndex == 4) {
                $('#J_2016').addClass('certificate-active');
            }
            if (swiper.realIndex == 5) {
                reClass($('#J_2016'), 'certificate-active');
                //                $('#J_2016').removeClass('certificate-active');
            }
        }
        //    hidePre();
        //    hide2012();
        //    hide2014();
        //    hide2015();
        //    animateFun2012();
    renderBless();

});