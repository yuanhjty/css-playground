<template>
  <div>
    <h1>绝对定位</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style>
.absolute-position-container {
  position: relative;
  outline: solid 1px;
  padding: 10px;
  height: 80px;
}

.absolute-position-child {
  position: absolute;
  margin: 20px;
  background: #ccc;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

<script>
const html = /*html*/ `
<div class="absolute-position-container">
  container
  <div class="absolute-position-child">带 margin 的绝对定位元素</div>
</div>
`;

const docsCss = /*css*/ `
.absolute-position-container {
  position: relative;
  outline: solid 1px;
  padding: 10px;
  height: 80px;
}

.absolute-position-child {
  position: absolute;
  margin: 20px;
  background: #ccc;
  left: 0;
  right: 0;
  bottom: 0;
}
`;

export default {
  name: "AbsolutePosition",
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
