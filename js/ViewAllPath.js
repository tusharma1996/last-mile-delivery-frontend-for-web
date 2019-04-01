$(document).ready(function(){
    const Url = "https://193.168.0.199:3001/api/delivery.Contract";
        
        $.ajax({
            url: Url,
            type: "GET",
            success: function(result){               
                
                console.log(result);
                var data = result;
                
                var htmlText = ''
                for (var key in data){
                    htmlText += '<table class="table" style="border:1px">'
                    htmlText += '<tr><th>Pincode: '+data[key].pincode+'</th><th colspan="3" style="text-align:center">Hubs</th></tr>'
                    htmlText += '<tr><th>Warehouse Name</th><th>Address</th><th>Latitude</th><th>Longitude</th></tr>'
                    for(var key2 in data[key].hubs){
                    htmlText += '<tr><td>'+data[key].hubs[key2].name+'</td>'
                    htmlText += '<td>'+data[key].hubs[key2].address+'</td>'
                    htmlText += '<td>'+data[key].hubs[key2].latitude+'</td>'
                    htmlText += '<td>'+data[key].hubs[key2].longitude+'</td></tr>'
                    
                    }
                    htmlText += '</table>'            
                }
                document.getElementById('ListPath').innerHTML = htmlText
                // document.getElementById('BTN').innerHTML = "<button id='btn' type='button'>Reset</button>"
                 
                // $('.row').append(htmlText)
             /*   $('#btn').click(function(){
                    location.reload();
                })
            */
            },
            error:function(error){
                console.log(error.responseText)
            }

        })   

})