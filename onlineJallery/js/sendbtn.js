window.onload=function b(){
	var text = document.getElementById('input_box');
	var chat = document.getElementById('chatbox');
	var btn = document.getElementById('send');
	var talk = document.getElementById('talkbox');
	
	function getNowFormatDate() {
	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	            + " " + date.getHours() + seperator2 + date.getMinutes()
	            + seperator2 + date.getSeconds();
	    return currentdate;
	}
	
	btn.onclick=function(){
		if(text.value ==''){
            alert('不能发送空消息');
        }else{
        	var myDate=getNowFormatDate();
			chat.innerHTML += '<div class="me"><p class="time">'+myDate+'</p><img src="img/rename.png" class="headimgtop" /><p class="metalk">'+text.value+'</p></div>';
			text.value = '';
		};
	};
};


