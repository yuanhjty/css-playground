<template>
  <div class="example">
    <p class="code-title" v-if="title">{{ title }}</p>
    <hr />
    <div class="panel" ref="panel">
      <div class="result">
        <slot></slot>
      </div>
      <div class="right-handler" @mousedown.capture.prevent="startResize"></div>
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
  },
  data() {
    return {
      mouseXOnStartResize: 0,
      panelMarginRightOnStartResize: 0
    };
  },
  methods: {
    startResize(e) {
      const panelEl = this.$refs.panel;
      if (!panelEl) {
        return;
      }

      const currentMarginRight = parseInt(panelEl.style.marginRight, 10) || 0;
      this.panelMarginRightOnStartResize = currentMarginRight;
      this.mouseXOnStartResize = e.x;

      document.addEventListener("mousemove", this.resize, false);
      document.addEventListener("mouseup", this.endResize, false);
    },
    endResize() {
      document.removeEventListener("mousemove", this.resize, false);
      document.removeEventListener("mouseup", this.endResize, false);
    },
    resize(e) {
      const dx = e.x - this.mouseXOnStartResize;
      if (dx === 0) {
        return;
      }

      requestAnimationFrame(() => {
        const panelEl = this.$refs.panel;
        if (!panelEl) return;

        const targetMarginRight = this.panelMarginRightOnStartResize - dx;
        if (panelEl.offsetWidth < 0 || targetMarginRight < 0) {
          return;
        }

        panelEl.style.marginRight = `${targetMarginRight}px`;
      });
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

.panel {
  position: relative;
  margin: 16px 0;
  padding-right: 5px;
  background: #f5f5f5;
}

.right-handler {
  width: 5px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: #1ec0ff;
  cursor: col-resize;
}

.result {
  padding: 16px 0;
}
</style>
