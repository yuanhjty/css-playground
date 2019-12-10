<template>
  <div>
    <h1>clip</h1>
    <p>clip属性只有在position为fixed或absolute时才有效</p>

    <Example :html="html" :css="css">
      <h4>clip以border box为基准进行裁剪</h4>
      <div class="box">
        <div>abc</div>
        <img src="https://placekitten.com/200/200" />
        <div>def</div>
      </div>

      <h4>
        {position:absolute;clip:rect(0, 0, 0, 0);}隐藏元素，隐藏后依然可访问。
        如果是通过display:none或visible:hidden隐藏，则隐藏后不可访问。
      </h4>
      <p>clip隐藏</p>
      <div>
        <input id="hidden-input-1" class="input clip" />
        <span>已聚焦到input框</span>
        <label for="hidden-input-1">点我聚焦到隐藏的input框</label>
      </div>
      <p>display:none隐藏</p>
      <div>
        <input id="hidden-input-2" class="input display-none" />
        <span>已聚焦到input框</span>
        <label for="hidden-input-2">点我无法聚焦到隐藏的input框</label>
      </div>
      <p>visible:hidden隐藏</p>
      <div>
        <input id="hidden-input-2" class="input visibility-hidden" />
        <span>已聚焦到input框</span>
        <label for="hidden-input-2">点我无法聚焦到隐藏的input框</label>
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.box {
  height: 300px;
}

.box > img {
  position: absolute;
  clip: rect(0, 160px, 160px, 40px);
  margin: 20px;
  border: solid 20px lightgreen;
  padding: 20px;
}

.clip {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

.display-none {
  display: none;
}

.visibility-hidden {
  visibility: hidden;
}

.input + span {
  display: none;
}

.input:focus + span {
  display: inline;
  margin-right: 20px;
  color: yellowgreen;
}

.input ~ label {
  cursor: pointer;
  color: olive;
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
