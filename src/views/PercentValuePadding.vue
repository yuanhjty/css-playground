<template>
  <div>
    <h1>padding 的百分比值</h1>
    <p>
      padding 不支持负值，不管是垂直还是水平方向的
      padding，其百分比值永远相对于元素宽度计算。
    </p>
    <Example :html="html" :css="css">
      <div class="container">
        <div class="box">
          <p>等比例矩形</p>
          <div class="squre">
            <span class="label">正方形</span>
          </div>
          <div class="rectangle">
            <span class="label">长宽比为 2:1 的长方形</span>
          </div>
        </div>
        <div class="inline-rectangle-box">
          <span class="inline-rectangle">
            <p class="label">
              空的 span 标签中有一个不可见的 strut
              节点，导致该矩形并不是一个正方形
            </p>
          </span>
        </div>
        <div class="inline-rectangle-box">
          <span class="inline-rectangle zero-font-size">
            <p class="label">
              将空 span 标签的 font-size 设为 0，使得 strut 节点的高度为
              0，即可得到一个正方形
            </p>
          </span>
        </div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.container {
  max-width: 300px;
  margin: 0 auto;
}

.box,
.inline-rectangle-box {
  padding: 10px;
  margin-bottom: 10px;
  outline: solid 1px #e7e7e7;
}

.inline-rectangle-box {
  padding-top: 50%;
  padding-bottom: 50%;
}

.squre,
.rectangle,
.inline-rectangle {
  background: #a3cd39;
  margin-bottom: 10px;
  position: relative;
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
}

.squre {
  padding: 50%;
}

.rectangle {
  padding: 25% 50%;
}

.inline-rectangle {
  padding: 50%;
  background: rgba(163, 205, 57, 0.5);
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
