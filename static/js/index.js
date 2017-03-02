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
}
$(document).ready(function () {
    loadingAnimate('100%');
    setTimeout(function () {
        $('.loading-page').hide();
        prevousFun();
    }, 500);
//    animateFun2012();

});