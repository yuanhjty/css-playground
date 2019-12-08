<template>
  <div>
    <h1>内联元素的垂直尺寸属性</h1>

    <h4>margin-top/margin-bottom</h4>
    <ul>
      <li>对内联非替换元素无效</li>
      <li>对块级元素存在margin合并</li>
      <li>对内联替换元素有效，并且不存在margin合并</li>
    </ul>

    <h4>padding-top/padding-bottom/border-top/border-bottom</h4>
    <ul>
      <li>
        对内联非替换元素有效，会造成在垂直方向超出容器元素或与相邻元素重叠，但不影响自身及其他元素的布局
      </li>
      <li>对内联替换元素具有与块级元素相同的效果</li>
    </ul>

    <h4>height/min-height/max-height</h4>
    <ul>
      <li>对内联元素非替换无任何效果</li>
      <li>对内联替换元素具有与块级元素相同的效果</li>
    </ul>

    <h4>
      <router-link to="/line-height">line-height</router-link>
    </h4>

    <Example :html="html" :css="css">
      <h4 style="margin-bottom:60px">margin/padding/border/height</h4>
      <div class="outline vertical-margin">
        <span
          class="outline height vertical-margin vertical-border vertical-padding"
          >我是一个内联元素</span
        >
      </div>
      <div class="outline">
        <img
          class="outline height vertical-margin vertical-border vertical-padding"
          src="https://placekitten.com/200/150"
        />
      </div>
      <div class="outline">
        <input
          class="outline height vertical-margin vertical-border vertical-padding"
          value="我是input元素"
        />
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.vertical-margin {
  margin: 20px 0;
}

.vertical-padding {
  padding: 20px 0;
}

.vertical-border {
  border-top: solid 20px;
  border-bottom: solid 20px;
}

.height {
  height: 150px;
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
