<template>
  <div>
    <h1>overflow</h1>

    <h4>裁剪边界</h4>
    <p>
      设置了overflow:hidden/auto/scroll的元素，当子元素超出容器边界限制时，剪裁的边界是
      border box的内边缘，而不是padding
      box的内边缘。如果想实现元素剪裁的同时四周留有间隙的话，
      可以使用借助透明边框实现。
    </p>

    <h4>对absolute元素的裁剪</h4>
    <p>
      absolute与overflow：如果overflow不是定位元素，同时absolute元素和overflow容器之间没有定位元素，
      则overflow无法对absolute元素进行裁剪。
    </p>

    <h4>滚动的本质、overflow:hidden之后仍然可以滚动</h4>
    <div>
      为元素设置overflow:hidden不会影响其scrollWidth/scrollHeight。设置了overflow:hidden之后，
      虽然无法手动滚动，但是
      <ul>
        <li>可以使用JS代码改变其scrollTop/scrollLeft来改变可视内容</li>
        <li>触发子元素锚点定位元素的scroll状态也会发生变化</li>
      </ul>
      <i>锚点定位</i>
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
    </div>

    <h4>overflow-x/overflow-y的相互影响</h4>
    <p>
      如果overflow-x/overflow-y属性中的一个值设置为visible而另外一个设置为scroll/auto/hidden，
      则visible会解析为auto。
    </p>

    <h4>依赖overflow的CSS属性</h4>
    <p>
      text-overflow:ellipsis的生效依赖overflow:hidden（同时依赖white-space:nowrap）
    </p>

    <h4>兼容性问题</h4>
    <ul>
      <li>
        oveflow容器自身具有transform时，在有些浏览器下，它对子元素的裁剪失效。
      </li>
      <li>
        在Chrome浏览器下，如果容器可滚动，则padding-bottom也算在滚动尺寸之内，IE和Firefox
        浏览器忽略padding-bottom。这除了样式表现不一致外，还会导致scrollHeight值不一样。
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

      <h4>overflow裁剪absolute元素</h4>

      <p>
        overflow容器不是定位元素，且overflow容器与absolute元素之间无定位元素，对absolute元素的裁剪无效
      </p>
      <div class="clip-box overflow-hidden outline">
        <img class="absolute" src="https://placekitten.com/200/200" />
      </div>

      <p>
        overflow容器不是定位元素，且它与absolute元素之间无定位元素，对absolute元素的裁剪无效，
        但是对overflow容器与absolute元素之间的非定位元素的裁剪有效
      </p>
      <div class="clip-box overflow-auto outline">
        <div class="clip-box outline">
          <img class="absolute" src="https://placekitten.com/200/200" />
        </div>
      </div>

      <p>overflow容器是定位元素，裁剪有效</p>
      <div class="clip-box overflow-hidden relative outline">
        <img class="absolute" src="https://placekitten.com/200/200" />
      </div>

      <p>
        overflow容器不是定位元素，但是它与absolute元素之间有定位元素，裁剪有效
      </p>
      <div class="clip-box overflow-auto outline">
        <div class="clip-box relative outline">
          <img class="absolute" src="https://placekitten.com/200/200" />
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

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.clip-box {
  height: 160px;
  margin-bottom: 60px;
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
