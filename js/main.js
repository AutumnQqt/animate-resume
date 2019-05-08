!function(){
  let code = `
  面试官你好，我叫陈秋钿，
  只用文字作做我介绍太单调了
  我就用代码来介绍吧
  首先准备一些样式`
  var cssCode = `
  *{
    transition: all 1s;
  }
  html{
    background: #eee;
  }
  #code{
    border: 1px solid #aaa;
    padding: 16px;
  }
  `
  let codeDiv = document.createElement('pre')
  let codeWrapper = document.querySelector('#code-wrapper')
  let style = document.querySelector('#style')

  codeWrapper.appendChild(codeDiv)
  n = 0
  var timeId = setInterval(function(){
    codeDiv.innerText = code.slice(0,n)
    n++
    if(n > code.length){
      window.clearInterval(timeId)
      n = 0
      var timeIdCss = setInterval(function(){
        style.innerText = cssCode.substring(0,n)
        n++
      },10)
    }
  },100)
}()