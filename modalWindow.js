/*
 Author: Dmitriy Buyanov
 License: MIT
 */

function ModalWindow(content) {
    this.windowLayout = document.createElement('div');
    this.overlay = document.createElement('div');
    this.modalWindow = document.createElement('div');
    this.modalContent = document.createElement('div');

    // You can use several listeners for the same event
    // {eventName: [firstListener, secondListener]}
    this.events = {};

    this.blocked = false;

    this.hide();

    this.overlay.className = 'modal-overlay';
    this.modalWindow.className = 'modal-window';
    this.modalContent.className = 'modal-content';

    this.setContent(content);

    this.modalWindow.appendChild(this.modalContent);

    this.windowLayout.appendChild(this.overlay);
    this.windowLayout.appendChild(this.modalWindow);

    document.body.appendChild(this.windowLayout);

    window.addEventListener('resize', this.resetPosition());

    this.overlay.onclick = (function (self) {
        return function () {
            self.close();
        };
    })(this);
}

ModalWindow.prototype = {
    // An interface of adding listeners
    addEventListener: function (event, listener) {
        if (event in this.events) {
            this.events[event].push(listener);
        } else {
            this.events[event] = [listener];
        }
    },

    // An interface of an event execution
    executeEvent: function (event) {
        if (event in this.events) {
            for (var i = 0; i < this.events[event].length; i++) {
                this.events[event][i]();
            }
        }
    },

    resetPosition: function () {
        this.modalWindow.style.left = Math.round((document.documentElement.clientWidth - this.modalWindow.offsetWidth) / 2) + 'px';
        this.modalWindow.style.top = Math.round((document.documentElement.clientHeight - this.modalWindow.offsetHeight) / 2) + 'px';
    },

    setContent: function (content) {
        if (content.constructor === String) {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.appendChild(content);
        }

        // When the size of a window changes we have to reset the position of a window
        // because its width and height may changes
        this.resetPosition();

        return this;
    },

    show: function () {
        this.windowLayout.style.display = 'block';

        this.resetPosition();

        return this;
    },

    hide: function () {
        this.windowLayout.style.display = 'none';
    },

    close: function () {
        if (this.blocked) {
            return;
        }

        this.windowLayout.parentNode.removeChild(this.windowLayout);

        this.executeEvent('close');
    },

    block: function () {
        this.blocked = true;

        return this;
    },

    unblock: function () {
        this.blocked = false;

        return this;
    },

    // If you want to customize something you can use these getters-interfaces

    getWindowLayoutElement: function () {
        return this.windowLayout;
    },

    getOverlayElement: function () {
        return this.overlay;
    },

    getModalWindowElement: function () {
        return this.modalWindow;
    },

    getModalContentElement: function () {
        return this.modalContent;
    }
};