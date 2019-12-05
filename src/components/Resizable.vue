<template>
  <div class="container" :style="containerStyle" ref="container">
    <slot></slot>
    <div
      class="panel"
      :style="panelStyle"
      @mousedown.capture.prevent="startResize"
      ref="panel"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Resizable",
  props: {
    panelColor: {
      type: String,
      default: "transprant"
    },
    panelWidth: {
      type: Number,
      default: 4
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    minWidth: {
      type: Number,
      default: 0
    },
    initialWidth: {
      default: undefined
    }
  },
  data() {
    const { panelColor, panelWidth, minWidth, initialWidth } = this.$props;

    const containerInitialWidth =
      typeof initialWidth === "number" ? `${initialWidth}px` : initialWidth;

    const containerWidth = containerInitialWidth || `${minWidth}px`;

    return {
      mouseXOnStartResize: 0,
      containerWidthOnStartResize: 0,
      containerStyle: `width:${containerWidth};min-width:${minWidth}px;padding-right:${panelWidth}px`,
      panelStyle: `background-color:${panelColor};width:${panelWidth}px`
    };
  },
  methods: {
    startResize(e) {
      const containerEl = this.$refs.container;
      if (!containerEl) return;

      this.containerWidthOnStartResize = containerEl.offsetWidth;
      this.mouseXOnStartResize = e.x;

      document.addEventListener("mousemove", this.resize, false);
      document.addEventListener("mouseup", this.endResize, false);

      const panelEl = this.$refs.panel;
      if (!panelEl) return;
      panelEl.style.padding = "0 10px";
      panelEl.style.marginRight = "-10px";
    },
    endResize() {
      document.removeEventListener("mousemove", this.resize, false);
      document.removeEventListener("mouseup", this.endResize, false);

      const panelEl = this.$refs.panel;
      if (!panelEl) return;
      panelEl.style.padding = "0";
      panelEl.style.marginRight = "0";
    },
    resize(e) {
      const dx = e.x - this.mouseXOnStartResize;
      if (dx === 0) return;

      requestAnimationFrame(() => {
        const containerEl = this.$refs.container;
        if (!containerEl) return;

        const targetWidth = this.containerWidthOnStartResize + dx;
        const maxWidth =
          this.$props.maxWidth ||
          containerEl.parentElement.clientWidth ||
          window.innerWidth;
        if (targetWidth < this.$props.minWidth || targetWidth > maxWidth) {
          return;
        }

        containerEl.style.width = `${targetWidth}px`;
        containerEl.style.minWidth = `${targetWidth}px`;
      });
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  box-sizing: border-box;
}

.panel {
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  cursor: col-resize;
  background-clip: content-box;
}
</style>
