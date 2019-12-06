<template>
  <div>
    <h1>用透明border扩大点击区域</h1>
    <p>
      如果图标是使用工具生成的，那么background-position就是限定死了的，
      如果用padding撑开间距，就会遇到定位不准的问题，使用透明border不存在这个问题。
    </p>

    <Example :html="html" :css="css">
      <!-- write your htmls here -->
    </Example>
  </div>
</template>

/************************/
<style scoped>
/* write your css here */
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
