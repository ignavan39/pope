import { uglify } from "rollup-plugin-uglify";
import { minify } from "uglify-es";
import dts from "rollup-plugin-dts";

export default {
  input: "./build/index.js",
  output: [
    {
      file: "dist/pope.browser.js",
      format: "umd",
      name: "pope",
    },
    {
      file: "dist/pope.js",
      format: "cjs",
      name: "pope",
    },
    {
      file: "dist/pope.es.js",
      format: "es",
      name: "pope",
    },
  ],
  plugins: [uglify({}, minify)],
};
