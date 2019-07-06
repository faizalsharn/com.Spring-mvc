data = "";// defining data variable of type object//
	submit = function(){  // this function will load on submit//
		 
			$.ajax({ // defining the below function as ajax responsive//
				url:'saveOrUpdate', // the function that process the  mapped url name and matching type is going to receive the data//
				type:'POST',
				data:{user_id:$("#user_id").val(),user_name:$('#name').val(),email:$('#email').val()},// function to get the value from jsp page and send it to mapped class function//
				success: function(response){// if the backend process is success then the function will run by getting the response as its parameter//
						alert(response.message);
						load();		//finally calling the load function//
				}				
			});			
	}
	
	delete_ = function(id){		 
		 $.ajax({
			url:'delete',
			type:'POST',
			data:{user_id:id},//assigning the id from parameter to user_id and sending user_id data//
			success: function(response){
					alert(response.message);
					load();
			}				
		});
}
	

	edit = function (index){ //getting the index as parameter
		$("#user_id").val(data[index].user_id); // assigning the index's user_id to the user_id in the database//
		$("#name").val(data[index].user_name);// assigning the index's user_name to the user_name in the database//
		$("#email").val(data[index].email);// assigning the index's email to the email in the database//
		
	}
	
	
	load = function(){// function to load the altered database table content	
		$.ajax({
			url:'list',
			type:'POST',
			success: function(response){ // once the mapped function successfully loads catching the response
			data = response.data;
		     $('.tr').remove();   //removing the rows from the response which contains altered table data//
			for(i=0; i<response.data.length; i++){	
				//printing all values in a table//
$("#table").append("<tr class='tr'> <td> "+response.data[i].user_name+" </td> <td> "+response.data[i].email+
		
		" </td> <td> <a href='#' onclick= edit("+i+");> " +"Edit </a>  </td> </td> " +
				"<td> <a href='#' onclick='delete_("+response.data[i].user_id+");'> Delete </a>  </td> </tr>");

/*once the values are printed defining two hyperlink with name edit and delete in the same table which onclick invokes the repective
function */
			}			
			}				
		});
		
	}

