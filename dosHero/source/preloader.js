const preloader = Object.assign(document.createElement('div'), { id: 'preloader' })
document.body.appendChild(preloader);
const preloadButton = Object.assign(document.createElement('button'), { innerText: 'start', id: 'preloadButton' });
const loadingAnimationContain = Object.assign(document.createElement('div'), { id: 'preloaderAnimationContain' });
const loadingAnimationText = Object.assign(document.createElement('pre'), { innerText: 'loading', id: 'preloaderAnimationText' });
const loadingAnimationDots = Object.assign(document.createElement('pre'), { id: 'preloaderAnimationDots' });
const description = Object.assign(document.createElement('div'), { classList: 'description' });
const sndDesc = Object.assign(document.createElement('h3'), { innerText: '(turn on the sound)' });
const version = Object.assign(document.createElement('h3'), { innerText: 'v0.3' });
description.appendChild(sndDesc);
description.appendChild(version);


preloader.appendChild(loadingAnimationContain);
loadingAnimationContain.appendChild(loadingAnimationText);
loadingAnimationContain.appendChild(loadingAnimationDots);


let dotsCount = 0;
function preloaderDotsFunc() {
    setTimeout(function () {
        dotsCount += 1;
        loadingAnimationDots.innerText += '.';
        if (dotsCount > 30) {
            loadingAnimationDots.innerText = '';
            dotsCount = 0;
        }
        requestAnimationFrame(preloaderDotsFunc);
    }, 500);
}
preloaderDotsFunc();



document.addEventListener('DOMContentLoaded', function (e) {
    console.log(e);


    preloader.removeChild(loadingAnimationContain);
    preloader.appendChild(preloadButton);
    preloader.appendChild(description);
    document.addEventListener('click', function (event) {
        if (event.target == preloadButton) {
            soundStartButton.play();
            preloadButton.style.animation = 'preloadBtnActive 1s';
            preloadButton.style.opacity = '0';
            preloadButton.style.cursor = 'default';
            description.style.opacity = '0';
            description.style.transition = '1s';
            setTimeout(function () {
                document.body.removeChild(preloader);
                start();
            }, 1000);
        }
    });


})