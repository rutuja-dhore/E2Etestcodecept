
const I = actor();
var navTools = require('./NavTools');
var popup = require('./Popup');

module.exports = {
    addToCartButton: 'input[id="add-to-cart-button"]',

    async addToCart() {
        I.click(this.addToCartButton);
        I.wait(2);
        I.pressKey('Escape');
        let cartCount = await I.grabTextFrom(navTools.cartCount);
        return cartCount === '1';
    }
}
