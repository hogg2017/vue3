/*
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2022-02-06 18:33:05
 * @Description: eslint配置文件
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parse: "babel-eslint"
  },
  rules: {
    "no-console": process.eventNames.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.eventNames.NODE_ENV === "production" ? "warn" : "off",
    "no-trailing-spaces": "off",
    "spaced-comment": "off"
  }
}
