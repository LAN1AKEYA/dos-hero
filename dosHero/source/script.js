function start() {
    delete preloader;
    
    let underlineAnimation;
    let randMisclicks;
    let wordRate = 0;
    let accentRate = 0;
    arrow.innerText = '>';



    document.removeEventListener('keydown', start);

    setInterval(function () { soundEmbient.currentTime = 0; }, 49000);
    soundEmbient.play();
    consoller.style.opacity = '1';
    consoller.style.animation = 'consoller-start 5s ease-out';

    function runUnderline() {
        clearInterval(underlineAnimation);
        function repeatAnimate() {
            underlineAnimation = setTimeout(function set() {
                requestAnimationFrame(repeatAnimate);
                underline.innerText = '';
                setTimeout(function () { underline.innerText = '_'; }, (underlineSpeed / 2) / fps)
            }, underlineSpeed / fps);
        }
        underline.innerText = '';
        setTimeout(function () { underline.innerText = '_'; }, (underlineSpeed / 2) / fps)
        repeatAnimate();
    }

    function stopUnderline() {
        clearInterval(underlineAnimation);
        underline.innerText = '_';
    }

    function printWord(myWord) {
        stopUnderline();
        let i = 0;
        let randIndex = 0;
        consoleContain.style.animation = 'none';
        consoller.style.animation = 'none';
        function repeatAnimate() {
            wordAnimation = setTimeout(function () {
                word.innerText += myWord[i];

                soundClick.currentTime = 0;
                soundClick.play();
                i += 1;
                if (randMisclicks[i + 1]) {
                    randIndex = printSpeed * 2 + clearMisclickDelay;
                    setTimeout(function () {
                        word.innerText += getRandomLetter();
                        soundClick.currentTime = 0;
                        soundClick.play();
                    }, printSpeed / 2);
                    setTimeout(function () {
                        word.innerText = word.innerText.slice(0, -1);
                        soundClick.currentTime = 0;
                        soundClick.play();
                    }, printSpeed + clearMisclickDelay);
                }
                else {
                    randIndex = 0;
                }
                if (i >= myWord.length) {
                    clearInterval(wordAnimation);

                    if (accentRate == accentFilter.length) {
                        accentRate = 0
                    }
                    else {
                        if (accentFilter[accentRate]) {
                            consoleContain.style.animation = 'lag 6s';
                            consoller.style.animation = 'invertion 6s';
                            soundAccent.play();
                        }
                        accentRate += 1;
                    }
                    setTimeout(removeWord, wordClearDelay);

                    setTimeout(runUnderline, underlineDelay / fps);
                }
                else {
                    requestAnimationFrame(repeatAnimate);
                }
            }, (printSpeed + randSpeed[i] + randIndex) / fps);
        }
        repeatAnimate();
    }

    function removeWord() {
        stopUnderline();
        let i = document.getElementById('word').innerText.length;
        function repeatAnimate() {
            wordAnimation = setTimeout(function () {
                if (i != 0) {
                    i -= 1;

                    soundRemove.play();
                    word.innerText = word.innerText.slice(0, -1);
                    requestAnimationFrame(repeatAnimate);
                }
                else {
                    soundRemove.pause();
                    soundRemove.currentTime = 0;
                    clearTimeout(wordAnimation);
                    setTimeout(runUnderline, underlineDelay / fps);
                }
            }, (removeSpeed) / fps)
        }
        repeatAnimate();
    }

    function getRandomSpeed(beforeWord) {
        let randSpeed = [];
        for (let r = 0; r < beforeWord.length; r++) {
            randSpeed.push(Math.round((Math.random() * printSpeed) - (printSpeed / 2)));
        }
        return randSpeed;
    }

    function getFullRandomSpeed(randSpeed) {
        let fullRandSpeed = 0;
        for (let i = 0; i < randSpeed.length; i++) {
            fullRandSpeed += randSpeed[i];
        }
        return fullRandSpeed;
    }


    function getRandomMisclicks(beforeWord) {
        let randMisclicks = [];
        for (let i = 0; i < beforeWord.length; i++) {
            if ((Math.random() < randomMisclicksLuck) && !(falseSimbols.includes(beforeWord[i]))) {
                randMisclicks.push(true);
            }
            else {
                randMisclicks.push(false);
            }
        }
        return randMisclicks;
    }

    function getFullRandomMisclicks(randMisclicks) {
        fullRandMisclicks = 0;
        for (i in randMisclicks) {
            if (randMisclicks[i]) {
                fullRandMisclicks += printSpeed * 2;
            }
        }
        return fullRandMisclicks;
    }

    function getRandomLetter() {
        return characters[Math.floor(Math.random() * characters.length)];
    }


    function startAnimation() {
        let beforeWord = '';
        let itsWord = '';
        runUnderline();

        function repeatAnimate() {
            beforeWord = itsWord;
            if (wordRandom) {
                itsWord = wordBase[Math.round(Math.random() * (wordBase.length - 1))];
            }
            else {
                itsWord = wordBase[wordRate];
                wordRate += 1;
                if (wordRate == wordBase.length) {
                    stopAnimation();
                    /*userInput();*/
                    if (wordRepeat) { wordRate = 0; };
                }
            }
            randSpeed = getRandomSpeed(beforeWord);
            fullRandSpeed = getFullRandomSpeed(randSpeed);
            let timeForPrint = beforeWord.length * printSpeed;
            let timeForRemove = beforeWord.length * removeSpeed;
            randMisclicks = getRandomMisclicks(beforeWord);
            let fullRandMisclicks = getFullRandomMisclicks(randMisclicks);
            autoPrint = setTimeout(function () {
                printWord(itsWord);
                requestAnimationFrame(repeatAnimate);
            }, (100 + timeForPrint + timeForRemove + wordClearDelay + wordPrintDelay + fullRandSpeed + fullRandMisclicks) / fps)
        }
        repeatAnimate();
    }

    function stopAnimation() {
        clearTimeout(autoPrint);
    }

    function userInput() {
        runUnderline();
        let userInputListener = document.addEventListener('keydown', function(event) {
            if (characters.includes(event.key)) {
                soundClick.currentTime = 0;
                soundClick.play();
                word.innerText += event.key;
                stopUnderline();
                underLineWaiting = setTimeout(runUnderline, underlineDelay);
            }
            else if (event.key == 'Backspace') {
                word.innerText = word.innerText.slice(0, -1);
            }
            else if (event.key = 'Enter') {
                checkInputComand(word.innerText);
                consoleContain.style.animation = 'lag 6s';
                consoller.style.animation = 'invertion 6s';
                soundAccent.play();
                
                document.removeEventListener(userInputListener);
                setTimeout(function() {
                    removeWord();
                    userInput();
                    consoleContain.style.animation = '';
                    consoller.style.animation = '';
                    
                }, wordClearDelay / fps);

                
            }
        })
    }

    function checkInputComand(userComand) {
        console.log(userComand);
    }

    startAnimation();
    //userInput();
}


