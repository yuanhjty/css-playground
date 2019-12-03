<template>
  <div>
    <h1>将可替换元素的 display 属性设置为 block</h1>
    <p>
      可替换元素的 display 属性设置为 block 后，它们在水平方向并不会充满父元素。
    </p>
    <p>这类元素包括：input, textarea, video, img, object</p>
    <Example :html="html" :css="css">
      <input class="element" />
      <textarea class="element"></textarea>
      <video class="element"></video>
      <img class="element" src="https://placekitten.com/200/150" />
      <object
        class="element"
        type="image/webp"
        data="https://placekitten.com/300/200"
      ></object>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.element {
  display: block;
  margin-bottom: 10px;
}

video.element {
  outline: solid 1px #e7e7e7;
}
</style>

/************************/
<script>
const html = /*html*/ `
<input class="element">
<textarea class="element"></textarea>
<video class="element"></video>
<img class="element" src="https://placekitten.com/200/150">
<object
  class="element"
  type="image/webp"
  data="https://placekitten.com/300/200">
</object>
`;

const docsCss = /*css*/ `
.element {
  display: block;
  margin-bottom: 10px;
}

video.element {
  outline: solid 1px #e7e7e7;
}
`;

export default {
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
