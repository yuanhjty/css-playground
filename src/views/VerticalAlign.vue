<template>
  <div>
    <h1>vertical-align</h1>
    <p>
      vertical-align起作用的前提是，只能用于display计算值为inline、inline-block、inline-table
      及table-cell的元素上
    </p>
    <p>
      有一些CSS属性值会在背后默默地改变元素display属性的计算值，比如浮动和绝对定位会让元素块状化。因此，
      { float: left; vertical-align: center } 和 { position: absolute;
      vertical-align: center } 中的vertical-align无效
    </p>

    <Example :html="html" :css="css">
      <h4>
        要通过在图片上设置vertical-align实现图片垂直居中，关键是要在块级容器上设置合适的line-height
      </h4>
      <div class="box outline">
        <img src="https://placekitten.com/200/200" />
      </div>

      <h4>
        容器中图片底部留有间隙的问题，原因是strut节点及默认的vertical-align:baseline导致的。解决方案如下：
      </h4>
      <ul>
        <li>图片块状化</li>
        <li>容器line-height设为0</li>
        <li>容器font-size设为0</li>
        <li>图片vertical-align设置为top/bottom/middle</li>
      </ul>
      <div class="outline margin">
        <img src="https://placekitten.com/200/200" />
      </div>
      <div class="box-1 outline margin">
        <img src="https://placekitten.com/200/200" />
      </div>
      <div class="box-2 outline margin">
        <img src="https://placekitten.com/200/200" />
      </div>
      <div class="box-3 outline margin">
        <img src="https://placekitten.com/200/200" />
      </div>
      <div class="box-4 outline margin">
        <img src="https://placekitten.com/200/200" />
      </div>

      <h4>
        text-align:justify + item等宽空元素占位
        实现列表两端对齐，items不足的最后一行左对齐
      </h4>
      <p>
        list底部有间隙，因为最后一个空的inline-block占位符产生了一个行框，行框高度为strut节点的高度
      </p>
      <div class="list outline margin">
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <i class="justify-fix outline"></i>
        <i class="justify-fix outline"></i>
        <i class="justify-fix outline"></i>
      </div>
      <p>
        list的line-height设为0后，底部依然有间隙，因为justify-fix与strut默认baseline对齐，
        baseline不在字体垂直方向中分上，如果设置justify-fix的vertical-align为middle，间隙也不会
        完全消除，因为字体的中线也不在字体的垂直方向中分线上。此时如果设置justify-fix的vertical-align
        为bottom/top，即可消除间隙。
      </p>
      <div class="list outline margin line-height-0">
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <i class="justify-fix outline"></i>
        <i class="justify-fix outline"></i>
        <i class="justify-fix outline"></i>
      </div>
      <div class="list outline margin line-height-0">
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <i class="justify-fix outline vertercal-align-bottom"></i>
        <i class="justify-fix outline vertercal-align-bottom"></i>
        <i class="justify-fix outline vertercal-align-bottom"></i>
      </div>
      <p>
        将list的font-size设为0，让strut节点的baseline/top/bottom/middle跟行框上下边界处于同一位置
      </p>
      <div class="list outline margin font-size-0">
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <img src="https://placekitten.com/100/100" />
        <i class="justify-fix outline"></i>
        <i class="justify-fix outline"></i>
        <i class="justify-fix outline"></i>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.box {
  height: 256px;
  line-height: 256px; /* 关键CSS属性 */
}

.box > img {
  height: 200px;
  vertical-align: middle;
}

.margin {
  margin: 20px 0;
}

.box-1 > img {
  display: block;
}

.box-2 {
  line-height: 0;
}

.box-3 {
  font-size: 0;
}

.box-4 > img {
  vertical-align: middle;
}

.list {
  width: 300px;
  overflow: hidden;
  text-align: justify;
}

.list > img {
  width: 100px;
}

.justify-fix {
  display: inline-block;
  width: 100px;
}

.line-height-0 {
  line-height: 0;
}

.vertercal-align-bottom {
  vertical-align: bottom;
}

.font-size-0 {
  font-size: 0;
}
</style>

/************************/
<script>
const docHtml = "{{html}}";
const docCss = "{{css}}";

export default {
  data: () => ({
    html: docHtml.trim(),
    css: docCss.trim()
  })
};
</script>
