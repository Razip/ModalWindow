/*
    Author: Dmitriy Buyanov
    License: MIT
 */

function ModalWindow (content) {
    this.locked = false;

    this.layout = document.createElement('div');

    this.overlay = document.createElement('div');

    this.window = document.createElement('div');

    this.content = document.createElement('div');

    var context = this;

    (function () {
        context.layout.style.display = 'none';

        context.overlay.className = 'modal-overlay';

        context.window.className = 'modal-window';

        context.content.className = 'modal-content';

        context.window.appendChild(context.content);

        context.layout.appendChild(context.overlay);

        context.layout.appendChild(context.window);

        document.body.appendChild(context.layout);

        context.setContent(content);

        window.addEventListener('resize', function () {
            context.resetPosition();
        });

        context.overlay.addEventListener('click', function () {
            context.close();
        });
    })();
}

ModalWindow.prototype.show = function () {
    this.layout.style.display = 'block';

    this.resetPosition();

    return this;
};

ModalWindow.prototype.hide = function () {
    this.layout.style.display = 'none';

    return this;
};

ModalWindow.prototype.lock = function () {
    this.locked = true;

    return this;
};

ModalWindow.prototype.unlock = function () {
    this.locked = false;

    return this;
};

ModalWindow.prototype.close = function () {
    if (!this.locked) {
        this.layout.parentNode.removeChild(this.layout);

        this.onClose();
    }
};

ModalWindow.prototype.resetPosition = function() {
    var left = Math.round((document.documentElement.clientWidth - this.window.offsetWidth) / 2);

    var top = Math.round((document.documentElement.clientHeight - this.window.offsetHeight) / 2);

    this.window.style.left = left + 'px';

    this.window.style.top = top + 'px';
};

ModalWindow.prototype.setContent = function (content) {
    if (content.constructor === String || content.constructor === Number) {
        this.content.innerHTML = content;
    } else {
        this.content.appendChild(content);
    }
};

ModalWindow.prototype.onClose = function () {};