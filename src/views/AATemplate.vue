<template>
  <div>
    <h1>Title</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

/************************/
<style scoped></style>

/************************/
<script>
const docHtml = /*html*/ `
`;

const docCss = /*css*/ `
`;

export default {
  data: () => ({
    html: docHtml.trim(),
    css: docCss.trim()
  })
};
</script>
