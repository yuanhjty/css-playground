<template>
  <div class="example">
    <p class="title" v-if="title">{{ title }}</p>
    <hr />
    <p class="title">rendering result</p>
    <Resizable panelColor="#1ec0ff" initialWidth="100%">
      <div class="result">
        <slot></slot>
      </div>
    </Resizable>
    <div class="title" v-if="html">html</div>
    <div class="code" v-if="html">{{ html }}</div>
    <div class="title" v-if="css">css</div>
    <div class="code" v-if="css">{{ css }}</div>
  </div>
</template>

<script>
import Resizable from "./Resizable";

export default {
  name: "Example",
  components: {
    Resizable
  },
  props: {
    title: {
      type: String,
      default: "Example"
    },
    html: {
      type: String,
      default: ""
    },
    css: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.title {
  font-family: Courier, monospace;
}

.code {
  white-space: pre;
  background: #f5f5f5;
  padding: 12px 20px;
  margin: 8px 0 16px;
  font-family: Courier, monospace;
  line-height: 1.5;
  overflow: auto;
}

.result {
  padding: 12px 20px;
  margin: 12px 0;
  border: solid 1px #e7e7e7;
  border-right: none;
}
</style>
