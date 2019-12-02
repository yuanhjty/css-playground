<template>
  <div>
    <h1>将可替换元素的 display 属性设置为 block</h1>
    <p>
      可替换元素的 display 属性设置为 block 后，它们在水平方向并不会充满父元素。
    </p>
    <p>这类元素包括：input, textarea, video, img, object</p>
    <Example :html="html" :css="css"></Example>
  </div>
</template>

<style>
.block-replaced-element {
  display: block;
  margin-bottom: 10px;
}

video.block-replaced-element {
  outline: solid 1px #e7e7e7;
}
</style>

<script>
const html = /*html*/ `
<input class="block-replaced-element"></input>
<textarea class="block-replaced-element"></textarea>
<video class="block-replaced-element"></video>
<img class="block-replaced-element" src="https://placekitten.com/200/150">
<object
  class="block-replaced-element"
  type="image/webp"
  data="https://placekitten.com/300/200">
</object>
`;

const docsCss = /*css*/ `
.block-replaced-element {
  display: block;
  margin-bottom: 10px;
}

video.block-replaced-element {
  outline: solid 1px #e7e7e7;
}
`;

export default {
  name: "BlockreplacedElement",
  data: () => ({
    html: html.trim(),
    css: docsCss.trim()
  })
};
</script>
