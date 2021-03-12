$(function () {
    $('#myList a:last-child').tab('show')
})

function getInfo() {
    $.get('', function (resp, status, resp_obj) {
        console.log(status);
		
        let src = $('#div4-1').val();
		let src1 = $('#div4-2').val();		
		let src2 = $('#div4-3').val();
/*

		for( var i=0;i<resp.length;i++){
		if(resp[i].id === src2) 
		{ 
		idof = i; 
		break;
		}
		}
		console.log(idof);
*/

		for(var i = 0; i< src2; i++){
			
				
			$('#photos1').html(function (ind, old_value) {
			
			if(resp[i].id == src2){
				if(resp[i].email == src1){
					if(resp[i].user == src){
					return "this account uzhe bar";
					}
					else {
						return "id ok , email ok , name bar Saksh mal";
					}
				}
				else{
					return "id is ok but email already in db";
				}
				}
			else {
				return "Elduha krasavchik bul account zhok";
			}
			})
		}	
		
		
		/*if(resp[i].email == src1){
					if(resp[i].user == src){
						return "Fuck you!";						
					}
					else{
						return "Qotaq";
					}						
				}
				else{
					return "you are mal";
				}
	*/

		
        /*for (var i = 0; i < resp.length; i++) {
            $('#photos1').html(function (ind, old_value) {
				
                if (src1 == resp[i].email) {	 
						  return resp[i].id;
                }
				
				/* else if(src != resp[i].user && src1 == resp[i].email)
				{
					return "This email is busy, but name is free"
				}
				
				else if(src == resp[i].user && src1 != resp[i].email)
				{
					return "This name is busy, but email is free"\
				} 
				
				
				else {
					return "Autentification is done!"
				}
				
            })
				
        }*/
		
		
    })
}