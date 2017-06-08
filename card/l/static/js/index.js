var loadingAnimate = function (w) {
    $('.loading-bar-act').animate({
        width: w
    }, 500, 'ease-out');
};
// 进页面先loading到50%，页面加载完毕加载到100%;
loadingAnimate('50%');


$(document).ready(function () {
    var callback = function () {
        var audio = function () { //背景音乐
            var me = this;

             
            var $audio = $('<audio id="audio" src="./../static/vedio/8052309453499325.mp3?t=' + (new Date() - 0) + '" loop preload="auto" autoplay="true"></audio>');

          
            $audio.appendTo('body');

            var audio = $('#audio')[0];

            $audio.one('canplay', function () { //部分浏览器中必须由用户手动触发音乐播放事件
                $('html').one('touchstart', function () {
                    audio.play();
                });
            });

            audio.play();

           	var  $globalAudio = $('#globalAudio');

            var getHiddenProp = function () {
                return 'hidden' in document ? 'hidden' : function () {
                    var r = null;

                    ['webkit', 'moz', 'ms', 'o'].forEach(function (prefix) {
                        if ((prefix + 'Hidden') in document) {
                            return r = prefix + 'Hidden';
                        }
                    });

                    return r;
                }();
            };

            $('body').on('touchend', '#globalAudio', function () { //背乐开关
                if (audio.paused) {
                    audio.play();
                    $(this).removeClass('closed');
                    return false;
                }
                $(this).addClass('closed');
                audio.pause();
            });

            setTimeout(function () {
                if (audio.paused) {
                    $('#$globalAudio').trigger('tap');
                }
            }, 2000);
			var hiddenProp;
			var bPrefix;
            if (hiddenProp = getHiddenProp()) {
                bPrefix = hiddenProp.substring(0, hiddenProp.length - 6);

                document.addEventListener(bPrefix + 'visibilitychange', function () {
                    $globalAudio.trigger('tap');
                });

                window.addEventListener("pagehide", function (e) {
                    audio.pause();
                }, false);
                window.addEventListener("pageshow", function (e) {
                    audio.play();
                }, false);
            }

            return me;
        };
		audio();
//        var myAuto = document.getElementById('globalAudioPlayer');
//        myAuto.play();
//        var hasPlay = true;
//        $('#globalAudio').on('touchend', function () {
//            if (hasPlay) {
//                myAuto.pause();
//            }
//            else {
//                myAuto.play();
//            }
//            hasPlay = !hasPlay;
//        });


        var musicNoteAnim = function () {
            var t = $(".circle-1"),
                i = $(".circle-2"),
                a = $(".circle-3");
            t.show(), setTimeout(function () {
                i.show()
            }, 200), setTimeout(function () {
                a.show()
            }, 300), setTimeout(function () {
                t.hide()
            }, 400), setTimeout(function () {
                i.hide()
            }, 500), setTimeout(function () {
                a.hide()
            }, 650)
        }
        musicNoteAnim();
        setInterval(function () {
            musicNoteAnim();
        }, 800);
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
            if (swiper.realIndex == 0) {
                reClass($('.school-wrap'), 'school-wrap-act');
                reClass($('.biye-img-box'), 'biye-act');
                reClass($('#J_2016'), 'certificate-active');
                $('#J_2014').removeClass('flip-animation-3');
                $('#J_2012').removeClass('flip-animation-3');
            }
            // 1 故事场景
            if (swiper.realIndex == 1) {
                $('.school-wrap').addClass('school-wrap-act');
                setTimeout(function () {
                    $('#J_2012').addClass('flip-animation-3');
                    setTimeout(function () {
                        $('#J_2014').addClass('biye-act');
                        setTimeout(function () {
                            setTimeout(function () {
                                $('#J_2016').addClass('certificate-active');
                                setTimeout(function () {
                                    $('.up-arrow-next').show();
                                }, 3000);
                            }, 3000);

                            $('#J_2014').addClass('flip-animation-3');
                        }, 6000);
                    }, 3000);

                }, 5000);


            }

            // 2 婚纱照横滑
            if (swiper.realIndex == 2) {

                $('#J_2014').removeClass('flip-animation-3');
                $('#J_2012').removeClass('flip-animation-3');
                reClass($('.school-wrap'), 'school-wrap-act');
                reClass($('.biye-img-box'), 'biye-act');
                reClass($('#J_2016'), 'certificate-active');

                // 婚纱照部分滚动
                if (swiper2) {
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
                        $($('#J_other-photo-wrap .photo-li')[swiper2.realIndex]).addClass('photo-li-act' + (parseInt([swiper2.realIndex], 10) + 1));
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
    }
    setTimeout(function () {
        $('html').css({
            fontSize: $(window).width() / 16
        });
        callback();
    }, 20);

});