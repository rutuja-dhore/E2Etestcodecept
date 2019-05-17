exports.config = {
  tests: "./tests/addToCart/*.js",
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.bergfreunde.eu'
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
  plugins: {
   "screenshotOnFail": {
     "enabled": true
   }
 },
  bootstrap: null,
  mocha: {},
  name: 'codeceptexample'
}
