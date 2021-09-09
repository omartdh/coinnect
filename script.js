$("document").ready(function(){

    function initial(){   
          $("#icon").empty();
          $("#coin-logo").empty();
          $("#coin-name").empty();
          $('#coin-prics').empty();
          $("#market-cap").empty();
          $("#max-supply").empty();
          $("#total-val").empty();
          $('#coin-24').empty();
      //     $('.container').css("background-color", "#425b7f")
      $('.container').css( "border", "none" );
          $( "#coin-prics, #market-cap, #total-val" ).css( "border", "none" );
    }

    function numFormatter(num) {
      if(num > 1000000 && num < 1000000000){
          return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
      } else if(num > 1000000000 && num < 1000000000000){
            return (num/1000000000).toFixed(1) + 'B'; // convert to M for number from > 1 million 
      } else if(num < 900000){
          return num; // if value < 1000, nothing to do
      }
  }

    let coinName = "";
    document.getElementById("search-coin").addEventListener("click", function(e){
          e.preventDefault()
          initial();

          coinName = $("#search-input").val().trim().toLowerCase();
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
                                        const name = coin[i].name;
                                        const price_24 = coin[i].price_change_percentage_24h;
                                        let imgURL = coin[i].image;
                                        let coinLogo = $('<img>');
                                        coinLogo.attr("src", imgURL);
                                        coinLogo.css("width", "50px")
                                         $('.container').css("border", "0.5px solid rgb(90 91 93)");
                                        $('#coin-logo').append(coinLogo);
                                        $('#coin-logo').append(name); 
                                        
                                           if(coin[i].price_change_percentage_24h > 0){
                                          $('#coin-24').append(price_24 + "% ▲");
                                          $('#coin-24').css("color", "rgb(30 210 53)")
                                    } else {
                                          $('#coin-24').append(price_24 + "% ▼");
                                          $('#coin-24').css("color", "rgb(247 88 88)")
                                    }

                                    var formatter = new Intl.NumberFormat('en-US', {
                                          style: 'currency',
                                          currency: 'USD',                                       
                                        });

                                        let marketCapp = coin[i].market_cap;
                                        marketCapp = numFormatter(marketCapp);
                                        let totalVolumee = coin[i].total_volume;
                                        totalVolumee = numFormatter(totalVolumee);
                                        

                                        $('#coin-prics').append($('<div>').text("Current Price: "));
                                        $('#coin-prics').append($('<div>').text(formatter.format(coin[i].current_price)));
                                        $('#market-cap').append($('<div>').text("Market Cap: "));
                                        $('#market-cap').append($('<div>').text("$" + marketCapp));
                                        $('#max-supply').append($('<div>').text("Max-supply: " + coin[i].max_supply));
                                        $('#total-val').append($('<div>').text("Total Valume: "));
                                        $('#total-val').append($('<div>').text("$" + totalVolumee));
                                        $( "#coin-prics, #market-cap, #total-val" ).css( "border", "0.5px solid rgb(90 91 93)" );
                                        $( "#coin-prics, #market-cap, #total-val" ).css( "border-radius", "5px" );
                                        valid = true;
                            
                                  } else if(i == coin.length-1 && valid == false){
                                         alert('Your search did not match any results')
                                  }
                           }
                      }  
         })
              //initial();
    })





    $.ajax({
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      method: "GET",
      
    }).then(function (response) {
         // console.log(response)
          //console.log("First Commit")

          var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              
              });
          


          function displayList(response){
               $('#coinsListTable').empty()
               
            //     var tabbleHTML = '<tr class="coinItems" > <th> '+"↓"+'</th>'+'<th>'+"Coin"+'</th>'+'<th> '+"Price"+'</th>'+'<th>'+"24h"+'</th>'+'<th> '+"24h Volume"+'</th>'+'<th>'+"Market Cap"+'</th>';

                var tabbleHTML;
                   $(function() {
                              let price24El = "";
                      $.each(response, function(i, item) {

                            i++;
                           // tabbleHTML = '<tr><th>'+"x"+'</th><th></th><th></th><th></th><th></th><th></th></tr>'
                              let marketCapp = item.market_cap;
                              marketCapp = numFormatter(marketCapp);
                              let totalVolumee = item.total_volume;
                              totalVolumee = numFormatter(totalVolumee);
                       
                            tabbleHTML += '<tr><td>' + item.market_cap_rank +'</td><td><img src=' + item.image + ' class="coinImg">' + item.name + '</td><td>' + formatter.format(item.current_price) + '</td><td id="price24' + i + '">' + item.price_change_percentage_24h +'%</td><td>$' + totalVolumee +'</td><td>$' + marketCapp +'</td></tr>';

                            
                            if (i === 100) {
                                  return false;
                            }

                            });

                            $('#coinsListTable').append(tabbleHTML);

                            console.log(response)
                            for(let i = 1; i < response.length + 1; i++){
                              price24El = document.getElementById("price24" + i)
                              // tempStr = tempStr.substring(0, 2);
                              if(price24El.innerText.substring(0,3) > 0){
                                    price24El.style.color = "#5cc069";
                              } else {
                                    price24El.style.color = "#f56e6e";
                              }
            
                            } 


                });

      
                

                //console.log(response)

          }
         displayList(response)

          

         
          let desc = true;

                //const rank_th = document.querySelector(".coinTable th")
                // console.log($("#coinRankTh").innerText)
                // const sort_rank_btn = document.getElementById("coin_rank_btn");
               // console.log(sort_rank_btn.innerText)

               const sort_rank_btn = document.getElementById("coin_rank_btn");
                sort_rank_btn.addEventListener('click', () => {
                let coinArray = sort_array_by(response,'market_cap_rank',desc)
                displayList(coinArray);

                if(!desc){
                      sort_rank_btn.innerText="# ▲";
                }
                else {sort_rank_btn.innerText="# ▼";}

                desc = !desc;
                
                    

                });

                const sort_name_btn = document.getElementById("coin_name_btn");
                sort_name_btn.addEventListener('click', () => {
                let coinArray = sort_array_by(response, 'name', desc)
                displayList(coinArray);

                if(!desc){
                      sort_name_btn.innerText="Coin ▲";
                }
                else {sort_name_btn.innerText="Coin ▼";}

                desc =!desc;
                

                });

                const sort_price_btn = document.getElementById("coin_price_btn");
                sort_price_btn.addEventListener('click', () => {
                let coinArray = sort_array_by(response, 'current_price', desc)
                displayList(coinArray);
                if(!desc){
                      sort_price_btn.innerText="Price ▲";
                }
                else {sort_price_btn.innerText="Price ▼";}
                desc =!desc;
                //sort_price_btn.innerText="↑";

                });

                const sort_24h_btn = document.getElementById("coin_24h_btn");
                sort_24h_btn.addEventListener('click', () => {
                let coinArray = sort_array_by(response, 'price_change_percentage_24h', desc)
                displayList(coinArray);

                if(!desc){
                      sort_24h_btn.innerText="24h ▲";
                }
                else {sort_24h_btn.innerText="24h ▼";}
                desc =!desc;
                

                });

                const sort_24h_volume_btn = document.getElementById("coin_24h_volume_btn");
                sort_24h_volume_btn.addEventListener('click', () => {
                      let coinArray = sort_array_by(response, 'total_volume', desc)
                      displayList(coinArray);
                      if(!desc){
                            sort_24h_volume_btn.innerText="24h Volume ▲";
                      }
                      else {sort_24h_volume_btn.innerText="24h Volume ▼";}

                      desc =!desc;
                      

               

                });
                const sort_marketCap_btn = document.getElementById("coin_marketCap_btn");
                sort_marketCap_btn.addEventListener('click', ()=> {
                      let coinArray = sort_array_by(response, 'market_cap', desc)
                      displayList(coinArray);
                      if(!desc){
                            sort_marketCap_btn.innerText="M-Cap ▲";
                      }
                      else {sort_marketCap_btn.innerText="M-Cap ▼";}

                      desc =!desc;
                      
    
                });



              function sort_array_by (array, sort, desc){
                array.sort(function(a,b) {
                     
                      if (a[sort] < b[sort]){
                            //console.log(desc) 
                            return -1;    
                      } 
                      if (a[sort] > b[sort]) {
                           
                           return 1;
                      }
                      return 0;
                      
                });
                if (desc) array.reverse();
               // console.log(array)
                return array;
          }

    });


})