<template>
  <div>
    <h1>借助border-style:double实现等宽图形效果：三道杠</h1>

    <Example :html="html" :css="css">
      <div class="icon-menu"></div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.icon-menu {
  width: 120px;
  height: 20px;
  border-top: 60px double;
  border-bottom: 20px solid;
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
