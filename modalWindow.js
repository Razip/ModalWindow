function ModalWindow(content) {
    this.locked = false;

    // it contains all of the elements of a ModalWindow
    this.layout = document.createElement('div');

    this.overlay = document.createElement('div');

    this.overlay.className = 'modal-overlay';

    this.window = document.createElement('div');

    this.window.className = 'modal-window';

    this.content = document.createElement('div');

    this.content.className = 'modal-content';

    this.window.appendChild(this.content);

    this.layout.appendChild(this.overlay);

    this.layout.appendChild(this.window);

    document.body.appendChild(this.layout);

    this.setContent(content);

    var context = this;

    window.addEventListener('resize', function () {
        context.resetPosition();
    });

    this.overlay.addEventListener('click', function () {
        context.close();
    });
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

ModalWindow.prototype.resetPosition = function () {
    var left = Math.round((document.documentElement.clientWidth - this.window.offsetWidth) / 2);

    var top = Math.round((document.documentElement.clientHeight - this.window.offsetHeight) / 2);

    this.window.style.left = left + 'px';

    this.window.style.top = top + 'px';
};

ModalWindow.prototype.setContent = function (content) {
    this.content.innerHTML = content;

    this.resetPosition();
};

ModalWindow.prototype.onClose = function () {
};