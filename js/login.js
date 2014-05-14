jQuery(function($) {  

  $( "#login_btn" ).on("touchend",function() {
  
 
$.ajax({
url:"http://meerkat.buzz4healthtest.c66.me/api/v1/sessions",
type: 'POST', 
contentType: "application/javascript",
data: {"user[email]": "shubhamjaiswal1860@gmail.com","user[password]":"shubham" },
dataType: 'JSONP', 
async : true,
crossDomain: true, 
jsonp: 'callback',
jsonpCallback: 'jsonpCallback', 
success: function(res)
{
alert("Success" );
},
error: function (error) 
{ 
alert('ERROR has occurred!');
alert(JSON.stringify(error))
}
});
});
});
