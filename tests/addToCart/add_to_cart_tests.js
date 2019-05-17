const { I, homePage, resultPage, productDetailsPage, cartPage } = inject();
const assert = require('assert');

Feature('Add to card functionality');

Before(() => {
  I.amOnPage('https://www.bergfreunde.eu/');
});

Scenario('Add a product to shopping cart', async () => {
    const searchString = 'LUNDHAGS';
    homePage.search(searchString);
    resultPage.showProductDetails();
    // assert.equal(true, await productDetailsPage.addToCart());
    // I.seeElement(cartPage.confirmText);
});
