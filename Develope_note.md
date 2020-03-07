# Develope note

## vue项目每30秒刷新1次接口的实现方式

- use some timer function
  - setInterval(function(){}, milliseconds) -> (会不停的调用函数)
  - setTimeout(function(){}, milliseconds) -> (只执行函数一次)
- Why not just directly use setInterval(): [WHY](https://segmentfault.com/a/1190000017246671)
- A better solution: 運用Vue的狀態stage[Link](https://blog.csdn.net/wanghui374/article/details/97911938)

> Maybe??

- Why setInterval executed only once?: [WHY](https://stackoverflow.com/questions/7746505/js-setinterval-executes-only-once)


## Reference

[Navigator](https://www.w3schools.com/css/css_navbar.asp)
[Color picker](https://www.w3schools.com/colors/colors_picker.asp)
[CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
[CSS flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

