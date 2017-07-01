# What is this?

ModalWindow is an open source JavaScript-library that provides a simple interface of working with modal windows. It has no dependencies and it uses pure JavaScript only.

# License

Proceed to LICENSE file.

# A simple usage example

```js
new ModalWindow('Hello, world!').show();
```

# Customizing a window

All ModalWindows' objects have following properties that contain DOM-elements:

* `layout` contains all the elements listed below
* `overlay` makes the background behind a window gray by default
* `window` defines the window's appearance
* `content` defines the window's content appearance

For example, in order to increase your window's font size, you can do following: 

```js
var modal = new ModalWindow('Wow. These are big letters.');

modal.content.style.fontSize = '35px';

modal.show();
```

# Locking and unlocking windows

```js
var modal = new ModalWindow("It is impossible to close this window so don't even try to");

modal.lock();

//modal.unlock();
```

# Hiding and showing

```js
var modal = new ModalWindow('Can you see me?');

modal.hide();

//modal.show();
```

# Making windows movable and vice versa

You can make a window movable either setting ModalWindow's second parameter to `true` or by calling the `allowMoving` method.

```js
//var modal = new ModalWindow("It seems like you can move me", true);

var modal = new ModalWindow("It seems like you can move me");

modal.allowMoving();

//modal.denyMoving();
```

# Setting a callback

At the moment, the only event you can set a callback on is `onClose` which triggers when the window is closed.

```js
var modal = new ModalWindow('An alert will be shown after closing this window.');

modal.onClose(function () {
    alert('Ta-da!');
});
```

# Where to see it in action?

[Here](http://razip.github.io/ModalWindow/).