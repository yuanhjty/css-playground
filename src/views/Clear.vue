<template>
  <div>
    <h1>clear</h1>
    <ul>
      <li>
        官方对clear属性的解释是：元素盒子的边不能和
        <b>前面的</b>浮动元素相邻。
      </li>
      <li>
        clear属性只有块级元素才有效，而::after等伪元素默认多是内联的，
        这就是借助伪元素清除浮动时需要设置display属性的原因。
      </li>
      <li>
        给一个元素设置clear:both，本质上是让该元素自身不和float元素在一行显示，并不是真正意义上的清除浮动，
        因此float元素一些不好的特性依然存在。
      </li>
    </ul>

    <Example :html="html" :css="css">
      <h4>clear属性是让自身不能和“前面的”浮动元素相邻，对后面的元素没有限制</h4>
      <div class="list outline">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>

      <h4>
        clear:both并不是真正意义上的清除浮动，其后面的元素依旧可能会发生文字环绕的现象
      </h4>
      <div class="box outline">
        <img class="float-left" src="https://placekitten.com/200/100" />
        蒹葭苍苍，白露为霜。所谓伊人，在水一方。
        溯洄从之，道阻且长。溯游从之，宛在水中央。
        蒹葭萋萋，白露未晞。所谓伊人，在水之湄。
      </div>
      <div>
        溯洄从之，道阻且跻。溯游从之，宛在水中坻。
        蒹葭采采，白露未已。所谓伊人，在水之涘。
        溯洄从之，道阻且右。溯游从之，宛在水中沚。
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

.list {
  width: 300px;
  overflow: hidden;
}

.item {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: gray;
}

.item:nth-child(3) {
  clear: both;
}

.box > img {
  float: left;
}

.box::after {
  content: "";
  display: block;
  clear: both;
}

.box + div {
  margin-top: -2px;
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
