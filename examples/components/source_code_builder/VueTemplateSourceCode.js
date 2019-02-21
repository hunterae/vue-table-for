import prettier from 'prettier/standalone'
import htmlParser from 'prettier/parser-html'
import babylonParser from 'prettier/parser-babylon'
import Prism from 'vue-prism-component'

var getChildrenTextContent = function(children) {
  return children
    .map(function(node) {
      return node.children ? getChildrenTextContent(node.children) : node.text
    })
    .join('')
}

export default {
  functional: true,
  components: {
    Prism
  },
  render(h, context) {
    let slots = context.slots()
    let htmlSource = slots.default
      .map(node => node.text)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim()

    if (context.listeners && context.listeners['update:sourceCode']) {
      context.listeners['update:sourceCode'](htmlSource)
    }

    htmlSource = `<template> ${htmlSource} </template>`
    htmlSource = prettier.format(htmlSource, {
      jsxBracketSameLine: true,
      printWidth: 40,
      parser: 'vue',
      plugins: [htmlParser]
    })

    let jsSource = ''
    if (slots.script) {
      jsSource += getChildrenTextContent(slots.script)
    }
    // remove blank lines from the JS
    jsSource = jsSource.replace(/^\s*[\r\n]/gm, '')

    jsSource = prettier.format(jsSource, {
      semi: false,
      jsxBracketSameLine: true,
      printWidth: 40,
      parser: 'babylon',
      plugins: [babylonParser]
    })
    if (context.listeners && context.listeners['update:jsCode']) {
      context.listeners['update:jsCode'](jsSource)
    }

    let src =
      `${htmlSource}
<script>
${jsSource}</scrip` + 't>'

    return h(Prism, src)
  }
}
