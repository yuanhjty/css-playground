<template>
  <div>
    <h1>百分之百高度</h1>
    <p>
      如果<b>非绝对定位元素</b>的父元素 height 属性值为 auto，那么该元素的 height 属性值设为百分比时，
      该百分比值被忽略（但是该 height 属性仍然会覆盖低优先级的 height 属性）。
    </p>
    <p>
      有两种情况下 <code>height: 100%</code> 生效：
      <ol>
        <li>父元素的 height 属性为非 auto</li>
        <li>元素的 position 属性为 absolute 或 fixed </li>
      </ol>
    </p>
    <p>
      绝对定位元素<b>宽高</b>百分比的计算相对于父元素的 padding box，非绝对定位则相对于 content box。
    </p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style>
.hundred-percent-height-parent-relative,
.hundred-percent-height-parent-static {
  border: solid 5px #e7e7e7;
  margin: 20px;
  padding: 20px;
}

.hundred-percent-height-parent-relative {
  position: relative;
}

.hundred-percent-height-parent-static {
  height: 100px;
}

.hundred-percent-height-child-fixed,
.hundred-percent-height-child-absolute,
.hundred-percent-height-child-static {
  text-align: center;
  width: 200px;
  height: 100%;
  opacity: 0.5;
}

.hundred-percent-height-child-fixed {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(255, 241, 172, 1);
}

.hundred-percent-height-child-absolute {
  position: absolute;
  top: 0;
  left: 100px;
  background: rgba(255, 181, 73, 1);
}

.hundred-percent-height-child-static {
  background: rgba(255, 181, 73, 1);
}
</style>

<script>
const html = /*html*/ `
<div class="hundred-percent-height-parent-relative">
  <h3>title</h3>
  <p>content content content</p>
  <div class="hundred-percent-height-child-fixed">
    fixed position
    <br />
    height: 100%
  </div>
  <div class="hundred-percent-height-child-absolute">
    absolute position
    <br />
    height: 100%
  </div>
</div>
<div class="hundred-percent-height-parent-static">
  <div class="hundred-percent-height-child-static">
    static position
    <br />
    height: 100%
  </div>
</div>
`;

const docsCss = /*css*/ `
.hundred-percent-height-parent-relative,
.hundred-percent-height-parent-static {
  border: solid 5px #e7e7e7;
  margin: 20px;
  padding: 20px;
}

.hundred-percent-height-parent-relative {
  position: relative;
}

.hundred-percent-height-parent-static {
  height: 100px;
}

.hundred-percent-height-child-fixed,
.hundred-percent-height-child-absolute,
.hundred-percent-height-child-static {
  text-align: center;
  width: 200px;
  height: 100%;
  opacity: 0.5;
}

.hundred-percent-height-child-fixed {
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(255, 241, 172, 1);
}

.hundred-percent-height-child-absolute {
  position: absolute;
  top: 0;
  left: 100px;
  background: rgba(255, 181, 73, 1);
}

.hundred-percent-height-child-static {
  background: rgba(255, 181, 73, 1);
}
`;

export default {
  name: "HundredPercentHeight",
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
