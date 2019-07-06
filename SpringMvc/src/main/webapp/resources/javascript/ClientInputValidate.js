function validate()
{
var email=document.getElementById("email").value;
var pass=document.getElementById("pass").value;
var atposition = email.indexOf("@");
 var  dotposition = email.lastIndexOf(".");


if (atposition < 1 || ( dotposition - atposition< 2 )) 
   /* if user gives email which starts with @ or if there is no words inbetween (@) and (.)  */
   {
      alert("Please enter correct email ID");
      
   }

else if(pass.length <8)
{alert("Incorrect password");}

else{alert(email);
alert(pass);
alert("form submission successful");}
}

function validate2()
{
  var R_name=document.getElementById("R_name").value;
var R_email=document.getElementById("R_email").value;
var R_number=document.getElementById("R_number").value;
var R_pass=document.getElementById("R_pass").value;
var R_password=document.getElementById("Rc_pass").value;
var re = /[0-9]/;
var atposition = R_email.indexOf("@");
var  dotposition = R_email.lastIndexOf(".");

if(R_name =="" ||R_email==""||R_number==""||R_pass=="" ||R_password=="")
{alert("please fill the form");}
else if(R_name.length<3)
{alert("name is too short");}
else if (atposition < 1 || ( dotposition - atposition< 2 )) 
	   /* if user gives email which starts with @ or if there is no words inbetween (@) and (.)  */
	   {
	      alert("Please enter correct email ID");
	      
	   }
else if(R_number.length<6)
{alert("number is too short");}

else if(R_pass.length<8)
	{alert("password should have minimum 8 characters");}

else if (!re.test(R_pass)) {
    alert("Error: password must contain at least one number (0-9)!");
      }
else if (R_password!==R_pass )
	{alert("passwords do not match");}
else{
alert(R_name);
alert(R_email);
alert(R_number);
alert(R_pass);
alert(R_password);
alert("registered successfully");
}}
