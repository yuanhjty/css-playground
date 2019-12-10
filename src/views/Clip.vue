<template>
  <div>
    <h1>clip</h1>
    <p>clip属性只有在position为fixed或absolute时才有效</p>

    <Example :html="html" :css="css">
      <h4>clip</h4>
      <div class="box">
        <div>abc</div>
        <img src="https://placekitten.com/200/200" />
        <div>def</div>
      </div>

      <h4>
        {position:absolute;clip:rect(0, 0, 0, 0);}隐藏元素，隐藏后依然可访问
      </h4>
      <div>
        <input id="clip-input" class="clip-input" />
        <span>已聚焦到input框</span>
        <label for="clip-input">点我聚焦到隐藏的input框</label>
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
  clip: rect(10px, 160px, 160px, 40px);
}

.clip-input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

.clip-input + span {
  display: none;
}

.clip-input:focus + span {
  display: inline;
  margin-right: 20px;
  color: yellowgreen;
}

.clip-input ~ label {
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
