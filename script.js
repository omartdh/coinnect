$("document").ready(function(){
    

    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        method: "GET",
        
      }).then(function (response) {
            console.log(response)
            console.log("testing branch")

            var formatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                
                });
            


            function displayList(response){
                 $('#coinsListTable').empty()
                 
                  // var tabbleHTML = '<tr class="coinItems" > <th> '+"↓"+'</th>'+'<th>'+"Coin"+'</th>'+'<th> '+"Price"+'</th>'+'<th>'+"24h"+'</th>'+'<th> '+"24h Volume"+'</th>'+'<th>'+"Market Cap"+'</th>';

                  var tabbleHTML;
                              $(function() {
                        $.each(response, function(i, item) {

                              i++;
                             // tabbleHTML = '<tr><th>'+"x"+'</th><th></th><th></th><th></th><th></th><th></th></tr>'
                         
                              tabbleHTML += '<tr><td>' + item.market_cap_rank +'</td><td><img src=' + item.image + ' class="coinImg">' + item.name + '</td><td>' + formatter.format(item.current_price) + '</td><td>' + item.price_change_percentage_24h +'\%</td><td>' + formatter.format(item.total_volume) +'</td><td>' + formatter.format(item.market_cap) +'</td></tr>';
                              if (i === 100) {
                                    return false;
                              }
                              });

                              $('#coinsListTable').append(tabbleHTML);
            

            


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
                              sort_marketCap_btn.innerText="Market Cap ▲";
                        }
                        else {sort_marketCap_btn.innerText="Market Cap ▼";}

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