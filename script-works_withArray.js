$("document").ready(function(){
    

    

            var formatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                
                });
            

///// Jason ////


let products= [
      {
          "prod_name" : "Vitamin A",
          "prod_id" : "V-A1037",
          "retail_price" : 4.99,
          "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "in_stock" : true,
          "photo_src" : "images/products/vitamin-a.jpg"
      },
      {
          "prod_name" : "Vitamin B-Complex",
          "prod_id" : "V-BC2178",
          "retail_price" : 6.99,
          "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "in_stock" : true,
          "photo_src" : "images/products/vitamin-bcomplex.jpg"
      },
      {
          "prod_name" : "Blueberry Mineral Water",
          "prod_id" : "MW-8812",
          "retail_price" : 5.99,
          "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "in_stock" : true,
          "photo_src" : "images/products/mineralwater-blueberry.jpg"
      }
      // {
      //     "prod_name" : "Vitamin C",
      //     "prod_id" : "V-C6614",
      //     "retail_price" : 8.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/vitamin-c.jpg"
      // },
      // {
      //     "prod_name" : "Chocolate Protein Bar",
      //     "prod_id" : "PB-8154",
      //     "retail_price" : 3.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/proteinbar-chocolate.jpg"
      // },
      // {
      //     "prod_name" : "Calcium Vitamin",
      //     "prod_id" : "V-CA4543",
      //     "retail_price" : 12.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/vitamin-calcium.jpg"
      // },
      // {
      //     "prod_name" : "Vitamin D",
      //     "prod_id" : "V-D1825",
      //     "retail_price" : 9.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/vitamin-d.jpg"
      // },
      // {
      //     "prod_name" : "Flaxseed Oil Vitamin",
      //     "prod_id" : "V-F2225",
      //     "retail_price" : 6.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/vitamin-flaxseed-oil.jpg"
      // },
      // {
      //     "prod_name" : "Iron Vitamin",
      //     "prod_id" : "V-I7456",
      //     "retail_price" : 7.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/vitamin-iron.jpg"
      // },
      // {
      //     "prod_name" : "Lemon Lime Mineral Water",
      //     "prod_id" : "MW-9143",
      //     "retail_price" : 2.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/mineralwater-lemonlime.jpg"
      // },
      // {
      //     "prod_name" : "Magnesium Vitamin",
      //     "prod_id" : "V-M0019",
      //     "retail_price" : 6.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/vitamin-magnesium.jpg"
      // },
      // {
      //     "prod_name" : "Multi-vitamin",
      //     "prod_id" : "V-MV7763",
      //     "retail_price" : 9.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/vitamin-multi.jpg"
      // },
      // {
      //     "prod_name" : "Peanut Butter Protein Bar",
      //     "prod_id" : "PB-1234",
      //     "retail_price" : 3.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/proteinbar-peanutbutter.jpg"
      // },
      // {
      //     "prod_name" : "Strawberry Mineral Water",
      //     "prod_id" : "MW-S0987",
      //     "retail_price" : 2.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/mineralwater-strawberry.jpg"
      // },
      // {
      //     "prod_name" : "Lemon Protein Bar",
      //     "prod_id" : "PB-1919",
      //     "retail_price" : 3.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/proteinbar-lemon.jpg"
      // },
      // {
      //     "prod_name" : "Orange Mineral Water",
      //     "prod_id" : "MW-O1980",
      //     "retail_price" : 2.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/mineralwater-orange.jpg"
      // },
      // {
      //     "prod_name" : "Peach Mineral Water",
      //     "prod_id" : "MW-P1968",
      //     "retail_price" : 2.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/mineralwater-peach.jpg"
      // },
      // {
      //     "prod_name" : "Raspberry Mineral Water",
      //     "prod_id" : "MW-R2003",
      //     "retail_price" : 2.99,
      //     "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     "in_stock" : true,
      //     "photo_src" : "images/products/mineralwater-raspberry.jpg"
      // }        
  ]

  ///// end Jason ////
function displayList(products){
      $('#coinsListTable').empty()
      var tabbleHTML = '';
                  $(function() {
                        $.each(products, function(i, item) {

                              i++;
                              tabbleHTML += '<tr  class="coinItems"><td>' + item.prod_id +'</td><td><img src=' + item.photo_src + ' class="coinImg">' + item.prod_name + '</td><td>' + formatter.format(item.retail_price) + '</td></tr>';
                              if (i === 20) {
                                    return false;
                              }
                              });

                              $('#coinsListTable').append(tabbleHTML);
            

            


                  });

            }
            displayList(products)
            //console.log(products.sort())

            

           



            let desc = false;


                const sort_rank_btn = document.getElementById("coin_rank_btn");


                sort_rank_btn.addEventListener('click', 
                () => {
                      let coinArray = sort_array_by(products,'retail_price',desc)
                      displayList(coinArray);
                      desc = !desc;
                     
                     
                   console.log(coinArray)
                      console.log(desc) 

                });

    
 function sort_array_by (array, sort, desc){
                  array.sort(function(a,b) {
                       
                        if (a[sort] < b[sort]){
                              //console.log(a[sort]) 
                              //console.log(array)
                              return -1;    
                        } 
                        if (a[sort] > b[sort]) {
                              //console.log(array)
                             return 1;
                        }
                        return 0;
                        
                  });
                  if (desc) array.reverse();
                  return array;
            }



})