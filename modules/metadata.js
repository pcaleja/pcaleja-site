const metadata = (obj) => {
  const site = 'Philip Caleja'

  const {
    title,
    description,
    canonical,
    robots,
    bodyAttrs,
    google,
    script
  } = obj

  const data = {
    title: title || site,
    meta: [
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:locale',
        content: 'en_US'
      },
      {
        property: 'og:site_name',
        content: site
      }
    ],

    link: [],
    script: script || [],
    __dangerouslyDisableSanitizers: ['script'],
    bodyAttrs
  }

  if (title) {
    data.title = title
    data.meta.push(
      {
        property: 'og:title',
        content: title
      }
    )
  }

  if (description) {
    data.meta.push(
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:description',
        content: description
      }
    )
  }

  if (robots) {
    data.meta.push(
      {
        name: 'robots',
        content: robots
      }
    )
  }

  if (canonical) {
    data.meta.push(
      {
        property: 'og:url',
        content: canonical
      }
    )

    data.link.push(
      {
        rel: 'canonical',
        href: canonical
      }
    )
  }

  if (google) {
    data.meta.push(
      {
        name: 'google-site-verification',
        content: google
      }
    )
  }

  return data
}

export default metadata
