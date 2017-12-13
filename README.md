# markdown-it-emoji-mart

> Plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser, adding emoji & emoticon syntax support.

> Support emojis from [emoji-mart](https://github.com/missive/emoji-mart) Emoji Picker.

__v1.+ requires `markdown-it` v4.+, see changelog.__

Two versions:

- __Full__ (default), with all github supported emojis.
- __Light__, with only well-supported unicode emojis and reduced size.

Also supports emoticons __shortcuts__ like `:)`, `:-(`, and others. See the full list in the link above.


## Install

node.js, browser:

```bash
npm install markdown-it-emoji-mart --save
bower install markdown-it-emoji-mart --save
```

## Use

### init

```js
var md = require('markdown-it')();
var emoji = require('markdown-it-emoji-mart');
// Or for light version
// var emoji = require('markdown-it-emoji-mart/light');

md.use(emoji [, options]);
```

Options are not mandatory:

- __defs__ (Object) - rewrite available emoji definitions
  - example: `{ name1: char1, name2: char2, ... }`
- __enabled__ (Array) - disable all emojis except whitelisted
- __shortcuts__ (Object) - rewrite default shortcuts
  - example: `{ "smile": [ ":)", ":-)" ], "laughing": ":D" }`
- __native__ (Boolean) - WIP, default false. When true, it will parse unicode emojis.

_Differences in browser._ If you load the script directly into the page without
using a package system, the module will add itself globally with the name `markdownitEmoji`.
Init code will look a bit different in this case:

```js
var md = window.markdownit().use(window.markdownitEmoji);
```


### change output

By default, emojis are rendered as appropriate unicode chars. But you can change
the renderer function as you wish.

Render as span blocks (for example, to use a custom iconic font):

```js
// ...
// initialize

md.renderer.rules.emoji = function(token, idx) {
  return `<span class="emoji emoji_${token[idx].markup}">${token[idx].content}</span>`;
};
```

```css
.emoji {
  font-size: 1.2em;
}
```

Or use [twemoji](https://github.com/twitter/twemoji):

```js
// ...
// initialize

var twemoji = require('twemoji')

md.renderer.rules.emoji = function(token, idx) {
  return twemoji.parse(token[idx].content);
};
```

__NB 1__. Read [twemoji docs](https://github.com/twitter/twemoji#string-parsing)!
In case you need more options to change image size & type.

__NB 2__. When using twemoji you can make image height match the line height with this
style:

```css
.emoji {
  height: 1.2em;
}
```
