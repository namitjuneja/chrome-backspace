console.log()
window.onkeyup=function(event){
	
	pressed_key = event.which || event.keyCode;

	var re = /INPUT|SELECT|TEXTAREA/i;

	if (pressed_key == 8){  // 8 == backspace
		if (!re.test(event.target.tagName)){
			event.preventDefault();
			window.history.back();
			console.log("Going back ... ");
		}
	}
	else {
		return;
	}
};