$("document").ready(function(){
    

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
      var tabbleHTML = '';
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

            }
            displayList(response)

            

            function sort_array_by (array, sort, desc){
                  array.sort(function(a,b) {
                       // console.log(array)
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
            }
            let desc = false;
                const sort_rank_btn = document.getElementById("coin_rank_btn");
                sort_rank_btn.addEventListener('click', 
                () => {
                      let coinArray = sort_array_by(response,'name',desc)
                      //displayList(coinArray);
                      desc = !desc;
                      

                });

      });




})