// ==UserScript==
// @name         Fullscreen Option For MintManga
// @version      1.0
// @author       НИНРИ (https://discord.gg/PSTM5gh)
// @match        http://mintmanga.com/*
// @match        https://mintmanga.com/*
// @updateURL    https://github.com/xonrsoftware/FullscreenOptionForMintManga/raw/master/script.user.js
// @downloadURL  https://github.com/xonrsoftware/FullscreenOptionForMintManga/raw/master/script.user.js
// @grant        GM_addStyle
// ==/UserScript==

function switchToFullscreen() {
    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    ) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        const element = document.getElementById("fotocontext");
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
}

(function () {
    'use strict';
    window.addEventListener('load', function () {
        for (let navbar of document.getElementsByClassName("topControl")) {
            let near_button = navbar.getElementsByClassName("near-button")[0];
            if (near_button !== undefined) {
                let zNode = document.createElement('div');
                zNode.innerHTML = `<button class="btn btn-primary" title="" id="switchToFullscreenButton" data-toggle="tooltip" data-original-title="Полноэкранный режим."><i class="fa fa-arrows-alt"></i></button>`;
                zNode.setAttribute('id', 'switchToFullscreenDiv');
                near_button.appendChild(zNode);
                document.getElementById("switchToFullscreenButton").addEventListener(
                    "click", switchToFullscreen, false
                );
            }
        }
    });
})();

GM_addStyle(`
#switchToFullscreenDiv {
    display: inline;
    padding-left: 8px;
}

#fotocontext {
    overflow: auto;
}
`);