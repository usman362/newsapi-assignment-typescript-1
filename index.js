var apiKey = "457a4f40c39548498f256e57fb807da3";
var country = "us";
var url = "https://newsapi.org/v2/top-headlines?country=".concat(country, "&apiKey=").concat(apiKey);
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var newsData = data.articles;
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var imageHead = document.createElement("th");
        imageHead.innerText = 'Image';
        var titleHead = document.createElement("th");
        titleHead.innerText = 'Title';
        var descriptionHead = document.createElement("th");
        descriptionHead.innerText = 'Description';
        var authorHead = document.createElement("th");
        authorHead.innerText = 'Author';
        var actionHead = document.createElement("th");
        actionHead.innerText = 'Action';
        thead.appendChild(imageHead);
        thead.appendChild(titleHead);
        thead.appendChild(descriptionHead);
        thead.appendChild(authorHead);
        thead.appendChild(actionHead);
        table.appendChild(thead);
        for (var _i = 0, newsData_1 = newsData; _i < newsData_1.length; _i++) {
            var news = newsData_1[_i];
            var row = document.createElement("tr");
            var imageCell = document.createElement("td");
            imageCell.innerHTML = "<img src=\"" + news.urlToImage + "\" width=\"50\" height=\"50\" >";
            row.appendChild(imageCell);
            var titleCell = document.createElement("td");
            titleCell.innerText = news.title;
            row.appendChild(titleCell);
            var descriptionCell = document.createElement("td");
            descriptionCell.innerText = news.description;
            row.appendChild(descriptionCell);
            var authorCell = document.createElement("td");
            authorCell.innerText = news.author;
            row.appendChild(authorCell);
            var linkCell = document.createElement("td");
            var link = document.createElement("a");
            link.href = news.url;
            link.target = "_blank";
            link.innerText = "Read More";
            linkCell.appendChild(link);
            row.appendChild(linkCell);
            table.appendChild(row);
        }
        document.body.appendChild(table);
    }
    else {
        console.error("Error retrieving news data: " + xhr.statusText);
    }
};
xhr.onerror = function () {
    console.error("Error retrieving news data: " + xhr.statusText);
};
xhr.send();
