// imports.
import marked from 'marked'
import Renderer from 'marked-plaintext'
import sanitize from 'sanitize-html'
import sanitizeConfig from './sanitizer-config'

// remarkable.
const Remarkable = require('remarkable')

// remarkable options.
const remarkableOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: false,
  quotes: '“”‘’'
}

// plain text parser.
export const parseAsPlainText = (markdown) => {
  const renderer = new Renderer()
  return marked(markdown, { renderer })
}

// html parser.
export const parseAsHtml = (markdown) => {
  let md = new Remarkable(remarkableOptions)
  return sanitize(md.render(markdown), sanitizeConfig({}))
}
