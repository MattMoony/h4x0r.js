class H4x0r {
  constructor(target, opts) {
    this.target = target;
    opts = opts || {};

    this.cursorSpeed = opts.cursorSpeed || 0.25;
    this.showCreds = opts.showCreds !== undefined ? opts.showCreds : true;
    this.inputNextLine = opts.inputNextLine || false;
    this.anime = null;

    this.username = opts.username || "h4x0r";
    this.hostname = opts.hostname || "host";
    this.path = opts.path || "~";
    this.mode = opts.mode || "$";

    this.fontColor = opts.fontColor || '#fff';
    this.backgroundColor = opts.backgroundColor || '#151515';

    this.setup();
  }

  changeColor(c) {
    this.target.style.color = c;
  }

  changeBackgroundColor(c) {
    this.target.style.backgroundColor = c;
  }

  rainbowDisco() {
    let color = 0;

    this.anime = window.setInterval(() => {
      this.target.style.color = `hsl(${color++%361}, 100%, 50%)`;
      this.target.style.backgroundColor = `hsl(${361-((color-1)%361)}, 100%, 50%)`;
    }, 10);
  }

  ciscoDisco() {
    let randRGB = () => Math.floor(Math.random()*255);

    this.anime = window.setInterval(() => {
      this.target.style.color = `rgb(${randRGB()}, ${randRGB()}, ${randRGB()})`;
      this.target.style.backgroundColor = `rgb(${randRGB()}, ${randRGB()}, ${randRGB()})`;
    }, 75);
  }

  stopAnime() {
    window.clearInterval(this.anime);

    this.target.style = '';
  }

  setup() {
    let style = document.createElement('style');
    style.type = 'text/css';

    let content = `
      .h4x0r-terminal {
        font-family: monospace;
        background-color: ${this.backgroundColor};
        color: ${this.fontColor};
        padding: 15px;
      }

      .h4x0r-line {
        user-select: none;
        padding: 1.5px;
      }
      ${this.showCreds ? `.h4x0r-line::before {
        content: '${this.username}@${this.hostname}:${this.path}${this.mode} ';
      }` : ""}

      .h4x0r-output {
        display: inline-block;
        margin-right: 5px;
      }

      .h4x0r-input {
        display: inline;
      }
      .h4x0r-input:focus {
        outline: none;
      }
    `;

    if (style.styleSheet) style.styleSheet.cssText = content;
    else style.appendChild(document.createTextNode(content));
    document.body.appendChild(style);

    this.target.classList.add('h4x0r-terminal');
  }

  display(str, opts) {
    let line = document.createElement('div'),
        output = document.createElement('div');
    line.classList.add('h4x0r-line');
    output.classList.add('h4x0r-output');

    output.innerHTML = str;
    line.appendChild(output);

    opts = opts || {};

    if (opts.center)
      line.style.textAlign = 'center';
    if (opts.heading) {
      line.style.fontSize = '1.25em';
      line.style.fontWeight = 'bold';
    }

    this.target.appendChild(line);
  }

  getInput(msg, cb) {
    let line = document.createElement('div'),
        output = document.createElement('div'),
        input = document.createElement('div');

    line.classList.add('h4x0r-line');

    output.classList.add('h4x0r-output');
    output.innerHTML = msg;

    input.classList.add('h4x0r-input');
    input.contentEditable = true;
    input.focus();

    line.appendChild(output);
    line.appendChild(input);

    line.onclick = () => input.focus();
    this.target.onclick = line.onclick;

    input.onkeyup = e => {
      if (e.keyCode === 13) {
        input.contentEditable = false;
        input.innerHTML = input.innerHTML.replace(/<br>/g, '');
        (cb || function(){})(input.innerHTML.replace(/&nbsp;/g, '').trim());
      }
    };

    this.target.appendChild(line);
    input.focus();
  }

  close() {
    this.stopAnime();
    this.display('Press &lt;RETURN&gt; to close this console ... ');
  }
}
