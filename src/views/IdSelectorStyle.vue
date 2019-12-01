<template>
  <div>
    <h1>ID选择器样式</h1>
    <p>
      在 CSS 中，ID 样式出现在多个不同的元素上并不会只渲染第一个，而是雨露均沾。
    </p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style>
#id-selector-style {
  display: inline-table;
  margin-right: 12px;
  padding: 8px 16px;
  border: solid 1px #e7e7e7;
  color: red;
}
</style>

<script>
const html = /*html*/ `
<div id="id-selector-style">foo</div>
<div id="id-selector-style">bar</div>
<div id="id-selector-style">baz</div>
`;

const css = /*css*/ `
#id-selector-style {
  display: inline-table;
  margin-right: 12px;
  padding: 8px 16px;
  border: solid 1px #e7e7e7;
  color: red;
}
`;

export default {
  name: "IdSelectorStyle",
  data: () => ({
    html,
    css
  })
};
</script>
