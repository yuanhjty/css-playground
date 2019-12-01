<template>
  <div>
    <h1>Title</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style>
.demo {
  color: #42b983;
}
</style>

<script>
const html = /*html*/ `
<div class="demo">replace html and css with yours</div>
`;

const cssForDocs = /*css*/ `
.demo {
  color: #42b983;
}
`;

export default {
  name: "AATemplate",
  data: () => ({
    html,
    css: cssForDocs
  })
};
</script>
