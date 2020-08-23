function calculate() {
  console.log("Inside complex js");
  var s = 0;
  for (var i = 1; i <= 4000000000; i++) {
    s = s + i;
  }
  postMessage(s);
}
calculate();
