# What it is?

ModalWindow is a JavaScript OpenSource library provides easy interface to work with modal windows (written by Dmitriy Buyanov). It has no dependencies and use pure JavaScript.

# What the license is?

Read LICENSE file.

# Simple using example

```js
new ModalWindow('Hello').show()
```

# How to customize my window?

All ModalWindows have following fields:

* layout - contains all the window's DOM-elements inside
* overlay - makes black (by default) background behind a window
* window - defines the window's appearance
* content - defines the window's content appearance

For example you want characters to be big at your window.

```js
var modal = new ModalWindow('These are big letters.');

modal.contentElement.style.fontSize = '35px';

modal.show();
```

# How to lock (and unlock) a window?

```js
var window = new ModalWindow('It is impossible to close this window.');

window.lock();

window.unlock();
```

# Where can I see examples?

[There](http://razip.github.io/ModalWindow/).