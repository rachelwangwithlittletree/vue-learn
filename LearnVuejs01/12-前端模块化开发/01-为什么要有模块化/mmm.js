(function(){
  console.log(moduleA.name)
  if(moduleA.flag){
    console.log('我的小名，flag是true')
  }
  
})()

//commonjs导入模块
// var {flag, sum} = require('./aaa.js')