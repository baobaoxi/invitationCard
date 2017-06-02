var animateFunc = {
    machineWordStart: function (container) {
		var self = this;
		var wordArr = $(container).find('.machine-word');
		var i = 0;
		var wordLength = wordArr.length();
		var mwordTime = setTimeout(function(){
			$(wordArr[i]).addClass('machine-word-act');
			i++;
			if(i == wordLength){
				clearTimeout(mwordTime);
			}
		},100);
    },
    machineWordEnd: function (container) {
		var self = this;
		var wordArr = $(container).find('.machine-word');
		$.each(wordArr,function(index,value){
			$(value).removeClass('machine-word-act');
		})
    }
};