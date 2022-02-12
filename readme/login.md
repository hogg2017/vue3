<!--
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2022-02-12 14:54:09
 * @Description:登陆合集
-->

```css
input {
  /*
    将input 设置为父容器的80% 可以去试配一些低像素比的设备，防止你放置在两侧的icon被挤下来
    */
  width: 80%;
  /*
    给input框背景设置成透明是一个好习惯
    */
  background: transparent;
}
.className {
  position: relative;
  /*
    我注意到有很多的类都会加上这行代码；
    relative
    该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。
    它和static的区别是它可以通过位置关键字调节自身位置
    */
}
```
