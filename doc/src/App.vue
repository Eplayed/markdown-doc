<!--
 * @Author: zyj
 * @Date: 2020-12-17 10:49:34
 * @LastEditors: zyj
 * @LastEditTime: 2020-12-17 16:02:03
 * @Description: file content
 * @FilePath: /markdown-doc/doc/src/App.vue
-->
<template>
  <div id="root">
    <div id="nav">
      <router-link to="/"> Home</router-link>
      <router-link to="/contact">Contact </router-link>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
#root {
  height: 100vh;
  width: 100vw;
  display: flex;
  #nav {
    flex-basis: 200px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }
  #main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex: 1;
  }
}
</style>
