// scrap product information from anntaylor's website 
// https://www.anntaylor.com/dresses/cata000012?goToPage=2&N=0

function x() {
	// scrap the Ann Taylor Women's Dress Normal to get popular items
	var items = [];
	products = document.getElementsByClassName("product-wrap"); 
	for (let i = 0; i < products.length; i++){
		// var item = {};
		name = products[i].querySelector('[itemprop="name"]').innerText;
		url = products[i].getElementsByTagName("a")[0].href;
		img_url =products[i].getElementsByTagName("img")[0].src;
		price = products[i].querySelector('[itemprop="price"]').content;
		var item = {
			"index":i,
			"name": name,
			"url":url,
			"img_url": img_url,
			"price":price
		};

    // console.log(item);
		// console.log(promo);
		items.push(item);
	}
	str = JSON.stringify(items)
	console.log(str);
  // copy the console log to sublime editor
	// shift+command+p select pretty json to make it pretty
}
