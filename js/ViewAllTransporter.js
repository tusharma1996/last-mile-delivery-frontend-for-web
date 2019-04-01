$(document).ready(function(){
    const Url = "https://193.168.0.199:3001/api/delivery.Transporter";
        
        $.ajax({
            url: Url,
            type: "GET",
            success: function(result){               
                
                console.log(result);
                var data = result;
                var htmlText = '<table class="table"><tr>'
                htmlText += '<th>Driver Name</th>'
                htmlText += '<th>Transporter Name</th>'
                htmlText += '<th>Vehicle Number</th>'
                htmlText += '<th>Vehicle Id</th>'
                htmlText += '<th>Email Id</th>'
                htmlText += '<th>Current Location</th></tr>'
                for (var key in data){
                    htmlText += '<tr><td>'+data[key].DriverFirstName +' '+data[key].DriverLastName+'</td>'
                    htmlText += '<td>'+data[key].TransporterName+'</td>'
                    htmlText += '<td>'+data[key].VehicleNumber+'</td>'
                    htmlText += '<td>'+data[key].VehicleId+'</td>'
                    htmlText += '<td>'+data[key].emailId+'</td>'
                    htmlText += '<td>'+data[key].location+'</td></tr>'
                    
                }
                htmlText += '</table>'
            /*
                htmlText += '<table><tbody>'
                htmlText += '<tr><th>Driver Name:</th>' + '<td>'+ data[key].DriverFirstName +' '+data[key].DriverLastName + '</td><td>&nbsp&nbsp&nbsp &nbsp</td></tr>';
                htmlText += '<tr><th>Transporter Name:</th>' + '<td>'+ data[key].TransporterName + '</td><td>&nbsp&nbsp&nbsp&nbsp </td></tr>';
                htmlText += '<tr><th>Vehicle Number:e</th>' + '<td>'+ data[key].VehicleNumber + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Vehicle Id:</th>' + '<td>'+ data[key].VehicleId + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Email Id:</th>' + '<td>'+ data[key].emailId + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Current Location:</th>' + '<td>'+ data[key].location + '</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th></th>' + '<td>'+'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr></tbody></table><p></p>';
            */
                
                /*
                htmlText += '<div class="div-conatiner">';
                htmlText += '<p class="p-name" margin-top=0.1em margin-bottom=0.1em> Name: ' + data[key].DriverFirstName +' '+data[key].DriverLastName +'</p>';
                htmlText += '<p class="p-TransporterName" margin-top=0.1em margin-bottom=0.1em> Transporter Name: ' + data[key].TransporterName + '</p>';
                htmlText += '<p class="p-VehicleNumber" margin-top=0.1em margin-bottom=0.1em> Vehicle Number: ' + data[key].VehicleNumber + '</p>';
                htmlText += '<p class="p-VehicleId" margin-top=0.1em margin-bottom=0.1em> Vehicle Id: ' + data[key].VehicleId + '</p>';
                htmlText += '<p class="p-emailId" margin-top=0.1em margin-bottom=0.1em> Vehicle Id: ' + data[key].emailId + '</p>';
                htmlText += '<p class="p-location" margin-top=0.1em margin-bottom=0.1em> Current Location: ' + data[key].location + '</p>';
                htmlText += '</div>';
                */
               
                document.getElementById('ListTransporter').innerHTML = htmlText

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
