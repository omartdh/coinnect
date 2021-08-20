$("document").ready(function(){

      function initial(){   
            $("#icon").empty();
            $("#coin-name").empty();
            $('#coin-prics').empty();
            $("#market-cap").empty();
            $("#max-supply").empty();
            $("#total-val").empty();
      }

      let coinName = "";
      document.getElementById("search-coin").addEventListener("click", function(e){
            e.preventDefault()
            initial();

            coinName = $("#search-input").val().trim();
            $.ajax({
                        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
                        method: "GET",
                        
                 }).then(function (coin) {
                        console.log(coin)
                        //     console.log(coin.tickers[0].last)
                        let valid = false;
                        if(coinName !=""){

                              for(let i = 0; i < coin.length; i++){
                                    if(coinName == coin[i].id || coinName == coin[i].symbol){
                                          console.log(coin[i].id)
                                          const name = coin[i].name;
                                          console.log(name)
      
                                          let imgURL = coin[i].image;
                                          let coinLogo = $('<img>');
                                          coinLogo.attr("src", imgURL);
                                          coinLogo.css("width", "55px")
      
                                          $('#coin-name').append(coinLogo);
                                          $('#coin-name').append(name); 
                                          $('#coin-prics').append($('<h4>').text("Current Price: " + coin[i].current_price));
                                          $('#market-cap').append($('<h4>').text("Market-cap: " + coin[i].market_cap));
                                          $('#max-supply').append($('<h4>').text("Max-supply: " + coin[i].max_supply));
                                          $('#total-val').append($('<h4>').text("Total-val: " + coin[i].total_volume));
                                          valid = true;
                              
                                    } else if(i == coin.length-1 && valid == false){
                                           alert('Please enter a valid coin name')
                                    }
                             }
                        }  
           })
                //initial();
      })

})
