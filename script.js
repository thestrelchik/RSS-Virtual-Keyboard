
const keyboard = [
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
const pLang = document.createElement('div');
let lang = 'rus';
let capslock = false;


wrapper.classList.add('wrapper');
textArea.id = 'textArea';
keyBoard.className = 'keyBoard';
pLang.classList.add('plang');
pLang.insertAdjacentHTML('afterbegin', `<p>switch language:  left shift + left ctrl</p>`)
wrapper.append(textArea);
wrapper.append(keyBoard);
wrapper.append(pLang);
for (let i = 0; i < keyboard.length; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < keyboard[i].length; j += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(keyboard[i][j][0]);

    key.insertAdjacentHTML('afterBegin',
      `<div class='rus'>
          <span class='caseDown '>${keyboard[i][j][1]}</span>
          <span class='caseUp hidden'>${keyboard[i][j][2]}</span>
        </div>
        <div class='eng hidden'>
          <span class='caseDown hidden'>${keyboard[i][j][3]}</span>
          <span class='caseUp hidden'>${keyboard[i][j][4]}</span>
        </div>`);
    row.appendChild(key);
  }
  keyBoard.appendChild(row);
}
document.body.append(wrapper); 


function addActive(e) {
    e.classList.add('active');
  }

function removeActive(e) {
    e.classList.remove('active');
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
      if (event.shiftKey && event.ctrlKey) {
        keys[i].classList.add('active');
        enLang();
        return false;
      }
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
        if(event.code == 'ShiftRight') {
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




  
  keyBoard.addEventListener('mousedown', (e) => {
    const elem = e.target.closest('.key');
    switch (elem.classList[1]) {
      case 'Tab':
        addActive(elem);
        textArea.value += ' ';
        break;
      case 'Enter':
        addActive(elem);
        textArea.value += '\n';
        break;
      case 'Delete':
        addActive(elem);
        break;
      case 'Backspace':
        addActive(elem);
        textArea.value = textArea.value.substr(0, textArea.value.length - 1);
        break;
      case 'CapsLock':
        addActive(elem);
        if (capslock) {
          removeActive(elem);
          capslock = false;
        } else {
          addActive(elem);
          capslock = true;
        }
        break;
        case 'ShiftLeft':
        case 'ShiftRight':
        e.preventDefault();
        addActive(elem);
        
        break;
        case 'ControlLeft':
        case 'ControlRight':
        addActive(elem);

        break;
        default:
        addActive(elem);
        textArea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }
  });
  

  keyBoard.addEventListener('mouseup', (e) => {
    const elem = e.target.closest('.key');
    removeActive(elem);
    if(elem.classList[1] == 'Tab') {
      removeActive(elem);
        textArea.innerText += ' ';
        
    } else if(elem.classList[1] == 'Enter') {
      removeActive(elem);
      
    } else if(elem.classList[1] == 'Delete') {
      removeActive(elem);
      
    } else if(elem.classList[1] == 'Backspace') {
      removeActive(elem);
      
    } 
    else if(elem.classList[1] == 'CapsLock') {
      removeActive(elem);
      if (capslock !== true) {
        removeActive(e.target.closest('.key'));
      } else {
        removeActive(e.target.closest('.key'));
      }
        
      
    } else if(elem.classList[1] == 'ShiftLeft' || elem.classList[1] == 'ShiftRight') {
      removeActive(elem);
      e.preventDefault();
      removeActive(elem);
        
      
    } else if(elem.classList[1] == 'ControlLeft' || elem.classList[1] == 'ControlRight') {
      removeActive(elem);
    } 
  });

  const enLang = () => {
    const prevLang = keyBoard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < prevLang.length; i++) {
      prevLang[i].classList.toggle('hidden');
      prevLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
    if (lang === 'rus') {
      lang = 'eng';
      localStorage.setItem('lang', lang);
    } else {
      lang = 'rus';
      localStorage.setItem('lang', lang);
    }
    const nextLang = keyBoard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < nextLang.length; i++) {
      nextLang[i].classList.toggle('hidden');
      nextLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
  };
  
  
  if (localStorage.lang === 'eng') {
    enLang();
  }