<!--
 * @Author: zyj
 * @Date: 2020-12-17 10:49:34
 * @LastEditors: zyj
 * @LastEditTime: 2020-12-17 16:10:11
 * @Description: file content
 * @FilePath: /markdown-doc/doc/src/Views/Home.vue
-->
<template>
  <div class="input">
    <textarea rows="30" v-model="text"></textarea>
  </div>
  <div class="hljs" id="hljs" ref="hlDiv" v-html="mdtext"></div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default {
  name: "HOME",
  data() {
    return {
      text: "",
    };
  },
  computed: {
    mdtext() {
      return this.text !==''? marked(this.text) : marked("```javascript\nfunction(){\n\tconsole.log(123)\n}\n```");
    },
  },

  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    console.log("mdtext", this.mdtext);
    this.mdtext = marked(this.mdtext);
  },
  methods: {},
};
</script>
<style lang="scss">
.input {
  flex-shrink: 0;
  flex-basis: 50%;
  margin-right: 10px;
  height: 100vh;
  textarea {
    width: 100%;
    height: 100vh;
  }
}
.hljs {
  flex-shrink: 0;
  flex-basis: 50%;
  height: 100vh;
}
</style>
