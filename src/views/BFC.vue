<template>
  <div>
    <h1>块级格式化上下文(block formatting context)</h1>
    <p>
      如果一个元素具有BFC，内部
      <b>子元素的行为不会受外部元素的影响，也不会影响到外部的元素</b>。所以，
      BFC元素不会发生与子元素之间的margin合并；BFC也可以用来清除浮动的影响，因为如果不清除，
      子元素浮动则父元素高度塌陷，会影响后面元素的定位。
    </p>

    <h4>BFC产生条件：</h4>
    <ul>
      <li>html根元素</li>
      <li>display值为table-cell、table-caption或inline-block</li>
      <li>float值不为none</li>
      <li>overflow的值为auto、scroll或hidden</li>
      <li>position值不为relative或static</li>
    </ul>

    <Example :html="html" :css="css">
      <h4>BFC消除父子margin合并，避免影响外部元素</h4>
      <p>{display:inline-block}产生BFC</p>
      <div class="outline inline-block">
        <div class="margin">关关雎鸠，在河之洲。窈窕淑女，君子好逑。</div>
      </div>

      <p>{overflow:auto}产生BFC</p>
      <div class="outline overflow-auto">
        <div class="margin">关关雎鸠，在河之洲。窈窕淑女，君子好逑。</div>
      </div>

      <h4>{overflow:hidden}产生BFC，消除浮动对外部元素的影响</h4>
      <div class="outline overflow-hidden">
        <img class="float-left" src="https://placekitten.com/200/200" />
      </div>
      <p>关关雎鸠，在河之洲。窈窕淑女，君子好逑。</p>

      <h4>{overflow:hidden}产生BFC，消除外部元素对内部元素的影响</h4>
      <p>段落元素无BFC，前面有浮动元素，产生文字环绕</p>
      <div class="outline overflow-hidden">
        <img class="float-left" src="https://placekitten.com/200/80" />
        <p>
          关关雎鸠，在河之洲。窈窕淑女，君子好逑。
          参差荇菜，左右流之。窈窕淑女，寤寐求之。
          求之不得，寤寐思服。悠哉悠哉，辗转反侧。
          参差荇菜，左右采之。窈窕淑女，琴瑟友之。
          参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。
        </p>
      </div>
      <p>段落元素有BFC，前面的浮动元素不会导致文字环绕</p>
      <div class="outline overflow-hidden">
        <img class="float-left" src="https://placekitten.com/200/80" />
        <p class="overflow-hidden">
          关关雎鸠，在河之洲。窈窕淑女，君子好逑。
          参差荇菜，左右流之。窈窕淑女，寤寐求之。
          求之不得，寤寐思服。悠哉悠哉，辗转反侧。
          参差荇菜，左右采之。窈窕淑女，琴瑟友之。
          参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。
        </p>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.margin {
  margin: 20px 0;
}

.inline-block {
  display: inline-block;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.float-left {
  float: left;
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
