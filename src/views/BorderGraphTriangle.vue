<template>
  <div>
    <h1>用border属性绘制三角形</h1>

    <Example :html="html" :css="css">
      <div class="triangle down"></div>
      <div class="triangle up"></div>
      <div class="triangle right-angle"></div>
      <div class="triangle oblique"></div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.triangle {
  display: inline-block;
  margin-right: 20px;
  width: 0;
  border-style: solid;
}

.down {
  border-width: 20px 30px 0 30px;
  border-color: #6abe83 transparent transparent transparent;
}

.up {
  border-width: 0 20px 30px 20px;
  border-color: transparent transparent #6abe83 transparent;
}

.right-angle {
  border-width: 30px 0 0 40px;
  border-color: transparent transparent transparent #6abe83;
}

.oblique {
  position: relative;
  border-width: 0 0 30px 40px;
  border-color: transparent transparent #6abe83 transparent;
}

.oblique::after {
  width: 0;
  border-style: solid;
  border-width: 0 0 10px 40px;
  border-color: transparent transparent #fff transparent;
  content: "";
  position: absolute;
  bottom: -30px;
  left: -40px;
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
