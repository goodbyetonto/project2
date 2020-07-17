$(document).ready(() => {
    const varietyInput = $(".Input-search").text();
    const vintageInput = $(".vintage-search").text();
    const priceLower = $(".price-lower-1").Val();
    const priceUpper = $(".price-upper-2").Val();
    const varietybtn = $(".variety-search-btn");
    const vintagebtn = $(".vintage-search-btn");
    const pricebtn = $(".price-search-btn");
    const searchBody = $("#row");
    const cards = $(".cardb");

getWines();
//only pulls up 10 for now. Going to change after looking at seeFood
function getWines() {
    $.get("api/wines/").then(wines => {
        for(let i = 0; i < 10 ;i++) {
            let varietyCard = 
                    `<div class="card" style= "width: 33%">
                    <div class= "card-body>
                    <h5 class= "card-title"> ${res[i].Title} </h5>
                    <p class= "card-text"> Price: ${res[i].Price}, Vintage: ${res[i].Vintage}, 
                    Points:${res[i].Points}, Winery: ${res[i].Winery}, Designation: ${res[i].Designation}
                    </p>
                    </div>
                    </div>
                    `;
                    searchBody.append(varietyCard);
           } 
    });
}
     
$(varietybtn).on("click", () => {
    //ajax post route/api/winse/vie {"sting"}
    searchBody.clear();
        $.post("/api/wines/:variety", {variety: varietyInput})
        .then((res) => {
            for(let i = 0; i < res.length; i++){
                let varietyCard = 
                `<div class="card" style= "width: 33%">
                <div class= "card-body>
                <h5 class= "card-title"> ${res[i].Title} </h5>
                <p class= "card-text"> Price: ${res[i].Price}, Vintage: ${res[i].Vintage}, 
                Points:${res[i].Points}, Winery: ${res[i].Winery}, Designation: ${res[i].Designation}
                </p>
                </div>
                </div>
                `;
                searchBody.append(varietyCard);
            }
        });
    //.then(function(res) => {
    //  parse array of objects into template lieterals cards
    //})

});

$(vintagebtn).on("click", () => {
    searchBody.clear();
    cards.post("/api/wines/:vintage", {vintage: vintageInput})
    .then((res)=> {
        for(let i = 0; i < res.length; i++){
            let priceCard = 
            `<div class="card" style= "width: 33%">
            <div class= "card-body>
            <h5 class= "card-title"> ${res[i].Title} </h5>
            <p class= "card-text"> Price: ${res[i].Price}, Vintage: ${res[i].Vintage}, 
            Points: ${res[i].Points}, Winery: ${res[i].Winery}, 
            Designation: ${res[i].Designation}, Variety: ${res[i].Designation}
            </p>
            </div>
            </div>`;

            searchBody.append(priceCard);
        }
    });
});

$(pricebtn).on("click", () => {
    searchBody.clear();
    $.post("/api/wines/:price", { lower: priceLower , upper: priceUpper})
        .then((res) => {
            for(let i = 0; i < res.length; i++){
                let priceCard = 
                `<div class="card" style= "width: 33%">
                <div class= "card-body>
                <h5 class= "card-title"> ${res[i].Title} </h5>
                <p class= "card-text"> Price: ${res[i].Price}, Vintage: ${res[i].Vintage}, 
                Winery :${res[i].Points}, Winery: ${res[i].Winery}, 
                Designation: ${res[i].Designation}, Variety: ${res[i].Designation}
                </p>
                </div>
                </div>`;

                searchBody.append(priceCard);
            }
        });
    });
});