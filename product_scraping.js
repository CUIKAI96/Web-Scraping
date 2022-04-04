function y(){
	url_list_result = [
      // example of list of urls 
      // replace this will your results
  			"https://www.anntaylor.com/chain-print-belted-midi-dress/576008",
  			"https://www.anntaylor.com/collared-belted-shirtdress/578291",
  			"https://www.anntaylor.com/floral-tie-waist-flare-dress/584001"
			];
	var items = [];

	for (let i = 0; i < url_list_result.length; i++){
		window.open(url_list_result[i],"_self");
		style = document.getElementsByClassName("style")[0].innerText;
		description = document.getElementsByClassName("description")[0].innerText;
		
		var item = {
			"url":url,
			"style_num": style,
			"description":description
		};

		console.log(item);
		items.push(item);
		window.close();
	}

	str = JSON.stringify(items)
	console.log(str);
}
