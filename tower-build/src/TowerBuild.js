function towerBuilder(n) {
  var str = "*";
  var space = " ";
  var arr = [];
  var counter = 0;
  for (i = n; i>0; i--) {
    arr.unshift(space.repeat(counter) + str.repeat(2*i - 1) + space.repeat(counter));
    counter++;
  }
  return arr;
}
