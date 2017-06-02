var blessData = [{
        name: '*烨',
        text: '莲花并蒂开，情心相印；梧枝连理栽，灵犀互通！愿我俩百年好合，比翼双飞！'
    }, {
        name: '**然',
        text: '相亲相爱幸福永，同德同心幸福长。愿你俩情比海深！'
    }, {
        name: '*创',
        text: '人生三大喜，亲爱的朋友，在你新婚的日子，让我诚挚地祝你新婚快乐！'
    }, {
        name: '*超',
        text: '二分事业百倍功夫四化英雄建树日；十载幽思一朝遂愿百年伉俪皆荣时。'
    }, {
        name: '*阳',
        text: '更深后，面面掩窗纱。如意并栽连理树，同心竟吐合欢花，胜境武陵赊。'
    },

    {
        name: '**萍',
        text: '永不褪色的是互相的关心！无穷无尽深深的爱！！也因这一刻的溶合而更温馨更美好！敬祝新婚快乐！'
    },

    {
        name: '**晖',
        text: '这时刻，是花开的时，是飞彩的时刻，是吉庆的时刻，是你大喜的时刻。祝你：天赐良缘，百年好合。'
    },

    {
        name: '**鹏',
        text: 'My very best wishes to you for a lifetime of happiness． 向你俩致以最美好的祝愿，祝你们终生幸福。'
    },

    {
        name: '*斌',
        text: '沉酣处，仙液沁霞丹。豆蔻香舒春，差蘼睡足夜阑珊，绣幕不知寒。'
    },

    {
        name: '**伟',
        text: '仟僖年结千年缘，百年身伴百年眠。天生才子佳人配，只羡鸳鸯不羡仙。'
    },

    {
        name: '*静',
        text: '百合送新人，祝百年好合，玫瑰送爱侣，祝爱情甜蜜，桂圆送夫妻，祝早生贵子，红包送月老，祝你们白头到老！'
    },

    {
        name: '*沁',
        text: '愿你俩恩恩爱爱，意笃情深，此生爱情永恒，爱心与日俱增！！'
    }, {
        name: '*烨',
        text: '莲花并蒂开，情心相印；梧枝连理栽，灵犀互通！愿我俩百年好合，比翼双飞！'
    }, {
        name: '**然',
        text: '相亲相爱幸福永，同德同心幸福长。愿你俩情比海深！'
    }, {
        name: '*创',
        text: '人生三大喜，亲爱的朋友，在你新婚的日子，让我诚挚地祝你新婚快乐！'
    }, {
        name: '*超',
        text: '二分事业百倍功夫四化英雄建树日；十载幽思一朝遂愿百年伉俪皆荣时。'
    }

];
var bless = {
    renderBless: function () {
        var self = this;
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
                '<label class="name">' + value.name + '</label>：' +
                '<label class="text">' + value.text + '</label>' +
                '</span>';
        });
        $('.bless-list-ul').html(tpl);
        self.addBless();
        self.getSelfBless();
    },
    blessSwiper: function () {
        //		$('.bless-list-wrap .bless-list-ul').addClass('bless-list-act');

    },
    getSelfBless: function () {
        var me = this;
        if (localStorage && localStorage.blessName && localStorage.blessText) {
            var tpl = ' <span class="bless-item ">' +
                '<label class="name">' + localStorage.blessName + '</label>：' +
                '<label class="text">' + localStorage.blessText + '</label>' +
                '</span>';
            $('.bless-list-ul').prepend(tpl);
            $('.bless-self-wrap').html(tpl).show();
			$('#J_bless-wrap .bless-list-wrap').height($(window).height()- $('.bless-self-wrap').height() - 140);
        }
    },
    addBless: function () {
        $(document).on('click', '.bless-input-wrap .btn', function () {
            var blessName = $('.bless-name').val();
            var blessText = $('.bless-inputtext').val();
            var tpl = ' <span class="bless-item ">' +
                '<label class="name">' + '我' + '</label>：' +
                '<label class="text">' + blessText + '</label>' +
                '</span>';
            $('.bless-list-ul').prepend(tpl);
            $('.bless-self-wrap').html(tpl).show();
            if (localStorage) {
                try {
					if(blessName && blessName.length == 2){
						blessName = '*'+blessName.slice(1,2);
					}else{
						blessName = '**'+blessName.slice(2,3);
					}
                    localStorage.blessName = blessName;
                    localStorage.blessText = blessText;
                }
                catch (e) {}

            }
        })
    }
}