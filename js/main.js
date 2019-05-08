!function () {

  let css1 = `
  /* 
  * 面试官你好，我是陈秋钿
  * 只用文字作做我介绍太单调了
  * 我就用代码来介绍吧
  * 首先准备一些样式
  */
 
 *{
   transition: all 1s;
 }
 html{
   background: #eee;
 }
 #code-wrapper {
   border: 1px solid #aaa;
   padding: 16px;
 }
 
 /* 我需要一点代码高亮 */
 
 .token.selector {color: #690;}
 .token.comment {color: slategray;}
 .token.property {color: #905;}
 
 /* 加一个呼吸效果 */
 
 #code-wrapper {
  animation: breath 1s infinite alternate-reverse;
}
 
 /* 现在正式开始 */
 
 /* 我需要一张白纸 */
 #code-wrapper {
   width:49%;
   display:inline-block;
 }
#paper {
  display:inline-block;
  padding:10px;
}
 
 /* 于是我就可以在白纸上写字了，请看右边 */
 `


  var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`

  let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

  let md = `
# 自我介绍

我叫 陈秋钿
1996 年 03 月出生
广东工业大学 毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1. XXX 轮播
2. 键盘导航
3. canvas 画板

# 联系方式

- QQ 772603532
- Email 772603532@qq.com
- 手机 18813295226

`

  let codeWrap = document.querySelector('#code-wrapper pre#code')
  let styleTag = document.querySelector('#styleTag')
  let paper = document.querySelector('#paper pre')

  n = 0
  writeCss('', css1, () => {
    writeMarkdown('', md, () => {
      writeCss(css1, css2, () => {
        paper.innerHTML = marked(paper.innerHTML)
        paper.scrollTop = paper.scrollHeight
        writeCss(css1 + css2, css3)
      })
    })
  })


  function writeCss(preCode, code, fn) {
    let n = 0
    let timeId = setInterval(() => {
      codeWrap.innerHTML = Prism.highlight(preCode + code.substring(0, n), Prism.languages.css)
      codeWrap.scrollTop = codeWrap.scrollHeight
      styleTag.innerHTML = preCode + code.substring(0, n)
      n++
      if (n > code.length) {
        window.clearInterval(timeId)
        fn && fn.call()
      }
    }, 50)
  }
  function writeMarkdown(preMd, md, fn) {
    n = 0
    let timeId = setInterval(function () {
      paper.innerHTML = preMd + md.substring(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n > md.length) {
        window.clearInterval(timeId)
        fn && fn.call()
      }
    }, 50)
  }


}()
