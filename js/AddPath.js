$(document).ready(function(){
    const Url = "https://193.168.0.199:3001/api/delivery.Contract"
    $('#btn-add').click(function(){
        var html = "";
        html += '<div class="row">'
        html += '<div class="col-sm-12 col-md-4">'
        html += '<div class="form-group">'
        html += '<label for="name">Warehouse Name</label>'
        html += '<input type="text" class="form-control" name="name">'
        html += '</div></div>'
        html += '<div class="col-sm-12 col-md-4">'
        html += '<div class="form-group">'
        html += '<label for="address">Address</label>'
        html += '<input type="text" class="form-control" name="address">'
        html += '</div></div>'
        html += '<div class="col-sm-12 col-md-4">'
        html += '<div class="form-group">'
        html += '<label for="latitude">Latitude</label>'
        html += '<input type="text" class="form-control" name="latitude">'
        html += '</div></div>'
        html += '<div class="col-sm-12 col-md-4">'
        html += '<div class="form-group">'
        html += '<label for="longitude">Longitude</label>'
        html += '<input type="text" class="form-control" name="longitude">'
        html += '</div></div></div>'

        $('.AddPath').append(html)
        console.log('Click on working')
    })
    $('#btn-submit').click(function(){
        var pincode = $('#Pincode').serializeArray()
        var data = $('.AddPath').serializeArray()

        var hubs = []
        var i = 0
        while(data[i] != undefined){
            var hub = Object.create(null);
             hub = {"$class":"delivery.Address"}
            for(var x = 0;x <=3;x++){
                hub[data[i+x].name] = data[i+x].value; 
            }
            hubs.push(hub);
            console.log(hub)
            i += 4;
        }
    
        var correctData = {"$class":"delivery.Contract",
        "contractId": "Contract"+ Math.floor((Math.random()*1000) + 1),
        "pincode":pincode[0].value,
        "hubs": hubs
     }

        $.ajax({
            url: Url,
            type: "POST",
            data: correctData,
            success: function(result){
                console.log(result);
                alert('Path added');
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