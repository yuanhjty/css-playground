<template>
  <div>
    <h1>百分之百高度</h1>
    <p>
      如果
      <b>非绝对定位元素</b>的父元素 height 属性值为 auto，那么该元素的 height
      属性值设为百分比时， 该百分比值被忽略（但是该 height
      属性仍然会覆盖低优先级的 height 属性）。
    </p>
    <div>
      有两种情况下
      <code>height: 100%</code> 生效：
      <ol>
        <li>父元素的 height 属性为非 auto</li>
        <li>元素的 position 属性为 absolute 或 fixed</li>
      </ol>
    </div>
    <p>
      绝对定位元素
      <b>宽高</b>百分比的计算相对于父元素的 padding box，非绝对定位则相对于
      content box。
    </p>
    <Example :html="html" :css="css">
      <div class="parent-relative">
        <h3>title</h3>
        <p>content content content</p>
        <div class="child-fixed">
          fixed position
          <br />height: 100%
        </div>
        <div class="child-absolute">
          absolute position
          <br />height: 100%
        </div>
      </div>
      <div class="parent-static">
        <div class="child-static">
          static position
          <br />height: 100%
        </div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.parent-relative,
.parent-static {
  border: solid 5px #e7e7e7;
  margin: 20px;
  padding: 20px;
}

.parent-relative {
  position: relative;
}

.parent-static {
  height: 100px;
}

.child-fixed,
.child-absolute,
.child-static {
  text-align: center;
  width: 200px;
  height: 100%;
  opacity: 0.5;
}

.child-fixed {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(255, 241, 172, 1);
}

.child-absolute {
  position: absolute;
  top: 0;
  left: 100px;
  background: rgba(255, 181, 73, 1);
}

.child-static {
  background: rgba(255, 181, 73, 1);
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
