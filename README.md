# What is this?

ModalWindow is an open source JavaScript-library that provides a simple interface of working with modal windows. It has no dependencies and it uses pure JavaScript only.

# License?

Please, read LICENSE file.

# A simple usage example

```js
new ModalWindow('Hello').show()
```

# How do I customize my window?

All ModalWindows' objects have following properties that contain DOM-elements:

* layout - contains other elements
* overlay - by default, makes the background behind a window black
* window - defines the window's appearance
* content - defines the window's content appearance

For example, in order to increase your window's font size, you can do following: 

```js
var modal = new ModalWindow('Wow. These are big letters.');

modal.content.style.fontSize = '35px';

modal.show();
```

# How do I lock (and unlock) a window?

```js
var modal = new ModalWindow("It is impossible to close this window so don't even try to");

modal.lock();

modal.unlock();
```

# Where can I see it in action?

[Here](http://razip.github.io/ModalWindow/).