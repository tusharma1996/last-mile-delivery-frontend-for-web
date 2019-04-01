$(document).ready(function(){
    const Url = "https://193.168.0.199:3001/api/delivery.Warehouse";
        
        $.ajax({
            url: Url,
            type: "GET",
            success: function(result){               
                
                console.log(result);
                var data = result;
                var htmlText = '<table class="table"><tr>'
                htmlText += '<th>Id</th>'
                htmlText += '<th>User Id</th>'
                htmlText += '<th>Name</th>'
                htmlText += '<th>Address</th>'
                htmlText += '<th>Latitude</th>'
                htmlText += '<th>Longitude</th>'
                htmlText += '<th>Contact Number</th></tr>'

                for (var key in data){
                    htmlText += '<tr><td>'+data[key].id+'</td>'
                    htmlText += '<td>'+data[key].userId+'</td>'
                    htmlText += '<td>'+data[key].name+'</td>'
                    htmlText += '<td>'+data[key].address+'</td>'
                    htmlText += '<td>'+data[key].latitude+'</td>'
                    htmlText += '<td>'+data[key].longitude+'</td>'
                    htmlText += '<td>'+data[key].number+'</td></tr>'
                /*
                htmlText += '<table><tbody">'
                htmlText += '<tr><th>Id:&nbsp&nbsp</th>' + '<td>'+ data[key].id + '</td><td>&nbsp&nbsp&nbsp &nbsp</td></tr>';
                htmlText += '<tr><th>User Id:&nbsp&nbsp</th>' + '<td>'+ data[key].userId + '</td><td>&nbsp&nbsp&nbsp&nbsp </td></tr>';
                htmlText += '<tr><th>Name:&nbsp&nbsp</th>' + '<td>'+ data[key].name + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Address:&nbsp&nbsp</th>' + '<td>'+ data[key].address + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Latitude:&nbsp&nbsp</th>' + '<td>'+ data[key].latitude + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Longitude:&nbsp&nbsp</th>' + '<td>'+ data[key].longitude + '</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Contact Number:&nbsp&nbsp</th>' + '<td>'+ data[key].number +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th><br/></th>' + '<td></td><td></td></tr></tbody></table><p></p>';
                */

                }
                // document.getElementById('BTN').innerHTML = "<button id='btn' type='button'>Reset</button>"
                document.getElementById('ListWarehouse').innerHTML = htmlText
                document.getElementById('change1').innerHTML = "All Warehouses"
                document.getElementById('change2').innerHTML = "Warehosue Details"
                document.getElementById('change3').innerHTML = " "
                 
               /*
                $('.row').append(htmlText)
                $('#btn').click(function(){
                    location.reload();
                })
                */
            },
            error:function(error){
                console.log(error.responseText)
            }

        })        
})