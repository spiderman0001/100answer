function a() {
  var b = 1;
  return function c() {
    b++;
    console.log(b);
  }
}

! function () {
  var f = a()
  f();
  f();
}()