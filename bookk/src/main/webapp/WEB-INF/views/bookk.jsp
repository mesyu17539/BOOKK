<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="context" value="<%=request.getContextPath()%>"/>
<html>
<head>
	<title>Home</title>
	
 	<link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
      rel = "stylesheet">
	<link rel="stylesheet" id="wizcss" href="${context}/resources/css/style.css">
	<link rel="stylesheet" href="${context}/resources/css/magnific-popup.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
   	<script src="//d1p7wdleee1q2z.cloudfront.net/post/search.min.js"></script>
	<script src="${context}/resources/js/jquery.magnific-popup.min.js"></script>
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	<script src="${context}/resources/js/app.js"></script>
</head>
<body>
<div id="wrapper">
</div>
</body>
</html>
<script>
	app.init('${context}');
</script>