# What is it?

ModalWindow is a JavaScript OpenSource library provides easy interface to work with modal windows (written by Dmitriy Buyanov). It has no dependencies and use pure JavaScript.

# What is the license?

Read LICENSE file.

# Simple using example

```js
new ModalWindow('Hello').show()
```

# How to customize my window?

All ModalWindows have following fields contain DOM-objects:

* layout - contains other elements
* overlay - makes black (by default) background behind a window
* window - defines the window's appearance
* content - defines the window's content appearance

For example you want characters to be big at your window.

```js
var modal = new ModalWindow('These are big letters.');

modal.content.style.fontSize = '35px';

modal.show();
```

# How to lock (and unlock) a window?

```js
var modal = new ModalWindow('It is impossible to close this window.');

modal.lock();

modal.unlock();
```

# Where can I see examples?

[There](http://razip.github.io/ModalWindow/).