<template>
  <div>
    <h1>借助 max-height 和 min-height 实现展开收起动画</h1>
    <p>Descriptions...</p>
    <Example :html="html" :css="css">
      <input id="checkbox" type="checkbox" />
      <div class="content">
        你当然可以说：人没什么可自大的。对于蛇来说
        <br />到处都是路。鸟飞在空中需要路吗？
        <br />还有鱼，在大海里。”你望着楼后面的村庄
        <br />黄豆地里升起的淡淡的雾霭，蓝色的——如此清澈
        <br />瓜园，菜地，人们在土里刨出滚圆的红薯
        <br />灼热的太阳点燃了玉米的红缨子，并在蒿草上
        <br />催生浓烈的香气——你抓住笔，说着，写着
        <br />攀援到这座城市的楼顶，并在天空的深处
        <br />找到一张稿纸——能放进这一切的——正是这个样子。
        <br />
      </div>
      <label for="checkbox" class="checkbox-label"></label>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.content {
  max-height: 24px;
  overflow: hidden;
  transition: max-height 0.25s;
}

.checkbox-label:after {
  display: inline-block;
  content: "展开";
  color: #00abac;
  cursor: pointer;
}

#checkbox {
  display: none;
}

#checkbox:checked ~ .content {
  max-height: 300px;
}

#checkbox:checked ~ .checkbox-label:after {
  content: "收起";
}
</style>

/************************/
<script>
const docHtml = /*html*/ `
<input id="checkbox" type="checkbox"></input>
<div class="content">
  你当然可以说：人没什么可自大的。对于蛇来说
  <br />到处都是路。鸟飞在空中需要路吗？
  ...
</div>
<label
  for="checkbox"
  class="checkbox-label">
</label">
`;

const docCss = /*css*/ `
.content {
  max-height: 24px;
  overflow: hidden;
  transition: max-height 0.25s;
}

.checkbox-label:after {
  display: inline-block;
  content: "展开";
  color: #00abac;
  cursor: pointer;
}

#checkbox {
  display: none;
}

#checkbox:checked ~ .content {
  max-height: 300px; 
}

#checkbox:checked ~ .checkbox-label:after {
  content: "收起";
}
`;

export default {
  data: () => ({
    html: docHtml.trim(),
    css: docCss.trim()
  })
};
</script>
