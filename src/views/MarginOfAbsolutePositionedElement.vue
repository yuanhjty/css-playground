<template>
  <div>
    <h1>绝对定位元素的 margin</h1>
    <p>
      绝对定位元素的 top/bottom/left/height 基于
      <b>自身的 margin box</b>和
      <b>定位父亲元素的 padding box</b>
      计算。
    </p>
    <Example :html="html" :css="css">
      <div class="container">
        container
        <div class="child">带 margin 的绝对定位元素</div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.container {
  position: relative;
  border: solid 5px #e7e7e7;
  padding: 10px;
  height: 80px;
}

.child {
  position: absolute;
  margin: 20px;
  background: #ccc;
  left: 0;
  right: 0;
  bottom: 0;
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
