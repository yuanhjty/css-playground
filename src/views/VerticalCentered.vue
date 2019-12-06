<template>
  <div>
    <h1>垂直居中方案</h1>

    <Example :html="html" :css="css">
      <h4>绝对定位 + { top/bottom: 0; margin: auto }</h4>
      <div class="parent relative">
        <div class="child absolute zero-tblr auto-margin"></div>
      </div>

      <h4>绝对定位 + { top: 50%; transform: translateY(-50%) }</h4>
      <div class="parent relative">
        <div
          class="child absolute positive-50p-top negative-50p-translate-y"
        ></div>
      </div>

      <h4>flex 布局</h4>
      <div class="parent flex">
        <div class="child"></div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.parent {
  position: relative;
  height: 200px;
  border: solid 1px #fe2370;
}

.flex {
  display: flex;
  align-items: center;
}

.child {
  background: #dee2d1;
  height: 100px;
  width: 100%;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.zero-tblr {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.positive-50p-top {
  top: 50%;
}

.auto-margin {
  margin: auto;
}

.negative-50p-translate-y {
  transform: translateY(-50%);
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
