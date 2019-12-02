<template>
  <div>
    <h1>首选最小宽度</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css">
      {{ html }}
    </Example>
  </div>
</template>

<style>
.min-content-concave,
.min-content-convex {
  display: inline-block;
  width: 0;
}

.min-content-concave span,
.min-content-convex span {
  outline: solid 2px #000;
  color: transparent;
  font-family: Monaco, monospace;
  font-size: 16px;
}

.min-content-convex {
  margin-left: 80px;
  direction: rtl;
}
</style>

<script>
const html = /*html*/ `
<div class="min-content-concave">
  <span>love xx love</span>
</div>
<div class="min-content-convex">
  <span>xx love xx</span>
</div>
`;

const docsCss = /*css*/ `
.min-content-concave,
.min-content-convex {
  display: inline-block;
  width: 0;
}

.min-content-concave span,
.min-content-convex span {
  outline: solid 2px #000;
  color: transparent;
  font-family: Monaco, monospace;
  font-size: 16px
}

.min-content-convex {
  margin-left: 80px;
  direction: rtl;
}
`;

export default {
  name: "MinContent",
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
