<template>
  <div>
    <h1>overflow</h1>
    <ul>
      <li>
        设置了overflow:hidden/auto/scroll的元素，当子元素超出容器边界限制时，剪裁的边界是
        border box的内边缘，而不是padding
        box的内边缘。如果想实现元素剪裁的同时四周留有间隙的话，
        可以使用借助透明边框实现。
      </li>
      <li>
        为元素设置overflow:hidden不会影响其scrollWidth/scrollHeight。设置了overflow:hidden之后，
        虽然无法手动滚动，但是
        <ul>
          <li>可以使用JS代码改变其scrollTop/scrollLeft来改变可视内容</li>
          <li>触发子元素锚点定位元素的scroll状态也会发生变化</li>
        </ul>
        <h4>锚点定位</h4>
        <ul>
          <li>锚点定位的本质是改变容器的scrollTop/scrollWidth</li>
          <li>
            锚点定位的触发条件
            <ul>
              <li>URL地址中的锚链与锚点元素对应并且有交互时</li>
              <li>可focus的锚点元素变为focus状态时</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        如果overflow-x/overflow-y属性中的一个值设置为visible而另外一个设置为scroll/auto/hidden，
        则visible会解析为auto。
      </li>
      <li>
        text-overflow:ellipsis的生效依赖overflow:hidden（同时依赖white-space:nowrap）
      </li>
      <li>
        overflow属性有一个很经典的不兼容问题：在Chrome浏览器下，如果容器可滚动，则padding-bottom
        也算在滚动尺寸之内，IE和Firefox浏览器忽略padding-bottom。这除了样式表现不一致外，还会导致
        scrollHeight值不一样。
      </li>
      <li>
        Windows
        PC端几乎所有浏览器的滚动栏占据宽度，移动端浏览器的滚动栏一般是悬浮的。
      </li>
    </ul>

    <Example :html="html" :css="css">
      <h4>overflow剪裁，四周无间隙</h4>
      <div>
        <div class="box overflow-hidden">
          <img src="https://placekitten.com/200/200" />
        </div>
        <div class="box overflow-auto">
          <img src="https://placekitten.com/200/200" />
        </div>
        <div class="box overflow-scroll">
          <img src="https://placekitten.com/200/200" />
        </div>
      </div>

      <h4>overflow剪裁，用透明边框模拟四周间隙</h4>
      <div>
        <div class="box transprant-border overflow-hidden">
          <img src="https://placekitten.com/200/200" />
        </div>
        <div class="box transprant-border overflow-auto">
          <img src="https://placekitten.com/200/200" />
        </div>
        <div class="box transprant-border overflow-scroll">
          <img src="https://placekitten.com/200/200" />
        </div>
      </div>

      <h4>
        overflow-x设置为visble，overflow-y设置为auto/hidden/scroll时，overflow-x解析为auto
      </h4>
      <div>
        <div class="box overflow-x-visible overflow-y-hidden">
          <img src="https://placekitten.com/200/200" />
        </div>
        <div class="box overflow-x-visible overflow-y-auto">
          <img src="https://placekitten.com/200/200" />
        </div>
        <div class="box overflow-x-visible overflow-y-scroll">
          <img src="https://placekitten.com/200/200" />
        </div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #1ec0ff;
}

.box {
  outline: solid 1px #1ec0ff;
  display: inline-block;
  height: 160px;
  width: 160px;
  margin: 10px;
}

.transprant-border {
  box-sizing: border-box;
  border: 10px solid transparent;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-auto {
  overflow: auto;
}

.overflow-scroll {
  overflow: scroll;
}

.overflow-x-visible {
  overflow-x: visible;
}

.overflow-y-auto {
  overflow-y: auto;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-y-scroll {
  overflow-y: scroll;
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
