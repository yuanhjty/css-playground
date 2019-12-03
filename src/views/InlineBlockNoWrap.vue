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

<script>
const html = /*html*/ `
<div class="box">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
`;

const docsCss = /*css*/ `
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
`;

export default {
  name: "InlineBlockNoWrap",
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
