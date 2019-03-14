![GitHub release](https://img.shields.io/github/release/MattMoony/h4x0r.js.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/MattMoony/h4x0r.js.svg) ![GitHub All Releases](https://img.shields.io/github/downloads/MattMoony/h4x0r.js/total.svg) ![GitHub repo size in bytes](https://img.shields.io/github/repo-size/MattMoony/h4x0r.js.svg) ![GitHub](https://img.shields.io/github/license/MattMoony/h4x0r.js.svg)

# H4x0r.js
_The ultimate 1337 h4x0r JS-Terminal_

---

Display strings, or let the user enter values. H4x0r.js is the _leet_ way of letting the user interact with your webpage.
Not only is it engaging and fun, but you also have the ability to customize the styling yourself, in order for it to perfectly go along with the rest of your site.

## Installation

#### Script tag

```html
<script src='https://cdn.jsdelivr.net/gh/MattMoony/h4x0r.js@master/src/h4x0r.js'></script>
```

## Setup

#### Easy way

```javascript
let target = document.getElementById('<target-id>');
let h4x0r = new H4x0r(target);
```

#### Advanced way

```javascript
let target = document.getElementById('<target-id>');
let options = {
  showCreds: true,
  inputNextLine: false,

  username: "MattMoony",
  hostname: "github.com",
  path: "/h4x0r.js/src",
  mode: "$",

  fontColor: "#fff",
  backgroundColor: "#151515",
};

let h4x0r = new H4x0r(target, options);
```

## Usage

#### Display

To print text to the _console_ use the `.display(msg)` function. It will print the message you passed to the target console.

```javascript
// ...

h4x0r.display('Hello World!');
h4x0r.display('How\'re you doing?');

// ...
```

![Example 0](./media/ex_0.jpg)

#### Display (advanced)

You can also pass further options to the function, using an object like so: `.display(msg, options)`. This will allow you to specify, if the passed message is supposed to be centered, displayed in _heading_ format, etc.

```javascript
// ...

let options = {
  center: true,
  heading: true,
  noCreds: true,
};

h4x0r.display(' -- W3LC0M3 T0 1337 H4X0R.J5 -- ', options);

// ...
```

![Example 2](./media/ex_2.jpg)

#### GetInput

To get _user input_, you should use the `.getInput(question, ans => {})` syntax. The function will display the passed _question_, wait for the user's input and in turn, pass the _answer_ to your callback function.

```javascript
// ...

h4x0r.getInput("What's your name? ", name => {
  // You can do anything with the name here ...
  h4x0r.display(`Welcome ${name}!`);
});

// ...
```

![Example 1](./media/ex_1.gif)

## Conclusion

All of the info above should describe the framework pretty well. However, if you have any questions or suggestions, feel free to contact me on [twitter](https://twitter.com/Matthia23184857)

---

_... Matthias M. (March, 2019)_
