<template>
  <div>
    <h1>内联替换元素的margin</h1>
    <p>内联非替换元素的margin无效，但内联替换元素的margin有效。</p>

    <Example :html="html" :css="css">
      <div>
        <img class="margin" src="https://placekitten.com/200/150" />
      </div>
      <div>
        <input class="margin" />
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.margin {
  margin: 40px;
}
</style>

/************************/
<script>
const docHtml = "{{html}}";
const docCss = "{{css}}";

export default {
  data: () => ({
    html: docHtml.trim(),
    css: docCss.trim()
  })
};
</script>
