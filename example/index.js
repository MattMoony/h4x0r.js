let target = document.getElementById('target');
let options = {
};
let h4x0r = new H4x0r(target, options);

h4x0r.display('Hello World!');
h4x0r.getInput("What's 2+2?", ans => {
  console.log(ans);
  h4x0r.display(`Your answer was "${ans}" ... `);
  h4x0r.close();
});
