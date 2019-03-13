class H4x0r {
  constructor(target, opts) {
    this.target = target;
    opts = opts || {};

    this.cursorSpeed = opts.cursorSpeed || 0.25;
    this.showCreds = opts.showCreds || true;

    this.username = opts.username || "h4x0r";
    this.hostname = opts.hostname || "host";
    this.path = opts.path || "~";
    this.mode = opts.mode || "$";

    this.setup();
  }

  setup() {
    let style = document.createElement('style');
    style.type = 'text/css';

    let content = `
      .h4x0r-terminal {
        font-family: monospace;
        background-color: #151515;
        color: #fff;
        padding: 15px;
      }

      .h4x0r-line {
        user-select: none;
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

  display(str) {
    let line = document.createElement('div'),
        output = document.createElement('div');
    line.classList.add('h4x0r-line');
    output.classList.add('h4x0r-output');

    output.innerHTML = str;
    line.appendChild(output);

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

    line.appendChild(output);
    line.appendChild(input);

    line.onclick = () => input.focus();
    input.onkeyup = e => {
      if (e.keyCode === 13) {
        input.contentEditable = false;
        input.innerHTML = input.innerHTML.replace(/<br>/g, '');
        (cb || function(){})(input.innerHTML.replace(/&nbsp;/g, '').trim());
      }
    };

    this.target.appendChild(line);
  }

  close() {
    this.display('Press &lt;RETURN&gt; to close this console ... ');
  }
}
