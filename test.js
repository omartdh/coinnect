$("document").ready(function(){
    

    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        method: "GET",
        
      }).then(function (response) {
            //console.log(response)
            //console.log("First Commit")

            var formatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                
                });



            const coin_list = document.querySelector(".list");

            const sort_rank_btn = document.querySelector(".list-option .sort-rank");
            const sort_name_btn = document.querySelector(".list-option .sort-name");
            const sort_price_btn = document.querySelector(".list-option .sort-price");
            const sort_24h_btn = document.querySelector(".list-option .sort-24h");
            const sort_24h_volume_btn = document.querySelector(".list-option .sort-24h-Volume");
            const sort_market_cap_btn = document.querySelector(".list-option .sort-marketCap");


            let desc = false;


            sort_rank_btn.addEventListener('click', () => {
                  let array = sort_array_by(response, 'market_cap_rank', desc)
                  displayList(array);

                  desc =!desc;

            });

            sort_name_btn.addEventListener('click', ()=> {
                  let array = sort_array_by(response, 'name', desc)
                  displayList(array);

                  desc =!desc;

            });

            sort_price_btn.addEventListener('click', ()=> {
                  let array = sort_array_by(response, 'current_price', desc)
                  displayList(array);

                  desc =!desc;

            });

            sort_24h_btn.addEventListener('click', ()=> {
                  let array = sort_array_by(response, 'price_change_percentage_24h', desc)
                  displayList(array);

                  desc =!desc;

            });

            sort_24h_volume_btn.addEventListener('click', ()=> {
                  let array = sort_array_by(response, 'total_volume', desc)
                  displayList(array);

                  desc =!desc;

            });

            sort_market_cap_btn.addEventListener('click', ()=> {
                  let array = sort_array_by(response, 'market_cap', desc)
                  displayList(array);

                  desc =!desc;

            });

            function sort_array_by (array, sort, desc){
                  array.sort(function(a,b) {
                        if (a[sort] < b[sort]) return -1;
                        if (a[sort] > b[sort]) return 1;
                        return 0;
                        
                  });
                  if (desc) array.reverse();
            }

            function displayList (array =[]){
                  coin_list.innerhtml = "";
            for (let i=0; i < array.length; i++){
                  let item = array[i];

                  let item_element = document.createElement("div");
                  item_element.classList.add("list-item");


//////////////////// construct items 

                  let coin_rank = document.createElement("div");
                  coin_rank.classList.add("item-rank");
                  coin_rank.innerText = item.market_cap_rank;
                  
                  item_element.appendChild(coin_rank);

                  
                  let coin_name = document.createElement("div");
                  coin_name.classList.add("item-name");
                  coin_name.innerHTML = '<img src=' + item.image + ' class="coinImg"></img>' + item.name;
                  // coin_name.innerText = item.name;

                  item_element.appendChild(coin_name);


                  let coin_price = document.createElement("div");
                  coin_price.classList.add("item-price");
                  coin_price.innerText = formatter.format(item.current_price);
                  
                  item_element.appendChild(coin_price);


                  let coin_24h = document.createElement("div");
                  coin_24h.classList.add("item-24h");
                  coin_24h.innerText = item.price_change_percentage_24h;
                  
                  item_element.appendChild(coin_24h);


                  let coin_24h_volume = document.createElement("div");
                  coin_24h_volume.classList.add("item-price");
                  coin_24h_volume.innerText = item.total_volume;
                  
                  item_element.appendChild(coin_24h_volume);
                  
                  
                  
                  
                  let coin_market_cap = document.createElement("div");
                  coin_market_cap.classList.add("item-price");
                  coin_market_cap.innerText = item.market_cap;
                  
                  item_element.appendChild(coin_market_cap);


///////////////////////// Append to the list items 

                  coin_list.appendChild(item_element)
                  

            }
            
            }

            displayList(response)




            var tabbleHTML = '<tr class="coinItems"> <th> '+"#"+'</th>'+'<th>'+"Coin"+'</th>';
            $(function() {
                  $.each(response, function(i, item) {

                        i++;
                        tabbleHTML += '<tr  class="coinItems"><td>' + item.market_cap_rank +'</td><td><img src=' + item.image + ' class="coinImg">' + item.name + '</td><td>' + formatter.format(item.current_price) + '</td></tr>';
            if (i === 20) {
                  return false;
              }
        });

        $('#coinsListTable').append(tabbleHTML);
        

        


            });



      })



})


// function disarry(response){

//       response.sort(function(a,b) {
//             //if (a.market_cap_rank < b.market_cap_rank) return -1;
//             if (a.market_cap_rank > b.market_cap_rank) return 1;
//             return 0;
            
            
//       });


//             var tabbleHTML = '<tr class="coinItems"> <th> '+"#"+'</th>'+'<th>'+"Coin"+'</th>';
//             $(function() {
//                   $.each(response, function(i, item) {

//                         i++;
//                         tabbleHTML += '<tr  class="coinItems"><td>' + item.market_cap_rank +'</td><td><img src=' + item.image + ' class="coinImg">' + item.name + '</td><td>' + formatter.format(item.current_price) + '</td></tr>';
//             if (i === 20) {
//                   return false;
//               }
//         });

//         $('#coinsListTable').append(tabbleHTML);
        

        


//             });

//       }