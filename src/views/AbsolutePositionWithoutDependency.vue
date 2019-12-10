<template>
  <div>
    <h1>无依赖绝对定位</h1>
    <p>
      绝对定位元素不设定top/bottom/left/right时，其定位位置就是它在非绝对定位情况下出现在文档流中的位置，
      不受包含块位置的影响。
    </p>
    对于无依赖绝对定位元素：
    <ul>
      <li>可以借助margin属性调整其内容区域的位置，而依然不考虑包含块的影响</li>
      <li>width为auto时，margin box的宽度不会超过包含块</li>
      <li>
        当无依赖绝对定位前面有浮动元素时，不同浏览器的行为有所不同，遇到这种情况时，
        可以在绝对定位元素外面再套一层浮动解决素来解决。
      </li>
    </ul>

    <Example :html="html" :css="css">
      <h4>右上角图标</h4>
      <div class="relative outline">
        不生不灭、不垢不净、不增不减
        <span class="top-right-icon">😄</span>
      </div>

      <h4>搜选框</h4>
      <div>
        <input class="search-input" placeholder="请输入" />
        <div class="search-result">
          <div class="options">
            <div class="option">不生不灭</div>
            <div class="option">不垢不净</div>
            <div class="option">不增不减</div>
          </div>
        </div>
      </div>

      <div class="relative"></div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.relative {
  position: relative;
}

.top-right-icon {
  position: absolute;
  margin-top: -10px;
  margin-left: 10px;
}

.search-input {
  width: 200px;
  padding: 4px 8px;
}

.options {
  position: absolute;
  border: solid 1px #e7e7e7;
  background: #fff;
}

.option {
  width: 200px;
  padding: 4px 8px;
}

.search-result {
  display: none;
}

.search-input:focus + .search-result {
  display: block;
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
