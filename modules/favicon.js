import _ from 'underscore'

function setAppleIconSizes () {
  const sizes = [57, 60, 72, 76, 114, 120, 144, 152, 180]
  return _.map(sizes, size => {
    return {
      rel: 'apple-touch-icon',
      sizes: `${size}x${size}`,
      href: `/apple-icon-${size}x${size}.png`
    }
  })
}

function setFaviconSizes () {
  const sizes = [16, 32, 96]
  return _.map(sizes, size => {
    return {
      rel: 'icon',
      type: 'image/png',
      sizes: `${size}x${size}`,
      href: `/favicon-${size}x${size}.png`
    }
  })
}

const favicon = _.union(
  setAppleIconSizes(),
  setFaviconSizes(),
  [{ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' }]
)

export default function () {
  this.options.head.link = _.union(this.options.head.link, favicon)
}
