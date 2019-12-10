<template>
  <div>
    <h1>Title</h1>
    <p>Descriptions...</p>

    <Example :html="html" :css="css">
      <!-- write your htmls here -->
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
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
