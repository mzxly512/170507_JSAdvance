function fn() {
  var data = 'atguigu'

  function doSomething() {
    console.log('doSomething() '+data)
  }
  function doOtherthing() {
    console.log('doOtherthing() '+data)
  }

  // 向外暴露一些东西
  return {
    doSomething,
    doOtherthing
  }
}