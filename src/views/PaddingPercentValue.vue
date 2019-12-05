<template>
  <div>
    <h1>padding 的百分比值</h1>
    <p>
      padding 不支持负值，不管是垂直还是水平方向的
      padding，其百分比值永远相对于元素宽度计算。
    </p>
    <Example :html="html" :css="css">
      <h4>正方形</h4>
      <div class="squre"></div>

      <h4>长宽比为 2:1 的长方形</h4>
      <div class="rectangle"></div>

      <h4>
        inline 标签 padding 设为 50%，因为空的 inline 标签中有一个不可见的 strut
        节点，导致绘制出的矩形并不是一个正方形
      </h4>
      <div class="inline-rectangle-box">
        <span class="inline-rectangle"></span>
      </div>

      <h4>
        inline 标签 padding 设为 50%，将空 inline 标签的 font-size 设为 0，使得
        strut 节点的高度为 0，即可得到一个正方形
      </h4>
      <div class="inline-rectangle-box  zero-font-size">
        <span class="inline-rectangle"></span>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.squre,
.rectangle,
.inline-rectangle {
  background: #a3cd39;
}

.squre {
  padding: 50%;
}

.rectangle {
  padding: 25% 50%;
}

.inline-rectangle {
  padding: 50%;
}

.inline-rectangle-box {
  padding-top: 50%;
  padding-bottom: 50%;
}

.zero-font-size {
  font-size: 0;
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
