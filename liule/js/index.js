	// 电脑3D轮播
    var classNameArry = ["left4","left3","left2","left1","center","right1","right2","right3","right4"];
	var index = 2;
	var lock = true;
	$("#zuo").click(function(){
		if (!lock) {
			return;
		}
		index++;
		if(index > 4 ){
			index = 0;
		}
		fun();
	})	
	$("#you").click(function(){
		if (!lock) {
			return;
		}
		index--;
		if(index < 0 ){
			index = 4;
		}
		fun();
	})
	function fun(){
		var newArry = classNameArry.slice(index,index+5);
			$("#box li").each(function(i){
			$(this).attr("class",newArry[i]);
			var yanse = 'rgb' + '(' + Math.ceil(Math.random() * 245) + ',' + Math.ceil(Math.random() * 245) + ',' + Math.ceil(Math.random() * 245) + ')';
	    	$("#box").css('background', yanse);
	    	$("#box").css("opacity","0.9");
		})
		setTimeout(function(){
			lock = true;
		},500);
	}


    // 肩膀
	var timer = null;
	xiazai.onclick=function(){
    var timer = setInterval(function(){
        dong.value++;
        if (dong.value=="100") {
        	clearInterval(timer);
     	}	
     	if (dong.value=="50") {
     		hongse.style="opacity:0.1";
     	}if(dong.value=="10"){
     		hongse.style="opacity:0.2";
     	}if(dong.value=="20"){
     		hongse.style="opacity:0.3";
     	}if(dong.value=="30"){
     		hongse.style="opacity:0.4";
     	}if(dong.value=="40"){
     		hongse.style="opacity:0.5";
     	}if(dong.value=="50"){
     		hongse.style="opacity:0.6";
     	}if(dong.value=="60"){
     		hongse.style="opacity:0.7";
     	}if(dong.value=="70"){
     		hongse.style="opacity:0.8";
     	}if(dong.value=="80"){
     		hongse.style="opacity:0.9";
     	}if(dong.value=="90"){
     		hongse.style="opacity:1";
     	}if (dong.value=="100") {
     		hongse.style="transition: all .28s ease-in .1s;transform: scale(1.5);";
     	}
     	if (dong.value=="100") {
     		yi.style="transition: all 1s ease-in .1s;opacity:1";
     	}if (dong.value=="100") {
     		er.style="transition: all 2s ease-in .1s;opacity:1";
     	}if (dong.value=="100") {
     		san.style="transition: all 3s ease-in .1s;opacity:1";
     	}if (dong.value=="100") {
     		si.style="transition: all 4s ease-in .1s;opacity:1";
     	}if (dong.value=="100") {
     		wu.style="transition: all 4.2s ease-in .1s;opacity:1";
     	}if (dong.value=="100") {
     		liu.style="transition: all 5s ease-in .1s;opacity:1";
     	}if (dong.value=="100") {
     		qi.style="transition: all 6s ease-in .1s;opacity:1";
     	}if (dong.value=="100") {
     		ba.style="transition: all 6s ease-in;opacity:1";
     	}
        console.log(dong.value);
    },40)
}
    // 按钮开关
	chakan.onclick=function(){
        shiping.style="display:none";
		kaiguan.style="opacity:0.8;transition: all .28s ease-in .1s;transform: rotate(-2deg);";
	}
	off.onclick=function(){
        shiping.style="display:none";
		kaiguan.style="opacity:0;transition: all .28s ease-in .1s;transform:translateY(-50px)translateX(25px);";
	}
	guanbi.onclick=function(){
        shiping.style="display:none";
		kaiguan.style="opacity:0;transition: all .28s ease-in .1s;transform:translateX(-15px)translateY(5px);";
	}
    // 视频开关
    var lock = true;
    ship.onclick=function(){
        if(lock){
            lock=false;
            ship.innerHTML="关闭";
            kaiguan.style="display:none";
            zhongjian.style="transform: rotateY(150deg);"
            shiping.style="opacity:1;transform: scale(1.1);";
        }else{
            lock=true;
            ship.innerHTML="视频";
            kaiguan.style="display:none";
            zhongjian.style="transform: rotateY(0deg);"
            shiping.style="opacity:0;";
            video.pause();
        }
    }

    // 报错死机状态
    baocuo.onclick=function(){
        huabu.style="display:block";
    }
    var huabu = document.getElementById('huabu');
    var ctx = huabu.getContext("2d");
    ctx.fill();
    var obj = ctx.getImageData(0,0,1500,100);
    for(var i = 0;i < obj.data.length;i++){
        var rgba = parseInt(Math.random() * 250);
        obj.data[0 + i * 9] = rgba;//r
        obj.data[1 + i * 9] = rgba;//g
        obj.data[2 + i * 9] = rgba;//b
        obj.data[3 + i * 9] = rgba;//a
    }
    ctx.putImageData(obj,0,0);

    // 手机轮播
    function aa() {
    var lIndex = 0;
    function dingshi() {
        setInterval(function() {
            (lIndex < 4) ? (lIndex++) : (lIndex = 0);
            $(".pic img").eq(lIndex).fadeIn().siblings().fadeOut();
        }, 1600);
    };
    dingshi(); //执行
}
aa();

// 瀑布流
// onresize：浏览器窗口发生改变的时候会触发的事件
window.onload = function(){
    fun1();
}
window.onresize = function(){
    fun1();
}
function fun1(){
    // 获取所有的盒子
    var subBoxs = document.getElementById('pubu').children;
    // 获取浏览器的宽度
    var pageWidth = window.innerWidth;
    // 包含图片的宽度
    var subWidth = subBoxs[0].offsetWidth;
    // 当前浏览器宽度下最多放多少个
    var maxNum = Math.floor(pageWidth / subWidth);
    // 用于记录图片高度
    var heightArry = [];
    for (var i = 0; i < subBoxs.length; i++) {
        // 条件成立说明是第一行
        if (i < maxNum) {
            // 第一行所有元素的高度
            heightArry[i] = subBoxs[i].offsetHeight;
            subBoxs[i].style.left = i * subWidth + "px";
            subBoxs[i].style.top = 0 + "px";
        }else{
            // 不是第一行，就开始查找已经放过图片中高度最小的那一张，将这一张放在他下面
            var minHeight = getMinArry(heightArry).value;
            var minHeightIndex = getMinArry(heightArry).index;
            subBoxs[i].style.left = subBoxs[minHeightIndex].offsetLeft + "px";
            subBoxs[i].style.top = minHeight + "px";
            // 放完之后更新高度数组
            heightArry[minHeightIndex] = minHeight + subBoxs[i].offsetHeight;
        }
    }
}
function getMinArry(array){
    // 对象obj包含数组中的最小值和最小值的位置两个属性
    var  ert = {};
    ert.index = 0;
    ert.value = array[ert.index];
    // 查找数组中的最小值
    for (var i = 0; i < array.length; i++) {
        if (array[i] < ert.value) {
            ert.value = array[i];
            ert.index = i;
        }
    }
    return ert;
}
