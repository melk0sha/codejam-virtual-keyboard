let isShift = false;
let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let textarea = document.createElement('textarea');
textarea.rows = '10';
textarea.cols = '100';
container.appendChild(textarea);

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);

let row0 = document.createElement('div');
row0.classList.add('row');
keyboard.appendChild(row0);
let row1 = document.createElement('div');
row1.classList.add('row');
keyboard.appendChild(row1);
let row2 = document.createElement('div');
row2.classList.add('row');
keyboard.appendChild(row2);
let row3 = document.createElement('div');
row3.classList.add('row');
keyboard.appendChild(row3);
let row4 = document.createElement('div');
row4.classList.add('row');
keyboard.appendChild(row4);

buttonsEng.map(button => {
    const buttonElement = document.createElement('button');
    button.content.map(spanContent => {
        const span = document.createElement('span');
        span.textContent = spanContent;
        buttonElement.appendChild(span);
    });
    button.classNames.forEach(classElementName => {
        buttonElement.classList.add(classElementName);
    });
    switch (button.row) {
        case 0:
            row0.appendChild(buttonElement);
            break;
        case 1:
            row1.appendChild(buttonElement);
            break;
        case 2:
            row2.appendChild(buttonElement);
            break;
        case 3:
            row3.appendChild(buttonElement);
            break;
        case 4:
            row4.appendChild(buttonElement);
            break;
    }
});

keyboard.addEventListener('click', event => {
    console.log(event.target);
    let currentButton = event.target;
    if (currentButton.tagName == 'BUTTON') {
        let spans = currentButton.children;
        if (currentButton.classList.value.includes('changeable') || currentButton.classList.value.includes('space')) {
            if (isShift) {
                textarea.value += spans[1].textContent;
            } else {
                textarea.value += spans[0].textContent;
            }
        } else if (currentButton.classList.value.includes('arrow')) {
            textarea.value += spans[0].textContent;
        }
        
        console.log(currentButton.classList.value.includes('changeable'));
    }
    else if (currentButton.tagName == 'SPAN' && currentButton.parentElement.classList.value.includes('changeable')) {
        textarea.value += currentButton.textContent;
    }
});