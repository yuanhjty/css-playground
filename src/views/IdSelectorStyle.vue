<template>
  <div>
    <h1>ID选择器样式</h1>
    <p>
      在 CSS 中，ID 样式出现在多个不同的元素上并不会只渲染第一个，而是雨露均沾。
    </p>
    <Example :html="html" :css="css">
      <div id="id-selector">foo</div>
      <div id="id-selector">bar</div>
      <div id="id-selector">baz</div>
    </Example>
  </div>
</template>

<style scoped>
#id-selector {
  display: inline-table;
  margin-right: 12px;
  padding: 8px 16px;
  border: solid 1px #e7e7e7;
  color: red;
}
</style>

<script>
const html = /*html*/ `
<div id="id-selector">foo</div>
<div id="id-selector">bar</div>
<div id="id-selector">baz</div>
`;

const docsCss = /*css*/ `
#id-selector {
  display: inline-table;
  margin-right: 12px;
  padding: 8px 16px;
  border: solid 1px #e7e7e7;
  color: red;
}
`;

export default {
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
