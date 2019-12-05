<template>
  <div>
    <h1>margin 与元素的内部尺寸</h1>
    <p>margin 可以同样改变元素的可是尺寸，但是和 padding 几乎是互补态势。</p>
    <p>
      元素设定了 width 值或保持“包裹性”的时候，padding 会改变元素的可视尺寸。
    </p>
    <p>
      元素设定了 width 值或保持“包裹性”的时候，margin 对元素尺寸没有影响。
      只有元素是“充分利用可用空间”状态时，margin 才可以改变元素的尺寸。
    </p>

    <Example :html="html" :css="css">
      <h4>左栏固定，右栏自适应</h4>
      <div class="box left-fixed">
        <img src="https://placekitten.com/200/150" />
        <div>
          明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？
          <br />转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
        </div>
      </div>

      <h4>右栏固定，左栏自适应，DOM 顺序和视觉相反</h4>
      <div class="box right-fixed">
        <img src="https://placekitten.com/200/150" />
        <div>
          明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？
          <br />转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
        </div>
      </div>

      <h4>右栏固定，左栏自适应，DOM 顺序和视觉相同</h4>
      <div class="box right-fixed-same-order">
        <div class="full">
          <div>
            明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？
            <br />转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
          </div>
        </div>
        <img src="https://placekitten.com/200/150" />
      </div>

      <h4>借助父元素 -margin 实现两端对齐</h4>
      <div class="list">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.box {
  overflow: hidden;
}
.box > img {
  width: 200px;
}

.left-fixed > img {
  float: left;
}
.left-fixed > div {
  margin-left: 200px;
  padding-left: 20px;
}

.right-fixed > img {
  float: right;
}
.right-fixed > div {
  margin-right: 200px;
  padding-right: 20px;
}

.right-fixed-same-order > .full {
  width: 100%;
  float: left;
}
.right-fixed-same-order > .full > div {
  margin-right: 200px;
  padding-right: 20px;
}
.right-fixed-same-order > img {
  float: left;
  margin-left: -200px;
}

.list {
  height: 100px;
  margin-right: -20px;
  display: flex;
}
.item {
  height: 100%;
  flex-grow: 1;
  margin-right: 20px;
  background: #08ffc8;
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
