<!--
 * @Author: zyj
 * @Date: 2020-12-17 13:12:01
 * @LastEditors: zyj
 * @LastEditTime: 2020-12-17 16:36:37
 * @Description: file content
 * @FilePath: /markdown-doc/doc/src/Views/Contact.vue
-->
<template>
  <div class="input">
    <textarea rows="30" v-model="text"></textarea>
  </div>
  <div class="hljs" id="hljs" ref="hlDiv" v-html="mdtext"></div>
</template>

<script>
import { onMounted, ref,computed } from "vue";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
export default {
  setup() {
    const text = ref("");
    onMounted(() => {
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
      mdtext.value = marked(mdtext.value);
    });
    const mdtext = computed(() => {
      return text.value !== ""
        ? marked(text.value)
        : marked("```javascript\nfunction(){\n\tconsole.log(123)\n}\n```");
    });

    return {
      text,
      mdtext,
    };
  },
};
</script>

<style></style>
