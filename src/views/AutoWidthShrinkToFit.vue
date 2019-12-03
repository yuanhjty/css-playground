<template>
  <div>
    <h1>Auto Width Shrink To Fit</h1>
    <p>文字少的时候居中，超过一行后左对齐</p>
    <Example :html="html" :css="css">
      <div class="box">
        <div class="content">
          居中显示
        </div>
      </div>
      <div class="box">
        <div class="content">
          文字内容，超过一行时左对齐，超过一行时左对齐，超过一行时左对齐，超过一行时左对齐，超过一行时左对齐，
          超过一行时左对齐，超过一行时左对齐，超过一行时左对齐。
        </div>
      </div>
    </Example>
  </div>
</template>

<style scoped>
.box {
  text-align: center;
  padding: 10px 10px;
  background: #f5e5e5;
  margin-bottom: 10px;
}

.content {
  display: inline-block;
  text-align: left;
}
</style>

<script>
const html = /*html*/ `
<div class="box">
  <div class="content">居中显示</div>
</div>
<div class="box">
  <div class="content">文字内容，超过一行时左对齐...</div>
</div>
`;

const docsCss = /*css*/ `
.box {
  text-align: center;
  padding: 10px 10px;
  background: #f5e5e5;
  margin-bottom: 10px;
}

.content {
  display: inline-block;
  text-align: left;
}
`;

export default {
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
