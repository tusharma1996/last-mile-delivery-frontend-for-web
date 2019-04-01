$(document).ready(function(){
    const Url = "https://193.168.0.199:3001/api/delivery.Warehouse";


    $('.btn-primary').click(function(){
        var data = $('#AddWarehouse').serializeArray()
        var correctData = {"$class":"delivery.Warehouse",
                           "holderId": "Warehouse"+ Math.floor((Math.random()*1000) + 1),
                        }
        for(obj of data){
            correctData[obj.name] = obj.value; 
        }
        // console.log(data)
       // console.log(correctData)

        $.ajax({
            url: Url,
            type: "POST",
            data: correctData,
            success: function(result){
               // console.log(data)
                console.log(result);
                alert('Warehouse added in network');
                location.reload();
            },
            error:function(error){
                console.log(correctData)
                console.log(error.responseText)
            }
        })        
    })

    $('.btn-secondary').click(function(){
        location.reload();
    })
})
    
    /**
    $('#ViewAllWarehouse').click(function(){
        
        $.ajax({
            url: Url,
            type: "GET",
            success: function(result){               
                
                console.log(result);
                var data = result;
                var htmlText = ' '
                for (var key in data){

                htmlText += '<table><tbody">'
                htmlText += '<tr><th>Id:&nbsp&nbsp</th>' + '<td>'+ data[key].id + '</td><td>&nbsp&nbsp&nbsp &nbsp</td></tr>';
                htmlText += '<tr><th>User Id:&nbsp&nbsp</th>' + '<td>'+ data[key].userId + '</td><td>&nbsp&nbsp&nbsp&nbsp </td></tr>';
                htmlText += '<tr><th>Name:&nbsp&nbsp</th>' + '<td>'+ data[key].name + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Address:&nbsp&nbsp</th>' + '<td>'+ data[key].address + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Latitude:&nbsp&nbsp</th>' + '<td>'+ data[key].latitude + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Longitude:&nbsp&nbsp</th>' + '<td>'+ data[key].longitude + '</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Contact Number:&nbsp&nbsp</th>' + '<td>'+ data[key].number +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th><br/></th>' + '<td></td><td></td></tr></tbody></table><p></p>';

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
                
            },
            error:function(error){
                console.log(error.responseText)
            }

        })        
    })
    */
