const I = actor();

module.exports = {
    resultBar: '#product-list',
    productName: '#li',
    noResult: 'h1[id="noResultsTitle"]',

    async hasResults(searchString) {
        const results = await I.grabTextFrom(this.productName);
        return results[0].toLowerCase().includes(searchString.toLowerCase());
    },

    showProductDetails : function() {
      I.checkOption('Gender','Men')
      // I.selectOption('ul.size.li','xs');
      I.selectOption('Size','XS');

      // I.checkOption('#Men','.search_value');
      // I.checkOption('men','.search_value');
      // I.checkOption('men');

        I.click(this.productName);
        I.wait(2);
    }
}
