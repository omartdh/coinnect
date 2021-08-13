$("document").ready(function(){
    console.log("test1")

    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        method: "GET",
        
      }).then(function (response) {
            console.log(response)

            // const btName = response[0].name
            // console.log(btName)

            // const price = response[0].current_price

            // const n2 = document.getElementById("n2");
            // n2.textContent = price;

            // const n1 = document.getElementById('n1');
            // n1.textContent = btName

      })



})