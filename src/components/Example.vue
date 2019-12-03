<template>
  <div class="example">
    <p class="code-title" v-if="title">{{ title }}</p>
    <hr />
    <div class="result">
      <slot></slot>
    </div>
    <div class="code-title" v-if="html">html</div>
    <div class="code" v-if="html">{{ html }}</div>
    <div class="code-title" v-if="css">css</div>
    <div class="code" v-if="css">{{ css }}</div>
  </div>
</template>

<script>
export default {
  name: "Example",
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
.code-title {
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
  margin: 16px 0 16px;
}
</style>
