$(function () {
    $('#myList a:last-child').tab('show')
})

function getInfo() {
    $.get('https://my-json-server.typicode.com/Kusha25/endterm/shirts', function (resp, status, resp_obj) {
        console.log(status);
        let src = $('#div4-2').val();
	
		
        for (var i = 0; i < resp.length; i++) {
            $('#photos1').html(function (ind, old_value) {
                if (src == resp[i].name) {
                    return "Skin name: " + resp[i].name;
                }
            })
			
			$('#photos1').html(function (ind, old_value) {
                if (src == resp[i].id) {
					 if (src == resp[i].id) {
						 
                    return "Skin id: " + resp[i].id;
                }
            })
			
            $('#photos2').html(function (ind, old_value) {
                if (src == resp[i].id) {
                    $('#photos2').attr('src', resp[i].image);
                }
                 if (src == resp[i].name) {
                    $('#photos2').attr('src', resp[i].image);
                }
            })

            $('#photos3').html(function (ind, old_value) {
                if (src == resp[i].id) {
                    return "price: " + resp[i].price;
                }
            })

            $('#photos4').html(function (ind, old_value) {
                if (src == resp[i].number) {
                    return "Skin id: " + resp[i].number;
                }
            })

        }
    })
}