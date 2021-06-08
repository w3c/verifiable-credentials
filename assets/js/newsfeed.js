// Quick n' dirty news feed
// Stolen from Philippe le Hégaret and the Web Performance WG home page...
//
(function () {
	try {
		var attempts  = 0;
		var max_items = 5;

		function updateArticles(feed) {
			var body = document.getElementById("articles");

			if (body === null) {
				// just in case the network request was really fast
				attempts++;
				if (attempts < 5) {
					setTimeOut(function() { updateArticles(feed); }, 300);
				}
				return;
			}

			var items = feed.querySelectorAll("item");
			var item_num = items.length < max_items ? items.length : max_items;
			for (var i = 0; i < item_num; i++) {
				var item    = items.item(i);
				var desc    = item.querySelector("description").textContent;
				var link    = item.querySelector("link").textContent;
				var title   = item.querySelector("title").textContent;
				var d       = new Date(item.querySelector("pubDate").textContent);

				var article = document.createElement("article");

				var h3 = article.appendChild(document.createElement("h3"));
				h3.textContent = title;

				var date_p = article.appendChild(document.createElement("p"));
				date_p.setAttribute("class","date");

				var time   = date_p.appendChild(document.createElement("time"));
				time.setAttribute("class", "dtstart");
				time.setAttribute("datetime",d.toISOString());
				time.textContent = d.toDateString();

				var desc_p = article.appendChild(document.createElement("p"));
				desc_p.innerHTML = desc;
				var a = desc_p.appendChild(document.createElement("a"));
				a.textContent = ' Continue reading →';
				a.href = link;

				body.appendChild(article);
			}
		}

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
		    if (this.readyState == 4 && this.status == 200) {
	      		updateArticles(this.responseXML);
	    	}
	  	};

		xhr.open("GET", "https://www.w3.org/blog/category/technology/did/feed/", true);
		// xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.w3.org/blog/dpub/category/activity-news/feed/", true);
	  	xhr.withCredentials = false;
	  	xhr.send(null);
	} catch (e) {
	}
})();
