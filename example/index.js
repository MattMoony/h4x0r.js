let target = document.getElementById('target');
let options = {
  showCreds: true,
  inputNextLine: false,
};
let h4x0r = new H4x0r(target, options);

h4x0r.display(' -- W3LC0M3 T0 1337 H4X0R.J5 -- ',
  {center: true, heading: true, noCreds: true,});
// h4x0r.getInput("Ready for the &copy; Cisco Disco? [y/n] ", ans => {
//   if (ans.toLowerCase() === 'y') {
//     h4x0r.ciscoDisco();
//     h4x0r.getInput("Press enter to stop ... ", () => h4x0r.close());
//   } else {
//     h4x0r.display('Ok, bye then!');
//     h4x0r.close();
//   }
// });
