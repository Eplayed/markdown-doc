/*
 * @Author: zyj
 * @Date: 2020-12-17 13:24:27
 * @LastEditors: zyj
 * @LastEditTime: 2020-12-17 16:26:27
 * @Description: file content
 * @FilePath: /markdown-doc/vite.config.js
 */

import path from "path";

const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr);
};
module.exports = {
  alias: {
    "/@/": pathResolve("./src"),
    "/@/views": pathResolve("./src/views"),
    "/@/api": pathResolve("./src/api"),
    "/@/components": pathResolve("./src/components"),
    "/@/utils": pathResolve("./src/utils"),
  },
};
