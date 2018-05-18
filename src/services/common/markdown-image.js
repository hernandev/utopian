/* eslint-disable */
const MATCH_MARKDOWN_IMAGE = /\!\[(.*)\]\((.*)\)/gm
const MATCH_INLINE_IMAGE = /\(inline\)/i

class MarkdownImage {
  // We receive both `markdown` and `containerWidth` on the constructor here
  static first (markdown) {
    let firstMatch = MATCH_MARKDOWN_IMAGE.exec(markdown)

    if (firstMatch !== null) {
      return firstMatch[2]
    }
    return null
  }

  // We receive both `markdown` and `containerWidth` on the constructor here
  static updateImageTags (markdown) {
    let updatedMarkdown = markdown
    let match
    let matches = []

    // Create an array of matches for all images we can find
    while ((match = MATCH_MARKDOWN_IMAGE.exec(markdown)) !== null) {
      matches.push({
        raw: match[0],
        alt: match[1],
        src: match[2]
      })
    }

    // If no matches are found, don't do anything
    if (!matches.length) {
      return markdown
    }

    // Loop through all image matches
    matches.forEach(({raw, alt, src}) => {
      // Create a new alt property without the `(inline)` string (if exists)
      const title = alt.replace(MATCH_INLINE_IMAGE, '')

      // Inline images are true if the image `alt` has `(inline)`
      const isInline = MATCH_INLINE_IMAGE.test(alt)

      // Full width properties (enabled by default)
      const fullWidthProperties = !isInline ? 'class="isFullWidth"' : ''

      // All breakpoints we want to support
      const sources = [414, 734, 1024, 1200, 1440]

      // Image tag
      const image = `<img alt="${title}" title="${title}" src="${src}" />`

      // Compose source tags for each break point, using Contentful's image API to serve optimized assets
      const source = sources.map(media => {
        // Image resize settings
        const settings = '&fit=fill&fm=jpg'

        return `<source media="(max-width: ${media}px)" srcset="${src}?w=${media}${settings} 1x, ${src}?w=${media * 2}${settings} 2x">` // eslint-disable-line
      }).join('')

      // Create picture tag
      const picture = `<picture ${fullWidthProperties}>${source}${image}</picture>`

      // Update markdown to use markup instead
      updatedMarkdown = updatedMarkdown.replace(raw, picture)
    })

    return updatedMarkdown
  }
}

export default MarkdownImage
