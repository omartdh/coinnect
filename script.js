$("document").ready(function(){
    

    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        method: "GET",
        
      }).then(function (response) {
            console.log(response)
            //console.log("First Commit")

            var formatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                
                });

            var tabbleHTML = '<tr class="coinItems"> <th> '+"#"+'</th>'+'<th>'+"Coin"+'</th>';
            $(function() {
                  $.each(response, function(i, item) {

                        i++;
                        tabbleHTML += '<tr  class="coinItems"><td>' + item.market_cap_rank +'</td><td><img src=' + item.image + ' class="coinImg">' + item.name + '</td><td>' + formatter.format(item.current_price) + '</td></tr>';
            if (i === 100) {
                  return false;
              }
        });

        $('#coinsListTable').append(tabbleHTML);
        

        


            });



      })



})