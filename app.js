function keycode(event){

    let key = event.key;
    let code = event.which;
    let press = event.code;
    
document.getElementById("key").innerHTML = key;
document.getElementById("code").innerHTML = `the key code is ${code}`;
document.getElementById("press").innerHTML = `the event code is ${press}`;

}


