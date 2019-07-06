<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Users</title>
<link type="text/css" rel="stylesheet" href="<c:url value="/resources/css/UI Styles.css" />" />
<link href='http://fonts.googleapis.com/css?family=Ropa+Sans' rel='stylesheet'>
<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel='stylesheet'> <!-- for boot strap icons-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script type="text/javascript" src="<c:url value="/resources/javascript/ClientInputValidate.js" />" /></script>
<script type="text/javascript" src="<c:url value="/resources/javascript/Jquery_Crud_ajax.js" />" /></script>
</head>
<body onload="load();">
<div>
		<input type="hidden" id="user_id">
		Name: <input type="text" id="name" required="required" name="user_name"><br>
		Email: <input type="email" id="email" required="required" name="email"><br>
		<button onclick="submit();">Submit</button>
	</div>
	
<br><br><br><br><br><br><br><br>

<div>
		<table id="table" border=1>
			<tr> <th> Name </th> <th> Email </th> <th> Edit </th> <th> Delete </th> </tr>
		
		</table>
			
	</div>
	
	
</body>
</html>

