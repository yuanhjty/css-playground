<template>
  <div>
    <h1>首选最小宽度</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css">
      <div class="concave">
        <span>love xx love</span>
      </div>
      <div class="convex">
        <span>xx love xx</span>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.concave,
.convex {
  display: inline-block;
  width: 0;
}

.concave span,
.convex span {
  outline: solid 2px #000;
  color: transparent;
  font-family: Monaco, monospace;
  font-size: 16px;
}

.convex {
  margin-left: 90px;
  direction: rtl;
}
</style>

/************************/
<script>
const docHtml = /*html*/ `
<div class="concave">
  <span>love xx love</span>
</div>
<div class="convex">
  <span>xx love xx</span>
</div>
`;

const docCss = /*css*/ `
.concave,
.convex {
  display: inline-block;
  width: 0;
}

.concave span,
.convex span {
  outline: solid 2px #000;
  color: transparent;
  font-family: Monaco, monospace;
  font-size: 16px
}

.convex {
  margin-left: 80px;
  direction: rtl;
}
`;

export default {
  data: () => ({
    html: docHtml.trim(),
    css: docCss.trim()
  })
};
</script>
