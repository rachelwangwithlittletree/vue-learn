; 
var moduleA = (function () {
  var obj = {}
  var name = '小明'
  var age = 18
  function sum(num1, num2) {
    return num1 + num2;
  }
  var flag = true
  if (flag) {
    console.log(sum(10, 20))
  }
  obj.name = name 
  obj.flag = flag
  obj.sum = sum 
  return obj
})()

var flag = true
function sum (num1, num2){
  return num1 + num2
}
//以下是commonjs里导出模块
// module.exports = {
//   flag,
//   sum
// }