<template>
  <div>
    <h1>Title</h1>
    <p>Descriptions...</p>

    <Example :html="html" :css="css">
      <div class="icon-menu"></div>
      <span class="padding"></span>
      <div class="icon-dot"></div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.icon-menu {
  display: inline-block;
  width: 100px;
  height: 10px;
  padding: 35px 0;
  border-top: 10px solid;
  border-bottom: 10px solid;
  background-color: currentColor;
  background-clip: content-box;
}

.icon-dot {
  display: inline-block;
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 50%;
  border: 10px solid;
  background-color: currentColor;
  background-clip: content-box;
}

.padding {
  padding: 0 20px;
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
