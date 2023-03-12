function importAll(r) {
  let images = []
  r.keys().forEach(item => images.push(r(item)))
  return images
}

const shoes = importAll(require.context('./assets/shoes', false, /\.(JPG)/))
const paintings = importAll(require.context('./assets/paintings', false, /\.(PNG|JPG)/))

export {shoes, paintings}