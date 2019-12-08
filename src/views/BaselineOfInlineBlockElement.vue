<template>
  <div>
    <h1>inline-block元素的baseline</h1>
    <p>
      如果inline-block元素内部没有内联元素，或者overflow不为visible，
      则其baseline为元素margin box的最底部，否则为元素中最后一个行框的baseline。
    </p>

    <Example :html="html" :css="css">
      <div>
        滚滚长江东逝水
        <div class="outline inline-block">浪花淘尽英雄，是非成败转头空</div>
        <div class="outline inline-block overflow-hidden">overflow:hidden</div>
        <div class="outline inline-block"></div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.inline-block {
  display: inline-block;
  width: 100px;
  height: 100px;
}

.overflow-hidden {
  overflow: hidden;
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
