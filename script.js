
const Layout = [
  [['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '\'', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '/', '\\', '|'],
    ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'ы', 'Ы', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ';', ':'],
    ['Quote', 'э', 'Э', '\'', '\''],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', '.', '<'],
    ['Period', 'ю', 'Ю', ',', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];

const wrapper = document.createElement('div'); 
const textArea = document.createElement('textarea');
const keyBoard = document.createElement('div');
let lang = 'rus';
let capslock = false;


wrapper.classList.add('wrapper');
textArea.id = 'textArea';
keyBoard.className = 'keyBoard';
wrapper.append(textArea);
wrapper.append(keyBoard);
for (let i = 0; i < Layout.length; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < Layout[i].length; j += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(Layout[i][j][0]);

    key.insertAdjacentHTML('afterBegin',
      `<div class='rus'>
          <span class='caseDown '>${Layout[i][j][1]}</span>
          <span class='caseUp hidden'>${Layout[i][j][2]}</span>
        </div>
        <div class='eng hidden'>
          <span class='caseDown hidden'>${Layout[i][j][3]}</span>
          <span class='caseUp hidden'>${Layout[i][j][4]}</span>
        </div>`);
    row.appendChild(key);
  }
  keyBoard.appendChild(row);
}

document.body.append(wrapper);  //создаем клавиатуру


function addActive(elem) {
    elem.classList.add('active');
  }

function removeActive(elem) {
    elem.classList.remove('active');
  }
  
let keys = document.querySelectorAll('.key');
let spaceKey = document.querySelector('.Space');
let shiftLeft = document.querySelector('.ShiftLeft')
let shiftRight = document.querySelector('.ShiftRight')
let tab = document.querySelector('.Tab');
let CapsLock =document.querySelector('.CapsLock');
let ControlLeft = document.querySelector('.ControlLeft');
let ControlRight = document.querySelector('.ControlRight');
let AltLeft = document.querySelector('.AltLeft');
let AltRight = document.querySelector('.AltRight');
let Backspace = document.querySelector('.Backspace');
let Delete = document.querySelector('.Delete');
let Enter = document.querySelector('.Enter');





for(let i=0; i<keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText.toUpperCase());
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

document.addEventListener('keydown', function(event) {
    for(let i=0; i<keys.length; i++) {
        if(event.key == keys[i].getAttribute('keyname') || (event.key == keys[i].getAttribute('lowerCaseName'))){
            keys[i].classList.add('active');
        }
        if(event.code == 'Space') {
            spaceKey.classList.add('active');
        }
        if(event.code == 'ShiftLeft') {
            shiftLeft.classList.add('active');
        }
        if(event.code == 'shiftRight') {
            shiftRight.classList.add('active');
        }
        if(event.code == 'Tab') {
            tab.classList.add('active');
        }
        if(event.code == 'CapsLock') {
            CapsLock.classList.add('active');
        }
        if(event.code == 'ControlLeft') {
            ControlLeft.classList.add('active');
        }
        if(event.code == 'ControlRight') {
            ControlRight.classList.add('active');
        }
        if(event.code == 'AltLeft') {
            AltLeft.classList.add('active');
        }
        if(event.code == 'AltRight') {
            AltRight.classList.add('active');
        }
        if(event.code == 'Backspace') {
            Backspace.classList.add('active');
        }
        if(event.code == 'Delete') {
            Delete.classList.add('active');
        }
        if(event.code == 'Enter') {
            Enter.classList.add('active');
        }
    }
})

document.addEventListener('keyup', function(event) {
    for(let i=0; i<keys.length; i++) {
        if(event.key == keys[i].getAttribute('keyname') || (event.key == keys[i].getAttribute('lowerCaseName'))){
            keys[i].classList.remove('active');
        }
        if(event.code == 'Space') {
            spaceKey.classList.remove('active');
        }
        if(event.code == 'ShiftLeft') {
            shiftLeft.classList.remove('active');
        }
        if(event.code == 'м') {
            ShiftRight.classList.remove('active');
        }
        if(event.code == 'Tab') {
            tab.classList.remove('active');
        }
        if(event.code == 'CapsLock') {
            tab.classList.remove('active');
        }
        if(event.code == 'ControlLeft') {
            ControlLeft.classList.remove('active');
        }
        if(event.code == 'ControlRight') {
            ControlRight.classList.remove('active');
        }
        if(event.code == 'AltLeft') {
            AltLeft.classList.remove('active');
        }
        if(event.code == 'AltRight') {
            AltRight.classList.remove('active');
        }
        if(event.code == 'Backspace') {
            Backspace.classList.remove('active');
        }
        if(event.code == 'Delete') {
            Delete.classList.remove('active');
        }
        if(event.code == 'Enter') {
            Enter.classList.remove('active');
        }
    }
})

document.addEventListener('keydown', function(event) {
    for(let i=0; i<keys.length; i++) {
        console.log(keys[i]);
    }
})