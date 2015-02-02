/*
    Author: Dmitriy Buyanov
 */

function ModalWindow(content) {
    // Like private fields

    var overlay = document.createElement('div');
    var modalWindow = document.createElement('div');
    var modalContent = document.createElement('div');

    this.onCloseEvent = function () {
    };

    // Like a private method
    function resetAlign() {
        modalWindow.style.left = Math.round((document.documentElement.clientWidth - modalWindow.offsetWidth) / 2) + 'px';
        modalWindow.style.top = Math.round((document.documentElement.clientHeight - modalWindow.offsetHeight) / 2) + 'px';
    }

    this.destroy = function () {
        windowLayout.parentNode.removeChild(windowLayout);

        this.onCloseEvent();
    };

    this.show = function () {
        overlay.style.display = modalWindow.style.display = 'block';

        resetAlign();

        return this;
    };

    this.setContent = function (content) {
        if (content.constructor === String) {
            modalContent.innerHTML = content;
        } else {
            modalContent.appendChild(content);
        }

        resetAlign();

        return this;
    };

    // If you want to customize something you can use these functions

    this.getOverlayElement = function () {
        return overlay;
    };

    this.getModalWindowElement = function () {
        return modalWindow;
    };

    this.getModalContentElement = function () {
        return modalContent;
    };

    // Start of "constructor"

    var windowLayout = document.createElement('div');

    overlay.style.display = modalWindow.style.display = 'none';

    overlay.className = 'modal-overlay';
    modalWindow.className = 'modal-window';
    modalContent.className = 'modal-content';

    this.setContent(content);

    modalWindow.appendChild(modalContent);

    windowLayout.appendChild(overlay);
    windowLayout.appendChild(modalWindow);

    document.body.appendChild(windowLayout);

    window.addEventListener('resize', resetAlign);

    overlay.onclick = (function (self) {
        return function () {
            self.destroy();
        };
    })(this);
}