document.getElementById('simple').onclick = function () {
    new ModalWindow('Now you can close it by clicking off the window.');
};

document.getElementById('countdown').onclick = function () {
    var window = new ModalWindow('The countdown will start in one second.');

    window.lock();

    var i = 10;

    var interval = setInterval(function () {
        if (i > 0) {
            window.setContent(i + ' second(s).');

            i--;
        } else {
            window.setContent("Time's up. You can close this window now.");

            window.unlock();

            clearInterval(interval);
        }
    }, 1000);
};

document.getElementById('callback').onclick = function() {
    new ModalWindow('An alert will be shown after closing this window.').onClose(function() {
        alert('See?');
    });
};

document.getElementById('movable').onclick = function() {
    new ModalWindow('Drag and drop this window.', true);
};