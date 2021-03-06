$(document).ready(() => {
    const varietyInput = $("#variety-search");
    const vintageInput = $("#vintage-search");
    const priceLower = $("#price-lower-1");
    const priceUpper = $("#price-upper-2");
    const varietyBtn = $("#variety-search-btn");
    const vintageBtn = $("#vintage-search-btn");
    const priceBtn = $("#price-search-btn");
    const cards = $("#detail-section");
    //future feature multi-page returns
    getWines();
    //only pulls up 10 for now. Going to change after looking at seeFood
    function getWines() {
        $.get("/api/wines/", (wines) => {
            for (let i = 0; i < 10; i++) {
                let winesCard =
                    `<div class="card" style= "width: 33%">
                    <div class= "card-body>
                    <h5 class= "card-title"> ${wines[i].Title} </h5>
                    <p class= "card-text"> Price: ${wines[i].Price}, Vintage: ${wines[i].Vintage}, 
                    Points:${wines[i].Points}, Winery: ${wines[i].Winery}, Designation: ${wines[i].Designation}
                    </p>
                    </div>
                    </div>
                    `;
                cards.append(winesCard);
            }; 
        });

        $(varietyBtn).on("click", () => {
            const varietyVal = varietyInput.val();
            const letters = /^[A-Za-z]+$/;
            if (varietyVal === "" || !(varietyVal.match(letters))) {
                window.alert("You did not enter a proper wine varietal. Enter at least four letters from the varietal you wish to search for.");
            } else {
                cards.empty();
                $.post("/api/wines/variety", { variety: varietyVal }).then((data) => {
                    if (data.length === 0) {
                        window.alert("There are no wines of matching your varietal. Please try your varietal search again.")
                    } else {
                        console.log("The API has returned an array of length " + data.length);
                        for (let i = 0; i < data.length; i++) {
                            let varietyCard =
                                `<div class="card" style= "width: 33%">
                                <div class= "card-body>
                                <h5 class= "card-title"> ${data[i].Title} </h5>
                                <p class= "card-text"> Price: ${data[i].Price}, Vintage: ${data[i].Vintage}, 
                                Points:${data[i].Points}, Winery: ${data[i].Winery}, Variety: ${data[i].Variety}
                                </p>
                                </div>
                                </div>`;
                            cards.append(varietyCard);
                        }; 
                    }; 
                });
            }; 
        });


        $(vintageBtn).on("click", () => {
            const vintageVal = vintageInput.val();
            const numbers = /^[0-9]\d*$/;
            if (vintageVal === "" || !(vintageVal.match(numbers))) {
                window.alert("You did not enter a proper vintage. Enter the last two digits of the vintage year you would like to search for.");
            } else {
                cards.empty();
                $.post("/api/wines/vintage", { vintage: vintageVal }).then((data) => {
                    if (data.length === 0) {
                        window.alert("There are no wines with this vintage. Please enter another vintage.")
                    } else {
                        console.log("The API has returned an array of length " + data.length);
                        for (let i = 0; i < data.length; i++) {
                            let vinCard =
                                `<div class="card" style= "width: 33%">
                                <div class= "card-body>
                                <h5 class= "card-title"> ${data[i].Title} </h5>
                                <p class= "card-text"> Price: ${data[i].Price}, Vintage: ${data[i].Vintage}, 
                                Points: ${data[i].Points}, Winery: ${data[i].Winery}, 
                                Designation: ${data[i].Designation}, Variety: ${data[i].Designation}
                                </p>
                                </div>
                                </div>`;
                            cards.append(vinCard);
                        }; 
                    }; 
                });
            }; 
        });

        $(priceBtn).on("click", () => {
            const lowerVal = priceLower.val();
            const upperVal = priceUpper.val();
            const numbers = /^[0-9]\d*$/;
            if (!(lowerVal.match(numbers)) || !(upperVal.match(numbers))) {
                window.alert("You entered alpha characters in your price(s). Please enter only numeric characters.");
            } else {
                cards.empty();
                $.post("/api/wines/price", { lower: lowerVal, upper: upperVal }).then((data) => {
                    if (data.length === 0) {
                        window.alert("Your search returned no results. Please try another set of prices."); 
                    } else {
                        for (let i = 0; i < data.length; i++) {
                            let priceCard =
                                `<div class="card" style= "width: 33%">
                                <div class= "card-body>
                                <h5 class= "card-title"> ${data[i].Title} </h5>
                                <p class= "card-text"> Price: ${data[i].Price}, Vintage: ${data[i].Vintage}, 
                                Winery :${data[i].Points}, Winery: ${data[i].Winery}, 
                                Designation: ${data[i].Designation}, Variety: ${data[i].Designation}
                                </p>
                                </div>
                                </div>`;
                            cards.append(priceCard);
                        }; 
                    };
                });
            }; 
        });
    };
}); 