<template>
  <div class="example">
    <h3>{{ title }}</h3>
    <Resizable panelColor="#1ec0ff" initialWidth="100%">
      <div class="rendering">
        <slot></slot>
      </div>
    </Resizable>

    <div v-if="html">
      <div class="code-type" v-if="html">html</div>
      <pre><code class="xml" v-html="highlight('html', html).value"></code></pre>
    </div>

    <div v-if="css">
      <div class="code-type" v-if="css">css</div>
      <pre><code class="css" v-html="highlight('css', css).value"></code></pre>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/highlight";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import Resizable from "./Resizable";

hljs.registerLanguage("css", css);
hljs.registerLanguage("xml", xml);

export default {
  name: "Example",
  components: {
    Resizable
  },
  mounted() {
    hljs.initHighlighting();
  },
  beforeDestroy() {
    hljs.initHighlighting.called = false;
  },
  methods: {
    highlight: hljs.highlight
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
/* @import "../../node_modules/highlight.js/styles/atom-one-light.css"; */
/* @import "../../node_modules/highlight.js/styles/foundation.css"; */
@import "../../node_modules/highlight.js/styles/github.css";

.code-type {
  font-family: Courier, monospace;
}

.rendering {
  padding: 6.5px;
  margin: 12px 0;
  background: #f8f8f8;
  border-right: none;
}
</style>
