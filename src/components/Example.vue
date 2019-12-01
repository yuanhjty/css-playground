<template>
  <div class="example">
    <p v-if="title">{{ title }}</p>
    <hr />
    <div class="result">
      <span v-html="html"></span>
    </div>
    <div class="code-title" v-if="trimmedHtml">html</div>
    <div class="code" v-if="trimmedHtml">{{ trimmedHtml }}</div>
    <div class="code-title" v-if="trimmedCss">css</div>
    <div class="code" v-if="trimmedCss">{{ trimmedCss }}</div>
    <hr />
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
  },
  data: function() {
    return {
      trimmedHtml: this.html.trim(),
      trimmedCss: this.css.trim()
    };
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
