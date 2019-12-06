<template>
  <div>
    <h1>内联替换元素的垂直margin</h1>
    <p>内联非替换元素的垂直margin无效，但内联替换元素的垂直margin有效。</p>

    <Example :html="html" :css="css">
      <div>
        <img class="vertival-margin" src="https://placekitten.com/200/150" />
      </div>
      <div>
        <input class="vertical-margin" />
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.vertical-margin {
  margin: 40px 0;
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
