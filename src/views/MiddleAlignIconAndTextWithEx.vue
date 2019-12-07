<template>
  <div>
    <h1>使用ex单位居中对齐文字和图标</h1>
    <p>使用ex单位和默认的baseline对齐方式实现文字和图标的居中对齐</p>

    <Example :html="html" :css="css">
      <p class="line">
        xxx
        <i class="icon-arrow"></i>
      </p>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.line {
  font-size: 20px;
}

.icon-arrow {
  display: inline-block;
  background: url("~@/assets/imgs/arrow-down.jpg") no-repeat center;
  background-size: contain;
  height: 1ex;
  width: 20px;
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
