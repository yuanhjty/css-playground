<template>
  <div>
    <h1>Inline Block No Wrap</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style>
.inline-block-no-wrap-box {
  overflow: auto;
  white-space: nowrap;
}

.inline-block-no-wrap-item {
  display: inline-block;
  background: #08ffc8;
  width: 30%;
  height: 100px;
}

.inline-block-no-wrap-item:not(:last-child) {
  margin-right: 10px;
}
</style>

<script>
const html = /*html*/ `
<div class="inline-block-no-wrap-box">
  <div class="inline-block-no-wrap-item"></div>
  <div class="inline-block-no-wrap-item"></div>
  <div class="inline-block-no-wrap-item"></div>
  <div class="inline-block-no-wrap-item"></div>
  <div class="inline-block-no-wrap-item"></div>
</div>
`;

const docsCss = /*css*/ `
.inline-block-no-wrap-box {
  overflow: auto;
  white-space: nowrap;
}

.inline-block-no-wrap-item {
  display: inline-block;
  background: #08ffc8;
  width: 30%;
  height: 100px;
}

.inline-block-no-wrap-item:not(:last-child) {
  margin-right: 10px;
}
`;

export default {
  name: "InlineBlockNoWrap",
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
