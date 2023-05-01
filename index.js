const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace',
                 'Tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
                 'CapsLock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 'Enter',
                 'Shift', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, '&#8593', 'Shift',
                'Control', 'Win', 'Alt', 'Space', 'Alt', 'Control', '&#8592', '&#8595', '&#8594']


document.querySelector('.body').innerHTML = `<input value=''type="textarea" class="text__area" tabindex="100" autofocus>
<div id="keyboard"></div>`


const ta = document.querySelector('.text__area')
console.log(ta)
ta.focus()

function init(){
    let out = ``;
    for (let i = 0; i<keyboard.length; i++){
        if(i==14 || i==28 || i==41 || i==54){
            out += '<div class = "next__row"></div>'
        }
        if(typeof(keyboard[i]) == "number"){
            out+=`<div class="keyboard__key" data="${String.fromCharCode(keyboard[i])}">${String.fromCharCode(keyboard[i])}</div>`
        } else {
            if(keyboard[i] == "&#8593"){
                out+=`<div class="up special__keys">${keyboard[i]}</div>`
            } else if (keyboard[i] == "&#8592") {
                out+=`<div class="left special__keys">${keyboard[i]}</div>`
            } else if (keyboard[i] == "&#8595") {
                out+=`<div class="down special__keys">${keyboard[i]}</div>`
            } else if (keyboard[i] == "&#8594") {
                out+=`<div class="right special__keys">${keyboard[i]}</div>`
            } else {
                out+=`<div class="${keyboard[i]} special__keys" data='${keyboard[i]}'>${keyboard[i]}</div>`
            }
        }
    }
    document.querySelector('#keyboard').innerHTML = out
}

init()


