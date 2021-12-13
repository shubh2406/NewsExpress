console.log("We are at vid_37 and we'll make a project on News website");
// 01cc0fdadac74acb97469ae04ddeccb6

// Initialize the news params
let country = "in";
let apiKey = "01cc0fdadac74acb97469ae04ddeccb6";

// Grab the news container
let newsAccordion = document.getElementById("newsaccordion");

// Create an AJAX GET Request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);

    let articles = json["articles"];
    console.log(articles);

    let counter = 1;
    let newsHtml = "";
    for (news in articles) {
      newsHtml += `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${counter}">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse${counter}"
                                aria-expanded="true"
                                aria-controls="collapse${counter}"
                            >
                                <b>Breaking New ${counter}:&nbsp;</b>${articles[news]["title"]}
                            </button>
                            </h2>
                            <div
                            id="collapse${counter}"
                            class="accordion-collapse collapse"
                            aria-labelledby="heading${counter}"
                            data-bs-parent="#newsaccordion"
                            >
                                <div class="accordion-body">
                                ${articles[news]["description"]} <a href=${articles[news]["url"]} target="blank">Read more...</a>
                                </div>
                            </div>     
                        </div>`;

      counter++;
    }
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Error");
  }
};

xhr.send();
