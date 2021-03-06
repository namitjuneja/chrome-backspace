window.onkeyup = function(event) {

    pressed_key = event.which || event.keyCode;

    //List of HTML tags which when have focus, the backspace key should not navigate backwards
    var re = /DATALIST|KEYGEN|INPUT|OPTION|SELECT|TEXTAREA/i;


    if (pressed_key == 8) { // 8 == backspace
        if (!re.test(event.target.tagName) && !event.target.isContentEditable) { //checking if the active HTML tag is an input tag
            event.preventDefault();
            if (event.shiftKey) {
                //go one step forward
                window.history.forward();
                console.log("FORWARD");
            } else {
                //go one step backward
                window.history.back();
                console.log("BACK");
            }
        }
    } else {
        return;
    }
};