<template>
  <div>
    <h1>margin合并</h1>
    <p>块级元素的 margin-top 与 margin-bottom 有时会合并为单个外边距。</p>

    <h4>发生条件</h4>
    <ol>
      <li>块级元素，但不包括浮动元素和绝对定位元素</li>
      <li>
        只发生在垂直方向，严格来讲是和当前文档流方向垂直的方向上（writing-mode
        可以改变文档流方向）
      </li>
    </ol>

    <h4>margin合并的3种场景</h4>
    <ol>
      <li>相邻兄弟元素margin合并</li>
      <li>父级和第一个/最后一个子元素margin合并</li>
      <i>阻止这类margin合并：</i>
      <ul>
        <li>
          父元素设置为块状格式化上下文元素。overflow:
          hidden可以设置父级元素为块状格式化上下文
        </li>
        <li>父元素设置非零border-top/border-bottom值</li>
        <li>父元素设置非零padding-top/padding-bottom值</li>
        <li>
          父元素设置非零height/min-height可阻止父级和最后一个子元素的margin-bottom合并，
          但不能阻止父级和第一个子元素的margin-top合并
        </li>
      </ul>
      <li>块级空元素margin合并</li>
      <i>具体表现：</i>
      <ul>
        <li>空块级元素自身的margin-top和margin-bottom合并</li>
        <li>空块级元素元素与兄弟块级元素的margin合并</li>
      </ul>
      <i>阻止方法：</i>
      <ul>
        <li>设置垂直方向上的padding、border</li>
        <li>设置非零的height或min-height</li>
      </ul>
    </ol>

    <h4>margin合并规则</h4>
    <ul>
      <li>合并的margin符号相同时，取绝对值大的</li>
      <li>合并的margin符号不同时，取正负相加的结果</li>
    </ul>

    <Example :html="html" :css="css">
      <h4>父子元素margin合并</h4>
      <div class="item"></div>
      <div class="vertical-margin">
        <div class="vertical-margin-large">我是子元素</div>
      </div>
      <div class="item"></div>

      <h4>
        父元素设置 { overflow: hidden } 消除父子元素的margin合并
        <br />空块级元素自身的margin-top和margin-bottom合并
      </h4>
      <div class="overflow-hidden-parent">
        <div></div>
      </div>

      <h4>父元素设置非零height阻止父级和最后一个子元素的margin-bottom合并</h4>
      <div class="item"></div>
      <div class="non-zero-height-parent">
        <div class="vertical-margin-large"></div>
      </div>
      <div class="item"></div>

      <h4>空块级元素和兄弟元素的margin合并</h4>
      <div class="item vertical-margin-small"></div>
      <div></div>
      <div class="item vertical-margin-large"></div>

      <h4>负负margin合并</h4>
      <div class="negative-margin-bottom"></div>
      <div class="negative-margin-top"></div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.vertical-margin {
  margin: 20px 0;
}

.vertical-margin-large {
  margin: 30px 0;
}

.vertical-margin-small {
  margin: 10px 0;
}

.item {
  height: 40px;
  background: #0bffc8;
}

.overflow-hidden-parent {
  background: olive;
  overflow: hidden;
}

.overflow-hidden-parent > div {
  margin: 50%;
}

.non-zero-height-parent {
  background: olive;
  height: 20px;
}

.negative-margin-bottom,
.negative-margin-top {
  height: 60px;
  background: rgba(11, 255, 200, 0.4);
}

.negative-margin-bottom {
  margin-bottom: -30px;
}

.negative-margin-top {
  margin-top: -20px;
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
