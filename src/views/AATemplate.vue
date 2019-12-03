<template>
  <div>
    <h1>Title</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style></style>

<script>
const html = /*html*/ `
`;

const docsCss = /*css*/ `
`;

export default {
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
