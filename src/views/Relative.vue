<template>
  <div>
    <h1>relative</h1>

    <Example :html="html" :css="css">
      <h4>
        relative元素的top/bottom/left/right的百分比值是相对于自身包含块的高度和宽度计算的
      </h4>
      <div class="box outline">
        <div class="relative">relative,top:50%,left:50%</div>
      </div>

      <h4>
        <li>relative定位偏移时一般不会影响周围元素的布局</li>
        <li>relative元素的层叠顺序高于普通元素</li>
        <li>
          relative的top/bottom同时存在或left/right同时存在时，在文档流上游方向上的属性起作用
        </li>
      </h4>
      <div class="box-1 outline">
        <div class="relative">凡所有相</div>
        皆是虚妄
      </div>

      <h4>relative的最小化影响原则</h4>
      <i>relative常见用法</i>
      <div class="outline relative">
        <i class="top-right">💐</i>
        <p>色即是空，空即是色</p>
        <p>色不异空，空不异色</p>
      </div>
      <i>relative最小化影响用法</i>
      <div class="outline">
        <div class="relative">
          <i class="top-right">💐</i>
        </div>
        <p>色即是空，空即是色</p>
        <p>色不异空，空不异色</p>
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
  height: 200px;
}

.box > div {
  width: 200px;
  height: 100px;
  background: #cbe86b;
  top: 50%;
  left: 50%;
}

.box-1 > div {
  top: 15px;
  left: 30px;
  background: #ccbbee;
}

.relative {
  position: relative;
}

.top-right {
  position: absolute;
  right: 0;
  top: 0;
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
