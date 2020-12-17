import { defineComponent, onMounted, ref } from "vue";
import marked from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import "./Home.scss";

const Home = defineComponent({
  setup() {
    const mdtext = ref("```javascript\nfunction(){\n\tconsole.log(123)\n}\n```");

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
      console.log("mdtext", mdtext.value);
      mdtext.value = marked(mdtext.value);
    });

   const inputChange = (val)=>{
      const text = val.target.value
      console.log(marked(text))
      mdtext.value = marked(text)
      document.getElementById('hljs').innerHTML = mdtext.value
    }

    return () => (
      <>
        <div class="input">
          <textarea rows="30" type="textarea" onInput={(val)=>inputChange(val)} ></textarea>
        </div>
        <div class="hljs" id="hljs" ref="hlDiv"></div>
      </>
    );
  },
});

export default Home;
