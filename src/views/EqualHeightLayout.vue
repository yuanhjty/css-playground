<template>
  <div>
    <h1>Title</h1>
    <p>Descriptions...</p>

    <Example :html="html" :css="css">
      <h4>table-cell 布局</h4>
      <div class="columns">
        <div class="left table-cell">height: 100px</div>
        <div class="right table-cell">height: 200px</div>
      </div>

      <h4>借助 -margin-bottom 和 padding-bottom</h4>
      <div class="columns overflow-hidden">
        <div class="left inline-block large-margin-and-padding">
          height: 100px
        </div>
        <div class="right inline-block large-margin-and-padding">
          height: 200px
        </div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.columns {
  background: #f5f5f5;
}

.overflow-hidden {
  overflow: hidden;
}

.left,
.right {
  width: 200px;
  color: #fff;
}

.left {
  height: 100px;
  background: olive;
}

.right {
  height: 200px;
  background: coral;
}

.table-cell {
  display: table-cell;
}

.inline-block {
  display: inline-block;
}

.large-margin-and-padding {
  margin-bottom: -9999px;
  padding-bottom: 9999px;
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
