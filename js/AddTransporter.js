$(document).ready(function(){
    const Url = "https://193.168.0.199:3001/api/delivery.Transporter";

    $('.btn-primary').click(function(){
        var data = $('#AddTransporter').serializeArray()
        var correctData = {"$class":"delivery.Transporter",
                           "holderId": "Transporter"+ Math.floor((Math.random()*1000) + 1),
                           "location": "",
                        }
        for(obj of data){
            correctData[obj.name] = obj.value; 
        }
        
        $.ajax({
            url: Url,
            type: "POST",
            data: correctData,
            success: function(result){
               // console.log(data)
                console.log(result);
                alert('Transporter added in network');
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
    $('#ViewAllTransporter').click(function(){
        
        $.ajax({
            url: Url,
            type: "GET",
            success: function(result){               
                
                console.log(result);
                var data = result;
                var htmlText = ' '
                for (var key in data){

               // htmlText += '<div>';
                htmlText += '<table><tbody">'
                htmlText += '<tr><th>Driver Name:</th>' + '<td>'+ data[key].DriverFirstName +' '+data[key].DriverLastName + '</td><td>&nbsp&nbsp&nbsp &nbsp</td></tr>';
                htmlText += '<tr><th>Transporter Name:</th>' + '<td>'+ data[key].TransporterName + '</td><td>&nbsp&nbsp&nbsp&nbsp </td></tr>';
                htmlText += '<tr><th>Vehicle Number:e</th>' + '<td>'+ data[key].VehicleNumber + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Vehicle Id:</th>' + '<td>'+ data[key].VehicleId + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Email Id:</th>' + '<td>'+ data[key].emailId + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Current Location:</th>' + '<td>'+ data[key].location + '</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th></th>' + '<td>'+'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr></tbody></table><p></p>';
                // htmlText += '</div>';
                
                /*
                htmlText += '<div class="div-conatiner">';
                htmlText += '<p class="p-name" margin-top=0.1em margin-bottom=0.1em> Name: ' + data[key].DriverFirstName +' '+data[key].DriverLastName +'</p>';
                htmlText += '<p class="p-TransporterName" margin-top=0.1em margin-bottom=0.1em> Transporter Name: ' + data[key].TransporterName + '</p>';
                htmlText += '<p class="p-VehicleNumber" margin-top=0.1em margin-bottom=0.1em> Vehicle Number: ' + data[key].VehicleNumber + '</p>';
                htmlText += '<p class="p-VehicleId" margin-top=0.1em margin-bottom=0.1em> Vehicle Id: ' + data[key].VehicleId + '</p>';
                htmlText += '<p class="p-emailId" margin-top=0.1em margin-bottom=0.1em> Vehicle Id: ' + data[key].emailId + '</p>';
                htmlText += '<p class="p-location" margin-top=0.1em margin-bottom=0.1em> Current Location: ' + data[key].location + '</p>';
                htmlText += '</div>';
                
                }
                document.getElementById('ListTransporter').innerHTML = htmlText
                document.getElementById('change1').innerHTML = "All Transporters"
                document.getElementById('change2').innerHTML = "Transporter Details"
                document.getElementById('change3').innerHTML = " "
                // document.getElementById('BTN').innerHTML = "<button id='btn' type='button'>Reset</button>"
                 
                // $('.row').append(htmlText)
             /*   $('#btn').click(function(){
                    location.reload();
                })
            
            },
            error:function(error){
                console.log(error.responseText)
            }

        })        
    })
    */
