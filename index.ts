interface NewsData {
  title: string;
  description: string;
  author: string;
  url: string;
  urlToImage: string;
}

const apiKey = "457a4f40c39548498f256e57fb807da3";
const country = "us";
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const newsData: NewsData[] = data.articles;

    const table = document.createElement("table");
    
    const thead = document.createElement("thead");

    const imageHead = document.createElement("th");
    imageHead.innerText = 'Image';

    const titleHead = document.createElement("th");
    titleHead.innerText = 'Title';

    const descriptionHead = document.createElement("th");
    descriptionHead.innerText = 'Description';

    const authorHead = document.createElement("th");
    authorHead.innerText = 'Author';

    const actionHead = document.createElement("th");
    actionHead.innerText = 'Action';

    thead.appendChild(imageHead);
    thead.appendChild(titleHead);
    thead.appendChild(descriptionHead);
    thead.appendChild(authorHead);
    thead.appendChild(actionHead);
    table.appendChild(thead);
    
    for (const news of newsData) {
      const row = document.createElement("tr");

      const imageCell = document.createElement("td");
      imageCell.innerHTML = `<img src="`+news.urlToImage+`" width="50" height="50" >`;
      row.appendChild(imageCell);
      
      const titleCell = document.createElement("td");
      titleCell.innerText = news.title;
      row.appendChild(titleCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.innerText = news.description;
      row.appendChild(descriptionCell);

      const authorCell = document.createElement("td");
      authorCell.innerText = news.author;
      row.appendChild(authorCell);

      const linkCell = document.createElement("td");
      const link = document.createElement("a");
      link.href = news.url;
      link.target = "_blank";
      link.innerText = "Read More";
      linkCell.appendChild(link);
      row.appendChild(linkCell);

      table.appendChild(row);
    }

    document.body.appendChild(table);
  } else {
    console.error("Error retrieving news data: " + xhr.statusText);
  }
};
xhr.onerror = function() {
  console.error("Error retrieving news data: " + xhr.statusText);
};
xhr.send();
