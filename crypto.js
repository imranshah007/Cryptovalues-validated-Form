URL = "https://api2.binance.com/api/v3/ticker/24hr" ;
fetch(URL)
.then((response) => {
    return response.json();
})
.then((data) => {

    for (let i = 0; i < 100 ; i++) {
        var main = document.getElementById('main');
        var card = document.createElement('div');
        card.setAttribute('id','card');
        var p = document.createElement('p');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        var p4 = document.createElement('p');
        var p5 = document.createElement('p');
        p.innerText = data[i].symbol;
        p1.innerHTML = "Current Price : "+data[i].priceChange;
        p2.innerHTML = "Price change % : "+data[i].priceChangePercent;
        p3.innerHTML = "Weighted Average price : "+data[i].weightedAvgPrice;
        p4.innerHTML = "Prev Close Price : "+data[i].prevClosePrice;
        p5.innerHTML = "Last Price : "+data[i].lastPrice;
        card.appendChild(p);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
        main.appendChild(card);
    }
})
.catch((error)=>{
    main.innerText = "Error : "+error;
});