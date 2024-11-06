document.head.append(Object.assign(document.createElement('link'), {rel: 'stylesheet', href: 'dosHero/styleConfig.css'}));
document.head.append(Object.assign(document.createElement('link'), {rel: 'stylesheet', href: 'dosHero/source/elementsStyles.css'}));

const consoller = document.getElementById('dosHero');
const consoleContain = Object.assign(document.createElement('div'), {className: 'console-contain'});
const consoleArea = Object.assign(document.createElement('div'), {className: 'console'});
const arrow = Object.assign(document.createElement('pre'), {innerText: 'Press space...'});
const word = Object.assign(document.createElement('pre'), {id: 'word'});
const underline = Object.assign(document.createElement('pre'), {id: 'underline'});


consoller.appendChild(consoleContain);
consoleContain.appendChild(consoleArea);
consoleArea.appendChild(arrow);
consoleArea.appendChild(word);
consoleArea.appendChild(underline);


document.querySelector('main').removeChild(document.getElementById('login'));




if (filterOn) {
    const fill = Object.assign(document.createElement('div'), {id: 'fill'});
    consoller.appendChild(fill);
}


let soundClick = new Audio('dosHero/source/snd/click.mp3');
let soundRemove = new Audio('dosHero/source/snd/remove.mp3');
let soundAccent = new Audio('dosHero/source/snd/accent.mp3');
let soundEmbient = new Audio('dosHero/source/snd/embient.mp3');
let soundStartButton = new Audio('dosHero/source/snd/startBtn.mp3');
