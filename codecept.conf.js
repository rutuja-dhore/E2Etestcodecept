exports.config = {
  tests: "./tests/*/*.js",
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.amazon.de'
    }
  },
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/HomePage.js',
    resultPage: './pages/ResultPage.js',
    productDetailsPage: './pages/ProductDetailsPage.js',
    popup: './pages/Popup.js',
    cartPage: './pages/CartPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptexample'
}
