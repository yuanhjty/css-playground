<template>
  <div>
    <h1>内联元素垂直方向的 padding</h1>
    <p>
      非替换内联元素在垂直方向上的 padding
      会加入行盒高度的计算，只是不影响布局而已。
    </p>
    <p>可以利用此特性在不影响布局的情况下增大链接或按钮的可点击范围。</p>
    <p>对于非替换的内联元素，margin 和 border 也有此特性。</p>
    <Example :html="html" :css="css">
      <div class="box">
        <span>我是一个不带垂直 padding 的 span</span>
        <br />
        <span class="padding-span">我是一个带有垂直 padding 的 span 元素</span>
        <br />
        <span>我是一个不带垂直 padding 的 span</span>
      </div>

      <div class="box scroll">
        <span class="padding-span">我是一个带有垂直 padding 的 span 元素</span>
      </div>

      <div class="box">
        <span class="padding-span">
          padding 会跟着文字折行 padding 会跟着文字折行 padding 会跟着文字折行
          padding 会跟着文字折行 padding 会跟着文字折行
        </span>
      </div>

      <div class="box">
        <p>垂直分隔线</p>
        <span class="item">登录</span>
        <span class="item">注册</span>
        <span class="item">注销</span>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.box {
  outline: solid 1px #e7e7e7;
  margin-bottom: 17px;
  max-width: 600px;
}

.padding-span {
  padding: 12px 0;
  background: #3399ff;
}

.scroll {
  overflow: scroll;
  height: 60px;
}

.scroll .padding-span {
  padding: 60px 0;
}

.item ~ .item::before {
  content: "";
  font-size: 0;
  padding: 11px 3px 0;
  margin-left: 6px;
  border-left: solid 1px gray;
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
