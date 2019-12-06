<template>
  <div>
    <h1>margin无效的情形</h1>

    <Example :html="html" :css="css">
      <h4>display计算值是inline的非替换元素的垂直margin无效</h4>
      <div class="outline">
        <span class="margin-20 outline">这是一个span元素</span>
      </div>

      <h4>display计算值是tabel-cell或table-row的元素水平和垂直margin都无效</h4>
      <div class="outline">
        <div>
          <div class="table-cell margin-20 outline">
            这是一个display为table-cell的元素
          </div>
          <div class="table-cell margin-20 outline">
            这是另一个display为table-cell的元素
          </div>
        </div>
        <div>
          <div class="table-row margin-20 outline">
            这是一个display为table-row的元素
          </div>
          <div class="table-row margin-20 outline">
            这是另一个display为table-row的元素
          </div>
        </div>
      </div>

      <h4>定高容器中，最后一个子元素的margin-bottom无效</h4>
      <div class="gray height-150 margin-bottom--20">
        <div class="magenta height-100 margin-bottom-100"></div>
      </div>

      <h4>容器中最后一个子元素定宽时，其margin-right无效</h4>
      <div class="gray inline-block width-100 height-100">
        <div class="magenta width-100 height-100 margin-right-100"></div>
      </div>
      <div class="gray inline-block width-100 height-100"></div>

      <h4>float导致的margin无效</h4>
      <div class="box">
        <img src="https://placekitten.com/200/100" />
        <p>
          锦瑟无端五十弦，一弦一柱思华年。 庄生晓梦迷蝴蝶，望帝春心托杜鹃。
          沧海月明珠有泪，蓝田日暖玉生烟。 此情可待成追忆，只是当时已惘然。
        </p>
      </div>

      <h4 class="margin-bottom-200">内联特性导致的margin无效</h4>
      <div class="margin-bottom-200">
        <img class="margin-top--300" src="https://placekitten.com/300/200" />
      </div>
      <div>
        <img class="margin-top--100" src="https://placekitten.com/200/200" />
        <img class="margin-top--200" src="https://placekitten.com/200/200" />
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.outline {
  outline: solid 1px #e7e7e7;
}

.margin-20 {
  margin: 20px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

.margin-bottom-100 {
  margin-bottom: 100px;
}

.margin-bottom-200 {
  margin-bottom: 200px;
}

.margin-top--100 {
  margin-top: -100px;
}

.margin-top--200 {
  margin-top: -200px;
}

.margin-top--300 {
  margin-top: -300px;
}

.margin-right-100 {
  margin-right: 100px;
}

.inline-block {
  display: inline-block;
}

.table-cell {
  display: table-cell;
}

.table-row {
  display: table-row;
}

.height-150 {
  height: 150px;
}

.height-100 {
  height: 100px;
}

.width-100 {
  width: 100px;
}

.gray {
  background: #e7e7e7;
}

.magenta {
  background: rgba(255, 0, 255, 0.5);
}

.box > img {
  float: left;
  width: 200px;
}

.box > p {
  margin-left: 180px;
}

.box:after {
  content: "";
  display: block;
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
