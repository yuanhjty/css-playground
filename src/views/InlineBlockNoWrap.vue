<template>
  <div>
    <h1>Inline Block No Wrap</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css">
      <div class="box">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.box {
  overflow: auto;
  white-space: nowrap;
}

.item {
  display: inline-block;
  background: #08ffc8;
  width: 30%;
  height: 100px;
}

.item:not(:last-child) {
  margin-right: 10px;
}
</style>

/************************/
<script>
const docHtml = "{{html}}";
const docCss = "{{css}}";

export default {
  name: "InlineBlockNoWrap",
  data: () => ({
    html: docHtml.trim(),
    css: docCss.trim()
  })
};
</script>
