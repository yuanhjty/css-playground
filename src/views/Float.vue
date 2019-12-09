<template>
  <div>
    <h1>float</h1>

    <Example :html="html" :css="css">
      <h4>float让父元素高度塌陷</h4>
      <div class="outline">
        <img class="float-left" src="https://placekitten.com/200/100" />
        浮动img的父元素
      </div>
      <p class="outline">
        蒹葭苍苍，白露为霜。所谓伊人，在水一方。
        溯洄从之，道阻且长。溯游从之，宛在水中央。
        蒹葭萋萋，白露未晞。所谓伊人，在水之湄。
        溯洄从之，道阻且跻。溯游从之，宛在水中坻。
        蒹葭采采，白露未已。所谓伊人，在水之涘。
        溯洄从之，道阻且右。溯游从之，宛在水中沚。
      </p>

      <h4>浮动锚点和浮动参考</h4>
      <ul>
        <li>
          浮动锚点：float元素所在流中的一个点，这个点本身并不浮动，表现上相当于一个零宽的行内框。
        </li>
        <li>
          浮动参考：float元素对齐参考的实体。在下面示例中，float元素的浮动参考是行框盒子，也就是float元素在
          当前行框盒子内定位。
        </li>
      </ul>
      <i
        >拖动右边蓝色的竖条调整渲染区域的宽度，观察下面float-right的“更多”的行为</i
      >
      <p class="outline">
        长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题
        <span class="float-right color-red">更多</span>
      </p>

      <h4>float三栏布局</h4>
      <div class="outline">
        <a href="/float" class="float-left">上一章</a>
        <a href="/float" class="float-right">下一章</a>
        <h3 class="title">流的破坏与保护</h3>
      </div>

      <div class="clear"></div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

.title {
  margin: 0 70px;
  text-align: center;
}

.color-red {
  color: red;
}

.clear {
  clear: both;
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
