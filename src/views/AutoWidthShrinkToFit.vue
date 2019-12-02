<template>
  <div>
    <h1>Auto Width Shrink To Fit</h1>
    <p>文字少的时候居中，超过一行后左对齐</p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style>
.auto-width-shrink-to-fit-box {
  text-align: center;
  padding: 10px 10px;
  background: #f5e5e5;
  margin-bottom: 10px;
}

.auto-width-shrink-to-fit-content {
  display: inline-block;
  text-align: left;
}
</style>

<script>
const html = /*html*/ `
<div class="auto-width-shrink-to-fit-box">
  <div class="auto-width-shrink-to-fit-content">
    居中显示
  </div>
</div>
<div class="auto-width-shrink-to-fit-box">
  <div class="auto-width-shrink-to-fit-content">
    文字内容，超过一行时左对齐，超过一行时左对齐，超过一行时左对齐，超过一行时左对齐，超过一行时左对齐，
    超过一行时左对齐，超过一行时左对齐，超过一行时左对齐。
  </div>
</div>
`;

const docsCss = /*css*/ `
.auto-width-shrink-to-fit-box {
  text-align: center;
  padding: 10px 10px;
  background: #f5e5e5;
  margin-bottom: 10px;
}

.auto-width-shrink-to-fit-content {
  display: inline-block;
  text-align: left;
}
`;

export default {
  name: "AutoWidthShrinkToFit",
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
