<template>
  <div>
    <h1><code>white-space、overflow-wrap、word-wrap、word-break</code></h1>

    <h2>
      <code>white-space: normal | nowrap | pre | pre-wrap | pre-line</code>
    </h2>
    <table style="margin-left:20px;text-align:left">
      <thead>
        <tr>
          <th></th>
          <th>换行符</th>
          <th>空格和制表符</th>
          <th>文字转行</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><code>normal</code></th>
          <td>合并</td>
          <td>合并</td>
          <td>转行</td>
        </tr>
        <tr>
          <th><code>nowrap</code></th>
          <td>合并</td>
          <td>合并</td>
          <td>不转行</td>
        </tr>
        <tr>
          <th><code>pre</code></th>
          <td>保留</td>
          <td>保留</td>
          <td>不转行</td>
        </tr>
        <tr>
          <th><code>pre-wrap</code></th>
          <td>保留</td>
          <td>保留</td>
          <td>转行</td>
        </tr>
        <tr>
          <th><code>pre-line</code></th>
          <td>保留</td>
          <td>合并</td>
          <td>转行</td>
        </tr>
      </tbody>
    </table>

    <h2>
      <code>overflow-wrap: normal | break-word</code>
      ||
      <code>word-wrap: normal | break-word</code>
    </h2>
    <p>word-wrap是overflow-wrap的别名。</p>
    <ul>
      <li>normal 表示在正常的单词结束处换行。</li>
      <li>
        break-word
        表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行。
      </li>
    </ul>

    <h2>
      <code>word-break: normal | break-all | keep-all</code>
    </h2>
    <ul>
      <li>normal 使用默认的断行规则。</li>
      <li>
        break-all 对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。
      </li>
      <li>keep-all CJK 文本不断行。 Non-CJK 文本表现同 normal。</li>
    </ul>

    <Example :html="html" :css="css">
      <h4>white-space：normal</h4>
      <div class="box white-space-normal">
        There are some incomprehensible long words.
      </div>

      <h4>white-space：nowrap</h4>
      <div class="box white-space-nowrap">
        There are some incomprehensible long words.
      </div>

      <h4>overflow-wrap: break-word</h4>
      <div class="box overflow-wrap-break-word">
        There are some incomprehensible long words.
      </div>

      <h4>word-break: break-all</h4>
      <div class="box word-break-break-all">
        There are some incomprehensible long words. 有一些不可理解的长单词。
      </div>

      <h4>word-break: keep-all</h4>
      <div class="box word-break-keep-all">
        There are some incomprehensible long words. 有一些不可理解的长单词。
      </div>
    </Example>
  </div>
</template>

/************************/
<style scoped>
.box {
  outline: solid 1px #1ec0ff;
  width: 100px;
  margin-bottom: 12px;
  margin-top: 8px;
}

.white-space-normal {
  white-space: normal;
}

.white-space-nowrap {
  white-space: nowrap;
}

.overflow-wrap-break-word {
  overflow-wrap: break-word;
}

.word-break-break-all {
  word-break: break-all;
}

.word-break-keep-all {
  word-break: keep-all;
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
